// M7 P02 scenes 1 to 5: the hook (two clear liquids; one tube colourless, the other with an orange top layer), what the
// colour change means (bromine used up by addition; the fair pair), planning a fair test (matched volumes, a water
// control, shake, white tile, room light), the cyclohexene result (colourless; the layer lens; the addition model and the
// equation for bromine in an organic solvent) and the cyclohexane trap (the colour moved; read against the control).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {DrawPath, Overlay, PicH, Sx, TaskLine, VCard, smooth} from '../chem-m6-p02/parts';
import {AnswerChip, Crossed, Tag, TickMark} from '../chem-m7-c01/molecules';
import {AddModel, BROM, CT, Halo, Plus, RxArrow, dimAt, lerp, vis} from '../chem-m7-c04a/parts';
import {BRW, CONTROL, HOOD, LAYERS, PIPETTE, STOPPER, TILE, sc} from './common';
import {ANE, Bottle2, Drop, Dumb, ENE, GREENC, Lens, Ring6, SunX, Tube, tubePt} from './parts';

const INKS = '#6b6358';

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {here: 'Here are', ane: 'cyclohexane', ene: 'cyclohexene.', shake: 'Shake each', vanish: 'vanishes.', other: 'In the other', layer: 'layer', how: 'So how'});
const T1 = [{cx: 980, top: 330, h: 380}, {cx: 1300, top: 330, h: 380}];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const dimB = dimAt(f, K1.vanish, 0.45);
	return (
		<Overlay>
			<TaskLine text="Gone, or just moved?" at={K1.how} size={58} y={130} />
			<g opacity={dimB}>
				<Bottle2 cx={260} top={420} h={330} name="cyclohexane" formula="C_6H_12" edge={ANE} at={K1.ane} />
				<Bottle2 cx={500} top={420} h={330} name="cyclohexene" formula="C_6H_10" edge={ENE} at={K1.ene} />
				<g opacity={dimAt(f, K1.shake, 0.4)}>
					<Ring6 cx={260} cy={330} r={46} at={K1.ane + 6} width={4} />
					<Ring6 cx={500} cy={330} r={46} at={K1.ene + 6} ene width={4} />
				</g>
			</g>
			<PicH p={TILE} x={860} y={560} h={260} />
			<Tube p={BRW.orange} to={LAYERS.top} swap={K1.other + 10} cx={T1[0].cx} top={T1[0].top} h={T1[0].h} at={K1.shake - 10} shake={K1.shake + 50} label="cyclohexane" labelColor={ANE} />
			<Tube p={BRW.orange} to={LAYERS.clear} swap={K1.vanish} cx={T1[1].cx} top={T1[1].top} h={T1[1].h} at={K1.shake - 10} shake={K1.shake + 50} label="cyclohexene" labelColor={ENE} />
			<Drop a={[260, 430]} b={[T1[0].cx, 360]} at={K1.shake + 4} />
			<Drop a={[500, 430]} b={[T1[1].cx, 360]} at={K1.shake + 14} />
			{[0, 1].map(i => <g key={i} opacity={vis(f, K1.shake + 32, K1.vanish - 10)}><PicH p={STOPPER} x={T1[i].cx - 26} y={lerp(200, T1[i].top - 20, smooth(prog(f, K1.shake + 32, 14)))} h={42} /></g>)}
			<Tag x={1300} y={770} text="colour gone" at={K1.vanish + 10} size={28} color={ENE} fill="#dff2ef" anchor="middle" />
			{(() => { const a = tubePt(T1[0], LAYERS.top, 0.5, 0.3); return f >= K1.layer ? <DrawPath d={`M${a[0] + 46},${a[1]} A46,50 0 1 1 ${a[0] + 45},${a[1] - 4}`} at={K1.layer} dur={16} color="#c98a1b" width={5} /> : null; })()}
			<Tag x={T1[0].cx - 70} y={560} text="decolourised?" at={K1.layer + 10} size={28} anchor="end" />
			{void K1.here}
		</Overlay>
	);
};

