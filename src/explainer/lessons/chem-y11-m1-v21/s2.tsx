// Y11 Chem M1 V21 scenes 8 to 13: the fuzzy boundary (H-F's evidence, the pair hard over but still shared, the
// hatched band); Lewis dot diagrams for NaCl and MgCl2 (the amber electron carried across, brackets and teal charges);
// covalent Lewis diagrams for Cl2 and water (bonding pairs to lines, lone pairs, counts) and carbon dioxide (double
// bonds); the connection (three dials over the spectrum with the memory card).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DRYICE, EL, EVIDENCE, GLASS, MARKS, SALT, dM, pw, sc} from './common';
import type {PDef} from './common';
import {
	AMB_DOT, AMB_DOT_T, AMB_T, Bracket, Chip, Dial, E_BL, E_BL_T, Fade, Framed, GREEN_C, Heading, INK, LBrackets, LS, Lewis, MoveDot, PAPER, PenArrow, PenRing, Pin, Plate,
	RED_C, SLATE_T2, SpecBar, Sx, TEAL_C, TickMark, Write, bx, clamp01, dotXY, lerp, prog, richW, smooth, span, symW,
} from './parts';
import type {BarG, DialG, Sides} from './parts';
import {BAR, PINS6} from './s1';

const PB: React.FC<{p: PDef; cx: number; bottom: number; h: number; at?: number; o?: number}> = ({p, cx, bottom, h, at = -1000, o = 1}) => <Plate p={p} x={cx - pw(p, h) / 2} y={bottom - h} h={h} at={at} o={o} />;
const HEAD = 'Electronegativity: one pull, from sharing to transfer';
const GFrame: React.FC<{x: number; y: number; w: number; h: number; at: number}> = ({x, y, w, h, at}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	return v > 0.005 ? (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={18} fill="none" stroke={GREEN_C} strokeWidth={5} />
			<TickMark x={x + w + 30} y={y + 30} at={at + 8} color={GREEN_C} />
		</g>
	) : null;
};

// ---------- 8. the boundary is fuzzy ----------
const K8 = cues(sc('boundary'), {isnt: "It isn't", boils: 'it boils', melt: "doesn't melt", one: 'eight hundred and one', strongly: 'strongly polar', still: 'still covalent', guide: 'only a guide', bonds: 'Bonds near', seven: 'one point seven,'});
const GH: DialG = {a: [230, 480], b: [750, 480], R: 92, rl: 70};
export const SceneBoundary: React.FC = () => {
	const f = useCurrentFrame();
	const hf = MARKS.HF;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text={HEAD} at={-1000} />
			<Framed x={96} y={290} segs={[{t: 'not ions: molecules', c: GREEN_C}]} at={K8.isnt} size={52} stroke={GREEN_C} />
			<Dial g={GH} lSym="H" rSym="F" d={dM(hf)} lOut={0} rOut={6} />
			<Sx x={GH.a[0] - 20} y={GH.a[1] - 90} text="δ+" size={44} color={RED_C} anchor="middle" weight={800} at={K8.strongly} />
			<Sx x={GH.b[0] + 70} y={GH.b[1] - GH.R - 10} text="δ−" size={44} color={E_BL_T} weight={800} at={K8.strongly} />
			<Write x={(GH.a[0] + GH.b[0]) / 2 + 40} y={GH.a[1] + 150} text="still shared" at={K8.still} size={44} color={E_BL_T} anchor="middle" />
			<Sx x={(GH.a[0] + GH.b[0]) / 2} y={GH.a[1] - 130} text="H–F" size={44} color={INK} anchor="middle" weight={800} at={-1000} />
			{/* the evidence */}
			<Sx x={1060} y={300} text={`HF boils at about ${EVIDENCE.hfBoil} °C`} size={40} color={INK} weight={800} at={K8.boils} />
			<Sx x={1060} y={370} text={`salt melts at ${EVIDENCE.naclMelt} °C`} size={40} color={INK} weight={800} at={K8.one} />
			<Bracket a={[1040, 270]} b={[1040, 380]} at={K8.one + 10} color={INK} />
			<Write x={1060} y={440} text="the evidence decides" at={K8.one + 16} size={44} color={INK} />
			<Chip x={1060} y={470} segs={[{t: 'about 1.7, then check the evidence'}]} at={K8.seven} size={44} color={INK} />
			<SpecBar g={BAR} id="v21s8" bands={1} bandY={BAR.y + 108} widen={prog(f, K8.guide, 18)} />
			{PINS6.map(([pm, , lift]) => <Pin key={pm.label} g={BAR} v={dM(pm)} label={pm.label} at={-1000} lift={lift} />)}
			<Pin g={BAR} v={dM(hf)} label={`${hf.label} ${dM(hf).toFixed(1)}`} at={-1000} lift={150} size={44} color={E_BL_T} />
			<Write x={1100} y={640} text="mixed character" at={K8.guide + 6} size={42} color={INK} />
			{void K8.melt}{void K8.bonds}{void smooth}
		</svg>
	);
};

