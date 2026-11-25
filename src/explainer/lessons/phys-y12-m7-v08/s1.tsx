// Scenes 1 to 5: the hook (last time's laser bench with the turning filter, then the painted lamp with one and two
// filters, orange bars on the rail and face-on filter insets; the prediction), what polarised light is (the end-on
// E-arrow view jumping at random, then locked; the sound inset with nothing to select), what a filter does (the E
// arrow split along and across the axis, the absorbed part fading; the average meter settling at a half), Malus's law
// (the analyser stage: the component view, the slider steps and the cos² graph) and crossed filters (the graph
// extended to a full turn).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {polarGeom} from '../../physics/light/polar';
import type {PolarAt} from '../../physics/light/polar';
import {displacement} from '../../sims/waves';
import type {Wave} from '../../sims/waves';
import {HandoffBoard7, M7V07FinalFrame} from '../phys-y12-m7-v07/s3';
import {HEAD, HEAD_SIZE, IMAX4, cap, cos2, cue, holdIf} from './common';
import {Arc, BarLabels, EArrow, EBLUE, EndOn, FilterFace, GREY, Lbl, NAVY, ORANGE, Readout, SLATE, Stage, Strip, fx, randDeg} from './parts';
import type {Bar, Pt} from './parts';

export const ST: PolarAt = {x: 160, y: 600, w: 1600, g: 1.2, src: 400, holders: [820, 1200], sensor: 1580, source: 'lamp'};
const BX = [610, 1010, 1390];

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const lb = cue(id, 'brighter and dimmer'), ord = cue(id, 'ordinary lamp light'), half1 = cue(id, 'half'), nothing = cue(id, 'changes nothing'), second = cue(id, 'add a second filter'), turn2 = cue(id, 'and turn that one'), gone = cue(id, "it's gone"), back = cue(id, 'it comes back'), pred = cue(id, 'Make your prediction'), ans = cue(id, 'Half', 3);
	const h = holdIf(id);
	if (f < 1) return <M7V07FinalFrame />;
	const sw = prog(f, ord, 20);
	const rotL = 70 + 200 * prog(f, lb, 90);
	const a1 = kf(f, [[nothing, 0], [nothing + 40, 90]]);
	const a2 = kf(f, [[turn2, 0], [gone, 90], [back, 90], [back + 40, 180], [ans, 180], [ans + 20, 225]]);
	const h2 = prog(f, second, 14);
	const b1 = 1, b2 = f < half1 ? 0 : 0.5, b3 = 0.5 * cos2(a2);
	const bars: Bar[] = [{x: BX[0], v: b1, label: 'I₀', o: prog(f, half1, 12)}, {x: BX[1], v: b2, label: '½I₀', o: prog(f, half1, 12)}, {x: BX[2], v: h2 > 0.5 ? b3 : 0.5, label: h2 > 0.5 ? undefined : undefined, o: prog(f, half1, 12)}];
	const g = polarGeom(ST);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{sw < 0.999 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}><HandoffBoard7 f={0} final heading={false} chip={false} rot={rotL} qO={1 - prog(f, lb - 30, 20)} /></div> : null}
			<Chip x={96} y={890} at={-60} out={4} size={30} w={1728} color={INK} border={INK}>Next: why does rotating a polariser change transmitted intensity?</Chip>
			<Lbl x={1450} y={470} at={lb + 10} out={ord} color={INK} size={30}>laser: already polarised</Lbl>
			{sw > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<FrameSvg>
					<Stage b={ST} axes={[a1, a2]} holdersO={[1, h2]} bars={bars} />
					<Readout x={1590} y={170} v={h2 > 0.5 ? b3 * 2 : f >= half1 ? 1 : 1} label="sensor" opacity={prog(f, ord + 10, 12)} />
					{f >= gone && f < back + 20 ? <circle cx={BX[2]} cy={g.railY - 30} r={40} fill="none" stroke={ORANGE.stroke} strokeWidth={4} opacity={prog(f, gone + 10, 10) * (1 - prog(f, back, 10))} /> : null}
					{h ? <Countdown start={h.startFrame} end={h.endFrame} x={1720} y={880} r={42} ringFrom={h.startFrame - 30} /> : null}
					{f >= ans ? <Mark x={560} y={905} at={ans} kind="tick" color={INK} size={34} /> : null}
				</FrameSvg>
				<BarLabels b={ST} bars={bars} at={half1} />
				{h2 > 0.5 ? <Lbl x={BX[2]} y={g.railY - 30 - 110 * b3 - 14} at={second} color={ORANGE.ink} size={28} anchor="middle">{fx(b3 * 2, 2) === '0.00' ? '0' : `${fx(b3 / 0.5, 2)} × ½I₀`}</Lbl> : null}
				<Lbl x={ST.src} y={g.railY + 160} at={ord} color={INK} size={26} anchor="middle">filament lamp</Lbl>
				<Lbl x={ST.holders[0]} y={g.railY + 160} at={ord} color={INK} size={26} anchor="middle">filter 1</Lbl>
				<Lbl x={ST.holders[1]} y={g.railY + 160} at={second} color={INK} size={26} anchor="middle">filter 2</Lbl>
				<Lbl x={ST.holders[1] + 70} y={170} at={turn2} color={NAVY.ink} size={30}>{`${fx(((a2 % 180) + 180) % 180, 0)}°`}</Lbl>
				<Lbl x={96} y={800} at={half1 + 10} color={GREY.ink} size={30}>ideal filters</Lbl>
				<Lbl x={96} y={760} at={nothing + 20} out={second} color={INK} size={32}>any angle: ½I₀</Lbl>
				<Lbl x={BX[2]} y={g.railY + 70} at={gone + 10} out={back} color={INK} size={30} anchor="middle">crossed</Lbl>
				<Chip x={300} y={880} at={pred} size={32} w={200} color={INK}>half</Chip>
				<Chip x={520} y={880} at={pred + 6} size={32} w={240} color={INK}>a quarter</Chip>
				<HandTag x={96} y={700} text="turning one: no change" at={ans + 10} size={30} color={NAVY.ink} />
				<HandTag x={880} y={700} text="turning two: changes" at={ans + 16} size={30} color={NAVY.ink} />
			</div> : null}
		</>
	);
};

