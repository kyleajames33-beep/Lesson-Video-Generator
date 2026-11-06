// Y11 Chem M2 V06 scenes 6 to 11: the bicycle recipe (painted frame and wheels), the two different twos, scaling with
// a mole ratio (g01 layout: task strip, givens card, the row built term by term, framed answer, crossed slip), and the
// continuous-variation investigation: the hero foam cup and run sheet, the live mixing slider, and the peak, where the
// slider sweep drops each mixture's point onto the graph and the leftover readout explains the peak.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {CUP, CUP_PROBE, FRAME, GLASSES, WHEEL, sc} from './common';
import {
	AL_FILL, AMB, AMB_INK, Atom, CAxes, CL_FILL, CPts, CSeg, Chip, Di, Fade, Framed, GREEN, GREY, GREY_INK, Heading, INK, INK_SOFT, MixCup, NAVY, PenArrow, PenRing, Plate,
	RED, Readout, Rich, Slider, StrikeLine, Sx, TEAL, TEAL_INK, TERRA, TickMark, VIOLET, Water, Write, clamp01, gx, gy, kf, lerp, plateMap, prog, smooth, tw, vis, vx,
} from './parts';
import type {CG, Seg} from './parts';

const SVG: React.FC<{children: React.ReactNode}> = ({children}) => <svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>{children}</svg>;
const EQ_SEGS = (size: number): Seg[] => [{t: '2', c: TEAL}, {t: 'H_2'}, {t: ' + '}, {t: 'O_2'}, {t: ' → '}, {t: '2', c: TEAL}, {t: 'H_2O'}].map(s => ({...s, w: 800})) as Seg[];
void EQ_SEGS;

// ---------- the bike parts (frame and two wheels; true relative scale, no rider) ----------
const WH = 400, FH = 380;
const BikeParts: React.FC<{x: number; y: number; at?: number}> = ({x, y, at = -1000}) => {
	const ww = (WHEEL.box[2] / WHEEL.box[3]) * WH;
	return (
		<g>
			<Plate p={WHEEL} x={x} y={y} h={WH} at={at} dy={-40} />
			<Plate p={WHEEL} x={x + ww + 30} y={y} h={WH} at={at + 6} dy={-40} />
			<Plate p={FRAME} x={x + 2 * ww + 110} y={y + 14} h={FH} at={at + 12} dy={-40} />
		</g>
	);
};
const BIKE_X = 130, BIKE_Y = 330;
const wW = (WHEEL.box[2] / WHEEL.box[3]) * WH, fW = (FRAME.box[2] / FRAME.box[3]) * FH;
const FX0 = BIKE_X + 2 * wW + 110;

// ---------- 6. Bike analogy ----------
const K6 = cues(sc('bike-analogy'), {helps: "Here's a picture", build: 'build a bike', wheels: 'two wheels', count: 'count ratio', kg: 'two kilograms', recipe: 'The recipe counts', masses: 'masses depend', weighs: 'each part weighs', eq: 'A chemical equation', count2: ['count', 2]});
export const SceneBike: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<SVG>
			<Heading text="A recipe that counts parts" at={4} />
			<BikeParts x={BIKE_X} y={BIKE_Y} at={0} />
			<Write x={960} y={280} text="2 wheels : 1 frame (count)" at={K6.wheels} size={54} color={TEAL_INK} anchor="middle" />
			<PenRing cx={BIKE_X + wW + 15} cy={BIKE_Y + WH / 2} rx={wW + 40} ry={WH / 2 + 26} at={K6.count} color={TEAL} seed={6} />
			<Write x={BIKE_X + wW + 15} y={812} text="light" at={K6.masses} size={48} color={AMB_INK} anchor="middle" />
			<Write x={FX0 + fW / 2} y={812} text="heavier" at={K6.masses + 14} size={48} color={AMB_INK} anchor="middle" />
			<Chip x={960} y={850} segs={[{t: '2 kg wheels : 1 kg frame?'}]} at={K6.kg} color={INK} size={44} anchor="middle" hand strike={K6.kg + 60} />
			<Fade at={K6.eq}>
				<Rich x={1824} y={150} segs={[{t: '2', c: TEAL}, {t: 'H_2'}, {t: ' + '}, {t: 'O_2'}, {t: ' → '}, {t: '2', c: TEAL}, {t: 'H_2O'}]} size={56} anchor="end" weight={800} />
			</Fade>
			<Write x={1824 - 330} y={218} text="2 : 1, count the parts" at={K6.eq + 14} size={44} color={TEAL_INK} anchor="middle" />
			{void f}{void K6.helps}{void K6.build}{void K6.recipe}{void K6.weighs}{void K6.count2}
		</SVG>
	);
};

