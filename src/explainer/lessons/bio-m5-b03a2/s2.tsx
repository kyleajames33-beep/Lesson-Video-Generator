import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Arrow, BarHead, Brain, Chip, Cross, DrawPath, Dots, EggDot, EggMark, OvaryRound, ovFol, Enter, Fade, FONT_DISPLAY, FONT_HAND, GreyTag, HandText, Hand, Heading, INK, INK_SOFT, Label, LoopCard, LoopIcon, Overlay, PArt, PL, Pill, PIT,
	prog, S, Say, SLATE, SLATE_INK, TEAL, TEAL_INK, along, pathOf, Vein, YELLOW, Bracket,
} from './shared';

const polyAng = (pts: [number, number][]) => {
	const a = pts[pts.length - 2], b = pts[pts.length - 1];
	return Math.atan2(b[1] - a[1], b[0] - a[0]);
};

// ---------- 2b. The brake (negative feedback) ----------
const OV = {x: 130, y: 470, d: 260};
const OVH = OV.d;
const FOL = ovFol(OV.x, OV.y, OV.d);
const P1: [number, number][] = [[PIT[0] - 28, PIT[1] + 28], [1540, 480], [1200, 570], [850, 620], [560, 660], [FOL[0] + 80, FOL[1] + 40]];
const P2: [number, number][] = [[OV.x + 190, OV.y + 6], [520, 400], [900, 320], [1300, 290], [1600, 320], [1668, 346]];
export const SceneBrake: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('brake'), {
		pit1: 'to the pituitary', travel: 'travels in the blood', tells: 'tells the pituitary', release: 'release less FSH', works: 'works like a brake', withLess: 'With less FSH',
		matures: 'matures enough', relEgg: 'release an egg', neg: 'negative feedback', def: 'hormone acts back',
	});
	const brakeOut = c.withLess - 8;
	return (
		<>
			<Heading items={[[0, 'The brake on FSH and LH']]} size={72} />
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, 0, 20)}}>
				<OvaryRound x={OV.x} y={OV.y} d={OV.d} />
			</div>
			<Hand at={4} x={OV.x - 10} y={OV.y + OVH + 12} w={520} size={40} color={INK}>ovary: follicle, then corpus luteum</Hand>
			<Overlay>
				<Brain at={0} />
				<Label x={PIT[0] + 40} y={PIT[1] + 76} at={c.pit1} text="pituitary" size={44} color={SLATE_INK} />
				<circle cx={FOL[0]} cy={FOL[1]} r={36} fill="#f2c81f" opacity={0.45} />
				{/* slate: FSH and LH leave the pituitary and thin out */}
				<Vein d={pathOf(P1)} at={4} dur={36} o={0.7} />
				<Dots pts={P1} at={14} n={7} period={70} color={SLATE} r={11} end={c.release} />
				<Dots pts={P1} at={c.release + 40} n={2} period={110} color={SLATE} r={11} />
				<Fade at={8} out={c.release - 6}><Label x={1100} y={660} at={8} text="FSH and LH" size={46} color={SLATE_INK} /></Fade>
				<Fade at={c.release}><Label x={1100} y={660} at={c.release} text="less FSH and LH" size={46} color={SLATE_INK} /></Fade>
				{/* amber: progesterone travels back to the pituitary */}
				<DrawPath d={pathOf(P2)} at={c.travel} dur={54} color={AMBER} width={9} />
				<Dots pts={P2} at={c.travel + 40} n={6} period={80} color={AMBER} r={10} />
				<Label x={900} y={296} at={c.travel + 14} text="progesterone" size={46} color={AMBER_INK} />
				<BarHead x={P2[5][0] + 6} y={P2[5][1] + 2} ang={polyAng(P2)} at={c.release} color={AMBER} />
				<LoopIcon k="neg" cx={1490} cy={396} r={30} o={prog(f, c.release + 6, 12)} />
				{/* the egg stays in the ovary */}
				<g opacity={prog(f, c.matures, 14)}><EggMark x={FOL[0]} y={FOL[1]} r={14} /></g>
				{/* brake pedal doodle */}
				<g opacity={prog(f, c.works, 14) * (1 - prog(f, brakeOut, 10))} transform="translate(900,780)">
					<rect x={-55} y={-18} width={110} height={36} rx={8} fill="#6b6358" transform="rotate(-15)" />
					<path d="M40,-14 L120,-84" stroke="#8d949b" strokeWidth={12} strokeLinecap="round" />
					<circle cx={122} cy={-86} r={14} fill="#8d949b" />
					<DrawPath d="M150,-40 L120,-8" at={c.works + 10} dur={12} color="#c4432f" width={6} />
				</g>
			</Overlay>
			<Hand at={c.works + 6} out={brakeOut} x={1060} y={742} size={46} color={INK}>brake: slows FSH and LH down</Hand>
			<Say at={c.tells} x={1050} y={404} w={400} size={26} color={INK_SOFT} weight={500}>the hypothalamus above it is involved too</Say>
			<GreyTag at={c.relEgg} x={OV.x - 10} y={800} text="no egg is released" size={36} />
			<Enter at={c.neg} style={{position: 'absolute', left: 700, top: 690}}><HandText text="negative feedback" at={c.neg} size={86} color={INK} cps={26} /></Enter>
			<Say at={c.def} x={700} y={800} w={1120} size={36} color={AMBER_INK} weight={700}>a hormone acts back on the pituitary, the gland that controls the process, and turns that process down</Say>
			<LoopCard at={c.def + 70} fill1={c.def + 120} />
			<div style={{display: 'none'}}>{[Arrow, Chip, Cross, TEAL, TEAL_INK, YELLOW, along, Bracket, Pill, FONT_HAND, FONT_DISPLAY, AMBER, INK, SLATE].length}</div>
		</>
	);
};

