import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Arrow, Bracket, CellBody, CX, CY, DotLink, DrawPath, Envelope, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading, INK, INK_SOFT, lerp, LP_Ab, LT_aB, MC, MStrip, Overlay, PAIRED, Pill, PP, prog,
	S, SCATTER, Scribble, TT, beadAt, clamp01, geomY, vis, Line, BoardG, armX, MC_WK, CUT,
} from './shared';

/** Absolute chromosome centre for chromosome i (0 LP, 1 LT, 2 SP, 3 ST) between scatter (t=0) and paired (t=1). */
export const posI = (i: number, t: number): [number, number] => [CX + lerp(SCATTER[i][0], PAIRED[i][0], t), CY + lerp(SCATTER[i][1], PAIRED[i][1], t)];
const KIND = ['L', 'L', 'S', 'S'] as const;
const NUC = 262;
const HL = 125; // half length of the long chromosome (200 * SZ / 2)
const GL = '#5d646b';
const HALO = '0 0 5px #ece3ee, 0 0 5px #ece3ee, 0 0 8px #ece3ee, 0 0 8px #ece3ee';

const Bubble: React.FC<{x: number; y: number; at: number; r?: number}> = ({x, y, at, r = 26}) => {
	const f = useCurrentFrame();
	const t = f - at;
	if (t < 0 || t > 40) return null;
	const p = Math.sin((t / 40) * Math.PI);
	return <circle cx={x} cy={y} r={r + 8 * p} fill="none" stroke={AMBER} strokeWidth={6} opacity={p} />;
};

// ---------- 3. The model cell with alleles ----------
export const SceneModelAlleles: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('model-alleles'), {
		here: 'Here is our model', genes: 'three genes', pairs: 'two pairs', upper: 'the upper gene', plum1: ['plum version', 1], teal1: ['teal version', 1], lower: 'the lower gene', short: 'The short pair', plum2: ['plum version', 2], teal2: ['teal version', 2], label: 'We label', cap: 'a capital', again: 'again',
	});
	const P = posI;
	const bd = (i: number, lvl: 'top' | 'bot'): [number, number] => { const [x, y] = P(i, 0); return beadAt(x, y, KIND[i], 1, lvl, 'A', 0); };
	const lb = (a: number, b: number, lvl: 'top' | 'bot', at: number) => <DotLink p1={bd(a, lvl)} p2={bd(b, lvl)} o={prog(f, at, 14)} />;
	const beads: [number, number][] = [bd(0, 'top'), bd(1, 'top'), bd(0, 'bot'), bd(1, 'bot'), bd(2, 'top'), bd(3, 'top')];
	return (
		<>
			<Heading items={[[0, 'The model cell, with three genes marked']]} size={60} />
			<Overlay>
				<CellBody o={prog(f, 0, 14)} />
				<Envelope r={NUC} />
				{lb(0, 1, 'top', c.teal1 + 14)}
				{lb(0, 1, 'bot', c.lower + 24)}
				{lb(2, 3, 'top', c.teal2 + 14)}
				{[0, 1, 2, 3].map(i => {
					const [x, y] = P(i, 0);
					const bt = [prog(f, c.plum1 + 8, 12), prog(f, c.teal1 + 8, 12), prog(f, c.plum2 + 8, 12), prog(f, c.teal2 + 8, 12)][i];
					const bb = i === 0 ? prog(f, c.lower + 16, 12) : i === 1 ? prog(f, c.lower + 24, 12) : 0;
					return <MC key={i} x={CX + SCATTER[i][0]} y={CY + SCATTER[i][1]} kind={KIND[i]} a={i % 2 === 0 ? PP : TT} dup={0} beads={[bt, bb]} o={prog(f, 4 + i * 4, 16)} />;
				})}
				{beads.map(([x, y], i) => <Bubble key={i} x={x} y={y} at={c.cap + (i % 2) * 6 + Math.floor(i / 2) * 3} />)}
				<Scribble cx={bd(0, 'top')[0]} cy={bd(0, 'top')[1]} rx={30} ry={30} at={c.plum1 + 16} color={AMBER_INK} seed={4} />
				<Scribble cx={bd(1, 'top')[0]} cy={bd(1, 'top')[1]} rx={30} ry={30} at={c.teal1 + 16} color={AMBER_INK} seed={9} />
			</Overlay>
			<Pill at={c.pairs} out={c.upper - 10} x={CX - 345} y={170} size={44}>model cell: 4 chromosomes (2 sets of 2)</Pill>
			<Pill at={c.upper + 24} x={CX - 310} y={168} size={44}>same gene, two versions</Pill>
			<Overlay><DrawPath d={`M${CX - 160},234 Q${CX - 150},330 ${CX - 128},${CY - 66}`} at={c.upper + 40} dur={20} color={AMBER_INK} width={4} dash="3 10" /></Overlay>
			<GreyTag at={c.genes} out={c.upper + 60} x={130} y={880} text="gene: a section of DNA with one instruction" size={32} />
			<Overlay><g opacity={vis(f, c.short + 10, c.label - 8, 10)}><Scribble cx={beadAt(CX + SCATTER[2][0], CY + SCATTER[2][1], 'S', 1, 'top', 'A', 0)[0]} cy={beadAt(CX + SCATTER[2][0], CY + SCATTER[2][1], 'S', 1, 'top', 'A', 0)[1]} rx={30} ry={30} at={c.short + 10} color={AMBER_INK} seed={2} /></g></Overlay>
			<GreyTag at={c.label} x={820} y={888} text="letters are labels only, no dominance" size={34} />
		</>
	);
};

