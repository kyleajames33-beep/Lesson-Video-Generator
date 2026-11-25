// Scenes 1 to 6: the hook (last time's expanding grid; a near and a far galaxy, which light is more stretched?), the
// redshift slider (lab and galaxy spectra in true colours, every line sliding by the same fraction), Hubble's graph
// (the painted galaxy with a pulsing star; points, the line through the origin, the gradient), why a straight line
// means expansion (a dot grid stretched by a factor, seen from three dots), the worked distance (working layout) and
// the limits (the graph's zoom near the origin; Andromeda blueshifted).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {STAR_WHITE} from '../../physics/light/stars';
import {SpectrumStrip, nmX} from '../../physics/light/spectrum';
import {DotGrid, GALAXY, Readout, WaveLine, gridPt} from '../../physics/atom/universe';
import {Slider} from '../phys-y12-m7-v04/parts';
import {HandoffBoard01, M8V01FinalFrame} from '../phys-y12-m8-v01/s3';
import {AND_D, AND_HUB, AND_OBS, C_KMS, H0, HA, HB, HEAD, HEAD_SIZE, HG, HUBBLE_PTS, SLIDER_Z, T_HUBBLE_GYR, W_D, W_LY, W_OBS, W_REST, W_SLIP, W_V, W_Z, cap, cue, lamObs} from './common';
import {AMBER, BLUE, EvidenceColumn, GREY, Givens, INK, Lbl, NAVY, PlotAxes, RED, Strip, TEAL, fx, px, py, sci} from './parts';
import type {PlotBox} from './parts';

const LINES = [HG, HB, HA] as const;

// ---------- 1. hook ----------
const NEAR = {x: 150, y: 300, w: 380}, FAR = {x: 1060, y: 360, w: 260};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const pc = cue(id, 'predictions you can check'), dg = cue(id, 'a distant galaxy'), pred = cue(id, 'prediction'), ms = cue(id, 'More stretched, more redshifted'), uni = cap(id, cue(id, 'expanding hot early Universe'));
	if (f < 1) return <M8V01FinalFrame />;
	const m = prog(f, dg, 40);
	const g1 = {x: 285 + (NEAR.x - 285) * m, y: 692 + (NEAR.y - 692) * m, w: 150 + (NEAR.w - 150) * m};
	const g2 = {x: 485 + (FAR.x - 485) * m, y: 692 + (FAR.y - 692) * m, w: 150 + (FAR.w - 150) * m};
	const tickAt = Math.max(ms, pred + 92);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 2, 18)}}><HandoffBoard01 f={0} final heading={false} chip={false} galaxies={false} /></div>
			<HandoffBoard01 f={0} final heading={false} chip={false} marks={false} timeline={false} galaxies={false} waves={false} />
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={GALAXY} p={g1} />
				<LPlate spec={GALAXY} p={g2} />
				<g opacity={prog(f, ms, 14)}>
					<rect x={130} y={560} width={460} height={110} rx={12} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
					<WaveLine x0={150} x1={150 + 6 * 70} y={615} lambda={70} amp={20} color="#d18f1f" draw={prog(f, ms, 20)} />
					<rect x={990} y={560} width={460} height={110} rx={12} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
					<WaveLine x0={1010} x1={1010 + 4 * 105} y={615} lambda={105} amp={20} color={RED.stroke} draw={prog(f, ms + 6, 20)} />
					<path d={`M150,580 v-8 h70 v8 M1010,580 v-8 h105 v8`} fill="none" stroke={RED.stroke} strokeWidth={4} />
				</g>
				<Countdown start={pred} end={pred + 90} x={560} y={800} r={40} />
				{f >= tickAt ? <Mark x={920} y={704} at={tickAt} kind="tick" color={INK} size={34} /> : null}
			</FrameSvg>
			<EvidenceColumn ticks={[undefined, undefined, undefined, undefined]} at={pc} />
			<HandTag x={1500} y={620} text="four tests" at={pc + 16} size={34} color={INK} />
			<HandTag x={NEAR.x + 20} y={NEAR.y - 20} text="near" at={dg + 40} size={34} color={GREY.ink} />
			<HandTag x={FAR.x + 20} y={FAR.y - 20} text="far" at={dg + 44} size={34} color={GREY.ink} />
			<Chip x={640} y={680} at={pred} size={30} color={INK}>more redshifted</Chip>
			<Chip x={640} y={740} at={pred + 4} size={30} color={INK}>less redshifted</Chip>
			<Chip x={640} y={800} at={pred + 8} size={30} color={INK}>the same</Chip>
			<HandTag x={1130} y={720} text="longer λ" at={ms + 24} size={36} color={RED.ink} />
			<Chip x={96} y={870} at={-30} out={uni} size={30} w={1728} color={INK} border={INK}>Next: what evidence supports an expanding hot early Universe?</Chip>
		</>
	);
};