// ---------- 9 and 10: the ionic Lewis board ----------
const STRIP: BarG = {x0: 760, x1: 1560, y: 214, h: 22};
const IonicTop: React.FC<{mark: keyof typeof MARKS}> = ({mark}) => (
	<g>
		<SpecBar g={STRIP} id={'v21st' + mark} guides={1} bands={0} ticks={false} />
		<Pin g={STRIP} v={dM(MARKS[mark])} label={`${MARKS[mark].label} ${dM(MARKS[mark]).toFixed(1)}`} at={-1000} color={TEAL_C} />
		<Sx x={STRIP.x0 - 20} y={STRIP.y + 10} text="covalent" size={30} color={SLATE_T2} anchor="end" weight={800} at={-1000} />
		<Sx x={STRIP.x1 + 20} y={STRIP.y + 10} text="ionic" size={30} color={TEAL_C} weight={800} at={-1000} />
	</g>
);
const K9 = cues(sc('lewis-ionic'), {chemists: 'Chemists show', each: 'Each dot', inner: 'Inner electrons', bonding: 'part in bonding', sodium: 'sodium has one', seven: 'chlorine has seven', moves: 'The dot moves', left: 'Sodium is left', eight: 'now has eight', brackets: 'square brackets', outside: 'charge outside'});
const NA9: [number, number] = [780, 470], CL9: [number, number] = [1160, 470];
const CL_SIDES: Sides = ['bb', 'bb', 'bb', 'b'];
export const SceneLewisIonic: React.FC = () => {
	const f = useCurrentFrame();
	const moved = f >= K9.moves + 30;
	const from = dotXY(NA9[0], NA9[1], 'Na', 1, 0, 1), to = dotXY(CL9[0], CL9[1], 'Cl', 3, 1, 2);
	const shell = 1 - prog(f, K9.inner, 20);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Lewis dot diagrams: showing the transfer" at={0} />
			<IonicTop mark="NaCl" />
			<PB p={SALT} cx={230} bottom={640} h={300} />
			<Sx x={230} y={690} text="salt (NaCl)" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Lewis x={NA9[0]} y={NA9[1]} sym="Na" sides={['', moved ? '' : 'a', '', '']} hide={f >= K9.moves ? ['10'] : []} />
			<Lewis x={CL9[0]} y={CL9[1]} sym="Cl" sides={moved ? ['bb', 'bb', 'bb', 'ba'] : CL_SIDES} />
			{f >= K9.moves && !moved ? <MoveDot p={from} q={to} at={K9.moves} d={30} /> : null}
			<PenArrow a={[from[0] + 10, from[1] - 40]} b={[to[0] - 10, to[1] - 40]} at={K9.moves} color={AMB_T} bend={0.3} />
			<Write x={970} y={340} text="one electron across" at={K9.moves + 6} size={42} color={AMB_T} anchor="middle" />
			{/* chlorine's shells: the inner rings fade, the outer seven stay */}
			<g>
				{[[0.36, 2], [0.66, 8]].map(([k, n], i) => (
					<g key={i} opacity={shell}>
						<circle cx={1560} cy={470} r={150 * k} fill="none" stroke={INK} strokeWidth={3} />
						{Array.from({length: n}, (_, j) => <circle key={j} cx={1560 + 150 * k * Math.cos((j / n) * 6.283 + 0.3)} cy={470 + 150 * k * Math.sin((j / n) * 6.283 + 0.3)} r={9} fill={E_BL} stroke={E_BL_T} strokeWidth={2} />)}
					</g>
				))}
				<circle cx={1560} cy={470} r={150} fill="none" stroke={INK} strokeWidth={3} />
				{Array.from({length: 7}, (_, j) => <circle key={j} cx={1560 + 150 * Math.cos((j / 8) * 6.283 + 0.2)} cy={470 + 150 * Math.sin((j / 8) * 6.283 + 0.2)} r={10} fill={E_BL} stroke={E_BL_T} strokeWidth={2} />)}
				<circle cx={1560} cy={470} r={26} fill="#d24a3c" stroke="#a8322a" strokeWidth={3} />
				<Sx x={1560} y={470 + 190} text="chlorine: 2, 8, 7" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
			<PenRing cx={CL9[0]} cy={CL9[1]} rx={110} ry={86} at={K9.each + 8} color={INK} seed={6} out={K9.moves - 4} />
			<Write x={1160} y={630} text="outer electrons only" at={K9.each + 12} size={42} color={INK} anchor="middle" out={K9.left} />
			<Write x={1160} y={630} text="8: full" at={K9.eight} size={44} color={E_BL_T} anchor="middle" />
			<Sx x={NA9[0]} y={NA9[1] + 130} text="Na: 1 outer" size={34} color={INK} anchor="middle" weight={800} at={K9.sodium} out={K9.brackets} />
			<Sx x={CL9[0]} y={CL9[1] + 220} text="Cl: 7 outer" size={34} color={INK} anchor="middle" weight={800} at={K9.seven} out={K9.eight - 6} />
			<LBrackets x={NA9[0]} y={NA9[1]} sym="Na" q="+" o={prog(f, K9.brackets, 12)} />
			<LBrackets x={CL9[0]} y={CL9[1]} sym="Cl" q="−" o={prog(f, K9.brackets + 6, 12)} />
			<GFrame x={640} y={360} w={680} h={230} at={K9.outside} />
			<Sx x={980} y={790} text="Lewis dot diagram: outer electrons as dots" size={38} color={INK} anchor="middle" weight={800} at={K9.bonding} />
			{void K9.chemists}{void K9.left}
		</svg>
	);
};

