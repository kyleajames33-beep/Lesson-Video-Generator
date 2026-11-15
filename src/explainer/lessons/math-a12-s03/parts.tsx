// Lesson parts for math-a12-s03 (Revision 4: expectation and variance of a discrete model; a cat's vet visits and a pet
// insurer), on the maths studio kit's probability set 2 (spread-parts.tsx) and s02's parts (imported read-only through
// ../math-a12-s02/parts, which carry s01's and the f01 to f15 board parts). Lesson-local rigs:
// - the visit distribution and its numbers (checked at load), and the stored run of 2,000 simulated cats;
// - Cat and Carrier plates; DotPiles (1,000 imagined cats as dots, each dot 10 cats);
// - BeamQuestion: the attempt-2 picture (empty slots 0.2, a and b; the fulcrum at 2.3);
// - ThinBars: the visit bars splitting into narrower bars across an interval (the handoff to s04).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, MATH_GRADIENT, vis} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';
import {DIE_RED, MODEL, Plate} from '../math-a12-s02/parts';

export * from '../math-a12-s02/parts';

// ---------- the numbers (design "Numbers to verify") ----------
export const XS = [0, 1, 2, 3] as const;
export const PS = [0.1, 0.3, 0.4, 0.2] as const;
/** Python random.Random(33).choices([0, 1, 2, 3], [0.1, 0.3, 0.4, 0.2], k=2000), stored (author note c). */
export const CATS: readonly number[] = '22312331222322321120222332210311321111021111032211110111222122102121302213212200222221332013111221223323332223221012211303223203233100221112233230032111122101112132221001111302112101311323130122213021132312321233210211011212201233203332122322122123111313333123123311012132231211123020213221110022213021132113111121202213322121121220211231213120223222222223232131333322123112311123120122221120112113222232202111311110320212331220232231233331121111121023120112232232113323321233002333012213023231231231221321332022202321122330213233310222222121202223132121203100113131133310211011231223331221022222033123212222313123211112121123112213121312221122200031223231310312022231313123230302322231331221332023233221211110111023123022133223032112132332112321322232122121312012222213203122311222230223311232212100112222122322321311321320111210322323111221232022032222122120211122222112211121122211321213131111112122110122331110023301131232122132110312222121222220112313123130132122030322112302232322302000222211212203130031120232013122222321022213221112231332212123132122232221113202223112032222123322231023112212323122123212211122111312122323121111212201222021022111202232120032111223212121112023223210321012212202111203130213131110211113223220231132111213232322232213232101212131112321321321201032231113100131213211222301233113231223123212113233112110333112013311232222112231023313311122122121211232113211120211301223322123021111332111022323222220012202213113110121222320322331222222112212111211212122123313221121333013212223112322203210233332112213011221123232211132233110212313123011332131232222222301232212013221031222122012212201221210112022021222131122122131212221211033332321111113022203122332111011323332112312202012232321302211232313321113311332031213202121221110310222200321123211312023331122213322332100212312323311221121211131102313222322123111111022213120212112111212212322223202222321012032122213231211333112311111013232221102113012222233221222133133012331320311223111333333222301120232212020122122'.split('').map(Number);
const ev = (xs: readonly number[], ps: readonly number[], g = (x: number) => x) => xs.reduce((s, x, i) => s + g(x) * ps[i], 0);
{
	const near = (a: number, b: number, t = 1e-9) => Math.abs(a - b) < t;
	const sum = (k: number) => CATS.slice(0, k).reduce((s, v) => s + v, 0);
	const mu = ev(XS, PS), ex2 = ev(XS, PS, x => x * x);
	const checks: [string, boolean][] = [
		['die', near(ev([1, 2, 3, 4, 5, 6], Array(6).fill(1 / 6)), 3.5) && near(ev([1, 2, 3, 4, 5, 6], Array(6).fill(1 / 6), x => x * x) - 12.25, 35 / 12)],
		['visits', near(mu, 1.7) && near(ev(XS, PS, x => x - 1.7), 0) && near(ev(XS, PS, x => (x - 1.7) ** 2), 0.81) && near(ex2, 3.7) && near(Math.sqrt(0.81), 0.9) && near(XS.reduce((s: number, x) => s + x - 1.7, 0), -0.8)],
		['cats', CATS.length === 2000 && CATS.slice(0, 10).join() === '2,2,3,1,2,3,3,1,2,2' && sum(10) === 21 && sum(100) === 161 && sum(1000) === 1706 && sum(2000) === 3415],
		['insurer', near(8000 * 0.02 + 1000 * 0.05, 210) && near(8000 ** 2 * 0.02 + 1000 ** 2 * 0.05 - 210 ** 2, 1285900, 1e-6) && Math.round(Math.sqrt(1285900)) === 1134],
		['A1', near(ev(XS, [0.1, 0.3, 0.5, 0.1]), 1.6) && near(ev(XS, [0.1, 0.3, 0.5, 0.1], x => x * x), 3.2) && near(3.2 - 1.6 ** 2, 0.64)],
		['A2', near(0.2 + 0.3 + 0.5, 1) && near(0.2 + 2 * 0.3 + 3 * 0.5, 2.3) && near(0.2 + 2 * 0.4 + 3 * 0.4, 2.2)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-s03 numbers: ' + bad.join(', '));
}
export const VIOLET = MATH_GRADIENT;

// ---------- plates (alpha > 32 boxes, measured 16 Nov) ----------
export const CAT: PlateSpec = {src: 'assets/biology/m5x-cat-orange-v1.png', nat: [2000, 2000], box: [224, 339, 1776, 1599]};
export const CARRIER: PlateSpec = {src: 'assets/maths/ma12-pet-carrier-v1.png', nat: [1448, 1086], box: [269, 171, 1172, 949]};
export const Cat: React.FC<{x: number; y: number; w: number; at?: number; out?: number}> = p => <Plate plate={CAT} {...p} />;
export const Carrier: React.FC<{x: number; y: number; w: number; at?: number; out?: number}> = p => <Plate plate={CARRIER} {...p} />;
export const S03_PLATES = [CAT, CARRIER, DIE_RED];

// ---------- 1,000 imagined cats as dot piles ----------
export const DotPiles: React.FC<{x: number; base: number; gap?: number; counts: readonly number[]; at: readonly number[]}> = ({x, base, gap = 150, counts, at}) => {
	const f = useCurrentFrame();
	const T = (s: number, c: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, fill: c});
	return <FrameSvg>
		<line x1={x - 20} x2={x + 3 * gap + 100} y1={base} y2={base} stroke={INK} strokeWidth={3} opacity={prog(f, at[0] - 10, 10)} />
		{counts.map((c, i) => {
			const o = prog(f, at[i], 12), n = c / 10, rows = Math.ceil(n / 5);
			return <g key={i} opacity={o}>
				{Array.from({length: n}, (_, j) => <circle key={j} cx={x + i * gap + 8 + (j % 5) * 16} cy={base - 10 - Math.floor(j / 5) * 16} r={6.5} fill={MODEL.stroke} />)}
				<text x={x + i * gap + 40} y={base - 22 - rows * 16} textAnchor="middle" style={T(30, MODEL.ink)}>{c}</text>
				<text x={x + i * gap + 40} y={base + 36} textAnchor="middle" style={T(30, INK)}>{i}</text>
			</g>;
		})}
	</FrameSvg>;
};

// ---------- the attempt-2 picture ----------
export const BeamQuestion: React.FC<{x: number; y: number; w: number; at?: number; fill?: {a: number; b: number; o: number}}> = ({x, y, w, at = -30, fill}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, undefined, 14);
	if (o <= 0.001) return null;
	const X = (v: number) => x + ((v - 0.5) / 3) * w;
	const H = 380;
	const slots: [number, string, number][] = [[1, '0.2', 0.2], [2, 'a', fill?.a ?? 0], [3, 'b', fill?.b ?? 0]];
	const T = (s: number, c: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, fill: c});
	return <FrameSvg style={{opacity: o}}>
		{slots.map(([v, lab, p]) => {
			const solid = v === 1 ? 1 : (fill?.o ?? 0);
			return <g key={v}>
				<rect x={X(v) - 40} y={y - 9 - 0.6 * H} width={80} height={0.6 * H} rx={6} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 8" />
				{solid > 0.01 ? <rect x={X(v) - 40} y={y - 9 - p * H} width={80} height={p * H} rx={6} fill={MODEL.stroke} opacity={solid} /> : null}
				<text x={X(v)} y={y - 24 - 0.6 * H} textAnchor="middle" style={T(36, v === 1 ? MODEL.ink : INK)}>{lab}</text>
				<text x={X(v)} y={y + 50} textAnchor="middle" style={T(32, INK)}>{v}</text>
			</g>;
		})}
		<rect x={x - 10} y={y - 9} width={w + 20} height={18} rx={9} fill={VIOLET} />
		<path d={`M${X(2.3)},${y + 10} L${X(2.3) - 40},${y + 80} L${X(2.3) + 40},${y + 80} Z`} fill={VIOLET} />
		<text x={X(2.3)} y={y + 124} textAnchor="middle" style={T(36, VIOLET)}>E(X) = 2.3</text>
	</FrameSvg>;
};

