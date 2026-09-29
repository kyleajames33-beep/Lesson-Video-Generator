// ConditionsDiagram (bio11m2Conditions) — the conditions photosynthesis needs,
// all at once.
//
// A leaf stands on a stone plinth. Five conditions arrive round it on their
// beats (light, carbon dioxide, water, chlorophyll, a suitable temperature),
// each joined to the leaf. Once every condition is present the leaf releases
// oxygen bubbles and glucose. Each `removal` then takes one condition away for
// a while (night, closed stomata, a white leaf patch, too cold): that input
// greys out with a cross and the output stops until it returns. All text from
// props. Hold: output keeps streaming (or stays stopped); inputs bob.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {COL, GLOSS, GlossDefs, H, LeafShape, Lines, Mark, Notes, Sun, Title, Token, W, fadeAt, mix, popAt, wrap, type Note} from './shared';

type Key = 'light' | 'co2' | 'water' | 'chlorophyll' | 'temp';
export type ConditionsProps = {
	title?: string;
	leafAt?: number;
	inputs: {key: Key; label: string; at: number}[];
	output?: {at: number; label: string};
	removals?: {key: Key; at: number; until: number; text: string}[];
	notes?: Note[];
	delay?: number;
};

const ID = 'b11m2cond';
const SLOTS: Record<Key, {x: number; y: number}> = {
	light: {x: 110, y: 90},
	co2: {x: 90, y: 250},
	water: {x: 130, y: 400},
	chlorophyll: {x: 520, y: 400},
	temp: {x: 560, y: 250},
};

const Thermo = ({x, y}: {x: number; y: number}) => (
	<g>
		<rect x={x - 7} y={y - 34} width={14} height={50} rx={7} fill="#ffffff" stroke={TOK.inkDim} strokeWidth={2} />
		<rect x={x - 3} y={y - 14} width={6} height={30} fill="#d9534a" />
		<circle cx={x} cy={y + 20} r={11} fill="#d9534a" stroke={TOK.inkDim} strokeWidth={2} />
	</g>
);

export const ConditionsDiagram = ({title, leafAt = 0, inputs, output, removals = [], notes = [], delay = 62}: ConditionsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = title ? 40 : 0;
	const leaf = {x: 330, y: top + 250};
	const removedNow = (k: Key) => removals.find((r) => r.key === k && frame >= r.at && frame < r.until);
	const activeRemoval = removals.find((r) => frame >= r.at && frame < r.until);
	const allIn = inputs.every((i) => frame >= i.at + 10);
	const running = allIn && !activeRemoval && output && frame >= output.at;
	const chloroGone = !!removedNow('chlorophyll');

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Conditions for photosynthesis'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={Math.min(1, popAt(frame, fps, leafAt) * 1.3)}>
				<DioramaPlinth id={`${ID}l`} cx={leaf.x} cy={leaf.y + 60} rx={120} />
				<g transform={`translate(0, ${idleBob(frame, 2, 1.4)})`}>
					<path d={`M ${leaf.x - 70} ${leaf.y + 52} L ${leaf.x - 56} ${leaf.y + 30}`} stroke={COL.stem} strokeWidth={5} strokeLinecap="round" />
					<LeafShape x={leaf.x - 58} y={leaf.y + 30} len={170} angle={-20} fill={COL.leaf} />
					{chloroGone && <ellipse cx={leaf.x + 30} cy={leaf.y - 2} rx={40} ry={18} transform={`rotate(-20 ${leaf.x + 30} ${leaf.y - 2})`} fill="#f4f1e4" opacity={0.95} />}
				</g>
			</g>
			{inputs.map((inp, i) => {
				const p = popAt(frame, fps, inp.at);
				if (p <= 0) return null;
				const s = SLOTS[inp.key];
				const gone = removedNow(inp.key);
				const dim = gone ? 0.35 : 1;
				const bob = idleBob(frame, i, 1.6);
				return (
					<g key={inp.key} opacity={Math.min(1, p * 1.4)}>
						<line x1={s.x + (s.x < leaf.x ? 40 : -40)} y1={s.y} x2={leaf.x + (s.x < leaf.x ? -30 : 40)} y2={leaf.y} stroke={gone ? TOK.inkMute : theme.accent} strokeWidth={2.5} strokeDasharray="6 6" opacity={0.6 * dim} />
						<g opacity={dim} transform={`translate(0, ${bob})`}>
							{inp.key === 'light' && <Sun x={s.x} y={s.y} r={24} frame={frame} />}
							{inp.key === 'co2' && <Token id={ID} name="co2" x={s.x} y={s.y} r={28} label="CO₂" size={18} />}
							{inp.key === 'water' && <Token id={ID} name="water" x={s.x} y={s.y} r={28} label="H₂O" size={18} />}
							{inp.key === 'chlorophyll' && <Token id={ID} name="chloro" x={s.x} y={s.y} r={28} label="" />}
							{inp.key === 'temp' && <Thermo x={s.x} y={s.y} />}
						</g>
						<Lines x={s.x} y={s.y + 50} lines={wrap(inp.label, 16)} size={18} color={gone ? TOK.inkMute : TOK.ink} />
						{gone && <Mark x={s.x + 26} y={s.y - 26} ok={false} r={12} />}
					</g>
				);
			})}
			{output && frame >= output.at && (
				<g opacity={fadeAt(frame, output.at)}>
					{running && Array.from({length: 6}, (_, k) => {
						const t = ((frame * 0.013 + k / 6) % 1);
						return <circle key={k} cx={leaf.x + 60 + Math.sin(t * 9 + k) * 6 + t * 40} cy={leaf.y - 30 - t * 120} r={6 + t * 3} fill="rgba(255,255,255,0.7)" stroke={COL.o2} strokeWidth={1.5} opacity={Math.sin(t * Math.PI)} />;
					})}
					<Token id={ID} name="o2" x={leaf.x + 120} y={leaf.y - 150} r={24} label="O₂" size={17} opacity={running ? 1 : 0.35} />
					<Token id={ID} name="sugar" x={leaf.x + 196} y={leaf.y - 150} r={36} label="glucose" size={13} opacity={running ? 1 : 0.35} />
					<Lines x={leaf.x + 153} y={leaf.y - 196} lines={wrap(output.label, 22)} size={18} color={running ? TOK.amberInk : TOK.inkMute} />
					{!running && <text x={leaf.x + 150} y={leaf.y - 110} textAnchor="middle" fill={COL.stop} fontSize={18} fontWeight={800}>stopped</text>}
				</g>
			)}
			{activeRemoval && (
				<g opacity={fadeAt(frame, activeRemoval.at, 10)}>
					<rect x={W / 2 - 230} y={H - 50} width={460} height={36} rx={18} fill={mix('#ffffff', TOK.amber, 0.12 + 0.08 * idlePulse(frame))} stroke={TOK.amber} strokeWidth={2} />
					<text x={W / 2} y={H - 26} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800}>{activeRemoval.text}</text>
				</g>
			)}
			<Notes frame={frame} notes={notes} bottom={H - 60} />
		</svg>
	);
};
