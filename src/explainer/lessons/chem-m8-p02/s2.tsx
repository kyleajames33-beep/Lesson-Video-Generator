// M8 P02 scenes 7 to 12: dry to constant mass (c02's weighing loop with the tare readout, two agreeing readings and the
// subtraction line); results and recovery (the example-data table, the two calculation lines, the gauge fills per set);
// reliable and accurate (the trial dot strip with spread and gap brackets, the cards, the filtrate evidence arrow, the
// repeats chip); valid (the validity card, the controlled list ticked, the three "only sulfate" chips with thumbnails,
// the necessary condition, the narrowed aim); the risk assessment (one current row at a time, then the full table held);
// the memory aid (the gauge with its lost and extra regions pulsing).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues, speechEnd} from '../../cues';
import {DrawPath, prog} from '../../kit';
import {RTable, VCard} from '../chem-m6-p02/parts';
import {BigRow} from '../chem-m7-p04/parts';
import {TickMark} from '../chem-m7-c01/molecules';
import {BAL, CLOUDY, DESICC, FUNNEL, GLASSES, GLOVES, NB, OVEN, TUBE, WASTE, sc} from './common';
import {AChip, Arrow, BalRead, DimG, FallDrop, Fade, GREENC, GREYX, HAZ, INK, INK_SOFT, KeptChip, MethodStrip, NAVY, Note, Overlay, PicF, RecGauge, SETA, SETB, Sx, TaskLine, Tongs, VBracket, picW, vis} from './parts';
import type {GaugeP} from './parts';

const EXP = `expected 0.670${NB}g`;

// ---------- 7. Dry to constant mass ----------
const K7 = cues(sc('constant-mass'), {dry: 'Dry each paper', ten: 'hundred and ten', cool: 'cool it', desicc: 'in a desiccator', weigh: 'and weigh it', tared: 'tared watch glass', until: 'until two', agree: 'row agree'});
export const SceneConstant: React.FC = () => {
	const f = useCurrentFrame();
	const OV = {x: 110, y: 230, h: 250}, DS = {x: 560, y: 230, h: 250}, BL = {x: 330, y: 560, h: 300};
	const hi = (t0: number, t1: number) => vis(f, t0, t1, 8);
	const glows: [typeof OV, number][] = [[OV, hi(K7.dry, K7.cool)], [DS, hi(K7.cool, K7.weigh)], [BL, hi(K7.weigh, 1e9)]];
	const RX = 1040;
	return (
		<Overlay>
			<TaskLine text="Dry to constant mass" at={2} size={54} />
			<MethodStrip lit={{4: -100, 5: -100, 6: K7.dry, 7: K7.cool, 8: K7.weigh}} />
			{glows.map(([P, g], i) => (g > 0.01 ? <ellipse key={i} cx={P.x + 140} cy={P.y + P.h / 2} rx={190} ry={P.h * 0.62} fill="#f6d77a" opacity={0.35 * g} /> : null))}
			<PicF p={OVEN} x={OV.x} y={OV.y} h={OV.h} />
			<Note x={OV.x + 130} y={OV.y - 18} text={`about 110${NB}°C`} size={30} color="#a8601c" anchor="middle" at={K7.ten} />
			<PicF p={DESICC} x={DS.x} y={DS.y} h={DS.h} o={vis(f, K7.cool - 6, undefined, 12)} />
			<Note x={DS.x + 125} y={DS.y - 18} text="desiccator" size={30} color={INK_SOFT} anchor="middle" at={K7.desicc} />
			<PicF p={BAL} x={BL.x} y={BL.y} h={BL.h} o={vis(f, K7.weigh - 10, undefined, 12)} />
			<Arrow x1={OV.x + 290} y1={OV.y + 140} x2={DS.x - 16} y2={DS.y + 140} at={K7.cool} color={INK_SOFT} width={5} />
			<Arrow x1={DS.x + 130} y1={DS.y + DS.h + 14} x2={BL.x + 250} y2={BL.y + 50} at={K7.weigh} color={INK_SOFT} width={5} />
			<Arrow x1={BL.x - 10} y1={BL.y + 90} x2={OV.x + 120} y2={OV.y + OV.h + 16} at={K7.until} color={INK_SOFT} width={5} />
			<BalRead p={BAL} x={BL.x} y={BL.y} h={BL.h} at={K7.weigh + 6} text={fr => (fr < K7.until + 10 ? '0.000' : '1.574')} />
			<Note x={RX} y={300} text={`watch glass tared (0.000${NB}g)`} size={30} color={NAVY} hand={false} at={K7.tared} />
			<Note x={RX} y={400} text={`1: 1.574${NB}g`} size={44} color={INK} hand={false} at={K7.until + 10} />
			<Note x={RX} y={464} text={`2: 1.574${NB}g`} size={44} color={INK} hand={false} at={K7.agree} />
			<VBracket x={RX + 250} y1={360} y2={474} at={K7.agree + 4} color={SETB} />
			<Note x={RX + 290} y={430} text="constant mass" size={34} color={SETB} at={K7.agree + 8} />
			<Note x={RX} y={600} text={`1.574 − 0.910 (paper) = 0.664${NB}g BaSO_4`} size={38} color={NAVY} hand={false} at={K7.agree + 30} />
			<AChip x={RX} y={630} text="set B, trial 1" size={24} color={GREYX} hand={false} at={K7.agree + 40} />
		</Overlay>
	);
};

