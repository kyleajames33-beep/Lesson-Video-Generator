// Scenes 1 to 5: the hook (last time's slit close-up, then the painted bench with a laser, the slide holder's coded slit
// and the screen carrier; the slit narrows and the band widens with live readouts), waves through a gap (the painted
// ripple tank, then the water from above on the waves engine: a wide gap, then a gap about one wavelength wide), every
// point is a source (Huygens' wavelets and the line touching them), at an edge or a gap (the barrier, the edge wavelets
// curling into the hatched shadow, a single edge, the gap narrowing to one wavelet) and why shadows usually look sharp
// (a doorway from above: light passes straight, sound spreads; the working; the slide holder's slit).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {HOLDER, RIPPLE, CodedSlide} from '../../physics/light/bench';
import {ApertureWaves, Barrier, HuygensRow, ShadowHatch} from '../../physics/light/wavefronts';
import {HandoffBoard as V04Handoff, M7V04FinalFrame, SLIT_BOX, SLIT_BX, SLIT_GAP, SLIT_LAMBDA, V04_END, V04_END_PHASE} from '../phys-y12-m7-v04/s3';
import {DOOR_SLIP, DOOR_WAVES, HEAD, HEAD_SIZE, RED, SLIT_WAVES, SOUND_L, SWEEP, cap, cue, holdIf} from './common';
import {B1, BenchRig, GREY, LIGHT_AMBER, Lbl, NAVY, RED_INK, RED_L, TEAL, bandText, fx, sci} from './parts';

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const laser = cue(id, 'Shine a laser through a narrow slit'), side = cue(id, 'either side'), pred = cue(id, 'Make your prediction'), wider = cue(id, 'It gets wider'), more = cap(id, cue(id, 'spreads out more'));
	const h = holdIf(id);
	if (f < 1) return <M7V04FinalFrame />;
	const out = 1 - prog(f, laser, 18);
	const a = f < wider ? SWEEP[0] : kf(f, [[wider, SWEEP[0]], [wider + 20, SWEEP[1]], [wider + 50, SWEEP[1]], [wider + 70, SWEEP[2]]]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{out > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: out}}>
				<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 1, 20)}}><V04Handoff f={V04_END} final chip={false} heading={false} /></div>
				<FrameSvg>
					<rect x={SLIT_BOX.x} y={SLIT_BOX.y} width={SLIT_BOX.w} height={SLIT_BOX.h} rx={14} fill="#fffdf8" stroke={INK} strokeWidth={3} />
					<ApertureWaves box={SLIT_BOX} bx={SLIT_BX} gap={SLIT_GAP} lambda={SLIT_LAMBDA} phase={V04_END_PHASE + f / 24} color={LIGHT_AMBER} id="v05-slit" width={5} />
					<Barrier box={SLIT_BOX} bx={SLIT_BX} gaps={[SLIT_GAP]} t={26} color="#3a3735" />
				</FrameSvg>
				<Lbl x={SLIT_BX} y={SLIT_BOX.y + SLIT_BOX.h + 34} at={-60} color={INK} size={28} anchor="middle">entrance slit (close-up)</Lbl>
				<Lbl x={1180} y={470} at={-60} color={INK} size={72} anchor="middle">?</Lbl>
				<Lbl x={1180} y={780} at={-60} color={INK} size={72} anchor="middle">?</Lbl>
				<Chip x={96} y={890} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: why does light spread after passing an edge or narrow opening?</Chip>
			</div> : null}
			{f >= laser ? <div style={{position: 'absolute', inset: 0, opacity: prog(f, laser, 18)}}>
				<FrameSvg>
					<BenchRig a={a} lambda={RED} color={RED_L} beam={prog(f, laser + 10, 30)} zoom={prog(f, side, 14)} bracket={prog(f, wider + 76, 12)} />
					{f >= wider ? <Mark x={500} y={915} at={wider} kind="tick" color={INK} size={34} /> : null}
					{h ? <Countdown start={h.startFrame} end={h.endFrame} x={1720} y={900} r={42} ringFrom={h.startFrame - 30} /> : null}
				</FrameSvg>
				<Lbl x={B1.ap - 120} y={612} at={laser} color={INK} size={26} anchor="middle">laser (raised on a block)</Lbl>
				
				<Lbl x={B1.scr} y={612} at={laser} color={INK} size={26} anchor="middle">screen</Lbl>
				<Lbl x={570} y={645} at={side} color={INK} size={26} anchor="middle">slit (close-up)</Lbl>
				<Lbl x={1310} y={645} at={side} color={INK} size={26} anchor="middle">screen, face on (schematic)</Lbl>
				<Lbl x={96} y={855} at={side} color={INK} size={52}>{`slit width ${fx(a, 2)} mm`}</Lbl>
				<Lbl x={800} y={855} at={side} color={RED_INK} size={52}>{`central band ${bandText(a, RED)}`}</Lbl>
				<Lbl x={1820} y={612} at={side} color={GREY.ink} size={26} anchor="end">readouts simulated</Lbl>
				<Chip x={96} y={890} at={pred} size={32} w={240} color={INK}>narrower</Chip>
				<Chip x={360} y={890} at={pred + 6} size={32} w={200} color={INK}>wider</Chip>
				<HandTag x={1420} y={330} text="narrower slit, wider band" at={more} size={32} color={RED_INK} />
			</div> : null}
		</>
	);
};

