// Y11 Chem M1 V02 scenes 6 to 10: the limits (consistent is not proof; one steady-boiling mixture; pressure cards;
// shared values; the two-checks rule), the mystery white solid against a data table, dry ice subliming (CO2 lattice
// to gas with no liquid layer), physical against chemical evidence (the ice view reverses; magnesium burns to MgO)
// and the "Flat hints pure" memory card over the two curves.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {CANDLE, DRY, ICE, LUMP, MGO, MGR, SJAR, sc} from './common';
import {
	AMB, Axes, Bracket, Chip, Curve, DrawPath, Fade, Framed, GREEN, Glyph, Heading, INK, Lattice, MIX, PLUM, PenArrow, PenRing, Plate, PURE, RED, Readout, Rich, SVG, StateStrip,
	Sx, TickMark, ViewFrame, Write, clamp01, gx, gy, kf, plateMap, prog, smooth, tw,
} from './parts';
import type {G, GKind} from './parts';
import {Underline} from '../chem-y11-m1-v01/s1';
import {curveT} from './s1';

// ---------- 6. the limits ----------
const K6 = cues(sc('limits'), {careful: 'But be careful', proof: 'proof of pure', few: 'A few mixtures', press: 'Boiling points also', below: 'below a hundred', match: 'one melting point can', state: 'state the pressure', check: 'they check at least', conclude: 'conclude'});
const GA: G = {x: 470, y: 230, w: 500, h: 220, x0: 0, x1: 1, y0: 0, y1: 400};
const A6: [number, number][] = [[0, 20], [0.35, 327], [0.75, 327], [1, 390]];
export const SceneLimits: React.FC = () => {
	const lm = plateMap(LUMP, 0, 0, 240);
	const lx = 96, ly = 230;
	return (
		<SVG>
			<Heading text="Consistent isn't proof" at={0} />
			<Plate p={LUMP} x={lx} y={ly - 20} h={240} />
			<Sx x={lx} y={500} text="sample A: melts sharply at 327 °C" size={34} color={INK} weight={800} at={-1000} />
			<Chip x={lx} y={536} segs={[{t: 'consistent with pure'}]} at={-1000} size={40} color={PURE} />
			<Chip x={lx + 520} y={536} segs={[{t: 'proof of pure'}]} at={K6.careful + 8} size={40} color={RED} strike={K6.proof} />
			<Write x={lx + 540} y={668} text="not proof" at={K6.proof + 8} size={42} color={RED} />
			{/* sample A's heating curve (from the data scene) */}
			<Axes g={GA} xLabel="time" yLabel="temperature (°C)" yTicks={[0, 200, 400]} size={28} />
			<Curve g={GA} fn={t => curveT(A6, t)} t0={0} upto={1} color={PURE} />
			<Sx x={gx(GA, 0.55)} y={gy(GA, 327) + 44} text="flat at 327 °C" size={32} color={PURE} anchor="middle" weight={800} at={-1000} />
			{/* one value can match more than one substance */}
			<Fade at={K6.match}>
				<line x1={gx(GA, 0.75) + 10} y1={gy(GA, 327)} x2={1010} y2={285} stroke={INK} strokeWidth={3} strokeDasharray="9 7" />
				<line x1={gx(GA, 0.75) + 10} y1={gy(GA, 327)} x2={1010} y2={411} stroke={INK} strokeWidth={3} strokeDasharray="9 7" />
				<rect x={1010} y={240} width={80} height={90} rx={12} fill="#fffdf8" stroke={INK} strokeWidth={4} />
				<rect x={1010} y={366} width={80} height={90} rx={12} fill="#fffdf8" stroke={INK} strokeWidth={4} />
				<Sx x={1050} y={304} text="?" size={56} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={1050} y={430} text="?" size={56} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={1000} y={218} text="two substances?" size={34} color={INK} anchor="end" weight={700} at={-1000} />
			</Fade>
			{/* sample B from the data scene, until the right column is needed */}
			<Fade at={-1000} out={K6.few - 14}>
				<Plate p={CANDLE} x={1420} y={220} h={330} />
				<Sx x={1500} y={600} text="sample B: 60 °C to 80 °C" size={38} color={MIX} anchor="middle" weight={800} at={-1000} />
				<Chip x={1500} y={630} segs={[{t: 'probably a mixture'}]} at={-1000} size={40} color={MIX} anchor="middle" />
			</Fade>
			{/* right column: steady-boiling mixtures, pressure */}
			<Fade at={K6.few}>
				<rect x={1130} y={190} width={694} height={110} rx={16} fill="#fffdf8" stroke={INK} strokeWidth={3} />
				<Sx x={1154} y={236} text="some mixtures boil at one steady" size={34} color={INK} weight={700} at={-1000} />
				<Sx x={1154} y={278} text="temperature (a later video)" size={34} color={INK} weight={700} at={-1000} />
			</Fade>
			<Readout x={1130} y={330} w={694} text="sea level: 100 °C" size={44} color={PURE} frame={PURE} at={K6.below - 20} />
			<g>
				<Fade at={K6.below - 10}>
					<rect x={1130} y={420} width={694} height={124} rx={14} fill="#fffdf8" stroke={PURE} strokeWidth={4} />
					<Sx x={1150} y={470} text="high altitude, lower pressure:" size={42} color={PURE} weight={800} at={-1000} />
					<Sx x={1150} y={526} text="below 100 °C" size={42} color={PURE} weight={800} at={-1000} />
				</Fade>
			</g>
			<Write x={1150} y={612} text="pressure matters" at={K6.below + 10} size={42} color={INK} />
			{/* the rule */}
			<Rich x={96} y={790} segs={[{t: 'state the pressure;'}]} size={52} at={K6.state} />
			<Rich x={96} y={862} segs={[{t: 'check at least two independent properties'}]} size={52} at={K6.check} />
			<Underline x0={96} x1={96 + tw('check at least two independent properties', 52)} y={884} at={K6.check + 20} color={INK} />
			<Write x={1330} y={862} text="two checks" at={K6.check + 26} size={44} color={INK} />
			{void K6.press}{void K6.conclude}
		</SVG>
	);
};

