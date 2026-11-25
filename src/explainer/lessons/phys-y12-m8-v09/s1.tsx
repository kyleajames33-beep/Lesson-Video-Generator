// Scenes 1 to 6: the hook (last time's gold nucleus with its missing mass, helium beside it, the rejected p + e pairs,
// "n?" in both gaps, a neutral disc that does not bend), the beryllium radiation (the painted source and lead bricks,
// a straight stream through a field region), the paraffin protons (the wax and the ionisation chamber join the beam
// line; the wax close-up; Chadwick's fastest proton and its 5.7 MeV), the trouble with photons (a photon bouncing off
// a heavy proton keeps most of its energy; the bars against the 16 MeV available), nitrogen makes it worse (the gas cell
// on the beam line, then two photon energies for one beam) and Chadwick's neutron (an equal-mass head-on hit on the
// collisions engine, two steel balls, the full energy hand-over).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {GOLD_RING} from '../../physics/atom/elements';
import {STEEL_BALL} from '../../physics/light/frames';
import {Arrow} from '../../physics/light/em';
import {PO_BE, headOnAt, headOnRun} from '../../physics/atom/neutron';
import {lazy} from '../../sims';
import {BARS, GN, HandoffBoard08, M8V08FinalFrame} from '../phys-y12-m8-v08/s3';
import {AU_A, AU_Z, E_AVAIL, E_GAMMA, E_GAMMA_N, HEAD, HEAD_SIZE, HE_A, HE_Z, K_P_MEV, M_P, PHOTON_SHARE, SLIP_MEV, V_P, cap, cue} from './common';
import {AMBER, AlphaDots, BL, BLUE, BeamPlates, FieldRegion, GREY, Gam, Givens, INK, Lbl, N, NAVY, NUC_RED, Nit, ORANGE, P, RED, Stream, TEAL, VBar, WaxChains, blPts, flicker, fx, sci} from './parts';

const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
const MEV = (v: number) => fx(v, 1);

