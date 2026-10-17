import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {AN_INK, CAT_INK, COOL, GLOW, HOT, Heading, LEFT, kf, sc} from './common';
import {SAT, THERMO_HOT, UNSAT} from './assets';
import {Arrow, EqLine, ExchangeLens, Fade, Falling, Ion, KName, Ledger, Overlay, PicH, QKGauge, RateBars, Readout, Ring, Sx, TEAL, Tray, TwoWay, eCentre, platePt} from './parts';
import type {Ln} from './parts';
import {NACL_EQ} from './s1';

// ---------- 8a. Keep adding salt: unsaturated to saturated ----------
const SA = 'saturating';
const K9 = cues(sc(SA), {keep: 'keep adding salt', same: 'same temperature', first: 'At first', disappears: 'every crystal disappears', unsat: 'is unsaturated', eventually: 'Eventually', stays: 'stays on the bottom', sat: "Now it's saturated", most: 'holds the most', stopped: 'has stopped', has: 'But has it'});
const B9 = {x: 260, y: 230, h: 720};
export const SceneSaturating: React.FC = () => {
	const f = useCurrentFrame();
	const q = prog(f, K9.stays, 40);
	const [x0] = platePt(UNSAT, B9.x, B9.y, B9.h, 0.2, 0);
	const [x1] = platePt(UNSAT, B9.x, B9.y, B9.h, 0.78, 0);
	const surf = platePt(UNSAT, B9.x, B9.y, B9.h, 0.5, 0.29)[1];
	const floor = platePt(UNSAT, B9.x, B9.y, B9.h, 0.5, 0.86)[1];
	return (
		<>
			<Heading text="Keep adding salt" at={4} size={60} />
			<Overlay>
				<PicH p={UNSAT} x={B9.x} y={B9.y} h={B9.h} o={1 - q} />
				{q > 0.01 ? <PicH p={SAT} x={B9.x} y={B9.y} h={B9.h} o={q} /> : null}
				<Falling x0={x0} x1={x1} yTop={170} ySurf={surf} yFloor={floor} at={K9.keep} until={K9.unsat + 30} every={16} dissolve seed={4} />
				<Falling x0={x0} x1={x1} yTop={170} ySurf={surf} yFloor={floor} at={K9.eventually} until={K9.sat} every={12} dissolve={false} seed={9} />
				<Sx x={960} y={300} text="same water, same temperature" size={40} color={INK_SOFT} hand at={K9.same} />
				<Sx x={960} y={440} text="unsaturated:" size={48} color={INK} weight={700} at={K9.unsat} />
				<Sx x={960} y={492} text="all the solid dissolves" size={42} color={INK} hand at={K9.unsat + 8} />
				<Sx x={960} y={610} text="saturated:" size={48} color={TEAL} weight={700} at={K9.sat} />
				<Sx x={960} y={662} text="the most it can hold at this temperature" size={42} color={TEAL} hand at={K9.most} />
				<Sx x={960} y={830} text="stopped?" size={60} color={AMBER_INK} hand at={K9.stopped} />
				<Arrow x1={950} y1={820} x2={700} y2={floor - 10} at={K9.stopped + 4} color={AMBER_INK} width={4} />
				<Sx x={960} y={900} text="but has it?" size={44} color={INK} hand at={K9.has} />
				{void K9.first}{void K9.disappears}
			</Overlay>
		</>
	);
};

