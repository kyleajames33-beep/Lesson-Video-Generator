import React from 'react';
import {Easing, interpolate, staticFile, useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/b3a/measured/lesson.json';
import {AMBER, AMBER_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, Plate, prog, rng} from '../../kit';
import type {CueScene} from '../../cues';
import * as A from './assets';

export {
	AMBER, AMBER_INK, Arrow, BLUE, Body, Card, Chip, DrawPath, dim, Enter, FONT_DISPLAY, FONT_HAND, GREEN, HandText, Heading, INK,
	INK_SOFT, Label, Overlay, prog, RED, Underline, W, H,
} from '../bio-m5-b01/shared';
export {Scribble, Trail, EggDot} from '../bio-m5-b02a/shared';
export {Cross, Tick, Fade, FadeDiv, along, pathOf, Line, Pill, Stamp, WrongChip} from '../bio-m5-b02c/shared';
import {along} from '../bio-m5-b02c/shared';

export const S = (id: string): CueScene & {durationInFrames: number} => {
	const s = (lesson.scenes as unknown as (CueScene & {durationInFrames: number})[]).find(x => x.id === id);
	if (!s) throw new Error(`scene ${id} missing`);
	return s;
};

// ---------- colours (amber is always progesterone, teal is hCG and the embryo's own tissue) ----------
export const TEAL = '#2a9d8f';
export const TEAL_INK = '#1f7a6f';
export const YELLOW = '#e3b21d';
export const ROSE = '#d9788a';
export const PURPLE = '#7b4fb3';
export const O2 = '#7fb0d6';
export const GREYTAG = '#8d949b';
export const SPERM_BLUE = '#3b6fa8';
export const EGG_LINE = '#c4432f';
export const VESSEL = '#c4432f';
export const vis = (f: number, from: number, to?: number, d = 14) => prog(f, from, d) * (to === undefined ? 1 : 1 - prog(f, to, d));

// ---------- plates ----------
export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
const SQ: [number, number] = [1800, 1800];
const CLB: [number, number, number, number] = [213, 212, 1374, 1370];
const IMB: [number, number, number, number] = [187, 236, 1427, 784];
const TRB: [number, number, number, number] = [219, 256, 1481, 777];
const TRN: [number, number] = [1920, 1280];
export const PL: Record<string, PDef> = {
	cl1: {src: A.CLEAVAGE[0], nat: SQ, box: CLB}, cl2: {src: A.CLEAVAGE[1], nat: SQ, box: CLB}, cl3: {src: A.CLEAVAGE[2], nat: SQ, box: CLB},
	cl4: {src: A.CLEAVAGE[3], nat: SQ, box: CLB}, cl5: {src: A.CLEAVAGE[4], nat: SQ, box: CLB},
	im1: {src: A.IMPLANT[0], nat: [1800, 1200], box: IMB}, im2: {src: A.IMPLANT[1], nat: [1800, 1200], box: IMB}, im3: {src: A.IMPLANT[2], nat: [1800, 1200], box: IMB},
	fetus: {src: A.FETUS, nat: SQ, box: [328, 181, 1143, 1439]},
	tract: {src: A.TRACT_THICK, nat: TRN, box: TRB},
	tractThin: {src: A.TRACT_THIN, nat: TRN, box: TRB},
	// crops of the tract plate (natural pixels): the left ovary with its follicle and funnel, and the uterus body
	ovary: {src: A.TRACT_THICK, nat: TRN, box: [263, 404, 444, 222]},
	uterus: {src: A.TRACT_THICK, nat: TRN, box: [708, 315, 503, 563]},
	// the implantation plate cropped to the blastocyst and the lining around it (box in natural pixels)
	im3crop: {src: A.IMPLANT[2], nat: [1800, 1200], box: [187, 547, 1427, 473]},
	// the head and upper body of the fetus
	fetusHead: {src: A.FETUS, nat: SQ, box: [420, 330, 560, 560]},
	// brief 27 painted icons (alpha boxes measured with PIL, alpha > 20)
	sperm: {src: A.SPERM, nat: [2200, 1600], box: [264, 640, 1672, 318]},
	egg: {src: A.EGG, nat: [2000, 2000], box: [240, 252, 1519, 1496]},
	eggOpen: {src: A.EGG_OPEN, nat: [2000, 2000], box: [247, 252, 1513, 1496]},
	eggNuc: {src: A.EGG_NUC, nat: [2000, 2000], box: [819, 833, 363, 368]},
	test1: {src: A.TEST[0], nat: [2200, 600], box: [221, 180, 1758, 240]},
	test2: {src: A.TEST[1], nat: [2200, 600], box: [220, 179, 1760, 242]},
	embryo: {src: A.EMBRYO, nat: [1200, 1200], box: [266, 144, 668, 912]},
	dish: {src: A.DISH, nat: [1600, 800], box: [193, 100, 1215, 599]},
};
const have = (a: PDef) => A.HAVE.has(a.src);
/** SVG version of PArt: draws the alpha box of a plate at (x, y) with width w (no HTML wrapper, so it can sit inside an svg). */
export const SArt: React.FC<{a: PDef; x: number; y: number; w: number; o?: number}> = ({a, x, y, w, o = 1}) => {
	const k = w / a.box[2];
	return <image href={staticFile(a.src)} x={x - a.box[0] * k} y={y - a.box[1] * k} width={a.nat[0] * k} height={a.nat[1] * k} opacity={o} />;
};
/** Same, but fitted (contain) into a w x h slot and centred. */
export const SFit: React.FC<{a: PDef; x: number; y: number; w: number; h: number; o?: number}> = ({a, x, y, w, h, o = 1}) => {
	const k = Math.min(w / a.box[2], h / a.box[3]);
	return <SArt a={a} x={x + (w - a.box[2] * k) / 2} y={y + (h - a.box[3] * k) / 2} w={a.box[2] * k} o={o} />;
};
export const pH = (a: PDef, w: number) => (w * a.box[3]) / a.box[2];

/** A painted plate (crop of its alpha box), or a labelled dashed stand-in when the file is not in HAVE. */
export const PArt: React.FC<{a: PDef; x: number; y: number; w: number; o?: number; style?: React.CSSProperties}> = ({a, x, y, w, o = 1, style}) => {
	if (!A.HAVE.has(a.src)) {
		return <div style={{position: 'absolute', left: x, top: y, width: w, height: pH(a, w), border: `4px dashed ${INK_SOFT}`, borderRadius: 24, opacity: o, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_HAND, fontSize: 40, color: INK_SOFT, ...style}}>plate not delivered</div>;
	}
	return <Plate src={a.src} natural={a.nat} crop={a.box} width={w} style={{left: x, top: y, opacity: o, ...style}} />;
};

/** Crossfading sequence of plates on one placement. `at[k]` is the frame the (k+1)th plate starts to fade in. */
export const PSeq: React.FC<{arts: PDef[]; x: number; y: number; w: number; at: number[]; dur?: number; o?: number; style?: React.CSSProperties}> = ({arts, x, y, w, at, dur = 22, o = 1, style}) => {
	const f = useCurrentFrame();
	return (
		<>
			{arts.map((a, i) => {
				const inn = i === 0 ? 1 : prog(f, at[i - 1], dur);
				const out = i < arts.length - 1 ? 1 - prog(f, at[i], dur) : 1;
				return <PArt key={i} a={a} x={x} y={y} w={w} o={inn * out * o} style={style} />;
			})}
		</>
	);
};

/** Round crop of a plate (an icon-sized circle). */
export const RoundPlate: React.FC<{a: PDef; x: number; y: number; d: number; o?: number; ring?: string; zoom?: number; shift?: [number, number]}> = ({a, x, y, d, o = 1, ring, zoom = 1, shift = [0, 0]}) => (
	<div style={{position: 'absolute', left: x, top: y, width: d, height: d, borderRadius: '50%', overflow: 'hidden', opacity: o, background: '#f1eadb', border: `6px solid ${ring ?? INK_SOFT}`, boxSizing: 'border-box'}}>
		<PArt a={a} x={shift[0] - (d * (zoom - 1)) / 2} y={shift[1] - (d * (zoom - 1)) / 2} w={d * zoom} />
	</div>
);

// ---------- camera ----------
/** Keyframes [frame, scale, focus x, focus y]: the focus point is held at the screen centre. */
export const Cam: React.FC<{keys: [number, number, number, number][]; children: React.ReactNode}> = ({keys, children}) => {
	const f = useCurrentFrame();
	const fr = keys.map(k => k[0]);
	const ease = Easing.inOut(Easing.cubic);
	const get = (i: 1 | 2 | 3) => (keys.length === 1 ? keys[0][i] : interpolate(f, fr, keys.map(k => k[i]), {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease}));
	const s = get(1), fx = get(2), fy = get(3);
	return <div style={{position: 'absolute', inset: 0, transformOrigin: '0 0', transform: `translate(${960 - fx * s}px, ${540 - fy * s}px) scale(${s})`}}>{children}</div>;
};

// ---------- the reproductive tract ----------
export type TP = {x: number; y: number; w: number};
/** Map tract "thumb" coordinates (a 1000 wide space across the alpha box) to screen. */
export const tt = (p: TP) => (tx: number, ty: number): [number, number] => [p.x + (tx * p.w) / 1000, p.y + (ty * p.w) / 1000];
export const tractH = (w: number) => pH(PL.tract, w);
/** Key points of the tract in thumb coordinates. */
export const TR = {
	follicle: [137, 195] as [number, number],
	ovaryL: [185, 205] as [number, number],
	funnel: [90, 150] as [number, number],
	fert: [40, 88] as [number, number],
	uterus: [500, 235] as [number, number],
	liningL: [450, 200] as [number, number],
	liningR: [550, 200] as [number, number],
	cavity: [500, 330] as [number, number],
	tube: [[345, 84], [320, 74], [262, 48], [190, 20], [130, 12], [78, 30], [46, 70], [38, 110], [58, 140]] as [number, number][],
	eggPath: [[137, 195], [112, 168], [78, 144], [50, 118], [40, 88]] as [number, number][],
};
const WALL = '#e0706f';
/** Thick tract plate, with the thin-lining pair drawn over it by `thin` (0..1): the painted plate if delivered, else a coded wash. */
export const TractPair: React.FC<{p: TP; thin?: number; o?: number; style?: React.CSSProperties}> = ({p, thin = 0, o = 1, style}) => {
	const h = tractH(p.w);
	return (
		<>
			<PArt a={PL.tract} x={p.x} y={p.y} w={p.w} o={o} style={style} />
			{thin > 0 ? (
				A.HAVE.has(A.TRACT_THIN) ? <PArt a={PL.tractThin} x={p.x} y={p.y} w={p.w} o={thin * o} style={style} /> : (
					<svg width={p.w} height={h} viewBox="0 0 1000 525" style={{position: 'absolute', left: p.x, top: p.y, opacity: thin * o, ...style}}>
						<path d="M398,74 L470,78 C486,84 488,100 487,150 L489,300 L491,386 L478,394 C470,380 462,330 452,290 C440,240 430,190 418,150 C410,120 402,95 398,74Z" fill={WALL} />
						<path d="M602,74 L530,78 C514,84 512,100 513,150 L511,300 L509,386 L522,394 C530,380 538,330 548,290 C560,240 570,190 582,150 C590,120 598,95 602,74Z" fill={WALL} />
						<path d="M372,70 C420,60 580,60 628,70 L628,84 C580,76 420,76 372,84Z" fill={WALL} />
					</svg>
				)
			) : null}
		</>
	);
};

/** A neutral coded uterus outline (no lining detail), in tract thumb space, placed on a TP. */
export const UterusOutline: React.FC<{p: TP; o?: number; draw?: number}> = ({p, o = 1, draw = 1}) => {
	const h = tractH(p.w);
	return (
		<svg width={p.w} height={h} viewBox="0 0 1000 525" style={{position: 'absolute', left: p.x, top: p.y, opacity: o, overflow: 'visible'}}>
			<path d="M346,92 C372,30 628,30 654,92 C682,190 612,300 566,392 L552,470 L448,470 L434,392 C388,300 318,190 346,92Z" fill="#fffdf8" fillOpacity={0.6} stroke={INK_SOFT} strokeWidth={5} strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - draw} />
			<path d="M500,150 C480,220 470,300 478,380 M500,150 C520,220 530,300 522,380" fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="2 10" strokeLinecap="round" opacity={draw} />
		</svg>
	);
};