// ---------- 8. Results and recovery ----------
const K8 = cues(sc('results-recovery'), {three: 'Three trials', amean: "Set A's mean", bmean: "set B's is", divide: "Divide set B's", target: 'by the target', times: 'times by a', pct: ['percent', 1], arec: 'Set A recovered', pct2: ['percent', 2]});
const TCOL = [960, 1310, 1440, 1570, 1730];
export const SceneResults: React.FC = () => {
	const f = useCurrentFrame();
	const G: GaugeP = {x: 120, y: 760, w: 700};
	const rows = [{n: 'set A (no digestion)', c: SETA, v: ['0.630', '0.638', '0.627', '0.632'], at: K8.amean - 20}, {n: 'set B (digested)', c: SETB, v: ['0.664', '0.661', '0.666', '0.664'], at: K8.bmean - 10}];
	return (
		<Overlay>
			<TaskLine text="Results" at={2} size={54} />
			<Fade at={K8.three - 6}><rect x={940} y={200} width={920} height={300} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
			<Sx x={1840} y={190} text="example data" size={22} color={GREYX} anchor="end" hand weight={700} at={K8.three} />
			{['', 'trial 1', 'trial 2', 'trial 3', `mean (g BaSO_4)`].map((h, i) => <Sx key={i} x={TCOL[i]} y={250} text={h} size={24} color={INK_SOFT} anchor="middle" hand weight={700} at={K8.three + i * 3} />)}
			{rows.map((r, j) => (
				<g key={j}>
					<Sx x={TCOL[0]} y={320 + j * 70} text={r.n} size={28} color={r.c} weight={800} at={r.at} />
					{r.v.map((q, i) => <Sx key={i} x={TCOL[i + 1]} y={320 + j * 70} text={q} size={30} color={INK} anchor="middle" weight={i === 3 ? 800 : 600} at={r.at + 8 + i * 6} />)}
				</g>
			))}
			<Sx x={TCOL[0]} y={470} text="filtrate: A faintly cloudy; B clear" size={24} color={GREYX} weight={600} at={K8.bmean + 30} />
			<Note x={960} y={600} text={`set B: 0.664 ÷ 0.670 × 100`} size={38} color={INK} hand={false} at={K8.divide} />
			<Note x={1480} y={600} text="= 99.1%" size={44} color={SETB} hand={false} at={K8.pct} />
			<Note x={960} y={680} text={`set A: 0.632 ÷ 0.670 × 100 = 94.3%`} size={36} color={SETA} hand={false} at={K8.pct2} />
			<PicF p={CLOUDY} x={220} y={250} h={330} o={vis(f, K8.three + 10)} />
			<Sx x={220 + picW(CLOUDY, 330) / 2} y={620} text="A" size={36} color={SETA} anchor="middle" hand weight={700} at={K8.three + 10} />
			<PicF p={FUNNEL} x={500} y={250} h={330} o={vis(f, K8.three + 16)} />
			<Sx x={500 + picW(FUNNEL, 330) / 2} y={620} text="B" size={36} color={SETB} anchor="middle" hand weight={700} at={K8.three + 16} />
			<RecGauge G={G} at={K8.divide - 10} label={() => EXP} rows={2} fills={[{v: 99.1, at: K8.pct, color: SETB, row: 0, label: 'B 99.1%'}, {v: 94.3, at: K8.pct2 + 6, color: SETA, row: 1, label: 'A 94.3%'}]} />
			{void K8.target}{void K8.times}{void K8.arec}
		</Overlay>
	);
};

