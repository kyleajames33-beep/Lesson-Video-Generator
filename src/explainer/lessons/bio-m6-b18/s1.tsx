// M6 B18 scenes 1 to 4: bacteria making human insulin and cotton making an insect toxin (hook; the toolchain track
// sketches across the top); getting the right DNA first (introns recalled from b05, bacteria cannot remove them, an
// intron-free copy from mRNA or built from scratch, insulin's two chains); cut (a restriction enzyme finds its short
// sequence, its natural job against viruses, a staggered cut leaves sticky ends, the plasmid opened with the same
// enzyme); paste (ends pair, ligase seals the backbone nicks, recombinant DNA, the marker band).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {GTag} from '../bio-m6-b01/parts';
import {Brace, GreyCross, Tg} from '../bio-m6-b07/parts';
import {S} from './common';
import {PT} from './assets';
import {
	AMBER, AMBER_INK, Bact, Caterpillar, Chain, DP, DrawPath, Duplex, GREYT, GREY_INK, GeneIntrons, GeneSeg, INK, INK_SOFT, LigBlob, Overhang, PLATES, Pl, REBlob,
	RecRing, SlimStrand, SpliceStrip, Sx, TEAL, Track, clamp01, lerp, platePt, prog, ringPt, smooth, vis,
} from './parts';
import type {DPiece} from './parts';

const pp = platePt;
/** A bold term with a grey hand gloss under it. */
export const Term: React.FC<{x: number; y: number; term: string; gloss: string; at: number; out?: number; dim?: number; size?: number}> = ({x, y, term, gloss, at, out, dim = 0, size = 40}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o * (1 - 0.55 * clamp01(dim))}>
			<Sx x={x} y={y} text={term} size={size} color={INK} weight={800} />
			<Sx x={x} y={y + size * 1.05} text={gloss} size={size * 0.72} color={GREY_INK} hand />
		</g>
	);
};

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {insulin: 'make human insulin', poison: 'caterpillar poison', yet: 'Yet since the', makes: 'makes its own insect', both: 'Both carry DNA', species: 'from another species', cut: 'cut out a useful', join: 'join it into', get: 'get it into', make: 'make sure the', uses: 'actually uses it'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const b = {cx: 460, cy: 560, w: 560};
	const ring = pp(PLATES.bactP, b.cx, b.cy, b.w, PT.ring[0], PT.ring[1]);
	const kB = b.w / 1600;
	const cot = {cx: 1420, cy: 600, w: 440};
	const vial = {cx: 880, cy: 770, w: 100};
	const sketch = [prog(f, K1.cut, 12), prog(f, K1.cut + 8, 12), prog(f, K1.join, 12), prog(f, K1.get, 12), prog(f, K1.make, 12)].map(v => 0.6 * v * (1 - 0.4 * prog(f, K1.uses + 20, 20)));
	const ringGlow = vis(f, K1.both, K1.uses, 10);
	return (
		<>
			<Heading text="Cut, paste, put in, pick" at={K1.uses} size={64} />
			<Overlay>
				<Track n={5} sketch={sketch} />
				{/* bacteria and insulin */}
				<Pl p={PLATES.bactP} cx={b.cx} cy={b.cy} w={b.w} o={prog(f, 0, 14)} />
				<g opacity={1 - prog(f, K1.yet, 10)}><GreyCross x={790} y={430} at={K1.insulin + 10} s={30} /></g>
				<Pl p={PLATES.vial} cx={vial.cx} cy={vial.cy} w={vial.w} o={prog(f, K1.yet + 4, 12)} />
				{[0, 1, 2, 3].map(k => {
					const t = clamp01((f - K1.yet - 14 - k * 16) / 40);
					if (t <= 0 || t >= 1) return null;
					return <Chain key={k} x={lerp(720, vial.cx - 18, t)} y={lerp(600, vial.cy - 80, t) - Math.sin(t * Math.PI) * 60} n={3} r={6} gap={13} o={Math.sin(t * Math.PI)} />;
				})}
				<GTag x={b.cx} y={790} text="since 1982" at={K1.yet + 20} out={K1.makes} size={26} anchor="middle" />
				<circle cx={ring[0]} cy={ring[1]} r={58 * kB + 6} fill="none" stroke={AMBER} strokeWidth={6} opacity={ringGlow} />
				{/* cotton and its toxin */}
				<Pl p={PLATES.cotton} cx={cot.cx} cy={cot.cy} w={cot.w} o={prog(f, 4, 14)} />
				<Caterpillar x={1500} y={420} s={0.5} curl={prog(f, K1.makes + 8, 24)} o={prog(f, K1.poison, 12) * (1 - prog(f, K1.makes + 34, 14))} />
				<g opacity={1 - prog(f, K1.makes, 10)}><GreyCross x={1660} y={400} at={K1.poison + 10} s={30} /></g>
				<GTag x={cot.cx} y={880} text="Bt cotton" at={K1.makes + 12} out={K1.uses} size={26} anchor="middle" />
				<g opacity={vis(f, K1.both + 8, K1.uses, 12)}>
					<circle cx={1730} cy={760} r={78} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
					<rect x={1676} y={712} width={108} height={96} rx={18} fill="#e7f0d8" stroke="#6f8a4a" strokeWidth={3} />
					<GeneSeg x={1692} y={748} n={4} pitch={18} gap={14} lineW={3} />
				</g>
				<Brace x1={b.cx} x2={cot.cx} y={300} at={K1.species - 6} out={K1.uses} label="DNA from another species" size={34} />
				{void INK_SOFT}
			</Overlay>
		</>
	);
};

