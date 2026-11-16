// B8-16 scenes 1 to 5: the hook (about half the world short-sighted by 2050; a focus fault about 1 mm short, or a clarity
// fault), how the eye focuses (cornea, lens, retina, optic nerve; accommodation), myopia (power against length; the long
// eye), hyperopia, astigmatism and presbyopia, and cataract (a clarity fault: scattered light). The light pathway strip
// owns the bottom from scene 2; the eye section is the home plate with its matched states.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {SignalPulse} from '../m8-shared/parts';
import {
	AMBER, AMBER_INK, BLUE, C_FAULT, C_FOG, CARD, Chip, DrawPath, EDGE, EyeStack, EyeStrip, FocalMark, GREEN, GREYT, GTag, INK, INK_SOFT, LensProfile, Pic, PicH, RED, Rays, Svg, Sx, T, TEAL, Title, eyeK, eyePt, lerp, pathX, prog,
	smooth, vis,
} from './parts';
import type {EyeG, PathState} from './parts';
import {FP, PL} from './assets';
import {K} from './common';

const ON = -1000;
export const G: EyeG = {cx: 780, cy: 490, w: 620};
/** Leader line from a label to a feature point. */
export const Lead: React.FC<{a: [number, number]; b: [number, number]; at: number; out?: number}> = ({a, b, at, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	return <g opacity={v}><DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={at} dur={10} color={INK_SOFT} width={3} /><circle cx={b[0]} cy={b[1]} r={6} fill={INK_SOFT} /></g>;
};
export const LIT_ALL = [ON, ON, ON, ON, ON, ON];
export const missChip = (at: number, out?: number) => ({t: 'focus misses', at, out, chip: C_FAULT});
export const fogChip = (at: number, out?: number) => ({t: 'cloudy', at, out, chip: C_FOG});

// ---------- 1. hook ----------
const K1 = K('hook', {y2050: '2050', half: 'about half', fault: 'the fault', point: 'sharp point', mm: 'a millimetre', other: 'Other eyes', cant: "can't get", so: 'So how'});
const G1: EyeG = {cx: 860, cy: 480, w: 680};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const A = 1 - prog(f, K1.fault - 10, 16);
	const B = prog(f, K1.fault, 16);
	const fog = prog(f, K1.cant, 16);
	const [fx, fy] = eyePt(G1, 1420, FP.axis);
	const [lx, ly] = eyePt(G1, FP.lens, FP.axis);
	return (
		<Svg>
			<Title text="Half the world, short-sighted?" out={K1.so} />
			<Title text="How can technology assist visual disorders?" at={K1.so} />
			{A > 0.01 ? <g opacity={A}>
				<Pic p={PL.map} cx={560} cy={440} w={800} />
				{Array.from({length: 50}, (_, i) => { const on = i % 2 === 0 && f >= K1.half + (i % 10) * 2; return <circle key={i} cx={1130 + (i % 10) * 64} cy={290 + Math.floor(i / 10) * 64} r={22} fill={on ? BLUE : '#e9e2d3'} stroke={on ? '#1f4f80' : '#a8a092'} strokeWidth={2.5} />; })}
				<Sx x={1110} y={660} text="about half the world, 2050" size={42} color={BLUE} hand at={K1.half} />
				<GTag x={1110} y={690} text="Holden et al., 2016: a projection" size={28} at={K1.half + 20} />
				<Sx x={160} y={760} text="short-sighted: distant things blur" size={40} color={INK} hand at={K1.y2050 + 20} />
			</g> : null}
			{B > 0.01 ? <g opacity={B}>
				<EyeStack g={G1} base={PL.eye} />
				<Rays g={G1} xF={1420} xR={FP.retina} scatter={fog} at={K1.point} />
				<FocalMark g={G1} x={1420} at={K1.mm} out={K1.cant} />
				{fog > 0.01 ? <ellipse cx={lx} cy={ly} rx={34} ry={86} fill="#cfcac0" opacity={0.75 * fog} /> : null}
				<Sx x={1270} y={300} text="focus" size={46} color={AMBER_INK} hand at={K1.fault} />
				<Sx x={1270} y={350} text="light meets about 1 mm short" size={34} color={INK} hand at={K1.mm} />
				<Sx x={1270} y={610} text="clarity" size={46} color={GREYT} hand at={K1.other} />
				<Sx x={1270} y={660} text="light can't get through clearly" size={34} color={INK} hand at={K1.cant} />
				<Sx x={960} y={930} text="two kinds of fault: focus and clarity" size={48} color={INK} anchor="middle" hand at={K1.other} />
			</g> : null}
			{void fx}{void fy}{void C_FAULT}
		</Svg>
	);
};

