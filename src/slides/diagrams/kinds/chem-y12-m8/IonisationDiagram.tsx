// IonisationDiagram — weak-acid ionisation as a live population (Chem Y12 M8).
//
// A weak acid HA ⇌ H⁺ + A⁻ is drawn as glossy molecules: HA is a teal ball
// carrying a small white H, A⁻ a violet ball. Populations on the stone plinths
// are COMPUTED from Henderson–Hasselbalch: fraction ionised
// = 1 / (1 + 10^(pKa − pH)), times the population, rounded to whole molecules.
// When pH changes, the molecules that flip shed (or regain) their H as H⁺.
//
// Modes:
//   forms   — HA crosses a lipid membrane; A⁻ bounces off it (L12 concept-forms)
//   hh      — pH marker sweeps pKa − 2 … pKa + 2; population + [A⁻]:[HA] readout
//             follow HH (L12 concept-hh)
//   compare — aspirin (pKa 3.5) in the stomach vs the small intestine
//             (L12 concept-aspirin)
//   salts   — free acid vs sodium salt solubility to scale; Ka / pKa move
//             oppositely (L12 concept-salts)
//   hocl    — chlorination: HOCl ⇌ H⁺ + OCl⁻ at lower vs higher pH, no pH
//             numbers printed (L10 concept-chlorination)
//
// Beats are frames after `delay`, placed where the voiceover says the words
// (see `beatForWord` in ./shared).

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, Molecule, idleBob, idlePulse} from '../../diorama';
import {Arrow, Beaker, GlossDefs, Pill, ease, ramp, shade} from './shared';
import {ACID_GLOSS, A_COLOR, AcidParticle, Bilayer, HA_COLOR, flipRanks, flipState, fracIonised, popSlots, tri} from './drug-parts';

type Mode = 'forms' | 'hh' | 'compare' | 'salts' | 'hocl';

export type IonisationProps = {
	delay?: number;
	mode?: Mode;
	/** Frames after `delay`; meaning depends on mode (see defaults below). */
	beats?: number[];
	/** compare: the drug's pKa and the pH (range) of each site. The population is
	 * computed at `stomachPH` / `intestinePH` (the range ends nearest the pKa). */
	pKa?: number;
	stomachRange?: [number, number];
	intestineRange?: [number, number];
	stomachPH?: number;
	intestinePH?: number;
	/** hocl: HOCl pKa and the two pH values used internally (never printed). */
	hoclPKa?: number;
	lowerPH?: number;
	higherPH?: number;
	/** salts: solubilities in g/L (drawn to scale) and the stated fold jump. */
	acidSolubility?: number;
	saltSolubility?: number;
	foldLabel?: string;
};

const W = 760;
const H = 530;
const INK_HA = shade(HA_COLOR, -0.12);
const INK_A = shade(A_COLOR, -0.08);

const DEFAULT_BEATS: Record<Mode, number[]> = {
	// equation, polarity tags, HA crosses, A⁻ blocked, summary
	forms: [205, 454, 496, 593, 725],
	// below, above, equal, direction (reset), sweep up
	hh: [331, 431, 532, 653, 727],
	// stomach, HA crosses tag, intestine, A⁻ tag, key principle
	compare: [119, 304, 408, 609, 765],
	// free acid bar, salt bar, 160-fold, salt forms note, Ka/pKa panel, Ka rises, opposite, lowest pKa
	salts: [26, 111, 181, 329, 555, 586, 702, 790],
	// eq1, eq2 + lower-pH plinth, HOCl tag, higher-pH plinth, pH rises (flip), verdicts
	hocl: [216, 334, 444, 547, 602, 752],
};

const minus = (o: number) => (o < 0 ? `pKa − ${-o}` : o > 0 ? `pKa + ${o}` : 'pKa');

// ─────────────────────────────────────────────────────────────── population
const ROWS = [5, 6, 6, 5];

const Population = ({
	id, cx, cy, dx, dy, r, nA, seed, frame, enter, labels = true,
}: {id: string; cx: number; cy: number; dx: number; dy: number; r: number; nA: number; seed: number; frame: number; enter: number; labels?: boolean}) => {
	const slots = popSlots(cx, cy, ROWS, dx, dy);
	const ranks = flipRanks(slots.length, seed);
	return (
		<g>
			{slots.map((s, i) => {
				const sc = 0.8 + 0.2 * Math.min(1, enter);
				return (
					<AcidParticle
						key={i}
						id={id}
						x={s.x + idleBob(frame, i + seed * 7, 1.4)}
						y={s.y - r * 0.75 + idleBob(frame + 40, i + seed * 3, 1.2)}
						r={r}
						s={flipState(nA, ranks[i])}
						scale={sc}
						opacity={Math.min(1, enter * 1.4)}
						labels={labels}
					/>
				);
			})}
		</g>
	);
};