// ---------- 2. Get the right DNA first ----------
const K2 = cues(S('right-dna'), {first: 'First, you need', remember: 'Remember that most', introns: 'contain introns', cut: 'cut out of the', bact: "Bacteria can't do", scrambled: 'scrambled message', instead: 'Instead, scientists use', copied: "copied from the cell's", scratch: ['built from scratch', 1], insulin: 'For the first bacterial', chains: "insulin's two chains"});
export const SceneRightDna: React.FC = () => {
	const f = useCurrentFrame();
	const gx = 200, gy = 310;
	const into = smooth(prog(f, K2.bact + 10, 40));
	const bact = {cx: 1360, cy: 560, w: 420};
	const bactO = vis(f, K2.bact - 4, K2.instead + 20, 12);
	const synth = Math.ceil(prog(f, K2.scratch, 40, x => x) * 3) / 3;
	return (
		<>
			<Heading text="Get the right DNA first" at={4} size={56} />
			<Overlay>
				<Track n={5} active={0} o={prog(f, 0, 12)} />
				<Sx x={gx} y={gy - 26} text="gene (DNA)" size={24} color={GREY_INK} weight={700} at={K2.first + 10} />
				<GeneIntrons x={gx} y={gy} draw={prog(f, K2.first + 10, 30)} o={prog(f, K2.first + 10, 8)} />
				{/* recall cue: b05's intron cut, a grey thumbnail */}
				<g opacity={vis(f, K2.remember, K2.introns + 20, 10)}>
					<rect x={1480} y={250} width={340} height={110} rx={16} fill="#f1f1ef" stroke={GREYT} strokeWidth={2} />
					<g style={{filter: 'grayscale(1)'}} opacity={0.7}><SpliceStrip x={1520} y={316} draw={1} cut={prog(f, K2.remember + 10, 30)} pitch={14} /></g>
				</g>
				<Sx x={gx} y={430} text="mRNA" size={24} color={GREY_INK} weight={700} at={K2.introns} />
				<SpliceStrip x={gx} y={470} draw={prog(f, K2.introns, 26, x => x)} cut={prog(f, K2.cut + 10, 30)} />
				<Term x={800} y={330} term="introns" gloss="pieces cut out of the mRNA before it's read" at={K2.introns} dim={prog(f, K2.bact, 12)} />
				{/* bacteria cannot cut introns out: wrong protein */}
				<g opacity={bactO}>
					<Pl p={PLATES.bact} cx={bact.cx} cy={bact.cy} w={bact.w} />
					<g transform={`translate(${lerp(0, bact.cx - 120 - gx * 0.5, into)},${lerp(0, bact.cy - 6 - gy * 0.5, into)}) scale(${lerp(1, 0.5, into)})`} opacity={into > 0.01 ? 1 : 0}>
						<GeneIntrons x={gx} y={gy} />
					</g>
					<Chain x={bact.cx - 120} y={700} n={9} r={12} wrong={[3, 4, 6]} kink={1} o={prog(f, K2.scrambled - 10, 14)} />
				</g>
				<Tg x={1000} y={830} text="introns read as code: wrong protein" at={K2.scrambled + 10} out={K2.instead} size={36} />
				{/* intron-free DNA: copied from mRNA, or built from scratch */}
				{f >= K2.copied ? <g opacity={prog(f, K2.copied, 10)}><DrawPath d={`M${gx + 150},${490} L${gx + 150},${560}`} at={K2.copied} dur={10} color={INK_SOFT} width={3} dash="6 6" /></g> : null}
				<SlimStrand x={gx} y={580} n={12} pitch={30} gap={30} lineW={3.5} draw={prog(f, K2.copied + 8, 30)} o={prog(f, K2.copied + 8, 8)} rung={() => ({color: AMBER, w: 6})} />
				<Sx x={gx + 390} y={604} text="cDNA, made by reverse transcriptase" size={24} color={GREY_INK} hand at={K2.copied + 30} />
				<SlimStrand x={gx} y={710} n={12} pitch={30} gap={30} lineW={3.5} draw={synth} o={prog(f, K2.scratch, 8)} rung={() => ({color: AMBER, w: 6})} />
				<Sx x={gx + 390} y={734} text="built from scratch" size={24} color={GREY_INK} hand at={K2.scratch + 20} />
				<Tg x={gx} y={860} text="intron-free DNA: two ways" at={K2.scratch + 20} size={36} />
				{/* the first insulin: two chains built from scratch */}
				<g opacity={prog(f, K2.chains, 12)}>
					<GeneSeg x={1200} y={590} n={4} />
					<Sx x={1310} y={612} text="A chain" size={26} color={GREY_INK} hand />
					<GeneSeg x={1200} y={690} n={6} />
					<Sx x={1354} y={712} text="B chain" size={26} color={GREY_INK} hand />
				</g>
				<GTag x={1200} y={760} text="late 1970s: built from scratch" at={K2.chains + 14} size={26} />
				{void TEAL}{void Bact}
			</Overlay>
		</>
	);
};

