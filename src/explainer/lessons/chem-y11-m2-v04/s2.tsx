// Y11 Chem M2 V04 scenes 6 to 12: the prediction (escaping gas: too high or too low?), losses push the answer one way
// (the collection replayed with gas escaping, readouts left with MM too high, the direction chains, the oxide skin,
// the fixes and the crossed "any loss" chip), the weak link (the painted balance at 0.01 g, the mass window and the
// molar-mass window on two number lines, narrowing at 0.001 g), the compound method (the foil-capped flask weighed,
// the hotplate water bath with vapour pushing air out of the pinhole), cool, reweigh and measure (the vapour's mass
// and the flask's volume in the painted cylinder), which liquid is it (g01 rows and the candidate strip) and what
// pushes that result high (a wet flask, liquid left).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {BATH_L, BATH_V, CAND, CMP, CMP_MM, CMP_N, COND, CYL, CYL_N, EL, EL_N, ESC_MM, ESC_N, FOIL, FOIL_PIN, GMOL, ILLUS, LMOL, RIBBON, VM_BATH, WIN, elV, fix, hold, ph, pw, sc, sci} from './common';
import {
	AMB_T, Balance, Burette, Chip, Countdown, Fade, Framed, GREEN_S, INK, NAVY_T, PAPER, PenArrow, PenRing, Plate, Readout, Reveal, Rich, RED_T, ROSE_S, ROSE_SOFT, ROSE_T,
	SLATE_S, SLATE_T, SVG, Sx, TEAL_S, TEAL_SOFT, TEAL_T, TaskStrip, TickMark, Write, balGeo, burMap, clamp01, lerp, plateMap, prog, richW, smooth, span, BUR_N,
} from './parts';
import type {Seg} from './parts';
import {BUR4, CollectReadouts, TopStrips} from './s1';

// ---------- 6. prediction ----------
const K6 = cues(sc('prediction'), {quick: 'Quick prediction', suppose: 'Suppose some', would: 'Would the molar', low: 'too low'});
export const ScenePrediction: React.FC = () => {
	const h = hold('prediction');
	const m = burMap(BUR4.x, BUR4.y, BUR4.h);
	return (
		<SVG>
			<Write x={96} y={150} text="Quick prediction" at={0} size={60} color={INK} />
			<TopStrips cond={COND.room} tick />
			<Burette id="v04b6" x={BUR4.x} y={BUR4.y} h={BUR4.h} v={elV * 0.6} vEnd={elV} bubbling leak />
			<Write x={m.X(BUR_N.cx) + 150} y={m.Y(BUR_N.mouth) - 130} text="some H_2 escapes" at={K6.suppose + 10} size={46} color={ROSE_T} />
			<CollectReadouts v={0} x={760} y={230} w={560} size={48} blank />
			<Write x={1420} y={300} text="the molar mass?" at={K6.would} size={46} color={INK} />
			<Chip x={1420} y={340} segs={[{t: 'too high'}]} at={K6.would + 6} size={48} color={INK} />
			<Chip x={1420} y={450} segs={[{t: 'too low'}]} at={K6.would + 10} size={48} color={INK} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1680} y={600} r={70} ringFrom={K6.low} />
			<Rich x={760} y={840} segs={[{t: 'Some H_2 escaped before it was collected.'}]} size={44} at={K6.suppose} />
			<Rich x={760} y={904} segs={[{t: 'Is the calculated molar mass too high or too low?'}]} size={44} at={K6.would} />
			{void K6.quick}
		</SVG>
	);
};

