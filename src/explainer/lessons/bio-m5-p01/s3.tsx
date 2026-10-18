// P01 (Biology practical) scenes 7 to 9: transcription on the template strand (the gene unzips, yellow cards seat with
// U opposite every A, the strip peels off and the DNA closes unchanged), translation through the card ribosome (the
// window shows one codon, tRNA cards seat by their tabs, beads clip into a chain, no card fits the stop codon), and the
// results table (codon, anticodon, amino acid; codon chart rings; beads under their codons; one changed card).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AAS, AA_BEAD, AMBER, AMBER_INK, ANTIS, Bench, BENCH, CC, CH, CODING, CODONS, CZ, ColourKey, CodonMini, CRow, DataTable, DrawPath, FLASH_I, Fade, GREYT, GreyTag, HB,
	Heading, INK, INK_SOFT, MRNA, NCard, PITCH, Overlay, PaperRibo, PopBead, QMark, QUESTION, Rail, S, Snap, SpanBracket, StrandArrow, Sx, TEAL, TEMPLATE, Tick,
	TrnaCard, beadPitch, lerp, prog, pulse, riboWindow, trnaCup, trnaEdgeY, trnaH, trnaWForPitch,
} from './shared';
import {LX0} from './s1';

const colX = (i: number) => LX0 + i * PITCH;
const X2 = LX0 + 11 * PITCH + 35;