// ---------- 2. what polarised light is ----------
const C2: Pt = [480, 560];
const SOUND = {x: 1000, y: 560, w: 820, h: 200};
export const S02: React.FC = () => {
	const id = 'polarisation';
	const f = useCurrentFrame();
	const field = cue(id, 'Its electric field points across'), rand = cue(id, 'keeps changing at random'), unp = cue(id, "That's unpolarised light"), pol = cue(id, 'the light is plane polarised'), only = cue(id, 'Only a transverse wave can be polarised'), longi = cue(id, 'In a longitudinal wave, like sound'), restrict = cue(id, 'nothing across the beam to restrict'), transv = cap(id, cue(id, 'tells us light is transverse'));
	const locked = f >= pol;
	const deg = locked ? 0 : f < rand ? 20 : randDeg(f);
	const len = locked ? 220 * Math.sin(f / 5) : 220;
	const w: Wave = {amplitude: 26, wavelength: 140, period: 1.4};
	const t = f / 30;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<EndOn c={C2} r={300} deg={deg} len={len} opacity={prog(f, 2, 12)} />
				<g opacity={prog(f, field, 12)}>
					<rect x={1000} y={190} width={820} height={140} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<line x1={1030} y1={260} x2={1790} y2={260} stroke={INK} strokeWidth={2} />
					<path d={Array.from({length: 76}, (_, i) => { const x = 1030 + i * 10; return `${i ? 'L' : 'M'}${x},${260 - 46 * Math.sin((2 * Math.PI * (x - 1030)) / 190 - f / 8)}`; }).join(' ')} fill="none" stroke={EBLUE.stroke} strokeWidth={4} />
					{Array.from({length: 8}, (_, i) => { const x = 1060 + i * 95; const e = 46 * Math.sin((2 * Math.PI * (x - 1030)) / 190 - f / 8); return <EArrow key={i} cx={x} cy={260 - e / 2} len={e / 2} deg={0} color={EBLUE.stroke} width={3} head={9} single />; })}
					<path d="M1790,260 l-16,-9 v18 z" fill={INK} />
				</g>
				{f >= longi ? <g opacity={prog(f, longi, 12)}>
					<rect x={SOUND.x} y={SOUND.y} width={SOUND.w} height={SOUND.h} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					{Array.from({length: 34}, (_, i) => { const x0 = SOUND.x + 40 + i * 22; return Array.from({length: 4}, (_, k) => <circle key={`${i}-${k}`} cx={x0 + displacement(w, x0, t)} cy={SOUND.y + 60 + k * 34} r={5} fill={GREY.stroke} />); })}
					<EArrow cx={SOUND.x + 140} cy={SOUND.y + 190} len={60} deg={90} color={GREY.stroke} width={5} />
					<line x1={SOUND.x + 300} y1={SOUND.y + 196} x2={SOUND.x + 720} y2={SOUND.y + 196} stroke={INK} strokeWidth={3} />
					<path d={`M${SOUND.x + 720},${SOUND.y + 196} l-16,-9 v18 z`} fill={INK} />
				</g> : null}
				{f >= restrict ? <g opacity={prog(f, restrict, 12)}><FilterFace cx={SOUND.x + 560} cy={SOUND.y + 110} r={70} axis={0} axisColor={NAVY.stroke} /></g> : null}
				{f >= transv ? <g opacity={prog(f, transv, 12)}>
					<EArrow cx={1100} cy={860} len={40} deg={0} color={EBLUE.stroke} width={6} />
					<EArrow cx={1340} cy={860} len={40} deg={90} color={GREY.stroke} width={6} />
				</g> : null}
				{f >= transv ? <><Mark x={1170} y={860} at={transv + 6} kind="tick" color={INK} size={30} /><Mark x={1430} y={860} at={transv + 10} kind="cross" color={SLATE.stroke} size={30} /></> : null}
			</FrameSvg>
			<Lbl x={C2[0]} y={C2[1] + 340} at={field} color={INK} size={28} anchor="middle">the beam end on: travelling towards you</Lbl>
			<Lbl x={C2[0] + 330} y={C2[1] - 250} at={field} color={EBLUE.ink} size={36}>E</Lbl>
			<Lbl x={1020} y={176} at={field} color={EBLUE.ink} size={26}>light from the side: E across the travel</Lbl>
			<HandTag x={96} y={240} text="every direction" at={unp} out={pol} size={34} color={EBLUE.ink} />
			<HandTag x={96} y={240} text="one direction" at={pol + 10} size={34} color={EBLUE.ink} marks={[{kind: 'circle', cx: C2[0], cy: C2[1], rx: 60, ry: 250}]} />
			<Lbl x={96} y={300} at={unp} out={pol} color={INK} size={28}>unpolarised: E in every direction across the beam</Lbl>
			<Chip x={1000} y={350} at={pol} size={26} w={820} color={EBLUE.ink} border={EBLUE.stroke}>Plane-polarised light: light in which the electric field oscillates in only one direction perpendicular to propagation.</Chip>
			<Chip x={1000} y={460} at={only} size={26} w={820} color={INK}>Polarisation: the restriction of the oscillations of a transverse wave to a single plane.</Chip>
			<Lbl x={SOUND.x + 20} y={SOUND.y - 20} at={longi} color={GREY.ink} size={28}>sound from the side: vibration along the travel</Lbl>
			<Lbl x={SOUND.x + 520} y={SOUND.y + 235} at={longi} color={INK} size={26}>travel</Lbl>
			<CrossedChip x={SOUND.x + 20} y={SOUND.y + 210} at={restrict + 10} crossAt={restrict + 24} size={28}>filter selects a direction</CrossedChip>
			<HandTag x={SOUND.x + 480} y={SOUND.y + 236} text="nothing to select" at={restrict + 30} size={30} color={SLATE.ink} />
			<Lbl x={1100} y={930} at={transv} color={INK} size={26} anchor="middle">across</Lbl>
			<Lbl x={1340} y={930} at={transv} color={INK} size={26} anchor="middle">along</Lbl>
			<Chip x={1480} y={830} at={transv + 10} size={26} w={340} color={INK}>polarisation → light is transverse</Chip>
		</>
	);
};

