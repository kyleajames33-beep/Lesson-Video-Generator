// M6 C01 scenes 6 to 10: ammonia under Arrhenius, the two other failures, Brønsted-Lowry, HCl in water, ammonia in water.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog, rng} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {AMMONIA, LITMUS, SODA_BOX, TUBE, TUBE_G} from './assets';
import {
	ACID, ACID_INK, AChip, AMBER, AMBER_INK, Arrow, Atom, BASE, BASE_INK, Card, DrawPath, EqBox, EqLine, EqUnder, FTile, Fade, GREYT, GREY_INK, HopArrow, INK, INK_SOFT, Ion, LensFrame,
	Mistake, Mol, Note, Overlay, PROTON, PROTON_INK, PairAt, PlateAt, Proton, ProtonHop, Ring, RoleRing, Sx, TEAL, Tick, Timeline, eAnchor, eSpan, eq, fitSize, eWidth, giveAt, hopState, mw, picW, platePt, pulseAt, slotAt, smooth, tileW, vis,
} from './parts';

// ---------- 6. Arrhenius and ammonia: a made-up compound ----------
const H6 = 'arrhenius-ammonia';
const K6 = cues(sc(H6), {still: 'still works', back: 'back to ammonia', own: 'its own hydroxide', way: 'the way sodium hydroxide', none: 'has none to release', fit: 'To make it fit', ammOH: 'ammonium hydroxide', nh4oh: 'N H four O H', noone: 'no one has ever isolated', made: 'made-up compound', gap: 'cover a gap'});
export const SceneArrNH3: React.FC = () => {
	const f = useCurrentFrame();
	const out = smooth(prog(f, K6.way, 34));
	const bh = 480, bx = 1440, by = 520;
	const [lx, ly] = platePt(AMMONIA, bx, by, bh, 0.5, 0.56);
	const stamp = prog(f, K6.ammOH, 10);
	const sS = 1 + 0.5 * (1 - smooth(prog(f, K6.ammOH, 14)));
	return (
		<>
			<Heading text="Ammonia under Arrhenius" at={4} size={58} />
			<Overlay>
				<Timeline fill={[-1000, -1000, -1000]} stamp={[-1000, -1000]} />
				<Tick x={1010} y={488} at={K6.still} s={34} />
				<Note x={1040} y={500} text="still works: acids and hydroxide bases in water" size={32} color={TEAL} at={K6.still} />
				{/* left: NaOH releases its own OH- */}
				<Card x={96} y={560} w={600} h={330} at={K6.own - 10} />
				<FTile x={140} y={700} formula="NaOH" size={58} at={K6.own - 6} />
				<Ion x={330 + out * 240} y={680 - out * 40} kind="-" r={30} label="OH^{-}" fill={BASE} o={prog(f, K6.own - 6, 10)} />
				<Arrow x1={340} y1={760} x2={560} y2={720} at={K6.way} color={BASE_INK} width={4} />
				<Note x={140} y={830} text="releases its own OH^{-}" size={36} color={BASE_INK} at={K6.way + 6} />
				{/* right: NH3 has none */}
				<Card x={740} y={560} w={640} h={330} at={K6.back} />
				<Mol x={900} y={700} m="NH3" s={1.6} o={prog(f, K6.back, 12)} />
				<DrawPath d="M1010,720 L1180,690" at={K6.none} dur={14} color={GREYT} width={4} dash="10 8" />
				<Sx x={1230} y={710} text="?" size={80} color={GREYT} anchor="middle" hand at={K6.none + 6} />
				<Note x={790} y={830} text="no OH^{-} to release" size={36} color={AMBER_INK} at={K6.none} />
				<PlateAt p={AMMONIA} x={bx} y={by} h={bh} at={K6.back} />
				<Sx x={lx} y={ly - 10} text="ammonia solution" size={22} color={INK} anchor="middle" weight={700} at={K6.back + 6} />
				<Sx x={lx} y={ly + 22} text="NH_3(aq)" size={28} color={INK} anchor="middle" weight={800} at={K6.back + 6} />
				{stamp > 0.01 ? (
					<g opacity={stamp} transform={`translate(${lx},${ly + 70}) rotate(-6) scale(${sS})`}>
						<rect x={-78} y={-30} width={156} height={56} rx={10} fill="#e9e5dd" stroke={GREY_INK} strokeWidth={3} strokeDasharray={f >= K6.made ? '9 6' : undefined} />
						<Sx x={0} y={10} text="NH_4OH" size={32} color={GREY_INK} anchor="middle" weight={800} at={-1000} />
					</g>
				) : null}
				<Note x={lx} y={by + bh + 50} text="never isolated" size={36} color={AMBER_INK} anchor="middle" at={K6.made} />
				<Note x={96} y={960} text="chemists kept writing" size={34} color={INK_SOFT} at={K6.fit} out={K6.made - 10} />
				<Note x={96} y={1004} text={'"ammonium hydroxide", NH_4OH'} size={34} color={INK_SOFT} at={K6.nh4oh} out={K6.made - 10} />
				<Mistake x={96} y={930} text="Arrhenius was wrong" at={K6.made + 10} note="limited, not wrong" size={34} />
				{void K6.noone}{void K6.gap}
			</Overlay>
		</>
	);
};

