// Scenes 1 to 5: the hook (last time's worked-example board shrinks aside; the painted transformer, flipped so its
// many-turn winding is the primary, arrives with two painted multimeters reading 115 W in and 104 W out; it warms; the
// missing 11 W slice), efficiency and the three assumptions (large bars, the card's items marked "not quite"), hot
// copper (the windings close-up with I^2R per winding, a current slider, thicker wire, cooling), currents inside the
// iron (a core slice with flux dots following an AC cursor and an eddy loop that reverses with it, then heat), and
// laminations (the painted sheets, the slice splitting into insulated strips, a sheet slider on the simple model).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {Plate} from '../../physics/electromagnetism/bench';
import type {Place} from '../../physics/electromagnetism/bench';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {Lead, Slider} from '../../physics/electromagnetism/plates';
import {ACTrace, ANCHOR, HEAT, LAMINATIONS, Multimeter, SUBSTATION, XCore, XFMR, anchorAt, byHeight, meterPts, xGeom} from '../../physics/electromagnetism/transformer';
import {M6V13FinalFrame} from '../phys-y12-m6-v13/s3';
import {COPPER, HEAD, HEAD_SIZE, HOOK, SHEETS, SITE_Q2, cap, cue, mono} from './common';
import {AMBER, CoreSlice, FLUX, FinalBoard, Lbl, LossCard, NAVY, ORANGE, PowerBars, ROSE, Ring, Sb, Strip, XCircuit, fx, xcGeom} from './parts';

