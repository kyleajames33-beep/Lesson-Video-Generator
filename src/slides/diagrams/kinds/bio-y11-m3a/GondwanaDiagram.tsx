// GondwanaDiagram (bio11m3aGondwana) — why Australia kept its monotremes and
// marsupials: a schematic (NOT a map) of the southern landmasses on a stone
// plinth whose top is ocean.
//
//   connected   South America, Antarctica and Australia are joined (Gondwana).
//   marsupials  marsupial tokens walk South America → Antarctica → Australia
//               while the land route exists (monotremes are already there).
//   rift        Australia pulls away; the ocean gap widens (date chips from
//               props, e.g. rifting from ~85 million years ago, deep ocean by
//               ~35–33 million years ago).
//   blocked     a placental token heads for Australia and is stopped at the
//               water (cross): no land route. Optional exceptions tag (bats
//               flew, later some rodents crossed water).
//   radiate     the marsupial tokens in Australia multiply into several roles
//               (labels from props).
//
// Beats are frames after `delay`. Hold: the ocean ripples, tokens bob.

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Beat, Foot, H, Mark, PAL, Tag, W, clamp, fadeAt, hash01} from './shared';

export type GondwanaProps = {
	beats: {connected: number; marsupials: number; rift: number; blocked?: number; radiate?: number};
	dates?: {text: string; at: number}[];
	blockedLabel?: string;
	exceptions?: {text: string; at: number};
	roles?: string[];
	labels?: {sa?: string; ant?: string; aus?: string};
	footer?: Beat[];
	delay?: number;
};

const ID = 'b11m3gond';
const ease = Easing.inOut(Easing.cubic);

const blob = (cx: number, cy: number, rx: number, ry: number, seed: number) => {
	const pts = Array.from({length: 14}, (_, k) => {
		const a = (k / 14) * Math.PI * 2;
		const r = 0.82 + hash01(seed + k * 3.3) * 0.3;
		return {x: cx + Math.cos(a) * rx * r, y: cy + Math.sin(a) * ry * r};
	});
	const mid = (p: {x: number; y: number}, q: {x: number; y: number}) => ({x: (p.x + q.x) / 2, y: (p.y + q.y) / 2});
	let d = `M ${mid(pts[13], pts[0]).x} ${mid(pts[13], pts[0]).y}`;
	for (let k = 0; k < 14; k++) {
		const m = mid(pts[k], pts[(k + 1) % 14]);
		d += ` Q ${pts[k].x} ${pts[k].y} ${m.x} ${m.y}`;
	}
	return d + ' Z';
};

