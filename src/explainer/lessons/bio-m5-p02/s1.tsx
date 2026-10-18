// P02 (Biology practical) scenes 1 to 4: the hook (two parents, varied seeds, a bench of beads), the aim and kit
// (plates landing, colour key), building the parent cell (bead chains grow, allele stickers land at matching positions,
// level lines join the homologues), and copying (sisters slide out, centromere pieces clip, count by centromeres).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Bead, Bench, CEN_L, CEN_S, CZ, Chip, Chromo, Coin, ColourKey2, DrawPath, EDGE, Fade, GCard, GREYT, GreyTag, Heading, INK, INK_SOFT, Loop, MistakeChip,
	NL, NS, Overlay, PIT, PLP, Panel, PlateB, QMark, QUESTION, Rail, Ring, S, STK_L, STK_S, Sx, TEAL, chainH, chromatid, lerp, prog, pulse, rng, Die,
} from './shared';

/** Parent cell layout. */
export const CELL0 = {x: 560, y: 600, rx: 400, ry: 300};
export const HX = {Lp: 360, Lt: 470, Sp: 660, St: 770};
export const LY = CELL0.y - chainH(NL) / 2, SY = CELL0.y - chainH(NS) / 2 + 40;
export const SPEC = {Lp: chromatid('L', 'P'), Lt: chromatid('L', 'T'), Sp: chromatid('S', 'P'), St: chromatid('S', 'T')};

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {two: 'Two parent plants', hundred: 'a hundred seeds', same: 'no two are quite the same', predict: 'Can you predict which genotypes', can: 'You can', beads: 'a few pop-beads', meiosis: 'model meiosis', crossing: 'crossing over', fert: 'then fertilisation', mut: 'a mutation', use: 'use the model to predict', wrong: 'can go wrong'});
const SEEDS = ['Pp Tt Rr', 'PP Tt rr', 'pp tt Rr', 'Pp TT RR', 'pp Tt rr', 'PP tt Rr', 'Pp tt rr', 'pp TT Rr'];
const HEAP = (() => { const r = rng(7); return Array.from({length: 26}, (_, i) => ({x: 200 + (r() - 0.5) * 220, y: 380 + (r() - 0.5) * 150, c: (i % 2 ? 'P' : 'T') as 'P' | 'T'})); })();
export const SceneHookP02: React.FC = () => {
	const f = useCurrentFrame();
	const grow = prog(f, K1.meiosis, 40);
	return (
		<>
			<Heading text={QUESTION} at={K1.use} size={54} />
			<Overlay>
				<Bench p={prog(f, 0, 22)} />
				{/* seeds */}
				<Sx x={CZ.x + 10} y={300} text="offspring seeds: all different" size={30} color={INK} hand at={K1.hundred} />
				{SEEDS.map((g, i) => {
					const x = CZ.x + 70 + (i % 4) * 135, y = 400 + Math.floor(i / 4) * 190;
					const p = PLP[g.includes('R') ? 'peaRound' : 'peaWrinkled'];
					return (
						<g key={g} opacity={prog(f, K1.hundred + i * 5, 12)}>
							<PlateB p={p} cx={x} cy={y} w={84} />
							<Sx x={x} y={y + 80} text={g} size={24} color={INK} weight={800} anchor="middle" />
						</g>
					);
				})}
				<Ring cx={CZ.x + 270} cy={490} rx={300} ry={230} at={K1.same} out={K1.predict + 30} />
				<QMark x={CZ.x + 270} y={820} size={90} color={AMBER_INK} o={prog(f, K1.predict, 12) * (1 - prog(f, K1.can, 10))} />
				<Sx x={CZ.x + 270} y={830} text="predict them with a model" size={32} color={TEAL} hand anchor="middle" at={K1.can} />
				{/* a bench of beads */}
				{HEAP.map((b, i) => <Bead key={i} x={b.x} y={b.y} c={b.c} r={14} o={prog(f, K1.beads + i, 8) * (1 - prog(f, K1.meiosis, 20))} />)}
				<Sx x={200} y={520} text="a few pop-beads" size={30} color={INK} hand anchor="middle" at={K1.beads + 6} out={K1.meiosis} />
				{/* meiosis model */}
				<Loop x={500} y={560} rx={300} ry={230} p={prog(f, K1.meiosis - 6, 24)} />
				<Chromo x={380} y={440} a={SPEC.Lp} aProps={{grow}} o={prog(f, K1.meiosis, 8)} />
				<Chromo x={460} y={440} a={SPEC.Lt} aProps={{grow}} o={prog(f, K1.meiosis, 8)} />
				<Chromo x={560} y={500} a={{...SPEC.Sp, amber: f >= K1.mut + 8 ? STK_S : undefined}} aProps={{grow, amberRing: pulse(f, K1.mut + 8, 30)}} o={prog(f, K1.meiosis, 8)} />
				<Chromo x={640} y={500} a={SPEC.St} aProps={{grow}} o={prog(f, K1.meiosis, 8)} />
				<Sx x={500} y={300} text="meiosis with crossing over" size={30} color={INK} hand anchor="middle" at={K1.crossing} />
				{/* fertilisation */}
				<GCard x={lerp(880, 990, prog(f, K1.fert + 6, 20))} y={800} back w={130} o={prog(f, K1.fert, 10)} rot={-6} />
				<GCard x={lerp(1160, 1060, prog(f, K1.fert + 6, 20))} y={800} back w={130} o={prog(f, K1.fert, 10)} rot={5} />
				<Sx x={1025} y={890} text="fertilisation" size={30} color={INK} hand anchor="middle" at={K1.fert + 10} />
				<Sx x={560} y={850} text="a mutation: a new allele" size={30} color={AMBER_INK} hand anchor="middle" at={K1.mut + 8} />
				<Chip x={CZ.x + 40} y={890} text="where predictions go wrong" at={K1.wrong - 8} size={30} color={AMBER_INK} stroke={AMBER} />
			</Overlay>
		</>
	);
};

