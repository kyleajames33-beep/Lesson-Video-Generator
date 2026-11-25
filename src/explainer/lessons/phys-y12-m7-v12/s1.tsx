// Scenes 1 to 6: the hook (last time's spacecraft at 0.8c with its pulse; the painted Earth; 1.8c or c?), observers and
// adding velocities (ruler-and-clock badges; a probe, a small copy of the spacecraft plate), inertial and non-inertial
// frames (the large spacecraft with a cabin cut-away and the painted steel ball; the exhaust layer for thrust), no
// experiment reveals uniform motion (two cabins side by side running the same collision and spring), Maxwell's c and the
// aether (a dotted aether, the painted Earth and the predicted wind) and Michelson-Morley (the schematic rotates; the
// fringe strip from the waves engine never shifts).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip} from '../../physics/projectile/board';
import {Disc, EARTH, SUN} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {Packet} from '../../physics/light/photo';
import {FrameBadge, FringeStrip, Interferometer, Ship, Starfield, shipGeom, ifoParts} from '../../physics/light/frames';
import {HandoffBoard11, M7V11FinalFrame, PULSE11_X, SHIP11} from '../phys-y12-m7-v11/s3';
import {GALILEAN, HEAD, HEAD_SIZE, MM_EXPECTED, MM_RATIO, V_EARTH, V_PROBE, V_SHIP, cap, cue} from './common';
import {AMBER, Ball, CabinBox, GREY, INK, Lbl, ORANGE, SLATE, Spring, Strip, TEAL, VArrow} from './parts';

type Pt = [number, number];
const SG11 = shipGeom(SHIP11);
export const EARTH_AT = {cx: 130, cy: 870, d: 130};

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const past = cue(id, 'past the Earth'), fire = cue(id, 'It fires a laser pulse straight ahead'), onb = cue(id, 'Measured on board'), add = cue(id, 'add the speeds'), pred = cue(id, 'prediction'), unc = cue(id, 'within their uncertainties'), sp = cap(id, cue(id, 'speed'));
	if (f < 1) return <M7V11FinalFrame />;
	const ny = SG11.nose[1];
	const newP = SG11.nose[0] + 40 + (PULSE11_X - SG11.nose[0] - 40) * prog(f, fire, 40);
	const sumO = prog(f, add + 30, 14);
	const tickAt = Math.max(unc, pred + 92);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 4, 20)}}><HandoffBoard11 f={0} final heading={false} chip={false} /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Ship p={SHIP11} />
				<Packet x={f < fire ? PULSE11_X : newP} y={ny} len={80} color={AMBER.stroke} opacity={f < fire ? 1 : prog(f, fire, 6)} />
				<Disc spec={EARTH} cx={EARTH_AT.cx} cy={EARTH_AT.cy} d={EARTH_AT.d} opacity={prog(f, past, 14)} />
				<FrameBadge x={220} y={EARTH_AT.cy} color={INK} label="Earth frame" t={f / 30} opacity={prog(f, past + 6, 14)} scale={0.85} size={32} />
				<FrameBadge x={SHIP11.x + 40} y={SHIP11.y - 40} color={TEAL.stroke} label="ship frame" t={f / 30} opacity={prog(f, onb, 14)} scale={0.85} size={32} />
				<VArrow a={[1180, 260]} b={[1180 + 240 * prog(f, add, 16), 260]} opacity={prog(f, add, 6)} />
				<VArrow a={[1420, 260]} b={[1420 + 300 * prog(f, add + 12, 16), 260]} color={AMBER.stroke} opacity={prog(f, add + 12, 6)} />
				<VArrow a={[1180, 330]} b={[1180 + 540 * sumO, 330]} color={GREY.stroke} dash="14 10" opacity={sumO} />
				<Countdown start={pred} end={pred + 90} x={1740} y={440} r={40} />
				{f >= tickAt ? <Mark x={1385} y={420} at={tickAt} kind="tick" color={INK} size={30} /> : null}
				{f >= unc ? <circle cx={PULSE11_X} cy={ny} r={70} fill="none" stroke={AMBER.stroke} strokeWidth={5} opacity={prog(f, unc + 10, 12)} /> : null}
			</FrameSvg>
			<Lbl x={SHIP11.x + 360} y={SHIP11.y - 20} at={-60} color={ORANGE.ink} size={34}>v = 0.8c</Lbl>
			<Lbl x={PULSE11_X - 40} y={ny - 90} at={-60} out={onb} color={AMBER.ink} size={30}>c measured on board?</Lbl>
			<Lbl x={PULSE11_X - 40} y={ny - 90} at={onb + 6} color={TEAL.ink} size={32}>c (on board)</Lbl>
			<Lbl x={PULSE11_X - 40} y={ny + 100} at={-60} out={unc} color={AMBER.ink} size={30}>c measured from Earth?</Lbl>
			<Lbl x={PULSE11_X - 40} y={ny + 100} at={unc + 6} color={INK} size={32}>c (from Earth)</Lbl>
			<Lbl x={1260} y={240} at={add} color={ORANGE.ink} size={30} anchor="middle">0.8c</Lbl>
			<Lbl x={1560} y={240} at={add + 12} color={AMBER.ink} size={30} anchor="middle">c</Lbl>
			<Lbl x={1740} y={345} at={add + 30} color={GREY.ink} size={34}>{`${GALILEAN}c?`}</Lbl>
			<HandTag x={1180} y={200} text="common sense?" at={add + 20} size={30} color={GREY.ink} />
			<Chip x={1180} y={400} at={pred} size={32} color={INK}>1.8c</Chip>
			<Chip x={1330} y={400} at={pred + 4} size={32} color={INK}>c</Chip>
			<Chip x={1440} y={400} at={pred + 8} size={32} color={INK}>0.2c</Chip>
			<HandTag x={0} y={0} at={tickAt} color={SLATE.stroke} marks={[{kind: 'cross', cx: 1225, cy: 425, size: 46}]} />
			<HandTag x={PULSE11_X - 120} y={ny + 160} text="measured: c, within uncertainty" at={unc + 14} size={28} color={GREY.ink} />
			<HandTag x={0} y={0} at={sp} color={AMBER.stroke} marks={[{kind: 'underline', x1: 336, x2: 450, y: 152}]} />
		</>
	);
};

