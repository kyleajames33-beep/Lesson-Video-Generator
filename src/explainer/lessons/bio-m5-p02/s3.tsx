// P02 (Biology practical) scenes 8 to 10: fertilisation by random draw (two face-down stacks shuffle, one card flips
// from each, their chromosomes join in one loop, the genotype is recorded, the cards go back), the mutation step (one
// sticker peels and an amber new allele lands; neither parent has it), and the example result (four equally likely
// pairings, 1 : 2 : 1, tally table, observed against expected column chart).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Bench, CZ, Chain, Chip, ColourKey2, DataTable, EDGE, EXPECT, Fade, GCard, GreyTag, Heading, INK, INK_SOFT, Loop, N_FERT, ObsExpChart, Overlay, Panel,
	QUESTION, Rail, S, STK_S, SpanBracket, Sticker, Sx, TALLY, TEAL, Tally, lerp, prog, pulse, PIT, R,
} from './shared';
import {SPEC} from './s1';

// ---------- 8. Step 6: fertilisation by random draw ----------
const K8 = cues(S('fertilise'), {step: 'Step six', partner: 'A partner group builds', keeps: 'keeps every gamete card', shuffle: 'shuffles its cards face down', draw: 'draws one at random', put: 'Put the two gametes together', zygote: "That's the zygote", back: 'back to two of each chromosome', record: 'Record its genotype', ret: 'return the cards', repeat: 'and repeat', models: 'The random draw models', any: 'any gamete can meet any gamete'});
const STK = [{x: 220, label: 'parent 1 gametes'}, {x: 1060, label: 'parent 2 gametes'}];
export const ZY = {x: 640, y: 640, rx: 230, ry: 210};
/** The zygote's four chromosomes (from P T r and p t R). */
export const ZygoteChains: React.FC<{o?: number; dy?: number; stkRing?: number; mutant?: boolean; amberRing?: number}> = ({o = 1, dy = 0, stkRing = 0, mutant = false, amberRing = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<Chain x={ZY.x - 105} y={ZY.y - 120 + dy} spec={SPEC.Lp} stkRing={stkRing} />
		<Chain x={ZY.x - 45} y={ZY.y - 40 + dy} spec={SPEC.St} stkRing={stkRing} />
		<Chain x={ZY.x + 45} y={ZY.y - 120 + dy} spec={SPEC.Lt} stkRing={stkRing} />
		<Chain x={ZY.x + 105} y={ZY.y - 40 + dy} spec={mutant ? {...SPEC.Sp, stk: {[STK_S]: 'R*'}, amber: STK_S} : SPEC.Sp} stkRing={mutant ? 0 : stkRing} amberRing={amberRing} />
	</g>
));
export const SceneFertiliseP02: React.FC = () => {
	const f = useCurrentFrame();
	const sh = (k: number) => (f > K8.shuffle && f < K8.shuffle + 36 ? Math.sin((f - K8.shuffle) / 3 + k) * 22 : 0);
	const pick = prog(f, K8.draw, 18);
	const flip = prog(f, K8.draw + 18, 14);
	const join = prog(f, K8.put, 22);
	const ret = prog(f, K8.ret, 20);
	const drawn = ['P T r', 'p t R'];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={5} at={K8.step} />
				<Bench />
				{STK.map((s, k) => (
					<g key={k} opacity={k === 0 ? 1 : prog(f, K8.partner, 12)}>
						{[0, 1, 2, 3, 4].map(i => <GCard key={i} x={s.x + i * 3 + (i % 2 ? sh(i) : -sh(i))} y={420 - i * 4} back w={150} rot={(i % 3) - 1} />)}
						<Sx x={s.x} y={520} text={s.label} size={28} color={INK} weight={700} anchor="middle" />
					</g>
				))}
				<Sx x={1060} y={556} text="(partner group)" size={24} color={INK_SOFT} weight={600} anchor="middle" at={K8.partner} />
				{drawn.map((t, k) => {
					const x0 = STK[k].x, x1 = k ? 820 : 460;
					const x = lerp(lerp(x0, x1, pick), x0, ret), y = lerp(lerp(400, 330, pick), 400, ret);
					return <GCard key={t} x={x} y={y} t={t} w={150} flip={flip * (1 - ret)} o={prog(f, K8.draw, 6) * (1 - prog(f, K8.ret + 18, 8))} ring={pulse(f, K8.draw + 30, 30)} />;
				})}
				{/* zygote */}
				<Loop x={ZY.x} y={ZY.y + 40} rx={ZY.rx} ry={ZY.ry} p={join} />
				<ZygoteChains o={join} dy={lerp(-80, 0, join)} />
				<Sx x={ZY.x} y={ZY.y + 290 - 10} text="zygote: 2n = 4" size={32} color={INK} weight={800} anchor="middle" at={K8.zygote} />
				<Sx x={ZY.x + ZY.rx + 40} y={ZY.y + 40} text="two of each" size={28} color={TEAL} hand at={K8.back} />
				<Sx x={ZY.x + ZY.rx + 40} y={ZY.y + 76} text="chromosome again" size={28} color={TEAL} hand at={K8.back + 6} />
				{/* the record */}
				<Fade at={K8.record}>
					<Panel x={CZ.x} y={CZ.y + 10} w={CZ.w} h={260} stroke={AMBER} />
					<Sx x={CZ.x + 24} y={CZ.y + 60} text="Offspring record" size={36} color={INK} hand />
				</Fade>
				<Sx x={CZ.x + 24} y={CZ.y + 120} text="1.  Pp Tt Rr" size={38} color={INK} weight={800} at={K8.record + 10} />
				<Sx x={CZ.x + 24} y={CZ.y + 170} text="2.  ..." size={32} color={INK_SOFT} weight={700} at={K8.repeat} />
				<Sx x={CZ.x + 24} y={CZ.y + 226} text="cards back, shuffle, repeat" size={28} color={AMBER_INK} hand at={K8.ret} />
				<Fade at={K8.models}>
					<Panel x={CZ.x} y={CZ.y + 320} w={CZ.w} h={150} stroke={TEAL} />
				</Fade>
				<Sx x={CZ.x + 24} y={CZ.y + 374} text="random draw = random" size={32} color={INK} weight={700} at={K8.models} />
				<Sx x={CZ.x + 24} y={CZ.y + 420} text="fertilisation: any gamete" size={32} color={INK} weight={700} at={K8.any} />
				<Sx x={CZ.x + 24} y={CZ.y + 456} text="can meet any gamete" size={28} color={INK} weight={600} at={K8.any + 8} />
				<ColourKey2 />
			</Overlay>
		</>
	);
};

