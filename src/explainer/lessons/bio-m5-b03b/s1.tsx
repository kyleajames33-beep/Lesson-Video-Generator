import React from 'react';
import {useCurrentFrame} from 'remotion';
import {HandText} from '../../kit';
import {cues} from '../../cues';
import * as A from './assets';
import {
	AMBER, AMBER_INK, AnimalIcon, Arrow, CowTract, CT, TRACT_PAINTED, SvgPlate, ImgPlate, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, GAIN, Heading, INK, INK_SOFT, Label, Overlay, PArt, PL, pH, prog, S, Scribble, SlideIn, Straw, along, pathOf, Tick, Tag, Hand, Line, Pill, POLLEN, GREYC, Fade, Bracket, VAR,
} from './shared';

// ---------- 1. Hook: two farmers, one question ----------
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('hook'), {
		farmer: 'A dairy farmer', bull: 'the best bull', far: 'hours away', breeder: 'A wheat breeder', rust: 'Rust is a fungal disease', hy: 'high yield', rr: 'rust resistance', q: 'How could each of them', cost: 'worth the cost',
	});
	const t1 = 'How do farmers use reproduction, and ';
	const bullX = 295, cowX = 737, mapY = 690;
	const route = prog(f, c.far, 30);
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92, display: 'flex', alignItems: 'baseline', opacity: f >= c.q - 10 ? 1 : 0}}>
				<HandText text={t1} at={c.q - 10} size={64} cps={30} />
				<span style={{position: 'relative', display: 'inline-block'}}>
					<HandText text="what does it cost?" at={c.q - 10 + t1.length} size={64} cps={30} />
					<div style={{position: 'absolute', left: 0, bottom: -6, height: 7, borderRadius: 4, background: AMBER, width: `${prog(f, c.cost, 18) * 100}%`}} />
				</span>
			</div>
			{/* left: the dairy pair and the map chip */}
			<SlideIn at={c.farmer} dx={-60}><PArt a={PL.bullcow} x={60} y={290} w={880} /></SlideIn>
			<Overlay>
				<g opacity={prog(f, c.bull, 14)}><circle cx={bullX} cy={mapY} r={13} fill={AMBER} stroke={AMBER_INK} strokeWidth={4} /><circle cx={cowX} cy={mapY} r={13} fill={GAIN} stroke="#1f6040" strokeWidth={4} /></g>
				<path d={`M${bullX + 18},${mapY} L${cowX - 18},${mapY}`} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" strokeDasharray="14 12" style={{clipPath: `inset(0 ${100 - route * 100}% 0 0)`}} />
				<Label x={(bullX + cowX) / 2} y={mapY - 22} at={c.far} text="hours away" size={46} color={AMBER_INK} />
				<Label x={bullX} y={mapY + 62} at={c.bull} text="the best bull" size={40} color={INK_SOFT} />
				<Label x={cowX} y={mapY + 62} at={c.farmer + 20} text="her farm" size={40} color={INK_SOFT} />
			</Overlay>
			{/* right: the wheat problem */}
			<SlideIn at={c.breeder} dx={60}><PArt a={PL.rust} x={990} y={250} w={340} /></SlideIn>
			<Overlay><Scribble cx={1244} cy={400} rx={74} ry={150} at={c.rust + 20} color={AMBER_INK} seed={4} /></Overlay>
			<Enter at={c.rust + 40} style={{position: 'absolute', left: 1030, top: 640}}><div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: AMBER_INK}}>rust: a fungal disease</div></Enter>
			<SlideIn at={c.hy - 6} dx={90}><PArt a={PL.ear} x={1560} y={250} w={190} /></SlideIn>
			<Pill at={c.hy} x={990} y={730} color={GAIN} size={44}>high yield</Pill>
			<Pill at={c.rr} x={990} y={812} color={AMBER_INK} size={44}>rust resistant</Pill>
			<Overlay>
				<Arrow x1={1265} y1={756} x2={1580} y2={650} at={c.hy + 14} color={GAIN} dur={22} />
				<Arrow x1={1385} y1={838} x2={1620} y2={660} at={c.rr + 14} color={AMBER_INK} dur={22} />
			</Overlay>
			<Enter at={c.rr + 36} style={{position: 'absolute', left: 1720, top: 360}}><div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 170, color: AMBER_INK, lineHeight: 1}}>?</div></Enter>
		</>
	);
};

