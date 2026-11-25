// Scenes 1 to 5: the hook (last time's three painted sources fill their strips: continuous, four bright lines, dark
// lines; prediction), spreading light out (lamp and painted pocket spectroscope, the diagram of a grating fanning the
// colours, the EM ribbon zooming to the visible band, the axis and a brightness graph), hot and dense (the painted lamp,
// the jiggling lattice inset, the continuous strip and the temperature slider), hot and thin (the painted discharge tube
// on the painted EHT supply, the particle-box gas, the energy ladder and drop selector sending each drop to its line)
// and the fingerprints (reference strips, the unknown sliding in, the 1868 line and helium).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {CARD, INK} from '../../shared/tokens';
import {Chip, CrossedChip} from '../../physics/projectile/board';
import {Scope} from '../../physics/electromagnetism/motor';
import {supplyPts} from '../../physics/electromagnetism/plates';
import {Arrow} from '../../physics/light/em';
import {EMRibbon, EnergyLadder, LightPath, SpectrumStrip, levelY, nmX, ribbonX, wlColor} from '../../physics/light/spectrum';
import {ANCHOR, LAMP, LPlate, SPECTRO, TUBE, anchorAt, placeByAnchor} from '../../physics/light/plates';
import {ParticleBoxView} from '../../sims/views';
import {HB2, M7V02FinalFrame, SourceRow} from '../phys-y12-m7-v02/s3';
import {OrbitIcon, WheelAt} from '../phys-y12-m7-v02/parts';
import {DROP, HEAD, HEAD_SIZE, HE_LINES, H_LINES, H_UPPER, NA_LINES, NE_LINES, SUN_LINES, TEMPS, T_FIL, cap, cue, holdIf} from './common';
import {CardRect, EHT, GREY, LIGHT, LIGHT_INK, Lattice, Lbl, NAVY, ORANGE, ROSE, StripRow, Connectors, fx, hotGas, hotProfile} from './parts';

type Pt = [number, number];
const strip = (i: number) => ({x: HB2.strip.x, y: HB2.rows[i] - HB2.strip.h / 2, w: HB2.strip.w, h: HB2.strip.h});

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const rb = cue(id, 'unbroken rainbow'), blk = cue(id, 'on black'), dark = cue(id, 'crossed by dark lines'), pred = cue(id, 'Make your prediction'), fil = cap(id, cue(id, "It's the filament")), info = cap(id, cue(id, 'The lines are where the information is'));
	const h = holdIf(id);
	if (f < 1) return <M7V02FinalFrame />;
	const icons = 1 - prog(f, 1, 22);
	const glow = f >= info ? Math.sin(Math.min(1, (f - info) / 30) * Math.PI) : 0;
	const fills = [rb, blk, dark];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={icons}>
					<OrbitIcon x={1000} y={HB2.icons.y} w={180} h={110} />
					<WheelAt cx={1270} cy={HB2.icons.y + 55} d={105} deg={0} />
					<Scope p={{x: 1350, y: HB2.icons.y + 8, w: 170}} grid={false} />
					<rect x={1560} y={HB2.icons.y + 26} width={150} height={56} rx={12} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={4} />
					<text x={1635} y={HB2.icons.y + 64} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: NAVY.ink}}>c exact</text>
				</g>
				{[0, 1, 2].map(i => <SourceRow key={i} i={i} />)}
				<SpectrumStrip s={strip(0)} kind="continuous" reveal={prog(f, rb, 30)} />
				<SpectrumStrip s={strip(1)} kind={f >= blk ? 'emission' : 'blank'} lines={H_LINES} reveal={prog(f, blk, 24)} lineW={7} />
				<SpectrumStrip s={strip(2)} kind={f >= dark ? 'absorption' : 'blank'} lines={SUN_LINES} strengths={[0.6, 0.5, 0.6, 0.8, 0.6, 0.5, 0.9, 0.9, 0.9]} reveal={prog(f, dark, 30)} lineW={5} />
				{glow > 0.001 ? [1, 2].map(i => <rect key={i} x={strip(i).x - 8} y={strip(i).y - 8} width={strip(i).w + 16} height={strip(i).h + 16} rx={8} fill="none" stroke={LIGHT} strokeWidth={6} opacity={glow} />) : null}
				{f >= info ? <path d={`M${strip(1).x + strip(1).w + 24},${strip(1).y} h18 V${strip(2).y + strip(2).h} h-18`} fill="none" stroke={LIGHT} strokeWidth={5} opacity={prog(f, info + 10, 12)} /> : null}
				{f >= fil ? <Mark x={370} y={915} at={fil} kind="tick" color={INK} size={34} /> : null}
				{h ? <Countdown start={h.startFrame} end={h.endFrame} x={1720} y={820} r={46} ringFrom={h.startFrame - 30} /> : null}
			</FrameSvg>
			<Chip x={96} y={890} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: how do different sources produce different spectral patterns?</Chip>
			{[0, 1, 2].map(i => <Lbl key={i} x={HB2.q} y={HB2.rows[i] + 22} at={-60} out={fills[i]} color={INK} size={60}>?</Lbl>)}
			{['filament lamp', 'hydrogen discharge tube', 'the Sun'].map((t, i) => <Lbl key={t} x={HB2.strip.x} y={HB2.rows[i] - 52} at={-60} color={INK} size={28}>{t}</Lbl>)}
			<Lbl x={1550} y={HB2.rows[1] + 10} at={blk + 20} color={GREY.ink} size={26}>four brightest lines</Lbl>
			<Lbl x={HB2.strip.x + HB2.strip.w} y={HB2.rows[2] - 52} at={dark + 20} color={GREY.ink} size={26} anchor="end">line strengths schematic</Lbl>
			<HandTag x={1550} y={HB2.rows[0] + 8} text="same rainbow, any metal" at={info + 20} size={30} color={GREY.ink} />
			<Chip x={96} y={890} at={pred} size={32} w={300} color={INK}>filament</Chip>
			<Chip x={420} y={890} at={pred + 6} out={info} size={32} w={360} color={INK}>hydrogen tube</Chip>
			<Chip x={800} y={890} at={pred + 12} out={info} size={32} w={300} color={INK}>sunlight</Chip>
			<HandTag x={1150} y={905} text="information lives in the lines" at={info + 16} size={34} color={LIGHT_INK} />
		</>
	);
};

