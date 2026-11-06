// M6 B09 scenes 5 to 9: lane 4, insulin (pancreases from 1922; DNA coding for human insulin slides into the plasmid,
// insulin streams into the vial; the strip takes its amber segment; recombinant DNA named); the full board (each lane
// lights in turn, lane 3's strip copies, lane 4 adds Bt cotton); one advantage chip per lane; the timeline (old methods
// slide to today, rennet to chymosin, three sectors, the arrow to future directions); the two memory lines.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, Sx} from '../bio-m5-b13/shared';
import {GTag} from '../bio-m6-b01/parts';
import {Tg} from '../bio-m6-b07/parts';
import {S} from './common';
import {
	AMBER, AMBER_INK, AlleleRing, BactIns, BIO_INK, Caterpillar, Cheese, DrawPath, Enzyme, GREY_INK, INK, INK_SOFT, LCX, LX, LW,
	PLATES, Pl, Strip, clamp01, lerp, prog, ringPt, smooth, vis,
} from './parts';
import {AdvChip, LaneCard, LaneTerm, Lane1, Lane2, Lane3, Lane4, StripRings, TimeTick} from './big';

// ---------- 5. Changing the DNA: insulin from bacteria ----------
const K5 = cues(S('insulin'), {then: 'Then the insulin', pancreas: 'pancreases', early: 'early nineteen-eighties', sale: 'went on sale', ins: ['human insulin', 2], made: 'made human insulin', here: "Here the organism's", really: 'really was changed', recomb: 'recombinant DNA'});
const WSX = LCX(2);
export const SceneInsulin: React.FC = () => {
	const f = useCurrentFrame();
	const cx4 = LCX(3);
	const [rx, ry] = ringPt(cx4 - 50, 375, 250);
	const mv = smooth(prog(f, K5.ins + 10, 32, x => x));
	const ws = 1 - prog(f, K5.here, 16);
	return (
		<>
			<Heading text="Changing the DNA: insulin" at={4} size={60} />
			<Overlay>
				<LaneCard i={0} />
				<Lane1 dim={1} />
				<LaneCard i={1} />
				<Lane2 dim={1} tick={0} />
				<LaneCard i={2} dash o={prog(f, K5.here + 10, 14)} />
				<LaneCard i={3} active={1} o={prog(f, 2, 14)} />
				<Lane4 bact={prog(f, K5.early, 16)} vial={prog(f, K5.sale - 10, 16)} arc={prog(f, K5.ins + 38, 10)} strip={prog(f, K5.really, 22, x => x)} ins={prog(f, K5.really + 24, 12)} />
				{/* workspace in the empty lane 3 slot */}
				<g opacity={ws}>
					<Pl p={PLATES.pancreas} cx={WSX} cy={410} w={360} o={prog(f, K5.pancreas - 6, 16)} dim={0.85 * prog(f, K5.early, 14)} />
					<GTag x={WSX} y={510} text="1922: cattle and pig pancreases" at={K5.pancreas + 6} out={K5.early} size={30} anchor="middle" />
					{f >= K5.ins ? <Strip cx={lerp(WSX, rx, mv)} y={lerp(650, ry - 6, mv)} n={3} pitch={lerp(22, 9, mv)} gap={lerp(20, 12, mv)} ins={1} i0={0} i1={2} o={prog(f, K5.ins, 8) * (1 - prog(f, K5.ins + 38, 8))} /> : null}
					<Tg x={WSX} y={760} text="DNA coding for human insulin" at={K5.ins + 4} out={K5.made} anchor="middle" size={36} />
					<GTag x={WSX} y={820} text="1982: insulin from bacteria" at={K5.made + 6} size={30} anchor="middle" />
				</g>
				{/* insulin streams out of the bacterium into the vial */}
				{Array.from({length: 6}, (_, k) => {
					const t0 = K5.made + 6 + k * 8;
					const t = smooth(prog(f, t0, 24, x => x));
					const o = prog(f, t0, 6) * (1 - prog(f, t0 + 22, 6));
					return o > 0.01 ? (
						<g key={k} opacity={o}>
							{[0, 1, 2].map(j => <circle key={j} cx={lerp(cx4 + 10, cx4 + 142, t) + j * 9 - 9} cy={lerp(395, 420, t) - Math.sin(t * Math.PI) * 40} r={5} fill="#f3d27a" stroke={AMBER_INK} strokeWidth={1.5} />)}
						</g>
					) : null;
				})}
				<LaneTerm i={3} lines={['recombinant DNA']} bright={1} o={prog(f, K5.recomb, 12)} />
				<Tg x={cx4} y={806} text="DNA joined from" at={K5.recomb + 12} anchor="middle" size={38} color={BIO_INK} />
				<Tg x={cx4} y={852} text="different sources" at={K5.recomb + 12} anchor="middle" size={38} color={BIO_INK} />
				{void K5.then}
			</Overlay>
		</>
	);
};