// ---------- 3. Cut ----------
const K3 = cues(S('cut'), {re: 'restriction enzyme is', only: 'only at one particular', bact: 'Bacteria make these', viruses: 'invading viruses', many: 'Many of them cut', points: 'slightly different points', sticky: 'sticky ends, because', pair: 'pair with matching', open: 'open the plasmid', same: 'same enzyme, or', fit: "fit the gene's"});
export const DX0 = 200, DY0 = 500;
const GREYB = '#9a8f80';
const geneCol = (i: number) => (i >= 8 && i < 16 ? AMBER_INK : GREYB);
export const SceneCut: React.FC = () => {
	const f = useCurrentFrame();
	const cL = smooth(prog(f, K3.points + 6, 22)), cR = smooth(prog(f, K3.points + 30, 22));
	const flankO = 1 - prog(f, K3.open, 16);
	const pieces: DPiece[] = cL <= 0.001 ? [{top: [0, 24], bot: [0, 24], color: geneCol}] : [
		{top: [0, 4], bot: [0, 8], dx: -70 * cL, color: geneCol, o: flankO},
		...(cR <= 0.001 ? [{top: [4, 24], bot: [8, 24], color: geneCol} as DPiece] : [
			{top: [4, 16], bot: [8, 20], color: geneCol} as DPiece,
			{top: [16, 24], bot: [20, 24], dx: 70 * cR, color: geneCol, o: flankO} as DPiece,
		]),
	];
	const stick = vis(f, K3.sticky, K3.open, 10) * (0.5 + 0.5 * Math.sin((f - K3.sticky) / 4)) + vis(f, K3.fit, K3.fit + 60, 10);
	const glow = (i: number, s: 't' | 'b') => ((s === 't' && i >= 4 && i < 8) || (s === 'b' && i >= 16 && i < 20) ? stick : 0);
	// the enzyme slides to the site, cuts left, hops right, cuts
	const mid = DY0 + 28;
	const slideRE = smooth(prog(f, K3.re + 6, 40));
	const hop = smooth(prog(f, K3.points + 14, 14));
	const reX = lerp(lerp(120, DX0 + 6 * DP, slideRE), DX0 + 18 * DP, hop);
	const snap = (a: number) => (f >= a && f < a + 8 ? 0 : 0.6);
	const reOpen = f < K3.points ? 0.6 : Math.min(snap(K3.points + 4), snap(K3.points + 28));
	const reO = prog(f, K3.re, 10) * (1 - prog(f, K3.points + 54, 12));
	// the plasmid ring
	const R = {cx: 1500, cy: 560, r: 150};
	const top = ringPt(R.cx, R.cy, R.r, -90);
	const re2 = smooth(prog(f, K3.open + 2, 18));
	const ringGap = prog(f, K3.open + 22, 14);
	const ringStick = vis(f, K3.fit, K3.fit + 60, 10);
	return (
		<>
			<Heading text="Cut" at={4} size={56} />
			<Overlay>
				<Track n={5} active={1} o={prog(f, 0, 12)} />
				<Term x={DX0} y={330} term="restriction enzyme" gloss="cuts DNA at one short sequence" at={K3.re} dim={prog(f, K3.sticky, 12)} />
				<rect x={DX0 + 3 * DP} y={DY0 - 14} width={6 * DP} height={84} rx={14} fill="#fff3d9" stroke={AMBER} strokeWidth={2.5} opacity={vis(f, K3.only + 6, K3.points + 6, 10)} />
				<Sx x={DX0 + 6 * DP} y={DY0 + 104} text="recognition sequence" size={24} color={GREY_INK} hand anchor="middle" at={K3.only + 10} out={K3.points + 6} />
				<Duplex x={DX0} y={DY0} pieces={pieces} glow={glow} o={prog(f, 4, 14)} />
				<REBlob x={reX} y={mid} s={0.9} open={reOpen} o={reO} />
				{/* its natural job: chop up virus DNA */}
				<g opacity={vis(f, K3.bact, K3.many, 12)}>
					<rect x={1340} y={280} width={460} height={380} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
					<Pl p={PLATES.phage} cx={1440} cy={390} w={110} />
					<Bact cx={1620} cy={560} w={280} />
					{[0, 1, 2].map(k => {
						const chop = prog(f, K3.viruses + 8 + k * 6, 8);
						return <line key={k} x1={1520 + k * 46 - chop * (k - 1) * 10} y1={560 - 4 + chop * (k - 1) * 14} x2={1556 + k * 46 - chop * (k - 1) * 10} y2={560 - 4 + chop * (k - 1) * 14} stroke="#7a4a8c" strokeWidth={5} strokeLinecap="round" strokeDasharray={chop > 0.5 ? undefined : '0'} opacity={prog(f, K3.bact + 20, 10)} />;
					})}
					<REBlob x={lerp(1500, 1660, prog(f, K3.viruses, 24))} y={520} s={0.4} open={(f - K3.viruses) % 10 < 5 ? 0.1 : 0.6} o={vis(f, K3.viruses - 4, K3.viruses + 30, 6)} />
				</g>
				<GTag x={1350} y={690} text="its natural job: chop up virus DNA" at={K3.viruses + 10} out={K3.many} size={24} />
				<Tg x={DX0} y={700} text="staggered cut" at={K3.points + 40} out={K3.sticky} size={36} />
				<Term x={DX0} y={780} term="sticky ends" gloss="unpaired bases that can pair" at={K3.sticky} />
				{/* the plasmid opened with the same enzyme */}
				<RecRing cx={R.cx} cy={R.cy} r={R.r} gap={ringGap} marker={0} o={prog(f, K3.open - 6, 14)} />
				<REBlob x={top[0] + 40} y={lerp(top[1] - 140, top[1], re2)} s={0.6} open={f >= K3.open + 20 && f < K3.open + 28 ? 0 : 0.6} o={vis(f, K3.open + 2, K3.open + 40, 8)} />
				<Overhang x={top[0] - 4 * DP * 0.7 - 34} y={top[1] - 40} start={4} comp o={prog(f, K3.open + 30, 12)} glow={ringStick} s={0.7} />
				<Overhang x={top[0] + 34} y={top[1] - 40} start={16} o={prog(f, K3.open + 30, 12)} glow={ringStick} s={0.7} />
				<GTag x={R.cx} y={760} text="same enzyme, or matching ends" at={K3.same} size={26} anchor="middle" />
				{void K3.pair}{void TEAL}
			</Overlay>
		</>
	);
};