// ---------- 2. Aim and kit ----------
const K2 = cues(S('aim-kit'), {aim: 'The aim', model: 'model meiosis, fertilisation and mutation', predict: 'predict the variation', beads: 'pop-beads in two colours', cen: 'centromere pieces', stk: 'small stickers', coin: 'a coin', die: 'a die', loops: 'string loops for cells', cards: 'blank cards', sheet: 'a results sheet', plum: 'Plum beads stand for', teal: 'teal for those from its father', track: 'track where every piece came from'});
export const SceneAimP02: React.FC = () => {
	const f = useCurrentFrame();
	const items: {at: number; t: string; cx: number; cy: number; node: React.ReactNode}[] = [
		{at: K2.beads, t: 'pop-beads, 2 colours', cx: 210, cy: 390, node: <g>{[0, 1, 2].map(i => <Bead key={i} x={170 + i * 2.2 * 16} y={370} c="P" r={16} />)}{[0, 1, 2].map(i => <Bead key={'t' + i} x={170 + i * 2.2 * 16} y={420} c="T" r={16} />)}</g>},
		{at: K2.cen, t: 'centromere pieces', cx: 470, cy: 390, node: <PlateB p={PLP.centromere} cx={470} cy={390} w={150} />},
		{at: K2.stk, t: 'small stickers', cx: 730, cy: 390, node: <PlateB p={PLP.stickers} cx={730} cy={390} w={170} />},
		{at: K2.coin, t: 'a coin', cx: 990, cy: 390, node: <Coin x={990} y={390} r={40} from={K2.coin} to={K2.coin + 24} face="P" />},
		{at: K2.die, t: 'a die', cx: 210, cy: 680, node: <Die x={210} y={680} w={150} pips={6} tumble={prog(f, K2.die, 20)} />},
		{at: K2.loops, t: 'string loops (cells)', cx: 470, cy: 680, node: <g><PlateB p={PLP.loop} cx={470} cy={680} w={170} /></g>},
		{at: K2.cards, t: 'blank cards', cx: 730, cy: 680, node: <PlateB p={PLP.cards} cx={730} cy={680} w={160} />},
		{at: K2.sheet, t: 'results sheet', cx: 990, cy: 680, node: <PlateB p={PLP.clipboard} cx={990} cy={680} w={140} />},
	];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Bench />
				<Fade at={K2.aim}>
					<Panel x={CZ.x} y={CZ.y} w={CZ.w} h={290} stroke={AMBER} />
					<Sx x={CZ.x + 26} y={CZ.y + 56} text="Aim" size={44} color={INK} hand />
				</Fade>
				{['model meiosis, fertilisation and', 'mutation to predict the variation', 'in offspring genotypes.'].map((t, i) => (
					<Sx key={i} x={CZ.x + 26} y={CZ.y + 112 + i * 44} text={t} size={30} color={INK} weight={600} at={(i < 1 ? K2.model : K2.predict) + i * 8} />
				))}
				{items.map((it, i) => {
					const p = prog(f, it.at, 14);
					return (
						<g key={i}>
							<g opacity={p} transform={`translate(0,${(1 - p) * -36})`}>{it.node}</g>
							<Sx x={it.cx} y={it.cy + 112} text={it.t} size={26} color={INK} weight={700} anchor="middle" at={it.at + 6} />
						</g>
					);
				})}
				<Fade at={K2.plum}>
					<Panel x={CZ.x} y={600} w={CZ.w} h={230} stroke={EDGE} />
				</Fade>
				<Bead x={CZ.x + 50} y={650} c="P" r={20} o={prog(f, K2.plum, 10)} />
				<Sx x={CZ.x + 90} y={662} text="plum: from the parent's mother" size={28} color={INK} weight={700} at={K2.plum} />
				<Bead x={CZ.x + 50} y={714} c="T" r={20} o={prog(f, K2.teal, 10)} />
				<Sx x={CZ.x + 90} y={726} text="teal: from the parent's father" size={28} color={INK} weight={700} at={K2.teal} />
				<Sx x={CZ.x + 26} y={796} text="colours track where each piece came from" size={28} color={AMBER_INK} hand at={K2.track} />
				<GreyTag x={CZ.x} y={850} text="B5b colours" at={K2.teal + 10} size={22} />
				<ColourKey2 at={[K2.plum + 20, K2.teal + 20, K2.stk + 20, K2.track]} />
			</Overlay>
		</>
	);
};

