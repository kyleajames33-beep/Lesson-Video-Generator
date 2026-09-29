// RecombinantDiagram — the recombinant DNA toolchain, played on one stage.
//
// Step chips across the top name each step and its tool; the objects below
// change in place as each step lands:
//   cut      a restriction enzyme (scissors) cuts the chosen gene out of the
//            donor DNA and cuts the plasmid ring open
//   join     the gene drops into the gap; DNA ligase seals both joins, making
//            recombinant DNA (the ring now carries the amber gene)
//   insert   the recombinant plasmid goes into a host bacterium
//   express  the host multiplies (each daughter carries the plasmid) and
//   / copy   either makes the protein (express) or simply copies the gene
//            (copy, for gene cloning)
// Step labels, tool names and the ending come from props. Frames relative to
// `delay`.

import type {ReactNode} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AMBER, GREEN, GlossDefs, StoneLedge, clamp, ease, fadeAt, popAt, textWidth} from './shared';

export type RecombinantProps = {
	steps: {label: string; tool?: string; at: number}[];
	/** Which action each step plays, in order (default cut, join, insert, express). */
	actions?: ('cut' | 'join' | 'insert' | 'express' | 'copy')[];
	geneLabel?: string;
	productLabel?: string;
	footer?: {text: string; at: number; amber?: boolean};
	delay?: number;
};

const ID = 'b12m6rec';
const W = 760;
const H = 530;
const DNA = '#8fa3bd';

const arcPath = (cx: number, cy: number, r: number, a0: number, a1: number) => {
	const p = (a: number) => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)];
	const [x0, y0] = p(a0);
	const [x1, y1] = p(a1);
	const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
	return `M ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1}`;
};

const Scissors = ({x, y, open, o}: {x: number; y: number; open: number; o: number}) => (
	<g opacity={o} transform={`translate(${x},${y})`}>
		<g transform={`rotate(${-18 * open})`}>
			<path d="M 0 0 L 26 -4 L 26 2 Z" fill="#5a6573" />
			<circle cx={-8} cy={-6} r={6} fill="none" stroke="#5a6573" strokeWidth={3} />
		</g>
		<g transform={`rotate(${18 * open})`}>
			<path d="M 0 0 L 26 4 L 26 -2 Z" fill="#7a8593" />
			<circle cx={-8} cy={6} r={6} fill="none" stroke="#7a8593" strokeWidth={3} />
		</g>
	</g>
);

const Bacterium = ({x, y, s = 1, o = 1, children}: {x: number; y: number; s?: number; o?: number; children?: ReactNode}) => (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<ellipse cx={3} cy={40} rx={70} ry={10} fill="rgba(40,36,30,0.18)" />
		<rect x={-72} y={-36} width={144} height={72} rx={36} fill={`url(#${ID}-g-bac)`} stroke="rgba(60,110,70,0.5)" strokeWidth={2} />
		<rect x={-62} y={-30} width={124} height={16} rx={8} fill="#fff" opacity={0.25} />
		{children}
	</g>
);