// ─────────────────────────────────────────────────────────────── forms
const FormsMode = ({frame, beats, id}: {frame: number; beats: number[]; id: string}) => {
	const [tEq, tTags, tCross, tBlock, tSum] = beats;
	const PCX = 380, PCY = 368;
	const BW = 500, BH = 236;
	const x0 = PCX - BW / 2 + 22; // left wall (ball centre limit adds r)
	const memL = 358, memR = 402;
	const x1 = PCX + BW / 2 - 22;
	const r = 21;
	const yTop = PCY - BH * 0.86 + 22, yBot = PCY - 24;

	// Six horizontal lanes: A⁻ on lanes 0, 2, 4 and HA on 1, 3, 5, so molecules of
	// one kind never overlap (lane spacing > one diameter once the HA have crossed).
	const lane = (i: number) => yTop + (i * (yBot - yTop)) / 5;
	const fx = (k: number, t: number, salt: number) => tri(hash(k, salt) * 2 + t * (0.0058 + hash(k, salt + 1) * 0.0022));
	const wob = (k: number, t: number) => Math.sin(t / 23 + k * 2.1) * 3;
	// A⁻ roam the whole left compartment, so they keep hitting the membrane.
	const aPos = (k: number, t: number) => ({x: x0 + r + fx(k, t, 11) * (memL - r - (x0 + r)), y: lane(k * 2) + wob(k, t)});
	// HA roam the left (kept clear of the membrane) until they cross.
	const haLeft = (k: number, t: number) => ({x: x0 + r + fx(k, t, 17) * (300 - (x0 + r)), y: lane(k * 2 + 1) + wob(k + 3, t)});
	const haRight = (k: number, t: number) => ({x: memR + r + 6 + fx(k, t, 23) * (x1 - r - (memR + r + 6)), y: lane(k * 2 + 1) + wob(k + 6, t)});
	const NHA = 3, NA = 3;
	const crossLen = 56;
	const haPos = (k: number) => {
		const T = tCross + k * 45;
		if (frame < T) return haLeft(k, frame);
		const p0 = haLeft(k, T);
		const p2 = haRight(k, T + crossLen);
		const u = (frame - T) / crossLen;
		if (u >= 1) return haRight(k, frame);
		const mid = {x: (memL + memR) / 2, y: p0.y * 0.5 + p2.y * 0.5};
		const e = ease(u);
		if (e < 0.5) {
			const v = e / 0.5;
			return {x: p0.x + (mid.x - p0.x) * v, y: p0.y + (mid.y - p0.y) * v};
		}
		const v = (e - 0.5) / 0.5;
		return {x: mid.x + (p2.x - mid.x) * v, y: mid.y + (p2.y - mid.y) * v};
	};

	const enter = ramp(frame, 0, 18);
	const eqIn = ramp(frame, tEq, 16);
	const tagsIn = ramp(frame, tTags, 16);
	const caption =
		frame >= tSum ? null
		: frame >= tBlock ? {t: 'A⁻: more polar → dissolves in water, poor at crossing', c: INK_A}
		: frame >= tCross ? {t: 'HA: less polar → crosses the lipid membrane', c: INK_HA}
		: null;
	const capStart = frame >= tBlock ? tBlock : tCross;

	// A⁻ touching the membrane after the "blocked" beat: a small bump ring.
	const bumps = Array.from({length: NA}, (_, k) => {
		const p = aPos(k, frame);
		const near = Math.max(0, (p.x - (memL - r - 10)) / 10);
		return {y: p.y, o: frame >= tBlock ? Math.min(1, near) : 0};
	});

	return (
		<g>
			{/* Equation and the two forms' properties */}
			<g opacity={eqIn}>
				<text x={W / 2} y={46} textAnchor="middle" fill={TOK.ink} fontSize={32} fontWeight={800}>
					<tspan fill={INK_HA}>HA</tspan> ⇌ H⁺ + <tspan fill={INK_A}>A⁻</tspan>
				</text>
			</g>
			<g opacity={tagsIn}>
				<text x={220} y={86} textAnchor="middle" fill={INK_HA} fontSize={18} fontWeight={800}>unionised, less polar</text>
				<text x={540} y={86} textAnchor="middle" fill={INK_A} fontSize={18} fontWeight={800}>ionised, more polar</text>
			</g>
			<g opacity={enter}>
				<text x={250} y={120} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>water</text>
				<Pill x={W / 2} y={114} text="lipid membrane" color="#b7892e" textColor="#8a6414" size={17} />
			</g>

			<DioramaPlinth id={id} cx={PCX} cy={PCY} rx={280}>
				<g opacity={enter}>
					<Beaker cx={PCX} baseY={PCY} w={BW} h={BH} level={0.86} liquid="rgba(120,190,235,0.26)">
						<rect x={memL} y={PCY - BH * 0.86 - 4} width={memR - memL} height={BH * 0.86 - 6} fill="rgba(240,214,150,0.35)" />
						<Bilayer c={(memL + memR) / 2} a0={PCY - BH * 0.86 + 4} a1={PCY - 14} thick={memR - memL} />
						{bumps.map((b, k) => (
							<circle key={k} cx={memL - 2} cy={b.y} r={10 + 8 * b.o} fill="none" stroke={INK_A} strokeWidth={2.5} opacity={b.o * 0.8} />
						))}
						{[
							...Array.from({length: NA}, (_, k) => ({key: `a${k}`, s: 1, ...aPos(k, frame)})),
							...Array.from({length: NHA}, (_, k) => ({key: `h${k}`, s: 0, ...haPos(k)})),
						]
							.sort((p, q) => p.y - q.y)
							.map((p) => (
								<AcidParticle key={p.key} id={id} x={p.x} y={p.y} r={r} s={p.s} />
							))}
					</Beaker>
				</g>
			</DioramaPlinth>

			{caption && (
				<Pill x={W / 2} y={496} text={caption.t} color={caption.c} size={19} opacity={ramp(frame, capStart, 14)} />
			)}
			{frame >= tSum && (
				<g opacity={ramp(frame, tSum, 16)}>
					<Pill x={W / 2} y={496} text="Ionisation controls solubility and membrane crossing" color={TOK.amber} textColor={TOK.amberInk} size={19} strokeWidth={2 + idlePulse(frame) * 1.5} />
				</g>
			)}
		</g>
	);
};

