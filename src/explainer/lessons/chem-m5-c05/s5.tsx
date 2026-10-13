import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Countdown, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Chip, Cross, CuTube, EqStrip, FWD, Fade, Flask, Frac, GasTube, Overlay, Ring, Sx, TEAL, Tick, eqLayout, tw, toks} from './parts';
import type {EqItem, Term} from './parts';
import {CU_DEEP, CU_INK, GREEN, Heading, cw, sc} from './common';

const Q: React.FC<{n: string; children: React.ReactNode; at: number; top: number; left?: number; width?: number}> = ({n, children, at, top, left = 980, width = 880}) => (
	<Enter at={at} style={{position: 'absolute', left, top, width}}>
		<div style={{display: 'flex', gap: 20, alignItems: 'flex-start'}}>
			<div style={{flex: 'none', width: 52, height: 52, borderRadius: 999, background: TEAL, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 4}}>{n}</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 33, color: INK, lineHeight: 1.24}}>{children}</div>
		</div>
	</Enter>
);
const Badge: React.FC<{x: number; y: number; n: string; at: number}> = ({x, y, n, at}) => (
	<Fade at={at}>
		<circle cx={x} cy={y} r={28} fill={TEAL} />
		<text x={x} y={y + 12} textAnchor="middle" fill="#fff" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34}}>{n}</text>
	</Fade>
);

// ---------- 8. Attempt ----------
const A = 'attempt';
const KA = cues(sc(A), {turn: 'Your turn', one: 'One', cu: 'copper two plus', w1: 'Write the equilibrium expression', two: ['Two', 2], made: 'a made-up reaction', ab: 'where A and B', w2: 'Write the expression', equal: 'We start with equal', k4: 'In this question K is four', tell: 'What does that tell you', pause: 'Pause'});
const CU_EQ: EqItem[] = [{k: 'sp', t: 'Cu^{2+}(aq)', color: CU_INK}, {k: 'plus'}, {k: 'sp', coef: '4', t: 'NH_3(aq)', color: INK}, {k: 'arrow'}, {k: 'sp', t: '[Cu(NH_3)_4]^{2+}(aq)', color: CU_DEEP}];
const AB_EQ: EqItem[] = [{k: 'sp', t: 'A(aq)', color: '#3d6fd6'}, {k: 'plus'}, {k: 'sp', t: 'B(aq)', color: '#c4582f'}, {k: 'arrow'}, {k: 'sp', t: 'C(aq)', color: GREEN}, {k: 'plus'}, {k: 'sp', t: 'D(aq)', color: '#8a4fc4'}];
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const hold = sc(A).responseHold as {startFrame: number; endFrame: number};
	return (
		<>
			<Heading text="Your turn: two systems" at={KA.turn} size={62} />
			<Overlay>
				<Badge x={120} y={260} n="1" at={KA.one} />
				<Sx x={300} y={300} text="copper ions + ammonia" size={42} color={CU_INK} hand at={KA.cu + 6} />
				<EqStrip items={CU_EQ} x={96} y={470} size={36} at={KA.w1 - 20} />
				<Sx x={96} y={520} text="dilute aqueous solution, steady temperature" size={30} color={INK_SOFT} at={KA.w1 - 10} />
				<Badge x={120} y={650} n="2" at={KA.two} />
				<Flask x={200} y={590} w={130} h={170} color="#d9eaf3" at={KA.made} />
				<Sx x={370} y={690} text="a made-up reaction" size={42} color={TEAL} hand at={KA.made + 6} />
				<EqStrip items={AB_EQ} x={96} y={830} size={36} at={KA.ab} />
				<Sx x={96} y={884} text="made-up reaction, dilute aqueous solution, steady temperature" size={30} color={INK_SOFT} at={KA.ab + 10} />
				<Sx x={96} y={926} text="start with equal A and B, and no C or D" size={30} color={INK_SOFT} at={KA.equal} />
				<Countdown start={hold.startFrame} end={hold.endFrame} x={1740} y={900} r={48} />
			</Overlay>
			<CuTube x={196} y={186} h={240} at={KA.cu} />
			<Q n="1" at={KA.w1} top={230}>Write the equilibrium expression.</Q>
			<Q n="2" at={KA.w2} top={380}>Write the equilibrium expression. Start with equal concentrations of A and B and no C or D. In this question K is 4. What does that tell you about the settled mixture?</Q>
			<Enter at={KA.pause} style={{position: 'absolute', left: 980, top: 640}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: AMBER_INK}}>Pause here to answer.</div>
			</Enter>
			{f < 0 ? null : null}
		</>
	);
};

