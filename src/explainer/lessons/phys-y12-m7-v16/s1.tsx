// Scenes 1 to 6: the hook (last time's probe and gauges give way to the painted Sun; four million tonnes a second, where
// does it go?), E = mc² (the probe at rest with its rest energy, the site's definition, the painted power station for
// one kilogram), the accounting rule (a dashed system boundary, energy leaving, the mass bar falling with an energy-out
// slider), the Sun's mass loss each second, fusion (four hydrogen nuclei to one helium nucleus with full notation, the
// 0.7% sliver, light and neutrinos leaving) and annihilation (an electron and a positron meet at rest; two photons leave
// in opposite directions; a coded PET detector ring).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row, Sub} from '../../physics/projectile/board';
import {Disc, LPlate, SUN} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {Ship} from '../../physics/light/frames';
import {Packet} from '../../physics/light/photo';
import {Nucleus, Nuclide, Particle, SystemBox} from '../../physics/light/massenergy';
import {Slider} from '../phys-y12-m7-v04/parts';
import {HANDOFF15, HandoffBoard15, M7V15FinalFrame} from '../phys-y12-m7-v15/s3';
import {E_1KG, FUSION_F, HEAD, HEAD_SIZE, SLIDER_E, SUN_DM, SUN_H, SUN_SLIP, SUN_W, T_1GW, T_1GW_YR, C2, cap, cue} from './common';
import {AMBER, GREY, Givens, INK, Lbl, MASS, NAVY, NEUTRON, Outflow, PSTATION, ROSE, SLATE, Strip, VArrow, fx, sci} from './parts';

// ---------- 1. hook ----------
const SUN1 = {cx: 560, cy: 540, d: 480};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const w = cue(id, 'three point eight times ten to the twenty six watts'), ft = cue(id, 'four million tonnes of mass every second'), pred = cue(id, 'prediction'), eq = cue(id, 'the mass equivalent of the energy that light carries away'), cb = cap(id, cue(id, 'combustion'));
	if (f < 1) return <M7V15FinalFrame />;
	const m = prog(f, 2, 30);
	const S0 = HANDOFF15.sun;
	const sx = S0.cx + (SUN1.cx - S0.cx) * m, sy = S0.cy + (SUN1.cy - S0.cy) * m, sd = S0.d + (SUN1.d - S0.d) * m;
	const tickAt = Math.max(eq, pred + 92);
	const dip = 30 * prog(f, eq + 10, 40);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 2, 18)}}><HandoffBoard15 f={0} final heading={false} chip={false} /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Outflow cx={sx} cy={sy} r0={sd / 2} r1={sd / 2 + 140} t={f / 30} n={12} opacity={prog(f, w, 16)} />
				<Disc spec={SUN} cx={sx} cy={sy} d={sd} />
				<SystemBox x={SUN1.cx - 290} y={SUN1.cy - 290} w={700} h={580} bar={240} out={dip} mass={MASS} opacity={prog(f, eq, 16)} showBar />
				<Countdown start={pred} end={pred + 90} x={1700} y={780} r={40} />
				{f >= tickAt ? <Mark x={1530} y={470} at={tickAt} kind="tick" color={INK} size={34} /> : null}
			</FrameSvg>
			<Lbl x={1100} y={260} at={w} color={AMBER.ink} size={36}>{`P ≈ ${sci(SUN_W, 1)} W`}</Lbl>
			<Lbl x={1100} y={320} at={ft} color={MASS.ink} size={36}>{`loses ≈ ${fx(Math.round(SUN_DM / 1e9))} million tonnes per second`}</Lbl>
			<Chip x={1100} y={380} at={pred} size={32} color={INK}>blown away as gas</Chip>
			<Chip x={1100} y={450} at={pred + 4} size={32} color={INK}>energy leaves as light</Chip>
			<Chip x={1100} y={520} at={pred + 8} size={32} color={INK}>destroyed</Chip>
			<HandTag x={0} y={0} at={tickAt} color={SLATE.stroke} marks={[{kind: 'cross', cx: 1250, cy: 404, size: 44}, {kind: 'cross', cx: 1170, cy: 544, size: 44}]} />
			<HandTag x={1100} y={640} text="energy out, Sun's mass down" at={eq + 20} size={36} color={AMBER.ink} marks={[{kind: 'arrow', from: [SUN1.cx + 260, SUN1.cy - 120], to: [SUN1.cx + 420, SUN1.cy - 220], bend: 0.1}]} />
			<Lbl x={SUN1.cx + 160} y={SUN1.cy + 340} at={eq + 10} color={MASS.ink} size={28}>Sun's mass</Lbl>
			<Lbl x={SUN1.cx - 280} y={SUN1.cy - 310} at={eq} color={INK} size={28}>system: the Sun</Lbl>
			<HandTag x={0} y={0} at={cb} color={INK} marks={[{kind: 'underline', x1: 808, x2: 912, y: 152}]} />
			<HandTag x={0} y={0} at={cb + 8} color={INK} marks={[{kind: 'underline', x1: 928, x2: 1140, y: 152}]} />
			<HandTag x={0} y={0} at={cb + 16} color={INK} marks={[{kind: 'underline', x1: 1218, x2: 1400, y: 152}]} />
		</>
	);
};

