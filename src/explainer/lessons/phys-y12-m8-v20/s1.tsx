// Scenes 1 to 7: the hook (last time's enlarged proton and probe stay while the helium cluster fades; predict; the
// painted linac tunnel), what would count as evidence (the test card), a probe small enough (the painted tunnel with the
// probe-energy slider and the wave shrinking across the proton), what they saw (the observation panel), what it means
// (the model panel drawing only after the observation, electron paths on the field motion engine), too many particles
// (the hadron grid sorting into families) and the neutron that changes (decay, the crossed trap, the model's account).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Readout} from '../../physics/atom/universe';
import {MarkedHeading} from '../../physics/atom/headline';
import {PeriodicTable} from '../../physics/atom/elements';
import {Bars, QBag, QDot, SchemCard} from '../../physics/atom/particles';
import {Disc} from '../../physics/atom/neutron';
import {LPlate, placeOf} from '../../physics/light/plates';
import {runMotion, trailTo} from '../../sims/field-motion';
import {displacement} from '../../sims/waves';
import {HandoffBoard19, M8V19FinalFrame} from '../phys-y12-m8-v19/s3';
import {dur as dur19} from '../phys-y12-m8-v19/common';
import {E_STEPS, HEAD, HEAD_SIZE, L20, R20, cap, cue, hold, lambdaAt, ratioAt} from './common';
import {Arrow, BIGP, BigProton, CARD_AT, DOWN, FoilThumb, GREY, INK, LINAC, LINAC_AT, Lbl, NAVY, NEUTRON, NUC_RED, NU, ProbeAim, SLATE, T, TEAL, TestCard, UP, fx, sci} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const sb = cue(id, 'solid little balls'), pr = cue(id, 'Make your prediction'), fp = cue(id, 'Fire particles at it'), co = cap(id, cue(id, 'smaller constituents'), 8);
	const h = hold(id);
	if (f < 1) return <M8V19FinalFrame />;
	const tun = prog(f, fp, 24);
	const pulse = Math.sin(Math.PI * Math.min(1, Math.max(0, (f - fp) / 30)));
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 1, 24)}}><HandoffBoard19 f={dur19('handoff-v20') - 1} final heading={false} chip={false} /></div>
			<MarkedHeading text={HEAD} marks={['smaller constituents']} at={co} size={HEAD_SIZE} color={INK} markColor={NAVY.ink} />
			<Chip x={96} y={890} at={-60} out={co} size={30} w={1728} color={INK} border={INK}>Next: what evidence shows that protons and neutrons have smaller constituents?</Chip>
			<FrameSvg>
				<FoilThumb hi={1 + 1.5 * pulse} />
				<BigProton w={4 + 6 * prog(f, sb, 16)} />
				<ProbeAim />
				{tun > 0.001 ? <LPlate spec={LINAC} p={{x: 600, y: lerp(1090, 630, tun), w: 560}} /> : null}
				{f >= fp ? <Mark x={122} y={712} at={fp} kind="tick" color={INK} size={30} /> : null}
				<Countdown start={h.startFrame} end={h.endFrame} x={1720} y={190} r={40} />
			</FrameSvg>
			<Lbl x={96} y={540} at={-60} color={GREY.ink} size={26}>an earlier video: probing an atom</Lbl>
			<Lbl x={96} y={576} at={-60} color={GREY.ink} size={26}>found the nucleus</Lbl>
			<Lbl x={880} y={260} at={-60} color={NAVY.ink} size={30}>probe a proton?</Lbl>
			<Lbl x={830} y={344} at={-60} color={NAVY.ink} size={26}>electron</Lbl>
			<Lbl x={BIGP.x} y={BIGP.y + BIGP.r + 50} at={-60} out={fp} color={INK} size={30} anchor="middle">one proton, enlarged: solid, or made of parts?</Lbl>
			<Chip x={150} y={620} at={pr} size={30} color={INK}>a better microscope</Chip>
			<Chip x={150} y={690} at={pr + 4} size={30} color={INK} border={f >= fp ? INK : undefined}>fire particles at it</Chip>
			<Chip x={150} y={760} at={pr + 8} size={30} color={INK}>weigh it carefully</Chip>
			<HandTag x={1180} y={860} text="fire electrons at it" at={fp + 14} size={34} color={NAVY.ink} marks={[{kind: 'arrow', from: [1140, 760], to: [1210, 700], bend: -0.15}]} />
		</>
	);
};

