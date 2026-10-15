import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Countdown, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {MiniIce} from '../chem-m5-c06/parts';
import {toks} from '../chem-m5-c05/parts';
import {Arrow, BLUE, CARD8, Chip, EQ8, EqStrip, Fade, FracX, GivensCard, KMarker, LN_NH3, LitArrows, LogLine, Overlay, QKGap, QMarker, Ring, Sx, Tag, TEAL, Tick, Tube, TUBE8, KEY8, Vessel, cardH, cardY, eqLayout, lx} from './parts';
import type {EqItem, Kind, Ln, Term} from './parts';
import {KindKey} from './board';
import {Heading, N2C, NH3C, NH3_INK, cw, kf, sc} from './common';
import {H2C, H2_INK, MINUS} from './common';

const H2K = '#6b6358';
const NH3_EQ: EqItem[] = [{k: 'sp', t: 'N_2(g)', color: N2C}, {k: 'plus'}, {k: 'sp', coef: '3', t: 'H_2(g)', color: H2K}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'NH_3(g)', color: NH3_INK}];
const nhPos = eqLayout(NH3_EQ, EQ8.s, EQ8.x).pos;
const NH3_KINDS: Kind[] = [{c: N2C, ink: '#26231f', r: 9.5}, {c: H2C, ink: H2_INK, r: 7.5}, {c: NH3C, ink: NH3_INK, r: 8}];

const Badge: React.FC<{x: number; y: number; n: string; at: number}> = ({x, y, n, at}) => (
	<Fade at={at}>
		<circle cx={x} cy={y} r={26} fill={TEAL} />
		<text x={x} y={y + 11} textAnchor="middle" fill="#fff" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32}}>{n}</text>
	</Fade>
);

// ---------- 10. Attempt (unseen: ammonia; countdown) ----------
const A = 'attempt';
const KA = cues(sc(A), {turn: 'Your turn', nh3: 'Ammonia is made', sealed: 'sealed vessel', iron: 'iron catalyst', celsius: 'four hundred degrees Celsius', k: ['0.50', 1], mix: 'A mixture has just been made up', n: ['0.40', 1], h: ['0.50', 2], a: ['0.20', 1], one: 'One', two: 'Two', more: 'more ammonia or less', pause: 'Pause here'});
export const SceneAttempt: React.FC = () => {
	const hold = sc(A).responseHold as {startFrame: number; endFrame: number};
	return (
		<>
			<Heading text="Your turn" at={KA.turn} size={62} />
			<Overlay>
				<EqStrip items={NH3_EQ} x={EQ8.x} y={EQ8.y} size={EQ8.s} at={KA.nh3} />
				<GivensCard x={CARD8.x} y={CARD8.y} w={CARD8.w} h={cardH(6)} at={KA.sealed - 10} lh={CARD8.lh} lines={[
					{text: 'K = 0.50 (400 °C)', at: KA.k, ring: KA.k + 8},
					{text: 'sealed vessel, iron catalyst', at: KA.sealed + 6, size: 32, color: INK_SOFT},
					{text: 'constant temperature', at: KA.celsius, size: 32, color: INK_SOFT},
					{text: 'now: [N_2] = 0.40 mol/L', at: KA.n, ring: KA.n + 8},
					{text: 'now: [H_2] = 0.50 mol/L', at: KA.h, ring: KA.h + 8},
					{text: 'now: [NH_3] = 0.20 mol/L', at: KA.a, ring: KA.a + 8},
				]} />
				<Chip x={1400} y={246} w={340} h={58} text="made-up mixture" size={34} at={KA.mix} color={INK_SOFT} />
				<Badge x={780} y={420} n="1" at={KA.one} />
				<Sx x={830} y={434} text="Write Q and calculate it." size={44} at={KA.one + 6} />
				<Badge x={780} y={570} n="2" at={KA.two} />
				<Sx x={830} y={584} text="Will the mixture make" size={44} at={KA.two + 6} />
				<Sx x={830} y={634} text="more ammonia or less?" size={44} at={KA.two + 10} />
				<Sx x={830} y={684} text="Give a reason." size={44} at={KA.two + 14} />
				<Sx x={780} y={800} text="Pause here to answer." size={58} color={AMBER_INK} hand at={KA.pause} />
				<Countdown start={hold.startFrame} end={hold.endFrame} x={1370} y={740} r={64} />
			</Overlay>
			<Vessel x={1500} y={310} h={540} at={KA.sealed} />
		</>
	);
};

