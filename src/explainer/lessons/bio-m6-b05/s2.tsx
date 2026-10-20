// M6 B05 scenes 6 to 10 on the gene map: coding DNA (about 1 to 2 per cent; a codon change and its four outcomes),
// the promoter and far regulatory sequences (the polymerase binds less well, less mRNA, less protein, every codon
// correct), lactase persistence (one regulatory base change about 14,000 bases upstream keeps the gene on), introns cut
// out of the mRNA (a change mid-intron does nothing, a change at the cut signal changes the protein) and DNA with no
// known job, and the judgement: ask what the stretch does, not whether it is translated.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, Heading, Overlay, Sx} from '../bio-m5-b13/shared';
import {FillBar, GTag, PlateAt, SlimStrand} from '../bio-m6-b01/parts';
import {Term, TickS} from '../bio-m6-b03/parts';
import {S} from './common';
import {PLATES} from './assets';
import {
	AMBER, AMBER_INK, Band, CodonText, Dot, FONT_HAND, GENE_X, GN, GP, GREYT, GREY_INK, GX0, GY, GeneMap, INK, INK_SOFT, IntronLoop, MRNA, MRNA_INK, MiniChip, MrnaRibbon,
	PLUM, Pol, Protein, RLab, TEALC, Tag, clamp01, gr, lerp, prog, regC, regX, smooth, vis,
} from './parts';
import type {RegKey} from './parts';

const GENE_C = (GENE_X[0] + GENE_X[1]) / 2;
const PX = 1640, PY = 430;
const TAGX = 1000, TAGY = 320;

// ---------- 6. Coding DNA ----------
const K6 = cues(S('coding'), {second: 'the second question', pct: 'one to two per cent', coding: 'is coding DNA', stretches: 'the stretches whose codons', alters: 'alters a codon', silent: 'be silent', swap: 'swap an amino acid', stop: 'add an early stop', shift: 'shift the frame', rest: 'The rest is', nc: 'non-coding DNA', junk: 'junk'});
export const SceneCoding: React.FC = () => {
	const f = useCurrentFrame();
	const rowO = vis(f, K6.alters + 6, K6.rest, 12);
	const sw = prog(f, K6.alters + 26, 10);
	const cx = regC('e2');
	const chips: [string, number][] = [['same', K6.silent], ['swapped', K6.swap], ['stop', K6.stop], ['shifted', K6.shift]];
	return (
		<>
			<Heading text="Where in the DNA?" at={K6.second} size={60} />
			<Overlay>
				<GeneMap draw={prog(f, 4, 40)} exons={prog(f, 20, 14)} brightCoding={vis(f, K6.coding, K6.alters, 12)} brightNC={vis(f, K6.nc, 10000, 14)} rungs={[{i: 34, o: prog(f, K6.alters + 4, 8) * (1 - prog(f, K6.rest, 10))}]} />
				<RLab x={GENE_C} y={800} text="a gene" at={24} out={K6.alters} />
				{/* the coding fraction */}
				<g opacity={vis(f, K6.pct, K6.coding + 30, 12)}>
					<rect x={GX0} y={862} width={GN * GP} height={28} rx={14} fill="#eceae4" stroke="#c9c3b8" strokeWidth={2} />
					<rect x={GX0 + 3} y={865} width={Math.max(18, GN * GP * 0.015) * prog(f, K6.pct + 8, 16)} height={22} rx={11} fill="#d99a5a" />
				</g>
				<Tag x={GX0} y={950} text="coding: about 1 to 2%" at={K6.pct + 10} out={K6.coding} size={42} />
				<Term x={GX0} y={960} term="coding DNA" gloss="codons translated into protein" at={K6.coding} out={K6.alters} size={50} />
				{/* one codon changes, four possible outcomes */}
				<g opacity={rowO}>
					<rect x={cx - 64} y={514} width={128} height={64} rx={12} fill={AMBER} opacity={0.2 * prog(f, K6.alters + 20, 10)} />
					<CodonText x={cx - 161} y={560} codons={['CUU', 'GGA', 'UCA']} size={44} o={1 - sw} />
					<CodonText x={cx - 161} y={560} codons={['CUU', 'GUA', 'UCA']} size={44} hot={1} o={sw} />
					<line x1={gr(34)} y1={598} x2={gr(34)} y2={GY - 20} stroke={AMBER} strokeWidth={3} strokeDasharray="5 6" />
				</g>
				{chips.map(([t, at], k) => <MiniChip key={t} x={cx - 330 + k * 220} y={440} text={t} amber={k > 0} o={vis(f, at, K6.rest, 10)} size={32} />)}
				<Term x={GX0} y={960} term="non-coding DNA" gloss="not translated into protein" at={K6.nc} size={50} />
				<MiniChip x={gr(53)} y={640} text="junk?" o={prog(f, K6.junk, 10)} size={32} />
				{void K6.stretches}
			</Overlay>
		</>
	);
};

