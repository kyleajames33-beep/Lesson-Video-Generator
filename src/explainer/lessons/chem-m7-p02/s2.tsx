// M7 P02 scenes 6 to 10: the light demonstration (the orange top layer as the sample; dark against UV light; litmus over
// both tubes; the swap docker on the ring and the substitution equation), what the result can and cannot tell you,
// variables, validity, reliability and accuracy, the risk assessment and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {DrawPath, Overlay, PicH, RTable, Sx, TaskLine, VCard, picW, smooth} from '../chem-m6-p02/parts';
import {Brace, MULTI, Skel, Tag, TickMark, zig} from '../chem-m7-c01/molecules';
import type {Bond, V2} from '../chem-m7-c01/molecules';
import {Box, CT, PlateC, Plus, RxArrow, dimAt, lerp, vis} from '../chem-m7-c04a/parts';
import {FreeAtom, UV, UVWaves, UV_SOFT} from '../chem-m7-c04b/parts';
import {BRW, CONTROL, GLASSES, GLOVES, HEX, HOOD, LAMP, LAYERS, LITMUS, PIPETTE, WASTE, sc} from './common';
import {ANE, Clock, ENE, GREENC, Ring6, Tube, ring6} from './parts';

const INKS = '#6b6358';

// ---------- 6. Light demonstration ----------
const K6 = cues(sc('light-demo'), {so: 'So can', light: 'light,', teacher: 'In a teacher', take: 'take that', dark: 'In the dark', stays: 'stays orange', uv: 'Under a', fades: 'slowly fades', damp: 'damp blue', red: 'red.', strip: 'A strip', less: 'far less', hbr: "That's hydrogen", acidic: 'acidic gas', subst: 'substitution:', give: 'give bromocyclohexane', hbr2: ['H Br', 1]});
const TL = {cx: 720, top: 330, h: 300}, TD = {cx: 1180, top: 330, h: 300};
export const SceneLight: React.FC = () => {
	const f = useCurrentFrame();
	const up = dimAt(f, K6.subst, 0.3);
	const dip = smooth(prog(f, K6.take, 40));
	const pipX = lerp(240, 980, smooth(prog(f, K6.take + 40, 50)));
	const litW = picW(LITMUS.blue, 70);
	const slide = smooth(prog(f, K6.damp, 24));
	const red = prog(f, K6.red, 20);
	const ring = ring6(300, 840, 64);
	const hPos: V2 = [ring[1][0] + 52, ring[1][1] - 30];
	return (
		<Overlay>
			<Tag x={96} y={110} text="teacher demonstration, fume cupboard" at={K6.teacher} size={26} />
			<g opacity={up}>
				<PicH p={HOOD} x={380} y={150} h={720} o={0.2} />
				<Tube p={LAYERS.top} cx={220} top={330} h={300} at={0} out={K6.dark + 20} label="top layer from scene 5" />
				{vis(f, K6.take, K6.dark + 30) > 0.01 ? <g opacity={vis(f, K6.take, K6.dark + 30)}><PicH p={PIPETTE} x={pipX - 100} y={lerp(170, 230, dip)} h={200} /></g> : null}
				<rect x={TD.cx - 110} y={260} width={220} height={440} rx={24} fill="#2a2620" opacity={0.45 * vis(f, K6.dark)} />
				<Tube p={HEX.orange} to={HEX.faded} swap={K6.fades} swapDur={60} cx={TL.cx} top={TL.top} h={TL.h} at={K6.take + 60} label="bromine in cyclohexane" />
				<Tube p={HEX.orange} cx={TD.cx} top={TD.top} h={TD.h} at={K6.take + 70} label="kept in the dark" />
				<Tag x={TD.cx} y={720} text="dark: no change" at={K6.stays} size={24} anchor="middle" />
				<g opacity={vis(f, K6.uv)}><PlateC p={LAMP} cx={lerp(420, 470, smooth(prog(f, K6.uv, 20)))} top={420} h={90} /></g>
				<UVWaves a={[540, 470]} b={[TL.cx - 30, 470]} at={K6.uv + 10} out={K6.subst} />
				<Tag x={TL.cx} y={720} text="slow fade" at={K6.fades + 20} size={24} color={UV} fill={UV_SOFT} anchor="middle" />
				{[TL, TD].map((t, i) => (
					<g key={i} opacity={slide} transform={`translate(${(1 - slide) * 200},0)`}>
						<PicH p={LITMUS.blue} x={t.cx - litW / 2} y={t.top - 90} h={70} o={i === 0 ? 1 - red : 1} />
						{i === 0 ? <PicH p={LITMUS.red} x={t.cx - litW / 2} y={t.top - 90} h={70} o={red} /> : null}
					</g>
				))}
				<Tag x={TL.cx} y={200} text="acidic gas" at={K6.acidic} size={24} color="#b5502b" fill="#fbe9e2" anchor="middle" />
				<Brace x1={TL.cx} x2={TD.cx} y={220} dir={-1} text="lit: red; dark: little change → HBr, not just Br_2 vapour" at={K6.less} size={24} color={INKS} />
			</g>
			<Ring6 cx={300} cy={840} r={64} at={K6.subst} />
			<FreeAtom el="H" keys={[{at: -1, p: hPos}, {at: K6.give - 30, p: [hPos[0] + 30, hPos[1] - 60]}, {at: K6.hbr2 - 20, p: [1430, 840], dur: 26}]} at={K6.subst + 10} out={K6.hbr2 + 10} size={32} />
			<Plus x={440} y={840} at={K6.subst} />
			<CT x={560} y={855} text="Br–Br" size={40} anchor="middle" at={K6.subst} />
			<RxArrow x1={680} x2={920} y={840} at={K6.subst + 6} above={[{t: 'UV light', at: K6.subst + 10, color: UV, fill: UV_SOFT}]} />
			<Ring6 cx={1060} cy={840} r={64} at={K6.give - 10} labs={[{i: 1, t: 'Br'}]} />
			<Plus x={1250} y={840} at={K6.hbr2} />
			<CT x={1450} y={855} text="H–Br" size={40} anchor="middle" at={K6.hbr2} />
			<Box x={1370} y={800} w={160} h={80} at={K6.hbr2} color={UV} />
			<CT x={1060} y={980} text="C_6H_12 + Br_2 → C_6H_11Br + HBr" size={28} color="#8f897f" anchor="middle" at={K6.hbr2 + 10} plain />
			<Tag x={1600} y={930} text="2 products" at={K6.hbr2 + 10} size={28} color={UV} fill={UV_SOFT} />
			{void K6.so}{void K6.light}{void K6.strip}{void K6.hbr}{void BRW}{void CONTROL}
		</Overlay>
	);
};