// ---------- 2. observers and adding velocities ----------
export const S02: React.FC = () => {
	const id = 'frames-galilean';
	const f = useCurrentFrame();
	const fr = cue(id, 'a frame of reference'), nob = cue(id, 'Nobody has to be there'), twenty = cue(id, 'twenty kilometres per second'), probe = cue(id, 'a probe forward at ten kilometres per second'), sec = cue(id, 'second', 3), well = cap(id, cue(id, 'well'));
	const pz = f >= fr && f < fr + 30 ? 1 + 0.12 * Math.sin((Math.PI * (f - fr)) / 30) : 1;
	const go = prog(f, probe, 50);
	const pp: Place = {x: SG11.nose[0] + 20 + 360 * go, y: SG11.nose[1] - 26, w: 150};
	const pg = shipGeom(pp);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Ship p={SHIP11} />
				<Disc spec={EARTH} cx={EARTH_AT.cx} cy={EARTH_AT.cy} d={EARTH_AT.d} />
				<FrameBadge x={220} y={EARTH_AT.cy} color={INK} label="Earth frame" t={f / 30} scale={0.85 * pz} size={32} />
				<FrameBadge x={SHIP11.x + 40} y={SHIP11.y - 40} color={TEAL.stroke} label="ship frame" t={f / 30} scale={0.85 * pz} size={32} />
				{f >= probe ? <Ship p={pp} /> : null}
				<VArrow a={[SG11.nose[0] + 20, SG11.nose[1] - 110]} b={[SG11.nose[0] + 20 + 220 * go, SG11.nose[1] - 110]} color={TEAL.stroke} opacity={prog(f, probe + 10, 10)} />
				<VArrow a={[600, 836]} b={[600 + 300 * prog(f, twenty, 14), 836]} opacity={prog(f, twenty, 8)} />
				<VArrow a={[600, 890]} b={[600 + 450 * prog(f, sec, 16), 890]} color={INK} opacity={prog(f, sec, 8)} />
			</FrameSvg>
			<Chip x={96} y={170} at={fr} size={32} color={INK} border={INK}>frame of reference: rulers + clocks that record where and when</Chip>
			<HandTag x={96} y={290} text="observer = frame" at={nob} size={34} color={INK} />
			<Lbl x={SHIP11.x + 360} y={SHIP11.y - 20} at={-30} out={twenty} color={ORANGE.ink} size={34}>v = 0.8c</Lbl>
			<Lbl x={930} y={846} at={twenty + 10} color={ORANGE.ink} size={30}>{`ship: ${V_SHIP} km/s`}</Lbl>
			<Lbl x={SG11.nose[0] + 20} y={SG11.nose[1] - 140} at={probe + 10} color={TEAL.ink} size={30}>{`probe: ${V_PROBE} km/s (relative to ship)`}</Lbl>
			<Lbl x={1080} y={900} at={sec + 10} color={INK} size={30}>{`probe from Earth: ${V_EARTH} km/s`}</Lbl>
			<Strip x={1180} y={300} at={sec - 4} size={52}><AnswerBox at={sec + 8}>{`${V_SHIP} + ${V_PROBE} = ${V_EARTH} km/s`}</AnswerBox></Strip>
			<HandTag x={0} y={0} at={sec + 14} color={ORANGE.stroke} marks={[{kind: 'brace', x: 580, y1: 816, y2: 910, facing: 'left'}]} />
			<HandTag x={1180} y={460} text="Galilean: fine at low speed" at={well} size={34} color={ORANGE.ink} />
			<Lbl x={pg.nose[0] + 20} y={pg.nose[1] + 10} at={probe + 30} color={TEAL.ink} size={28}>probe</Lbl>
		</>
	);
};

