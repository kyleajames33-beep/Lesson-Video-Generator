// Lesson parts for math-a12-i06 (Revision 3: rectangles and trapezia estimate accumulated change; a rain gauge in
// an easing storm), on the maths studio kit and i05's parts (imported read-only). Lesson-local rigs:
// - RainRig: the reused physics thundercloud with coded rain streaks whose density follows the rate cos x, over the
//   painted gauge (brief 238 plate: inner walls x 300 and 500, inner top y 420, floor y 1500 in file pixels) whose
//   coded water is drawn BEHIND the plate (the plate's inside is transparent) on a coded 0 to 1.2 cm scale;
//   an optional second "estimate" gauge shows the current strip sum beside the "true" gauge;
// - rate, total and the strip sums used by every readout, so the gauges, strips and readouts agree.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK} from '../../kit';
import {CARD, FrameSvg, SvgPlate, plateMap, riemannSum, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';

export {AMB, AnswerBox, Attempt, BLUE, Bl, BoxCard, Cc, Chip, FramedCard, Frac, GREEN, GREY, GapLine, Line, MiniPlot, PLabel, QAxes, RED, Tick, V, VIOLET} from '../math-a12-i05/parts';

const PI = Math.PI;
// ---------- the models ----------
export const rate = (x: number) => Math.cos(x);
export const total = (x: number) => Math.sin(Math.max(0, Math.min(PI / 2, x)));
export const L = (n: number) => riemannSum(rate, 0, PI / 2, n, 'left');
export const R = (n: number) => riemannSum(rate, 0, PI / 2, n, 'right');
export const T = (n: number) => riemannSum(rate, 0, PI / 2, n, 'trapezium');
const sq = (x: number) => x * x;
export const tL = (n: number) => riemannSum(sq, 0, 2, n, 'left');
export const tR = (n: number) => riemannSum(sq, 0, 2, n, 'right');
export const tT = (n: number) => riemannSum(sq, 0, 2, n, 'trapezium');
{
	const near = (a: number, b: number, tol = 1e-4) => Math.abs(a - b) < tol;
	const checks: [string, boolean][] = [
		['cos sums', near(L(4), 1.183465) && near(R(4), 0.790766) && near(T(4), 0.987116) && near(L(8), 1.0950, 1e-3) && near(L(16), 1.0483, 1e-3) && near(L(32), 1.0243, 1e-3) && near(R(32), 0.9753, 1e-3)],
		['trolley', near(tL(4), 1.75) && near(tR(4), 3.75) && near(tT(4), 2.75) && near(tL(8), 2.1875) && near(tR(8), 3.1875) && near(tT(8), 2.6875) && near(tL(16), 2.421875) && near(tT(16), 2.671875)],
		['A1', near(riemannSum(x => 8 - x * x, 0, 2, 4, 'left'), 14.25)],
		['A2', near(2 * (0 + 6) / 2 + 2 * (6 + 10) / 2, 22)],
		['bath', near(riemannSum(t => 12 - 2 * t, 0, 8, 8, 'left'), 40)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-i06 numbers: ' + bad.join(', '));
}

// ---------- the cloud, the rain and the gauge ----------
export const GAUGE: PlateSpec = {src: 'assets/maths/ma12-rain-gauge-v1.png', nat: [800, 2000], box: [85, 169, 713, 1840]};
export const CLOUD: PlateSpec = {src: 'assets/physics/phys-y11-thundercloud-v1.png', nat: [1774, 887], box: [172, 80, 1612, 807]};
const IN = {x0: 300, x1: 500, top: 420, floor: 1500};
const CM = 900; // file px per cm (1.2 cm = 1080 px of inner height)
export const gaugeW = (h: number) => (h * (GAUGE.box[2] - GAUGE.box[0])) / (GAUGE.box[3] - GAUGE.box[1]);
/** One gauge at (x, y) of height h with water to `cm`, drawn behind the plate; optional scale on the right. */
const Gauge: React.FC<{x: number; y: number; h: number; cm: number; scale?: boolean; label?: string; ghost?: {lo: number; hi: number; o: number}; line?: {cm: number; o: number; text?: string}}> = ({x, y, h, cm, scale = false, label, ghost, line}) => {
	const w = gaugeW(h);
	const m = plateMap(GAUGE, x, y, w);
	const [x0, top] = m.at(IN.x0, IN.top), [x1, floor] = m.at(IN.x1, IN.floor);
	const lv = (c: number) => floor - c * CM * m.s;
	const ly = Math.max(top, lv(Math.max(0, cm)));
	const sx = m.at(GAUGE.box[2], 0)[0] + 6;
	return <>
		<rect x={x0} y={top} width={x1 - x0} height={floor - top} fill="#eef3f6" />
		{cm > 0.001 ? <><rect x={x0} y={ly} width={x1 - x0} height={floor - ly} fill="#9cc7e6" /><rect x={x0} y={ly} width={x1 - x0} height={5} fill="#4f8fc0" /></> : null}
		<SvgPlate plate={GAUGE} x={x} y={y} w={w} />
		{ghost && ghost.o > 0.01 ? <g opacity={ghost.o}>
			<path d={`M${x1 + 14},${lv(ghost.hi)} h14 V${lv(ghost.lo)} h-14`} stroke="#7a4600" strokeWidth={5} fill="none" />
		</g> : null}
		{line && line.o > 0.01 ? <g opacity={line.o}><line x1={x0 - 16} x2={x1 + 16} y1={lv(line.cm)} y2={lv(line.cm)} stroke={INK} strokeWidth={4} strokeDasharray="10 8" />{line.text ? <text x={x0 - 20} y={lv(line.cm) - 14} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, fill: INK}} stroke={CARD} strokeWidth={6} paintOrder="stroke">{line.text}</text> : null}</g> : null}
		{scale ? <g>
			<line x1={sx} x2={sx} y1={lv(0)} y2={lv(1.2)} stroke={INK} strokeWidth={3} />
			{Array.from({length: 13}, (_, i) => i / 10).map(c => <line key={c} x1={sx} x2={sx + (Math.round(c * 10) % 5 === 0 ? 20 : 10)} y1={lv(c)} y2={lv(c)} stroke={INK} strokeWidth={3} />)}
			{[0, 0.5, 1].map(c => <text key={c} x={sx + 26} y={lv(c) + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}} stroke={CARD} strokeWidth={5} paintOrder="stroke">{c === 0 ? '0' : c === 1 ? '1 cm' : '0.5'}</text>)}
		</g> : null}
		{label ? <text x={(x0 + x1) / 2} y={y - 14} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: INK}} stroke={CARD} strokeWidth={6} paintOrder="stroke">{label}</text> : null}
	</>;
};
/** Streaks of rain from the cloud base: density follows `rate` (0 to 1); positions fall with the frame. */
const Rain: React.FC<{x0: number; x1: number; y0: number; y1: number; rate: number}> = ({x0, x1, y0, y1, rate: r}) => {
	const f = useCurrentFrame();
	const N = 46;
	const H = y1 - y0;
	return <g>{Array.from({length: N}, (_, i) => {
		if (i >= Math.round(N * Math.max(0, Math.min(1, r)))) return null;
		const sx = x0 + ((i * 97) % N) / N * (x1 - x0) + ((i * 13) % 7);
		const off = (i * 53) % H;
		const yy = y0 + ((off + f * 22) % H);
		return <line key={i} x1={sx} x2={sx - 6} y1={yy} y2={yy + 34} stroke="#5b8fc2" strokeWidth={4} strokeLinecap="round" opacity={0.75} />;
	})}</g>;
};
/** The storm and the gauge(s): cloud on top, rain streaks at `rainRate`, the true gauge at `trueCm`, an optional estimate gauge. */
export const RainRig: React.FC<{x: number; w: number; trueCm: number; rainRate?: number; estimate?: number; gaugeH?: number; at?: number; out?: number; bracket?: {lo: number; hi: number; o: number}; oneLine?: {o: number; text?: string}; labels?: boolean}> = ({x, w, trueCm, rainRate = 0, estimate, gaugeH = 500, at = -30, out, bracket, oneLine, labels = true}) => {
	usePlatePreload([GAUGE.src, CLOUD.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const cw = w, ch = (cw * (CLOUD.box[3] - CLOUD.box[1])) / (CLOUD.box[2] - CLOUD.box[0]);
	const cy = 150;
	const gy = 960 - gaugeH;
	const gw = gaugeW(gaugeH);
	const two = estimate !== undefined;
	const gx1 = two ? x + w * 0.62 - gw / 2 : x + w / 2 - gw / 2;
	const gx0 = x + w * 0.2 - gw / 2;
	return (
		<FrameSvg style={{opacity: o}}>
			<Rain x0={x + 30} x1={x + w - 30} y0={cy + ch * 0.75} y1={930} rate={rainRate} />
			<SvgPlate plate={CLOUD} x={x} y={cy} w={cw} />
			{two ? <Gauge x={gx0} y={gy} h={gaugeH} cm={estimate!} label={labels ? 'estimate' : undefined} /> : null}
			<Gauge x={gx1} y={gy} h={gaugeH} cm={trueCm} scale label={two && labels ? 'true' : undefined} ghost={bracket} line={oneLine ? {cm: 1, ...oneLine} : undefined} />
		</FrameSvg>
	);
};
export {PI};
