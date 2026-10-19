// M6 B01 scenes 1 to 4 on the level board: Fleming's warning (hook), gene, allele and gene pool as three levels, a
// changed base inside a gene makes a new allele (sickle cell), and a new allele starts as one copy (many mutations
// change nothing visible).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Chip, DrawPath, Heading, MistakeChip, Overlay, Sx, prog} from '../bio-m5-b13/shared';
import {S} from './common';
import {PLATES} from './assets';
import {
	AMBER, AMBER_INK, AlleleRing, BIO_INK, BLUE, Bact, BaseSwap, BaseTag, CardBox, FillBar, GTag, INK, INK_SOFT, Lbl, PlateAt, PoolBasin, RED, SlimStrand, Vial, basinSlots,
	clamp01, lerp, popGrid, ringAt, rungX, smooth, vis,
} from './parts';
import type {Kind} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {
	fleming: 'Alexander Fleming', nobel: 'Nobel Prize lecture', little: 'too little penicillin', bact: 'the bacteria that survived', surv: 'survived', spread: 'And resistance did spread',
	common: 'common in some hospitals', real: "So here's the real question", did: 'Did penicillin make the bacteria change', already: 'already different', arrived: 'drug arrived',
});
const HOOK_PTS = popGrid(12, 4, 1080, 290, 190, 130, 11, 0.3);
const SURVIVE = [2, 7, 9];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Where new alleles come from" at={K1.real} size={60} />
			<Overlay>
				<CardBox x={96} y={200} w={780} h={300} at={0} />
				<Lbl x={136} y={300} text="1945" size={88} at={4} />
				<Lbl x={136} y={372} text="Nobel Prize lecture" size={46} at={K1.nobel} />
				<Lbl x={136} y={430} text="Alexander Fleming, who discovered penicillin" size={27} hand={false} color={INK_SOFT} at={K1.fleming} />
				<Vial x={760} y={300} s={0.95} o={prog(f, K1.fleming, 14)} fill={0.62} />
				{/* the dose bar */}
				<g opacity={prog(f, K1.little - 10, 12)}>
					<FillBar x={136} y={600} w={620} h={34} p={0.33 * prog(f, K1.little, 30)} label="penicillin dose" />
					<line x1={136 + 620} y1={590} x2={136 + 620} y2={644} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="6 5" />
					<Sx x={136 + 620} y={680} text="full dose" size={24} color={INK_SOFT} anchor="end" weight={600} />
				</g>
				<Lbl x={136 + 0.33 * 620 + 20} y={688} text="underdose" size={38} color={AMBER_INK} at={K1.little + 26} />
				{/* the bacteria; most die, a few survive */}
				{HOOK_PTS.map(([x, y], i) => {
					const live = SURVIVE.includes(i);
					return <Bact key={i} cx={x} cy={y} w={160} o={prog(f, K1.bact - 24 + i * 2, 12)} grey={live ? 0 : prog(f, K1.surv + 6 + i * 2, 16)} glow={live ? vis(f, K1.surv + 20, K1.common, 14) : 0} />;
				})}
				<Lbl x={1150} y={640} text="survivors" size={34} color={AMBER_INK} at={K1.surv + 30} out={K1.did - 10} />
				<GTag x={96} y={770} text="London hospital staph: about 1 in 8 resistant in 1946, about 59% by 1948" at={K1.common} size={26} />
				<Chip x={1080} y={700} text="made by penicillin?" at={K1.did} size={38} />
				<Sx x={1478} y={748} text="or" size={34} color={INK_SOFT} hand anchor="middle" at={K1.already - 4} />
				<Chip x={1520} y={700} text="already there?" at={K1.already} size={38} />
				<Sx x={1450} y={880} text="?" size={110} color={AMBER_INK} weight={800} anchor="middle" at={K1.arrived} />
			</Overlay>
		</>
	);
};

