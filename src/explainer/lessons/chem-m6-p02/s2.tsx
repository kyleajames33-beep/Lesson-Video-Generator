// M6 P02 scenes 7 to 12: the calculation (C03 board: task, equation strip, grouped givens, one stage per line, the
// kept graph values; answer chip and the closer-to-minus-57 number line); the variables of a repeated measurement;
// the error chain (heat loss, then a starting temperature recorded too low; "human error" crossed); validity,
// reliability and accuracy; the risk table; the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {BEAKER, CUPB, CUP_N, CYL, GLASSES, GLOVES, THERMO, WASH} from './assets';
import {
	AChip, AMBER, AMBER_INK, ChainRow, CupB, CupOutline, DimG, EqLine, Fade, GCard, GSeg, Ghost, HAZ, HEAT, HEAT_INK, HeatOut, INK, INK_SOFT, IconPlate, MistakeX, Note, NumLine, Overlay, P,
	PenLink, PicH, RTable, Sx, TEAL, TGraph, TPts, TRead, TaskLine, TimerIcon, VCard, WLine, cupHeat, cupPt, cupW, eq, gx, gy, picW, smooth, treadW, vis,
} from './parts';
import type {GG} from './parts';
import {COOL_FROM, RUN, StartLine, cool} from './s1';

// ---------- 7. Calculate, as in the last video ----------
const S7 = 'calculate';
const K7 = cues(sc(S7), {calc: 'the calculation', rise: 'The rise is', six: 'six point six', hund: 'one hundred grams', q: 'two thousand seven hundred and fifty nine', there: 'moles of water', n: 'zero point zero five zero zero', dh: 'delta H is', m55: 'minus fifty five', using: 'Using the highest', m53: 'minus fifty three'});
const G7: GG = {x: 150, y: 330, w: 520, h: 300, x0: 0, x1: 7, y0: 21, y1: 29};
export const SceneCalc: React.FC = () => {
	const d0 = K7.rise;
	const WX = 820, WS = 36, WY = [650, 722, 794, 866, 938];
	const items = eq(['HCl(aq)', '+', 'NaOH(aq)', '->', 'NaCl(aq)', '+', 'H_2O(l)'], K7.calc);
	return (
		<Overlay>
			<DimG at={d0} to={0.45}>
				<TaskLine text="Find ΔH of neutralisation" at={K7.calc - 10} size={52} />
				<EqLine items={items} x={96} y={240} size={38} />
				<TGraph g={G7} at={-100} xTicks={[0, 7]} yTicks={[21, 29]} size={22} xLabel="time (min)" yLabel="T (°C)" />
				<TPts g={G7} pts={RUN} time={() => -100} teal={{from: COOL_FROM, at: -100}} r={6} />
				<GSeg g={G7} a={[7, cool(7)]} b={[0, cool(0)]} at={-100} dash="10 8" width={4} />
				<GCard x={WX} y={290} w={1000} lh={52} size={30} at={K7.calc + 10} lines={[
					{t: 'HCl: 50.0 mL, 1.00 mol/L    NaOH: 50.0 mL, 1.00 mol/L', at: K7.calc + 10},
					{t: 'T: 21.5 °C → 28.1 °C (extrapolated)', at: K7.calc + 20},
					{t: 'assume: 1.00 g/mL; c = 4.18 J g^{-1} °C^{-1}', at: K7.calc + 30, grey: true},
				]} />
			</DimG>
			<DimG at={K7.six} to={0.5}>
				<AChip x={150} y={720} text="27.8 highest" size={30} color={AMBER_INK} hand={false} at={-100} />
				<AChip x={420} y={720} text="28.1 extrapolated" size={30} color={TEAL} hand={false} at={-100} />
			</DimG>
			<WLine x={WX} y={WY[0]} size={WS} dim={K7.hund} items={P('ΔT = 28.1 − 21.5', K7.rise + 20, '= 6.6 °C', K7.six)} />
			<WLine x={WX} y={WY[1]} size={WS} dim={K7.there} items={P('q = 100.0 × 4.18 × 6.6', K7.hund, '= 2758.8 J', K7.q)} />
			<DimG at={K7.there} to={0.45}><Note x={WX + 640} y={WY[1] + 2} text="keep the digits; round at the end" size={26} color={INK_SOFT} at={K7.q + 30} hand={false} /></DimG>
			<WLine x={WX} y={WY[2]} size={WS} dim={K7.m55} items={P('n(H_2O) = 1.00 × 0.0500 = 0.0500 mol', K7.n)} />
			<WLine x={WX} y={WY[3]} size={WS} dim={K7.m53} items={P('ΔH = −2.7588 kJ ÷ 0.0500 mol', K7.dh)} />
			<WLine x={WX} y={WY[4]} size={WS} dim={K7.m53} items={P('= −55.18 → −55 kJ/mol (2 s.f.)', K7.m55)} />
			<AChip x={150} y={800} text="ΔH = −55 kJ/mol" size={42} color={TEAL} hand={false} at={K7.m55 + 10} />
			<AChip x={150} y={890} text="highest reading: ΔT = 6.3 °C → −53 kJ/mol" size={28} color={INK_SOFT} hand={false} at={K7.m53} />
			<NumLine x={180} y={1010} w={520} lo={-58} hi={-52} at={K7.m53 + 6} ticks={[]} marks={[{v: -57, label: '−57', color: INK_SOFT, at: K7.m53 + 8}, {v: -55, label: '−55', color: TEAL, at: K7.m53 + 14}, {v: -53, label: '−53', color: AMBER_INK, at: K7.m53 + 20}]} />
			<Note x={180 + (520 * 2) / 6 - 30} y={1060} text="closer" size={28} color={TEAL} at={K7.m53 + 30} />
			{void K7.using}{void HEAT}
		</Overlay>
	);
};

