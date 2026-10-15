# Brief 37: error-only fact check sweep

Checked 16 October 2026. Arithmetic was recomputed from each question's givens. The Chemistry designs cite the 2017 syllabus item “perform calculations to find the value of Keq and concentrations of substances within an equilibrium system, and use these values to make predictions on the direction in which a reaction may proceed (ACSCH096)”; C9 cites “qualitatively analyse the effect of temperature on the value of Keq (ACSCH093)”. B6a cites “construct appropriate representations to model and compare the forms in which DNA exists in eukaryotes and prokaryotes (ACSBL076)”. Each matches the [official Chemistry syllabus](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017) or [official Biology syllabus](https://educationstandards.nsw.edu.au/wps/wcm/connect/657d2611-c201-49ce-a18e-ef0f786a5de0/biology-stage-6-syllabus-2017.pdf?MOD=AJPERES) word for word. The Chemistry wording was also compared with the official DOCX held at `out/research/curriculum/chemistry-2017-syllabus.docx`.

## G03a

**Errors:** None found.

**No error found:** The first vessel gives 0.150, 0.0750 and 0.300 mol/L, and its equilibrium ratio is 53.333, shown as K = 53.3. The second vessel's ICE table gives K = 228.571, shown as 229. At that second temperature, the new vessel with the first vessel's concentrations has Q = 53.333, so Q < 229 and the net change is forward. The carbon example gives Q = 1.28 and its variant gives 4.50, on opposite sides of K = 1.90. The syllabus citation matches. The Q comparison follows the equilibrium definition in [OpenStax Chemistry 2e](https://openstax.org/books/chemistry-2e/pages/13-2-equilibrium-constants).

## G03b

**Errors:** None found.

**No error found:** The tiny-K N2O4 shortcut gives x = 0.007071, [NO2] = 0.01414 mol/L and 1.41% taken from the start; the exact [NO2] is 0.01404. The huge-K example gives x = 1.0 × 10^-4 mol/L and a 0.05% reactant change. The steam-addition table gives y = 0.525 mol/L and 1.05 mol added; the immediate Q is 1.10, below K = 4.00. The syllabus citation matches.

## G03c

**Errors:** None found in the current part 1. The brief also names questions 3 and 4, which moved to `chem-m5-g03d.md` on 16 October; those current questions were checked here.

**No error found:** Methanol: initial concentrations 0.100, 0.200 and 0.200 mol/L lead to settled 0.140, 0.280 and 0.160 mol/L, so K = 0.160/(0.140 × 0.280²) = 14.577, shown as 14.6. FeO(s) + CO(g) ⇌ Fe(s) + CO2(g): K = 0.50 gives [CO2] = 0.100 mol/L, then 0.200 mol Fe and 11.17 g, shown as 11.2 g. The FeO value is realistic near 800 °C, and the methanol value is realistic near 230 °C, from thermochemical estimates using [NIST-JANAF data](https://janaf.nist.gov/). In the moved G03d question, reversing the NOCl equation gives 1/(6.25 × 10^4) = 1.6 × 10^-5. The shortcut gives x = 0.0100 mol/L and 0.0400 mol Cl2; the design also gives the exact result, 0.0390 mol. The 6.25 × 10^4 / 1.6 × 10^-5 pair is correctly labelled **illustrative** at an unspecified temperature; it should not be assigned to 35 °C. The moved NO2 + SO2 question gives concentrations 0.0200, 0.0400, 0.180 and 0.360 mol/L, K = 81.0, and its second part gives [NO2] = 0.0250 mol/L. K near 81 at 460 °C is realistic. The syllabus citation matches. Thermochemical checks used [NIST-JANAF tables](https://janaf.nist.gov/tables/N-index.html) for the reaction species.

## C6b, Revision 4

**Errors:** None found.

**No error found:** For I2 ⇌ 2I, multiplying by the denominator gives 4x² = (1.6 × 10^-5)(0.25) = 4.0 × 10^-6; dividing by 4 gives x² = 1.0 × 10^-6, x = 0.0010, [I] = 0.0020 mol/L and a 0.4% change from the iodine start. For N2 + O2 ⇌ 2NO, multiplying by 0.50 × 0.50 gives 4x² = 1.0 × 10^-4; dividing by 4 gives x² = 2.5 × 10^-5, x = 0.0050 and [NO] = 0.010 mol/L. The exact square-root route gives [NO] = 0.00990 mol/L. Both examples correctly use the same general algebra. The iodine K is labelled illustrative; the NO K is close to the thermochemical value near 2000 K. The syllabus citation matches. [NIST-JANAF thermochemical tables](https://janaf.nist.gov/) support the temperature comparisons.

## C9, Revision 5

**Errors:** None found.

**No error found:** Starting with 0.040 mol/L N2O4, K = 0.0061 gives x = 0.007085, [N2O4] = 0.032915, [NO2] = 0.014170 mol/L and 17.7% splitting at 25 °C. K = 0.49 gives x = 0.031764, [N2O4] = 0.008236, [NO2] = 0.063528 mol/L and 79.4% splitting at 100 °C. All four displayed concentrations and both rounded percentages are correct. The Kc values are consistent with NIST thermochemical data for [NO2](https://webbook.nist.gov/cgi/cbook.cgi?ID=C10102440&Table=on&Type=JANAFG) and [N2O4](https://webbook.nist.gov/cgi/cbook.cgi?ID=C10544726&Mask=24A&Units=SI). Heating makes the heat-absorbing splitting reaction speed up more than the joining reaction at the old mixture; the resulting shift and rise in K are correct. [OpenStax Chemistry 2e](https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle) confirms the endothermic direction on heating. The syllabus citation matches.

## B6a, Revision 5 harder questions

**Errors:**

1. Scene 12d narration says the chromosomal resistance gene **usually** reaches new cells when the carrier divides, but the on-screen model line says “passed on only when the cell divides” and the panel says “B: down only”. A gene on a bacterial chromosome can also move horizontally, including through an integrative conjugative element. Correct the on-screen claim to **usually passed to offspring at division in this comparison**. The distinction is the usual routes in the two pictured populations, not an absolute ban on horizontal transfer from a chromosome. See the [research on integrative conjugative elements](https://pmc.ncbi.nlm.nih.gov/articles/PMC5180612/).
2. Scene 9, the comparison table, the key notes and item 1's model answer state that mitochondria and chloroplasts each hold small **rings** of DNA as a literal general rule. In plants, much chloroplast and mitochondrial DNA is physically linear or branched, even when its genome is drawn as a circular map. Correct the general statement to **these organelles have their own DNA; a circle is a simplified genome model**, and keep item 1's two rings as facts about its hypothetical cell. Physical-form measurements in [maize chloroplasts](https://pubmed.ncbi.nlm.nih.gov/14698291/) and [plant mitochondria](https://pubmed.ncbi.nlm.nih.gov/12239390/) support the correction.

**No error found:** About 6 billion base pairs at 0.34 nm per pair make about 2.04 m of DNA in a diploid human nucleus. Six micrometres is 0.006 mm. A 6.7 cm tennis ball scales a 6 µm nucleus by about 11,167, making a 2 m thread about 22.3 km long, safely more than 10 km; even a 10 µm nucleus gives about 13.4 km. The revised item 1 correctly identifies X as a eukaryote, most likely a plant cell or alga, and Y as a prokaryote from the stated cell evidence. Item 2 correctly distinguishes plasmid conjugation from cell division, apart from the absolute on-screen wording above. The syllabus citation matches. The genome scale follows [NHGRI's human genome size](https://www.genome.gov/Pages/Education/Modules/BasicsPresentation_vs2.pdf) and the ball size follows the [ITF tennis rules](https://www.itftennis.com/media/7221/2025-rules-of-tennis-english.pdf).
