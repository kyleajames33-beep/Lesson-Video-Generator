// B11 scenes 10 and 11: the limits of a sample (fixed example draws from a breed with a white allele frequency of 20%:
// three samples of 20 cattle bounce, three of 200 cluster; then representation as one fenced farm, and a red cow with a
// few white hairs that needs agreed categories) and the memory board (frequency, SNP, limits).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, CARD, COAT_RED, COAT_ROAN, Cow, DrawPath, EDGE, FreqBars, GreyTag, Heading, INK, INK_SOFT, Overlay, PL11, PctStrip, S, S20, S200, Sx, TileRow,
	cowH, lerp, pbPt, prog, rng, s200pct, s20pct, vis, whiteCopies,
} from './shared';
import type {Kind} from './shared';

// ---------- 10. The limits of a sample ----------
const K10 = cues(S('sample-limits'), {
	every: 'Every one of these numbers', imagine: 'Imagine a whole breed', s20: 'Sample twenty cattle', ten: 'you might get ten per cent', thirty: 'or thirty', s200: 'Sample two hundred',
	close: 'stay close to twenty', bounce: 'Small samples bounce around', rep: 'has to represent the population', farm: 'one farm, or one family', sort: 'has to sort the same way',
	red: 'Is a red cow', roan: 'or roan',
});
const ST = {x: 660, w: 1060, y20: 560, y200: 790};
const SX = (v: number) => ST.x + (v / 50) * ST.w;
const BREED: Kind[] = (() => {
	const r = rng(12);
	return Array.from({length: 34}, () => {
		const u = r();
		return (u < 0.64 ? 0 : u < 0.96 ? 1 : 2) as Kind;
	});
})();
const kindFill = (k: Kind) => (k === 0 ? COAT_RED : k === 1 ? COAT_ROAN : '#f7f2ea');
export const SceneLimitsB11: React.FC = () => {
	const f = useCurrentFrame();
	const d20At = [K10.ten, K10.thirty, K10.thirty + 26];
	const l20At = [K10.s20 + 4, K10.ten + 4, K10.thirty + 4];
	const d200At = [K10.s200 + 24, K10.close - 4, K10.close + 26];
	const l200At = [K10.s200, K10.s200 + 26, K10.close];
	const cur20 = l20At.reduce((a, t, i) => (f >= t ? i : a), -1);
	const cur200 = l200At.reduce((a, t, i) => (f >= t ? i : a), -1);
	const rep = prog(f, K10.rep, 20);
	const ring20 = prog(f, K10.bounce, 14);
	// the red cow with a few white hairs
	const cowC: [number, number] = [1120, 966];
	const cw = 210;
	const pt = pbPt(PL11.red, cowC[0], cowC[1], cw);
	const hairs = (() => {
		const r = rng(5);
		return Array.from({length: 14}, () => {
			const [x, y] = pt(1150 + r() * 260, 760 + r() * 160);
			return {x, y, a: -0.9 + (r() - 0.5) * 0.5};
		});
	})();
	return (
		<>
			<Heading text="The limits of a sample" at={K10.every} size={56} />
			<Overlay>
				{/* a whole breed */}
				<g opacity={0.9 * prog(f, K10.imagine, 16)}>
					{BREED.map((k, i) => <Cow key={i} k={k} cx={130 + i * 50} cy={250} w={46} o={0.55} />)}
				</g>
				<GreyTag x={110} y={290} text="a whole breed: white allele 20%" at={K10.imagine + 10} size={24} />
				<line x1={SX(20)} y1={420} x2={SX(20)} y2={ST.y200} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 8" opacity={prog(f, K10.imagine + 20, 12)} />
				<Sx x={SX(20)} y={404} text="true white allele frequency: 20%" size={32} color={INK} hand anchor="middle" at={K10.imagine + 20} />
				{/* sample grids: 20 plates, 200 tiny chips */}
				<g opacity={(1 - rep) * prog(f, K10.s20, 12)}>
					<Sx x={140} y={400} text="sample of 20" size={28} color={INK} weight={800} />
					{cur20 >= 0 ? S20[cur20].map((k, i) => <Cow key={cur20 + '-' + i} k={k} cx={170 + (i % 5) * 68} cy={450 + Math.floor(i / 5) * 56} w={58} o={prog(f, l20At[cur20] + i * 0.6, 8)} />) : null}
					{cur20 >= 0 ? <Sx x={140} y={700} text={`white copies: ${whiteCopies(S20[cur20])} / 40`} size={26} color={INK_SOFT} weight={700} at={l20At[cur20] + 10} /> : null}
				</g>
				<g opacity={(1 - rep) * prog(f, K10.s200, 12)}>
					<Sx x={140} y={746} text="sample of 200" size={28} color={INK} weight={800} />
					{cur200 >= 0 ? S200[cur200].map((k, i) => <rect key={cur200 + '-' + i} x={140 + (i % 20) * 15} y={762 + Math.floor(i / 20) * 13} width={12} height={10} rx={2} fill={kindFill(k)} stroke="rgba(38,35,31,0.45)" strokeWidth={0.8} opacity={prog(f, l200At[cur200] + i * 0.06, 6)} />) : null}
					{cur200 >= 0 ? <Sx x={140} y={920} text={`white copies: ${whiteCopies(S200[cur200])} / 400`} size={26} color={INK_SOFT} weight={700} at={l200At[cur200] + 8} /> : null}
				</g>
				{/* the two strips */}
				<PctStrip x={ST.x} y={ST.y20} w={ST.w} label="20 cattle" o={prog(f, K10.s20, 12)} dots={s20pct.map((v, i) => ({v, at: d20At[i], ring: ring20}))} />
				<PctStrip x={ST.x} y={ST.y200} w={ST.w} label="200 cattle" o={prog(f, K10.s200, 12)} dots={s200pct.map((v, i) => ({v, at: d200At[i], label: false}))} r={12} />
				{s200pct.map((v, i) => <Sx key={i} x={SX(20) - 70 + i * 74} y={ST.y200 - 40} anchor="middle" text={`${Math.round(v)}%`} size={26} color={INK} weight={800} at={d200At[i] + 4} />)}
				<GreyTag x={1480} y={616} text="three example samples" at={K10.s20 + 20} size={24} />
				<Sx x={SX(36)} y={ST.y20 - 80} text="small sample: wide spread" size={36} color={AMBER_INK} hand at={K10.bounce + 6} />
				<Sx x={SX(30)} y={ST.y200 - 80} text="large sample: close to 20%" size={32} color={INK} hand at={K10.close + 30} />
				{/* representative? */}
				<g opacity={rep}>
					<rect x={130} y={880} width={360} height={150} rx={18} fill="#eef3e2" stroke="#7a5a35" strokeWidth={4} strokeDasharray="4 10" />
					{[0, 0, 1, 0, 0, 1].map((k, i) => <Cow key={i} k={k as Kind} cx={180 + (i % 3) * 110} cy={925 + Math.floor(i / 3) * 56} w={70} />)}
					<Sx x={510} y={940} text="one farm" size={40} color={INK} hand />
					<Sx x={510} y={994} text="representative?" size={40} color={AMBER_INK} hand />
					<DrawPath d="M300,876 C290,720 90,520 150,330" at={K10.farm} dur={20} color={AMBER_INK} width={3} dash="8 8" />
				</g>
				{/* agree the categories */}
				<g opacity={prog(f, K10.red - 4, 14)}>
					<Cow k={0} cx={cowC[0]} cy={cowC[1]} w={cw} />
					{hairs.map((h, i) => <line key={i} x1={h.x} y1={h.y} x2={h.x + Math.cos(h.a) * 16} y2={h.y + Math.sin(h.a) * 16} stroke="#fbf7ef" strokeWidth={3.2} strokeLinecap="round" opacity={prog(f, K10.red + 10 + i, 6)} />)}
				</g>
				<g opacity={prog(f, K10.red + 20, 12)}>
					{['red?', 'roan?'].map((t, i) => (
						<g key={t}>
							<rect x={1270 + i * 170} y={880} width={150} height={60} rx={30} fill="#fffdf8" stroke={AMBER} strokeWidth={3} opacity={i === 0 || f >= K10.roan ? 1 : 0} />
							<Sx x={1345 + i * 170} y={922} text={t} size={36} color={INK} hand anchor="middle" opacity={i === 0 || f >= K10.roan ? 1 : 0} />
						</g>
					))}
				</g>
				<GreyTag x={1270} y={966} text="agree the categories first" at={K10.roan + 10} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 11. Memory ----------
const K11 = cues(S('memory'), {three: 'Three words to take away', freq: 'frequency, snip, limits', snp: 'snip, limits', limits: ['limits', 1], fr: 'Frequency is a count', say: 'say what you counted', sn: 'A snip is a one-base', lim: 'And limits remind you'});
export const SceneMemoryB11: React.FC = () => {
	const f = useCurrentFrame();
	const cols = [
		{x: 340, word: 'frequency', at: K11.freq, line: 'count / total: say what you counted', lineAt: K11.fr},
		{x: 960, word: 'SNP', at: K11.snp, line: 'one-base difference you can count', lineAt: K11.sn},
		{x: 1580, word: 'limits', at: K11.limits, line: "what a sample can't prove", lineAt: K11.lim},
	];
	return (
		<>
			<Heading text="Three words to take away" at={K11.three} size={56} />
			<Overlay>
				{cols.map((c, i) => (
					<g key={i} opacity={prog(f, c.at, 14)}>
						<rect x={c.x - 270} y={260} width={540} height={560} rx={26} fill={CARD} stroke={i === 1 ? AMBER : EDGE} strokeWidth={3} />
						<Sx x={c.x} y={370} text={c.word} size={92} color={INK} hand anchor="middle" />
					</g>
				))}
				{/* icons */}
				<FreqBars x={250} y={430} w={180} h={150} axis="" o={prog(f, K11.freq + 6, 12)} bars={[{label: '', v: 64, p: prog(f, K11.freq + 6, 20), color: COAT_RED}, {label: '', v: 32, p: prog(f, K11.freq + 10, 20), color: COAT_ROAN}]} />
				<Sx x={440} y={540} text="count / total" size={34} color={INK_SOFT} hand at={K11.freq + 10} />
				<TileRow x={830} y={510} seq="GACTG" pitch={66} w={58} h={48} o={prog(f, K11.snp + 6, 12)} tile={i => ({glow: i === 2 ? prog(f, K11.snp + 14, 12) : 0})} />
				<PctStrip x={1380} y={570} w={400} lo={0} hi={50} dots={[{v: 10, at: K11.limits + 6, label: false}, {v: 30, at: K11.limits + 12, label: false}, {v: 18, at: K11.limits + 18, label: false}]} r={12} />
				{cols.map((c, i) => <Sx key={i} x={c.x} y={720} text={c.line} size={32} color={i === 1 ? AMBER_INK : INK} hand anchor="middle" at={c.lineAt} />)}
				<Sx x={960} y={940} text="Count alleles, not people." size={48} color={AMBER_INK} hand anchor="middle" at={K11.lim + 30} />
			</Overlay>
		</>
	);
};
void cowH; void lerp; void vis;
