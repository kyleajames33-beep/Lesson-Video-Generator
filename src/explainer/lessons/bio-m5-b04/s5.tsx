import React from 'react';
import {useCurrentFrame} from 'remotion';
import {HandText} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Cross, DirArrow, EndTag, Enter, Fade, FONT_DISPLAY, FONT_HAND, Hand, HalfIcon, Heading, INK, INK_SOFT, Ladder, ladderGeom, NEWC, ORIG, Overlay,
	PAPER_DEEP, prog, pulse, S, Scribble, StrandRow, Tick, tilesOf, TileSpec,
} from './shared';

const GREYC = '#8d949b';

/** A wrong-answer chip that appears at `at` and is struck through at `cross`. */
const CrossChip: React.FC<{at: number; cross: number; x: number; y: number; text: string; size?: number}> = ({at, cross, x, y, text, size = 30}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	const strike = prog(f, cross, 14);
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: p, transform: `translateY(${(1 - p) * 14}px)`}}>
			<span style={{position: 'relative', display: 'inline-block', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color: INK_SOFT, background: '#fffdf8', border: `3px solid ${PAPER_DEEP}`, borderRadius: 999, padding: '0 24px 4px', whiteSpace: 'nowrap'}}>
				{text}
				<span style={{position: 'absolute', left: 8, right: 8, top: '52%', height: 5, background: '#c4432f', borderRadius: 3, transform: `scaleX(${strike})`, transformOrigin: 'left'}} />
			</span>
		</div>
	);
};