// ---------- 2. how the eye focuses ----------
const K2 = K('how-the-eye-focuses', {cornea: 'the cornea', bending: 'most of', lens: 'The lens', retina: 'the retina', layer: 'a layer', nerve: 'optic nerve', near: 'For a', contracts: 'contracts', slack: 'go slack', rounds: 'rounds up', acc: 'accommodation'});
export const SceneFocus: React.FC = () => {
	const f = useCurrentFrame();
	const near = prog(f, K2.near, 14);
	const xF = near < 0.5 ? FP.retina : lerp(FP.retina + 120, FP.retina, smooth(prog(f, K2.rounds, 30)));
	const P = (u: number, v: number) => eyePt(G, u, v);
	const lt = P(FP.lensTop[0], FP.lensTop[1]), lb = P(FP.lensBot[0], FP.lensBot[1]);
	const squeeze = smooth(prog(f, K2.contracts, 20));
	const round = smooth(prog(f, K2.rounds, 30));
	const k = eyeK(G);
	const [lx, ly] = P(FP.lens, FP.axis);
	return (
		<Svg>
			<Title text="How the eye focuses" />
			<GTag x={1824} y={140} text="b15: follow the pathway" size={28} anchor="end" />
			<EyeStack g={G} base={PL.eye} />
			<Rays g={G} xF={FP.retina} xR={FP.retina} at={K2.cornea} out={K2.near} />
			<Rays g={G} kind="div" xF={xF} xR={FP.retina} at={K2.near} />
			{near > 0.01 ? <circle cx={110} cy={P(0, FP.axis)[1]} r={10} fill={RED} opacity={near} /> : null}
			<FocalMark g={G} x={xF} at={K2.retina} />
			{round > 0.01 ? <ellipse cx={lx} cy={ly} rx={(34 + 14 * round) * k * 2.6} ry={92 * k * 2.6} fill="none" stroke={TEAL} strokeWidth={4} opacity={round} /> : null}
			{squeeze > 0.01 ? <g opacity={squeeze}>{[lt, lb].map(([x, y], i) => <circle key={i} cx={x} cy={y + (i ? -1 : 1) * 10 * squeeze} r={12} fill="none" stroke={RED} strokeWidth={4} />)}</g> : null}
			<T x={96} y={250} w={360} text="cornea: most of the bending" size={38} color={INK} at={K2.cornea} />
			<Lead a={[300, 300]} b={P(FP.cornea + 20, 760)} at={K2.bending} />
			<Sx x={560} y={850} text="lens: fine-tunes" size={38} color={INK} hand at={K2.lens} />
			<Lead a={[650, 812]} b={P(FP.lens, 1150)} at={K2.lens + 6} />
			<Sx x={1130} y={300} text="retina: light-sensitive cells" size={38} color={INK} hand at={K2.retina} />
			<Lead a={[1124, 290]} b={P(1530, 760)} at={K2.layer} />
			<GTag x={1130} y={320} text="b01: receptors" size={28} at={K2.layer + 10} />
			<Sx x={1130} y={440} text="optic nerve: to the brain" size={38} color={INK} hand at={K2.nerve} />
			<SignalPulse a={P(FP.nerve[0], FP.nerve[1])} b={[pathX(4) + 125, 872]} at={K2.nerve + 6} until={K2.near} every={14} dur={30} bow={30} color={TEAL} r={8} track={false} o={1 - prog(f, K2.near + 30, 12)} />
			<GTag x={1130} y={560} text="ciliary muscle" size={28} at={K2.contracts} />
			<GTag x={1130} y={616} text="suspensory ligaments" size={28} at={K2.slack} />
			<Sx x={1130} y={710} text="near object: lens rounds up, bends more" size={36} color={TEAL} hand at={K2.rounds} />
			<Sx x={1130} y={780} text="accommodation" size={48} color={TEAL} hand at={K2.acc} />
			<EyeStrip s={{lit: [0, K2.cornea, K2.lens, K2.retina, K2.nerve, K2.nerve + 10]}} />
			{void AMBER}{void BLUE}{void CARD}{void EDGE}{void GREEN}{void C_FOG}{void Chip}{void PicH}{void LensProfile}
		</Svg>
	);
};