// ---------- 1. hook ----------
const PL: Place = {x: 60, y: 196, w: 440};
const M_IN: Place = {x: 80, y: 606, w: 170}, M_OUT: Place = {x: 330, y: 606, w: 170};
const HB = {cx: 1090, cy: 560, s: 360, t: 70, ax: 800, lx: 1380, np: 10, ns: 3};
const HBG = xcGeom(HB.cx, HB.cy, HB.s, HB.t, HB.ax, HB.lx);
const HBAR = {x: 1530, base: 820, h: 330, w: 130, gap: 70};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const ideal = cue(id, 'The ideal model said'), real = cue(id, 'Now try a real transformer'), inC = cue(id, 'One hundred and fifteen watts go in'), outC = cue(id, 'But only one hundred and four watts come out'), warmC = cue(id, 'And the transformer is warm'), where = cap(id, cue(id, 'So where did eleven watts go'));
	if (f < 1) return <M6V13FinalFrame />;
	const mv = prog(f, real, 20);
	const fr = HOOK.Pout / HOOK.Pin;
	const fout0 = kf(f, mono([[0, 0.9], [ideal, 0.9], [ideal + 14, 1]]));
	const fout = kf(f, mono([[0, 1], [outC, 1], [outC + 16, fr]]));
	const x2 = HBAR.x + HBAR.w + HBAR.gap, top = HBAR.base - HBAR.h, cut = HBAR.base - HBAR.h * fr;
	const slide = prog(f, real + 8, 22);
	const pl: Place = {...PL, x: PL.x - 480 * (1 - slide)};
	const mi = meterPts(M_IN), mo = meterPts(M_OUT);
	const p1 = anchorAt(XFMR, pl, ANCHOR.xfmr.r1, true), p2 = anchorAt(XFMR, pl, ANCHOR.xfmr.r2, true), s1 = anchorAt(XFMR, pl, ANCHOR.xfmr.l1, true), s2 = anchorAt(XFMR, pl, ANCHOR.xfmr.l2, true);
	const warm = prog(f, warmC, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{mv < 0.999 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - mv}}>
				<FrameSvg><FinalBoard phase={f * 3} warm={1} bars={{fout: fout0, vout: f < ideal ? '?' : '115 W', lout: <>P<Sb>out</Sb> = 115 W (ideal)</>}} /></FrameSvg>
				<Chip x={96} y={890} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: why are real transformers less efficient than the ideal model?</Chip>
			</div> : null}
			{mv > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: mv}}>
				<FrameSvg>
					<XCircuit {...HB} phase={f * 3} lit={1} heat={0.5 + 0.5 * warm} />
					<PowerBars x={HBAR.x} base={HBAR.base} h={HBAR.h} w={HBAR.w} gap={HBAR.gap} fin={1} fout={fout} vin={f >= inC ? '115 W' : undefined} vout={f >= outC ? '104 W' : '115 W'} size={34} />
					{f >= where ? <rect x={x2} y={top} width={HBAR.w} height={cut - top} fill="none" stroke={AMBER.stroke} strokeWidth={4} strokeDasharray="10 7" opacity={prog(f, where, 12)} /> : null}
					<Ring cx={x2 + HBAR.w / 2} cy={(top + cut) / 2} rx={110} ry={46} at={where + 6} color={AMBER.stroke} />
				</FrameSvg>
				<Lbl x={HB.cx - HBG.m} y={HB.cy - HBG.o - 24} color={NAVY.ink} size={32} anchor="middle">N<Sub>p</Sub> = 1200</Lbl>
				<Lbl x={HB.cx + HBG.m} y={HB.cy - HBG.o - 24} color={NAVY.ink} size={32} anchor="middle">N<Sub>s</Sub> = 60</Lbl>
				<Lbl x={HB.ax - 44} y={HB.cy + 12} color={ORANGE.ink} size={32} anchor="end">230 V ~</Lbl>
				<Lbl x={HB.lx} y={HB.cy + 92} color={ROSE.ink} size={32} anchor="middle">lamp</Lbl>
				<Lbl x={HB.cx} y={HB.cy + HBG.o + 44} color={INK} size={28} anchor="middle">not every turn drawn</Lbl>
				<Lbl x={x2 + HBAR.w / 2} y={top - 64} at={where} color={AMBER.ink} size={40} anchor="middle">{HOOK.lost} W ?</Lbl>
			</div> : null}
			<FrameSvg>
				{slide > 0.001 ? <g opacity={slide}>
					<Plate spec={XFMR} p={pl} flip />
					{warm > 0.01 ? <ellipse cx={pl.x + pl.w / 2} cy={pl.y + 190} rx={210} ry={150} fill={HEAT} opacity={0.22 * warm} /> : null}
					<Lead pts={[mi.v, [mi.v[0], 590], [p1[0] - 40, 590], [p1[0] - 40, p1[1]], p1]} width={3.5} color={ORANGE.stroke} />
					<Lead pts={[mi.com, [mi.com[0], 600], [p2[0] - 60, 600], [p2[0] - 60, p2[1]], p2]} width={3.5} />
					<Lead pts={[mo.v, [mo.v[0], 590], [s1[0] + 40, 590], [s1[0] + 40, s1[1]], s1]} width={3.5} color={ROSE.stroke} />
					<Lead pts={[mo.com, [mo.com[0], 600], [s2[0] + 60, 600], [s2[0] + 60, s2[1]], s2]} width={3.5} />
					<Multimeter p={M_IN} text={f >= inC ? `${HOOK.Pin} W` : ''} size={38} color={ORANGE.ink} />
					<Multimeter p={M_OUT} text={f >= outC ? `${HOOK.Pout} W` : ''} size={38} color={ROSE.ink} />
				</g> : null}
			</FrameSvg>
			<HandTag x={60} y={176} text="real transformer, same supply" at={real + 20} size={34} color={NAVY.ink} />
			<Lbl x={M_IN.x + M_IN.w / 2} y={928} at={inC} color={ORANGE.ink} size={30} anchor="middle">power in</Lbl>
			<Lbl x={M_OUT.x + M_OUT.w / 2} y={928} at={outC} color={ROSE.ink} size={30} anchor="middle">power out</Lbl>
			<HandTag x={560} y={700} text="example values" at={inC + 10} size={30} color={NAVY.ink} />
			<Chip x={560} y={780} at={warmC} size={30} w={280} color={HEAT} border={HEAT}>temperature: warm</Chip>
			<HandTag x={880} y={860} text="warm = lost energy" at={warmC + 10} size={34} color={HEAT} />
		</>
	);
};

