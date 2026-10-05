import {hash, stringFields} from './science-audit.mjs';
import {removeMediaAndCues} from './science-corrections.mjs';

// Scene-only proposals. Exact source guards prevent replay onto changed lessons.
export const quantitativeSources = {
  'chemistry-y11-m2-l3-empirical-molecular-formulas': 'f9a9533286af5012c7ae0b520fa1526dd06dbefe49acf73cb07109bf1a5c85af',
  'chemistry-y11-m2-l9-gravimetric-analysis': 'b7ddd1b49d090ddac7e022da92aed528d4dca5a5aa94726d3045507b6f686bde',
  'chemistry-y11-m4-l2-calorimetry-combustion': 'acd60321b054309ce58c912f51f9e74f04ae4bca4364c5ebf66a195666b24ca0',
  'chemistry-y11-m4-l3-calorimetry-neutralisation': 'c31b38ab5d71fb012c42196bf22695428d97cf761566871fbbedfd821d8b2daf',
  'chemistry-y11-m4-l4-calorimetry-dissolution': 'd1ec0c41dd68cc23802f9f76ec6ab59def3886457d194e0c4b5c295fe2e4160c',
  'chemistry-y12-m6-l18-back-conductometric-titration': '8d5da0f8de7b2fa6b2ca65529eb35cbf9050f550f5198123f8e67fea1498488f',
};
const revisions = {
  'chemistry-y11-m2-l3-empirical-molecular-formulas': {
    register: 'C19', scene: 'quick-check', rationale: 'Use one atomic-value set, correct empirical molar mass and explicitly approximate composition data.',
    copy: {
      question: 'A compound is approximately 80% carbon and 20% hydrogen by mass, with molar mass about 30 g mol⁻¹. Use C = 12.01 and H = 1.008 g mol⁻¹ to infer its molecular formula.',
      pausePrompt: 'Pause: choose a 100 g basis, find the simplest mole ratio, then the whole-number multiplier.',
      answerSteps: [
        'On a 100 g basis: C ≈ 80 g and H ≈ 20 g; the composition is approximate.',
        'n(C) ≈ 80 ÷ 12.01 ≈ 6.66112 mol; n(H) ≈ 20 ÷ 1.008 ≈ 19.8413 mol.',
        'Using unrounded amounts: C : H ≈ 1 : 2.97867, consistent with about 1 : 3.',
        'Empirical formula CH₃; calculation value M = 12.01 + 3 × 1.008 = 15.034 g mol⁻¹ (15.03 reported).',
        '30 ÷ 15.034 ≈ 1.99548, consistent with multiplier 2; molecular formula C₂H₆.',
      ],
      caption: 'Approximate composition supports CH₃; a molar-mass multiplier of 2 gives C₂H₆.',
    },
    narration: 'A compound is approximately eighty percent carbon and twenty percent hydrogen, with molar mass about thirty grams per mole. Use carbon twelve point zero one and hydrogen one point zero zero eight to infer its molecular formula. Pause and work through a one hundred gram basis. Carbon gives about six point six six one one two moles. Hydrogen gives about nineteen point eight four one three. Divide the unrounded amounts by the smaller amount. The ratio is about one to two point nine seven nine, consistent with one to three for these approximate data. The empirical formula is C H three. Its molar mass calculation gives fifteen point zero three four grams per mole, reported as fifteen point zero three. Thirty divided by the unrounded value is about one point nine nine five, consistent with a whole-number multiplier of two. The molecular formula is C two H six. Do not round a substantially different ratio to an integer without checking the data.',
  },
  'chemistry-y11-m2-l9-gravimetric-analysis': {
    register: 'C19', scene: 'worked-example-2', rationale: 'Expose guard-digit working; clarify volume precision; report concentration from unrounded chloride mass.',
    copy: {
      question: '500.0 mL of bore water treated with excess AgNO₃ gives 1.435 g of pure, dry AgCl. Find the mass of Cl⁻ and its concentration in mg L⁻¹. Use Ag = 107.87 and Cl = 35.453 g mol⁻¹; assume complete selective precipitation.',
      coachNote: 'Use unrounded values in later steps. The stated volume is 0.5000 L; final answers use four significant figures.',
      steps: [
        'M(AgCl): 107.87 + 35.453 = 143.323 g mol⁻¹ retained for calculation (143.32 reported).',
        'n(AgCl) = 1.435 ÷ 143.323 ≈ 0.01001235 mol; AgCl : Cl⁻ = 1 : 1.',
        'm(Cl⁻) = (1.435 ÷ 143.323) × 35.453 ≈ 0.354967835 g → 0.3550 g.',
        'Convert the unrounded mass: approximately 354.967835 mg.',
        'c = [(1.435 ÷ 143.323) × 35.453 × 1000] ÷ 0.5000 ≈ 709.93567 mg L⁻¹ → 709.9 mg L⁻¹.',
      ],
      caption: 'Guard-digit calculation: 0.3550 g Cl⁻ and 709.9 mg L⁻¹ for the stated 500.0 mL sample.',
    },
    narration: 'This revised question states five hundred point zero millilitres, so the volume precision is clear. Excess silver nitrate produces one point four three five grams of pure, dry silver chloride. Assume complete selective precipitation. The supplied molar masses add to one hundred and forty-three point three two three grams per mole. Keep that guard-digit value for calculation. Divide the precipitate mass by it. The chloride amount equals the silver chloride amount because the ratio is one to one. Multiply the unrounded amount by thirty-five point four five three to get about nought point three five four nine six eight grams of chloride. Report nought point three five five zero grams. For concentration, convert the unrounded mass to milligrams and divide by nought point five zero zero zero litres. The result is about seven hundred and nine point nine three six milligrams per litre, reported as seven hundred and nine point nine to four significant figures. Do not substitute a rounded mole amount and claim it gives the same digits exactly.',
  },
  'chemistry-y11-m4-l2-calorimetry-combustion': {
    register: 'C20', scene: 'worked-example', rationale: 'State an idealised water-only heat balance, correct fuel amount and report to the two-significant-figure fuel input.',
    copy: {
      heading: 'An idealised combustion-calorimetry estimate',
      question: 'Burning 0.72 g of ethanol (M = 46.07 g mol⁻¹) raises 200.0 g of water from 19.5 °C to 31.2 °C. Estimate molar enthalpy using c(water) = 4.18 J g⁻¹ °C⁻¹. Assume constant pressure, complete combustion, no fuel evaporation, no external heat loss and negligible vessel heat capacity. Report to 2 significant figures.',
      coachNote: 'Use guard digits. This estimate follows the stated idealised heat balance; it is not a standard reference enthalpy.',
      steps: [
        'ΔT = 31.2 − 19.5 = 11.7 °C; the water gains heat.',
        'q(water) = 200.0 × 4.18 × 11.7 = 9781.2 J = 9.7812 kJ (guard digits).',
        'n(ethanol) = 0.72 ÷ 46.07 ≈ 0.01562839 mol (0.01563 to five decimal places).',
        'Under the stated assumptions, q(reaction) = −q(water).',
        'ΔH estimate = −[200.0 × 4.18 × 11.7 ÷ 1000] ÷ [0.72 ÷ 46.07] ≈ −625.86095 kJ mol⁻¹.',
        'Report −6.3 × 10² kJ mol⁻¹ (2 s.f.); negative means exothermic.',
      ],
      caption: 'Idealised estimate: −625.86095 kJ mol⁻¹ before rounding, reported −6.3 × 10² kJ mol⁻¹.',
    },
    narration: 'Use the assumptions in this revised question. The experiment is treated as constant pressure, with complete combustion, no fuel evaporation, no external heat loss and negligible vessel heat capacity. This gives an idealised estimate, not a standard reference value. The temperature rise is eleven point seven degrees. Water heat gain is two hundred times four point one eight times eleven point seven, which is nine thousand seven hundred and eighty-one point two joules. Divide by one thousand to get nine point seven eight one two kilojoules. Ethanol amount is nought point seven two divided by forty-six point zero seven, about nought point zero one five six two eight four moles. Keep the unrounded expression. Reaction heat is negative water heat under our assumptions. Dividing by the fuel amount gives about minus six hundred and twenty-five point eight six kilojoules per mole. The fuel mass has two significant figures, so report minus six point three times ten squared kilojoules per mole. Negative means exothermic.',
  },
  'chemistry-y11-m4-l3-calorimetry-neutralisation': {
    register: 'C20', scene: 'quick-check', rationale: 'Show J-to-kJ conversion, bound the solution heat model and use balanced complete-neutralisation stoichiometry.',
    copy: {
      question: '25.0 mL of 2.00 mol L⁻¹ H₂SO₄ mixes with 50.0 mL of 2.00 mol L⁻¹ NaOH. The given 75.0 g of solution warms by 9.2 °C. Assume c(solution) = 4.18 J g⁻¹ °C⁻¹, negligible calorimeter heat capacity and no external heat transfer. Find the heat gained by the solution (2 s.f.) and water formed, assuming complete neutralisation.',
      pausePrompt: 'Pause: distinguish solution heat from reaction heat, convert J to kJ and balance the reaction.',
      answerSteps: [
        'q(solution) = 75.0 × 4.18 × 9.2 = 2884.2 J = 2.8842 kJ (guard digits).',
        'Report q(solution) = +2.9 kJ (2 s.f.); q(reaction) ≈ −2.9 kJ under the stated heat assumptions.',
        'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O.',
        'n(H₂SO₄) = 2.00 × 0.0250 = 0.0500 mol; n(NaOH) = 2.00 × 0.0500 = 0.100 mol.',
        'Stoichiometric amounts: 0.0500 mol acid requires 0.100 mol base and forms 0.100 mol H₂O.',
      ],
      caption: 'Solution heat: 2884.2 J ÷ 1000 = 2.8842 kJ → +2.9 kJ; complete neutralisation forms 0.100 mol H₂O.',
    },
    narration: 'Find the heat gained by the solution and the water formed. Use the stated solution heat capacity and assume negligible calorimeter heating and no external heat transfer. Pause and calculate. Seventy-five times four point one eight times nine point two gives two thousand eight hundred and eighty-four point two joules. Divide by one thousand to obtain two point eight eight four two kilojoules. Since the temperature rise has two significant figures, report positive two point nine kilojoules gained by the solution. The reaction heat has the opposite sign under these assumptions. For water, use the balanced complete-neutralisation equation. One sulfuric acid reacts with two sodium hydroxides and forms two waters. There are nought point zero five zero zero moles of acid and nought point one zero zero moles of base. These are stoichiometric amounts, forming nought point one zero zero moles of water. This is net reaction accounting, not a claim about free proton concentrations before mixing.',
  },
  'chemistry-y11-m4-l4-calorimetry-dissolution': {
    register: 'C20', scene: 'quick-check', rationale: 'Use total solution mass with an explicit assumed solution heat capacity. This deliberately changes the water-only estimate.',
    copy: {
      question: 'Dissolving 5.00 g of anhydrous CaCl₂ (M = 110.98 g mol⁻¹) in 100.0 g of water raises the temperature by 9.5 °C. Assume complete dissolution, no mass loss, constant pressure, c(solution) = 4.18 J g⁻¹ °C⁻¹, negligible calorimeter heat capacity and no external heat transfer. Estimate molar enthalpy of solution to 2 significant figures.',
      pausePrompt: 'Pause: use total solution mass, then distinguish solution heat from dissolution heat.',
      answerSteps: [
        'm(solution) = 100.0 + 5.00 = 105.0 g; use the specified solution heat-capacity approximation.',
        'q(solution) = 105.0 × 4.18 × 9.5 = 4169.55 J = 4.16955 kJ (guard digits).',
        'n(CaCl₂) = 5.00 ÷ 110.98 ≈ 0.04505316 mol (0.04505 to five decimal places).',
        'ΔH estimate = −[105.0 × 4.18 × 9.5 ÷ 1000] ÷ [5.00 ÷ 110.98] ≈ −92.54733 kJ mol⁻¹.',
        'Report −93 kJ mol⁻¹ (2 s.f.), exothermic. This is an estimate for the stated dissolution conditions.',
      ],
      caption: 'With 105.0 g of solution and the stated heat-capacity approximation: ΔH estimate = −93 kJ mol⁻¹ (2 s.f.).',
    },
    narration: 'Use total solution mass in this revised question. Five point zero zero grams of anhydrous calcium chloride dissolves in one hundred point zero grams of water. Assume no mass loss, so the solution mass is one hundred and five point zero grams. The question supplies an approximate solution heat capacity of four point one eight, and assumes complete dissolution at constant pressure, negligible calorimeter heating and no external heat transfer. Pause and calculate. Solution heat gain is one hundred and five times four point one eight times nine point five, giving four thousand one hundred and sixty-nine point five five joules, or four point one six nine five five kilojoules. Calcium chloride amount is five divided by one hundred and ten point nine eight, about nought point zero four five zero five three two moles. Use unrounded expressions. The molar dissolution estimate is minus solution heat divided by the amount, about minus ninety-two point five four seven kilojoules per mole. Report minus ninety-three to two significant figures. The negative sign indicates exothermic dissolution. A water-only mass approximation would give a different estimate, so the mass and heat-capacity assumptions must be stated.',
  },
  'chemistry-y12-m6-l18-back-conductometric-titration': {
    register: 'C21', scene: 'worked-example', rationale: 'Keep unrounded mass for percentage and remove the unsupported product-label inference. State analytical selectivity.',
    copy: {
      question: 'A 6.20 × 10² mg antacid tablet reacts with 25.00 mL of 0.500 mol L⁻¹ HCl. Excess HCl needs 18.40 mL of 0.250 mol L⁻¹ NaOH. Assume CaCO₃ is the only tablet component consuming HCl, reaction is complete and the full excess is titrated. Use M(CaCO₃) = 100.1 g mol⁻¹. Report CaCO₃ mass and percentage by mass to the specified 3 s.f. convention.',
      coachNote: 'The question specifies a uniform reporting convention. Divide reacted acid by 2 and retain the unrounded mass for percentage; this is not an uncertainty analysis.',
      steps: [
        'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂; HCl + NaOH → NaCl + H₂O.',
        'n(HCl) added = 0.500 × 0.02500 = 0.01250 mol (guard digits).',
        'n(HCl) excess = 0.250 × 0.01840 = 0.004600 mol (guard digits).',
        'n(HCl) reacted = 0.01250 − 0.004600 = 0.007900 mol; n(CaCO₃) = 0.007900 ÷ 2 = 0.003950 mol.',
        'm(CaCO₃) = 0.003950 × 100.1 × 1000 = 395.395 mg before rounding → 395 mg (3 s.f.).',
        '% by mass = [0.003950 × 100.1 × 1000] ÷ 620 × 100 ≈ 63.7734% → 63.8% (specified 3 s.f.).',
        'No stated label content: no conclusion about whether the tablet meets a label claim.',
      ],
      caption: 'Use unrounded 395.395 mg for percentage: report 395 mg CaCO₃ and 63.8% by mass; no label comparison is supplied.',
    },
    narration: 'Use the analytical assumptions in the revised question: calcium carbonate is the only tablet component consuming acid, reaction is complete and the full acid excess is titrated. The tablet mass is specified to three significant figures. Total acid added is nought point five times nought point zero two five, giving nought point zero one two five moles. The excess acid equals the sodium hydroxide amount, nought point two five times nought point zero one eight four, giving nought point zero zero four six moles. Subtract to get nought point zero zero seven nine moles of reacted acid. One calcium carbonate reacts with two hydrochloric acids, so divide by two. Multiply the carbonate amount by one hundred point one grams per mole and convert to milligrams. The unrounded calculation gives three hundred and ninety-five point three nine five milligrams. Report three hundred and ninety-five milligrams to three significant figures. For the percentage, divide the unrounded mass by six hundred and twenty and multiply by one hundred. That gives about sixty-three point seven seven three percent, reported as sixty-three point eight. No label amount was provided, so we cannot conclude that the tablet is short of its label.',
  },
};

export function quantitativeRevision(name, bytes) {
  if (!quantitativeSources[name] || hash(bytes) !== quantitativeSources[name]) throw new Error(`Source changed: ${name}. Review the revision before refreshing its hash.`);
  const original = JSON.parse(bytes), revision = revisions[name];
  const before = original.scenes.find((scene) => scene.id === revision.scene);
  if (!before) throw new Error(`Missing scene: ${revision.scene}`);
  const scene = removeMediaAndCues(structuredClone(before));
  Object.assign(scene, revision.copy, {voiceover: {text: revision.narration}});
  if (JSON.stringify(scene).includes('\u2014')) throw new Error('Prohibited punctuation in scene proposal');
  const previous = new Map(stringFields(before).map(({field, text}) => [field, text]));
  const changes = stringFields(scene).filter(({field, text}) => previous.get(field) !== text)
    .map(({field, text}) => ({field, before: previous.get(field) ?? null, after: text}));
  return {register: revision.register, rationale: revision.rationale, scene, changes,
    durationStatus: 'inherited placeholder; pacing and response holds require new timing',
    status: 'unvoiced scene proposal; science review and full-lesson integration pending'};
}
