# Draft site fixes: Year 12 Modules 7 and 8, Year 11 Biology

Drafted 18 October 2026 for Brief 68. The site at `C:/Users/kygs/hscscience` was read only. Each quoted old string is from the named HTML file. Replace only in that file. Where a claim recurs in a card, question and worked answer, the listed replacements cover those separate occurrences. Review the rendered page after applying text changes, especially diagrams and answer keys.

## Wrong science and numbers

### Chemistry Year 12 Module 7

**`subjects/chemistry/year12/module7/lesson06.sa.html`**

- Old: `(b) Compound X, treated with H<sub>2</sub>O in the presence of H<sub>3</sub>PO<sub>4</sub> at 300°C and high pressure, produces a single alcohol. Identify`
- New: `(b) Compound X is the unbranched but-1-ene. When treated with H<sub>2</sub>O in the presence of H<sub>3</sub>PO<sub>4</sub> at 300°C and high pressure, it produces one major alcohol. Identify`
- Source: [OpenStax, addition reactions of alkenes](https://openstax.org/books/organic-chemistry/pages/8-summary). The formula C4H8 and bromine test alone do not fix the double-bond position or guarantee a single alcohol.

**`subjects/chemistry/year12/module7/lesson07.sa.html`**

- Old: `Propan-2-ol would form only if the enol intermediate remained as an enol (vinyl alcohol).`
- New: `Propan-2-ol forms by hydrating propene, not propyne.`
- Old: `Option B (butan-2-ol) would only form if the enol did not tautomerise.`
- New: `Option B (butan-2-ol) forms by hydrating but-1-ene, not but-1-yne.`
- Source: [OpenStax, hydration of alkynes](https://openstax.org/books/organic-chemistry/pages/9-4-hydration-of-alkynes). An enol remains an enol before tautomerisation, not an alcohol with an alkane carbon skeleton.

**`subjects/chemistry/year12/module7/lesson11.sa.html`**

- Old: `13.4°C`
- New: `6.86°C`
- Apply to the two occurrences that give the measured water temperature rise for the 0.48 g methanol burn. Source: [NIST methanol molar mass](https://webbook.nist.gov/cgi/cbook.cgi?ID=C67561) and the site's own values: 200 g × 4.18 J g⁻¹ °C⁻¹ × 6.86 °C = 5734.96 J; 0.48 g / 32.04 g mol⁻¹ = 0.01498 mol; ΔHc ≈ −383 kJ mol⁻¹ and efficiency ≈ 53%. The old 13.4 °C gives about −748 kJ mol⁻¹ and 103%, so it cannot support the site's answer.

**`subjects/chemistry/year12/module7/lesson18.sa.html`**

- Old: `<p>A pharmacist has three unlabelled colourless aqueous solutions. She adds blue litmus paper to each, all three turn red. She then adds sodium hydrogen carbonate: Solution A bubbles vigorously; Solutions B and C show no bubbling. To distinguish B and C, she adds sodium carbonate: Solution B produces faint bubbling; Solution C produces none.</p>`
- New: `<p>A pharmacist has three unlabelled colourless aqueous solutions. Blue litmus turns red only in Solution A. Sodium hydrogen carbonate makes A bubble, while B and C show no bubbling. Red litmus then turns blue in C but does not change in B.</p>`
- Old: `Borderline/faint`
- New: `No visible bubbling`
- Old: `The protonated form would immediately lose H⁺ back to solution → <strong>DOES NOT PROCEED</strong>. Amide lone pair is fully delocalised into C=O, not available for proton acceptance.`
- New: `Ethanamide is a very weak base, but its carbonyl oxygen can be protonated by strong acid. Its nitrogen lone pair is delocalised into C=O.`
- Old: `(d) Does not proceed ✗, amide is not basic.`
- New: `(d) Ethanamide can be protonated at oxygen by HCl.`
- Sources: [OpenStax on amine basicity](https://openstax.org/books/organic-chemistry/pages/24-3-basicity-of-amines), [LibreTexts on phenol acidity](https://chem.libretexts.org/Courses/Kenyon_College/Chemistry_231_and_232_-_Kenyon_College_(Getzler_Hofferberth_and_Hunsen)/22%3A_Chemistry_of_the_Benzene_Substituents%3A_Alkylbenzenes_Phenols_and_Benzenamines/22.3%3A_Names__and__Properties_of_Phenols), [LibreTexts on amide protonation](https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Basic_Principles_of_Organic_Chemistry_(Roberts_and_Caserio)/24%3A_Organonitrogen_Compounds_II_-_Amides_Nitriles_and_Nitro_Compounds/24.02%3A_Amides_as_Acids_and_Bases). The hook and result table must use the same observations. If the intended litmus is blue, an amine does not turn it red and phenol is too weak for the stated positive result.
- Old: `<tr style="background:var(--w-teal-soft);"><td style="padding:7px 12px;">Litmus</td><td style="padding:7px 12px;color:var(--w-green-deep);">Turns red ✓</td><td style="padding:7px 12px;color:var(--w-green-deep);">Turns red ✓</td><td style="padding:7px 12px;color:var(--w-ink-soft);">No change</td></tr>`
- New: `<tr style="background:var(--w-teal-soft);"><td style="padding:7px 12px;">Blue litmus</td><td style="padding:7px 12px;color:var(--w-green-deep);">Turns red ✓</td><td style="padding:7px 12px;color:var(--w-ink-soft);">No change</td><td style="padding:7px 12px;color:var(--w-ink-soft);">No change</td></tr>`
- Old: `<tr><td style="padding:4px 8px;">Litmus</td><td>Red</td><td>No change</td><td>Red</td><td>No change</td></tr>`
- New: `<tr><td style="padding:4px 8px;">Blue litmus</td><td>Red</td><td>No change</td><td>No change</td><td>No change</td></tr>`
- Source: Same litmus and phenol sources above. The hook needs a different test to distinguish B and C; sodium carbonate bubbling cannot do so.

**`subjects/chemistry/year12/module7/lesson21.sa.html`**

- Old: `insert C=C; replace open bonds with H; check tetravalency`
- New: `restore C=C between backbone carbons; remove the bonds to adjacent repeat units; check tetravalency`
- Source: [OpenStax, addition polymers](https://openstax.org/books/organic-chemistry/pages/31-1-chain-growth-polymers). The carbons already have the substituents shown on the repeat unit; adding H to every open backbone bond can give the wrong monomer.

**`subjects/chemistry/year12/module7/lesson23.sa.html`**

- Old: `The three big classes of biological polymers, <strong>carbohydrates, proteins and triglycerides (fats and oils)</strong>, are all assembled by <strong>condensation</strong>`
- New: `Carbohydrates and proteins are biological polymers. Triglycerides (fats and oils) are not polymers, though all three can form by <strong>condensation</strong>`
- Source: [OpenStax, biological macromolecules](https://openstax.org/books/biology-2e/pages/3-1-synthesis-of-biological-macromolecules). A triglyceride is glycerol esterified with three fatty acids; it is not a repeating monomer chain.
- Old: `condensation builds the polymer and releases water; hydrolysis is the reverse, water cleaves each linkage and regenerates the monomers. Whether the linkage is an ester (fats), an amide (proteins) or a glycosidic bond (carbohydrates), the products of complete hydrolysis are always the monomer building blocks.`
- New: `condensation joins smaller molecules and releases water; hydrolysis reverses those links. Complete triglyceride hydrolysis yields glycerol and fatty acids; protein and carbohydrate hydrolysis yield their constituent monomers.`
- Source: Same OpenStax biological macromolecules source above.

### Biology Year 12 Module 7

**`subjects/biology/year12/module7/lesson01.sa.html`**

- Old: `as WHO Director-General Tedros Adhanom Ghebreyesus reported when declaring SARS-CoV-2 a pandemic on 11 March 2020`
- New: `as later reported during the pandemic`
- Source: [WHO statement on 11 March 2020](https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-media-briefing-on-covid-19---11-march-2020). The statement reported over 118,000 cases in 114 countries, not 11 million cases in 188 countries. The separate later figure can stay only without the March 11 attribution.

**`subjects/biology/year12/module7/lesson01.sa.html`**

- Old: `<tr><td><strong>Protozoan</strong></td><td>Pythium root rot (Oomycete, fungus-like protist)</td><td>Malaria (Plasmodium falciparum)</td></tr>`
- New: `<tr><td><strong>Protozoan</strong></td><td>None in this example</td><td>Malaria (Plasmodium falciparum)</td></tr>`
- Source: [NCBI taxonomy for Pythium](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=4798). Pythium is an oomycete, not a protozoan.

**`subjects/biology/year12/module7/lesson02.sa.html`**

- Old: `<td>Pythium root rot (Pythium spp., an oomycete), rots seedling roots</td>`
- New: `<td>Not represented in this example</td>`
- Source: [NCBI taxonomy for Pythium](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=4798). This cell is in the protozoan row; retain Pythium in an oomycete example elsewhere on the page.

**`subjects/biology/year12/module7/lesson05.sa.html`**

- Old: `fewer than 1 CFU per 100 mL`
- New: `no E. coli detected in 100 mL`
- Old: `this bore water contains four times the maximum acceptable concentration of E. coli`
- New: `this bore water fails the no-detection guideline for E. coli`
- Source: [Australian Drinking Water Guidelines, E. coli](https://guidelines.nhmrc.gov.au/australian-drinking-water-guidelines/part-5/microorganisms/microbial-indicators/escherichia-coli). Replace each occurrence of the old guideline wording in the teaching card and answers. Four colonies are not four times a zero-detection limit.

**`subjects/biology/year12/module7/lesson17.sa.html`**

- Old: `Genetic approaches (GM mosquitoes, Wolbachia) extend the same principle using molecular biology from Module 5.`
- New: `GM mosquitoes and Wolbachia releases use different methods to reduce disease transmission. Wolbachia releases do not genetically modify mosquitoes.`
- Old: `GM approaches like OX513A mosquitoes and Wolbachia are the same logic extended with molecular precision.`
- New: `OX513A mosquitoes are genetically modified to suppress a population; Wolbachia releases use a naturally occurring bacterium to reduce dengue transmission.`
- Source: [World Mosquito Program, Wolbachia method](https://mosquitoprogram.org/en/work/wolbachia-method/how-it-works).

**`subjects/biology/year12/module7/lesson18.sa.html`**

- Old: `four times more than malaria`
- New: `more cases than the malaria estimate quoted above`
- Source: [WHO World Malaria Report 2022](https://www.who.int/teams/global-malaria-programme/reports/world-malaria-report-2022). 390 million divided by 247 million is about 1.6, and the disease estimates use different case definitions. A direct multiplier is unhelpful here.

### Chemistry Year 12 Module 8

**`subjects/chemistry/year12/module8/lesson01.sa.html`**

- Old: `<p><strong>Why the order works.</strong> Silver chloride is the <em>less soluble</em> of the two salts: its molar solubility is about 1.3 × 10<sup>-5</sup> mol L<sup>-1</sup>, against about 6.5 × 10<sup>-5</sup> mol L<sup>-1</sup> for silver chromate. Because silver chloride is removed from solution more readily, it forms first and keeps forming until chloride runs out.</p>`
- New: `<p><strong>Why the order works.</strong> In this mixture, chloride makes AgCl precipitate before the small amount of chromate indicator makes red Ag<sub>2</sub>CrO<sub>4</sub>. The order depends on the ion concentrations and each salt's solubility product. Near the endpoint, chloride concentration falls enough for the red precipitate to persist.</p>`
- Old: `Compare molar solubilities, not <em>K</em><sub>sp</sub> values, when deciding which solid appears first.`
- New: `Compare precipitation thresholds using ion concentrations and <em>K</em><sub>sp</sub> values when deciding which solid appears first.`
- Source: [German Jordanian University analytical chemistry laboratory manual, Mohr method](https://www.gju.edu.jo/sites/default/files/analytical_manual_2.2020_3.pdf).

**`subjects/chemistry/year12/module8/lesson04.sa.html`**

- Old: `The ADWG guideline for lead is 0.01 mg L<sup>-1</sup>.`
- New: `The ADWG guideline for lead in drinking water is 0.005 mg L<sup>-1</sup>.`
- Old: `6.98 / 0.01<br><strong>≈ 700 times the ADWG value</strong>`
- New: `6.98 / 0.005<br><strong>≈ 1400 times the ADWG value</strong>`
- Source: [Australian Drinking Water Guidelines, lead](https://guidelines.nhmrc.gov.au/australian-drinking-water-guidelines/part-5/physical-chemical-characteristics/lead).

**`subjects/chemistry/year12/module8/lesson11.sa.html`**

- Old: `an alkene decolourises the purple colour and a brown MnO₂ precipitate may form.`
- New: `an alkene decolourises the purple colour as MnO₄⁻ is reduced to Mn²⁺.`
- Old: `Acidified KMnO₄ (purple → colourless, brown MnO₂) is an alternative.`
- New: `Acidified KMnO₄ (purple → colourless) is an alternative.`
- Source: [Royal Society of Chemistry, unsaturation test with potassium manganate(VII)](https://edu.rsc.org/experiments/unsaturation-test-with-potassium-manganatevii/550.article). Brown MnO2 is associated with different reaction conditions, not the stated acidified test.

**`subjects/chemistry/year12/module8/lesson15.sa.html`**

- Old: `The exact atom count, fixed once the molecular mass (MS) and element clues are known.`
- New: `The atom count, constrained by molecular mass and determined with the other evidence too.`
- Old: `The molecular mass from MS fixes the molecular formula`
- New: `The molecular mass from MS constrains the molecular formula`
- Sources: [NIST ethanol](https://webbook.nist.gov/cgi/cbook.cgi?ID=C64175) and [NIST formic acid](https://webbook.nist.gov/cgi/cbook.cgi?ID=C64186). Both have nominal molecular mass 46 but different formulas.

**`subjects/chemistry/year12/module8/lesson16.sa.html`**

- Old: `This is the same base-catalysed hydrolysis of an ester link met with fats and oils in Module 6/7.`
- New: `This is base hydrolysis of the ester links met with fats and oils in Module 6/7; NaOH is consumed in making the soap.`
- Old: `In Pfizer's redesigned sertraline synthesis, replacing a stoichiometric titanium reagent with a catalytic palladium-based catalyst in one key step eliminated an entire waste stream and reduced metal waste by 85%. The catalyst was not in the product, it was recovered and reused.`
- New: `In Pfizer's redesigned sertraline synthesis, a more selective palladium catalyst reduced impurities, while a separate change to the reaction conditions removed the need for titanium tetrachloride and its waste stream.`
- Old: `How did Pfizer's catalytic palladium step improve the E-factor of the sertraline synthesis without changing the molecular structure of the final product at all?`
- New: `How did Pfizer's improved catalyst and separate removal of titanium tetrachloride reduce waste without changing the final sertraline molecule?`
- Source: [US EPA, Pfizer sertraline synthesis](https://www.epa.gov/greenchemistry/presidential-green-chemistry-challenge-2002-greener-synthetic-pathways-award). The site's balanced saponification equation also shows NaOH as a reactant.

### Biology Year 12 Module 8

**`subjects/biology/year12/module8/lesson07.sa.html`**

- Old: `Before newborn screening, PKU was usually diagnosed at 2 to 4 years of age, when intellectual disability became obvious.`
- New: `Before newborn screening, PKU could remain untreated until symptoms of developmental delay became apparent in infancy.`
- Old: `Pre-screening: PKU diagnosed at 2 to 4 years, after permanent brain damage.`
- New: `Pre-screening: PKU could go untreated until developmental symptoms appeared in infancy.`
- Source: [NIH NICHD, PKU symptoms](https://www.nichd.nih.gov/health/topics/pku/conditioninfo/symptoms). Symptoms of untreated PKU can appear by 3 to 6 months; the claimed usual diagnosis age is unsupported.

## Misleading claims and incomplete methods

### Chemistry Year 12 Module 7

**`subjects/chemistry/year12/module7/lesson21.sa.html`**

- Old: `no polar groups, no H-bond donors/acceptors`
- New: `polar C–F bonds, but no H-bond donors or charged groups`
- Old: `PTFE degrades above ~260°C`
- New: `PTFE's recommended continuous-use temperature is about 260°C`
- Source: [Chemours PTFE resin information](https://www.chemours.com/en/-/media/files/teflon/teflon-ptfe-resins-product-info.pdf?rev=b94a4e250efa48adbac1be35ecd574c3). Check the repeated PTFE property claims in the worked answer as well as the table.

**`subjects/chemistry/year12/module7/lesson22.sa.html`**

- Old: `(1) Amide bonds (-CO-NH-) are strong covalent bonds within each chain.`
- New: `(1) Covalent amide bonds hold each chain together. Melting lets the chains move past one another without breaking these bonds.`
- Source: [OpenStax, polymer properties](https://openstax.org/books/organic-chemistry/pages/31-4-step-growth-polymers). The existing melting explanation should attribute the melting point to attractions between chains, including hydrogen bonds, rather than imply the intrachain amide bonds break.

### Biology Year 12 Module 7

**`subjects/biology/year12/module7/lesson12.sa.html`**

- Old: `Antigen on MHC class I (on any nucleated body cell) + T helper signal`
- New: `Antigen on MHC class I on an antigen-presenting cell + co-stimulation and T helper signals`
- Old: `An infected cell displays viral peptide on MHC class I (present on all nucleated cells). The cytotoxic T cell recognises it (TCR binds) and, with a T helper IL-2 signal, undergoes clonal expansion.`
- New: `An antigen-presenting cell first activates a matching naive cytotoxic T cell, which undergoes clonal expansion. An activated cytotoxic T cell then recognises viral peptide on MHC class I of an infected cell.`
- Source: [NCBI Bookshelf, production of effector T cells](https://www.ncbi.nlm.nih.gov/books/NBK27118/). The current wording merges initial activation with later target recognition.

**`subjects/biology/year12/module7/lesson17.sa.html`**

- Old: `resistance to mating with sterile males is not a selectable trait`
- New: `mating behaviour can change, so long-term effectiveness needs monitoring`
- Old: `is essentially resistance-proof (refusing to mate with sterile males is not a selectable trait)`
- New: `has a low risk of resistance compared with chemical insecticides`
- Old: `species-specific, resistance-proof advantages`
- New: `species-specific advantages`
- Old: `and resistance-proof approach to vector control`
- New: `and carefully monitored approach to vector control`
- Source: [IAEA, sterile insect technique](https://www.iaea.org/topics/sterile-insect-technique). Remove any remaining `resistance-proof` claims in this page's later worked answer; mating behaviour and effectiveness can change.

**`subjects/biology/year12/module7/lesson18.sa.html`**

- Old: `No lethal selection pressure means there is no mechanism for insecticide-style resistance to evolve.`
- New: `Wolbachia does not kill mosquitoes, so it does not create the same direct survival advantage that insecticides give resistant mosquitoes; its long-term effectiveness still needs monitoring.`
- Source: [World Mosquito Program, Wolbachia method](https://mosquitoprogram.org/en/work/wolbachia-method/how-it-works).

**`subjects/biology/year12/module7/lesson21.sa.html`**

- Old: `the difference was not luck, it was policy`
- New: `policy likely contributed to the difference`
- Old: `is why those numbers diverged`
- New: `likely contributed to the different outcomes`
- Old: `the WHO dataset provided an unusually clear answer`
- New: `the WHO data offered a comparison of outcomes, while other differences between countries also matter`
- Source: [WHO COVID-19 dashboard](https://data.who.int/dashboards/covid19/cases). The causal limitation is an inference: three countries' reported case counts alone cannot isolate the effect of policy from testing, reporting and other differences.

### Chemistry Year 12 Module 8

**`subjects/chemistry/year12/module8/lesson06.sa.html`**

- Old: `Indicator of faecal contamination`
- New: `Indicator of microbial water quality; E. coli is a more specific faecal indicator`
- Old: `which is proportional to dissolved ion concentration.`
- New: `which depends on ion concentration, ion type and temperature.`
- Old: `Pure distilled water would be unpalatable and potentially harmful.`
- New: `Distilled water has little mineral taste, but water safety depends on the full set of quality checks.`
- Sources: [Australian Drinking Water Guidelines, E. coli](https://guidelines.nhmrc.gov.au/australian-drinking-water-guidelines/part-5/microorganisms/microbial-indicators/escherichia-coli), [USGS on specific conductance](https://pubs.usgs.gov/of/1980/0594/report.pdf), [Australian Drinking Water Guidelines](https://www.nhmrc.gov.au/about-us/publications/australian-drinking-water-guidelines). The conductivity wording appears in both the highlighted key and drill answer.

**`subjects/chemistry/year12/module8/lesson08.sa.html`**

- Old: `<strong>Find the bioconcentration factor into the first organism</strong>`
- New: `<strong>Compare the first organism with the water</strong>`
- Old: `BCF = 0.040 / 0.00020`
- New: `tissue/water ratio = 0.040 / 0.00020`
- Old: `so tissue outruns water by 200 times.`
- New: `so the tissue/water concentration ratio is 200 L kg<sup>-1</sup>.`
- Old: `= 10 000 times the water concentration`
- New: `= 10 000 L kg<sup>-1</sup>`
- Old: `200 × 12.5 × 4.0 = 10 000.`
- New: `200 L kg<sup>-1</sup> × 12.5 × 4.0 = 10 000 L kg<sup>-1</sup>.`
- Old: `Water: compliant at 20% of the drinking-water guideline`
- New: `Water: measured methylmercury is 20% of the total-mercury guideline`
- Old: `<strong>Safe to drink, not safe to sell as food</strong>`
- New: `<strong>Test total mercury and other water-quality measures before judging drinking safety; the shark result needs follow-up food testing</strong>`
- Old: `Judged on the water alone, this lake passes comfortably.`
- New: `This methylmercury result is below the total-mercury guideline, but does not establish overall drinking-water safety.`
- Sources: [US EPA, bioconcentration terminology](https://www.epa.gov/expobox/epa-expobox-terminology) and [Australian Drinking Water Guidelines, mercury](https://guidelines.nhmrc.gov.au/australian-drinking-water-guidelines/part-5/physical-chemical-characteristics/mercury). A tissue concentration in mg/kg divided by a water concentration in mg/L has units L/kg. A single methylmercury result does not establish that the water or food is safe.

**`subjects/chemistry/year12/module8/lesson11.sa.html`**

- Old: `a rapid decolourisation in the dark is specific to an addition across C=C.`
- New: `rapid decolourisation in the dark supports a C=C bond, but other reducing substances can also decolourise bromine.`
- Old: `so the test stays specific to C=C.`
- New: `so the result supports C=C when other reactive groups have been excluded.`
- Source: [McMaster University laboratory manual, phenol and bromine tests](https://www.chemistry.mcmaster.ca/~chem2o6/labmanual/expt7/expt7-97.html). Phenols also react with bromine, so decolourisation alone is not specific to C=C.

### Biology Year 11, Focus Area 1

**`subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson05.sa.html`**

- Old: `A grid lying on the stage is magnified with the specimen, so reading a cell against it gives the real size straight away; the equation is what converts between a real size and a magnified image.`
- New: `A calibrated grid can give a cell's real size directly. For several cells across the microscope field, divide the field-of-view diameter by the number of cells across. Use image size ÷ magnification for a measured photomicrograph.`
- Source: [NESA Biology 11–12 (2025), Year 11 cell-size method](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content/year-11/fa0edb304c). The syllabus explicitly requires the field-of-view diameter divided by the number of cells across method, which the page does not currently teach.

**`subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson24.sa.html`**

- Old: `The genetic variety of gametes comes from three distinct processes that rearrange the chromosomes during meiosis.`
- New: `Crossing over creates new allele combinations. Independent assortment is the random orientation of homologous pairs; their later segregation carries those combinations into gametes.`
- Old: `The three processes do not act alone, they combine, so the number of genetically different gametes an individual can make is enormous.`
- New: `Crossing over and the random assortment and segregation of chromosomes combine to make many genetically different gametes.`
- Source: [OpenStax, the process of meiosis](https://openstax.org/books/biology/pages/11-1-the-process-of-meiosis). Random segregation follows from the orientation in metaphase I; it is not an additional independent source of combinations.

### Biology Year 11, Focus Area 2

**`subjects/biology/year11/fa2-cells-to-systems/lesson24.sa.html`**

- Old: `When you graph a hormone level alongside the variable it controls, a regulating role shows up as the hormone rising whenever the variable strays from its set point, then falling as the variable returns.`
- New: `Compare the hormone curve with the variable it controls. Insulin rises after blood glucose rises; glucagon rises when blood glucose falls. In each case, check whether the variable then returns toward its usual range.`
- Old: `show that the hormone rises when the variable deviates`
- New: `show how the named hormone responds when the variable rises or falls`
- Source: [OpenStax, regulation of body processes](https://openstax.org/books/biology-2e/pages/37-3-regulation-of-body-processes).

**`subjects/biology/year11/fa2-cells-to-systems/lesson25.sa.html`**

- Old: `The permanent loss of an enzyme's shape (and function) when conditions move too far from optimal, a key reason limits exist.`
- New: `Loss of an enzyme's working shape when conditions move too far from optimal. Some proteins can refold when conditions improve.`
- Old: `A physiological variable has a narrow band where the body works best, a wider band where it merely copes, and a hard limit beyond which it can no longer survive.`
- New: `A physiological variable has a range where the body works best and a wider range where it can still cope. Risk rises as conditions move further from normal.`
- Old: `the enzymes that run every cell process only work within a narrow range and are permanently destroyed beyond it.`
- New: `extreme temperatures disrupt proteins and cell processes, and severe exposure can cause lasting damage.`
- Old: `The permanent loss of enzyme shape that makes the limit critical`
- New: `Protein and cell damage at extreme temperatures`
- Old: `Enzymes denature, so cell processes fail permanently`
- New: `Extreme heat can damage proteins and cells`
- Old: `denaturation is permanent`
- New: `severe damage may become irreversible`
- Old: `permanently losing their shape and function`
- New: `losing their working shape, sometimes irreversibly`
- Old: `they are destroyed permanently`
- New: `their function can be disrupted`
- Old: `because that loss is permanent the reaction does not resume when the temperature falls`
- New: `severe protein and cell damage may persist even after cooling`
- Old: `a denatured enzyme does not recover its function when the temperature falls, because the structure is not rebuilt by cooling`
- New: `some proteins can refold after cooling, while severe heat damage may be irreversible`
- Old: `the point at which the damage stops being reversible`
- New: `a range where the risk of lasting damage rises sharply`
- Old: `>fail</text>`
- New: `>danger</text>`
- Old: `survival is threatened ("fail")`
- New: `survival is threatened ("danger")`
- Sources: [Merck Manual, hypothermia](https://www.merckmanuals.com/professional/injuries-poisoning/cold-injury/hypothermia), [Merck Manual, heatstroke](https://www.merckmanuals.com/home/injuries-and-poisoning/heat-disorders/heatstroke), [OpenStax, protein denaturation](https://openstax.org/books/biology-2e/pages/3-4-proteins). The plotted 28 °C and 42 °C boundaries are examples of severe danger, not absolute survival cutoffs. Read through the long worked answers after these replacements so they no longer describe denaturation as always permanent.

### Biology Year 11, Focus Area 3

**`subjects/biology/year11/fa3-evolution-and-ecosystems/lesson11.sa.html`**

- Old: `its body temperature stays around 36–38&nbsp;°C no matter how cold or hot it is outside`
- New: `its body temperature stays near its species' usual level across a range of outside temperatures`
- Old: `an endotherm gives a near-flat line (held near 36–38 °C)`
- New: `an endotherm gives a near-flat line (near that animal's usual body temperature)`
- Source: [OpenStax, birds](https://openstax.org/books/biology-2e/pages/29-5-birds). The page names mammals and birds together; birds commonly run warmer than 36 to 38 °C. Label the graph's 37 °C line as one mammal example rather than a value for all endotherms.

**`subjects/biology/year11/fa3-evolution-and-ecosystems/lesson15.sa.html`**

- Old: `A published dataset reports the percentage of a bacterial species resistant to one antibiotic as 4 per cent in 2000, 12 per cent in 2008, 31 per cent in 2016 and 58 per cent in 2024.`
- New: `An illustrative dataset gives the percentage of a bacterial species resistant to one antibiotic as 4 per cent in 2000, 12 per cent in 2008, 31 per cent in 2016 and 58 per cent in 2024.`
- Source: The same [site lesson's activity](https://hscscience.com.au/subjects/biology/year11/fa3-evolution-and-ecosystems/lesson15.sa) labels these numbers illustrative, not a real dataset.

**`subjects/biology/year11/fa3-evolution-and-ecosystems/lesson17.sa.html`**

- Old: `Amino-acid differences in a conserved protein, compared to humans, are: chimpanzee 0, gorilla 1, mouse 9, chicken 18. Rank the four species from most to least closely related to humans, explain how the numbers justify your ranking, and sketch a simple tree (in words) showing the branching order from the human lineage.`
- New: `Amino-acid differences in a conserved protein, compared to humans, are: chimpanzee 0, gorilla 1, mouse 9, chicken 18. Rank the four species from most to least similar to humans for this protein, and explain what further pairwise comparisons you would need before drawing a full tree.`
- Source: [OpenStax, phylogenetic trees](https://openstax.org/books/biology-2e/pages/20-1-organizing-life-on-earth). Distances from humans alone do not establish every relationship among the other species.
