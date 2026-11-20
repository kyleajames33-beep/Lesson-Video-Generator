// Y11 Chem M1 V10 scenes 1 to 6: V09's final frame (glowing hydrogen tube, four-line strip, crossed rainbow, the "?"
// atom and the route chip), the two spectra through prisms (hydrogen's four lines against the lit lamp's rainbow),
// photons, the nuclear model's predicted rainbow struck by hydrogen's real lines, Bohr's staircase that becomes the
// true-scale level diagram, one jump and one drop making one red photon, and the chance-engine run in which single
// drops build hydrogen's four lines while the gaps stay dark.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {runTrials, trialsShown} from '../../sims/chance';
import type {ChanceRun, TrialPace} from '../../sims/chance';
import {H_LINES, LAMP, TUBE, dur, sc} from './common';
import {
	AMB, Ball, Bracket, Chip, DrawPath, E_INK, Electron, Fade, Fan, Framed, GREEN_T, Heading, INK, LY, LineTally, Levels, MiniNucleus, NAVY_T, Nucleus, ORANGE, ORANGE_INK, PURE, PenArrow,
	PenRing, Photon, Plate, Prism, RED_T, Ray, Readout, Rich, SLATE_T, STEP_Y, SVG, Stairs, Strip, StripStrike, Sx, VArrow, VIOLET_INK, Write, clamp01, kf, lerp, nmColor, nmInk, plateMap,
	prog, smooth, stepXY, sxOf, vis,
} from './parts';
import type {LvG, StripG} from './parts';

/** Tube plate placed by its left edge, top and width (never stretched: height follows the plate's aspect). */
export const tubeH = (w: number) => (w / TUBE.box[2]) * TUBE.box[3];
export const Tube: React.FC<{x: number; y: number; w: number; at?: number; out?: number; o?: number}> = ({x, y, w, at, out, o}) => <Plate p={TUBE} x={x} y={y} h={tubeH(w)} at={at} out={out} o={o} />;
const lerpG = (a: StripG, b: StripG, t: number): StripG => ({x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t), w: lerp(a.w, b.w, t), h: lerp(a.h, b.h, t)});
const HL = H_LINES.map(l => l.nm);

/** The level diagram used in scenes 4 to 6 (true -1/n^2 scale). */
export const G: LvG = {x0: 230, x1: 700, y1: 880, yInf: 210};