// ---------- 3. myopia ----------
const K3 = K('myopia', {match: 'needs the', myopia: 'In myopia', long: 'too long', curved: 'steeply curved', distant: 'Light from', front: 'in front', spreads: 'spreads out', blurred: 'look blurred', near: 'a near', already: 'already spreading', clear: 'look clear', remember: 'To remember', my: "what's near"});
export const SceneMyopia: React.FC = () => {
	const f = useCurrentFrame();
	const lo = smooth(prog(f, K3.long, 30));
	const xR = lerp(FP.retina, FP.retinaLong, lo);
	const P = (u: number, v: number) => eyePt(G, u, v);
	const [r0] = P(FP.retina, 0), [r1] = P(FP.retinaLong, 0);
	return (
		<Svg>
			<Title text="Myopia: power against length" />
			<Chip x={96} y={150} text="bending power must match eye length" size={32} color={BLUE} ink={INK} at={K3.match} />
			<EyeStack g={G} base={PL.eye} layers={[{p: PL.long, o: lo}]} />
			{lo > 0.01 ? <g opacity={lo}><path d={`M${r0},214 L${r0},200 L${r1},200 L${r1},214`} fill="none" stroke={AMBER_INK} strokeWidth={4} /></g> : null}
			<Sx x={(r0 + r1) / 2} y={188} text="too long" size={34} color={AMBER_INK} anchor="middle" hand at={K3.long} />
			<GTag x={1130} y={228} text="or cornea too curved" size={28} at={K3.curved} />
			<Rays g={G} xF={FP.retina} xR={xR} at={K3.distant} out={K3.already} />
			<FocalMark g={G} x={FP.retina} at={K3.front} out={K3.already} />
			<Rays g={G} kind="div" xF={FP.retinaLong} xR={FP.retinaLong} at={K3.already} />
			{prog(f, K3.already, 12) > 0.01 ? <circle cx={110} cy={P(0, FP.axis)[1]} r={10} fill={RED} opacity={prog(f, K3.already, 12)} /> : null}
			<FocalMark g={G} x={FP.retinaLong} at={K3.clear} />
			<Sx x={1130} y={330} text="distant object: parallel light" size={36} color={INK} hand at={K3.distant} />
			<Sx x={1130} y={400} text="focus in front: distant things blur" size={36} color={AMBER_INK} hand at={K3.front} />
			<Sx x={1130} y={520} text="near object: light already spreading" size={36} color={INK} hand at={K3.already} />
			<Sx x={1130} y={590} text="focus on the retina: near things clear" size={36} color={TEAL} hand at={K3.clear} />
			<Sx x={96} y={830} text={"myopia: you see what's near “my” eyes"} size={46} color={BLUE} hand at={K3.my} />
			<EyeStrip s={{lit: LIT_ALL, items: [[], [], [], [missChip(K3.front)]]}} />
			{void GREEN}{void CARD}{void T}{void C_FOG}{void GREYT}{void Pic}{void LensProfile}{void PicH}{void vis}
		</Svg>
	);
};

