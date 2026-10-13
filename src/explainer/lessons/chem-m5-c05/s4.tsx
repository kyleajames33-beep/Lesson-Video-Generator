import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, Enter, FONT_DISPLAY, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, CuTube, EqStrip, FWD, Fade, Frac, GasTube, Overlay, Ring, Sx, TEAL, Flask, Cross, wob} from './parts';
import type {EqItem, Term} from './parts';
import {CU_DEEP, GREEN, Heading, cw, sc} from './common';

// ---------- 6. What the size of K tells you ----------
const Z = 'size-of-k';
const K8 = cues(sc(Z), {start: 'What does the number tell us', bigger: 'the bigger it is', prod: 'K is products over reactants', rough: 'As a rough guide', thousand: 'above about a thousand', thousandth: 'below about a thousandth', between: 'In between', only: 'only a rough guide', k49: 'K of forty-nine', n30: 'ten to the minus thirty', n13: 'ten to the thirteen', fast: 'not how fast'});
const X = (e: number) => 140 + (e + 30) * 38.14;
const BY = 520, BH = 80;
const mark = (f: number, at: number) => prog(f, at, 14);
export const SceneSizeK: React.FC = () => {
	const f = useCurrentFrame();
	const bandsAt = K8.rough - 10;
	const P49 = X(Math.log10(49));
	const eqNO: EqItem[] = [{k: 'sp', t: 'N_2', color: INK}, {k: 'plus'}, {k: 'sp', t: 'O_2', color: INK}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'NO', color: INK}];
	const eqHI: EqItem[] = [{k: 'sp', t: 'H_2', color: INK}, {k: 'plus'}, {k: 'sp', t: 'I_2', color: INK}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'HI', color: INK}];
	const num: Term[] = [{t: 'products', br: false, color: GREEN, at: K8.start + 10}];
	const den: Term[] = [{t: 'reactants', br: false, color: AMBER_INK, at: K8.start + 10}];
	const w1 = wob(f, 3, 0, 0, 5, 5);
	return (
		<>
			<Heading text="What the size of K tells you" at={4} size={62} />
			<Overlay>
				<Frac cx={330} cy={272} size={52} num={num} den={den} barAt={K8.start + 6} prefix="K =" />
				<Ring cx={330} cy={236} rx={110} ry={34} at={K8.prod} color={GREEN} seed={4} />
				<Sx x={1230} y={262} text="the bigger K is, the more products" size={46} color={TEAL} anchor="middle" hand at={K8.bigger} out={K8.fast - 6} />
				<Arrow x1={760} y1={306} x2={1700} y2={306} at={K8.bigger} color={TEAL} width={7} dur={26} out={K8.fast - 6} />
				<Sx x={140} y={400} text="rough guides: they depend on the equation, for concentrations around 0.1 to 1 mol/L" size={34} color={INK_SOFT} at={K8.only - 10} />
				{/* the log number line with three bands */}
				<Fade at={bandsAt}>
					<rect x={X(-30)} y={BY} width={X(-3) - X(-30)} height={BH} fill="#f6dfae" stroke={INK} strokeWidth={4} />
					<rect x={X(-3)} y={BY} width={X(3) - X(-3)} height={BH} fill="#cfe9df" stroke={INK} strokeWidth={4} />
					<rect x={X(3)} y={BY} width={X(13) - X(3)} height={BH} fill="#bcd6ee" stroke={INK} strokeWidth={4} />
				</Fade>
				<Sx x={(X(-30) + X(-3)) / 2} y={BY + 52} text="below about 10^{−3}: mostly reactants" size={42} color={AMBER_INK} anchor="middle" hand at={K8.thousandth} />
				<Sx x={(X(3) + X(13)) / 2} y={BY + 34} text="above about 10^{3}" size={34} color={FWD} anchor="middle" hand at={K8.thousand} />
				<Sx x={(X(3) + X(13)) / 2} y={BY + 66} text="mostly products" size={34} color={FWD} anchor="middle" hand at={K8.thousand + 8} />
				<Sx x={X(0)} y={462} text="10^{−3} to 10^{3}:" size={38} color={TEAL} anchor="middle" hand at={K8.between} />
				<Sx x={X(0)} y={500} text="both present in measurable amounts" size={38} color={TEAL} anchor="middle" hand at={K8.between + 6} />
				<Fade at={bandsAt + 6}>
					<Sx x={X(-30) + 34} y={650} text="10^{−30}" size={32} color={INK_SOFT} at={bandsAt + 6} />
					<Sx x={X(-3)} y={650} text="10^{−3}" size={32} color={INK_SOFT} anchor="middle" at={bandsAt + 6} />
					<Sx x={X(0)} y={650} text="1" size={32} color={INK_SOFT} anchor="middle" at={bandsAt + 6} />
					<Sx x={X(3)} y={650} text="10^{3}" size={32} color={INK_SOFT} anchor="middle" at={bandsAt + 6} />
					<Sx x={X(13) - 50} y={650} text="10^{13}" size={32} color={INK_SOFT} anchor="end" at={bandsAt + 6} />
				</Fade>
				<Ring cx={X(3)} cy={BY + BH / 2} rx={24} ry={46} at={K8.thousand} color={TEAL} seed={3} />
				<Ring cx={X(-3)} cy={BY + BH / 2} rx={24} ry={46} at={K8.thousandth} color={TEAL} seed={6} />
				{/* three worked markers and their cards */}
				<g>
					<Arrow x1={190} y1={690} x2={X(-30) + 6} y2={612} at={K8.n30} color={AMBER_INK} width={6} />
					<circle cx={X(-30) + 6} cy={BY + BH / 2} r={16 * mark(f, K8.n30 + 10)} fill={AMBER_INK} stroke={INK} strokeWidth={3} />
					<Fade at={K8.n30 - 6}>
						<rect x={70} y={690} width={490} height={262} rx={22} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={3.5} />
					</Fade>
					<Flask x={96} y={740} w={110} h={150} color="#f0e6d6" at={K8.n30} />
					{[0, 1, 2, 3].map(k => { const p = wob(f, k + 8, 138 + (k % 2) * 36, 850 + (k > 1 ? 40 : 0), 14, 14); return <circle key={k} cx={p.x} cy={p.y} r={7} fill={k < 3 ? '#2f4b7c' : '#c4582f'} stroke={INK} strokeWidth={2} opacity={mark(f, K8.n30)} />; })}
					<EqStrip items={eqNO} x={226} y={760} size={34} at={K8.n30} />
					<Sx x={226} y={818} text="K near 10^{−30}" size={46} color={AMBER_INK} hand at={K8.n30 + 6} />
					<Sx x={226} y={866} text="very little NO" size={36} color={INK_SOFT} hand at={K8.n30 + 12} />
					<Sx x={226} y={908} text="at equilibrium" size={36} color={INK_SOFT} hand at={K8.n30 + 16} />
				</g>
				<g>
					<Arrow x1={1130} y1={690} x2={P49} y2={612} at={K8.k49} color={TEAL} width={6} />
					<circle cx={P49} cy={BY + BH / 2} r={16 * mark(f, K8.k49 + 10)} fill={TEAL} stroke={INK} strokeWidth={3} />
					<Fade at={K8.k49 - 6}>
						<rect x={720} y={690} width={680} height={262} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={3.5} />
					</Fade>
					<GasTube x={750} y={730} w={80} h={220} counts={{h: 2, i: 2, hi: 14}} seed={5} reveal={mark(f, K8.k49)} clamps={false} />
					<EqStrip items={eqHI} x={870} y={760} size={34} at={K8.k49} />
					<Sx x={870} y={818} text="K = 49 at 450 °C" size={46} color={TEAL} hand at={K8.k49 + 6} />
					<Sx x={870} y={866} text="lots of HI, some H_2" size={36} color={INK_SOFT} hand at={K8.k49 + 12} />
					<Sx x={870} y={908} text="and I_2 left" size={36} color={INK_SOFT} hand at={K8.k49 + 16} />
				</g>
				<g>
					<Arrow x1={1640} y1={690} x2={X(13) - 6} y2={612} at={K8.n13} color={FWD} width={6} />
					<circle cx={X(13) - 6} cy={BY + BH / 2} r={16 * mark(f, K8.n13 + 10)} fill={FWD} stroke={INK} strokeWidth={3} />
					<Fade at={K8.n13 - 6}>
						<rect x={1440} y={690} width={430} height={262} rx={22} fill="#fffdf8" stroke={FWD} strokeWidth={3.5} />
					</Fade>
					<CuTube x={1470} y={730} w={70} h={220} color={CU_DEEP} at={K8.n13} />
					<Sx x={1566} y={772} text="K near 10^{13}" size={42} color={FWD} hand at={K8.n13 + 6} />
					<Sx x={1566} y={826} text="plenty of NH_3:" size={34} color={INK_SOFT} hand at={K8.n13 + 12} />
					<Sx x={1566} y={866} text="almost all the" size={34} color={INK_SOFT} hand at={K8.n13 + 16} />
					<Sx x={1566} y={906} text="copper is in the" size={34} color={INK_SOFT} hand at={K8.n13 + 18} />
					<Sx x={1566} y={946} text="deep blue ion" size={34} color={INK_SOFT} hand at={K8.n13 + 20} />
				</g>
				{/* where, not how fast */}
				<Fade at={K8.fast}>
					<circle cx={1070 + w1.x * 0} cy={266} r={40} fill="#fffdf8" stroke={INK} strokeWidth={5} />
					<path d="M1070,266 L1070,238 M1070,266 L1092,278" stroke={INK} strokeWidth={5} strokeLinecap="round" />
					<Cross x={1070} y={266} at={K8.fast + 8} s={30} />
					<Sx x={1130} y={282} text="K says where, not how fast" size={56} color={TEAL} hand at={K8.fast + 16} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 7. Memory aid ----------
const M = 'memory-aid';
const K9 = cues(sc(M), {shortcut: 'Here is a shortcut', one: 'Products over reactants', two: 'coefficients become powers', three: 'pure solids', four: 'a pure liquid', five: 'the solvent', drop: 'drop out'});
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const pe = prog(f, K9.two + 6, 30);
	const fx = 1480 + (1610 - 1480) * pe, fy = 400 + (372 - 400) * pe - Math.sin(pe * Math.PI) * 50;
	return (
		<>
			<Heading text="A shortcut for any expression" at={K9.shortcut} size={62} />
			<div style={{position: 'absolute', left: 120, top: 200}}><HandText text="Products over reactants," at={K9.one} size={100} cps={24} color={INK} /></div>
			<div style={{position: 'absolute', left: 120, top: 330}}><HandText text="coefficients become powers," at={K9.two} size={100} cps={26} color={TEAL} /></div>
			<div style={{position: 'absolute', left: 120, top: 460}}><HandText text="pure solids, a pure liquid" at={K9.three} size={100} cps={24} color={INK_SOFT} /></div>
			<div style={{position: 'absolute', left: 120, top: 580}}><HandText text="and the solvent drop out." at={K9.five - 6} size={100} cps={22} color={INK_SOFT} /></div>
			<Enter at={K9.drop + 20} style={{position: 'absolute', left: 120, top: 860, width: 1700}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32, color: INK_SOFT}}>written for the equation as given, concentrations in mol/L, water as solvent or gas</div>
			</Enter>
			<Overlay>
				{/* icon 1: fraction */}
				<Fade at={K9.one + 14}>
					<Sx x={1600} y={230} text="products" size={40} color={GREEN} anchor="middle" hand at={K9.one + 14} />
					<path d="M1480,262 L1720,262" stroke={INK} strokeWidth={8} strokeLinecap="round" />
					<Sx x={1600} y={312} text="reactants" size={40} color={AMBER_INK} anchor="middle" hand at={K9.one + 20} />
				</Fade>
				{/* icon 2: coefficient flying to a power */}
				<Fade at={K9.two + 4}>
					<Sx x={1470} y={420} text="2" size={60} color={TEAL} at={K9.two + 4} out={K9.two + 6 + 30} />
					<Sx x={1530} y={420} text="[HI]" size={60} color={INK} at={K9.two + 4} />
				</Fade>
				{pe > 0.02 && pe < 1 ? <Sx x={fx} y={fy} text="2" size={60} color={TEAL} at={0} /> : null}
				{pe >= 1 ? <Sx x={1640} y={382} text="2" size={40} color={TEAL} at={0} /> : null}
				{/* icon 3: solid and droplet greyed out */}
				<Fade at={K9.three + 6}>
					<rect x={1480} y={566} width={90} height={58} rx={8} fill="#cfc7b8" stroke={INK_SOFT} strokeWidth={4} />
					<Cross x={1525} y={595} at={K9.three + 24} s={34} />
					<Sx x={1525} y={660} text="solid" size={34} color={INK_SOFT} anchor="middle" hand at={K9.three + 10} />
				</Fade>
				<Fade at={K9.four + 6}>
					<path d="M1650,560 Q1624,604 1650,628 Q1676,604 1650,560 Z" fill="#cfe3f1" stroke={INK_SOFT} strokeWidth={4} />
					<Cross x={1650} y={598} at={K9.four + 24} s={26} />
					<Sx x={1650} y={660} text="liquid" size={34} color={INK_SOFT} anchor="middle" hand at={K9.four + 10} />
				</Fade>
				<Fade at={K9.five + 4}>
					<Sx x={1590} y={716} text="or the solvent" size={36} color={INK_SOFT} anchor="middle" hand at={K9.five + 4} />
				</Fade>
			</Overlay>
		</>
	);
};
void AMBER; void DrawPath; void INK;
