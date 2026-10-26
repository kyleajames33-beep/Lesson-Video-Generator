// M7 P01 scenes 11 to 14: validity, reliability and accuracy (the repeats' spans; the probe checked against a calibrated
// thermometer; the ranking that matches the data book is agreement, not accuracy), the limits of the method, the risk
// assessment (substitution first, then controls and disposal) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {DrawPath, Overlay, PicH, RTable, Sx, TRead, VCard, picW, smooth} from '../chem-m6-p02/parts';
import {Crossed, Tag, TickMark} from '../chem-m7-c01/molecules';
import {PlateC, dimAt, vis} from '../chem-m7-c04a/parts';
import {GLASSES, GLOVES, HOOD, PROBE, STOPPER, THERMO_COLD, TUBE, WASTE, sc} from './common';
import {AgreeStrip} from './s2';
import {Bars, GREENC, HAZ, INK, INK_SOFT, NAMES, RUN_INK, SkelSmall, TEAL, Wisps} from './parts';

// ---------- 11. Validity, reliability, accuracy ----------
const K11 = cues(sc('validity-reliability'), {val: 'Validity', only: 'Only if', controls: 'the controls', rel: 'Reliability', agree: 'repeats agree', half: 'half a degree', acc: 'Accuracy', probe: 'probe reading', calib: 'calibrated', ranking: 'The ranking', agreement: "that's agreement"});
const TRIALS = [['5.8', '6.2', '6.0', '0.4'], ['2.3', '2.0', '2.4', '0.4'], ['0.7', '0.6', '0.8', '0.2']];
export const SceneValidity: React.FC = () => {
	const f = useCurrentFrame();
	const accO = vis(f, K11.acc + 10, K11.ranking);
	return (
		<Overlay>
			<VCard x={1100} y={150} w={760} h={220} title="Validity: measures what it should?" titleAt={K11.val} at={K11.val} dim={K11.rel} lines={[{t: 'Only chain length changes: straight chains;', at: K11.only, size: 27}, {t: 'same paper, soak time, start temperature, position', at: K11.controls, size: 27}]} />
			<VCard x={1100} y={390} w={760} h={170} title="Reliability: repeats agree?" titleAt={K11.rel} at={K11.rel} dim={K11.acc} lines={[{t: 'Each set spans 0.4 °C or less', at: K11.half, size: 30}]} />
			<VCard x={1100} y={580} w={760} h={220} title="Accuracy: close to the true value?" titleAt={K11.acc} at={K11.acc} lines={[{t: 'Check the probe against a calibrated', at: K11.calib, size: 28}, {t: 'thermometer.', at: K11.calib, size: 28}]} />
			<g opacity={vis(f, K11.rel + 20, K11.acc)}>
				{['trial 1', 'trial 2', 'trial 3', 'spread'].map((h, i) => <Sx key={i} x={420 + i * 150} y={330} text={h} size={26} color={INK_SOFT} anchor="middle" hand at={-1000} />)}
				{TRIALS.map((r, j) => (
					<g key={j}>
						<Sx x={130} y={410 + j * 90} text={NAMES[j]} size={32} color={RUN_INK[j]} weight={800} at={-1000} />
						{r.map((c, k) => <Sx key={k} x={420 + k * 150} y={410 + j * 90} text={k === 3 ? c + ' °C' : c} size={32} color={k === 3 ? TEAL : INK} anchor="middle" weight={k === 3 ? 900 : 600} at={k === 3 ? K11.half + j * 6 : -1000} />)}
						<g opacity={vis(f, K11.half + j * 6)}><DrawPath d={`M350,${420 + j * 90} L350,${430 + j * 90} L650,${430 + j * 90} L650,${420 + j * 90}`} at={K11.half + j * 6} dur={10} color={TEAL} width={3} /></g>
					</g>
				))}
			</g>
			<g opacity={accO}>
				<PicH p={PROBE} x={140} y={280} h={360} />
				<PlateC p={THERMO_COLD} cx={700} top={280} h={360} />
				<TRead x={140} y={680} text={() => '21.8 °C'} at={K11.acc + 10} sample="21.8 °C" />
				<TRead x={620} y={680} text={() => '21.8 °C'} at={K11.calib} sample="21.8 °C" />
				<TickMark x={520} y={710} at={K11.calib + 16} />
				<Sx x={700} y={790} text="calibrated thermometer" size={24} color={INK_SOFT} anchor="middle" weight={700} at={K11.calib} />
			</g>
			<AgreeStrip x={140} y={340} at={K11.ranking + 6} up={K11.ranking + 14} down={K11.ranking + 20} s={0.85} />
			<Tag x={1100} y={830} text="ranking matches the data book: agreement, not accuracy" at={K11.agreement} size={26} color={INK} fill="#fffdf8" />
			<Sx x={96} y={1040} text="Reliability means: repeated measurements under identical circumstances give similar results." size={22} color={INK_SOFT} weight={600} at={K11.half} out={K11.acc + 40} />
			{void K11.agree}{void K11.probe}{void picW}
		</Overlay>
	);
};