// ---------- 3. what a filter does ----------
const C3: Pt = [440, 560];
export const S03: React.FC = () => {
	const id = 'filter-action';
	const f = useCurrentFrame();
	const axis = cue(id, 'has a transmission axis'), along = cue(id, 'lets through the part of the electric field'), absorbs = cue(id, 'absorbs the part across it'), out = cue(id, 'polarised along the axis'), unpin = cue(id, 'With unpolarised light going in'), inten = cue(id, 'exactly half the intensity'), bright = cap(id, cue(id, 'never changes the brightness'));
	const rnd = f >= unpin;
	const deg = rnd ? randDeg(f, 4, 11) : 35;
	const fAxis = kf(f, [[bright, 0], [bright + 40, 90]]);
	const across = rnd ? 0.25 : f < absorbs ? 1 : 1 - prog(f, absorbs, 30) * 0.85;
	const n = rnd ? Math.max(1, Math.floor((f - unpin) / 4) + 1) : 0;
	let avg = 0;
	for (let i = 0; i < n; i++) avg += cos2(randDeg(unpin + i * 4, 4, 11));
	avg = n ? avg / n : 0;
	const ME = {x: 1000, y: 480, h: 380};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<EndOn c={C3} r={300} deg={deg} len={230} filter={{axis: fAxis, o: prog(f, axis, 12)}} comps={f >= along ? {axis: fAxis, across, along: 1} : undefined} />
				<g opacity={prog(f, 4, 12)}>
					<circle cx={1180} cy={360} r={120} fill="#cfe1f3" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
					{f >= out ? <EArrow cx={1180} cy={360} len={90 * Math.sin(f / 5)} deg={fAxis} color={EBLUE.stroke} width={7} /> : null}
				</g>
				{<g opacity={prog(f, 4, 12)}>
					<line x1={ME.x + 380} y1={ME.y + ME.h} x2={ME.x + 380} y2={ME.y + 100} stroke={INK} strokeWidth={3} />
					<rect x={ME.x + 360} y={ME.y + ME.h - 300 * avg} width={40} height={300 * avg} rx={5} fill={ORANGE.stroke} />
					<line x1={ME.x + 340} y1={ME.y + ME.h - 150} x2={ME.x + 420} y2={ME.y + ME.h - 150} stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="8 6" />
				</g>}
				{f >= inten ? <g opacity={prog(f, inten, 12)}>
					<rect x={1500} y={600} width={40} height={200} rx={5} fill={ORANGE.stroke} transform="translate(0 0)" />
					<rect x={1660} y={700} width={40} height={100} rx={5} fill={ORANGE.stroke} />
					<line x1={1470} y1={800} x2={1730} y2={800} stroke={INK} strokeWidth={3} />
					<FilterFace cx={1600} cy={720} r={30} axis={fAxis} axisColor={NAVY.stroke} />
				</g> : null}
			</FrameSvg>
			<Chip x={96} y={180} at={axis} size={26} w={760} color={INK}>Polarising filter: a material that transmits only one plane of polarisation and absorbs the perpendicular component.</Chip>
			<Lbl x={C3[0] + 60} y={C3[1] - 240} at={axis + 6} color={NAVY.ink} size={28}>transmission axis</Lbl>
			<HandTag x={C3[0] - 300} y={C3[1] + 350} text="along the axis: through" at={along + 10} size={30} color={EBLUE.ink} />
			<HandTag x={C3[0] + 40} y={C3[1] + 350} text="across: absorbed" at={absorbs + 6} out={unpin} size={30} color={EBLUE.ink} />
			<Lbl x={1180} y={210} at={4} color={INK} size={28} anchor="middle">light leaving the filter</Lbl>
			<Lbl x={1180} y={520} at={out} color={INK} size={28} anchor="middle">polarised along the axis</Lbl>
			<Lbl x={ME.x + 220} y={ME.y + 70} at={4} color={INK} size={28}>average passed (fraction of I₀)</Lbl>
			<Lbl x={ME.x + 430} y={ME.y + ME.h - 150} at={4} color={NAVY.ink} size={36}>½</Lbl>
			<Lbl x={ME.x + 380} y={ME.y + ME.h + 40} at={unpin} color={ORANGE.ink} size={32} anchor="middle">{fx(avg, 2)}</Lbl>
			<HandTag x={ME.x + 120} y={ME.y + 130} text="average over all directions" at={unpin + 20} size={28} color={INK} marks={[{kind: 'circle', cx: ME.x + 445, cy: ME.y + ME.h - 155, rx: 34, ry: 30}]} />
			<Lbl x={1520} y={850} at={inten} color={ORANGE.ink} size={30} anchor="middle">I₀</Lbl>
			<Lbl x={1680} y={850} at={inten} color={ORANGE.ink} size={30} anchor="middle">½I₀</Lbl>
			<Lbl x={1600} y={570} at={inten} color={GREY.ink} size={26} anchor="middle">ideal filter</Lbl>
			<HandTag x={1470} y={910} text="turn it: still ½I₀" at={bright} size={30} color={NAVY.ink} />
		</>
	);
};