// ---------- 2. What the colour change means ----------
const K2 = cues(sc('what-it-means'), {seen: "You've seen", orange: 'gets its', adds: 'Bromine adds', used: 'used up', alkane: 'An alkane', dark: 'in the dark', fair: 'fair pair', double: 'one double bond'});
export const SceneMeaning: React.FC = () => {
	const f = useCurrentFrame();
	const sp = smooth(prog(f, K2.used, 24));
	const dimTop = dimAt(f, K2.fair, 0.4);
	return (
		<Overlay>
			<g opacity={dimTop}>
				<CT x={140} y={200} text="C=C + Br_2 → addition product" size={44} color="#8f897f" at={K2.adds} plain />
				<Tag x={860} y={170} text="last video" at={K2.adds} size={22} />
				<Sx x={1150} y={214} text="C=C" size={44} color={ENE} weight={800} at={K2.used - 20} />
				<Dumb x={1330 - 40 * sp} y={200} s={1.6} o={vis(f, K2.used - 20) * (1 - prog(f, K2.used + 30, 20))} />
				<Tag x={1240} y={250} text="Br_2 used up → colour gone" at={K2.used + 10} size={26} color={BROM} fill="#f6e2d3" anchor="middle" />
				<CT x={140} y={330} text="alkane: no C=C → nothing adds (dark)" size={40} color="#8f897f" at={K2.alkane} plain />
				<Tag x={860} y={300} text="last video" at={K2.alkane} size={22} />
			</g>
			<Ring6 cx={700} cy={660} r={130} at={K2.fair} />
			<Ring6 cx={1220} cy={660} r={130} at={K2.fair + 8} ene pulse={K2.double} />
			<Sx x={700} y={860} text="cyclohexane" size={34} color={ANE} anchor="middle" weight={800} at={K2.fair} />
			<Sx x={1220} y={860} text="cyclohexene" size={34} color={ENE} anchor="middle" weight={800} at={K2.fair + 8} />
			{f >= K2.double ? <DrawPath d={`M${1276 + 62},${562} A62,62 0 1 0 ${1276 + 61},${556}`} at={K2.double} dur={16} color={ENE} width={5} /> : null}
			<Tag x={1480} y={520} text="one C=C: the only difference" at={K2.double + 10} size={28} color={ENE} fill="#dff2ef" />
			<TickMark x={960} y={700} at={K2.double + 20} s={1.6} />
			<Sx x={960} y={780} text="fair pair" size={34} color={GREENC} anchor="middle" hand at={K2.double + 24} />
			{void K2.seen}{void K2.orange}{void K2.dark}
		</Overlay>
	);
};

