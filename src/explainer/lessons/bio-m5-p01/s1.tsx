// P01 (Biology practical) scenes 1 to 3b: the hook (a finished card ladder against the real helix), the aim and kit
// (plates landing, colour key built one row per cue), cutting nucleotide cards whose tabs only fit their partner
// (pencil phosphate and sugar, A-T and C-G seating, a C that will not seat on T, notches as hydrogen bonds), and making
// the second model's pieces (yellow U cards, orange tRNA cards with lettered tabs and beads, the card ribosome window).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, BENCH, Bench, CC, CH, CODONS, CZ, Chip, ColourKey, CodonMini, Cross, DrawPath, EDGE, Fade, GREYT, GreyTag, HB, Heading, INK, INK_SOFT, KEY,
	MiniLadder, NCard, NEWC, ORIG, Overlay, PITCH, PLP, Panel, PaperRibo, PlateB, PopBead, QMark, QUESTION, Rail, Ring, S, SpanBracket, Snap, Sx, TEAL, TH,
	TW, TEMPLATE, CODING, ANTIS, Tick, TrnaCard, beadPitch, clamp01, lerp, prog, pulse, riboWindow, tabPath, trnaPt,
} from './shared';

export const LX0 = 200;
const keyX = (i: number) => {
	let x = 110;
	for (let k = 0; k < i; k++) x += 44 + KEY[k].t.length * 13.6 + 70;
	return x + 44;
};

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {strip: 'This strip of paper cards', twelve: 'twelve base pairs', cant: "can't do anything", why: 'So why build it', rules: 'follow the same rules', copying: 'DNA copying', poly: 'making a polypeptide', judge: 'judge what each one', right: 'gets right', wrong: 'gets wrong'});
export const SceneHookP01: React.FC = () => {
	const f = useCurrentFrame();
	const slide = prog(f, 10, 34);
	const lift = f < K1.rules ? 0 : f < K1.rules + 14 ? -64 * prog(f, K1.rules, 14) : -64 * (1 - prog(f, K1.rules + 14, 7));
	const yT = 400, yJ = yT + CH, yB = yJ + CH;
	return (
		<>
			<Heading text={QUESTION} at={K1.judge} size={54} />
			<Overlay>
				<Bench p={prog(f, 0, 22)} />
				<g transform={`translate(${(1 - slide) * 900},0)`} opacity={slide}>
					<NCardsLadder yT={yT} topCard={i => (i === 0 ? {dy: lift, glow: pulse(f, K1.rules, 30)} : {})} hb={i => (i === 0 ? (lift < -4 ? 0 : 1) : 1)} />
				</g>
				<Snap x={LX0} y={yJ} at={K1.rules + 21} />
				<SpanBracket x1={LX0 - 35} x2={LX0 + 11 * PITCH + 35} y={yB + 26} at={K1.twelve} label="12 base pairs" size={34} />
				{/* the real thing */}
				<PlateB p={PLP.helix} cx={1640} cy={500} w={190} o={prog(f, K1.cant, 16)} />
				<Sx x={1640} y={735} text="real DNA" size={32} color={INK_SOFT} hand anchor="middle" at={K1.cant + 10} />
				<QMark x={1360} y={530} size={110} color={GREYT} o={prog(f, K1.cant + 8, 12)} />
				<Sx x={1360} y={585} text="does nothing a cell does" size={24} color={INK_SOFT} weight={600} anchor="middle" at={K1.cant + 16} />
				<Sx x={LX0 - 30} y={yT - 26} text="moving each piece = following the cell's rules" size={32} color={AMBER_INK} hand at={K1.rules + 8} />
				{/* two models */}
				<Fade at={K1.copying}>
					<Panel x={130} y={735} w={480} h={160} stroke={EDGE} />
					<MiniLadder x={160} y={765} w={190} h={34} top={ORIG} bot={NEWC} />
					<MiniLadder x={380} y={765} w={190} h={34} top={NEWC} bot={ORIG} />
					<Sx x={160} y={860} text="model 1: DNA copying" size={34} color={INK} hand />
				</Fade>
				<Fade at={K1.poly}>
					<Panel x={650} y={735} w={540} h={160} stroke={EDGE} />
					<g>{['red', 'gold', 'green'].map((c, i) => <PopBead key={c} x={690 + i * beadPitch(20)} y={785} r={20} c={c} />)}</g>
					<Sx x={680} y={860} text="model 2: making a polypeptide" size={34} color={INK} hand />
				</Fade>
				<Chip x={CZ.x + 20} y={800} text="what each one gets right" at={K1.right - 6} size={32} color={TEAL} stroke={TEAL} />
				<Chip x={CZ.x + 20} y={880} text="what it gets wrong" at={K1.wrong - 6} size={32} color={AMBER_INK} stroke={AMBER} />
			</Overlay>
		</>
	);
};

