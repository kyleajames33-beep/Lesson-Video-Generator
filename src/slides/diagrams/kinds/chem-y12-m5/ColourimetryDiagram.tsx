// ColourimetryDiagram (kind: chem12m5Colourimetry) — measuring Keq by
// colourimetry for Fe³⁺ + SCN⁻ ⇌ FeSCN²⁺ (only FeSCN²⁺ is deep red).
//
// Five steps on their beats: standards of known concentration stand in
// cuvettes on a plinth (deepening red); each one flies to a calibration graph
// (absorbance vs [FeSCN²⁺]) and a straight line through the origin draws
// (Beer–Lambert, absorbance ∝ concentration). The equilibrium mixture's
// cuvette arrives; its absorbance is read across to the line and down to
// [FeSCN²⁺]eq (amber). An ICE table gives the other two, and they are
// substituted into the Keq expression.
//
// Qualitative axes; no invented values.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idlePulse} from '../../diorama';
import {clamp, ease, ramp, textW} from './shared';
import {Arrow, Axes} from './lcKit';

export type ColourimetryProps = {
	delay?: number;
	beats?: {
		/** standards fill with deepening colour, Beer–Lambert label */
		beer?: number;
		/** "deeper colour = higher concentration" */
		deeper?: number;
		/** step 1: standards plotted */
		s1?: number;
		/** calibration line draws */
		line?: number;
		/** step 2: equilibrium mixture */
		s2?: number;
		/** step 3: read across and down */
		s3?: number;
		/** step 4: ICE table */
		s4?: number;
		/** step 5: substitute into Keq */
		s5?: number;
		/** "only FeSCN²⁺ is deep red" note */
		red?: number;
	};
};

const W = 760;
const RED = '#a3201b';
const PALE = '#f4e3b5';
const STD = [0.2, 0.4, 0.6, 0.8];
const MIX = 0.52;
const CUV_X = [58, 106, 154, 202];
const MIX_X = 282;
const PLINTH_Y = 256;
const GX0 = 420, GX1 = 736, GY0 = 112, GY1 = 314;

const mixCol = (c: number) => {
	const a = [0xf4, 0xe3, 0xb5], b = [0xa3, 0x20, 0x1b];
	const t = Math.max(0, Math.min(1, c / 0.85));
	return `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * t)).join(',')})`;
};

