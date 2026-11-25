// Scenes 1 to 6: the hook (last time's ladder and measured lines; Balmer's formula without a reason; a red photon from
// the 3 → 2 drop to its line), seeing the lines (the painted tube, supply and spectroscope; the eyepiece view and a
// pointer reading each line), the energy levels (to scale, crowding towards zero), the red line's energy (task,
// equation and givens; 1.89 eV, 3.03 × 10⁻¹⁹ J), its wavelength (656 nm, landing on the measured line) and where the
// Rydberg equation comes from.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Packet} from '../../physics/light/photo';
import {wlColor} from '../../physics/light/spectrum';
import {DropArrow, HLevels, yOf} from '../../physics/atom/bohr';
import type {LevelsGeom} from '../../physics/atom/bohr';
import {HandoffBoard10, LADH, M8V10FinalFrame, STH, dropX} from '../phys-y12-m8-v10/s3';
import {GAP32, GAP32_J, HEAD, HEAD_SIZE, LAM_GAP, LEVEL_EV, R_FROM, SLIP_EV, cap, cue, rydbergNm} from './common';
import {AMBER, GREY, GlowTube, Givens, INK, LPlate, Lbl, LevelTags, LineStrip, NAVY, ORANGE, SPECTRO, Strip, Supply, TEAL, fx, sci, stripX, tubeW} from './parts';

const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
export const BRIGHT = [3, 4, 5, 6].map(n => rydbergNm(2, n));
const RED_C = wlColor(BRIGHT[0]);
const ev = (v: number) => fx(v, 2);

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const fb = cue(id, 'four bright visible lines'), jb = cue(id, 'Johann Balmer'), be = cue(id, "Bohr's model explained it"), od = cue(id, 'one drop between two levels'), sg = cap(id, cue(id, 'the size of each energy gap'));
	if (f < 1) return <M8V10FinalFrame />;
	const y2 = yOf(LADH, 2), y3 = yOf(LADH, 3);
	const fly = prog(f, od + 10, 40);
	const x656 = stripX(STH.x, STH.w, BRIGHT[0]);
	const pl = pulseOf(f, fb, 40);
	return (
		<>
			<HandoffBoard10 f={0} final heading={false} chip={false} />
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{pl > 0 ? BRIGHT.map((nm, i) => <rect key={i} x={stripX(STH.x, STH.w, nm) - 10} y={STH.y - 8} width={20} height={STH.h + 16} fill="none" stroke={wlColor(nm)} strokeWidth={4} opacity={pl} />) : null}
				<GlowTube x={1640} y={520} h={340} />
				{f >= od ? <DropArrow g={LADH} x={dropX(0)} from={3} to={2} color={RED_C} width={12} opacity={pulseOf(f, od, 30)} /> : null}
				{f >= od + 10 && fly < 1 ? <Packet x={dropX(0) + (x656 - dropX(0)) * fly} y={(y2 + y3) / 2 + (STH.y + STH.h / 2 - (y2 + y3) / 2) * fly} len={60} color={RED_C} /> : null}
			</FrameSvg>
			<HandTag x={0} y={0} at={fb + 10} color={'#c0392b'} marks={[{kind: 'circle', cx: x656, cy: STH.y + STH.h / 2, rx: 26, ry: 70}]} />
			<Lbl x={1000} y={210} at={jb} color={INK} size={30}>Balmer, 1885</Lbl>
			<Chip x={1000} y={240} at={jb + 10} size={28} color={GREY.ink}>a formula that fits, no reason</Chip>
			<HandTag x={1400} y={270} text="it works, but why?" at={jb + 40} out={be} size={32} color={GREY.ink} />
			<Lbl x={1400} y={280} at={be} color={NAVY.ink} size={30}>Bohr, 1913: levels</Lbl>
			<HandTag x={LADH.x + LADH.w + 40} y={(y2 + y3) / 2 + 60} text="gap = photon energy" at={sg + 6} size={32} color={ORANGE.ink} marks={[{kind: 'brace', x: LADH.x + LADH.w + 8, y1: y3, y2: y2, facing: 'right'}]} />
			<Lbl x={1640 + tubeW(340) / 2} y={890} at={0} color={INK} size={26} anchor="middle">hydrogen tube</Lbl>
		</>
	);
};

