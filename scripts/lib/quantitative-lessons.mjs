import {hash, stringFields} from './science-audit.mjs';
import {removeMediaAndCues} from './science-corrections.mjs';
import {quantitativeRevision} from './quantitative-corrections.mjs';
import {countWords, estimateSpeechSeconds} from '../lesson-utils.mjs';

const bullets = (texts) => texts.map((text) => ({text}));
const rows = (scene) => scene.steps ?? scene.answerSteps ?? scene.points ?? scene.bullets?.map((item) => item.text) ?? [];

// These are removed from review drafts, never guessed as final narration cues.
export function removeSpeechCues(value) {
  if (Array.isArray(value)) return value.map(removeSpeechCues);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.entries(value).filter(([key]) => key !== 'beats' && !/(?:At|Beat)$/u.test(key))
    .map(([key, child]) => [key, removeSpeechCues(child)]));
}

export function integratedQuantitativeDraft(name, bytes) {
  const proposal = quantitativeRevision(name, bytes); // validates exact source hash
  const original = JSON.parse(bytes), draft = removeSpeechCues(removeMediaAndCues(structuredClone(original)));
  delete draft.introVoiceover;
  delete draft.productionRole;
  delete draft.productionNotes;
  const set = (id, copy, text) => {
    const scene = draft.scenes.find((item) => item.id === id);
    if (!scene) throw new Error(`Missing scene: ${id}`);
    Object.assign(scene, copy, {voiceover: {text}});
    return scene;
  };
  Object.assign(draft.scenes.find((scene) => scene.id === proposal.scene.id), removeSpeechCues(proposal.scene));
  const responses = {};
  const response = (id, prompt, answer, seconds, rationale) => {
    const scene = draft.scenes.find((scene) => scene.id === id);
    if (scene.type !== 'quickCheck') throw new Error('Response plan needs a quick-check scene');
    scene.voiceover = {text: `${prompt} ${answer}`};
    responses[id] = {promptText: prompt, answerText: answer, minimumThinkingSeconds: seconds, rationale,
      status: 'planning target; final silence and answer boundary must be measured from the assembled take'};
  };

  if (name.endsWith('empirical-molecular-formulas')) {
    draft.subtitle = 'From approximate composition to atom ratios and molecular formulas';
    draft.lessonIntent = 'Students can infer empirical and molecular formulas from composition and molar-mass data, retaining guard digits and checking the precision of the inference.';
    set('hook', {body: 'Glucose, formaldehyde and acetic acid share empirical formula CH₂O and similar mass percentages.',
      callout: 'Composition gives a ratio; molar mass is also needed for a molecular formula.', caption: 'Similar composition can belong to different molecular formulas and structures.'},
    'A sample is about forty percent carbon, six point seven percent hydrogen and fifty-three point three percent oxygen. Those approximate percentages fit several compounds, including glucose, formaldehyde and acetic acid. They share the empirical formula C H two O. Composition can suggest an atom ratio, but it does not identify a molecule. We need molar mass to infer a molecular formula, and further evidence to identify its structure.');
    set('concept', {body: 'Empirical formula gives the simplest atom ratio. Molecular formula gives atom counts per molecule.',
      callout: 'A molecular formula does not specify how the atoms are connected.', caption: 'CH₂O is a ratio; C₆H₁₂O₆ is a molecular formula, not a unique structure.'},
    'An empirical formula gives the simplest whole-number ratio of atoms. A molecular formula gives their actual counts in one molecule. Glucose has molecular formula C six H twelve O six and empirical formula C H two O. Formaldehyde has C H two O for both. Multiplying each empirical subscript by the same whole number gives a molecular formula. Even a molecular formula may describe several structures, so the calculation alone does not establish identity.');
    set('definition', {callout: 'State data precision before choosing a whole-number ratio.'},
    'Percentage composition is the mass of each element divided by total sample mass, multiplied by one hundred. On a one hundred gram calculation basis, the percentages become corresponding gram amounts. An empirical formula is the simplest whole-number atom ratio. A molecular formula gives counts in one molecule. Measurements are approximate, so retain guard digits and check whether a proposed ratio fits the precision of the data.');
    set('formula', {bullets: bullets(['Choose a 100 g calculation basis for percentage data.', 'Convert element masses to mole amounts using the supplied molar masses.',
      'Divide unrounded amounts by the smallest; inspect the ratio.', 'Use a small whole-number multiplier only when the data support it.']),
      secondary: 'M(molecular) ÷ M(empirical) gives the candidate subscript multiplier. Check consistency with the data.',
      caption: 'Calculation basis → unrounded mole amounts → ratio → justified integer multiplier.'},
    'Choose a one hundred gram basis, then convert each element mass to moles with the supplied values. Divide unrounded amounts by the smallest. A ratio near one to one point five may support two to three after multiplying both by two. One point three three may represent four thirds, requiring a multiplier of three. These are interpretations of approximate data, not instructions to erase every decimal. Use molar mass to find a consistent whole-number molecular multiplier.');
    set('worked-example', {question: 'A compound is approximately 40% C, 6.7% H and 53.3% O, with molar mass about 180 g mol⁻¹. Use C = 12.01, H = 1.008 and O = 16.00 g mol⁻¹ to infer empirical and molecular formulas.',
      coachNote: 'Use a 100 g basis and guard digits. These data infer a formula, not a unique compound identity.',
      steps: ['On a 100 g basis: C ≈ 40 g, H ≈ 6.7 g, O ≈ 53.3 g.',
        'n(C) ≈ 40 ÷ 12.01 ≈ 3.33056 mol; n(H) ≈ 6.7 ÷ 1.008 ≈ 6.64683 mol; n(O) ≈ 53.3 ÷ 16.00 ≈ 3.33125 mol.',
        'Using unrounded amounts: C : H : O ≈ 1 : 1.99571 : 1.00021, consistent with 1 : 2 : 1.',
        'Empirical formula CH₂O; calculation mass 12.01 + 2 × 1.008 + 16.00 = 30.026 g mol⁻¹ (30.03 reported).',
        '180 ÷ 30.026 ≈ 5.99480, consistent with multiplier 6; molecular formula C₆H₁₂O₆.',
        'Glucose has this formula, but other structures do too; identity needs more evidence.'],
      caption: 'Approximate data support CH₂O and C₆H₁₂O₆; they do not establish glucose identity.'},
    'Use the supplied molar masses throughout. On a one hundred gram basis, the element amounts are about three point three three one moles of carbon, six point six four seven of hydrogen and three point three three one of oxygen. Divide the unrounded amounts by the smallest. The ratio is approximately one to one point nine nine six to one, consistent with C H two O. Its calculation molar mass is thirty point zero two six. One hundred and eighty divided by that is about five point nine nine five, supporting multiplier six. The molecular formula is C six H twelve O six. Glucose is one compound with this formula, but the formula does not uniquely identify it.');
    set('misconception', {heading: 'Check the ratio and the inference', body: 'A ratio near 1 : 1.5 can support 2 : 3, not 1 : 1.',
      secondary: 'Formula inference needs data precision. Molecular formula also does not uniquely specify structure.',
      mistakeTag: 'Two distinct checks', callout: 'Keep guard digits and justify the multiplier.', caption: 'Avoid early rounding and overclaiming compound identity.'},
    'Do not round one to one point five into one to one. If supported by the measurement precision, multiply both by two to obtain two to three. Keep guard digits until you decide which ratio the data support. A second mistake is calling a molecular formula a unique identity. It gives atom counts, while different structures can have the same counts. Report the formula the data support and identify any remaining uncertainty.');
    response('quick-check', 'A compound is approximately eighty percent carbon and twenty percent hydrogen, with molar mass about thirty grams per mole. Use carbon twelve point zero one and hydrogen one point zero zero eight to infer its molecular formula. Pause and calculate the ratio and molar-mass multiplier.',
      'On a one hundred gram basis, the unrounded mole ratio is about one carbon to two point nine seven nine hydrogens. These approximate data support C H three. Its calculation molar mass is fifteen point zero three four, reported as fifteen point zero three. Thirty divided by the unrounded value is about one point nine nine five, supporting multiplier two. The molecular formula is C two H six.', 90, 'Several mole conversions, an integer-ratio decision and a molecular multiplier. Allow working on paper.');
    set('summary', {points: ['Empirical formula gives the simplest atom ratio.', 'Molecular formula gives atom counts, not a unique structure.',
      'Use supplied molar masses and retain guard digits.', 'Check that integer ratios and multipliers fit the approximate data.', 'Use molar mass to scale empirical subscripts together.'],
      finalPrompt: 'What formula do the data support, and what remains unknown?', caption: 'Ratio, counts, guard digits, data consistency and limits of identity.'},
    'An empirical formula is the simplest atom ratio. A molecular formula gives atom counts, not a unique structure. Use the supplied molar masses and retain guard digits. Check that each integer ratio and multiplier fits the approximate data. Molar mass scales all empirical subscripts together. Finish by stating what the calculation establishes and what additional evidence would be needed.');
  } else if (name.endsWith('gravimetric-analysis')) {
    draft.lessonIntent = 'Students can calculate analyte amounts from a known weighing form, checking mole ratios, recovery assumptions, units and reporting precision.';
    set('hook', {body: 'A dissolved ion can be measured indirectly by forming a solid with a known composition.',
      caption: 'A known solid composition connects measured mass to the dissolved analyte.'},
    'How can we measure an ion dissolved in water? One approach converts it into a solid of known composition. We separate and prepare the solid for weighing, then use its mass and a mole ratio to infer the analyte amount. This is precipitation gravimetry. Its accuracy depends on selective recovery, purity and a stable weighing form, not just a precise balance.');
    set('concept', {bullets: bullets(['Choose conditions for selective, sufficiently complete precipitation.', 'Collect, wash and prepare a stable weighing form using a validated method.',
      'Use the known formula and balanced ratio to infer analyte amount.']),
      secondary: 'Excess reagent alone does not prove complete or selective recovery.', caption: 'Recovery, purity and a known weighing form support the mass-to-amount inference.'},
    'Form a precipitate of known composition under suitable conditions. An excess precipitating reagent can support recovery, but it does not guarantee that every analyte ion is recovered or that no other material precipitates. Collect and wash the solid, then prepare the required weighing form. A validated drying or heating method is important because different solids behave differently. Use its molar mass and balanced mole ratio to infer the original analyte amount.');
    set('definition', {bullets: bullets(['Precipitating reagent: used under selected conditions to form the target solid.', 'Filtration: separates the solid from the liquid.',
      'Weighing form: the stable composition actually used in the calculation.', 'Constant mass: successive masses agree within the method tolerance.']),
      callout: 'Constant mass does not alone establish purity or complete recovery.', caption: 'Reagent, separation, weighing form and constant mass.'},
    'The precipitating reagent forms the target solid under selected conditions. Filtration separates solid and liquid. The weighing form is the stable composition actually placed on the balance and used in the calculation. Constant mass means successive masses agree within the method tolerance. Drying and ignition are different preparation methods. Heating may change a precipitate or decompose it, so do not assume that ignition simply removes water while preserving every formula.');
    set('formula', {callout: 'Use the actual weighing form, the balanced ratio and unrounded amounts.'},
    'Divide the weighed solid mass by the molar mass of its actual weighing form. Apply the balanced ratio to obtain analyte amount. Multiply by analyte molar mass for a mass answer, or divide by sample volume in litres for molar concentration. For milligrams per litre, convert analyte mass to milligrams first. Carry guard digits through the chain and round only the final reported quantities.');
    set('worked-example', {question: 'A 250.0 mL sample gives 0.4660 g of pure, dry BaSO₄. Assume complete selective sulfate recovery. Use Ba = 137.33, S = 32.06 and O = 15.999 g mol⁻¹. Find sulfate concentration to 4 s.f.',
      coachNote: 'The revised volume precision is explicit. BaSO₄ and sulfate have a 1:1 mole ratio.',
      steps: ['M(BaSO₄): 137.33 + 32.06 + 4 × 15.999 = 233.386 g mol⁻¹ retained for calculation (233.39 reported).',
        'n(BaSO₄) = 0.4660 ÷ 233.386 ≈ 0.00199669 mol.', 'BaSO₄ : SO₄²⁻ = 1 : 1; V = 0.2500 L.',
        'c(SO₄²⁻) = [0.4660 ÷ 233.386] ÷ 0.2500 ≈ 0.00798677 mol L⁻¹.',
        'Report 7.987 × 10⁻³ mol L⁻¹ (4 s.f.) under the stated recovery assumptions.'],
      caption: 'With 250.0 mL and guard digits, sulfate concentration is 7.987 × 10⁻³ mol L⁻¹ (4 s.f.).'},
    'The revised sample volume is two hundred and fifty point zero millilitres. Assume the measured barium sulfate is pure, dry and represents complete selective sulfate recovery. Its supplied molar masses add to two hundred and thirty-three point three eight six grams per mole, retained for calculation. Divide nought point four six six zero grams by that value. The sulfate amount is the same because each formula unit contains one sulfate. Divide the unrounded amount by nought point two five zero zero litres. Report seven point nine eight seven times ten to the minus three moles per litre to four significant figures.');
    set('worked-example-2', {},
    'The sample volume is five hundred point zero millilitres. Assume complete selective precipitation gives one point four three five grams of pure, dry silver chloride. The supplied silver and chlorine values add to one hundred and forty-three point three two three grams per mole, retained for calculation. Divide precipitate mass by it, then use the one-to-one chloride ratio. Multiply the unrounded amount by thirty-five point four five three to obtain about nought point three five four nine six eight grams of chloride. Report nought point three five five zero grams. Convert unrounded mass to milligrams and divide by nought point five zero zero zero litres. Report seven hundred and nine point nine milligrams per litre to four significant figures.');
    set('misconception', {secondary: 'Check the balanced ratio and preparation method. Incomplete recovery lowers the inferred amount; retained water or contamination can raise it.',
      mistakeTag: 'Check formula, ratio and recovery', callout: 'Constant mass is a method check, not proof of purity.'},
    'Use the molar mass of the solid you actually weighed. Then check the balanced ratio instead of assuming one to one. Incomplete analyte recovery can give a low result. Retained water or other material can make the weighed mass too high. Constant mass helps check the preparation, but it cannot by itself prove the solid is pure or that recovery is complete. Interpret the result with the method assumptions.');
    set('quick-check', {question: 'A sample gives 2.330 g of pure, dry BaSO₄ with complete selective sulfate recovery. Use Ba = 137.33, S = 32.06 and O = 15.999 g mol⁻¹. Find sulfate amount to 4 s.f.',
      answerSteps: ['Retain M(BaSO₄) = 233.386 g mol⁻¹ for calculation.', 'n(BaSO₄) = 2.330 ÷ 233.386 ≈ 0.00998346 mol.',
        'BaSO₄ : SO₄²⁻ = 1 : 1, so the unrounded amounts match.', 'Report n(SO₄²⁻) = 9.983 × 10⁻³ mol (4 s.f.).'],
      caption: 'Pure BaSO₄ mass and the 1:1 ratio give 9.983 × 10⁻³ mol sulfate (4 s.f.).'}, '');
    response('quick-check', 'A sample gives two point three three zero grams of pure, dry barium sulfate. Assume complete selective recovery. Use the supplied barium, sulfur and oxygen values to find the sulfate amount to four significant figures. Pause and calculate.',
      'Keep the calculation molar mass two hundred and thirty-three point three eight six grams per mole. Divide the mass by it, giving about nought point zero zero nine nine eight three four six moles. The barium sulfate to sulfate ratio is one to one. Report nine point nine eight three times ten to the minus three moles of sulfate.', 45, 'A molar-mass sum, mass-to-moles conversion and explicit ratio check.');
    set('summary', {points: ['Select conditions for analyte recovery and a known weighing form.', 'Use the actual solid formula for mass-to-moles conversion.',
      'Check the balanced precipitate-to-analyte ratio.', 'Keep guard digits and use the requested concentration units.', 'Evaluate recovery, contamination and preparation uncertainty.'],
      finalPrompt: 'Which weighing form, ratio and recovery assumptions support the result?', caption: 'Known form, recovery assumptions, mole ratio, units and guard digits.'},
    'Select suitable recovery conditions and prepare a known weighing form. Use that solid formula for the molar mass, then check the balanced analyte ratio. Keep guard digits and convert to the requested units. Evaluate incomplete recovery, contamination and preparation uncertainty. A precise displayed mass does not remove those sources of error.');
  } else if (name.endsWith('calorimetry-combustion')) {
    draft.scenes.find((scene) => scene.id === 'worked-example').voiceover.text = proposal.scene.voiceover.text.replace('in this revised question', 'in this example');
    draft.lessonIntent = 'Students can estimate molar combustion enthalpy from a stated constant-pressure heat model and evaluate the limits of that inference.';
    set('title', {}, 'Calorimetry: estimating the heat released by combustion.');
    set('hook', {body: 'A fuel heats water. The temperature change measures heat captured, which may differ from total reaction heat.',
      bullets: bullets(['Measure water mass and temperature change.', 'Estimate heat captured with a stated heat-capacity model.', 'Measure fuel consumed and convert to mole amount.', 'State losses and assumptions before interpreting reaction enthalpy.']),
      caption: 'Water temperature gives captured heat; reaction enthalpy requires a stated heat model.'},
    'When a fuel burns below water, the water warms. Calorimetry uses its mass, heat capacity and temperature change to estimate heat captured. Some energy can heat the vessel or escape to the surroundings. Fuel mass loss may also include evaporation. These effects matter when we infer reaction energy per mole. We will first calculate under explicit assumptions, then consider why a real experiment can differ.');
    const concept = set('concept', {body: 'Measure water heat first. Infer reaction heat and divide by fuel amount only under the stated assumptions.',
      bullets: bullets(['q(water) = m(water)c(water)ΔT.', 'An ideal water-only balance gives q(reaction) = −q(water).',
        'At constant pressure, infer molar ΔH from reaction heat divided by reacted amount.', 'Uncaptured heat can make the estimated magnitude smaller.']),
      caption: 'Captured heat, reaction heat and molar enthalpy are related by assumptions.'},
    'Start with heat gained by the water. In an ideal water-only balance, reaction heat is its negative. At constant pressure, dividing the inferred reaction heat by the amount of fuel reacted gives a molar enthalpy estimate. In a real rig, vessel heating or external heat loss can reduce captured heat and make the estimated exothermic magnitude smaller. The diagram illustrates that limitation; it does not quantify the loss.');
    concept.diagram.props.cards = [{title: 'Water heat captured', eq: 'q(water) = mcΔT'}, {title: 'Ideal water-only balance', eq: 'q(reaction) = −q(water)'},
      {title: 'Molar estimate at constant p', eq: 'ΔH ≈ q(reaction) ÷ n', key: true}];
    concept.diagram.props.note.text = 'Illustration: heat loss can reduce captured heat';
    set('formula', {body: 'Specify which material q describes and which assumptions connect it to reaction heat.',
      bullets: bullets(['Water heat: q(water) = mcΔT, in J for the given c units.', 'Convert J to kJ by dividing by 1000.',
        'Fuel amount n = m(fuel reacted) ÷ M(fuel).', 'Under the ideal constant-pressure balance: molar ΔH estimate = −q(water) ÷ n.']),
      callout: 'Name the heat, state the balance and keep guard digits.', caption: 'Water q in J → kJ → negative reaction heat → per mole under the stated model.'},
    'Use water mass in grams, its specified heat capacity in joules per gram per degree, and signed temperature change. The result is water heat in joules. Divide by one thousand for kilojoules. Fuel amount is reacted mass divided by molar mass; mass loss is a proxy only if evaporation or other losses are negligible. Under the stated ideal constant-pressure balance, molar enthalpy is estimated as negative water heat divided by fuel amount. Retain guard digits.');
    set('misconception', {heading: 'Heat and molar enthalpy are different quantities', body: 'q(water) is heat transferred to the water. It is not automatically total reaction heat or a per-mole value.',
      callout: 'Specify the system, the heat balance and the amount basis.', mistakeTag: 'Heat versus molar enthalpy', caption: 'Reaction heat can equal ΔH at constant pressure; molar ΔH additionally needs the amount basis.'},
    'Heat and molar enthalpy are different quantities. Water heat describes the water, while reaction heat describes the reacting system. A heat balance connects them only with stated assumptions. At constant pressure with only pressure-volume work, reaction heat can equal the reaction enthalpy change for that amount. To report a molar value, divide by the appropriate reacted amount. Check the sign and units as well as the division.');
    set('quick-check', {question: 'An estimated molar combustion enthalpy is −412 kJ mol⁻¹, compared with −726 kJ mol⁻¹ for the same stated reaction and conditions. Find percentage error to 3 s.f. and give two plausible causes of the smaller magnitude.',
      answerSteps: ['% error = |estimate − reference| ÷ |reference| × 100.', 'Magnitude difference = 314 kJ mol⁻¹.',
        '314 ÷ 726 × 100 ≈ 43.2507% → 43.3%.', 'External heat loss can reduce heat captured by the water.',
        'Incomplete combustion can reduce heat released per recorded fuel amount; these are possible causes, not a diagnosis from the number alone.'],
      caption: '43.3% error; −412 has a smaller exothermic magnitude, but is numerically higher than −726.'}, '');
    response('quick-check', 'The molar combustion estimate is minus four hundred and twelve kilojoules per mole, against minus seven hundred and twenty-six for the same stated reaction and conditions. Find percentage error to three significant figures and suggest two causes of the smaller magnitude. Pause and calculate.',
      'The magnitude difference is three hundred and fourteen. Divide by seven hundred and twenty-six and multiply by one hundred, giving forty-three point three percent. External heat loss and incomplete combustion are possible explanations. The result alone does not identify a cause. Minus four hundred and twelve is numerically higher, but less negative, than minus seven hundred and twenty-six.', 40, 'One percentage calculation and two reasoned explanations; distinguish number order from magnitude.');
    set('summary', {points: ['q(water) measures captured heat with the specified water model.', 'The ideal water-only balance neglects vessel heating and external transfer.',
      'Constant-pressure reaction heat supports an enthalpy estimate.', 'Divide by reacted fuel amount, convert units and retain guard digits.', 'Compare the same reaction and conditions; explain magnitude and uncertainty.'],
      finalPrompt: 'What heat was measured, and which assumptions support the molar estimate?', caption: 'Captured heat, assumptions, amount basis, precision and experimental limitations.'},
    'Calculate captured water heat with the specified model. State whether vessel heating and external transfer are neglected. A constant-pressure heat balance supports an enthalpy estimate. Convert units, divide by reacted fuel amount and retain guard digits. Compare the same reaction and conditions, and distinguish a smaller exothermic magnitude from a numerically lower value. A plausible error mechanism still needs evidence.');
  } else if (name.endsWith('calorimetry-neutralisation')) {
    draft.lessonIntent = 'Students can use total solution mass and a stated heat balance to estimate molar neutralisation enthalpy per mole of water formed from balanced stoichiometry.';
    set('title', {}, 'Calorimetry: neutralisation and the total solution mass.');
    set('hook', {body: 'Neutralising aqueous acid and base can warm the mixture. The observed rise depends on amounts, heat capacity and heat transfer.',
      bullets: bullets(['For the acid/base reactions shown, neutralisation releases heat.', 'The combined solution receives heat.', 'q(solution) uses total solution mass.', 'A measured temperature change also depends on experimental conditions.']),
      caption: 'An exothermic reaction can warm the solution; the observed rise depends on conditions.'},
    'Mixing aqueous acid and base can warm the solution as neutralisation releases heat. The size of that rise depends on reactant amounts, solution heat capacity and heat transfer. A very small reaction or poor heat retention may not give an obvious rise. We use the total mixture mass to estimate solution heat, then a stated balance to infer reaction heat. The amount basis for neutralisation enthalpy is water formed.');
    const concept = set('concept', {body: 'Use the total solution mass and an explicitly specified solution heat capacity. Find water amount from the balanced equation.',
      bullets: bullets(['q(solution) = m(solution)c(solution)ΔT.', 'Use an assumed water-like heat capacity only when the question specifies it.',
        'Convert concentrations and volumes to reactant amounts, then apply coefficients.', 'Under the stated balance, q(reaction) = −q(solution); divide by n(H₂O formed).']),
      caption: 'Total mass and specified heat capacity; balanced coefficients determine water amount.'},
    'Use total solution mass in the heat calculation. Treating its heat capacity like water is an approximation that must be specified. For reaction amounts, concentration times volume gives moles of a reactant, not automatically moles of water. Use the balanced equation and identify the limiting capacity. One hydrochloric acid plus one sodium hydroxide forms one water. One sulfuric acid plus two sodium hydroxides forms two waters. Divide inferred reaction heat by water formed.');
    concept.diagram.props.cards = [{title: 'Total solution mass', eq: 'acid + base solution'}, {title: 'Specified heat capacity', eq: 'c(solution): stated model'},
      {title: 'Water amount from coefficients', eq: 'balanced equation → n(H₂O)'}, {title: 'Ideal heat balance', eq: 'ΔHn ≈ −q(solution) ÷ n(H₂O)'}];
    set('worked-example', {question: '50.0 mL of 1.00 mol L⁻¹ HCl mixes with 50.0 mL of 1.00 mol L⁻¹ NaOH, both initially 21.4 °C. The final temperature is 28.0 °C. Use given total mass 100.0 g and c(solution) = 4.18 J g⁻¹ °C⁻¹. Assume complete neutralisation at constant pressure, negligible dilution/mixing heat and vessel heating, and no external heat transfer. Estimate molar enthalpy per mole of water to 2 s.f.',
      coachNote: 'For this 1:1 reaction, 0.0500 mol of each reactant forms 0.0500 mol water. This shortcut does not apply to every acid/base pair.',
      steps: ['HCl + NaOH → NaCl + H₂O; equal initial temperatures and given solution mass.', 'ΔT = 28.0 − 21.4 = 6.6 °C.',
        'q(solution) = 100.0 × 4.18 × 6.6 = 2758.8 J = 2.7588 kJ (guard digits).',
        'n(HCl) = n(NaOH) = 1.00 × 0.0500 = 0.0500 mol; n(H₂O) = 0.0500 mol.',
        'ΔHn estimate = −2.7588 ÷ 0.0500 = −55.176 kJ mol⁻¹ before rounding.', 'Report −55 kJ mol⁻¹ per mole of water (2 s.f.), exothermic.'],
      caption: 'Under the stated heat balance: −55.176 kJ mol⁻¹ before rounding → −55 kJ mol⁻¹ per mole of water.'},
    'Both solutions start at twenty-one point four degrees and finish at twenty-eight, a rise of six point six degrees. The question gives total mass one hundred point zero grams and solution heat capacity four point one eight. Solution heat gain is two thousand seven hundred and fifty-eight point eight joules, or two point seven five eight eight kilojoules. The balanced one-to-one reaction forms nought point zero five zero zero moles of water. Under the stated constant-pressure balance, divide negative solution heat by water amount. Keep guard digits: minus fifty-five point one seven six kilojoules per mole. Report minus fifty-five to two significant figures.');
    set('misconception', {body: 'The warmed material is the combined solution. Use its given mass or a justified density/mass estimate.',
      callout: 'Using one component mass understates the heat of the full mixture.', caption: 'A factor-of-two error applies to the equal-mass example, not every mixture.'},
    'Both solutions are part of the warmed mixture. Using only the acid solution mass understates heat gain. In the equal-mass example, it halves the result. Unequal solution masses give a different factor, so do not memorise a universal factor of two. Use the given total mass, or justify a density approximation if the question gives volumes instead. Also check the balanced coefficients when calculating water formed.');
    draft.scenes.find((scene) => scene.id === 'quick-check').question += ' Both solutions begin at the same temperature; neglect dilution and mixing heat in the reaction estimate.';
    response('quick-check', 'Twenty-five millilitres of two point zero zero molar sulfuric acid mixes with fifty millilitres of two point zero zero molar sodium hydroxide. Both start at the same temperature. The given seventy-five gram solution warms by nine point two degrees. Use the specified heat-capacity and heat-transfer assumptions, neglecting dilution and mixing heat, to find solution heat to two significant figures and water formed after complete neutralisation. Pause and calculate.',
      'Solution heat is two thousand eight hundred and eighty-four point two joules, or two point eight eight four two kilojoules before rounding. Report positive two point nine kilojoules. The reaction heat is its negative under the model. There are nought point zero five zero zero moles of sulfuric acid and nought point one zero zero moles of base. The balanced one-to-two reaction forms nought point one zero zero moles of water.', 60, 'Heat calculation with a unit conversion plus diprotic stoichiometry.');
    set('summary', {points: ['Use total solution mass and the specified heat capacity.', 'Signed solution heat and reaction heat refer to different systems.',
      'Find limiting amounts and water formed from balanced coefficients.', 'At constant pressure, the stated balance supports an enthalpy estimate.', 'Use guard digits and the requested precision; report per mole of water.'],
      finalPrompt: 'Which mass, which heat and how many moles of water?', caption: 'Combined mass, heat balance and stoichiometric water amount.'},
    'Use total solution mass and the specified heat capacity. Distinguish signed solution heat from reaction heat. Calculate reactant amounts, then use balanced coefficients to find water formed and any limiting capacity. A stated constant-pressure heat balance supports the enthalpy estimate. Retain guard digits and report with the requested precision per mole of water.');
  } else if (name.endsWith('calorimetry-dissolution')) {
    draft.lessonIntent = 'Students can estimate dissolution enthalpy using total solution mass and a signed heat balance, while distinguishing a simplified enthalpy model from a spontaneity claim.';
    set('title', {}, 'Calorimetry: dissolution can absorb or release heat.');
    set('hook', {body: 'Ammonium nitrate and anhydrous calcium chloride illustrate opposite dissolution heat effects under suitable aqueous conditions.',
      bullets: bullets(['NH₄NO₃ dissolution can absorb heat from the solution.', 'Anhydrous CaCl₂ dissolution can release heat to the solution.',
        'Pack formulations vary; these salts are teaching examples.', 'Measure under stated conditions rather than assuming a universal temperature.']),
      caption: 'Two salt examples illustrate endothermic and exothermic dissolution; pack formulations vary.'},
    'Dissolution can either absorb or release heat. Ammonium nitrate provides an endothermic example, while anhydrous calcium chloride provides an exothermic example under suitable aqueous conditions. Pack formulations vary, so these are teaching examples rather than a claim about every commercial pack. The temperature change depends on concentration, amounts and heat transfer. We will use a stated heat model to connect the observed change to a molar estimate.');
    const concept = set('concept', {body: 'A simplified ionic dissolution cycle compares energy absorbed in lattice separation with energy released in hydration.',
      bullets: bullets(['Separating the ionic lattice into gaseous ions requires energy.', 'Hydration of those ions releases energy.',
        'Use a positive lattice-dissociation enthalpy and negative hydration enthalpies consistently.', 'The simplified balance illustrates sign; final concentration and hydration state also matter.']),
      callout: 'Simplified cycle: ΔHsol ≈ lattice dissociation + hydration contributions.', caption: 'Qualitative energy levels illustrate a simplified enthalpy cycle, not measured values.'},
    'In a simplified enthalpy cycle, separating an ionic lattice into gaseous ions requires energy. Hydrating those ions releases energy. Here we define lattice dissociation enthalpy as positive and hydration contributions as negative. Their balance illustrates why dissolution can have either sign. The real result also depends on the starting solid, temperature and final solution conditions. The energy ladder is qualitative, not a measured scale. Whether dissolution occurs spontaneously is a separate Gibbs-energy question.');
    concept.diagram.props.header = 'Qualitative lattice-dissociation and hydration cycle';
    for (const panel of concept.diagram.props.panels) {
      panel.levels.find((level) => level.key === 'i').sub = 'gaseous-ion reference';
      panel.arrows[0].label = 'lattice separation';
      panel.note.text = panel.title === 'CaCl₂' ? 'illustrative net release' : 'illustrative net absorption';
    }
    set('worked-example', {question: '4.00 g of NH₄NO₃ (M = 80.04 g mol⁻¹) dissolves in 100.0 g of water. Both start at 21.0 °C and the final solution is 17.6 °C. Assume complete dissolution, no mass loss, constant pressure, c(solution) = 4.18 J g⁻¹ °C⁻¹, negligible vessel heating and no external heat transfer. Estimate molar enthalpy to 2 s.f.',
      coachNote: 'Use 104.0 g solution and signed ΔT. Reaction heat has the opposite sign to solution heat.',
      steps: ['m(solution) = 100.0 + 4.00 = 104.0 g.', 'ΔT = 17.6 − 21.0 = −3.4 °C.',
        'q(solution) = 104.0 × 4.18 × (−3.4) = −1478.048 J = −1.478048 kJ (guard digits).',
        'Under the stated balance, q(dissolution) = −q(solution) = +1.478048 kJ.', 'n(NH₄NO₃) = 4.00 ÷ 80.04 ≈ 0.04997501 mol.',
        'ΔH estimate = +1.478048 ÷ [4.00 ÷ 80.04] ≈ +29.57574 kJ mol⁻¹ → +3.0 × 10¹ kJ mol⁻¹ (2 s.f.).'],
      caption: '104.0 g solution loses heat; the model gives dissolution ΔH ≈ +3.0 × 10¹ kJ mol⁻¹ (2 s.f.).'},
    'Use total solution mass, one hundred and four point zero grams. Signed temperature change is minus three point four degrees. Multiplying by the specified heat capacity gives negative one thousand four hundred and seventy-eight point zero four eight joules for the solution. The solution loses heat. Under the stated balance, dissolution absorbs positive one point four seven eight zero four eight kilojoules. Salt amount is four divided by eighty point zero four, about nought point zero four nine nine seven five moles. Divide using unrounded expressions. The molar estimate is about plus twenty-nine point five seven six kilojoules per mole, reported as plus three point zero times ten to the one to two significant figures.');
    set('misconception', {body: 'Lattice separation absorbs energy, but hydration also contributes. The complete stated cycle determines the enthalpy sign.',
      callout: 'Keep q(solution) signed; reverse it for dissolution under the stated balance.', caption: 'Count both contributions and distinguish heat-transfer signs from spontaneity.'},
    'Counting lattice separation alone misses hydration. Use the full stated enthalpy model before deciding the sign. For the calculation, keep solution temperature change signed. Cooling gives negative solution heat and, under our balance, positive dissolution heat. Warming gives the reverse. Do not use a positive magnitude without identifying which heat it represents. Neither an endothermic sign nor an exothermic sign alone establishes whether a process is spontaneous.');
    draft.scenes.find((scene) => scene.id === 'quick-check').question += ' The solid and water begin at the same temperature.';
    response('quick-check', 'Five point zero zero grams of anhydrous calcium chloride dissolves in one hundred point zero grams of water. They start at the same temperature, and the final solution is warmer by nine point five degrees. Use the stated solution heat capacity, molar mass and heat-transfer assumptions. Estimate molar dissolution enthalpy to two significant figures. Pause and calculate with total solution mass.',
      'The solution mass is one hundred and five point zero grams. Its heat gain is four thousand one hundred and sixty-nine point five five joules, or four point one six nine five five kilojoules before rounding. Salt amount is five divided by one hundred and ten point nine eight. Divide negative solution heat by the unrounded salt amount. The estimate is about minus ninety-two point five four seven kilojoules per mole, reported minus ninety-three. It is exothermic under these conditions.', 75, 'Total solution mass, amount conversion, signed heat and molar estimate.');
    set('summary', {points: ['Dissolution enthalpy can have either sign under stated conditions.', 'The qualitative lattice/hydration cycle is an explanatory simplification.',
      'Use total solution mass and specified solution heat capacity.', 'q(solution) = mcΔT is signed; q(dissolution) = −q(solution) under the model.', 'Keep guard digits, report conditions and separate enthalpy from spontaneity.'],
      finalPrompt: 'Which system gained heat, and what assumptions justify the sign?', caption: 'Conditions, total solution mass, signed heat balance and model limits.'},
    'Dissolution can have either enthalpy sign under stated conditions. Lattice separation and hydration give a useful qualitative explanation. Use total solution mass and the specified heat capacity. Keep solution heat signed, then reverse it for dissolution under the stated balance. Retain guard digits and report the conditions and precision. Enthalpy alone is not a test of spontaneity.');
  } else if (name.endsWith('back-conductometric-titration')) {
    draft.scenes.find((scene) => scene.id === 'worked-example').voiceover.text = proposal.scene.voiceover.text.replace('in the revised question', 'in this example');
    draft.examSkill = 'Subtract reagent amounts in a validated selective back-titration model, apply balanced ratios and estimate conductometric endpoints from appropriate curve branches.';
    set('hook', {body: 'A sparingly soluble or slowly reacting analyte can make direct endpoint detection difficult. Back titration measures a suitable reagent excess.',
      caption: 'Back titration can help when a validated direct method is unsuitable.'},
    'An antacid sample can contain calcium carbonate that reacts slowly with acid. That can make direct endpoint detection inconvenient. Back titration offers another route: add a known acid excess, allow the intended reaction to finish, then measure the remaining acid with a suitable standard base. The inference is valid only if the reaction is selective and the excess is measured correctly. This example does not make a claim about any product label or regulator finding.');
    set('concept-back', {bullets: bullets(['Choose a suitable selective reaction and add a known reagent excess.', 'Measure remaining reagent with a validated back titration.',
      'Subtract mole amounts, accounting for blanks or aliquots if needed.']),
      secondary: 'Unexpected negative reacted amount flags inconsistent data or method assumptions. Excess alone does not establish completion.',
      caption: 'Known total minus measured excess, with selectivity and full-sample accounting.'},
    'Choose a suitable selective reaction and add a known excess reagent. Completion must be established by the method, not assumed just because excess was added. Titrate remaining reagent and convert the titre to its mole amount using the balanced ratio. Account for any aliquot or blank if used. Subtract remaining amount from added amount. Then apply the analyte reaction ratio. A negative result flags inconsistent data or assumptions that need investigation.');
    set('definition', {bullets: bullets(['Back titration: measures remaining excess of an initially added reagent.', 'Known excess: more reagent than the intended analyte reaction requires.',
      'Reacted reagent: added amount minus measured remaining amount, with method corrections.', 'Conductometric endpoint: inferred from changes in a measured conductivity curve.']),
      callout: 'Excess supports the method; it does not guarantee completion.', caption: 'Measure remaining reagent and justify the reaction assumptions.'},
    'Back titration measures the excess remaining after an added reagent reacts with the sample. A known excess is more than the amount required by the intended reaction. It does not guarantee that reaction is complete or selective. Reacted reagent is calculated by subtraction with any required method corrections. Conductometric titration instead follows an electrical signal as titrant is added, using a suitable change of slope to estimate an endpoint.');
    const conductometric = set('concept-conductometric', {body: 'For dilute HCl titrated with NaOH under controlled conditions, the illustrative signal falls then rises near equivalence.',
      bullets: bullets(['H⁺ has a much larger limiting ionic conductivity than Na⁺ in dilute water at 25 °C.',
        'Neutralisation reduces the acid contribution; Na⁺ remains in solution.', 'After equivalence, excess OH⁻ and added Na⁺ increase the model signal.']),
      secondary: 'Estimate the endpoint from the appropriate fitted branches. Dilution and temperature can affect shape; other acid/base pairs need different curves.',
      callout: 'The V-shaped illustration is scoped to HCl with NaOH.', caption: 'Illustrative HCl/NaOH curve; branch fitting and experimental conditions govern endpoint estimation.'},
    'Consider dilute hydrochloric acid titrated with sodium hydroxide. Hydrogen ion has a much larger limiting ionic conductivity than sodium ion. Neutralisation removes most of the acid contribution while sodium remains, so the illustrative signal falls. After equivalence, excess hydroxide and added sodium raise the model signal. Real data need controlled temperature and appropriate dilution treatment. Estimate the endpoint from the suitable fitted branches. A minimum is not a universal endpoint rule for every acid and base. Colour independence can help, but matrix effects and sensor suitability still matter.');
    conductometric.diagram.props.note = {text: 'Illustrative HCl/NaOH model;\nλ values: S cm² mol⁻¹, dilute water at 25 °C'};
    set('misconception', {body: 'CaCO₃ consumes 2 mol HCl per mole under the stated complete-reaction model.',
      secondary: 'Subtract amounts, not raw volumes. The shown HCl/NaOH curve is not a universal titration shape.',
      mistakeTag: 'Ratio, subtraction and model scope', callout: 'Check the balanced reactions and the actual endpoint method.', caption: 'CaCO₃ ratio 1:2; subtract moles; scope the conductometric interpretation.'},
      'One calcium carbonate reacts with two hydrochloric acids in the stated model, so divide reacted acid amount by two for carbonate. Subtract mole amounts rather than raw volumes when concentrations differ. Finally, scope the conductometric interpretation. The HCl with NaOH example has a falling then rising signal, but other titration reactions can have different slope changes. Use the actual curve and a justified endpoint method rather than memorising a universal minimum rule.');
    set('quick-check', {question: 'An antacid sample reacts completely and selectively with 50.00 mL of 1.00 mol L⁻¹ HCl. The full remaining acid needs 28.00 mL of 0.500 mol L⁻¹ NaOH. Assume only CaCO₃ consumed the acid and no reagent losses. How many moles of HCl reacted? Report to the specified 3 s.f. convention.',
      answerSteps: ['n(HCl added) = 1.00 × 0.05000 = 0.05000 mol (guard digits).', 'n(HCl remaining) = 0.500 × 0.02800 = 0.01400 mol (guard digits).',
        'n(HCl reacted) = 0.05000 − 0.01400 = 0.03600 mol → 0.0360 mol (specified 3 s.f.).',
        'If carbonate amount were requested: divide reacted acid by 2 to obtain 0.0180 mol.', 'The question asks for reacted HCl, so 0.0360 mol is the answer.'],
      caption: 'Under the stated selective full-sample method: 0.0360 mol HCl reacted (specified 3 s.f.).'}, '');
    response('quick-check', 'An antacid sample reacts completely and selectively with fifty millilitres of one point zero zero molar hydrochloric acid. The full excess needs twenty-eight millilitres of nought point five zero zero molar sodium hydroxide. Assume only calcium carbonate consumed acid and no reagent losses. How many moles of acid reacted? Use the specified three-significant-figure convention. Pause and calculate.',
      'Added acid amount is nought point zero five moles. Remaining acid equals the one-to-one sodium hydroxide amount, nought point zero one four moles. Subtract to obtain nought point zero three six zero moles of reacted acid under the requested convention. If carbonate amount were requested, divide by two for nought point zero one eight zero moles. Here the requested quantity is the reacted acid.', 50, 'Two concentration-volume products, subtraction and a distinction between reagent and analyte amounts.');
    set('summary', {points: ['Back titration requires a suitable selective reaction and verified completion.', 'Subtract measured remaining reagent from the known added amount.',
      'Apply balanced ratios and any sample/blank corrections.', 'Conductometry can support endpoint detection without a colour indicator.', 'Fit appropriate curve branches; the HCl/NaOH minimum is a scoped example.'],
      finalPrompt: 'Which assumptions and endpoint evidence support the analyte inference?', caption: 'Reaction validity, full-sample accounting, ratios and scoped conductometric interpretation.'},
    'Back titration needs a suitable selective reaction and verified completion. Subtract measured remaining reagent from the known added amount, then apply balanced ratios and any method corrections. Conductometry offers an endpoint signal without a colour indicator, but it still needs suitable sample conditions and sensor behaviour. Fit the appropriate curve branches. The HCl with NaOH minimum is an example, not a universal rule.');
  } else throw new Error(`No whole-lesson integration for ${name}`);

  const pacing = [];
  for (const scene of draft.scenes) {
    const previous = original.scenes.find((item) => item.id === scene.id);
    const responsePlan = responses[scene.id];
    const words = countWords(scene.voiceover?.text), speechSeconds = estimateSpeechSeconds(scene.voiceover?.text ?? '', 145);
    const finalReadingSeconds = scene.type === 'workedExample' || scene.type === 'quickCheck' ? 8 : scene.type === 'concept' || scene.type === 'summary' ? 5 : 3;
    const thinkingSeconds = responsePlan?.minimumThinkingSeconds ?? 0;
    // Source planning estimates include reading/thinking; they are not measured alignment.
    const proposedSeconds = Math.max(previous.durationInFrames / draft.fps, speechSeconds / 0.92 + thinkingSeconds + finalReadingSeconds);
    scene.durationInFrames = Math.ceil(proposedSeconds * draft.fps);
    pacing.push({scene: scene.id, wordCount: words, speechEstimateSeconds: Number(speechSeconds.toFixed(2)), wordsPerMinute: 145,
      inheritedFrames: previous.durationInFrames, proposedFrames: scene.durationInFrames, finalReadingSeconds, response: responsePlan ?? null,
      status: 'estimated planning duration; not audio-aligned or learner-validated',
      beats: rows(scene).map((text, index) => ({order: index + 1, text, cue: 'set from final narration alignment',
        action: scene.type === 'workedExample' || scene.type === 'quickCheck' ? 'Reveal the relevant operation, retain prior working and hold the result.' : 'Highlight the named relationship while retaining reference labels.'})),
      reuse: {image: scene.image ?? null, diagram: scene.diagram?.kind ?? scene.diagram?.type ?? null, sceneType: scene.type},
      componentCues: scene.diagram ? 'Custom speech cues removed; inspect component defaults and rebuild cues before any preview.' : null});
  }
  if (JSON.stringify(draft).includes('\u2014')) throw new Error(`Prohibited punctuation remains in ${name}`);
  const previousFields = new Map(stringFields(original).map(({field, text}) => [field, text]));
  const changes = stringFields(draft).filter(({field, text}) => previousFields.get(field) !== text)
    .map(({field, text}) => ({field, before: previousFields.get(field) ?? null, after: text}));
  return {draft, changes, pacing, register: proposal.register, sourceSha256: hash(bytes),
    totalFrames: draft.scenes.reduce((sum, scene) => sum + scene.durationInFrames, 0),
    status: 'complete isolated unvoiced source proposal; science, layout and measured media review pending'};
}
