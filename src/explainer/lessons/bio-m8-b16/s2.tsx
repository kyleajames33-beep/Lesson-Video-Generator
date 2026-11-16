// B8-16 scenes 6 to 9: glasses and contact lenses (concave for myopia, convex for hyperopia and reading, toric for
// astigmatism; contacts on the cornea, with an infection risk), laser surgery (LASIK: flap, laser, flatter centre;
// permanent, with limits), lens replacement (ultrasound, a folded artificial lens; reading glasses still needed; needs a
// working retina), and matched, not ranked.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, BLUE, C_GL, C_LASER, C_SWAP, CARD, Chip, DrawPath, EDGE, EyeStack, EyeStrip, FocalMark, GREEN, GREYT, GTag, INK, INK_SOFT, LensProfile, Pic, PicH, PlateB, RED, Rays, Svg, Sx, TEAL, Title, eyePt, lerp, pathX, pbPt, prog,
	pulse, smooth, vis,
} from './parts';
import type {EyeG} from './parts';
import {G, LIT_ALL, fogChip, missChip} from './s1';
import {FP, PL} from './assets';
import {K} from './common';

const ON = -1000;

// ---------- 6. glasses and contact lenses ----------
const K6 = K('glasses-contacts', {focus: 'a focus', glassesW: 'Glasses do', myopia: 'For myopia', concave: 'concave lens', spreads: 'spreads the', back: 'focus back', hyper: 'For hyperopia', convex: 'convex lens', inward: 'bends light', forward: 'focus forward', astig: 'For astigmatism', toric: 'toric lens', contact: 'Contact lenses', wider: 'wider clear', worn: 'worn overnight', infection: 'an infection'});
export const SceneGlasses: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, K6.hyper, 30)) * (1 - smooth(prog(f, K6.contact, 30)));
	const lo = 1 - sh;
	const xR = lerp(FP.retinaLong, FP.retinaShort, sh);
	const fixA = smooth(prog(f, K6.back - 10, 30));
	const fixB = smooth(prog(f, K6.forward - 10, 30));
	const inHyper = f >= K6.hyper && f < K6.contact;
	const xF = inHyper ? lerp(FP.retinaShort + 140, FP.retinaShort, fixB) : f < K6.hyper ? lerp(FP.retina, FP.retinaLong, fixA) : FP.retinaLong;
	const P = (u: number, v: number) => eyePt(G, u, v);
	const [cx, cy] = P(FP.cornea, FP.axis);
	const onC = smooth(prog(f, K6.contact + 10, 24));
	const inf = prog(f, K6.infection, 16);
	return (
		<Svg>
			<Title text="Glasses and contact lenses" />
			<EyeStack g={G} base={PL.long} layers={[{p: PL.short, o: sh}]} />
			{lo < -1 ? null : null}
			<g opacity={vis(f, K6.glassesW - 6, K6.contact, 14)}><PicH p={PL.glasses} cx={250} cy={230} h={130} /></g>
			<g opacity={vis(f, K6.contact - 4, undefined, 14)}><PicH p={PL.contacts} cx={250} cy={230} h={120} /></g>
			<Rays g={G} xF={xF} xR={xR} at={ON} />
			<FocalMark g={G} x={xF} />
			<LensProfile x={cx - 70} y={cy} h={200} kind="concave" at={K6.concave} out={K6.hyper} />
			<LensProfile x={cx - 70} y={cy} h={200} kind="convex" at={K6.convex} out={K6.contact} />
			{onC > 0.01 ? <path opacity={onC} d={`M${cx - 6},${cy - 100} Q${cx - 46},${cy} ${cx - 6},${cy + 100}`} fill="none" stroke={C_GL} strokeWidth={7} /> : null}
			{inf > 0.01 ? <ellipse cx={cx - 4} cy={cy - 40} rx={22} ry={30} fill={RED} opacity={0.45 * inf} /> : null}
			<Sx x={96} y={360} text="change the bending before the retina" size={34} color={INK} hand at={K6.focus} />
			<Sx x={96} y={640} text="concave caves in" size={40} color={C_GL} hand at={K6.concave} out={K6.hyper} />
			<Sx x={96} y={640} text="convex bulges out" size={40} color={C_GL} hand at={K6.convex} out={K6.contact} />
			<g opacity={vis(f, K6.myopia, K6.hyper, 12)}>
				<Sx x={1130} y={300} text="myopia: concave lens" size={40} color={INK} hand at={ON} />
				<Sx x={1130} y={370} text="spreads light: focus moves back" size={36} color={C_GL} hand at={K6.spreads} />
			</g>
			<g opacity={vis(f, K6.hyper, K6.astig, 12)}>
				<Sx x={1130} y={300} text="hyperopia and reading: convex lens" size={38} color={INK} hand at={ON} />
				<Sx x={1130} y={370} text="bends light inward: focus moves forward" size={34} color={C_GL} hand at={K6.inward} />
			</g>
			<g opacity={vis(f, K6.astig, K6.contact, 12)}>
				<path d="M1180,420 Q1130,500 1180,580" fill="none" stroke={BLUE} strokeWidth={6} />
				<path d="M1230,430 Q1205,500 1230,570" fill="none" stroke={TEAL} strokeWidth={6} />
				<LensProfile x={1100} y={500} h={150} kind="toric" at={K6.toric} />
				{(() => { const m = smooth(prog(f, K6.toric + 10, 30)); return <g><circle cx={lerp(1450, 1530, m)} cy={500} r={10} fill={BLUE} /><circle cx={lerp(1620, 1530, m)} cy={500} r={10} fill={TEAL} /></g>; })()}
				<line x1={1180} x2={1660} y1={500} y2={500} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="6 6" />
				<Sx x={1130} y={300} text="astigmatism: toric lens" size={40} color={INK} hand at={ON} />
				<Sx x={1130} y={650} text="different bending in different directions" size={34} color={C_GL} hand at={K6.toric} />
			</g>
			<g opacity={vis(f, K6.contact, undefined, 12)}>
				<Sx x={1130} y={300} text="contact lenses: on the cornea" size={40} color={INK} hand at={ON} />
				<Sx x={1130} y={370} text="move with the eye: wider clear view" size={36} color={C_GL} hand at={K6.wider} />
				<Sx x={1130} y={480} text="infection risk:" size={36} color={RED} hand at={K6.infection} />
				<Sx x={1130} y={530} text="overnight wear, poor cleaning" size={36} color={RED} hand at={K6.infection} />
			</g>
			<EyeStrip s={{lit: LIT_ALL, items: [[{t: 'glasses', at: K6.back, chip: C_GL}], [{t: 'contacts', at: K6.contact + 20, chip: C_GL}], [], [missChip(ON, K6.back)]]}} />
			{void AMBER_INK}{void CARD}{void Chip}{void DrawPath}{void EDGE}{void GREEN}{void GREYT}{void GTag}{void Pic}{void C_LASER}{void C_SWAP}{void lo}
		</Svg>
	);
};

