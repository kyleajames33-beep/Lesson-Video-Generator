// M6 B03 scenes 4 to 6: missense (the middle base, sickle cell recalled, active site against a similar amino acid
// far away), nonsense (beta-globin codon 39 becomes a stop; the ribosome halts; too short to fold; beta thalassaemia)
// and the frameshift (one base deleted, the frame window rides on and the brackets regroup codon by codon).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, PlateB, prog} from '../bio-m5-b13/shared';
import {MiniFold, PocketBlob} from '../bio-m5-b07/shared';
import {kf} from '../chem-m5-c03/common';
import {FONT_HAND} from '../../kit';
import {AMBER, AMBER_INK, BIO_INK, BaseSwap, GTag, INK_SOFT, Lbl} from '../bio-m6-b01/parts';
import {S} from './common';
import {SICKLE_HALF} from './assets';
import {HA, X3} from './s1';
import {
	AABead, BY, BeadSwap, Beads, Brk, CG, ChartCard, Codons, DNA_CALL_Y, DY, DnaRow, FrameWin, GhostBead, HbB, LP, Let, LetSwap, MRNA_INK, MY, PAD, RowLabels, Ribo,
	SplitStrand, StopBar, Term, aas, brkSpan, cX, clamp01, dnaX0, lerp, lx, rungAt, vis,
} from './parts';

// ---------- 4. Missense ----------
const K4 = cues(S('missense'), {middle: 'the middle base', becomes: 'G A G becomes G U G', valine: 'The chart gives valine', charge: 'carries a charge', water: 'avoids water', missense: 'missense mutation', seen: "You've seen where", two: 'two copies', notEvery: 'not every missense change', where: 'where the amino acid sits', how: 'how different'});
export const SceneMissense: React.FC = () => {
	const f = useCurrentFrame();
	const sw = K4.becomes + 64;
	const val = K4.valine + 26;
	const beadXs = [0, 1, 2].map(k => cX(X3, k));
	const vx = beadXs[1];
	return (
		<>
			<Heading text="Change the middle base" at={4} size={56} />
			<Overlay>
				<RowLabels o={0} />
				<Beads xs={beadXs} aa={aas(HA)} bo={k => (k === 1 ? 0 : 1)} lo={() => 1} />
				<BeadSwap x={vx} from="Glu" to="Val" at={val} />
				{/* the old bead, ghosted beside it, and the two properties */}
				<g opacity={0.75 * vis(f, K4.charge - 6, K4.missense, 12)}><AABead x={vx - 110} y={245} aa="Glu" r={26} /></g>
				<Lbl x={vx - 150} y={256} text="charged" size={34} color={INK_SOFT} anchor="end" at={K4.charge} out={K4.missense} />
				<Lbl x={vx + 46} y={264} text="avoids water" size={34} color={INK_SOFT} at={K4.water} out={K4.missense} />
				<Codons x0={X3} y={MY} codons={HA} nums={[5, 6, 7]} ends hot={k => (k === 1 ? prog(f, K4.middle, 12) : 0)} dim={k => (k === 1 ? 0 : prog(f, K4.middle, 12))} letterO={i => (i === 4 ? 0 : 1)} />
				<LetSwap x={cX(X3, 1)} y={MY} from="A" to="U" at={sw} />
				<DnaRow x0={X3} n={9} hot={f >= K4.middle ? [4] : []} />
				<BaseSwap x={rungAt(X3, 4)} y={DNA_CALL_Y} from="A" to="T" show={K4.middle + 10} at={sw} below len={16} size={28} />
				<ChartCard x={1060} y={300} rows={['GAG', 'GUG']} at={K4.becomes} out={val + 40} hi={{GUG: prog(f, K4.valine + 10, 10)}} />
				<Term x={140} y={930} term="missense" gloss="a different amino acid" at={K4.missense} out={K4.notEvery} />
				{/* where this one leads */}
				<g opacity={vis(f, K4.seen, K4.notEvery, 14)}><PlateB p={SICKLE_HALF} cx={1580} cy={500} w={250} /></g>
				<Lbl x={1580} y={300} text="two copies" size={38} anchor="middle" at={K4.two} out={K4.notEvery} />
				{/* does every missense change matter? */}
				<PocketBlob cx={1250} cy={400} R={82} lip="Val" lipRing={1} o={prog(f, K4.notEvery + 10, 14)} />
				<Lbl x={1390} y={388} text="in the active site:" size={36} at={K4.where} />
				<Lbl x={1390} y={434} text="likely to matter" size={36} color={AMBER_INK} at={K4.where + 6} />
				<PocketBlob cx={1250} cy={700} R={82} far="Thr" farRing={1} o={prog(f, K4.where + 20, 14)} />
				<Lbl x={1390} y={688} text="similar amino acid," size={36} at={K4.how} />
				<Lbl x={1390} y={734} text="away from the site: may not" size={36} color={BIO_INK} at={K4.how + 6} />
			</Overlay>
		</>
	);
};