// ---------- 7. losses push the answer one way ----------
const K7 = cues(sc('loss-direction'), {too: 'Too high', less: 'Less gas', fewer: 'fewer moles', dividing: 'Dividing the same', mass: 'bigger molar mass', oxide: 'An oxide coating', adds: 'adds to the mass', again: 'high again', why: "That's why", cleaned: 'ribbon is cleaned', caught: 'must be caught', first: 'very first bubble'});
const vAt7 = (f: number) => EL.escapeV * smooth(clamp01((f - 14) / 120));
const Chain: React.FC<{x: number; y: number; parts: {t: string; at: number}[]; size?: number; color?: string}> = ({x, y, parts, size = 48, color = ROSE_T}) => {
	let cx = x;
	return (
		<g>
			{parts.map((p, i) => {
				const x0 = cx;
				cx += richW([{t: p.t}], size) + richW([{t: '  →  '}], size);
				return (
					<g key={i}>
						<Rich x={x0} y={y} segs={[{t: p.t, c: color}]} size={size} at={p.at} />
						{i < parts.length - 1 ? <Rich x={x0 + richW([{t: p.t}], size)} y={y} segs={[{t: '  →  ', c: color}]} size={size} at={parts[i + 1].at} /> : null}
					</g>
				);
			})}
		</g>
	);
};
export const SceneLossDirection: React.FC = () => {
	const f = useCurrentFrame();
	const v = vAt7(f);
	return (
		<SVG>
			<Write x={96} y={150} text="Losses push the answer one way" at={4} size={60} color={INK} />
			<TopStrips cond={COND.room} tick />
			<Burette id="v04b7" x={BUR4.x} y={BUR4.y} h={BUR4.h} v={v} vEnd={elV} bubbling={f > 14 && f < 134} leak={f < 150} />
			<CollectReadouts v={v} x={700} y={230} w={560} size={44} rose={f > 120} />
			<Chip x={1330} y={190} segs={[{t: 'too high', c: GREEN_S}]} at={-1000} size={44} color={GREEN_S} />
			<TickMark x={1560} y={224} at={K7.too} s={1.4} />
			<Write x={1330} y={300} text="escaped gas: MM too high" at={K7.too + 20} size={44} color={ROSE_T} />
			<Sx x={1330} y={340} text={`${fix(EL.escapeV, 1)} mL, ${sci(ESC_N, 3)} mol, ${fix(ESC_MM, 1)} ${GMOL}`} size={28} color={INK} weight={700} at={K7.too + 26} />
			<Chain x={700} y={710} parts={[{t: 'V ↓', at: K7.less}, {t: 'n ↓', at: K7.fewer}, {t: 'MM = m ÷ n ↑', at: K7.mass - 10}]} />
			{/* the oxide skin (cross-section model) */}
			<Fade at={K7.oxide}>
				<rect x={1330} y={380} width={460} height={190} rx={16} fill={PAPER} stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
				<rect x={1370} y={470} width={380} height={56} rx={8} fill="#c9ccd1" stroke={INK} strokeWidth={3} />
				<rect x={1370} y={452} width={380} height={20} rx={6} fill="#8d8f8c" stroke={INK} strokeWidth={2} />
				<Sx x={1370} y={430} text="oxide skin (MgO)" size={30} color={INK} weight={800} at={-1000} />
				<Sx x={1560} y={508} text="magnesium" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={1350} y={558} text="model, not to scale" size={26} color={INK} weight={700} at={-1000} />
			</Fade>
			<Chain x={700} y={800} parts={[{t: 'm ↑ (oxide), n unchanged', at: K7.adds}, {t: 'MM ↑', at: K7.again - 10}]} />
			<Chip x={700} y={840} segs={[{t: 'any loss makes it too low'}]} at={K7.why} size={40} color={RED_T} strike={K7.first} />
			<Write x={1240} y={900} text="depends what you lose" at={K7.first + 8} size={44} color={RED_T} />
			<Chip x={1330} y={590} segs={[{t: 'clean with emery paper', c: TEAL_T}]} at={K7.cleaned} size={36} color={TEAL_S} fill={TEAL_SOFT} />
			{void K7.dividing}{void K7.caught}{void lerp}
		</SVG>
	);
};

