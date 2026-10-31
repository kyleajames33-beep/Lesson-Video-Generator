import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player} from '@remotion/player';
import {allVisuals,modules,mechanicsDetails,extraSamples} from './catalog';
import {CourseVisualFrame} from './course-preview';

const App:React.FC=()=>{
  const [id,setId]=useState(()=>allVisuals.find(v=>v.id===location.hash.slice(1))?.id??allVisuals[0].id),[phone,setPhone]=useState(false),[ready,setReady]=useState(false);
  const choose=(next:string)=>{setId(next);history.replaceState(null,'','#'+next);};
  React.useEffect(()=>{document.fonts.load('600 34px "Inter Tight"').then(()=>setReady(true));},[]);
  const v=allVisuals.find(v=>v.id===id)!;
  return <main><h1>HSC Physics visual library</h1><p>Year 12 Modules 5 to 8. Select a visual and play at 1x. Each demonstration is silent and uses a stated model.</p>
    <label>Visual <select value={id} onChange={e=>choose(e.target.value)}>{modules.map(m=><optgroup key={m.number} label={`Module ${m.number}: ${m.title}`}>{m.visuals.map(v=><option key={v.id} value={v.id}>{v.title}</option>)}</optgroup>)}</select></label>
    <label className="toggle"><input type="checkbox" checked={phone} onChange={e=>setPhone(e.target.checked)}/> Phone layout</label>
    <div className={phone?'player phone':'player'}>{ready?<Player key={`${id}-${phone}`} component={CourseVisualFrame} inputProps={{visualId:id,phone}} durationInFrames={(v.seconds??12)*30} fps={30} compositionWidth={phone?1080:1920} compositionHeight={phone?1350:1080} controls showVolumeControls={false} style={{width:'100%'}}/>:<p>Loading local font…</p>}</div>
    <h2>{v.title}</h2><p>{v.focus}</p><p><b>Entry knowledge:</b> {v.entry}</p><p><b>Site lessons:</b> {v.siteLessons.map(n=>String(n).padStart(2,'0')).join(', ')}</p>
    <p><b>Limits:</b></p><ul>{v.limits.map(x=><li key={x}>{x}</li>)}</ul>
    <p><a href={`stills/${id}-desktop.png`}>Desktop still</a> · <a href={`stills/${id}-phone.png`}>Phone still</a> · <a href="course-map.json">Exact lesson map and gaps</a></p>
    <h2>Mechanics reasoning and practical details</h2><div style={{display:'flex',flexWrap:'wrap',gap:8}}>{mechanicsDetails.map(item=><button key={item.id} onClick={()=>choose(item.id)} style={{font:'inherit',padding:'8px 12px',cursor:'pointer'}}>{item.title}</button>)}</div>
    <div className="modules">{extraSamples.map(sample=><section key={sample.id}><h3>{sample.title}</h3><video src={`previews/${sample.id}-silent.mp4`} controls muted playsInline preload="metadata"/><p>{sample.seconds}-second silent reasoning preview.</p></section>)}</div>
    <h2>Silent module samples</h2><div className="modules">{modules.map(m=><section key={m.number}><h3>Module {m.number}: {m.title}</h3><video src={`previews/module${m.number}-silent.mp4`} controls muted playsInline preload="metadata"/><p>Three visual families, 24 seconds. Full library remains available above.</p></section>)}</div>
    <p>Source and still checks are recorded separately from continuous playback and student teaching approval. See the library README for current review status.</p>
  </main>;
};
createRoot(document.getElementById('root')!).render(<App/>);
