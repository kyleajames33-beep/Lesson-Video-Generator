// Scenes 1 to 5: the hook (last time's closed-core schematic gets numbers; the painted transformer beside it; the lamp
// lights and the primary's dots swing harder), the same flux through every turn (a push into the windings: per-turn
// emf tags copy along each winding and sum, the ideal card, the ratio derived and a live per-turn counter), step-up and
// step-down (two schematics, the power point and lab power pack, the tower, two AC traces in step), why not more
// current too (the power ledger refuses to grow), and power in equals power out (the ledger levels, V_pI_p = V_sI_s).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {Plate} from '../../physics/electromagnetism/bench';
import type {Place} from '../../physics/electromagnetism/bench';
import {ACTrace, ANCHOR, LVS_PLATE, POWER_POINT, TOWER, XCore, XFMR, anchorAt, byHeight, xGeom} from '../../physics/electromagnetism/transformer';
import {Lead} from '../../physics/electromagnetism/plates';
import {M6V12FinalFrame} from '../phys-y12-m6-v12/s3';
import {CHECK, HEAD, HEAD_SIZE, HOOK, PER_TURN, cap, cue, dur, holdIf, mono, speechEnd} from './common';
import {AMBER, CardRect, FLUX, Frac, IdealCard, Lbl, MiniXf, NAVY, ORANGE, PowerBars, ROSE, Ring, Strike, XCircuit, fx, swing, xcGeom} from './parts';