// ---------- 8. the weak link is the smallest reading ----------
const K8 = cues(sc('weak-reading'), {limit: 'another limit', mass: "it's the mass", balance: 'On a balance', four: 'zero four', real: 'The real mass', five: 'four five', mm: 'so the molar mass', six: 'twenty-six', thousandth: 'thousandth of a gram', down: 'narrows that down', smallest: 'The smallest reading', link: 'weak link'});
const NL = {x0: 820, x1: 1680};
const FINE = {lo: 0.041, hi: 0.043};
const NumLine: React.FC<{y: number; lo: number; hi: number; step: number; dp: number; unit: string; color?: string}> = ({y, lo, hi, step, dp, unit, color = INK}) => {
	const X = (v: number) => NL.x0 + ((v - lo) / (hi - lo)) * (NL.x1 - NL.x0);
	const ticks: number[] = [];
	for (let v = lo; v <= hi + 1e-9; v += step) ticks.push(v);
	return (
		<g>
			<line x1={NL.x0} x2={NL.x1} y1={y} y2={y} stroke={INK} strokeWidth={4} />
			{ticks.map(v => (
				<g key={v}>
					<line x1={X(v)} x2={X(v)} y1={y - 12} y2={y + 12} stroke={INK} strokeWidth={3} />
					<Sx x={X(v)} y={y + 46} text={fix(v, dp)} size={30} color={color} anchor="middle" weight={800} at={-1000} />
				</g>
			))}
			<Sx x={NL.x1 + 34} y={y + 8} text={unit} size={28} color={color} weight={800} at={-1000} />
		</g>
	);
};
export const SceneWeakReading: React.FC = () => {
	const f = useCurrentFrame();
	const g = balGeo(96, 360, 440);
	const rw = 300, rh = ph(RIBBON, rw);
	const fine = span(f, K8.down - 6, K8.down + 20);
	const mX = (v: number) => NL.x0 + ((v - 0.03) / 0.02) * (NL.x1 - NL.x0);
	const MX = (v: number) => NL.x0 + ((v - 18) / 12) * (NL.x1 - NL.x0);
	const mLo = lerp(EL.lo, FINE.lo, fine), mHi = lerp(EL.hi, FINE.hi, fine);
	const MLo = lerp(WIN.lo, FINE.lo / EL_N, fine), MHi = lerp(WIN.hi, FINE.hi / EL_N, fine);
	const mBar = prog(f, K8.real, 14), MBar = prog(f, K8.six - 10, 14);
	return (
		<SVG>
			<Write x={96} y={150} text="The weak link: the smallest reading" at={4} size={60} color={INK} />
			<TopStrips cond={COND.room} tick />
			<Sx x={96} y={262} text={f < K8.thousandth ? 'a balance that reads to 0.01 g' : 'a balance that reads to 0.001 g'} size={36} color={NAVY_T} weight={800} at={K8.balance - 10} />
			<Balance g={g} text={f < K8.down ? `${fix(EL.m, 2)} g` : `${fix(EL.m, 3)} g`} />
			<Plate p={RIBBON} x={g.pan[0] - rw / 2} y={g.pan[1] + 18 - rh} h={rh} />
			<PenRing cx={g.disp[0]} cy={g.disp[1] + 10} rx={170} ry={66} at={K8.four} out={K8.real} color={NAVY_T} seed={3} />
			<Write x={NL.x0} y={290} text="what could the real mass be?" at={K8.balance} out={K8.real - 10} size={48} color={NAVY_T} />
			{/* the mass window */}
			<Sx x={NL.x0} y={360} text="the real mass could be" size={36} color={INK} weight={800} at={K8.real - 6} />
			<NumLine y={460} lo={0.03} hi={0.05} step={0.005} dp={3} unit="g" color={NAVY_T} />
			{mBar > 0.005 ? <rect x={mX(mLo)} y={440} width={(mX(mHi) - mX(mLo)) * mBar} height={40} rx={8} fill={ROSE_SOFT} stroke={ROSE_S} strokeWidth={4} /> : null}
			<Sx x={NL.x1} y={410} text={`${fix(mLo, 3)} to ${fix(mHi, 3)} g?`} size={40} color={ROSE_T} anchor="end" weight={800} at={K8.five} />
			{/* the molar-mass window */}
			<Sx x={NL.x0} y={640} text={f < K8.mm ? 'molar mass from this run' : 'so the molar mass could be'} size={36} color={INK} weight={800} at={-1000} />
			<NumLine y={740} lo={18} hi={30} step={2} dp={0} unit={GMOL} color={TEAL_T} />
			{MBar > 0.005 ? <rect x={MX(MLo)} y={720} width={(MX(MHi) - MX(MLo)) * MBar} height={40} rx={8} fill={ROSE_SOFT} stroke={ROSE_S} strokeWidth={4} /> : null}
			<Sx x={NL.x1} y={690} text={f < K8.down ? `about ${Math.round(WIN.lo)} to ${Math.round(WIN.hi)} ${GMOL}` : `about ${fix(FINE.lo / EL_N, 1)} to ${fix(FINE.hi / EL_N, 1)} ${GMOL}`} size={40} color={ROSE_T} anchor="end" weight={800} at={K8.six} />
			<g>
				<line x1={MX(24.67)} x2={MX(24.67)} y1={700} y2={780} stroke={TEAL_S} strokeWidth={5} />
				<Sx x={MX(24.67)} y={830} text={`this run: ${fix(24.67, 1)}`} size={30} color={TEAL_T} anchor="middle" weight={800} at={-1000} />
			</g>
			<Write x={NL.x0} y={900} text="a 0.001 g balance narrows it" at={K8.down} size={46} color={NAVY_T} />
			<Write x={96} y={900} text="weak link" at={K8.smallest} size={50} color={NAVY_T} />
			<PenRing cx={g.disp[0]} cy={g.disp[1] + 10} rx={170} ry={66} at={K8.smallest + 6} color={NAVY_T} seed={5} />
			<Chip x={1824} y={180} segs={[{t: 'more on uncertainty: a later video'}]} at={K8.link - 10} size={32} color={INK} anchor="end" />
			{void K8.limit}{void K8.mass}</SVG>
	);
};

