// P01 (Biology practical) scenes 4 to 6: building the starting molecule (cards taped into a row, partners seated tab
// to tab, opposite 5' to 3' pencil arrows, tape against touching tabs), modelling replication (the ladder unzips at the
// tabs with the tape intact, green cards seat on each template, two molecules each one blue and one green), and the
// record and check (sketch on the clipboard, base-for-base ticks, a forced mismatch, semi-conservative, and the two
// copies sliding into the arms of a copied chromosome).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Bench, CH, CODING, CZ, ColourKey, Cross, DrawPath, EDGE, Fade, GREYT, GreyTag, HB, Heading, INK, INK_SOFT, NCard, NEWC, ORIG, Overlay, PITCH,
	PLP, Panel, PlateB, QUESTION, Rail, S, Snap, StrandArrow, Sx, TEAL, TEMPLATE, CRow, Tick, clamp01, lerp, prog, pulse,
} from './shared';
import {LX0} from './s1';

const X1 = LX0 - 35, X2 = LX0 + 11 * PITCH + 35;
const colX = (i: number) => LX0 + i * PITCH;

// ---------- 4. Step 2: build the starting molecule ----------
const K4 = cues(S('build-molecule'), {
	step: 'Step two', tape: 'Tape twelve blue cards', order: 'in this order', pair: 'pair a second blue strand', arrow: 'Draw a five prime to three prime arrow',
	other: 'point the second arrow the other way', anti: 'DNA is antiparallel', taped: 'The tape holds each backbone', cov: 'strong covalent bonds', touch: 'tabs only touch', weak: 'weaker hydrogen bonds',
});
export const YT4 = 420;
export const SceneBuildP01: React.FC = () => {
	const f = useCurrentFrame();
	const topIn = (i: number) => K4.tape + 6 + i * 5;
	const botIn = (i: number) => K4.pair + 4 + i * 5;
	const yJ = YT4 + CH, yB = YT4 + 2 * CH;
	const glowA = pulse(f, K4.anti, 40);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={2} at={K4.step} />
				<Bench />
				<PlateB p={PLP.tape} cx={300} cy={800} w={190} o={prog(f, K4.tape, 12)} />
				<PlateB p={PLP.pencil} cx={1010} cy={800} w={200} o={prog(f, K4.arrow, 12)} />
				<CRow x0={LX0} y={YT4} face="down" letters={CODING} c="blue" card={i => ({o: prog(f, topIn(i), 10), dy: -40 * (1 - prog(f, topIn(i), 12))})} tape={i => prog(f, topIn(i + 1) + 8, 8)} tapeGlow={pulse(f, K4.cov, 50)} />
				<CRow x0={LX0} y={yB} face="up" letters={TEMPLATE} c="blue" card={i => ({o: prog(f, botIn(i), 8), dy: 60 * (1 - prog(f, botIn(i), 12))})} tape={i => prog(f, botIn(i + 1) + 8, 8)} tapeGlow={pulse(f, K4.cov, 50)} />
				{CODING.split('').map((l, i) => <Snap key={i} x={colX(i)} y={yJ} at={botIn(i) + 12} />)}
				{CODING.split('').map((l, i) => <HB key={'h' + i} x={colX(i)} y={yJ} l={l} p={prog(f, K4.touch + i * 2, 10)} />)}
				<StrandArrow x1={X1} x2={X2} y={YT4 - 26} at={K4.arrow} dir={1} glow={glowA} />
				<StrandArrow x1={X1} x2={X2} y={yB + 26} at={K4.other} dir={-1} glow={glowA} />
				{/* the card zone */}
				<Fade at={K4.anti}>
					<Panel x={CZ.x} y={CZ.y + 40} w={CZ.w} h={140} stroke={AMBER} />
				</Fade>
				<Sx x={CZ.x + 24} y={CZ.y + 98} text="antiparallel:" size={34} color={INK} hand at={K4.anti} />
				<Sx x={CZ.x + 24} y={CZ.y + 148} text="the arrows point opposite ways" size={30} color={INK} weight={600} at={K4.anti + 8} />
				<Fade at={K4.cov}>
					<Panel x={CZ.x} y={CZ.y + 220} w={CZ.w} h={130} stroke={EDGE} />
				</Fade>
				<Sx x={CZ.x + 24} y={CZ.y + 274} text="tape = strong covalent" size={32} color={INK} weight={700} at={K4.cov} />
				<Sx x={CZ.x + 24} y={CZ.y + 318} text="backbone bonds" size={32} color={INK} weight={700} at={K4.cov + 6} />
				<DrawPath d={`M${CZ.x},${CZ.y + 285} Q${1220},${CZ.y + 230} ${colX(11) - PITCH / 2 + 6},${YT4 + 30}`} at={K4.cov + 8} dur={14} color={AMBER_INK} width={3} dash="8 7" />
				<Fade at={K4.touch}>
					<Panel x={CZ.x} y={CZ.y + 390} w={CZ.w} h={130} stroke={EDGE} />
				</Fade>
				<Sx x={CZ.x + 24} y={CZ.y + 444} text="touching tabs = weak" size={32} color={INK} weight={700} at={K4.touch} />
				<Sx x={CZ.x + 24} y={CZ.y + 488} text="hydrogen bonds" size={32} color={INK} weight={700} at={K4.weak} />
				<DrawPath d={`M${CZ.x},${CZ.y + 455} Q${1230},${yJ + 40} ${colX(11) + 14},${yJ}`} at={K4.touch + 8} dur={14} color={AMBER_INK} width={3} dash="8 7" />
				<GreyTag x={CZ.x} y={CZ.y + 560} text="bonds and antiparallel strands: B4" at={K4.weak + 10} size={22} />
				<ColourKey />
			</Overlay>
		</>
	);
};

