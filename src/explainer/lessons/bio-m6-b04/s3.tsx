// M6 B04 scenes 7 to 10: nondisjunction (a meiosis strip in B5b's plum and teal, a faint normal row above, counts
// under the gametes, fertilisation to a trisomy), trisomy 21 (normal genes, extra dosage, why it is survivable),
// point against chromosomal mutation (compare board, then two cases: size does not fix severity) and the book aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, Sx, prog} from '../bio-m5-b13/shared';
import {GTag, Lbl, SlimStrand} from '../bio-m6-b01/parts';
import {Beads, GhostBead, StopBar} from '../bio-m6-b03/parts';
import {S} from './common';
import {CHR1, CHR2} from './s1';
import {
	AMBER, AMBER_INK, BIO_INK, Bar, Book, BreakMark, CW, DoseBar, Glyph, INK, INK_SOFT, KChrom, Karyo, MCell, PLUMC, TEALC, TickC, karyoX, lay, lerp, vis,
} from './parts';
import type {Seg} from './parts';

const SLATE = '#4f86ad';

// ---------- 7. Nondisjunction ----------
const K7 = cues(S('nondisjunction'), {normally: 'normally separate', fails: 'a pair fails to separate', called: 'which is called nondisjunction', one: 'One gamete then gets both', neither: 'another gets neither', fert: 'is fertilised', zygote: 'the zygote has three copies', tri: 'called a trisomy', humans: 'In humans'});
export const SceneNondisjunction: React.FC = () => {
	const f = useCurrentFrame();
	// faint normal row
	const nO = 0.6 * (1 - prog(f, K7.fert, 14));
	const nd = prog(f, K7.normally + 8, 16), ng = prog(f, K7.normally + 40, 16);
	// main row
	const mv = prog(f, K7.fails, 30);
	const gm = prog(f, K7.one, 18);
	const fm = prog(f, K7.fert + 4, 26);
	const zy = prog(f, K7.zygote, 14);
	const st = [230, 640], up = [600, 520], lo = [600, 780];
	const gU = [[960, 470], [1090, 470]], gL = [[960, 790], [1090, 790]];
	const mover = [lerp(gU[1][0], 1430, fm), lerp(gU[1][1], 640, fm)];
	const partner = [lerp(1780, 1570, fm), 640];
	const line = (a: number[], b: number[], o: number, k: string) => <line key={k} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 6" opacity={o} />;
	return (
		<>
			<Heading text="Nondisjunction: a change in number" at={4} size={56} />
			<Overlay>
				{/* the normal row, faint and small */}
				<g opacity={nO}>
					<Sx x={110} y={282} text="normal" size={30} color={INK_SOFT} hand />
					<MCell x={300} y={270} r={50} chroms={[{color: PLUMC, dx: -12, dy: 0, dup: true}, {color: TEALC, dx: 12, dy: 0, dup: true}]} />
					<MCell x={460} y={270} r={38} o={nd} chroms={[{color: PLUMC, dx: 0, dy: 0, dup: true}]} />
					<MCell x={560} y={270} r={38} o={nd} chroms={[{color: TEALC, dx: 0, dy: 0, dup: true}]} />
					{[PLUMC, PLUMC, TEALC, TEALC].map((c, k) => <MCell key={k} x={700 + k * 76} y={270} r={30} o={ng} chroms={[{color: c, dx: 0, dy: 0}]} />)}
				</g>
				{/* the main row */}
				{line([st[0] + 95, st[1]], [up[0] - 72, up[1]], prog(f, K7.fails, 10), 'a')}
				{line([st[0] + 95, st[1]], [lo[0] - 72, lo[1]], prog(f, K7.fails, 10), 'b')}
				{[gU[0], gU[1]].map((g, k) => line([up[0] + 72, up[1]], [g[0] - 46, g[1]], gm, 'u' + k))}
				{[gL[0], gL[1]].map((g, k) => line([lo[0] + 72, lo[1]], [g[0] - 46, g[1]], gm, 'l' + k))}
				<MCell x={st[0]} y={st[1]} r={95} o={1 - 0.6 * mv} chroms={mv < 0.02 ? [{color: PLUMC, dx: -22 + 8 * prog(f, K7.normally, 14), dy: 0, dup: true}, {color: TEALC, dx: 22 - 8 * prog(f, K7.normally, 14), dy: 0, dup: true}] : []} />
				<MCell x={up[0]} y={up[1]} r={72} o={mv} />
				<MCell x={lo[0]} y={lo[1]} r={72} o={mv} />
				{mv > 0.01 && mv < 1 ? [PLUMC, TEALC].map((c, k) => <Glyph key={k} x={lerp(st[0] - 14 + 28 * k, up[0] - 14 + 28 * k, mv)} y={lerp(st[1], up[1], mv)} color={c} dup />) : null}
				{mv >= 1 ? <MCell x={up[0]} y={up[1]} r={72} chroms={[{color: PLUMC, dx: -14, dy: 0, dup: true}, {color: TEALC, dx: 14, dy: 0, dup: true}]} o={1} /> : null}
				{gU.map((g, k) => (k === 1 && fm > 0.01 ? null : <MCell key={'gu' + k} x={g[0]} y={g[1]} r={46} o={gm} chroms={[{color: PLUMC, dx: -10, dy: 0}, {color: TEALC, dx: 10, dy: 0}]} />))}
				{gL.map((g, k) => <MCell key={'gl' + k} x={g[0]} y={g[1]} r={46} o={gm} />)}
				{gU.map((g, k) => <Sx key={'cu' + k} x={g[0]} y={g[1] + 82} text="2 copies" size={28} color={AMBER_INK} hand anchor="middle" at={K7.one + 18} out={K7.fert} />)}
				{gL.map((g, k) => <Sx key={'cl' + k} x={g[0]} y={g[1] + 82} text="0" size={30} color={INK_SOFT} hand anchor="middle" at={K7.neither} out={K7.fert} />)}
				<Lbl x={140} y={918} text="nondisjunction: a pair fails to separate" size={40} color={AMBER_INK} at={K7.called} out={K7.neither + 40} />
				<GTag x={140} y={942} text="or sister chromatids, in meiosis II" at={K7.called + 24} out={K7.neither + 40} size={26} />
				{/* fertilisation */}
				{fm > 0.01 && zy < 1 ? (
					<g opacity={1 - zy}>
						<MCell x={mover[0]} y={mover[1]} r={46} chroms={[{color: PLUMC, dx: -10, dy: 0}, {color: TEALC, dx: 10, dy: 0}]} />
						<MCell x={partner[0]} y={partner[1]} r={46} chroms={[{color: SLATE, dx: 0, dy: 0}]} />
					</g>
				) : null}
				<MCell x={1500} y={640} r={92} o={zy} chroms={[{color: PLUMC, dx: -26, dy: 0}, {color: TEALC, dx: 0, dy: 0}, {color: SLATE, dx: 26, dy: 0}]} />
				<Lbl x={1500} y={790} text="trisomy: three copies" size={42} color={AMBER_INK} anchor="middle" at={K7.tri} />
				<Sx x={1500} y={878} text="46 + 1 = 47" size={60} color={AMBER_INK} weight={800} anchor="middle" at={K7.humans + 8} />
			</Overlay>
		</>
	);
};

