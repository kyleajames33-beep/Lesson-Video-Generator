// SpectroDiagram — spectroscopy instruments on stone plinths (Chem Y12 M8 L4).
//
// mode "uvvis" (scene `concept`): lamp → monochromator (one wavelength) →
//   cuvette of path length l → detector. When the absorbing particles in the
//   cuvette increase, the transmitted beam thins and the detector's absorbance
//   bar rises (qualitative: no invented numbers). Below, the Beer–Lambert law
//   A = εcl is built live with each symbol defined; the path length l is the
//   amber item (the classic slip is dropping it), then c = A ÷ (εl).
// mode "aas" (scene `concept-aas`): the sample solution is fed into a flame
//   (or graphite furnace) and atomised: metal ions (M²⁺) become free,
//   ground-state atoms (M). A hollow cathode lamp shines the element's own
//   wavelength through the flame; the atoms absorb some, the detector signal
//   drops, and that drop gives concentration against calibration standards.
//   Amber: "atoms, not ions".
//
// Beats (frames after `delay`):
//   uvvis: [beam through sample, more particles, A=εcl, A defined, ε defined,
//           c defined, l defined, rearranged, don't-drop-l]
//   aas:   [sample fed in, atomised, lamp on, atoms absorb, signal → conc.,
//           atoms not ions]

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Ball, Beaker, GlossDefs, Mark, clamp, ease, ramp} from './shared';
import {Burner, BurnerDefs, Flame, swim} from './lab-parts';

export type SpectroProps = {
	delay?: number;
	mode?: 'uvvis' | 'aas';
	beats?: number[];
	/** AAS only: symbols for the metal ion in solution and its free atom. */
	ion?: string;
	atom?: string;
};

const W = 760;
const DEFAULT_BEATS = {
	uvvis: [30, 190, 305, 365, 425, 537, 580, 740, 820],
	aas: [210, 300, 410, 612, 690, 830],
};

/** Step caption: the latest entry whose frame has passed. */
const stepCaption = (frame: number, steps: [number, string][]) => {
	let k = -1;
	steps.forEach(([t], i) => {
		if (frame >= t) k = i;
	});
	return {text: k >= 0 ? steps[k][1] : '', op: k >= 0 ? ramp(frame, steps[k][0], 12) : 0};
};

export const SpectroDiagram = ({delay = 62, mode = 'uvvis', beats, ion = 'M²⁺', atom = 'M'}: SpectroProps) => {
	const frame = useCurrentFrame() - delay;
	const b = beats ?? DEFAULT_BEATS[mode];
	return mode === 'aas' ? <Aas frame={frame} b={b} ion={ion} atom={atom} /> : <UvVis frame={frame} b={b} />;
};

