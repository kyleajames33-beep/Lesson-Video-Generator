// QGaugeDiagram (kind: chem12m5QGauge) — "Q heads home to Keq".
//
// Bottom: a Q meter. A track runs from Q = 0 (left end) to Q → ∞ (right end)
// with a fixed amber K notch in the middle; a Q pointer slides along it. The
// pointer position is Q ÷ (Q + K), so Q = K sits exactly on the notch.
//
// Top: a diorama whose particle counts ARE the Q value.
//   mode 'q'   — a plinth of reactant (teal) and product (violet) balls for a
//                generic reactants ⇌ products system, Q = n(products) ÷ n(reactants).
//                When the system shifts, balls change colour one by one (with
//                a little hop) until the ratio reaches K, and the pointer moves
//                with them because it is computed from the same counts.
//   mode 'qsp' — a beaker of dissolved ions (default Ag⁺ and Cl⁻), Qsp = n(cation) × n(anion).
//                Adding ions pushes Qsp up; when Qsp > Ksp, ion pairs lock
//                together and sink as a precipitate until Qsp = Ksp.
//
// Driven by `steps` (frames after `delay`): each step can reset the mixture
// (`set`), drop particles in (`add`), start the shift toward K (`runAt`),
// highlight a term of the fraction, and swap the caption. Everything is
// qualitative: K is an internal ratio and no number is shown.

import type {ReactElement} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AtomDefs, Ball, Beaker, Pill, beatCaption, bounce, clamp, colorOf, ease, hash01, ramp, textW} from './shared';

export type QStep = {
	/** Frame (after delay) this step begins. */
	at: number;
	/** Reset the mixture: [reactants, products] in 'q' mode, [ion pairs] in 'qsp' mode. */
	set?: number[];
	/** Drop extra particles in: [reactants, products] ('q') or [ion pairs] ('qsp'). */
	add?: number[];
	/** Frame (after delay) the system starts shifting toward K. Omit for no shift. */
	runAt?: number;
	/** Frames the shift takes. */
	runLen?: number;
	/** Highlight a term of the Q fraction ('q' mode): the numerator or the denominator. */
	highlight?: 'num' | 'den';
	/** Text on the highlight tag. */
	highlightText?: string;
	caption?: string;
	/** Frame the caption appears (default `at`). */
	captionAt?: number;
	/** Show the caption as an emphasised pill (the trap / the take-home). */
	emph?: boolean;
};

export type QGaugeProps = {
	delay?: number;
	mode?: 'q' | 'qsp';
	/** Internal equilibrium ratio: products ÷ reactants ('q'), or ion pairs at saturation ('qsp'). Not shown. */
	k?: number;
	qLabel?: string;
	kLabel?: string;
	/** Species labels in the legend ('q'). */
	reactantLabel?: string;
	productLabel?: string;
	/** Ions ('qsp'). */
	cation?: {label: string; el: string; ink?: string};
	anion?: {label: string; el: string; ink?: string};
	solid?: string;
	/** Expression shown top-left in 'qsp' mode. */
	expression?: string;
	/** Region labels under the meter: [below K, at K, above K]. */
	regions?: [string, string, string];
	steps?: QStep[];
	/** Frame the Q pointer appears. */
	showQAt?: number;
	/** Frame the "Q heads home" chevrons start flowing along the track toward K. */
	homeAt?: number;
	/** ICE Change-row link ('q'): the sign rows for a shift right / left, revealed at `at`/`leftAt`, emphasised at `emphAt`. */
	change?: {at: number; leftAt?: number; emphAt?: number; right?: string[]; left?: string[]; nReactants?: number};
};

const ID = 'c12m5qg';
const W = 760;
const H = 530;
const PRODUCT = '#8a5cc9';
// Meter geometry
const TX0 = 112, TX1 = 648, TY = 430;
const TMID = (TX0 + TX1) / 2;

type Particle = {slot: number; born: number; drop: boolean; type0: 0 | 1; events: {t: number; to: 0 | 1}[]; epoch: number};

const sortSlots = (slots: {x: number; y: number}[], cx: number, cy: number, rx: number, ry: number, seed: number) =>
	slots
		.map((s, i) => ({...s, key: Math.hypot((s.x - cx) / rx, (s.y - cy) / ry) + hash01(i * 13 + seed) * 0.45}))
		.sort((a, b) => a.key - b.key);