// ---------- 1. hook (opens on V09's final frame) ----------
const K1 = cues(sc('hook'), {clue: 'left a clue', pass: 'Pass an electric', glows: 'it glows', spread: 'spread that light', prism: 'a prism', rainbow: "don't get a rainbow", four: 'four sharp', lines: 'coloured lines', red: 'red,', bg: 'blue-green,', blue: ['blue', 1], violet: 'violet,', dark: 'darkness in between', compare: 'Compare a hot', filament: 'lamp filament', every: 'every colour', gaps: 'no gaps', why: 'So why does', atom: 'in an atom'});
// V09's final frame (read from src/explainer/lessons/chem-y11-m1-v09/s3.tsx SceneHandoff, 20 Nov 2026)
const O_TUBE = {x: 460, y: 470, w: 1000};
const O_STRIP: StripG = {x: 1490, y: 470, w: 334, h: 170};
const O_RB: StripG = {x: 1490, y: 330, w: 334, h: 84};
// board A
const A_TUBE = {x: 110, y: 250, w: 600};
export const GH: StripG = {x: 1000, y: 380, w: 800, h: 130};
const A_RB: StripG = {x: 1480, y: 196, w: 320, h: 56};
const GL: StripG = {x: 1000, y: 740, w: 800, h: 120};
const PH: [number, number] = [830, 300], PL: [number, number] = [830, 700];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, 60, 46));
	const tx = lerp(O_TUBE.x, A_TUBE.x, m), tw0 = lerp(O_TUBE.w, A_TUBE.w, m), ty = lerp(O_TUBE.y, A_TUBE.y, m);
	const gs = lerpG(O_STRIP, GH, m), rb = lerpG(O_RB, A_RB, m);
	const lineAt = [K1.red, K1.bg, K1.blue, K1.violet];
	const tubeEnd: [number, number] = [A_TUBE.x + A_TUBE.w * 0.97, A_TUBE.y + tubeH(A_TUBE.w) * 0.36];
	const lw = (LAMP.box[2] / LAMP.box[3]) * 320;
	return (
		<SVG>
			{/* V09's handoff pieces that leave the board */}
			<Fade at={-1000} out={60}>
				<Heading text="Next: what are the electrons doing?" at={-1000} />
				<Nucleus cx={175} cy={300} p={17} n={18} r={6} />
				<Nucleus cx={340} cy={300} p={17} n={20} r={6} />
				<Rich x={175} y={392} segs={[{t: '^{35}Cl'}]} size={34} anchor="middle" />
				<Rich x={340} y={392} segs={[{t: '^{37}Cl'}]} size={34} anchor="middle" />
				<Sx x={258} y={440} text="nuclei: done" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={O_STRIP.x + O_STRIP.w / 2} y={690} text="hydrogen: a few sharp lines" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<Fade at={-1000} out={520}>
				<circle cx={290} cy={660} r={150} fill="#dceaf7" stroke="#2f7fc4" strokeWidth={4} />
				<Nucleus cx={290} cy={660} p={1} n={0} r={14} />
				<Sx x={372} y={640} text="?" size={72} color={E_INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={290} y={492} text="electrons: how arranged?" size={34} color={INK} anchor="middle" weight={800} at={K1.glows} />
			</Fade>
			<Chip x={960} y={840} segs={[{t: 'How do line spectra reveal discrete atomic energy levels?'}]} at={-1000} out={520} size={40} color={PURE} anchor="middle" />
			{/* the tube moves to the top row */}
			<Tube x={tx} y={ty} w={tw0} />
			<Sx x={A_TUBE.x + A_TUBE.w / 2} y={430} text="hydrogen gas, current on" size={30} color={INK} anchor="middle" weight={800} at={K1.glows} out={K1.compare + 40} />
			{/* crossed rainbow */}
			<rect x={rb.x} y={rb.y} width={rb.w} height={rb.h} rx={8} fill="url(#v10rbS)" stroke={INK} strokeWidth={3} />
			<defs><linearGradient id="v10rbS" x1="0" x2="1" y1="0" y2="0">{Array.from({length: 13}, (_, i) => <stop key={i} offset={i / 12} stopColor={nmColor(700 - i * 25)} />)}</linearGradient></defs>
			<line x1={rb.x - 10} y1={rb.y + rb.h + 6} x2={rb.x + rb.w + 10} y2={rb.y - 6} stroke={RED_T} strokeWidth={7} strokeLinecap="round" />
			<Write x={rb.x - 24} y={rb.y + rb.h / 2 + 14} text="not this" at={K1.rainbow} size={46} color={RED_T} anchor="end" />
			{/* the hydrogen strip: V09's lines fade, then redraw one at a time on cue */}
			<Strip id="v10s1h" g={gs} lines={HL.map((nm, i) => ({nm, at: f < 120 ? -1000 : lineAt[i], out: f < 120 ? 56 : undefined}))} labels={m >= 1} labelAt={K1.violet + 8} />
			{/* prism and rays (hydrogen) */}
			<Fade at={K1.spread}>
				<Prism cx={PH[0]} cy={PH[1]} s={62} />
			</Fade>
			<Ray a={tubeEnd} b={[PH[0] - 34, PH[1] + 4]} at={K1.spread + 4} color="#d94fc0" width={7} />
			{HL.map((nm, i) => <Ray key={nm} a={[PH[0] + 30, PH[1] + 8]} b={[sxOf(GH, nm), GH.y + 2]} at={lineAt[i] - 10} color={nmInk(nm)} width={4} />)}
			<Sx x={GH.x + (sxOf(GH, 656) + sxOf(GH, 486)) / 2 - GH.x} y={GH.y + 76} text="darkness" size={34} color="#ffffff" anchor="middle" weight={800} at={K1.dark} />
			<Bracket a={[sxOf(GH, 656) - 8, GH.y + GH.h + 12]} b={[sxOf(GH, 410) + 8, GH.y + GH.h + 12]} at={K1.lines} color={INK} depth={14} />
			<Write x={sxOf(GH, 530)} y={GH.y + GH.h + 66} text="only four" at={K1.lines + 6} size={46} color={INK} />
			<Sx x={GH.x} y={GH.y + GH.h + 66} text="line spectrum" size={38} color={INK} weight={800} at={K1.violet} />
			{/* the lamp row */}
			<Plate p={LAMP} x={260 - lw / 2} y={560} h={320} at={K1.compare} dy={20} />
			<Fade at={K1.compare + 10}>
				<Prism cx={PL[0]} cy={PL[1]} s={62} />
			</Fade>
			<Ray a={[260 + lw * 0.36, 690]} b={[PL[0] - 34, PL[1] + 4]} at={K1.filament} color="#e8b23a" width={7} />
			<Fan id="v10s1fan" apex={[PL[0] + 30, PL[1] + 8]} g={GL} reveal={smooth(prog(f, K1.filament + 14, 50))} />
			<Fade at={K1.compare + 10}>
				<Strip id="v10s1l" g={GL} rainbow={smooth(prog(f, K1.filament + 14, 50))} />
			</Fade>
			<Bracket a={[GL.x + 8, GL.y + GL.h + 12]} b={[GL.x + GL.w - 8, GL.y + GL.h + 12]} at={K1.every} color={INK} depth={14} />
			<Sx x={GL.x} y={925} text="continuous spectrum" size={38} color={INK} weight={800} at={K1.gaps} />
			<Write x={GL.x + 470} y={925} text="every colour" at={K1.every} size={42} color={INK} />
			<Heading text="Line spectra: why only these colours?" at={K1.atom - 10} />
			{void K1.clue}{void K1.pass}{void K1.prism}{void K1.four}{void K1.why}{void AMB}
		</SVG>
	);
};

