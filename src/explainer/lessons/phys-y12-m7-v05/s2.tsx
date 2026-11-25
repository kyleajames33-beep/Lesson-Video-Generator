// Scenes 6 to 10: the pattern on the screen (a face-on single-slit pattern and its brightness curve from the waves
// engine, the cancelling inset, the slit narrowing, green against red, a straight edge's fringes), Newton or Huygens
// (the model duel built one row at a time with small live diagrams), the evidence (the observed column, the painted
// mirror for Foucault, the Poisson stage, the accepted wave model), the investigation (the bench again: the slit sweep,
// red then green, a hair, laser safety) and the memory aid (two Huygens panels).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {MemoryCard} from '../../shared/scenes';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, Row} from '../../physics/projectile/board';
import {PatternGraph, ScreenView, benchGeom} from '../../physics/light/bench';
import {ApertureWaves, Barrier} from '../../physics/light/wavefronts';
import {GREEN, HEAD, HEAD_SIZE, RED, SWEEP, bandMm, cap, cue, slitBright} from './common';
import {B1, BenchRig, DUEL, DUEL_ROWS, DuelSummary, GREEN_L, GREY, Lbl, MirrorThumb, ParticleIcon, RED_INK, RED_L, TEAL, WaveIcon, bandText, fx} from './parts';

// ---------- 6. the pattern on the screen ----------
const SV6 = {x: 96, y: 190, w: 1300, h: 110}, GR6 = {x: 96, y: 330, w: 1300, h: 170};
const MM6 = 40;
/** A straight edge's shadow: dark on the shadow side, fine fringes on the lit side (schematic). */
const edgeBright = (u: number) => (u < 0 ? 0.28 * Math.exp(u * 9) : Math.min(1, 1 + 0.38 * Math.cos(28 * u * u + 0.6) * Math.exp(-3.5 * u)));
export const S06: React.FC = () => {
	const id = 'slit-pattern';
	const f = useCurrentFrame();
	const faint = cue(id, 'much fainter'), canc = cue(id, 'come from cancelling'), noth = cue(id, 'adds up to nothing'), wider = cue(id, 'spreads wider'), wl = cue(id, 'longer wavelength'), edge = cue(id, 'shadow of a straight edge'), fr = cap(id, cue(id, 'bright and dark fringes'));
	const a = kf(f, [[wider, 0.1], [wider + 30, 0.05]]);
	const red = (u: number) => slitBright(u * MM6, a, RED), green = (u: number) => slitBright(u * MM6, a, GREEN);
	const uDark = ((RED * 2.0) / (a * 1e-3)) * 1e3 / MM6;
	const uSide = 1.43 * uDark;
	const X = (u: number) => SV6.x + ((u + 1) / 2) * SV6.w;
	const inset = prog(f, noth, 14) * (1 - prog(f, wider, 14));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<ScreenView x={SV6.x} y={SV6.y} w={SV6.w} h={SV6.h} bright={red} color={RED_L} n={260} />
				<PatternGraph x={GR6.x} y={GR6.y} w={GR6.w} h={GR6.h} fn={red} color={RED_L} n={300} />
				{f >= faint ? [-1, 1].map(s => <ellipse key={s} cx={X(s * uSide)} cy={GR6.y + GR6.h - 14} rx={70} ry={30} fill="none" stroke={RED_INK} strokeWidth={4} opacity={prog(f, faint, 12) * (1 - prog(f, wider, 10))} />) : null}
				{f >= canc ? <ellipse cx={X(uDark)} cy={SV6.y + SV6.h / 2} rx={34} ry={74} fill="none" stroke={RED_INK} strokeWidth={5} opacity={prog(f, canc, 12) * (1 - prog(f, wider, 10))} /> : null}
				{inset > 0.001 ? <g opacity={inset}>
					<rect x={96} y={560} width={760} height={330} rx={12} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<rect x={176} y={590} width={14} height={270} fill="#4a4643" />
					<line x1={183} y1={600} x2={183} y2={850} stroke={RED_L} strokeWidth={6} />
					<line x1={168} y1={725} x2={198} y2={725} stroke={INK} strokeWidth={3} strokeDasharray="4 4" />
					{[650, 780].map((y, i) => <g key={y}><circle cx={183} cy={y} r={8} fill={TEAL.stroke} /><line x1={183} y1={y} x2={520} y2={y - 90} stroke={TEAL.stroke} strokeWidth={3} strokeDasharray={i ? '9 7' : undefined} /></g>)}
					{[0, 1].map(i => <path key={i} d={Array.from({length: 60}, (_, k) => `${k ? 'L' : 'M'}${560 + k * 4},${640 + i * 70 + 22 * Math.sin((k / 60) * 4 * Math.PI + i * Math.PI)}`).join(' ')} fill="none" stroke={TEAL.stroke} strokeWidth={4} strokeDasharray={i ? '9 7' : undefined} />)}
					<line x1={560} y1={820} x2={800} y2={820} stroke={INK} strokeWidth={5} />
				</g> : null}
				{f >= wl ? <ScreenView x={SV6.x} y={560} w={SV6.w} h={100} bright={green} color={GREEN_L} n={260} opacity={prog(f, wl, 14)} /> : null}
				{f >= edge ? <ScreenView x={SV6.x} y={740} w={SV6.w} h={90} bright={edgeBright} color={RED_L} n={300} opacity={prog(f, edge, 14)} /> : null}
				{f >= edge ? <line x1={X(0)} y1={725} x2={X(0)} y2={845} stroke={INK} strokeWidth={3} strokeDasharray="6 6" opacity={prog(f, edge, 14)} /> : null}
			</FrameSvg>
			<Lbl x={SV6.x} y={SV6.y - 20} at={0} color={INK} size={26}>single slit, red laser: screen face on (schematic)</Lbl>
			<Lbl x={GR6.x + GR6.w} y={GR6.y + GR6.h + 30} at={0} color={INK} size={26} anchor="end">brightness across the screen (schematic)</Lbl>
			<HandTag x={1420} y={SV6.y + 60} text="bright, wide centre" at={4} size={32} color={RED_INK} />
			<HandTag x={1420} y={GR6.y + 120} text="much fainter" at={faint + 8} out={wider} size={32} color={RED_INK} />
			<HandTag x={1420} y={GR6.y + 30} text="dark: cancelled, not empty" at={canc + 10} out={wider} size={30} color={RED_INK} />
			<Lbl x={120} y={590} at={noth} out={wider} color={INK} size={26}>slit</Lbl>
			<Lbl x={560} y={600} at={noth} out={wider} color={INK} size={26}>from matching points</Lbl>
			<Lbl x={560} y={860} at={noth} out={wider} color={INK} size={26}>sum: zero</Lbl>
			<HandTag x={230} y={860} text="out of step: cancel" at={noth + 16} out={wider} size={32} color={TEAL.ink} />
			<Lbl x={1420} y={SV6.y + 110} at={wider} color={INK} size={44}>{`slit ${fx(a, 2)} mm`}</Lbl>
			<Lbl x={1420} y={600} at={wl} color={GREEN_L} size={30}>green: shorter λ</Lbl>
			<Lbl x={1420} y={640} at={wl + 10} color={RED_INK} size={30}>red: longer λ, wider</Lbl>
			<Lbl x={1420} y={790} at={edge} color={INK} size={30}>straight edge</Lbl>
			<Lbl x={1420} y={830} at={fr} color={INK} size={28}>fringes at the edge</Lbl>
			<Lbl x={X(-0.5)} y={870} at={edge + 10} color={GREY.ink} size={26} anchor="middle">shadow side (schematic)</Lbl>
		</>
	);
};