// ---------- 7. What the result can and cannot tell you ----------
const K7 = cues(sc('limits'), {so: 'So what', triple: 'triple', slowly: 'more slowly', which: 'which.', no: 'No colour', hexene: 'hexene.', other: 'some other', quick: 'quick test'});
const ENE_P = (x: number, y: number): V2[] => zig(6, x, y, 46, 28);
const YNE_P = (x: number, y: number): V2[] => [[x, y], [x + 46, y], [x + 92, y], [x + 132, y - 26], [x + 178, y], [x + 218, y - 26]];
const B6 = (first: 1 | 2 | 3): Bond[] => Array.from({length: 5}, (_, i) => (i === 0 ? {a: 0, b: 1, order: first, color: first > 1 ? MULTI : undefined} : {a: i, b: i + 1}));
export const SceneLimits: React.FC = () => {
	const f = useCurrentFrame();
	const tiles = dimAt(f, K7.no, 0.35);
	return (
		<Overlay>
			<TaskLine text="What does colourless tell you?" at={K7.so} size={50} y={130} />
			<g opacity={tiles}>
				<Skel pts={ENE_P(160, 330)} bonds={B6(2)} at={K7.triple - 10} />
				<Sx x={280} y={410} text="hex-1-ene" size={28} color={ENE} anchor="middle" weight={800} at={K7.triple - 10} />
				<TickMark x={430} y={320} at={K7.triple + 4} />
				<Skel pts={YNE_P(560, 330)} bonds={B6(3)} at={K7.triple} />
				<Sx x={670} y={410} text="hex-1-yne" size={28} color={ENE} anchor="middle" weight={800} at={K7.triple} />
				<TickMark x={830} y={320} at={K7.triple + 10} />
				<Clock x={880} y={360} at={K7.slowly} />
				<Tag x={910} y={390} text="usually slower" at={K7.slowly} size={22} />
				<Brace x1={150} x2={800} y={280} dir={-1} text="but which? (the molecular formula decides)" at={K7.which} size={26} color={MULTI} />
			</g>
			<Tag x={500} y={560} text="C_6H_12" at={K7.hexene} size={32} color="#26231f" fill="#fffdf8" anchor="middle" />
			<Ring6 cx={300} cy={720} r={70} at={K7.hexene} />
			<Skel pts={ENE_P(560, 720)} bonds={B6(2)} at={K7.hexene + 6} />
			<Sx x={300} y={840} text="cyclohexane: no change" size={26} color={ANE} anchor="middle" weight={700} at={K7.hexene + 10} />
			<Sx x={680} y={840} text="hex-1-ene: decolourises" size={26} color={ENE} anchor="middle" weight={700} at={K7.hexene + 14} />
			<Tag x={500} y={880} text="same formula, different result" at={K7.hexene + 24} size={24} anchor="middle" />
			<VCard x={1100} y={200} w={760} h={420} title="Reading the result" titleAt={K7.so} at={K7.so} lines={[
				{t: 'colourless → C=C or C≡C', at: K7.triple + 10, size: 28},
				{t: 'alkynes too, usually more slowly (last video)', at: K7.slowly, size: 26},
				{t: "the test alone can't tell which", at: K7.which, size: 28},
				{t: 'no change → points to no C=C or C≡C', at: K7.no, size: 28},
				{t: 'a quick test: strong evidence, not proof', at: K7.quick, size: 28, weight: 800},
			]} />
			<Tag x={1100} y={650} text="other compounds too (e.g. phenols, some aldehydes)" at={K7.other} size={24} />
		</Overlay>
	);
};