// ---------- 9a. Feedback, item one ----------
const F1 = 'feedback-one';
const KF1 = cues(sc(F1), {one: 'One', top: 'Products on top', under: 'reactants underneath', newion: 'The new ion', underneath: 'Underneath goes', because: 'because the coefficient four', wrote: 'If you wrote four times', r1: ['remember', 1], added: 'If you added the concentrations', r2: ['remember', 2]});
const cu = (k: number) => cw(F1, 'Underneath goes the copper ion times the ammonia to the power of four', k);
export const SceneFeedback1: React.FC = () => {
	const ES = 54, EY = 260;
	const x0 = 960 - eqLayoutW(CU_EQ, ES) / 2;
	const e = eqLayout(CU_EQ, ES, x0);
	const P = e.pos;
	const FS = 70, FCX = 980, FCY = 570;
	const num: Term[] = [{t: '[Cu(NH_3)_4]^{2+}', color: CU_DEEP, at: KF1.newion, from: [P[4].sx, EY], dur: 32}];
	const den: Term[] = [
		{t: 'Cu^{2+}', color: CU_INK, at: cu(3), from: [P[0].sx, EY], dur: 32},
		{t: 'NH_3', p: '4', color: INK, at: cu(7), from: [P[2].sx, EY], dur: 32, pAt: cu(10), pFrom: [P[2].cx, EY]},
	];
	return (
		<>
			<Heading text="Item one: copper and ammonia" at={4} size={62} />
			<Overlay>
				<EqStrip items={CU_EQ} x={x0} y={EY} size={ES} at={KF1.one} />
				<Frac cx={FCX} cy={FCY} size={FS} num={num} den={den} barAt={KF1.top} prefix="K =" />
				<Sx x={FCX} y={770} text="the coefficient 4 became a power" size={44} color={TEAL} anchor="middle" hand at={KF1.because} />
				<Chip x={96} y={810} w={800} text="4[NH_3] in the denominator" size={42} at={KF1.wrote} color={AMBER_INK} cross={KF1.r1} />
				<Sx x={96} y={920} text="a coefficient is a power, not a multiplier" size={46} color={TEAL} hand at={KF1.r1} />
				<Chip x={980} y={810} w={880} text="[Cu^{2+}] + [NH_3]^{4} underneath" size={46} at={KF1.added} color={AMBER_INK} cross={KF1.r2} />
				<Sx x={980} y={920} text="counts multiply: particles must meet" size={46} color={TEAL} hand at={KF1.r2} />
			</Overlay>
		</>
	);
};
const eqLayoutW = (items: EqItem[], size: number) => eqLayout(items, size, 0).end;