// ---------- 2. waves through a gap ----------
const RB = {x: 200, y: 180, w: 1500, h: 640};
const RBX = 760;
export const S02: React.FC = () => {
	const id = 'ripple-gap';
	const f = useCurrentFrame();
	const roll = cue(id, 'straight waves roll'), wide = cue(id, 'Beyond a wide gap'), edges = cue(id, 'edges'), one = cue(id, 'about one wavelength wide'), bar = cue(id, 'behind the barrier'), diff = cue(id, 'This spreading is called diffraction'), too = cap(id, cue(id, 'light does it too'));
	const top = prog(f, roll + 30, 24);
	const lam = 80;
	const half = f < one ? 190 : kf(f, [[one, 190], [one + 30, lam / 2]]);
	const cy = RB.y + RB.h / 2;
	const gap = [cy - half, cy + half] as const;
	const edgeGlow = f >= edges && f < one ? 1 : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={1 - top}><LPlate spec={RIPPLE} p={{x: 660, y: 200, w: 600}} /></g>
				{top > 0.001 ? <g opacity={top}>
					<rect x={RB.x} y={RB.y} width={RB.w} height={RB.h} rx={14} fill="#eaf4f6" stroke={INK} strokeWidth={3} />
					<ApertureWaves box={RB} bx={RBX} gap={gap} lambda={lam} phase={f / 22} color={TEAL.stroke} id="v05-ripple" width={5} shadow={prog(f, bar, 14)} beyond={prog(f, wide - 10, 14)} n={30} />
					<Barrier box={RB} bx={RBX} gaps={[gap]} t={18} />
					{edgeGlow ? [gap[0], gap[1]].map((y, i) => <circle key={i} cx={RBX + 140} cy={y + (i ? 60 : -60)} r={70} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, edges, 10)} />) : null}
					{f >= one ? <g opacity={prog(f, one + 30, 12)}><path d={`M${RBX - 40},${gap[0]} h-14 M${RBX - 47},${gap[0]} V${gap[1]} M${RBX - 40},${gap[1]} h-14`} stroke={INK} strokeWidth={4} fill="none" /></g> : null}
				</g> : null}
			</FrameSvg>
			<Lbl x={960} y={160} at={0} out={roll + 30} color={INK} size={28} anchor="middle">ripple tank</Lbl>
			<Lbl x={RB.x + 20} y={RB.y + 30} at={roll + 40} color={INK} size={26}>the water from above (model)</Lbl>
			<Lbl x={RBX} y={RB.y + RB.h + 30} at={roll + 40} color={INK} size={26} anchor="middle">barrier</Lbl>
			<HandTag x={RBX + 260} y={RB.y + 60} text="mostly straight" at={wide + 20} out={one} size={36} color={TEAL.ink} />
			<Lbl x={RBX - 70} y={cy + 6} at={one + 30} color={INK} size={30} anchor="end">gap ≈ λ</Lbl>
			<HandTag x={RBX + 400} y={RB.y + 60} text="semicircles" at={bar} size={36} color={TEAL.ink} />
			<Lbl x={RBX + 60} y={RB.y + RB.h - 40} at={bar + 10} color={GREY.ink} size={28}>spreads behind the barrier</Lbl>
			<HandTag x={RBX + 20} y={RB.y + 40} at={bar + 20} marks={[{kind: 'arrow', from: [RBX + 300, cy - 40], to: [RBX + 60, RB.y + 80], bend: 0.3}]} color={TEAL.stroke} />
			<Chip x={RB.x} y={850} at={diff} size={30} w={1500} color={INK}>Diffraction: the spreading of waves as they pass through an aperture or around an obstacle.</Chip>
			<Lbl x={RB.x + RB.w} y={RB.y + 30} at={too} color={INK} size={28} anchor="end">light is a wave: it diffracts too</Lbl>
		</>
	);
};

