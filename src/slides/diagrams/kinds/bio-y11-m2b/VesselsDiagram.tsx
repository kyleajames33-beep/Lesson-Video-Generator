// VesselsDiagram (bio11m2Vessels) — arteries, capillaries and veins.
//
// mode "sections": the three vessels as cross-sections standing on stone
//   plinths. Artery: thick muscular, elastic wall around a narrow lumen; the
//   wall stretches and recoils with each heartbeat. Capillary: a wall one
//   cell thick (drawn much larger than scale, as the scene says) with red
//   cells squeezing through in single file. Vein: thin wall, wide lumen, the
//   two cusps of a valve. Feature lines build under each on their beats.
// mode "valve": a vein seen lengthways between two skeletal muscles. When the
//   muscles contract they squeeze blood upward (toward the heart) and the
//   valves open; when they relax the blood starts to fall back and the valve
//   cusps swing shut. Labels from props.
// Hold: the heartbeat pulse and the muscle pump keep running.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Foot, FootLine, GLOSS, GlossDefs, H, Lines, PAL, W, fadeAt, popAt, wrap} from './shared';

type Col = {name: string; at: number; lines?: {text: string; at: number; amber?: boolean}[]};
export type VesselsProps = {
	mode: 'sections' | 'valve';
	artery?: Col;
	capillary?: Col & {scaleNote?: string};
	vein?: Col;
	valve?: {
		title?: string;
		pumpAt: number;
		closeAt: number;
		labels: {text: string; at: number; amber?: boolean}[];
		toHeart: string;
	};
	footer?: FootLine[];
	delay?: number;
};

const ID = 'b11m2ves';
const WALL = '#e7b9a8';
const WALL_EDGE = '#b77a66';
const MUSCLE = '#d98a80';

const beat = (frame: number) => {
	// heartbeat: a quick stretch then an elastic recoil, every 32 frames
	const t = ((frame % 32) + 32) % 32;
	return t < 6 ? t / 6 : Math.max(0, 1 - (t - 6) / 18);
};

const Artery = ({x, y, frame}: {x: number; y: number; frame: number}) => {
	const k = 1 + 0.045 * beat(frame);
	return (
		<g transform={`translate(${x},${y}) scale(${k})`}>
			<circle r={70} fill="#f1dccd" stroke={WALL_EDGE} strokeWidth={2} />
			<circle r={62} fill={MUSCLE} stroke="#b9665c" strokeWidth={1} />
			{[46, 52, 57].map((r, i) => (
				<circle key={i} r={r} fill="none" stroke="#f2c7b8" strokeWidth={1.6} strokeDasharray="7 5" />
			))}
			<circle r={34} fill="#f6e2da" />
			<circle r={30} fill={`url(#${ID}-g-blood)`} />
			{[0, 1, 2].map((i) => <ellipse key={i} cx={-12 + i * 12} cy={(i - 1) * 8} rx={7} ry={4.5} fill={PAL.bloodDark} opacity={0.5} />)}
		</g>
	);
};

const Capillary = ({x, y, frame}: {x: number; y: number; frame: number}) => {
	const cells = 8;
	const sq = Math.sin(frame / 14) * 2;
	return (
		<g transform={`translate(${x},${y})`}>
			{Array.from({length: cells}, (_, i) => {
				const a0 = (i / cells) * Math.PI * 2, a1 = ((i + 1) / cells) * Math.PI * 2;
				const R = 44, r = 38;
				const p = (a: number, rr: number) => `${Math.cos(a) * rr} ${Math.sin(a) * rr}`;
				return (
					<g key={i}>
						<path d={`M ${p(a0, R)} A ${R} ${R} 0 0 1 ${p(a1, R)} L ${p(a1, r)} A ${r} ${r} 0 0 0 ${p(a0, r)} Z`} fill={WALL} stroke={WALL_EDGE} strokeWidth={1.2} />
						{i % 2 === 0 && <ellipse cx={Math.cos((a0 + a1) / 2) * 41} cy={Math.sin((a0 + a1) / 2) * 41} rx={3} ry={2} fill={PAL.nucleus} />}
					</g>
				);
			})}
			<circle r={38} fill="#f6e2da" />
			<ellipse cx={0} cy={0} rx={33 + sq} ry={33 - sq} fill={`url(#${ID}-g-blood)`} stroke={PAL.bloodDark} strokeWidth={1.2} />
			<ellipse cx={0} cy={0} rx={14} ry={14} fill={PAL.bloodDark} opacity={0.35} />
		</g>
	);
};