// ---------- 2. spreading light out ----------
const SP2 = placeByAnchor(SPECTRO, ANCHOR.spectroSlit[0], ANCHOR.spectroSlit[1], 330, 345, 520);
const ST2 = {x: 300, y: 760, w: 1300, h: 80};
export const S02: React.FC = () => {
	const id = 'spectroscope';
	const f = useCurrentFrame();
	const dir = cue(id, 'slightly different direction'), ems = cue(id, 'electromagnetic spectrum'), red = cue(id, 'seven hundred for red'), wl = cap(id, cue(id, 'at each wavelength'));
	const lp = {x: 96, y: 230, w: 170};
	const coil = anchorAt(LAMP, lp, ANCHOR.lampCoil[0], ANCHOR.lampCoil[1]);
	const spread = 0.25 + 0.75 * prog(f, dir, 30);
	const G: Pt = [1150, 400];
	const vis = [ribbonX(300, 1300, 4e14), ribbonX(300, 1300, 7.9e14)];
	const zoom = prog(f, ems, 20) * (1 - prog(f, red + 30, 20));
	const prof = hotProfile(T_FIL);
	const gpath = Array.from({length: 75}, (_, i) => { const nm = 380 + i * 5; return `${i ? 'L' : 'M'}${nmX(ST2, nm)},${ST2.y - 20 - 90 * prof(nm)}`; }).join(' ');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={LAMP} p={lp} />
				<LightPath pts={[[coil[0] + 30, coil[1]], [330, 345]]} color={LIGHT} width={6} />
				<LPlate spec={SPECTRO} p={SP2} />
				<CardRect x={900} y={190} w={920} h={270} />
				<rect x={930} y={380} width={12} height={40} fill={INK} />
				<line x1={942} y1={400} x2={G[0]} y2={G[1]} stroke="#f4efe3" strokeWidth={10} />
				<line x1={942} y1={400} x2={G[0]} y2={G[1]} stroke={LIGHT} strokeWidth={4} />
				<line x1={G[0]} y1={300} x2={G[0]} y2={450} stroke={INK} strokeWidth={5} strokeDasharray="3 5" />
				<line x1={1780} y1={210} x2={1780} y2={440} stroke={INK} strokeWidth={4} />
				{Array.from({length: 16}, (_, k) => { const nm = 400 + k * 20; const a = (((nm / 700) * 16) * spread * Math.PI) / 180; return <line key={k} x1={G[0]} y1={G[1]} x2={1780} y2={G[1] - Math.tan(a) * (1780 - G[0])} stroke={wlColor(nm)} strokeWidth={4} />; })}
				<line x1={G[0]} y1={G[1]} x2={1780} y2={G[1]} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
				<g opacity={prog(f, ems, 14)}><EMRibbon x={300} y={540} w={1300} h={46} size={26} /></g>
				{zoom > 0.001 ? <g opacity={zoom} stroke={INK} strokeWidth={2} strokeDasharray="6 6"><line x1={vis[0]} y1={586} x2={ST2.x} y2={ST2.y} /><line x1={vis[1]} y1={586} x2={ST2.x + ST2.w} y2={ST2.y} /></g> : null}
				<SpectrumStrip s={ST2} kind="continuous" axis={f >= red} reveal={prog(f, 6, 30)} />
				{f >= wl ? <path d={gpath} fill="none" stroke={NAVY.stroke} strokeWidth={5} opacity={prog(f, wl, 14)} /> : null}
				{f >= wl ? <Arrow from={[1640, ST2.y - 60]} to={[1640, ST2.y + 30]} color={NAVY.stroke} width={4} head={16} opacity={prog(f, wl + 20, 12)} /> : null}
			</FrameSvg>
			<Lbl x={590} y={510} at={0} color={INK} size={26} anchor="middle">pocket spectroscope</Lbl>
			<Lbl x={930} y={230} at={0} color={GREY.ink} size={26}>inside (diagram): slit, grating, colours spread</Lbl>
			<Lbl x={930} y={455} at={0} color={INK} size={26}>slit</Lbl>
			<Lbl x={G[0]} y={300} at={0} color={INK} size={26} anchor="middle">grating</Lbl>
			<HandTag x={1260} y={440} text="each wavelength its own direction" at={dir + 20} size={30} color={NAVY.ink} />
			<Lbl x={ST2.x + ST2.w + 20} y={ST2.y + 130} at={red} color={INK} size={28} anchor="end">wavelength (nm)</Lbl>
			<Lbl x={vis[1] + 20} y={530} at={ems + 20} out={red + 30} color={INK} size={26}>visible: a tiny slice</Lbl>
			<Lbl x={ST2.x} y={ST2.y - 130} at={wl} color={NAVY.ink} size={28}>a spectrum: brightness at each wavelength</Lbl>
			<HandTag x={1660} y={ST2.y - 80} text="a map" at={wl + 20} size={36} color={NAVY.ink} />
		</>
	);
};

