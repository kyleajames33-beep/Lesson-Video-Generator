// OrgsDiagram (bio11m2Orgs) — unicellular, colonial and multicellular life.
//
// uni     An Amoeba on a plinth: a pseudopodium reaches out and engulfs a food
//         particle into a food vacuole; the contractile vacuole fills and
//         empties, expelling excess water. Tags name the structures; a list of
//         life functions builds beside it (one cell does them all).
// colony  A colony drawn as a hollow ball of identical small cells, each with
//         two flagella and its own chloroplast; when the light appears the
//         flagella beat together and the ball rolls towards it.
// multi   Three specialised cells (nerve cell, red blood cell, gut lining cell)
//         each on a plinth, linked by "depends on" arrows. Then the separation
//         test: a cell taken from a colony keeps living (tick) while a cell
//         taken from a multicellular body dies (cross).
// All text from props. Hold: cells bob, the contractile vacuole keeps
// pulsing, flagella keep beating, the amber line breathes.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, COL, GLOSS, GlossDefs, H, Lines, Mark, Notes, Sun, Tag, Title, W, clamp, fadeAt, popAt, wrap, type Note, type Tone} from './shared';

type Anchor = 'pseudo' | 'vacuole' | 'nucleus' | 'food' | 'cell' | 'flagella' | 'chloro';
export type OrgsProps = {
	mode?: 'uni' | 'colony' | 'multi';
	title?: string;
	/** Frame the organism appears. */
	at?: number;
	/** uni: pseudopodium reaches / food engulfed. colony: light on. */
	reach?: number;
	engulf?: number;
	light?: number;
	tags?: {text: string; at: number; anchor: Anchor; tone?: Tone}[];
	functions?: {text: string; at: number}[];
	verdict?: {text: string; at: number};
	/** multi */
	cells?: {name: string; at: number}[];
	link?: {text: string; at: number};
	test?: {at: number; colonyText: string; multiText: string; result: number};
	notes?: Note[];
	delay?: number;
};

const ID = 'b11m2org';

const blob = (cx: number, cy: number, R: number, frame: number, reachT: number, reachAngle = 0) => {
	const pts: string[] = [];
	for (let k = 0; k < 72; k++) {
		const th = (k / 72) * Math.PI * 2;
		let r = R * (1 + 0.07 * Math.sin(3 * th + frame / 24) + 0.05 * Math.sin(5 * th - frame / 31));
		const d = Math.atan2(Math.sin(th - reachAngle), Math.cos(th - reachAngle));
		r += R * 0.75 * reachT * Math.exp(-(d * d) / 0.05);
		r += R * 0.35 * reachT * Math.exp(-((d - 0.5) ** 2) / 0.04) * 0.6;
		pts.push(`${(cx + Math.cos(th) * r).toFixed(1)},${(cy + Math.sin(th) * r * 0.78).toFixed(1)}`);
	}
	return `M ${pts.join(' L ')} Z`;
};

const Flagellum = ({x, y, angle, frame, len = 16, phase = 0, speed = 1}: {x: number; y: number; angle: number; frame: number; len?: number; phase?: number; speed?: number}) => {
	const w = Math.sin(frame / (6 / speed) + phase) * 4;
	return (
		<path
			transform={`translate(${x},${y}) rotate(${angle})`}
			d={`M 0 0 C ${len * 0.35} ${w}, ${len * 0.65} ${-w}, ${len} ${w * 0.6}`}
			fill="none"
			stroke={COL.leafDark}
			strokeWidth={1.4}
			strokeLinecap="round"
		/>
	);
};