// ---------- 2. E = mc² ----------
const PR2: Place = {x: 96, y: 330, w: 600};
const PS2: Place = {x: 1180, y: 260, w: 620};
export const S02: React.FC = () => {
	const id = 'e-mc2';
	const f = useCurrentFrame();
	const em = cue(id, 'E equals m c squared'), eqv = cue(id, 'Mass and energy are equivalent'), re = cue(id, 'rest energy'), nine = cue(id, 'nine times ten to the sixteen joules for every kilogram'), ok = cue(id, "One kilogram's rest energy"), yr = cap(id, cue(id, 'years'));
	const fill = prog(f, re, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={168} at={em} size={52}>E = mc²</Strip>
			<Lbl x={360} y={200} at={em + 10} color={INK} size={28}>data sheet</Lbl>
			<FrameSvg>
				<Ship p={PR2} />
				<rect x={760} y={250} width={90} height={380} rx={8} fill="#fffdf8" stroke={GREY.stroke} strokeWidth={4} />
				<rect x={766} y={624 - 368 * fill} width={78} height={368 * fill} rx={6} fill="#e6c27a" />
				<g opacity={prog(f, eqv, 14) * (1 - prog(f, ok - 10, 14))}>
					<rect x={1160} y={300} width={110} height={300} rx={8} fill={MASS.soft} stroke={MASS.stroke} strokeWidth={4} />
					<rect x={1500} y={300} width={110} height={300} rx={8} fill="#f3dfb5" stroke={AMBER.stroke} strokeWidth={4} />
					<line x1={1290} y1={450} x2={1480} y2={450} stroke={INK} strokeWidth={5} />
					<path d="M1290,450 l18,-10 v20 z M1480,450 l-18,-10 v20 z" fill={INK} />
				</g>
				<LPlate spec={PSTATION} p={PS2} opacity={prog(f, ok, 16)} />
			</FrameSvg>
			<Lbl x={PR2.x + 20} y={PR2.y - 20} at={re} color={AMBER.ink} size={32}>rest energy = mc² (p = 0)</Lbl>
			<Lbl x={805} y={670} at={re} color={AMBER.ink} size={28} anchor="middle">energy</Lbl>
			<Lbl x={1215} y={650} at={eqv} out={ok - 10} color={MASS.ink} size={30} anchor="middle">mass m</Lbl>
			<Lbl x={1555} y={650} at={eqv} out={ok - 10} color={AMBER.ink} size={30} anchor="middle">rest energy</Lbl>
			<Lbl x={1385} y={420} at={eqv + 10} out={ok - 10} color={INK} size={36} anchor="middle">× c²</Lbl>
			<Lbl x={1160} y={270} at={eqv} out={ok - 10} color={INK} size={30}>mass and energy are equivalent</Lbl>
			<Chip x={96} y={720} at={re} size={28} w={1000} color={INK} border={AMBER.stroke}>{'Rest energy (E₀): The energy equivalent of an object’s mass at rest: E₀ = mc². Even a stationary particle carries this energy.'}</Chip>
			<Chip x={1100} y={720} at={nine} size={34} color={INK}>{`c² = (3.00 × 10⁸)² = ${sci(C2, 1)} J kg⁻¹`}</Chip>
			<Lbl x={PS2.x} y={PS2.y - 24} at={ok} color={INK} size={28}>1 GW power station</Lbl>
			<div style={{position: 'absolute', left: 96, top: 820}}><Row at={ok + 10} size={44}><AnswerBox at={ok + 20}>{`1 GW: (${sci(E_1KG, 1)} J) / (1.0 × 10⁹ W) = ${sci(T_1GW, 1)} s ≈ ${fx(T_1GW_YR, 1)} years`}</AnswerBox></Row></div>
			<HandTag x={1200} y={660} text="one kilogram!" at={yr} size={40} color={AMBER.ink} />
		</>
	);
};