// ---------- 12. Limits ----------
const K12 = cues(sc('limits'), {compares: 'compares', isnt: "isn't a", forces: 'the forces', air: 'air flow', paper: 'paper holds', repeat: 'repeat.', straight: 'straight', branched: 'branched isomers'});
const Sleeve: React.FC<{x: number; y: number; wet: number; at: number}> = ({x, y, wet, at}) => {
	const f = useCurrentFrame();
	const v = vis(f, at);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<rect x={x - 10} y={y - 140} width={20} height={150} rx={8} fill="#c9cdd2" stroke={INK} strokeWidth={2.5} />
			<rect x={x - 18} y={y - 30} width={36} height={70} rx={6} fill="#fffdf8" stroke={INK} strokeWidth={2.5} />
			<ellipse cx={x} cy={y + 8} rx={14 * wet} ry={24 * wet} fill="#9cc8e6" opacity={0.75} />
		</g>
	);
};
export const SceneLimits: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<VCard x={980} y={190} w={880} h={330} title="Limits of the method" titleAt={K12.compares} at={K12.compares} lines={[
				{t: 'ΔT ranks evaporation: not a boiling point,', at: K12.compares + 8, size: 28},
				{t: 'not a force measurement', at: K12.forces, size: 28},
				{t: 'air flow, liquid on the paper: scatter → repeat', at: K12.repeat, size: 28},
				{t: 'conclusion: straight-chain alkanes only', at: K12.straight, size: 28, weight: 800},
			]} />
			<g opacity={dimAt(f, K12.air, 0.4)}>
				<Bars x={170} y={430} at={K12.compares} k={22} />
				<Sx x={560} y={300} text="ranks, does not measure" size={30} color={INK_SOFT} hand at={K12.isnt} />
			</g>
			<Sleeve x={250} y={680} wet={1} at={K12.paper} />
			<Sleeve x={420} y={680} wet={0.55} at={K12.paper + 8} />
			<Sx x={340} y={790} text="different wet patches" size={26} color={INK_SOFT} anchor="middle" weight={700} at={K12.paper + 10} />
			<g opacity={vis(f, K12.straight)}>
				<SkelSmall n={6} br={1} x={1060} y={720} dx={52} dy={30} at={K12.straight} color={INK_SOFT} />
				<Crossed x={1050} y={790} text="2-methylhexane" at={K12.straight} cross={K12.straight + 10} size={30} />
			</g>
			<Tag x={1500} y={790} text="branched: boils lower" at={K12.branched} size={28} />
		</Overlay>
	);
};