// ---------- 7. Newton or Huygens? ----------
const CUR7S = [{y: 290, h: 400}, {y: 350, h: 360}, {y: 410, h: 320}];
export const S07: React.FC = () => {
	const id = 'newton-huygens';
	const f = useCurrentFrame();
	const two = cue(id, 'two models of light'), newton = cue(id, 'Isaac Newton said'), huy = cue(id, 'Huygens said light is a wave'), refl = cue(id, 'Both could explain reflection'), sharp = cue(id, 'sharp shadows'), up = cue(id, 'speed up'), down = cue(id, 'slow down'), cent = cue(id, 'For about a century'), miss = cap(id, cue(id, 'easy to miss'));
	const cur = f >= up ? 2 : f >= sharp ? 1 : f >= refl ? 0 : -1;
	const row = cur >= 0 ? DUEL_ROWS[cur] : null;
	const t0 = [refl, sharp, up][Math.max(0, cur)];
	const CUR7 = CUR7S[Math.max(0, cur)];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Lbl x={DUEL.newton} y={200} at={newton} color={GREY.ink} size={32}>Newton: corpuscles (particles)</Lbl>
			<Lbl x={DUEL.huygens} y={200} at={huy} color={TEAL.ink} size={32}>Huygens: waves</Lbl>
			<Lbl x={DUEL.label} y={200} at={two} color={INK} size={30}>late 1600s</Lbl>
			{cur >= 1 ? <DuelSummary x={96} y={250} row={DUEL_ROWS[0]} at={sharp} w={1400} /> : null}
			{cur >= 2 ? <DuelSummary x={96} y={320} row={DUEL_ROWS[1]} at={up} w={1400} /> : null}
			<FrameSvg>
				{cur < 0 ? <g opacity={prog(f, newton, 14)}><ParticleIcon x={DUEL.newton} y={CUR7.y} w={DUEL.w} h={CUR7.h} f={f} /></g> : null}
				{cur < 0 ? <g opacity={prog(f, huy, 14)}><WaveIcon x={DUEL.huygens} y={CUR7.y} w={DUEL.w} h={CUR7.h} f={f} id="v05-w0" /></g> : null}
				{cur >= 0 ? <g opacity={prog(f, t0, 14)}>
					<ParticleIcon x={DUEL.newton} y={CUR7.y} w={DUEL.w} h={CUR7.h} f={f} gap={cur === 1} water={cur === 2} />
					<WaveIcon x={DUEL.huygens} y={CUR7.y} w={DUEL.w} h={CUR7.h} f={f} gap={cur === 1} water={cur === 2} id={`v05-w${cur}`} />
					{cur === 0 ? [DUEL.newton, DUEL.huygens].map(x => <line key={x} x1={x + DUEL.w - 8} y1={CUR7.y + 10} x2={x + DUEL.w - 8} y2={CUR7.y + CUR7.h - 10} stroke="#7e8b96" strokeWidth={8} />) : null}
				</g> : null}
				{f >= down ? [DUEL.newton, DUEL.huygens].map(x => <ellipse key={x} cx={x + 70} cy={CUR7.y + CUR7.h + 56} rx={120} ry={40} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, down + 12, 12)} />) : null}
			</FrameSvg>
			{row ? <Lbl x={DUEL.label} y={CUR7.y + 40} at={t0} color={INK} size={44}>{row.label}</Lbl> : null}
			{row ? <Lbl x={DUEL.newton} y={CUR7.y + CUR7.h + 56} at={t0 + 10} color={GREY.ink} size={36}>{cur === 2 ? (f >= up ? row.newton : '') : row.newton}</Lbl> : null}
			{row ? <Lbl x={DUEL.huygens} y={CUR7.y + CUR7.h + 56} at={cur === 2 ? down : t0 + 10} color={TEAL.ink} size={36}>{row.huygens}</Lbl> : null}
			{cur === 2 ? <Lbl x={DUEL.label} y={CUR7.y + 100} at={up} color={INK} size={28}>bending towards</Lbl> : null}
			{cur === 2 ? <Lbl x={DUEL.label} y={CUR7.y + 136} at={up} color={INK} size={28}>the normal into water</Lbl> : null}
			<HandTag x={DUEL.label} y={CUR7.y + 110} text="does not decide" at={refl + 20} out={sharp} size={34} color={GREY.ink} />
			<HandTag x={DUEL.label} y={CUR7.y + 110} text="simple particle picture" at={sharp + 20} out={up} size={30} color={GREY.ink} />
			<HandTag x={DUEL.huygens + 200} y={CUR7.y + CUR7.h + 56} text="opposite predictions: testable" at={down + 20} size={30} color={INK} />
			<Chip x={96} y={870} at={miss} size={30} color={GREY.ink} border={GREY.stroke}>1700s: Newton's model dominant</Chip>
			<Lbl x={96} y={850} at={cent} out={miss} color={GREY.ink} size={28}>a century of Newton's model: his reputation, and tiny wavelengths</Lbl>
		</>
	);
};

