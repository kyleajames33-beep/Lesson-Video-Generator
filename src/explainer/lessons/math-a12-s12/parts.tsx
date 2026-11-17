// Lesson parts for math-a12-s12 (Revision 5: finding μ or σ from a probability; a drink-bottle filling machine
// with a dial for the mean fill, then bolts and cereal boxes), on the maths studio kit and s11's parts (imported
// read-only through ../math-a12-s11/parts, which carry s01 to s10's). Lesson-local rigs:
// - the numbers (checked at load against the design's "Numbers to verify"), with the 200 stored z values;
// - Machine: the painted filling head with the kit FillDial (dial pointer on the plate's measured dial, a conveyor
//   of PET bottle sprites filled against the red 490 mL line);
// - TableRow: a one-row excerpt of the P(Z < z) table with chosen columns and highlights.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {CARD, CARD_SHADOW, FillDial, MATH_ROLES, normCdf, phi, vis, zTableValue} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';
import {BOTTLE, BOTTLE_IN} from '../math-a12-s11/parts';

export * from '../math-a12-s11/parts';
export {S11FinalFrame, BottleHandoff} from '../math-a12-s11/s3';

// ---------- numbers (design "Numbers to verify"; author note h: Python random.Random(1212), gauss(0, 1), 4 dp) ----------
export const ZS: readonly number[] = '0.2098,-0.8181,-0.2411,0.9869,-0.0526,-1.1991,-0.8637,-0.2282,-1.8166,0.9154,0.9633,0.3209,-1.0760,1.5273,-2.5108,-1.0105,1.0653,1.0075,0.8684,0.2603,-1.3077,0.3858,0.4785,0.1447,-0.6090,-0.0242,-1.1783,-0.1985,0.9967,0.1157,-0.6145,-0.1253,-0.5638,1.3950,0.5601,-1.1954,1.4839,-0.1338,0.8614,0.4945,0.2445,0.9672,-1.0892,-0.4919,0.3182,-0.0885,-1.5298,1.9331,0.7162,0.0953,1.3783,-0.8903,0.4475,-1.0419,1.6631,0.2271,-1.2177,-0.8818,0.5644,0.0895,1.5772,1.3267,0.7840,1.0802,-0.4597,0.9528,-0.0995,-2.1080,0.9720,-0.0110,-0.9017,-0.4766,1.5413,-1.1649,1.0125,-1.4725,1.1495,-1.2212,0.5195,0.9363,1.6421,1.0402,-0.9518,-0.6436,0.5465,1.8188,0.1528,0.2156,-1.1846,-0.2285,-0.6123,-0.5054,0.2202,-0.1021,0.2105,1.1966,0.6010,0.6593,-0.2374,2.2965,0.8533,-1.2063,1.1044,1.0421,0.8969,1.8021,-0.8125,1.5358,-0.4158,-0.6623,-1.5538,-0.9113,-0.9165,-1.3129,1.2246,1.0059,0.7358,-0.6679,0.5384,-1.7455,0.3587,0.7901,0.6408,-0.0578,0.9028,-0.8909,-1.2871,1.0917,0.8657,1.0550,0.8755,0.9971,-0.8198,0.0430,-1.1379,1.6333,-1.0127,-0.6130,0.3936,-1.7430,0.4484,-1.3707,0.8394,-1.4785,-1.1436,0.8335,1.5839,-0.0424,-0.7771,0.3317,1.7723,0.7936,0.4804,1.0036,-0.3753,-1.8123,0.7007,0.4824,-0.4205,-0.9095,-0.2389,-1.0815,-0.3919,-0.6606,0.9058,-0.0189,-0.2804,1.1571,-0.3175,1.6806,0.1276,-2.5332,0.6310,-1.2082,0.3392,0.1660,-0.6410,-0.7124,-1.0035,-0.4894,1.3313,-0.4265,-1.1791,0.1595,-1.0344,1.6286,0.9388,-2.0141,-1.5203,-1.7340,-1.3472,-0.4332,-1.0443,-0.6871,-0.4187,1.2132,0.8985,-0.1132,0.7871,0.6348'.split(',').map(Number);
export const shortCount = (mu: number, n = ZS.length) => ZS.slice(0, n).filter(z => mu + 8 * z < 490).length;
export const MU_SET = 508.64, MU_EXACT = 508.61078299;
{
	const near = (a: number, b: number, t = 5e-5) => Math.abs(a - b) < t;
	const checks: [string, boolean][] = [
		['bottles', ZS.length === 200 && shortCount(500) === 19 && shortCount(504) === 6 && shortCount(508) === 2 && shortCount(MU_SET) === 2],
		['tails', [[500, 0.1056], [504, 0.0401], [508, 0.0122], [MU_SET, 0.0099]].every(([m, p]) => near(normCdf(490, m, 8), p))],
		['table', zTableValue(2.32) === 0.9898 && zTableValue(2.33) === 0.9901 && zTableValue(2.57) === 0.9949 && zTableValue(2.58) === 0.9951 && zTableValue(2.5) === 0.9938 && zTableValue(2.05) === 0.9798 && zTableValue(2.06) === 0.9803 && zTableValue(1.41) === 0.9207 && zTableValue(1.75) === 0.9599],
		['mean', near(490 + 2.33 * 8, MU_SET, 1e-9) && near(normCdf(490, MU_EXACT, 8), 0.01, 1e-7) && normCdf(490, 508.61, 8) > 0.01 && near(normCdf(490, 508, 8), 0.0122)],
		['bolts', near(2 * phi(-2), 0.0455) && near(2 * phi(-3), 0.0027) && near(1 / 3, 0.3333)],
		['cereal', near(5 / 2.575, 1.9417) && near(normCdf(375, 380, 1.9), 0.00425, 1e-5) && near(normCdf(375, 380, 2), 0.0062) && near(375 + 2.575 * 2, 380.15, 1e-9) && near(normCdf(375, 380.15, 2), 0.00501, 1e-5) && normCdf(375, 380.16, 2) < 0.005],
		['A1A2', near(1000 + 2.05 * 3, 1006.15, 1e-9) && near(1000 - 2.05 * 3, 993.85, 1e-9) && near(7 / 1.75, 4, 1e-12)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-s12 numbers: ' + bad.join(', '));
}

// ---------- plates (alpha > 32 boxes, measured 17 Nov) ----------
const M = 'assets/maths/';
export const HEAD: PlateSpec = {src: M + 'ma12-filling-head-v1.png', nat: [1024, 1536], box: [141, 193, 883, 1362]};
/** ma12-filling-head-v1.json anchors (native px, ±6). */
const DIAL = {c: [507, 620], r: 200}, NOZZLE = [513, 1352];
export const CEREAL: PlateSpec = {src: M + 'ma12-cereal-box-v1.png', nat: [1060, 1484], box: [190, 230, 871, 1274]};
export const S12_PLATES = [HEAD, CEREAL];

// ---------- the filling machine ----------
export const MACH = {x: 180, width: 780, top: 90, headH: 400, bottleW: 70};
const s = MACH.headH / (HEAD.box[3] - HEAD.box[1]);
const headX = MACH.x + MACH.width * 0.42;
export const HEAD_POS = {x: headX - (NOZZLE[0] - HEAD.box[0]) * s, y: MACH.top, w: (HEAD.box[2] - HEAD.box[0]) * s};
export const BOTTLE_Y = MACH.top + (NOZZLE[1] - HEAD.box[1]) * s + 8;
export const DIAL_POS = {cx: HEAD_POS.x + (DIAL.c[0] - HEAD.box[0]) * s, cy: MACH.top + (DIAL.c[1] - HEAD.box[1]) * s, r: DIAL.r * s};
/** The filling head (dial at μ) over a conveyor of `shown` bottles filled to μ + 8z against the 490 mL line. */
export const Machine: React.FC<{mu: number; shown: number; at?: number; out?: number}> = ({mu, shown, at = -30, out}) => (
	<FillDial x={MACH.x} y={BOTTLE_Y} width={MACH.width} mu={mu} sigma={8} limit={490} zs={ZS} shown={shown} levelRange={[380, 520]}
		bottle={{plate: BOTTLE, interior: BOTTLE_IN}} bottleW={MACH.bottleW} spacing={120} visible={7}
		dial={{cx: DIAL_POS.cx, cy: DIAL_POS.cy, r: DIAL_POS.r * 0.82, range: [490, 520]}} head={{plate: HEAD, x: HEAD_POS.x, y: HEAD_POS.y, w: HEAD_POS.w}} at={at} out={out} />
);
/** Bottles passed under the head: `per` frames for a run of 200 starting at `from`. */
export const runShown = (f: number, from: number, per = 120) => Math.max(0, Math.min(200, ((f - from) / per) * 200));

// ---------- a one-row table excerpt ----------
/** One row of the P(Z < z) table (row z, chosen hundredths columns), cells highlighted on cue; the target chip optional. */
export const TableRow: React.FC<{x: number; y: number; row: number; cols: readonly number[]; hi?: readonly number[]; hiAt?: number; at?: number; out?: number; size?: number; cellW?: number}> = ({x, y, row, cols, hi = [], hiAt = 0, at = -30, out, size = 34, cellW = 150}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const ho = prog(f, hiAt, 12);
	const A = MATH_ROLES.k;
	const cell = (c: React.ReactNode, key: string | number, bold = false, hit = 0): React.ReactNode => <div key={key} style={{width: cellW, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: bold || hit ? 800 : 600, fontSize: size, color: hit ? A.ink : '#2b2620', background: hit ? `rgba(248,232,200,${hit})` : undefined, boxShadow: hit ? `inset 0 0 0 4px rgba(209,143,31,${hit})` : undefined, borderLeft: '1.5px solid #e6dccb', fontVariantNumeric: 'tabular-nums'}}>{c}</div>;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', overflow: 'hidden'}}>
		<div style={{display: 'flex', borderBottom: '3px solid #2b2620'}}>{cell('z', 'h', true)}{cols.map(c => cell(`.0${c}`, c, true))}</div>
		<div style={{display: 'flex'}}>{cell(row.toFixed(1), 'r', true)}{cols.map(c => cell(zTableValue(row + c / 100).toFixed(4), c, false, hi.includes(c) ? ho : 0))}</div>
	</div>;
};
