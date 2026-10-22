// M7 B03 scenes 1 to 5: the hook (a coded Soho street map, death dots that cluster round one pump, the painted
// pump and a blue drip line: the route was water); the chain (leave, travel, enter; the three modes; break marks);
// direct contact (the lane shrinks until the hosts almost touch: tinea, HIV, then droplets that fall within a
// marked 1 to 2 m); indirect contact (a slot in the lane takes the door handle, the pump, the chicken; then specks
// that drift and linger after the left host leaves); vectors (the mosquito in the lane, the life-cycle loop, and
// "a door handle isn't a vector").
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {CardBox, CurveArrow} from '../bio-m6-b01/parts';
import {S} from './common';
import {
	AMBER, AMBER_INK, BreakMark, CTag, Chain, DROP, Drift, Droplets, DrawPath, FEAT, Fit, GREYT, GREY_INK, GTag, INK, INK_SOFT, ModeTabs, PLATES, Pl, RED, Ring, Sx,
	TEAL, Tg, clamp01, fitW, lerp, plH, prog, ptOf, rng, smooth, stX, tw, vis,
} from './parts';

export const HEAD = 'How does a pathogen get from host to host?';
const PUMP_W = 360;

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {deaths: 'marked the deaths', clustered: 'clustered around one water pump', pump: 'pump on Broad', didnt: "didn't know which microbe", drinking: 'in drinking water', how: 'So how does a pathogen', route: 'knowing its route'});
const MP: [number, number] = [600, 560];
const DOTS = (() => {
	const r = rng(1854);
	const out: {x: number; y: number; k: number; late: boolean}[] = [];
	for (let i = 0; i < 46; i++) {
		const near = i < 30;
		const a = r() * Math.PI * 2;
		const d = near ? 30 + Math.pow(r(), 0.8) * 150 : 180 + r() * 260;
		out.push({x: MP[0] + Math.cos(a) * d * 1.15, y: MP[1] + Math.sin(a) * d * 0.85, k: r(), late: false});
	}
	for (let i = 0; i < 14; i++) {
		const a = r() * Math.PI * 2, d = 18 + r() * 70;
		out.push({x: MP[0] + Math.cos(a) * d, y: MP[1] + Math.sin(a) * d * 0.8, k: r(), late: true});
	}
	return out.filter(p => p.x > 150 && p.x < 990 && p.y > 230 && p.y < 900);
})();
const STREETS = ['M140,330 L990,300', 'M140,470 L990,500', 'M140,690 L990,650', 'M140,840 L990,860', 'M300,200 L330,920', 'M560,200 L590,920', 'M800,200 L760,920', 'M140,560 L990,590'];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const mapO = 1 - prog(f, K1.how, 20);
	const sh = smooth(prog(f, K1.how, 30));
	const pw = lerp(PUMP_W, 150, sh);
	const pcx = lerp(1440, 200, sh), pcy = lerp(560, 330, sh) + (1 - smooth(prog(f, K1.pump + 4, 24))) * 60;
	const spout = ptOf(PLATES.pump, pcx, pcy, pw, FEAT.spout);
	const mid: [number, number] = [(spout[0] + MP[0]) / 2, Math.max(spout[1], MP[1]) + 90];
	const qp = (t: number): [number, number] => [(1 - t) * (1 - t) * spout[0] + 2 * (1 - t) * t * mid[0] + t * t * MP[0], (1 - t) * (1 - t) * spout[1] + 2 * (1 - t) * t * mid[1] + t * t * MP[1]];
	return (
		<>
			<Heading text={HEAD} at={K1.how + 20} size={58} />
			<Overlay>
				<g opacity={mapO}>
					<CardBox x={120} y={190} w={890} h={740} at={0} />
					{STREETS.map((d, i) => <DrawPath key={i} d={d} at={4 + i * 4} dur={20} color="#c9c2b4" width={i === 7 ? 12 : 8} />)}
					<GTag x={150} y={210} text="Soho, London, 1854" at={20} out={K1.drinking} size={24} />
					{DOTS.map((p, i) => {
						const at = p.late ? K1.clustered + 4 + p.k * 30 : K1.deaths + 8 + (i / DOTS.length) * 70;
						const o = prog(f, at, 6);
						return o > 0.01 ? <circle key={i} cx={p.x} cy={p.y} r={7} fill="#3b3631" opacity={o} /> : null;
					})}
					<Ring cx={MP[0]} cy={MP[1]} rx={150} ry={120} at={K1.clustered + 14} color={AMBER} />
					{f >= K1.pump ? (
						<g opacity={prog(f, K1.pump, 10)}>
							<rect x={MP[0] - 9} y={MP[1] - 26} width={18} height={44} rx={5} fill="#2f3a35" />
							<path d={`M${MP[0] - 9},${MP[1] + 2} L${MP[0] - 24},${MP[1] + 2} L${MP[0] - 24},${MP[1] + 10}`} fill="none" stroke="#2f3a35" strokeWidth={5} />
						</g>
					) : null}
					{f >= K1.pump + 10 ? <DrawPath d={`M${MP[0] + 14},${MP[1] - 20} L${1440 - PUMP_W / 2 - 10},${520}`} at={K1.pump + 10} dur={16} color={GREYT} width={3} dash="8 8" /> : null}
					<Sx x={MP[0]} y={MP[1] - 70} text="?" size={96} color={GREY_INK} weight={800} anchor="middle" at={K1.didnt} out={K1.drinking} />
					{f >= K1.drinking ? <DrawPath d={`M${spout[0]},${spout[1]} Q${mid[0]},${mid[1]} ${MP[0]},${MP[1] + 20}`} at={K1.drinking} dur={22} color={DROP} width={5} /> : null}
					{f >= K1.drinking + 18 ? [0, 1, 2].map(i => {
						const t = (((f - K1.drinking - 18) / 40 + i / 3) % 1);
						const [x, y] = qp(t);
						return <circle key={i} cx={x} cy={y} r={9} fill={DROP} stroke="#2c5b85" strokeWidth={1.5} />;
					}) : null}
					<Tg x={1020} y={760} text="the route: water" at={K1.drinking + 10} size={44} color={DROP} />
					<GTag x={1440} y={880} text="the Broad Street pump" at={K1.pump + 16} size={26} anchor="middle" />
				</g>
				<Pl p={PLATES.pump} cx={pcx} cy={pcy} w={pw} o={prog(f, K1.pump + 4, 16)} />
				{void K1.route}{void INK}{void plH}
			</Overlay>
		</>
	);
};