// ---------- 2. measuring the stretch ----------
const LAB = {x: 420, y: 220, w: 1300, h: 70}, GAL = {x: 420, y: 360, w: 1300, h: 70};
export const S02: React.FC = () => {
	const id = 'redshift';
	const f = useCurrentFrame();
	const red = cue(id, 'towards the red'), cw = cue(id, 'the change in wavelength divided by the rest wavelength'), st = cue(id, 'stretch'), dl = cue(id, 'delta lambda over lambda equals v over c'), sz = cue(id, 'So for small z'), cz = cap(id, cue(id, 'about c times z'));
	const z = f < sz ? SLIDER_Z[2] * prog(f, red, 40) : kf(f, [[sz, SLIDER_Z[2]], [sz + 10, SLIDER_Z[1]], [sz + 30, SLIDER_Z[1]], [sz + 40, SLIDER_Z[2]], [sz + 56, SLIDER_Z[2]], [sz + 66, SLIDER_Z[3]]], false);
	const shown = f < sz ? z : [SLIDER_Z[1], SLIDER_Z[2], SLIDER_Z[3]].reduce((a, b) => (Math.abs(b - z) < Math.abs(a - z) ? b : a));
	const conn = prog(f, red + 30, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={GALAXY} p={{x: 96, y: 330, w: 280}} />
				<SpectrumStrip s={LAB} kind="absorption" lines={LINES} lineW={7} axis={false} />
				<SpectrumStrip s={GAL} kind="absorption" lines={LINES} shift={1 + z} lineW={7} axis ticks={[400, 450, 500, 550, 600, 650, 700]} />
				{LINES.map(l => <line key={l} x1={nmX(LAB, l)} y1={LAB.y + LAB.h} x2={nmX(GAL, l * (1 + z))} y2={GAL.y} stroke={TEAL.stroke} strokeWidth={4} opacity={conn} />)}
				<Slider x={420} y={560} w={900} v0={0} v1={0.1} v={z} ticks={[0, 0.02, 0.04, 0.06, 0.08, 0.1]} fmt={t => fx(t, 2)} color={TEAL.stroke} label="z" />
			</FrameSvg>
			<Lbl x={LAB.x} y={LAB.y - 22} at={0} color={INK} size={28}>laboratory hydrogen</Lbl>
			<Lbl x={GAL.x} y={GAL.y - 22} at={0} color={INK} size={28}>galaxy</Lbl>
			<Lbl x={GAL.x + GAL.w} y={GAL.y + GAL.h + 80} at={0} color={INK} size={26} anchor="end">wavelength (nm)</Lbl>
			<HandTag x={1440} y={620} text="every line, same fraction" at={red + 40} size={32} color={TEAL.ink} />
			<Readout x={420} y={640} label="z" value={fx(shown, shown >= 0.08 ? 3 : 2)} color={TEAL.ink} w={220} />
			<Readout x={670} y={640} label="Hα" value={`${fx(lamObs(HA, shown), 1)} nm`} color={TEAL.ink} w={300} />
			<Readout x={1000} y={640} label="v ≈ cz" value={f >= sz ? (shown ? `${sci(C_KMS * shown, shown >= 0.08 ? 2 : 1)} km s⁻¹` : '0') : '...'} color={NAVY.ink} w={400} />
			<div style={{position: 'absolute', left: 96, top: 790}}><Row at={cw} size={44}>z = (λobs − λrest) / λrest = Δλ / λrest</Row></div>
			<Lbl x={96} y={890} at={st} color={TEAL.ink} size={30}>z: fractional stretch (no units)</Lbl>
			<Chip x={1000} y={790} at={dl} size={30} color={INK}>Δλ/λ = v/c (an earlier video, v ≪ c)</Chip>
			<div style={{position: 'absolute', left: 1000, top: 860}}><Row at={cz - 6} size={44}><AnswerBox at={cz}>v ≈ cz (small z)</AnswerBox></Row></div>
			<HandTag x={1440} y={700} text="more stretch, faster" at={sz + 70} size={32} color={NAVY.ink} />
		</>
	);
};

