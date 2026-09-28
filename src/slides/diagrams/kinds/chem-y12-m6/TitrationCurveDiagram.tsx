// TitrationCurveDiagram — titration curves that draw themselves as titrant is
// added, computed from real chemistry.
//
// Every point is an exact pH from charge balance (solvePH) for the analyte
// (strong or weak acid, c and V from props) after V mL of titrant (strong or
// weak base), so the start pH, the buffer region, the equivalence pH and the
// size of the jump all come out of the numbers, never hand-drawn. Several
// curve types can draw one after another (the four fingerprints), or one curve
// can draw beside a burette dripping into a flask on a stone plinth, with
// reading markers: the equivalence volume, the half-equivalence point (pH =
// pKa) and the buffer region.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {BLUE, clamp, ease, fadeAt, phColor, solvePH} from './shared';

export type CurveType = 'SA-SB' | 'WA-SB' | 'SA-WB' | 'WA-WB';
/** `epLabel` may contain {pH}, replaced by the computed equivalence pH. */
export type CurveSeries = {type: CurveType; label: string; at: number; dur?: number; epLabel?: string};
export type TitrationCurveProps = {
	series: CurveSeries[];
	/** Analyte acid: mol L⁻¹ and mL; titrant base mol L⁻¹. */
	ca?: number;
	va?: number;
	cb?: number;
	pKa?: number;
	pKb?: number;
	vMax?: number;
	/** Burette + flask beside a single curve. */
	apparatus?: boolean;
	markers?: {epAt?: number; halfAt?: number; pKaAt?: number; bufferAt?: number};
	/** Show computed EP dots/labels on each curve once drawn. */
	epDots?: boolean;
	/** Small multiples: one panel per series (2 × 2 for four). */
	grid?: boolean;
	delay?: number;
};

const ID = 'c12m6tc';
const W = 760;
const H = 530;
const COLORS = (accent: string) => [accent, BLUE, '#8e5bd6', '#8a8f99'];

export const curvePH = (type: CurveType, V: number, ca: number, va: number, cb: number, Ka: number, Kb: number) => {
	const vt = va + V;
	const acid = (ca * va) / vt, base = (cb * V) / vt;
	const strongAcidT = type === 'SA-SB' || type === 'SA-WB';
	const strongBaseT = type === 'SA-SB' || type === 'WA-SB';
	return solvePH({
		strongAcid: strongAcidT ? acid : 0,
		strongBase: strongBaseT ? base : 0,
		weakAcids: strongAcidT ? [] : [{c: acid, Ka}],
		weakBases: strongBaseT ? [] : [{c: base, Kb}],
	});
};

