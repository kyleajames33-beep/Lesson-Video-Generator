// CrossDiagram — a controlled cross (artificial pollination), done by hand.
//
// Two potted parent plants on stone plinths, flowers drawn side-on so the
// parts that matter are visible: petals, the stigma on its style in the
// middle, anthers on filaments either side. On the narration's beats:
//   choose      both parents appear with their trait labels
//   emasculate  the female parent's anthers are lifted away before they shed
//               pollen, then a paper bag drops over the flower
//   pollinate   the bag lifts, a brush carries pollen from the male parent's
//               anthers to the stigma, and the bag goes back on with a label
//               naming both parents
//   seed        seed forms; it's collected to grow and test
// The step chips across the top track the method. Labels are props.

import type {ReactNode} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AMBER, GREEN, GlossDefs, StepChips, clamp, ease, fadeAt, popAt, textWidth} from './shared';

export type CrossProps = {
	steps: {label: string; tool?: string; at: number}[];
	/** female.label / male.label are short names (e.g. "A", "B"); role is added. */
	beats: {choose: number; emasculate: number; bag: number; pollinate: number; rebag: number; seed: number};
	female: {label: string; trait: string};
	male: {label: string; trait: string};
	footer?: {text: string; at: number; amber?: boolean};
	delay?: number;
};

const ID = 'b12m6cross';
const W = 760;
const H = 530;
const PETAL = '#f4b8c8';
const POLLEN = '#f2c230';
const BAG = '#d8c29a';

/** A side-on flower at (x, y) = base of the flower head. */
const Flower = ({x, y, anthers, anthersLift = 0, pollenOnStigma = 0, frame, sway}: {x: number; y: number; anthers: number; anthersLift?: number; pollenOnStigma?: number; frame: number; sway: number}) => (
	<g transform={`translate(${x},${y}) rotate(${sway})`}>
		{/* back petals */}
		<ellipse cx={-30} cy={-34} rx={18} ry={40} fill={PETAL} transform="rotate(-30 -30 -34)" stroke="rgba(150,60,90,0.35)" />
		<ellipse cx={30} cy={-34} rx={18} ry={40} fill={PETAL} transform="rotate(30 30 -34)" stroke="rgba(150,60,90,0.35)" />
		{/* style + stigma */}
		<rect x={-3.5} y={-78} width={7} height={70} rx={3} fill="#9ccf6a" />
		<circle cx={0} cy={-82} r={9} fill={`url(#${ID}-g-stig)`} stroke="rgba(60,100,30,0.4)" />
		{Array.from({length: Math.round(pollenOnStigma * 6)}, (_, k) => (
			<circle key={k} cx={-6 + (k % 3) * 6} cy={-88 + Math.floor(k / 3) * 5} r={2.8} fill={POLLEN} stroke="rgba(0,0,0,0.25)" strokeWidth={0.6} />
		))}
		{/* filaments + anthers */}
		{[-1, 1].map((side) =>
			anthers > 0 ? (
				<g key={side} opacity={anthers} transform={`translate(${side * anthersLift * 30},${-anthersLift * 70})`}>
					<line x1={side * 8} y1={-8} x2={side * 18} y2={-58} stroke="#c9d98a" strokeWidth={3} />
					<ellipse cx={side * 18} cy={-62} rx={6} ry={9} fill={`url(#${ID}-g-anth)`} stroke="rgba(120,90,10,0.45)" />
				</g>
			) : null,
		)}
		{/* front petal (cup) */}
		<path d="M -34 -18 Q 0 -4 34 -18 Q 26 8 0 10 Q -26 8 -34 -18 Z" fill={PETAL} stroke="rgba(150,60,90,0.35)" />
		<path d="M -26 -12 Q 0 -2 26 -12" stroke="#fff" strokeOpacity={0.5} strokeWidth={2} fill="none" />
	</g>
);

