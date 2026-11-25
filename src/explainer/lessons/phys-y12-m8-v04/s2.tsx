// Scenes 7 to 11: the white dwarfs (the region, a bright tile on a shrinking white star, Sirius A and B, the painted
// Earth beside the painted white star at 0.88 of its width), lines of equal radius (the live star marker with T, L, class
// and R), regions as stages (a conceptual path for a Sun-like star), reading a star (working layout with the diagram
// small) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Disc, EARTH, LPlate} from '../../physics/light/plates';
import {STAR_WHITE} from '../../physics/light/stars';
import {classOf, hrX, hrY, msLum, radiusLineL, radiusOf} from '../../physics/atom/stellar';
import type {HRBox} from '../../physics/atom/stellar';
import {Readout} from '../../physics/atom/universe';
import {ALDEB, EARTH_KM, HEAD, HEAD_SIZE, RED_HI, RED_T, SB_RATIO, SIRIUS_A, SIRIUS_B, T_SUN, W_L, W_MS, W_R, W_RATIO, W_T, cap, cue} from './common';
import {AMBER, BLUE, GREY, HRDiagram, INK, Lbl, NAVY, RED, Strip, TEAL, fx, plateFor} from './parts';
import {HL, HR} from './s1';

// ---------- 7. hot and dim: the white dwarfs ----------
export const S07: React.FC = () => {
	const id = 'white-dwarfs';
	const f = useCurrentFrame();
	const bl = cue(id, 'the bottom left'), sm = cue(id, 'Each square metre gives out a lot of power'), ti = cue(id, 'tiny'), su = cue(id, 'stars like the Sun'), sb = cue(id, 'Sirius B is a white dwarf'), ea = cap(id, cue(id, 'smaller than Earth'));
	const tileO = prog(f, sm, 14) * (1 - prog(f, sb, 12));
	const shrink = prog(f, ti, 30);
	const sizeO = prog(f, sb + 10, 16);
	const EW = 360, SW = EW * SB_RATIO;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<HRDiagram b={HL} f={f} L={{axes: 1, band: 1, ms: 1, regions: 1, giants: 1, dwarfs: prog(f, bl + 10, 14), labels: 1, hiPt: f >= sb ? [[SIRIUS_B.T, SIRIUS_B.L], [SIRIUS_A.T, SIRIUS_A.L]] : []}} size={26} ticksT={[40000, 10000, 2500]} ticksL={[-4, 0, 4]} />
				{tileO > 0.001 ? <g opacity={tileO}>
					<Disc spec={STAR_WHITE} cx={1350} cy={560} d={200 - 180 * shrink} />
					<rect x={1339} y={549} width={22} height={22} fill="#ffffff" stroke={BLUE.stroke} strokeWidth={4} opacity={1 - shrink} />
				</g> : null}
				{sizeO > 0.001 ? <g opacity={sizeO}>
					<Disc spec={EARTH} cx={1180} cy={560} d={EW} />
					<Disc spec={STAR_WHITE} cx={1600} cy={560} d={SW} />
				</g> : null}
			</FrameSvg>
			<HandTag x={1100} y={760} text="hot, so needs tiny area" at={sm + 30} out={sb} size={32} color={BLUE.ink} />
			<Lbl x={1100} y={300} at={sm} out={sb} color={BLUE.ink} size={28}>hot: more power per m²</Lbl>
			<Lbl x={1100} y={840} at={su} out={sb} color={INK} size={28}>white dwarf: leftover core (how: a later video)</Lbl>
			<Lbl x={hrX(HL, SIRIUS_B.T) + 20} y={hrY(HL, SIRIUS_B.L) + 36} at={sb} color={INK} size={26}>Sirius B</Lbl>
			<Lbl x={hrX(HL, SIRIUS_A.T) + 20} y={hrY(HL, SIRIUS_A.L) - 14} at={sb} color={INK} size={26}>{`Sirius A: ${SIRIUS_A.T} K, ${SIRIUS_A.L} L☉`}</Lbl>
			<Lbl x={96} y={900} at={sb + 6} color={INK} size={28}>{`Sirius B: about ${(25000).toLocaleString('en-AU').replace(',', ' ')} K, about ${SIRIUS_B.L} L☉ (Bond 2017)`}</Lbl>
			<Lbl x={1180} y={800} at={sb + 10} color={INK} size={28} anchor="middle">{`Earth: ${EARTH_KM} km`}</Lbl>
			<Lbl x={1600} y={800} at={sb + 10} color={INK} size={28} anchor="middle">{`Sirius B: about ${Math.round(SIRIUS_B.km / 100) * 100} km`}</Lbl>
			<HandTag x={1300} y={300} text="smaller than Earth" at={ea} size={36} color={TEAL.ink} marks={[{kind: 'underline', x1: 1000, x2: 1360, y: 760}, {kind: 'underline', x1: 1600 - SW / 2, x2: 1600 + SW / 2, y: 740}]} />
		</>
	);
};