// ---------- the full board, shared by scenes 6 and 7 ----------
const TERMS = [['fermentation'], ['reproductive', 'technologies'], ['cloning'], ['recombinant DNA,', 'gene editing']];
type BoardS = {lit: number[]; dim: number[]; repro: number; lane3: number; copy: number; cotton: number; cottonGlow?: number; tick2: number};
const Board: React.FC<BoardS> = ({lit, dim, repro, lane3, copy, cotton, cottonGlow = 0, tick2}) => (
	<>
		{[0, 1, 3].map(i => <LaneCard key={i} i={i} active={lit[i]} />)}
		<LaneCard i={2} dash o={1 - lane3} />
		<LaneCard i={2} active={lit[2]} o={lane3} />
		<Lane1 dim={dim[0]} />
		<Lane2 dim={dim[1]} repro={repro} tick={tick2} />
		<Lane3 dim={dim[2]} o={lane3} copy={copy} />
		<Lane4 dim={dim[3]} cotton={cotton} cottonGlow={cottonGlow} />
		{TERMS.map((t, i) => <LaneTerm key={i} i={i} lines={t} bright={lit[i]} o={i === 2 ? lane3 : i === 1 ? repro : 1} />)}
	</>
);

// ---------- 6. The real question: what exactly is changed? ----------
const K6 = cues(S('what-changes'), {useful: 'So the useful question', exactly: 'what exactly is being changed', use: "use an organism's process", parents: 'which parents', ai: 'artificial insemination', copy: 'copy existing DNA', insert: 'insert or edit', cotton: 'cotton carrying'});
export const SceneWhatChanges: React.FC = () => {
	const f = useCurrentFrame();
	const S0 = [K6.use, K6.parents, K6.copy, K6.insert];
	const endAll = S(`what-changes`).voiceover?.endFrame ?? 1066;
	const lit = S0.map((s, i) => vis(f, s, i < 3 ? S0[i + 1] : endAll, 12));
	const eq = prog(f, endAll, 16);
	const dim = lit.map(l => (1 - l) * (1 - eq));
	const [ux0, ux1] = [96, 800];
	return (
		<>
			<Heading text="What does it change?" at={4} size={64} />
			<Overlay>
				<g opacity={vis(f, K6.exactly, K6.use + 10, 10)}><DrawPath d={`M${ux0},182 C${ux0 + 200},176 ${ux1 - 200},190 ${ux1},180`} at={K6.exactly} dur={18} color={AMBER} width={6} /></g>
				<Board lit={lit} dim={dim} repro={prog(f, K6.parents + 20, 16)} lane3={prog(f, K6.copy - 6, 14)} copy={prog(f, K6.copy + 16, 50, x => x)} cotton={prog(f, K6.cotton, 16)} tick2={prog(f, K6.parents + 40, 12)} />
				{void K6.useful}{void K6.ai}
			</Overlay>
		</>
	);
};

// ---------- 7. What each kind is good for ----------
const K7 = cues(S('advantages'), {each: 'Each kind has', many: 'many genes', already: 'already has', together: 'together', never: 'never had', cat: 'caterpillars', soil: 'soil bacterium'});
export const SceneAdvantages: React.FC = () => {
	const f = useCurrentFrame();
	const end = S('advantages').voiceover?.endFrame ?? 1088;
	const cx4 = LCX(3);
	return (
		<>
			<Heading text="What each kind is good for" at={4} size={60} />
			<Overlay>
				<Board lit={[0, 0, 0, 0]} dim={[0, 0, 0, 0]} repro={1} lane3={1} copy={1} cotton={1} cottonGlow={vis(f, K7.cat, end + 20, 12)} tick2={1} />
				<AdvChip cx={LCX(1)} y={835} lines={f >= K7.already ? ['many-gene traits', 'existing alleles; slow'] : ['many-gene traits']} o={prog(f, K7.many, 14)} lit={1 - prog(f, K7.together, 10)} />
				<AdvChip cx={LCX(2)} y={835} lines={['keeps the allele', 'combination']} o={prog(f, K7.together, 14)} lit={1 - prog(f, K7.never, 10)} />
				<AdvChip cx={LCX(3)} y={835} lines={['new trait in', 'one generation']} o={prog(f, K7.never, 14)} lit={1} />
				<Caterpillar x={cx4 + 26} y={480} s={0.9} o={prog(f, K7.cat + 6, 12)} />
				<GTag x={cx4} y={760} text="gene from Bacillus thuringiensis" at={K7.cat + 10} out={end + 10} size={30} anchor="middle" />
				{void K7.each}{void K7.soil}
			</Overlay>
		</>
	);
};

