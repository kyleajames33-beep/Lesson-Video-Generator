import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, Countdown, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, prog, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {ColourStrip, Dial, FWD, Fade, Gauge, LockBoxIcon, MiniBars, Overlay, Pill, PlungerIcon, RxnChip, SvgText, Syringe, TEAL} from './parts';
import type {Piece} from './parts';
import {N2O4G, NO2G, Title, shade} from './board';
import {DEEP, N2O4_INK, NOC, NO_INK, NO2C, NO2_INK, O2C, O2_INK, PALE, kf, sc} from './common';

const Card: React.FC<{x: number; y: number; w: number; h: number; at: number; color?: string}> = ({x, y, w, h, at, color = INK_SOFT}) => (
	<Fade at={at}><rect x={x} y={y} width={w} height={h} rx={26} fill="#fffdf8" stroke={color} strokeWidth={4} opacity={0.96} /></Fade>
);

// ---------- 7. Squeeze or argon ----------
const K1 = cues(sc('squeeze-or-argon'), {sq: 'A squeeze raises', walls: 'hit the walls', without: 'without a squeeze', take: 'Take our', lock: 'lock the plunger', pump: 'pump in argon', inert: 'inert gas', nopart: 'takes no part', room: 'same room as before', each: 'exactly as crowded', crowd: 'does not crowd', favour: 'does not favour', noshift: 'no shift', equally: 'raise the total', only: 'only the squeeze', cause: 'not the cause', crowding: 'Crowding of the reacting'});
export const SceneArgon: React.FC = () => {
	const f = useCurrentFrame();
	const vol = kf(f, [[K1.sq + 30, 1], [K1.walls + 40, 0.5]]);
	const argonN = kf(f, [[K1.pump, 0], [K1.pump + 70, 14]], false);
	const pR = 1 + argonN / 14;
	const ring = scribbleEllipse(1000 + 340 + 130, 530, 150, 100, 3);
	return (
		<>
			<Title text="Squeeze or argon?" />
			<Overlay>
				<Pill x={680} y={96} w={1140} text="same total pressure, different crowding of the reacting gases" at={K1.equally} color={TEAL} size={36} h={60} />
				{/* left card: squeeze */}
				<Card x={96} y={210} w={860} h={740} at={K1.sq - 10} color={FWD} />
				<SvgText x={130} y={272} text="squeeze" size={56} color={FWD} at={K1.sq} />
				<Dial x={340} y={440} w={260} label="NO_2" value={8 / vol} text={String(Math.round(8 / vol))} color={NO2_INK} at={K1.sq} />
				<Dial x={630} y={440} w={260} label="N_2O_4" value={4 / vol} text={String(Math.round(4 / vol))} color={N2O4_INK} at={K1.sq} />
				<Gauge x={200} y={540} r={62} value={1 / vol} at={K1.sq} />
				<Fade at={K1.sq + 10}><SvgText x={130} y={690} text="just after squeezing" size={36} color={INK_SOFT} at={K1.sq + 10} /></Fade>
				<Fade at={K1.walls + 60}><SvgText x={340} y={900} text="rates jump: joining by more" size={34} color={FWD} at={K1.walls + 60} hand={false} weight={600} /></Fade>
				<ColourStrip x={300} y={780} w={520} from={PALE} to={DEEP} t={0.5 / vol} at={K1.sq} label="colour" h={38} mark={0.5} />
				{/* right card: argon in a locked syringe */}
				<Card x={980} y={210} w={860} h={740} at={K1.take - 10} color={TEAL} />
				<SvgText x={1014} y={272} text="argon, plunger locked" size={56} color={TEAL} at={K1.take} />
				<Fade at={K1.lock}><Pill x={1560} y={236} w={250} text="fixed volume" at={K1.lock} color={INK_SOFT} size={34} h={50} /></Fade>
				<Dial x={1224} y={440} w={260} label="NO_2" value={8} text="8" color={NO2_INK} at={K1.take + 10} ring={f >= K1.each} />
				<Dial x={1514} y={440} w={260} label="N_2O_4" value={4} text="4" color={N2O4_INK} at={K1.take + 10} ring={f >= K1.each} />
				<Gauge x={1084} y={540} r={62} value={pR} at={K1.take + 10} />
				<Fade at={K1.nopart}><SvgText x={1014} y={690} text="argon: takes no part" size={36} color={INK_SOFT} at={K1.nopart} /></Fade>
				<Fade at={K1.each}><DrawPath d={ring} at={K1.each} dur={26} color={TEAL} width={6} /></Fade>
				<Fade at={K1.crowd}>
					<SvgText x={1014} y={850} text="no change in crowding," size={36} color={TEAL} at={K1.crowd} />
					<SvgText x={1014} y={896} text="so no direction is favoured" size={36} color={TEAL} at={K1.favour} />
				</Fade>
				<Fade at={K1.noshift}><SvgText x={1814} y={690} text="no shift" size={48} color={TEAL} anchor="end" at={K1.noshift} /></Fade>
				<ColourStrip x={1280} y={780} w={500} from={PALE} to={DEEP} t={0.5} at={K1.take + 10} label="colour" h={38} mark={0.5} />
				{/* before the right card: why a squeeze raises the pressure */}
				<Fade at={K1.walls} out={K1.take - 20}><SvgText x={1014} y={470} text="more crowded:" size={44} color={INK_SOFT} at={K1.walls} /><SvgText x={1014} y={530} text="more hits on the walls" size={44} color={INK_SOFT} at={K1.walls + 10} /></Fade>
			</Overlay>
			<div style={{position: 'absolute', left: 340, top: 650, opacity: prog(f, K1.walls + 56, 16)}}><MiniBars fw={kf(f, [[K1.walls + 56, 30], [K1.walls + 90, 90]])} rv={kf(f, [[K1.walls + 56, 30], [K1.walls + 90, 54]])} w={200} /></div>
			<Syringe x={120} y={282} w={700} vol={vol} groups={[NO2G(16), N2O4G(8)]} tint={shade(0.5 / vol)} opacity={prog(f, K1.sq, 16)} seed={5} />
			<Syringe x={1004} y={282} w={700} vol={1} groups={[NO2G(16), N2O4G(8)]} tint={shade(0.5)} lock={prog(f, K1.lock, 14)} inlet={prog(f, K1.pump - 20, 14)} argon={argonN} argonAt={K1.pump} opacity={prog(f, K1.take, 16)} seed={9} />
		</>
	);
};