// ---------- 3. the accounting rule ----------
const BX3 = {x: 140, y: 220, w: 600, h: 460};
export const S03: React.FC = () => {
	const id = 'accounting-rule';
	const f = useCurrentFrame();
	const go = cue(id, 'gives out energy E'), sq = cue(id, 'E over c squared'), tin = cue(id, 'If it takes in energy'), ac = cue(id, 'always conserved'), lv = cap(id, cue(id, 'leaves'));
	const step = Math.min(SLIDER_E.length - 1, Math.max(0, Math.floor((f - sq - 20) / 26)));
	const E = f < sq + 20 ? SLIDER_E[0] : SLIDER_E[step];
	const dm = E / C2;
	const out = f < go ? 0 : f >= tin && f < tin + 60 ? 22 + 14 * (Math.log10(dm) + 9) - 30 * prog(f, tin, 30) : 22 + 14 * (Math.log10(dm) + 9);
	const inward = f >= tin && f < tin + 60;
	const cx = BX3.x + 220, cy = BX3.y + BX3.h / 2;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SystemBox x={BX3.x} y={BX3.y} w={BX3.w} h={BX3.h} bar={280} out={out} barW={90} mass={MASS} label="system boundary" />
				<circle cx={cx} cy={cy} r={60} fill="#efe4cf" stroke={INK} strokeWidth={3} />
				<Outflow cx={cx} cy={cy} r0={70} r1={300} t={f / 30} n={6 + 2 * step} inward={inward} opacity={prog(f, go, 12)} />
				<Slider x={BX3.x} y={890} w={BX3.w} v0={0} v1={3} v={f < sq + 20 ? 0 : kf(f, [[sq + 20, 0], [sq + 20 + 26 * 3, 3]], false)} ticks={[]} color={AMBER.stroke} label="energy out (log scale)" opacity={prog(f, sq, 12)} />
			</FrameSvg>
			<Lbl x={cx} y={cy + 100} at={0} color={INK} size={28} anchor="middle">inside</Lbl>
			<Lbl x={BX3.x + 10} y={BX3.y + BX3.h + 50} at={sq} color={AMBER.ink} size={44}>{`E out = ${sci(E, 1)} J`}</Lbl>
			<Lbl x={BX3.x + 10} y={BX3.y + BX3.h + 110} at={sq} color={MASS.ink} size={44}>{`Δm = ${dm > 0.99 ? fx(dm, 1) : sci(dm, 1)} kg`}</Lbl>
			<div style={{position: 'absolute', left: 860, top: 250}}><Row at={sq - 6} size={56}><AnswerBox at={sq}>Δm = E / c²</AnswerBox></Row></div>
			<HandTag x={860} y={380} text="÷ 9.0 × 10¹⁶" at={sq + 20} size={36} color={MASS.ink} />
			<Lbl x={860} y={450} at={tin} out={tin + 60} color={AMBER.ink} size={32}>energy in: mass up by the same rule</Lbl>
			<div style={{position: 'absolute', left: 860, top: 500, background: '#fffdf8', border: '3px solid rgba(60,45,20,0.2)', borderRadius: 16, padding: '12px 22px', opacity: prog(f, ac, 12)}}>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 38, color: MASS.ink}}>inside: mc²</div>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 38, color: AMBER.ink}}>+ outside: E</div>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 38, color: INK}}>= total (constant)</div>
			</div>
			<HandTag x={0} y={0} at={ac + 10} color={INK} marks={[{kind: 'brace', x: 1300, y1: 510, y2: 670, facing: 'right'}]} />
			<Lbl x={BX3.x + 30} y={BX3.y + 40} at={lv} color={MASS.ink} size={30}>{"system's mass falls"}</Lbl>
			<Lbl x={cx + 230} y={cy - 210} at={lv} color={AMBER.ink} size={30}>energy + momentum</Lbl>
			<CrossedChip x={860} y={740} at={lv + 6} crossAt={lv + 16} size={32} caption="total energy is conserved">mass is destroyed</CrossedChip>
		</>
	);
};

