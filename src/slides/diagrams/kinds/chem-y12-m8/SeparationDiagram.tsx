// SeparationDiagram — chromatography (Chem Y12 M8 L5).
//
// mode "principle" (scene `concept`): a glass channel resting on two stone
//   plinths. The stationary phase (fixed beads) lines the bottom; the mobile
//   phase flows over it. A two-component mixture is carried along: each particle
//   keeps switching between the phases, spending its own fraction of time in
//   the mobile phase. The red component clings to the stationary phase and moves
//   slowly; the blue one prefers the mobile phase and races ahead, so two bands
//   form. The amber phrase: "differential affinity for two phases".
//   Distance moved is computed from time spent in the mobile phase, so the band
//   positions follow directly from the affinities.
// mode "tlc" (scene `concept-tlc`): a TLC plate (silica) standing in a solvent
//   chamber. Pencil baseline, mixture spot, solvent rises by capillary action,
//   the spots travel different distances, the solvent front is marked. The
//   chamber is removed and a ruler measures each distance; Rf = compound
//   distance ÷ solvent front distance (amber), computed from the props:
//   6.0 ÷ 8.0 = 0.75 and 2.0 ÷ 8.0 = 0.25. The polar compound on polar silica has
//   the low Rf.
//
// Beats (frames after `delay`):
//   principle: [phrase, stationary, mobile, carried, slow one, fast one, chemistry]
//   tlc: [plate, solvent, spot, solvent rises, measure, Rf formula, Rf values,
//         no units 0–1, pure check, polar → low Rf]

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Ball, Beaker, GlossDefs, clamp, ease, hash01, ramp} from './shared';

export type SeparationProps = {
	delay?: number;
	mode?: 'principle' | 'tlc';
	beats?: number[];
	/** TLC: distances from the baseline, in cm. */
	frontCm?: number;
	fastCm?: number;
	slowCm?: number;
};

const W = 760;
const RED = '#c2185b'; // sticks to the stationary phase (polar, on silica)
const BLUE = '#1e7fd0'; // prefers the mobile phase
const DEFAULT_BEATS = {
	principle: [110, 190, 250, 300, 470, 570, 740],
	tlc: [20, 130, 215, 280, 430, 450, 545, 575, 750, 850],
};

export const SeparationDiagram = ({delay = 62, mode = 'principle', beats, frontCm = 8.0, fastCm = 6.0, slowCm = 2.0}: SeparationProps) => {
	const frame = useCurrentFrame() - delay;
	const b = beats ?? DEFAULT_BEATS[mode];
	return mode === 'tlc' ? <Tlc frame={frame} b={b} frontCm={frontCm} fastCm={fastCm} slowCm={slowCm} /> : <Principle frame={frame} b={b} />;
};

