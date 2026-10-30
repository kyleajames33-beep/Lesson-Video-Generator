// M8 B02 drawing parts: the heat-balance beam in its fixed top-right place, the aligned warm and cold skin pair (one box,
// cross-fade in place), plate points, the small b01 loop-ring thumbnail, the Queensland coast outline (coded, outline
// only), a coded shade patch and the two abstract mammal head outlines (no faces). b01 and shared Module 8 parts are
// imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, CTag, CardBox, ColdRing, DLbl, DrawPath, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, Pl, PlateB, StepChip, Sx, TEAL, Thermo, UpDown, WText, Zoom, pbPt, prog, scribbleEllipse,
	smooth, vis, lerp, clamp01,
} from '../bio-m8-b01/parts';
import type {PB, RG} from '../bio-m8-b01/parts';
import {COOL, HeatBalance, WARM} from '../m8-shared/parts';
import {FEAT, PLATES} from './assets';

export {
	AMBER, AMBER_INK, CTag, CardBox, ColdRing, DLbl, DrawPath, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, Pl, PlateB, StepChip, Sx, TEAL, Thermo, UpDown, WText, Zoom, pbPt, prog, scribbleEllipse,
	smooth, vis, lerp, clamp01, COOL, WARM, FEAT, PLATES,
};
export type {PB, RG};
export const HEAD = 'How do endotherms regulate body temperature?';

/** The beam, top right, from scene 3 to 10. */
export const Balance: React.FC<{tilt: (f: number) => number; at?: number; o?: number; lit?: {side: 'l' | 'r'; at: number; out?: number}[]}> = ({tilt, at = -100, o = 1, lit}) => (
	<HeatBalance x={1520} y={150} L={250} s={0.72} tilt={tilt} at={at} o={o} lit={lit} />
);
/** Piecewise tilt: keys [frame, degrees], eased between. */
export const tiltOf = (keys: [number, number][]) => (f: number) => {
	let v = keys[0][1];
	for (let i = 1; i < keys.length; i++) v = lerp(v, keys[i][1], smooth(prog(f, keys[i][0], 26)));
	return v;
};

/** The skin pair at one place; `cold` is the cross-fade amount (0 warm, 1 cold). */
export const SkinPair: React.FC<{cx: number; cy: number; w: number; cold?: number; o?: number; dim?: number}> = ({cx, cy, w, cold = 0, o = 1, dim = 0}) => (o <= 0.01 ? null : (
	<g opacity={o * (1 - 0.5 * dim)}>
		<PlateB p={PLATES.warm} cx={cx} cy={cy} w={w} o={1 - cold} />
		<PlateB p={PLATES.cold} cx={cx} cy={cy} w={w} o={cold} />
	</g>
));
export const skinPt = (cx: number, cy: number, w: number) => pbPt(PLATES.warm, cx, cy, w);

/** The small b01 loop thumbnail at the upper left. */
export const RingThumb: React.FC<{lit?: (number | undefined)[]; at?: number; o?: number; minus?: number; id: string; g?: RG}> = ({lit = [], at = -100, o = 1, minus, id, g = {cx: 190, cy: 300, R: 76, r: 26}}) => (
	<ColdRing id={id} g={g} at={at} o={o} c={{lit, minus: minus === undefined ? undefined : {at: minus, signAt: minus + 6}}} />
);

// ---------- Queensland coast ----------
const QLD: [number, number][] = [[142.5, -10.7], [143.5, -12.6], [143.8, -14.2], [145.3, -15.4], [145.8, -16.9], [146.3, -18.6], [147.2, -19.4], [148.8, -20.3], [149.6, -21.6], [150.8, -22.6], [151.6, -24.1], [153.1, -25.4], [153.6, -28.2], [141, -29], [141, -26], [138, -26], [138, -17.5], [140.8, -17.4], [141.6, -15], [141.6, -12.5]];
export const QldMap: React.FC<{x: number; y: number; w: number; h: number; at: number; o?: number; dotAt?: number}> = ({x, y, w, h, at, o = 1, dotAt}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const P = ([lo, la]: [number, number]): [number, number] => [x + 30 + ((lo - 137) / 17.5) * (w - 60), y + 30 + ((-10 - la) / 19.5) * (h - 60)];
	const d = 'M' + QLD.map(p => P(p).join(',')).join(' L') + ' Z';
	const [cx, cy] = P([145.8, -16.9]);
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={18} fill="#eef3f4" stroke="rgba(60,45,20,0.22)" strokeWidth={2} />
			<path d={d} fill="#fbf6ea" opacity={prog(f, at + 20, 20)} />
			<DrawPath d={d} at={at} dur={40} color={INK_SOFT} width={3} />
			<Sx x={x + w * 0.3} y={y + h * 0.66} text="Queensland" size={26} color={GREY_INK} anchor="middle" weight={600} at={at + 20} />
			{dotAt !== undefined && f >= dotAt ? (
				<g opacity={prog(f, dotAt, 10)}>
					<circle cx={cx} cy={cy} r={11} fill={AMBER} stroke="#fffdf8" strokeWidth={3} />
					<Sx x={cx + 18} y={cy + 8} text="Cairns" size={30} color={INK} weight={700} at={-1000} />
				</g>
			) : null}
		</g>
	);
};
export const qldPt = (x: number, y: number, w: number, h: number): [number, number] => [x + 30 + ((145.8 - 137) / 17.5) * (w - 60), y + 30 + ((-10 + 16.9) / 19.5) * (h - 60)];

/** A soft shade patch that falls over a plate. */
export const Shade: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; out?: number}> = ({cx, cy, rx, ry, at, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 20);
	return v > 0.01 ? <ellipse cx={cx} cy={cy - (1 - smooth(prog(f, at, 20))) * 60} rx={rx} ry={ry} fill="#3f5d6e" opacity={0.2 * v} /> : null;
};
/** Abstract mammal head outline (no eyes, no face): big = large thin ears. */
export const HeadOutline: React.FC<{cx: number; cy: number; big: boolean; at: number; o?: number}> = ({cx, cy, big, at, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const ear = big
		? `M${cx - 60},${cy - 60} C${cx - 200},${cy - 260} ${cx - 280},${cy - 120} ${cx - 90},${cy - 20} M${cx + 60},${cy - 60} C${cx + 200},${cy - 260} ${cx + 280},${cy - 120} ${cx + 90},${cy - 20}`
		: `M${cx - 70},${cy - 70} C${cx - 110},${cy - 120} ${cx - 140},${cy - 70} ${cx - 92},${cy - 40} M${cx + 70},${cy - 70} C${cx + 110},${cy - 120} ${cx + 140},${cy - 70} ${cx + 92},${cy - 40}`;
	const head = big ? `M${cx - 90},${cy} C${cx - 90},${cy - 110} ${cx + 90},${cy - 110} ${cx + 90},${cy} C${cx + 80},${cy + 90} ${cx + 20},${cy + 120} ${cx},${cy + 130} C${cx - 20},${cy + 120} ${cx - 80},${cy + 90} ${cx - 90},${cy} Z`
		: `M${cx - 120},${cy} C${cx - 120},${cy - 130} ${cx + 120},${cy - 130} ${cx + 120},${cy} C${cx + 120},${cy + 100} ${cx - 120},${cy + 100} ${cx - 120},${cy} Z`;
	return (
		<g opacity={o}>
			<path d={head} fill="#f3ead9" opacity={prog(f, at + 10, 14)} />
			<DrawPath d={head} at={at} dur={22} color={INK} width={4} />
			<DrawPath d={ear} at={at + 10} dur={22} color={INK} width={4} />
		</g>
	);
};