export const OrgsDiagram = ({
	mode = 'uni', title, at = 0, reach = 90, engulf = 160, light = 120, tags = [], functions = [], verdict, cells = [], link, test, notes = [], delay = 62,
}: OrgsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = title ? 52 : 10;
	const on = Math.min(1, popAt(frame, fps, at) * 1.3);

	if (mode === 'uni') {
		const cx = 210;
		const cy = top + 190;
		const R = 100;
		const reachT = interpolate(frame, [reach, reach + 40], [0, 1], clamp) * (1 - interpolate(frame, [engulf, engulf + 50], [0, 0.55], clamp));
		const eng = interpolate(frame, [engulf - 10, engulf + 40], [0, 1], clamp);
		const food0 = {x: cx + R * 1.9, y: cy - 4};
		const food1 = {x: cx + 22, y: cy + 26};
		const fx = food0.x + (food1.x - food0.x) * eng;
		const fy = food0.y + (food1.y - food0.y) * eng;
		// contractile vacuole: fills over 70 frames, empties in 10
		const cyc = ((frame - at) % 80 + 80) % 80;
		const vr = cyc < 70 ? 6 + (cyc / 70) * 12 : 18 * (1 - (cyc - 70) / 10);
		const vac = {x: cx - 44, y: cy - 26};
		const anchor = (a: Anchor) => (
			a === 'pseudo' ? {x: cx + R * (1 + 0.7 * reachT), y: cy}
				: a === 'vacuole' ? vac
					: a === 'nucleus' ? {x: cx - 6, y: cy + 2}
						: {x: food1.x, y: food1.y}
		);
		const tagPos: Record<string, {x: number; y: number}> = {
			pseudo: {x: cx + 110, y: top + 40},
			vacuole: {x: cx - 70, y: top + 36},
			nucleus: {x: cx - 60, y: cy + 124},
			food: {x: cx + 130, y: cy + 124},
		};
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'A unicellular organism'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<GlossDefs id={ID} colors={GLOSS} />
				{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
				<g opacity={on}>
					<DioramaPlinth id={`${ID}u`} cx={cx} cy={cy + 70} rx={190} />
					<g transform={`translate(0, ${idleBob(frame, 1, 1.5)})`}>
						<path d={blob(cx, cy, R, frame, reachT)} fill="rgba(214,232,196,0.92)" stroke="#6f9a52" strokeWidth={2.5} />
						<path d={blob(cx, cy, R * 0.8, frame + 7, reachT * 0.8)} fill="none" stroke="#9fc07f" strokeWidth={1} opacity={0.6} />
						<circle cx={cx - 6} cy={cy + 2} r={20} fill={`url(#${ID}-ball-nucleus)`} stroke="#5a3a8a" strokeWidth={1.2} />
						<circle cx={vac.x} cy={vac.y} r={Math.max(0, vr)} fill="rgba(143,195,234,0.85)" stroke="#3f93d6" strokeWidth={1.5} />
						{cyc >= 70 && [0, 1, 2].map((k) => (
							<circle key={k} cx={vac.x - 20 - (cyc - 70) * 3 - k * 7} cy={vac.y - 22 - (cyc - 70) * 2.5 + k * 4} r={3} fill={COL.water} opacity={1 - (cyc - 70) / 10} />
						))}
						{eng > 0.6 && <circle cx={fx} cy={fy} r={16} fill="rgba(255,255,255,0.35)" stroke="#6f9a52" strokeWidth={1.5} opacity={fadeAt(frame, engulf + 20)} />}
						<circle cx={fx} cy={fy} r={9} fill="#b88a4a" stroke="#7a5a2a" strokeWidth={1.2} />
					</g>
					{tags.map((t, i) => {
						const p = tagPos[t.anchor] ?? tagPos.nucleus;
						const a = anchor(t.anchor);
						return <Tag key={i} frame={frame} fps={fps} at={t.at} x={p.x} y={p.y} text={t.text} tone={t.tone} accent={theme.accent} tx={a.x} ty={a.y} />;
					})}
				</g>
				{functions.length > 0 && (
					<g>
						{functions.map((f, i) => {
							const o = fadeAt(frame, f.at, 12);
							return (
								<g key={i} opacity={o} transform={`translate(${(1 - o) * 16}, 0)`}>
									<circle cx={502} cy={top + 58 + i * 46} r={7} fill={theme.accent} />
									<text x={520} y={top + 66 + i * 46} fill={TOK.ink} fontSize={23} fontWeight={800}>{f.text}</text>
								</g>
							);
						})}
					</g>
				)}
				{verdict && (
					<text x={W / 2} y={H - 18} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800} opacity={fadeAt(frame, verdict.at)}>{verdict.text}</text>
				)}
				<Notes frame={frame} notes={notes} bottom={verdict ? H - 48 : H - 10} />
			</svg>
		);
	}

	if (mode === 'colony') {
		const lt = interpolate(frame, [light, light + 90], [0, 1], clamp);
		const cx = 270 + lt * 90 + Math.sin(frame / 40) * 3 * lt;
		const cy = top + 200;
		const R = 122;
		const nCells = 24;
		const spin = frame / 160 + lt * 0.6 * Math.sin(frame / 50);
		const cellPos = (k: number) => {
			const th = (k / nCells) * Math.PI * 2 + spin;
			return {x: cx + Math.cos(th) * R, y: cy + Math.sin(th) * R, th};
		};
		const anchor = (a: Anchor) => {
			const p = cellPos(2);
			return a === 'flagella' ? {x: p.x + Math.cos(p.th) * 22, y: p.y + Math.sin(p.th) * 22} : a === 'chloro' ? {x: cellPos(12).x, y: cellPos(12).y} : {x: cellPos(7).x, y: cellPos(7).y};
		};
		const tagPos: Record<string, {x: number; y: number}> = {
			cell: {x: 140, y: top + 30},
			flagella: {x: 560, y: top + 60},
			chloro: {x: 110, y: cy + 150},
		};
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'A colonial organism'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<GlossDefs id={ID} colors={GLOSS} />
				{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
				<Sun x={690} y={top + 70} r={26} frame={frame} opacity={fadeAt(frame, light, 18)} />
				{lt > 0 && [0, 1, 2].map((k) => (
					<line key={k} x1={660} y1={top + 90 + k * 30} x2={560} y2={top + 130 + k * 40} stroke="#e0a82a" strokeWidth={2} strokeDasharray="6 8" opacity={0.5 * fadeAt(frame, light, 18)} />
				))}
				<g opacity={on}>
					<DioramaPlinth id={`${ID}c`} cx={330} cy={cy + 140} rx={220} />
					<circle cx={cx} cy={cy} r={R - 10} fill="rgba(210,236,190,0.45)" stroke="#9fc07f" strokeWidth={1.5} />
					{Array.from({length: nCells}, (_, k) => {
						const p = cellPos(k);
						const deg = (p.th * 180) / Math.PI;
						return (
							<g key={k}>
								<Flagellum x={p.x + Math.cos(p.th) * 9} y={p.y + Math.sin(p.th) * 9} angle={deg - 14} frame={frame} phase={k * 0.4} speed={1 + lt} />
								<Flagellum x={p.x + Math.cos(p.th) * 9} y={p.y + Math.sin(p.th) * 9} angle={deg + 14} frame={frame} phase={k * 0.4 + 1} speed={1 + lt} />
								<circle cx={p.x} cy={p.y} r={10} fill="#e3f1cf" stroke={COL.leafDark} strokeWidth={1.2} />
								<ellipse cx={p.x - Math.cos(p.th) * 2} cy={p.y - Math.sin(p.th) * 2} rx={5} ry={3.5} fill={`url(#${ID}-ball-chloro)`} transform={`rotate(${deg}, ${p.x}, ${p.y})`} />
							</g>
						);
					})}
					{tags.map((t, i) => {
						const p = tagPos[t.anchor] ?? tagPos.cell;
						const a = anchor(t.anchor);
						return <Tag key={i} frame={frame} fps={fps} at={t.at} x={p.x} y={p.y} text={t.text} tone={t.tone} accent={theme.accent} tx={a.x} ty={a.y} />;
					})}
				</g>
				{verdict && (
					<text x={W / 2} y={H - 16} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800} opacity={fadeAt(frame, verdict.at)}>{verdict.text}</text>
				)}
				<Notes frame={frame} notes={notes} bottom={verdict ? H - 46 : H - 10} />
			</svg>
		);
	}

	// multi
	const cols = [130, 380, 630];
	const cy = top + 118;
	const drawCell = (i: number, x: number, y: number, s = 1) => {
		if (i === 0) {
			return (
				<g transform={`translate(${x},${y}) scale(${s})`}>
					{[-50, -20, 20, 50].map((a, k) => <path key={k} d={`M -40 0 L ${-40 - 24 * Math.cos((a * Math.PI) / 180)} ${-24 * Math.sin((a * Math.PI) / 180)}`} stroke="#8a6ab8" strokeWidth={3} strokeLinecap="round" />)}
					<path d="M -28 0 C 0 -6, 40 8, 80 0" fill="none" stroke="#8a6ab8" strokeWidth={5} strokeLinecap="round" />
					<circle cx={-40} cy={0} r={16} fill="#d9c7ef" stroke="#8a6ab8" strokeWidth={1.5} />
					<circle cx={-40} cy={0} r={6} fill={`url(#${ID}-ball-nucleus)`} />
					{[0, 1, 2].map((k) => <path key={k} d={`M 80 0 l 12 ${-10 + k * 10}`} stroke="#8a6ab8" strokeWidth={3} strokeLinecap="round" />)}
				</g>
			);
		}
		if (i === 1) {
			return (
				<g transform={`translate(${x},${y}) scale(${s})`}>
					<ellipse rx={40} ry={24} fill={`url(#${ID}-ball-blood)`} stroke="#7a1f1a" strokeWidth={1.5} />
					<ellipse rx={18} ry={9} fill="#a8322b" opacity={0.55} />
				</g>
			);
		}
		return (
			<g transform={`translate(${x},${y}) scale(${s})`}>
				<rect x={-22} y={-30} width={44} height={62} rx={6} fill="#f3d9bf" stroke="#c79a74" strokeWidth={1.5} />
				{Array.from({length: 8}, (_, k) => <rect key={k} x={-20 + k * 5.4} y={-40} width={3} height={11} rx={1.5} fill="#e0b894" stroke="#c79a74" strokeWidth={0.6} />)}
				<circle cx={0} cy={12} r={8} fill={`url(#${ID}-ball-nucleus)`} />
			</g>
		);
	};
	const res = test ? test.result : 1e9;
	const colonyOut = test ? interpolate(frame, [test.at, test.at + 40], [0, 1], clamp) : 0;
	const died = interpolate(frame, [res, res + 50], [0, 1], clamp);
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Specialised, interdependent cells'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{cells.map((c, i) => {
				const p = popAt(frame, fps, c.at);
				return (
					<g key={i} opacity={Math.min(1, p * 1.4)}>
						<DioramaPlinth id={`${ID}m${i}`} cx={cols[i]} cy={cy + 34} rx={96} />
						<g transform={`translate(0, ${idleBob(frame, i, 1.4) + (1 - Math.min(1, p)) * 20})`}>{drawCell(i, cols[i] - (i === 0 ? 18 : 0), cy - 4)}</g>
						<Lines x={cols[i]} y={cy + 112} lines={wrap(c.name, 20)} size={21} color={theme.accent} />
					</g>
				);
			})}
			{link && (
				<g opacity={fadeAt(frame, link.at, 16)}>
					{[0, 1].map((k) => (
						<g key={k}>
							<Arrow x1={cols[k] + 100} y1={cy - 26} x2={cols[k + 1] - 100} y2={cy - 26} color={TOK.inkMute} width={2.5} head={9} />
							<Arrow x1={cols[k + 1] - 100} y1={cy - 12} x2={cols[k] + 100} y2={cy - 12} color={TOK.inkMute} width={2.5} head={9} />
						</g>
					))}
					<text x={W / 2} y={top + 8 + (title ? 0 : 12)} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>{link.text}</text>
				</g>
			)}
			{test && (
				<g opacity={fadeAt(frame, test.at - 10, 16)}>
					<line x1={40} x2={W - 40} y1={cy + 152} y2={cy + 152} stroke={TOK.rule} strokeWidth={2} />
					{/* colony cell separated */}
					<g>
						{Array.from({length: 7}, (_, k) => {
							const th = (k / 8) * Math.PI * 2 + 0.4;
							return <circle key={k} cx={150 + Math.cos(th) * 42} cy={cy + 246 + Math.sin(th) * 42} r={9} fill="#e3f1cf" stroke={COL.leafDark} strokeWidth={1.2} />;
						})}
						<g transform={`translate(${colonyOut * 110 + idleBob(frame, 3, 2) * colonyOut}, ${-colonyOut * 10})`}>
							<circle cx={150 + Math.cos(-0.4) * 42} cy={cy + 246 + Math.sin(-0.4) * 42} r={9} fill="#e3f1cf" stroke={COL.leafDark} strokeWidth={1.2} />
							<Flagellum x={150 + Math.cos(-0.4) * 42 + 8} y={cy + 246 + Math.sin(-0.4) * 42} angle={-10} frame={frame} />
							<Flagellum x={150 + Math.cos(-0.4) * 42 + 8} y={cy + 246 + Math.sin(-0.4) * 42} angle={20} frame={frame} phase={1} />
						</g>
						<Mark x={300} y={cy + 204} ok r={14} opacity={fadeAt(frame, res)} />
						<Lines x={180} y={cy + 320} lines={wrap(test.colonyText, 26)} size={20} color={TOK.ink} weight={800} />
					</g>
					{/* multicellular cell separated */}
					<g>
						<rect x={450} y={cy + 194} width={220} height={100} rx={18} fill="#f7e6d6" stroke="#c79a74" strokeWidth={1.5} />
						{[0, 1, 2, 3].map((k) => <g key={k}>{drawCell(2, 480 + k * 30, cy + 246, 0.45)}</g>)}
						<g transform={`translate(${colonyOut * 100}, ${-colonyOut * 30})`} opacity={1 - died * 0.45} style={{filter: `grayscale(${died})`}}>
							{drawCell(2, 590, cy + 246, 0.6)}
						</g>
						<Mark x={728} y={cy + 196} ok={false} r={14} opacity={fadeAt(frame, res)} />
						<Lines x={570} y={cy + 320} lines={wrap(test.multiText, 26)} size={20} color={TOK.ink} weight={800} />
					</g>
				</g>
			)}
			{verdict && (
				<g opacity={fadeAt(frame, verdict.at)}>
					<rect x={60} y={H - 42} width={W - 120} height={32} rx={16} fill={TOK.amber} opacity={0.1 + 0.1 * idlePulse(frame)} />
					<text x={W / 2} y={H - 20} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800}>{verdict.text}</text>
				</g>
			)}
			<Notes frame={frame} notes={notes} bottom={verdict ? H - 50 : H - 10} />
		</svg>
	);
};