// ---------- 7. Non-coding DNA that controls a gene ----------
const K7 = cues(S('regulatory'), {some: 'some non-coding DNA controls', promoter: 'Remember the promoter', binds: 'polymerase binds', change: 'Change a base there', less: 'bind less well', mrna: 'less mRNA is made', every: 'Every codon is still correct', lessp: 'just less protein', other: 'Other control stretches', reg: 'regulatory sequences', far: 'sit far away', when: 'when a gene is switched on', which: 'in which cells'});
export const SceneRegulatory: React.FC = () => {
	const f = useCurrentFrame();
	const settle = smooth(prog(f, K7.binds - 4, 22));
	const wob = f > K7.less && f < K7.less + 70 ? Math.abs(Math.sin(((f - K7.less) / 35) * Math.PI)) : 0;
	const thin = prog(f, K7.less + 30, 30);
	const reg = prog(f, K7.reg, 14);
	return (
		<>
			<Heading text="Non-coding DNA that controls a gene" at={K7.some} size={56} />
			<Overlay>
				<GeneMap brightNC={1 - prog(f, 10, 20)} promo={prog(f, K7.promoter, 12)} ctrl={reg} rungs={[{i: 21, o: prog(f, K7.change + 4, 8)}, {i: 6, o: 0}]} />
				<Term x={GX0} y={960} term="non-coding DNA" gloss="not translated into protein" at={-100} out={8} size={50} />
				<g opacity={1 - prog(f, 26, 12)}>
					<MiniChip x={gr(53)} y={640} text="junk?" size={32} />
					<DrawPath d={`M${gr(53) - 70},612 L${gr(53) + 70},650 M${gr(53) + 66},610 L${gr(53) - 66},652`} at={4} dur={12} color={GREYT} width={5} />
				</g>
				<RLab x={regC('promo')} y={800} text="promoter" at={K7.promoter + 6} size={30} color={TEALC} />
				<Pol o={settle} dy={-120 * (1 - settle) - 46 * wob} dx={10 * Math.sin(wob * 6)} />
				<RLab x={regC('promo') - 100} y={GY - 60} text="RNA polymerase" at={K7.binds + 14} out={K7.reg} anchor="end" size={28} />
				<MrnaRibbon grow={prog(f, K7.binds + 26, 40)} th={lerp(12, 3, thin)} />
				<Protein x={PX} y={PY} p={lerp(1, 0.1, thin)} o={prog(f, K7.binds + 54, 14)} />
				<Tag x={TAGX} y={TAGY} text="normal: plenty of protein" at={K7.binds + 60} out={K7.less + 20} size={40} />
				<Tag x={TAGX} y={TAGY} text="less mRNA, less protein" at={K7.less + 34} out={K7.reg} size={40} />
				{(['e1', 'e2', 'e3'] as RegKey[]).map((k, n) => <TickS key={k} x={regC(k)} y={GY - 40} at={K7.every + 8 + n * 6} out={K7.reg} s={30} />)}
				{reg > 0.01 ? <DrawPath d={`M${regC('ctrl')},${GY - 18} C${regC('ctrl') + 80},${GY - 120} ${regC('promo') - 80},${GY - 120} ${regC('promo') - 30},${GY - 18}`} at={K7.reg + 6} dur={20} color={TEALC} width={3.5} dash="8 7" /> : null}
				<Term x={GX0} y={960} term="regulatory sequences" gloss="control when, where and how much a gene is copied" at={K7.reg} size={44} />
				{void K7.mrna}{void K7.lessp}{void K7.other}{void K7.far}{void K7.when}{void K7.which}
			</Overlay>
		</>
	);
};

