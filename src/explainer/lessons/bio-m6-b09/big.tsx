// M6 B09 lesson-local board parts with larger text (6 Nov quality fix). parts.tsx is imported by B10 to B19, P01 and
// M7, so its versions are left untouched; these copies differ only in type size (lane labels 40 px, terms 32 to 40 px,
// strip labels 26 px, tick words 32 px, chips 34 px, timeline ticks 36 px) and larger strip rings.
import React from 'react';
import {Sx} from '../bio-m5-b13/shared';
import {rungX} from '../bio-m6-b01/parts';
import type {Kind} from '../bio-m6-b01/parts';
import {
	AMBER, AMBER_INK, AlleleRing, BactIns, CARD, EDGE, GREYT, GREY_INK, INK, INK_SOFT, LCX, LW, LX, LY0, LY1, PLATES, Pl, STRIP_Y, SN, SP, Strip, StripCopy,
	clamp01, lerp, stripX,
} from './parts';

const LANE_LABEL = ['uses a process', 'chooses the parents', 'copies DNA', 'inserts or edits DNA'];
export const LaneCard: React.FC<{i: number; o?: number; active?: number; dash?: boolean; labelO?: number}> = ({i, o = 1, active = 0, dash = false, labelO = 1}) => {
	if (o <= 0.01) return null;
	const a = clamp01(active);
	return (
		<g opacity={o}>
			<rect x={LX(i)} y={LY0} width={LW} height={LY1 - LY0} rx={24} fill={dash ? 'none' : CARD} stroke={a > 0.5 ? AMBER : EDGE} strokeWidth={a > 0.5 ? 4 : 2.5} strokeDasharray={dash ? '12 9' : undefined} />
			<Sx x={LCX(i)} y={LY0 + 54} text={LANE_LABEL[i]} size={40} color={a > 0.5 ? AMBER_INK : GREY_INK} hand anchor="middle" opacity={labelO} />
		</g>
	);
};
export const LaneTerm: React.FC<{i: number; lines: string[]; o?: number; bright?: number; y?: number}> = ({i, lines, o = 1, bright = 0, y = 618}) => {
	if (o <= 0.01) return null;
	const b = clamp01(bright);
	const size = lerp(32, 40, b);
	return (
		<g opacity={o}>
			{lines.map((t, k) => <Sx key={k} x={LCX(i)} y={y + k * size * 1.1 - (lines.length - 1) * size * 0.55} text={t} size={size} color={b > 0.5 ? INK : GREY_INK} weight={b > 0.5 ? 800 : 600} anchor="middle" />)}
		</g>
	);
};
const DnaLbl: React.FC<{i: number; o?: number}> = ({i, o = 1}) => (o <= 0.01 ? null : <Sx x={LX(i) + 6} y={STRIP_Y - 26} text="DNA" size={26} color={GREY_INK} weight={700} opacity={o} />);
export const GreyTick: React.FC<{x: number; y: number; o?: number; text?: string; s?: number}> = ({x, y, o = 1, text, s = 30}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={`M${x - s * 0.5},${y} L${x - s * 0.12},${y + s * 0.45} L${x + s * 0.55},${y - s * 0.5}`} fill="none" stroke={GREYT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
		{text ? <Sx x={x + s * 0.9} y={y + 11} text={text} size={32} color={GREY_INK} hand /> : null}
	</g>
));
/** Two allele rings above a strip, sized to the strip's pitch. */
export const StripRings: React.FC<{cx: number; y: number; kinds: [Kind, Kind]; o?: number; n?: number; pitch?: number; r?: number}> = ({cx, y, kinds, o = 1, n = SN, pitch = SP, r = 14}) => {
	if (o <= 0.01) return null;
	const x = stripX(cx, n, pitch);
	return (
		<g opacity={o}>
			<AlleleRing x={rungX(x, 2, pitch)} y={y - r - 12} r={r} kind={kinds[0]} />
			<AlleleRing x={rungX(x, 7, pitch)} y={y - r - 12} r={r} kind={kinds[1]} />
		</g>
	);
};

