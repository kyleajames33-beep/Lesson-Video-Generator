import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Callout} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Bracket, Card, DayCounter, DrawPath, Dots, Enter, Fade, FONT_DISPLAY, FONT_HAND, GraphAxes, Hand, Heading, INK, INK_SOFT, Label, LOBES, OvulationMarker, Overlay, PArt, PL, PSeq,
	prog, vis, Rail, Say, S, Scribble, Squiggle, TEAL, TEAL_INK, TractInset, TractPair, TR, TR3, tt, Underlined, Vessel, YELLOW, Zoom, G, G_RISE, along, PAPER_DEEP, VESSEL,
} from './shared';

const CP = {x: 700, y: 222, w: 640};
const CC: [number, number] = [CP.x + CP.w / 2, CP.y + (CP.w * 1370) / 1374 / 2];
const INSET = {x: 96, y: 290, w: 480};
const vessel = (c: [number, number][]) => c;

const DashRing: React.FC<{pulse?: number; color?: string}> = ({pulse = 0, color = INK_SOFT}) => (
	<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0}}>
		<circle cx={CC[0]} cy={CC[1]} r={CP.w / 2 + 10 + 8 * Math.sin(Math.PI * pulse)} fill="none" stroke={pulse > 0 && pulse < 1 ? AMBER : color} strokeWidth={5} strokeDasharray="14 12" opacity={0.9} />
	</svg>
);

// ---------- 3a. Cleavage ----------
export const SceneCleavage: React.FC = () => {
	const f = useCurrentFrame();
	const sc = S('cleavage');
	const c = cues(sc, {
		divides: 'it divides', copies: 'copies its DNA', splits: 'then splits', keeps: 'every new cell', whole: "the whole ball doesn't grow", again: 'splits again', smaller: 'cells just get smaller', cleav: 'called cleavage', early: 'early splitting',
	});
	const t = 0.62 * Math.min(1, f / 740);
	const sq = prog(f, c.copies, 20);
	const cut = prog(f, c.splits, 16);
	const sep = prog(f, c.splits + 8, 24);
	const px = 1610, py = 380;
	const pulse = (f - c.whole) / 24;
	return (
		<>
			<Heading items={[[0, 'The zygote divides as it travels'], [c.cleav, 'Cleavage']]} size={72} />
			<Hand at={c.early} x={96} y={184} size={52}>early splitting</Hand>
			<TractInset p={INSET} t={t} />
			<Say at={20} x={96} y={576} w={480} size={30} color={INK_SOFT}>the ball moves along the oviduct towards the uterus</Say>
			<DayCounter x={96} y={690} days={[[0, 1], [c.divides, 2], [c.again, 3]]} />
			<PSeq arts={[PL.cl1, PL.cl2, PL.cl3, PL.cl4]} x={CP.x} y={CP.y} w={CP.w} at={[c.divides, c.splits + 6, c.again]} dur={24} />
			<DashRing pulse={pulse} />
			<Overlay>
				<Bracket x1={CP.x} x2={CP.x + CP.w} y={206} at={c.whole} down={false} color={AMBER_INK} />
				<Label x={CP.x + CP.w / 2} y={192} at={c.whole + 12} text="same size" size={46} color={AMBER_INK} />
				{/* one split, drawn as a small demo cell */}
				<g opacity={prog(f, c.copies - 14, 14)}>
					<circle cx={px} cy={py} r={96 * (1 - sep * 0.3)} fill="#f6d9c8" stroke="#d9a08a" strokeWidth={5} opacity={1 - sep} />
					<circle cx={px - 70 * sep} cy={py} r={64} fill="#f6d9c8" stroke="#d9a08a" strokeWidth={5} opacity={sep} />
					<circle cx={px + 70 * sep} cy={py} r={64} fill="#f6d9c8" stroke="#d9a08a" strokeWidth={5} opacity={sep} />
					<g opacity={1 - sep}>
						<Squiggle x={px - 46} y={py - 8} w={92} />
						<Squiggle x={px - 46} y={py + 18} w={92} o={sq} />
					</g>
					<g opacity={sep}>
						<Squiggle x={px - 70 * sep - 34} y={py} w={68} />
						<Squiggle x={px + 70 * sep - 34} y={py} w={68} />
					</g>
					<line x1={px} x2={px} y1={py - 100 * cut} y2={py + 100 * cut} stroke="#c4432f" strokeWidth={7} strokeLinecap="round" opacity={1 - sep} />
				</g>
				<Label x={px} y={py - 130} at={c.copies} text="copy the DNA" size={46} color={AMBER_INK} out={c.splits - 4} />
				<Label x={px} y={py - 130} at={c.splits} text="then split" size={46} color="#c4432f" />
				<Underlined x1={px - 120} x2={px + 120} y={py + 160} at={c.smaller} color={AMBER} />
			</Overlay>
			<Say at={c.keeps} x={1390} y={532} w={430} size={32}>Each new cell keeps the full two sets.</Say>
			<Hand at={c.again} x={1390} y={660} w={440} size={50}>splits again before it grows</Hand>
			<Hand at={c.smaller} x={1390} y={800} w={440} size={54} color={INK}>smaller cells</Hand>
			<Rail upTo={2} newAt={c.divides} />
		</>
	);
};