// ---------- 9. Reliable, and accurate? ----------
const K9 = cues(sc('reliable-accurate'), {rel: 'Reliable?', within: 'Within each set', agree: 'trials agree', gap: 'the gap between', spread: 'that spread', acc: 'Accurate?', know: 'You know the', bclose: 'Set B is close', alow: 'Set A is about', every: 'every trial', cloudy: 'cloudy filtrate shows', fine: 'fine crystals went', paper: 'the paper', repeats: "Repeats won't", back: 'crystals back'});
const TS = {x0: 140, x1: 1040, y: 560};
const tsx = (v: number) => TS.x0 + ((v - 0.62) / 0.055) * (TS.x1 - TS.x0);
const AV = [0.63, 0.638, 0.627], BV = [0.664, 0.661, 0.666];
/** Bracket over (dir -1) or under (dir 1) x1..x2 at y, with a label. */
const HBr: React.FC<{x1: number; x2: number; y: number; text: string; at: number; color?: string; size?: number; dir?: 1 | -1; out?: number}> = ({x1, x2, y, text, at, color = INK_SOFT, size = 24, dir = -1, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	const d = 14 * -dir;
	return (
		<g opacity={v}>
			<DrawPath d={`M${x1},${y + d} L${x1},${y} L${x2},${y} L${x2},${y + d}`} at={at} dur={12} color={color} width={4} />
			<Sx x={(x1 + x2) / 2} y={dir < 0 ? y - 14 : y + size + 10} text={text} size={size} color={color} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
export const SceneReliable: React.FC = () => {
	const f = useCurrentFrame();
	const sv = vis(f, K9.rel - 10, undefined, 14);
	const am = tsx(0.632), bm = tsx(0.664), ex = tsx(0.67);
	const bp = Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - K9.bclose) / 50)) * Math.PI));
	const relDim = 1 - 0.55 * prog(f, K9.acc, 14);
	return (
		<Overlay>
			<TaskLine text="Reliable? Accurate?" at={2} size={54} />
			<g opacity={sv}>
				<line x1={TS.x0 - 20} x2={TS.x1 + 20} y1={TS.y} y2={TS.y} stroke={INK} strokeWidth={4} />
				{[0.62, 0.63, 0.64, 0.65, 0.66, 0.67].map(t => <g key={t}><line x1={tsx(t)} x2={tsx(t)} y1={TS.y} y2={TS.y + 12} stroke={INK_SOFT} strokeWidth={3} /><Sx x={tsx(t)} y={TS.y + 40} text={t.toFixed(3)} size={20} color={INK_SOFT} anchor="middle" weight={600} at={-1000} /></g>)}
				<Sx x={TS.x1 + 40} y={TS.y + 40} text="g BaSO_4" size={20} color={INK_SOFT} weight={600} at={-1000} />
				<line x1={ex} x2={ex} y1={TS.y - 110} y2={TS.y + 60} stroke={NAVY} strokeWidth={4} strokeDasharray="10 8" />
				<Sx x={ex} y={TS.y - 120} text={EXP} size={24} color={NAVY} anchor="middle" weight={700} at={-1000} />
				{AV.map((v, i) => <circle key={'a' + i} cx={tsx(v)} cy={TS.y - 20} r={12} fill={SETA} opacity={prog(f, K9.rel + i * 6, 10)} />)}
				{BV.map((v, i) => <circle key={'b' + i} cx={tsx(v)} cy={TS.y - 20} r={12} fill={SETB} opacity={prog(f, K9.rel + 20 + i * 6, 10)} />)}
				<rect x={am - 3} y={TS.y - 50} width={6} height={60} fill={SETA} opacity={prog(f, K9.within, 10)} />
				{bp > 0.01 ? <circle cx={bm} cy={TS.y - 20} r={40} fill={SETB} opacity={0.25 * bp} /> : null}
				<rect x={bm - 3} y={TS.y - 50} width={6} height={60} fill={SETB} opacity={prog(f, K9.within, 10)} />
			</g>
			<g opacity={relDim}>
				<HBr x1={tsx(0.627) - 14} x2={tsx(0.638) + 14} y={TS.y - 60} text={`A: spread 0.011${NB}g`} at={K9.agree} color={SETA} />
				<HBr x1={tsx(0.661) - 14} x2={tsx(0.666) + 14} y={TS.y - 60} text={`B: spread 0.005${NB}g`} at={K9.agree + 8} color={SETB} />
				<HBr x1={am} x2={bm} y={TS.y + 70} dir={1} text={`gap 0.032${NB}g: bigger than either spread`} at={K9.spread} color={INK} />
			</g>
			<VCard x={1150} y={200} w={700} h={150} title="Reliability: repeats agree?" titleAt={K9.rel} at={K9.rel} color={NAVY} dim={K9.acc} lines={[{t: 'within each set: yes', at: K9.agree + 10, size: 28}]} />
			<TickMark x={1790} y={250} at={K9.agree + 14} />
			<VCard x={1150} y={380} w={700} h={210} title="Accuracy: how close to the true value?" titleAt={K9.acc} at={K9.acc} color={NAVY} lines={[{t: 'B: 99.1%, close', at: K9.bclose, size: 30, color: SETB, weight: 800}, {t: 'A: about 6% low, every trial', at: K9.alow, size: 30, color: SETA, weight: 800}]} />
			<Arrow x1={am} y1={TS.y + 170} x2={ex - 8} y2={TS.y + 170} at={K9.alow} color={SETA} width={4} />
			<Note x={(am + ex) / 2} y={TS.y + 160} text="A: about 6% below the true value" size={26} color={SETA} anchor="middle" at={K9.every} />
			<PicF p={CLOUDY} x={140} y={790} h={200} o={vis(f, K9.cloudy, undefined, 12)} />
			<Note x={300} y={880} text="fine crystals lost → mass ↓ → recovery ↓" size={34} color={SETA} at={K9.paper} />
			<AChip x={300} y={910} text="c02: lost reads low" size={24} color={GREYX} hand={false} at={K9.paper + 20} />
			<KeptChip x={1150} y={640} text="repeats can't recover lost crystals" at={K9.back} color={HAZ} size={32} />
			<AChip x={1150} y={730} text="s07: repeats help reliability, not a systematic error" size={22} color={GREYX} hand={false} at={K9.back + 20} />
			{void K9.gap}{void K9.know}{void K9.fine}{void K9.repeats}
		</Overlay>
	);
};

