// M6 C01 scenes 11 to 14: the gas tube and carbonate solved, roles not labels, the Brønsted-Lowry limit, memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {TUBE} from './assets';
import {
	ACID, ACID_INK, AChip, AMBER, AMBER_INK, BASE, BASE_INK, Card, DrawPath, EqBox, EqLine, EqUnder, Fade, GREYT, GREY_INK, HopArrow, INK, INK_SOFT, Ion, LensFrame, Mistake, Mol, Note,
	Overlay, PROTON, PROTON_INK, PlateAt, Proton, ProtonHop, Ring, RuleCard, Sx, TEAL, Timeline, VBracket, eAnchor, eSpan, eq, fitSize, giveAt, hopState, picW, slotAt, smooth, vis,
} from './parts';

// ---------- 11. The gas tube and carbonate, solved ----------
const H11 = 'gas-carbonate';
const K11 = cues(sc(H11), {other: 'The other two', tube: 'In the glass tube', directly: 'directly to ammonia', nowater: 'No water needed', pack: 'pack together', solid: 'the white solid', carb: 'a carbonate ion', takes: 'takes a proton from a water', leaving: 'leaving hydroxide behind', same: 'for the same reason', acceptors: "they're proton acceptors"});
export const SceneGasCarb: React.FC = () => {
	const f = useCurrentFrame();
	const A = {cx: 330, cy: 410, r: 190};
	const hx = 245, nx = 430, ay = 420, s = 1.1;
	const hop1 = K11.directly - 4;
	const st1 = hopState(f, hop1);
	const pk = smooth(prog(f, K11.pack, 40));
	const B = {cx: 330, cy: 850, r: 170};
	const cx2 = 270, wx2 = 420, by2 = 870, s2 = 0.95;
	const hop2 = K11.takes + 4;
	const st2 = hopState(f, hop2);
	const EX = 650;
	const e1 = eq(['HCl(g)', '+', 'NH_3(g)', '->', 'NH_4Cl(s)'], [K11.tube, K11.tube + 4, K11.tube + 8, K11.pack, K11.pack + 4]);
	const S1 = 50;
	const e2 = eq(['CO_3^{2-}(aq)', '+', 'H_2O(l)', '<=>', 'HCO_3^{-}(aq)', '+', 'OH^{-}(aq)'], [K11.carb, K11.carb + 4, K11.carb + 8, K11.takes + 30, K11.takes + 34, K11.leaving - 4, K11.leaving]);
	const S2 = fitSize(e2, 1000, 48);
	// packed lattice positions (2 x 3, alternating)
	const lat = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => ({x: A.cx - 80 + (i % 3) * 80, y: A.cy - 80 + Math.floor(i / 3) * 80, k: (i % 3 + Math.floor(i / 3)) % 2}));
	const tubeW = 560, tubeH = tubeW * 344 / 1600;
	return (
		<>
			<Heading text="The other two problems, solved" at={4} size={56} />
			<Overlay>
				<PlateAt p={TUBE.ring} x={1264} y={190} h={tubeH} at={K11.tube - 6} />
				<Note x={1264 + tubeW / 2} y={190 + tubeH + 40} text="gas reaction, no aqueous medium" size={30} color={TEAL} anchor="middle" at={K11.nowater} />
				<LensFrame cx={A.cx} cy={A.cy} r={A.r} at={K11.other}>
					<rect x={A.cx - A.r} y={A.cy - A.r} width={2 * A.r} height={2 * A.r} fill="#f7f4ee" />
					<g opacity={1 - pk}>
						<Mol x={hx} y={ay} m="HCl" s={s} give={st1.give} />
						<Mol x={nx} y={ay} m="NH3" s={s} take={st1.take} />
						<ProtonHop a={giveAt('HCl', hx, ay, s)} b={slotAt('NH3', nx, ay, s)} at={hop1} s={0.95} bow={-80} />
					</g>
					{pk > 0.01 ? lat.map((p, i) => <Ion key={i} x={p.x} y={p.y} kind={p.k ? '-' : '+'} r={p.k ? 31 : 33} label={p.k ? 'Cl^{-}' : 'NH_4^{+}'} o={pk} labelSize={17} />) : null}
				</LensFrame>
				<Note x={EX} y={560} text="no water: H^{+} goes straight to NH_3" size={34} color={PROTON_INK} at={K11.nowater} />
				<EqLine items={e1} x={EX} y={440} size={S1} />
				<Note x={EX + 560} y={510} text="ions packed in the solid" size={34} color={INK_SOFT} at={K11.solid} />
				<EqBox items={e1} i={2} size={S1} x={EX} y={440} at={K11.acceptors} color={BASE} />
				{/* carbonate in water */}
				<LensFrame cx={B.cx} cy={B.cy} r={B.r} at={K11.carb - 4}>
					<rect x={B.cx - B.r} y={B.cy - B.r} width={2 * B.r} height={2 * B.r} fill="#eef6fb" />
					<Mol x={cx2} y={by2} m="CO3" s={s2} take={st2.take} />
					<Mol x={wx2} y={by2} m="H2O" s={s2} give={st2.give} rot={-0.5} />
					<ProtonHop a={giveAt('H2O', wx2, by2, s2, -0.5)} b={slotAt('CO3', cx2, by2, s2)} at={hop2} s={0.85} bow={-60} />
				</LensFrame>
				<Ring cx={wx2 + 2} cy={by2 - 2} rx={52} ry={48} at={K11.leaving} color={TEAL} seed={8} />
				<EqLine items={e2} x={EX} y={860} size={S2} />
				<Note x={eAnchor(e2, 6, S2, EX, 860, 0)[0]} y={930} text="left from water" size={32} color={TEAL} anchor="middle" at={K11.leaving + 6} />
				<EqBox items={e2} i={0} size={S2} x={EX} y={860} at={K11.acceptors} color={BASE} />
				<Note x={EX} y={690} text="carbonates are bases for the same reason as ammonia:" size={36} color={INK_SOFT} at={K11.same} />
				<Note x={EX} y={750} text="both are proton acceptors" size={48} color={BASE_INK} at={K11.acceptors + 6} />
				{void picW}{void PROTON}{void AMBER}{void ACID}
			</Overlay>
		</>
	);
};