// ---------- 7. Two more failures: carbonates, and a gas reaction ----------
const H7 = 'more-failures';
const K7 = cues(sc(H7), {two: 'Two more problems', soda: 'Baking soda', washing: 'washing soda', basic: 'make water basic', either: "don't contain hydroxide either", tube: 'glass tube', ring: 'white ring', salt: 'making a salt', direct: 'react directly', water: 'without water', cant: "can't describe it"});
export const SceneFailures: React.FC = () => {
	const f = useCurrentFrame();
	const tx = 640, ty = 640, tw2 = 1180;
	const th = tw2 * (344 / 1600);
	const y0 = ty + th * TUBE_G.axisV;
	const ringX = tx + tw2 * TUBE_G.ringU;
	const lX = tx + tw2 * 0.11, rX = tx + tw2 * 0.89;
	const r = rng(9);
	const dots = Array.from({length: 16}, (_, i) => ({side: i % 2, d: r() * 40, dy: (r() - 0.5) * 16, sp: 0.8 + r() * 0.4}));
	return (
		<>
			<Heading text="Two more failures for Arrhenius" at={4} size={58} />
			<Overlay>
				<Timeline fill={[-1000, -1000, -1000]} stamp={[-1000, -1000, K7.cant]} />
				<PlateAt p={SODA_BOX} x={110} y={490} h={270} at={K7.soda - 6} />
				<Note x={96} y={810} text="baking soda, washing soda" size={34} at={K7.washing} />
				<FTile x={96} y={892} formula="NaHCO_3" size={42} at={K7.soda} />
				<FTile x={340} y={892} formula="Na_2CO_3" size={42} at={K7.washing} />
				<Note x={96} y={970} text="no OH^{-} in either" size={34} color={AMBER_INK} at={K7.either} />
				<Note x={96} y={1016} text="solution: basic" size={34} color={BASE_INK} at={K7.basic} />
				{/* the tube */}
				<PairAt a={TUBE.clear} b={TUBE.ring} x={tx} y={ty} h={th} at={K7.tube - 10} swap={K7.ring} dur={36} />
				{dots.map((d, i) => {
					const t0 = K7.tube + d.d;
					const u = Math.min(1, Math.max(0, (f - t0) / ((K7.ring - K7.tube) * d.sp)));
					if (f < t0 || u >= 1) return null;
					const x = d.side === 0 ? lX + (ringX - lX) * u : rX - (rX - ringX) * u;
					return <circle key={i} cx={x} cy={y0 + d.dy} r={6} fill={d.side === 0 ? '#5b7fd1' : '#5fae62'} opacity={0.75 * Math.sin(u * Math.PI)} />;
				})}
				<Note x={lX} y={y0 - 70} text="NH_3(g)" size={38} color="#3f63b6" anchor="middle" hand={false} at={K7.tube} />
				<Note x={rX} y={y0 - 70} text="HCl(g)" size={38} color="#3f8a43" anchor="middle" hand={false} at={K7.tube} />
				<Ring cx={ringX} cy={y0} rx={40} ry={64} at={K7.ring + 24} color={AMBER} seed={3} />
				<Arrow x1={ringX - 120} y1={y0 + 170} x2={ringX - 16} y2={y0 + 60} at={K7.ring + 30} color={AMBER_INK} width={4} />
				<Note x={ringX - 420} y={y0 + 200} text="white ring: NH_4Cl(s)" size={38} color={AMBER_INK} at={K7.ring + 30} />
				<Note x={ringX - 80} y={546} text="acid + base make a salt" size={38} color={INK} anchor="middle" at={K7.salt} />
				<AChip x={tx + 40} y={y0 + 250} text="gas reaction: no aqueous reaction medium" size={36} color={TEAL} at={K7.water} />
				{void K7.two}{void K7.direct}
			</Overlay>
		</>
	);
};

