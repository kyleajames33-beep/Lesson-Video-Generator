// B11 scenes 1 to 4 on the count board: the hook (a herd of 100 sorts itself by coat colour; one roan lifts out with
// its genotype), frequency of a characteristic (table and bar chart, the denominator ringed), allele frequency (every
// animal's two chips pour into a 200-cell gene pool; the white copies light by source) and when the alleles hide (a
// pea field: 9 short plants give tt directly, tall plants can't be told apart, so the DNA has to be read).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, COAT_RED, COAT_ROAN, Cow, DataTable, FreqBars, GENO, GenoTag, GreyTag, Herd, HERD, HERD_COPIES, HERD_N, HERD_R, HERD_W, Heading, INK,
	INK_SOFT, MIXED, MistakeChip, Overlay, PEAS, PL11, POOL, PeaPlant, PlateB, PoolBar, Ring, S, SpanBracket, Sx, TileRow, clamp01, cowH, gxy, lerp, pc, prog, rng, vis,
} from './shared';
import type {GridG, Kind} from './shared';

// The count board's full-size grid (scene 1); later scenes shrink it with a transform.
const G1: GridG = {x: 150, y: 250, dx: 84, dy: 70, cols: 10};
const CW1 = 70;
/** Transform that maps the full grid onto a smaller box with its left edge at lx and top edge at ty. */
const shrink = (sc: number, lx: number, ty: number) => ({sc, tx: lx - sc * (G1.x - CW1 / 2), ty: ty - sc * (G1.y - cowH(CW1) / 2)});
const T2 = shrink(0.7, 110, 330);
const T3 = shrink(0.6, 110, 196);
const tf = (t: {sc: number; tx: number; ty: number}) => `translate(${t.tx},${t.ty}) scale(${t.sc})`;
const mixT = (a: {sc: number; tx: number; ty: number}, b: {sc: number; tx: number; ty: number}, p: number) => ({sc: lerp(a.sc, b.sc, p), tx: lerp(a.tx, b.tx, p), ty: lerp(a.ty, b.ty, p)});
const ID = {sc: 1, tx: 0, ty: 0};
const kindOf = (i: number) => HERD[i];

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {
	herd: 'a hundred Shorthorn cattle', red: 'Sixty-four are red', roan: 'thirty-two are roan', white: 'and four are white', from: 'From the co-dominance video',
	one: 'one red allele and one white allele', what: 'So what fraction', four: 'Four per cent', thirty: 'Thirty-six per cent', hold: 'Hold that thought',
});
const LIFT = 80; // a roan in the sorted grid
export const SceneHookB11: React.FC = () => {
	const f = useCurrentFrame();
	const sort = prog(f, K1.red, 40);
	const lift = prog(f, K1.one - 4, 26);
	const from = gxy(G1, LIFT);
	const counters: {k: Kind; at: number; label: string}[] = [
		{k: 0, at: K1.red, label: `red ${HERD_N.red}`}, {k: 1, at: K1.roan, label: `roan ${HERD_N.roan}`}, {k: 2, at: K1.white, label: `white ${HERD_N.white}`},
	];
	return (
		<>
			<Heading text="Counting a population" at={K1.hold} size={60} />
			<Overlay>
				<Herd G={G1} w={CW1} sort={sort} show={i => prog(f, K1.herd - 30 + MIXED[i] * 0.5, 10) * (i === LIFT ? 1 - 0.75 * lift : 1)} pulse={i => (kindOf(i) === 0 ? vis(f, K1.red + 30, K1.roan) : kindOf(i) === 1 ? vis(f, K1.roan + 10, K1.white) : vis(f, K1.white + 6, K1.from))} />
				<GreyTag x={G1.x - 35} y={900} text="example herd" at={K1.herd} size={24} />
				{counters.map((c, i) => (
					<g key={i} opacity={prog(f, c.at, 12)}>
						<Cow k={c.k} cx={1080} cy={300 + i * 92} w={90} />
						<Sx x={1150} y={316 + i * 92} text={c.label} size={46} color={INK} weight={800} />
					</g>
				))}
				{/* one roan lifts out with its genotype */}
				<g opacity={lift}>
					<Cow k={1} cx={lerp(from[0], 1580, lift)} cy={lerp(from[1], 380, lift)} w={lerp(CW1, 300, lift)} />
				</g>
				<GenoTag x={1580} y={560} text={GENO[1]} size={44} o={prog(f, K1.one + 18, 12)} />
				<Sx x={1580} y={640} text="one red allele, one white allele" size={32} color={AMBER_INK} hand anchor="middle" at={K1.one + 24} />
				<GreyTag x={1470} y={196} text="B10: co-dominance" at={K1.from} size={24} />
				{/* the question */}
				<Sx x={1040} y={790} text="white alleles: what fraction?" size={50} color={INK} hand at={K1.what} />
				{[{t: '4%', at: K1.four, x: 1060}, {t: '36%', at: K1.thirty, x: 1300}].map((c, i) => (
					<g key={i} opacity={prog(f, c.at, 12)}>
						<rect x={c.x} y={830} width={180} height={78} rx={39} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
						<Sx x={c.x + 70} y={884} text={c.t} size={44} color={INK} weight={800} anchor="middle" />
						<Sx x={c.x + 148} y={886} text="?" size={46} color={AMBER_INK} weight={800} anchor="middle" />
					</g>
				))}
			</Overlay>
		</>
	);
};

