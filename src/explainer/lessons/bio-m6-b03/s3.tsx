// M6 B03 scenes 7 to 9: the reading frame (THE FAT CAT regroups; a shifted frame still makes amino acids; three bases
// lost or added keep the frame), what decides the effect (type and position on a long gene), and the two memory aids.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Chip, Heading, Overlay, SpanBracket, Sx, prog} from '../bio-m5-b13/shared';
import {chipW, cw} from '../bio-m5-b06b/shared';
import {AMBER, AMBER_INK, BIO_INK, BLUE_SOFT, GREY_INK, GTag, INK, INK_SOFT, Lbl} from '../bio-m6-b01/parts';
import {S} from './common';
import {CHIPS, DropChip, chipXs} from './s1';
import {M6, X6} from './s2';
import {AABead, Beads, Brk, CG, Codons, LP, Let, MRNA_INK, PepLink, StopBar, TickS, aas, brkSpan, cX, clamp01, lerp, lx, vis} from './parts';

// ---------- 7. The reading frame ----------
const SC7 = S('reading-frame');
const K7 = cues(SC7, {delF: 'Delete the F', keep: 'keep reading in threes', gib: 'turns to gibberish', still: 'still makes amino acids', wrongOnes: 'just the wrong ones', del3: 'delete three bases in a row', worth: "a whole codon's worth", lines: 'The frame lines up again', loses: 'loses one amino acid', ins3: 'Inserting three bases', adding: 'adding one amino acid'});
const WORDS = 'THEFATCATATETHERAT';
const WP = 56, WG = 46, WS = 72, WX = 369, WY = 430;
const wordAt = (k: number) => cw(SC7, 'THE FAT CAT ATE THE RAT', k);
export const SceneReadingFrame: React.FC = () => {
	const f = useCurrentFrame();
	// the sentence
	const fLift = prog(f, K7.delF + 14, 16);
	const s = prog(f, K7.delF + 30, 14);
	const rgAt = (k: number) => K7.keep + 12 + k * 14;
	const rg = (k: number) => (k === 0 ? 1 : prog(f, rgAt(k), 10));
	const orig = (j: number) => (j < 3 ? j : j + 1);
	const NEWW = WORDS.slice(0, 3) + WORDS.slice(4);
	const wx = (j: number) => WX + lerp(orig(j), j, s) * WP + lerp(Math.floor(orig(j) / 3), Math.floor(j / 3), rg(Math.floor(j / 3))) * WG;
	const shrink = prog(f, K7.still, 22);
	const sentO = 1 - prog(f, K7.del3 + 10, 14);
	// the three-base deletion
	const mo = prog(f, K7.del3 + 6, 14);
	const lift = prog(f, K7.worth + 10, 16);
	const close = prog(f, K7.lines, 16);
	const cwid = 3 * LP + CG;
	const dx = (k: number) => (k >= 2 ? -cwid * close : 0);
	const beadXs = [0, 1, 2, 3, 4].map(k => cX(X6, k) + dx(k));
	return (
		<>
			<Heading text="The reading frame" at={4} size={56} />
			<Overlay>
				<g opacity={sentO} transform={`translate(960,${lerp(WY, 250, shrink)}) scale(${lerp(1, 0.58, shrink)}) translate(-960,${-WY})`}>
					{[0, 1, 2, 3, 4, 5].map(k => {
						const a = WX + 3 * k * WP + k * WG - WP / 2 + 4, b = a + 3 * WP - 8;
						return <Brk key={'o' + k} x1={a} x2={b} y={WY + 22} o={(k === 0 ? 1 : 1 - prog(f, K7.delF + 24, 10)) * prog(f, wordAt(k), 10)} w={4} />;
					})}
					{[1, 2, 3, 4, 5].map(k => {
						const j0 = 3 * k, j1 = Math.min(3 * k + 2, NEWW.length - 1);
						const a = wx(j0) - WP / 2 + 4, b = wx(j1) + WP / 2 - 4;
						return <Brk key={'n' + k} x1={a} x2={b} y={WY + 22} o={rg(k) * (f >= rgAt(k) - 4 ? 1 : 0)} color={AMBER} w={4} />;
					})}
					{NEWW.split('').map((ch, j) => {
						const k = Math.floor(j / 3);
						const wordK = Math.floor(orig(j) / 3);
						const grey = k > 0 && rg(k) > 0.5;
						return <Let key={j} x={wx(j)} y={WY} ch={ch} size={WS} color={grey ? GREY_INK : INK} o={prog(f, wordAt(wordK), 10)} />;
					})}
					<Let x={WX + 3 * WP + WG} y={WY - 80 * fLift} ch="F" size={WS} color={AMBER_INK} o={prog(f, wordAt(1), 10) * (1 - clamp01((fLift - 0.4) / 0.6))} />
				</g>
				<Lbl x={960} y={560} text="every word after it changes" size={42} color={AMBER_INK} anchor="middle" at={K7.gib} out={K7.still} />
				{/* a shifted frame still makes amino acids */}
				<Beads xs={[0, 1, 2, 3].map(k => 960 + (k - 1.5) * 168)} y={480} aa={['Met', 'Asn', 'Leu', 'Asp']} ring={k => (k > 0 ? 1 : 0)} o={vis(f, K7.still + 12, K7.del3, 14)} />
				<Lbl x={960} y={600} text="wrong amino acids, not nothing" size={42} color={AMBER_INK} anchor="middle" at={K7.wrongOnes} out={K7.wrongOnes + 44} />
				<GTag x={960} y={570} text="real DNA has no spaces: the start codon sets the frame" at={K7.wrongOnes + 50} out={K7.del3} size={28} anchor="middle" />
				{/* three bases: the frame lines up again */}
				<g opacity={mo}>
					<Beads xs={beadXs} y={470} aa={aas(['AUG', 'AAA', 'CCU', 'GGA', 'UUU'])} bo={k => (k === 1 ? 1 - lift : 1)} lo={k => (k === 0 ? 1 - lift : k === 1 ? 1 - lift : 1)} />
					{close > 0.5 ? <PepLink a={[beadXs[0], 470]} b={[beadXs[2], 470]} /> : null}
					<circle cx={(beadXs[0] + beadXs[2]) / 2} cy={470} r={13} fill="#fff3d9" stroke={AMBER} strokeWidth={4} strokeDasharray="5 4" opacity={prog(f, K7.loses, 10)} />
					<Codons x0={X6} y={600} codons={['AUG']} ends={false} />
					{[2, 3, 4].map(k => <g key={k} transform={`translate(${dx(k)},0)`}><Codons x0={X6} y={600} codons={['AUG', 'AAA', 'CCU', 'GGA', 'UUU']} letterO={i => (Math.floor(i / 3) === k ? 1 : 0)} brkO={kk => (kk === k ? 1 : 0)} /></g>)}
					<g opacity={1 - clamp01((lift - 0.5) / 0.5)} transform={`translate(0,${-60 * lift})`}>
						<Codons x0={X6} y={600} codons={['AUG', 'AAA', 'CCU', 'GGA', 'UUU']} letterO={i => (Math.floor(i / 3) === 1 ? 1 : 0)} brkO={kk => (kk === 1 ? 1 : 0)} letterColor={() => (f >= K7.worth ? AMBER_INK : undefined)} />
					</g>
				</g>
				<Lbl x={960} y={700} text="multiple of three: no frameshift, one amino acid lost" size={40} color={AMBER_INK} anchor="middle" at={K7.loses + 10} out={K7.ins3} />
				<InsertThree at={K7.ins3} beadAt={K7.adding} />
				{void BIO_INK}{void INK_SOFT}{void lx}{void M6}{void MRNA_INK}
			</Overlay>
		</>
	);
};
/** Three amber letters slide in as one new codon; one extra bead joins the chain. */
const InsertThree: React.FC<{at: number; beadAt: number}> = ({at, beadAt}) => {
	const f = useCurrentFrame();
	const o = prog(f, at - 4, 12);
	if (o <= 0.01) return null;
	const lp = 32, cg = 20, size = 34, x0 = 638, y = 880, by = 790;
	const cwid = 3 * lp + cg;
	const sh = prog(f, at + 6, 14) * cwid;
	const drop = prog(f, at + 16, 12);
	const old = ['AUG', 'AAA', 'CCU', 'GGA', 'UUU'];
	const xsOld = old.map((_, k) => cX(x0, k, lp, cg) + (k >= 2 ? sh : 0));
	const xIns = cX(x0, 2, lp, cg);
	const bead = prog(f, beadAt, 12);
	const allXs = [xsOld[0], xsOld[1], xIns, xsOld[2], xsOld[3], xsOld[4]];
	const aa = ['Met', 'Lys', 'Ala', 'Pro', 'Gly', 'Phe'];
	return (
		<g opacity={o}>
			<Beads xs={allXs} y={by} r={22} aa={aa} bo={k => (k === 2 ? bead : 1)} lo={k => (k === 1 || k === 2 ? bead : 1)} ring={k => (k === 2 ? 1 : 0)} />
			{bead < 0.5 ? <PepLink a={[allXs[1], by]} b={[allXs[3], by]} r={22} /> : null}
			{old.map((c, k) => <g key={k} transform={`translate(${k >= 2 ? sh : 0},0)`}><Codons x0={x0} y={y} codons={old} lp={lp} cg={cg} size={size} letterO={i => (Math.floor(i / 3) === k ? 1 : 0)} brkO={kk => (kk === k ? 1 : 0)} /></g>)}
			<g opacity={drop} transform={`translate(0,${-40 * (1 - drop)})`}>
				<Codons x0={x0} y={y} codons={['', '', 'GCA']} lp={lp} cg={cg} size={size} letterColor={() => AMBER_INK} hot={k => (k === 2 ? 1 : 0)} brkO={k => (k === 2 ? 1 : 0)} />
			</g>
			<Lbl x={x0 + 17 * lp + 5 * cg + 40} y={y - 30} text="insert 3: one amino acid added" size={36} color={AMBER_INK} at={at + 30} />
		</g>
	);
};