// ---------- 2. efficiency, and three assumptions ----------
const EB = {x: 520, base: 840, h: 460, w: 200, gap: 150};
export const S02: React.FC = () => {
	const id = 'efficiency';
	const f = useCurrentFrame();
	const def = cue(id, 'Efficiency is the useful power out'), cent = cue(id, 'about ninety per cent'), remember = cue(id, 'Remember the three assumptions'), a1 = cue(id, 'All the flux links both coils'), a2 = cue(id, 'the windings have no resistance'), a3 = cue(id, 'and no energy is lost in the core'), breaks = cue(id, 'A real transformer breaks each one'), little = cue(id, 'just a little'), how = cap(id, cue(id, "Let's find out how"));
	const fr = HOOK.Pout / HOOK.Pin, x2 = EB.x + EB.w + EB.gap, top = EB.base - EB.h, cut = EB.base - EB.h * fr;
	const hi = (a: number, b: number) => (f >= a && f < b ? 1 : 0);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Plate spec={XFMR} p={{x: 60, y: 200, w: 300}} flip />
				<PowerBars x={EB.x} base={EB.base} h={EB.h} w={EB.w} gap={EB.gap} fin={1} fout={fr} vin="115 W" vout="104 W" size={36} />
				<rect x={x2} y={top} width={EB.w} height={cut - top} fill="#f3d9c8" stroke={AMBER.stroke} strokeWidth={4} strokeDasharray="10 7" />
				<LossCard x={1290} y={330} w={590} size={28} notQuite={[prog(f, little, 10), prog(f, little + 14, 10), prog(f, little + 28, 10)]} cross={[prog(f, little, 10), prog(f, little + 14, 10), prog(f, little + 28, 10)]} opacity={prog(f, remember, 14)} hi={[hi(a1, a2), hi(a2, a3), hi(a3, breaks)]} />
			</FrameSvg>
			<Lbl x={210} y={500} color={NAVY.ink} size={30} anchor="middle">real transformer</Lbl>
			<Lbl x={x2 + EB.w + 16} y={top + 30} color={AMBER.ink} size={34}>11 W lost</Lbl>
			<Strip x={520} y={166} at={def} size={44} border={INK}>η = <span style={{color: AMBER.ink}}>P<Sub>out</Sub></span> / P<Sub>in</Sub> × 100%</Strip>
			<Row at={cent - 30} size={52} style={{position: 'absolute', left: 520, top: 252}}>η = 104 / 115 × 100% ≈ <AnswerBox at={cent}><span style={{whiteSpace: 'nowrap'}}>{fx(HOOK.pct, 0)}%</span></AnswerBox></Row>
			<HandTag x={1260} y={296} text="not 100%" at={cent + 14} size={38} color={AMBER.ink} />
			<Row at={how} size={34} style={{position: 'absolute', left: 96, top: 900}}>Check: 96% of 20 MW = {fx(SITE_Q2.out, 1)} MW out; {fx(SITE_Q2.lost, 1)} MW lost</Row>
		</>
	);
};