// ---------- 2. one colour, one photon energy ----------
const K2 = cues(sc('photons'), {light: 'Light carries', photons: 'called photons', colour: 'sets its colour', red: 'Red photons', least: 'the least energy', violet: 'and violet photons', most: 'the most', single: 'So a single', same: 'the same, exact'});
const G2: StripG = {x: 120, y: 400, w: 1680, h: 270};
const T2 = {x: 760, y: 186, w: 700};
export const ScenePhotons: React.FC = () => {
	const f = useCurrentFrame();
	const rx = sxOf(G2, 656), vx = sxOf(G2, 410);
	const src: [number, number] = [T2.x + T2.w / 2, T2.y + tubeH(T2.w) * 0.6];
	return (
		<SVG>
			<Heading text="One colour, one photon energy" at={0} />
			<Tube x={T2.x} y={T2.y} w={T2.w} />
			<Strip id="v10s2" g={G2} lines={HL.map(nm => ({nm, glow: nm === 656 ? prog(f, K2.same, 12) : 0}))} labels />
			<Sx x={96} y={260} text="photon: a packet of light energy" size={34} color={INK} weight={800} at={K2.photons} />
			<Photon a={[src[0] - 60, src[1] + 20]} b={[rx, G2.y + 6]} at={K2.photons} dur={60} color={nmInk(656)} fadeAt={K2.red + 40} />
			<Write x={96} y={360} text="photon = one packet" at={K2.photons + 12} size={42} color={INK} />
			<Photon a={[src[0] + 60, src[1] + 20]} b={[vx, G2.y + 6]} at={K2.violet} dur={40} color={nmInk(410)} fadeAt={K2.single} />
			{/* energy grows left to right */}
			<g opacity={prog(f, K2.most - 6, 10)}>
				<DrawPath d={`M${G2.x + 10},${730} L${G2.x + G2.w - 20},${730}`} at={K2.most - 6} dur={24} color={ORANGE} width={8} />
				<path d={`M${G2.x + G2.w - 40},${710} L${G2.x + G2.w - 12},${730} L${G2.x + G2.w - 40},${750}`} fill="none" stroke={ORANGE} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, K2.most + 16, 6)} />
			</g>
			<Sx x={G2.x} y={792} text="least energy (red)" size={34} color={nmInk(656)} weight={800} at={K2.least} />
			<Sx x={G2.x + G2.w} y={792} text="most energy (violet)" size={34} color={VIOLET_INK} anchor="end" weight={800} at={K2.most} />
			<Write x={760} y={800} text="more energy →" at={K2.most + 8} size={42} color={ORANGE_INK} />
			<Sx x={G2.x + G2.w} y={842} text="photon energy E = hf" size={30} color={INK} anchor="end" weight={700} at={K2.most + 20} />
			<PenRing cx={rx} cy={G2.y + G2.h / 2} rx={46} ry={140} at={K2.same} color={RED_T} seed={4} />
			<Write x={rx + 70} y={386} text="one line, one energy" at={K2.same + 10} size={42} color={RED_T} />
			<PenArrow a={[rx + 66, 372]} b={[rx + 10, G2.y + 6]} at={K2.same + 14} color={RED_T} bend={0.15} />
			{void K2.light}{void K2.colour}
		</SVG>
	);
};

