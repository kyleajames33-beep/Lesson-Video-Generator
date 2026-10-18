import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Bound, Chip, CrystalRig, CRYS_N, Drops, Fade, Glare, HeatIcon, ITube, OneWayLine, Overlay, Pic, PicH, PushLoop, Ring, Sx, TEAL, Wisp, crysW, ironMouth, ironW, npt, picW, smooth} from './parts';
import {CO_BLUE_INK, CO_PINK_INK, HAZ, Heading, WATER_DROP, sc} from './common';
import {CRYS, DROPPER, IRON, MG, NO2, SYR_BARREL, SYR_PLUNGER, TILE} from './assets';

// ---------- 1. Hook: does a still tube prove anything? ----------
const H = 'hook';
const K1 = cues(sc(H), {tube: 'This tube of iron', hour: 'for an hour', proof: 'Is that proof', notown: 'Not on its own', finished: 'A finished reaction', still: 'looks still', both: 'run both ways', push: 'push it', watch: 'watch what happens', how: 'So how do you plan'});
const T1 = {x: 205, y: 340, h: 560};
const ASH1 = {x: 760, y: 470, h: 300};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const [mx, my] = ironMouth(T1.x, T1.y, T1.h);
	const liqTop = T1.y + T1.h * 0.255;
	const deep = 0.45 * prog(f, K1.push + 22, 40);
	const ashIn = smooth(prog(f, K1.finished, 24));
	const ashW = picW(MG.ash, ASH1.h);
	return (
		<>
			<Heading text="Looks unchanged. Is that evidence?" at={4} size={62} />
			<Overlay>
				<Fade at={2}><Pic p={TILE} x={130} y={800} h={220} /></Fade>
				<Fade at={2}><ITube x={T1.x} y={T1.y} h={T1.h} s={{deep}} /></Fade>
				<Sx x={T1.x + ironW(T1.h) / 2} y={1060} text="iron thiocyanate" size={32} color={INK_SOFT} anchor="middle" hand at={K1.tube} />
				<ClockHour at={K1.hour} />
				<Sx x={560} y={250} text="an equilibrium, with both reactions running?" size={40} color={INK} hand at={K1.proof} out={K1.finished} />
				<Sx x={560} y={250} text="Not on its own." size={40} color={HAZ} hand at={K1.finished} out={K1.push - 10} />
				{/* the finished reaction: magnesium oxide ash on its mat, nothing changing */}
				<g opacity={ashIn} transform={`translate(${(1 - ashIn) * 300},0)`}>
					<Pic p={MG.ash} x={ASH1.x} y={ASH1.y} h={ASH1.h} />
				</g>
				<Sx x={ASH1.x + ashW / 2} y={ASH1.y + ASH1.h + 50} text="finished: nothing changing" size={36} color={INK} anchor="middle" hand at={K1.finished + 16} />
				{/* both look still */}
				<Chip x={T1.x - 30} y={T1.y - 80} w={220} h={52} text="still" size={34} color={INK_SOFT} at={K1.still} />
				<Chip x={ASH1.x + ashW / 2 - 110} y={ASH1.y - 80} w={220} h={52} text="still" size={34} color={INK_SOFT} at={K1.still + 6} />
				<Sx x={600} y={700} text="?" size={130} color={AMBER_INK} anchor="middle" hand at={K1.still + 14} />
				<Sx x={1300} y={640} text="same appearance," size={40} color={AMBER_INK} hand at={K1.still + 20} />
				<Sx x={1300} y={690} text="different story" size={40} color={AMBER_INK} hand at={K1.still + 26} />
				{/* push it: a drop goes in and the tube answers */}
				<Drops x={mx} y0={my - 60} y1={liqTop} at={K1.push + 4} n={2} every={10} color="#f2d27a" />
				<Arrow x1={470} y1={330} x2={mx + 26} y2={my + 30} at={K1.push} color={AMBER_INK} width={5} />
				<Sx x={480} y={320} text="push" size={48} color={AMBER_INK} hand at={K1.push} />
				<Sx x={480} y={380} text="and watch" size={36} color={AMBER_INK} hand at={K1.watch} />
				<Sx x={760} y={1000} text="How do you get evidence you can trust?" size={52} color={TEAL} hand at={K1.how} />
				{void K1.notown}{void K1.both}
			</Overlay>
		</>
	);
};
const ClockHour: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const a = -Math.PI / 2 + 2 * Math.PI * prog(f, at, 60);
	const cx = 480, cy = 560, r = 56;
	return (
		<Fade at={at - 6}>
			<circle cx={cx} cy={cy} r={r} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			{Array.from({length: 12}, (_, i) => { const t = (i / 12) * Math.PI * 2; return <path key={i} d={`M${cx + Math.cos(t) * r * 0.78},${cy + Math.sin(t) * r * 0.78} L${cx + Math.cos(t) * r * 0.92},${cy + Math.sin(t) * r * 0.92}`} stroke={INK_SOFT} strokeWidth={3} />; })}
			<path d={`M${cx},${cy} L${cx + Math.cos(a) * r * 0.74},${cy + Math.sin(a) * r * 0.74}`} stroke={AMBER_INK} strokeWidth={4} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={5} fill={INK} />
			<Sx x={cx} y={cy + r + 42} text="1 hour" size={34} color={INK_SOFT} anchor="middle" hand at={at} />
		</Fade>
	);
};