// ---------- 2. seeing the lines ----------
const EYE = {x: 1480, y: 470, r: 220};
const scaleX = (nm: number) => EYE.x - 180 + ((nm - 400) / 300) * 360;
export const S02: React.FC = () => {
	const id = 'seeing-lines';
	const f = useCurrentFrame();
	const dt = cue(id, 'A hydrogen discharge tube glows'), sp = cue(id, 'a spectroscope'), gr = cue(id, 'a diffraction grating'), sc = cue(id, 'sharp coloured lines'), ms = cue(id, 'Measure where each line falls'), it = cap(id, cue(id, "you don't touch it"));
	const step = Math.max(14, (it - ms - 30) / 4);
	const k = f < ms ? -1 : Math.min(3, Math.floor((f - ms) / step));
	const px = k < 0 ? scaleX(400) : scaleX(BRIGHT[k]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Supply at={{x: 96, y: 600, w: 320}} />
				<GlowTube x={460} y={330} h={420} glow={prog(f, dt, 16)} />
				<LPlate spec={SPECTRO} p={{x: 470 + tubeW(420), y: 480, w: 480}} />
				<path d="M300,700 C330,640 420,760 520,740" fill="none" stroke={INK} strokeWidth={4} />
				<path d="M360,700 C390,600 520,300 550,340" fill="none" stroke="#c0392b" strokeWidth={4} />
				<g opacity={prog(f, sc, 14)}>
					<circle cx={EYE.x} cy={EYE.y} r={EYE.r} fill="#14110f" stroke={INK} strokeWidth={4} />
					{BRIGHT.map((nm, i) => <rect key={i} x={scaleX(nm) - 5} y={EYE.y - 120} width={10} height={200} fill={wlColor(nm)} />)}
					<line x1={EYE.x - 190} y1={EYE.y + 110} x2={EYE.x + 190} y2={EYE.y + 110} stroke="#e8e2d6" strokeWidth={3} />
					{[400, 450, 500, 550, 600, 650, 700].map(t => <line key={t} x1={scaleX(t)} y1={EYE.y + 98} x2={scaleX(t)} y2={EYE.y + 122} stroke="#e8e2d6" strokeWidth={3} />)}
					{k >= 0 ? <path d={`M${px},${EYE.y + 126} l-12,22 l24,0 Z`} fill={TEAL.stroke} /> : null}
				</g>
			</FrameSvg>
			<Lbl x={96} y={570} at={0} color={INK} size={26}>high-voltage supply</Lbl>
			<Lbl x={460 + tubeW(420) / 2} y={300} at={dt} color={INK} size={26} anchor="middle">hydrogen discharge tube</Lbl>
			<Lbl x={460 + tubeW(420) / 2} y={800} at={dt + 10} color={GREY.ink} size={26} anchor="middle">glow colour is not data</Lbl>
			<Lbl x={700} y={760} at={sp} color={INK} size={26}>spectroscope</Lbl>
			<Chip x={700} y={190} at={gr} size={28} color={INK}>or a grating (earlier video)</Chip>
			<Lbl x={EYE.x} y={EYE.y - EYE.r - 24} at={sc} color={INK} size={26} anchor="middle">view through the eyepiece</Lbl>
			<Lbl x={EYE.x} y={EYE.y + EYE.r + 50} at={ms} color={TEAL.ink} size={40} anchor="middle">{k >= 0 ? `${Math.round(BRIGHT[k])} nm` : ''}</Lbl>
			<HandTag x={1100} y={790} text="position → wavelength" at={ms + 10} size={32} color={TEAL.ink} />
			<Chip x={96} y={870} at={it} size={28} color={INK}>high voltage: teacher sets up</Chip>
			<Chip x={560} y={870} at={it + 6} size={28} color={INK}>hot tube: {"don't"} touch</Chip>
			<HandTag x={940} y={900} text="safety" at={it + 10} size={34} color={'#b8322a'} />
		</>
	);
};

