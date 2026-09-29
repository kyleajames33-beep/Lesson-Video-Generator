// PondweedDiagram (bio11m2Pondweed) — the pondweed photosynthesis practical.
//
// A sprig of pondweed sits in a glass beaker of water (with dissolved CO₂ from
// sodium hydrogen carbonate) on a stone plinth. A lamp stands at distance d and
// moves to each `steps` position on its beat. Oxygen bubbles rise from the cut
// stem at a rate that follows the light reaching it (intensity ∝ 1/d², then
// levelling off as another factor limits), and a meter shows the bubble rate.
// Bubbles are spawned from the integrated rate, so the count on screen always
// matches the meter. An optional heat shield (a glass tank of water) slides in
// between lamp and beaker. `tags` label the variables. All text from props.
// Hold: bubbles keep rising at the current rate.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth} from '../../diorama';
import {COL, H, Lines, Notes, Tag, Title, W, clamp, fadeAt, popAt, wrap, type Note, type Tone} from './shared';

export type PondweedProps = {
	title?: string;
	at?: number;
	/** Lamp distance as a fraction 0.25..1 of the bench, on each beat. */
	steps?: {d: number; at: number}[];
	shield?: {at: number; label?: string};
	tags?: {text: string; at: number; anchor: 'lamp' | 'bubbles' | 'beaker' | 'shield' | 'meter'; tone?: Tone}[];
	meterLabel?: string;
	beakerLabel?: string;
	notes?: Note[];
	delay?: number;
};

const ID = 'b11m2pw';