// ---------- 7. Two different twos ----------
const K7 = cues(sc('two-twos'), {trap: 'One trap', twos: 'two different twos', big: 'big two', coef: 'the coefficient', small: 'small two', sub: 'the subscript', only: 'Mole ratios come only', coefs: ['coefficients', 1], bal: 'And when balancing', never: 'never subscripts', changing: 'changing a subscript', substance: 'substance'});
export const SceneTwoTwos: React.FC = () => {
	const f = useCurrentFrame();
	const S = 150, X = 560, Y = 560;
	const w2 = tw('2', S), wH = tw('H', S), ws = tw('_2', S);
	const cX = X + w2 / 2, sX = X + w2 + wH + ws / 2;
	const glow = 1 + 0.08 * Math.sin(clamp01((f - K7.coefs) / 20) * Math.PI);
	return (
		<SVG>
			<Heading text="Two different twos" at={4} />
			{/* the bike recipe, small, top right */}
			<g transform="translate(1340,186) scale(0.26)">
				<BikeParts x={0} y={0} />
			</g>
			<Sx x={1820} y={322} text="2 : 1" size={36} color={TEAL_INK} anchor="end" hand at={-1000} />
			<Chip x={1390} y={350} segs={[{t: 'mole ratio 2 : 1 : 2'}]} at={-1000} color={TEAL_INK} size={38} />
			<Rich x={X} y={Y} segs={[{t: '2', c: TEAL}, {t: 'H'}, {t: '_2', c: GREY_INK}, {t: 'O'}]} size={S} weight={800} />
			<PenRing cx={cX} cy={Y - S * 0.34} rx={58} ry={78} at={K7.big} color={TEAL} seed={2} width={6} />
			<g transform={`translate(${300},${700}) scale(${f >= K7.coefs ? glow : 1}) translate(-300,-700)`}>
				<Write x={240} y={720} text="coefficient: counts particles (here, molecules)" at={K7.big + 10} size={44} color={TEAL_INK} />
			</g>
			<PenArrow a={[400, 680]} b={[cX - 10, Y + 20]} at={K7.big + 16} color={TEAL} bend={-0.15} />
			<PenRing cx={sX} cy={Y + S * 0.12} rx={36} ry={46} at={K7.small} color={GREY} seed={8} width={6} />
			<Write x={1000} y={520} text="subscript: atoms in one molecule" at={K7.small + 10} size={44} color={GREY_INK} />
			<PenArrow a={[990, 530]} b={[sX + 34, Y + 10]} at={K7.small + 16} color={GREY} bend={0.15} />
			<PenArrow a={[cX + 20, Y - S * 0.85]} b={[1390, 384]} at={K7.coefs} color={TEAL} bend={-0.18} width={5} />
			<Fade at={K7.never}>
				<Rich x={240} y={880} segs={[{t: 'H_2O → H_2O'}, {t: '_2', c: AMB_INK}, {t: '?'}]} size={68} weight={800} />
			</Fade>
			<StrikeLine x1={230} y1={850} x2={720} y2={846} at={K7.changing + 10} width={8} />
			<Write x={760} y={862} text="hydrogen peroxide: a different substance" at={K7.changing} size={44} color={INK} />
			<Write x={1060} y={660} text="never change this one" at={K7.never + 16} size={48} color={RED} />
			<PenArrow a={[1050, 640]} b={[sX + 40, Y + 40]} at={K7.never + 22} color={RED} bend={-0.2} />
			{void K7.trap}{void K7.twos}{void K7.coef}{void K7.sub}{void K7.only}{void K7.bal}{void K7.substance}
		</SVG>
	);
};