// ---------- 7. two properties: the mystery white solid ----------
const K7 = cues(sc('two-properties'), {white: 'A white solid', dens: 'Its density', table: 'table.', na: 'Sodium chloride melts', d2: ['density of', 1], two: 'Two independent', likely: 'very likely', cert: "That's not certain", much: 'much stronger', num: 'number.'});
const ROWS: [string, string, string][] = [['potassium chloride', '770', '1.98'], ['sodium chloride', '801', '2.16'], ['sodium carbonate', '851', '2.54']];
export const SceneTwoProps: React.FC = () => {
	const f = useCurrentFrame();
	const jm = plateMap(SJAR, 0, 0, 360);
	const TX = 520, TY = 330, CW = [420, 280, 300], RH = 72;
	const cx = (c: number) => TX + CW.slice(0, c).reduce((a, b) => a + b, 0);
	const dimO = 1 - 0.6 * prog(f, K7.d2 + 20, 14);
	return (
		<SVG>
			<Heading text="Two properties: the mystery white solid" at={0} />
			<rect x={96} y={186} width={1728} height={74} rx={14} fill="#eef2fa" stroke={PURE} strokeWidth={3} />
			<Rich x={124} y={236} segs={[{t: 'melts sharply at 801 °C     |     density 2.16 g cm^{−3}     |     dissolves in water', c: PURE}]} size={36} weight={700} />
			<Plate p={SJAR} x={96} y={430} h={360} />
			<Sx x={96 + jm.w / 2} y={846} text="unknown white solid" size={38} color={INK} anchor="middle" hand at={-1000} />
			{/* data table */}
			<g opacity={prog(f, K7.table - 20, 14)}>
				<rect x={TX} y={TY} width={1000} height={RH * 4} rx={10} fill="#fffdf8" stroke={INK} strokeWidth={3} />
				<rect x={TX} y={TY} width={1000} height={RH} fill="#f1ebdf" />
				{[1, 2, 3].map(r => <line key={r} x1={TX} x2={TX + 1000} y1={TY + r * RH} y2={TY + r * RH} stroke={INK} strokeWidth={2} />)}
				{[1, 2].map(c => <line key={c} x1={cx(c)} x2={cx(c)} y1={TY} y2={TY + RH * 4} stroke={INK} strokeWidth={2} />)}
				<Sx x={TX + 20} y={TY + 47} text="substance" size={32} color={INK} weight={800} at={-1000} />
				<Sx x={cx(1) + 20} y={TY + 47} text="melting point (°C)" size={30} color={INK} weight={800} at={-1000} />
				<Rich x={cx(2) + 20} y={TY + 47} segs={[{t: 'density (g cm^{−3})'}]} size={30} weight={800} />
			</g>
			{ROWS.map((r, i) => {
				const y = TY + (i + 1) * RH + 48;
				const o = i === 1 ? 1 : dimO;
				return (
					<g key={i} opacity={o}>
						<Sx x={TX + 20} y={y} text={r[0]} size={34} color={INK} weight={700} at={K7.table - 10 + i * 8} />
						<Sx x={cx(1) + 20} y={y} text={r[1]} size={36} color={INK} weight={800} at={K7.table - 10 + i * 8} />
						<Sx x={cx(2) + 20} y={y} text={r[2]} size={36} color={INK} weight={800} at={K7.table - 10 + i * 8} />
					</g>
				);
			})}
			<rect x={cx(1) + 6} y={TY + 2 * RH + 6} width={CW[1] - 12} height={RH - 12} rx={8} fill={GREEN} opacity={0.18 * prog(f, K7.na, 10)} />
			<rect x={cx(2) + 6} y={TY + 2 * RH + 6} width={CW[2] - 12} height={RH - 12} rx={8} fill={GREEN} opacity={0.18 * prog(f, K7.d2, 10)} />
			<TickMark x={cx(1) + 200} y={TY + 2 * RH + 34} at={K7.na + 6} s={1.2} />
			<TickMark x={cx(2) + 200} y={TY + 2 * RH + 34} at={K7.d2 + 6} s={1.2} />
			<Write x={1540} y={TY + 2 * RH + 50} text="2 matches" at={K7.two} size={44} color={GREEN} />
			<Framed x={520} y={740} segs={[{t: 'very likely NaCl (not certain)', c: GREEN}]} at={K7.likely} size={52} />
			<Chip x={520} y={800} segs={[{t: '801 °C, so it must be NaCl'}]} at={K7.cert} size={38} color={RED} strike={K7.much} />
			<Write x={1160} y={850} text="one number isn't enough" at={K7.much + 8} size={42} color={RED} />
			{void K7.white}{void K7.dens}{void K7.num}
		</SVG>
	);
};

