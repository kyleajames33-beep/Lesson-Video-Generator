// Y11 Chem M2 V02 scene 1 (hook): M2 V01's final frame (the balanced magnesium equation, the balance with the ribbon
// at 0.24 g, the magnifier of magnesium atoms and the "Next" chip). V01's own handoff scene, imported read-only and
// frozen on its last frame, covers the first frames and fades out over an identical redraw built from V01's exported
// parts, so frame 0 is V01's final frame by construction. Then: the magnifier zooms and its atoms spill past the rim
// ("too many to count"); the ribbon lifts off and a single carbon atom drawn far larger than life sits on the pan
// with the display at 0.00 g ("too small to weigh"); the heading writes on "see".
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {G18, LENS18, NEXT18, SceneHandoff as V01Handoff} from '../chem-y11-m2-v01/s3';
import {EQ, dur as v01dur} from '../chem-y11-m2-v01/common';
import {EqLine, terms} from '../chem-y11-m2-v01/parts';
import {R, sc} from './common';
import {EL, Fade, Heading, INK, NAVY_T, PAPER, PenArrow, PenRing, Rich, SVG, Sx, Write, clamp01, prog, richW, span} from './parts';
import {BAL1, BalRibbon} from './s1';

const K1 = cues(sc('hook'), {last: 'Last time', so: 'So two magnesium', zero: 'zero point two four', but: 'But this', atoms: ['magnesium atoms', 2], nobody: 'Nobody', carbon: 'one carbon atom', mass: 'a mass of about', small: 'far too small', balance: 'balance', so2: 'So how do', see: 'see'});
/** The magnifier: a dense hexagonal field of pale green magnesium atoms; `zoom` 0..1 packs it tighter and lets atoms
 *  spill past the rim. */