// ---------- 8. The variables in a repeated measurement ----------
const S8 = 'variables';
const K8 = cues(sc(S8), {what: 'what are', here: 'Here you', one: 'one value', three: 'three times', ctrl: 'controlled variables', conc: 'same concentrations', start: 'same starting', cup: 'same cup'});
export const SceneVariables: React.FC = () => {
	const x = 150, y = 300, h = 620, w = cupW(h);
	const win = cupPt(x, y, h, CUP_N.win), pT = cupPt(x, y, h, CUP_N.probeTop), lid = cupPt(x, y, h, CUP_N.lidR);
	const CX = 780;
	const RY = [740, 830, 920];
	return (
		<Overlay>
			<TaskLine text="The variables" at={4} size={56} />
			<CupB x={x} y={y} h={h} />
			<TRead x={pT[0] - treadW(30) - 14} y={pT[1] - 10} text={() => '21.5 °C'} at={K8.start - 6} size={30} />
			<TimerIcon cx={x + w + 70} cy={360} r={34} at={K8.cup + 20} spin={90} />
			<DimG at={K8.ctrl} to={0.5}>
				<Sx x={CX} y={330} text="Repeated measurement:" size={42} color={INK} hand at={K8.one} />
				<Sx x={CX} y={386} text="nothing deliberately changed between runs" size={34} color={INK} weight={600} at={K8.one + 10} />
				{[0, 1, 2].map(i => (
					<g key={i}>
						<CupOutline x={CX + 40 + i * 200} y={420} w={110} h={110} fill={0.6} at={K8.three - 10 + i * 8} />
						<Sx x={CX + 95 + i * 200} y={570} text={`run ${i + 1}`} size={28} color={INK_SOFT} anchor="middle" hand at={K8.three + i * 8} />
					</g>
				))}
			</DimG>
			<Sx x={CX} y={RY[0] - 80} text="Controlled variables" size={40} color={TEAL} hand at={K8.ctrl} />
			<DimG at={K8.start} to={0.45}><Sx x={CX} y={RY[0]} text="concentrations and volumes (50.0 mL each, 1.00 mol/L)" size={32} color={INK} weight={600} at={K8.conc} /></DimG>
			<PenLink a={[CX - 20, RY[0] - 12]} b={[win[0] + 60, win[1]]} at={K8.conc + 10} out={K8.start} />
			<DimG at={K8.cup} to={0.45}><Sx x={CX} y={RY[1]} text="starting temperature (measured, averaged)" size={32} color={INK} weight={600} at={K8.start} /></DimG>
			<PenLink a={[CX - 20, RY[1] - 12]} b={[pT[0] - 30, pT[1] + 40]} at={K8.start + 10} out={K8.cup} />
			<Sx x={CX} y={RY[2]} text="cup, lid, stirring, reading times" size={32} color={INK} weight={600} at={K8.cup} />
			<PenLink a={[CX - 20, RY[2] - 12]} b={[lid[0] + 10, lid[1] + 10]} at={K8.cup + 10} />
			{void K8.what}{void K8.here}
		</Overlay>
	);
};