// ---------- 8. Memory aid ----------
const K2 = cues(sc('memory-aid'), {shortcut: 'shortcut', sq: 'Squeeze it', fewer: 'fewer gas particles', argon: 'Argon added', not: 'not shift it', only: 'direction only', reason: 'The reason', crowded: 'how crowded'});
export const SceneAid: React.FC = () => (
	<>
		<Title text="A shortcut for the direction" />
		<Enter at={K2.shortcut} style={{position: 'absolute', left: 96, top: 210, width: 1730}}>
			<div style={{background: '#fffdf8', border: `4px solid ${TEAL}`, borderRadius: 26, padding: '26px 40px 30px', boxShadow: '0 14px 32px rgba(60,45,20,0.10)'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK_SOFT}}>Memory aid</div>
				<div style={{minHeight: 82}}><HandText text="Squeeze it and the shift goes to fewer gas particles." at={K2.sq} size={66} cps={26} color={INK} /></div>
				<div style={{minHeight: 82, marginTop: 8}}><HandText text="Argon in a fixed box does not shift it." at={K2.argon} size={66} cps={26} color={INK} /></div>
				<Enter at={K2.only} style={{marginTop: 12, fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32, color: TEAL}}>gases only, temperature steady. Squeeze: volume changes. Argon: volume fixed.</Enter>
			</div>
		</Enter>
		<Overlay>
			<PlungerIcon x={1420} y={330} at={K2.fewer} s={1.1} push />
			<LockBoxIcon x={1480} y={470} at={K2.not} s={1.1} />
			<Fade at={K2.only}><SvgText x={96} y={640} text="It gives the direction only." size={52} color={AMBER_INK} at={K2.only} /></Fade>
			<Fade at={K2.reason}>
				<SvgText x={96} y={740} text="The reason is still how crowded" size={60} color={INK} at={K2.reason} />
				<SvgText x={96} y={810} text="each reacting gas becomes." size={60} color={INK} at={K2.crowded} />
				<DrawPath d="M96,826 Q500,846 900,822" at={K2.crowded} dur={30} color={TEAL} width={7} />
			</Fade>
		</Overlay>
	</>
);

