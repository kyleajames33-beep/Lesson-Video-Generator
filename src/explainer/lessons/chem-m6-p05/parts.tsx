// Drawing parts for M6 P05 (prepare and test a buffer). One visual system with P04, P03 and P02 and, through them, C01
// to C16 (re-exported): the C05 meter with a movable coded probe, the C07 full meter, volumetric pipette and flask fill,
// chips, crossed chips, question card, countdown, key notes, the P02 risk table and cards, the P03 bottles and stable
// dot, the P04 change bars, small vertical axes and probe arc; and from C11 the ratio bar and the graduated pipette.
// New here:
// - FillBeaker: the beaker plate with a coded liquid whose level rises (clipped to the inside of the glass);
// - RBottle: the reagent bottle (the buffer-bottle plate) with a coded coloured band and two label lines;
// - TabBeaker: a grid beaker with a coded label and a coloured tab (buffer teal, water grey).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {BEAKER, BEAKER_LIQ, BUFFER, BUF_N} from './assets';
import {INK, INK_SOFT, PicH, Sx, natP, picW, vis} from '../chem-m6-p04/parts';

export * from '../chem-m6-p04/parts';
export {RatioBar, GradPip, ratioW, BUF, WATERL} from '../chem-m6-c11/parts';

export const ACIDC = '#e0a63a', ETHC = '#a993cf', WATERC = '#9cc8e6', BUFTINT = '#cfe6df', BUF_TAB = '#1f8a7a', WATER_TAB = '#9a948a';

// ---------- beaker with a rising coded liquid ----------
let fbId = 0;
const LIQ_TOP = 880, LIQ_BOT = 1585;
/** level: fraction (0 empty, 1 the usual fill line) as a function of frame. */
export const FillBeaker: React.FC<{x: number; y: number; h: number; level: (f: number) => number; tint?: string; o?: number}> = ({x, y, h, level, tint = WATERC, o = 1}) => {
	const f = useCurrentFrame();
	const id = React.useMemo(() => `fb-${++fbId}`, []);
	if (o <= 0.01) return null;
	const pts = BEAKER_LIQ.map(([nx, ny]) => natP(BEAKER, x, y, h, nx, ny));
	const L = Math.max(0, level(f));
	const ny = LIQ_BOT - (LIQ_BOT - LIQ_TOP) * L;
	const ly = natP(BEAKER, x, y, h, 0, ny)[1];
	const w = picW(BEAKER, h);
	return (
		<g opacity={o}>
			<PicH p={BEAKER} x={x} y={y} h={h} />
			<clipPath id={id}><path d={`M${pts.map(p => p.join(',')).join(' L')} Z`} /></clipPath>
			{L > 0.005 ? (
				<g clipPath={`url(#${id})`}>
					<rect x={x} y={ly} width={w} height={y + h - ly} fill={tint} opacity={0.5} />
					<line x1={x} y1={ly} x2={x + w} y2={ly} stroke="#8fb9d8" strokeWidth={3} opacity={0.8} />
				</g>
			) : null}
		</g>
	);
};

// ---------- reagent bottle with a coded band ----------
export const rbW = (h: number) => picW(BUFFER, h);
export const RBottle: React.FC<{x: number; y: number; h: number; lines: string[]; color: string; at: number; out?: number; o?: number; glow?: number; size?: number}> = ({x, y, h, lines, color, at, out, o = 1, glow, size}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const a = natP(BUFFER, x, y, h, BUF_N.x0, BUF_N.y0), b = natP(BUFFER, x, y, h, BUF_N.x1, BUF_N.y1);
	const bh = b[1] - a[1];
	const g = glow === undefined ? 0 : Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - glow) / 40)) * Math.PI));
	const s = size ?? Math.max(15, h * 0.05);
	return (
		<g opacity={v}>
			{g > 0.01 ? <ellipse cx={(a[0] + b[0]) / 2} cy={a[1] + bh / 2} rx={(b[0] - a[0]) * 0.8} ry={bh * 0.9} fill={color} opacity={0.35 * g} /> : null}
			<PicH p={BUFFER} x={x} y={y} h={h} />
			<rect x={a[0] + 4} y={a[1] + bh * 0.06} width={b[0] - a[0] - 8} height={bh * 0.26} fill={color} opacity={0.88} />
			{lines.map((t, i) => <Sx key={i} x={(a[0] + b[0]) / 2} y={a[1] + bh * (0.58 + i * 0.27)} text={t} size={s} color={INK} anchor="middle" weight={800} at={-1000} />)}
		</g>
	);
};

// ---------- grid beaker with a tab and label ----------
export const TabBeaker: React.FC<{x: number; y: number; h: number; label: string; tab: string; at: number; lab?: number; dimAt?: number; level?: (f: number) => number; tint?: string; size?: number; o?: number}> = ({x, y, h, label, tab, at, lab, dimAt, level = () => 1, tint, size = 24, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const w = picW(BEAKER, h);
	const d = dimAt === undefined ? 0 : prog(f, dimAt, 14);
	const la = lab ?? at;
	const ly = y + h + size + 12;
	const tw = label.length * size * 0.5;
	return (
		<g opacity={v}>
			<FillBeaker x={x} y={y} h={h} level={level} tint={tint} />
			<g opacity={1 - 0.6 * d}>
				<rect x={x + w / 2 - tw / 2 - 20} y={ly - size * 0.8} width={11} height={size * 0.95} rx={3} fill={tab} opacity={prog(f, la, 10)} />
				<Sx x={x + w / 2 - tw / 2} y={ly} text={label} size={size} color={INK} weight={700} at={la} />
			</g>
		</g>
	);
};
void INK_SOFT;