// ---------- 10. Is it valid? ----------
const K10 = cues(sc('valid'), {valid: 'Is the comparison', only: 'Only digestion changed', put: 'put down to', sulfate: 'measures only sulfate', acid: 'the acid stops', washings: 'clear washings', constant: 'constant mass shows', one: 'One more condition', pure: 'pure and dry', value: 'true value', here: 'So here', cond: 'these conditions'});
const CTRL10 = ['0.500 g K_2SO_4', 'acid', 'BaCl_2 volume and concentration', 'fine filter paper', 'filtration temperature', 'washing', 'drying to constant mass'];
export const SceneValid: React.FC = () => {
	const f = useCurrentFrame();
	const chips = [
		{t: 'acidified: no BaCO_3', at: K10.acid},
		{t: 'washings clear: no BaCl_2 solution left', at: K10.washings},
		{t: 'constant mass: no water', at: K10.constant},
	];
	return (
		<Overlay>
			<TaskLine text="Valid?" at={2} size={54} out={K10.cond - 10} />
			<Fade at={K10.valid}><rect x={96} y={200} width={1160} height={690} rx={20} fill="#fffdf8" stroke={GREENC} strokeWidth={3.5} /></Fade>
			<Sx x={126} y={262} text="Validity: does it test what it was meant to?" size={40} color={GREENC} hand weight={700} at={K10.valid} />
			<Sx x={126} y={340} text="one variable changed: digestion" size={34} color={GREENC} weight={800} at={K10.only} />
			<TickMark x={720} y={330} at={K10.put} />
			<g opacity={vis(f, K10.only + 10) * (1 - 0.45 * prog(f, K10.sulfate, 14))}>
				<rect x={1300} y={200} width={540} height={400} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
				<Sx x={1326} y={250} text="Controlled:" size={30} color={INK} hand weight={700} at={-1000} />
				{CTRL10.map((c, i) => (
					<g key={i}>
						<Sx x={1340} y={300 + i * 42} text="✓" size={26} color={GREENC} weight={800} at={K10.only + 14 + i * 5} />
						<Sx x={1376} y={300 + i * 42} text={c} size={24} color={INK} weight={600} at={K10.only + 14 + i * 5} />
					</g>
				))}
			</g>
			<Sx x={126} y={430} text="the method measures only sulfate:" size={32} color={INK} weight={700} at={K10.sulfate} />
			{chips.map((c, i) => <AChip key={i} x={250} y={460 + i * 92} text={c.t} size={30} color={GREENC} hand={false} at={c.at} />)}
			{[0, 1, 2].map(i => <FallDrop key={i} x={150 + i * 22} y0={455} y1={520} at={K10.acid + i * 8} color="#f3d7b0" s={1.2} />)}
			<Sx x={160} y={540} text="HCl" size={22} color={INK_SOFT} anchor="middle" weight={700} at={K10.acid} />
			<PicF p={TUBE.clear} x={150} y={548} h={84} o={vis(f, K10.washings)} />
			<PicF p={BAL} x={150} y={640} h={84} o={vis(f, K10.constant)} />
			<AChip x={126} y={760} text="known value holds only if the standard is pure and dry" size={30} color={NAVY} hand={false} at={K10.pure} />
			<Note x={130} y={866} text="a necessary condition" size={26} color={GREYX} at={K10.pure + 20} />
			<Sx x={96} y={150} text={`digestion → higher recovery (99.1% against 94.3%), under these conditions`} size={40} color={GREENC} weight={800} at={K10.cond} />
			<TickMark x={1720} y={136} at={K10.cond + 20} />
			<Sx x={96} y={950} text="Validity: fair test.   Reliability: repeats agree.   Accuracy: close to the true value." size={24} color={INK_SOFT} weight={600} at={K10.here} />
			{void K10.one}{void K10.value}{void DimG}
		</Overlay>
	);
};