// ---------- 9. Errors: follow the chain ----------
const S9 = 'errors';
const K9 = cues(sc(S9), {why: 'Why is minus', chain: 'through the chain', heat: 'Heat escaping', small: 'T too small', qs: 'q is too small', less: 'less negative', most: 'Most errors', notevery: 'not every one', used: 'if you used', big: 'too big', neg: 'H too negative', human: 'human error', name: 'Name the'});
export const SceneErrors: React.FC = () => {
	const f = useCurrentFrame();
	const x = 150, y = 300, h = 380, w = cupW(h);
	const WS = [400, 190, 190, 280];
	const CX = 600;
	const glow = vis(f, K9.heat + 20, K9.notevery, 14);
	return (
		<Overlay>
			<TaskLine text="Why −55, not −57? Follow the chain" at={K9.why} size={52} />
			<DimG at={K9.notevery} to={0.4}>
				<CupB x={x} y={y} h={h} glow={glow} />
				<HeatOut pts={cupHeat(x, y, h)} at={K9.heat} out={K9.notevery} len={60} />
				<ChainRow x={CX} y={320} ws={WS} gap={48} heads={['source', 'ΔT', 'q', 'ΔH']} at={K9.chain} size={30} cells={[
					{lines: ['heat lost (walls, lid) or', 'absorbed (cup, probe)'], at: K9.heat + 10, color: INK},
					{lines: ['ΔT'], at: K9.small, dir: 'down'},
					{lines: ['q'], at: K9.qs, dir: 'down'},
					{lines: ['less negative'], at: K9.less, dir: 'down'},
				]} />
			</DimG>
			<TRead x={CX - treadW(34) - 50} y={588} text={() => '21.4 °C'} at={K9.notevery + 10} sample="21.4 °C" />
			<Note x={CX - treadW(34) - 50} y={690} text="acid only" size={30} color={AMBER_INK} at={K9.notevery + 16} />
			<ChainRow x={CX} y={560} ws={WS} gap={48} at={K9.notevery + 6} size={30} cells={[
				{lines: ['starting temperature too low', "(only the acid's 21.4 °C used)"], at: K9.used, color: INK},
				{lines: ['ΔT'], at: K9.big, dir: 'up'},
				{lines: ['q'], at: K9.big + 10, dir: 'up'},
				{lines: ['more negative'], at: K9.neg, dir: 'up'},
			]} />
			<Note x={CX} y={760} text="most errors push the same way, but not every one" size={32} color={INK_SOFT} at={K9.notevery} out={K9.human} />
			<MistakeX x={CX} y={820} text="human error" at={K9.human - 10} cross={K9.human + 16} note="name the cause: e.g. heat loss through the lid gap" size={34} />
			{void K9.most}{void K9.name}{void HEAT_INK}{void picW}
		</Overlay>
	);
};

