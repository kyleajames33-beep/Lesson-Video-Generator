// B8-08 scenes 5 to 8: iodine (feedback raises TSH and the thyroid grows, but the missing ingredient stays missing),
// excess and insulin resistance on b03's transporter plates (insulin binds, fewer transporters move, the liver keeps
// releasing glucose), beta cells covering then falling behind with vessel damage, and a risk factor against a certain
// outcome (scurvy against type 2 diabetes and heart disease).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {LoopRing, SignalPulse} from '../m8-shared/parts';
import {
	AMBER, AMBER_INK, Arrow, BLUE, CARD, Chain, ChainRows, Chip, EDGE, GREEN, GREYT, GTag, Hex, INK, INK_SOFT, Mistake, Pic, PicH, PicPair, RiskDial, Svg, Sx, T, TEAL, Tag, Title, YearsStrip,
	lerp, pbPt, prog, smooth, tiltSteps, vis,
} from './parts';
import {Lab, Ptr} from './s1';
import {FP, PL} from './assets';
import {K} from './common';

const ON = -1000;
const TEALD = '#2f5f8f';

// ---------- 5. iodine ----------
const K5 = K('iodine', {iodine: 'Iodine adds', home: 'homeostasis', thyroid: 'Your thyroid', uses: 'uses iodine', build: 'build its', set: 'set how fast', little: 'too little iodine', fall: 'levels fall', neg: 'Negative feedback', pit: 'pituitary', releases: 'releases more', tsh: 'TSH', tsh2: 'thyroid-stimulating', harder: 'work harder', grows: 'gland grows', still: 'still missing', enlarging: 'keeps enlarging', goitre: 'goitre', bread: 'Australian bread', since: 'since 2009'});
const TH = {cx: 860, cy: 560, w: 760};
export const SceneIodine: React.FC = () => {
	const f = useCurrentFrame();
	const hp = pbPt(PL.thyN, TH.cx, TH.cy, TH.w);
	const hormone = 1 - 0.65 * smooth(prog(f, K5.fall, 24));
	const pit: [number, number] = [300, 270];
	const fast = prog(f, K5.releases, 14);
	return (
		<Svg>
			<Title text="Iodine: feedback can't add a missing ingredient" />
			<PicPair a={PL.thyN} b={PL.thyG} cx={TH.cx} cy={TH.cy} w={TH.w} at={K5.grows} dur={60} />
			<Sx x={TH.cx} y={850} text="thyroid gland" size={36} color={INK} anchor="middle" hand at={-1000} out={K5.goitre} />
			<Sx x={TH.cx} y={850} text="goitre: an enlarged thyroid" size={44} color={AMBER_INK} anchor="middle" hand at={K5.goitre} />
			<g opacity={vis(f, K5.neg, undefined, 14)}>
				<LoopRing g={{cx: 190, cy: 590, R: 70, r: 16}} at={K5.neg} />
				<GTag x={96} y={690} text="b01: negative feedback" size={28} />
			</g>
			<g opacity={vis(f, K5.pit, undefined, 14)}>
				<PicH p={PL.pit} cx={pit[0]} cy={pit[1]} h={150} />
				<Sx x={pit[0]} y={pit[1] - 86} text="pituitary" size={36} color={INK} anchor="middle" hand at={-1000} />
			</g>
			<SignalPulse a={[pit[0] + 50, pit[1] + 20]} b={hp(820, 700)} at={K5.releases} every={Math.round(lerp(30, 12, fast))} dur={26} bow={-30} color={TEAL} r={10} />
			<Sx x={300} y={420} text="more TSH" size={42} color={TEAL} anchor="middle" hand at={K5.tsh} />
			<g>
				<Sx x={1270} y={270} text="thyroid hormone" size={34} color={INK} hand at={-1000} />
				<rect x={1290} y={300} width={90} height={400} rx={12} fill={CARD} stroke={EDGE} strokeWidth={3} />
				<rect x={1296} y={300 + 394 * (1 - hormone) + 6} width={78} height={394 * hormone - 6} rx={9} fill={AMBER} opacity={0.85} />
			</g>
			<Tag x={1420} y={290} w={404} text="thyroid hormones (T3, T4): set metabolic rate" size={28} color="#8d857a" ink={GREYT} fill="#f1eee7" at={K5.set} out={K5.neg} />
			<Lab x={1420} y={420} t="too little iodine: less hormone" w={400} at={K5.little} dim={K5.neg} size={38} />
			<T x={1420} y={500} w={400} text="TSH: thyroid-stimulating hormone" size={40} color={TEAL} at={K5.tsh2} />
			<Lab x={1420} y={620} t="the gland grows, but still can't make enough" w={400} at={K5.grows} size={38} color={AMBER_INK} />
			<GTag x={1270} y={730} text="no iodine, no hormone" size={32} at={K5.still} />
			<g opacity={vis(f, K5.bread, undefined, 14)}>
				<PicH p={PL.bread} cx={1710} cy={750} h={140} />
			</g>
			<Sx x={1824} y={850} text="bread with iodised salt (since 2009)" size={30} color={INK} anchor="end" hand at={K5.since} />
			<Chain tilt={tiltSteps([[K5.little, -1]])} boxes={ChainRows({
				n: [{t: 'iodine', at: K5.iodine}],
				j: [{t: 'builds thyroid hormones', at: K5.build}],
				c: [{t: 'less hormone, more TSH', at: K5.tsh}],
				e: [{t: 'goitre', at: K5.goitre}],
			})} />
		</Svg>
	);
};