// ---------- numbered rail: 1 meet, 2 divide, 3 attach, 4 signal, 5 hand over ----------
export const RAIL = ['1 meet', '2 divide', '3 attach', '4 signal', '5 hand over'];
/** The rail grows: chips before `upTo` are already shown, chip `upTo` lands at `newAt`. */
export const Rail: React.FC<{upTo: number; newAt?: number; x?: number; y?: number}> = ({upTo, newAt = 0, x = 96, y = 896}) => {
	const f = useCurrentFrame();
	return (
		<div style={{position: 'absolute', left: x, top: y, display: 'flex', gap: 14}}>
			{RAIL.slice(0, upTo).map((t, i) => {
				const last = i === upTo - 1 && newAt > 0;
				const p = last ? prog(f, newAt, 14) : 1;
				const cur = last && f < newAt + 120;
				return (
					<div key={t} style={{height: 58, padding: '0 24px', borderRadius: 999, border: `4px solid ${cur ? AMBER : '#1f6fb2'}`, background: '#fffdf8', display: 'flex', alignItems: 'center', opacity: p, transform: `translateY(${(1 - p) * 16}px)`, boxShadow: '0 8px 18px rgba(60,45,20,0.10)', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: '#1f6fb2', lineHeight: 1, paddingBottom: 4, whiteSpace: 'nowrap'}}>{t}</div>
				);
			})}
		</div>
	);
};

