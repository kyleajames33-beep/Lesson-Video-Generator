// Scenes 7 to 12: the leftover glow (the painted horn antenna under a coded sky; the same hiss from every pointing),
// reading the glow (black-body curves on a log wavelength axis; the 3000 K curve slides onto the 2.725 K curve as the
// stretch counts to 1100; the sky uniformity dial), a quarter helium (predicted and observed abundance bars, the painted
// gas cloud), slow supernovae (a wave whose crests tick past a marker; two light curves), the evidence table and the
// memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {CARD} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {CLOUD, GALAXY, HORN, Readout, WaveLine, logPos} from '../../physics/atom/universe';
import {DIPOLE, HE_OBS_HI, HE_OBS_LO, HE_PRED, HEAD, HEAD_SIZE, LAM_CMB, LAM_EMIT, PW_CM, SN_DAYS, SN_Z, STRETCH, T_CMB, cap, cue} from './common';
import {AMBER, BLUE, EvidenceColumn, GREY, INK, Lbl, NAVY, NEUTRON, PlotAxes, RED, ROSE, TEAL, fx, sci, snPath} from './parts';
import type {PlotBox} from './parts';

// ---------- 7. the leftover glow ----------
const HP = {x: 96, y: 430, w: 640};
const MOUTH = {x: 171, y: 607};
const SKY = {cx: 960, cy: 1180, r: 980};
const skyPt = (deg: number): [number, number] => [SKY.cx + SKY.r * Math.cos((deg * Math.PI) / 180), SKY.cy - SKY.r * Math.sin((deg * Math.PI) / 180)];
const POINTINGS = [150, 133, 116, 99, 82, 65];
export const S07: React.FC = () => {
	const id = 'cmb-discovery';
	const f = useCurrentFrame();
	const sm = cue(id, 'stretched into microwaves'), ha = cue(id, 'horn antenna'), dir = cue(id, 'direction'), li = cap(id, cue(id, 'that light'));
	const k = f < dir ? -1 : Math.min(POINTINGS.length - 1, Math.floor((f - dir) / 10));
	const beamDeg = k < 0 ? POINTINGS[0] : POINTINGS[k];
	const [bx, by] = skyPt(beamDeg);
	const inW = prog(f, sm, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<path d={`M${skyPt(162)[0]},${skyPt(162)[1]} A${SKY.r},${SKY.r} 0 0 1 ${skyPt(18)[0]},${skyPt(18)[1]}`} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="12 10" />
				{f >= ha ? <path d={`M${MOUTH.x},${MOUTH.y} L${bx - 70},${by} L${bx + 70},${by} Z`} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={2} opacity={0.5 * prog(f, ha, 12)} /> : null}
				<LPlate spec={HORN} p={HP} />
				<g transform={`rotate(-38 ${MOUTH.x + 40} ${MOUTH.y - 200})`}><WaveLine x0={MOUTH.x + 40} x1={MOUTH.x + 40 + 480 * inW} y={MOUTH.y - 200} lambda={90} amp={16} color={AMBER.stroke} width={5} draw={1} /></g>
				{POINTINGS.map((d, i) => { const [x, y] = skyPt(d); return k >= i ? <g key={d}><circle cx={x} cy={y} r={10} fill={AMBER.stroke} /><text x={x} y={y - 22} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: AMBER.ink}}>hiss</text></g> : null; })}
			</FrameSvg>
			<HandTag x={760} y={420} text={`microwaves: a few cm here (${fx(PW_CM, 2)} cm)`} at={sm + 30} size={32} color={AMBER.ink} />
			<Lbl x={760} y={500} at={sm + 10} color={GREY.ink} size={28}>predicted: relic radiation (1948)</Lbl>
			<Lbl x={760} y={560} at={ha} color={INK} size={34}>1965: Penzias and Wilson's horn antenna</Lbl>
			<HandTag x={0} y={0} at={ha + 10} color={INK} marks={[{kind: 'arrow', from: [140, 860], to: [130, 650], bend: 0.1}]} />
			<HandTag x={760} y={640} text="same hiss, every way" at={dir + 50} size={34} color={GREY.ink} />
			<Chip x={760} y={720} at={li} size={32} w={1000} color={INK}>cosmic microwave background (CMB): leftover glow of the hot early Universe</Chip>
		</>
	);
};