// ---------- 2. The reversibility test ----------
const R = 'reversibility-test';
const K2 = cues(sc(R), {test: 'test for reversibility', change: 'Change the conditions', oneway: 'runs one way', reverse: 'reverse the change', comes: 'comes back', heat: 'Heat pink cobalt', steam: 'as steam', droplets: 'droplets collect', blue: 'turns blue', nothing: 'proves nothing yet', add: 'add a few drops', cooled: 'cooled blue solid', pinkA: 'pink again', warms: 'warms slightly', went: 'went there', reversible: 'reaction is reversible'});
export const RIG2 = {x: 96, y: 300, h: 600};
/** The clear dropper laid along the tube axis with its tip just inside the mouth; `squirt` sends drops to the heap. */
export const MouthDropper: React.FC<{rig: {x: number; y: number; h: number}; at: number; out?: number; squirt: number; n?: number}> = ({rig, at, out, squirt, n = 3}) => {
	const f = useCurrentFrame();
	const [mx, my] = npt(CRYS.pink, rig.x, rig.y, rig.h, ...CRYS_N.mouth);
	const [hx, hy] = npt(CRYS.pink, rig.x, rig.y, rig.h, ...CRYS_N.heap);
	const ux = (hx - mx), uy = (hy - my), L = Math.hypot(ux, uy);
	const tip: [number, number] = [mx + (ux / L) * rig.h * 0.05, my + (uy / L) * rig.h * 0.05];
	const ang = (Math.atan2(uy, ux) * 180) / Math.PI - 90;
	const dh = rig.h * 0.34, dw = picW(DROPPER, dh);
	return (
		<Fade at={at} out={out}>
			<g transform={`translate(${tip[0]},${tip[1]}) rotate(${ang})`}><PicH p={DROPPER} x={-dw / 2} y={-dh} h={dh} /></g>
			{Array.from({length: n}, (_, i) => {
				const u = (f - squirt - i * 9) / 18;
				if (u < 0 || u > 1.1) return null;
				const p = Math.min(1, u);
				return <ellipse key={i} cx={tip[0] + (hx - tip[0]) * p} cy={tip[1] + (hy - tip[1]) * p} rx={8} ry={6} fill={WATER_DROP} stroke="#6f9cbd" strokeWidth={2} opacity={u > 1 ? 1 - (u - 1) * 10 : 1} />;
			})}
		</Fade>
	);
};
export const SceneReversibility: React.FC = () => {
	const f = useCurrentFrame();
	const blue = prog(f, K2.blue, 30) * (1 - prog(f, K2.pinkA, 30));
	// the unlit Bunsen stands under the tube; it lights on "Heat" and goes out on "add" (aligned crossfade, brief 72)
	const lit = prog(f, K2.heat, 16) * (1 - prog(f, K2.add, 16));
	const drops = prog(f, K2.droplets, 40) * (1 - prog(f, K2.blue + 10, 20));
	const [mx, my] = npt(CRYS.pink, RIG2.x, RIG2.y, RIG2.h, ...CRYS_N.mouth);
	const [hx, hy] = npt(CRYS.pink, RIG2.x, RIG2.y, RIG2.h, ...CRYS_N.heap);
	return (
		<>
			<Heading text="The reversibility test" at={4} size={62} />
			<Overlay>
				<PushLoop x={1010} y={300} w={800} at={K2.test} changeAt={K2.oneway} backAt={K2.pinkA} tickAt={K2.pinkA + 12} endLabelAt={K2.comes} />
				<Fade at={K2.heat - 4}><CrystalRig x={RIG2.x} y={RIG2.y} h={RIG2.h} blue={blue} burner={1} lit={lit} droplets={drops} /></Fade>
				<Sx x={hx + 20} y={hy - 80} text="pink crystals" size={34} color={CO_PINK_INK} hand at={K2.heat + 10} out={K2.blue} />
				<Sx x={hx + 20} y={hy - 80} text="blue" size={40} color={CO_BLUE_INK} hand at={K2.blue + 10} out={K2.pinkA} />
				<Sx x={hx + 20} y={hy - 80} text="pink again" size={40} color={CO_PINK_INK} hand at={K2.pinkA + 10} />
				<Wisp x={mx + 6} y={my - 6} at={K2.steam} out={K2.blue + 40} dx={70} dy={-80} />
				<Sx x={mx + 30} y={my - 110} text="steam out" size={30} color={INK_SOFT} hand at={K2.steam + 6} out={K2.blue + 40} />
				{/* the two one-way lines: no equilibrium arrow, the tube is open */}
				<OneWayLine x={700} y={640} prefix="heat:" left="CoCl_2·6H_2O(s), pink" right="CoCl_2(s), blue + 6H_2O(g)" size={32} at={K2.heat + 20} />
				<OneWayLine x={700} y={710} prefix="add water:" left="CoCl_2(s), blue + 6H_2O(l)" right="CoCl_2·6H_2O(s), pink" size={32} at={K2.add + 10} color={TEAL} prefixColor={TEAL} />
				<Chip x={1010} y={770} w={430} text="blue, so reversible" size={36} color={INK_SOFT} at={K2.nothing} cross={K2.nothing + 16} out={K2.went} />
				<Sx x={1460} y={810} text="one way only" size={32} color={HAZ} hand at={K2.nothing + 22} out={K2.went} />
				{/* add water back to the cooled solid */}
				<MouthDropper rig={RIG2} at={K2.add} squirt={K2.cooled + 6} />
				<Sx x={mx + 70} y={my - 40} text="cooled first" size={30} color={INK_SOFT} hand at={K2.cooled} />
				<HeatIcon x={hx + 250} y={hy - 150} dir="out" at={K2.warms} size={0.42} />
				<Sx x={hx + 296} y={hy - 150} text="warms" size={30} color={HAZ} hand at={K2.warms + 6} />
				<Sx x={700} y={880} text="reversible:" size={44} color={TEAL} hand at={K2.reversible} />
				<Sx x={700} y={936} text="the change can be run back by changing the conditions" size={36} color={INK} hand at={K2.reversible + 10} />
				<Ring cx={700 + 120} cy={866} rx={150} ry={40} at={K2.went} color={AMBER} seed={5} />
				{void K2.change}{void K2.reverse}
			</Overlay>
		</>
	);
};