// ---------- 3. every point is a source ----------
export const HB = {top: 230, bot: 790, n: 11, x0: 380, R: 110};
export const HYS = Array.from({length: HB.n}, (_, i) => HB.top + ((HB.bot - HB.top) * i) / (HB.n - 1));
export const S03: React.FC = () => {
	const id = 'huygens';
	const f = useCurrentFrame();
	const src = cue(id, 'tiny source'), wav = cue(id, 'called a wavelet'), line = cue(id, 'the line touching the front of every wavelet'), nb = cue(id, 'neighbours on both sides'), ahead = cue(id, 'ahead');
	const step = 60;
	const k = f < ahead ? 0 : Math.min(3, Math.floor((f - ahead) / step) + 1);
	const t0 = k === 0 ? wav : ahead + (k - 1) * step;
	const r = f < wav ? 0 : HB.R * prog(f, t0, k === 0 ? 40 : 36);
	const x0 = HB.x0 + k * HB.R;
	const env = k === 0 ? prog(f, line, 20) : prog(f, t0 + 30, 8);
	const pulse = f >= src && f < src + 30 ? Math.sin(((f - src) / 30) * Math.PI) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={180} width={1180} height={680} rx={14} fill="#f6fbfb" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				{Array.from({length: k}, (_, i) => <line key={i} x1={HB.x0 + i * HB.R} y1={HB.top - 20} x2={HB.x0 + i * HB.R} y2={HB.bot + 20} stroke={TEAL.stroke} strokeWidth={3} opacity={0.5} />)}
				{f >= nb && f < ahead ? <rect x={x0} y={HYS[5]} width={HB.R} height={HYS[6] - HYS[5]} fill={TEAL.soft} opacity={0.8 * prog(f, nb, 12)} /> : null}
				<HuygensRow x0={x0} ys={HYS} r={r} color={TEAL.stroke} dots={prog(f, 2, 12)} wavelets={1} envelope={env} hi={f >= nb && f < ahead ? [5, 6] : []} hiColor={INK} pulse={pulse} />
			</FrameSvg>
			<Lbl x={HB.x0 - 30} y={200} at={2} color={INK} size={28} anchor="middle">a wavefront</Lbl>
			<HandTag x={HB.x0 - 40} y={HB.bot + 50} text="every point a source" at={src} size={34} color={TEAL.ink} anchor="middle" />
			<Lbl x={x0 + HB.R + 20} y={HB.top - 20} at={line} color={TEAL.ink} size={30}>new wavefront</Lbl>
			<HandTag x={x0 + HB.R + 30} y={(HYS[5] + HYS[6]) / 2} text="neighbours fill in" at={nb + 10} out={ahead} size={34} color={TEAL.ink} />
			<Chip x={1310} y={200} at={wav} size={30} w={510} color={INK}>wavelet: a small circular wave from one point of a wavefront</Chip>
			<Chip x={1310} y={360} at={line} size={30} w={510} color={TEAL.ink} border={TEAL.stroke}>new front = the line touching the front of every wavelet</Chip>
			<Chip x={1310} y={540} at={ahead + 20} size={32} w={510} color={INK}>open front: stays straight</Chip>
			<Lbl x={1310} y={700} at={wav} color={GREY.ink} size={26}>Huygens, 1600s (model)</Lbl>
		</>
	);
};

