import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, DrawPath, Mark, prog} from '../../kit';
import {Overlay, Sx, INK, INK_SOFT, mw, PicF} from '../chem-m8-c01/parts';
import {QCardX, Tag} from '../chem-m7-c01/molecules';
import type {ULine} from '../chem-m7-c01/molecules';
import {Badge, AnsBox} from '../chem-m7-g01/board';
import {hold} from './common';
import {MOHR, BAL, BURETTE, FUNNEL} from './assets';
export {Overlay, Sx, INK, INK_SOFT, PicF, Tag, Badge, AnsBox};
export const TEAL = '#0d6b52', RED = '#b3422d', NAVY = '#2c4a7c', AMB = '#b07a12';
export const LABELS = ['which results to use?', 'ratio from the precipitate?', 'every dilution tracked?', 'error: extra or lost, which way?'];
export const Q1 = [
 'A 10.00 mL sample of seawater was diluted to 250.0 mL in a volumetric flask.',
 '25.00 mL aliquots of the diluted solution were titrated with 0.0500 mol L⁻¹',
 'silver nitrate solution, using potassium chromate as the indicator.',
 'Titre (mL): 11.20 (rough), 10.85, 10.95, 10.90.',
 'Calculate the concentration of chloride ions in the seawater, in g L⁻¹.',
 'M(Cl) = 35.45 g mol⁻¹.',
];
export const Q2 = [
 'Aluminium sulfate, Al₂(SO₄)₃, is used in water treatment. To check its purity,',
 'three 0.400 g portions were each dissolved, acidified and treated with excess',
 'barium chloride solution. The BaSO₄ was filtered, washed, dried and weighed.',
 'Trial 1: 0.781 g, dried to constant mass. Trial 2: 0.785 g, dried to constant mass.',
 'Trial 3: 0.842 g, weighed after one drying only.',
 '(a) Justify which result should be excluded.',
 '(b) Calculate the percentage by mass of Al₂(SO₄)₃ in the sample.',
 'M(BaSO₄) = 233.39 g mol⁻¹; M(Al₂(SO₄)₃) = 342.14 g mol⁻¹.',
];
export const Q3 = [
 'A teacher prepared a sodium chloride solution: chloride concentration 0.0620 mol L⁻¹.',
 'A student analysed it by two methods. Method 1, Mohr titration: the burette was rinsed',
 'with distilled water, but not with the silver nitrate solution, before it was filled.',
 'Result: 0.0635 mol L⁻¹. Method 2, gravimetric analysis as AgCl: some precipitate',
 'passed through a small tear in the filter paper. Result: 0.0607 mol L⁻¹.',
 '(a) Explain why each result differs from the known value.',
 '(b) The student claims the mean of the two results, 0.0621 mol L⁻¹, shows that',
 'the analysis was accurate. Evaluate this claim.',
];
export const under = (line: number, phrase: string, at: number): ULine => ({line, phrase, at, color: AMB});
export const Checks: React.FC<{ticks?: Record<number, number>; dim?: boolean; at?: number}> = ({ticks = {}, dim, at = -100}) => {
 const f = useCurrentFrame();
 const rows = [['which results','to use?'], ['ratio from the','precipitate?'], ['every dilution','tracked?'], ['error: extra or lost,','which way?']];
 return <g opacity={prog(f, at, 12) * (dim ? 0.28 : 1)}>{rows.map((ls, i) => <g key={i}>
  <rect x={60} y={470 + i * 115} width={230} height={96} rx={12} fill="none" stroke="#b9a98f" strokeWidth={2}/>
  {ls.map((l,j)=><Sx key={j} x={76} y={501+j*30+i*115} text={l} size={24} hand at={at+i*8}/>)}
  {ticks[i] !== undefined ? <Mark x={267} y={549 + i * 115} at={ticks[i]} size={20}/> : null}
 </g>)}</g>;
};
export const Question: React.FC<{n: 1 | 2 | 3; at: number; pause: number}> = ({n, at, pause}) => {
 const h = hold(`q${n}-question`);
 return <Overlay><QCardX lines={[Q1,Q2,Q3][n-1]} x={140} w={1370} y={165} size={32} at={at}/>
  {n === 1 ? <PicF p={MOHR.end} x={1580} y={265} h={290}/> : n === 2 ? <PicF p={BAL} x={1550} y={300} h={280}/> : <><PicF p={BURETTE} x={1535} y={275} h={260}/><PicF p={FUNNEL} x={1700} y={275} h={260}/></>}
  <AnsBox x={365} y={n===1 ? 585 : 660} w={n===1 ? 1410 : 680} label={n===1 ? 'Answer' : '(a)'} at={at+30}/>
  {n!==1 ? <AnsBox x={1080} y={660} w={695} label="(b)" at={at+35}/> : null}
  <Sx x={500} y={900} text="Pause here to answer." size={44} hand at={pause}/>
  <Countdown start={h.startFrame} end={h.endFrame} x={1660} y={855}/><g transform="translate(0,420) scale(0.6)"><Checks dim/></g>
 </Overlay>;
};
export const Board: React.FC<{n: 1 | 2 | 3; underlines?: ULine[]; ticks?: Record<number, number>; children: React.ReactNode}> = ({n, underlines=[], ticks, children}) => {
 const f=useCurrentFrame(); const k=1+0.045*(1-prog(f,0,16));
 const newest = Math.max(-Infinity, ...underlines.filter(u=>u.at<=f).map(u=>u.at));
 const marked = underlines.map(u=>({...u, color:u.at<newest ? "#c3b79f" : AMB}));
 return <Overlay>
 <Badge text={['Titration with a dilution','Gravimetric ratio','Evaluate the errors'][n-1]} at={-100}/>
 <g transform={`translate(320,76) scale(${k}) translate(-320,-76)`}>
  <QCardX lines={[Q1,Q2,Q3][n-1]} x={320} w={1500} y={76} size={25} at={-100} under={marked}/>
 </g>
 <Checks ticks={ticks}/>{children}
 </Overlay>;
};
export const Line: React.FC<{text: string; at: number; y: number; x?: number; size?: number; dim?: number; color?: string}> = ({text, at, y, x=365, size=36, dim, color=TEAL}) => {
 const f=useCurrentFrame();
 return <Sx x={x} y={y} text={text} size={size} weight={700} color={color} at={at} opacity={dim===undefined ? 1 : 1-0.7*prog(f,dim,14)}/>;
};
export const Wrong: React.FC<{text: string; at: number; cross: number; reason: string; y?: number}> = ({text, at, cross, reason, y=615}) => {
 const w=mw(text,32,false,700);
 return <><Tag x={365} y={y} text={text} at={at} size={32}/><Mark x={385+w/2} y={y-12} at={cross} kind="cross" size={70}/><Sx x={365} y={y+100} text={reason} size={30} hand color={RED} at={cross+8}/></>;
};
export const Ladder: React.FC<{a: number; flask: number; source: number; result?: number}> = ({a,flask,source,result}) => {
 const f=useCurrentFrame();
 const levels=[{y:470,t:'seawater 10.00 mL',at:source,m:'5.45 × 10⁻³ mol'}, {y:650,t:'flask 250.0 mL',at:flask,m:'5.45 × 10⁻³ mol'}, {y:830,t:'aliquot 25.00 mL',at:a,m:'5.45 × 10⁻⁴ mol'}];
 return <g>{levels.map((r,i)=><g key={i} opacity={prog(f,a,12)}>
  <path d={`M1280,${r.y-45} v65 q0,15 18,15 h115 q18,0 18,-15 v-65`} fill="none" stroke={NAVY} strokeWidth={3}/>
  <rect x={1286} y={r.y+20-42*prog(f,r.at,22)} width={139} height={42*prog(f,r.at,22)} fill="#bddbd2"/>
  <Sx x={1450} y={r.y-6} text={r.t} size={27} at={a}/><Sx x={1450} y={r.y+34} text={r.m} size={26} color={TEAL} at={r.at}/>
 </g>)}<DrawPath d="M1235,820 L1235,670 l-12,16 M1235,670 l12,16" at={flask} color={TEAL}/><Sx x={1080} y={745} text="×10" size={36} hand at={flask}/>
 <DrawPath d="M1235,640 L1235,490 l-12,16 M1235,490 l12,16" at={source} color={TEAL}/>
 <Sx x={1055} y={560} text="same moles" size={26} hand at={source}/>
 {result!==undefined ? <Sx x={1280} y={955} text="÷0.01000 L, then ×35.45" size={28} color={TEAL} at={result}/> : null}</g>;
};
export const FormulaCounter: React.FC<{at: number}> = ({at}) => {
 const f=useCurrentFrame();
 return <g opacity={prog(f,at,12)} transform="translate(0,50)"><Sx x={1390} y={460} text="1 Al₂(SO₄)₃" size={34} color={NAVY} anchor="middle" at={at}/>
 {[0,1,2].map(i=>{const p=prog(f,at+10+i*16,24);return <g key={i}>
  <circle cx={1320+i*110} cy={540} r={36} fill="#d4df9e" stroke="#72823d" strokeWidth={3} opacity={1-p}/><Sx x={1320+i*110} y={550} text="SO₄²⁻" size={22} anchor="middle" opacity={1-p} at={at}/>
  <circle cx={1320+i*110} cy={625-55*p} r={24} fill="#d5cbe4" opacity={1-p}/><Sx x={1320+i*110} y={633-55*p} text="Ba²⁺" size={17} anchor="middle" opacity={1-p} at={at}/>
  <rect x={1295+i*110} y={540+175*p} width={50} height={32} rx={5} fill="#fffefa" stroke="#8a857a" opacity={p}/>
 </g>})}<Sx x={1430} y={800} text="→ 3 BaSO₄" size={34} color={TEAL} anchor="middle" at={at+60}/></g>;
};
export const ErrorBoard: React.FC<{high: number; low: number; mean?: number; miss?: number}> = ({high,low,mean,miss}) => {
 const f=useCurrentFrame(); const m=miss===undefined?0:prog(f,miss,32);
 return <g><DrawPath d="M1190,645 H1800" at={0} dash="8 7" color={NAVY}/><Sx x={1470} y={620} text="known 0.0620" size={27} color={NAVY} anchor="middle" at={0}/>
 <Sx x={1250} y={505} text="Titration" size={28} at={0}/><Sx x={1580} y={505} text="Gravimetric" size={28} at={0}/>
 <DrawPath d="M1320,645 V520 l-12,18 M1320,520 l12,18" at={high} color={RED} width={6}/><Sx x={1350} y={550} text="0.0635" size={29} color={RED} at={high}/>
 <path d={`M1650,645 V${765+100*m} l-12,-18 M1650,${765+100*m} l12,-18`} stroke={TEAL} strokeWidth={6} fill="none" opacity={prog(f,low,18)}/><Sx x={1680} y={770+100*m} text={m>.5?'bigger tear':'0.0607'} size={28} color={TEAL} at={low}/>
 {mean!==undefined ? <g opacity={prog(f,mean,14)}><circle cx={1490} cy={635+50*m} r={12} fill={AMB}/><Sx x={1420} y={715+50*m} text={m>.5?'mean moves':'mean 0.0621'} size={28} color={AMB} at={mean}/><DrawPath d="M1320,550 L1490,635 L1650,765" at={mean} color="#aaa397" width={2}/></g>:null}</g>;
};