// ---------- the handoff: bars splitting across an interval ----------
const hump = (x: number) => 0.36 * Math.exp(-((x - 1.9) ** 2) / (2 * 0.85 ** 2));
/** Four visit bars on 0 to 4 (n = 4), then n bars of a smooth hump (16, 64). */
export const ThinBars: React.FC<{x: number; y: number; w: number; h: number; n: number; axisO?: number}> = ({x, y, w, h, n, axisO = 1}) => {
	const X = (v: number) => x + (v / 4) * w, base = y + h, s = h / 0.45;
	const bars = n === 4 ? [0.1, 0.3, 0.4, 0.2].map((p, i) => ({c: i + 0.5, wd: 0.66, p})) : Array.from({length: n}, (_, i) => ({c: (i + 0.5) * (4 / n), wd: (4 / n) * 0.82, p: hump((i + 0.5) * (4 / n))}));
	return <FrameSvg>
		{bars.map((b, i) => <rect key={i} x={X(b.c - b.wd / 2)} y={base - b.p * s} width={X(b.wd) - x} height={b.p * s} fill={MODEL.stroke} stroke={MODEL.ink} strokeWidth={n > 16 ? 0.8 : 2} />)}
		<line x1={x - 10} x2={x + w + 10} y1={base} y2={base} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		<g opacity={axisO}>{[0, 1, 2, 3, 4].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={base} y2={base + 12} stroke={INK} strokeWidth={3} /><text x={X(v)} y={base + 48} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>{v}</text></g>)}</g>
	</FrameSvg>;
};
export {FONT_HAND};