export const TitrationCurveDiagram = ({
	series, ca = 0.1, va = 25, cb = 0.1, pKa = 4.74, pKb = 4.75, vMax = 50, apparatus = false, markers = {}, epDots = false, grid = false, delay = 62,
}: TitrationCurveProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const Ka = 10 ** -pKa, Kb = 10 ** -pKb;
	const vEq = (ca * va) / cb;
	const cols = COLORS(theme.accent);

	const GX0 = apparatus ? 272 : 74, GX1 = apparatus ? 700 : 600, GY0 = 30, GY1 = 440;
	const gx = (v: number) => GX0 + (v / vMax) * (GX1 - GX0);
	const gy = (p: number) => GY1 - (p / 14) * (GY1 - GY0);

	// Pen: volume reached by each series at this frame. The last 40% of the
	// time covers the steep jump slowly so the eye can follow it.
	const penV = (s: CurveSeries) => {
		const dur = s.dur ?? 110;
		const u = ease(frame, s.at, s.at + dur);
		const k = vEq / vMax;
		return u < 0.4 ? (u / 0.4) * (k - 0.06) * vMax
			: u < 0.7 ? ((k - 0.06) + ((u - 0.4) / 0.3) * 0.12) * vMax
				: ((k + 0.06) + ((u - 0.7) / 0.3) * (1 - k - 0.06)) * vMax;
	};
	const pathFine = (s: CurveSeries, vEnd: number) => {
		const pts: number[] = [];
		for (let i = 0; i <= 160; i++) pts.push((vMax * i) / 160);
		for (let i = -20; i <= 20; i++) pts.push(vEq + i * 0.02);
		const vs = pts.filter((v) => v >= 0 && v <= vEnd).sort((a, b) => a - b);
		if (vEnd > 0) vs.push(vEnd);
		return vs.map((v, i) => `${i === 0 ? 'M' : 'L'} ${gx(v).toFixed(1)} ${gy(curvePH(s.type, v, ca, va, cb, Ka, Kb)).toFixed(1)}`).join(' ');
	};

	const epPH = (s: CurveSeries) => curvePH(s.type, vEq, ca, va, cb, Ka, Kb);

	if (grid) {
		const cols2 = 2;
		const pw = 330, ph = 200;
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Four titration curve types" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				{series.map((s, i) => {
					const ox = 50 + (i % cols2) * (pw + 44), oy = 26 + Math.floor(i / cols2) * (ph + 62);
					const px = (v: number) => ox + (v / vMax) * pw;
					const py = (p: number) => oy + ph - (p / 14) * ph;
					const c = cols[i % cols.length];
					const vEnd = penV(s);
					const pts: number[] = [];
					for (let k = 0; k <= 120; k++) pts.push((vMax * k) / 120);
					for (let k = -20; k <= 20; k++) pts.push(vEq + k * 0.02);
					const vs = pts.filter((v) => v >= 0 && v <= vEnd).sort((a, b) => a - b);
					if (vEnd > 0) vs.push(vEnd);
					const d = vs.map((v, k) => `${k === 0 ? 'M' : 'L'} ${px(v).toFixed(1)} ${py(curvePH(s.type, v, ca, va, cb, Ka, Kb)).toFixed(1)}`).join(' ');
					const done = ease(frame, s.at + (s.dur ?? 110), s.at + (s.dur ?? 110) + 12);
					const ep = epPH(s);
					const on = fadeAt(frame, s.at - 20, 14);
					return (
						<g key={i} opacity={0.25 + 0.75 * on}>
							<rect x={ox - 8} y={oy + ph + 30} width={pw + 16} height={10} rx={4} fill="#bdb8ae" />
							<rect x={ox} y={oy} width={pw} height={ph} rx={6} fill="#ffffff" opacity={0.75} />
							<line x1={ox} y1={py(7)} x2={ox + pw} y2={py(7)} stroke={TOK.inkMute} strokeWidth={1.2} strokeDasharray="5 5" />
							<line x1={ox} y1={oy + ph} x2={ox + pw} y2={oy + ph} stroke={TOK.inkMute} strokeWidth={2} />
							<line x1={ox} y1={oy} x2={ox} y2={oy + ph} stroke={TOK.inkMute} strokeWidth={2} />
							{[0, 7, 14].map((p) => <text key={p} x={ox - 8} y={py(p) + 6} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{p}</text>)}
							<text x={ox + pw / 2} y={oy + ph + 22} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>volume of base →</text>
							<text x={ox + 8} y={oy + 22} fill={c} fontSize={18} fontWeight={800}>{s.label}</text>
							{vEnd > 0 && <path d={d} fill="none" stroke={c} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />}
							<g opacity={done}>
								<line x1={px(vEq)} y1={oy + ph} x2={px(vEq)} y2={py(ep)} stroke={c} strokeWidth={1.5} strokeDasharray="4 4" />
								<circle cx={px(vEq)} cy={py(ep)} r={7 + idlePulse(frame + i * 13) * 1.5} fill="#ffffff" stroke={c} strokeWidth={3} />
								{s.epLabel && (
									<text x={px(vEq) + 12} y={py(ep) + (ep > 7.5 ? 22 : ep < 6.5 ? -10 : 24)} fill={c} fontSize={16} fontWeight={800}>{s.epLabel.replace('{pH}', ep.toFixed(2))}</text>
								)}
							</g>
						</g>
					);
				})}
			</svg>
		);
	}

	const single = series.length === 1 ? series[0] : null;
	const liveV = single ? penV(single) : 0;
	const livePH = single ? curvePH(single.type, liveV, ca, va, cb, Ka, Kb) : 7;

	const halfPH = single ? curvePH(single.type, vEq / 2, ca, va, cb, Ka, Kb) : 0;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Titration curve: pH against volume of base added" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />

			{/* Graph card on a stone ledge */}
			<g opacity={fadeAt(frame, 0, 14)}>
				<rect x={GX0 - 60} y={GY1 + 50} width={GX1 - GX0 + 100} height={14} rx={6} fill="#bdb8ae" />
				<rect x={GX0 - 60} y={GY1 + 60} width={GX1 - GX0 + 100} height={8} rx={4} fill="#8f8b83" />
				<rect x={GX0} y={GY0} width={GX1 - GX0} height={GY1 - GY0} fill="#ffffff" opacity={0.7} rx={6} />
				{[0, 2, 4, 6, 8, 10, 12, 14].map((p) => (
					<g key={p}>
						<line x1={GX0} y1={gy(p)} x2={GX1} y2={gy(p)} stroke={p === 7 ? TOK.inkMute : 'rgba(0,0,0,0.07)'} strokeWidth={p === 7 ? 1.5 : 1} strokeDasharray={p === 7 ? '5 5' : undefined} />
						<text x={GX0 - 10} y={gy(p) + 6} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={700}>{p}</text>
					</g>
				))}
				{Array.from({length: Math.floor(vMax / 10) + 1}, (_, i) => i * 10).map((v) => (
					<text key={v} x={gx(v)} y={GY1 + 24} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>{v}</text>
				))}
				<line x1={GX0} y1={GY1} x2={GX1} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
				<line x1={GX0} y1={GY0} x2={GX0} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
				<text x={(GX0 + GX1) / 2} y={GY1 + 46} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>volume of base added (mL)</text>
				<text x={GX0 - 40} y={(GY0 + GY1) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} transform={`rotate(-90 ${GX0 - 40} ${(GY0 + GY1) / 2})`}>pH</text>
			</g>

			{/* Buffer region */}
			{single && markers.bufferAt !== undefined && (
				<g opacity={fadeAt(frame, markers.bufferAt, 16)}>
					<rect x={gx(vEq * 0.2)} y={gy(halfPH + 1.25)} width={gx(vEq * 0.8) - gx(vEq * 0.2)} height={gy(halfPH - 1.25) - gy(halfPH + 1.25)} rx={10} fill={theme.accent} opacity={0.1 + 0.05 * idlePulse(frame)} />
					<text x={gx(vEq * 0.2) + 4} y={gy(halfPH + 1.25) - 10} fill={theme.accent} fontSize={17} fontWeight={800}>buffer region</text>
				</g>
			)}

			{/* Curves */}
			{series.map((s, i) => {
				const v = penV(s);
				if (v <= 0) return null;
				const c = single ? theme.accent : cols[i % cols.length];
				const done = ease(frame, s.at + (s.dur ?? 110), s.at + (s.dur ?? 110) + 12);
				const ep = epPH(s);
				const endPH = curvePH(s.type, vMax, ca, va, cb, Ka, Kb);
				return (
					<g key={i}>
						<path d={pathFine(s, v)} fill="none" stroke={c} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
						{!single && (
							<text x={GX1 + 10} y={gy(endPH) + 6 + (s.type === 'WA-WB' ? 14 : s.type === 'SA-WB' ? -2 : s.type === 'WA-SB' ? 12 : -8)} fill={c} fontSize={17} fontWeight={800} opacity={done}>{s.label}</text>
						)}
						{epDots && (
							<g opacity={done}>
								<circle cx={gx(vEq)} cy={gy(ep)} r={7} fill="#ffffff" stroke={c} strokeWidth={3} />
								{s.epLabel && (
									<text x={gx(vEq) + (s.type === 'SA-WB' ? -12 : 12)} y={gy(ep) + 6} textAnchor={s.type === 'SA-WB' ? 'end' : 'start'} fill={c} fontSize={16} fontWeight={800}>{s.epLabel.replace('{pH}', ep.toFixed(2))}</text>
								)}
							</g>
						)}
					</g>
				);
			})}

			{/* Reading markers (single curve) */}
			{single && markers.epAt !== undefined && (() => {
				const t = ease(frame, markers.epAt, markers.epAt + 20);
				const ep = epPH(single);
				return (
					<g opacity={t}>
						<line x1={gx(vEq)} y1={GY1} x2={gx(vEq)} y2={GY1 - (GY1 - gy(ep)) * t} stroke={TOK.amber} strokeWidth={3} strokeDasharray="7 6" />
						<circle cx={gx(vEq)} cy={gy(ep)} r={8 + idlePulse(frame) * 2} fill="#ffffff" stroke={TOK.amber} strokeWidth={3.5} />
						<text x={gx(vEq) + 14} y={gy(ep) + 34} fill={TOK.amberInk} fontSize={18} fontWeight={800}>equivalence: {vEq.toFixed(2)} mL</text>
						<text x={gx(vEq) + 14} y={gy(ep) + 56} fill={TOK.amberInk} fontSize={16} fontWeight={800}>middle of the jump</text>
					</g>
				);
			})()}
			{single && markers.halfAt !== undefined && (() => {
				const t = ease(frame, markers.halfAt, markers.halfAt + 20);
				const t2 = fadeAt(frame, markers.pKaAt ?? markers.halfAt + 40);
				return (
					<g opacity={t}>
						<line x1={gx(vEq / 2)} y1={GY1} x2={gx(vEq / 2)} y2={gy(halfPH)} stroke={theme.accent} strokeWidth={2.5} strokeDasharray="6 6" />
						<text x={gx(vEq / 2)} y={GY1 - 10} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800}>½ × {vEq.toFixed(2)} = {(vEq / 2).toFixed(2)} mL</text>
						<g opacity={t2}>
							<line x1={GX0} y1={gy(halfPH)} x2={gx(vEq / 2)} y2={gy(halfPH)} stroke={theme.accent} strokeWidth={2.5} strokeDasharray="6 6" />
							<circle cx={gx(vEq / 2)} cy={gy(halfPH)} r={7} fill="#ffffff" stroke={theme.accent} strokeWidth={3} />
							<text x={gx(vEq / 2) + 14} y={gy(halfPH) + 28} fill={theme.accent} fontSize={18} fontWeight={800}>pH = pKa = {halfPH.toFixed(2)}</text>
						</g>
					</g>
				);
			})()}

			{/* Burette dripping into a flask, with a live pH readout */}
			{single && apparatus && (() => {
				const bx = 96, bTop = 30, bH = 250;
				const frac = liveV / vMax;
				const drip = liveV > 0 && liveV < vMax - 0.01;
				const dropY = interpolate((frame % 12) / 12, [0, 1], [bTop + bH + 30, 380], clamp);
				return (
					<g opacity={fadeAt(frame, 0, 14)}>
						<line x1={bx - 40} y1={16} x2={bx - 40} y2={470} stroke="#6d7278" strokeWidth={5} />
						<line x1={bx - 40} y1={bTop + 20} x2={bx - 12} y2={bTop + 20} stroke="#6d7278" strokeWidth={4} />
						<rect x={bx - 12} y={bTop} width={24} height={bH} rx={5} fill="rgba(220,236,246,0.6)" stroke="rgba(70,90,110,0.55)" strokeWidth={2} />
						<rect x={bx - 9} y={bTop + 6 + (bH - 12) * frac} width={18} height={(bH - 12) * (1 - frac)} rx={3} fill="rgba(63,111,216,0.3)" />
						{Array.from({length: 11}, (_, i) => <line key={i} x1={bx - 12} y1={bTop + 6 + (i * (bH - 12)) / 10} x2={bx - 4} y2={bTop + 6 + (i * (bH - 12)) / 10} stroke="rgba(70,90,110,0.6)" strokeWidth={1.2} />)}
						<path d={`M ${bx - 6} ${bTop + bH} L ${bx - 3} ${bTop + bH + 22} L ${bx + 3} ${bTop + bH + 22} L ${bx + 6} ${bTop + bH} Z`} fill="rgba(70,90,110,0.55)" />
						{drip && <circle cx={bx} cy={dropY} r={4} fill="rgba(63,111,216,0.7)" />}
						<DioramaPlinth id={ID} cx={bx} cy={452} rx={78} />
						<path d={`M ${bx - 16} 360 L ${bx - 16} 392 L ${bx - 56} 446 Q ${bx - 60} 454 ${bx - 50} 454 L ${bx + 50} 454 Q ${bx + 60} 454 ${bx + 56} 446 L ${bx + 16} 392 L ${bx + 16} 360`} fill="rgba(220,236,246,0.35)" stroke="rgba(70,90,110,0.55)" strokeWidth={2.5} />
						<path d={`M ${bx - 38} 420 L ${bx - 56} 446 Q ${bx - 60} 454 ${bx - 50} 454 L ${bx + 50} 454 Q ${bx + 60} 454 ${bx + 56} 446 L ${bx + 38} 420 Z`} fill={`${phColor(livePH)}55`} />
						<rect x={bx + 26} y={300} width={90} height={40} rx={9} fill="#20262b" />
						<text x={bx + 71} y={327} textAnchor="middle" fill="#cfe6d8" fontSize={20} fontWeight={800} fontFamily="ui-monospace, monospace">{livePH.toFixed(2)}</text>
						<text x={bx + 71} y={292} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>pH</text>
						<text x={bx + 71} y={362} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{liveV.toFixed(1)} mL</text>
					</g>
				);
			})()}
		</svg>
	);
};