// ---------- 9b. Feedback, item two ----------
const F2 = 'feedback-two';
const KF2 = cues(sc(F2), {two: 'Two', top: 'The products go on top', ct: 'C times D', under: 'Underneath go the reactants', ab: 'A times B', start: 'We started with only A and B', k4: 'A K of four', thirds: 'two thirds', all: 'measurable amounts of all four', notAll: 'not almost all products'});
const X2 = (e: number) => 1000 + (e + 6) * 70;
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const ES = 50, EY = 250;
	const e = eqLayout(AB_EQ, ES, 96);
	const P = e.pos;
	const num: Term[] = [{t: 'C', color: GREEN, at: KF2.top, from: [P[4].sx, EY], dur: 30}, {t: 'D', color: '#8a4fc4', at: KF2.ct, from: [P[6].sx, EY], dur: 30}];
	const den: Term[] = [{t: 'A', color: '#3d6fd6', at: KF2.under, from: [P[0].sx, EY], dur: 30}, {t: 'B', color: '#c4582f', at: KF2.ab, from: [P[2].sx, EY], dur: 30}];
	const mk = prog(f, KF2.k4, 16);
	const bar = prog(f, KF2.thirds, 26);
	return (
		<>
			<Heading text="Item two: the made-up reaction" at={4} size={62} />
			<Overlay>
				<EqStrip items={AB_EQ} x={96} y={EY} size={ES} at={KF2.two} />
				<Frac cx={420} cy={560} size={64} num={num} den={den} barAt={KF2.top} prefix="K =" />
				{/* number line */}
				<Fade at={KF2.k4 - 20}>
					<rect x={X2(-6)} y={320} width={X2(-3) - X2(-6)} height={40} fill="#f6dfae" stroke={INK} strokeWidth={4} />
					<rect x={X2(-3)} y={320} width={X2(3) - X2(-3)} height={40} fill="#cfe9df" stroke={INK} strokeWidth={4} />
					<rect x={X2(3)} y={320} width={X2(6) - X2(3)} height={40} fill="#bcd6ee" stroke={INK} strokeWidth={4} />
					<Sx x={1105} y={402} text="mostly" size={32} color={AMBER_INK} anchor="middle" hand at={KF2.k4 - 20} />
					<Sx x={1105} y={436} text="reactants" size={32} color={AMBER_INK} anchor="middle" hand at={KF2.k4 - 20} />
					<Sx x={1420} y={402} text="both present in" size={32} color={TEAL} anchor="middle" hand at={KF2.k4 - 20} />
					<Sx x={1420} y={436} text="measurable amounts" size={32} color={TEAL} anchor="middle" hand at={KF2.k4 - 20} />
					<Sx x={1735} y={402} text="mostly" size={32} color={FWD} anchor="middle" hand at={KF2.k4 - 20} />
					<Sx x={1735} y={436} text="products" size={32} color={FWD} anchor="middle" hand at={KF2.k4 - 20} />
					<Sx x={X2(3)} y={300} text="10^{3}" size={30} color={INK_SOFT} anchor="middle" at={KF2.k4 - 20} />
					<Sx x={X2(-3)} y={300} text="10^{−3}" size={30} color={INK_SOFT} anchor="middle" at={KF2.k4 - 20} />
				</Fade>
				<circle cx={X2(Math.log10(4))} cy={340} r={16 * mk} fill={TEAL} stroke={INK} strokeWidth={3} />
				<Sx x={X2(Math.log10(4))} y={296} text="K = 4" size={44} color={TEAL} anchor="middle" hand at={KF2.k4 + 4} />
				<Ring cx={X2(3)} cy={340} rx={22} ry={44} at={KF2.k4 + 14} color={TEAL} seed={3} />
				<Tick x={1420} y={482} at={KF2.all} s={36} />
				<Cross x={1735} y={482} at={KF2.notAll} s={18} />
				{/* working */}
				<Sx x={1000} y={530} text="start: A = B = a, C = D = 0" size={36} color={INK} at={KF2.start} />
				<Sx x={1000} y={600} text="about two thirds of the A reacts" size={42} color={TEAL} at={KF2.thirds} />
				<Fade at={KF2.thirds + 10}>
					<rect x={1000} y={650} width={280 * bar} height={56} fill="#f6dfae" stroke={INK} strokeWidth={3} />
					<rect x={1280} y={650} width={560 * bar} height={56} fill="#cfe9df" stroke={INK} strokeWidth={3} />
					<Sx x={1140} y={752} text="A left: one third" size={34} color={AMBER_INK} anchor="middle" hand at={KF2.thirds + 26} />
					<Sx x={1560} y={752} text="turned into C and D: two thirds" size={34} color={GREEN} anchor="middle" hand at={KF2.thirds + 30} />
				</Fade>
				<Sx x={1420} y={850} text="all four are present" size={50} color={TEAL} anchor="middle" hand at={KF2.all} />
				<Chip x={96} y={800} w={520} text="mostly products" size={42} at={KF2.notAll - 10} color={AMBER_INK} cross={KF2.notAll + 6} />
				<Sx x={96} y={910} text="two thirds of the A has reacted, so all four are present" size={44} color={TEAL} hand at={KF2.notAll + 20} />
			</Overlay>
		</>
	);
};