// ---------- 8. Variables, validity, reliability, accuracy ----------
const K8 = cues(sc('validity-reliability'), {vars: 'the variables', hydro: 'hydrocarbon:', colour: 'colour', every: 'Everything else', val: 'Validity:', rel: 'Reliability:', acc: 'accuracy', known: 'known samples'});
export const SceneValidity: React.FC = () => {
	const f = useCurrentFrame();
	const xs = [150, 340, 530];
	return (
		<Overlay>
			<TaskLine text="Is it a fair test?" at={0} size={50} y={130} />
			<Tube p={LAYERS.clear} cx={xs[0]} top={330} h={300} at={0} label="cyclohexene" labelColor={ENE} />
			<Tube p={LAYERS.top} cx={xs[1]} top={330} h={300} at={0} label="cyclohexane" labelColor={ANE} />
			<Tube p={CONTROL} cx={xs[2]} top={330} h={300} at={0} label="control" />
			{xs.map((x, i) => <g key={i} opacity={vis(f, K8.rel)}>{[0, 1, 2].map(k => <rect key={k} x={x - 30 + k * 22} y={720} width={14} height={60} rx={6} fill={[ '#eef3f7', '#f6c98a', '#f4b45c'][i]} stroke="#26231f" strokeWidth={1.5} />)}</g>)}
			<Sx x={330} y={820} text="repeats: same result" size={24} color={INKS} anchor="middle" weight={700} at={K8.rel} />
			<VCard x={700} y={180} w={1160} h={360} title="Variables" titleAt={K8.vars} at={K8.vars} dim={K8.val} lines={[
				{t: 'Independent: the hydrocarbon (C=C or not)', at: K8.hydro, size: 28},
				{t: 'Dependent: colour of both layers', at: K8.colour, size: 28},
				{t: 'Controlled: volumes 1.0 mL + 2.0 mL, same bromine water,', at: K8.every, size: 28},
				{t: 'shake 10 s, room light, read at once', at: K8.every + 40, size: 28},
			]} />
			<VCard x={700} y={570} w={1160} h={84} title="Validity: one difference (C=C), plus a water control" titleAt={K8.val} at={K8.val} dim={K8.rel} lines={[]} />
			<VCard x={700} y={670} w={1160} h={84} title="Reliability: repeats give the same result" titleAt={K8.rel} at={K8.rel} dim={K8.acc} lines={[]} />
			<VCard x={700} y={770} w={1160} h={130} title="Accuracy: right answer? Check with known samples:" titleAt={K8.acc} at={K8.acc} lines={[{t: 'cyclohexene colourless, cyclohexane not', at: K8.known, size: 28}]} lh={10} />
			<Sx x={96} y={1040} text="Reliability means: repeated measurements under identical circumstances give similar results." size={22} color={INKS} weight={600} at={K8.rel} />
		</Overlay>
	);
};

