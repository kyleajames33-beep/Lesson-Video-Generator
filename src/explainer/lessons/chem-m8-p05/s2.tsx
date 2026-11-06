// M8 P05 scenes 7 to 12: batch two and what the colours claim (batch 1 slides left and shrinks; batch 2 stays orange;
// bottle C is kept out; the claim card with green and orange thumbnails and the 3° alcohol), record as you go (the
// four-column results table, the inference locked until the observation, the observed plates beside each row, the
// changed-blank tag), supported, not detected, can't tell (the claims card per unknown with its observed plates, the
// teacher's key, the tick), valid, reliable, accurate (three cards with their pictures from the start), the risk
// assessment (the table filling row by row with painted objects, then the quiet rows and the reading hold) and the
// memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues, speechEnd} from '../../cues';
import {HandText, prog} from '../../kit';
import {BATH, BR, CARB, DBOT, DICH, FUME, GLASSES, GLOVES, LIME, WASTE, sc} from './common';
import {
	AMB, ANS8, Bath, CR6, Card, ClaimTable, DimG, DrawPath, Fade, GOOD, GREYC, GREYS, Glow, IconP, INK, KNOWNC, LBot, MolAt, NAVY, OHV, PicF, Pill, RiskGrid, Sx, Table4, TaskLine, Thumb, TickAt, UNKN, Wr,
	clamp01, lerp, smooth, tubeW,
} from './parts';
import type {RiskRow} from './parts';

// ---------- 7. Batch two, and what the colours claim ----------
const K7 = cues(sc('batch-two-claims'), {a: 'A', repeats: 'repeats of A', stay: 'stay orange', c: 'C faded', ctest: "C isn't tested", green: 'Green shows', ald: 'no aldehydes', supports: 'green supports', orange: 'Orange means', det: 'detected', tert: 'tertiary', too: 'too'});
export const SceneBatchTwo: React.FC = () => {
	const f = useCurrentFrame();
	const e = smooth(prog(f, 0, 26));
	const b1 = {x: lerp(240, 100, e), y: lerp(340, 250, e), h: lerp(540, 330, e)};
	const B2 = {x: 520, y: 390, h: 470};
	const RX = 1160;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Batch two, and what the colours claim" at={0} size={54} />
			<Bath x={b1.x} y={b1.y} h={b1.h} after chips={[]} />
			<Wr x={110} y={630} text="batch 1: ethanol, B green;" at={14} size={30} color={INK} weight={700} />
			<Wr x={110} y={668} text="D, water orange" at={24} size={30} color={INK} weight={700} />
			<Bath x={B2.x} y={B2.y} h={B2.h} size={28} spread={186} chipY={B2.y - 92} resY={B2.y + B2.h + 20} chips={[
				{name: 'A', at: K7.a, color: UNKN, res: 'orange', resAt: K7.stay},
				{name: 'A (repeat)', at: K7.repeats, color: UNKN, res: 'orange', resAt: K7.stay + 6},
				{name: 'D (repeat)', at: K7.repeats + 12, color: UNKN, res: 'orange', resAt: K7.stay + 12},
				{name: 'water (blank)', at: 6, color: INK, res: 'orange', resAt: K7.stay + 18},
			]} />
			<Wr x={B2.x - 10} y={B2.y - 116} text="batch 2" at={2} size={34} color={NAVY} hand />
			<Wr x={B2.x + 130} y={B2.y - 116} text="after 5 min: unchanged" at={K7.stay + 20} size={34} color={INK} hand />
			<LBot x={110} y={720} h={270} letter="C" at={K7.c - 10} />
			<Wr x={270} y={800} text="faded bromine water:" at={K7.c + 6} size={30} color={INK} hand />
			<Wr x={270} y={840} text="kept out of" at={K7.ctest} size={30} color={CR6} hand />
			<Wr x={270} y={880} text="this batch" at={K7.ctest + 8} size={30} color={CR6} hand />
			{/* the claim card */}
			<Card x={RX} y={200} w={670} h={840} title="What the colours claim" />
			<Thumb p={DICH.green} x={RX + 24} y={290} h={170} />
			<Wr x={RX + 180} y={340} text="green: something" at={K7.green} size={38} color="#2c8a3a" weight={800} />
			<Wr x={RX + 180} y={386} text="was oxidised" at={K7.green + 12} size={38} color="#2c8a3a" weight={800} />
			<Pill x={RX + 180} y={408} text="no aldehydes in the list" at={K7.ald} color={GREYC} size={26} />
			<Glow cx={RX + 340} cy={430} rx={200} ry={40} at={K7.ald + 10} len={50} />
			<Wr x={RX + 180} y={500} text="→ 1° or 2° alcohol supported" at={K7.supports} size={34} color={ANS8} weight={800} />
			<DimG at={K7.orange} to={0.7}><line x1={RX + 24} x2={RX + 646} y1={540} y2={540} stroke="rgba(60,45,20,0.2)" strokeWidth={2} /></DimG>
			<Thumb p={DICH.orange} x={RX + 24} y={570} h={170} />
			<Wr x={RX + 180} y={620} text="orange: no 1° or 2°" at={K7.orange} size={38} color="#c25a12" weight={800} />
			<Wr x={RX + 180} y={666} text="alcohol detected" at={K7.det - 8} size={38} color="#c25a12" weight={800} />
			<MolAt k="tBuOH" x={RX + 250} y={860} s={0.85} at={K7.tert - 6} ring={{oh: K7.tert + 6}} />
			<Wr x={RX + 400} y={830} text="3° alcohol:" at={K7.tert} size={34} color={OHV} hand />
			<Wr x={RX + 400} y={872} text="stays orange" at={K7.tert + 10} size={34} color={OHV} hand />
			<Pill x={RX + 400} y={900} text="≠ no OH" at={K7.too} color={CR6} size={34} fill="#fbeee6" />
			<Pill x={RX + 24} y={970} text="c08" at={K7.tert} color={GREYC} size={26} />
			{void BATH}{void clamp01}
		</svg>
	);
};

