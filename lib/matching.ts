import type {Grant,Profile} from './grants';

export const supportTypes=['Grant','Research award','Compute','Fellowship','Scholarship','Assistantship','Research visit'];
export function profileReady(profile:Profile){return profile.setupComplete&&!!profile.keywords.trim()&&!!profile.institution.trim()&&!!profile.country.trim()&&!!profile.role.trim();}
export function keywords(profile:Profile){return [...new Set(profile.keywords.split(/[,;\n]/).map(s=>s.trim()).filter(Boolean))];}
const clean=(s:string)=>s.toLowerCase().normalize('NFKC').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const aliases:Record<string,string[]>={ml:['machine learning'],ai:['artificial intelligence'],llm:['large language models','llm'],gpu:['gpu','accelerated computing'],hpc:['high performance computing','scientific computing']};
function containsPhrase(text:string,phrase:string){return (' '+text+' ').includes(' '+phrase+' ');}
export function matchGrant(g:Grant,p:Profile){
 const corpus=clean([g.title,g.summary,...g.tags].join(' '));
 const hits=keywords(p).filter(word=>[clean(word),...(aliases[clean(word)]||[])].some(term=>containsPhrase(corpus,term)));
 return {hits,value:hits.length,label:hits.length>1?'Multiple topic matches':hits.length?'Topic match':'No topic match'};
}
export function countryCode(country:string){const c=clean(country);return ['us','usa','united states','united states of america'].includes(c)?'US':['ca','canada'].includes(c)?'CA':c;}
export function matchContext(g:Grant,p:Profile,studentView=false){
 if(!profileReady(p))return false;
 if(studentView?g.audience==='faculty':p.audience!=='both'&&g.audience!=='both'&&g.audience!==p.audience)return false;
 if(p.supportInterests.length&&!p.supportInterests.includes(g.support))return false;
 if(g.institutionCountry&&countryCode(p.country)!==g.institutionCountry)return false;
 if(g.canadianAppointment&&countryCode(p.country)!=='CA'&&p.canadianAppointment!=='yes')return false;
 if(g.id==='nsf-career'&&(p.tenure==='no'||p.priorCareer==='yes'))return false;
 return true;
}
export function recommend(g:Grant,p:Profile,studentView=false){return matchContext(g,p,studentView)&&matchGrant(g,p).value>0;}
export function researchSearch(p:Profile){return [keywords(p).join(' OR '),'research funding grants',p.country].filter(Boolean).join(' ');}
