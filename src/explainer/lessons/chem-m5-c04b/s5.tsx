import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Countdown, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Ball, Bracket, Crumple, Curve, Fade, FWD, GasTube, GraphAxes, Overlay, Pill, ProfileAxes, ProfileCurve, PaintedSeesaw, RateBars, RxnChip, Ring, Seesaw, SvgText, TEAL, VLine, WrongChip, mkG, mkP, pillW} from './parts';
import {ChemH, GLASS, H2C, H2_INK, HI_INK, I2_INK, METAL, METAL_DARK, Heading, hexMix, kf, modelA, modelB, sc, tubeColour} from './common';

const N2C = '#2f4b7c', NH3C = '#6cb58a', NH3_INK = '#3f7d5a';

// ---------- coded rigid vessel ----------
const Vessel: React.FC<{x: number; y: number; w?: number; h?: number; n2: number; h2: number; nh3?: number; pellets?: boolean; seed?: number; at: number; heavy?: boolean}> = ({x, y, w = 190, h = 250, n2, h2, nh3 = 0, pellets = false, seed = 3, at, heavy = false}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 16);
	if (o <= 0.01) return null;
	const dots: {c: string; r: number; s: string}[] = [
		...Array.from({length: n2}, () => ({c: N2C, r: 11, s: INK})),
		...Array.from({length: h2}, () => ({c: H2C, r: 8, s: H2_INK})),
		...Array.from({length: nh3}, () => ({c: NH3C, r: 10, s: NH3_INK})),
	];
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={30} fill={GLASS} fillOpacity={0.6} stroke={INK} strokeWidth={heavy ? 9 : 6} />
			<rect x={x - 8} y={y - 14} width={w + 16} height={26} rx={10} fill={METAL} stroke={METAL_DARK} strokeWidth={5} />
			{dots.map((d, k) => {
				const a = (k * 2.399 + seed) % 6.283, rr = 0.2 + ((k * 0.37) % 0.7);
				const px = x + w / 2 + Math.cos(a) * (w / 2 - 34) * rr + Math.sin(f * 0.03 + k) * 9;
				const py = y + h * 0.5 + Math.sin(a * 1.3) * (h / 2 - 50) * rr + Math.cos(f * 0.035 + k * 1.7) * 9;
				return <circle key={k} cx={px} cy={py} r={d.r} fill={d.c} stroke={d.s} strokeWidth={2.2} />;
			})}
			{pellets ? Array.from({length: 7}, (_, k) => <circle key={'p' + k} cx={x + 34 + (k % 4) * 40 + (k > 3 ? 20 : 0)} cy={y + h - 26 - (k > 3 ? 30 : 0)} r={17} fill="#8a7466" stroke="#4d3f36" strokeWidth={3.5} />) : null}
		</g>
	);
};

const Q: React.FC<{n: string; children: React.ReactNode; at: number; top: number; left?: number; width?: number}> = ({n, children, at, top, left = 880, width = 950}) => (
	<Enter at={at} style={{position: 'absolute', left, top, width}}>
		<div style={{display: 'flex', gap: 20, alignItems: 'flex-start'}}>
			<div style={{flex: 'none', width: 52, height: 52, borderRadius: 999, background: TEAL, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 4}}>{n}</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 31, color: INK, lineHeight: 1.24}}>{children}</div>
		</div>
	</Enter>
);