// ---------- 8. Record as you go ----------
const K8 = cues(sc('record'), {record: 'Record as', table: 'table drawn', row: 'One row', liquid: 'the liquid', saw: 'what you saw', means: 'what it means', write: 'Write no', full: 'in full', neg: 'negative', controls: 'Record the controls', changed: 'blank changed', trusted: 'trusted'});
export const SceneRecord: React.FC = () => {
	const X = 300, Y = 200, rowH = 150;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Record as you go" at={0} />
			<Wr x={620} y={150} text="drawn up before you start" at={K8.table} size={36} color={NAVY} hand />
			<Table4 x={X} y={Y} cols={[260, 300, 510, 450]} rowH={rowH} size={32}
				headGlow={[[2, K8.saw, K8.means], [3, K8.means, K8.write]]}
				glowCell={{row: 1, col: 2, at: K8.neg - 6}}
				rows={[
					{cells: ['A', 'NaHCO₃', 'brisk fizz;\nlimewater milky', '–COOH supported'], at: K8.row, obsAt: K8.saw, infAt: K8.means + 4, pre: 4, thumb: CARB.fizz, thumb2: LIME.milky},
					{cells: ['D', 'bromine water', 'no visible change', 'no C=C detected'], at: K8.write - 8, obsAt: K8.write, infAt: K8.full + 12, pre: 10, thumb: BR.orange},
					{cells: ['water (blank)', 'K₂Cr₂O₇', 'stayed orange', 'blank clear'], at: K8.controls, obsAt: K8.controls + 10, infAt: K8.controls + 22, pre: 16, grey: true, thumb: DICH.orange},
					{cells: ['ethanol (known)', 'K₂Cr₂O₇', 'orange → green', 'reagent works'], at: K8.controls + 18, obsAt: K8.controls + 28, infAt: K8.controls + 40, pre: 22, grey: true, thumb: DICH.green},
				]} />
			<Pill x={X} y={910} text="site: an absence of change is also evidence" at={K8.neg} color={GREYC} size={28} />
			<Fade at={K8.changed}>
				<path d={`M${X + 640},${Y + 66 + 2 * rowH + rowH - 20} L${X + 760},${990 - 40}`} stroke={CR6} strokeWidth={4} fill="none" />
				<rect x={X + 560} y={950} width={870} height={78} rx={39} fill="#fbeee6" stroke={CR6} strokeWidth={4} />
				<Sx x={X + 995} y={1002} text="blank changed? → that row can't be trusted" size={36} color={CR6} anchor="middle" weight={800} at={-1000} />
			</Fade>
			{void K8.record}{void K8.liquid}{void K8.trusted}
		</svg>
	);
};

