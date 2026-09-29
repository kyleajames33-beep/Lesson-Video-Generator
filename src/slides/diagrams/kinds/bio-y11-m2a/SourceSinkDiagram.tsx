// SourceSinkDiagram (bio11m2SourceSink) — translocation from source to sink in
// a whole plant.
//
// A potted plant (glass pot showing the roots and a storage tuber) stands on a
// stone plinth, with its phloem drawn as an orange line through leaf, stem,
// flower, roots and tuber. Each `phase` names a source and its sinks: sugar
// tokens stream along the phloem from the source to every sink, and SOURCE /
// SINK tags mark the organs. A later phase can swap the roles (a tuber that was
// a sink in summer becomes the source in spring), and the flow reverses. All
// text from props. Hold: sugar keeps streaming along the current routes.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth} from '../../diorama';
import {COL, GLOSS, GlossDefs, H, Lines, Notes, PlantArt, Tag, Title, W, fadeAt, plantGeom, popAt, wrap, type Note} from './shared';

type Organ = 'leaves' | 'flower' | 'roots' | 'tuber' | 'shoots';
export type SourceSinkProps = {
	title?: string;
	at?: number;
	phases: {at: number; source: Organ; sinks: Organ[]; label?: string; sourceText?: string; sinkText?: string}[];
	notes?: Note[];
	delay?: number;
};

const ID = 'b11m2ss';

export const SourceSinkDiagram = ({title, at = 0, phases, notes = [], delay = 62}: SourceSinkProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = title ? 52 : 8;
	const cx = 250;
	const groundY = top + 318;
	const G = plantGeom(cx, groundY, 276);
	const leaf = G.leaves[1];
	const nodes: Record<Organ, {x: number; y: number}[]> = {
		leaves: [{x: leaf.x + 72, y: leaf.y - 12}, {x: cx, y: leaf.y}],
		shoots: [{x: cx, y: G.top + 4}],
		flower: [{x: cx, y: G.top - 4}],
		roots: [{x: cx, y: G.potBottom - 14}, {x: cx, y: G.potTop + 8}],
		tuber: [{x: cx + 30, y: G.potTop + 56}, {x: cx, y: G.potTop + 30}],
	};
	const route = (from: Organ, to: Organ) => {
		const a = nodes[from];
		const b = [...nodes[to]].reverse();
		return [...a, ...b];
	};
	const polyAt = (pts: {x: number; y: number}[], t: number) => {
		const lens = pts.slice(1).map((p, i) => Math.hypot(p.x - pts[i].x, p.y - pts[i].y));
		const total = lens.reduce((s, l) => s + l, 0);
		let d = t * total;
		for (let i = 0; i < lens.length; i++) {
			if (d <= lens[i]) {
				const u = lens[i] ? d / lens[i] : 0;
				return {x: pts[i].x + (pts[i + 1].x - pts[i].x) * u, y: pts[i].y + (pts[i + 1].y - pts[i].y) * u};
			}
			d -= lens[i];
		}
		return pts[pts.length - 1];
	};

	let ph = -1;
	phases.forEach((p, i) => {
		if (frame >= p.at) ph = i;
	});
	const cur = ph >= 0 ? phases[ph] : undefined;
	const tagAnchor: Record<Organ, {x: number; y: number; tx: number; ty: number}> = {
		leaves: {x: 470, y: leaf.y - 40, tx: leaf.x + 80, ty: leaf.y - 14},
		shoots: {x: 470, y: G.top - 20, tx: cx + 6, ty: G.top},
		flower: {x: 470, y: G.top - 20, tx: cx + 14, ty: G.top - 8},
		roots: {x: 80, y: G.potBottom + 10, tx: cx - 30, ty: G.potBottom - 20},
		tuber: {x: 470, y: G.potTop + 70, tx: cx + 48, ty: G.potTop + 56},
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Source to sink'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={Math.min(1, popAt(frame, fps, at) * 1.3)}>
				<DioramaPlinth id={`${ID}p`} cx={cx} cy={G.potBottom + 8} rx={150} />
				<PlantArt id={ID} cx={cx} groundY={groundY} h={276} frame={frame} flower tuber />
				{/* phloem route */}
				<path d={`M ${nodes.leaves[0].x} ${nodes.leaves[0].y} L ${cx + 3} ${leaf.y} L ${cx + 3} ${G.top} M ${cx + 3} ${leaf.y} L ${cx + 3} ${G.potBottom - 14} M ${cx + 3} ${G.potTop + 30} L ${cx + 30} ${G.potTop + 56}`} fill="none" stroke={COL.phloem} strokeWidth={3} strokeDasharray="5 4" opacity={0.85} />
			</g>
			{cur && cur.sinks.map((sk, si) => {
				const pts = route(cur.source, sk);
				return (
					<g key={`${ph}-${sk}`} opacity={fadeAt(frame, cur.at + 6, 16)}>
						{Array.from({length: 5}, (_, k) => {
							const t = ((frame * 0.007 + k / 5 + si * 0.1) % 1);
							const p = polyAt(pts, t);
							return <circle key={k} cx={p.x + 3} cy={p.y} r={7} fill={`url(#${ID}-ball-sugar)`} stroke="#8a4a10" strokeWidth={1} opacity={Math.min(1, Math.sin(t * Math.PI) * 3)} />;
						})}
					</g>
				);
			})}
			{phases.map((p, i) => {
				if (i !== ph) return null;
				const organs: {o: Organ; src: boolean}[] = [{o: p.source, src: true}, ...p.sinks.map((o) => ({o, src: false}))];
				return (
					<g key={i}>
						{organs.map(({o, src}, k) => {
							const A = tagAnchor[o];
							return <Tag key={o} frame={frame} fps={fps} at={p.at + 10 + k * 12} x={A.x} y={A.y} text={src ? (p.sourceText ?? 'SOURCE') : (p.sinkText ?? 'SINK')} tone={src ? 'sugar' : 'accent'} accent={theme.accent} tx={A.tx} ty={A.ty} size={18} />;
						})}
						{p.label && <Lines x={570} y={H - 90 - notes.length * 25} lines={wrap(p.label, 20)} size={20} color={TOK.ink} />}
					</g>
				);
			})}
			<Notes frame={frame} notes={notes} />
		</svg>
	);
};