// ---------- 3. Planning a fair test ----------
const K3 = cues(sc('fair-test'), {now: 'Now plan', matched: 'matched', water: 'plain water', control: 'as a control', diluted: "it's diluted", stopper: 'Stopper each', ten: 'ten seconds', tile: 'white tile', sun: 'sunlight,', bright: 'because bright'});
const T3 = [520, 770, 1020];
export const SceneFairTest: React.FC = () => {
	const f = useCurrentFrame();
	const px = lerp(T3[0], T3[2], smooth(Math.min(1, Math.max(0, (f - K3.matched - 20) / 280)))) - 30;
	const pipO = vis(f, K3.matched, K3.stopper);
	const tileG = vis(f, K3.tile, K3.sun);
	return (
		<Overlay>
			<TaskLine text="Plan a fair test" at={K3.now} size={54} y={130} />
			<PicH p={HOOD} x={300} y={150} h={860} o={0.22} />
			<g opacity={1}>
				<PicH p={TILE} x={420} y={600} h={260} />
				{tileG > 0.01 ? <rect x={440} y={700} width={660} height={110} rx={10} fill="#fffef6" opacity={0.6 * tileG} /> : null}
			</g>
			{T3.map((x, i) => <Tube key={i} p={BRW.orange} cx={x} top={420} h={300} at={K3.now + 10 + i * 6} shake={K3.stopper + 30 + i * 4} label={['cyclohexene', 'cyclohexane', 'control (water)'][i]} labelColor={[ENE, ANE, i === 2 && f >= K3.water ? '#26231f' : INKS][i]} />)}
			{pipO > 0.01 ? <g opacity={pipO}><PicH p={PIPETTE} x={px} y={210 + 8 * Math.sin(f * 0.2)} h={220} /></g> : null}
			{T3.map((x, i) => <g key={'s' + i} opacity={vis(f, K3.stopper + i * 4)}><PicH p={STOPPER} x={x - 22} y={lerp(240, 400, smooth(prog(f, K3.stopper + i * 4, 14)))} h={36} /></g>)}
			<g opacity={vis(f, K3.ten - 30, K3.tile)}>
				<rect x={1080} y={300} width={110} height={56} rx={14} fill="#fffdf8" stroke={INKS} strokeWidth={2.5} />
				<Sx x={1135} y={340} text={`${Math.min(10, Math.max(0, Math.round((f - (K3.ten - 30)) / 6)))} s`} size={32} color="#26231f" anchor="middle" weight={800} at={-1000} />
			</g>
			<Tag x={960} y={790} text="same dilution, nothing to react with" at={K3.diluted} out={K3.stopper} size={24} anchor="middle" />
			<VCard x={1250} y={180} w={620} h={420} title="Method" titleAt={K3.matched} at={K3.matched} lines={[
				{t: '2.0 mL bromine water (same bottle)', at: K3.matched + 20, size: 27},
				{t: '+ 1.0 mL sample', at: K3.matched + 40, size: 27},
				{t: 'control: 1.0 mL water instead', at: K3.control, size: 27},
				{t: 'stopper; shake 10 s', at: K3.stopper + 30, size: 27},
				{t: 'white tile behind: faint colour shows', at: K3.tile, size: 27},
				{t: 'normal room light; read at once', at: K3.sun, size: 27, weight: 800},
			]} />
			<SunX x={1160} y={250} at={K3.sun - 10} cross={K3.sun + 10} />
			<Tag x={1250} y={630} text="bright light: slow alkane reaction (scene 6)" at={K3.bright} size={24} />
			{void Halo}{void Plus}
		</Overlay>
	);
};

// ---------- 4. The cyclohexene result ----------
const K4 = cues(sc('alkene-result'), {first: 'Cyclohexene first', within: 'within seconds', opens: 'double bond opens', used: 'used up', one: 'One possible', name: 'two-dibromocyclohexane,', water: 'In water,', organic: 'organic solvent', two: 'two reactants', product: 'one product', addition: 'addition.'});
export const SceneAlkene: React.FC = () => {
	const f = useCurrentFrame();
	const dimUp = dimAt(f, K4.organic, 0.35);
	return (
		<Overlay>
			<TaskLine text="Cyclohexene + bromine water" at={K4.first} size={50} y={130} color={ENE} />
			<g opacity={dimUp}>
				<Tube p={BRW.orange} to={LAYERS.clear} swap={K4.within} cx={230} top={250} h={380} at={0} label="cyclohexene" labelColor={ENE} />
				<Tag x={230} y={700} text="colourless: both layers" at={K4.within + 20} size={26} color={ENE} fill="#dff2ef" anchor="middle" />
				<Lens cx={560} cy={420} r={140} at={K4.opens - 20} out={K4.organic} mode="react" act={K4.used - 20} ene />
				<AddModel T={{drift: K4.one, dock: K4.name, tet: K4.name + 40}} cx={1080} cy={420} u={130} />
				<Sx x={1080} y={250} text="model: the two C=C carbons" size={26} color={INKS} anchor="middle" weight={700} at={K4.one} />
				<Tag x={1380} y={560} text="bromine water: one possible product;" at={K4.name} size={24} />
				<Tag x={1380} y={610} text="other colourless addition products can form" at={K4.water} size={24} />
			</g>
			<Ring6 cx={300} cy={830} r={70} at={K4.organic} ene />
			<Plus x={450} y={830} at={K4.organic + 6} />
			<CT x={560} y={845} text="Br–Br" size={44} anchor="middle" at={K4.organic + 6} />
			<RxArrow x1={680} x2={980} y={830} at={K4.organic + 10} above={[{t: 'Br_2 in an organic solvent', at: K4.organic + 14}]} below={[{t: 'room temperature, no catalyst', at: K4.organic + 20}]} />
			<Ring6 cx={1150} cy={830} r={70} at={K4.two - 10} labs={[{i: 0, t: 'Br'}, {i: 1, t: 'Br'}]} />
			<Sx x={1150} y={990} text="1,2-dibromocyclohexane" size={28} color={BROM} anchor="middle" weight={800} at={K4.two} />
			<CT x={1420} y={845} text="C_6H_10 + Br_2 → C_6H_10Br_2" size={30} color="#8f897f" at={K4.two + 10} plain />
			<Tag x={1520} y={920} text="1 product" at={K4.product} size={30} color={ENE} fill="#dff2ef" />
			<Tag x={1700} y={920} text="addition" at={K4.addition} size={30} color={ENE} fill="#dff2ef" />
		</Overlay>
	);
};

