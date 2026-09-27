// CollisionBoxDiagram — a live particle tank for collision theory (M3 L11).
//
// Red (A) and blue (B) particles fly around a glass tank on a plinth, bouncing
// off the walls and each other (collisionSim). Every bounce flashes a small grey
// ring and ticks the "collisions" counter. Only an A–B hit that is hard enough
// (≥ Ea) AND lined up (both white reactive spots facing) reacts: an amber burst,
// the pair becomes a purple product, and the "reacted" counter ticks. The two
// conditions arrive as check chips on the narration's "two things" beat.
//
// Beats (frames after `delay`): counters 0 · conditions 450 · Ea 720.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaPlinth, DioramaDefs, idlePulse} from '../../diorama';
import {Ball, ExtraAtomDefs, clamp, ramp} from './shared';
import {runSim, type SimConfig} from './collisionSim';

export type CollisionBoxProps = {
	delay?: number;
	/** Frames after delay: [two conditions, activation energy note]. */
	beats?: [number, number];
	sim?: Partial<SimConfig>;
};

const ID = 'c11m3col';
const W = 760;
const TX = 130, TY = 114, TW = 500, TH = 210;

export const CollisionBoxDiagram = ({delay = 90, beats = [450, 720], sim = {}}: CollisionBoxProps) => {
	const frame = useCurrentFrame() - delay;
	const [tCond, tEa] = beats;
	const cfg: SimConfig = {w: TW, h: TH, nA: 9, nB: 9, r: 14, speed: [1.2, 4.2], threshold: 3.5, orientTol: 0.9, frames: 1400, seed: 2, ...sim};
	const run = runSim(cfg);
	const f = Math.max(0, Math.min(cfg.frames, Math.floor(frame)));
	const ps = run.frames[f];
	const nColl = frame < 0 ? 0 : run.collisionsBy[f];
	const nEff = frame < 0 ? 0 : run.effectiveBy[f];
	const recent = run.events.filter((e) => e.f <= f && f - e.f < (e.effective ? 45 : 10));
	const lastEff = [...run.events].reverse().find((e) => e.effective && e.f <= f);
	const effGlow = lastEff ? interpolate(f - lastEff.f, [0, 40], [1, 0], clamp) : 0;
	const condIn = ramp(frame, tCond, 14);

	const color = (k: string) => (k === 'A' ? 'B' : k === 'B' ? 'A' : 'P');

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Particles collide constantly, but only collisions with enough energy and the correct orientation react" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={[]} />
			<ExtraAtomDefs id={ID} elements={['A', 'B']} />
			<defs>
				<clipPath id={`${ID}-tank`}>
					<rect x={TX} y={TY} width={TW} height={TH} rx={14} />
				</clipPath>
			</defs>

			{/* Counters */}
			<g opacity={ramp(frame, 0)}>
				<text x={W / 2 - 24} y={44} textAnchor="end" fill={TOK.inkDim} fontSize={21} fontWeight={800}>
					collisions <tspan fill={TOK.ink} fontSize={32}>{nColl}</tspan>
				</text>
				<text x={W / 2 + 24} y={44} textAnchor="start" fill={TOK.amberInk} fontSize={21} fontWeight={800}>
					reacted <tspan fontSize={32} opacity={0.75 + 0.25 * idlePulse(frame)}>{nEff}</tspan>
				</text>
			</g>
			{/* Conditions for an effective collision */}
			<g opacity={condIn}>
				{[
					{x: W / 2 - 150, t: frame >= tEa ? '✓ energy ≥ Ea' : '✓ enough energy'},
					{x: W / 2 + 150, t: '✓ right orientation'},
				].map((c) => (
					<g key={c.x}>
						<rect x={c.x - 128} y={64} width={256} height={36} rx={18} fill="#ffffff" stroke={effGlow > 0.05 ? TOK.amber : TOK.rule} strokeWidth={2 + effGlow * 2} />
						<text x={c.x} y={88} textAnchor="middle" fill={effGlow > 0.05 ? TOK.amberInk : TOK.ink} fontSize={19} fontWeight={800}>{c.t}</text>
					</g>
				))}
			</g>

			<DioramaPlinth id={ID} cx={W / 2} cy={TY + TH + 8} rx={280}>
				{/* glass tank */}
				<rect x={TX} y={TY} width={TW} height={TH} rx={14} fill="rgba(215,235,248,0.55)" stroke="rgba(70,90,110,0.5)" strokeWidth={3} />
				<g clipPath={`url(#${ID}-tank)`}>
					{recent.map((e, i) => {
						const age = f - e.f;
						if (e.effective) {
							const s = age / 45;
							return (
								<g key={i} opacity={1 - s}>
									<circle cx={TX + e.x} cy={TY + e.y} r={14 + 40 * s} fill="none" stroke={TOK.amber} strokeWidth={5} />
									{[0, 1, 2, 3, 4, 5, 6, 7].map((k) => {
										const a = (k / 8) * Math.PI * 2;
										return <line key={k} x1={TX + e.x + Math.cos(a) * (18 + 30 * s)} y1={TY + e.y + Math.sin(a) * (18 + 30 * s)} x2={TX + e.x + Math.cos(a) * (28 + 36 * s)} y2={TY + e.y + Math.sin(a) * (28 + 36 * s)} stroke={TOK.amber} strokeWidth={4} strokeLinecap="round" />;
									})}
								</g>
							);
						}
						return <circle key={i} cx={TX + e.x} cy={TY + e.y} r={8 + age * 1.6} fill="none" stroke="#7d8790" strokeWidth={2} opacity={1 - age / 10} />;
					})}
					{ps.map((p, i) => {
						if (!p.alive) return null;
						const x = TX + p.x, y = TY + p.y;
						if (p.kind === 'P') {
							// product: an A–B pair stuck together
							const dx = Math.cos(p.a) * 9, dy = Math.sin(p.a) * 9;
							return (
								<g key={i}>
									<Ball id={ID} el="B" x={x - dx} y={y - dy} r={13} />
									<Ball id={ID} el="A" x={x + dx} y={y + dy} r={13} />
								</g>
							);
						}
						const r = cfg.r;
						return (
							<g key={i}>
								{/* speed streak: faster particles carry more energy */}
								<Ball id={ID} el={color(p.kind)} x={x} y={y} r={r} />
								<circle cx={x + Math.cos(p.a) * r * 0.62} cy={y + Math.sin(p.a) * r * 0.62} r={r * 0.3} fill="#ffffff" stroke="rgba(0,0,0,0.25)" strokeWidth={1} />
							</g>
						);
					})}
				</g>
				{/* glass highlight */}
				<rect x={TX + 14} y={TY + 12} width={10} height={TH - 24} rx={5} fill="#ffffff" opacity={0.4} />
			</DioramaPlinth>

			{/* Legend */}
			<g opacity={ramp(frame, 20)} fontSize={17} fontWeight={700} fill={TOK.inkDim}>
				<circle cx={96} cy={514} r={4} fill="#ffffff" stroke="rgba(0,0,0,0.35)" />
				<text x={108} y={520}>reactive spot</text>
				<circle cx={288} cy={514} r={9} fill="none" stroke="#7d8790" strokeWidth={2} />
				<text x={304} y={520}>bounce</text>
				<circle cx={430} cy={514} r={9} fill="none" stroke={TOK.amber} strokeWidth={3} />
				<text x={446} y={520} fill={TOK.amberInk}>reaction → product</text>
			</g>
		</svg>
	);
};