// ---------- 8. A real one: milk into adulthood ----------
const K8 = cues(S('lactase'), {stop: 'stop making lactase', enzyme: 'the enzyme that digests', weaning: 'after weaning', keep: 'keep making it', base: 'one base change', fourteen: 'fourteen thousand bases', identical: 'The enzyme is identical', stays: 'stays switched on', inh: "It's inherited", helped: 'helped milk drinkers', spread: 'spread through'});
/** A tiny life timeline (birth, weaning, adult) with a marker; the amount bar follows the marker. */
const Life: React.FC<{x: number; y: number; t: number; persist: boolean; o?: number}> = ({x, y, t, persist, o = 1}) => {
	if (o <= 0.01) return null;
	const W = 300;
	const mx = x + W * clamp01(t);
	const p = persist ? 1 : 1 - clamp01((t - 0.42) / 0.2);
	return (
		<g opacity={o}>
			<FillBar x={x} y={y - 60} w={W} h={24} p={p} color="#7fa173" />
			<line x1={x} y1={y} x2={x + W} y2={y} stroke={INK_SOFT} strokeWidth={3} />
			{[['birth', 0], ['weaning', 0.5], ['adult', 1]].map(([l, u]) => (
				<g key={l as string}>
					<line x1={x + W * (u as number)} y1={y - 8} x2={x + W * (u as number)} y2={y + 8} stroke={INK_SOFT} strokeWidth={3} />
					<text x={x + W * (u as number)} y={y + 38} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 26}} fill={INK_SOFT}>{l as string}</text>
				</g>
			))}
			<circle cx={mx} cy={y} r={9} fill={AMBER} />
		</g>
	);
};
export const SceneLactase: React.FC = () => {
	const f = useCurrentFrame();
	const tl1 = prog(f, K8.stop + 10, 70, t => t);
	const tl2 = prog(f, K8.stays, 50, t => t);
	const persist = f >= K8.stays;
	const dupO = vis(f, K8.identical + 6, K8.stays, 12);
	const brighten = vis(f, K8.helped, K8.spread + 40, 14);
	const dimX = regX('ctrl')[1];
	const tl = persist ? tl2 : tl1;
	const made = persist || f < K8.stop + 10 ? 1 : 1 - clamp01((tl - 0.42) / 0.2);
	return (
		<>
			<Heading text="A real one: milk into adulthood" at={4} size={56} />
			<Overlay>
				<g transform={`translate(220,330) scale(${1 + 0.1 * brighten}) translate(-220,-330)`}><PlateAt p={PLATES.milk} cx={220} cy={330} w={190} at={2} /></g>
				<Tag x={TAGX} y={TAGY} text="lactase: digests milk sugar" at={K8.enzyme} out={K8.stop + 34} size={40} />
				<GeneMap promo={1} ctrl={1} rungs={[{i: 6, o: prog(f, K8.base + 6, 8)}]} />
				<MrnaRibbon th={2 + 10 * made} o={0.25 + 0.75 * made} />
				<RLab x={GENE_C} y={800} text="lactase gene" at={6} size={30} />
				<RLab x={regC('ctrl')} y={800} text="regulatory sequence" at={10} size={30} color={TEALC} />
				<RLab x={regC('promo')} y={800} text="promoter" at={12} size={26} color={TEALC} />
				{/* about 14,000 bases */}
				<g opacity={prog(f, K8.fourteen, 12)}>
					<DrawPath d={`M${dimX + 6},620 L${GENE_X[0] - 6},620`} at={K8.fourteen} dur={16} color={AMBER_INK} width={3.5} />
					<line x1={dimX + 6} y1={606} x2={dimX + 6} y2={634} stroke={AMBER_INK} strokeWidth={3.5} />
					<line x1={GENE_X[0] - 6} y1={606} x2={GENE_X[0] - 6} y2={634} stroke={AMBER_INK} strokeWidth={3.5} />
					<Sx x={(dimX + GENE_X[0]) / 2} y={598} text="about 14,000 bases" size={32} color={AMBER_INK} hand anchor="middle" />
				</g>
				{/* the enzyme and its amount over a life */}
				<Protein x={PX} y={PY} bar={false} o={prog(f, 4, 12)} />
				<Protein x={PX + 150} y={PY} bar={false} o={dupO} />
				<Sx x={PX + 75} y={PY + 14} text="=" size={48} color={INK} weight={800} anchor="middle" opacity={dupO} />
				<Life x={PX - 150} y={590} t={tl} persist={persist} o={prog(f, K8.stop, 12)} />
				<RLab x={PX - 150} y={515} text="lactase made" at={K8.stop} anchor="start" size={26} />
				<Tag x={TAGX} y={TAGY} text="usual: off after weaning" at={K8.stop + 40} out={K8.keep + 10} size={40} />
				<Tag x={TAGX} y={TAGY} text="lactase persistence: stays on" at={K8.stays + 20} size={40} />
				{/* inherited, and it spread */}
				<g opacity={prog(f, K8.inh, 12)}>
					<Dot x={300} y={440} r={20} plum mut={1} />
					<DrawPath d="M326,440 L392,440" at={K8.inh + 4} dur={10} color={PLUM} width={3} />
					{Array.from({length: 8}, (_, k) => <Dot key={k} x={420 + k * 44} y={440} r={16} mut={k < 2 ? prog(f, K8.inh + 12, 8) : prog(f, K8.spread + 6 + (k - 2) * 7, 8)} />)}
				</g>
				{void K8.weaning}
			</Overlay>
		</>
	);
};