// ---------- 3. Contrast: burning magnesium, and an open tube ----------
const M = 'magnesium-open';
const K3 = cues(sc(M), {compare: 'Compare burning magnesium', blinding: 'blinding white flame', leaves: 'leaves white magnesium', addw: 'Add water', heatit: 'heat it', coolit: 'cool it', nothing: 'nothing you can do', shiny: 'shiny magnesium back', irr: 'irreversible', open: 'open tube', steam: 'The steam escaped', addback: 'add water back', fine: "That's fine", isnt: "isn't an equilibrium"});
const MG3 = {x: 96, y: 240, h: 360};
const RIG3 = {x: 1250, y: 320, h: 330};
export const SceneMagnesium: React.FC = () => {
	const f = useCurrentFrame();
	const ash = prog(f, K3.leaves, 26);
	const [gx, gy] = npt(MG.ribbon, MG3.x, MG3.y, MG3.h, 1040, 990);
	const [mx, my] = npt(CRYS.pink, RIG3.x, RIG3.y, RIG3.h, ...CRYS_N.mouth);
	const rw = crysW(RIG3.h);
	const chips = [{t: 'add water', at: K3.addw}, {t: 'heat it', at: K3.heatit}, {t: 'cool it', at: K3.coolit}];
	return (
		<>
			<Heading text="Burning magnesium does not come back" at={4} size={62} />
			<Overlay>
				<Fade at={K3.compare - 6}>
					<Pic p={MG.ribbon} x={MG3.x} y={MG3.y} h={MG3.h} o={1 - ash} />
					<Pic p={MG.ash} x={MG3.x} y={MG3.y} h={MG3.h} o={ash} />
				</Fade>
				<Glare cx={gx} cy={gy - 20} r={230} at={K3.blinding - 4} out={K3.leaves} />
				<Sx x={720} y={300} text="never look straight at it" size={34} color={HAZ} hand at={K3.blinding + 6} />
				<Sx x={720} y={360} text="white MgO powder" size={34} color={INK} hand at={K3.leaves + 16} />
				<OneWayLine x={96} y={690} left="2Mg(s) + O_2(g)" right="2MgO(s)" size={44} at={K3.leaves + 10} />
				{chips.map((c, i) => (
					<g key={i}>
						<Chip x={96 + i * 250} y={750} w={226} h={56} text={c.t} size={34} color={INK} at={c.at} cross={K3.nothing + i * 6} />
						<Sx x={96 + i * 250 + 113} y={850} text="no magnesium" size={28} color={HAZ} anchor="middle" hand at={K3.nothing + 10 + i * 6} />
					</g>
				))}
				<Sx x={850} y={790} text="burning steel wool: same idea" size={28} color={INK_SOFT} hand at={K3.shiny + 10} />
				<Sx x={96} y={950} text="irreversible:" size={46} color={HAZ} hand at={K3.irr} />
				<Sx x={360} y={950} text="nothing in a school lab brings the start back" size={38} color={INK} hand at={K3.irr + 10} />
				{/* the cobalt test was open: the steam crossed the boundary */}
				<Fade at={K3.open - 4}><CrystalRig x={RIG3.x} y={RIG3.y} h={RIG3.h} blue={1} /></Fade>
				<Bound x={RIG3.x - 24} y={RIG3.y - 24} w={rw + 70} h={RIG3.h + 48} at={K3.open + 6} />
				<Wisp x={mx} y={my} at={K3.steam} dx={150} dy={-60} n={4} />
				<Sx x={RIG3.x - 24} y={RIG3.y + RIG3.h + 80} text="open: matter can leave" size={34} color={INK} hand at={K3.steam + 10} />
				<Sx x={RIG3.x - 24} y={RIG3.y + RIG3.h + 140} text="open: a reversibility test," size={34} color={TEAL} hand at={K3.isnt} />
				<Sx x={RIG3.x - 24} y={RIG3.y + RIG3.h + 186} text="not an equilibrium" size={34} color={TEAL} hand at={K3.isnt + 8} />
				{void K3.addback}{void K3.fine}
			</Overlay>
		</>
	);
};

