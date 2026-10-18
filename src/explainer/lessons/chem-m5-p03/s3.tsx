import React from 'react';
import {useCurrentFrame} from 'remotion';
import {HandText, prog} from '../../kit';
import {cues} from '../../cues';
import {AMBER, AMBER_INK, Arrow, BigWell, Card, Chip, DBottle, Fade, Fills, INK, INK_SOFT, IonLabels, MistakeChip, Overlay, PEN, Pic, PicH, Plate, Sx, TEAL, Table, Tick, Well, dbW, matrixCells, picW, plateBox, wellR, wellXY} from './parts';
import type {PlateG, TRow} from './parts';
import {AN_INK, CAT_INK, GREEN, HAZ, Heading, sc} from './common';
import {DROPPER, GLASSES, GLOVES, PLATE_BLACK, WASTE} from './assets';
import {G} from './s1';

const RZ = 1180;

// ---------- 9. Validity, reliability and accuracy ----------
const V = 'validity-reliability';
const K9 = cues(sc(V), {same: 'The same three words', valid: "It's valid", one: 'tests one pair', partners: 'partners that always', solid: 'a solid can only', reliable: "It's reliable", repeated: 'repeated wells', groups: 'other groups', accurate: "it's accurate", match: 'observations match', black: 'a black background', clean: 'clean wells', fresh: 'fresh solutions'});
export const SceneValidity: React.FC = () => {
	const f = useCurrentFrame();
	const b = plateBox(G);
	const CW = 640;
	const mini = (y: number, at: number, label: string) => (
		<Fade at={at}>
			<Sx x={b.x} y={y + 8} text={label} size={26} color={INK_SOFT} hand at={-100} />
			{(['clear', 'clear', 'white', 'white', 'white'] as const).map((k, i) => {
				const cx = b.x + 160 + i * 66;
				return <g key={i}><circle cx={cx} cy={y} r={26} fill="#1f1f22" stroke="#c9d3da" strokeWidth={3} /><Well cx={cx} cy={y} r={23} kind={k} p={prog(f, at + i * 3, 14)} seed={i + 2} /></g>;
			})}
		</Fade>
	);
	return (
		<>
			<Heading text="Validity, reliability, accuracy" at={4} size={62} />
			<Overlay>
				<Plate g={G} pulse={K9.black} />
				<IonLabels g={G} rowsAt={-100} colsAt={-100} size={30} />
				<Fills g={G} cells={matrixCells(() => -100)} />
				<Card x={RZ} y={200} w={CW} h={250} at={K9.valid} stroke={TEAL} />
				<Sx x={RZ + 24} y={250} text="Validity: does it test what it claims?" size={30} color={TEAL} hand at={K9.valid} />
				<Sx x={RZ + 24} y={300} text="one pair per well;" size={27} weight={600} at={K9.one} />
				<Sx x={RZ + 24} y={340} text="always-soluble partners;" size={27} weight={600} at={K9.partners} />
				<Sx x={RZ + 24} y={380} text="a solid can only be the pair tested" size={27} weight={600} at={K9.solid} />
				<Sx x={RZ + 24} y={424} text="stock check done first" size={27} color={INK_SOFT} weight={600} at={K9.solid + 20} />
				<Arrow x1={RZ - 10} y1={290} x2={b.x + b.w - 30} y2={b.y + 40} at={K9.partners + 4} color={TEAL} width={4} />
				<Card x={RZ} y={480} w={CW} h={210} at={K9.reliable} stroke="#1f6fb2" />
				<Sx x={RZ + 24} y={530} text="Reliability: same result on repeats?" size={30} color="#1f6fb2" hand at={K9.reliable} />
				<Sx x={RZ + 24} y={580} text="repeat doubtful cells;" size={27} weight={600} at={K9.repeated} />
				<Sx x={RZ + 24} y={620} text="compare with other groups" size={27} weight={600} at={K9.groups} />
				{mini(920, K9.repeated + 6, 'repeat 1')}
				{mini(985, K9.repeated + 18, 'repeat 2')}
				<Sx x={b.x + 520} y={994} text="they agree" size={30} color="#1f6fb2" hand at={K9.groups} />
				<Card x={RZ} y={720} w={CW} h={260} at={K9.accurate} stroke={AMBER_INK} />
				<Sx x={RZ + 24} y={770} text="Accuracy: observations match what's there?" size={29} color={AMBER_INK} hand at={K9.accurate} />
				<Sx x={RZ + 24} y={820} text="black background;" size={27} weight={600} at={K9.black} />
				<Sx x={RZ + 24} y={860} text="clean wells; fresh solutions;" size={27} weight={600} at={K9.clean} />
				<Sx x={RZ + 24} y={900} text="compare with accepted results" size={27} weight={600} at={K9.fresh + 10} />
				{void K9.same}{void K9.match}
			</Overlay>
		</>
	);
};

