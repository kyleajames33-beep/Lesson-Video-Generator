import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, prog} from '../../kit';
import {Heading, sc, Q2_CALC} from './common';
import {Sx, Question, Board, Line, FormulaCounter, Wrong, under, INK_SOFT, RED} from './parts';
const Q=cues(sc('q2-question'),{q:'Question two', at:'Water treatment', pause:'Pause here'});
export const SceneQ2Question: React.FC=()=> <><Heading text="Question 2" at={Q.q} size={52}/><Question n={2} at={Q.at} pause={Q.pause}/></>;
const O=cues(sc('q2-outlier'),{trial:'Trial three', reason:'The reason', water:'water', high:'high', trials:'Trials one', use:'use'});
export const SceneQ2Outlier: React.FC=()=>{
 const f=useCurrentFrame();
 return <Board n={2} underlines={[under(4,'0.842 g',O.trial),under(4,'weighed after one drying only',O.water),under(3,'0.781 g, dried to constant mass',O.trials),under(3,'0.785 g, dried to constant mass',O.trials+12)]} ticks={{0:O.use}}>
  <Sx x={365} y={515} text="Trial 3: 0.842 g" size={37} at={O.trial} opacity={1-.65*prog(f,O.high,15)}/>
  <DrawPath d="M360,505 L640,525" at={O.high} color={RED}/>
  <Sx x={760} y={515} text="different ≠ a reason" size={32} color={INK_SOFT} at={O.trial} out={O.water}/>
  <Line text="not at constant mass: water still there" at={O.water} y={600} size={34} dim={O.use}/>
  <Line text="extra water → extra mass → reads high" at={O.high} y={665} size={34} dim={O.use}/>
  <Line text="mean = (0.781 + 0.785) ÷ 2 = 0.783 g" at={O.use} y={755} size={39}/>
  <Sx x={365} y={835} text="(a) Exclude trial 3: it was not dried to constant mass." size={32} at={O.use}/>
  <Sx x={365} y={885} text="Retained water made its mass too high." size={32} at={O.use+8}/>
  <Sx x={365} y={935} text="Trials 1 and 2 were at constant mass and agree." size={32} at={O.use+16}/>
 </Board>;
};
const R=cues(sc('q2-ratio-calc'),{start:'Moles of barium', moles:['moles',2], three:'three sulfate', divide:'Divide by three', mass:'Times three hundred', percent:'percent', sample:'Out of point', under:'under a hundred'});
export const SceneQ2Ratio: React.FC=()=> <Board n={2} underlines={[under(7,'M(BaSO₄) = 233.39',R.moles),under(7,'M(Al₂(SO₄)₃) = 342.14',R.mass),under(1,'0.400 g',R.percent)]} ticks={{0:-100,1:R.three}}>
 <Sx x={365} y={485} text="Keep: mean BaSO₄ mass = 0.783 g" size={29} color={INK_SOFT} at={-100}/>
 <Line text="n(BaSO₄) = 0.783 ÷ 233.39" at={R.start} y={555} size={35} dim={R.divide}/>
 <Line text="= 3.355 × 10⁻³ mol" at={R.moles} y={610} size={37} dim={R.divide}/>
 <Line text="n(Al₂(SO₄)₃) = 3.355 × 10⁻³ ÷ 3" at={R.divide} y={685} size={32} dim={R.mass}/>
 <Line text={`= ${(Q2_CALC.nSalt*1000).toFixed(4)} × 10⁻³ mol`} at={R.divide+30} y={735} size={35} dim={R.mass}/>
 <Line text={`m = ${(Q2_CALC.nSalt*1000).toFixed(4)} × 10⁻³ × 342.14 = ${Q2_CALC.mSalt.toFixed(4)} g`} at={R.mass} y={805} size={31} dim={R.percent}/>
 <Sx x={365} y={849} text="guard digit kept" size={27} color={INK_SOFT} at={R.mass}/>
 <Line text={`% = ${Q2_CALC.mSalt.toFixed(4)} ÷ 0.400 × 100 = ${Q2_CALC.purity.toFixed(1)}%`} at={R.percent} y={920} size={36}/>
 <Sx x={1230} y={900} text="about 96%: under 100%" size={28} color={INK_SOFT} at={R.under}/>
 <FormulaCounter at={R.three}/>
 <Sx x={365} y={985} text="c02: mass → moles → ratio → target" size={27} color={INK_SOFT} at={R.start}/>
</Board>;
const M=cues(sc('q2-mistake'),{one:'one to one', result:'two hundred', cross:'ratio'});
export const SceneQ2Mistake: React.FC=()=> <Board n={2} underlines={[under(0,'Al₂(SO₄)₃',M.one)]} ticks={{0:-100,1:M.cross}}>
 <FormulaCounter at={-100}/>
 <Wrong text="3.355 × 10⁻³ × 342.14 ÷ 0.400 × 100 = 287%" at={M.result} cross={M.cross} reason="three sulfates per formula unit: divide by 3" y={545}/>
 <Line text="Over 100%? Check the ratio first." at={M.cross+10} y={850} size={42}/>
</Board>;
