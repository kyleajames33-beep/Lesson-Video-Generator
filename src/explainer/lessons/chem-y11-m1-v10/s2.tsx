// Y11 Chem M1 V10 scenes 7 to 11: the three-level prediction (3 s countdown), every pair of levels (three drops,
// three lines, then a chance-engine run with a tally at each line), the fingerprint (hydrogen, helium and sodium
// strips with the painted sodium flame), Bohr's limit and Schrödinger's orbital cloud, and the memory line on its
// framed card ("Stairs, not a ramp: fixed steps, fixed colours.").
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown} from '../../kit';
import {cues} from '../../cues';
import {runTrials, trialsShown} from '../../sims/chance';
import type {ChanceRun, TrialPace} from '../../sims/chance';
import {FLAME, HE_LINES, H_LINES, NA_LINES, SCOPE, dur, hold, sc} from './common';
import {
	Atom, Ball, BohrAtom, Bracket, Chip, Cloud, DrawPath, Electron, Fade, Framed, GREEN_T, Heading, INK, LineTally, NAVY_T, PURE, PenArrow, PenRing, Photon, Plate, RED_T, Readout, Rich, STEP_Y,
	SVG, Stairs, Strip, Sx, VArrow, VIOLET_INK, BLUE_INK, Write, clamp01, lerp, nmInk, plateMap, prog, smooth, stepXY, sxOf,
} from './parts';
import type {StripG} from './parts';
import {Tube} from './s1';