// ---------- 8b. Two rates meet: dynamic equilibrium ----------
const RM = 'rates-meet';
const K10 = cues(sc(RM), {zoom: 'Zoom in', leaving: 'keep leaving', steady: 'steady rate', bump: 'bump into', cryst: "That's crystallising", few: 'few dissolved ions', slow: 'crystallising is slow', more: 'As more ions dissolve', often: 'more often', speeds: 'speeds up', equal: 'rates are equal', still: 'still leave and rejoin', same: 'stays the same', dyn: 'dynamic equilibrium', twoway: 'two-way arrow', k: 'And its K', left: 'solid left out', ksp: 'is the Ksp'});
const EQ10 = {x: 96, y: 262, s: 50};
const rate10 = (f: number) => kf(f, [[0, 0], [K10.bump, 0.15], [K10.few, 0.22], [K10.more, 0.45], [K10.speeds, 0.82], [K10.equal, 1]], false);
const ndiss10 = (f: number) => kf(f, [[0, 2], [K10.few, 3], [K10.more, 6], [K10.equal, 12]], false);
export const SceneRatesMeet: React.FC = () => {
	const f = useCurrentFrame();
	const items = NACL_EQ([-100, -100, -100, -100, -100]).map((it, i) => (i === 1 ? {...it, rev: K10.twoway} : it));
	const pile = platePt(SAT, 96, 330, 280, 0.45, 0.86);
	const r = rate10(f);
	return (
		<>
			<Heading text="Two rates meet" at={4} size={60} />
			<Overlay>
				<EqLine items={items} x={EQ10.x} y={EQ10.y} size={EQ10.s} />
				<PicH p={SAT} x={96} y={330} h={280} />
				<Fade at={K10.zoom}>
					<circle cx={pile[0]} cy={pile[1]} r={22} fill="none" stroke={INK} strokeWidth={3} />
					<path d={`M${pile[0] + 16},${pile[1] - 16} L${520},${470} M${pile[0] + 16},${pile[1] + 16} L${520},${810}`} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 6" />
				</Fade>
				<ExchangeLens cx={740} cy={640} r={270} at={K10.zoom} from={K10.leaving} to={1176} leaveEvery={40} rate={rate10} nDiss={ndiss10} title="the crystal surface, close up" titleAt={K10.zoom + 10} />
				<Fade at={K10.leaving} out={K10.k - 6}>
					<RateBars x0={1200} base={760} scale={30} fwd={10} rev={r * 10} at={K10.leaving} bw={110} gx={230} axisLabel={null} titles={false} unlabelled eqAt={K10.equal} maxH={320} />
					<Sx x={1255} y={808} text="dissolving" size={38} color="#1f6fb2" anchor="middle" hand at={K10.leaving} />
					<Sx x={1255} y={848} text="(steady)" size={30} color={INK_SOFT} anchor="middle" hand at={K10.steady} />
					<Sx x={1485} y={808} text="crystallising" size={38} color={AMBER_INK} anchor="middle" hand at={K10.bump} />
					<Sx x={1485} y={848} text="(speeds up)" size={30} color={INK_SOFT} anchor="middle" hand at={K10.speeds} />
				</Fade>
				<Sx x={1120} y={330} text="crystallising: dissolved ions rejoin the solid" size={34} color={AMBER_INK} hand at={K10.cryst} out={K10.equal - 10} />
				<Sx x={1120} y={380} text="few dissolved ions: few hits, so slow" size={32} color={INK} hand at={K10.few} out={K10.more} />
				<Sx x={1120} y={380} text="more dissolved ions: more hits" size={32} color={INK} hand at={K10.often} out={K10.equal - 10} />
				<Sx x={1120} y={900} text="equal rates, not stopped" size={42} color={TEAL} hand at={K10.equal + 12} />
				<Sx x={1120} y={956} text="amount dissolved stays the same: dynamic equilibrium" size={34} color={INK} hand at={K10.same} />
				{/* Ksp: the solid is left out */}
				<Tray x={1180} y={420} w={460} at={K10.k} items={[{t: 'NaCl(s)', at: K10.left, from: eCentre(items, 0, EQ10.s, EQ10.x, EQ10.y)}]} />
				<KName x={1180} y={720} name="sp" size={52} at={K10.ksp} />
				<Sx x={1264} y={720} text="= [Na^{+}][Cl^{-}]" size={48} color={INK} weight={700} at={K10.ksp + 6} />
				<Readout x={1180} y={760} w={470} text="calculations: a later video" at={K10.ksp + 20} size={30} color={INK_SOFT} />
				{void K10.slow}{void K10.still}{void K10.dyn}
			</Overlay>
		</>
	);
};