// ---------- 10. Decision rule and handoff ----------
const R = 'decision-rule';
const KD = cues(sc(R), {eq: 'when a question gives an equation', top: 'products over reactants', pow: 'power of its coefficient', out: 'leave out', k: 'When it gives you K', size: 'read its size first', th: 'above about a thousand', thi: 'below about a thousandth', mid: 'in between', next: 'Next', start: 'starting amounts'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const DX = (e: number) => 140 + (e + 6) * 78;
	return (
		<>
			<Heading text="Two questions to ask" at={4} size={62} />
			<Enter at={KD.eq - 8} style={{position: 'absolute', left: 96, top: 200, width: 1150}}>
				<div style={{background: '#fffdf8', borderRadius: 24, padding: '22px 30px', boxShadow: '0 14px 32px rgba(60,45,20,0.10)', border: '1.5px solid rgba(60,45,20,0.08)', minHeight: 190}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, color: INK}}>1  Given an equation</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 34, color: INK_SOFT, marginTop: 8, width: 760}}>write the fraction, give the powers, check the states</div>
				</div>
			</Enter>
			<Enter at={KD.k - 8} style={{position: 'absolute', left: 96, top: 470, width: 1150}}>
				<div style={{background: '#fffdf8', borderRadius: 24, padding: '22px 30px', boxShadow: '0 14px 32px rgba(60,45,20,0.10)', border: '1.5px solid rgba(60,45,20,0.08)', minHeight: 340}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, color: INK}}>2  Given K</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 34, color: INK_SOFT, marginTop: 8}}>read its size first, as a rough guide</div>
				</div>
			</Enter>
			<Overlay>
				{/* card 1 icons */}
				<Fade at={KD.top}>
					<path d="M840,262 L940,262" stroke={INK} strokeWidth={7} strokeLinecap="round" />
					<circle cx={890} cy={238} r={9} fill={GREEN} />
					<circle cx={890} cy={290} r={9} fill={AMBER} />
				</Fade>
				<Fade at={KD.pow}>
					<Sx x={1010} y={296} text="x" size={54} at={KD.pow} />
					<Sx x={1040} y={268} text="2" size={36} color={TEAL} at={KD.pow + 8} />
				</Fade>
				<Ring cx={1150} cy={240} rx={60} ry={34} at={KD.out} color={GREEN} seed={4} />
				<Fade at={KD.out}>
					<Sx x={1150} y={252} text="(aq)" size={34} color={GREEN} anchor="middle" at={KD.out} />
				</Fade>
				{/* card 2 number line */}
				<Fade at={KD.size}>
					<rect x={DX(-6)} y={700} width={DX(-3) - DX(-6)} height={50} fill="#f6dfae" stroke={INK} strokeWidth={4} />
					<rect x={DX(-3)} y={700} width={DX(3) - DX(-3)} height={50} fill="#cfe9df" stroke={INK} strokeWidth={4} />
					<rect x={DX(3)} y={700} width={DX(6) - DX(3)} height={50} fill="#bcd6ee" stroke={INK} strokeWidth={4} />
				</Fade>
				<Sx x={DX(3)} y={680} text="about 1000" size={36} color={FWD} anchor="middle" hand at={KD.th} />
				<Ring cx={DX(3)} cy={725} rx={22} ry={40} at={KD.th} color={FWD} seed={3} />
				<Sx x={DX(-3)} y={680} text="about 1/1000" size={36} color={AMBER_INK} anchor="middle" hand at={KD.thi} />
				<Ring cx={DX(-3)} cy={725} rx={22} ry={40} at={KD.thi} color={AMBER_INK} seed={6} />
				<Sx x={(DX(-6) + DX(-3)) / 2} y={790} text="mostly reactants" size={34} color={AMBER_INK} anchor="middle" hand at={KD.thi + 8} />
				<Sx x={(DX(3) + DX(6)) / 2} y={790} text="mostly products" size={34} color={FWD} anchor="middle" hand at={KD.th + 8} />
				<Sx x={DX(0)} y={790} text="both, in measurable amounts" size={34} color={TEAL} anchor="middle" hand at={KD.mid} />
				{/* handoff */}
				<Fade at={KD.start - 20}>
					<Sx x={1560} y={230} text="starting amounts" size={46} color={INK} anchor="middle" hand at={KD.start - 20} />
				</Fade>
				<GasTube x={1370} y={270} w={140} h={320} counts={{h: 9, i: 9, hi: 0}} seed={5} reveal={prog(f, KD.start - 14, 20)} clamps={false} />
				<Arrow x1={1530} y1={430} x2={1640} y2={430} at={KD.start} color={TEAL} width={7} />
				<Fade at={KD.start + 10}>
					<rect x={1660} y={270} width={140} height={320} rx={44} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeDasharray="14 10" />
					<Sx x={1730} y={460} text="?" size={140} color={AMBER_INK} anchor="middle" hand at={KD.start + 10} />
					<Sx x={1730} y={632} text="settled mixture" size={38} color={INK_SOFT} anchor="middle" hand at={KD.start + 14} />
				</Fade>
				<Fade at={KD.next}>
					<rect x={1300} y={720} width={570} height={170} rx={24} fill="#fffdf8" stroke={TEAL} strokeWidth={4} />
					<Sx x={1330} y={788} text="Next: from the starting amounts," size={46} color={TEAL} hand at={KD.next} />
					<Sx x={1330} y={846} text="find the settled mixture" size={46} color={TEAL} hand at={KD.next + 6} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 11. Key notes ----------