// ---------- 3. what the nuclear model would predict ----------
const K3 = cues(sc('nuclear-model-problem'), {nuclear: 'the nuclear model', nothing: 'But nothing', energy: "electron's energy", any: 'have any energy', lose: 'lose any amount', every: 'every energy', smooth: 'smooth rainbow', filament: 'the filament', lines: "Hydrogen's lines", cant: "can't be right"});
const GP: StripG = {x: 900, y: 330, w: 900, h: 110}, GLm: StripG = {x: 900, y: 520, w: 900, h: 110}, GHr: StripG = {x: 900, y: 720, w: 900, h: 110};
export const SceneNuclear: React.FC = () => {
	const f = useCurrentFrame();
	const cx = 330, cy = 600;
	const rad = 70 + 110 * (0.5 + 0.5 * Math.sin(f * 0.031) * Math.cos(f * 0.011));
	const ang = f * 0.05;
	const ex = cx + rad * Math.cos(ang), ey = cy + rad * Math.sin(ang);
	const fill = smooth(prog(f, K3.every, 50));
	const bar = (rad - 70) / 110;
	const lw = (LAMP.box[2] / LAMP.box[3]) * 150;
	const cols = [690, 640, 600, 570, 540, 505, 470, 440, 415];
	return (
		<SVG>
			<Heading text="What the nuclear model predicts" at={0} />
			<circle cx={cx} cy={cy} r={196} fill="#f3efe6" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
			<MiniNucleus cx={cx} cy={cy} r={9} />
			<Electron x={ex} y={ey} r={15} />
			<Sx x={cx} y={370} text="nuclear model" size={38} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={cx} y={845} text="tiny nucleus, electrons outside" size={30} color={INK} anchor="middle" weight={700} at={K3.nuclear + 30} />
			{/* energy bar: any value */}
			<defs><linearGradient id="v10s3bar" x1="0" x2="0" y1="1" y2="0"><stop offset={0} stopColor="#fde7c2" /><stop offset={1} stopColor={ORANGE} /></linearGradient></defs>
			<rect x={590} y={400} width={44} height={420} rx={8} fill="url(#v10s3bar)" stroke={INK} strokeWidth={3} />
			<line x1={580} x2={644} y1={820 - bar * 420} y2={820 - bar * 420} stroke={INK} strokeWidth={6} strokeLinecap="round" />
			<Sx x={612} y={388} text="energy" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Write x={430} y={300} text="any energy allowed?" at={K3.nothing} size={42} color={INK} />
			{/* streaming photons of every energy */}
			{cols.map((nm, i) => <Photon key={nm} a={[530, 560 - i * 8]} b={[sxOf(GP, nm), GP.y + 6]} at={K3.every + i * 5} dur={24} color={nmInk(nm)} />)}
			<Sx x={GP.x} y={GP.y - 14} text="predicted: any energy allowed" size={30} color={INK} weight={800} at={-1000} />
			<Strip id="v10s3p" g={GP} rainbow={fill} />
			<Plate p={LAMP} x={GLm.x - lw - 14} y={GLm.y - 20} h={150} />
			<Strip id="v10s3l" g={GLm} rainbow={1} />
			<Sx x={GLm.x + GLm.w} y={GLm.y + GLm.h + 34} text="filament lamp (real)" size={30} color={INK} anchor="end" weight={800} at={-1000} />
			<Bracket a={[1830, GP.y + 6]} b={[1830, GLm.y + GLm.h - 6]} at={K3.smooth} color={INK} depth={-16} />
			<Write x={1320} y={500} text="same as the lamp" at={K3.smooth + 6} out={K3.cant - 10} size={42} color={INK} />
			<Strip id="v10s3h" g={GHr} lines={HL.map(nm => ({nm}))} />
			<Sx x={GHr.x + GHr.w} y={GHr.y + GHr.h + 34} text="hydrogen (real)" size={30} color={INK} anchor="end" weight={800} at={-1000} />
			<PenRing cx={GHr.x + GHr.w / 2} cy={GHr.y + GHr.h / 2} rx={480} ry={64} at={K3.lines} color={AMB} seed={2} />
			<StripStrike g={GP} at={K3.cant} />
			<Write x={1250} y={500} text="but hydrogen shows lines" at={K3.cant + 6} size={42} color={RED_T} />
			<Sx x={100} y={915} text="classical physics also predicted the electron would spiral in" size={30} color={INK} weight={700} at={K3.any} />
			{void K3.energy}{void K3.lose}{void K3.filament}
		</SVG>
	);
};