// ---------- 3. hot and dense: every colour ----------
const ST3 = {x: 1150, y: 430, w: 670, h: 90};
export const S03: React.FC = () => {
	const id = 'continuous';
	const f = useCurrentFrame();
	const kel = cue(id, 'about twenty-nine hundred kelvin'), rem = cue(id, 'Remember, accelerating charges radiate'), wl = cue(id, 'you get every wavelength'), gaps = cue(id, 'with no gaps'), end = cue(id, 'towards the blue end'), temp = cap(id, cue(id, 'depends mainly on temperature, not on the metal'));
	const lp = {x: 96, y: 250, w: 290};
	const coil = anchorAt(LAMP, lp, ANCHOR.lampCoil[0], ANCHOR.lampCoil[1]);
	const ins = {cx: 640, cy: 520, r: 170};
	const T = kf(f, [[end, T_FIL], [end + 20, TEMPS[0]], [end + 60, TEMPS[1]], [end + 100, TEMPS[2]]]);
	const prof = hotProfile(T);
	const waves = f >= wl ? Array.from({length: 7}, (_, k) => { const nm = 410 + k * 48; const x0 = ins.cx + ins.r + 10 + ((f - wl) * 3 + k * 50) % 300; const L = 18 + k * 4; return <path key={k} d={Array.from({length: 25}, (_, i) => `${i ? 'L' : 'M'}${x0 + i * 3},${ins.cy - 120 + k * 40 + 10 * Math.sin((i * 3 * 2 * Math.PI) / L)}`).join(' ')} fill="none" stroke={wlColor(nm)} strokeWidth={4} opacity={prog(f, wl, 12)} />; }) : null;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={LAMP} p={lp} />
				<line x1={coil[0]} y1={coil[1]} x2={ins.cx - ins.r * 0.7} y2={ins.cy - ins.r * 0.7} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
				<circle cx={ins.cx} cy={ins.cy} r={ins.r} fill="#fff3dc" stroke={INK} strokeWidth={4} />
				<Lattice cx={ins.cx} cy={ins.cy} r={ins.r} jiggle={1} />
				{f >= temp ? <circle cx={ins.cx} cy={ins.cy} r={ins.r + 16} fill="none" stroke={ROSE.stroke} strokeWidth={5} opacity={prog(f, temp + 10, 12)} /> : null}
				{waves}
				<SpectrumStrip s={ST3} kind="continuous" reveal={prog(f, gaps, 30)} profile={f >= end ? prof : undefined} />
				<line x1={ST3.x} y1={640} x2={ST3.x + ST3.w} y2={640} stroke={INK} strokeWidth={5} strokeLinecap="round" opacity={prog(f, end, 12)} />
				<circle cx={ST3.x + (ST3.w * (T - 1800)) / 1900} cy={640} r={16} fill={ORANGE.stroke} stroke={CARD} strokeWidth={3} opacity={prog(f, end, 12)} />
			</FrameSvg>
			<Lbl x={ins.cx} y={ins.cy + ins.r + 40} at={0} color={INK} size={26} anchor="middle">inside the hot tungsten (model)</Lbl>
			<Lbl x={lp.x + 145} y={940} at={0} color={INK} size={26} anchor="middle">filament lamp</Lbl>
			<Chip x={96} y={190} at={kel} size={32} w={420} color={ORANGE.ink}>{`tungsten ≈ ${T_FIL} K`}</Chip>
			<Chip x={1150} y={200} at={rem} size={28} w={620} color={GREY.ink} border={GREY.stroke}>last time: accelerating charge → EM wave</Chip>
			<Lbl x={ST3.x} y={ST3.y - 24} at={gaps} color={INK} size={30}>continuous spectrum</Lbl>
			<Lbl x={ST3.x} y={720} at={end} color={ORANGE.ink} size={52}>{`T = ${fx(Math.round(T / 100) * 100, 0)} K`}</Lbl>
			<Lbl x={ST3.x + ST3.w} y={610} at={end} color={GREY.ink} size={26} anchor="end">qualitative; a later video makes it exact</Lbl>
			<HandTag x={ST3.x + 330} y={720} text="hotter: brighter and bluer" at={end + 40} size={32} color={ORANGE.ink} />
			<CrossedChip x={ST3.x} y={790} at={temp} crossAt={temp + 14} size={30}>tells you the element</CrossedChip>
			<HandTag x={ins.cx - 120} y={ins.cy - ins.r - 30} text="shaken every way" at={temp + 10} size={34} color={ROSE.ink} />
		</>
	);
};