// ---------- 1. hook ----------
const HE = {x: 960, yQ: 790, yM: 852, h: 40, unit: 125};
const INS1 = {x: 1530, y: 740, w: 290, h: 200};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const sn = cue(id, 'seventy nine protons'), hn = cue(id, 'a hundred and ninety seven'), he = cue(id, 'Helium has the charge of two protons'), pe = cue(id, 'paired with electrons'), hv = cue(id, 'something heavy with no charge'), bd = cue(id, "doesn't bend in fields"), nu = cap(id, cue(id, 'in the nucleus'));
	if (f < 1) return <M8V08FinalFrame />;
	const red = BARS.w * (AU_Z / AU_A), gapX0 = BARS.x + red, gapW = BARS.w - red;
	const peO = prog(f, pe, 14) * (1 - prog(f, pe + 70, 16));
	const nO = prog(f, hv, 16);
	const u = prog(f, bd + 6, 70);
	return (
		<>
			<HandoffBoard08 f={0} final heading={false} chip={false} />
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={GOLD_RING} p={{x: 1560, y: 176, w: 240}} />
				{pulseOf(f, sn, 36) > 0 ? <rect x={BARS.x - 8} y={BARS.yQ - 8} width={BARS.w + 16} height={BARS.h + 16} rx={12} fill="none" stroke={RED.stroke} strokeWidth={6} opacity={pulseOf(f, sn, 36)} /> : null}
				{pulseOf(f, hn, 36) > 0 ? <rect x={gapX0 - 6} y={BARS.yM - 8} width={gapW + 14} height={BARS.h + 16} rx={12} fill="none" stroke={GREY.stroke} strokeWidth={6} opacity={pulseOf(f, hn, 36)} /> : null}
				{peO > 0.001 ? <g opacity={peO}>{Array.from({length: 9}, (_, i) => <g key={i}><circle cx={gapX0 + 36 + i * 64} cy={BARS.yM + 30} r={13} fill={NUC_RED} stroke={INK} strokeWidth={1.5} /><circle cx={gapX0 + 58 + i * 64} cy={BARS.yM + 30} r={7} fill={NAVY.stroke} /></g>)}</g> : null}
				{nO > 0.001 ? <g opacity={nO}>{Array.from({length: 9}, (_, i) => <N key={i} x={gapX0 + 36 + i * 64} y={BARS.yM + 30} r={22} text="n?" />)}</g> : null}
				{f >= he ? <g opacity={prog(f, he, 14)}>
					<circle cx={830} cy={HE.yM - 10} r={52} fill="#f2b9ae" stroke={NUC_RED} strokeWidth={4} />
					<P x={808} y={HE.yM - 26} r={17} /><P x={852} y={HE.yM + 6} r={17} />
					{[[852, HE.yM - 26], [808, HE.yM + 6]].map(([x, y], i) => nO > 0.5 ? <N key={i} x={x} y={y} r={17} text="n?" /> : <circle key={i} cx={x} cy={y} r={15} fill="none" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="6 5" />)}
					<rect x={HE.x} y={HE.yQ} width={HE.unit * 2} height={HE.h} rx={6} fill={RED.stroke} />
					<rect x={HE.x} y={HE.yM} width={HE.unit * 4} height={HE.h} rx={6} fill="none" stroke={INK} strokeWidth={2.5} />
					<rect x={HE.x} y={HE.yM} width={HE.unit * 2} height={HE.h} rx={6} fill={RED.stroke} />
					<rect x={HE.x + HE.unit * 2} y={HE.yM} width={HE.unit * 2} height={HE.h} rx={6} fill="none" stroke={GREY.stroke} strokeWidth={4} strokeDasharray="12 8" />
					{nO > 0.001 ? <g opacity={nO}><N x={HE.x + HE.unit * 2.5} y={HE.yM + 20} r={17} text="n?" /><N x={HE.x + HE.unit * 3.5} y={HE.yM + 20} r={17} text="n?" /></g> : null}
				</g> : null}
				{f >= bd ? <g opacity={prog(f, bd, 12)}>
					<rect x={INS1.x} y={INS1.y} width={INS1.w} height={INS1.h} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
					<FieldRegion x={INS1.x + 40} y={INS1.y + 20} w={210} h={130} />
					<line x1={INS1.x + 14} y1={INS1.y + 85} x2={INS1.x + 14 + 262 * u} y2={INS1.y + 85} stroke={GREY.stroke} strokeWidth={4} strokeDasharray="10 7" />
					<N x={INS1.x + 14 + 262 * u} y={INS1.y + 85} r={16} />
				</g> : null}
			</FrameSvg>
			<HandTag x={1500} y={260} text="gold" at={4} size={34} color={AMBER.ink} anchor="end" />
			<Lbl x={HE.x - 200} y={HE.yQ - 36} at={he} color={RED.ink} size={28}>{`helium: +${HE_Z}e`}</Lbl>
			<Lbl x={HE.x + HE.unit * 2 + 16} y={HE.yQ + 22} at={he + 6} color={RED.ink} size={26}>{`${HE_Z} protons → +${HE_Z}e ✓`}</Lbl>
			<Lbl x={HE.x + HE.unit * 4 - 4} y={HE.yM + HE.h + 30} at={he + 10} color={INK} size={26} anchor="end">{`${HE_A} mₚ`}</Lbl>
			<Lbl x={HE.x + 10} y={HE.yM + 22} at={he + 10} color={'#ffffff'} size={24} bg={false}>{`${HE_Z} mₚ`}</Lbl>
			<CrossedChip x={96} y={862} at={pe + 30} crossAt={pe + 58} size={28} out={hv}>{'p + e pairs: clashed with other measurements'}</CrossedChip>
			<HandTag x={0} y={0} at={hv + 20} color={GREY.stroke} marks={[{kind: 'circle', cx: gapX0 + gapW / 2, cy: BARS.yM + 30, rx: gapW / 2 + 30, ry: 52}]} />
			<Lbl x={INS1.x + INS1.w / 2} y={INS1.y + INS1.h - 22} at={bd + 20} color={GREY.ink} size={26} anchor="middle">no charge: no bend</Lbl>
			<HandTag x={GN.x} y={GN.y + GN.r + 92} text="something heavy, no charge" at={nu} size={32} color={GREY.ink} anchor="middle" />
		</>
	);
};