// ---------- 3. hot copper ----------
const CC = {cx: 560, cy: 610, s: 540, t: 120};
const CG = xGeom(CC.cx, CC.cy, CC.s, CC.t);
export const S03: React.FC = () => {
	const id = 'copper-heating';
	const f = useCurrentFrame();
	const start = cue(id, 'Start with the windings'), res = cue(id, 'real wire has resistance'), heats = cue(id, 'it heats it'), i2r = cue(id, 'the heating power is I squared R'), dbl = cue(id, 'Double the current'), four = cue(id, 'the heating goes up four times'), surprise = cue(id, "Here's the surprise"), secC = cue(id, 'The secondary carries ten amps'), five = cue(id, 'it loses five point zero watts'), priC = cue(id, 'The primary has much more resistance'), one = cue(id, 'it loses just one point zero watt'), sq = cue(id, 'Because the current is squared'), far = cue(id, 'even with far less resistance'), thick = cue(id, 'So designers give it thicker wire'), oil = cue(id, 'Big transformers also use oil'), away = cap(id, cue(id, 'to carry the heat away'));
	const I = kf(f, mono([[0, 5], [four, 5], [four + 30, 10]]));
	const P = I * I * COPPER.Rs;
	const glow = prog(f, heats, 16);
	const hs = 0.35 * glow + 0.65 * prog(f, five, 16) - 0.3 * prog(f, thick + 20, 20);
	const hp = 0.35 * glow - 0.1 * prog(f, one, 16);
	const sw = 9 + 10 * prog(f, thick, 18);
	const sub = byHeight(SUBSTATION, 1540, 670, 180);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<XCore {...CC} np={10} ns={3} phase={f * 3} pColor={ORANGE.stroke} sColor={ROSE.stroke} sWidth={sw} heatP={hp} heatS={hs} heatCore={0} />
				<LossCard x={1300} y={150} w={570} size={28} cross={[0, prog(f, start, 12), 0]} note={[0, prog(f, start + 10, 12), 0]} fix={[0, prog(f, thick, 12), 0]} />
				<Slider x={960} y={730} w={420} value={(I - 5) / 5} color={ROSE.stroke} label="secondary current" ticks={[[0, '5.0 A'], [1, '10 A']]} size={28} opacity={prog(f, dbl, 12) * (1 - prog(f, surprise, 12))} />
				{f >= oil ? <Plate spec={SUBSTATION} p={sub} opacity={prog(f, oil, 14)} /> : null}
				{f >= away ? <Arrow2 from={[sub.x + sub.w * 0.5, sub.y + 30]} to={[sub.x + sub.w * 0.5, sub.y - 40]} color={AMBER.stroke} width={8} head={24} opacity={prog(f, away, 12)} /> : null}
			</FrameSvg>
			<Lbl x={CG.lx} y={CC.cy - CG.o - 26} color={ORANGE.ink} size={30} anchor="middle">primary{f >= priC ? ': 4.0 Ω, 0.50 A' : ''}</Lbl>
			<Lbl x={CG.rx} y={CC.cy - CG.o - 26} color={ROSE.ink} size={30} anchor="middle">secondary{f >= secC ? ': 0.050 Ω, 10 A' : ''}</Lbl>
			<HandTag x={CC.cx} y={CC.cy + CG.o + 50} text="copper wire has resistance" at={res} size={32} color={INK} anchor="middle" />
			<Strip x={960} y={440} at={i2r} size={40} border={INK}>P = I<sup>2</sup>R (heating in a resistance)</Strip>
			<Readouts x={960} y={520} w={520} size={44} at={dbl} out={surprise} rows={[{label: 'I', value: fx(I, I < 9.95 ? 1 : 0), unit: 'A', color: ROSE.ink}, {label: <>I<sup>2</sup>R (0.050 Ω)</>, value: fx(P, P < 4.99 ? 2 : 1), unit: 'W', color: ROSE.ink}]} />
			<HandTag x={1420} y={790} text="× 2 current → × 4 heat" at={four + 30} out={surprise} size={34} color={ROSE.ink} />
			<Row at={secC} size={44} style={{position: 'absolute', left: 960, top: 520}}><span style={{color: ROSE.ink}}>secondary:</span> 10<sup>2</sup> × 0.050 = <AnswerBox at={five}><span style={{whiteSpace: 'nowrap'}}>{fx(COPPER.Ps, 1)} W</span></AnswerBox></Row>
			<HandTag x={1560} y={636} text="example values" at={secC + 10} size={30} color={NAVY.ink} />
			<Row at={priC} size={44} style={{position: 'absolute', left: 960, top: 596}}><span style={{color: ORANGE.ink}}>primary:</span> 0.50<sup>2</sup> × 4.0 = <AnswerBox at={one}><span style={{whiteSpace: 'nowrap'}}>{fx(COPPER.Pp, 1)} W</span></AnswerBox></Row>
			<CrossedChip x={960} y={690} at={sq} crossAt={far} size={30} w={560} caption="current counts twice">bigger R, so the primary loses more</CrossedChip>
			<HandTag x={960} y={835} text="fix: thicker wire on the high-current side" at={thick + 8} size={32} color={NAVY.ink} />
			<HandTag x={1300} y={905} text="cooling: oil, fins (removes the heat)" at={away} size={30} color={AMBER.ink} anchor="middle" />
		</>
	);
};

