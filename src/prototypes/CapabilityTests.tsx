import {AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {HdDnaReplication} from '../slides/diagrams/kinds/handdrawn/HdDnaReplication';
import {MolarMassScaleDiagram} from '../slides/diagrams/kinds/chem-y11-m2/MolarMassScaleDiagram';
import {HandDrawnStage} from '../animations/HandDrawn';
import {FadeUp} from '../animations/FadeUp';
import {AccentContext, themeFor} from '../styles/theme';
import {FONT_DISPLAY, FONT_MONO, TOK} from '../styles/tokens';
import '../styles/fonts';

export const CAPABILITY_FRAMES = 18*30;
const Chrome = ({subject,kind}:{subject:string;kind:string}) => <div style={{position:'absolute',left:90,right:90,top:48,display:'flex',justifyContent:'space-between',fontFamily:FONT_MONO,fontSize:24,color:TOK.inkDim}}><span>{subject.toUpperCase()} · CAPABILITY TEST</span><span>{kind}</span></div>;

export const NativeDnaTest = () => {
  const frame=useCurrentFrame();
  const {fps}=useVideoConfig();
  const t=frame/fps;
  const phase=t<2?0:t<8?1:t<14.8?2:3;
  return <AccentContext.Provider value={themeFor('Biology')}><AbsoluteFill style={{background:TOK.bg,color:TOK.ink,fontFamily:FONT_DISPLAY}}>
    <Chrome subject="Biology" kind="NATIVE HAND-DRAWN MECHANISM"/>
    <div style={{position:'absolute',left:90,top:130,fontSize:80,fontWeight:800,letterSpacing:'-0.04em'}}>{['DNA copies from its templates.','Helicase opens the strands.','New bases pair with each template.','One original strand in each copy.'][phase]}</div>
    <div style={{position:'absolute',left:275,top:270,width:1370,height:650,overflow:'hidden'}}>
      {/* Crop the small built-in legend. Large stable labels below replace it. */}
      <div style={{position:'absolute',left:0,top:-155,width:1370}}><HandDrawnStage id="dna-test" strength={0.6} grain={0.06}><HdDnaReplication delay={30} travelFrames={330} sequence="ATGCGTACCTGA" strandLabels={false} baseFontSize={32}/></HandDrawnStage></div>
    </div>
    <div style={{position:'absolute',left:140,right:140,top:905,display:'flex',justifyContent:'space-between',fontSize:64,fontWeight:650}}><span style={{color:'#2b2a33'}}>Graphite: original strand</span><span style={{color:TOK.bio1}}>Blue: new strand</span></div>
    <div style={{position:'absolute',left:140,right:140,top:990,textAlign:'center',fontSize:64,fontWeight:700}}>{phase===3?'Each copy: one original + one new strand.':'New DNA grows in the 5′ → 3′ direction.'}</div>
  </AbsoluteFill></AccentContext.Provider>;
};

export const PaintedDioramaTest = ({painted}:{painted:boolean}) => {
  const frame=useCurrentFrame();
  return <AbsoluteFill style={{background:TOK.bg,color:TOK.ink,fontFamily:FONT_DISPLAY}}>
    {painted&&<Img src={staticFile('assets/prototypes/lab-background-v1.png')} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>}
    <Chrome subject="Chemistry" kind={painted?'PAINTED CONTEXT + EXISTING DIORAMA':'EXISTING DIORAMA CONTROL'}/>
    <div style={{position:'absolute',left:90,top:125,fontSize:84,fontWeight:800,letterSpacing:'-0.04em'}}>One mole. Different masses.</div>
    <div style={{position:'absolute',left:320,top:245,width:1280,height:650,overflow:'hidden'}}><div style={{position:'absolute',left:0,top:-50,width:1280}}><MolarMassScaleDiagram delay={0} elements={[
      {sym:'H',name:'hydrogen',ar:'1.008',grams:'1.008 g',beat:30},
      {sym:'C',name:'carbon',ar:'12.01',grams:'12.01 g',beat:150},
      {sym:'O',name:'oxygen',ar:'16.00',grams:'16.00 g',beat:270},
    ]}/></div></div>
    <div style={{position:'absolute',left:320,top:875,width:1280,display:'grid',gridTemplateColumns:'repeat(3,1fr)',textAlign:'center',fontFamily:FONT_MONO,fontSize:70,fontWeight:700}}>{['1.008 g','12.01 g','16.00 g'].map((mass,i)=><FadeUp key={mass} delay={[74,194,314][i]} dy={0}>{mass}</FadeUp>)}</div>
    <div style={{position:'absolute',left:90,right:90,top:975,textAlign:'center',fontSize:54,fontWeight:700}}>{frame<360?'Each balance holds one mole of atoms.':'Same number of atoms. Different mass.'}</div>
  </AbsoluteFill>;
};
