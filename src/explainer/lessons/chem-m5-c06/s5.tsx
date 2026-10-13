import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Countdown, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Chip, Cross, EqStrip, Fade, FracX, GivensCard, MiniIce, Overlay, Radical, Ring, Sx, Tag, TEAL, Tick, CodedVessel, FurnaceIcon, DotRow, eqLayout, tw} from './parts';
import type {EqItem, Term} from './parts';
import {toks} from '../chem-m5-c05/parts';
import {IceTable, iceCell} from './ice';
import {Heading, CROSS, MINUS, N2O4C, NO2C, PLUS, cw, dur, kf, sc} from './common';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;
const smooth = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));
const N2O4_EQ: EqItem[] = [{k: 'sp', t: 'N_2O_4(g)', color: N2O4C}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'NO_2(g)', color: NO2C}];
const N2O4_REV: EqItem[] = [{k: 'sp', coef: '2', t: 'NO_2(g)', color: NO2C}, {k: 'arrow'}, {k: 'sp', t: 'N_2O_4(g)', color: N2O4C}];
const nCols = (a: number) => [{name: 'N_2O_4', at: a, color: N2O4C}, {name: 'NO_2', at: a + 8, color: NO2C}];
const T = {x: 720, y: 620, s: 0.76};
const VES = {x: 740, y: 330, w: 170, h: 240};
const card = (at: number, ats?: number[]) => [
	{text: 'N_2O_4 start: 0.100 mol', at: ats ? ats[0] : at, size: 34},
	{text: 'start: no NO_2', at: ats ? ats[1] : at, size: 34},
	{text: 'vessel: 2.00 L', at: ats ? ats[2] : at, size: 34},
	{text: '[NO_2] at equilibrium:', at: ats ? ats[3] : at, size: 34},
	{text: '0.0300 mol/L', at: ats ? ats[4] : at, size: 38, color: NO2C},
	{text: 'constant temperature', at: ats ? ats[5] : at, size: 34, color: INK_SOFT},
];
const Badge: React.FC<{x: number; y: number; n: string; at: number}> = ({x, y, n, at}) => (
	<Fade at={at}>
		<circle cx={x} cy={y} r={26} fill={TEAL} />
		<text x={x} y={y + 11} textAnchor="middle" fill="#fff" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32}}>{n}</text>
	</Fade>
);

// ---------- 9. Attempt ----------
const A = 'attempt';
const KA = cues(sc(A), {turn: 'Your turn', eq: 'splits into', seal: 'We seal', nothing: 'nothing else', ves: '2.00 litre', steady: 'steady temperature', conc: 'the concentration of', val: '0.0300', one: 'One find K', two: 'Two what is K', pause: 'Pause'});
export const SceneAttempt: React.FC = () => {
	const hold = sc(A).responseHold as {startFrame: number; endFrame: number};
	return (
		<>
			<Heading text="Your turn" at={KA.turn} size={62} />
			<Overlay>
				<Tag x={440} y={96} w={330} text="illustrative values" at={KA.seal} />
				<EqStrip items={N2O4_EQ} x={96} y={250} size={56} at={KA.eq} />
				<GivensCard x={96} y={330} w={560} h={420} at={KA.seal - 10} lh={52} lines={card(0, [KA.seal + 14, KA.nothing, KA.ves, KA.conc, KA.val, KA.steady])} />
				<CodedVessel x={VES.x} y={VES.y} w={VES.w} h={VES.h} tint={0} at={KA.seal} />
				{/* the two demands stay visible */}
				<Badge x={1000} y={320} n="1" at={KA.one} />
				<Sx x={1050} y={334} text="Find K for" size={42} at={KA.one + 6} />
				<EqStrip items={N2O4_EQ} x={1260} y={334} size={38} at={KA.one + 8} />
				<Badge x={1000} y={450} n="2" at={KA.two} />
				<Sx x={1050} y={464} text="Find K for" size={42} at={KA.two + 6} />
				<EqStrip items={N2O4_REV} x={1260} y={464} size={38} at={KA.two + 8} />
				<Sx x={1050} y={528} text="at the same temperature." size={42} at={KA.two + 14} />
				{/* an empty ICE table as the first-use scaffold */}
				<IceTable x={T.x} y={T.y} s={T.s} outlineAt={KA.one + 20} cols={nCols(KA.one + 40)} rows={ice({at: KA.one + 30, cells: []}, {at: KA.one + 36, cells: []}, {at: KA.one + 42, cells: []})} />
				<Sx x={1290} y={680} text="Pause here to answer." size={58} color={AMBER_INK} hand at={KA.pause} />
				<Countdown start={hold.startFrame} end={hold.endFrame} x={1650} y={810} r={72} />
			</Overlay>
		</>
	);
};

