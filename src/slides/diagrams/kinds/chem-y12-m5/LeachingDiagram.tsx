// LeachingDiagram (kind: chem12m5Leach) — detoxifying crushed cycad seed:
// still water versus running water.
//
// Two troughs on plinths hold crushed seed pieces dotted with water-soluble
// toxin particles (red). Left, still water: toxin leaves the seed until the
// water holds enough that the two sides balance, then particles only swap
// places (one leaves, one returns): toxin stays in the seed. Right, running
// water: the flow carries every dissolved particle away, so the water never
// fills up with toxin, the system never settles, and particles keep leaving
// until the seed is nearly clear. Under each trough a small graph draws
// "toxin left in seed" in sync with the particles. Qualitative: no values.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AtomDefs, Ball, beatCaption, bounce, clamp, ease, hash01, ramp} from './shared';

export type LeachProps = {
	delay?: number;
	toxinLabel?: string;
	/** Toxin particles per seed. */
	n?: number;
	/** Particles that leave in still water before it balances. */
	stillLeave?: number;
	beats?: {toxin?: number; soak?: number; still?: number; left?: number; running?: number; nearZero?: number; keeps?: number};
	captions?: {at: number; text: string}[];
};

const ID = 'c12m5lch';
const W = 760;
const H = 530;
const SEED = '#b8894e';
const SEED_D = '#8a6234';
const WATER = 'rgba(120,190,235,0.30)';

