import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, rng} from '../../kit';
import {cues} from '../../cues';
import {IronTube, ironW} from '../chem-m5-c03/parts';
import {Chip, EqStrip, Overlay, eqWidth} from '../chem-m5-c05/parts';
import type {EqItem} from '../chem-m5-c05/parts';
import {Arrow, Cutaway, ColourWheel, ColourimeterPic, Cuvette, Fade, Ring, Sx, TEAL, Tick, colPoint, countText, cutGeom, cuvW} from './parts';
import {BEAM, FE, FE_INK, Heading, RED, RED_INK, SAMPLE, SCN, SCN_INK, WATER, kf, sc} from './common';
import {MAGNIFIER} from './assets';

export const IRON_EQ: EqItem[] = [{k: 'sp', t: 'Fe^{3+}(aq)', color: FE_INK}, {k: 'plus'}, {k: 'sp', t: 'SCN^{-}(aq)', color: SCN_INK}, {k: 'arrow'}, {k: 'sp', t: 'FeSCN^{2+}(aq)', color: RED_INK}];
const eqAt = (a: number, b: number, c: number): EqItem[] => [{...IRON_EQ[0], at: a} as EqItem, {k: 'plus', at: b}, {...IRON_EQ[2], at: b} as EqItem, {k: 'arrow', at: c}, {...IRON_EQ[4], at: c} as EqItem];