// ---------- 15. Feedback, item one ----------
const FT = 'TGCCAT', FN = 'ACGGTA', FW = 'ATGGCA';
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback-one'), {
		pair: 'Pair each base', t5: "template's 5' end", n3: "new strand's 3' end", l1: 'A C', l2: 'C G', l3: 'G G', l4: 'G T', l5: 'T A', l6: 'A from', from35: "from 3' to 5'",
		own5: "Read from its own 5' end", r1: 'that is A', r2: 'A T', r3: 'T G', r4: ['G G', 2], r5: 'G C', r6: 'C A', wrote: 'If you wrote A', wrongOrder: 'wrong order beneath this template', right5: 'which is on the right',
		u: 'If you wrote U', uses: 'DNA uses T', both: 'If both strands have', anti: 'not antiparallel',
	});
	const X0 = 360, PIT = 150, Y = 250;
	const g = ladderGeom({x: X0, y: Y, pitch: PIT, n: 6});
	const colX = (i: number) => X0 + i * PIT;
	const land = [c.l1, c.l2, c.l3, c.l4, c.l5, c.l6];
	const readAt = [c.r6, c.r5, c.r4, c.r3, c.r2, c.r1];
	const shift = prog(f, c.wrote, 26);
	const botDy = 170 * shift;
	const slotO = prog(f, c.pair, 16);
	const bot: TileSpec[] = FN.split('').map((l, i) => {
		if (f < land[i]) return {l: '?', tone: 'ghost', o: slotO};
		const p = prog(f, land[i], 12);
		return {l, dy: (1 - p) * 70, o: p, glow: pulse(f, land[i] + 6, 22) + (f < c.wrote ? pulse(f, readAt[i], 22) * 0.9 : 0)};
	});
	const top: TileSpec[] = FT.split('').map(l => ({l}));
	const unit = (i: number) => (f >= land[i] ? prog(f, land[i], 10) : 0);
	const arrowsO = 1 - prog(f, c.wrote - 8, 10);
	const yB = g.yBot + botDy;
	return (
		<>
			<Heading items={[[2, 'Item one: pair, then label the ends']]} size={64} />
			<Overlay>
				<Ladder x={X0} y={Y} n={6} pitch={PIT} top={top} bot={bot} topColor={ORIG} botColor={NEWC} botDy={botDy} botUnit={unit} botLink={i => Math.min(unit(i), unit(i - 1))} bond={i => (f >= land[i] ? prog(f, land[i] + 8, 12) * (1 - shift) : 0)} />
				<EndTag x={colX(0) - 150} y={Y + 14} t="5'" at={c.t5} size={62} />
				<EndTag x={colX(5) + 150} y={Y + 14} t="3'" at={c.t5 + 8} size={62} />
				<EndTag x={colX(0) - 150} y={yB + 14} t="3'" at={c.n3} color={NEWC} size={62} />
				<EndTag x={colX(5) + 150} y={yB + 14} t="5'" at={c.n3 + 10} color={NEWC} size={62} />
				<g opacity={1 - prog(f, c.wrote, 10)}>
					{[0, 1, 2, 3, 4, 5].map(i => <Tick key={i} x={colX(i) + 66} y={(g.topFace + g.botFace) / 2 + 3} at={land[i] + 14} s={0.8} />)}
				</g>
				<g opacity={arrowsO}>
					<Fade at={c.from35} out={c.own5 - 4}><DirArrow x1={colX(0) - 70} x2={colX(5) + 70} y={g.yBot + 70} at={c.from35} color={AMBER_INK} dur={30} /></Fade>
					<text x={colX(0) - 70} y={g.yBot + 132} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42}} fill={AMBER_INK} opacity={prog(f, c.from35 + 20, 12) * (1 - prog(f, c.own5 - 10, 10))}>from 3' to 5'</text>
					<DirArrow x1={colX(5) + 70} x2={colX(0) - 70} y={g.yBot + 70} at={c.own5 + 4} color="#c4432f" dur={36} />
				</g>
				<Scribble cx={colX(5) + 150} cy={yB - 6} rx={46} ry={44} at={c.right5 + 8} color={AMBER} seed={3} />
				{/* the wrong order, written from the left beneath the template */}
				<g opacity={prog(f, c.wrote + 22, 14)}>
					<StrandRow x={X0} y={g.yBot} n={6} pitch={PIT} face="up" dir={-1} color={GREYC} tiles={tilesOf(FW, undefined, () => ({tone: 'grey' as const}))} />
				</g>
				<g opacity={prog(f, c.wrongOrder, 10)}><Cross x={colX(2.5)} y={g.yBot - 66} s={3.4} at={c.wrongOrder + 14} color="#c4432f" width={11} /></g>
			</Overlay>
			<div style={{position: 'absolute', left: colX(0) - 60, top: g.yBot + 150, opacity: 1 - prog(f, c.wrote - 10, 10)}}>
				<HandText text="5' A T G G C A 3'" at={c.r1 + 16} size={64} color="#c4432f" cps={9} />
			</div>
			<Enter at={c.wrongOrder + 40} style={{position: 'absolute', left: colX(0) - 100, top: yB + 76}}>
				<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: NEWC, whiteSpace: 'nowrap'}}>the new strand: 3' A C G G T A 5'</span>
			</Enter>
			<CrossChip at={c.wrote} cross={c.wrongOrder + 30} x={1310} y={300} text="wrong order beneath this template" size={32} />
			<CrossChip at={c.u} cross={c.uses + 4} x={1310} y={392} text="U for T (RNA)" size={32} />
			<CrossChip at={c.uses + 40} cross={c.uses + 70} x={1310} y={484} text="same letters as the template" size={32} />
			<CrossChip at={c.both} cross={c.anti + 4} x={1310} y={576} text="5' on the left of both" size={32} />
			<Hand at={c.anti + 30} x={96} y={840} size={56}>pair the base, then label the ends</Hand>
		</>
	);
};