// ---------- the three-level model atom (scenes 7 and 8) ----------
const X0 = 240, X1 = 760;
const LV = {top: 360, middle: 560, bottom: 840};
const G7: StripG = {x: 1000, y: 380, w: 800, h: 130};
/** Model lines: top to middle (smallest gap), middle to bottom, top to bottom (largest); order of energy left to right. */
const DROPS = [
	{from: 'top', to: 'middle', y0: LV.top, y1: LV.middle, x: 380, nm: 664},
	{from: 'middle', to: 'bottom', y0: LV.middle, y1: LV.bottom, x: 470, nm: 530},
	{from: 'top', to: 'bottom', y0: LV.top, y1: LV.bottom, x: 600, nm: 418},
] as const;
const ThreeLevels: React.FC = () => (
	<g>
		{(['top', 'middle', 'bottom'] as const).map(k => (
			<g key={k}>
				<line x1={X0} x2={X1} y1={LV[k]} y2={LV[k]} stroke={INK} strokeWidth={5} strokeLinecap="round" />
				<Sx x={X0 - 20} y={LV[k] + 13} text={k} size={38} color={INK} anchor="end" weight={800} at={-1000} />
			</g>
		))}
		<line x1={70} x2={70} y1={LV.bottom + 10} y2={LV.top - 20} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		<path d={`M57,${LV.top - 2} L70,${LV.top - 24} L83,${LV.top - 2}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
		<g transform={`translate(52,${(LV.top + LV.bottom) / 2 + 70}) rotate(-90)`}><Sx x={0} y={0} text="energy" size={34} color={INK} weight={800} at={-1000} /></g>
	</g>
);

// ---------- 7. prediction ----------
const K7 = cues(sc('prediction'), {here: "Here's an atom", when: 'When its electrons', how: 'how many', think: 'think.'});
export const ScenePrediction: React.FC = () => {
	const h = hold('prediction');
	return (
		<SVG>
			<Heading text="Quick prediction" at={0} />
			<ThreeLevels />
			<Electron x={500} y={LV.top - 15} r={15} />
			<Sx x={X0} y={930} text="a model atom: three energy levels" size={30} color={INK} weight={800} at={-1000} />
			<Strip id="v10s7" g={G7} />
			<Sx x={G7.x} y={G7.y - 16} text="its emission spectrum" size={30} color={INK} weight={800} at={-1000} />
			<Chip x={1400} y={570} segs={[{t: 'how many lines?'}]} at={K7.how} size={44} color={PURE} anchor="middle" />
			<Countdown start={h.startFrame} end={h.endFrame} x={1140} y={790} r={64} ringFrom={K7.think} />
			<Plate p={SCOPE} x={1400} y={720} h={(420 / SCOPE.box[2]) * SCOPE.box[3]} />
			<Sx x={1610} y={900} text="a spectroscope shows the lines" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			{void K7.here}{void K7.when}
		</SVG>
	);
};

// ---------- 8. every pair of levels ----------
const K8 = cues(sc('every-pair'), {three: 'Three.', tm: 'from the top level', mb: 'from the middle', tb: 'or straight', bottom: ['bottom.', 2], each: 'Each drop', gap: 'own gap', line: 'own line', straight: 'The straight drop', biggest: 'the biggest', energy: 'most energy'});
const RUN8: ChanceRun = runTrials({seed: 49, trials: 60, experiment: {kind: 'weighted', outcomes: DROPS.map((d, i) => ({label: `${d.from} → ${d.to}`, weight: [0.4, 0.35, 0.25][i]}))}});
const PACE8: TrialPace = {at: K8.line + 26, slow: 3, every: 12, until: dur('every-pair') - 20};
const FLY8 = 14;
const START8: number[] = (() => {
	const out: number[] = [];
	let shown = 0;
	for (let fr = 0; fr <= dur('every-pair'); fr++) { const n = trialsShown(RUN8, fr, PACE8); while (shown < n) { out.push(fr); shown++; } }
	return out;
})();
export const SceneEveryPair: React.FC = () => {
	const f = useCurrentFrame();
	const drawAt = [K8.tm, K8.mb, K8.tb];
	const lineAt = [K8.line - 26, K8.line - 13, K8.line];
	const landed = START8.filter(t => t + FLY8 <= f).length;
	const counts = [0, 0, 0];
	for (let k = 0; k < landed; k++) counts[RUN8.outcome[k]]++;
	const flying: number[] = [];
	for (let k = 0; k < START8.length; k++) if (START8[k] <= f && f < START8[k] + FLY8 + 2) flying.push(k);
	const big = prog(f, K8.biggest, 10);
	return (
		<SVG>
			<Heading text="Every pair of levels" at={-1000} />
			<ThreeLevels />
			<Electron x={500} y={LV.top - 15} r={15} o={1 - prog(f, K8.tm, 8)} />
			<Sx x={X0} y={930} text="a model atom: three energy levels" size={30} color={INK} weight={800} at={-1000} />
			<Strip id="v10s8" g={G7} lines={DROPS.map((d, i) => ({nm: d.nm, at: lineAt[i] + 14, glow: i === 2 ? big : 0}))} />
			<Sx x={G7.x} y={G7.y - 16} text="model atom: energy increases →" size={30} color={INK} weight={800} at={-1000} />
			<Framed x={1000} y={300} segs={[{t: '3 lines', c: GREEN_T}]} at={K8.three} size={52} />
			{DROPS.map((d, i) => <VArrow key={i} x={d.x} y0={d.y0 + 6} y1={d.y1 - 6} at={drawAt[i]} color={nmInk(d.nm)} width={i === 2 ? 7 + 4 * big : 7} dur={16} />)}
			{DROPS.map((d, i) => <Photon key={'p' + i} a={[d.x + 18, (d.y0 + d.y1) / 2]} b={[sxOf(G7, d.nm), G7.y + G7.h - 10]} at={lineAt[i]} dur={16} color={nmInk(d.nm)} />)}
			{flying.map(k => { const d = DROPS[RUN8.outcome[k]]; return <Photon key={'r' + k} a={[d.x + 18, (d.y0 + d.y1) / 2]} b={[sxOf(G7, d.nm), G7.y + G7.h - 10]} at={START8[k]} dur={FLY8} color={nmInk(d.nm)} />; })}
			<Bracket a={[X1 + 14, LV.top + 4]} b={[X1 + 14, LV.middle - 4]} at={K8.each} color={INK} depth={-14} />
			<Bracket a={[X1 + 14, LV.middle + 4]} b={[X1 + 14, LV.bottom - 4]} at={K8.each + 10} color={INK} depth={-14} />
			<Bracket a={[X1 + 90, LV.top + 4]} b={[X1 + 90, LV.bottom - 4]} at={K8.each + 20} color={INK} depth={-14} />
			<Write x={625} y={720} text="3 gaps, 3 lines" at={K8.gap} size={42} color={INK} />
			<Write x={630} y={420} text="biggest gap" at={K8.biggest} size={42} color={VIOLET_INK} />
			<LineTally g={G7} nms={DROPS.map(d => d.nm)} counts={counts} base={700} maxH={120} />
			<Readout x={1000} y={722} w={380} text={`atoms so far: ${landed}`} size={44} color={INK} />
			<Chip x={1400} y={820} segs={[{t: 'lines = number of different drops'}]} at={K8.energy - 6} size={44} color={PURE} anchor="middle" />
			{void K8.bottom}{void K8.straight}{void clamp01}
		</SVG>
	);
};

// ---------- 9. a fingerprint, and the evidence ----------
const K9 = cues(sc('fingerprint'), {evidence: 'strong evidence', every: 'Every element', own: 'its own pattern', finger: 'like a fingerprint', sodium: 'Sodium, for', strong: 'a strong', line: ['line.', 2], colour: "That's the colour", later: 'a later practical'});
const SX9 = 290, SW9 = 960;
const GS = {h: {x: SX9, y: 300, w: SW9, h: 110}, he: {x: SX9, y: 450, w: SW9, h: 110}, na: {x: SX9, y: 600, w: SW9, h: 110}};
export const SceneFingerprint: React.FC = () => {
	const f = useCurrentFrame();
	const fw = (FLAME.box[2] / FLAME.box[3]) * 360;
	const naX = sxOf(GS.na, 589.3);
	return (
		<SVG>
			<Heading text="A fingerprint, and the evidence" at={0} />
			<Chip x={96} y={182} segs={[{t: 'fixed levels predict lines; the lines match the gaps'}]} at={K9.evidence - 10} size={38} color={NAVY_T} />
			{f >= K9.evidence + 10 ? <DrawPath d="M120,252 L1150,252" at={K9.evidence + 10} dur={20} color={NAVY_T} width={5} /> : null}
			{(['h', 'he', 'na'] as const).map((k, i) => <Sx key={k} x={96} y={GS[k].y + 68} text={['hydrogen', 'helium', 'sodium'][i]} size={34} color={INK} weight={800} at={-1000} />)}
			<Strip id="v10s9h" g={GS.h} lines={H_LINES.map(l => ({nm: l.nm}))} />
			<Strip id="v10s9he" g={GS.he} lines={HE_LINES.map((nm, i) => ({nm, at: K9.own + i * 4}))} />
			<Strip id="v10s9na" g={GS.na} lines={NA_LINES.map(nm => ({nm, at: K9.own + 20, width: 7, glow: prog(f, K9.line, 10)}))} />
			<Bracket a={[SX9 + SW9 + 16, GS.h.y + 4]} b={[SX9 + SW9 + 16, GS.na.y + GS.na.h - 4]} at={K9.finger} color={INK} depth={-18} />
			<Write x={300} y={815} text="no two the same" at={K9.finger + 8} size={42} color={INK} />
			<Sx x={300} y={880} text="each element: its own levels, its own lines" size={34} color={INK} weight={800} at={K9.every} />
			<Tube x={1350} y={300} w={460} />
			<Sx x={1580} y={420} text="hydrogen tube" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Plate p={FLAME} x={1640 - fw / 2} y={470} h={360} at={K9.strong - 10} dy={20} />
			<Sx x={1640} y={460} text="sodium in a flame" size={30} color={INK} anchor="middle" weight={800} at={K9.strong} />
			<PenArrow a={[1530, 690]} b={[naX + 10, GS.na.y + GS.na.h + 14]} at={K9.line} color={nmInk(589)} bend={-0.12} width={5} />
			<Chip x={1824} y={856} segs={[{t: 'flame tests: a later practical'}]} at={K9.later} size={34} color={INK} anchor="end" />
			{void K9.sodium}{void K9.colour}{void plateMap}
		</SVG>
	);
};

// ---------- 10. Bohr's limit, and Schrödinger's orbitals ----------
const K10 = cues(sc('schrodinger'), {limits: 'had limits', neat: 'neat orbits,', sums: 'its sums', lines: "hydrogen's lines", more: 'more than one', work: "didn't work", schro: "Schrödinger's model", replaced: 'replaced the neat', keeps: 'It keeps', path: 'along a path', orbitals: 'describes orbitals', region: 'a region', found: 'be found', picture: 'Picture a cloud', densest: 'densest', be: ['to be.', 1], types: 'types called', s: 's,', p: 'p,', d: ['d', 1], ff: ['f,', 1], video: 'later video'});
const GB: StripG = {x: 1330, y: 480, w: 470, h: 150};
export const SceneSchrodinger: React.FC = () => {
	const f = useCurrentFrame();
	const swap = prog(f, K10.replaced, 20);
	const dashed = prog(f, K10.replaced, 10);
	return (
		<SVG>
			<Heading text="Bohr's limit, and Schrödinger's orbitals" at={0} />
			{/* Bohr's atom */}
			<BohrAtom cx={330} cy={570} R={190} dashed={dashed} on={0} />
			<Sx x={330} y={815} text={dashed > 0.5 ? 'Bohr model' : 'Bohr model: neat orbits'} size={34} color={dashed > 0.5 ? NAVY_T : INK} anchor="middle" weight={800} at={-1000} />
			<Write x={150} y={335} text="worked for hydrogen" at={K10.lines} size={42} color={NAVY_T} />
			{/* bigger atoms */}
			<Atom cx={900} cy={570} R={170} p={11} n={12} e={11} r={6} />
			<Sx x={1035} y={430} text="?" size={80} color={RED_T} anchor="middle" weight={800} at={K10.work - 6} />
			<Sx x={900} y={815} text="more electrons: predictions fail" size={34} color={INK} anchor="middle" weight={800} at={K10.more} />
			<Write x={720} y={335} text="fails for bigger atoms" at={K10.work} size={42} color={RED_T} />
			{/* Bohr's sums matched hydrogen (until the cloud replaces this panel) */}
			<g opacity={1 - swap}>
				<Tube x={GB.x} y={310} w={GB.w} />
				<Sx x={GB.x} y={GB.y - 16} text="Bohr's sums: hydrogen's lines" size={30} color={INK} weight={800} at={K10.sums} />
				<Strip id="v10s10" g={GB} lines={H_LINES.map(l => ({nm: l.nm}))} />
				<Write x={GB.x} y={GB.y + GB.h + 60} text="matched" at={K10.lines} size={42} color={GREEN_T} />
			</g>
			{/* Schrödinger's orbital */}
			<Sx x={1565} y={262} text="Schrödinger model, 1926" size={34} color={INK} anchor="middle" weight={800} at={K10.schro} />
			<Cloud cx={1565} cy={555} R={225} p={smooth(prog(f, K10.replaced + 10, 90))} pulse={prog(f, K10.densest, 12)} />
			<Write x={1340} y={322} text="levels stay" at={K10.keeps} out={K10.found - 12} size={42} color={NAVY_T} />
			<Sx x={1565} y={838} text="orbital: where the electron" size={38} color={BLUE_INK} anchor="middle" weight={800} at={K10.region} />
			<Sx x={1565} y={884} text="is likely to be found" size={38} color={BLUE_INK} anchor="middle" weight={800} at={K10.region + 10} />
			<PenRing cx={1565} cy={555} rx={90} ry={90} at={K10.found} color={BLUE_INK} seed={3} />
			<Write x={1380} y={322} text="most likely here" at={K10.found + 6} size={42} color={BLUE_INK} />
			<PenArrow a={[1520, 334]} b={[1555, 462]} at={K10.found + 12} color={BLUE_INK} bend={0.15} />
			<Sx x={1565} y={930} text="probability, not a path" size={38} color={INK} anchor="middle" weight={800} at={K10.be} />
			{/* orbital types for later */}
			{(['s', 'p', 'd', 'f'] as const).map((t, i) => <Chip key={t} x={735 + i * 92} y={848} segs={[{t}]} at={[K10.s, K10.p, K10.d, K10.ff][i]} size={38} color={INK} w={74} />)}
			<Sx x={900} y={942} text="a later video" size={30} color={INK} anchor="middle" weight={800} at={K10.video} />
			{void K10.limits}{void K10.neat}{void K10.path}{void K10.orbitals}{void K10.picture}{void K10.types}{void Fade}{void Rich}{void lerp}
		</SVG>
	);
};

// ---------- 11. one line to remember ----------
const K11 = cues(sc('memory-line'), {stairs: 'Stairs, not', electrons: 'Electrons can', fixed: 'fixed steps', atoms: 'so atoms', energies: 'photon energies', colours: 'certain colours'});
const YS11 = STEP_Y.map(y => 250 + (y - 316) * 0.62);
const G11: StripG = {x: 1000, y: 330, w: 800, h: 130};
export const SceneMemoryLine: React.FC = () => {
	const f = useCurrentFrame();
	const SX = 200, ST = 90;
	const hop = (t: number, a: number, b: number): [number, number] => {
		const A = stepXY(SX, ST, a, YS11), B = stepXY(SX, ST, b, YS11), u = clamp01((f - t) / 18);
		return [lerp(A[0], B[0], u), lerp(A[1], B[1], u) - Math.sin(Math.PI * u) * 40];
	};
	const [bx, by] = f < K11.energies - 30 ? hop(K11.fixed, 3, 1) : hop(K11.energies, 4, 1);
	const rx = sxOf(G11, 656), gx = sxOf(G11, 486);
	const src = stepXY(SX, ST, 2, YS11);
	return (
		<SVG>
			<Heading text="One line to remember" at={0} />
			<Stairs sx0={SX} step={ST} ys={YS11} />
			<Ball x={bx} y={by - 3} r={18} />
			<Photon a={[src[0] + 40, src[1] - 30]} b={[rx, G11.y + 10]} at={K11.fixed + 14} dur={22} color={nmInk(656)} />
			<Photon a={[src[0] + 40, src[1] - 30]} b={[gx, G11.y + 10]} at={K11.energies + 14} dur={22} color={nmInk(486)} />
			<PenArrow a={[src[0] + 60, src[1] + 40]} b={[rx - 20, G11.y + G11.h + 30]} at={K11.atoms} color={INK} bend={-0.15} />
			<Strip id="v10s11" g={G11} lines={H_LINES.map(l => ({nm: l.nm}))} labels />
			<Sx x={G11.x} y={G11.y - 16} text="hydrogen's lines" size={30} color={INK} weight={800} at={-1000} />
			<Sx x={SX} y={640} text="staircase: fixed steps" size={30} color={INK} weight={800} at={-1000} />
			<rect x={110} y={680} width={1700} height={200} rx={22} fill="#fffdf8" stroke={NAVY_T} strokeWidth={5} />
			<Sx x={140} y={724} text="memory aid" size={30} color={INK} hand at={-1000} />
			<Rich x={150} y={820} segs={[{t: 'Stairs, not a ramp: ', c: NAVY_T}, {t: 'fixed steps, fixed colours.', c: INK, at: K11.fixed}]} size={56} hand weight={700} at={K11.stairs} />
			{void K11.electrons}{void K11.colours}{void PURE}{void RED_T}
		</SVG>
	);
};
