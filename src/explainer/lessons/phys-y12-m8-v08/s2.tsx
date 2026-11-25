// Scenes 7 to 11: concentrate the mass (two collision insets: a light centre shoved aside, a heavy centre sending the
// alpha back fast), every path explained (the Rutherford stage: paths on the field motion engine, bend set by distance
// from the nucleus), rare means tiny (a large-nucleus stage against the tiny-nucleus stage, a log size scale, a coded
// cricket oval with a pea), Rutherford's nuclear model and its limits, and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Chamber, deflection, pointRun, runPath} from '../../physics/atom/scattering';
import {lazy} from '../../sims';
import {AU_A, HEAD, HEAD_SIZE, KEEP_GOLD, ONE_IN, PEA_MM, SIZE_RATIO, cap, cue} from './common';
import {AMBER, Alpha, GREY, INK, KQ, KS, Lbl, NAVY, NucPlus, Oval, PURPLE, RED, RunPath, TEAL, bigRuns, fx, rRuns} from './parts';
import {spaced} from './s1';

// ---------- 7. concentrate the mass ----------
export const S07: React.FC = () => {
	const id = 'concentrate-mass';
	const f = useCurrentFrame();
	const lc = cue(id, 'A light centre would just be shoved aside'), cf = cue(id, 'The alphas came back fast, with nearly all their energy'), it = cue(id, 'much heavier than the alpha itself'), hv = cap(id, cue(id, 'tiny, positive, and heavy'));
	const tl = f >= lc ? Math.min(1.6, (f - lc) / 50) : 0, tr = f >= it - 20 ? Math.min(1.6, (f - it + 20) / 50) : 0;
	const aL = tl < 0.6 ? 160 + 600 * tl : 520 + (tl - 0.6) * 600 * 0.78, tL = tl < 0.6 ? 560 : 560 + (tl - 0.6) * 600 * 1.78;
	const aR = tr < 0.6 ? 1040 + 600 * tr : 1400 - (tr - 0.6) * 600 * 0.96;
	const vR = Math.sqrt(KEEP_GOLD);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={240} width={820} height={360} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<rect x={980} y={240} width={840} height={360} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				{true ? <g>
					<NucPlus x={Math.min(880, tL)} y={420 - (tl > 0.6 ? 30 * (tl - 0.6) : 0)} r={12} />
					<Alpha x={Math.min(880, aL)} y={420 + (tl > 0.6 ? 20 * (tl - 0.6) : 0)} r={22} />
					{tl > 0.7 ? <line x1={Math.min(880, aL) + 26} y1={470} x2={Math.min(880, aL) + 26 + 90 * 0.78} y2={470} stroke={TEAL.stroke} strokeWidth={6} /> : <line x1={aL + 26} y1={470} x2={aL + 116} y2={470} stroke={TEAL.stroke} strokeWidth={6} />}
				</g> : null}
				{true ? <g>
					<NucPlus x={1440} y={420} r={40} />
					<Alpha x={aR} y={420} r={22} />
					<line x1={aR} y1={480} x2={aR + (tr < 0.6 ? 90 : -90 * vR)} y2={480} stroke={TEAL.stroke} strokeWidth={6} />
				</g> : null}
				<Chamber p={{x: 96, y: 650, w: 260}} theta={150} flash={f >= cf ? 0.6 + 0.4 * Math.sin((f - cf) / 4) : 0} />
			</FrameSvg>
			<Lbl x={110} y={280} at={0} color={INK} size={28}>a light centre</Lbl>
			<Lbl x={110} y={570} at={lc + 50} color={INK} size={28}>light target: α barely turns</Lbl>
			<Lbl x={994} y={280} at={0} color={INK} size={28}>a heavy centre</Lbl>
			<Lbl x={994} y={570} at={it + 30} color={INK} size={28}>much heavier target: α comes back fast</Lbl>
			<Lbl x={380} y={700} at={cf} color={INK} size={28}>returning alphas still made bright flashes</Lbl>
			<HandTag x={380} y={770} text="still fast" at={cf + 20} size={36} color={AMBER.ink} />
			<Lbl x={380} y={840} at={cf + 30} color={GREY.ink} size={26}>{`gold centre: the alpha keeps about ${fx(KEEP_GOLD * 100)}% of its energy`}</Lbl>
			<Chip x={1100} y={660} at={it} size={30} color={PURPLE.ink}>{`gold centre ≈ ${AU_A} × mₚ`}</Chip>
			<Chip x={1100} y={730} at={it + 8} size={30} color={PURPLE.ink}>α ≈ 4 × mₚ</Chip>
			<Lbl x={1440} y={505} at={hv} color={INK} size={30} anchor="middle">nucleus</Lbl>
			{['tiny', 'positive', 'nearly all the mass'].map((t, i) => <Chip key={t} x={1500 + (i === 2 ? -200 : 0)} y={300 + 70 * i} at={hv + 4 * i} size={26} color={INK}>{t}</Chip>)}
			<HandTag x={0} y={0} at={hv + 10} color={PURPLE.stroke} marks={[{kind: 'circle', cx: 1440, cy: 420, rx: 70, ry: 60}]} />
		</>
	);
};