// ---------- 12. Roles, not labels: follow the proton ----------
const H12 = 'follow-proton';
const K12 = cues(sc(H12), {notice: 'Notice what water did', withhcl: 'With hydrogen chloride', accepted: 'water accepted', base1: 'so it was the base', withnh3: 'With ammonia', gave: 'water gave', acid1: 'so it was the acid', roles: 'are roles', labels: 'not fixed labels', follow: 'follow the proton', loses: 'loses a proton', gains: 'gains it'});
export const SceneFollow: React.FC = () => {
	const X = 110, S = 64, Y1 = 410, Y2 = 620;
	const e1 = eq(['HCl', '+', 'H_2O', '->', 'H_3O^{+}', '+', 'Cl^{-}'], K12.notice - 10);
	const e2 = eq(['NH_3', '+', 'H_2O', '<=>', 'NH_4^{+}', '+', 'OH^{-}'], K12.notice - 4);
	const w1 = eSpan(e1, 2, S, X), w2 = eSpan(e2, 2, S, X);
	const bx = Math.max(eSpan(e1, 6, S, X).x2, eSpan(e2, 6, S, X).x2) + 60;
	const lose = K12.loses, gain = K12.gains;
	const tag = (items: typeof e1, i: number, y: number, t: string, at: number, c: string) => <Note x={eSpan(items, i, S, X).cx} y={y + 62} text={t} size={34} color={c} anchor="middle" hand={false} at={at} />;
	return (
		<>
			<Heading text="Acid and base are roles" at={4} size={58} />
			<Overlay>
				<Timeline fill={[-1000, -1000, -1000, -1000]} stamp={[-1000, -1000, -1000]} strip={1} />
				<EqLine items={e1} x={X} y={Y1} size={S} />
				<EqLine items={e2} x={X} y={Y2} size={S} />
				<EqBox items={e1} i={2} size={S} x={X} y={Y1} at={K12.accepted} color={BASE} tag="base here" tagBelow={false} />
				<EqBox items={e2} i={2} size={S} x={X} y={Y2} at={K12.gave} color={ACID} tag="acid here" tagBelow={false} />
				<VBracket x={bx} y1={Y1 - 50} y2={Y2 + 10} at={K12.roles} color={TEAL} />
				<Note x={bx + 50} y={Y1 + 70} text="same molecule," size={40} color={TEAL} at={K12.roles + 4} />
				<Note x={bx + 50} y={Y1 + 118} text="different role" size={40} color={TEAL} at={K12.roles + 10} />
				{/* pen checks: who lost, who gained */}
				{tag(e1, 0, Y1, '−H^{+}', lose, ACID_INK)}{tag(e1, 2, Y1, '+H^{+}', gain, BASE_INK)}
				{tag(e2, 2, Y2, '−H^{+}', lose, ACID_INK)}{tag(e2, 0, Y2, '+H^{+}', gain, BASE_INK)}
				<RuleCard x={110} y={740} w={1100} at={K12.follow - 6} lh={64} lines={[
					{t: 'Follow the proton:', at: K12.follow, color: TEAL},
					{t: 'loses H^{+} = acid;  gains H^{+} = base', at: K12.loses, lit: [K12.loses, K12.gains + 60]},
				]} />
				<Mistake x={1260} y={790} text="has H in its formula = acid" at={K12.labels} note="giving one away does" size={32} />
				<AChip x={1260} y={950} text="Later: species that can do both" size={30} color={INK_SOFT} at={K12.gains + 30} />
				{void K12.withhcl}{void K12.base1}{void K12.withnh3}{void EqUnder}{void Card}{void vis}{void GREYT}{void HopArrow}{void Proton}
			</Overlay>
		</>
	);
};