// ---------- 7. laser surgery ----------
const K7 = K('laser-surgery', {laser: 'Laser surgery', lasik: 'In LASIK', flap: 'thin flap', folded: 'folded back', removes: 'A laser', centre: 'from the', flatten: 'flattening the', moves: 'focus moves', laid: 'flap is', permanent: 'is permanent', needs: 'It needs', dry: 'dry eyes', presby: "doesn't stop"});
const G7: EyeG = {cx: 420, cy: 470, w: 500};
const C7 = {cx: 1060, cy: 480, h: 560};
export const SceneLaser: React.FC = () => {
	const f = useCurrentFrame();
	const cw = (C7.h * (1367 - 632)) / (1838 - 163);
	const b = smooth(prog(f, K7.folded - 10, 24)) * (1 - smooth(prog(f, K7.flatten, 30)));
	const c = smooth(prog(f, K7.flatten, 30));
	const cp = pbPt(PL.corA, C7.cx, C7.cy, cw);
	const [ax, ay] = cp(FP.corApex[0] + 40, FP.corApex[1]);
	const beam = vis(f, K7.removes, K7.flatten + 20, 10) * (0.6 + 0.4 * Math.sin(f / 3));
	const xF = lerp(FP.retina, FP.retinaLong, smooth(prog(f, K7.moves, 30)));
	const old = vis(f, K7.flatten, undefined, 12);
	const [t0x, t0y] = cp(1000, 230), [b0x, b0y] = cp(1000, 1770);
	return (
		<Svg>
			<Title text="Laser surgery (LASIK)" />
			<EyeStack g={G7} base={PL.long} />
			<Rays g={G7} xF={xF} xR={FP.retinaLong} srcX={110} spread={160} />
			<FocalMark g={G7} x={xF} />
			<g>
				<PlateB p={PL.corA} cx={C7.cx} cy={C7.cy} w={cw} />
				{b > 0.01 ? <PlateB p={PL.corB} cx={C7.cx} cy={C7.cy} w={cw} o={b} /> : null}
				{c > 0.01 ? <PlateB p={PL.corC} cx={C7.cx} cy={C7.cy} w={cw} o={c} /> : null}
			</g>
			{beam > 0.01 ? <g opacity={beam}>{[-30, 0, 30].map(d => <line key={d} x1={ax - 200} y1={ay + d * 3} x2={ax} y2={ay + d * 0.4} stroke={C_LASER} strokeWidth={4} />)}</g> : null}
			{old > 0.01 ? <path opacity={old} d={`M${t0x},${t0y} Q${ax - 70},${ay} ${b0x},${b0y}`} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="10 8" /> : null}
			<GTag x={C7.cx} y={790} text="front of the eye, in section" size={26} anchor="middle" />
			<Sx x={1300} y={260} text="LASIK: thin flap cut, folded back" size={36} color={INK} hand at={K7.flap} />
			<GTag x={1300} y={284} text="excimer laser" size={28} at={K7.removes} />
			<Sx x={1300} y={380} text="flatter centre: bends light less" size={36} color={C_LASER} hand at={K7.flatten} />
			<GTag x={1300} y={404} text="flap stays down by itself" size={28} at={K7.laid} />
			<Chip x={1300} y={470} text="permanent: can't be undone" size={32} color={RED} ink={INK} at={K7.permanent} />
			<GTag x={1300} y={546} text="needs a stable prescription" size={28} at={K7.needs} />
			<GTag x={1300} y={600} text="and a thick enough cornea" size={28} at={K7.needs + 20} />
			<GTag x={1300} y={654} text="dry eyes; glare at night" size={28} at={K7.dry} />
			<GTag x={1300} y={708} text="doesn't stop presbyopia: lens unchanged" size={28} at={K7.presby} />
			<Sx x={96} y={790} text="focus moves back onto the retina" size={38} color={TEAL} hand at={K7.moves} />
			<EyeStrip s={{lit: LIT_ALL, items: [[], [{t: 'laser', at: K7.flatten, chip: C_LASER}], [], [missChip(ON, K7.moves)]]}} />
			{void AMBER_INK}{void BLUE}{void C_GL}{void C_SWAP}{void CARD}{void DrawPath}{void EDGE}{void GREEN}{void LensProfile}{void Pic}{void PicH}{void pathX}{void pulse}{void INK_SOFT}
		</Svg>
	);
};

