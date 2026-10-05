import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {PaintedDioramaTest} from './CapabilityTests';
import {FadeUp} from '../animations/FadeUp';
import {ScribbleUnderline} from '../animations/DoodlePrimitives';
import {FONT_DISPLAY, FONT_HAND, FONT_MONO, TOK} from '../styles/tokens';

export const CONNECTED_FRAMES = 42*30;
const clamp = {extrapolateLeft:'clamp' as const,extrapolateRight:'clamp' as const};
export const WorkedCarbon = () => {
  const frame=useCurrentFrame();
  const strike=interpolate(frame,[240,258],[0,1],clamp);
  return <AbsoluteFill style={{background:TOK.bg,color:TOK.ink,fontFamily:FONT_DISPLAY,padding:'110px 120px'}}>
    <div style={{fontSize:84,fontWeight:800}}>What does two moles of carbon weigh?</div>
    <div style={{display:'flex',gap:90,marginTop:65,fontSize:68}}><span>n = 2.00 mol</span><span>M = 12.01 g mol⁻¹</span></div>
    <div style={{marginTop:60,fontFamily:FONT_MONO,fontSize:112,fontWeight:700}}><FadeUp delay={90}>m = n × M</FadeUp></div>
    <div style={{marginTop:40,fontFamily:FONT_MONO,fontSize:94}}><FadeUp delay={150}>m = 2.00 × 12.01</FadeUp></div>
    <div style={{marginTop:15,display:'flex',gap:40,alignItems:'center',fontFamily:FONT_MONO,fontSize:82}}><FadeUp delay={210} dy={0}><div style={{display:'flex',gap:40,alignItems:'center'}}>
      <span style={{fontFamily:FONT_HAND,color:TOK.chem1,fontSize:64}}>Units:</span>
      <span style={{position:'relative'}}>mol<svg width="170" height="100" style={{position:'absolute',left:-5,top:0}}><path d="M 0 83 L 160 8" pathLength={1} stroke={TOK.amber} strokeWidth={7} strokeDasharray={1} strokeDashoffset={1-strike}/></svg></span>
      <span>×</span><span style={{display:'flex',flexDirection:'column',alignItems:'center'}}><span style={{borderBottom:`3px solid ${TOK.ink}`,padding:'0 25px'}}>g</span><span style={{position:'relative'}}>mol<svg width="170" height="100" style={{position:'absolute',left:-5,top:0}}><path d="M 0 83 L 160 8" pathLength={1} stroke={TOK.amber} strokeWidth={7} strokeDasharray={1} strokeDashoffset={1-strike}/></svg></span></span><span style={{opacity:interpolate(frame,[270,282],[0,1],clamp)}}>= g</span>
    </div></FadeUp></div>
    <div style={{position:'absolute',right:130,top:675,fontSize:106,fontWeight:800,color:TOK.chem1}}><FadeUp delay={300}>24.0 g</FadeUp><ScribbleUnderline width={350} delay={300} durationFrames={20} color={TOK.amber}/></div>
    <div style={{position:'absolute',left:120,top:980,fontSize:54,color:TOK.inkDim}}><FadeUp delay={330}>24.02 g before rounding. Use 3 significant figures.</FadeUp></div>
  </AbsoluteFill>;
};
const Recall = () => <AbsoluteFill style={{background:TOK.bg,color:TOK.ink,fontFamily:FONT_DISPLAY,padding:'140px 120px'}}>
  <div style={{fontFamily:FONT_HAND,fontSize:78,color:TOK.chem1}}>Your turn</div>
  <div style={{marginTop:40,fontSize:90,fontWeight:800,lineHeight:1.2}}>Same element. Half as many moles.<br/>What happens to the mass?</div>
  <div style={{marginTop:70,fontSize:64}}>Keep molar mass fixed. Think before the reveal.</div>
  <div style={{marginTop:80,fontSize:90,fontWeight:750}}><FadeUp delay={150} dy={0}>Half the mass: m = n × M.</FadeUp></div>
</AbsoluteFill>;

export const ConnectedChemistry = () => <>
  <Sequence durationInFrames={540} premountFor={30}><PaintedDioramaTest painted/></Sequence>
  <Sequence from={540} durationInFrames={480} premountFor={30}><WorkedCarbon/></Sequence>
  <Sequence from={1020} durationInFrames={240} premountFor={30}><Recall/></Sequence>
</>;
