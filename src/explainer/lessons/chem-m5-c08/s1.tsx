import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {H2I2_EQ} from '../chem-m5-c06/board';
import {Thermo} from '../chem-m5-c04b/parts';
import {BLUE, CARD8, Chip, EQ8, EqStrip, Fade, FracX, GivensCard, KEY8, Overlay, Ring, Stopwatch, Sx, Tag, Tube, TubeScale, TUBE8, cardH, cst, eqLayout} from './parts';
import type {Term} from './parts';
import {Key8} from './board';
import {Heading, cw, kf, sc} from './common';
import {MINUS} from './common';

const hiPos = eqLayout(H2I2_EQ, EQ8.s, EQ8.x).pos;

// ---------- 1. Hook: a mixture that has not settled ----------
const H = 'hook';
const K1 = cues(sc(H), {tube: 'hot hydrogen iodide tube', fifty: 'four hundred and fifty', k49: 'forty-nine', settle: 'nobody let it settle first', mixed: 'mixed', v1: ['0.20', 1], v2: ['0.20', 2], v3: '0.50', notEq: 'not reached equilibrium', change: 'something is about to change', more: 'make more hydrogen iodide', brk: 'break some down', before: 'before anything moves'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const g = prog(f, K1.k49 + 6, 44);
	const tx = 900 + (TUBE8.x - 900) * g, ty = 400 + (TUBE8.y - 400) * g, tw2 = 380 + (TUBE8.w - 380) * g, th = 380 + (TUBE8.h - 380) * g;
	const agit = (ff: number) => kf(ff, [[K1.mixed, 0], [K1.mixed + 14, 2], [K1.change, 2], [K1.change + 30, 5], [K1.brk + 40, 5], [K1.before, 1], [K1.before + 24, 0]]);
	return (
		<>
			<Heading text="Which way will it run?" at={4} size={62} />
			<Overlay>
				<EqStrip items={H2I2_EQ} x={EQ8.x} y={EQ8.y} size={EQ8.s} at={K1.k49 + 12} />
				<GivensCard x={CARD8.x} y={CARD8.y} w={CARD8.w} h={cardH(4)} at={K1.k49 + 4} lh={CARD8.lh} lines={[
					{text: 'K = 49 (about 450 °C)', at: K1.k49 + 10},
					{text: 'now: [H_2] = 0.20 mol/L', at: K1.v1, ring: K1.v1 + 10},
					{text: 'now: [I_2] = 0.20 mol/L', at: K1.v2, ring: K1.v2 + 10},
					{text: 'now: [HI] = 0.50 mol/L', at: K1.v3, ring: K1.v3 + 10},
				]} />
				<Key8 at={K1.tube + 24} x={900} y={340} out={K1.k49 + 10} />
				<Key8 at={K1.k49 + 50} />
				<Tube x={tx} y={ty} w={tw2} h={th} counts={cst(4, 4, 10)} reveal={prog(f, K1.tube - 10, 18)} agit={agit} />
				<Fade at={K1.fifty} out={K1.k49 + 10}>
					<Chip x={1410} y={560} w={330} h={64} text="about 450 °C" size={40} at={K1.fifty} color="#c4582f" />
					<Thermo x={1350} y={584} s={2.2} at={K1.fifty} />
				</Fade>
				<Chip x={360} y={690} w={330} h={56} text="just mixed, not settled" size={34} at={K1.settle} color={AMBER_INK} />
				<Chip x={360} y={766} w={330} h={56} text="made-up mixture" size={34} at={K1.settle + 12} color={INK_SOFT} />
				<Chip x={360} y={842} w={330} h={56} text="about 450 °C" size={34} at={K1.k49 + 56} color="#c4582f" />
				{/* the K chip pops on forty-nine */}
				<Chip x={780} y={232} w={540} h={78} text="K = 49 (about 450 °C)" size={46} at={K1.k49} color="#0d6b52" />
				<Stopwatch cx={1090} cy={580} r={130} at={K1.mixed} freeze={K1.before} />
				<Sx x={1090} y={800} text="time since mixing" size={38} color={INK_SOFT} anchor="middle" hand at={K1.mixed + 10} />
				<Fade at={K1.notEq} out={K1.before + 30}>
					<Sx x={1400} y={420} text="not at equilibrium:" size={42} color={AMBER_INK} hand at={K1.notEq} />
					<Sx x={1400} y={470} text="the amounts will change" size={42} color={AMBER_INK} hand at={K1.change} />
				</Fade>
				<Chip x={1400} y={560} w={430} h={64} text="makes more HI?" size={42} at={K1.more} color={BLUE} out={K1.before + 30} />
				<Chip x={1400} y={650} w={430} h={64} text="breaks some HI down?" size={42} at={K1.brk} color={AMBER_INK} out={K1.before + 30} />
				<Ring cx={1090} cy={590} rx={168} ry={176} at={K1.before} color={AMBER_INK} seed={5} width={6} />
				<Fade at={K1.before + 10}>
					<Sx x={1090} y={900} text="a way to know before anything moves" size={44} color={INK} anchor="middle" hand at={K1.before + 10} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 2. Q is the K fraction with the numbers from now ----------
const Q = 'q-fraction';
const KQ = cues(sc(Q), {settled: 'settled values', same: 'same fraction', hi: 'hydrogen iodide squared', rightnow: 'in the tube right now', ornot: 'settled or not', name: 'reaction quotient', rules: 'same rules as K', powers: 'powers for coefficients', solids: 'solids and the solvent', eq: 'At equilibrium Q is K', other: 'At any other moment', any: 'Q can be any value'});
const qw = (k: number) => cw(Q, 'hydrogen iodide squared over hydrogen times iodine', k);
export const SceneQFraction: React.FC = () => {
	const f = useCurrentFrame();
	const KY = 430;
	const kNum: Term[][] = [[{t: 'HI', p: '2', at: qw(0), pAt: qw(2) , color: '#4a4f57'}]];
	const kDen: Term[][] = [[{t: 'H_2', at: qw(4), color: '#6b6358'}, {t: 'I_2', at: qw(6), color: '#5f2f94'}]];
	const qNum: Term[][] = [[{t: 'HI', p: '2', at: KQ.rightnow + 14, pAt: KQ.powers, pFrom: [hiPos[4].cx, EQ8.y - 14], color: '#4a4f57'}]];
	const qDen: Term[][] = [[{t: 'H_2', at: KQ.rightnow + 22, color: '#6b6358'}, {t: 'I_2', at: KQ.rightnow + 30, color: '#5f2f94'}]];
	const eqOn = prog(f, KQ.eq, 12);
	return (
		<>
			<Heading text="The reaction quotient, Q" at={4} size={62} />
			<Overlay>
				<EqStrip items={H2I2_EQ} x={EQ8.x} y={EQ8.y} size={EQ8.s} at={-100} />
				<GivensCard x={CARD8.x} y={CARD8.y} w={CARD8.w} h={cardH(4)} at={-100} lh={CARD8.lh} lines={[
					{text: 'K = 49 (about 450 °C)', at: -100},
					{text: 'now: [H_2] = 0.20 mol/L', at: -100},
					{text: 'now: [I_2] = 0.20 mol/L', at: -100},
					{text: 'now: [HI] = 0.50 mol/L', at: -100},
				]} />
				<Key8 at={-100} />
				<Tube x={TUBE8.x} y={TUBE8.y} w={TUBE8.w} h={TUBE8.h} counts={cst(4, 4, 10)} />
				{/* K: settled values only */}
				<FracX cx={990} cy={KY} size={62} num={kNum} den={kDen} barAt={KQ.same} prefix="K =" prefixAt={KQ.same} hold={300} />
				<Tag x={800} y={KY + 112} w={380} text="settled values only" at={KQ.settled} color={BLUE} size={34} />
				{/* Q: the same fraction with the values right now */}
				<FracX cx={1640} cy={KY} size={62} num={qNum} den={qDen} barAt={KQ.rightnow} prefix="Q =" prefixAt={KQ.rightnow} hold={300} />
				<Tag x={1470} y={KY + 112} w={340} text="values right now" at={KQ.rightnow + 20} color={AMBER_INK} size={34} />
				<DrawPath d="M345,780 C700,900 1500,900 1600,590" at={KQ.rightnow + 40} dur={36} color={AMBER_INK} width={6} />
				<DrawPath d="M1572,628 L1600,588 L1624,630" at={KQ.rightnow + 70} dur={10} color={AMBER_INK} width={6} />
				{/* the equals sign joins them only when settled */}
				<g opacity={eqOn}>
					<Sx x={1262} y={KY + 22} text="=" size={96} color="#0d6b52" anchor="middle" at={KQ.eq} />
				</g>
				<Fade at={KQ.eq + 8}>
					<Sx x={1262} y={KY - 70} text="only when settled" size={36} color="#0d6b52" anchor="middle" hand at={KQ.eq + 8} />
				</Fade>
				{/* name */}
				<Fade at={KQ.name - 4}>
					<rect x={780} y={650} width={620} height={190} rx={24} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
				</Fade>
				<Sx x={806} y={726} text="reaction quotient, Q" size={68} color={INK} hand at={KQ.name} />
				<Sx x={806} y={782} text="the K fraction with" size={34} color={INK_SOFT} at={KQ.name + 30} />
				<Sx x={806} y={824} text="the numbers from now" size={34} color={INK_SOFT} at={KQ.name + 36} />
				<Ring cx={1415} cy={KY - 22} rx={34} ry={46} at={KQ.powers + 22} out={KQ.solids} color={MINUS} seed={4} width={5} />
				<Fade at={KQ.solids} out={KQ.eq}>
					<Sx x={1170} y={900} text="same rules as K: no solids, no solvent" size={38} color={INK_SOFT} hand at={KQ.solids} />
				</Fade>
				<Fade at={KQ.any}>
					<Sx x={1200} y={900} text="any other moment: any value" size={42} color={AMBER_INK} hand at={KQ.any} />
				</Fade>
			</Overlay>
		</>
	);
};
void kf;