// ---------- 6. insulin resistance ----------
const K6 = K('insulin-resistance', {excess: 'Now excess', remember: 'Remember', binds: 'it binds', signal: 'that signal', moves: 'moves glucose', membrane: 'membrane', gets: 'gets in', years: 'Years of', energy: 'more energy', activity: 'little activity', fat: 'body fat', liver: 'liver and', respond: 'respond less', still: 'Insulin still', fewer: 'fewer transporters', less: 'less glucose', liverAlso: 'The liver also', releasing: 'releasing glucose', both: 'Both keep', high: 'high', ir: 'insulin resistance'});
const MU = {cx: 900, cy: 470, w: 800};
export const SceneInsulin: React.FC = () => {
	const f = useCurrentFrame();
	const mp = pbPt(PL.musIn, MU.cx, MU.cy, MU.w);
	// cross-fade: full replay on "moves", back to inside after "gets in", then a 30 per cent mix on "fewer transporters"
	const mix = smooth(prog(f, K6.moves + 10, 30)) * (1 - smooth(prog(f, K6.gets + 20, 30))) + 0.3 * smooth(prog(f, K6.fewer, 30));
	const R = FP.receptors.map(([u, v]) => mp(u, v));
	const dock1 = smooth(prog(f, K6.binds, 18)) * (1 - prog(f, K6.years, 14));
	const dock2 = smooth(prog(f, K6.still, 18));
	const capY = mp(1000, 640)[1];
	const glu1 = vis(f, K6.moves + 20, K6.years, 10);
	const glu2 = vis(f, K6.fewer, undefined, 10);
	const fat = prog(f, K6.fat, 30);
	const liverOut = vis(f, K6.liverAlso, undefined, 12);
	const gBar = 0.35 + 0.5 * smooth(prog(f, K6.both, 30));
	return (
		<Svg>
			<Title text="Excess: insulin resistance" />
			<GTag x={MU.cx - 120} y={150} text="b03: insulin and transporters" size={28} />
			<Pic p={PL.musIn} cx={MU.cx} cy={MU.cy} w={MU.w} />
			<g opacity={mix}><Pic p={PL.musMem} cx={MU.cx} cy={MU.cy} w={MU.w} /></g>
			{R.map(([x, y], i) => <g key={i}>
				{dock1 > 0.01 ? <circle cx={x} cy={lerp(y - 70, y - 26, dock1)} r={13} fill={TEAL} stroke="#fffdf8" strokeWidth={2.5} opacity={dock1} /> : null}
				{dock2 > 0.01 ? <circle cx={x} cy={lerp(y - 70, y - 26, dock2)} r={13} fill={TEAL} stroke="#fffdf8" strokeWidth={2.5} opacity={dock2} /> : null}
			</g>)}
			<Sx x={MU.cx + 330} y={MU.cy - 286} text="insulin" size={34} color={TEAL} hand at={K6.binds} />
			{glu1 > 0.01 ? [0, 1, 2, 3, 4].map(i => { const u = ((f - K6.moves) / 40 + i / 5) % 1; const [x0] = mp(560 + i * 230, 640); return <Hex key={i} x={x0} y={lerp(capY, capY + 210, u)} o={glu1 * Math.sin(u * Math.PI)} />; }) : null}
			{glu2 > 0.01 ? [0, 1, 2, 3, 4, 5].map(i => {
				const u = ((f - K6.fewer) / 44 + i / 6) % 1;
				const [x0] = mp(520 + i * 200, 640);
				const inn = i === 2;
				const yy = inn ? lerp(capY, capY + 210, u) : capY + 120 * Math.sin(u * Math.PI) * 0.8;
				return <Hex key={i} x={x0} y={yy} o={glu2} />;
			}) : null}
			<Lab x={MU.cx - 400} y={790} t="insulin binds, but fewer transporters move: less glucose in" w={800} at={K6.fewer} dim={K6.both} size={38} color={AMBER_INK} />
			<Lab x={MU.cx - 400} y={790} t="insulin moves transporters: glucose gets in" w={800} at={K6.moves} out={K6.years - 10} size={38} />
			<g opacity={vis(f, K6.fat, undefined, 14)}>
				<Pic p={PL.liver} cx={230} cy={470} w={260} />
				<ellipse cx={230} cy={460} rx={110} ry={58} fill="#f2dc84" opacity={0.45 * fat} />
				<Sx x={230} y={600} text="fat builds up around organs" size={30} color={INK} anchor="middle" hand at={K6.fat} />
			</g>
			{liverOut > 0.01 ? <g opacity={liverOut}><Arrow a={[330, 430]} b={mp(380, 600)} at={K6.liverAlso} color={AMBER_INK} width={6} bow={-0.2} />{[0, 1, 2].map(i => { const u = ((f - K6.liverAlso) / 40 + i / 3) % 1; const [bx, by] = mp(380, 600); return <Hex key={i} x={lerp(330, bx, u)} y={lerp(430, by, u) - 40 * Math.sin(u * Math.PI)} o={1} />; })}</g> : null}
			<Sx x={96} y={680} text="liver: keeps releasing glucose" size={32} color={AMBER_INK} hand at={K6.releasing} />
			<YearsStrip g={{x: 1400, y: 240, w: 400, h: 170}} yr={fr => 15 * smooth(prog(fr, K6.respond, 300))} at={K6.respond} size={26} />
			<g>
				<Sx x={1400} y={540} text="blood glucose" size={34} color={INK} hand at={-1000} />
				<rect x={1400} y={560} width={420} height={50} rx={12} fill={CARD} stroke={EDGE} strokeWidth={3} />
				<rect x={1404} y={564} width={412 * gBar} height={42} rx={10} fill={AMBER_INK} opacity={0.8} />
				<Sx x={1400} y={660} text="kept high" size={36} color={AMBER_INK} hand at={K6.both} />
			</g>
			<T x={1400} y={740} w={420} text="insulin resistance: cells respond less to insulin" size={40} color={INK} at={K6.ir} />
			<Chain tilt={tiltSteps([[K6.excess, 1]])} boxes={ChainRows({
				n: [{t: 'energy in > energy used, for years', at: K6.energy}],
				j: [{t: 'insulin moves transporters', at: K6.moves}],
				c: [{t: 'cells respond less to insulin', at: K6.respond}],
				e: [{t: 'blood glucose stays high', at: K6.both}],
			})} />
			{void Ptr}{void GREEN}{void BLUE}
		</Svg>
	);
};

