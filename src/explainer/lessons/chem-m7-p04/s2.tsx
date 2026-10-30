// M7 P04 scenes 8 to 12: testing the products (the evidence table fills one column at a time from the tube and litmus
// plates), validity (flask against distillate; known samples), reliability and accuracy (agreeing repeats; matching
// known samples and the still-head reading; the faint-red prompt), the risk assessment (one spoken row at a time, then
// the full table to read) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, RTable, Sx, TaskLine} from '../chem-m6-p02/parts';
import {CARDC, Tag, TickMark} from '../chem-m7-c01/molecules';
import {PlateC, dimAt, vis} from '../chem-m7-c04a/parts';
import {Plate} from '../chem-m7-c06/parts';
import {DICH, DISTIL, FEHL, GLASSES, HOOD, LITM, REFLUX, TOLL, WASTE, sc} from './common';
import {BigRow, GREENC, GREY, HAZ, INK, INK_SOFT, Ladder, NAVY, RED, TEAL, TEALD, Thumb} from './parts';

// ---------- the evidence table ----------
const TX = 140, COLS = [560, 380, 380, 380], RH = 180, TY = 210;
const cx = (c: number) => TX + COLS.slice(0, c).reduce((a, b) => a + b, 0);
const ROWS = [
	{n: 'propanal (1°, distil)', res: 'mirror + brick red → aldehyde'},
	{n: 'propanoic acid (1°, reflux)', res: 'red litmus → acid'},
	{n: 'propanone (2°)', res: 'no change → ketone'},
];
const HEAD = ["Tollens'", "Benedict's (or Fehling's)", 'blue litmus'];
const CELL = [[TOLL.mirror, FEHL.red, LITM.blue], [TOLL.clear, FEHL.blue, LITM.redEnd], [TOLL.clear, FEHL.blue, LITM.blue]];
export const EvTable: React.FC<{T: {at: number; cols: [number, number, number]; res: number; pulse?: number}; o?: number}> = ({T, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, T.at) * o;
	if (v <= 0.01) return null;
	const W = COLS.reduce((a, b) => a + b, 0);
	return (
		<g opacity={v}>
			<rect x={TX} y={TY} width={W} height={60 + ROWS.length * RH} rx={16} fill={CARDC} stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<rect x={TX} y={TY} width={W} height={60} rx={16} fill="#efe6d6" />
			{HEAD.map((h, c) => <Sx key={c} x={cx(c + 1) + COLS[c + 1] / 2} y={TY + 40} text={h} size={26} color={INK} anchor="middle" hand at={T.cols[c] - 10} />)}
			{ROWS.map((r, i) => {
				const y = TY + 60 + i * RH;
				const pl = T.pulse === undefined ? 0 : vis(f, T.pulse + i * 14, T.pulse + i * 14 + 30);
				return (
					<g key={i}>
						<path d={`M${TX + 10},${y} L${TX + W - 10},${y}`} stroke="rgba(60,45,20,0.15)" strokeWidth={2} />
						{pl > 0.01 ? <rect x={TX + 6} y={y + 6} width={W - 12} height={RH - 12} rx={12} fill="#f6d77a" opacity={0.35 * pl} /> : null}
						<Sx x={TX + 20} y={y + 72} text={r.n} size={28} color={INK} weight={800} at={T.at} />
						<Sx x={TX + 20} y={y + 120} text={r.res} size={24} color={TEALD} weight={800} at={T.res + i * 14} />
						{CELL[i].map((p, c) => <Thumb key={c} p={p} x={cx(c + 1) + 20} y={y + 12} w={COLS[c + 1] - 40} h={RH - 24} at={T.cols[c] + i * 6} />)}
					</g>
				);
			})}
		</g>
	);
};