// ---------- 13. Brønsted-Lowry has a limit too ----------
const H13 = 'bl-limit';
const K13 = cues(sc(H13), {even: 'Even this model', cao: 'Calcium oxide', salt: 'calcium sulfate, a salt', inwater: 'In water, these oxides', baseacid: 'a base and an acid', hatom: 'single hydrogen atom', move: 'no proton can move', cant: "can't call this", lewis: 'the Lewis model', beyond: 'beyond this course'});
export const SceneLimit: React.FC = () => {
	const f = useCurrentFrame();
	const S = 60, EX = 960, EY = 620;
	const items = eq(['CaO(s)', '+', 'SO_3(g)', '->', 'CaSO_4(s)'], [K13.cao, K13.cao + 6, K13.cao + 12, K13.salt - 6, K13.salt]);
	const a = eSpan(items, 0, S, EX, 'middle'), b = eSpan(items, 2, S, EX, 'middle');
	const shrink = smooth(prog(f, K13.beyond + 10, 24));
	return (
		<>
			<Heading text="Brønsted-Lowry has a limit too" at={4} size={56} />
			<Overlay>
				<Timeline fill={[-1000, -1000, -1000, -1000]} stamp={[-1000, -1000, -1000, K13.cant]} strip={1 - smooth(prog(f, 0, 20))} />
				<g transform={`translate(${EX},${EY}) scale(${1 - 0.08 * shrink}) translate(${-EX},${-EY})`}>
					<EqLine items={items} x={EX} y={EY} size={S} anchor="middle" />
					<Note x={eSpan(items, 4, S, EX, 'middle').cx} y={EY - 80} text="heated; salt forms" size={32} color={INK_SOFT} anchor="middle" at={K13.salt + 10} />
					<Note x={a.cx} y={EY + 80} text="in water:" size={30} color={GREY_INK} anchor="middle" at={K13.baseacid} />
					<Note x={a.cx} y={EY + 118} text="Ca(OH)_2, a base" size={32} color={GREY_INK} anchor="middle" at={K13.baseacid} />
					<Note x={b.cx} y={EY + 80} text="in water:" size={30} color={GREY_INK} anchor="middle" at={K13.baseacid + 10} />
					<Note x={b.cx} y={EY + 118} text="H_2SO_4, an acid" size={32} color={GREY_INK} anchor="middle" at={K13.baseacid + 10} />
					<Ring cx={a.cx - 4} cy={EY - 20} rx={(a.x2 - a.x1) / 2 + 8} ry={50} at={K13.hatom} color={AMBER} seed={3} />
					<Ring cx={b.cx} cy={EY - 20} rx={(b.x2 - b.x1) / 2 + 8} ry={50} at={K13.hatom + 12} color={AMBER} seed={9} />
					<Note x={(a.cx + b.cx) / 2} y={EY - 110} text="no H anywhere" size={40} color={AMBER_INK} anchor="middle" at={K13.hatom + 20} />
				</g>
				<Fade at={K13.move}>
					<Proton x={760} y={860} s={1.5} dashed />
					<DrawPath d="M730,830 L790,890" at={K13.move + 6} dur={8} color="#c4432f" width={6} />
					<DrawPath d="M790,830 L730,890" at={K13.move + 12} dur={8} color="#c4432f" width={6} />
				</Fade>
				<Note x={820} y={872} text="no proton to move" size={42} color={INK} at={K13.move + 8} />
				<Note x={820} y={930} text="so not an acid-base reaction in this model" size={34} color={INK_SOFT} at={K13.cant} />
				<Fade at={K13.lewis}>
					<rect x={1460} y={800} width={360} height={110} rx={16} fill="#efebe3" stroke={GREYT} strokeWidth={3} strokeDasharray="10 7" />
					<Sx x={1640} y={846} text="Lewis model" size={36} color={GREY_INK} anchor="middle" weight={800} at={-1000} />
					<Sx x={1640} y={886} text="(beyond the course)" size={28} color={GREY_INK} anchor="middle" hand at={K13.beyond} />
				</Fade>
				{void K13.even}{void K13.inwater}{void ACID}{void BASE}{void BASE_INK}{void ACID_INK}{void INK}{void PROTON_INK}{void TEAL}
			</Overlay>
		</>
	);
};