// ---------- 2. Gene, allele, gene pool ----------
const K2 = cues(S('three-levels'), {
	answer: 'To answer it', gene: 'A gene is', stretch: 'a stretch of DNA', codes: 'codes for a product', allele: 'An allele is', version: 'one version of that gene', diff: 'slightly different base sequences',
	pool: 'And a gene pool', every: 'every allele of every gene', whole: 'whole population', so: 'So a gene pool belongs', never: 'never to one organism',
});
const POP20 = popGrid(20, 5, 1160, 270, 135, 82, 5, 0.25);
const KIND20: Kind[] = POP20.map((_, i) => (i % 3 === 1 ? 'b' : 'a'));
const BAS2 = {x: 1180, y: 650, w: 620, h: 160};
const SLOTS2 = basinSlots(BAS2.x, BAS2.y, BAS2.w, BAS2.h, 20, 10);
export const SceneThreeLevels: React.FC = () => {
	const f = useCurrentFrame();
	const dimL = 1 - 0.45 * prog(f, K2.every, 20);
	const sx = 140, sy = 300, n = 28, pitch = 30;
	const b0 = 9, b1 = 19;
	const bandX0 = rungX(sx, b0, pitch) - pitch / 2, bandX1 = rungX(sx, b1, pitch) + pitch / 2;
	const pieces = [{y: 470, l: 'A', t: 'allele 1'}, {y: 590, l: 'T', t: 'allele 2'}];
	return (
		<>
			<Heading text="Three words, three levels" at={K2.answer} size={56} />
			<Overlay>
				<g opacity={dimL}>
					<Lbl x={120} y={238} text="1. gene" size={30} color={INK_SOFT} at={K2.gene} />
					<SlimStrand x={sx} y={sy} n={n} pitch={pitch} draw={prog(f, K2.gene, 40)} band={{i0: b0, i1: b1, o: prog(f, K2.stretch, 14)}} />
					<Lbl x={(bandX0 + bandX1) / 2} y={262} text="gene: codes for a product" size={34} color={BIO_INK} anchor="middle" at={K2.codes} />
					<Lbl x={120} y={432} text="2. alleles" size={30} color={INK_SOFT} at={K2.version} />
					{pieces.map((p, k) => {
						const o = prog(f, K2.version + k * 12, 14);
						const px = 300;
						return (
							<g key={k} opacity={o}>
								<DrawPath d={`M${lerp(bandX0, bandX1, 0.3 + k * 0.2)},${sy + 64} Q${250},${400} ${px - 12},${p.y + 20}`} at={K2.version + k * 12} dur={14} color="#9fc0de" width={3} dash="7 6" />
								<SlimStrand x={px} y={p.y} n={11} pitch={pitch} gap={40} band={{i0: 0, i1: 10, o: 0.7}} rung={i => (i === 5 ? {color: AMBER, w: 6} : undefined)} />
								<BaseTag x={rungX(px, 5, pitch)} y={p.y - 4} text={p.l} len={10} size={24} color={AMBER} />
								<Lbl x={px + 360} y={p.y + 30} text={`${p.t}: ...${p.l}...`} size={34} color={INK} at={-100} />
							</g>
						);
					})}
					<Lbl x={300} y={700} text="same gene, different sequence" size={36} color={AMBER_INK} at={K2.diff} />
				</g>
				{/* level 3: a population and its gene pool */}
				<Lbl x={1180} y={238} text="3. gene pool" size={30} color={INK_SOFT} at={K2.every} />
				<PoolBasin {...BAS2} o={prog(f, K2.whole, 14)} />
				{POP20.map(([x, y], i) => {
					const o = prog(f, K2.every + 6 + i * 3, 10);
					const [rx, ry] = ringAt(x, y, 92, 10);
					const t = prog(f, K2.whole + 10 + i * 2, 22);
					const [tx, ty] = SLOTS2[i];
					return (
						<g key={i}>
							<Bact cx={x} cy={y} w={92} o={o} ring={KIND20[i]} ringO={t > 0.01 ? 0.35 : 1} r={10} />
							{t > 0.01 ? <AlleleRing x={lerp(rx, tx, smooth(t))} y={lerp(ry, ty, smooth(t)) - Math.sin(t * Math.PI) * 30} r={13} kind={KIND20[i]} /> : null}
						</g>
					);
				})}
				<Lbl x={BAS2.x + BAS2.w / 2} y={BAS2.y + BAS2.h + 52} text="gene pool: all the alleles in a population" size={34} color={BIO_INK} anchor="middle" at={K2.whole + 40} />
				<g opacity={prog(f, K2.never - 6, 12)}>
					<Bact cx={180} cy={928} w={110} />
				</g>
				<MistakeChip x={270} y={898} text="gene pool = one organism's genes" at={K2.never} cross={K2.never + 24} size={32} />
			</Overlay>
		</>
	);
};