// ---------- 2. the beryllium radiation ----------
const FR2 = {x: 1000, y: 470, w: 720, h: 180};
export const S02: React.FC = () => {
	const id = 'beryllium-radiation';
	const f = useCurrentFrame();
	const bb = cue(id, 'Walther Bothe and Herbert Becker'), ap = cue(id, 'alpha particles from polonium'), pl = cue(id, 'passed through several centimetres of lead'), db = cue(id, "didn't bend it"), nc = cue(id, 'so it had no charge'), gr = cue(id, 'gamma rays, high-energy photons'), wa = cap(id, cue(id, 'assumed it was'));
	const {po, be} = blPts();
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<BeamPlates />
				<AlphaDots t={f} opacity={prog(f, ap, 12)} />
				<FieldRegion x={FR2.x} y={FR2.y} w={FR2.w} h={FR2.h} />
				<Stream x1={1800} t={f} kind={f >= wa ? 'gamma' : 'unknown'} draw={prog(f, pl, 40)} />
			</FrameSvg>
			<Lbl x={96} y={250} at={bb} color={INK} size={30}>Bothe and Becker, 1930</Lbl>
			<Chip x={1000} y={240} at={0} out={pl} size={30} color={INK}>what comes out of the beryllium?</Chip>
			<Lbl x={FR2.x + FR2.w / 2} y={FR2.y - 30} at={0} out={db} color={BLUE.ink} size={26} anchor="middle">a test region: electric and magnetic fields</Lbl>
			<Lbl x={po[0]} y={400} at={ap} color={AMBER.ink} size={28} anchor="middle">polonium (α source)</Lbl>
			<Lbl x={be[0] + 30} y={720} at={ap + 10} color={INK} size={28} anchor="middle">beryllium</Lbl>
			<HandTag x={0} y={0} at={ap + 14} color={AMBER.stroke} marks={[{kind: 'arrow', from: [po[0] + 10, 420], to: [po[0] + 4, po[1] - 40], bend: 0}, {kind: 'arrow', from: [be[0] + 30, 694], to: [be[0] + 6, be[1] + 60], bend: 0}]} />
			<Lbl x={750} y={470} at={pl + 20} color={GREY.ink} size={28} anchor="middle">several cm of lead</Lbl>
			<Lbl x={1500} y={510} at={pl + 30} out={wa} color={GREY.ink} size={30} anchor="middle">radiation?</Lbl>
			<HandTag x={600} y={700} text="straight through lead" at={pl + 40} out={db} size={32} color={GREY.ink} />
			<Lbl x={FR2.x} y={FR2.y + FR2.h + 40} at={db + 10} color={BLUE.ink} size={26}>electric field (blue) and magnetic field into page (×)</Lbl>
			<div style={{position: 'absolute', left: 96, top: 780}}><Row at={nc - 6} size={40}><AnswerBox at={nc}>no deflection → no charge</AnswerBox></Row></div>
			<HandTag x={1060} y={430} text="no bend: no charge" at={nc + 10} size={32} color={BLUE.ink} marks={[{kind: 'brace', x: FR2.x - 10, y1: FR2.y, y2: FR2.y + FR2.h, facing: 'left'}]} />
			<Chip x={96} y={870} at={gr} size={28} color={INK}>known then: gamma rays = high-energy photons (uncharged, penetrating)</Chip>
			<Lbl x={1500} y={510} at={wa} color={AMBER.ink} size={30} anchor="middle">γ? (gamma photons)</Lbl>
			<HandTag x={1220} y={800} text="gamma? (a guess)" at={wa} size={34} color={AMBER.ink} />
		</>
	);
};