// ---------- 2. The chain ----------
const K2 = cues(S('the-chain'), {leave: 'leave one host', travel: 'travel and get', newhost: 'a new host', mode: 'mode of transmission', three: 'there are three', direct: 'direct contact', indirect: 'indirect contact', vector: 'vector transmission', link: 'Each step is a link', every: 'every link is a place'});
export const CH = {lx: 330, rx: 1590, y: 560, r: 90};
export const SceneChain: React.FC = () => {
	const f = useCurrentFrame();
	const gs = K2.newhost + 16;
	const gt = f < gs ? -1 : clamp01((f - gs) / 60);
	const sx = stX(CH.lx, CH.rx, CH.r);
	const lab = [K2.direct, K2.indirect, K2.vector];
	return (
		<>
			<Heading text={HEAD} at={-100} size={58} />
			<Overlay>
				<Pl p={PLATES.pump} cx={200} cy={330} w={150} o={1 - prog(f, 0, 20)} />
				<Chain {...CH} leftO={prog(f, K2.leave, 14)} laneP={prog(f, K2.travel, 26)} rightO={prog(f, K2.newhost, 14)} glyphT={gt}
					st={[prog(f, K2.leave + 6, 12), prog(f, K2.travel + 10, 12), prog(f, K2.newhost + 6, 12)]} />
				<CTag x={960} y={790} text="mode of transmission: how a pathogen travels between hosts" at={K2.mode} out={K2.link} color={AMBER_INK} size={36} maxW={1400} anchor="middle" dim={prog(f, K2.three, 10)} />
				{MODES_STACK.map((t, i) => {
					const newest = vis(f, lab[i], lab[i + 1], 10);
					return <Sx key={t} x={960} y={300 + i * 52} text={t} size={40} color={newest > 0.5 && f < K2.link ? AMBER_INK : GREY_INK} hand anchor="middle" at={lab[i]} />;
				})}
				{sx.map((x, i) => <BreakMark key={i} x={x} y={CH.y} h={120} at={K2.every + 8 + i * 16} out={K2.every + 8 + i * 16 + 40} />)}
				{void INK}{void TEAL}
			</Overlay>
		</>
	);
};
const MODES_STACK = ['direct contact', 'indirect contact', 'vector'];

