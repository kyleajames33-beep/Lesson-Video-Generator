// M8 P03 scenes 7 to 11: record as you go (the plate and the results table; each inference cell unlocks only after its
// observation is written; the browning Fe(OH)2 tube), justify the identity (the four-slot card for magnesium, the
// matching wells and the two flames, a dimmer sulfate card, the limit chip), valid, reliable, accurate (three cards that
// light in turn, each with its own picture), the risk assessment (the table fills row by row with a painted object in
// each row, then holds for reading) and the memory aid (the control row, arrows from the unknown to both controls).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues, speechEnd} from '../../cues';
import {HandText, prog} from '../../kit';
import {DROPB, FLAME, FUME, GLASSES, GLOVES, RACK, WASTE, WASTE_LABEL, sc} from './common';
import {
	AChip, Arrow, BLANKC, DrawPath, Fade, GOOD, Glow, HAZ, INK, INK_SOFT, IconP, JCard, KNOWNC, MistakeX, NAVY, Overlay, PicF, R_AG, R_SO, ResultsTable, RiskGrid, Sx, TaskLine, UNKN, WBottle, WFill,
	WellAt, WellLens, WellPlate, Wr, natPt, picW, plateG, vis, wxy,
} from './parts';
import type {RiskRow, WKind} from './parts';

// ---------- 7. Record as you go ----------
const K7 = cues(sc('record'), {table: 'a table you drew', row: 'One row per well', saw: 'you saw', means: 'what it means', write: 'Write each observation', nvc: 'No visible change', blank: 'left blank', note: 'Note anything', green: 'green solid', air: 'in air'});
export const SceneRecord: React.FC = () => {
	const f = useCurrentFrame();
	const g = plateG(330, 400, 470);
	const T = {x: 640, y: 200};
	const endA = K7.air + 24;
	return (
		<Overlay>
			<TaskLine text="Record as you go" at={2} size={52} />
			<WellPlate g={g} />
			{[[0, 'clear'], [1, 'clear'], [2, 'white']].map(([r, k]) => [0, 1, 2].map(c => <WellAt key={`${r}${c}`} g={g} r={r as number} c={c} kind={c === 2 ? (k as WKind) : c === 1 ? 'white' : 'clear'} at={-1000} role={c === 0 ? 'blank' : c === 1 ? 'known' : 'unk'} />))}
			<Glow cx={wxy(g, 2, 2)[0]} cy={wxy(g, 2, 2)[1]} rx={40} ry={40} at={K7.saw - 20} len={60} />
			<Glow cx={wxy(g, 0, 2)[0]} cy={wxy(g, 0, 2)[1]} rx={40} ry={40} at={K7.nvc - 20} len={60} />
			<ResultsTable x={T.x} y={T.y} cols={[110, 140, 200, 430, 320]} rowH={124} size={30} headGlow={[[3, endA, endA + 60], [4, endA + 50, 1e9]]} rows={[
				{cells: ['C3', 'C', 'NaOH', 'white ppt; stays in\nexcess NaOH', 'Mg²⁺ (or\nconc. Ca²⁺)'], at: 12, obsAt: K7.saw, infAt: K7.means + 10},
				{cells: ['A3', 'C', 'dilute HCl', 'no visible change', 'no Ag⁺;\nPb²⁺ unlikely'], at: 24, obsAt: K7.nvc, infAt: K7.blank + 6},
				{cells: ['C3', 'B', 'NaOH', 'green ppt; brown at\ntop after 5 min', 'Fe²⁺ (oxidised\nin air)'], at: K7.note, obsAt: K7.green, infAt: K7.air + 4, grey: true},
			]} />
			<Sx x={640} y={190} text="drawn up before you start" size={28} color={INK} anchor="start" hand weight={700} at={K7.table} out={K7.row} />
			<Wr x={640} y={740} text="observation: what you saw (the evidence)" at={endA} size={38} color={NAVY} weight={800} />
			<Wr x={640} y={800} text="inference: what it means" at={endA + 50} size={38} color={NAVY} weight={800} />
			<AChip x={640} y={930} text={'"no visible change": written in, never left blank'} size={36} color={GOOD} hand={false} at={K7.blank} />
			<g opacity={vis(f, K7.note - 6)}>
				<PicF p={RACK.brown} x={120} y={640} h={360} />
				<Sx x={120 + picW(RACK.brown, 360) + 16} y={760} text="B + NaOH:" size={32} color={INK} weight={800} at={-1000} />
				<Sx x={120 + picW(RACK.brown, 360) + 16} y={806} text="green, then brown" size={32} color={INK} weight={700} at={-1000} />
				<Sx x={120 + picW(RACK.brown, 360) + 16} y={852} text="at the top in air" size={32} color={INK} weight={700} at={-1000} />
				<AChip x={120 + picW(RACK.brown, 360) + 16} y={880} text="c03a: read it at once" size={28} color="#6d6457" hand={false} at={K7.green} />
			</g>
			<WellLens cx={330} cy={790} r={130} kind="white" fillAt={-1000} role="unk" label="C3: white ppt" size={32} out={K7.nvc - 20} />
			<WellLens cx={330} cy={790} r={130} kind="clear" fillAt={-1000} role="unk" label="A3: no visible change" size={32} at={K7.nvc - 14} out={K7.note - 10} />
			<Sx x={640} y={720} text="one row per well" size={42} color={NAVY} hand weight={700} at={K7.row} out={K7.note - 10} />
			<Sx x={640} y={776} text="observation first, then inference" size={42} color={NAVY} hand weight={700} at={K7.means} out={K7.note - 10} />
			{void K7.write}{void INK_SOFT}
		</Overlay>
	);
};