// ---------- 4. Copy once, then pair up ----------
export const ScenePairUp: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('prophase-one'), {
		start: 'Meiosis starts', copied: 'is copied', sister: 'two sister', first: 'first difference', pro: 'In prophase one', finds: 'finds its homologous', lie: 'the two lie', side: 'side by side', gene: 'gene against', lets: 'lets the cell', one: 'one partner', end: 'each end',
	});
	const dup = prog(f, c.copied, 34);
	const pulse = 1 + 0.07 * Math.sin(Math.PI * prog(f, c.copied, 34));
	const tL = prog(f, c.finds + 6, 54), tS = prog(f, c.lie + 6, 50);
	const tt = (i: number) => (i < 2 ? tL : tS);
	const P = (i: number) => posI(i, tt(i));
	const linkO = prog(f, c.gene, 16);
	const pairLink = (a: number, b: number, lvl: 'top' | 'bot') => {
		const [ax, ay] = P(a), [bx, by] = P(b);
		return <DotLink p1={beadAt(ax, ay, KIND[a], 1, lvl, 'B', dup)} p2={beadAt(bx, by, KIND[b], 1, lvl, 'A', dup)} o={linkO} color={AMBER_INK} />;
	};
	const [lx] = P(0), [lx2] = P(1);
	const mid1 = (lx + lx2) / 2, mid2 = (P(2)[0] + P(3)[0]) / 2;
	return (
		<>
			<Heading items={[[0, 'Copied once, then pair up']]} size={64} />
			<Overlay>
				<CellBody />
				<Envelope r={NUC} />
				{pairLink(0, 1, 'top')}{pairLink(0, 1, 'bot')}{pairLink(2, 3, 'top')}
				{[0, 1, 2, 3].map(i => {
					const [x, y] = P(i);
					return <MC key={i} x={x} y={y} kind={KIND[i]} a={i % 2 === 0 ? PP : TT} dup={dup} s={pulse} beads={1} />;
				})}
				{/* the pairs, named */}
				<Bracket x1={P(0)[0] - 50} x2={P(1)[0] + 50} y={CY + 140} at={c.side} color={AMBER_INK} />
				<Bracket x1={P(2)[0] - 50} x2={P(3)[0] + 50} y={CY + 140} at={c.side + 8} color={AMBER_INK} />
				{/* one partner of each pair to each end */}
				<Arrow x1={CX - 275} y1={CY - 60} x2={CX - 430} y2={CY - 60} at={c.one} color={AMBER_INK} width={6} />
				<Arrow x1={CX + 275} y1={CY - 60} x2={CX + 430} y2={CY - 60} at={c.end} color={AMBER_INK} width={6} />
			</Overlay>
			<Pill at={c.sister} out={c.pro - 6} x={CX - 400} y={168} size={42}>copied once: each chromosome has 2 sister chromatids</Pill>
			<Pill at={c.side + 14} x={mid1 - 130} y={CY + 158} size={30}>homologous pair,<br />side by side</Pill>
			<Pill at={c.side + 22} x={mid2 - 80} y={CY + 158} size={30}>another pair</Pill>
			<GreyTag at={c.first} x={1450} y={330} text="mitosis: no pairing" size={34} />
			<MStrip at={[c.pro, null, null, null, null, null, null, null]} active={f >= c.pro ? 0 : -1} note={c.pro + 28} />
		</>
	);
};

