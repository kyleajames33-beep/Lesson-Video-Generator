// M7 C15 scenes 1 to 5: the hook (PET and nylon lose a water at every link), why a monomer needs two reactive ends
// (ethyl ethanoate stops; a diol and a diacid keep growing both ways), building PET (the join, condensation
// polymerisation, polyester), drawing the repeat unit (tracer, bracket stamp, end check, two ester links) and nylon 6,6.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TEAL, TaskLine} from '../chem-m6-c01/parts';
import {Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {CT, dimAt, vis} from '../chem-m7-c04a/parts';
import {Plate, RingAt, ptOn} from '../chem-m7-c06/parts';
import {BOTTLE, Heading, OBJ, ROPE, sc} from './common';
import {AMB, CCount, EndTag, GREY, GrowRow, INDIGO, INK, JoinPair, NAVY, RED, Ring2, Row, T, Tracer, WATER, WATER_SOFT, WaterChip, joinGeo, linksAt, rep, rowGeo} from './parts';
import type {Tok} from './parts';

// shared monomers
export const DIOL_G: Tok[] = [T.H, T.O, T.B, T.O, T.H];
export const ACID_G: Tok[] = [T.H, T.O, T.CO, T.B, T.CO, T.O, T.H];
export const EG: Tok[] = [T.H, T.O, T.CH2, T.CH2, T.O, T.H];
export const TPA: Tok[] = [T.H, T.O, T.CO, T.R, T.CO, T.O, T.H];
export const PET_U: Tok[] = [T.O, T.CH2, T.CH2, T.O, T.CO, T.R, T.CO];
export const HMDA: Tok[] = [T.H, T.NH, ...rep(T.CH2, 6), T.NH, T.H];
export const ADIP: Tok[] = [T.H, T.O, T.CO, ...rep(T.CH2, 4), T.CO, T.O, T.H];
export const N66_U: Tok[] = [T.NH, ...rep(T.CH2, 6), T.NH, T.CO, ...rep(T.CH2, 4), T.CO];
const Counters: React.FC<{x: number; y: number; at: number; n: (f: number) => number; big?: number; out?: number}> = ({x, y, at, n, big, out}) => {
	const f = useCurrentFrame();
	const k = n(f);
	const txt = big !== undefined && f >= big ? '1000s' : String(k);
	return (
		<>
			<Tag x={x} y={y} text={`links: ${txt}`} at={at} out={out} size={30} color={RED} fill="#f9e1dc" />
			<Tag x={x + 230} y={y} text={`H₂O released: ${txt}`} at={at} out={out} size={30} color={WATER} fill={WATER_SOFT} />
		</>
	);
};

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {last: 'Last time', drink: 'drink bottle', join: 'Every time two', water: 'water comes', rope: 'rope', so: 'So how', what: 'what do those'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const cx = 1330, top = 270, h = 500;
	const bag = ptOn(OBJ, cx, top, h, 490, 810), pipe = ptOn(OBJ, cx, top, h, 1120, 710), cup = ptOn(OBJ, cx, top, h, 1160, 1210), bottle = ptOn(OBJ, cx, top, h, 1640, 1040), rope = ptOn(OBJ, cx, top, h, 550, 1330);
	const veil = 0.62 * prog(f, K1.drink - 10, 16);
	return (
		<>
			<Heading text="Condensation polymers: a link and a water, again and again" at={4} size={52} />
			<Overlay>
				<g opacity={vis(f, K1.last) * dimAt(f, K1.water, 0.35)}>
					<Tag x={96} y={260} text="C14: addition, nothing lost" at={K1.last} size={26} />
					<CT x={96} y={370} text="–CH_2–CHCl–CH_2–CHCl–" size={36} at={K1.last + 10} color={GREY} />
				</g>
				<Plate p={OBJ} cx={cx} top={top} h={h} at={0} />
				{[bag, pipe, cup].map((p, i) => <ellipse key={i} cx={p[0]} cy={p[1]} rx={i === 0 ? 120 : i === 1 ? 160 : 90} ry={i === 0 ? 150 : i === 1 ? 70 : 100} fill="#faf6ee" opacity={veil} />)}
				<RingAt c={bottle} rx={70} ry={150} at={K1.drink} />
				<Tag x={bottle[0]} y={bottle[1] - 220} text="PET" at={K1.drink + 6} size={30} color={RED} fill="#f9e1dc" anchor="middle" o={dimAt(f, K1.rope, 0.4)} />
				<RingAt c={rope} rx={130} ry={90} at={K1.rope} />
				<Tag x={rope[0]} y={rope[1] + 100} text="rope: often nylon" at={K1.rope + 6} size={28} color={RED} fill="#f9e1dc" anchor="middle" />
				<JoinPair L={DIOL_G} R={ACID_G} x={96} y={640} s={0.72} at={K1.join - 4} T={{glowR: K1.join + 8, glowL: K1.join + 8, join: K1.water - 8}} water={[440, 790]} waterOut={K1.what + 10} />
				<Tag x={330} y={840} text="H₂O at every link" at={K1.water + 20} size={28} color={WATER} fill={WATER_SOFT} o={dimAt(f, K1.what, 0.4)} />
				{void K1.so}
			</Overlay>
		</>
	);
};

// ---------- 2. Two reactive ends ----------
const ETOH: Tok[] = [{l: 'CH₃'}, T.CH2, T.O, T.H];
const ETACID: Tok[] = [T.H, T.O, T.CO, {l: 'CH₃'}];
const K2 = cues(sc('two-ends'), {rem: 'Remember', water: 'lose water', stops: 'stops there', both: 'both ends', diol: 'a diol', diacid: 'dicarboxylic acid', one: 'After one', forms: 'link forms', still: 'still has', dirs: 'both directions', thousands: 'thousands'});
export const SceneTwoEnds: React.FC = () => {
	const f = useCurrentFrame();
	const outA = K2.both - 8;
	const eg = joinGeo(ETOH, ETACID, 360, 430, 1);
	const XB = 240, YB = 470;
	const gD = rowGeo(DIOL_G, XB, YB, 1);
	const pg = joinGeo(DIOL_G, ACID_G, XB, YB, 1);
	const gA = rowGeo(ACID_G, pg.cx[4] - rowGeo(ACID_G, 0, YB, 1).cx[2] + 250, YB, 1);
	const J = {glowR: K2.one, glowL: K2.one + 8, join: K2.forms + 6};
	const steps = [K2.dirs + 4, K2.dirs + 34, K2.dirs + 54];
	const grow = K2.dirs - 6;
	const mid = (g: ReturnType<typeof rowGeo>, a: number, b: number): V2 => [(g.cx[a] + g.cx[b]) / 2, g.y];
	return (
		<Overlay>
			<TaskLine text="Two ends" at={0} size={54} y={130} />
			<g opacity={1 - prog(f, outA, 12)}>
				<Tag x={96} y={200} text="c10: acid + alcohol → ester + water" at={K2.rem} size={24} />
				<JoinPair L={ETOH} R={ETACID} x={360} y={430} s={1} at={K2.rem + 4} T={{glowR: K2.water - 18, glowL: K2.water - 12, join: K2.water, ring: K2.water + 46}} water={[eg.mid(1)[0], 600]} />
				<Sx x={(eg.L + eg.R) / 2} y={560} text="ethyl ethanoate" size={30} color={INK} anchor="middle" weight={700} at={K2.water + 50} />
				<EndTag c={eg.p(0)} rx={56} ry={40} at={K2.stops} stop />
				<EndTag c={eg.p(4)} rx={56} ry={40} at={K2.stops + 6} stop />
				<Tag x={(eg.L + eg.R) / 2} y={700} text="no spare OH or COOH for chain growth" at={K2.stops + 10} size={26} anchor="middle" />
			</g>
			<g opacity={vis(f, K2.both - 4, grow)}>
				<JoinPair L={DIOL_G} R={ACID_G} x={XB} y={YB} s={1} at={K2.both} atR={K2.diacid - 6} T={{...J, ring: J.join + 46}} water={[pg.mid(3)[0], 620]} tally={[440, 820]} />
				{[[gD, 0, 1, K2.both + 8], [gD, 3, 4, K2.both + 14]].map(([g, a, b, t], i) => <EndTag key={i} c={mid(g as typeof gD, a as number, b as number)} rx={66} ry={44} at={t as number} out={J.join} />)}
				{[[0, 1], [5, 6]].map(([a, b], i) => <EndTag key={'a' + i} c={mid(gA, a, b)} rx={66} ry={44} at={K2.diacid + i * 6} out={J.join} />)}
				<EndTag c={mid(pg, 0, 1)} rx={66} ry={44} at={J.join + 50} />
				<EndTag c={mid(pg, pg.cx.length - 2, pg.cx.length - 1)} rx={66} ry={44} at={J.join + 56} />
				<Tag x={gD.cx[2]} y={590} text="diol: two O–H" at={K2.diol} out={J.join} size={26} color={AMB} fill="#fbedd0" anchor="middle" />
				<Tag x={gA.cx[3]} y={590} text="dicarboxylic acid: two –COOH" at={K2.diacid} out={J.join} size={26} color={AMB} fill="#fbedd0" anchor="middle" />
				<Tag x={1360} y={240} text="bifunctional: two reactive groups" at={K2.diacid + 30} out={K2.diacid + 110} size={22} />
				<Tag x={(pg.L + pg.R) / 2} y={680} text="still reactive at both ends" at={K2.still} size={28} color={AMB} fill="#fbedd0" anchor="middle" />
			</g>
			<GrowRow units={[0, 1, 2, 3, 4, 5, 6, 7].map(i => (i % 2 ? [T.O, T.B, T.O] : [T.CO, T.B, T.CO]))} c={3} x={960} y={500} s={0.7} at={grow} steps={steps} tally={[440, 820]} dots={K2.thousands} />
			<Counters x={96} y={880} at={J.join + 40} n={fr => Math.max(1, linksAt(fr, grow, steps))} big={K2.thousands} />
		</Overlay>
	);
};

// ---------- 3. Build PET ----------
const K3 = cues(sc('build-pet'), {that: "That's how", ethane: 'ethane one', benz: 'benzene one', opp: 'opposite', at: 'At each', ohLost: 'loses O H', hLost: 'alcohol loses', water: 'water', link: 'an ester link', cond: 'condensation polymerisation', poly: 'polyester'});
export const SceneBuildPet: React.FC = () => {
	const f = useCurrentFrame();
	const X = 150, Y = 450, S = 0.92;
	const pg = joinGeo(EG, TPA, X, Y, S);
	const gE = rowGeo(EG, X, Y, S);
	const gT = rowGeo(TPA, pg.cx[5] - rowGeo(TPA, 0, Y, S).cx[2] + 250 * S, Y, S);
	const outB = K3.poly - 6;
	const steps = [K3.poly + 10, K3.poly + 28];
	return (
		<Overlay>
			<TaskLine text="Build PET" at={0} size={54} y={130} />
			<g opacity={1 - prog(f, outB, 12)}>
				<JoinPair L={EG} R={TPA} x={X} y={Y} s={S} at={K3.ethane - 6} atR={K3.benz - 6} T={{glowR: K3.ohLost, glowL: K3.hLost, join: K3.water, ring: K3.link}} water={[pg.mid(4)[0], 640]} tally={[220, 900]} />
				<g opacity={dimAt(f, K3.cond, 0.35)}>
					<Sx x={gE.cx[2] + 40} y={600} text="ethane-1,2-diol" size={28} color={INK} anchor="middle" weight={700} at={K3.ethane} />
					<Sx x={(gT.cx[2] + gT.cx[4]) / 2} y={660} text="benzene-1,4-dicarboxylic acid (terephthalic acid)" size={26} color={INK} anchor="middle" weight={700} at={K3.benz} />
				</g>
				<EndTag c={[(gT.cx[0] + gT.cx[2]) / 2, Y - 20]} rx={110} ry={80} at={K3.opp} out={K3.ohLost} pulse={K3.opp} />
				<EndTag c={[(gT.cx[4] + gT.cx[6]) / 2, Y - 20]} rx={110} ry={80} at={K3.opp} out={K3.ohLost} pulse={K3.opp} />
				<Tag x={gT.cx[3]} y={250} text="1,4: opposite sides" at={K3.opp + 6} out={K3.water} size={26} color={AMB} fill="#fbedd0" anchor="middle" />
				<Tag x={1360} y={250} text="ester link: –COO–" at={K3.link + 6} size={30} color={RED} fill="#f9e1dc" />
			</g>
			<GrowRow units={[0, 1, 2, 3, 4, 5].map(i => (i % 2 ? PET_U.slice(4) : PET_U.slice(0, 4)))} c={2} x={900} y={470} s={0.56} at={K3.poly - 8} steps={steps} dots={steps[1] + 10} />
			<Tag x={900} y={600} text="polyester: ester links along the chain" at={K3.poly + 6} size={30} color={RED} fill="#f9e1dc" anchor="middle" />
			<Plate p={BOTTLE} cx={1770} top={330} h={250} at={K3.poly + 14} />
			<Tag x={96} y={790} text="condensation polymerisation: a small molecule (usually water) lost at every link" at={K3.cond} size={28} color={NAVY} fill="#e7edf8" />
			{void K3.that}{void K3.at}
		</Overlay>
	);
};

// ---------- 4. Draw the repeat unit ----------
const K4 = cues(sc('draw-repeat-unit'), {take: 'take one diol', gone: 'gone', t0: 'O C H two C', t1: 'C H two C H', t2: 'C H two O', t3: 'O then', t4: "acid's C double", t5: 'the ring', t6: 'other C double', brackets: 'brackets', ends: 'ends', fit: 'so the units', two: 'two ester'});
export const SceneRepeat: React.FC = () => {
	const f = useCurrentFrame();
	const S = 0.8, Y = 450;
	const toks = [...PET_U, ...PET_U];
	const g = rowGeo(toks, 960, Y, S, 'middle', 50, 50);
	const xs = g.x0;
	const sw = K4.brackets + 6;
	const u2 = (i: number) => (i < 7 ? 1 - prog(f, sw, 6) : (1 - 0.65 * prog(f, K4.gone, 12)) * (1 - prog(f, K4.brackets, 14)));
	const tr = [K4.t0, K4.t1, K4.t2, K4.t3, K4.t4, K4.t5, K4.t6];
	const glow: Record<number, [number, number?, string?]> = {};
	tr.forEach((t, i) => { glow[i] = [t, K4.brackets, '#d5e8f6']; });
	const rg = rowGeo(PET_U, xs, Y, S, 'start', 50, 50);
	const nb: V2 = [rg.R + 50 * S + 18, Y];
	const slideUp = 1 - prog(f, K4.ends + 4, 18);
	const nbO = f < K4.ends ? 0 : prog(f, K4.ends, 10) * (0.4 + 0.6 * vis(f, K4.two, K4.two + 50));
	return (
		<Overlay>
			<TaskLine text="Draw it" at={0} size={54} y={130} />
			<Row toks={toks} x={xs} y={Y} s={S} at={0} stagger={1} contL={50} contR={50} contO={1} tokO={u2} glow={f < sw ? glow : {}} bondO={k => (k === 6 ? 1 - prog(f, K4.brackets, 10) : 1)} />
			<Tag x={960} y={250} text="draw two units first" at={6} out={K4.gone} size={24} anchor="middle" />
			<g opacity={vis(f, K4.gone, K4.gone + 50)}>
				<WaterChip a={g.mid(-1)} b={[g.mid(-1)[0], Y - 140]} at={K4.gone} move={K4.gone + 4} out={K4.gone + 34} size={26} />
				<WaterChip a={g.mid(6)} b={[g.mid(6)[0], Y - 140]} at={K4.gone} move={K4.gone + 4} out={K4.gone + 34} size={26} />
			</g>
			<Tag x={rg.cx[3]} y={250} text="one of each, minus the water" at={K4.gone + 8} out={K4.t3} size={26} color={WATER} fill={WATER_SOFT} anchor="middle" />
			<Tracer g={g} idx={[0, 1, 2, 3, 4, 5, 6]} at={tr} out={K4.brackets + 10} />
			<Row toks={PET_U} x={xs} y={Y} s={S} at={sw - 2} contL={50} contR={50} br={{a: 0, b: 6, at: K4.brackets}} />
			<CT x={960} y={720} text="[–O–CH_2CH_2–O–CO–C_6H_4–CO–]ₙ" size={44} anchor="middle" at={K4.brackets + 26} />
			<g opacity={nbO} transform={`translate(0,${slideUp * 90})`}>
				<Sx x={nb[0]} y={Y + 15} text="O" size={40 * S} color={RED} anchor="middle" weight={800} at={-1000} />
			</g>
			<Tag x={nb[0] + 40} y={Y + 90} text="ends fit: C=O carbon to O" at={K4.fit} out={K4.two} size={26} color={NAVY} fill="#e7edf8" />
			<Ring2 c={[(rg.cx[3] + rg.cx[4]) / 2, Y - 16]} rx={80} ry={68} at={K4.two} label="1" />
			<Ring2 c={[(rg.cx[6] + nb[0]) / 2, Y - 16]} rx={80} ry={68} at={K4.two + 10} label="2" />
			<Tag x={960} y={800} text="two ester links per repeat unit" at={K4.two + 14} size={30} color={RED} fill="#f9e1dc" anchor="middle" />
			<Tag x={960} y={890} text="about two H₂O per repeat unit (end groups ignored)" at={K4.two + 40} out={K4.two + 130} size={22} anchor="middle" />
			{void K4.take}
		</Overlay>
	);
};

// ---------- 5. Nylon 6,6 ----------
const K5 = cues(sc('nylon'), {swap: 'Now swap', diamine: 'a diamine', hex: 'Hexane one', hH: 'loses an H', oh: 'loses O H', water: 'water leaves', amide: 'amide link', nylon: 'nylon six', six: 'six carbons', runs: 'Its repeat', n1: 'runs N H', c6: 'six C H', n2: 'N H then', co1: 'then C double', c4: 'four C H', co2: 'and C double'});
export const SceneNylon: React.FC = () => {
	const f = useCurrentFrame();
	const X = 110, Y = 470, S = 0.6;
	const pg = joinGeo(HMDA, ADIP, X, Y, S);
	const gH = rowGeo(HMDA, X, Y, S);
	const gA = rowGeo(ADIP, pg.cx[9] - rowGeo(ADIP, 0, Y, S).cx[2] + 250 * S, Y, S);
	const sw = K5.runs + 4;
	const ruX = pg.cx[1] - pg.hw[1] - 50 * S;
	const rg = rowGeo(N66_U, ruX, Y, S, 'start', 50, 50);
	const trAt = [K5.n1, K5.c6, K5.c6 + 4, K5.c6 + 8, K5.c6 + 12, K5.c6 + 16, K5.c6 + 20, K5.n2, K5.co1, K5.c4, K5.c4 + 5, K5.c4 + 10, K5.c4 + 15, K5.co2];
	const glow: Record<number, [number, number?, string?]> = {};
	trAt.forEach((t, i) => { glow[i] = [t, K5.co2 + 30, '#d5e8f6']; });
	return (
		<Overlay>
			<TaskLine text="Nylon" at={0} size={54} y={130} />
			<g opacity={1 - prog(f, sw, 8)}>
				<JoinPair L={HMDA} R={ADIP} x={X} y={Y} s={S} at={K5.diamine - 4} atR={K5.hex + 20} T={{glowR: K5.oh, glowL: K5.hH, join: K5.water, ring: K5.amide, nRing: true}} water={[pg.mid(8)[0], 640]} tally={[220, 900]} />
				<Tag x={gH.cx[5]} y={250} text="diamine: NH₂ at each end" at={K5.diamine + 6} out={K5.amide} size={26} color={INDIGO} fill="#e2e5f7" anchor="middle" />
				<EndTag c={[(gH.cx[0] + gH.cx[1]) / 2, Y + 20]} rx={64} ry={64} at={K5.diamine + 10} out={K5.water} />
				<EndTag c={[(gH.cx[8] + gH.cx[9]) / 2, Y + 20]} rx={64} ry={64} at={K5.diamine + 16} out={K5.water} />
				<Sx x={gH.cx[4]} y={620} text="hexane-1,6-diamine" size={26} color={INK} anchor="middle" weight={700} at={K5.hex} opacity={dimAt(f, K5.amide, 0.4)} />
				<Sx x={gA.cx[5]} y={620} text="hexanedioic acid" size={26} color={INK} anchor="middle" weight={700} at={K5.hex + 20} />
				<Tag x={1300} y={250} text="c11: amide link –CO–NH–" at={K5.amide + 8} out={K5.nylon} size={24} />
				<CCount pts={pg.cx.slice(2, 8).map(x => [x, Y] as V2)} at={K5.six} step={7} out={sw} dy={-56} />
				<CCount pts={pg.cx.slice(9, 15).map(x => [x, Y] as V2)} at={K5.six + 44} step={7} out={sw} red={[0, 5]} dy={-118} />
			</g>
			<Tag x={96} y={790} text="6,6: six carbons in each monomer" at={K5.six} out={K5.runs} size={28} color={AMB} fill="#fbedd0" />
			<Plate p={ROPE} cx={1740} top={280} h={150} at={K5.nylon} />
			<Row toks={N66_U} x={ruX} y={Y} s={S} at={sw - 2} contL={50} contR={50} br={{a: 0, b: 13, at: sw}} glow={glow} />
			<Ring2 c={[(rg.cx[7] + rg.cx[8]) / 2, Y - 16]} rx={64} ry={60} at={sw - 2} color={RED} o={0.8} />
			<Tracer g={rg} idx={N66_U.map((_, i) => i)} at={trAt} out={K5.co2 + 40} dy={110} />
			<CT x={960} y={740} text="[–NH–(CH_2)_6–NH–CO–(CH_2)_4–CO–]ₙ" size={44} anchor="middle" at={K5.co2} />
			<Tag x={960} y={800} text="polyamide: amide links" at={K5.co2 + 12} size={30} color={TEAL} fill="#dff2ef" anchor="middle" />
			{void K5.swap}{void GREY}
		</Overlay>
	);
};