// ---------- 3b. The blastocyst ----------
export const SceneBlastocyst: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('blastocyst'), {
		five: 'about five days', hollow: 'hollow ball', bl: 'a blastocyst', outer: 'Its outer cells', place: 'the placenta', clump: 'a small clump', embryo: 'the embryo',
	});
	const t = 0.62 + 0.38 * prog(f, 0, 36);
	const k = CP.w / 1374;
	const clump: [number, number] = [CP.x + (0.355 * 1374) * k, CC[1] - (CP.w * 1370) / 1374 / 2 + 0.33 * 1370 * k];
	const outerOn = vis(f, c.outer, c.clump - 6);
	return (
		<>
			<Heading items={[[0, 'About five days after fertilisation']]} size={72} />
			<TractInset p={INSET} t={t} />
			<Say at={c.five + 10} x={96} y={576} w={480} size={30} color={INK_SOFT}>free in the uterus, not attached</Say>
			<DayCounter x={96} y={690} days={[[0, 4], [c.five, 5]]} />
			<PSeq arts={[PL.cl4, PL.cl5]} x={CP.x} y={CP.y} w={CP.w} at={[c.hollow]} dur={26} />
			<DashRing />
			<Hand at={c.bl} x={1390} y={236} size={72} color={INK}>blastocyst</Hand>
			<Overlay>
				{/* teal ring round the outer cells, amber ring round the inner clump */}
				<g opacity={outerOn}>
					<circle cx={CC[0]} cy={CC[1]} r={CP.w * 0.405} fill="none" stroke={TEAL} strokeWidth={20} opacity={0.6} strokeLinecap="round" />
				</g>
				<Scribble cx={clump[0]} cy={clump[1]} rx={60} ry={52} at={c.clump} color={AMBER} seed={4} width={9} />
				<g opacity={outerOn}><DrawPath d={`M${CC[0] + CP.w * 0.37 * 0.9},${CC[1] - 120} L1380,470`} at={c.outer + 8} dur={20} color={TEAL} width={5} /></g>
				<DrawPath d={`M${clump[0] + 56},${clump[1] + 6} L1380,570`} at={c.clump + 8} dur={20} color={AMBER} width={5} />
			</Overlay>
			<Card x={1390} y={380} w={440} at={c.outer + 8} out={c.clump - 6} tint="#f0faf8" pad="14px 22px">
				<div style={{fontFamily: FONT_DISPLAY, fontSize: 32, fontWeight: 700, color: TEAL_INK, lineHeight: 1.2}}>outer cells<div style={{fontWeight: 500, color: INK}}>help build the placenta, the organ that links it to its mother</div></div>
			</Card>
			<Card x={1390} y={520} w={440} at={c.clump + 8} tint="#fff8ea" pad="14px 22px">
				<div style={{fontFamily: FONT_DISPLAY, fontSize: 32, fontWeight: 700, color: AMBER_INK, lineHeight: 1.2}}>inner clump<div style={{fontWeight: 500, color: INK}}>becomes the embryo, the earliest form of the baby</div></div>
			</Card>
			<Rail upTo={2} />
			<div style={{display: 'none'}}>{[Dots, Enter, Fade, PArt, TractPair, TR, tt, vessel, along, PAPER_DEEP, YELLOW, FONT_HAND, INK].length}</div>
		</>
	);
};