// ---------- 5. Nonsense ----------
const K5 = cues(S('nonsense'), {c39: 'In codon thirty-nine', cag: 'C A G codes for glutamine', change: 'Change the C to U', stopc: 'a stop codon', gone: 'U Are Gone', ribo: 'The ribosome stops there', cut: 'cut short after', fold: "can't fold", nonsense: 'nonsense mutation', two: 'two copies'});
const M5 = ['UGG', 'ACC', 'CAG', 'AGG', 'UUC'];
const X5 = 258;
export const SceneNonsense: React.FC = () => {
	const f = useCurrentFrame();
	const slideIn = (1 - prog(f, 0, 30)) * 260;
	const sw = K5.change + 30;
	const beadXs = M5.map((_, k) => cX(X5, k));
	const gone = prog(f, K5.ribo + 30, 14);
	const rk = kf(f, [[K5.ribo - 34, 0], [K5.ribo + 24, 2]]);
	const rx = cX(X5, rk);
	const ribO = vis(f, K5.ribo - 40, K5.nonsense, 12);
	const fo = vis(f, K5.fold - 6, K5.nonsense, 14);
	return (
		<>
			<Heading text="Codon thirty-nine" at={4} size={56} />
			<Overlay>
				<g transform={`translate(${slideIn},0)`}>
					<Beads xs={beadXs} aa={aas(M5)} bo={k => (k < 2 ? 1 : 1 - gone)} lo={k => (k < 1 ? 1 : 1 - gone)} ring={k => (k === 2 ? vis(f, K5.cag, K5.ribo, 10) : 0)} />
					{[2, 3, 4].map(k => <GhostBead key={k} x={beadXs[k]} o={gone} />)}
					<StopBar x={(beadXs[1] + beadXs[2]) / 2} o={prog(f, K5.ribo + 34, 10)} />
					<Ribo id="b03-s5" x={rx} o={ribO} />
					<FrameWin x={rx} o={ribO} />
					<Codons x0={X5} y={MY} codons={M5} nums={[37, 38, 39, 40, 41]} ends hot={k => (k === 2 ? prog(f, K5.cag, 12) : 0)} letterO={i => (i === 6 ? 0 : 1)} />
					<LetSwap x={cX(X5, 2) - LP} y={MY} from="C" to="U" at={sw} />
					<DnaRow x0={X5} n={15} hot={f >= K5.change ? [6] : []} />
					<BaseSwap x={rungAt(X5, 6)} y={DNA_CALL_Y} from="C" to="T" show={K5.change + 10} at={sw} below len={16} size={28} />
				</g>
				<ChartCard x={1230} y={300} w={460} rows={['CAG', 'UAG']} at={K5.change} out={K5.ribo} hi={{UAG: prog(f, K5.stopc, 10)}} note={{codon: 'UAG', text: 'U Are Gone', at: K5.gone}} />
				<Lbl x={(beadXs[1] + beadXs[2]) / 2} y={268} text="38 amino acids, then stop" size={36} color={INK_SOFT} anchor="middle" at={K5.cut} out={K5.fold + 10} />
				{/* too short to fold */}
				<g opacity={fo}>
					<MiniFold x={1330} y={420} fold={0.35 * prog(f, K5.fold, 20)} n={4} />
					<g opacity={0.5}><MiniFold x={1620} y={420} fold={1} n={14} /></g>
				</g>
				<Lbl x={1330} y={540} text="too short to fold" size={36} color={AMBER_INK} anchor="middle" at={K5.fold + 10} out={K5.nonsense} />
				<GTag x={1620} y={510} text="normal beta chain" at={K5.fold + 16} out={K5.nonsense} size={24} anchor="middle" />
				<Term x={140} y={930} term="nonsense" gloss="a stop codon, chain cut short" at={K5.nonsense} />
				<HbB x={1480} y={450} s={1.9} empty={prog(f, K5.two + 10, 16)} o={prog(f, K5.two - 6, 12)} />
				<Lbl x={1480} y={610} text="two copies: no normal beta chains" size={36} anchor="middle" at={K5.two + 8} />
			</Overlay>
		</>
	);
};