// ---------- 3. Step 1: build the parent cell ----------
const K3 = cues(S('build-parent'), {step: 'Step one', two: 'two pairs of chromosomes', lp: 'long plum chain', lt: 'long teal chain', short: 'a short pair', stick: 'Stick alleles', match: 'matching positions', pt: 'purple and tall', ws: 'white and short', round: 'round on the short plum', wr: 'wrinkled on the short teal', matter: 'Matching positions matter', same: 'the same genes in the same places'});
export const SceneBuildP02: React.FC = () => {
	const f = useCurrentFrame();
	const g = (at: number) => prog(f, at, 30);
	const stkAt: Record<string, number> = {Lp: K3.pt, Lt: K3.ws, Sp: K3.round, St: K3.wr};
	const lvl = prog(f, K3.same, 20);
	const yP = LY + STK_L[0] * PIT, yT = LY + STK_L[1] * PIT, yR = SY + STK_S * PIT;
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={0} at={K3.step} />
				<Bench />
				<Loop x={CELL0.x} y={CELL0.y} rx={CELL0.rx} ry={CELL0.ry} p={prog(f, K3.step + 6, 30)} />
				{(['Lp', 'Lt', 'Sp', 'St'] as const).map(k => (
					<Chromo key={k} x={HX[k]} y={k[0] === 'L' ? LY : SY} a={SPEC[k]} aProps={{grow: g(k === 'Lp' ? K3.lp : k === 'Lt' ? K3.lt : K3.short + (k === 'St' ? 10 : 0)), stkO: prog(f, stkAt[k], 10)}} o={1} />
				))}
				{[{y: yP, x1: HX.Lp, x2: HX.Lt, t: 'flower colour'}, {y: yT, x1: HX.Lp, x2: HX.Lt, t: 'height'}, {y: yR, x1: HX.Sp, x2: HX.St, t: 'seed shape'}].map((l, i) => (
					<g key={i} opacity={lvl}>
						<line x1={l.x1 - 30} y1={l.y} x2={l.x1 - 30 + (l.x2 - l.x1 + 60) * lvl} y2={l.y} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="8 7" />
						<Sx x={l.x2 + 30} y={l.y + 8} text={l.t} size={24} color={AMBER_INK} hand />
					</g>
				))}
				<Sx x={415} y={LY - 30} text="long pair" size={26} color={INK_SOFT} weight={700} anchor="middle" at={K3.lt + 20} />
				<Sx x={715} y={SY - 30} text="short pair" size={26} color={INK_SOFT} weight={700} anchor="middle" at={K3.short + 20} />
				<Sx x={CELL0.x} y={CELL0.y + CELL0.ry - 20} text="2n = 4" size={36} color={INK} weight={800} anchor="middle" at={K3.two} />
				{/* allele card */}
				<Fade at={K3.stick}>
					<Panel x={CZ.x} y={CZ.y} w={CZ.w} h={360} stroke={AMBER} />
					<Sx x={CZ.x + 26} y={CZ.y + 54} text="Allele stickers" size={40} color={INK} hand />
				</Fade>
				{[{t: 'P purple, T tall', at: K3.pt, c: 'P' as const}, {t: 'p white, t short', at: K3.ws, c: 'T' as const}, {t: 'R round', at: K3.round, c: 'P' as const}, {t: 'r wrinkled', at: K3.wr, c: 'T' as const}].map((r, i) => (
					<g key={i}>
						<Bead x={CZ.x + 46} y={CZ.y + 104 + i * 58} c={r.c} r={16} o={prog(f, r.at, 10)} />
						<Sx x={CZ.x + 80} y={CZ.y + 116 + i * 58} text={r.t} size={32} color={INK} weight={700} at={r.at} />
					</g>
				))}
				<Sx x={CZ.x + 26} y={CZ.y + 345} text="letters on screen only" size={22} color={INK_SOFT} weight={600} at={K3.wr + 10} />
				<Fade at={K3.same}>
					<Panel x={CZ.x} y={CZ.y + 400} w={CZ.w} h={130} stroke={TEAL} />
				</Fade>
				<Sx x={CZ.x + 26} y={CZ.y + 456} text="homologous pair:" size={34} color={INK} hand at={K3.same} />
				<Sx x={CZ.x + 26} y={CZ.y + 500} text="same genes, same places" size={32} color={INK} weight={700} at={K3.same + 8} />
				<GreyTag x={CZ.x} y={CZ.y + 560} text="B5a" at={K3.same + 16} size={22} />
				<ColourKey2 />
			</Overlay>
		</>
	);
};