// ---------- 8. Attempt ----------
const KT = cues(sc('attempt'), {turn: 'Your turn', ammonia: 'make ammonia', haber: 'Haber process', vessels: 'Two identical rigid', steady: 'same steady temperature', imagine: 'Imagine both', b: 'Vessel B contains iron', a: 'vessel A does not', one: 'One', first: 'which vessel settles first', early: 'stop the clock early', both: 'once both have settled', explain: 'Explain it using activation energy', two: ['Two', 2], third: 'a third vessel', iron: 'we add iron', what: 'What happens to the forward rate', pause: 'Pause'});
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const hold = sc('attempt').responseHold as {startFrame: number; endFrame: number};
	return (
		<>
			<Heading text="Your turn: a new system" at={KT.turn} size={62} />
			<RxnChip x={880} y={74} at={KT.ammonia - 10} left={[{t: 'N_2(g)', color: N2C}, {t: '+'}, {t: '3H_2(g)', color: H2_INK}]} right={[{t: '2NH_3(g)', color: NH3_INK}]} size={38} fwdLit={KT.ammonia} revLit={KT.ammonia} words={false} />
			<Overlay>
				<Vessel x={110} y={270} n2={4} h2={12} at={KT.vessels} seed={2} />
				<Vessel x={350} y={270} n2={4} h2={12} pellets at={KT.vessels + 10} seed={5} heavy />
				<Vessel x={640} y={270} n2={2} h2={6} nh3={4} at={KT.third} seed={8} />
				<SvgText x={205} y={590} text="vessel A" size={46} color={INK} anchor="middle" at={KT.a} />
				<SvgText x={205} y={634} text="no catalyst" size={40} color={INK_SOFT} anchor="middle" at={KT.a + 6} />
				<SvgText x={445} y={590} text="vessel B" size={46} color={INK} anchor="middle" at={KT.b} />
				<SvgText x={445} y={634} text="with iron" size={40} color={METAL_DARK} anchor="middle" at={KT.b + 6} />
				<SvgText x={735} y={590} text="vessel C" size={46} color={INK} anchor="middle" at={KT.third} />
				<SvgText x={735} y={634} text="already settled" size={40} color={TEAL} anchor="middle" at={KT.third + 6} />
				<Fade at={KT.iron}>
					<Crumple x={735} y={196} s={60} />
					<Arrow x1={735} y1={226} x2={735} y2={288} at={KT.iron} color={METAL_DARK} width={6} />
					<SvgText x={780} y={210} text="add iron" size={42} color={METAL_DARK} at={KT.iron} />
				</Fade>
				<Fade at={KT.steady}>
					<rect x={110} y={700} width={680} height={58} rx={29} fill="#fffdf8" stroke="#c4582f" strokeWidth={3.5} />
					<SvgText x={450} y={741} text="rigid, sealed, same steady temperature" size={42} color="#c4582f" anchor="middle" at={KT.steady} />
				</Fade>
				<Fade at={KT.vessels + 30}>
					<rect x={110} y={776} width={680} height={58} rx={29} fill="#fffdf8" stroke={TEAL} strokeWidth={3.5} />
					<SvgText x={450} y={817} text="same start: N_2 and H_2 only" size={42} color={TEAL} anchor="middle" at={KT.vessels + 30} />
				</Fade>
				<Countdown start={hold.startFrame} end={hold.endFrame} x={1740} y={880} r={48} />
			</Overlay>
			<Enter at={KT.vessels} style={{position: 'absolute', left: 880, top: 232, width: 950}}>
				<div style={{background: '#fffdf8', border: `3px solid ${TEAL}`, borderRadius: 18, padding: '12px 24px 14px', fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 31, color: INK, lineHeight: 1.24, boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
					Two identical rigid sealed vessels, at the same steady temperature, start with only <ChemH text="N_2" size={31} color={N2C} /> and <ChemH text="H_2" size={31} color={H2_INK} />. Vessel B contains iron, a catalyst. Vessel A does not.
					<div style={{marginTop: 6, color: TEAL}}>Imagine both are left long enough to settle. Without a catalyst that takes an extremely long time.</div>
				</div>
			</Enter>
			<Q n="1" at={KT.one} top={480}>Which vessel settles first? Which has more ammonia if we stop the clock early, before either vessel has settled? Which has more once both have settled? Explain it using activation energy.</Q>
			<Q n="2" at={KT.two} top={700}>A third vessel has already settled at equilibrium and we add iron. What happens to the forward rate, the reverse rate and the amount of ammonia, and why?</Q>
			<Enter at={KT.pause} style={{position: 'absolute', left: 880, top: 880}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: AMBER_INK}}>Pause here to answer.</div>
			</Enter>
			{f < 0 ? null : null}
		</>
	);
};