// ---------- 8. Using a mole ratio (g01 layout) ----------
const K8 = cues(sc('scaling'), {using: 'Using a ratio', in: 'In two A l', alcl: 'aluminium and chlorine', three: 'two to three', so: 'So zero point four', needs: 'needs zero', times: 'times three', over: 'over two', which: 'which is zero', cl: ['chlorine', 2], wanted: 'Wanted equals', given: 'given coefficient', flip: 'Flip the fraction', get: 'get zero point two', upside: 'upside down'});
const EQ8: Seg[] = [{t: '2', c: TEAL}, {t: 'Al + '}, {t: '3', c: TEAL}, {t: 'Cl_2 → '}, {t: '2', c: TEAL}, {t: 'AlCl_3'}];
export const SceneScaling: React.FC = () => {
	const f = useCurrentFrame();
	const E = 80, EX = 96, EY = 360;
	const R = 60, RY = 740;
	const parts: [string, string, number][] = [['n(Cl_2) = ', INK, K8.so], ['0.40', NAVY, K8.so + 20], [' × ', INK, K8.times], ['3', TEAL_INK, K8.times + 8], [' ÷ ', INK, K8.over], ['2', TEAL_INK, K8.over + 6]];
	let cx = 96;
	const xs = parts.map(p => { const x = cx; cx += tw(p[0], R); return x; });
	const SX = 120, SY = 600, SS = 52;
	const lead = tw('ratio  ', SS, false, 700);
	const s2 = SX + lead + tw('2', SS) / 2, s3 = SX + lead + tw('2 Al : ', SS) + tw('3', SS) / 2;
	return (
		<SVG>
			<Heading text="Using a mole ratio" at={0} />
			<Sx x={96} y={250} text="How many moles of Cl_2 react with 0.40 mol of Al?" size={44} color={INK} weight={700} at={-1000} />
			<Rich x={EX} y={EY} segs={EQ8} size={E} weight={800} />
			{/* givens card and ratio strip, from the first frame */}
			<rect x={96} y={418} width={470} height={90} rx={16} fill="#eef2fa" stroke={NAVY} strokeWidth={4} />
			<Sx x={122} y={479} text="n(Al) = 0.40 mol" size={48} color={NAVY} weight={800} at={-1000} />
			<Sx x={582} y={479} text="given" size={34} color={NAVY} hand at={-1000} />
			<rect x={96} y={540} width={640} height={86} rx={16} fill="#eef7f6" stroke={TEAL} strokeWidth={4} />
			<Rich x={SX} y={SY} segs={[{t: 'ratio  ', c: INK, w: 700}, {t: '2 Al : 3 Cl_2', c: TEAL_INK}]} size={SS} weight={800} />
			<PenRing cx={s2} cy={SY - SS * 0.34} rx={28} ry={40} at={K8.three} color={TEAL} seed={3} />
			<PenRing cx={s3} cy={SY - SS * 0.34} rx={28} ry={40} at={K8.three + 6} color={TEAL} seed={5} />
			<Rich x={96} y={674} segs={[{t: 'n(wanted) = n(given) × '}, {t: 'coeff(wanted) ÷ coeff(given)', c: TEAL_INK}]} size={36} at={K8.wanted} />
			{/* working row, term by term */}
			<Rich x={96} y={RY} segs={parts.map(p => ({t: p[0], c: p[1], at: p[2]}))} size={R} weight={800} at={K8.so} />
			<Write x={xs[3] - 10} y={RY + 54} text="wanted ÷ given" at={K8.cl} size={40} color={TEAL_INK} />
			{/* the answer frame: empty until its cue, then 0.60 mol framed green */}
			<g opacity={1 - prog(f, K8.which, 10)}>
				<rect x={96} y={830} width={470} height={80} rx={12} fill="#fffdf8" stroke={INK} strokeWidth={4} strokeDasharray="12 9" />
				<Rich x={122} y={886} segs={[{t: 'n(Cl_2) = ? mol', c: INK}]} size={50} />
			</g>
			<Framed x={96} y={886} segs={[{t: 'n(Cl_2) = 0.60 mol', c: INK}]} at={K8.which} size={50} stroke={GREEN} />
			<Chip x={640} y={832} segs={[{t: '0.40 × 2 ÷ 3 = 0.27 mol'}]} at={K8.flip} color={RED} size={36} strike={K8.get + 30} />
			<Write x={650} y={940} text="ratio upside down" at={K8.get + 44} size={44} color={RED} />
			{/* particle picture: 2 Al atoms to 3 Cl2 molecules, large */}
			<rect x={1150} y={280} width={670} height={640} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
			<Sx x={1176} y={326} text="particles that react together" size={34} color={INK} hand at={-1000} />
			{[0, 1].map(i => <Atom key={'a' + i} x={1320} y={440 + i * 180} r={72} fill={AL_FILL} />)}
			{[0, 1, 2].map(i => <Di key={'c' + i} x={1650} y={410 + i * 130} r={54} fill={CL_FILL} />)}
			<Sx x={1320} y={790} text="2 Al" size={56} color={INK} anchor="middle" weight={800} at={-1000} />
			<Rich x={1650} y={790} segs={[{t: '3 Cl_2'}]} size={56} anchor="middle" weight={800} />
			<Rich x={1485} y={856} segs={[{t: '2 : 3 = ', c: TEAL_INK}, {t: '0.40 : 0.60', c: NAVY}]} size={46} anchor="middle" weight={800} at={K8.which + 20} />
			<Write x={1485} y={904} text="same ratio, scaled" at={K8.which + 30} size={40} color={TEAL_INK} anchor="middle" />
			{void K8.using}{void K8.in}{void K8.alcl}{void K8.needs}{void K8.given}{void K8.upside}
		</SVG>
	);
};