// ---------- 5. Crossing over ----------
export const ZP = {px: CX - 125, py: CY, tx: 620, ty: 535, z: 1.7};
export const ZoomG: React.FC<{zp: number; children: React.ReactNode}> = ({zp, children}) => {
	const z = lerp(1, ZP.z, zp), tx = lerp(ZP.px, ZP.tx, zp), ty = lerp(ZP.py, ZP.ty, zp);
	return <g transform={`translate(${tx},${ty}) scale(${z}) translate(${-ZP.px},${-ZP.py})`}>{children}</g>;
};
const ZX = (xRel: number) => ZP.tx + (CX + xRel - ZP.px) * ZP.z;
const ZY = (yRel: number) => ZP.ty + (CY + yRel - ZP.py) * ZP.z;
const LP_X = CX + PAIRED[0][0], LT_X = CX + PAIRED[1][0];
/** Partner distance: the swapped lower piece travels from one chromosome's centre line to the other's, mirroring as it goes. */
const SWAP_DX = LT_X - LP_X;
/** The long pair at crossing-over progress t (0 apart, 1 done). */
const LongPair: React.FC<{t: number; o?: number; hi?: [number, number, number, number]; beads?: number}> = ({t, o = 1, hi = [0, 0, 0, 0], beads = 1}) => {
	const done = t >= 0.999;
	const dy = 26 * Math.sin(Math.PI * t);
	const e = t;
	return (
		<>
			<MC x={LP_X} y={CY} kind="L" a={PP} b={done ? LP_Ab : PP} pb={done ? undefined : [SWAP_DX * e, dy]} swapT={done ? 0 : e} hiA={hi[0]} hiB={hi[1]} o={o} beads={beads} />
			<MC x={LT_X} y={CY} kind="L" a={done ? LT_aB : TT} b={TT} pa={done ? undefined : [-SWAP_DX * e, -dy]} swapT={done ? 0 : e} hiA={hi[2]} hiB={hi[3]} o={o} beads={beads} />
		</>
	);
};
const Lightning: React.FC<{x: number; y: number; at: number; out?: number}> = ({x, y, at, out}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 8) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	const flick = 0.75 + 0.25 * Math.sin(f * 1.2);
	return <path d={`M${x - 7},${y - 20} L${x + 5},${y - 4} L${x - 5},${y + 3} L${x + 8},${y + 22}`} fill="none" stroke={AMBER} strokeWidth={5.5} strokeLinecap="round" strokeLinejoin="round" opacity={p * flick} />;
};

const OtherPair: React.FC<{o: number}> = ({o}) => (
	<>
		<MC x={CX + PAIRED[2][0]} y={CY} kind="S" a={PP} b={PP} o={o} />
		<MC x={CX + PAIRED[3][0]} y={CY} kind="S" a={TT} b={TT} o={o} />
	</>
);