// ---------- 8. the evidence decides ----------
const PS = {cx: 1500, cy: 520, r: 220};
export const S08: React.FC = () => {
	const id = 'evidence';
	const f = useCurrentFrame();
	const doo = cue(id, 'which only waves do'), pred = cue(id, 'just as the wave model predicted'), disc = cue(id, 'round disc'), found = cue(id, 'found the spot'), won = cue(id, 'wave prediction won'), next = cap(id, cue(id, 'interference, is next'));
	const poisson = prog(f, disc, 18) * (1 - prog(f, won, 18));
	const table = 1 - poisson;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', inset: 0, opacity: table}}>
				<Lbl x={96 + 310} y={200} at={-30} color={GREY.ink} size={30}>Newton</Lbl>
				<Lbl x={96 + 770} y={200} at={-30} color={TEAL.ink} size={30}>Huygens</Lbl>
				<Lbl x={96 + 1230} y={200} at={2} color={INK} size={30}>observed</Lbl>
				<DuelSummary x={96} y={250} row={DUEL_ROWS[0]} at={-30} size={36} observed={won} ticks={f >= won ? {n: won, h: won} : {}} />
				<DuelSummary x={96} y={340} row={DUEL_ROWS[1]} at={-30} size={36} observed={doo} ticks={{n: doo + 10, h: doo + 10}} />
				<DuelSummary x={96} y={430} row={DUEL_ROWS[2]} at={-30} size={36} observed={pred} ticks={{n: pred + 10, h: pred + 10}} />
				<FrameSvg>{f >= pred ? <MirrorThumb x={1700} y={438} w={110} opacity={prog(f, pred, 12)} /> : null}</FrameSvg>
				<HandTag x={1330} y={530} text="measured: slower" at={pred + 20} size={32} color={INK} />
				<div style={{position: 'absolute', left: 96, top: 600}}><Row at={won} size={52}><AnswerBox at={won + 6}><span style={{whiteSpace: 'nowrap'}}>the wave model accepted</span></AnswerBox></Row></div>
				<Chip x={96} y={720} at={next} size={30} color={GREY.ink} border={GREY.stroke}>Young's two slits (interference): next time</Chip>
			</div>
			{poisson > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: poisson}}>
				<FrameSvg>
					<rect x={96} y={430} width={600} height={180} fill={RED_L} opacity={0.3} />
					<line x1={96} y1={520} x2={700} y2={520} stroke={RED_L} strokeWidth={4} />
					<ellipse cx={720} cy={520} rx={18} ry={80} fill="#5c5853" stroke={INK} strokeWidth={3} />
					<line x1={720} y1={600} x2={720} y2={800} stroke={INK} strokeWidth={6} />
					<rect x={690} y={800} width={60} height={14} fill={INK} />
					<line x1={740} y1={440} x2={PS.cx - 10} y2={PS.cy - PS.r} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
					<line x1={740} y1={600} x2={PS.cx - 10} y2={PS.cy + PS.r} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
					<rect x={PS.cx - PS.r - 30} y={PS.cy - PS.r - 30} width={2 * PS.r + 60} height={2 * PS.r + 60} rx={12} fill="#2a0f0d" />
					<circle cx={PS.cx} cy={PS.cy} r={PS.r} fill={RED_L} opacity={0.75} />
					<circle cx={PS.cx} cy={PS.cy} r={PS.r * 0.55} fill="#1a1412" />
					{[0.6, 0.66, 0.72].map(k => <circle key={k} cx={PS.cx} cy={PS.cy} r={PS.r * k} fill="none" stroke="#1a1412" strokeWidth={5} opacity={0.7} />)}
					<circle cx={PS.cx} cy={PS.cy} r={9} fill="#ff6a55" />
					{f >= found ? <circle cx={PS.cx} cy={PS.cy} r={34} fill="none" stroke={RED_INK} strokeWidth={5} opacity={prog(f, found + 6, 12)} /> : null}
				</FrameSvg>
				<Lbl x={96} y={400} at={disc} color={INK} size={28}>red laser light</Lbl>
				<Lbl x={720} y={850} at={disc} color={INK} size={28} anchor="middle">round disc on a post</Lbl>
				<Lbl x={PS.cx} y={PS.cy + PS.r + 60} at={disc} color={INK} size={28} anchor="middle">its shadow on a screen (schematic)</Lbl>
				<HandTag x={760} y={300} text="Poisson: absurd!" at={disc + 30} size={38} color={GREY.ink} />
				<Chip x={96} y={680} at={found} size={32} color={INK}>✓ Poisson spot observed (Arago)</Chip>
				<Lbl x={96} y={800} at={disc + 10} color={INK} size={30}>wave theory (Fresnel) predicts a bright spot</Lbl>
				<Lbl x={96} y={840} at={disc + 10} color={INK} size={30}>at the centre of the shadow</Lbl>
			</div> : null}
		</>
	);
};