// ---------- 2. what would count as evidence? ----------
export const S02: React.FC = () => {
	const id = 'criterion';
	const f = useCurrentFrame();
	const np = cue(id, 'no parts, and no size at all'), ea = cue(id, 'evidence against it'), it = cap(id, cue(id, 'checked against it'), 30);
	const sh = prog(f, it + 6, 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><BigProton x={330} y={540} r={150} /></FrameSvg>
			<Lbl x={330} y={740} at={-30} color={INK} size={30} anchor="middle">a proton: fundamental?</Lbl>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, it + 22, 8)}}>
				<div style={{position: 'absolute', left: lerp(620, CARD_AT.x, sh), top: lerp(300, CARD_AT.y, sh), transformOrigin: '0 0', transform: `scale(${lerp(1, 0.52, sh)})`}}>
					<TestCard x={0} y={0} big rows={prog(f, np, 16)} q={f >= ea ? 1 : 0} />
				</div>
			</div>
			<TestCard x={CARD_AT.x} y={CARD_AT.y} rows={1} q={1} opacity={prog(f, it + 22, 8)} />
			<HandTag x={1580} y={600} text="the test" at={it} out={it + 6} size={40} color={INK} marks={[{kind: 'brace', x: 1530, y1: 420, y2: 650, facing: 'right'}]} />
			<Lbl x={620} y={840} at={ea + 6} out={it + 6} color={INK} size={32}>evidence against: parts inside, or a size and a shape</Lbl>
		</>
	);
};