// ---------- 9a. Feedback, item one ----------
const GF = mkG(190, 240, 700, 400, 16, 15);
const PF = mkP(1050, 220, 700, 440);
const KF1 = cues(sc('feedback-one'), {bFirst: 'B settles first', lower: 'lower activation energy', both: 'both directions', stop: 'stop early', bMore: 'B has more ammonia', settled: 'both have settled', same: 'same amount', however: 'however long', lowers: 'lowers the activation energy', factor: 'same factor', stillEq: 'still equal', mix: 'same mixture', ends: 'ends with more ammonia', rem1: ['remember', 1], early: 'same early on', rem2: ['remember', 2]});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const clock = kf(f, [[KF1.bFirst - 10, 0], [KF1.stop, 3], [KF1.settled + 20, 16]], false);
	const g = PF;
	const topY = kf(f, [[KF1.lowers, g.yT], [KF1.lowers + 40, g.yP]]);
	const xm = g.x0 + 0.5 * g.w;
	return (
		<>
			<Heading text="Item one: the two vessels" at={4} size={62} />
			<Overlay>
				<GraphAxes g={GF} at={4} xTicks={[]} yTicks={[]} yLabel="amount of ammonia (made-up)" />
				<Curve g={GF} fn={t => modelA(t).hi} upTo={clock} color={INK_SOFT} width={5} />
				<Curve g={GF} fn={t => modelB(t).hi} upTo={clock} color={METAL_DARK} width={11} />
				<SvgText x={GF.px(9.8)} y={GF.py(14) - 24} text="B (iron)" size={46} color={METAL_DARK} at={KF1.bFirst} />
				<SvgText x={GF.px(9)} y={GF.py(13.4) + 70} text="A (no catalyst)" size={46} color={INK_SOFT} at={KF1.bFirst + 8} />
				<VLine g={GF} t={3} at={KF1.stop} label="stop early" color={INK} dy={GF.h - 14} dx={12} anchor="start" size={40} out={KF1.settled} />
				<Fade at={KF1.bMore} out={KF1.settled}><SvgText x={GF.px(3) + 24} y={GF.py(7)} text="B is ahead" size={50} color={METAL_DARK} at={KF1.bMore} /></Fade>
				<Fade at={KF1.settled}>
					<rect x={GF.px(13)} y={GF.y} width={GF.px(16) - GF.px(13)} height={GF.h} fill="rgba(13,107,82,0.12)" />
					<SvgText x={GF.px(12.6)} y={GF.py(7)} text="same amount" size={52} color={TEAL} anchor="end" at={KF1.same} />
				</Fade>
				<Fade at={KF1.however}><SvgText x={GF.px(12.6)} y={GF.py(7) + 50} text="however long A takes" size={36} color={INK_SOFT} anchor="end" at={KF1.however} /></Fade>
				{/* the energy picture */}
				<ProfileAxes g={g} at={KF1.lower} />
				<ProfileCurve g={g} peak={g.yT} at={KF1.lower} dur={30} />
				<ProfileCurve g={g} peak={g.yP} at={KF1.lower + 20} dur={40} color={METAL_DARK} dash="18 12" width={8} />
				<path d={`M${g.x0},${g.yL} L${g.x0 + 0.13 * g.w},${g.yL} M${g.x0 + 0.87 * g.w},${g.yR} L${g.x0 + g.w},${g.yR}`} stroke={INK} strokeWidth={9} strokeLinecap="round" opacity={prog(f, KF1.lower, 12)} />
				<SvgText x={xm} y={g.yT - 20} text="A: high ridge" size={42} color={INK} anchor="middle" at={KF1.lower} />
				<SvgText x={xm} y={g.yP + 90} text="B: lower pass" size={42} color={METAL_DARK} anchor="middle" at={KF1.lower + 24} />
				<Bracket x={g.x0 + 0.09 * g.w} y1={g.yL} y2={topY} color={FWD} at={KF1.both} side="right" />
				<Bracket x={g.x0 + 0.91 * g.w} y1={g.yR} y2={topY} color={AMBER_INK} at={KF1.both + 8} side="left" />
				<Fade at={KF1.both}>
					<SvgText x={g.x0 + 0.075 * g.w} y={g.yL + 56} text="forward" size={40} color={FWD} anchor="middle" at={KF1.both} />
					<SvgText x={g.x0 + 0.93 * g.w} y={g.yR - 22} text="back" size={40} color={AMBER_INK} at={KF1.both + 8} />
				</Fade>
				<Fade at={KF1.factor}><SvgText x={g.x0 + g.w / 2} y={g.y0 + g.h + 100} text="both rates rise by the same factor" size={48} color={TEAL} anchor="middle" at={KF1.factor} /></Fade>
				<Fade at={KF1.mix} out={KF1.ends}><SvgText x={450} y={760} text="a catalyst changes the speed, not the destination" size={60} color={INK} anchor="middle" at={KF1.mix} /></Fade>
				<WrongChip at={KF1.ends} out={KF1.early} x={190} y={780} chip="B ends with more ammonia" fix="" w={640} />
				<WrongChip at={KF1.early} out={9999} x={190} y={780} chip="the same early on" fix="" w={640} />
				<Fade at={KF1.rem2}><SvgText x={190} y={900} text="B's rates are larger, so B is ahead early" size={50} color={TEAL} at={KF1.rem2} /></Fade>
			</Overlay>
		</>
	);
};
void pillW; void Pill; void Ball; void HI_INK; void I2_INK; void hexMix; void tubeColour; void GasTube; void AMBER;

