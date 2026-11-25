// Scenes 1 to 6: the hook (last time's thrusting spacecraft as an idealised probe; Newton's straight line passes c in
// under a year, the real speed bends below c), force adds momentum (equal amber blocks on a momentum bar), relativistic
// momentum (the data-sheet form, a steel-ball collision inset in two frames, the gamma inset), momentum against speed
// (classical line, relativistic curve, the c asymptote), the live thrust stage (equal momentum steps, shrinking speed
// steps, a speed gauge that creeps to c) and the probe's numbers (the table in Earth-frame time).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, Row, Sub} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {STEEL_BALL, Ship} from '../../physics/light/frames';
import {ClockDial, CurvePlot, MomentumBar, SpeedGauge, outlineExtent, plotX, plotY} from '../../physics/light/relativity';
import type {PlotBox} from '../../physics/light/relativity';
import {HANDOFF14, HandoffBoard14, M7V14FinalFrame} from '../phys-y12-m7-v14/s3';
import {A, CLASSICAL2, F, HEAD, HEAD_SIZE, K2, M0, STEPS, TABLE, T_C, T_C_DAYS, V2, cap, cue, g, gOfK, vOfK} from './common';
import {AMBER, GREY, INK, Lbl, ORANGE, RED, SLATE, Strip, TEAL, VArrow, VIOLET, fx, pOfB, sci} from './parts';

/** The probe (spacecraft plate) with the exhaust layer and an orange force arrow at its tail. */
export const Probe: React.FC<{p: Place; thrust?: number; force?: number}> = ({p, thrust = 1, force = 0}) => {
	const ex = outlineExtent(p, 1);
	const y = (ex.top + ex.bot) / 2;
	return (
		<g>
			<Ship p={p} thrust={thrust} />
			{force > 0.001 ? <g opacity={force}><VArrow a={[ex.x0 - 10, y + 70]} b={[ex.x0 + 170, y + 70]} color={ORANGE.stroke} width={8} /></g> : null}
		</g>
	);
};