// ---------- 9. Step 7: add a mutation ----------
const K9 = cues(S('mutate'), {step: 'Step seven', before: 'Before one fertilisation', swap: 'swap one sticker in one gamete', allele: 'a new allele in a new colour', models: 'That models a DNA change', makes: 'a cell that makes gametes', off: 'The offspring from that gamete', neither: 'neither parent had', cross: 'Crossing over, assortment and fertilisation', reshuffle: 'only reshuffle alleles', only: 'Only mutation makes a new one'});
export const SceneMutateP02: React.FC = () => {
	const f = useCurrentFrame();
	const peel = prog(f, K9.swap + 10, 18);
	const land = prog(f, K9.allele, 16);
	const merge = prog(f, K9.off, 26);
	const gx = lerp(300, ZY.x + 75, merge), gyS = lerp(560, ZY.y - 40, merge);
	const shortY = gyS;
	const stY = shortY + STK_S * PIT;
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={6} at={K9.step} />
				<Bench />
				{/* the gamete being mutated */}
				<g opacity={1 - merge}>
					<Loop x={300} y={600} rx={120} ry={250} />
					<Chain x={260} y={480} spec={SPEC.Lt} />
					<Sx x={300} y={890} text="gamete p t R" size={28} color={INK} weight={800} anchor="middle" at={-100} />
				</g>
				<Loop x={ZY.x} y={ZY.y + 40} rx={ZY.rx} ry={ZY.ry} p={merge} />
				<Chain x={gx + 30} y={shortY} spec={{...SPEC.Sp, stk: {}}} />
				<Sticker x={gx + 30 + peel * 70} y={stY - peel * 90} t="R" o={1 - prog(f, K9.swap + 22, 10)} />
				<Sticker x={gx + 30} y={lerp(stY - 120, stY, land)} t="R*" amber={1} o={land} ring={pulse(f, K9.only + 10, 40)} />
				<Sx x={gx + 70} y={stY - 30} text="new allele, new colour" size={28} color={AMBER_INK} hand at={K9.allele + 10} out={K9.off} />
				<GreyTag x={110} y={290} text="in a cell that makes eggs or sperm (B8)" at={K9.makes} size={22} />
				{/* the other gamete and the zygote */}
				<GCard x={900} y={360} t="P T r" w={150} o={prog(f, K9.before, 12) * (1 - merge)} />
				<Sx x={900} y={430} text="other parent's gamete" size={24} color={INK_SOFT} weight={600} anchor="middle" at={K9.before} out={K9.off} />
				<g opacity={merge}>
					<Chain x={ZY.x - 105} y={ZY.y - 120} spec={SPEC.Lp} stkRing={pulse(f, K9.reshuffle, 40)} />
					<Chain x={ZY.x - 45} y={ZY.y - 40} spec={SPEC.St} stkRing={pulse(f, K9.reshuffle, 40)} />
					<Chain x={ZY.x + 45} y={ZY.y - 120} spec={SPEC.Lt} stkRing={pulse(f, K9.reshuffle, 40)} />
				</g>
				<Sx x={ZY.x} y={ZY.y + 280} text="offspring with R*" size={32} color={INK} weight={800} anchor="middle" at={K9.off + 20} />
				{/* parents have no R* */}
				<Fade at={K9.neither}>
					<Panel x={CZ.x} y={CZ.y + 10} w={CZ.w} h={200} stroke={EDGE} />
				</Fade>
				<Sx x={CZ.x + 24} y={CZ.y + 70} text="parent 1: Pp Tt Rr" size={32} color={INK} weight={700} at={K9.neither} />
				<Sx x={CZ.x + 380} y={CZ.y + 70} text="no R*" size={30} color={AMBER_INK} hand at={K9.neither + 8} />
				<Sx x={CZ.x + 24} y={CZ.y + 140} text="parent 2: Pp Tt Rr" size={32} color={INK} weight={700} at={K9.neither} />
				<Sx x={CZ.x + 380} y={CZ.y + 140} text="no R*" size={30} color={AMBER_INK} hand at={K9.neither + 14} />
				<Fade at={K9.cross}>
					<Panel x={CZ.x} y={CZ.y + 250} w={CZ.w} h={260} stroke={TEAL} />
				</Fade>
				<Sx x={CZ.x + 24} y={CZ.y + 302} text="crossing over, assortment," size={30} color={INK} weight={600} at={K9.cross} />
				<Sx x={CZ.x + 24} y={CZ.y + 342} text="fertilisation:" size={30} color={INK} weight={600} at={K9.cross} />
				<Sx x={CZ.x + 24} y={CZ.y + 386} text="reshuffle existing alleles" size={32} color={TEAL} hand at={K9.reshuffle} />
				<Sx x={CZ.x + 24} y={CZ.y + 460} text="only mutation: a new allele" size={34} color={AMBER_INK} hand at={K9.only} />
				<ColourKey2 hot={[0, 0, pulse(f, K9.reshuffle, 40), pulse(f, K9.only, 40)]} />
			</Overlay>
		</>
	);
};