// ---------- 3. Direct contact ----------
const K3 = cues(S('direct-contact'), {straight: 'passes straight', nothing: 'nothing in between', tinea: 'Tinea spreads', hiv: 'HIV passes', large: 'large droplets', fall: 'fall within', influenza: 'influenza', grouped: 'usually grouped'});
export const SceneDirect: React.FC = () => {
	const f = useCurrentFrame();
	const m1 = smooth(prog(f, K3.straight, 50));
	const m2 = smooth(prog(f, K3.large, 30));
	const lx = lerp(lerp(CH.lx, 865, m1), 560, m2), rx = lerp(lerp(CH.rx, 1055, m1), 1300, m2);
	const hivP = f >= K3.hiv && f < K3.large ? ((f - K3.hiv) % 44) / 44 : -1;
	const G = 712;
	const b0 = 560 + CH.r, b1 = 1010;
	return (
		<Overlay>
			<ModeTabs lit={0} o={prog(f, 0, 12)} />
			<Chain lx={lx} rx={rx} y={CH.y} r={CH.r} st={[1 - m1, 1 - m1, 1 - m1]} glyphO={1} />
			<Tg x={960} y={420} text="nothing in between" at={K3.nothing} out={K3.tinea} size={42} anchor="middle" />
			<Pl p={PLATES.hyphae} cx={960} cy={CH.y} w={150} o={vis(f, K3.tinea, K3.large, 12)} dim={prog(f, K3.hiv, 12)} />
			<CTag x={960} y={760} text="tinea: skin to skin" at={K3.tinea + 6} out={K3.hiv} color={AMBER_INK} size={36} anchor="middle" />
			{hivP >= 0 ? <path d={`M${lerp(910, 1010, hivP)},${CH.y - 14} q8,12 0,22 q-8,-10 0,-22 Z`} fill={RED} stroke="#7a1f19" strokeWidth={1.5} transform={`translate(0,${-6})`} opacity={Math.sin(hivP * Math.PI)} /> : null}
			<CTag x={960} y={760} text="HIV: blood and body fluids" at={K3.hiv + 6} out={K3.large} color={RED} size={36} anchor="middle" />
			<GTag x={960} y={850} text="sex, mother to baby" at={K3.hiv + 24} out={K3.large} size={26} anchor="middle" />
			{/* droplets fall within a short marked distance */}
			{f >= K3.large ? <DrawPath d={`M380,${G} L1480,${G}`} at={K3.large} dur={16} color={INK_SOFT} width={3} /> : null}
			<Droplets sx={560 + CH.r * 0.8} sy={CH.y - 20} ground={G} range={b1 - b0 - 20} at={K3.large + 14} bursts={3} gap={70} />
			<g opacity={prog(f, K3.fall, 12)}>
				<DrawPath d={`M${b0},${G + 22} L${b0},${G + 40} L${b1},${G + 40} L${b1},${G + 22}`} at={K3.fall} dur={14} color={AMBER_INK} width={4} />
				<Sx x={(b0 + b1) / 2} y={G + 84} text="1 to 2 m" size={38} color={AMBER_INK} hand anchor="middle" at={K3.fall + 6} />
			</g>
			<CTag x={380} y={370} text="large droplets fall fast" at={K3.large + 20} out={K3.influenza} color={DROP} size={32} />
			<Pl p={PLATES.flu} cx={830} cy={400} w={130} o={prog(f, K3.influenza, 14)} />
			<CTag x={910} y={370} text="influenza: close-range droplets" at={K3.influenza + 6} color={AMBER_INK} size={34} />
			<GTag x={(b0 + b1) / 2} y={G + 110} text="grouped as direct: close range" at={K3.grouped} size={26} anchor="middle" />
		</Overlay>
	);
};