// ---------- 3. inertial and non-inertial frames ----------
const SP3: Place = {x: 240, y: 420, w: 1440};
const WIN = {x: 700, y: 620, w: 760, h: 150};
/** Star offset (px): a steady drift, faster and then steady after `sp`, accelerating under thrust after `fire`. */
const starOffset = (f: number, sp: number, fire: number) => f * 3 + (f > sp ? Math.min(1, (f - sp) / 30) * (f - sp) * 6 : 0) + (f > fire ? (f - fire) ** 2 * 0.08 : 0);
export const S03: React.FC = () => {
	const id = 'inertial-frames';
	const f = useCurrentFrame();
	const inf = cue(id, 'An inertial frame'), coast = cue(id, 'coasting with its engines off'), sp = cue(id, 'speed'), fire = cue(id, 'fire the engines'), drift = cue(id, 'the ball drifts to the back wall'), fr = cue(id, 'non-inertial frame'), turn = cap(id, cue(id, 'Turning and spinning frames'));
	const thrust = prog(f, fire, 14);
	const u = f > drift ? Math.min(1, ((f - drift) / 60) ** 2) : 0;
	const bx = WIN.x + WIN.w / 2 - (WIN.w / 2 - 45) * u;
	const turnT = prog(f, turn, 50);
	const ta = Math.PI * (1.1 + 0.8 * turnT);
	const tp: Place = {x: 1560 + 140 * Math.cos(ta) - 80, y: 330 + 80 * Math.sin(ta) - 20, w: 160};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Starfield x={96} y={190} w={1728} h={720} offset={starOffset(f, sp, fire)} n={90} streak={f > fire + 20 ? 10 : 0} />
				<Ship p={SP3} thrust={thrust} />
				<CabinBox x={WIN.x} y={WIN.y} w={WIN.w} h={WIN.h}>
					<Ball cx={bx} cy={WIN.y + WIN.h / 2} d={70} />
				</CabinBox>
				{f >= drift ? <VArrow a={[WIN.x + WIN.w / 2, WIN.y - 30]} b={[WIN.x + WIN.w / 2 - 220, WIN.y - 30]} color={GREY.stroke} dash="12 8" width={5} opacity={prog(f, drift + 10, 10)} /> : null}
				{f >= turn ? <g opacity={prog(f, turn, 10)}><path d={`M${1560 + 140 * Math.cos(Math.PI * 1.1)},${330 + 80 * Math.sin(Math.PI * 1.1)} A140,80 0 0 1 ${1560 + 140 * Math.cos(Math.PI * 1.9)},${330 + 80 * Math.sin(Math.PI * 1.9)}`} fill="none" stroke={ORANGE.stroke} strokeWidth={4} strokeDasharray="10 8" /><Ship p={tp} /></g> : null}
			</FrameSvg>
			<Lbl x={WIN.x} y={WIN.y - 70} at={0} color={INK} size={28}>cabin (cut-away)</Lbl>
			<Chip x={96} y={170} at={inf} size={30} w={1100} color={INK} border={INK}>{"Inertial frame: A reference frame in which Newton's first law holds; a frame moving at constant velocity (no acceleration)."}</Chip>
			<Lbl x={96} y={340} at={coast} color={TEAL.ink} size={32}>engines off: coasting</Lbl>
			<HandTag x={WIN.x + WIN.w + 30} y={WIN.y - 10} text="ball stays put" at={sp + 6} out={drift} size={32} color={TEAL.ink} marks={[{kind: 'circle', cx: WIN.x + WIN.w / 2, cy: WIN.y + WIN.h / 2, rx: 60, ry: 56}]} />
			<Lbl x={96} y={400} at={fire} color={ORANGE.ink} size={32}>engines on: accelerating</Lbl>
			<Lbl x={WIN.x + WIN.w / 2 - 200} y={WIN.y - 46} at={drift + 10} color={GREY.ink} size={28}>no force?</Lbl>
			<HandTag x={WIN.x + WIN.w + 30} y={WIN.y + 60} text="first law fails here" at={drift + 20} size={32} color={SLATE.ink} />
			<Chip x={96} y={860} at={fr} size={30} color={ORANGE.ink} border={ORANGE.stroke}>non-inertial: accelerating (or turning, spinning)</Chip>
			<HandTag x={1430} y={460} text="turning: non-inertial" at={turn + 10} size={30} color={ORANGE.ink} />
		</>
	);
};

