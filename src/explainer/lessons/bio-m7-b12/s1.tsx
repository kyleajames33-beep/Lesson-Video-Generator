// M7 B12 scenes 1 to 4: the hook (DDT spraying and surviving Anopheles; Townsville's released Aedes carrying a
// bacterium), three ways to cut the link (the route with the mosquito as the travel link, the three conditions, three
// chips), the life cycle in a bucket (the wheel draws; the dry bucket floods by crossfade; the larva and pupa close-up),
// and removing water (the flooded bucket tips and sits dry; campaign chips; a break on the wheel; one missed bucket).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {HostCircle} from '../bio-m7-b01/parts';
import {S} from './common';
import {PLATES} from './assets';
import {
	AMBER, AMBER_INK, BreakMark, CTag, DrawPath, GREYT, GREY_INK, GTag, HEAD, INK_SOFT, Pl, PlainArrow, PlateB, PopRow, Rain, Ring, Sx, TEAL, Wheel, between, clamp01, fitW, lerp, pp, prog,
	pulse, smooth, vis, wPt,
} from './parts';
import type {WG} from './parts';

export const WL: WG = {cx: 400, cy: 610, R: 200, ps: 130};

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {sprayed: 'world sprayed DDT', survive: 'could survive it', y2014: 'In 2014', released: 'released more mosquitoes', carrying: 'carrying a bacterium', dengue: 'local dengue stayed', so: 'So how does'});
const COAST = 'M1140,250 C1180,330 1150,400 1210,470 C1260,540 1250,610 1320,680 C1360,720 1380,750 1400,780';
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const dim = prog(f, K1.y2014, 14);
	const fadeP = prog(f, K1.survive + 6, 20);
	const fill = prog(f, K1.survive + 30, 40);
	return (
		<>
			<Heading text={HEAD} at={K1.so + 4} size={52} />
			<Overlay>
				<g opacity={1 - 0.6 * dim}>
					<Pl p={PLATES.sprayer} cx={280} cy={420} w={fitW(PLATES.sprayer, 260, 330)} o={prog(f, 0, 14)} />
					<GTag x={160} y={610} text="1950s: DDT spraying" at={10} size={20} />
					<Pl p={PLATES.anoph} cx={640} cy={420} w={300} o={prog(f, 8, 14)} />
					<GTag x={540} y={610} text="Anopheles: malaria" at={18} size={20} />
					<PopRow x={140} y={740} n={10} dx={64} w={56} p={PLATES.anoph} alive={i => (i === 2 || i === 7 ? 1 : Math.max(1 - fadeP, fill))} ring={i => (i === 2 || i === 7 ? prog(f, K1.survive, 10) : fill)} o={prog(f, K1.sprayed, 14)} />
					<CTag x={140} y={800} text="survivors breed" at={K1.survive + 30} color={AMBER_INK} size={26} />
				</g>
				{f >= K1.y2014 ? <DrawPath d={COAST} at={K1.y2014} dur={30} color={INK_SOFT} width={4} /> : null}
				<circle cx={1290} cy={650} r={10} fill={AMBER} opacity={prog(f, K1.y2014 + 20, 10)} />
				<Sx x={1310} y={640} text="Townsville, 2014" size={26} color={INK_SOFT} hand weight={700} at={K1.y2014 + 24} />
				<Sx x={1150} y={230} text="north Queensland coast" size={18} color={GREY_INK} weight={600} at={K1.y2014 + 10} />
				<Pl p={PLATES.aedes} cx={1650} cy={430} w={300} o={prog(f, K1.released, 14)} />
				<PopRow x={1040} y={850} n={12} dx={64} w={56} teal={i => prog(f, K1.carrying + 6 + i * 3, 8)} o={prog(f, K1.released + 6, 14)} />
				<CTag x={1040} y={900} text="carrying a bacterium" at={K1.carrying + 20} color={TEAL} size={26} dim={prog(f, K1.dengue, 10)} out={K1.dengue + 20} />
				<GTag x={1040} y={910} text="local dengue rare for about ten years; 16 local cases in 2024 to 2025" at={K1.dengue + 24} size={20} />
				<GTag x={1040} y={960} text="O'Neill et al., 2018 to 2019; Thompson et al., 2026" at={K1.dengue + 34} size={16} />
				{void lerp}
			</Overlay>
		</>
	);
};

