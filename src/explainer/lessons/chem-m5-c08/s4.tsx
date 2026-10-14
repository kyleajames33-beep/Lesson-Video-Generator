import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {H2I2_EQ, PclLens} from '../chem-m5-c06/board';
import {Arrow, BARS8, BLUE, Bars8, BrokenEnd, CARD8, EQ8, EqStrip, Fade, GHOST8, KEY8, KMarker, LN, LitArrows, LogLine, Overlay, QKGap, QMarker, Ring, Sx, Tag, TEAL, Tick, Tube, TubeScale, TUBE8, cst, lx} from './parts';
import {HiCard, Key8} from './board';
import {Heading, kf, sc} from './common';

const H2K = '#6b6358', I2K = '#5f2f94', HIK = '#4a4f57';
const XK = lx(49);

// ---------- 8. Q equals K, and the two ends of the scale ----------
const E = 'q-equals-k';
const KE = cues(sc(E), {equals: 'If Q equals K', settled: 'settled tube', same: 'same rate', nothing: 'nothing changes overall', noteq: 'not mean equal concentrations', v10: ['0.10', 1], v70: '0.70', onlyR: 'only reactants', pcl: 'P C L five flask', zero: 'top of Q is zero', below: 'below any K', fwd: 'runs forward', onlyP: 'only products', bottom: 'bottom is zero', off: 'off the scale', above: 'above any K', rev: 'in reverse'});
export const SceneEquals: React.FC = () => {
	const f = useCurrentFrame();
	const xL = LN.x0 - 90, xR = LN.x1 + 80;
	const px = (ff: number) => kf(ff, [[KE.onlyR, XK], [KE.zero + 10, xL], [KE.onlyP + 4, xL], [KE.bottom + 14, xR]]);
	const label = (ff: number) => (ff < KE.onlyR + 4 ? 'Q = K' : ff < KE.onlyP + 8 ? 'Q = 0' : 'off the scale');
	const side = (ff: number): 'left' | 'right' | 'mid' => (ff < KE.onlyR + 4 ? 'mid' : ff < KE.onlyP + 8 ? 'right' : 'left');
	const lensL = prog(f, KE.onlyR + 6, 16) * (1 - prog(f, KE.rev + 80, 14));
	const lensR = prog(f, KE.onlyP + 6, 16);
	return (
		<>
			<Heading text="Q equals K" at={4} size={62} />
			<Overlay>
				<EqStrip items={H2I2_EQ} x={EQ8.x} y={EQ8.y} size={EQ8.s} at={-100} />
				<LitArrows items={H2I2_EQ} fwd={KE.same} rev={KE.same + 6} />
				<HiCard h="0.10" i="0.10" hi="0.70" />
				<Key8 at={-100} />
				<Tube x={TUBE8.x} y={TUBE8.y} w={TUBE8.w} h={TUBE8.h} counts={cst(2, 2, 14)} />
				<Fade at={KE.v10}>
					<Sx x={360} y={760} text="[H_2] = 0.10" size={38} color={H2K} at={KE.v10} />
					<Sx x={360} y={806} text="[I_2] = 0.10" size={38} color={I2K} at={KE.v10 + 6} />
					<Sx x={360} y={852} text="[HI] = 0.70" size={38} color={HIK} at={KE.v70} />
					<Sx x={360} y={900} text="mol/L" size={30} color={INK_SOFT} at={KE.v70} />
				</Fade>
				<LogLine at={-100} />
				<KMarker k={49} at={-100} label="K = 49" />
				<QMarker at={KE.equals} px={px} label={label} side={side} labelAt={KE.equals + 6} />
				<BrokenEnd side="left" at={KE.onlyR} />
				<BrokenEnd side="right" at={KE.onlyP} />
				<Fade at={-100} out={KE.onlyR}>
					<Bars8 fwd={5} rev={5} scale={12} at={KE.same - 6} eqAt={KE.same + 4} />
				</Fade>
				<Fade at={KE.noteq} out={KE.onlyR - 4}>
					<Sx x={1130} y={620} text="rates equal," size={50} color={TEAL} hand at={KE.noteq} />
					<Sx x={1130} y={680} text="not concentrations equal" size={50} color={AMBER_INK} hand at={KE.noteq + 8} />
				</Fade>
				{/* the two ends of the scale */}
				<g opacity={lensL}>
					<PclLens counts={() => ({n: 20, v: 0})} cx={960} cy={720} r={104} />
				</g>
				<Fade at={KE.onlyR + 14}>
					<Sx x={960} y={866} text="only reactants" size={40} color={BLUE} anchor="middle" hand at={KE.onlyR + 14} />
					<Sx x={960} y={902} text="top of Q is 0: Q below any K" size={32} color={INK_SOFT} anchor="middle" at={KE.zero} />
				</Fade>
				<Fade at={KE.below}>
					<Arrow x1={760} y1={LN.y + 200} x2={1250} y2={LN.y + 200} at={KE.below} color={BLUE} width={7} />
				</Fade>
				<g opacity={lensR}>
					<PclLens counts={() => ({n: 0, v: 20})} cx={1560} cy={720} r={104} />
				</g>
				<Fade at={KE.onlyP + 14}>
					<Sx x={1560} y={866} text="only products" size={40} color={AMBER_INK} anchor="middle" hand at={KE.onlyP + 14} />
					<Sx x={1560} y={902} text="bottom is 0: Q above any K" size={32} color={INK_SOFT} anchor="middle" at={KE.bottom} />
				</Fade>
				<Fade at={KE.above}>
					<Arrow x1={1800} y1={LN.y + 200} x2={1560} y2={LN.y + 200} at={KE.above} color={AMBER_INK} width={7} />
				</Fade>
				<Fade at={KE.rev + 20}>
					<Sx x={1000} y={196} text="Q chases K." size={92} color={TEAL} hand at={KE.rev + 20} />
				</Fade>
				<Tag x={700} y={920} w={1120} text="same temperature, same equation as written for Q and K" at={KE.settled} size={30} color={INK_SOFT} />
			</Overlay>
		</>
	);
};