// ---------- 3. a probe small enough ----------
const PL3 = {x: 96, y: 170, w: 820};
const PC3 = {x: 1180, y: 500, r: 150};
/** Probe energy (GeV) at frame f: 1 GeV, then 5 on "twenty billion electron volts", then 20 (log steps). */
const energyAt = (f: number, tb: number) => {
	const a = prog(f, tb, 30), b = prog(f, tb + 50, 30);
	return Math.exp(lerp(Math.log(E_STEPS[0]), Math.log(E_STEPS[1]), a) + (Math.log(E_STEPS[2]) - Math.log(E_STEPS[1])) * b);
};
const SL = {x0: 120, x1: 1100, y: 818};
const slX = (e: number) => lerp(SL.x0, SL.x1, Math.log(e) / Math.log(20));
export const S03: React.FC = () => {
	const id = 'probe';
	const f = useCurrentFrame();
	const hp = cue(id, 'wavelength is h over p'), tb = cue(id, 'twenty billion electron volts'), sp = cue(id, 'smaller than a proton'), tg = cap(id, cue(id, 'belongs to the target'), 20);
	const E = energyAt(f, tb), lam = lambdaAt(E), ratio = ratioAt(E);
	const lamPx = (lam / 1.7e-15) * 2 * PC3.r;
	const place = placeOf(LINAC, PL3);
	const [nx, ny] = place.at(LINAC_AT.near[0], LINAC_AT.near[1]), [fx0, fy0] = place.at(LINAC_AT.far[0], LINAC_AT.far[1]);
	const run = ((f - tb) % 50) / 50, racing = f >= tb && f < tb + 150;
	const wave = Array.from({length: 241}, (_, i) => {
		const x = PC3.x - PC3.r + (2 * PC3.r * i) / 240;
		const y = PC3.y + displacement({amplitude: 22, wavelength: Math.max(6, lamPx), period: 1.2}, x - PC3.x + PC3.r, f / 30);
		return `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`;
	}).join(' ');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<TestCard x={CARD_AT.x} y={CARD_AT.y} />
			<FrameSvg>
				<LPlate spec={LINAC} p={PL3} />
				{racing ? <circle cx={lerp(nx, fx0, run)} cy={lerp(ny, fy0, run)} r={lerp(16, 5, run)} fill={NAVY.stroke} stroke="#fffdf8" strokeWidth={3} /> : null}
				<defs><clipPath id="v20-p3"><circle cx={PC3.x} cy={PC3.y} r={PC3.r} /></clipPath></defs>
				<circle cx={PC3.x} cy={PC3.y} r={PC3.r} fill="#f3c9c2" stroke={NUC_RED} strokeWidth={5} />
				<path d={wave} fill="none" stroke={NAVY.stroke} strokeWidth={4} clipPath="url(#v20-p3)" opacity={prog(f, hp, 14)} />
				<line x1={SL.x0} y1={SL.y} x2={SL.x1} y2={SL.y} stroke="rgba(60,45,20,0.35)" strokeWidth={10} strokeLinecap="round" />
				{E_STEPS.map(e => <line key={e} x1={slX(e)} y1={SL.y - 16} x2={slX(e)} y2={SL.y + 16} stroke={INK} strokeWidth={3} />)}
				<circle cx={slX(E)} cy={SL.y} r={18} fill={NAVY.stroke} stroke="#fffdf8" strokeWidth={4} />
			</FrameSvg>
			<Lbl x={96} y={606} at={-30} color={GREY.ink} size={26}>SLAC linear accelerator, California (3 km): illustration</Lbl>
			<Lbl x={PC3.x} y={318} at={-30} color={INK} size={28} anchor="middle">proton: diameter ≈ 1.7 × 10⁻¹⁵ m</Lbl>
			{E_STEPS.map(e => <Lbl key={e} x={slX(e)} y={872} at={-30} color={INK} size={26} anchor="middle">{`${e} GeV`}</Lbl>)}
			<Readout x={96} y={640} label="probe energy E" value={`${fx(E, E < 9.95 ? 1 : 0)} GeV`} color={NAVY.ink} w={280} />
			<Readout x={396} y={640} label="wavelength λ" value={`${sci(lam, 2)} m`} color={NAVY.ink} w={420} />
			<Readout x={836} y={640} label="proton ÷ λ" value={fx(ratio, 1)} color={NAVY.ink} w={280} />
			<Chip x={1400} y={420} at={hp} size={28} w={440} color={NAVY.ink}>λ = h/p (earlier video): more momentum → shorter wavelength</Chip>
			<HandTag x={430} y={922} text="more energy → shorter λ" at={tb + 90} size={34} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 1400, top: 560}}><Row at={sp} size={40}><AnswerBox at={sp + 4}>{`λ ≈ ${sci(L20, 1)} m`}</AnswerBox></Row></div>
			<Lbl x={1400} y={680} at={sp + 10} color={INK} size={30}>{`${fx(R20, 0)} times smaller (about 30)`}</Lbl>
			<Lbl x={1400} y={720} at={sp + 16} color={GREY.ink} size={26}>at this energy p ≈ E/c</Lbl>
			<HandTag x={1150} y={720} at={sp + 20} size={34} color={NAVY.ink} marks={[{kind: 'circle', cx: PC3.x, cy: PC3.y, rx: PC3.r + 26, ry: 70}]} />
			<Chip x={1150} y={800} at={tg} size={30} w={680} color={NAVY.ink}>electron: no strong force, point-like → a clean probe</Chip>
		</>
	);
};