// ---------- 4. no experiment reveals uniform motion ----------
const Lab: React.FC<{x: number; y: number; w: number; h: number; t: number}> = ({x, y, w, h, t}) => {
	const ph = (t % 1.6) / 1.6, gap = Math.abs(Math.cos(Math.PI * ph));
	const cx = x + w * 0.3;
	const ms = x + w * 0.62 + 40 * Math.sin(2 * Math.PI * t);
	return (
		<CabinBox x={x} y={y} w={w} h={h}>
			<Ball cx={cx - 40 - 90 * gap} cy={y + h * 0.4} d={56} />
			<Ball cx={cx + 40 + 90 * gap} cy={y + h * 0.4} d={56} />
			<line x1={x + w * 0.5} y1={y + h * 0.75 - 40} x2={x + w * 0.5} y2={y + h * 0.75 + 40} stroke={INK} strokeWidth={6} />
			<Spring x0={x + w * 0.5} x1={ms - 28} y={y + h * 0.75} />
			<Ball cx={ms} cy={y + h * 0.75} d={56} />
			<FrameBadge x={x + w - 230} y={y + 40} color={TEAL.stroke} t={t} scale={0.7} />
		</CabinBox>
	);
};
export const S04: React.FC = () => {
	const id = 'no-absolute-rest';
	const f = useCurrentFrame();
	const col = cue(id, 'Collide two balls'), spr = cue(id, 'time a vibrating spring'), same = cue(id, 'The results are the same'), meas = cue(id, 'measured'), rest = cap(id, cue(id, 'truly at rest'));
	const m = prog(f, 0, 24);
	const sp: Place = {x: SP3.x + (560 - SP3.x) * m, y: SP3.y + (650 - SP3.y) * m, w: SP3.w + (820 - SP3.w) * m};
	const sg = shipGeom(sp);
	const split = prog(f, same, 20);
	const t = f / 30;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Ship p={sp} thrust={1 - prog(f, 0, 16)} />
				<g opacity={1 - split}><Lab x={360} y={190} w={1200} h={400} t={f >= col ? t : 0} /></g>
				{split > 0.001 ? <g opacity={split}><Lab x={150} y={190} w={780} h={400} t={t} /><Lab x={990} y={190} w={780} h={400} t={t} /></g> : null}
				{f < same + 10 ? <g opacity={1 - split}><line x1={sg.hull[0] + 60} y1={sg.hull[1]} x2={360} y2={590} stroke={INK} strokeWidth={2} strokeDasharray="6 6" /><line x1={sg.hull[2] - 60} y1={sg.hull[1]} x2={1560} y2={590} stroke={INK} strokeWidth={2} strokeDasharray="6 6" /></g> : null}
				<Disc spec={EARTH} cx={EARTH_AT.cx} cy={EARTH_AT.cy} d={EARTH_AT.d} opacity={prog(f, meas - 20, 12)} />
				<VArrow a={[EARTH_AT.cx + 80, 760]} b={[EARTH_AT.cx + 80 + 330 * prog(f, meas, 16), 760]} opacity={prog(f, meas, 8)} />
			</FrameSvg>
			<Lbl x={380} y={230} at={col} out={same} color={INK} size={28}>two balls collide</Lbl>
			<Lbl x={940} y={230} at={spr} out={same} color={INK} size={28}>a spring vibrates</Lbl>
			<Lbl x={170} y={230} at={same} color={INK} size={30}>ship at rest</Lbl>
			<Lbl x={1010} y={230} at={same} color={INK} size={30}>ship at 0.8c</Lbl>
			<Lbl x={960} y={640} at={same + 20} color={TEAL.ink} size={32} anchor="middle">same results, same rates</Lbl>
			<Lbl x={EARTH_AT.cx + 120} y={735} at={meas} color={ORANGE.ink} size={30}>relative velocity</Lbl>
			<HandTag x={EARTH_AT.cx + 480} y={760} text="only relative motion" at={meas + 10} size={32} color={ORANGE.ink} />
			<CrossedChip x={1450} y={820} at={rest} crossAt={rest + 14} size={32}>absolute rest</CrossedChip>
		</>
	);
};