// ---------- coded drawings ----------
/** A coded sperm facing right (head at x,y). `phase` ripples the tail. */
export const Sperm: React.FC<{x: number; y: number; s?: number; phase?: number; o?: number; tailO?: number; rot?: number; acro?: number}> = ({x, y, s = 1, phase = 0, o = 1, tailO = 1, rot = 0, acro = 1}) => {
	const pts: string[] = [];
	for (let i = 0; i <= 28; i++) {
		const u = i / 28;
		const px = -118 - u * 250;
		const py = Math.sin(u * 9 - phase) * (4 + u * 14);
		pts.push(`${i ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)}`);
	}
	if (have(PL.sperm)) {
		// painted sperm (plate 2200 x 1600): head centre at (1740, 834), neck cut at x 1530; the tail and mid piece sway about the neck
		const wave = Math.sin(phase) * 5;
		const part = (x0: number, x1: number) => (
			<svg x={x0} y={600} width={x1 - x0} height={400} viewBox={`${x0} 600 ${x1 - x0} 400`} overflow="hidden">
				<image href={staticFile(A.SPERM)} x={0} y={0} width={2200} height={1600} />
			</svg>
		);
		return (
			<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s * 0.27}) translate(-1740,-834)`} opacity={o}>
				<g opacity={tailO}><g transform={`rotate(${wave} 1530 834)`}>{part(250, 1530)}</g></g>
				{part(1530, 1960)}
			</g>
		);
	}
	return (
		<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`} opacity={o}>
			<path d={pts.join(' ')} fill="none" stroke="#4b6f9e" strokeWidth={7} strokeLinecap="round" opacity={tailO} />
			<g opacity={tailO}>
				<rect x={-122} y={-14} width={92} height={28} rx={14} fill="#f0b04a" stroke="#a9560e" strokeWidth={4} />
				{[-104, -88, -72, -56, -40].map(px => <path key={px} d={`M${px},-14 L${px + 8},14`} stroke="#a9560e" strokeWidth={4} />)}
			</g>
			<ellipse cx={0} cy={0} rx={42} ry={28} fill={SPERM_BLUE} stroke="#27466d" strokeWidth={5} />
			<path d="M16,-26 C44,-24 50,24 16,26 C30,12 30,-12 16,-26Z" fill="#cfe1f6" stroke="#27466d" strokeWidth={4} opacity={acro} />
		</g>
	);
};