export const PondweedDiagram = ({title, at = 0, steps = [{d: 0.8, at: 0}], shield, tags = [], meterLabel = 'O₂ bubbles per minute', beakerLabel, notes = [], delay = 62}: PondweedProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = title ? 50 : 10;
	const bx = 470;
	const bTop = top + 150;
	const bBot = top + 390;
	const bw = 150;

	const dAt = (f: number) => {
		let d = steps[0].d;
		for (let i = 1; i < steps.length; i++) {
			d = interpolate(f, [steps[i].at, steps[i].at + 24], [d, steps[i].d], clamp);
		}
		return d;
	};
	const rateAt = (f: number) => {
		const I = (0.35 / dAt(f)) ** 2;
		return I / (I + 0.35); // 0..~0.75
	};
	const d = dAt(frame);
	const rate = frame < at ? 0 : rateAt(frame);
	const lampX = bx - bw / 2 - 40 - d * 250;
	const lampY = top + 250;

	// bubbles from integrated rate: one bubble per unit of accumulated "count"
	const start = Math.max(0, at);
	const bubbles: {age: number; k: number}[] = [];
	let acc = 0;
	let k = 0;
	for (let f = start; f <= frame; f++) {
		acc += rateAt(f) * 0.15;
		if (acc >= 1) {
			acc -= 1;
			const age = frame - f;
			if (age < 64) bubbles.push({age, k});
			k++;
		}
	}
	const stemTop = {x: bx - 6, y: bTop + 120};
	const anchors = {
		lamp: {x: lampX, y: lampY - 40},
		bubbles: {x: stemTop.x + 4, y: bTop + 36},
		beaker: {x: bx, y: bBot - 40},
		shield: {x: bx - bw / 2 - 30, y: top + 250},
		meter: {x: 690, y: top + 200},
	};
	const tagPos = {
		lamp: {x: 150, y: top + 40},
		bubbles: {x: 470, y: top + 40},
		beaker: {x: 380, y: bBot + 96},
		shield: {x: 280, y: top + 112},
		meter: {x: 640, y: top + 90},
	};
	const shieldT = shield ? interpolate(frame, [shield.at, shield.at + 24], [0, 1], clamp) : 0;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Pondweed practical'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={Math.min(1, popAt(frame, fps, 0) * 1.3)}>
				<DioramaPlinth id={`${ID}b`} cx={bx} cy={bBot + 10} rx={120} />
				{/* light beam */}
				<path d={`M ${lampX + 26} ${lampY - 20} L ${bx - bw / 2} ${bTop + 60} L ${bx - bw / 2} ${bBot - 30} L ${lampX + 26} ${lampY + 20} Z`} fill="#f4c542" opacity={0.08 + 0.2 * (1 - d)} />
				{/* beaker */}
				<rect x={bx - bw / 2} y={bTop + 30} width={bw} height={bBot - bTop - 30} fill="#cfe6f5" opacity={0.7} />
				<path d={`M ${bx - bw / 2} ${bTop} L ${bx - bw / 2} ${bBot} L ${bx + bw / 2} ${bBot} L ${bx + bw / 2} ${bTop}`} fill="none" stroke="#8fa9b6" strokeWidth={3} />
				{/* pondweed: cut end up */}
				<path d={`M ${stemTop.x} ${stemTop.y} C ${bx + 6} ${bTop + 130}, ${bx - 14} ${bTop + 180}, ${bx} ${bBot - 12}`} fill="none" stroke={COL.leafDark} strokeWidth={4} />
				{Array.from({length: 7}, (_, j) => {
					const y = stemTop.y + 20 + j * 24;
					const x = bx - 6 + Math.sin(j) * 4;
					return (
						<g key={j}>
							{[-1, 1].map((s) => <ellipse key={s} cx={x + s * 13} cy={y} rx={12} ry={4} transform={`rotate(${s * -25} ${x + s * 13} ${y})`} fill={COL.leaf} stroke={COL.leafDark} strokeWidth={1} />)}
						</g>
					);
				})}
				{bubbles.map((b) => (
					<circle key={b.k} cx={stemTop.x + Math.sin(b.k * 1.7 + b.age / 8) * 3} cy={stemTop.y - 6 - b.age * 1.4} r={4 + (b.k % 3)} fill="rgba(255,255,255,0.85)" stroke="#6aa6d0" strokeWidth={1.4} opacity={b.age > 52 ? (64 - b.age) / 12 : 1} />
				))}
				{beakerLabel && <Lines x={bx + bw / 2 + 10} y={bBot - 70} lines={wrap(beakerLabel, 8)} size={17} color="#2a6fa8" anchor="start" />}
				{/* lamp */}
				<g>
					<rect x={lampX - 6} y={lampY + 10} width={12} height={bBot - lampY - 6} fill="#9a9a9a" />
					<rect x={lampX - 36} y={bBot} width={72} height={10} rx={4} fill="#7a7a7a" />
					<path d={`M ${lampX - 22} ${lampY - 26} L ${lampX + 28} ${lampY - 18} L ${lampX + 28} ${lampY + 18} L ${lampX - 22} ${lampY + 26} Z`} fill="#5a6a7a" />
					<circle cx={lampX + 28} cy={lampY} r={14} fill="#fff3b0" stroke="#e0a82a" strokeWidth={2} />
				</g>
				{/* distance d */}
				<g opacity={fadeAt(frame, steps[0].at)}>
					<line x1={lampX + 28} x2={bx - bw / 2} y1={bBot + 34} y2={bBot + 34} stroke={TOK.ink} strokeWidth={2} />
					<line x1={lampX + 28} x2={lampX + 28} y1={bBot + 26} y2={bBot + 42} stroke={TOK.ink} strokeWidth={2} />
					<line x1={bx - bw / 2} x2={bx - bw / 2} y1={bBot + 26} y2={bBot + 42} stroke={TOK.ink} strokeWidth={2} />
					<text x={(lampX + 28 + bx - bw / 2) / 2} y={bBot + 58} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} fontStyle="italic">d</text>
				</g>
				{shield && shieldT > 0 && (
					<g transform={`translate(0, ${(1 - shieldT) * -40})`} opacity={shieldT}>
						<rect x={bx - bw / 2 - 44} y={bTop + 50} width={26} height={bBot - bTop - 50} rx={4} fill="#cfe6f5" stroke="#8fa9b6" strokeWidth={2} opacity={0.9} />
					</g>
				)}
			</g>
			{/* meter */}
			<g opacity={fadeAt(frame, at)}>
				<rect x={672} y={top + 130} width={36} height={220} rx={10} fill="#ffffff" stroke={TOK.inkDim} strokeWidth={2} />
				<rect x={678} y={top + 344 - 208 * (rate / 0.75)} width={24} height={208 * (rate / 0.75)} rx={6} fill={theme.accent} />
				<Lines x={690} y={top + 372} lines={wrap(meterLabel, 12)} size={17} color={TOK.inkDim} />
			</g>
			{tags.map((t, i) => {
				const p = tagPos[t.anchor];
				const a = anchors[t.anchor];
				return <Tag key={i} frame={frame} fps={fps} at={t.at} x={p.x} y={p.y} text={t.text} tone={t.tone} accent={theme.accent} tx={a.x} ty={a.y} />;
			})}
			<Notes frame={frame} notes={notes} />
		</svg>
	);
};
