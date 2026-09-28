// EarRouteDiagram — the hearing pathway as a diorama: outer ear, middle ear,
// cochlea and auditory nerve on four stone plinths, with a signal that really
// travels the route. Config picks the route (normal sound, a hearing aid, a
// bone-conduction device, a cochlear implant), where the pathway breaks
// (conductive / sensorineural), whether hair cells are dead, and the tonotopic
// base/apex labels. Every stage responds only when the signal reaches it, so
// a bypassed stage visibly stays still.
//
// Beats are frames after `delay`. The latest route keeps looping once built
// (hold-state life: waves, rocking ossicles, bending hair cells, nerve spikes).

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {COL, GlossDefs, Note, NoteLine, Pill, alongPoly, ease, fadeAt, polyD} from './shared';

type Section = 'outer' | 'middle' | 'cochlea' | 'nerve';
type RouteKind = 'sound' | 'aid' | 'bone' | 'implant';

export type EarRouteProps = {
	sections?: Partial<Record<Section, {label: string; sub?: string; at: number}>>;
	routes?: {kind: RouteKind; at: number; label?: string}[];
	breaks?: {where: 'middle' | 'hairCells'; label: string; at: number; until?: number}[];
	/** Hair cells dead from this frame (cochlear-implant scenes). */
	deadHairCellsAt?: number;
	tonotopicAt?: number;
	ossicleNamesAt?: number;
	notes?: Note[];
	delay?: number;
};

const ID = 'b12m8ear';
const W = 760;
const H = 530;
const PY = 336; // plinth top
const AXIS = 262;
const CO = {x: 508, y: 248}; // cochlea centre
const CYCLE = 96;

// Spiral tube of the cochlea: base at the left (angle π), 2.5 turns inward.
const spiral = (t: number) => {
	const th = Math.PI + t * Math.PI * 5;
	const r = 60 - 46 * t;
	return {x: CO.x + r * Math.cos(th), y: CO.y + r * 0.92 * Math.sin(th)};
};
const SPIRAL_PTS = Array.from({length: 90}, (_, k) => spiral(k / 89));

const bump = (u: number, a: number, b: number) => (u < a || u > b ? 0 : Math.sin(((u - a) / (b - a)) * Math.PI));

