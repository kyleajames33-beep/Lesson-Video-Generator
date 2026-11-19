// Y11 Chem M1 V08 scenes 6 to 10: iron two plus decoded row by row (painted iron lump, crossed sign slip, the charge
// check on the meter), the chlorine-37 prediction, isotopes (the second atom fills from the same builder), one line
// per particle with three small replays, and stability (three carbon nuclei, then one mechanism at a time: repulsion,
// the strong force, neutrons as glue, and the N against Z sketch with lead-208).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown} from '../../kit';
import {cues} from '../../cues';
import {LUMP, hold, sc} from './common';
import {
	AMB, AMB_INK, Atom, Bracket, ChargeMeter, Chip, DrawPath, E_BLUE, E_INK, Fade, Framed, Heading, INK, N_INK, N_SLATE, Nuclide, Nucleus, P_INK, P_RED, Particle, PenArrow, PenRing,
	Plate, PURE, RED, Rich, SVG, Sx, TEAL, TEAL_INK, TaskStrip, TickMark, Write, clamp01, isProton, plateMap, prog, richW, slotXY, smooth,
} from './parts';
import {LiveR, ramp} from './s1';

const GREEN_T = '#2f8a5b';

// ---------- 6. iron two plus ----------
const K6 = cues(sc('iron'), {iron: "Let's try iron", right: 'top right', protons: 'Protons:', six: ['twenty-six', 2], neutrons: 'Neutrons:', thirty: 'thirty.', electrons: 'Electrons:', neutral: 'a neutral iron', twoplus: 'but two plus', lost: 'lost two', four: 'twenty-four.', check: 'Check the charge', matches: 'It matches'});
export const SceneIron: React.FC = () => {
	const f = useCurrentFrame();
	const lm = plateMap(LUMP, 0, 0, 280);
	const r1 = [{t: 'protons = Z = '}], r2 = [{t: 'neutrons = A − Z = 56 − 26 = '}], r3 = [{t: 'electrons = 26 − 2 = '}];
	const RX = 700;
	return (
		<SVG>
			<Heading text="Iron two plus" at={0} />
			<TaskStrip text="find the protons, neutrons and electrons in Fe^{2+} (A = 56, Z = 26)" />
			<Nuclide x={300} y={430} sym="Fe" A={56} Z={26} q="2+" hiZ={K6.six - 20} hiA={K6.thirty - 40} hiQ={K6.twoplus} size={120} />
			<Plate p={LUMP} x={240 - lm.w / 2} y={540} h={280} />
			<Sx x={240} y={860} text="iron" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<rect x={1260} y={268} width={564} height={74} rx={14} fill="#eef2fa" stroke={PURE} strokeWidth={3} />
			<Rich x={1282} y={318} segs={[{t: 'A = 56  |  Z = 26  |  charge 2+', c: PURE}]} size={36} weight={700} />
			<Rich x={RX} y={450} segs={r1} size={52} at={K6.protons} />
			<Framed x={RX + richW(r1, 52)} y={450} segs={[{t: '26', c: GREEN_T}]} at={K6.six} size={52} />
			<Rich x={RX} y={550} segs={r2} size={52} at={K6.neutrons} />
			<Framed x={RX + richW(r2, 52)} y={550} segs={[{t: '30', c: GREEN_T}]} at={K6.thirty} size={52} />
			<Chip x={1260} y={380} segs={[{t: 'electrons = 26 + 2 = 28'}]} at={K6.twoplus} out={K6.four + 10} size={40} color={RED} strike={K6.lost - 6} />
			<Write x={1280} y={480} text="2+ means lost" at={K6.lost} out={K6.four + 10} size={42} color={RED} />
			<Rich x={RX} y={650} segs={r3} size={52} at={K6.four - 24} />
			<Framed x={RX + richW(r3, 52)} y={650} segs={[{t: '24', c: GREEN_T}]} at={K6.four} size={52} />
			<Fade at={K6.check}>
				<ChargeMeter x={RX} y={700} p={26} e={24} w={420} />
			</Fade>
			<TickMark x={RX + 360} y={880} at={K6.matches} s={1.4} color={TEAL} />
			<Write x={RX + 470} y={800} text="checks out" at={K6.matches} size={42} color={TEAL_INK} />
			<Chip x={RX + 470} y={830} segs={[{t: 'electrons = Z − charge'}]} at={K6.matches + 6} size={40} color={INK} />
			{void K6.iron}{void K6.right}{void K6.electrons}{void K6.neutral}
		</SVG>
	);
};