// ---------- 2. Three ways to cut the link ----------
const K2 = cues(S('three-ways'), {vector: 'A vector is', aedes: 'Aedes aegypti', bites: 'bites an infected', survives: 'survives while the', else: 'bites someone else', three: 'three ways', fm: 'fewer mosquitoes,', fb: 'fewer bites,', rarely: 'mosquitoes that rarely'});
export const SceneThreeWays: React.FC = () => {
	const f = useCurrentFrame();
	const day = smooth(prog(f, K2.survives + 6, 40));
	const grey = prog(f, K2.rarely + 10, 12);
	const thin = prog(f, K2.fm + 10, 30);
	const chips = [{at: K2.fm, text: 'fewer mosquitoes'}, {at: K2.fb, text: 'fewer bites'}, {at: K2.rarely, text: 'mosquitoes that rarely pass the virus on'}];
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<HostCircle x={260} y={380} r={80} label="infected host" o={prog(f, 0, 14)} />
				<HostCircle x={1660} y={380} r={80} label="new host" o={prog(f, 4, 14)} />
				<Pl p={PLATES.aedes} cx={960} cy={370} w={280} o={prog(f, K2.vector, 14)} />
				<CircleDot x={975} y={380} o={prog(f, K2.rarely + 6, 10)} />
				<GTag x={810} y={230} text="b03: vector, a living carrier" at={K2.vector + 10} size={20} />
				<GTag x={760} y={590} text="dengue: a virus, carried by Aedes aegypti (north Queensland)" at={K2.aedes + 6} out={K2.three} size={18} />
				{f >= K2.bites ? <PlainArrow x1={350} y1={360} x2={800} y2={360} at={K2.bites} color={grey > 0.5 ? GREYT : AMBER} width={5} /> : null}
				{day > 0.01 ? (
					<g opacity={1 - prog(f, K2.three, 14)}>
						<rect x={830} y={490} width={260} height={22} rx={11} fill="#f3f2ee" stroke={GREYT} strokeWidth={2} />
						<rect x={830} y={490} width={260 * day} height={22} rx={11} fill="#b9b2a4" />
						<Sx x={830} y={540} text="about 8 to 12 days inside the mosquito" size={18} color={GREY_INK} weight={600} at={-100} />
					</g>
				) : null}
				{f >= K2.else ? <PlainArrow x1={1120} y1={360} x2={1570} y2={360} at={K2.else} color={grey > 0.5 ? GREYT : AMBER} width={5} dash={vis(f, K2.fb + 6, K2.rarely, 8) > 0.5 ? '12 10' : undefined} /> : null}
				{chips.map((c, i) => {
					const o = prog(f, c.at, 14);
					if (o <= 0.01) return null;
					const on = vis(f, c.at, chips[i + 1]?.at ?? 1e9, 10) > 0.5;
					const y = 640 + i * 130;
					return (
						<g key={i} opacity={o * (on ? 1 : 0.6)}>
							<rect x={200} y={y} width={1100} height={100} rx={28} fill={on ? '#fff3d9' : '#fffdf8'} stroke={AMBER} strokeWidth={on ? 4 : 2.5} />
							<Sx x={240} y={y + 66} text={`${i + 1}`} size={44} color={AMBER_INK} weight={800} at={-100} />
							<Sx x={310} y={y + 66} text={c.text} size={42} color="#2b2620" hand at={-100} />
						</g>
					);
				})}
				<PopRow x={1360} y={690} n={6} dx={64} w={56} alive={i => (i < 2 ? 1 : 1 - thin)} o={prog(f, K2.fm + 4, 12)} />
				{void TEAL}{void K2.three}
			</Overlay>
		</>
	);
};
export const CircleDot: React.FC<{x: number; y: number; o: number; r?: number}> = ({x, y, o, r = 11}) => (o <= 0.01 ? null : <circle cx={x} cy={y} r={r} fill={TEAL} stroke="#1f5a60" strokeWidth={2} opacity={o} />);