// ---------- continuous variation: shared stage pieces ----------
const RUN = [5, 10, 15, 20, 25, 30, 35];
const RunSheet: React.FC<{labels?: number[]; x?: number; y?: number; h?: number; sp?: number; at?: number}> = ({labels = [], x = 660, y = 205, h = 175, sp = 165, at = -1000}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{RUN.map((v, i) => {
				const o = prog(f, at + i * 4, 14);
				const lab = labels[i] ?? 1e9;
				return (
					<g key={v} opacity={o} transform={`translate(${(1 - o) * 60},0)`}>
						<MixCup x={x + i * sp} y={y} h={h} acid={v} fill={prog(f, lab, 10)} id={'run' + i} />
						<Rich x={x + i * sp + 45} y={y + h + 40} segs={[{t: `${v}`, c: NAVY}, {t: ' + ', c: INK}, {t: `${40 - v}`, c: VIOLET}]} size={32} anchor="middle" weight={800} at={lab} />
					</g>
				);
			})}
		</g>
	);
};
const DTReadout: React.FC<{x: number; y: number; text: string; at?: number; w?: number}> = ({x, y, text, at = -1000, w = 330}) => <Readout x={x} y={y} w={w} text={text} color={INK} frame={TERRA} at={at} size={52} />;
const probeOf = (x: number, y: number, h: number) => { const m = plateMap(CUP, x, y, h); return [m.X(CUP_PROBE[0]), m.Y(CUP_PROBE[1])] as [number, number]; };

// ---------- 9. Testing it: continuous variation ----------
const K9 = cues(sc('continuous-variation'), {how: 'But how', test: 'We can test it', cv: 'In the continuous variation', mix: 'mix two reactants', prop: 'changing proportions', same: 'always with the same', measure: 'measure something', happened: 'happened', hcl: 'For hydrochloric acid', temp: 'temperature rise', releases: 'the reaction releases', heat: 'heat'});
const CVC = {x0: 110, sp: 250, y: 285, h: 340};
export const SceneCV: React.FC = () => {
	const k = CVC.h / CUP.box[3];
	const cupW = CUP.box[2] * k;
	return (
		<SVG>
			<Heading text="Testing it: continuous variation" at={0} />
			<Rich x={96} y={240} segs={[{t: 'Do reactions really follow whole-number mole ratios?', c: TEAL_INK}]} size={50} hand weight={700} />
			<Sx x={1820} y={240} text="seven mixtures, same 40 mL total" size={34} color={INK} anchor="end" hand at={K9.same} />
			{/* the seven mixtures, large, with their acid and base already in */}
			{RUN.map((v, i) => (
				<g key={v}>
					<MixCup x={CVC.x0 + i * CVC.sp} y={CVC.y} h={CVC.h} acid={v} id={'cv' + i} />
					<Rich x={CVC.x0 + i * CVC.sp + cupW / 2} y={CVC.y + CVC.h + 46} segs={[{t: `${v}`, c: NAVY}, {t: ' + ', c: INK}, {t: `${40 - v}`, c: VIOLET}]} size={38} anchor="middle" weight={800} />
				</g>
			))}
			<Rich x={96} y={CVC.y + CVC.h + 90} segs={[{t: 'mL acid', c: NAVY}, {t: ' + ', c: INK}, {t: 'mL base', c: VIOLET}]} size={30} weight={700} />
			<rect x={96} y={736} width={1060} height={128} rx={20} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<Sx x={126} y={788} text="continuous variation:" size={42} color={INK} weight={800} at={-1000} />
			<Sx x={126} y={842} text="change the proportions, keep the total the same" size={38} color={INK} weight={700} at={-1000} />
			<DTReadout x={1220} y={740} text="ΔT = 0.0 °C" at={K9.happened} />
			<PenArrow a={[1322, 738]} b={[CVC.x0 + 5 * CVC.sp + 18, CVC.y + CVC.h * 0.62]} at={K9.happened + 4} color={TERRA} bend={0} width={4} />
			<Write x={1570} y={790} text="how much reacted" at={K9.happened + 8} size={42} color={INK} />
			<Rich x={96} y={930} segs={[{t: 'HCl', c: NAVY}, {t: ' + '}, {t: 'NaOH', c: VIOLET}, {t: ' → NaCl + H_2O'}]} size={52} weight={800} at={K9.hcl} />
			<Sx x={830} y={930} text="heat released" size={42} color={TERRA} hand at={K9.temp} />
			<Sx x={1060} y={930} text="(Stage 5)" size={30} color={GREY_INK} weight={600} at={K9.temp} />
			<PenArrow a={[1060, 896]} b={[1300, 862]} at={K9.releases} color={TERRA} bend={-0.15} />
		</SVG>
	);
};