// ---------- 4. hot and thin: bright lines ----------
const TP = {x: 190, y: 200, w: 140};
const EHT_AT = {x: 96, y: 640, w: 380};
const LAD = {x: 600, w: 250, top: 180, bot: 1500};
const ST4 = {x: 560, y: 650, w: 1260, h: 90};
export const S04: React.FC = () => {
	const id = 'emission';
	const f = useCurrentFrame();
	const crash = cue(id, 'Electrons crash into the atoms'), lev = cue(id, 'called energy levels'), wl = cue(id, 'one particular wavelength'), big = cue(id, 'A bigger drop'), s434 = cue(id, 'four hundred and thirty-four'), s410 = cue(id, 'four hundred and ten'), nmC = cue(id, 'ten nanometres'), sharp = cap(id, cue(id, 'the lines stay sharp'));
	const steps = [wl, big, s434, s410];
	let k = -1; steps.forEach((t, i) => { if (f >= t) k = i; });
	const u = k >= 0 ? prog(f, steps[k], 22) : 0;
	const tubeH = (TP.w * (TUBE.box[3] - TUBE.box[1])) / (TUBE.box[2] - TUBE.box[0]);
	const cap0 = anchorAt(TUBE, TP, ANCHOR.tubeCap[0], ANCHOR.tubeCap[1]), cap1 = anchorAt(TUBE, TP, ANCHOR.tubeCap[0], ANCHOR.tubeCap[2]);
	const sp = supplyPts(EHT_AT);
	const ex = LAD.x + LAD.w * 0.62;
	const yTo = levelY(2, LAD.top, LAD.bot);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={TUBE} p={TP} />
				<rect x={cap0[0] - 7} y={cap0[1]} width={14} height={cap1[1] - cap0[1]} rx={7} fill="#ff7fb0" opacity={0.45} />
				<EHT x={EHT_AT.x} y={EHT_AT.y} w={EHT_AT.w} />
				<path d={`M${sp.neg[0]},${sp.neg[1]} C${sp.neg[0]},${sp.neg[1] + 70} ${TP.x - 40},${TP.y + tubeH + 60} ${TP.x + TP.w / 2},${TP.y + tubeH - 10}`} fill="none" stroke={INK} strokeWidth={4} />
				<path d={`M${sp.pos[0]},${sp.pos[1]} C${sp.pos[0] + 60},${sp.pos[1] - 300} ${TP.x + TP.w + 90},${TP.y - 40} ${TP.x + TP.w / 2},${TP.y + 10}`} fill="none" stroke="#c0392b" strokeWidth={4} />
				<EnergyLadder x={LAD.x} w={LAD.w} top={LAD.top} bot={LAD.bot} levels={[2, 3, 4, 5, 6]} color={NAVY.stroke} label={n => `${n}`} opacity={prog(f, lev, 14)} hiLevel={f >= nmC ? 2 : undefined} electron={k >= 0 ? {from: H_UPPER[k], to: 2, u, color: ROSE.stroke} : undefined} />
				{f >= nmC ? <ellipse cx={LAD.x + LAD.w / 2} cy={yTo} rx={LAD.w * 0.7} ry={26} fill="none" stroke={NAVY.stroke} strokeWidth={4} opacity={prog(f, nmC + 10, 12)} /> : null}
				<SpectrumStrip s={ST4} kind="emission" lines={H_LINES.slice(0, k + 1)} lineW={8} />
				{k >= 0 && u > 0.95 ? <Arrow from={[ex + 20, (levelY(H_UPPER[k], LAD.top, LAD.bot) + yTo) / 2]} to={[nmX(ST4, H_LINES[k]), ST4.y - 8]} color={wlColor(H_LINES[k])} width={5} head={18} opacity={1 - prog(f, steps[k] + 70, 14)} /> : null}
				<rect x={900} y={460} width={300 * (k >= 0 ? DROP[k] / DROP[3] : 0)} height={26} rx={6} fill={ROSE.stroke} opacity={prog(f, wl, 12)} />
			</FrameSvg>
			<Lbl x={TP.x + TP.w + 20} y={TP.y + 70} at={0} color={INK} size={26}>hydrogen</Lbl>
			<Lbl x={TP.x + TP.w + 20} y={TP.y + 105} at={0} color={INK} size={26}>discharge tube</Lbl>
			<Lbl x={TP.x + TP.w + 20} y={TP.y + 160} at={0} color={GREY.ink} size={26}>glow colour is not data</Lbl>
			<Lbl x={EHT_AT.x + 190} y={EHT_AT.y - 16} at={0} color={INK} size={26} anchor="middle">high-voltage supply</Lbl>
			{f >= crash ? <ParticleBoxView run={hotGas()} x={1380} y={200} looks={{atom: {tone: 'violet'}, e: {tone: 'blue'}}} flashes={false} opacity={prog(f, crash, 14)} /> : null}
			<Lbl x={1380} y={180} at={crash} color={INK} size={26}>inside the tube (model)</Lbl>
			<Lbl x={LAD.x} y={LAD.top - 16} at={lev} color={NAVY.ink} size={30}>energy levels</Lbl>
			<Lbl x={900} y={250} at={wl} color={ROSE.ink} size={44}>{k >= 0 ? `drop: ${H_UPPER[k]} → 2` : ''}</Lbl>
			<Lbl x={900} y={330} at={wl} color={k >= 0 ? INK : INK} size={52}>{k >= 0 ? `λ = ${fx(H_LINES[k], 1)} nm` : ''}</Lbl>
			<Lbl x={900} y={440} at={wl} color={GREY.ink} size={28}>{k >= 0 ? `drop size: ${fx(DROP[k], 2)} (relative)` : ''}</Lbl>
			<HandTag x={900} y={540} text="bigger drop, shorter λ" at={big + 20} size={34} color={ROSE.ink} />
			{H_LINES.map((l, i) => <Lbl key={l} x={nmX(ST4, l)} y={ST4.y + ST4.h + 36} at={i <= k ? steps[i] + 10 : 1e6} color={INK} size={28} anchor="middle">{fx(l, 0)}</Lbl>)}
			<Lbl x={ST4.x + ST4.w} y={ST4.y + ST4.h + 36} at={nmC} color={INK} size={28} anchor="end">nm</Lbl>
			<Lbl x={ST4.x} y={ST4.y + ST4.h + 90} at={nmC} color={GREY.ink} size={26}>four brightest lines; fainter violet lines not drawn</Lbl>
			<HandTag x={LAD.x - 20} y={yTo + 60} text="all end on level 2" at={nmC + 16} size={32} color={NAVY.ink} />
			<Lbl x={1380} y={500} at={sharp} color={INK} size={28}>thin gas: atoms far apart</Lbl>
			<Chip x={1380} y={870} at={sharp} size={30} w={360} color={INK}>emission spectrum</Chip>
		</>
	);
};