// ---------- 9. the compound method: a volatile liquid ----------
const K9 = cues(sc('compound-setup'), {now: 'Now a compound', unknown: 'an unknown liquid', volatile: 'call that volatile', weigh: 'Weigh a dry flask', add: 'Add a few', stand: 'stand the flask', because: 'because the vapour', flames: 'flames', boils: 'The liquid boils', pushes: 'pushes the air', until: 'until the flask', temp: "the bath's temperature"});
export const BATH9 = {x: 1300, y: 470, h: 460};
/** Bath plate: flask interior (native) and the pinhole. */
const BATH_N = {pin: [612, 362] as [number, number], flask: [[560, 470], [665, 470], [745, 800], [478, 800]] as [number, number][]};
export const FoilOnBalance: React.FC<{x: number; y: number; h: number; text: string; fh?: number}> = ({x, y, h, text, fh = 300}) => {
	const g = balGeo(x, y, h);
	const fw = pw(FOIL, fh);
	return (
		<g>
			<Balance g={g} text={text} />
			<Plate p={FOIL} x={g.pan[0] - fw / 2} y={g.pan[1] + 30 - fh} h={fh} />
		</g>
	);
};
export const SceneCompoundSetup: React.FC = () => {
	const f = useCurrentFrame();
	const m = plateMap(BATH_L, BATH9.x, BATH9.y, BATH9.h);
	const inn = span(f, K9.unknown, K9.unknown + 30);
	const vap = prog(f, K9.until, 20);
	const fl = BATH_N.flask.map(([u, v]) => `${m.X(u)},${m.Y(v)}`).join(' ');
	const wisp = prog(f, K9.boils, 20);
	const pin: [number, number] = [m.X(BATH_N.pin[0]), m.Y(BATH_N.pin[1])];
	return (
		<SVG>
			<Write x={96} y={150} text="Measuring molar mass: a compound" at={4} size={60} color={INK} />
			<TopStrips cond={f < K9.until ? COND.room : `bath: ${COND.bath}`} tick />
			<Chip x={760} y={500} segs={[{t: 'volatile: evaporates easily'}]} at={K9.volatile} size={40} color={INK} />
			<Write x={760} y={340} text="1  weigh the dry, capped flask: m_1" at={K9.weigh} size={48} color={NAVY_T} />
			<Write x={760} y={400} text="2  add a few mL of the liquid" at={K9.add} size={48} color={INK} />
			<Write x={760} y={460} text="3  heat in a boiling water bath" at={K9.stand} size={48} color={INK} />
			<FoilOnBalance x={96} y={430} h={460} text="m_1" fh={360} />
			<g opacity={inn} transform={`translate(${(1 - inn) * 400},0)`}>
				<Plate p={BATH_L} x={BATH9.x} y={BATH9.y} h={BATH9.h} />
				{vap > 0.005 ? <Plate p={BATH_V} x={BATH9.x} y={BATH9.y} h={BATH9.h} o={vap} /> : null}
				{wisp > 0.005 ? (
					<g opacity={wisp}>
						<defs><clipPath id="v04fl9"><polygon points={fl} /></clipPath></defs>
						<g clipPath="url(#v04fl9)">
							{Array.from({length: 9}, (_, i) => {
								const t = ((f * 0.012 + i / 9) % 1);
								const cx = m.X(500 + (i % 3) * 80) + Math.sin(f * 0.05 + i) * 12;
								const cy = m.Y(790) - t * (m.Y(790) - m.Y(470));
								return <path key={i} d={`M${cx - 24},${cy} q12,-16 24,0 q12,16 24,0`} fill="none" stroke="#b39ad8" strokeWidth={5} strokeLinecap="round" />;
							})}
						</g>
					</g>
				) : null}
				{f >= K9.pushes ? Array.from({length: 5}, (_, i) => {
					const t = ((f - K9.pushes) * 0.02 + i / 5) % 1;
					return <circle key={i} cx={pin[0] + Math.sin(i * 2 + f * 0.04) * 20 * t} cy={pin[1] - 10 - t * 120} r={6} fill="#8a8478" stroke={INK} strokeWidth={1.5} opacity={1 - t * 0.5} />;
				}) : null}
			</g>
			<Sx x={BATH9.x - 20} y={BATH9.y + BATH9.h - 90} anchor="end" text="hotplate water bath, about 100 °C" size={32} color={INK} weight={800} at={K9.stand} />
			<Fade at={K9.because}>
				<rect x={760} y={196} width={600} height={60} rx={14} fill={ROSE_SOFT} stroke={ROSE_S} strokeWidth={3} />
				<Sx x={780} y={238} text="flammable: hotplate, no naked flame" size={32} color={ROSE_T} weight={800} at={-1000} />
			</Fade>
			<Write x={pin[0] - 60} y={pin[1] - 60} text="air out" at={K9.pushes + 6} size={44} color={INK} anchor="end" />
			<Write x={1540} y={600} text="room pressure" at={K9.until + 10} size={46} color={SLATE_T} />
			<PenArrow a={[1540, 610]} b={[pin[0] + 10, pin[1] - 6]} at={K9.until + 18} color={SLATE_T} bend={0.2} />
			<Sx x={96} y={915} text="pinhole: lets air and extra vapour out, so the pressure stays at the room's" size={30} color={INK} weight={700} at={K9.temp} />
			{void K9.now}{void K9.unknown}{void K9.add}{void K9.flames}</SVG>
	);
};