// ---------- 10. Same concentration, fixed total ----------
const K10 = cues(sc('method'), {both: 'Both solutions', conc: 'concentration', every: 'every millilitre', ratio: 'a mole ratio', five: 'five millilitres', ten: 'then ten', so: 'and so on', forty: 'always forty', total: 'in total', keep: 'Keeping the total', only: 'the only thing', split: 'split', glasses: 'Safety glasses', strength: 'strength'});
const STOPS10 = [K10.five, K10.ten + 9, K10.so + 6, K10.so + 22, K10.forty + 16, K10.forty + 32, K10.total + 4];
const SL = {x0: 560, x1: 1700, y: 840};
export const SceneMethod: React.FC = () => {
	const f = useCurrentFrame();
	const keys: [number, number][] = [[K10.five - 12, 20], [STOPS10[0], 5]];
	STOPS10.slice(1).forEach((t, i) => keys.push([t - 8, RUN[i]], [t, RUN[i + 1]]));
	keys.push([K10.keep + 30, 35], [K10.split - 4, 5]);
	const v = kf(f, keys);
	const vr = Math.round(v);
	const SON = K10.ratio - 55;
	const sliderOn = vis(f, SON);
	return (
		<SVG>
			<Heading text="Same concentration, fixed total" at={0} />
			<MixCup x={130} y={300} h={620} acid={v} fill={sliderOn} id="hero10" />
			<RunSheet labels={STOPS10} />
			<rect x={520} y={460} width={400} height={74} rx={14} fill="#eef2fa" stroke={NAVY} strokeWidth={4} />
			<Rich x={720} y={512} segs={[{t: 'HCl 1.0 mol L^{−1}', c: NAVY}]} size={40} anchor="middle" weight={800} />
			<rect x={950} y={460} width={440} height={74} rx={14} fill="#f3eefa" stroke={VIOLET} strokeWidth={4} />
			<Rich x={1170} y={512} segs={[{t: 'NaOH 1.0 mol L^{−1}', c: VIOLET}]} size={40} anchor="middle" weight={800} />
			<Chip x={520} y={556} segs={[{t: 'same concentration: same moles in every mL'}]} at={K10.every} color={INK} size={36} />
			<Rich x={520} y={690} segs={[{t: 'volume ratio', c: NAVY}, {t: ' = ', c: INK}, {t: 'mole ratio', c: VIOLET}]} size={48} hand at={K10.ratio} />
			<Fade at={SON}>
				<Sx x={560} y={790} text={`acid ${vr} mL`} size={52} color={NAVY} weight={800} at={-1000} />
				<Sx x={1130} y={790} text="total 40 mL" size={52} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={1700} y={790} text={`base ${40 - vr} mL`} size={52} color={VIOLET} anchor="end" weight={800} at={-1000} />
			</Fade>
			<Slider x0={SL.x0} x1={SL.x1} y={SL.y} v={v} at={SON} />
			<PenRing cx={1130} cy={772} rx={170} ry={50} at={K10.only} color={INK} seed={4} />
			<Write x={1130} y={700} text="only the split changes" at={K10.only + 8} size={46} color={INK} anchor="start" />
			<Plate p={GLASSES} x={1410} y={400} h={200} at={K10.glasses} dy={-30} />
			<Write x={1820} y={640} text="glasses; teacher-approved solutions" at={K10.glasses + 10} size={36} color={INK} anchor="end" />
			{void K10.both}{void K10.conc}{void K10.strength}
		</SVG>
	);
};