// ---------- 4. Bohr's idea: fixed energy levels ----------
const K4 = cues(sc('bohr-levels'), {bohr: 'Niels Bohr', fixed: 'certain fixed', levels: 'called energy levels', staircase: 'a staircase', ramp: 'not a ramp', stand: 'You can stand', never: 'never between', lowest: 'The lowest level', ground: 'the ground', state: 'state.'});
const SX0 = 180, STEP = 100;
const RAMP = {x0: 1060, y0: 880, x1: 1760, y1: 316};
export const T5 = {x: 1060, y: 220, w: 640};
export const G5: StripG = {x: 1000, y: 520, w: 800, h: 130};
/** Ball hops along stair treads: a list of [frame, tread]. */
const hopXY = (f: number, hops: [number, number][]): [number, number] => {
	let k = hops[0][1];
	for (let i = 1; i < hops.length; i++) {
		const [t, to] = hops[i];
		if (f < t) break;
		const u = clamp01((f - t) / 18);
		const a = stepXY(SX0, STEP, k), b = stepXY(SX0, STEP, to);
		if (u < 1) return [lerp(a[0], b[0], u), lerp(a[1], b[1], u) - Math.sin(Math.PI * u) * 70];
		k = to;
	}
	return stepXY(SX0, STEP, k);
};
export const SceneBohr: React.FC = () => {
	const f = useCurrentFrame();
	const morph = prog(f, K4.lowest - 10, 40);
	const right = 1 - prog(f, K4.lowest - 16, 14);
	const hops: [number, number][] = [[0, 0], [K4.stand, 1], [K4.stand + 24, 2], [K4.never - 2, 4], [K4.never + 22, 3], [K4.lowest - 40, 0]];
	const [bx, by] = hopXY(f, hops);
	const rt = 0.5 + 0.38 * Math.sin(f * 0.022);
	const rbx = lerp(RAMP.x0, RAMP.x1, rt) - 10, rby = lerp(RAMP.y0, RAMP.y1, rt) - 10;
	const eY = LY(G, 1);
	return (
		<SVG>
			<Heading text="Bohr's idea: fixed energy levels" at={0} />
			<Sx x={1824} y={150} text="Bohr model, 1913" size={34} color={INK} anchor="end" weight={800} at={K4.bohr} />
			<Stairs sx0={SX0} step={STEP} morph={morph} g={G} />
			{morph < 0.05 ? <Ball x={bx} y={by - 3} /> : null}
			<Levels g={G} at={K4.lowest + 22} hi={{}} />
			<Electron x={465} y={lerp(STEP_Y[0] - 22, eY - 15, smooth(prog(f, K4.lowest, 30)))} r={15} o={morph >= 0.05 ? 1 : 0} />
			{/* the ramp */}
			<g opacity={right}>
				<path d={`M${RAMP.x0},${RAMP.y0} L${RAMP.x1},${RAMP.y1} L${RAMP.x1},${RAMP.y0} Z`} fill="#efe6d4" stroke={INK} strokeWidth={5} strokeLinejoin="round" />
				<Ball x={rbx} y={rby} />
				{f >= K4.ramp ? <><DrawPath d={`M${RAMP.x0 + 80},${RAMP.y1 + 20} L${RAMP.x1 - 40},${RAMP.y0 - 20}`} at={K4.ramp} dur={10} color={SLATE_T} width={8} /><DrawPath d={`M${RAMP.x1 - 40},${RAMP.y1 + 20} L${RAMP.x0 + 80},${RAMP.y0 - 20}`} at={K4.ramp + 5} dur={10} color={SLATE_T} width={8} /></> : null}
				<Write x={1400} y={280} text="any height" at={K4.ramp + 8} size={42} color={SLATE_T} />
				<Sx x={1410} y={930} text="ramp" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={480} y={930} text="staircase" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
				<Bracket a={[SX0 + 6 * STEP + 18, STEP_Y[5]]} b={[SX0 + 6 * STEP + 18, STEP_Y[0]]} at={K4.never} color={NAVY_T} depth={-18} />
				<Write x={SX0 + 6 * STEP + 56} y={620} text="only these heights" at={K4.never + 6} size={42} color={NAVY_T} />
			</g>
			{/* after the morph: the tube and an empty strip wait at the right */}
			<Tube x={T5.x} y={T5.y} w={T5.w} at={K4.lowest - 14} />
			<Fade at={K4.lowest - 10}><Strip id="v10s4" g={G5} /></Fade>
			<Sx x={G5.x} y={G5.y + G5.h + 40} text="hydrogen's spectrum" size={30} color={INK} weight={800} at={K4.lowest - 6} />
			<Sx x={G.x1 + 30} y={G.y1 + 13} text="ground state" size={38} color={INK} weight={800} at={K4.ground} />
			<Write x={G.x1 + 30} y={G.y1 - 70} text="lowest step" at={K4.ground + 8} size={42} color={NAVY_T} />
			<PenArrow a={[G.x1 + 60, G.y1 - 60]} b={[G.x1 - 160, G.y1 - 22]} at={K4.ground + 14} color={NAVY_T} bend={0.2} />
			<Sx x={SX0} y={250} text="energy levels: only these energies" size={34} color={NAVY_T} weight={800} at={K4.levels} out={K4.lowest - 10} />
			{void K4.fixed}{void K4.staircase}{void K4.state}{void kf}
		</SVG>
	);
};