// ---------- 8. sublimation ----------
const K8 = cues(sc('sublimation'), {some: 'Some solids', dry: 'Dry ice is', normal: 'At normal air', straight: 'turns straight', liquid: 'liquid.', called: 'That change is called', isnt: "It isn't melting", sharp: 'still a sharp', parts: 'the particles are', after: 'after.'});
const SV8 = {cx: 800, cy: 470, r: 210};
export const SceneSublimation: React.FC = () => {
	const f = useCurrentFrame();
	const dm = plateMap(DRY, 0, 0, 0);
	void dm;
	const dh = (420 / DRY.box[2]) * DRY.box[3];
	const cols = 8, rows = 4, sp = 44;
	const x0 = SV8.cx - ((cols - 1) * sp) / 2, y0 = SV8.cy + 60;
	// molecules leave the top rows one by one from "turns straight"
	const order = Array.from({length: cols * 2}, (_, k) => k);
	const leaveAt = (k: number) => K8.straight - 40 + k * 22;
	const mols: React.ReactNode[] = [];
	let tracked: [number, number] | null = null, trackedHome: [number, number] | null = null;
	for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
		const k = j < 2 ? order[j * cols + i] : -1;
		const hx = x0 + i * sp + Math.sin(f * 0.5 + i + j * 3) * 1.4, hy = y0 + j * sp + Math.cos(f * 0.45 + i * 2 + j) * 1.4;
		let x = hx, y = hy;
		if (k >= 0 && f > leaveAt(k)) {
			const a = f - leaveAt(k);
			const ang = -Math.PI / 2 + Math.sin(k * 2.3) * 0.9;
			const d = Math.min(a * 2.4, 120 + (k % 5) * 30);
			x = hx + Math.cos(ang) * d + (a > 60 ? Math.sin(a * 0.05 + k) * 30 : 0);
			y = hy + Math.sin(ang) * d - (a > 60 ? 40 + Math.cos(a * 0.04 + k) * 20 : 0);
		}
		if (j === 1 && i === 3) { tracked = [x, y]; trackedHome = [hx, hy]; }
		mols.push(<Glyph key={i + '-' + j} k="CO2" x={x} y={y} u={7.5} rot={(i * 40 + j * 70 + (k >= 0 && f > leaveAt(k) ? f : 0)) % 360} />);
	}
	const tk = 1 * cols + 3;
	const ringAt = K8.parts;
	return (
		<SVG>
			<Heading text="Sublimation: solid straight to gas" at={0} />
			<Plate p={DRY} x={96} y={620} h={dh} />
			<Readout x={96} y={470} w={330} text="about −78 °C" size={50} color={PURE} frame={PURE} anchor="middle" />
			<Sx x={96} y={590} text="normal air pressure" size={36} color={INK} hand at={-1000} />
			<ViewFrame id="v2dry" cx={SV8.cx} cy={SV8.cy} r={SV8.r} src={[330, 700]}>
				{mols}
			</ViewFrame>
			{trackedHome && f >= ringAt ? <circle cx={trackedHome[0]} cy={trackedHome[1]} r={28} fill="none" stroke={PURE} strokeWidth={4} strokeDasharray="6 6" /> : null}
			{tracked && f >= ringAt + 10 && f > leaveAt(tk) ? <circle cx={tracked[0]} cy={tracked[1]} r={28} fill="none" stroke={PURE} strokeWidth={5} /> : null}
			<StateStrip x={1080} y={330} s={0.92} at={-1000} crossAt={K8.liquid} arrowAt={K8.liquid + 16} />
			<Write x={1310} y={460} text="no liquid stage" at={K8.liquid + 8} size={42} color={INK} />
			<Rich x={1080} y={560} segs={[{t: 'sublimation:', c: PURE}]} size={52} at={K8.called} />
			<Rich x={1080} y={624} segs={[{t: 'solid straight to gas'}]} size={52} at={K8.called} />
			<Write x={1080} y={720} text="same molecules: physical" at={ringAt + 14} size={44} color={PURE} />
			{trackedHome && tracked ? <PenArrow a={[1070, 706]} b={[SV8.cx + SV8.r - 6, SV8.cy + 90]} at={ringAt + 20} color={PURE} bend={-0.15} /> : null}
			<Sx x={1080} y={790} text="still a sharp change at one temperature" size={34} color={INK} weight={700} at={K8.sharp} />
			{void K8.some}{void K8.dry}{void K8.isnt}{void K8.after}{void smooth}
		</SVG>
	);
};

