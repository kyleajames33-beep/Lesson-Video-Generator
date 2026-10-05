import {AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {DioramaPlinth} from '../slides/diagrams/diorama';
import {HandDrawnStage, HatchDefs} from '../animations/HandDrawn';
import {FONT_DISPLAY, FONT_HAND, FONT_MONO, TOK} from '../styles/tokens';
import '../styles/fonts';

export type Direction = 'editorial' | 'handdrawn' | 'painted';
export const PROTOTYPE_SECONDS = 24;
export const DIRECTIONS: {id: Direction; label: string; premise: string}[] = [
  {id: 'editorial', label: 'A · Editorial diorama', premise: 'Stone plinths, clear hierarchy, coded quantities'},
  {id: 'handdrawn', label: 'B · Hand-drawn explanation', premise: 'Pencil construction, paper texture, stable labels'},
  {id: 'painted', label: 'C · Painted laboratory', premise: 'Generated atmosphere with the same coded explanation'},
];
const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const ease = Easing.bezier(0.16, 1, 0.3, 1);
const data = [{label: 'Na', moles: 0.435, coefficient: 2, color: '#8e5bd6'}, {label: 'Cl₂', moles: 0.282, coefficient: 1, color: '#238640'}];
const round = (n: number) => (Math.round(n*1000+1e-9)/1000).toFixed(3);

const Columns = ({direction}: {direction: Direction}) => {
  const realFrame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const frame = direction === 'handdrawn' ? Math.floor(realFrame / 3) * 3 : realFrame;
  const t = frame / fps;
  const grow = interpolate(t, [1.8, 3], [0, 1], {...clamp, easing: ease});
  const divide = interpolate(t, [9, 10.4], [0, 1], {...clamp, easing: ease});
  const ghost = interpolate(t, [8.5, 9], [0, 0.27], clamp);
  return <svg viewBox="0 0 900 470" style={{width: '100%', overflow: 'visible'}} aria-label="Sodium reaction capacity falls from 0.435 to 0.2175 moles. Chlorine stays at 0.282 moles.">
    <defs>
      <HatchDefs id={`prototype-${direction}`} color="#4b4850" />
      {data.map((r, i) => <linearGradient key={i} id={`bar-${direction}-${i}`}><stop stopColor={r.color} stopOpacity={0.6}/><stop offset="0.45" stopColor={r.color}/><stop offset="1" stopColor={r.color} stopOpacity={0.85}/></linearGradient>)}
    </defs>
    {data.map((r, i) => {
      const x = i === 0 ? 250 : 640;
      const rawHeight = r.moles / 0.435 * 260;
      const h = rawHeight * grow * (1 - divide + divide / r.coefficient);
      return <g key={r.label}>
        {direction === 'editorial' && <DioramaPlinth id={`prototype-plinth-${i}`} cx={x} cy={365} rx={115}/>}
        {direction !== 'editorial' && <line x1={x-120} x2={x+120} y1={365} y2={365} stroke="#5d5b66" strokeWidth={direction === 'handdrawn' ? 3 : 1.5}/>}
        <rect x={x-60} y={365-rawHeight} width={120} height={rawHeight} fill="none" stroke={r.color} strokeWidth={2} strokeDasharray="8 8" opacity={ghost}/>
        <rect x={x-60} y={365-h} width={120} height={h} rx={direction === 'handdrawn' ? 3 : 8} fill={direction === 'handdrawn' ? `${r.color}1a` : `url(#bar-${direction}-${i})`} stroke={r.color} strokeWidth={direction === 'handdrawn' ? 3 : 1}/>
        {direction === 'handdrawn' && <rect x={x-60} y={365-h} width={120} height={h} fill={`url(#prototype-${direction}-hatch)`}/>}
        {t >= 16 && i === 0 && <path d={`M ${x-25} 410 L ${x-7} 428 L ${x+29} 389`} fill="none" stroke={TOK.chem1} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1-interpolate(t,[16,16.6],[0,1],clamp)}/>}
      </g>;
    })}
  </svg>;
};