/** A coded egg: wide outer layer (with an optional gap on the left), grainy cytoplasm and a nucleus. */
export const Egg: React.FC<{x: number; y: number; r?: number; gap?: number; nuc?: number; o?: number; grain?: boolean}> = ({x, y, r = 230, gap = 0, nuc = 1, o = 1, grain = true}) => {
	const dots = React.useMemo(() => {
		const rr = rng(11);
		return Array.from({length: 90}, () => { const a = rr() * Math.PI * 2; const d = Math.sqrt(rr()) * (r - 60); return [Math.cos(a) * d, Math.sin(a) * d, 2.5 + rr() * 3.5] as const; });
	}, [r]);
	if (have(PL.egg)) {
		// painted egg (2000 x 2000, centre 1000, outer layer 1519 px wide); the open plate fades in as the gap opens, the nucleus part fades in over the egg's own nucleus as the nuclei merge
		const k = (2 * r) / 1519;
		return (
			<g transform={`translate(${x},${y}) scale(${k}) translate(-1000,-1000)`} opacity={o}>
				<image href={staticFile(A.EGG)} x={0} y={0} width={2000} height={2000} />
				{gap > 0 ? <image href={staticFile(A.EGG_OPEN)} x={0} y={0} width={2000} height={2000} opacity={Math.min(1, gap)} /> : null}
				{nuc < 1 ? <image href={staticFile(A.EGG_NUC)} x={0} y={0} width={2000} height={2000} opacity={1 - nuc} transform="translate(1000 1017) scale(1.22) translate(-1000 -1017)" /> : null}
			</g>
		);
	}
	const ringR = r - 17;
	const half = (gap * 32 * Math.PI) / 180;
	const a0 = Math.PI + half, a1 = Math.PI + Math.PI * 2 - half;
	const arc = (a: number): [number, number] => [ringR * Math.cos(a), ringR * Math.sin(a)];
	const [sx, sy] = arc(a0), [ex, ey] = arc(a1);
	return (
		<g transform={`translate(${x},${y})`} opacity={o}>
			<circle r={r - 34} fill="#f6d9c8" stroke="#d9a08a" strokeWidth={4} />
			{grain ? dots.map((d, i) => <circle key={i} cx={d[0]} cy={d[1]} r={d[2]} fill="#e7b69f" opacity={0.8} />) : null}
			{gap <= 0 ? <circle r={ringR} fill="none" stroke="#f1e4da" strokeWidth={34} /> : <path d={`M${sx},${sy} A${ringR},${ringR} 0 1 1 ${ex},${ey}`} fill="none" stroke="#f1e4da" strokeWidth={34} strokeLinecap="round" />}
			{gap <= 0 ? <><circle r={r} fill="none" stroke="#c9b3a3" strokeWidth={4} /><circle r={r - 34} fill="none" stroke="#c9b3a3" strokeWidth={3} /></> : null}
			<g opacity={nuc}><circle r={50} fill="#b48ad2" stroke="#6c3f92" strokeWidth={5} opacity={0.92} /><circle r={19} fill="#6c3f92" opacity={0.7} /></g>
		</g>
	);
};

