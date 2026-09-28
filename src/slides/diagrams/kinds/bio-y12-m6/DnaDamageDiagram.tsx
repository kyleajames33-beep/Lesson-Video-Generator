// DnaDamageDiagram — what a mutagen does to a DNA double strand.
//
// A painted ladder (two sugar-phosphate backbones, base pairs between them;
// the lower strand is computed as the complement of the upper one) stands on a
// stone ledge. On its beat an agent arrives and the damage happens in front of
// the viewer:
//   dimer    UV: two neighbouring thymines on one strand bond to each other
//            (amber bond), their pairing breaks and the helix kinks
//   break    ionising radiation: the backbone snaps (one strand or both) and
//            the pieces drift apart
//   insert   a virus: the ladder opens and a stretch of viral DNA slots in
//   damage   a base is chemically altered (amber, marked *)
// `outcome` mode shows the step from damage to mutation: the damaged ladder on
// top, then two fates below: repaired before the cell divides (no mutation),
// or copied first, so a daughter cell's DNA carries a changed base pair (the
// mutation). Only the scene's own mechanisms are drawn; every label is a prop.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {ReactNode} from 'react';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {AMBER, BASE_COLOR, GREEN, PURPLE, ROSE, SLATE, StoneLedge, clamp, ease, fadeAt, popAt, textWidth} from './shared';

type Effect = {type: 'dimer' | 'break' | 'insert' | 'damage'; i: number; strands?: 1 | 2; bases?: string; at: number};
type Agent = {type: 'uv' | 'ionising' | 'virus'; label?: string; at: number};
export type DamagePanel = {title: string; bases: string; at: number; agent?: Agent; effect?: Effect; tag?: {text: string; at: number; amber?: boolean}; caption?: {text: string; at: number}};
export type DnaDamageProps = {
	mode?: 'panels' | 'outcome';
	panels?: DamagePanel[];
	// outcome mode
	outcome?: {
		bases: string;
		damageAt: number;
		agentLabel: string;
		i: number;
		/** Base the damaged site ends up paired as after copying (e.g. "A" for a G→A change). */
		changedTo: string;
		repair: {title: string; at: number; tag: string};
		copy: {title: string; at: number; tag: string};
	};
	footer?: {text: string; at: number; amber?: boolean};
	delay?: number;
};

const ID = 'b12m6dna';
const W = 760;
const H = 530;
const COMP: Record<string, string> = {A: 'T', T: 'A', G: 'C', C: 'G'};
const RAIL = '#9aa7b8';