// ---------- 10. Validity, reliability and accuracy ----------
const S10 = 'validity-reliability';
const K10 = cues(sc(S10), {now: 'Now the three', validity: 'Validity', here: 'Here, the rise', both: 'both starting', reliability: 'Reliability', runs: 'Three runs', reliable: 'reliable', accuracy: 'Accuracy', accepted: 'accepted value', repeats: 'fix that', every: 'in every run', heatloss: 'Cutting heat'});
export const SceneVRA: React.FC = () => {
	const f = useCurrentFrame();
	const CW = 1020, X = 96;
	const RX = 1200;
	const vals = ['−55', '−54', '−56'];
	return (
		<Overlay>
			<TaskLine text="Validity, reliability, accuracy" at={K10.now} size={52} />
			<VCard x={X} y={200} w={CW} h={200} title="Validity: measures what it should?" titleAt={K10.validity} at={K10.validity - 4} dim={K10.reliability} lines={[
				{t: 'Rise from the reaction only; heat kept in', at: K10.here},
				{t: '(both start temperatures measured and averaged, lid, foam,', at: K10.both, size: 26, color: INK_SOFT},
				{t: 'extrapolation)', at: K10.both + 20, size: 26, color: INK_SOFT},
			]} lh={40} />
			<VCard x={X} y={430} w={CW} h={160} title="Reliability: repeats agree?" titleAt={K10.reliability} at={K10.reliability - 4} dim={K10.accuracy} lines={[
				{t: 'Runs: −55, −54, −56 kJ/mol; mean −55 kJ/mol', at: K10.runs},
			]} />
			<VCard x={X} y={620} w={CW} h={190} title="Accuracy: close to the accepted value?" titleAt={K10.accuracy} at={K10.accuracy - 4} color={AMBER_INK} lines={[
				{t: 'Accepted: about −57 kJ/mol', at: K10.accepted},
				{t: 'Improve by reducing heat loss.', at: K10.heatloss, weight: 700, color: TEAL},
			]} />
			{/* the three runs */}
			{[0, 1, 2].map(i => {
				const cx = RX + 70 + i * 200;
				return (
					<g key={i}>
						<CupOutline x={cx - 55} y={300} w={110} h={120} fill={0.6} at={K10.runs - 10 + i * 8} />
						<Sx x={cx} y={470} text={vals[i]} size={36} color={TEAL} anchor="middle" weight={800} at={K10.runs + 14 + i * 16} />
						<HeatOut pts={[[cx + 40, 296, -0.9], [cx - 40, 296, -2.2]]} at={K10.every + i * 6} len={50} />
					</g>
				);
			})}
			<DimG at={K10.accuracy} to={0.45}><Note x={RX + 20} y={540} text="within about 1 kJ/mol of the mean" size={30} color={TEAL} at={K10.reliable} /></DimG>
			<NumLine x={RX + 30} y={700} w={560} lo={-58} hi={-53} at={K10.accepted} ticks={[]} marks={[
				{v: -57, label: '−57', color: INK_SOFT, at: K10.accepted + 4}, {v: -56, label: '', color: TEAL, at: K10.every}, {v: -55, label: '', color: TEAL, at: K10.every + 6}, {v: -54, label: '', color: TEAL, at: K10.every + 12},
			]} bracket={{a: -56, b: -54, text: 'every run low', at: K10.every + 20}} />
			<MistakeX x={X} y={850} text="more repeats make it more accurate" at={K10.heatloss - 30} cross={K10.heatloss} note="repeats improve reliability; heat loss still lowers every run" size={30} />
			<Sx x={X} y={1052} text="Reliability means: repeated measurements under identical circumstances give similar results." size={24} color={INK_SOFT} weight={600} at={K10.reliability + 20} />
			{void K10.repeats}{void f}
		</Overlay>
	);
};

// ---------- 11. The risk assessment ----------
const S11 = 'risk-assessment';
const K11 = cues(sc(S11), {risk: 'risk assessment', corrosive: 'corrosive', glasses: 'safety glasses', rinse: 'rinse any', hcl: 'The hydrochloric', stand: 'Stand the cup', stirrer: 'with the stirrer', glass: 'glass thermometer'});
export const SceneRisk: React.FC = () => {
	const T = {x: 96, y: 230, rowH: 122};
	const cols = [580, 450, 700];
	const iconW = 110;
	const headH = 30 + 28;
	const ry = (j: number) => T.y + headH + j * T.rowH;
	const ic = (p: typeof CYL, j: number) => <IconPlate p={p} x={T.x + 10} y={ry(j) + 8} w={iconW - 20} h={T.rowH - 16} />;
	return (
		<>
			<Heading text="The risk assessment" at={4} size={60} />
			<Overlay>
				<RTable x={T.x} y={T.y} cols={cols} head={['Hazard', 'Harm', 'Control']} at={K11.risk} rowH={T.rowH} size={27} iconW={iconW} rows={[
					{at: K11.corrosive, icon: ic(CYL, 0), cells: [['1.00 mol/L NaOH', 'corrosive (GHS H314)'], 'severe skin burns and eye damage', ['safety glasses or goggles; rinse splashes', 'with plenty of water; teacher-prepared portions']]},
					{at: K11.hcl, icon: ic(CYL, 1), cells: [['1.00 mol/L HCl: low hazard at', 'this concentration; may be', 'corrosive to metals (H290)'], 'eye irritation from a splash', 'eye protection']},
					{at: K11.stand, icon: ic(CUPB, 2), cells: ['cup tipping', 'spill of corrosive solution', 'cup stands in a beaker; slotted lid']},
					{at: K11.stirrer, icon: ic(THERMO, 3), cells: ['glass thermometer', 'breaks, cuts, spills', ['use the stirrer or a probe;', 'do not stir with a thermometer']]},
					{at: K11.glass + 40, icon: ic(BEAKER, 4), cells: ['waste', 'none at this strength', ['neutral NaCl solution: sink with plenty', 'of water, if school rules allow']]},
				]} />
				<Fade at={K11.glasses}>
					<Sx x={1250} y={150} text="always:" size={34} color={TEAL} hand at={K11.glasses} />
					<PicH p={GLASSES} x={1370} y={110} h={56} />
				</Fade>
				<Fade at={K11.glasses + 20}>
					<PicH p={GLOVES} x={1620} y={92} h={70} />
					<Sx x={1600} y={190} text="optional, per school" size={22} color={INK_SOFT} weight={600} at={K11.glasses + 20} />
				</Fade>
				<Fade at={K11.rinse}><IconPlate p={WASH} x={T.x + cols[0] + cols[1] + cols[2] - 80} y={ry(0) + 10} w={60} h={T.rowH - 20} /></Fade>
				<AChip x={T.x} y={T.y + headH + 5 * T.rowH + 30} text="follow your school's risk assessment and the bottle's safety data sheet" size={28} color={TEAL} hand={false} at={K11.glass + 60} />
				{void HAZ}
			</Overlay>
		</>
	);
};

