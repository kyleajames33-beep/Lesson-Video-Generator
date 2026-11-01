import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, prog} from '../../kit';
import {RecGauge} from '../chem-m8-p02/parts';
import {Heading, sc} from './common';
import {BURETTE, FUNNEL, CLOUDY} from './assets';
import {Overlay, Sx, PicF, Question, Board, Line, ErrorBoard, Wrong, under, INK_SOFT, NAVY, TEAL, RED} from './parts';
const Q=cues(sc('q3-question'),{q:'Question three',at:'A teacher',pause:'Pause here'});
export const SceneQ3Question: React.FC=()=> <><Heading text="Question 3" at={Q.q} size={52}/><Question n={3} at={Q.at} pause={Q.pause}/></>;
const T=cues(sc('q3-titration'),{water:'Water left', diluted:'dilutes', titre:'titre', calc:'But the calculation', more:'more silver', high:'high', fix:'Rinsing with'});
export const SceneQ3Titration: React.FC=()=>{
 const f=useCurrentFrame();
 return <Board n={3} underlines={[under(2,'with distilled water, but not with the silver nitrate solution',T.water),under(3,'0.0635',T.high)]} ticks={{3:T.high}}>
  <ErrorBoard high={T.high} low={99999}/>
  <Line text="titrant diluted → titre ↑" at={T.titre} y={515} size={37} dim={T.calc}/>
  <Line text="calculation uses the label's c" at={T.calc} y={590} size={33} dim={T.high}/>
  <Line text="→ n(Ag⁺) ↑ → n(Cl⁻) ↑" at={T.more} y={645} size={36} dim={T.high}/>
  <PicF p={BURETTE} x={1160} y={660} h={230} o={prog(f,T.water,12)}/>
  <DrawPath d="M1120,770 L1214,793" at={T.water} color={NAVY} width={2}/><rect x={1211} y={790} width={6} height={6} fill="#9fbdd4" opacity={prog(f,T.water,12)}/><g opacity={prog(f,T.water,12)}><rect x={1055} y={690} width={65} height={155} rx={10} fill="#edf3f7" stroke={NAVY} strokeWidth={3}/>
   <path d={`M1062,${823-60*prog(f,T.diluted,30)} h51 v15 h-51z`} fill="#9fbdd4"/>
   {[0,1,2,3].map(i=><circle key={i} cx={1072+(i%2)*27} cy={720+Math.floor(i/2)*42+25*prog(f,T.diluted,35)} r={5} fill="#84847e"/>)}
   <Sx x={1050} y={930} text="water film mixes" size={24} color={NAVY} at={T.diluted}/></g>
  <Sx x={365} y={740} text="(a) Method 1: water dilutes AgNO₃." size={31} at={T.high}/>
  <Sx x={365} y={790} text="A larger titre with the labelled c" size={31} at={T.high+6}/>
  <Sx x={365} y={840} text="overstates Ag⁺ and Cl⁻: result too high." size={31} at={T.high+12}/>
  <Line text="fix: rinse with the AgNO₃ solution" at={T.fix} y={960} size={33}/>
 </Board>;
};
const G=cues(sc('q3-gravimetric'),{silver:'Silver chloride', lost:'never reaches', mass:'Less mass', low:'low', systematic:'systematic'});
export const SceneQ3Gravimetric: React.FC=()=>{
 const f=useCurrentFrame(), p=prog(f,G.lost,28);
 return <Board n={3} underlines={[under(3,'some precipitate',G.silver),under(4,'passed through a small tear',G.silver),under(4,'0.0607',G.low)]} ticks={{3:G.low}}>
  <ErrorBoard high={-100} low={G.low}/>
  <Sx x={365} y={510} text="Method 1: diluted titrant → result high" size={29} color={INK_SOFT} at={-100}/>
  <Line text="AgCl lost → mass ↓ → n(Cl⁻) ↓" at={G.mass} y={585} size={35}/>
  <PicF p={FUNNEL} x={1100} y={700} h={240} o={1-p}/><PicF p={CLOUDY} x={1100} y={700} h={240} o={p}/>
  <DrawPath d="M1170,747 l10,13 -10,12 10,13" at={G.lost} color={RED} width={4}/>
  <Sx x={1100} y={980} text="AgCl lost in the filtrate" size={25} color={INK_SOFT} at={G.lost}/>
  <Sx x={365} y={725} text="(a) Method 2: AgCl passed through the tear." size={30} at={G.low}/>
  <Sx x={365} y={775} text="Less solid was weighed, so the mass" size={30} at={G.low+6}/>
  <Sx x={365} y={825} text="and the calculated chloride were too low." size={30} at={G.low+12}/>
  <Line text="same direction every repeat: systematic" at={G.systematic} y={985} size={32}/>
 </Board>;
};
const C=cues(sc('q3-claim'),{mean:'The mean', luck:"That's luck", miss:'miss', fixes:'The fixes', claim:"So the claim", known:'known solution', average:'average'});
export const SceneQ3Claim: React.FC=()=> <Board n={3} underlines={[under(6,'mean of the two results, 0.0621',C.mean)]} ticks={{3:-100}}>
 <ErrorBoard high={-100} low={-100} mean={C.mean} miss={C.miss}/>
 <Sx x={365} y={510} text="(b) Opposite errors, similar in size:" size={32} at={C.mean}/>
 <Line text="up 0.0015, down 0.0013" at={C.mean} y={560} size={32} dim={C.fixes}/>
 <Sx x={365} y={625} text="The mean's agreement is a coincidence." size={31} at={C.luck}/>
 <Sx x={365} y={675} text="Neither result is accurate; each method" size={31} at={C.luck+8}/>
 <Sx x={365} y={720} text="has a systematic error." size={31} at={C.luck+16}/>
 <Sx x={365} y={785} text="Fix both causes, then test each method" size={31} at={C.fixes}/>
 <Sx x={365} y={830} text="on a known solution. Claim not supported." size={31} at={C.claim}/>
 <RecGauge G={{x:1230,y:965,w:500}} at={C.known} label={()=>'known sample'} q={C.known} ticks={false}/>
 <Sx x={1230} y={1030} text="p02: test each fixed method" size={26} color={INK_SOFT} at={C.known}/>
 <Wrong text="mean ≈ 0.0620, so the analysis was accurate" at={C.average} cross={C.average+8} reason="a close mean doesn't validate either method" y={925}/>