// ---------- 4a. The lining ----------
const LINING_WASH = '#ffd36a';
export const SceneLining: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('lining'), {
		next: 'Next, the blastocyst', wall: 'wall of the uterus', lining: 'a lining', vessels: 'blood vessels', thick: 'stays thick', weeks: 'about two weeks', welcome: 'welcomes a blastocyst', few: 'only a few', q: 'So what keeps it thick',
	});
	const m = tt(TR3);
	const wipe = prog(f, c.lining, 40);
	const bar = prog(f, c.thick, 60);
	const win = prog(f, c.few, 14);
	const ux = TR3.x + 500 * TR3.w / 1000, uy = TR3.y + 235 * TR3.w / 1000;
	const BX = 96, BY = 340, BW = 540;
	return (
		<>
			<Heading items={[[0, 'The blastocyst needs somewhere to go']]} size={72} />
			<Zoom ox={ux} oy={uy} keys={[[0, 1], [c.wall, 1], [c.wall + 50, 1.1]]}>
				<div style={{position: 'absolute', inset: 0, opacity: prog(f, 0, 22)}}><TractPair p={TR3} /></div>
				<Overlay>
					<defs>
						{LOBES.map((_, i) => <clipPath key={i} id={`wl${i}`}><rect x={TR3.x} y={TR3.y} width={TR3.w * wipe} height={600} /></clipPath>)}
					</defs>
					{LOBES.map((d, i) => (
						<g key={i} clipPath={`url(#wl${i})`}>
							<g transform={`translate(${TR3.x},${TR3.y}) scale(${TR3.w / 1000})`}>
								<path d={d} fill={LINING_WASH} opacity={0.5} />
								<path d={d} fill="none" stroke={AMBER} strokeWidth={5} opacity={0.9} />
							</g>
						</g>
					))}
					<Callout from={m(578, 250)} to={m(700, 400)} at={c.lining + 10} text="lining" sub="rich in blood vessels" color={AMBER_INK} size={54} />
				</Overlay>
			</Zoom>
			{/* a two week calendar strip */}
			<Overlay>
				<Label x={BX} y={BY - 22} at={c.thick} text="the lining stays thick for about two weeks" size={38} color={INK} anchor="start" />
				<g opacity={prog(f, c.thick, 12)}>
					<rect x={BX} y={BY} width={BW} height={42} rx={10} fill="#fffdf8" stroke={INK} strokeWidth={4} />
					{Array.from({length: 13}, (_, i) => <line key={i} x1={BX + ((i + 1) * BW) / 14} x2={BX + ((i + 1) * BW) / 14} y1={BY} y2={BY + 42} stroke={INK_SOFT} strokeWidth={2} />)}
					<rect x={BX + 3} y={BY + 3} width={(BW - 6) * bar} height={36} rx={8} fill={LINING_WASH} />
				</g>
				<g opacity={win}>
					<rect x={BX + (BW * 7) / 14} y={BY - 6} width={(BW * 3) / 14} height={54} rx={10} fill="none" stroke={AMBER} strokeWidth={8} />
				</g>
				<Label x={BX + (BW * 8.5) / 14} y={BY + 100} at={c.few} text="welcomes a blastocyst for only a few days" size={36} color={AMBER_INK} anchor="middle" />
			</Overlay>
			<Hand at={c.q} x={96} y={600} w={560} size={96}>What keeps it thick?</Hand>
			<Rail upTo={2} />
			<div style={{display: 'none'}}>{[Dots, Enter, Fade, FONT_HAND, GraphAxes, G, G_RISE, OvulationMarker, PArt, PSeq, Rail, TEAL, TR, Underlined, Vessel, YELLOW, along, VESSEL, DayCounter, Say, Card, INK].length}</div>
		</>
	);
};