// ---------- 3. Hubble's graph ----------
const HG3: PlotBox = {x: 760, y: 250, w: 660, h: 470, x0: 0, x1: 500, y0: 0, y1: 35000};
const sp = (v: number) => v.toLocaleString('en-AU').replace(/,/g, ' ');
export const S03: React.FC = () => {
	const id = 'hubble-graph';
	const f = useCurrentFrame();
	const ps = cue(id, 'pulsing stars whose rhythm reveals how bright they really are'), di = cue(id, 'distance'), pl = cue(id, 'plotted speed against distance'), or = cue(id, 'origin'), tf = cue(id, 'Twice as far, twice as fast'), vh = cue(id, 'v equals H nought d'), mp = cap(id, cue(id, 'megaparsec'));
	const pulse = 0.55 + 0.45 * Math.sin(f / 9);
	const each = Math.max(4, (or - pl - 10) / HUBBLE_PTS.length);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={GALAXY} p={{x: 96, y: 200, w: 300}} />
				<LPlate spec={STAR_WHITE} p={{x: 178, y: 256, w: 40}} opacity={pulse} />
				<PlotAxes b={HG3} xt={[0, 100, 200, 300, 400, 500]} yt={[0, 10000, 20000, 30000]} fy={sp} xl="distance d (Mpc)" yl="recession speed v (km s⁻¹)" opacity={prog(f, pl, 12)} />
				{HUBBLE_PTS.map(([d, v], i) => { const o = prog(f, pl + 6 + i * each, 8); return o > 0.001 ? <circle key={i} cx={px(HG3, d)} cy={py(HG3, v)} r={10} fill={NAVY.stroke} opacity={o} /> : null; })}
				<line x1={px(HG3, 0)} y1={py(HG3, 0)} x2={px(HG3, 0) + (px(HG3, 500) - px(HG3, 0)) * prog(f, or, 30)} y2={py(HG3, 0) + (py(HG3, 35000) - py(HG3, 0)) * prog(f, or, 30)} stroke={AMBER.stroke} strokeWidth={5} />
				{f >= mp ? <g opacity={prog(f, mp, 14)}>
					<path d={`M${px(HG3, 200)},${py(HG3, 14000)} H${px(HG3, 400)} V${py(HG3, 28000)}`} fill="none" stroke={AMBER.ink} strokeWidth={4} strokeDasharray="10 7" />
				</g> : null}
			</FrameSvg>
			<Lbl x={HG3.x + 20} y={HG3.y + 30} at={pl + 10} color={GREY.ink} size={26}>illustrative modern data</Lbl>
			<Lbl x={96} y={470} at={ps} color={INK} size={30}>rhythm → true brightness (luminosity)</Lbl>
			<Chip x={96} y={510} at={di} size={28} w={600} color={INK}>dimmer than expected → farther (inverse square law, Year 11)</Chip>
			<HandTag x={0} y={0} at={tf} color={NAVY.stroke} marks={[{kind: 'circle', cx: px(HG3, 200), cy: py(HG3, 14000), rx: 26, ry: 24}, {kind: 'circle', cx: px(HG3, 400), cy: py(HG3, 28000), rx: 26, ry: 24}]} />
			<HandTag x={px(HG3, 200) + 30} y={py(HG3, 14000) + 50} text="× 2, × 2" at={tf + 12} size={34} color={NAVY.ink} />
			<Strip x={96} y={640} at={vh} size={40}>v = H₀d</Strip>
			<HandTag x={HG3.x + 40} y={HG3.y + 80} text="the gradient is H₀" at={vh + 16} size={34} color={AMBER.ink} marks={[{kind: 'arrow', from: [px(HG3, 120), py(HG3, 12000)], to: [px(HG3, 320), py(HG3, 26000)], bend: 0.05}]} />
			<div style={{position: 'absolute', left: HG3.x - 60, top: 858}}><Row at={mp - 6} size={40}><AnswerBox at={mp}>{`H₀ = 28 000 / 400 = ${fx(28000 / 400)} km s⁻¹ Mpc⁻¹`}</AnswerBox></Row></div>
			<Chip x={96} y={740} at={mp + 10} size={28} w={560} color={INK}>1 Mpc ≈ 3.26 million light years</Chip>
			<EvidenceColumn ticks={[mp + 24, undefined, undefined, undefined]} />
		</>
	);
};