export const ColourimetryDiagram = ({delay = 62, beats = {}}: ColourimetryProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = {beer: 164, deeper: 347, s1: 417, line: 502, s2: 530, s3: 565, s4: 685, s5: 776, red: 826, ...beats};
	const pulse = idlePulse(frame);

	const gx = (c: number) => GX0 + 10 + c * (GX1 - GX0 - 30);
	const gy = (a: number) => GY1 - 8 - a * (GY1 - GY0 - 30);
	const K = 1; // absorbance per unit concentration (qualitative)

	const step = frame >= b.s5 ? 5 : frame >= b.s4 ? 4 : frame >= b.s3 ? 3 : frame >= b.s2 ? 2 : frame >= b.s1 ? 1 : 0;
	const stepNames = ['standards', 'mixture', 'read A', 'ICE table', 'Keq'];

	const cuvette = (x: number, c: number, fill: number, key: string | number, label?: string) => {
		const top = PLINTH_Y - 88, h = 80, w = 30;
		const lvl = 64 * fill;
		return (
			<g key={key}>
				<rect x={x - w / 2} y={top + h - 8 - lvl} width={w} height={lvl + 2} fill={mixCol(c)} opacity={0.92} />
				<rect x={x - w / 2} y={top} width={w} height={h} rx={3} fill="rgba(255,255,255,0.18)" stroke="rgba(70,90,110,0.6)" strokeWidth={2.5} />
				<rect x={x - w / 2 + 4} y={top + 6} width={4} height={h - 16} rx={2} fill="#ffffff" opacity={0.55} />
				{label && <text x={x} y={top - 10} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>{label}</text>}
			</g>
		);
	};

	const fillStd = (i: number) => ease(interpolate(frame, [b.beer + i * 14, b.beer + i * 14 + 30], [0, 1], clamp));
	const mixIn = ease(interpolate(frame, [b.s2, b.s2 + 30], [0, 1], clamp));
	const lineDraw = interpolate(frame, [b.line, b.line + 40], [0, 1], clamp);
	const across = interpolate(frame, [b.s3 + 10, b.s3 + 40], [0, 1], clamp);
	const down = interpolate(frame, [b.s3 + 44, b.s3 + 70], [0, 1], clamp);
	const aMix = K * MIX;

	// ICE table
	const TX = 20, TY = 384, CW0 = 40, CW = 128, RH = 34;
	const cols = ['Fe³⁺', 'SCN⁻', 'FeSCN²⁺'];
	const rows: [string, string[]][] = [
		['I', ['known', 'known', '0']],
		['C', ['−x', '−x', '+x']],
		['E', ['known − x', 'known − x', 'x']],
	];
	const iceIn = ramp(frame, b.s4, 14);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Colourimetry for Fe³⁺ + SCN⁻ ⇌ FeSCN²⁺: standards of known concentration give a straight-line calibration graph of absorbance against concentration; the equilibrium mixture's absorbance is read off to give [FeSCN²⁺] at equilibrium; an ICE table gives the other concentrations, which are substituted into Keq" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{/* equation */}
			<g opacity={ramp(frame, 0, 14)}>
				<text x={20} y={34} fill={TOK.ink} fontSize={26} fontWeight={800}>
					Fe³⁺ + SCN⁻ ⇌ <tspan fill={RED}>FeSCN²⁺</tspan>
				</text>
			</g>
			<text x={20 + textW('Fe³⁺ + SCN⁻ ⇌ FeSCN²⁺', 26) + 18} y={33} fill={RED} fontSize={17} fontWeight={800} opacity={ramp(frame, b.red, 14)}>only this one is deep red</text>

			{/* step strip */}
			{stepNames.map((n, i) => {
				const active = step === i + 1;
				const done = step > i + 1;
				const x = 20 + i * 146;
				const on = ramp(frame, [b.s1, b.s2, b.s3, b.s4, b.s5][i], 12);
				return (
					<g key={i} opacity={0.35 + 0.65 * on}>
						<rect x={x} y={52} width={136} height={30} rx={15} fill={active ? theme.accent : '#ffffff'} stroke={done || active ? theme.accent : TOK.rule} strokeWidth={2} />
						<text x={x + 68} y={73} textAnchor="middle" fill={active ? '#ffffff' : done ? theme.accent : TOK.inkDim} fontSize={16} fontWeight={800}>{`${i + 1}  ${n}`}</text>
					</g>
				);
			})}

			{/* plinth with cuvettes */}
			<g opacity={ramp(frame, 4, 14)}>
				<DioramaPlinth id="c12m5col" cx={170} cy={PLINTH_Y} rx={156}>
					{STD.map((c, i) => cuvette(CUV_X[i], c, fillStd(i), i))}
					<g opacity={mixIn} transform={`translate(0 ${(1 - mixIn) * -30})`}>{cuvette(MIX_X, MIX, 1, 'mix', '?')}</g>
				</DioramaPlinth>
				<text x={(CUV_X[0] + CUV_X[3]) / 2} y={PLINTH_Y + 72} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>standards (known)</text>
				<text x={MIX_X} y={PLINTH_Y + 72} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800} opacity={mixIn}>eq. mixture</text>
			</g>
			<text x={130} y={120} textAnchor="middle" fill={RED} fontSize={17} fontWeight={800} opacity={ramp(frame, b.deeper, 14)}>deeper colour → higher conc.</text>

			{/* calibration graph */}
			<g opacity={ramp(frame, b.beer - 10, 14)}>
				<Axes x0={GX0} y0={GY0} x1={GX1} y1={GY1} yLabel="absorbance" size={16} />
				<text x={GX1} y={GY1 + 24} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={700}>[FeSCN²⁺]</text>
				<text x={GX0 + 14} y={GY0 + 6} fill={theme.accent} fontSize={16} fontWeight={800} opacity={ramp(frame, b.beer + 20, 14)}>Beer–Lambert: A ∝ concentration</text>
			</g>
			{/* standards fly to the graph */}
			{STD.map((c, i) => {
				const t = ease(interpolate(frame, [b.s1 + i * 16, b.s1 + i * 16 + 28], [0, 1], clamp));
				if (t <= 0) return null;
				const x0 = CUV_X[i], y0 = PLINTH_Y - 60;
				const x1 = gx(c), y1 = gy(K * c);
				const x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t - Math.sin(Math.PI * t) * 60;
				return <circle key={i} cx={x} cy={y} r={7} fill={mixCol(c)} stroke="#ffffff" strokeWidth={2.5} />;
			})}
			<line x1={gx(0)} y1={gy(0)} x2={gx(0) + (gx(0.95) - gx(0)) * lineDraw} y2={gy(0) + (gy(K * 0.95) - gy(0)) * lineDraw} stroke={theme.accent} strokeWidth={3.5} strokeLinecap="round" opacity={lineDraw > 0 ? 1 : 0} />
			<text x={gx(0.95) - 4} y={gy(K * 0.95) + 26} textAnchor="end" fill={theme.accent} fontSize={16} fontWeight={800} opacity={ramp(frame, b.line + 30, 12)}>calibration line</text>

			{/* read the mixture: across then down */}
			<g opacity={across > 0 ? 1 : 0}>
				<circle cx={GX0} cy={gy(aMix)} r={6} fill={mixCol(MIX)} stroke="#ffffff" strokeWidth={2} />
				<text x={GX0 + 10} y={gy(aMix) - 10} fill={TOK.ink} fontSize={16} fontWeight={800}>measured A</text>
				<line x1={GX0} y1={gy(aMix)} x2={GX0 + (gx(MIX) - GX0) * across} y2={gy(aMix)} stroke={TOK.amber} strokeWidth={3 + pulse} strokeDasharray="7 5" />
				{down > 0 && <Arrow x1={gx(MIX)} y1={gy(aMix)} x2={gx(MIX)} y2={GY1 - 2} g={down} color={TOK.amber} w={3 + pulse} head={10} dash="7 5" />}
				<g opacity={ramp(frame, b.s3 + 66, 12)}>
					<circle cx={gx(MIX)} cy={gy(aMix)} r={7} fill={TOK.amber} stroke="#ffffff" strokeWidth={2} />
					<text x={gx(MIX)} y={GY1 + 24} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>[FeSCN²⁺]eq</text>
				</g>
			</g>

			{/* ICE table */}
			<g opacity={iceIn}>
				<rect x={TX} y={TY - 26} width={CW0 + CW * 3 + 12} height={RH * 4 + 18} rx={12} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
				{cols.map((c, j) => (
					<text key={c} x={TX + CW0 + CW * j + CW / 2} y={TY} textAnchor="middle" fill={j === 2 ? RED : TOK.ink} fontSize={18} fontWeight={800}>{c}</text>
				))}
				{rows.map(([r, vals], i) => (
					<g key={r} opacity={ramp(frame, b.s4 + 10 + i * 16, 10)}>
						<text x={TX + 18} y={TY + RH * (i + 1)} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>{r}</text>
						{vals.map((v, j) => {
							const key = i === 2 && j === 2;
							return (
								<text key={j} x={TX + CW0 + CW * j + CW / 2} y={TY + RH * (i + 1)} textAnchor="middle" fill={key ? TOK.amberInk : TOK.ink} fontSize={17} fontWeight={key ? 800 : 700}>
									{v}
								</text>
							);
						})}
					</g>
				))}
				<line x1={TX + 8} y1={TY + 10} x2={TX + CW0 + CW * 3} y2={TY + 10} stroke={TOK.rule} strokeWidth={2} />
				<text x={TX + CW0 + CW * 2 + CW / 2} y={TY + RH * 3 + 22} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800} opacity={ramp(frame, b.s4 + 50, 12)}>from absorbance</text>
			</g>

			{/* Keq */}
			<g opacity={ramp(frame, b.s5, 14)}>
				<rect x={478} y={TY - 26} width={264} height={RH * 4 + 18} rx={12} fill="#ffffff" stroke={theme.accent} strokeWidth={2} />
				<text x={610} y={TY} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>substitute</text>
				<text x={500} y={TY + 62} fill={TOK.ink} fontSize={24} fontWeight={800}>Keq =</text>
				<text x={660} y={TY + 44} textAnchor="middle" fill={RED} fontSize={21} fontWeight={800}>[FeSCN²⁺]</text>
				<line x1={588} y1={TY + 55} x2={732} y2={TY + 55} stroke={TOK.ink} strokeWidth={2.5} />
				<text x={660} y={TY + 82} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>[Fe³⁺][SCN⁻]</text>
			</g>
		</svg>
	);
};