/** Single chromosome strip. */
export const Strip1: React.FC<{x: number; y: number; color: string; h?: number; o?: number}> = ({x, y, color, h = 70, o = 1}) => <rect x={x - 9} y={y - h / 2} width={18} height={h} rx={9} fill={color} stroke={INK} strokeWidth={2.5} opacity={o} />;

/** Dots that travel along a polyline, looping with `period` frames from `at`; `end` stops new dots appearing. */
export const Dots: React.FC<{pts: [number, number][]; at: number; n?: number; period?: number; color: string; r?: number; end?: number; once?: boolean}> = ({pts, at, n = 6, period = 60, color, r = 9, end, once}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return (
		<g>
			{Array.from({length: n}, (_, i) => {
				const raw = (f - at) / period - i / n;
				if (raw < 0) return null;
				if (once && raw > 1) return null;
				if (end !== undefined && f > end && raw % 1 < (f - end) / period) return null;
				const t = once ? raw : raw % 1;
				const [px, py] = along(pts, t);
				const o = Math.min(1, t * 8) * Math.min(1, (1 - t) * 8);
				return <circle key={i} cx={px} cy={py} r={r} fill={color} opacity={o} stroke="#fff" strokeWidth={1.5} />;
			})}
		</g>
	);
};

/** A coded blood vessel (two soft lines) along a polyline. */
export const Vessel: React.FC<{pts: [number, number][]; at: number; dur?: number; width?: number; o?: number}> = ({pts, at, dur = 26, width = 12, o = 1}) => {
	const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	return (
		<g opacity={o}>
			<DrawPath d={d} at={at} dur={dur} color="#e9a49c" width={width} />
			<DrawPath d={d} at={at} dur={dur} color="#c4432f" width={3} opacity={0.5} />
		</g>
	);
};