// ---------- 4. currents inside the iron ----------
const SL = {x: 760, y: 300, w: 560, h: 460};
const ac = (f: number) => Math.sin((2 * Math.PI * f) / 110), acd = (f: number) => Math.cos((2 * Math.PI * f) / 110);
export const S04: React.FC = () => {
	const id = 'eddy-currents';
	const f = useCurrentFrame();
	const next = cue(id, 'Next, the core'), metal = cue(id, 'Iron is a metal'), runs = cue(id, 'it runs through the iron itself'), loop = cue(id, 'Picture a loop inside the iron'), emf = cue(id, "there's an emf around it"), swirls = cue(id, 'a current swirls round inside the core'), called = cue(id, 'These are called eddy currents'), lenz = cue(id, "By Lenz's law they oppose the change"), heat = cap(id, cue(id, 'and they just heat the iron'));
	const g = xGeom(330, 560, 380, 90);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<XCore cx={330} cy={560} s={380} t={90} np={6} ns={2} phase={f * 3} pColor={ORANGE.stroke} sColor={ROSE.stroke} />
				<line x1={g.rx - 70} y1={560} x2={g.rx + 70} y2={560} stroke={INK} strokeWidth={5} strokeDasharray="12 8" opacity={prog(f, next, 12)} />
				<Arrow2 from={[g.rx + 60, 540]} to={[SL.x - 20, 470]} color={INK} width={5} head={20} opacity={prog(f, next + 10, 12)} />
				<CoreSlice {...SL} flux={f >= runs ? ac(f) : 0} dots={prog(f, runs, 12)} loop={prog(f, loop, 12)} eddy={f >= swirls ? acd(f) * prog(f, swirls, 12) : 0} heat={prog(f, heat, 24)} opacity={prog(f, next + 8, 16)} />
				<ACTrace x={SL.x} y={790} w={SL.w} h={90} cycles={2} now={f >= runs ? ((f / 110) % 2) / 2 : undefined} opacity={prog(f, runs, 12)} />
				<Ring cx={SL.x + SL.w / 2} cy={SL.y + SL.h / 2} rx={200} ry={160} at={heat + 10} color={HEAT} />
				<LossCard x={1320} y={150} w={560} size={28} cross={[0, 1, prog(f, next, 12)]} note={[0, 1, prog(f, next + 10, 12)]} />
			</FrameSvg>
			<Lbl x={g.rx} y={500} at={next} color={INK} size={28} anchor="middle">slice</Lbl>
			<Lbl x={SL.x + SL.w / 2} y={SL.y - 18} at={next + 10} color={INK} size={30} anchor="middle">a slice of the core, across the flux</Lbl>
			<Lbl x={SL.x - 12} y={845} at={runs} color={FLUX} size={28} anchor="end">flux</Lbl>
			<Chip x={1360} y={460} at={metal} size={30} w={300}>iron conducts</Chip>
			<HandTag x={1360} y={570} text="flux runs through the iron" at={runs} size={32} color={FLUX} />
			<Lbl x={1360} y={640} at={emf} color={ROSE.ink} size={34}>ε = −N ΔΦ/Δt (here N = 1)</Lbl>
			<Lbl x={1360} y={710} at={called} color={ROSE.ink} size={44}>eddy currents</Lbl>
			<HandTag x={1360} y={770} text="swirls inside the iron" at={called + 8} size={32} color={ROSE.ink} />
			<HandTag x={1360} y={830} text="Lenz: opposes the change" at={lenz} size={32} color={ROSE.ink} />
			<HandTag x={SL.x + SL.w / 2} y={SL.y + SL.h + 2} text="I²R in the iron" at={heat + 6} size={36} color={HEAT} anchor="middle" />
		</>
	);
};