// ---------- 2c. A thermostat does the same job ----------
const Node: React.FC<{x: number; y: number; at: number; text: string; color: string; size?: number; lit?: number}> = ({x, y, at, text, color, size = 46, lit = 1}) => (
	<Chip x={x} y={y} at={at} text={text} color={lit > 0.5 ? color : '#b9b3a8'} size={size} />
);
export const SceneThermostat: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('thermostat'), {
		same: 'works the same way', heater: 'The heater warms', senses: 'senses the warmth', off: 'switches the heater off', cold: 'If the room gets cold', on: 'switches the heater on', pushes: 'pushes back',
		here: 'FSH and LH lead', lead: 'lead to progesterone', turns: 'progesterone turns',
	});
	const R1 = 270, R2 = 590;
	const LX = 330, RX = 1450;
	const cold = prog(f, c.cold, 24) * (1 - prog(f, c.on + 30, 20));
	const merc = 70 - 46 * cold;
	const heaterOn = f < c.off || (f >= c.on);
	const pair = (x: number, at: number, label: string, w = 320) => (
		<g opacity={prog(f, at, 14)}>
			<path d={`M${x},${R1 + 100} L${x},${R2 - 80}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="4 12" strokeLinecap="round" />
			<text x={x} y={(R1 + R2) / 2 + 24} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={AMBER_INK}>{label}</text>
			<rect x={x - w / 2} y={(R1 + R2) / 2 - 14} width={w} height={0} />
		</g>
	);
	return (
		<>
			<Heading items={[[0, 'A thermostat does the same job']]} size={72} />
			{/* body loop (from the last scene) */}
			<Enter at={4} dy={60} style={{position: 'absolute', inset: 0}}>
				<Node x={LX - 90} y={R1 - 36} at={4} text="ovary" color={YELLOW} />
				<Node x={RX - 130} y={R1 - 36} at={4} text="pituitary" color={SLATE} />
			</Enter>
			<Overlay>
				<g opacity={prog(f, 8, 14)}>
					<Arrow x1={RX - 150} y1={R1 - 26} x2={LX + 110} y2={R1 - 26} at={8} color={SLATE} width={7} head={20} />
					<Label x={925} y={R1 - 44} at={12} text="FSH and LH" size={42} color={SLATE_INK} />
					<DrawPath d={`M${LX + 110},${R1 + 30} L${RX - 150},${R1 + 30}`} at={10} dur={20} color={AMBER} width={7} />
					<BarHead x={RX - 150} y={R1 + 30} ang={Math.PI} at={30} color={AMBER} width={8} len={28} />
					<Label x={925} y={R1 + 86} at={14} text="progesterone" size={42} color={AMBER_INK} />
				</g>
			</Overlay>
			{/* thermostat loop, in matching positions */}
			<Node x={LX - 90} y={R2 - 36} at={c.heater} text="heater" color="#e0861f" lit={heaterOn ? 1 : 0} />
			<Node x={RX - 150} y={R2 - 36} at={c.senses} text="thermostat" color={SLATE} />
			<Overlay>
				
				{/* warmth: heater to thermostat, ending in a flat bar */}
				<DrawPath d={`M${LX + 110},${R2 + 30} L${RX - 170},${R2 + 30}`} at={c.senses} dur={22} color="#e0861f" width={7} />
				<BarHead x={RX - 170} y={R2 + 30} ang={Math.PI} at={c.senses + 20} color="#e0861f" width={8} len={28} />
				<Label x={925} y={R2 + 84} at={c.senses + 6} text="warmth" size={42} color="#a85f10" />
				{/* switch-off arrow (thermostat to heater) */}
				<g opacity={heaterOn ? 0.35 : 1}>
					<Arrow x1={RX - 170} y1={R2 - 26} x2={LX + 110} y2={R2 - 26} at={c.heater + 10} color={INK_SOFT} width={6} head={18} dur={22} />
				</g>
				<Fade at={c.off} out={c.cold - 6}><Label x={925} y={R2 - 44} at={c.off} text="heater off" size={42} color={INK_SOFT} /></Fade>
				<Fade at={c.on}><Label x={925} y={R2 - 44} at={c.on} text="heater on" size={42} color="#a85f10" /></Fade>
				{/* room thermometer */}
				<g opacity={prog(f, c.heater, 14)} transform="translate(560,700)">
					<rect x={-14} y={-60} width={28} height={120} rx={14} fill="#fffdf8" stroke={INK} strokeWidth={5} />
					<circle cx={0} cy={66} r={24} fill="#e0482f" stroke={INK} strokeWidth={5} />
					<rect x={-7} y={60 - merc} width={14} height={merc + 6} fill="#e0482f" />
					<text x={50} y={20} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42}} fill={INK}>{cold > 0.5 ? 'room: cold' : 'room: warm'}</text>
				</g>
				<g opacity={cold} transform="translate(440,730)">
					{[0, 60, 120].map(a => <line key={a} x1={-34} y1={0} x2={34} y2={0} stroke="#4a90c9" strokeWidth={7} strokeLinecap="round" transform={`rotate(${a})`} />)}
				</g>
				{pair(LX, c.heater + 20, '')}
				<g opacity={prog(f, c.here, 14)}>
					<path d={`M${LX},${R1 + 90} L${LX},${R2 - 80}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="4 12" strokeLinecap="round" />
					<path d={`M${RX},${R1 + 90} L${RX},${R2 - 80}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="4 12" strokeLinecap="round" />
					<path d="M925,380 L925,500" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="4 12" strokeLinecap="round" />
				</g>
			</Overlay>
			<Pill at={c.cold + 20} out={c.on + 40} x={1180} y={740} size={42}>cold: heater on</Pill>
			<Pill at={c.heater + 14} out={c.senses - 8} x={LX - 120} y={420} size={36} color={AMBER_INK}>heater = ovary</Pill>
			<Pill at={c.senses + 14} out={c.off - 8} x={700} y={420} size={36} color={AMBER_INK}>warmth = progesterone</Pill>
			<Pill at={c.senses + 40} out={c.cold - 8} x={RX - 190} y={420} size={36} color={AMBER_INK}>thermostat = pituitary</Pill>
			
			<Say at={c.turns + 70} x={96} y={790} w={1500} size={34} color={INK_SOFT} weight={600}>a heat source held against the thermostat switches the heater off too</Say>
			<LoopCard at={0} fill1={0} />
			<div style={{display: 'none'}}>{[AMBER, FONT_DISPLAY, INK, TEAL, along, pathOf, c.same, c.pushes, EggDot, EggMark, Dots, Cross, PArt, PL, Vein, Bracket].length}</div>
		</>
	);
};

// ---------- 2d. The brake stays on ----------
const PR_RISE = 'M130,405 C175,395 200,170 300,130 C340,118 380,114 420,118';
const PR_FALL = 'M420,118 C450,125 470,300 520,395';
const SL_LOW = 'M130,388 C250,396 330,396 430,388';
const SL_RISE = 'M430,388 C470,380 500,300 545,210';
const PR_ON = 'M420,118 C520,102 640,94 770,88';
const SL_LOW2 = 'M430,388 C540,396 650,396 770,390';
export const SceneBrakeStaysOn: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('brake-stays-on'), {
		breaks: 'breaks down', falls: 'progesterone falls', off: 'the brake comes off', next: 'next follicle can grow', preg: 'In a pregnancy', hcg: 'hCG keeps', plac: 'then the placenta', whole: 'for the whole pregnancy',
		src: 'The source has changed', same: 'the brake works the same way', pit: 'the pituitary senses', less: 'releases less', so: 'So the brake stays on', noegg: 'no new egg',
	});
	const dim = 1 - 0.6 * prog(f, c.preg, 16);
	const OVX = 1330, OVY = 215, OVW = 300;
	const ovh = OVW;
	const fol = ovFol(OVX, OVY, OVW);
	const srcPlac = prog(f, c.plac, 14);
	return (
		<>
			<Heading items={[[0, 'Why the brake stays on']]} size={72} />
			<Overlay>
				<g transform="translate(96,215) scale(1.2)">
					<DrawPath d="M80,34 L80,420 L780,420" at={4} dur={22} color={INK} width={6} />
					<text x={770} y={470} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 30}} fill={INK_SOFT} opacity={prog(f, 14, 14)}>time after ovulation (egg released)</text>
					<text transform="translate(34,230) rotate(-90)" textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 30}} fill={INK_SOFT} opacity={prog(f, 14, 14)}>hormone level</text>
					{/* legend */}
					<g opacity={prog(f, 16, 12)}><line x1={110} x2={150} y1={52} y2={52} stroke={AMBER} strokeWidth={9} strokeLinecap="round" /><text x={162} y={62} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30}} fill={INK}>progesterone</text></g>
					<g opacity={prog(f, 16, 12)}><line x1={110} x2={150} y1={92} y2={92} stroke={SLATE} strokeWidth={9} strokeLinecap="round" /><text x={162} y={102} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30}} fill={INK}>FSH and LH</text></g>
					<g opacity={dim}>
						<DrawPath d={PR_RISE} at={14} dur={50} color={AMBER} width={9} />
						<DrawPath d={SL_LOW} at={14} dur={50} color={SLATE} width={9} />
						<g opacity={prog(f, c.breaks, 14)}>
							<line x1={420} x2={420} y1={44} y2={420} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 9" />
							<text x={432} y={34} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26}} fill={INK}>about 2 weeks after ovulation</text>
						</g>
						<DrawPath d={PR_FALL} at={c.falls} dur={36} color="#8d949b" width={9} dash="14 11" />
						<DrawPath d={SL_RISE} at={c.off} dur={36} color={SLATE} width={9} dash="14 11" />
						<text x={565} y={262} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill="#5d646b" opacity={prog(f, c.off + 8, 12)}>brake off</text>
					</g>
					{/* pregnancy case */}
					<DrawPath d={PR_ON} at={c.hcg - 20} dur={80} color={YELLOW} width={22} opacity={0.5 * (1 - srcPlac)} />
					<DrawPath d={PR_ON} at={c.plac - 6} dur={20} color={TEAL} width={22} opacity={0.45} />
					<DrawPath d={PR_ON} at={c.hcg - 20} dur={80} color={AMBER} width={9} />
					<g opacity={prog(f, c.hcg, 12)}><rect x={560} y={48} width={110} height={44} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={4} /><text x={615} y={82} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={TEAL_INK}>hCG</text></g>
					<text x={600} y={140} textAnchor="start" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}} fill={srcPlac > 0.5 ? TEAL_INK : '#9a7d0a'} opacity={prog(f, c.hcg + 20, 12)}>{srcPlac > 0.5 ? 'source: placenta' : 'source: corpus luteum'}</text>
					<DrawPath d={SL_LOW2} at={c.whole} dur={50} color={SLATE} width={9} />
					<g opacity={prog(f, c.plac + 10, 14)}>
						<path d="M470,424 l8,-16 M478,424 l8,-16" stroke={INK} strokeWidth={4} />
					</g>
					<Bracket x1={430} x2={770} y={478} at={c.whole} color={INK_SOFT} down={false} />
					<text x={600} y={514} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK} opacity={prog(f, c.whole + 12, 12)}>the whole pregnancy</text>
				</g>
			</Overlay>
			{/* right: the ovary and the unchanged loop */}
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, c.src, 20)}}><OvaryRound x={OVX} y={OVY} d={OVW} /></div>
			<Overlay>
				<g opacity={prog(f, c.noegg, 14)}><EggMark x={fol[0]} y={fol[1]} r={14} /></g>
			</Overlay>
			<GreyTag at={c.noegg + 6} x={OVX - 60} y={OVY + ovh + 16} text="no new egg is released" size={34} />
			<Enter at={c.same} style={{position: 'absolute', left: 1130, top: 640}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 20}}>
					<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: INK, background: '#fffdf8', border: `4px solid ${AMBER}`, borderRadius: 999, padding: '4px 20px'}}>progesterone</span>
					<svg width={170} height={50} viewBox="0 0 170 50"><DrawPath d="M4,25 L148,25" at={c.same + 6} dur={20} color={AMBER} width={8} /><BarHead x={150} y={25} ang={0} at={c.same + 22} color={AMBER} width={8} len={22} /></svg>
					<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: INK, background: '#fffdf8', border: `4px solid ${SLATE}`, borderRadius: 999, padding: '4px 20px'}}>pituitary</span>
				</div>
			</Enter>
			<Hand at={c.same} x={1130} y={720} size={46} color={AMBER_INK}>the brake works the same way</Hand>
			<Hand at={c.less} x={1130} y={790} size={44} color={SLATE_INK}>less FSH and LH</Hand>
			<Pill at={c.so} x={1130} y={870} size={46}>brake on</Pill>
			<LoopCard at={0} fill1={0} suffixAt={c.so} />
			<div style={{display: 'none'}}>{[Arrow, Brain, Cross, LoopIcon, Label, along, pathOf, Vein, Chip, Say, HandText, TEAL, INK, AMBER_INK, AMBER, FONT_HAND, Dots, c.next, c.pit].length}</div>
		</>
	);
};