/** Brand-neutral coded pregnancy test stick. `line` 0..1 draws the second line. */
export const TestStick: React.FC<{x: number; y: number; w?: number; line?: number; o?: number}> = ({x, y, w = 640, line = 0, o = 1}) => {
	const h = w * 0.23;
	if (have(PL.test1)) {
		// painted stick: keep the result window where the coded one had it (x + 0.73 w, y + h / 2); window centre is at (1340, 305) in the plate
		const k = w / 1758;
		const bx = x + 0.73 * w - (1340 - 221) * k, by = y + h / 2 - (305 - 180) * k;
		return (
			<g opacity={o}>
				<SArt a={PL.test1} x={bx} y={by} w={w} />
				{line > 0 ? <SArt a={{...PL.test2, box: PL.test1.box}} x={bx} y={by} w={w} o={line} /> : null}
			</g>
		);
	}
	return (
		<g transform={`translate(${x},${y})`} opacity={o}>
			<rect x={0} y={0} width={w} height={h} rx={h * 0.3} fill="#fffdf8" stroke={INK} strokeWidth={6} />
			<rect x={w * 0.62} y={h * 0.22} width={w * 0.22} height={h * 0.56} rx={12} fill="#f1eadb" stroke={INK_SOFT} strokeWidth={4} />
			<line x1={w * 0.67} x2={w * 0.67} y1={h * 0.28} y2={h * 0.72} stroke="#8d6fb0" strokeWidth={7} strokeLinecap="round" />
			<line x1={w * 0.775} x2={w * 0.775} y1={h * 0.28} y2={h * 0.28 + h * 0.44 * line} stroke="#8d6fb0" strokeWidth={7} strokeLinecap="round" />
			<rect x={w * 0.06} y={h * 0.3} width={w * 0.3} height={h * 0.4} rx={10} fill="#ece4d4" stroke={INK_SOFT} strokeWidth={3} opacity={0.8} />
		</g>
	);
};

/** Grey neutral outcome tag (used for "pregnancy ends", "likely to end", "lining shed"). */
export const GreyTag: React.FC<{at: number; x: number; y: number; text: string; size?: number; out?: number}> = ({at, x, y, text, size = 38, out}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y}}>
		<div style={{display: 'inline-block', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: '#5d646b', background: '#e8eaec', border: `3px solid ${GREYTAG}`, borderRadius: 14, padding: '4px 20px', whiteSpace: 'nowrap'}}>{text}</div>
	</Enter>
);

/** Amber hand-type note. */
export const Hand: React.FC<{at: number; out?: number; x: number; y: number; size?: number; color?: string; w?: number; children: React.ReactNode}> = ({at, out, x, y, size = 52, color = AMBER_INK, w, children}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, lineHeight: 1.05, whiteSpace: w ? undefined : 'nowrap'}}>{children}</div>
	</Enter>
);

/** Text card used for statements. */
export const Say: React.FC<{at: number; out?: number; x: number; y: number; w: number; size?: number; color?: string; weight?: number; children: React.ReactNode}> = ({at, out, x, y, w, size = 34, color = INK, weight = 600, children}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: weight, color, lineHeight: 1.22}}>{children}</div>
	</Enter>
);

// ---------- progesterone graph (local space 800 x 520) ----------
export const G = {x0: 80, x1: 770, y0: 420, yt: 40};
export const G_RISE = 'M130,405 C175,395 200,170 300,130 C340,118 380,114 420,118';
export const G_FALL = 'M420,118 C450,125 470,300 520,395';
export const G_ON = 'M420,118 C520,102 640,94 770,88';
export const GraphAxes: React.FC<{at: number; labels?: boolean; xlabel?: string; labelAt?: number}> = ({at, labels = true, xlabel = 'time after ovulation', labelAt}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<DrawPath d={`M${G.x0},${G.yt - 6} L${G.x0},${G.y0} L${G.x1 + 10},${G.y0}`} at={at} dur={22} color={INK} width={6} />
			{labels ? (
				<g opacity={prog(f, labelAt ?? at + 14, 14)}>
					<text x={G.x1} y={466} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32}} fill={INK_SOFT}>{xlabel}</text>
					<text transform="translate(34,230) rotate(-90)" textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32}} fill={INK_SOFT}>progesterone level</text>
				</g>
			) : null}
		</g>
	);
};
export const OvulationMarker: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={prog(f, at, 14)}>
			<line x1={130} x2={130} y1={60} y2={G.y0} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 9" />
			<text x={92} y={502} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32}} fill={INK}>ovulation (egg released)</text>
		</g>
	);
};