const Plant = ({x, baseY, children, frame, k}: {x: number; baseY: number; children: ReactNode; frame: number; k: number}) => (
	<g>
		{/* pot */}
		<path d={`M ${x - 36} ${baseY - 50} L ${x + 36} ${baseY - 50} L ${x + 28} ${baseY} L ${x - 28} ${baseY} Z`} fill="#c7774a" stroke="rgba(0,0,0,0.25)" />
		<rect x={x - 40} y={baseY - 58} width={80} height={12} rx={4} fill="#d98a5c" stroke="rgba(0,0,0,0.25)" />
		{/* stem + leaves */}
		<path d={`M ${x} ${baseY - 56} Q ${x + 6 + idleBob(frame, k, 2)} ${baseY - 100} ${x} ${baseY - 150}`} stroke={GREEN} strokeWidth={5} fill="none" />
		<ellipse cx={x - 22} cy={baseY - 88} rx={22} ry={9} fill="#6fb46f" transform={`rotate(-25 ${x - 22} ${baseY - 88})`} />
		<ellipse cx={x + 22} cy={baseY - 110} rx={22} ry={9} fill="#6fb46f" transform={`rotate(25 ${x + 22} ${baseY - 110})`} />
		{children}
	</g>
);

export const CrossDiagram = ({steps, beats, female, male, footer, delay = 62}: CrossProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const FX = 250;
	const MX = 560;
	const BASE = 378;
	const FY = BASE - 152; // flower base y
	const b = beats;
	const emas = ease(frame, b.emasculate, b.emasculate + 40);
	const bagDown = ease(frame, b.bag, b.bag + 24);
	const bagUp = ease(frame, b.pollinate - 20, b.pollinate);
	const brush = ease(frame, b.pollinate, b.pollinate + 70);
	const rebag = ease(frame, b.rebag, b.rebag + 24);
	// bag height above the flower: 0 = on
	const bagOn = frame < b.pollinate - 20 ? bagDown : frame < b.rebag ? 1 - bagUp : rebag;
	const bagY = FY - 90;
	const bagX = FX - 124 * (1 - bagOn);
	const pollen = interpolate(brush, [0.6, 1], [0, 1], clamp);
	// brush path: from male anthers to female stigma
	const bx0 = MX + 18;
	const by0 = FY - 62;
	const bx1 = FX + 4;
	const by1 = FY - 86;
	const bxp = bx0 + (bx1 - bx0) * brush;
	const byp = by0 + (by1 - by0) * brush - Math.sin(brush * Math.PI) * 60;
	const seedOn = fadeAt(frame, b.seed, 16);
	const labelTag = `${female.label} × ${male.label}`;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A controlled cross by hand pollination" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{stig: '#b6e07c', anth: POLLEN, seed: '#a8773f'}} />
			<StepChips steps={steps} frame={frame} fps={fps} accent={theme.accent} />
			{/* parents */}
			{[
				{x: FX, p: female, female: true},
				{x: MX, p: male, female: false},
			].map(({x, p, female: isF}, i) => (
				<g key={i} opacity={fadeAt(frame, b.choose + i * 12)}>
					<DioramaPlinth id={`${ID}p${i}`} cx={x} cy={BASE + 8} rx={112} />
					<Plant x={x} baseY={BASE} frame={frame} k={i}>
						<Flower
							x={x}
							y={FY + 2}
							anthers={isF ? 1 - interpolate(emas, [0.5, 1], [0, 1], clamp) : 1}
							anthersLift={isF ? emas : 0}
							pollenOnStigma={isF ? pollen : 0}
							frame={frame}
							sway={idleBob(frame, i + 3, 1.2)}
						/>
					</Plant>
					<text x={x} y={BASE + 72} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800}>Parent {p.label} ({isF ? 'female' : 'male'})</text>
					<text x={x} y={BASE + 94} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>{p.trait}</text>
				</g>
			))}
			{/* emasculation: tweezers lift the anthers away */}
			<g opacity={fadeAt(frame, b.emasculate - 10) * (1 - fadeAt(frame, b.emasculate + 44, 12))}>
				<path d={`M ${FX + 60 - emas * 20} ${FY - 130 - emas * 20} L ${FX + 22 + emas * 10} ${FY - 66 - emas * 60} M ${FX + 72 - emas * 20} ${FY - 126 - emas * 20} L ${FX + 26 + emas * 10} ${FY - 62 - emas * 60}`} stroke="#8a93a0" strokeWidth={4} strokeLinecap="round" />
				<text x={FX + 62} y={FY - 104} fill={TOK.amberInk} fontSize={16} fontWeight={800}>anthers removed</text>
			</g>
			{/* the brush with pollen */}
			<g opacity={fadeAt(frame, b.pollinate - 6) * (1 - fadeAt(frame, b.pollinate + 76, 12))}>
				<line x1={bxp + 16} y1={byp - 40} x2={bxp} y2={byp - 4} stroke="#8b5a2b" strokeWidth={5} strokeLinecap="round" />
				<ellipse cx={bxp} cy={byp} rx={6} ry={9} fill="#3c3c3c" />
				{brush > 0.05 && brush < 0.95 && [0, 1, 2, 3].map((k) => <circle key={k} cx={bxp - 4 + k * 3} cy={byp + 6 + (k % 2) * 3} r={2.6} fill={POLLEN} />)}
				<text x={MX + 60} y={FY - 104} fill={TOK.inkDim} fontSize={16} fontWeight={800}>chosen pollen</text>
			</g>
			{/* paper bag over the female flower */}
			<g opacity={fadeAt(frame, b.bag - 8) * (0.45 + 0.55 * bagOn)}>
				<g transform={`translate(${bagX},${bagY})`}>
					<path d="M -48 0 L 48 0 L 44 128 L -44 128 Z" fill={BAG} opacity={0.93} stroke="rgba(90,70,40,0.5)" strokeWidth={1.5} />
					<path d="M -48 0 L -40 -12 L -28 0 L -16 -12 L -4 0 L 8 -12 L 20 0 L 32 -12 L 48 0" fill={BAG} stroke="rgba(90,70,40,0.5)" strokeWidth={1.5} />
					<rect x={-40} y={8} width={16} height={112} fill="#fff" opacity={0.18} />
					<text y={64} textAnchor="middle" fill="#6b5430" fontSize={16} fontWeight={800}>bag</text>
				</g>
			</g>
			{/* label tied on at re-bagging */}
			<g opacity={fadeAt(frame, b.rebag + 20)} transform={`translate(${FX + 92},${FY - 36})`}>
				<line x1={-40} y1={-6} x2={-6} y2={0} stroke="#8a7a5a" strokeWidth={1.5} />
				<rect x={-6} y={-16} width={textWidth(labelTag, 16) + 20} height={32} rx={6} fill="#fffaf0" stroke={AMBER} strokeWidth={2 + idlePulse(frame)} />
				<text x={4 + (textWidth(labelTag, 16)) / 2 + 0} y={5} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>{labelTag}</text>
			</g>
			{/* seed: collect, grow, test */}
			<g opacity={seedOn}>
				<g transform={`translate(${(FX + MX) / 2},${FY + 30})`}>
					{[-2, -1, 0, 1, 2].map((k) => (
						<g key={k} transform={`translate(${k * 22},${idleBob(frame, k + 10, 1.2)}) scale(${Math.min(1, popAt(frame, fps, b.seed + (k + 2) * 5))})`}>
							<ellipse rx={8} ry={11} fill={`url(#${ID}-g-seed)`} stroke="rgba(0,0,0,0.3)" />
						</g>
					))}
					<text y={-26} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>seed from {labelTag}</text>
					<text y={40} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>grow and test</text>
				</g>
			</g>
			{footer && (
				<text x={W / 2} y={H - 10} textAnchor="middle" fill={footer.amber ? TOK.amberInk : TOK.inkDim} fontSize={19} fontWeight={800} opacity={fadeAt(frame, footer.at)}>{footer.text}</text>
			)}
		</svg>
	);
};