export const SceneCrossingWhat: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('crossing-what'), {
		paired: 'While they are paired', one: 'a chromatid from one', partner: 'from its partner', brk: 'break at the same', swap: 'swap the matching', non: 'non-sister', chroma: ['chromatids', 1], cross: 'crossing over',
	});
	const zp = prog(f, 0, 44);
	const lit1 = vis(f, c.one, c.swap + 6, 12), lit2 = vis(f, c.partner, c.swap + 6, 12);
	const t = prog(f, c.swap + 4, 90);
	const cutY = geomYCut();
	return (
		<>
			<Overlay>
				<ZoomG zp={zp}>
					<CellBody />
					<Envelope r={NUC} />
					<OtherPair o={1 - 0.85 * zp} />
					<LongPair t={t} hi={[0, lit1, lit2, 0]} />
					<Lightning x={LP_X + armX(CUT) * 250 * MC_WK + 30} y={cutY} at={c.brk} out={c.swap + 20} />
					<Lightning x={LT_X - armX(CUT) * 250 * MC_WK - 30} y={cutY} at={c.brk + 4} out={c.swap + 20} />
				</ZoomG>
				<Scribble cx={ZX(PAIRED[0][0] + ARM_C)} cy={ZY(0)} rx={58} ry={236} at={c.one + 6} color={AMBER_INK} seed={3} />
				<Scribble cx={ZX(PAIRED[1][0] - ARM_C)} cy={ZY(0)} rx={58} ry={236} at={c.partner + 6} color={AMBER_INK} seed={7} />
				<g opacity={vis(f, c.non, c.chroma + 120, 12)}>
					<Bracket x1={ZX(PAIRED[0][0] + ARM_C)} x2={ZX(PAIRED[1][0] - ARM_C)} y={ZY(136)} at={c.non} color={AMBER_INK} />
				</g>
				<Bracket x1={ZX(PAIRED[0][0] - ARM_C)} x2={ZX(PAIRED[0][0] + ARM_C)} y={ZY(-136)} at={c.chroma} color={INK_SOFT} down={false} />
			</Overlay>
			<Hand at={c.non + 10} x={ZX(-120) - 120} y={ZY(136) + 16} size={50} w={300}>non-sister</Hand>
			<Hand at={c.chroma + 10} x={ZX(-180) - 60} y={ZY(-136) - 92} size={50} w={200} color={INK_SOFT}>sister</Hand>
			<Hand at={c.cross} x={1260} y={300} size={110}>crossing over</Hand>
			<MStrip at={[-100, null, null, null, null, null, null, null]} active={0} />
		</>
	);
};
function geomYCut() { return geomY(CY, 'L', 1, CUT); }
/** Mean arm offset of one chromatid of the long painted X (screen px before the zoom). */
const ARM_C = 0.1 * 250 * MC_WK;