// ---------- 9a. A disturbance changes Q, not K: adding hydrogen ----------
const D = 'disturbance';
const KD = cues(sc(D), {dist: 'disturbance videos', settled: 'settled tube', v10: ['0.10', 1], v70: '0.70', qis: 'where Q is forty-nine', same: 'same sealed tube', add: 'add 0.20', per: 'moles per litre of hydrogen', h30: '0.30', bottom: 'bottom of Q gets bigger', drops: 'Q drops', v049: '0.49', v030: '0.030', s16: 'about sixteen', below: 'below K', fo: 'Forward over reverse', n16: 'forty-nine over sixteen', three: 'about three', wins: 'forward reaction wins', uses: 'uses up some of the extra', right: 'shifts right'});
const LN49 = Math.log(49), LN16 = Math.log(0.49 / 0.03), LN24 = Math.log(24.4);
export const SceneDisturbance: React.FC = () => {
	const f = useCurrentFrame();
	const q = (ff: number) => Math.exp(kf(ff, [[KD.drops, LN49], [KD.drops + 26, LN16], [KD.right, LN16], [KD.right + 60, LN24]]));
	const counts = (ff: number) => [2 + Math.max(0, Math.min(4, Math.floor((ff - (KD.add + 6)) / 9) + 1)), 2, 14];
	const fwdU = (ff: number) => kf(ff, [[KD.fo, 5], [KD.fo + 30, 15]]);
	const lab = (ff: number) => (ff < KD.drops ? 'Q = 49' : `Q = ${q(ff).toFixed(1)}`);
	return (
		<>
			<Heading text="Add hydrogen: Q drops" at={4} size={60} />
			<Overlay>
				<EqStrip items={H2I2_EQ} x={EQ8.x} y={EQ8.y} size={EQ8.s} at={-100} />
				<LitArrows items={H2I2_EQ} fwd={KD.wins} />
				<HiCard h="0.10" i="0.10" hi="0.70" skipH />
				<Ring cx={CARD8.x + 280} cy={CARD8.y + 108 + CARD8.lh - 12} rx={262} ry={28} at={KD.h30 + 6} color="#f2a516" seed={3} width={5} />
				{/* the hydrogen line swaps from 0.10 to 0.30 */}
				<Sx x={CARD8.x + 28} y={CARD8.y + 108 + CARD8.lh} text="now: [H_2] = 0.10 mol/L" size={38} color={INK_SOFT} at={-100} out={KD.h30 - 6} weight={600} />
				<Sx x={CARD8.x + 28} y={CARD8.y + 108 + CARD8.lh} text="now: [H_2] = 0.30 mol/L" size={38} color="#1f8a5b" at={KD.h30} weight={600} />
				<Key8 at={-100} />
				<Tube x={TUBE8.x} y={TUBE8.y} w={TUBE8.w} h={TUBE8.h} counts={counts} />
				<Fade at={KD.add} out={KD.h30 + 40}>
					<Arrow x1={560} y1={780} x2={340} y2={800} at={KD.add} color={AMBER_INK} width={6} />
					<Sx x={360} y={740} text="add 0.20 mol/L H_2" size={34} color={AMBER_INK} hand at={KD.add + 6} />
				</Fade>
				<Tag x={BARS8.x0} y={524} w={520} text="same volume, same temperature" at={KD.same} color={INK_SOFT} size={30} />
				<LogLine at={-100} />
				<KMarker k={49} at={-100} label="K = 49" ring={KD.drops + 40} ringOut={KD.drops + 110} />
				<QMarker at={-100} value={q} label={lab} side="left" />
				<QKGap at={KD.drops + 20} qx={ff => lx(q(ff))} kx={XK} sign="<" signAt={KD.below} />
				<Fade at={-100} out={KD.fo - 6}>
					<Bars8 fwd={5} rev={5} scale={12} at={-100} eqAt={-100} />
				</Fade>
				<Bars8 fwd={fwdU(f)} rev={5} scale={12} at={KD.fo - 6} />
				<Fade at={KD.bottom}>
					<Ring cx={1250} cy={666} rx={150} ry={36} at={KD.bottom + 6} out={KD.v049} color={AMBER_INK} seed={5} width={5} />
				</Fade>
				<Sx x={1130} y={676} text="Q = 0.70^{2} ÷ (0.30 × 0.10)" size={40} at={KD.bottom} />
				<Sx x={1130} y={742} text="= 0.49 ÷ 0.030" size={44} at={KD.v049} />
				<Sx x={1450} y={742} text="= 16.3" size={50} color={TEAL} at={KD.s16} />
				<Sx x={1130} y={810} text="49 ÷ 16.3 = 3.0" size={52} color={TEAL} at={KD.n16} />
				<Sx x={1130} y={866} text="forward about 3 times faster" size={42} color={BLUE} hand at={KD.three} />
				<Fade at={KD.right}>
					<Arrow x1={1130} y1={920} x2={1420} y2={920} at={KD.right} color={BLUE} width={8} />
					<Sx x={1450} y={934} text="shifts right" size={50} color={BLUE} hand at={KD.right + 6} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 9b. K stays the same ----------
const U = 'k-unchanged';
const KU = cues(sc(U), {out: 'Taking out some hydrogen iodide', add: 'adding hydrogen iodide', above: 'above K', left: 'sends it left', never: 'K never changed', still: 'it is still forty-nine', only: 'changes Q only', temp: 'Only a change of temperature', later: 'later video'});
export const SceneKUnchanged: React.FC = () => {
	const counts = (ff: number) => [2, 2, Math.round(kf(ff, [[KU.out, 14], [KU.out + 36, 7], [KU.add - 20, 7], [KU.add - 6, 14], [KU.add + 6, 14], [KU.add + 50, 20]]))];
	return (
		<>
			<Heading text="K stays the same" at={4} size={62} />
			<Overlay>
				<EqStrip items={H2I2_EQ} x={EQ8.x} y={EQ8.y} size={EQ8.s} at={-100} />
				<LitArrows items={H2I2_EQ} fwd={KU.out + 30} fwdOut={KU.add - 10} rev={KU.add + 20} />
				<HiCard h="0.10" i="0.10" hi="0.70" />
				<Key8 at={-100} />
				<Tube x={TUBE8.x} y={TUBE8.y} w={TUBE8.w} h={TUBE8.h} counts={counts} />
				<Fade at={KU.out} out={KU.add - 24}>
					<Sx x={360} y={760} text="take out HI" size={40} color={BLUE} hand at={KU.out} />
				</Fade>
				<Fade at={KU.add}>
					<Sx x={360} y={760} text="add HI" size={40} color={AMBER_INK} hand at={KU.add} />
				</Fade>
				<LogLine at={-100} />
				<KMarker k={49} at={-100} label="K = 49" ring={KU.never} ringOut={KU.never + 90} />
				<QMarker at={KU.out + 14} value={12.25} ghost label="Q = 12.25" side="left" labelAt={KU.out + 20} />
				<QMarker at={KU.add + 8} value={100} ghost label="Q = 100" side="right" labelAt={KU.add + 14} />
				<Fade at={KU.out + 30}>
					<Arrow x1={lx(12.25) - 60} y1={LN.y + 210} x2={lx(12.25) + 90} y2={LN.y + 210} at={KU.out + 30} color={BLUE} width={7} />
				</Fade>
				<Fade at={KU.above}>
					<Arrow x1={lx(100) + 100} y1={LN.y + 210} x2={lx(100) - 50} y2={LN.y + 210} at={KU.above} color={AMBER_INK} width={7} />
				</Fade>
				<Fade at={KU.out + 20}>
					<Sx x={1130} y={620} text="take out HI: Q = 12.25, below K, runs right" size={38} color={BLUE} at={KU.out + 20} />
				</Fade>
				<Fade at={KU.add + 14}>
					<Sx x={1130} y={680} text="add HI: Q = 100, above K, runs left" size={38} color={AMBER_INK} at={KU.add + 14} />
				</Fade>
				<Fade at={KU.never + 10}>
					<rect x={1110} y={730} width={700} height={100} rx={18} fill="#fffdf8" stroke={TEAL} strokeWidth={4} />
					<Sx x={1136} y={794} text="K = 49 all the time" size={56} color={TEAL} hand at={KU.never + 10} />
				</Fade>
				<Fade at={KU.only}>
					<Sx x={1130} y={880} text="adding or removing a substance: Q changes" size={36} color={INK_SOFT} at={KU.only} />
				</Fade>
				<Fade at={KU.temp}>
					<Sx x={1130} y={930} text="only temperature changes K (a later video)" size={36} color={AMBER_INK} at={KU.temp} />
				</Fade>
			</Overlay>
		</>
	);
};
void Tick; void Ring; void H2K; void I2K; void HIK; void Tag;