// ---------- 7. beta cells ----------
const K7 = K('beta-cells', {first: 'At first', beta: 'beta cells', cover: 'cover for', more: 'more insulin', close: 'close to', years: 'for years', dont: "don't know", over: 'Over time', keep: 'keep up', high: 'stays high', type2: 'type 2', yearsOf: 'Years of', damage: 'damage blood', eyes: 'eyes', kidneys: 'kidneys', nerves: 'nerves', heart: 'heart', ausdiab: 'AusDiab', half: 'about half'});
const YS7 = {x: 800, y: 230, w: 1000, h: 300};
export const SceneBeta: React.FC = () => {
	const f = useCurrentFrame();
	const yr = (fr: number) => 1 + 7 * smooth(prog(fr, K7.cover, K7.dont - K7.cover)) + 7 * smooth(prog(fr, K7.over, K7.high - K7.over + 20));
	const isl = pbPt(PL.islet, 300, 340, 380);
	const vess: [string, number, number, typeof PL.eye][] = [['eyes', K7.eyes, 860, PL.eye], ['kidneys', K7.kidneys, 1080, PL.kidney], ['heart arteries', K7.heart, 1300, PL.heart]];
	return (
		<Svg>
			<Title text="Beta cells cover, then fall behind" />
			<Pic p={PL.islet} cx={300} cy={340} w={380} />
			<Sx x={300} y={176} text="islet: beta cells" size={34} color={INK} anchor="middle" hand at={-1000} />
			<Pic p={PL.pancreas} cx={300} cy={640} w={360} />
			<path d={`M${300},${590} L${300},${500}`} stroke={TEAL} strokeWidth={4} strokeDasharray="10 8" />
			<GTag x={96} y={758} text="b03: beta cells release insulin" size={28} />
			<SignalPulse a={isl(1400, 900)} b={[YS7.x - 20, 330]} at={K7.more} until={K7.keep + 40} every={14} dur={30} bow={-60} color={TEALD} r={9} />
			<YearsStrip g={YS7} yr={yr} size={30} />
			<Sx x={YS7.x + 40} y={YS7.y + 60} text="glucose held near normal" size={38} color={TEAL} hand at={K7.close} out={K7.over} />
			<Chip x={YS7.x + 40} y={YS7.y + 84} text="no symptoms yet" size={34} color="#8d857a" ink={INK} at={K7.dont} out={K7.over} />
			<Sx x={YS7.x + YS7.w - 10} y={YS7.y + 60} text="glucose stays high" size={40} color={AMBER_INK} anchor="end" hand at={K7.high} />
			<Chip x={YS7.x + YS7.w - 10} y={YS7.y + 84} text="type 2 diabetes" size={36} color={AMBER_INK} ink={INK} anchor="end" at={K7.type2} />
			<GTag x={96} y={810} text="type 1: immune cells destroy beta cells; not nutritional" size={26} at={K7.keep} />
			<Sx x={760} y={660} text="years of high glucose damage blood vessels" size={40} color={INK} hand at={K7.damage} />
			{vess.map(([t, a, x, p]) => (
				<g key={t} opacity={vis(f, a, undefined, 14)}>
					<PicH p={p} cx={x} cy={748} h={130} />
					<path d={`M${x - 60},${822} q15,-10 30,0 t30,0 t30,0 t30,0`} fill="none" stroke="#c8372d" strokeWidth={5} strokeLinecap="round" opacity={0.6 + 0.4 * Math.sin((f - a) / 8)} />
					<Sx x={x} y={854} text={t} size={28} color={INK} anchor="middle" hand at={-1000} />
				</g>
			))}
			<GTag x={1440} y={730} text="nerves" size={32} at={K7.nerves} />
			<Tag x={1540} y={600} w={284} text="AusDiab (1999 to 2000): about 1 in 2 adults with diabetes undiagnosed" size={30} color={BLUE} ink={INK} at={K7.ausdiab} />
			<Chain tilt={tiltSteps([[ON, 1]], 1)} boxes={ChainRows({
				n: [{t: 'energy in > energy used, for years', at: ON}],
				j: [{t: 'insulin moves transporters', at: ON}],
				c: [{t: 'cells respond less; beta cells fall behind', at: K7.keep}, {t: 'cells respond less to insulin', at: ON, out: K7.keep - 12}],
				e: [{t: 'blood glucose stays high', at: ON, out: K7.type2 - 12}, {t: 'type 2 diabetes', at: K7.type2}],
			})} />
			{void GREYT}{void Mistake}{void RiskDial}{void AMBER}{void INK_SOFT}
		</Svg>
	);
};

