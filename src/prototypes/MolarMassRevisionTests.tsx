import {AbsoluteFill,useCurrentFrame} from 'remotion';
import {FadeUp} from '../animations/FadeUp';
import {ScribbleUnderline} from '../animations/DoodlePrimitives';
import {FONT_DISPLAY,FONT_HAND,FONT_MONO,TOK} from '../styles/tokens';
import '../styles/fonts';

const Shell=({children}:{children:React.ReactNode})=><AbsoluteFill style={{background:TOK.bg,color:TOK.ink,fontFamily:FONT_DISPLAY,padding:'110px 120px'}}>{children}</AbsoluteFill>;
export const BracketRevision = () => {
  const frame=useCurrentFrame();
  const counted=frame>=90;
  return <Shell>
    <div style={{fontSize:82,fontWeight:800}}>Multiply every atom inside the bracket.</div>
    <div style={{position:'absolute',left:120,top:255,fontFamily:FONT_MONO,fontSize:96}}>Ca(H₂PO₄)₂</div>
    <div style={{position:'absolute',left:120,top:380,fontSize:56,color:TOK.inkDim}}>Use: Ca 40.08 · H 1.008 · P 30.97 · O 15.999</div>
    <div style={{position:'absolute',left:120,top:450,fontSize:52,color:TOK.chem1}}>Atom counts and contributions (g mol⁻¹)</div>
    <div style={{position:'absolute',left:120,right:120,top:530,display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:24}}>{[
      ['Ca','1','40.08'],['H','4','4.032'],['P','2','61.94'],['O','8','127.992'],
    ].map(([symbol,count,mass],i)=><div key={symbol} style={{padding:16,border:`2px solid ${TOK.cardBorder}`,background:TOK.card,borderRadius:16,textAlign:'center',lineHeight:1.1}}>
      <div style={{fontSize:76,fontWeight:750}}>{symbol}</div>
      <div style={{fontSize:72,color:counted&&i>0?TOK.chem1:TOK.ink}}><FadeUp delay={i===0?30:90} dy={0}>{count} atom{count==='1'?'':'s'}</FadeUp></div>
      <div style={{fontSize:74,fontFamily:FONT_MONO,marginTop:18}}><FadeUp delay={180+i*25} dy={0}>{mass}</FadeUp></div>
    </div>)}</div>
    <div style={{position:'absolute',left:120,top:850,fontSize:80,lineHeight:1.1,fontFamily:FONT_MONO,fontWeight:700}}><FadeUp delay={330}>M = 234.044 → 234.04 g mol⁻¹</FadeUp><div style={{position:'absolute',left:0,top:92,lineHeight:0,fontSize:0}}><ScribbleUnderline width={560} delay={345} durationFrames={20}/></div></div>
    <div style={{position:'absolute',left:120,top:975,fontSize:56,color:TOK.inkDim}}><FadeUp delay={365}>Keep guard digits. Round only the final total.</FadeUp></div>
  </Shell>;
};

export const ChlorineRevision = () => {
  const frame=useCurrentFrame();
  // Prompt lands by 2 s, then a genuine 5 s thinking hold before solutions.
  const answer=210;
  return <Shell>
    <div style={{fontFamily:FONT_HAND,fontSize:76,color:TOK.chem1}}>Your turn</div>
    <div style={{marginTop:25,fontSize:88,fontWeight:800,lineHeight:1.15}}>How many moles are in<br/>71.0 g of chlorine gas, Cl₂?</div>
    <div style={{marginTop:25,fontSize:62,color:TOK.inkDim}}>Use Aᵣ(Cl) = 35.45.</div>
    {frame<answer?<div style={{marginTop:85,fontSize:78}}><FadeUp delay={45} dy={0}>Five seconds to start. Pause longer if needed.</FadeUp></div>:<div style={{marginTop:45,fontFamily:FONT_MONO,fontSize:74,lineHeight:1.35}}>
      <FadeUp delay={answer} dy={0}>M(Cl₂) = 2 × 35.45 = 70.90 g mol⁻¹</FadeUp>
      <FadeUp delay={answer+75} dy={0}>n = 71.0 ÷ 70.90 = 1.00141… mol</FadeUp>
      <FadeUp delay={answer+150} dy={0}>n = 1.00 mol (3 significant figures)</FadeUp>
      <div style={{fontFamily:FONT_HAND,color:TOK.chem1,fontSize:66,marginTop:25}}><FadeUp delay={answer+210} dy={0}>Units: g ÷ (g mol⁻¹) = mol</FadeUp></div>
    </div>}
  </Shell>;
};
