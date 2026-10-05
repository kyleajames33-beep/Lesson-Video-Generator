import {Img, Sequence, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import lessonJson from '../data/chemistry-y11-m2-l2-molar-mass.json';
import type {LessonData, SceneData} from '../lesson/types';
import {SlideFrame} from '../slides/shared/SlideFrame';
import {SlideChrome} from '../slides/shared/SlideChrome';
import {SceneVoiceover} from '../audio/SceneVoiceover';
import {FadeUp} from '../animations/FadeUp';
import {ScribbleUnderline} from '../animations/DoodlePrimitives';
import {FONT_HAND, FONT_MONO, TOK} from '../styles/tokens';
import '../styles/fonts';

const lesson = lessonJson as unknown as LessonData;
export const PILOT_SCENE_IDS = ['marginalia-molar-mass', 'lab-footage', 'formula'];
export const pilotScenes = PILOT_SCENE_IDS.map(id => lesson.scenes.find(s => s.id === id)!);
export const PILOT_FRAMES = pilotScenes.reduce((sum, scene) => sum + scene.durationInFrames, 0);
const art = 'assets/hscscience/generated/lesson-2-molar-mass/';
const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

// Use the saved word timings rather than estimating a narrator's reading speed.
const cue = (scene: SceneData, phrase: string) => {
  const words = phrase.toLowerCase().split(' ');
  const captions = scene.captions ?? [];
  const normal = (s: string) => s.toLowerCase().replace(/[^a-z0-9-]/g, '');
  const index = captions.findIndex((_, i) => words.every((word, j) => normal(captions[i+j]?.text ?? '') === word));
  if (index < 0) throw new Error(`Missing pilot cue: ${scene.id}: ${phrase}`);
  return captions[index].startMs / 1000;
};
const Title = ({children}: {children: string}) => <div style={{position:'absolute',left:100,top:142,fontSize:88,fontWeight:800,letterSpacing:'-0.04em',lineHeight:1.1}}>{children}</div>;
const Note = ({scene, phrase, children, top}: {scene:SceneData; phrase:string; children:string; top:number}) => {
  const {fps} = useVideoConfig();
  return <div style={{position:'absolute',left:100,top,width:610,fontSize:54,fontWeight:650,lineHeight:1.25}}><FadeUp delay={Math.round(cue(scene,phrase)*fps)}>{children}</FadeUp></div>;
};

const Bridge = ({scene}: {scene:SceneData}) => {
  const {fps} = useVideoConfig();
  const frame = useCurrentFrame();
  const connect = cue(scene, 'Molar mass connects');
  return <>
    <Title>Molar mass connects two worlds.</Title>
    <Img src={staticFile(art+'marginalia-bridge-particles-grams.png')} style={{position:'absolute',left:260,top:390,width:1400,height:600,objectFit:'contain'}}/>
    <div style={{position:'absolute',left:210,top:300,width:440,textAlign:'center',fontSize:64,fontWeight:750}}><FadeUp delay={Math.round(cue(scene,'side moles')*fps)}>Amount in moles</FadeUp></div>
    <div style={{position:'absolute',right:210,top:300,width:440,textAlign:'center',fontSize:64,fontWeight:750}}><FadeUp delay={Math.round(cue(scene,'side grams')*fps)}>Mass in grams</FadeUp></div>
    <div style={{position:'absolute',left:690,top:345,width:540,textAlign:'center',fontFamily:FONT_HAND,fontSize:70,color:TOK.chem1}}><FadeUp delay={Math.round(connect*fps)}>Molar mass</FadeUp><ScribbleUnderline width={500} color={TOK.amber} delay={Math.round(connect*fps)} durationFrames={24}/></div>
    <div style={{position:'absolute',left:580,top:835,width:760,textAlign:'center',fontSize:54,fontWeight:650,opacity:interpolate(frame,[cue(scene,'grams one mole')*fps,(cue(scene,'grams one mole')+0.4)*fps],[0,1],clamp)}}>Grams per mole: g mol⁻¹</div>
  </>;
};

const Balance = ({scene}: {scene:SceneData}) => <>
  <Title>Measure mass. Convert to moles.</Title>
  <Note scene={scene} phrase="Nobody counts" top={335}>We do not count individual molecules.</Note>
  <Note scene={scene} phrase="read the mass" top={535}>Read the sample mass in grams.</Note>
  <Note scene={scene} phrase="Then use molar mass" top={740}>Use molar mass to convert to moles.</Note>
  <div style={{position:'absolute',left:820,top:285,width:860,height:670}}>
    <Img src={staticFile(art+'lab-footage-balance-beaker.png')} style={{position:'absolute',left:95,top:0,width:670,height:670}}/>
    {/* Cover the raster's unlabelled number. This is a schematic, not data. */}
    <div style={{position:'absolute',left:316,top:447,width:229,height:70,background:'#d3e9dd',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:FONT_MONO,fontSize:36,color:'#164b3a'}}>mass / g</div>
    <div style={{position:'absolute',left:180,top:670,fontSize:30,color:TOK.inkDim}}>Schematic balance. Assume the container is tared.</div>
  </div>
</>;

const Formula = ({scene}: {scene:SceneData}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const units = cue(scene,'Now watch the units');
  const cancel = cue(scene,'The mole units cancel');
  const result = cue(scene,'left with grams');
  const strike = interpolate(frame,[cancel*fps,(cancel+0.6)*fps],[0,1],clamp);
  return <>
    <Title>Let the units check your formula.</Title>
    <div style={{position:'absolute',top:280,left:170,fontFamily:FONT_MONO,fontSize:130,fontWeight:700}}><FadeUp delay={Math.round(cue(scene,'m equals')*fps)}>m = n × M</FadeUp></div>
    <div style={{position:'absolute',left:170,top:460,width:1620,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:30}}>
      {[
        {phrase:'Lowercase m',symbol:'m',label:'Sample mass',unit:'g'},
        {phrase:'Lowercase n',symbol:'n',label:'Amount',unit:'mol'},
        {phrase:'And capital M',symbol:'M',label:'Molar mass',unit:'g mol⁻¹'},
      ].map(item=><FadeUp key={item.symbol} delay={Math.round(cue(scene,item.phrase)*fps)}><div style={{padding:'18px 28px',background:TOK.card,border:`1px solid ${TOK.cardBorder}`,borderRadius:16,lineHeight:1.15}}><div style={{fontFamily:FONT_MONO,fontSize:76,fontWeight:700}}>{item.symbol} <span style={{fontSize:64,color:TOK.chem1}}>({item.unit})</span></div><div style={{fontSize:64,marginTop:12}}>{item.label}</div></div></FadeUp>)}
    </div>
    <div style={{position:'absolute',left:170,top:680,width:1620}}><FadeUp delay={Math.round(units*fps)} dy={0}>
      <div style={{fontFamily:FONT_HAND,fontSize:52,color:TOK.chem1,marginBottom:8}}>Check the units</div>
      <div style={{display:'flex',alignItems:'center',gap:44,fontFamily:FONT_MONO,fontSize:86,lineHeight:1.05}}>
        <div style={{position:'relative'}}>mol<svg width="190" height="110" style={{position:'absolute',left:-8,top:0}}><path d="M 0 90 L 170 10" pathLength={1} stroke={TOK.amber} strokeWidth={8} strokeDasharray={1} strokeDashoffset={1-strike}/></svg></div>
        <span>×</span><div style={{display:'flex',flexDirection:'column',alignItems:'center'}}><span style={{padding:'0 35px',borderBottom:`4px solid ${TOK.ink}`}}>g</span><span style={{position:'relative'}}>mol<svg width="190" height="110" style={{position:'absolute',left:-8,top:0}}><path d="M 0 90 L 170 10" pathLength={1} stroke={TOK.amber} strokeWidth={8} strokeDasharray={1} strokeDashoffset={1-strike}/></svg></span></div>
        <span style={{opacity:interpolate(frame,[result*fps,(result+0.35)*fps],[0,1],clamp)}}>= g</span>
      </div>
    </FadeUp></div>
  </>;
};

const PilotScene = ({scene,index}: {scene:SceneData; index:number}) => <SlideFrame vignette={false}>
  <SlideChrome lesson={lesson} topic="MOLAR MASS PILOT" sceneIndex={index} totalScenes={3}/>
  {index===0?<Bridge scene={scene}/>:index===1?<Balance scene={scene}/>:<Formula scene={scene}/>}
  <SceneVoiceover scene={scene}/>
</SlideFrame>;

export const MolarMassPilot = () => {
  let start = 0;
  return <>{pilotScenes.map((scene,index)=>{
    const from = start; start += scene.durationInFrames;
    return <Sequence key={scene.id} from={from} durationInFrames={scene.durationInFrames}><PilotScene scene={scene} index={index}/></Sequence>;
  })}</>;
};