// ---------- 8. Brønsted and Lowry: donate and accept a proton ----------
const H8 = 'bronsted-lowry';
const K8 = cues(sc(H8), {y1923: 'In 1923', bron: 'Johannes', lowry: 'Thomas Lowry', indep: 'independently published', stop: 'Stop asking', moves: 'Ask what moves', donor: 'proton donor', gives: 'gives away a hydrogen ion', acceptor: 'proton acceptor', takes: 'it takes one', hion: 'A hydrogen ion is', lost: 'lost its only electron', proton: "it's just a proton"});
export const SceneBL: React.FC = () => {
	const f = useCurrentFrame();
	const ax = 1200, bx = 1640, by = 700;
	const hop1 = K8.moves + 6, hop2 = K8.takes;
	const ex = 200, ey = 930;
	const eLost = smooth(prog(f, K8.lost, 30));
	const ang = f * 0.08;
	return (
		<>
			<Heading text="Model 4: follow the proton" at={4} size={58} />
			<Overlay>
				<Timeline fill={[-1000, -1000, -1000, K8.bron]} stamp={[-1000, -1000, -1000]} extra={<Fade at={K8.indep}><Sx x={1670} y={190} text="independently" size={30} color={TEAL} hand at={-1000} /></Fade>} />
				<Fade at={K8.stop} out={K8.moves + 20}>
					<Sx x={96} y={520} text="which ions appear in water?" size={40} color={GREY_INK} hand at={-1000} />
					<DrawPath d="M90,508 L560,500" at={K8.stop + 14} dur={10} color={AMBER_INK} width={5} />
				</Fade>
				<Note x={96} y={520} text="ask what moves" size={44} color={PROTON_INK} at={K8.moves + 10} />
				<Card x={96} y={580} w={860} h={240} at={K8.donor - 6} stroke={TEAL} />
				<Pieces2 y={650} parts={[['Acid: ', K8.donor, ACID_INK], ['proton (H^{+}) donor', K8.donor + 6, INK]]} />
				<Pieces2 y={730} parts={[['Base: ', K8.acceptor, BASE_INK], ['proton (H^{+}) acceptor', K8.acceptor + 6, INK]]} />
				<Note x={130} y={795} text="any reaction, in water or not" size={34} color={TEAL} at={K8.acceptor + 30} />
				{/* acid box to base box */}
				<Fade at={K8.moves - 4}>
					<rect x={ax - 110} y={by - 70} width={220} height={140} rx={22} fill="#fff8ea" stroke={ACID} strokeWidth={5} />
					<Sx x={ax} y={by + 56} text="acid" size={34} color={ACID_INK} anchor="middle" hand at={-1000} />
					<rect x={bx - 110} y={by - 70} width={220} height={140} rx={22} fill="#f4eefb" stroke={BASE} strokeWidth={5} />
					<Sx x={bx} y={by + 56} text="base" size={34} color={BASE_INK} anchor="middle" hand at={-1000} />
				</Fade>
				{f < hop1 || (f >= hop1 + 26 && f < hop2) ? <Proton x={f < hop1 ? ax : bx} y={by - 12} s={1.2} o={f < hop2 ? prog(f, K8.moves - 4, 10) : 0} /> : null}
				<ProtonHop a={[ax, by - 12]} b={[bx, by - 12]} at={hop1} s={1.2} />
				{f >= hop2 ? <ProtonHop a={[ax, by - 12]} b={[bx, by - 12]} at={hop2} s={1.2} /> : null}
				{f >= hop2 + 26 ? <Proton x={bx} y={by - 12} s={1.2} /> : null}
				<Note x={ax} y={by - 96} text="gives H^{+}" size={32} color={ACID_INK} anchor="middle" at={K8.gives} />
				<Note x={bx} y={by - 96} text="takes H^{+}" size={32} color={BASE_INK} anchor="middle" at={K8.takes} />
				{/* a hydrogen atom loses its electron */}
				<Fade at={K8.hion - 4}>
					<circle cx={ex} cy={ey} r={80} fill="none" stroke={INK_SOFT} strokeWidth={2} strokeDasharray="5 6" opacity={1 - eLost} />
					<circle cx={ex + Math.cos(ang) * (70 + eLost * 260)} cy={ey + Math.sin(ang) * 70 * (1 - eLost) - eLost * 80} r={9} fill="#e2c13b" stroke={INK} strokeWidth={2} opacity={1 - prog(f, K8.lost + 24, 10)} />
					<Proton x={ex} y={ey} s={1.6} label={f >= K8.lost + 10} />
					{f < K8.lost + 10 ? <Sx x={ex} y={ey + 10} text="H" size={30} color="#ffffff" anchor="middle" weight={800} at={-1000} /> : null}
				</Fade>
				<Note x={330} y={945} text="H atom − electron = H^{+} = proton" size={44} color={PROTON_INK} at={K8.proton} />
				{void K8.y1923}{void K8.lowry}
			</Overlay>
		</>
	);
};
const Pieces2: React.FC<{y: number; parts: [string, number, string][]}> = ({y, parts}) => {
	let x = 130;
	return <>{parts.map(([t, at, c], i) => { const px = x; x += mwh(t); return <Sx key={i} x={px} y={y} text={t} size={46} color={c} weight={800} at={at} />; })}</>;
};
const mwh = (t: string) => mw(t, 46, false, 800);