// ---------- 4. Indirect contact ----------
const K4 = cues(S('indirect-contact'), {nonliving: 'something non-living', fomite: 'called a fomite', door: 'door handle', water: 'be water', food: 'or food', chicken: 'undercooked chicken', air: 'the air', tb: 'tuberculosis and measles', leaves: 'infected person leaves'});
const SLOT = {x: 960, y: 560, w: 330, h: 250};
const ROWY = 900;
/** An object that sits in the slot from `inAt`, then slides to its grey thumbnail spot at `toAt`. */
const SlotObj: React.FC<{p: typeof PLATES.pump; inAt: number; toAt: number; tx: number}> = ({p, inAt, toAt, tx}) => {
	const f = useCurrentFrame();
	const o = prog(f, inAt, 14);
	if (o <= 0.01) return null;
	const m = smooth(prog(f, toAt, 24));
	const big = fitW(p, SLOT.w - 40, SLOT.h - 30), small = fitW(p, 110, 90);
	return <Pl p={p} cx={lerp(SLOT.x, tx, m)} cy={lerp(SLOT.y, ROWY, m) - (1 - smooth(o)) * 30} w={lerp(big, small, m)} o={o} dim={m * 0.7} />;
};
export const SceneIndirect: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, 0, 30));
	const lx = lerp(560, CH.lx, m), rx = lerp(1300, CH.rx, m);
	const slotO = vis(f, K4.nonliving, K4.air + 10, 12);
	return (
		<Overlay>
			<ModeTabs lit={1} />
			<Chain lx={lx} rx={rx} y={CH.y} r={CH.r} st={[0, 0, 0]} leftGone={prog(f, K4.leaves, 20)} />
			<rect x={SLOT.x - SLOT.w / 2} y={SLOT.y - SLOT.h / 2} width={SLOT.w} height={SLOT.h} rx={22} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" opacity={slotO} />
			<SlotObj p={PLATES.handle} inAt={K4.fomite + 10} toAt={K4.water} tx={700} />
			<SlotObj p={PLATES.pump} inAt={K4.water + 14} toAt={K4.food} tx={830} />
			<SlotObj p={PLATES.chicken} inAt={K4.chicken} toAt={K4.air} tx={960} />
			<GTag x={1030} y={ROWY - 20} text="shared needles: a fomite" at={K4.chicken + 50} size={24} />
			<CTag x={110} y={700} text="fomite: a contaminated non-living object" at={K4.fomite} out={K4.food} color={AMBER_INK} size={32} maxW={560} />
			<Tg x={960} y={735} text="door handle: norovirus" at={K4.door} out={K4.water} size={40} anchor="middle" />
			<Tg x={960} y={735} text="water: cholera" at={K4.water + 10} out={K4.food} size={40} anchor="middle" />
			<Tg x={960} y={735} text="undercooked chicken: Salmonella" at={K4.chicken + 6} out={K4.air} size={40} anchor="middle" />
			{/* the air: particles drift and linger; a ghost of scene 3's droplet bracket for contrast */}
			<g opacity={0.55 * prog(f, K4.air + 20, 14)}>
				<DrawPath d={`M${CH.lx + CH.r},640 L${CH.lx + CH.r},656 L${CH.lx + CH.r + 300},656 L${CH.lx + CH.r + 300},640`} at={K4.air + 20} dur={14} color={GREYT} width={3} dash="8 6" />
				<Sx x={CH.lx + CH.r + 150} y={690} text="droplets fall here" size={24} color={GREY_INK} weight={600} anchor="middle" at={K4.air + 26} />
			</g>
			<Drift sx={CH.lx + 40} sy={CH.y - 10} x1={1560} band={80} at={K4.air + 6} n={30} />
			<Pl p={PLATES.tb} cx={960} cy={470} w={200} o={prog(f, K4.tb, 14)} />
			<Tg x={960} y={760} text="air: tuberculosis, measles" at={K4.tb + 4} size={40} anchor="middle" />
			<GTag x={960} y={790} text="lingers: grouped as indirect" at={K4.leaves + 14} size={26} anchor="middle" />
			{void TEAL}{void INK}{void tw}
		</Overlay>
	);
};