const hash = (k: number, salt: number) => {
	const s = Math.sin((k + 1) * 127.1 + salt * 311.7) * 43758.5453;
	return s - Math.floor(s);
};

// ─────────────────────────────────────────────────────────────── hh
const HHMode = ({frame, beats, id}: {frame: number; beats: number[]; id: string}) => {
	const [tBelow, tAbove, tEqual, tDir, tSweep] = beats;
	// pH − pKa over time: piecewise eased moves.
	const moves: [number, number, number, number][] = [
		[tBelow, tBelow + 50, -2, -1],
		[tAbove, tAbove + 60, -1, 1],
		[tEqual, tEqual + 40, 1, 0],
		[tDir, tDir + 24, 0, -2],
		[tSweep, tSweep + 60, -2, 2],
	];
	let off = -2;
	for (const [a, b, from, to] of moves) {
		if (frame >= a) off = from + (to - from) * ease((frame - a) / (b - a));
	}
	const N = ROWS.reduce((s, n) => s + n, 0);
	const nA = N * fracIonised(off, 0);
	const nAint = Math.round(nA);
	const ratio = Math.pow(10, off);
	const fmt = (v: number) => (v >= 9.95 ? String(Math.round(v)) : String(Math.round(v * 10) / 10));
	const ratioText = off >= 0 ? `${fmt(ratio)} : 1` : `1 : ${fmt(1 / ratio)}`;

	const AX0 = 80, AX1 = 680, AY = 126;
	const X = (o: number) => 380 + o * 135;
	const enter = ramp(frame, 0, 18);
	const knobX = X(off);

	const dirPhase = frame >= tSweep;
	const status = dirPhase
		? {t: 'Higher pH → more deprotonation → more A⁻', c: TOK.amberInk}
		: off < -0.05
			? {t: 'pH below pKa: HA favoured', c: INK_HA}
			: off > 0.05
				? {t: 'pH above pKa: A⁻ favoured', c: INK_A}
				: {t: 'pH = pKa: equal amounts, 1 : 1', c: TOK.ink};
	const statusIn = frame < tBelow ? 0 : 1;

	return (
		<g>
			<text x={W / 2} y={42} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800} opacity={enter}>
				pH = pKa + log([<tspan fill={INK_A}>A⁻</tspan>] / [<tspan fill={INK_HA}>HA</tspan>])
			</text>

			{/* pH axis relative to pKa */}
			<g opacity={enter}>
				<line x1={AX0} y1={AY} x2={380} y2={AY} stroke={HA_COLOR} strokeWidth={7} strokeLinecap="round" opacity={0.55} />
				<line x1={380} y1={AY} x2={AX1} y2={AY} stroke={A_COLOR} strokeWidth={7} strokeLinecap="round" opacity={0.55} />
				{[-2, -1, 0, 1, 2].map((o) => (
					<g key={o}>
						<line x1={X(o)} y1={AY - 10} x2={X(o)} y2={AY + 10} stroke={TOK.ink} strokeWidth={o === 0 ? 3 : 2} />
						<text x={X(o)} y={AY + 34} textAnchor="middle" fill={o === 0 ? TOK.ink : TOK.inkDim} fontSize={18} fontWeight={o === 0 ? 800 : 700}>
							{minus(o)}
						</text>
					</g>
				))}
				{/* knob */}
				<text x={knobX} y={AY - 22} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>pH</text>
				<circle cx={knobX} cy={AY} r={13} fill={`url(#${id}-g-knob)`} stroke="#3a3a3a" strokeWidth={1.5} />
			</g>
			{dirPhase && (
				<Arrow x1={X(-2)} y1={AY - 50} x2={X(2)} y2={AY - 50} color={TOK.amber} width={4} head={14} progress={ramp(frame, tSweep, 60)} opacity={0.9} />
			)}

			<g opacity={statusIn}>
				<text x={W / 2} y={200} textAnchor="middle" fill={status.c} fontSize={22} fontWeight={800}>{status.t}</text>
			</g>

			<DioramaPlinth id={id} cx={280} cy={384} rx={205}>
				<Population id={id} cx={280} cy={384} dx={60} dy={28} r={19} nA={nA} seed={3} frame={frame} enter={enter} />
			</DioramaPlinth>

			{/* readout */}
			<g opacity={enter}>
				<text x={632} y={272} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={800}>
					[<tspan fill={INK_A}>A⁻</tspan>] : [<tspan fill={INK_HA}>HA</tspan>]
				</text>
				<text x={632} y={326} textAnchor="middle" fill={TOK.ink} fontSize={44} fontWeight={800}>{ratioText}</text>
				<AcidParticle id={id} x={578} y={372} r={17} s={0} />
				<text x={606} y={380} fill={INK_HA} fontSize={21} fontWeight={800}>HA × {N - nAint}</text>
				<AcidParticle id={id} x={578} y={420} r={17} s={1} />
				<text x={606} y={428} fill={INK_A} fontSize={21} fontWeight={800}>A⁻ × {nAint}</text>
				<text x={632} y={466} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>of {N} molecules</text>
			</g>
		</g>
	);
};