// ---------- 9. Attempt ----------
const K3 = cues(sc('attempt'), {turn: 'Your turn', cyl: 'In a cylinder', no: 'colourless nitric oxide', ox: 'colourless oxygen', brown: 'with brown', eq: 'two N O plus oxygen', steady: 'temperature stays steady', hot: 'The cylinder is hot', one: 'One you push', two: 'Two back at', pause: 'Pause the video'});
const NO_L: Piece[] = [{t: '2NO(g)', color: NO_INK, dot: NOC}, {t: '+'}, {t: 'O_2(g)', color: O2_INK, dot: O2C}];
const NO_R: Piece[] = [{t: '2NO_2(g)', color: NO2_INK, dot: NO2C}];
export const attemptGroups = (no: number, o2: number, no2: number) => [
	{n: no, kind: 'dot' as const, r: 10, fill: NOC, stroke: NO_INK, seed: 31},
	{n: o2, kind: 'pair' as const, r: 9, fill: O2C, stroke: O2_INK, seed: 32},
	{n: no2, kind: 'dot' as const, r: 11, fill: NO2C, stroke: NO2_INK, seed: 33},
];
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const scene = sc('attempt') as ReturnType<typeof sc> & {responseHold?: {startFrame: number; endFrame: number}};
	const hold = scene.responseHold!;
	const Q = (n: string, text: string) => (
		<div style={{display: 'flex', gap: 22, alignItems: 'flex-start'}}>
			<div style={{flex: 'none', width: 56, height: 56, borderRadius: 999, background: TEAL, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 4}}>{n}</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 34, color: INK, lineHeight: 1.22}}>{text}</div>
		</div>
	);
	return (
		<>
			<Title text="Your turn: a system you have not seen" size={62} />
			<Syringe x={96} y={190} w={760} vol={1} cyl groups={attemptGroups(8, 4, 8)} tint={shade(0.33)} opacity={prog(f, K3.cyl - 10, 18)} seed={11} />
			<RxnChip x={96} y={400} at={K3.eq - 10} left={NO_L} right={NO_R} size={44} words={false} fwdLit={K3.eq} revLit={K3.eq} />
			<Overlay>
				<circle cx={120} cy={640} r={14} fill={NOC} stroke={NO_INK} strokeWidth={3} opacity={prog(f, K3.no, 12)} />
				<SvgText x={148} y={652} text="NO: colourless" size={36} color={NO_INK} at={K3.no} hand={false} weight={600} />
				<circle cx={120} cy={696} r={14} fill={O2C} stroke={O2_INK} strokeWidth={3} opacity={prog(f, K3.ox, 12)} />
				<SvgText x={148} y={708} text="O_2: colourless" size={36} color={O2_INK} at={K3.ox} hand={false} weight={600} />
				<circle cx={120} cy={752} r={14} fill={NO2C} stroke={NO2_INK} strokeWidth={3} opacity={prog(f, K3.brown, 12)} />
				<SvgText x={148} y={764} text="NO_2: brown" size={36} color={NO2_INK} at={K3.brown} hand={false} weight={600} />
				<Pill x={96} y={800} w={700} text="temperature steady, no gas escapes" at={K3.steady} color={TEAL} size={36} h={58} />
				<Pill x={96} y={876} w={560} text="hot cylinder: no N_2O_4" at={K3.hot} color={INK_SOFT} size={36} h={58} />
				<Countdown start={hold.startFrame} end={hold.endFrame} x={1740} y={790} r={48} />
			</Overlay>
			<Enter at={K3.one} style={{position: 'absolute', left: 930, top: 190, width: 900}}>{Q('1', 'You push the piston in to halve the volume. Which way does the net reaction go, and why? What does the colour do straight away, and then once the mixture has settled again?')}</Enter>
			<Enter at={K3.two} style={{position: 'absolute', left: 930, top: 470, width: 900}}>{Q('2', 'Back at the original equilibrium, you lock the piston and pump in argon until the total pressure doubles. What happens to the shift and to the colour, and why?')}</Enter>
			<Enter at={K3.pause} style={{position: 'absolute', left: 930, top: 760}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: AMBER_INK, width: 700, lineHeight: 1.05}}>Pause here to answer.</div>
			</Enter>
		</>
	);
};
void N2O4G; void NO2G;
