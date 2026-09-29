// FourProcessesDiagram (bio11m1bFourProcesses) — DNA replication, mitosis,
// meiosis and cytokinesis as four stone plinths, each with a small coded model
// of the process and its role underneath.
//
// Optional layers on their own beats:
//  • `fail`  each plinth cracks and shows what goes wrong without it (props);
//  • `links` arrows between plinths (e.g. replication → mitosis and meiosis,
//            cytokinesis completes both) with a short label;
//  • `verdict` the amber judgement line.
// Models: replication = a ladder unzipping into two; mitosis = 1 → 2 cells
// (same count); meiosis = 1 → 4 smaller cells; cytokinesis = a cell pinching
// in two. All text comes from props.
//
// Props: `items` [{key, name, role, at, fail?, failAt?}], `links`
// [{from, to, at, label?}], `verdict` {text, at}.

import type {ReactNode} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {fadeAt, popAt, ease, lerp, CORAL, PURPLE, GlossDefs, CellBody, Verdict, wrap} from './shared';

type Key = 'replication' | 'mitosis' | 'meiosis' | 'cytokinesis';
type Item = {key: Key; name: string; role: string; at: number; fail?: string; failAt?: number};
export type FourProcessesProps = {
	items: Item[];
	links?: {from: Key; to: Key; at: number; label?: string}[];
	verdict?: {text: string; at: number};
	delay?: number;
};

const ID = 'b11m1bFour';
const W = 760, H = 530;
const XS = [95, 285, 475, 665];
const PY = 200;

const Model = ({k, x, y, frame, t, accent}: {k: Key; x: number; y: number; frame: number; t: number; accent: string}): ReactNode => {
	const run = ease(frame, t + 10, t + 60);
	if (k === 'replication') {
		// a short ladder that unzips into two ladders
		const sep = run * 22;
		return (
			<g>
				{[-1, 1].map((sd) => (
					<g key={sd} transform={`translate(${sd * sep},0)`}>
						<line x1={x - 14} y1={y - 44} x2={x - 14} y2={y + 36} stroke={sd < 0 ? '#b9ab93' : '#b9ab93'} strokeWidth={6} strokeLinecap="round" />
						<line x1={x + 14} y1={y - 44} x2={x + 14} y2={y + 36} stroke={accent} strokeWidth={6} strokeLinecap="round" opacity={run} />
						{[0, 1, 2, 3, 4].map((r) => <line key={r} x1={x - 14} y1={y - 36 + r * 17} x2={x + 14} y2={y - 36 + r * 17} stroke={r % 2 ? PURPLE : accent} strokeWidth={5} opacity={sd < 0 ? 1 : run} />)}
					</g>
				))}
			</g>
		);
	}
	if (k === 'mitosis') {
		return <CellBody id={ID} cx={x} cy={y} rx={50} ry={38} split={run} gap={6 * run} />;
	}
	if (k === 'meiosis') {
		const g = ease(frame, t + 40, t + 90);
		if (run < 1) return <CellBody id={ID} cx={x} cy={y} rx={48} ry={38} split={run} gap={6 * run} />;
		return (
			<g>
				{[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sy], i) => (
					<circle key={i} cx={x + sx * lerp(22, 30, g)} cy={y + sy * lerp(0, 22, g) + idleBob(frame, i, 0.8)} r={lerp(28, 19, g)} fill={`url(#${ID}-cyto)`} stroke="#b9ab93" strokeWidth={3} />
				))}
			</g>
		);
	}
	// cytokinesis: a cell with two nuclei pinching in
	const pinch = run * 0.9;
	return (
		<g>
			<path d={`M ${x - 52} ${y} C ${x - 52} ${y - 44} ${x - 8} ${y - 44 + pinch * 30} ${x} ${y - 40 + pinch * 34} C ${x + 8} ${y - 44 + pinch * 30} ${x + 52} ${y - 44} ${x + 52} ${y} C ${x + 52} ${y + 44} ${x + 8} ${y + 44 - pinch * 30} ${x} ${y + 40 - pinch * 34} C ${x - 8} ${y + 44 - pinch * 30} ${x - 52} ${y + 44} ${x - 52} ${y} Z`} fill={`url(#${ID}-cyto)`} stroke="#b9ab93" strokeWidth={3} />
			<circle cx={x - 26} cy={y} r={12} fill={`url(#${ID}-nuc)`} stroke="#9fb2c6" strokeWidth={2} />
			<circle cx={x + 26} cy={y} r={12} fill={`url(#${ID}-nuc)`} stroke="#9fb2c6" strokeWidth={2} />
		</g>
	);
};