// ---------- 9. The evidence: a radioactive tracer ----------
const TR = 'tracer';
const K11 = cues(sc(TR), {know: 'How do we know', radio: 'radioactive ions', track: 'detector can track', sat: 'saturated solution of the same salt', kbr: 'potassium bromide', amount: 'amount dissolved', turns: 'turns up', insol: 'in the solution', leaving: 'keep leaving', rejoin: 'keep rejoining'});
const B11 = {x: 120, y: 250, h: 520};
export const SceneTracer: React.FC = () => {
	const f = useCurrentFrame();
	const land = platePt(SAT, B11.x, B11.y, B11.h, 0.5, 0.84);
	const d = prog(f, K11.radio + 6, 36);
	const cy = 200 + (land[1] - 200) * d;
	const meter = prog(f, K11.insol, 140);
	return (
		<>
			<Heading text="The evidence: a radioactive tracer" at={4} size={58} />
			<Overlay>
				<PicH p={SAT} x={B11.x} y={B11.y} h={B11.h} />
				<Sx x={B11.x} y={830} text="saturated potassium bromide, KBr" size={34} color={INK} weight={700} at={K11.kbr} />
				{/* labelled crystal drops onto the pile */}
				{f >= K11.radio ? (
					<g>
						{[[-11, -11], [11, -11], [-11, 11], [11, 11]].map(([dx, dy], i) => <Ion key={i} x={land[0] + dx} y={cy + dy} kind={i === 0 || i === 3 ? '+' : '-'} r={i === 0 || i === 3 ? 10 : 13} glow={1} />)}
					</g>
				) : null}
				<Sx x={600} y={300} text="radioactive ions: a detector can track them" size={36} color={'#2f8a2a'} hand at={K11.track} />
				<Readout x={600} y={350} w={420} text="mass of solid: same" at={K11.amount} />
				<Readout x={1050} y={350} w={460} text="concentration: same" at={K11.amount + 8} />
				<ExchangeLens cx={860} cy={690} r={210} at={K11.turns - 20} from={K11.turns} to={701} leaveEvery={34} rate={() => 1} nDiss={() => 9} glowLeave glowN={f2 => kf(f2, [[K11.turns, 0], [K11.insol + 60, 3], [701, 7]], false)} title="in the solution" titleAt={K11.insol} />
				{/* radioactivity meter */}
				<Fade at={K11.insol}>
					<rect x={1180} y={560} width={60} height={340} rx={10} fill="#fffdf8" stroke={INK} strokeWidth={4} />
					<rect x={1186} y={894 - 328 * meter} width={48} height={328 * meter} rx={6} fill={GLOW} />
					<Sx x={1210} y={500} text="radioactivity" size={30} color={'#2f8a2a'} anchor="middle" hand at={K11.insol} />
					<Sx x={1210} y={534} text="in solution" size={30} color={'#2f8a2a'} anchor="middle" hand at={K11.insol} />
					<Sx x={1210} y={946} text="0 at the start" size={26} color={INK_SOFT} anchor="middle" hand at={K11.insol + 10} />
				</Fade>
				<TwoWay x={1340} y={700} w={200} at={K11.leaving} fwd="leave the solid" rev="rejoin it" />
				<Sx x={1340} y={860} text="the swapping never stops" size={38} color={TEAL} hand at={K11.rejoin + 10} />
				{void K11.know}{void K11.sat}{void CAT_INK}{void AN_INK}
			</Overlay>
		</>
	);
};