// ---------- 8. What decides the effect ----------
const K8 = cues(S('what-decides'), {q: 'So what decides', changes: 'changes that codon', silent: "it's silent", swaps: 'swaps one amino acid', adds: 'adds an early stop', one: 'A one-base insertion', every: 'changes every codon after it', pos: 'Second, its position', start: 'near the start of a gene', end: 'near the end', last: 'the last few amino acids', size: 'describes the size of the change', not: 'not the size of its effect'});
const NC = 14, GX = 260, GW = 100;
const gcx = (k: number) => GX + GW / 2 + k * GW;
const BEADC = ['#e7b98f', '#cfc58e', '#b7c79f', '#a8c6d0', '#cbb3d8', '#dba6a0', '#e0ae86'];
/** A long gene: codon brackets only, with a small bead per codon above (no letters). */
const LongGene: React.FC<{y: number; o: number; brk: (k: number) => number; bead: (k: number) => number; mark?: {x: number; o: number}}> = ({y, o, brk, bead, mark}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={GX - 10} y={y - 40} width={NC * GW + 20} height={120} rx={18} fill={BLUE_SOFT} opacity={0.55} />
		{Array.from({length: NC}, (_, k) => {
			const b = brk(k), d = bead(k);
			return (
				<g key={k}>
					{k > 0 ? <line x1={gcx(k - 1) + 15} y1={y} x2={gcx(k) - 15} y2={y} stroke={INK} strokeWidth={3} /> : null}
					<circle cx={gcx(k)} cy={y} r={15} fill={d > 0.5 ? '#fff3d9' : BEADC[k % BEADC.length]} stroke={d > 0.5 ? AMBER : 'rgba(38,35,31,0.55)'} strokeWidth={d > 0.5 ? 5 : 2} />
					<Brk x1={gcx(k) - GW / 2 + 8} x2={gcx(k) + GW / 2 - 8} y={y + 62} color={b > 0.5 ? AMBER : '#c9a58f'} w={b > 0.5 ? 5 : 3} />
				</g>
			);
		})}
		{mark && mark.o > 0.01 ? (
			<g opacity={mark.o} transform={`translate(0,${-30 * (1 - mark.o)})`}>
				<path d={`M${mark.x - 16},${y - 70} L${mark.x + 16},${y - 70} L${mark.x},${y - 46} Z`} fill={AMBER} />
				<text x={mark.x} y={y - 80} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26}} fill={AMBER_INK}>−1 base</text>
			</g>
		) : null}
	</g>
));
export const SceneWhatDecides: React.FC = () => {
	const f = useCurrentFrame();
	const rowO = 1 - prog(f, K8.size - 10, 14);
	const typePhase = f < K8.pos;
	const r1brk = (k: number) => (typePhase ? (k === 5 ? vis(f, K8.changes, K8.one, 10) : k >= 7 ? prog(f, K8.every + 8 + (k - 7) * 5, 6) : 0) : 0);
	const r1bead = (k: number) => (typePhase ? 0 : k >= 1 ? prog(f, K8.start + 10 + k * 3, 6) : 0);
	const r1mark = typePhase ? {x: GX + 7 * GW - 0, o: prog(f, K8.every, 12) * (1 - prog(f, K8.pos, 10))} : {x: GX + GW, o: prog(f, K8.start, 12)};
	const r2O = prog(f, K8.end - 16, 14) * rowO;
	const fan = [K8.silent, K8.swaps, K8.adds];
	const fanT = ['same', 'one swapped', 'early stop'];
	const fws = fanT.map(t => chipW(t, 34));
	let fx = gcx(5) - (fws.reduce((a, b) => a + b, 0) + 40) / 2;
	const fxs = fws.map(w => { const x = fx; fx += w + 20; return x; });
	const cxs = chipXs();
	const lastR = cxs[2] + chipW(CHIPS[2], 34);
	return (
		<>
			<Heading text="What decides the effect?" at={K8.q} size={56} />
			<Overlay>
				<LongGene y={330} o={rowO * prog(f, K8.q, 16)} brk={r1brk} bead={r1bead} mark={r1mark} />
				{fan.map((t, i) => (
					<g key={i} opacity={1 - prog(f, K8.one, 10)}>
						<Chip x={fxs[i]} y={470 + 0 * i} text={fanT[i]} at={t} size={34} />
					</g>
				))}
				<Lbl x={1230} y={500} text="everything downstream" size={40} color={AMBER_INK} at={K8.every + 24} out={K8.pos} />
				<Lbl x={GX} y={500} text="early: most of the protein" size={40} color={AMBER_INK} at={K8.start + 30} out={K8.size - 10} />
				<LongGene y={680} o={r2O} brk={() => 0} bead={k => (k >= 11 ? prog(f, K8.end + 16 + (k - 11) * 4, 6) : 0)} mark={{x: GX + 11 * GW, o: prog(f, K8.end, 12)}} />
				<Lbl x={GX} y={850} text="late: last few" size={40} color={AMBER_INK} at={K8.last} out={K8.size - 10} />
				{/* the hook's three results, all from one base */}
				<DropChip i={0} at={K8.size} y={520} />
				<DropChip i={1} at={K8.size + 6} y={520} />
				<DropChip i={2} at={K8.size + 12} y={520} />
				<SpanBracket x1={cxs[0]} x2={lastR} y={620} at={K8.not} label="each from 1 base" size={44} />
				{void Sx}{void INK_SOFT}
			</Overlay>
		</>
	);
};