/** Stacked progesterone supply for the hand-over (local space 800 x 520). `p` reveals left to right. */
const smooth = (t: number) => { const u = Math.max(0, Math.min(1, t)); return u * u * (3 - 2 * u); };
const tot = (x: number) => 150 + 120 * smooth((x - 100) / 670);
const clShare = (x: number) => 1 - smooth((x - 372) / 176);
export const StackedSupply: React.FC<{p: number; labels?: boolean; fade?: number}> = ({p, labels = true, fade = 0}) => {
	const xs = Array.from({length: 45}, (_, i) => 100 + (i / 44) * 670);
	const lim = 100 + p * 670;
	const pts = xs.filter(x => x <= lim);
	if (pts.length < 2) return null;
	const top = pts.map(x => [x, G.y0 - tot(x)] as [number, number]);
	const mid = pts.map(x => [x, G.y0 - tot(x) * clShare(x)] as [number, number]);
	const poly = (a: [number, number][], b: [number, number][]) => `M${a.map(q => q.join(',')).join(' L')} L${[...b].reverse().map(q => q.join(',')).join(' L')}Z`;
	const base = pts.map(x => [x, G.y0] as [number, number]);
	void fade;
	return (
		<g>
			<path d={poly(mid, base)} fill="#f6c86a" stroke={YELLOW} strokeWidth={5} strokeLinejoin="round" opacity={0.95} />
			<path d={poly(top, mid)} fill="#f0a830" fillOpacity={0.85} /><path d={`M${mid.map(q => q.join(',')).join(' L')}`} fill="none" stroke={TEAL} strokeWidth={6} strokeLinecap="round" />
			<path d={`M${top.map(q => q.join(',')).join(' L')}`} fill="none" stroke={AMBER} strokeWidth={8} strokeLinecap="round" />
			{labels ? null : null}
		</g>
	);
};

// ---------- text helpers ----------
export const Bracket: React.FC<{x1: number; x2: number; y: number; at: number; color?: string; down?: boolean}> = ({x1, x2, y, at, color = INK_SOFT, down = true}) => {
	const d = down ? 14 : -14;
	return <DrawPath d={`M${x1},${y - d} L${x1},${y} L${x2},${y} L${x2},${y - d}`} at={at} dur={20} color={color} width={5} />;
};

export const Underlined: React.FC<{x1: number; x2: number; y: number; at: number; color?: string}> = ({x1, x2, y, at, color = AMBER}) => (
	<DrawPath d={`M${x1},${y} C${x1 + (x2 - x1) * 0.3},${y - 7} ${x1 + (x2 - x1) * 0.6},${y + 6} ${x2},${y - 3}`} at={at} dur={16} color={color} width={7} />
);

export {PAPER_DEEP};

// ---------- more shared pieces ----------
/** Scale about a fixed screen point; keys [frame, scale]. */
export const Zoom: React.FC<{ox: number; oy: number; keys: [number, number][]; children: React.ReactNode}> = ({ox, oy, keys, children}) => {
	const f = useCurrentFrame();
	const s = keys.length === 1 ? keys[0][1] : interpolate(f, keys.map(k => k[0]), keys.map(k => k[1]), {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)});
	return <div style={{position: 'absolute', inset: 0, transformOrigin: `${ox}px ${oy}px`, transform: `scale(${s})`}}>{children}</div>;
};

/** Right-hand placement of the tract used by the lining and progesterone scenes (graph panel on the left). */
export const TR3: TP = {x: 830, y: 260, w: 1000};

/** The path a zygote takes: fertilisation site, along the oviduct, into the uterine cavity (thumb space). */
export const ZPATH: [number, number][] = [[40, 88], [46, 66], [78, 30], [130, 12], [190, 20], [262, 48], [320, 74], [350, 90], [420, 140], [470, 200]];

/** The lining lobes in thumb space. */
export const LOBES = [
	'M404,76 L474,80 C488,86 492,110 492,150 L494,300 L494,385 L480,392 C470,360 462,320 452,290 C440,240 430,190 418,150 C410,120 404,96 404,76Z',
	'M596,76 L526,80 C512,86 508,110 508,150 L506,300 L506,385 L520,392 C530,360 538,320 548,290 C560,240 570,190 582,150 C590,120 596,96 596,76Z',
];

/** A small tract inset with a travelling dot (the ball) along ZPATH. */
export const TractInset: React.FC<{p: TP; t: number; o?: number; dot?: boolean; bounce?: number}> = ({p, t, o = 1, dot = true}) => {
	const m = tt(p);
	const pts = ZPATH.map(q => m(q[0], q[1]));
	const [dx, dy] = along(pts, t);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: o}}><TractPair p={p} /></div>
			{dot ? (
				<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible', opacity: o}}>
					<circle cx={dx} cy={dy} r={Math.max(9, (p.w / 1000) * 13)} fill="#fffdf8" stroke={TEAL_INK} strokeWidth={5} />
				</svg>
			) : null}
		</>
	);
};