// ---------- 4. hyperopia, astigmatism, presbyopia ----------
const K4 = K('hyperopia-astigmatism-presbyopia', {hyper: 'In hyperopia', short: 'too short', flat: 'too flat', behind: 'behind the', nearblur: 'Near objects', astig: 'In astigmatism', nosingle: 'no single', mid: 'mid-forties', stiff: 'stiffens', presby: "That's presbyopia", reading: 'reading glasses'});
export const SceneHyper: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, K4.short, 30)) * (1 - smooth(prog(f, K4.astig, 30)));
	const xR = lerp(FP.retina, FP.retinaShort, sh);
	const P = (u: number, v: number) => eyePt(G, u, v);
	const [r0] = P(FP.retina, 0), [r1] = P(FP.retinaShort, 0);
	const A = 1 - prog(f, K4.astig - 6, 14);
	const B = vis(f, K4.astig, K4.mid - 6, 14);
	const C = prog(f, K4.mid, 14);
	const k = eyeK(G);
	const [lx, ly] = P(FP.lens, FP.axis);
	const tryR = f >= K4.stiff ? 0.5 + 0.5 * Math.sin((f - K4.stiff) / 10) : 0;
	return (
		<Svg>
			<Title text="Hyperopia, astigmatism, presbyopia" />
			<EyeStack g={G} base={PL.eye} layers={[{p: PL.short, o: sh}]} />
			{A > 0.01 ? <g opacity={A}>
				{sh > 0.01 ? <path opacity={sh} d={`M${r1},214 L${r1},200 L${r0},200 L${r0},214`} fill="none" stroke={AMBER_INK} strokeWidth={4} /> : null}
				<Sx x={(r0 + r1) / 2} y={188} text="too short" size={34} color={AMBER_INK} anchor="middle" hand at={K4.short} />
				<Rays g={G} xF={FP.retina + 20} xR={xR} at={K4.behind - 10} />
				<FocalMark g={G} x={FP.retina + 20} at={K4.behind} />
				<Sx x={1130} y={300} text="hyperopia: long-sightedness" size={38} color={INK} hand at={K4.hyper} />
				<GTag x={1130} y={322} text="or cornea too flat" size={28} at={K4.flat} />
				<Sx x={1130} y={430} text="focus behind the retina" size={38} color={AMBER_INK} hand at={K4.behind} />
				<Sx x={1130} y={500} text="near objects blur most" size={36} color={INK} hand at={K4.nearblur} />
				<GTag x={1130} y={522} text="young eyes can partly compensate" size={28} at={K4.nearblur + 20} />
			</g> : null}
			{B > 0.01 ? <g opacity={B}>
				<Sx x={1130} y={300} text="astigmatism: uneven cornea" size={38} color={INK} hand at={ON} />
				<path d="M1240,360 Q1180,470 1240,580" fill="none" stroke={BLUE} strokeWidth={6} />
				<path d="M1300,380 Q1268,470 1300,560" fill="none" stroke={TEAL} strokeWidth={6} />
				<circle cx={1520} cy={470} r={10} fill={BLUE} /><circle cx={1660} cy={470} r={10} fill={TEAL} />
				<line x1={1240} x2={1700} y1={470} y2={470} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="6 6" />
				<Sx x={1130} y={650} text="no single sharp point" size={38} color={AMBER_INK} hand at={K4.nosingle} />
				<GTag x={1130} y={672} text="rugby ball, not soccer ball" size={28} at={K4.nosingle + 10} />
			</g> : null}
			{C > 0.01 ? <g opacity={C}>
				<ellipse cx={lx} cy={ly} rx={(34 + 6 * tryR) * k * 2.6} ry={92 * k * 2.6} fill="none" stroke={RED} strokeWidth={4} strokeDasharray="8 6" />
				<Sx x={1130} y={300} text="stiff lens: can't round up for close work" size={36} color={INK} hand at={K4.stiff} />
				<Chip x={1130} y={340} text="presbyopia: presby = old" size={34} color={AMBER_INK} ink={INK} at={K4.presby} />
				<g opacity={prog(f, K4.reading, 12)}><PicH p={PL.glasses} cx={1300} cy={500} h={110} /></g>
				<Sx x={1130} y={620} text="reading glasses" size={38} color={INK} hand at={K4.reading} />
				<GTag x={1130} y={660} text="hyperopia = short eyeball; presbyopia = stiff lens" size={26} at={K4.reading + 20} />
			</g> : null}
			<EyeStrip s={{lit: LIT_ALL, items: [[], [], [], [missChip(K4.behind)]]}} />
			{void AMBER}{void GREEN}{void CARD}{void T}{void C_FOG}{void GREYT}{void Pic}{void LensProfile}{void EDGE}{void RED}
		</Svg>
	);
};

