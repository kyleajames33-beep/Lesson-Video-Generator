// P01 (Biology practical) scenes 10 to 12: the assessment card. What the models represent well (each row pen-linked to
// its piece on the bench: tab shapes, colours, the ribosome window beside the real ribosome, the tRNA card), the
// limitations and what each one hides (enzyme jobs, the missing twist with the real helix, a scale bar that runs off
// screen, direction not enforced, no folding), and one improvement per limit (3' end only, enzyme job cards, a twist).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AC, AMBER_INK, AcText, AssessFrame, BeadChain, CH, ColourKey, Cross, DrawPath, GREYT, GreyTag, Heading, INK, INK_SOFT, MiniLadder, MistakeChip, NCard, NEWC, ORIG, Overlay,
	PLP, PaperRibo, PenLink, PlainArrow, PlateB, QMark, QUESTION, S, Snap, StrandArrow, Sx, TEAL, Tick, TrnaCard, HB, acCell, lerp, prog, pulse, Bench,
} from './shared';

const NARROW = 650;
const rowPt = (col: number, row: number): [number, number] => {
	const [x, y] = acCell(col, row);
	return [x - 12, y + 22];
};

// ---------- 10. Assess: what the models represent well ----------
const K10 = cues(S('assess-strengths'), {assess: 'Now assess the models', well: 'represent well', tab: 'The tab shapes show', colours: 'The colours show', window: 'The ribosome window shows', threes: 'read in threes', orange: 'the orange cards show', links: 'each one links a codon'});
export const ROWS_WELL = [['pairing rule', '(tab shapes)'], ['one original strand', 'kept (colours)'], ['code read in threes', '(window)'], ['tRNA links codon', 'to amino acid']];
export const SceneStrengthsP01: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K10.tab, K10.colours, K10.window, K10.orange];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Bench w={NARROW} />
				<AssessFrame at={K10.assess} hotCol={f >= K10.well ? 0 : -1} />
				{ROWS_WELL.map((r, i) => <AcText key={i} col={0} row={i} lines={r} at={at[i]} color={TEAL} />)}
				{/* bench pieces */}
				<g transform="translate(190,400) scale(1.3)" opacity={prog(f, K10.assess, 12)}>
					<NCard x={0} y={-CH} face="down" l="A" c="blue" ring={pulse(f, K10.tab, 40)} />
					<NCard x={0} y={CH} face="up" l="T" c="blue" ring={pulse(f, K10.tab, 40)} />
					<HB x={0} y={0} l="A" />
				</g>
				<g opacity={prog(f, K10.assess + 6, 12)}>
					<MiniLadder x={330} y={320} w={330} h={34} top={ORIG} bot={NEWC} />
					<MiniLadder x={330} y={410} w={330} h={34} top={NEWC} bot={ORIG} />
					<Sx x={495} y={490} text="two copies" size={26} color={INK_SOFT} weight={700} anchor="middle" />
				</g>
				<PaperRibo cx={230} cy={720} w={250} o={prog(f, K10.assess + 12, 12)} hot={pulse(f, K10.threes, 40)} />
				<Sx x={230} y={860} text="card ribosome" size={22} color={INK_SOFT} weight={700} anchor="middle" at={K10.assess + 12} />
				<PlateB p={PLP.riboReal} cx={430} cy={715} w={150} o={prog(f, K10.window, 14)} />
				<Sx x={430} y={820} text="real ribosome" size={22} color={INK_SOFT} weight={700} anchor="middle" at={K10.window + 8} />
				<TrnaCard cx={610} cy={705} w={140} anti="UAC" bead="red" o={prog(f, K10.assess + 18, 12)} tabGlow={pulse(f, K10.links, 40)} />
				<PenLink a={[190, 400]} b={rowPt(0, 0)} at={K10.tab + 8} />
				<PenLink a={[660, 380]} b={rowPt(0, 1)} at={K10.colours + 8} />
				<PenLink a={[300, 700]} b={rowPt(0, 2)} at={K10.window + 8} />
				<PenLink a={[650, 640]} b={rowPt(0, 3)} at={K10.links} />
				<ColourKey />
			</Overlay>
		</>
	);
};