// ---------- 4 and 5. what they saw, what it means ----------
const OB = {x: 96, y: 300, w: 960, h: 600};
const CH = {x: 200, y: 430, w: 480, h: 330};
const MEAS = [1, 0.62, 0.4, 0.29, 0.23, 0.19, 0.16, 0.14], SMOOTH = [1, 0.4, 0.12, 0.035, 0.01, 0.003, 0, 0];
/** The observation panel: the schematic scattering bar chart (measured navy, smooth-proton grey outline). */
const ObsPanel: React.FC<{few: number; all: number; smooth: number; thumb: number}> = ({few, all, smooth, thumb}) => (
	<g>
		<SchemCard x={OB.x} y={OB.y} w={OB.w} h={OB.h} title="what they saw" />
		<line x1={CH.x} y1={CH.y - 10} x2={CH.x} y2={CH.y + CH.h} stroke={INK} strokeWidth={4} />
		<line x1={CH.x} y1={CH.y + CH.h} x2={CH.x + CH.w + 20} y2={CH.y + CH.h} stroke={INK} strokeWidth={4} />
		<Bars x={CH.x + 6} y={CH.y} w={CH.w} h={CH.h} values={MEAS} color={NAVY.stroke} reveal={Math.max(few * 0.3, all)} />
		<Bars x={CH.x + 6} y={CH.y} w={CH.w} h={CH.h} values={SMOOTH} color={GREY.stroke} outline reveal={smooth} width={5} />
		<text x={CH.x} y={CH.y + CH.h + 44} style={T(28, INK, 700)}>small</text>
		<text x={CH.x + CH.w} y={CH.y + CH.h + 44} textAnchor="end" style={T(28, INK, 700)}>large</text>
		<text x={CH.x + CH.w / 2} y={CH.y + CH.h + 84} textAnchor="middle" style={T(30, INK)}>scattering angle →</text>
		<text x={CH.x - 10} y={CH.y - 30} style={T(30, INK)}>number scattered</text>
		{thumb > 0.001 ? <g opacity={thumb}><FoilThumb x={660.5 + 60} y={187.4 + 20} s={0.62} /></g> : null}
	</g>
);
const MP = {x: 1100, y: 370, w: 724, h: 530};
const PC5 = {x: 1462, y: 650, s: 150};
const DOTS5 = [[-0.35, 0.25], [0.3, 0.3], [0.0, -0.35]] as const;
const smoothAcc = (x: number, y: number) => { const r = Math.hypot(x, y) || 1e-6, k = 0.25 * (r < 1 ? r : 1 / (r * r)); return [(-k * x) / r, (-k * y) / r] as const; };
const hardAcc = (x: number, y: number) => {
	let ax = 0, ay = 0;
	for (const [cx, cy] of DOTS5) { const dx = x - cx, dy = y - cy, d2 = dx * dx + dy * dy + 0.0009, d = Math.sqrt(d2); ax -= (0.12 * dx) / (d2 * d); ay -= (0.12 * dy) / (d2 * d); }
	return [ax, ay] as const;
};
const out5 = (s: {x: number; y: number}) => Math.abs(s.x) > 2.3 || Math.abs(s.y) > 1.5;
/** Electron paths on the field motion engine: a gentle bend past a smooth charge, a sharp bounce off a hard centre. */
const GENTLE2 = runMotion({field: {kind: 'custom', accel: (x, y) => smoothAcc(x, y)}, start: {x: -2.2, y: 0.5, vx: 1, vy: 0}, duration: 5, steps: 1500, stopWhen: out5});
const SHARP = runMotion({field: {kind: 'custom', accel: (x, y) => hardAcc(x, y)}, start: {x: -2.2, y: 0.37, vx: 1, vy: 0}, duration: 5, steps: 3000, stopWhen: out5});
const pathOf = (p: typeof SHARP, t: number) => trailTo(p, t).map(([x, y], i) => `${i ? 'L' : 'M'}${(PC5.x + x * PC5.s).toFixed(1)},${(PC5.y - y * PC5.s).toFixed(1)}`).join(' ');
const ModelPanel: React.FC<{title: number; smooth: number; gentle: number; dots: number; sharp: number; ring: number}> = ({title, smooth, gentle, dots, sharp, ring}) => (
	<g>
		<rect x={MP.x} y={MP.y} width={MP.w} height={MP.h} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.35)" strokeWidth={3} strokeDasharray={title > 0.5 ? undefined : '12 9'} />
		<text x={MP.x + 24} y={MP.y + 46} style={T(32, INK)}>{title > 0.5 ? 'what it means: model' : 'what it means?'}</text>
		{title > 0.5 ? <QBag x={PC5.x} y={PC5.y} r={PC5.s} fill={`rgba(200,68,58,${0.22 * smooth})`} color={INK} /> : null}
		{gentle > 0.001 ? <path d={pathOf(GENTLE2, GENTLE2.duration * gentle)} fill="none" stroke={NAVY.stroke} strokeWidth={5} /> : null}
		{dots > 0.001 ? <g opacity={dots}>{DOTS5.map(([x, y], i) => <circle key={i} cx={PC5.x + x * PC5.s} cy={PC5.y - y * PC5.s} r={11} fill={NUC_RED} stroke={INK} strokeWidth={2.5} />)}</g> : null}
		{sharp > 0.001 ? <path d={pathOf(SHARP, SHARP.duration * sharp)} fill="none" stroke={NAVY.stroke} strokeWidth={5} /> : null}
		{ring > 0.001 ? <circle cx={PC5.x - 10} cy={PC5.y - 10} r={92} fill="none" stroke={GREY.stroke} strokeWidth={4} opacity={ring} /> : null}
	</g>
);
export const S04: React.FC = () => {
	const id = 'observation';
	const f = useCurrentFrame();
	const md = cue(id, 'Most electrons were deflected only a little'), pd = cue(id, 'could ever produce'), dp = cap(id, cue(id, 'one level deeper'), 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<TestCard x={CARD_AT.x} y={CARD_AT.y} />
			<FrameSvg>
				<ObsPanel few={prog(f, md, 20)} all={prog(f, pd, 30)} smooth={prog(f, pd + 10, 30)} thumb={prog(f, dp, 18)} />
				<ModelPanel title={0} smooth={0} gentle={0} dots={0} sharp={0} ring={0} />
			</FrameSvg>
			<Lbl x={CH.x + 140} y={CH.y + 40} at={pd + 20} color={GREY.ink} size={26}>{"grey: smooth proton"}</Lbl>
			<Lbl x={CH.x + 140} y={CH.y + 76} at={pd + 20} color={NAVY.ink} size={26}>navy: measured</Lbl>
			<HandTag x={330} y={604} text="many more large-angle scatters" at={pd + 40} size={32} color={NAVY.ink} marks={[{kind: 'brace', x: CH.x + CH.w + 18, y1: CH.y + CH.h - MEAS[7] * CH.h - 4, y2: CH.y + CH.h - 4, facing: 'right'}]} />
			<Lbl x={760} y={548} at={dp + 10} color={GREY.ink} size={26}>earlier: atom → nucleus</Lbl>
		</>
	);
};
export const S05: React.FC = () => {
	const id = 'inference';
	const f = useCurrentFrame();
	const sm = cue(id, 'A smooth, spread-out proton can only nudge'), sc = cue(id, 'something small and concentrated inside'), pl = cue(id, 'a few tiny, point-like parts'), tk = cap(id, cue(id, 'is ticked'), 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<TestCard x={CARD_AT.x} y={CARD_AT.y} sc={prog(f, tk, 14)} />
			<FrameSvg>
				<ObsPanel few={1} all={1} smooth={1} thumb={1} />
				<ModelPanel title={1} smooth={prog(f, sm, 14) * (1 - prog(f, sc, 20))} gentle={prog(f, sm + 10, 60)} dots={prog(f, sc, 16)} sharp={prog(f, sc + 14, 60)} ring={0} />
			</FrameSvg>
			<Lbl x={CH.x + 140} y={CH.y + 40} at={-30} color={GREY.ink} size={26}>{"grey: smooth proton"}</Lbl>
			<Lbl x={CH.x + 140} y={CH.y + 76} at={-30} color={NAVY.ink} size={26}>navy: measured</Lbl>
			<Lbl x={760} y={548} at={-30} color={GREY.ink} size={26}>earlier: atom → nucleus</Lbl>
			<Lbl x={MP.x + 24} y={MP.y + 96} at={sm + 6} out={sc} color={NAVY.ink} size={28}>smooth charge: a gentle nudge</Lbl>
			<Lbl x={MP.x + 24} y={MP.y + 96} at={sc + 10} color={NAVY.ink} size={28}>hard centre: a large-angle bounce</Lbl>
			<HandTag x={MP.x + 24} y={MP.y + MP.h - 40} text="model: small hard parts (not a photograph)" at={pl} size={30} color={GREY.ink} marks={[{kind: 'circle', cx: PC5.x - 5, cy: PC5.y - 10, rx: 95, ry: 85}]} />
		</>
	);
};