// ---------- 11. Feedback ----------
const F = 'feedback';
const KF = cues(sc(F), {write: 'Write Q as', nh3: 'ammonia squared', nit: 'nitrogen times', h3: 'hydrogen cubed', sq: 'Ammonia squared is', v040: ['0.040', 1], cube: 'Hydrogen cubed is', r125: '0.125', tn: 'times the nitrogen', v050: '0.050', soq: 'So Q is', v080: ['0.80', 1], above: 'Q is above K', k50: ['0.50', 4], too: 'too much ammonia', revf: 'reverse reaction is faster', brk: 'breaks down', less: 'so it makes less', got: 'If you got', w20: ['0.20', 1], cubeoff: 'left the cube off', below: 'sits below K', found: 'If you found', w80: ['0.80', 2], more2: ['more ammonia', 2], flipped: 'flipped the rule', toomuch: 'too much product'});
export const SceneFeedback: React.FC = () => {
	const f = useCurrentFrame();
	const cardX = CARD8.x + 330;
	const yc = EQ8.y - 14;
	const num: Term[][] = [
		[{t: 'NH_3', p: '2', at: KF.nh3, pAt: KF.nh3 + 10, pFrom: [nhPos[4].cx, yc], out: KF.sq + 4, color: NH3_INK}],
		[{t: '0.20', p: '2', at: KF.sq + 4, from: [cardX, cardY(3) - 12], color: NH3_INK, dur: 26}],
	];
	const den: Term[][] = [
		[{t: 'N_2', at: KF.nit, out: KF.cube + 4, color: N2C}, {t: 'H_2', p: '3', at: KF.h3, pAt: KF.h3 + 12, pFrom: [nhPos[2].cx, yc], out: KF.cube + 4, color: H2K}],
		[{t: '0.40', at: KF.cube + 4, from: [cardX, cardY(1) - 12], color: N2C, dur: 26}, {t: '0.50', p: '3', at: KF.cube + 12, from: [cardX, cardY(2) - 12], color: H2K, dur: 26}],
	];
	const counts = (ff: number) => [Math.round(kf(ff, [[KF.revf, 8], [KF.brk + 24, 9]])), Math.round(kf(ff, [[KF.revf, 10], [KF.brk + 24, 13]])), Math.round(kf(ff, [[KF.revf, 4], [KF.brk + 24, 2]]))];
	const W = 1330;
	return (
		<>
			<Heading text="Check Q and the direction" at={4} size={58} />
			<Overlay>
				<EqStrip items={NH3_EQ} x={EQ8.x} y={EQ8.y} size={EQ8.s} at={-100} />
				<LitArrows items={NH3_EQ} rev={KF.revf} />
				<GivensCard x={CARD8.x} y={CARD8.y} w={CARD8.w} h={cardH(4)} at={-100} lh={CARD8.lh} lines={[
					{text: 'K = 0.50 (400 °C)', at: -100},
					{text: 'now: [N_2] = 0.40 mol/L', at: -100},
					{text: 'now: [H_2] = 0.50 mol/L', at: -100},
					{text: 'now: [NH_3] = 0.20 mol/L', at: -100},
				]} />
				<KindKey x={KEY8.x} y={KEY8.y} at={-100} items={[{kind: NH3_KINDS[0], label: 'N_2'}, {kind: NH3_KINDS[1], label: 'H_2'}, {kind: NH3_KINDS[2], label: 'NH_3'}]} />
				<Tube x={TUBE8.x} y={TUBE8.y} w={TUBE8.w} h={TUBE8.h} counts={counts} kinds={NH3_KINDS} tint={false} />
				<FracX cx={1060} cy={430} size={54} num={num} den={den} barAt={KF.write} prefix="Q =" prefixAt={KF.write} hold={340} />
				{/* the working, one beat per spoken number */}
				<Sx x={W} y={380} text="0.20^{2} =" size={44} at={KF.sq} />
				<Sx x={W + 190} y={380} text="0.040" size={44} color={NH3_INK} at={KF.v040} />
				<Sx x={W} y={450} text="0.50^{3} =" size={44} at={KF.cube} />
				<Sx x={W + 190} y={450} text="0.125" size={44} color={H2K} at={KF.r125} />
				<Sx x={W} y={520} text="0.40 × 0.125 =" size={44} at={KF.tn} />
				<Sx x={W + 290} y={520} text="0.050" size={44} color={N2C} at={KF.v050} />
				<Sx x={W} y={600} text="Q = 0.040 ÷ 0.050 =" size={46} at={KF.soq} />
				<Sx x={W} y={696} text="0.80" size={100} color={TEAL} hand at={KF.v080} />
				<Ring cx={W + 110} cy={684} rx={120} ry={58} at={KF.v080 + 12} color={AMBER} seed={6} width={6} />
				<Tick x={1720} y={640} at={KF.v080 + 26} s={50} />
				{/* the number line returns with K and Q */}
				<LogLine ln={LN_NH3} at={KF.soq + 10} />
				<QMarker ln={LN_NH3} at={KF.v080 + 6} value={0.8} label="Q = 0.80" side="right" labelAt={KF.v080 + 12} />
				<KMarker ln={LN_NH3} k={0.5} at={KF.above - 8} label="K = 0.50" />
				<QKGap ln={LN_NH3} at={KF.above + 4} qx={lx(0.8, LN_NH3)} kx={lx(0.5, LN_NH3)} />
				<Fade at={KF.above + 16}>
					<Sx x={1590} y={756} text="Q > K" size={64} color={AMBER_INK} hand at={KF.above + 16} />
				</Fade>
				<Fade at={KF.too}>
					<Sx x={1480} y={904} text="too much ammonia" size={42} color={AMBER_INK} hand at={KF.too} />
				</Fade>
				<Fade at={KF.brk}>
					<Sx x={1480} y={950} text="NH_3 breaks down" size={42} color={AMBER_INK} hand at={KF.brk} />
				</Fade>
				{/* wrong answers, one at a time */}
				<Chip x={730} y={540} w={540} h={60} text="0.20: cube left off" size={38} at={KF.got} out={KF.found - 4} color={INK_SOFT} cross={KF.cubeoff + 20} />
				<Fade at={KF.cubeoff} out={KF.found - 4}>
					<Sx x={740} y={648} text="reads as 'more ammonia'" size={34} color={MINUS} at={KF.cubeoff} />
				</Fade>
				<QMarker ln={LN_NH3} at={KF.w20} out={KF.found - 4} value={0.2} ghost label="0.20" side="left" labelAt={KF.w20 + 6} />
				<Chip x={730} y={540} w={540} h={60} text="0.80 but 'more ammonia'" size={38} at={KF.found} out={KF.toomuch + 120} color={INK_SOFT} cross={KF.flipped + 20} />
				<Fade at={KF.flipped} out={KF.toomuch + 120}>
					<Sx x={740} y={648} text="bigger Q = too much product" size={34} color={MINUS} at={KF.flipped} />
				</Fade>
				<Chip x={730} y={540} w={540} h={60} text="'not settled, so I can't use these'" size={34} at={KF.toomuch + 120} color={INK_SOFT} cross={KF.toomuch + 150} />
				<Fade at={KF.toomuch + 130}>
					<Sx x={740} y={648} text="Q uses the values from now" size={34} color={TEAL} at={KF.toomuch + 130} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 12. Decision rule and handoff ----------
const R = 'decision-rule';
const KR = cues(sc(R), {write: 'write the expression', conc: 'put in the concentrations from now', calc: 'calculate Q', comp: 'compare it with K', below: 'Q below K', above: 'Q above K', equal: 'Equal', dirn: 'direction, not how far', ice: 'ICE table', next: 'next'});
const MINI: Ln = {y: 370, x0: 1240, x1: 1790, lo: -1, hi: 3};
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const steps = [
		{n: '1', t: 'write the expression', at: KR.write},
		{n: '2', t: 'put in the concentrations from now', at: KR.conc},
		{n: '3', t: 'calculate Q', at: KR.calc},
		{n: '4', t: 'compare with K', at: KR.comp},
		{n: '5', t: 'state the direction', at: KR.below},
	];
	const qv = Math.exp(kf(f, [[KR.comp, Math.log(6.25)], [KR.comp + 80, Math.log(49)]]));
	return (
		<>
			<Heading text="Given a mixture and K" at={4} size={62} />
			<Overlay>
				<rect x={96} y={190} width={1010} height={400} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
				{steps.map((s, i) => (
					<g key={s.n}>
						<Badge x={146} y={254 + i * 68} n={s.n} at={s.at} />
						<Sx x={196} y={266 + i * 68} text={s.t} size={44} at={s.at + 4} color={i === 2 ? TEAL : INK} />
					</g>
				))}
				<rect x={96} y={620} width={1010} height={330} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
				<Arrow x1={140} y1={684} x2={250} y2={684} at={KR.below} color={BLUE} width={9} />
				<Sx x={280} y={698} text="Q below K: runs forward" size={44} color={BLUE} at={KR.below + 4} />
				<Arrow x1={250} y1={762} x2={140} y2={762} at={KR.above} color={AMBER_INK} width={9} />
				<Sx x={280} y={776} text="Q above K: runs back" size={44} color={AMBER_INK} at={KR.above + 4} />
				<Fade at={KR.equal}>
					<path d="M140,820 L140,846 L250,846 L250,820" fill="none" stroke={TEAL} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
				</Fade>
				<Sx x={280} y={848} text="Q = K: nothing changes overall" size={44} color={TEAL} at={KR.equal + 4} />
				<Tag x={620} y={880} w={440} text="direction only, not how far" at={KR.dirn} color={INK_SOFT} size={28} />
				{/* a small number line with Q chasing K */}
				<Fade at={KR.comp - 10}>
					<rect x={1160} y={190} width={700} height={350} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
				</Fade>
				<LogLine ln={MINI} at={KR.comp - 4} size={26} />
				<KMarker ln={MINI} k={49} at={KR.comp + 4} label="K" size={40} />
				<QMarker ln={MINI} at={KR.comp + 10} value={qv} label="Q" side="mid" size={40} />
				{/* next */}
				<Fade at={KR.ice - 10}>
					<rect x={1160} y={560} width={700} height={370} rx={24} fill="#fffdf8" stroke={TEAL} strokeWidth={4} />
					<Sx x={1196} y={640} text="Next:" size={60} color={TEAL} hand at={KR.next} />
					<Sx x={1196} y={706} text="harder ICE tables" size={48} color={TEAL} hand at={KR.next + 8} />
					<Sx x={1196} y={766} text="and Q decisions" size={48} color={TEAL} hand at={KR.next + 14} />
					<MiniIce x={1210} y={810} w={190} at={KR.ice} litRows={[[0, KR.ice + 10], [1, KR.ice + 20], [2, KR.ice + 30]]} />
				</Fade>
				<Fade at={KR.next + 10}>
					<path d="M1500,880 L1700,880" stroke={AMBER} strokeWidth={8} strokeLinecap="round" />
					<path d="M1680,862 L1702,880 L1680,898" fill="none" stroke={AMBER} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 13. Key notes ----------
const rich = (text: string) => toks(text).map((t, i) => t.k === 1 ? <sub key={i} style={{fontSize: '0.64em', lineHeight: 0}}>{t.s}</sub> : t.k === 2 ? <sup key={i} style={{fontSize: '0.64em', lineHeight: 0}}>{t.s}</sup> : <span key={i}>{t.s}</span>);
export const NOTES = [
	'The reaction quotient, Q, is the K expression worked out with the concentrations at any moment. K uses settled values only. At equilibrium, Q equals K.',
	'Compare Q with K at the same temperature. Q below K: the forward reaction is faster, so the mixture runs right. Q above K: the reverse reaction is faster, so it runs left. Q equals K: no net change.',
	'Why: Q below K means less product than a settled mixture at this temperature, so the forward reaction is faster. Q above K means more product, so the reverse reaction is faster. As the faster reaction runs, Q moves toward K and stops there. Equal rates do not mean equal concentrations.',
	'Adding or removing a substance changes Q, not K. Only temperature changes K. Q gives direction only.',
	'Method: expression, concentrations now, calculate Q, compare with K, state the direction.',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 84}}><HandText text="Key notes: what to write in your book" at={2} size={64} cps={40} /></div>
		<div style={{position: 'absolute', left: 120, top: 176, width: 1690}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={34 + i * 12} style={{display: 'flex', gap: 22, marginBottom: 18}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 11, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 34, fontWeight: 500, color: INK, lineHeight: 1.25}}>{rich(n)}</div>
				</Enter>
			))}
		</div>
		<Enter at={96} style={{position: 'absolute', left: 96, top: 742, width: 1730}}>
			<div style={{background: '#fffdf8', border: `4px solid ${TEAL}`, borderRadius: 22, padding: '8px 30px 10px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, color: INK_SOFT}}>Memory aid</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: TEAL, lineHeight: 1.06}}>Q chases K.</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK, lineHeight: 1.1}}>Q too small, make more products. Q too big, make more reactants.</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26, color: TEAL, marginTop: 4}}>same temperature, same equation as written.</div>
			</div>
		</Enter>
		<Enter at={110} style={{position: 'absolute', left: 1180, top: 88}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 40, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
	</>
);
void DrawPath; void cw;