// ---------- 2. Frequency of a characteristic ----------
const K2 = cues(S('frequency'), {
	start: 'Start with the cattle themselves', freq: 'A frequency tells you', count: 'the count divided by the total', red: 'Sixty-four out of a hundred',
	roan: 'Roan is thirty-two', white: 'and white is four', table: 'A table keeps the counts', bar: 'a bar chart shows the pattern', say: 'always say what you divided by', here: "Here, it's cattle",
});
const ROWS2: {k: Kind; name: string; n: number}[] = [{k: 0, name: 'red', n: HERD_N.red}, {k: 1, name: 'roan', n: HERD_N.roan}, {k: 2, name: 'white', n: HERD_N.white}];
export const SceneFrequencyB11: React.FC = () => {
	const f = useCurrentFrame();
	const sh = prog(f, 0, 30);
	const T = mixT(ID, T2, sh);
	const rowAt = [K2.red, K2.roan, K2.white];
	const rowLit = (r: number) => vis(f, rowAt[r], r < 2 ? rowAt[r + 1] : K2.table);
	const tx = 770, ty = 340, rh = 70;
	return (
		<>
			<Heading text="Frequency of a characteristic" at={K2.freq} size={56} />
			<Overlay>
				<g transform={tf(T)}>
					<Herd G={G1} w={CW1} pulse={i => rowLit(HERD[i])} />
				</g>
				<Sx x={110} y={268} text="frequency = count / total counted" size={50} color={AMBER_INK} hand at={K2.count} />
				<DataTable x={tx} y={ty} cols={[{w: 150, head: 'coat'}, {w: 120, head: 'count'}, {w: 190, head: 'out of'}, {w: 150, head: 'per cent'}]}
					rows={ROWS2.map(r => [r.name, String(r.n), 'out of 100', `${pc(r.n, 100)}%`])} rowAt={rowAt} at={K2.red - 6} size={34} rowH={rh} hot={r => rowLit(r)} />
				{f >= K2.say ? <Ring cx={tx + 270 + 95} cy={ty + rh * 2} rx={100} ry={rh * 2 + 22} at={K2.say} /> : null}
				<GreyTag x={tx + 200} y={ty + rh * 4 + 40} text="denominator: cattle counted" at={K2.say + 10} size={28} />
				<Sx x={tx} y={ty + rh * 4 + 160} text="Here: divided by the 100 cattle" size={38} color={INK} hand at={K2.here} />
				<FreqBars x={1480} y={350} w={350} h={380} title="coat colour" axis="per cent of cattle counted (n = 100)"
					bars={ROWS2.map((r, i) => ({label: r.name, v: pc(r.n, 100), p: prog(f, K2.bar + i * 8, 22), color: r.k === 0 ? COAT_RED : r.k === 1 ? COAT_ROAN : '#f7f2ea'}))} o={prog(f, K2.bar - 6, 12)} />
			</Overlay>
		</>
	);
};

