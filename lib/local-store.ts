import {z} from 'zod';
import {initialProfile} from './grants';
import {zonedDate} from './model';

export const STORAGE_KEY='grant-radar-public-workspace-v1';
export const MAX_BACKUP_BYTES=4_000_000;
const text=z.string().max(12000);
const timezone=z.string().max(100).refine(value=>{try{new Intl.DateTimeFormat('en',{timeZone:value});return true;}catch{return false;}},'Invalid time zone');
const date=z.string().max(16).refine(value=>!value||/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value));
const url=z.string().max(2000).refine(value=>!value||/^https?:\/\//i.test(value)&&!/[\r\n]/.test(value),'Use an HTTP or HTTPS URL');
const days=z.array(z.number().int().min(1).max(365)).max(10);
export const profileSchema=z.object({name:text,institution:text,role:text,country:text,state:text,citizenship:text,canadianAppointment:z.enum(['unknown','yes','no']),taiwanStatus:z.enum(['citizen','other','unknown']),taiwanAppointment:z.enum(['unknown','yes','no']),website:url,keywords:text,tenure:z.enum(['unknown','yes','no']),priorCareer:z.enum(['unknown','yes','no']),timezone,reminderDays:days,audience:z.enum(['faculty','students','both']).default('both'),supportInterests:z.array(z.enum(['Grant','Research award','Compute','Fellowship','Scholarship','Assistantship','Research visit'])).max(7).default([]),setupComplete:z.boolean().default(false)});
export const proposalSchema=z.object({id:z.string().min(1).max(100),grantId:z.string().max(120),title:z.string().trim().min(1).max(500),agency:z.string().max(300),deadline:date,internalDeadline:date,timezone,deadlineKind:z.enum(['funder','personal']),status:z.enum(['saved','writing','review','submitted']),notes:text,checks:z.array(z.string().max(300)).max(20),url,reminderDays:days,createdAt:z.string().datetime()}).superRefine((p,ctx)=>{for(const key of ['deadline','internalDeadline'] as const){if(p[key])try{zonedDate(p[key],p.timezone);}catch{ctx.addIssue({code:'custom',path:[key],message:'Invalid deadline or daylight-saving clock gap'});}}});
const proposalsSchema=z.array(proposalSchema).max(2000).refine(rows=>new Set(rows.map(p=>p.id)).size===rows.length,'Duplicate proposal IDs');
const stateSchema=z.object({profile:profileSchema,proposals:proposalsSchema});
export const backupSchema=z.object({format:z.literal('grant-radar-public'),version:z.literal(1),exportedAt:z.string().datetime(),profile:profileSchema,proposals:proposalsSchema});
export type WorkspaceState=z.infer<typeof stateSchema>;
export type Backup=z.infer<typeof backupSchema>;
export interface StorageLike {getItem(key:string):string|null;setItem(key:string,value:string):void;}

export function parseBackup(raw:string):Backup {
  if(new TextEncoder().encode(raw).length>MAX_BACKUP_BYTES)throw Error('Backup exceeds the 4 MB limit.');
  try{return backupSchema.parse(JSON.parse(raw));}catch{throw Error('This is not a valid Grant Radar Public v1 backup. No data was changed.');}
}

export class LocalWorkspace {
  constructor(private storage:StorageLike,private zone='America/New_York'){}
  read():WorkspaceState {
    let raw:string|null;
    try{raw=this.storage.getItem(STORAGE_KEY);}catch{throw Error('Browser storage is unavailable. Allow site storage to save your workspace.');}
    if(raw===null)return {profile:profileSchema.parse({...initialProfile,timezone:this.zone,reminderDays:[...initialProfile.reminderDays]}),proposals:[]};
    try{const state=stateSchema.parse(JSON.parse(raw));if(!state.profile.setupComplete&&!state.profile.name&&!state.profile.institution&&!state.profile.role&&state.profile.keywords==='Statistics, Machine learning')state.profile.keywords='';return state;}catch{throw Error('Saved data could not be read. It has been preserved. Use Backups to download the stored data before troubleshooting.');}
  }
  private save(state:WorkspaceState):WorkspaceState {
    const valid=stateSchema.parse(state);
    try{this.storage.setItem(STORAGE_KEY,JSON.stringify(valid));}catch{throw Error('Save failed: browser storage is blocked or full. Your existing saved data was not replaced. Export a backup and check browser storage.');}
    return valid;
  }
  update(action:string,value?:unknown,id?:unknown):WorkspaceState {
    const current=this.read();
    if(action==='profile')return this.save({...current,profile:profileSchema.parse(value)});
    if(action==='proposal'){
      const proposal=proposalSchema.parse(value);
      return this.save({...current,proposals:[...current.proposals.filter(p=>p.id!==proposal.id),proposal]});
    }
    if(action==='remove')return this.save({...current,proposals:current.proposals.filter(p=>p.id!==z.string().min(1).max(100).parse(id))});
    throw Error('Unsupported local action');
  }
  export():Backup{return {format:'grant-radar-public',version:1,exportedAt:new Date().toISOString(),...this.read()};}
  merge(input:unknown,includeProfile:boolean){
    const incoming=backupSchema.parse(input),current=this.read();
    const ids=new Set(current.proposals.map(p=>p.id));
    const added=incoming.proposals.filter(p=>!ids.has(p.id));
    this.save({profile:includeProfile?incoming.profile:current.profile,proposals:[...current.proposals,...added]});
    return {added:added.length,kept:incoming.proposals.length-added.length};
  }
  raw(){return this.storage.getItem(STORAGE_KEY);}
}