// ---------- tracing molecules (item two and memory) ----------
const Bar: React.FC<{x: number; y: number; w?: number; heavy: boolean; light?: boolean; o?: number; ring?: number; first?: boolean; grey?: boolean}> = ({x, y, w = 270, heavy, o = 1, ring = 0, first, grey}) => {
	const color = grey ? GREYC : heavy ? ORIG : NEWC;
	const dark = first ?? heavy;
	return (
		<g opacity={o}>
			<line x1={x - w / 2} x2={x + w / 2} y1={y} y2={y} stroke={color} strokeWidth={12} strokeLinecap="round" />
			{ring > 0 ? <circle cx={x - w / 2} cy={y} r={30} fill="none" stroke={AMBER} strokeWidth={7} opacity={ring} /> : null}
			<circle cx={x - w / 2} cy={y} r={15} fill={dark ? '#2b2724' : '#fffdf8'} stroke={INK} strokeWidth={3.5} />
		</g>
	);
};
const Rungs: React.FC<{x: number; y1: number; y2: number; w?: number; o?: number}> = ({x, y1, y2, w = 270, o = 1}) => (
	<g opacity={o}>{Array.from({length: 6}, (_, k) => <line key={k} x1={x - w / 2 + 34 + k * ((w - 68) / 5)} x2={x - w / 2 + 34 + k * ((w - 68) / 5)} y1={y1 + 8} y2={y2 - 8} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="1 8" strokeLinecap="round" />)}</g>
);

