import {LocalWorkspace} from './local-store';

export function workspaceStore(){
  // Access lazily so blocked storage does not prevent the public catalog loading.
  const storage={getItem:(key:string)=>localStorage.getItem(key),setItem:(key:string,value:string)=>localStorage.setItem(key,value)};
  return new LocalWorkspace(storage,Intl.DateTimeFormat().resolvedOptions().timeZone||'America/New_York');
}
export async function localWrite<T>(action:()=>T):Promise<T>{
  return navigator.locks ? navigator.locks.request('grant-radar-public-write',action) : action();
}
export const researchRequest:typeof fetch=async(input,init)=>{
  try{
    if(String(input)!=='/api/state')throw Error('Only browser-local workspace operations are supported.');
    const store=workspaceStore();
    if(!init?.method||init.method==='GET')return Response.json(store.read());
    if(init.method!=='POST'||typeof init.body!=='string')throw Error('Unsupported local request');
    const {action,value,id}=JSON.parse(init.body);
    await localWrite(()=>store.update(action,value,id));
    return Response.json({ok:true});
  }catch(error){return Response.json({error:error instanceof Error?error.message:'Local storage failed.'},{status:400});}
};