/** The twelve-pair blue ladder used in the hook. */
const NCardsLadder: React.FC<{yT: number; topCard?: (i: number) => {dy?: number; glow?: number}; hb?: (i: number) => number}> = ({yT, topCard, hb}) => (
	<g>
		{CODING.split('').map((l, i) => <NCard key={'t' + i} x={LX0 + i * PITCH} y={yT} face="down" l={l} c="blue" {...(topCard ? topCard(i) : {})} />)}
		{TEMPLATE.split('').map((l, i) => <NCard key={'b' + i} x={LX0 + i * PITCH} y={yT + 2 * CH} face="up" l={l} c="blue" />)}
		{CODING.split('').map((l, i) => <HB key={'h' + i} x={LX0 + i * PITCH} y={yT + CH} l={l} p={hb ? hb(i) : 1} />)}
	</g>
);

// ---------- 2. Aim and kit ----------
const K2 = cues(S('aim-kit'), {
	aim: "Here's the aim", build: 'build models of DNA replication', assess: 'assess how well', four: 'card in four colours', scissors: 'scissors', tape: 'sticky tape', pencil: 'a pencil',
	beads: 'pop-beads', cups: 'three small paper cups', blue: 'Blue card is original', green: 'green is new DNA', yellow: 'yellow is RNA', orange: 'orange cards are transfer',
	amino: 'The beads are amino acids', keep: 'Keep the colours the same', track: 'track old and new strands', hazard: 'The only hazard', desk: 'cut on the desk',
});
export const SceneAimP01: React.FC = () => {
	const f = useCurrentFrame();
	const colAt = [K2.blue, K2.green, K2.yellow, K2.orange, K2.amino];
	const kit = [
		{p: PLP.sheets, cx: 230, cy: 410, w: 270, t: 'card in four colours', at: K2.four},
		{p: PLP.scissors, cx: 500, cy: 410, w: 180, t: 'scissors', at: K2.scissors},
		{p: PLP.tape, cx: 750, cy: 410, w: 210, t: 'sticky tape', at: K2.tape},
		{p: PLP.pencil, cx: 1010, cy: 410, w: 210, t: 'pencil', at: K2.pencil},
	];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Bench />
				<Fade at={K2.aim}>
					<Panel x={CZ.x} y={CZ.y} w={CZ.w} h={290} stroke={AMBER} />
					<Sx x={CZ.x + 26} y={CZ.y + 56} text="Aim" size={44} color={INK} hand />
				</Fade>
				{['build models of DNA replication', 'and polypeptide synthesis,', 'and assess how well they', 'represent the real processes.'].map((t, i) => (
					<Sx key={i} x={CZ.x + 26} y={CZ.y + 110 + i * 42} text={t} size={30} color={INK} weight={600} at={(i < 2 ? K2.build : K2.assess) + (i % 2) * 14} />
				))}
				{kit.map((k, i) => {
					const p = prog(f, k.at, 16);
					return (
						<g key={i}>
							<g transform={`translate(0,${(1 - p) * -40})`}><PlateB p={k.p} cx={k.cx} cy={k.cy} w={k.w} o={p} /></g>
							<Sx x={k.cx} y={570} text={k.t} size={28} color={INK} weight={700} anchor="middle" at={k.at + 8} />
						</g>
					);
				})}
				<GreyTag x={500} y={590} text="cut on the desk" at={K2.scissors + 10} size={22} anchor="middle" />
				<Ring cx={500} cy={410} rx={120} ry={130} at={K2.hazard} color={AMBER} />
				<Sx x={500} y={660} text="the only hazard" size={30} color={AMBER_INK} hand anchor="middle" at={K2.desk} />
				{/* beads and cups */}
				{['red', 'gold', 'green'].map((c, i) => <PopBead key={c} x={730 + i * 60} y={720} r={24} c={c} o={prog(f, K2.beads + i * 4, 12)} />)}
				<Sx x={790} y={790} text="pop-beads" size={28} color={INK} weight={700} anchor="middle" at={K2.beads + 8} />
				<Chip x={930} y={692} text="3 small paper cups" at={K2.cups} size={28} color={INK} hand={false} weight={600} />
				{/* colour cards rise from the sheets and fly to the key */}
				{colAt.map((at, i) => {
					const t = prog(f, at, 26);
					const go = prog(f, at + 18, 22);
					if (t <= 0.01 || go >= 0.99) return null;
					const x = lerp(230 + (i - 2) * 30, keyX(i) + 17, go);
					const y = lerp(lerp(470, 300, t), 980, go);
					const s = lerp(1.1, 0.4, go);
					return i < 4 ? (
						<g key={i} transform={`translate(${x},${y}) scale(${s})`}>
							<NCard x={0} y={-46} face="down" l="" c={(['blue', 'green', 'yellow', 'orange'] as const)[i]} marks={false} />
						</g>
					) : <PopBead key={i} x={x} y={y} r={24 * s + 6} c="red" />;
				})}
				<ColourKey at={colAt.map(a => a + 36)} glow={pulse(f, K2.keep, 40)} hot={[pulse(f, K2.track, 40), pulse(f, K2.track, 40)]} />
				<Sx x={CZ.x + 26} y={650} text="Keep one key all the way through:" size={34} color={INK} hand at={K2.keep} />
				<Sx x={CZ.x + 26} y={700} text="it tracks old and new strands" size={34} color={INK} hand at={K2.track} />
				<g opacity={prog(f, K2.track, 12)}>
					<NCard x={CZ.x + 90} y={740} face="down" l="" c="blue" marks={false} />
					<NCard x={CZ.x + 90} y={740 + 2 * CH} face="up" l="" c="green" marks={false} />
					<Sx x={CZ.x + 150} y={790} text="old" size={30} color={ORIG} weight={800} />
					<Sx x={CZ.x + 150} y={880} text="new" size={30} color={NEWC} weight={800} />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 3. Step 1: cut nucleotides that only fit one partner ----------
const K3 = cues(S('cut-nucleotides'), {
	step: 'Step one', each: 'Each card is one nucleotide', phos: 'phosphate', sugar: 'a sugar on the strip', tab: 'the tab is the base', at: 'A only fits T', cg: 'C only fits G',
	heart: 'heart of the model', real: 'in real DNA only those partners', two: 'two notches', three: 'C and G tabs three', one: 'one notch per hydrogen bond',
});
const PAIR_J = 486, PK = 1.4;
/** A pair seen at scale PK around its join point: top card face down, bottom card face up. */
const Pair: React.FC<{x: number; top: string; bot: string; topDy: number; botO?: number; topO?: number; ring?: number; hb?: number; topC?: 'blue'; glow?: number}> = ({x, top, bot, topDy, botO = 1, topO = 1, ring = 0, hb = 0, glow = 0}) => (
	<g transform={`translate(${x},${PAIR_J}) scale(${PK})`}>
		<NCard x={0} y={0} face="up" l={bot} c="blue" o={botO} ring={ring} glow={glow} dy={CH} />
		<NCard x={0} y={-CH} face="down" l={top} c="blue" o={topO} dy={topDy} ring={ring} glow={glow} />
		<HB x={0} y={0} l={top} p={hb} />
	</g>
);
export const SceneCutP01: React.FC = () => {
	const f = useCurrentFrame();
	const seat = (at: number) => -80 * (1 - prog(f, at, 16));
	const failT = K3.at + 40;
	const failDy = f < failT ? -90 : -90 + 72 * prog(f, failT, 14) - 10 * pulse(f, failT + 14, 14);
	const big = {x: 560, y: 290, k: 3};
	const bx = (u: number) => big.x + u * big.k, by = (v: number) => big.y + v * big.k;
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={0} at={K3.step} />
				<Bench />
				<PlateB p={PLP.pile} cx={250} cy={820} w={250} o={prog(f, K3.step, 12)} />
				<Sx x={250} y={918} text="cut card pieces" size={24} color={INK_SOFT} weight={600} anchor="middle" at={K3.step + 10} />
				{/* the enlarged blank card */}
				<g opacity={prog(f, K3.each, 14)} transform={`translate(${big.x},${big.y}) scale(${big.k})`}>
					<NCard x={0} y={0} face="down" l="" c="blue" marks={false} ring={0} />
				</g>
				{f >= K3.phos ? <DrawPath d={`M${bx(-19) + 21},${by(27)} A21,21 0 1,1 ${bx(-19) + 20.9},${by(27) - 1}`} at={K3.phos} dur={14} color="#5d5a54" width={4} /> : null}
				{f >= K3.sugar ? <DrawPath d={(() => { const pts = Array.from({length: 6}, (_, k) => [bx(9) + Math.cos(((-90 + 72 * k) * Math.PI) / 180) * 30, by(28) + Math.sin(((-90 + 72 * k) * Math.PI) / 180) * 30]); return pts.map((q, i) => `${i ? 'L' : 'M'}${q[0].toFixed(1)},${q[1].toFixed(1)}`).join(' '); })()} at={K3.sugar} dur={16} color="#5d5a54" width={4} /> : null}
				{f >= K3.tab ? <DrawPath d={`M${bx(-TW / 2)},${by(54)} L${bx(-TW / 2)},${by(CH)} L${bx(TW / 2)},${by(CH)} L${bx(TW / 2)},${by(54)}`} at={K3.tab} dur={16} color={AMBER_INK} width={5} /> : null}
				<Sx x={110} y={352} text="phosphate" size={34} color={INK} hand at={K3.phos} />
				<DrawPath d={`M${262},${342} L${bx(-19) - 26},${by(27)}`} at={K3.phos + 4} dur={10} color={INK_SOFT} width={2.5} />
				<Sx x={110} y={430} text="sugar" size={34} color={INK} hand at={K3.sugar} />
				<DrawPath d={`M${190},${420} Q${300},${470} ${bx(9) - 10},${by(28) + 34}`} at={K3.sugar + 4} dur={12} color={INK_SOFT} width={2.5} />
				<Sx x={110} y={478} text="(the strip: backbone part)" size={24} color={INK_SOFT} weight={600} at={K3.sugar + 14} />
				<Sx x={110} y={545} text="base (the tab)" size={34} color={AMBER_INK} hand at={K3.tab} />
				<DrawPath d={`M${310},${535} L${bx(-TW / 2) - 10},${by(73)}`} at={K3.tab + 4} dur={10} color={AMBER_INK} width={2.5} />
				{/* pairs */}
				<Pair x={800} top="A" bot="T" topDy={seat(K3.at)} topO={prog(f, K3.at - 4, 8)} botO={prog(f, K3.at - 4, 8)} ring={pulse(f, K3.two, 40)} hb={prog(f, K3.two, 14)} />
				<Snap x={800} y={PAIR_J} at={K3.at + 16} />
				<Sx x={800} y={660} text="A fits T" size={34} color={TEAL} hand anchor="middle" at={K3.at + 14} />
				<Pair x={995} top="C" bot="T" topDy={failDy} topO={prog(f, failT - 8, 8)} botO={prog(f, failT - 8, 8)} />
				<Cross x={995} y={PAIR_J - 10} at={failT + 22} s={22} />
				<Sx x={995} y={660} text="C on T:" size={26} color={GREYT} weight={700} anchor="middle" at={failT + 22} />
				<Sx x={995} y={692} text="doesn't fit" size={26} color={GREYT} weight={700} anchor="middle" at={failT + 22} />
				<Pair x={1185} top="C" bot="G" topDy={seat(K3.cg)} topO={prog(f, K3.cg - 4, 8)} botO={prog(f, K3.cg - 4, 8)} ring={pulse(f, K3.three, 40)} hb={prog(f, K3.three, 14)} />
				<Snap x={1185} y={PAIR_J} at={K3.cg + 16} />
				<Sx x={1185} y={660} text="C fits G" size={34} color={TEAL} hand anchor="middle" at={K3.cg + 14} />
				<Ring cx={995} cy={PAIR_J} rx={270} ry={200} at={K3.heart} out={K3.real + 40} />
				<Sx x={800} y={720} text="2 notches" size={30} color={INK} weight={800} anchor="middle" at={K3.two} />
				<Sx x={1185} y={720} text="3 notches" size={30} color={INK} weight={800} anchor="middle" at={K3.three} />
				{/* the rule card */}
				<Fade at={K3.at}>
					<Panel x={CZ.x} y={CZ.y} w={CZ.w} h={420} stroke={AMBER} />
					<Sx x={CZ.x + 26} y={CZ.y + 54} text="The shape rule" size={42} color={INK} hand />
				</Fade>
				<Sx x={CZ.x + 26} y={CZ.y + 110} text="A fits only T" size={32} color={INK} weight={700} at={K3.at + 10} />
				<Sx x={CZ.x + 26} y={CZ.y + 156} text="C fits only G" size={32} color={INK} weight={700} at={K3.cg + 10} />
				<Sx x={CZ.x + 26} y={CZ.y + 214} text="notches = hydrogen bonds:" size={30} color={INK} weight={600} at={K3.two} />
				<Sx x={CZ.x + 26} y={CZ.y + 258} text="A-T two, C-G three" size={34} color={AMBER_INK} hand at={K3.three} />
				<Sx x={CZ.x + 26} y={CZ.y + 316} text="real DNA: only these partners" size={28} color={INK_SOFT} weight={600} at={K3.real} />
				<Sx x={CZ.x + 26} y={CZ.y + 352} text="fit and hold together" size={28} color={INK_SOFT} weight={600} at={K3.real + 8} />
				<GreyTag x={CZ.x + 26} y={CZ.y + 440} text="pairing and bonds: B4" at={K3.one} size={22} />
				<ColourKey />
			</Overlay>
		</>
	);
};