export const LeachingDiagram = ({
	delay = 62,
	toxinLabel = 'cycasin and macrozamin: water-soluble toxins',
	n = 14,
	stillLeave = 7,
	beats = {},
	captions,
}: LeachProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = {toxin: 144, soak: 329, still: 500, left: 599, running: 645, nearZero: 856, keeps: 915, ...beats};
	const END = 1130;

	// Panel geometry
	const P = [
		{cx: 192, title: 'still water'},
		{cx: 568, title: 'running water'},
	];
	const TW = 290; // trough width
	const TOP = 100, BOT = 240; // trough interior
	const WL = 124; // water line
	const start = [b.soak, b.running];

	// Seed chunks (same shape in both troughs)
	const chunks = [
		{dx: -78, w: 64, h: 26},
		{dx: -8, w: 70, h: 30},
		{dx: 66, w: 60, h: 24},
	];
	const chunkPath = (cx: number, c: (typeof chunks)[number], k: number) => {
		const x = cx + c.dx, y = BOT - 4;
		const j = (i: number) => (hash01(k * 11 + i) - 0.5) * 8;
		return `M ${x - c.w / 2} ${y} L ${x - c.w / 2 + 6 + j(1)} ${y - c.h * 0.7} L ${x - c.w * 0.1 + j(2)} ${y - c.h} L ${x + c.w * 0.3 + j(3)} ${y - c.h * 0.85} L ${x + c.w / 2} ${y - c.h * 0.3 + j(4)} L ${x + c.w / 2 - 4} ${y} Z`;
	};
	const homes = Array.from({length: n}, (_, i) => {
		const c = chunks[i % 3];
		const col = Math.floor(i / 3);
		return {dx: c.dx - c.w / 2 + 12 + ((col * 0.23 + hash01(i * 5) * 0.2) % 0.9) * (c.w - 22), dy: -6 - hash01(i * 7 + 1) * (c.h - 14)};
	});

	// ── Still water ──
	const stillT = Array.from({length: stillLeave}, (_, j) => b.soak + 24 + 150 * Math.pow((j + 0.5) / stillLeave, 1.6));
	const eqAt = stillT[stillT.length - 1] + 30;
	// Leaving order: spread over the seed
	const order = Array.from({length: n}, (_, i) => i).sort((p, q) => hash01(p * 3 + 2) - hash01(q * 3 + 2));
	// ── Running water ──
	const runLeave = n - 1;
	const runT = Array.from({length: runLeave}, (_, j) => b.running + 24 + 330 * Math.pow((j + 0.5) / runLeave, 1.45));

	const waterBox = (cx: number) => ({x0: cx - TW / 2 + 16, x1: cx + TW / 2 - 16, y0: WL + 14, y1: BOT - 44});
	const particle = (panel: 0 | 1, i: number) => {
		const cx = P[panel].cx;
		const h = homes[i];
		const home = {x: cx + h.dx, y: BOT - 4 + h.dy};
		const rank = order.indexOf(i);
		const wb = waterBox(cx);
		const s = i * 13 + panel * 101;
		const wander = {
			x: bounce(wb.x0 + hash01(s) * (wb.x1 - wb.x0), (0.25 + hash01(s + 1) * 0.3) * (hash01(s + 2) > 0.5 ? 1 : -1), frame, wb.x0, wb.x1),
			y: bounce(wb.y0 + hash01(s + 3) * (wb.y1 - wb.y0), (0.15 + hash01(s + 4) * 0.2) * (hash01(s + 5) > 0.5 ? 1 : -1), frame, wb.y0, wb.y1),
		};
		if (panel === 0) {
			let out = 0;
			if (rank < stillLeave) out = ease(interpolate(frame, [stillT[rank], stillT[rank] + 26], [0, 1], clamp));
			// Exchange at equilibrium: one dissolved particle returns while one in the seed leaves, then they swap back.
			const PER = 150;
			if (frame > eqAt) {
				const ph = (frame - eqAt) % PER;
				const swing = ph < 30 ? ease(ph / 30) : ph < 75 ? 1 : ph < 105 ? 1 - ease((ph - 75) / 30) : 0;
				if (rank === 0) out = 1 - swing; // dissolved one goes home...
				if (rank === stillLeave) out = swing; // ...while a seed one leaves
			}
			return {x: home.x + (wander.x - home.x) * out, y: home.y + (wander.y - home.y) * out, op: 1, inSeed: 1 - out};
		}
		if (rank < runLeave) {
			const t0 = runT[rank];
			const up = ease(interpolate(frame, [t0, t0 + 24], [0, 1], clamp));
			const drift = Math.max(0, frame - t0 - 10) * 1.5;
			const x = home.x + drift;
			const y = home.y + (WL + 30 + hash01(s + 8) * 50 - home.y) * up + Math.sin((frame + i * 20) / 12) * 3 * up;
			const op = 1 - interpolate(x, [cx + TW / 2 - 30, cx + TW / 2 + 20], [0, 1], clamp);
			return {x, y, op, inSeed: 1 - up};
		}
		return {x: home.x, y: home.y, op: 1, inSeed: 1};
	};

	// Seed count curve for the graph (smooth, net of the exchange)
	const seedFrac = (panel: 0 | 1, t: number) => {
		let left = 0;
		if (panel === 0) stillT.forEach((tt) => (left += ease(interpolate(t, [tt, tt + 26], [0, 1], clamp))));
		else runT.forEach((tt) => (left += ease(interpolate(t, [tt, tt + 24], [0, 1], clamp))));
		return 1 - left / n;
	};

	const caps = beatCaption(frame, captions ?? [
		{at: 0, text: 'Crushed cycad seed: toxin particles inside the pieces'},
		{at: b.soak, text: 'Soaking: the toxin dissolves into the water'},
		{at: b.still, text: 'Still water: it reaches equilibrium, and leaching stops'},
		{at: b.left, text: 'Particles only swap places: toxin is left in the seed'},
		{at: b.running, text: 'Running water carries the dissolved toxin away'},
		{at: b.nearZero, text: 'Toxin in the water stays near zero: it never settles'},
		{at: b.keeps, text: 'So toxin keeps leaving until the seed is nearly clear'},
	]);

	const GY0 = 384, GY1 = 446;
	const graph = (panel: 0 | 1) => {
		const cx = P[panel].cx;
		const gx0 = cx - 118, gx1 = cx + 124;
		const t0 = start[panel] - 10;
		const tx = (t: number) => gx0 + ((t - t0) / (END - t0)) * (gx1 - gx0);
		const ty = (f: number) => GY1 - f * (GY1 - GY0);
		const pen = Math.max(t0, Math.min(END, frame));
		const pts: string[] = [];
		for (let t = t0; t <= pen; t += 6) pts.push(`${pts.length ? 'L' : 'M'} ${tx(t).toFixed(1)} ${ty(seedFrac(panel, t)).toFixed(1)}`);
		pts.push(`L ${tx(pen).toFixed(1)} ${ty(seedFrac(panel, pen)).toFixed(1)}`);
		const endV = seedFrac(panel, pen);
		const on = ramp(frame, start[panel] - 10, 14);
		return (
			<g opacity={on}>
				<line x1={gx0} y1={GY1} x2={gx1 + 4} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
				<line x1={gx0} y1={GY0 - 6} x2={gx0} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
				<text x={gx0 + 8} y={GY0 - 12} fill={TOK.inkDim} fontSize={15} fontWeight={800}>toxin left in seed</text>
				<text x={gx1} y={GY1 + 20} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={800}>time →</text>
				{frame >= start[panel] - 10 && <path d={pts.join(' ')} stroke="#c0503a" strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" />}
				{frame >= start[panel] && <circle cx={tx(pen)} cy={ty(endV)} r={5} fill="#c0503a" />}
			</g>
		);
	};

	const flowOn = ramp(frame, b.running, 20);
	const fill = (panel: 0 | 1) => ease(ramp(frame, start[panel], 30));

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Crushed cycad seed in still water and in running water: in still water the toxin leaches out until an equilibrium is reached and some stays in the seed; in running water the flow carries dissolved toxin away, its concentration stays near zero and toxin keeps leaving until the seed is nearly clear" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={['Toxin']} />

			{/* Toxin label */}
			<g opacity={ramp(frame, b.toxin, 16)}>
				<Ball id={ID} el="Toxin" x={W / 2 - 200} y={26} r={8} />
				<text x={W / 2 - 184} y={32} fill={TOK.ink} fontSize={18} fontWeight={800}>{toxinLabel}</text>
			</g>

			{P.map((p, panel) => {
				const pn = panel as 0 | 1;
				const dim = pn === 1 ? 0.5 + 0.5 * ramp(frame, b.running - 20, 20) : 1;
				const lv = fill(pn);
				const wy = BOT - (BOT - WL) * lv;
				const x0 = p.cx - TW / 2, x1 = p.cx + TW / 2;
				return (
					<g key={panel} opacity={ramp(frame, 0) * dim}>
						<text x={p.cx} y={68} textAnchor="middle" fill={pn === 1 ? theme.accent : TOK.ink} fontSize={21} fontWeight={800}>{p.title}</text>
						<DioramaPlinth id={ID} cx={p.cx} cy={BOT + 18} rx={160}>
							{/* trough */}
							<path d={`M ${x0} ${TOP} L ${x0} ${BOT - 12} Q ${x0} ${BOT} ${x0 + 12} ${BOT} L ${x1 - 12} ${BOT} Q ${x1} ${BOT} ${x1} ${BOT - 12} L ${x1} ${TOP}`} fill="rgba(255,255,255,0.35)" />
							{lv > 0 && <rect x={x0 + 2} y={wy} width={TW - 4} height={BOT - wy - 2} rx={10} fill={WATER} />}
							{/* flow lines (running) */}
							{pn === 1 &&
								[0, 1, 2].map((k) => {
									const u = ((frame / 60 + k / 3) % 1);
									return (
										<path key={k} d={`M ${x0 + 20 + u * (TW - 90)} ${WL + 22 + k * 26} l 44 0 m -10 -6 l 10 6 l -10 6`} stroke="#3f8fc9" strokeWidth={2.5} fill="none" strokeLinecap="round" opacity={flowOn * Math.sin(Math.PI * u) * 0.8} />
									);
								})}
							{chunks.map((c, k) => (
								<path key={k} d={chunkPath(p.cx, c, k)} fill={SEED} stroke={SEED_D} strokeWidth={2} strokeLinejoin="round" />
							))}
							{Array.from({length: n}, (_, i) => {
								const q = particle(pn, i);
								return <Ball key={i} id={ID} el="Toxin" x={q.x} y={q.y + (q.inSeed < 0.5 ? idleBob(frame, i, 0.6) : 0)} r={6.5} opacity={q.op} />;
							})}
							{/* glass walls, with an inlet/outlet gap for running water */}
							{pn === 0 ? (
								<path d={`M ${x0} ${TOP} L ${x0} ${BOT - 12} Q ${x0} ${BOT} ${x0 + 12} ${BOT} L ${x1 - 12} ${BOT} Q ${x1} ${BOT} ${x1} ${BOT - 12} L ${x1} ${TOP}`} fill="none" stroke="rgba(70,90,110,0.55)" strokeWidth={3} />
							) : (
								<g>
									<path d={`M ${x0} ${WL + 4} L ${x0} ${BOT - 12} Q ${x0} ${BOT} ${x0 + 12} ${BOT} L ${x1 - 12} ${BOT} Q ${x1} ${BOT} ${x1} ${BOT - 12} L ${x1} ${WL + 60}`} fill="none" stroke="rgba(70,90,110,0.55)" strokeWidth={3} />
									<path d={`M ${x0} ${TOP} L ${x0} ${WL - 16}`} stroke="rgba(70,90,110,0.55)" strokeWidth={3} />
									<path d={`M ${x1} ${TOP} L ${x1} ${WL - 16}`} stroke="rgba(70,90,110,0.55)" strokeWidth={3} />
								</g>
							)}
						</DioramaPlinth>
						{pn === 1 && (
							<g opacity={flowOn}>
								<text x={x0 + 4} y={TOP - 8} fill="#3f8fc9" fontSize={16} fontWeight={800}>fresh in →</text>
								<text x={x1 - 4} y={TOP - 8} textAnchor="end" fill="#3f8fc9" fontSize={16} fontWeight={800}>→ out</text>
							</g>
						)}
						{graph(pn)}
					</g>
				);
			})}

			{/* Outcome tags */}
			<g opacity={ramp(frame, b.left, 16)}>
				<text x={P[0].cx} y={488} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>toxin still in the seed</text>
			</g>
			<g opacity={ramp(frame, b.keeps + 40, 16)}>
				<text x={P[1].cx} y={488} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={0.75 + 0.25 * idlePulse(frame)}>seed nearly clear</text>
			</g>

			<text x={W / 2} y={520} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700} opacity={caps.opacity}>{caps.text}</text>
		</svg>
	);
};