// ---------- 9. Hydrogen chloride in water: hydronium ----------
const H9 = 'hcl-water';
const K9 = cues(sc(H9), {watch: 'Watch it work', diss: 'dissolves in water', moves: 'One hydrogen moves', acid: 'is the acid', base: 'water is the base', h3o: 'H three O plus', hydronium: 'the hydronium ion', means: 'H plus, aqueous', attached: 'attached to water'});
export const SceneHClWater: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 470, cy: 650, r: 290};
	const hx = 340, wx = 620, my = 660, s = 1.6;
	const hop = K9.moves + 8;
	const st = hopState(f, hop);
	const EX = 870, EY = 560;
	const items = eq(['HCl(g)', '+', 'H_2O(l)', '->', 'H_3O^{+}(aq)', '+', 'Cl^{-}(aq)'], [K9.diss, K9.diss + 4, K9.diss + 8, K9.moves + 30, K9.moves + 34, K9.moves + 38, K9.moves + 42]);
	const S = fitSize(items, 960, 50);
	const h3o = eAnchor(items, 4, S, EX, EY, 50);
	return (
		<>
			<Heading text="Hydrogen chloride in water" at={4} size={58} />
			<Overlay>
				<Timeline fill={[-1000, -1000, -1000, -1000]} stamp={[-1000, -1000, -1000]} strip={1} />
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K9.watch}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
					<Mol x={hx} y={my} m="HCl" s={s} give={st.give} />
					<Mol x={wx} y={my} m="H2O" s={s} take={st.take} />
					<ProtonHop a={giveAt('HCl', hx, my, s)} b={slotAt('H2O', wx, my, s)} at={hop} s={1.1} bow={-90} />
				</LensFrame>
				<HopArrow a={[giveAt('HCl', hx, my, s)[0], my - 50]} b={[slotAt('H2O', wx, my, s)[0] - 20, slotAt('H2O', wx, my, s)[1] - 40]} at={hop + 30} bow={-60} />
				<RoleRing x={hx + 20} y={my} r={100} role="acid" at={K9.acid} tag="donor" />
				<RoleRing x={wx} y={my} r={100} role="base" at={K9.base} tag="acceptor" />
				<EqLine items={items} x={EX} y={EY} size={S} />
				<EqUnder items={items} i={0} size={S} x={EX} y={EY} at={K9.acid} color={ACID} />
				<EqUnder items={items} i={2} size={S} x={EX} y={EY} at={K9.base} color={BASE} />
				<Note x={h3o[0]} y={h3o[1]} text="hydronium ion" size={36} color={INK} anchor="middle" at={K9.h3o} out={K9.attached} />
				<AChip x={EX} y={680} text="H^{+}(aq) = H_3O^{+}(aq)" size={40} color={TEAL} hand={false} at={K9.means} />
				<Note x={EX} y={820} text="a proton in water is always attached to water" size={36} color={INK} at={K9.attached} />
				<Mistake x={EX} y={880} text="HCl → H^{+} + Cl^{-} (for a Brønsted-Lowry answer)" at={K9.attached + 16} note="show the water" size={30} />
				{void K9.hydronium}
			</Overlay>
		</>
	);
};