// ─────────────────────────────────────────────────────────────── compare
const CompareMode = ({
	frame, beats, id, pKa, stomachRange, intestineRange, stomachPH, intestinePH,
}: {frame: number; beats: number[]; id: string; pKa: number; stomachRange: [number, number]; intestineRange: [number, number]; stomachPH: number; intestinePH: number}) => {
	const [tStom, tStomTag, tInt, tIntTag, tKey] = beats;
	const N = ROWS.reduce((s, n) => s + n, 0);
	const X = (p: number) => 60 + p * 80;
	const SY = 78;
	const enter = ramp(frame, 0, 18);
	const nStom = N * fracIonised(stomachPH, pKa);
	const nInt = N * fracIonised(intestinePH, pKa);
	// Intestine molecules arrive as HA, then flip to the computed split.
	const flip = ease(ramp(frame, tInt + 26, 70));
	const nIntLive = nInt * flip;
	const pulse = frame >= tKey ? idlePulse(frame) : 0;
	const range = (r: [number, number]) => `pH ${r[0]} to ${r[1]}`;

	return (
		<g>
			{/* pH strip */}
			<g opacity={enter}>
				<rect x={X(stomachRange[0])} y={SY - 13} width={X(stomachRange[1]) - X(stomachRange[0])} height={26} rx={6} fill={HA_COLOR} opacity={0.28 * ramp(frame, tStom, 14) + 0.08} />
				<rect x={X(intestineRange[0])} y={SY - 13} width={X(intestineRange[1]) - X(intestineRange[0])} height={26} rx={6} fill={A_COLOR} opacity={0.28 * ramp(frame, tInt, 14) + 0.08} />
				<line x1={X(0)} y1={SY} x2={X(8)} y2={SY} stroke={TOK.inkDim} strokeWidth={3} />
				{Array.from({length: 9}, (_, p) => (
					<g key={p}>
						<line x1={X(p)} y1={SY - 6} x2={X(p)} y2={SY + 6} stroke={TOK.inkDim} strokeWidth={2} />
						<text x={X(p)} y={SY + 30} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>{p}</text>
					</g>
				))}
				<text x={X(0) - 14} y={SY + 6} textAnchor="end" fill={TOK.ink} fontSize={18} fontWeight={800}>pH</text>
				<text x={(X(stomachRange[0]) + X(stomachRange[1])) / 2} y={SY - 24} textAnchor="middle" fill={INK_HA} fontSize={18} fontWeight={800} opacity={ramp(frame, tStom, 14)}>stomach</text>
				<text x={(X(intestineRange[0]) + X(intestineRange[1])) / 2} y={SY - 24} textAnchor="middle" fill={INK_A} fontSize={18} fontWeight={800} opacity={ramp(frame, tInt, 14)}>small intestine</text>
				<line x1={X(pKa)} y1={SY - 18} x2={X(pKa)} y2={SY + 18} stroke={TOK.amber} strokeWidth={4 + pulse * 2} strokeLinecap="round" />
				<text x={X(pKa)} y={SY - 24} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800}>pKa {pKa}</text>
			</g>

			{/* Stomach */}
			<g opacity={ramp(frame, tStom, 14)}>
				<text x={195} y={166} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>Stomach, {range(stomachRange)}</text>
				<text x={195} y={192} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>pH below pKa</text>
			</g>
			<DioramaPlinth id={`${id}s`} cx={195} cy={334} rx={165}>
				<Population id={id} cx={195} cy={334} dx={52} dy={24} r={17} nA={nStom} seed={5} frame={frame} enter={ramp(frame, tStom, 16)} />
			</DioramaPlinth>
			<g opacity={ramp(frame, tStom + 20, 14)}>
				<text x={195} y={458} textAnchor="middle" fill={INK_HA} fontSize={22} fontWeight={800}>Mostly HA, unionised</text>
			</g>
			<g opacity={ramp(frame, tStomTag, 14)}>
				<text x={195} y={484} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>crosses lipid membranes</text>
				<text x={195} y={506} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>more easily</text>
			</g>

			{/* Small intestine */}
			<g opacity={ramp(frame, tInt, 14)}>
				<text x={565} y={166} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>Small intestine, {range(intestineRange)}</text>
				<text x={565} y={192} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>pH above pKa</text>
			</g>
			<DioramaPlinth id={`${id}i`} cx={565} cy={334} rx={165}>
				<Population id={id} cx={565} cy={334} dx={52} dy={24} r={17} nA={nIntLive} seed={9} frame={frame} enter={ramp(frame, tInt, 16)} />
			</DioramaPlinth>
			<g opacity={ramp(frame, tInt + 90, 14)}>
				<text x={565} y={458} textAnchor="middle" fill={INK_A} fontSize={22} fontWeight={800}>Mostly A⁻, ionised</text>
			</g>
			<g opacity={ramp(frame, tIntTag, 14)}>
				<text x={565} y={484} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>more water-soluble,</text>
				<text x={565} y={506} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>less membrane-permeable</text>
			</g>
		</g>
	);
};