// ---------- 8. Justify the identity ----------
const K8 = cues(sc('justify'), {evid: 'the evidence', mg: 'For magnesium', naoh: 'sodium hydroxide gave', hyd: 'magnesium hydroxide', flame: 'colourless flame', known: 'the known matched', limit: 'honest limit', det: 'not detected', dilute: 'very dilute', rule: 'rule out'});
export const SceneJustify: React.FC = () => {
	const f = useCurrentFrame();
	const L = {y: 300, r: 86, x1: 1460, x2: 1720};
	return (
		<Overlay>
			<TaskLine text="Justify the identity: magnesium" at={2} size={52} />
			<JCard x={96} y={190} w={1210} title="Mg^{2+} in unknown C" titleSize={40} rowH={150} labelW={290} slots={[
				{label: 'Observation', text: '', lines: ['white ppt with NaOH,', 'stays in excess'], at: K8.naoh, size: 40},
				{label: 'Equation', text: 'Mg²⁺(aq) + 2OH⁻(aq) → Mg(OH)₂(s)', at: K8.hyd - 30, size: 44, color: NAVY},
				{label: 'Ruled out', text: '', lines: ['Ag⁺, Ba²⁺: no chloride or sulfate solid; Pb²⁺ unlikely', 'Ca²⁺ not supported: no brick-red flame', '(known Ca²⁺ was brick red)'], at: K8.flame, size: 30},
				{label: 'Matches known', text: 'yes: known Mg²⁺, same row', at: K8.known, size: 40, color: GOOD},
			]} />
			<WellLens cx={L.x1} cy={L.y} r={L.r} kind="white" fillAt={-1000} role="unk" label="C + NaOH" size={30} />
			<WellLens cx={L.x2} cy={L.y} r={L.r} kind="white" fillAt={-1000} role="known" label="known Mg²⁺" size={30} />
			<Sx x={(L.x1 + L.x2) / 2} y={L.y + 18} text="=" size={64} color={GOOD} anchor="middle" weight={800} at={K8.known} />
			<Glow cx={(L.x1 + L.x2) / 2} cy={L.y} rx={250} ry={110} at={K8.known} len={60} />
			<PicF p={FLAME.blue} x={1400} y={470} h={300} />
			<PicF p={FLAME.ca} x={1640} y={470} h={300} />
			<Sx x={1400 + picW(FLAME.blue, 300) / 2} y={806} text="C: no colour" size={28} color={UNKN} anchor="middle" weight={800} at={-1000} />
			<Sx x={1640 + picW(FLAME.ca, 300) / 2} y={806} text="known Ca²⁺" size={28} color="#b83a1e" anchor="middle" weight={800} at={-1000} />
			<Glow cx={1400 + picW(FLAME.blue, 300) / 2} cy={620} rx={90} ry={170} at={K8.flame} len={60} />
			<g opacity={0.9 * vis(f, K8.evid)}>
				<rect x={1360} y={850} width={480} height={170} rx={16} fill="#fffdf8" stroke={R_SO} strokeWidth={3} />
				<Sx x={1380} y={890} text="SO₄²⁻: the same four slots" size={28} color={R_SO} weight={800} at={-1000} />
				<Sx x={1380} y={928} text="white ppt with BaCl₂ in acid" size={26} color={INK} weight={600} at={-1000} />
				<Sx x={1380} y={962} text="Ba²⁺ + SO₄²⁻ → BaSO₄(s)" size={26} color={INK} weight={600} at={-1000} />
				<Sx x={1380} y={996} text="no fizz: not CO₃²⁻; known matched" size={26} color={INK} weight={600} at={-1000} />
			</g>
			<AChip x={96} y={890} text="no visible change = not detected (a dilute ion can slip past)" size={36} color={HAZ} hand={false} at={K8.det} />
			<Sx x={96} y={1010} text="say what your tests can and can't rule out" size={36} color={INK} hand weight={700} at={K8.rule - 10} />
			{void K8.mg}{void K8.limit}{void K8.dilute}
		</Overlay>
	);
};