// ---------- 9. physical or chemical evidence ----------
const K9 = cues(sc('physical-chemical'), {melt: 'Melting, boiling', parts: 'The particles spread', cool: 'cooling can reverse', chem: 'A chemical change', burn: 'Burn a strip', powder: 'white powder', mgo: 'magnesium oxide', so: 'So a change of state', need: 'You need evidence'});
const IV = {cx: 560, cy: 420, r: 170}, MV = {cx: 1380, cy: 420, r: 170};
export const ScenePhysChem: React.FC = () => {
	const f = useCurrentFrame();
	const m = kf(f, [[K9.parts - 10, 0], [K9.parts + 60, 1], [K9.cool, 1], [K9.cool + 60, 0]]);
	const flare = f >= K9.burn + 10 && f < K9.burn + 60 ? Math.sin(((f - K9.burn - 10) / 50) * Math.PI) : 0;
	const chem = smooth(prog(f, K9.powder, 50));
	const rm = plateMap(MGR, 0, 0, 0); void rm;
	const rh = (300 / MGR.box[2]) * MGR.box[3], ph = (300 / MGO.box[2]) * MGO.box[3];
	return (
		<SVG>
			<Heading text="Physical or chemical evidence?" at={0} />
			{/* ice: lattice loosens to liquid, then refreezes */}
			<Plate p={ICE} x={96} y={600} h={280} />
			<ViewFrame id="v2ice" cx={IV.cx} cy={IV.cy} r={IV.r} src={[260, 700]}>
				<Lattice cx={IV.cx} cy={IV.cy} cols={6} rows={6} sp={44} u={13} kindAt={() => 'H2O'} melt={(i, j) => m * (0.7 + 0.3 * (((i * 3 + j * 5) % 7) / 6))} />
			</ViewFrame>
			<Write x={400} y={650} text="goes back" at={K9.cool + 4} size={42} color={PURE} />
			<PenArrow a={[IV.cx + 120, IV.cy - 150]} b={[IV.cx - 120, IV.cy - 150]} at={K9.cool} color={PURE} bend={-0.35} />
			<Sx x={400} y={720} text="physical: same particles" size={38} color={PURE} weight={800} at={K9.parts} />
			{/* magnesium: ribbon, flare, powder; Mg and O2 become a lattice of ions */}
			<Plate p={MGR} x={900} y={720} h={rh} />
			{flare > 0 ? <g opacity={flare}><circle cx={1050} cy={760} r={90} fill="#fff6c8" opacity={0.85} /><circle cx={1050} cy={760} r={46} fill="#ffffff" /></g> : null}
			<Plate p={MGO} x={1500} y={720} h={ph} at={K9.powder - 20} />
			<PenArrow a={[1220, 790]} b={[1490, 790]} at={K9.powder} color={PLUM} bend={-0.2} />
			<Write x={1250} y={880} text="new substance" at={K9.powder + 6} size={40} color={PLUM} />
			<ViewFrame id="v2mgo" cx={MV.cx} cy={MV.cy} r={MV.r} src={[1650, 760]}>
				<g opacity={1 - chem}>
					<Lattice cx={MV.cx} cy={MV.cy + 60} cols={6} rows={3} sp={40} u={16} kindAt={() => 'Mg'} />
					{[[-90, -80], [10, -110], [100, -70], [-40, -40]].map(([a, b], i) => <Glyph key={i} k="O2" x={MV.cx + a + Math.sin(f * 0.05 + i) * 10} y={MV.cy + b} u={13} rot={i * 50 + f} />)}
				</g>
				<g opacity={chem}>
					<Lattice cx={MV.cx} cy={MV.cy} cols={6} rows={6} sp={44} u={15} kindAt={(i, j) => ((i + j) % 2 ? 'Ox' : 'MgI')} vib={1} />
				</g>
			</ViewFrame>
			<Sx x={1210} y={630} text="chemical: new substance, MgO" size={34} color={PLUM} weight={800} at={K9.mgo} />
			<Sx x={1210} y={672} text="no way back by cooling" size={32} color={INK} weight={700} at={K9.mgo + 10} />
			<Rich x={96} y={930} segs={[{t: 'change of state alone: not evidence of a reaction'}]} size={44} at={K9.so} />
			<Underline x0={96} x1={96 + tw('change of state alone: not evidence of a reaction', 44)} y={946} at={K9.need} color={PLUM} />
			{void K9.melt}{void K9.chem}{void DrawPath}{void clamp01}
		</SVG>
	);
};