// ─────────────────────────────────────────────────────────────── salts
const SaltsMode = ({
	frame, beats, id, acidSolubility, saltSolubility, foldLabel,
}: {frame: number; beats: number[]; id: string; acidSolubility: number; saltSolubility: number; foldLabel: string}) => {
	const [tAcid, tSalt, tFold, tNote, tPanel, tRise, tOpp, tLowest] = beats;
	const PCY = 424;
	const scale = 240 / saltSolubility; // px per g/L
	const hAcid = Math.max(2, acidSolubility * scale) * ease(ramp(frame, tAcid, 24));
	const hSalt = saltSolubility * scale * ease(ramp(frame, tSalt, 40));
	const AX = 118, SX = 272, BWd = 74;
	const enter = ramp(frame, 0, 18);

	// Right panel: Ka axis (up = larger) and pKa axis (down = larger).
	const KX = 520, PX = 630, TOPY = 146, BOTY = 380;
	const rise = ease(ramp(frame, tRise, 80));
	const sway = frame >= tOpp ? Math.sin(((frame - tOpp) / 70) * Math.PI) * 0.35 * Math.min(1, (frame - tOpp) / 30) : 0;
	const lvl = Math.max(0, Math.min(1, 0.15 + 0.75 * rise - (frame >= tOpp ? Math.abs(sway) : 0)));
	const SYl = BOTY - 20 - lvl * (BOTY - TOPY - 40);
	const panelIn = ramp(frame, tPanel, 16);

	return (
		<g>
			{/* Left: solubility to scale */}
			<g opacity={enter}>
				<text x={195} y={40} textAnchor="middle" fill={TOK.ink} fontSize={23} fontWeight={800}>Aspirin in water</text>
			</g>
			<g opacity={ramp(frame, tNote, 16)}>
				<text x={195} y={70} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>Salt forms (e.g. morphine sulfate):</text>
				<text x={195} y={92} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>fix solubility, not membrane crossing</text>
			</g>
			<DioramaPlinth id={id} cx={195} cy={PCY} rx={160}>
				<g opacity={enter}>
					{/* baseline scale tick for 500 g/L */}
					<line x1={AX - BWd / 2 - 8} y1={PCY - saltSolubility * scale} x2={SX + BWd / 2 + 14} y2={PCY - saltSolubility * scale} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="5 6" opacity={ramp(frame, tSalt + 30, 14)} />
					<rect x={AX - BWd / 2} y={PCY - hAcid} width={BWd} height={hAcid} fill={HA_COLOR} stroke={shade(HA_COLOR, -0.3)} strokeWidth={1} />
					<ellipse cx={AX} cy={PCY - hAcid} rx={BWd / 2} ry={7} fill={shade(HA_COLOR, 0.15)} stroke={shade(HA_COLOR, -0.3)} strokeWidth={1} opacity={ramp(frame, tAcid, 10)} />
					<rect x={SX - BWd / 2} y={PCY - hSalt} width={BWd} height={hSalt} fill={A_COLOR} stroke={shade(A_COLOR, -0.3)} strokeWidth={1} />
					<rect x={SX - BWd / 2 + 8} y={PCY - hSalt + 8} width={12} height={Math.max(0, hSalt - 16)} rx={5} fill="#ffffff" opacity={0.28} />
					<ellipse cx={SX} cy={PCY - hSalt} rx={BWd / 2} ry={7} fill={shade(A_COLOR, 0.15)} stroke={shade(A_COLOR, -0.3)} strokeWidth={1} opacity={ramp(frame, tSalt, 10)} />
					<ellipse cx={AX} cy={PCY} rx={BWd / 2} ry={7} fill="none" stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="4 4" />
				</g>
				<g opacity={ramp(frame, tAcid + 10, 14)}>
					<text x={AX} y={PCY - hAcid - 16} textAnchor="middle" fill={INK_HA} fontSize={19} fontWeight={800}>about 3 g/L</text>
					<text x={AX} y={PCY + 38} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>free acid</text>
				</g>
				<g opacity={ramp(frame, tSalt + 36, 14)}>
					<text x={SX} y={PCY - saltSolubility * scale - 16} textAnchor="middle" fill={INK_A} fontSize={19} fontWeight={800}>over 500 g/L</text>
				</g>
				<g opacity={ramp(frame, tSalt, 14)}>
					<text x={SX} y={PCY + 38} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>sodium salt</text>
				</g>
			</DioramaPlinth>
			<g opacity={ramp(frame, tFold, 16)}>
				<text x={AX + 8} y={262} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>{foldLabel}</text>
				<text x={AX + 8} y={288} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>jump</text>
				<Arrow x1={AX + 8} y1={352} x2={AX + 8} y2={306} color={TOK.inkDim} width={3} head={12} progress={ramp(frame, tFold, 20)} />
			</g>

			<line x1={395} y1={24} x2={395} y2={506} stroke={TOK.rule} strokeWidth={2} opacity={panelIn} />

			{/* Right: Ka vs pKa */}
			<g opacity={panelIn}>
				<text x={575} y={40} textAnchor="middle" fill={TOK.ink} fontSize={23} fontWeight={800}>Ranking acid strength</text>
				<text x={575} y={118} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>stronger acid</text>
				<text x={575} y={414} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={700}>weaker acid</text>
				<Arrow x1={KX} y1={BOTY} x2={KX} y2={TOPY} color={TOK.ink} width={3.5} head={14} />
				<Arrow x1={PX} y1={TOPY} x2={PX} y2={BOTY} color={TOK.ink} width={3.5} head={14} />
				<text x={KX - 14} y={TOPY + 16} textAnchor="end" fill={TOK.ink} fontSize={19} fontWeight={800}>larger Ka</text>
				<text x={PX + 14} y={BOTY - 4} textAnchor="start" fill={TOK.ink} fontSize={19} fontWeight={800}>larger pKa</text>
				<text x={KX - 14} y={268} textAnchor="end" fill={TOK.inkDim} fontSize={22} fontWeight={800}>Ka</text>
				<text x={PX + 14} y={268} textAnchor="start" fill={TOK.inkDim} fontSize={22} fontWeight={800}>pKa</text>
				{/* the acid's level on both scales */}
				<line x1={KX} y1={SYl} x2={PX} y2={SYl} stroke={HA_COLOR} strokeWidth={3} strokeDasharray="6 5" />
				<circle cx={KX} cy={SYl} r={11} fill={`url(#${id}-g-ha)`} stroke={shade(HA_COLOR, -0.3)} />
				<circle cx={PX} cy={SYl} r={11} fill={`url(#${id}-g-ha)`} stroke={shade(HA_COLOR, -0.3)} />
			</g>
			<g opacity={ramp(frame, tOpp, 16)}>
				<text x={575} y={76} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>pKa = −log Ka</text>
				<text x={575} y={444} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>Ka and pKa move in opposite directions</text>
			</g>
			<g opacity={ramp(frame, tLowest, 16)}>
				<Pill x={575} y={486} text="Lowest pKa = strongest acid" color={TOK.amber} textColor={TOK.amberInk} size={21} strokeWidth={2 + idlePulse(frame) * 1.5} />
			</g>
		</g>
	);
};

