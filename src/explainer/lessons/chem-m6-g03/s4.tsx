// M6 G03 scenes 5 and 6: the decision board (the four checks become a two-column board, each row lighting on its cue
// with its question badge; the "Next" chip with the methyl orange set) and the key notes hold.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {MOSET} from './assets';
import {AChip, Fade, INK, INK_SOFT, KeyNotesBoard, Note, Overlay, PicH, Sx, TEAL, vis} from './parts';
import {GLOW} from './board';

const KE = cues(sc('decision-board'), {so: 'So for any', full: 'Use the full', conc: 'concordant', go: 'Go known', bal: 'balanced equation', scale: 'scale up', pct: 'percentage by mass', masses: 'use masses', next: 'Next, which indicator'});
const ROWS = [
	{see: 'Standard from a solid', act: ['M includes ·xH_2O; c = (m ÷ M) ÷ V'], q: 'Q1', at: KE.full, lit: [KE.full, KE.conc]},
	{see: 'Titres', act: ['final − initial; concordant within 0.10 mL; rough out'], q: 'Q1', at: KE.conc, lit: [KE.conc, KE.go]},
	{see: 'Ratio', act: ['from the equation you write: CO_3^{2−} takes 2', '(to the methyl orange endpoint), HCO_3^{−} takes 1'], q: 'Q1, Q3', at: KE.bal, lit: [KE.go, KE.scale]},
	{see: 'Aliquot from a flask', act: ['× (flask volume ÷ aliquot volume)'], q: 'Q2, Q3', at: KE.scale, lit: [KE.scale, KE.pct]},
	{see: '% by mass', act: ['mass ÷ mass: liquid via density, solid via its weighed mass'], q: 'Q2, Q3', at: KE.pct, lit: [KE.pct, KE.next]},
];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const X0 = 96, X1 = 600, Y0 = 250, LH = 116;
	return (
		<>
			<Heading text="Titration calculations: follow the moles" at={4} size={52} />
			<Overlay>
				<Sx x={X0 + 24} y={Y0 - 30} text="Check" size={34} color={INK_SOFT} hand at={KE.so} />
				<Sx x={X1} y={Y0 - 30} text="What you do" size={34} color={INK_SOFT} hand at={KE.so} />
				{ROWS.map((r, i) => {
					const y = Y0 + i * LH;
					const g = vis(f, r.lit[0], r.lit[1], 10);
					return (
						<Fade key={i} at={r.at}>
							<rect x={X0} y={y} width={1728} height={LH - 16} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
							{g > 0.01 ? <rect x={X0} y={y} width={1728} height={LH - 16} rx={18} fill={GLOW} opacity={0.35 * g} /> : null}
							<Sx x={X0 + 24} y={y + 62} text={r.see} size={36} color={INK} hand at={r.at} />
							<Sx x={X1 - 56} y={y + 62} text="→" size={40} color={INK_SOFT} at={r.at + 4} />
							{r.act.map((a, k) => <Sx key={k} x={X1} y={y + (r.act.length > 1 ? 42 + k * 38 : 62)} text={a} size={r.act.length > 1 ? 30 : 32} color={INK} weight={700} at={r.at + 6} />)}
							<AChip x={1820 - 160} y={y + 26} text={r.q} size={26} color={TEAL} hand={false} at={r.at + 10} />
						</Fade>
					);
				})}
				<Note x={X1} y={Y0 + 5 * LH + 26} text="Results to the data's significant figures." size={32} color={TEAL} at={KE.masses} />
				<AChip x={X0} y={900} text="Next: which indicator fits a titration?" size={36} color={TEAL} hand={false} at={KE.next} />
				<Fade at={KE.next + 8}><PicH p={MOSET} x={1300} y={850} h={130} /></Fade>
			</Overlay>
		</>
	);
};

const NOTES = [
	'Standard from a solid: c = (m ÷ M) ÷ V. For a hydrate, M includes the water of crystallisation (H_2C_2O_4·2H_2O: 126.07 g/mol).',
	'Titre = final − initial reading. Leave out the rough run and any titre that does not agree with the others within 0.10 mL; average the concordant titres.',
	'Known to moles, ratio, unknown, with the ratio from a balanced equation: H_2C_2O_4 : NaOH = 1 : 2; HCl : NaOH = 1 : 1; NaHCO_3 : HCl = 1 : 1; Na_2CO_3 : HCl = 1 : 2 (to the methyl orange endpoint).',
	'Scale up from the aliquot: moles in flask = moles in aliquot × (flask volume ÷ aliquot volume); these are all the moles from the original sample.',
	'% by mass = mass of substance ÷ mass of sample × 100%. Liquid: mass of sample = density × volume. Solid: use its weighed mass.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={29} aidTop={730} aids={['Scale up from the aliquot.', 'Known to moles, ratio, unknown.']} tag="ratio from the balanced equation; volumes in litres; flask ÷ aliquot" />
);
void INK;
