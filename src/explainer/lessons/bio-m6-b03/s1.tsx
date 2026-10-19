// M6 B03 scenes 1 to 3 on the reading board: three single-base changes in beta-globin (hook), point mutation and its
// three processes (demonstrated on the DNA strand, then the ribosome reads in threes), and the silent substitution.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Chip, Heading, Overlay, PlateB, Sx, prog} from '../bio-m5-b13/shared';
import {chipW} from '../bio-m5-b06b/shared';
import {AMBER_INK, BIO_INK, BaseSwap, GTag, INK_SOFT, Lbl} from '../bio-m6-b01/parts';
import {S} from './common';
import {SICKLE_HALF} from './assets';
import {
	BY, BeadSwap, Beads, ChartCard, Codons, DNA_CALL_Y, DY, DnaRow, FrameWin, GhostBead, HbB, LP, LetSwap, MY, PAD, PD, RowLabels, Ribo, SplitStrand, StopBar, Term, TickS,
	aas, cX, dnaX0, lerp, rungAt, vis,
} from './parts';

// ---------- shared hook pieces ----------
export const HA = ['CCU', 'GAG', 'GAG'];
export const HB = ['ACC', 'CAG', 'AGG'];
export const CHIPS = ['same amino acid', 'one amino acid swapped', 'chain cut short'];
const CS = 34;
export const chipXs = (cx = 960, gap = 30) => {
	const ws = CHIPS.map(t => chipW(t, CS));
	const tot = ws.reduce((a, b) => a + b, 0) + gap * (CHIPS.length - 1);
	let x = cx - tot / 2;
	return ws.map(w => { const x0 = x; x += w + gap; return x0; });
};
/** A result chip that drops into its slot. */
export const DropChip: React.FC<{i: number; at: number; y?: number; out?: number; cx?: number}> = ({i, at, y = 860, out, cx}) => {
	const f = useCurrentFrame();
	const d = (1 - prog(f, at, 16)) * -46;
	return <g transform={`translate(0,${d})`}><Chip x={chipXs(cx)[i]} y={y} text={CHIPS[i]} at={at} out={out} size={CS} /></g>;
};

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {sixth: 'sixth codon', sickle: 'sickle cell disease', diff: 'Change a different base', same: 'that same codon', stays: 'stays the same', c39: 'codon thirty-nine', stops: 'the chain stops partway', beta: 'beta thalassaemia', every: 'Every one of these', why: 'So why'});
const HX = 646;
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const sl = prog(f, K1.c39 - 6, 26);
	const xa = HX, xb = HX;
	void PD;
	const a1 = K1.sixth + 12, b1 = K1.sixth + 30, a2 = K1.same + 12, a3 = K1.c39 + 20;
	const hotA = vis(f, K1.sixth, K1.c39, 10);
	const dnaHotA = f >= K1.sixth && f < K1.diff ? [4] : f >= K1.same ? [5] : [];
	const beadXs = [0, 1, 2].map(k => cX(HX, k));
	const gone = prog(f, K1.stops, 14);
	return (
		<>
			<Heading text="One base, different effects" at={K1.why + 34} size={60} />
			<Overlay>
				<RowLabels o={prog(f, 6, 14)} />
				{/* board A: codons 5 to 7 */}
				<g opacity={1 - sl} transform={`translate(${-700 * sl},0)`}>
					<Beads xs={beadXs} aa={aas(HA)} o={prog(f, 14, 14)} bo={k => (k === 1 ? 0 : 1)} lo={() => 1} />
					<BeadSwap x={beadXs[1]} from="Glu" to="Val" at={b1} out={K1.diff} />
					<TickS x={beadXs[1] + 44} y={BY - 34} at={K1.stays} out={K1.c39} />
					<Codons x0={xa} y={MY} codons={HA} nums={[5, 6, 7]} hot={k => (k === 1 ? hotA : 0)} letterO={i => (i === 4 || i === 5 ? 0 : 1)} o={prog(f, 4, 14)} ends />
					<LetSwap x={cX(xa, 1)} y={MY} from="A" to="U" at={a1} out={K1.diff} o={prog(f, 4, 14)} />
					<LetSwap x={cX(xa, 1) + LP} y={MY} from="G" to="A" at={a2} o={prog(f, 4, 14)} />
					<DnaRow x0={xa} n={9} hot={dnaHotA} o={prog(f, 10, 14)} draw={prog(f, 10, 30)} />
					<g opacity={1 - prog(f, K1.diff, 10)}><BaseSwap x={rungAt(xa, 4)} y={DNA_CALL_Y} from="A" to="T" show={K1.sixth} at={a1} below len={16} size={28} /></g>
					<g opacity={prog(f, K1.diff + 10, 10)}><BaseSwap x={rungAt(xa, 5)} y={DNA_CALL_Y} from="G" to="A" show={K1.same - 4} at={a2} below len={16} size={28} /></g>
					<Lbl x={rungAt(xa, 8) + 70} y={DY + 32} text="beta-globin gene" size={30} color={BIO_INK} at={16} out={K1.sixth} />
					<Lbl x={beadXs[1]} y={268} text="same amino acid" size={36} color={BIO_INK} anchor="middle" at={K1.stays} out={K1.c39} />
				</g>
				{/* board B: codons 38 to 40 */}
				<g opacity={sl} transform={`translate(${700 * (1 - sl)},0)`}>
					<Beads xs={beadXs} aa={aas(HB)} bo={k => (k === 0 ? 1 : 1 - gone)} lo={k => (k === 0 ? 1 - gone : 1 - gone)} ring={k => (k === 1 ? vis(f, a3, K1.stops, 10) : 0)} />
					{[1, 2].map(k => <GhostBead key={k} x={beadXs[k]} o={gone} />)}
					<StopBar x={(beadXs[0] + beadXs[1]) / 2} o={prog(f, K1.stops + 6, 10)} />
					<Codons x0={xb} y={MY} codons={HB} nums={[38, 39, 40]} hot={k => (k === 1 ? 1 : 0)} letterO={i => (i === 3 ? 0 : 1)} ends />
					<LetSwap x={cX(xb, 1) - LP} y={MY} from="C" to="U" at={a3} />
					<DnaRow x0={xb} n={9} hot={[3]} />
					<BaseSwap x={rungAt(xb, 3)} y={DNA_CALL_Y} from="C" to="T" show={K1.c39 + 10} at={a3} below len={16} size={28} />
					<Lbl x={(beadXs[0] + beadXs[1]) / 2} y={268} text="chain stops here" size={36} color={INK_SOFT} anchor="middle" at={K1.stops + 10} out={K1.every} />
				</g>
				{/* the real outcomes, at the right */}
				<g opacity={vis(f, K1.sickle - 10, K1.diff, 12)}><PlateB p={SICKLE_HALF} cx={1520} cy={460} w={250} /></g>
				<Lbl x={1520} y={670} text="sickle cell disease" size={36} anchor="middle" at={K1.sickle} out={K1.diff} />
				<HbB x={1520} y={460} s={1.9} empty={prog(f, K1.beta + 10, 16)} o={vis(f, K1.beta - 8, K1.every, 12)} />
				<Lbl x={1520} y={620} text="beta thalassaemia" size={36} anchor="middle" at={K1.beta} out={K1.every} />
				{/* result chips */}
				<DropChip i={1} at={K1.diff} />
				<DropChip i={0} at={K1.c39} />
				<DropChip i={2} at={K1.every} />
				<Sx x={960} y={800} text="?" size={110} color={AMBER_INK} weight={800} anchor="middle" at={K1.why} out={K1.why + 40} />
			</Overlay>
		</>
	);
};