// ---------- 10a. Feedback, item one ----------
const F1 = 'feedback-one';
const KF1 = cues(sc(F1), {one: 'One', start: 'Start with concentrations', div: ['0.100', 1], over: ['2.00', 1], is: ['0.0500', 1], rose: ['0.0300', 1], makes: 'makes two N O two', fell: 'N two O four fell', half: 'half of that', c0150: ['0.0150', 1], eqr: 'Equilibrium N two O four is', eq0500: ['0.0500', 2], eq0350: ['0.0350', 1], kis: 'K is N O two squared', sq: ['0.0300', 2], t900: '0.000900', over350: ['0.0350', 2], gives: 'gives', r257: '0.0257', w1: '0.018', w1b: 'used the starting', w2: '0.045', w2b: 'took off the whole', w3: '0.86', w3b: 'forgot to square'});
const f1 = (p: string, k: number, occ = 1) => cw(F1, p, k, occ);
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const c = (r: number, col: number) => iceCell(T.x, T.y, T.s, r, col);
	const tint = kf(f, [[KF1.rose, 0], [KF1.rose + 290, 1]]);
	const pos = eqLayout(N2O4_EQ, 56, 96).pos;
	const chipFly = (i: number, at: number, label: string, text: string) => {
		const src = i === 0 ? pos[0] : pos[2];
		const x0 = i === 0 ? src.sx + src.w / 2 : src.cx + 8, y0 = 236;
		const [x1, y1] = c(1, i);
		const e = prog(f, at, 30);
		const px = x0 + (x1 - x0) * e, py = y0 + (y1 - 48 - y0) * e;
		const o = prog(f, at, 6) * (1 - prog(f, at + 52, 12));
		if (o <= 0.01) return null;
		return (
			<g key={i} opacity={o}>
				<circle cx={px} cy={py} r={24} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
				<Sx x={px} y={py + 11} text={text} size={32} color={AMBER_INK} anchor="middle" hand at={-1000} />
				<Sx x={px + 38} y={py + 10} text={label} size={30} color={AMBER_INK} hand at={at + 20} />
			</g>
		);
	};
	// dot strip: 10 N2O4 dots (0.005 mol/L each); 3 split into 6 NO2
	const SX = 1340, SY = 392;
	const split = (i: number) => smooth((f - KF1.makes - (i - 7) * 14) / 34);
	const rightOut = KF1.w1 - 40;
	const num: Term[][] = [[{t: 'NO_2', p: '2', at: f1('K is N O two squared', 2), from: c(2, 1), color: NO2C, dur: 32, pAt: f1('K is N O two squared', 5)}]];
	const den: Term[][] = [[{t: 'N_2O_4', at: f1('N two O four', 0, 4) + 4, from: c(2, 0), color: N2O4C, dur: 32}]];
	void KF1.gives;
	return (
		<>
			<Heading text="Item one" at={4} size={62} />
			<Overlay>
				<EqStrip items={N2O4_EQ} x={96} y={250} size={56} at={-100} />
				<GivensCard x={96} y={330} w={560} h={420} at={-100} lh={52} lines={card(-100)} />
				<CodedVessel x={VES.x} y={VES.y} w={VES.w} h={VES.h} tint={tint} at={-100} />
				<IceTable x={T.x} y={T.y} s={T.s} outlineAt={-400} cols={nCols(-100)} rows={ice(
					{at: -100, lit: [KF1.start, KF1.is + 50], cells: [
						{text: '0.0500', at: KF1.is + 6, color: N2O4C, from: [330, 850], flyDur: 30},
						{text: '0', at: KF1.is + 30, color: INK_SOFT},
					]},
					{at: -100, lit: [KF1.rose, KF1.c0150 + 40], cells: [
						{text: '−0.0150', at: KF1.c0150, color: MINUS},
						{text: '+0.0300', at: KF1.rose + 8, color: PLUS},
					]},
					{at: -100, cells: [
						{text: '0.0350', at: KF1.eq0350, color: N2O4C, pre: {text: '0.0500 − 0.0150', at: KF1.eq0500}},
						{text: '0.0300', at: KF1.eqr, color: NO2C},
					]},
				)} />
				{/* concentration = moles over litres */}
				<Fade at={KF1.div} out={KF1.c0150 + 40}>
					<Sx x={96} y={836} text="0.100 mol" size={44} at={KF1.div} />
					<Sx x={96} y={892} text="÷  2.00 L" size={44} at={KF1.over} />
					<Sx x={300} y={880} text="= 0.0500 mol/L" size={44} color={N2O4C} at={KF1.is} />
				</Fade>
				{chipFly(1, KF1.makes - 6, '× 2', '2')}
				{chipFly(0, KF1.makes + 12, '× 1', '1')}
				{/* the change in N2O4 is half the change in NO2 */}
				<Fade at={KF1.half} out={KF1.eqr - 20}>
					<DrawPath d={`M${c(1, 1)[0]},${c(1, 1)[1] + 36} C${c(1, 1)[0] - 20},${c(1, 1)[1] + 92} ${c(1, 0)[0] + 20},${c(1, 0)[1] + 92} ${c(1, 0)[0]},${c(1, 0)[1] + 38}`} at={KF1.half} dur={22} color={AMBER_INK} width={5} />
					<Sx x={(c(1, 0)[0] + c(1, 1)[0]) / 2} y={c(1, 0)[1] + 112} text="÷ 2" size={44} color={AMBER_INK} anchor="middle" hand at={KF1.half + 14} />
				</Fade>
				{/* particle strip: 1 dot = 0.005 mol/L */}
				<Fade at={KF1.div} out={rightOut}>
					<Sx x={SX - 10} y={SY - 56} text="1 dot = 0.005 mol/L" size={36} color={INK_SOFT} hand at={KF1.rose} />
					<Sx x={SX + 7 * 50 - 100} y={SY + 100} text="NO_2" size={36} color={NO2C} hand at={KF1.makes} />
				</Fade>
				<g opacity={1 - prog(f, rightOut, 12)}>
					<DotRow x={SX} y={SY} n={7} gap={50} r={16} fill={N2O4C} at={KF1.is} every={3} />
					{[7, 8, 9].map(i => {
						const u = split(i);
						const born = prog(f, KF1.is + i * 3, 8);
						return (
							<g key={i}>
								{born > 0.01 && u < 1 ? <circle cx={SX + i * 50} cy={SY} r={16 * born * (1 - u)} fill={N2O4C} stroke={INK} strokeWidth={2.5} /> : null}
								{u > 0 ? (
									<>
										<circle cx={SX + i * 50 - 14 * u} cy={SY + 36 + 40 * u} r={11 * (0.4 + 0.6 * u)} fill={NO2C} stroke={INK} strokeWidth={2.5} />
										<circle cx={SX + i * 50 + 14 * u} cy={SY + 36 + 40 * u} r={11 * (0.4 + 0.6 * u)} fill={NO2C} stroke={INK} strokeWidth={2.5} />
									</>
								) : null}
							</g>
						);
					})}
				</g>
				{/* K and the three beats */}
				<FracX cx={1620} cy={610} size={54} num={num} den={den} barAt={KF1.kis} prefix="K =" prefixAt={KF1.kis} hold={260} />
				<Sx x={1310} y={745} text="0.0300^{2} = 0.000900" size={46} at={KF1.t900} out={rightOut} />
				<Sx x={1310} y={815} text="0.000900 ÷ 0.0350" size={46} at={KF1.over350} out={rightOut} />
				<Sx x={1310} y={905} text="K = 0.0257" size={84} color={TEAL} hand at={KF1.r257} />
				<Fade at={KF1.r257 + 50}>
					<Sx x={96} y={890} text="check" size={36} color={TEAL} hand at={KF1.r257 + 50} />
					<Sx x={96} y={940} text="0.0350 + 0.0300 ÷ 2 = 0.0500" size={36} color={INK_SOFT} at={KF1.r257 + 56} />
					<Tick x={650} y={930} at={KF1.r257 + 80} s={36} />
				</Fade>
				{/* wrong answers */}
				<Chip x={1320} y={290} w={540} text="0.018: initial used" size={38} at={KF1.w1} color={INK_SOFT} cross={KF1.w1b + 30} />
				<Arrow x1={1318} y1={324} x2={c(0, 0)[0] + 60} y2={c(0, 0)[1] - 6} at={KF1.w1b} color={CROSS} width={5} out={KF1.w2 - 10} />
				<Chip x={1320} y={372} w={540} text="0.045: change not halved" size={38} at={KF1.w2} color={INK_SOFT} cross={KF1.w2b + 30} />
				<Arrow x1={1318} y1={406} x2={c(1, 0)[0] + 110} y2={c(1, 0)[1] + 80} at={KF1.w2b} color={CROSS} width={5} out={KF1.w3 - 10} />
				<Chip x={1320} y={454} w={540} text="0.86: power left off" size={38} at={KF1.w3} color={INK_SOFT} cross={KF1.w3b + 30} />
				<Ring cx={1690} cy={560} rx={22} ry={28} at={KF1.w3b} color={CROSS} seed={3} />
			</Overlay>
		</>
	);
};