// ---------- 1. hook ----------
const P1: Place = {x: 96, y: 240, w: 560};
const VT: PlotBox = {x: 1000, y: 260, w: 760, h: 440, yMax: 2.3};
const tx = (t: number) => VT.x + (t / (2.2 * 3.156e7)) * VT.w;
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const kg = cue(id, 'A thousand kilogram probe'), th = cue(id, 'a steady thrust of ten thousand newtons'), ten = cue(id, 'ten metres per second, every second'), ua = cue(id, 'under a year'), ec = cue(id, "timed on Earth's clocks"), pred = cue(id, 'prediction'), nine = cue(id, 'about zero point nine c'), hl = cue(id, 'however long you push'), sp = cap(id, cue(id, 'speed'));
	if (f < 1) return <M7V14FinalFrame />;
	const m = prog(f, 2, 24);
	const HS = HANDOFF14.ship;
	const p: Place = {x: HS.x + (P1.x - HS.x) * m, y: HS.y + (P1.y - HS.y) * m, w: HS.w + (P1.w - HS.w) * m};
	const cl = Math.min(2.2 * 3.156e7, kf(f, [[ua, 0], [ua + 50, 2.2 * 3.156e7]], false));
	const rel = kf(f, [[nine, 0], [nine + 50, 2.2 * 3.156e7]], false);
	const path = (tMax: number, fn: (t: number) => number) => Array.from({length: 80}, (_, i) => { const t = (tMax * i) / 79; return `${i ? 'L' : 'M'}${tx(t).toFixed(1)},${plotY(VT, Math.min(fn(t), VT.yMax)).toFixed(1)}`; }).join(' ');
	const tickAt = Math.max(nine, pred + 92);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 2, 16)}}><HandoffBoard14 f={0} final heading={false} chip={false} /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Probe p={p} force={prog(f, th, 12)} />
				<g opacity={prog(f, 30, 16)}>
					<line x1={VT.x} y1={VT.y + VT.h} x2={VT.x + VT.w + 20} y2={VT.y + VT.h} stroke={INK} strokeWidth={4} />
					<line x1={VT.x} y1={VT.y + VT.h} x2={VT.x} y2={VT.y - 20} stroke={INK} strokeWidth={4} />
					<line x1={VT.x} y1={plotY(VT, 1)} x2={VT.x + VT.w} y2={plotY(VT, 1)} stroke={RED.stroke} strokeWidth={4} strokeDasharray="12 9" />
					{[1, 2].map(k => <g key={k}><line x1={VT.x - 10} y1={plotY(VT, k)} x2={VT.x} y2={plotY(VT, k)} stroke={INK} strokeWidth={3} /><text x={VT.x - 16} y={plotY(VT, k) + 10} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 28, fill: INK}}>{`${k}c`}</text></g>)}
					{[1, 2].map(y => <g key={y}><line x1={tx(y * 3.156e7)} y1={VT.y + VT.h} x2={tx(y * 3.156e7)} y2={VT.y + VT.h + 12} stroke={INK} strokeWidth={3} /><text x={tx(y * 3.156e7)} y={VT.y + VT.h + 42} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 28, fill: INK}}>{`${y} yr`}</text></g>)}
					<path d={path(cl, t => (A * t) / 3.0e8)} fill="none" stroke={GREY.stroke} strokeWidth={5} strokeDasharray="14 10" />
					{f >= nine ? <path d={path(rel, t => vOfK((F * t) / (M0 * 3.0e8)))} fill="none" stroke={TEAL.stroke} strokeWidth={6} /> : null}
				</g>
				<ClockDial cx={VT.x + VT.w - 250} cy={VT.y + VT.h + 86} r={24} t={f / 30} color={INK} opacity={prog(f, ec, 12)} />
				<Countdown start={pred} end={pred + 90} x={1700} y={840} r={40} />
				{f >= tickAt ? <Mark x={720} y={846} at={tickAt} kind="tick" color={INK} size={34} /> : null}
			</FrameSvg>
			<Chip x={96} y={470} at={kg} size={34} color={INK}>{`m₀ = ${M0} kg`}</Chip>
			<HandTag x={360} y={496} text="idealised: ignore fuel use" at={kg + 10} size={30} color={GREY.ink} />
			<Lbl x={P1.x + 330} y={P1.y + 172} at={th} color={ORANGE.ink} size={32}>{`F = ${sci(F, 1)} N`}</Lbl>
			<Strip x={96} y={560} at={ten} size={38}>{`a = F/m = ${fx(A)} m s⁻²`}</Strip>
			<Lbl x={VT.x} y={VT.y - 40} at={30} color={INK} size={30}>v</Lbl>
			<Lbl x={VT.x + VT.w} y={VT.y + VT.h + 88} at={30} color={INK} size={28} anchor="end">t (Earth frame)</Lbl>
			<Lbl x={tx(T_C) - 20} y={plotY(VT, 1) - 30} at={ua + 30} color={GREY.ink} size={28} anchor="end">{`classical: c at ${sci(T_C, 1)} s ≈ ${fx(T_C_DAYS)} days`}</Lbl>
			<Chip x={96} y={820} at={pred} size={32} color={INK}>{`${fx(CLASSICAL2, 1)}c`}</Chip>
			<Chip x={260} y={820} at={pred + 4} size={32} color={INK}>exactly c</Chip>
			<Chip x={490} y={820} at={pred + 8} size={32} color={INK}>about 0.9c</Chip>
			<HandTag x={0} y={0} at={tickAt} color={SLATE.stroke} marks={[{kind: 'cross', cx: 150, cy: 846, size: 46}]} />
			<Lbl x={tx(T_C * K2)} y={plotY(VT, V2) + 80} at={nine + 30} color={TEAL.ink} size={36} anchor="end">{`${fx(V2, 2)}c at 2 years (Earth frame)`}</Lbl>
			<Lbl x={VT.x + VT.w + 10} y={plotY(VT, 1)} at={nine} color={RED.ink} size={32}>c</Lbl>
			<HandTag x={tx(T_C) + 60} y={plotY(VT, 1) - 110} text="never touches" at={hl} size={36} color={RED.ink} marks={[{kind: 'arrow', from: [tx(T_C) + 120, plotY(VT, 1) - 80], to: [VT.x + VT.w - 40, plotY(VT, 1) + 14], bend: 0.1}]} />
			<HandTag x={0} y={0} at={sp} color={INK} marks={[{kind: 'underline', x1: 970, x2: 1185, y: 152}]} />
		</>
	);
};