// ─────────────────────────────────────────────────────────────────────
const UvVis = ({frame, b}: {frame: number; b: number[]}) => {
	const ID = 'c12m8spectrouv';
	const [tBeam, tMore, tLaw, tA, tE, tC, tL, tRe, tSlip] = b;
	const pulse = idlePulse(frame);
	const PY = 214;
	const BY = 150; // beam height
	const LAMP = 92, MONO = 262, CUV = 440, DET = 650;
	const BEAM = '#e8603c';

	const beam1 = ramp(frame, tBeam - 20, 20); // lamp → mono
	const beam2 = ramp(frame, tBeam, 18); // mono → cuvette
	const beam3 = ramp(frame, tBeam + 18, 18); // cuvette → detector
	const more = ease(interpolate(frame, [tMore, tMore + 50], [0, 1], clamp));
	const nParticles = Math.round(4 + 10 * more);
	const transmit = 0.85 - 0.55 * more; // qualitative
	const absBar = 0.18 + 0.62 * more;

	const cx0 = CUV - 26, cx1 = CUV + 26, cyTop = 106, cyBot = 206;

	const cap = stepCaption(frame, [
		[tBeam - 20, 'One wavelength passes through the sample'],
		[tMore, 'More absorbing particles: less light out, A rises'],
	]);

	// Equation glyphs
	const g = (t: number) => ramp(frame, t, 10);
	const lOn = ramp(frame, tL, 12);
	const rows: {sym: string; text: string; t: number; key?: boolean}[] = [
		{sym: 'A', text: 'absorbance (no units)', t: tA},
		{sym: 'ε', text: 'molar absorptivity', t: tE},
		{sym: 'c', text: 'concentration', t: tC},
		{sym: 'l', text: 'path length, in cm', t: tL, key: true},
	];

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="UV-Vis: a lamp and monochromator send one wavelength through a cuvette of path length l to a detector; more absorbing particles mean less light transmitted and higher absorbance. Beer–Lambert law A = εcl, rearranged c = A ÷ (εl)." style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{p: '#2f6fc9', bulb: '#fff6d8'}} />
			<text x={W / 2} y={34} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={700} opacity={cap.op}>{cap.text}</text>

			{/* plinths + instruments */}
			<DioramaPlinth id={ID} cx={LAMP} cy={PY} rx={72}>
				<rect x={LAMP - 5} y={176} width={10} height={PY - 176} fill="#7c8288" />
				<ellipse cx={LAMP} cy={PY} rx={22} ry={6} fill="#5d6268" />
				<circle cx={LAMP} cy={BY} r={40} fill="#fff3c4" opacity={0.35 + 0.1 * Math.sin(frame / 6)} />
				<circle cx={LAMP} cy={BY} r={26} fill={`url(#${ID}-g-bulb)`} stroke="rgba(70,90,110,0.5)" strokeWidth={2} />
				<path d={`M ${LAMP - 8} ${BY + 6} q 4 -14 8 0 q 4 -14 8 0`} fill="none" stroke="#e0a02a" strokeWidth={2} />
			</DioramaPlinth>
			<DioramaPlinth id={ID} cx={MONO} cy={PY} rx={72}>
				<rect x={MONO - 50} y={106} width={100} height={96} rx={10} fill="#3d4650" stroke="#2a3138" strokeWidth={2} />
				<path d={`M ${MONO - 18} ${BY + 26} L ${MONO + 18} ${BY + 26} L ${MONO} ${BY - 26} Z`} fill="rgba(200,230,255,0.8)" stroke="#dfeaf5" strokeWidth={1.5} />
				{/* spread spectrum inside, one colour exits through the slit */}
				{['#e84a3c', '#f2a33a', '#f2df3a', '#4fbf4a', '#3f6fd8', '#7a4fd6'].map((c, i) => (
					<line key={c} x1={MONO + 6} y1={BY} x2={MONO + 44} y2={BY - 16 + i * 7} stroke={c} strokeWidth={2.2} opacity={beam1} />
				))}
				<rect x={MONO + 46} y={BY - 18} width={4} height={36} fill="#2a3138" />
			</DioramaPlinth>
			<DioramaPlinth id={ID} cx={CUV} cy={PY} rx={72}>
				{/* cuvette */}
				<rect x={cx0} y={cyTop + 20 - 20} width={cx1 - cx0} height={cyBot - cyTop} fill={`rgba(47,111,201,${0.12 + 0.3 * more})`} />
				{Array.from({length: 14}, (_, i) => {
					const p = swim(i + 40, frame + 200, cx0 + 8, cx1 - 8, cyTop + 26, cyBot - 8, 1.4);
					const on = i < nParticles ? 1 : 0;
					return <Ball key={i} id={ID} name="p" color="#2f6fc9" x={p.x} y={p.y} r={5.5} opacity={on} />;
				})}
				<rect x={cx0} y={cyTop} width={cx1 - cx0} height={cyBot - cyTop} fill="none" stroke="rgba(70,90,110,0.6)" strokeWidth={3} rx={3} />
				<rect x={cx0 + 5} y={cyTop + 6} width={5} height={cyBot - cyTop - 14} fill="#ffffff" opacity={0.5} />
			</DioramaPlinth>
			<DioramaPlinth id={ID} cx={DET} cy={PY} rx={72}>
				<rect x={DET - 46} y={108} width={92} height={96} rx={10} fill="#3d4650" stroke="#2a3138" strokeWidth={2} />
				<rect x={DET - 46} y={BY - 10} width={6} height={20} fill="#1c2227" />
				<rect x={DET - 22} y={120} width={52} height={72} rx={4} fill="#dfe9e4" />
				<rect x={DET - 4} y={186 - 60 * absBar} width={16} height={60 * absBar} fill={TOK.chem2} opacity={beam3} />
				<text x={DET - 14} y={140} textAnchor="middle" fill="#2a3138" fontSize={15} fontWeight={800}>A</text>
			</DioramaPlinth>

			{/* beams */}
			<g opacity={beam1}>
				{['#e84a3c', '#4fbf4a', '#3f6fd8'].map((c, i) => (
					<line key={c} x1={LAMP + 28} y1={BY - 4 + i * 4} x2={MONO - 50} y2={BY - 4 + i * 4} stroke={c} strokeWidth={2.4} />
				))}
			</g>
			<line x1={MONO + 50} y1={BY} x2={MONO + 50 + (cx0 - MONO - 50) * beam2} y2={BY} stroke={BEAM} strokeWidth={9} strokeLinecap="round" opacity={0.9} />
			<line x1={cx0} y1={BY} x2={cx1} y2={BY} stroke={BEAM} strokeWidth={9 * (0.5 + 0.5 * transmit)} opacity={beam2 * 0.55} />
			<line x1={cx1} y1={BY} x2={cx1 + (DET - 46 - cx1) * beam3} y2={BY} stroke={BEAM} strokeWidth={9 * transmit} strokeLinecap="round" opacity={0.25 + 0.7 * transmit} />

			{/* path length l across the cuvette */}
			<g opacity={lOn}>
				<line x1={cx0} y1={92} x2={cx1} y2={92} stroke={TOK.amber} strokeWidth={3} />
				<line x1={cx0} y1={84} x2={cx0} y2={100} stroke={TOK.amber} strokeWidth={3} />
				<line x1={cx1} y1={84} x2={cx1} y2={100} stroke={TOK.amber} strokeWidth={3} />
				<text x={CUV} y={78} textAnchor="middle" fill={TOK.amberInk} fontSize={26} fontWeight={800}>l</text>
			</g>

			{/* instrument labels */}
			{[
				[LAMP, 'lamp', ''],
				[MONO, 'monochromator', 'selects one λ'],
				[CUV, 'sample', 'in a cuvette'],
				[DET, 'detector', ''],
			].map(([x, t, s]) => (
				<g key={t as string} opacity={ramp(frame, 0, 14)}>
					<text x={x as number} y={274} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{t}</text>
					{s && <text x={x as number} y={294} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{s}</text>}
				</g>
			))}

			{/* Beer–Lambert, built live */}
			<g>
				<text x={60} y={346} fill={TOK.inkDim} fontSize={16} fontWeight={800} letterSpacing="0.08em" opacity={g(tLaw)}>BEER–LAMBERT LAW</text>
				<text x={80} y={416} textAnchor="middle" fill={TOK.ink} fontSize={60} fontWeight={800} opacity={g(tLaw)}>A</text>
				<text x={134} y={416} textAnchor="middle" fill={TOK.ink} fontSize={60} fontWeight={800} opacity={g(tLaw)}>=</text>
				<text x={184} y={416} textAnchor="middle" fill={TOK.ink} fontSize={60} fontWeight={800} opacity={g(tLaw + 16)}>ε</text>
				<text x={224} y={416} textAnchor="middle" fill={TOK.ink} fontSize={60} fontWeight={800} opacity={g(tLaw + 26)}>c</text>
				<text x={258} y={416} textAnchor="middle" fill={lOn > 0.5 ? TOK.amberInk : TOK.ink} fontSize={60} fontWeight={800} opacity={g(tLaw + 36)}>l</text>
				<rect x={240} y={424} width={36} height={5} rx={2.5} fill={TOK.amber} opacity={lOn * (0.6 + 0.4 * pulse)} />
			</g>
			{rows.map((r, i) => (
				<g key={r.sym} opacity={ramp(frame, r.t, 12)}>
					<text x={346} y={350 + i * 38} textAnchor="middle" fill={r.key ? TOK.amberInk : TOK.ink} fontSize={25} fontWeight={800}>{r.sym}</text>
					<text x={374} y={350 + i * 38} fill={r.key ? TOK.amberInk : TOK.ink} fontSize={20} fontWeight={r.key ? 800 : 700}>{r.text}</text>
				</g>
			))}
			{/* rearranged + slip */}
			<g opacity={ramp(frame, tRe, 14)}>
				<text x={60} y={500} fill={TOK.ink} fontSize={32} fontWeight={800}>
					c = A ÷ (ε<tspan fill={TOK.amberInk}>l</tspan>)
				</text>
			</g>
			<g opacity={ramp(frame, tSlip, 14)}>
				<Mark x={384} y={490} ok={false} size={15} />
				<text x={410} y={499} fill={TOK.inkDim} fontSize={24} fontWeight={800}>A = εc</text>
				<line x1={406} y1={491} x2={494} y2={491} stroke="#c0392b" strokeWidth={3} />
				<text x={510} y={498} fill={TOK.inkDim} fontSize={18} fontWeight={700}>don’t drop the <tspan fill={TOK.amberInk} fontWeight={800}>l</tspan></text>
			</g>
		</svg>
	);
};