// ---------- 9. Valid, reliable, accurate? ----------
const K9 = cues(sc('valid-reliable-accurate'), {three: 'three words', valid: 'Valid', seq: 'The sequence', nitric: 'Nitric acid before', fresh: 'fresh drops', dist: 'distilled water', blank: 'clear blank', protect: 'protect that', rel: 'Reliable', repeat: 'Repeat each', group: 'another group', acc: 'Accurate', ident: 'an identity', truth: 'true one', match: 'Matching the known', key: "teacher's key", it: 'checks it'});
const VCol: React.FC<{x: number; title: string; q: string[]; at: number; lit: number; dim?: number; children?: React.ReactNode}> = ({x, title, q, at, lit, dim, children}) => {
	const f = useCurrentFrame();
	const L = prog(f, lit, 12);
	const d = dim === undefined ? 1 : 1 - 0.3 * prog(f, dim, 14);
	return (
		<g opacity={prog(f, at, 12) * d}>
			<rect x={x} y={200} width={560} height={810} rx={22} fill={L > 0.5 ? '#fffdf8' : '#faf6ee'} stroke={L > 0.01 ? NAVY : 'rgba(60,45,20,0.22)'} strokeWidth={L > 0.01 ? 4 : 3} />
			<Sx x={x + 28} y={262} text={title} size={46} color={NAVY} hand weight={700} at={-1000} opacity={0.4 + 0.6 * L} />
			{q.map((t, i) => <Sx key={i} x={x + 28} y={316 + i * 40} text={t} size={32} color={INK} weight={700} at={-1000} opacity={0.4 + 0.6 * L} />)}
			<g opacity={L}>{children}</g>
		</g>
	);
};
export const SceneVRA: React.FC = () => {
	const f = useCurrentFrame();
	const chips: [string, number, React.ReactNode][] = [
		['HNO₃ before Ag⁺', K9.nitric, <IconP key="a" p={DROPB} x={130} y={420} w={70} h={90} />],
		['fresh drops', K9.fresh, <g key="b"><circle cx={165} cy={585} r={36} fill="#1c1c1f" stroke={UNKN} strokeWidth={4} /><WFill cx={165} cy={585} r={26} kind="clear" p={1} /></g>],
		['distilled water', K9.dist, <g key="c"><WBottle x={128} y={640} h={110} label="" /></g>],
		['blank clear', K9.blank, <g key="d"><circle cx={165} cy={815} r={36} fill="#1c1c1f" stroke={BLANKC} strokeWidth={4} /><WFill cx={165} cy={815} r={26} kind="clear" p={1} /></g>],
	];
	return (
		<Overlay>
			<TaskLine text="Valid? Reliable? Accurate?" at={2} size={52} />
			<VCol x={96} title="Validity" q={['does this sequence identify', 'the intended ion?']} at={0} lit={K9.valid} dim={K9.rel}>
				{chips.map(([t, at, icon], i) => (
					<g key={i} opacity={vis(f, at)}>
						{icon}
						<Sx x={230} y={482 + i * 115} text={t} size={36} color={GOOD} weight={800} at={-1000} />
					</g>
				))}
				<Sx x={124} y={960} text="each controls interference" size={30} color={INK} hand weight={700} at={K9.protect} />
			</VCol>
			<VCol x={696} title="Reliability" q={['repeat it the same way:', 'same observation?']} at={0} lit={K9.rel} dim={K9.acc}>
				{[0, 1].map(i => (
					<g key={i}>
						<WellLens cx={800 + i * 170} cy={480} r={62} kind="white" fillAt={K9.repeat + i * 16} role="unk" at={K9.repeat + i * 16} label={`repeat ${i + 1}`} size={28} />
					</g>
				))}
				<Sx x={885} y={494} text="=" size={52} color={GOOD} anchor="middle" weight={800} at={K9.repeat + 30} />
				<Sx x={724} y={630} text="white, stays in excess (twice)" size={30} color={INK} weight={700} at={K9.repeat + 30} />
				<WellPlate g={plateG(880, 800, 330)} o={vis(f, K9.group - 6)} />
				<WellAt g={plateG(880, 800, 330)} r={2} c={2} kind="white" at={K9.group} role="unk" />
				<Sx x={880} y={960} text="another group: the same" size={30} color={GOOD} anchor="middle" weight={800} at={K9.group + 10} />
			</VCol>
			<VCol x={1296} title="Accuracy" q={['is the identity', 'the true one?']} at={0} lit={K9.acc}>
				<WellLens cx={1410} cy={490} r={66} kind="white" fillAt={-1000} role="unk" label="C" size={30} at={K9.acc} />
				<WellLens cx={1630} cy={490} r={66} kind="white" fillAt={-1000} role="known" label="known Mg²⁺" size={30} at={K9.acc + 10} />
				<Sx x={1520} y={506} text="=" size={52} color={GOOD} anchor="middle" weight={800} at={K9.match} />
				<Sx x={1324} y={660} text="match the known side by side" size={30} color={INK} weight={700} at={K9.match} />
				<Fade at={K9.acc + 20}>
					<rect x={1340} y={740} width={470} height={200} rx={16} fill="#fff8e6" stroke={GOOD} strokeWidth={4} />
					<Sx x={1366} y={800} text="teacher's key" size={36} color={INK} hand weight={700} at={-1000} />
					<Sx x={1366} y={870} text="C = ?" size={48} color={NAVY} weight={800} at={-1000} out={K9.key} />
					<Sx x={1366} y={870} text="C = MgSO₄" size={48} color={NAVY} weight={800} at={K9.key} />
					<DrawPath d="M1700,850 l18,22 l40,-50" at={K9.it} dur={12} color={GOOD} width={8} />
				</Fade>
			</VCol>
			<Sx x={1824} y={1050} text="s07: validity, reliability, accuracy" size={26} color={INK_SOFT} anchor="end" weight={600} at={K9.three} />
			{void K9.seq}{void K9.ident}{void K9.truth}
		</Overlay>
	);
};