// ---------- 5. The cyclohexane trap ----------
const K5 = cues(sc('alkane-trap'), {now: 'Now cyclohexane', trap: 'trap.', top: 'top layer.', nonpolar: 'non-polar,', moves: 'moves up', pale: 'goes pale', moved: 'moved, not', disappeared: 'disappeared.', control: 'the control.', clearly: 'clearly orange', dilution: "dilution can't", still: 'still there', no: 'No reaction'});
const T5 = {cx: 760, top: 300, h: 460};
export const SceneTrap: React.FC = () => {
	const f = useCurrentFrame();
	const top = tubePt(T5, LAYERS.top, 1, 0.3), low = tubePt(T5, LAYERS.top, 1, 0.7), lowL = tubePt(T5, LAYERS.top, 0, 0.7);
	return (
		<Overlay>
			<TaskLine text="Cyclohexane: the trap" at={K5.now} size={50} y={130} color={ANE} />
			<Tube p={BRW.orange} to={LAYERS.top} swap={K5.trap} cx={T5.cx} top={T5.top} h={T5.h} at={0} label="cyclohexane" labelColor={ANE} />
			<g opacity={vis(f, K5.top, K5.moves)}>
				<DrawPath d={`M${top[0] + 16},${T5.top + 0.18 * T5.h} l14,0 l0,${0.23 * T5.h} l-14,0`} at={K5.top} dur={12} color={INKS} width={4} />
				<Tag x={top[0] + 44} y={T5.top + 0.24 * T5.h} text="cyclohexane (less dense, doesn't mix)" at={K5.top} size={24} />
				<Tag x={top[0] + 44} y={T5.top + 0.24 * T5.h + 50} text="from the properties video: floats on water" at={K5.top + 8} size={20} />
			</g>
			<Lens cx={1280} cy={460} r={150} at={K5.nonpolar} out={K5.moved} mode="move" act={K5.moves} />
			<Tag x={1280} y={660} text="like dissolves like: non-polar Br_2 → non-polar layer" at={K5.moves} out={K5.moved} size={24} anchor="middle" />
			<Crossed x={1060} y={low[1] - 30} text="decolourised?" at={K5.moved} cross={K5.disappeared} note="colour moved, not used up" size={30} o={dimAt(f, K5.clearly, 0.45)} />
			<Tube p={CONTROL} cx={380} top={T5.top} h={T5.h} at={K5.control} label="control: same dilution" />
			<g opacity={vis(f, K5.clearly)}>
				<DrawPath d={`M${420},${lowL[1]} C${520},${lowL[1] + 70} ${620},${lowL[1] + 70} ${lowL[0] + 6},${lowL[1]}`} at={K5.clearly} dur={18} color={INKS} width={4} dash="8 6" />
				<Sx x={560} y={lowL[1] + 100} text="same dilution, much paler" size={26} color={INKS} anchor="middle" hand at={K5.clearly + 10} />
			</g>
			<g opacity={vis(f, K5.dilution)}>
				<DrawPath d={`M${top[0] + 30},${low[1]} C${top[0] + 110},${low[1] - 60} ${top[0] + 110},${top[1] + 30} ${top[0] + 30},${top[1]}`} at={K5.dilution} dur={18} color="#c98a1b" width={4} />
				<Sx x={top[0] + 130} y={(top[1] + low[1]) / 2} text="so it moved here" size={28} color="#c98a1b" hand at={K5.dilution + 10} />
			</g>
			<AnswerChip x={1040} y={830} text="no reaction: bromine still there" at={K5.no} size={36} />
			{void K5.pale}{void K5.still}
		</Overlay>
	);
};