// ─────────────────────────────────────────────────────────────── hocl
const HoclMode = ({frame, beats, id, pKa, lowerPH, higherPH}: {frame: number; beats: number[]; id: string; pKa: number; lowerPH: number; higherPH: number}) => {
	const [tEq1, tEq2, tTag, tHigh, tRise, tVerdict] = beats;
	const N = ROWS.reduce((s, n) => s + n, 0);
	const nLow = N * fracIonised(lowerPH, pKa);
	const nHigh = N * fracIonised(higherPH, pKa);
	const flip = ease(ramp(frame, tRise + 10, 80));

	const Plinth = ({cx, n, seed, enter, pid}: {cx: number; n: number; seed: number; enter: number; pid: string}) => {
		const slots = popSlots(cx, 344, ROWS, 52, 24);
		const ranks = flipRanks(slots.length, seed);
		return (
			<DioramaPlinth id={pid} cx={cx} cy={344} rx={165}>
				{slots.map((s, i) => {
					const st = flipState(n, ranks[i]);
					const x = s.x + idleBob(frame, i + seed * 5, 1.3);
					const y = s.y - 10 + idleBob(frame + 30, i + seed, 1.1);
					const sc = 0.8 + 0.2 * enter;
					return (
						<g key={i} opacity={Math.min(1, enter * 1.4)}>
							{st < 1 && <Molecule id={id} atoms={['O', 'H', 'Cl']} x={x} y={y} r={12} scale={sc} opacity={1 - st} />}
							{st > 0 && (
								<g opacity={st}>
									{/* violet charge halo: the ionised form, same colour as A⁻ in the aspirin scenes */}
									<ellipse cx={x} cy={y - 1} rx={25 * sc} ry={19 * sc} fill={A_COLOR} opacity={0.45} stroke={A_COLOR} strokeWidth={2} strokeOpacity={0.9} />
									<Molecule id={id} atoms={['O', 'Cl']} x={x} y={y} r={12} scale={sc} />
									<text x={x + 13} y={y - 6} fill={TOK.ink} fontSize={21} fontWeight={900}>−</text>
								</g>
							)}
							{st > 0 && st < 1 && <circle cx={x - 8} cy={y - st * 24} r={6} fill={`url(#${id}-atom-H)`} opacity={1 - st} />}
						</g>
					);
				})}
			</DioramaPlinth>
		);
	};

	return (
		<g>
			<g opacity={ramp(frame, 0, 16) * (1 - ramp(frame, tEq1 - 16, 16))}>
				<text x={W / 2} y={60} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800}>Not how much chlorine,</text>
				<text x={W / 2} y={94} textAnchor="middle" fill={TOK.inkDim} fontSize={26} fontWeight={800}>but which species is present?</text>
			</g>
			<g opacity={ramp(frame, tEq1, 16)}>
				<text x={W / 2} y={40} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800}>Cl₂ + H₂O → HOCl + HCl</text>
			</g>
			<g opacity={ramp(frame, tEq2, 16)}>
				<text x={W / 2} y={80} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800}>
					<tspan fill={TOK.amberInk}>HOCl</tspan> ⇌ H⁺ + OCl⁻
				</text>
			</g>

			{/* legend with the key fact */}
			<g opacity={ramp(frame, tTag, 16)}>
				<Molecule id={id} atoms={['O', 'H', 'Cl']} x={58} y={128} r={12} />
				<text x={84} y={137} fill={TOK.ink} fontSize={20} fontWeight={800}>HOCl</text>
				<Pill x={290} y={130} text="more effective disinfectant" color={TOK.amber} textColor={TOK.amberInk} size={17} strokeWidth={2 + idlePulse(frame) * 1.5} />
			</g>
			<g opacity={ramp(frame, tRise, 16)}>
				<ellipse cx={470} cy={127} rx={25} ry={19} fill={A_COLOR} opacity={0.45} stroke={A_COLOR} strokeWidth={2} strokeOpacity={0.9} />
				<Molecule id={id} atoms={['O', 'Cl']} x={470} y={128} r={12} />
				<text x={483} y={122} fill={TOK.ink} fontSize={21} fontWeight={900}>−</text>
				<text x={500} y={137} fill={TOK.ink} fontSize={20} fontWeight={800}>OCl⁻</text>
				<text x={554} y={137} fill={TOK.inkDim} fontSize={17} fontWeight={700}>weaker disinfectant</text>
			</g>

			<g opacity={ramp(frame, tHigh, 16)}>
				<text x={195} y={206} textAnchor="middle" fill={TOK.ink} fontSize={23} fontWeight={800}>Lower pH</text>
				<text x={565} y={206} textAnchor="middle" fill={TOK.ink} fontSize={23} fontWeight={800}>Higher pH</text>
			</g>
			<g opacity={ramp(frame, tRise, 16)}>
				<Arrow x1={300} y1={200} x2={455} y2={200} color={TOK.inkDim} width={3} head={12} progress={ramp(frame, tRise, 24)} />
				<text x={378} y={186} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>pH rises</text>
			</g>

			<Plinth cx={195} n={nLow} seed={2} enter={ramp(frame, tEq2, 18)} pid={`${id}l`} />
			<Plinth cx={565} n={nHigh * flip} seed={4} enter={ramp(frame, tHigh, 18)} pid={`${id}h`} />

			<g opacity={ramp(frame, tHigh + 10, 14)}>
				<text x={195} y={462} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>Mostly HOCl</text>
			</g>
			<g opacity={ramp(frame, tRise + 90, 14)}>
				<text x={565} y={462} textAnchor="middle" fill={INK_A} fontSize={22} fontWeight={800}>Mostly OCl⁻</text>
			</g>
			<g opacity={ramp(frame, tVerdict, 16)}>
				<Pill x={195} y={496} text="stronger disinfection" color={TOK.amber} textColor={TOK.amberInk} size={18} strokeWidth={2 + idlePulse(frame) * 1.5} />
				<text x={565} y={502} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>weaker disinfection</text>
			</g>
		</g>
	);
};