// ---------- 8. a risk factor, not a certain outcome ----------
const K8 = K('risk-factor', {does: 'does eating', not: 'Not on', compare: 'Compare scurvy', one: 'one missing', reliably: 'reliably', restored: 'restored', type2: 'Type 2 diabetes is', different: 'different', excess: 'Excess intake', rf: 'risk factor', family: 'Family history', age: 'age', activity: 'activity', sleep: 'sleep', meds: 'medicines', afford: 'afford', reach: 'reach', heart: 'Heart disease', sat: 'saturated fat', ldl: 'LDL', plaque: 'plaque', smoking: 'smoking', among: 'among several'});
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	const chips: [string, number][] = [['excess energy intake', K8.excess], ['family history', K8.family], ['age', K8.age], ['activity', K8.activity], ['sleep', K8.sleep], ['some medicines', K8.meds], ['food cost and access', K8.afford]];
	const needle = (fr: number) => 0.2 + chips.reduce((s, [, a], i) => s + (i === 3 || i === 4 ? 0.04 : 0.08) * smooth(prog(fr, a, 14)), 0);
	const pos: [number, number][] = [[1240, 296], [1240, 372], [1560, 372], [1240, 448], [1470, 448], [1240, 524], [1240, 600]];
	return (
		<Svg>
			<Title text="A risk factor, not a certain outcome" />
			<rect x={96} y={160} width={560} height={600} rx={22} fill={CARD} stroke={EDGE} strokeWidth={3} />
			<Sx x={126} y={220} text="scurvy" size={46} color={BLUE} hand at={-1000} />
			<Pic p={PL.colW} cx={376} cy={410} w={360} />
			<Sx x={126} y={650} text="no vitamin C" size={38} color={INK} hand at={K8.one} />
			<Arrow a={[350, 638]} b={[480, 638]} at={K8.one} color={INK} width={7} head={20} />
			<Sx x={500} y={650} text="scurvy" size={38} color={INK} hand at={K8.one} />
			<Sx x={126} y={710} text="one missing nutrient" size={36} color={AMBER_INK} hand at={K8.one + 10} />
			<GTag x={126} y={730} text="restored vitamin C fixes it" size={28} at={K8.restored} />
			<Sx x={700} y={210} text="Does eating too much cause type 2 diabetes?" size={46} color={INK} hand at={-1000} />
			<Sx x={700} y={272} text="Not on its own." size={44} color={AMBER_INK} hand at={K8.not} />
			<Sx x={700} y={350} text="type 2 diabetes" size={42} color={BLUE} hand at={-1000} />
			<Pic p={PL.pancreas} cx={1060} cy={330} w={200} />
			<RiskDial cx={930} cy={610} r={215} val={needle} title="" size={34} />
			{chips.map(([t, a], i) => {
				const later = chips[i + 3]?.[1];
				return <g key={t} opacity={(0.3 + 0.7 * prog(f, a, 12)) * (1 - 0.45 * (later === undefined ? 0 : prog(f, later, 12)))}><Chip x={pos[i][0]} y={pos[i][1]} text={t} size={36} color={TEAL} ink={INK} /></g>;
			})}
			<T x={700} y={820} w={540} text="risk factor: raises the chance, doesn't guarantee it" size={42} color={INK} at={K8.rf} />
			<g opacity={vis(f, K8.heart, undefined, 14)}>
				<rect x={1300} y={670} width={524} height={370} rx={22} fill={CARD} stroke={EDGE} strokeWidth={3} />
				<Sx x={1326} y={720} text="heart disease" size={42} color={BLUE} hand at={-1000} />
				<PicPair a={PL.art} b={PL.artP} cx={1710} cy={830} w={210} at={K8.plaque} dur={40} />
				<GTag x={1620} y={936} text="b07: plaque" size={28} />
			</g>
			{([['saturated fat → LDL', K8.ldl], ['smoking', K8.smoking], ['blood pressure', K8.among]] as [string, number][]).map(([t, a], i) => <Chip key={t} x={1320} y={[750, 815, 880][i]} text={t} size={30} color={AMBER_INK} ink={INK} at={a} />)}
			<T x={1326} y={1004} w={480} text="LDL: a cholesterol carrier in blood" size={30} color={INK} at={K8.ldl + 10} />
			<Mistake x={96} y={930} text="they ate badly, so it's their fault" size={38} at={K8.afford} cross={K8.reach + 6} />
			{void GREEN}{void lerp}{void PicH}
		</Svg>
	);
};