// ---------- 9. Supported, not detected, can't tell ----------
const K9 = cues(sc('claims'), {a: 'A fizzed', c: 'C faded', cant: "can't tell", b: 'B turned', d: 'D changed', alk: 'alkane', key: "teacher's key", holds: 'holds', only: 'said only'});
export const SceneClaims: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Supported, not detected, can't tell" at={0} />
		<ClaimTable x={96} y={186} cols={[90, 330, 330, 520, 450]} rowH={152} size={32} th={120} tick={{row: 3, at: K9.holds}} rows={[
			{k: 'A', at: K9.a, thumbs: [CARB.fizz, BR.orange, DICH.orange], sup: '–COOH', nd: 'C=C,\n1° or 2° –OH', ct: '–', glow: [K9.a, K9.c]},
			{k: 'C', at: K9.c, thumbs: [CARB.before, BR.clear, null], sup: 'C=C', nd: '–COOH', ct: '–OH (no\ndichromate test)', ctAt: K9.cant, glow: [K9.c, K9.b]},
			{k: 'B', at: K9.b, thumbs: [CARB.before, BR.orange, DICH.green], sup: '1° or 2° –OH', nd: 'C=C, –COOH', ct: '–', glow: [K9.b, K9.d]},
			{k: 'D', at: K9.d, thumbs: [CARB.before, BR.orange, DICH.orange], sup: 'none', supC: INK, nd: 'C=C, –COOH,\n1° or 2° –OH', ct: 'alkane or\n3° alcohol', ctAt: K9.alk, glow: [K9.d, 1e9]},
		]} />
		<Card x={96} y={880} w={1060} h={170} at={K9.key - 6} color={KNOWNC} />
		<Wr x={126} y={942} text="Teacher's key: D = 2-methylpropan-2-ol" at={K9.key} size={40} color={INK} weight={800} />
		<Wr x={126} y={1000} text="a 3° alcohol, so an –OH was there all along" at={K9.key + 30} size={34} color={OHV} weight={700} />
		<MolAt k="tBuOH" x={1330} y={960} s={0.85} at={K9.key} ring={{oh: K9.key + 20}} />
		<Wr x={1470} y={940} text="the claim holds:" at={K9.holds} size={36} color={GOOD} hand />
		<Wr x={1470} y={984} text="it said only what" at={K9.only} size={36} color={GOOD} hand />
		<Wr x={1470} y={1028} text="the tests could show" at={K9.only + 12} size={36} color={GOOD} hand />
	</svg>
);