// ---------- 10. memory aid ----------
const K10 = cues(sc('memory-aid'), {flat: 'Flat hints pure', pure: 'A pure substance holds', flat2: ['flat', 2], mix: "A mixture's", slopes: 'slopes.', and: 'And because', conf: 'you confirm'});
const GL: G = {x: 200, y: 420, w: 640, h: 380, x0: 0, x1: 1, y0: 0, y1: 120};
const GR2: G = {x: 1100, y: 420, w: 640, h: 380, x0: 0, x1: 1, y0: 0, y1: 120};
const PURE_PTS: [number, number][] = [[0, 20], [0.3, 80], [0.7, 80], [1, 115]];
const MIX_PTS: [number, number][] = [[0, 20], [0.3, 66], [0.7, 82], [1, 115]];
export const SceneMemory: React.FC = () => (
	<SVG>
		<rect x={150} y={180} width={1620} height={140} rx={22} fill="#fffdf8" stroke={PURE} strokeWidth={5} />
		<Sx x={176} y={214} text="memory aid" size={28} color={INK} hand at={-1000} />
		<Rich x={960} y={290} segs={[{t: 'Flat hints pure, ', c: PURE}, {t: 'a slope hints mixture: ', c: MIX}, {t: 'check another property.', c: INK}]} size={56} anchor="middle" hand weight={700} />
		<Axes g={GL} xLabel="time" yLabel="temperature" size={30} />
		<Axes g={GR2} xLabel="time" yLabel="temperature" size={30} />
		<Curve g={GL} fn={t => curveT(PURE_PTS, t)} t0={0} upto={1} color={PURE} width={7} />
		<Curve g={GR2} fn={t => curveT(MIX_PTS, t)} t0={0} upto={1} color={AMB} width={7} />
		<Sx x={GL.x + GL.w / 2} y={GL.y + GL.h + 84} text="pure substance" size={36} color={PURE} anchor="middle" weight={800} at={-1000} />
		<Sx x={GR2.x + GR2.w / 2} y={GR2.y + GR2.h + 84} text="mixture" size={36} color={MIX} anchor="middle" weight={800} at={-1000} />
		<Bracket a={[gx(GL, 0.31), gy(GL, 80) - 16]} b={[gx(GL, 0.69), gy(GL, 80) - 16]} at={K10.flat2 - 20} color={PURE} depth={-18} />
		<PenArrow a={[gx(GR2, 0.3), gy(GR2, 66) - 34]} b={[gx(GR2, 0.7), gy(GR2, 82) - 34]} at={K10.slopes - 20} color={AMB} bend={-0.1} />
		<Chip x={gx(GL, 0.72)} y={GL.y + 200} segs={[{t: '+ density'}]} at={K10.conf} size={38} color={INK} />
		{void K10.flat}{void K10.pure}{void K10.mix}{void K10.and}
	</SVG>
);
void Readout; void MIX; void GKindNoop;
function GKindNoop(_: GKind) { return null; }