// ---------- 1. Hook: a colour that gives a number ----------
const H = 'hook';
const K1 = cues(sc(H), {changed: 'K changed with temperature', given: 'given to us', where: 'where do those numbers', count: 'count ions', tube: ['test tube', 1], here: 'But here is', again: 'thiocyanate tube again', iron: 'Iron three plus', thio: ['thiocyanate join', 1], make: 'to make F E', red: 'deep red', more: 'the more of it', num: 'into a number', measure: 'measure a concentration', realK: 'a real K', how: 'So how does'});
const TUBE = {x: 210, y: 300, h: 600};
const LENS_C: [number, number] = [TUBE.x + ironW(TUBE.h) / 2, 720];
/** The painted magnifier slides over the tube; its lens shows a blur of ions far too many to count. */
const Magnifier: React.FC<{inAt: number; outAt: number; crossAt: number}> = ({inAt, outAt, crossAt}) => {
	const f = useCurrentFrame();
	const k = 0.36, LR = 395 * k;
	const slide = (1 - prog(f, inAt, 26)) * 620 + prog(f, outAt, 24) * 720;
	const o = prog(f, inAt, 10) * (1 - prog(f, outAt + 14, 10));
	if (o <= 0.01) return null;
	const cx = LENS_C[0] + slide, cy = LENS_C[1];
	const r = rng(5);
	const dots = Array.from({length: 46}, (_, i) => ({a: r() * 6.283, d: Math.sqrt(r()) * LR * 0.86, c: i % 3 === 0 ? FE : i % 3 === 1 ? SCN : RED, ph: r() * 6.28}));
	return (
		<g opacity={o}>
			<image href={staticFile(MAGNIFIER.src)} x={cx - 815 * k} y={cy - 737 * k} width={MAGNIFIER.nat[0] * k} height={MAGNIFIER.nat[1] * k} />
			<clipPath id="p02-lens"><circle cx={cx} cy={cy} r={LR * 0.95} /></clipPath>
			<g clipPath="url(#p02-lens)">
				{dots.map((d, i) => <circle key={i} cx={cx + d.d * Math.cos(d.a + f * 0.01) + Math.sin(f * 0.21 + d.ph) * 4} cy={cy + d.d * Math.sin(d.a + f * 0.01) + Math.cos(f * 0.19 + d.ph) * 4} r={8} fill={d.c} stroke={INK} strokeWidth={1.6} opacity={0.85} />)}
			</g>
			<g opacity={prog(f, crossAt, 8)}>
				<DrawPath d={`M${cx - 70},${cy - 70} L${cx + 70},${cy + 70}`} at={crossAt} dur={8} color="#c4432f" width={9} />
				<DrawPath d={`M${cx + 70},${cy - 70} L${cx - 70},${cy + 70}`} at={crossAt + 6} dur={8} color="#c4432f" width={9} />
				<Sx x={cx + LR + 30} y={cy - 40} text="far too many" size={44} color="#c4432f" hand at={crossAt + 8} />
				<Sx x={cx + LR + 30} y={cy + 6} text="to count" size={44} color="#c4432f" hand at={crossAt + 12} />
			</g>
		</g>
	);
};
/** A meter dial whose needle wakes up with a "?" readout: a colour turned into a number. */
const Dial: React.FC<{cx: number; cy: number; r: number; at: number}> = ({cx, cy, r, at}) => {
	const f = useCurrentFrame();
	const sw = prog(f, at, 30);
	const ang = (-150 + 120 * sw + 10 * Math.sin(f * 0.12) * sw) * (Math.PI / 180);
	return (
		<Fade at={at}>
			<rect x={cx - r - 30} y={cy - r - 30} width={2 * r + 60} height={r + 150} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
			<path d={`M${cx - r},${cy} A${r},${r} 0 0 1 ${cx + r},${cy}`} fill="none" stroke={INK} strokeWidth={5} />
			{Array.from({length: 7}, (_, i) => { const a = Math.PI + (i / 6) * Math.PI; return <path key={i} d={`M${cx + (r - 6) * Math.cos(a)},${cy + (r - 6) * Math.sin(a)} L${cx + (r - 22) * Math.cos(a)},${cy + (r - 22) * Math.sin(a)}`} stroke={INK_SOFT} strokeWidth={3} />; })}
			<path d={`M${cx},${cy} L${cx + (r - 18) * Math.cos(ang)},${cy + (r - 18) * Math.sin(ang)}`} stroke={RED} strokeWidth={6} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={9} fill={INK} />
			<rect x={cx - 80} y={cy + 24} width={160} height={66} rx={10} fill="#2b3138" />
			<Sx x={cx} y={cy + 72} text="?" size={46} color="#9be3b8" anchor="middle" at={at + 10} />
		</Fade>
	);
};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const deep = kf(f, [[K1.red, 0], [K1.red + 70, 1]]);
	const EQX = 520, EQY = 620, EQS = 54;
	const eqEnd = EQX + eqWidth(IRON_EQ, EQS);
	return (
		<>
			<Heading text="Where do K values come from?" at={4} size={62} />
			{/* the painted C3 tube; it deepens on "red" */}
			<div style={{opacity: prog(f, K1.count - 30, 16)}}><IronTube x={TUBE.x} y={TUBE.y} h={TUBE.h} t={deep} /></div>
			<Overlay>
				{/* the last video's values: given, not measured */}
				<Fade at={8}>
					<rect x={1240} y={190} width={580} height={210} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
					<Sx x={1266} y={240} text="last video" size={34} color={INK_SOFT} hand at={8} />
					<Sx x={1266} y={300} text="at 25 C:  K = 0.0061" size={38} weight={600} at={K1.changed} />
					<Sx x={1266} y={356} text="at 100 C:  K = 0.49" size={38} weight={600} at={K1.changed + 14} />
				</Fade>
				<Chip x={1640} y={262} w={150} h={56} text="given" size={36} color={AMBER_INK} at={K1.given} />
				<Fade at={K1.where + 20}>
					<Sx x={1530} y={466} text="where do these come from?" size={40} color={AMBER_INK} anchor="middle" hand at={K1.where + 20} />
				</Fade>
				<Magnifier inAt={K1.count} outAt={K1.here} crossAt={K1.tube + 4} />
				<Sx x={LENS_C[0]} y={TUBE.y + TUBE.h + 50} text="iron thiocyanate" size={38} anchor="middle" hand at={K1.again} />
				{/* the equation, piece by piece */}
				<EqStrip items={eqAt(K1.iron, K1.thio, K1.make)} x={EQX} y={EQY} size={EQS} />
				<Sx x={EQX} y={EQY + 50} text="pale yellow" size={30} color={FE_INK} hand at={K1.iron + 10} />
				<Sx x={EQX + 300} y={EQY + 50} text="nearly colourless" size={30} color={SCN_INK} hand at={K1.thio + 10} />
				<Sx x={eqEnd - 4} y={EQY + 50} text="deep red" size={34} color={RED_INK} anchor="end" hand at={K1.red} />
				{/* more red ion, deeper colour */}
				<Arrow x1={EQX + 120} y1={790} x2={TUBE.x + ironW(TUBE.h) + 20} y2={740} at={K1.more} color={AMBER_INK} width={5} />
				<Sx x={EQX + 140} y={800} text="more red ion, deeper colour" size={44} color={AMBER_INK} hand at={K1.more + 10} />
				{/* colour to a number */}
				<Dial cx={1700} cy={700} r={96} at={K1.num} />
				<Sx x={1700} y={950} text="colour → a number" size={38} color={INK} anchor="middle" hand at={K1.num + 16} />
				<Chip x={eqEnd - 200} y={EQY + 74} w={200} h={64} text="K = ?" size={44} color={TEAL} at={K1.realK} />
				<Sx x={EQX} y={980} text="How does a colour reading give you K?" size={56} color={AMBER_INK} hand at={K1.how} />
				<Ring cx={1530} cy={300} rx={300} ry={100} at={K1.where + 14} out={K1.count} color={AMBER} seed={4} />
				{void K1.measure}
			</Overlay>
		</>
	);
};

