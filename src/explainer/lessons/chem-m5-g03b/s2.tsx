import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Chip, EqStrip, Fade, Overlay, Sx, Tag, TEAL, Tick, tw} from '../chem-m5-c06/parts';
import {CheckRuler} from '../chem-m5-c06b/parts';
import {I2K} from '../chem-m5-c06b/common';
import {I_EQ} from '../chem-m5-c06b/s2';
import {sc} from './common';
import {FiveCard, cardY} from '../chem-m5-g03a/board';

// Revision 2 (16 Oct): the tiny-K scenes are cut (they repeated C6b). This scene recalls the C6b iodine example
// so that "a huge K is the mirror image" (huge-k-setup) has its other half.

// ---------- 2. Type 3 recalled: the C6b tiny K ----------
const R = 'type-three-recall';
const KR = cues(sc(R), {t3: 'Type three first', second: 'second C6 video', tiny: 'a tiny K', hardly: 'hardly any reactant', xtiny: 'x was tiny', dropped: 'dropped it', minus: 'start minus x', tested: 'tested it'});
const T3 = 'Given: K + a start. Find: the concentrations (x).';
export const SceneTypeThreeRecall: React.FC = () => {
	const f = useCurrentFrame();
	// card 3 slides from its place in the five-card column to the top left, shrinking, and gives way to a badge
	const m = prog(f, 2, 26);
	const s = 1 - 0.5 * m;
	const cardO = 1 - prog(f, 18, 12);
	const BX = 96, BY = 104;
	const card = {x: 96, y: cardY(2)};
	const tx = card.x + (BX - card.x) * m, ty = card.y + (BY - card.y) * m;
	// the C6b thumbnail
	const C = {x: 96, y: 200, w: 800, h: 790};
	const X = C.x + 40;
	const slide = prog(f, KR.minus + 8, 18);
	const l0 = '0.25', gap = tw('0.25 ', 50);
	const mirror = KR.tested + 14;
	return (
		<Overlay>
			{cardO > 0.01 ? (
				<g opacity={cardO} transform={`translate(${tx},${ty}) scale(${s}) translate(${-card.x},${-card.y})`}>
					<FiveCard n={3} x={card.x} y={card.y} w={1728} at={-100} title={T3} titleAt={-100} />
				</g>
			) : null}
			<Fade at={18}>
				<rect x={BX} y={BY} width={540} height={74} rx={37} fill="#fffdf8" stroke={TEAL} strokeWidth={4} />
				<circle cx={BX + 38} cy={BY + 37} r={25} fill={TEAL} />
				<Sx x={BX + 38} y={BY + 48} text="3" size={30} color="#fffdf8" anchor="middle" at={18} />
				<Sx x={BX + 80} y={BY + 50} text="Type 3: K + start" size={40} hand at={18} />
			</Fade>
			{/* the C6b iodine example */}
			<Fade at={KR.tiny - 10}>
				<rect x={C.x} y={C.y} width={C.w} height={C.h} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
			</Fade>
			<Tag x={C.x + C.w - 230} y={C.y + 22} w={200} text="from C6b" at={KR.second} size={28} color={TEAL} />
			<EqStrip items={I_EQ} x={X} y={C.y + 80} size={44} at={KR.tiny} />
			<Sx x={X} y={C.y + 160} text="K = 1.6 × 10^{−5}" size={42} color={TEAL} at={KR.tiny + 8} />
			<Sx x={X} y={C.y + 220} text="start: [I_2] = 0.25 mol/L" size={40} color={I2K} at={KR.tiny + 14} />
			<Sx x={X} y={C.y + 300} text="hardly any I_2 splits," size={38} color={INK_SOFT} hand at={KR.hardly} />
			<Sx x={X} y={C.y + 346} text="so x is tiny next to 0.25" size={38} color={INK_SOFT} hand at={KR.xtiny} />
			{/* drop the x from start minus x */}
			<Sx x={X} y={C.y + 440} text={l0} size={50} color={I2K} at={KR.dropped} />
			<g opacity={1 - slide} transform={`translate(${70 * slide},${-30 * slide})`}>
				<Sx x={X + gap} y={C.y + 440} text="− x" size={50} color={AMBER_INK} at={KR.dropped} />
			</g>
			<g transform={`translate(${-tw('− x ', 50) * slide},0)`}>
				<Sx x={X + gap + tw('− x ', 50)} y={C.y + 440} text="≈ 0.25" size={50} color={I2K} at={KR.minus + 10} />
			</g>
			{/* the test: x against the start */}
			<CheckRuler x={X} y={C.y + 560} w={700} frac={0.0010 / 0.25} at={KR.tested} sliverAt={KR.tested + 6} side="start" sliverLabel="x = 0.0010" fiveAt={KR.tested + 4} fiveLabel="5%" labelSize={34} />
			<Sx x={X + 700} y={C.y + 544} text="start: 0.25" size={32} anchor="end" hand at={KR.tested + 4} />
			<Sx x={X + 240} y={C.y + 646} text="0.0010 ÷ 0.25 = 0.4%" size={38} color={AMBER_INK} at={KR.tested + 10} />
			<Tick x={X + 660} y={C.y + 630} at={KR.tested + 18} s={36} />
			<Chip x={X} y={C.y + 690} w={460} text="Test it or don't use it." size={36} at={KR.tested + 20} color={TEAL} />
			{/* the mirror line, and the empty half that huge-k-setup fills */}
			<DrawPath d={`M960,${C.y - 20} L960,${C.y + C.h + 10}`} at={mirror} dur={20} color={INK_SOFT} width={3} dash="10 9" opacity={0.6} />
			<Fade at={mirror + 10}>
				<rect x={1024} y={C.y} width={800} height={C.h} rx={24} fill="none" stroke="rgba(60,45,20,0.22)" strokeWidth={3} strokeDasharray="12 10" />
			</Fade>
			<Sx x={1424} y={C.y + C.h / 2} text="huge K?" size={72} color={AMBER_INK} anchor="middle" hand at={mirror + 16} />
		</Overlay>
	);
};
void INK;