// ---------- 10b. Feedback, item two ----------
const F2 = 'feedback-two';
const KF2 = cues(sc(F2), {two: 'Two', back: 'Written backwards', flipped: 'flipped', one: 'one over 0.0257', r389: '38.9', expr: 'The expression', num: 'N two O four over', den: 'N O two squared', again: ['0.0257', 2], check: 'check the direction', prod: 'the products are now'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const TT = {x: 96, y: 300, s: 0.7};
	const X0 = 860, S = 50, Y1 = 240, Y2 = 356;
	const po = eqLayout(N2O4_EQ, S, X0).pos, pn = eqLayout(N2O4_REV, S, X0).pos;
	const u = smooth((f - KF2.back) / 36);
	const lerp = (a: number, b: number) => a + (b - a) * u;
	const flying = f >= KF2.back && f < KF2.back + 40;
	const arc = 30 * Math.sin(Math.PI * Math.min(1, u));
	const dim = 1 - 0.55 * prog(f, KF2.back + 36, 12);
	const n2o4 = cw(F2, 'N two O four over', 0), no2 = cw(F2, 'N O two squared', 0), sqAt = cw(F2, 'N O two squared', 3);
	const sNum: Term[][] = [[{t: 'N_2O_4', at: n2o4, from: [pn[2].sx, Y2], color: N2O4C, dur: 30}]];
	const sDen: Term[][] = [[{t: 'NO_2', p: '2', at: no2, from: [pn[0].sx, Y2], color: NO2C, dur: 30, pAt: cw(F2, 'N O two squared', 3)}]];
	return (
		<>
			<Heading text="Item two: the equation written backwards" at={4} size={56} />
			<Overlay>
				<IceTable x={TT.x} y={TT.y} s={TT.s} outlineAt={-400} cols={nCols(-100)} rows={ice(
					{at: -100, cells: [{text: '0.0500', at: -100, color: N2O4C}, {text: '0', at: -100, color: INK_SOFT}]},
					{at: -100, cells: [{text: '−0.0150', at: -100, color: MINUS}, {text: '+0.0300', at: -100, color: PLUS}]},
					{at: -100, cells: [{text: '0.0350', at: -100, color: N2O4C}, {text: '0.0300', at: -100, color: NO2C}]},
				)} />
				<g opacity={dim}>
					<EqStrip items={N2O4_EQ} x={X0} y={Y1} size={S} at={-100} />
					<Sx x={1560} y={Y1 + 6} text="K = 0.0257" size={52} color={INK_SOFT} hand at={-100} />
				</g>
				{flying ? (
					<g>
						<Sx x={lerp(po[0].sx, pn[2].sx)} y={lerp(Y1, Y2) + arc} text="N_2O_4(g)" size={S} color={N2O4C} at={-100} />
						<Sx x={lerp(po[2].cx, pn[0].cx)} y={lerp(Y1, Y2) - arc} text="2" size={S} color={NO2C} at={-100} />
						<Sx x={lerp(po[2].sx, pn[0].sx)} y={lerp(Y1, Y2) - arc} text="NO_2(g)" size={S} color={NO2C} at={-100} />
					</g>
				) : null}
				<EqStrip items={N2O4_REV} x={X0} y={Y2} size={S} at={KF2.back + 34} />
				<DrawPath d={`M${X0 - 40},${Y1 + 10} C${X0 - 110},${Y1 + 50} ${X0 - 110},${Y2 - 60} ${X0 - 44},${Y2 - 14}`} at={KF2.back} dur={26} color={AMBER_INK} width={6} />
				<DrawPath d={`M${X0 - 70},${Y2 - 22} L${X0 - 44},${Y2 - 14} L${X0 - 56},${Y2 - 44}`} at={KF2.back + 22} dur={8} color={AMBER_INK} width={6} />
				<FracX cx={1120} cy={590} size={54} num={sNum} den={sDen} barAt={KF2.expr} prefix="K =" prefixAt={KF2.expr} />
				<Sx x={1330} y={610} text="=" size={54} at={sqAt + 14} />
				<FracX cx={1560} cy={590} size={54} num={[[{t: '0.0350', br: false, at: sqAt + 18}]]} den={[[{t: '0.000900', br: false, at: sqAt + 30}]]} barAt={sqAt + 18} hold={300} />
				<Sx x={1000} y={800} text="K = 38.9" size={92} color={TEAL} hand at={KF2.r389} />
				<Sx x={1420} y={800} text="= 1 / 0.0257" size={50} color={AMBER_INK} hand at={KF2.one} />
				<Sx x={1420} y={856} text="flipped" size={44} color={AMBER_INK} hand at={KF2.flipped} />
				{/* the two K values hold together */}
				<Sx x={96} y={690} text="as first written:  K = 0.0257" size={44} color={INK} hand at={KF2.back + 50} />
				<Sx x={96} y={746} text="written backwards:  K = 38.9" size={44} color={TEAL} hand at={KF2.r389} />
				<Chip x={96} y={800} w={440} text="0.0257 again" size={40} at={KF2.again} color={INK_SOFT} cross={KF2.again + 24} />
				<Sx x={96} y={920} text="direction flipped" size={46} color={CROSS} hand at={KF2.again + 40} />
			</Overlay>
		</>
	);
};

// ---------- 11. Decision rule and handoff ----------
const R = 'decision-rule';
const KD = cues(sc(R), {c1: 'So when a question', init: 'initial row', chg: 'change row', eqr: 'equilibrium row', k2: 'When it gives K', x: 'call the change x', solve: 'and solve', clean: 'works in a clean way', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Two questions to ask" at={4} size={62} />
			<Overlay>
				<Fade at={KD.c1 + 6}>
					<rect x={96} y={200} width={1180} height={250} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
					<MiniIce x={130} y={268} w={200} at={KD.c1 + 8} litRows={[[0, KD.init], [1, KD.chg], [2, KD.eqr]]} />
					<Sx x={370} y={310} text="Given a start and one settled value:" size={50} hand at={KD.c1 + 10} />
					<Sx x={370} y={392} text="table, then K." size={66} color={TEAL} hand at={KD.eqr} />
				</Fade>
				<Fade at={KD.k2 - 10}>
					<rect x={96} y={490} width={1180} height={340} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
					<FracX cx={225} cy={640} size={36} num={[[{t: '2x', br: false, at: KD.x}]]} den={[[{t: '0.45 − x', br: false, at: KD.x}]]} barAt={KD.x} hold={160} />
					<Sx x={330} y={650} text="= 7" size={40} at={KD.solve - 20} />
					<Radical x={120} y={560} w={270} h={40} at={KD.solve} />
					<Sx x={450} y={600} text="Given K:" size={52} hand at={KD.k2} />
					<Sx x={450} y={676} text="x, substitute, solve." size={66} color={TEAL} hand at={KD.x} />
					<Sx x={450} y={750} text="clean when both sides are perfect squares;" size={36} color={INK_SOFT} hand at={KD.clean} />
					<Sx x={450} y={796} text="other starts: later" size={36} color={INK_SOFT} hand at={KD.clean + 14} />
				</Fade>
				<Fade at={KD.next - 6}>
					<rect x={1330} y={200} width={530} height={630} rx={24} fill="#fffdf8" stroke={TEAL} strokeWidth={4} />
					<Sx x={1370} y={290} text="Next:" size={60} color={TEAL} hand at={KD.next} />
					<Sx x={1370} y={352} text="why factories do not" size={46} color={TEAL} hand at={KD.next + 8} />
					<Sx x={1370} y={406} text="wait for equilibrium" size={46} color={TEAL} hand at={KD.next + 16} />
				</Fade>
				<FurnaceIcon x={1356} y={520} at={KD.next + 14} />
				{f < 0 ? null : null}
			</Overlay>
		</>
	);
};

// ---------- 12. Key notes ----------
const rich = (text: string) => toks(text).map((t, i) => t.k === 1 ? <sub key={i} style={{fontSize: '0.64em', lineHeight: 0}}>{t.s}</sub> : t.k === 2 ? <sup key={i} style={{fontSize: '0.64em', lineHeight: 0}}>{t.s}</sup> : <span key={i}>{t.s}</span>);
const NOTES = [
	'An ICE table has a column for each substance and three rows: Initial, Change and Equilibrium. Work in concentrations: concentration (mol/L) = moles divided by litres.',
	'The change row follows the coefficients of the balanced equation. A substance used up is minus and a substance made is plus. The initial and equilibrium rows need not follow the coefficients (the start is given and K sets the equilibrium row). Equilibrium = initial + change.',
	'To find K: write the expression, fill the table from the start and the one measured value, substitute the equilibrium values (never the initial ones), and check the subtraction.',
	'To find a concentration from K: call the change x, write the change row by the coefficients, substitute and solve. The square root shortcut works only when both sides are perfect squares, for example H_2 and I_2 starting equal. Other starts need a method from a later video. Keep the positive root, and check that no concentration comes out negative.',
	'K belongs to the equation as written, at one temperature. Reverse the equation: K becomes 1 / K. Multiply every coefficient by n: K goes to the power n (halving gives the square root).',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 84}}><HandText text="Key notes: what to write in your book" at={2} size={64} cps={40} /></div>
		<div style={{position: 'absolute', left: 120, top: 176, width: 1690}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 10} style={{display: 'flex', gap: 22, marginBottom: 12}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 11, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 29, fontWeight: 500, color: INK, lineHeight: 1.24}}>{rich(n)}</div>
				</Enter>
			))}
		</div>
		<Enter at={70} style={{position: 'absolute', left: 96, top: 716, width: 1730}}>
			<div style={{background: '#fffdf8', border: `4px solid ${TEAL}`, borderRadius: 22, padding: '8px 30px 10px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, color: INK_SOFT}}>Memory aid</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: INK, lineHeight: 1.06}}><span style={{color: TEAL}}>Only the change row</span> follows the coefficients.</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK, lineHeight: 1.1}}>Flip the equation, flip K. Multiply the equation, power K.</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26, color: TEAL, marginTop: 4}}>used up is minus, made is plus; same temperature, equation as written.</div>
			</div>
		</Enter>
		<Enter at={90} style={{position: 'absolute', left: 1180, top: 88}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 40, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
	</>
);
void tw; void dur; void Cross;