// ---------- 10. The risk assessment ----------
const RA = 'risk-assessment';
const K10 = cues(sc(RA), {risk: 'the risk assessment', lead: 'Lead nitrate is', builds: 'builds up', unborn: 'unborn baby', silver: 'Silver nitrate stains', eyesS: 'can damage eyes', barium: 'Barium nitrate is', swallowed: 'harmful if swallowed', naoh: 'Sodium hydroxide can', glasses: 'wear safety glasses', drops: 'use only drops', pipette: 'never pipette by', wash: 'wash your hands', waste: 'Lead silver and barium waste', container: 'heavy-metal container', sink: 'down the sink', itself: 'is itself a control', tiny: 'tiny amounts'});
const RT = {x: 96, y: 210, rowH: 112};
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	const iconW = 110;
	const ry = (j: number) => RT.y + 58 + j * RT.rowH;
	const bottle = (j: number, band: string) => {
		const h = 92, w = dbW(h);
		return <DBottle x={RT.x + 10 + (iconW - w) / 2} y={ry(j) + (RT.rowH - h) / 2} h={h} at={-100} band={band} />;
	};
	const rows: TRow[] = [
		{at: K10.lead, cells: ['lead nitrate', ['toxic; builds up in the body;', 'may harm an unborn baby; eye damage'], ['drops only, gloves, glasses, wash hands;', 'follow school rules (some use a teacher', 'demo or supplied results)']], colors: [HAZ, INK, GREEN], icon: bottle(0, '#e2a63b')},
		{at: K10.silver, cells: ['silver nitrate', 'stains skin; damages eyes', 'gloves, glasses'], colors: [HAZ, INK, GREEN], icon: bottle(1, '#e2a63b')},
		{at: K10.barium, cells: ['barium nitrate', 'harmful if swallowed', 'never pipette by mouth; wash hands'], colors: [HAZ, INK, GREEN], icon: bottle(2, '#e2a63b')},
		{at: K10.naoh, cells: [['sodium hydroxide', '(and carbonate)'], 'eye damage or irritation', 'safety glasses'], colors: [HAZ, INK, GREEN], icon: bottle(3, '#8a5cc2')},
		{at: K10.waste, cells: ['Pb, Ag, Ba waste', 'heavy metals harm water life', ['labelled heavy-metal waste container,', 'never the sink']], colors: [HAZ, INK, GREEN], icon: <PicH key="w" p={WASTE} x={RT.x + 30} y={ry(4) + 10} h={92} />},
	];
	const sinkX = 1700, sinkY = ry(4) + 30;
	const pk = 0.13;
	return (
		<>
			<Heading text="The risk assessment" at={4} size={62} />
			<Overlay>
				<Table x={RT.x} y={RT.y} cols={[400, 560, 770]} head={['Hazard', 'Harm', 'Control']} headColors={[HAZ, INK, GREEN]} rows={rows} at={K10.risk} rowH={RT.rowH} size={26} headSize={30} iconW={iconW} />
				<Fade at={K10.glasses}>
					<Sx x={1310} y={150} text="always:" size={34} color={GREEN} hand at={K10.glasses} />
					<PicH p={GLASSES} x={1430} y={108} h={62} />
					<PicH p={GLOVES} x={1620} y={96} h={84} />
				</Fade>
				{/* crossed sink icon on the waste row */}
				<Fade at={K10.sink}>
					<path d={`M${sinkX - 46},${sinkY + 10} L${sinkX + 46},${sinkY + 10} L${sinkX + 34},${sinkY + 46} L${sinkX - 34},${sinkY + 46} Z`} fill="#e6eaee" stroke={INK} strokeWidth={3} />
					<path d={`M${sinkX + 20},${sinkY + 10} L${sinkX + 20},${sinkY - 14} Q${sinkX + 20},${sinkY - 26} ${sinkX + 8},${sinkY - 26} L${sinkX - 6},${sinkY - 26}`} fill="none" stroke={INK} strokeWidth={4} />
					<path d={`M${sinkX - 52},${sinkY - 30} L${sinkX + 52},${sinkY + 56} M${sinkX + 52},${sinkY - 30} L${sinkX - 52},${sinkY + 56}`} stroke="#c4432f" strokeWidth={6} strokeLinecap="round" />
				</Fade>
				{/* microscale is a control */}
				<Fade at={K10.itself}>
					<g transform={`translate(${RT.x},${ry(5) + 20})`}>
						<PicH p={PLATE_BLACK} x={0} y={0} h={1098 * pk} />
					</g>
					<path d={`M${RT.x + 300},${ry(5) + 14} L${RT.x + 300},${ry(5) + 120} Q${RT.x + 300},${ry(5) + 146} ${RT.x + 326},${ry(5) + 146} Q${RT.x + 352},${ry(5) + 146} ${RT.x + 352},${ry(5) + 120} L${RT.x + 352},${ry(5) + 14}`} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 6" />
				</Fade>
				<Sx x={RT.x + 400} y={ry(5) + 76} text="microscale: tiny amounts, tiny exposure, tiny waste" size={34} color={TEAL} hand at={K10.tiny} />
				<Chip x={RT.x + 400} y={ry(5) + 100} w={1000} h={52} text="follow your school's risk assessment and your teacher's method" size={28} color={TEAL} at={K10.tiny + 20} />
				{void K10.builds}{void K10.unborn}{void K10.eyesS}{void K10.swallowed}{void K10.drops}{void K10.pipette}{void K10.wash}{void K10.container}{void f}
			</Overlay>
		</>
	);
};