// ---------- 7. Step 4: model transcription ----------
const K7 = cues(S('transcribe'), {
	step: 'Step four switches', poly: 'making a polypeptide', unzip: 'Unzip the whole gene', template: 'use only the template strand', yellow: 'Build an RNA strand from yellow cards',
	ut: 'U instead of T', every: 'a yellow U sits opposite every A', peel: 'peel the yellow strand off', close: 'close the DNA back up', mrna: 'messenger RNA', unchanged: 'the gene itself is unchanged',
});
export const DNA7 = 330, MR7 = 640;
export const SceneTranscribeP01: React.FC = () => {
	const f = useCurrentFrame();
	const op = (i: number) => prog(f, K7.unzip + 4 + i * 2, 16) * (1 - prog(f, K7.close + i * 2, 16));
	const yIn = (i: number) => K7.yellow + 4 + i * 7;
	const peel = prog(f, K7.peel, 26);
	const STACK: [number, number] = [1470, 860];
	const yY = lerp(DNA7 + CH, MR7, peel);
	const enter = prog(f, 0, 20);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={4} at={K7.step} />
				<Bench />
				<g opacity={enter}>
					<CRow x0={LX0} y={DNA7} face="down" letters={CODING} c="blue" card={i => ({dy: -30 * op(i)})} tape={() => 1} o={1 - 0.55 * prog(f, K7.template, 12) * (1 - prog(f, K7.close, 12))} />
					<CRow x0={LX0} y={DNA7 + 2 * CH} face="up" letters={TEMPLATE} c="green" card={i => ({dy: CH * op(i), glow: pulse(f, K7.template + 6, 36)})} tape={() => 1} />
					{CODING.split('').map((l, i) => <HB key={i} x={colX(i)} y={DNA7 + CH} l={l} p={1 - op(i)} />)}
				</g>
				{/* yellow RNA cards */}
				<g transform={`translate(0,${yY - (DNA7 + CH)}) `}>
					<CRow x0={LX0} y={DNA7 + CH} face="down" letters={MRNA} c="yellow" card={i => {
						const t = prog(f, yIn(i), 14);
						return {o: prog(f, yIn(i) - 2, 4), dx: lerp(STACK[0] - colX(i), 0, t), dy: lerp(STACK[1] - (DNA7 + CH), 0, t), ring: MRNA[i] === 'U' ? pulse(f, K7.ut + i * 2, 30) + pulse(f, K7.every + i * 2, 30) : 0};
					}} tape={i => prog(f, yIn(i + 1) + 14, 8)} />
					{MRNA.split('').map((l, i) => <HB key={i} x={colX(i)} y={DNA7 + 2 * CH} l={l} p={prog(f, yIn(i) + 14, 8) * (1 - peel)} />)}
				</g>
				{MRNA.split('').map((l, i) => <Snap key={i} x={colX(i)} y={DNA7 + 2 * CH} at={yIn(i) + 14} color="#b08a1a" />)}
				<g opacity={prog(f, K7.yellow - 10, 12) * (1 - prog(f, K7.peel, 12))}>
					{[0, 1, 2, 3].map(k => <NCard key={k} x={STACK[0] + k * 6} y={STACK[1] - 40 - k * 5} face="down" l="" c="yellow" marks={false} />)}
					<Sx x={STACK[0] + 70} y={STACK[1] + 10} text="yellow RNA cards" size={28} color={CC.yellow.line} weight={700} />
				</g>
				{/* tags */}
				<Sx x={X2 + 20} y={DNA7 + 40} text="not read" size={30} color={GREYT} hand at={K7.template + 10} out={K7.close} />
				<Sx x={X2 + 20} y={DNA7 + 2 * CH + 56} text="template strand" size={32} color={TEAL} hand at={K7.template} out={K7.close} />
				<Sx x={X2 + 20} y={DNA7 + 2 * CH + 92} text="(3' to 5')" size={26} color={TEAL} weight={700} at={K7.template + 6} out={K7.close} />
				<Sx x={X2 + 20} y={DNA7 + CH + 50} text="RNA built 5' to 3'" size={28} color={CC.yellow.line} weight={700} at={K7.yellow + 10} out={K7.peel} />
				<GreyTag x={X2 + 20} y={DNA7 + CH + 66} text="B6b" at={K7.yellow + 20} out={K7.peel} size={20} />
				<GreyTag x={110} y={870} text="a cell opens only a short stretch at a time" at={K7.unzip + 30} out={K7.peel} size={22} />
				<Fade at={K7.ut} out={K7.peel}>
					<rect x={CZ.x + 60} y={660} width={450} height={70} rx={35} fill="#fffdf8" stroke={CC.yellow.line} strokeWidth={3} />
				</Fade>
				<Sx x={CZ.x + 84} y={706} text="RNA has U instead of T" size={32} color={INK} hand at={K7.ut} out={K7.peel} />
				{/* after peeling */}
				<StrandArrow x1={LX0 - 35} x2={X2} y={MR7 - 22} at={K7.mrna} dir={1} size={26} />
				<Sx x={X2 + 20} y={MR7 + 70} text="mRNA" size={40} color={CC.yellow.line} hand at={K7.mrna} />
				<Tick x={X2 + 40} y={DNA7 + 90} at={K7.unchanged} s={36} color={TEAL} />
				<Sx x={X2 + 70} y={DNA7 + 84} text="gene unchanged:" size={30} color={TEAL} hand at={K7.unchanged} />
				<Sx x={X2 + 70} y={DNA7 + 120} text="can be read again" size={30} color={TEAL} hand at={K7.unchanged + 8} />
				<ColourKey hot={[0, 0, pulse(f, K7.yellow, 50)]} />
			</Overlay>
		</>
	);
};