export const DesignDirections = ({direction}: {direction: Direction}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  const phase = t < 8 ? 0 : t < 16 ? 1 : 2;
  const phaseStart = [0, 8, 16][phase];
  const reveal = interpolate(t, [phaseStart, phaseStart+0.45], [0,1], {...clamp, easing: ease});
  const lift = interpolate(t, [phaseStart, phaseStart+0.45], [18,0], {...clamp, easing: ease});
  const columnReveal = interpolate(t, [1.3,1.8], [0,1], clamp);
  const titles = ['Fewer moles. Is it limiting?', 'Divide by the coefficient.', 'Sodium runs out first.'];
  const dir = DIRECTIONS.find(d=>d.id===direction)!;
  return <AbsoluteFill style={{background:TOK.bg, color:TOK.ink, fontFamily:FONT_DISPLAY}}>
    {direction === 'painted' && <Img src={staticFile('assets/prototypes/lab-background-v1.png')} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>}
    {direction === 'handdrawn' && <AbsoluteFill style={{background:'radial-gradient(ellipse at 50% 45%, #fbfaf6, #efece4)'}}/>}
    <div style={{position:'absolute',left:90,top:46,right:90,display:'flex',justifyContent:'space-between',fontFamily:FONT_MONO,fontSize:22,letterSpacing:'0.08em',color:TOK.inkDim}}>
      <span>HSC SCIENCE · CHEMISTRY</span><span>{dir.label.toUpperCase()}</span>
    </div>
    <div style={{position:'absolute',left:90,top:125,right:90,opacity:reveal,transform:`translateY(${lift}px)`}}>
      <div style={{fontSize:direction==='handdrawn'?94:88,fontWeight:800,letterSpacing:'-0.04em',lineHeight:1.08,fontFamily:direction==='handdrawn'?FONT_HAND:FONT_DISPLAY}}>{titles[phase]}</div>
    </div>
    <div style={{position:'absolute',left:96,top:298,width:595}}>
        <div style={{fontFamily:FONT_MONO,fontSize:52,fontWeight:700,letterSpacing:'-0.04em',marginBottom:44}}>2Na + Cl₂ → 2NaCl</div>
      <div style={{opacity:reveal,transform:`translateY(${lift}px)`}}>
        <div style={{fontFamily:FONT_MONO,fontSize:22,letterSpacing:'0.13em',color:TOK.inkDim,marginBottom:20}}>{['01 · THE TEMPTING SHORTCUT','02 · THE FAIR COMPARISON','03 · THE DECISION RULE'][phase]}</div>
        <div style={{fontSize:50,fontWeight:650,lineHeight:1.2,letterSpacing:'-0.025em',whiteSpace:'pre-line'}}>
          {phase===0?'Chlorine has fewer moles. The equation needs two Na for each Cl₂.':phase===1?'Divide each mole amount by its coefficient. Compare the results.':'0.218 < 0.282\nSodium has the smaller value.'}
        </div>
        <div style={{marginTop:32,height:3,width:100,background:TOK.amber}}/>
          <div style={{marginTop:26,fontSize:34,lineHeight:1.3,color:TOK.inkDim}}>{phase===0?'Predict the limiting reagent before the bars change.':phase===1?'Dashed outline = original amount.':'Compare the ratio, rather than the raw mole count.'}</div>
      </div>
    </div>
    <div style={{position:'absolute',left:790,top:270,width:990,opacity:columnReveal}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,padding:'0 72px',marginBottom:12}}>
        {data.map(r=><div key={r.label} style={{textAlign:'center'}}>
          <div style={{fontSize:56,fontWeight:800,marginBottom:10}}>{r.label}</div>
          <div style={{fontFamily:FONT_MONO,fontSize:42,fontWeight:600,color:r.color}}>{phase===0?`${round(r.moles)} mol`:`${round(r.moles)} ÷ ${r.coefficient}`}</div>
          <div style={{fontFamily:FONT_MONO,fontSize:48,fontWeight:700,marginTop:12,minHeight:58,opacity:interpolate(t,[10.4,10.9],[0,1],clamp)}}>{round(r.moles/r.coefficient)} mol</div>
        </div>)}
      </div>
      {direction==='handdrawn'?<HandDrawnStage id="prototype-pencil" strength={0.8} grain={0.13}><Columns direction={direction}/></HandDrawnStage>:<Columns direction={direction}/>}
    </div>
    <div style={{position:'absolute',left:90,right:90,bottom:74,height:56,display:'flex',alignItems:'center',justifyContent:'space-between',fontSize:25,color:TOK.inkDim}}>
      <span>One teaching idea · identical content and timing · silent visual prototype</span><span style={{fontFamily:FONT_MONO}}>0{phase+1} / 03</span>
    </div>
    <div style={{position:'absolute',bottom:0,left:0,height:5,width:`${(t/PROTOTYPE_SECONDS)*100}%`,background:TOK.chem1}}/>
  </AbsoluteFill>;
};