const Lens1: React.FC<{zoom: number}> = ({zoom}) => {
	const f = useCurrentFrame();
	const {cx, cy, r} = LENS18;
	const s = 15 - 6 * zoom, ar = 6.4 - 2.4 * zoom;
	const dots: React.ReactNode[] = [];
	const spill = zoom * 1.0;
	const reach = r + spill * 120;
	for (let yy = -reach; yy <= reach; yy += s) for (let xx = -reach; xx <= reach; xx += s * 1.02) {
		const off = (Math.round((yy + reach) / s) % 2) * s * 0.5;
		const X = xx + off, Y = yy;
		const d = Math.hypot(X, Y);
		if (d > r - 10) {
			if (d > r + spill * 120 || zoom <= 0) continue;
			const k = Math.sin(X * 0.37 + Y * 0.91) * 0.5 + 0.5;
			const edge = (d - r) / (spill * 120 + 1);
			if (k < 0.35 + 0.6 * edge) continue;
			dots.push(<circle key={`${xx}-${yy}`} cx={cx + X + Math.sin(f * 0.2 + X) * 2} cy={cy + Y} r={ar} fill={EL.Mg} stroke="#5f8a52" strokeWidth={1.2} />);
			continue;
		}
		dots.push(<circle key={`${xx}-${yy}`} cx={cx + X} cy={cy + Y} r={ar} fill={EL.Mg} stroke="#5f8a52" strokeWidth={1.2} />);
	}
	return (
		<g>
			<line x1={G18.pan[0] + 80} y1={G18.pan[1] - 50} x2={cx - r * 0.7} y2={cy - r * 0.7} stroke={INK} strokeWidth={3} strokeDasharray="8 8" />
			<line x1={G18.pan[0] + 80} y1={G18.pan[1] - 10} x2={cx - r * 0.7} y2={cy + r * 0.7} stroke={INK} strokeWidth={3} strokeDasharray="8 8" />
			<circle cx={cx} cy={cy} r={r} fill={PAPER} stroke={INK} strokeWidth={6} />
			{dots}
			<circle cx={cx} cy={cy} r={r} fill="none" stroke={INK} strokeWidth={6} />
		</g>
	);
};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const zoom = span(f, K1.atoms, K1.atoms + 40);
	const lift = span(f, K1.carbon, K1.carbon + 24);
	const drop = span(f, K1.balance - 16, K1.balance + 2);
	const chipW = richW([{t: NEXT18}], 44) + 64;
	const pan = G18.pan;
	return (
		<SVG>
			{/* the board as V01 left it (redrawn) */}
			<Fade at={-1000} out={K1.see - 8}>
				<rect x={96} y={110} width={chipW} height={84} rx={22} fill={PAPER} stroke={NAVY_T} strokeWidth={4} />
				<Sx x={128} y={166} text={NEXT18} size={44} color={NAVY_T} weight={800} at={-1000} />
			</Fade>
			<Heading text="The mole: counting particles" at={K1.see} />
			<Fade at={-1000} out={K1.carbon - 6}>
				<EqLine x={1100} y={320} terms={terms(EQ.mg, [2, 1, 2], [], true)} nl={2} size={68} />
				<Sx x={1100} y={390} text="2 atoms : 1 molecule : 2 units of MgO" size={38} color={INK} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<PenRing cx={1100} cy={378} rx={330} ry={34} at={K1.so + 6} out={K1.carbon - 10} color={NAVY_T} seed={2} />
			<PenRing cx={G18.disp[0]} cy={G18.disp[1] + 8} rx={150} ry={62} at={K1.zero} out={K1.carbon} color={NAVY_T} seed={6} />
			<BalRibbon x={BAL1.x} y={BAL1.y} h={BAL1.h} text={f >= K1.balance - 4 ? '0.00 g' : '0.24 g'} ribbon={1 - lift} />
			<Sx x={G18.disp[0]} y={910} text="magnesium ribbon" size={34} color={INK} anchor="middle" weight={800} at={-1000} out={K1.carbon} />
			<Lens1 zoom={zoom} />
			<Write x={LENS18.cx + LENS18.r + 30} y={LENS18.cy + 10} text="how many atoms?" at={-1000} size={46} color={INK} />
			<Write x={LENS18.cx + LENS18.r + 30} y={LENS18.cy + 90} text="too many to count" at={K1.atoms + 16} size={46} color={NAVY_T} />
			<PenArrow a={[LENS18.cx + LENS18.r + 40, LENS18.cy + 110]} b={[LENS18.cx + 60, LENS18.cy + 80]} at={K1.nobody} color={NAVY_T} bend={-0.3} />
			{/* one carbon atom: far too small to weigh */}
			<Rich x={1100} y={330} segs={[{t: '1 carbon atom: '}, {t: R.cAtom, c: NAVY_T}]} size={56} anchor="middle" at={K1.mass} />
			{drop > 0.005 ? <circle cx={pan[0]} cy={pan[1] - 10 - (1 - drop) * 160} r={24} fill={EL.C} stroke="rgba(35,28,20,0.7)" strokeWidth={3} opacity={drop} /> : null}
			<Write x={1100} y={420} text="one carbon atom (drawn far too big to see)" at={K1.balance + 2} size={42} color={INK} anchor="middle" />
			<PenArrow a={[700, 430]} b={[pan[0] + 34, pan[1] - 18]} at={K1.balance + 10} color={INK} bend={0.25} />
			<PenRing cx={G18.disp[0]} cy={G18.disp[1] + 8} rx={150} ry={62} at={K1.balance + 4} color={INK} seed={3} />
			<Write x={G18.disp[0]} y={935} text="too small to weigh" at={K1.balance + 10} size={46} color={INK} anchor="middle" />
			{/* V01's frame itself, frozen on top for the first frames */}
			{f < 34 ? <Fade at={-1000} out={4} d={26}><Freeze frame={v01dur('handoff') - 1}><V01Handoff /></Freeze></Fade> : null}
			{void K1.last}{void K1.so}{void K1.but}{void K1.small}{void K1.so2}{void prog}
		</SVG>
	);
};