// ---------- 3. the energy levels ----------
export const L3: LevelsGeom = {x: 360, w: 460, top: 250, bot: 900};
export const SLOT: Record<number, number> = {2: 412, 3: 340, 4: 298, 5: 258, 6: 218};
export const S03: React.FC = () => {
	const id = 'energy-levels';
	const f = useCurrentFrame();
	const fm = cue(id, 'minus thirteen point six over n squared'), l2 = cue(id, 'level two is'), l3 = cue(id, 'level three is'), l4 = cue(id, 'level four is'), az = cue(id, 'crowd together as they approach zero'), dl = cap(id, cue(id, 'a diagram like this'));
	const tags = [
		{n: 2, text: `n = 2: ${ev(LEVEL_EV[2]).replace('-', '−')} eV`, y: SLOT[2], o: prog(f, l2, 12)},
		{n: 3, text: `n = 3: ${ev(LEVEL_EV[3])} eV`, y: SLOT[3], o: prog(f, l3, 12)},
		{n: 4, text: `n = 4: ${ev(LEVEL_EV[4])} eV`, y: SLOT[4], o: prog(f, l4, 12)},
		{n: 5, text: `n = 5: ${ev(LEVEL_EV[5])} eV`, y: SLOT[5], o: prog(f, l4 + 30, 12)},
		{n: 6, text: `n = 6: ${ev(LEVEL_EV[6])} eV`, y: SLOT[6], o: prog(f, l4 + 40, 12)},
	];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<HLevels g={L3} levels={[1, 2, 3, 4, 5, 6]} color={NAVY.stroke} infLabel="" />
				<line x1={L3.x - 60} y1={L3.bot + 20} x2={L3.x - 60} y2={L3.top - 40} stroke={INK} strokeWidth={4} /><path d={`M${L3.x - 60},${L3.top - 52} l-10,18 l20,0 Z`} fill={INK} />
				<LevelTags g={L3} tags={tags} />
				{f >= az ? [2, 3, 4, 5].map((n, i) => <line key={n} x1={L3.x + 40 + 30 * i} y1={yOf(L3, n)} x2={L3.x + 40 + 30 * i} y2={yOf(L3, n + 1)} stroke={ORANGE.stroke} strokeWidth={6} opacity={prog(f, az + 6 * i, 12)} />) : null}
				{f >= dl ? <rect x={L3.x - 230} y={L3.top - 70} width={L3.w + 640} height={L3.bot - L3.top + 110} rx={14} fill="none" stroke={INK} strokeWidth={3} opacity={prog(f, dl, 12)} /> : null}
			</FrameSvg>
			<Lbl x={L3.x - 80} y={L3.top - 40} at={0} color={INK} size={26} anchor="end">E (eV)</Lbl>
			<Lbl x={L3.x - 80} y={L3.top + 6} at={0} color={NAVY.ink} size={26} anchor="end">0 (n = ∞)</Lbl>
			<Lbl x={L3.x - 80} y={L3.bot + 6} at={0} color={NAVY.ink} size={26} anchor="end">−13.6</Lbl>
			<Lbl x={L3.x + L3.w + 70} y={L3.bot} at={0} color={NAVY.ink} size={28}>n = 1: −13.60 eV (ground state)</Lbl>
			<Chip x={1260} y={460} at={fm} size={34} color={NAVY.ink}>Eₙ = −13.6 / n² eV (Bohr)</Chip>
			<Lbl x={1260} y={600} at={az} color={INK} size={30}>levels crowd towards 0</Lbl>
			<HandTag x={1260} y={660} text="gaps shrink upwards" at={az + 20} size={34} color={ORANGE.ink} />
			<Lbl x={1260} y={760} at={dl} color={INK} size={30}>exam data: a level diagram</Lbl>
			<HandTag x={1260} y={820} text="usually given" at={dl + 10} size={36} color={NAVY.ink} />
		</>
	);
};

// ---------- small ladder for the working stages ----------
export const LS: LevelsGeom = {x: 130, w: 240, top: 230, bot: 880};
export const SmallLadder: React.FC<{from?: number; to?: number; color?: string; f: number; at?: number; labels?: boolean}> = ({from = 3, to = 2, color = RED_C, f, at = -30, labels = true}) => (
	<g>
		<HLevels g={LS} levels={[1, 2, 3, 4]} color={NAVY.stroke} infLabel="" size={24} />
		<text x={LS.x + LS.w + 10} y={LS.bot + 8} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: NAVY.ink}}>n = 1</text>
		<text x={LS.x + LS.w + 10} y={yOf(LS, 2) + 8} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: NAVY.ink}}>n = 2</text>
		<DropArrow g={LS} x={LS.x + 150} from={from} to={to} color={color} u={prog(f, at, 16)} width={7} />
		{labels ? <><text x={LS.x - 10} y={yOf(LS, 3) + 8} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: NAVY.ink}}>E₃</text><text x={LS.x - 10} y={yOf(LS, 2) + 8} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: NAVY.ink}}>E₂</text></> : null}
	</g>
);