// ─────────────────────────────────────────────────────────────────────
const Principle = ({frame, b}: {frame: number; b: number[]}) => {
	const ID = 'c12m8sepprinciple';
	const [tPhrase, tStat, tMob, tCarry, tSlow, tFast, tChem] = b;
	const tStop = tChem + 60;
	const pulse = idlePulse(frame);
	const X0 = 50, X1 = 710, TOP = 166, BOT = 334;
	const BEAD_Y = 318;
	const MOB0 = 186, MOB1 = 284;

	// Time each particle has been carried (frozen after tStop).
	const tRun = Math.max(0, Math.min(frame, tStop) - tCarry);
	const P = 36; // switching period (frames)
	const V = 1.0; // mobile-phase speed (units / frame)
	const mobileTime = (t: number, f: number) => Math.floor(t / P) * f * P + Math.min(t % P, f * P);
	const inMobile = (t: number, f: number) => {
		const m = t % P, edge = 5;
		const up = Math.min(1, m / edge);
		const down = Math.min(1, Math.max(0, (f * P - m) / edge));
		return Math.max(0, Math.min(up, down));
	};

	const comps = [
		{color: RED, f: 0.22, name: 'red'},
		{color: BLUE, f: 0.85, name: 'blue'},
	];
	const parts = comps.flatMap((c, ci) =>
		Array.from({length: 8}, (_, j) => {
			const seed = ci * 20 + j;
			const f = c.f + (hash01(seed + 5) - 0.5) * 0.08;
			const phase = hash01(seed + 11) * P;
			const x0 = 84 + hash01(seed + 17) * 40;
			const d = V * (mobileTime(tRun + phase, f) - mobileTime(phase, f));
			const s = inMobile(tRun + phase, f);
			const yMob = MOB0 + hash01(seed + 23) * (MOB1 - MOB0);
			const yStat = BEAD_Y - 18 + hash01(seed + 29) * 4;
			const bob = idleBob(frame, seed, frame > tStop ? 1.4 : 0.6);
			return {key: seed, color: c.name, x: x0 + d, y: yStat + (yMob - yStat) * s + bob, s};
		}),
	);
	const bandX = (name: string) => {
		const xs = parts.filter((p) => p.color === name).map((p) => p.x);
		return xs.reduce((a, v) => a + v, 0) / xs.length;
	};

	const flowOn = ramp(frame, tMob, 16);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Chromatography: a mobile phase flows over a fixed stationary phase; the component strongly attracted to the stationary phase moves slowly, the one that prefers the mobile phase moves fast, so they separate by differential affinity for two phases" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{bead: '#e9e2cf', red: RED, blue: BLUE}} />

			{/* key phrase */}
			<g opacity={ramp(frame, tPhrase, 16)}>
				<rect x={W / 2 - 236} y={22} width={472} height={46} rx={23} fill="#ffffff" stroke={TOK.amber} strokeWidth={2.5 + pulse * 1.5} />
				<text x={W / 2} y={52} textAnchor="middle" fill={TOK.amberInk} fontSize={24} fontWeight={800}>Differential affinity for two phases</text>
			</g>

			{/* supports */}
			<DioramaPlinth id={ID} cx={150} cy={338} rx={74} />
			<DioramaPlinth id={ID} cx={610} cy={338} rx={74} />

			{/* channel: mobile phase liquid over a bed of fixed beads */}
			<rect x={X0} y={TOP} width={X1 - X0} height={BOT - TOP} rx={8} fill="rgba(150,200,235,0.28)" />
			{/* flow chevrons */}
			<g opacity={flowOn * 0.7}>
				{Array.from({length: 8}, (_, i) => {
					const span = X1 - X0 - 40;
					const x = X0 + 20 + ((i * (span / 8) + Math.max(0, frame - tMob) * 1.2) % span);
					return <path key={i} d={`M ${x} ${MOB0 + 4} l 12 12 l -12 12`} fill="none" stroke="#6aa6d6" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />;
				})}
			</g>
			{Array.from({length: 33}, (_, i) => (
				<Ball key={i} id={ID} name="bead" color="#e9e2cf" x={X0 + 10 + i * 20} y={BEAD_Y + (i % 2) * 3} r={10.5} />
			))}
			{parts
				.slice()
				.sort((p, q) => p.y - q.y)
				.map((p) => (
					<Ball key={p.key} id={ID} name={p.color} color={p.color === 'red' ? RED : BLUE} x={p.x} y={p.y} r={8.5} />
				))}
			<rect x={X0} y={TOP} width={X1 - X0} height={BOT - TOP} rx={8} fill="none" stroke="rgba(70,90,110,0.55)" strokeWidth={3} />
			<rect x={X0 + 10} y={TOP + 6} width={X1 - X0 - 20} height={4} rx={2} fill="#ffffff" opacity={0.6} />

			<text x={X0} y={TOP - 14} fill={TOK.inkDim} fontSize={19} fontWeight={800} opacity={ramp(frame, 0, 14) * (1 - ramp(frame, tMob - 16, 14))}>a two-component mixture</text>

			{/* phase labels */}
			<g opacity={ramp(frame, tMob, 14)}>
				<text x={X0} y={TOP - 14} fill={TOK.ink} fontSize={19} fontWeight={800}>mobile phase</text>
				<text x={X0 + 136} y={TOP - 14} fill={TOK.inkDim} fontSize={17} fontWeight={700}>moves →</text>
			</g>
			<g opacity={ramp(frame, tStat, 14)}>
				<text x={W / 2} y={370} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>stationary phase</text>
				<text x={W / 2} y={392} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>stays put</text>
			</g>

			{/* component labels, following their bands */}
			<g opacity={ramp(frame, tSlow, 14)}>
				<Ball id={ID} name="red" color={RED} x={Math.min(250, bandX('red')) - 70} y={440} r={9} />
				<text x={Math.min(250, bandX('red')) - 54} y={446} fill={TOK.ink} fontSize={19} fontWeight={800}>clings: slow</text>
				<text x={Math.min(250, bandX('red')) - 54} y={468} fill={TOK.inkDim} fontSize={16} fontWeight={700}>attracted to stationary</text>
			</g>
			<g opacity={ramp(frame, tFast, 14)}>
				<Ball id={ID} name="blue" color={BLUE} x={Math.max(470, Math.min(560, bandX('blue'))) - 40} y={440} r={9} />
				<text x={Math.max(470, Math.min(560, bandX('blue'))) - 24} y={446} fill={TOK.ink} fontSize={19} fontWeight={800}>travels fast</text>
				<text x={Math.max(470, Math.min(560, bandX('blue'))) - 24} y={468} fill={TOK.inkDim} fontSize={16} fontWeight={700}>prefers mobile phase</text>
			</g>
			<g opacity={ramp(frame, tChem, 16)}>
				<text x={W / 2} y={512} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>Speed reflects polarity, intermolecular forces, solubility</text>
			</g>
		</svg>
	);
};