// ---------- 10. cool, reweigh, and measure the volume ----------
const K10 = cues(sc('reweigh-volume'), {then: 'Then take', cool: 'let it cool', condenses: 'condenses', reweigh: 'reweighing', it: 'filled it', zero: 'zero point two seven two', finally: 'Finally, fill', measure: 'measure that water', ml: 'forty millilitres'});
export const SceneReweigh: React.FC = () => {
	const f = useCurrentFrame();
	const ch = 640, cw = pw(CYL, ch), cx = 1620;
	const k = ch / CYL.box[3];
	const X = (u: number) => cx - cw / 2 + (u - CYL.box[0]) * k, Y = (v: number) => 260 + (v - CYL.box[1]) * k;
	const level = lerp(CYL_N.base, CYL_N.top, 0.56 * smooth(prog(f, K10.finally + 10, 40)));
	const cylIn = prog(f, K10.finally - 10, 14);
	return (
		<SVG>
			<Write x={96} y={150} text="Cool, reweigh, measure the volume" at={4} size={60} color={INK} />
			<TopStrips cond={`bath: ${COND.bath}`} tick />
			<FoilOnBalance x={96} y={430} h={400} text={f < K10.reweigh ? 'm_1' : 'm_2'} fh={320} />
			<Write x={720} y={290} text="4  cool: the vapour condenses" at={K10.then} size={46} color={INK} />
			<Write x={720} y={350} text="5  dry and reweigh: m_2" at={K10.reweigh} size={46} color={NAVY_T} />
			<Write x={720} y={410} text="6  fill with water, measure it" at={K10.finally} size={46} color={SLATE_T} />
			<Plate p={BATH_V} x={1440} y={330} h={420} out={K10.finally - 10} />
			<Sx x={1600} y={300} text="out of the bath" size={32} color={INK} anchor="middle" weight={800} at={-1000} out={K10.finally - 10} />
			<Rich x={720} y={520} segs={[{t: 'm_2 − m_1', c: NAVY_T}, {t: ' = mass of vapour'}]} size={52} at={K10.reweigh} />
			<Framed x={720} y={640} segs={[{t: `${fix(CMP.m, 3)} g`, c: NAVY_T}]} at={K10.zero} size={60} stroke={GREEN_S} />
			<Write x={1040} y={640} text="mass of vapour" at={K10.zero + 10} size={46} color={NAVY_T} />
			<Sx x={720} y={698} text={ILLUS} size={28} color={INK} weight={700} at={K10.zero + 10} />
			{cylIn > 0.005 ? (
				<g opacity={cylIn}>
					<Plate p={CYL} x={cx - cw / 2} y={260} h={ch} />
					<rect x={X(CYL_N.l)} y={Y(level)} width={X(CYL_N.r) - X(CYL_N.l)} height={Y(CYL_N.base) - Y(level)} fill="#5b9fd0" opacity={0.62} />
				</g>
			) : null}
			<Rich x={720} y={800} segs={[{t: 'flask volume = ', c: SLATE_T}, {t: `${CMP.V} mL`, c: SLATE_T}]} size={52} at={K10.measure} />
			<Write x={720} y={880} text="= vapour volume" at={K10.ml - 10} size={50} color={SLATE_T} />
			<PenArrow a={[1200, 790]} b={[X(CYL_N.l) - 12, Y(level) + 30]} at={K10.ml} color={SLATE_T} bend={0.2} />
			{void K10.then}{void K10.cool}{void K10.it}</SVG>
	);
};