// ---------- 3. the paraffin protons ----------
const INS3 = {x: 600, y: 176, w: 580, h: 224};
export const S03: React.FC = () => {
	const id = 'paraffin-protons';
	const f = useCurrentFrame();
	const cj = cue(id, 'put paraffin wax in its path'), fh = cue(id, 'full of hydrogen'), kp = cue(id, 'knocked protons out of it'), jc = cue(id, 'measured them more carefully'), vo = cue(id, 'five point seven million electron volts'), pc = cue(id, 'Protons are charged'), hd = cap(id, cue(id, 'what could hit them that hard'));
	const {slabR, ionWin} = blPts();
	const wax = prog(f, cj, 16);
	const pr = (i: number) => { const u = ((f - kp) / 40 + i / 3) % 1; return f < kp ? -1 : u; };
	const reading = f >= kp ? flicker(f, 0.55) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<BeamPlates wax={wax} ion={prog(f, kp, 14)} reading={reading} />
				<Stream x1={slabR[0] - 74} t={f} kind="gamma" />
				{[0, 1, 2].map(i => { const u = pr(i); if (u < 0) return null; const x = slabR[0] + 6 + (ionWin[0] - slabR[0] - 20) * u, y = BL.axis + (i - 1) * 34 * (1 - u); return <g key={i}><P x={x} y={y} r={14} />{i === 1 ? <Arrow from={[x + 18, y]} to={[x + 64, y]} color={TEAL.stroke} width={5} head={14} /> : null}</g>; })}
				{f >= fh ? <g opacity={prog(f, fh, 12)}>
					<rect x={INS3.x} y={INS3.y} width={INS3.w} height={INS3.h} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
					<WaxChains x={INS3.x + 20} y={INS3.y + 50} w={INS3.w - 40} rows={2} hiH={prog(f, fh + 30, 12)} />
				</g> : null}
				{f >= vo ? <VBar x={600} base={930} k={14} v={K_P_MEV} w={60} color={ORANGE.stroke} soft={ORANGE.soft} grow={prog(f, vo, 20)} /> : null}
				{f >= hd ? <text x={1500} y={500} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 64, fill: GREY.ink}} opacity={prog(f, hd, 12)}>?</text> : null}
			</FrameSvg>
			<Lbl x={96} y={250} at={cj} color={INK} size={30}>Curie and Joliot, 1932</Lbl>
			<Lbl x={1060} y={790} at={cj + 10} color={INK} size={28} anchor="middle">paraffin wax</Lbl>
			<Lbl x={1500} y={500} at={0} out={hd} color={AMBER.ink} size={28} anchor="middle">γ?</Lbl>
			<Lbl x={INS3.x + INS3.w / 2} y={INS3.y + INS3.h - 16} at={fh + 30} color={RED.ink} size={26} anchor="middle">H nuclei (pink) = protons</Lbl>
			<Lbl x={1500} y={372} at={kp + 10} color={INK} size={26} anchor="middle">ionisation chamber</Lbl>
			<Lbl x={96} y={310} at={jc} color={INK} size={30}>Chadwick, Cambridge, 1932</Lbl>
			<HandTag x={0} y={0} at={jc + 10} color={TEAL.stroke} marks={[{kind: 'circle', cx: slabR[0] + 70, cy: BL.axis, rx: 50, ry: 44}]} />
			<Lbl x={1250} y={650} at={jc + 14} color={TEAL.ink} size={28}>fastest (Chadwick): vₚ = 3.3 × 10⁷ m s⁻¹</Lbl>
			<Givens x={96} y={770} w={470} at={jc + 20} size={26} lines={['vₚ (max) = 3.3 × 10⁷ m s⁻¹', 'mₚ = 1.673 × 10⁻²⁷ kg (data sheet)']} />
			<div style={{position: 'absolute', left: 690, top: 770, display: 'flex', flexDirection: 'column', gap: 6, width: 1130}}>
				<Row at={vo - 20} ageAt={vo + 40} size={34}>{`K = ½mv² = ½(1.673 × 10⁻²⁷)(3.3 × 10⁷)² = ${sci(0.5 * M_P * V_P * V_P, 1)} J`}</Row>
				<Row at={vo + 20} size={44}><AnswerBox at={vo + 26}>{`K ≈ ${MEV(K_P_MEV)} MeV`}</AnswerBox></Row>
			</div>
			<Lbl x={630} y={940 - 14 * K_P_MEV - 40} at={vo + 20} color={ORANGE.ink} size={26} anchor="middle">{`${MEV(K_P_MEV)} MeV`}</Lbl>
			<CrossedChip x={1090} y={850} at={vo + 40} crossAt={vo + 60} size={28} caption="don't drop the ½">{`K = mv² = ${fx(SLIP_MEV)} MeV`}</CrossedChip>
			<Chip x={1250} y={690} at={pc} size={28} color={RED.ink}>protons: charged, easy to detect</Chip>
		</>
	);
};