// ---------- 11. Assess: limitations ----------
const K11 = cues(S('assess-limits'), {
	limits: 'Then the limits', hands: 'Your hands did every job', enz: 'the enzymes that unzip DNA', flat: "It's flat", twist: 'the twist that has to unwind', tiny: "It's tiny",
	long: 'how long copying takes', thousands: 'thousands of bases', dir: 'grow in the right direction', oneway: 'cells build only one way', fold: 'folding into a working protein', order: 'why the order of amino acids matters',
});
export const ROWS_LIMIT = [['no enzymes: hides', 'who does each job'], ['flat: hides the twist', 'that must unwind'], ['12 base pairs: hides', 'how long copying takes'], ['direction not enforced:', 'hides one-way building'], ['no folding: hides', 'why order matters']];
export const SceneLimitsP01: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K11.hands, K11.flat, K11.tiny, K11.dir, K11.fold];
	const dimAfter = (i: number) => 1 - 0.45 * prog(f, at[i + 1] ?? 1e9, 12);
	const stretch = prog(f, K11.long, 60);
	const wrong = prog(f, K11.dir + 10, 18);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Bench w={NARROW} />
				<AssessFrame hotCol={1} />
				{ROWS_WELL.map((r, i) => <AcText key={i} col={0} row={i} lines={r} at={-100} color={TEAL} o={0.55} />)}
				{ROWS_LIMIT.map((r, i) => <AcText key={i} col={1} row={i} lines={r} at={at[i]} color={AMBER_INK} />)}
				{/* 1. enzyme jobs */}
				<g opacity={prog(f, K11.hands, 12) * dimAfter(0)}>
					<MiniLadder x={110} y={300} w={300} h={34} />
					{[0, 1, 2].map(k => (
						<g key={k}>
							<circle cx={460 + k * 76} cy={317} r={30} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="7 6" />
							<QMark x={460 + k * 76} y={334} size={40} color={GREYT} />
						</g>
					))}
					<GreyTag x={110} y={356} text="helicase, DNA polymerase, RNA polymerase" at={K11.enz} size={18} />
				</g>
				{/* 2. flat against the real helix */}
				<g opacity={prog(f, K11.flat, 12) * dimAfter(1)}>
					<MiniLadder x={110} y={470} w={300} h={34} />
					<Sx x={110} y={540} text="model: flat" size={24} color={INK_SOFT} weight={700} />
					<PlateB p={PLP.helix} cx={lerp(760, 560, prog(f, K11.twist, 20))} cy={490} w={70} o={prog(f, K11.twist, 14)} />
					<Sx x={600} y={600} text="real: twisted" size={24} color={INK_SOFT} weight={700} anchor="middle" at={K11.twist + 10} />
				</g>
				{/* 3. scale bar running off screen */}
				<g opacity={prog(f, K11.tiny, 12) * dimAfter(2)}>
					<rect x={lerp(600, -2600, stretch)} y={650} width={lerp(60, 3260, stretch)} height={18} rx={9} fill="#ddd3c0" />
					<rect x={600} y={650} width={60} height={18} rx={9} fill={ORIG} />
					<Sx x={630} y={640} text="12" size={24} color={ORIG} weight={800} anchor="middle" />
					<Sx x={110} y={705} text="a real gene: thousands of bases" size={28} color={INK} hand at={K11.thousands} />
				</g>
				{/* 4. direction not enforced */}
				<g opacity={prog(f, K11.dir, 12) * dimAfter(3)}>
					<g transform="translate(250,760) scale(0.6)">
						{[0, 1, 2, 3].map(k => <NCard key={k} x={k * 84} y={0} face="down" l="" c="green" marks={false} />)}
						<NCard x={-84 - 160 * (1 - wrong)} y={0} face="down" l="" c="green" marks={false} o={wrong} />
					</g>
					<StrandArrow x1={250 - 21} x2={250 + 3 * 50 + 21} y={745} at={K11.dir} dir={1} size={22} />
					<QMark x={160} y={760} size={48} color={GREYT} o={prog(f, K11.oneway, 10)} />
					<Sx x={420} y={800} text="added at the wrong end" size={22} color={INK_SOFT} weight={600} at={K11.oneway} />
				</g>
				{/* 5. no folding */}
				<g opacity={prog(f, K11.fold, 12)}>
					<BeadChain x={150} y={880} cols={['red', 'gold', 'green']} r={18} />
					<ellipse cx={330} cy={880} rx={60} ry={34} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="6 6" />
					<PlainArrow x1={250} y1={880} x2={262} y2={880} at={K11.fold} />
					<GreyTag x={420} y={862} text="folding: next video" at={K11.order} size={20} />
				</g>
				<ColourKey />
			</Overlay>
		</>
	);
};