// ---------- 11. The peak marks the ratio ----------
const K11 = cues(sc('peak'), {climbs: 'climbs', peaks: 'peaks at twenty', again: 'again', why: 'Why a peak', little: 'too little acid', left: 'base is left over', much: 'too much acid', other: 'other way round', only: 'Only at the right', used: 'everything used up', most: 'most heat', draw: 'Draw a straight line', cross: 'where they cross', tt: 'twenty to twenty', one: 'one to one', crossing: 'That crossing', highest: 'single highest point', because: 'because the true', mixtures: 'mixtures'});
const DT = [1.7, 3.3, 5.0, 6.6, 5.0, 3.4, 1.6];
const G11: CG = {x: 820, y: 270, w: 920, h: 500, x0: 0, x1: 40, y0: 0, y1: 8};
const SW0 = K11.climbs, SWS = 15;
export const ScenePeak: React.FC = () => {
	const f = useCurrentFrame();
	const stopT = RUN.map((_, i) => SW0 + i * SWS);
	const keys: [number, number][] = [[SW0 - 30, 5]];
	stopT.forEach((t, i) => { if (i) keys.push([t - 9, RUN[i - 1]], [t, RUN[i]]); });
	keys.push([K11.little - 10, 35], [K11.little, 5], [K11.much - 10, 5], [K11.much, 30], [K11.used - 6, 30], [K11.used + 8, 20]);
	const v = kf(f, keys);
	const cur = RUN.reduce((a, r, i) => (f >= stopT[i] && f < K11.little ? i : a), -1);
	const atStop = (vv: number) => RUN.indexOf(Math.round(vv)) >= 0 && Math.abs(vv - Math.round(vv)) < 0.05 ? RUN.indexOf(Math.round(vv)) : -1;
	const si = f < K11.little ? cur : atStop(v);
	const dt = si >= 0 ? DT[si].toFixed(1) : '…';
	const vr = Math.round(v);
	const lo = f >= K11.used + 8 ? 2 : f >= K11.much ? 1 : f >= K11.little ? 0 : -1;
	const LO: [string, string][] = [['base left over: 30 mL', VIOLET], ['acid left over: 20 mL', NAVY], ['left over: nothing', GREEN]];
	const CUPX = 110, CUPY = 230, CUPH = 380;
	const [px, py] = probeOf(CUPX, CUPY, CUPH);
	const rx = 330, ry = py - 10;
	const crossX = gx(G11, 20), crossY = gy(G11, 6.6);
	const gp = (t: number) => clamp01((t - 3) / 3);
	return (
		<SVG>
			<Heading text="The peak marks the ratio" at={0} />
			<Rich x={1824} y={150} segs={[{t: 'HCl', c: NAVY}, {t: ' + '}, {t: 'NaOH', c: VIOLET}, {t: ' → NaCl + H_2O'}]} size={42} anchor="end" weight={800} />
			<MixCup x={CUPX} y={CUPY} h={CUPH} acid={v} id="hero11" />
			<Readout x={rx} y={ry} w={330} text={`ΔT = ${dt}${si >= 0 ? ' °C' : ''}`} color={INK} frame={TERRA} size={52} />
			<Sx x={rx} y={ry + 150} text={`acid ${vr} mL`} size={52} color={NAVY} weight={800} at={-1000} />
			<Sx x={rx} y={ry + 220} text={`base ${40 - vr} mL`} size={52} color={VIOLET} weight={800} at={-1000} />
			<Sx x={rx} y={ry + 275} text="total 40 mL" size={36} color={INK} weight={700} at={-1000} />
			<Slider x0={130} x1={600} y={690} v={v} />
			{lo >= 0 ? (
				<g>
					<rect x={100} y={790} width={580} height={74} rx={14} fill="#fffdf8" stroke={LO[lo][1]} strokeWidth={4} />
					<Sx x={124} y={842} text={LO[lo][0]} size={44} color={LO[lo][1]} weight={800} at={-1000} />
					{lo === 2 ? <TickMark x={600} y={826} at={K11.used + 10} s={1.3} /> : null}
				</g>
			) : null}
			<CAxes g={G11} at={-1000} xLabel="volume of HCl (mL), total 40 mL" yLabel="ΔT (°C)" xTicks={[0, 5, 10, 15, 20, 25, 30, 35, 40]} yTicks={[0, 2, 4, 6, 8]} grid={{dx: 5, dy: 1}} size={30} />
			<Sx x={G11.x + G11.w - 10} y={G11.y + G11.h - 14} text="illustrative data" size={26} color={GREY_INK} anchor="end" weight={600} at={-1000} />
			<Write x={gx(G11, 9)} y={gy(G11, 7.3)} text="most heat" at={K11.most} size={46} color={INK} />
			<PenArrow a={[gx(G11, 9) + 180, gy(G11, 7.3) - 12]} b={[gx(G11, 19.2), gy(G11, 6.85)]} at={K11.most + 8} color={INK} bend={-0.25} />
			{/* points drop from the readout onto the graph */}
			{RUN.map((x, i) => {
				const t = stopT[i];
				const u = clamp01((f - t - 2) / 12);
				if (f < t + 2 || u >= 1) return null;
				const e = smooth(u);
				return <circle key={'d' + i} cx={lerp(rx + 165, gx(G11, x), e)} cy={lerp(ry + 40, gy(G11, DT[i]), e)} r={12} fill={INK} opacity={0.9} />;
			})}
			<CPts g={G11} pts={RUN.map((x, i) => ({x, y: DT[i], at: stopT[i] + 14, color: INK}))} r={12} />
			<PenRing cx={crossX} cy={crossY} rx={30} ry={30} at={K11.again} color={INK} seed={2} />
			<CSeg g={G11} a={[3, 0.99]} b={[22.5, 7.43]} at={K11.draw} color={GREY} width={5} />
			<CSeg g={G11} a={[37, 0.99]} b={[17.5, 7.43]} at={K11.draw + 16} color={GREY} width={5} />
			<Fade at={K11.cross}>
				<line x1={crossX} x2={crossX} y1={crossY} y2={G11.y + G11.h} stroke={TEAL} strokeWidth={4} strokeDasharray="10 8" />
				<circle cx={crossX} cy={crossY} r={16} fill="none" stroke={TEAL} strokeWidth={5} />
			</Fade>
			<Framed x={gx(G11, 23)} y={gy(G11, 7.0)} segs={[{t: '20 : 20 = 1 : 1', c: TEAL_INK}]} at={K11.one} size={50} />
			<Rich x={gx(G11, 23.4)} y={gy(G11, 5.9)} segs={[{t: 'matches HCl : NaOH = 1 : 1', c: TEAL_INK}]} size={32} hand at={K11.one + 10} />
			{/* the true ratio could fall between two mixtures */}
			{f >= K11.because ? (() => {
				const u = 0.5 - 0.5 * Math.cos(((f - K11.because) / 40) * Math.PI);
				const xx = lerp(15, 20, u);
				return <circle cx={gx(G11, xx)} cy={gy(G11, 0.33 * xx) - 2} r={14} fill="#fffdf8" stroke={TEAL} strokeWidth={4} strokeDasharray="6 5" opacity={prog(f, K11.because, 10)} />;
			})() : null}
			<Write x={gx(G11, 5)} y={gy(G11, 1.2) + 40} text="true ratio could fall between" at={K11.because + 18} size={40} color={TEAL_INK} />
			<Chip x={100} y={880} segs={[{t: 'highest point = the ratio'}]} at={K11.highest - 20} color={RED} size={34} hand strike={K11.highest + 26} />
			{void gp}{void K11.peaks}{void K11.why}{void K11.left}{void K11.other}{void K11.only}{void K11.tt}{void K11.crossing}{void K11.mixtures}{void AMB}{void AMB_INK}{void Water}{void INK_SOFT}
		</SVG>
	);
};
