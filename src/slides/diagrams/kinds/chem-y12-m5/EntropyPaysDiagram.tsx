// EntropyPaysDiagram (kind: chem12m5EntropyPays) — an endothermic change can
// still be spontaneous when TΔS outweighs ΔH.
//
// Two panels, each with a little diorama above a three-bar "ΔG = ΔH − TΔS"
// waterfall (ΔH up, −TΔS down, ΔG the sum).
//   Left: NH₄NO₃ dissolving in a cold pack. The crystal breaks up, the ions
//   spread through the water (entropy rises) and the thermometer drops. ΔH is
//   +25.7 kJ mol⁻¹ but the −TΔS bar is longer, so ΔG ends below zero.
//   Right: CaCO₃ → CaO + CO₂ in a lime kiln. The kiln heats up: the −TΔS bar
//   grows with T while ΔH stays put, ΔG shrinks, crosses zero at about 840 °C
//   (amber) and goes negative; only then does CO₂ start to leave.
//
// Bar lengths are proportional to real data (NH₄NO₃: ΔH +25.7 kJ, TΔS ≈ +32 kJ
// at 25 °C; CaCO₃: ΔH ≈ +178 kJ, ΔS ≈ +160 J K⁻¹, so TΔS = ΔH at ≈ 840 °C), but
// the only values printed are the ones the narration gives: +25.7 and 840 °C.
//
// Beat plan (frames after `delay`): `ruleAt` subtitle; `packAt` left panel;
// `kilnAt` right panel and heating; the crossing lands at `crossAt`; `finalAt`
// the rule to write down.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AtomDefs, Ball, Beaker, Pill, bounce, clamp, ease, hash01, ramp} from './shared';

export type EntropyPaysProps = {
	delay?: number;
	ruleAt?: number;
	packAt?: number;
	kilnAt?: number;
	crossAt?: number;
	finalAt?: number;
};

const ID = 'c12m5ep';
const W = 760;
const PX = [16, 396];
const PW = 348;
const ZERO = 384; // bar zero line
const BAR_TOP = 272;
const PRODUCT = '#8a5cc9';
const COLD = '#3f86d6';

// NH₄NO₃ at 25 °C (kJ mol⁻¹): ΔH = +25.7, TΔS = 298 × 0.1087 ≈ 32.4.
const PACK = {dH: 25.7, TdS: 32.4};
// CaCO₃: ΔH ≈ 178 kJ, ΔS ≈ 0.1602 kJ K⁻¹ → crossover at 178 / 0.1602 ≈ 1111 K ≈ 838 °C.
const KILN = {dH: 178, dS: 0.1602, T0: 298, T1: 1250};