// ---------- 5. a fingerprint for every element ----------
const RX5 = 560, RW5 = 1200, RH5 = 56;
const ref = (y: number) => ({x: RX5, y, w: RW5, h: RH5});
export const S05: React.FC = () => {
	const id = 'fingerprints';
	const f = useCurrentFrame();
	const na = cue(id, 'five hundred and eighty-nine nanometres'), ne = cue(id, 'crowd of red and orange lines'), match = cue(id, 'every observed line has to match'), y1868 = cue(id, 'In 1868'), yrs = cap(id, cue(id, 'another twenty-seven years'));
	const slide = kf(f, [[match, 1920], [match + 40, RX5]]);
	const unk = {x: slide, y: 660, w: RW5, h: RH5};
	const unkO = 1 - prog(f, y1868, 16);
	const sun = {x: RX5, y: 660, w: RW5, h: RH5};
	const he = {x: kf(f, [[yrs, 1920], [yrs + 30, RX5]]), y: 530, w: RW5, h: RH5};
	const pulse = (at: number) => (f >= at && f < at + 50 ? 1 : 0);
	const zoomNa = {x: 1250, y: 175, w: 300, h: 50, nm0: 586, nm1: 593};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<StripRow s={ref(260)} kind="emission" lines={H_LINES} name="hydrogen" grey={false} />
				<StripRow s={ref(350)} kind="emission" lines={NA_LINES} name="sodium" glow={pulse(na) ? [0, 1] : []} />
				<StripRow s={ref(440)} kind="emission" lines={NE_LINES} name="neon" glow={pulse(ne) ? NE_LINES.map((_, i) => i) : []} />
				<g opacity={prog(f, na, 12)}><SpectrumStrip s={zoomNa} kind="emission" lines={NA_LINES} lineW={10} /></g>
				{f >= match && unkO > 0.001 ? <g opacity={unkO}>
					<StripRow s={unk} kind="emission" lines={H_LINES} />
					{slide <= RX5 + 1 ? <Connectors a={ref(260)} b={unk} lines={H_LINES} marks={H_LINES.map(() => 'tick')} opacity={prog(f, match + 44, 14)} /> : null}
				</g> : null}
				{f >= y1868 ? <g opacity={prog(f, y1868, 14)}>
					<StripRow s={sun} kind="emission" lines={[486.1, 587.6, 656.3]} />
					<ellipse cx={nmX(sun, 587.6)} cy={sun.y + RH5 / 2} rx={26} ry={44} fill="none" stroke={LIGHT} strokeWidth={5} />
				</g> : null}
				{f >= yrs ? <g><StripRow s={he} kind="emission" lines={HE_LINES} name="helium" />{he.x <= RX5 + 1 ? <Connectors a={he} b={sun} lines={[587.6]} marks={['tick']} opacity={prog(f, yrs + 34, 12)} /> : null}</g> : null}
			</FrameSvg>
			<Lbl x={RX5} y={235} at={0} color={GREY.ink} size={26}>reference spectra</Lbl>
			<Lbl x={zoomNa.x + zoomNa.w + 16} y={zoomNa.y + 36} at={na} color={INK} size={26}>589.0, 589.6 nm</Lbl>
			<Lbl x={RX5 - 16} y={660 + 38} at={match} out={y1868} color={INK} size={28} anchor="end">unknown gas</Lbl>
			<HandTag x={RX5} y={780} text="every observed line has a partner" at={match + 50} out={y1868} size={34} color="#287347" />
			<Lbl x={RX5 - 16} y={660 + 38} at={y1868 + 10} color={INK} size={28} anchor="end">sunlight, 1868</Lbl>
			<Lbl x={nmX(sun, 587.6)} y={780} at={y1868 + 20} out={yrs} color={GREY.ink} size={28} anchor="middle">587.6 nm: no known element</Lbl>
			<HandTag x={nmX(sun, 587.6) - 80} y={790} text="named after the Sun" at={yrs + 40} size={34} color={LIGHT_INK} />
			<Chip x={96} y={860} at={yrs + 20} size={30} w={760} color={INK}>{'helium: found in the Sun (1868), on Earth (1895)'}</Chip>
		</>
	);
};