// ---------- 9. investigating diffraction ----------
export const S09: React.FC = () => {
	const id = 'investigation';
	const f = useCurrentFrame();
	const narrow = cue(id, 'Narrow the slit slowly'), widen = cue(id, 'widen'), swap = cue(id, 'Swap a red laser'), hair = cue(id, 'a single hair'), refl = cap(id, cue(id, 'at its reflections'));
	const green = f >= swap + 10;
	const a = f < swap ? kf(f, [[narrow, SWEEP[0]], [narrow + 24, SWEEP[1]], [widen, SWEEP[1]], [widen + 20, SWEEP[2]]]) : kf(f, [[swap + 10, SWEEP[0]], [swap + 30, SWEEP[1]], [swap + 50, SWEEP[1]], [swap + 70, SWEEP[2]]]);
	const lam = green ? GREEN : RED, col = green ? GREEN_L : RED_L;
	const isHair = f >= hair;
	const g = benchGeom(B1);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<BenchRig a={a} lambda={lam} color={col} hair={isHair} kind={isHair ? 'hair' : 'single'} />
				{f >= refl ? <circle cx={g.aperture[0]} cy={g.aperture[1]} r={26} fill="none" stroke={RED_INK} strokeWidth={5} opacity={prog(f, refl + 8, 12)} /> : null}
			</FrameSvg>
			<Lbl x={B1.ap - 120} y={612} at={0} color={INK} size={26} anchor="middle">laser (raised on a block)</Lbl>
			<Lbl x={B1.scr} y={612} at={0} color={INK} size={26} anchor="middle">screen about 2 m away (not to scale)</Lbl>
			<Lbl x={570} y={645} at={0} color={INK} size={26} anchor="middle">{isHair ? 'a hair (close-up)' : 'adjustable slit (close-up)'}</Lbl>
			<Lbl x={96} y={855} at={0} out={hair} color={INK} size={52}>{`slit width ${fx(a, 2)} mm`}</Lbl>
			<Lbl x={800} y={855} at={0} out={hair} color={green ? GREEN_L : RED_INK} size={52}>{`central band ${bandText(a, lam)}`}</Lbl>
			<Lbl x={1820} y={612} at={0} color={GREY.ink} size={26} anchor="end">readouts simulated</Lbl>
			<div style={{position: 'absolute', left: 1430, top: 190, width: 390, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, color: INK, opacity: prog(f, widen, 12), background: '#fffdf8', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 12, padding: '6px 12px'}}>
				<div>slit: wider → narrower</div>
				<div>central band: narrower → wider</div>
			</div>
			<HandTag x={1430} y={360} text="green: shorter λ, narrower" at={swap + 72} out={hair} size={30} color={GREEN_L} />
			<Lbl x={1430} y={420} at={swap + 72} out={hair} color={GREY.ink} size={26}>{`green: ${[0, 1, 2].map(i => fx(bandMm(SWEEP[i], GREEN), 0)).join(', ')} mm`}</Lbl>
			<Lbl x={96} y={855} at={hair + 10} color={INK} size={44}>a single hair: a spread-out pattern too</Lbl>
			<Chip x={96} y={890} at={refl} size={30} color={RED_INK} border={RED_INK}>never look along the beam or at its reflections</Chip>
		</>
	);
};