const K10 = cues(sc('magnesium-chloride'), {works: 'works the same', two: 'two outer', each: 'each chlorine can', gives: 'gives one electron', formula: 'the formula', diagram: 'the diagram shows', separate: 'two separate'});
const S10 = 92;
const MG10: [number, number] = [980, 500], CA: [number, number] = [560, 500], CB: [number, number] = [1400, 500];
export const SceneMgCl2: React.FC = () => {
	const f = useCurrentFrame();
	const moved = f >= K10.gives + 34;
	const fa = dotXY(MG10[0], MG10[1], 'Mg', 3, 0, 1, S10), fb = dotXY(MG10[0], MG10[1], 'Mg', 1, 0, 1, S10);
	const ta = dotXY(CA[0], CA[1], 'Cl', 1, 1, 2, S10), tb = dotXY(CB[0], CB[1], 'Cl', 3, 1, 2, S10);
	const br = prog(f, K10.separate, 12);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Lewis dot diagrams: magnesium chloride" at={0} />
			<IonicTop mark="NaCl" />
			<PB p={SALT} cx={200} bottom={760} h={330} />
			<Sx x={200} y={810} text="salt (NaCl)" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Lewis x={MG10[0]} y={MG10[1]} sym="Mg" sides={['', moved ? '' : 'a', '', moved ? '' : 'a']} hide={f >= K10.gives ? ['10', '30'] : []} size={S10} />
			<Lewis x={CA[0]} y={CA[1]} sym="Cl" sides={['bb', moved ? 'ba' : 'b', 'bb', 'bb']} size={S10} />
			<Lewis x={CB[0]} y={CB[1]} sym="Cl" sides={['bb', 'bb', 'bb', moved ? 'ba' : 'b']} size={S10} />
			{f >= K10.gives && !moved ? <><MoveDot p={fa} q={ta} at={K10.gives} d={30} r={9.2} /><MoveDot p={fb} q={tb} at={K10.gives + 4} d={30} r={9.2} /></> : null}
			<PenArrow a={[fa[0] - 10, fa[1] - 44]} b={[ta[0] + 10, ta[1] - 44]} at={K10.gives} color={AMB_T} bend={-0.3} />
			<PenArrow a={[fb[0] + 10, fb[1] - 44]} b={[tb[0] - 10, tb[1] - 44]} at={K10.gives + 4} color={AMB_T} bend={0.3} />
			<Write x={960} y={350} text="one to each" at={K10.gives + 10} size={44} color={AMB_T} anchor="middle" />
			<Write x={560} y={660} text="room for one" at={K10.each} size={42} color={E_BL_T} anchor="middle" />
			<Write x={1400} y={660} text="room for one" at={K10.each + 6} size={42} color={E_BL_T} anchor="middle" />
			<Sx x={980} y={650} text="Mg: 2 outer" size={34} color={INK} anchor="middle" weight={800} at={K10.two} out={K10.separate} />
			<LBrackets x={MG10[0]} y={MG10[1]} sym="Mg" q="2+" o={br} size={S10} />
			<LBrackets x={CA[0]} y={CA[1]} sym="Cl" q="−" o={br} size={S10} />
			<LBrackets x={CB[0]} y={CB[1]} sym="Cl" q="−" o={br} size={S10} />
			<GFrame x={400} y={380} w={1170} h={250} at={K10.separate + 4} />
			<Sx x={560} y={600} text="Cl: 7 outer" size={34} color={INK} anchor="middle" weight={800} at={-1000} out={K10.each} />
			<Sx x={1400} y={600} text="Cl: 7 outer" size={34} color={INK} anchor="middle" weight={800} at={-1000} out={K10.each} />
			{/* the formula card */}
			<Fade at={-1000}>
				<rect x={1560} y={660} width={264} height={150} rx={18} fill={PAPER} stroke={INK} strokeWidth={4} />
				<Sx x={1692} y={760} text="MgCl_2" size={64} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={1692} y={860} text="1 Mg^{2+} : 2 Cl^{−}" size={34} color={TEAL_C} anchor="middle" weight={800} at={K10.formula} />
			</Fade>
			<Chip x={500} y={720} segs={[{t: '[Mg]^{2+} [Cl_2]^{2−}'}]} at={K10.diagram} size={44} color={RED_C} strike={K10.separate + 10} />
			<Write x={540} y={880} text="two separate ions" at={K10.separate + 16} size={44} color={RED_C} />
			{void K10.works}{void smooth}
		</svg>
	);
};

