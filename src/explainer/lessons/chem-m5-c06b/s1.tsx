import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, prog} from '../../kit';
import {cues} from '../../cues';
import {Overlay, Ring, Sx} from '../chem-m5-c06/parts';
import {SceneSubstitute, SceneSolve} from '../chem-m5-c06/s3';
import {SceneCheck} from '../chem-m5-c06/s4';
import {Heading, cw, kf, sc} from './common';
import {COL_Y, CrossedGhost, TYPE_SPECS, TypeCard} from '../chem-m5-c06a/types';
import {AMBER_INK, INK_SOFT} from '../../kit';

// ---------- 1. Type three: nothing measured at equilibrium ----------
const H = 'hook';
const KH = cues(sc(H), {last: 'In the last video', was: 'That was type one', t3: 'type three', gives: 'The question gives you', nothing: 'nothing at equilibrium', novalue: 'no value to write', unknown: 'unknown'});
const k49 = cw(H, 'is 49', 1);
export const SceneHookB: React.FC = () => {
	const f = useCurrentFrame();
	const go = KH.t3;
	const S3 = 1.12, X3 = (1920 - 1400 * S3) / 2;
	const out = KH.unknown + 40;
	const c3 = {
		x: kf(f, [[go, 96], [go + 30, X3], [out, X3], [out + 30, 96]]),
		y: kf(f, [[go, COL_Y[2]], [go + 30, 300], [out, 300], [out + 30, 86]]),
		s: kf(f, [[go, 1], [go + 30, S3], [out, S3], [out + 30, 0.32]]),
	};
	return (
		<>
			<Heading text="Find the equilibrium concentrations" at={out + 36} size={58} />
			<Overlay>
				<TypeCard spec={TYPE_SPECS[0]} x={96} y={COL_Y[0]} at={2} out={go + 4} tick={k49 + 10} line2="0.70^{2} ÷ (0.10 × 0.10) = 49" line2At={KH.last + 30} line2Color={INK_SOFT} />
				<TypeCard spec={TYPE_SPECS[1]} x={96} y={COL_Y[1]} at={2} out={go + 4} tick={KH.was + 20} />
				<TypeCard spec={TYPE_SPECS[2]} x={c3.x} y={c3.y} s={c3.s} at={2} dim={1 - prog(f, go, 12)} lift={prog(f, go, 12)} opacity={1 - prog(f, out + 18, 14)}
					ringK={{at: KH.gives + 20, out: KH.nothing}} ringRow={{r: 2, at: KH.nothing, out: KH.unknown}} changeX={KH.unknown} />
				<Ring cx={665} cy={COL_Y[0] + 168} rx={270} ry={40} at={k49} out={go} color={AMBER} seed={3} />
				<CrossedGhost x={560} y={600} w={800} text="measured value into E: nothing measured" at={KH.novalue} out={KH.unknown + 10} />
				<Sx x={960} y={720} text="so the change is an unknown: x" size={50} color={AMBER_INK} anchor="middle" hand at={KH.unknown} out={out + 10} />
			</Overlay>
		</>
	);
};

// ---------- 4. Substitute (recorded take, as built) plus the equal-factors ring ----------
const SB = 'substitute';
const v2a = cw(SB, '0.45 minus x', 0, 2), bottom = cw(SB, 'the bottom is 0.45', 3);
export const SceneSubstituteB: React.FC = () => (
	<>
		<SceneSubstitute />
		<Overlay>
			<Ring cx={1300} cy={486} rx={300} ry={52} at={v2a + 56} out={bottom - 2} color={AMBER} seed={6} />
			<Sx x={1300} y={590} text="equal because H_2 and I_2 started equal" size={36} color={AMBER_INK} anchor="middle" hand at={v2a + 64} out={bottom + 40} />
		</Overlay>
	</>
);

// ---------- 5. Solve (recorded take, as built) ----------
export const SceneSolveB = SceneSolve;

// ---------- 6. Check (recorded take, as built) plus the callback tag ----------
const CK = 'check';
const r070 = cw(CK, '0.70', 0, 1);
export const SceneCheckB: React.FC = () => (
	<>
		<SceneCheck />
		<Overlay>
			<Sx x={1710} y={830} text="the type one tube" size={34} color={INK_SOFT} anchor="middle" hand at={r070 + 50} />
			<Sx x={1710} y={870} text="from the last video" size={34} color={INK_SOFT} anchor="middle" hand at={r070 + 56} />
		</Overlay>
	</>
);