// ---------- 3. Allele frequency: count the copies ----------
const K3 = cues(S('allele-frequency'), {
	now: 'Now the alleles', two: 'carries two copies', hold: 'hold two hundred copies', eight: 'which makes eight', roan: 'Each roan has one', more: 'which makes thirty-two more',
	forty: "That's forty white alleles", twenty: 'is twenty per cent', red: 'and the red allele is eighty', four: 'Four per cent counted', thirty: 'and thirty-six counted animals',
});
const PB3 = {x: 110, y: 770, w: 1700, h: 50};
/** Screen point of an animal's chip c under the scene 3 transform. */
const chipPt = (i: number, c: number): [number, number] => {
	const [x, y] = gxy(G1, i);
	const gx = x + (c ? 1 : -1) * CW1 * 0.2, gy = y + cowH(CW1) * 0.5 + 6;
	return [T3.tx + T3.sc * gx, T3.ty + T3.sc * gy];
};
export const SceneAlleleFreqB11: React.FC = () => {
	const f = useCurrentFrame();
	const T = mixT(T2, T3, prog(f, 0, 24));
	const chips = prog(f, K3.two, 16);
	const pourAt = (q: number) => K3.hold + (q % 50) * 0.9 + Math.floor(q / 50) * 3;
	const cellW = PB3.w / HERD_COPIES;
	const isWhiteCow = (i: number) => HERD[i] === 2;
	const isRoan = (i: number) => HERD[i] === 1;
	const glowW = vis(f, K3.eight, K3.forty + 40), glowR = vis(f, K3.more, K3.forty + 40);
	const byCell = new Map(POOL.map((q, k) => [q.cell, {q, k}]));
	return (
		<>
			<Heading text="Allele frequency: count the copies" at={K3.now} size={56} />
			<Overlay>
				<g transform={tf(T)}>
					<Herd G={G1} w={CW1} chips={chips} chipO={() => 1 - 0.6 * prog(f, K3.hold + 20, 30)}
						pulse={i => (isWhiteCow(i) ? vis(f, K3.eight - 4, K3.roan) : isRoan(i) ? vis(f, K3.more - 4, K3.forty) : 0)} />
				</g>
				<Sx x={110} y={PB3.y - 26} text={`gene pool: all ${HERD_COPIES} coat colour alleles`} size={34} color={INK} hand at={K3.hold - 10} />
				<Sx x={PB3.x + PB3.w} y={PB3.y - 26} text={`${HERD_R} red copies | ${HERD_W} white copies`} size={28} color={INK_SOFT} weight={700} anchor="end" at={K3.hold + 70} />
				<PoolBar x={PB3.x} y={PB3.y} w={PB3.w} h={PB3.h} n={HERD_COPIES} o={prog(f, K3.hold - 14, 12)}
					cell={j => {
						const {q, k} = byCell.get(j)!;
						const landed = prog(f, pourAt(k) + 14, 4);
						const g = q.t === 'W' ? (isWhiteCow(q.animal) ? glowW : isRoan(q.animal) ? glowR : 0) : 0;
						return {t: q.t, o: landed, glow: g};
					}} />
				{/* chips flying into the pool */}
				{POOL.map((q, k) => {
					const p = prog(f, pourAt(k), 16);
					if (p <= 0.01 || p >= 0.99) return null;
					const [ax, ay] = chipPt(q.animal, q.copy);
					const bx = PB3.x + (q.cell + 0.5) * cellW, by = PB3.y + PB3.h / 2;
					return <circle key={k} cx={lerp(ax, bx, p)} cy={lerp(ay, by, p) - Math.sin(Math.PI * p) * 60} r={6} fill={q.t === 'R' ? COAT_RED : '#fffdf8'} stroke={INK} strokeWidth={1.4} />;
				})}
				{/* working */}
				<Sx x={700} y={258} text="2 copies per animal: 100 x 2 = 200" size={34} color={INK} weight={700} at={K3.hold} />
				<Sx x={700} y={330} text="white cattle: 4 x 2 = 8" size={38} color={INK} weight={700} at={K3.eight} />
				<Sx x={700} y={392} text="roan cattle: 32 x 1 = 32" size={38} color={INK} weight={700} at={K3.more} />
				<Sx x={700} y={482} text={`C^{W}: ${HERD_W} / ${HERD_COPIES} = ${(HERD_W / HERD_COPIES).toFixed(2)} = ${pc(HERD_W, HERD_COPIES)}%`} size={44} color={AMBER_INK} weight={800} at={K3.forty} />
				<Sx x={700} y={552} text={`C^{R}: ${HERD_R} / ${HERD_COPIES} = ${(HERD_R / HERD_COPIES).toFixed(2)} = ${pc(HERD_R, HERD_COPIES)}%`} size={44} color={INK} weight={800} at={K3.red} />
				<FreqBars x={1500} y={270} w={320} h={300} title="per cent of alleles" axis="coat colour alleles (n = 200)" o={prog(f, K3.twenty - 6, 12)}
					bars={[{label: 'red', v: pc(HERD_R, HERD_COPIES), p: prog(f, K3.red, 22), color: COAT_RED}, {label: 'white', v: pc(HERD_W, HERD_COPIES), p: prog(f, K3.twenty, 22), color: '#f7f2ea'}]} />
				{/* the two wrong answers return */}
				<MistakeChip x={110} y={880} text="4%" at={K3.four} cross={K3.four + 24} size={36} />
				<GreyTag x={260} y={884} text="white cattle only" at={K3.four + 10} size={26} />
				<MistakeChip x={620} y={880} text="36%" at={K3.thirty} cross={K3.thirty + 24} size={36} />
				<GreyTag x={790} y={884} text="white + roan animals" at={K3.thirty + 10} size={26} />
				<GreyTag x={1400} y={950} text="autosomal gene: two copies each" at={K3.two + 20} size={24} />
				{/* key to the chips */}
				<g opacity={prog(f, K3.two + 10, 12)}>
					<GenoTag x={1100} y={652} text="C^{R}" size={30} />
					<rect x={1146} y={640} width={34} height={24} rx={12} fill={COAT_RED} stroke={INK} strokeWidth={1.4} />
					<GenoTag x={1260} y={652} text="C^{W}" size={30} />
					<rect x={1306} y={640} width={34} height={24} rx={12} fill="#fffdf8" stroke={INK} strokeWidth={1.4} />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 4. When the alleles hide ----------
const K4 = cues(S('hidden-alleles'), {
	cattle: 'Cattle make this easy', peas: "Peas don't", field: 'In a field of a hundred pea plants', nine: 'nine are short', rec: 'Short is recessive', two: 'two short alleles',
	gf: "That's a genotype frequency", hiding: 'could be hiding a short allele', same: 'both kinds look the same', cant: "can't count every allele", read: 'read the DNA itself',
});
const PEA_SHORT_SLOTS = (() => {
	const r = rng(9);
	const s = Array.from({length: 100}, (_, i) => ({i, k: r()})).sort((a, b) => a.k - b.k).slice(0, PEAS.short).map(q => q.i);
	return new Set(s);
})();
const G4 = {x: 160, y: 286, dx: 60, dy: 66, cols: 10};
const KP = 0.05;
export const SceneHiddenB11: React.FC = () => {
	const f = useCurrentFrame();
	const herdO = 1 - prog(f, K4.peas - 10, 20);
	const herdX = -prog(f, K4.peas - 10, 30) * 700;
	const lift = prog(f, K4.hiding - 6, 24);
	const liftA = 23, liftB = 47; // two tall plants
	const pt = (s: number): [number, number] => [G4.x + (s % 10) * G4.dx, G4.y + Math.floor(s / 10) * G4.dy];
	const tags = prog(f, K4.two, 14);
	const nKnown = 2 * PEAS.short;
	return (
		<>
			<Heading text="When the alleles hide" at={K4.peas} size={56} />
			<Overlay>
				<g opacity={herdO} transform={`translate(${herdX},0) ${tf(T3)}`}><Herd G={G1} w={CW1} /></g>
				<Sx x={700} y={300} text="cattle: every genotype looks different" size={34} color={INK_SOFT} hand at={K4.cattle} out={K4.field} />
				{/* the pea field */}
				{Array.from({length: 100}, (_, s) => {
					const short = PEA_SHORT_SLOTS.has(s);
					const [x, g] = pt(s);
					const o = prog(f, K4.field - 10 + s * 0.4, 10) * (s === liftA || s === liftB ? 1 - 0.7 * lift : 1);
					if (o <= 0.01) return null;
					return (
						<g key={s}>
							{short && f >= K4.nine ? <ellipse cx={x} cy={g - 14} rx={22} ry={24} fill={AMBER} opacity={0.5 * prog(f, K4.nine + (s % 9), 10)} /> : null}
							<PeaPlant tall={!short} x={x} ground={g} k={KP} o={o} />
							{short && tags > 0.01 ? <GenoTag x={x} y={g + 12} text="tt" size={18} o={tags} /> : null}
						</g>
					);
				})}
				<GreyTag x={140} y={940} text="B9: tall T dominant, short t recessive" at={K4.field + 10} size={24} />
				<Sx x={780} y={300} text={`short: ${PEAS.short} / 100 = ${pc(PEAS.short, 100)}%`} size={44} color={INK} weight={800} at={K4.nine} />
				<Sx x={780} y={372} text="short is recessive, so short = tt" size={34} color={INK} hand at={K4.rec} />
				<Sx x={780} y={444} text={`tt: ${(PEAS.short / 100).toFixed(2)} (${pc(PEAS.short, 100)}%)`} size={44} color={AMBER_INK} weight={800} at={K4.gf} />
				{/* two tall plants that look the same */}
				{[liftA, liftB].map((s, i) => {
					const [x0, g0] = pt(s);
					const x = lerp(x0, 1170 + i * 230, lift), g = lerp(g0, 700, lift);
					return <PeaPlant key={s} tall x={x} ground={g} k={lerp(KP, 0.17, lift)} o={lift} />;
				})}
				<GenoTag x={1170} y={742} text="TT?" size={34} o={prog(f, K4.hiding + 16, 12)} />
				<GenoTag x={1400} y={742} text="Tt?" size={34} o={prog(f, K4.hiding + 22, 12)} />
				<SpanBracket x1={1110} x2={1460} y={466} at={K4.same} label="same look" up size={36} />
				{/* the gene pool can't be filled from looks */}
				{[0, 1].map(row => (
					<PoolBar key={row} x={780} y={850 + row * 46} w={1030} h={38} n={100} o={prog(f, K4.cant, 14)}
						cell={j => {
							const idx = row * 100 + j;
							return idx < nKnown ? {t: 't', o: 1} : {t: '?', o: 1};
						}} />
				))}
				<Sx x={780} y={830} text={`gene pool: only the ${nKnown} t copies in short plants are known`} size={28} color={INK} weight={700} at={K4.cant + 6} />
				<GreyTag x={1500} y={950} text="can't tell from looks" at={K4.cant + 12} size={24} />
				{/* read the DNA */}
				<PlateB p={PL11.swab} cx={lerp(2050, 1660, prog(f, K4.read - 8, 20))} cy={420} w={170} />
				<TileRow x={1530} y={640} seq="ATGCCA" pitch={62} w={54} h={44} tile={i => ({o: prog(f, K4.read + 10 + i * 4, 8)})} />
				<Sx x={1510} y={726} text="read the DNA" size={34} color={AMBER_INK} hand at={K4.read + 16} />
			</Overlay>
		</>
	);
};
void clamp01; void AMBER; void INK_SOFT;