// ---------- 4. Malus's law ----------
const C4: Pt = [400, 600];
const SB: PolarAt = {x: 980, y: 400, w: 840, g: 0.72, src: 1090, holders: [1360, 1620], sensor: 1790, source: 'lamp'};
const GP = {x: 1040, y: 720, w: 740, h: 170};
export const S04: React.FC = () => {
	const id = 'malus-law';
	const f = useCurrentFrame();
	const send = cue(id, 'send polarised light into a second filter'), split = cue(id, 'Split the electric field'), costh = cue(id, 'E cos theta'), sq = cue(id, 'square of the amplitude'), law = cue(id, "That's Malus's law"), imax = cue(id, 'I max is the intensity'), z = cue(id, 'At zero degrees'), f45 = cue(id, 'At forty-five degrees'), s60 = cue(id, 'At sixty degrees'), nothing = cap(id, cue(id, 'ninety degrees, nothing'));
	const th = kf(f, [[z - 20, 35], [z, 0], [f45, 0], [f45 + 18, 45], [s60, 45], [s60 + 18, 60], [nothing - 18, 60], [nothing, 90]]);
	const I = IMAX4 * cos2(th);
	const showRead = f >= z;
	const GX = (d: number) => GP.x + (d / 90) * GP.w, GY = (v: number) => GP.y + GP.h - v * GP.h;
	const drawTo = f < z ? 0 : th;
	const curve = Array.from({length: 61}, (_, i) => (i / 60) * drawTo).map((d, i) => `${i ? 'L' : 'M'}${GX(d)},${GY(cos2(d))}`).join(' ');
	const g = polarGeom(SB);
	const dots = [[0, z], [45, f45], [60, s60], [90, nothing]] as const;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage b={SB} axes={[0, th]} insets={0} bars={[{x: 1490, v: 1}, {x: 1710, v: cos2(th)}]} barH={80} opacity={prog(f, send, 12)} />
				<EndOn c={C4} r={240} deg={0} len={190} filter={{axis: th}} comps={f >= split ? {axis: th, across: f < costh ? 1 : 1 - 0.85 * prog(f, costh, 24)} : undefined} />
				{f >= costh ? <Arc c={C4} r={110} a0={90} a1={90 - th} opacity={prog(f, split, 12)} /> : null}
				<g opacity={prog(f, z - 30, 12)}>
					<line x1={GP.x} y1={GP.y + GP.h} x2={GP.x + GP.w} y2={GP.y + GP.h} stroke={INK} strokeWidth={3} />
					<line x1={GP.x} y1={GP.y} x2={GP.x} y2={GP.y + GP.h} stroke={INK} strokeWidth={3} />
					<path d={curve} fill="none" stroke={ORANGE.stroke} strokeWidth={5} />
					{dots.map(([d, at]) => f >= (d === 90 ? at : at + 18) ? <circle key={d} cx={GX(d)} cy={GY(cos2(d))} r={9} fill={ORANGE.stroke} stroke={INK} strokeWidth={2} /> : null)}
				</g>
			</FrameSvg>
			<Lbl x={C4[0]} y={C4[1] - 270} at={0} color={INK} size={28} anchor="middle">polarised light (E vertical) meets the analyser</Lbl>
			<Lbl x={C4[0] + 80} y={C4[1] - 120} at={costh} color={NAVY.ink} size={32}>θ</Lbl>
			<Lbl x={C4[0]} y={C4[1] + 290} at={costh} color={EBLUE.ink} size={34} anchor="middle">passed: E cos θ</Lbl>
			<Lbl x={SB.holders[0]} y={g.railY + 50} at={send} color={INK} size={26} anchor="middle">polariser</Lbl>
			<Lbl x={SB.holders[1]} y={g.railY + 50} at={send} color={INK} size={26} anchor="middle">analyser</Lbl>
			<Chip x={96} y={180} at={costh + 10} size={26} w={760} color={INK}>Cos is close: the part next to θ, along the axis, is E cos θ</Chip>
			<Chip x={980} y={500} at={sq} size={28} w={360} color={ORANGE.ink} border={ORANGE.stroke}>intensity ∝ amplitude²</Chip>
			<div style={{position: 'absolute', left: 1360, top: 492}}><Row at={law} size={52}>{f >= nothing ? <AnswerBox at={nothing}><span style={{whiteSpace: 'nowrap'}}>I = I_max cos²θ</span></AnswerBox> : <span style={{whiteSpace: 'nowrap'}}>I = I_max cos²θ</span>}</Row></div>
			<Lbl x={1700} y={476} at={law + 10} color={GREY.ink} size={26}>syllabus form</Lbl>
			<Lbl x={1380} y={606} at={imax} color={ORANGE.ink} size={26}>I_max: polarised light arriving</Lbl>
			<Lbl x={980} y={668} at={z} color={NAVY.ink} size={40}>{showRead ? `θ = ${fx(th, 0)}°   cos²θ = ${fx(cos2(th), 2)}   I = ${fx(I, 0)} W m⁻²` : ''}</Lbl>
			<Lbl x={GP.x + GP.w} y={GP.y - 12} at={z} color={GREY.ink} size={26} anchor="end">{`I_max = ${IMAX4} W m⁻² here`}</Lbl>
			{[0, 45, 90].map(d => <Lbl key={d} x={GX(d)} y={GP.y + GP.h + 34} at={z - 30} color={INK} size={26} anchor="middle">{`${d}°`}</Lbl>)}
			<Lbl x={GP.x - 14} y={GP.y + 10} at={z - 30} color={ORANGE.ink} size={26} anchor="end">I_max</Lbl>
			<HandTag x={660} y={420} text="E cos θ gets through" at={costh + 20} size={30} color={EBLUE.ink} />
			<HandTag x={660} y={890} text="square it for intensity" at={sq + 10} size={30} color={ORANGE.ink} />
		</>
	);
};