/** Day counter that rolls over. `days` is a list of [frame, number]. */
export const DayCounter: React.FC<{x: number; y: number; days: [number, number][]}> = ({x, y, days}) => {
	const f = useCurrentFrame();
	let cur = days[0];
	let prev = days[0];
	for (const d of days) if (f >= d[0]) { prev = cur; cur = d; }
	const p = prog(f, cur[0], 12);
	return (
		<div style={{position: 'absolute', left: x, top: y, display: 'flex', alignItems: 'baseline', gap: 16, fontFamily: FONT_HAND, fontWeight: 700, color: INK}}>
			<span style={{fontSize: 52, color: INK_SOFT}}>day</span>
			<span style={{position: 'relative', display: 'inline-block', width: 60, height: 90, overflow: 'hidden', fontSize: 92, lineHeight: '90px', textAlign: 'center'}}>
				<span style={{position: 'absolute', left: 0, right: 0, top: p * -90, opacity: 1 - p}}>{prev[1]}</span>
				<span style={{position: 'absolute', left: 0, right: 0, top: (1 - p) * 90, opacity: p}}>{cur[1]}</span>
			</span>
		</div>
	);
};

/** A small coded DNA squiggle. */
export const Squiggle: React.FC<{x: number; y: number; w?: number; color?: string; o?: number}> = ({x, y, w = 90, color = AMBER, o = 1}) => {
	const pts: string[] = [];
	for (let i = 0; i <= 24; i++) pts.push(`${i ? 'L' : 'M'}${(x + (i / 24) * w).toFixed(1)},${(y + Math.sin(i / 2.2) * 9).toFixed(1)}`);
	return <path d={pts.join(' ')} fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" opacity={o} />;
};

/** The progesterone graph (local 800 x 520), with optional parts keyed to frames. */
export const CurveGraph: React.FC<{
	x: number; y: number; s?: number; o?: number; labels?: boolean; xlabel?: string; axesAt?: number; ovAt?: number; riseAt?: number; riseDur?: number;
	markAt?: number; markText?: string; fallAt?: number; fallColor?: string; fallDash?: string; fallText?: string; onAt?: number; onText?: string;
}> = ({x, y, s = 1, o = 1, labels = true, xlabel = 'time after ovulation', axesAt = 4, ovAt, riseAt, riseDur = 50, markAt, markText, fallAt, fallColor = GREYTAG, fallDash = '14 11', fallText, onAt, onText}) => {
	const f = useCurrentFrame();
	const rise = riseAt === undefined ? 0 : prog(f, riseAt, riseDur);
	const fall = fallAt === undefined ? 0 : prog(f, fallAt, 36);
	const on = onAt === undefined ? 0 : prog(f, onAt, 50);
	return (
		<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
			<GraphAxes at={axesAt} labels={labels} xlabel={xlabel} />
			{ovAt !== undefined && labels ? <OvulationMarker at={ovAt} /> : null}
			<path d={G_RISE} fill="none" stroke={AMBER} strokeWidth={9} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - rise} />
			{markAt !== undefined ? (
				<g opacity={prog(f, markAt, 14)}>
					<line x1={420} x2={420} y1={72} y2={G.y0} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 9" />
					{labels && markText ? <text x={420} y={54} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32}} fill={INK}>{markText}</text> : null}
				</g>
			) : null}
			<path d={G_FALL} fill="none" stroke={fallColor} strokeWidth={9} strokeLinecap="round" strokeDasharray={fallDash} style={{clipPath: `inset(0 ${100 - fall * 100}% 0 0)`}} opacity={fall > 0 ? 1 : 0} />
			{fallText && labels ? <text x={540} y={300} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill="#5d646b" opacity={prog(f, (fallAt ?? 0) + 24, 14)}>{fallText}</text> : null}
			<path d={G_ON} fill="none" stroke={AMBER} strokeWidth={9} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - on} />
			{onText && labels ? <text x={770} y={150} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={AMBER_INK} opacity={prog(f, (onAt ?? 0) + 40, 14)}>{onText}</text> : null}
		</g>
	);
};