// ---------- 8. Past, present and future ----------
// 6 Nov: the timeline fills the frame (plates two to three times larger, 36 px ticks, larger cheese and sectors).
const K8 = cues(S('timeline'), {put: 'Put it on a timeline', didnt: "didn't disappear", yeast: 'Yeast still raises', breeders: 'breeders still select', tests: 'DNA tests', rennet: 'rennet', chym: 'chymosin', agri: 'agriculture', med: 'medicine', ind: 'industry', edit: 'gene editing', heading: 'heading'});
const TX = [280, 760, 1160, 1620];
const TY = 590;
export const SceneTimeline: React.FC = () => {
	const f = useCurrentFrame();
	const boardO = 1 - prog(f, 0, 18);
	const line = prog(f, K8.put + 6, 30, x => x);
	const slide = smooth(prog(f, K8.didnt + 6, 40, x => x));
	const cheese = smooth(prog(f, K8.chym, 40, x => x));
	const secDim = prog(f, K8.edit, 12);
	const SEC = [{at: K8.agri, x: 1000, word: 'agriculture'}, {at: K8.med, x: 1340, word: 'medicine'}, {at: K8.ind, x: 1640, word: 'industry'}];
	const moved = f >= K8.didnt + 6;
	return (
		<>
			<Heading text="Past, present and future" at={4} size={60} />
			<Overlay>
				<g opacity={boardO} transform={`translate(${960 * (1 - boardO) * 0.2},${-200 * (1 - boardO)}) scale(${1 - 0.2 * (1 - boardO)})`}>
					<Board lit={[0, 0, 0, 0]} dim={[0, 0, 0, 0]} repro={1} lane3={1} copy={1} cotton={1} tick2={1} />
				</g>
				<line x1={120} y1={TY} x2={120 + 1680 * line} y2={TY} stroke={INK_SOFT} strokeWidth={6} strokeLinecap="round" />
				{['thousands of years ago', '1922', '1982', 'today'].map((t, i) => <TimeTick key={i} x={TX[i]} y={TY} text={t} o={prog(f, K8.put + 10 + i * 8, 12)} />)}
				{/* thumbnails */}
				<Pl p={PLATES.bread} cx={185} cy={480} w={180} o={prog(f, K8.put + 14, 12) * (moved ? 0 : 1)} />
				<Pl p={PLATES.sheep} cx={375} cy={482} w={180} o={prog(f, K8.put + 18, 12) * (moved ? 0 : 1)} />
				<Pl p={PLATES.pancreas} cx={TX[1]} cy={500} w={280} o={prog(f, K8.put + 22, 12)} />
				<Pl p={PLATES.vial} cx={TX[2]} cy={480} w={74} o={prog(f, K8.put + 26, 12)} />
				<Pl p={PLATES.yeast} cx={1430} cy={500} w={120} o={prog(f, K8.put + 30, 12)} />
				<Pl p={PLATES.straw} cx={1540} cy={490} w={84} o={prog(f, K8.put + 32, 12)} />
				<Pl p={PLATES.jars} cx={1665} cy={505} w={150} o={prog(f, K8.put + 34, 12)} />
				<BactIns cx={1810} cy={505} w={150} arc={1} o={prog(f, K8.put + 36, 12)} />
				{/* old methods are still used: bread and sheep slide to today */}
				{moved ? (
					<g>
						<Pl p={PLATES.bread} cx={lerp(185, 1480, slide)} cy={lerp(480, 340, slide)} w={lerp(180, 150, slide)} />
						<Pl p={PLATES.sheep} cx={lerp(375, 1660, slide)} cy={lerp(482, 342, slide)} w={lerp(180, 150, slide)} />
					</g>
				) : null}
				<Tg x={1570} y={250} text="still used" at={K8.didnt + 30} out={K8.rennet} anchor="middle" size={44} />
				<g opacity={prog(f, K8.tests + 4, 12)}>
					<Strip cx={1820} y={330} n={5} pitch={20} gap={20} />
					<AlleleRing x={1820 - 50 + 2 * 20 + 10} y={312} r={11} kind="b" glow={vis(f, K8.tests + 4, K8.rennet, 12)} />
				</g>
				<Tg x={1820} y={410} text="DNA tests" at={K8.tests + 8} out={K8.rennet} anchor="middle" size={34} />
				{/* rennet, then chymosin from microbes */}
				<Cheese x={lerp(280, 1500, cheese)} y={760} s={1.5} o={prog(f, K8.rennet, 12)} />
				<GTag x={300} y={860} text="rennet from calves' stomachs" at={K8.rennet + 6} out={K8.chym} size={34} anchor="middle" />
				<BactIns cx={1720} cy={750} w={190} arc={1} o={prog(f, K8.chym + 30, 12)} />
				<GTag x={1600} y={860} text="chymosin from modified microbes" at={K8.chym + 30} out={K8.agri} size={34} anchor="middle" />
				{/* three sectors */}
				{SEC.map((s, i) => (
					<g key={i} opacity={prog(f, s.at, 12) * (1 - 0.55 * secDim)}>
						{i === 0 ? <Pl p={PLATES.cotton} cx={s.x - 50} cy={940} w={88} /> : null}
						{i === 1 ? <Pl p={PLATES.vial} cx={s.x - 34} cy={940} w={42} /> : null}
						{i === 2 ? <Enzyme x={s.x - 40} y={944} s={1} /> : null}
						<Sx x={s.x + 6} y={958} text={s.word} size={46} color={secDim > 0.5 ? GREY_INK : INK} hand />
					</g>
				))}
				{/* next: gene editing */}
				<g opacity={prog(f, K8.edit, 12)}>
					<DrawPath d={`M1800,${TY} L1880,${TY}`} at={K8.edit} dur={12} color={INK_SOFT} width={6} dash="10 8" />
					<path d={`M1864,${TY - 14} L1882,${TY} L1864,${TY + 14}`} fill="none" stroke={INK_SOFT} strokeWidth={6} strokeLinecap="round" />
					<Strip cx={1100} y={222} n={6} pitch={30} gap={28} ins={prog(f, K8.edit + 30, 12)} i0={3} i1={3} />
				</g>
				<GTag x={1830} y={212} text="next: future directions" at={K8.edit + 6} size={32} anchor="end" />
				{void K8.yeast}{void K8.breeders}{void K8.heading}{void LX}{void LW}{void clamp01}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 9. Memory ----------
// 6 Nov: line one gets its timeline (old methods at the far left, the first GMO medicine at 1982); line two its strip.
const K9 = cues(S('memory'), {two: 'Two things', older: 'Biotechnology is older than GMOs', gmo: 'GMOs', bread: 'bread, cheese', sel: 'selective breeding', repro: 'reproductive technologies', dont: "they don't change genes", none: 'they make no new ones', judge: 'So judge'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const TL = 520;
	return (
		<>
			<Heading text="Two things to hold on to" at={4} size={60} />
			<Overlay>
				<Sx x={140} y={290} text="Biotechnology is older than GMOs." size={70} color={INK} hand at={K9.older} />
				<line x1={160} y1={TL} x2={160 + 1600 * prog(f, K9.older + 10, 24, x => x)} y2={TL} stroke={INK_SOFT} strokeWidth={6} strokeLinecap="round" />
				<TimeTick x={420} y={TL} text="thousands of years ago" o={prog(f, K9.bread - 10, 12)} />
				<TimeTick x={1500} y={TL} text="1982: first GMO medicine" o={prog(f, K9.gmo, 12)} />
				<BactIns cx={1430} cy={438} w={170} arc={1} o={prog(f, K9.gmo, 12)} />
				<Pl p={PLATES.vial} cx={1590} cy={440} w={64} o={prog(f, K9.gmo + 6, 12)} />
				<Pl p={PLATES.bread} cx={250} cy={440} w={170} o={prog(f, K9.bread, 12)} />
				<Cheese x={430} y={452} s={1.3} o={prog(f, K9.bread + 16, 12)} />
				<Pl p={PLATES.sheep} cx={610} cy={440} w={170} o={prog(f, K9.sel, 12)} />
				<Sx x={140} y={700} text="Reproductive technologies choose the parents;" size={62} color={BIO_INK} hand at={K9.repro} />
				<Sx x={140} y={785} text="they don't change genes." size={62} color={BIO_INK} hand at={K9.dont} />
				<g opacity={prog(f, K9.dont + 10, 12)}>
					<Strip cx={1520} y={790} pitch={38} gap={34} />
					<StripRings cx={1520} y={790} kinds={['a', 'b']} pitch={38} r={16} />
				</g>
				<GTag x={140} y={860} text="changes allele frequencies, not DNA" at={K9.none + 6} out={K9.judge + 20} size={34} />
				<Tg x={960} y={990} text="judge it by what it changes, not how modern it looks" at={K9.judge + 6} anchor="middle" size={50} />
				{void K9.two}
			</Overlay>
		</>
	);
};
