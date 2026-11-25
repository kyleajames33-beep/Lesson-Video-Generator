// Scenes 6 to 9: the rejected speeds (the live speed slider on the crossed-field stage with v, F_E, F_B and F_net read
// every frame and the deflection read from the run), charge and mass don't matter (a proton and a heavier ion run
// straight through), what one speed is good for (an analyser region of crosses sorting two ions by mass, the
// painted mass spectrometer), and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {MemoryCard} from '../../shared/scenes';
import {INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {CrossRegion, Particle, Slider} from '../../physics/electromagnetism/plates';
import type {PG} from '../../physics/electromagnetism/plates';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {CrossedStage} from '../../physics/electromagnetism/crossed';
import {HEAD, HEAD_SIZE, WE, cap, cue, forcesAt, mono, selRun} from './common';
import {AMBER, ForcePair, GREY, Lbl, MassSpec, NAVY, ROSE, Ring, RunOn, SupplyRig, TEAL, sci, usePulse} from './parts';
import {RunStill, SUP} from './s1';

// ---------- 6. the rejected speeds (live slider) ----------
export const G6: PG = {x1: 420, x2: 1240, yTop: 330, yBot: 730};
export const B6 = 1290, E6 = {x: 450, y: 530};
const LEN6 = B6 - E6.x, HALF6 = (G6.yBot - G6.yTop) / 2 - 16;
const ratioFmt = (r: number) => sci(WE.vs * r, 1);
export const S06: React.FC = () => {
	const id = 'rejected-speeds';
	const f = useCurrentFrame();
	const miss = cue(id, 'Now the electrons that miss'), dbl = cue(id, 'Double the speed'), doubles = cue(id, 'the magnetic force doubles'), wins = cue(id, 'The magnetic force wins'), halve = cue(id, 'Halve the speed instead'), halves = cue(id, 'the magnetic force halves'), eWins = cue(id, 'Now the electric force wins'), tooFast = cue(id, 'Too fast, magnetic wins'), tooSlow = cap(id, cue(id, 'Too slow, electric wins'));
	const K = mono([[dbl, 1], [doubles, 2], [halve, 2], [halves, 0.5]]);
	const ratio = kf(f, K);
	const settle = f >= halves ? halves : f >= doubles ? doubles : miss;
	const stable = Math.abs(ratio - [1, 2, 0.5][[miss, doubles, halves].indexOf(settle)]) < 1e-6;
	const run = selRun(ratio, LEN6, -1, 1, HALF6);
	const t = stable ? (f - settle) % (run.duration + 40) : 0;
	const F = forcesAt(WE.vs * ratio);
	const fe = 110, fb = -110 * ratio, net = fe + fb;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SupplyRig g={G6} sup={SUP} reading="80 V" />
				<CrossedStage g={G6} barrierX={B6} />
				{t > 0 ? <RunOn run={run} t={t} x0={E6.x} y0={E6.y} r={20} /> : <RunStill x={E6.x} y={E6.y} />}
				{t <= 0 ? <ForcePair x={E6.x} y={E6.y} fe={fe} fb={fb} dx={14} /> : null}
				{t <= 0 && Math.abs(net) > 4 ? <Arrow2 from={[E6.x + 70, E6.y - Math.sign(net) * 30]} to={[E6.x + 70, E6.y - Math.sign(net) * 30 - net]} color={INK} width={6} head={20} /> : null}
				<Slider x={460} y={850} w={700} value={ratio / 2} color={TEAL.stroke} label="speed v" ticks={[[0.25, '1.0 × 10⁵'], [0.5, '2.0 × 10⁵ (E/B)'], [1, '4.0 × 10⁵']]} size={28} />
				<Ring cx={1580} cy={282} rx={236} ry={30} at={wins} color={AMBER.stroke} />
			</FrameSvg>
			<Lbl x={G6.x2} y={260} color={INK} size={30} anchor="end">E down, B into page</Lbl>
			<Readouts x={1340} y={190} w={484} size={40} at={miss - 30} rows={[
				{label: 'v', value: ratioFmt(ratio), unit: 'm s⁻¹', color: TEAL.ink},
				{label: <>F<Sub>E</Sub></>, value: sci(F.FE, 2), unit: 'N', color: AMBER.ink},
				{label: <>F<Sub>B</Sub></>, value: sci(F.FB, 2), unit: 'N', color: ROSE.ink},
				{label: <>F<Sub>net</Sub></>, value: Math.abs(F.net) < 1e-18 ? '0' : `${sci(Math.abs(F.net), 2)}`, unit: 'N', color: INK},
				{label: 'deflection', value: F.flag, color: INK},
			]} />
			<HandTag x={1340} y={590} text="electric force never moves" at={wins + 10} size={30} color={AMBER.ink} />
			<HandTag x={1660} y={590} text="× 2" at={doubles + 10} out={halve} size={36} color={ROSE.ink} />
			<HandTag x={1660} y={590} text="÷ 2" at={halves + 10} size={36} color={ROSE.ink} />
			<div style={{position: 'absolute', left: 1340, top: 640, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={tooFast} size={40}><AnswerBox at={tooFast + 8} tick={false}>v &gt; E/B: <span style={{color: ROSE.ink}}>F<Sub>B</Sub> wins</span></AnswerBox></Row>
				<Row at={tooSlow} size={40}><AnswerBox at={tooSlow + 8} tick={false}>v &lt; E/B: <span style={{color: AMBER.ink}}>F<Sub>E</Sub> wins</span></AnswerBox></Row>
			</div>
			<Lbl x={E6.x + 90} y={E6.y + 150} at={wins} out={halve} color={INK} size={30}>net: down</Lbl>
			<Lbl x={E6.x + 90} y={E6.y - 140} at={eWins} color={INK} size={30}>net: up</Lbl>
			<Lbl x={1824} y={880} color={INK_SOFT} size={28} anchor="end">deflections not to scale</Lbl>
		</>
	);
};

// ---------- 7. charge and mass don't matter ----------
const RUN_P = selRun(1, LEN6 + 220, 1, 1), RUN_ION = selRun(1, LEN6 + 220, 1, 0.25);
export const S07: React.FC = () => {
	const id = 'charge-mass';
	const f = useCurrentFrame();
	const would = cue(id, 'So would protons'), rev = cue(id, 'both forces reverse'), down = cue(id, 'The electric force points down'), straight = cue(id, 'so the proton goes straight'), ion = cue(id, 'A heavier ion at the same speed'), called = cue(id, "That's why this is called"), picks = cap(id, cue(id, 'It picks out speed'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SupplyRig g={G6} sup={SUP} reading="80 V" />
				<CrossedStage g={G6} barrierX={B6} />
				{f < straight ? <g opacity={prog(f, would, 12)}><RunStill x={E6.x} y={E6.y} sign="+" /></g> : <RunOn run={RUN_P} t={(f - straight) * 1.4} x0={E6.x} y0={E6.y} sign="+" r={22} />}
				{f >= down && f < straight ? <ForcePair x={E6.x} y={E6.y} fe={-110} fb={110} dx={14} opacity={prog(f, down, 12)} /> : null}
				{f >= ion ? <RunOn run={RUN_ION} t={(f - ion) * 1.4} x0={E6.x} y0={E6.y} sign="+" r={32} /> : null}
			</FrameSvg>
			<Lbl x={G6.x2} y={260} color={INK} size={30} anchor="end">E down, B into page</Lbl>
			<Lbl x={E6.x + 40} y={E6.y + 150} at={down} out={straight} color={AMBER.ink} size={30}>F<Sub>E</Sub> down</Lbl>
			<Lbl x={E6.x + 40} y={E6.y - 140} at={down} out={straight} color={ROSE.ink} size={30}>F<Sub>B</Sub> up</Lbl>
			<HandTag x={E6.x + 150} y={E6.y - 80} text="both flip" at={rev + 20} out={straight} size={32} color={ROSE.ink} />
			<Lbl x={E6.x + 40} y={G6.yBot + 90} at={ion} color={INK} size={30}>heavier ion, same speed</Lbl>
			<Chip x={1340} y={200} at={would} size={34} w={480}>protons get through?</Chip>
			<Row at={straight} size={44} style={{position: 'absolute', left: 1340, top: 290}}><AnswerBox at={straight + 8}>yes</AnswerBox></Row>
			<HandTag x={1340} y={420} text="speed, not mass" at={ion + 30} size={34} color={INK} />
			<CrossedChip x={1340} y={600} at={ion + 10} crossAt={called} size={30}>heavier ion is deflected</CrossedChip>
			<Row at={picks} size={40} style={{position: 'absolute', left: 1340, top: 730, width: 480, whiteSpace: 'normal'}}><AnswerBox at={picks + 8}>velocity selector: selects v = E/B only</AnswerBox></Row>
		</>
	);
};

// ---------- 8. what one speed is good for ----------
const S8 = {g: {x1: 120, x2: 600, yTop: 600, yBot: 800} as PG, bx: 640, y: 700, reg: {x: 720, y: 240, w: 620, h: 640}};
const RADII = [120, 190];
export const S08: React.FC = () => {
	const id = 'application';
	const f = useCurrentFrame();
	const why = cue(id, 'Why would you want one speed'), send = cue(id, 'Send that beam into a magnetic field'), fixed = cue(id, 'With the speed fixed'), wider = cue(id, 'heavier ions with the same charge swing wider'), spec = cue(id, "That's one way a mass spectrometer"), thomson = cap(id, cue(id, 'Thomson use crossed fields'));
	const ionAt = (i: number) => {
		const t = f - send - i * 20;
		const L = S8.reg.x - 150;
		if (t < 0) return null;
		if (t < 50) return {x: 150 + (L * t) / 50, y: S8.y, done: 0};
		const a = Math.min(1, (t - 50) / 60) * Math.PI;
		const r = RADII[i];
		return {x: S8.reg.x + r * Math.sin(a), y: S8.y - r + r * Math.cos(a), done: a / Math.PI};
	};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CrossedStage g={S8.g} barrierX={S8.bx} crossStep={60} linesStep={90} />
				<CrossRegion x={S8.reg.x} y={S8.reg.y} w={S8.reg.w} h={S8.reg.h} step={80} opacity={prog(f, why, 14)} />
				<rect x={S8.reg.x - 10} y={S8.reg.y + 20} width={12} height={S8.y - S8.reg.y - 60} fill="#cfc6b6" stroke={INK} strokeWidth={3} opacity={prog(f, fixed, 14)} />
				{RADII.map((r, i) => {
					const p = ionAt(i);
					if (!p) return null;
					const arc = p.done > 0 ? Array.from({length: 41}, (_, k) => { const a = (k / 40) * p.done * Math.PI; return `${S8.reg.x + r * Math.sin(a)},${S8.y - r + r * Math.cos(a)}`; }).join(' ') : '';
					return (
						<g key={i}>
							<line x1={150} y1={S8.y} x2={Math.min(p.x, S8.reg.x)} y2={S8.y} stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="9 6" />
							{arc ? <polyline points={arc} fill="none" stroke={TEAL.stroke} strokeWidth={4} /> : null}
							<Particle cx={p.x} cy={p.y} sign="+" r={i ? 24 : 18} />
						</g>
					);
				})}
				<MassSpec x={1400} y={360} w={420} opacity={prog(f, spec, 16)} />
			</FrameSvg>
			<Lbl x={S8.g.x1} y={S8.g.yTop - 50} at={why} color={INK} size={28}>velocity selector</Lbl>
			<Lbl x={S8.reg.x + S8.reg.w} y={S8.reg.y - 20} at={why} color={GREY.ink} size={30} anchor="end">B only, into page</Lbl>
			<Lbl x={S8.reg.x + 140} y={S8.y - 2 * RADII[0] + 60} at={send + 120} color={INK} size={28}>+e, lighter</Lbl>
			<Lbl x={S8.reg.x + 210} y={S8.y - 2 * RADII[1] - 20} at={send + 140} color={INK} size={28}>+e, heavier</Lbl>
			<HandTag x={740} y={196} text="heavier, same q: wider" at={wider} size={32} color={NAVY.ink} />
			<Lbl x={S8.reg.x + 260} y={790} at={fixed} color={NAVY.ink} size={32}>same v, same q: r ∝ m</Lbl>
			<Lbl x={S8.reg.x + 260} y={840} at={fixed + 20} color={NAVY.ink} size={36}>r = mv/(qB) ∝ m/q</Lbl>
			<Lbl x={1400} y={640} at={spec} color={INK} size={28}>one design of mass spectrometer</Lbl>
			<Chip x={1400} y={720} at={thomson} size={28} border={GREY.stroke} color={GREY.ink} w={420}>later: Thomson's charge-to-mass experiment</Chip>
		</>
	);
};

// ---------- 9. memory aid ----------
const Bars: React.FC<{pulse: number}> = ({pulse}) => {
	const f = useCurrentFrame();
	const v = 0.5 + 0.75 * (1 - Math.cos(f / 30));
	return (
		<svg width={1500} height={220} style={{overflow: 'visible'}}>
			<rect x={0} y={40} width={320} height={44} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3} />
			<rect x={0} y={130} width={320 * v} height={44} fill={ROSE.soft} stroke={ROSE.stroke} strokeWidth={3} />
			<line x1={320} y1={20} x2={320} y2={200} stroke={INK} strokeWidth={2} strokeDasharray="6 5" />
			<text x={-12} y={74} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, fill: AMBER.ink} as React.CSSProperties}>F<tspan baselineShift="sub" fontSize={24}>E</tspan></text>
			<text x={-12} y={164} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, fill: ROSE.ink} as React.CSSProperties}>F<tspan baselineShift="sub" fontSize={24}>B</tspan></text>
			<text x={700} y={84} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44, fill: ROSE.ink} as React.CSSProperties}>fast → follows F<tspan baselineShift="sub" fontSize={30}>B</tspan></text>
			<text x={700} y={164} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44 + 8 * pulse, fill: AMBER.ink} as React.CSSProperties}>slow → follows F<tspan baselineShift="sub" fontSize={30}>E</tspan></text>
		</svg>
	);
};
export const S09: React.FC = () => {
	const id = 'memory-aid';
	const rem = cue(id, 'To remember it'), slow = cap(id, cue(id, 'and slow ones follow'));
	const pulse = usePulse(slow, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 140, top: 200, width: 1640}}>
				<MemoryCard at={rem - 20} main={<span style={{fontSize: 72, color: TEAL.ink}}>v = E/B</span>} picture={<div style={{paddingLeft: 120}}><Bars pulse={pulse} /></div>} sub="The electric push is the same at every speed; the magnetic push grows with speed." />
			</div>
		</>
	);
};