// ─────────────────────────────────────────────────────────────── root
export const IonisationDiagram = ({
	delay = 62,
	mode = 'hh',
	beats,
	pKa = 3.5,
	stomachRange = [1, 2],
	intestineRange = [6, 7],
	stomachPH = 2,
	intestinePH = 6,
	hoclPKa = 7.5,
	lowerPH = 6.5,
	higherPH = 8.5,
	acidSolubility = 3,
	saltSolubility = 500,
	foldLabel = '160-fold',
}: IonisationProps) => {
	const frame = useCurrentFrame() - delay;
	useAccent();
	const b = beats && beats.length >= DEFAULT_BEATS[mode].length ? beats : DEFAULT_BEATS[mode];
	const id = `c12m8ion${mode}`;
	const aria: Record<Mode, string> = {
		forms: 'A weak acid HA is in equilibrium with H+ and A-. Unionised HA is less polar and crosses a lipid membrane; ionised A- is more polar, stays in the water and bounces off the membrane.',
		hh: 'Henderson-Hasselbalch: as pH moves from two below the pKa to two above it, a population of weak-acid molecules shifts from HA to A-, with the A- to HA ratio going from 1 to 100 through 1 to 1 up to 100 to 1.',
		compare: `Aspirin, pKa ${pKa}: in the stomach (pH ${stomachRange[0]} to ${stomachRange[1]}) it is mostly unionised HA, which crosses membranes more easily; in the small intestine (pH ${intestineRange[0]} to ${intestineRange[1]}) it is mostly ionised A-, more water-soluble and less membrane-permeable.`,
		salts: `Aspirin free acid dissolves at about ${acidSolubility} g/L and its sodium salt at over ${saltSolubility} g/L, drawn to scale. A larger Ka or a smaller pKa means a stronger acid; the lowest pKa is the strongest acid.`,
		hocl: 'Chlorine and water give HOCl and HCl; HOCl ionises to H+ and OCl-. At lower pH the chlorine is mostly HOCl, the more effective disinfectant; at higher pH it is mostly OCl-, the weaker one.',
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={aria[mode]} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={id} elements={['O', 'H', 'Cl']} />
			<GlossDefs id={id} colors={{...ACID_GLOSS, knob: '#6a6a6a'}} />
			{mode === 'forms' && <FormsMode frame={frame} beats={b} id={id} />}
			{mode === 'hh' && <HHMode frame={frame} beats={b} id={id} />}
			{mode === 'compare' && (
				<CompareMode frame={frame} beats={b} id={id} pKa={pKa} stomachRange={stomachRange} intestineRange={intestineRange} stomachPH={stomachPH} intestinePH={intestinePH} />
			)}
			{mode === 'salts' && <SaltsMode frame={frame} beats={b} id={id} acidSolubility={acidSolubility} saltSolubility={saltSolubility} foldLabel={foldLabel} />}
			{mode === 'hocl' && <HoclMode frame={frame} beats={b} id={id} pKa={hoclPKa} lowerPH={lowerPH} higherPH={higherPH} />}
		</svg>
	);
};