// ---------- 8. Trisomy 21 ----------
const K8 = cues(S('trisomy-21'), {instead: 'three copies instead of two', half: 'half as much again', many: 'many parts of the body', survive: 'can survive', smallest: 'is the smallest', most2: 'most other numbered chromosomes'});
export const SceneTrisomy: React.FC = () => {
	const f = useCurrentFrame();
	const X0 = 470, KY = 650;
	const sorted = prog(f, K8.smallest, 30);
	const x21 = karyoX(X0, 20, sorted);
	const panel = vis(f, K8.instead, K8.smallest, 14);
	const dose = vis(f, K8.half, K8.survive, 14);
	const many = vis(f, K8.many, K8.survive, 14);
	return (
		<>
			<Heading text="Trisomy 21: normal genes, extra dosage" at={4} size={56} />
			<Overlay>
				<Sx x={1800} y={210} text="47" size={84} color={AMBER_INK} weight={800} anchor="end" at={0} />
				<Karyo x0={X0} y={KY} sc={0.9} third21={1} hot21={1} sorted={sorted} dim={i => (i === 20 ? 0 : 0.35 * (panel + dose))} />
				{f >= K8.smallest ? <rect x={x21 - 26} y={KY - 68} width={78} height={110} rx={14} fill="none" stroke={AMBER} strokeWidth={5} opacity={prog(f, K8.smallest + 20, 10)} /> : null}
				<Lbl x={1800} y={KY - 110} text="smallest: about 200 to 300 genes" size={38} color={AMBER_INK} anchor="end" at={K8.smallest + 24} />
				<GTag x={X0 - 30} y={330} text="an extra copy: development usually stops before birth" at={K8.most2} size={26} />
				{/* the three 21s, enlarged */}
				<g opacity={panel}>
					<rect x={1060} y={250} width={620} height={150} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
					{[0, 1, 2].map(k => <KChrom key={k} x={1120 + k * 46} y={380} i={20} sc={2.4} w={26} amber />)}
				</g>
				<Lbl x={1280} y={338} text="same genes, 3 copies" size={40} color={AMBER_INK} at={K8.instead + 10} out={K8.many} />
				{/* dosage: about half as much again, for hundreds of genes */}
				<g opacity={dose}>
					<DoseBar x={330} y={930} h={110} label="2 copies: 100%" size={26} />
					<DoseBar x={600} y={930} h={165} p={prog(f, K8.half + 8, 20)} amber label="3 copies: about 150%" size={26} />
				</g>
				<g opacity={many}>
					{Array.from({length: 8}, (_, k) => (
						<g key={k}>
							<DoseBar x={860 + k * 90} y={930} w={26} h={50} />
							<DoseBar x={890 + k * 90} y={930} w={26} h={75} p={prog(f, K8.many + 6, 18)} amber />
						</g>
					))}
				</g>
				<Lbl x={1200} y={790} text="hundreds of genes at once" size={40} color={AMBER_INK} anchor="middle" at={K8.many + 12} out={K8.survive} />
			</Overlay>
		</>
	);
};