// ---------- 4. why a straight line means expansion ----------
const GB4 = {x: 96, y: 220, w: 1084, h: 580};
const C4 = {x: 638, y: 510};
const HOPS: readonly (readonly [number, number])[] = [[0, 0], [-2, 1], [0, -1]];
export const S04: React.FC = () => {
	const id = 'expansion-meaning';
	const f = useCurrentFrame();
	const sf = cue(id, 'stretch all the spacing by the same factor'), one = cue(id, 'one step away moves one step further'), two = cue(id, 'Two steps away, it moves two steps'), ev = cue(id, 'seen from every galaxy'), cen = cue(id, 'centre'), rb = cue(id, 'Run the expansion backwards'), yrs = cap(id, cue(id, 'years'));
	const s0 = 80, s1 = 160;
	const s = f < rb ? s0 + (s1 - s0) * prog(f, sf, 40) : s1 + (50 - s1) * prog(f, rb, 50);
	const hop = f < ev ? 0 : Math.min(2, Math.floor((f - ev) / 30));
	const U = HOPS[hop];
	const [ux, uy] = gridPt(C4.x, C4.y, s, U[0], U[1]);
	const arrows = f >= one && f < rb;
	const arrow = (k: number, at: number) => {
		if (f < at) return null;
		const gx = ux + k * s0, nx = ux + k * s1;
		return <g key={k} opacity={prog(f, at, 12)}><circle cx={gx} cy={uy} r={9} fill="none" stroke={INK} strokeWidth={2.5} strokeDasharray="4 4" /><line x1={gx} y1={uy - 30} x2={nx - 12} y2={uy - 30} stroke={RED.stroke} strokeWidth={5} /><path d={`M${nx},${uy - 30} l-16,-9 v18 z`} fill={RED.stroke} /></g>;
	};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<DotGrid box={GB4} cx={C4.x} cy={C4.y} s={s} n={14} r={13} hi={[U]} hiColor={AMBER.stroke} links={1} />
				{arrows ? <g>{arrow(1, one)}{arrow(2, two)}</g> : null}
			</FrameSvg>
			<Lbl x={ux} y={uy + 40} at={0} out={rb} color={AMBER.ink} size={30} anchor="middle">us</Lbl>
			<HandTag x={0} y={0} at={ev} out={rb} color={INK} marks={[{kind: 'circle', cx: ux, cy: uy, rx: 34, ry: 32}]} />
			{arrows && f >= one ? <Lbl x={ux + s1} y={uy - 70} at={one + 10} color={INK} size={28} anchor="middle">1 step → +1</Lbl> : null}
			{arrows && f >= two ? <Lbl x={ux + 2 * s1} y={uy - 110} at={two + 10} color={INK} size={28} anchor="middle">2 steps → +2</Lbl> : null}
			<Lbl x={GB4.x} y={GB4.y - 24} at={0} color={GREY.ink} size={28}>a grid of galaxies (model): every spacing stretched by the same factor</Lbl>
			<Readout x={1210} y={170} label="spacing" value={`× ${fx(s / s0, 1)}`} color={RED.ink} w={300} />
			<HandTag x={1210} y={300} text="same view from anywhere" at={ev + 70} size={34} color={INK} />
			<Chip x={1210} y={360} at={cen} size={30} color={INK}>no centre: expansion everywhere</Chip>
			<HandTag x={1210} y={480} text="denser and hotter in the past" at={rb + 20} size={34} color={RED.ink} />
			<Chip x={1210} y={540} at={yrs} size={30} w={600} color={INK}>{`1/H₀ ≈ ${fx(T_HUBBLE_GYR)} billion years (rough; the rate has changed: age 13.8 billion years)`}</Chip>
			<HandTag x={1210} y={720} text="rough age only" at={yrs + 16} size={32} color={GREY.ink} />
		</>
	);
};