const VIAL_P = A.HAVE.has(A.VIAL[0]) && A.HAVE.has(A.FREEZER);
// ---------- 2a. Artificial insemination: what the farmer does ----------
export const SceneInsemination: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('insemination'), {
		ai: 'artificial insemination', means: 'which means', semen: ['semen', 2], collected: 'is collected', split: 'split into many small doses', frozen: 'usually frozen', straws: 'thin straws', any: 'any farm', thaws: 'thaws one dose', tube: 'thin tube', inside: "cow's uterus", uterus: 'uterus', tract: 'reproductive tract',
	});
	const T = {x: 1290, y: 190};
	const tm = (p: [number, number]): [number, number] => [T.x + p[0], T.y + p[1]];
	// vial
	const fill = prog(f, c.collected + 6, 30) * 0.8 * (1 - 0.55 * prog(f, c.split, 40));
	const route: [number, number][] = [[470, 400], [760, 330], [1040, 420], [1190, 560]];
	const travel = prog(f, c.any, 80);
	const [sx, sy] = along(route, travel);
	const atCow = f >= c.thaws - 20;
	const frostTravel = prog(f, c.frozen, 30) * (1 - prog(f, c.thaws, 30));
	const tubeP = prog(f, c.tube, 30);
	const dosePts: [number, number][] = CT.tube.map(tm);
	const door = prog(f, c.frozen, 20);
	return (
		<>
			<Heading items={[[c.ai - 30, 'Dairy cattle: artificial insemination']]} size={64} />
			<Hand at={c.means} x={96} y={176} size={46}>semen placed in the female's tract, no natural mating</Hand>
			<SlideIn at={4} dx={-50}><PArt a={PL.bull} x={60} y={540} w={540} /></SlideIn>
			<SlideIn at={c.ai} dx={50}><PArt a={PL.cow} x={1150} y={560} w={560} /></SlideIn>
			<Overlay>
				{/* vial: painted pair (empty and half full, aligned) crossfades as the semen is collected and then split into doses */}
				<g opacity={prog(f, c.collected - 10, 14)}>
					{VIAL_P ? (
						<>
							<ImgPlate a={PL.vialEmpty} x={190} y={296} w={80} />
							<ImgPlate a={PL.vialFull} x={190} y={296} w={80} o={Math.min(1, fill / 0.8)} />
						</>
					) : (
						<>
							<path d="M190,300 L190,450 C190,478 270,478 270,450 L270,300" fill="#fffdf8" fillOpacity={0.7} stroke={INK_SOFT} strokeWidth={5} strokeLinejoin="round" />
							<clipPath id="vialClip"><path d="M193,300 L193,450 C193,474 267,474 267,450 L267,300Z" /></clipPath>
							<rect x={190} y={470 - 170 * fill} width={80} height={180} fill="#f1ead6" stroke="none" clipPath="url(#vialClip)" />
							<line x1={180} y1={300} x2={280} y2={300} stroke={INK_SOFT} strokeWidth={6} strokeLinecap="round" />
						</>
					)}
				</g>
				<Arrow x1={290} y1={400} x2={338} y2={400} at={c.split} color={INK_SOFT} dur={14} />
				<g opacity={prog(f, c.collected, 12)}><text x={230} y={510} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK_SOFT}>semen</text></g>
				{/* rack of small doses */}
				{[0, 1, 2, 3, 4].map(i => <Straw key={i} x={420} y={316 + i * 36} w={140} frost={prog(f, c.frozen, 30)} o={prog(f, c.split + i * 10, 10)} />)}
				<g opacity={prog(f, c.split + 20, 14)}><text x={420} y={514} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK_SOFT}>many small doses</text></g>
				{/* freezer: the painted storage tank (lid open, straws racked inside); the coded snow mark shows the cold */}
				<g opacity={prog(f, c.frozen - 8, 14)}>
					{VIAL_P ? (
						<>
							<ImgPlate a={PL.freezer} x={560 + 14} y={282} w={136} />
							<path d="M722,330 L722,386 M694,358 L750,358 M702,338 L742,378 M742,338 L702,378" stroke="#7fb0d6" strokeWidth={5} strokeLinecap="round" opacity={door} />
						</>
					) : (
						<>
							<rect x={560} y={290} width={150} height={200} rx={16} fill="#e8f1f6" stroke={INK_SOFT} strokeWidth={5} />
							<g transform="translate(560,290)"><rect x={10} y={10} width={130} height={180} rx={10} fill="#cfe3ee" stroke={INK_SOFT} strokeWidth={3} transform={`translate(0,0) scale(${1 - 0.8 * door},1)`} />
								{[0, 1, 2].map(i => <rect key={i} x={18} y={34 + i * 50} width={114} height={8} rx={4} fill="#fff" opacity={door} />)}</g>
							<path d="M635,350 L635,430 M600,390 L670,390 M610,365 L660,415 M660,365 L610,415" stroke="#7fb0d6" strokeWidth={5} strokeLinecap="round" opacity={1 - door} />
						</>
					)}
					<text x={635} y={526} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill="#4a7fa8">frozen</text>
				</g>
				{/* route and travelling straw */}
				<DrawPath d={pathOf(route)} at={c.any - 10} dur={50} color={INK_SOFT} width={5} dash="2 14" />
				<g opacity={prog(f, c.any, 8)}><Straw x={sx} y={sy} w={110} rot={travel < 1 ? -8 + travel * 30 : 22} frost={frostTravel} /></g>
				<g opacity={prog(f, c.any, 14)}><text x={(route[1][0] + route[2][0]) / 2} y={route[1][1] - 30} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42}} fill={INK_SOFT}>sent to any farm</text></g>
				{/* thawed label */}
				<g opacity={prog(f, c.thaws + 6, 14)}><text x={1090} y={640} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={AMBER_INK}>thawed</text></g>
				{/* dashed zoom from the cow to the cut-away */}
				<path d="M1250,610 L1290,545" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="8 10" fill="none" opacity={prog(f, c.tract, 14)} />
				<path d="M1540,600 L1850,548" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="8 10" fill="none" opacity={prog(f, c.tract, 14)} />
			</Overlay>
			{/* cut-away of the cow's tract */}
			<Overlay>
				<CowTract x={T.x} y={T.y} at={c.tract - 10} labels={[{text: 'uterus', at: c.uterus - 6, x: TRACT_PAINTED ? 190 : 330, y: TRACT_PAINTED ? 92 : 150}, {text: 'female reproductive tract', at: c.tract, x: 40, y: 330}]} />
				{atCow ? <Straw x={T.x + 56} y={T.y + 86} w={90} rot={90} frost={0} o={prog(f, c.thaws + 10, 14)} /> : null}
				<DrawPath d={pathOf(dosePts)} at={c.tube} dur={30} color="#7d7a76" width={9} />
				{Array.from({length: 7}, (_, i) => {
					const t = (f - (c.inside - 14) - i * 5) / 40;
					if (t < 0) return null;
					const [px, py] = along(dosePts, Math.min(1, t));
					const done = t >= 1;
					const jx = done ? Math.cos(i * 2.4) * 28 : 0, jy = done ? Math.sin(i * 2.4) * 18 : 0;
					return <circle key={i} cx={px + jx} cy={py + jy} r={7} fill="#fffdf8" stroke={INK} strokeWidth={2.5} />;
				})}
				<Scribble cx={T.x + (TRACT_PAINTED ? CT.uterus[0] : 372)} cy={T.y + (TRACT_PAINTED ? CT.uterus[1] : 200)} rx={TRACT_PAINTED ? 130 : 120} ry={TRACT_PAINTED ? 88 : 74} at={c.inside} color={AMBER_INK} seed={6} />
			</Overlay>
		</>
	);
};