// ---------- 9. Point against chromosomal ----------
const K9 = cues(S('compare'), {cmp: 'Compare the two types', both: 'Both can come from', also: 'chromosomal mutations also come from', point: 'A point mutation changes', whilec: 'while a chromosomal mutation changes', usually: 'Chromosomal changes usually', bigger: "bigger isn't always worse", balanced: 'A balanced inversion', nonsense: 'one nonsense mutation', wreck: 'wreck an essential protein'});
const CX = [140, 360, 1060], CWD = [220, 700, 720];
const ROWS: {h: string; a: string[]; b: string[]; atA: keyof typeof K9; atB: keyof typeof K9}[] = [
	{h: 'cause', a: ['copying errors, mutagens'], b: ['also breaks, unequal crossing over,', 'nondisjunction'], atA: 'both', atB: 'also'},
	{h: 'process', a: ["one gene's base sequence changes"], b: ['number, order or position of', 'many genes changes'], atA: 'point', atB: 'whilec'},
	{h: 'effect', a: ['one gene; protein may stay', 'the same or change'], b: ['many genes, dosage, breakpoints'], atA: 'usually', atB: 'usually'},
];
export const SceneCompare: React.FC = () => {
	const f = useCurrentFrame();
	const sh = prog(f, K9.bigger, 22);
	const W = CWD.reduce((a, b) => a + b, 0);
	const mini = lay(CHR1, CX[2] + 30, 30, 14);
	mini.segs[4].tone = 'amber'; mini.segs[5].tone = 'amber';
	const inv = lay(['A', 'B', '●', 'C', 'D', 'G', 'F', 'E', 'H'], 230, 40, 18);
	inv.segs.forEach(q => { if ('GFE'.includes(q.l)) q.tone = 'amber'; });
	const nrm = lay(CHR1, 230, 40, 18);
	return (
		<>
			<Heading text="Point against chromosomal" at={K9.cmp} size={56} />
			<Overlay>
				<g opacity={1 - 0.45 * sh} transform={`translate(960,200) scale(${lerp(1, 0.62, sh)}) translate(-960,-200)`}>
					<rect x={CX[0]} y={200} width={W} height={500} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} opacity={prog(f, K9.cmp, 14)} />
					<rect x={CX[0]} y={200} width={W} height={110} rx={22} fill="#efe6d4" opacity={prog(f, K9.cmp, 14)} />
					{[310, 440, 570].map(y => <line key={y} x1={CX[0] + 10} y1={y} x2={CX[0] + W - 10} y2={y} stroke="rgba(60,45,20,0.2)" strokeWidth={2} opacity={prog(f, K9.cmp, 14)} />)}
					{[CX[1], CX[2]].map(x => <line key={x} x1={x} y1={210} x2={x} y2={690} stroke="rgba(60,45,20,0.2)" strokeWidth={2} opacity={prog(f, K9.cmp, 14)} />)}
					<g opacity={prog(f, K9.cmp + 6, 14)}>
						<SlimStrand x={CX[1] + 30} y={236} n={9} pitch={24} gap={32} rung={i => (i === 4 ? {color: AMBER, w: 6} : undefined)} />
						<Sx x={CX[1] + 290} y={270} text="point" size={42} color={INK} weight={800} />
						<Bar segs={mini.segs} cen={mini.cen} y={255} gw={30} h={30} size={16} />
						<Sx x={CX[2] + 300} y={270} text="chromosomal" size={42} color={INK} weight={800} />
					</g>
					{ROWS.map((r, i) => {
						const y0 = 310 + i * 130;
						return (
							<g key={i}>
								<Sx x={CX[0] + 24} y={y0 + 74} text={r.h} size={36} color={INK_SOFT} hand at={K9[r.atA]} />
								{r.a.map((t, k) => <Sx key={'a' + k} x={CX[1] + 24} y={y0 + 56 + k * 42 + (r.a.length === 1 ? 18 : 0)} text={t} size={32} color={INK} weight={600} at={K9[r.atA] + 4} />)}
								{r.b.map((t, k) => <Sx key={'b' + k} x={CX[2] + 24} y={y0 + 56 + k * 42 + (r.b.length === 1 ? 18 : 0)} text={t} size={32} color={INK} weight={600} at={K9[r.atB] + 4} />)}
							</g>
						);
					})}
				</g>
				{/* bigger isn't always worse */}
				<g opacity={prog(f, K9.balanced, 14)}>
					<Bar segs={nrm.segs} cen={nrm.cen} y={640} gw={40} h={34} size={20} />
					<Bar segs={inv.segs} cen={inv.cen} y={700} gw={40} h={34} size={20} />
					<TickC x={640} y={668} s={34} />
				</g>
				<Lbl x={400} y={790} text="often no effect" size={42} color={BIO_INK} anchor="middle" at={K9.balanced + 16} />
				<g opacity={prog(f, K9.nonsense, 14)}>
					<Beads xs={[1150, 1230, 1310]} y={670} r={30} aa={['Met', 'Gln', '']} bo={k => (k < 2 ? 1 : 0)} lo={k => (k === 0 ? 1 : 0)} />
					<StopBar x={1285} y={670} />
					{[1350, 1430, 1510].map(x => <GhostBead key={x} x={x} y={670} r={26} />)}
				</g>
				<Lbl x={1330} y={790} text="one base: can be severe" size={42} color={AMBER_INK} anchor="middle" at={K9.nonsense + 16} />
				<Lbl x={960} y={920} text="effect depends on which genes, not size alone" size={50} color={AMBER_INK} anchor="middle" at={K9.wreck} />
				{void CW}{void CHR2}
			</Overlay>
		</>
	);
};