// ---------- 8. Testing the products ----------
const K8 = cues(sc('testing-products'), {now: 'Now test', mirror: 'mirror', ben: "Benedict's", lit: 'Blue litmus', acid: 'acid', ket: 'The ketone', pattern: 'pattern'});
export const SceneTests: React.FC = () => (
	<Overlay>
		<TaskLine text="Test each distillate" at={K8.now} size={50} y={130} />
		<EvTable T={{at: K8.now + 10, cols: [K8.mirror, K8.ben, K8.acid], res: K8.pattern + 10, pulse: K8.pattern}} />
		<Sx x={TX} y={870} text="the starting alcohols turned the dichromate green; these tests tell the products apart" size={24} color={INK_SOFT} weight={600} at={K8.ket} />
		{void K8.lit}
	</Overlay>
);

// ---------- 9. Validity ----------
const K9 = cues(sc('validity'), {why: 'Why test', flask: 'flask', holds: 'still holds', red: 'red', chrom: 'coloured chromium', dist: 'Distilling carries', intended: 'intended', run: 'Run known', glucose: 'Glucose has', work: 'work', dilute: 'Dilute acid', water: 'water shows'});
export const SceneValidity: React.FC = () => {
	const f = useCurrentFrame();
	const top = dimAt(f, K9.run, 0.45);
	return (
		<Overlay>
			<TaskLine text="Is it valid? Test the distillate, not the flask" at={K9.why} size={46} y={130} />
			<g opacity={top}>
				<Plate p={REFLUX} cx={260} top={200} h={440} at={K9.flask} />
				<Sx x={120} y={680} text="flask: H₂SO₄ | chromium ions | organic product" size={22} color={INK} weight={700} at={K9.holds} />
				<Thumb p={LITM.blue} to={LITM.redEnd} swap={K9.red} x={400} y={360} w={170} h={130} at={K9.holds + 10} />
				<Tag x={400} y={510} text="red from the sulfuric acid, whatever formed" at={K9.red + 10} size={20} color={RED} fill="#f9e1dc" />
				<Tag x={400} y={560} text="chromium colour would hide Benedict's" at={K9.chrom} size={20} />
				<Plate p={DISTIL} cx={1090} top={240} h={300} at={K9.dist} />
				<Sx x={850} y={590} text="distillate: product and water, separated" size={22} color={TEALD} weight={800} at={K9.dist + 10} />
				<Sx x={850} y={620} text="from the sulfuric acid and chromium salts" size={22} color={TEALD} weight={800} at={K9.dist + 10} />
			</g>
			<g opacity={vis(f, K9.intended)}>
				<rect x={1420} y={220} width={440} height={200} rx={18} fill={CARDC} stroke={TEAL} strokeWidth={3.5} />
				<Sx x={1440} y={268} text="Validity: does the test" size={30} color={TEAL} hand at={-1000} />
				<Sx x={1440} y={306} text="measure what it was meant to?" size={30} color={TEAL} hand at={-1000} />
				<Sx x={1440} y={370} text="test the distillate, not the flask" size={24} color={INK} weight={700} at={K9.intended + 16} />
			</g>
			<g opacity={vis(f, K9.run)}>
				<rect x={120} y={700} width={1740} height={300} rx={18} fill={CARDC} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
				<Sx x={140} y={742} text="Known samples: each checks one test" size={28} color={INK_SOFT} hand at={-1000} />
				<Sx x={140} y={800} text="glucose (known aldehyde): Tollens' → mirror; Benedict's → brick red" size={26} color={INK} weight={700} at={K9.glucose} />
				<Thumb p={TOLL.mirror} x={1060} y={758} w={70} h={80} at={K9.work} />
				<Thumb p={FEHL.red} x={1130} y={758} w={70} h={80} at={K9.work + 6} />
				<Tag x={1220} y={772} text="glucose: a sugar with an aldehyde group, not a product here" at={K9.work + 10} size={18} />
				<Sx x={140} y={880} text="dilute acid: blue litmus → red" size={26} color={INK} weight={700} at={K9.dilute} />
				<Thumb p={LITM.redEnd} x={560} y={845} w={90} h={60} at={K9.dilute + 6} />
				<Sx x={140} y={960} text="water: no change in any test" size={26} color={INK} weight={700} at={K9.water} />
			</g>
		</Overlay>
	);
};