// ─────────────────────────────────────────────────────────────────────
const Aas = ({frame, b, ion, atom}: {frame: number; b: number[]; ion: string; atom: string}) => {
	const ID = 'c12m8spectroaas';
	const [tFeed, tAtom, tLamp, tAbs, tSignal, tKey] = b;
	const pulse = idlePulse(frame);
	const PY = 252;
	const BY = 150;
	const LAMP = 100, FL = 380, DET = 660;
	const BEAM = '#7a4fd6';
	const mouthY = PY + 2 - 62;

	const lamp = ramp(frame, tLamp, 16);
	const beamIn = ease(ramp(frame, tLamp + 6, 24));
	const absorb = ease(interpolate(frame, [tAbs, tAbs + 30], [0, 1], clamp));
	const out = 1 - 0.55 * absorb; // transmitted fraction (qualitative)
	const feed = ramp(frame, tFeed, 16);
	const atomised = ramp(frame, tAtom, 18);
	const keyIn = ramp(frame, tKey, 16);

	const cap = stepCaption(frame, [
		[-40, 'Each element absorbs its own wavelengths'],
		[tFeed, 'The sample is fed into a flame'],
		[tAtom, 'Atomised: free, ground-state atoms'],
		[tLamp, 'Lamp shines that element’s exact wavelength'],
		[tAbs, 'The atoms absorb some: the signal drops'],
		[tSignal, 'Signal drop → concentration, via standards'],
		[tKey, 'AAS does not detect ions in solution'],
	]);

	// Sample tube path (beaker → burner) and droplets moving along it
	const tube = 'M 176 396 L 176 338 Q 176 322 192 322 L 332 322 Q 348 322 348 306 L 348 262 L 368 262';
	const tubePts: [number, number][] = [[176, 396], [176, 330], [190, 322], [334, 322], [348, 308], [348, 262], [368, 262]];
	const along = (u: number) => {
		const seg = tubePts.length - 1;
		const f = Math.min(seg - 1e-6, Math.max(0, u * seg));
		const k = Math.floor(f), t = f - k;
		return {x: tubePts[k][0] + (tubePts[k + 1][0] - tubePts[k][0]) * t, y: tubePts[k][1] + (tubePts[k + 1][1] - tubePts[k][1]) * t};
	};

	// Atoms in the flame: appear once atomised, jostle.
	const atoms = Array.from({length: 7}, (_, i) => {
		const p = swim(i + 70, frame + 300, FL - 34, FL + 34, 84, mouthY - 30, 1.3);
		return p;
	});
	const ions = Array.from({length: 5}, (_, i) => swim(i + 90, frame + 100, 120, 200, 380, 420, 0.8));

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Atomic absorption spectroscopy: the sample solution is atomised in a flame into free ground-state atoms; a hollow cathode lamp shines the element's wavelength through the flame; the atoms absorb some light and the drop in signal gives the concentration against calibration standards. AAS measures atoms, not ions." style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<BurnerDefs id={ID} />
			<GlossDefs id={ID} colors={{ion: '#6a7fa0', atom: '#9aa3ad'}} />
			<text x={W / 2} y={34} textAnchor="middle" fill={TOK.inkDim} fontSize={21} fontWeight={800} opacity={cap.op}>{cap.text}</text>

			{/* hollow cathode lamp */}
			<DioramaPlinth id={ID} cx={LAMP} cy={PY} rx={74}>
				<rect x={LAMP - 5} y={176} width={10} height={PY - 176} fill="#7c8288" />
				<ellipse cx={LAMP} cy={PY} rx={22} ry={6} fill="#5d6268" />
				<rect x={LAMP - 66} y={BY - 26} width={40} height={52} rx={6} fill="#4a525b" />
				<rect x={LAMP - 28} y={BY - 24} width={98} height={48} rx={22} fill="rgba(225,235,245,0.6)" stroke="rgba(70,90,110,0.6)" strokeWidth={2} />
				<path d={`M ${LAMP + 14} ${BY - 12} L ${LAMP + 34} ${BY - 12} L ${LAMP + 34} ${BY + 12} L ${LAMP + 14} ${BY + 12}`} fill="none" stroke="#6d747b" strokeWidth={4} />
				<ellipse cx={LAMP + 26} cy={BY} rx={10} ry={9} fill={BEAM} opacity={0.75 * lamp * (0.8 + 0.2 * Math.sin(frame / 5))} />
				<circle cx={LAMP + 26} cy={BY} r={22} fill={BEAM} opacity={0.18 * lamp} />
			</DioramaPlinth>

			{/* flame atomiser */}
			<DioramaPlinth id={ID} cx={FL} cy={PY} rx={84}>
				<Burner id={ID} cx={FL} baseY={PY + 2} barrelH={62} scale={1.1} />
				<Flame id={ID} cx={FL} baseY={mouthY} h={150} w={96} color="#f0b24a" mix={0.22 + 0.2 * feed} frame={frame} seed={3} mouth={22} />
				{atoms.map((p, i) => (
					<Ball key={i} id={ID} name="atom" color="#9aa3ad" x={p.x} y={p.y} r={11} opacity={atomised} />
				))}
			</DioramaPlinth>

			{/* detector */}
			<DioramaPlinth id={ID} cx={DET} cy={PY} rx={74}>
				<rect x={DET - 5} y={200} width={10} height={PY - 200} fill="#7c8288" />
				<ellipse cx={DET} cy={PY} rx={22} ry={6} fill="#5d6268" />
				<rect x={DET - 46} y={108} width={92} height={96} rx={10} fill="#3d4650" stroke="#2a3138" strokeWidth={2} />
				<rect x={DET - 46} y={BY - 10} width={6} height={20} fill="#1c2227" />
				<rect x={DET - 22} y={118} width={52} height={76} rx={4} fill="#dfe9e4" />
				<rect x={DET - 4} y={188 - 58 * out * beamIn} width={16} height={58 * out * beamIn} fill={TOK.chem2} />
				{absorb > 0 && <line x1={DET - 10} y1={130} x2={DET + 18} y2={130} stroke={TOK.inkDim} strokeWidth={1.5} strokeDasharray="3 3" opacity={absorb} />}
			</DioramaPlinth>

			{/* beam: lamp → flame (full), flame → detector (reduced once atoms absorb) */}
			<line x1={LAMP + 70} y1={BY} x2={LAMP + 70 + (FL - 48 - LAMP - 70) * beamIn} y2={BY} stroke={BEAM} strokeWidth={9} strokeLinecap="round" opacity={0.85} />
			<line x1={FL - 48} y1={BY} x2={FL + 48} y2={BY} stroke={BEAM} strokeWidth={9 * (1 - 0.3 * absorb)} opacity={beamIn * 0.45} />
			<line x1={FL + 48} y1={BY} x2={FL + 48 + (DET - 46 - FL - 48) * ramp(frame, tLamp + 26, 18)} y2={BY} stroke={BEAM} strokeWidth={9 * out} strokeLinecap="round" opacity={0.3 + 0.6 * out} />
			<text x={(LAMP + 70 + FL - 48) / 2} y={BY - 16} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={beamIn}>element’s own λ</text>

			{/* sample solution + feed tube */}
			<DioramaPlinth id={ID} cx={160} cy={448} rx={92}>
				<Beaker cx={160} baseY={448} w={116} h={96} level={0.72} liquid="rgba(150,190,225,0.35)">
					{ions.map((p, i) => (
						<Ball key={i} id={ID} name="ion" color="#6a7fa0" x={p.x} y={p.y} r={11} label="+" labelSize={16} />
					))}
				</Beaker>
			</DioramaPlinth>
			<path d={tube} fill="none" stroke="rgba(70,90,110,0.55)" strokeWidth={5} strokeLinejoin="round" opacity={feed} />
			<path d={tube} fill="none" stroke="rgba(150,190,225,0.9)" strokeWidth={2} strokeLinejoin="round" opacity={feed} />
			{feed > 0 &&
				Array.from({length: 4}, (_, i) => {
					const u = ((frame - tFeed) * 0.012 + i * 0.25) % 1;
					const p = along(u);
					return <circle key={i} cx={p.x} cy={p.y} r={3.2} fill="#6a7fa0" opacity={feed} />;
				})}

			{/* instrument labels */}
			<g opacity={ramp(frame, 0, 14)}>
				<text x={LAMP} y={318} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>hollow cathode</text>
				<text x={LAMP} y={338} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>lamp</text>
				<text x={FL + 30} y={318} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>flame atomiser</text>
				<text x={FL + 30} y={338} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>(or graphite furnace)</text>
				<text x={DET} y={318} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>detector</text>
				<text x={DET} y={338} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>signal</text>
				<text x={160} y={522} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>sample solution</text>
			</g>

			{/* ions → atoms legend; the amber point */}
			<g opacity={ramp(frame, tAtom, 16)}>
				<Ball id={ID} name="ion" color="#6a7fa0" x={330} y={420} r={15} label="+" labelSize={20} />
				<text x={354} y={416} fill={TOK.ink} fontSize={19} fontWeight={800}>{ion} ions</text>
				<text x={354} y={437} fill={TOK.inkDim} fontSize={15} fontWeight={700}>in the solution</text>
				<text x={505} y={428} textAnchor="middle" fill={TOK.inkDim} fontSize={30} fontWeight={800}>→</text>
				<g transform={`translate(0 ${keyIn > 0 ? idleBob(frame, 2, 1.2) : 0})`}>
					<rect x={536} y={386} width={204} height={70} rx={16} fill={keyIn > 0 ? 'rgba(240,168,48,0.08)' : '#ffffff'} stroke={keyIn > 0 ? TOK.amber : 'rgba(0,0,0,0.12)'} strokeWidth={keyIn > 0 ? 2.5 + pulse * 1.5 : 1.5} />
					<Ball id={ID} name="atom" color="#9aa3ad" x={566} y={420} r={15} />
					<text x={590} y={416} fill={keyIn > 0.5 ? TOK.amberInk : TOK.ink} fontSize={19} fontWeight={800}>{atom} atoms</text>
					<text x={590} y={437} fill={TOK.inkDim} fontSize={15} fontWeight={700}>ground state, in flame</text>
				</g>
			</g>
			<g opacity={keyIn}>
				<text x={638} y={492} textAnchor="middle" fill={TOK.amberInk} fontSize={22} fontWeight={800}>atoms, not ions</text>
			</g>
			<g opacity={ramp(frame, tSignal, 14)}>
				<text x={DET} y={96} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>drop → conc.</text>
			</g>
		</svg>
	);
};