// ---------- 8. Step 5: model translation ----------
const K8 = cues(S('translate'), {
	step: 'Step five: translation', slide: 'Slide the messenger RNA through', three: 'shows three bases at a time', codon: 'one codon', orange: 'Each orange card carries', anti: 'its anticodon',
	fit: 'that fit its codon', start: 'Match the first card to the start codon', next: 'Then match the next', clip: 'clip its bead to the first', keep: 'Keep going until', stop: 'a stop codon',
	nofit: 'where no card fits', off: 'the bead chain comes off',
});
const RB = {cx: 600, cy: 680, w: 560};
const WIN = riboWindow(RB.cx, RB.cy, RB.w);
const MP = WIN.w / 3;
const KM = MP / PITCH;
const EDGE_Y = WIN.y1 + 6;
const STRIP_Y = EDGE_Y + CH * KM;
const TW_ = trnaWForPitch(MP);
const T_CY = EDGE_Y - (trnaEdgeY(0, 0, TW_));
const stripXFor = (k: number) => WIN.cx - (3 * k + 1) * MP;
export const SceneTranslateP01: React.FC = () => {
	const f = useCurrentFrame();
	const move = (a: number, b: number) => prog(f, a, b);
	const kPos = move(K8.slide, 40) * 1 + move(K8.next, 22) + move(K8.keep, 18) + move(K8.stop + 8, 18);
	const sx = lerp(-1300, stripXFor(0), move(K8.slide, 40)) + (stripXFor(0) - stripXFor(1)) * -(move(K8.next, 22) + move(K8.keep, 18) + move(K8.stop + 8, 18));
	void kPos;
	// tRNA k: appears at a, seats at s, then rides with the strip and lifts at l
	const trna = (k: number, a: number, s: number, l: number) => {
		const shifts = [K8.next, K8.keep, K8.stop + 8].slice(k).map((t, j) => move(t, j === 0 ? 22 : 18));
		const ride = shifts.reduce((t, v) => t + v, 0);
		const hover = -70 * (1 - move(s, 14));
		const lift = -260 * move(l, 22);
		return {cx: WIN.cx - ride * MP * 3, cy: T_CY + hover + lift, o: move(a, 12) * (1 - move(l + 10, 12)), seat: s + 14};
	};
	const T = [trna(0, K8.orange, K8.start + 10, K8.clip + 24), trna(1, K8.next + 8, K8.next + 26, K8.keep + 42), trna(2, K8.keep + 10, K8.keep + 22, K8.off + 6)];
	// bead chain: lives on the newest tRNA's cup
	const cup = (i: number) => trnaCup(T[i].cx, T[i].cy, TW_);
	const r = Math.max(9, 95 * (TW_ / 1313));
	const toB = move(K8.clip, 18), toC = move(K8.keep + 26, 14), off = move(K8.off, 30);
	const pb = beadPitch(r);
	const L = (a: [number, number], b: [number, number], t: number): [number, number] => [lerp(a[0], b[0], t), lerp(a[1], b[1], t)];
	const sh = (p: [number, number], k: number): [number, number] => [p[0] - k * pb, p[1]];
	const end = L(cup(2), [1450, 640], off);
	const redP = toB < 1 ? L(cup(0), sh(cup(1), 1), toB) : toC < 1 ? L(sh(cup(1), 1), sh(cup(2), 2), toC) : sh(end, 2);
	const goldP = toC < 1 ? L(cup(1), sh(cup(2), 1), toC) : sh(end, 1);
	const greenP = toC < 1 ? cup(2) : end;
	const beads = [
		<PopBead key="r" x={redP[0]} y={redP[1]} r={r} c="red" o={move(K8.orange, 12)} />,
		<PopBead key="g" x={goldP[0]} y={goldP[1]} r={r} c="gold" o={move(K8.next + 8, 12)} ring={pulse(f, K8.clip + 16, 24)} />,
		<PopBead key="n" x={greenP[0]} y={greenP[1]} r={r} c="green" o={move(K8.keep + 10, 12)} />,
	];
	const stopHover = move(K8.stop + 20, 12) * (1 - move(K8.off, 12));
	const wob = Math.sin((f - K8.nofit) / 3) * 8 * move(K8.nofit, 6) * (1 - move(K8.nofit + 30, 8));
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={5} at={K8.step} />
				<Bench />
				<defs><clipPath id="p01-bench"><rect x={BENCH.x} y={BENCH.y} width={BENCH.w} height={BENCH.h} rx={26} /></clipPath></defs>
				<PaperRibo cx={RB.cx} cy={RB.cy} w={RB.w} o={prog(f, 4, 14)} hot={pulse(f, K8.three, 40) + pulse(f, K8.codon, 40)} />
				<g clipPath="url(#p01-bench)">
					<g transform={`translate(${sx},${STRIP_Y}) scale(${KM})`}>
						<CRow x0={0} y={0} face="up" letters={MRNA} c="yellow" tape={() => 1} marks={false} />
					</g>
				</g>
				<rect x={WIN.x1 - 3} y={WIN.y1 - 8} width={WIN.w + 6} height={WIN.h + 16} rx={6} fill="none" stroke={AMBER} strokeWidth={4} opacity={0.35 + 0.65 * Math.min(1, pulse(f, K8.three, 40) + pulse(f, K8.codon, 40))} />
				<Sx x={WIN.cx} y={STRIP_Y + 46} text="window: one codon" size={30} color={AMBER_INK} hand anchor="middle" at={K8.codon} />
				<Sx x={RB.cx - RB.w / 2 + 10} y={RB.cy + 236} text="card ribosome" size={24} color={INK_SOFT} weight={700} anchor="end" at={8} />
				{/* tRNA cards */}
				{T.map((t, k) => <TrnaCard key={k} cx={t.cx} cy={t.cy} w={TW_} o={t.o} anti={ANTIS[k]} bead={undefined} tabGlow={k === 0 ? pulse(f, K8.anti, 30) + pulse(f, K8.fit, 30) : 0} />)}
				{T.map((t, k) => <Snap key={'s' + k} x={WIN.cx} y={EDGE_Y} at={t.seat} />)}
				{beads}
				{/* no card for the stop codon */}
				<g transform={`translate(${wob},0)`}>
					<TrnaCard cx={WIN.cx} cy={T_CY - 80} w={TW_} o={stopHover * 0.85} anti="" />
				</g>
				<QMark x={WIN.cx + TW_ * 0.62} y={T_CY - 40} size={90} color={GREYT} o={move(K8.nofit, 10) * (1 - move(K8.off, 12))} />
				{/* the card zone log */}
				<Fade at={K8.start + 10}>
					<rect x={CZ.x} y={300} width={CZ.w} height={84} rx={20} fill="#fffdf8" stroke={AMBER} strokeWidth={3} />
				</Fade>
				<Sx x={CZ.x + 22} y={354} text="AUG: start, methionine" size={34} color={INK} hand at={K8.start + 10} />
				<Fade at={K8.clip}>
					<rect x={CZ.x} y={410} width={CZ.w} height={84} rx={20} fill="#fffdf8" stroke={AMBER} strokeWidth={3} />
				</Fade>
				<Sx x={CZ.x + 22} y={464} text="beads clip: a peptide bond" size={34} color={INK} hand at={K8.clip} />
				<Fade at={K8.nofit}>
					<rect x={CZ.x} y={520} width={CZ.w} height={84} rx={20} fill="#fffdf8" stroke={GREYT} strokeWidth={3} />
				</Fade>
				<Sx x={CZ.x + 22} y={574} text="UGA: stop, no tRNA fits" size={34} color={INK} hand at={K8.nofit} />
				<Sx x={1450 - beadPitch(r)} y={700} text="the chain comes off" size={30} color={AMBER_INK} hand anchor="middle" at={K8.off + 20} />
				<GreyTag x={CZ.x} y={800} text="real ribosome: up to three tRNAs (A, P and E sites)" at={K8.keep} size={20} />
				<ColourKey />
			</Overlay>
		</>
	);
};