// ---------- 7. prediction ----------
const K7 = cues(sc('prediction'), {here: "Here's another", still: 'still chlorine?', what: "And what's different", think: 'think.'});
export const L7 = {x: 420, y: 650, R: 200}, R7 = {x: 1460, y: 650, R: 200};
export const ScenePrediction: React.FC = () => {
	const h = hold('prediction');
	return (
		<SVG>
			<Heading text="Quick prediction" at={0} />
			<Nuclide x={370} y={330} sym="Cl" A={35} Z={17} size={110} />
			<Nuclide x={1410} y={330} sym="Cl" A={37} Z={17} size={110} />
			<Atom cx={L7.x} cy={L7.y} R={L7.R} p={17} n={18} e={17} r={9} />
			{[0.42, 0.7, 1].map((k, i) => <circle key={i} cx={R7.x} cy={R7.y} r={R7.R * k} fill="none" stroke="rgba(38,35,31,0.45)" strokeWidth={3} />)}
			<circle cx={R7.x} cy={R7.y} r={62} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<Sx x={R7.x} y={R7.y + 16} text="?" size={52} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={L7.x} y={910} text="17 protons   18 neutrons   17 electrons" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={R7.x} y={910} text="? protons   ? neutrons   ? electrons" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Chip x={940} y={400} segs={[{t: 'still chlorine?'}]} at={K7.still} size={44} color={INK} anchor="middle" />
			<Chip x={940} y={520} segs={[{t: "what's different?"}]} at={K7.what} size={44} color={INK} anchor="middle" />
			<Countdown start={h.startFrame} end={h.endFrame} x={940} y={740} r={64} ringFrom={K7.think} />
			{void K7.here}
		</SVG>
	);
};

// ---------- 8. isotopes ----------
const K8 = cues(sc('isotopes'), {yes: 'Yes,', protons: 'seventeen protons', diff: 'The difference', t37: 'Thirty-seven minus', twenty: 'twenty,', two: 'two more', eighteen: 'eighteen.', called: 'are called', isotopes: 'isotopes.', both: 'because both', electrons: 'seventeen electrons', react: 'they react', chem: 'Chemistry is', it: 'change it'});
export const SceneIsotopes: React.FC = () => {
	const f = useCurrentFrame();
	const p2 = ramp(f, K8.protons - 10, K8.protons + 20, 0, 17);
	const n2 = ramp(f, K8.t37, K8.twenty, 0, 20);
	const e2 = ramp(f, K8.electrons, K8.electrons + 40, 0, 17);
	const glow = prog(f, K8.it - 20, 10);
	const P = Math.floor(p2 + 1e-6), N = Math.floor(n2 + 1e-6), E = Math.floor(e2 + 1e-6);
	const extra = [18, 19].map(k => {
		// slots of the 19th and 20th neutrons in the second nucleus
		let c = -1;
		for (let i = 0; i < 37; i++) if (!isProton(i, 17, 37)) { c++; if (c === k) return slotXY(R7.x, R7.y, i, 9); }
		return slotXY(R7.x, R7.y, 0, 9);
	});
	return (
		<SVG>
			<Heading text="Isotopes" at={0} />
			<Nuclide x={370} y={330} sym="Cl" A={35} Z={17} size={110} hiZ={K8.protons} />
			<Nuclide x={1410} y={330} sym="Cl" A={37} Z={17} size={110} hiZ={K8.protons} />
			<Atom cx={L7.x} cy={L7.y} R={L7.R} p={17} n={18} e={17} r={9} ringGlow={glow} />
			<Atom cx={R7.x} cy={R7.y} R={R7.R} p={p2} n={n2} e={e2} r={9} ringGlow={glow} pulseN={f >= K8.two ? 1 - prog(f, K8.called, 20) : 0} />
			<Sx x={L7.x} y={910} text="17 protons   18 neutrons   17 electrons" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={R7.x} y={910} text={`${P} protons   ${N} neutrons   ${E} electrons`} size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Framed x={940} y={290} segs={[{t: 'still chlorine', c: GREEN_T}]} at={K8.yes} size={44} anchor="middle" />
			<Rich x={940} y={570} segs={[{t: '37 − 17 = 20'}]} size={52} anchor="middle" at={K8.t37} />
			{extra.map(([x, y], i) => <PenRing key={i} cx={x} cy={y} rx={16} ry={16} at={K8.two + i * 6} out={K8.called} color={N_INK} seed={i + 2} />)}
			<Write x={1480} y={420} text="+2 neutrons" at={K8.two} size={42} color={N_INK} />
			<Bracket a={[420, 215]} b={[1460, 215]} at={K8.isotopes - 10} color={INK} depth={-22} />
			<Rich x={940} y={400} segs={[{t: 'isotopes:'}]} size={44} anchor="middle" at={K8.isotopes} />
			<Rich x={940} y={452} segs={[{t: 'same Z, different neutrons'}]} size={44} anchor="middle" at={K8.isotopes} />
			<Write x={800} y={700} text="same electrons," at={K8.react} size={42} color={E_INK} />
			<Write x={800} y={750} text="same chemistry" at={K8.react + 12} size={42} color={E_INK} />
			{void K8.diff}{void K8.eighteen}{void K8.called}{void K8.both}{void K8.chem}{void E_BLUE}
		</SVG>
	);
};

