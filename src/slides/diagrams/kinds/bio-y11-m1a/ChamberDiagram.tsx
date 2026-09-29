// ChamberDiagram (bio11m1Chamber) — diffusion and osmosis you can watch.
//
// Panels (any of them, stacked or side by side via `panels`):
//   diffusion  A glass tank with a barrier the particles can pass. Every
//              particle starts on the left; from the beat each one wanders to
//              its own resting place anywhere in the tank, so the crowd
//              spreads until it is even. The left / right counts are computed
//              from where the particles actually are, so "net movement stops
//              when even" is counted, not asserted. They keep jiggling (and
//              crossing) afterwards: movement never stops, only NET movement.
//   osmosis    A tank split by a partially permeable membrane. Big solute
//              particles cannot cross; small water molecules can. Water moves
//              from the dilute side (more water) to the concentrated side, so
//              the concentrated side's level rises and the dilute side's
//              falls as the water crosses.
//   crystal    A potassium permanganate crystal in still water: colour spreads
//              outward with no stirring.
//   visking    Visking tubing of concentrated sugar solution in water: it
//              swells as water enters; the balance reading rises.
//   potato     A potato cylinder in concentrated sugar solution: it shrinks;
//              the balance reading falls.
// Readings on the balances are qualitative arrows (the lesson gives no
// masses). All text from props.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {ReactNode} from 'react';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {CELLPAL, Footer, GlossDefs, H, Lines, W, clamp, fadeAt, hash, wrap} from './shared';

type Panel = {
	kind: 'diffusion' | 'osmosis' | 'crystal' | 'visking' | 'potato';
	title?: string;
	at: number;
	labels?: {left?: string; right?: string; membrane?: string};
	result?: string;
	amber?: boolean;
};
export type ChamberProps = {
	panels: Panel[];
	layout?: 'stack' | 'row';
	footer?: {text: string; at: number; amber?: boolean}[];
	delay?: number;
};

const ID = 'b11chm';
const ease = Easing.inOut(Easing.cubic);
const KMNO4 = '#8a2a8e';