// ---------- 5. Maxwell's c and the aether ----------
export const S05: React.FC = () => {
	const id = 'maxwell-aether';
	const f = useCurrentFrame();
	const mx = cue(id, "Maxwell's equations"), what = cue(id, 'c relative to what'), aeth = cue(id, 'an invisible medium called the aether'), snd = cue(id, 'like sound through air'), thirty = cue(id, 'thirty kilometres per second'), wind = cap(id, cue(id, 'wind'));
	const dots = prog(f, aeth, 20);
	const ex = 760 + 300 * prog(f, thirty, 70);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{dots > 0.001 ? <g opacity={0.7 * dots}>{Array.from({length: 22 * 9}, (_, i) => <circle key={i} cx={130 + (i % 22) * 78 + ((Math.floor(i / 22)) % 2) * 39} cy={420 + Math.floor(i / 22) * 56} r={3.5} fill={GREY.stroke} />)}</g> : null}
				{f >= wind ? Array.from({length: 7}, (_, i) => { const x = ((1800 - ((f - wind) * 14 + i * 230) % 1500)), y = 480 + i * 60; return <line key={i} x1={x} y1={y} x2={x + 140} y2={y} stroke={GREY.stroke} strokeWidth={5} strokeLinecap="round" opacity={prog(f, wind, 10)} />; }) : null}
				<Disc spec={SUN} cx={1560} cy={660} d={300} />
				<Disc spec={EARTH} cx={ex} cy={660} d={220} />
				<VArrow a={[ex + 130, 660]} b={[ex + 330, 660]} opacity={prog(f, thirty, 10)} />
			</FrameSvg>
			<Chip x={96} y={170} at={mx} size={28} color={INK}>an earlier video: Maxwell</Chip>
			<Strip x={96} y={240} at={mx + 6} size={44}>c = 1/√(μ₀ε₀) ≈ 3.00 × 10⁸ m s⁻¹</Strip>
			<Lbl x={980} y={290} at={what} color={SLATE.ink} size={60}>?</Lbl>
			<Lbl x={1040} y={280} at={what + 6} color={INK} size={36}>relative to what?</Lbl>
			<Lbl x={1040} y={330} at={what + 12} color={GREY.ink} size={28}>the equations name no source and no observer</Lbl>
			<Chip x={96} y={370} at={aeth + 10} size={30} color={GREY.ink} border={GREY.stroke}>aether (assumed): a hypothetical light-carrying medium</Chip>
			<Lbl x={1040} y={400} at={snd} color={GREY.ink} size={30}>sound: speed relative to air (Year 11)</Lbl>
			<Lbl x={1560} y={850} at={0} color={INK} size={28} anchor="middle">Sun</Lbl>
			<Lbl x={760} y={810} at={0} color={INK} size={28} anchor="middle">Earth</Lbl>
			<Lbl x={1240} y={900} at={0} color={GREY.ink} size={26}>not to scale</Lbl>
			<Lbl x={ex + 140} y={610} at={thirty + 10} color={ORANGE.ink} size={30}>≈ 30 km s⁻¹ through the aether?</Lbl>
			<HandTag x={1200} y={900} text="aether wind (predicted)" at={wind + 4} size={34} color={GREY.ink} marks={[{kind: 'arrow', from: [1700, 860], to: [1350, 860], bend: 0.05}]} />
		</>
	);
};