// ---------- 2. force adds momentum ----------
const P2: Place = {x: 96, y: 260, w: 900};
const BAR = {x: 1300, base: 820, w: 110, bh: 110};
export const S02: React.FC = () => {
	const id = 'force-adds-momentum';
	const f = useCurrentFrame();
	const mv = cue(id, 'momentum is mass times velocity'), fd = cue(id, 'F equals delta p over delta t'), es = cue(id, 'each second'), li = cap(id, cue(id, 'light'));
	const n = f < es ? 0 : Math.min(3, Math.floor((f - es) / 25) + 1);
	const grow = f < es ? 0 : Math.min(3, n - 1 + prog(f, es + (n - 1) * 25, 14));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Probe p={P2} force={1} />
				<rect x={BAR.x - 20} y={BAR.base - 3 * BAR.bh - 30} width={BAR.w + 40} height={3 * BAR.bh + 30} rx={12} fill="#fffdf8" stroke={AMBER.stroke} strokeWidth={3} strokeDasharray="12 8" />
				<MomentumBar x={BAR.x} base={BAR.base} w={BAR.w} bh={BAR.bh} n={grow} color={AMBER.stroke} label="momentum p" size={30} />
				<ClockDial cx={BAR.x - 160} cy={BAR.base - 60} r={44} t={f / 30} color={INK} />
			</FrameSvg>
			<Lbl x={BAR.x - 230} y={BAR.base + 20} at={0} color={INK} size={28}>1 s per block</Lbl>
			<Lbl x={P2.x + 420} y={P2.y + 330} at={0} color={ORANGE.ink} size={32}>{`F = ${sci(F, 1)} N`}</Lbl>
			<Chip x={96} y={680} at={mv} size={36} color={INK}>p = mv (Year 11)</Chip>
			<Strip x={96} y={770} at={fd} size={48}>F = Δp/Δt</Strip>
			{[1, 2, 3].map(i => <Lbl key={i} x={BAR.x + BAR.w + 24} y={BAR.base - (i - 0.5) * BAR.bh} at={es + (i - 1) * 25} color={AMBER.ink} size={30}>{`+${sci(F, 1)} kg m s⁻¹`}</Lbl>)}
			<HandTag x={BAR.x - 30} y={BAR.base - 3 * BAR.bh - 50} text="same Δp each second" at={es + 60} size={34} color={AMBER.ink} anchor="end" marks={[{kind: 'brace', x: BAR.x - 14, y1: BAR.base - BAR.bh, y2: BAR.base, facing: 'left'}]} />
			<HandTag x={560} y={800} text="Δp = FΔt: true at any speed" at={li} size={36} color={ORANGE.ink} />
		</>
	);
};