// ---------- 11. which liquid is it? ----------
const K11 = cues(sc('compound-calc'), {at: "At the bath's", spread: 'spread out more', thirty: 'thirty point six', laws: 'gas laws', so: 'So the vapour', moles: 'four point five eight', mm: 'The molar mass is', five: 'fifty-nine point five', likely: 'Of the likely', propanone: 'propanone is closest', eight: 'fifty-eight point zero eight'});
const SC = {x0: 200, x1: 1700, lo: 40, hi: 90, y: 860};
export const SceneCompoundCalc: React.FC = () => {
	const f = useCurrentFrame();
	const X = (v: number) => SC.x0 + ((v - SC.lo) / (SC.hi - SC.lo)) * (SC.x1 - SC.x0);
	const mk = smooth(prog(f, K11.likely, 40));
	const r1: Seg[] = [{t: 'n = '}, {t: fix(CMP.V / 1000, 3), c: SLATE_T}, {t: ' ÷ '}, {t: `${VM_BATH}`, c: SLATE_T}, {t: ' = '}, {t: `${sci(CMP_N, 3)} mol`, c: AMB_T}];
	const r2: Seg[] = [{t: 'MM = '}, {t: fix(CMP.m, 3), c: NAVY_T}, {t: ' ÷ '}, {t: sci(CMP_N, 3), c: AMB_T}, {t: ` = ${fix(CMP_MM, 2)}`}];
	return (
		<SVG>
			<Write x={96} y={150} text="Which liquid is it?" at={4} size={60} color={INK} />
			<TopStrips cond={`bath: ${COND.bath}`} tick />
			<TaskStrip text="Find the molar mass of the liquid, then identify it" />
			<rect x={96} y={270} width={1300} height={210} rx={16} fill="#eef2fa" stroke={NAVY_T} strokeWidth={3} />
			<Sx x={120} y={306} text="givens" size={28} color={NAVY_T} weight={800} at={-1000} />
			<Rich x={120} y={356} segs={[{t: `m(vapour) = ${fix(CMP.m, 3)} g`, c: NAVY_T}]} size={38} />
			<Rich x={120} y={410} segs={[{t: `V = ${CMP.V} mL = ${fix(CMP.V / 1000, 3)} L`, c: SLATE_T}]} size={38} />
			<Rich x={120} y={464} segs={[{t: `molar volume at ${COND.bath} = `, c: SLATE_T}, {t: `${VM_BATH} ${LMOL}`, c: SLATE_T}]} size={38} at={K11.thirty - 10} />
			<Sx x={1396} y={510} text="from the gas laws: a later video" size={28} color={INK} anchor="end" weight={700} at={K11.laws} />
			<Write x={1420} y={330} text="hotter gas spreads out:" at={K11.spread} size={40} color={SLATE_T} />
			<Write x={1420} y={380} text="more litres per mole" at={K11.spread + 10} size={40} color={SLATE_T} />
			<Plate p={BATH_V} x={1470} y={400} h={360} />
			<Reveal at={K11.so} dur={60}><Rich x={96} y={580} segs={r1} size={48} /></Reveal>
			<Sx x={96} y={622} text={`≈ ${sci(CMP_N, 2)}; keep the unrounded value`} size={28} color={INK} weight={700} at={K11.moles + 10} />
			<Reveal at={K11.mm} dur={60}><Rich x={96} y={720} segs={r2} size={48} /></Reveal>
			<Framed x={96 + richW(r2, 48) + 30} y={720} segs={[{t: `≈ ${fix(CMP_MM, 1)} ${GMOL}`, c: TEAL_T}]} at={K11.five} size={52} stroke={GREEN_S} />
			{/* the candidate strip */}
			<g>
				<line x1={SC.x0} x2={SC.x1} y1={SC.y} y2={SC.y} stroke={INK} strokeWidth={4} />
				{[40, 50, 60, 70, 80, 90].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={SC.y - 10} y2={SC.y + 10} stroke={INK} strokeWidth={3} /><Sx x={X(v)} y={SC.y + 40} text={`${v}`} size={28} color={INK} anchor="middle" weight={800} at={-1000} /></g>)}
				{CAND.map((c, i) => {
					const best = c.name === 'propanone';
					const lit = best ? prog(f, K11.propanone, 12) : 0;
					return (
						<g key={i}>
							<circle cx={X(c.mm)} cy={SC.y} r={10} fill={best && lit > 0.5 ? TEAL_S : INK} />
							<Sx x={X(c.mm)} y={SC.y - 26} text={`${c.name} ${fix(c.mm, 2)}`} size={32} color={best && lit > 0.5 ? TEAL_T : INK} anchor="middle" weight={800} at={-1000} />
						</g>
					);
				})}
				<g opacity={prog(f, K11.likely - 10, 14)}>
					<path d={`M${X(lerp(SC.lo, CMP_MM, mk))},${SC.y + 54} l-14,22 l28,0 Z`} fill={TEAL_S} stroke={TEAL_T} strokeWidth={3} />
					<Sx x={X(lerp(SC.lo, CMP_MM, mk))} y={SC.y + 100} text={fix(CMP_MM, 1)} size={30} color={TEAL_T} anchor="middle" weight={800} at={-1000} />
				</g>
				<Sx x={SC.x0} y={SC.y - 80} text="likely liquids (molar mass, g mol^{−1})" size={30} color={INK} weight={800} at={-1000} />
			</g>
			<TickMark x={X(CAND[1].mm) + 130} y={SC.y - 40} at={K11.propanone + 6} s={1.2} />
			<Write x={X(CAND[1].mm) + 170} y={SC.y - 70} text="closest" at={K11.propanone + 10} size={44} color={TEAL_T} />
			<Sx x={X(CAND[1].mm) + 170} y={SC.y - 36} text="also called acetone" size={28} color={INK} weight={700} at={K11.eight} />
			{void K11.at}{void TEAL_SOFT}</SVG>
	);
};

