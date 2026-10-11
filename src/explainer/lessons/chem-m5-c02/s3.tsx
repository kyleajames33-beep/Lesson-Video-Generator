import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Countdown, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, prog, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {ColourKey, EqRR, FWD, Fade, LENS, Overlay, ParticleLens, Pill, SvgText, TEAL} from './parts';
import {Heading, NAVY, VIOLET, GREEN_INK, kf, sc} from './common';

// ---------- 6. Towns and the aid ----------
const K7 = cues(sc('towns-aid'), {towns: 'two towns', left: 'left town', first: 'At first', fewer: 'fewer people', back: 'head back', rightTown: 'right town', builds: 'builds', matches: 'matches', steady: 'populations', both: 'both ways', flask: 'In our flask', other: 'other way round', sealed: 'sealed flask', hold: 'hold onto', aidA: 'faster rate falls', falls: ['falls', 1], aidB: 'slower rate rises', rises: ['rises', 1], aidC: 'they meet and stay', level: 'level'});
const House: React.FC<{x: number; h: number; w: number; roof: string; at: number; base?: number}> = ({x, h, w, roof, at, base = 600}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	if (p <= 0) return null;
	return (
		<g transform={`translate(${x},${base}) scale(1,${p})`} opacity={p}>
			<rect x={0} y={-h} width={w} height={h} fill="#fffdf8" stroke={INK} strokeWidth={4} rx={3} />
			<path d={`M${-8},${-h} L${w / 2},${-h - 44} L${w + 8},${-h} Z`} fill={roof} stroke={INK} strokeWidth={4} strokeLinejoin="round" />
			<rect x={w / 2 - 9} y={-30} width={18} height={30} fill="#d9c9a8" stroke={INK} strokeWidth={3} />
			{h > 110 ? <rect x={10} y={-h + 22} width={14} height={16} fill="#cfe3f1" stroke={INK} strokeWidth={2.5} /> : null}
			{h > 150 ? <rect x={w - 24} y={-h + 22} width={14} height={16} fill="#cfe3f1" stroke={INK} strokeWidth={2.5} /> : null}
		</g>
	);
};
const Car: React.FC<{x: number; y: number; dir: 1 | -1; color: string; o: number}> = ({x, y, dir, color, o}) => (
	<g transform={`translate(${x.toFixed(1)},${y.toFixed(1)}) scale(${dir},1)`} opacity={o}>
		<rect x={-24} y={-12} width={48} height={20} rx={7} fill={color} stroke={INK} strokeWidth={3} />
		<path d="M-10,-12 L-5,-23 L10,-23 L15,-12 Z" fill={color} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
		<circle cx={-13} cy={9} r={5.5} fill={INK} /><circle cx={13} cy={9} r={5.5} fill={INK} />
	</g>
);
const MiniBars: React.FC<{x: number; at: number; fastFwd: boolean; title: string; sub: string}> = ({x, at, fastFwd, title, sub}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const base = 925, big = 84, small = 24;
	return (
		<g opacity={o}>
			<rect x={x} y={738} width={560} height={206} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={2} />
			<text x={x + 280} y={778} textAnchor="middle" fill={INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}}>{title}</text>
			<rect x={x + 70} y={base - (fastFwd ? big : small)} width={70} height={fastFwd ? big : small} fill="#bcd6ee" stroke={FWD} strokeWidth={4} rx={4} />
			<rect x={x + 330} y={base - (fastFwd ? small : big)} width={70} height={fastFwd ? small : big} fill="#f6dfae" stroke={AMBER} strokeWidth={4} rx={4} />
			<text x={x + 105} y={base - (fastFwd ? big : small) - 10} textAnchor="middle" fill={fastFwd ? FWD : INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}}>{fastFwd ? 'faster' : 'slower'}</text>
			<text x={x + 365} y={base - (fastFwd ? small : big) - 10} textAnchor="middle" fill={fastFwd ? INK_SOFT : AMBER_INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}}>{fastFwd ? 'slower' : 'faster'}</text>
			<text x={x + 160} y={base - 28} fill={FWD} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}}>forward</text>
			<text x={x + 420} y={base - 28} fill={AMBER_INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}}>reverse</text>
			<text x={x + 280} y={base + 16} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 1}}>{sub}</text>
		</g>
	);
};
const UWord: React.FC<{text: string; at: number; color?: string; ul?: string; ulAt?: number; size?: number}> = ({text, at, color = INK, ul, ulAt, size = 78}) => (
	<span style={{position: 'relative', display: 'inline-block', marginRight: 22}}>
		<HandText text={text} at={at} size={size} color={color} cps={20} />
		{ul ? <svg width="100%" height={16} viewBox="0 0 100 16" preserveAspectRatio="none" style={{position: 'absolute', left: 0, right: 0, bottom: -10, overflow: 'visible'}}><DrawPath d="M2,8 Q50,0 98,8" at={ulAt ?? at + 8} dur={16} color={ul} width={7} /></svg> : null}
	</span>
);
export const SceneTowns: React.FC = () => {
	const f = useCurrentFrame();
	const LANE_L = 700, LANE_R = 1090, LEN = LANE_R - LANE_L;
	const blue = kf(f, [[K7.first - 4, 0], [K7.first + 24, 6], [K7.fewer, 6], [K7.fewer + 110, 3]]);
	const amber = kf(f, [[K7.back - 4, 0], [K7.back + 30, 1], [K7.builds + 70, 3]]);
	const slots = [0, 1, 2, 3, 4, 5];
	const swapOut = 1 - prog(f, K7.hold, 14);
	return (
		<>
			<Heading text="The two towns again" at={4} />
			<Overlay>
				<g transform="translate(0,-100)">
				<DrawPath d="M120,602 L672,602" at={K7.towns} dur={24} color={INK} width={5} />
				<DrawPath d="M1108,602 L1660,602" at={K7.towns + 8} dur={24} color={INK} width={5} />
				{[[140, 110, 78], [228, 160, 70], [308, 100, 86], [404, 200, 70], [484, 140, 80], [574, 115, 72]].map((h, i) => <House key={i} x={h[0]} h={h[1]} w={h[2]} roof="#8fc0e3" at={K7.towns + 4 + i * 4} />)}
				{[[1150, 130, 80], [1246, 180, 72], [1334, 105, 86], [1432, 160, 70], [1512, 120, 80], [1602, 100, 60]].map((h, i) => <House key={i} x={h[0]} h={h[1]} w={h[2]} roof="#f6d79a" at={K7.towns + 8 + i * 4} />)}
				<DrawPath d="M672,566 Q890,556 1108,566" at={K7.towns + 20} dur={24} color={INK} width={5} />
				<DrawPath d="M672,640 Q890,650 1108,640" at={K7.towns + 26} dur={24} color={INK} width={5} />
				<DrawPath d="M690,603 L1090,603" at={K7.towns + 34} dur={24} color={INK_SOFT} width={3} dash="22 18" />
				<SvgText x={385} y={690} text="reactant side" size={64} color={FWD} anchor="middle" at={K7.left} />
				<SvgText x={1380} y={690} text="product side" size={64} color={AMBER_INK} anchor="middle" at={K7.rightTown} />
				<Fade at={K7.left} out={K7.first - 6}><DrawPath d={scribbleEllipse(385, 480, 300, 190, 4)} at={K7.left} dur={30} color={FWD} width={6} /></Fade>
				{slots.map(i => {
					const t = f * 3.2 + i * (LEN / 6);
					const u = (t % LEN) / LEN;
					const o = Math.min(1, u / 0.1, (1 - u) / 0.1) * Math.max(0, Math.min(1, blue - i));
					const t2 = f * 3.2 + 40 + i * (LEN / 6);
					const u2 = (t2 % LEN) / LEN;
					const o2 = Math.min(1, u2 / 0.1, (1 - u2) / 0.1) * Math.max(0, Math.min(1, amber - i));
					return (
						<g key={i}>
							{o > 0.01 ? <Car x={LANE_L + u * LEN} y={585} dir={1} color="#6aa6d6" o={o} /> : null}
							{o2 > 0.01 ? <Car x={LANE_R - u2 * LEN} y={622} dir={-1} color="#f0b24a" o={o2} /> : null}
						</g>
					);
				})}
				<Fade at={K7.first} out={K7.fewer - 6}><SvgText x={890} y={520} text="all traffic goes right" size={46} color={FWD} anchor="middle" at={K7.first} /></Fade>
				<Fade at={K7.fewer} out={K7.back - 6}><SvgText x={890} y={520} text="less traffic leaves" size={46} color={FWD} anchor="middle" at={K7.fewer} /></Fade>
				<Fade at={K7.back} out={K7.matches - 6}><SvgText x={890} y={520} text="more cars head back" size={46} color={AMBER_INK} anchor="middle" at={K7.back} /></Fade>
				<Fade at={K7.matches} out={K7.flask - 20}>
					<path d="M720,508 L720,520 L1060,520 L1060,508" fill="none" stroke={TEAL} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={890} y={490} text="same flow both ways" size={46} color={TEAL} anchor="middle" at={K7.matches} />
				</Fade>
				</g>
				<g opacity={swapOut}>
					<MiniBars x={250} at={K7.flask} fastFwd title="reactants only" sub="" />
					<MiniBars x={1000} at={K7.other} fastFwd={false} title="products only" sub="" />
					<Fade at={K7.other}><path d="M830,838 L990,838 M966,822 L990,838 L966,854" fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" /></Fade>
				</g>
				<Pill x={96} y={716} w={640} text="sealed flask, steady temperature" at={K7.sealed} color={TEAL} size={42} h={62} />
			</Overlay>
			<div style={{position: 'absolute', left: 96, top: 790, width: 1740, opacity: prog(f, K7.aidA, 10)}}>
				<UWord text="The faster rate" at={K7.aidA} />
				<UWord text="falls," at={K7.falls} color={FWD} ul={FWD} />
				<UWord text="the slower rate" at={K7.aidB} />
				<UWord text="rises," at={K7.rises} color={AMBER_INK} ul={AMBER} />
				<div style={{height: 8}} />
				<UWord text="they meet and stay" at={K7.aidC} />
				<UWord text="level." at={K7.level} color={TEAL} ul={TEAL} />
			</div>
		</>
	);
};