export const RecombinantDiagram = ({steps, actions = ['cut', 'join', 'insert', 'express'], geneLabel = 'chosen gene', productLabel = 'protein', footer, delay = 62}: RecombinantProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const at = (a: string) => {
		const i = actions.indexOf(a as never);
		return i < 0 ? -9999 : steps[i]?.at ?? -9999;
	};
	const tJoin = ease(frame, at('join'), at('join') + 44);
	// no explicit cut step (e.g. gene cloning): the fragment lifts and the ring opens as the join starts
	const tCut = at('cut') > -9999 ? ease(frame, at('cut'), at('cut') + 30) : interpolate(tJoin, [0, 0.3], [0, 1], clamp);
	const tIns = ease(frame, at('insert'), at('insert') + 40);
	const endAt = Math.max(at('express'), at('copy'));
	const ending: 'express' | 'copy' = at('copy') > -9999 ? 'copy' : 'express';
	const tEnd = ease(frame, endAt, endAt + 40);

	// Donor DNA with the gene in the middle
	const DX0 = 40;
	const DX1 = 320;
	const DY = 168;
	const G0 = 140;
	const G1 = 222;
	// Plasmid ring
	const PX = 548;
	const PY = 178;
	const PR = 62;
	const gapHalf = 16 * tCut; // degrees either side of the top (-90°)
	// the gene flies to the gap and bends into the ring
	const gx = interpolate(tJoin, [0, 1], [(G0 + G1) / 2, PX], clamp);
	const gy = interpolate(tJoin, [0, 1], [DY - 26 * tCut, PY - PR], clamp) - Math.sin(tJoin * Math.PI) * 40;
	const joined = tJoin >= 1;
	// then the whole plasmid shrinks into the bacterium
	const BX = 380;
	const BY = 356;
	const pS = interpolate(tIns, [0, 1], [1, 0.34], clamp);
	const pX = interpolate(tIns, [0, 1], [PX, BX], clamp);
	const pY = interpolate(tIns, [0, 1], [PY, BY], clamp);
	const multiplied = tEnd > 0.02;
	const daughters = [
		[-122, -10], [122, -10], [-44, 18], [44, 18],
	];

	const plasmid = (x: number, y: number, s: number, key: string, withGene: boolean, gap = 0) => (
		<g key={key} transform={`translate(${x},${y}) scale(${s})`}>
			<path d={arcPath(0, 0, PR, -90 + gap + (withGene ? 16 : 0), 270 - gap - (withGene ? 16 : 0))} fill="none" stroke={DNA} strokeWidth={14} strokeLinecap="round" />
			<path d={arcPath(0, 0, PR, -90 + gap + (withGene ? 16 : 0), 270 - gap - (withGene ? 16 : 0))} fill="none" stroke="#fff" strokeOpacity={0.35} strokeWidth={4} strokeLinecap="round" />
			{withGene && <path d={arcPath(0, 0, PR, -106, -74)} fill="none" stroke={AMBER} strokeWidth={14} strokeLinecap="butt" />}
		</g>
	);

	const anyTool = steps.some((s) => s.tool);
	const chips = (() => {
		const ws = steps.map((s) => Math.max(textWidth(s.label, 17), s.tool ? textWidth(s.tool, 15) : 0) + 24);
		const gap = 12;
		const total = ws.reduce((a, b) => a + b, 0) + gap * (ws.length - 1);
		let x = W / 2 - total / 2;
		return steps.map((s, i) => {
			const cx = x + ws[i] / 2;
			x += ws[i] + gap;
			const on = frame >= s.at;
			const current = on && (i === steps.length - 1 || frame < steps[i + 1].at);
			const p = Math.min(1, popAt(frame, fps, s.at));
			return (
				<g key={i} opacity={0.35 + 0.65 * p}>
					<rect x={cx - ws[i] / 2} y={14} width={ws[i]} height={anyTool ? 54 : 34} rx={12} fill={on ? '#ffffff' : '#f1f3f6'} stroke={current ? theme.accent : TOK.inkMute} strokeWidth={current ? 3 : 1.5} />
					<text x={cx} y={anyTool && !s.tool ? 47 : 37} textAnchor="middle" fill={on ? theme.accent : TOK.inkDim} fontSize={17} fontWeight={800}>{s.label}</text>
					{s.tool && <text x={cx} y={58} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{s.tool}</text>}
				</g>
			);
		});
	})();

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Recombinant DNA: cut, join, insert, express" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{bac: '#bfe3c4', prot: GREEN}} />
			{chips}

			{/* donor DNA on a ledge */}
			<g opacity={fadeAt(frame, 0) * (1 - fadeAt(frame, at('insert'), 20))}>
				<StoneLedge id={`${ID}dl`} x={DX0 - 10} y={DY + 20} w={DX1 - DX0 + 20} d={12} />
				<text x={(DX0 + DX1) / 2} y={DY + 62} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>donor DNA</text>
				<line x1={DX0} y1={DY} x2={G0 - 3 * tCut} y2={DY} stroke={DNA} strokeWidth={14} strokeLinecap="round" />
				<line x1={G1 + 3 * tCut} y1={DY} x2={DX1} y2={DY} stroke={DNA} strokeWidth={14} strokeLinecap="round" />
				{tJoin <= 0 && (
					<g>
						<line x1={G0} y1={DY - 26 * tCut} x2={G1} y2={DY - 26 * tCut} stroke={AMBER} strokeWidth={14} strokeLinecap="butt" />
						<text x={(G0 + G1) / 2} y={DY - 26 * tCut - 16} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>{geneLabel}</text>
					</g>
				)}
			</g>
			{/* the gene in flight */}
			{tJoin > 0 && !joined && <line x1={gx - 36} y1={gy} x2={gx + 36} y2={gy} stroke={AMBER} strokeWidth={14} />}

			{/* plasmid on its plinth (until it goes into the host) */}
			<g opacity={fadeAt(frame, 10)}>
				<g opacity={1 - fadeAt(frame, at('insert') + 10, 16)}>
					<DioramaPlinth id={`${ID}pp`} cx={PX} cy={PY + PR + 34} rx={110} />
				</g>
				{!multiplied && plasmid(pX, pY + idleBob(frame, 2, 1.2) * (1 - tIns), pS, 'p', joined, joined ? 0 : gapHalf)}
				<text x={PX} y={PY + PR + 102} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={1 - fadeAt(frame, at('insert'), 12)}>
					{joined ? 'recombinant plasmid' : 'plasmid (vector)'}
				</text>
			</g>

			{/* tools at work */}
			<Scissors x={G0 - 30} y={DY + 2} open={Math.abs(Math.sin(tCut * Math.PI * 2))} o={fadeAt(frame, at('cut') - 10) * (1 - fadeAt(frame, at('cut') + 40, 14))} />
			<Scissors x={PX - 26} y={PY - PR - 36} open={Math.abs(Math.sin(tCut * Math.PI * 2))} o={fadeAt(frame, at('cut') - 10) * (1 - fadeAt(frame, at('cut') + 40, 14))} />
			{joined && tIns < 0.2 &&
				[-106, -74].map((a, i) => {
					const x = PX + PR * Math.cos((a * Math.PI) / 180);
					const y = PY + PR * Math.sin((a * Math.PI) / 180);
					const o = 1 - fadeAt(frame, at('join') + 50, 20);
					return (
						<g key={i} opacity={o}>
							<circle cx={x} cy={y} r={10 + idlePulse(frame, 20) * 4} fill="none" stroke={theme.accent} strokeWidth={2.5} />
						</g>
					);
				})}

			{/* host */}
			<g opacity={fadeAt(frame, at('insert') - 10)}>
				<DioramaPlinth id={`${ID}hp`} cx={BX} cy={BY + 44} rx={multiplied ? 172 : 130} />
				{!multiplied && (
					<Bacterium x={BX} y={BY + idleBob(frame, 5, 1)}>
						{tIns >= 1 && plasmid(0, 0, 0.34, 'in', true)}
					</Bacterium>
				)}
				{multiplied &&
					daughters.map(([dx, dy], i) => {
						const p = Math.min(1, popAt(frame, fps, endAt + i * 8));
						return (
							<Bacterium key={i} x={BX + dx * p} y={BY + dy * p + idleBob(frame, i + 8, 1)} s={0.62}>
								{plasmid(0, 0, 0.34, `d${i}`, true)}
								{ending === 'express' &&
									[0, 1, 2].map((k) => {
										const pk = fadeAt(frame, endAt + 50 + k * 14 + i * 5, 12);
										return <circle key={k} cx={52 + k * 16} cy={-44 - k * 6 + idleBob(frame, k + i * 3, 2)} r={7} fill={`url(#${ID}-g-prot)`} opacity={pk} />;
									})}
							</Bacterium>
						);
					})}
				<text x={BX} y={BY - 58} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={1 - fadeAt(frame, endAt + 10, 12)}>
					host cell (bacterium)
				</text>
				{multiplied && (
					<text x={BX} y={BY - 76} textAnchor="middle" fill={ending === 'express' ? GREEN : TOK.amberInk} fontSize={19} fontWeight={800} opacity={fadeAt(frame, endAt + 60)}>
						{ending === 'express' ? `each host cell makes the ${productLabel}` : `many copies of the ${geneLabel}`}
					</text>
				)}
			</g>
			{footer && (
				<text x={W / 2} y={H - 10} textAnchor="middle" fill={footer.amber ? TOK.amberInk : TOK.inkDim} fontSize={19} fontWeight={800} opacity={fadeAt(frame, footer.at)}>{footer.text}</text>
			)}
		</svg>
	);
};