// ---------- 8. reading the glow ----------
const BG = {x: 140, x1: 1000, y0: 780, lo: -4, hi: 2, hpx: 300};
/** Planck curve shape against x = λ/λmax (peak 1 at x = 1). */
const shape = (x: number) => (Math.pow(x, -5) * (Math.exp(4.965) - 1)) / (Math.exp(4.965 / x) - 1);
const bbPath = (peakMm: number, height: number, draw = 1) => {
	const n = 160, pts: string[] = [];
	for (let i = 0; i <= n * draw; i++) {
		const lg = BG.lo + ((BG.hi - BG.lo) * i) / n, x = 10 ** lg / peakMm;
		const v = x < 0.08 ? 0 : shape(x);
		pts.push(`${pts.length ? 'L' : 'M'}${logPos(10 ** lg, BG.lo, BG.hi, BG.x, BG.x1).toFixed(1)},${(BG.y0 - BG.hpx * height * v).toFixed(1)}`);
	}
	return pts.join(' ');
};
const DIAL = {x: 1300, y: 690, r: 140};
export const S08: React.FC = () => {
	const id = 'cmb-spectrum';
	const f = useCurrentFrame();
	const bb = cue(id, 'near-perfect black body curve'), mw = cue(id, 'microwaves'), tk = cue(id, 'three thousand kelvin'), eh = cue(id, 'eleven hundred times'), mm = cue(id, "today's millimetre"), om = cue(id, 'Once our own motion through it is allowed for'), ph = cue(id, 'one part in a hundred thousand'), ss = cue(id, 'steady-state Universe, unchanging forever'), th = cap(id, cue(id, 'like this'));
	const u = prog(f, eh, 60);
	const S = 10 ** (Math.log10(Math.round(STRETCH / 100) * 100) * u);
	const peak3000 = LAM_EMIT * 1e3 * S;
	const h3000 = 1.25 - 0.25 * u;
	const removed = prog(f, om + 70, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={HORN} p={{x: 96, y: 170, w: 220}} />
				<line x1={BG.x} y1={BG.y0} x2={BG.x1 + 14} y2={BG.y0} stroke={INK} strokeWidth={4} />
				<line x1={BG.x} y1={BG.y0} x2={BG.x} y2={BG.y0 - 420} stroke={INK} strokeWidth={4} />
				{[-4, -3, -2, -1, 0, 1, 2].map(e => <g key={e}><line x1={logPos(10 ** e, BG.lo, BG.hi, BG.x, BG.x1)} y1={BG.y0} x2={logPos(10 ** e, BG.lo, BG.hi, BG.x, BG.x1)} y2={BG.y0 + 10} stroke={INK} strokeWidth={3} /><text x={logPos(10 ** e, BG.lo, BG.hi, BG.x, BG.x1)} y={BG.y0 + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, fill: INK}}>{e < 0 ? `0.${'0'.repeat(-e - 1)}1` : `${10 ** e}`}</text></g>)}
				<path d={bbPath(LAM_CMB * 1e3, 1, prog(f, bb, 40))} fill="none" stroke={AMBER.stroke} strokeWidth={6} />
				{f >= tk ? <path d={bbPath(peak3000, h3000)} fill="none" stroke={u > 0.98 ? AMBER.ink : RED.stroke} strokeWidth={5} strokeDasharray={u > 0.98 ? '10 8' : undefined} opacity={prog(f, tk, 14)} /> : null}
				{f >= mw ? <line x1={logPos(LAM_CMB * 1e3, BG.lo, BG.hi, BG.x, BG.x1)} y1={BG.y0} x2={logPos(LAM_CMB * 1e3, BG.lo, BG.hi, BG.x, BG.x1)} y2={BG.y0 - BG.hpx} stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="8 6" opacity={prog(f, mw, 12)} /> : null}
				{f >= om ? <g opacity={prog(f, om, 14)}>
					<circle cx={DIAL.x} cy={DIAL.y} r={14} fill={INK} />
					{Array.from({length: 8}, (_, i) => { const a = (i / 8) * 2 * Math.PI; const dT = DIPOLE * Math.cos(a) * (1 - removed); const c = dT > 1e-4 ? RED.ink : dT < -1e-4 ? BLUE.ink : INK; return <text key={i} x={DIAL.x + DIAL.r * Math.cos(a)} y={DIAL.y + DIAL.r * Math.sin(a) + 10} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: c}}>{fx(T_CMB + dT, 3)}</text>; })}
				</g> : null}
			</FrameSvg>
			<Lbl x={BG.x1} y={BG.y0 + 80} at={0} color={INK} size={26} anchor="end">wavelength (mm, log scale)</Lbl>
			<Lbl x={BG.x + 10} y={BG.y0 - 440} at={0} color={INK} size={26}>intensity (relative; heights not to scale)</Lbl>
			<Chip x={340} y={170} at={bb + 10} size={26} w={640} color={INK}>COBE satellite measurements (1990) lie on this curve; error bars smaller than the line</Chip>
			<Lbl x={logPos(LAM_CMB * 1e3, BG.lo, BG.hi, BG.x, BG.x1) + 20} y={BG.y0 - BG.hpx - 20} at={bb + 20} color={AMBER.ink} size={30}>2.725 K</Lbl>
			<div style={{position: 'absolute', left: 96, top: 860}}><Row at={mw - 6} out={mm - 6} size={40}><AnswerBox at={mw}>{`λmax = b/T = (2.898 × 10⁻³) / ${T_CMB} = ${sci(LAM_CMB, 2)} m ≈ 1 mm`}</AnswerBox></Row></div>
			<Lbl x={BG.x + 20} y={BG.y0 - 1.25 * BG.hpx - 34} at={tk} out={eh} color={RED.ink} size={30}>{`3000 K: λmax ≈ ${fx(LAM_EMIT * 1e6, 2)} μm`}</Lbl>
			<HandTag x={BG.x + 240} y={BG.y0 - 160} text="3000 K: orange glow" at={tk + 20} out={eh} size={32} color={RED.ink} />
			<Readout x={1040} y={180} label="stretch" value={`× ${fx(S)}`} color={AMBER.ink} w={300} opacity={prog(f, eh, 12)} />
			<HandTag x={0} y={0} at={eh + 10} color={AMBER.stroke} marks={[{kind: 'arrow', from: [logPos(LAM_EMIT * 1e3, BG.lo, BG.hi, BG.x, BG.x1), BG.y0 - 400], to: [logPos(LAM_CMB * 1e3, BG.lo, BG.hi, BG.x, BG.x1) - 30, BG.y0 - 330], bend: -0.15}]} />
			<div style={{position: 'absolute', left: 96, top: 860}}><Row at={mm} size={40}>{`${fx(LAM_EMIT * 1e6, 2)} μm × 1100 ≈ ${fx(LAM_EMIT * 1100 * 1e3, 2)} mm ✓`}</Row></div>
			<Lbl x={DIAL.x} y={DIAL.y + 40} at={om} color={INK} size={26} anchor="middle">us</Lbl>
			<Chip x={1480} y={560} at={om + 20} out={om + 70} size={26} w={340} color={INK}>our motion: about 1 part in 1000</Chip>
			<Chip x={1480} y={560} at={om + 80} size={26} w={340} color={GREY.ink}>{"after removing our motion and the Milky Way's glow"}</Chip>
			<Chip x={1480} y={700} at={ph} size={26} w={340} color={TEAL.ink}>uniform to 1 part in 10⁵ (Planck satellite map)</Chip>
			<HandTag x={0} y={0} at={ph + 10} color={TEAL.stroke} marks={[{kind: 'circle', cx: DIAL.x, cy: DIAL.y, rx: 200, ry: 186}]} />
			<CrossedChip x={1040} y={320} at={ss} crossAt={th} size={28} caption="no source">steady state: no hot past</CrossedChip>
			<EvidenceColumn ticks={[-30, th + 10, undefined, undefined]} y={170} />
		</>
	);
};

