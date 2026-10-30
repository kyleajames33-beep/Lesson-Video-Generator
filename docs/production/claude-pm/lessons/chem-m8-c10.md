# M8 C10: What bonds can an IR spectrum reveal? Bonds vibrate, dips name them, and a missing dip rules a group out (design)

Status: Revision 2 (31 Oct): learning review and science check resolved, except science blocker S3 (measured traces for seven of ten compounds), which stays open as a build gate; needs that data and the Codex error check before voicing.

Earlier status, Revision 1 (30 Oct): needs learning review and science check (Codex), then Codex error check before voicing.

Revision 2 changes (31 Oct; resolving `../checks/m8c10-learning-review.md` (learning L1 to L3) and `../checks/m8c10-claude-science-check.md` (science S1 to S6)):
- Carbonyl exclusion (learning L1 and science S2, merged): scene 12 now says "No dip between sixteen eighty and seventeen fifty rules out the carbonyl candidates on your list." A small candidate strip shows the struck carbonyl candidates. Key note 4 matches. Both attempts stay answerable (each names its candidates).
- Amines (learning L2 and science S1, merged): scene 10 now says "Primary and secondary amines have N H bonds" and "shows two N H bands", with a grey chip "tertiary amines: no N–H". Author note (f) matches.
- Reading load (learning L3): a reading-load rule under "Script and shots" keeps only the current structure and trace bright in scenes 6 to 11 and dims every earlier range card. No narration added. Playback check still pending.
- Measured traces (science S6, and S3 in part): cyclohexane, 2-methylpropan-2-ol and butan-1-ol now use the measured NIST neat-liquid centres and %T, including the deep features Revision 1 missed. Every narrated and printed value stays within 15 cm⁻¹ of the measured centre.
- Measured traces still missing (science S3, blocker, open): the seven other compounds are marked provisional and must not be drawn until measured records of the same phase and method arrive. The Codex asset brief item 3 is rewritten to say this (**Codex asset brief changed**).
- Axis (science S4): the IR trace uses a linear axis, as on the 2024 HSC paper; error-check item 4 is closed.
- Count (science S5): "eleven" corrected to ten compounds throughout.
- Length: 6,312 characters (Revision 1: 6,293), about 568 s, under the 570 s cap; the scene 4 reserve trim is the named cut if the voiced take runs long.
- Declined: none. Open items for the Codex error check: measured liquid-phase traces for ethanol, ethanoic acid, propanone, propan-1-amine, propan-1-ol, propan-2-ol and ethyl ethanoate (NIST returned HTTP 403 and 429 on 30 Oct; SDBS liquid-film records acceptable if digitised); then recheck every asterisked value against them.