// ---------- 10. Reliability and accuracy ----------
const K10 = cues(sc('reliability-accuracy'), {rel: 'Reliability', repeat: 'repeat each', compare: 'compare with', agree: 'agree', acc: 'Accuracy here', match: 'Matching each', still: 'still-head', supports: 'supports', accurate: 'accurate'});
export const SceneReliable: React.FC = () => {
	const f = useCurrentFrame();
	const groups = ['group 1', 'group 2', 'group 3'];
	return (
		<Overlay>
			<TaskLine text="Reliable? Accurate?" at={K10.rel} size={50} y={130} />
			<g opacity={dimAt(f, K10.acc, 0.45)}>
				<rect x={120} y={210} width={760} height={420} rx={18} fill={CARDC} stroke={NAVY} strokeWidth={3.5} />
				<Sx x={144} y={264} text="Reliability: repeats agree?" size={38} color={NAVY} hand at={K10.rel} />
				{groups.map((g, i) => (
					<g key={i}>
						<Sx x={150} y={340 + i * 90} text={g} size={26} color={INK} weight={800} at={K10.compare + i * 8} />
						<Thumb p={TOLL.mirror} x={300} y={300 + i * 90} w={60} h={70} at={K10.compare + i * 8} />
						<Thumb p={FEHL.red} x={370} y={300 + i * 90} w={60} h={70} at={K10.compare + i * 8} />
						<Thumb p={LITM.redEnd} x={440} y={305 + i * 90} w={90} h={60} at={K10.compare + i * 8} />
						<Sx x={550} y={340 + i * 90} text="same pattern" size={24} color={INK_SOFT} weight={700} at={K10.compare + i * 8} />
						<TickMark x={790} y={330 + i * 90} at={K10.agree + i * 6} s={0.8} />
					</g>
				))}
			</g>
			<g opacity={vis(f, K10.acc)}>
				<rect x={960} y={210} width={900} height={420} rx={18} fill={CARDC} stroke={TEAL} strokeWidth={3.5} />
				<Sx x={984} y={264} text="Accuracy: is the product named correctly?" size={34} color={TEAL} hand at={-1000} />
				<Sx x={990} y={340} text="results match the known samples" size={28} color={INK} weight={700} at={K10.match} />
				<Sx x={990} y={410} text="still-head reading near the boiling point" size={28} color={INK} weight={700} at={K10.still} />
				<Sx x={990} y={450} text="(supports, not proof)" size={24} color={INK_SOFT} weight={600} at={K10.still + 10} />
				<Tag x={990} y={500} text="still head about 49 °C; propanal boils at 48 °C" at={K10.supports} size={24} color={NAVY} fill="#e7edf8" />
			</g>
			<g opacity={vis(f, K10.accurate - 10)}>
				<Thumb p={LITM.blue} x={980} y={680} w={130} h={100} at={-100} />
				<Thumb p={LITM.redEnd} x={980} y={680} w={130} h={100} at={-100} o={0.3} />
				<Tag x={1130} y={712} text="faint red on propanal? acid got in: check prompt distillation," at={-100} size={22} />
				<Tag x={1130} y={762} text="clean glassware, sample handling" at={-100} size={22} />
			</g>
			<Sx x={120} y={960} text="Validity: right test.   Reliability: repeats agree.   Accuracy: right name." size={26} color={INK_SOFT} weight={600} at={K10.supports + 20} />
		</Overlay>
	);
};