// ---------- 3b. Make the pieces for the second model ----------
const K3b = cues(S('make-synthesis-pieces'), {
	while: "While you're cutting", yellow: 'Cut yellow RNA cards', u: 'write U wherever', utab: 'A U tab gets the same two notches', fitsA: 'so it fits A', orange: 'cut an orange',
	three: 'three base tabs', anti: 'Those three tabs are its anticodon', cup: 'Glue a paper cup', need: 'You need three', uac: 'U A C with a red bead', cgu: 'C G U with a gold bead',
	aaa: 'A A A with a green bead', chart: 'matched using a codon chart', ribo: 'cut a ribosome shape', window: 'a window exactly three tabs wide', one: 'one codon at a time',
});
export const SceneMakeP01: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = prog(f, K3b.need, 20);
	const t1 = {cx: lerp(700, 650, shrink), cy: lerp(500, 440, shrink), w: lerp(250, 150, shrink)};
	const cards = [
		{...t1, anti: ANTIS[0], bead: 'red', at: K3b.orange, beadAt: K3b.uac + 8},
		{cx: 830, cy: 440, w: 150, anti: ANTIS[1], bead: 'gold', at: K3b.cgu - 4, beadAt: K3b.cgu + 10},
		{cx: 1010, cy: 440, w: 150, anti: ANTIS[2], bead: 'green', at: K3b.aaa - 4, beadAt: K3b.aaa + 10},
	];
	const RIB = {cx: 820, cy: 790, w: 260};
	const win = riboWindow(RIB.cx, RIB.cy, RIB.w);
	const tabK = win.w / 3 / PITCH;
	const tabsIn = prog(f, K3b.window, 24);
	const uSeat = -70 * (1 - prog(f, K3b.fitsA, 14));
	const [cupX, cupY] = trnaPt(t1.cx, t1.cy, t1.w)(1000, 300);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={1} at={K3b.while} />
				<Bench />
				{/* yellow RNA cards */}
				{[0, 1, 2, 3, 4].map(i => <g key={i} transform={`translate(${120 + i * 62},${282}) scale(0.7)`}><NCard x={0} y={0} face="down" l="" c="yellow" marks={false} o={prog(f, K3b.yellow + i * 4, 10)} /></g>)}
				<Sx x={110} y={372} text="yellow = RNA" size={26} color="#8a6b10" weight={700} at={K3b.yellow + 16} />
				<g transform="translate(180,420) scale(1.45)"><NCard x={0} y={0} face="down" l="T" c="blue" o={prog(f, K3b.u, 12)} ring={pulse(f, K3b.utab, 36)} /></g>
				<g transform="translate(340,420) scale(1.45)">
					<NCard x={0} y={0} face="down" l="U" c="yellow" o={prog(f, K3b.u + 6, 12)} ring={pulse(f, K3b.utab + 6, 36)} />
					<NCard x={0} y={2 * CH} face="up" l="A" c="blue" o={prog(f, K3b.fitsA - 6, 10)} dy={-uSeat} />
				</g>
				<Snap x={340} y={420 + CH * 1.45} at={K3b.fitsA + 14} />
				<Sx x={260} y={400} text="same notches" size={26} color={AMBER_INK} hand anchor="middle" at={K3b.utab} />
				<Sx x={410} y={600} text="U fits A" size={30} color={TEAL} hand at={K3b.fitsA + 14} />
				{/* scissors resting beside the pieces */}
				<PlateB p={PLP.scissors} cx={1170} cy={600} w={130} o={prog(f, K3b.orange, 12)} />
				{/* tRNA cards */}
				{cards.map((c, i) => {
					const o = prog(f, c.at, 14);
					const dx = i ? (1 - prog(f, c.at, 18)) * 200 : 0;
					return <TrnaCard key={i} cx={c.cx + dx} cy={c.cy} w={c.w} o={o} anti={c.anti} lp={i ? prog(f, c.at + 6, 18) : prog(f, K3b.three, 24)} bead={c.bead} beadO={prog(f, c.beadAt, 10)} beadDy={-(1 - prog(f, c.beadAt, 12)) * 60} tabGlow={i === 0 ? pulse(f, K3b.anti, 40) : 0} />;
				})}
				{f < K3b.need + 10 ? <g opacity={1 - shrink}><DrawPath d={`M${t1.cx - t1.w * 0.62},${t1.cy - 190} L${t1.cx + t1.w * 0.62},${t1.cy - 190} L${t1.cx + t1.w * 0.62},${t1.cy + 190} L${t1.cx - t1.w * 0.62},${t1.cy + 190} Z`} at={K3b.orange} dur={30} color={GREYT} width={3} dash="10 8" /></g> : null}
				<Sx x={700} y={300} text="orange tRNA card" size={28} color={CC.orange.line} weight={800} anchor="middle" at={K3b.orange + 8} out={K3b.need} />
				<Fade at={K3b.anti} out={K3b.need}>
					<SpanBracket x1={t1.cx - t1.w * 0.42} x2={t1.cx + t1.w * 0.42} y={t1.cy + 186} at={K3b.anti} label="anticodon (3' to 5')" size={30} />
				</Fade>
				<Ring cx={cupX} cy={cupY} rx={46} ry={34} at={K3b.cup} out={K3b.need} />
				<Sx x={cupX + 50} y={cupY + 8} text="cup: holds one bead" size={26} color={AMBER_INK} hand at={K3b.cup + 6} out={K3b.need} />
				{/* codon chart excerpt */}
				<CodonMini x={CZ.x + 30} y={CZ.y + 10} rows={CODONS.slice(0, 3)} at={K3b.need} w={330} size={30} hot={i => Math.max(pulse(f, [K3b.uac, K3b.cgu, K3b.aaa][i], 50), f > [K3b.uac, K3b.cgu, K3b.aaa][i] + 50 ? 0.35 : 0)} />
				{ANTIS.map((a, i) => <Sx key={a} x={CZ.x + 380} y={CZ.y + 10 + 48 * (i + 1) + 34} text={`card ${a}`} size={26} color={CC.orange.line} weight={800} at={[K3b.uac, K3b.cgu, K3b.aaa][i]} />)}
				<Sx x={CZ.x + 30} y={CZ.y + 260} text="bead = the amino acid for" size={30} color={INK} hand at={K3b.chart} />
				<Sx x={CZ.x + 30} y={CZ.y + 300} text="the codon this card fits" size={30} color={INK} hand at={K3b.chart + 8} />
				{/* the card ribosome */}
				<PaperRibo cx={RIB.cx} cy={RIB.cy} w={RIB.w} o={prog(f, K3b.ribo, 14)} hot={pulse(f, K3b.one, 40)} />
				{[0, 1, 2].map(i => (
					<g key={i} transform={`translate(${lerp(win.x1 - 220, win.x1 + win.w / 6 + (i * win.w) / 3, tabsIn)},${win.y2 - CH * tabK - 4}) scale(${tabK})`} opacity={tabsIn}>
						<path d={tabPath('')} fill={CC.yellow.fill} stroke={CC.yellow.line} strokeWidth={3} />
					</g>
				))}
				<Sx x={RIB.cx + 160} y={RIB.cy - 20} text="window: 3 tabs" size={30} color={AMBER_INK} hand at={K3b.window + 20} />
				<Sx x={RIB.cx + 160} y={RIB.cy + 22} text="= one codon" size={30} color={AMBER_INK} hand at={K3b.one} />
				<Sx x={RIB.cx} y={RIB.cy - 128} text="card ribosome" size={26} color={INK_SOFT} weight={700} anchor="middle" at={K3b.ribo + 8} />
				<ColourKey />
			</Overlay>
		</>
	);
};
void BENCH; void TH; void Tick; void clamp01; void EDGE;