export const EntropyPaysDiagram = ({delay = 62, ruleAt = 69, packAt = 317, kilnAt = 634, crossAt = 819, finalAt = 917}: EntropyPaysProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();

	// Waterfall of three bars in a panel. Values in panel units; `scale` px per unit.
	const Bars = ({px, dH, TdS, scale, crossed, hi}: {px: number; dH: number; TdS: number; scale: number; crossed: boolean; hi: boolean}) => {
		const dG = dH - TdS;
		const bw = 62;
		const xs = [px + 58, px + 150, px + 242];
		const yH = ZERO - dH * scale;
		const yAfter = ZERO - dG * scale;
		const gCol = dG < 0 ? (hi ? TOK.amber : theme.accent) : '#c9624e';
		return (
			<g>
				<line x1={px + 30} y1={ZERO} x2={px + PW - 20} y2={ZERO} stroke={TOK.inkMute} strokeWidth={2} />
				<text x={px + 26} y={ZERO + 6} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={700}>0</text>
				{/* ΔH: up from zero (energy absorbed) */}
				<rect x={xs[0]} y={yH} width={bw} height={ZERO - yH} rx={6} fill="#c9624e" />
				{/* −TΔS: hangs down from the top of ΔH */}
				<rect x={xs[1]} y={yH} width={bw} height={TdS * scale} rx={6} fill={COLD} opacity={0.9} />
				<line x1={xs[0] + bw} y1={yH} x2={xs[1]} y2={yH} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="3 4" />
				<line x1={xs[1] + bw} y1={yAfter} x2={xs[2]} y2={yAfter} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="3 4" />
				{/* ΔG: the net, from zero */}
				<rect x={xs[2]} y={Math.min(ZERO, yAfter)} width={bw} height={Math.max(2, Math.abs(ZERO - yAfter))} rx={6} fill={gCol} />
				<text x={xs[0] + bw / 2} y={ZERO + 42} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>ΔH</text>
				<text x={xs[1] + bw / 2} y={ZERO + 42} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>−TΔS</text>
				<text x={xs[2] + bw / 2} y={ZERO + 42} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>ΔG</text>
				<text x={xs[2] + bw / 2} y={ZERO + 66} textAnchor="middle" fill={dG < 0 ? (hi ? TOK.amberInk : theme.accent) : '#a8483a'} fontSize={17} fontWeight={800}>
					{dG < 0 ? 'ΔG < 0 ✓' : crossed ? 'ΔG = 0' : 'ΔG > 0'}
				</text>
			</g>
		);
	};

	// ── Left: cold pack ──
	const packIn = ramp(frame, packAt - 20, 16);
	const packGrow = ease(interpolate(frame, [packAt + 40, packAt + 160], [0, 1], clamp));
	const dissolve = (k: number) => ease(interpolate(frame, [packAt + 20 + k * 14, packAt + 60 + k * 14], [0, 1], clamp));
	const BX = PX[0] + PW / 2 - 6, BBASE = 222, BWD = 140, BHT = 146;
	const ions = Array.from({length: 10}, (_, k) => {
		const lat = {x: BX - 36 + (k % 5) * 18, y: BBASE - 18 - Math.floor(k / 5) * 18};
		const swim = {
			x: bounce(BX - 50 + hash01(k * 3) * 100, (0.25 + hash01(k + 4) * 0.3) * (k % 2 ? 1 : -1), frame, BX - BWD / 2 + 18, BX + BWD / 2 - 18),
			y: bounce(BBASE - 110 + hash01(k * 7) * 80, (0.16 + hash01(k + 9) * 0.2) * (k % 3 ? 1 : -1), frame, BBASE - 112, BBASE - 18),
		};
		const t = dissolve(k);
		const cation = (k + Math.floor(k / 5)) % 2 === 0;
		return {x: lat.x + (swim.x - lat.x) * t, y: lat.y + (swim.y - lat.y) * t, cation};
	});
	const packTemp = interpolate(packGrow, [0, 1], [0.62, 0.3]);

	// ── Right: lime kiln ──
	const kilnIn = ramp(frame, kilnAt - 20, 16);
	const heat = interpolate(frame, [kilnAt + 20, crossAt, crossAt + 90], [0, (1111 - KILN.T0) / (KILN.T1 - KILN.T0), 1], clamp);
	const T = KILN.T0 + (KILN.T1 - KILN.T0) * heat;
	const kTdS = KILN.dS * T;
	const crossed = frame >= crossAt;
	const glow = interpolate(heat, [0, 1], [0, 1]);
	const RX0 = PX[1] + PW / 2;
	const co2Out = (k: number) => (frame > crossAt + 10 + k * 22 ? ((frame - crossAt - 10 - k * 22) % 130) / 130 : -1);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="ΔG = ΔH − TΔS: for ammonium nitrate dissolving and calcium carbonate decomposing, ΔH is positive but a large enough TΔS makes ΔG negative" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={['N', 'O', 'C', 'Ca']} />
			<text x={W / 2} y={32} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800} opacity={ramp(frame, 0, 14)}>ΔG = ΔH − TΔS</text>
			<text x={W / 2} y={60} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700} opacity={ramp(frame, ruleAt, 14)}>
				ΔH positive, yet ΔG negative when TΔS is bigger than ΔH
			</text>
			<line x1={W / 2} y1={78} x2={W / 2} y2={488} stroke={TOK.rule} strokeWidth={2} opacity={kilnIn} />

			{/* ── Left panel ── */}
			<g opacity={packIn}>
				<text x={BX} y={94} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>NH₄NO₃ dissolving (cold pack)</text>
				<DioramaPlinth id={ID} cx={BX} cy={BBASE + 4} rx={110}>
					<Beaker cx={BX} baseY={BBASE} w={BWD} h={BHT - 36} level={0.82}>
						{ions.sort((a, b) => a.y - b.y).map((p, k) => (
							<Ball key={k} id={ID} el={p.cation ? 'N' : 'O'} x={p.x} y={p.y} r={9} label={p.cation ? '+' : '−'} labelSize={13} />
						))}
					</Beaker>
				</DioramaPlinth>
				{/* thermometer */}
				<g>
					<rect x={PX[0] + 20} y={112} width={14} height={104} rx={7} fill="#ffffff" stroke={TOK.inkMute} strokeWidth={2} />
					<rect x={PX[0] + 24} y={112 + 100 * (1 - packTemp)} width={6} height={100 * packTemp} rx={3} fill={COLD} />
					<circle cx={PX[0] + 27} cy={222} r={10} fill={COLD} />
					<text x={PX[0] + 27} y={252} textAnchor="middle" fill={COLD} fontSize={15} fontWeight={800} opacity={packGrow}>cold</text>
				</g>
				<text x={PX[0] + PW - 14} y={140} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={packGrow}>ions spread:</text>
				<text x={PX[0] + PW - 14} y={160} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={packGrow}>ΔS &gt; 0, large</text>
				<g opacity={ramp(frame, packAt + 30, 14)}>
					<Bars px={PX[0]} dH={PACK.dH} TdS={PACK.TdS * packGrow} scale={2.9} crossed={false} hi={false} />
					<text x={PX[0] + 89} y={ZERO - PACK.dH * 2.9 - 8} textAnchor="middle" fill="#a8483a" fontSize={17} fontWeight={800}>+25.7 kJ mol⁻¹</text>
				</g>
			</g>

			{/* ── Right panel ── */}
			<g opacity={kilnIn}>
				<text x={RX0} y={94} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>CaCO₃(s) → CaO(s) + CO₂(g)</text>
				<DioramaPlinth id={ID} cx={RX0} cy={206} rx={116}>
					{/* kiln glow */}
					<ellipse cx={RX0} cy={196} rx={90} ry={26} fill="#f08a3a" opacity={0.12 + glow * 0.35} />
					{Array.from({length: 7}, (_, k) => {
						const x = RX0 - 66 + k * 22, y = 190 + (k % 2) * 10;
						return <rect key={k} x={x - 11} y={y - 11 + idleBob(frame, k, 0.6)} width={22} height={20} rx={4} fill="#ecebe6" stroke="#b9b6ae" strokeWidth={1.5} />;
					})}
					{Array.from({length: 6}, (_, k) => {
						const u = co2Out(k);
						if (u < 0) return null;
						const x = RX0 - 50 + k * 20 + Math.sin(u * 6 + k) * 8;
						const y = 180 - u * 80;
						const o = u < 0.15 ? u / 0.15 : 1 - Math.max(0, (u - 0.7) / 0.3);
						return (
							<g key={k} opacity={o}>
								<Ball id={ID} el="O" x={x - 9} y={y} r={6.5} />
								<Ball id={ID} el="C" x={x} y={y} r={7} />
								<Ball id={ID} el="O" x={x + 9} y={y} r={6.5} />
							</g>
						);
					})}
				</DioramaPlinth>
				{/* thermometer with only the crossover marked */}
				<g>
					<rect x={PX[1] + PW - 34} y={112} width={14} height={104} rx={7} fill="#ffffff" stroke={TOK.inkMute} strokeWidth={2} />
					<rect x={PX[1] + PW - 30} y={112 + 100 * (1 - (0.15 + 0.8 * heat))} width={6} height={100 * (0.15 + 0.8 * heat)} rx={3} fill="#c9624e" />
					<circle cx={PX[1] + PW - 27} cy={222} r={10} fill="#c9624e" />
					<line x1={PX[1] + PW - 42} y1={112 + 100 * (1 - (0.15 + 0.8 * ((1111 - KILN.T0) / (KILN.T1 - KILN.T0))))} x2={PX[1] + PW - 20} y2={112 + 100 * (1 - (0.15 + 0.8 * ((1111 - KILN.T0) / (KILN.T1 - KILN.T0))))} stroke={TOK.amber} strokeWidth={3} opacity={ramp(frame, crossAt - 10, 10)} />
				</g>
				<Bars px={PX[1]} dH={KILN.dH} TdS={kTdS} scale={0.52} crossed={crossed} hi />
				<g opacity={ramp(frame, crossAt, 14)}>
					<Pill x={RX0} y={250} text="spontaneous above ≈ 840 °C" color={TOK.amber} ink={TOK.amberInk} size={16} strokeWidth={2 + idlePulse(frame) * 1.5} />
				</g>
			</g>

			<text x={W / 2} y={520} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={ramp(frame, finalAt, 16)}>
				Endothermic + spontaneous needs ΔS &gt; 0 AND a high enough T
			</text>
		</svg>
	);
};