</Board>;
const D=cues(sc('decision-board'),{results:'results',ratio:'Take the ratio',dilution:'dilution',moves:'moves',next:'Next'});
export const SceneDecision: React.FC=()=>{
 const f=useCurrentFrame();
 const rows=[
 {label:'Which results to use?',at:D.results,q:'Q1, Q2',lines:['Drop the rough titre; exclude a result for its stated cause,','not its size.']},
 {label:'Ratio from the precipitate?',at:D.ratio,q:'Q1, Q2',lines:['Ag⁺ : Cl⁻ = 1 : 1;  1 Al₂(SO₄)₃ : 3 BaSO₄.','Over 100%? Check the ratio first.']},
 {label:'Every dilution tracked?',at:D.dilution,q:'Q1',lines:['aliquot → flask → original sample']},
 {label:'Extra or lost, which way?',at:D.moves,q:'Q3',lines:['Diluted titrant: high. Lost solid: low.','A close mean does not validate either method.']},
 ];
 return <><Heading text="Right data, right ratio, right direction" at={0} size={56}/><Overlay>
 <Sx x={110} y={250} text="Check" size={34} color={NAVY} at={0}/><Sx x={700} y={250} text="What you do" size={34} color={NAVY} at={0}/>
 {rows.map((r,i)=><g key={i} opacity={prog(f,r.at,12)*(i<3 ? 1-.58*prog(f,rows[i+1].at,14):1)}>
  <rect x={96} y={285+i*145} width={1728} height={130} rx={14} fill="#fffdf8" stroke="#b9a98f" strokeWidth={2}/>
  <Sx x={120} y={340+i*145} text={r.label} size={32} hand at={r.at}/><Sx x={120} y={385+i*145} text={r.q} size={26} color={TEAL} at={r.at}/>
  {r.lines.map((t,j)=><Sx key={j} x={700} y={337+i*145+j*43} text={t} size={30} at={r.at+j*8}/>)}
 </g>)}
 <Sx x={120} y={940} text="mass → moles → ratio → target" size={34} hand color={TEAL} at={D.ratio}/>
 <Sx x={990} y={955} text="Next: identifying cations" size={32} color={TEAL} at={D.next}/>
 <Sx x={990} y={1000} text="flame, precipitate and complex tests" size={28} at={D.next+8}/>
 </Overlay></>;
};
export const SceneNotes: React.FC=()=> <><Heading text="Key notes: what to write in your book" at={0} size={52}/><Overlay>
 {[
 '1. Titration: drop the rough titre; average concordant titres (within 0.10 mL).',
 'Mohr: Ag⁺ + Cl⁻ → AgCl, 1 : 1. The 2 : 1 belongs to the chromate indicator.',
 '2. Dilution: aliquot moles × (flask volume ÷ aliquot volume) = original sample moles.',
 'Then divide by the original sample volume.',
 '5.45 × 10⁻⁴ × 10 ÷ 0.01000 L = 0.545 mol/L = 19.3 g/L.',
 '3. Exclude a result for its stated cause, not just because it looks different.',
 'Not dried to constant mass: retained water makes the mass too high.',
 '4. 1 Al₂(SO₄)₃ → 3 BaSO₄, so n(Al₂(SO₄)₃) = n(BaSO₄) ÷ 3.',
 'A purity over 100% means check the ratio.',
 '5. Diluted titrant → titre high → result high. Lost solid → result low.',
 'A mean of two biased results is not evidence of accuracy.',
 ].map((t,i)=><Sx key={i} x={140} y={260+i*52} text={t} size={32} at={8+i*3}/>)}
 <Sx x={140} y={915} text="mass → moles → ratio → target" size={44} hand color={TEAL} at={45}/>
 <Sx x={140} y={985} text="Over 100%? Check the ratio first." size={42} hand color={TEAL} at={50}/>
 </Overlay></>;