// ---------- 9b. Feedback, item two ----------
const PF2 = mkP(1020, 230, 700, 440);
const K9 = cues(sc('feedback-two'), {raises: 'Iron raises', factor: 'by the same factor', wereEq: 'They were equal', stay: 'stay equal', amount: 'amount of ammonia', shifts: 'shifts toward ammonia', ahead: 'one rate pulled ahead', only: 'only the forward rate rises', back: 'for the trip back', amt: 'same amount'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const g = PF2;
	const step = kf(f, [[K9.raises + 20, 0.2], [K9.raises + 60, 2]]);
	const xm = g.x0 + 0.5 * g.w;
	return (
		<>
			<Heading text="Item two: iron at equilibrium" at={4} size={62} />
			<Overlay>
				<Vessel x={110} y={290} n2={2} h2={6} nh3={4} at={4} seed={8} />
				<SvgText x={205} y={600} text="vessel C" size={46} color={INK} anchor="middle" at={4} />
				<Fade at={K9.raises}>
					<Crumple x={205} y={226} s={60} />
					<Arrow x1={205} y1={256} x2={205} y2={318} at={K9.raises} color={METAL_DARK} width={6} />
					<SvgText x={250} y={240} text="add iron" size={42} color={METAL_DARK} at={K9.raises} />
				</Fade>
				<Fade at={K9.amount}>
					<SvgText x={205} y={654} text="ammonia: steady" size={42} color={TEAL} anchor="middle" at={K9.amount} />
					<Ring cx={205} cy={415} rx={112} ry={150} at={K9.amount} color={TEAL} seed={3} />
				</Fade>
				<RateBars x0={420} base={640} scale={100} fwd={step} rev={step} at={4} unlabelled ghost={f >= K9.raises + 20 ? {fwd: 0.2, rev: 0.2} : undefined} eqAt={K9.wereEq} axisLabel="rate (units per tick)" />
				<Fade at={K9.factor}><SvgText x={430} y={300} text="both rise by the same factor" size={44} color={INK} at={K9.factor} /></Fade>
				<Fade at={K9.stay}><SvgText x={430} y={246} text="still equal" size={50} color={TEAL} at={K9.stay} /></Fade>
				{/* one lowered pass serves both trips */}
				<ProfileAxes g={g} at={K9.back - 40} />
				<ProfileCurve g={g} peak={g.yP} at={K9.back - 40} dur={30} color={METAL_DARK} width={8} />
				<path d={`M${g.x0},${g.yL} L${g.x0 + 0.13 * g.w},${g.yL} M${g.x0 + 0.87 * g.w},${g.yR} L${g.x0 + g.w},${g.yR}`} stroke={INK} strokeWidth={9} strokeLinecap="round" opacity={prog(f, K9.back - 40, 12)} />
				<Arrow x1={g.x0 + 0.2 * g.w} y1={g.yP - 100} x2={g.x0 + 0.8 * g.w} y2={g.yP - 100} at={K9.back - 10} color={FWD} width={7} />
				<Arrow x1={g.x0 + 0.8 * g.w} y1={g.yP - 50} x2={g.x0 + 0.2 * g.w} y2={g.yP - 50} at={K9.back + 6} color={AMBER_INK} width={7} />
				<SvgText x={xm} y={g.yP - 150} text="one lowered pass, both trips" size={44} color={METAL_DARK} anchor="middle" at={K9.back} />
				<WrongChip at={K9.shifts} out={K9.only - 4} x={90} y={800} chip="it shifts toward ammonia" fix="" w={640} />
				<Fade at={K9.ahead} out={K9.only - 4}><SvgText x={90} y={920} text="no rate pulled ahead" size={50} color={TEAL} at={K9.ahead} /></Fade>
				<WrongChip at={K9.only} out={9999} x={90} y={800} chip="only the forward rate rises" fix="" w={640} />
				<Fade at={K9.amt}><SvgText x={90} y={920} text="both rates, same factor" size={50} color={TEAL} at={K9.amt} /></Fade>
			</Overlay>
		</>
	);
};

// ---------- 10. Decision rule and handoff ----------
const KD = cues(sc('decision-rule'), {ask: 'ask whether', speed: 'the speed or the mixture', both: 'in both directions', graph: 'On a graph', level: 'same final level', sooner: 'reached sooner', noChange: 'no change at all', other: 'For any other change', which: 'which rates change', factor: 'same factor', next: 'Next', number: 'putting a number'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const shake = f >= KD.number && f < KD.number + 50 ? Math.sin((f - KD.number) * 1.7) * 7 * (1 - (f - KD.number) / 50) : 0;
	const cards = [
		{y: 190, at: KD.ask, n: '1', q: 'Does it change the speed or the mixture?', a: 'A catalyst changes the speed, in both directions'},
		{y: 400, at: KD.graph, n: '2', q: 'On a graph', a: 'the same final level reached sooner, or no change at all if already at equilibrium'},
		{y: 610, at: KD.other, n: '3', q: 'Any other change', a: 'ask which rates change, and whether by the same factor'},
	];
	const gx = 1010, gy = 250;
	return (
		<>
			<Heading text="Predicting with a catalyst" at={4} />
			{cards.map((c, i) => (
				<Enter key={i} at={c.at - 6} style={{position: 'absolute', left: 96, top: c.y, width: 1180}}>
					<div style={{display: 'flex', alignItems: 'center', gap: 28, background: '#fffdf8', borderRadius: 24, padding: '20px 30px', boxShadow: '0 14px 32px rgba(60,45,20,0.10)', border: '1.5px solid rgba(60,45,20,0.08)', minHeight: 150}}>
						<div style={{flex: 'none', width: 62, height: 62, borderRadius: 999, background: TEAL, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{c.n}</div>
						<div style={{paddingRight: 190}}>
							<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: INK, lineHeight: 1}}>{c.q}</div>
							<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32, color: INK_SOFT, marginTop: 6, lineHeight: 1.2}}>{c.a}</div>
						</div>
					</div>
				</Enter>
			))}
			<Overlay>
				{/* icons inside the cards */}
				<Fade at={KD.speed}><Crumple x={1200} y={265} s={70} /></Fade>
				<Fade at={KD.level}>
					<path d="M1110,520 L1110,450 L1240,450" fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" />
					<Curve g={{x: 1110, y: 450, w: 130, h: 70, tMax: 16, vMax: 15, px: t => 1110 + (t / 16) * 130, py: v => 520 - (v / 15) * 70}} fn={t => modelA(t).hi} upTo={16} color={INK_SOFT} width={4} />
					<Curve g={{x: 1110, y: 450, w: 130, h: 70, tMax: 16, vMax: 15, px: t => 1110 + (t / 16) * 130, py: v => 520 - (v / 15) * 70}} fn={t => modelB(t).hi} upTo={16} color={METAL_DARK} width={8} />
				</Fade>
				<Fade at={KD.which}>
					<rect x={1100} y={693} width={34} height={50} fill="#bcd6ee" stroke={FWD} strokeWidth={4} rx={3} />
					<rect x={1146} y={713} width={34} height={30} fill="#f6dfae" stroke={AMBER} strokeWidth={4} rx={3} />
					<text x={1190} y={680} fill={INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}}>?</text>
				</Fade>
				<Fade at={KD.factor}><path d="M1200,718 L1240,718" stroke={TEAL} strokeWidth={7} strokeLinecap="round" /></Fade>
			</Overlay>
			<div style={{position: 'absolute', left: 1450 + shake, top: 230, opacity: prog(f, KD.both, 14)}}>
				<svg width={300} height={540} viewBox="0 0 300 540" style={{overflow: 'visible'}}>
					<GasTube x={60} y={20} w={170} h={420} counts={{h: 2, i: 2, hi: 14}} seed={5} />
					<text x={145} y={500} textAnchor="middle" fill={TEAL} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48}}>the settled tube</text>
				</svg>
			</div>
			<Enter at={KD.next} style={{position: 'absolute', left: 1160, top: 820, width: 700}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 20, background: '#fffdf8', border: `3px solid ${TEAL}`, borderRadius: 20, padding: '12px 24px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
					<svg width={150} height={110} viewBox="-110 -75 220 160" style={{overflow: 'visible'}}><PaintedSeesaw x={0} y={0} s={0.95} /></svg>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: TEAL, lineHeight: 1.05}}>Next: putting a number on where an equilibrium sits</div>
				</div>
			</Enter>
		</>
	);
};