// ---------- 5. Step 3: model replication ----------
const K5 = cues(S('replicate'), {
	step: 'Step three', apart: 'Pull the two strands apart', tape: 'The tape stays intact', bonds: 'the hydrogen bonds break', template: 'each blue strand is a template',
	green: 'Add green cards one at a time', only: 'its only matching partner', tapenew: 'tape the new backbone', two: 'two molecules', each: 'Each one has one blue strand',
});
/** Final layout of the two molecules (scene 5 end; scene 6 start). */
export const MOL = {aTop: 316, bTop: 604};
/** Draw molecule A (blue coding over green copy) or B (green copy over blue template) at its top y. */
export const Molecule: React.FC<{which: 'A' | 'B'; y: number; topC?: 'blue' | 'green'; botC?: 'blue' | 'green'; hb?: number; tick?: (i: number) => number}> = ({which, y, hb = 1, tick}) => {
	const topC = which === 'A' ? 'blue' : 'green';
	const botC = which === 'A' ? 'green' : 'blue';
	return (
		<g>
			<CRow x0={LX0} y={y} face="down" letters={CODING} c={topC} tape={() => 1} />
			<CRow x0={LX0} y={y + 2 * CH} face="up" letters={TEMPLATE} c={botC} tape={() => 1} />
			{CODING.split('').map((l, i) => <HB key={i} x={colX(i)} y={y + CH} l={l} p={hb} />)}
			{tick ? CODING.split('').map((l, i) => (tick(i) > 0.01 ? <Tick key={'k' + i} x={colX(i)} y={y - 22} at={-100} s={22} color={TEAL} /> : null)) : null}
		</g>
	);
};
export const SceneReplicateP01: React.FC = () => {
	const f = useCurrentFrame();
	const op = (i: number) => prog(f, K5.apart + 4 + i * 3, 18);
	const gIn = (i: number) => K5.green + 4 + i * 8;
	const shift = prog(f, K5.two, 20);
	const yTopA = lerp(YT4, 330, 1) - 14 * shift;
	const yBotB = 790 + 14 * shift;
	const STACK: [number, number] = [1440, 840];
	const fly = (i: number, tx: number, ty: number) => {
		const t = prog(f, gIn(i), 14);
		return {o: prog(f, gIn(i) - 2, 4), dx: lerp(STACK[0] - tx, 0, t), dy: lerp(STACK[1] - ty, 0, t)};
	};
	const tagO = prog(f, K5.template, 12) * (1 - prog(f, K5.two - 10, 12));
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={3} at={K5.step} />
				<Bench />
				{/* templates opening */}
				<CRow x0={LX0} y={YT4} face="down" letters={CODING} c="blue" card={i => ({dy: (yTopA - YT4) * op(i)})} tape={() => 1} tapeGlow={pulse(f, K5.tape, 40)} />
				<CRow x0={LX0} y={YT4 + 2 * CH} face="up" letters={TEMPLATE} c="blue" card={i => ({dy: (yBotB - (YT4 + 2 * CH)) * op(i)})} tape={() => 1} tapeGlow={pulse(f, K5.tape, 40)} />
				{CODING.split('').map((l, i) => <HB key={i} x={colX(i)} y={YT4 + CH} l={l} p={1 - prog(f, K5.apart + 4 + i * 3, 6)} />)}
				{/* new green cards */}
				<CRow x0={LX0} y={yTopA + 2 * CH} face="up" letters={TEMPLATE} c="green" card={i => fly(i, colX(i), yTopA + CH)} tape={i => prog(f, Math.max(gIn(i + 1) + 14, K5.tapenew + i * 2), 8)} />
				<CRow x0={LX0} y={yBotB - 2 * CH} face="down" letters={CODING} c="green" card={i => fly(i, colX(i), yBotB - CH)} tape={i => prog(f, Math.max(gIn(i + 1) + 14, K5.tapenew + i * 2), 8)} />
				{CODING.split('').map((l, i) => (
					<g key={'s' + i}>
						<Snap x={colX(i)} y={yTopA + CH} at={gIn(i) + 14} color={NEWC} />
						<Snap x={colX(i)} y={yBotB - CH} at={gIn(i) + 14} color={NEWC} />
						<HB x={colX(i)} y={yTopA + CH} l={l} p={prog(f, gIn(i) + 14, 8)} />
						<HB x={colX(i)} y={yBotB - CH} l={l} p={prog(f, gIn(i) + 14, 8)} />
					</g>
				))}
				{/* green stack */}
				<g opacity={prog(f, K5.green - 10, 12)}>
					{[0, 1, 2, 3].map(k => <NCard key={k} x={STACK[0] + k * 6} y={STACK[1] - 40 - k * 5} face="down" l="" c="green" marks={false} />)}
					<Sx x={STACK[0] + 70} y={STACK[1] + 10} text="new (green) cards" size={28} color={NEWC} weight={700} />
				</g>
				{/* tags */}
				<g opacity={tagO}>
					<Sx x={X2 + 22} y={yTopA + 56} text="template" size={32} color={ORIG} hand />
					<Sx x={X2 + 22} y={yBotB - 36} text="template" size={32} color={ORIG} hand />
				</g>
				<Fade at={K5.apart} out={K5.two - 10}>
					<Panel x={CZ.x + 40} y={CZ.y + 70} w={CZ.w - 40} h={300} stroke={EDGE} />
				</Fade>
				<Sx x={CZ.x + 64} y={CZ.y + 128} text="pull apart at the tabs" size={32} color={INK} weight={700} at={K5.apart} out={K5.two - 10} />
				<Sx x={CZ.x + 64} y={CZ.y + 184} text="tape stays: backbones" size={32} color={INK} weight={600} at={K5.tape} out={K5.two - 10} />
				<Sx x={CZ.x + 64} y={CZ.y + 226} text="unbroken" size={32} color={INK} weight={600} at={K5.tape + 6} out={K5.two - 10} />
				<Sx x={CZ.x + 64} y={CZ.y + 286} text="hydrogen bonds break" size={32} color={AMBER_INK} hand at={K5.bonds} out={K5.two - 10} />
				<Sx x={CZ.x + 64} y={CZ.y + 336} text="each new card: its only partner" size={26} color={INK_SOFT} weight={600} at={K5.only} out={K5.two - 10} />
				{/* two molecules */}
				{[{y0: yTopA, y1: yTopA + 2 * CH}, {y0: yBotB - 2 * CH, y1: yBotB}].map((m, k) => (
					<g key={k} opacity={prog(f, K5.two, 12)}>
						<DrawPath d={`M${X2 + 18},${m.y0 + 4} L${X2 + 34},${m.y0 + 4} L${X2 + 34},${m.y1 - 4} L${X2 + 18},${m.y1 - 4}`} at={K5.two} dur={14} color={AMBER_INK} width={4} />
						<Sx x={X2 + 50} y={(m.y0 + m.y1) / 2 - 6} text={`molecule ${k + 1}`} size={32} color={INK} hand at={K5.two + 6} />
						<Sx x={X2 + 50} y={(m.y0 + m.y1) / 2 + 38} text="1 blue + 1 green" size={32} color={AMBER_INK} hand at={K5.each} />
					</g>
				))}
				<ColourKey hot={[pulse(f, K5.each, 50), pulse(f, K5.each, 50)]} />
			</Overlay>
		</>
	);
};