// ---------- 4b. Progesterone from the corpus luteum ----------
const ORG = {x: 270, y: 300};
export const SceneProgesterone: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('progesterone'), {
		hormone: 'A hormone is a chemical messenger', one: 'one organ makes it', blood: 'the blood carries it', changes: 'it changes what another organ does', egg: 'When the egg was released', sac: 'the small sac', stayed: 'stayed behind', became: 'became the corpus luteum', cl: 'corpus luteum', yb: 'yellow body', rel: 'releases the hormone progesterone', keeps: 'keeps the lining thick',
	});
	const m = tt(TR3);
	const foll = m(TR.follicle[0], TR.follicle[1]);
	const chainOut = vis(f, 0, c.egg - 4);
	const plateIn = prog(f, c.egg - 6, 24);
	const wash = prog(f, c.stayed, 24);
	const pulse = prog(f, c.sac, 20);
	const vpts: [number, number][] = ([[170, 252], [232, 336], [340, 362], [410, 300], [448, 232]] as [number, number][]).map(p => m(p[0], p[1]));
	const GS = 0.86;
	const rise = prog(f, c.rel, 60);
	const glow = prog(f, c.keeps, 20);
	const ycx = foll[0], ycy = foll[1];
	return (
		<>
			<Heading items={[[0, 'What keeps the lining thick?'], [c.hormone, 'A hormone is a chemical messenger'], [c.cl, 'The corpus luteum makes progesterone']]} size={68} />
			{/* hormone chain: organ, blood, organ */}
			<div style={{position: 'absolute', inset: 0, opacity: chainOut}}>
				{/* the question first: the lining, with a question mark, until the definition starts */}
				<div style={{position: 'absolute', inset: 0, opacity: vis(f, 2, c.hormone + 8)}}>
					<TractPair p={TR3} />
					<Overlay><text x={m(500, 235)[0]} y={m(500, 235)[1] + 40} textAnchor="middle" fill={AMBER_INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 150}}>?</text></Overlay>
				</div>
				{/* empty slots for the definition: organ, blood, organ */}
				<Overlay>
					<g opacity={vis(f, c.hormone + 10, c.changes + 20)}>
						<rect x={250} y={290} width={320} height={160} rx={26} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeDasharray="14 12" />
						<rect x={1430} y={275} width={190} height={215} rx={26} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeDasharray="14 12" />
						<path d="M810,375 C880,335 920,415 990,375 S1060,360 1092,375" fill="none" stroke="#e9a49c" strokeWidth={26} strokeLinecap="round" strokeDasharray="2 22" />
						<text x={410} y={385} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}}>organ</text>
						<text x={1525} y={392} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}}>organ</text>
					</g>
				</Overlay>
				<Enter at={c.one} style={{position: 'absolute', left: 250, top: 290}}>
					<div style={{width: 320, height: 160, borderRadius: 26, overflow: 'hidden', position: 'relative', border: `5px solid ${INK_SOFT}`}}><PArt a={PL.ovary} x={0} y={0} w={320} /></div>
				</Enter>
				<Enter at={c.blood} style={{position: 'absolute', left: 810, top: 330}}>
					<svg width={300} height={90} viewBox="0 0 300 90"><path d="M10,45 C80,5 120,85 190,45 S260,30 292,45" fill="none" stroke="#e9a49c" strokeWidth={34} strokeLinecap="round" /><path d="M10,45 C80,5 120,85 190,45 S260,30 292,45" fill="none" stroke={VESSEL} strokeWidth={5} opacity={0.5} /></svg>
				</Enter>
				<Enter at={c.changes - 14} style={{position: 'absolute', left: 1430, top: 275}}>
					<div style={{width: 190, height: 215, borderRadius: 26, overflow: 'hidden', position: 'relative', border: `5px solid ${INK_SOFT}`}}><PArt a={PL.uterus} x={0} y={0} w={190} /></div>
				</Enter>
				<Overlay>
					<DrawPath d="M590,370 L790,370 M770,352 L790,370 L770,388" at={c.blood - 10} dur={16} color={INK_SOFT} width={7} />
					<DrawPath d="M1130,370 L1410,370 M1390,352 L1410,370 L1390,388" at={c.changes - 22} dur={16} color={INK_SOFT} width={7} />
					<Dots pts={[[830, 372], [900, 350], [980, 392], [1060, 372], [1100, 372]]} at={c.blood + 6} n={5} period={50} color={AMBER} r={9} />
				</Overlay>
				<Say at={c.one} x={210} y={500} w={400} size={36} weight={700}>one organ makes it</Say>
				<Say at={c.blood} x={800} y={500} w={320} size={36} weight={700}>the blood carries it</Say>
				<Say at={c.changes - 10} x={1330} y={540} w={420} size={36} weight={700}>and it changes what another organ does</Say>
			</div>
			{/* the tract returns, with the graph panel building on the left */}
			<Zoom ox={foll[0]} oy={foll[1]} keys={[[0, 1], [c.sac - 10, 1], [c.sac + 30, 1.18], [c.rel + 30, 1.0]]}>
				<div style={{position: 'absolute', inset: 0, opacity: plateIn}}><TractPair p={TR3} /></div>
				<Overlay>
					<g opacity={plateIn}>
						{pulse > 0 ? <circle cx={foll[0]} cy={foll[1]} r={46 + 14 * Math.sin(Math.PI * Math.min(1, pulse * 2))} fill="none" stroke={AMBER} strokeWidth={7} opacity={1 - wash * 0.6} /> : null}
						<circle cx={ycx} cy={ycy} r={46} fill="#f2c81f" opacity={wash * 0.62} />
						<circle cx={ycx} cy={ycy} r={47} fill="none" stroke={YELLOW} strokeWidth={8} opacity={wash} />
					</g>
					<Callout from={[foll[0] - 14, foll[1] + 46]} to={[900, 720]} at={c.cl} text="corpus luteum" color="#a9760a" size={54} sub="yellow body" />
					<Vessel pts={vpts} at={c.rel - 4} dur={40} width={13} />
					<Dots pts={vpts} at={c.rel + 4} n={7} period={72} color={AMBER} r={10} />
					{LOBES.map((d, i) => (
						<g key={i} transform={`translate(${TR3.x},${TR3.y}) scale(${TR3.w / 1000})`} opacity={glow * (0.35 + 0.15 * Math.sin(f / 7))}>
							<path d={d} fill="#ffc94d" />
						</g>
					))}
				</Overlay>
			</Zoom>
			<Overlay>
				<g transform={`translate(96,330) scale(${GS})`} opacity={prog(f, c.rel - 20, 16)}>
					<GraphAxes at={c.rel - 20} xlabel="time after ovulation" />
					<OvulationMarker at={c.rel} />
					<path d={G_RISE} fill="none" stroke={AMBER} strokeWidth={9} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - rise} />
					{rise > 0.98 ? <circle cx={420} cy={118} r={0} /> : null}
					<text x={G.x1} y={60} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={AMBER_INK} opacity={prog(f, c.rel + 40, 14)}>progesterone from the corpus luteum</text>
				</g>
			</Overlay>
			<Rail upTo={2} />
			<div style={{display: 'none'}}>{[Bracket, Card, Enter, Fade, FONT_DISPLAY, Hand, INK, Label, PSeq, TEAL, TEAL_INK, Underlined, YELLOW, along, DayCounter, TractInset, Scribble, AMBER, PAPER_DEEP].length}</div>
		</>
	);
};