Narration 6,312 characters (Revision 2, summed per scene), 20 scenes (including the key notes hold), about 9.5 minutes (568 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: the second Module 8 spectroscopy video (inquiry question 2), after chem-m8-c09 (mass spectrometry). Format, voice and staging follow `chem-m8-c08.md`, `chem-m8-c09.md`, `chem-m8-c04.md` and `chem-m8-c03a.md`: a candidate strip that greys out as evidence is read, crossed chips, the countdown ring, c09's step strip, the key notes board. **Recalled, not re-taught:** chem-m8-c08 (fizz, fade, green; bottle Y gave no change in all three tests, so it fits cyclohexane or 2-methylpropan-2-ol, and c08 scene 10 promised "an infrared spectrum, which shows an O H band"; green means something was oxidised, and aldehydes do it too), chem-m8-c09 (MS gives the mass and narrows the list; "IR: groups" chip), Module 7 naming and functional groups (alcohols, carboxylic acids, ketones, aldehydes, esters, amines are read, not taught; chem-m7-c01, c05, c09, c10, amines video), hydrogen bonding (Module 7 and Year 11, one clause). The new teaching here is why bonds absorb infrared, how to read the axes (transmittance dips, wavenumber running backwards), what sets a band's position, using the data sheet ranges, the shapes that matter (broad alcohol O–H, very broad acid O–H, strong sharp C=O, weaker N–H), the fingerprint region, a scanning routine, and treating a missing band as evidence. Pre-design pack: `../pre-design/chem-m8-infrared-spectroscopy.md`. Site extract: `../site-extracts/chem-m8-l13.md` (thin: one key term extracted, as a fragment), so site lesson 13 (`C:/Users/kygs/hscscience/subjects/chemistry/year12/module8/lesson13.sa.html`) was read in full (30 Oct, read-only). Site corrections: `../site-corrections-m8.md` records none for L13; new corrections below. Route entry: `chem-m8-c10` in `../../module8-video-route-draft.json` ("What bonds can an IR spectrum reveal?", playlist order 17, core, prerequisites chem-m8-c08, chem-m8-c09, next chem-m8-c11). Route start: "Link absorption regions to bonds." Route stop: "Use IR to distinguish plausible functional groups." Next: chem-m8-c11 (NMR; the route review splits it into c11a, carbon-13, and c11b, proton).

**Entry knowledge:** chem-m8-c08's three tests and their limits; chem-m8-c09's role of MS; Module 7 functional groups and naming; hydrogen bonding between O–H groups (recall). **Start:** c08's bottle Y, which the tests could not identify; how can a spectrum show an O–H bond directly? **Stop:** assign the O–H (alcohol and acid), C–H, C=O, N–H and C–O bands from the data sheet ranges, use band shape and combinations, use a missing band to rule a group out, and say what IR cannot show. **Next handoff:** NMR (chem-m8-c11a), which maps how the carbon and hydrogen atoms are arranged.

Owner rules applied: spectra are coded only (new IR trace part; never an AI image of a spectrum); every spectrum is realistic for its named compound and each band is listed under "Numbers to verify" for checking against NIST or SDBS; the instrument is one existing painted plate; the vibrating bond is a coded abstract diagram (balls and spring, no people); no people, hands or faces; at most about three bright text items, earlier lines dim; one reasoning stage at a time; "Pause here to answer." then a 10 s countdown with the full worded question and its spectrum or band list kept on screen; no givens card, givens underlined in the feedback as they are used; brief feedback (answer, key reason, one crossed mistake, about 15 to 30 s); original HSC-style questions only; Australian spelling; no em dashes; conversational narration; no absolute claims ("points to", "supports", "fits", "rules out" only for a missing band against a stated candidate list).

Syllabus dotpoint (as printed; NSW Chemistry Stage 6, 2017, p58; `C8-IQ2-02` is this project's local catalogue ID, not a code printed in the syllabus), quoted from `../../programme/syllabus/chem-2017-y12.json`:

"investigate the processes used to analyse the structure of simple organic compounds addressed in the course, including but not limited to:
- proton and carbon-13 NMR
- mass spectrometry
- infrared spectroscopy (ACSCH130)"

This video covers infrared spectroscopy; mass spectrometry was chem-m8-c09 and NMR is c11a and c11b.

**Boundary:** starts from c08's unresolved bottle and stops when the student can read an IR spectrum to support or rule out functional groups among stated candidates. It teaches: bonds vibrate (stretch, and bend); a bond absorbs infrared that matches its vibration, so less light gets through (a dip); transmittance on the y axis, dips pointing down; wavenumber (cm⁻¹, waves per centimetre, higher means more energy) running from about 4000 on the left to about 500 on the right; stiffer (stronger) bonds and lighter atoms absorb at higher wavenumber, using a balls-and-spring analogy with its limit stated; the NESA data sheet ranges are given, not memorised; C–H (2850 to 3000 in these compounds; data sheet 2850 to 3300) is nearly everywhere; alcohol O–H broad 3230 to 3550 (hydrogen bonding spreads the O–H strengths); acid O–H very broad 2500 to 3000 with a C=O (paired molecules, two hydrogen bonds); C=O strong and sharp 1680 to 1750 (carbonyl present, not which kind); N–H 3300 to 3500, narrower and weaker than O–H; the fingerprint region below about 1500 (match, don't assign; a strong C–O 1000 to 1300 can still support an alcohol, acid or ester); a scanning routine; a missing band as evidence; IR shows bonds, not the whole structure. **Not here:** the dipole-change condition and IR-inactive vibrations (site marks extension; author note a); C≡N, C=C and C–C rows (on screen in the table, not narrated); aldehyde C–H near 2720 and 2820 (not on the data sheet; author note d); force constants and reduced mass; the instrument's optics (one plate, one sentence); NMR (c11a, c11b); combined structure problems (c12, g03).

## Decisions

- **Main question:** *In the tests video, one bottle gave no change in all three tests. It could be cyclohexane, or a tertiary alcohol, and the tests couldn't tell. One of them has an O–H bond. How can shining infrared light through the sample show which bonds are there?* Heading on screen: "Which bonds are in there?"
- **Hook and worked example: c08's bottle Y (c08 scene 10 set this up).** Cyclohexane against 2-methylpropan-2-ol is the cleanest possible IR contrast (one broad O–H band and a strong C–O band, or neither), it pays off a promise made two videos earlier, and it shows IR doing what the chemical tests could not. The hook poses it; scene 13 answers it with both spectra side by side, after the routine.
- **Ranges: the NESA data sheet table, as the site gives it.** N–H 3300 to 3500; O–H (alcohols) 3230 to 3550 (broad); C–H 2850 to 3300; O–H (acids) 2500 to 3000 (very broad); C≡N 2220 to 2260; C=O 1680 to 1750; C=C 1620 to 1680; C–O 1000 to 1300; C–C 750 to 1100 (cm⁻¹). The full table is shown once (scene 5), as the exam provides it; narration uses five rows. Codex checks the table against the current NESA data sheet (error check item 2).
- **Dipole change: author note only.** The site's card 1 puts the dipole condition in the core, but its own "Beyond the syllabus" box marks dipole selection rules as extension. The video's spring analogy says where it breaks (a bond absorbs only particular energies), and the dipole condition stays in author note (a).
- **Wavenumber said plainly.** "The number of waves that fit in one centimetre"; never called wavelength (pack trap "cm⁻¹ called wavelength"). Higher wavenumber means higher energy (said once). The reversed axis is pointed at (scene 3).
- **Dips, not peaks (pack trap).** The y axis is transmittance; every absorption is called a "dip" or a "band", and the axis runs top 100% down to 0%.
- **Shapes over numbers.** The data sheet gives numbers, so the teaching value is in shape and combination: broad and rounded (alcohol O–H), very broad and low, running over the C–H (acid O–H), strong and sharp (C=O), narrower and weaker, often two points (N–H of a primary amine). Each is shown on a real compound's spectrum.
- **Ketone against ester (site correction 1).** The video does not teach "C=O plus a C–O band means ester" as a rule, because ketones also absorb in the 1000 to 1300 region (propanone near 1220). Scene 9 says C=O shows a carbonyl but not which kind, and "the other dips, and the formula, help you decide". Attempt 1 gives the candidate list (butanoic acid or ethyl ethanoate), so the decision rests on the missing acid O–H, which is sound.
- **Attempt 1 (A1):** "Compound X is either butanoic acid or ethyl ethanoate. Its infrared spectrum, shown, has absorptions near 2980 cm⁻¹, a strong sharp absorption at 1740 cm⁻¹, strong absorptions at 1240 cm⁻¹ and 1050 cm⁻¹, and no broad absorption between 2500 and 3550 cm⁻¹. Identify compound X. Justify your answer with reference to the spectrum." The card shows the ethyl ethanoate trace (Numbers to verify) and the data sheet table. Answer: ethyl ethanoate; both have C=O, so 1740 does not decide; an acid would show a very broad O–H from 2500 to 3000, and X has none; the 1240 and 1050 bands are consistent with the ester C–O. Crossed mistake: "C=O and C–O, so it's an acid" (no very broad O–H, no acid; pack trap "missing OH ignored").
- **Attempt 2 (A2), linked to c08:** "Liquid Z is known to be either an alcohol or an aldehyde. Z turns warm acidified potassium dichromate from orange to green. The infrared spectrum of Z, shown, has a broad absorption centred at 3330 cm⁻¹, absorptions near 2960 cm⁻¹, a strong absorption at 1070 cm⁻¹, and no absorption between 1680 and 1750 cm⁻¹. Use the infrared data to identify the type of compound Z is, and explain why the dichromate result alone could not." The card shows the butan-1-ol trace (Z is not named on the card) and the data sheet table. Answer: dichromate goes green with primary and secondary alcohols and with aldehydes, so green alone can't decide (c08 scene 6); no absorption 1680 to 1750 means no C=O, so not an aldehyde; the broad 3330 band is an alcohol O–H and 1070 a C–O; Z is a primary or secondary alcohol (green rules out tertiary, given the c08 condition). Crossed mistake: "the band near 2960 is the O–H" (that is C–H; the pack trap of misassigning a band, turned into the commonest real slip).
- **Cause chain taught, in order:** (1) the tests stalled; IR shows bonds directly (1); (2) bonds vibrate; a bond absorbs the infrared that matches its vibration, so a dip appears (2); (3) transmittance, dips down, wavenumber backwards (3); (4) stiffer bonds and lighter atoms vibrate faster, so higher wavenumber; where the spring analogy breaks (4); (5) the data sheet gives the ranges; four rows do most of the work (5); (6) C–H is nearly everywhere, so it rarely decides (6); (7) alcohol O–H: hydrogen bonds weaken each O–H by different amounts, so the band is broad (7); (8) acid O–H: paired molecules, two hydrogen bonds, lower and very broad, plus a C=O (8); (9) C=O strong and sharp; shows a carbonyl, not which kind (9); (10) N–H narrower and weaker (10); (11) fingerprint region: match, don't assign; a strong C–O still useful (11); (12) the routine and a missing band as evidence (12); (13) bottle Y solved (13); memory aid (14); attempts (15 to 18); decision rule and handoff (19); key notes (20).
- **Learner-visible vocabulary (plain meaning at first use):** infrared (light just beyond red, which we feel as heat; one clause); vibration (stretching and bending of a bond); transmittance (the percentage of light that gets through); wavenumber (waves per centimetre, cm⁻¹); band or dip (where light was absorbed); broad (spread over a wide range); fingerprint region (below about 1500 cm⁻¹, a pattern unique to each molecule); carbonyl (a C=O group; recall).
- **Mistake scene:** none separate. "Dips are peaks" (3); "wavenumber is wavelength" (3); "any O–H band means alcohol" (8, said positively; aid); "C=O identifies the compound" (9); "N–H and O–H look alike" (10); "assign every fingerprint dip" (11); "only bands present count" (12, 13; A1); "C=O plus C–O means acid" (A1 crossed); "the 2960 band is the O–H" (A2 crossed).
- **Site sources used (site lesson 13):** the Think First (broad 3350, C–H 2950, 1050, no 1700: an alcohol), rebuilt as A2's trace; card 1 (stretching and bending; matching frequency), scene 2; card 2 (stronger, shorter bonds and lighter atoms give higher wavenumber; C=O above C–O; C–H above C–Cl), scene 4; card 3 (the data sheet table, "you do not memorise these"), scene 5; card 4 (alcohol against acid; why the acid O–H is broader: dimers; ketone and aldehyde hard to tell apart by IR), scenes 7 to 9; card 5 (ethanol, ethanoic acid, propanone; the scanning routine; "one matching band proves identity" misconception), scenes 7 to 9 and 12; the worked example's "a negative region is evidence too", scene 12; Activity 1 Q3 and SA Q3 (IR alone may not identify the exact compound), scene 9.
- **Site corrections (new; quoted from site lesson 13, read 30 Oct; for `../site-corrections-m8.md`):**
  1. Activity 1 answer 1: "1715 = C=O (carbonyl, 1680–1750); 1100 = C–O (1000–1300). With no O–H, this fits an ester (C=O + C–O, no acid O–H)." A ketone also fits: ketones absorb strongly in the 1000 to 1300 region (propanone near 1220 cm⁻¹, butanone near 1170 cm⁻¹, C–C–C stretches), and 1715 is typical of a saturated ketone, while saturated esters usually absorb near 1735 to 1750. Correct: "1715 is a C=O; the band at 1100 lies in the C–O range. With no O–H, this is consistent with an ester or a ketone. IR alone cannot decide without more evidence, such as the formula or NMR." Severity: should fix (the pre-design pack raised the same doubt).
  2. Card 5 and Activity 2: "Propanone (a ketone): strong C=O ~1700, C–H ~3000, and no O–H and no C–O → a ketone." and "Spectrum Q: strong C=O ~1715, C–H ~3000, no O–H, no C–O." A real propanone spectrum has a strong band near 1220 cm⁻¹, inside the 1000 to 1300 range, so "no band in the C–O range" is not a reliable feature of ketones. Correct: "Propanone: strong C=O near 1715 and no O–H. Its strong band near 1220 is a C–C–C stretch, not a C–O, so a band in 1000 to 1300 does not by itself show a C–O single bond." Severity: should fix.
  3. Card 5 figure caption: "Ethanoic acid: a very broad O–H dip across 2500–3000 plus a strong C=O dip near 1700 (and a C–O dip near 1100)". The carboxylic acid C–O stretch lies near 1210 to 1320 cm⁻¹ (ethanoic acid near 1295 in NIST). Correct: "(and a C–O dip near 1290)". Severity: should fix once Codex confirms against NIST (error check item 2).
  4. **Clarity note, not an error:** card 4 "Ketones and aldehydes are hard to tell apart by IR alone (need NMR/MS)". Aldehydes show a C–H stretch pair near 2720 and 2820 cm⁻¹, which is not on the data sheet. Suggest "Using the data sheet ranges, a ketone and an aldehyde look alike; NMR separates them."
  5. **Clarity note, not an error:** the key term "Fingerprint region: unique to each molecule" is standard and kept; card 1 places the dipole condition in core content while the page's own box calls it extension. Suggest moving the dipole sentence under the extension box.
  - The site extract `../site-extracts/chem-m8-l13.md` is too thin for design use. Suggest Codex regenerate it.
- **Pack questions answered (section 7):** "Which candidate contrast makes the spectrum decisive?" Stated candidate pairs where one has a bond the other lacks: cyclohexane against 2-methylpropan-2-ol (O–H and C–O), butanoic acid against ethyl ethanoate (very broad acid O–H), alcohol against aldehyde (C=O). "Check actual spectra before calling the 1715/1100 pair uniquely an ester": checked; it is not unique (site correction 1).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **IR trace** (new part in this lesson's parts file, reusable by c12 and g03: x axis 4000 to 500 cm⁻¹, linear (equal spacing per 500 cm⁻¹, as on the 2024 HSC paper; Revision 2, science check S4), ticks every 500; y axis transmittance 0 to 100%; the trace is built from a baseline near 95% minus a sum of absorption bands, each band given by centre, depth (minimum %T) and width (sharp about 15 to 40 cm⁻¹ full width; broad about 250 to 350; very broad an asymmetric shape spanning 2500 to 3300); the trace draws left to right in about 1.5 s; a "band marker" rings one band and writes its value; a "range shade" lightens a data sheet range as a vertical band behind the trace; an "empty range" shade shows a range with no dip, with a "none" chip); **vibrating bond** (two coded balls on a coded spring that stretch and bend; a heavier ball or thinner spring slows the motion visibly); **data sheet card** (the NESA table coded as a plain card); candidate strip (c08's); step strip (c09's); crossed chips, countdown ring, key notes board (shared kit).
- **Author notes (not learner copy):** (a) A vibration absorbs infrared only if it changes the molecule's dipole moment; symmetric stretches (the C=C in ethene) are IR-inactive. Not taught (site extension box). (b) Axis: linear, as the 2024 HSC Chemistry paper's question 4 IR axis uses equal spacing per 500 cm⁻¹ (science check S4, `../assets/brief120-qa/exam-page-3.png`). The scale change at 2000 cm⁻¹ seen on some printed spectra is not used. (c) Liquid-film spectra are assumed throughout (hydrogen-bonded O–H bands broad). In dilute gas-phase spectra a sharp "free" O–H appears near 3650; not taught. (d) Aldehyde C–H near 2720 and 2820 is real but off the data sheet; not taught (site clarity note 4). (e) Propanone shows a weak C=O overtone near 3410 cm⁻¹; it is omitted from the drawn trace so that it is not mistaken for an O–H, and the drawing is labelled "simplified" in the asset brief record only (not on screen). Codex to report whether any HSC-style source shows it prominently. (f) Primary amine N–H: two bands (asymmetric and symmetric stretches); the lower one can sit near 3290, just below the data sheet's 3300 lower limit, which is why the narration says "from thirty-three hundred to thirty-five hundred, overlapping" for the range and "two N H bands" for the shape, without quoting both values. Tertiary amines have no N–H bond (science check S1), so the narration says "Primary and secondary amines". (g) Pronunciations: "wave-number", "reciprocal centimetres", "two-methylpropan-two-ol", "propan-one-amine", "ethyl ethanoate" as "eth-ill eth-an-oh-ate", "butan-one-ol".

Main question: *One bottle gave no change in all three tests, so it could be cyclohexane or a tertiary alcohol. How can shining infrared light through the sample show which bonds are there?*
Entry knowledge (chem-m8-c08, c09; Module 7 functional groups): see Scope.
Stops after: reading the axes, assigning O–H (alcohol and acid), C–H, C=O, N–H and C–O, using shape, combination and missing bands, and stating what IR cannot show.
Handoff: NMR (route chem-m8-c11, delivered as c11a then c11b).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Pronunciations as in author note (g). Colour key (the c08 group colours carried over): O–H violet, C=O red, C–H grey, N–H blue, C–O amber; empty ranges in a pale cross-hatch with a "none" chip; ruled-out candidates grey with a strike. Board layout (constant): heading top-left; the IR trace fills the upper two thirds at reading size; the lower strip holds the candidate structures or the current card, one at a time. **Reading-load rule (Revision 2, learning finding 3):** in scenes 6 to 11 only the current compound's structure and trace are bright; earlier traces leave or shrink to one dim thumbnail only where the narration compares them (ethanol in scenes 8 and 10), and every earlier range card and band marker dims before the next trace draws. Check the three-bright-item rule at playback speed.

### 1. hook (bottle Y, unsolved)
> Remember the bottle that gave no change in all three tests? It could be cyclohexane, or it could be 2-methylpropan-2-ol, a tertiary alcohol that leaves dichromate orange. But one of them has an O H group and the other doesn't. An infrared spectrum shows bonds directly, so it can settle this **quickly**.

Visual: heading writes on: "Which bonds are in there?". `p03-dropper-bottle-v1.png` with the coded label "Y" (as in c08 scene 10) at left, with three result chips beside it: "no fizz", "stays orange", "stays orange" (grey chip "c08"). On "cyclohexane" and "2-methylpropan-2-ol" the two coded structures write in the lower strip, the alcohol's OH ringed violet; a bracket "tests can't tell" writes under both. On "infrared spectrum" `m8-ir-spectrometer-v1.png` slides in at right (uniform scale, about 40% of frame width), and empty IR axes write across the upper area. On "quickly" a "?" sits on the axes. Bright at the end: the heading, the two structures with the bracket.

### 2. bonds vibrate
> Every covalent bond vibrates, a bit like two balls joined by a spring. The bond stretches and squashes, and it can bend. Each kind of bond has its own natural rate of vibration. Shine infrared light through a sample, and a bond absorbs the infrared that matches its rate. That light doesn't come out the other side, so the instrument records a **dip**.

Visual: the instrument plate shrinks to the top right. Centre: the vibrating bond (two coded balls, a coded spring) stretches and squashes, then bends; tags "stretch", "bend" write as spoken. On "infrared light" a coded wavy beam crosses from left to right through a coded sample cell; one band of the beam (a teal stripe) is absorbed at the bond, and the beam leaving the right has a gap in it. On "dip" the gap maps down onto the empty axes as a single coded dip (tag "absorbed here"). Bright at the end: the vibrating bond, the dip.

### 3. reading the chart
> Up the side is transmittance, the percentage of light that gets through. An absorption shows up as a dip pointing **down**. Along the bottom is wavenumber, in reciprocal centimetres. It's the number of waves that fit in one centimetre, and a higher wavenumber means more energy. Notice that the scale runs backwards, from four thousand on the left to about five hundred on the **right**.

Visual: the axes return at reading size. On "transmittance" the y label writes "transmittance (%)" with 100 at the top and 0 at the bottom; on "down" the demo dip pulses and an arrow labels it "dip = absorbed" (grey chip "not a peak"). On "wavenumber" the x label writes "wavenumber (cm⁻¹)", with a grey chip "waves per cm, not wavelength"; on "more energy" a small grey arrow "higher energy" points left. On "right" the tick labels write 4000, 3000, 2000, 1500, 1000, 500 from left to right, and a large arrow sweeps right to left over them (tag "runs backwards"). Bright at the end: the two axis labels and the "runs backwards" tag.

### 4. what sets the position
> Think of the spring again. The atoms are the balls, and the bond is the spring. A stiffer spring vibrates faster, so a stronger bond absorbs at a higher wavenumber. So a C equals O double bond sits near seventeen hundred, above a C O single bond. Lighter balls vibrate faster too. Hydrogen is the lightest atom, so bonds to hydrogen sit at the high end, near three thousand and above. The analogy has a limit: a spring can vibrate with any energy, but a bond only absorbs particular **ones**.

Visual: two vibrating bonds side by side: a thick spring (tag "C=O: stronger") vibrating faster than a thin one ("C–O"); markers drop onto the axis at about 1715 (red) and about 1100 (amber). Then a pair with a tiny ball ("C–H": H is light) vibrating fastest, marker near 2950 (grey), with "O–H" and "N–H" markers writing beside it near 3300 (violet, blue). A grey card writes: "stronger bond → higher wavenumber; lighter atom → higher wavenumber". On "ones" a grey chip "only particular energies absorbed" writes under the springs. Bright at the end: the grey card.

### 5. the data sheet
> You don't need to memorise where each bond absorbs, because the data sheet gives the ranges. Your job is to match a dip to a range, and then use the shape and the combination of dips. Four rows do most of the work: O H, C H, C equals O and N H, with help from C **O**.

Visual: the data sheet card writes at right as nine rows (the full table under Decisions), all grey. On "Four rows" the two O–H rows (violet), C–H (grey, brightened), C=O (red) and N–H (blue) light; on "O" the C–O row lights amber. The C≡N, C=C and C–C rows stay dim. Grey tag on the card: "HSC data sheet". Bright at the end: the five lit rows.

### 6. C–H, nearly everywhere
> Start with C H. Almost every organic molecule has C H bonds, so almost every spectrum has sharp dips just below three thousand. Here's cyclohexane: it shows strong C H dips and very little else above fifteen hundred. So it rarely decides anything. Note it, and look **past** it.

Visual: the cyclohexane IR trace draws (Numbers to verify). On "just below three thousand" band markers ring 2925 and 2850 (grey), and the C–H range shade (2850 to 3300) lightens behind them. On "very little else" the 3230 to 3550 and 1680 to 1750 regions show empty-range shades with "none" chips. On "past" the C–H markers dim. Bright at the end: the two empty-range chips.

### 7. alcohol O–H: broad and rounded
> Now the O H in an alcohol. Alcohol molecules hydrogen bond to each other, and each hydrogen bond weakens its O H by a slightly different amount. So the O H bonds absorb over a spread of wavenumbers, and you get one broad, rounded band between about thirty-two hundred and thirty-five hundred. In ethanol it's centred near thirty-three **forty**.

Visual: the ethanol IR trace draws. Lower strip: ethanol's structure with OH ringed violet; three coded ethanol molecules then sit side by side with dotted hydrogen bonds between OH groups, each O–H spring drawn a slightly different length (grey chip "M7: hydrogen bonding"). On "spread" a fan of thin violet lines, each a slightly different wavenumber, merges into the broad band. On "forty" band marker "≈ 3340: O–H (alcohol), broad" (violet, bright) and the 3230 to 3550 range shade. A beat later (no narration) band marker "≈ 1050: C–O" (amber, dim; it returns in scene 11). Bright at the end: the O–H marker, the C–O marker.

### 8. acid O–H: very broad, and a C=O
> A carboxylic acid has an O H too. Acid molecules pair up, held by two strong hydrogen bonds. That weakens each O H even more, and over a wider range, so the band sits lower and is very broad, from about twenty-five hundred to three thousand, running right over the C H dips. An acid also brings a strong C equals O near seventeen ten. So a very broad O H plus a C equals O points to an **acid**.

Visual: the ethanol trace dims and shrinks to a thumbnail above; the ethanoic acid IR trace draws. Lower strip: two ethanoic acid molecules facing each other with two dotted hydrogen bonds between their COOH groups (tag "pair: two hydrogen bonds"). On "very broad" band marker spanning 2500 to 3000 "O–H (acid), very broad" (violet) with the C–H dips visible as small notches on top of it. On "seventeen ten" band marker "≈ 1715: C=O" (red). On "points to an acid" a two-chip line writes: "very broad O–H + C=O → carboxylic acid" (bright). A beat later (no narration) the ethanol thumbnail and the acid trace sit together with their O–H bands shaded, tag "same bond, different shape and place". Bright at the end: the two-chip line and the comparison tag.

### 9. C=O: strong, sharp, but which kind?
> The C equals O dip is one of the easiest to spot: strong and sharp, between sixteen eighty and seventeen fifty. Propanone, a ketone, shows it at about seventeen fifteen, with no O H band at all. But ketones, aldehydes, esters and acids all have a C equals O. So this dip tells you there's a carbonyl group, not which **kind**. The other dips, and the formula, help you decide.

Visual: the propanone IR trace draws. On "strong and sharp" band marker "≈ 1715: C=O" (red, bright) with the 1680 to 1750 range shade; on "no O H band" the 3230 to 3550 and 2500 to 3000 regions get empty-range shades with "none" chips. On "kind" four small coded structures write in the lower strip, each with its C=O ringed red: propanone (ketone), propanal (aldehyde), methyl ethanoate (ester), ethanoic acid (acid), and a bracket "all have C=O". Bright at the end: the C=O marker, the bracket.

### 10. N–H: narrower and weaker
> Primary and secondary amines have N H bonds, which absorb from thirty-three hundred to thirty-five hundred, overlapping the alcohol O H range. But an N H dip is narrower and weaker than an O H band. Propan-1-amine, with an N H two group, shows two N H **bands**.

Visual: the propan-1-amine IR trace draws; the ethanol thumbnail returns small above it. On "overlapping" the N–H range (3300 to 3500, blue) and the alcohol O–H range (3230 to 3550, violet) shade together. On "bands" band markers ring the two N–H bands (blue, tag "N–H: two narrow bands (NH₂)") and the ethanol thumbnail's broad O–H rings violet (tag "O–H: one broad band"). Lower strip: propan-1-amine with NH₂ ringed blue (grey chips "M7: amines" and "tertiary amines: no N–H"). Bright at the end: the two tags.

### 11. the fingerprint region
> Below about fifteen hundred, the spectrum gets crowded. Whole groups of atoms vibrate together, and every molecule makes its own pattern, so it's called the fingerprint region. Propan-1-ol and propan-2-ol have the same kinds of bond, so they look alike above fifteen hundred, but their fingerprints differ. Use it to match a known spectrum, and to pick out a strong C O band between one thousand and thirteen **hundred**.

Visual: the propan-1-ol and propan-2-ol IR traces draw one above the other, aligned on the same x axis (structures in the lower strip; grey chip "c02: position isomers"). On "fifteen hundred" a vertical line at 1500 writes and the region to its right shades (tag "fingerprint region"). On "look alike" the regions left of 1500 pulse together; on "fingerprints differ" the regions right of 1500 pulse, with a grey tag "different patterns". On "match" a chip "assign every dip" fades in and is crossed. On "hundred" each trace's strongest C–O band is ringed amber (about 1060 and about 1130). Bright at the end: the fingerprint tag, the crossed chip.

### 12. a routine that doesn't miss anything
> So here's a routine. Scan from the left. Is there a broad O H around thirty-three hundred? A very broad one, from twenty-five hundred to three thousand? A strong C equals O near seventeen hundred? A strong C O between one thousand and thirteen hundred? And a missing band is evidence too. No dip between sixteen eighty and seventeen fifty rules out the carbonyl candidates on your **list**.

Visual: the board clears to empty IR axes with four range shades writing in turn, left to right, one per question, each with a numbered chip: "1 O–H (alcohol): 3230 to 3550, broad?" (violet), "2 O–H (acid): 2500 to 3000, very broad?" (violet), "3 C=O: 1680 to 1750, strong?" (red), "4 C–O: 1000 to 1300, strong?" (amber). On "missing band" the C=O shade turns to an empty-range shade with "none → rule out the C=O candidates on your list" (bright); on "list" a small candidate strip writes under it (ketone, aldehyde, ester, acid struck; alcohol and alkane kept), grey tag "data-sheet range". Bright at the end: the four numbered chips and the "none" line.

### 13. bottle Y, solved
> Back to the bottle. Its spectrum has a broad, rounded band centred near thirty-three seventy. That's an alcohol O H. There's no C equals O dip, and there's a strong band near twelve hundred, in the C O range. Cyclohexane has no O H and no C O, so it can't give these dips. The bottle holds **2-methylpropan-2-ol**. The spectrum found the O H that the tests couldn't **see**.

Visual: the bottle Y plate and its three chips return small at left. The 2-methylpropan-2-ol IR trace draws (labelled only "bottle Y"); the cyclohexane trace from scene 6 sits faint beneath it on the same axis. Step 1 chip lights: band marker "≈ 3370: O–H (alcohol), broad" (violet). Step 3 chip: empty-range shade "none". Step 4 chip: band marker "≈ 1200: C–O" (amber). On "can't give these dips" cyclohexane's structure greys and strikes in the lower strip. On "2-methylpropan-2-ol" its structure glows, OH ringed violet, and the bottle label writes "2-methylpropan-2-ol". On "see" a grey line writes: "tests: no 1° or 2° alcohol. IR: an O–H is there." Bright at the end: the three step markers and the glowing structure.

### 14. memory aid
> Here's a picture to remember: beard plus sword means acid. The very broad acid O H hangs down like a beard, and the sharp C equals O is the sword. A rounded O H with no sword points to an **alcohol**.

Visual: the board clears. Handwritten line: "Beard + sword = acid." Under it the ethanoic acid trace with its very broad O–H shaded violet (tag "beard") and its 1715 dip ringed red (tag "sword"). On "alcohol" the ethanol thumbnail appears beside it, its rounded O–H shaded (tag "rounded, no sword: alcohol"). Hold about 2 seconds.

### 15. attempt 1 (countdown, 10 seconds)
> Your turn. Compound X is either butanoic acid or ethyl ethanoate. Use the spectrum and the band values on the card to identify X, and justify your answer. Pause here to answer.

Visual: the board clears. Question card, worded as printed (A1 under Decisions), with the tag "HSC-style question, written for HSCScience". The ethyl ethanoate IR trace sits under the text with no markers; the data sheet card sits small at the right. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no range shades, no structures).

### 16. feedback 1 (brief)
> Both candidates have a C equals O, so the dip at seventeen forty doesn't decide. The missing band does. An acid would show a very broad O H from twenty-five hundred to three thousand, and X has none. The C O dips at twelve forty and ten fifty fit an ester. So X is **ethyl ethanoate**. Calling it an acid because it has C equals O and C O is the **slip**: no beard, no acid.

Visual: the card stays, shrunk to the top. On "seventeen forty" "a strong sharp absorption at 1740 cm⁻¹" is underlined and the band ringed red (tag "both have C=O"). On "missing band" "no broad absorption between 2500 and 3550 cm⁻¹" is underlined and the 2500 to 3000 range gets an empty-range shade, "none: no acid O–H". On "ester" "1240 cm⁻¹ and 1050 cm⁻¹" are underlined and both bands ringed amber. On "ethyl ethanoate" its structure writes in the lower strip and glows; butanoic acid writes beside it and strikes. On "slip" a chip "C=O + C–O, so an acid" fades in and is crossed (caption "no beard, no acid"). Hold about 1 second.

### 17. attempt 2 (countdown, 10 seconds)
> Last one. Liquid Z is either an alcohol or an aldehyde, and it turns acidified dichromate green. Use the spectrum on the card to identify the type of compound, and explain why the dichromate result alone couldn't. Pause here to answer.

Visual: question card, worded as printed (A2 under Decisions). The butan-1-ol IR trace sits under the text, labelled only "Z", with no markers; the data sheet card small at right. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 18. feedback 2 (brief)
> Green only shows something was oxidised, and aldehydes do that as well as primary and secondary alcohols. Nothing between sixteen eighty and seventeen fifty means no C equals O, so Z isn't an aldehyde. The broad band at thirty-three thirty is an alcohol O H. So Z is a primary or secondary **alcohol**. Calling the dips near twenty-nine sixty the O H is the **trap**: they're C H.

Visual: the card stays, shrunk to the top. On "oxidised" "turns warm acidified potassium dichromate from orange to green" is underlined; a grey chip "green: 1° or 2° alcohol, or an aldehyde (c08)". On "no C equals O" "no absorption between 1680 and 1750 cm⁻¹" is underlined and that range gets an empty-range shade "none: no C=O"; the "aldehyde" option strikes. On "alcohol O H" "broad absorption centred at 3330 cm⁻¹" is underlined, the band ringed violet; "1070 cm⁻¹" is underlined and ringed amber (tag "C–O", no narration). On "alcohol" a result chip "1° or 2° alcohol" glows (bright). On "trap" a chip "2960 = O–H" fades in and is crossed (caption "2960 is C–H"). Hold about 1 second.

### 19. decision rule and handoff
> So, when you meet an infrared spectrum, scan from left to right. Check the O H region and its shape, then the C equals O, then the C O. Name each bond from the data sheet, say what's missing, and combine it with the formula and the mass. **Next**, NMR, which shows how the carbon and hydrogen atoms are arranged.

Visual: the board clears. c09's step strip builds one step per clause at reading size: "1 O–H? broad (alcohol) or very broad with C=O (acid)" → "2 C=O? strong, sharp, 1680 to 1750" → "3 C–O? 1000 to 1300" → "4 name each bond; say what's missing; combine with formula and MS". On "Next" a chip "Next: How does NMR reveal carbon environments?" slides in at the lower right. Hold about 2 seconds.

### 20. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Bonds vibrate. A bond absorbs the infrared that matches its vibration, giving a dip in transmittance. Wavenumber (cm⁻¹) runs from about 4000 on the left to about 500 on the right. Stronger bonds and lighter atoms absorb at higher wavenumber.
2. Alcohol O–H: broad, rounded, 3230 to 3550 (hydrogen bonding). Acid O–H: very broad, 2500 to 3000, with a strong C=O near 1700 (paired molecules).
3. C=O: strong and sharp, 1680 to 1750: a carbonyl, not which kind. N–H: 3300 to 3500, narrower and weaker than O–H. C–H (near 3000) is in almost every spectrum.
4. Fingerprint region (below about 1500): match, don't assign. A missing band is evidence: no dip at 1680 to 1750 rules out the C=O candidates on your list.

Memory aid (large, on the notes screen): *Beard + sword = acid.* Second line: *A missing band rules a group out.*

## Teaching checks

- **Does it explain causes?** Why a dip appears: the bond absorbs the matching infrared, so less gets through (2). Why the axis is "backwards": the convention puts high energy on the left (3, said as a fact to notice). Why C=O sits above C–O: a stronger bond is a stiffer spring (4). Why bonds to H sit high: H is the lightest atom (4). Why C–H rarely decides: nearly every organic molecule has it (6). Why the alcohol O–H is broad: hydrogen bonds weaken each O–H by different amounts (7). Why the acid O–H is lower and broader: paired molecules with two strong hydrogen bonds (8). Why C=O doesn't identify the compound: four families have it (9). Why the fingerprint region isn't assigned: whole groups vibrate together (11). Why a missing band counts: a group that is present would absorb there (12, 13).
- **Misconceptions addressed:** "dips are peaks" (3); "wavenumber is wavelength" (3); "any O–H means alcohol" (8, aid); "C=O identifies the compound" (9); "N–H looks like O–H" (10); "assign every fingerprint dip" (11, crossed chip); "only bands present count" (12, 13, A1); "C=O plus C–O means acid" (A1 crossed); "the 2960 band is the O–H" (A2 crossed).
- **One idea at a time:** one bond type per scene (6 to 10), each on its own compound's trace; band markers one per spoken value; the routine builds one range per question (12) and appears as the step strip only in the handoff (19).
- **Response opportunity:** two unseen HSC-style tasks with every condition, the trace and the data sheet visible (A1: both candidates, every band including the missing range; A2: the candidate classes, the dichromate result, every band including the missing range), 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 28 s and 28 s.
- **Avoided double teaching:** the three tests and the green caveat (c08 chips; bottle Y and A2 reuse them), MS's role (c09, one clause in the handoff), hydrogen bonding (M7 chip), naming and functional groups (read only), isomers (c02 chip in scene 11).
- **Dotpoint coverage:** `C8-IQ2-02`, the infrared part: the process (absorption by vibrating bonds) and its use in analysing structure (assigning groups, shapes, combinations, missing bands, limits). MS was c09; NMR is c11a and c11b; combined analysis c12 and g03.
- **Out of scope by design:** dipole selection rule; C≡N, C=C, C–C narration; aldehyde C–H doublet; gas-phase free O–H; instrument optics.

## Numbers used (author note: every value, formula and observation)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Data sheet ranges (cm⁻¹) | N–H 3300–3500; O–H (alcohols) 3230–3550 broad; C–H 2850–3300; O–H (acids) 2500–3000 very broad; C≡N 2220–2260; C=O 1680–1750; C=C 1620–1680; C–O 1000–1300; C–C 750–1100 | 5, 12, 15 to 18, notes |
| Axis | 4000 to 500 cm⁻¹ left to right; transmittance 0 to 100% | 3, notes |
| Bottle Y candidates | cyclohexane C₆H₁₂; 2-methylpropan-2-ol (CH₃)₃COH | 1, 6, 13 |
| Positions in scene 4 | C=O near 1700; C–O near 1100 (inside 1000 to 1300); bonds to H near 3000 and above | 4 |
| Ethanol | O–H ≈ 3340 broad; C–O ≈ 1050 | 7, 8, 10, 14 |
| Ethanoic acid | O–H very broad 2500 to 3000 (and beyond); C=O ≈ 1715 | 8, 14 |
| Propanone | C=O ≈ 1715; no O–H | 9 |
| Propan-1-amine | two N–H points in 3300 to 3500 region | 10 |
| Propan-1-ol, propan-2-ol | strongest C–O ≈ 1060 and ≈ 1130 | 11 |
| Bottle Y (2-methylpropan-2-ol) | O–H ≈ 3370 broad; C–O ≈ 1200; no C=O | 13 |
| A1 ethyl ethanoate | C–H ≈ 2980; C=O 1740; C–O 1240 and 1050; no broad 2500 to 3550 | 15, 16 |
| A2 butan-1-ol (unnamed Z) | O–H 3330 broad; C–H ≈ 2960; C–O 1070; no 1680 to 1750 | 17, 18 |

## Numbers to verify (all values, repeated for Codex)

Each trace is drawn from the band list below: centre (cm⁻¹), minimum transmittance (%T), and width (sharp, medium, broad, very broad). Provisional values (Revision 1) are from memory of liquid-film spectra, with a baseline about 95%; measured values (Revision 2) are marked as such. **Codex checks each listed band against the measured liquid-phase (film or ATR) spectrum, records the SDBS number or NIST ID, corrects centres by more than 15 cm⁻¹ and depths by more than 15 %T, adds any missing band deeper than 50 %T, and reports any change that alters a narrated or on-card value** (the narrated values are marked with an asterisk). Fingerprint bands shallower than about 70 %T may be dropped from the drawing.

- **Measured source (Revision 2, science check S3 and S6):** three compounds now have measured neat-liquid NIST transmission curves (Coblentz records; `../assets/m8c10-ir-bands.json`, point CSVs and JCAMP files in `../assets/brief120-nist/`). Their band lists below are the measured centres and actual recorded %T (not renormalised to a 95% baseline); draw them from the point CSVs. The other seven compounds are **not certified**: their values stay as Revision 1 estimates, marked "provisional", and must not be drawn in a build until Codex supplies a measured liquid-phase record of the same phase and method (no gas, solution or dispersion-index substitutes; ATR and transmission depths are not interchangeable).
- **Cyclohexane (scenes 6, 13; measured, NIST Coblentz 6045, neat liquid):** 2932 (4.1, C–H); 2857 (14.3, C–H); 1455 (46.9); 1258 (84.1); 1040 (86.2); 904 (77.8); 863 (79.2). No band 3230 to 3550 or 1680 to 1750.* Narrated claims confirmed.
- **2-methylpropan-2-ol, bottle Y (scene 13; measured, NIST Coblentz 6880, neat liquid):** 3361* (16.5, broad, half-depth width about 305, O–H); 2969 (12.1, C–H); 2915 (34.5); 2875 (42.7); 1469 (34.1); 1378 (21.4); 1362 (16.3); 1235 (35.3); 1198* (15.8, C–O); 909 (23.5); 745 (46.7). No band 1680 to 1750.* Narrated "near thirty-three seventy" and "near twelve hundred" stay within 15 cm⁻¹.
- **Ethanol (scenes 7, 8, 10, 14; provisional):** 3340* (15, broad, O–H); 2975 (20, sharp); 2930 (40, sharp); 2890 (45, sharp); 1450 (55, medium); 1380 (55, medium); 1330 (70, medium); 1090 (35, sharp); 1050* (10, sharp, C–O); 880 (40, sharp).
- **Ethanoic acid (scenes 8, 9 strip only, 14); provisional:** very broad O–H from about 3300 to 2500, deepest about 3000 (30, very broad)*; small C–H notches on it near 2940; 1715* (5, sharp, C=O); 1410 (40, medium); 1295 (20, medium, C–O; site correction 3); 935 (45, broad); 620 (55, medium).
- **Propanone (scene 9); provisional:** 3005 (85, sharp); 2965 (85, sharp); 2920 (88, sharp); 1715* (5, sharp, C=O); 1420 (45, medium); 1360 (25, sharp); 1220 (20, medium, C–C–C; site correction 2); 1090 (70, sharp); 530 (50, sharp). Weak overtone near 3410 omitted (author note e). No band 2500 to 3550 deeper than about 85 %T.*
- **Propan-1-amine (scene 10); provisional:** 3370 (60, medium, N–H); 3290 (65, medium, N–H) (two narrow points*; author note f); 2960 (20, sharp); 2930 (25, sharp); 2875 (30, sharp); 1610 (60, broad, N–H bend); 1465 (50, medium); 1380 (65, sharp); 1070 (55, medium); 800 (40, broad, N–H wag).
- **Propan-1-ol (scene 11); provisional:** 3330 (15, broad); 2960 (20, sharp); 2935 (30, sharp); 2875 (35, sharp); 1460 (50, medium); 1380 (60, medium); 1060* (10, sharp, C–O); 970 (40, sharp); 890 (60, sharp).
- **Propan-2-ol (scene 11); provisional:** 3340 (15, broad); 2970 (15, sharp); 2930 (40, sharp); 2880 (45, sharp); 1465 (55, medium); 1380 (45, sharp); 1370 (45, sharp); 1160 (35, sharp); 1130* (20, sharp, C–O); 950 (25, sharp); 815 (50, sharp). Claim: the two traces look alike above 1500 and differ below.*
- **Ethyl ethanoate, A1 (scenes 15, 16); provisional:** 2985* (60, sharp); 2940 (70, sharp); 1740* (5, sharp, C=O); 1445 (50, medium); 1375 (30, sharp); 1240* (5, medium, C–O); 1050* (20, sharp, C–O); 940 (55, sharp); 850 (65, sharp); 635 (60, sharp). No band 2500 to 3550 deeper than about 85 %T.*
- **Butan-1-ol, A2 Z (scenes 17, 18; measured, NIST Coblentz 6915, neat liquid):** 3318 (17.0, broad, half-depth width about 380, O–H; a shoulder at 3412, 19.2); 2951 (15.5, C–H); 2927 (15.5); 2903 (18.1); 2865 (16.8); 1461 (26.8); 1427 (36.5); 1374 (32.5); 1329 (46.7); 1106 (37.7); 1068* (19.6, C–O); 1036 (22.5); 1004 (32.9); 945 (33.8); 838 (43.9); 728 (47.2); 659 (48.8); 635 (49.0); 613 (49.5). No band 1680 to 1750.* The card's printed values (broad absorption centred at 3330, C–O near 1070) stay within 15 cm⁻¹ of the measured centres; the card keeps them.
- **Structures named on screen:** propanal CH₃CH₂CHO and methyl ethanoate CH₃COOCH₃ (scene 9, structures only, no trace); butanoic acid CH₃CH₂CH₂COOH (A1 candidate, no trace).
- **Data sheet:** check the nine ranges and the "broad" and "very broad" notes against the current NESA Chemistry data sheet (2024 exam pack).
- **Site claims to check:** site corrections 1 to 3 (ketone bands in 1000 to 1300; ethanoic acid C–O near 1295 rather than 1100).

## Memory aid check

- **"Beard + sword = acid."** From the Module 8 bank entry "Broad means O–H; sharp and strong near 1700 means C=O" (*Shortcut*), which names the acid's very broad O–H the "beard" and the C=O the "sword". Assumptions checked: liquid-phase spectra (author note c); "beard" means the very broad band 2500 to 3000 overlapping C–H, not the higher rounded alcohol band (scene 8 shows both); the sword alone is any carbonyl (scene 9 says so); an O–H with no sword points to an alcohol among O-containing candidates without nitrogen (N–H can sit in the same region; scene 10 gives the shape difference). Introduced after scenes 7 to 13.
- **"A missing band rules a group out."** Written for this lesson from site worked example step 1 ("A negative region is evidence too") and c08's "every no rules a candidate out". Assumption: the group, if present, absorbs clearly in that range (true for C=O and hydrogen-bonded O–H in liquids, which are the only missing bands used).
- **Considered, not used:** the bank's "Don't try to assign the whole fingerprint region" (*Trap*), used as the scene 11 crossed chip rather than as an aid; "Mass, groups, map" (c12).

## Narration length estimate

Revision 2 count (31 Oct; same rules): **6,312 characters** (Revision 1: 6,293), 20 headings. Characters per scene (1 to 20): 300, 348, 379, 488, 264, 274, 341, 391, 372, 258, 417, 386, 366, 196, 176, 366, 235, 372, 308, 75. Speech about 475 s; with the same holds, countdowns and notes hold: **about 9.5 minutes (568 s)**, 2 s under the 570 s ceiling. Revision 2 added 19 characters (scene 10's "Primary and secondary", paid for in part by "two N H bands" replacing "two small points side by side"; scene 12's candidate-list wording). The reserve trims below are unchanged and are now the named cut if the voiced take runs long: first scene 4's "So a C equals O double bond sits near seventeen hundred, above a C O single bond." (about 6 s).

Earlier count, Revision 1 count (30 Oct; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted, bold markers removed, summed per scene): **6,293 characters**, 20 headings (19 narrated scenes plus key notes). Characters per scene (1 to 20): 300, 348, 379, 488, 264, 274, 341, 391, 372, 252, 417, 373, 366, 196, 176, 366, 235, 372, 308, 75. At 13.3 characters per second the speech is about 473 s; add about 19 s of holds (1 s after scenes 1 to 13 and both feedbacks; 2 s for the memory aid and the handoff), 20 s for two countdowns and about 55 s more of the quiet notes hold: **about 9.5 minutes (567 s)**, inside the 5,500 to 6,800 character band and 3 s under the 570 s ceiling. The first draft ran 7,169 characters; it was cut by shortening the two attempt prompts (the full worded question and band values stay on the card, as the rules require), and by removing restated lines in scenes 1, 3, 4, 5, 6, 7, 8, 11, 13 and 18. Feedback: scene 16 about 28 s, scene 18 about 28 s. The margin is small: if the voiced take runs over 570 s, trim first scene 4's "So a C equals O double bond sits near seventeen hundred, above a C O single bond." (about 6 s; the markers stay on screen), then scene 11's first sentence (about 4 s), then shorten the scene 13 holds. Do not cut below 5,500 without replacing the content.

## Assets

Have (inspected 30 Oct; all transparent PNG; scale uniformly only, never stretched):
- `public/assets/chemistry/m8-ir-spectrometer-v1.png` (2000 × 2000; a cream and blue benchtop infrared spectrometer with its lid raised, showing a dark sample compartment with a small round sample plate and a press arm, and a screen at right). Scene 1 at about 40% of frame width, then a thumbnail at top right in scene 2. It reads as a modern ATR instrument; the narration says nothing about the optics, so no conflict.
- `p03-dropper-bottle-v1.png` (clear dropper bottle, blank cream label; scenes 1 and 13, with the coded label "Y", as in c08).
Considered, not used: `m8-mass-spectrometer-v1.png` (c09); `m8-nmr-machine-v1.png` (c11a); sample containers for each compound (the pre-design pack listed them as needed; the structures and traces carry the meaning, and five more bottles would add clutter, so none are commissioned).

Need: **no new plates.**

Coded: IR traces (ten compounds), band markers, range shades, empty-range shades, vibrating bond, light beam and sample cell, hydrogen-bond diagrams, data sheet card, candidate strip, step strip, structures, crossed chips, countdown ring, key notes board. No spectrum is painted. No people or hands.

## Codex asset brief

Start only after the learning review and science check pass and the owner gives the go-ahead.

1. **No new painted plates.** All spectra are coded from "Numbers to verify".
2. **Check, no new art.** Confirm that `m8-ir-spectrometer-v1.png` has clean alpha edges at 40% of a 1920 px frame over the explainer's dark background, and record its alpha bounds in the provenance file.
3. **Spectrum data package (Revision 2: partly delivered).** For each of the ten compounds under "Numbers to verify", deliver a band list (centre, minimum %T, approximate full width at half depth) traced from a measured liquid-phase spectrum, with its source ID, phase and path length, in `assets/m8c10-ir-bands.json`, so the build draws measured shapes rather than estimates. Delivered: cyclohexane, 2-methylpropan-2-ol and butan-1-ol (NIST neat liquid). Still needed: ethanol, ethanoic acid, propanone, propan-1-amine, propan-1-ol, propan-2-ol and ethyl ethanoate, all in the same phase and method (SDBS liquid-film records are acceptable if digitised; no gas, solution or dispersion-index substitutes). Do not deliver images of spectra. **Changed in Revision 2; flag to Codex.**

## Codex error-check brief

Error-only check, together with the learning review and science check (Codex writes both; brief 109 practice). Report errors; do not restyle or rewrite:
1. Re-check every value under "Numbers used" and "Numbers to verify", and the narration, screen text, attempts and key notes against them.
2. Check the nine data sheet ranges against the current NESA Chemistry data sheet; check every band against measured spectra (asterisked values first) and site corrections 1 to 3 with named sources.
3. Confirm the two attempts are original (not copied from or closely paraphrasing a NESA paper or site L13's Think First, Activities 1 and 2, the MC set, the worked example or Short Answer Q1 to Q3), and that every condition each model answer needs is on its card.
4. Axis convention settled in Revision 2 (linear, from the 2024 paper; author note b): confirm only that the build follows it.
5. Learning review (`../../student-learning-review.md`) from the stated entry knowledge, especially whether scene 4's analogy and its stated limit are clear, whether ten traces in one video are too many to follow (scenes 6 to 11 each use a new compound), and whether scene 13 lands as a payoff after a gap of two videos from c08.
6. Confirm no em dash (U+2014) anywhere in this file, Australian spelling in narration and screen text, and the narration character count and per-scene counts by script with the build parser rules.
7. Add site corrections 1 to 3 to `../site-corrections-m8.md` (owner record only; the site is read-only here), once item 2 confirms them, and log clarity notes 4 and 5 and the thin extract separately.

## YouTube metadata (draft)

Title: IR Spectroscopy: Reading O–H, C=O, C–H and N–H Bands | Year 12 Chemistry

(Title length: 72 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year12/module8/lesson13.sa.html

The functional group tests couldn't tell cyclohexane from a tertiary alcohol. An infrared spectrum can. Learn why bonds absorb infrared, how to read transmittance and wavenumber (and why the scale runs backwards), why stronger bonds and lighter atoms absorb higher, and how to use the data sheet ranges. See why an alcohol's O–H band is broad and rounded, why an acid's is very broad and low with a C=O beside it, why a C=O dip shows a carbonyl but not which kind, how N–H differs from O–H, what the fingerprint region is for, and why a missing band is evidence. Beard plus sword means acid. Two practice questions are written for HSCScience in the HSC style; they are not official NESA questions.

Chemistry 2017: Year 12 Module 8, Applying Chemical Ideas.
Syllabus dotpoint (NSW Chemistry Stage 6, 2017, Module 8):
"investigate the processes used to analyse the structure of simple organic compounds addressed in the course, including but not limited to:
- proton and carbon-13 NMR
- mass spectrometry
- infrared spectroscopy (ACSCH130)"
This video covers infrared spectroscopy; NMR is next.
Official 2017 course: https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017

Prerequisites: How do simple tests distinguish organic groups? How does mass spectrometry constrain a structure? Next: How does NMR reveal carbon environments?

#Year12Chemistry #Spectroscopy #HSCScience

- **syllabusDotpoints:** the quoted dotpoint above, bullets kept as printed. `verifyWording`: true (checked against `programme/syllabus/chem-2017-y12.json`, C8-IQ2-02, p58).
- **Playlist:** Year 12 Chemistry: Module 8, Applying Chemical Ideas (2017 syllabus), playlist order 17.
- Title check: the hyphens in "O–H", "C–H" and "N–H" are en dashes (U+2013), as in the site; not em dashes. If the upload tool rejects them, use plain hyphens.

## Open decisions

- **Next video title (handoff chip and metadata).** The route JSON still holds chem-m8-c11 ("How does NMR reveal carbon and hydrogen environments?"); review change 2 splits it into c11a (carbon-13) and c11b (proton), not yet applied in the JSON. This design points to c11a with a provisional title, "How does NMR reveal carbon environments?". Root to confirm when the split is applied; the route entry's `next` would become chem-m8-c11a (root applies; this design does not edit the JSON).
- **Number of traces (ten; Revision 2 corrects the count).** If the learning review finds scenes 6 to 11 too many compounds, the fallback is to merge scene 10 (N–H) into the scene 12 routine as a 4 s on-screen trace with one sentence, and to drop propan-2-ol's trace from scene 11 (keep the "fingerprint" idea on propan-1-ol with a crossed "assign every dip" chip). Do not cut below 5,500 characters without replacing the content.
- **Spectrum data (open; science check blocker S3).** Three of ten compounds are measured; seven stay provisional and block the build of their scenes until measured (Codex asset brief item 3).
- **Site corrections 1 to 3** depend on the NIST and SDBS checks.
- **Lesson key** (`m8c10`): root to confirm when adding the LESSONS entry.

## Build ids

Lesson key `m8c10` (route chem-m8-c10). Suggested explainer folder `src/explainer/lessons/chem-m8-c10`; build folder `docs/production/claude-pm/lessons/m8c10` (root to confirm). Import, not copy: c08's candidate strip and structure style; c09's step strip; chem-m6-c13's line graph axes as the trace base. The IR trace, band marker, range shades and vibrating bond are new and should live in this lesson's parts file so c12 and g03 can import them.

In order (kebab-case; 20 scene headings, all `### N.`): hook, bonds-vibrate, reading-chart, what-sets-position, data-sheet, ch-everywhere, alcohol-oh, acid-oh, carbonyl, nh, fingerprint, routine, bottle-y, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, decision-handoff, key-notes.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen, card on screen during and after). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `checks/m8c10-learning-review.md` and `checks/m8c10-claude-science-check.md`.