// ---------- 11. Key notes ----------
const NOTES = [
	'Activation energy is the minimum energy a collision needs to react. A catalyst gives the reaction an alternative pathway with a lower activation energy, and it is not used up.',
	'A catalyst lowers the activation energy of the forward and reverse reactions by the same amount (the heat of reaction is unchanged), so at a steady temperature both rates rise by the same factor.',
	'A catalyst makes a mixture settle sooner but does not change the mixture it settles at. Before the uncatalysed mixture has settled, a catalyst can give more product. Once both have settled, the amounts are the same.',
	'Added to a mixture already at equilibrium, a catalyst raises both rates by the same factor, so they stay equal. There is a moment of the change but no response, and nothing shifts.',
	'A shift needs the two rates to change by different factors. Adding a reacting substance, heating, or squeezing a gas with different gas counts does that. A catalyst, or squeezing a gas with equal gas counts, does not. The reaction that takes in heat has the higher activation energy, so heating helps it most.',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 84}}><HandText text="Key notes: what to write in your book" at={2} size={64} cps={40} /></div>
		<div style={{position: 'absolute', left: 120, top: 168, width: 1690}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 10} style={{display: 'flex', gap: 22, marginBottom: 14}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 12, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 30, fontWeight: 500, color: INK, lineHeight: 1.2}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={70} style={{position: 'absolute', left: 96, top: 800, width: 1730}}>
			<div style={{background: '#fffdf8', border: `4px solid ${TEAL}`, borderRadius: 22, padding: '10px 30px 12px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: INK_SOFT}}>Memory aid</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, color: INK, lineHeight: 1.05}}>A catalyst changes the <span style={{color: TEAL}}>speed</span>, not the destination.</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: TEAL, marginTop: 4}}>same temperature, closed system. Speed: forward and reverse together.</div>
			</div>
		</Enter>
		<Enter at={90} style={{position: 'absolute', left: 1180, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 40, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
	</>
);
void Seesaw;