// ---------- 14. Memory aid ----------
const H14 = 'memory-aid';
const K14 = cues(sc(H14), {here: "here's how to remember", first: 'First:', each: 'each model fixed', oxygen: 'Oxygen, broken', hydrogen: 'Hydrogen, not enough', ions: 'Ions in water', second: 'Second, for', gives: 'acid gives, base takes', assess: 'asks you to assess', explained: 'say what it explained', couldnt: "couldn't explain"});
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const gx = 1180, tx = 1580, by = 700;
	const hop = K14.gives + 8;
	return (
		<>
			<Heading text="How to remember it" at={4} size={58} />
			<Overlay>
				<Timeline fill={[-1000, -1000, -1000, -1000]} stamp={[-1000, -1000, -1000, -1000]} lit={[K14.oxygen, K14.hydrogen, K14.ions]} />
				<Note x={96} y={560} text="Each model fixed a failure of the one before." size={62} color={TEAL} at={K14.each} />
				<Note x={96} y={640} text="Oxygen: broken by HCl" size={34} color={INK} at={K14.oxygen} />
				<Note x={96} y={688} text="Hydrogen: not enough on its own" size={34} color={INK} at={K14.hydrogen} />
				<Note x={96} y={736} text="Ions in water: limited by ammonia" size={34} color={INK} at={K14.ions} />
				<Note x={96} y={830} text="Acid gives, base takes." size={58} color={INK} at={K14.gives} />
				<Note x={96} y={876} text="gives and takes a proton (H^{+})" size={32} color={PROTON_INK} hand={false} at={K14.gives + 24} />
				<Fade at={K14.gives - 4}>
					<rect x={gx - 90} y={by - 60} width={180} height={120} rx={20} fill="#fff8ea" stroke={ACID} strokeWidth={5} />
					<Sx x={gx} y={by + 96} text="gives" size={36} color={ACID_INK} anchor="middle" hand at={-1000} />
					<rect x={tx - 90} y={by - 60} width={180} height={120} rx={20} fill="#f4eefb" stroke={BASE} strokeWidth={5} />
					<Sx x={tx} y={by + 96} text="takes" size={36} color={BASE_INK} anchor="middle" hand at={-1000} />
				</Fade>
				{f >= K14.gives - 4 ? <Proton x={f < hop + 26 ? gx : tx} y={by} s={1.2} o={f >= hop && f < hop + 26 ? 0 : 1} /> : null}
				<ProtonHop a={[gx, by]} b={[tx, by]} at={hop} s={1.2} />
				{/* assess frame */}
				<Fade at={K14.assess}>
					<rect x={96} y={920} width={1728} height={120} rx={18} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
					<line x1={960} y1={934} x2={960} y2={1026} stroke={TEAL} strokeWidth={3} />
					<Sx x={124} y={962} text="assess a model:" size={26} color={TEAL} hand at={-1000} />
				</Fade>
				<Note x={124} y={1012} text="it explained ..." size={40} color={INK} at={K14.explained} />
				<Note x={990} y={1012} text="it couldn't explain ..." size={40} color={AMBER_INK} at={K14.couldnt} />
				{void K14.here}{void K14.first}{void K14.second}{void vis}
			</Overlay>
		</>
	);
};