// ---------- 8. lines of equal size ----------
const fmtR = (R: number) => (R >= 10 ? fx(R) : R >= 1 ? fx(R, 1) : R >= 0.1 ? fx(R, 2) : fx(R, 4));
const fmtL = (L: number) => (L >= 10 ? fx(L) : L >= 1 ? fx(L, 1) : L >= 0.01 ? fx(L, 2) : fx(L, 3));
const R_LABELS = [[1000, 3000], [100, 3000], [1, 3000], [0.01, 20000]] as const;
export const S08: React.FC = () => {
	const id = 'radius-lines';
	const f = useCurrentFrame();
	const lr = cue(id, 'lines of equal radius'), ur = cue(id, 'Up and to the right means bigger'), dl = cue(id, 'Down and to the left means smaller'), sz = cap(id, cue(id, 'size'));
	const L10 = Math.log10;
	const lt = kf(f, [[ur, L10(T_SUN)], [ur + 20, L10(T_SUN)], [ur + 40, L10(ALDEB.T)], [ur + 60, L10(RED_T)], [dl, L10(RED_T)], [dl + 40, L10(SIRIUS_B.T)]]);
	const ll = kf(f, [[ur, 0], [ur + 20, 2], [ur + 40, L10(ALDEB.L)], [ur + 60, L10(RED_HI)], [dl, L10(RED_HI)], [dl + 40, L10(SIRIUS_B.L)]]);
	const T = 10 ** lt, L = 10 ** ll, R = radiusOf(T, L);
	const w = Math.max(20, Math.min(240, 60 * 10 ** (L10(R) * 0.25)));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<HRDiagram b={HR} f={f} L={{axes: 1, band: 1, ms: 1, regions: 1, giants: 1, dwarfs: 1, labels: 1, radius: prog(f, lr, 20)}} />
				<circle cx={hrX(HR, T)} cy={hrY(HR, L)} r={18} fill="none" stroke={RED.stroke} strokeWidth={5} />
				<circle cx={hrX(HR, T)} cy={hrY(HR, L)} r={6} fill={RED.stroke} />
				<LPlate spec={plateFor(T)} p={{x: 420 - w / 2, y: 720 - w / 2, w}} />
				{f >= ur ? <g opacity={prog(f, ur, 12)}><line x1={HR.x + 700} y1={HR.y + 200} x2={HR.x + 800} y2={HR.y + 120} stroke={NAVY.stroke} strokeWidth={6} /><path d={`M${HR.x + 812},${HR.y + 110} l-26,4 l12,18 z`} fill={NAVY.stroke} /></g> : null}
				{f >= dl ? <g opacity={prog(f, dl, 12)}><line x1={HR.x + 300} y1={HR.y + 330} x2={HR.x + 200} y2={HR.y + 410} stroke={NAVY.stroke} strokeWidth={6} /><path d={`M${HR.x + 188},${HR.y + 420} l26,-4 l-12,-18 z`} fill={NAVY.stroke} /></g> : null}
			</FrameSvg>
			{R_LABELS.map(([r, t], i) => <Lbl key={r} x={hrX(HR, t) - 10} y={hrY(HR, radiusLineL(t, r)) - 12} at={lr + 6 * i} color={GREY.ink} size={26} anchor="end">{`${r} R☉`}</Lbl>)}
			<Readout x={96} y={180} label="T" value={`${fx(Math.round(T / 100) * 100).replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} K`} color={RED.ink} w={240} />
			<Readout x={346} y={180} label="L (L☉)" value={fmtL(L)} color={NAVY.ink} w={240} />
			<Readout x={96} y={320} label="class" value={classOf(T)} color={INK} w={240} />
			<Readout x={346} y={320} label="R (R☉)" value={fmtR(R)} color={TEAL.ink} w={240} />
			<Lbl x={96} y={500} at={0} color={GREY.ink} size={26}>star size: a schematic cue</Lbl>
			<Lbl x={HR.x + 820} y={HR.y + 110} at={ur} color={NAVY.ink} size={30}>bigger</Lbl>
			<Lbl x={HR.x + 120} y={HR.y + 460} at={dl} color={NAVY.ink} size={30}>smaller</Lbl>
			<HandTag x={96} y={900} text="position gives size" at={sz} size={36} color={TEAL.ink} marks={[{kind: 'circle', cx: 466, cy: 380, rx: 130, ry: 64}]} />
		</>
	);
};

