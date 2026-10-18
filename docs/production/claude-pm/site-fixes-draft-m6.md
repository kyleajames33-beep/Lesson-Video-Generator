# Draft site fixes: Year 12 Module 6

Prepared 18 October 2026 for Brief 76. The site files under `C:/Users/kygs/hscscience` were read only. Each Old string below occurs in the named file. Replace only in that file. Recheck rendered cards, assessment answers and any diagram labels after applying a change. These are draft corrections for owner review, not site edits.

The existing [Module 6 correction register](site-corrections-m6.md) supplied the starting findings. I checked each quoted string against the current HTML, review JSON, linked question bank or worksheet and recomputed the numerical cases. This draft contains 238 exact Old/New pairs in Chemistry (19 HTML lesson pages, 5 JSON files including `bank.json`, 1 linked boss-bank JS file, and 15 worksheets affected) and 157 in Biology (18 HTML lesson pages, 3 JSON files including `bank.json`, 1 linked boss-bank JS file, and 8 worksheets affected). All 395 Old strings occur in their named source files. The site files remain unchanged. The explanatory bodies, worked examples, embedded practice and model answers in all 38 HTML lessons and all 38 matching review JSON files have been checked. The 262 directly linked Biology and 216 Chemistry boss-battle questions have also been checked. Separate worksheets and `bank.json` files have only been sampled.

## Page coverage ledger

The first pass read the opening claim and case, the matching [site extract](site-extracts/) and pre-design number check, and searched the current page for each recorded error. I read the 136 multiple-choice questions and 29 short-answer model answers and criteria in the 38 matching `lessonNN.review.json` files. A second page-by-page pass read each lesson's explanatory body, synthesis, worked examples, embedded practice questions and answers, and final Retrieve/reflect. The two boss-battle banks were checked because every lesson links its corresponding game as practice. Separate worksheets and `bank.json` files are supplemental unless a lesson links them as its answer; their content review remains partial.

An automated HTML structure scan counted 110 Chemistry and 83 Biology embedded microtasks. For microtasks with `data-opt` choices, it found no missing answer label or duplicate choice. A separate scan of 10 Chemistry `.sa-mc-q` blocks found one true option per block and no mismatch with the stored answer letter. These structural checks do not validate the scientific content of the embedded answers. The site's `verify-calculations.js` passed its 14 existing calculation fixtures, which cover selected cases only.

The two Module 6 `bank.json` files contain 307 Chemistry and 286 Biology questions (593 total). Their 446 multiple-choice items have four options, in-range correct indices and no duplicate option strings. This is a structure check, not a content pass; the bank answer review has found further wrong keys below. The worksheet directory has 76 Chemistry HTML files and 94 Biology HTML files, including index and exam variants, plus Biology PDFs. Worksheet content review remains partial.

### Chemistry lesson pages

| Page | State | Source and calculation finding |
| --- | --- | --- |
| L01 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax acid-base models](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-1-bronsted-lowry-acids-and-bases) supports the proton-transfer explanation. Same-day history is unsupported; draft fix below. |
| L02 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax nomenclature](https://openstax.org/books/chemistry-2e/pages/2-7-chemical-nomenclature) supports the naming rules. `2NH₃ + H₂SO₄` forms salt without water; historical hook needs revision. |
| L03 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax calorimetry](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry): `100 × 4.18 × 6.5 / 0.0500 = 54.3 kJ/mol`; absolute systematic-error rule is false. |
| L04 | HTML body, embedded practice, review JSON and linked boss bank checked | [1956 Act](https://www.legislation.gov.uk/ukpga/Eliz2/4-5/52/enacted) does not require alkaline flue-gas treatment in every furnace. |
| L05 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax relative acid strengths](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases) supports the strong/weak distinction. `0.10 mol/L` strong monoprotic acid gives pH 1.00. |
| L06 | HTML body, embedded practice, review JSON and linked boss bank checked | Same [acid-strength method](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases): `√(1.8 × 10⁻⁵ × 5.0) = 0.00949 mol/L`, pH 2.02. |
| L07 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax pH and pOH](https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh): `√(5.5 × 10⁻¹⁴) = 2.35 × 10⁻⁷ mol/L`, neutral pH 6.63 at 50 °C using the page's Kw. |
| L08 | HTML body, embedded practice, review JSON and linked boss bank checked | Same [pH method](https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh): `0.00360 mol OH⁻ / 0.100 L` gives pH 12.56 at 25 °C; `1 − 10⁻⁰·¹⁷ = 0.324`, so the 32% ratio is sound. No original Astrup study was located for the named 1966 mountain case. |
| L09 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax weak-acid equilibrium](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases): propanoic acid example gives pH 2.85; shortcut sign and stomach-fluid case require fixes. |
| L10 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax free energy](https://openstax.org/books/chemistry/pages/16-4-free-energy): `100 × 4.18 × 6.8 / 0.0500 = 56.8 kJ/mol`; Ka does not fix enthalpy ranking. |
| L11 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax pH method](https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh): the Ba(OH)₂ mixing checks in its pack give pH 12.63 and 12.94 for the stated acid concentrations. |
| L12 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax acid dissociation constants](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases): `−log(1.3 × 10⁻²) = 1.89`; `7.5 × 10⁻³ / 4.3 × 10⁻⁷ = 17,442`. [NHS survey](https://digital.nhs.uk/data-and-information/publications/statistical/children-s-dental-health-survey/child-dental-health-survey-2013-england-wales-and-northern-ireland) says 46% had obvious decay experience, not erosion. |
| L13 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax buffers](https://openstax.org/books/chemistry-2e/pages/14-6-buffers): acetate buffer checks near pH 4.87 and 4.82. `6.0/0.30 = 20`, contrary to the page. |
| L14 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax titration](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-7-acid-base-titrations): sodium carbonate `0.05000 mol/L`, HCl `0.1114 mol/L`, vinegar `0.9285 mol/L` in the checked examples. |
| L15 | HTML body, embedded practice, review JSON and linked boss bank checked | Same [titration source](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-7-acid-base-titrations): acetate example gives pH 8.67; strong acid/weak base hook and methyl-orange range are inconsistent. TGA story is unverified. |
| L16 | HTML body, embedded practice, review JSON and linked boss bank checked | Same [titration source](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-7-acid-base-titrations): `c = 0.1000 mol/L`, `pKa = 4.57` give pH 2.79 initially and 8.63 at equivalence. AstraZeneca story is unverified. |
| L17 | HTML body, embedded practice, review JSON and linked boss bank checked | Same [titration source](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-7-acid-base-titrations): strong HX starts at pH 1.60; the propanoate equivalence pH is 8.79. |
| L18 | HTML body, embedded practice, review JSON and linked boss bank checked | Same [titration source](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-7-acid-base-titrations): `0.01250 − 0.01840 × 0.250 = 0.00790 mol` HCl consumed and `395 mg` CaCO₃. TGA audit is unverified. |
| L19 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax weak-acid equilibrium](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases): pH 2.40 gives acetic acid about `0.884 mol/L`, not `0.44 mol/L`; conductance minimum is wrong for this case. |

### Biology lesson pages