// ---------- 10. Valid, reliable, accurate ----------
const K10 = cues(sc('valid-reliable-accurate'), {words: 'three words', valid: 'Valid', fresh: 'Fresh portions', clean: 'clean controls', cand: 'candidate list', rel: 'Reliable', repeat: 'Repeat the', d: "D's dichromate", another: 'another group', acc: 'Accurate', matches: 'matches the true', knowns: 'The knowns', got: 'got'});
export const SceneVRA: React.FC = () => {
	const f = useCurrentFrame();
	const CW = 560, CY = 200, CH = 800, X = [96, 680, 1264];
	const q = (x: number, lines: string[], at: number) => lines.map((l, i) => <Wr key={i} x={x + 28} y={CY + 118 + i * 44} text={l} at={at + i * 10} size={36} color={INK} weight={800} />);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Valid? Reliable? Accurate?" at={0} />
			<DimG at={K10.rel} to={0.6}>
				<Card x={X[0]} y={CY} w={CW} h={CH} title="Validity" color={NAVY} />
				{q(X[0], ['do the tests support the', 'claim for these candidates?'], K10.valid)}
				<LBot x={X[0] + 40} y={CY + 230} h={220} />
				{[CARB.before, BR.orange, DICH.orange].map((p, i) => (
					<g key={i}>
						<DrawPath d={`M${X[0] + 130},${CY + 300} Q${X[0] + 220},${CY + 230 + i * 30} ${X[0] + 265 + i * 92},${CY + 290}`} at={K10.fresh + i * 6} dur={14} color={KNOWNC} width={4} />
						<Thumb p={p} x={X[0] + 230 + i * 100} y={CY + 300} h={150} />
					</g>
				))}
				<Pill x={X[0] + 28} y={CY + 500} text="fresh portions" at={K10.fresh} color={GOOD} size={32} />
				<Thumb p={DICH.orange} x={X[0] + 330} y={CY + 470} h={130} at={K10.clean} />
				<Pill x={X[0] + 28} y={CY + 580} text="clean controls" at={K10.clean} color={GOOD} size={32} />
				<Pill x={X[0] + 28} y={CY + 660} text="candidate list:" at={K10.cand} color={GOOD} size={32} />
				<Wr x={X[0] + 40} y={CY + 760} text="what could interfere" at={K10.cand + 12} size={32} color={GOOD} hand />
			</DimG>
			<DimG at={K10.acc} to={0.6}>
				<Card x={X[1]} y={CY} w={CW} h={CH} title="Reliability" color={NAVY} />
				{q(X[1], ['repeat it the same way:', 'same result?'], K10.rel)}
				<PicF p={DICH.orange} x={X[1] + 60} y={CY + 230} h={260} />
				<PicF p={DICH.orange} x={X[1] + 300} y={CY + 230} h={260} />
				<Sx x={X[1] + 60 + tubeW(DICH.orange, 260) / 2} y={CY + 530} text="batch 1" size={30} color={INK} anchor="middle" hand weight={700} at={-1000} />
				<Sx x={X[1] + 300 + tubeW(DICH.orange, 260) / 2} y={CY + 530} text="batch 2" size={30} color={INK} anchor="middle" hand weight={700} at={-1000} />
				<Wr x={X[1] + 40} y={CY + 590} text="D, twice: orange" at={K10.d} size={38} color="#c25a12" weight={800} />
				<PicF p={BATH.before} x={X[1] + 40} y={CY + 630} h={150} o={prog(f, K10.another - 8, 12)} />
				<Wr x={X[1] + 230} y={CY + 720} text="another group:" at={K10.another} size={32} color={INK} hand />
				<Wr x={X[1] + 230} y={CY + 760} text="compare" at={K10.another + 10} size={32} color={INK} hand />
			</DimG>
			<Card x={X[2]} y={CY} w={CW} h={CH} title="Accuracy" color={NAVY} />
			{q(X[2], ['does the claim match', 'the true structure?'], K10.acc)}
			<rect x={X[2] + 30} y={CY + 230} width={CW - 60} height={300} rx={16} fill="#f3f8f6" stroke={KNOWNC} strokeWidth={3} />
			<Sx x={X[2] + 50} y={CY + 280} text="teacher's key" size={32} color={KNOWNC} hand weight={700} at={-1000} />
			<Sx x={X[2] + 50} y={CY + 326} text="D = 2-methylpropan-2-ol" size={32} color={INK} weight={800} at={-1000} />
			<MolAt k="tBuOH" x={X[2] + CW / 2} y={CY + 440} s={0.75} at={-1000} ring={{oh: K10.matches}} />
			<Wr x={X[2] + 30} y={CY + 600} text="claim: alkane or 3° alcohol" at={K10.matches} size={32} color={INK} weight={800} />
			<Wr x={X[2] + 30} y={CY + 660} text="the knowns and the key" at={K10.knowns} size={32} color={INK} hand />
			<Wr x={X[2] + 30} y={CY + 700} text="show how close you got" at={K10.knowns + 12} size={32} color={INK} hand />
			<TickAt x={X[2] + 470} y={CY + 610} at={K10.got} color={GOOD} s={1.4} />
			<Pill x={X[1]} y={1018} text="s07: validity, reliability, accuracy" at={K10.words} color={GREYC} size={26} />
			{void K10.repeat}{void AMB}
		</svg>
	);
};