// ---------- 3. relativistic momentum ----------
export const S03: React.FC = () => {
	const id = 'relativistic-momentum';
	const f = useCurrentFrame();
	const cons = cue(id, 'conserved in every inertial frame'), hb = cue(id, 'it has to be p equals'), sq = cue(id, 'over c squared'), gm = cue(id, "That's gamma, times m zero v"), rm = cue(id, 'the rest mass'), jm = cue(id, 'this is just m v'), hu = cap(id, cue(id, 'huge'));
	const IB: PlotBox = {x: 1380, y: 560, w: 380, h: 260, yMax: 12};
	const mk = kf(f, [[hu, 0.6], [hu + 40, 0.99]]);
	const c1 = (f - cons) / 30;
	const bx = (k: number) => 1180 + (k ? 1 : -1) * Math.max(16, 120 - 70 * ((c1 % 2) < 1 ? c1 % 2 : 2 - (c1 % 2)));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Probe p={{x: 96, y: 180, w: 420}} force={1} />
				<MomentumBar x={620} base={380} w={60} bh={60} n={3} color={AMBER.stroke} />
				{f >= cons ? <g opacity={prog(f, cons, 12)}>
					<rect x={960} y={190} width={860} height={200} rx={14} fill="#fffdf8" stroke={GREY.stroke} strokeWidth={3} />
					<LPlate spec={STEEL_BALL} p={{x: bx(0) - 20, y: 270, w: 40}} />
					<LPlate spec={STEEL_BALL} p={{x: bx(1) - 20, y: 270, w: 40}} />
					<LPlate spec={STEEL_BALL} p={{x: bx(0) + 400 - 20, y: 270, w: 40}} />
					<LPlate spec={STEEL_BALL} p={{x: bx(1) + 400 - 20, y: 270, w: 40}} />
				</g> : null}
				<rect x={80} y={450} width={1240} height={420} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
				<CurvePlot b={IB} f={g} color={VIOLET.stroke} asym={1} marker={mk} yTicks={[1, 12]} xTicks={[0, 1]} xLabel="v/c" yLabel="γ" size={26} opacity={prog(f, hu, 12)} />
			</FrameSvg>
			<Lbl x={990} y={226} at={cons} color={TEAL.ink} size={26}>frame 1</Lbl>
			<Lbl x={1390} y={226} at={cons} color={INK} size={26}>frame 2</Lbl>
			<Lbl x={960} y={420} at={cons + 10} color={INK} size={28}>momentum conservation in every frame (postulate 1)</Lbl>
			<div style={{position: 'absolute', left: 96, top: 470, display: 'flex', flexDirection: 'column', gap: 16, width: 1200}}>
				<Row at={0} size={40}><span style={{color: GREY.ink}}>Year 11: p = mv (fails near c)</span></Row>
				<Row at={hb} size={52}><AnswerBox at={sq}><span>p<Sub>v</Sub> = m₀v / √(1 − v²/c²)</span></AnswerBox><span style={{color: VIOLET.ink, opacity: prog(f, gm, 12)}}>{'  = γm₀v'}</span></Row>
			</div>
			<HandTag x={96} y={660} text="a product, not a split" at={gm + 10} size={34} color={VIOLET.ink} />
			<Chip x={96} y={710} at={rm} size={32} color={INK}>m₀: rest mass (measured at rest)</Chip>
			<Chip x={96} y={790} at={jm} size={32} color={INK}>low speed: γ ≈ 1 → p ≈ m₀v</Chip>
			<HandTag x={1380} y={520} text="gamma gets huge near c" at={hu + 6} size={32} color={VIOLET.ink} />
			<Lbl x={1000} y={500} at={0} color={GREY.ink} size={26}>data sheet form</Lbl>
		</>
	);
};

// ---------- 4. momentum against speed ----------
const PV: PlotBox = {x: 240, y: 230, w: 1160, h: 620, yMax: 10};
export const S04: React.FC = () => {
	const id = 'p-v-graph';
	const f = useCurrentFrame();
	const cl = cue(id, 'The classical line'), rc = cue(id, 'The relativistic curve starts on that line'), bu = cue(id, 'bends upwards'), cw = cue(id, 'climbs without limit'), vc = cap(id, cue(id, 'v equals c'));
	const draw = kf(f, [[rc, 0], [rc + 30, 0.4], [bu, 0.4], [bu + 30, 0.85], [cw, 0.85], [cw + 30, 1]]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
								<Probe p={{x: 1500, y: 250, w: 320}} force={1} />
				<CurvePlot b={PV} f={pOfB} color={AMBER.stroke} draw={draw} betaMax={0.995} classical={b => b} classicalDraw={prog(f, cl, 30)} asym={prog(f, vc, 20)} xTicks={[0, 0.5, 1]} yTicks={[0, 1, 5, 10]} xLabel="v/c" yLabel="p / (m₀c)" size={30} grid={{dx: 0.1, dy: 1}} />
			</FrameSvg>
			<Lbl x={1500} y={450} at={0} color={INK} size={30}>our probe:</Lbl>
			<Lbl x={1500} y={500} at={0} color={INK} size={30}>how does p grow</Lbl>
			<Lbl x={1500} y={545} at={0} color={INK} size={30}>as v rises?</Lbl>
			<Lbl x={plotX(PV, 1) - 20} y={plotY(PV, 1) - 20} at={cl + 20} color={GREY.ink} size={30} anchor="end">classical mv: 1 at v = c</Lbl>
			<Lbl x={plotX(PV, 0.5)} y={plotY(PV, 2.5)} at={bu + 10} color={AMBER.ink} size={32}>relativistic: γm₀v</Lbl>
			<HandTag x={plotX(PV, 1) + 30} y={PV.y + 40} text="approached, never reached" at={vc + 6} size={34} color={RED.ink} />
			<HandTag x={0} y={0} at={bu + 20} color={AMBER.stroke} marks={[{kind: 'circle', cx: plotX(PV, 0.7), cy: plotY(PV, pOfB(0.7)), rx: 70, ry: 50}]} />
			<Lbl x={plotX(PV, 1) + 16} y={PV.y + PV.h + 40} at={vc} color={RED.ink} size={30}>v = c</Lbl>
		</>
	);
};