// ---------- 9. a quarter helium ----------
const BAR = {y: 300, h: 460, w: 170};
const AbBar: React.FC<{x: number; he: number; o?: number}> = ({x, he, o = 1}) => (o <= 0.001 ? null : (
	<g opacity={o}>
		<rect x={x} y={BAR.y} width={BAR.w} height={BAR.h * (he / 100)} fill={NEUTRON} stroke={INK} strokeWidth={3} />
		<rect x={x} y={BAR.y + BAR.h * (he / 100)} width={BAR.w} height={BAR.h * (1 - he / 100)} fill={ROSE.soft} stroke={INK} strokeWidth={3} />
	</g>
));
export const S09: React.FC = () => {
	const id = 'helium';
	const f = useCurrentFrame();
	const qm = cue(id, 'a quarter helium by mass'), fh = cue(id, 'the fewest heavy elements'), pc = cue(id, 'cent'), cs = cue(id, 'Could stars have made it instead'), fp = cue(id, 'only a few per cent'), he = cap(id, cue(id, 'nearly a quarter helium'));
	const shrink = 1 - 0.85 * prog(f, fh, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={180} y={BAR.y} width={BAR.w} height={BAR.h} fill="none" stroke={INK} strokeWidth={3} />
				<rect x={480} y={BAR.y} width={BAR.w} height={BAR.h} fill="none" stroke={INK} strokeWidth={3} />
				<AbBar x={180} he={HE_PRED} o={prog(f, qm, 14)} />
				<AbBar x={480} he={(HE_OBS_LO + HE_OBS_HI) / 2} o={prog(f, pc, 14)} />
				<LPlate spec={CLOUD} p={{x: 680, y: 300, w: 160}} />
				<rect x={700} y={490} width={240 * shrink} height={30} rx={6} fill={GREY.stroke} />
				<rect x={700} y={490} width={240} height={30} rx={6} fill="none" stroke={GREY.stroke} strokeWidth={2} strokeDasharray="6 5" />
				{f >= fp ? <g opacity={prog(f, fp, 14)}><rect x={980} y={BAR.y + BAR.h - BAR.h * 0.03} width={BAR.w} height={BAR.h * 0.03} fill={NEUTRON} stroke={INK} strokeWidth={3} /><rect x={980} y={BAR.y} width={BAR.w} height={BAR.h} fill="none" stroke={GREY.stroke} strokeWidth={2} strokeDasharray="8 6" /></g> : null}
				{f >= he ? [0, 1, 2].map(i => <LPlate key={i} spec={CLOUD} p={{x: 1220 + i * 90, y: 640, w: 80}} opacity={prog(f, he + 4 * i, 12)} />) : null}
			</FrameSvg>
			<Lbl x={265} y={BAR.y + BAR.h + 40} at={qm} color={INK} size={28} anchor="middle">predicted (last time)</Lbl>
			<Lbl x={265} y={BAR.y + BAR.h + 76} at={qm} color={INK} size={28} anchor="middle">{`${HE_PRED}% He, ${100 - HE_PRED}% H`}</Lbl>
			<Lbl x={565} y={BAR.y + BAR.h + 40} at={pc} color={INK} size={28} anchor="middle">observed, least processed gas</Lbl>
			<Lbl x={565} y={BAR.y + BAR.h + 76} at={pc} color={INK} size={28} anchor="middle">{`${HE_OBS_LO} to ${HE_OBS_HI}% He`}</Lbl>
			<Lbl x={265} y={BAR.y + 60} at={qm + 6} color="#ffffff" size={28} anchor="middle">He</Lbl>
			<Lbl x={265} y={BAR.y + 300} at={qm + 6} color={ROSE.ink} size={28} anchor="middle">H</Lbl>
			<Lbl x={700} y={470} at={0} color={GREY.ink} size={26}>heavy elements (C, N, O, Fe)</Lbl>
			<HandTag x={680} y={570} text="least processed = fewest heavy elements" at={fh + 30} size={30} color={GREY.ink} />
			<HandTag x={330} y={250} text="match" at={pc + 16} size={36} color={INK} marks={[{kind: 'underline', x1: 180, x2: 650, y: 284}]} />
			<CrossedChip x={980} y={210} at={cs} crossAt={he + 20} size={30} caption="stars add too little">made by stars?</CrossedChip>
			<Lbl x={1065} y={BAR.y + BAR.h + 40} at={fp} color={INK} size={28} anchor="middle">added by stars: a few %</Lbl>
			<HandTag x={1170} y={BAR.y + BAR.h - 30} text="too little" at={fp + 16} size={34} color={ROSE.ink} />
			<Lbl x={1220} y={610} at={he} color={INK} size={28}>few stars formed: still ≈ 24% He</Lbl>
			<EvidenceColumn ticks={[-30, -30, he + 24, undefined]} y={170} />
		</>
	);
};