// ---------- 11. Risk assessment ----------
const K11 = cues(sc('risk'), {now: 'Now the risks', pot: 'Potassium', fume: 'fume cupboard', glasses: 'safety glasses', waste: 'waste', alc: 'The alcohols', flame: 'flame', tol: 'The teacher makes', expl: 'explosive', org: 'Organic residues', table: 'table'});
const FULL = [
	{cells: [['Potassium dichromate, Cr(VI): solid (H272, H301, H312, H314, H317,', 'H330, H334, H335, H340, H350, H360FD, H372, H410); working', 'solution ~0.1 mol L⁻¹ in ~1 mol L⁻¹ H₂SO₄, treated as Cr(VI)'], ['poisoning; burns; skin and breathing', 'allergy; may cause cancer, genetic', 'damage, harm fertility; harms waterways'], ['teacher demonstration only: teacher weighs,', 'makes the solution, runs every step in a fume', 'cupboard; nitrile gloves, glasses; wipe spills']]},
	{cells: [['Sulfuric acid, 1 mol L⁻¹, in the acidified dichromate', '(H290, H315, H319)'], ['skin and eye irritation;', 'corrodes metal'], ['safety glasses, gloves; rinse', 'splashes with plenty of water']]},
	{cells: [['Propan-1-ol, propan-2-ol, 2-methylpropan-2-ol, propanal,', 'propanone: highly flammable (H225); propanoic acid (H226)'], ['fire; vapour can reach', 'a flame or hot element'], ['no open flames; water bath or hotplate; small', 'volumes; bottles stoppered, away from heat;', 'warm solid 2-methylpropan-2-ol in the water bath']]},
	{cells: [['Propan-1-ol (H318, H336); propan-2-ol (H319, H336); propanone', '(H319, H336); 2-methylpropan-2-ol (H319, H332, H335, H336);', 'propanal (H302, H315, H318, H332, H335)'], ['eye injury; harmful if swallowed', 'or breathed in; irritated airways;', 'drowsiness'], ['safety glasses; propanal distilled in the', 'fume cupboard, receiver in ice; never', 'smell products as a test']]},
	{cells: [['Propanoic acid stock (H226, H314); dilute in the distillate'], ['skin and eye burns from the stock'], ['gloves, glasses']]},
	{cells: [["Tollens' reagent. Stock, teacher only: AgNO₃ (H272, H314, H410),", 'NaOH 1 mol L⁻¹ (H290, H314), ammonia 25% (H314, H335, H400);', 'fresh working reagent: classification depends on the recipe'], ['burns; on standing can', 'form an explosive solid'], ['teacher prepares it fresh, uses it at once,', 'warms tubes in a water bath only, disposes', 'of it at once as the school directs; never stored']]},
	{cells: [["Benedict's reagent (H319, H411)"], ['eye irritation; harms waterways'], ['safety glasses; heavy-metal waste']]},
	{cells: [['Hot water bath, hotplate, glassware'], ['burns, scalds; cracked glass;', 'pressure in a closed system'], ['never heat a sealed system; clamp securely;', 'anti-bumping granules; cool before handling']]},
	{cells: [['Waste'], ['chromium and silver poison', 'waterways; organics are flammable'], ['chromium: labelled heavy-metal waste; silver as', 'the school directs; organics: labelled organic', 'waste container; never the sink']]},
];
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	const spoken = 1 - prog(f, K11.table - 6, 14);
	return (
		<Overlay>
			<g opacity={spoken}>
				<Sx x={96} y={130} text="Risk assessment" size={54} color={INK} hand at={K11.now} />
				<Sx x={110} y={250} text="Hazard" size={32} color={HAZ} hand at={K11.pot} />
				<Sx x={720} y={250} text="Harm" size={32} color={INK} hand at={K11.pot} />
				<Sx x={1200} y={250} text="Control" size={32} color={GREENC} hand at={K11.pot} />
				<BigRow y={280} at={K11.pot} out={K11.alc} cells={[['potassium dichromate,', 'chromium(VI)'], ['toxic; can cause', 'cancer; allergies'], ['teacher only: fume cupboard,', 'gloves, safety glasses;', 'heavy-metal waste']]} />
				<BigRow y={280} at={K11.alc} out={K11.tol} cells={[['alcohols and products:', 'highly flammable'], ['fire'], ['water bath or hotplate;', 'never a flame']]} />
				<BigRow y={280} at={K11.tol} out={K11.org} cells={[["Tollens' reagent"], ['on standing can form', 'an explosive solid'], ['teacher makes it fresh,', 'uses it at once, never stores it']]} />
				<BigRow y={280} at={K11.org} cells={[['organic residues'], ['flammable; harm', 'waterways'], ['labelled organic waste', 'container; never the sink']]} />
				<g opacity={vis(f, K11.fume, K11.alc)}><PlateC p={HOOD} cx={300} top={520} h={260} /></g>
				<g opacity={vis(f, K11.glasses, K11.alc)}><PlateC p={GLASSES} cx={620} top={600} h={110} /><Tag x={620} y={730} text="always" at={K11.glasses} size={22} anchor="middle" /></g>
				<g opacity={vis(f, K11.waste, K11.alc)}>
					<PlateC p={WASTE} cx={960} top={520} h={300} />
					<Sx x={960} y={700} text="Heavy metal" size={20} color={INK} anchor="middle" weight={800} at={-1000} />
					<Sx x={960} y={724} text="waste: chromium" size={20} color={INK} anchor="middle" weight={800} at={-1000} />
				</g>
				<g opacity={vis(f, K11.flame, K11.tol)}><PlateC p={HOOD} cx={1500} top={520} h={300} /><Tag x={1500} y={840} text="distil propanal here" at={K11.flame} size={22} anchor="middle" /></g>
				<Tag x={1200} y={500} text="make fresh, use at once, never store" at={K11.expl} out={K11.org} size={26} color={HAZ} fill="#f6e2d3" />
				<g opacity={vis(f, K11.org)}>
					<PlateC p={WASTE} cx={960} top={520} h={300} />
					<Sx x={960} y={700} text="Organic" size={20} color={INK} anchor="middle" weight={800} at={-1000} />
					<Sx x={960} y={724} text="waste" size={20} color={INK} anchor="middle" weight={800} at={-1000} />
				</g>
				<Tag x={960} y={900} text="follow your school's risk assessment and each bottle's safety data sheet" at={K11.org + 20} size={24} anchor="middle" />
			</g>
			<RTable x={110} y={130} cols={[660, 420, 620]} head={['Hazard', 'Harm', 'Control']} at={K11.table} rowH={84} size={17} headSize={24} rows={FULL.map(r => ({at: K11.table, cells: r.cells, dimAt: 1e9}))} />
			<Tag x={1810} y={70} text="Pause to read or copy the full table" at={K11.table + 10} size={22} color={NAVY} fill="#e7edf8" anchor="end" />
			<Sx x={110} y={1000} text="Follow your school's risk assessment and each bottle's safety data sheet. Acidified permanganate is a possible alternative oxidant; check your school's rules." size={18} color={INK_SOFT} weight={600} at={K11.table + 10} />
		</Overlay>
	);
};