// ---------- 8. every path explained ----------
const N8 = {x: 1000, y: 560};
const FAR = lazy(() => [5.5, 3.0, -2.6, -4.5].map(b => pointRun({b, k: KQ, x0: -9, duration: 18})));
const MOD = lazy(() => pointRun({b: 0.85, k: KQ, x0: -9, duration: 18}));
const BACK = lazy(() => pointRun({b: 0.025, k: KQ, x0: -9, duration: 18}));
export const S08: React.FC = () => {
	const id = 'paths-explained';
	const f = useCurrentFrame();
	const mf = cue(id, 'Most alphas pass far from any nucleus'), ma = cue(id, 'a moderate angle'), ar = cue(id, 'swing right around'), nu = cap(id, cue(id, 'how close it comes to a nucleus'));
	const theta = f < ma ? 0 : f < ar ? deflection(MOD()) : deflection(BACK());
	const uF = prog(f, mf, 50), uM = prog(f, ma, 50), uB = prog(f, ar - 10, 50);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={440} y={190} width={1380} height={720} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				{[[1000, 240], [1000, 880], [1500, 400], [1500, 720], [600, 400], [600, 720]].map(([x, y], i) => <NucPlus key={i} x={x} y={y} r={9} />)}
				<NucPlus x={N8.x} y={N8.y} r={12} />
				{FAR().map((r, i) => <RunPath key={i} run={r} cx={N8.x} cy={N8.y} u={uF} width={3.5} />)}
				<RunPath run={MOD()} cx={N8.x} cy={N8.y} u={uM} width={4.5} />
				<RunPath run={BACK()} cx={N8.x} cy={N8.y} u={uB} width={5} />
				{f >= nu ? <g opacity={prog(f, nu, 12)} stroke={NAVY.stroke} strokeWidth={3}>
					{[3.0, 0.85, 0.025].map((b, i) => <g key={i}><line x1={500 + 40 * i} y1={N8.y} x2={500 + 40 * i} y2={N8.y - b * KS} /><line x1={490 + 40 * i} y1={N8.y - b * KS} x2={510 + 40 * i} y2={N8.y - b * KS} /></g>)}
					<line x1={480} y1={N8.y} x2={N8.x - 30} y2={N8.y} strokeDasharray="6 6" />
				</g> : null}
				<Chamber p={{x: 96, y: 200, w: 300}} theta={theta} beam={1} />
			</FrameSvg>
			<Lbl x={460} y={226} at={0} color={GREY.ink} size={26}>nuclei enlarged; not to scale</Lbl>
			<Lbl x={96} y={520} at={ma} color={TEAL.ink} size={28}>{`arm at about ${fx(theta)}°`}</Lbl>
			<Lbl x={1560} y={N8.y - 3.0 * KS - 10} at={mf + 30} color={INK} size={26}>mostly empty space</Lbl>
			<Lbl x={1560} y={N8.y - 40} at={ma + 30} color={INK} size={26}>{`moderate: about ${fx(deflection(MOD()))}°`}</Lbl>
			<HandTag x={0} y={0} at={ar + 20} color={AMBER.stroke} marks={[{kind: 'arrow', from: [N8.x - 300, N8.y + 30], to: [N8.x - 30, N8.y + 8], bend: 0}]} />
			<Lbl x={N8.x - 180} y={N8.y + 80} at={ar + 20} color={AMBER.ink} size={26}>enormous repulsion</Lbl>
			<Lbl x={96} y={600} at={nu} color={NAVY.ink} size={26}>distance from the nucleus:</Lbl>
			<Lbl x={96} y={640} at={nu + 4} color={INK} size={26}>far: small bend</Lbl>
			<Lbl x={96} y={680} at={nu + 8} color={INK} size={26}>closer: bigger bend</Lbl>
			<Lbl x={96} y={720} at={nu + 12} color={INK} size={26}>almost head-on: back</Lbl>
			<HandTag x={96} y={800} text="distance sets the bend" at={nu + 16} size={32} color={NAVY.ink} />
		</>
	);
};