// ---------- 12. what pushes this result high? ----------
const K12 = cues(sc('compound-losses'), {this: 'This result', wet: 'still wet', water: 'the water adds', high: 'comes out high', and: 'And if some', hadnt: "hadn't evaporated", extra: 'holds extra mass', up: 'pushes it up'});
const FOIL12 = {x: 160, y: 220, h: 640};
const DROPS: [number, number][] = [[300, 900], [270, 1000], [330, 800], [880, 920], [910, 1040], [850, 820], [600, 1170], [430, 1160], [760, 1160]];
export const SceneCompoundLosses: React.FC = () => {
	const f = useCurrentFrame();
	const m = plateMap(FOIL, FOIL12.x, FOIL12.y, FOIL12.h);
	const drops = prog(f, K12.wet, 14);
	return (
		<SVG>
			<Write x={96} y={150} text="What pushes this result high?" at={4} size={60} color={INK} />
			<TopStrips cond={`bath: ${COND.bath}`} tick />
			<Plate p={FOIL} x={FOIL12.x} y={FOIL12.y} h={FOIL12.h} />
			{drops > 0.005 ? DROPS.map(([u, v], i) => <path key={i} d={`M${m.X(u)},${m.Y(v) - 16} q12,16 0,26 q-12,-10 0,-26 Z`} fill="#5b9fd0" stroke="#2d6f9c" strokeWidth={2} opacity={drops} />) : null}
			<PenRing cx={m.X(590)} cy={m.Y(1000)} rx={250} ry={190} at={K12.water} color={ROSE_S} seed={4} />
			<Write x={720} y={330} text="wet outside: m ↑ → MM ↑" at={K12.water + 6} size={50} color={ROSE_T} />
			<Chip x={720} y={380} segs={[{t: 'dry the outside', c: TEAL_T}]} at={K12.high + 10} size={42} color={TEAL_S} fill={TEAL_SOFT} />
			<Plate p={BATH_L} x={1440} y={380} h={440} />
			<PenRing cx={1440 + (612 - 255) * (440 / 979)} cy={380 + (780 - 149) * (440 / 979)} rx={110} ry={46} at={K12.hadnt + 6} color={ROSE_S} seed={6} />
			<Write x={720} y={600} text="liquid left: m ↑ → MM ↑" at={K12.hadnt} size={50} color={ROSE_T} />
			<Chip x={720} y={650} segs={[{t: 'heat until no liquid is left', c: TEAL_T}]} at={K12.extra + 10} size={42} color={TEAL_S} fill={TEAL_SOFT} />
			<Rich x={720} y={880} segs={[{t: 'm too big', c: ROSE_T}, {t: '  →  '}, {t: 'MM = m ÷ n too big', c: ROSE_T}]} size={44} at={K12.high} />
			{void K12.this}{void K12.and}{void K12.up}{void PAPER}{void ROSE_SOFT}{void RED_T}{void TEAL_SOFT}{void Readout}{void ph}{void EL}{void ESC_MM}</SVG>
	);
};