// ---------- 5. up, then down: how the light is made ----------
const K5 = cues(sc('emission'), {made: 'how the light', current: 'electric current', jumps: 'jumps up', excited: 'excited.', drops: 'soon drops', gives: 'gives out one', photon: 'one photon.', gap: 'energy gap', levels: 'two levels.', nolight: 'no light at all', jump: 'a jump'});
export const SceneEmission: React.FC = () => {
	const f = useCurrentFrame();
	const y1 = LY(G, 1), y2 = LY(G, 2), y3 = LY(G, 3);
	const ey = kf(f, [[K5.jumps, y1], [K5.jumps + 18, y3], [K5.drops, y3], [K5.drops + 26, y2]]);
	const lvl = f < K5.jumps + 9 ? 1 : f < K5.drops + 13 ? 3 : 2;
	const glow = prog(f, K5.excited - 6, 10) * (1 - prog(f, K5.drops + 6, 10));
	const EX = 480;
	const rx = sxOf(G5, 656);
	const flash = prog(f, K5.jump, 6) * (1 - prog(f, K5.jump + 24, 10));
	return (
		<SVG>
			<Heading text="Up, then down: how the light is made" at={0} />
			<Levels g={G} hi={{2: K5.gap, 3: K5.gap}} />
			<Tube x={T5.x} y={T5.y} w={T5.w} />
			<Strip id="v10s5" g={G5} lines={[{nm: 656, at: K5.photon - 2, glow: flash}]} labels labelAt={K5.photon + 6} />
			<Sx x={G5.x} y={G5.y + G5.h + 40} text="hydrogen's spectrum" size={30} color={INK} weight={800} at={-1000} />
			{/* energy in */}
			<Sx x={150} y={700} text="current or flame" size={30} color={ORANGE_INK} weight={800} at={K5.current} />
			<VArrow x={420} y0={y1 - 8} y1={y3 + 10} at={K5.jumps} color={ORANGE} width={8} dur={18} />
			<Write x={150} y={650} text="energy in: up" at={K5.jumps + 6} size={42} color={ORANGE_INK} />
			<Electron x={EX} y={ey - 15} r={15} glow={glow} />
			<Write x={540} y={345} text="excited" at={K5.excited} out={K5.drops} size={42} color={INK} />
			{/* the drop and its photon */}
			<VArrow x={EX + 40} y0={y3 + 6} y1={y2 - 6} at={K5.drops} color={nmInk(656)} width={7} dur={24} />
			<Photon a={[EX + 70, (y2 + y3) / 2]} b={[rx, G5.y + 8]} at={K5.gives} dur={26} color={nmInk(656)} />
			<Write x={560} y={520} text="one drop, one photon" at={K5.gives + 4} size={42} color={RED_T} />
			<Photon a={[EX + 70, (y2 + y3) / 2]} b={[rx, G5.y + 8]} at={K5.jump} dur={18} color={nmInk(656)} />
			<Bracket a={[G.x1 + 16, y3 + 4]} b={[G.x1 + 16, y2 - 4]} at={K5.gap} color={NAVY_T} depth={-16} />
			<Readout x={G5.x} y={720} w={460} text={`electron: level ${lvl}`} size={44} color={E_INK} />
			<Framed x={G5.x} y={880} segs={[{t: 'photon energy = gap', c: NAVY_T}]} at={K5.gap + 6} size={52} tick={false} stroke={NAVY_T} />
			<Sx x={460} y={650} text="no jump, no light" size={38} color={INK} weight={800} at={K5.nolight} />
			{void K5.made}{void K5.levels}{void GREEN_T}
		</SVG>
	);
};