// ---------- 6. Record and check ----------
const K6 = cues(S('record-check'), {
	record: 'record what the model shows', draw: 'Draw both molecules', label: 'label the old and new strands', read: 'read each one against the original', match: 'match base for base',
	set: 'set by its template', force: 'Try forcing a wrong card in', flat: "won't sit flat", stands: 'mismatch stands out', semi: 'semi-conservative result', dividing: 'In a dividing cell',
	sister: 'sister chromatids', mitosis: 'mitosis later separates',
});
export const SceneRecordP01: React.FC = () => {
	const f = useCurrentFrame();
	const t = prog(f, 4, 24);
	const k0 = lerp(1, 0.72, t);
	const org = [lerp(LX0 - 35, 110, t), lerp(MOL.aTop, 282, t)];
	const fl = prog(f, K6.sister, 30);
	const CHR = {cx: 330, cy: 790, w: 112};
	const toScreen = (lx: number, ly: number): [number, number] => [org[0] + (lx - (LX0 - 35)) * k0, org[1] + (ly - MOL.aTop) * k0];
	const mol = (which: 'A' | 'B') => {
		const ly = which === 'A' ? MOL.aTop : MOL.bTop;
		const lc: [number, number] = [LX0 + 5.5 * PITCH, ly + CH];
		const s0 = toScreen(lc[0], lc[1]);
		const s1: [number, number] = [CHR.cx + (which === 'A' ? -24 : 24), CHR.cy];
		const x = lerp(s0[0], s1[0], fl), y = lerp(s0[1], s1[1], fl);
		const k = lerp(k0, 0.21, fl), rot = lerp(0, 90, fl);
		const tickP = (i: number) => prog(f, K6.match + (which === 'A' ? 0 : 20) + i * 3, 6) * (1 - prog(f, K6.sister, 10));
		return (
			<g transform={`translate(${x},${y}) rotate(${rot}) scale(${k}) translate(${-lc[0]},${-lc[1]})`} opacity={1 - 0.2 * fl}>
				<Molecule which={which} y={ly} tick={tickP} />
			</g>
		);
	};
	const CB = {cx: 1585, cy: 590, w: 440};
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={3} at={-100} />
				<Bench />
				<PlateB p={PLP.chromo} cx={CHR.cx} cy={CHR.cy} w={CHR.w} o={prog(f, K6.dividing, 16)} />
				{mol('A')}
				{mol('B')}
				{[{y: 345, w: 'A'}, {y: 552, w: 'B'}].map((m, k) => (
					<g key={k}>
						<Sx x={850} y={m.y} text="= original," size={30} color={TEAL} weight={800} at={K6.match + k * 20 + 36} out={K6.sister} />
						<Sx x={850} y={m.y + 36} text="base for base" size={30} color={TEAL} weight={800} at={K6.match + k * 20 + 40} out={K6.sister} />
					</g>
				))}
				<Sx x={850} y={460} text="each new card set by its template" size={24} color={INK_SOFT} weight={600} at={K6.set} out={K6.sister} />
				{/* forced mismatch */}
				<g opacity={prog(f, K6.force, 12)} transform="translate(1000,770) scale(1.2)">
					<NCard x={0} y={CH} face="up" l="A" c="blue" />
					<NCard x={0} y={-CH} face="down" l="C" c="green" dy={-12 - 6 * pulse(f, K6.flat, 24)} dx={6} rot={9 * prog(f, K6.force + 10, 12)} />
				</g>
				<Cross x={1000} y={760} s={20} at={K6.flat} />
				<Sx x={880} y={910} text="mismatch: won't sit flat" size={28} color={AMBER_INK} hand at={K6.stands} />
				<GreyTag x={1080} y={668} text="cells also proofread: B4" at={K6.stands + 10} size={20} />
				{/* chromosome link */}
				<Sx x={CHR.cx - 80} y={CHR.cy - 40} text="one copy" size={28} color={INK} hand anchor="end" at={K6.sister + 30} />
				<Sx x={CHR.cx + 80} y={CHR.cy - 40} text="one copy" size={28} color={INK} hand at={K6.sister + 30} />
				<Sx x={CHR.cx} y={CHR.cy + 150} text="sister chromatids" size={30} color={AMBER_INK} hand anchor="middle" at={K6.sister + 20} />
				<Sx x={CHR.cx + 80} y={CHR.cy + 10} text="mitosis separates them" size={24} color={INK_SOFT} weight={600} at={K6.mitosis} />
				<GreyTag x={CHR.cx + 80} y={CHR.cy + 30} text="B5a" at={K6.mitosis + 6} size={20} />
				{/* the record sheet */}
				<PlateB p={PLP.clipboard} cx={CB.cx} cy={CB.cy} w={CB.w} o={prog(f, K6.record, 12)} />
				{/* sketch and labels follow the tilt of the painted clipboard sheet */}
				<g transform={`rotate(14 ${CB.cx} ${CB.cy}) translate(${CB.cx + 22},${CB.cy + 40}) scale(0.74) translate(${-CB.cx},${-CB.cy})`}>
				<Sx x={CB.cx} y={CB.cy - 210} text="record" size={34} color={INK} hand anchor="middle" at={K6.record + 6} />
				{[0, 1].map(k => {
					const y0 = CB.cy - 165 + k * 92;
					const cTop = k ? NEWC : ORIG, cBot = k ? ORIG : NEWC;
					return (
						<g key={k}>
							<DrawPath d={`M${CB.cx - 150},${y0} L${CB.cx + 60},${y0}`} at={K6.draw + k * 12} dur={14} color={cTop} width={6} />
							<DrawPath d={`M${CB.cx - 150},${y0 + 44} L${CB.cx + 60},${y0 + 44}`} at={K6.draw + k * 12 + 6} dur={14} color={cBot} width={6} />
							{Array.from({length: 8}, (_, i) => <DrawPath key={i} d={`M${CB.cx - 140 + i * 28},${y0 + 4} L${CB.cx - 140 + i * 28},${y0 + 40}`} at={K6.draw + k * 12 + 10} dur={6} color="#8b8378" width={2.5} />)}
							<Sx x={CB.cx + 74} y={y0 + 8} text={k ? 'new' : 'old'} size={26} color={cTop} weight={800} at={K6.label + k * 10} />
							<Sx x={CB.cx + 74} y={y0 + 52} text={k ? 'old' : 'new'} size={26} color={cBot} weight={800} at={K6.label + k * 10 + 4} />
						</g>
					);
				})}
				<Sx x={CB.cx - 160} y={CB.cy + 100} text="semi-conservative:" size={32} color={AMBER_INK} hand at={K6.semi} />
				<Sx x={CB.cx - 160} y={CB.cy + 144} text="each copy keeps one" size={28} color={INK} weight={700} at={K6.semi + 8} />
				<Sx x={CB.cx - 160} y={CB.cy + 180} text="original strand" size={28} color={INK} weight={700} at={K6.semi + 12} />
				</g>
				<ColourKey />
			</Overlay>
		</>
	);
};
void clamp01; void GREYT; void AMBER;