// ---------- 11. The risk assessment ----------
const K11 = cues(sc('risk'), {now: 'Now the risks', pot: 'Potassium dichromate', waste: 'heavy-metal waste', org: 'The organic liquids', flame: 'never a flame', br: 'Bromine vapour', smell: 'Never smell', res: 'Organic residues', sink: 'sink', table: 'full table'});
const fit = (p: typeof DBOT) => (x: number, y: number, w: number, h: number) => <IconP p={p} x={x} y={y} w={w} h={h} />;
const tagIcon = (t: string, c: string) => (x: number, y: number, w: number, h: number) => (
	<g>
		<IconP p={DBOT} x={x} y={y} w={w * 0.5} h={h} />
		<Sx x={x + w * 0.5} y={y + h / 2 + 8} text={t} size={22} color={c} weight={800} at={-1000} />
	</g>
);
const noSmell = (x: number, y: number, w: number, h: number) => (
	<g>
		<IconP p={DBOT} x={x} y={y} w={w} h={h} />
		<path d={`M${x + 10},${y + 8} L${x + w - 10},${y + h - 8} M${x + w - 10},${y + 8} L${x + 10},${y + h - 8}`} stroke="#c4432f" strokeWidth={6} strokeLinecap="round" />
	</g>
);
export const SceneRisk: React.FC = () => {
	const end = Math.max(K11.sink + 30, speechEnd(sc('risk')) + 4);
	const rows: RiskRow[] = [
		{hazard: ['K₂Cr₂O₇: chromium(VI),', 'acidified, ~0.1 mol/L'], harm: ['toxic; may cause cancer;', 'skin and breathing allergy'], control: ['teacher demonstration only: small volumes, fume', 'cupboard, gloves, glasses; spill: keep clear, tell teacher'], at: K11.pot, icon: fit(DICH.orange)},
		{hazard: ['Cyclohexene, propanols,', 'ethanol: flammable'], harm: ['fire; eye damage; cyclohexene', 'harmful if it enters the airways'], control: ['no flames in the room: water bath or hotplate;', 'small volumes; bottles stoppered'], at: K11.org, icon: fit(DBOT)},
		{hazard: ['Dilute bromine water', '(check the supplier SDS)'], harm: ['vapour irritates the eyes,', 'skin and lungs'], control: ['teacher dispenses in the fume cupboard;', 'stoppered tubes; glasses and gloves'], at: K11.br, icon: fit(FUME)},
		{hazard: ['Vapours of unknowns'], harm: ['irritation; harm from an', 'unidentified substance'], control: ['never smell an unknown to identify it;', 'record colour and bubbles only'], at: K11.smell, icon: noSmell},
		{hazard: ['Waste: chromium and', 'organic residues'], harm: ['chromium poisons waterways;', 'organics are flammable'], control: ['chromium: labelled heavy-metal waste; organics:', 'labelled organic waste; never the sink'], at: K11.res, icon: fit(WASTE)},
		{hazard: ['Sulfuric acid, 1 mol/L', '(in the dichromate)'], harm: ['skin and eye irritation'], control: ['safety glasses, gloves;', 'rinse splashes with plenty of water'], at: end, icon: tagIcon('H₂SO₄', '#2f6f9e')},
		{hazard: ['Ethanoic acid, 1 mol/L'], harm: ['eye and skin irritation;', 'stock acid burns: teacher only'], control: ['glasses, gloves; dropper bottles', 'of the dilute solution only'], at: end + 8, icon: tagIcon('acid', '#c4432f')},
		{hazard: ['Sodium hydrogen', 'carbonate, solid'], harm: ['low hazard; dust in the eye'], control: ['glasses; small spatula measures'], at: end + 16, icon: fit(CARB.before)},
		{hazard: ['Limewater, Ca(OH)₂(aq)'], harm: ['eye irritation or damage', 'from splashes'], control: ['glasses; never suck on the delivery tube;', 'lift it out before the gas stops (suck-back)'], at: end + 24, icon: fit(LIME.clear)},
		{hazard: ['Hot water bath,', 'glassware'], harm: ['scalds; cracked glass'], control: ['about 60 °C; cool before handling;', 'test tubes in a rack'], at: end + 32, icon: fit(BATH.before)},
	];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Risk assessment" at={2} size={52} />
			<Sx x={560} y={150} text="Pause to read or copy the full table" size={38} color={NAVY} hand weight={700} at={end + 6} />
			<Fade at={K11.now}>
				<Sx x={1500} y={150} text="always:" size={34} color={GOOD} hand weight={700} at={-1000} />
				<PicF p={GLASSES} x={1620} y={105} h={58} />
				<PicF p={GLOVES} x={1760} y={92} h={80} />
			</Fade>
			<RiskGrid x={96} y={178} cols={[110, 390, 470, 760]} rowH={78} rows={rows} listAt={K11.now + 4} end={end} size={26} headSize={32} />
			<Sx x={96} y={1062} text="Follow your school's risk assessment and each bottle's safety data sheet." size={27} color={INK} weight={700} at={K11.sink} />
			{void K11.waste}{void K11.flame}{void K11.table}
		</svg>
	);
};