// ---------- 3. The life cycle in a bucket ----------
const K3 = cues(S('life-cycle'), {start: 'Start with the', lays: 'lays her eggs', tyre: 'old tyre', floods: 'rain floods them', pupa: 'becomes a pupa', week: 'about a week', adult: 'an adult flies', only: 'Only females bite'});
export const WC: WG = {cx: 760, cy: 600, R: 280, ps: 200};
export const SceneLifeCycle: React.FC = () => {
	const f = useCurrentFrame();
	const flood = prog(f, K3.floods + 20, 20);
	const top = wPt(WC, -90);
	const lpW = 480;
	const pupaPt = pp(PLATES.larvaPupa, 1500, 610, lpW, [1520, 980]);
	return (
		<>
			<Heading text="The life cycle in a bucket" at={4} size={52} />
			<Overlay>
				<Wheel g={WC} at={K3.start} flood={flood} plateAt={[K3.lays, K3.floods + 30, K3.pupa, K3.adult]} lit={[vis(f, K3.lays, K3.floods + 30, 10), vis(f, K3.floods + 30, K3.pupa, 10), vis(f, K3.pupa, K3.adult, 10), prog(f, K3.adult, 10)]} labelSize={26} />
				<CTag x={top[0] + 130} y={top[1] - 60} text="eggs above the waterline" at={K3.lays + 20} color={AMBER_INK} size={24} dim={prog(f, K3.floods, 10)} out={K3.floods + 30} />
				<GTag x={top[0] + 130} y={top[1] + 10} text="plant saucer" at={K3.tyre} out={K3.floods + 30} size={20} />
				<GTag x={top[0] + 290} y={top[1] + 10} text="old tyre" at={K3.tyre + 8} out={K3.floods + 30} size={20} />
				<GTag x={top[0] + 130} y={top[1] + 60} text="eggs survive months dry" at={K3.tyre + 20} out={K3.floods + 30} size={20} />
				<Rain x={top[0] - 90} y={top[1] - 140} w={180} h={120} at={K3.floods} out={K3.floods + 50} />
				<Pl p={PLATES.larvaPupa} cx={1500} cy={610} w={lpW} o={prog(f, K3.floods + 36, 14)} />
				<CTag x={1300} y={420} text="larva: a wriggler" at={K3.floods + 46} color={AMBER_INK} size={26} dim={prog(f, K3.pupa, 10)} />
				<Ring cx={pupaPt[0]} cy={pupaPt[1]} rx={80} ry={110} at={K3.pupa + 4} out={K3.adult} />
				<CTag x={1300} y={760} text="pupa: the resting stage before the adult" at={K3.pupa + 10} color={AMBER_INK} size={24} maxW={520} dim={prog(f, K3.week, 10)} />
				<CTag x={1300} y={880} text="about 7 to 10 days, egg to adult (warm weather)" at={K3.week + 6} color={INK_SOFT} size={24} maxW={560} dim={prog(f, K3.only, 10)} />
				<GTag x={180} y={980} text="only females bite: blood to make eggs" at={K3.only + 6} size={22} />
				{void between}{void clamp01}{void AMBER}{void PlateB}{void BreakMark}{void pulse}
			</Overlay>
		</>
	);
};

