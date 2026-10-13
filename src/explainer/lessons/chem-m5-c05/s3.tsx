import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {CobaltTube} from '../chem-m5-c03/parts';
import {Co2} from '../chem-m5-c01/parts';
import {Arrow, Chip, EqStrip, FWD, Fade, Frac, Line, Overlay, Ring, Sx, TEAL, Tick, eqLayout, eqWidth, fracGeom, tw, wob} from './parts';
import type {EqItem, Term} from './parts';
import {CLC_INK, COBLUE_INK, GREEN, Heading, PINK_INK, cw, kf, sc} from './common';

// ---------- 4. Writing one from scratch (the cobalt tube) ----------
const S = 'from-scratch';
const K6 = cues(sc(S), {pink: 'pink cobalt', blue: 'blue cobalt chloride', first: 'First', states: 'the states', aq: 'Species in solution', water: 'The water is a liquid', solvent: 'the solvent', out: 'stays out', second: 'Second', third: 'Third', cl: 'chloride, with a four', fourth: 'fourth power', brackets: 'The square brackets go around the whole ion'});
const ES = 50, EY = 270;
const EQ: EqItem[] = [
	{k: 'sp', t: '[Co(H_2O)_6]^{2+}(aq)', color: PINK_INK}, {k: 'plus'},
	{k: 'sp', coef: '4', t: 'Cl^{−}(aq)', color: CLC_INK}, {k: 'arrow'},
	{k: 'sp', t: '[CoCl_4]^{2−}(aq)', color: COBLUE_INK}, {k: 'plus'},
	{k: 'sp', coef: '6', t: 'H_2O(l)', color: INK_SOFT},
];
/** Hand-drawn underline or overline that stays clear of the fraction bar and the ion charges. */
const Under: React.FC<{x1: number; x2: number; y: number; at: number; color: string}> = ({x1, x2, y, at, color}) => <DrawPath d={`M${x1 - 6},${y} L${x2 + 6},${y - 3}`} at={at} dur={16} color={color} width={7} />;
export const SceneScratch: React.FC = () => {
	const f = useCurrentFrame();
	const eq = eqLayout(EQ, ES, 960 - eqWidth(EQ, ES) / 2);
	const P = eq.pos;
	const stateCx = (i: number) => P[i].sx + P[i].w - tw("(aq)", ES) / 2 + 14;
	const colour = kf(f, [[K6.pink - 4, 0], [K6.blue, 0], [K6.blue + 50, 2]]);
	const FS = 66, FCX = 1100, FCY = 650;
	const ion = (i: number): [number, number] => [P[i].sx, EY];
	const num: Term[] = [{t: '[CoCl_4]^{2−}', color: COBLUE_INK, at: K6.second + 14, from: ion(4), dur: 34}];
	const den: Term[] = [
		{t: '[Co(H_2O)_6]^{2+}', color: PINK_INK, at: K6.second + 24, from: ion(0), dur: 34, faint1: K6.third + 60},
		{t: 'Cl^{−}', p: '4', color: CLC_INK, at: K6.second + 34, from: ion(2), dur: 34, pAt: K6.third + 14, pFrom: [P[2].cx, EY], pColor: CLC_INK},
	];
	const g = fracGeom(FCX, FCY, FS, num, den);
	return (
		<>
			<Heading text="Writing an expression from scratch" at={4} size={62} />
			<CobaltTube x={110} y={400} h={470} s={colour} opacity={prog(f, K6.pink - 20, 18)} />
			<Overlay>
				<EqStrip items={EQ} x={960} y={EY} size={ES} anchor="middle" at={K6.pink - 4} />
				{/* stage 1: the states */}
				<Ring cx={stateCx(0)} cy={EY - 14} rx={40} ry={30} at={K6.states} color={GREEN} seed={2} />
				<Ring cx={stateCx(2)} cy={EY - 14} rx={40} ry={30} at={K6.states + 14} color={GREEN} seed={3} />
				<Ring cx={stateCx(4)} cy={EY - 14} rx={40} ry={30} at={K6.states + 28} color={GREEN} seed={4} />
				<Ring cx={P[6].sx + P[6].w - tw('(l)', ES) / 2} cy={EY - 14} rx={46} ry={38} at={K6.water} color={INK_SOFT} seed={5} />
				<Tick x={P[0].sx + P[0].w / 2} y={336} at={K6.aq} />
				<Tick x={P[2].sx + P[2].w / 2} y={336} at={K6.aq + 14} />
				<Tick x={P[4].sx + P[4].w / 2} y={336} at={K6.aq + 28} />
				<Sx x={400} y={398} text="concentration changes, so they count" size={42} color={GREEN} hand at={K6.aq + 10} />
				<DrawPath d={`M${P[6].cx - 6},${EY - 20} L${P[6].sx + P[6].w + 8},${EY - 24}`} at={K6.out} dur={14} color={INK_SOFT} width={9} />
				<Sx x={1850} y={340} text="solvent: huge, steady amount" size={42} color={INK_SOFT} hand anchor="end" at={K6.solvent} />
				{/* step badges */}
				<Chip x={400} y={448} w={230} h={54} text="1  the states" size={36} at={K6.first} color={GREEN} />
				<Chip x={650} y={448} w={470} h={54} text="2  products over reactants" size={36} at={K6.second} color={FWD} />
				<Chip x={1140} y={448} w={330} h={54} text="3  coefficients as powers" size={36} at={K6.third} color={TEAL} />
				{/* stage 2 and 3: the expression */}
				<Frac cx={FCX} cy={FCY} size={FS} num={num} den={den} barAt={K6.second} prefix="K =" />
				<Sx x={FCX + g.W / 2 + 50} y={FCY + 24} text="no power written for 1" size={34} color={INK_SOFT} hand at={K6.third + 70} />
				{/* last sentence: each ion matched */}
				<Ring cx={P[4].sx + P[4].w / 2 - 40} cy={EY - 14} rx={120} ry={44} at={K6.brackets + 20} color={COBLUE_INK} seed={7} />
				<Under x1={g.num[0].x} x2={g.num[0].x + g.num[0].w} y={FCY - FS * 0.86 - 22} at={K6.brackets + 30} color={COBLUE_INK} />
				<Under x1={g.den[0].x} x2={g.den[0].x + g.den[0].w} y={FCY + FS * 1.1 + FS * 0.28 + 16} at={K6.brackets + 44} color={PINK_INK} />
				<Under x1={g.den[1].x} x2={g.den[1].x + g.den[1].w} y={FCY + FS * 1.1 + FS * 0.28 + 16} at={K6.brackets + 58} color={CLC_INK} />
				<Sx x={FCX} y={900} text="outer brackets go round the whole ion, with its own brackets and charge" size={46} color={TEAL} anchor="middle" hand at={K6.brackets + 10} />
			</Overlay>
		</>
	);
};