// ---------- 2. The colourimeter: what it measures ----------
const C = 'colourimeter';
const K2 = cues(sc(C), {col: 'is a colourimeter', lamp: 'A lamp shines', cuv: 'called a cuvette', det: 'onto a detector', looks: 'looks red because', blue: ['blue light', 1], lets: 'lets the red through', set: 'so we set', nm: 'four hundred and forty-seven', more: 'The more red ions', less: 'the less reaches', abs: 'as absorbance', zero: 'zero means no light', first: 'First we put in', blank: 'the blank', setz: 'set it to zero', glass: 'the glass'});
const CUT = {x: 640, y: 250, w: 1200};
const CP = {x: 70, y: 270, h: 460};
export const SceneColourimeter: React.FC = () => {
	const f = useCurrentFrame();
	const g = cutGeom(CUT.x, CUT.y, CUT.w);
	const CH = 210, cuvX = g.slotX - cuvW(CH) / 2, cuvY = g.beamY - 0.55 * CH;
	const drop = (1 - prog(f, K2.cuv, 24)) * -240;
	const deep = prog(f, K2.more, 70);
	const dots = 5 + Math.round(11 * deep);
	const isBlank = f >= K2.blank;
	const swap = prog(f, K2.blank, 16);
	const pass = isBlank ? 0.35 + 0.65 * swap : 1 - 0.65 * deep;
	const readout = f < K2.abs ? 'A = ?' : f < K2.blank ? countText(f, K2.abs, K2.abs + 40, 0, 0.751) : f < K2.setz ? 'A = 0.751' : 'A = 0.000';
	const [lx, ly] = colPoint(CP.x, CP.y, CP.h, 1200, 620);
	return (
		<>
			<Heading text="What a colourimeter measures" at={4} size={62} />
			<Overlay>
				<Fade at={2}><ColourimeterPic x={CP.x} y={CP.y} h={CP.h} sample={isBlank && swap > 0.5 ? WATER : SAMPLE[2]} /></Fade>
				<Sx x={CP.x + 250} y={CP.y - 6} text="colourimeter" size={46} color={AMBER_INK} hand at={K2.col} />
				<Arrow x1={CP.x + 330} y1={CP.y + 10} x2={lx - 10} y2={ly - 70} at={K2.col + 6} color={AMBER_INK} width={4} />
				<Cutaway x={CUT.x} y={CUT.y} w={CUT.w} at={K2.lamp} beamAt={K2.lamp + 6} blueAt={K2.blue} pass={pass} readout={readout} readoutAt={K2.lamp + 20}>
					<g transform={`translate(0,${drop})`} opacity={prog(f, K2.cuv, 8)}>
						<Cuvette kind={1} x={cuvX} y={cuvY} h={CH} o={1 - deep} dots={isBlank ? 0 : dots} />
						<Cuvette kind={4} x={cuvX} y={cuvY} h={CH} o={deep * (1 - swap)} dots={isBlank ? 0 : dots} seed={3} />
						<Cuvette kind="blank" x={cuvX} y={cuvY} h={CH} o={swap} />
					</g>
				</Cutaway>
				<Sx x={g.filterX + 5} y={g.beamY + 82} text="447 nm" size={32} color={BEAM} anchor="middle" hand at={K2.nm} />
				<Sx x={g.slotX} y={600} text="cuvette: holds the sample in the beam" size={36} anchor="middle" hand at={K2.cuv + 20} out={K2.abs - 10} />
				{/* the red ion absorbs blue and lets red through */}
				<ColourWheel cx={770} cy={760} r={70} at={K2.looks} labelsAt={K2.blue} />
				<Sx x={880} y={770} text="absorbs blue, so it looks red" size={38} color={INK} hand at={K2.lets} />
				{/* more red ions: less light reaches the detector */}
				<Sx x={880} y={850} text="more red ions: less light gets through" size={38} color={BEAM} hand at={K2.less} />
				<Sx x={1840} y={660} text="absorbance: how much light is soaked up" size={36} color={INK} anchor="end" hand at={K2.abs + 6} />
				<Sx x={1840} y={706} text="zero means none absorbed" size={34} color={INK_SOFT} anchor="end" hand at={K2.zero} />
				<Tick x={g.readX + 236} y={g.beamY - 60} at={K2.setz + 10} s={36} />
				<Sx x={1840} y={790} text="blank: water, set to zero" size={40} color={TEAL} anchor="end" hand at={K2.setz} />
				<Sx x={1840} y={836} text="so the water and glass don't count" size={34} color={INK_SOFT} anchor="end" hand at={K2.glass} />
			</Overlay>
		</>
	);
};