const rich = (text: string) => toks(text).map((t, i) => t.k === 1 ? <sub key={i} style={{fontSize: '0.64em', lineHeight: 0}}>{t.s}</sub> : t.k === 2 ? <sup key={i} style={{fontSize: '0.64em', lineHeight: 0}}>{t.s}</sup> : <span key={i}>{t.s}</span>);
const NOTES = [
	'At a given temperature, the ratio of products to reactants, with each concentration raised to the power of its coefficient, stays constant for a settled mixture. That value is the equilibrium constant, K (Keq).',
	'For aA + bB ⇌ cC + dD: K = [C]^{c}[D]^{d} / ([A]^{a}[B]^{b}), written for the equation as given. Products on top, reactants underneath. Square brackets go round the whole ion.',
	'Pure solids, a pure liquid and the solvent do not appear: their concentration does not change, so it is already part of K. Gases and aqueous species do appear.',
	'Rough guide: K above about 10^{3}, mostly products; below about 10^{−3}, mostly reactants; in between, both present. K says where the mixture settles, not how fast.',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 84}}><HandText text="Key notes: what to write in your book" at={2} size={64} cps={40} /></div>
		<div style={{position: 'absolute', left: 120, top: 190, width: 1690}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={34 + i * 12} style={{display: 'flex', gap: 22, marginBottom: 20}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 12, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 36, fontWeight: 500, color: INK, lineHeight: 1.25}}>{rich(n.replace(/\^\{c\}/g, '^{c}'))}</div>
				</Enter>
			))}
		</div>
		<Enter at={96} style={{position: 'absolute', left: 96, top: 710, width: 1730}}>
			<div style={{background: '#fffdf8', border: `4px solid ${TEAL}`, borderRadius: 22, padding: '10px 30px 12px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: INK_SOFT}}>Memory aid</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: INK, lineHeight: 1.08}}>Products over reactants, <span style={{color: TEAL}}>coefficients become powers</span>, pure solids, a pure liquid and the solvent drop out.</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: TEAL, marginTop: 4}}>written for the equation as given, concentrations in mol/L, water as solvent or gas.</div>
			</div>
		</Enter>
		<Enter at={110} style={{position: 'absolute', left: 1180, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 40, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
	</>
);
void DrawPath; void tw; void Flask; void Overlay;