// ---------- 11. Memory aids ----------
const MA = 'memory-aid';
const K11 = cues(sc(MA), {two: 'Two lines', partners: 'Partners that always', any: 'any solid is', habit: 'the habit', predict: 'predict first', test: 'then test', explain: 'explain every mismatch'});
export const SceneAid: React.FC = () => {
	const step = (x: number, at: number, label: string, icon: React.ReactNode) => (
		<Fade at={at}>
			<rect x={x} y={640} width={480} height={250} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
			{icon}
			<Sx x={x + 240} y={860} text={label} size={40} color={TEAL} anchor="middle" hand at={at} />
		</Fade>
	);
	const dh = 150, dw = picW(DROPPER, dh);
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 190}}><HandText text="Partners that always dissolve:" at={K11.partners} size={74} cps={26} color={TEAL} /></div>
			<div style={{position: 'absolute', left: 96, top: 278}}><HandText text="any solid is the pair you're testing." at={K11.any} size={74} cps={26} color={TEAL} /></div>
			<Overlay>
				<Sx x={96} y={160} text="Two lines to keep" size={40} color={INK_SOFT} hand at={K11.two} />
				<Sx x={1250} y={250} text="Na^{+}  NO_3^{-}" size={48} color="#a39b8e" weight={800} at={K11.partners + 10} />
				<Sx x={1250} y={330} text="Pb^{2+}  I^{-}" size={48} color={AMBER_INK} weight={800} at={K11.any + 10} />
				<Sx x={1560} y={250} text="spectators" size={34} color={INK_SOFT} hand at={K11.partners + 20} />
				<Sx x={1560} y={330} text="the solid" size={34} color={AMBER_INK} hand at={K11.any + 20} />
				<Sx x={96} y={560} text="The habit" size={40} color={INK_SOFT} hand at={K11.habit} />
				{step(96, K11.predict, 'Predict first.', <g>{[0, 1, 2].map(i => <path key={i} d={`M${200},${700 + i * 36} L${380},${700 + i * 36}`} stroke="#9fb6c6" strokeWidth={3} />)}{[0, 1, 2].map(i => <path key={'v' + i} d={`M${230 + i * 60},${684} L${230 + i * 60},${790}`} stroke="#9fb6c6" strokeWidth={3} />)}<Sx x={250} y={732} text="ppt" size={26} color={PEN} anchor="middle" hand at={-100} /><Sx x={310} y={768} text="–" size={26} color={PEN} anchor="middle" hand at={-100} /></g>)}
				{step(620, K11.test, 'Test.', <PicH p={DROPPER} x={860 - dw / 2} y={665} h={dh} />)}
				{step(1144, K11.explain, 'Explain every mismatch.', <g>{[0, 1].map(i => <path key={i} d={`M${1244 + i * 170},${680} L${1256 + i * 170},${800} L${1350 + i * 170},${800} L${1362 + i * 170},${680}`} fill="#fffdf8" stroke={i ? '#1f6fb2' : AMBER_INK} strokeWidth={4} />)}</g>)}
				<Arrow x1={584} y1={765} x2={612} y2={765} at={K11.test} color={TEAL} width={5} />
				<Arrow x1={1108} y1={765} x2={1136} y2={765} at={K11.explain} color={TEAL} width={5} />
				<Sx x={96} y={990} text="same concentration and drops in every well; repeat anything doubtful" size={34} color={TEAL} hand at={K11.explain + 20} />
				{void AN_INK}{void CAT_INK}{void AMBER}{void Tick}{void BigWell}{void MistakeChip}{void Pic}{void wellR}{void wellXY}{void ({} as PlateG)}
			</Overlay>
		</>
	);
};