// ---------- 4. the Sun: mass lost each second ----------
export const SunBox: React.FC<{f: number; x: number; y: number; d: number; dip?: number; o?: number}> = ({f, x, y, d, dip = 0, o = 1}) => (
	<g opacity={o}>
		<Outflow cx={x} cy={y} r0={d / 2} r1={d / 2 + 90} t={f / 30} n={9} len={36} />
		<Disc spec={SUN} cx={x} cy={y} d={d} />
		<SystemBox x={x - d / 2 - 40} y={y - d / 2 - 40} w={d + 170} h={d + 80} bar={d * 0.7} out={dip} barW={44} mass={MASS} />
	</g>
);
export const S04: React.FC = () => {
	const id = 'worked-sun';
	const f = useCurrentFrame();
	const sd = cue(id, 'So delta m equals E over c squared'), sec = cue(id, 'kilograms, every second'), tn = cap(id, cue(id, 'tonnes'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><SunBox f={f} x={260} y={340} d={260} dip={14 * prog(f, sec, 20)} /></FrameSvg>
			<Strip x={620} y={168} at={2} size={32}>{"Find the Sun's mass loss each second."}</Strip>
			<Strip x={620} y={236} at={6} size={36}>{'E = mc² → Δm = E/c²'}</Strip>
			<Givens x={620} y={312} w={1200} at={10} size={30} lines={[`Sun: P = ${sci(SUN_W, 1)} W → E = ${sci(SUN_W, 1)} J each second (site value)`, 'c = 3.00 × 10⁸ m s⁻¹ (data sheet)']} />
			<div style={{position: 'absolute', left: 96, top: 560, display: 'flex', flexDirection: 'column', gap: 16, width: 1700}}>
				<Row at={sd} size={52}>{`Δm = (${sci(SUN_W, 1)}) / (${sci(C2, 1)})`}</Row>
				<Row at={sec - 6} size={56}><AnswerBox at={sec}>{`= ${sci(SUN_DM, 1)} kg each second`}</AnswerBox></Row>
			</div>
			<CrossedChip x={1000} y={640} at={sec + 20} crossAt={sec + 36} size={30} caption="c², not c">{`Δm = (${sci(SUN_W, 1)}) / (3.00 × 10⁸) = ${sci(SUN_SLIP, 1)} kg`}</CrossedChip>
			<HandTag x={96} y={820} text={`≈ ${fx(SUN_DM / 1e9, 1)} million tonnes (1 t = 1000 kg)`} at={tn} size={38} color={MASS.ink} />
		</>
	);
};

// ---------- 5. where the Sun's energy comes from ----------
const HX = [170, 250, 170, 250], HY = [470, 470, 550, 550];
const HE = {x: 760, y: 510};
const NUC = {x: 1000, y: 470, size: 64};
export const S05: React.FC = () => {
	const id = 'fusion';
	const f = useCurrentFrame();
	const fc = cue(id, "Fusion in the Sun's core"), hb = cue(id, 'four hydrogen nuclei become one helium nucleus'), mn = cue(id, 'the top number is the mass number'), an = cue(id, 'the atomic number'), lm = cue(id, 'about zero point seven per cent less mass'), nu = cue(id, 'light, and as tiny particles called neutrinos'), sec = cap(id, cue(id, 'every second'));
	const bars = prog(f, lm, 16);
	const t = f / 30;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={168} at={-30} size={30}>{`Sun: Δm = ${sci(SUN_DM, 1)} kg each second`}</Strip>
			<FrameSvg>
				{HX.map((x, i) => <Particle key={i} x={x} y={HY[i]} r={30} color={ROSE.stroke} text="p" opacity={prog(f, fc, 12)} />)}
				<g opacity={prog(f, hb, 12)}>
					<path d="M330,510 C400,440 460,580 520,510 S620,460 660,510" fill="none" stroke={INK} strokeWidth={5} strokeDasharray="12 8" />
					<path d="M680,510 l-22,-12 v24 z" fill={INK} />
					<Nucleus cx={HE.x + 20} cy={HE.y} p={2} n={2} r={26} proton={ROSE.stroke} neutron={NEUTRON} />
				</g>
				{f >= nu ? <g>
					<Outflow cx={HE.x + 20} cy={HE.y} r0={70} r1={260} t={t} n={6} len={40} />
					{[0, 1, 2].map(i => { const u = ((t * 0.5 + i / 3) % 1); return <circle key={i} cx={HE.x + 60 + 260 * u} cy={HE.y + 90 + 30 * i} r={6} fill={GREY.stroke} opacity={1 - u} />; })}
				</g> : null}
				{bars > 0.001 ? <g opacity={bars}>
					<rect x={1320} y={420} width={100} height={400} rx={8} fill={MASS.soft} stroke={MASS.stroke} strokeWidth={4} />
					<rect x={1460} y={420 + 400 * FUSION_F * 10} width={100} height={400 * (1 - FUSION_F * 10)} rx={8} fill={MASS.soft} stroke={MASS.stroke} strokeWidth={4} />
					<line x1={1440} y1={420} x2={1580} y2={420} stroke={AMBER.stroke} strokeWidth={3} strokeDasharray="8 6" />
				</g> : null}
			</FrameSvg>
			<Lbl x={210} y={400} at={fc} color={ROSE.ink} size={30} anchor="middle">4 hydrogen nuclei</Lbl>
			<Lbl x={150} y={640} at={fc} color={ROSE.ink} size={36}>4 ×</Lbl>
			<Nuclide x={220} y={640} A={1} Z={1} sym="H" size={44} color={ROSE.ink} opacity={prog(f, fc, 12)} />
			<Lbl x={480} y={420} at={hb} color={INK} size={28} anchor="middle">several steps</Lbl>
			<Nuclide x={NUC.x} y={NUC.y} A={4} Z={2} sym="He" size={NUC.size} opacity={prog(f, hb + 20, 12)} />
			<HandTag x={NUC.x + 140} y={NUC.y - 60} text="mass number A: protons + neutrons (2 + 2)" at={mn + 6} out={lm - 4} size={30} color={NAVY.ink} marks={[{kind: 'circle', cx: NUC.x + 14, cy: NUC.y - 30, rx: 24, ry: 22}]} />
			<HandTag x={NUC.x + 140} y={NUC.y + 40} text="atomic number Z: protons" at={an + 6} out={lm - 4} size={30} color={ROSE.ink} marks={[{kind: 'circle', cx: NUC.x + 14, cy: NUC.y + 6, rx: 24, ry: 22}]} />
			<Lbl x={1370} y={860} at={lm} color={MASS.ink} size={28} anchor="middle">4 × hydrogen</Lbl>
			<Lbl x={1510} y={860} at={lm} color={MASS.ink} size={28} anchor="middle">helium</Lbl>
			<Lbl x={1590} y={430} at={lm + 10} color={AMBER.ink} size={32}>0.7% less</Lbl>
			<Lbl x={1590} y={470} at={lm + 10} color={GREY.ink} size={26}>(gap 10× larger)</Lbl>
			<Lbl x={HE.x - 60} y={HE.y + 190} at={nu + 10} color={GREY.ink} size={28}>neutrinos: tiny, almost massless</Lbl>
			<HandTag x={1590} y={540} text="energy out" at={nu + 16} size={34} color={AMBER.ink} marks={[{kind: 'arrow', from: [1450, 410], to: [1080, 360], bend: -0.2}]} />
			<div style={{position: 'absolute', left: 96, top: 800}}><Row at={sec - 6} size={48}><AnswerBox at={sec}>{`hydrogen fused = (${sci(SUN_DM, 1)}) / ${FUSION_F} ≈ ${sci(SUN_H, 1)} kg each second`}</AnswerBox></Row></div>
			<HandTag x={96} y={920} text={`≈ ${fx(Math.round(SUN_H / 1e11) * 100)} million tonnes`} at={sec + 10} size={32} color={MASS.ink} />
		</>
	);
};