export const GondwanaDiagram = ({beats, dates = [], blockedLabel = 'no land route', exceptions, roles = [], labels = {}, footer = [], delay = 62}: GondwanaProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const cx = W / 2;
	const cy = 272;
	const rx = 350;
	const ry = 150;
	const drift = interpolate(frame, [beats.rift, beats.rift + 110], [0, 1], {...clamp, easing: ease});
	// landmasses (Australia moves up-right as it drifts north)
	const sa = {x: 170, y: 218};
	const an = {x: 360, y: 318};
	const au = {x: 500 + drift * 95, y: 280 - drift * 62};
	const land = '#c9b57f';
	const landEdge = '#a48f5c';

	// marsupial walkers: along SA → Antarctica → Australia (at its start position)
	const walkT = (k: number) => interpolate(frame, [beats.marsupials + k * 14, beats.marsupials + 90 + k * 14], [0, 1], {...clamp, easing: ease});
	const pathPt = (t: number) => {
		const a = {x: sa.x + 30, y: sa.y + 20};
		const b = {x: an.x, y: an.y - 10};
		const c = {x: 505, y: 282};
		if (t < 0.5) {
			const u = t / 0.5;
			return {x: a.x + (b.x - a.x) * u, y: a.y + (b.y - a.y) * u};
		}
		const u = (t - 0.5) / 0.5;
		return {x: b.x + (c.x - b.x) * u, y: b.y + (c.y - b.y) * u};
	};
	const walkers = [0, 1, 2];
	const radiate = beats.radiate !== undefined ? fadeAt(frame, beats.radiate, 20) : 0;
	const roleCols = [PAL.orange, PAL.rose, PAL.violet, PAL.teal, '#b5562e'];
	const blockAt = beats.blocked ?? 1e9;
	const plT = interpolate(frame, [blockAt, blockAt + 50], [0, 1], {...clamp, easing: ease});
	const plStart = {x: 720, y: 62};
	const plEnd = {x: au.x + 64, y: au.y - 62};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Australia separates from Gondwana and is isolated by ocean" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<clipPath id={`${ID}-top`}>
					<ellipse cx={cx} cy={cy} rx={rx} ry={ry} />
				</clipPath>
				<radialGradient id={`${ID}-sea`} cx="40%" cy="35%" r="80%">
					<stop offset="0%" stopColor="#bfe3f5" />
					<stop offset="100%" stopColor="#5fa9d6" />
				</radialGradient>
			</defs>
			<DioramaPlinth id={`${ID}-p`} cx={cx} cy={cy + ry - rx * 0.34} rx={rx} />
			<ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={`url(#${ID}-sea)`} stroke="#4a8fbd" strokeWidth={2} />
			<g clipPath={`url(#${ID}-top)`}>
				{Array.from({length: 9}, (_, k) => (
					<path key={k} d={`M ${cx - rx + k * 80 + ((frame * 0.4) % 80)} ${cy - 110 + (k % 3) * 70} q 12 -6 24 0 q 12 6 24 0`} stroke="#ffffff" strokeOpacity={0.45} strokeWidth={2} fill="none" />
				))}
				<g opacity={fadeAt(frame, beats.connected)}>
					<path d={blob(sa.x, sa.y, 92, 70, 1)} fill={land} stroke={landEdge} strokeWidth={2} />
					<path d={blob(an.x, an.y, 150, 62, 7)} fill="#e9eef2" stroke="#b7c2cc" strokeWidth={2} />
					<path d={blob(au.x, au.y, 96, 58, 13)} fill={land} stroke={landEdge} strokeWidth={2} />
					{/* land bridge before the rift */}
					<path d={`M ${sa.x + 70} ${sa.y + 30} Q ${sa.x + 120} ${sa.y + 70} ${an.x - 110} ${an.y - 20}`} stroke={land} strokeWidth={30 * (1 - drift)} fill="none" strokeLinecap="round" opacity={1 - drift} />
				</g>
			</g>
			<g opacity={fadeAt(frame, beats.connected + 10)}>
				<text x={sa.x} y={sa.y + 6} textAnchor="middle" fontSize={16} fontWeight={800} fill="#5a4a24">
					{labels.sa ?? 'South America'}
				</text>
				<text x={an.x} y={an.y + 30} textAnchor="middle" fontSize={16} fontWeight={800} fill="#55606b">
					{labels.ant ?? 'Antarctica'}
				</text>
				<text x={au.x} y={au.y + 42} textAnchor="middle" fontSize={16} fontWeight={800} fill="#5a4a24">
					{labels.aus ?? 'Australia'}
				</text>
			</g>
			{/* monotremes already there */}
			<g opacity={fadeAt(frame, beats.connected + 20)}>
				<ellipse cx={au.x - 44} cy={au.y - 10 + idleBob(frame, 1, 1)} rx={11} ry={7} fill="#6b5846" stroke="#3c2f24" strokeWidth={1} />
				<path d={`M ${au.x - 34} ${au.y - 11} l 9 -1 l 0 4 z`} fill="#3c2f24" />
			</g>
			{/* marsupials walking in, then radiating */}
			{walkers.map((k) => {
				const t = walkT(k);
				if (t <= 0) return null;
				const p = t >= 1 ? {x: au.x - 10 + k * 20, y: au.y - 16 + (k % 2) * 14} : pathPt(t);
				return <circle key={k} cx={p.x} cy={p.y + idleBob(frame, k + 3, 1.2)} r={8} fill={PAL.orange} stroke="#fff" strokeWidth={2} />;
			})}
			{roles.map((r, i) => {
				const o = fadeAt(frame, (beats.radiate ?? 0) + i * 14, 14) * (radiate > 0 ? 1 : 0);
				const a = (i / Math.max(1, roles.length)) * Math.PI * 2 + 0.6;
				const dx = Math.cos(a) * 52;
				const dy = Math.sin(a) * 22 - 6;
				const chipW = (W - 40) / roles.length;
				return (
					<g key={i} opacity={o}>
						<circle cx={au.x + dx} cy={au.y + dy + idleBob(frame, i + 7, 1)} r={7.5} fill={roleCols[i % roleCols.length]} stroke="#fff" strokeWidth={1.8} />
						<Tag x={20 + chipW * (i + 0.5)} y={H - 22} text={r} color={roleCols[i % roleCols.length]} size={15} />
					</g>
				);
			})}
			{/* placental blocked */}
			{beats.blocked !== undefined && (
				<g opacity={fadeAt(frame, blockAt)}>
					<rect x={plStart.x + (plEnd.x - plStart.x) * plT - 10} y={plStart.y + (plEnd.y - plStart.y) * plT - 10} width={20} height={20} rx={4} fill={theme.accent} stroke="#fff" strokeWidth={2} />
					<line x1={plStart.x} y1={plStart.y} x2={plEnd.x} y2={plEnd.y} stroke={theme.accent} strokeWidth={2} strokeDasharray="5 6" opacity={0.6} />
					<g opacity={fadeAt(frame, blockAt + 50)}>
						<Mark x={plEnd.x - 22} y={plEnd.y + 22} ok={false} s={1.1} />
						<Tag x={W - 150} y={30} text={`placental mammals: ${blockedLabel}`} color={theme.accent} size={15} />
					</g>
				</g>
			)}
			{exceptions && (
				<g opacity={fadeAt(frame, exceptions.at)}>
					<Tag x={W - 190} y={H - 70} text={exceptions.text} color={TOK.inkDim} size={14} />
				</g>
			)}
			{dates.map((d, i) => (
				<g key={i} opacity={fadeAt(frame, d.at)}>
					<Tag x={170} y={60 + i * 34} text={d.text} color={i === dates.length - 1 ? TOK.amberInk : TOK.inkDim} size={15} strokeW={i === dates.length - 1 ? 2.5 + idlePulse(frame) : 2} fill={i === dates.length - 1 ? '#fff6e6' : '#fff'} />
				</g>
			))}
			<text x={14} y={24} fontSize={14} fontWeight={700} fill={TOK.inkMute} opacity={fadeAt(frame, beats.connected)}>
				schematic, not a map
			</text>
			<Foot lines={footer} frame={frame} fade={fadeAt} />
		</svg>
	);
};