// ---------- 4. Take away the water ----------
const K4 = cues(S('remove-water'), {simplest: 'take away the', campaigns: 'Public health campaigns', tip: 'tip out containers', screen: 'screen rainwater tanks', clear: 'clear blocked gutters', hatch: "eggs don't hatch", env: 'environmental management', cheap: 'cheap and uses', nearly: 'nearly every household'});
export const SceneRemoveWater: React.FC = () => {
	const f = useCurrentFrame();
	const z = smooth(prog(f, 0, 26));
	const g: WG = {cx: lerp(WC.cx, WL.cx, z), cy: lerp(WC.cy, WL.cy, z), R: lerp(WC.R, WL.R, z), ps: lerp(WC.ps, WL.ps, z)};
	const tip = f < K4.simplest + 4 ? 0 : Math.sin(clamp01((f - K4.simplest - 4) / 60) * Math.PI);
	const dryNow = prog(f, K4.simplest + 40, 16);
	const bw = fitW(PLATES.flooded, 330, 330);
	const chips = [{at: K4.tip, t: 'tip out containers'}, {at: K4.screen, t: 'screen rainwater tanks'}, {at: K4.clear, t: 'clear blocked gutters'}];
	const street = Array.from({length: 12}, (_, i) => [700 + i * 92, 940] as [number, number]);
	return (
		<>
			<Heading text="Take away the water" at={4} size={52} />
			<Overlay>
				<Wheel g={g} flood={1} plateAt={[-100, -100, -100, -100]} dim={[0, prog(f, K4.hatch + 10, 12), 0, 0]} breaks={[{deg: between(0), at: K4.hatch + 4}]} labelSize={22} />
				<g transform={`rotate(${tip * 70} ${860 + bw / 2} ${560})`} opacity={prog(f, 10, 14) * (1 - prog(f, K4.nearly - 10, 16))}>
					<PlateB p={PLATES.flooded} cx={860} cy={440} w={bw} o={1 - dryNow} />
					<PlateB p={PLATES.dry} cx={860} cy={440} w={bw} o={dryNow} />
				</g>
				{tip > 0.2 && f < K4.simplest + 50 ? Array.from({length: 6}, (_, i) => <circle key={i} cx={1060 + i * 8} cy={560 + ((f * 4 + i * 20) % 120)} r={6} fill="#7fb2d8" opacity={0.7} />) : null}
				<GTag x={760} y={650} text="tipped out" at={K4.simplest + 60} out={K4.nearly - 10} size={22} />
				{chips.map((c, i) => <CTag key={i} x={1220} y={220 + i * 80} text={c.t} at={c.at} color={AMBER_INK} size={28} dim={prog(f, K4.env, 10)} />)}
				<GTag x={1220} y={470} text="Queensland: tip, toss and cover" at={K4.clear + 14} size={20} />
				<CTag x={560} y={960} text="no water: no larvae" at={K4.hatch + 16} color={AMBER_INK} size={24} dim={prog(f, K4.env, 10)} out={K4.nearly - 10} />
				<CTag x={1220} y={560} text="environmental management: changing places so a vector can't breed" at={K4.env + 4} color={TEAL} size={28} maxW={620} />
				<GTag x={1220} y={680} text="b10: changing places" at={K4.env + 14} size={18} />
				<GTag x={1220} y={730} text="no chemicals, low cost" at={K4.cheap + 6} size={20} />
				{street.map((p, i) => {
					const o = prog(f, K4.nearly + i * 2, 10);
					const keep = i === 8;
					const dry = keep ? 0 : prog(f, K4.nearly + 20 + i * 3, 12);
					return (
						<g key={i} opacity={o}>
							<PlateB p={PLATES.flooded} cx={p[0]} cy={p[1]} w={70} o={1 - dry} />
							<PlateB p={PLATES.dry} cx={p[0]} cy={p[1]} w={70} o={dry} />
						</g>
					);
				})}
				<Ring cx={street[8][0]} cy={street[8][1]} rx={50} ry={50} at={K4.nearly + 60} color={AMBER} />
				<CTag x={1000} y={810} text="one missed container keeps breeding" at={K4.nearly + 66} color={AMBER_INK} size={24} />
				{void GREY_INK}
			</Overlay>
		</>
	);
};