// ---------- 10. slow supernovae ----------
const LC: PlotBox = {x: 600, y: 500, w: 780, h: 300, x0: 0, x1: 140, y0: 0, y1: 1.1};
export const S10: React.FC = () => {
	const id = 'time-dilation';
	const f = useCurrentFrame();
	const tc = cue(id, 'the time between crests'), sti = cue(id, 'stretches every time interval in the signal'), es = cue(id, 'Exploding stars called supernovae'), one = cue(id, 'nearby one'), me = cap(id, cue(id, 'measured'));
	const lamAt = (k: number) => 80 * (1 + prog(k, sti, 40));
	const lam = lamAt(f);
	let phase = 0, crests = 0;
	for (let k = 0; k < f; k++) { const d = (2 * Math.PI * 120) / (30 * lamAt(k)); phase += d; if (k >= tc) crests += d / (2 * Math.PI); }
	const ticks = Math.floor(crests);
	const flash = f >= es ? 0.6 + 0.4 * Math.sin(f / 6) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={200} width={900} height={210} rx={14} fill="none" stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
				<WaveLine x0={120} x1={970} y={300} lambda={lam} amp={40} color={AMBER.stroke} width={5} phase={-phase} />
				<line x1={760} y1={220} x2={760} y2={390} stroke={INK} strokeWidth={4} strokeDasharray="10 7" />
				<LPlate spec={GALAXY} p={{x: 96, y: 470, w: 300}} />
				{flash > 0 ? <g opacity={prog(f, es, 10)}><circle cx={300} cy={540} r={22 * flash} fill="#fff6c8" /><circle cx={300} cy={540} r={9} fill="#ffffff" stroke="#e8b400" strokeWidth={3} /></g> : null}
				<PlotAxes b={LC} xt={[0, 20, 40, 60, 80, 100, 120, 140]} yt={[]} xl="time (days)" yl="brightness" opacity={prog(f, es, 12)} />
				<path d={snPath(LC, SN_DAYS, 1, prog(f, es + 10, 40))} fill="none" stroke={NAVY.stroke} strokeWidth={6} opacity={prog(f, es + 10, 10)} />
				<path d={snPath(LC, SN_DAYS * (1 + SN_Z), 1, prog(f, one, 50))} fill="none" stroke={RED.stroke} strokeWidth={6} opacity={prog(f, one, 10)} />
			</FrameSvg>
			<Lbl x={120} y={440} at={tc} color={AMBER.ink} size={28}>λ = c × (time between crests) (model wave)</Lbl>
			<Lbl x={770} y={235} at={tc + 10} color={INK} size={26}>{`crests past: ${ticks}`}</Lbl>
			<Readout x={1030} y={210} label="every interval" value="× (1 + z)" color={TEAL.ink} w={330} opacity={prog(f, sti, 12)} />
			<HandTag x={1030} y={380} text="every interval × (1 + z)" at={sti + 30} size={32} color={TEAL.ink} />
			<Lbl x={96} y={890} at={es} color={INK} size={28}>supernova: an exploding star</Lbl>
			<Lbl x={LC.x + 20} y={LC.y + 20} at={es + 20} color={NAVY.ink} size={28}>nearby</Lbl>
			<Lbl x={LC.x + 400} y={LC.y + 120} at={one + 30} color={RED.ink} size={28}>{`z = ${SN_Z}`}</Lbl>
			<div style={{position: 'absolute', left: LC.x, top: 410}}><Row at={one + 40} size={40}><AnswerBox at={one + 50}>{`duration × ${1 + SN_Z} = 1 + z`}</AnswerBox></Row></div>
			<HandTag x={LC.x + 420} y={LC.y + 200} text="same shape, twice as long" at={one + 60} out={me} size={30} color={RED.ink} />
			<Chip x={600} y={880} at={me} size={26} w={860} color={INK}>Dark Energy Survey (2024): stretch = 1 + z, up to z ≈ 1.2. Time dilation, from cosmological studies (link to an earlier video)</Chip>
			<EvidenceColumn ticks={[-30, -30, -30, me + 10]} y={170} />
		</>
	);
};