// ---------- 6. Michelson and Morley look for the wind ----------
export const IC: Pt = [600, 580];
export const IL = 260;
const FS = {x: 1080, y: 300, w: 700, h: 90, fringes: 6};
export const fringeX = (shift: number) => FS.x + ((2.5 + shift) / FS.fringes) * FS.w;
export const S06: React.FC = () => {
	const id = 'michelson-morley';
	const f = useCurrentFrame();
	const split = cue(id, 'They split a light beam'), rec = cue(id, 'recombined them'), rot = cue(id, 'rotating the apparatus'), frg = cue(id, 'fringe', 2), saw = cue(id, 'They saw no significant shift'), later = cue(id, 'Later tests, at other times of year, agreed'), res = cap(id, cue(id, 'result'));
	const deg = kf(f, [[rot, 0], [rot + 60, 90], [saw, 90], [saw + 60, 180]]);
	const parts = ifoParts(IL);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={IC[0] - 440} y={IC[1] + 230} width={880} height={56} rx={12} fill="#b7b1a6" stroke={INK} strokeWidth={3} />
				<Interferometer c={IC} L={IL} deg={deg} out={prog(f, split, 40)} back={prog(f, rec, 40)} beam={AMBER.stroke} />
				<FringeStrip x={FS.x} y={FS.y} w={FS.w} h={FS.h} shift={0} fringes={FS.fringes} opacity={prog(f, rec + 20, 14)} />
				{f >= rec + 20 ? <line x1={fringeX(0)} y1={FS.y - 16} x2={fringeX(0)} y2={FS.y + FS.h + 16} stroke={INK} strokeWidth={4} opacity={prog(f, rec + 20, 12)} /> : null}
				{f >= rot ? <line x1={fringeX(MM_EXPECTED)} y1={FS.y - 26} x2={fringeX(MM_EXPECTED)} y2={FS.y + FS.h + 26} stroke={GREY.stroke} strokeWidth={4} strokeDasharray="8 6" opacity={prog(f, rot + 20, 12)} /> : null}
				{f >= frg ? <line x1={fringeX(0.01)} y1={FS.y + FS.h} x2={fringeX(0.01)} y2={FS.y + FS.h + 40} stroke={SLATE.stroke} strokeWidth={3} opacity={prog(f, frg, 10)} /> : null}
				{f >= res ? <ellipse cx={FS.x + FS.w / 2} cy={FS.y + FS.h / 2} rx={FS.w / 2 + 30} ry={FS.h / 2 + 30} fill="none" stroke={INK} strokeWidth={5} opacity={prog(f, res + 8, 12)} /> : null}
			</FrameSvg>
			<Lbl x={96} y={180} at={0} color={INK} size={30}>Michelson and Morley, 1887</Lbl>
			<Lbl x={IC[0] - 430} y={IC[1] + 330} at={0} color={GREY.ink} size={26}>stone slab floating on mercury (so it can rotate)</Lbl>
			<Lbl x={IC[0] + parts.source[0] - 60} y={IC[1] - 60} at={split} out={rot} color={INK} size={26}>source</Lbl>
			<Lbl x={IC[0] + IL + 30} y={IC[1] + 10} at={split} out={rot} color={INK} size={26}>mirror</Lbl>
			<Lbl x={IC[0] + 60} y={IC[1] - IL + 10} at={split} out={rot} color={INK} size={26}>mirror</Lbl>
			<Lbl x={IC[0] + 60} y={IC[1] + parts.detector[1] + 10} at={rec} out={rot} color={INK} size={26}>detector</Lbl>
			<Lbl x={FS.x} y={FS.y - 40} at={rec + 20} color={INK} size={28}>fringes (an earlier video: interference)</Lbl>
			<Lbl x={FS.x} y={FS.y + FS.h + 90} at={rot + 20} color={GREY.ink} size={34}>{`expected shift ≈ ${MM_EXPECTED} fringe`}</Lbl>
			<Lbl x={FS.x} y={FS.y + FS.h + 150} at={frg} color={SLATE.ink} size={30}>detectable ≈ 0.01 fringe</Lbl>
			<HandTag x={FS.x + 380} y={FS.y + FS.h + 150} text={`${MM_RATIO} times too big to miss`} at={frg + 10} size={30} color={GREY.ink} />
			<Lbl x={FS.x} y={FS.y + FS.h + 230} at={saw} color={INK} size={44}>observed: ≈ 0</Lbl>
			<Chip x={FS.x} y={FS.y + FS.h + 270} at={saw + 20} size={28} color={INK}>July 1887: noon and evening runs</Chip>
			<Chip x={FS.x} y={FS.y + FS.h + 340} at={later} size={28} color={GREY.ink}>later tests: other seasons, same null result</Chip>
			<Lbl x={FS.x + FS.w - 10} y={FS.y - 40} at={res + 8} color={INK} size={40} anchor="end">null result</Lbl>
		</>
	);
};