// ─────────────────────────────────────────────────────────────────────
const Tlc = ({frame, b, frontCm, fastCm, slowCm}: {frame: number; b: number[]; frontCm: number; fastCm: number; slowCm: number}) => {
	const ID = 'c12m8septlc';
	const [tPlate, tSolvent, tSpot, tRise, tMeasure, tFormula, tCalc, tUnits, tPure, tPolar] = b;
	const pulse = idlePulse(frame);
	const S = 30; // viewBox units per cm
	const CX = 150, BASE = 452;
	const PW = 80;
	const plateBot = BASE - 8;
	const baseY = plateBot - S; // pencil baseline 1 cm above the bottom
	const plateTop = baseY - (frontCm + 1) * S;
	const poolY = plateBot - 10;

	const rfFast = fastCm / frontCm;
	const rfSlow = slowCm / frontCm;
	const fmt = (v: number) => v.toFixed(1);
	const fmt2 = (v: number) => v.toFixed(2);

	// Solvent front: rises from the pool to frontCm above the baseline.
	const rise = ease(interpolate(frame, [tRise, tRise + 140], [0, 1], clamp));
	const frontY = poolY + (baseY - frontCm * S - poolY) * rise;
	const frontDist = Math.max(0, baseY - frontY); // above the baseline, in units
	const spotOn = ramp(frame, tSpot, 12);
	const fastY = baseY - rfFast * frontDist;
	const slowY = baseY - rfSlow * frontDist;
	const frontMark = ramp(frame, tRise + 146, 12);

	const chamber = 1 - ramp(frame, tMeasure, 20);
	const measure = ramp(frame, tMeasure + 10, 16);
	const phase1Labels = 1 - ramp(frame, tMeasure - 6, 14);

	const RX = CX + PW / 2 + 22; // ruler x
	const label = (y: number, text: string, sub: string | undefined, t: number, ty = y, tx = 300) => (
		<g opacity={ramp(frame, t, 14) * phase1Labels}>
			<path d={`M ${CX + PW / 2 + 6} ${y} L ${tx - 34} ${y} L ${tx - 10} ${ty}`} fill="none" stroke={TOK.inkMute} strokeWidth={1.8} />
			<text x={tx} y={ty + 6} fill={TOK.ink} fontSize={19} fontWeight={800}>{text}</text>
			{sub && <text x={tx} y={ty + 28} fill={TOK.inkDim} fontSize={16} fontWeight={700}>{sub}</text>}
		</g>
	);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label={`TLC: silica plate in a solvent chamber; the solvent rises and the spots travel different distances. Rf = compound distance ÷ solvent front distance: ${fmt(fastCm)} ÷ ${fmt(frontCm)} = ${fmt2(rfFast)} and ${fmt(slowCm)} ÷ ${fmt(frontCm)} = ${fmt2(rfSlow)}; no units, between 0 and 1; the polar compound has the low Rf on polar silica`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{red: RED, blue: BLUE}} />

			<DioramaPlinth id={ID} cx={CX} cy={BASE} rx={116}>
				{/* chamber (beaker + lid) with the solvent pool */}
				<g opacity={chamber}>
					<Beaker cx={CX} baseY={BASE} w={156} h={350} level={0.05} liquid="rgba(150,200,235,0.45)" />
					<rect x={CX - 90} y={BASE - 358} width={180} height={9} rx={3} fill="rgba(200,215,228,0.85)" stroke="rgba(70,90,110,0.5)" strokeWidth={1.5} />
				</g>
				{/* plate */}
				<g opacity={ramp(frame, tPlate, 14)}>
					<rect x={CX - PW / 2} y={plateTop} width={PW} height={plateBot - plateTop} rx={3} fill="#f7f6f1" stroke="#b9b6aa" strokeWidth={2} />
					{/* wet region below the solvent front */}
					<rect x={CX - PW / 2 + 1} y={Math.min(plateBot, frontY)} width={PW - 2} height={Math.max(0, plateBot - frontY)} fill="rgba(150,200,235,0.35)" />
					{/* pencil baseline */}
					<line x1={CX - PW / 2 + 6} y1={baseY} x2={CX + PW / 2 - 6} y2={baseY} stroke="#6b6b6b" strokeWidth={2} opacity={ramp(frame, tSpot - 12, 10)} />
					{/* solvent front mark */}
					<line x1={CX - PW / 2 + 4} y1={baseY - frontCm * S} x2={CX + PW / 2 - 4} y2={baseY - frontCm * S} stroke="#6b6b6b" strokeWidth={2} strokeDasharray="5 4" opacity={frontMark} />
					{/* spots */}
					<g opacity={spotOn}>
						<ellipse cx={CX} cy={slowY} rx={11} ry={8} fill={RED} opacity={0.8} />
						<ellipse cx={CX} cy={fastY} rx={11} ry={8} fill={BLUE} opacity={0.8} />
					</g>
					{/* polar highlight ring */}
					<ellipse cx={CX} cy={slowY} rx={18} ry={14} fill="none" stroke={RED} strokeWidth={2.5} opacity={ramp(frame, tPolar, 12) * (0.5 + 0.5 * pulse)} />
				</g>
			</DioramaPlinth>

			{/* phase-1 labels */}
			{label(plateTop + 50, 'silica plate', 'stationary phase', tPlate)}
			{label(poolY + 4, 'solvent', 'mobile phase', tSolvent, poolY + 26)}
			{label(baseY - 90, 'rises by capillary action', undefined, tRise)}
			{label(baseY, 'pencil baseline + spot', undefined, tSpot, baseY - 12)}

			{/* ruler + measured distances */}
			<g opacity={measure}>
				<rect x={RX} y={plateTop} width={26} height={baseY - plateTop + 12} rx={3} fill="#f3e6c4" stroke="#b69a5c" strokeWidth={1.5} />
				{Array.from({length: Math.floor(frontCm) + 2}, (_, k) => (
					<line key={k} x1={RX} y1={baseY - k * S} x2={RX + (k % 2 === 0 ? 14 : 9)} y2={baseY - k * S} stroke="#7a6436" strokeWidth={1.5} />
				))}
				{[
					{y: baseY - frontCm * S, v: frontCm, c: TOK.ink},
					{y: fastY, v: fastCm, c: BLUE},
					{y: slowY, v: slowCm, c: RED},
				].map((m, k) => (
					<g key={k}>
						<line x1={CX + 12} y1={m.y} x2={RX} y2={m.y} stroke={m.c} strokeWidth={1.8} strokeDasharray="4 3" />
						<text x={RX + 34} y={m.y + 6} fill={m.c} fontSize={18} fontWeight={800}>{fmt(m.v)} cm</text>
					</g>
				))}
				<text x={RX + 34} y={baseY + 6} fill={TOK.inkDim} fontSize={16} fontWeight={700}>0</text>
			</g>

			{/* Rf panel */}
			<g opacity={ramp(frame, tFormula, 14)}>
				<rect x={352} y={110} width={390} height={98} rx={16} fill="rgba(240,168,48,0.07)" stroke={TOK.amber} strokeWidth={2.5 + pulse * 1.5} />
				<text x={376} y={168} fill={TOK.amberInk} fontSize={30} fontWeight={800}>R<tspan fontSize={20} dy={6}>f</tspan><tspan dy={-6}> =</tspan></text>
				<text x={588} y={148} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>compound distance</text>
				<line x1={466} y1={160} x2={712} y2={160} stroke={TOK.ink} strokeWidth={2.5} />
				<text x={588} y={188} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>solvent front distance</text>
			</g>
			<g opacity={ramp(frame, tCalc, 14)}>
				<Ball id={ID} name="blue" color={BLUE} x={380} y={250} r={9} />
				<text x={400} y={258} fill={TOK.ink} fontSize={24} fontWeight={800}>{fmt(fastCm)} ÷ {fmt(frontCm)} = {fmt2(rfFast)}</text>
			</g>
			<g opacity={ramp(frame, tCalc + 20, 14)}>
				<Ball id={ID} name="red" color={RED} x={380} y={294} r={9} />
				<text x={400} y={302} fill={TOK.ink} fontSize={24} fontWeight={800}>{fmt(slowCm)} ÷ {fmt(frontCm)} = {fmt2(rfSlow)}</text>
			</g>
			<g opacity={ramp(frame, tUnits, 14)}>
				<text x={372} y={348} fill={TOK.inkDim} fontSize={19} fontWeight={700}>No units; always between 0 and 1</text>
			</g>
			<g opacity={ramp(frame, tPure, 14)}>
				<text x={372} y={388} fill={TOK.inkDim} fontSize={18} fontWeight={700}>A “pure” sample with 2 spots is not pure</text>
			</g>
			<g opacity={ramp(frame, tPolar, 14)} transform={`translate(0 ${idleBob(frame, 3, 0.8)})`}>
				<Ball id={ID} name="red" color={RED} x={380} y={434} r={9} />
				<text x={400} y={441} fill={TOK.ink} fontSize={19} fontWeight={800}>Polar compound sticks to polar silica</text>
				<text x={400} y={465} fill={RED} fontSize={19} fontWeight={800}>→ low Rf</text>
			</g>
		</svg>
	);
};