// ---------- 12. Memory aid ----------
const K12 = cues(sc('memory-aid'), {sup: 'supported', nd: 'not detected', ct: "can't tell", pos: 'A positive', clean: 'clean blank', neg: 'A negative', absent: 'absent', tests: 'when the tests', say: 'say you'});
export const SceneAid: React.FC = () => {
	const X = [96, 686, 1276], Y = 300, W = 560, H = 660;
	const hd: [string, string, number][] = [['supported', ANS8, K12.sup], ['not detected', INK, K12.nd], ["can't tell", AMB, K12.ct]];
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 120}}><HandText text="Supported, not detected, can't tell." at={K12.sup - 12} size={86} cps={24} color={KNOWNC} /></div>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				{hd.map(([t, c, at], i) => (
					<g key={t}>
						<Card x={X[i]} y={Y} w={W} h={H} color={c === INK ? NAVY : c} />
						<Sx x={X[i] + 28} y={Y + 62} text={t} size={46} color={c} hand weight={700} at={at} />
					</g>
				))}
				<PicF p={DICH.green} x={X[0] + 40} y={Y + 110} h={300} />
				<PicF p={DICH.orange} x={X[0] + 300} y={Y + 110} h={300} />
				<Sx x={X[0] + 40 + tubeW(DICH.green, 300) / 2} y={Y + 460} text="positive" size={34} color={INK} anchor="middle" hand weight={700} at={K12.pos} />
				<Sx x={X[0] + 300 + tubeW(DICH.orange, 300) / 2} y={Y + 460} text="clean blank" size={34} color={INK} anchor="middle" hand weight={700} at={K12.clean} />
				<Wr x={X[0] + 30} y={Y + 560} text="supports a group" at={K12.clean + 20} size={38} color={ANS8} weight={800} />
				<PicF p={DICH.orange} x={X[1] + 40} y={Y + 110} h={300} />
				<MolAt k="tBuOH" x={X[1] + 420} y={Y + 270} s={0.7} at={K12.neg} ring={{oh: K12.absent}} />
				<Wr x={X[1] + 30} y={Y + 500} text="negative:" at={K12.neg} size={38} color={INK} weight={800} />
				<Wr x={X[1] + 30} y={Y + 560} text="not detected, not absent" at={K12.absent} size={38} color={INK} weight={800} />
				<LBot x={X[2] + 40} y={Y + 110} h={250} letter="D" />
				<LBot x={X[2] + 300} y={Y + 110} h={250} letter="C" />
				<Wr x={X[2] + 30} y={Y + 440} text="D: alkane or 3° alcohol" at={K12.tests} size={34} color={INK} weight={800} />
				<Wr x={X[2] + 30} y={Y + 500} text="C: –OH, no dichromate test" at={K12.tests + 14} size={34} color={INK} weight={800} />
				<Wr x={X[2] + 30} y={Y + 580} text="say you can't tell" at={K12.say} size={40} color={AMB} hand />
				<Sx x={96} y={1030} text="And from c08: Fizz, fade, green." size={44} color={INK} hand weight={700} at={K12.sup + 30} />
				{void GREYS}{void Glow}{void UNKN}{void CR6}{void LBot}
			</svg>
		</>
	);
};