// ---------- 10. Ammonia in water: where the hydroxide comes from ----------
const H10 = 'ammonia-water';
const K10 = cues(sc(H10), {hook: 'Now the hook', diss: 'Ammonia dissolves', donor: 'water is the donor', gives: 'gives a proton to ammonia', ammonium: 'an ammonium ion', left: "What's left", hydroxide: 'a hydroxide ion', comes: 'comes from water', some: 'Only some ammonia', dbl: 'double arrow', accepts: 'accepts a proton'});
export const SceneNH3Water: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 450, cy: 650, r: 290};
	const nx = 330, wx = 600, my = 680, s = 1.5;
	const hop = K10.gives + 6;
	const st = hopState(f, hop);
	const EX = 860, EY = 540;
	const items = eq(['NH_3(aq)', '+', 'H_2O(l)', '<=>', 'NH_4^{+}(aq)', '+', 'OH^{-}(aq)'], [K10.diss, K10.diss + 4, K10.diss + 8, K10.ammonium, K10.ammonium + 4, K10.hydroxide - 4, K10.hydroxide]);
	const S = fitSize(items, 980, 50);
	const wTok = eAnchor(items, 2, S, EX, EY, 36), ohTok = eAnchor(items, 6, S, EX, EY, 36);
	const arr = eSpan(items, 3, S, EX);
	const pulse = pulseAt(f, K10.dbl, 0.25, 30);
	// population lens: most NH3 unchanged, a few NH4+
	const pop = [[-0.5, -0.4], [0.1, -0.55], [0.55, -0.2], [-0.6, 0.2], [0.0, 0.05], [0.45, 0.45], [-0.2, 0.55], [0.2, -0.05 + 0.5]];
	return (
		<>
			<Heading text="Ammonia in water" at={4} size={58} />
			<Overlay>
				<Timeline fill={[-1000, -1000, -1000, -1000]} stamp={[-1000, -1000, -1000]} strip={1} />
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K10.hook}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
					<Mol x={nx} y={my} m="NH3" s={s} take={st.take} />
					<Mol x={wx} y={my} m="H2O" s={s} give={st.give} rot={-0.6} />
					<ProtonHop a={giveAt('H2O', wx, my, s, -0.6)} b={slotAt('NH3', nx, my, s)} at={hop} s={1.1} bow={-120} />
				</LensFrame>
				<RoleRing x={wx + 6} y={my - 6} r={92} role="acid" at={K10.donor} out={K10.hydroxide} tag="donor" />
				<RoleRing x={nx} y={my - 16} r={108} role="base" at={K10.ammonium} tag="NH_4^{+}" />
				<Ring cx={wx + 4} cy={my - 4} rx={70} ry={64} at={K10.hydroxide} color={TEAL} seed={6} />
				<Note x={L.cx} y={L.cy + L.r + 46} text="OH^{-}: left from water" size={36} color={TEAL} anchor="middle" at={K10.hydroxide + 6} />
				<g transform={`translate(${arr.cx},${EY - S * 0.3}) scale(${pulse}) translate(${-arr.cx},${-(EY - S * 0.3)})`}>
					<EqLine items={items} x={EX} y={EY} size={S} />
				</g>
				<DrawPath d={`M${wTok[0]},${wTok[1]} C${wTok[0] + 60},${wTok[1] + 90} ${ohTok[0] - 60},${ohTok[1] + 90} ${ohTok[0]},${ohTok[1]}`} at={K10.comes} dur={24} color={TEAL} width={4.5} />
				<Note x={(wTok[0] + ohTok[0]) / 2} y={wTok[1] + 120} text="the OH^{-} comes from water" size={36} color={TEAL} anchor="middle" at={K10.comes + 10} />
				<AChip x={arr.cx} y={400} text="Module 5: reversible, at equilibrium" size={32} color={INK_SOFT} at={K10.dbl} anchor="middle" />
				{/* only some at any moment */}
				<LensFrame cx={1060} cy={890} r={130} at={K10.some}>
					<rect x={930} y={760} width={260} height={260} fill="#eef6fb" />
					{pop.map(([u, v], i) => <Mol key={i} x={1060 + u * 130} y={890 + v * 130} m="NH3" s={0.42} take={i === 4 || i === 1 ? 1 : 0} charge={false} />)}
				</LensFrame>
				<Note x={1060} y={1060} text="most stay NH_3" size={30} color={INK_SOFT} anchor="middle" at={K10.some + 10} />
				{/* back to the hook */}
				<Fade at={K10.accepts - 4}>
					<g transform="translate(1280,780)">
						<PlateBlue />
					</g>
				</Fade>
				<Fade at={K10.accepts - 4}><Mol x={1720} y={830} m="NH3" s={0.85} /></Fade>
				<Note x={1300} y={1000} text="base: proton acceptor" size={42} color={BASE_INK} at={K10.accepts} />
				{void K10.left}{void eWidth}{void Atom}{void picW}{void PROTON}{void Ion}{void FTile}{void AMBER}{void EqBox}{void ACID_INK}{void GREYT}{void tileW}{void vis}{void AMBER_INK}{void INK}{void PlateAt}
			</Overlay>
		</>
	);
};
const PlateBlue: React.FC = () => <PairAt a={LITMUS.blue} b={LITMUS.blue} x={0} y={0} h={170} at={-1000} swap={-1000} />;