// ---------- 11. Risk assessment ----------
const K11 = cues(sc('risk'), {now: 'Now the risks', barely: 'barely dissolves', xray: 'X-ray scans', diss: 'Dissolved barium chloride', toxic: 'toxic if swallowed', teacher: 'your teacher prepares', gloves: 'Wear gloves', after: 'hands afterwards', acid: 'The dilute acid', silver: 'silver nitrate stains', tongs: 'Use tongs', filtrate: 'The filtrate and', sink: 'the sink'});
const FULL: string[][][] = [
	[['Barium chloride: solid BaCl₂·2H₂O', '(H301, H332); the 0.20 mol/L', 'solution is also harmful if swallowed'], ['poisoning if swallowed;', 'harmful dust if the solid', 'is weighed'], ['teacher prepares and dispenses the dilute', 'solution (students do not handle the solid);', 'nitrile gloves, glasses; no food or drink; wash', 'hands; wipe spills into heavy-metal waste']],
	[['Dilute hydrochloric acid, 2 mol/L', '(H290; some suppliers add', 'H315, H319)'], ['eye and skin irritation'], ['safety glasses, gloves; small volume from a', 'dispensing bottle; rinse skin with water']],
	[['Silver nitrate solution, 0.1 mol/L', '(solid H272, H290, H314, H410;', 'dilute: eye and skin irritant,', 'very toxic to aquatic life)'], ['stains skin brown-black;', 'eye irritation;', 'harms waterways'], ['dropper, 1 or 2 drops per test; gloves,', 'glasses; test tubes into silver waste']],
	[['Hotplate and near-boiling liquid'], ['burns; bumping'], ['heat to just below boiling, stir with a', 'glass rod; heat-resistant gloves or tongs to', 'move the beaker; let it cool to room', 'temperature before filtering']],
	[['Drying oven (about 110 °C), hot', 'watch glass; desiccator lid'], ['burns; cracked glass'], ['tongs; cool in the desiccator; slide the lid', 'off, never lift it by the knob with a hot', 'dish inside']],
	[['Potassium sulfate; barium sulfate', 'precipitate'], ['low hazard (not classified)'], ['glasses; dried BaSO₄ and filter paper to', 'solid waste as the school directs']],
	[['Waste: filtrate and washings', '(dissolved barium), silver', 'test tubes'], ['dissolved barium is toxic;', 'silver harms waterways'], ['barium waste into the labelled heavy-metal', 'waste container; silver waste into its', 'labelled container; never the sink']],
];
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	const T = Math.max(K11.sink + 24, speechEnd(sc('risk')) - 6);
	const spoken = 1 - prog(f, T - 4, 14);
	const words = [{t: 'barium chloride', at: K11.acid}, {t: 'acid', at: K11.silver}, {t: 'silver nitrate', at: K11.tongs}, {t: 'hot apparatus', at: K11.filtrate}];
	let wx = 700;
	const WX = words.map(w => { const x = wx; wx += w.t.length * 15 + 70; return x; });
	const [wbx, wby, wbh] = [760, 470, 340];
	const wbw = picW(WASTE, wbh);
	return (
		<Overlay>
			<g opacity={spoken}>
				<Sx x={96} y={150} text="Risk assessment" size={54} color={INK} hand at={K11.now} />
				{words.map((w, i) => <AChip key={i} x={WX[i]} y={112} text={w.t} size={24} color={GREYX} hand={false} at={w.at} />)}
				<Sx x={110} y={250} text="Hazard" size={32} color={HAZ} hand at={K11.diss} />
				<Sx x={720} y={250} text="Harm" size={32} color={INK} hand at={K11.diss} />
				<Sx x={1200} y={250} text="Control" size={32} color={GREENC} hand at={K11.diss} />
				<AChip x={110} y={290} text="BaSO_4(s): barely dissolves  |  BaCl_2(aq): dissolved barium, toxic" size={30} color={GREYX} hand={false} at={K11.xray} out={K11.toxic} />
				<Note x={110} y={400} text="c02: barely dissolves" size={26} color={GREYX} at={K11.xray + 20} out={K11.toxic} />
				<BigRow y={280} at={K11.toxic} out={K11.acid} cells={[['barium chloride solution'], ['toxic if swallowed'], ['teacher prepares and dispenses;', 'gloves, glasses; wash hands']]} />
				<BigRow y={280} at={K11.acid} out={K11.silver} cells={[['dilute hydrochloric acid'], ['irritates eyes and skin'], ['glasses, gloves; small volume;', 'rinse skin with water']]} />
				<BigRow y={280} at={K11.silver} out={K11.tongs} cells={[['silver nitrate solution'], ['stains skin;', 'harms waterways'], ['dropper, 1 or 2 drops;', 'gloves, glasses; silver waste']]} />
				<BigRow y={280} at={K11.tongs} out={K11.filtrate} cells={[['hot beaker, hotplate, oven'], ['burns'], ['tongs or heat-resistant gloves;', 'cool before handling']]} />
				<BigRow y={280} at={K11.filtrate} cells={[['filtrate and washings', '(dissolved barium)'], ['toxic; harms waterways'], ['heavy-metal waste container;', 'never the sink']]} />
				<g opacity={vis(f, K11.gloves, undefined, 12)}>
					<PicF p={GLASSES} x={1280} y={520} h={110} />
					<PicF p={GLOVES} x={1540} y={500} h={150} />
					<Sx x={1560} y={700} text="always" size={28} color={GREENC} anchor="middle" hand weight={700} at={K11.gloves} />
				</g>
				<g opacity={vis(f, K11.tongs - 4, K11.filtrate, 12)}>
					<PicF p={OVEN} x={160} y={490} h={300} />
					<Tongs x={560} y={650} s={1.2} at={K11.tongs} />
				</g>
				<g opacity={vis(f, K11.filtrate + 10, undefined, 12)}>
					<PicF p={WASTE} x={wbx} y={wby} h={wbh} />
					<Sx x={wbx + wbw / 2} y={wby + wbh * 0.6} text="Heavy-metal" size={22} color={INK} anchor="middle" weight={800} at={-1000} />
					<Sx x={wbx + wbw / 2} y={wby + wbh * 0.6 + 26} text="waste: barium" size={22} color={INK} anchor="middle" weight={800} at={-1000} />
				</g>
				<Note x={1100} y={880} text="never the sink" size={40} color={HAZ} at={K11.sink} />
				<AChip x={96} y={940} text="follow your school's risk assessment and each bottle's safety data sheet" size={24} color={GREYX} hand={false} at={K11.sink} />
			</g>
			<RTable x={640} y={120} cols={[380, 330, 490]} head={['Hazard', 'Harm', 'Control']} at={T} rowH={106} size={18} headSize={24} rows={FULL.map(r => ({at: T, cells: r, dimAt: 1e9}))} />
			<Fade at={T}>
				<Sx x={96} y={190} text="Pause to read the full risk table" size={36} color={NAVY} hand weight={700} at={T} />
				<PicF p={GLASSES} x={110} y={300} h={110} />
				<PicF p={GLOVES} x={330} y={280} h={150} />
				<Sx x={300} y={480} text="always" size={32} color={GREENC} anchor="middle" hand weight={700} at={T} />
				<Sx x={640} y={990} text="Follow your school's risk assessment and each bottle's safety data sheet." size={22} color={INK_SOFT} weight={600} at={T} />
			</Fade>
			{void K11.barely}{void K11.teacher}{void K11.after}{void K11.diss}
		</Overlay>
	);
};

// ---------- 12. Memory aid ----------
const K12 = cues(sc('memory-aid'), {one: 'One line', rec: 'Recovery is found', under: 'Under a hundred', lost: 'was lost', over: 'Over a hundred', extra: 'something extra'});
export const SceneAid: React.FC = () => {
	const G: GaugeP = {x: 260, y: 520, w: 1300};
	return (
		<Overlay>
			<Sx x={140} y={320} text="Recovery = found ÷ expected × 100." size={76} color={SETB} hand weight={700} at={K12.rec} />
			<RecGauge G={G} at={K12.rec + 20} label={() => 'expected (100%)'} hatch={K12.rec + 30} lostPulse={K12.lost - 10} extraPulse={K12.extra - 6} size={28} />
			<Note x={G.x} y={680} text="lost: through the paper, left behind, not precipitated" size={34} color={SETA} at={K12.lost} />
			<Note x={G.x + G.w + 40} y={760} text="extra: water, unwashed impurities" size={34} color={INK_SOFT} anchor="end" at={K12.extra} />
			<Note x={140} y={900} text="Too wet reads high; lost reads low. (c02)" size={36} color={GREYX} at={K12.extra + 30} />
			{void K12.one}{void K12.under}{void K12.over}
		</Overlay>
	);
};