// ---------- 10. The risk assessment ----------
const K10 = cues(sc('risk'), {now: 'Now the risks', silver: 'Silver nitrate', lead: 'Lead salts', ba: 'Barium salts', drop: 'by the drop', naoh: 'Sodium hydroxide', conc: 'concentrated ammonia', loop: 'hot loop', waste: 'Silver residues', sink: 'the sink'});
const crossIcon = (x: number, y: number, w: number, h: number) => <g><IconP p={DROPB} x={x} y={y} w={w} h={h} /><path d={`M${x + 10},${y + 10} L${x + w - 10},${y + h - 10} M${x + w - 10},${y + 10} L${x + 10},${y + h - 10}`} stroke="#c4432f" strokeWidth={6} strokeLinecap="round" /></g>;
const tagIcon = (t: string, c: string) => (x: number, y: number, w: number, h: number) => (
	<g>
		<IconP p={DROPB} x={x} y={y} w={w * 0.6} h={h} />
		<Sx x={x + w * 0.62} y={y + h / 2 + 8} text={t} size={20} color={c} weight={800} at={-1000} />
	</g>
);
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	const end = Math.max(K10.sink + 30, speechEnd(sc('risk')) + 4);
	const rows: RiskRow[] = [
		{hazard: ['Silver nitrate', 'solution, 0.1 mol/L'], harm: ['stains skin brown-black for', 'days; eye damage; harms waterways'], control: ['dropper bottle, drops only; nitrile', 'gloves, glasses; silver waste'], at: K10.silver, icon: tagIcon('Ag', R_AG)},
		{hazard: ['Lead(II) compounds,', 'e.g. lead(II) nitrate'], harm: ['toxic if swallowed or inhaled;', 'may damage the unborn child'], control: ["students don't handle lead: lead results", 'come as data (or a teacher demonstration)'], at: K10.lead, icon: crossIcon},
		{hazard: ['Barium chloride', 'solution, 0.1 mol/L'], harm: ['toxic if swallowed'], control: ['teacher prepares and dispenses; drops', 'only; gloves, glasses; wash hands'], at: K10.ba, icon: tagIcon('Ba', R_SO)},
		{hazard: ['NaOH 1 mol/L, HNO₃ 2 mol/L,', 'HCl 2 mol/L, H₂SO₄ 1 mol/L'], harm: ['burns or irritation to', 'eyes and skin'], control: ['safety glasses; dropper bottles; rinse skin', 'or eyes with water and tell the teacher'], at: K10.naoh, icon: tagIcon('OH⁻', '#2f6f9e')},
		{hazard: ['Ammonia: dilute 2 mol/L;', 'concentrated'], harm: ['irritating fumes; burns from', 'concentrated ammonia'], control: ['dilute: by the drop, ventilated, waft;', 'concentrated: teacher, fume cupboard'], at: K10.conc, icon: (x, y, w, h) => <IconP p={FUME} x={x} y={y} w={w} h={h} />},
		{hazard: ['Bunsen burner, hot', 'nichrome loop'], harm: ['burns; hair or loose', 'clothing catching fire'], control: ['tie hair back; safety flame when idle;', 'cool the loop on a heatproof mat'], at: K10.loop, icon: (x, y, w, h) => <IconP p={FLAME.off} x={x} y={y} w={w} h={h} />},
		{hazard: ['Waste: well contents', 'and rinsings'], harm: ['silver and barium harm', 'people and waterways'], control: ['silver into silver waste; barium into', 'heavy-metal waste; never the sink'], at: K10.waste, icon: (x, y, w, h) => <IconP p={WASTE} x={x} y={y} w={w} h={h} />},
		{hazard: ['Potassium thiocyanate', 'solution, 0.1 mol/L'], harm: ['harmful; with acid it releases', 'a very toxic gas'], control: ['fresh portion only, away from acid', 'wells; small volumes'], at: end, icon: tagIcon('SCN', '#7a4a1a')},
	];
	const wb = {x: 1880 - 10, y: 0};
	void wb;
	const [lx, ly] = natPt(WASTE, 0, 0, 1, WASTE_LABEL.cx, WASTE_LABEL.cy);
	void lx; void ly;
	return (
		<Overlay>
			<TaskLine text="Risk assessment" at={2} size={52} />
			<Sx x={560} y={150} text="Pause to read the full risk table" size={38} color={NAVY} hand weight={700} at={end + 6} />
			<Fade at={K10.now}>
				<Sx x={1460} y={150} text="always:" size={34} color={GOOD} hand weight={700} at={-1000} />
				<PicF p={GLASSES} x={1580} y={105} h={58} />
				<PicF p={GLOVES} x={1730} y={92} h={80} />
			</Fade>
			<RiskGrid x={96} y={190} cols={[130, 400, 500, 700]} rowH={96} rows={rows} listAt={K10.now + 4} end={end} size={27} />
			<Sx x={96} y={1050} text="Follow your school's risk assessment and each bottle's safety data sheet." size={28} color={INK} weight={700} at={K10.sink} />
			{void K10.drop}{void f}{void picW}
		</Overlay>
	);
};

