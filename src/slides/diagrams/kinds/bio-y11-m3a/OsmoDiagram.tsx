// OsmoDiagram (bio11m3aOsmo) — opposite osmotic problems, opposite fixes.
//
// Two glass tanks on stone ledges: a freshwater fish (body fluids saltier
// than the water) and a marine fish (body fluids less salty than seawater;
// the tank carries visibly more salt). The arrows' DIRECTIONS follow from
// that one fact, and land on their beats:
//   osmosis  water moves IN across the freshwater fish's gills and OUT of the
//            marine fish's; salts leak out of one and in to the other.
//   drink    the marine fish drinks seawater; the freshwater fish does not
//            (cross).
//   urine    the freshwater fish releases lots of dilute urine (many large
//            pale drops); the marine fish a little concentrated urine (few
//            small yellow drops).
//   pump     the gills actively pump salts IN (freshwater) or OUT (marine),
//            against the concentration gradient: uses energy (ATP).
// Labels from props can override the defaults. Beats are frames after
// `delay`. Hold: arrows keep flowing, fish swim gently.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob} from '../../diorama';
import {Beat, Foot, H, Ledge, Mark, Tag, W, fadeAt, hash01} from './shared';

export type OsmoProps = {
	beats: {tanks: number; osmosis: number; drink?: number; urine?: number; pump?: number};
	titles?: [string, string];
	subs?: [string, string];
	footer?: Beat[];
	delay?: number;
};

const ID = 'b11m3osmo';

const Fish = ({x, y, color}: {x: number; y: number; color: string}) => (
	<g transform={`translate(${x},${y})`}>
		<path d="M -70 0 L -100 -26 L -96 0 L -100 26 Z" fill={color} stroke="rgba(0,0,0,0.25)" />
		<ellipse cx={0} cy={0} rx={74} ry={32} fill={color} stroke="rgba(0,0,0,0.25)" />
		<path d="M -10 -30 Q 10 -52 30 -30 Z" fill={color} stroke="rgba(0,0,0,0.2)" />
		<path d="M 36 -18 Q 28 0 36 18" stroke="rgba(0,0,0,0.45)" strokeWidth={3} fill="none" />
		<path d="M 44 -16 Q 37 0 44 16" stroke="rgba(0,0,0,0.3)" strokeWidth={2} fill="none" />
		<circle cx={56} cy={-8} r={4} fill="#fff" />
		<circle cx={57} cy={-8} r={2} fill="#222" />
		<path d="M 70 4 L 76 6 L 70 8" stroke="#333" strokeWidth={2} fill="none" />
	</g>
);

/** Arrow with a head, flowing dashes. */
const Flow = ({x1, y1, x2, y2, color, frame, w = 4}: {x1: number; y1: number; x2: number; y2: number; color: string; frame: number; w?: number}) => {
	const a = Math.atan2(y2 - y1, x2 - x1);
	return (
		<g>
			<line x1={x1} y1={y1} x2={x2 - Math.cos(a) * 12} y2={y2 - Math.sin(a) * 12} stroke={color} strokeWidth={w} strokeDasharray="10 7" strokeDashoffset={-frame * 0.8} strokeLinecap="round" />
			<path d={`M ${x2} ${y2} L ${x2 - Math.cos(a) * 16 - Math.sin(a) * 8} ${y2 - Math.sin(a) * 16 + Math.cos(a) * 8} L ${x2 - Math.cos(a) * 16 + Math.sin(a) * 8} ${y2 - Math.sin(a) * 16 - Math.cos(a) * 8} Z`} fill={color} />
		</g>
	);
};

