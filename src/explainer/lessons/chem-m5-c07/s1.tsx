import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, HandText, INK, INK_SOFT, Plate, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Chip, DGauge, DotP, Fade, GasKey, GhostHand, HABER_EQ, Overlay, Ring, Slider, Switch, Sx, eqLayout} from './parts';
import {CONVERTER, HAVE7} from './assets';
import {Heading, H2C, HEAT, IRON, IRON_DARK, N2C, NH3C, RATE, YIELD, kf, rateOf, sc, yieldOf} from './common';

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));

// The painted converter (alpha box 159,230,935x1400 of a 1280 x 1920 plate), or a coded outline when the plate is absent.
export const Converter: React.FC<{x: number; y: number; w: number}> = ({x, y, w}) => {
	if (HAVE7.has(CONVERTER)) return <Plate src={CONVERTER} natural={[1280, 1920]} crop={[159, 230, 935, 1400]} width={w} style={{left: x, top: y}} />;
	const h = w * 1.5;
	return (
		<svg width={w} height={h} viewBox="0 0 400 600" style={{position: 'absolute', left: x, top: y}}>
			<rect x={110} y={90} width={180} height={420} rx={70} fill="#d7dade" stroke={IRON_DARK} strokeWidth={6} />
			<rect x={110} y={380} width={180} height={130} rx={40} fill="#f1b27a" opacity={0.7} />
			<rect x={60} y={510} width={280} height={44} fill="#c9c3b6" stroke={IRON_DARK} strokeWidth={5} />
			<path d="M290,160 L350,160 L350,40 L180,40 L180,90" fill="none" stroke={IRON} strokeWidth={22} strokeLinejoin="round" />
		</svg>
	);
};