// ---------- 10. The added-solid trap (and why temperature is different) ----------
const AS = 'added-solid';
const K12 = cues(sc(AS), {trap: 'One trap', more: 'more salt', doesnt: "solution doesn't change", joins: 'joins the pile', holds: 'already holds', kterms: 'In K terms', left: 'left out', q: "doesn't change Q", eq: 'equals K', noshift: 'no shift', temp: 'Temperature is different', changesK: 'changes K itself', kno3: 'Potassium nitrate', endo: 'dissolves endothermically', warming: 'warming its', raises: 'raises K', moreD: 'and more dissolves'});
const B12 = {x: 96, y: 250, h: 420};
const LN12: Ln = {y: 640, x0: 1220, x1: 1740, lo: -1, hi: 1};
const B12b = {x: 1000, y: 300, h: 400};
export const SceneAddedSolid: React.FC = () => {
	const f = useCurrentFrame();
	const [x0] = platePt(SAT, B12.x, B12.y, B12.h, 0.25, 0);
	const [x1] = platePt(SAT, B12.x, B12.y, B12.h, 0.75, 0);
	const surf = platePt(SAT, B12.x, B12.y, B12.h, 0.5, 0.29)[1];
	const floor = platePt(SAT, B12.x, B12.y, B12.h, 0.5, 0.85)[1];
	const heap = prog(f, K12.joins - 20, 50);
	const [hx] = platePt(SAT, B12.x, B12.y, B12.h, 0.5, 0);
	const items = NACL_EQ([K12.kterms, K12.kterms, K12.kterms, K12.kterms, K12.kterms]).map((it, i) => (i === 1 ? {...it, rev: -100} : it));
	const outA = K12.temp - 4;
	const dis = 0.6 * prog(f, K12.warming + 20, K12.moreD + 40 - K12.warming - 20);
	return (
		<>
			<Heading text="One trap: adding more solid" at={4} size={58} />
			<Overlay>
				<PicH p={SAT} x={B12.x} y={B12.y} h={B12.h} />
				<Falling x0={x0} x1={x1} yTop={200} ySurf={surf} yFloor={floor} at={K12.more} until={K12.joins + 20} every={8} dissolve={false} seed={6} />
				{heap > 0.01 ? <path d={`M${hx - 110 * heap},${floor + 6} Q${hx},${floor + 6 - 46 * heap} ${hx + 110 * heap},${floor + 6} Z`} fill="#ffffff" stroke="#9aa7b0" strokeWidth={2} opacity={0.95} /> : null}
				<Sx x={B12.x} y={712} text="saturated NaCl, solid present" size={30} color={INK} weight={700} at={2} />
				<Readout x={B12.x} y={750} w={410} text="concentration: same" at={K12.doesnt} />
				<Sx x={B12.x} y={866} text="the extra solid joins the pile" size={34} color={INK} hand at={K12.joins} />
				<Sx x={B12.x} y={910} text="the water already holds the most it can" size={30} color={INK_SOFT} hand at={K12.holds} />
				{/* K terms: the solid is left out, Q = K */}
				<Fade at={K12.kterms} out={outA}>
					<EqLine items={items} x={600} y={300} size={48} />
					<Tray x={600} y={360} w={520} at={K12.left - 6} items={[{t: 'NaCl(s)', at: K12.left, from: eCentre(items, 0, 48, 600, 300)}, {t: 'NaCl(s)', at: K12.q, from: [260, 560]}]} />
					<Sx x={600} y={590} text="more solid: Q does not change" size={36} color={INK} hand at={K12.q} />
					<QKGauge ln={LN12} at={K12.eq - 10} q={() => 1} qLabel="Q = K" />
					<Sx x={1220} y={880} text="added solid: no shift" size={42} color={TEAL} hand at={K12.noshift} />
				</Fade>
				{/* temperature changes K itself: warm saturated KNO3 */}
				<Sx x={1000} y={240} text="temperature is different: it changes K" size={40} color={INK} hand at={K12.temp} />
				<Fade at={K12.kno3}>
					<PicH p={SAT} x={B12b.x} y={B12b.y} h={B12b.h} o={1 - dis} />
					<PicH p={UNSAT} x={B12b.x} y={B12b.y} h={B12b.h} o={dis} />
					<Sx x={B12b.x} y={750} text="saturated KNO_3: dissolving is endothermic" size={32} color={INK} weight={700} at={K12.endo} />
				</Fade>
				<Fade at={K12.warming}><PicH p={THERMO_HOT} x={1380} y={360} h={300} /></Fade>
				<Sx x={1398} y={700} text="warm it" size={34} color={HOT} anchor="middle" hand at={K12.warming + 6} />
				<Sx x={B12b.x} y={808} text="heat-absorbing: heat it, K rises" size={38} color={TEAL} hand at={K12.raises} />
				<Fade at={K12.moreD}>
					{[[1490, 96, '20 C', '32 g'], [1640, 192, '40 C', '64 g']].map(([x, h, t, g], i) => (
						<g key={i}>
							<rect x={x as number} y={660 - (h as number) * prog(f, K12.moreD + i * 10, 20)} width={90} height={(h as number) * prog(f, K12.moreD + i * 10, 20)} rx={6} fill="#dcecf7" stroke={COOL} strokeWidth={4} />
							<Sx x={(x as number) + 45} y={650 - (h as number) - 10} text={g as string} size={32} color={COOL} anchor="middle" weight={800} at={K12.moreD + i * 10 + 10} />
							<Sx x={(x as number) + 45} y={700} text={t as string} size={30} color={INK} anchor="middle" weight={700} at={K12.moreD} />
						</g>
					))}
					<path d={`M1470,660 L1750,660`} stroke={INK} strokeWidth={4} />
					<Sx x={1610} y={900} text="dissolved per 100 g water" size={28} color={INK_SOFT} anchor="middle" hand at={K12.moreD} />
				</Fade>
				{void K12.trap}{void K12.changesK}{void LEFT}
			</Overlay>
		</>
	);
};