/** One base-pair ladder, left edge x0, centre line y. */
const Ladder = ({
	frame, bases, x0, y, pitch, s, effect, effT = 0, highlight, idle = 0,
}: {
	frame: number; bases: string; x0: number; y: number; pitch: number; s: number;
	effect?: Effect; effT?: number; highlight?: {i: number; top: string; bottom: string; ring: boolean}; idle?: number;
}) => {
	const n = bases.length;
	const gapH = s * 0.95; // distance from centre to each tile centre
	const railY = gapH + s * 0.5 + 6;
	const ins = effect?.type === 'insert' ? effect : undefined;
	const insN = ins?.bases?.length ?? 0;
	const open = ins ? ease(effT, 0, 0.5) : 0; // ladder opens
	const drop = ins ? interpolate(effT, [0.45, 1], [0, 1], clamp) : 0;
	const brk = effect?.type === 'break' ? effect : undefined;
	const brkT = brk ? effT : 0;
	const dimer = effect?.type === 'dimer' ? effect : undefined;
	const kink = dimer ? effT : 0;
	const dmg = effect?.type === 'damage' ? effect : undefined;

	const xOf = (k: number) => {
		let x = x0 + k * pitch + pitch / 2;
		if (ins && k >= ins.i) x += open * insN * pitch;
		if (brk && k > brk.i) x += brkT * 18;
		return x;
	};
	// kink: base pairs near the dimer lift into a bump
	const dyOf = (k: number) => {
		if (!dimer) return 0;
		const c = dimer.i + 0.5;
		return -kink * 16 * Math.exp(-((k - c) ** 2) / 2.2);
	};
	const wob = (k: number) => idleBob(frame, k, idle);

	const tile = (x: number, yy: number, b: string, key: string, opts: {ring?: boolean; star?: boolean; tint?: string; op?: number} = {}) => (
		<g key={key} opacity={opts.op ?? 1}>
			{opts.ring && <rect x={x - s / 2 - 4} y={yy - s / 2 - 4} width={s + 8} height={s + 8} rx={s * 0.3} fill="none" stroke={AMBER} strokeWidth={2.5 + idlePulse(frame)} />}
			<rect x={x - s / 2 + 1.5} y={yy - s / 2 + 3} width={s} height={s} rx={s * 0.22} fill="rgba(40,36,30,0.2)" />
			<rect x={x - s / 2} y={yy - s / 2} width={s} height={s} rx={s * 0.22} fill={opts.tint ?? BASE_COLOR[b] ?? SLATE} stroke="rgba(0,0,0,0.22)" />
			<rect x={x - s / 2 + 2.5} y={yy - s / 2 + 2.5} width={s - 5} height={s * 0.34} rx={s * 0.14} fill="#fff" opacity={0.26} />
			<text x={x} y={yy + s * 0.2} textAnchor="middle" fill="#fff" fontSize={s * 0.58} fontWeight={800}>{b}{opts.star ? '*' : ''}</text>
		</g>
	);

	const rail = (side: -1 | 1) => {
		// backbone segments between consecutive positions (skips across a break)
		const segs: ReactNode[] = [];
		const total = n;
		for (let k = 0; k < total - 1; k++) {
			const cut = brk && k === brk.i && (side === -1 || (brk.strands ?? 1) === 2);
			if (cut && brkT > 0.05) {
				const xa = xOf(k);
				const xb = xOf(k + 1);
				const mid = (xa + xb) / 2;
				const ya = y + side * railY + dyOf(k) + wob(k);
				const yb = y + side * railY + dyOf(k + 1) + wob(k + 1);
				segs.push(<line key={`a${k}`} x1={xa} y1={ya} x2={mid - 9 * brkT} y2={(ya + yb) / 2} stroke={RAIL} strokeWidth={9} strokeLinecap="round" />);
				segs.push(<line key={`b${k}`} x1={mid + 9 * brkT} y1={(ya + yb) / 2} x2={xb} y2={yb} stroke={RAIL} strokeWidth={9} strokeLinecap="round" />);
				segs.push(<path key={`j${k}`} d={`M ${mid - 9 * brkT} ${(ya + yb) / 2 - 7} l -5 7 l 5 7 M ${mid + 9 * brkT} ${(ya + yb) / 2 - 7} l 5 7 l -5 7`} stroke={AMBER} strokeWidth={2.5} fill="none" opacity={brkT} />);
				continue;
			}
			if (ins && k === ins.i - 1) {
				// the gap the insert fills
				const xa = xOf(k);
				const xb = xOf(k + 1);
				segs.push(<line key={`g${k}`} x1={xa} y1={y + side * railY + wob(k)} x2={xa + (xb - xa) * (1 - open) + (open > 0 ? 0 : 0)} y2={y + side * railY + wob(k)} stroke={RAIL} strokeWidth={9} strokeLinecap="round" />);
				continue;
			}
			segs.push(
				<line key={k} x1={xOf(k)} y1={y + side * railY + dyOf(k) + wob(k)} x2={xOf(k + 1)} y2={y + side * railY + dyOf(k + 1) + wob(k + 1)} stroke={RAIL} strokeWidth={9} strokeLinecap="round" />,
			);
		}
		return segs;
	};

	return (
		<g>
			{rail(-1)}
			{rail(1)}
			{bases.split('').map((b, k) => {
				const x = xOf(k);
				const dy = dyOf(k) + wob(k);
				const inDimer = dimer && (k === dimer.i || k === dimer.i + 1);
				const hl = highlight && highlight.i === k ? highlight : undefined;
				const isDmg = dmg && dmg.i === k && effT > 0.5;
				const top = hl ? hl.top : b;
				const bottom = hl ? hl.bottom : COMP[b];
				const pairOk = !(inDimer && kink > 0.5);
				return (
					<g key={k}>
						{/* hydrogen bonds between the pair */}
						<line x1={x} y1={y - gapH + s / 2 + dy} x2={x} y2={y + gapH - s / 2 + dy} stroke={TOK.inkMute} strokeWidth={2.5} strokeDasharray="3 4" opacity={pairOk ? 0.9 : 0.15} />
						{tile(x, y - gapH + dy, top, `t${k}`, {ring: !!hl?.ring || !!isDmg, star: !!isDmg, tint: isDmg ? AMBER : undefined})}
						{tile(x, y + gapH + dy + (inDimer ? kink * 6 : 0), bottom, `b${k}`)}
					</g>
				);
			})}
			{dimer && kink > 0.05 && (
				<path
					d={`M ${xOf(dimer.i)} ${y - gapH - s / 2 + dyOf(dimer.i) - 2} Q ${(xOf(dimer.i) + xOf(dimer.i + 1)) / 2} ${y - gapH - s / 2 - 22 + dyOf(dimer.i)} ${xOf(dimer.i + 1)} ${y - gapH - s / 2 + dyOf(dimer.i + 1) - 2}`}
					fill="none"
					stroke={AMBER}
					strokeWidth={4 + idlePulse(frame) * 1.5}
					strokeLinecap="round"
					opacity={kink}
				/>
			)}
			{ins &&
				ins.bases!.split('').map((b, j) => {
					const x = x0 + (ins.i + j) * pitch + pitch / 2;
					const lift = (1 - drop) * 80;
					return (
						<g key={`ins${j}`} opacity={drop > 0 ? Math.min(1, drop * 2) : 0}>
							{[-1, 1].map((side) => (
								<line key={side} x1={x - (j === 0 ? pitch : pitch / 2)} y1={y + side * railY - lift} x2={x + (j === insN - 1 ? pitch : pitch / 2)} y2={y + side * railY - lift} stroke={AMBER} strokeWidth={9} strokeLinecap="round" />
							))}
							{tile(x, y - gapH - lift, b, `it${j}`)}
							{tile(x, y + gapH - lift, COMP[b], `ib${j}`)}
						</g>
					);
				})}
		</g>
	);
};