// ---------- 12. Memory aid ----------
const S12 = 'memory-aid';
const K12 = cues(sc(S12), {six: 'Six words', lidon: 'lid on', logon: 'log on', lineback: 'line back', keeps: 'lid keeps', logging: 'logging past', drawing: 'drawing that'});
const G12: GG = {x: 1300, y: 560, w: 420, h: 250, x0: 0, x1: 7, y0: 21, y1: 29};
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const lidDrop = smooth(prog(f, K12.keeps, 24));
	return (
		<Overlay>
			<Sx x={96} y={160} text="Six words to keep" size={40} color={INK_SOFT} hand at={K12.six} />
			<Sx x={110} y={380} text="Lid on." size={110} color={TEAL} hand at={K12.lidon} />
			<Sx x={620} y={380} text="Log on." size={110} color={TEAL} hand at={K12.logon} />
			<Sx x={1150} y={380} text="Line back." size={110} color={TEAL} hand at={K12.lineback} />
			{/* lid closing */}
			<Fade at={K12.keeps - 6}>
				<CupOutline x={190} y={620} w={200} h={220} fill={0.6} at={K12.keeps - 6} />
				<rect x={170} y={560 + 46 * lidDrop} width={240} height={18} rx={8} fill="#f4f1ea" stroke={INK} strokeWidth={4} />
				<HeatOut pts={[[290, 610, -1.57]]} at={K12.keeps - 6} out={K12.keeps + 20} len={50} />
			</Fade>
			{/* stopwatch with ticking rows */}
			<TimerIcon cx={700} cy={640} r={50} at={K12.logging} spin={120} />
			{[0, 1, 2, 3].map(i => <Sx key={i} x={790} y={620 + i * 44} text={['1.5 min  27.8', '2.0 min  27.7', '2.5 min  27.6', '3.0 min  27.5'][i]} size={30} color={INK} weight={600} at={K12.logging + 10 + i * 14} />)}
			{/* graph thumbnail with the dashed line back */}
			<TGraph g={G12} at={K12.drawing - 6} xTicks={[]} yTicks={[]} xLabel="" yLabel="" />
			<TPts g={G12} pts={RUN} time={() => K12.drawing - 6} teal={{from: COOL_FROM, at: K12.drawing - 6}} r={6} />
			<GSeg g={G12} a={[1.5, cool(1.5)]} b={[0, cool(0)]} at={K12.drawing + 10} dash="10 8" width={4} />
			<GSeg g={G12} a={[1.5, cool(1.5)]} b={[7, cool(7)]} at={K12.drawing} width={4} />
			<Note x={110} y={1000} text="line back to the moment of mixing" size={40} color={INK} at={K12.drawing + 40} />
			{void Ghost}{void AMBER}{void gx}{void gy}{void StartLine}
		</Overlay>
	);
};