// ---------- 11. sharing: water ----------
const K11 = cues(sc('lewis-water'), {inA: 'In a covalent', sits: 'sits between', line: 'drawn as a line', pairs: 'Pairs that', lone: 'called lone pairs', water: 'Water is', oxygen: 'Oxygen has six', shares: 'Oxygen shares', bonding: 'two bonding pairs', lone2: 'two lone pairs', eight: 'oxygen eight', each: 'Each hydrogen', needs: 'hydrogen needs'});
const S11 = 64;
const CL1: [number, number] = [800, 330], CL2: [number, number] = [1100, 330];
const O11: [number, number] = [1050, 700], HL: [number, number] = [760, 700], HR: [number, number] = [1340, 700];
const S11W = 96;
/** Shared pair between two symbols (two dots stacked at the midpoint). */
const PairDots: React.FC<{x: number; y: number; colors: [string, string]; o?: number; r?: number}> = ({x, y, colors, o = 1, r = 7}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		{[-1, 1].map((s, i) => <circle key={i} cx={x} cy={y + s * 12} r={r} fill={colors[i] === 'a' ? AMB_DOT : E_BL} stroke={colors[i] === 'a' ? AMB_DOT_T : E_BL_T} strokeWidth={2} />)}
	</g>
));
export const SceneWater: React.FC = () => {
	const f = useCurrentFrame();
	const lineP = span(f, K11.line, K11.line + 16);
	const pair = span(f, K11.shares, K11.shares + 26);
	const mL = (HL[0] + O11[0]) / 2 - 8, mR = (HR[0] + O11[0]) / 2 + 8;
	const hDot = (h: [number, number], side: number) => dotXY(h[0], h[1], 'H', side, 0, 1, S11W);
	const oDot = (side: number) => dotXY(O11[0], O11[1], 'O', side, 0, 1, S11W);
	const hl = hDot(HL, 1), hr = hDot(HR, 3), ol = oDot(3), or = oDot(1);
	const P = (a: [number, number], m: number, dy: number): [number, number] => [lerp(a[0], m, pair), lerp(a[1], O11[1] + dy, pair)];
	const dots: [[number, number], string][] = [[P(hl, mL, -12), 'a'], [P(ol, mL, 12), 'b'], [P(hr, mR, -12), 'a'], [P(or, mR, 12), 'b']];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Lewis dot diagrams: sharing" at={0} />
			<PB p={GLASS} cx={230} bottom={860} h={480} />
			<Sx x={230} y={910} text="water" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			{/* Cl2: the shared pair becomes a line */}
			<Lewis x={CL1[0]} y={CL1[1]} sym="Cl" sides={['bb', '', 'bb', 'bb']} size={S11} />
			<Lewis x={CL2[0]} y={CL2[1]} sym="Cl" sides={['bb', 'bb', 'bb', '']} size={S11} />
			<PairDots x={(CL1[0] + CL2[0]) / 2} y={CL1[1]} colors={['a', 'a']} o={1 - lineP} />
			{lineP > 0.005 ? <line x1={(CL1[0] + CL2[0]) / 2 - 50 * lineP} y1={CL1[1]} x2={(CL1[0] + CL2[0]) / 2 + 50 * lineP} y2={CL1[1]} stroke={AMB_DOT_T} strokeWidth={8} strokeLinecap="round" /> : null}
			<Write x={950} y={250} text="pair = line" at={K11.line + 4} size={42} color={AMB_T} anchor="middle" />
			<PenRing cx={CL1[0] - 66} cy={CL1[1]} rx={22} ry={34} at={K11.lone} color={E_BL_T} seed={2} />
			<PenRing cx={CL2[0] + 66} cy={CL2[1]} rx={22} ry={34} at={K11.lone + 4} color={E_BL_T} seed={3} />
			<Write x={1300} y={300} text="lone pairs" at={K11.lone + 4} size={44} color={E_BL_T} />
			<Sx x={950} y={440} text="bonding pair: shared;  lone pair: one atom's own" size={34} color={INK} anchor="middle" weight={800} at={K11.pairs} />
			{/* water */}
			<Lewis x={O11[0]} y={O11[1]} sym="O" sides={['bb', '', 'bb', '']} size={S11W} />
			<Lewis x={HL[0]} y={HL[1]} sym="H" sides={['', '', '', '']} size={S11W} />
			<Lewis x={HR[0]} y={HR[1]} sym="H" sides={['', '', '', '']} size={S11W} />
			{dots.map(([p, c], i) => <circle key={i} cx={p[0]} cy={p[1]} r={9.6} fill={c === 'a' ? AMB_DOT : E_BL} stroke={c === 'a' ? AMB_DOT_T : E_BL_T} strokeWidth={2} opacity={prog(f, K11.oxygen + (c === 'a' ? 20 : 0), 10)} />)}
			<PenRing cx={mL} cy={O11[1]} rx={30} ry={40} at={K11.bonding} color={AMB_T} seed={4} />
			<PenRing cx={mR} cy={O11[1]} rx={30} ry={40} at={K11.bonding + 4} color={AMB_T} seed={5} />
			<PenRing cx={O11[0]} cy={O11[1] - 60} rx={44} ry={26} at={K11.lone2} color={E_BL_T} seed={6} />
			<PenRing cx={O11[0]} cy={O11[1] + 60} rx={44} ry={26} at={K11.lone2 + 4} color={E_BL_T} seed={7} />
			<Sx x={mL - 40} y={O11[1] + 130} text="bonding pair" size={34} color={AMB_T} anchor="middle" weight={800} at={K11.bonding} />
			<Sx x={O11[0] + 160} y={O11[1] - 90} text="lone pair" size={34} color={E_BL_T} weight={800} at={K11.lone2} />
			<Sx x={O11[0]} y={O11[1] + 190} text="O: 8" size={52} color={INK} anchor="middle" weight={800} at={K11.eight} />
			<Sx x={HL[0] - 70} y={HL[1] + 190} text="H: 2" size={52} color={INK} anchor="middle" weight={800} at={K11.each} />
			<Sx x={HR[0] + 70} y={HR[1] + 190} text="H: 2" size={52} color={INK} anchor="middle" weight={800} at={K11.each + 4} />
			<Write x={1600} y={O11[1] + 30} text="2 is full for H" at={K11.needs} size={42} color={INK} />
			<GFrame x={640} y={580} w={820} h={240} at={K11.needs + 10} />
			{void K11.inA}{void K11.sits}{void K11.water}
		</svg>
	);
};