// ---------- 11. Memory aid ----------
const K11 = cues(sc('memory-aid'), {blank: 'blank', known: 'known', unknown: 'unknown', adds: 'adds nothing', pos: 'what a positive', both: 'against both'});
export const SceneAid: React.FC = () => {
	const X = [520, 960, 1400], Y = 560, R = 140;
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 120}}><HandText text="Blank, known, unknown." at={K11.blank - 10} size={104} cps={22} color={KNOWNC} /></div>
			<Overlay>
				<WellLens cx={X[0]} cy={Y} r={R} kind="clear" fillAt={-1000} role="blank" />
				<WellLens cx={X[1]} cy={Y} r={R} kind="white" fillAt={-1000} role="known" />
				<WellLens cx={X[2]} cy={Y} r={R} kind="faint" fillAt={K11.unknown} role="unk" />
				<Glow cx={X[0]} cy={Y} rx={R + 40} ry={R + 40} at={K11.adds - 6} len={60} />
				<Glow cx={X[1]} cy={Y} rx={R + 40} ry={R + 40} at={K11.pos - 6} len={60} />
				<Sx x={X[0]} y={Y + R + 60} text="blank" size={48} color={BLANKC} anchor="middle" weight={800} at={K11.blank} />
				<Sx x={X[1]} y={Y + R + 60} text="known" size={48} color={KNOWNC} anchor="middle" weight={800} at={K11.known} />
				<Sx x={X[2]} y={Y + R + 60} text="unknown" size={48} color={UNKN} anchor="middle" weight={800} at={K11.unknown} />
				<Sx x={X[0]} y={Y + R + 110} text="the reagent adds nothing" size={32} color={INK} anchor="middle" hand weight={700} at={K11.adds} />
				<Sx x={X[1]} y={Y + R + 110} text="what a positive looks like" size={32} color={INK} anchor="middle" hand weight={700} at={K11.pos} />
				<Sx x={X[2]} y={Y + R + 110} text="judged against both" size={32} color={INK} anchor="middle" hand weight={700} at={K11.both} />
				<path d={`M${X[2] - 60},${Y - R - 20} Q${(X[1] + X[2]) / 2},${Y - R - 110} ${X[1] + 40},${Y - R - 20}`} fill="none" stroke={UNKN} strokeWidth={5} opacity={0} />
				<DrawPath d={`M${X[2] - 40},${Y - R - 16} Q${(X[1] + X[2]) / 2},${Y - R - 100} ${X[1] + 40},${Y - R - 16}`} at={K11.both} dur={16} color={UNKN} width={6} />
				<DrawPath d={`M${X[2] - 60},${Y - R - 26} Q${(X[0] + X[2]) / 2},${Y - R - 200} ${X[0] + 40},${Y - R - 16}`} at={K11.both + 8} dur={20} color={UNKN} width={6} />
				<Sx x={1820} y={1010} text="Observe first, then infer." size={58} color={INK} anchor="end" hand weight={700} at={K11.both + 20} />
				{void Arrow}{void MistakeX}
			</Overlay>
		</>
	);
};