// ---------- 9. Results table ----------
const K9 = cues(S('results-table'), {
	record: 'Record the results in a table', chart: 'using a codon chart', gives: 'This gene gives', aug: 'A, U, G', gca: 'G, C, A', uuu: 'U, U, U', stopc: 'the stop codon',
	met: 'methionine, alanine and phenylalanine', three: 'three amino acids joined in order', chose: 'Three bases chose each bead', card: 'changing one card', change: 'change a bead in the chain',
});
export const SceneResultsP01: React.FC = () => {
	const f = useCurrentFrame();
	const rowAt = [K9.aug, K9.gca, K9.uuu, K9.stopc];
	const fl = pulse(f, K9.card, 60) + pulse(f, K9.card + 60, 60) + (f > K9.card + 30 ? 0.4 : 0);
	const codonX = (k: number) => colX(3 * k + 1);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={5} at={-100} />
				<Bench />
				<CRow x0={LX0} y={DNA7} face="down" letters={CODING} c="blue" tape={() => 1} />
				<CRow x0={LX0} y={DNA7 + 2 * CH} face="up" letters={TEMPLATE} c="green" tape={() => 1} card={i => ({glow: i === FLASH_I ? Math.min(1, fl) : 0})} />
				{CODING.split('').map((l, i) => <HB key={i} x={colX(i)} y={DNA7 + CH} l={l} />)}
				<CRow x0={LX0} y={MR7} face="down" letters={MRNA} c="yellow" tape={() => 1} card={i => ({glow: i === FLASH_I ? Math.min(1, fl) : 0})} />
				<Sx x={X2 + 20} y={MR7 + 60} text="mRNA" size={36} color={CC.yellow.line} hand at={-100} />
				{CODONS.map((c, k) => (
					<g key={c}>
						<SpanBracket x1={codonX(k) - PITCH - 30} x2={codonX(k) + PITCH + 30} y={MR7 + CH + 24} at={rowAt[k]} label={c} size={30} />
						{k < 3 ? (
							<g opacity={prog(f, K9.met + k * 12, 12)}>
								<PopBead x={codonX(k)} y={860} r={22} c={AA_BEAD[AAS[k]]} ring={k === 1 ? Math.min(1, fl) : 0} />
								<Sx x={codonX(k)} y={912} text={AAS[k]} size={30} color={INK} weight={800} anchor="middle" />
							</g>
						) : <Sx x={codonX(k)} y={872} text="stop" size={30} color={GREYT} weight={800} anchor="middle" at={K9.met + 36} />}
					</g>
				))}
				{[0, 1].map(k => <line key={k} x1={codonX(k) + 22} y1={860} x2={codonX(k + 1) - 22} y2={860} stroke={INK_SOFT} strokeWidth={4} opacity={prog(f, K9.three, 12)} />)}
				<QMark x={codonX(1) + 50} y={878} size={56} color={AMBER_INK} o={prog(f, K9.card + 30, 10)} />
				<Sx x={codonX(2) + 60} y={872} text="joined in order" size={26} color={AMBER_INK} hand at={K9.three} out={K9.card} />
				{/* the table */}
				<DataTable x={CZ.x} y={270} cols={[{w: 140, head: 'codon'}, {w: 190, head: 'anticodon'}, {w: 240, head: 'amino acid'}]}
					rows={CODONS.map((c, k) => [c, k < 3 ? ANTIS[k] : 'none', k === 0 ? 'Met (start)' : AAS[k]])} rowAt={rowAt} at={K9.record} size={30} rowH={58}
					hot={ri => (ri === 1 ? Math.min(1, fl) : 0)} />
				<Sx x={CZ.x} y={586} text="anticodons written 3' to 5'" size={22} color={INK_SOFT} weight={600} at={K9.record + 10} />
				<CodonMini x={CZ.x} y={620} rows={CODONS} at={K9.chart} w={330} size={28} hot={k => pulse(f, rowAt[k], 50)} />
				<GreyTag x={CZ.x} y={880} text="a changed base can change an amino acid: B6b, B6c" at={K9.change} size={18} />
				<ColourKey />
			</Overlay>
		</>
	);
};
void AMBER; void DrawPath; void trnaH; void TEAL; void Tick;