// ---------- 12. double bonds: carbon dioxide ----------
const K12 = cues(sc('double-bonds'), {two: 'share two pairs', carbon: 'In carbon dioxide', four: 'carbon has four', six: 'oxygen has six', shares: 'Carbon shares', bonds: 'double bonds', every: 'every atom'});
const S12 = 96;
const C12: [number, number] = [1080, 560], O1: [number, number] = [700, 560], O2: [number, number] = [1460, 560];
export const SceneCO2: React.FC = () => {
	const f = useCurrentFrame();
	const g = span(f, K12.shares, K12.shares + 28);
	const ln = span(f, K12.bonds, K12.bonds + 16);
	const m1 = (O1[0] + C12[0]) / 2, m2 = (O2[0] + C12[0]) / 2;
	// moving bonding electrons: from each atom's sides into a 2 by 2 group between the symbols
	const src: [[number, number], 'a' | 'b', number, number][] = [
		[dotXY(C12[0], C12[1], 'C', 3, 0, 1, S12), 'a', m1 + 12, -12], [dotXY(C12[0], C12[1], 'C', 0, 0, 1, S12), 'a', m1 + 12, 12],
		[dotXY(O1[0], O1[1], 'O', 1, 0, 1, S12), 'b', m1 - 12, -12], [dotXY(O1[0], O1[1], 'O', 2, 0, 1, S12), 'b', m1 - 12, 12],
		[dotXY(C12[0], C12[1], 'C', 1, 0, 1, S12), 'a', m2 - 12, -12], [dotXY(C12[0], C12[1], 'C', 2, 0, 1, S12), 'a', m2 - 12, 12],
		[dotXY(O2[0], O2[1], 'O', 3, 0, 1, S12), 'b', m2 + 12, -12], [dotXY(O2[0], O2[1], 'O', 2, 0, 1, S12), 'b', m2 + 12, 12],
	];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Double bonds: carbon dioxide" at={0} />
			<PB p={DRYICE} cx={280} bottom={700} h={300} />
			<Sx x={280} y={750} text="solid carbon dioxide" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Lewis x={C12[0]} y={C12[1]} sym="C" sides={['', '', '', '']} size={S12} />
			<Lewis x={O1[0]} y={O1[1]} sym="O" sides={['bb', '', '', 'bb']} size={S12} />
			<Lewis x={O2[0]} y={O2[1]} sym="O" sides={['bb', 'bb', '', '']} size={S12} />
			{src.map(([p, c, tx, dy], i) => {
				const x = lerp(p[0], tx, g), y = lerp(p[1], C12[1] + dy, g);
				return <circle key={i} cx={x} cy={y} r={S12 * 0.1} fill={c === 'a' ? AMB_DOT : E_BL} stroke={c === 'a' ? AMB_DOT_T : E_BL_T} strokeWidth={2} opacity={1 - ln} />;
			})}
			{ln > 0.005 ? [m1, m2].map((m, i) => <g key={i} opacity={ln}>{[-10, 10].map(dy => <line key={dy} x1={m - 40} x2={m + 40} y1={C12[1] + dy} y2={C12[1] + dy} stroke={AMB_DOT_T} strokeWidth={7} strokeLinecap="round" />)}</g>) : null}
			<PenRing cx={m1} cy={C12[1]} rx={42} ry={40} at={K12.shares + 30} color={AMB_T} seed={3} out={K12.bonds} />
			<Write x={m1} y={C12[1] - 110} text="two pairs" at={K12.shares + 30} size={42} color={AMB_T} anchor="middle" />
			<Sx x={700} y={360} text="C: 4 outer      O: 6 outer" size={38} color={INK} weight={800} at={K12.four} />
			<GFrame x={560} y={440} w={1040} h={240} at={K12.bonds} />
			<Sx x={1080} y={760} text="double bond: two shared pairs" size={38} color={INK} anchor="middle" weight={800} at={K12.bonds + 6} />
			{[O1, C12, O2].map((p, i) => (
				<g key={i}>
					<Sx x={p[0]} y={p[1] + 300} text="8" size={52} color={INK} anchor="middle" weight={800} at={K12.every + i * 5} />
					<TickMark x={p[0] + 44} y={p[1] + 280} at={K12.every + i * 5 + 4} color={GREEN_C} />
				</g>
			))}
			{void K12.two}{void K12.carbon}{void K12.six}{void symW}{void richW}
		</svg>
	);
};