// ---------- 5. worked example: how far is it? ----------
const MINI = {x: 1220, y: 400, w: 600, h: 44};
export const S05: React.FC = () => {
	const id = 'worked-distance';
	const e8 = cue(id, 'eight', 2), sec = cue(id, 'second', 2), mp = cap(id, cue(id, 'megaparsecs'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={168} at={2} size={34}>{"Find the galaxy's distance."}</Strip>
			<Strip x={96} y={236} at={6} size={34}>z = Δλ/λrest; v ≈ cz; v = H₀d</Strip>
			<Givens x={96} y={312} w={1060} at={10} size={30} lines={[`λrest = ${W_REST} nm, λobs = ${W_OBS} nm (Hα, site)`, `c = ${sci(C_KMS, 2)} km s⁻¹; H₀ = ${H0} km s⁻¹ Mpc⁻¹`]} />
			<FrameSvg>
				<LPlate spec={GALAXY} p={{x: 1400, y: 168, w: 260}} />
				<SpectrumStrip s={MINI} kind="absorption" lines={[HA]} shift={W_OBS / HA} lineW={8} axis ticks={[400, 500, 600, 700]} />
			</FrameSvg>
			<Lbl x={MINI.x} y={MINI.y - 20} at={0} color={INK} size={26}>Hα observed at 714 nm</Lbl>
			<div style={{position: 'absolute', left: 96, top: 480, display: 'flex', flexDirection: 'column', gap: 18, width: 1100}}>
				<Row at={e8 - 6} ageAt={sec} size={48}>{`z = (${W_OBS} − ${W_REST}) / ${W_REST} = 58/656 = ${fx(W_Z, 4)}`}</Row>
				<Row at={sec - 6} ageAt={mp} size={48}>{`v = cz = (${sci(C_KMS, 2)})(${fx(W_Z, 4)}) = ${sci(W_V, 2)} km s⁻¹`}</Row>
				<Row at={mp - 6} size={52}><AnswerBox at={mp}>d = v/H₀ = ({sci(W_V, 2)}) <MarkSpan at={mp + 16} color={AMBER.stroke}>/ 70</MarkSpan>{` = ${fx(W_D)} ≈ ${fx(Math.round(W_D / 10) * 10)} Mpc`}</AnswerBox></Row>
			</div>
			<HandTag x={1220} y={560} text="z < 0.1: v ≈ cz is fine" at={e8 + 16} size={32} color={TEAL.ink} />
			<CrossedChip x={1220} y={620} at={e8 + 40} crossAt={e8 + 58} out={mp} size={28} caption="Δλ on top, not λobs (v would beat c)">{`z = ${W_OBS}/${W_REST} = ${fx(W_SLIP, 2)}`}</CrossedChip>
			<HandTag x={1220} y={780} text="keep the guard digit" at={sec + 16} out={mp} size={32} color={NAVY.ink} />
			<Lbl x={96} y={830} at={mp + 24} color={INK} size={32}>{`380 × 3.26 million ly ≈ ${sci(W_LY, 1)} ly`}</Lbl>
		</>
	);
};

// ---------- 6. where the simple law fails ----------
const Z6: PlotBox = {x: 200, y: 270, w: 560, h: 430, x0: 0, x1: 10, y0: -600, y1: 1200};
const NEARBY: readonly (readonly [number, number])[] = [[1.2, 380], [2.1, -40], [3.0, 520], [3.6, 120], [4.4, 610], [5.2, 180], [6.0, 760], [6.8, 300], [7.5, 820], [8.4, 420], [9.2, 900]];
const AND = {x: 960, y: 200, w: 300};
const AS = {x: 860, y: 440, w: 640, h: 48};
export const S06: React.FC = () => {
	const id = 'limits';
	const f = useCurrentFrame();
	const om = cue(id, "a galaxy's own motion can swamp the expansion"), bs = cue(id, 'blueshifted'), fi = cue(id, 'fifty'), vb = cue(id, 'v equals c z breaks down'), ten = cap(id, cue(id, 'ten'));
	const blue = prog(f, bs, 30) * 0.06;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<PlotAxes b={Z6} xt={[0, 2, 4, 6, 8, 10]} yt={[-500, 0, 500, 1000]} fy={v => (v < 0 ? `−${-v}` : `${v}`)} xl="distance d (Mpc)" yl="v (km s⁻¹), + away" />
				<line x1={px(Z6, 0)} y1={py(Z6, 0)} x2={px(Z6, 10)} y2={py(Z6, 700)} stroke={AMBER.stroke} strokeWidth={5} />
				{NEARBY.map(([d, v], i) => <circle key={i} cx={px(Z6, d)} cy={py(Z6, v)} r={10} fill={NAVY.stroke} opacity={prog(f, om + i * 3, 10)} />)}
				<circle cx={px(Z6, AND_D)} cy={py(Z6, -AND_OBS)} r={13} fill={NAVY.stroke} stroke={INK} strokeWidth={3} opacity={prog(f, bs, 12)} />
				<LPlate spec={GALAXY} p={AND} opacity={prog(f, bs, 14)} />
				<SpectrumStrip s={AS} kind="absorption" lines={LINES} shift={1 - blue} lineW={7} axis ticks={[400, 500, 600, 700]} opacity={prog(f, bs, 14)} />
				{f >= fi ? <g opacity={prog(f, fi, 14)}>
					<line x1={1200} y1={600} x2={1200 - AND_OBS} y2={600} stroke={NAVY.stroke} strokeWidth={8} /><path d={`M${1200 - AND_OBS - 14},600 l22,-13 v26 z`} fill={NAVY.stroke} />
					<line x1={1200} y1={700} x2={1200 + AND_HUB} y2={700} stroke={AMBER.stroke} strokeWidth={8} /><path d={`M${1200 + AND_HUB + 14},700 l-22,-13 v26 z`} fill={AMBER.stroke} />
				</g> : null}
			</FrameSvg>
			<Lbl x={Z6.x + 20} y={Z6.y + 20} at={om} color={GREY.ink} size={26}>zoom: nearby galaxies (illustrative)</Lbl>
			<HandTag x={Z6.x + 230} y={Z6.y + 70} text="own motion (gravity) adds scatter" at={om + 30} out={vb} size={30} color={NAVY.ink} />
			<Lbl x={AND.x + AND.w + 20} y={AND.y + 70} at={bs + 10} color={BLUE.ink} size={30}>Andromeda: blueshift, approaching</Lbl>
			<Lbl x={860} y={650} at={fi} color={NAVY.ink} size={28}>{`observed: about ${AND_OBS} km s⁻¹ towards us (relative to the Sun)`}</Lbl>
			<Lbl x={860} y={750} at={fi + 8} color={AMBER.ink} size={28}>{`Hubble-law prediction: H₀d = ${H0} × ${AND_D} ≈ ${fx(AND_HUB)} km s⁻¹ away`}</Lbl>
			<HandTag x={1400} y={560} text="gravity wins nearby" at={fi + 20} size={32} color={NAVY.ink} marks={[{kind: 'circle', cx: 1050, cy: 600, rx: 170, ry: 34}]} />
			<Chip x={96} y={820} at={vb} size={30} color={INK}>v ≈ cz: only for z ≲ 0.1</Chip>
			<CrossedChip x={600} y={820} at={vb + 60} crossAt={vb + 78} size={28} caption="not 2c">z = 2 means v = 2c</CrossedChip>
			<Lbl x={1200} y={850} at={ten} color={INK} size={30}>observed galaxies: z &gt; 10</Lbl>
		</>
	);
};