// ---------- 12. Memory aid ----------
const K12 = cues(sc('memory-aid'), {one: 'One line', green: 'Green', test: 'test says'});
export const SceneAid: React.FC = () => (
	<Overlay>
		<Sx x={120} y={300} text="Green says oxidised; the test says what." size={72} color={TEAL} hand at={K12.green} />
		<Plate p={DICH.green} cx={420} top={360} h={360} at={K12.green + 10} />
		<Sx x={420} y={770} text="green: oxidised" size={28} color={GREENC} anchor="middle" weight={800} at={K12.green + 10} />
		<Thumb p={TOLL.mirror} x={980} y={420} w={140} h={240} at={K12.test} />
		<Thumb p={FEHL.red} x={1140} y={420} w={140} h={240} at={K12.test + 6} />
		<Thumb p={LITM.redEnd} x={1300} y={480} w={240} h={160} at={K12.test + 12} />
		<Sx x={1240} y={770} text="the test on the distillate: what it is" size={28} color={TEALD} anchor="middle" weight={800} at={K12.test + 12} />
		<Sx x={120} y={900} text="Distil to catch the aldehyde, reflux to go all the way." size={32} color={INK_SOFT} hand at={K12.test + 30} />
		{void K12.one}{void GREY}
	</Overlay>
);
