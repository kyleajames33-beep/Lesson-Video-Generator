# C14: Ksp expressions and molar solubility: how much does an "insoluble" salt really dissolve? (design)

Status: Revision 2: learning review and Claude science check resolved; ready to voice (owner go-ahead 17 Oct). Reviews: `../checks/c14-learning-review.md`, `../checks/c14-claude-science-check.md`. Ksp values confirmed against the official NESA HSC Chemistry data sheet (read 17 Oct). Revision 1 (17 Oct) was the first design. Nothing recorded; human listening pending.

Revision 2 changes (17 Oct): (1) data sheet confirmed: BaSO4, Mg(OH)2, PbI2, Ag2CO3 and AgCl match exactly; CaF2 and Ag2CrO4 are not on the sheet (CaF2 kept with the CRC value, reasons under Decisions; the unspoken Ag2CrO4 line is removed); (2) the hook strip no longer tags CaF2 as "data table"; (3) scene 9's spoken check is now silent (screen line kept), scene 1, 7 and 18 trimmed, for runtime; (4) scene 10 says "about 1.6 times", matching the screen's 1.59; (5) scene 12 split into 12a (E row first) and 12b (double, Ksp, trap) without changing words; an unspoken "data sheet: 5.61 x 10^-12" tag explains the rounding to 5.62; (6) scene 13's thumbnail no longer names Ag2CrO4. Narration now 5,986 characters, about 9.8 minutes.

Scope: follows the C13, C10 and C6b format and voice. Pre-design pack: `../pre-design/chem-c14-ksp.md`. Site extract: `../site-extracts/chem-m5-l17.md`. Route entry: **chem-m5-c14** ("Ksp expressions and molar solubility", playlist order 20, prerequisites chem-m5-c13 and chem-m5-c05, next chem-m5-c15). Route start: "An ionic solid is at equilibrium with a saturated solution." Route stop: "Derive Ksp and calculate molar solubility using correct stoichiometric factors and stated assumptions." Syllabus (2017, p51): "derive equilibrium expressions for saturated solutions in terms of Ksp and calculate the solubility of an ionic substance from its Ksp value". Owner rules applied: I for initial, C for change, E for equilibrium, with a measured value in the E row first (scene 12, feedback 2); general algebra moves only (take the square root of both sides; divide both sides by four, then take the cube root); Ksp written without units; "Pause here to answer." then a 10 s countdown with the question kept on screen; brief feedback (about 15 to 30 s) with one crossed-out mistake; no human figures; painted plates for real objects; no mark-allocation talk.

**Boundary:** pure water only. No Qsp, no mixing, no common ion (C15). No temperature dependence of Ksp beyond "like every K, it changes only with temperature" (C9). No tooth enamel or fluoridation extension (pack question 2: dropped; the apatite Ksp pair is on incompatible formula bases and the fluoride limits on the site need correction). No quadratic formula (nothing here produces one). The 1 : 3 and 3 : 2 patterns (27s^4, 108s^5) are not taught; they are left to a practice set (author note e).

## Decisions