// ---------- 7. Attempt ----------
const K8 = cues(sc('attempt'), {turn: 'Your turn', sealed: 'sealed flask', same: 'same size', filled: 'filled with', c1: ['0.20', 1], p3: ['three', 1], c2: ['0.20', 2], chlorine: ['chlorine', 1], noFive: 'five at all', one: 'One', two: 'Two', three: ['three', 3], pause: 'Pause'});
const QUESTIONS: [string, string][] = [
	['1', 'Which rate is zero at the very start, and why?'],
	['2', 'As time passes, which rate falls, which rises, and what happens to the concentration of each substance?'],
	['3', 'Once the two rates are equal, are the reactions still going?'],
];
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const scene = sc('attempt') as ReturnType<typeof sc> & {responseHold?: {startFrame: number; endFrame: number}};
	const hold = scene.responseHold ?? {startFrame: K8.pause + 60, endFrame: K8.pause + 1000};
	const counts = (t: number) => ({n: 0, v: kf(t, [[K8.filled, 0], [K8.filled + 70, 20]], false)});
	const qAt = [K8.one, K8.two, K8.three];
	return (
		<>
			<Heading text="Your turn: a different start" at={K8.turn} />
			<Overlay>
				<ParticleLens cx={LENS.cx} cy={LENS.cy} r={LENS.r} counts={counts} seed={13} reveal={prog(f, 20, 20)} />
				<ColourKey x={225} y={870} at={K8.filled} />
				<Pill x={96} y={196} w={700} text="same size flask, same temperature, sealed" at={K8.sealed} color={TEAL} size={38} h={58} />
				<EqRR x={1010} y={140} at={K8.turn} size={40} />
				<SvgText x={1010} y={330} text="PCl_3   0.20 mol/L" size={54} color={VIOLET} at={K8.p3} />
				<SvgText x={1010} y={398} text="Cl_2   0.20 mol/L" size={54} color={GREEN_INK} at={K8.c2} />
				<SvgText x={1010} y={466} text="PCl_5   none" size={54} color={NAVY} at={K8.noFive} />
				<Countdown start={hold.startFrame} end={hold.endFrame} x={1750} y={300} r={56} />
			</Overlay>
			{QUESTIONS.map(([n, q], i) => (
				<Enter key={n} at={qAt[i]} style={{position: 'absolute', left: 1010, top: [520, 612, 770][i], width: 840}}>
					<div style={{display: 'flex', gap: 20, alignItems: 'flex-start'}}>
						<div style={{flex: 'none', width: 52, height: 52, borderRadius: 999, background: TEAL, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 4}}>{n}</div>
						<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 34, color: INK, lineHeight: 1.22}}>{q}</div>
					</div>
				</Enter>
			))}
			<Enter at={K8.pause} style={{position: 'absolute', left: 1010, top: 880}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT, opacity: f >= K8.pause ? 1 : 0}}>Pause the video if you need more time.</div>
			</Enter>
		</>
	);
};