// ---------- 5. cataract ----------
const K5 = K('cataract', {some: 'Some faults', cataract: 'A cataract', cloudy: 'turned cloudy', proteins: 'Proteins in', scattered: 'is scattered', dim: 'dim and', colours: 'colours fade', glare: 'headlights cause', ageing: 'Ageing is', sun: 'sunlight', smoking: 'smoking', diabetes: 'diabetes', focusP: 'might focus', glasses: "glasses can't"});
export const SceneCataract: React.FC = () => {
	const f = useCurrentFrame();
	const ca = smooth(prog(f, K5.cataract, 30));
	const clump = smooth(prog(f, K5.proteins + 20, 30));
	const P = (u: number, v: number) => eyePt(G, u, v);
	const [cx] = P(FP.cornea, FP.axis);
	return (
		<Svg>
			<Title text="Cataract: a clarity fault" />
			<EyeStack g={G} base={PL.eye} layers={[{p: PL.cat, o: ca}]} />
			<Rays g={G} xF={FP.retina} xR={FP.retina} scatter={prog(f, K5.scattered, 16)} at={K5.some} />
			<LensProfile x={cx - 60} y={P(0, FP.axis)[1]} h={190} kind="concave" at={K5.glasses} />
			<Sx x={1130} y={260} text="cataract: cloudy lens" size={42} color={INK} hand at={K5.cataract} />
			<g opacity={prog(f, K5.proteins, 14)}>
				<rect x={1130} y={300} width={300} height={170} rx={14} fill={CARD} stroke={EDGE} strokeWidth={3} />
				{Array.from({length: 40}, (_, i) => {
					const gx = 1150 + (i % 8) * 36 + 10, gy = 320 + Math.floor(i / 8) * 30 + 8;
					const c = Math.floor(i / 10);
					const tx = 1180 + (c % 2) * 150 + ((i % 10) % 4) * 14, ty = 340 + Math.floor(c / 2) * 70 + Math.floor((i % 10) / 4) * 14;
					return <circle key={i} cx={lerp(gx, tx, clump)} cy={lerp(gy, ty, clump)} r={6} fill="#b8a77a" />;
				})}
				<Sx x={1450} y={360} text="clear: evenly spaced" size={30} color={INK} hand at={K5.proteins} out={K5.proteins + 30} />
				<Sx x={1450} y={360} text="cloudy: clumped" size={30} color={AMBER_INK} hand at={K5.proteins + 34} />
			</g>
			<Sx x={1130} y={530} text="light is scattered" size={38} color={AMBER_INK} hand at={K5.scattered} />
			<GTag x={1130} y={556} text="dim and blurred" size={28} at={K5.dim} />
			<GTag x={1360} y={556} text="colours fade" size={28} at={K5.colours} />
			<GTag x={1560} y={556} text="glare" size={28} at={K5.glare} />
			<Chip x={1130} y={620} text="mainly ageing" size={32} color={AMBER_INK} ink={INK} at={K5.ageing} />
			<GTag x={1360} y={626} text="sunlight" size={28} at={K5.sun} />
			<GTag x={1500} y={626} text="smoking" size={28} at={K5.smoking} />
			<GTag x={1640} y={626} text="diabetes" size={28} at={K5.diabetes} />
			<Sx x={1130} y={760} text="focus fixed, still cloudy" size={38} color={INK} hand at={K5.glasses + 10} />
			<EyeStrip s={{lit: LIT_ALL, fog: K5.scattered, items: [[], [], [fogChip(K5.scattered)]]}} />
			{void AMBER}{void BLUE}{void GREEN}{void T}{void GREYT}{void Pic}{void PicH}{void RED}{void INK_SOFT}{void pathX}
		</Svg>
	);
};
export type {PathState};