// ---------- 9. Introns, and DNA with no known job ----------
const K9 = cues(S('introns'), {inside: 'sits inside genes', introns: 'contain introns', cut: 'cut out of the mRNA', middle: 'in the middle of an intron', nothing: 'usually does nothing', signal: 'the signal that marks', wrong: 'the wrong place', changes: 'the protein changes', noknown: 'no known job', neutral: 'often neutral'});
const EX: RegKey[] = ['e1', 'e2', 'e3'];
const MY9 = 540;
/** The mRNA copy of the gene, introns included; then the introns lift out and the coding pieces join (or, on a wrong
 * cut, the middle piece leaves with them). */
const IntronCut: React.FC<{copy: number; cut: number; skip?: boolean; o?: number}> = ({copy, cut, skip = false, o = 1}) => {
	if (o <= 0.01 || copy <= 0.01) return null;
	const w = 6 * GP;
	const keep = skip ? [0, 2] : [0, 1, 2];
	const tot = keep.length * w;
	const x0 = GENE_C - tot / 2;
	const t = smooth(cut);
	const xEnd = lerp(GENE_X[0], GENE_X[1], clamp01(copy));
	return (
		<g opacity={o}>
			{EX.map((k, n) => {
				const [a] = regX(k);
				const kept = keep.indexOf(n);
				const tx = kept >= 0 ? x0 + kept * w : a;
				const x = lerp(a, tx, t);
				const lift = kept >= 0 ? 0 : 70 * t;
				const op = kept >= 0 ? 1 : 1 - t;
				const vis1 = clamp01((xEnd - a) / w);
				return vis1 > 0.01 ? <line key={k} x1={x + 3} y1={MY9 - lift} x2={x + w * vis1 - 3} y2={MY9 - lift} stroke={MRNA} strokeWidth={14} strokeLinecap="round" opacity={op} /> : null;
			})}
			{[[regX('e1')[1], regX('e2')[0]], [regX('e2')[1], regX('e3')[0]]].map(([a, b], k) => (xEnd > a ? (
				<path key={k} d={`M${a},${MY9 - 70 * t} C${a + 4},${MY9 - 50 - 70 * t} ${b - 4},${MY9 - 50 - 70 * t} ${b},${MY9 - 70 * t}`} fill="none" stroke="#9a948a" strokeWidth={6} strokeLinecap="round" opacity={1 - t} />
			) : null))}
		</g>
	);
};
export const SceneIntrons: React.FC = () => {
	const f = useCurrentFrame();
	const loops = prog(f, K9.inside + 10, 20);
	// three runs of the cut: first, after a mid-intron change, after a change at the cut signal
	const run = f < K9.middle + 10 ? 0 : f < K9.signal + 20 ? 1 : 2;
	const base = [K9.introns + 10, K9.middle + 24, K9.signal + 40][run];
	const copy = prog(f, base, 30, t => t);
	const cut = prog(f, base + 40, 26);
	const mrnaO = run === 0 ? 1 - prog(f, K9.middle + 4, 6) : run === 1 ? 1 - prog(f, K9.signal + 14, 6) : 1 - prog(f, K9.noknown, 12);
	const loopApex = (k: number): [number, number] => [(k === 0 ? (regX('e1')[1] + regX('e2')[0]) / 2 : (regX('e2')[1] + regX('e3')[0]) / 2), GY - 14 - 52];
	const sigX = regX('e2')[0] - 6;
	const [ax, ay] = loopApex(0);
	const mutMid = vis(f, K9.middle + 6, K9.signal, 8);
	const mutSig = vis(f, K9.signal + 18, K9.noknown, 8);
	const short = run === 2 ? prog(f, base + 70, 14) : 0;
	return (
		<>
			<Heading text="Introns, and DNA with no known job" at={4} size={56} />
			<Overlay>
				<GeneMap introns={loops} rungs={[{i: 53, o: prog(f, K9.neutral - 10, 8)}]} />
				<Term x={GX0} y={960} term="introns" gloss="cut out of the mRNA" at={K9.introns} out={K9.noknown - 10} size={50} />
				<IntronCut copy={copy} cut={cut} skip={run === 2} o={mrnaO} />
				<Tag x={TAGX} y={TAGY} text="cut out before translation" at={K9.cut + 20} out={K9.middle} size={40} />
				{/* a change mid-intron, then at the cut signal */}
				<circle cx={ax} cy={ay + 12} r={9} fill={AMBER} opacity={mutMid} />
				<g opacity={vis(f, K9.signal, K9.noknown, 10)}>
					<rect x={sigX - 5} y={GY - 22} width={10} height={20} rx={3} fill={INK} />
					<RLab x={sigX - 10} y={GY - 90} text="cut signal" at={K9.signal + 4} anchor="end" size={30} color={INK} />
				</g>
				<circle cx={sigX} cy={GY - 34} r={9} fill={AMBER} opacity={mutSig} />
				<Protein x={PX} y={PY} bar={false} o={prog(f, K9.middle + 60, 12) * (1 - prog(f, K9.noknown, 12))} short={short} ring={short} />
				<TickS x={PX + 70} y={PY - 50} at={K9.nothing + 20} out={K9.signal + 30} />
				<Tag x={TAGX} y={TAGY} text="usually no effect" at={K9.nothing + 6} out={K9.signal + 30} size={40} />
				<Tag x={TAGX} y={TAGY} text="wrong cut: protein changes" at={K9.changes} out={K9.noknown} size={40} />
				<RLab x={(GX0 + regX('promo')[0]) / 2 + 60} y={800} text="no known job" at={K9.noknown} size={30} color={GREY_INK} />
				<RLab x={(GENE_X[1] + GX0 + GN * GP) / 2} y={800} text="no known job" at={K9.noknown + 6} size={30} color={GREY_INK} />
				<Tag x={gr(53)} y={650} text="often neutral" at={K9.neutral} size={40} anchor="middle" />
				{void K9.wrong}
			</Overlay>
		</>
	);
};