// ---------- 5. laminations ----------
const LS = {x: 760, y: 270, w: 520, h: 420};
const LP = byHeight(LAMINATIONS, 60, 196, 300);
export const S05: React.FC = () => {
	const id = 'laminations';
	const f = useCurrentFrame();
	const clever = cue(id, 'The fix is clever'), sheets = cue(id, 'build the core from thin sheets of iron'), coated = cue(id, 'each one coated with insulation'), along = cue(id, 'The sheets lie along the flux'), through = cue(id, 'so the field still runs through'), trapped = cue(id, 'trapped inside one thin sheet'), thin = cue(id, 'A thin loop goes round much less flux'), narrow = cue(id, 'its narrow path has more resistance'), simple = cue(id, 'In a simple model'), ten = cue(id, 'sheets ten times thinner'), hundred = cue(id, 'about a hundred times'), why = cap(id, cue(id, "That's why a real transformer core is laminated"));
	const step = f < simple ? -1 : f < simple + 22 ? 0 : f < simple + 44 ? 1 : f < ten ? 2 : 3;
	const n = step < 0 ? (f >= sheets ? 10 : 1) : SHEETS[step].n;
	const pct = step < 0 ? 100 : SHEETS[step].pct;
	const heat = f < simple ? 0 : pct / 100;
	const sliderV = step < 0 ? 0 : [0, 1 / 3, 2 / 3, 1][step];
	const sideO = prog(f, through, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Plate spec={LAMINATIONS} p={LP} />
				<CoreSlice {...LS} sheets={n} split={step < 0 ? prog(f, sheets, 20) : 1} flux={ac(f)} eddy={f >= trapped || step >= 0 ? acd(f) : 0.9 * acd(f) * (1 - prog(f, sheets, 10))} heat={heat} enlarge={f >= narrow && step < 0 ? 4 : -1} />
				<g opacity={sideO}>
					<rect x={60} y={620} width={560} height={220} rx={10} fill="#b9bdc2" stroke="#5b6168" strokeWidth={4} />
					{Array.from({length: 9}, (_, k) => <line key={k} x1={60} y1={620 + 22 * (k + 1)} x2={620} y2={620 + 22 * (k + 1)} stroke="#efe0b4" strokeWidth={5} />)}
					{[0, 1, 2].map(k => <Arrow2 key={k} from={[90, 665 + k * 66]} to={[590, 665 + k * 66]} color={FLUX} width={6} head={20} />)}
				</g>
				<Slider x={LS.x} y={790} w={LS.w} value={sliderV} color={NAVY.stroke} label="sheets in the same block" ticks={[[0, '1'], [1 / 3, '2'], [2 / 3, '5'], [1, '10']]} size={28} opacity={prog(f, simple, 12)} />
				{f >= why ? <Arrow2 from={[LS.x - 10, LS.y + 40]} to={[LP.x + LP.w - 40, LP.y + 160]} color={NAVY.stroke} width={7} head={24} opacity={prog(f, why, 12)} /> : null}
			</FrameSvg>
			<HandTag x={80} y={540} text="real core sheets" at={clever} size={34} color={NAVY.ink} />
			<Lbl x={LS.x + LS.w / 2} y={LS.y - 18} at={-30} color={INK} size={30} anchor="middle">core slice, across the flux</Lbl>
			<HandTag x={LS.x + LS.w + 20} y={LS.y + 40} text="insulation" at={coated} size={32} color={'#a07a1c'} />
			<HandTag x={80} y={880} text="sheets lie along the flux (side view)" at={along + 4} size={32} color={FLUX} />
			<Readouts x={1340} y={370} w={520} size={44} at={simple} rows={[{label: 'eddy heating (simple model)', value: `${fx(pct, 0)}%`, color: HEAT}]} />
			<HandTag x={1340} y={490} text="less flux inside → smaller ε" at={thin} size={32} color={ROSE.ink} />
			<HandTag x={1340} y={540} text="narrow path → more R" at={narrow} size={32} color={ROSE.ink} />
			<Row at={hundred} size={36} style={{position: 'absolute', left: 1340, top: 600, width: 520, whiteSpace: 'normal'}}><AnswerBox at={hundred + 6}><span style={{whiteSpace: 'normal'}}>10 × thinner → about 1/100 (simple model)</span></AnswerBox></Row>
			<Lbl x={LS.x + LS.w / 2} y={LS.y - 64} at={why} color={NAVY.ink} size={40} anchor="middle">laminated core</Lbl>
		</>
	);
};