- **Site sources used:** site lesson 17 key ideas 1 to 7 in the same order (Ksp is K for a dissolving solid with no denominator; coefficients become powers; molar solubility from Ksp with an ICE table starting at zero; 1 : 1 gives s^2; CaF2 gives 4s^3; Ksp from a measured s in reverse; compare Ksp directly only for the same formula type). Site framings reused: "no denominator" (Common Error, scene 3), "the coefficient 2 must sit inside the squared bracket" and "about 1.59 times too large" (scene 10), "CaF2 has a smaller Ksp than AgCl but a larger molar solubility" (scene 11, told with this video's own pair, BaSO4 and CaF2), the site aid "write the dissolution equation, write each ion in terms of s, then substitute" (scene 13 and the decision rule), and the site's calculation practice "Ag2CO3 ... 0.0355 g/L using 275.8 g/mol" (attempt 2, reversed into a Ksp-from-grams question).
- **Reference table (pack question, binding for C14 and C15):** the official NESA HSC Chemistry data sheet ("Solubility constants at 25 C", HSC exams 2019 onward, nsw.gov.au file `chemistry-formulae-sheet-data-sheet-periodic-table-hsc-exams-2019.pdf`, read 17 Oct by the reviewer). On the sheet and matching exactly: BaSO4 1.08 x 10^-10, Mg(OH)2 5.61 x 10^-12, PbI2 9.8 x 10^-9, Ag2CO3 8.46 x 10^-12, AgCl 1.77 x 10^-10 (named only). **Not on the sheet:** CaF2 (the sheet has no fluorides); the CRC Handbook 84th edition value 3.45 x 10^-11 (LibreTexts E3) is used. CaF2 is kept because it is the site's 1 : 2 example and its "smaller Ksp, larger solubility" key idea; the only on-sheet 1 : 2 salts that also carry the twist against BaSO4 are Mg(OH)2 and Ag2CO3, which already carry the reverse example and attempt 2, so a swap would cost a rewrite of scenes 1, 4, 8 to 11 and 13 and lose the site alignment. Only on-sheet values are introduced with "the data table gives" (scene 3); CaF2 is introduced as "with a Ksp of" and its hook row is tagged "Ksp at 25 C" only.
- **Site corrections applied:** (1) The site's CaF2 Ksp 3.9 x 10^-11 becomes the CRC 3.45 x 10^-11 (s = 2.05 x 10^-4 rather than the site's 2.14 x 10^-4). (2) The site's Mg(OH)2 Ksp 1.46 x 10^-11 and PbCl2 2.37 x 10^-4 (pack and extract flags) are not used; the reverse example uses a solubility chosen to match the CRC Mg(OH)2 value. (3) The Ag2SO4 worked example (site Ksp 1.76 x 10^-6 against its own extended response 1.2 x 10^-5) is not used (pack question 1: neither site revision is followed for this example; the video avoids it). (4) The Ca(OH)2 fill-in error (4.68 x 10^5) is not used. (5) The enamel card (apatite Ksp on different formula bases; fluoride 0.6 to 1.1 mg/L and ">2 mg/L" against NHMRC 0.7 to 1.0 and 1.5 mg/L) is not used. Site corrections are recorded for the site worktree, not taught.
- **Pack question 3 (which type carries the video):** a 1 : 1 salt first (BaSO4, which pays off the C13 barium meal), then a 1 : 2 salt (CaF2), because the route stop requires "correct stoichiometric factors" and the 2s trap only exists there. Ksp from s is taught once (Mg(OH)2, a 1 : 2 salt, scenes 12a and 12b) and practised once in attempt 2 (Ag2CO3, a 2 : 1 salt, with grams to moles). The two attempts therefore cover both directions and both orders of 1 : 2.
- **Legacy logic ported (ideas only, no imports; audit item 5, `src/slides/diagrams/kinds/chem-y12-m5/KspDissolveDiagram.tsx`; audit item 1, `KeqBuilderDiagram.tsx`):** the ratio-true ion swarm (ions leave and rejoin the crystal in the salt's own ratio; CaF2 shows twice as many fluoride ions as calcium ions), redrawn over the painted `m5x-saturated-beaker-v1.png` as a lens; staged equation lines with a red strike for the "s instead of 2s" error and tick or cross marks; the "left out" tray for the solid from the expression builder (already in the C5 and C10 explainer builder). Redrawn in explainer style on `src/explainer/`; nothing imported from `src/slides/`.
- **Cause chain taught, in order:** (1) the barium meal: "barely dissolves" is not zero; how much? (1); (2) excess solid in water gives a saturated solution, where ions leave and rejoin at equal rates, so it is an equilibrium with an equation (2); (3) its K has products on top and no bottom because the solid is left out: the solubility product; changes only with temperature; no unit (3); (4) a subscript becomes a coefficient, which becomes a power (4); (5) molar solubility s is the moles of solid that dissolve per litre; each ion concentration follows from what one formula unit gives (5); (6) ICE for a 1 : 1 salt in pure water (6); (7) Ksp = s^2, square root, check, and what 1.04 x 10^-5 mol/L means in milligrams (7); (8) a 1 : 2 salt: fluoride rises by 2s, so Ksp = s(2s)^2 = 4s^3 (8); (9) divide by four, cube root, check (9); (10) the s-for-2s trap and its size (10); (11) the bigger Ksp is the less soluble salt here: different formula types give different powers; compare directly only for the same type (11); (12) backwards: a measured solubility goes into the E row first, then Ksp; forgetting to double gives a Ksp four times too small (12); memory aid (13); two attempts with brief feedback (14 to 17); decision rule and handoff (18); key notes (19).
- **Entry knowledge:** C11 (a dissolved ionic compound is separate hydrated ions; a saturated solution has dissolving and crystallising at equal rates), C10 (Ksp named as the K for a dissolving solid; AgCl expression seen), C13 (solubility rules; "insoluble" means barely dissolves; the barium meal), C5 (K expression, powers, solids left out, no units in HSC style), C6a and C6b (ICE table, E row first for a measured value, square-root moves), Year 11 (ionic formulas, mole and molar mass, n = m/M, scientific notation). Not assumed: Qsp, mixing, common ion.
- **Learner-visible vocabulary (each with a plain meaning at first use):** saturated solution (holds as much dissolved solid as it can at that temperature, with solid left over); solubility product, Ksp (the K for a saturated solution of an ionic solid); molar solubility, s (moles of solid that dissolve per litre to make a saturated solution, in mol/L); formula unit (one "BaSO4", spoken as "each barium sulfate that dissolves"); formula type (the ion ratio, such as one to one or one to two).
- **Attempt systems (unseen, every condition visible):** (A1) PbI2, Ksp 9.8 x 10^-9 at 25 C: calculate the molar solubility in water. Crossed mistake: 2.14 x 10^-3 (s for 2s). (A2) Ag2CO3, saturated solution contains 0.0354 g/L, M = 275.8 g/mol: calculate Ksp. Crossed mistake: 0.0354 used as s (no conversion to moles). Neither salt appears earlier in the video.
- **Mistake scene:** one short trap scene (10, s for 2s), because it is the named exam error the route stop targets and it has a measurable size. Other errors are crossed where they arise: the solid on the bottom of Ksp (3), "(2s)^2 = 2s^2" (8), ranking unlike formula types by Ksp (11), forgetting to double in reverse (12), grams used as s (17).
- **Reuse:** the C5 and C10 expression builder with the "left out" tray; the C6 ICE table component (here with ion columns only and a greyed solid column marked "left out"); the C6a E-row-first pen arrow and "E - I" bracket; the C6 algebra line; the C8 log number line (scene 11, two Ksp markers); the C11 hydrated-ion drawing; the countdown ring; the key notes board. Painted plates (inspected 17 Oct): `m5x-barium-meal-glass-v1.png` (hook), `m5x-saturated-beaker-v1.png` (glass beaker, clear liquid, white crystals on the floor with faint dissolving wisps; scenes 2, 5, 6, 8, 12), `m5x-unsaturated-beaker-v1.png` (same beaker, no solid; scene 2 contrast only). One visual system.
- **Not used (plates):** `m5x-limestone-cave-v1.png` (cave formation is mostly carbonic acid chemistry, Module 6; using it here would imply pure-water Ksp explains caves), `m5x-kidney-stone-v1.png` (C15 hook), `m5x-ppt-*` tubes (C15), `c13-pbi2-tube-*` (attempt 1 stays plate-free so that nothing hints at the method; the yellow tube could be added to feedback 1 only, open decision 4).
- **Author notes (not learner copy):** (a) Assumptions behind s from Ksp, kept off learner copy except the "pure water" tag: the salt is saturated and fully dissociated into the ions in the equation; neither ion reacts further with water (carbonate, fluoride and hydroxide do a little, and Mg(OH)2 and Ag2CO3 solubilities measured in the lab differ from Ksp-only predictions); activities are taken as concentrations. These are the standard HSC assumptions and they do not change any answer here. The memory-aid condition tag carries "pure water, saturated, same temperature". (b) BaSO4: s = 1.04 x 10^-5 mol/L; M(BaSO4) = 233.4 g/mol; 2.43 x 10^-3 g/L, "about 2.4 milligrams per litre". A 250 mL glass would hold about 0.6 mg dissolved; not spoken. Barium meal facts as C13 author note (c). (c) CaF2 at 3.45 x 10^-11 (CRC; CaF2 is not on the NESA data sheet). Many school texts use 3.9 x 10^-11 (s = 2.14 x 10^-4) or 1.5 x 10^-10; the ranking against BaSO4 (scene 11) holds for all of them. (d) Mg(OH)2: "found to contain 1.12 x 10^-4 mol/L" is chosen to reproduce the data sheet Ksp 5.61 x 10^-12 (the 3-figure value gives 5.62 x 10^-12; scene 12b carries an unspoken tag; exact s for 5.61 is 1.1195 x 10^-4). Measured solubility in water is of similar size (about 6 to 12 mg/L, 1.0 to 2.1 x 10^-4 mol/L depending on source and CO2); the video calls it a measured value for the purpose of the method. (e) 1 : 3 (27s^4) and 3 : 2 (108s^5) are in the memory aids bank; they are omitted to keep one reasoning stage at a time; key note 3 states the general method, which covers them. (f) Pronunciation: "K s p" as letters; "C a F two" once, then "calcium fluoride"; "barium sulfate"; "A g two C O three" once in attempt 2, then "silver carbonate"; "two s, all squared"; "four s cubed"; "s" as the letter "ess"; "times ten to the minus ten"; "233 grams per mole"; "0.0354" (attempt 2, feedback 2) is left as numerals, as C6b's recorded "0.0099" and "0.00495" were; check it at preview and respell as "zero point zero three five four" only if the voice misreads it. (g) Rounding: scene 9 shows "s^3 = 8.63 x 10^-12" (8.625 unrounded; the calculator keeps it). Feedback 2 gives Ksp 8.46 x 10^-12 from the unrounded s (rounding s to 1.28 x 10^-4 first gives 8.39 x 10^-12); the narration says to keep the unrounded value. (h) "Like every K, it changes only with temperature" recalls C9; the direction (endothermic dissolving raises Ksp) is not taught here.

Main question: *A salt that "barely dissolves" still dissolves a little. How do you calculate how much from its Ksp, and how do you get Ksp from a measured solubility?*
Entry knowledge (C5, C6a, C6b, C10, C11, C13 and Year 11): saturated solutions are dynamic equilibria; K expressions with powers and solids left out; ICE tables with E row first; Ksp named; solubility rules and "insoluble"; moles and molar mass.
Stops after: writing the dissolution equation and Ksp expression for 1 : 1 and 1 : 2 (or 2 : 1) salts; calculating molar solubility in pure water from Ksp with ion concentrations s and 2s; calculating Ksp from a measured solubility (in mol/L or g/L) with the measured value in the E row first; explaining why Ksp values rank solubility only for the same formula type. No Qsp, no mixing, no common ion, no temperature calculations.
Handoff: "Will mixing these solutions form a precipitate?" (route chem-m5-c15: Qsp against Ksp, dilution on mixing, the common ion effect).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Pronunciations as in author note (f). Colour key: positive ions amber; negative ions violet; water shells pale blue; the solid in its real colour (white for every salt in this video except the attempts, which show no solid); s and every s-term teal; Ksp teal with the tag "no unit written"; made plus green. Board layout in every calculation (three zones, constant): top-left the short task in one line; under it the equation strip (dissolving equation); under that the grouped givens card (Ksp with "25 C", or the measured solubility with its unit); the right two thirds hold the ICE table, then the algebra line, one stage at a time. Plates sit in a column on the far left.

### 1. hook (how much is "barely"?)
> In the precipitation video, barium sulfate was the safe one: it barely dissolves, so a barium meal passes through the gut. But barely isn't "not at all". Some barium sulfate **does dissolve**. So how much, exactly? You'll **calculate** it from one number in a data table, and you'll see why a **bigger** number in that table doesn't always mean a more soluble salt.

Visual: `m5x-barium-meal-glass-v1.png` centre, with the C13 chip "BaSO4(s): barely dissolves" pinned beside it (callback). On "does dissolve" a particle lens opens over the glass: a few amber Ba2+ and violet SO4 2- ions with water shells drift among many solid specks (tag "a few ions dissolved"). On "calculate" a coded Ksp strip slides in at the bottom: "BaSO4 1.08 x 10^-10", "CaF2 3.45 x 10^-11" (two rows only, tagged "Ksp at 25 C"; CaF2 is not on the HSC data sheet, so the strip is not labelled "data sheet"). On "bigger" a pen "?" lands between the two rows. Heading "Barely dissolves. How much is barely?" Hold about 1 second.

### 2. saturated solution (an equilibrium)
> Put excess barium sulfate in water and stir. A tiny amount dissolves, and the rest sits on the bottom. That's a **saturated solution**: it holds as much as it can at that temperature. As you saw in the dissolving video, ions keep **leaving** the solid and **rejoining** it at equal rates. So a saturated solution is an **equilibrium**, with an equation: solid barium sulfate in equilibrium with barium ions and sulfate ions.

Visual: `m5x-unsaturated-beaker-v1.png` crossfades to `m5x-saturated-beaker-v1.png` (aligned pair) as the solid settles. On "saturated solution" the term and its plain meaning write under the beaker. On "leaving" a lens on the crystal floor (ported ion swarm, 1 : 1 ratio) shows a Ba2+ and an SO4 2- leaving with water shells; on "rejoining" another pair docks back; two equal arrows "dissolving rate = crystallising rate" pulse (callback chip "dissolving video"). On "equilibrium" the equation strip writes: "BaSO4(s) ⇌ Ba2+(aq) + SO4 2-(aq)". Hold about 1 second.

### 3. the Ksp expression (no bottom)
> Every equilibrium has a K. Products go on top. The reactant is a **solid**, and solids are left out, so there's **no bottom** at all. K is just the barium ion concentration times the sulfate ion concentration. It's a product of ion concentrations, so it's called the **solubility product**, **K s p**. Like every K, it changes only with temperature, and we write it without a unit. At 25 degrees, the data table gives barium sulfate a Ksp of **1.08 times ten to the minus ten**.

Visual: the C5 and C10 expression builder: the strip's tiles lift; Ba2+ and SO4 2- fly to the numerator; on "solid" the BaSO4(s) tile drops into the "left out" tray (tag "solid: left out"). On "no bottom" the fraction bar fades away and a chip "[Ba2+][SO4 2-] / [BaSO4]" fades in and is crossed (caption "no solid, no bottom"). Line writes: "Ksp = [Ba2+][SO4 2-]". On "solubility product" the term writes with "K for a saturated solution" under it. A small tag "changes only with temperature; no unit written". On "1.08 times ten to the minus ten" the givens card writes "Ksp(BaSO4) = 1.08 x 10^-10 (25 C)". Hold about 1 second.

### 4. powers (calcium fluoride)
> If the formula has a subscript, the equation gets a coefficient. Calcium fluoride, C a F two, dissolves into one calcium ion and **two fluoride ions**. As in any K, the coefficient becomes a **power**: Ksp is calcium, times fluoride **squared**.

Visual: the builder clears. Equation strip writes: "CaF2(s) ⇌ Ca2+(aq) + 2F-(aq)"; on "two fluoride ions" a pen line runs from the subscript 2 in CaF2 to the coefficient 2 on F-. On "power" the coefficient chip flies up and becomes the exponent (builder motion): "Ksp = [Ca2+][F-]^2", CaF2(s) in the tray. (Revision 2: the unspoken Ag2CrO4 line is removed; it competed with the CaF2 line and the 2 : 1 order is taught in scene 12b and attempt 2.) Hold about 1 second.

### 5. molar solubility (what one formula unit gives)
> Ksp isn't the solubility itself. The **molar solubility**, s, is the number of moles of solid that dissolve per litre, to make a saturated solution. To link the two, ask what one formula unit gives. Each barium sulfate that dissolves gives **one** barium ion and **one** sulfate ion. So if s moles per litre dissolve, both ion concentrations are **s**.

Visual: back to the saturated beaker with the BaSO4 strip. On "molar solubility" the term writes in teal: "s = mol of solid dissolved per litre (mol/L)". On "one" a single BaSO4 unit lifts off the crystal in the lens and splits into one Ba2+ and one SO4 2-, each tagged "1"; the swarm repeats in a quick wave (always pairs). On "s" both ion labels in the strip gain teal "s" tags. Hold about 1 second.

### 6. worked example 1: the ICE table (barium sulfate)
> Let's put it in an I C E table: **I for initial**, **C for change**, and **E for equilibrium**. In pure water, both ions start at **zero**. s dissolves, so the change is **plus s** for each ion, and the equilibrium row is **s and s**. The solid gets no column in Ksp.

Visual: task line "Find s for BaSO4 in water". ICE table (C6 component): columns Ba2+ and SO4 2- with "mol/L", and a narrow greyed BaSO4(s) column labelled "left out". The letters I, C, E expand on their cues (C6a motion). On "zero" the Initial row ticks "0", "0" with tag "pure water". On "plus s" the Change row writes "+s", "+s" in teal with the coefficient chips "1", "1" flying from the strip. Equilibrium row: "s", "s". Hold about 1 second.

### 7. worked example 1: solve and what it means
> Substitute: Ksp is s times s, which is **s squared**, and that equals 1.08 times ten to the minus ten. **Take the square root of both sides**: s is **1.04 times ten to the minus five** moles per litre. Check: 1.04 times ten to the minus five, squared, gives 1.08 times ten to the minus ten. Multiply by the molar mass, 233 grams per mole, and that's about **2.4 milligrams in a whole litre**. That's what barely means.

Visual: the algebra line, one stage per line: "Ksp = [Ba2+][SO4 2-] = s x s = s^2"; "s^2 = 1.08 x 10^-10"; on "Take the square root of both sides" root signs draw over both sides with the aside "square root of both sides"; "s = 1.04 x 10^-5 mol/L" ticks. Silent check line "(1.04 x 10^-5)^2 = 1.08 x 10^-10" with a teal tick. On "molar mass" a side card: "1.04 x 10^-5 mol/L x 233 g/mol = 2.4 x 10^-3 g/L". On "2.4 milligrams" the barium meal plate returns small with a tag "about 2.4 mg per litre dissolves". Hold about 2 seconds.

### 8. worked example 2: calcium fluoride (fluoride is 2s)
> Now calcium fluoride, with a Ksp of **3.45 times ten to the minus eleven**. Each formula unit gives one calcium ion and **two fluoride ions**. So if s dissolves, calcium rises by s, but fluoride rises by **two s**. The equilibrium row is **s and two s**. Substitute: Ksp is s, times **two s, all squared**. Two s all squared is two s times two s, which is **four s squared**, not two s squared. So Ksp is **four s cubed**.

Visual: board clears to the three zones. Task "Find s for CaF2 in water". Strip "CaF2(s) ⇌ Ca2+(aq) + 2F-(aq)". Givens "Ksp(CaF2) = 3.45 x 10^-11 (25 C)". Lens on the saturated beaker (ported ratio-true swarm): on "two fluoride ions" one CaF2 unit splits into one amber Ca2+ and two violet F- (pen rings on the two). ICE: Initial 0, 0; on "two s" the coefficient chip "2" flies from the strip into the F- Change cell, "+2s"; Ca2+ "+s"; Equilibrium "s", "2s". Algebra: "Ksp = [Ca2+][F-]^2 = s x (2s)^2"; on "two s, all squared" the bracket rings; on "four s squared" an aside "(2s)^2 = 2s x 2s = 4s^2" with a chip "2s^2" fading in and crossed; then "Ksp = 4s^3" on "four s cubed". Hold about 1 second.

### 9. worked example 2: solve (divide by four, cube root)
> Four s cubed equals 3.45 times ten to the minus eleven. **Divide both sides by four**: s cubed is 8.63 times ten to the minus twelve. Then **take the cube root**: s is **2.05 times ten to the minus four** moles per litre. The fluoride concentration is two s: 4.10 times ten to the minus four.

Visual (Revision 2: the check is silent; the screen line carries it): algebra line continues, one stage per line: "4s^3 = 3.45 x 10^-11"; on "Divide both sides by four" aside "divide both sides by 4": "s^3 = 8.63 x 10^-12"; on "take the cube root" a cube-root sign draws over both sides (small calculator hint "cube root key, or ^(1/3)"): "s = 2.05 x 10^-4 mol/L" ticks. Under it "[F-] = 2s = 4.10 x 10^-4 mol/L", "[Ca2+] = s = 2.05 x 10^-4 mol/L" (the ICE Equilibrium cells fill with these numbers). Check line "4 x (2.05 x 10^-4)^3 = 3.45 x 10^-11" with a tick. Hold about 2 seconds.

### 10. the trap: s instead of 2s
> The classic slip is writing **s** for fluoride, instead of two s. Then Ksp looks like s cubed, and s comes out as 3.26 times ten to the minus four: about **1.6 times too big**. The two comes from the formula, so it goes **inside the bracket, before** you square.

Visual: a ghost ICE table beside the real one: F- Equilibrium cell "s" in red; ghost line "Ksp = s x s^2 = s^3, s = 3.26 x 10^-4" struck in red (ported strike); on "1.6 times too big" two bars compare 3.26 against 2.05 with the tag "1.59 x too big". On "inside the bracket" the real line "s x (2s)^2" returns with the "2" pulsing inside the bracket and a pen arrow from the subscript in CaF2 to it. Hold about 1 second.

### 11. bigger Ksp, less soluble (compare like with like)
> Now compare the two salts. Barium sulfate has the **bigger** Ksp, but calcium fluoride's molar solubility is about **twenty times bigger**. How? Barium sulfate's Ksp is s squared, and calcium fluoride's is four s cubed. Different formulas give **different powers**, so their Ksp values aren't on the same scale. Compare Ksp values directly **only for the same formula type**, like barium sulfate against silver chloride. Otherwise, calculate s for each.

Visual: the data-table strip from the hook returns large: two rows, each with its Ksp and now its s: "BaSO4: Ksp 1.08 x 10^-10, s = 1.04 x 10^-5" and "CaF2: Ksp 3.45 x 10^-11, s = 2.05 x 10^-4". On "bigger" a pen ring on BaSO4's Ksp with an up arrow; on "twenty times bigger" a C8-style log number line draws two s markers (1.04 x 10^-5 and 2.05 x 10^-4) with a bracket "about 20 x". A chip "smaller Ksp, so less soluble" fades in and is crossed. On "different powers" "s^2" and "4s^3" pulse beside the two rows. On "same formula type" the rule card writes: "Compare Ksp directly only for the same ion ratio (1 : 1 with 1 : 1). Otherwise, calculate s." with the example "BaSO4 (1.08 x 10^-10) vs AgCl (1.77 x 10^-10): both 1 : 1, so AgCl is more soluble". Hold about 2 seconds.

### 12a. backwards: a measured solubility goes in the E row first
> It also works backwards. A saturated magnesium hydroxide solution is found to contain **1.12 times ten to the minus four** moles per litre of dissolved magnesium hydroxide. This time we have a measured value, so it goes into the **equilibrium row first**: magnesium ions, 1.12 times ten to the minus four. The change is equilibrium minus initial, the same amount.

Visual: board clears. Saturated beaker plate with a coded label "saturated Mg(OH)2(aq)". Task "Find Ksp for Mg(OH)2". Strip "Mg(OH)2(s) ⇌ Mg2+(aq) + 2OH-(aq)". Givens "dissolved Mg(OH)2: 1.12 x 10^-4 mol/L (measured, 25 C)". ICE (Mg2+, OH-, greyed solid column): Initial 0, 0. On "equilibrium row first" the C6a pen arrow runs from the givens card into the Mg2+ Equilibrium cell, "1.12 x 10^-4"; on "equilibrium minus initial" the "E - I" bracket draws up to the Mg2+ Change cell, "+1.12 x 10^-4". The OH- column stays empty. Hold about 1 second.

### 12b. backwards: double the hydroxide, then Ksp
> Each formula unit gives **two hydroxide ions**, so hydroxide rises by twice that: **2.24 times ten to the minus four**. Ksp is magnesium times hydroxide squared: **5.62 times ten to the minus twelve**. Forget to double the hydroxide, and your Ksp comes out **four times too small**.

Visual: the table, strip and givens stay. On "two hydroxide ions" the coefficient chip "2" flies into the OH- Change cell, "+2.24 x 10^-4", and the OH- Equilibrium cell fills "2.24 x 10^-4". Algebra: "Ksp = [Mg2+][OH-]^2 = (1.12 x 10^-4)(2.24 x 10^-4)^2 = 5.62 x 10^-12" with "no unit written" and a small unspoken grey tag "data sheet: 5.61 x 10^-12 (the measured value is rounded)". On "four times too small" a ghost line "(1.12 x 10^-4)^3 = 1.40 x 10^-12" is struck with the tag "forgot to double: 4 x too small". Hold about 2 seconds.

### 13. memory aid
> So here's the habit. **Each ion is its count times s. Then raise it to that count.** One to one gives s squared. One to two, either way round, gives **four s cubed**.

Visual: the aid writes large and handwritten: "Each ion = its count x s. Then raise it to that count." Two thumbnails beneath: "BaSO4: s x s = s^2" and "CaF2: s x (2s)^2 = 4s^3", with "Mg(OH)2: also 4s^3" small under the second. Condition tag: "pure water, saturated, same temperature". Hold about 2 seconds.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. Lead iodide has a Ksp of **9.8 times ten to the minus nine** at 25 degrees. Calculate its molar solubility in water. Pause here to answer.

Visual: board clears. Task "Calculate the molar solubility of PbI2 in water." Givens card: "PbI2", "Ksp = 9.8 x 10^-9 (25 C)", "Pb2+ is 2+, I- is 1-". An empty ICE outline (labels only) as a scaffold. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing: no equation strip, no s terms, no plate.

### 15. feedback 1 (brief)
> Each lead iodide gives one lead ion and **two iodide ions**, so Ksp is s times two s squared: **four s cubed**. Divide both sides by four, take the cube root, and s is **1.35 times ten to the minus three** moles per litre. If you got 2.14 times ten to the minus three, you used **s instead of two s** for iodide.

Visual: strip "PbI2(s) ⇌ Pb2+(aq) + 2I-(aq)"; ICE fills quickly: 0, 0; +s, +2s; s, 2s. Lines: "Ksp = s(2s)^2 = 4s^3 = 9.8 x 10^-9", "s^3 = 2.45 x 10^-9", answer chip "s = 1.35 x 10^-3 mol/L" pins. On "s instead of two s" a chip "s = 2.14 x 10^-3" fades in and is crossed (caption "iodide is 2s"). Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. A saturated solution of silver carbonate, A g two C O three, contains **0.0354 grams per litre**. Its molar mass is 275.8 grams per mole. Calculate Ksp. Pause here to answer.

Visual: board clears. Task "Calculate Ksp for Ag2CO3." Givens card grouped with units: "saturated Ag2CO3(aq): 0.0354 g/L (25 C)", "M(Ag2CO3) = 275.8 g/mol". Empty ICE outline. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 17. feedback 2 (brief)
> First, **convert to moles**: 0.0354 divided by 275.8 is 1.28 times ten to the minus four moles per litre. That measured value goes in the equilibrium row: carbonate is s, and silver is **two s**. Ksp is two s squared, times s: **8.46 times ten to the minus twelve**. Keep the unrounded s in your calculator. If you put **0.0354** straight in as s, you skipped the conversion to moles.

Visual: "0.0354 g/L / 275.8 g/mol = 1.28 x 10^-4 mol/L" writes on the givens card; the E-row-first arrow carries it into the CO3 2- Equilibrium cell; the Ag+ cell fills "2.57 x 10^-4" (from 2 x 1.2835 x 10^-4) with the coefficient chip "2". Line "Ksp = [Ag+]^2[CO3 2-] = (2.57 x 10^-4)^2 (1.28 x 10^-4)", answer chip "Ksp = 8.46 x 10^-12" pins with a small tag "unrounded s". On "0.0354" a chip "s = 0.0354" fades in and is crossed (caption "g/L: divide by M first"). Hold about 1 second.

### 18. decision rule and handoff
> So, for any Ksp question: write the dissolving equation, and each ion as its count times s. Given Ksp, solve for s with a square or cube root. Given a measured solubility, put it in the equilibrium row first, then multiply out. And compare Ksp directly only for the same formula type. **Next**: two solutions are mixed. Will a precipitate actually **form**?

Visual: the decision card writes, each line lighting on its words: "1 Dissolving equation." "2 Each ion = count x s; raise to the count." "3 Ksp given: solve for s (square or cube root)." "4 s measured: E row first (g/L to mol/L), then Ksp." "5 Compare Ksp directly only for the same formula type." On "Next" a chip "Next: will mixing form a precipitate? (Qsp)" with `m5x-ppt-pbi2-yellow-v1.png` and `m5x-no-ppt-clear-v1.png` small side by side and a "?" between them. Hold about 2 seconds.

### 19. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Ksp is K for a saturated solution of an ionic solid. The solid is left out (no denominator); coefficients become powers; no unit written; changes only with temperature. Example: CaF2(s) ⇌ Ca2+ + 2F-, Ksp = [Ca2+][F-]^2.
2. Molar solubility s = mol of solid that dissolve per litre of saturated solution (mol/L). In pure water each ion is its count x s.
3. Ksp to s: 1 : 1, Ksp = s^2, s = √Ksp. 1 : 2 or 2 : 1, Ksp = s(2s)^2 = 4s^3, s = ∛(Ksp/4). The 2 goes inside the bracket before squaring.
4. s to Ksp: convert g/L to mol/L first (÷ M); put the measured value in the E row first; multiply out.
5. Compare Ksp values directly only for the same formula type. Otherwise calculate s for each (BaSO4 has the bigger Ksp, but CaF2 is about 20 times more soluble).

Memory aid (large, on the notes screen): *Each ion is its count times s. Then raise it to that count.* Condition tag: "pure water, saturated, same temperature".

## Teaching checks

- **Does it explain causes?** Why a saturated solution has a K: dissolving and crystallising continue at equal rates (2). Why Ksp has no bottom: the solid is left out (3). Why a coefficient appears and becomes a power: the subscript decides how many ions one unit releases (4, 8). Why the ion concentrations are s and 2s: what one formula unit gives (5, 8). Why (2s)^2 is 4s^2: the whole bracket is squared (8, 10). Why the bigger Ksp can be the less soluble salt: different formula types give different powers (11). Why a measured solubility goes in the E row: it is an equilibrium value, and its change is E minus I (12). Why grams per litre must become moles per litre: Ksp uses concentrations in mol/L (17).
- **Misconceptions addressed:** solid on the bottom of Ksp (3); (2s)^2 = 2s^2 (8); s for 2s (10, 15); ranking unlike formula types by Ksp (1, 11); forgetting to double in reverse (12); grams used as s (17); "insoluble means none dissolves" (1, 7).
- **Worked-example rule:** short task, equation strip and grouped givens are separate; one ICE row or algebra stage per beat; established results stay (the s values return in scene 11) and the working clears between examples; every calculation ends with a spoken or silent check.
- **Response opportunity:** two unseen tasks (s from Ksp for a new 1 : 2 salt; Ksp from grams per litre for a new 2 : 1 salt), every condition on screen (Ksp with temperature, ion charges, mass concentration and molar mass), 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each. Feedback at 13.3 characters per second: scene 15 about 22 s, scene 17 about 28 s.
- **Avoided double teaching:** C11 equal rates (one clause, 2); C5 expression rules and solids left out (one sentence, 3); C10 naming of Ksp (the term is re-introduced as "solubility product", not re-derived); C6a ICE letters (one sentence, 6); C13 barium meal (one clause, 1).
- **Out of scope by design:** Qsp, mixing and the common ion (C15); temperature and Ksp direction (C9); 1 : 3 and 3 : 2 salts (practice set); enamel and fluoridation (pack question 2); "Ksp from mixing data with precipitate subtracted" (an HSC calculation type, research T-Ksp row; belongs in a later practice video after C15).

## Numbers used (author note: every place a value appears)

| Item | Value | Where it appears |
| --- | --- | --- |
| Ksp BaSO4 (NESA data sheet, 25 C) | 1.08 x 10^-10 | 1, 3, 6, 7, 11 |
| s BaSO4 | 1.04 x 10^-5 mol/L (1.039) | 7, 11 |
| BaSO4 mass solubility | 1.04 x 10^-5 x 233.4 = 2.43 x 10^-3 g/L, "about 2.4 mg per litre" | 7 |
| Ksp CaF2 (CRC 84th ed., 25 C; not on the NESA sheet) | 3.45 x 10^-11 | 1, 8, 9, 11 |
| s^3 CaF2 | 8.63 x 10^-12 (8.625) | 9 |
| s CaF2; [F-] | 2.05 x 10^-4 (2.0508); 4.10 x 10^-4 | 9, 11 |
| Check CaF2 | 4 x (2.05 x 10^-4)^3 = 3.446 x 10^-11, "3.45" | 9 (screen only) |
| s-for-2s trap | ∛(3.45 x 10^-11) = 3.26 x 10^-4; ratio 1.587 ("about 1.6", screen 1.59) | 10 |
| (2s)^2 = 2s^2 trap (screen only, not computed on screen) | would give s = 2.58 x 10^-4 | author only |
| Ratio s(CaF2) / s(BaSO4) | 19.7, "about twenty" | 11 |
| Ksp AgCl (NESA data sheet) | 1.77 x 10^-10 (s = 1.33 x 10^-5, not shown) | 11 rule card |
| Mg(OH)2 measured s | 1.12 x 10^-4; [OH-] 2.24 x 10^-4; Ksp 5.62 x 10^-12 (data sheet 5.61; unspoken tag) | 12a, 12b |
| Mg(OH)2 forgot-to-double | (1.12 x 10^-4)^3 = 1.40 x 10^-12; ratio exactly 4 | 12b |
| PbI2 Ksp (NESA data sheet) | 9.8 x 10^-9; s^3 = 2.45 x 10^-9; s = 1.348 x 10^-3, "1.35" | 14, 15 |
| PbI2 trap | ∛(9.8 x 10^-9) = 2.14 x 10^-3 | 15 |
| Ag2CO3 | 0.0354 g/L / 275.8 = 1.2835 x 10^-4 mol/L ("1.28"); [Ag+] 2.567 x 10^-4 ("2.57"); Ksp 4s^3 = 8.458 x 10^-12, "8.46" (data sheet 8.46) | 16, 17 |
| Ag2CO3 from rounded s | 4 x (1.28 x 10^-4)^3 = 8.39 x 10^-12 (why "keep unrounded") | author note g |

## Numbers to verify (all arithmetic, repeated for Codex)

Revision 2: every value recomputed by `../checks/c14-c15-b9-b10-numbers.py` (17 Oct); see `../checks/c14-claude-science-check.md`. Reference values checked against the official NESA HSC Chemistry data sheet (read 17 Oct): BaSO4 1.08 x 10^-10, Mg(OH)2 5.61 x 10^-12, PbI2 9.8 x 10^-9, Ag2CO3 8.46 x 10^-12, AgCl 1.77 x 10^-10, all exact matches. CaF2 is not on the sheet (CRC 84th edition 3.45 x 10^-11 used). Molar masses: BaSO4 233.39 g/mol; Ag2CO3 275.75 g/mol (275.8 as given).

- Codex (optional, error-only): re-run the arithmetic; confirm no em dash appears in this file.

## Memory aid check

- **"Each ion is its count times s. Then raise it to that count."** From the Module 5 memory aids bank ("If molar solubility is s, each ion's concentration is its subscript times s. Then raise each to its subscript"), reworded so "count" covers both the subscript in the formula and the coefficient in the equation. Taught after the idea (scenes 5 to 12). Assumptions: pure water (no ion present at the start); the salt is saturated and fully dissociated into the ions shown; neither ion reacts further; same temperature as the Ksp value. Holds for BaSO4, CaF2, Mg(OH)2, PbI2 and Ag2CO3 as used. Fails with a common ion present (C15 shows why: the initial row is not zero), which the condition tag "pure water" covers.
- **"Compare Ksp directly only for the same formula type."** Bank trap entry, matches the site. Assumption: same temperature. Holds for BaSO4 against AgCl (both 1 : 1).
- **Considered, not used:** the bank's full s^2, 4s^3, 27s^4, 108s^5 table (only the first two are taught; key note 3 carries the method); "convert grams to moles before anything else" is used as the attempt 2 feedback line rather than a separate aid.

## Narration length estimate

Revision 2 count (17 Oct, `../checks/c14-c15-b9-b10-runtime.py`, build parser: `### ` headings, "> " lines, bold markers removed): **5,986 characters, 20 scenes** (key-notes line included). Characters per scene: 1:353, 2:408, 3:458, 4:233, 5:336, 6:243, 7:402, 8:394, 9:280, 10:250, 11:437, 12a:355, 12b:266, 13:158, 14:145, 15:296, 16:180, 17:368, 18:349, 19:75. At 13.3 characters per second the speech is about 450 s. Add 2 s per scene (40 s), stated reading holds 23 s, two countdowns 20 s and 55 s more of the quiet notes hold: **about 9.8 minutes** (inside 6 to 10). Feedback: scene 15 about 22 s, scene 17 about 28 s.

Reserve cuts if the voiced preview runs long: (1) scene 11's last sentence "Otherwise, calculate s for each." moves to the screen only (about 3 s); (2) scene 7's milligram sentence shortens to "That's about 2.4 milligrams in a litre." (about 5 s). Characters to voice: all new.

## Assets

Have (inspected 17 Oct): `public/assets/chemistry/m5x-barium-meal-glass-v1.png` (glass of opaque white suspension); `m5x-saturated-beaker-v1.png` (glass beaker of clear liquid, white crystals on the floor, faint dissolving wisps; reused for BaSO4, CaF2 and Mg(OH)2 with coded labels, all white solids); `m5x-unsaturated-beaker-v1.png` (aligned, no solid); `m5x-ppt-pbi2-yellow-v1.png` and `m5x-no-ppt-clear-v1.png` (handoff chip only). Coded: the expression builder and "left out" tray, the ratio-true ion swarm lens, the ICE table with the greyed solid column, the E-row-first arrow and "E - I" bracket, the algebra line, the data-table strip, the log number line with two s markers, ghost tables and strikes, countdown ring, key notes board.

Need: none. The `m5x-saturated-beaker-v1.png` crystals are white; every salt shown with it here is white (BaSO4, CaF2, Mg(OH)2). PbI2 (yellow) and Ag2CO3 (pale yellow) appear only in the attempts, which show no solid.

## Codex asset brief

No new plates. Requested (not art): (1) error-only re-check of every number in "Numbers used"; (2) data sheet comparison: done by the Claude science check (17 Oct), no Codex action; (3) confirm no em dash appears in this file; (4) note in the owner record (not video content) that this design does not use the site's Ag2SO4 worked example, the Ca(OH)2 fill-in, the Mg(OH)2 and PbCl2 site values, the CaF2 3.9 x 10^-11 value or the enamel card, with the reasons under Decisions.

## Open decisions

1. **Data sheet confirmation:** resolved in Revision 2 (all on-sheet values match; CaF2 off-sheet, kept with the CRC value).
2. **CaF2 value (owner note):** the site's lesson 17 uses 3.9 x 10^-11; this video uses the CRC 3.45 x 10^-11. Align the site worktree (site-corrections note) so the lesson page and the video agree. Ranking and method are unaffected.
3. **Length:** resolved (about 9.8 minutes; reserve cuts listed).
4. **Feedback 1 plate:** decided: not used (adds a plate without explanatory work).
5. **Scene 4 Ag2CrO4 line:** decided: removed.

## Build ids

Lesson key `c14` (route chem-m5-c14). Suggested explainer folder `src/explainer/lessons/chem-m5-c14` and build folder `docs/production/claude-pm/lessons/c14` (root to confirm when adding the LESSONS entry).

In order (kebab-case, for the `build_wave5_chem.py` LESSONS entry; 20 scene headings, `### N.` or `### Na.`): hook, saturated, ksp-expression, powers, molar-solubility, baso4-ice, baso4-solve, caf2-setup, caf2-solve, trap-2s, compare-ksp, reverse-erow, reverse-ksp, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, decision-rule, key-notes.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes hold (about 60 s). No reused takes. Review evidence paths for the LESSONS entry: `learning_review` = `checks/c14-learning-review.md`, `science_check` = `checks/c14-claude-science-check.md` (both written 17 Oct).