// ---------- 10. So, coding or non-coding? ----------
const K10 = cues(S('which-matters'), {which: 'which matters more', neither: 'Neither, as a rule', coding: 'A coding change can be silent', nc: 'a non-coding change can switch', counts: 'What counts', job: 'does a job'});
export const SceneWhichMatters: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, 4, 26));
	const L = 600, R = 1320, CY = 640;
	return (
		<>
			<Heading text="Coding or non-coding?" at={K10.which} size={60} />
			<Overlay>
				<g opacity={1 - 0.6 * sh}>
					<GeneMap s={lerp(1, 0.55, sh)} cx={960} cy={GY} dy={lerp(0, -400, sh)} promo={1} ctrl={1} />
				</g>
				{/* left: coding, but silent */}
				<g opacity={prog(f, K10.coding - 6, 14)}>
					<Band x1={L - 150} x2={L + 150} kind="warm" y={CY} gap={34} bright={1} />
					<SlimStrand x={L - 190} y={CY} n={14} pitch={28} gap={34} rung={i => (i === 7 ? {color: AMBER, w: 7} : undefined)} />
					<MiniChip x={L} y={CY - 60} text="same amino acid" size={32} />
				</g>
				<Tag x={L} y={CY + 130} text="coding, but silent" at={K10.coding + 10} out={K10.counts} anchor="middle" size={42} />
				{/* right: non-coding, but the gene is off */}
				<g opacity={prog(f, K10.nc - 6, 14)}>
					<Band x1={R - 70} x2={R + 70} kind="teal" y={CY} gap={34} />
					<SlimStrand x={R - 190} y={CY} n={14} pitch={28} gap={34} rung={i => (i === 7 ? {color: AMBER, w: 7} : undefined)} />
					<FillBar x={R - 90} y={CY - 80} w={180} h={26} p={lerp(1, 0.06, prog(f, K10.nc + 20, 24))} color="#7fa173" />
					<Sx x={R} y={CY - 96} text="protein made" size={26} color={INK_SOFT} hand anchor="middle" />
				</g>
				<Tag x={R} y={CY + 130} text="non-coding, but gene off" at={K10.nc + 16} out={K10.counts} anchor="middle" size={42} />
				<Sx x={960} y={930} text="ask what the stretch does, not whether it's translated" size={48} color={AMBER_INK} hand anchor="middle" at={K10.counts} />
				{void K10.neither}{void K10.job}{void INK}{void GTag}
			</Overlay>
		</>
	);
};
