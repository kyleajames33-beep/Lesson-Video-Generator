import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Chip, Cross, DotP, Fade, Flame, Overlay, Pellets, Ring, Sx, Tag} from './parts';
import {Heading, H2C, HEAT, IRON_DARK, N2C, NH3C, RATE, YIELD, COST, CROSS, kf, sc} from './common';

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));

// ---------- 5. Pressure helps both, so what stops it? ----------
const P = 'pressure-limit';
const K1 = cues(sc(P), {both: 'Pressure helps both', crowd: 'Squeezing crowds', rise: 'both rates rise', shift: 'shifts the balance', two: 'two gas particles', why: 'So why not', thou: 'a thousand atmospheres', less: 'less extra ammonia', steel: 'thicker steel', pumps: 'stronger pumps', energy: 'extra energy', more: 'cost more', leak: 'a leak', stops: 'stops paying', plant: 'about two hundred atmospheres'});
export const ScenePressure: React.FC = () => {
	const f = useCurrentFrame();
	const AX = 760, X0 = 300, DX = 150;
	const xs = Array.from({length: 8}, (_, i) => X0 + i * DX);
	const gH = (i: number) => 230 * Math.pow(0.7, i);
	const rH = (i: number) => 40 + 28 * i;
	const wall = 30 + 60 * prog(f, K1.steel, 60);
	const pump = 0.5 + 0.5 * prog(f, K1.pumps, 40);
	const flame = (0.5 + 0.5 * prog(f, K1.energy, 40)) * (1 + 0.06 * Math.sin(f * 0.4));
	const rt = 28 + 70 * prog(f, K1.both + 10, 60);
	return (
		<>
			<Heading text="Pressure helps both. What stops it?" at={4} size={56} />
			<Overlay>
				<Tag x={1380} y={96} w={440} text="illustrative shapes, no numbers" at={K1.both + 20} size={28} />
				{/* the two reasons pressure helps */}
				<Fade at={K1.crowd}>
					<rect x={110} y={196} width={46} height={rt} rx={5} fill={RATE} stroke={INK} strokeWidth={3} transform={`translate(0,${100 - rt})`} />
					<rect x={168} y={196} width={46} height={rt * 0.9} rx={5} fill="#d99a2b" stroke={INK} strokeWidth={3} transform={`translate(0,${100 - rt * 0.9})`} />
					<Sx x={236} y={262} text="both rates rise" size={38} color={RATE} hand at={K1.rise} />
				</Fade>
				<Chip x={620} y={214} w={250} text="4 gas particles" size={32} at={K1.shift} color={N2C} />
				<Chip x={980} y={214} w={250} text="2 gas particles" size={32} at={K1.two} color={NH3C} />
				<Arrow x1={886} y1={245} x2={964} y2={245} at={K1.two} color={YIELD} width={7} />
				{/* pressure axis */}
				<Fade at={K1.both + 20}>
					<path d={`M200,${AX} L1760,${AX}`} stroke={INK} strokeWidth={6} strokeLinecap="round" />
					<path d={`M1740,${AX - 14} L1762,${AX} L1740,${AX + 14}`} fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
					<Sx x={200} y={AX + 52} text="low pressure" size={34} color={INK_SOFT} hand at={K1.both + 20} />
					<Sx x={1480} y={AX + 52} text="very high pressure" size={34} color={INK_SOFT} anchor="end" hand at={K1.both + 24} />
				</Fade>
				{/* a key for the paired bars */}
				<Fade at={K1.less - 20}>
					<rect x={820} y={330} width={26} height={26} rx={5} fill={YIELD} />
					<Sx x={858} y={354} text="extra ammonia from the next step up" size={28} color={YIELD} at={K1.less - 20} />
					<rect x={820} y={378} width={26} height={26} rx={5} fill={COST} />
					<Sx x={858} y={402} text="extra cost of the next step up" size={28} color={COST} at={K1.steel} />
				</Fade>
				{xs.map((x, i) => {
					const ga = K1.less + i * 8, ra = K1.steel + i * 10;
					const gp = prog(f, ga, 14), rp = prog(f, ra, 14);
					return (
						<g key={i}>
							<path d={`M${x},${AX} L${x},${AX + 12}`} stroke={INK} strokeWidth={3} />
							{gp > 0.01 ? <rect x={x - 62} y={AX - gH(i) * gp} width={54} height={gH(i) * gp} rx={5} fill={YIELD} stroke={INK} strokeWidth={3} /> : null}
							{rp > 0.01 ? <rect x={x + 8} y={AX - rH(i) * rp} width={54} height={rH(i) * rp} rx={5} fill={COST} stroke={INK} strokeWidth={3} /> : null}
						</g>
					);
				})}
				{/* what the cost is made of */}
				<Fade at={K1.steel}>
					<g transform="translate(1460,250)">
						<rect x={0} y={0} width={wall} height={96} fill="#c9ced4" stroke={IRON_DARK} strokeWidth={4} />
						{[24, 48, 72].map(y => <path key={y} d={`M0,${y} L${wall},${y}`} stroke={IRON_DARK} strokeWidth={2} />)}
						<Sx x={50} y={146} text="thicker" size={26} color={INK_SOFT} anchor="middle" at={K1.steel} /><Sx x={50} y={176} text="steel" size={26} color={INK_SOFT} anchor="middle" at={K1.steel} />
					</g>
				</Fade>
				<Fade at={K1.pumps}>
					<g transform={`translate(1650,298) scale(${pump * 0.85})`}>
						<circle r={44} fill="#dfe2e6" stroke={IRON_DARK} strokeWidth={5} />
						<path d="M-16,-22 L24,0 L-16,22 Z" fill={RATE} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
					</g>
					<Sx x={1650} y={376} text="stronger" size={26} color={INK_SOFT} anchor="middle" at={K1.pumps} /><Sx x={1650} y={406} text="pumps" size={26} color={INK_SOFT} anchor="middle" at={K1.pumps} />
				</Fade>
				<Fade at={K1.energy}>
					<Flame x={1775} y={298} s={flame} />
					<Sx x={1775} y={376} text="extra" size={26} color={INK_SOFT} anchor="middle" at={K1.energy} /><Sx x={1775} y={406} text="energy" size={26} color={INK_SOFT} anchor="middle" at={K1.energy} />
				</Fade>
				{/* a leak */}
				<Fade at={K1.leak}>
					<rect x={1450} y={470} width={220} height={44} rx={10} fill="#dfe2e6" stroke={IRON_DARK} strokeWidth={5} />
					<path d="M1560,470 l-8,-16 l14,8 l-4,-22 l14,18 l4,-14 l6,26" fill="none" stroke={COST} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					<path d="M1560,515 q-18,22 -34,44 M1566,515 q6,26 4,52 M1572,515 q22,18 40,32" fill="none" stroke={HEAT} strokeWidth={5} strokeLinecap="round" opacity={0.8} />
					<path d="M1620,420 L1644,462 L1596,462 Z" fill="#f5c542" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
					<text x={1620} y={456} textAnchor="middle" fill={INK} style={{fontWeight: 800, fontSize: 28}}>!</text>
					<Sx x={1560} y={612} text="a leak is dangerous" size={30} color={COST} anchor="middle" hand at={K1.leak + 6} />
				</Fade>
				{/* 1000 atm */}
				<Fade at={K1.thou}>
					<path d={`M1700,590 L1700,${AX}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" />
					<Sx x={1700} y={AX + 100} text="1000 atm" size={40} color={INK} anchor="middle" hand at={K1.thou} />
				</Fade>
				<Cross x={1700} y={566} at={K1.thou + 20} s={24} />
				<Fade at={K1.stops - 10}>
					<Sx x={1830} y={AX + 150} text="extra ammonia no longer pays" size={30} color={INK_SOFT} anchor="end" hand at={K1.stops - 10} />
					<Sx x={1830} y={AX + 186} text="for the extra cost" size={30} color={INK_SOFT} anchor="end" hand at={K1.stops - 4} />
				</Fade>
				{/* the compromise band */}
				<Fade at={K1.stops}>
					<rect x={595} y={440} width={160} height={AX - 440} rx={14} fill="#f5c542" opacity={0.2} stroke={AMBER_INK} strokeWidth={4} strokeDasharray="10 8" />
					<Sx x={675} y={424} text="compromise" size={50} color={AMBER_INK} anchor="middle" hand at={K1.stops} />
				</Fade>
				<Fade at={K1.plant}>
					<Sx x={675} y={AX + 100} text="plants choose about 150 to 250 atm" size={34} color={AMBER_INK} anchor="middle" hand at={K1.plant} />
					<Sx x={675} y={AX + 142} text="(a plant decision, not read from this graph)" size={26} color={INK_SOFT} anchor="middle" at={K1.plant + 8} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 6. Take the ammonia out and send the rest round again ----------
const Rc = 'recycle';
const K2 = cues(sc(Rc), {even: 'Even at this', part: 'only part of the gas', fifth: 'a fifth', under: 'a little under', cooled: 'cooled until', liquid: 'turns to a liquid', cond: 'called condensing', drawn: 'drawn off', stay: 'stay gases', pumped: 'pumped back', recyc: 'which is recycling', less: 'holds less ammonia', fwd: 'shift runs forward', many: 'Over many trips', over: 'more than ninety-five'});
const V = 6;
const ROUTE: [number, number][] = [[96, 500], [560, 500], [740, 500], [900, 500], [1090, 500], [1260, 500], [1370, 500], [1370, 360], [1370, 250], [400, 250], [400, 500]];
const CUM = ROUTE.reduce<number[]>((a, p, i) => { a.push(i === 0 ? 0 : a[i - 1] + Math.hypot(p[0] - ROUTE[i - 1][0], p[1] - ROUTE[i - 1][1])); return a; }, []);
const pt = (s: number): [number, number] => {
	if (s <= 0) return ROUTE[0];
	for (let i = 1; i < ROUTE.length; i++) {
		if (s <= CUM[i]) { const u = (s - CUM[i - 1]) / (CUM[i] - CUM[i - 1]); return [ROUTE[i - 1][0] + (ROUTE[i][0] - ROUTE[i - 1][0]) * u, ROUTE[i - 1][1] + (ROUTE[i][1] - ROUTE[i - 1][1]) * u]; }
	}
	return ROUTE[ROUTE.length - 1];
};
const S_REACT = CUM[2], S_CUT = CUM[3] - 40, S_TANK = CUM[5], S_B0 = CUM[7], S_RECYC = 304;
type Dot = {x: number; y: number; fill: string; o: number};
const simulate = (f: number, k: Record<string, number>) => {
	const dots: Dot[] = [];
	let drops = 0;
	for (let j = 0; j < 52; j++) {
		const base = j % 2 ? N2C : H2C;
		let t = 10 + j * 20, s0 = 0;
		for (let trip = 0; trip < 6; trip++) {
			const tAt = (s: number) => t + (s - s0) / V;
			if (f < t) break;
			const frac = tAt(S_REACT) >= k.fwd ? 0.5 : 0.2;
			const green = ((j * 7 + trip * 3) % 10) / 10 < frac;
			const live = tAt(S_CUT) >= k.cooled;
			if (!live) {
				const s = s0 + (f - t) * V;
				if (s <= S_CUT + 30) { const [x, y] = pt(s); dots.push({x, y, fill: s > S_REACT && green ? NH3C : base, o: s > S_CUT ? 1 - (s - S_CUT) / 30 : 1}); }
				break;
			}
			const tArr = tAt(S_TANK);
			if (f < tArr) { const s = s0 + (f - t) * V; const [x, y] = pt(s); dots.push({x, y, fill: s > S_REACT && green ? NH3C : base, o: 1}); break; }
			const hx = 1310 + ((j * 29) % 120), hyU = 385 + ((j * 17) % 70), hyG = 505 + ((j * 13) % 60);
			if (green) {
				const dropT = Math.max(tArr, k.liquid + (j % 5) * 7);
				if (f < dropT) { dots.push({x: hx, y: hyG, fill: NH3C, o: 1}); break; }
				const u = (f - dropT) / 26;
				if (u < 1) { dots.push({x: hx, y: hyG + (610 - hyG) * u * u, fill: NH3C, o: 1}); } else drops++;
				break;
			}
			const leave = Math.max(tArr + 20, k.pumped + (j % 6) * 9);
			if (f < leave) { dots.push({x: hx, y: hyU, fill: base, o: 1}); break; }
			const tBack = leave + (CUM[10] - S_B0) / V;
			if (f < tBack) { const [x, y] = pt(S_B0 + (f - leave) * V); dots.push({x, y, fill: base, o: 1}); break; }
			t = tBack; s0 = S_RECYC;
		}
	}
	return {dots, drops};
};
export const SceneRecycle: React.FC = () => {
	const f = useCurrentFrame();
	const {dots, drops} = simulate(f, K2);
	const endDrops = React.useMemo(() => Math.max(1, simulate(1175, K2).drops), []);
	const level = Math.min(0.5, drops * 0.04);
	const pipeY = 500;
	const feed = prog(f, 0, 14);
	const made = clamp(drops / endDrops);
	const pct = 20 + 76 * prog(f, K2.many, 150);
	const fwdFlash = Math.max(0, Math.sin(clamp((f - K2.fwd) / 50) * Math.PI));
	return (
		<>
			<Heading text="Take the ammonia out" at={4} size={62} />
			<Overlay>
				{/* feed pipe, reactor and the gas leaving */}
				<Fade at={4}>
					<path d={`M96,${pipeY} L560,${pipeY} M740,${pipeY} L860,${pipeY}`} stroke={INK_SOFT} strokeWidth={26} strokeLinecap="butt" opacity={0.28} />
					<Sx x={96} y={pipeY - 38} text="fresh N_2 and H_2" size={34} color={INK_SOFT} hand at={4} />
					<rect x={560} y={330} width={180} height={290} rx={36} fill="#e9eaed" stroke={IRON_DARK} strokeWidth={6} />
					<rect x={566} y={430} width={168} height={186} rx={30} fill="#f6b87a" opacity={0.45} />
					{[360, 430, 500, 570].map(y => <g key={y}><Pellets x={574} y={y} w={152} h={46} r={8} /></g>)}
					<Sx x={650} y={312} text="reactor" size={36} color={IRON_DARK} anchor="middle" hand at={4} />
					<Sx x={650} y={672} text="450 C, 200 atm" size={34} color={AMBER_INK} anchor="middle" hand at={K2.even} />
					<Sx x={650} y={712} text="iron catalyst" size={30} color={INK_SOFT} anchor="middle" hand at={K2.even + 8} />
				</Fade>
				{/* the cooler, the tank and the way out */}
				<Fade at={K2.cooled}>
					<path d="M860,500 L900,500 M1090,500 L1260,500" stroke={INK_SOFT} strokeWidth={26} opacity={0.28} />
					<rect x={900} y={410} width={190} height={180} rx={24} fill="#dcecf6" stroke="#4f8fc0" strokeWidth={6} />
					<path d="M920,460 q20,-24 40,0 t40,0 t40,0 M920,500 q20,-24 40,0 t40,0 t40,0 M920,540 q20,-24 40,0 t40,0 t40,0" fill="none" stroke="#4f8fc0" strokeWidth={5} strokeLinecap="round" />
					<Sx x={995} y={392} text="cooler" size={36} color="#4f8fc0" anchor="middle" hand at={K2.cooled} />
				</Fade>
				<Fade at={K2.liquid - 30}>
					<rect x={1260} y={360} width={220} height={280} rx={26} fill="#fffdf8" stroke={IRON_DARK} strokeWidth={6} />
					<rect x={1266} y={640 - 6 - 270 * level} width={208} height={Math.max(0, 270 * level)} rx={10} fill={NH3C} opacity={0.5} />
					<Sx x={1500} y={390} text="tank" size={36} color={IRON_DARK} anchor="start" hand at={K2.liquid - 30} />
				</Fade>
				<Fade at={K2.drawn}>
					<path d="M1370,640 L1370,720 L1700,720" fill="none" stroke={NH3C} strokeWidth={22} opacity={0.55} />
					<Sx x={1530} y={690} text="liquid ammonia drawn off" size={34} color={NH3C} anchor="middle" hand at={K2.drawn} />
					{[0, 1, 2].map(i => <circle key={i} cx={1380 + ((f * 3 + i * 110) % 320)} cy={720} r={8} fill={NH3C} stroke={INK} strokeWidth={2} />)}
				</Fade>
				{/* the recycle pipe */}
				<g opacity={0.9}>
					<DrawPath d="M1370,360 L1370,250 L400,250 L400,500" at={K2.pumped} dur={60} color={INK_SOFT} width={22} opacity={0.28} />
				</g>
				<Fade at={K2.pumped + 30}>
					<g transform="translate(900,250)">
						<circle r={34} fill="#dfe2e6" stroke={IRON_DARK} strokeWidth={5} />
						<path d="M-12,-16 L18,0 L-12,16 Z" fill={RATE} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
					</g>
				</Fade>
				<Fade at={K2.recyc}>
					<Sx x={1130} y={222} text="recycling" size={52} color={RATE} anchor="middle" hand at={K2.recyc} />
				</Fade>
				<Fade at={K2.cond}>
					<Sx x={995} y={640} text="condensing" size={52} color="#4f8fc0" anchor="middle" hand at={K2.cond} />
				</Fade>
				{/* the moving gas */}
				<g opacity={feed}>{dots.map((d, i) => <DotP key={i} x={d.x} y={d.y} r={9} fill={d.fill} o={d.o} />)}</g>
				{/* a sample of the leaving gas: about a fifth is ammonia */}
				<Fade at={K2.fifth} out={K2.cooled}>
					{[0, 1, 2, 3, 4].map(i => <DotP key={i} x={790 + i * 34} y={436} r={11} fill={i === 3 ? NH3C : i % 2 ? N2C : H2C} />)}
					<Sx x={876} y={384} text="about a fifth is ammonia" size={32} color={NH3C} anchor="middle" hand at={K2.fifth} />
				</Fade>
				<Ring cx={876} cy={436} rx={110} ry={34} at={K2.fifth + 10} out={K2.cooled} color={AMBER_INK} seed={3} />
				<Fade at={K2.under} out={K2.cooled}>
					<Sx x={876} y={338} text="a little under the settled value" size={30} color={INK_SOFT} anchor="middle" hand at={K2.under} />
				</Fade>
				<Ring cx={1380} cy={420} rx={120} ry={56} at={K2.stay} out={K2.stay + 90} color={AMBER_INK} seed={4} />
				<Fade at={K2.stay}>
					<Sx x={1500} y={430} text="stay gases" size={36} color={AMBER_INK} anchor="start" hand at={K2.stay} />
				</Fade>
				{/* shift forward again at the reactor */}
				<g opacity={fwdFlash}>
					<Arrow x1={590} y1={290} x2={710} y2={290} at={K2.fwd} color={YIELD} width={10} dur={12} />
				</g>
				<Sx x={650} y={214} text="shift runs forward again" size={32} color={YIELD} anchor="middle" hand at={K2.fwd} out={K2.many} />
				{/* counters */}
				<Fade at={K2.drawn + 20}>
					<Sx x={96} y={830} text="total ammonia made" size={40} color={YIELD} hand at={K2.drawn + 20} />
					<rect x={96} y={850} width={760} height={34} rx={17} fill="#e6dcc8" />
					<rect x={96} y={850} width={Math.max(2, 760 * made)} height={34} rx={17} fill={YIELD} />
				</Fade>
				<Fade at={K2.many}>
					<Sx x={1000} y={830} text="of the gas fed in, made into ammonia" size={40} color={INK} hand at={K2.many} />
					<Sx x={1000} y={908} text={f >= K2.over ? 'over 95%' : `${Math.round(pct)}%`} size={72} color={YIELD} hand at={K2.many} />
				</Fade>
			</Overlay>
		</>
	);
};
void kf; void Cross; void CROSS;