// ---------- 11. stronger together (and 12, the memory aid) ----------
const MiniCurve: React.FC = () => <svg width={120} height={80}><path d="M4,74 H116 M4,74 V4" stroke={INK} strokeWidth={2.5} fill="none" /><path d={Array.from({length: 40}, (_, i) => `${i ? 'L' : 'M'}${6 + i * 2.6},${72 - 60 * Math.exp(-(((i / 39 - 0.2) / (i / 39 < 0.2 ? 0.1 : 0.35)) ** 2))}`).join(' ')} fill="none" stroke={RED.stroke} strokeWidth={3} /></svg>;
const ROWPIC = [GALAXY, HORN, CLOUD] as const;
const ROWS = ['redshift ∝ distance', '2.7 K black body', '25% helium', 'supernovae × (1 + z)'];
const KINDS = ['expanding', 'hot', 'dense', 'expanding'];
const TOOLS = ['galaxy spectra', 'microwave antenna', 'gas-cloud composition', 'supernova timing'];
export const EvidenceTable: React.FC<{f: number; hi?: readonly number[]; kind?: readonly number[]; tools?: number; fill?: number; scale?: number; y?: number}> = ({f, hi = [], kind = [], tools = 1e9, fill = 1e9, scale = 1, y = 190}) => (
	<div style={{position: 'absolute', left: 96, top: y, width: 1728, transform: `scale(${scale})`, transformOrigin: 'left top', fontFamily: FONT_DISPLAY}}>
		<div style={{display: 'grid', gridTemplateColumns: '160px 470px 220px 330px 240px 240px', alignItems: 'center', columnGap: 12, rowGap: 14}}>
			<div /><div style={{fontWeight: 800, fontSize: 30, color: INK}}>evidence</div><div /><div /><div style={{fontWeight: 800, fontSize: 30, color: INK, textAlign: 'center'}}>hot Big Bang</div><div style={{fontWeight: 800, fontSize: 30, color: GREY.ink, textAlign: 'center'}}>steady state</div>
			{ROWS.map((r, i) => {
				const lit = hi[i] !== undefined && f >= hi[i];
				return <React.Fragment key={r}>
					<div style={{height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{i < 3 ? <svg width={160} height={120}><LPlate spec={ROWPIC[i]} p={{x: 5, y: 12, w: 150}} /></svg> : <MiniCurve />}</div>
					<div style={{fontWeight: 800, fontSize: 34, color: INK, background: lit ? '#f6ead2' : CARD, border: `3px solid ${lit ? INK : 'rgba(60,45,20,0.18)'}`, borderRadius: 12, padding: '10px 16px'}}>{r}</div>
					<div style={{fontWeight: 800, fontSize: 30, color: RED.ink, opacity: kind[i] !== undefined ? prog(f, kind[i], 12) : 0}}>{KINDS[i]}</div>
					<div style={{fontWeight: 700, fontSize: 28, color: GREY.ink, opacity: prog(f, tools + 6 * i, 12)}}>{TOOLS[i]}</div>
					<div style={{height: 96, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid rgba(60,45,20,0.25)', borderRadius: 12, background: CARD, fontWeight: 800, fontSize: 44, color: INK}}><span style={{opacity: prog(f, fill + 6 * i, 12)}}>✓</span></div>
					<div style={{height: 96, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid rgba(60,45,20,0.25)', borderRadius: 12, background: CARD, fontWeight: 800, fontSize: i === 0 ? 28 : 44, color: GREY.ink}}><span style={{opacity: prog(f, fill + 30 + 6 * i, 12)}}>{i === 0 ? '✓ (partly)' : '✗'}</span></div>
				</React.Fragment>;
			})}
		</div>
	</div>
);
export const S11: React.FC = () => {
	const id = 'together';
	const f = useCurrentFrame();
	const ex = cue(id, 'Expanding, because of the redshift'), hot = cue(id, 'Hot, because of'), de = cue(id, 'Dense enough to fuse'), im = cue(id, 'independent measurements'), all = cap(id, cue(id, 'explains them all'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<EvidenceTable f={f} hi={[ex, hot, de, ex]} kind={[ex, hot, de, ex + 6]} tools={im} fill={all} />
			<HandTag x={0} y={0} at={all + 14} color={INK} marks={[{kind: 'box', x: 1330, y: 230, w: 250, h: 560}]} />
			<HandTag x={1100} y={800} text="one model, four tests" at={all + 30} size={40} color={INK} />
			<Lbl x={96} y={880} at={all + 40} color={GREY.ink} size={28}>steady state ✓ (partly): expansion, but only with matter continuously created</Lbl>
		</>
	);
};
export const S12: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const sl = cue(id, 'Stretched light'), sn = cap(id, cue(id, 'slow supernovae'));
	const sc = kf(f, [[0, 1], [30, 0.62]]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<EvidenceTable f={1e6} hi={[]} kind={[-30, -30, -30, -30]} tools={-30} fill={-30} scale={sc} />
			<HandTag x={96} y={700} text="Stretched light, leftover glow," at={sl} size={64} color={INK} />
			<HandTag x={96} y={800} text="a quarter helium, slow supernovae." at={sn} size={64} color={INK} />
		</>
	);
};