// ---------- 2b. The reproduction knowledge it uses ----------
export const SceneHeat: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('heat-timing'), {
		works: 'This works only', ready: 'an egg ready for only a short time', ovu: 'around ovulation', release: 'the release of an egg', heat: 'on heat', day: 'about a day after it starts', must: 'so the dose must go in', before: 'before the egg is released',
	});
	const P = {x: 96, y: 210, s: 1.3};
	const pm = (p: [number, number]): [number, number] => [P.x + p[0] * P.s, P.y + p[1] * P.s];
	// timeline strip
	const X0 = 790, X1 = 1810, Y = 780;
	const heatX = [1260, 1330], eggX = [1420, 1470];
	const clock = 1 - prog(f, c.day, 40);
	const clockX = heatX[0] + 36 + (eggX[0] + 24 - heatX[0] - 36) * (1 - clock) + (f < c.day ? Math.sin(f / 6) * 3 : 0);
	const strawP = prog(f, c.must, 40);
	const strawX = 1700 + (heatX[0] + 58 - 1700) * strawP;
	const egg = prog(f, c.day, 40);
	const ovA = pm(CT.ovaryA), fun = pm(CT.funnelA);
	return (
		<>
			<Heading items={[[c.works, 'Why the timing matters']]} size={64} />
			<Overlay>
				<CowTract x={P.x} y={P.y} s={P.s} at={4} labels={[{text: 'ovary', at: c.ovu, x: TRACT_PAINTED ? CT.ovaryA[0] - 62 : CT.ovaryA[0] + 44, y: TRACT_PAINTED ? CT.ovaryA[1] + 62 : CT.ovaryA[1] + 50}]} />
				{/* the egg leaves the ovary into the funnel of the oviduct */}
				<circle cx={ovA[0] + (fun[0] - ovA[0]) * egg - 4 * egg} cy={ovA[1] + (fun[1] - ovA[1]) * egg} r={13} fill="#f08f86" stroke="#c4432f" strokeWidth={4} opacity={prog(f, c.ovu, 12)} />
				<Scribble cx={ovA[0]} cy={ovA[1]} rx={52} ry={42} at={c.release} color={AMBER_INK} seed={5} />
				{/* the cycle strip */}
				<g opacity={prog(f, c.ready - 10, 14)}>
					<DrawPath d={`M${X0},${Y} L${X1},${Y}`} at={c.ready - 10} dur={40} color={INK} width={6} />
					<text x={X0} y={Y + 58} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={INK_SOFT}>one cycle of the cow</text>
					{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => <line key={i} x1={X0 + i * 92} x2={X0 + i * 92} y1={Y - 10} y2={Y + 10} stroke={INK_SOFT} strokeWidth={4} />)}
				</g>
				<g opacity={prog(f, c.ready + 8, 14)}>
					<rect x={eggX[0]} y={Y - 18} width={eggX[1] - eggX[0]} height={36} rx={18} fill="#bfe3cb" stroke={GAIN} strokeWidth={5} />
					<text x={eggX[0] + 20} y={Y + 150} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={GAIN}>egg ready: a short window</text>
				</g>
				<g opacity={prog(f, c.heat, 14)}>
					<rect x={heatX[0]} y={Y - 18} width={heatX[1] - heatX[0]} height={36} rx={18} fill="#f6d28a" stroke={AMBER_INK} strokeWidth={5} />
					<text x={heatX[0] + 50} y={Y - 50} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={AMBER_INK}>on heat: ready to mate</text>
				</g>
				<g opacity={prog(f, c.day - 10, 14)}>
					<path d={`M${heatX[0]},${Y + 36} L${heatX[0]},${Y + 50} L${eggX[0] + 20},${Y + 50} L${eggX[0] + 20},${Y + 36}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinejoin="round" />
					<text x={(heatX[0] + eggX[0]) / 2} y={Y + 92} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={INK_SOFT}>about a day</text>
				</g>
				{/* clock ring marker */}
				<g opacity={prog(f, c.heat + 10, 12)} transform={`translate(${clockX},${Y - 54 + 54})`}>
					<circle r={26} fill="#fffdf8" stroke={INK} strokeWidth={5} />
					<line x1={0} y1={0} x2={Math.sin((f / 30) * 6) * 15} y2={-Math.cos((f / 30) * 6) * 15} stroke={INK} strokeWidth={5} strokeLinecap="round" />
				</g>
				{/* the straw goes to the heat bar */}
				<g opacity={prog(f, c.must, 10)}><Straw x={strawX} y={Y - 160 + 120 * strawP} w={96} rot={-30} /></g>
				<Tick x={heatX[0] + 36} y={Y - 118} at={c.before} s={1.6} />
			</Overlay>
			<Tag at={c.ovu} x={930} y={200} text="ovulation: the release of an egg" size={48} color={INK_SOFT} />
			<Tag at={c.must + 20} x={930} y={300} text="the dose goes in during heat, before the egg is released" size={50} w={820} />
		</>
	);
};