// ---------- 16. Feedback, item two ----------
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback-two'), {
		first: 'After the first copy', oneHeavy: 'one heavy original strand', oneLight: 'one light new strand', again: 'Copy those again', tmpl: 'is a template for a new light strand', end: 'So you end with',
		hy: 'one heavy and one light', lt: 'two with two light strands', partly: 'all four are partly heavy', only: 'only two heavy strands', never: 'they never multiply',
	});
	const p1 = prog(f, c.first, 50), p2 = prog(f, c.again, 60);
	const L = (a: number, b: number, p: number) => a + (b - a) * p;
	const M0 = {x: 960, yt: 300, yb: 360};
	const R1 = {a: 600, b: 1320, yt: 495, yb: 575};
	const R2 = {xs: [420, 780, 1140, 1500], yt: 695, yb: 775};
	const ringP = pulse(f, c.only, 60);
	const h1 = {x: L(L(M0.x, R1.a, p1), R2.xs[0], p2), y: L(L(M0.yt, R1.yt, p1), R2.yt, p2)};
	const h2 = {x: L(L(M0.x, R1.b, p1), R2.xs[2], p2), y: L(L(M0.yb, R1.yb, p1), R2.yb, p2)};
	const l1 = {x: L(R1.a, R2.xs[1], p2), y: L(R1.yb, R2.yb, p2) + (1 - p1) * 30};
	const l2 = {x: L(R1.b, R2.xs[3], p2), y: L(R1.yt, R2.yt, p2) - (1 - p1) * 30};
	const n = [
		{x: R2.xs[0], y: R2.yb}, {x: R2.xs[1], y: R2.yt}, {x: R2.xs[2], y: R2.yt}, {x: R2.xs[3], y: R2.yb},
	];
	const countP = prog(f, c.first + 64, 14);
	const count2 = pulse(f, c.end, 30);
	return (
		<>
			<Heading items={[[2, 'Item two: following the heavy tag']]} size={64} />
			<Overlay>
				<g opacity={1}>
					<Rungs x={M0.x} y1={M0.yt} y2={M0.yb} o={1 - p1} />
					<Rungs x={R1.a} y1={R1.yt} y2={R1.yb} o={p1 * (1 - p2)} />
					<Rungs x={R1.b} y1={R1.yt} y2={R1.yb} o={p1 * (1 - p2)} />
					{R2.xs.map((x, k) => <Rungs key={k} x={x} y1={R2.yt} y2={R2.yb} o={p2} />)}
				</g>
				{/* round one: the heavy molecule opens and each strand picks up a light partner */}
				<Bar x={h1.x} y={h1.y} heavy ring={ringP} />
				<Bar x={h2.x} y={h2.y} heavy ring={ringP} />
				<Bar x={l1.x} y={l1.y} heavy={false} o={p1} />
				<Bar x={l2.x} y={l2.y} heavy={false} o={p1} />
				{/* round two: each strand is a template for a new light strand */}
				{n.map((q, k) => <Bar key={k} x={q.x} y={q.y + (1 - p2) * (q.y < 730 ? -30 : 30)} heavy={false} o={p2} />)}
				{/* labels */}
				{[R1.a, R1.b].map((x, k) => <text key={k} x={x} y={R1.yb + 62} textAnchor="middle" opacity={prog(f, c.oneLight + 10 + k * 6, 12) * (1 - p2)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={INK}>1 heavy, 1 light</text>)}
				{['1 heavy, 1 light', '0 heavy, 2 light', '1 heavy, 1 light', '0 heavy, 2 light'].map((t, k) => <text key={k} x={R2.xs[k]} y={R2.yb + 62} textAnchor="middle" opacity={prog(f, k % 2 === 0 ? c.hy + k * 6 : c.lt + k * 4, 12)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={k % 2 === 0 ? INK : NEWC}>{t}</text>)}
				<text x={960} y={438} textAnchor="middle" opacity={prog(f, c.first, 12)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42}} fill={AMBER_INK}>copy once</text>
				<text x={960} y={650} textAnchor="middle" opacity={prog(f, c.again, 12)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42}} fill={AMBER_INK}>copy once more</text>
			</Overlay>
			{/* bead legend */}
			<Enter at={c.first - 10} style={{position: 'absolute', left: 96, top: 180}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 16, fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 30, color: INK_SOFT}}>
					<svg width={36} height={36}><circle cx={18} cy={18} r={14} fill="#2b2724" stroke={INK} strokeWidth={3.5} /></svg>heavy
					<svg width={36} height={36}><circle cx={18} cy={18} r={14} fill="#fffdf8" stroke={INK} strokeWidth={3.5} /></svg>light
					<span style={{color: ORIG, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}}>original</span>
					<span style={{color: NEWC, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}}>new</span>
				</div>
			</Enter>
			{/* running count and the key point */}
			<Enter at={c.first + 64} style={{position: 'absolute', left: 560, top: 292, width: 800, opacity: countP}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56 + count2 * 8, color: INK, textAlign: 'center'}}>heavy strands in total: 2</div>
			</Enter>
			<Enter at={c.never} style={{position: 'absolute', left: 560, top: 372, width: 800}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: AMBER_INK, textAlign: 'center'}}>originals are kept, never multiplied</div>
			</Enter>
			<CrossChip at={c.partly} cross={c.partly + 50} x={1250} y={150} text="all four partly heavy" size={34} />
			<CrossChip at={c.partly + 50} cross={c.only} x={1250} y={216} text="one molecule keeps both heavy strands" size={34} />
			<Enter at={c.never + 20} style={{position: 'absolute', right: 96, top: 888}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26, color: INK_SOFT, background: '#fffdf8', border: `3px solid ${PAPER_DEEP}`, borderRadius: 14, padding: '4px 18px'}}>Meselson and Stahl, 1958, bacteria, heavy nitrogen: this pattern</div>
			</Enter>
		</>
	);
};