export const QGaugeDiagram = ({
	delay = 62,
	mode = 'q',
	k,
	qLabel,
	kLabel,
	reactantLabel = 'reactants',
	productLabel = 'products',
	cation = {label: 'Ag⁺', el: 'Ag', ink: '#3a3f47'},
	anion = {label: 'Cl⁻', el: 'Cl'},
	solid = 'AgCl(s)',
	expression,
	regions,
	steps = [{at: 0, set: [9, 3], runAt: 60, runLen: 120, caption: 'Q < Keq: the reaction shifts right'}],
	showQAt = 0,
	homeAt,
	change,
}: QGaugeProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const isQsp = mode === 'qsp';
	const K = k ?? (isQsp ? 5 : 2);
	const QL = qLabel ?? (isQsp ? 'Qsp' : 'Q');
	const KL = kLabel ?? (isQsp ? 'Ksp' : 'Keq');
	const REG = regions ?? (isQsp ? ['unsaturated', 'saturated', 'supersaturated'] : [`${QL} < ${KL}`, '', `${QL} > ${KL}`]);
	const colR = theme.accent;
	const colP = PRODUCT;

	// ── Layout ──
	const PC = isQsp ? {x: W / 2, y: 298, rx: 150} : {x: W / 2, y: 208, rx: 212};
	const PRY = PC.rx * 0.34;

	// ── Slots ──
	let slots: {x: number; y: number}[] = [];
	if (!isQsp) {
		const raw: {x: number; y: number}[] = [];
		[-44, -15, 14, 43].forEach((dy, row) => {
			const hw = PC.rx * 0.84 * Math.sqrt(Math.max(0, 1 - (dy / PRY) ** 2));
			const n = Math.floor((2 * hw) / 38) + 1;
			for (let c = 0; c < n; c++) {
				const x = PC.x - hw + (n === 1 ? hw : (2 * hw * c) / (n - 1)) + (row % 2 ? 9 : -9);
				raw.push({x, y: PC.y + dy - 12});
			}
		});
		slots = sortSlots(raw, PC.x, PC.y - 12, PC.rx, PRY, 5);
	}

	// ── Build the particle timeline from the steps ──
	const epochs: number[] = []; // start frame of each epoch
	const parts: Particle[] = [];
	const ordered = [...steps].sort((a, b) => a.at - b.at);
	let epoch = -1;
	let used = 0;
	const typeAt = (p: Particle, t: number) => {
		let ty = p.type0;
		for (const e of p.events) if (e.t <= t) ty = e.to;
		return ty;
	};
	// qsp: precipitation events per pair
	const lockAt = new Map<number, number>();
	const pileIndex = new Map<number, number>();
	let pileCount = 0;
	ordered.forEach((s, si) => {
		if (s.set || epoch < 0) {
			epoch += 1;
			epochs.push(s.at);
			used = 0;
			const set = s.set ?? (isQsp ? [2] : [9, 3]);
			if (isQsp) {
				for (let j = 0; j < set[0]; j++) parts.push({slot: used++, born: s.at + 4 + j * 5, drop: si > 0, type0: 0, events: [], epoch});
			} else {
				const n = set[0] + set[1];
				const idx = Array.from({length: n}, (_, j) => j).sort((a, b) => hash01(a * 7 + si * 31 + 3) - hash01(b * 7 + si * 31 + 3));
				const isB = new Set(idx.slice(0, set[1]));
				for (let j = 0; j < n; j++) parts.push({slot: used++, born: s.at + 4 + j * 1.6, drop: false, type0: isB.has(j) ? 1 : 0, events: [], epoch});
			}
		}
		if (s.add) {
			if (isQsp) {
				for (let j = 0; j < s.add[0]; j++) parts.push({slot: used++, born: s.at + j * 7, drop: true, type0: 0, events: [], epoch});
			} else {
				let j = 0;
				([0, 1] as const).forEach((ty) => {
					for (let q = 0; q < (s.add![ty] ?? 0); q++) parts.push({slot: used++, born: s.at + (j++) * 4, drop: true, type0: ty, events: [], epoch});
				});
			}
		}
		if (s.runAt !== undefined) {
			const len = s.runLen ?? 110;
			const live = parts.filter((p) => p.epoch === epoch && p.born <= s.runAt! + 40);
			if (isQsp) {
				const free = live.filter((p, i) => !lockAt.has(parts.indexOf(p)) && i >= 0);
				const excess = free.length - Math.round(K);
				if (excess > 0) {
					const pick = [...free].sort((a, b) => hash01(parts.indexOf(a) * 5 + 1) - hash01(parts.indexOf(b) * 5 + 1)).slice(0, excess);
					pick.forEach((p, j) => {
						const gi = parts.indexOf(p);
						lockAt.set(gi, s.runAt! + len * Math.pow((j + 0.5) / excess, 1.3));
						pileIndex.set(gi, pileCount++);
					});
				}
			} else {
				const nB = live.filter((p) => typeAt(p, s.runAt!) === 1).length;
				const n = live.length;
				const bE = Math.round((n * K) / (1 + K));
				const d = bE - nB;
				if (d !== 0) {
					const from: 0 | 1 = d > 0 ? 0 : 1;
					const pool = live.filter((p) => typeAt(p, s.runAt!) === from).sort((a, b) => hash01(parts.indexOf(a) * 3 + si * 17) - hash01(parts.indexOf(b) * 3 + si * 17));
					const m = Math.abs(d);
					pool.slice(0, m).forEach((p, j) => p.events.push({t: s.runAt! + len * Math.pow((j + 0.5) / m, 1.35), to: (1 - from) as 0 | 1}));
				}
			}
		}
	});

	const curEpoch = epochs.reduce((acc, e, i) => (frame >= e ? i : acc), 0);
	const CONV = 16;
	const bFrac = (p: Particle, t: number) => {
		let v: number = p.type0;
		for (const e of p.events) {
			const u = ease(interpolate(t, [e.t, e.t + CONV], [0, 1], clamp));
			v = v + (e.to - v) * u;
		}
		return v;
	};
	const presence = (p: Particle) => (p.drop ? ramp(frame, p.born, 16) : ramp(frame, p.born, 10));

	// ── Current Q (continuous, from the same particles that are drawn) ──
	let nA = 0, nB = 0, nIons = 0;
	parts.forEach((p, gi) => {
		if (p.epoch !== curEpoch) return;
		const pr = presence(p);
		if (isQsp) {
			const lk = lockAt.get(gi);
			const gone = lk === undefined ? 0 : ease(interpolate(frame, [lk, lk + 40], [0, 1], clamp));
			nIons += pr * (1 - gone);
		} else {
			const b = bFrac(p, frame);
			nB += pr * b;
			nA += pr * (1 - b);
		}
	});
	const Kq = isQsp ? K * K : K;
	const Q = isQsp ? nIons * nIons : nA < 0.02 ? Infinity : nB / nA;
	const pos = Q === Infinity ? 1 : Q / (Q + Kq);
	const px = TX0 + (TX1 - TX0) * pos;
	const atK = Q !== Infinity && Math.abs(Q / Kq - 1) < 0.04;
	const qText = !isQsp && Q === Infinity ? `${QL} → ∞` : Q < 1e-3 ? `${QL} = 0` : atK ? `${QL} = ${KL}` : QL;

	// Active step (for highlight / shift arrow)
	const active = ordered.reduce<QStep | undefined>((acc, s) => (frame >= s.at ? s : acc), undefined);
	const runStep = ordered.reduce<QStep | undefined>((acc, s) => (s.runAt !== undefined && frame >= s.runAt - 12 ? s : acc), undefined);
	const runLive = !!runStep && !ordered.some((s) => s.at > runStep.at && frame >= s.at && (s.set || s.add || s.runAt !== undefined));
	// Direction of the current run: sign of the change it makes.
	let dir = 0;
	if (runStep && runLive) {
		if (isQsp) dir = -1;
		else {
			const ev = parts.flatMap((p) => p.events).filter((e) => e.t >= runStep.runAt! && e.t <= runStep.runAt! + (runStep.runLen ?? 110) + 1);
			dir = ev.length ? (ev[0].to === 1 ? 1 : -1) : 0;
		}
	}
	const runEnd = runStep ? runStep.runAt! + (runStep.runLen ?? 110) + CONV : 0;
	const arrowIn = runLive && dir !== 0 ? ramp(frame, runStep!.runAt! - 12, 12) * (1 - ramp(frame, runEnd + 20, 20)) : 0;

	const caps = ordered.filter((s) => s.caption).map((s) => ({at: s.captionAt ?? s.at, text: s.caption!}));
	const cap = beatCaption(frame, caps);
	const capStep = ordered.filter((s) => s.caption)[cap.index];

	const qIn = ramp(frame, showQAt, 14);
	const hl = active?.highlight;
	const hlIn = active && hl ? ramp(frame, active.at, 12) : 0;

	// ── Drawing helpers ──
	const drawQParticles = () => {
		const items = parts
			.map((p, gi) => ({p, gi, s: slots[p.slot % slots.length]}))
			.filter(({p}) => p.epoch === curEpoch || (p.epoch === curEpoch - 1 && frame < epochs[curEpoch] + 12));
		items.sort((a, b) => a.s.y - b.s.y);
		return items.map(({p, gi, s}) => {
			const old = p.epoch !== curEpoch;
			const op = old ? 1 - ramp(frame, epochs[curEpoch], 10) : presence(p);
			if (op <= 0) return null;
			const b = bFrac(p, frame);
			let hop = 0;
			for (const e of p.events) if (frame >= e.t && frame < e.t + CONV + 4) hop = Math.sin((Math.PI * (frame - e.t)) / (CONV + 4)) * 16;
			const dropY = p.drop ? (1 - ease(ramp(frame, p.born, 18))) * -110 : 0;
			const pop = !p.drop && !old ? Math.min(1, 0.4 + 0.6 * op) : 1;
			const x = s.x + idleBob(frame, gi * 3 + 1, 1.1);
			const y = s.y - hop + dropY + idleBob(frame, gi * 5 + 2, 1.4);
			return (
				<g key={gi}>
					{b < 0.999 && <Ball id={ID} el="A" x={x} y={y} r={16} opacity={op * (1 - b)} scale={pop} shadow={b < 0.5} />}
					{b > 0.001 && <Ball id={ID} el="B" x={x} y={y} r={16} opacity={op * b} scale={pop} shadow={b >= 0.5} />}
				</g>
			);
		});
	};

	// qsp beaker geometry
	const BK = {cx: PC.x, base: PC.y + 6, w: 256, h: 196, level: 0.82};
	const bx0 = BK.cx - BK.w / 2 + 24, bx1 = BK.cx + BK.w / 2 - 24;
	const by0 = BK.base - BK.h * BK.level + 22, by1 = BK.base - 40;
	const swim = (seed: number) => ({
		x: bounce(bx0 + hash01(seed) * (bx1 - bx0), (0.35 + hash01(seed + 9) * 0.35) * (hash01(seed + 4) > 0.5 ? 1 : -1), frame, bx0, bx1),
		y: bounce(by0 + hash01(seed + 2) * (by1 - by0), (0.25 + hash01(seed + 5) * 0.3) * (hash01(seed + 6) > 0.5 ? 1 : -1), frame, by0, by1),
	});
	const pileSlot = (i: number) => {
		const row = Math.floor(i / 5);
		const c = i % 5;
		return {x: BK.cx - 64 + c * 32 + (row % 2) * 16, y: BK.base - 22 - row * 18};
	};
	const drawIons = () => {
		const out: ReactElement[] = [];
		const items: {key: string; el: string; x: number; y: number; label?: string; ink?: string; op: number; solid: boolean}[] = [];
		parts.forEach((p, gi) => {
			if (p.epoch !== curEpoch) return;
			const pr = presence(p);
			if (pr <= 0) return;
			const lk = lockAt.get(gi);
			[0, 1].forEach((side) => {
				const ion = side === 0 ? cation : anion;
				const sw = swim(gi * 11 + side * 5 + 1);
				let x = sw.x, y = sw.y;
				if (p.drop) y -= (1 - ease(ramp(frame, p.born, 18))) * (y - (BK.base - BK.h - 30));
				if (lk !== undefined && frame >= lk - 30) {
					const meet = {x: swim(gi * 11 + 1).x * 0.5 + swim(gi * 11 + 6).x * 0.5, y: 0};
					const ps = pileSlot(pileIndex.get(gi) ?? 0);
					const u = ease(interpolate(frame, [lk - 30, lk], [0, 1], clamp));
					const v = ease(interpolate(frame, [lk, lk + 40], [0, 1], clamp));
					const lx = side === 0 ? -10 : 10;
					const mx = meet.x + lx;
					const my = (swim(gi * 11 + 1).y + swim(gi * 11 + 6).y) / 2;
					// glide to meet, then sink to the pile
					const gx = x + (mx - x) * u;
					const gy = y + (my - y) * u;
					x = gx + (ps.x + lx - gx) * v;
					y = gy + (ps.y - gy) * v;
				}
				const solid = lk !== undefined && frame >= lk + 10;
				items.push({key: `${gi}-${side}`, el: ion.el, x, y, label: solid ? undefined : side === 0 ? '+' : '−', ink: ion.ink, op: pr, solid});
			});
		});
		items.sort((a, b) => a.y - b.y).forEach((it) => {
			out.push(<Ball key={it.key} id={ID} el={it.el} x={it.x} y={it.y} r={it.solid ? 12 : 14} label={it.label} labelSize={18} labelColor={it.ink ?? '#ffffff'} opacity={it.op} />);
		});
		return out;
	};
	const pileN = [...lockAt.values()].filter((t) => frame >= t + 20).length;
	const pileIn = pileN > 0 ? ramp(frame, Math.min(...lockAt.values()) + 20, 16) : 0;

	// ── Fraction (q) or expression (qsp), top-left ──
	const FX = 196;
	const numW = textW(`[${productLabel}]`, 24);
	const denW = textW(`[${reactantLabel}]`, 24);
	const fracW = Math.max(numW, denW) + 12;
	const hlBox = (y: number, w: number) => (
		<rect x={FX - w / 2 - 8} y={y - 23} width={w + 16} height={32} rx={9} fill={theme.soft} stroke={theme.accent} strokeWidth={2 + idlePulse(frame) * 1.2} opacity={hlIn} />
	);

	// ── Change-row link (q) ──
	const chg = change;
	const rightSigns = chg?.right ?? ['−', '−', '+'];
	const leftSigns = chg?.left ?? ['+', '+', '−'];
	const nR = chg?.nReactants ?? 2;
	const chgRow = (x: number, y: number, head: string, signs: string[], on: boolean, op: number) => {
		const w = 344;
		return (
			<g opacity={op}>
				<rect x={x - w / 2} y={y - 21} width={w} height={40} rx={12} fill="#ffffff" stroke={on ? theme.accent : TOK.rule} strokeWidth={on ? 3 : 2} />
				<text x={x - w / 2 + 14} y={y + 6} fill={TOK.inkDim} fontSize={17} fontWeight={800}>{head}</text>
				{signs.map((sg, i) => (
					<text key={i} x={x + 88 + i * 30} y={y + 8} textAnchor="middle" fill={i < nR ? colR : colP} fontSize={24} fontWeight={800}>{sg}</text>
				))}
			</g>
		);
	};
	const chgEmph = chg?.emphAt !== undefined && frame >= chg.emphAt ? 0.5 + 0.5 * idlePulse(frame) : 0;

	// Home chevrons flowing toward K along the track
	const homeIn = homeAt !== undefined ? ramp(frame, homeAt, 16) : 0;

	const ariaQ = isQsp
		? `${QL} compared with ${KL}: below ${KL} the solution is unsaturated, at ${KL} saturated, above ${KL} a precipitate forms until ${QL} falls back to ${KL}`
		: `${QL} compared with ${KL}: the reaction shifts right when ${QL} < ${KL}, left when ${QL} > ${KL}, and always moves ${QL} toward ${KL}`;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={ariaQ} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={isQsp ? [cation.el, anion.el] : ['A', 'B']} />

			{/* Expression */}
			<g opacity={ramp(frame, 0)}>
				{isQsp ? (
					<text x={30} y={44} fill={TOK.ink} fontSize={28} fontWeight={800}>{expression ?? `${QL} = [${cation.label}][${anion.label}]`}</text>
				) : (
					<g>
						<text x={FX - fracW / 2 - 14} y={60} textAnchor="end" fill={TOK.ink} fontSize={28} fontWeight={800}>{QL} =</text>
						{hl === 'num' && hlBox(38, numW)}
						{hl === 'den' && hlBox(76, denW)}
						<text x={FX} y={38} textAnchor="middle" fill={colP} fontSize={24} fontWeight={800}>[{productLabel}]</text>
						<line x1={FX - fracW / 2} y1={50} x2={FX + fracW / 2} y2={50} stroke={TOK.ink} strokeWidth={3} strokeLinecap="round" />
						<text x={FX} y={76} textAnchor="middle" fill={colR} fontSize={24} fontWeight={800}>[{reactantLabel}]</text>
						{hl && active?.highlightText && (
							<text x={FX + fracW / 2 + 22} y={hl === 'num' ? 38 : 76} fill={theme.accent} fontSize={19} fontWeight={800} opacity={hlIn}>
								{active.highlightText}
							</text>
						)}
					</g>
				)}
			</g>

			{/* Legend, top-right */}
			<g opacity={ramp(frame, 4)}>
				{(isQsp
					? [{el: cation.el, t: cation.label, lab: '+', ink: cation.ink}, {el: anion.el, t: anion.label, lab: '−', ink: anion.ink}]
					: [{el: 'B', t: productLabel, lab: '', ink: undefined}, {el: 'A', t: reactantLabel, lab: '', ink: undefined}]
				).map((it, i) => (
					<g key={i}>
						<Ball id={ID} el={it.el} x={isQsp ? 600 + i * 90 : 590} y={isQsp ? 36 : 32 + i * 36} r={12} label={it.lab || undefined} labelSize={17} labelColor={it.ink ?? '#ffffff'} />
						<text x={(isQsp ? 600 + i * 90 : 590) + 20} y={(isQsp ? 36 : 32 + i * 36) + 6} fill={TOK.ink} fontSize={18} fontWeight={800}>{it.t}</text>
					</g>
				))}
			</g>

			{/* Diorama */}
			<g opacity={ramp(frame, 2)}>
				<DioramaPlinth id={ID} cx={PC.x} cy={PC.y} rx={PC.rx}>
					{isQsp ? (
						<Beaker cx={BK.cx} baseY={BK.base} w={BK.w} h={BK.h} level={BK.level}>
							<ellipse cx={BK.cx} cy={BK.base - 14} rx={100 * pileIn} ry={14 * pileIn} fill="#ffffff" opacity={0.95} />
							{drawIons()}
						</Beaker>
					) : (
						drawQParticles()
					)}
				</DioramaPlinth>
			</g>

			{/* Precipitate tag (qsp) */}
			{isQsp && (
				<g opacity={pileIn}>
					<line x1={BK.cx + 70} y1={BK.base - 22} x2={BK.cx + 190} y2={BK.base - 50} stroke={TOK.inkMute} strokeWidth={2} />
					<Pill x={BK.cx + 240} y={BK.base - 52} text={solid} color={TOK.inkDim} ink={TOK.ink} size={18} />
				</g>
			)}

			{/* Shift arrow */}
			{!isQsp && arrowIn > 0 && (() => {
				const y = isQsp ? 108 : 118;
				const label = isQsp ? 'precipitate forms: ions drop out' : dir > 0 ? `shifts right: makes ${productLabel}` : `shifts left: makes ${reactantLabel}`;
				const tw = textW(label, 19);
				const ax = W / 2 + (isQsp ? 0 : 0);
				if (isQsp) {
					return (
						<g opacity={arrowIn}>
							<text x={ax} y={y} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>{label}</text>
						</g>
					);
				}
				const x0 = ax - tw / 2 - 70, x1 = ax + tw / 2 + 70;
				const flow = ((frame * 1.2) % 30) / 30;
				return (
					<g opacity={arrowIn}>
						<text x={ax} y={y - 14} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>{label}</text>
						<line x1={x0} y1={y} x2={x1} y2={y} stroke={dir > 0 ? colP : colR} strokeWidth={7} strokeLinecap="round" />
						{dir > 0 ? (
							<path d={`M ${x1 + 8} ${y} L ${x1 - 14} ${y - 14} L ${x1 - 14} ${y + 14} Z`} fill={colP} />
						) : (
							<path d={`M ${x0 - 8} ${y} L ${x0 + 14} ${y - 14} L ${x0 + 14} ${y + 14} Z`} fill={colR} />
						)}
						{[0, 1, 2, 3].map((i) => {
							const u = (i / 4 + flow * (dir > 0 ? 1 : -1) + 1) % 1;
							return <circle key={i} cx={x0 + 20 + u * (x1 - x0 - 40)} cy={y} r={3.5} fill="#ffffff" opacity={0.9} />;
						})}
					</g>
				);
			})()}

			{/* Caption */}
			{capStep?.emph ? (
				<g opacity={cap.opacity}>
					<Pill x={W / 2} y={isQsp ? 84 : 350} text={cap.text} color={TOK.amber} ink={TOK.ink} size={19} strokeWidth={2.5 + idlePulse(frame) * 1.2} />
				</g>
			) : (
				<text x={W / 2} y={isQsp ? 92 : 358} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={700} opacity={cap.opacity}>
					{cap.text}
				</text>
			)}

			{/* Q meter */}
			<g opacity={ramp(frame, 6, 14)}>
				<rect x={TX0} y={TY - 7} width={TX1 - TX0} height={14} rx={7} fill="rgba(0,0,0,0.07)" />
				<rect x={TX0} y={TY - 7} width={(TX1 - TX0) / 2} height={14} rx={7} fill={isQsp ? 'rgba(0,0,0,0)' : colR} opacity={0.14} />
				<rect x={TMID} y={TY - 7} width={(TX1 - TX0) / 2} height={14} rx={7} fill={isQsp ? '#c0503a' : colP} opacity={isQsp ? 0.12 : 0.14} />
				<text x={TX0 - 14} y={TY + 7} textAnchor="end" fill={TOK.inkDim} fontSize={20} fontWeight={800}>0</text>
				<text x={TX1 + 14} y={TY + 8} fill={TOK.inkDim} fontSize={24} fontWeight={800}>∞</text>
				{/* home chevrons */}
				{homeIn > 0 &&
					[0, 1, 2].flatMap((i) =>
						[-1, 1].map((sd) => {
							const u = ((frame / 70 + i / 3) % 1);
							const x = sd < 0 ? TX0 + 14 + u * (TMID - TX0 - 34) : TX1 - 14 - u * (TX1 - TMID - 34);
							const o = homeIn * Math.sin(Math.PI * u);
							return <path key={`${i}${sd}`} d={sd < 0 ? `M ${x - 5} ${TY - 5} L ${x + 3} ${TY} L ${x - 5} ${TY + 5}` : `M ${x + 5} ${TY - 5} L ${x - 3} ${TY} L ${x + 5} ${TY + 5}`} stroke={TOK.ink} strokeWidth={2.5} fill="none" opacity={o * 0.7} strokeLinecap="round" strokeLinejoin="round" />;
						}),
					)}
				{/* K notch */}
				<line x1={TMID} y1={TY - 17} x2={TMID} y2={TY + 17} stroke={TOK.amber} strokeWidth={5 + (atK ? idlePulse(frame) * 2 : 0)} strokeLinecap="round" />
				<text x={TMID} y={TY + 38} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800}>{KL}</text>
				{/* regions */}
				<text x={(TX0 + TMID) / 2} y={TY + 38} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>{REG[0]}</text>
				<text x={(TMID + TX1) / 2} y={TY + 38} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>{REG[2]}</text>
				{REG[1] && <text x={TMID} y={TY + 60} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>{REG[1]}</text>}
			</g>
			{/* Q pointer */}
			<g opacity={qIn}>
				<path d={`M ${px} ${TY - 8} L ${px - 9} ${TY - 22} L ${px + 9} ${TY - 22} Z`} fill={atK ? TOK.amber : TOK.ink} />
				<Pill x={Math.max(TX0 - 20, Math.min(TX1 + 20, px))} y={TY - 38} text={qText} color={atK ? TOK.amber : TOK.ink} ink={atK ? TOK.amberInk : TOK.ink} size={18} padX={10} />
			</g>

			{/* Change-row link */}
			{chg && (
				<g>
					{chgRow(198, 506, 'shifts right → Change:', rightSigns, dir > 0 || chgEmph > 0, ramp(frame, chg.at, 14))}
					{chgRow(562, 506, 'shifts left → Change:', leftSigns, dir < 0 || chgEmph > 0, ramp(frame, chg.leftAt ?? chg.at, 14))}
				</g>
			)}
		</svg>
	);
};