export const Lane1: React.FC<{o?: number; dim?: number; plates?: number; strip?: number; tick?: number}> = ({o = 1, dim = 0, plates = 1, strip = 1, tick = 1}) => {
	if (o <= 0.01) return null;
	const cx = LCX(0);
	return (
		<g opacity={o}>
			<Pl p={PLATES.yeast} cx={cx - 95} cy={410} w={160} o={plates} dim={dim} />
			<Pl p={PLATES.bread} cx={cx + 88} cy={420} w={190} o={plates} dim={dim} />
			<Strip cx={cx} y={STRIP_Y} draw={strip} o={strip > 0.01 ? 1 : 0} dim={dim} />
			<DnaLbl i={0} o={strip * (1 - 0.5 * dim)} />
			<GreyTick x={cx - 70} y={800} o={tick * (1 - 0.5 * dim)} text="unchanged" />
		</g>
	);
};
export const Lane2: React.FC<{o?: number; dim?: number; sheep?: number; repro?: number; strip?: number; rings?: number; tick?: number}> = ({o = 1, dim = 0, sheep = 1, repro = 0, strip = 1, rings = 1, tick = 1}) => {
	if (o <= 0.01) return null;
	const cx = LCX(1);
	return (
		<g opacity={o}>
			<Pl p={PLATES.sheep} cx={cx} cy={360} w={200} o={sheep} dim={dim} />
			<Pl p={PLATES.straw} cx={cx - 90} cy={508} w={92} o={repro} dim={dim} />
			<Pl p={PLATES.brush} cx={cx + 85} cy={508} w={124} o={repro} dim={dim} />
			<Strip cx={cx} y={STRIP_Y} draw={strip} o={strip > 0.01 ? 1 : 0} dim={dim} />
			<DnaLbl i={1} o={strip * (1 - 0.5 * dim)} />
			<g opacity={1 - 0.5 * dim}><StripRings cx={cx} y={STRIP_Y} kinds={['a', 'b']} o={rings} r={12} /></g>
			<GreyTick x={cx - 125} y={800} o={tick * (1 - 0.5 * dim)} text="no new alleles" />
		</g>
	);
};
export const Lane3: React.FC<{o?: number; dim?: number; plates?: number; copy?: number}> = ({o = 1, dim = 0, plates = 1, copy = 1}) => {
	if (o <= 0.01) return null;
	const cx = LCX(2);
	return (
		<g opacity={o}>
			<Pl p={PLATES.jars} cx={cx} cy={370} w={270} o={plates} dim={dim} />
			<Pl p={PLATES.runner} cx={cx} cy={515} w={260} o={plates} dim={dim} />
			<g opacity={1 - 0.5 * dim}><StripCopy cx={cx} y={STRIP_Y - 10} t={copy} o={plates} dy={44} /></g>
			<DnaLbl i={2} o={plates * (1 - 0.5 * dim)} />
		</g>
	);
};
export const Lane4: React.FC<{o?: number; dim?: number; bact?: number; vial?: number; cotton?: number; strip?: number; ins?: number; arc?: number; cottonGlow?: number}> = ({o = 1, dim = 0, bact = 1, vial = 1, cotton = 0, strip = 1, ins = 1, arc = 1, cottonGlow = 0}) => {
	if (o <= 0.01) return null;
	const cx = LCX(3);
	return (
		<g opacity={o}>
			<BactIns cx={cx - 50} cy={375} w={250} o={bact} dim={dim} arc={arc} />
			<Pl p={PLATES.vial} cx={cx + 142} cy={392} w={62} o={vial} dim={dim} />
			<Pl p={PLATES.cotton} cx={cx} cy={512} w={100} o={cotton} dim={dim} glow={cottonGlow} />
			<Strip cx={cx} y={STRIP_Y} draw={strip} o={strip > 0.01 ? 1 : 0} ins={ins} dim={dim} />
			<DnaLbl i={3} o={strip * (1 - 0.5 * dim)} />
		</g>
	);
};
export const AdvChip: React.FC<{cx: number; y: number; lines: string[]; o?: number; lit?: number; w?: number; size?: number}> = ({cx, y, lines, o = 1, lit = 1, w = 392, size = 34}) => {
	if (o <= 0.01) return null;
	const l = clamp01(lit);
	const h = 24 + lines.length * size * 1.15;
	return (
		<g opacity={o}>
			<rect x={cx - w / 2} y={y} width={w} height={h} rx={18} fill={l > 0.5 ? '#fff3d9' : CARD} stroke={l > 0.5 ? AMBER : EDGE} strokeWidth={l > 0.5 ? 3.5 : 2.5} />
			{lines.map((t, k) => <Sx key={k} x={cx} y={y + 12 + size * 0.9 + k * size * 1.15} text={t} size={size} color={l > 0.5 ? AMBER_INK : GREY_INK} hand anchor="middle" />)}
		</g>
	);
};
export const TimeTick: React.FC<{x: number; y: number; text: string; o?: number; size?: number}> = ({x, y, text, o = 1, size = 36}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<line x1={x} y1={y - 16} x2={x} y2={y + 16} stroke={INK_SOFT} strokeWidth={5} />
		<Sx x={x} y={y + 58} text={text} size={size} color={GREY_INK} hand anchor="middle" />
	</g>
));