// ---------- 17. Memory and handoff ----------
const Clock: React.FC<{x: number; y: number; r?: number; at: number}> = ({x, y, r = 46, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	return (
		<g opacity={p} transform={`translate(${x},${y})`}>
			<circle r={r} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={6} />
			<line x1={0} y1={0} x2={0} y2={-r * 0.62} stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" transform={`rotate(${(f - at) * 6})`} />
			<line x1={0} y1={0} x2={r * 0.4} y2={0} stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" />
		</g>
	);
};
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('memory'), {
		remember: 'Remember', half: 'half old', every: 'In every round', oldS: 'one old strand', copiedFrom: 'the one it was copied from', newS: 'one new strand', earlier: 'made a round earlier',
		first: 'The very first strands', never: 'never multiply', after: 'after two rounds', onlyTwo: 'only two of the four', next: 'Next time', shares: 'shares its copied DNA',
	});
	const W = 200;
	const rows = {y0: 400, y1: 555, y2: 710};
	const xs0 = 560, xs1 = [330, 790], xs2 = [215, 445, 675, 905];
	const dm = 30; // gap between the two strands of a molecule is 2*dm
	const mol = (x: number, y: number, top: {heavy: boolean; first?: boolean; ring?: number; grey?: boolean}, bot: {heavy: boolean; first?: boolean; ring?: number; grey?: boolean}, o: number) => (
		<g opacity={o}>
			<Rungs x={x} y1={y - dm} y2={y + dm} w={W} />
			<Bar x={x} y={y - dm} w={W} heavy={top.heavy} first={top.first} ring={top.ring} grey={top.grey} />
			<Bar x={x} y={y + dm} w={W} heavy={bot.heavy} first={bot.first} ring={bot.ring} grey={bot.grey} />
		</g>
	);
	const o0 = prog(f, c.every - 6, 14), o1 = prog(f, c.every + 40, 14), o2 = prog(f, c.earlier - 20, 14);
	const hotOld = pulse(f, c.oldS, 36), hotNew = pulse(f, c.newS, 36), hotFirst = pulse(f, c.first, 50);
	const afterP = prog(f, c.after, 16);
	return (
		<>
			<Enter at={c.remember} style={{position: 'absolute', left: 96, top: 92, display: 'flex', alignItems: 'center', gap: 24}}>
				<svg width={110} height={110} viewBox="-55 -55 110 110"><HalfIcon x={0} y={0} r={46} /></svg>
				<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 104, color: AMBER_INK, lineHeight: 1}}>Half old, half new.</span>
			</Enter>
			<Hand at={c.copiedFrom} x={96} y={226} size={44} color={INK}>old = the strand it was copied from, in every round</Hand>
			<Overlay>
				{/* board: the starting molecule, its two daughters, and the four after two rounds */}
				{mol(xs0, rows.y0, {heavy: true, first: true, ring: hotFirst}, {heavy: true, first: true, ring: hotFirst}, o0)}
				<g opacity={o1}>
					{mol(xs1[0], rows.y1, {heavy: true, first: true, ring: hotOld * 0 + hotFirst}, {heavy: false, ring: hotNew}, 1)}
					{mol(xs1[1], rows.y1, {heavy: false, ring: hotNew}, {heavy: true, first: true, ring: hotFirst}, 1)}
				</g>
				<g opacity={o2}>
					{mol(xs2[0], rows.y2, {heavy: true, first: true}, {heavy: false}, 1)}
					{mol(xs2[1], rows.y2, {heavy: false}, {heavy: false, grey: false}, 1 - 0.6 * afterP)}
					{mol(xs2[2], rows.y2, {heavy: false}, {heavy: true, first: true}, 1)}
					{mol(xs2[3], rows.y2, {heavy: false}, {heavy: false}, 1 - 0.6 * afterP)}
				</g>
				<g opacity={afterP}>
					<Scribble cx={xs2[0]} cy={rows.y2} rx={128} ry={62} at={c.after + 8} color={AMBER} seed={2} />
					<Scribble cx={xs2[2]} cy={rows.y2} rx={128} ry={62} at={c.after + 14} color={AMBER} seed={6} />
				</g>
			</Overlay>
			<Hand at={c.onlyTwo} x={96} y={rows.y2 + 84} size={40} color={AMBER_INK}>hold a first strand</Hand>
			<Hand at={c.onlyTwo + 14} x={600} y={rows.y2 + 84} size={40} color={INK_SOFT}>none</Hand>
			<Hand at={c.first} out={c.after} x={96} y={rows.y2 + 84} size={40} color={ORIG}>the first strands never multiply</Hand>
			{/* the memory aids and the three-step rule */}
			<Enter at={c.remember + 70} style={{position: 'absolute', left: 1080, top: 316}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: AMBER_INK, lineHeight: 1.05}}>Apple in the Tree,<br />Car in the Garage<span style={{fontSize: 40, color: INK_SOFT}}> (in DNA)</span></div>
			</Enter>
			{['1 pair: A with T, C with G', '2 label: old blue, new green', '3 direction: new strand runs opposite'].map((t, k) => (
				<Enter key={k} at={c.earlier + 40 + k * 26} style={{position: 'absolute', left: 1080, top: 490 + k * 74}}>
					<div style={{display: 'flex', alignItems: 'center', gap: 16, fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 34, color: INK}}>
						<div style={{width: 48, height: 48, borderRadius: 999, background: AMBER, color: '#fff', fontWeight: 800, fontSize: 28, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{k + 1}</div>
						{t.slice(2)}
					</div>
				</Enter>
			))}
			{/* handoff */}
			<Enter at={c.next} style={{position: 'absolute', left: 1090, top: 800}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 22, background: '#fffdf8', border: `4px solid ${ORIG}`, borderRadius: 28, padding: '10px 28px 14px'}}>
					<svg width={150} height={90} viewBox="0 0 150 90">
						<ellipse cx={75} cy={45} rx={68} ry={38} fill="#e6efd0" stroke="#6a8a2a" strokeWidth={4} />
						<path d={`M${50 - prog(f, c.shares, 40) * 12},30 L${50 - prog(f, c.shares, 40) * 12},60 M${100 + prog(f, c.shares, 40) * 12},30 L${100 + prog(f, c.shares, 40) * 12},60`} stroke="#6a4c93" strokeWidth={9} strokeLinecap="round" />
					</svg>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: ORIG, lineHeight: 1.05}}>Next: how a cell shares<br />its copied DNA</span>
				</div>
			</Enter>
			<Overlay><Clock x={1800} y={850} at={c.next + 10} /></Overlay>
		</>
	);
};