// ---------- 8. lens replacement ----------
const K8 = K('lens-replacement', {fix: 'the fix', ultra: 'ultrasound', removed: "it's removed", folded: 'A folded', opens: 'opens into', light: 'Light passes', correct: 'also correct', shape: "can't change", reading: 'reading glasses', infection: 'small risk', retina: 'only helps'});
export const SceneLensReplace: React.FC = () => {
	const f = useCurrentFrame();
	const io = smooth(prog(f, K8.opens, 30));
	const frag = vis(f, K8.ultra, K8.removed + 20, 10);
	const P = (u: number, v: number) => eyePt(G, u, v);
	const [lx, ly] = P(FP.lens, FP.axis);
	const clear = prog(f, K8.light, 14);
	const unfold = 0.6 + 0.4 * smooth(prog(f, K8.folded + 10, 26));
	const tick = prog(f, K8.retina + 10, 12);
	const [rx, ry] = P(FP.retina, FP.axis);
	return (
		<Svg>
			<Title text="Lens replacement" />
			<EyeStack g={G} base={PL.cat} layers={[{p: PL.iol, o: io}]} />
			<Rays g={G} xF={FP.retina} xR={FP.retina} scatter={1 - clear} at={ON} />
			{frag > 0.01 ? <g opacity={frag}>{Array.from({length: 10}, (_, i) => <path key={i} d={`M${lx - 20 + (i % 3) * 18},${ly - 70 + Math.floor(i / 3) * 40} l12,-8 l6,14 Z`} fill="#e8e2cf" stroke={GREYT} strokeWidth={2} />)}</g> : null}
			<GTag x={1130} y={240} text="ultrasound breaks up the old lens" size={28} at={K8.ultra} />
			<g opacity={vis(f, K8.folded - 4, undefined, 14)} transform={`translate(1480,450) scale(${unfold}) translate(-1480,-450)`}><PicH p={PL.lens} cx={1480} cy={450} h={300} /></g>
			<Sx x={1130} y={380} text="folded artificial lens" size={36} color={INK} hand at={K8.folded} />
			<Sx x={1130} y={430} text="clear plastic" size={32} color={INK} hand at={K8.folded + 10} />
			<Sx x={1130} y={650} text="light passes through clearly" size={38} color={C_SWAP} hand at={K8.light} />
			<GTag x={1130} y={674} text="power chosen to fit the eye" size={28} at={K8.correct} />
			<GTag x={1130} y={730} text="can't change shape: reading glasses" size={28} at={K8.shape} />
			<GTag x={1130} y={786} text="small infection risk" size={28} at={K8.infection} />
			<GTag x={1440} y={786} text="needs a working retina" size={28} at={K8.retina} />
			{tick > 0.01 ? <path opacity={tick} d={`M${rx + 16},${ry - 60} l14,16 l30,-38`} fill="none" stroke={GREEN} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" /> : null}
			<EyeStrip s={{lit: LIT_ALL, fog: ON, fogOut: K8.light, tick: K8.retina + 10, items: [[], [], [fogChip(ON, K8.light), {t: 'new lens', at: K8.light + 10, chip: C_SWAP}]]}} />
			{void AMBER_INK}{void BLUE}{void C_GL}{void C_LASER}{void CARD}{void Chip}{void DrawPath}{void EDGE}{void FocalMark}{void LensProfile}{void Pic}{void PlateB}{void RED}{void TEAL}{void pathX}{void pbPt}{void pulse}{void INK_SOFT}{void missChip}
		</Svg>
	);
};

// ---------- 9. matched, not ranked ----------
const K9 = K('matched-not-ranked', {matched: 'matched, not', glassesC: 'Glasses are', anyone: 'almost anyone', contact: 'Contact lenses', laser: 'Laser surgery', lens: 'Lens replacement', cloudy: 'a cloudy', long: 'long eyeball', removes: 'removes the'});
export const SceneMatched: React.FC = () => {
	const f = useCurrentFrame();
	const cards: {x: number; p: typeof PL.glasses; h: number; chip: string; at: number; box: number; col: string}[] = [
		{x: 260, p: PL.glasses, h: 120, chip: 'almost anyone; growing eyes', at: K9.anyone, box: 0, col: C_GL},
		{x: 700, p: PL.contacts, h: 120, chip: 'active, keeps them clean', at: K9.contact, box: 1, col: C_GL},
		{x: 1140, p: PL.corC, h: 230, chip: 'adults, stable prescription', at: K9.laser, box: 1, col: C_LASER},
		{x: 1580, p: PL.lens, h: 220, chip: 'the only fix for a cloudy lens', at: K9.cloudy, box: 2, col: C_SWAP},
	];
	return (
		<Svg>
			<Title text="Matched, not ranked" />
			<Sx x={96} y={206} text="move the focus, or clear the path" size={44} color={BLUE} hand at={K9.matched} />
			<GTag x={1824} y={140} text="b15: matched, not ranked" size={28} anchor="end" />
			{cards.map((c, i) => {
				const L = prog(f, c.at, 14);
				return <g key={i}>
					<PicH p={c.p} cx={c.x} cy={420} h={c.h} />
					<Chip x={c.x} y={570} text={c.chip} size={30} color={L > 0.5 ? c.col : EDGE} ink={L > 0.5 ? INK : GREYT} anchor="middle" />
					{L > 0.01 ? <DrawPath d={`M${c.x},${626} L${pathX(c.box) + 125},${868}`} at={c.at + 6} dur={14} color={c.col} width={3} dash="8 6" /> : null}
				</g>;
			})}
			<GTag x={260} y={260} text="long eye stays long" size={28} anchor="middle" at={K9.long} />
			<GTag x={1140} y={260} text="long eye stays long" size={28} anchor="middle" at={K9.long + 6} />
			<GTag x={1580} y={260} text="cloudy lens removed" size={28} anchor="middle" at={K9.removes} />
			{prog(f, K9.removes, 12) > 0.01 ? <path opacity={prog(f, K9.removes, 12)} d="M1690,330 l16,18 l34,-42" fill="none" stroke={GREEN} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" /> : null}
			<EyeStrip s={{lit: LIT_ALL, items: [[{t: 'glasses', at: ON, chip: C_GL}], [{t: 'contacts', at: ON, chip: C_GL}, {t: 'laser', at: ON, chip: C_LASER}], [{t: 'new lens', at: ON, chip: C_SWAP}]]}} />
			{void AMBER_INK}{void CARD}{void LensProfile}{void Pic}{void PlateB}{void RED}{void TEAL}{void pbPt}{void pulse}{void INK_SOFT}{void Rays}{void FocalMark}{void EyeStack}{void lerp}{void smooth}{void vis}{void fogChip}{void missChip}
		</Svg>
	);
};