// ---------- 4. at an edge or a gap ----------
const EBX = 700;
const EBOX = {x: 96, y: 180, w: 1180, h: 680};
export const S04: React.FC = () => {
	const id = 'edges-and-gaps';
	const f = useCurrentFrame();
	const bar = cue(id, 'barrier in the way'), on = cue(id, 'send wavelets on'), str = cue(id, 'stays straight'), nothing = cue(id, 'nothing beyond to fill in'), behind = cue(id, 'behind the barrier'), single = cue(id, 'A single edge'), nar = cue(id, 'Make the gap narrower'), semi = cap(id, cue(id, 'like a semicircle'));
	const cy = EBOX.y + EBOX.h / 2;
	const mode = f < single ? 'gap' : f < nar ? 'edge' : 'narrow';
	const widths = [300, 180, 90, 36];
	const wn = mode === 'narrow' ? widths[Math.min(3, Math.floor((f - nar) / 26) + 1)] : 300;
	const gap: [number, number] = mode === 'edge' ? [cy - 40, EBOX.y + EBOX.h + 200] : [cy - wn / 2, cy + wn / 2];
	const sp = 30;
	const nDots = Math.max(1, Math.round(wn / sp));
	const ys = mode === 'edge' ? Array.from({length: 9}, (_, i) => cy - 30 + i * 40) : Array.from({length: nDots}, (_, i) => cy - ((nDots - 1) * sp) / 2 + i * sp);
	const t0 = mode === 'gap' ? on : mode === 'edge' ? single : nar + Math.floor((f - nar) / 26) * 26;
	const r = f < on ? 0 : Math.min(mode === 'narrow' ? 240 : 230, 3.2 * (f - t0));
	const edgeHi = f >= nothing && mode === 'gap' ? [0, ys.length - 1] : [];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={EBOX.x} y={EBOX.y} width={EBOX.w} height={EBOX.h} rx={14} fill="#f6fbfb" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<g opacity={prog(f, bar, 14)}>
					<ShadowHatch box={EBOX} bx={EBX} band={gap} />
					{[0, 1, 2].map(k => <line key={k} x1={EBX - 60 - k * 110} y1={EBOX.y + 10} x2={EBX - 60 - k * 110} y2={EBOX.y + EBOX.h - 10} stroke={TEAL.stroke} strokeWidth={3} opacity={0.5} />)}
					<HuygensRow x0={EBX} ys={ys} r={r} color={TEAL.stroke} dots={1} wavelets={f >= on ? 1 : 0} envelope={f >= on ? prog(f, t0 + 20, 12) : 0} hi={edgeHi} hiColor={INK} />
					<Barrier box={EBOX} bx={EBX} gaps={[gap]} t={18} />
				</g>
				{f >= str && f < nothing ? <line x1={EBX + r + 3} y1={ys[1]} x2={EBX + r + 3} y2={ys[ys.length - 2]} stroke={INK} strokeWidth={8} opacity={0.4} /> : null}
				{f >= semi ? <circle cx={EBX + 10} cy={cy} r={r + 20} fill="none" stroke={TEAL.stroke} strokeWidth={5} strokeDasharray="12 8" opacity={prog(f, semi, 12)} /> : null}
			</FrameSvg>
			<Lbl x={EBX} y={EBOX.y + EBOX.h + 30} at={bar} color={INK} size={26} anchor="middle">barrier</Lbl>
			<Lbl x={EBOX.x + EBOX.w - 20} y={EBOX.y + 40} at={bar + 10} color={GREY.ink} size={26} anchor="end">hatched: geometric shadow</Lbl>
			<HandTag x={EBX + 330} y={ys[0] - 120} text="no neighbours here" at={nothing} out={single} size={34} color={TEAL.ink} marks={[{kind: 'arrow', from: [EBX + 320, ys[0] - 110], to: [EBX + 14, ys[0] - 8], bend: -0.25}]} markAt={nothing + 8} />
			<Lbl x={EBX + 40} y={EBOX.y + EBOX.h - 40} at={behind} out={single} color={TEAL.ink} size={30}>curls into the shadow</Lbl>
			<Lbl x={EBX + 40} y={EBOX.y + 40} at={single} out={nar} color={INK} size={30}>a single edge</Lbl>
			<HandTag x={EBX + 280} y={EBOX.y + EBOX.h - 50} text="narrow gap: wide spread" at={semi + 10} size={36} color={TEAL.ink} />
			<Chip x={1310} y={200} at={on} size={30} w={510} color={INK}>only points in the gap send wavelets on</Chip>
			<Chip x={1310} y={340} at={str} size={30} w={510} color={INK}>middle: neighbours, so straight</Chip>
			<Chip x={1310} y={460} at={nothing} size={30} w={510} color={TEAL.ink} border={TEAL.stroke}>edges: nothing beyond, so the wave curls round</Chip>
			<Chip x={1310} y={620} at={nar} size={30} w={510} color={INK}>narrower gap: more of the front is near an edge</Chip>
		</>
	);
};