export const EarRouteDiagram = ({
	sections = {}, routes = [], breaks = [], deadHairCellsAt, tonotopicAt, ossicleNamesAt, notes = [], delay = 62,
}: EarRouteProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const secIn = (s: Section) => (sections[s] ? fadeAt(frame, sections[s]!.at, 14) : 1);
	const base = fadeAt(frame, 0, 16);

	// The current route is the latest one that has started.
	const started = routes.filter((r) => frame >= r.at);
	const route = started.length ? started[started.length - 1] : null;
	const prev = started.length > 1 ? started[started.length - 2] : null;
	const swap = route && prev ? ease(frame, route.at, route.at + 18) : 1;
	const u = route ? (((frame - route.at) % CYCLE) + CYCLE) % CYCLE / CYCLE : -1;
	const kind = route?.kind;

	// Which stages the signal passes through, and when (0..1 of a cycle).
	const via = {
		air: kind === 'sound' || kind === 'aid',
		ossicles: kind === 'sound' || kind === 'aid',
		bone: kind === 'bone',
		implant: kind === 'implant',
	};
	const dead = deadHairCellsAt !== undefined && frame >= deadHairCellsAt;
	const deadT = deadHairCellsAt !== undefined ? fadeAt(frame, deadHairCellsAt, 20) : 0;
	const eardrumV = via.air ? bump(u, 0.3, 0.46) : 0;
	const ossV = via.air ? bump(u, 0.36, 0.56) : 0;
	const cochV = route ? (via.implant ? bump(u, 0.5, 0.72) : bump(u, 0.52, 0.76)) : 0;
	const hairV = via.implant || dead ? 0 : cochV;
	const nerveStart = 0.7;
	const amp = kind === 'aid' ? 1.7 : 1;

	const brk = (w: 'middle' | 'hairCells') => breaks.find((b) => b.where === w);
	const brkT = (w: 'middle' | 'hairCells') => {
		const b = brk(w);
		if (!b) return 0;
		return fadeAt(frame, b.at, 12) * (b.until !== undefined ? 1 - fadeAt(frame, b.until, 12) : 1);
	};
	const blockedAir = brkT('middle') > 0.5 && (kind === 'sound' || kind === 'aid');

	const bypassOuterMiddle = via.bone || via.implant;
	const dimOM = bypassOuterMiddle ? 0.45 + 0.55 * (1 - swap) : 1;

	// ── pieces ────────────────────────────────────────────────────────────
	const waves = () => {
		if (!via.air) return null;
		return [0, 1, 2].map((k) => {
			const w = ((u + k / 3) % 1) * 0.32;
			const x = 30 + (w / 0.32) * 72;
			const o = (1 - w / 0.32) * swap;
			return <path key={k} d={`M ${x} ${AXIS - 26 * amp} Q ${x + 14 * amp} ${AXIS} ${x} ${AXIS + 26 * amp}`} stroke={theme.accent} strokeWidth={3.5} fill="none" opacity={o} strokeLinecap="round" />;
		});
	};

	const outer = (
		<g opacity={secIn('outer') * dimOM}>
			<DioramaPlinth id={`${ID}o`} cx={138} cy={PY} rx={96} />
			{/* pinna */}
			<ellipse cx={112} cy={AXIS - 14} rx={30} ry={64} fill={`url(#${ID}-g-flesh)`} stroke="#c89a80" strokeWidth={1.5} />
			<ellipse cx={120} cy={AXIS - 6} rx={14} ry={34} fill="#dfae93" opacity={0.8} />
			{/* canal */}
			<rect x={120} y={AXIS - 11} width={90} height={22} rx={10} fill="#e7b9a0" stroke="#c89a80" strokeWidth={1.5} />
			<rect x={124} y={AXIS - 5} width={82} height={10} rx={5} fill="#b9826a" opacity={0.55} />
			{/* eardrum */}
			<ellipse cx={211 + Math.sin(frame * 1.3) * 3 * eardrumV * (blockedAir ? 0 : 1)} cy={AXIS} rx={4} ry={22} fill="#d98f8f" stroke="#a86060" strokeWidth={1.5} />
		</g>
	);

	const ossRock = Math.sin(frame * 1.1) * 7 * ossV * (blockedAir ? 0 : 1);
	const middle = (
		<g opacity={secIn('middle') * dimOM}>
			<DioramaPlinth id={`${ID}m`} cx={296} cy={PY} rx={76} />
			<rect x={216} y={AXIS - 62} width={160} height={112} rx={36} fill="#ffffff" opacity={0.55} stroke="#d5d0c6" strokeWidth={1.5} />
			<g transform={`rotate(${ossRock * 0.5} 240 ${AXIS - 14})`}>
				<path d={`M 214 ${AXIS + 16} L 236 ${AXIS - 22}`} stroke="#d8ccb2" strokeWidth={8} strokeLinecap="round" />
				<circle cx={240} cy={AXIS - 26} r={13} fill={`url(#${ID}-g-bone)`} stroke="#b8a883" />
			</g>
			<g transform={`rotate(${-ossRock * 0.4} 282 ${AXIS - 24})`}>
				<ellipse cx={278} cy={AXIS - 24} rx={17} ry={13} fill={`url(#${ID}-g-bone)`} stroke="#b8a883" />
				<path d={`M 286 ${AXIS - 14} L 304 ${AXIS + 6}`} stroke="#d8ccb2" strokeWidth={7} strokeLinecap="round" />
			</g>
			<g transform={`translate(${ossRock * 0.35} 0)`}>
				<path d={`M 306 ${AXIS + 4} C 330 ${AXIS - 18}, 352 ${AXIS - 18}, 364 ${AXIS - 12} M 306 ${AXIS + 4} C 330 ${AXIS + 22}, 352 ${AXIS + 22}, 364 ${AXIS + 14}`} stroke="#d8ccb2" strokeWidth={6} fill="none" strokeLinecap="round" />
				<rect x={362} y={AXIS - 18} width={9} height={36} rx={3} fill={`url(#${ID}-g-bone)`} stroke="#b8a883" />
			</g>
			{ossicleNamesAt !== undefined && (
				<g opacity={fadeAt(frame, ossicleNamesAt, 12)}>
					<text x={236} y={AXIS - 72} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>malleus</text>
					<text x={290} y={AXIS - 72} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>incus</text>
					<text x={344} y={AXIS - 72} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>stapes</text>
				</g>
			)}
		</g>
	);

	// hair cells along the spiral (every few points), bending with the signal
	const hairs = SPIRAL_PTS.filter((_, k) => k % 9 === 4).map((p, k, arr) => {
		const t = k / arr.length;
		const local = hairV * bump(u, 0.52 + t * 0.14, 0.66 + t * 0.14) * (brkT('hairCells') > 0.5 ? 0 : 1);
		const lean = Math.sin(frame * 0.9 + k) * 22 * local;
		const col = dead || brkT('hairCells') > 0.5 ? COL.grey : COL.green;
		const len = dead ? 9 - 5 * deadT : 12;
		return (
			<g key={k} transform={`translate(${p.x} ${p.y - 6}) rotate(${lean})`}>
				{[-3, 0, 3].map((dx) => (
					<line key={dx} x1={dx} y1={0} x2={dx * 1.3} y2={-len} stroke={col} strokeWidth={2.6} strokeLinecap="round" />
				))}
			</g>
		);
	});

	const cochlea = (
		<g opacity={secIn('cochlea')}>
			<DioramaPlinth id={`${ID}c`} cx={CO.x} cy={PY} rx={100} />
			{/* vestibule link to the oval window */}
			<path d={`M 371 ${AXIS} Q 410 ${AXIS} ${spiral(0).x} ${spiral(0).y}`} stroke="#e9b7b7" strokeWidth={20} fill="none" strokeLinecap="round" />
			<path d={polyD(SPIRAL_PTS)} stroke="#e9b7b7" strokeWidth={22} fill="none" strokeLinecap="round" strokeLinejoin="round" />
			<path d={polyD(SPIRAL_PTS)} stroke={`url(#${ID}-shell)`} strokeWidth={16} fill="none" strokeLinecap="round" strokeLinejoin="round" />
			{/* fluid ripple travelling along the spiral */}
			{cochV > 0 && !via.implant && [0, 1].map((k) => {
				const p = alongPoly(SPIRAL_PTS, Math.max(0, Math.min(1, (u - 0.52) / 0.24 - k * 0.12)));
				return <circle key={k} cx={p.x} cy={p.y} r={9} fill={theme.accent} opacity={0.45 * cochV} />;
			})}
			{hairs}
			{tonotopicAt !== undefined && (
				<g opacity={fadeAt(frame, tonotopicAt, 12)}>
					<text x={spiral(0).x - 4} y={CO.y - 76} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>base: high pitch</text>
					<line x1={spiral(0).x} y1={CO.y - 70} x2={spiral(0).x + 2} y2={spiral(0).y - 12} stroke={TOK.inkMute} strokeWidth={1.5} />
					<text x={CO.x + 70} y={CO.y - 76} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>apex: low pitch</text>
					<line x1={CO.x + 62} y1={CO.y - 70} x2={spiral(1).x + 3} y2={spiral(1).y - 3} stroke={TOK.inkMute} strokeWidth={1.5} />
				</g>
			)}
		</g>
	);

	const NERVE = [{x: CO.x + 6, y: CO.y + 6}, {x: 566, y: 292}, {x: 624, y: 280}, {x: 664, y: 256}];
	const nerveOn = route && !(blockedAir) && !(dead && !via.implant) && !(brkT('hairCells') > 0.5 && !via.implant);
	const nerve = (
		<g opacity={secIn('nerve')}>
			<DioramaPlinth id={`${ID}n`} cx={684} cy={PY} rx={66} />
			<path d={polyD(NERVE)} stroke={COL.nerve} strokeWidth={9} fill="none" strokeLinecap="round" strokeLinejoin="round" />
			<ellipse cx={690} cy={246} rx={48} ry={40} fill={`url(#${ID}-g-brain)`} stroke="#c78d9a" strokeWidth={1.5} />
			<path d="M 660 236 Q 676 222 690 236 T 720 236 M 664 258 Q 680 246 694 258 T 722 256" stroke="#c78d9a" strokeWidth={2} fill="none" />
			{nerveOn && [0, 1, 2].map((k) => {
				const t = (u - nerveStart) / (1 - nerveStart) - k * 0.18;
				if (t < 0 || t > 1) return null;
				const p = alongPoly(NERVE, t);
				return <circle key={k} cx={p.x} cy={p.y} r={6} fill={TOK.amber} stroke="#ffffff" strokeWidth={1.5} />;
			})}
		</g>
	);

	// ── devices ───────────────────────────────────────────────────────────
	const aidDev = kind === 'aid' || prev?.kind === 'aid' ? (kind === 'aid' ? swap : 1 - swap) : 0;
	const boneDev = kind === 'bone' || prev?.kind === 'bone' ? (kind === 'bone' ? swap : 1 - swap) : 0;
	const implDev = kind === 'implant' ? swap : 0;
	const BONE_PATH = [{x: 150, y: 150}, {x: 250, y: 132}, {x: 380, y: 150}, {x: 460, y: 186}];
	const IMPL_PATH = [{x: 222, y: 150}, {x: 360, y: 150}, {x: 430, y: 172}, spiral(0), ...SPIRAL_PTS.slice(1, 50)];

	const devices = (
		<g>
			{aidDev > 0 && (
				<g opacity={aidDev}>
					<path d="M 70 176 Q 58 206 78 232 L 92 228 Q 76 206 86 180 Z" fill={`url(#${ID}-g-device)`} stroke="#5a6470" strokeWidth={1.5} />
					<circle cx={78} cy={180} r={4} fill="#333" />
				</g>
			)}
			{boneDev > 0 && (
				<g opacity={boneDev}>
					<path d={polyD(BONE_PATH)} stroke={`url(#${ID}-skull)`} strokeWidth={22} fill="none" strokeLinecap="round" strokeLinejoin="round" />
					<rect x={134} y={128} width={34} height={30} rx={8} fill={`url(#${ID}-g-device)`} stroke="#5a6470" strokeWidth={1.5} />
					<rect x={146} y={156} width={10} height={10} fill="#9aa3ad" />
					{kind === 'bone' && [0, 1, 2].map((k) => {
						const t = (u - k * 0.1) / 0.55;
						if (t < 0 || t > 1) return null;
						const p = alongPoly(BONE_PATH, t);
						return <circle key={k} cx={p.x} cy={p.y} r={7} fill="none" stroke={theme.accent} strokeWidth={3} />;
					})}
				</g>
			)}
			{implDev > 0 && (
				<g opacity={implDev}>
					<rect x={96} y={140} width={42} height={30} rx={9} fill={`url(#${ID}-g-device)`} stroke="#5a6470" strokeWidth={1.5} />
					<line x1={138} y1={152} x2={190} y2={150} stroke="#5a6470" strokeWidth={3} />
					<circle cx={200} cy={150} r={11} fill="#dde3ea" stroke="#5a6470" strokeWidth={2} />
					{/* skin line: the coil sits outside, the receiver under it */}
					<line x1={211} y1={130} x2={211} y2={172} stroke="#c89a80" strokeWidth={3} strokeDasharray="4 4" />
					<circle cx={222} cy={150} r={10} fill={`url(#${ID}-g-device)`} stroke="#5a6470" strokeWidth={1.5} />
					<path d={polyD(IMPL_PATH)} stroke="#6b7a8f" strokeWidth={3.5} fill="none" strokeLinejoin="round" />
					{SPIRAL_PTS.slice(2, 50).filter((_, k) => k % 3 === 0).map((p, k) => {
						const lit = kind === 'implant' ? bump(u, 0.5 + k * 0.012, 0.6 + k * 0.012) : 0;
						return <circle key={k} cx={p.x} cy={p.y} r={3.4 + lit * 2} fill={lit > 0.2 ? TOK.amber : '#8b98a8'} />;
					})}
					{kind === 'implant' && (() => {
						const t = (u - 0.08) / 0.4;
						if (t < 0 || t > 1) return null;
						const p = alongPoly(IMPL_PATH.slice(0, 5), t);
						return <circle cx={p.x} cy={p.y} r={5} fill={TOK.amber} stroke="#fff" strokeWidth={1.2} />;
					})()}
				</g>
			)}
		</g>
	);

	// ── labels ────────────────────────────────────────────────────────────
	const secLabel = (s: Section, x: number) => {
		const sc = sections[s];
		if (!sc) return null;
		const o = fadeAt(frame, sc.at, 14);
		return (
			<g key={s} opacity={o}>
				<text x={x} y={PY + 80} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>{sc.label}</text>
				{sc.sub && <text x={x} y={PY + 102} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{sc.sub}</text>}
			</g>
		);
	};

	const routeLabel = route?.label ? (
		<Pill x={W / 2} y={34} text={route.label} color={theme.accent} size={18} opacity={swap} />
	) : null;

	const breakMark = (w: 'middle' | 'hairCells') => {
		const b = brk(w);
		if (!b) return null;
		const o = brkT(w);
		const x = w === 'middle' ? 250 : CO.x - 20;
		const y = w === 'middle' ? AXIS : CO.y - 10;
		const pulse = 1 + idlePulse(frame, 50) * 0.12;
		return (
			<g opacity={o}>
				<g transform={`translate(${x} ${y}) scale(${pulse})`}>
					<circle r={20} fill="#ffffff" stroke={COL.red} strokeWidth={3} />
					<path d="M -9 -9 L 9 9 M 9 -9 L -9 9" stroke={COL.red} strokeWidth={4.5} strokeLinecap="round" />
				</g>
				<text x={w === 'middle' ? 206 : CO.x} y={w === 'middle' ? 118 : 132} textAnchor="middle" fill={COL.red} fontSize={17} fontWeight={800}>{b.label}</text>
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The hearing pathway: outer ear, middle ear, cochlea, auditory nerve" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{flesh: COL.flesh, bone: COL.bone, brain: '#f2b8c2', device: '#c9d1da'}} />
			<defs>
				<linearGradient id={`${ID}-shell`} x1="0" x2="1" y1="0" y2="1">
					<stop offset="0%" stopColor="#fff2f2" />
					<stop offset="100%" stopColor="#efc6c6" />
				</linearGradient>
				<linearGradient id={`${ID}-skull`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#f7f0de" />
					<stop offset="100%" stopColor="#d6c9a8" />
				</linearGradient>
			</defs>
			<g opacity={base}>
				{waves()}
				{outer}
				{middle}
				{cochlea}
				{nerve}
				{devices}
				{breakMark('middle')}
				{breakMark('hairCells')}
				{secLabel('outer', 138)}
				{secLabel('middle', 296)}
				{secLabel('cochlea', CO.x)}
				{secLabel('nerve', 684)}
				{routeLabel}
			</g>
			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 12 - (notes.length - 1 - k) * 26} frame={frame} />
			))}
		</svg>
	);
};