// ---------- 1. hook ----------
const HC = {cx: 960, cy: 560, s: 460, t: 84, ax: 560, lx: 1360};
const HG = xcGeom(HC.cx, HC.cy, HC.s, HC.t, HC.ax, HC.lx);
const PLATE1: Place = {x: 46, y: 300, w: 380};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const nums = cue(id, "Let's put numbers on it"), n100 = cue(id, 'one hundred turns'), v10 = cue(id, 'ten volts AC'), n200 = cue(id, 'two hundred turns'), pred = cue(id, 'Make your prediction'), v20 = cue(id, "It's twenty volts"), free = cue(id, 'something for free'), half = cue(id, 'half an amp'), amp = cue(id, 'one whole amp'), hc = cue(id, 'half the current'), how = cap(id, cue(id, 'So how does a transformer'));
	const h = holdIf(id);
	if (f < 1) return <M6V12FinalFrame />;
	const dx = kf(f, mono([[0, 0], [nums, 0], [nums + 26, 120]]));
	const slide = prog(f, nums + 6, 22);
	const e = HG.ends, X = (x: number) => x + dx;
	const lit = prog(f, half, 10);
	const pl: Place = {...PLATE1, x: PLATE1.x - 440 * (1 - slide)};
	const lw = anchorAt(XFMR, pl, [300, 700]), rw = anchorAt(XFMR, pl, [930, 720]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g transform={`translate(${dx} 0)`}>
					<XCircuit {...HC} np={4} ns={8} phase={f * 3} pColor={f >= n100 ? ORANGE.stroke : undefined} sColor={f >= n200 ? ROSE.stroke : undefined} lit={lit} flowS={lit} phaseS={swing(f, HOOK.secondaryCurrent)} flowP={prog(f, amp, 10)} phaseP={swing(f, HOOK.primaryCurrent)} />
				</g>
				{slide > 0.001 ? <Plate spec={XFMR} p={pl} opacity={slide} /> : null}
				<Ring cx={X(HC.ax) + 140} cy={e.pTop[1] - 30} rx={130} ry={44} at={amp + 6} color={ORANGE.stroke} />
			</FrameSvg>
			<Chip x={96} y={890} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: how does a transformer exchange voltage for current?</Chip>
			<HandTag x={pl.x + 20} y={pl.y - 30} text="the real thing" at={nums + 20} size={34} color={NAVY.ink} />
			<HandTag x={pl.x + 10} y={lw[1] + 110} text="few turns" at={nums + 30} size={32} color={ORANGE.ink} />
			<HandTag x={pl.x + 200} y={rw[1] + 110} text="many turns" at={nums + 36} size={32} color={ROSE.ink} />
			<Lbl x={X(HC.cx - HG.m)} y={HC.cy - HG.o - 24} color={NAVY.ink} size={36} anchor="middle">N<Sub>p</Sub>{f >= n100 ? ' = 100' : ''}</Lbl>
			<Lbl x={X(HC.cx + HG.m)} y={HC.cy - HG.o - 24} color={NAVY.ink} size={36} anchor="middle">N<Sub>s</Sub>{f >= n200 ? ' = 200' : ''}</Lbl>
			<HandTag x={X(HC.cx + HG.m) + 70} y={HC.cy - HG.o - 60} text="× 2 turns" at={n200 + 6} size={34} color={ROSE.ink} />
			<Lbl x={X(HC.cx)} y={HC.cy + HG.o + 50} at={n100 + 10} color={INK} size={28} anchor="middle">not every turn drawn</Lbl>
			<Lbl x={X(HC.ax - 60)} y={HC.cy + 12} color={ORANGE.ink} size={f >= v10 ? 44 : 40} anchor="end">V<Sub>p</Sub>{f >= v10 ? ' = 10 V' : ' ?'}</Lbl>
			<Lbl x={X(HC.lx + 60)} y={HC.cy + 12} color={ROSE.ink} size={f >= v20 ? 44 : 40}>V<Sub>s</Sub>{f >= v20 ? ` = ${fx(HOOK.secondaryVoltage, 0)} V` : ' ?'}</Lbl>
			<Lbl x={X(HC.ax + 50)} y={e.pTop[1] - 20} color={ORANGE.ink} size={f >= amp ? 44 : 36}>I<Sub>p</Sub>{f >= amp ? ` = ${fx(HOOK.primaryCurrent, 1)} A` : ' ?'}</Lbl>
			<Lbl x={X(HC.lx - 50)} y={e.sTop[1] - 20} color={ROSE.ink} size={f >= half ? 44 : 36} anchor="end">I<Sub>s</Sub>{f >= half ? ` = ${fx(HOOK.secondaryCurrent, 2)} A` : ' ?'}</Lbl>
			<HandTag x={X(HC.lx + 60)} y={HC.cy + 80} text="V: × 2" at={hc} size={36} color={ROSE.ink} />
			<HandTag x={X(HC.lx) - 280} y={e.sTop[1] - 80} text="I: ÷ 2" at={hc + 10} size={36} color={ROSE.ink} />
			{['bigger', 'smaller', 'the same'].map((c, i) => <Chip key={c} x={60} y={700 + i * 66} at={pred + i * 6} size={32} w={300}>{c}{i === 0 && f >= v20 ? ' ✓' : ''}</Chip>)}
			<Chip x={420} y={700} at={free} out={how} size={30} w={430}>something for free?</Chip>
			<Chip x={1100} y={770} at={how} size={34} w={250} color={ROSE.ink} border={ROSE.stroke}>V ↑ × 2</Chip>
			<Chip x={1370} y={770} at={how + 6} size={34} w={250} color={ORANGE.ink} border={ORANGE.stroke}>I ↓ ÷ 2</Chip>
			<Chip x={1235} y={846} at={how + 12} size={32} w={250} color={AMBER.ink} border={AMBER.stroke}>P fixed</Chip>
			<HandTag x={1640} y={890} text="trade, not a gift" at={how + 16} size={36} color={AMBER.ink} />
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1760} y={230} r={52} ringFrom={h.startFrame - pred < 150 ? pred : h.startFrame - 30} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. same flux, same volts per turn ----------
const BC = {cx: 640, cy: 600, s: 480, t: 100};
const BG = xGeom(BC.cx, BC.cy, BC.s, BC.t);
export const S02: React.FC = () => {
	const id = 'volts-per-turn';
	const f = useCurrentFrame();
	const all = cue(id, 'all the flux goes round the core'), same = cue(id, 'every turn gets the same emf'), think = cue(id, 'Think of it as the volts per turn'), sec = cue(id, "The secondary's voltage is its number of turns"), match = cue(id, 'matches the supply voltage'), divide = cue(id, 'Divide one by the other'), cancels = cue(id, 'the flux change cancels'), ratio = cue(id, 'V p over V s equals N p over N s'), nums = cue(id, 'ten volts over one hundred turns'), tenth = cue(id, 'a tenth of a volt per turn'), twenty = cap(id, cue(id, 'so two hundred turns give twenty volts'));
	const sweep = kf(f, mono([[0, 0], [tenth, 0], [twenty, 1]]), false);
	const k200 = Math.round(sweep * 200);
	const glowS = f >= tenth && sweep < 1 ? [Math.min(7, Math.floor(sweep * 8))] : f >= same && f < sec ? [3] : [];
	const glowP = f >= same && f < sec ? [1] : [];
	const tagS = (k: number) => f >= sec ? sec + k * 5 : k === 3 ? same : 1e9;
	const tagP = (k: number) => f >= match ? match + k * 6 : k === 1 ? same : 1e9;
	const vpt = <>ΔΦ/Δt</>;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Plate spec={XFMR} p={{x: 50, y: 170, w: 250}} />
				<XCore {...BC} np={4} ns={8} phase={f * 3} flux={prog(f, all, 16)} pColor={ORANGE.stroke} sColor={ROSE.stroke} glowP={glowP} glowS={glowS} glowColor={ROSE.stroke} />
				<IdealCard x={1060} y={150} w={620} size={28} marks={['tick', 'tick', 'none']} markO={[prog(f, all + 10, 10), prog(f, match + 10, 10), 0]} />
			</FrameSvg>
			<HandTag x={60} y={420} text="last time's transformer" at={-30} size={28} color={NAVY.ink} />
			<HandTag x={BC.cx} y={BC.cy - BG.o - 30} text="same flux, every turn" at={all + 12} size={34} color={FLUX} anchor="middle" />
			{Array.from({length: 8}, (_, k) => <Lbl key={k} x={BG.rx + BC.t / 2 + 22} y={BG.turnY(8, k) + 10} at={tagS(k)} color={ROSE.ink} size={26}>{vpt}</Lbl>)}
			{Array.from({length: 4}, (_, k) => <Lbl key={k} x={BG.lx - BC.t / 2 - 22} y={BG.turnY(4, k) + 10} at={tagP(k)} color={ORANGE.ink} size={26} anchor="end">{vpt}</Lbl>)}
			<Chip x={170} y={890} at={-30} size={30} w={330} color={ORANGE.ink} border={ORANGE.stroke}>N<Sub>p</Sub> = 100, V<Sub>p</Sub> = 10 V</Chip>
			<Chip x={760} y={890} at={-30} size={30} w={220} color={ROSE.ink} border={ROSE.stroke}>N<Sub>s</Sub> = 200</Chip>
			<Lbl x={BC.cx} y={BC.cy + BG.o + 40} color={INK} size={26} anchor="middle">not every turn drawn</Lbl>
			<Chip x={1060} y={360} at={think} size={32} w={620}>volts per turn = ΔΦ/Δt (one turn's emf)</Chip>
			<div style={{position: 'absolute', left: 1060, top: 440, width: 800, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={sec} ageAt={divide} size={44} oldSize={36}><span style={{color: ROSE.ink}}>V<Sub>s</Sub></span> = N<Sub>s</Sub> × ΔΦ/Δt</Row>
				<Row at={match} ageAt={divide} size={44} oldSize={36}><span style={{color: ORANGE.ink}}>V<Sub>p</Sub></span> = N<Sub>p</Sub> × ΔΦ/Δt</Row>
				<Row at={divide} ageAt={ratio} size={44} oldSize={36}><Frac n={<>V<Sub>p</Sub></>} d={<>V<Sub>s</Sub></>} /> = <Frac n={<>N<Sub>p</Sub> × <Strike at={cancels}>ΔΦ/Δt</Strike></>} d={<>N<Sub>s</Sub> × <Strike at={cancels + 6}>ΔΦ/Δt</Strike></>} /></Row>
				<Row at={ratio} size={56}><AnswerBox at={ratio + 8}><span style={{whiteSpace: 'nowrap'}}><Frac n={<>V<Sub>p</Sub></>} d={<>V<Sub>s</Sub></>} /> = <Frac n={<>N<Sub>p</Sub></>} d={<>N<Sub>s</Sub></>} /></span></AnswerBox></Row>
			</div>
			<HandTag x={1700} y={700} text="cancels" at={cancels + 8} out={ratio} size={34} color={FLUX} />
			<HandTag x={1700} y={750} text="(magnitudes)" at={cancels + 14} out={ratio} size={30} color={NAVY.ink} />
			<Row at={nums} size={36} style={{position: 'absolute', left: 1060, top: 800}}>10 V ÷ 100 turns = {fx(PER_TURN, 1)} V per turn</Row>
			<HandTag x={BG.rx + 150} y={BG.turnY(8, 7) + 70} text="0.1 V per turn" at={tenth} size={32} color={ROSE.ink} />
			<Readouts x={1060} y={866} w={620} size={44} at={tenth} rows={[{label: <>turns counted: {k200}, V<Sub>s</Sub></>, value: fx(k200 * PER_TURN, 1), unit: 'V', color: ROSE.ink}]} />
		</>
	);
};

// ---------- 3. step-up and step-down ----------
const PP: Place = {x: 70, y: 646, w: 280};
const LV: Place = {x: 470, y: 652, w: 400};
export const S03: React.FC = () => {
	const id = 'step-up-down';
	const f = useCurrentFrame();
	const up = cue(id, "That's a step-up transformer"), down = cue(id, "That's a step-down transformer"), pack = cue(id, 'The lab power pack has one inside'), exp = cue(id, 'for your experiment'), lines = cue(id, 'raise the voltage for the transmission lines'), never = cue(id, 'One thing never changes'), aus = cap(id, cue(id, 'fifty hertz in Australia'));
	const check = Math.min(speechEnd(id), dur(id) - 70);
	const cord = anchorAt(POWER_POINT, PP, ANCHOR.powerPointCord), inlet = anchorAt(LVS_PLATE, LV, ANCHOR.lvs.inlet);
	const run = f >= never ? ((f - never) / 90) % 1 : 0;
	const tw = byHeight(TOWER, 1600, 150, 400);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MiniXf x={420} y={370} np={3} ns={6} phase={f * 3} opacity={prog(f, up, 14)} pColor={ORANGE.stroke} sColor={ROSE.stroke} />
				<MiniXf x={1060} y={370} np={6} ns={3} phase={f * 3} opacity={prog(f, down, 14)} pColor={ORANGE.stroke} sColor={ROSE.stroke} />
				<g opacity={prog(f, pack, 16)}>
					<Plate spec={POWER_POINT} p={PP} />
					<Lead pts={[cord, [cord[0] + 40, cord[1]], [cord[0] + 40, inlet[1]], inlet]} width={5} />
					<Plate spec={LVS_PLATE} p={LV} />
				</g>
				<g opacity={prog(f, exp, 14)}>
					<CardRect x={560} y={500} w={230} h={130} />
					<g transform="translate(675 565) scale(0.38)"><XCore cx={0} cy={0} s={240} t={50} np={6} ns={2} phase={f * 3} pColor={ORANGE.stroke} sColor={ROSE.stroke} /></g>
					<path d={`M640,630 L640,700`} stroke={INK} strokeWidth={3} strokeDasharray="6 6" />
				</g>
				{f >= lines ? <Plate spec={TOWER} p={tw} opacity={prog(f, lines, 16)} /> : null}
				<g opacity={prog(f, never, 16)}>
					<ACTrace x={1000} y={650} w={600 * Math.min(1, prog(f, never, 30) + 0.001)} h={110} cycles={3} amp={1} color={ORANGE.stroke} now={run} />
					<ACTrace x={1000} y={800} w={600 * Math.min(1, prog(f, never, 30) + 0.001)} h={110} cycles={3} amp={0.35} color={ROSE.stroke} now={run} />
				</g>
			</FrameSvg>
			<Lbl x={420} y={560} at={up + 8} color={INK} size={32} anchor="middle">step-up: N<Sub>s</Sub> &gt; N<Sub>p</Sub>, V<Sub>s</Sub> &gt; V<Sub>p</Sub></Lbl>
			<Lbl x={1060} y={560} at={down + 8} color={INK} size={32} anchor="middle">step-down: N<Sub>s</Sub> &lt; N<Sub>p</Sub>, V<Sub>s</Sub> &lt; V<Sub>p</Sub></Lbl>
			<Lbl x={210} y={620} at={pack} color={INK} size={28} anchor="middle">power point</Lbl>
			<Lbl x={670} y={860} at={pack} color={INK} size={28} anchor="middle">lab power pack</Lbl>
			<HandTag x={90} y={880} text="230 V in" at={exp} size={34} color={ORANGE.ink} />
			<HandTag x={800} y={640} text="a few volts out" at={exp + 8} size={34} color={ROSE.ink} />
			<Chip x={560} y={430} at={exp + 4} size={30} w={230} color={INK} border={INK}>step-down inside</Chip>
			<Lbl x={tw.x + tw.w / 2} y={590} at={lines + 8} color={INK} size={30} anchor="middle">step-up for transmission</Lbl>
			<Lbl x={tw.x + tw.w / 2} y={632} at={lines + 12} color={INK} size={28} anchor="middle">(more in a later video)</Lbl>
			<Lbl x={1620} y={705} at={never + 10} color={ORANGE.ink} size={30}>primary</Lbl>
			<Lbl x={1620} y={855} at={never + 14} color={ROSE.ink} size={30}>secondary</Lbl>
			<HandTag x={1000} y={630} text="same frequency: 50 Hz" at={aus} size={36} color={FLUX} />
			<Row at={check} size={34} style={{position: 'absolute', left: 96, top: 168}}>Check: 400 → 800 turns on 230 V: V<Sub>s</Sub> = 230 × 800/400 = <AnswerBox at={check + 8}><span style={{whiteSpace: 'nowrap'}}>{fx(CHECK.secondaryVoltage, 0)} V, step-up</span></AnswerBox></Row>
		</>
	);
};

// ---------- 4 and 5. the power ledger ----------
const TH = {cx: 430, cy: 540, s: 280, t: 52, ax: 200, lx: 660};
const TG = xcGeom(TH.cx, TH.cy, TH.s, TH.t, TH.ax, TH.lx);
/** The hook transformer as a small reference (40%) with its values. */
const HookThumb: React.FC<{f: number}> = ({f}) => (
	<>
		<FrameSvg>
			<CardRect x={70} y={300} w={760} h={420} />
			<XCircuit {...TH} np={4} ns={8} phase={f * 3} lit={1} flowS={1} phaseS={swing(f, HOOK.secondaryCurrent)} flowP={1} phaseP={swing(f, HOOK.primaryCurrent)} lampR={22} srcR={26} />
		</FrameSvg>
		<Lbl x={TH.cx - TG.m} y={TH.cy - TG.o - 18} color={NAVY.ink} size={32} anchor="middle">N<Sub>p</Sub> = 100</Lbl>
		<Lbl x={TH.cx + TG.m} y={TH.cy - TG.o - 18} color={NAVY.ink} size={32} anchor="middle">N<Sub>s</Sub> = 200</Lbl>
		<Lbl x={TH.ax - 34} y={TH.cy + 10} color={ORANGE.ink} size={30} anchor="end">10 V</Lbl>
		<Lbl x={TH.lx + 34} y={TH.cy + 10} color={ROSE.ink} size={30}>20 V</Lbl>
		<Lbl x={TH.ax - 20} y={TG.ends.pBot[1] + 84} color={ORANGE.ink} size={32}>I<Sub>p</Sub> = 1.0 A</Lbl>
		<Lbl x={TH.lx + 20} y={TG.ends.sBot[1] + 84} color={ROSE.ink} size={32} anchor="end">I<Sub>s</Sub> = 0.50 A</Lbl>
	</>
);
const BX = 960, BBASE = 840, BH = 460;
export const S04: React.FC = () => {
	const id = 'no-free-energy';
	const f = useCurrentFrame();
	const why = cue(id, 'why not more current as well'), more = cue(id, 'more power out than we put in'), fuel = cue(id, 'And a transformer has no fuel'), field = cap(id, cue(id, 'carried by the changing field'));
	const fout = kf(f, mono([[0, 0.43], [more, 0.43], [more + 16, 0.86], [field, 0.86], [field + 16, 0.43]]));
	const shake = f > more + 16 && f < field ? 6 * Math.sin(f * 1.6) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<HookThumb f={f} />
			<FrameSvg><PowerBars x={BX} base={BBASE} h={BH} w={170} gap={130} fin={0.43} fout={fout} shake={shake} vin="10 W" vout={f >= more && f < field + 16 ? '20 W?' : '10 W'} size={36} /></FrameSvg>
			<CrossedChip x={960} y={180} at={why} crossAt={field} size={34} caption="no energy from nowhere">V<Sub>s</Sub> up and I<Sub>s</Sub> up?</CrossedChip>
			<HandTag x={1480} y={420} text="energy from nothing?" at={more + 16} out={field + 10} size={36} color={FLUX} />
			<Chip x={1440} y={560} at={fuel} size={30} w={400}>no fuel, no battery inside</Chip>
			<Row at={field + 8} size={34} style={{position: 'absolute', left: 1400, top: 650, width: 460, whiteSpace: 'normal'}}><span style={{color: ORANGE.ink}}>supply</span> → <span style={{color: FLUX}}>changing flux</span> → <span style={{color: ROSE.ink}}>secondary</span></Row>
		</>
	);
};
export const S05: React.FC = () => {
	const id = 'power-equal';
	const f = useCurrentFrame();
	const vi = cue(id, 'power is voltage times current'), none = cue(id, 'loses no energy'), out = cue(id, 'all comes out of the secondary'), eq = cue(id, 'V p times I p equals V s times I s'), check = cue(id, 'Check it with the hook'), tin = cue(id, 'Ten volts times one amp'), tout = cap(id, cue(id, 'Twenty volts times half an amp'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<HookThumb f={f} />
			<FrameSvg>
				<PowerBars x={BX} base={BBASE} h={BH} w={170} gap={130} fin={0.43} fout={0.43} vin={f >= tin ? '10 W' : undefined} vout={f >= tout ? '10 W' : undefined} size={36} />
				<IdealCard x={1400} y={150} w={470} size={24} marks={['tick', 'tick', 'tick']} markO={[1, 1, prog(f, none, 10)]} hi={[0, 0, f >= none && f < out + 30 ? 1 : 0]} />
				{f >= tout ? <path d={`M${BX + 85},${BBASE - BH * 0.43 - 70} V${BBASE - BH * 0.43 - 90} H${BX + 385} V${BBASE - BH * 0.43 - 70}`} fill="none" stroke={AMBER.stroke} strokeWidth={5} opacity={prog(f, tout + 10, 12)} /> : null}
			</FrameSvg>
			<Chip x={960} y={180} at={vi} size={32} w={330}>P = VI (Year 11)</Chip>
			<HandTag x={BX + 150} y={BBASE - BH * 0.43 - 130} text="ideal: power in = power out" at={out} size={36} color={AMBER.ink} anchor="middle" />
			<HandTag x={BX + 235} y={BBASE - BH * 0.43 - 100} text="same" at={tout + 16} size={34} color={AMBER.ink} anchor="middle" />
			<Row at={eq} size={56} style={{position: 'absolute', left: 96, top: 740}}><AnswerBox at={eq + 8}><span style={{whiteSpace: 'nowrap'}}>V<Sub>p</Sub>I<Sub>p</Sub> = V<Sub>s</Sub>I<Sub>s</Sub></span></AnswerBox></Row>
			<Chip x={96} y={240} at={check} size={30} w={420}>check with the hook</Chip>
			<Row at={tin} size={36} style={{position: 'absolute', left: 96, top: 840}}><span style={{color: ORANGE.ink}}>P<Sub>in</Sub></span> = 10 V × {fx(HOOK.primaryCurrent, 1)} A = {fx(10 * HOOK.primaryCurrent, 0)} W</Row>
			<Row at={tout} size={36} style={{position: 'absolute', left: 96, top: 894}}><span style={{color: ROSE.ink}}>P<Sub>out</Sub></span> = {fx(HOOK.secondaryVoltage, 0)} V × {fx(HOOK.secondaryCurrent, 2)} A = {fx(HOOK.secondaryVoltage * HOOK.secondaryCurrent, 0)} W</Row>
		</>
	);
};