export const ChamberDiagram = ({panels, layout = 'stack', footer = [], delay = 62}: ChamberProps) => {
	const frame = useCurrentFrame() - delay;
	useVideoConfig();
	const theme = useAccent();
	const pulse = idlePulse(frame);
	const n = panels.length;
	const footH = footer.length * 24 + (footer.length ? 8 : 0);

	const draw = (p: Panel, i: number, x0: number, y0: number, w: number, h: number): ReactNode => {
		const o = fadeAt(frame, i === 0 ? 0 : p.at - 30, 16);
		const t = frame - p.at;
		const col = p.amber ? TOK.amberInk : theme.accent;
		const titleEl = p.title ? <text x={x0 + w / 2} y={y0 + 20} textAnchor="middle" fill={col} fontSize={20} fontWeight={800}>{p.title}</text> : null;
		const ty = y0 + (p.title ? 32 : 6);
		if (p.kind === 'diffusion' || p.kind === 'osmosis') {
			const tx = x0 + 16;
			const tw = w - 32;
			const th = h - (ty - y0) - 34;
			const mid = tx + tw / 2;
			const tank = (level: [number, number]) => (
				<g>
					<rect x={tx} y={ty + th * (1 - level[0])} width={tw / 2} height={th * level[0]} fill={CELLPAL.water} opacity={0.14} />
					<rect x={mid} y={ty + th * (1 - level[1])} width={tw / 2} height={th * level[1]} fill={CELLPAL.water} opacity={0.14} />
					<path d={`M ${tx} ${ty} V ${ty + th} H ${tx + tw} V ${ty}`} fill="none" stroke="#8fb5c6" strokeWidth={3} />
					<rect x={tx - 10} y={ty + th + 2} width={tw + 20} height={10} rx={4} fill="#c9c5bd" />
				</g>
			);
			if (p.kind === 'diffusion') {
				const N = 26;
				const pts = Array.from({length: N}, (_, k) => {
					const sx = tx + 14 + hash(k * 3 + 1) * (tw / 2 - 40);
					const sy = ty + 14 + hash(k * 7 + 2) * (th - 28);
					const ex = tx + 14 + hash(k * 11 + 5) * (tw - 28);
					const ey = ty + 14 + hash(k * 13 + 9) * (th - 28);
					const dur = 120 + hash(k * 17) * 160;
					const u = interpolate(t, [0, dur], [0, 1], {...clamp, easing: Easing.out(Easing.quad)});
					return {x: sx + (ex - sx) * u + idleBob(frame, k, 3), y: sy + (ey - sy) * u + idleBob(frame, k + 9, 3)};
				});
				const left = pts.filter((q) => q.x < mid).length;
				return (
					<g opacity={o}>
						{titleEl}
						{tank([0.92, 0.92])}
						<line x1={mid} y1={ty + 4} x2={mid} y2={ty + th} stroke={TOK.inkMute} strokeWidth={2.5} strokeDasharray="6 8" />
						{pts.map((q, k) => <circle key={k} cx={q.x} cy={q.y} r={6} fill={`url(#${ID}-ball-dye)`} />)}
						<text x={tx + tw / 4} y={ty + th + 32} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>{p.labels?.left ?? 'left'}: {left}</text>
						<text x={tx + (tw * 3) / 4} y={ty + th + 32} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>{p.labels?.right ?? 'right'}: {N - left}</text>
						<g opacity={interpolate(t, [0, 20, 200, 240], [0, 1, 1, 0], clamp)}>
							<path d={`M ${mid - 60} ${ty + th / 2} h 120`} stroke={col} strokeWidth={5} markerEnd="" />
							<path d={`M ${mid + 60} ${ty + th / 2 - 10} l 16 10 l -16 10 Z`} fill={col} />
						</g>
					</g>
				);
			}
			// osmosis
			const cross = interpolate(t, [0, 200], [0, 1], {...clamp, easing: ease});
			const lvL = 0.8 - 0.18 * cross;
			const lvR = 0.8 + 0.12 * cross;
			const solL = [[0.25, 0.7], [0.6, 0.45]];
			const solR = [[0.2, 0.3], [0.5, 0.6], [0.75, 0.35], [0.3, 0.8], [0.65, 0.85], [0.45, 0.4]];
			const big = (sx: number, sy: number, side: number, k: number, lv: number) => (
				<circle key={`s${side}${k}`} cx={(side ? mid : tx) + 12 + sx * (tw / 2 - 24) + idleBob(frame, k + side * 7, 2)} cy={ty + th * (1 - lv) + 14 + sy * (th * lv - 28)} r={11} fill={`url(#${ID}-ball-solute)`} />
			);
			const waters = Array.from({length: 18}, (_, k) => {
				const side = k < 12 ? 0 : 1;
				const lv = side ? lvR : lvL;
				const bx = (side ? mid : tx) + 10 + hash(k * 5 + 3) * (tw / 2 - 20);
				const by = ty + th * (1 - lv) + 8 + hash(k * 9 + 1) * (th * lv - 16);
				return <circle key={`w${k}`} cx={bx + idleBob(frame, k + 20, 3)} cy={by + idleBob(frame, k + 30, 3)} r={4.5} fill={`url(#${ID}-ball-water)`} />;
			});
			const movers = t > 0 ? [0, 1, 2].map((k) => {
				const ph = ((t + k * 30) % 90) / 90;
				const yy = ty + th * 0.55 + (k - 1) * 30;
				return <circle key={`m${k}`} cx={mid - 50 + 100 * ph} cy={yy} r={5} fill={`url(#${ID}-ball-water)`} opacity={interpolate(ph, [0, 0.1, 0.9, 1], [0, 1, 1, 0])} />;
			}) : [];
			return (
				<g opacity={o}>
					{titleEl}
					{tank([lvL, lvR])}
					{Array.from({length: 11}, (_, k) => (
						<rect key={k} x={mid - 3} y={ty + 6 + k * (th / 11)} width={6} height={th / 11 - 7} fill={CELLPAL.membrane} />
					))}
					{solL.map(([a, bb], k) => big(a, bb, 0, k, lvL))}
					{solR.map(([a, bb], k) => big(a, bb, 1, k, lvR))}
					{waters}
					{movers}
					{t > 0 && (
						<g opacity={fadeAt(frame, p.at, 12)}>
							<path d={`M ${mid - 44} ${ty + 24} h 70`} stroke={CELLPAL.water} strokeWidth={5} />
							<path d={`M ${mid + 26} ${ty + 14} l 16 10 l -16 10 Z`} fill={CELLPAL.water} />
						</g>
					)}
					<text x={tx + tw / 4} y={ty + th + 32} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>{p.labels?.left ?? 'dilute: more water'}</text>
					<text x={tx + (tw * 3) / 4} y={ty + th + 32} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>{p.labels?.right ?? 'concentrated: less water'}</text>
				</g>
			);
		}
		// bench demos
		const cx = x0 + w / 2;
		const bw = Math.min(80, w / 2 - 24);
		const bTop = ty + 30;
		const bBot = y0 + h - 150;
		const u = interpolate(t, [0, 240], [0, 1], {...clamp, easing: ease});
		let inner: ReactNode = null;
		let reading: 'up' | 'down' | null = null;
		if (p.kind === 'crystal') {
			const r = 8 + 70 * u;
			inner = (
				<g>
					<circle cx={cx} cy={bBot - 12} r={r} fill={KMNO4} opacity={0.5 * (1 - u * 0.55)} />
					<circle cx={cx} cy={bBot - 12} r={r * 0.55} fill={KMNO4} opacity={0.35} />
					<rect x={cx - 7} y={bBot - 18} width={14} height={10} rx={2} fill="#4a1450" transform={`rotate(20 ${cx} ${bBot - 13})`} />
				</g>
			);
		} else if (p.kind === 'visking') {
			const sw = 1 + 0.35 * u;
			reading = 'up';
			inner = (
				<g>
					<path d={`M ${cx - 16 * sw} ${bTop + 20} Q ${cx - 26 * sw} ${(bTop + bBot) / 2} ${cx - 16 * sw} ${bBot - 16} Q ${cx} ${bBot - 4} ${cx + 16 * sw} ${bBot - 16} Q ${cx + 26 * sw} ${(bTop + bBot) / 2} ${cx + 16 * sw} ${bTop + 20} Z`} fill="#f3e2b0" stroke="#b9a36a" strokeWidth={2.5} />
					<line x1={cx - 14} y1={bTop + 14} x2={cx + 14} y2={bTop + 14} stroke="#6a5a3a" strokeWidth={4} strokeLinecap="round" />
					{[0, 1, 2, 3, 4].map((k) => <circle key={k} cx={cx + (k % 2 ? 8 : -8) * sw} cy={bTop + 50 + k * 22} r={6} fill={`url(#${ID}-ball-solute)`} />)}
					{t > 0 && [0, 1].map((k) => {
						const ph = ((t + k * 25) % 50) / 50;
						return <circle key={`w${k}`} cx={cx + (k ? 1 : -1) * (60 - 30 * ph)} cy={(bTop + bBot) / 2 + k * 20} r={4} fill={`url(#${ID}-ball-water)`} opacity={1 - ph} />;
					})}
				</g>
			);
		} else if (p.kind === 'potato') {
			const sh = 1 - 0.22 * u;
			reading = 'down';
			inner = (
				<g>
					<rect x={cx - 22 * sh} y={bBot - 14 - 150 * sh} width={44 * sh} height={150 * sh} rx={8} fill="#efe0a8" stroke="#bfa860" strokeWidth={2} />
					{Array.from({length: 7}, (_, k) => <circle key={k} cx={cx - bw + 18 + ((k * 37) % (bw * 2 - 36))} cy={bTop + 40 + ((k * 53) % (bBot - bTop - 70))} r={5.5} fill={`url(#${ID}-ball-solute)`} />)}
					{t > 0 && [0, 1].map((k) => {
						const ph = ((t + k * 25) % 50) / 50;
						return <circle key={`w${k}`} cx={cx + (k ? 1 : -1) * (26 + 30 * ph)} cy={bBot - 60 - k * 40} r={4} fill={`url(#${ID}-ball-water)`} opacity={1 - ph} />;
					})}
				</g>
			);
		}
		const resLines = p.result ? wrap(p.result, Math.floor(w / 9.5)) : [];
		return (
			<g opacity={o}>
				{titleEl}
				<DioramaPlinth id={`${ID}-p${i}`} cx={cx} cy={bBot + 30} rx={bw + 30} />
				{reading && (
					<g>
						<rect x={cx - bw - 6} y={bBot + 4} width={bw * 2 + 12} height={20} rx={4} fill="#5a5a5a" />
						<rect x={cx - 36} y={bBot + 34} width={72} height={26} rx={5} fill="#1f2a1f" />
						<text x={cx} y={bBot + 53} textAnchor="middle" fill="#7fff9a" fontSize={16} fontWeight={800} opacity={fadeAt(frame, p.at + 60)}>mass {reading === 'up' ? '▲' : '▼'}</text>
					</g>
				)}
				<path d={`M ${cx - bw} ${bTop} V ${bBot - 8} Q ${cx - bw} ${bBot} ${cx - bw + 8} ${bBot} H ${cx + bw - 8} Q ${cx + bw} ${bBot} ${cx + bw} ${bBot - 8} V ${bTop}`} fill="rgba(216,238,247,0.55)" stroke="#8fb5c6" strokeWidth={3} />
				<rect x={cx - bw + 3} y={bTop + 14} width={bw * 2 - 6} height={bBot - bTop - 17} fill={CELLPAL.water} opacity={0.12} />
				{inner}
				{resLines.length > 0 && (
					<g opacity={fadeAt(frame, p.at + 90)}>
						<Lines x={cx} y={bBot + 118} lines={resLines} size={18} color={p.amber ? TOK.amberInk : TOK.ink} />
					</g>
				)}
				{p.amber && u >= 1 && <rect x={cx - bw - 6} y={bTop - 6} width={bw * 2 + 12} height={bBot - bTop + 12} rx={12} fill="none" stroke={TOK.amber} strokeWidth={2 + pulse} opacity={0.6} />}
			</g>
		);
	};

	const avail = H - footH;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Diffusion and osmosis" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{dye: KMNO4, solute: CELLPAL.solute, water: CELLPAL.water}} />
			{panels.map((p, i) =>
				layout === 'stack' ? draw(p, i, 0, (avail / n) * i, W, avail / n) : draw(p, i, (W / n) * i, 0, W / n, avail),
			)}
			<Footer lines={footer} frame={frame} y0={H - 8} amberInk={TOK.amberInk} dim={TOK.inkDim} />
		</svg>
	);
};