export const FourProcessesDiagram = ({items, links = [], verdict, delay = 62}: FourProcessesProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const pulse = idlePulse(frame, 50);
	const idx = (k: Key) => items.findIndex((it) => it.key === k);
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="DNA replication, mitosis, meiosis and cytokinesis and why each matters" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{a: theme.accent}} />
			{items.map((it, i) => {
				const x = XS[i];
				const p = Math.min(1, popAt(frame, fps, it.at));
				const failed = it.failAt !== undefined && frame >= it.failAt;
				const fo = it.failAt !== undefined ? fadeAt(frame, it.failAt, 14) : 0;
				return (
					<g key={it.key} opacity={p > 0 ? 1 : 0}>
						<g transform={`translate(${x},${PY}) scale(${0.7 + 0.3 * p}) translate(${-x},${-PY})`}>
							<DioramaPlinth id={`${ID}${i}`} cx={x} cy={PY + 52} rx={82} />
							<g opacity={1 - fo * 0.6}>
								<Model k={it.key} x={x} y={PY} frame={frame} t={it.at} accent={theme.accent} />
							</g>
							{failed && (
								<g opacity={fo}>
									<path d={`M ${x - 30} ${PY + 50} l 14 -12 l 8 14 l 12 -16 l 10 12 l 12 -10`} fill="none" stroke="#6f6b63" strokeWidth={3} strokeLinecap="round" />
									<Verdict x={x + 44} y={PY - 44} ok={false} r={14} />
								</g>
							)}
						</g>
						<text x={x} y={PY + 118} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{it.name}</text>
						{wrap(it.role, 20).map((ln, k) => (
							<text key={k} x={x} y={PY + 142 + k * 19} textAnchor="middle" fill={theme.accent} fontSize={15} fontWeight={800} opacity={fadeAt(frame, it.at + 10) * (1 - fo)}>{ln}</text>
						))}
						{it.fail && wrap(it.fail, 20).map((ln, k) => (
							<text key={`f${k}`} x={x} y={PY + 142 + k * 19} textAnchor="middle" fill={CORAL} fontSize={15} fontWeight={800} opacity={fo}>{ln}</text>
						))}
					</g>
				);
			})}
			{links.map((l, i) => {
				const a = idx(l.from), b = idx(l.to);
				if (a < 0 || b < 0) return null;
				const t = ease(frame, l.at, l.at + 30);
				const x1 = XS[a], x2 = XS[b];
				const lift = 40 + Math.abs(b - a) * 22;
				const y = PY - 96;
				const d = `M ${x1} ${y + 10} C ${x1} ${y - lift + 40} ${x2} ${y - lift + 40} ${x2} ${y + 10}`;
				return (
					<g key={i} opacity={t > 0 ? 1 : 0}>
						<path d={d} fill="none" stroke={TOK.inkMute} strokeWidth={3} strokeDasharray="300" strokeDashoffset={300 * (1 - t)} />
						<path d={`M ${x2 - 7} ${y} L ${x2} ${y + 12} L ${x2 + 7} ${y} Z`} fill={TOK.inkMute} opacity={t} />
						{l.label && <text x={(x1 + x2) / 2} y={y - lift + 60 - 8 * (i % 2)} textAnchor="middle" fill={TOK.inkDim} fontSize={14} fontWeight={800} opacity={fadeAt(frame, l.at + 20)}>{l.label}</text>}
					</g>
				);
			})}
			{verdict && (
				<g opacity={fadeAt(frame, verdict.at)}>
					{wrap(verdict.text, 60).map((ln, k, arr) => (
						<text key={k} x={W / 2} y={H - 14 - (arr.length - 1 - k) * 24} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={0.82 + 0.18 * pulse}>{ln}</text>
					))}
				</g>
			)}
		</svg>
	);
};