// ---------- 6. fixed gaps, fixed lines (chance-engine run) ----------
const K6 = cues(sc('hydrogen-lines'), {levels: 'The levels are', gaps: 'so the gaps', each: 'each gap makes', four: 'the four visible', third: 'the third,', fourth: 'fourth,', fifth: 'fifth', sixth: 'sixth', bigger: 'A bigger drop', toward: 'further toward', drops: 'Drops all the way', uv: 'as ultraviolet', see: "can't see"});
export const G6: StripG = {x: 900, y: 420, w: 740, h: 130};
const T6 = {x: 1060, y: 196, w: 520};
const RUN6: ChanceRun = runTrials({seed: 35, trials: 240, experiment: {kind: 'weighted', outcomes: H_LINES.map((l, i) => ({label: `${l.from} → 2`, weight: [0.4, 0.25, 0.2, 0.15][i]}))}});
const PACE6: TrialPace = {at: K6.third, slow: 4, every: 21, until: dur('hydrogen-lines') - 60};
const FLY = 16;
/** Scene frame at which each trial (1-based index k - 1) starts. */
const START6: number[] = (() => {
	const out: number[] = [];
	let shown = 0;
	for (let fr = 0; fr <= dur('hydrogen-lines'); fr++) {
		const n = trialsShown(RUN6, fr, PACE6);
		while (shown < n) { out.push(fr); shown++; }
	}
	return out;
})();
export const dropX = (from: number) => 300 + (from - 3) * 70;
export const SceneLines: React.FC = () => {
	const f = useCurrentFrame();
	const y2 = LY(G, 2);
	const landed = START6.filter(t => t + FLY <= f).length;
	const counts = [0, 0, 0, 0];
	for (let k = 0; k < landed; k++) counts[RUN6.outcome[k]]++;
	const firstLand = [0, 1, 2, 3].map(i => { const k = Array.from(RUN6.outcome).indexOf(i); return k < 0 || k >= START6.length ? 1e9 : START6[k] + FLY; });
	const started = START6.filter(t => t <= f).length;
	const latest = started > 0 ? RUN6.outcome[started - 1] : -1;
	const flying: number[] = [];
	for (let k = 0; k < started; k++) if (f < START6[k] + FLY + 2) flying.push(k);
	const ln = latest >= 0 ? H_LINES[latest] : null;
	const uvZone = {x: 1652, y: G6.y, w: 168, h: G6.h};
	return (
		<SVG>
			<Heading text="Fixed gaps, fixed lines" at={0} />
			<Levels g={G} hi={{2: K6.levels, 3: K6.levels, 4: K6.levels, 5: K6.levels, 6: K6.levels}} />
			<Tube x={T6.x} y={T6.y} w={T6.w} />
			<Strip id="v10s6" g={G6} lines={H_LINES.map((l, i) => ({nm: l.nm, at: firstLand[i] - 4, glow: flying.some(k => RUN6.outcome[k] === i && f >= START6[k] + FLY - 2) ? 1 : 0}))} labels />
			{/* the four drops, each drawn when its first atom drops */}
			{H_LINES.map((l, i) => <VArrow key={l.from} x={dropX(l.from)} y0={LY(G, l.from) + 4} y1={y2 - 6} at={firstLand[i] - FLY} color={nmInk(l.nm)} width={latest === i && f < START6[started - 1] + FLY ? 9 : 6} dur={10} />)}
			{flying.map(k => {
				const i = RUN6.outcome[k], l = H_LINES[i], t0 = START6[k];
				const a: [number, number] = [dropX(l.from) + 16, (LY(G, l.from) + y2) / 2];
				return <Photon key={k} a={a} b={[sxOf(G6, l.nm), G6.y + 10]} at={t0} dur={FLY} color={nmInk(l.nm)} />;
			})}
			{flying.length ? (() => { const k = flying[flying.length - 1], l = H_LINES[RUN6.outcome[k]]; const u = clamp01((f - START6[k]) / 10); return <Electron x={dropX(l.from) - 22} y={lerp(LY(G, l.from), y2, smooth(u)) - 15} r={13} />; })() : <Electron x={dropX(3) - 22} y={y2 - 15} r={13} />}
			<LineTally g={G6} nms={HL} counts={counts} base={735} maxH={85} />
			<Readout x={G6.x} y={752} w={380} text={`atoms so far: ${landed}`} size={44} color={INK} />
			<Readout x={G6.x + 400} y={752} w={340} text={`this drop: ${ln ? ln.from + ' → 2' : '?'}`} size={44} color={ln ? nmInk(ln.nm) : INK} />
			<Readout x={G6.x} y={832} w={740} text={`this photon: ${ln ? ln.nm + ' nm, ' + ln.name : '?'}`} size={44} color={ln ? nmInk(ln.nm) : INK} />
			<Sx x={230} y={935} text="model: brightness not to scale" size={30} color={INK} weight={700} at={-1000} />
			<Write x={G6.x} y={602} text="same gap, same colour, every time" at={K6.each} out={K6.drops - 20} size={42} color={INK} />
			<Write x={260} y={205} text="bigger drop → more energy" at={K6.toward} size={42} color={VIOLET_INK} />
			<PenArrow a={[dropX(3) - 30, y2 + 40]} b={[dropX(6) + 40, y2 + 40]} at={K6.toward + 6} color={VIOLET_INK} bend={0.08} />
			{/* ultraviolet drops to level 1 */}
			<g opacity={prog(f, K6.drops, 12)}>
				<rect x={uvZone.x} y={uvZone.y} width={uvZone.w} height={uvZone.h} rx={10} fill="#e9ecef" stroke={SLATE_T} strokeWidth={3} strokeDasharray="10 7" />
				<Sx x={uvZone.x + uvZone.w / 2} y={uvZone.y + uvZone.h / 2 + 12} text="UV" size={38} color={SLATE_T} anchor="middle" weight={800} at={-1000} />
			</g>
			<VArrow x={590} y0={y2 + 4} y1={LY(G, 1) - 6} at={K6.drops + 6} color={SLATE_T} width={6} dashed dur={20} />
			<VArrow x={650} y0={LY(G, 3) + 4} y1={LY(G, 1) - 6} at={K6.drops + 30} color={SLATE_T} width={6} dashed dur={20} />
			<Photon a={[612, 600]} b={[uvZone.x + 30, uvZone.y + uvZone.h - 4]} at={K6.drops + 26} dur={34} color={SLATE_T} dashed fadeAt={K6.drops + 76} />
			<Photon a={[672, 640]} b={[uvZone.x + 90, uvZone.y + uvZone.h - 4]} at={K6.drops + 50} dur={34} color={SLATE_T} dashed fadeAt={K6.drops + 88} />
			<Sx x={uvZone.x + uvZone.w / 2 + 4} y={uvZone.y + uvZone.h + 40} text="ultraviolet" size={34} color={SLATE_T} anchor="middle" weight={800} at={K6.uv} />
			<Sx x={uvZone.x + uvZone.w / 2 + 4} y={uvZone.y + uvZone.h + 80} text="(invisible)" size={34} color={SLATE_T} anchor="middle" weight={800} at={K6.uv} />
			<Sx x={G6.x} y={604} text="each line = one drop, not a picture of an orbit" size={34} color={INK} weight={800} at={K6.drops + 90} />
			{void K6.gaps}{void K6.four}{void K6.fourth}{void K6.fifth}{void K6.sixth}{void K6.bigger}{void vis}{void plateMap}{void Chip}{void GREEN_T}{void PURE}
		</SVG>
	);
};