export const OsmoDiagram = ({beats, titles = ['Freshwater fish', 'Marine fish'], subs = ['saltier inside than the water', 'less salty inside than seawater'], footer = [], delay = 62}: OsmoProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const tw = 340;
	const th = 290;
	const ty = 88;
	const panels = [
		{x: 22, fresh: true},
		{x: W - 22 - tw, fresh: false},
	];
	const WATER = '#2b7fc4';
	const SALT = '#8a8f99';

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Osmoregulation in freshwater and marine fish" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{panels.map((p, i) => {
				const cx = p.x + tw / 2;
				const fy = ty + 130 + idleBob(frame, i, 3);
				const gillX = cx + 36;
				const mouthX = cx + 76;
				const ventX = cx - 40;
				const nSalt = p.fresh ? 6 : 30;
				return (
					<g key={i} opacity={fadeAt(frame, beats.tanks + i * 10)}>
						<text x={cx} y={30} textAnchor="middle" fontSize={20} fontWeight={800} fill={i ? '#1f5f8f' : theme.accent}>
							{titles[i]}
						</text>
						<text x={cx} y={54} textAnchor="middle" fontSize={15} fontWeight={700} fill={TOK.inkDim}>
							{subs[i]}
						</text>
						{/* tank */}
						<rect x={p.x} y={ty} width={tw} height={th} rx={10} fill={p.fresh ? '#d9f0fa' : '#9fcbe6'} stroke="#7fa9c2" strokeWidth={3} />
						<rect x={p.x + 8} y={ty + 8} width={10} height={th - 16} rx={5} fill="#ffffff" opacity={0.5} />
						{Array.from({length: nSalt}, (_, k) => (
							<circle key={k} cx={p.x + 20 + hash01(k * 3 + i) * (tw - 40)} cy={ty + 16 + ((hash01(k * 7 + i) * (th - 32) + frame * 0.15 * (k % 3)) % (th - 32))} r={3} fill="#ffffff" stroke={SALT} strokeWidth={1} />
						))}
						<Ledge x0={p.x - 10} x1={p.x + tw + 10} y={ty + th + 2} />
						<Fish x={cx} y={fy} color={p.fresh ? '#7fa36a' : '#6f93b8'} />
						{/* osmosis */}
						<g opacity={fadeAt(frame, beats.osmosis)}>
							{p.fresh ? (
								<Flow x1={gillX + 6} y1={fy - 86} x2={gillX} y2={fy - 34} color={WATER} frame={frame} />
							) : (
								<Flow x1={gillX} y1={fy - 34} x2={gillX + 6} y2={fy - 86} color={WATER} frame={frame} />
							)}
							<Tag x={gillX - 30} y={fy - 104} text={p.fresh ? 'water in' : 'water out'} color={WATER} size={15} />
							{p.fresh ? (
								<Flow x1={gillX - 6} y1={fy + 30} x2={gillX - 14} y2={fy + 70} color={SALT} frame={frame} w={3} />
							) : (
								<Flow x1={gillX - 14} y1={fy + 70} x2={gillX - 6} y2={fy + 30} color={SALT} frame={frame} w={3} />
							)}
							<Tag x={gillX - 24} y={fy + 88} text={p.fresh ? 'salts leak out' : 'salts leak in'} color={SALT} size={14} />
						</g>
						{/* drinking */}
						{beats.drink !== undefined && (
							<g opacity={fadeAt(frame, beats.drink)}>
								{p.fresh ? (
									<g>
										<Mark x={mouthX + 34} y={fy + 6} ok={false} s={0.9} />
										<Tag x={mouthX + 12} y={fy + 44} text="doesn't drink" color={TOK.inkDim} size={14} />
									</g>
								) : (
									<g>
										<Flow x1={mouthX + 56} y1={fy + 6} x2={mouthX + 4} y2={fy + 6} color={WATER} frame={frame} />
										<Tag x={mouthX + 10} y={fy + 44} text="drinks seawater" color={WATER} size={14} />
									</g>
								)}
							</g>
						)}
						{/* urine */}
						{beats.urine !== undefined && (
							<g opacity={fadeAt(frame, beats.urine)}>
								{Array.from({length: p.fresh ? 5 : 2}, (_, k) => {
									const t = ((frame + k * 17) % 60) / 60;
									return <ellipse key={k} cx={ventX - 4 + k * 3} cy={fy + 30 + t * 60} rx={p.fresh ? 7 : 3.5} ry={p.fresh ? 9 : 4.5} fill={p.fresh ? '#eaf6fb' : '#e8c440'} stroke={p.fresh ? '#9fc8da' : '#b8952a'} strokeWidth={1.2} opacity={1 - t} />;
								})}
								<Tag x={ventX - 40} y={ty + th - 22} text={p.fresh ? 'lots of dilute urine' : 'a little concentrated urine'} color={p.fresh ? '#4f8aa6' : '#9a7a1a'} size={14} />
							</g>
						)}
						{/* gill pumps */}
						{beats.pump !== undefined && (
							<g opacity={fadeAt(frame, beats.pump)}>
								<circle cx={gillX - 2} cy={fy} r={14} fill="#fff" stroke={TOK.amber} strokeWidth={3} />
								<text x={gillX - 2} y={fy + 5} textAnchor="middle" fontSize={12} fontWeight={800} fill={TOK.amberInk}>
									ATP
								</text>
								<Tag x={cx - 10} y={ty + 26} text={p.fresh ? 'gills pump salts IN' : 'gills pump salts OUT'} color={TOK.amberInk} fill="#fff6e6" size={15} />
							</g>
						)}
					</g>
				);
			})}
			<Foot lines={footer} frame={frame} fade={fadeAt} />
		</svg>
	);
};