// ---------- 4. Step 2: copy each chromosome ----------
const K4 = cues(S('copy'), {step: 'Step two', copied: 'the DNA is copied', twin: 'identical twin of each chain', same: 'same colour, same stickers', cen: 'centromere piece', sister: 'two sister chromatids', count: 'Count them', four: 'still four chromosomes', centromeres: 'you count centromeres'});
export const SceneCopyP02: React.FC = () => {
	const f = useCurrentFrame();
	const keys = ['Lp', 'Lt', 'Sp', 'St'] as const;
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={1} at={K4.step} />
				<Bench />
				<Loop x={CELL0.x} y={CELL0.y} rx={CELL0.rx} ry={CELL0.ry} />
				{keys.map((k, i) => {
					const y = k[0] === 'L' ? LY : SY;
					const ci = k[0] === 'L' ? CEN_L : CEN_S;
					const cnt = K4.four + i * 9;
					return (
						<g key={k}>
							<Chromo x={HX[k]} y={y} a={SPEC[k]} b={SPEC[k]} dup={prog(f, K4.twin + i * 8, 20)} cen={prog(f, K4.cen + i * 5, 10)} cenRing={pulse(f, cnt, 26)} />
							<g opacity={prog(f, cnt, 8)}>
								<circle cx={HX[k] - 44} cy={y + ci * PIT} r={18} fill={AMBER} stroke={AMBER_INK} strokeWidth={2.5} />
								<text x={HX[k] - 44} y={y + ci * PIT + 8} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 22}} fill={INK}>{i + 1}</text>
							</g>
						</g>
					);
				})}
				<Sx x={CELL0.x} y={CELL0.y + CELL0.ry - 20} text="4 chromosomes (count centromeres)" size={32} color={INK} weight={800} anchor="middle" at={K4.four + 36} />
				<Sx x={415} y={LY - 30} text="same colour, same stickers" size={26} color={INK_SOFT} weight={700} anchor="middle" at={K4.same} />
				{/* the real thing */}
				<PlateB p={PLP.chrPink} cx={CZ.x + 150} cy={420} w={100} o={prog(f, K4.sister, 14)} />
				<PlateB p={PLP.chrTeal} cx={CZ.x + 290} cy={420} w={100} o={prog(f, K4.sister + 6, 14)} />
				<Sx x={CZ.x + 220} y={580} text="the real thing" size={30} color={INK_SOFT} hand anchor="middle" at={K4.sister + 10} />
				<Sx x={CZ.x + 20} y={650} text="each chromosome =" size={30} color={INK} weight={700} at={K4.sister} />
				<Sx x={CZ.x + 20} y={692} text="two sister chromatids" size={30} color={INK} weight={700} at={K4.sister + 6} />
				<MistakeChip x={CZ.x + 20} y={760} text="8 chromosomes" at={K4.count + 10} cross={K4.centromeres} size={30} />
				<GreyTag x={CZ.x + 20} y={850} text="count centromeres, not chromatids" at={K4.centromeres + 8} size={22} />
				<ColourKey2 />
			</Overlay>
		</>
	);
};
void DrawPath; void GREYT; void NS;