// ---------- 5. Why a solid or the solvent is left out ----------
const L = 'left-out';
const K7 = cues(sc(L), {nochg: 'their concentration does not change', remember: 'Remember the rate equations', fixed: 'just another fixed number', folds: 'it folds into', incl: 'K already includes it', carbon: 'We met this with carbon', carb2: 'So for carbon plus carbon dioxide', never: 'the carbon never appears', steam: 'as steam', counts: 'its concentration changes'});
const solv = cw(L, 'Why leave out the solvent', 4);
const kk = (k: number) => cw(L, 'the carbon monoxide squared over the carbon dioxide', k);
const CEQ: EqItem[] = [{k: 'sp', t: 'C(s)', color: INK}, {k: 'plus'}, {k: 'sp', t: 'CO_2(g)', color: INK}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'CO(g)', color: INK}];
export const SceneLeftOut: React.FC = () => {
	const f = useCurrentFrame();
	const s1 = 1 - prog(f, K7.carbon - 10, 16);
	const dissolved = 0.12 + 0.05 * Math.sin(f * 0.07) + 0.03 * Math.sin(f * 0.19);
	const CS = 56, CX = 1260, CY = 330;
	const ce = eqLayout(CEQ, CS, CX - eqWidth(CEQ, CS) / 2);
	const cp = ce.pos;
	const FS = 66, FCY = 600;
	const cnum: Term[] = [{t: 'CO', p: '2', at: kk(2), from: [cp[4].sx, CY], dur: 30, pAt: kk(3), pFrom: [cp[4].cx, CY]}];
	const cden: Term[] = [{t: 'CO_2', at: kk(6), from: [cp[2].sx, CY], dur: 30}];
	const gC = fracGeom(CX, FCY, FS, cnum, cden);
	// flying chip (water counter into the fixed number)
	const fp = kf(f, [[K7.fixed, 0], [K7.fixed + 36, 1]]);
	const fx = 720 + (1130 - 720) * fp, fy = 350 + (330 - 350) * fp - Math.sin(fp * Math.PI) * 60;
	const line1: Term[] = [{t: 'rate =', br: false, hand: true, at: K7.remember}, {t: 'number', br: false, hand: true, at: K7.remember + 12}, {t: '×', br: false, at: K7.remember + 20}, {t: 'A', at: K7.remember + 26}, {t: '×', br: false, at: K7.remember + 34}, {t: 'water', at: K7.remember + 40, color: FWD}];
	const line2: Term[] = [{t: 'rate =', br: false, hand: true, at: K7.folds}, {t: '(number × water)', br: false, hand: true, at: K7.folds + 6, color: TEAL}, {t: '×', br: false, at: K7.folds + 14}, {t: 'A', at: K7.folds + 18}];
	const x1 = 1000;
	return (
		<>
			<Heading text="Why a solid or the solvent is left out" at={4} size={58} out={K7.carbon - 6} />
			<Overlay>
				<g opacity={s1}>
					{/* beaker */}
					<path d="M130,250 L160,660 Q300,700 440,660 L470,250" fill="#eef5fa" fillOpacity={0.5} stroke={INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					<path d="M140,330 L162,650 Q300,690 438,650 L460,330 Z" fill="#cfe3f1" fillOpacity={0.6} />
					{Array.from({length: 46}, (_, k) => { const p = wob(f, k, 190 + (k % 8) * 38, 380 + Math.floor(k / 8) * 46, 14, 14); return <circle key={k} cx={p.x} cy={p.y} r={6} fill="#9cc8e6" stroke="#5b8fb3" strokeWidth={1.5} />; })}
					{Array.from({length: 6}, (_, k) => { const p = wob(f, k + 60, 210 + k * 44, 470 + (k % 2) * 90, 26, 22); return <circle key={'r' + k} cx={p.x} cy={p.y} r={11} fill={k % 2 ? '#3d6fd6' : '#e58ab0'} stroke={INK} strokeWidth={2.4} />; })}
					<Ring cx={300} cy={470} rx={190} ry={190} at={solv} out={K7.fixed} color={FWD} seed={3} />
					{/* counters */}
					<Fade at={K7.nochg}>
						<rect x={540} y={280} width={380} height={140} rx={20} fill="#fffdf8" stroke={FWD} strokeWidth={4} />
						<Sx x={560} y={322} text="water" size={40} color={FWD} hand at={K7.nochg} />
						<Sx x={560} y={388} text="about 55 mol/L" size={54} color={INK} at={K7.nochg + 4} />
						<rect x={540} y={450} width={380} height={140} rx={20} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
						<Sx x={560} y={492} text="a dissolved ion" size={40} color={AMBER_INK} hand at={K7.nochg + 6} />
						<Sx x={560} y={558} text={`${dissolved.toFixed(2)} mol/L`} size={54} color={INK} at={K7.nochg + 8} />
					</Fade>
					<Sx x={730} y={640} text="water: very large and steady" size={36} color={INK_SOFT} anchor="middle" hand at={K7.nochg + 24} />
					{/* the rate equation */}
					<Line x={x1} y={340} size={54} items={line1} />
					<Fade at={K7.fixed - 2} out={K7.fixed + 44}>
						<circle cx={fx} cy={fy} r={34} fill="#fffdf8" stroke={FWD} strokeWidth={4} />
						<Sx x={fx} y={fy + 10} text="55" size={32} anchor="middle" at={K7.fixed - 2} />
					</Fade>
					<Ring cx={x1 + 190} cy={324} rx={90} ry={44} at={K7.fixed + 30} color={TEAL} seed={5} />
					<Line x={x1} y={500} size={54} items={line2} />
					<Sx x={x1} y={590} text="fixed × fixed = fixed" size={52} color={TEAL} hand at={K7.fixed + 24} />
					<Sx x={x1} y={660} text="so K already includes it" size={50} color={TEAL} hand at={K7.incl} />
				</g>
				{/* carbon */}
				<Heading0 />
				<Fade at={K7.carbon}>
					<rect x={130} y={500} width={340} height={150} rx={22} fill="#3a3733" stroke={INK} strokeWidth={5} />
					<Sx x={300} y={594} text="carbon" size={50} color="#f6f1e7" anchor="middle" hand at={K7.carbon + 4} />
					{[0, 1, 2].map(k => { const p = wob(f, k + 3, 230 + k * 90, 380, 22, 24); return <Co2 key={k} x={p.x} y={p.y} s={0.9} rot={k * 40} />; })}
					{[0, 1, 2, 3].map(k => { const p = wob(f, k + 30, 190 + k * 70, 440, 18, 14); return <g key={'c' + k}><circle cx={p.x - 9} cy={p.y} r={9} fill="#3a3733" stroke={INK} strokeWidth={2} /><circle cx={p.x + 9} cy={p.y} r={9} fill="#d6523c" stroke="#8c2f20" strokeWidth={2} /></g>; })}
					<path d="M130,690 L470,690" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" />
					<Sx x={300} y={746} text="pure solid: concentration does not change" size={36} color={INK_SOFT} anchor="middle" hand at={K7.carbon + 20} />
				</Fade>
				<EqStrip items={CEQ} x={CX} y={CY} size={CS} anchor="middle" at={K7.carbon + 10} />
				<Fade at={K7.carb2 - 6}>
					<Sx x={CX} y={CY - 76} text="the equation from the squeeze video" size={38} color={INK_SOFT} anchor="middle" hand at={K7.carb2 - 6} />
				</Fade>
				<DrawPath d={`M${cp[0].sx - 8},${CY - 20} L${cp[0].sx + cp[0].w + 8},${CY - 26}`} at={K7.never} dur={14} color={INK_SOFT} width={9} />
				<Sx x={CX} y={CY + 54} text="(s): left out" size={38} color={INK_SOFT} anchor="middle" hand at={K7.never + 14} />
				<Frac cx={CX} cy={FCY} size={FS} num={cnum} den={cden} barAt={kk(0)} prefix="K =" />
				<Fade at={K7.steam}>
					<rect x={CX - 360} y={770} width={720} height={150} rx={22} fill="#fffdf8" stroke={GREEN} strokeWidth={3.5} />
					<Sx x={CX - 330} y={850} text="H_2O(g)" size={60} color={FWD} at={K7.steam} />
					{[0, 1, 2].map(k => <path key={k} d={`M${CX - 150 + k * 26},840 q-10,-14 0,-28 q10,-14 0,-28`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />)}
					<Tick x={CX - 40} y={826} at={K7.counts} s={50} />
					<Sx x={CX + 10} y={816} text="(g): concentration changes," size={36} color={GREEN} hand at={K7.counts} />
					<Sx x={CX + 10} y={862} text="so it counts" size={36} color={GREEN} hand at={K7.counts + 6} />
				</Fade>
				{f < 0 ? <Arrow x1={0} y1={0} x2={0} y2={0} at={0} /> : null}
				{INK ? null : <Chip x={0} y={0} w={0} text="" at={0} />}
			</Overlay>
		</>
	);
};
const Heading0: React.FC = () => {
	const f = useCurrentFrame();
	const o = prog(f, K7.carbon, 14);
	return <Sx x={96} y={150} text="The same idea with carbon" size={62} hand at={K7.carbon} opacity={o} />;
};
void TEAL; void FWD;