// ---------- 10. Memory: the book ----------
const K10 = cues(S('memory'), {book: 'Think of a chromosome as a book', del: 'In a deletion', dup: 'In a duplication', inv: 'In an inversion', trans: 'in a translocation', limit: 'The analogy has a limit', intact: 'An intact flipped gene', brk: 'a break inside it', switches: 'switches it on'});
const TABS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const dimL = 1 - 0.6 * prog(f, K10.limit, 14);
	const phase = f >= K10.trans ? 4 : f >= K10.inv ? 3 : f >= K10.dup ? 2 : f >= K10.del ? 1 : 0;
	const tabs = phase === 1 ? TABS.map(l => ({l, o: l === 'C' || l === 'D' ? 0.15 : 1}))
		: phase === 2 ? ['A', 'B', 'C', 'D', 'C', 'D', 'E', 'F', 'G', 'H'].map((l, i) => ({l, amber: i === 4 || i === 5}))
			: phase === 3 ? ['A', 'B', 'C', 'D', 'G', 'F', 'E', 'H'].map(l => ({l, amber: 'GFE'.includes(l)}))
				: phase === 4 ? ['A', 'B', 'C', 'D', 'E', 'F'].map(l => ({l})) : TABS.map(l => ({l}));
	const lines = [
		{at: K10.del, t: 'deletion: chapter lost'},
		{at: K10.dup, t: 'duplication: printed twice'},
		{at: K10.inv, t: 'inversion: back to front'},
		{at: K10.trans, t: 'translocation: moved to another book'},
	];
	const mk = (labels: string[], x0: number, mod?: (s: Seg) => Seg, tone?: 'blue') => { const L = lay(labels, x0, 28, 14, tone ?? 'n'); return {segs: mod ? L.segs.map(mod) : L.segs, cen: L.cen, end: L.end}; };
	const bars = [
		mk(CHR1, 900, s => (s.l === 'C' || s.l === 'D' ? {...s, dashed: true} : s)),
		(() => { const b = mk(['A', 'B', '●', 'C', 'D', 'C', 'D', 'E', 'F', 'G', 'H'], 900); b.segs[4].tone = 'amber'; b.segs[5].tone = 'amber'; return b; })(),
		mk(['A', 'B', '●', 'C', 'D', 'G', 'F', 'E', 'H'], 900, s => ('GFE'.includes(s.l) ? {...s, tone: 'amber'} : s)),
	];
	const t1 = mk(['A', 'B', '●', 'C', 'D', 'E', 'F'], 900);
	const t2 = mk(['M', 'N', '●', 'O', 'G', 'H'], 900 + t1.end - 900 + 30, s => (s.l === 'G' || s.l === 'H' ? {...s, tone: 'amber'} : s), 'blue');
	const inset = vis(f, K10.limit + 6, 866, 14);
	const tag2 = f >= K10.switches;
	return (
		<>
			<Heading text="A chromosome is a book" at={K10.book} size={56} />
			<Overlay>
				<g opacity={dimL}>
					<Book x={1400} y={210} w={180} h={330} tabs={tabs} o={prog(f, K10.book, 14)} />
					<Book x={1660} y={330} w={110} h={210} tabs={[{l: 'M'}, {l: 'N'}, {l: 'G', amber: true}, {l: 'H', amber: true}]} o={prog(f, K10.trans + 6, 14)} />
					{lines.map((l, i) => <Sx key={i} x={140} y={300 + i * 100} text={l.t} size={44} color={i === phase - 1 ? AMBER_INK : INK} hand at={l.at} />)}
					{bars.map((b, i) => <g key={i} opacity={prog(f, lines[i].at + 8, 12)}><Bar segs={b.segs} cen={b.cen} y={290 + i * 100} gw={28} h={28} size={16} /></g>)}
					<g opacity={prog(f, K10.trans + 8, 12)}>
						<Bar segs={t1.segs} cen={t1.cen} y={590} gw={28} h={28} size={16} />
						<Bar segs={t2.segs} cen={t2.cen} cenTone="blue" y={590} gw={28} h={28} size={16} />
					</g>
				</g>
				{/* the analogy's limit */}
				<g opacity={inset}>
					<rect x={420} y={680} width={1080} height={250} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
					<rect x={500} y={812} width={920} height={50} rx={25} fill="#fbf0cf" stroke={INK} strokeWidth={3} />
					<path d="M720,800 L720,786 L1240,786 L1240,800" fill="none" stroke={AMBER_INK} strokeWidth={4} strokeDasharray="8 6" />
					<rect x={1060} y={814} width={150} height={46} fill="#f6d58e" />
					<path d="M1200,776 L1072,776 M1086,766 L1070,776 L1086,786" fill="none" stroke={AMBER_INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
					<BreakMark x={720} y={837} h={50} o={vis(f, K10.brk, 866, 8) * (0.6 + 0.4 * Math.abs(Math.sin(f / 4)))} />
					<g opacity={prog(f, K10.switches, 12)}>
						<rect x={640} y={814} width={48} height={46} fill={BIO_INK} opacity={0.55} />
						<path d="M688,880 C820,910 980,910 1120,866" fill="none" stroke={AMBER_INK} strokeWidth={3} strokeDasharray="6 6" />
					</g>
				</g>
				<Lbl x={960} y={740} text="intact gene: still read from its own start" size={38} color={BIO_INK} anchor="middle" at={K10.intact} out={K10.switches} />
				<Lbl x={960} y={740} text="a break or moved control DNA can affect it" size={38} color={AMBER_INK} anchor="middle" at={K10.switches + 4} out={866} />
				<Sx x={140} y={720} text="nondisjunction: fail to dis-join" size={44} color={INK} hand at={872} />
				<g opacity={prog(f, 878, 12)}><Glyph x={760} y={705} color={PLUMC} dup /><Glyph x={784} y={705} color={TEALC} dup /></g>
				{void tag2}{void INK_SOFT}
			</Overlay>
		</>
	);
};