// ---------- 5. crossed filters ----------
export const ST2: PolarAt = {x: 120, y: 520, w: 1240, g: 0.95, src: 300, holders: [660, 980], sensor: 1290, source: 'lamp'};
const GP5 = {x: 220, y: 680, w: 1500, h: 200};
export const S05: React.FC = () => {
	const id = 'crossed';
	const f = useCurrentFrame();
	const right = cue(id, 'at right angles'), crossed = cue(id, 'The filters are crossed'), keep = cue(id, 'Keep turning the analyser'), o180 = cue(id, 'one hundred and eighty degrees'), ones = cap(id, cue(id, 'two dark ones'));
	const th = kf(f, [[keep, 90], [o180 + 10, 180]]);
	const ext = kf(f, [[o180, 90], [o180 + 40, 360]]);
	const GX = (d: number) => GP5.x + (d / 360) * GP5.w, GY = (v: number) => GP5.y + GP5.h - v * GP5.h;
	const curve = Array.from({length: 181}, (_, i) => (i / 180) * ext).map((d, i) => `${i ? 'L' : 'M'}${GX(d)},${GY(cos2(d))}`).join(' ');
	const pulse = f >= ones ? 0.5 + 0.5 * Math.sin(((f - ones) / 20) * Math.PI) : 0;
	const g = polarGeom(ST2);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage b={ST2} axes={[0, th]} bars={[{x: 480, v: 1}, {x: 820, v: 0.5}, {x: 1135, v: 0.5 * cos2(th)}]} barH={90} insetY={240} insetR={52} />
				<line x1={GP5.x} y1={GP5.y + GP5.h} x2={GP5.x + GP5.w} y2={GP5.y + GP5.h} stroke={INK} strokeWidth={3} />
				<line x1={GP5.x} y1={GP5.y} x2={GP5.x} y2={GP5.y + GP5.h} stroke={INK} strokeWidth={3} />
				<path d={curve} fill="none" stroke={ORANGE.stroke} strokeWidth={5} />
				{[0, 180, 360].map(d => d <= ext ? <circle key={d} cx={GX(d)} cy={GY(1)} r={9 + 6 * pulse} fill={ORANGE.stroke} stroke={INK} strokeWidth={2} /> : null)}
				{[90, 270].map(d => d <= ext ? <circle key={d} cx={GX(d)} cy={GY(0)} r={9 + 6 * pulse} fill="#fff" stroke={INK} strokeWidth={3} /> : null)}
				<circle cx={th >= 179 ? 1135 : 1135} cy={g.railY - 20} r={36} fill="none" stroke={NAVY.stroke} strokeWidth={4} opacity={prog(f, right, 12) * (1 - prog(f, keep, 10))} />
			</FrameSvg>
			{[0, 90, 180, 270, 360].map(d => <Lbl key={d} x={GX(d)} y={GP5.y + GP5.h + 34} at={0} color={INK} size={26} anchor="middle">{`${d}°`}</Lbl>)}
			<Lbl x={GP5.x - 14} y={GP5.y + 10} at={0} color={ORANGE.ink} size={26} anchor="end">I</Lbl>
			<Lbl x={1400} y={300} at={crossed} color={INK} size={34}>{`crossed: θ = 90°`}</Lbl>
			<Lbl x={1400} y={360} at={right} color={NAVY.ink} size={34}>{`cos 90° = 0`}</Lbl>
			<Lbl x={1400} y={430} at={keep} color={NAVY.ink} size={40}>{`θ = ${fx(th, 0)}°`}</Lbl>
			<Lbl x={1400} y={500} at={crossed} color={GREY.ink} size={26}>ideal filters: exactly zero</Lbl>
			<HandTag x={GX(200)} y={GP5.y - 20} text="two bright, two dark per turn" at={ones} size={30} color={ORANGE.ink} marks={[{kind: 'circle', cx: GX(90), cy: GY(0), rx: 30, ry: 26}]} />
			<Strip x={1400} y={560} at={2} size={30}>I = I_max cos²θ</Strip>
		</>
	);
};