// ---------- 3. A changed base makes a new allele ----------
const K3 = cues(S('new-allele'), {
	mut: 'A mutation is a change', change: 'a change in the base sequence', inside: 'inside a gene', newA: "that's a new allele", met: "You've met one already", hb: 'one haemoglobin gene', base: 'one base changed',
	sickle: 'the sickle cell allele', holds: 'the population holds a version', before: "didn't have before",
});
export const SceneNewAllele: React.FC = () => {
	const f = useCurrentFrame();
	const sx = 120, sy = 340, pitch = 34, ci = 19;
	const cx = rungX(sx, ci, pitch);
	const hot = prog(f, K3.change + 20, 10);
	const BAS = {x: 260, y: 700, w: 600, h: 140};
	const sl = basinSlots(BAS.x, BAS.y, BAS.w, BAS.h, 3, 3);
	return (
		<>
			<Heading text="A changed base makes a new allele" at={K3.mut} size={56} />
			<Overlay>
				<SlimStrand x={sx} y={sy} n={30} pitch={pitch} gap={54} lineW={5} band={{i0: 10, i1: 21, o: prog(f, 0, 14)}} rung={i => (i === ci ? {color: hot > 0.5 ? AMBER : '#c7bcab', w: 3 + 4 * hot} : undefined)} o={prog(f, 0, 12)} />
				<Lbl x={rungX(sx, 10, pitch) - 6} y={300} text="gene" size={34} color={BIO_INK} at={4} />
				<Lbl x={rungX(sx, 10, pitch) + 60} y={300} text="+ new allele" size={34} color={AMBER_INK} at={K3.newA} />
				<BaseSwap x={cx} y={sy - 4} from="A" to="T" show={K3.change - 6} at={K3.change + 20} />
				<Lbl x={sx} y={480} text="mutation: the base sequence changes" size={38} color={INK} at={K3.change + 26} />
				<GTag x={sx + 640} y={448} text="B8" at={K3.change + 34} size={24} />
				<Lbl x={sx} y={540} text="inside a gene: a new version of that gene" size={36} color={AMBER_INK} at={K3.inside + 10} />
				{/* sickle cell recall */}
				<PlateAt p={PLATES.sickle} cx={1530} cy={390} w={520} at={K3.hb} />
				<Lbl x={1530} y={580} text="one base changed: sickle cell allele" size={34} color={INK} anchor="middle" at={K3.base} />
				<GTag x={1700} y={610} text="B7" at={K3.sickle} size={24} />
				{/* the gene pool gains a version */}
				<PoolBasin {...BAS} o={prog(f, K3.holds - 10, 14)} />
				<AlleleRing x={sl[0][0]} y={sl[0][1] + 14} r={18} kind="a" o={prog(f, K3.holds, 10)} />
				<AlleleRing x={sl[1][0]} y={sl[1][1] + 14} r={18} kind="b" o={prog(f, K3.holds + 6, 10)} />
				<g transform={`translate(${sl[2][0]},${sl[2][1] + 14}) scale(${0.6 + 0.4 * smooth(prog(f, K3.before, 14))}) translate(${-sl[2][0]},${-(sl[2][1] + 14)})`}>
					<AlleleRing x={sl[2][0]} y={sl[2][1] + 14} r={18} kind="new" o={prog(f, K3.before, 10)} glow={vis(f, K3.before, K3.before + 60, 10)} />
				</g>
				<Lbl x={BAS.x + BAS.w / 2} y={BAS.y + BAS.h + 48} text="this gene in the population" size={30} color={BIO_INK} anchor="middle" at={K3.holds + 10} />
				<Sx x={960} y={760} text="alleles of this gene: 2" size={40} color={INK} weight={700} at={K3.holds + 16} />
				<Sx x={960} y={820} text="now 3" size={52} color={AMBER_INK} hand at={K3.before + 8} />
			</Overlay>
		</>
	);
};