// ---------- 2. Point mutation: three ways ----------
const K2 = cues(S('point-mutation'), {pm: 'point mutation', change: 'a change to one base', three: 'three ways', swaps: 'swaps one base', adds: 'adds a base', removes: 'removes one', copy: 'copying mistakes', remember: 'Remember', codons: 'codons of three', start: 'starting at the start codon', what: 'what does the change do'});
const M2 = ['AUG', 'AAA', 'CCU', 'GGA', 'UUU'];
const X2 = 578;
export const ScenePointMutation: React.FC = () => {
	const f = useCurrentFrame();
	const insOn = f >= K2.adds - 8 && f < K2.removes - 8;
	const delOn = f >= K2.removes - 8 && f < K2.removes + 84;
	const tIns = prog(f, K2.adds, 12) * (1 - prog(f, K2.removes - 26, 12));
	const t2Ins = prog(f, K2.adds + 10, 10) * (1 - prog(f, K2.removes - 26, 12));
	const lift = prog(f, K2.removes + 4, 16), close = prog(f, K2.removes + 16, 14);
	const back = prog(f, K2.removes + 62, 14);
	const sx = dnaX0(X2), n = 15 + 2 * PAD;
	const rib = lerp(cX(X2, 0), cX(X2, 1), prog(f, K2.start + 24, 20));
	const ribO = prog(f, K2.codons - 6, 14);
	return (
		<>
			<Heading text="Point mutation" at={K2.pm} size={64} out={K2.remember} />
			<Overlay>
				<Lbl x={100} y={238} text="a change to one or a few bases" size={40} color={BIO_INK} at={K2.change} out={K2.remember} />
				<RowLabels o={1 - prog(f, K2.remember, 16)} beads={false} />
				<Ribo id="b03-s2" x={rib} o={ribO} />
				<FrameWin x={rib} o={ribO} />
				<Codons x0={X2} y={MY} codons={M2} ends hot={k => vis(f, K2.what + k * 8, K2.what + k * 8 + 16, 6)} />
				{/* the DNA strand, with the three demonstrations */}
				{!insOn && !delOn ? <DnaRow x0={X2} n={15} band={0} hot={f >= K2.swaps && f < K2.adds - 10 ? [7] : []} /> : null}
				{insOn ? <SplitStrand x={sx} y={DY} n={n} k={PAD + 9} mode="ins" t={tIns} t2={t2Ins} /> : null}
				{delOn ? (
					<>
						<SplitStrand x={sx} y={DY} n={n} k={PAD + 4} mode="del" t={lift} t2={close} o={1 - back} />
						<DnaRow x0={X2} n={15} band={0} o={back} />
					</>
				) : null}
				<g opacity={vis(f, K2.swaps - 4, K2.adds - 16, 10)}><BaseSwap x={rungAt(X2, 7)} y={DNA_CALL_Y} from="C" to="G" show={K2.swaps} at={K2.swaps + 12} below len={16} size={28} /></g>
				<Lbl x={rungAt(X2, 7)} y={830} text="substitution" size={40} color={AMBER_INK} anchor="middle" at={K2.swaps + 14} out={K2.adds - 4} />
				<Lbl x={rungAt(X2, 8) + PD / 2} y={830} text="insertion" size={40} color={AMBER_INK} anchor="middle" at={K2.adds + 14} out={K2.removes - 4} />
				<Lbl x={rungAt(X2, 4)} y={830} text="deletion" size={40} color={AMBER_INK} anchor="middle" at={K2.removes + 14} out={K2.removes + 56} />
				{['substitution', 'insertion', 'deletion'].map((t, i) => <Lbl key={t} x={1500} y={300 + i * 52} text={t} size={38} color={INK_SOFT} at={K2.removes + 56 + i * 4} out={K2.remember} />)}
				<GTag x={960} y={800} text="b02: base analogues, chemicals between bases" at={K2.copy} out={K2.remember} size={28} anchor="middle" />
			</Overlay>
		</>
	);
};