// ---------- 4. the trouble with photons ----------
const ET = {x: 96, y: 190, w: 860, h: 360};
const PB = {x: 96, y: 590, w: 860, h: 300};
const BARS4 = {base: 880, k: 10, x: 1120};
export const S04: React.FC = () => {
	const id = 'photon-trouble';
	const f = useCurrentFrame();
	const nm = cue(id, 'A photon has no mass'), sh = cue(id, 'only a small share of its energy'), pp = cue(id, 'like a ping-pong ball bouncing off a bowling ball'), ff = cue(id, 'would need about fifty five million'), sx = cap(id, cue(id, 'at most about sixteen'));
	const inU = prog(f, nm, 50), back = prog(f, sh, 50);
	const gx = back > 0 ? ET.x + 520 - 380 * back : ET.x + 120 + 400 * inU;
	const px = ET.x + 600 + 90 * back;
	const roll = prog(f, pp + 6, 50);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={ET.x} y={ET.y} width={ET.w} height={ET.h} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<line x1={ET.x + 30} y1={ET.y + 200} x2={ET.x + ET.w - 30} y2={ET.y + 200} stroke="rgba(60,45,20,0.25)" strokeWidth={2} />
				<Gam x={gx} y={ET.y + 200} deg={back > 0 ? 180 : 0} len={80} />
				<P x={px} y={ET.y + 200} r={56} />
				<VBar x={gx - 30} base={ET.y + 330} k={1.6} v={back > 0.5 ? E_GAMMA * (1 - PHOTON_SHARE) : E_GAMMA} w={40} color={AMBER.stroke} soft={AMBER.soft} />
				{back > 0.3 ? <VBar x={px - 20} base={ET.y + 330} k={1.6} v={K_P_MEV} w={40} color={ORANGE.stroke} soft={ORANGE.soft} grow={prog(f, sh + 15, 16)} /> : null}
				{back > 0.6 ? <Arrow from={[px + 64, ET.y + 200]} to={[px + 110, ET.y + 200]} color={TEAL.stroke} width={5} head={14} /> : null}
				<rect x={PB.x} y={PB.y} width={PB.w} height={PB.h} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} opacity={prog(f, pp, 12)} />
				{f >= pp ? <g opacity={prog(f, pp, 12)}>
					<circle cx={PB.x + 560 + 10 * Math.max(0, roll - 0.5)} cy={PB.y + 160} r={90} fill="#3a3a44" stroke={INK} strokeWidth={3} />
					<circle cx={roll < 0.5 ? PB.x + 120 + 680 * roll : PB.x + 460 - 600 * (roll - 0.5)} cy={PB.y + 200} r={20} fill="#ffffff" stroke={INK} strokeWidth={2.5} />
				</g> : null}
				<LPlate spec={PO_BE} p={{x: 1560, y: 186, w: 260}} />
				{f >= ff ? <g>
					<VBar x={BARS4.x} base={BARS4.base} k={BARS4.k} v={E_GAMMA} w={150} color={AMBER.stroke} soft={AMBER.soft} grow={prog(f, ff, 30)} hatchFrom={f >= sx + 6 ? E_AVAIL : undefined} />
					<VBar x={BARS4.x + 330} base={BARS4.base} k={BARS4.k} v={K_P_MEV} w={150} color={ORANGE.stroke} soft={ORANGE.soft} />
					<line x1={BARS4.x - 30} y1={BARS4.base} x2={BARS4.x + 520} y2={BARS4.base} stroke={INK} strokeWidth={3} />
				</g> : null}
				{f >= sx ? <line x1={BARS4.x - 30} y1={BARS4.base - BARS4.k * E_AVAIL} x2={BARS4.x + 600} y2={BARS4.base - BARS4.k * E_AVAIL} stroke={GREY.stroke} strokeWidth={5} strokeDasharray="14 8" opacity={prog(f, sx, 12)} /> : null}
			</FrameSvg>
			<Lbl x={ET.x + 20} y={ET.y + 36} at={nm} color={AMBER.ink} size={28}>γ: no mass</Lbl>
			<Lbl x={px} y={ET.y + 300} at={nm} color={RED.ink} size={26} anchor="middle">proton (heavy)</Lbl>
			<HandTag x={ET.x + 380} y={ET.y + 60} text="massless on heavy: small share" at={sh + 30} size={32} color={AMBER.ink} marks={[{kind: 'brace', x: px + 30, y1: ET.y + 330 - 1.6 * K_P_MEV, y2: ET.y + 330, facing: 'right'}]} />
			<Lbl x={PB.x + 20} y={PB.y + 36} at={pp} color={INK} size={26}>ping-pong ball on a bowling ball: the big ball barely moves</Lbl>
			<Lbl x={BARS4.x + 75} y={BARS4.base - BARS4.k * E_GAMMA - 30} at={ff + 20} color={AMBER.ink} size={28} anchor="middle">{`photon needed ≈ ${fx(E_GAMMA)} MeV`}</Lbl>
			<Lbl x={BARS4.x + 405} y={BARS4.base - BARS4.k * K_P_MEV - 30} at={ff} color={ORANGE.ink} size={28} anchor="middle">{`proton ${MEV(K_P_MEV)} MeV`}</Lbl>
			<Lbl x={BARS4.x} y={BARS4.base + 40} at={ff} color={GREY.ink} size={26}>photon bouncing straight back off a proton at rest</Lbl>
			<Lbl x={BARS4.x + 200} y={BARS4.base - BARS4.k * E_AVAIL - 22} at={sx} color={GREY.ink} size={26}>{`≈ ${fx(E_AVAIL)} MeV: most α + Be can release`}</Lbl>
			<HandTag x={BARS4.x + 200} y={BARS4.base - BARS4.k * 40} text="not available" at={sx + 8} size={34} color={GREY.ink} />
		</>
	);
};