// ---------- 4. One copy, often no visible effect ----------
const K4 = cues(S('one-copy'), {
	small: 'starts very small', one: 'in one cell in one individual', copy: 'a copying mistake', mutagen: 'a mutagen', next: 'the next video', onecopy: 'one copy', nothing: 'change nothing you can see',
	outside: 'fall outside genes', protein: "don't change the protein",
});
const POP4 = popGrid(20, 5, 190, 260, 175, 92, 7, 0.25);
const MARK4 = 12;
export const SceneOneCopy: React.FC = () => {
	const f = useCurrentFrame();
	const [mx, my] = POP4[MARK4];
	return (
		<>
			<Heading text="A new allele starts as one copy" at={K4.small} size={56} />
			<Overlay>
				{POP4.map(([x, y], i) => (
					<Bact key={i} cx={x} cy={y} w={104} o={prog(f, i * 2, 12)} ring={i === MARK4 && f >= K4.one ? 'new' : i % 3 === 1 ? 'b' : 'a'} r={10} glow={i === MARK4 ? prog(f, K4.one, 14) : 0} />
				))}
				{/* inset: the unrepaired copying error */}
				<CardBox x={1150} y={215} w={680} h={250} at={K4.copy - 6} />
				<DrawPath d={`M${mx + 50},${my - 10} C${mx + 300},${my - 120} ${1000},${300} ${1150},${300}`} at={K4.copy - 4} dur={18} color={AMBER} width={3} dash="8 6" />
				<g opacity={prog(f, K4.copy, 12)}>
					<SlimStrand x={1190} y={300} n={19} pitch={31} gap={44} rung={i => (i === 9 ? {color: RED, w: 6} : undefined)} />
					<BaseTag x={rungX(1190, 9, 31)} y={296} text="G" len={10} size={24} color={INK_SOFT} />
					<BaseTag x={rungX(1190, 9, 31)} y={348} text="T" len={10} size={24} color={RED} below />
					<Lbl x={rungX(1190, 9, 31) + 40} y={410} text="mismatch, not repaired" size={30} color={RED} at={-100} />
				</g>
				<GTag x={1170} y={480} text="B4: copying is accurate, not perfect" at={K4.copy + 20} out={K4.mutagen} size={24} />
				<Chip x={1150} y={560} text="mutagen: something that harms DNA" at={K4.mutagen} size={34} />
				<GTag x={1170} y={640} text="next video" at={K4.next} out={K4.nothing} size={26} />
				<Sx x={190} y={690} text="1 copy in 20 cells" size={56} color={AMBER_INK} hand at={K4.onecopy} />
				{/* many mutations change nothing visible */}
				{[{x: 120, ci: 3, band: [8, 16] as [number, number], t: 'outside a gene', at: K4.outside}, {x: 980, ci: 11, band: [6, 16] as [number, number], t: 'inside a gene, same protein', at: K4.protein}].map((c, k) => {
					const o = prog(f, K4.nothing + k * 10, 14);
					return (
						<g key={k} opacity={o}>
							<CardBox x={c.x} y={745} w={820} h={270} at={-100} />
							<SlimStrand x={c.x + 40} y={810} n={24} pitch={31} gap={40} band={{i0: c.band[0], i1: c.band[1], o: 0.8}} rung={i => (i === c.ci ? {color: AMBER, w: 6} : undefined)} />
							<BaseTag x={rungX(c.x + 40, c.ci, 31)} y={806} text="T" len={8} size={22} color={AMBER} />
							<Lbl x={c.x + 40} y={915} text={c.t} size={36} color={INK} at={c.at} />
							<Lbl x={c.x + 40} y={975} text="no visible effect" size={32} color={INK_SOFT} at={K4.protein + 16} />
						</g>
					);
				})}
				{void BLUE}{void clamp01}{void AlleleRing}
			</Overlay>
		</>
	);
};