// ---------- 4. Closed systems for equilibrium ----------
const C = 'closed-system';
const K4 = cues(sc(C), {study: 'To study an equilibrium', escape: 'can escape', ions: 'tube of dissolved ions', stay: 'stay in the solution', gas: 'a gas mixture', sealed: 'sealed tube or syringe', write: 'write the condition', whats: "what's sealed", inout: 'get in or out', matters: 'That matters', closed: 'is closed'});
const IT4 = {x: 250, y: 300, h: 460};
const NT4 = {x: 660, y: 300, h: 460};
const SY4 = {x: 1080, y: 470, h: 110};
export const SceneClosed: React.FC = () => {
	const f = useCurrentFrame();
	const iw = ironW(IT4.h), nw = picW(NO2.brown, NT4.h), sw = picW(SYR_BARREL, SY4.h);
	const [tx, ty] = npt(SYR_BARREL, SY4.x, SY4.y, SY4.h, 1833, 516);
	// ions bounce inside the iron tube's liquid and never cross the outline
	const L = IT4.x + iw * 0.3, Rr = IT4.x + iw * 0.7, T = IT4.y + IT4.h * 0.3, B = IT4.y + IT4.h * 0.84;
	return (
		<>
			<Heading text="An equilibrium needs a closed system" at={4} size={62} />
			<Overlay>
				<Fade at={K4.ions - 6}>
					<ITube x={IT4.x} y={IT4.y} h={IT4.h} />
					{Array.from({length: 7}, (_, i) => {
						const ph = i * 1.7;
						const x = L + (Rr - L) * (0.5 + 0.45 * Math.sin(f * 0.05 + ph));
						const y = T + (B - T) * (0.5 + 0.45 * Math.sin(f * 0.037 + ph * 1.3));
						return <circle key={i} cx={x} cy={y} r={6} fill={i % 2 ? '#c42b36' : '#e3bf45'} stroke={INK} strokeWidth={1.5} />;
					})}
				</Fade>
				{/* the iron tube is open (water can evaporate), so its outline stays dashed; only the sealed tube and syringe turn closed */}
				<Bound x={IT4.x - 30} y={IT4.y - 26} w={iw + 60} h={IT4.h + 52} at={K4.ions} />
				<Sx x={IT4.x + iw / 2} y={IT4.y + IT4.h + 70} text="open tube, but the ions stay in" size={30} anchor="middle" hand at={K4.stay} />
				<Fade at={K4.gas - 6}><Pic p={NO2.brown} x={NT4.x} y={NT4.y} h={NT4.h} /></Fade>
				<Bound x={NT4.x - 30} y={NT4.y - 26} w={nw + 60} h={NT4.h + 52} at={K4.gas} closeAt={K4.closed + 6} />
				<Sx x={NT4.x + nw / 2} y={NT4.y + NT4.h + 70} text="sealed gas" size={34} anchor="middle" hand at={K4.sealed} />
				<Fade at={K4.sealed - 6}>
					<Pic p={SYR_PLUNGER} x={SY4.x} y={SY4.y} h={SY4.h} />
					<Pic p={SYR_BARREL} x={SY4.x} y={SY4.y} h={SY4.h} />
					<rect x={tx - 4} y={ty - 13} width={22} height={26} rx={5} fill="#5b5f66" stroke={INK} strokeWidth={2} />
				</Fade>
				<Bound x={SY4.x - 30} y={SY4.y - 50} w={sw + 80} h={SY4.h + 100} at={K4.sealed} closeAt={K4.closed + 12} />
				<Sx x={SY4.x + sw / 2} y={SY4.y + SY4.h + 110} text="sealed syringe (tip capped)" size={34} anchor="middle" hand at={K4.sealed + 10} />
				<Fade at={K4.write}>
					<rect x={96} y={880} width={1240} height={78} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
				</Fade>
				<Sx x={124} y={932} text="System: closed.   Sealed: ______.   Can enter or leave: ______." size={36} color={INK} hand at={K4.write + 4} />
				<Sx x={96} y={1030} text="sealed tube and syringe: closed (matter stays in; heat can pass)" size={38} color={TEAL} hand at={K4.closed + 10} />
				{void K4.study}{void K4.escape}{void K4.whats}{void K4.inout}{void K4.matters}
			</Overlay>
		</>
	);
};
void IRON; void INK_SOFT;
