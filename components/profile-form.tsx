import {Profile} from '../lib/grants';
import {supportTypes} from '../lib/matching';

export function ProfileForm({profile,setProfile,onSave,saving,ready}:{profile:Profile;setProfile:(p:Profile)=>void;onSave:()=>void;saving:boolean;ready:boolean}){
 const update=(key:keyof Profile,value:unknown)=>setProfile({...profile,[key]:value});
 return <div className="profilelayout"><section className="surface">
  <div className="sectionhead"><h2>Your research profile</h2><span className="badge blue">Only in this browser</span></div>
  <p className="subtle">Tell us about your own research. Fields marked * are required to find matches.</p>
  <form className="formgrid" onSubmit={event=>{event.preventDefault();onSave();}}>
   <label>Display name (optional)<input value={profile.name} onChange={e=>update('name',e.target.value)} autoComplete="off"/></label>
   <label>Position / career stage *<input required value={profile.role} onChange={e=>update('role',e.target.value)} placeholder="Your current role"/></label>
   <label className="wide">Institution / organization *<input required value={profile.institution} onChange={e=>update('institution',e.target.value)} placeholder="Your institution, organization, or independent affiliation"/></label>
   <label>Institution country *<input required value={profile.country} onChange={e=>update('country',e.target.value)} placeholder="Country where you work or study"/></label>
   <label>State / province (optional)<input value={profile.state} onChange={e=>update('state',e.target.value)}/></label>
   <label className="wide">Research keywords *<textarea required rows={3} value={profile.keywords} onChange={e=>update('keywords',e.target.value)} placeholder="Enter your own topics, separated by commas"/><small>Use specific topics and common subject names. Nothing is filled in for you.</small></label>
   <label className="wide">Who are you finding opportunities for?<select value={profile.audience} onChange={e=>update('audience',e.target.value)}><option value="both">Researchers and students</option><option value="faculty">Faculty / research staff</option><option value="students">Students</option></select></label>
   <fieldset className="wide support-options"><legend>Support you need (leave unchecked for all types)</legend>{supportTypes.map(type=><label key={type}><input type="checkbox" checked={profile.supportInterests.includes(type)} onChange={e=>update('supportInterests',e.target.checked?[...profile.supportInterests,type]:profile.supportInterests.filter(v=>v!==type))}/>{type==='Compute'?'Compute & API credits':type}</label>)}</fieldset>
   <label className="wide">Default time zone<input required value={profile.timezone} onChange={e=>update('timezone',e.target.value)}/></label>
   <details className="wide eligibility-fields"><summary>Optional eligibility details & reminders</summary><div className="formgrid">
    <label className="wide">Citizenship(s) (optional)<input value={profile.citizenship} onChange={e=>update('citizenship',e.target.value)}/></label>
    <label>Eligible Canadian appointment?<select value={profile.canadianAppointment} onChange={e=>update('canadianAppointment',e.target.value)}><option value="unknown">Not confirmed</option><option value="yes">Yes — verify program rules</option><option value="no">No</option></select></label>
    <label>Current Taiwan appointment?<select value={profile.taiwanAppointment} onChange={e=>update('taiwanAppointment',e.target.value)}><option value="unknown">Not confirmed</option><option value="yes">Yes — verify program rules</option><option value="no">No</option></select></label>
    <label>Untenured, at least 50% tenure-track assistant professor?<select value={profile.tenure} onChange={e=>update('tenure',e.target.value)}><option value="unknown">Not confirmed</option><option value="yes">Yes</option><option value="no">No</option></select></label>
    <label>Previously received NSF CAREER?<select value={profile.priorCareer} onChange={e=>update('priorCareer',e.target.value)}><option value="unknown">Not confirmed</option><option value="yes">Yes</option><option value="no">No</option></select></label>
    <fieldset className="wide support-options"><legend>Reminder days before new proposal deadlines</legend>{[30,14,7,1].map(day=><label key={day}><input type="checkbox" checked={profile.reminderDays.includes(day)} onChange={e=>update('reminderDays',e.target.checked?[...profile.reminderDays,day]:profile.reminderDays.filter(v=>v!==day))}/>{day} {day===1?'day':'days'}</label>)}</fieldset>
   </div></details>
   <div className="wide"><button className="button primary" type="submit" disabled={!ready||saving}>{saving?'Saving…':'Save profile & find my opportunities'}</button></div>
  </form>
 </section><aside><section className="surface profile-help"><h2>A workspace of your own</h2><p>Your profile starts blank. Add your field, institution, career stage and the kind of support you need.</p><ol><li>Save your profile.</li><li>Review topic matches and program requirements.</li><li>Track your own opportunities and export reminders.</li></ol><p>Matching uses the public program directory. Its coverage is currently strongest in science, AI and research computing. If your field is not covered, use the external search links and add an opportunity yourself.</p><p>Your profile, proposals and notes are saved in this browser. They are not shared with other visitors.</p></section></aside></div>;
}
