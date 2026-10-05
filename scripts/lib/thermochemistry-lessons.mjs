import {hash, stringFields} from './science-audit.mjs';
import {removeMediaAndCues} from './science-corrections.mjs';
import {removeSpeechCues} from './quantitative-lessons.mjs';
import {countWords, estimateSpeechSeconds} from '../lesson-utils.mjs';

export const thermochemistrySources = {
  'chemistry-y11-m4-l1-enthalpy-energy-profiles': '0b7830888260ad5c989628ae4c8063f9819a3bc22a92f73bd72c187adca0a326',
  'chemistry-y11-m4-l6-bond-energy': '3fb224bdb6efd509068e6ff680434246917e21acab4ea748da47222614fa5360',
  'chemistry-y11-m4-l7-enthalpy-of-formation': '7e224e9c5f003926de59cc7289ff804558d1f508893a73925e77b23bec178f3a',
  'chemistry-y11-m4-l9-hess-photosynthesis-respiration': '7340c8f35e17fab1366e4059b30576a1ff27fd1b6b60dd17606f0654435e08a1',
  'chemistry-y12-m6-l3-enthalpy-of-neutralisation': 'c66f6b3d7ec956cf529cf677a75ac382ed1b02bfd5491918aead6c97c32b5152',
  'chemistry-y12-m6-l10-neutralisation-enthalpy-strong-vs-weak': '32bcf7f8c4da8638d95953dc5d303092a32e2131290ad23a402b67c0c240f006',
};
export const thermochemistryMappings = {
  'enthalpy-energy-profiles': {points: ['p892', 'p898', 'p899'], inquiry: 'p885', register: 'C24'},
  'bond-energy': {points: ['p898', 'p899', 'p900'], inquiry: 'p895', register: 'C25'},
  'enthalpy-of-formation': {points: ['p900', 'p902'], inquiry: 'p895', register: 'C26'},
  'hess-photosynthesis-respiration': {points: ['p902', 'p904', 'p905'], inquiry: 'p895', register: 'C27'},
  'enthalpy-of-neutralisation': {points: ['p1125'], inquiry: 'p1115', register: 'C28'},
  'neutralisation-enthalpy-strong-vs-weak': {points: ['p1125'], inquiry: 'p1115', register: 'C28'},
};
const bullets = (texts) => texts.map((text) => ({text}));
const displayKeys = ['heading', 'body', 'bullets', 'callout', 'secondary', 'question', 'steps', 'answerSteps', 'points', 'coachNote', 'unitCancel', 'mistakeTag', 'finalPrompt', 'pausePrompt'];
export function thermochemistryDraft(name, bytes) {
  if (hash(bytes) !== thermochemistrySources[name]) throw new Error(`Source changed: ${name}`);
  const original = JSON.parse(bytes), draft = removeSpeechCues(removeMediaAndCues(structuredClone(original)));
  delete draft.introVoiceover; delete draft.productionRole; delete draft.productionNotes;
  const responses = {}, revised = new Set();
  const set = (id, copy, text) => {
    const scene = draft.scenes.find((item) => item.id === id);
    if (!scene) throw new Error(`Missing scene ${id}`);
    for (const key of displayKeys) delete scene[key];
    Object.assign(scene, copy, {voiceover: {text}}); revised.add(id);
    return scene;
  };
  const concept = (id, heading, body, points, text) => set(id, {heading, body, bullets: bullets(points), callout: points.at(-1), caption: body}, text);
  const misconception = (heading, body, text) => set('misconception', {heading, body, callout: body, mistakeTag: 'Check the inference', caption: body}, text);
  const summary = (points, text) => set('summary', {heading: 'Bring the reasoning together', points, finalPrompt: points.at(-1), caption: points.join(' ')}, text);
  const worked = (id, heading, question, steps, text) => set(id, {heading, question, coachNote: 'Use the supplied assumptions and retain guard digits.', steps, caption: steps.at(-1)}, text);
  const response = (question, steps, prompt, answer, seconds) => {
    set('quick-check', {heading: 'Your turn', question, pausePrompt: 'Pause and record your reasoning before checking.', answerSteps: steps, caption: steps.at(-1)}, `${prompt} ${answer}`);
    responses['quick-check'] = {promptText: prompt, answerText: answer, minimumThinkingSeconds: seconds,
      rationale: 'Allow independent working and an explanation on paper.', status: 'planning target; final silence and answer boundary require measured assembly'};
  };
  set('title', {caption: draft.title}, `${draft.title}. ${draft.yearLevel} Chemistry, ${draft.module}.`);

  if (name.endsWith('enthalpy-energy-profiles')) {
    draft.subtitle = 'System enthalpy, energy profiles and a clear reaction basis';
    draft.lessonIntent = 'Students distinguish system enthalpy from heat, read a simple energy profile and scale a thermochemical equation without changing a specified per-substance molar value.';
    concept('hook', 'Which system changes?', 'A warming pack transfers energy outward; a cooling pack draws energy from its surroundings.',
      ['Name the reacting system and the surroundings.', 'Describe the direction of heat transfer.', 'Use the reaction conditions when connecting heat to ΔH.'],
      'A warming pack and a cooling pack help us ask where energy goes. Name the changing chemicals as the system and your hand and the room as surroundings. A warming pack transfers heat outward. A cooling pack draws heat inward. Different packs use different processes, so a package alone does not identify the chemistry. Our focus is the system enthalpy change and the conditions under which it relates to heat.');
    concept('concept', 'Enthalpy is a state function', 'H = U + pV. ΔH = H(products) − H(reactants).',
      ['Heat is energy transferred, not a substance stored inside chemicals.', 'At constant pressure with only pressure-volume work, q(system) = ΔH.', 'Exothermic ΔH < 0; endothermic ΔH > 0 under the stated reaction conditions.'],
      'Enthalpy is a state function defined as internal energy plus pressure times volume. Heat is energy transferred, rather than material stored in a substance. At constant pressure, with only pressure-volume work, heat entering the system equals its enthalpy change. For specified reactant and product states, delta H is products minus reactants. Negative is exothermic and positive is endothermic. The sign refers to the system.');
    concept('definition', 'Read the specified simple profile', 'Reactant-to-product separation gives ΔH; reactant-to-peak separation gives the forward barrier in this simple model.',
      ['Use the labelled energy axis and reaction coordinate.', 'Read the forward and reverse barriers from their respective starting levels.', 'A multistep reaction can have several barriers; this single-peak illustration is scoped.'],
      'On a simple single-peak profile, reactants start at one level and products end at another. Their difference represents the reaction enthalpy in the labelled model. The forward barrier is measured upward from reactants to the peak; the reverse barrier starts at products. This is a simplified profile. A real multistep reaction can have several intermediates and barriers, and a calculation diagram does not prove its actual mechanism.');
    concept('formula', 'Specify the reaction basis', 'Energy for stoichiometric quantities scales with the written equation; energy per mole of a named substance has its own fixed basis.',
      ['Write phases and the reference conditions.', 'Doubling all coefficients doubles the enthalpy for the written quantities.', 'Reversing the same reaction changes the enthalpy sign.'],
      'Attach an enthalpy to a clearly balanced equation and specified states. If the equation represents one mole of propane reacting, doubling every coefficient represents two moles and doubles the associated kilojoules. The energy per mole of propane remains the same. Reversing the same reaction flips the sign. Distinguish kilojoules for the written stoichiometric quantities from kilojoules per mole of a named substance or of reaction extent.');
    const equation = draft.scenes.find((scene) => scene.id === 'formula').diagram.props;
    equation.header = 'Scale energy with the written stoichiometric quantities';
    equation.rules[0].text = 'Matched states: reverse reaction, reverse enthalpy sign';
    equation.rules[1].text = 'State whether the unit is kJ or kJ per mole of a named substance';
    worked('worked-example', 'Propane: total versus molar energy', 'C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l) has supplied molar combustion enthalpy −2.220 × 10³ kJ mol⁻¹ of propane. Find energy for 2.00 mol and reverse the written stoichiometric reaction.',
      ['The supplied negative molar value classifies the forward reaction as exothermic.', 'For 2.00 mol propane: ΔH = 2.00 × (−2220) = −4440 kJ.', 'Report 4.44 × 10³ kJ released (3 s.f.); system ΔH = −4.44 × 10³ kJ.', 'For 3CO₂(g) + 4H₂O(l) → C₃H₈(g) + 5O₂(g), ΔH = +2220 kJ for the written quantities.', 'Doubling the forward equation gives −4440 kJ, while the value per mole propane stays −2220 kJ mol⁻¹.'],
      'Use the supplied value for the stated phases. Two point zero zero moles of propane times minus two thousand two hundred and twenty kilojoules per mole gives minus four thousand four hundred and forty kilojoules for the system. Report four point four four times ten to the three kilojoules released. Reverse the equation with one propane and the written quantities have positive two thousand two hundred and twenty kilojoules. Doubling an equation changes its total energy basis, not the combustion energy per mole of propane.');
    misconception('Keep system and surroundings distinct', 'Heat released is a positive reported magnitude; the system enthalpy change is negative under the stated heat relation.',
      'A statement that a reaction releases heat often quotes a positive magnitude. Its system enthalpy change is negative under the specified constant-pressure conditions. The surroundings can gain energy while the system loses it. Also check the denominator of any molar value. A result for two moles of product is not automatically the result per mole of that product.');
    response('A simple single-peak profile has forward barrier 95 kJ mol⁻¹ and reaction enthalpy −40 kJ mol⁻¹, using the same reaction basis. Classify the reaction and find the reverse barrier.',
      ['ΔH < 0: exothermic.', 'Products are 40 kJ mol⁻¹ below reactants on this profile.', 'Reverse barrier = 95 − (−40) = 135 kJ mol⁻¹ for the same peak and reaction basis.'],
      'A simple single-peak profile has a forward barrier of ninety-five kilojoules per mole and enthalpy change minus forty, using the same reaction basis. Classify it and find the reverse barrier. Pause and draw the levels.',
      'It is exothermic. Products sit forty kilojoules per mole below reactants. The reverse climb to the same peak is ninety-five minus negative forty, giving one hundred and thirty-five kilojoules per mole. This answer uses the specified single-peak model.', 50);
    summary(['ΔH compares specified system states.', 'Heat equals ΔH under the stated constant-pressure work conditions.', 'Read barriers from their respective starting levels.', 'Scale written-quantity energy and retain the named molar basis.', 'State the reaction, phases and energy basis.'],
      'Compare specified system states. Relate heat to enthalpy only under the stated pressure and work conditions. Read each barrier from its own starting level in the scoped profile. Scaling stoichiometric quantities scales their associated energy, while a named per-substance molar value keeps its basis. State the reaction, phases and energy basis before interpreting a number.');
  } else if (name.endsWith('bond-energy')) {
    draft.subtitle = 'A gas-phase accounting cycle, with an explicit approximation';
    draft.lessonIntent = 'Students estimate a gas-phase reaction enthalpy from supplied bond enthalpies and distinguish the atomisation accounting cycle from an actual reaction pathway.';
    concept('hook', 'Account for bonds without inventing a pathway', 'An ammonia-production calculation can compare bond breaking and forming without claiming every molecule first becomes separate atoms.',
      ['Gas-phase bond separation requires energy.', 'Gas-phase bond formation releases energy.', 'A bond-accounting cycle does not determine catalytic steps or activation energy.'],
      'Nitrogen and hydrogen can form ammonia through a catalytic process. Bond enthalpies help estimate an energy balance, but they do not tell us its actual catalytic steps. Our calculation imagines a gas-phase route through separated atoms. That is an accounting cycle connecting starting and ending states, not a claim that the real reaction follows that route or that its activation energy equals an atomisation sum.');
    concept('concept', 'Use a hypothetical gas-phase cycle', 'Estimate ΔH ≈ Σ(bond enthalpies broken) − Σ(bond enthalpies formed).',
      ['Count bonds using the balanced equation and structures.', 'Mean bond enthalpies are gas-phase averages.', 'The separate-atom level is a hypothetical intermediate in the calculation.'],
      'Separating gas-phase bonded atoms requires energy, while forming the corresponding bonds releases energy. Count bonds from the balanced equation and structures. Estimate delta H as broken minus formed. Tabulated mean bond enthalpies are often averages over different molecular environments, so their reaction estimate is approximate. The separate-atom level in this diagram belongs to the hypothetical calculation cycle. It is not an observed transition state or proof of the real mechanism.');
    const ladder = draft.scenes.find((scene) => scene.id === 'concept').diagram.props;
    ladder.header = 'H₂(g) + Cl₂(g) → 2HCl(g): hypothetical gas-phase cycle';
    ladder.panels[0].levels[1].sub = 'hypothetical gas-phase atoms';
    ladder.steps[0].text = 'Estimated ΔH ≈ Σ(bonds broken) − Σ(bonds formed)';
    ladder.steps[1].text = 'A thermochemical cycle, not the actual reaction mechanism';
    worked('worked-example', 'Use the supplied gas-phase values', 'Estimate ΔH for H₂(g) + Cl₂(g) → 2HCl(g). Supplied bond enthalpies: H–H 436, Cl–Cl 243, H–Cl 432 kJ mol⁻¹ of bonds.',
      ['For the written stoichiometric quantities, breaking uses 436 + 243 = 679 kJ.', 'Forming two moles of H–Cl bonds releases 2 × 432 = 864 kJ.', 'Estimated ΔH = 679 − 864 = −185 kJ for the written quantities.', 'Equivalent basis: −185 kJ mol⁻¹ of H₂ consumed, or −92.5 kJ mol⁻¹ of HCl formed.', 'The supplied gas-phase accounting predicts an exothermic reaction; averaged values do not guarantee exact experimental enthalpy.'],
      'For one mole each of hydrogen and chlorine, the supplied breaking contributions add to six hundred and seventy-nine kilojoules. Two moles of hydrogen-chlorine bonds return eight hundred and sixty-four. The estimate is minus one hundred and eighty-five kilojoules for the written quantities. That is minus one hundred and eighty-five per mole of hydrogen consumed, or minus ninety-two point five per mole of hydrogen chloride formed. Keep the gas-phase basis and approximation explicit.');
    misconception('Bond breaking is not the heat source', 'Separating gas-phase bonds absorbs energy. The net balance and any required phase changes determine reaction enthalpy.',
      'Bond separation requires energy; it is not the source of released reaction heat. The net balance depends on both breaking and forming. Mean gas-phase bond values also do not directly describe aqueous ions, ionic lattice changes or a liquid product without appropriate additional terms. Check phases and model scope before using the shortcut.');
    response('For H₂(g) + Br₂(g) → 2HBr(g), supplied breaking contributions total 629 kJ and forming contributions total 732 kJ for the written quantities. Estimate ΔH, classify it, then express it per mole of HBr formed.',
      ['Estimated ΔH = 629 − 732 = −103 kJ for the written quantities.', 'Negative: exothermic under this supplied gas-phase model.', 'Two moles HBr form; estimate per mole HBr = −103 ÷ 2 = −51.5 kJ mol⁻¹.'],
      'For the written hydrogen and gaseous bromine reaction forming two hydrogen bromides, supplied breaking contributions are six hundred and twenty-nine kilojoules and forming contributions seven hundred and thirty-two. Estimate the net change, classify it, then state the value per mole of hydrogen bromide. Pause and calculate.',
      'Broken minus formed gives minus one hundred and three kilojoules for the written quantities, so the model predicts exothermic behaviour. Two moles of hydrogen bromide form. Divide by two for minus fifty-one point five kilojoules per mole of hydrogen bromide.', 60);
    summary(['Break gas-phase bonds: absorb energy.', 'Form gas-phase bonds: release energy.', 'Mean bond values give a scoped approximation.', 'An atomisation cycle is not an actual mechanism or activation barrier.', 'Count bonds, check phases and name the molar basis.'],
      'Gas-phase bond separation absorbs energy and formation releases it. Mean bond values provide a scoped approximation through a hypothetical atomisation cycle. Do not confuse that route with an actual mechanism or activation barrier. Count bonds from the balanced equation, check phases and state the molar basis of the answer.');
  } else if (name.endsWith('enthalpy-of-formation')) {
    draft.subtitle = 'Reference states, specified temperature and coefficient-weighted sums';
    draft.lessonIntent = 'Students use formation enthalpies for specified states, distinguish standard pressure from reference temperature and state the reaction/product basis of a calculated enthalpy.';
    concept('hook', 'Check the table before subtracting', 'Formation-enthalpy tables support a reaction calculation when species, phases and reference conditions match.',
      ['Choose the balanced reaction and phases.', 'Use values at the same stated temperature.', 'A table calculation does not establish mechanism or usable device energy.'],
      'A reaction enthalpy can be calculated from formation data when the species, phases and reference conditions match. Choose the balanced reaction first, then check the table. Its answer describes the specified state change. It does not by itself establish reaction rate, the actual mechanism or the fraction of energy a device can convert into useful work.');
    concept('concept', 'Standard pressure and elemental reference states', 'ΔfH° forms one mole of a specified substance from elements in their reference states at a specified temperature.',
      ['Modern standard pressure is 1 bar (100 kPa).', '298.15 K (25 °C) is a common table temperature, not part of the definition of standard.', 'Only the chosen elemental reference states have ΔfH° = 0 by convention.'],
      'Standard formation enthalpy refers to forming one mole of a specified substance from elements in their reference states. Modern standard pressure is one bar, or one hundred kilopascals. Twenty-five degrees Celsius is a common tabulation temperature, but standard does not itself fix temperature. The chosen stable elemental reference states have zero formation enthalpy by convention at the specified temperature. Other allotropes, atomic forms and phases do not automatically have zero values.');
    const ladder = draft.scenes.find((scene) => scene.id === 'concept').diagram.props;
    ladder.header = 'ΔfH°: one mole of specified substance from elemental reference states';
    ladder.panels[0].zero.label = '0: chosen elemental reference states';
    ladder.panels[0].arrows[0].sub = '1 bar; temperature specified';
    ladder.steps[0].text = 'A conventional formation reference, not zero absolute enthalpy';
    ladder.steps[1].text = 'At 298.15 K: H₂(g), O₂(g), C(graphite) are reference forms';
    ladder.steps[2].text = 'Other allotropes or atomic forms need their own values';
    concept('formula', 'Products minus reactants, with coefficients', 'For a matched data set: ΔrH° = ΣνΔfH°(products) − ΣνΔfH°(reactants).',
      ['Multiply every formation value by its balanced coefficient.', 'Keep physical states and temperature consistent.', 'Specify written stoichiometric quantities and any named per-mole basis.'],
      'Multiply each formation enthalpy by its balanced coefficient, sum products, then subtract the reactant sum. Use values for the written physical states and a consistent temperature. A reference-state element contributes zero, but an arbitrary form of an element may not. State whether the result is kilojoules for the written quantities or a molar reaction value with a defined basis.');
    worked('worked-example', 'Methane with liquid water products', 'For CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l), use supplied ΔfH° values at 298.15 K and 1 bar: CH₄ −74.8, O₂ 0, CO₂ −393.5, H₂O(l) −285.8 kJ mol⁻¹. Calculate the enthalpy on a one-mole CH₄ basis.',
      ['Product sum = −393.5 + 2 × (−285.8) = −965.1 kJ.', 'Reactant sum = −74.8 + 2 × 0 = −74.8 kJ.', 'Difference = −965.1 − (−74.8) = −890.3 kJ for the written quantities.', 'Supplied-data result: −890.3 kJ mol⁻¹ of CH₄ consumed, exothermic.', 'A gas-water product would require the gas-water formation value; retain the stated liquid phase.'],
      'Use the supplied formation values at the stated temperature and pressure. Carbon dioxide plus two liquid waters gives a product sum of minus nine hundred and sixty-five point one kilojoules. The reactants sum to minus seventy-four point eight because reference oxygen contributes zero. Subtract to obtain minus eight hundred and ninety point three kilojoules for one mole of methane. This is the supplied-data result for liquid water products, not an exact value for every combustion condition.');
    misconception('Element does not automatically mean zero', 'Zero formation enthalpy belongs to the chosen elemental reference form, not to every allotrope or phase.',
      'Oxygen gas in its reference form has zero standard formation enthalpy by convention. That does not make an oxygen atom or ozone zero. Graphite and diamond also have different formation references. The convention does not mean that reference substances contain no internal energy or have zero absolute enthalpy. Use the exact species and reference form in the data set.');
    response('For 2H₂(g) + O₂(g) → 2H₂O(l), use supplied formation values 0, 0 and −285.8 kJ mol⁻¹ at 298.15 K. Find energy for the written quantities and the value per mole of water formed.',
      ['Reactant sum = 0.', 'Product sum = 2 × (−285.8) = −571.6 kJ for the written quantities.', 'Per mole of H₂O formed: −571.6 ÷ 2 = −285.8 kJ mol⁻¹.'],
      'For two hydrogen gases plus one oxygen gas forming two liquid waters, reference reactants have formation values zero and water has minus two hundred and eighty-five point eight kilojoules per mole. Find the energy for the written quantities and the value per mole of water. Pause and label both bases.',
      'The reactant sum is zero. Two times the water value gives minus five hundred and seventy-one point six kilojoules for the written quantities. Two moles of water form, so divide by two for minus two hundred and eighty-five point eight kilojoules per mole of water.', 60);
    summary(['Specify species, phases, pressure and temperature.', '1 bar is the modern standard pressure.', 'Zero is a formation convention for elemental reference states.', 'Weight products and reactants by balanced coefficients.', 'State the reaction and named molar basis.'],
      'Check species, phases, pressure and temperature. Modern standard pressure is one bar, while table temperature must be specified separately. Zero formation enthalpy is a convention for the elemental reference states. Weight every term by its balanced coefficient, subtract reactants from products, and state the reaction and named molar basis.');
  } else if (name.endsWith('hess-photosynthesis-respiration')) {
    draft.subtitle = 'Matched overall equations, distinct biological pathways';
    draft.lessonIntent = 'Students reverse a specified overall thermochemical equation while distinguishing its enthalpy from biological pathways, useful work and required light input.';
    concept('hook', 'Reverse an equation, then check its scope', 'Simplified glucose oxidation and glucose synthesis equations can be written as reverses with matched states.',
      ['Balance the same species on both sides.', 'Specify phases, temperature and reaction basis.', 'Real photosynthesis and respiration use different biochemical pathways.'],
      'A simplified glucose oxidation equation and its reverse can share the same overall species when their states match. Hess law then relates their enthalpy changes. Real photosynthesis and respiration use different biochemical pathways and energy-coupling steps. The reversed overall equation is useful thermochemical accounting; it does not mean a plant runs cellular respiration backwards.');
    concept('concept', 'Match the endpoints', 'Reverse the same specified state change to reverse ΔH. The enthalpy diagram does not show biochemical intermediates.',
      ['Glucose oxidation is exothermic in the supplied model.', 'The matched reverse state change has positive ΔH.', 'Light supplies energy through a different pathway; required photon input is not simply ΔH.'],
      'For the supplied glucose oxidation model, products lie below reactants in enthalpy. Reversing that same state change gives the opposite enthalpy sign with equal magnitude. Real photosynthesis captures light and uses coupled biochemical processes. Its photon requirement and energy losses are not given by this enthalpy difference alone. Likewise, a cell cannot turn the full oxidation enthalpy into useful ATP energy.');
    const ladder = draft.scenes.find((scene) => scene.id === 'concept').diagram.props;
    ladder.panels[0].levels[0].label = 'C₆H₁₂O₆(s) + 6O₂(g)';
    ladder.panels[0].levels[1].label = '6CO₂(g) + 6H₂O(l)';
    ladder.panels[0].arrows[0].label = 'overall oxidation';
    ladder.panels[0].arrows[1].label = 'matched reverse';
    ladder.panels[0].heat.label = 'light: energy input';
    ladder.steps[0].text = 'Specified overall oxidation: ΔH < 0';
    ladder.steps[1].text = 'Matched reverse state change: ΔH > 0';
    ladder.steps[2].text = 'Same endpoints and conditions: opposite enthalpy signs';
    ladder.steps[3].text = 'Biological pathways and required light input are separate questions';
    worked('worked-example', 'A specified overall glucose equation', 'For C₆H₁₂O₆(s) + 6O₂(g) → 6CO₂(g) + 6H₂O(l) at a stated common reference temperature, use supplied ΔH = −2803 kJ for the written quantities. Find ΔH for the exactly reversed equation with identical phases and temperature.',
      ['The target reverses the same species, states and stoichiometric quantities.', 'Reverse ΔH = −(−2803) = +2803 kJ for the written quantities.', 'Equivalent named basis: +2803 kJ mol⁻¹ of glucose formed in the stated model.', 'This result does not specify the biological mechanism, photon requirement or useful ATP yield.'],
      'Use the supplied minus two thousand eight hundred and three kilojoules for the written glucose oxidation quantities. Reverse every species with the same phases and temperature. The enthalpy becomes plus two thousand eight hundred and three kilojoules, or that value per mole of glucose formed on this basis. The calculation does not measure real photon input or useful ATP yield, and it does not prescribe a biological pathway.');
    misconception('Overall reversal does not reverse a mechanism', 'Hess law concerns specified initial and final states. Matching overall equations does not establish identical reversed biochemical steps.',
      'Hess law links the enthalpy of matched endpoints independently of the route. It does not say that photosynthesis is cellular respiration running backwards. A change of physical state, concentration or coupled chemistry can also change the overall comparison. Name the model and its states before carrying an enthalpy across to a biological claim.');
    response('A supplied CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l) reaction has ΔH = −890 kJ for the written quantities. Find ΔH for its matched reverse. Does the result alone prove whether a reverse pathway can operate?',
      ['Matched reverse ΔH = +890 kJ for the written quantities: endothermic.', 'This enthalpy alone does not establish feasibility, rate, pathway or required external input.', 'Those questions require suitable thermodynamic and kinetic evidence.'],
      'The supplied methane equation has enthalpy minus eight hundred and ninety kilojoules for the written quantities. Find the matched reverse enthalpy and decide whether that result alone proves a reverse pathway can operate. Pause and distinguish the questions.',
      'The matched reverse is plus eight hundred and ninety kilojoules, so it is endothermic. That enthalpy alone does not prove feasibility, rate or pathway. It also does not specify the external input needed by a real process. Thermodynamic and kinetic evidence are separate from reversing the equation.', 50);
    summary(['Reverse matched species, states and quantities.', 'Matched reverse ΔH has equal magnitude and opposite sign.', 'Overall equations are thermochemical models.', 'Biological pathways, light input and ATP yield need separate evidence.', 'Check the model before extending its conclusion.'],
      'Reverse matched species, states and quantities to flip the enthalpy sign. Use the overall equations as scoped thermochemical models. Real biological pathways, required light input and useful ATP yield need their own evidence. Check the model before extending its conclusion.');
  } else if (name.endsWith('enthalpy-of-neutralisation')) {
    draft.subtitle = 'A stated heat model and balanced water stoichiometry';
    draft.lessonIntent = 'Students estimate neutralisation enthalpy using balanced water stoichiometry, a stated heat model and measured conditions, while bounding explanations of differences.';
    draft.examSkill = 'Use total model mass and signed heat balance, obtain water amount from balanced stoichiometry, retain guard digits and evaluate alternative causes of a calorimetric discrepancy.';
    concept('hook', 'A reference is not a universal thermometer result', 'Dilute strong-acid/strong-base neutralisation often has a similar per-water enthalpy near −57 kJ mol⁻¹ under comparable conditions.',
      ['The common ionic reaction supports a comparison.', 'Temperature, concentration and mixing effects still matter.', 'A practical requires measurements and a reviewed procedure.'],
      'Dilute strong-acid and strong-base neutralisations often have similar per-water enthalpies near minus fifty-seven kilojoules per mole under comparable conditions. Their common net ionic reaction helps explain that pattern. It does not guarantee identical thermometer readings for every solution or apparatus. We will estimate enthalpy using stated assumptions and ask what additional evidence a real measurement requires.');
    concept('concept-why', 'A shared net ionic reaction', 'H⁺(aq) + OH⁻(aq) → H₂O(l) is a useful dilute strong-acid/strong-base reference.',
      ['H⁺ is aqueous proton shorthand, not an unsolvated particle.', 'Spectator ions cancel from the net ionic equation.', 'Spectator cancellation does not eliminate dilution, solvation or mixing heat.'],
      'For dilute aqueous hydrochloric acid and sodium hydroxide, the net ionic reaction is aqueous hydrogen ion plus hydroxide giving water. Hydrogen ion here is shorthand for the solvated proton. Sodium and chloride cancel from that equation. They still belong to the solution, and cancellation does not mean dilution, solvation or mixing have no energy effects. Compare reactions under appropriately matched conditions.');
    const net = draft.scenes.find((scene) => scene.id === 'concept-why').diagram.props;
    net.others[0].text = 'Common dilute net ionic reaction; compare matched conditions';
    concept('concept-weak', 'A scoped weak-acid comparison', 'HA(aq) ⇌ H⁺(aq) + A⁻(aq) contributes to a matched neutralisation cycle.',
      ['Ionisation fraction depends on acid, concentration and temperature.', 'A positive ionisation term makes the matched cycle less exothermic.', 'Weakness alone does not determine the ionisation-enthalpy sign.'],
      'A weak acid is only partly ionised at equilibrium, with the fraction depending on its identity, concentration and temperature. Neutralisation can draw further acid through that equilibrium. A matched thermochemical cycle includes the ionisation enthalpy as well as proton neutralisation. In a supplied example with a positive ionisation term, the net cycle is less exothermic. Do not generalise that sign to every weak acid or interpret aqueous ionisation as isolated gas-phase bond breaking.');
    const ledger = draft.scenes.find((scene) => scene.id === 'concept-weak').diagram.props;
    ledger.numbers = true;
    ledger.steps = [{label: 'H⁺ + OH⁻ → H₂O', sub: 'supplied reference', kind: 'release', value: 57.3},
      {label: 'HA ionisation', sub: 'supplied positive term', kind: 'cost', value: 2.1},
      {label: 'matched cycle', sub: 'illustrative, not measured', kind: 'net', value: 55.2}];
    concept('definition', 'Define both the heat and the denominator', 'Under the exercise model, ΔH per water amount = −q(solution)/n(H₂O), with J converted to kJ.',
      ['Use solution mass and the supplied heat capacity.', 'Assume common initial temperature, negligible vessel heat and no external heat exchange.', 'Find water amount from the balanced reaction and available reactants.'],
      'Use the total solution mass and the supplied specific heat capacity to calculate signed solution heat. For these exercises, assume both reactants start at the same temperature, vessel heat is negligible and no heat is exchanged with the room. The observed heat is assigned to neutralisation within the model. Reaction heat is negative solution heat. Divide by the water amount from balanced stoichiometry, then convert joules to kilojoules. A base can supply more than one hydroxide per formula unit, so the denominator is not a universal single c V value.');
    const assumptions = 'Assume complete neutralisation, a common initial temperature, density 1.00 g mL⁻¹, c(solution) = 4.18 J g⁻¹ °C⁻¹, negligible vessel heat and external exchange, and heat assigned to neutralisation. Estimate ΔH per mole water to 2 s.f.';
    worked('worked-example', 'Equal reactant amounts', `50.0 mL of 1.00 mol L⁻¹ HCl mixes with 50.0 mL of 1.00 mol L⁻¹ NaOH. Both start at 21.5 °C; final temperature is 28.0 °C. ${assumptions}`,
      ['Model mass = 100.0 g; ΔT = +6.5 °C.', 'q(solution) = 100.0 × 4.18 × 6.5 = 2717 J.', 'HCl and NaOH each supply 0.0500 mol; balanced 1:1 water amount = 0.0500 mol.', 'ΔH estimate = −2.717 ÷ 0.0500 = −54.34 kJ mol⁻¹ (guard digits).', 'Report −54 kJ mol⁻¹ (2 s.f.); this result alone does not identify the cause of a reference discrepancy.'],
      'Under the stated model, total solution mass is one hundred grams and temperature rise six point five degrees. Solution heat is two thousand seven hundred and seventeen joules. Equal reactant amounts give nought point zero five zero zero moles of water. Reaction heat divided by that amount is minus fifty-four point three four kilojoules per mole before rounding. Report minus fifty-four to two significant figures. A difference from a reference could have several causes; this calculation alone does not identify heat loss.');
    worked('worked-example-2', 'Unequal reactant amounts', `30.0 mL of 2.00 mol L⁻¹ HNO₃ mixes with 50.0 mL of 1.00 mol L⁻¹ NaOH. Both start at 20.0 °C; final temperature is 26.4 °C. ${assumptions}`,
      ['Acid neutralisable amount = 0.0600 mol; hydroxide amount = 0.0500 mol.', 'For this 1:1 reaction, hydroxide limits and water amount = 0.0500 mol.', 'Model mass = 80.0 g; ΔT = +6.4 °C.', 'q(solution) = 80.0 × 4.18 × 6.4 = 2140.16 J.', 'ΔH estimate = −2.14016 ÷ 0.0500 = −42.8032 kJ mol⁻¹ → −43 kJ mol⁻¹ (2 s.f.).'],
      'Acid supplies nought point zero six moles for the stated reaction and hydroxide nought point zero five. Hydroxide limits this one-to-one reaction, giving nought point zero five moles of water. Eighty grams of model solution warming six point four degrees gains two thousand one hundred and forty point one six joules. Carry guard digits through division. The per-water estimate is minus forty-two point eight zero three two kilojoules per mole, reported minus forty-three to two significant figures.');
    misconception('Check the model before explaining the difference', 'A discrepancy from a reference does not identify acid strength, completion or measurement error by itself.',
      'Three checks matter. First, a reference near minus fifty-seven is not a universal maximum and a more negative reading is not automatically impossible. Second, use the entire model solution mass. Third, heat lost from a warm solution can reduce the observed temperature rise, but other errors or mixing effects can act differently. Use controls and temperature data to test explanations instead of naming a cause from the final number alone.');
    response('40.0 mL of 0.500 mol L⁻¹ H₂SO₄ reacts with 60.0 mL of 0.500 mol L⁻¹ NaOH. Assume complete neutralisation of available hydroxide with sufficient acid, with no competing reactions. Use H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O to find water amount.',
      ['H₂SO₄ amount = 0.0200 mol; full-neutralisation capacity = 0.0400 mol OH⁻ equivalents.', 'NaOH supplies 0.0300 mol OH⁻ and limits water formation.', 'Water amount = 0.0300 mol under the stated neutralisation assumptions.', 'Acid capacity is not a claim that all second protons were freely ionised before mixing.'],
      'Forty millilitres of nought point five zero zero molar sulfuric acid reacts with sixty millilitres of the same molarity sodium hydroxide. Assume available hydroxide is completely neutralised with sufficient acid and no competing reactions. Use the balanced two-hydroxide equation to find water amount. Pause and compare capacities.',
      'Sulfuric acid amount is nought point zero two zero zero moles, with full-neutralisation capacity nought point zero four zero zero hydroxide equivalents. Base supplies nought point zero three zero zero moles hydroxide and limits water formation. Water amount is nought point zero three zero zero moles. That stoichiometric capacity does not mean all second protons were freely ionised before mixing.', 60);
    summary(['State the reaction, heat model and per-water convention.', 'Use total solution mass and signed temperature change.', 'Find water amount from balanced stoichiometry.', 'A weak-acid cycle needs its own ionisation term and conditions.', 'Test discrepancy explanations with additional evidence.'],
      'State the reaction, heat model and per-water convention. Use total solution mass and signed temperature change. Find water amount from balanced stoichiometry. A weak-acid cycle needs its own ionisation term and matched conditions. Test explanations of discrepancies with additional measurements rather than treating one reference as a universal bound.');
  } else if (name.endsWith('neutralisation-enthalpy-strong-vs-weak')) {
    draft.subtitle = 'Compare heat models without inferring acid strength from heat alone';
    draft.lessonIntent = 'Students compare stated calorimetric estimates, use a matched hypothetical ionisation cycle and explain why heat differences alone cannot classify or rank acid strength.';
    draft.examSkill = 'Calculate per-water enthalpy with guard digits, distinguish model differences from intrinsic ionisation enthalpy, and require equilibrium evidence for acid strength.';
    concept('hook', 'What does a heat difference establish?', 'Two neutralisations can give different heat estimates. A difference needs a model and controls before it receives a molecular explanation.',
      ['Keep reaction amount, temperature and heat model comparable.', 'Distinguish a measured difference from an inferred property.', 'Do not classify acid strength from heat alone.'],
      'Two acid-base mixtures can give different heat estimates. The difference is an observation to explain, not direct proof of acid strength or an isolated ionisation energy. We need matched reaction amounts and conditions, suitable heat-capacity and loss treatment, and a model of all contributing processes. Today we calculate differences, use a clearly supplied thermochemical cycle and identify what the numbers leave unresolved.');
    concept('concept-baseline', 'A scoped reference, not a limit', 'A dilute strong-acid/strong-base reference near −57 kJ mol⁻¹ is useful under comparable conditions; it is not a universal lower bound.',
      ['Aqueous H⁺ + OH⁻ → H₂O supports the dilute comparison.', 'Mixing, dilution and specific solution effects can contribute.', 'A value such as −59 is not automatically forbidden or proof of error.'],
      'The aqueous proton and hydroxide reaction provides a useful dilute reference near minus fifty-seven kilojoules per mole of water under comparable conditions. It is not the maximum possible heat release for every acid-base system. Mixing, dilution, solution composition and other reaction contributions can matter. A value such as minus fifty-nine is a result to investigate with its conditions and uncertainty, not an automatically forbidden number.');
    const markers = draft.scenes.find((scene) => scene.id === 'concept-baseline').diagram.props;
    delete markers.floor;
    markers.reference = {value: 57.3, label: 'supplied dilute comparison'};
    markers.markers[0] = {value: 57.3, label: 'reference under stated conditions', tone: 'accent'};
    markers.markers[1] = {value: 59, label: 'investigate conditions and uncertainty', tone: 'amber'};
    markers.markers[2] = {value: 52, label: 'smaller release magnitude', tone: 'blue'};
    concept('concept-mechanism', 'Add matched thermochemical reactions', 'HA → H⁺ + A⁻, then H⁺ + OH⁻ → H₂O, gives HA + OH⁻ → A⁻ + H₂O for matched states.',
      ['In a supplied hypothetical cycle, −57.3 + 2.1 = −55.2 kJ mol⁻¹.', 'The ionisation term includes aqueous interactions, not only an isolated bond.', 'A positive term in this example does not establish its sign for every weak acid.'],
      'Write a matched cycle for aqueous H A. Its ionisation gives aqueous proton and A minus, followed by proton neutralisation with hydroxide. Adding the reactions gives H A plus hydroxide yielding A minus and water. In our supplied hypothetical cycle, minus fifty-seven point three plus two point one gives minus fifty-five point two kilojoules per mole. The positive term is a premise of this example. Aqueous ionisation includes solvent interactions and is not simply gas-phase bond breaking; weakness alone does not fix its enthalpy sign.');
    const ledger = draft.scenes.find((scene) => scene.id === 'concept-mechanism').diagram.props;
    ledger.steps[0].sub = 'supplied reference'; ledger.steps[1].label = 'HA ionisation'; ledger.steps[1].sub = 'supplied positive term';
    ledger.steps[2].label = 'matched cycle'; ledger.steps[2].sub = 'illustrative result';
    ledger.formula.text = 'Supplied matched cycle: +2.1 + (−57.3) = −55.2 kJ mol⁻¹';
    concept('definition', 'Heat and acid strength answer different questions', 'Acid strength is an equilibrium property described by Ka at a stated temperature; enthalpy alone does not determine it.',
      ['Ka depends on the free-energy balance, including entropy.', 'Ionisation fraction also depends on concentration.', 'Subtracting unmatched calorimetric results does not isolate intrinsic ionisation enthalpy.'],
      'Acid strength describes an equilibrium property, commonly compared through K a at a stated temperature. The free-energy balance includes entropy as well as enthalpy, so a heat difference alone does not determine K a or rank acid strength. Ionisation fraction also depends on concentration. Subtracting two calorimeter results isolates an intrinsic ionisation term only if a matched thermochemical model and the necessary corrections are justified.');
    concept('concept-ranking', 'Rank these supplied heat magnitudes only', 'The illustrative chart ranks four supplied heat magnitudes; its labels do not establish a universal strong/weak order.',
      ['Illustrative cases A, B, C and D release 57, 55, 52 and 49 kJ per stated mole basis.', 'Compare absolute magnitudes when asking which supplied case releases more heat.', 'Heat ordering is not a ranking of Ka or acid/base strength.'],
      'This chart is a practice set of supplied heat magnitudes, not a universal ranking of strong and weak combinations. Case A releases fifty-seven, B fifty-five, C fifty-two and D forty-nine kilojoules per stated mole basis. A has the largest supplied magnitude and D the smallest. The chart provides no equilibrium constants, so it cannot rank acid or base strength.');
    const chart = draft.scenes.find((scene) => scene.id === 'concept-ranking').diagram;
    chart.bars.forEach((bar, index) => bar.label = `illustrative case ${String.fromCharCode(65 + index)}`);
    chart.unit = 'supplied release magnitude, kJ per stated mol basis';
    const assumptions = 'Synthetic data: each acid is monoprotic, 50.0 mL of 1.00 mol L⁻¹ acid is mixed with 50.0 mL of 1.00 mol L⁻¹ NaOH. Assume complete 1:1 neutralisation, common initial temperature, density 1.00 g mL⁻¹, c(solution) = 4.18 J g⁻¹ °C⁻¹, negligible vessel heat and external exchange, and attribute observed heat to neutralisation within this exercise model.';
    worked('worked-example', 'Compare the model estimates', `${assumptions} HCl run: 21.0 → 27.8 °C. CH₃COOH run: 21.0 → 27.2 °C. Estimate each per-water enthalpy to 2 s.f., retaining guard digits for the difference.`,
      ['Both model masses = 100.0 g and water amounts = 0.0500 mol.', 'HCl: q = 100.0 × 4.18 × 6.8 = 2842.4 J; ΔH estimate = −56.848 kJ mol⁻¹ → −57 (2 s.f.).', 'CH₃COOH: q = 100.0 × 4.18 × 6.2 = 2591.6 J; ΔH estimate = −51.832 kJ mol⁻¹ → −52 (2 s.f.).', 'Unrounded difference = −51.832 − (−56.848) = +5.016 kJ mol⁻¹; report +5.0 under the supplied 2 s.f. exercise convention.', 'This is a difference between exercise model estimates, not a uniquely isolated intrinsic ionisation enthalpy.'],
      'Each model run has one hundred grams of solution and nought point zero five zero zero moles of water. The hydrochloric run gives two thousand eight hundred and forty-two point four joules, or minus fifty-six point eight four eight kilojoules per mole before rounding. The acetic run gives two thousand five hundred and ninety-one point six joules, or minus fifty-one point eight three two per mole. Report minus fifty-seven and minus fifty-two to two significant figures. Subtract the unrounded estimates for plus five point zero one six, reported plus five point zero under the exercise convention. This is a model-estimate difference, not uniquely identified intrinsic ionisation enthalpy.');
    worked('worked-example-2', 'Describe unknowns without overclassifying', `${assumptions} Unknown acids X, Y and Z all start at 20.0 °C. Final temperatures are 26.6, 26.8 and 25.9 °C. Estimate per-water enthalpies to 2 s.f. and say whether these data alone rank Ka.`,
      ['X: q = 2758.8 J; ΔH estimate = −55.176 kJ mol⁻¹ → −55 (2 s.f.).', 'Y: q = 2842.4 J; ΔH estimate = −56.848 kJ mol⁻¹ → −57 (2 s.f.).', 'Z: q = 2466.2 J; ΔH estimate = −49.324 kJ mol⁻¹ → −49 (2 s.f.).', 'Under the supplied model, release magnitude order is Y > X > Z.', 'Unrounded X − Y = +1.672 and Z − Y = +7.524 kJ mol⁻¹; these are model-estimate differences, not Ka rankings.', 'Use independent equilibrium evidence, with concentration and temperature specified, to classify or compare acid strength.'],
      'Use the same model for X, Y and Z. Their unrounded per-water estimates are minus fifty-five point one seven six, minus fifty-six point eight four eight and minus forty-nine point three two four kilojoules per mole. Report minus fifty-five, minus fifty-seven and minus forty-nine to two significant figures. Y has the largest modelled heat-release magnitude, then X, then Z. That does not establish which acid is strongest. Independent equilibrium evidence with known concentration and temperature is needed.');
    misconception('A smaller temperature rise has several possible causes', 'Heat estimates alone do not prove acid strength, reaction completion, rate or an intrinsic ionisation enthalpy.',
      'A smaller temperature rise may reflect a different thermochemical balance, heat transfer, mixing effects, incomplete reaction or measurement limitations. A final reading alone does not distinguish these causes. Rate and heat are different questions, yet a slow process in a heat-leaking apparatus can affect the temperature trace. Use time data and controls. Do not rank acid strength from a difference in release magnitude.');
    response('A supplied reference is −57 kJ per stated mole basis and an unknown-acid estimate is −43 on the same basis. Calculate the difference. Does it alone classify the acid as weak or rank it against acetic acid?',
      ['Difference = −43 − (−57) = +14 kJ per stated mole basis.', 'The unknown estimate is less negative under the stated comparison.', 'This alone does not classify strength, rank Ka or isolate intrinsic ionisation enthalpy.', 'Require a justified matched model and independent equilibrium evidence.'],
      'A supplied reference is minus fifty-seven kilojoules per stated mole basis, and an unknown-acid estimate is minus forty-three on the same basis. Calculate the difference and decide whether it alone classifies the acid as weak or ranks it against acetic acid. Pause and state the limits.',
      'The difference is plus fourteen kilojoules per stated mole basis. The unknown estimate is less negative. That alone does not classify acid strength, rank K a or isolate an intrinsic ionisation enthalpy. A justified matched model and independent equilibrium evidence are needed.', 50);
    summary(['A dilute reference is not a universal maximum.', 'Use a matched thermochemical cycle and state its supplied terms.', 'Retain guard digits when comparing estimates.', 'Ka is an equilibrium property, not a heat ranking.', 'Seek controls, time data and independent equilibrium evidence.'],
      'A dilute reference is not a universal maximum. Use a matched thermochemical cycle and identify its supplied terms. Keep guard digits when comparing estimates. K a is an equilibrium property rather than a heat ranking. Controls, time data and independent equilibrium measurements help determine which conclusions the evidence supports.');
  } else throw new Error('Unsupported thermochemistry lesson');

  if (revised.size !== draft.scenes.length) throw new Error('Every scene needs a reviewed copy decision');
  const pacing = draft.scenes.map((scene) => {
    const prior = original.scenes.find((item) => item.id === scene.id), response = responses[scene.id] ?? null;
    const speechSeconds = estimateSpeechSeconds(scene.voiceover.text, 145), finalReadingSeconds = ['workedExample', 'quickCheck'].includes(scene.type) ? 8 : 5;
    scene.durationInFrames = Math.ceil(Math.max(prior.durationInFrames / draft.fps,
      speechSeconds / 0.92 + finalReadingSeconds + (response?.minimumThinkingSeconds ?? 0)) * draft.fps);
    return {scene: scene.id, inheritedFrames: prior.durationInFrames, proposedFrames: scene.durationInFrames,
      wordCount: countWords(scene.voiceover.text), speechEstimateSeconds: Number(speechSeconds.toFixed(2)), wordsPerMinute: 145,
      finalReadingSeconds, response, status: 'source planning estimate; not measured or learner-validated',
      reuse: {sceneType: scene.type, image: scene.image ?? null, diagram: scene.diagram?.kind ?? scene.diagram?.type ?? null},
      motion: 'Keep quantities and labels stable; reveal the named relationship and hold for reasoning. Set final component cues only after new alignment.'};
  });
  if (JSON.stringify(draft).includes('\u2014')) throw new Error('Prohibited punctuation remains in proposal');
  const previous = new Map(stringFields(original).map(({field, text}) => [field, text]));
  const changes = stringFields(draft).filter(({field, text}) => previous.get(field) !== text)
    .map(({field, text}) => ({field, before: previous.get(field) ?? null, after: text}));
  return {draft, pacing, changes, sourceSha256: hash(bytes),
    mapping: Object.entries(thermochemistryMappings).find(([suffix]) => name.endsWith(suffix))[1]};
}