// ---------- 13. the connection ----------
const K13 = cues(sc('connection'), {so: "So here's", ends: 'two ends', bigger: 'The bigger', equally: 'sharing equally', unequally: 'sharing unequally', handing: 'handing the electron', small: 'Small gap', big: 'Big gap'});
export const SceneConnection: React.FC = () => {
	const f = useCurrentFrame();
	const B: BarG = {x0: 300, x1: 1620, y: 800, h: 44};
	const trio: [keyof typeof MARKS, number][] = [['Cl2', K13.equally], ['HCl', K13.unequally], ['NaCl', K13.handing]];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="The connection" at={0} />
			{trio.map(([k, at], i) => {
				const M = MARKS[k];
				const cx = [440, 960, 1480][i];
				const d = dM(M);
				const g: DialG = {a: [cx - 170, 380], b: [cx + 170, 380], R: 70, rl: M.l === 'H' ? 50 : 70};
				const hand = d >= 2 ? 1 : 0;
				return (
					<g key={k} opacity={0.999}>
						<Dial g={g} lSym={M.l} rSym={M.r} d={Math.min(d, 1.9)} lOut={0} rOut={0} hand={hand} ionO={hand} />
						<Sx x={cx} y={300 - 34} text={`${M.label}: ${d.toFixed(1)}`} size={40} color={INK} anchor="middle" weight={800} at={-1000} />
						<Sx x={cx} y={500} text={['shared equally', 'shared unequally', 'handed over'][i]} size={38} color={[SLATE_T2, INK, TEAL_C][i]} anchor="middle" weight={800} at={at} />
					</g>
				);
			})}
			<SpecBar g={B} id="v21s13" bands={1} bandY={B.y + 108} />
			<PB p={DRYICE} cx={170} bottom={840} h={110} />
			<PB p={SALT} cx={1760} bottom={860} h={170} />
			<PenArrow a={[bx(B, 0.1), B.y - 48]} b={[bx(B, 3.1), B.y - 48]} at={K13.bigger} color={AMB_T} bend={0} width={6} head={22} />
			<Write x={960} y={B.y - 76} text="bigger difference: more one-sided" at={K13.bigger + 8} size={42} color={AMB_T} anchor="middle" />
			{/* the memory card */}
			<rect x={420} y={550} width={1080} height={120} rx={22} fill={PAPER} stroke={INK} strokeWidth={5} opacity={prog(f, K13.small - 8, 12)} />
			<Sx x={450} y={590} text="memory aid" size={28} color={INK} hand at={K13.small - 8} />
			<Write x={620} y={648} text="Small gap, share." at={K13.small} size={56} color={SLATE_T2} />
			<Write x={1060} y={648} text="Big gap, transfer." at={K13.big} size={56} color={TEAL_C} />
			{void K13.ends}{void K13.bigger}{void EL}{void clamp01}{void Chip}{void Bracket}{void Fade}{void LS}{void Pin}{void RED_C}{void E_BL_T}{void EVIDENCE}
		</svg>
	);
};