// ---------- 3. Absorbance and concentration: A = εlc ----------
const A3 = 'absorbance';
const K3 = cues(sc(A3), {useful: 'Here is the useful part', same: 'stay the same', dbl: 'doubling the number', dbls: 'doubles the absorbance', write: 'Chemists write', eq: 'A equals epsilon', a: 'A is the absorbance', c: 'c is the concentration', l: 'l is the width', e: 'and epsilon is', withSame: 'With the same cuvette', fixed: 'stay fixed', step: 'in step'});
/** One beam row: lamp, beam, cuvette with n red dots, thinner beam after, readout. */
const BeamRow: React.FC<{y: number; kind: number; dots: number; pass: number; at: number; readout: string; readAt: number; label: string; labelDy?: number}> = ({y, kind, dots, pass, at, readout, readAt, label, labelDy = 140}) => {
	const CH = 200, cx = 420, cuvX = cx - cuvW(CH) / 2, cuvY = y - 0.55 * CH;
	return (
		<Fade at={at}>
			<rect x={150} y={y - 22} width={cuvX - 150} height={44} fill={BEAM} opacity={0.75} />
			<rect x={cuvX + cuvW(CH)} y={y - 22 * pass} width={780 - cuvX - cuvW(CH)} height={44 * pass} fill={BEAM} opacity={0.75} />
			<circle cx={130} cy={y} r={30} fill="#fff1b8" stroke={INK} strokeWidth={4} />
			<Cuvette kind={kind} x={cuvX} y={cuvY} h={CH} dots={dots} seed={kind + 2} />
			<rect x={790} y={y - 40} width={190} height={80} rx={12} fill="#2b3138" />
			<Sx x={885} y={y + 14} text={readout} size={38} color="#9be3b8" anchor="middle" at={readAt} />
			<Sx x={cx} y={y + labelDy} text={label} size={32} color={INK_SOFT} anchor="middle" hand at={at + 6} />
		</Fade>
	);
};
const GLYPHS = [{t: 'A', x: 1160}, {t: '=', x: 1250}, {t: 'ε', x: 1350, display: true}, {t: 'l', x: 1440}, {t: 'c', x: 1490}];
export const SceneAbsorbance: React.FC = () => {
	const f = useCurrentFrame();
	const d2 = 8 + Math.round(8 * prog(f, K3.dbl + 20, 50));
	const lit = (at: number, out: number) => prog(f, at, 8) * (1 - prog(f, out, 12));
	const glyphLit = [lit(K3.a, K3.c), 0, lit(K3.e, K3.withSame), lit(K3.l, K3.e), lit(K3.c, K3.l)];
	const tags = [
		{t: 'A: absorbance', at: K3.a, c: INK},
		{t: 'c: concentration (mol/L)', at: K3.c, c: INK},
		{t: 'l: cuvette width (the light path)', at: K3.l, c: INK},
		{t: 'ε: how strongly this ion absorbs this light', at: K3.e, c: INK},
	];
	const lock = (x: number, y: number, at: number) => (
		<Fade at={at}>
			<rect x={x - 18} y={y - 6} width={36} height={28} rx={5} fill={TEAL} />
			<path d={`M${x - 11},${y - 6} L${x - 11},${y - 16} A11,11 0 0 1 ${x + 11},${y - 16} L${x + 11},${y - 6}`} fill="none" stroke={TEAL} strokeWidth={5} />
		</Fade>
	);
	return (
		<>
			<Heading text="Absorbance rises in step with concentration" at={4} size={58} />
			<Overlay>
				<Sx x={130} y={250} text="same cuvette, same light" size={40} color={TEAL} hand at={K3.same} />
				<BeamRow y={370} kind={1} dots={8} pass={0.62} at={K3.useful + 10} readout="0.20" readAt={K3.dbls} label="8 red ions in the path" />
				<BeamRow y={640} kind={3} dots={d2} pass={0.38} at={K3.dbl} readout="0.40" readAt={K3.dbls + 14} label="twice as many: 16" labelDy={175} />
				<Sx x={885} y={790} text="pattern, not data" size={30} color={INK_SOFT} anchor="middle" hand at={K3.dbls + 30} />
				{/* l: a pen bracket across the second cuvette */}
				<Fade at={K3.l}>
					<DrawPath d={`M${420 - cuvW(200) / 2},${736} L${420 - cuvW(200) / 2},${750} L${420 + cuvW(200) / 2},${750} L${420 + cuvW(200) / 2},${736}`} at={K3.l} dur={14} color={AMBER_INK} width={5} />
					<Sx x={420 + cuvW(200) / 2 + 22} y={762} text="l" size={48} color={AMBER_INK} anchor="middle" hand at={K3.l + 8} />
				</Fade>
				{/* the relationship, large, each symbol lit on its name */}
				{GLYPHS.map((g, i) => (
					<g key={i}>
						{glyphLit[i] > 0.01 ? <rect x={g.x - 14} y={300} width={g.t === 'l' ? 40 : 76} height={140} rx={16} fill="#f6d77a" opacity={0.5 * glyphLit[i]} /> : null}
						<text x={g.x} y={410} fill={INK} opacity={prog(f, K3.eq + i * 6, 10)} style={{fontFamily: g.display ? FONT_DISPLAY : FONT_HAND, fontWeight: g.display ? 600 : 700, fontSize: g.display ? 104 : 136, fontStyle: g.display ? 'italic' : undefined}}>{g.t}</text>
					</g>
				))}
				{lock(1385, 270, K3.fixed)}
				{lock(1455, 270, K3.fixed + 6)}
				{tags.map((t, i) => <Sx key={i} x={1120} y={520 + i * 58} text={t.t} size={42} color={t.c} hand at={t.at} />)}
				<Sx x={1120} y={800} text="same cuvette and light: ε and l fixed" size={40} color={TEAL} hand at={K3.fixed} />
				<Sx x={1120} y={890} text="A ∝ c" size={78} color={TEAL} hand at={K3.step} />
				<Sx x={1340} y={882} text="(A rises in step with c)" size={36} color={TEAL} hand at={K3.step + 10} />
				<Sx x={1120} y={950} text="absorbance doubles; the light let through does not simply halve" size={30} color={INK_SOFT} hand at={K3.step + 24} />
			</Overlay>
		</>
	);
};
void AMBER; void RED; void TEAL;