// ---------- 9. rare means tiny ----------
const SL = {x: 450, y: 380}, SR = {x: 1380, y: 380};
const lg = (v: number) => 120 + ((Math.log10(v) + 16) / 7) * 760;
export const S09: React.FC = () => {
	const id = 'rare-means-tiny';
	const f = useCurrentFrame();
	const bg = cue(id, 'If the charged centre were big'), tr = cue(id, 'so the charge sits in a tiny region'), tw = cue(id, 'Today we know nuclei are between'), tt = cue(id, 'An atom is around ten to the minus ten'), ce = cap(id, cue(id, 'a pea at the centre'));
	const small = rRuns();
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={190} width={820} height={380} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} opacity={prog(f, bg, 12)} />
				<rect x={1000} y={190} width={820} height={380} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<defs><clipPath id="m8v08-left"><rect x={96} y={190} width={820} height={380} rx={16} /></clipPath><clipPath id="m8v08-right"><rect x={1000} y={190} width={820} height={380} rx={16} /></clipPath></defs>
				{f >= bg ? <g opacity={prog(f, bg, 12)} clipPath="url(#m8v08-left)">
					<circle cx={SL.x} cy={SL.y} r={1.6 * KS * 0.75} fill={'#f2b9ae'} stroke={RED.stroke} strokeWidth={3} />
					{bigRuns().map((r, i) => <path key={i} d={runPath(r, SL.x, SL.y, KS * 0.75, prog(f, bg + 10, 50))} fill="none" stroke={AMBER.stroke} strokeWidth={3.5} />)}
				</g> : null}
				<NucPlus x={SR.x} y={SR.y} r={9} />
				<g clipPath="url(#m8v08-right)">{small.map((r, i) => <path key={i} d={runPath(r, SR.x, SR.y, KS * 0.75, 1)} fill="none" stroke={AMBER.stroke} strokeWidth={3.5} />)}</g>
				{f >= tw ? <g opacity={prog(f, tw, 12)}>
					<line x1={120} y1={760} x2={880} y2={760} stroke={INK} strokeWidth={3} />
					{[-16, -14, -12, -10].map(e => <g key={e}><line x1={lg(10 ** e)} y1={752} x2={lg(10 ** e)} y2={772} stroke={INK} strokeWidth={3} /></g>)}
					<rect x={lg(1e-15)} y={700} width={lg(1e-14) - lg(1e-15)} height={40} rx={6} fill={'#f2b9ae'} stroke={RED.stroke} strokeWidth={3} />
				</g> : null}
				{f >= tt ? <rect x={lg(1e-10) - 10} y={640} width={20} height={100} rx={4} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={3} opacity={prog(f, tt, 12)} /> : null}
				<Oval cx={1420} cy={760} rx={330} ry={130} opacity={prog(f, ce - 20, 14)} />
				{f >= ce - 10 ? <circle cx={1420} cy={760} r={7} fill="#5aa13a" stroke={INK} strokeWidth={2} /> : null}
			</FrameSvg>
			<Lbl x={110} y={225} at={bg} color={INK} size={26}>if the centre were big (wrong idea)</Lbl>
			<CrossedChip x={600} y={500} at={bg + 40} crossAt={bg + 56} size={26}>large angles: common</CrossedChip>
			<Lbl x={1014} y={225} at={0} color={INK} size={26}>tiny centre (enlarged)</Lbl>
			<div style={{position: 'absolute', left: 1014, top: 500}}><Row at={tr - 6} size={28}><AnswerBox at={tr}>{`thin gold: about 1 in ${spaced(ONE_IN)} near 90°`}</AnswerBox></Row></div>
			<HandTag x={1420} y={260} text="rare bounces → tiny target" at={tr + 16} size={30} color={TEAL.ink} />
			<Lbl x={120} y={810} at={tw} color={INK} size={26}>10⁻¹⁶</Lbl>
			<Lbl x={lg(1e-14) - 24} y={810} at={tw} color={INK} size={26}>10⁻¹⁴</Lbl>
			<Lbl x={lg(1e-12) - 24} y={810} at={tw} color={INK} size={26}>10⁻¹²</Lbl>
			<Lbl x={lg(1e-10) - 24} y={810} at={tw} color={INK} size={26}>10⁻¹⁰ m</Lbl>
			<Lbl x={120} y={850} at={tw} color={GREY.ink} size={26}>size in metres (log scale)</Lbl>
			<Lbl x={lg(1e-15)} y={650} at={tw} color={RED.ink} size={26}>nucleus (modern value): 10⁻¹⁵ to 10⁻¹⁴ m</Lbl>
			<Lbl x={lg(1e-10) - 10} y={606} at={tt} color={NAVY.ink} size={26} anchor="middle">atom: ≈ 10⁻¹⁰ m</Lbl>
			<HandTag x={0} y={0} at={tt + 14} color={NAVY.stroke} marks={[{kind: 'arrow', from: [lg(1e-14) + 10, 720], to: [lg(1e-10) - 20, 720], bend: 0}]} />
			<Lbl x={1420} y={605} at={ce - 10} color={INK} size={26} anchor="middle">{`atom (gold: about ${spaced(Math.round(SIZE_RATIO / 10000) * 10000)} times wider than its nucleus)`}</Lbl>
			<Lbl x={1440} y={760} at={ce - 6} color={INK} size={26}>nucleus: a pea</Lbl>
			<Lbl x={1420} y={918} at={ce - 6} color={GREY.ink} size={26} anchor="middle">{`cricket oval ≈ 160 m → pea ≈ ${fx(PEA_MM, 1)} mm (pea drawn larger)`}</Lbl>
		</>
	);
};

