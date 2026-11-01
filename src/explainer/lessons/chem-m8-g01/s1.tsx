import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, prog} from '../../kit';
import {Heading, sc} from './common';
import {MOHR, BAL} from './assets';
import {Overlay, Sx, PicF, Tag, Checks, Question, Board, Line, Ladder, Wrong, under, TEAL, NAVY, INK_SOFT} from './parts';
const H = cues(sc('hook'), {tit:'a titration', weigh:'a precipitate', data:'right data', ratio:'ratio', dilution:'dilution', answer:'answer', three:'three HSC-style', pause:'Pause and'});
export const SceneHook: React.FC = () => {
 const f=useCurrentFrame(), out=1-prog(f,H.three,18);
 return <><Heading text="Titration and gravimetry practice" at={4} size={58}/><Overlay>
  <Sx x={355} y={275} text="right data, right ratio, right direction" size={44} hand at={10}/>
  <g opacity={out}><PicF p={MOHR.end} x={750} y={355} h={300} o={prog(f,H.tit,14)}/><PicF p={BAL} x={1320} y={355} h={300} o={prog(f,H.weigh,14)}/>
  <Sx x={830} y={700} text="c01: titration" size={28} color={INK_SOFT} at={H.tit}/><Sx x={1380} y={700} text="c02: weighing" size={28} color={INK_SOFT} at={H.weigh}/>
  <Tag x={1040} y={485} text="1 : 1?  1 : 3?" size={30} at={H.ratio}/>
  <DrawPath d="M790,750 H960 l-18,-12 M960,750 l-18,12" at={H.dilution} color={NAVY}/><Sx x={790} y={805} text="flask → aliquot" size={30} at={H.dilution}/>
  <DrawPath d="M1420,800 V740 l-10,15 M1420,740 l10,15 M1510,740 V800 l-10,-15 M1510,800 l10,-15" at={H.answer} color={TEAL}/></g>
  {[0,1,2].map(i=><g key={i} opacity={prog(f,H.three+i*8,14)}><rect x={420+i*450} y={395} width={380} height={180} rx={18} fill="#fffdf8" stroke="#b9a98f" strokeWidth={3}/><Sx x={610+i*450} y={500} text={`Question ${i+1}`} size={42} hand anchor="middle" at={H.three+i*8}/></g>)}
  <Sx x={1100} y={670} text="HSC-style questions, written for HSCScience" size={30} anchor="middle" at={H.three+20}/>
  <Checks at={H.data}/>
 </Overlay></>;
};
const A=cues(sc('q1-question'),{q:'Question one', start:'A ten', pause:'Pause here'});
export const SceneQ1Question: React.FC = () => <><Heading text="Question 1" at={A.q} size={52}/><Question n={1} at={A.start} pause={A.pause}/></>;
const D=cues(sc('q1-data-ratio'),{start:'Start with', out:'out', other:'The other', mean:'millilitres', ratio:'Now the ratio', eq:'one to one', want:'want'});
export const SceneQ1Data: React.FC=()=>{
 const f=useCurrentFrame();
 return <Board n={1} underlines={[under(3,'11.20 (rough)',D.out),under(3,'10.85, 10.95, 10.90',D.other)]} ticks={{0:D.mean,1:D.eq}}>
  <Sx x={365} y={500} text="11.20 (rough)" size={34} color={INK_SOFT} at={D.start}/><DrawPath d="M360,490 L590,510" at={D.out} color="#777267"/>
  <Sx x={690} y={500} text="c01: the rough titre is a guide" size={28} color={INK_SOFT} at={D.out} out={D.ratio}/>
  <Sx x={365} y={570} text="10.85    10.95    10.90 mL" size={38} at={D.other} out={D.ratio}/><g opacity={1-prog(f,D.ratio,12)}><DrawPath d="M365,585 v18 H870 v-18" at={D.other+10} color={NAVY}/></g>
  <Sx x={940} y={585} text="within 0.10 mL: concordant" size={30} color={NAVY} at={D.other+10} out={D.ratio}/>
  <Line text="mean = (10.85 + 10.95 + 10.90) ÷ 3 = 10.90 mL" at={D.mean} y={680} size={36}/>
  <Line text="Ag⁺(aq) + Cl⁻(aq) → AgCl(s)    1 : 1" at={D.eq} y={785} size={42}/>
  <Sx x={365} y={875} text="2Ag⁺ + CrO₄²⁻ → Ag₂CrO₄  (indicator)" size={30} color={INK_SOFT} at={D.want}/>
  <Sx x={365} y={930} text="2 : 1 is the indicator's, not the analyte's" size={29} color={INK_SOFT} at={D.want}/>
  {void f}
 </Board>;
};
const C=cues(sc('q1-calc'),{start:'Moles of silver', moles:['moles',2], aliquot:'one twenty five', flask:'The flask', ten:'ten times as much', seawater:'seawater', divide:'Divide by', concentration:'point five four', litre:['litre',2], times:'Times thirty', sense:'typical seawater'});
export const SceneQ1Calc: React.FC=()=> <Board n={1} underlines={[under(1,'0.0500 mol L⁻¹',C.moles),under(1,'25.00 mL aliquots',C.ten),under(0,'250.0 mL',C.ten),under(0,'10.00 mL sample of seawater',C.seawater),under(5,'M(Cl) = 35.45',C.litre)]} ticks={{0:-100,1:-100,2:C.litre}}>
 <Sx x={365} y={420} text="10.90 mL = 0.01090 L; Ag⁺ : Cl⁻ = 1 : 1" size={28} color={INK_SOFT} at={-100}/>
 <Line text="n(Ag⁺) = 0.0500 × 0.01090" at={C.start} y={495} size={35} dim={C.ten}/>
 <Line text="= 5.45 × 10⁻⁴ mol" at={C.moles} y={550} size={38} dim={C.ten}/>
 <Sx x={365} y={605} text="= n(Cl⁻) in 25.00 mL" size={30} at={C.aliquot} out={C.seawater}/>
 <Line text="×10 = 5.45 × 10⁻³ mol in the flask" at={C.ten} y={675} size={32} dim={C.divide}/>
 <Line text="c(Cl⁻) = 5.45 × 10⁻³ ÷ 0.01000" at={C.divide} y={750} size={32} dim={C.litre}/>
 <Line text="= 0.545 mol/L" at={C.concentration} y={800} size={37} dim={C.litre}/>
 <Line text="× 35.45 = 19.3 g/L" at={C.litre} y={900} size={46}/>
 <Sx x={365} y={960} text="c01: seawater roughly 19 g/L" size={28} color={INK_SOFT} at={C.sense}/>
 <Ladder a={C.moles} flask={C.ten} source={C.seawater}/>
</Board>;
const M=cues(sc('q1-mistake'),{slip:'classic slip', value:'point zero two', cross:'dilution'});
export const SceneQ1Mistake: React.FC=()=> <Board n={1} underlines={[under(4,'in the seawater',M.slip)]} ticks={{0:-100,1:-100,2:M.cross}}>
 <Ladder a={-100} flask={M.cross} source={M.cross+28}/>
 <Wrong text="5.45 × 10⁻⁴ ÷ 0.02500 = 0.0218 mol/L" at={M.value} cross={M.cross} reason="that's the flask's solution" y={540}/>
 <Line text="×25 back to the seawater" at={M.cross+12} y={760} size={36}/>
</Board>;