// ---------- 5. nitrogen makes it worse ----------
const HB = {x0: 380, y: 520, k: 12, h: 70};
export const S05: React.FC = () => {
	const id = 'nitrogen-contradiction';
	const f = useCurrentFrame();
	const ng = cue(id, 'aimed the radiation at nitrogen gas'), fn = cue(id, 'measured the fastest nitrogen recoils'), nm = cue(id, 'about ninety million electron volts'), ob = cue(id, "One beam can't be"), en = cue(id, "didn't fit the energy"), it = cap(id, cue(id, "didn't fit itself"));
	const {cellL, cellR, ionWin} = blPts();
	const shrink = prog(f, nm - 10, 24), s = 1 - 0.5 * shrink;
	const nOut = (i: number) => (f < fn ? -1 : ((f - fn) / 60 + i / 2) % 1);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g transform={`translate(${96 * (1 - s)} ${393 * (1 - s) - 213 * shrink}) scale(${s})`}>
					<BeamPlates cell={1} ion={1} reading={f >= fn ? flicker(f, 0.3) : 0} />
					<Stream x1={cellL[0]} t={f} kind="gamma" />
					{[0, 1].map(i => { const u = nOut(i); if (u < 0) return null; const x = cellR[0] - 120 + (ionWin[0] - cellR[0] + 100) * u; return <g key={i}><Nit x={x} y={BL.axis + (i ? 20 : -20)} r={20} /><Arrow from={[x + 24, BL.axis + (i ? 20 : -20)]} to={[x + 50, BL.axis + (i ? 20 : -20)]} color={TEAL.stroke} width={5} head={12} /></g>; })}
				</g>
				{f >= nm ? <g opacity={prog(f, nm, 14)}>
					<line x1={HB.x0} y1={HB.y - 40} x2={HB.x0} y2={HB.y + 280} stroke={INK} strokeWidth={3} />
					<rect x={HB.x0} y={HB.y} width={HB.k * E_GAMMA * prog(f, nm, 24)} height={HB.h} rx={8} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3} />
					<rect x={HB.x0} y={HB.y + 150} width={HB.k * E_GAMMA_N * prog(f, nm + 12, 24)} height={HB.h} rx={8} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3} />
				</g> : null}
				{f >= en ? <line x1={HB.x0 + HB.k * E_AVAIL} y1={HB.y - 50} x2={HB.x0 + HB.k * E_AVAIL} y2={HB.y + 290} stroke={GREY.stroke} strokeWidth={5} strokeDasharray="14 8" opacity={prog(f, en, 12)} /> : null}
				{f >= ob ? <text x={1380} y={HB.y + 135} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 90 + 16 * pulseOf(f, it, 30), fill: INK}} opacity={prog(f, ob, 12)}>≠</text> : null}
			</FrameSvg>
			<Lbl x={(cellL[0] + cellR[0]) / 2} y={BL.axis + 190} at={ng} out={nm - 10} color={INK} size={28} anchor="middle">nitrogen gas</Lbl>
			<Lbl x={1000} y={BL.axis - 210} at={fn + 10} out={nm - 10} color={TEAL.ink} size={28} anchor="middle">fastest nitrogen recoils (head-on)</Lbl>
			<Lbl x={96} y={250} at={ng} out={nm - 10} color={INK} size={28}>Chadwick: the same radiation at a second target</Lbl>
			<Lbl x={1000} y={250} at={nm} color={INK} size={28}>one beam, two targets, the same photons?</Lbl>
			<Lbl x={HB.x0 - 20} y={HB.y + 36} at={nm} color={RED.ink} size={28} anchor="end">from protons</Lbl>
			<Lbl x={HB.x0 - 20} y={HB.y + 186} at={nm + 12} color={RED.ink} size={28} anchor="end">from nitrogen</Lbl>
			<Lbl x={HB.x0 + HB.k * E_GAMMA + 20} y={HB.y + 36} at={nm + 20} color={AMBER.ink} size={30}>{`≈ ${fx(E_GAMMA)} MeV`}</Lbl>
			<Lbl x={HB.x0 + HB.k * E_GAMMA_N + 20} y={HB.y + 186} at={nm + 30} color={AMBER.ink} size={30}>{`≈ ${E_GAMMA_N} MeV`}</Lbl>
			<Lbl x={HB.x0 + HB.k * E_GAMMA_N + 20} y={HB.y + 226} at={nm + 30} color={GREY.ink} size={26}>{"(Chadwick's estimate)"}</Lbl>
			<HandTag x={0} y={0} at={ob + 12} color={INK} marks={[{kind: 'circle', cx: 1380, cy: HB.y + 108, rx: 70, ry: 66}]} />
			<Lbl x={HB.x0 + HB.k * E_AVAIL + 14} y={HB.y + 300} at={en} color={GREY.ink} size={26}>{`≈ ${fx(E_AVAIL)} MeV available: both too big for the reaction`}</Lbl>
			<HandTag x={1220} y={HB.y + 330 + 60} text="one beam, two answers" at={it} size={34} color={INK} />
			<CrossedChip x={96} y={874} at={it} crossAt={it + 12} size={30}>the radiation is gamma photons</CrossedChip>
		</>
	);
};