/** Wavy UV rays, jagged ionising tracks, or a virus capsid, aimed at (tx, ty). */
const AgentArt = ({frame, agent, tx, ty, t}: {frame: number; agent: Agent; tx: number; ty: number; t: number}) => {
	const o = fadeAt(frame, agent.at, 12) * (1 - fadeAt(frame, agent.at + 90, 30) * 0.55);
	if (agent.type === 'virus') {
		const vx = tx + 120 - 120 * t;
		const vy = ty - 40 + 16 * t;
		return (
			<g opacity={o}>
				<g transform={`translate(${vx},${vy + idleBob(frame, 3, 2)})`}>
					<polygon points="0,-24 21,-12 21,12 0,24 -21,12 -21,-12" fill={PURPLE} stroke="rgba(0,0,0,0.3)" strokeWidth={1.5} />
					<polygon points="0,-24 21,-12 0,0 -21,-12" fill="#fff" opacity={0.22} />
					<path d="M -9 -6 q 5 -8 9 0 t 9 0" stroke="#fff" strokeWidth={2.5} fill="none" />
				</g>
				{agent.label && <text x={vx + 30} y={vy - 20} fill={PURPLE} fontSize={17} fontWeight={800}>{agent.label}</text>}
			</g>
		);
	}
	const rays = [-1, 0, 1];
	const len = 110;
	return (
		<g opacity={o}>
			{rays.map((r) => {
				const sx = tx - 62 + r * 30;
				const sy = ty - 50 - Math.abs(r) * 4;
				const ex = sx + (tx + r * 14 - sx) * Math.min(1, t * 1.2);
				const ey = sy + (ty - 8 - sy) * Math.min(1, t * 1.2);
				const dx = ex - sx;
				const dy = ey - sy;
				const L = Math.max(1, Math.hypot(dx, dy));
				const nx = -dy / L;
				const ny = dx / L;
				let d = `M ${sx} ${sy}`;
				const steps = 9;
				for (let k = 1; k <= steps; k++) {
					const f = k / steps;
					const amp = agent.type === 'uv' ? Math.sin(f * Math.PI * 5 + frame / 5) * 5 : (k % 2 ? 5 : -5);
					d += ` L ${sx + dx * f + nx * amp} ${sy + dy * f + ny * amp}`;
				}
				return <path key={r} d={d} fill="none" stroke={agent.type === 'uv' ? PURPLE : ROSE} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" opacity={L > len * 0.1 ? 1 : 0} />;
			})}
			{agent.label && <text x={tx - 170} y={ty - 94} fill={agent.type === 'uv' ? PURPLE : ROSE} fontSize={17} fontWeight={800}>{agent.label}</text>}
		</g>
	);
};