// ---------- 6. too many particles ----------
type Fam = {cx: number; cy: number; pts: readonly (readonly [number, number])[]};
const hexPts = (n: 'octet' | 'nonet' | 'decuplet') => {
	const s = 52, h = s * 0.866;
	const hex: [number, number][] = [[-s / 2, -h], [s / 2, -h], [s, 0], [s / 2, h], [-s / 2, h], [-s, 0]];
	if (n === 'octet') return [...hex, [-8, 0], [8, 0]] as [number, number][];
	if (n === 'nonet') return [...hex, [-12, 0], [0, 0], [12, 0]] as [number, number][];
	const out: [number, number][] = [];
	for (let r = 0; r < 4; r++) for (let k = 0; k <= 3 - r; k++) out.push([(k - (3 - r) / 2) * s, (r - 1.5) * h]);
	return out;
};
const FAMS: Fam[] = [{cx: 330, cy: 500, pts: hexPts('octet')}, {cx: 780, cy: 500, pts: hexPts('decuplet')}, {cx: 330, cy: 790, pts: hexPts('nonet')}, {cx: 780, cy: 790, pts: hexPts('octet')}];
const ALL6 = FAMS.flatMap((fm, k) => fm.pts.map(([x, y], i) => ({k, i, hx: fm.cx + x, hy: fm.cy + y})));
const rnd = (n: number) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
const SCAT6 = ALL6.map((d, n) => ({...d, sx: 150 + rnd(n) * 900, sy: 330 + rnd(n + 77) * 560, yr: Math.min(3, Math.floor(rnd(n + 13) * 4))}));
const YEARS = [1950, 1955, 1960, 1965];
export const S06: React.FC = () => {
	const id = 'hadron-patterns';
	const f = useCurrentFrame();
	const sc = cue(id, 'The second clue'), hu = cue(id, 'experiments had found hundreds'), ch = cue(id, 'called hadrons'), nf = cue(id, 'neat families'), rp = cue(id, 'Remember the periodic table'), wy = cap(id, cue(id, 'pointed the same way'), 30);
	const yi = f < sc + 30 ? 0 : f < sc + 70 ? 1 : f < hu ? 2 : 3;
	const sort = prog(f, nf, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<TestCard x={CARD_AT.x} y={CARD_AT.y} sc={1} pat={prog(f, wy, 14)} />
			<FrameSvg>
				{SCAT6.map((d, n) => {
					const o = d.yr <= yi ? 1 : 0;
					if (o <= 0) return null;
					return <circle key={n} cx={lerp(d.sx, d.hx, sort)} cy={lerp(d.sy, d.hy, sort)} r={13} fill={NUC_RED} stroke={INK} strokeWidth={2.5} />;
				})}
				{sort > 0.5 ? FAMS.map((fm, k) => <circle key={k} cx={fm.cx} cy={fm.cy} r={98} fill="none" stroke="rgba(60,45,20,0.3)" strokeWidth={3} strokeDasharray="8 7" opacity={prog(f, nf + 30, 16)} />) : null}
				<g opacity={prog(f, rp, 18)}><PeriodicTable b={{x: 1180, y: 520, cw: 30, ch: 30, gap: 3}} fill={() => ({color: '#efe9de'})} symbols={false} upTo={54} /></g>
			</FrameSvg>
			<Readout x={96} y={170} label="found by" value={`${YEARS[yi]}`} color={INK} w={260} />
			<Lbl x={400} y={250} at={hu} color={INK} size={34}>→ hundreds of hadrons</Lbl>
			<Lbl x={150} y={940} at={-30} color={GREY.ink} size={26}>dots and positions schematic, not a real count</Lbl>
			<Chip x={1180} y={380} at={ch} size={30} color={NAVY.ink}>hadron: feels the strong force</Chip>
			<Lbl x={1180} y={470} at={nf + 20} color={INK} size={28}>families with patterns in charge and mass</Lbl>
			<Lbl x={1180} y={760} at={rp + 10} color={GREY.ink} size={28}>periodic table: patterns → built from a few parts</Lbl>
			<HandTag x={1180} y={850} text="few parts, many combinations" at={wy + 6} size={34} color={TEAL.ink} marks={[{kind: 'circle', cx: FAMS[0].cx, cy: FAMS[0].cy, rx: 112, ry: 108}]} />
		</>
	);
};