const Vein = ({x, y, frame}: {x: number; y: number; frame: number}) => {
	const f = Math.sin(frame / 40) * 2;
	return (
		<g transform={`translate(${x},${y})`}>
			<ellipse rx={76 + f} ry={66 - f} fill="#f1dccd" stroke={WALL_EDGE} strokeWidth={2} />
			<ellipse rx={70 + f} ry={60 - f} fill={MUSCLE} opacity={0.7} />
			<ellipse rx={64 + f} ry={54 - f} fill={`url(#${ID}-g-deoxy)`} />
			{/* valve cusps */}
			<path d="M -62 -6 Q -20 -30 0 -2 Q -24 16 -62 8 Z" fill="#f3d6cf" stroke={WALL_EDGE} strokeWidth={1.4} opacity={0.95} />
			<path d="M 62 -6 Q 20 -30 0 -2 Q 24 16 62 8 Z" fill="#f3d6cf" stroke={WALL_EDGE} strokeWidth={1.4} opacity={0.95} />
		</g>
	);
};

export const VesselsDiagram = ({mode, artery, capillary, vein, valve, footer = [], delay = 62}: VesselsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	if (mode === 'valve' && valve) {
		// vein runs vertically at x = VX; blood moves up (toward the heart)
		const VX = 250, Y0 = 70, Y1 = 470;
		const on = fadeAt(frame, 0, 14);
		const pumping = frame >= valve.pumpAt;
		const T = 90;
		const ph = pumping ? (((frame - valve.pumpAt) % T) + T) % T / T : 0;
		const squeeze = pumping ? (ph < 0.5 ? Math.sin((ph / 0.5) * Math.PI) : 0) : 0; // muscles bulge in first half
		const closed = pumping ? (ph >= 0.5 ? Math.min(1, (ph - 0.5) / 0.12) * (ph > 0.9 ? (1 - ph) / 0.1 : 1) : 0) : 1;
		const valvesY = [180, 350];
		const hi = fadeAt(frame, valve.closeAt, 14);
		// blood particles: advance while squeezing, slip back a little while relaxing
		const particles = Array.from({length: 14}, (_, k) => {
			const cycles = pumping ? Math.floor((frame - valve.pumpAt) / T) : 0;
			const within = ph < 0.5 ? (1 - Math.cos((ph / 0.5) * Math.PI)) / 2 : 1 - 0.06 * Math.sin(((ph - 0.5) / 0.5) * Math.PI);
			const dist = (cycles + within) * 60;
			const base = (k / 14) * (Y1 - Y0);
			const y = Y1 - (((base + dist) % (Y1 - Y0)) + (Y1 - Y0)) % (Y1 - Y0);
			return {x: VX + ((k * 37) % 50) - 25 + idleBob(frame, k, 2), y};
		});
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={valve.labels.map((l) => l.text).join('; ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<GlossDefs id={ID} colors={GLOSS} />
				<g opacity={on}>
					<DioramaPlinth id={`${ID}p`} cx={VX} cy={Y1 + 14} rx={150} />
					{/* muscles either side */}
					{[-1, 1].map((sd) => (
						<ellipse key={sd} cx={VX + sd * (58 + 22 * (1 - squeeze))} cy={265} rx={40 + 8 * squeeze} ry={120} fill={`url(#${ID}-g-muscle)`} stroke="#9c3d36" strokeWidth={1.5} />
					))}
					{/* vein */}
					<rect x={VX - 36 + 6 * squeeze} y={Y0} width={72 - 12 * squeeze} height={Y1 - Y0} rx={12} fill={`url(#${ID}-g-deoxy)`} stroke={WALL_EDGE} strokeWidth={3} opacity={0.9} />
					<clipPath id={`${ID}-vc`}><rect x={VX - 34} y={Y0} width={68} height={Y1 - Y0} /></clipPath>
					<g clipPath={`url(#${ID}-vc)`}>
						{particles.map((p, k) => <ellipse key={k} cx={p.x} cy={p.y} rx={8} ry={5} fill={PAL.bloodDark} opacity={0.75} />)}
					</g>
					{/* valve cusps: open (along the wall, pointing up) or closed (meeting in the middle) */}
					{valvesY.map((vy, i) => {
						const a = 12 + 50 * closed; // degrees from vertical
						const len = 40;
						return (
							<g key={i}>
								{hi > 0 && closed > 0.5 && <circle cx={VX} cy={vy - 12} r={34} fill={TOK.amber} opacity={0.18 * hi * (0.6 + 0.4 * idlePulse(frame))} />}
								{[-1, 1].map((sd) => {
									const bx = VX + sd * 34, by = vy;
									const ang = (a * Math.PI) / 180;
									const tx = bx - sd * Math.sin(ang) * len;
									const ty = by - Math.cos(ang) * len;
									const mx = (bx + tx) / 2 - sd * 8, my = (by + ty) / 2 + 6;
									return (
										<g key={sd}>
											<path d={`M ${bx} ${by} Q ${mx} ${my} ${tx} ${ty}`} stroke={WALL_EDGE} strokeWidth={12} strokeLinecap="round" fill="none" />
											<path d={`M ${bx} ${by} Q ${mx} ${my} ${tx} ${ty}`} stroke="#fbe7df" strokeWidth={8} strokeLinecap="round" fill="none" />
										</g>
									);
								})}
							</g>
						);
					})}
					<Arrow x1={VX} y1={Y0 + 10} x2={VX} y2={Y0 - 26} color={PAL.deoxy} width={5} head={13} />
					<text x={VX + 22} y={Y0 - 8} fill={PAL.deoxy} fontSize={18} fontWeight={800}>{valve.toHeart}</text>
				</g>
				{valve.labels.map((l, i) => (
					<Lines key={i} x={440} y={130 + i * 86} anchor="start" lines={wrap(l.text, 26)} size={20} color={l.amber ? TOK.amberInk : TOK.ink} opacity={fadeAt(frame, l.at, 14)} />
				))}
				<Foot lines={footer} frame={frame} />
			</svg>
		);
	}

	const cols = [
		{c: artery, draw: Artery, key: 'a'},
		{c: capillary, draw: Capillary, key: 'c'},
		{c: vein, draw: Vein, key: 'v'},
	].filter((x) => x.c) as {c: Col; draw: typeof Artery; key: string}[];
	const colW = W / cols.length;
	const PY = 232;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={cols.map((x) => x.c.name).join(', ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{cols.map(({c, draw: Draw, key}, i) => {
				const x = colW * (i + 0.5);
				const p = popAt(frame, fps, c.at);
				const on = Math.min(1, p * 1.4);
				let y = PY + 80;
				return (
					<g key={key}>
						<g opacity={on} transform={`translate(0, ${(1 - Math.min(1, p)) * 24})`}>
							<DioramaPlinth id={`${ID}${i}`} cx={x} cy={PY} rx={96} />
							<g transform={`translate(0, ${idleBob(frame, i, 0.8)})`}>
								<Draw x={x} y={PY - 86} frame={frame} />
							</g>
							<Lines x={x} y={PY + 72} lines={[c.name]} size={23} color={theme.accent} />
							{key === 'c' && capillary?.scaleNote && <text x={x} y={PY - 166} textAnchor="middle" fill={TOK.inkMute} fontSize={15} fontWeight={700}>{capillary.scaleNote}</text>}
						</g>
						{(c.lines ?? []).map((ln, k) => {
							const lines = wrap(ln.text, 20);
							const y0 = y + 20;
							y += lines.length * 21 + 12;
							return <Lines key={k} x={x} y={y0} lines={lines} size={18} color={ln.amber ? TOK.amberInk : TOK.ink} weight={700} opacity={fadeAt(frame, ln.at, 12)} />;
						})}
					</g>
				);
			})}
			<Foot lines={footer} frame={frame} />
		</svg>
	);
};