// ---------- 9. regions are stages ----------
const PATH: readonly (readonly [number, number])[] = [[5800, 1], [4800, 20], [4200, 300], [9000, 1500], [30000, 300], [30000, 1], [25000, 0.02]];
export const S09: React.FC = () => {
	const id = 'stages';
	const f = useCurrentFrame();
	const fh = cue(id, 'fusing hydrogen in its core'), ml = cue(id, 'most of its life'), mu = cue(id, 'moves up and to the right'), cl = cue(id, 'its hot core is left behind'), rem = cap(id, cue(id, 'remnant'));
	const pts = PATH.map(([t, l]) => [hrX(HR, t), hrY(HR, l)] as const);
	const seg = (a: number, b: number) => pts.slice(a, b + 1).map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	const pulse = f >= fh && f < fh + 40 ? Math.sin(((f - fh) / 40) * Math.PI) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<HRDiagram b={HR} f={f} L={{axes: 1, band: 1 + 0.3 * pulse, ms: 1, regions: 1, giants: 1, dwarfs: 1, labels: 1, radius: 1 - prog(f, 0, 20)}} />
				<path d={seg(0, 2)} fill="none" stroke={INK} strokeWidth={6} strokeDasharray="14 9" opacity={prog(f, mu, 20)} />
				<path d={seg(2, 6)} fill="none" stroke={INK} strokeWidth={6} strokeDasharray="14 9" opacity={prog(f, cl, 20)} />
				{f >= mu + 20 ? <path d={`M${pts[2][0]},${pts[2][1]} l-4,26 l22,-10 z`} fill={INK} /> : null}
				{f >= cl + 20 ? <path d={`M${pts[6][0]},${pts[6][1]} l-20,-14 l24,-6 z`} fill={INK} /> : null}
				<g opacity={prog(f, ml, 14)}>
					<rect x={96} y={560} width={460} height={40} rx={6} fill="#fffdf8" stroke={INK} strokeWidth={3} />
					<rect x={96} y={560} width={460 * 0.9} height={40} rx={6} fill="#f3dca6" stroke={AMBER.stroke} strokeWidth={3} />
				</g>
			</FrameSvg>
			<Lbl x={96} y={400} at={fh} color={AMBER.ink} size={30}>stage 1: main sequence</Lbl>
			<Lbl x={96} y={530} at={ml} color={INK} size={26}>time on main sequence ≈ 90% of its life</Lbl>
			<HandTag x={96} y={650} text="most of its life" at={ml + 10} size={32} color={INK} />
			<Lbl x={HR.x + 20} y={HR.y + 30} at={mu} color={GREY.ink} size={26}>conceptual path, Sun-like star</Lbl>
			<HandTag x={pts[2][0] + 30} y={pts[2][1] + 50} text="swells, cools" at={mu + 20} size={30} color={INK} />
			<HandTag x={pts[5][0] + 40} y={pts[5][1] + 20} text="core left behind" at={cl + 20} size={30} color={INK} />
			<HandTag x={0} y={0} at={mu + 30} color={INK} marks={[{kind: 'circle', cx: pts[2][0], cy: pts[2][1], rx: 50, ry: 40}]} />
			<HandTag x={0} y={0} at={cl + 30} color={INK} marks={[{kind: 'circle', cx: pts[6][0], cy: pts[6][1], rx: 50, ry: 40}]} />
			<Chip x={96} y={720} at={rem} size={28} color={INK}>main sequence → giant → remnant (white dwarf)</Chip>
		</>
	);
};