// ---------- 6. annihilation ----------
const EV6 = {x: 900, y: 560};
export const PET: React.FC<{cx: number; cy: number; r: number; hit?: number; opacity?: number}> = ({cx, cy, r, hit = 0, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		{Array.from({length: 24}, (_, i) => {
			const a = (i / 24) * 2 * Math.PI, x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
			const lit = hit > 0 && (i === 0 || i === 12);
			return <rect key={i} x={x - 16} y={y - 16} width={32} height={32} rx={4} fill={lit ? '#ffd166' : '#e9e4da'} stroke={INK} strokeWidth={2.5} transform={`rotate(${(a * 180) / Math.PI} ${x} ${y})`} />;
		})}
	</g>
));
/** Before and after (momentum): the pair at rest, then two opposite photons. */
const FrameSvgInset: React.FC<{f: number; at: number}> = ({f, at}) => (
	<div style={{position: 'absolute', left: 1300, top: 660, opacity: prog(f, at, 14)}}>
		<svg width={520} height={220} style={{overflow: 'visible'}}>
			<rect x={0} y={0} width={520} height={220} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
			<text x={20} y={40} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>before</text>
			<Particle x={70} y={110} r={30} color={NAVY.stroke} text="e⁻" size={28} />
			<Particle x={150} y={110} r={30} color={ROSE.stroke} text="e⁺" size={28} />
			<text x={110} y={190} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>p = 0</text>
			<text x={280} y={40} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>after</text>
			<Packet x={320} y={110} deg={180} len={60} color={AMBER.stroke} />
			<Packet x={450} y={110} deg={0} len={60} color={AMBER.stroke} />
			<text x={385} y={190} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>p = 0</text>
		</svg>
	</div>
);
export const S06: React.FC = () => {
	const id = 'annihilation';
	const f = useCurrentFrame();
	const ap = cue(id, 'antiparticle, with the same mass and the opposite charge'), po = cue(id, "The electron's antiparticle is the positron"), an = cue(id, 'they annihilate'), tg = cue(id, 'two gamma ray photons'), z = cue(id, 'zero'), fr = cap(id, cue(id, 'from'));
	const meet = prog(f, an, 30);
	const gone = f >= an + 30;
	const fly = Math.min(1, Math.max(0, (f - tg) / 40));
	const ex = 120 + 200 * fly;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<PET cx={EV6.x} cy={EV6.y} r={360} hit={f >= fr + 10 ? 1 : 0} opacity={prog(f, fr, 16)} />
				<rect x={EV6.x - 250} y={EV6.y - 150} width={500} height={300} rx={14} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="16 10" opacity={prog(f, an, 12)} />
				{!gone ? <g opacity={1 - prog(f, an + 20, 10)}>
					<Particle x={EV6.x - 170 + 140 * meet} y={EV6.y} r={44} color={NAVY.stroke} text="e⁻" size={34} />
					<Particle x={EV6.x + 170 - 140 * meet} y={EV6.y} r={44} color={ROSE.stroke} text="e⁺" size={34} />
				</g> : null}
				{f >= tg ? <g>
					<Packet x={EV6.x - ex} y={EV6.y} deg={180} len={90} color={AMBER.stroke} label="γ" size={34} />
					<Packet x={EV6.x + ex} y={EV6.y} deg={0} len={90} color={AMBER.stroke} label="γ" size={34} />
				</g> : null}
				{f >= z ? <g opacity={prog(f, z, 12)}>
					<VArrow a={[EV6.x - ex, EV6.y + 70]} b={[EV6.x - ex - 140, EV6.y + 70]} color={AMBER.stroke} />
					<VArrow a={[EV6.x + ex, EV6.y + 70]} b={[EV6.x + ex + 140, EV6.y + 70]} color={AMBER.stroke} />
				</g> : null}
			</FrameSvg>
			<Lbl x={EV6.x - 140} y={EV6.y - 70} at={ap} out={an + 20} color={NAVY.ink} size={28} anchor="middle">electron: −1</Lbl>
			<Lbl x={EV6.x + 140} y={EV6.y - 70} at={ap + 6} out={an + 20} color={ROSE.ink} size={28} anchor="middle">+1</Lbl>
			<Chip x={96} y={240} at={ap} size={30} color={INK}>antiparticle: same mass, opposite charge</Chip>
			<Chip x={96} y={310} at={po} size={30} color={ROSE.ink} border={ROSE.stroke}>positron: antielectron</Chip>
			<Lbl x={EV6.x} y={EV6.y - 150} at={an} color={INK} size={28} anchor="middle">at rest</Lbl>
			<Strip x={1240} y={240} at={z} size={34}><span>p<Sub>total</Sub> = 0 (before and after)</span></Strip>
			<HandTag x={1240} y={340} text="opposite, so p stays 0" at={z + 10} size={34} color={AMBER.ink} />
			<Lbl x={96} y={900} at={fr} color={INK} size={30}>PET scanner: detects photon pairs in opposite directions</Lbl>
			<FrameSvgInset f={f} at={an + 30} />
		</>
	);
};