// ---------- 9. one line per particle ----------
const K9 = cues(sc('memory-line'), {hold: 'hold onto', pe: 'Protons pick', ni: 'Neutrons pick', ec: 'Electrons pick', cp: 'Change the protons', cn: 'Change the neutrons', ce: 'Change the electrons', ion: 'an ion'});
const COLS = [{x: 360, k: 'p' as const, c: P_INK, t: 'pick the element'}, {x: 960, k: 'n' as const, c: N_INK, t: 'pick the isotope'}, {x: 1560, k: 'e' as const, c: E_INK, t: 'pick the charge'}];
export const SceneMemoryLine: React.FC = () => {
	const f = useCurrentFrame();
	const ats = [K9.pe, K9.ni, K9.ec];
	const reps = [K9.cp, K9.cn, K9.ce];
	const run = (i: number) => smooth(prog(f, reps[i] + 10, 20));
	return (
		<SVG>
			<Heading text="One line per particle" at={0} />
			{COLS.map((c, i) => (
				<g key={c.k}>
					<Particle kind={c.k} x={c.x - 150} y={290} r={60} />
					<Rich x={c.x - 70} y={306} segs={[{t: ['protons', 'neutrons', 'electrons'][i], c: c.c}]} size={44} />
					<Rich x={c.x - 70} y={372} segs={[{t: c.t, c: c.c}]} size={44} at={ats[i]} />
				</g>
			))}
			<rect x={110} y={420} width={1700} height={150} rx={22} fill="#fffdf8" stroke={PURE} strokeWidth={5} />
			<Sx x={140} y={460} text="memory aid" size={30} color={INK} hand at={-1000} />
			<Rich x={150} y={530} segs={[{t: 'Protons pick the element, ', c: P_INK}, {t: 'neutrons pick the isotope, ', c: N_INK}, {t: 'electrons pick the charge.', c: E_INK}]} size={46} hand weight={700} at={K9.pe} />
			{/* three replays on the builder */}
			{[0, 1, 2].map(i => {
				const x = COLS[i].x, u = run(i);
				const before = [{A: 35, Z: 17, s: 'Cl', q: ''}, {A: 35, Z: 17, s: 'Cl', q: ''}, {A: 35, Z: 17, s: 'Cl', q: ''}][i];
				const after = [{A: 36, Z: 18, s: 'Ar', q: ''}, {A: 37, Z: 17, s: 'Cl', q: ''}, {A: 35, Z: 17, s: 'Cl', q: '−'}][i];
				const cur = u > 0.5 ? after : before;
				const lab = [`protons ${u > 0.5 ? 18 : 17}`, `neutrons ${u > 0.5 ? 20 : 18}`, `electrons ${u > 0.5 ? 18 : 17}`][i];
				return (
					<g key={i}>
						<rect x={x - 240} y={620} width={480} height={300} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
						<Nuclide x={x - 70} y={760} sym={cur.s} A={cur.A} Z={cur.Z} q={cur.q || undefined} size={96} />
						<Nucleus cx={x + 140} cy={730} p={u > 0.5 && i === 0 ? 18 : 17} n={u > 0.5 && i === 1 ? 20 : 18} r={6} />
						<Sx x={x} y={880} text={lab} size={40} color={COLS[i].c} anchor="middle" weight={800} at={-1000} />
						<PenRing cx={x} cy={866} rx={170} ry={40} at={reps[i] + 24} color={COLS[i].c} seed={i + 3} />
					</g>
				);
			})}
			{void K9.hold}{void K9.ion}{void P_RED}{void N_SLATE}
		</SVG>
	);
};