// ---------- 10. a way to remember ----------
const MW = {x: 96, y: 430, w: 840, h: 460}, MN = {x: 984, y: 430, w: 840, h: 460};
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const n = cue(id, 'Narrow gap, wide spread'), w = cap(id, cue(id, 'Wide gap, narrow spread'));
	const cyW = MW.y + MW.h / 2, cyN = MN.y + MN.h / 2;
	const hiN = f >= n && f < w, hiW = f >= w;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 300, top: 170, width: 1320}}>
				<MemoryCard at={n} main={<>Narrow gap, wide spread.</>} />
			</div>
			<FrameSvg>
				{[{b: MW, cy: cyW, half: 150, hi: hiW, idk: 'v05-mw'}, {b: MN, cy: cyN, half: 22, hi: hiN, idk: 'v05-mn'}].map(p => <g key={p.idk}>
					<rect x={p.b.x} y={p.b.y} width={p.b.w} height={p.b.h} rx={14} fill="#f6fbfb" stroke={p.hi ? INK : 'rgba(60,45,20,0.2)'} strokeWidth={p.hi ? 6 : 2.5} />
					<ApertureWaves box={p.b} bx={p.b.x + 300} gap={[p.cy - p.half, p.cy + p.half]} lambda={52} phase={f / 22} color={TEAL.stroke} id={p.idk} width={4} n={20} />
					<Barrier box={p.b} bx={p.b.x + 300} gaps={[[p.cy - p.half, p.cy + p.half]]} t={16} />
				</g>)}
			</FrameSvg>
			<Lbl x={MW.x + 20} y={MW.y + MW.h + 34} at={2} color={INK} size={30}>wide gap: mostly straight</Lbl>
			<Lbl x={MN.x + 20} y={MN.y + MN.h + 34} at={2} color={INK} size={30}>narrow gap: semicircles</Lbl>
		</>
	);
};