| Page | State | Source and factual or numerical finding |
| --- | --- | --- |
| L01 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax population genetics](https://openstax.org/books/biology-2e/pages/19-2-population-genetics): gene flow can bring new alleles into a local population; bacterial inheritance needs separate wording. |
| L02 | HTML body, embedded practice, review JSON and linked boss bank checked | [RERF cancer risks](https://www.rerf.or.jp/en/programs/roadmap_e/health_effects-en/late-en/site/) gives 47% excess relative incidence and 42% mortality risk per Gy in its model. [RERF offspring results](https://www.rerf.or.jp/en/programs/roadmap_e/health_effects-en/geneefx-en/) do not support 17% inherited mutation increase. |
| L03 | HTML body, embedded practice, review JSON and linked boss bank checked | [Ingram's original account](https://www.ncbi.nlm.nih.gov/books/NBK224312/) describes protein comparison, not direct DNA-codon sequencing in 1956. |
| L04 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax chromosomal changes](https://openstax.org/books/biology-2e/pages/13-2-chromosomal-basis-of-inherited-disorders) supports nondisjunction and trisomy 21; no new numerical issue in first pass. |
| L05 | HTML body, embedded practice, review JSON and linked boss bank checked | [NCI germ-line definition](https://www.cancer.gov/publications/dictionaries/genetics-dictionary/def/germline-mutation) and [somatic definition](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/somatic-variant) support inheritance. [Jolie's first-person account](https://time.com/5709290/angelina-jolie-cancer-research-prevention/) gives her estimated risk as 87%, not 70%; the [2013 court ruling](https://www.supremecourt.gov/opinions/boundvolumes/569bv.pdf) distinguishes natural DNA from synthetic cDNA. |
| L06 | HTML body, embedded practice, review JSON and linked boss bank checked | [Princeton research history](https://dof.princeton.edu/people/peter-raymond-grant) dates the finch study to 1973, not 1977. Precise 17% beak and 0.79 heritability claims remain source-pending. |
| L07 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax population genetics](https://openstax.org/books/biology-2e/pages/19-2-population-genetics) supports gene flow and drift distinctions. The [original Lake Victoria radiation paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC1690916/) gives 500 to 1000 endemic cichlid species after refilling about 14,600 years ago, as a hypothesis that assumes desiccation. |
| L08 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax cellular respiration](https://openstax.org/books/biology-2e/pages/7-5-metabolism-without-oxygen) supports yeast fermentation. The [original Shubayqa 1 study](https://pmc.ncbi.nlm.nih.gov/articles/PMC6077754/) reports bread-like remains about 14,400 years old, but does not establish yeast fermentation. [Institut Pasteur](https://www.pasteur.fr/fr/nous-connaitre/premiere-epoque-1847-1862) covers Pasteur's 1857 to 1862 fermentation studies. |
| L09 | HTML body, embedded practice, review JSON and linked boss bank checked | [Original Golden Rice report](https://pubmed.ncbi.nlm.nih.gov/10634784/) supports engineered beta-carotene production. Page keeps intended and realised benefit distinct. |
| L10 | HTML body, embedded practice, review JSON and linked boss bank checked | [Nobel scientific background](https://www.nobelprize.org/uploads/2020/10/advanced-chemistryprize2020.pdf) supports CRISPR-Cas9 development. The [original exa-cel clinical report](https://www.nejm.org/doi/full/10.1056/NEJMoa2309676) supports BCL11A enhancer editing and a fall in severe vaso-occlusive events, with trial-specific limits. |
| L11 | HTML body, embedded practice, review JSON and linked boss bank checked | [Frozen Zoo](https://sandiegozoowildlifealliance.org/frozen-zoo) reports over 11,500 cell lines from more than 1,300 species and subspecies; [BioRescue](https://www.biorescue.org/en/news/biorescue-scientists-produced-three-new-embryos-and-began-using-northern-white-rhino-embryos) documents embryo transfers. |
| L12 | HTML body, embedded practice, review JSON and linked boss bank checked | [Target Malaria](https://targetmalaria.org/latest/blog/results-from-months-of-monitoring-following-the-first-release-of-non-gene-drive-genetically-modified-mosquitoes-in-africa/) confirms the 2019 release used non-gene-drive sterile males. |
| L13 | HTML body, embedded practice, review JSON and linked boss bank checked | [OpenStax population genetics](https://openstax.org/books/biology-2e/pages/19-2-population-genetics) supports the distinction between changing allele frequencies and creating a new mutation. |
| L14 | HTML body, embedded practice, review JSON and linked boss bank checked | [MLA report](https://www.mla.com.au/globalassets/mla-corporate/research-and-development/final-reports/b.gbp.0050-final-report.pdf) supports sexed-semen methods; [RSPCA](https://kb.rspca.org.au/categories/farmed-animals/cattle/dairy-cattle/what-happens-to-bobby-calves) places bobby calves in dairy production. Wambiana trial and 1.5 million claim need removal. |
| L15 | HTML body, embedded practice, review JSON and linked boss bank checked | [Roslin Institute Dolly history](https://vet.ed.ac.uk/roslin/about/history/dolly/facts/life-of-dolly) supports somatic-cell nuclear transfer. The `277` attempts include Dolly, and her illness does not prove accelerated ageing. |
| L16 | HTML body, embedded practice, review JSON and linked boss bank checked | [Original synthetic insulin-gene paper](https://pubmed.ncbi.nlm.nih.gov/282602/) supports the A/B-chain route. [Diabetes Australia](https://www.diabetesaustralia.com.au/reports/) uses 1.5 million for diagnosed diabetes, not insulin treatment. |
| L17 | HTML body, embedded practice, review JSON and linked boss bank checked | [WHO committee](https://www.who.int/publications/i/item/WHO-SCI-RFH-2019-01) and [International Commission](https://www.nationalacademies.org/our-work/international-commission-on-the-clinical-use-of-human-germline-genome-editing) are separate bodies; the page credits WHO with convening the latter. |
| L18 | HTML body, embedded practice, review JSON and linked boss bank checked | Comparison of agronomic and social evidence read in the page; [FAO](https://www.fao.org/one-health/areas-of-work/water/) gives agriculture's share of global freshwater withdrawals near 70%, not a Borlaug-specific irrigation cost. The CGIAR attribution and other figures remain unverified. |
| L19 | HTML body, embedded practice, review JSON and linked boss bank checked | [Grant and Grant 2002](https://pubmed.ncbi.nlm.nih.gov/11976447/) reports finch-trait change, not the claimed mutation rate and depletion horizon. `4/100 = 0.04` in the allele-frequency example. |

## Wrong science, arithmetic and attribution

### Chemistry

**`subjects/chemistry/year12/module6/lesson04.sa.html`**

- Old: `The smog was loaded with sulfur dioxide from coal-burning power stations.`
- New: `The smog contained smoke and sulfur dioxide from coal burned in domestic fireplaces, power stations and industrial furnaces.`
- Old: `The result was acid fog with a pH as low as 1.6, more acidic than stomach acid, settling into the lungs of everyone who breathed it.`
- New: `The polluted fog contained acidic substances and fine smoke particles, causing severe respiratory harm; the precise pH claim needs a source before publication.`
- Source: [London City Hall, 70 years since the Great Smog](https://www.london.gov.uk/programmes-strategies/environment-and-climate-change/environment-and-climate-change-publications/70-years-great-london-smog) and [UK Met Office, Great Smog case study](https://weather.metoffice.gov.uk/learn-about/weather/case-studies/great-smog). Coal burning came from domestic, industrial and power-station sources; the specific fog pH `1.6` is not established by these accounts.
- Old: `<span class="sa-formula-eq">Acid + base → salt + water</span>`
- New: `<span class="sa-formula-eq">Acid + base → salt; hydroxide bases also form water</span>`
- Source: [OpenStax, classifying chemical reactions](https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions). The example itself produces no water and contradicts the stated universal pattern.
- Old: `Al(OH)₃ best satisfies all three stated criteria.`
- New: `None of these three products should be recommended from the equations alone for a patient with kidney disease. Al(OH)₃ avoids Ca²⁺ and Mg²⁺ but introduces aluminium, which can accumulate when kidney function is reduced.`
- Old: `<strong>Answer:</strong> Al(OH)₃, satisfies all three criteria: neutralises HCl effectively (Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O), introduces Al³⁺ rather than Ca²⁺ or Mg²⁺, and produces no CO₂ gas. Clinical caveat: long-term Al³⁺ load in renal patients requires separate clinical consideration.`
- New: `Answer: The equations show which products form and which generate CO₂, but they do not justify choosing any of the three for this patient. Aluminium-containing antacids can be unsafe in chronic kidney disease; a clinician or pharmacist must select treatment using the patient's renal status and full formulation.`
- Source: [National Kidney Foundation, medicines to avoid or adjust in kidney disease](https://www.kidney.org/kidney-topics/five-drugs-you-may-need-to-avoid-or-adjust-if-you-have-kidney-disease?page=1). The worked problem asks for a real patient recommendation; aluminium exposure in kidney disease cannot be relegated to an afterthought. Rewrite the prompt as a chemistry-only comparison or remove the patient-treatment decision.

- Old: `The UK government's 1956 Clean Air Act mandated industrial flue-gas scrubbing using Ca(OH)₂ to neutralise SO₂.`
- New: `The UK's 1956 Clean Air Act targeted smoke, grit and dust. Modern flue-gas treatment can use alkaline materials to remove SO₂.`
- Old: `The UK's 1956 Clean Air Act forced every industrial furnace to scrub SO₂ using Ca(OH)₂.`
- New: `The UK's 1956 Clean Air Act introduced smoke controls. Alkalis can also remove SO₂ from industrial flue gas.`
- Old: `Ca(OH)₂ + SO₂ → CaSO₃ + H₂O is the reaction that the UK's 1956 Clean Air Act mandated in every industrial furnace.`
- New: `Ca(OH)₂ + SO₂ → CaSO₃ + H₂O shows how an alkali can remove an acidic gas from industrial emissions.`
- Source: [UK Clean Air Act 1956, enacted text](https://www.legislation.gov.uk/ukpga/Eliz2/4-5/52/enacted). Sections 3 to 6 cover smoke, grit and dust from furnaces; they do not mandate this reaction in every furnace.

**`subjects/chemistry/year12/module6/lesson02.sa.html`**

- Old: `the products are the salt (NH₄)₂SO₄ and water.`
- New: `the product is the salt (NH₄)₂SO₄.`
- Source: [OpenStax, classifying chemical reactions](https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions). The displayed equation `2NH₃ + H₂SO₄ → (NH₄)₂SO₄` produces no water.

**`subjects/chemistry/year12/module6/lesson01.sa.html`**

- Old: `HCl(g) + NH₃(g) → NH₄⁺(aq) + Cl⁻(aq) → NH₄Cl(s)`
- New: `HCl(g) + NH₃(g) → NH₄Cl(s) (proton transfer produces NH₄⁺ and Cl⁻ in the solid salt)`
- Old: `NH₃ accepts a proton (H⁺) from an acid, acting as a base without ever producing OH⁻.`
- New: `NH₃ accepts a proton from an acid. In water it accepts a proton from H₂O, which leaves OH⁻ in solution; NH₃ does not release OH⁻ directly.`
- Source: [OpenStax, Brønsted-Lowry acids and bases](https://openstax.org/books/chemistry-2e/pages/14-1-bronsted-lowry-acids-and-bases). The gas-phase HCl/NH₃ product is solid NH₄Cl, not aqueous ions. Aqueous NH₃ can produce OH⁻ indirectly by accepting a proton from water.
- Old: `NH₃ + H₂SO₄ → (NH₄)₂SO₄`
- New: `2NH₃ + H₂SO₄ → (NH₄)₂SO₄`
- Old: `was the definitive experimental proof that acid-base reactions do not require water.`
- New: `is an example of an acid-base reaction that does not require water.`
- Source: [OpenStax, Brønsted-Lowry acids and bases](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-1-bronsted-lowry-acids-and-bases). Two NH₃ molecules each accept one proton from diprotic H₂SO₄, balancing nitrogen and hydrogen in ammonium sulfate. The gas-phase HCl/NH₃ case illustrates the broader model but does not, without a historical source, establish a single definitive experiment that caused the model's development.

**`subjects/chemistry/year12/module6/lesson02.sa.html`**

- Old: `Pattern 1: Acid + base → salt + water.`
- New: `Pattern 1: Acid + metal hydroxide → salt + water. A base such as NH₃ can react with an acid to form an ammonium salt without producing water.`
- Source: [OpenStax, Brønsted-Lowry acids and bases](https://openstax.org/books/chemistry-2e/pages/14-1-bronsted-lowry-acids-and-bases). The lesson's own NH₃/HCl and NH₃/H₂SO₄ equations show why water is not a universal acid-plus-base product.

- Old: `The process uses 98% concentrated H₂SO₄ and requires careful pH monitoring using bromothymol blue indicator.`
- New: `In a laboratory model using dilute aqueous solutions, a calibrated pH probe can track the reaction as ammonia is added to sulfuric acid.`
- Old: `Explain why bromothymol blue is a suitable indicator for monitoring whether the reaction has reached neutralisation. What colour change would indicate the endpoint has been reached?`
- New: `Explain why a bromothymol blue colour change alone cannot establish the equivalence point in this reaction. What would a pH probe show as ammonia is added, and why can the equivalence solution remain acidic?`
- Old: `The bromothymol blue range spans the expected equivalence point pH [1]. Colour change at endpoint: from blue (excess NH₃, basic solution) through green (near endpoint) to yellow (excess H₂SO₄ or at EP &lt; 7), the change from green/blue to yellow signals the endpoint has been reached [1].`
- New: `Bromothymol blue changes colour over pH 6.0–7.6, but ammonium ions make the equivalence solution acidic and its pH depends on concentration; that range is not guaranteed to bracket the equivalence point [1]. A pH probe shows pH rising as ammonia is added to the acid, with a sharper change near equivalence [1]. At equivalence the solution contains ammonium sulfate; NH₄⁺ transfers some protons to water, so the solution can remain below pH 7 [1].`
- Source: [OpenStax, acid-base titration and indicator selection](https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations) and [OpenStax, hydrolysis of salts](https://openstax.org/books/chemistry-2e/pages/14-4-hydrolysis-of-salt-solutions). Indicator selection requires the transition range to bracket the calculated equivalence pH. With an illustrative `0.10 mol/L` NH₄⁺ solution and `Ka(NH₄⁺) = Kw/Kb(NH₃) = 10⁻¹⁴/(1.8 × 10⁻⁵)`, the weak-acid estimate gives pH about `5.13`, outside bromothymol blue's `6.0–7.6` range. The lesson supplies no concentration from which to calculate its equivalence pH, and its `98%` acid scenario is not a suitable unqualified indicator-titration model.

**`subjects/chemistry/year12/module6/lesson02.sa.html`**

- Old: `Weak (sparingly soluble)`
- New: `Sparingly soluble; dissolved fraction dissociates into ions`
- Old: `Any other base you encounter in this module, NH₃, Na₂CO₃, Mg(OH)₂, organic amines, is weak.`
- New: `NH₃ and many organic amines are weak bases because they react only partly with water. Carbonate is a weak base in water. Mg(OH)₂ has low solubility, but its dissolved fraction exists as ions.`
- Old: `all others (NH₃, Na₂CO₃, Mg(OH)₂) are weak`
- New: `NH₃ and CO₃²⁻ react only partly with water, while Mg(OH)₂ is sparingly soluble and its dissolved fraction dissociates into ions`
- Source: [OpenStax, classifying chemical reactions](https://openstax.org/books/chemistry-atoms-first-2e/pages/7-2-classifying-chemical-reactions) states that dissolved ionic hydroxides dissociate into ions; [OpenStax, hydrolysis of salts](https://openstax.org/books/chemistry/pages/14-4-hydrolysis-of-salt-solutions) describes Mg(OH)₂ as sparingly soluble. Low solubility limits the bulk hydroxide concentration but is not the same as partial base ionisation. The broad `Any other base` rule also excludes other ionic hydroxides without justification.

**`subjects/chemistry/year12/module6/lesson08.sa.html`**

- Old: `0.0050 mol/L H₂SO₄ (dilute)`
- New: `0.0050 mol/L H₂SO₄ (Ka₂ = 1.2 × 10⁻² at 25°C)`
- Old: `[H₃O⁺] = 2 × 0.0050 = 0.0100 mol/L (×2 for diprotic strong acid)`
- New: `The first ionisation gives 0.0050 mol/L H₃O⁺ and HSO₄⁻. For the second, let x dissociate: 0.012 = (0.0050 + x)x/(0.0050 − x), giving x = 0.0030 mol/L and [H₃O⁺] = 0.0080 mol/L.`
- Old: `pH = −log(0.0100) = <strong>2.00</strong>`
- New: `pH = −log(0.0080) = <strong>2.10</strong>`
- Source: [OpenStax, polyprotic acids](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-5-polyprotic-acids). Sulfuric acid's first ionisation is complete but its second has `Ka₂ = 1.2 × 10⁻²`; `0.0050 mol/L` does not release exactly `0.0100 mol/L` H₃O⁺. The activity-based pH of a real ionic solution also depends on nonideal effects; `2.10` is the standard concentration-based classroom calculation using the cited Ka₂.

**`subjects/chemistry/year12/module6/lesson06.sa.html`**

- Old: `At equal concentration, electrical conductivity is proportional to total ion concentration.`
- New: `At equal analytical concentration, a stronger electrolyte usually conducts better because it produces more ions; conductivity also depends on each ion's charge and mobility.`
- Old: `HNO₃ conductivity is ~15× higher.`
- New: `HNO₃ is expected to conduct more strongly than HNO₂ at the same analytical concentration; the ion-count ratio alone does not determine the conductivity ratio.`
- Old: `HNO₂ (weak, 6.7% ionised): ~0.013 mol/L ions, about 15× lower than HCl.`
- New: `HNO₂ (weak): about 0.013 mol/L ions in this estimate, compared with about 0.20 mol/L ions for HCl; the conductivity ratio also depends on ionic mobilities.`
- Source: [OpenStax, electrolytes](https://openstax.org/books/chemistry/pages/11-2-electrolytes) supports the broad relation between ionisation and conductivity. [Chemistry LibreTexts, nature of ions in aqueous solution](https://chem.libretexts.org/Bookshelves/General_Chemistry/Chem1_%28Lower%29/08%3A_Solutions/8.10%3A_Ions_and_Electrolytes/8.10.9B%3A_8.10.9B%3A_The_nature_of_ions_in_aqueous_solution) states that charge and mobility also affect conductance, so the exact `15×` conductivity conclusion does not follow from counting ions. The page's `√(Ka c)` approximation gives about 6.7% HNO₂ ionisation; solving `Ka = x²/(0.10 − x)` gives about 6.5%, which does not change this concern.

**`subjects/chemistry/year12/module6/lesson03.sa.html`**

- Old: `A pharmacist is comparing three antacid products for a patient with chronic acid reflux. Product A contains sodium hydroxide solution.`
- New: `A student compares three substances that react with simulated stomach acid. Product A is laboratory sodium hydroxide solution, while Products B and C model bicarbonate and magnesium hydroxide antacids.`
- Old: `NaOH is a strong base, it would release the full −57 kJ/mol and could cause thermal burns to stomach lining.`
- New: `NaOH solution is caustic and can chemically burn tissue; it is unsuitable as an antacid. The heat released also depends on dose and conditions.`
- Source: [PubChem, sodium hydroxide safety](https://pubchem.ncbi.nlm.nih.gov/compound/Sodium-Hydroxide) and [OpenStax, calorimetry](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry). NaOH is not a patient antacid; a molar enthalpy value does not by itself establish tissue temperature rise.
- Old: `giving an artificially large magnitude; incorrect mass (using half the volume)`
- New: `reversing the sign of the result; using half the solution mass, which makes the calculated magnitude smaller`
- Source: [OpenStax, calorimetry](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry). In `q=mcΔT`, reversing ΔT changes the sign, while halving `m` halves the calculated heat magnitude; neither operation explains a result that is too negative.

- Old: `This matches theory: strong+strong > weak acid+strong base > strong acid+weak base.`
- New: `These particular temperature rises rank Experiment 1 above 2 above 3. Acid and base strength alone do not fix a universal enthalpy order for all weak-acid and weak-base reactions.`
- Old: `Product B: Mg(OH)₂ (weak base), T<sub>max</sub> = 24.1°C`
- New: `Product B: Mg(OH)₂ (sparingly soluble base), T<sub>max</sub> = 24.1°C`
- Old: `Mg(OH)₂ is a sparingly soluble weak base, it does not fully dissociate in solution before reacting [1]. Energy must be consumed to dissolve and further ionise Mg(OH)₂ during the reaction; this energy comes from the heat released by H⁺ + OH⁻ → H₂O, reducing the net heat available and giving a less negative ΔHn [1].`
- New: `Mg(OH)₂ is sparingly soluble, so much of the antacid may initially be suspended solid rather than dissolved ions [1]. The measured temperature rise depends on the amounts reacting, dissolution, mixing and heat exchange as well as the reaction enthalpy; the given temperatures alone do not show that Mg(OH)₂ has a universally smaller neutralisation enthalpy than NaOH [1].`
- Source: [OpenStax, salt solutions and milk of magnesia](https://openstax.org/books/chemistry/pages/14-4-hydrolysis-of-salt-solutions) identifies Mg(OH)₂ as a sparingly soluble suspension whose dissolved OH⁻ neutralises acid. [OpenStax, calorimetry](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry) relates temperature rise to heat, mass and heat capacity. Neither the given temperatures nor acid/base strength alone establish the claimed universal enthalpy ordering or the sign of Mg(OH)₂ dissolution enthalpy.
- Old: `All systematic errors in neutralisation calorimetry make |ΔHn| smaller (less negative), never larger, primarily because heat lost through the foam cup walls reduces ΔT;`
- New: `Heat loss through the foam cup walls reduces ΔT and usually makes the measured ΔHn less negative; other systematic errors may move the result in either direction;`
- Old: `All systematic errors in this experiment (heat loss, thermometer heat capacity, etc.) make ΔHn less negative than theoretical, never more negative.`
- New: `Heat loss and unaccounted calorimeter heat capacity usually make the calculated ΔHn less negative. An error that raises measured ΔT or lowers the calculated amount reacted can make it more negative.`
- Old: `All systematic errors make |ΔHn| smaller (less negative), never larger. A value of −58.3 kJ/mol is suspicious, it suggests a calculation error.`
- New: `Heat loss usually makes |ΔHn| smaller. A value of −58.3 kJ/mol may reflect measurement uncertainty or an error that increases calculated heat per mole, so check the measurements and calculation.`
- Source: [OpenStax, calorimetry](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry). From `q = mcΔT` and `ΔHn = −q/n`, an overread ΔT can give a result more negative than theory.

**`subjects/chemistry/year12/module6/lesson09.sa.html`**

- Old: `pH = −log(√(Ka × c)) which is approximately pKa/2 + log(c)/2`
- New: `pH = −log(√(Ka × c)) which is approximately (pKa − log(c))/2`
- Source: [OpenStax, relative acid strengths](https://openstax.org/books/chemistry/pages/14-3-relative-strengths-of-acids-and-bases). With `Ka = 1.8 × 10⁻⁵` and `c = 0.10 mol/L`, the square-root form gives pH 2.87, while the old shortcut gives 1.87.
- Old: `In 1971, pharmacologist John Vane measured the Ka of aspirin (acetylsalicylic acid) as 3.0 × 10⁻⁴, ten times larger than ibuprofen's Ka of 1.3 × 10⁻⁵.`
- New: `Aspirin and ibuprofen are weak acids with different dissociation constants. At equal starting concentration, compare their calculated ionisation rather than assuming the same pH.`
- Old: `In 1971, John Vane measured aspirin's Ka as 3.0 × 10⁻⁴ and ibuprofen's as 1.3 × 10⁻⁵.`
- New: `Aspirin and ibuprofen have different acid dissociation constants. If both Ka values are given at the same temperature, which acid produces more H⁺ at equal concentration?`
- Old: `Recall John Vane's 1971 measurements: Ka(aspirin) = 3.0 × 10⁻⁴, Ka(ibuprofen) = 1.3 × 10⁻⁵.`
- New: `Use the given Ka values to compare aspirin and ibuprofen at equal concentration.`
- Source: [John Vane's Nobel lecture](https://www.nobelprize.org/uploads/2018/06/vane-lecture.pdf). His 1971 work identified inhibition of prostaglandin production by aspirin-like drugs, not these Ka measurements. Independently check any drug-specific Ka values and temperature before retaining them in the worked calculation.
- Old: `Both dissolve in 200 mL of stomach fluid (approximately 0.1 mol/L HCl, pH ≈ 1).`
- New: `Dissolve each tablet separately in 200 mL of water for this simplified weak-acid calculation.`
- Old: `Aspirin in 200 mL stomach fluid:`
- New: `Aspirin in 200 mL water:`
- Old: `Ibuprofen in 200 mL stomach fluid:`
- New: `Ibuprofen in 200 mL water:`
- Source: [OpenStax, weak-acid equilibrium](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases) and [common-ion effect](https://openstax.org/books/chemistry-2e/pages/15-key-terms). The page calculates each tablet as though no acid were present, yet its scenario starts with about 0.1 mol/L HCl. HCl supplies H⁺ and suppresses further weak-acid ionisation. Any result and conclusion that says the calculated 0.00190 or 0.000397 mol/L is the total stomach `[H⁺]` needs the same water-only framing. The stated Ka ratio is `3.0 × 10⁻⁴ / 1.3 × 10⁻⁵ ≈ 23`, not ten.

**`subjects/chemistry/year12/module6/lesson10.sa.html`**

- Old: `n(H₂O) = 1.00 × 0.0500 = 0.0500 mol. ΔHn = −2.383/0.0500`
- New: `n(NH₃ reacted) = 1.00 × 0.0500 = 0.0500 mol. The molecular reaction NH₃ + HCl → NH₄Cl does not form water, so report the measured molar reaction enthalpy per mole of NH₃ reacted: ΔH = −2.383/0.0500`
- Old: `ΔH(ionisation of NH₃) = −47.7 − (−57.0) = <strong>+9.3 kJ/mol</strong> deviation`
- New: `The measured difference from the strong-acid/strong-base reference is −47.7 − (−57.0) = <strong>+9.3 kJ/mol</strong>. This is an experimental difference, not an isolated measurement of NH₃ ionisation enthalpy`
- Old: `Either way, 9.3 kJ/mol of energy per mole of neutralisation is consumed by the endothermic weak base process, reducing net heat released to 47.7 kJ/mol.`
- New: `The measured reaction releases 47.7 kJ per mole of NH₃ under the stated calorimetry assumptions. The 9.3 kJ/mol difference from an ideal strong-acid/strong-base reference can also reflect heat loss, solvation and other reaction enthalpies, so it cannot be assigned entirely to NH₃ ionisation.`
- Old: `The energy budget is additive: each weak species independently contributes its ionisation enthalpy as an endothermic cost subtracted from the strong+strong baseline.`
- New: `These four measured values happen to satisfy that arithmetic relation. Do not assume the separate differences are pure ionisation enthalpies or that their sum predicts every weak-acid/weak-base reaction.`
- Source: [OpenStax, calorimetry](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry) requires dividing reaction heat by the amount of the reaction unit actually chosen. [OpenStax, free energy and equilibrium](https://openstax.org/books/chemistry/pages/16-4-free-energy) shows why Ka alone cannot supply enthalpy. The equation `NH₃ + HCl → NH₄Cl` has no water product; `0.0500 mol` here is the amount of ammonia and acid reacting. The measured `+9.3 kJ/mol` difference is not automatically the enthalpy of the aqueous NH₃ base-ionisation step.
- Old: `A weaker acid has a more endothermic ionisation (stronger O–H bond), giving a more positive ΔHn deviation. Stronger weak acids (larger Ka) have ΔHn values closer to −57 kJ/mol.`
- New: `A weak acid may give a less exothermic neutralisation than a strong acid because its ionisation contributes to the overall enthalpy. Ka alone does not determine that ionisation enthalpy or rank two weak acids by neutralisation heat.`
- Old: `A larger deviation indicates a weaker acid (smaller Ka), a weaker acid has a stronger, more endothermic O–H bond, so more ionisation energy is consumed during neutralisation. Stronger weak acids (larger Ka) have deviations closer to zero.`
- New: `A larger deviation shows a different net reaction enthalpy in this experiment. It does not by itself determine Ka or rank the strengths of two weak acids.`
- Old: `HNO₂: Ka = 4.5 × 10⁻⁴ (stronger weak acid) → smaller ionisation enthalpy → ΔHn ≈ −54 to −55 kJ/mol. CH₃COOH: Ka = 1.8 × 10⁻⁵ (weaker weak acid) → larger ionisation enthalpy → ΔHn ≈ −55 to −56 kJ/mol.`
- New: `HNO₂ has the larger Ka and therefore the lower calculated pH at equal concentration. Do not predict either acid's neutralisation enthalpy from Ka alone; measure it or use enthalpy data.`
- Old: `Ranking (most to least exothermic): HCl &gt; CH₃COOH &gt; HNO₂.`
- New: `HCl is the strong-acid reference. Rank the two weak-acid neutralisations only after measuring their enthalpies.`
- Old: `HNO₂ ≈ −54 to −55 kJ/mol; CH₃COOH ≈ −55 to −56 kJ/mol`
- New: `HNO₂ and CH₃COOH require measured or sourced neutralisation enthalpies`
- Source: [OpenStax, free energy and equilibrium](https://openstax.org/books/chemistry/pages/16-4-free-energy). Ka determines a standard free-energy change at a stated temperature, not an enthalpy change on its own. The old example also gives the reverse enthalpy ordering from its stated rule. The adjacent ranking and answer that quote those predicted ranges need the same revision.

**`subjects/chemistry/year12/module6/lesson16.sa.html`**

- Old: `V_EP = 20.00 mL; at V = 10.00 mL, pH = 4.57; starting pH = 3.52.`
- New: `20.00 mL of HA is titrated; V_EP = 20.00 mL; at V = 10.00 mL, pH = 4.57; starting pH ≈ 2.79.`
- Source: [OpenStax, weak-acid equilibrium](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases) and [titrations](https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations). The existing question omits the initial acid volume yet its answer assumes `20.00 mL`. The half-equivalence pH gives `Ka = 10⁻⁴·⁵⁷ = 2.69 × 10⁻⁵`; for the answer's `0.1000 mol/L` acid, solving `Ka = x²/(0.1000 − x)` gives `x = 0.001627 mol/L`, pH `2.79`, not `3.52`. The new prompt supplies the missing volume and reconciles its initial pH with the model answer.

**`subjects/chemistry/year12/module6/lesson17.sa.html`**

- Old: `Identify the appropriate indicator from methyl orange, BTB, or phenolphthalein`
- New: `Identify an appropriate indicator from methyl orange, bromothymol blue, methyl red or phenolphthalein`
- Old: `Methyl orange, range 3.1–4.4, or BTB, range 6.0–7.6.`
- New: `Methyl red, range about 4.2–6.3, brackets the calculated equivalence pH of about 5.28.`
- Old: `methyl orange or BTB both transition within this jump.`
- New: `methyl red changes colour around the equivalence region; neither methyl orange nor bromothymol blue brackets the calculated equivalence pH for the stated 0.100 mol/L solutions.`
- Old: `phenolphthalein would not change colour during the titration, as the solution never reaches pH 8.3.`
- New: `phenolphthalein can change from pink to colourless well before equivalence as HCl is added to the initially basic ammonia solution, so its endpoint would be early.`
- Source: [OpenStax, titration indicators](https://openstax.org/books/chemistry/pages/14-7-acid-base-titrations) and [Chemistry LibreTexts, weak-base/strong-acid curves](https://chem.libretexts.org/Courses/Valley_City_State_University/Chem_122/Chapter_6%3A_Acids_and_Bases/6.10%3A_Titration_Curves). For equal `0.100 mol/L` NH₃ and HCl, equivalence gives about `0.050 mol/L` NH₄⁺; `Ka = 10⁻¹⁴/(1.8 × 10⁻⁵)` gives pH `5.28`. Methyl red spans this pH. Initial `0.100 mol/L` NH₃ has pH near `11.1`, so phenolphthalein is initially pink and can lose colour before equivalence.

**`subjects/chemistry/year12/module6/lesson18.sa.html`**

- Old: `commercial baking powder`
- New: `commercial baking soda (sodium hydrogen carbonate)`
- Source: [American Chemical Society, baking powder chemistry](https://www.acs.org/education/whatischemistry/landmarks/bakingpowder.html). Baking powder contains bicarbonate plus acidic ingredients, so a bulk acid-base titration cannot assign all acid consumption to NaHCO₃ alone. Baking soda is a suitable sample for the question's one-analyte comparison.

**`subjects/chemistry/year12/module6/lesson19.sa.html`**

- Old: `The glass membrane is selectively permeable to H⁺ ions.`
- New: `The hydrated glass surface responds selectively to hydrogen-ion activity through ion exchange at the membrane surface.`
- Old: `Immerse in pH 4.00 buffer, wait for stability, and set meter. This adjusts the <strong>intercept</strong> (offset).`
- New: `Immerse in pH 7.00 buffer, wait for stability, and set meter. This establishes the near-neutral zero point (offset).`
- Old: `Immerse in pH 7.00 buffer, wait for stability, and set meter. This adjusts the <strong>slope</strong> (sensitivity, mV per pH unit).`
- New: `Immerse in pH 4.00 buffer, wait for stability, and set meter. With the pH 7.00 point, this establishes the slope (sensitivity, mV per pH unit).`
- Source: [Mettler Toledo pH theory guide](https://www.mt.com/dam/Analytical/pH-LabMeters/me-library/pH-Guide_en.pdf). The hydrated gel layers on the glass surfaces respond to H⁺ activity; the membrane separates the inner and outer solutions. The guide places the zero point near pH 7 and uses pH 4.01 or 9.21 to adjust the slope. Update the displayed calibration sequence, not just the explanatory labels.

**`subjects/chemistry/year12/module6/lesson15.sa.html`**

- Old: `If HCl is added to the NH₃ flask, the solution pH falls through the jump without phenolphthalein changing colour.`
- New: `If HCl is added to an NH₃ flask, phenolphthalein starts pink in the basic solution and loses its colour before the acidic equivalence point, giving an early endpoint.`
- Source: [OpenStax, titration indicators](https://openstax.org/books/chemistry/pages/14-7-acid-base-titrations). An aqueous `0.100 mol/L` ammonia solution starts near pH `11.1`, above phenolphthalein's upper transition pH; adding HCl lowers its pH through the indicator range before the ammonium equivalence region.

**`subjects/chemistry/year12/module6/lesson13.sa.html`**

- Old: `Mixing equal moles of HCl and NaOH gives NaCl(aq). Contains H⁺ and OH⁻, yet NaCl has no buffering ability`
- New: `Mixing equal moles of HCl and NaOH gives mainly NaCl(aq) and water after reaction. The original acid and base have been consumed, and no appreciable weak-acid/conjugate-base pair remains, so this is not a buffer`
- Source: [OpenStax, buffers](https://openstax.org/books/chemistry-2e/pages/14-6-buffers). The old model answer simultaneously says equal moles have neutralised and that the resulting NaCl solution contains the H⁺ and OH⁻ reactants. The corrected counterexample explains why a mixture of acid and base need not leave buffer components.
- Old: `even if [H₂CO₃] were reduced to near zero, the ratio [HCO₃⁻]/[H₂CO₃] cannot reach the required ~20:1 because the numerator ([HCO₃⁻] = 6.0) is the limiting factor.`
- New: `if [H₂CO₃] fell to 0.30 mmol/L while [HCO₃⁻] stayed at 6.0 mmol/L, the ratio would reach 20:1. Whether breathing can safely achieve or sustain that change is a separate physiological question.`
- Source: [OpenStax, buffers](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-6-buffers). Direct division gives `6.0/0.30 = 20`.

**`subjects/chemistry/year12/module6/lesson12.sa.html`**

- Old: `pH 5.1 is below the natural threshold of pH 5.6, additional acid beyond atmospheric CO₂ is present, consistent with acid deposition.`
- New: `A sample pH of 5.1 warrants investigation, but the pH of clean rainwater is not a universal threshold for natural freshwater. Measure alkalinity, sulfate, nitrate and a local baseline before attributing this water sample to acid deposition.`
- Source: [US EPA, acid rain](https://www.epa.gov/acidrain/what-acid-rain) uses pH near 5.6 as an approximate clean-rain reference. [USGS, acid deposition and natural waters](https://pubs.usgs.gov/wsp/2249/report.pdf) explains that natural water pH varies by site and cannot be attributed to acid deposition from a single cutoff. The problem names a water sample, not a rain sample.

**`subjects/chemistry/year12/module6/lesson14.sa.html`**

- Old: `Phenolphthalein (8.3–10.0) would not change colour until far past the equivalence point`
- New: `Phenolphthalein's basic-range transition is above the acidic equivalence pH. When HCl is added to NaHCO₃, it may start colourless or lose any initial pink colour before equivalence, so it is unsuitable for this endpoint`
- Old: `Resolved by identifying 17.10 mL as non-concordant and excluding it from the average.`
- New: `Exclude 17.10 mL from the concordant average, remove any air bubble from the burette tip and repeat the titre to obtain a valid replacement reading.`
- Source: [OpenStax, acid-base indicators and titration curves](https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations) supports comparing transition range with the titration direction and equivalence region. Phenolphthalein changes on the basic side, before an acidic equivalence point when acid is added to base. [Royal Society of Chemistry, titration technique](https://edu.rsc.org/download?ac=537507) directs removal of bubbles in the burette tip before titrating; excluding an outlier alone does not resolve the apparatus fault.

**`subjects/chemistry/year12/module6/lesson15.sa.html`**

- Old: `The equivalence point pH is 9, but methyl orange changes colour at pH 3.1–4.4.`
- New: `The equivalence point is acidic because NH₄⁺ forms, and methyl orange changes colour at pH 3.1–4.4.`
- Old: `The EP pH of 5.3 and the sharp pH jump occur in the acidic region; MO's range encompasses this.`
- New: `The EP pH of 5.3 is acidic. Methyl orange's range does not contain 5.3; use it only if its transition falls within the steep part of this titration curve.`
- Source: [OpenStax, acid-base titrations](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-7-acid-base-titrations). A strong acid with a weak base has an acidic equivalence solution. The interval 3.1 to 4.4 cannot contain 5.3.

**`subjects/chemistry/year12/module6/lesson16.sa.html`**

- Old: `V = 20 → 7.52 (approx. jump midpoint)`
- New: `V = 20 → 8.63 (approx. equivalence pH)`
- Old: `EP pH ≈ <strong>7.52</strong>`
- New: `EP pH ≈ <strong>8.63</strong>`
- Old: `EP pH ≈ 7.52.`
- New: `EP pH ≈ 8.63.`
- Source: [OpenStax, weak-acid titration](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-7-acid-base-titrations). At equivalence the acetate concentration is `0.00200 mol / 0.04000 L = 0.0500 mol/L`. With pKa 4.57, `Kb = 10⁻¹⁴ / 10⁻⁴·⁵⁷`, giving pH about 8.63 at 25 °C.
- Old: `starting pH = 3.52`
- New: `starting pH = 2.79`
- Old: `observed starting pH = 3.52`
- New: `observed starting pH = 2.79`
- Old: `only 0.30% ionisation`
- New: `about 1.63% ionisation`
- Source: [OpenStax, weak-acid equilibrium](https://openstax.org/books/chemistry/pages/14-3-relative-strengths-of-acids-and-bases). The case gives `c = 0.1000 mol/L` and `pKa = 4.57`, hence `Ka ≈ 2.69 × 10⁻⁵`; the quadratic gives `[H⁺] ≈ 0.00163 mol/L`, pH 2.79 and 1.63% ionisation. Apply the starting-pH replacement to the worked question, Question 8 and answer lines, then recompute any prose using `[H⁺] = 10⁻³·⁵²`.

**`subjects/chemistry/year12/module6/lesson17.sa.html`**

- Old: `starting pH = 1.70`
- New: `starting pH = 1.60`
- Source: [OpenStax, pH and pOH](https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh). The titre gives `0.0500 × 0.02000 / 0.04000 = 0.0250 mol/L` for monoprotic strong HX. Its pH is `−log₁₀(0.0250) = 1.60`.
- Old: `after 25 mL, pH levels above 12.`
- New: `after 25 mL, pH rises as excess NaOH is added.`
- Source: [OpenStax, acid-base titrations](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-7-acid-base-titrations). At 25.00 mL, excess OH⁻ is `0.000250 mol` in `0.06500 L`, giving pH about 11.59 at 25 °C.
- Old: `V = 25.00 mL → pH 8.57`
- New: `V = 25.00 mL → pH 8.79`
- Old: `EP pH ≈ 8.57`
- New: `EP pH ≈ 8.79`
- Source: [OpenStax, weak-acid titration](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-7-acid-base-titrations). At equivalence, propanoate is `0.00250/0.05000 = 0.0500 mol/L`; `Kb = 10⁻¹⁴/(1.3 × 10⁻⁵)`, so pH is about 8.79. Replace all three 8.57 occurrences that identify this equivalence point; do not alter the unrelated `8.57 × 10⁻⁷` hydroxide calculation for fluoride.

**`subjects/chemistry/year12/module6/lesson19.sa.html`**

- Old: `They calculate c(CH₃COOH) ≈ [H⁺]²/Ka ≈ 0.44 mol/L, equivalent to about 2.6% acidity. The label says 5%. The same student runs a direct NaOH titration and gets 4.9%. The pH probe gave the wrong answer, because it measured [H⁺], not total titratable acidity, and acetic acid is a weak acid with only ~1.3% ionisation.`
- New: `Using the stated Ka, they estimate c(CH₃COOH) ≈ [H⁺] + [H⁺]²/Ka ≈ 0.884 mol/L, or about 5.3% by mass at the stated density. The label says 5%, and a direct NaOH titration gives 4.9%. The pH estimate assumes acetic acid is the only relevant acid; titration measures total titratable acidity more directly.`
- Source: [OpenStax, weak-acid equilibrium](https://openstax.org/books/chemistry/pages/14-3-relative-strengths-of-acids-and-bases). `10⁻²·⁴⁰ = 0.003981 mol/L`; `c = x + x²/(1.8 × 10⁻⁵) = 0.884 mol/L`. With 60.06 g/mol and density 1.005 g/mL this is about 5.3% by mass. The ionised fraction is about 0.45%, not 1.3%.
- Old: `reading the EP from the minimum of the conductance curve.`
- New: `reading the EP from the intersection of the before- and after-equivalence conductance trends.`
- Source: [NIT Tiruchirappalli conductometric titration laboratory manual](https://www.nitt.edu/home/academics/departments/chem/programmes/btech/curriculum/sem4/cl214/Lab%20Manual.pdf). Vinegar with NaOH gives a slope change; a conductance minimum is the typical strong-acid/strong-base pattern.

**`subjects/chemistry/year12/module6/lesson04.sa.html`**

- Old: `The Haber process produces ammonia, but ammonia itself cannot be directly applied to soil as a fertiliser in most conditions.`
- New: `Anhydrous ammonia can be used directly as fertiliser when injected into soil with suitable equipment; much is also converted into solid fertiliser salts.`
- Old: `When equal or excess NH₃ is used (as in industrial production), both protons are neutralised and the product is (NH₄)₂SO₄.`
- New: `Two moles of NH₃ per mole of H₂SO₄ produce (NH₄)₂SO₄. A 1:1 mole ratio can produce NH₄HSO₄.`
- Old: `Legal requirement: pH 6.5–8.5 for discharge`
- New: `Discharge pH limits depend on the site, receiving water and permit.`
- Old: `CaSO₄ (soluble, washes away)`
- New: `CaSO₄ (gypsum); reaction and subsequent weathering damage the stone.`
- Old: `acidic effluent lowers the pH of the receiving waterway, reducing dissolved oxygen availability and making conditions uninhabitable for fish and aquatic invertebrates.`
- New: `acidic effluent can lower receiving-water pH, directly stress aquatic organisms and increase the mobility and toxicity of dissolved metals.`
- Old: `Acidic industrial effluent must be neutralised to pH 6.5–8.5 before discharge`
- New: `Acidic industrial effluent should be treated to meet the applicable discharge permit's pH limit`
- Source: [University of Minnesota Extension, anhydrous ammonia application](https://blog-crop-news.extension.umn.edu/2022/10/fall-nitrogen-fertilizer-application.html); [OpenStax, classifying reactions](https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions); [US EPA, industrial wastewater permits](https://www.epa.gov/npdes/industrial-wastewater). The page's own sulfate equation requires two NH₃ per H₂SO₄, and discharge limits are permit specific.

**`subjects/chemistry/year12/module6/lesson05.sa.html`**

- Old: `there are exactly six: HCl, HNO₃, H₂SO₄ (1st), HClO₄, HBr, HI, everything else is weak.`
- New: `For the common acids covered here, memorise HCl, HNO₃, the first dissociation of H₂SO₄, HClO₄, HBr and HI. Classify unfamiliar acids using supplied evidence or Ka.`
- Old: `HNO₂ = pH 2.1`
- New: `HNO₂ = pH 2.19`
- Old: `At pH 2.1, [H⁺] = 10⁻²·¹ ≈ 7.9 × 10⁻³ mol/L, only about 7.9% ionised.`
- New: `Using Ka = 4.5 × 10⁻⁴ at 0.10 mol/L, [H⁺] ≈ 6.49 × 10⁻³ mol/L, pH ≈ 2.19, and about 6.5% is ionised.`
- Source: [OpenStax, weak-acid ionisation constants](https://openstax.org/books/chemistry-2e/pages/h-ionization-constants-of-weak-acids) gives a nitrous-acid Ka near the lesson's value; solving `x²/(0.10−x)=4.5×10⁻⁴` gives `x≈6.49×10⁻³ mol/L`. [OpenStax, chlorine oxoacids](https://openstax.org/books/chemistry-atoms-first-2e/pages/18-9-occurrence-preparation-and-compounds-of-oxygen) gives chloric acid as a counterexample to the universal six-acid list.
- Old: `At 0.001 mol/L, HCl is 100% ionised and CH₃COOH is still only ~1.3% ionised`
- New: `At 0.001 mol/L, HCl is essentially fully ionised, while CH₃COOH is about 12.5% ionised using Ka = 1.8 × 10⁻⁵; the weak acid's ionised fraction rises on dilution`
- Source: [OpenStax, weak-acid equilibrium](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases). Solving `1.8×10⁻⁵=x²/(0.001−x)` gives `x≈1.255×10⁻⁴ mol/L`, about `12.5%` of the analytical acid concentration. The page's `1.3%` belongs to the 0.10 mol/L case, not the 0.001 mol/L case.

- Old: `Does NOT change with dilution`
- New: `Ka at fixed temperature is unchanged by ideal dilution; the ionised fraction of a weak acid changes with concentration.`
- Old: `Four strong bases · Ca(OH)₂ and Ba(OH)₂ give 2 mol OH⁻ · Solubility ≠ strength`
- New: `Common strong bases include LiOH, NaOH, KOH, Ca(OH)₂, Sr(OH)₂ and Ba(OH)₂; the Group 2 hydroxides give two OH⁻ per dissolved formula unit.`
- Old: `Mg(OH)₂ is a special case: it has very low solubility AND its dissolved fraction does not fully dissociate, making it weak by the dissociation criterion.`
- New: `Mg(OH)₂ is sparingly soluble. Its low dissolved OH⁻ concentration reflects limited dissolution, not partial dissociation of the portion that dissolves.`
- Source: [OpenStax, relative strengths](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases) distinguishes equilibrium constants from concentration-dependent ionisation fractions and includes other strong hydroxides; [OpenStax, hydrolysis of salts](https://openstax.org/books/chemistry/pages/14-4-hydrolysis-of-salt-solutions) describes Mg(OH)₂'s low solubility.

**`subjects/chemistry/year12/module6/lesson06.sa.html`**

- Old: `the ionised fraction is fixed by Ka and never changes with how many particles the grid contains`
- New: `Ka is fixed at a given temperature; for a weak acid, the ionised fraction changes with concentration`
- Old: `NH₄NO₃(aq) → NH₄⁺(aq) + NO₃⁻(aq) (ionic salt fully dissociates)`
- New: `NH₄NO₃(s) → NH₄⁺(aq) + NO₃⁻(aq) (solid ionic salt dissolves and dissociates)`
- Source: [OpenStax, weak-acid equilibrium](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases) and [OpenStax, solubility and ionic compounds](https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions). The activity's 20-particle grids cannot use the same `~1%` fraction for dilute and concentrated acetic acid; the NH₄NO₃ dissolution equation should start from solid salt.
- Old: `= the fraction of people who rush through the door, what proportion of the crowd actually moves from car park to arena`
- New: `Acid strength is represented by how favourable passage through the door is (Ka). The fraction that has passed through at equilibrium also depends on the initial crowd size, so a weak acid's percentage ionisation changes with concentration`
- Old: `neutralisation produces a neutral solution only when BOTH the acid and base are strong.`
- New: `A strong acid plus a strong base generally gives a near-neutral salt solution. A weak acid and weak base can also give a near-neutral solution if their acidic and basic effects balance; compare their Ka and Kb.`
- Old: `Diluting HCl changes concentration; it does not change Ka or degree of ionisation.`
- New: `Diluting HCl changes concentration; HCl remains essentially fully ionised in ordinary dilute aqueous solutions. For weak acids, percentage ionisation changes on dilution even though Ka at a given temperature stays constant.`
- Source: [OpenStax, relative strengths of acids and bases](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases) and [OpenStax, hydrolysis of salts](https://openstax.org/books/chemistry-2e/pages/14-4-hydrolysis-of-salt-solutions). Ka is fixed at a given temperature in this model; weak-acid percentage ionisation depends on concentration. Weak-acid/weak-base salts can be near neutral when their hydrolysis effects balance.
- Old: `~1% (weak)`
- New: `percentage ionisation depends on concentration; calculate from Ka and c`
- Source: [OpenStax, weak-acid equilibrium](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases). The page uses the same `~1%` for 10 M and 0.001 M acetic acid. In the idealised concentration model these are about `0.13%` and `12.5%`, respectively. Replace the two card values individually with those calculated values rather than using a fixed fraction.
- Old: `Ca(OH)₂ and NaOH at the same dissolved concentration give the same [OH⁻] per mole dissolved.`
- New: `At the same dissolved formula-unit concentration, Ca(OH)₂ provides twice the OH⁻ concentration of NaOH.`
- Source: [OpenStax, relative strengths of bases](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases). Dissolved Ca(OH)₂ gives two OH⁻ per formula unit; NaOH gives one.

**`subjects/chemistry/year12/module6/lesson07.sa.html`**

- Old: `In 1893, Friedrich Kohlrausch measured ultra-pure water and found it conducted a tiny electrical current, proving water spontaneously ionises. That experiment established Kw = 10⁻¹⁴`
- New: `Late nineteenth-century conductivity measurements by Kohlrausch and Heydweiller showed that highly purified water still conducts a tiny current. Water's autoionisation explains this; at 25°C, Kw is about 10⁻¹⁴`
- Old: `In 1893, Friedrich Kohlrausch measured the electrical conductivity of the purest water he could produce at 25°C and found it was not zero, it was 5.5 × 10⁻⁸ S cm⁻¹, meaning water conducted electricity ever so slightly. He concluded that water itself must ionise into H⁺ and OH⁻ ions. That tiny conductance established Kw = 10⁻¹⁴, the number that sets the pH of every aqueous solution ever measured.`
- New: `Late nineteenth-century measurements by Kohlrausch and Heydweiller showed that highly purified water conducts a very small current. Water's autoionisation explains why both hydronium and hydroxide ions are present; at 25°C their concentration product Kw is about 1.0 × 10⁻¹⁴.`
- Old: `The tiny equilibrium constant he derived, Kw = 1.0 × 10⁻¹⁴ at 25°C, is the number that sets the neutral point at pH 7 and underpins every pH calculation that follows in this module.`
- New: `At 25°C, Kw is about 1.0 × 10⁻¹⁴, so equal hydronium and hydroxide concentrations give neutral pH near 7.`
- Old: `Recall Kohlrausch's 1893 measurement: even ultra-pure water ionises slightly, Kw = 10⁻¹⁴, confirming water is amphiprotic.`
- New: `Recall the pure-water conductivity measurements: even highly purified water contains hydronium and hydroxide ions from autoionisation, illustrating water's ability to donate and accept protons.`
- Source: [Contemporary 1894 account of Kohlrausch's pure-water conductivity experiments](https://www.nature.com/articles/051042a0); [OpenStax, water autoionisation](https://openstax.org/books/chemistry-2e/pages/14-1-bronsted-lowry-acids-and-bases). The contemporary source reports conductivity work but does not substantiate the lesson's exact 1893 date or claim that one experiment itself established the modern stated Kw value.

**`subjects/chemistry/year12/module6/lesson08.sa.html`**

- Old: `While this works for exactly 10× dilution of a monoprotic strong acid, it fails for any other dilution factor, diprotic acids, or base calculations.`
- New: `A tenfold dilution changes pH by about one unit for a fully dissociated strong acid or base while water autoionisation is negligible; for other factors use the logarithm and check the chemistry.`
- Old: `enough to denature enzymes`
- New: `enough to disrupt some enzyme activity`
- Source: [OpenStax, pH and pOH](https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh). A tenfold base dilution also changes pH by about one unit away from neutrality; blood pH 7.1 can disrupt physiology without necessarily denaturing enzymes.
- Old: `For <strong>diprotic H₂SO₄ in dilute solution</strong>, both protons are assumed to be fully donated: [H₃O⁺] = 2 × c(H₂SO₄). This is the standard HSC treatment for dilute H₂SO₄.`
- New: `For <strong>H₂SO₄ in dilute solution</strong>, the first proton dissociates essentially completely; the second is an equilibrium with Ka₂ about 1.2 × 10⁻². Include its contribution when accuracy matters.`
- Old: `[H₃O⁺] = 2 × 0.010 = 0.020<br>pH = −log(0.020) = <strong>1.70</strong>`
- New: `With Ka₂ = 0.012, the second ionisation contributes about 0.00452 mol/L; [H₃O⁺] ≈ 0.01452 mol/L and pH ≈ <strong>1.84</strong> in the concentration model.`
- Old: `pH = 1.70 (using [H₃O⁺] = 2 × 0.010 = 0.020)`
- New: `pH ≈ 1.84 (using Ka₂ = 0.012 for the second ionisation)`
- Old: `[H₃O⁺] = 2 × 0.050 = 0.100 mol/L (×2 for diprotic)`
- New: `With Ka₂ = 0.012, [H₃O⁺] ≈ 0.0585 mol/L; the first proton contributes 0.050 and the second about 0.0085 mol/L.`
- Source: [OpenStax, polyprotic acids](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-5-polyprotic-acids). The shortcut is materially wrong for the page's 0.0050 mol/L practice case, as quantified in the existing L08 correction.

**`subjects/chemistry/year12/module6/lesson09.sa.html`**

- Old: `However, stomach acid itself contains [H⁺] = 0.1 mol/L, the H⁺ from both tablets (10⁻³ to 10⁻⁴ mol/L) is negligible compared to existing stomach H⁺. <strong>Neither tablet significantly changes stomach pH.</strong> The Ka comparison matters more for intestinal absorption (higher pH environment).`
- New: `These calculations model each tablet in water. They do not predict stomach pH: existing stomach acid suppresses further ionisation of both weak acids, and a physiological conclusion would require the actual fluid composition.`
- Source: [OpenStax, weak-acid equilibrium](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases). The page's earlier correction changes the model to water; the final discussion must not reuse the original unsupported stomach-fluid conclusion.
- Old: `Ka/c = 0.10 = 10%, the assumption fails`
- New: `Ka/c = 0.10; the square-root estimate gives x/c ≈ 0.316 (31.6%), so the 5% condition fails`
- Old: `A solution containing both HA and A⁻ is a buffer, it requires Henderson-Hasselbalch. The ICE table method ignores the common ion effect`
- New: `A buffer can be calculated with Henderson-Hasselbalch or a full equilibrium table that starts with both HA and A⁻. The simple weak-acid ICE setup with initial [A⁻] = 0 is invalid here`
- Source: [OpenStax, weak-acid equilibrium and common-ion effects](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases). `Ka/c` is not the ionised fraction `x/c`; an ICE table can include the initial conjugate base.
- Old: `For Ka/c = 0.20, the error in [H⁺] is ~13%, significant for precise pH calculations.`
- New: `For Ka/c = 0.20, the square-root shortcut overestimates [H⁺] by about 25% compared with the quadratic result.`
- Source: [OpenStax, weak-acid quadratic method](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases). In units with `c=1` and `Ka=0.20`, the shortcut gives `√0.20=0.4472`; the quadratic gives `(-0.20+√0.84)/2=0.3583`, a `24.8%` relative error against the quadratic value.

**`subjects/chemistry/year12/module6/lesson10.sa.html`**

- Old: `Ka = 1.8 × 10⁻⁵ → ~0.1% ionised at 0.5 mol/L`
- New: `Ka = 1.8 × 10⁻⁵ → about 0.6% ionised at 0.5 mol/L`
- Old: `Each gives n(H₂O) = 0.0500 mol at equivalence.`
- New: `Each uses 0.0500 mol acid and 0.0500 mol base. Reactions with NH₃ form ammonium salts rather than 0.0500 mol water, so report reaction enthalpy per mole of acid or base reacted.`
- Old: `Without any pH probe or Ka table, the thermodynamic data alone classifies Sample X as a strong acid and Sample Y as a weak acid`
- New: `The heat measurements show different reaction enthalpies, but do not by themselves establish which unknown acid is strong or weak. Measure pH at a known concentration, or determine Ka, to classify them`
- Old: `The stronger the weak acid (larger Ka), the less energy needed per mole of ionisation, and the closer ΔHn is to −57 kJ/mol.`
- New: `Ka measures the equilibrium of ionisation; it does not by itself give the enthalpy of ionisation. Compare measured reaction enthalpies under controlled conditions.`
- Source: [OpenStax, enthalpy](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy) and [OpenStax, weak-acid equilibrium](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases). `√(1.8×10⁻⁵/0.5)=0.006`, about 0.6%. NH₃ protonation does not form water in the molecular salt equation. A Ka value alone does not establish a reaction enthalpy ranking.
- Old: `This 5.0 kJ/mol difference is the <strong>enthalpy of ionisation of CH₃COOH</strong>.`
- New: `The 5.0 kJ/mol difference is the measured gap between these calorimetry reactions. Assigning it to acid ionisation alone requires assumptions about heat loss and other enthalpy contributions.`
- Source: [OpenStax, calorimetry](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry). The measured reaction gap cannot be identified as a separate ionisation enthalpy without a valid enthalpy cycle and matching experimental conditions.

**`subjects/chemistry/year12/module6/lesson11.sa.html`**

- Old: `H₂SO₄ is diprotic, in dilute solution both protons are donated → [H⁺] = 2 × c(H₂SO₄). A 0.050 mol/L H₂SO₄ solution gives [H⁺] = 0.100 mol/L → pH = 1.00, not pH = 1.30.`
- New: `H₂SO₄ donates its first proton essentially completely; its second dissociation has Ka₂ about 0.012. At 0.050 mol/L, the second stage contributes about 0.00851 mol/L more H⁺, giving [H⁺] ≈ 0.0585 mol/L and pH ≈ 1.23 in the concentration model.`
- Source: [OpenStax, polyprotic acids](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-5-polyprotic-acids). Solving `0.012=(0.050+x)x/(0.050−x)` gives `x=0.0085095 mol/L`.

**`subjects/chemistry/year12/module6/lesson12.sa.html`**

- Old: `For every 10,000 H⁺ from the first ionisation, only ~1 additional H⁺ comes from the second, contributing &lt;0.01% of total [H⁺].`
- New: `For this 0.0150 mol/L carbonic-acid example, the first stage contributes about 8.03 × 10⁻⁵ mol/L H⁺ while the second contributes about 4.7 × 10⁻¹¹ mol/L, so the second contribution is negligible. The ratio of Ka values alone does not equal the ratio of proton contributions.`
- Old: `Ka1/c = 7.4 × 10⁻⁴ / 0.0200 = 3.7%, &lt;5% at first glance, but verify after calculation.`
- New: `Ka1/c = 0.037, which is not the percentage ionised. The square-root estimate would give x/c ≈ 19.2%, so the 5% shortcut fails and the quadratic solution is needed.`
- Source: [OpenStax, polyprotic acids and equilibrium approximation checks](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-5-polyprotic-acids). For H₂CO₃ at the page's `0.0150 mol/L`, `√(4.3×10⁻⁷×0.0150)=8.03×10⁻⁵ mol/L`; the second-stage contribution is near `Ka₂=4.7×10⁻¹¹ mol/L`, about one part in 1.7 million of the first-stage H⁺. `Ka/c` is not the ionised fraction `x/c`.

**`subjects/chemistry/year12/module6/lesson13.sa.html`**

- Old: `Mix 25.0 mL of 1.0 mol L&#8315;&#185; ethanoic acid with 25.0 mL of 1.0 mol L&#8315;&#185; sodium ethanoate.`
- New: `Mix 30.0 mL of 1.0 mol L&#8315;&#185; ethanoic acid with 30.0 mL of 1.0 mol L&#8315;&#185; sodium ethanoate.`
- Old: `four 100 mL beakers`
- New: `five 100 mL beakers`
- Source: The page's own procedure allocates two 25 mL buffer portions in Step 4 and then calls for a fresh 10 mL portion in Step 7. Its original 50 mL preparation leaves none for Step 7. Preparing 60 mL at the same 1:1 composition and using a fifth beaker makes the written procedure executable.

**`subjects/chemistry/year12/module6/lesson14.sa.html`**

- Old: `Phenolphthalein, correct for weak acid + strong base (tartaric acid + NaOH), EP pH &gt; 7.`
- New: `For total titratable acidity reported as tartaric-acid equivalents, phenolphthalein is commonly used to detect an endpoint near the later neutralisation stage. Tartaric acid is diprotic, so do not treat both equivalence regions as one generic weak-acid endpoint.`
- Source: [OpenStax, polyprotic acids](https://openstax.org/books/chemistry-2e/pages/14-5-polyprotic-acids). Tartaric acid has two dissociable protons and can have distinct neutralisation stages.
- Old: `NaOH + CO₂ → Na₂CO₃ + H₂O`
- New: `2NaOH + CO₂ → Na₂CO₃ + H₂O`
- Old: `14.90 is non-concordant (differs by 0.50 mL from the others), and averaging it inflates the titre and underestimates [HCl].`
- New: `The 15.35 and 15.40 mL titres are concordant; 15.60 and 14.90 mL are outliers. Averaging all four lowers the mean titre to 15.31 mL, compared with 15.38 mL for the concordant pair.`
- Old: `The same calculation you just performed on vinegar is exactly what professional oenologists perform on every blend.`
- New: `Winemakers also use acid-base titration to measure titratable acidity, but wine contains several acids and the result is usually reported as tartaric-acid equivalents, not acetic acid alone.`
- Source: [OpenStax, balancing equations](https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations); [RSC, titration accuracy](https://edu.rsc.org/download?ac=537507); [Australian Wine Research Institute, titratable acidity](https://www.awri.com.au/industry_support/winemaking_resources/laboratory_methods/chemical/ta/). The two closest titres differ by 0.05 mL; including all four changes their mean from 15.375 to 15.3125 mL.

**`subjects/chemistry/year12/module6/lesson15.sa.html`**

- Old: `Correct indicator: methyl orange (3.1–4.4).`
- New: `For an equivalence pH near 5.3, methyl red (4.4–6.2) is a better choice; check the specific curve's steep region.`
- Source: [OpenStax, acid-base titration curves](https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations). The final drill's stated weak-base equivalence interval is 4.5–5.5, which does not lie in methyl orange's 3.1–4.4 transition range.
- Old: `A 0.500 g tablet is dissolved and titrated with 0.0500 mol/L HCl.`
- New: `A 0.500 g tablet is dissolved in 25.00 mL of water and titrated with 0.0500 mol/L HCl.`
- Source: [OpenStax, weak-base titration](https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations). The final challenge asks whether the equivalence pH is nearer 4, 5 or 6 but omits the starting volume. With the specified 25.00 mL and 47.20 mL of 0.0500 M HCl, the conjugate-acid concentration at equivalence is `0.002360/0.07220=0.03269 M`; `Ka=Kw/Kb≈3.16×10⁻¹⁰`, giving pH≈`5.49` in the concentration model. Review its indicator answer against this defined case.
- Old: `Indicator range must encompass the equivalence point pH.`
- New: `Indicator range should fall within the steep pH change near equivalence; it need not contain the exact equivalence pH.`
- Old: `Any indicator whose range encompasses pH 7 is valid.`
- New: `An indicator whose transition falls inside the sharp pH jump is suitable, even if its range does not contain pH 7.`
- Old: `MO range (3.1–4.4) encompasses this EP pH`
- New: `Methyl orange's pH 3.1–4.4 range does not contain this stated equivalence pH near 5.3.`
- Source: [OpenStax, acid-base titrations](https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations). A suitable indicator changes within the steep region of the titration curve; its transition range does not have to include the exact equivalence pH. The page's own numerical ranges contradict its methyl-orange claim.

**`subjects/chemistry/year12/module6/lesson16.sa.html`**

- Old: `starting pH = 3.28`
- New: `starting pH approximately 3.17`
- Old: `equivalence point at 15.00 mL, pH 8.20`
- New: `equivalence point at 15.00 mL, pH approximately 8.85`
- Source: [OpenStax, weak-acid titration](https://openstax.org/books/chemistry/pages/14-7-acid-base-titrations). The final challenge supplies 15.00 mL of 0.1000 M NaOH and 25.00 mL acid, so `c=0.0600 M`. With `pKa=5.12`, `Ka=7.59×10⁻⁶`. At equivalence `[A⁻]=0.00150/0.04000=0.0375 M`, `Kb=1.32×10⁻⁹`, `[OH⁻]≈7.03×10⁻⁶ M`, and pH≈`8.85`; the stated `8.20` conflicts with its own givens.
- Old: `<span class="field-label">Start pH:</span> <span class="field-value">Intermediate (~3)</span>`
- New: `<span class="field-label">Start pH:</span> <span class="field-value">Depends on the acid and its concentration</span>`
- Old: `<span class="field-label">EP pH:</span> <span class="field-value">≈ 7 (no sharp jump)</span>`
- New: `<span class="field-label">EP pH:</span> <span class="field-value">Depends on Ka and Kb; often no sharp jump</span>`
- Source: [OpenStax, acid-base titrations](https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations). The equivalence pH of a weak acid titrated by a weak base is not universally 7.

**`subjects/chemistry/year12/module6/lesson17.sa.html`**

- Old: `Why does a student who uses methyl orange for a weak acid + strong base titration get a 75–80% underestimation of acid concentration?`
- New: `Why can methyl orange substantially underestimate the acid concentration in a weak-acid/strong-base titration?`
- Old: `The endpoint occurs when only ~20–25% of the acid has been neutralised.`
- New: `Its colour change occurs before equivalence; the exact titre error depends on the acid, concentrations and selected colour threshold.`
- Source: [OpenStax, acid-base titration curves](https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations). There is no universal 75–80% error or 20–25% neutralisation fraction for this indicator mismatch.
- Old: `The equivalence point is the <strong>bottom of the cliff face</strong> the point of maximum gradient (maximum dpH/dV).`
- New: `The equivalence point lies near the <strong>middle of the steep pH rise</strong>, where the gradient is greatest.`
- Source: [OpenStax, acid-base titration curves](https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations). The middle of the steep rise, not its bottom, is the relevant location in the idealised curve.

**`subjects/chemistry/year12/module6/lesson18.sa.html`**

- Old: `Kjeldahl: N₂ → NH₃ → absorbed in excess H₂SO₄ → back-titrate with NaOH.`
- New: `Kjeldahl digestion converts organic nitrogen in a sample to ammonium; alkalisation releases NH₃, which can be collected in excess acid and back-titrated.`
- Old: `Before EP, conductance may decrease slightly (HCO₃⁻ converted to H₂O and CO₂, Cl⁻ added). At the EP, only NaCl remains (minimum conductance).`
- New: `Before equivalence, HCO₃⁻ is replaced by Cl⁻ while CO₂ is released. The measured conductance curve also depends on ionic conductivities and dilution; identify equivalence by the change of slope, not an assumed minimum.`
- Source: [University of Queensland, Kjeldahl analysis](https://www.uq.edu.au/_School_Science_Lessons/Kjeldahl.html); [Metrohm, conductometric titration](https://www.metrohm.com/en_au/discover/blog/2024/conductometric-titration.html). Standard Kjeldahl measures organic nitrogen after digestion; the conductometric endpoint is found from intersecting trends, not a universal minimum.

**`subjects/chemistry/year12/module6/lesson19.sa.html`**

- Old: `A pH probe gives [H⁺] with ~2.3% uncertainty per pH unit.`
- New: `A pH uncertainty of ±0.01 corresponds to about ±2.3% relative uncertainty in hydrogen-ion activity, before other errors.`
- Source: [OpenStax, pH definition](https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh). Because activity scales as `10^(−pH)`, a pH change of `0.01` changes it by about `2.3%`; the uncertainty must be stated in pH units and is not a fixed property of every probe.
- Old: `SO₂ absorbed into water forms H₂SO₄; pH &lt; 5.6 indicates acidic deposition.`
- New: `Atmospheric SO₂ is oxidised and reacts with water and other substances to form sulfuric acid; pH near 5.6 is only a rough clean-rain reference, not a universal diagnosis for any water sample.`
- Old: `Discharge pH 6.5–8.5 (legal requirement)`
- New: `Check the discharge permit for the applicable pH range.`
- Source: [US EPA, acid rain](https://www.epa.gov/acidrain/what-acid-rain); [NSW EPA, environment protection licensing](https://www.epa.nsw.gov.au/Your-environment/Water/managing-water-pollution-in-nsw/environment-protection-licensing). SO₂ oxidation is part of sulfuric-acid formation; discharge pH conditions depend on the licence.

### Biology

**`subjects/biology/year12/module6/lesson13.sa.html`**

- Old: `the first protein produced commercially this way, made by inserting the human insulin gene into bacteria.`
- New: `an early commercial recombinant medicine. The original bacterial route expressed synthetic coding sequences for the insulin A and B chains separately, then combined the chains.`
- Source: [Original synthetic insulin-gene report](https://pubmed.ncbi.nlm.nih.gov/282602/) and [original bacterial expression report](https://pubmed.ncbi.nlm.nih.gov/85300/). The named early insulin case was not direct insertion of an unmodified human genomic insulin gene into bacteria.
- Old: `Gene cloning is needed first to make many copies of the useful gene.`
- New: `The useful gene can be obtained or made, then inserted into a suitable plasmid by recombinant DNA methods.`
- Old: `Recombinant DNA technology is then used to insert the gene into bacteria so the bacteria can express the product.`
- New: `The recombinant plasmid is introduced into suitable bacteria, which copy the plasmid as they grow and may express the gene if the construct has the required control sequences.`
- Source: [NIH, recombinant DNA technology](https://www.genome.gov/genetics-glossary/Recombinant-DNA-Technology) and [NIH, plasmid](https://www.genome.gov/genetics-glossary/Plasmid). Molecular cloning commonly includes inserting the DNA into a vector and copying that recombinant vector in host cells; gene cloning does not have to be a separate earlier stage that makes many copies before recombinant insertion.

**`subjects/biology/year12/module6/lesson02.sa.html`**

- Old: `but cells' repair systems, identified as a Class 1 carcinogen risk by IARC in 1979, correct most damage before it becomes a lasting mutation.`
- New: `but DNA repair can correct some damage before it becomes a lasting mutation.`
- Old: `This pattern, a clear decline in viable colonies as exposure time increases, supports the hypothesis: longer UV exposure causes more thymine dimers, more replication errors and cell death, so fewer cells survive to reproduce.`
- New: `The fall in viable colonies shows that longer UV exposure reduced survival or colony formation under these conditions. Colony count alone cannot show how many mutations occurred; detecting mutation requires a separate marker among survivors.`
- Source: [OpenStax Microbiology, mutations](https://openstax.org/books/microbiology/pages/11-5-mutations). UV can cause DNA damage, but survival counts alone cannot determine mutation frequency or the specific damage mechanism. The later lesson synthesis already states this limitation.

- Old: `intercalating agents such as mustard gas derivatives`
- New: `intercalating agents such as acridine dyes`
- Source: [OpenStax Microbiology, mutations](https://openstax.org/books/microbiology/pages/11-5-mutations) names acridine orange and ethidium bromide as intercalating agents that can cause insertions or deletions. [National Toxicology Program, mustard gas](https://www.ncbi.nlm.nih.gov/books/NBK590857/) describes covalent DNA binding; mustard agents are alkylating agents, not the example to use for base-pair intercalation.
- Old: `a dose of just 1 Gray (Gy) of ionising radiation increased cancer incidence by 42%, and the germline mutation rate in survivors' offspring rose 17%.`
- New: `a 1 Gy dose was associated with an estimated 47% excess relative risk of solid-cancer incidence under the stated RERF model. RERF has not detected a corresponding increase in inherited health effects in survivors' children.`
- Old: `A single dose of 1 Gray of ionising radiation increased their cancer incidence by 42%, and germline mutation rates in their children rose by 17%.`
- New: `RERF reports increased solid-cancer risk among exposed survivors, but has not detected an increase in inherited health effects among their children.`
- Old: `why a 1 Gy dose raised cancer incidence by 42% rather than 100%`
- New: `why ionising radiation increases cancer risk without causing cancer in every exposed person`
- Source: [RERF, site-specific cancer risks](https://www.rerf.or.jp/en/programs/roadmap_e/health_effects-en/late-en/site/) reports 47% excess relative incidence risk and 42% excess relative mortality risk for solid cancers at 1 Gy in its model. [RERF, genetic effects in offspring](https://www.rerf.or.jp/en/programs/roadmap_e/health_effects-en/geneefx-en/) reports no detected clinical or subclinical inherited effects. The site's 17% mutation increase is unsupported and conflicts with this summary. Also, 42% is a relative risk increase, not the percentage of exposed people who develop cancer.

**`subjects/biology/year12/module6/lesson03.sa.html`**

- Old: `In 1956, Vernon Ingram pinpointed the cause: a single base change (GAG→GTG) in the β-haemoglobin gene replaces glutamic acid with valine at position 6.`
- New: `Ingram's protein analysis showed that sickle-cell haemoglobin differs from normal haemoglobin by an amino acid substitution. A DNA base change in the β-globin gene explains the glutamic-acid-to-valine substitution at position 6.`
- Old: `In 1956, biochemist Vernon Ingram showed that the entire clinical picture of sickle cell anaemia, misshapen red blood cells, blocked vessels, organ damage, traces to a single nucleotide change: GAG→GTG at codon 6 of the β-haemoglobin gene`
- New: `Ingram's protein work revealed a small chemical difference between normal and sickle-cell haemoglobin. A single DNA base change explains the glutamic-acid-to-valine substitution at position 6 of the β-globin chain`
- Old: `Vernon Ingram's 1956 analysis showed that in a patient with sickle cell anaemia, the sixth codon of the β-haemoglobin gene reads GTG instead of GAG`
- New: `The sickle-cell β-globin gene has GTG instead of GAG at the sixth codon`
- Source: [Ingram's account of his protein analysis](https://www.ncbi.nlm.nih.gov/books/NBK224312/) and [original 1956 paper record](https://doi.org/10.1038/178792a0). Ingram compared haemoglobin proteins; he did not sequence that DNA codon in 1956.

**`subjects/biology/year12/module6/lesson03.sa.html`**

- Old: `Ingram confirmed in 1956 that the cause was a single base substitution (GAG→GTG) changing one amino acid at position 6 of β-haemoglobin.`
- New: `Ingram's protein analysis revealed the glutamic-acid-to-valine substitution at position 6 of β-globin. A DNA base change later explained that protein difference.`
- Old: `A mutation affects an organism only if it changes a protein enough to change that protein's function.`
- New: `A mutation may affect an organism by changing a protein or by changing when, where or how strongly a gene is expressed.`
- Source: [NHGRI, ENCODE and functional non-coding DNA](https://www.genome.gov/27551473/genome-advance-of-the-month-encode-deciphering-function-in-the-human-genome). This sentence occurs twice in the worked synthesis; it excludes regulatory mutations even though the module later teaches them.

- Old: `A substitution changes at most one amino acid, and often none at all`
- New: `A substitution can leave the encoded amino acid unchanged, change one amino acid, or create a premature stop codon`
- Old: `a substitution changes at most one amino acid and often none`
- New: `a substitution can be silent, change one amino acid, or create a premature stop codon`
- Source: [NHGRI, nonsense mutation](https://www.genome.gov/genetics-glossary/Nonsense-Mutation). A single-base substitution can create a stop codon and truncate the protein, so the repeated `at most one amino acid` comparison gives the wrong upper bound on its effect.

**`subjects/biology/year12/module6/lesson04.sa.html`**

- Old: `inversion and translocation preserve it, changing only where the segment sits or which way round it runs.`
- New: `balanced inversions and translocations can preserve the amount of DNA while changing its order or location; unbalanced rearrangements can gain or lose material.`
- Old: `inversion and translocation preserve it, changing only position or orientation.`
- New: `balanced inversions and translocations can preserve DNA amount, while unbalanced rearrangements can gain or lose material.`
- Old: `all the carrier's somatic cells transcribe the same genes in the same amounts as anyone else's, so the carrier develops and functions normally.`
- New: `a balanced carrier often has no symptoms because no material is gained or lost, but a breakpoint can interrupt a gene or alter its expression.`
- Old: `The rearrangement is invisible in a blood test that measures gene products and appears only in a karyotype`
- New: `A chromosomal test can identify the rearrangement, and some rearrangements can also change gene expression`
- Old: `the rearrangement does not show in any measurement of gene products and appears only on a karyotype`
- New: `chromosomal tests can identify the rearrangement, while its effect on gene products depends on the breakpoints`
- Source: [MedlinePlus Genetics, structural chromosome changes](https://medlineplus.gov/genetics/understanding/mutationsanddisorders/structuralchanges/) distinguishes balanced and unbalanced translocations and notes that effects depend on gained or lost DNA and disrupted genes. [MedlinePlus Genetics, genetic test types](https://medlineplus.gov/genetics/understanding/testing/types/) describes chromosomal and gene expression tests. A balanced copy number alone does not guarantee normal transcription or health, and karyotyping is not the only detection method.

**`subjects/biology/year12/module6/lesson05.sa.html`**

- Old: `it can be transmitted indefinitely down the generations and becomes part of the population's gene pool.`
- New: `it can be transmitted to descendants, although its persistence in the population is not guaranteed.`
- Old: `it can be transmitted indefinitely and becomes part of the gene pool.`
- New: `it can pass to descendants and enter the gene pool, although later generations may lose it.`
- Old: `Coding mutations matter more per event, while non-coding mutations matter more in aggregate, because the non-coding fraction is so much larger and much of it carries regulatory function.`
- New: `A coding mutation can directly alter a protein, while a mutation in a non-coding regulatory element can alter gene expression. The effect depends on the precise site and change; neither category has a universal severity ranking.`
- Source: [OpenStax Biology 2e, population genetics](https://openstax.org/books/biology-2e/pages/19-2-population-genetics). Drift and selection can remove an inherited allele in later generations.
- Source: [NHGRI, ENCODE and functional non-coding DNA](https://www.genome.gov/27551473/genome-advance-of-the-month-encode-deciphering-function-in-the-human-genome). Regulatory non-coding variants can matter, but the source does not establish a universal coding-versus-non-coding severity ranking.

**`subjects/biology/year12/module6/lesson06.sa.html`**

- Old: `mutation is their sole source of new variation`
- New: `mutation creates new sequence changes, while horizontal gene transfer can introduce genetic material from other organisms`
- Old: `mutation is not merely the ultimate source of variation but the only one`
- New: `mutation creates new sequence changes, but horizontal gene transfer can also add variation to an asexual population`
- Old: `the rate-limiting step for adaptation is usually the supply rather than the shuffling`
- New: `the limiting factor for adaptation depends on the available standing variation, new mutations, population size and selection pressure`
- Source: [OpenStax Microbiology, asexual prokaryote diversity](https://openstax.org/books/microbiology/pages/11-6-how-asexual-prokaryotes-achieve-genetic-diversity) identifies both mutation and horizontal gene transfer as sources of variation. [Primary experimental evolution study](https://www.nature.com/articles/ng.289) shows adaptation from standing variation; mutation supply is not generally the limiting step.

**`subjects/biology/year12/module6/lesson08.sa.html`**

- Old: `Selective breeding is limited by reproductive compatibility, so it cannot cross a species barrier`
- New: `Selective breeding is limited by which organisms can produce fertile offspring, although some closely related species can be crossed`
- Old: `Recombinant DNA technology introduces a gene from any organism`
- New: `Recombinant DNA technology can transfer a gene between organisms that cannot interbreed, provided the recipient can express the engineered construct`
- Old: `so a human insulin gene can be placed into a bacterium and the outcome specified precisely.`
- New: `for example, engineered bacteria can express synthetic sequences for human insulin chains; the product still needs testing.`
- Old: `so a human insulin gene can be placed into a bacterium with the outcome specified in advance.`
- New: `for example, engineered bacteria can express synthetic sequences for human insulin chains, followed by product testing.`
- Old: `an edit can be made exactly as intended and still produce an unexpected phenotype through off-target effects or gene interactions.`
- New: `an edit at the intended site can still have unexpected effects through gene interactions; off-target changes are a separate risk.`
- Old: `an exact edit can still give an unexpected phenotype through off-target effects or gene interactions`
- New: `an intended-site edit can still have unexpected effects through gene interactions, while off-target changes are a separate risk`
- Source: [OpenStax Biology 2e, formation of new species](https://openstax.org/books/biology-2e/pages/18-2-formation-of-new-species) covers hybridisation between related species; [OpenStax Microbiology, genetic engineering tools](https://openstax.org/books/microbiology/pages/12-1-microbes-and-the-tools-of-genetic-engineering) explains engineered gene transfer. [Original synthetic insulin-gene report](https://pubmed.ncbi.nlm.nih.gov/282602/) and [original bacterial expression report](https://pubmed.ncbi.nlm.nih.gov/85300/) document the early A/B-chain route, not direct insertion of a whole human genomic insulin gene. [National Academies, gene editing](https://www.nationalacademies.org/read/24623/chapter/5) distinguishes changes at the target site from changes at other sites.

**`subjects/biology/year12/module6/lesson09.sa.html`**

- Old: `A safety trial can establish that a modified crop is not harmful to eat`
- New: `Food-safety studies can provide evidence about tested health risks under defined conditions`
- Old: `the seed is patented, so farmers cannot save it and must repurchase annually`
- New: `seed patents and licence terms can restrict saving and replanting seed; the rules vary by seed product and jurisdiction`
- Source: [WHO, safety of genetically modified foods](https://www.who.int/news-room/questions-and-answers/item/food-genetically-modified) describes case-by-case risk assessment, not proof of absolute harmlessness from one trial. [USDA Agricultural Marketing Service, plant variety protection FAQ](https://www.ams.usda.gov/services/plant-variety-protection/pvpo-frequently-asked-questions) distinguishes seed saving rights from restrictions imposed by other patents or contracts. The blanket rule for all Bt cotton farmers and countries is unsupported.

**`subjects/biology/year12/module6/lesson10.sa.html`**

- Old: `Gene therapies for spinal muscular atrophy and some inherited retinal disorders are in clinical use and treat conditions that were previously untreatable.`
- New: `Gene therapies for spinal muscular atrophy and some inherited retinal disorders are in clinical use, adding options for conditions with serious unmet need.`
- Old: `The Human Genome Project was expected to yield routine gene therapies within a decade`
- New: `Around 2000, NHGRI predicted that gene therapy would become common by 2010–2020 for a small set of conditions`
- Source: [FDA, spinal muscular atrophy therapies](https://www.fda.gov/media/190313/download) includes other treatment options. [NHGRI, genomics and the future](https://www.genome.gov/25019926/online-education-kit-genomics-and-the-future) makes a narrower, longer-range prediction than the lesson's broad `within a decade` claim.

**`subjects/biology/year12/module6/lesson11.sa.html`**

- Old: `Modified crop varieties are genetically uniform by design`
- New: `Widespread planting of a small number of crop varieties can narrow on-farm diversity, whether those varieties are genetically engineered or conventionally bred`
- Old: `Higher yields on existing farmland reduce the pressure to clear additional habitat`
- New: `Higher yields could reduce pressure to clear habitat where land-use policy keeps additional land intact; yield gains alone do not guarantee land sparing`
- Old: `a transgene that confers no advantage outside cultivation will not spread even if it transfers, since it is diluted each generation`
- New: `a transferred transgene with no fitness effect may be lost or persist through drift; its fate depends on population size, repeated gene flow and any fitness effects`
- Old: `risk assessment should be site-specific rather than technology-specific`
- New: `risk assessment should consider the trait, crop, compatible relatives and local conditions`
- Source: [National Academies, genetically engineered crops, chapter 7](https://www.nationalacademies.org/read/23395/chapter/7) and [summary](https://www.nationalacademies.org/read/23395/chapter/2). Effects on crop diversity, land use and wild relatives depend on the crop, trait, setting and comparator; neutral alleles can persist by drift.

**`subjects/biology/year12/module6/lesson12.sa.html`**

- Old: `Genetic uniformity within the crop is deliberate and extensive`
- New: `Planting few crop varieties widely can narrow genetic diversity, but this is a breeding and management pattern, not an inherent feature of genetic engineering`
- Old: `Higher yield per hectare also spares land`
- New: `Higher yield per hectare may support land sparing if policy and land use actually protect habitat`
- Old: `withdrawing a technology returns yields to their former level`
- New: `withdrawing a technology can change yields, but the result depends on replacement varieties, management and changing conditions`
- Old: `the loss there is permanent and the gain is not`
- New: `gene flow can have lasting effects in a compatible wild relative, but persistence and biodiversity impact must be assessed for the particular trait and population`
- Source: [National Academies, genetically engineered crops, chapter 7](https://www.nationalacademies.org/read/23395/chapter/7) and [summary](https://www.nationalacademies.org/read/23395/chapter/2). The page presents context-dependent effects as inevitable and permanent.

**`subjects/biology/year12/module6/lesson13.sa.html`**

- Old: `cutting is done by a protein that has no sequence preference of its own`
- New: `Cas9 cuts only when it recognises a suitable adjacent PAM and the guide RNA pairs sufficiently with the neighbouring DNA`
- Old: `producing a double-strand break at a position specified entirely by the guide`
- New: `producing a double-strand break at a site constrained by both guide pairing and a suitable PAM`
- Source: [Original Cas9 programming paper](https://doi.org/10.1126/science.1225829) and [PAM recognition research](https://www.nature.com/articles/s41467-020-20633-y). Cas9 has a PAM requirement; guide sequence alone does not specify every possible cut site.

**`subjects/biology/year12/module6/lesson14.sa.html`**

- Old: `flow cytometry-sorted sperm and artificial insemination produced 85% female calves`
- New: `sex-sorted semen and artificial insemination can increase the proportion of female calves; the outcome depends on sorting quality and the breeding programme`
- Old: `In the 2019 Wambiana trial, flow cytometry machines sorted 15 million sperm per hour`
- New: `In sex-sorted semen production, flow cytometry can separate X-bearing and Y-bearing sperm before artificial insemination`
- Old: `removing the element of chance from fertilisation`
- New: `reducing uncertainty about which parents contribute gametes while fertilisation and allele segregation remain probabilistic`
- Old: `while pollen is generally shorter-lived and artificial pollination is done plant by plant`
- New: `while pollen storage and the scale of controlled pollination vary by species and breeding system`
- Source: [Meat & Livestock Australia, sexed-semen methods](https://www.mla.com.au/globalassets/mla-corporate/research-and-development/final-reports/b.gbp.0050-final-report.pdf); [FAO, hybrid seed production](https://www.fao.org/docrep/pdf/012/i1070e/i1070e03.pdf). The named Wambiana rate remains unverified, and controlled pollination can operate at larger scales.

**`subjects/biology/year12/module6/lesson16.sa.html`**

- Old: `isolate the human insulin gene → cut gene and plasmid with the same restriction enzyme → join with DNA ligase → introduce recombinant plasmid into <em>E. coli</em> → bacteria copy and express the human gene`
- New: `chemically synthesise coding sequences for the insulin A and B chains → place each in a suitable bacterial expression construct → express the chains separately in E. coli → recover and join the chains to make human insulin`
- Old: `Successful ligation requires that both the donor fragment and the vector are cut with the same restriction enzyme`
- New: `Successful ligation requires compatible DNA ends; these may be produced by the same enzyme or by different enzymes that make compatible ends`
- Old: `so only cells that took up the plasmid survive`
- New: `so cells carrying an antibiotic-resistant plasmid survive; further screening confirms which plasmids contain the intended insert`
- Source: [Original synthetic insulin-gene report](https://pubmed.ncbi.nlm.nih.gov/282602/) and [original bacterial expression report](https://pubmed.ncbi.nlm.nih.gov/85300/) document the A/B-chain route. [Addgene, subcloning protocol](https://www.addgene.org/protocols/subcloning/) and [Addgene, plasmid selection](https://blog.addgene.org/plasmids-101-positive-and-negative-selection-for-plasmid-cloning) show that compatible ends, not necessarily identical enzymes, permit ligation and that antibiotic selection identifies resistance, not the intended insert.

**`subjects/biology/year12/module6/lesson17.sa.html`**

- Old: `the germline edits will be inherited by their own children indefinitely`
- New: `a germline edit could be passed to descendants if present in reproductive cells, but its transmission and long-term persistence are not guaranteed`
- Old: `These principles apply equally to agricultural and industrial genetic technologies`
- New: `The broader need to assess benefit, risk and evidence also applies to agricultural and industrial technologies, while consent and heritable human editing raise distinct ethical questions`
- Old: `so the immunological problem is removed at its source rather than managed`
- New: `which reduces the sequence difference from animal insulin, although reactions to human insulin products can still occur`
- Old: `which is what made universal access to insulin practical`
- New: `which enabled larger-scale supply, although access still depends on price and distribution`
- Old: `carries no risk of transmitting an animal pathogen`
- New: `avoids risks associated with animal tissue sourcing when manufactured and purified to required standards`
- Source: [National Academies, heritable human genome editing](https://www.nationalacademies.org/read/25665/chapter/6) and [genetically engineered crops summary](https://www.nationalacademies.org/read/23395/chapter/2) distinguish human consent and inheritance from crop applications. [WHO, biological medicines naming](https://www.who.int/teams/health-product-and-policy-standards/inn/inn-bio/inn-bio-inn) and [WHO prequalification, human insulin assessment](https://extranet.who.int/prequal/sites/default/files/whopar_files/bt-dm004-part6bv1.02_oct2022.pdf) do not imply no immune reactions, universal access or zero production risk.

**`subjects/biology/year12/module6/lesson18.sa.html`**

- Old: `while golden rice, which was designed to address vitamin A deficiency and generated no revenue, has been adopted almost nowhere despite decades of development`
- New: `while Golden Rice was approved for commercial propagation in the Philippines in 2021 but is currently on hold after a 2024 court decision; its uptake cannot be explained by revenue alone`
- Source: [PhilRice, Golden Rice status](https://www.philrice.gov.ph/golden-rice/qa/). The current status is a specific regulatory and legal history, not evidence of a single revenue cause.

**`subjects/biology/year12/module6/lesson19.sa.html`**

- Old: `their calculation that standing variation would be exhausted within 200–400 generations without it`
- New: `their evidence that selection changed finch beak traits over many generations`
- Old: `the gene pool would eventually converge on a single uniform genotype`
- New: `allele frequencies could change through selection and drift, while existing variation might persist or be lost depending on the population and environment`
- Old: `Resistance is the practical limit on every drive built so far`
- New: `Resistance is a major possible limit on gene drives, but its effect depends on the drive design, target site and population; some laboratory cage studies have achieved suppression without detecting resistance in that setting`
- Source: [Grant and Grant's 2002 finch paper](https://pubmed.ncbi.nlm.nih.gov/11976447/) does not calculate a universal 200–400-generation exhaustion horizon. [Primary mosquito cage study](https://www.nature.com/articles/s41467-021-24790-6) and [National Academies, gene drives](https://www.nationalacademies.org/read/23405/chapter/2) show that resistance is a serious design issue, not a demonstrated failure of every drive.

**`subjects/biology/year12/module6/lesson06.sa.html`**

- Old: `Peter and Rosemary Grant have studied <em>Geospiza fortis</em> finches on Daphne Major island since 1977.`
- New: `Peter and Rosemary Grant began studying Darwin's finches on Daphne Major in 1973.`
- Old: `Peter and Rosemary Grant began measuring every finch on Daphne Major island in 1977.`
- New: `Peter and Rosemary Grant began their long-term finch study on Daphne Major in 1973.`
- Source: [Princeton's account of the Grants' research](https://dof.princeton.edu/people/peter-raymond-grant). The study began in 1973; the severe drought occurred in 1977. The page's precise beak-depth percentage and heritability should be checked against the cited Grant dataset before they are reused.
- Old: `Their data show beak depth heritability of 0.79, and three independent variation sources: mutation rate, crossing over frequency, and independent assortment. After the severe 1977 drought eliminated 85% of the population, mean beak depth increased 17% in just one generation, all from pre-existing heritable variation, with no new mutations required.`
- New: `Their long-term study shows how natural selection acted on existing variation in beak traits during the severe 1977 drought. Crossing over, independent assortment and fertilisation make new allele combinations, while mutation creates new alleles.`
- Old: `When the survivors reproduced, the next generation had beaks 17% deeper on average, not from new mutations, but entirely from pre-existing heritable variation with a heritability of 0.79.`
- New: `Birds with beaks suited to the remaining seeds were more likely to survive and reproduce, shifting beak traits in later generations. The change could draw on heritable variation already present in the population.`
- Source: [Princeton summary of the finch study](https://research.princeton.edu/news/gene-shaped-evolution-darwins-finches) and [Grant and Grant's 2002 paper](https://pubmed.ncbi.nlm.nih.gov/11976447/). The checked primary summaries support beak-trait selection, but not the page's exact 17% and 0.79 figures. Remove those figures pending the original data table.

**`subjects/biology/year12/module6/lesson16.sa.html`**

- Old: `Today, 1.5 million Australians use insulin, 95% of which is recombinant human insulin; the annual global market is $35 billion.`
- New: `Recombinant DNA production made human-sequence insulin widely available. Give a current usage or market figure only with a matching source and date.`
- Old: `Today, 95% of the insulin used by 1.5 million Australians is recombinant human insulin from the same basic rDNA toolchain.`
- New: `Recombinant DNA production now supplies human-sequence insulin and insulin analogues used by many Australians with diabetes.`
- Source: [Diabetes Australia, reports](https://www.diabetesaustralia.com.au/reports/). Its approximately 1.5 million figure counts Australians living with diagnosed diabetes, not insulin users; the page does not establish the 95% or market claims.

**`subjects/biology/year12/module6/lesson01.sa.html`**

- Old: `The mutation enters the gene pool only if it occurs in a germ-line cell, since only gametes pass DNA to the next generation.`
- New: `In sexually reproducing animals, a germ-line mutation can pass to offspring through gametes. In bacteria, a heritable mutation can pass to daughter cells during division.`
- Old: `It enters the gene pool only if it occurs in a germ-line cell, since only gametes transmit DNA to the next generation`
- New: `In sexually reproducing animals it can enter the next generation through gametes; in bacteria it can pass to daughter cells during division`
- Source: [OpenStax Microbiology, mutations](https://openstax.org/books/microbiology/pages/11-5-mutations) and [microbial growth](https://openstax.org/books/microbiology/pages/9-1-how-microbes-grow). Bacteria have no germ line, yet heritable mutations pass through binary fission.
- Old: `only mutation increases the total genetic diversity of a gene pool, while meiosis and fertilisation redistribute it.`
- New: `mutation creates new alleles, while gene flow can introduce alleles that were absent from a local population. Meiosis and fertilisation reshuffle existing alleles.`
- Source: [OpenStax Biology 2e, population genetics](https://openstax.org/books/biology-2e/pages/19-2-population-genetics). Apply to both occurrences in this lesson.

**`subjects/biology/year12/module6/lesson11.sa.html`**

- Old: `10,900+ species`
- New: `more than 1,300 species and subspecies`
- Old: `established in 1976`
- New: `established in 1975`
- Old: `since 1976`
- New: `since 1975`
- Old: `(1976-present)`
- New: `(since 1975)`
- Source: [San Diego Zoo Wildlife Alliance, Frozen Zoo](https://sandiegozoowildlifealliance.org/frozen-zoo) and [its history](https://sandiegozoowildlifealliance.org/story-hub/frozen-zoo-50-years-making). Apply each count and date replacement to every occurrence in this lesson. The collection reports over 11,500 cell lines from more than 1,300 species and subspecies.
- Old: `the only viable path to northern white rhino offspring involves induced pluripotent stem cells and synthetic gametes made from banked skin-cell DNA.`
- New: `one assisted-reproduction path uses Fatu's collected oocytes and banked sperm to make embryos for southern white rhino surrogates. Stem-cell-derived gametes are another research path that could broaden the founder gene pool.`
- Old: `survival of the sub-species now depends on combining banked sperm with induced pluripotent stem cells from banked skin cells to produce synthetic gametes.`
- New: `researchers have made embryos from Fatu's oocytes and banked sperm for transfer to southern white rhino surrogates. Stem-cell-derived gametes are a separate research path.`
- Old: `But if synthetic gametes produced from those cells produce offspring that survive, those individuals represent a genetically bottlenecked population`
- New: `If embryos produced through assisted reproduction develop into surviving offspring, those individuals would begin as a genetically bottlenecked population`
- Old: `any northern white rhino population produced by synthetic gametes from Najin, Fatu, and banked males would have extremely low genetic diversity`
- New: `a northern white rhino population founded from Fatu's oocytes and banked males would begin with low genetic diversity`
- Source: [BioRescue's embryo-transfer update](https://www.biorescue.org/en/news/biorescue-scientists-produced-three-new-embryos-and-began-using-northern-white-rhino-embryos) and [stem-cell research update](https://www.biorescue.org/en/news/biorescue-produces-primordial-germ-cells-northern-white-rhino-stem-cells-worlds-first-large). The hero and later return text also imply synthetic gametes are the only path; align those passages with this correction.

**`subjects/biology/year12/module6/lesson14.sa.html`**

- Old: `A 2019 CSIRO/MLA trial at Wambiana cattle station in Queensland used flow cytometry to sort X- and Y-bearing sperm, then artificial insemination to produce 85% female calves from beef herds. Industry-wide adoption could prevent 1.5 million male 'bobby calf' deaths annually.`
- New: `Sex-sorted semen can increase the chance of a calf being the desired sex without editing its DNA. In dairy herds, this can reduce the number of non-replacement calves, while costs and fertility outcomes still matter.`
- Old: `In 2019, a CSIRO/MLA trial at Wambiana cattle station in Queensland used flow cytometry to sort X-bearing from Y-bearing sperm, the machine processes 15 million sperm per hour, then used artificial insemination to achieve 85% female calves. Industry-wide, this approach could prevent 1.5 million male 'bobby calf' deaths annually.`
- New: `Sex sorting separates X-bearing from Y-bearing sperm before artificial insemination. It can raise the chance of a female calf without changing the sperm's DNA sequence. In dairy herds, it may reduce the number of non-replacement calves.`
- Old: `Return to the Wambiana 2019 CSIRO/MLA trial using sexed semen.`
- New: `Return to the sex-sorted semen example.`
- Source: [Meat & Livestock Australia report on sexed semen](https://www.mla.com.au/globalassets/mla-corporate/research-and-development/final-reports/b.gbp.0050-final-report.pdf), [RSPCA Australia on bobby calves](https://kb.rspca.org.au/categories/farmed-animals/cattle/dairy-cattle/what-happens-to-bobby-calves). The checked CSIRO/MLA search did not locate the named Wambiana sex-sorting trial. Wambiana sources describe a grazing trial. Bobby calves arise in dairy production, not the beef-herd setting claimed here, and RSPCA reports at least 400,000 destined for slaughter annually, not 1.5 million prevented deaths.

**`subjects/biology/year12/module6/lesson15.sa.html`**

- Old: `after 277 failed attempts.`
- New: `from 277 nuclear-transfer attempts, one of which produced Dolly.`
- Old: `The 277 failures in Wilmut's Roslin experiment`
- New: `The low live-birth yield from 277 nuclear-transfer attempts in Wilmut's Roslin experiment`
- Source: [Wilmut and colleagues' original report](https://pubmed.ncbi.nlm.nih.gov/9039911/) and [Roslin Institute's account](https://vet.ed.ac.uk/roslin/about/history/dolly/facts/life-of-dolly). The 277 includes the successful attempt.
- Old: `She developed premature arthritis and lung disease, dying at 6.5 years (normal: 11–12).`
- New: `She developed arthritis and later a viral lung disease. She was euthanised at age six; these observations alone do not establish premature ageing from cloning.`
- Old: `Dolly developed premature arthritis and died at 6.5 years, half the normal sheep lifespan.`
- New: `Dolly later developed arthritis and a viral lung disease. She was euthanised at age six; these events do not by themselves show that cloning accelerated her ageing.`
- Old: `Dolly's short lifespan is evidence that the copy was imperfect.`
- New: `Dolly's lifespan alone cannot show that cloning caused premature ageing.`
- Source: [Roslin Institute, Dolly's life](https://vet.ed.ac.uk/roslin/about/history/dolly/facts/life-of-dolly). Its health screens found no condition directly linked to premature ageing; arthritis cause was undetermined and other sheep in the flock had the same lung virus. Align the hook's premature-arthritis and half-lifespan claims with this correction.

**`subjects/biology/year12/module6/lesson16.sa.html`**

- Old: `To produce Humulin in 1982, Genentech scientists first isolated the human insulin gene from a cDNA library, then cut both the gene and a plasmid vector using the same restriction enzyme, which left matching 'sticky ends' on both fragments. DNA ligase joined them together. The recombinant plasmid was then introduced into <em>E. coli</em> cells, which copied the plasmid every time the bacterium divided and expressed insulin precursors, which were then recovered, processed and purified at scale.`
- New: `For the original recombinant human insulin work, Genentech scientists chemically synthesised DNA sequences for insulin's A and B chains. They expressed the chains separately in <em>E. coli</em>, then recovered and joined them to make insulin. A cDNA route is another valid production method, but it was not the route used in this historical example.`
- Source: [Original synthetic-gene paper](https://pubmed.ncbi.nlm.nih.gov/282602/) and [original expression paper](https://pubmed.ncbi.nlm.nih.gov/85300/). Keep the general plasmid method elsewhere on the page, but do not attribute a cDNA-library start to the original insulin work.

**`subjects/biology/year12/module6/lesson19.sa.html`**

- Old: `A germ-line edit is present in every cell of the resulting organism including its gametes, so it is heritable indefinitely.`
- New: `A germ-line or early-embryo edit may be passed to offspring if it reaches the cells that produce gametes. Mosaicism can leave some cells unedited, and inheritance by one descendant does not guarantee indefinite persistence in a population.`
- Old: `a germ-line edit is present in every cell including the gametes and so is heritable indefinitely`
- New: `an edit may be heritable if it is present in gametes, although mosaicism and later population processes can limit transmission and persistence`
- Source: [National Academies, Heritable Human Genome Editing](https://www.nationalacademies.org/read/25665/chapter/6) identifies mosaicism as a central concern and requires confirming the edited sequence in embryo cells. [WHO, human genome editing](https://www.who.int/health-topics/human-genome-editing) distinguishes germline research from heritable reproductive applications. An edit in an embryo does not automatically appear in every cell or persist forever.
- Old: `herbicide tolerance confers nothing where no herbicide is sprayed`
- New: `herbicide tolerance may offer no benefit where no herbicide is sprayed, but its fate then depends on any fitness cost, gene flow and drift`
- Old: `so selection removes it and drift removes rare alleles faster still in small populations`
- New: `so a fitness cost could favour its loss, while drift in small populations could either eliminate or fix a rare allele`
- Source: [Primary study of resistance fitness under changing pesticide exposure](https://www.nature.com/articles/s41559-025-02853-x) shows that resistance costs and persistence depend on conditions. No herbicide benefit alone does not establish negative selection, and drift has no fixed direction.
- Old: `chloroplast transformation that prevents pollen transmission`
- New: `chloroplast transformation that can reduce pollen-mediated transfer in species with predominantly maternal plastid inheritance, while rare paternal leakage remains possible`
- Source: [Primary tobacco plastid-transmission study](https://pmc.ncbi.nlm.nih.gov/articles/PMC1849964/) measured rare paternal transmission and concluded plastid transformation does not ensure absolute transgene confinement. The old claim occurs twice in the lesson's extended answer.
- Old: `Reversal drives are also now demonstrated, which target and overwrite an earlier drive, so even the strongest case for permanence has an engineered counter.`
- New: `Reversal and allelic-drive approaches have been demonstrated in controlled laboratory populations, but they do not establish that a released drive could be fully reversed in a wild population.`
- Old: `reversal drives, which target and overwrite an earlier drive, have now been demonstrated, so even the strongest case for permanence has an engineered counter`
- New: `laboratory reversal-drive results show a possible countermeasure, but reversal of an established drive in the wild has not been demonstrated by those results`
- Source: [Primary Drosophila population-cage allelic-drive study](https://www.nature.com/articles/s41467-021-27654-1) and [self-eliminating drive cage study](https://www.nature.com/articles/s41467-024-54210-4) demonstrate laboratory proof of principle, not reliable reversal of an established wild drive. Keep the potential and limit separate in the model evaluation.
- Old: `Grant and Grant's 2002 <em>Science</em> paper measured the spontaneous mutation rate in <em>Geospiza</em> beak morphology genes at 10⁻⁷ per base pair per generation. Without this ongoing mutation input, they calculated that standing genetic variation in the Daphne Major population would be exhausted within 200–400 generations.`
- New: `Grant and Grant's 2002 <em>Science</em> paper documented long-term changes in Galápagos finch body size and beak traits. Mutation creates new alleles, while selection and other processes change their frequencies in populations.`
- Old: `Grant and Grant published in 2002 <em>Science</em> that the spontaneous mutation rate in <em>Geospiza</em> beak genes on Daphne Major is 10⁻⁷ per base pair per generation. Without that continuous low-level input, they calculated the standing genetic variation would be exhausted within 200–400 generations.`
- New: `Grant and Grant published a long-term study of Galápagos finches in 2002. Their observations show how beak traits changed as selection acted on variation in the populations.`
- Old: `Grant and Grant's 2002 <em>Science</em> paper measured that beak morphology genes in Daphne Major's <em>Geospiza fortis</em> population mutate at 10⁻⁷ per base pair per generation. From this rate, they calculated that without ongoing mutation, all standing genetic variation in beak depth, the very variation that drove the 17% beak-depth increase seen after the 1977 drought, would be exhausted within 200–400 generations.`
- New: `Grant and Grant's 2002 <em>Science</em> paper reports long-term changes in finch body size and beak traits. It supports discussion of observed selection, but does not measure a beak-gene mutation rate or predict when standing variation would be exhausted.`
- Old: `Grant and Grant's 2002 <em>Science</em> measurement of the spontaneous mutation rate in <em>Geospiza</em> beak genes at 10⁻⁷ per base pair per generation, and their calculation that standing variation would be exhausted within 200–400 generations without it.`
- New: `Grant and Grant's 2002 <em>Science</em> study of long-term changes in Galápagos finch beak traits.`
- Source: [Grant and Grant, 2002 paper record](https://pubmed.ncbi.nlm.nih.gov/11976447/). The cited paper does not report a beak-gene mutation rate or a 200 to 400 generation diversity-depletion calculation. The same unsupported attribution recurs in the conceptual-first and closing passages; replace those claims there too.

## Misleading teaching rules requiring page-wide review

### Unsupported named case studies

These old passages give named institutions, years and measurements without a matching primary record in the checked source. The replacements retain the useful teaching case as an explicit example. Do not present the old attribution as historical fact unless the underlying report is supplied and checked.

**`subjects/chemistry/year12/module6/lesson01.sa.html`**

- Old: `published the same proton-transfer theory of acids and bases simultaneously, in different journals, in different languages, 1,200 km apart, neither aware of the other. The single molecule that forced both of them to abandon Arrhenius's model was ammonia`
- New: `independently proposed a proton-transfer model of acids and bases in 1923. Ammonia shows a limitation of the older Arrhenius model`
- Old: `independently published the same new acid-base theory on the same day, without ever contacting each other. The molecule that forced both of them to rewrite chemistry? Ammonia`
- New: `independently proposed a proton-transfer model in 1923. What does it explain about ammonia`
- Source: [Royal Society of Chemistry, Brønsted history](https://edu.rsc.org/resources/on-this-day-feb-22--johannes-br%C3%B8nsted-was-born/10222.article) and [OpenStax, Brønsted-Lowry model](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-1-bronsted-lowry-acids-and-bases). These support independent work in 1923, not the same publication day or a single molecule forcing both chemists' decisions.

**`subjects/chemistry/year12/module6/lesson02.sa.html`**

- Old: `In 1947, industrial chemist Wendell Latimer and William Jolly at the University of California systematically catalogued how naming conventions predict reaction products, showing that knowing whether HCl is a binary acid (hydro-prefix) or H₂SO₄ is an oxoacid (suffix from ion name) lets you predict every neutralisation product before mixing a drop. NESA adopted the same IUPAC two-pattern framework in its current syllabus.`
- New: `Recognising a binary acid such as HCl and an oxoacid such as H₂SO₄ helps you name the acid and identify its anion. To predict neutralisation products, also identify the base and balance the reaction.`
- Source: [OpenStax, names of acids](https://openstax.org/books/chemistry-2e/pages/2-7-chemical-nomenclature) and [NESA Chemistry Stage 6 2017 syllabus](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017). The page gives no 1947 Latimer-Jolly source; acid name alone does not specify every neutralisation product or its coefficients.

**`subjects/chemistry/year12/module6/lesson15.sa.html`**

- Old: `In 2015, the Australian Therapeutic Goods Administration (TGA) investigated a pharmaceutical quality failure in which a batch of ammonium-based antacid tablets was approved at 112% stated purity`
- New: `Consider a quality-control example in which the wrong indicator leads to an incorrect purity estimate`
- Old: `In 2015, a TGA quality control investigation found that using methyl orange for a weak acid/strong base titration caused the endpoint to be recorded 8 pH units too early, and a batch of antacid tablets was approved at 112% purity.`
- New: `Suppose a student uses methyl orange for a weak-acid/strong-base titration. Its colour change may occur before the equivalence region, giving a titre that is too small.`
- Old: `Recall the 2015 TGA investigation: methyl orange (pKa 3.46) used for a weak acid/strong base titration with EP pH 9.2, the endpoint was recorded 8 pH units too early.`
- New: `In the worked example, methyl orange changes colour before the weak-acid/strong-base equivalence region, so the titre is too small.`
- Source: [TGA market-action database description](https://www.tga.gov.au/safety/recalls-and-other-market-actions/database-recalls-product-alerts-and-product-corrections-drac/database-recalls-product-alerts-and-product-corrections-drac-questions-and-answers) and [OpenStax, titration indicators](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-7-acid-base-titrations). No matching 2015 TGA case was found in the source check. The specific 112% purity result also does not follow from a pH difference alone.

**`subjects/chemistry/year12/module6/lesson16.sa.html`**

- Old: `In 2003, AstraZeneca's analytical chemistry team used titration curve analysis to confirm the pK<sub>a</sub> of the drug candidate rosuvastatin as 4.58`
- New: `A weak-acid titration curve can show pK<sub>a</sub> at the half-equivalence volume`
- Old: `In 2003, AstraZeneca's analytical team read rosuvastatin's pKa = 4.58 directly from a titration curve's half-equivalence point, no separate calculation needed.`
- New: `For a simple weak-acid/strong-base titration, the pH at half-equivalence equals pKa.`
- Old: `AstraZeneca's 2003 rosuvastatin pKa measurement`
- New: `the half-equivalence pKa method`
- Source: [OpenStax, acid-base titrations](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-7-acid-base-titrations). The checked source supports the method, but no primary AstraZeneca analysis matching the page's year, value and indicator claim was located. Remove the attribution in the conceptual-first and closing cards too.

**`subjects/chemistry/year12/module6/lesson18.sa.html`**

- Old: `In 2020, the Therapeutic Goods Administration (TGA) in Australia conducted a post-market surveillance audit of 12 calcium carbonate antacid brands and found that 3 of them contained between 85% and 94% of the stated CaCO₃ amount.`
- New: `Suppose a laboratory must measure the calcium carbonate content of an antacid tablet.`
- Old: `In 2020, TGA's audit of 12 antacid brands found 3 contained only 85–94% of stated CaCO₃, all using direct titration.`
- New: `A calcium carbonate tablet dissolves slowly in water. How can back titration measure its content?`
- Old: `In the 2020 TGA audit methodology review, these two errors were identified as the primary sources of discrepancy in antacid CaCO₃ assays.`
- New: `These two errors would give the wrong calcium carbonate amount in the worked assay.`
- Old: `Recall the 2020 TGA audit: 3 of 12 antacid brands contained only 85–94% of stated CaCO₃, because direct titration is unreliable for CaCO₃ (slow dissolution, CO₂ endpoint interference).`
- New: `Recall the calcium carbonate back-titration example. The excess acid reacts with the tablet; titrating the acid left over lets you calculate how much acid the carbonate consumed.`
- Source: [TGA market-action database description](https://www.tga.gov.au/safety/recalls-and-other-market-actions/database-recalls-product-alerts-and-product-corrections-drac/database-recalls-product-alerts-and-product-corrections-drac-questions-and-answers) and [OpenStax, titration methods](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-7-acid-base-titrations). No matching 2020 TGA audit or methodology review was located in the checked primary records.

**`subjects/chemistry/year12/module6/lesson17.sa.html`**

- Old: `The only criterion is whether the indicator's transition range encompasses the EP pH.`
- New: `Choose an indicator whose colour change occurs within the steep pH change around the equivalence point.`
- Source: [OpenStax, acid-base titrations](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-7-acid-base-titrations). L15 repeatedly teaches a range-encompasses-EP rule, including its copy key and two-step template. Those passages and associated question feedback need a coordinated revision; changing this one L17 sentence alone will leave the page inconsistent.

## Matching lesson review JSON findings

I read the 78 Chemistry and 58 Biology multiple-choice questions, plus 9 Chemistry and 20 Biology short-answer model answers and criteria, in the matching `lessonNN.review.json` files. The following exact text occurs in the named JSON file. These are separate assessment fixes; update each explanation together with its answer choices.

**`subjects/chemistry/year12/module6/lesson03.review.json`**, question `chem-y12-m6-l03-mc-003`

- Old: `"−57.0 kJ mol⁻¹",` (option at index 1)
- New: `"+57.0 kJ mol⁻¹",` (option at index 1)
- Source: [OpenStax, calorimetry](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry). `50 × 4.18 × 13.6 / 0.0500 = 56.85 kJ mol⁻¹`; the exothermic sign gives about `−57.0`. Options 2 and 4 in the old array are identical correct answers.

**`subjects/chemistry/year12/module6/lesson07.review.json`**, question `chem-y12-m6-l07-mc-002`

- Old: `"HCl / Cl⁻"` (option at index 3)
- New: `"HCl / SO₄²⁻"` (option at index 3)
- Old: `(HCl / Cl⁻ does differ by one proton, but the intended single best answer is the HSO₄⁻ / SO₄²⁻ pair drawn from the same polyprotic series.)`
- New: `HCl / SO₄²⁻ is not a conjugate pair because its formulas differ by more than one proton and their other atoms differ.`
- Source: [OpenStax, Brønsted-Lowry conjugate pairs](https://openstax.org/books/chemistry-2e/pages/14-1-bronsted-lowry-acids-and-bases). Both `HSO₄⁻ / SO₄²⁻` and `HCl / Cl⁻` are valid conjugate pairs, so the old question has two correct options.

**`subjects/chemistry/year12/module6/lesson04.review.json`**, question `chem-y12-m6-l04-mc-005`

- Old: `Baking soda for bee stings`
- New: `Baking soda reacting with vinegar`
- Old: `baking soda (weak base) neutralises bee venom (acidic)`
- New: `baking soda reacts with the acetic acid in vinegar`
- Source: [NHS insect bites and stings guidance](https://www.nhs.uk/conditions/insect-bites-and-stings/) advises against bicarbonate home remedies for stings. [OpenStax, acid-base reactions](https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions) supports the replacement chemical example. Avoid teaching a dubious first-aid claim as a neutralisation application.

**`subjects/chemistry/year12/module6/lesson10.review.json`**, questions `chem-y12-m6-l10-mc-002` and `-003`

- Old: `Every other option contains a weak acid or a weak base, whose partial ionisation absorbs energy and makes the value less exothermic.`
- New: `The other options contain a weak acid or weak base. Their overall neutralisation enthalpies include other energy changes, so do not infer a numerical ranking from acid or base strength alone.`
- Old: `The intrinsic H⁺ + OH⁻ → H₂O reaction always releases ~57 kJ/mol, but the overall measured ΔH is less exothermic for weak acids.`
- New: `The H⁺ + OH⁻ → H₂O step is close to −57 kJ/mol under comparable dilute conditions. The overall enthalpy for a weak acid also depends on its ionisation enthalpy, which Ka alone does not determine.`
- Source: [OpenStax, free energy and equilibrium](https://openstax.org/books/chemistry/pages/16-4-free-energy). The old blanket ranking repeats the page's unsupported use of dissociation strength to infer enthalpy.

**`subjects/biology/year12/module6/lesson10.review.json`**, question `bio-y12-m6-l10-mc-003`

- Old: `GM crops can be engineered for drought tolerance, pest resistance (reducing pesticide use), and nitrogen fixation. These traits reduce agricultural inputs and environmental damage compared to conventional farming.`
- New: `Some engineered crop traits can reduce particular inputs in suitable conditions. For example, insect resistance may reduce some insecticide use. Environmental outcomes depend on the crop, trait, local pests and farming practices; nitrogen-fixing cereal crops remain a research aim.`
- Source: [National Academies, Genetically Engineered Crops](https://nap.nationalacademies.org/catalog/23395/genetically-engineered-crops-experiences-and-prospects) reviews outcome variation; [UK government, Engineering Biology Aspirations report](https://assets.publishing.service.gov.uk/media/680b598cfaff81833fcae899/Engineering_Biology_Aspirations_report_PDF.pdf) presents nitrogen-fixing cereals as a future engineering aspiration. The question's chosen option can stay as a potential application, but its explanation must remain conditional.

**`subjects/chemistry/year12/module6/lesson03.review.json`**, short-answer question `chem-y12-m6-l03-sa-004`

- Old: `so it neutralises the acid gradually and cannot overshoot to make the stomach dangerously alkaline.`
- New: `so it usually neutralises acid more gradually than highly soluble NaOH. The dose still matters; do not claim an antacid cannot raise pH too far.`
- Old: `so acid is neutralised gradually and the stomach cannot be made dangerously alkaline.`
- New: `so acid is neutralised gradually; the dose and resulting pH still need appropriate control.`
- Source: [OpenStax, solubility equilibria](https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution) and [NHS, antacid dosing](https://www.nhs.uk/medicines/antacids/). Low solubility limits the dissolved hydroxide concentration, but it does not make the final pH independent of dose; clinical guidance still gives doses and addresses excess intake.

**`subjects/biology/year12/module6/lesson16.review.json`**, short-answer question `bio-y12-m6-l16-sa-005`

- Old: `Human insulin gene is identified and cut from DNA using restriction enzymes. (1 mark)`
- New: `An intron-free DNA sequence encoding insulin is obtained, for example by making cDNA from processed mRNA or by DNA synthesis. (1 mark)`
- Old: `Restriction enzyme cuts human gene`
- New: `Obtains intron-free insulin coding DNA`
- Source: [Original synthetic insulin-gene construction](https://pubmed.ncbi.nlm.nih.gov/282602/) and [original bacterial expression report](https://pubmed.ncbi.nlm.nih.gov/85300/). The answer's direct cut from human genomic DNA would carry introns that bacteria cannot splice; the original insulin demonstration used synthetic DNA for the A and B chains. Coordinate this assessment fix with the L16 page correction above.

## Further source-attribution corrections

**`subjects/chemistry/year12/module6/lesson08.sa.html`**

- Old: `In 1966, Danish physiologist Poul Astrup published data showing that mountaineers at 7,500 m have blood pH readings of up to 7.62 during a summit push`
- New: `A rise in blood pH from 7.45 to 7.62 can illustrate the logarithmic pH scale`
- Old: `In 1966, Poul Astrup measured blood pH of 7.62 in mountaineers hyperventilating at 7,500 m`
- New: `Suppose a blood sample changes from pH 7.45 to 7.62`
- Source: [OpenStax, pH and pOH](https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh). The proportional change is `1 − 10⁻⁰·¹⁷ = 0.324`, about 32%, but the named Astrup mountain measurement was not found in the source search. Do not present the invented scenario and severe clinical outcomes as a documented study.

**`subjects/chemistry/year12/module6/lesson12.sa.html`**

- Old: `In 2014, the British Dental Association reported that 46% of 15-year-olds in the UK showed visible tooth enamel erosion, and cola was the primary culprit.`
- New: `A 2013 survey found that 46% of 15-year-olds in England, Wales and Northern Ireland had obvious experience of tooth decay. That figure does not measure enamel erosion or identify cola as its primary cause.`
- Old: `In 2014, the British Dental Association reported 46% of 15-year-olds had tooth enamel erosion, mainly from cola.`
- New: `The 2013 child dental survey reported obvious tooth decay in 46% of 15-year-olds. It did not attribute that figure to cola or enamel erosion.`
- Old: `In 2014, the British Dental Association surveyed 15-year-olds and found 46% had enamel erosion. The culprit: cola drinks at pH 3.0–3.5`
- New: `The 2013 NHS child dental survey measured tooth decay, not enamel erosion. For a separate acid-strength example, compare the given acid constants, then consider measured drink pH and exposure when discussing enamel.`
- Source: [NHS Digital, Child Dental Health Survey 2013](https://digital.nhs.uk/data-and-information/publications/statistical/children-s-dental-health-survey/child-dental-health-survey-2013-england-wales-and-northern-ireland) reports 46% with obvious decay experience. [UK government, tooth wear](https://www.gov.uk/government/publications/delivering-better-oral-health-an-evidence-based-toolkit-for-prevention/chapter-7-tooth-wear) separates erosion from decay and discusses drink acidity, saliva and exposure. The `17,000×` Ka comparison is numerically sound (`7.5 × 10⁻³ / 4.3 × 10⁻⁷ ≈ 17,442`), but Ka alone does not quantify drink damage.

**`subjects/biology/year12/module6/lesson17.sa.html`**

- Old: `WHO convened its International Commission on Human Germline Genome Editing in response.`
- New: `WHO established a separate expert advisory committee on governance of human genome editing. The international commission on clinical use of heritable editing was convened by the US National Academies and the UK's Royal Society.`
- Old: `WHO convened its International Commission on Human Germline Genome Editing.`
- New: `WHO established an expert advisory committee on genome-editing governance. A separate international commission was convened by the US and UK academies.`
- Source: [WHO's 2019 committee report](https://www.who.int/publications/i/item/WHO-SCI-RFH-2019-01) and [National Academies, International Commission](https://www.nationalacademies.org/our-work/international-commission-on-the-clinical-use-of-human-germline-genome-editing). The old text conflates two different groups.

**`subjects/biology/year12/module6/lesson18.sa.html`**

- Old: `By 2019-53 years later, CGIAR's 'Food and Land Use' report could look back and confirm both the achievement (tripled yields, ~1 billion lives saved) and the cost (70% of global freshwater to irrigation, 60% of global N₂O from synthetic fertiliser).`
- New: `Decades after high-yield wheat varieties spread, their effects must be assessed alongside wider changes in farming. Agriculture currently accounts for about 70% of global freshwater withdrawals, but that global share cannot be assigned as the cost of one wheat-breeding programme. Verify any claimed yield, lives-saved or nitrous-oxide figure against its original study before using it.`
- Source: [FAO, water and agriculture](https://www.fao.org/one-health/areas-of-work/water/) gives the 70% figure for all agriculture. The cited CGIAR title and Borlaug-specific attribution were not located in primary records checked. The page bundles global sector-wide resource use with a single programme without an attribution method.

**`subjects/biology/year12/module6/lesson08.sa.html`**

- Old: `Humans had already used fermentation long before its mechanism was understood; archaeological evidence from Shubayqa 1 includes bread-like remains about 14,400 years old.`
- New: `Humans used fermentation long before understanding yeast. Separately, bread-like remains from Shubayqa 1 date to about 14,400 years ago, but those remains do not demonstrate that the bread was leavened or fermented.`
- Old: `Pasteur's 1857 experiment placed yeast in a sealed flask with glucose and observed ethanol and CO₂ production, proving that a living organism was performing the conversion humans had exploited for bread and wine for millennia.`
- New: `Pasteur's fermentation research linked yeast activity to alcoholic fermentation. Yeast in bread dough produces CO₂ that can raise the dough; yeast in brewing produces ethanol and CO₂.`
- Source: [Original Shubayqa 1 bread study](https://pmc.ncbi.nlm.nih.gov/articles/PMC6077754/) identifies bread-like products, not yeast or leavening. [Institut Pasteur's fermentation history](https://www.pasteur.fr/fr/nous-connaitre/premiere-epoque-1847-1862) supports the broad historical contribution, but does not support the page's exact sealed-flask protocol.

**`subjects/biology/year12/module6/lesson05.sa.html`**

- Old: `The US Supreme Court unanimously ruled in 2013 that human genes cannot be patented, opening access to testing.`
- New: `In 2013, the US Supreme Court ruled that a naturally occurring DNA segment is not patent eligible merely because it has been isolated; synthetic cDNA can be patent eligible. The decision changed the legal position of isolated BRCA DNA.`
- Old: `Women with a BRCA1 germline mutation carry a 70% lifetime breast cancer risk.`
- New: `Breast cancer risk varies with the BRCA1 variant and family history. Angelina Jolie said her doctors estimated her personal lifetime risk at 87%.`
- Old: `to reduce her 70% lifetime breast cancer risk.`
- New: `to reduce her personally estimated 87% lifetime breast cancer risk.`
- Old: `linked to a 70% lifetime breast cancer risk`
- New: `linked to elevated lifetime breast cancer risk, with the estimate varying between individuals`
- Source: [US Supreme Court, Association for Molecular Pathology v. Myriad Genetics](https://www.supremecourt.gov/opinions/boundvolumes/569bv.pdf) states the natural-DNA/cDNA distinction; [Jolie's first-person account](https://time.com/5709290/angelina-jolie-cancer-research-prevention/) gives 87% for her own estimate. The [1990 linkage paper](https://pubmed.ncbi.nlm.nih.gov/2270482/) supports the chromosome 17q history. The [original 64% testing study](https://pmc.ncbi.nlm.nih.gov/articles/PMC5156611/) examined a US commercially insured population during the 15 days after her disclosure; if retaining that figure, include its population and window.

**`subjects/biology/year12/module6/worksheets/lesson19-worksheet-03.html`**

- Old: `Grant and Grant measured the spontaneous mutation rate in <em>Geospiza</em> beak genes and calculated that, without this ongoing low-level input, standing variation would be exhausted within roughly 200–400 generations as selection drew it down`
- New: `Grant and Grant documented changes in finch beak traits over time. Their cited study does not measure a beak-gene mutation rate or calculate a fixed time to exhaust standing variation`
- Source: [Grant and Grant, 2002 original paper record](https://pubmed.ncbi.nlm.nih.gov/11976447/). This answer key repeats the unsupported attribution recorded for the L19 HTML page.

**`subjects/chemistry/year12/module6/worksheets/lesson06-worksheet-02.html`**

- Old: `so to reach pH 3.0, acetic acid would need a concentration well below 0.001 mol/L (read from the graph, approximately &lt;0.0001 mol/L is needed).`
- New: `so to reach pH 3.0, acetic acid needs a concentration above 0.001 mol/L. With Ka = 1.8 × 10⁻⁵, [H⁺] = 0.001 mol/L requires c ≈ 0.001 + (0.001)²/(1.8 × 10⁻⁵) = 0.0566 mol/L.`
- Old: `CH&#8323;COOH actually needs an even lower starting concentration combined with a relatively higher fractional ionisation at that dilution`
- New: `CH&#8323;COOH needs a higher starting concentration because only some molecules ionise; the fraction ionised increases on dilution, but the absolute [H⁺] still falls`
- Old: `acetic acid needs lower, not higher, concentration for same pH at very dilute range`
- New: `acetic acid needs higher concentration than HCl for the same pH in this comparison`
- Source: [OpenStax, weak-acid equilibrium](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases). Rearranging `Ka = x²/(c − x)` gives `c = x + x²/Ka`; setting `x = 10⁻³` gives `0.0566 mol/L`. The worksheet's model answer and marking note reverse the direction and would penalise a correct answer.

**`subjects/chemistry/year12/module6/worksheets/lesson03-worksheet-02.html`**

- Old: `(closer to theoretical &minus;57 kJ/mol; remaining gap due to other systematic errors)`
- New: `(farther from the &minus;57 kJ/mol reference than the uncorrected result; recheck the extrapolation and measurement uncertainty)`
- Source: [OpenStax, calorimetry](https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry). Using the measured `ΔT = 6.3°C` gives `−52.7 kJ/mol`, 4.3 from `−57`; the extrapolated `ΔT = 7.4°C` gives `−61.9`, 4.9 from `−57`. The parenthetical comparison is arithmetically reversed.

**`subjects/chemistry/year12/module6/worksheets/lesson13-worksheet-02.html`**

- Old: `The buffer pH decreases gradually and almost linearly from pH 4.74 to approximately pH 4.60 as HCl is added from 0 to 0.010 mol`
- New: `The buffer pH falls as HCl consumes acetate. With 0.010 mol acetate initially, adding 0.010 mol HCl exhausts the conjugate base, so the buffer is no longer near pH 4.60 at that endpoint.`
- Source: [OpenStax, buffers](https://openstax.org/books/chemistry-2e/pages/14-6-buffers). The worksheet's own Q1.3 says the initial `0.100 mol/L × 0.100 L = 0.010 mol` acetate is entirely consumed at `0.010 mol` HCl. Henderson-Hasselbalch cannot remain near pH 4.60 when the acetate numerator reaches zero. Recompute and redraw the Q1 graph and its sample answer together.

**`subjects/chemistry/year12/module6/worksheets/lesson16-worksheet-02.html`**

- Old: `The first EP pH is 8.8 (above 7).`
- New: `First stoichiometric equivalence (25 mL, pH about 3.69); second equivalence (50 mL, pH about 8.46)`
- Old: `The first EP pH is 8.8 (above 7). Explain why this confirms that tartaric acid is a weak acid, not a strong acid.`
- New: `Tartaric acid is diprotic. Explain why the hydrogen tartrate present after one equivalent of NaOH can still donate a proton, so the first-equivalence solution remains acidic.`
- Old: `Phenolphthalein (range 8.3&ndash;10.0) is appropriate. The first EP pH = 8.8, which falls within phenolphthalein&rsquo;s transition range.`
- New: `Do not use phenolphthalein to mark the first equivalence of tartaric acid. It changes near the second equivalence region; use a pH probe to analyse the overlapping diprotic stages.`
- Source: [IUPAC digitized dissociation constants](https://github.com/IUPAC/Dissociation-Constants) and [OpenStax, polyprotic acids](https://openstax.org/books/chemistry-2e/pages/14-5-polyprotic-acids). Tartaric acid has pKa values near 3.04 and 4.37. Recomputing charge balance for the worksheet's `0.00250 mol` acid and `0.1000 mol/L` NaOH gives pH about 3.69 at 25 mL and 8.46 at 50 mL. The graph, alt text, Q1.1, Q1.3, Q1.4 and key must be redrawn together. Its first-EP pH 8.8 and phenolphthalein answer are scientifically incompatible with the named diprotic acid.

**`subjects/biology/year12/module6/worksheets/lesson07-worksheet-02.html`**

- Old: `<td>0.20</td><td>One survivor heterozygous for <em>m</em> by chance</td>`
- New: `<td>0.20</td><td>Eight of the 40 allele copies among 20 survivors are <em>m</em>, by chance</td>`
- Old: `specifically the <strong>founder effect</strong> [1], a small group (~20 survivors) re-established the population`
- New: `specifically the <strong>bottleneck effect</strong> [1], because a typhoon left only about 20 survivors from the original atoll population`
- Old: `By chance, one survivor happened to be heterozygous for <em>m</em>, contributing 1 copy out of 40, but a small population means that one carrier represents a much larger proportion of the gene pool (≈ 0.20 rather than ≈ 0.02) [1].`
- New: `By chance, the 20 survivors carried eight copies of <em>m</em> among 40 copies at this diploid locus. The post-typhoon frequency is therefore 8/40 = 0.20 [1].`
- Source: [OpenStax, population genetics](https://openstax.org/books/biology-2e/pages/19-2-population-genetics). A random disaster that leaves a small survivor sample is a bottleneck. For 20 diploid survivors, a single heterozygote gives `1/40 = 0.025`, not `0.20`; eight copies are needed for the stated frequency. Correct the stimulus and both marking statements together.

**`subjects/chemistry/year12/module6/worksheets/lesson02-worksheet-04.html`**

- Old: `(c) Nitric acid reacting with zinc metal.`
- New: `(c) Hydrochloric acid reacting with zinc metal.`
- Old: `Zn + 2HNO&sub3; &rarr; Zn(NO&sub3;)&sub2; + H&sub2;. [2 marks: 1 for correct salt Zn(NO&sub3;)&sub2; with H&sub2; product, 1 for balanced equation.]`
- New: `Zn + 2HCl &rarr; ZnCl&sub2; + H&sub2;. [2 marks: 1 for correct salt ZnCl&sub2; with H&sub2; product, 1 for balanced equation.]`
- Source: [OpenStax, zinc and oxidising acids](https://openstax.org/books/chemistry-2e/pages/18-1-periodicity). Zinc with HCl gives hydrogen gas. Nitric acid is also an oxidising agent, so the current nitric-acid question cannot guarantee hydrogen gas without conditions; switch to HCl for this basic acid-plus-metal pattern.

**`subjects/chemistry/year12/module6/worksheets/lesson04-worksheet-04.html`**

- Old: `In Br&oslash;nsted&ndash;Lowry terms, SO&#x2082; is the proton-accepting species (or the acid when considered via the H&#x2082;SO&#x2083; it would form); Ca(OH)&#x2082; supplies the OH&#x207B; to complete the neutralisation.`
- New: `SO&#x2082; is an acidic oxide, not a Br&oslash;nsted&ndash;Lowry proton donor or acceptor in the displayed net reaction. In water, it forms an acidic solution that the calcium hydroxide neutralises.`
- Source: [OpenStax, acid-base models](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-1-bronsted-lowry-acids-and-bases). Brønsted-Lowry classification requires an actual proton transfer; the displayed `Ca(OH)₂ + SO₂ → CaSO₃ + H₂O` does not make SO₂ a proton acceptor.

**`subjects/chemistry/year12/module6/worksheets/lesson06-worksheet-04.html`**

- Old: `HCN, conductivity near zero, pH barely below 7 = very high Ka`
- New: `HCN, conductivity near zero and relatively high pH = very low Ka`
- Source: [OpenStax, relative acid strengths](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases). The key's rank order already puts HCN last; its parenthetical reverses the meaning of Ka.

**`subjects/chemistry/year12/module6/worksheets/lesson08-worksheet-04.html`**

- Old: `Dilute diprotic strong acid; [H&#8314;] = 2 &times; 0.015 = 0.030 mol/L. pH = &minus;log(0.030) = &minus;log(3.0 &times; 10<sup>&minus;2</sup>) = 2 &minus; log(3.0) = 2 &minus; 0.477 = <b>1.52</b>.`
- New: `The first ionisation is complete, giving 0.015 mol/L H&#8314; and HSO&#8324;&#8315;. The second is partial: Ka&#8322; = 0.012 = (0.015 + x)x/(0.015 &minus; x), giving x ≈ 0.00553 mol/L. Therefore [H&#8314;] ≈ 0.02053 mol/L and pH ≈ <b>1.69</b>.`
- Source: [OpenStax, polyprotic acids](https://openstax.org/books/chemistry-2e/pages/14-5-polyprotic-acids) gives sulfuric acid's second dissociation constant as `1.2 × 10⁻²`. The key treats both protons as completely ionised and gives a pH 0.17 too low.

**`subjects/chemistry/year12/module6/worksheets/lesson09-worksheet-04.html`**

- Old: `When K<sub>a</sub>/c = 0.04, &radic;(0.04) = 0.20 = 20% degree of ionisation`
- New: `When K<sub>a</sub>/c = 0.04, the square-root estimate gives 20% ionisation, which is too large for the simplifying assumption. Solving α²/(1 &minus; α) = 0.04 gives the actual degree of ionisation about 18.1%`
- Old: `The error in [H<sup>+</sup>] would be ~20%`
- New: `The simplified [H<sup>+</sup>] would be about 10.5% above the exact value`
- Source: [OpenStax, weak-acid equilibrium](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases). The key uses the approximation after demonstrating that the approximation is invalid. Exact `α = (√0.1616 − 0.04)/2 = 0.181`; `0.20/0.181 − 1 ≈ 10.5%`.

**`subjects/chemistry/year12/module6/worksheets/lesson19-worksheet-04.html`**

- Old: `records a voltage of −214 mV.`
- New: `records a voltage of −60 mV.`
- Old: `pH = 4.00 + (−155 − (−214))/59.0 = 4.00 + 59/59.0 = 4.00 + 1.00 = pH 5.00.`
- New: `pH = 4.00 + (−155 − (−60))/59.0 = 4.00 − 95/59.0 ≈ 2.39.`
- Old: `c ≈ [H⁺]²/Ka = (1.00 × 10⁻⁵)²/(1.8 × 10⁻⁵) = 1.00 × 10⁻¹⁰/1.8 × 10⁻⁵ = 5.6 × 10⁻⁶ mol/L. This value appears unrealistically low for vinegar (expected ~0.8–1.0 mol/L); this illustrates the unreliability of the Ka method at pH 5.00 which is far from a typical vinegar pH.`
- New: `At pH 2.39, [H⁺] ≈ 4.07 × 10⁻³ mol/L. The exact weak-acid rearrangement gives c = [H⁺] + [H⁺]²/Ka ≈ 0.00407 + 0.923 = 0.927 mol/L, close to the titration result 0.930 mol/L. Discuss measurement uncertainty separately; the methods now examine the same plausible vinegar sample.`
- Source: [OpenStax, weak-acid equilibrium](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases). The existing pH 5.00 and `Ka = 1.8 × 10⁻⁵` imply `c = x + x²/Ka = 1.56 × 10⁻⁵ mol/L`, not the key's `5.6 × 10⁻⁶ mol/L`, because its simplifying assumption fails. Both are incompatible with its `0.930 mol/L` titration. The revised voltage and exact calculation give consistent results. Update the question, answer and marking expectations together.

**`subjects/chemistry/year12/module6/worksheets/lesson17-worksheet-04.html`**

- Old: `The equivalence point pH is approximately 9.3.`
- New: `Using the stated pKa2 and the concentration after dilution at full neutralisation, estimate the equivalence-point pH before judging the indicator.`
- Old: `Step 1: EP pH &#8776; 9.3, above 7 because tartrate ion`
- New: `Step 1: EP pH is about 8.22, above 7 because tartrate ion`
- Old: `Step 3: EP pH 9.3 falls within phenolphthalein&rsquo;s range (8.3&ndash;10.0); the indicator transitions within the sharp pH jump at equivalence, giving an accurate endpoint.`
- New: `Step 3: The calculated EP pH is about 8.22, just below phenolphthalein&rsquo;s transition range (8.3&ndash;10.0). Its suitability depends on how sharply pH rises through that range; use a pH probe or a plotted titration curve to check the endpoint error.`
- Source: [OpenStax, polyprotic acids and conjugate-base hydrolysis](https://openstax.org/books/chemistry-2e/pages/14-5-polyprotic-acids). From the worksheet's titre, `n(tartrate) = 4.855 × 10⁻⁴ mol`, total volume `39.42 mL`, so tartrate concentration is `0.01232 mol/L`. Its stated `pKa2 = 4.34` gives `Kb = 2.19 × 10⁻¹⁰`, `[OH⁻] ≈ 1.64 × 10⁻⁶ mol/L`, and pH about `8.22`, not `9.3`. The wine matrix also contains other titratable acids, so any actual wine result should be labelled tartaric-acid equivalents unless selectivity is established.

**`subjects/chemistry/year12/module6/worksheets/lesson11-worksheet-04.html`**

- Old: `The solution is neutral: [H&sup1;&ordm;] = [OH&sup1;&macr;] = 1.00 &times; 10<sup>&minus;7</sup>&nbsp;mol/L. <b>pH = 7.00.</b>`
- New: `The equivalence solution contains sulfate, the weak conjugate base of HSO&#8324;&#8315;. In an ideal 25°C calculation it is slightly basic, about pH 7.30; pH 7 is a rough classroom approximation, not an exact value.`
- Old: `1 for pH = 7.00 with correct reasoning (strong acid/strong base equivalence point)`
- New: `1 for identifying sulfate hydrolysis and a slightly basic equivalence solution; accept pH near 7 as a stated approximation`
- Source: [OpenStax, polyprotic acids](https://openstax.org/books/chemistry-2e/pages/14-5-polyprotic-acids) gives `Ka₂(HSO₄⁻) = 0.012`. Here `[SO₄²⁻] ≈ 0.00300/0.0850 = 0.0353 mol/L`, `Kb = Kw/Ka₂ = 8.33 × 10⁻¹³`, and including water's OH⁻ gives `[OH⁻] ≈ √(Kw + Kb c) = 1.98 × 10⁻⁷ mol/L`, pH about 7.30. Do not deduct credit from a student who notices hydrolysis.

**`subjects/chemistry/year12/module6/worksheets/lesson12-worksheet-04.html`**

- Old: `[H&#8314;] &asymp; &radic;(4.3 &times; 10&#8315;⁷ &times; 10&#8315;³) &asymp; 6.6 &times; 10&#8315;⁶ mol/L, giving pH &asymp; 5.2`
- New: `[H&#8314;] &asymp; &radic;(4.3 &times; 10&#8315;⁷ &times; 10&#8315;³) &asymp; 2.1 &times; 10&#8315;⁵ mol/L, giving pH &asymp; 4.68 in this simplified single-acid model`
- Old: `In summary, Ka is the predictor of dental risk: acids with larger Ka values ionise more, produce higher [H&#8314;], and push mouth pH further below 5.5, causing more rapid enamel dissolution.`
- New: `Ka helps predict ionisation at a specified concentration, but erosion risk also depends on acid concentration, buffering and titratable acidity, exposure time and saliva. Compare measured beverage pH and those conditions before ranking products.`
- Old: `1 mark, uses Ka of H&#8322;CO&#8323; to explain why sparkling water has moderate risk (pH near but below 5.5)`
- New: `1 mark, calculates the stated carbonic-acid model correctly and distinguishes its assumed concentration from the measured pH of a particular sparkling water`
- Source: [OpenStax, weak-acid equilibrium](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases). `√(4.3 × 10⁻⁷ × 10⁻³) = √(4.3 × 10⁻¹⁰) = 2.07 × 10⁻⁵`, so `pH = 4.68`, not `5.2`. The stated `0.001 mol/L` is an assumption, not a measured carbonation level, and Ka alone cannot rank real beverage enamel effects.

**`subjects/chemistry/year12/module6/worksheets/lesson15-worksheet-04.html`**

- Old: `BTB's range (6.0&ndash;7.6) intersects the gradually rising section of the curve before the sharp jump, at approximately 17&ndash;18 mL NaOH.`
- New: `For the stated 0.0800 mol/L weak acid, pKa about 4.8, and 0.100 mol/L NaOH, BTB's pH 6.0&ndash;7.6 range corresponds to about 18.81&ndash;19.97 mL, close to the 20.00 mL equivalence.`
- Old: `Using BTB, the student would observe a colour change at &#x2248;17&ndash;18 mL, recording an endpoint 2&ndash;3 mL before the true equivalence point (20.00 mL). The calculated concentration of the weak acid would be underestimated.`
- New: `BTB begins its transition before equivalence, but its high-pH colour develops near 19.97 mL in this model. A 2&ndash;3 mL early endpoint is not supported. Recalculate the full pH curve and compare an observed endpoint with equivalence before assigning a concentration error.`
- Source: [OpenStax, acid-base titrations](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-7-acid-base-titrations). Before equivalence, `pH = 4.8 + log(V/(20 − V))` for added NaOH volume V in mL. At V = 17 and 18 mL, pH is about 5.55 and 5.75, below BTB's pH 6.0 lower limit. Solving for pH 6.0 and 7.6 gives 18.81 and 19.97 mL. The plotted curve, answer and marking note need to agree with the given Ka and concentrations.

**`subjects/chemistry/year12/module6/worksheets/lesson13-worksheet-04.html`**

- Old: `The dominant buffering pair at ocean pH (~8.1) is H&#x2082;CO&#x2083;/HCO&#x2083;&#x207B;`
- New: `At ocean pH near 8.1, bicarbonate and carbonate are the major dissolved inorganic carbon ions. Added H&#x207A; converts carbonate to bicarbonate, while dissolved CO&#x2082; and bicarbonate also remain linked by equilibrium`
- Old: `At the GBR, AIMS monitoring data show ocean pH has fallen from 8.18 (1980s) to 8.03 (2010s)`
- New: `Long-term ocean observations show a global surface-ocean pH decline; use a dated, site-specific GBR series only after matching its monitoring dataset and pH scale`
- Old: `At pH below 7.9, aragonite (the CaCO&#x2083; polymorph corals use) becomes undersaturated and net dissolution exceeds deposition, preventing reef growth and causing structural collapse.`
- New: `Lower pH generally reduces carbonate availability and aragonite saturation, making calcification harder. Undersaturation is defined by Ωarag &lt; 1 and depends on carbonate, calcium, temperature, pressure and salinity; no universal pH 7.9 threshold establishes reef collapse.`
- Source: [NOAA, ocean acidification](https://oceanacidification.noaa.gov/what-is-ocean-acidification/) describes carbonate consuming added hydrogen ions; [NOAA seawater carbonate calculation](https://www.ncei.noaa.gov/access/ocean-carbon-acidification-data-system/oceans/co2rprt.html) defines aragonite saturation as `[CO₃²⁻][Ca²⁺]/Ksp` and its dependence on water conditions. [AIMS monitoring overview](https://www.aims.gov.au/research-topics/monitoring-and-discovery/monitoring-great-barrier-reef/long-term-monitoring-program) does not support the quoted 1980s/2010s pH series. A single pH cutoff cannot determine Ωarag or ecological collapse.

**`subjects/chemistry/year12/module6/bank.json`** (item `chem-y12-m6-ph2-q0812`)

- Old: `Solution 2: H₂SO₄ is diprotic, [H₃O⁺] = 2 × 0.050 = 0.100 mol/L, pH = -log(0.100) = 1.00.`
- New: `Solution 2: the first H₂SO₄ proton dissociates completely, while HSO₄⁻ dissociates partially. With Ka₂ = 0.012, (0.050 + x)x/(0.050 − x) = 0.012 gives x ≈ 0.00851 mol/L, [H₃O⁺] ≈ 0.05851 mol/L and pH ≈ 1.23.`
- Old: `H₂SO₄ donates 2 H⁺ per formula unit, giving [H₃O⁺] = 0.100 mol/L`
- New: `the second H₂SO₄ proton dissociates only partly at this concentration, giving [H₃O⁺] ≈ 0.05851 mol/L`
- Source: [OpenStax, polyprotic acids](https://openstax.org/books/chemistry-2e/pages/14-5-polyprotic-acids) gives `Ka₂ = 0.012` for hydrogen sulfate. The item's pH 1.00 and 0.30-unit comparison with HCl should be recalculated, including the marking criteria. The comparison becomes about 0.07 pH units (`1.30 − 1.23`).

**`subjects/chemistry/year12/module6/bank.json`** (items `chem-y12-m6-ph1-q0803` and `chem-y12-m6-ph1-q0806`)

- Old: `pH = 1.00 (using [H<sub>3</sub>O<sup>+</sup>] = 0.10 mol/L from 2 x 0.050)`
- New: `pH ≈ 1.23 (first proton fully dissociated; second governed by Ka₂ = 0.012)`
- Old: `Dilute H2SO4 is treated as fully diprotic at HSC level: both protons are donated, so [H3O+] = 2 x c(H2SO4) = 2 x 0.050 = 0.10 mol/L.`
- New: `H₂SO₄ has two ionisable protons, but the second dissociation is incomplete. At 0.050 mol/L and Ka₂ = 0.012, [H₃O⁺] ≈ 0.05851 mol/L and pH ≈ 1.23.`
- Old: `Solution A has the lower pH because its [H<sub>3</sub>O<sup>+</sup>] = 0.060 mol/L (from 2 x 0.0300 mol/L H<sub>2</sub>SO<sub>4</sub>), compared with Solution B at [H<sub>3</sub>O<sup>+</sup>] = 0.0400 mol/L; pH(A) = 1.22 versus pH(B) = 1.40, confirming the student's prediction`
- New: `Solution A has [H₃O⁺] about 0.0373 mol/L and pH about 1.43 after partial second dissociation. Solution B has 0.0400 mol/L HCl and pH 1.40, so B is slightly more acidic.`
- Source: [OpenStax, polyprotic acids](https://openstax.org/books/chemistry-2e/pages/14-5-polyprotic-acids) gives `Ka₂ = 0.012`. At 0.050 mol/L, solve `(0.050+x)x/(0.050−x)=0.012` to obtain pH 1.23. At 0.0300 mol/L, pH is about 1.43, so the second MC item even reverses which solution is more acidic. Replace distractors and explanation together; the first item currently has no correct option.

**`subjects/chemistry/year12/module6/bank.json`** (items `chem-y12-m6-ph2-q0806` and `chem-y12-m6-ph2-q0807`)

- Old: `The resulting solution contains only Na⁺ and SO₄²⁻ (spectator ions that do not hydrolyse), so pH = 7.00.`
- New: `The stoichiometric mixture contains sodium sulfate. SO₄²⁻ hydrolyses weakly, so an ideal 25°C estimate is pH about 7.27; pH 7 is a rounded classroom approximation.`
- Old: `excess H⁺ = 2.0 × 10⁻³ mol; c(H⁺) = 2.0 × 10⁻³ / 0.050 = 0.040 mol/L; pH = 1.40`
- New: `the mixture has total sulfate 0.080 mol/L and sodium 0.120 mol/L. Solving hydrogen-sulfate equilibrium and charge balance with Ka₂ = 0.012 gives [H⁺] ≈ 0.0080 mol/L and pH ≈ 2.10`
- Source: [OpenStax, polyprotic acids](https://openstax.org/books/chemistry-2e/pages/14-5-polyprotic-acids). The first item is at the second stoichiometric equivalence, but sulfate is a weak base (`Kb = Kw/Ka₂`). The second item's `2 × n(H₂SO₄) − n(NaOH)` is a count of remaining acid equivalents, not free hydrogen-ion concentration; charge balance gives pH near 2.10. Replace MC options and explanations together; the second item has no correct option as written.

**`subjects/chemistry/year12/module6/bank.json`** (item `chem-y12-m6-ph6-q0805`)

- Old: `Excess H<sub>2</sub>SO<sub>4</sub>; [H+] = 0.0600 mol/L; pH = 1.22`
- New: `Acidic hydrogen-sulfate/sulfate mixture; [H⁺] ≈ 0.0131 mol/L; pH ≈ 1.88`
- Old: `Excess H+ = 9.00 x 10^-3 - 6.00 x 10^-3 = 3.00 x 10^-3 mol.`
- New: `The count of 3.00 × 10⁻³ mol is remaining acidic equivalents, not free H⁺; solve HSO₄⁻ dissociation after mixing.`
- Source: [OpenStax, polyprotic acids](https://openstax.org/books/chemistry-2e/pages/14-5-polyprotic-acids). After mixing, total sulfate is `0.00450/0.0500 = 0.0900 mol/L` and K⁺ is `0.00600/0.0500 = 0.120 mol/L`. Charge balance gives `[SO₄²⁻] = 0.0300 + [H⁺]` and `[HSO₄⁻] = 0.0600 − [H⁺]`; Ka₂ = 0.012 gives `[H⁺] ≈ 0.0131 mol/L`. Replace the MC options and explanation, since the calculated correct value is absent.

**`subjects/chemistry/year12/module6/bank.json`** (item `chem-y12-m6-ph6-q0810`)

- Old: `n(H+) = 2 x 0.300 x 0.0200 = 0.0120 mol.`
- New: `Neutralisation can consume up to 0.0120 mol acidic equivalents, but hydrogen sulfate's second proton is not fully dissociated before mixing.`
- Old: `Excess H+: n(excess) = 0.0120 - 0.00900 = 0.00300 mol. V(total) = 20.0 + 60.0 = 80.0 mL = 0.0800 L. [H+] = 0.00300 / 0.0800 = 0.0375 mol/L. (c) pH = -log(0.0375) = 1.43.`
- New: `After the 0.00900 mol KOH is mixed with 0.00600 mol total sulfate, the 0.0800 L solution has total sulfate 0.0750 mol/L and K⁺ 0.1125 mol/L. Using charge balance with Ka₂ = 0.012 gives [H⁺] ≈ 0.00785 mol/L and pH ≈ 2.11.`
- Source: [OpenStax, polyprotic acids](https://openstax.org/books/chemistry-2e/pages/14-5-polyprotic-acids). The simple `2 × n(H₂SO₄) − n(OH⁻)` count identifies potential neutralising equivalents, not free `[H⁺]` after mixing. For ideal concentrations, charge balance gives `[SO₄²⁻] = [H⁺] + 0.0375`, `[HSO₄⁻] = 0.0375 − [H⁺]`, and `0.012 = [H⁺][SO₄²⁻]/[HSO₄⁻]`; solve to get pH about 2.11. Rewrite criteria so a chemically correct equilibrium answer earns credit.

**`subjects/chemistry/year12/module6/bank.json`** (item `chem-y12-m6-titr5-q0804`)

- Old: `State the legal discharge pH range for industrial effluent`
- New: `For a sample NSW EPA licence that specifies pH 6.5–8.5 at its discharge point, state that permitted range`
- Old: `The legal discharge pH range for industrial effluent is pH 6.5 to pH 8.5.`
- New: `The cited example licence sets a discharge-point pH limit of 6.5 to 8.5. Industrial discharge conditions vary by licence and receiving water.`
- Source: [NSW EPA, environment protection licensing](https://www.epa.nsw.gov.au/Your-environment/Water/managing-water-pollution-in-nsw/environment-protection-licensing) states that conditions are placed on facility licences; [example licence](https://app.epa.nsw.gov.au/prpoeoapp/ViewPOEOLicence.aspx?DOCID=124554&LICID=20971&SYSUID=1) specifies 6.5–8.5 for named discharge points. The bank wrongly presents that example as a universal legal range. Update its marking criterion as well.

**`subjects/chemistry/year12/module6/bank.json`** (item `chem-y12-m6-titr6-q0812`)

- Old: `In 2018, Food Standards Australia New Zealand (FSANZ) found that 23% of commercial vinegar samples tested had acetic acid concentrations outside the required 4-8% range. Laboratories using only pH probes (without titration) were four times more likely to miss out-of-range samples.`
- New: `Australian and New Zealand food standards require food sold as vinegar or imitation vinegar to contain at least 40 g/kg acetic acid. In this hypothetical classroom comparison, some vinegar samples fall below that minimum; compare titration with a pH-probe estimate.`
- Old: `The FSANZ 2018 finding illustrates that analytical method selection has direct consequences for food safety enforcement.`
- New: `The hypothetical comparison illustrates that analytical method selection matters for estimating total acidity; it is not a reported FSANZ 2018 audit.`
- Source: [Australia New Zealand Food Standards Code, Standard 2.10.1](https://www.legislation.gov.au/F2015L00484/asmade/2015-04-02/text/original/pdf), clause 2.10.1–3, sets a minimum of `40 g/kg` acetic acid for vinegar or imitation vinegar, not a universal 4–8% range. No primary FSANZ record was located for the claimed 2018 23% audit or fourfold pH-probe failure. Remove the invented historical claim from question, model and criteria.

**`subjects/biology/year12/module6/worksheets/lesson03-worksheet-01.html`**

- Old: `A substitution alters only the single codon it sits in, so at worst it changes one amino acid (or none, if silent).`
- New: `A substitution alters one codon. It can be silent, replace one amino acid, or create a premature stop codon that shortens the protein.`
- Source: [OpenStax, DNA repair and mutations](https://openstax.org/books/biology-2e/pages/14-6-dna-repair). A nonsense substitution can stop translation early, so the key's stated upper limit on a substitution's effect is false.

**`subjects/biology/year12/module6/worksheets/lesson03-worksheet-04.html`**

- Old: `A substitution alters only the single codon it lies within, so at worst it changes one amino acid (or none, if silent).`
- New: `A substitution changes one codon without shifting the reading frame. It may be silent, replace one amino acid, or introduce a premature stop that removes the rest of the protein.`
- Source: [OpenStax, DNA repair and mutations](https://openstax.org/books/biology-2e/pages/14-6-dna-repair). This exam key repeats the same false ceiling on a substitution's impact. Keep the nonsense case in the comparison with frameshifts.

**`subjects/biology/year12/module6/worksheets/lesson12-worksheet-04.html`**

- Old: `Benefit: curative replacement of dysfunctional haemoglobin in patients.`
- New: `Benefit: edited blood stem cells increase fetal haemoglobin production, reducing sickle-cell crises in treated patients.`
- Source: [Original exa-cel sickle-cell trial](https://www.nejm.org/doi/full/10.1056/NEJMoa2309676) and [FDA product insert](https://www.fda.gov/media/174615/download?attachment=). This therapy edits a BCL11A enhancer to reactivate fetal haemoglobin; it does not replace the mutant haemoglobin gene or directly swap out its protein product. Describe observed clinical benefit without promising every patient a cure.

**`subjects/biology/year12/module6/worksheets/lesson16-worksheet-02.html`**

- Old: `The human insulin gene is isolated, and both the gene and an <em>E. coli</em> plasmid (vector) are cut using the same restriction enzyme, producing compatible sticky ends`
- New: `An intron-free human insulin coding sequence is prepared, for example by synthesis or from processed mRNA. It and an <em>E. coli</em> expression plasmid are joined using compatible DNA ends`
- Old: `The transgenic <em>E. coli</em> are grown in large fermenters, where they express the human insulin gene and secrete human insulin`
- New: `the engineered <em>E. coli</em> are grown in large fermenters, where they express an insulin precursor or insulin chains that are processed and purified`
- Source: [Original synthetic insulin-gene report](https://pubmed.ncbi.nlm.nih.gov/282602/) and [original expression report](https://pubmed.ncbi.nlm.nih.gov/85300/). The early E. coli route used synthetic DNA for insulin's A and B chains, then combined the chains. A genomic human insulin gene contains introns, and the bacterial production and processing route needs an intron-free design.

**`subjects/biology/year12/module6/bank.json`** (item `bio-m6-ms-02`)

- Old: `so it can be silent, missense or nonsense, changing at most one amino acid.`
- New: `so it can be silent, missense or nonsense. A nonsense substitution creates a premature stop and can remove many downstream amino acids.`
- Old: `so it changes at most one amino acid (silent, missense or nonsense)`
- New: `so a silent or missense outcome affects zero or one amino acid, while a nonsense outcome can truncate the protein`
- Source: [OpenStax, DNA repair and mutations](https://openstax.org/books/biology-2e/pages/14-6-dna-repair). The question bank repeats the false maximum effect found in the L03 worksheets; its model and criterion would penalise a scientifically correct nonsense explanation.

**`subjects/biology/year12/module6/bank.json`** (item `bio-y12-m6-l07-q9004`)

- Old: `The most likely explanation for Population X is genetic drift:`
- New: `Genetic drift is a plausible explanation for Population X because it is small, but this one time series does not establish drift as the most likely cause:`
- Old: `identifies genetic drift as the likely cause in X`
- New: `identifies drift as plausible in the small population and explains why selection cannot be ruled out without fitness or replicated-population evidence`
- Source: [OpenStax, population genetics](https://openstax.org/books/biology-2e/pages/19-2-population-genetics). The same model answer correctly says the allele-frequency series alone cannot distinguish drift and selection. Requiring drift as the likely cause contradicts that limitation; the monotonic rise from 0.50 to 0.94 is not by itself a fingerprint of either process.

**`subjects/biology/year12/module6/bank.json`** (item `bio-m6-gnt-3-a02`)

- Old: `yet she developed premature arthritis and lung disease and died at about half the normal lifespan.`
- New: `and lived to age six before being euthanised after a lung-disease diagnosis. Arthritis was also diagnosed; these observations alone do not establish accelerated ageing from cloning.`
- Old: `Dolly's premature health problems and short lifespan show that copying the nuclear genotype did not produce an identical phenotype.`
- New: `Dolly's health history does not by itself establish that cloning caused premature ageing. Genotype alone does not guarantee identical phenotype, and the 1-in-277 live-birth result demonstrates low efficiency.`
- Source: [Roslin Institute, Dolly's life](https://vet.ed.ac.uk/roslin/about/history/dolly/facts/life-of-dolly). Roslin reports that Dolly developed arthritis and a lung disease but states there is no evidence she aged prematurely because she was a clone. Preserve the valid low-efficiency lesson without asserting an unsupported causal link.

**`subjects/biology/year12/module6/bank.json`** (item `bio-y12-m6-l13-q0131`)

- Old: `By inserting the human insulin gene into E. coli bacteria`
- New: `By expressing synthetic DNA for human insulin's A and B chains in engineered E. coli, then joining the purified chains`
- Old: `The human insulin gene was inserted into a plasmid and transformed into E. coli. The bacteria then produced human insulin`
- New: `The original recombinant route used synthesised DNA coding for the separate human insulin A and B chains in E. coli. The chains were purified and combined to make active insulin`
- Source: [Original synthetic insulin-gene report](https://pubmed.ncbi.nlm.nih.gov/282602/) and [original expression report](https://pubmed.ncbi.nlm.nih.gov/85300/). The question asks how insulin was first made using recombinant DNA, so its current generic single-gene description gives the wrong historical process.

**`subjects/biology/year12/module6/worksheets/lesson16-worksheet-03.html`**

- Old: `The human insulin gene is cut from human donor DNA with a restriction enzyme; the same enzyme cuts an <em>E. coli</em> plasmid.`
- New: `An intron-free insulin coding sequence is prepared and joined to a bacterial expression plasmid. The original Genentech method synthesised DNA for the separate human insulin A and B chains.`
- Old: `A restriction enzyme cuts the human insulin gene out of human donor DNA at a specific recognition sequence, and the same enzyme cuts an <em>E. coli</em> plasmid vector`
- New: `The desired intron-free insulin coding DNA is prepared, and the vector is opened for insertion`
- Source: [Original synthetic insulin-gene report](https://pubmed.ncbi.nlm.nih.gov/282602/) and [original expression report](https://pubmed.ncbi.nlm.nih.gov/85300/). The worksheet's named historical example cannot use direct excision of a genomic human insulin gene for expression in bacteria. Update its diagram and Step 1 marking note with the answer.

**`subjects/biology/year12/module6/worksheets/lesson17-worksheet-04.html`**

- Old: `The human insulin gene is isolated and inserted into a bacterial plasmid using restriction enzymes and DNA ligase`
- New: `An intron-free human insulin coding sequence is prepared and inserted into a bacterial expression plasmid with suitable DNA joining steps`
- Source: [Original synthetic insulin-gene report](https://pubmed.ncbi.nlm.nih.gov/282602/). Specify an intron-free coding route rather than imply that a genomic human gene can simply be cut out and expressed in E. coli.

## Linked boss-battle question banks

Each lesson's final section links a boss-battle game. The game loads the corresponding Module 6 `question-bank-data.js`, so these answer keys are part of the directly linked lesson practice. Both subject banks received a separate question-by-question pass; these are additional corrections beyond the `bank.json` sampling above.

**`subjects/biology/year12/module6/question-bank-data.js`**

- Old: `An inversion and a translocation both leave the total amount of DNA in a cell unchanged.`
- New: `An inversion and a balanced translocation can both leave the total amount of DNA in a cell unchanged.`
- Source: [MedlinePlus Genetics, structural chromosome changes](https://medlineplus.gov/genetics/understanding/mutationsanddisorders/structuralchanges/). L04 q09 must qualify the translocation as balanced.
- Old: `In a population, 16% of individuals are homozygous recessive. What is the frequency of the recessive allele?`
- New: `In a population at Hardy-Weinberg equilibrium, 16% of individuals are homozygous recessive. What is the frequency of the recessive allele?`
- Old: `Yes, because violation of any assumption indicates evolutionary forces are acting`
- New: `No. Non-random mating can change genotype frequencies without changing allele frequencies.`
- Old: `Deviation from Hardy-Weinberg expectations indicates that at least one assumption is violated, meaning evolutionary mechanisms such as selection, drift, mutation, migration, or non-random mating are influencing the population.`
- New: `A deviation from expected genotype frequencies shows that at least one assumption failed, but it does not prove allele frequencies changed. Non-random mating can alter genotype frequencies without evolution, if evolution means a change in allele frequency across generations.`
- Old: `If observed genotype frequencies deviate from expected values, scientists infer that one or more evolutionary mechanisms are acting on the population.`
- New: `A deviation shows that one or more Hardy-Weinberg assumptions are not met. Non-random mating can change genotype frequencies without changing allele frequencies, so this result alone does not prove evolution.`
- Old: `alleles contributing to intermediate birth weights increase in frequency`
- New: `genotypes producing intermediate birth weights tend to leave more offspring; allele-frequency effects depend on the trait's polygenic architecture`
- Source: [OpenStax Biology 2e, population genetics](https://openstax.org/books/biology-2e/pages/19-2-population-genetics). L07 q14 needs the equilibrium assumption for `q²`; L07 q24 has no correct option as written because non-random mating can change genotype frequencies alone. Revise the keyed option and explanation together. L07 q09 and q10 need the same assumption and qualification.
- Old: `produced in E. coli using the human insulin gene`
- New: `first produced in E. coli using synthetic DNA sequences for the separate insulin A and B chains, followed by chain assembly`
- Old: `By inserting the human insulin gene into E. coli bacteria`
- New: `By expressing synthetic DNA for the human insulin A and B chains in engineered E. coli, then combining the chains`
- Old: `The human insulin gene was inserted into a plasmid and transformed into E. coli. The bacteria then produced human insulin`
- New: `Synthetic DNA for the human insulin A and B chains was inserted into bacterial expression plasmids. The bacteria produced the separate chains, which were then combined into insulin`
- Source: [Original synthetic insulin-gene report](https://pubmed.ncbi.nlm.nih.gov/282602/) and [original bacterial expression report](https://pubmed.ncbi.nlm.nih.gov/85300/). L13 q05 and q14 ask about the original recombinant insulin route, which used synthetic A and B chain coding sequences.
- Old: `meaning genetic changes would be passed to all descendants`
- New: `so a change that reaches the germ cell lineage could be inherited by some descendants`
- Old: `the genetic change is present in all cells of the resulting individual, including germ cells, and will be passed to future generations`
- New: `an embryo edit can reach the germ-cell lineage and may be inherited by later generations, although mosaicism and segregation can limit transmission`
- Source: [National Academies, heritable human genome editing](https://www.nationalacademies.org/read/25665/chapter/6). L13 q06 and q18 overstate all-cell editing and inevitable transmission.
- Old: `A restriction map`
- New: `A restriction fragment pattern`
- Old: `A restriction map shows the locations of restriction enzyme cut sites within a DNA molecule, inferred from the sizes of fragments separated by gel electrophoresis.`
- New: `The bands form a restriction fragment pattern. Constructing a map of cut-site positions requires additional information, such as multiple single and double digests or a known sequence.`
- Old: `Nonspecific primer annealing or primer dimers`
- New: `Nonspecific primer annealing that produces a larger amplicon`
- Source: [OpenStax Microbiology, DNA visualisation](https://openstax.org/books/microbiology/pages/12-2-visualizing-and-characterizing-dna-rna-and-protein) and [New England Biolabs, restriction digestion](https://www.neb.com/en-gb/applications/cloning-and-synthetic-biology/dna-analysis/restriction-enzyme-digestion). L16 q18 confuses a fragment pattern with an inferred map. L16 q23's larger extra band cannot be a primer dimer, which is small.
- Old: `A gene drive uses CRISPR to copy a genetic modification onto both chromosomes during meiosis, ensuring it is inherited by nearly all offspring.`
- New: `Some engineered gene drives use CRISPR-based homing to bias inheritance above the usual 50%; drive efficiency varies, and resistance can prevent spread.`
- Source: [National Academies, gene drives](https://www.nationalacademies.org/read/23405/chapter/2). L13 q15's categorical mechanism and near-certain transmission are not universal across drive designs.
- Old: `It requires repeated administration because treated cells may not persist`
- New: `Its durability depends on which cells are modified, whether they engraft or persist, and long-term safety`
- Old: `If those cells have limited lifespans or the treatment does not reach all target cells, the effect may diminish over time, requiring monitoring or re-treatment`
- New: `Some treated cells have limited lifespans, while edited blood-forming stem cells may persist and provide a long-lasting effect. Monitoring remains necessary.`
- Source: [Original exa-cel clinical report](https://www.nejm.org/doi/full/10.1056/NEJMoa2309676). L13 q21's requirement for repeated dosing is not general for durable stem-cell therapies.
- Old: `It carries functional genetic material introduced from a different species rather than from selective breeding.`
- New: `It carries DNA deliberately introduced from a different species, regardless of whether the introduced sequence is expressed.`
- Old: `Transgenic specifically means carrying a gene transferred from another species and expressed in the recipient.`
- New: `Transgenic means the organism carries DNA introduced from another species; whether that DNA is expressed must be tested.`
- Source: [NHGRI, transgenic definition](https://www.genome.gov/genetics-glossary/Transgenic). L16 q26 should not make expression part of the definition.
- Old: `Incomplete, because it is a toolchain: the gene must be cut, joined to a vector, inserted, then selected for.`
- New: `Incomplete, because the DNA must be prepared, joined or assembled into a suitable construct, introduced into cells and checked.`
- Old: `restriction enzymes cut the gene and vector, ligase joins them`
- New: `the DNA is prepared and joined to a suitable vector or assembled by another validated method`
- Source: [OpenStax Biology 2e, biotechnology](https://openstax.org/books/biology-2e/pages/17-1-biotechnology). L16 q27 presents one cloning route as universal.
- Old: `Crucially the mean across replicates stays at 0.50 for both: drift has no direction, only a magnitude that grows as population size falls.`
- New: `Across many independent replicates, the expected mean remains near 0.50 because drift has no directional bias. A set of only five runs may have a sample mean above or below 0.50.`
- Source: [OpenStax Biology 2e, population genetics](https://openstax.org/books/biology-2e/pages/19-2-population-genetics). L19 q21's five small-population results average `0.406`, not `0.50`.
- Old: `Scientifically effective AND widely adopted over time`
- New: `Heritable or self-sustaining, with spread depending on reproduction, selection, drift and context`
- Old: `Lasting population change requires both that a biotechnology works and that it is taken up widely over time.`
- New: `A heritable change can spread after a limited introduction if carriers reproduce and the change persists. Widespread adoption can magnify an effect, but it is not required for every long-term population change.`
- Source: [National Academies, gene drives](https://www.nationalacademies.org/read/23405/chapter/2). L18 q01's wide-adoption condition is not necessary for every heritable or spreading change.
- Old: `A change becomes a lasting feature of a gene pool only if it enters the germ line`
- New: `In sexually reproducing organisms, a change can enter later generations through gametes; in bacteria, a heritable change passes through cell division`
- Source: [OpenStax Microbiology, asexual prokaryote diversity](https://openstax.org/books/microbiology/pages/11-6-how-asexual-prokaryotes-achieve-genetic-diversity). L18 q10 should not impose germline inheritance on bacteria.

**`subjects/chemistry/year12/module6/question-bank-data.js`**

- Old: `NaOH + CO₂ → Na₂CO₃ + H₂O`
- New: `2NaOH + CO₂ → Na₂CO₃ + H₂O`
- Source: [OpenStax, balancing equations](https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations). L14 q04's explanation omits a second NaOH and is unbalanced.
- Old: `Which of the following correctly identifies a limitation of the Brønsted-Lowry model that is NOT shared by the Arrhenius model?`
- New: `Which reaction requires the Lewis acid-base model because neither the Arrhenius nor Brønsted-Lowry model explains it?`
- Old: `Both the Arrhenius and Brønsted-Lowry models require proton (H⁺) transfer.`
- New: `Arrhenius applies to aqueous H⁺/OH⁻ formation, while Brønsted-Lowry requires proton transfer. Neither describes BF₃ accepting an electron pair from F⁻ without proton transfer.`
- Source: [OpenStax, Brønsted-Lowry acids and bases](https://openstax.org/books/chemistry-2e/pages/14-1-bronsted-lowry-acids-and-bases). L01 q03 has no correct answer with its present `NOT shared` premise; the BF₃/F⁻ Lewis example is outside both earlier models.
- Old: `HCl + NH₃ involves a weak base (NH₃), which consumes energy during protonation`
- New: `HCl + NH₃ has a different overall reaction enthalpy from strong-acid/strong-base neutralisation; compare measured values or a valid enthalpy cycle to rank the options`
- Source: [OpenStax, Hess's law](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy). L03 q02 and several L10 items incorrectly treat weak-base protonation as necessarily energy consuming and the `−57 kJ/mol` reference as a universal additive budget; those other items need supplied comparison data or revised prompts.
- Old: `Electrical conductivity directly measures the total ion concentration in solution.`
- New: `Electrical conductivity depends on ion concentrations, charges and mobilities; at equal concentration, the much greater ionisation of HNO₃ would normally give a larger reading than HNO₂ under matched conditions.`
- Source: [OpenStax, electrolytes](https://openstax.org/books/chemistry-2e/pages/11-2-electrolytes). L06 q05's explanation omits ion mobility and charge.
- Old: `only about 1 in 10⁷ mol/L ionises at 25°C`
- New: `pure water has about 1.0 × 10⁻⁷ mol/L H₃O⁺ and the same OH⁻ concentration at 25°C`
- Source: [OpenStax, pH and pOH](https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh). L07 q07 mixes a particle fraction with concentration units.
- Old: `8.2 g CH₃COONa and 0.063 M CH₃COOH`
- New: `8.2 g CH₃COONa and 0.057 M CH₃COOH`
- Old: `≈ 0.057 M ≈ 0.063 M`
- New: `≈ 0.057 M`
- Old: `0.090 mol`
- New: `0.082 mol`
- Source: [OpenStax, buffers](https://openstax.org/books/chemistry-2e/pages/14-6-buffers). L13 q28 requires acid concentration `0.10/10^0.24 = 0.0575 M`. L13 q30's ±1 pH boundary solves `(0.10−x)/(0.10+x)=0.1`, giving `x=0.0818 mol`; its keyed `0.090` is outside the range. Update both keyed options and explanations.
- Old: `They calculate they need [NH₃]/[NH₄⁺] = 1.8`
- New: `They calculate they need [NH₃]/[NH₄⁺] = 0.56`
- Source: [OpenStax, buffer pH](https://openstax.org/books/chemistry-2e/pages/14-6-buffers). L13 q31's prompt uses the inverse ratio: `10^(9.00−9.25)=0.562`.
- Old: `Methyl orange, because strong acid + weak base gives an acidic equivalence point (NH₄⁺ hydrolyses to give H⁺), and methyl orange (3.1-4.4) brackets that pH`
- New: `Methyl red, because the NH₃/HCl equivalence solution is acidic and methyl red's pH 4.4-6.2 transition covers an equivalence pH near 5.3`
- Source: [OpenStax, titration curves](https://openstax.org/books/chemistry/pages/14-7-acid-base-titrations). L15 q05's own ranges show methyl orange does not bracket pH 5.3. L16 q18 and L17 q06 repeat the indicator choice.
- Old: `1.48`
- New: `1.40`
- Old: `HA⁻`
- New: `HA⁻ and A²⁻ in approximately equal amounts`
- Old: `11.1, 9.25, 5.3, 1.3`
- New: `11.1, 9.25, 5.3, 2.04`
- Source: [OpenStax, acid-base titrations](https://openstax.org/books/chemistry/pages/14-7-acid-base-titrations). L16 q19 leaves `0.0020 mol H⁺` in `0.0500 L`, giving pH `−log(0.0400)=1.40`. L16 q25 is halfway between first and second equivalence volumes, so the intermediate acid/base pair is approximately equal, not `HA⁻` alone. L16 q27 leaves `0.00050 mol` excess acid in `0.0550 L`, giving pH `2.04`, not `1.3`. Change the keyed options and matching explanations.
- Old: `EP at V = 30.00 mL, pH = 9.8; at V = 15.00 mL, pH = 6.4`
- New: `EP at V = 30.00 mL, pH ≈ 9.0; at V = 15.00 mL, pH = 6.4`
- Old: `EP pH = 9.8 confirms basic salt`
- New: `EP pH ≈ 9.0 is consistent with a basic conjugate-base solution`
- Old: `The EP pH of 9.8 is basic`
- New: `The EP pH near 9.0 is basic`
- Source: [OpenStax, weak-acid titration calculation](https://openstax.org/books/chemistry/pages/14-7-acid-base-titrations). L17 q01's start pH `4.2` and half-equivalence pH `6.4` imply about `0.010 mol/L` starting weak acid with `Ka≈4.0×10⁻⁷`; after dilution at equivalence, the conjugate base gives pH around `9.0`, not `9.8`. Revise the curve prompt and keyed explanation together.
- Old: `creating a double endpoint and masking the true equivalence point`
- New: `dissolved CO₂ can complicate endpoint detection; using measured excess acid, expelling CO₂, then titrating the remaining acid provides a clearer result`
- Old: `Titration directly measures moles with ~0.3% uncertainty, whereas the pH probe method relies on Ka, introducing ~5-10% uncertainty`
- New: `A validated titration measures total titratable acidity using standardised base, while pH and Ka alone may not determine total acid content in a mixed sample such as vinegar`
- Source: [OpenStax, acid-base titrations](https://openstax.org/books/chemistry/pages/14-7-acid-base-titrations). L19 q02 incorrectly assigns a double endpoint to a pure bicarbonate case; q05 gives unsupported fixed precision figures.