export const SceneCrossingMakes: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('crossing-makes'), {
		no: 'does not make', newA: 'new alleles', combos: 'new combinations', four: 'the four long', chro: ['chromatids', 1], all: 'now all different', sister: 'the sister',
	});
	const pulse = (a: number, w = 40) => (f >= a && f < a + w ? Math.sin(((f - a) / w) * Math.PI) : 0);
	const tags = ['A B', 'A b', 'a B', 'a b'];
	const xs = [PAIRED[0][0] - ARM_C, PAIRED[0][0] + ARM_C, PAIRED[1][0] - ARM_C, PAIRED[1][0] + ARM_C];
	const chromX = [LP_X, LP_X, LT_X, LT_X];
	const sideOf = ['A', 'B', 'A', 'B'] as const;
	const ZA = (X: number) => ZP.tx + (X - ZP.px) * ZP.z;
	const bead = (i: number, lvl: 'top' | 'bot') => ZA(beadAt(chromX[i], CY, 'L', 1, lvl, sideOf[i], 1)[0]);
	const tipX = (i: number) => ZA(chromX[i] + (sideOf[i] === 'A' ? -1 : 1) * armX(0.03) * 250 * MC_WK);
	const tAt = [c.four, c.four + 16, c.all - 22, c.all];
	const LBX = [ZX(-125) - 180, ZX(-125) - 60, ZX(-125) + 60, ZX(-125) + 180];
	return (
		<>
			<Overlay>
				<ZoomG zp={1}>
					<CellBody />
					<Envelope r={NUC} />
					<OtherPair o={0.15} />
					<LongPair t={1} hi={[0, 0, 0, 0].map((_, i) => (i < 2 ? 0 : 0)) as [number, number, number, number]} />
				</ZoomG>
				{/* highlight rings on the letters */}
				{[0, 1, 2, 3].map(i => {
					return <g key={i}>
						<circle cx={bead(i, 'top')} cy={ZY(-HL + 0.17 * 250)} r={26 + 8 * pulse(c.no)} fill="none" stroke={AMBER} strokeWidth={6} opacity={pulse(c.no) + pulse(c.combos)} />
						<circle cx={bead(i, 'bot')} cy={ZY(-HL + 0.83 * 250)} r={26 + 8 * pulse(c.no)} fill="none" stroke={AMBER} strokeWidth={6} opacity={pulse(c.no) + pulse(c.combos)} />
					</g>;
				})}
				{xs.map((x, i) => <g key={i} opacity={vis(f, tAt[i], tAt[i] + 54, 10)}><Scribble cx={ZX(x)} cy={ZY(0)} rx={52} ry={236} at={tAt[i]} color={AMBER_INK} seed={3 + i} /></g>)}
				{xs.map((x, i) => <line key={'l' + i} x1={tipX(i)} y1={ZY(-HL) - 14} x2={LBX[i] + 0} y2={ZY(-HL) - 62} stroke={AMBER_INK} strokeWidth={3} opacity={prog(f, tAt[i] + 8, 10)} />)}
				<Bracket x1={ZX(xs[0])} x2={ZX(xs[3])} y={ZY(136)} at={c.all} color={AMBER_INK} />
				{/* a new allele: not made */}
				<g opacity={prog(f, c.no, 14)}>
					<circle cx={1330} cy={330} r={34} fill="none" stroke="#b9b09c" strokeWidth={5} strokeDasharray="6 8" />
					<text x={1330} y={344} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill="#9a9384">new</text>
				</g>
				<g opacity={prog(f, c.newA, 8)}>
					<DrawPath d="M1290,290 L1370,370" at={c.newA} dur={8} color="#7a8088" width={8} />
					<DrawPath d="M1370,290 L1290,370" at={c.newA + 6} dur={8} color="#7a8088" width={8} />
				</g>
				<g opacity={prog(f, c.sister, 12)}>
					<Scribble cx={ZA(LP_X)} cy={ZY(0)} rx={96} ry={240} at={c.sister} color={AMBER_INK} seed={5} />
				</g>
			</Overlay>
			{tags.map((tg, i) => <Hand key={tg} at={tAt[i] + 8} x={LBX[i] - 52} y={ZY(-HL) - 120} size={52} w={104} color={INK}><span style={{display: 'block', textAlign: 'center'}}>{tg}</span></Hand>)}
			<Hand at={c.all + 14} x={ZX(xs[0]) - 20} y={ZY(136) + 14} size={50}>4 different chromatids</Hand>
			<GreyTag at={c.newA + 8} x={1390} y={310} text="no new allele" size={38} />
			<Pill at={c.newA + 20} x={96} y={100} size={38}>allele: a version of a gene</Pill>
			<MStrip at={[-100, null, null, null, null, null, null, null]} active={0} />
		</>
	);
};