// ---------- 5. why there's a speed limit; 6. the probe's numbers ----------
const PS: Place = {x: 96, y: 190, w: 520};
const PB = {x: 150, base: 880, w: 80, bh: 48};
const GA = {cx: 470, cy: 720, r: 150};
const PL5: PlotBox = {x: 900, y: 290, w: 760, h: 520, yMax: 3};
/** Thrust-clock board: probe, bar of k blocks (units of 0.5 m₀c are 1 block when unit = 0.5), gauge at v(k). */
const Stage: React.FC<{f: number; k: number; blocks: number; tremble?: number}> = ({f, k, blocks, tremble = 0}) => (
	<g>
		<Probe p={PS} force={1} />
		<MomentumBar x={PB.x} base={PB.base} w={PB.w} bh={PB.bh} n={blocks} color={AMBER.stroke} label="p" size={30} />
		<SpeedGauge cx={GA.cx} cy={GA.cy} r={GA.r} beta={vOfK(k)} color={TEAL.stroke} label="v" tremble={tremble * Math.sin(f / 2)} />
	</g>
);
export const S05: React.FC = () => {
	const id = 'speed-limit';
	const f = useCurrentFrame();
	const ad = cue(id, 'adding momentum at a steady rate'), eb = cue(id, 'each extra bit of momentum buys less and less speed'), nc = cue(id, 'near c the curve climbs almost straight up'), inf = cue(id, 'infinite'), nf = cue(id, 'No finite force, acting for a finite time'), it = cap(id, cue(id, 'it'));
	const k = kf(f, [[ad, 0], [ad + 120, 2]], false);
	const sh = prog(f, eb, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage f={f} k={k} blocks={k} />
				<CurvePlot b={PL5} f={pOfB} color={AMBER.stroke} betaMax={0.995} classical={b => b} classicalDraw={1} asym={1} marker={vOfK(k)} xTicks={[0, 0.5, 1]} yTicks={[0, 1, 2, 3]} xLabel="v/c" yLabel="p / (m₀c)" size={28} />
				{sh > 0.001 ? STEPS.map((s, i) => {
					const b = vOfK(s), b0 = i ? vOfK(STEPS[i - 1]) : 0;
					return <g key={s} opacity={sh}>
						<line x1={PL5.x} y1={plotY(PL5, s)} x2={plotX(PL5, b)} y2={plotY(PL5, s)} stroke={AMBER.stroke} strokeWidth={2.5} strokeDasharray="8 6" />
						<line x1={plotX(PL5, b)} y1={plotY(PL5, s)} x2={plotX(PL5, b)} y2={PL5.y + PL5.h} stroke={TEAL.stroke} strokeWidth={2.5} strokeDasharray="8 6" />
						<line x1={plotX(PL5, b0) + 4} y1={PL5.y + PL5.h + 60 + i * 0} x2={plotX(PL5, b) - 4} y2={PL5.y + PL5.h + 60} stroke={TEAL.stroke} strokeWidth={8} strokeLinecap="round" />
					</g>;
				}) : null}
			</FrameSvg>
			<Lbl x={900} y={210} at={ad} color={INK} size={36}>{`t = ${sci(k * 3.0e7, 1)} s (Earth frame)`}</Lbl>
			<Lbl x={1380} y={210} at={ad} color={AMBER.ink} size={36}>{`p = ${fx(k, 1)} m₀c`}</Lbl>
			<Lbl x={1630} y={210} at={ad} color={VIOLET.ink} size={36}>{`γ = ${fx(gOfK(k), 2)}`}</Lbl>
			<Lbl x={GA.cx} y={GA.cy - GA.r - 30} at={ad} color={TEAL.ink} size={40} anchor="middle">{`v = ${fx(vOfK(k), 2)}c`}</Lbl>
			<HandTag x={PL5.x + 380} y={PL5.y + PL5.h + 112} text="same push, less speed" at={eb + 24} size={34} color={TEAL.ink} />
			<HandTag x={0} y={0} at={nc} color={RED.stroke} marks={[{kind: 'arrow', from: [plotX(PL5, 0.93), plotY(PL5, 0.6)], to: [plotX(PL5, 0.96), PL5.y + 30], bend: -0.1}]} />
			<Lbl x={plotX(PL5, 1) - 20} y={PL5.y - 20} at={inf} color={RED.ink} size={32} anchor="end">p → ∞ as v → c</Lbl>
			<Chip x={96} y={396} at={nf} size={30} color={INK} border={INK}>finite FΔt → finite p → v &lt; c</Chip>
			<HandTag x={96} y={490} text="speed limit for anything with mass" at={it} size={34} color={AMBER.ink} />
		</>
	);
};
export const S06: React.FC = () => {
	const id = 'probe-numbers';
	const f = useCurrentFrame();
	const r1 = cue(id, 'its momentum reaches m zero c'), r2 = cue(id, 'Double that momentum'), r3 = cue(id, 'Triple it'), r4 = cue(id, 'Ten times'), th = cap(id, cue(id, 'there'));
	const rows = [r1, r2, r3, r4];
	const kk = kf(f, [[0, 2], [r1, 2], [r1 + 1, 1], [r2, 1], [r2 + 20, 2], [r3, 2], [r3 + 20, 3], [r4, 3], [r4 + 40, 10]]);
	const SP: PlotBox = {x: 1380, y: 640, w: 400, h: 220, yMax: 10};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage f={f} k={kk} blocks={kk} tremble={f >= th ? 0.004 : 0} />
				<CurvePlot b={SP} f={pOfB} color={AMBER.stroke} betaMax={0.995} asym={1} marker={vOfK(kk)} xTicks={[0, 1]} yTicks={[0, 10]} xLabel="v/c" yLabel="p" size={24} />
			</FrameSvg>
			<div style={{position: 'absolute', left: 860, top: 200, width: 960, background: '#fffdf8', border: '3px solid rgba(60,45,20,0.2)', borderRadius: 16, padding: '10px 20px'}}>
				<div style={{display: 'flex', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, color: INK}}><span style={{width: 330}}>t (Earth frame)</span><span style={{width: 180, color: AMBER.ink}}>p</span><span style={{width: 180, color: VIOLET.ink}}>γ</span><span style={{color: TEAL.ink}}>v</span></div>
				{TABLE.map((kt, i) => (
					<div key={kt} style={{display: 'flex', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, color: INK, marginTop: 8, opacity: prog(f, rows[i], 12)}}>
						<span style={{width: 330}}>{`${sci(kt * 3.0e7, 1)} s`}</span><span style={{width: 180, color: AMBER.ink}}>{kt === 1 ? 'm₀c' : `${kt}m₀c`}</span><span style={{width: 180, color: VIOLET.ink}}>{fx(gOfK(kt), kt === 10 ? 1 : 2)}</span><span style={{color: TEAL.ink}}>{`${fx(vOfK(kt), kt === 10 ? 3 : 2)}c`}</span>
					</div>
				))}
			</div>
			<Lbl x={GA.cx} y={GA.cy - GA.r - 30} at={-30} color={TEAL.ink} size={40} anchor="middle">{`v = ${fx(vOfK(kk), kk > 9 ? 3 : 2)}c`}</Lbl>
			<HandTag x={PB.x + PB.w + 20} y={PB.base - 10 * PB.bh} text="ten equal blocks" at={r4 + 30} size={30} color={AMBER.ink} marks={[{kind: 'brace', x: PB.x - 12, y1: PB.base - 10 * PB.bh, y2: PB.base, facing: 'left'}]} />
			<HandTag x={GA.cx + GA.r + 20} y={GA.cy + 20} text="just below c" at={r4 + 40} size={30} color={TEAL.ink} marks={[{kind: 'circle', cx: GA.cx + GA.r - 10, cy: GA.cy - 6, rx: 40, ry: 30}]} />
			<HandTag x={860} y={560} text="momentum: no ceiling; speed: limit c" at={th} size={36} color={INK} />
		</>
	);
};

export const STAGE15 = {PS, PB, GA};