// ---------- 9. Risk assessment ----------
const K9 = cues(sc('risk-assessment'), {risk: 'risk assessment', highly: 'highly flammable', vapour: 'their vapour', fume: 'fume cupboard.', brw: 'Bromine water', glasses: 'safety glasses', products: 'The products', waste: 'organic waste', sink: 'never the sink'});
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	const tilt = smooth(prog(f, K9.waste + 10, 24)) * (1 - smooth(prog(f, K9.waste + 70, 20)));
	return (
		<Overlay>
			<Sx x={96} y={120} text="Risk assessment" size={54} color="#26231f" hand at={K9.risk} />
			<RTable x={560} y={140} cols={[400, 400, 480]} head={['Hazard', 'Harm', 'Control']} at={K9.risk} rowH={104} size={20} headSize={28} rows={[
				{at: K9.highly, cells: [['cyclohexane, cyclohexene: highly', 'flammable liquid and vapour (H225)'], ['fire; vapour travels to an', 'ignition source'], ['no flames or hot plates near', 'them; fume cupboard']]},
				{at: K9.vapour, cells: [['cyclohexane vapour (H336); both:', 'H304; cyclohexene H302'], ['drowsiness; fatal if swallowed liquid', 'enters the airways; harmful if swallowed'], ['fume cupboard; small volumes; never', 'pipette by mouth (pipette filler)']]},
				{at: K9.brw, cells: ['dilute bromine water: bromine vapour', 'irritates eyes, skin and lungs', ['teacher dispenses in the fume', 'cupboard; safety glasses; gloves']]},
				{at: K9.glasses + 20, cells: ['stoppered tube of volatile liquid', ['pressure can push the stopper', 'out; splashes'], ['shake gently; release the stopper', 'pointing away, in the fume cupboard']]},
				{at: K9.products - 10, cells: [['UV lamp and hydrogen bromide', 'gas (demonstration only)'], ['UV: eye and skin damage; HBr:', 'corrosive, irritates the airways'], ['teacher only; shielded lamp;', 'inside the fume cupboard']]},
				{at: K9.waste, cells: [['waste: brominated products, leftover', 'hydrocarbons (H410, H411)'], ['harm to aquatic life; flammable', 'vapour in drains'], ['labelled organic waste container', '(halogenated); never the sink']]},
			]} />
			<g opacity={vis(f, K9.fume, K9.glasses)}><PicH p={HOOD} x={130} y={240} h={300} /></g>
			<g opacity={vis(f, K9.glasses) * dimAt(f, K9.waste, 0.5)}>
				<PlateC p={GLASSES} cx={200} top={250} h={80} />
				<PlateC p={GLOVES} cx={420} top={240} h={100} />
				<Tag x={310} y={360} text="always" at={K9.glasses} size={22} anchor="middle" />
			</g>
			<g opacity={vis(f, K9.waste)}>
				<g transform={`rotate(${-65 * tilt} ${200 + 100 * tilt} ${720})`}><PlateC p={LAYERS.clear} cx={200 + 100 * tilt} top={560 - 60 * tilt} h={200} /></g>
				<PlateC p={WASTE} cx={430} top={540} h={240} />
				<Sx x={430} y={700} text="Organic waste:" size={18} color="#26231f" anchor="middle" weight={800} at={-1000} />
				<Sx x={430} y={722} text="halogenated" size={18} color="#26231f" anchor="middle" weight={800} at={-1000} />
			</g>
			<Tag x={960} y={950} text="follow your school's risk assessment and each bottle's safety data sheet" at={K9.sink + 10} size={24} anchor="middle" />
			{void BRW}{void GREENC}
		</Overlay>
	);
};

// ---------- 10. Memory aid ----------
const K10 = cues(sc('memory-aid'), {gone: 'gone, not', both: 'gone from', moved: 'only moved', nothing: 'nothing reacted'});
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Sx x={960} y={260} text="Gone, not moved." size={96} color={ENE} anchor="middle" hand at={K10.gone} />
			<Tube p={LAYERS.clear} cx={640} top={360} h={360} at={K10.both} />
			<TickMark x={760} y={460} at={K10.both + 20} s={1.4} />
			<Tag x={640} y={760} text="used up: C=C or C≡C" at={K10.both + 20} size={28} color={ENE} fill="#dff2ef" anchor="middle" />
			<Tube p={LAYERS.top} cx={1280} top={360} h={360} at={K10.moved} />
			<g opacity={vis(f, K10.moved + 10)}><DrawPath d="M1340,600 C1390,560 1390,480 1340,440" at={K10.moved + 10} dur={16} color="#c98a1b" width={5} /><DrawPath d="M1420,430 L1480,490 M1480,430 L1420,490" at={K10.nothing} dur={10} color="#c4432f" width={6} /></g>
			<Tag x={1280} y={760} text="dissolved: no reaction" at={K10.nothing} size={28} anchor="middle" />
			<Tag x={960} y={860} text="check both layers, beside a control" at={K10.nothing + 20} size={30} anchor="middle" />
		</Overlay>
	);
};