// ---------- 10. stable and unstable isotopes ----------
const K10 = cues(sc('stability'), {c12: 'Carbon-twelve and', c14: 'but carbon-fourteen', radiation: 'radiation.', why: 'Why?', repel: 'repel each other', strong: 'strong nuclear force', together: 'together.', nadd: 'Neutrons add', small: 'Small nuclei', heavy: 'while heavy ones', lead: 'like lead-two-hundred-and-eight', t126: 'twenty-six', toomany: 'With too many', what: 'What it gives out', video: 'later video'});
/** N against Z sketch geometry. */
const NZ = {x: 760, y: 880, w: 760, h: 520, zMax: 90, nMax: 150};
const nzX = (z: number) => NZ.x + (z / NZ.zMax) * NZ.w, nzY = (n: number) => NZ.y - (n / NZ.nMax) * NZ.h;
const band = (z: number) => (z <= 20 ? z : z + 0.01145 * (z - 20) * (z - 20));
export const SceneStability: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, K10.why, 22));
	const bigIn = prog(f, K10.why + 10, 16) * (1 - prog(f, K10.small, 16));
	const sk = prog(f, K10.small + 10, 16);
	const flick = f >= K10.radiation && f < K10.radiation + 40 ? 1 + 0.08 * Math.sin(f * 2.2) : 1;
	const cs = [{A: 12, n: 6, t: 'stable'}, {A: 13, n: 7, t: 'stable'}, {A: 14, n: 8, t: 'radioactive'}];
	// carbon-12 enlarged
	const BX = 500, BY = 620, br = 40;
	const pts = Array.from({length: 12}, (_, i) => ({xy: slotXY(BX, BY, i, br), p: isProton(i, 6, 12)}));
	const prots = pts.filter(q => q.p).map(q => q.xy);
	const curve: string[] = [];
	for (let z = 0; z <= 88; z += 2) curve.push(`${nzX(z).toFixed(1)},${nzY(band(z)).toFixed(1)}`);
	const drawn = clamp01((f - K10.small - 10) / 80);
	return (
		<SVG>
			<Heading text="Stable and unstable isotopes" at={0} />
			{/* the three carbon nuclei: a full row, then a compact row at the top right */}
			{cs.map((c, i) => {
				const x = (1 - sh) * (420 + i * 540) + sh * (1080 + i * 250), y = (1 - sh) * 540 + sh * 250;
				const r = (1 - sh) * 34 + sh * 9;
				const isC14 = i === 2;
				return (
					<g key={i}>
						<g transform={isC14 ? `translate(${x},${y}) scale(${flick}) translate(${-x},${-y})` : undefined}><Nucleus cx={x} cy={y} p={6} n={c.n} r={r} /></g>
						<Nuclide x={x - 90 * (1 - sh) - 40 * sh} y={y - 170 * (1 - sh) - 52 * sh} sym="C" A={c.A} Z={6} size={(1 - sh) * 96 + sh * 40} numSize={Math.round((1 - sh) * 42 + sh * 26)} />
						<Sx x={x} y={y + (1 - sh) * 190 + sh * 72} text={c.t} size={(1 - sh) * 44 + sh * 30} color={isC14 ? RED : INK} anchor="middle" weight={800} at={-1000} />
						<Sx x={x} y={y + 250} text={`6 protons, ${c.n} neutrons`} size={36} color={INK} anchor="middle" weight={800} at={-1000} opacity={1 - sh} />
						{isC14 && f >= K10.radiation ? <g opacity={1 - prog(f, K10.radiation + 30, 12)}>{[0, 1, 2, 3, 4, 5].map(k => { const a = k * 1.047, d = 60 + (f - K10.radiation) * 4; return <line key={k} x1={x + Math.cos(a) * 80} y1={y + Math.sin(a) * 80} x2={x + Math.cos(a) * (80 + d * 0.4)} y2={y + Math.sin(a) * (80 + d * 0.4)} stroke={AMB} strokeWidth={5} strokeLinecap="round" />; })}</g> : null}
					</g>
				);
			})}
			{/* one mechanism at a time: the enlarged carbon-12 nucleus */}
			<g opacity={bigIn}>
				<Nucleus cx={BX} cy={BY} p={6} n={6} r={br} pulseN={f >= K10.nadd ? 1 : 0} />
				{f >= K10.repel ? prots.slice(0, 3).map(([x, y], i) => { const [x2, y2] = prots[(i + 1) % prots.length]; const mx = (x + x2) / 2, my = (y + y2) / 2; const dx = (x2 - x) * 0.18, dy = (y2 - y) * 0.18; return <g key={i} opacity={prog(f, K10.repel + i * 6, 8)}><path d={`M${mx - dx * 0.3},${my - dy * 0.3} L${mx - dx * 1.6},${my - dy * 1.6} M${mx + dx * 0.3},${my + dy * 0.3} L${mx + dx * 1.6},${my + dy * 1.6}`} stroke={RED} strokeWidth={6} strokeLinecap="round" /></g>; }) : null}
				{f >= K10.strong ? <circle cx={BX} cy={BY} r={170} fill="none" stroke={INK} strokeWidth={5} strokeDasharray="14 9" opacity={prog(f, K10.strong, 12)} /> : null}
				<Write x={760} y={500} text="push apart" at={K10.repel} size={42} color={RED} />
				<Write x={760} y={620} text="strong force: holds" at={K10.together - 30} size={42} color={INK} />
				<Write x={760} y={740} text="glue, no push" at={K10.nadd} size={42} color={N_INK} />
				<PenRing cx={pts.find(q => !q.p)!.xy[0]} cy={pts.find(q => !q.p)!.xy[1]} rx={52} ry={52} at={K10.nadd + 6} color={N_INK} seed={3} />
			</g>
			{/* the N against Z sketch */}
			<g opacity={sk}>
				<Sx x={110} y={420} text="protons repel; strong force holds;" size={34} color={INK} weight={800} at={-1000} />
				<Sx x={110} y={464} text="neutrons add attraction" size={34} color={INK} weight={800} at={-1000} />
				<path d={`M${NZ.x},${NZ.y - NZ.h - 10} L${NZ.x},${NZ.y} L${NZ.x + NZ.w + 10},${NZ.y}`} fill="none" stroke={INK} strokeWidth={4} />
				<Sx x={NZ.x + NZ.w} y={NZ.y + 44} text="protons (Z)" size={30} color={INK} anchor="end" weight={700} at={-1000} />
				<Sx x={NZ.x + 14} y={NZ.y - NZ.h - 18} text="neutrons (N)" size={30} color={INK} weight={700} at={-1000} />
				<line x1={nzX(0)} y1={nzY(0)} x2={nzX(90)} y2={nzY(90)} stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
				<Sx x={nzX(88)} y={nzY(88) + 40} text="N = Z" size={30} color={INK} anchor="end" weight={800} at={-1000} />
				{drawn > 0 ? <polyline points={curve.slice(0, Math.max(2, Math.round(curve.length * drawn))).join(' ')} fill="none" stroke={AMB} strokeWidth={10} strokeLinecap="round" opacity={0.85} /> : null}
				<Sx x={nzX(30)} y={nzY(band(30)) - 40} text="band of stability" size={34} color={AMB_INK} weight={800} at={K10.heavy + 30} />
				<PenArrow a={[nzX(70), nzY(70) - 6]} b={[nzX(70), nzY(band(70)) + 14]} at={K10.heavy + 30} color={AMB_INK} bend={0} />
				<Write x={nzX(71) + 10} y={nzY(85)} text="extra neutrons" at={K10.heavy + 34} size={40} color={AMB_INK} />
				<circle cx={nzX(82)} cy={nzY(126)} r={11} fill={P_RED} stroke={INK} strokeWidth={2} opacity={prog(f, K10.t126, 8)} />
				<Sx x={nzX(80)} y={nzY(126) - 24} text="lead-208: 82 protons, 126 neutrons" size={34} color={INK} anchor="end" weight={800} at={K10.t126} />
			</g>
			<Chip x={1824} y={900} segs={[{t: 'decay types and equations: later'}]} at={K10.what} size={34} color={INK} anchor="end" />
			{void K10.c12}{void K10.c14}{void K10.lead}{void K10.toomany}{void K10.video}{void DrawPath}{void E_BLUE}{void TEAL}{void Plate}
		</SVG>
	);
};