// ---------- 9. Memory ----------
const K9 = cues(S('memory'), {two: 'Two aids', silent: 'silent means', missense: 'missense misses', nonsense: 'nonsense means stop', fat: 'remember the fat cat', lose: 'Lose one letter', shifts: 'everything after it shifts'});
const Arrow: React.FC<{x1: number; x2: number; y: number; o: number}> = ({x1, x2, y, o}) => (
	<g opacity={o}><line x1={x1} y1={y} x2={x2 - 6} y2={y} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" /><path d={`M${x2 - 16},${y - 9} L${x2},${y} L${x2 - 16},${y + 9}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" /></g>
);
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const rows = [{y: 320, at: K9.silent, t: 'Silent: same'}, {y: 480, at: K9.missense, t: 'Missense: misses the right one'}, {y: 640, at: K9.nonsense, t: 'Nonsense: stop, cut short'}];
	const strike = prog(f, K9.lose, 12);
	const slide = prog(f, K9.shifts, 16);
	const FX = 620, FP = 52, FG = 40, FY = 850;
	const fxOf = (i: number) => FX + i * FP + Math.floor(i / 3) * FG;
	return (
		<>
			<Heading text="Two aids" at={K9.two} size={56} />
			<Overlay>
				{rows.map((r, i) => <Sx key={i} x={620} y={r.y + 18} text={r.t} size={56} color={i === 0 ? BIO_INK : i === 1 ? AMBER_INK : INK} hand at={r.at} />)}
				<g opacity={prog(f, K9.silent, 12)}>
					<AABead x={230} y={320} aa="Glu" r={34} /><Arrow x1={280} x2={360} y={320} o={1} /><AABead x={410} y={320} aa="Glu" r={34} />
					<TickS x={470} y={300} at={K9.silent + 8} />
				</g>
				<g opacity={prog(f, K9.missense, 12)}>
					<AABead x={230} y={480} aa="Glu" r={34} /><Arrow x1={280} x2={360} y={480} o={1} /><AABead x={410} y={480} aa="Val" r={34} ring={1} />
				</g>
				<g opacity={prog(f, K9.nonsense, 12)}>
					<Beads xs={[190, 280, 370]} y={640} aa={['Trp', 'Thr', '']} r={26} bo={k => (k < 2 ? 1 : 0)} lo={k => (k === 0 ? 1 : 0)} />
					<StopBar x={330} y={640} h={56} />
				</g>
				{/* THE FAT CAT */}
				<g opacity={prog(f, K9.fat, 12)}>
					{'THEFATCAT'.split('').map((ch, i) => <Let key={i} x={fxOf(i)} y={FY} ch={ch} size={64} color={i === 3 ? (strike > 0.5 ? AMBER_INK : INK) : INK} o={i === 3 ? 1 - 0.6 * strike : 1} />)}
					<line x1={fxOf(3) - 24} y1={FY - 20} x2={lerp(fxOf(3) - 24, fxOf(3) + 24, strike)} y2={FY - 26} stroke={AMBER} strokeWidth={7} strokeLinecap="round" opacity={strike > 0.01 ? 1 : 0} />
					{[0, 1, 2].map(k => {
						const a = fxOf(3 * k) - FP / 2 + 4 + (k > 0 ? slide * FP : 0);
						const b = fxOf(Math.min(3 * k + 2, 8)) + FP / 2 - 4 + (k > 0 ? slide * FP : 0);
						return <Brk key={k} x1={a} x2={Math.min(b, fxOf(8) + FP / 2)} y={FY + 22} color={k > 0 && slide > 0.5 ? AMBER : '#c9a58f'} w={4} />;
					})}
				</g>
			</Overlay>
		</>
	);
};
void brkSpan; void LP;