// ---------- 10. reading a star ----------
const SM: HRBox = {x: 1200, y: 320, w: 600, h: 420, tHot: 40000, tCool: 2500, lLo: -4, lHi: 6};
export const S10: React.FC = () => {
	const id = 'worked-reading';
	const f = useCurrentFrame();
	const fk = cue(id, 'four thousand kelvin'), or = cue(id, 'orange'), ms = cue(id, 'a main-sequence star has only about a tenth of a solar luminosity'), gi = cue(id, 'giant'), ra = cap(id, cue(id, 'radius'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={168} at={2} size={34}>Describe the star from its position.</Strip>
			<Strip x={96} y={236} at={6} size={30}>same T: R ratio = √(L ratio)</Strip>
			<FrameSvg>
				<HRDiagram b={SM} f={f} L={{axes: 1, band: 1, ms: 1, regions: 1, giants: 1, dwarfs: 1}} size={24} ticksT={[40000, 10000, 2500]} ticksL={[-4, 0, 4]} />
				{f >= ms ? <g opacity={prog(f, ms, 14)}><line x1={hrX(SM, W_T)} y1={SM.y + SM.h} x2={hrX(SM, W_T)} y2={SM.y} stroke={INK} strokeWidth={3} strokeDasharray="8 6" /><circle cx={hrX(SM, W_T)} cy={hrY(SM, msLum(W_T))} r={10} fill="none" stroke={AMBER.stroke} strokeWidth={4} /></g> : null}
				<circle cx={hrX(SM, W_T)} cy={hrY(SM, W_L)} r={14} fill="#f6b36a" stroke={INK} strokeWidth={3} opacity={prog(f, fk, 12)} />
			</FrameSvg>
			<Lbl x={SM.x + 8} y={SM.y - 50} at={0} color={GREY.ink} size={26}>{`T = ${W_T} K, L = ${W_L} L☉`}</Lbl>
			<Lbl x={hrX(SM, W_T) + 18} y={hrY(SM, msLum(W_T)) + 30} at={ms + 10} color={AMBER.ink} size={26}>{`≈ ${W_MS} L☉`}</Lbl>
			<HandTag x={0} y={0} at={ms + 20} color={NAVY.stroke} marks={[{kind: 'arrow', from: [hrX(SM, W_T) - 24, hrY(SM, msLum(W_T)) - 10], to: [hrX(SM, W_T) - 24, hrY(SM, W_L) + 14], bend: 0}]} />
			<div style={{position: 'absolute', left: 96, top: 340, display: 'flex', flexDirection: 'column', gap: 18, width: 1080}}>
				<Row at={or - 6} ageAt={gi} size={46}>T = 4000 K → class K → orange</Row>
				<Row at={gi - 6} ageAt={ra} size={46}>far above the main sequence → giant</Row>
				<Row at={ra - 6} size={48}><AnswerBox at={ra}>{`L ratio = ${W_L} / ${W_MS} = ${W_RATIO} → R ratio = √${W_RATIO} ≈ ${fx(W_R)}`}</AnswerBox></Row>
			</div>
			<HandTag x={830} y={350} text="4000 K: orange" at={or + 16} out={ra} size={32} color={RED.ink} />
			<HandTag x={96} y={680} text="compare at the same T" at={ra + 16} size={34} color={TEAL.ink} />
			<CrossedChip x={96} y={760} at={gi + 30} crossAt={gi + 48} size={28} caption="the Sun is not 4000 K">√(100 / 1) = 10 (against the Sun)</CrossedChip>
		</>
	);
};

// ---------- 11. a way to remember ----------
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const up = cue(id, 'Up is power'), lh = cue(id, 'left is hot'), th = cue(id, 'Top right is huge'), ti = cap(id, cue(id, 'tiny'));
	const gp = f >= th && f < th + 40 ? Math.sin(((f - th) / 40) * Math.PI) : 0, wp = f >= ti && f < ti + 40 ? Math.sin(((f - ti) / 40) * Math.PI) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<HRDiagram b={HR} f={f} L={{axes: 1, band: 1, ms: 1, regions: 1, giants: 1, dwarfs: 1, labels: 1}} />
				{gp > 0 ? <ellipse cx={hrX(HR, 4200)} cy={hrY(HR, 3000)} rx={170 + 20 * gp} ry={150 + 20 * gp} fill="none" stroke={RED.stroke} strokeWidth={5} /> : null}
				{wp > 0 ? <ellipse cx={hrX(HR, 14000)} cy={hrY(HR, 0.004)} rx={150 + 20 * wp} ry={90 + 20 * wp} fill="none" stroke={BLUE.stroke} strokeWidth={5} /> : null}
				{f >= up ? <g opacity={prog(f, up, 12)}><line x1={HR.x - 90} y1={HR.y + HR.h - 40} x2={HR.x - 90} y2={HR.y + 60} stroke={NAVY.stroke} strokeWidth={7} /><path d={`M${HR.x - 90},${HR.y + 44} l-13,24 h26 z`} fill={NAVY.stroke} /></g> : null}
				{f >= lh ? <g opacity={prog(f, lh, 12)}><line x1={HR.x + HR.w - 60} y1={HR.y + HR.h + 100} x2={HR.x + 60} y2={HR.y + HR.h + 100} stroke={RED.stroke} strokeWidth={7} /><path d={`M${HR.x + 44},${HR.y + HR.h + 100} l24,-13 v26 z`} fill={RED.stroke} /></g> : null}
			</FrameSvg>
			<Lbl x={HR.x - 90} y={HR.y + 10} at={up} color={NAVY.ink} size={40} anchor="middle">L</Lbl>
			<HandTag x={96} y={420} text="Up is power," at={up} size={50} color={INK} />
			<HandTag x={96} y={500} text="left is hot." at={lh} size={50} color={INK} />
			<HandTag x={96} y={600} text="Top right is huge," at={th} size={50} color={INK} />
			<HandTag x={96} y={680} text="bottom left is tiny." at={ti} size={50} color={INK} />
		</>
	);
};