// ---------- 7. a neutron that changes ----------
const NC = {x: 560, y: 560, r: 170};
export const S07: React.FC = () => {
	const id = 'neutron-change';
	const f = useCurrentFrame();
	const dc = cue(id, 'decays into a proton'), dp = cue(id, "decay alone can't prove parts"), mu = cue(id, 'like the muon'), qm = cap(id, cue(id, 'the quark model describes'), 70), oq = cap(id, cue(id, 'One of its quarks'), 44);
	const turn = prog(f, dc + 30, 20), leave = prog(f, dc + 20, 50);
	const open = prog(f, qm, 20), flip = prog(f, oq, 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<TestCard x={CARD_AT.x} y={CARD_AT.y} sc={1} pat={1} />
			<FrameSvg>
				<g opacity={1 - open}><Disc x={NC.x} y={NC.y} r={NC.r} fill={turn > 0.5 ? NUC_RED : NEUTRON} text={turn > 0.5 ? 'p' : 'n'} /></g>
				{leave > 0.001 ? <g opacity={1 - open}>
					<circle cx={NC.x + lerp(150, 420, leave)} cy={NC.y - lerp(60, 200, leave)} r={24} fill={NAVY.stroke} stroke="#fffdf8" strokeWidth={3} />
					<circle cx={NC.x + lerp(150, 430, leave)} cy={NC.y + lerp(60, 190, leave)} r={14} fill={NU.stroke} stroke="#fffdf8" strokeWidth={3} />
				</g> : null}
				{open > 0.001 ? <QBag x={NC.x} y={NC.y} r={NC.r} opacity={open} fill={flip > 0.5 ? 'rgba(200,68,58,0.15)' : 'rgba(154,149,140,0.18)'}>
					<QDot x={NC.x - 70} y={NC.y + 40} label="u" tone={UP} r={40} />
					<QDot x={NC.x + 70} y={NC.y + 40} label={flip > 0.5 ? 'u' : 'd'} tone={flip > 0.5 ? UP : DOWN} r={40} ring={Math.sin(Math.PI * flip)} />
					<QDot x={NC.x} y={NC.y - 70} label="d" tone={DOWN} r={40} />
				</QBag> : null}
				{f >= mu ? <Arrow x0={1470} y0={740} x1={1470} y1={575} color={SLATE.stroke} width={5} opacity={prog(f, mu + 10, 14)} /> : null}
			</FrameSvg>
			<Lbl x={NC.x + 230} y={NC.y - 230} at={dc + 40} out={qm} color={NAVY.ink} size={32}>e⁻</Lbl>
			<Lbl x={NC.x + 230} y={NC.y + 270} at={dc + 40} out={qm} color={GREY.ink} size={32}>ν̄</Lbl>
			<div style={{position: 'absolute', left: 96, top: 800}}><Row at={dc} size={48}>n → p + e⁻ + ν̄</Row></div>
			<CrossedChip x={1150} y={430} at={dp} crossAt={dp + 20} size={34} caption="fundamental particles can decay too">decay proves parts</CrossedChip>
			<Lbl x={1150} y={780} at={mu} color={GREY.ink} size={30}>μ (muon): decays, no known parts</Lbl>
			<Lbl x={NC.x} y={NC.y + NC.r + 50} at={qm + 6} color={GREY.ink} size={28} anchor="middle">{flip > 0.5 ? 'u u d: now a proton (model)' : 'u d d: a neutron (model)'}</Lbl>
			<HandTag x={1150} y={880} text="model's account, not evidence" at={oq + 10} size={32} color={GREY.ink} />
			<Lbl x={96} y={720} at={oq + 6} color={TEAL.ink} size={30}>d → u (more next time)</Lbl>
		</>
	);
};