const Tag = ({x, y, text, amber, o, scale = 1, frame}: {x: number; y: number; text: string; amber?: boolean; o: number; scale?: number; frame: number}) => {
	const w = textWidth(text, 17) + 26;
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${scale})`}>
			<rect x={-w / 2} y={-16} width={w} height={32} rx={16} fill={amber ? '#fff6e6' : '#fff'} stroke={amber ? AMBER : TOK.inkMute} strokeWidth={amber ? 2.5 + idlePulse(frame) : 2} />
			<text y={6} textAnchor="middle" fill={amber ? TOK.amberInk : TOK.ink} fontSize={17} fontWeight={800}>{text}</text>
		</g>
	);
};

export const DnaDamageDiagram = ({mode = 'panels', panels = [], outcome, footer, delay = 62}: DnaDamageProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const foot = footer && (
		<text x={W / 2} y={H - 12} textAnchor="middle" fill={footer.amber ? TOK.amberInk : TOK.inkDim} fontSize={19} fontWeight={800} opacity={fadeAt(frame, footer.at)}>{footer.text}</text>
	);

	if (mode === 'outcome' && outcome) {
		const o = outcome;
		const n = o.bases.length;
		const pitch = 44;
		const s = 30;
		const x0 = (W - n * pitch) / 2;
		const dT = ease(frame, o.damageAt, o.damageAt + 24);
		const small = 0.88;
		const lo = Math.max(0, Math.min(n - 6, o.i - 2));
		const win = o.bases.slice(lo, lo + 6);
		const wi = o.i - lo;
		const sx0 = (col: number) => col * (W / 2) + (W / 2 - 6 * pitch) / 2;
		const orig = o.bases[o.i];
		const branch = (col: 0 | 1) => {
			const b = col === 0 ? o.repair : o.copy;
			const cx = col * (W / 2) + W / 4;
			const a = fadeAt(frame, b.at, 14);
			const fixed = col === 0;
			return (
				<g opacity={a}>
					<path d={`M ${W / 2} 196 Q ${cx} 214 ${cx} 246`} fill="none" stroke={TOK.inkMute} strokeWidth={2.5} strokeDasharray="5 6" />
					<text x={cx} y={270} textAnchor="middle" fill={fixed ? GREEN : TOK.amberInk} fontSize={19} fontWeight={800}>{b.title}</text>
					<g transform={`translate(${cx},${350}) scale(${small}) translate(${-cx},${-350})`}>
						<StoneLedge id={`${ID}l${col}`} x={sx0(col) - 14} y={350 + 66} w={6 * pitch + 28} d={16} />
						<Ladder
							frame={frame}
							bases={win}
							x0={sx0(col)}
							y={350}
							pitch={pitch}
							s={s}
							idle={1}
							highlight={fixed ? {i: wi, top: orig, bottom: COMP[orig], ring: false} : {i: wi, top: o.changedTo, bottom: COMP[o.changedTo], ring: true}}
						/>
					</g>
					<Tag x={cx} y={458} text={b.tag} amber={!fixed} o={fadeAt(frame, b.at + 20)} scale={Math.min(1, popAt(frame, fps, b.at + 20))} frame={frame} />
				</g>
			);
		};
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="DNA damage becomes a mutation only if it is copied before repair" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<g opacity={fadeAt(frame, 0)}>
					<StoneLedge id={`${ID}top`} x={x0 - 14} y={96 + 68} w={n * pitch + 28} d={14} />
					<Ladder frame={frame} bases={o.bases} x0={x0} y={96} pitch={pitch} s={s} idle={1} effect={{type: 'damage', i: o.i, at: o.damageAt}} effT={dT} />
					<text x={x0 + n * pitch + 12} y={26} textAnchor="end" fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={fadeAt(frame, o.damageAt + 10)}>
						{o.agentLabel}
					</text>
				</g>
				{branch(0)}
				{branch(1)}
				{foot}
			</svg>
		);
	}

	const np = panels.length;
	const ph = (H - (footer ? 40 : 10)) / np;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="How mutagens damage DNA" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{panels.map((p, i) => {
				const top = i * ph;
				const n = p.bases.length + (p.effect?.type === 'insert' ? p.effect.bases?.length ?? 0 : 0);
				const pitch = Math.min(46, 600 / n);
				const s = Math.min(30, pitch * 0.66);
				const x0 = (W - n * pitch) / 2 + 30;
				const y = top + ph * 0.6;
				const e = p.effect;
				const t = e ? ease(frame, e.at, e.at + 30) : 0;
				const tx = e ? x0 + (e.i + (e.type === 'dimer' ? 1 : 0.5)) * pitch : W / 2;
				const agT = p.agent ? interpolate(frame, [p.agent.at, (e?.at ?? p.agent.at + 30)], [0, 1], clamp) : 0;
				return (
					<g key={i} opacity={fadeAt(frame, p.at, 14)}>
						<text x={24} y={top + 32} fill={theme.accent} fontSize={22} fontWeight={800}>{p.title}</text>
						<StoneLedge id={`${ID}p${i}`} x={x0 - 14} y={y + 60} w={n * pitch + 28} d={14} />
						<Ladder frame={frame} bases={p.bases} x0={x0} y={y} pitch={pitch} s={s} effect={e} effT={t} idle={1} />
						{p.agent && <AgentArt frame={frame} agent={p.agent} tx={tx} ty={y - 36} t={agT} />}
						{p.tag && <Tag x={W - 16 - (textWidth(p.tag.text, 17) + 26) / 2} y={top + 26} text={p.tag.text} amber={p.tag.amber} o={fadeAt(frame, p.tag.at)} scale={Math.min(1, popAt(frame, fps, p.tag.at))} frame={frame} />}
						{p.caption && (
							<text x={W / 2 + 30} y={y + 105} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={700} opacity={fadeAt(frame, p.caption.at)}>{p.caption.text}</text>
						)}
					</g>
				);
			})}
			{foot}
		</svg>
	);
};