// ---------- 3. Silent ----------
const K3 = cues(S('silent'), {start: 'Start with substitutions', changes: 'changes that codon', more: 'more than one codon', third: 'only in the third base', becoming: 'G A G becoming G A A', glu: 'still codes for glutamate', silent: 'silent mutation', bseq: 'The base sequence changed', didnt: "didn't"});
export const X3 = 426;
export const SceneSilent: React.FC = () => {
	const f = useCurrentFrame();
	const sw = K3.becoming + 66;
	const beadXs = [0, 1, 2].map(k => cX(X3, k));
	const dim = prog(f, K3.changes, 14);
	return (
		<>
			<Heading text="Substitutions" at={K3.start} size={60} />
			<Overlay>
				<RowLabels o={1 - prog(f, 24, 20)} />
				<Beads xs={beadXs} aa={aas(HA)} />
				<TickS x={beadXs[1] + 44} y={BY - 34} at={K3.glu} />
				<Codons x0={X3} y={MY} codons={HA} nums={[5, 6, 7]} ends dim={k => (k === 1 ? 0 : dim)} hot={k => (k === 1 ? dim : 0)} letterO={i => (i === 5 ? 0 : 1)} />
				<LetSwap x={cX(X3, 1) + LP} y={MY} from="G" to="A" at={sw} />
				<DnaRow x0={X3} n={9} hot={f >= K3.becoming ? [5] : []} />
				<BaseSwap x={rungAt(X3, 5)} y={DNA_CALL_Y} from="G" to="A" show={K3.becoming + 30} at={sw} below len={16} size={28} />
				<ChartCard x={1180} y={300} rows={['GAA', 'GAG']} at={K3.more} out={K3.silent + 60} amberAt={K3.more + 24} hi={{GAA: vis(f, sw + 10, K3.silent + 50, 10)}} />
				<Lbl x={1180} y={520} text="third base often doesn't matter" size={36} color={AMBER_INK} at={K3.third} out={K3.silent} />
				<Lbl x={1180} y={470} text="bases: changed" size={48} color={AMBER_INK} at={K3.bseq} />
				<Lbl x={1180} y={545} text="amino acids: same" size={48} color={BIO_INK} at={K3.didnt} />
				<Term x={140} y={930} term="silent" gloss="same amino acid" at={K3.silent} />
			</Overlay>
		</>
	);
};