// ---------- 18. Key notes ----------
const NOTES = [
	'A DNA nucleotide has three parts: a deoxyribose sugar, a phosphate group and a nitrogenous base (A, T, C or G). Strong covalent bonds join the sugars and phosphates into each backbone, and the bases point inward.',
	"In DNA, A pairs with T (two hydrogen bonds) and C pairs with G (three). This is complementary base pairing. The two strands are antiparallel: one runs 5' to 3' and its partner runs 3' to 5'.",
	'Replication: helicase separates the strands by breaking the hydrogen bonds. Each original strand is a template. Loose nucleotides pair with the exposed bases, and DNA polymerase joins them into a new strand with covalent bonds.',
	'Semi-conservative replication: each new DNA molecule has one strand it was copied from and one new strand. The original strands are kept and used again as templates, but their number never increases. To explain accurate copying: weak hydrogen bonds let the strands separate and act as templates, the pairing rule decides each new base, and each daughter keeps an old strand.',
	'Accuracy comes from the pairing rule. Proofreading and repair fix most mistakes. A mistake that survives can become a mutation: when the DNA is copied again, the changed base gets its own partner, so one new copy has a changed base pair and the other is normal. The changed pair passes to every cell that divides from the cell that receives it, and in an organism that reproduces sexually it reaches offspring only through a cell that makes gametes.',
	"To trace a copy: pair A with T and C with G, label old and new, and run the new strand opposite its template. Aids: Apple in the Tree, Car in the Garage (in DNA). Half old, half new (old = the strand it was copied from).",
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Key notes: what to write in your book" at={2} size={68} cps={40} /></div>
		<div style={{position: 'absolute', left: 110, top: 190, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 10} style={{display: 'flex', gap: 20, marginBottom: 14}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 11, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 30, color: INK, lineHeight: 1.22}}>{n}</div>
				</Enter>
			))}
		</div>
	</>
);