// ---------- 10. Rutherford's nuclear model ----------
const NM = {x: 960, y: 560};
const ORB = [[300, 0.3], [380, 2.1], [330, 4.2]] as const;
export const S10: React.FC = () => {
	const id = 'nuclear-model';
	const f = useCurrentFrame();
	const nm = cue(id, 'Nearly all the mass and all the positive charge'), es = cue(id, 'most of the atom is empty space'), th = cap(id, cue(id, 'or how they stay there'));
	const pN = f >= nm && f < nm + 40 ? Math.sin(((f - nm) / 40) * Math.PI) : 0, pE = f >= es && f < es + 40 ? Math.sin(((f - es) / 40) * Math.PI) : 0;
	const q = prog(f, th, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{pE > 0 ? <circle cx={NM.x} cy={NM.y} r={260} fill={'#e8f0f7'} opacity={0.8 * pE} /> : null}
				{ORB.map(([r, a], i) => <g key={i}>
					<ellipse cx={NM.x} cy={NM.y} rx={r} ry={r * 0.72} fill="none" stroke={q > 0.5 ? GREY.stroke : NAVY.stroke} strokeWidth={2.5} strokeDasharray="10 9" />
					<circle cx={NM.x + r * Math.cos(a)} cy={NM.y + r * 0.72 * Math.sin(a)} r={13} fill={NAVY.stroke} />
				</g>)}
				<NucPlus x={NM.x} y={NM.y} r={16 + 6 * pN} />
			</FrameSvg>
			<Lbl x={NM.x + 30} y={NM.y - 24} at={0} color={RED.ink} size={30}>+Ze</Lbl>
			<Lbl x={96} y={260} at={0} color={INK} size={30}>Rutherford, 1911</Lbl>
			<Lbl x={96} y={330} at={nm} color={RED.ink} size={28}>nucleus: tiny, dense, positive</Lbl>
			<Lbl x={96} y={380} at={nm + 10} color={NAVY.ink} size={28}>electrons outside</Lbl>
			<Lbl x={96} y={430} at={es} color={INK} size={28}>mostly empty space</Lbl>
			<Lbl x={96} y={490} at={0} color={GREY.ink} size={26}>(nucleus drawn far too large)</Lbl>
			<HandTag x={NM.x + 60} y={NM.y + 60} text="+Ze, tiny" at={nm + 20} out={th} size={30} color={RED.ink} />
			{ORB.map(([r, a], i) => <Lbl key={i} x={NM.x + r * Math.cos(a) + 18} y={NM.y + r * 0.72 * Math.sin(a) - 18} at={th} color={GREY.ink} size={30}>?</Lbl>)}
			<Chip x={1320} y={830} at={th} size={28} color={INK}>not settled: electron arrangement and stability</Chip>
			<HandTag x={1400} y={300} text="where? how?" at={th + 6} size={32} color={NAVY.ink} marks={[{kind: 'circle', cx: NM.x + ORB[0][0] * Math.cos(ORB[0][1]), cy: NM.y + ORB[0][0] * 0.72 * Math.sin(ORB[0][1]), rx: 30, ry: 30}]} />
		</>
	);
};

// ---------- 11. a way to remember ----------
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const mg = cue(id, 'Most go through'), rf = cue(id, 'A rare few come back'), po = cap(id, cue(id, 'tiny, dense and positive'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Chamber p={{x: 96, y: 220, w: 600}} theta={f >= rf ? 150 : 0} beam={1} flash={0.8} />
				{f >= mg ? <g opacity={prog(f, mg, 12)}>{[0, 1, 2].map(i => <line key={i} x1={800} y1={330 + 18 * i} x2={980} y2={330 + 18 * i} stroke={AMBER.stroke} strokeWidth={4} />)}</g> : null}
				{f >= rf ? <g opacity={prog(f, rf, 12)}><path d="M800,560 L940,560 L820,620" fill="none" stroke={AMBER.stroke} strokeWidth={5} /><NucPlus x={950} y={560} r={10} /></g> : null}
			</FrameSvg>
			<HandTag x={1010} y={360} text="Most through → mostly empty" at={mg} size={50} color={INK} />
			<HandTag x={1010} y={580} text="Rarely back → tiny, dense" at={rf} size={50} color={INK} />
			<HandTag x={1010} y={660} text="and positive" at={po} size={50} color={RED.ink} />
		</>
	);
};