// ---------- 5. Vector transmission ----------
const K5 = cues(S('vector'), {living: 'a living organism', tick: 'or a tick', anoph: 'Anopheles mosquitoes', plas: 'carry Plasmodium', develops: 'develops inside', cycle: 'life cycle', handle: "a door handle isn't", isnt: "isn't a vector", alive: 'vector is alive', object: 'contaminated object'});
export const SceneVector: React.FC = () => {
	const f = useCurrentFrame();
	const sp = smooth(prog(f, K5.handle, 26));
	const chainO = 1 - 0.75 * sp;
	const mx = lerp(960, 640, sp), my = lerp(540, 560, sp);
	const mw = fitW(PLATES.anoph, lerp(320, 400, sp), lerp(230, 300, sp));
	const hO = prog(f, K5.handle, 16);
	const chipW = tw('a door handle is a vector', 30) + 48;
	return (
		<Overlay>
			<ModeTabs lit={2} />
			<g opacity={chainO}>
				<Chain {...CH} st={[0, 0, 0]} />
				<Pl p={PLATES.plasmo} cx={CH.lx} cy={CH.y} w={130} o={prog(f, K5.plas, 14)} />
				<Pl p={PLATES.tick} cx={1240} cy={680} w={110} o={vis(f, K5.tick, K5.handle, 12)} dim={0.5} />
				<CurveArrow a={[CH.lx + 50, CH.y - 70]} b={[mx - 150, my - 90]} at={K5.develops} bow={-110} color={AMBER_INK} width={4} />
				<CurveArrow a={[mx + 150, my - 90]} b={[CH.rx - 50, CH.y - 70]} at={K5.develops + 22} bow={-110} color={AMBER_INK} width={4} />
			</g>
			<Pl p={PLATES.anoph} cx={mx} cy={my} w={mw} o={prog(f, K5.living, 14)} />
			<CTag x={960} y={730} text="vector: a living organism that carries a pathogen between hosts" at={K5.living + 6} out={K5.handle} color={AMBER_INK} size={34} maxW={1300} anchor="middle" />
			<Tg x={CH.lx} y={430} text="Plasmodium: malaria" at={K5.plas + 6} out={K5.develops} size={38} anchor="middle" />
			<Tg x={960} y={330} text="part of its life cycle" at={K5.develops + 10} out={K5.handle} size={42} anchor="middle" />
			{/* a door handle is not a vector */}
			<Fit p={PLATES.handle} cx={1280} cy={lerp(900, 560, smooth(hO))} mw={300} mh={230} o={hO} />
			<CTag x={640} y={720} text="vector: alive" at={K5.alive} color={TEAL} size={38} anchor="middle" />
			<CTag x={1280} y={720} text="fomite: not alive" at={K5.object} color={AMBER_INK} size={38} anchor="middle" />
			<MistakeChip x={960 - chipW / 2} y={860} text="a door handle is a vector" at={K5.handle + 6} cross={K5.isnt + 10} size={30} />
			{void K5.anoph}{void K5.cycle}{void AMBER}{void INK}{void plH}
		</Overlay>
	);
};