// ---------- 4. the red line from the gap: energy ----------
export const S04: React.FC = () => {
	const id = 'gap-energy';
	const f = useCurrentFrame();
	const tr = cue(id, 'Take the red line'), pg = cue(id, "The photon's energy is the gap"), vo = cue(id, 'is one point eight nine electron volts'), gj = cue(id, 'To get joules'), jo = cap(id, cue(id, 'giving three point zero three'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><SmallLadder f={f} at={tr} /></FrameSvg>
			<HandTag x={LS.x + LS.w + 20} y={(yOf(LS, 2) + yOf(LS, 3)) / 2} text="ΔE" at={pg} size={34} color={ORANGE.ink} marks={[{kind: 'brace', x: LS.x + LS.w + 6, y1: yOf(LS, 3), y2: yOf(LS, 2), facing: 'right'}]} />
			<Lbl x={LS.x} y={LS.top - 20} at={0} color={GREY.ink} size={26}>3 → 2: the red line</Lbl>
			<Strip x={440} y={190} at={0} size={34}>Predict the wavelength of the 3 → 2 photon</Strip>
			<Strip x={440} y={270} at={0} size={34}>E = hf = hc/λ;  photon energy = E<sub>i</sub> − E<sub>f</sub></Strip>
			<Givens x={440} y={340} w={1380} at={0} size={30} lines={['E₃ = −1.51 eV, E₂ = −3.40 eV (diagram)', 'h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, 1 eV = 1.602 × 10⁻¹⁹ J (data sheet)']} />
			<div style={{position: 'absolute', left: 440, top: 520, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Row at={vo - 10} ageAt={jo} size={44}>{`E = E₃ − E₂ = −1.51 − (−3.40) = ${ev(GAP32)} eV`}</Row>
				<Row at={jo} size={46}><AnswerBox at={jo + 6}>{`E = ${ev(GAP32)} × 1.602 × 10⁻¹⁹ = ${sci(GAP32_J, 2)} J`}</AnswerBox></Row>
			</div>
			<HandTag x={1200} y={740} text="eV → J" at={gj} size={38} color={ORANGE.ink} />
			<FrameSvg><LineStrip x={440} y={830} w={900} h={56} lines={BRIGHT} /></FrameSvg>
			<Lbl x={440} y={810} at={0} color={INK} size={26}>measured hydrogen lines: the target</Lbl>
			<FrameSvg><GlowTube x={1660} y={400} h={400} /></FrameSvg>
			<Lbl x={1660 + tubeW(400) / 2} y={830} at={0} color={GREY.ink} size={26} anchor="middle">hydrogen tube</Lbl>
		</>
	);
};

// ---------- 5. the red line from the gap: wavelength ----------
const ST5 = {x: 440, y: 780, w: 900, h: 70};
export const S05: React.FC = () => {
	const id = 'gap-wavelength';
	const f = useCurrentFrame();
	const lh = cue(id, 'so lambda equals h c over E'), sm = cue(id, 'is six point five six times ten to the minus seven metres'), sn = cue(id, 'six hundred and fifty six nanometres'), me = cap(id, cue(id, 'the red line we measure'));
	const fly = prog(f, sn, 30);
	const x656 = stripX(ST5.x, ST5.w, BRIGHT[0]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SmallLadder f={f} />
				<LineStrip x={ST5.x} y={ST5.y} w={ST5.w} h={ST5.h} lines={BRIGHT} />
				{f >= sn && fly < 1 ? <Packet x={LS.x + 150 + (x656 - LS.x - 150) * fly} y={460 + (ST5.y + 35 - 460) * fly} len={60} color={RED_C} /> : null}
				{f >= me ? <Mark x={x656 + 50} y={ST5.y - 20} at={me} kind="tick" color={INK} size={40} /> : null}
			</FrameSvg>
			<Strip x={440} y={190} at={0} size={34}>Predict the wavelength of the 3 → 2 photon</Strip>
			<Strip x={1240} y={190} at={0} size={34}>E = hc/λ</Strip>
			<Givens x={440} y={270} w={1180} at={0} size={30} lines={[`kept: E = ${sci(GAP32_J, 2)} J (stage 1)`, 'h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹ (data sheet)']} />
			<FrameSvg><GlowTube x={1660} y={400} h={400} /></FrameSvg>
			<Lbl x={1660 + tubeW(400) / 2} y={830} at={0} color={GREY.ink} size={26} anchor="middle">hydrogen tube</Lbl>
			<div style={{position: 'absolute', left: 440, top: 420, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={lh} ageAt={sm} size={44}>λ = hc / E</Row>
				<Row at={sm - 10} ageAt={sn + 20} size={38}>{`λ = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (${sci(GAP32_J, 2)}) = ${sci(LAM_GAP, 2)} m`}</Row>
				<Row at={sn} size={48}><AnswerBox at={sn + 6}>{`λ = ${fx(LAM_GAP * 1e9)} nm`}</AnswerBox></Row>
			</div>
			<CrossedChip x={1020} y={640} at={sm + 20} crossAt={sm + 40} size={28} caption="joules, not eV">{`λ = hc / ${ev(GAP32)} = ${sci(SLIP_EV, 2)} m`}</CrossedChip>
			<Lbl x={ST5.x} y={ST5.y - 22} at={0} color={INK} size={26}>measured hydrogen lines</Lbl>
			<Lbl x={x656 + 80} y={ST5.y - 22} at={me} color={INK} size={28}>predicted = measured</Lbl>
		</>
	);
};

// ---------- 6. the shortcut: where the Rydberg equation comes from ----------
export const S06: React.FC = () => {
	const id = 'rydberg-derived';
	const f = useCurrentFrame();
	const ag = cue(id, 'any gap is thirteen point six electron volts'), dg = cue(id, 'Dividing a gap by h c gives one over lambda'), rc = cue(id, 'the Rydberg constant'), ol = cue(id, 'So one over lambda equals R'), fs = cap(id, cue(id, 'formula sheet'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><SmallLadder f={f} labels={false} /></FrameSvg>
			<Lbl x={LS.x} y={LS.top - 20} at={0} color={GREY.ink} size={26}>every level: −13.6/n² eV</Lbl>
			<Strip x={440} y={190} at={0} size={32}>Find 1/λ straight from Eₙ = −13.6/n² eV</Strip>
			<Chip x={440} y={680} at={0} out={ol} size={28} color={INK}>step 1: gap → E (eV → J)</Chip>
			<Chip x={440} y={750} at={0} out={ol} size={28} color={INK}>step 2: λ = hc/E</Chip>
			<FrameSvg><GlowTube x={1660} y={470} h={380} /><LineStrip x={440} y={870} w={900} h={44} lines={BRIGHT} /></FrameSvg>
			<div style={{position: 'absolute', left: 440, top: 270, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={ag} ageAt={rc} size={38}>E<sub>i</sub> − E<sub>f</sub> = −13.6/n<sub>i</sub>² − (−13.6/n<sub>f</sub>²) = 13.6 (1/n<sub>f</sub>² − 1/n<sub>i</sub>²) eV</Row>
				<Row at={dg} ageAt={rc} size={40}>1/λ = E / hc</Row>
				<Row at={rc} ageAt={ol} size={36}>13.6 eV / hc = (13.6 × 1.602 × 10⁻¹⁹) / (6.626 × 10⁻³⁴ × 3.00 × 10⁸)</Row>
				<Row at={rc + 10} ageAt={ol} size={36}>{`= ${sci(R_FROM, 3)} m⁻¹`}</Row>
				<Row at={ol} size={52}><AnswerBox at={ol + 6}>1/λ = R (1/n<sub>f</sub>² − 1/n<sub>i</sub>²)</AnswerBox></Row>
			</div>
			<Chip x={1060} y={680} at={rc + 10} size={30} color={INK}>data sheet: R = 1.097 × 10⁷ m⁻¹</Chip>
			<HandTag x={1060} y={780} text="13.6 is rounded" at={rc + 30} size={32} color={GREY.ink} />
			<Lbl x={440} y={830} at={ol + 10} color={INK} size={28}>nf: final (lower) level;  ni: initial (upper) level</Lbl>
			<Lbl x={440} y={850} at={0} out={ol + 10} color={INK} size={26}>measured lines: what the shortcut must give</Lbl>
			<HandTag x={440} y={720} text="both steps in one" at={ol + 20} size={34} color={INK} />
			<Chip x={1060} y={840} at={fs} size={28} color={AMBER.ink}>HSC formula sheet</Chip>
		</>
	);
};