// ---------- 10. Results: expected against observed ----------
const K10 = cues(S('results'), {example: 'an example class result', seed: 'seed-shape gene', sixteen: 'from sixteen fertilisations', often: 'equally often', likely: 'equally likely', rr: 'round with round', rw: 'round with wrinkled', wr: 'wrinkled with round', ww: 'and wrinkled with wrinkled', two: 'Two of the four', expects: 'the model expects', got: 'The class got', close: 'Close, but not exact', random: 'each draw is random'});
const PAIRS = [{t: 'R + R', at: 'rr'}, {t: 'R + r', at: 'rw'}, {t: 'r + R', at: 'wr'}, {t: 'r + r', at: 'ww'}] as const;
export const SceneResultsP02: React.FC = () => {
	const f = useCurrentFrame();
	const geno = ['RR', 'Rr', 'rr'] as const;
	const obs = geno.map(g => TALLY[g]), exp = geno.map(g => EXPECT[g]);
	const T = {x: CZ.x, y: 300, rowH: 62};
	const colX = [0, 140, 330, 450];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Bench />
				{/* gametes from each parent */}
				{['parent 1', 'parent 2'].map((p, k) => (
					<g key={p}>
						<Sx x={260 + k * 520} y={300} text={p} size={32} color={INK} hand anchor="middle" at={K10.often - 10} />
						<Chip x={200 + k * 520} y={320} text="R" at={K10.often} size={30} color={INK} hand={false} weight={800} stroke={TEAL} />
						<Chip x={280 + k * 520} y={320} text="r" at={K10.often + 6} size={30} color={INK} hand={false} weight={800} stroke={TEAL} />
					</g>
				))}
				<Sx x={520} y={400} text="each half the time" size={26} color={INK_SOFT} weight={600} anchor="middle" at={K10.often + 10} />
				{PAIRS.map((p, i) => <Chip key={p.t} x={150 + i * 270} y={450} text={p.t} at={K10[p.at]} size={34} color={INK} hand={false} weight={800} stroke={i === 1 || i === 2 ? AMBER : EDGE} />)}
				<Sx x={1110} y={530} text="4 equally likely" size={26} color={INK_SOFT} weight={600} anchor="end" at={K10.likely} />
				<SpanBracket x1={410} x2={830} y={555} at={K10.two} label="1 of each" size={30} />
				<Sx x={150} y={640} text="1 : 2 : 1, so of 16: 4, 8, 4" size={36} color={INK} weight={800} at={K10.expects - 10} />
				<GreyTag x={760} y={612} text="Punnett squares: next video" at={K10.expects} size={20} />
				<ObsExpChart x={260} y={700} w={600} h={160} obs={obs} exp={exp} labels={[...geno]} at={K10.expects} expAt={K10.expects} obsAt={K10.got} />
				{/* tally table */}
				<DataTable x={T.x} y={T.y} cols={[{w: 140, head: 'genotype'}, {w: 190, head: 'tally'}, {w: 120, head: 'observed'}, {w: 120, head: 'expected'}]} rows={geno.map(g => [g, '', '', ''])} at={K10.example} size={30} rowH={T.rowH} headSize={22} />
				{geno.map((g, i) => {
					const y = T.y + T.rowH * (i + 1);
					return (
						<g key={g}>
							<Tally x={T.x + colX[1] + 18} y={y + 16} n={TALLY[g]} p={prog(f, K10.sixteen + i * 10, 24)} h={30} gap={9} />
							<Sx x={T.x + colX[2] + 40} y={y + 42} text={String(TALLY[g])} size={32} color={INK} weight={800} at={K10.got + i * 10} />
							<Sx x={T.x + colX[3] + 40} y={y + 42} text={String(EXPECT[g])} size={32} color={TEAL} weight={800} at={K10.expects + i * 10} />
						</g>
					);
				})}
				<Sx x={T.x} y={T.y + T.rowH * 4 + 36} text={`total: ${N_FERT} fertilisations`} size={26} color={INK_SOFT} weight={700} at={K10.sixteen} />
				<GreyTag x={T.x} y={T.y + T.rowH * 4 + 56} text="example data" at={K10.example + 10} size={22} />
				<Sx x={T.x} y={T.y + T.rowH * 4 + 150} text="close, not exact:" size={34} color={AMBER_INK} hand at={K10.close} />
				<Sx x={T.x} y={T.y + T.rowH * 4 + 194} text="each draw is random" size={34} color={AMBER_INK} hand at={K10.random} />
				<ColourKey2 />
			</Overlay>
		</>
	);
};
void R; void AMBER;