// ---------- 6. Frameshift ----------
const K6 = cues(S('frameshift'), {msg: 'short message', five: 'codes for five amino acids', del: 'delete one base', second: 'the second codon', reads: 'reads in threes', every: 'every codon from there on', stop: 'A stop codon often', fs: "That's a frameshift", ins: 'Inserting one base'});
export const M6 = 'AUGAAACCUGGAUUU';
export const X6 = 578;
export const D6 = 5;
const NEW6 = M6.slice(0, D6) + M6.slice(D6 + 1); // AUGAACCUGGAUUU
export const SceneFrameshift: React.FC = () => {
	const f = useCurrentFrame();
	const delAt = K6.second + 12;
	const T = [K6.reads, K6.every, K6.every + 30, K6.every + 60, K6.every + 90];
	const s = prog(f, delAt + 14, 16);
	const rg = (k: number) => (k === 0 ? 1 : prog(f, T[k] - 4, 10));
	const orig = (j: number) => (j < D6 ? j : j + 1);
	const xOf = (j: number) => X6 + lerp(orig(j), j, s) * LP + lerp(Math.floor(orig(j) / 3), Math.floor(j / 3), rg(Math.floor(j / 3))) * CG;
	const kWin = kf(f, [[K6.reads, 0], [T[1], 1], [T[2], 2], [T[3], 3], [T[4], 4]]);
	const ribX = X6 + (3 * kWin + 1) * LP + kWin * CG;
	const ribO = vis(f, K6.reads - 6, K6.fs, 12);
	const up = prog(f, K6.reads - 10, 20);
	const oldXs = [0, 1, 2, 3, 4].map(k => cX(X6, k));
	const newAA = ['Met', 'Asn', 'Leu', 'Asp'];
	const newXs = [0, 1, 2, 3].map(k => cX(X6, k));
	const appear = (k: number) => (k === 0 ? prog(f, K6.reads + 6, 12) : prog(f, T[k] + 4, 12));
	const lift = prog(f, delAt, 16);
	const insO = prog(f, K6.ins - 4, 12);
	return (
		<>
			<Heading text="Delete one base" at={4} size={56} />
			<Overlay>
				{/* the normal chain moves up and greys; the new chain is built under it */}
				<Beads xs={oldXs} y={lerp(BY, 255, up)} aa={aas(['AUG', 'AAA', 'CCU', 'GGA', 'UUU'])} r={lerp(30, 24, up)} grey={up > 0.5} o={lerp(1, 0.75, up)} />
				<Lbl x={X6 - 76} y={lerp(BY, 255, up) + 12} text="normal" size={34} color={INK_SOFT} anchor="end" at={K6.five} out={K6.fs} />
				{up > 0.4 ? <Beads xs={newXs} aa={newAA} bo={appear} lo={k => appear(k + 1)} ring={k => (k > 0 ? 1 : 0)} /> : null}
				<GTag x={newXs[3] + 60} y={BY - 22} text="often an early stop codon" at={K6.stop} out={K6.fs} size={26} />
				<Ribo id="b03-s6" x={ribX} o={ribO} />
				<FrameWin x={ribX} o={ribO} />
				{/* brackets: the first codon never changes; old ones go, new ones form as the window reaches them */}
				{[1, 2, 3, 4].map(k => { const [a, b] = brkSpan(X6, k); return <Brk key={'o' + k} x1={a} x2={b} y={MY + 16} o={1 - prog(f, delAt + 4, 10)} />; })}
				{[0, 1, 2, 3].map(k => { const [a, b] = brkSpan(X6, k); return <Brk key={'n' + k} x1={a} x2={b} y={MY + 16} o={rg(k)} color={k > 0 && vis(f, T[k], T[k] + 40, 8) > 0.5 ? AMBER : '#c9a58f'} w={k > 0 && vis(f, T[k], T[k] + 40, 8) > 0.5 ? 4.5 : 3} />; })}
				<text x={X6 - LP * 0.95} y={MY - 6} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 28}} fill={MRNA_INK}>5'</text>
				<text x={xOf(NEW6.length - 1) + LP * 0.95} y={MY - 6} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 28}} fill={MRNA_INK}>3'</text>
				{NEW6.split('').map((ch, j) => {
					const k = Math.floor(j / 3);
					const fl = k > 0 && k < 4 ? vis(f, T[k], T[k] + 40, 8) : 0;
					return <Let key={j} x={xOf(j)} y={MY} ch={ch} color={fl > 0.5 ? AMBER_INK : MRNA_INK} />;
				})}
				<Let x={lx(X6, D6)} y={MY - 70 * lift} ch="A" color={AMBER_INK} o={f < delAt - 30 ? 1 : 1 - clamp01((lift - 0.4) / 0.6)} />
				{/* DNA: the matching rung leaves */}
				{f < delAt ? <DnaRow x0={X6} n={15} band={0} /> : <SplitStrand x={dnaX0(X6)} y={DY} n={15 + 2 * PAD} k={PAD + D6} mode="del" t={lift} t2={prog(f, delAt + 14, 16)} o={1 - insO} />}
				<Term x={140} y={940} term="frameshift" gloss="the reading frame shifts: every codon after it is regrouped" at={K6.fs} size={46} />
				<InsertGhost at={K6.ins} y={800} />
			</Overlay>
		</>
	);
};
/** The quick insertion replay: one amber letter slides in and every bracket after it regroups. */
const InsertGhost: React.FC<{at: number; y: number}> = ({at, y}) => {
	const f = useCurrentFrame();
	const o = prog(f, at - 4, 12);
	if (o <= 0.01) return null;
	const lp = 32, cg = 20, size = 34, x0 = 640, I = 5;
	const s = prog(f, at + 6, 14), drop = prog(f, at + 12, 12), rg = prog(f, at + 28, 14);
	const letters = M6.slice(0, I) + 'G' + M6.slice(I);
	const orig = (j: number) => (j < I ? j : j - 1);
	const xOf = (j: number) => {
		if (j === I) return x0 + I * lp + lerp(1, Math.floor(I / 3), rg) * cg;
		return x0 + lerp(orig(j), j, j > I ? s : 0) * lp + lerp(Math.floor(orig(j) / 3), Math.floor(j / 3), rg) * cg;
	};
	return (
		<g opacity={o}>
			{[0, 1, 2, 3, 4].map(k => { const [a, b] = brkSpan(x0, k, lp, cg); return <Brk key={'o' + k} x1={a} x2={b} y={y + 12} o={k === 0 ? 1 : 1 - rg} w={2.5} />; })}
			{[1, 2, 3, 4].map(k => { const [a, b] = brkSpan(x0, k, lp, cg); return <Brk key={'n' + k} x1={a} x2={b} y={y + 12} o={rg} color={AMBER} w={3.5} />; })}
			{letters.split('').map((ch, j) => (j === I
				? <Let key={j} x={xOf(j)} y={y - 40 * (1 - drop)} ch={ch} size={size} color={AMBER_INK} o={drop} />
				: <Let key={j} x={xOf(j)} y={y} ch={ch} size={size} color={j > I && rg > 0.5 ? AMBER_INK : MRNA_INK} />))}
			<Lbl x={x0 + 16 * lp + 5 * cg + 30} y={y} text="insertion: same problem" size={36} color={AMBER_INK} at={at + 30} />
		</g>
	);
};
void BIO_INK; void DY;