// ---------- 6. Chadwick's neutron ----------
const TR6 = {x: 96, y: 360, w: 860, h: 250};
const BL6 = {x: 96, y: 650, w: 860, h: 230};
const EQ = lazy(() => headOnRun(1, 1, 4, 9));
const EB = {x: 1060, base: 880, k: 18};
export const S06: React.FC = () => {
	const id = 'neutron-proposal';
	const f = useCurrentFrame();
	const up = cue(id, 'a stream of uncharged particles'), mp = cue(id, 'about the mass of a proton'), cn = cue(id, 'He called them neutrons'), ho = cue(id, 'a head-on elastic collision between equal masses'), st = cue(id, 'The moving one stops'), as = cue(id, 'all the speed'), bb = cue(id, 'like one billiard ball hitting another'), sn = cue(id, 'So a neutron with five point seven million'), pr = cap(id, cue(id, 'can hand all of it to a proton') - 30);
	const run = EQ();
	const tA = f < ho ? 0 : f < st ? (3.4 * (f - ho)) / Math.max(1, st - ho) : Math.min(9, 3.4 + (2 * (f - st)) / 30);
	const a = headOnAt(run, tA, TR6.x + 120, 120);
	const tB = f < bb ? 0 : Math.min(9, (3.4 * (f - bb)) / 30);
	const b = headOnAt(run, tB, BL6.x + 120, 120);
	const give = prog(f, pr, 26);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stream x0={96} x1={1820} y={250} t={f} kind={f >= up ? 'neutron' : 'unknown'} />
				<rect x={TR6.x} y={TR6.y} width={TR6.w} height={TR6.h} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<line x1={TR6.x + 40} y1={TR6.y + 150} x2={TR6.x + TR6.w - 40} y2={TR6.y + 150} stroke="rgba(60,45,20,0.3)" strokeWidth={2} />
				<N x={a.x1} y={TR6.y + 120} r={30} />
				<P x={Math.min(TR6.x + TR6.w - 40, a.x2)} y={TR6.y + 120} r={30} />
				{a.hit && a.x2 < TR6.x + TR6.w - 40 ? <Arrow from={[a.x2 + 36, TR6.y + 120]} to={[a.x2 + 130, TR6.y + 120]} color={TEAL.stroke} width={6} head={16} /> : null}
				<rect x={BL6.x} y={BL6.y} width={BL6.w} height={BL6.h} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} opacity={prog(f, bb, 12)} />
				{f >= bb ? <g opacity={prog(f, bb, 12)}>
					<LPlate spec={STEEL_BALL} p={{x: b.x1 - 30, y: BL6.y + 90, w: 60}} />
					<LPlate spec={STEEL_BALL} p={{x: Math.min(BL6.x + BL6.w - 80, b.x2) - 30, y: BL6.y + 90, w: 60}} />
				</g> : null}
				{f >= mp ? <g opacity={prog(f, mp, 12)}>
					<path d="M1440,480 l-24,60 l48,0 Z" fill={GREY.soft} stroke={INK} strokeWidth={2.5} />
					<line x1={1260} y1={470} x2={1620} y2={470} stroke={INK} strokeWidth={6} />
					<N x={1290} y={436} r={30} /><P x={1590} y={436} r={30} />
				</g> : null}
				{f >= sn ? <g opacity={prog(f, sn, 12)}>
					<VBar x={EB.x} base={EB.base} k={EB.k} v={K_P_MEV * (1 - give)} w={110} color={ORANGE.stroke} soft={ORANGE.soft} />
					<VBar x={EB.x + 280} base={EB.base} k={EB.k} v={K_P_MEV * give} w={110} color={ORANGE.stroke} soft={ORANGE.soft} />
					<line x1={EB.x - 20} y1={EB.base} x2={EB.x + 700} y2={EB.base} stroke={INK} strokeWidth={3} />
					<line x1={EB.x - 20} y1={EB.base - EB.k * E_AVAIL} x2={EB.x + 700} y2={EB.base - EB.k * E_AVAIL} stroke={GREY.stroke} strokeWidth={5} strokeDasharray="14 8" />
				</g> : null}
			</FrameSvg>
			<Lbl x={96} y={200} at={up} color={INK} size={28}>{f >= cn ? 'n (neutrons): no charge, mass ≈ mₚ' : 'uncharged particles'}</Lbl>
			<HandTag x={1000} y={316} text="neutron: no charge, mass ≈ mₚ" at={cn} size={32} color={GREY.ink} />
			<Lbl x={1440} y={380} at={mp + 10} color={INK} size={28} anchor="middle">n and p: about the same mass</Lbl>
			<Lbl x={TR6.x + 20} y={TR6.y + 36} at={ho} color={INK} size={28}>head-on, elastic, equal masses (Year 11)</Lbl>
			<Lbl x={TR6.x + 20} y={TR6.y + 210} at={st} color={GREY.ink} size={28}>n stops dead</Lbl>
			<Lbl x={TR6.x + 420} y={TR6.y + 210} at={as} color={TEAL.ink} size={28}>p leaves with all the speed</Lbl>
			<Lbl x={BL6.x + 20} y={BL6.y + 36} at={bb} color={INK} size={28}>billiard ball on billiard ball</Lbl>
			<HandTag x={BL6.x + 420} y={BL6.y + 190} text="billiard on billiard" at={bb + 30} size={32} color={INK} />
			<Lbl x={EB.x + 55} y={EB.base + 40} at={sn} color={GREY.ink} size={28} anchor="middle">n</Lbl>
			<Lbl x={EB.x + 335} y={EB.base + 40} at={sn} color={RED.ink} size={28} anchor="middle">p</Lbl>
			<Lbl x={EB.x + 500} y={EB.base - EB.k * E_AVAIL - 22} at={sn} color={GREY.ink} size={26}>{`${fx(E_AVAIL)} MeV available`}</Lbl>
			<div style={{position: 'absolute', left: EB.x + 420, top: EB.base - 150}}><Row at={pr + 20} size={34}><AnswerBox at={pr + 26}>{`p gets all ${MEV(K_P_MEV)} MeV`}</AnswerBox></Row></div>
			<HandTag x={EB.x + 440} y={EB.base - 210} text="possible" at={pr + 30} size={34} color={GREEN_INK} />
		</>
	);
};
const GREEN_INK = '#287347';