// ---------- 4. Paste ----------
const K4 = cues(S('paste'), {mix: 'Mix the gene', pair: 'pair up, base', weak: 'weak hydrogen bonds', ligase: 'DNA ligase is', seals: 'seals the backbone', good: 'for good', recomb: 'recombinant DNA', marker: 'a marker that'});
const topCol = (i: number) => (i < 4 || i >= 16 ? TEAL : AMBER_INK);
const botCol = (i: number) => (i < 8 || i >= 20 ? TEAL : AMBER_INK);
export const ScenePaste: React.FC = () => {
	const f = useCurrentFrame();
	const drop = smooth(prog(f, K4.mix + 10, 40));
	const joined = f >= K4.pair;
	const flick = f >= K4.weak && f < K4.ligase ? 0.45 + 0.35 * Math.sin((f - K4.weak) / 2.5) : 1;
	const pairO = (i: number) => ((i >= 4 && i < 8) || (i >= 16 && i < 20) ? prog(f, K4.pair + 4, 12) * flick : 1);
	const lx = (j: number) => DX0 + j * DP;
	const go1 = smooth(prog(f, K4.ligase + 6, 24)), go2 = smooth(prog(f, K4.seals + 18, 22));
	const seal1 = prog(f, K4.seals + 2, 10), seal2 = prog(f, K4.seals + 44, 10);
	const ligX = lerp(lerp(110, lx(6), go1), lx(18), go2);
	const nicks = [{i: 4, s: 't' as const, o: 1 - seal1}, {i: 8, s: 'b' as const, o: 1 - seal1}, {i: 16, s: 't' as const, o: 1 - seal2}, {i: 20, s: 'b' as const, o: 1 - seal2}];
	const pieces: DPiece[] = joined
		? [{top: [0, 24], bot: [0, 24], color: topCol, colorB: botCol}]
		: [
				{top: [0, 4], bot: [0, 8], dx: -80 * (1 - drop), color: () => TEAL},
				{top: [4, 16], bot: [8, 20], dy: -150 * (1 - drop), color: () => AMBER_INK},
				{top: [16, 24], bot: [20, 24], dx: 80 * (1 - drop), color: () => TEAL},
			];
	const fl = (a: number) => Math.max(0, Math.sin(clamp01((f - a) / 16) * Math.PI));
	const R = {cx: 1480, cy: 580, r: 170};
	const close = prog(f, K4.good, 14);
	const rot = 360 * smooth(prog(f, K4.recomb, 50));
	const nickGlow = vis(f, K4.weak + 10, K4.seals + 50, 8) * (0.5 + 0.5 * Math.sin((f - K4.weak) / 4));
	return (
		<>
			<Heading text="Paste" at={4} size={56} />
			<Overlay>
				<Track n={5} active={2} o={prog(f, 0, 12)} />
				<Sx x={DX0} y={DY0 - 40} text="the join, close up" size={24} color={GREY_INK} hand at={K4.mix} />
				<Duplex x={DX0} y={DY0} pieces={pieces} pairO={pairO} nicks={joined ? nicks : []} o={prog(f, 4, 14)} />
				{joined ? nicks.map((n, k) => (n.o > 0.05 ? <circle key={k} cx={lx(n.i)} cy={DY0 + (n.s === 't' ? 0 : 56)} r={11} fill="none" stroke={AMBER} strokeWidth={3} opacity={nickGlow * n.o} /> : null)) : null}
				{[lx(6), lx(18)].map((x, k) => {
					const v = fl(K4.seals + 2 + k * 42);
					return v > 0.01 ? <circle key={k} cx={x} cy={DY0 + 28} r={40 + 30 * v} fill={AMBER} opacity={0.35 * v} /> : null;
				})}
				<LigBlob x={ligX} y={DY0 + 28} s={1} squeeze={Math.max(fl(K4.seals + 2), fl(K4.seals + 44))} o={prog(f, K4.ligase, 10) * (1 - prog(f, K4.recomb, 12))} />
				<Tg x={DX0} y={700} text="ends pair" at={K4.pair + 10} out={K4.weak} size={36} />
				<Tg x={DX0} y={700} text="backbone still open" at={K4.weak + 10} out={K4.seals + 10} size={36} />
				<Term x={DX0} y={330} term="DNA ligase" gloss="seals the backbone" at={K4.ligase} dim={prog(f, K4.recomb, 12)} />
				<Term x={DX0} y={790} term="recombinant DNA" gloss="DNA joined from two sources" at={K4.recomb} />
				{/* the whole plasmid */}
				<RecRing cx={R.cx} cy={R.cy} r={R.r} gap={1 - close} insert={close} marker={prog(f, 4, 14)} markerLit={vis(f, K4.marker, K4.marker + 80, 10)} rot={rot} o={prog(f, K4.mix, 14)} />
				{f >= K4.mix + 20 ? <g opacity={0.6 * (1 - prog(f, K4.recomb, 12))}>
					<DrawPath d={`M${lx(24) + 10},${DY0 - 6} L${R.cx - 40},${R.cy - R.r - 10}`} at={K4.mix + 20} dur={14} color={GREYT} width={2} dash="5 6" />
					<DrawPath d={`M${lx(24) + 10},${DY0 + 62} L${R.cx + 40},${R.cy - R.r - 10}`} at={K4.mix + 24} dur={14} color={GREYT} width={2} dash="5 6" />
				</g> : null}
				<Sx x={R.cx - R.r - 30} y={R.cy + R.r + 64} text="marker: antibiotic resistance" size={26} color={GREY_INK} hand at={K4.marker + 6} />
				{void AMBER}{void INK_SOFT}
			</Overlay>
		</>
	);
};