// ---------- 12. Improving the model ----------
const K12 = cues(S('improvements'), {impr: 'ends with improvements', three: 'Add new cards only at the three prime end', arrow: "following each strand's arrow", cells: 'as cells do', enzyme: 'labelled cards for each enzyme job', twist: 'twist the finished ladder', helix: 'show the helix', fixes: 'Each change fixes one limit', decor: 'not just decoration'});
const IMPS = [{row: 3, lines: ["add cards at the", "3' end only"]}, {row: 0, lines: ['enzyme job cards', '(unzip, build)']}, {row: 1, lines: ['twist the ladder', 'into a helix']}];
export const SceneImproveP01: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K12.three, K12.enzyme, K12.twist];
	const grow = prog(f, K12.cells, 16);
	const tw = prog(f, K12.twist + 6, 40);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Bench w={NARROW} />
				<AssessFrame hotCol={f >= K12.impr ? 2 : 1} />
				{ROWS_WELL.map((r, i) => <AcText key={i} col={0} row={i} lines={r} at={-100} color={TEAL} o={0.5} />)}
				{ROWS_LIMIT.map((r, i) => <AcText key={i} col={1} row={i} lines={r} at={-100} color={AMBER_INK} o={[0, 1, 3].includes(i) ? 1 : 0.5} />)}
				{IMPS.map((m, i) => <AcText key={i} col={2} row={m.row} lines={m.lines} at={at[i]} color={INK} />)}
				{IMPS.map((m, i) => {
					const [x, y] = acCell(2, m.row);
					return <PlainArrow key={'a' + i} x1={x - 40} y1={y + 40} x2={x - 10} y2={y + 40} at={K12.fixes + i * 6} color={AMBER_INK} width={4} />;
				})}
				{/* 3' end only */}
				<g opacity={prog(f, K12.three, 12)}>
					<g transform="translate(160,330) scale(0.7)">
						{[0, 1, 2].map(k => <NCard key={k} x={k * 84} y={0} face="down" l="" c="green" marks={false} />)}
						<NCard x={3 * 84 + 120 * (1 - grow)} y={0} face="down" l="" c="green" marks={false} o={prog(f, K12.cells - 4, 8)} />
						<NCard x={-84} y={-30} face="down" l="" c="green" marks={false} o={0.5 * prog(f, K12.arrow, 10)} rot={-8} />
					</g>
					<StrandArrow x1={160 - 25} x2={160 + 3 * 59 + 25} y={312} at={K12.arrow} dir={1} size={22} />
					<Tick x={390} y={420} at={K12.cells + 12} s={30} color={TEAL} />
					<Cross x={96} y={390} s={14} at={K12.arrow + 10} />
					<Sx x={420} y={430} text="3' end: allowed" size={24} color={TEAL} weight={700} at={K12.cells + 12} />
				</g>
				{/* enzyme job cards near a fork */}
				<g opacity={prog(f, K12.enzyme, 12)}>
					<MiniLadder x={110} y={540} w={240} h={34} />
					<path d="M350,540 L420,500 M350,574 L420,614" stroke={ORIG} strokeWidth={7} strokeLinecap="round" fill="none" />
					{['unzip', 'build DNA', 'build RNA'].map((t, k) => {
						const p = prog(f, K12.enzyme + 6 + k * 8, 14);
						return (
							<g key={t} transform={`translate(${lerp(700, 440 + k * 0, p)},${510 + k * 48})`} opacity={p}>
								<rect x={0} y={0} width={150} height={40} rx={8} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} />
								<text x={75} y={28} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 22}} fill={INK}>{t}</text>
							</g>
						);
					})}
				</g>
				{/* twist into a helix */}
				<g opacity={prog(f, K12.twist, 12)}>
					<MiniLadder x={140} y={720} w={440} h={70} top={ORIG} bot={NEWC} tw={tw} n={16} />
					<Sx x={360} y={830} text="twisted: a helix" size={26} color={INK_SOFT} weight={700} anchor="middle" at={K12.helix} />
				</g>
				<MistakeChip x={AC.x} y={888} text="the model is wrong because it's simplified" at={K12.decor - 20} cross={K12.decor} size={26} />
				<ColourKey />
			</Overlay>
		</>
	);
};
void DrawPath; void Snap; void INK_SOFT;