// ---------- 13. Risk assessment ----------
const K13 = cues(sc('risk-assessment'), {risk: 'risk assessment', highly: 'highly flammable', drift: 'drift', keep: 'keep flames', fume: 'fume cupboard', drowsy: 'drowsy', hexane: 'swapped out', nerves: 'nerves', glasses: 'safety glasses', small: 'small volumes', stoppered: 'stoppered', waste: 'organic waste', sink: 'never the sink'});
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	const tilt = smooth(prog(f, K13.waste + 12, 24)) * (1 - smooth(prog(f, K13.waste + 80, 20)));
	const drop = smooth(prog(f, K13.stoppered, 16));
	const wasteO = vis(f, K13.waste);
	const tubeX = 200 + 110 * tilt, tubeY = 600 - 70 * tilt;
	return (
		<Overlay>
			<Sx x={96} y={120} text="Risk assessment" size={54} color={INK} hand at={K13.risk} />
			<RTable x={640} y={150} cols={[360, 360, 460]} head={['Hazard', 'Harm', 'Control']} at={K13.risk} rowH={120} size={22} headSize={28} rows={[
				{at: K13.highly, cells: [['heptane, octane: H225 highly', 'flammable; nonane: H226', 'flammable'], ['fire; vapour can travel', 'to an ignition source'], ['no flames or hot plates in', 'the work area; fume cupboard']]},
				{at: K13.drowsy - 20, cells: ['vapour (H336)', 'drowsiness, dizziness', ['fume cupboard, sash low;', 'small volumes']]},
				{at: K13.glasses, cells: ['skin contact (H315)', 'skin irritation', ['safety glasses; gloves if', 'your school requires']]},
				{at: K13.small, cells: ['swallowed liquid (H304)', ['can be fatal if it', 'enters the airways'], ['never pipette by mouth;', 'stoppered tubes']]},
				{at: K13.waste, cells: [['waste (aquatic toxicity:', 'H400, H410)'], ['harms aquatic life; flammable', 'vapour in drains'], ['labelled organic waste', 'container; never the sink']]},
			]} />
			<g opacity={vis(f, K13.fume, K13.hexane)}><PicH p={HOOD} x={130} y={230} h={330} /></g>
			<g opacity={vis(f, K13.hexane, K13.glasses)}>
				<SkelSmall n={6} x={170} y={400} dx={56} dy={32} at={K13.hexane} color={INK_SOFT} />
				<DrawPath d="M160,350 L470,450 M470,350 L160,450" at={K13.hexane + 10} dur={12} color={HAZ} width={6} />
				<Sx x={315} y={500} text="hexane" size={30} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
			</g>
			<Tag x={640} y={830} text="Substitution first: hexane (H372: nerve damage with repeated exposure) → heptane, octane, nonane" at={K13.hexane} size={23} color={GREENC} fill="#e3f3e9" o={dimAt(f, K13.glasses, 0.45)} />
			<g opacity={vis(f, K13.glasses) * dimAt(f, K13.waste, 0.5)}>
				<PlateC p={GLASSES} cx={210} top={250} h={90} />
				<Tag x={210} y={360} text="always" at={K13.glasses} size={22} anchor="middle" />
				<PlateC p={GLOVES} cx={460} top={235} h={120} />
				<Tag x={460} y={360} text="if your school requires" at={K13.glasses} size={22} anchor="middle" />
			</g>
			<g opacity={vis(f, K13.small)}>
				<g transform={`rotate(${-70 * tilt} ${tubeX} ${tubeY + 80})`}><PlateC p={TUBE} cx={tubeX} top={tubeY} h={190} /></g>
				<g opacity={1 - prog(f, K13.waste, 10)}><PlateC p={STOPPER} cx={200} top={560 + 40 * drop - 60} h={44} o={prog(f, K13.stoppered - 10, 8)} /></g>
			</g>
			<g opacity={wasteO}>
				<PlateC p={WASTE} cx={450} top={520} h={250} />
				<Sx x={450} y={690} text="Organic" size={22} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={450} y={716} text="waste" size={22} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
			<Tag x={960} y={950} text="follow your school's risk assessment and each bottle's safety data sheet" at={K13.sink + 10} size={24} anchor="middle" />
			{void K13.drift}{void K13.keep}{void K13.nerves}
		</Overlay>
	);
};

// ---------- 14. Memory aid ----------
const K14 = cues(sc('memory-aid'), {longer: 'longer chain', more: 'More carbons', slower: 'slower', drop: 'temperature drop'});
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	return (
	<Overlay>
		<Sx x={960} y={300} text="Longer chain, smaller chill." size={92} color={TEAL} anchor="middle" hand at={K14.longer} />
		<Bars x={620} y={700} at={K14.more} k={40} w={90} gap={60} />
		{[0, 1, 2].map(i => (
			<g key={i}>
				<rect x={1250 + i * 170 - 8} y={560} width={16} height={110} rx={6} fill="#c9cdd2" stroke={INK} strokeWidth={2} opacity={vis(f, K14.slower)} />
				<Wisps x={1250 + i * 170} y={600} at={K14.slower} n={[4, 2, 1][i]} />
				<Sx x={1250 + i * 170} y={720} text={NAMES[i]} size={24} color={RUN_INK[i]} anchor="middle" weight={700} at={K14.slower} />
			</g>
		))}
		<Tag x={960} y={820} text="same series, straight chains, same conditions" at={K14.drop} size={30} anchor="middle" />
	</Overlay>
	);
};