// ---------- 1. Hook: why would a factory choose less? ----------
const H = 'hook';
const K1 = cues(sc(H), {first: 'Ammonia is', made: 'made from', haber: 'in the Haber', cool: 'Cooling the mixture', sq: 'squeezing it', deg: '450 degrees', atm: '200 atmospheres', thousand: 'not the thousand', why: 'Why choose'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const pos = eqLayout(HABER_EQ, 50, 96).pos;
	const temp = kf(f, [[0, 0.5], [K1.cool, 0.5], [K1.cool + 55, 0.08], [K1.deg - 20, 0.08], [K1.deg + 30, 0.56]]);
	const pres = kf(f, [[0, 0.5], [K1.sq - 10, 0.5], [K1.sq + 50, 0.95], [K1.atm - 20, 0.95], [K1.atm + 30, 0.38]]);
	const yv = yieldOf(temp, pres), rv = rateOf(temp, pres, 0);
	const yHigh = yieldOf(0.08, 0.95);
	const TX = 96, TY = 450, TW = 560, PY = 690;
	const handT = prog(f, K1.cool - 24, 10) * (1 - prog(f, K1.cool + 70, 10)) + prog(f, K1.deg - 24, 10) * (1 - prog(f, K1.deg + 50, 10));
	const handP = prog(f, K1.sq - 24, 10) * (1 - prog(f, K1.sq + 70, 10)) + prog(f, K1.atm - 24, 10) * (1 - prog(f, K1.atm + 50, 10));
	const push = 1 + 0.07 * prog(f, 0, 760, undefined);
	// arc between the ghost needle and the real needle
	const gcx = 850, gcy = 640, gr = 110;
	const ang = (v: number) => Math.PI * (1 - v);
	const arcPt = (v: number, rr: number) => `${gcx + rr * Math.cos(ang(v))},${gcy - rr * Math.sin(ang(v))}`;
	const midV = (yHigh + 0.39) / 2;
	const flame = 1 + 0.06 * Math.sin(f * 0.4);
	void flame;
	return (
		<>
			<Heading text="Why not the highest yield?" at={4} size={68} />
			<div style={{position: 'absolute', inset: 0, transform: `scale(${push})`, transformOrigin: '1630px 760px', opacity: prog(f, 6, 30)}}>
				<Converter x={1420} y={180} w={420} />
			</div>
			<Overlay>
				<Sx x={1632} y={880} text="Haber converter" size={34} color={INK_SOFT} anchor="middle" hand at={K1.haber} />
				<EqRow at={K1.made} />
				<Fade at={K1.haber + 6}>
					<Sx x={pos[6].sx + 40} y={346} text="forward gives out heat" size={34} color={HEAT} anchor="middle" hand at={K1.haber + 6} />
					<Arrow x1={pos[6].sx + 40} y1={316} x2={pos[6].sx + 40} y2={284} at={K1.haber + 14} color={HEAT} width={4} dur={10} />
				</Fade>
				<Slider x={TX} y={TY} w={TW} label="temperature" v={temp} lo="cold" hi="hot" at={K1.made + 10} color={HEAT} />
				<Slider x={TX} y={PY} w={TW} label="pressure" v={pres} lo="low" hi="high" at={K1.made + 16} color={N2C} />
				<g opacity={handT}><GhostHand x={TX + temp * TW + 10} y={TY + 40} /></g>
				<g opacity={handP}><GhostHand x={TX + pres * TW + 10} y={PY + 40} /></g>
				<Sx x={TX} y={TY + 114} text="plant: about 450 C" size={40} color={AMBER_INK} hand at={K1.deg + 10} />
				<Sx x={TX} y={PY + 114} text="plant: about 200 atm" size={40} color={AMBER_INK} hand at={K1.atm + 10} />
				<DGauge cx={gcx} cy={gcy} r={gr} v={yv} color={YIELD} label="yield" at={K1.made + 20} ghost={yHigh} ghostAt={K1.sq + 56} markLabel="highest possible" />
				<DGauge cx={1240} cy={gcy} r={gr} v={rv} color={RATE} label="rate" at={K1.made + 26} />
				<Fade at={K1.atm + 60}>
					<path d={`M${arcPt(yHigh, gr + 50)} A${gr + 50},${gr + 50} 0 0 0 ${arcPt(0.39, gr + 50)}`} fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeDasharray="4 12" />
					<Sx x={gcx + (gr + 96) * Math.cos(ang(midV))} y={gcy - (gr + 96) * Math.sin(ang(midV)) + 20} text="?" size={86} color={AMBER_INK} anchor="middle" hand at={K1.atm + 66} />
				</Fade>
				<Ring cx={gcx} cy={gcy - 60} rx={170} ry={120} at={K1.thousand} color={AMBER_INK} seed={4} out={K1.why - 10} />
			</Overlay>
			<div style={{position: 'absolute', left: 96, top: 870}}><HandText text="Why choose conditions that make less ammonia in the settled mixture?" at={K1.why} size={46} cps={30} /></div>
		</>
	);
};
const EqRow: React.FC<{at: number}> = ({at}) => {
	const pos = eqLayout(HABER_EQ, 50, 96).pos;
	return (
		<g>
			{HABER_EQ.map((it, i) => {
				const p = pos[i];
				const a = at + i * 6;
				if (it.k === 'plus') return <Sx key={i} x={p.cx} y={290} text="+" size={50} at={a} />;
				if (it.k === 'arrow') return <ArrowGlyph key={i} x={p.cx} y={290} w={p.w} at={a} />;
				return (
					<g key={i}>
						{it.coef ? <Sx x={p.cx} y={290} text={it.coef} size={50} color={it.color} at={a} /> : null}
						<Sx x={p.sx} y={290} text={it.t} size={50} color={it.color} at={a} />
					</g>
				);
			})}
		</g>
	);
};
const ArrowGlyph: React.FC<{x: number; y: number; w: number; at: number}> = ({x, y, w, at}) => (
	<Fade at={at}>
		<path d={`M${x},${y - 20} L${x + w},${y - 20} M${x + w - 14},${y - 31} L${x + w},${y - 20} L${x + w - 14},${y - 9}`} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
		<path d={`M${x + w},${y - 6} L${x},${y - 6} M${x + 14},${y - 17} L${x},${y - 6} L${x + 14},${y + 5}`} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
	</Fade>
);

// ---------- 2. What gives the most ammonia in the settled mixture ----------
const Y = 'yield';
const K2 = cues(sc(Y), {first: 'First', name: 'equilibrium yield', settled: 'once settled', more: 'more ammonia in the settled', heat: 'gives out heat', k92: '92 kilojoules', right: 'heat goes on the right', cool: 'Cooling takes', away: 'heat away', sq: 'Squeezing shifts', fewer: 'toward fewer', two: 'two against four', pull: 'Pulling the ammonia out', same: 'the settled mixture the same', total: 'the total made rises', cat: 'catalyst changes', speed: 'only the speed'});
export const SceneYield: React.FC = () => {
	const f = useCurrentFrame();
	const S = 50, EY = 300;
	const pos = eqLayout(HABER_EQ, S, 96).pos;
	const temp = kf(f, [[0, 0.55], [K2.cool, 0.55], [K2.cool + 50, 0.12]]);
	const pres = kf(f, [[0, 0.4], [K2.sq, 0.4], [K2.sq + 50, 0.88]]);
	const rem = prog(f, K2.pull, 14);
	const cat = prog(f, K2.cat, 14);
	// squeezing lifts the yield a little and the rate part-way (the dashboard shows the effect of the pressure slider)
	const pb = prog(f, K2.sq, 50);
	const yv = clamp(yieldOf(temp, pres) + 0.1 * pb);
	const rv = clamp(rateOf(temp, pres, cat) + 0.2 * pb);
	const tot = clamp(0.12 + 0.4 * yv + 0.3 * prog(f, K2.pull + 60, 90));
	const L = pos[0].sx, R1 = pos[2].sx + pos[2].w, L2 = pos[4].cx, R2 = pos[4].sx + pos[4].w;
	const cW = 250;
	const lc = (L + R1) / 2, rc = (L2 + R2) / 2;
	const pulse = 0.5 + 0.5 * Math.sin((f - K2.heat) * 0.3);
	const hp = pos[6];
	// green dots leaving the gas box
	const dots = [0, 1, 2, 3, 4].map(i => {
		const t = prog(f, K2.pull + 8 + i * 14, 40);
		const x = 850 + (990 - 850) * t, y = 790 + (868 - 790) * t * t;
		return t > 0 && t < 1 ? <DotP key={i} x={x} y={y} r={10} fill={NH3C} /> : null;
	});
	return (
		<>
			<Heading text="What gives the most ammonia?" at={4} size={58} />
			<Overlay>
				{HABER_EQ.map((it, i) => {
					const p = pos[i];
					const a = K2.first + 20 + i * 5;
					if (it.k === 'plus') return <Sx key={i} x={p.cx} y={EY} text="+" size={S} at={a} />;
					if (it.k === 'arrow') return <ArrowGlyph key={i} x={p.cx} y={EY} w={p.w} at={a} />;
					return (
						<g key={i}>
							{it.coef ? <Sx x={p.cx} y={EY} text={it.coef} size={S} color={it.color} at={a} /> : null}
							<Sx x={p.sx} y={EY} text={it.t} size={S} color={it.color} at={a} />
						</g>
					);
				})}
				<Fade at={K2.heat}>
					<rect x={hp.sx - 10} y={EY - 50} width={hp.w + 20} height={68} rx={16} fill={HEAT} opacity={0.12 + 0.18 * pulse} />
					<Sx x={hp.sx + hp.w / 2} y={EY + 62} text="-92 kJ for each mole of N_2" size={36} color={HEAT} anchor="middle" hand at={K2.k92} />
				</Fade>
				<Chip x={lc - cW / 2} y={170} w={cW} text="4 gas particles" size={34} at={K2.sq + 8} color={N2C} />
				<Chip x={rc - cW / 2} y={170} w={cW} text="2 gas particles" size={34} at={K2.two} color={NH3C} />
				<Arrow x1={lc + cW / 2 + 16} y1={201} x2={rc - cW / 2 - 16} y2={201} at={K2.fewer} color={YIELD} width={7} />
				{/* the conditions panel */}
				<Fade at={K2.first + 10}>
					<rect x={96} y={400} width={780} height={560} rx={26} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
				</Fade>
				<Slider x={130} y={500} w={560} label="temperature" v={temp} lo="cold" hi="hot" at={K2.first + 20} color={HEAT} />
				<Slider x={130} y={655} w={560} label="pressure" v={pres} lo="low" hi="high" at={K2.first + 26} color={N2C} />
				<Switch x={130} y={790} label="remove NH_3" on={rem} at={K2.first + 32} />
				<Switch x={130} y={890} label="iron catalyst" on={cat} at={K2.first + 38} />
				<Fade at={K2.pull - 6}>
					<rect x={640} y={750} width={210} height={80} rx={14} fill="#f4f0e6" stroke={INK_SOFT} strokeWidth={3} />
					{[0, 1, 2, 3, 4, 5].map(i => <DotP key={i} x={670 + (i % 3) * 56 + 6 * Math.sin(f * 0.2 + i)} y={774 + Math.floor(i / 3) * 34 + 5 * Math.cos(f * 0.23 + i)} r={9} fill={i % 2 ? NH3C : i % 3 ? N2C : H2C} />)}
					<Sx x={745} y={862} text="the gas" size={28} color={INK_SOFT} anchor="middle" hand at={K2.pull} />
					<GasKey x={600} y={924} at={K2.pull} size={26} />
				</Fade>
				{dots}
				{/* rings on each lever as it is spoken */}
				<Ring cx={410} cy={518} rx={330} ry={84} at={K2.cool} out={K2.sq - 6} color={AMBER_INK} seed={2} />
				<Ring cx={410} cy={673} rx={330} ry={84} at={K2.sq} out={K2.pull - 6} color={AMBER_INK} seed={3} />
				<Ring cx={290} cy={790} rx={250} ry={52} at={K2.pull} out={K2.cat - 6} color={AMBER_INK} seed={4} />
				<Ring cx={290} cy={890} rx={250} ry={52} at={K2.cat} color={AMBER_INK} seed={5} />
				{/* gauges */}
				<DGauge cx={1150} cy={610} r={140} v={yv} color={YIELD} label="equilibrium yield" sub={['how much of the gas has become', 'ammonia once settled']} at={K2.first + 20} labelAt={K2.name} />
				<DGauge cx={1620} cy={610} r={140} v={rv} color={RATE} label="rate" sub={['how fast the gas gets there']} at={K2.first + 26} labelAt={K2.cool + 6} />
				<Fade at={K2.pull + 20}>
					<Sx x={1000} y={826} text="total ammonia made" size={40} color={YIELD} hand at={K2.pull + 20} />
					<rect x={1000} y={846} width={800} height={34} rx={17} fill="#e6dcc8" />
					<rect x={1000} y={846} width={Math.max(2, 800 * tot)} height={34} rx={17} fill={YIELD} />
				</Fade>
				<Fade at={K2.sq + 40} out={K2.pull}>
					<Sx x={1620} y={440} text="faster too" size={38} color={RATE} anchor="middle" hand at={K2.sq + 40} />
				</Fade>
				<Fade at={K2.same} out={K2.total + 40}>
					<Sx x={1150} y={440} text="yield stays put" size={38} color={AMBER_INK} anchor="middle" hand at={K2.same} />
				</Fade>
				<Ring cx={1150} cy={560} rx={200} ry={150} at={K2.cat + 30} color={AMBER_INK} seed={7} />
				<Fade at={K2.cat + 36}>
					<Sx x={1150} y={440} text="yield unchanged" size={38} color={AMBER_INK} anchor="middle" hand at={K2.cat + 36} />
				</Fade>
			</Overlay>
		</>
	);
};
void N2C; void DrawPath;