// ---------- 11. Memory aids ----------
const MA = 'memory-aids';
const K13 = cues(sc(MA), {two: 'Two lines', lattice: 'Lattice costs', pays: 'hydration pays', whichever: 'Whichever is bigger', warms: 'warms or cools', sat: 'saturated means', equal: 'equal rates', not: 'not stopped'});
export const SceneAids: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<div style={{position: 'absolute', left: 560, top: 250}}><HandText text="Lattice costs, hydration pays." at={K13.lattice} size={80} cps={26} color={TEAL} /></div>
			<div style={{position: 'absolute', left: 560, top: 650}}><HandText text="Saturated means equal rates, not stopped." at={K13.sat} size={68} cps={30} color={TEAL} /></div>
			<Overlay>
				<Sx x={96} y={170} text="two lines to remember" size={44} color={INK_SOFT} hand at={K13.two} />
				<Ledger x={170} base={560} h1={200} h2={260} bw={70} gap={50} p1={prog(f, K13.lattice, 20)} p2={prog(f, K13.pays, 20)} pn={prog(f, K13.whichever, 20)} s={0.8} />
				<Sx x={205} y={330} text="costs" size={38} color={HOT} anchor="middle" hand at={K13.lattice + 6} />
				<Sx x={325} y={660} text="pays" size={38} color={COOL} anchor="middle" hand at={K13.pays + 6} />
				<Sx x={560} y={440} text="bigger payback: the water warms. Bigger cost: the water cools." size={38} color={INK} hand at={K13.whichever} />
				<PicH p={SAT} x={150} y={720} h={260} />
				<Sx x={560} y={860} text="same temperature; solid still present" size={36} color={INK_SOFT} hand at={K13.not + 10} />
				{void K13.warms}{void K13.equal}{void DrawPath}{void Ring}{void INK}{void LEFT}
			</Overlay>
		</>
	);
};