// ---------- 5. why shadows usually look sharp ----------
const DBX = {x: 96, y: 180, w: 900, h: 600};
const WALL_X = 420, DOOR_Y: [number, number] = [380, 580];
export const S05: React.FC = () => {
	const id = 'size-matters';
	const f = useCurrentFrame();
	const size = cue(id, "It's about size"), big = cue(id, 'not much bigger than the wavelength'), wide1 = cue(id, 'two million wavelengths wide'), small = cue(id, 'far too small to notice'), sound = cue(id, 'Sound has wavelengths'), them = cue(id, "can't see them"), slit = cue(id, 'you need a slit'), wide2 = cap(id, cue(id, 'tenth of a millimetre wide'));
	const soundO = prog(f, sound, 14);
	const hp = {x: 1100, y: 600, w: 230};
	const win = {x: hp.x + (485 - HOLDER.box[0]) * (hp.w / (HOLDER.box[2] - HOLDER.box[0])), y: hp.y + (354 - HOLDER.box[1]) * (hp.w / (HOLDER.box[2] - HOLDER.box[0])), w: (599 - 485) * (hp.w / (HOLDER.box[2] - HOLDER.box[0])), h: (586 - 354) * (hp.w / (HOLDER.box[2] - HOLDER.box[0]))};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={DBX.x} y={DBX.y} width={DBX.w} height={DBX.h} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				{f >= small ? <rect x={DBX.x + 10} y={DOOR_Y[0]} width={DBX.w - 20} height={DOOR_Y[1] - DOOR_Y[0]} fill={LIGHT_AMBER} opacity={0.35 * prog(f, small, 14) * (1 - soundO * 0.6)} /> : null}
				{f >= sound ? <ApertureWaves box={DBX} bx={WALL_X} gap={DOOR_Y} lambda={200} phase={(f - sound) / 30} color={GREY.stroke} id="v05-sound" width={4} beyond={soundO} incoming={soundO} n={12} /> : null}
				<Barrier box={DBX} bx={WALL_X} gaps={[DOOR_Y]} t={22} color="#6b6358" />
				<path d={`M${WALL_X - 40},${DOOR_Y[0]} h-14 M${WALL_X - 47},${DOOR_Y[0]} V${DOOR_Y[1]} M${WALL_X - 40},${DOOR_Y[1]} h-14`} stroke={INK} strokeWidth={4} fill="none" />
				{f >= slit ? <g opacity={prog(f, slit, 14)}>
					<LPlate spec={HOLDER} p={hp} />
					<CodedSlide win={win} kind="single" gap={3} />
					<path d={`M${win.x + win.w / 2 - 2},${win.y - 14} v-12 M${win.x + win.w / 2 - 2},${win.y - 20} H${win.x + win.w / 2 + 2} v6`} stroke={INK} strokeWidth={3} fill="none" />
				</g> : null}
			</FrameSvg>
			<Lbl x={DBX.x + 20} y={DBX.y + 30} at={0} color={INK} size={26}>a doorway, from above</Lbl>
			<Lbl x={WALL_X - 70} y={(DOOR_Y[0] + DOOR_Y[1]) / 2 + 6} at={0} color={INK} size={30} anchor="end">≈ 1 m</Lbl>
			<Chip x={1060} y={180} at={size} size={30} w={760} color={NAVY.ink} border={NAVY.stroke}>λ (light) ≈ 500 nm</Chip>
			<Chip x={DBX.x + 20} y={DBX.y + DBX.h - 70} at={big} out={sound} size={28} color={INK}>strong spreading: gap not much bigger than λ</Chip>
			<div style={{position: 'absolute', left: 1060, top: 270, display: 'flex', flexDirection: 'column', gap: 10, width: 780}}>
				<Row at={wide1 - 8} size={44}><span style={{whiteSpace: 'nowrap'}}>1 m / (500 × 10⁻⁹ m)</span></Row>
				<Row at={wide1} size={52}><AnswerBox at={wide1 + 6}><span style={{whiteSpace: 'nowrap'}}>{`= ${sci(DOOR_WAVES, 0)} wavelengths`}</span></AnswerBox></Row>
			</div>
			<HandTag x={1060} y={280} at={wide1 + 30} marks={[{kind: 'circle', cx: 1300, cy: 383, rx: 140, ry: 44}]} color={NAVY.stroke} />
			<CrossedChip x={1060} y={450} at={wide1 + 40} crossAt={wide1 + 56} size={30} caption="nm → × 10⁻⁹ m">{`1 / 500 = ${fx(DOOR_SLIP, 3)} wavelengths`}</CrossedChip>
			<Lbl x={DBX.x + DBX.w - 20} y={DOOR_Y[0] - 20} at={small + 10} out={sound} color={INK} size={28} anchor="end">light: sharp edges, spreading negligible</Lbl>
			<Lbl x={DBX.x + DBX.w - 20} y={DBX.y + 30} at={sound} color={GREY.ink} size={28} anchor="end">{`sound: λ ≈ ${fx(SOUND_L, 0)} m (model)`}</Lbl>
			<Lbl x={DBX.x + 20} y={DBX.y + DBX.h + 40} at={them} color={INK} size={30}>sound bends round corners; light hardly does</Lbl>
			<Lbl x={1360} y={720} at={wide2} color={INK} size={44}>≈ 0.1 mm</Lbl>
			<Lbl x={1360} y={790} at={wide2} color={INK} size={44}>{`= ${fx(SLIT_WAVES, 0)} wavelengths`}</Lbl>
			<HandTag x={1360} y={880} text="gap ≈ λ: big spread" at={wide2 + 16} size={34} color={NAVY.ink} />
		</>
	);
};
