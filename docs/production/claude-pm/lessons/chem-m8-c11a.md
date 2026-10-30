# M8 C11a: How does carbon-13 NMR count carbon environments? Shielding sets the shift, symmetry merges carbons, and the data sheet names each peak (design)

Status: Revision 2 (31 Oct): learning review and science check resolved, except science blocker S3 (inspected spectra for every shift), which stays open as a build gate; needs that data and the Codex error check before voicing.

Earlier status, Revision 1 (30 Oct): needs learning review and science check (Codex), then Codex error check before voicing.

Revision 2 changes (31 Oct; resolving `../checks/m8c11a-learning-review.md` (learning L1 to L3) and `../checks/m8c11a-claude-science-check.md` (science S1 to S3)):
- Memory aid line 2 (learning L1 and science S1, merged): scene 11 now says "And further left means more deshielded, so check the data sheet to name each peak's group." The handwritten line and notes-screen line read "Further left: more deshielded. Check the data-sheet group." The memory aid check explains the change; the oxygen cause chain (scene 3, key note 2) is unchanged.
- Swap test (learning L2): scene 6 now draws both propanols in full (every atom and bond, OH labelled). A faint copy of propan-2-ol's whole structure reflects across the mirror line and matches exactly, OH still on C2; the same flip on propan-1-ol fails (the OH lands on C3, tag "ends differ"). Feedback 1 shows 2-methylpropan-2-ol's whole structure matching after a third of a turn. No narration added.
- Two reasons for one line (learning L3, optional): scene 8's two insets are now separate boxes, "reason 1: ¹³C rarely next to ¹³C" and "reason 2: decoupling", with inset 1 dimmed before inset 2.
- Spin populations (science S2): scene 2's arrows settle nearly half and half, with one more arrow with the field, and a grey tag "only a tiny excess with the field".
- Shift values (science S3, blocker, open): every shift is marked provisional under Numbers to verify, with a build gate (inspected SDBS accession and solvent per compound; values more than 1 ppm off change). The environment counts and data sheet ranges are confirmed.
- Length: 5,740 characters (Revision 1: 5,753), about 523 s.
- Codex asset brief: unchanged (`m8-nmr-sample-tube-v1.png`, shared with c11b).
- Declined: none. Open items for the Codex error check: inspected SDBS (or other named database) carbon-13 records, with accession and solvent, for propan-1-ol, propan-2-ol, ethanol, ethyl ethanoate, 2-methylpropan-2-ol, methyl ethanoate and propanoic acid (the drawn and spoken shifts), and for the count-only compounds if any shift is shown; root to flag the memory aid bank's "Further left means closer to an electronegative atom" entry.

Narration 5,740 characters (Revision 2, summed per scene), 17 scenes (including the key notes hold), about 8.7 minutes (523 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: the first of two NMR videos in the Module 8 Chemistry spectroscopy block, made by route review change 2 (`../../module8-route-review-claude.md`), which splits chem-m8-c11 into c11a (carbon-13 NMR, this video) and c11b (proton NMR). Format, voice and staging follow `chem-m8-c08.md` (Revision 1) and `chem-m8-c04.md` (Revision 1): one current card in the right half, earlier lines dim, crossed chips, the countdown ring, the key notes board. **Recalled, not re-taught:** chem-m7-c01 (naming and drawing chains: propan-1-ol, butan-2-one and the other names here are read, not taught); chem-m7-c02 (isomers share a formula: the propanol pair, the four C₄H₁₀O alcohols and the C₃H₆O₂ acid and ester are recalled as isomers); chem-m8-c09 at its route level only (a mass spectrum gives the molecular ion, so isomers share a molecular ion); chem-m8-c10 at its route level only (an IR spectrum links absorption regions to bonds, so two alcohols both show an O–H band). c09 and c10 are being designed in parallel, so this design uses only those two route facts. The new teaching here is: what an NMR machine detects (nuclei as tiny magnets, radio waves, resonance); why the shift changes (electrons shield, electronegative atoms deshield); the ppm scale read right to left from TMS at zero; peaks count carbon environments; symmetry merges carbons that swap places; why carbon-13 peaks are single lines whose heights are not counts; reading shifts off the data sheet, and settling overlapping ranges with the formula. Pre-design pack: `../pre-design/chem-m8-proton-carbon-nmr.md`. Site extract: `../site-extracts/chem-m8-l14.md` (thin: key ideas are card headings only), so site lesson 14 (`C:/Users/kygs/hscscience/subjects/chemistry/year12/module8/lesson14.sa.html`) was read in full (30 Oct, read-only). Site corrections: `../site-corrections-m8.md` records none for L14; new corrections below (shared with c11b). Route entry: `chem-m8-c11` in `../../module8-video-route-draft.json` ("How does NMR reveal carbon and hydrogen environments?", playlist order 18, core, prerequisites chem-m7-c02, chem-m8-c09, next chem-m8-c12; start "Count chemically distinct environments."; stop "Use chemical shifts, integration and splitting to test structures."). This design takes the carbon half of that start and stop; c11b takes integration and splitting.

**Entry knowledge:** Module 7 naming and isomers (above); a molecular ion gives the molar mass (c09 route); IR shows bonds such as O–H (c10 route); electronegativity (Year 11: oxygen pulls bonding electrons towards itself). **Start:** two isomers that the molecular ion and the O–H band can't separate. **Stop:** the student can predict the number of carbon-13 peaks for a named molecule using symmetry, read each shift off the data sheet table, and use the count, the shifts and the formula to choose between candidates. **Next handoff:** chem-m8-c11b, proton NMR (the same shielding idea, plus areas and splitting).

Owner rules applied: the NMR machine and the sample tube as painted plates listed by filename, never stretched; spectra are coded diagrams only (the new NmrSpectrum component), with realistic shifts for the named compounds, never AI images; molecules come from the coded molecule kit (`src/explainer/lessons/chem-m7-c01/molecules.tsx`), with each carbon environment ringed in the same colour as its peak; nuclear magnets, field lines and electron clouds coded as abstract diagrams; no people, hands or faces (the tube drops into the magnet as coded motion); at most about three bright text items, earlier lines dim; one reasoning stage at a time; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; no givens card, givens underlined in the feedback as they are used; brief feedback (answer, key reason, one crossed mistake, about 15 to 30 s); original HSC-style questions only; Australian spelling; no em dashes; conversational narration; no absolute claims ("usually", "points to", "fits").

Syllabus dotpoint (as printed; NSW Chemistry Stage 6, 2017, p58; `C8-IQ2-02` is this project's local catalogue ID, not a code printed in the syllabus), quoted from `../../programme/syllabus/chem-2017-y12.json`:

"investigate the processes used to analyse the structure of simple organic compounds addressed in the course, including but not limited to:
- proton and carbon-13 NMR
- mass spectrometry
- infrared spectroscopy (ACSCH130)"

This video covers carbon-13 NMR. Proton NMR is c11b; mass spectrometry is c09; infrared is c10; combining them is c12.

**Boundary:** starts from the propanol pair and stops when the student can count, assign and use carbon-13 peaks. It teaches: NMR-active nuclei (¹H, ¹³C; not ¹²C) as tiny magnets that line up with or against a strong field; radio waves of the right frequency flip them (resonance); electrons shield a nucleus; an electronegative neighbour pulls electron density away, deshielding it, so it needs a slightly higher frequency; chemical shift in ppm, read right to left, zero set by TMS, TMS not counted; carbon-13 shifts about 0 to 220 ppm; carbons in identical surroundings share an environment and a peak; symmetry (the swap test); about 1 in 100 carbons is carbon-13, and decoupling stops hydrogens splitting carbon signals, so each environment is one line; peak heights are not carbon ratios; the data sheet's carbon-13 table; overlapping ranges settled by the formula and the other peaks. **Not here:** proton NMR, integration and n+1 splitting (c11b); why ppm makes spectra comparable across machines (author note a); deuterated solvents (author note b; neither the syllabus nor site L14 names them); the magnet's hardware, spin quantum numbers, energy-gap equations; aromatic rings beyond the data sheet row (not a Module 7 group); combining MS, IR and NMR (c12).

## Decisions

- **Main question:** *Propan-1-ol and propan-2-ol share a formula, a molecular ion and an O–H band. How can carbon-13 NMR tell them apart at a glance?* Heading on screen: "How many kinds of carbon?"
- **Order: carbon first (route review change 2).** The site teaches shared basics, then proton, then carbon. The video split puts carbon first: one line per environment and shifts read off the data sheet make the cleanest first use of "peaks count environments". c11b then adds areas and splitting to the same idea. The shared basics (magnet, radio waves, shielding, ppm, TMS) are taught here once and recalled in c11b.
- **Hook pair (pack open question 7, "which examples avoid a crowded shift table").** Propan-1-ol (three peaks, about 64, 26 and 10 ppm) against propan-2-ol (two peaks, about 64 and 25 ppm). Both are C₃H₈O (molar mass 60.1; c09 route recall) and both are alcohols (O–H band; c10 route recall), so the count does the work and the shift table is not needed yet. The narration says only that their molecular ions and O–H bands match, not that MS or IR cannot separate them (fragments differ; author note c).
- **Shielding as cause, before the name "chemical shift".** Electrons shield the nucleus; oxygen pulls electrons away; the carbon feels more field and needs a slightly higher frequency; that position is the chemical shift. The site's one-line "electronegative or nearby groups deshield" is expanded into this subject-action chain (site clarity note 6).
- **TMS: one sentence and a label.** The site names TMS as the 0 ppm reference (key terms, learning intentions, the comparison card), and every spectrum shows a TMS line, so students need to know not to count it. Why TMS is chosen (12 equivalent hydrogens and 4 equivalent carbons, highly shielded, unreactive, volatile) stays in author note a. **Deuterated solvent:** not in the syllabus or on the site, and only needed to explain solvent peaks in proton spectra, so it is an author note only (author note b; c11b carries the same note).
- **Symmetry: the swap test (bank aid).** "Carbons that swap places share a peak" (Module 8 bank, ¹³C shortcut, whose example is propan-2-ol). Shown with a coded mirror line and the two carbons swapping along an arc. Ketone pair for practice: butan-2-one (four peaks) against pentan-3-one (five carbons, three peaks). Propanone is held back for the key notes example list only.
- **Single lines and heights (site card 3, Activity 1 Q3, comparison card, common error).** Taught with its cause: about 1.1% of carbon is carbon-13, so two carbon-13 atoms are rarely bonded together, and decoupling stops neighbouring hydrogens splitting carbon signals. Heights are "not reliable counts", matching the site's "generally not used to get a carbon ratio".
- **Shift reading worked example: ethyl ethanoate.** Four environments, four peaks (about 171, 60, 21 and 14 ppm), each matched to one data sheet row in turn, one row lit at a time. c11b uses the same molecule for its proton spectrum, so the two videos join.
- **Overlap (site Activity 2).** The site's 70 ppm question (C–O, or C–Cl/C–Br) and the 21 ppm alkyl or alpha-carbonyl overlap. Rule: the formula and the other peaks settle it.
- **Data sheet table.** Shown as a coded card reproducing the NESA carbon-13 table rows as the site gives them (alkyl 5 to 40; R–C–Cl or R–C–Br 10 to 70; R–C–C(=O) 20 to 50; R–C–N 25 to 60; C–O 50 to 90; C=C 90 to 150; R–C≡N 110 to 125; aromatic 110 to 160; esters and acids 160 to 185; aldehydes and ketones 190 to 220). Codex verifies against the current NESA data sheet. Only the rows in use are bright; the rest stay dim.
- **Site sources used (site lesson 14):** card 1 (tiny magnet, field, radio-frequency flip, chemical shift, TMS at 0, deshielding raises δ, peaks = environments, TMS not counted); card 3 (one peak per carbon environment; about 0 to 220 ppm; no splitting because ¹³C is about 1.1% and decoupling; areas not used for ratios; the data sheet table); card 4 (comparison, common error "reading integration or splitting off a ¹³C spectrum"); Activity 1 Q1 and Q3; Activity 2 Q1 to Q3 (175 ppm, 70 ppm, why no ratios); SA Q2 and Q3 (the ethanol carbon shifts about 60 and 18). The site's methanol and ethanol cases are kept as quick examples; the propanols, ketones, ethyl ethanoate and the attempts are this design's own.
- **Site corrections (new; quoted from site lesson 14, read 30 Oct; for `../site-corrections-m8.md`; c11b lists the same set and should not log them twice):**
  1. Hook: "A ¹H NMR spectrum shows just two peaks, a triplet and a quartet, in a 3 : 2 height ratio." The page's own misconception box says "Proton number is inferred from integrated area, not peak height". Correct: "in a 3 : 2 integration (area) ratio". Severity: should fix (internal contradiction on a core trap).
  2. Before you read: "What would the relative heights (integration) of those peaks tell you?" Correct: "What would the relative areas (integration) of those peaks tell you?" Severity: should fix.
  3. Short Answer Q3 and its model answer: the question gives "its ¹H NMR shows a triplet and a quartet in a 3 : 2 ratio" (two signals), and the answer is ethanol, adding "(the OH proton would appear as a separate singlet)". Ethanol gives three proton signals, so the stated data do not fit the stated answer. Correct the question: "its ¹H NMR shows a triplet, a quartet and a singlet in a 3 : 2 : 1 ratio", keeping the answer ethanol. Severity: should fix (the data contradict the model answer).
  4. Card 2: "Multiplicity names: 2 = doublet, 3 = triplet, 4 = quartet, more than 4 = multiplet." Five, six and seven lines are a quintet, sextet and septet (the Module 8 memory bank uses "septet"); "multiplet" means a complex or unresolved pattern. Correct: "1 = singlet, 2 = doublet, 3 = triplet, 4 = quartet, 5 = quintet, 7 = septet; a complex pattern is called a multiplet." Severity: minor.
  5. **Clarity note, not an error:** the page uses "peak" for both a whole signal and its individual lines (MC 5: ethanol "shows how many peaks", answer 3, while its spectrum has 3 + 4 + 1 = 8 lines; the misconception box says "splitting can make one environment appear as several lines"). Suggest "signal" for an environment and "line" for each split component in the proton cards.
  6. **Clarity note:** card 1: "More electronegative or nearby groups deshield a nucleus". Suggest "Nearby electronegative atoms pull electron density away and deshield a nucleus, moving it to higher δ."
  - The site extract `../site-extracts/chem-m8-l14.md` is too thin for design use (key ideas are card headings and bridge sentences such as "We just saw that peaks count environments."); the HTML was used. Suggest Codex regenerate it.
- **Pack questions answered (section 7):** "Can both nuclei fit one focused introduction, or does splitting need a companion?" Answered by route review change 2: two videos. "Which examples avoid a crowded shift table?" A count-only hook (propanols), then one molecule read row by row (ethyl ethanoate), with only the rows in use bright.
- **Cause chain taught, in order:** (1) a formula, a molecular ion and an O–H band can match; carbon-13 NMR counts something else (1); (2) ¹³C and ¹H nuclei act as tiny magnets; in a strong field they line up with or against it; the right radio frequency flips them: resonance (2); (3) electrons shield a nucleus; oxygen pulls electron density away, so the carbon is deshielded and needs a slightly higher frequency (3); (4) that position is the chemical shift, in ppm, read right to left from TMS at zero; deshielded means further left; carbon-13 runs to about 220 (4); (5) carbons in identical surroundings share an environment and a peak; ethanol: two (5); (6) symmetry: carbons that swap share a peak; propan-1-ol three, propan-2-ol two (6); (7) the swap test on butan-2-one and pentan-3-one; atoms are not environments (7); (8) each environment is one line, and heights aren't counts, with the causes (8); (9) shifts read off the data sheet: ethyl ethanoate (9); (10) ranges overlap; the formula and the other peaks settle it (10); memory aid (11); attempts (12 to 15); decision rule and handoff (16); key notes (17).
- **Learner-visible vocabulary (plain meaning at first use):** nucleus (recall); resonance (absorbing radio waves that flip the tiny magnet); shielding and deshielding (electrons screening the nucleus from the field, and losing some of that screen); chemical shift (where a peak sits, in ppm); ppm (parts per million, the scale's unit); TMS (the reference compound that sets zero); environment (identical surroundings); decoupling (running the machine so hydrogens can't split carbon signals); data sheet (recall, the exam's printed table).
- **Attempt systems (unseen, every condition visible, HSC wording, original):** (A1) "The four alcohols below all have the molecular formula C₄H₁₀O: butan-1-ol, butan-2-ol, 2-methylpropan-1-ol, 2-methylpropan-2-ol. One of them gives a ¹³C NMR spectrum with two peaks, at 69 ppm and 31 ppm. Identify the alcohol, and explain the number of peaks and their chemical shifts." Answer: 2-methylpropan-2-ol; its three CH₃ carbons swap places around the central carbon (one environment, 31 ppm, alkyl); the central carbon carries the OH (C–O range 50 to 90, 69 ppm); butan-1-ol and butan-2-ol give four peaks, 2-methylpropan-1-ol three. Crossed mistake: "four carbons, so four peaks". (A2) "A compound with molecular formula C₃H₆O₂ is either propanoic acid or methyl ethanoate. Its ¹³C NMR spectrum shows three peaks, at 171 ppm, 52 ppm and 21 ppm. Identify the compound. Justify your answer using the ¹³C NMR chemical shift data on the data sheet." Answer: methyl ethanoate; 171 is a C=O carbon, but 160 to 185 covers both acids and esters, so it can't decide; 52 lies in the C–O range (50 to 90), a carbon singly bonded to oxygen (the ester's OCH₃); propanoic acid has no peak in that range (about 181, 28 and 9). Crossed mistake: "171 ppm, so it's an acid".
- **Mistake scene:** none separate. "Number of carbons equals number of peaks" (6, 7; A1 crossed); "taller peak, more carbons" (8, said positively); "count TMS" (4); "one shift names one carbon type" (10); "the carbonyl range picks acid over ester" (A2 crossed).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **NmrSpectrum** (new, in this lesson's parts file so c11b and c12 import it: a baseline with a reversed ppm axis, ticks and numbers, right-to-left draw-on; carbon mode draws single sharp lines at given shifts with set, deliberately unequal heights; a small grey TMS line at 0 labelled "TMS"; each line can take an environment colour and a value tag; supports a zoom and a dim state); **magnet bore** (two coded pole faces with field lines across a gap; the sample tube plate drops into the gap; c11b reuses it); **nuclear magnets** (small coded arrows in a field: some with, some against; a radio-wave squiggle flips one, which flashes); **electron cloud** (a soft coded halo round a carbon that thins on the oxygen side, with an arrow of electron density drawn towards O); **environment rings** (kit `Skel` with coloured halos on carbons; colours match peaks: E1 teal, E2 amber, E3 violet, E4 rust (kit `OXY`)); **mirror line and swap arc** (a dashed line through the molecule; paired carbons slide along an arc to each other's place and back); **data sheet card** (the carbon-13 table, rows dim until used; the row in use brightens and a connector runs to its peak); crossed chips, countdown ring, key notes board (shared kit).
- **Author notes (not learner copy):** (a) ppm: δ = (ν_sample − ν_TMS) ÷ ν_spectrometer × 10⁶, which makes shifts the same on any field strength. TMS, Si(CH₃)₄: 12 equivalent H and 4 equivalent C, one sharp peak each, more shielded than most organic nuclei (silicon is less electronegative than carbon), chemically inert and volatile (bp 26 to 27 °C). (b) Deuterated solvents (CDCl₃ and similar) carry ²H, which does not resonate in the ¹H window, so the solvent does not swamp a proton spectrum; the CDCl₃ carbon gives a triplet near 77 ppm in ¹³C spectra (deuterium splits it), which exam spectra usually leave out. Not taught; neither the syllabus nor site L14 names it. (c) Propan-1-ol and propan-2-ol mass spectra differ in fragments (base peaks about m/z 31 and 45), so the hook avoids "MS can't tell them apart". (d) Real ¹³C peak heights depend on relaxation and the nuclear Overhauser effect, so carbons without H (C=O, quaternary C) are often small; the coded spectra draw the C=O and quaternary lines shorter for realism, and no learner copy relies on heights. (e) The "slightly higher frequency" for a deshielded nucleus is a few kHz at most on a 100 MHz carbon channel; the coded flip just shows "different frequency". (f) Pronunciations: "propan-one-ol", "propan-two-ol", "butan-two-one", "pentan-three-one", "two-methylpropan-two-ol", "two-methylpropan-one-ol", "TMS" as letters, "ppm" as letters, "C equals O", "C O" as letters.

Main question: *Propan-1-ol and propan-2-ol share a formula, a molecular ion and an O–H band. How can carbon-13 NMR tell them apart at a glance?*
Entry knowledge (chem-m7-c01, chem-m7-c02; chem-m8-c09 and c10 at route level; Year 11 electronegativity): see Scope.
Stops after: explaining resonance and shielding in a sentence each; reading the ppm scale; counting carbon environments with symmetry; explaining single lines and why heights aren't counts; assigning shifts from the data sheet; choosing between candidates with the count, shifts and formula.
Handoff: proton NMR (route chem-m8-c11b).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Pronunciations as in author note (f). Colour key: environment 1 teal, 2 amber, 3 violet, 4 rust; each environment's ring on the molecule and its peak share one colour; TMS grey; dim lines grey. Board layout (constant): heading top-left; molecule in the left half; spectrum across the lower half (full width when it is the subject); the right half holds one current card (data sheet card, rule card or attempt card).

### 1. hook (two alcohols, one formula)
> Propan-1-ol and propan-2-ol share the formula C three H eight O, so in a mass spectrum both molecular ions sit at 60. Both are alcohols, so both infrared spectra show the broad O H band. So how do you tell them apart? Run a carbon-13 NMR spectrum. One gives three peaks, and the other gives **two**. By the end of this video, you'll know which is which, and why.

Visual: heading writes on: "How many kinds of carbon?". Two kit skeletal structures write side by side: propan-1-ol (left) and propan-2-ol (right), OH labelled, no environment colours yet. Under both, one shared grey chip "C₃H₈O". On "60" a small grey card "molecular ion: m/z 60" writes under each with a "c09" chip; on "O H band" a small grey card "IR: broad O–H band" with a "c10" chip writes under each, and an equals sign glows between the pairs. On "carbon-13" `m8-nmr-machine-v1.png` slides in small at the right edge. On "three peaks" a coded mini spectrum draws under the left structure (three grey lines, no axis numbers); on "two" one draws under the right (two lines). A "?" chip sits between them: which is which. Bright at the end: the two mini spectra and the "?" (one item each).

### 2. nuclei as tiny magnets
> NMR stands for nuclear magnetic resonance. Some nuclei, like hydrogen-1 and carbon-13, behave like tiny bar magnets. Ordinary carbon-12 doesn't, so the machine can't see it. Put the sample in a very strong magnet, and these tiny magnets line up either with the field or against it. Lining up against it takes a little more energy. A pulse of radio waves at exactly the right frequency flips them, and that absorption is the **resonance** the machine detects.

Visual: the board clears. `m8-nmr-machine-v1.png` at left, larger; a coded cutaway window opens on its body showing the magnet bore (two pole faces, coded field lines). `m8-nmr-sample-tube-v1.png` (new) descends into the bore (coded motion). Right half: a zoom bubble from the tube shows a few coded nuclei as small arrows; on "carbon-12" one grey dot with no arrow gets a grey tag "¹²C: not seen"; on "with the field or against it" the arrows settle nearly half and half, with only one more arrow with the field than against it (tags "with: lower energy", "against: higher energy" as two short lines on a small two-level ladder; grey tag "only a tiny excess with the field"). On "radio waves" a coded squiggle crosses the bubble; on "resonance" one "with" arrow flips to "against" and flashes; tag "absorbs radio waves: resonance" (bright). Bright at the end: the flipped arrow and its tag.

### 3. electrons shield
> Here's the useful part. Every nucleus sits inside a cloud of electrons, and those electrons shield it a little from the big magnet. Now bond that carbon to an oxygen. Oxygen is electronegative, so it pulls electron density away, and the carbon feels more of the field. We say it's **deshielded**. It needs a slightly higher frequency to flip, so its peak lands in a different **place**.

Visual: the board clears. Left: one carbon (kit atom) with a soft coded electron halo; field lines pass round it, thinned by the halo; tag "electrons shield" (grey chip "shielded"). On "oxygen" an O atom bonds on the right (kit `OXY` colour); the halo stretches towards O and thins on the carbon's far side; an arrow of electron density points to O. On "deshielded" more field lines reach the carbon; tag "deshielded" (bright). On "higher frequency" two radio squiggles appear, the lower one for the shielded carbon (faded copy) and a slightly tighter one for the deshielded carbon. On "place" a short spectrum baseline writes under them with two lines, the deshielded one to the left (no numbers yet). Bright at the end: the "deshielded" tag and the two lines.

### 4. the scale and TMS
> That position is the chemical shift, measured in parts per million, or ppm. The scale runs backwards, from right to left. Zero is set by a reference compound called TMS, which is added to the sample, and its peak isn't counted. The more deshielded a carbon is, the further **left** its peak sits. For carbon-13, nearly every peak lands between 0 and about **220** ppm.

Visual: the baseline grows into the NmrSpectrum axis across the lower half: numbers write on from right to left, 0 at the right, then 20, 40 ... up to 220 at the left; label "chemical shift, δ (ppm)". On "TMS" a small grey line draws at 0 with the tag "TMS: sets zero, not counted". On "left" a coded arrow runs along the axis from right to left, labelled "more deshielded" (bright). On "220" the axis end glows. Bright at the end: the arrow label and "0 to about 220 ppm".

### 5. environments
> So what makes two carbons give the same peak? They need identical surroundings, which chemists call the same environment. In ethanol, one carbon is bonded to the oxygen and the other isn't. They're in different environments, so the spectrum shows two peaks. The carbon next to the oxygen is deshielded, so it sits further left, near 58 ppm. The other sits near 18. That's the key rule: count the peaks, and you've counted the carbon **environments**.

Visual: ethanol (kit skeletal, OH labelled) writes at left. On "bonded to the oxygen" C1 gets a teal ring; on "the other isn't" C2 an amber ring. The spectrum (0 to 220, TMS grey) draws two lines: teal at 58, amber at 18, each landing as its carbon is named; value tags "58" and "18". A colour connector runs from each ring to its line. On "environments" a rule card writes in the right half: "number of peaks = number of carbon environments" (bright). Bright at the end: the rule card and the two coloured lines.

### 6. symmetry merges carbons
> Back to the propanols. In propan-1-ol, the O H sits on the end carbon. Each of the three carbons has a different set of neighbours, so you get three peaks. In propan-2-ol, the O H sits on the middle carbon. Draw a mirror line through it, and the two end carbons swap places. Carbons that swap share one environment, so propan-2-ol gives just **two** peaks. Same formula, different count.

Visual: the two propanols return from the hook, larger. Both molecules are drawn in full (every C, H and O atom and every bond, the OH labelled). Propan-1-ol: on "a different set of neighbours" a faint copy of the whole structure flips end to end over it and does not match (the OH lands on C3; red outline on the mismatched OH, tag "ends differ"), then fades; C1 teal, C2 amber, C3 violet as "three carbons" is said; its spectrum (small, under it) draws teal 64, amber 26, violet 10. Propan-2-ol: a dashed mirror line draws vertically through C2 on "mirror line"; on "swap places" a faint copy of the whole labelled structure reflects across the line and lands exactly on the original, every atom matching, the OH still on C2 (tag "whole structure matches"), then the two end carbons ring teal; C2 rings amber; its spectrum draws teal 25 and amber 64. On "two" the hook's "?" chip resolves: "3 peaks: propan-1-ol", "2 peaks: propan-2-ol" (bright). Bright at the end: the two resolved labels and the mirror line.

### 7. the swap test on two ketones
> Try the swap test on two ketones. Butan-2-one has its C equals O on the second carbon. Walk in from each end and the routes differ, so all four carbons are different, giving four peaks. Pentan-3-one has five carbons, but its C equals O sits right in the middle. The two sides match, so it gives only **three** peaks. Counting carbon atoms isn't the same as counting **environments**.

Visual: the board clears to two kit structures. Butan-2-one: two coded "walk" arrows trace in from each end and stop at different distances from the C=O; the four carbons ring teal, amber, violet, rust one at a time; a chip "4 peaks". Pentan-3-one: the mirror line draws through the C=O carbon; the swap arc pairs C1 with C5 (teal) and C2 with C4 (amber); C3 rings violet; chip "5 carbons, 3 peaks" on "three". No spectra here (the count is the point). On "environments" the propan-2-ol rule chip returns small: "atoms ≠ environments" (bright). Bright at the end: the two count chips and the rule chip.

### 8. one line each, and heights aren't counts
> You might expect a taller peak to mean more carbons. Not here. Only about one carbon atom in a hundred is carbon-13, so two of them are rarely bonded together. The machine is also run so that neighbouring hydrogens can't split the carbon signals, which is called decoupling. So each environment shows as one sharp line. Peak heights in carbon-13 aren't reliable counts, so don't read them as ratios. Count the lines, and read where they **sit**.

Visual: propan-2-ol's spectrum enlarges. Its teal line (two carbons) is drawn slightly shorter than nothing would suggest (heights deliberately unequal; author note d); a grey chip "2 carbons" hangs on the teal line and "1 carbon" on the amber one, and a crossed chip "taller = more carbons" fades in and is crossed on "Not here". On "one in a hundred" inset 1 (boxed at the upper left) shows a coded grid of 100 small grey dots with one coloured dot (tags "¹³C about 1.1%" and "reason 1: ¹³C rarely next to ¹³C"). On "decoupling" inset 2, in its own box at the upper right with a gap between the two, shows a split cluster of grey lines collapsing into one sharp line (tags "reason 2: decoupling" and "hydrogens don't split the line"). Inset 1 dims before inset 2 appears. On "sit" the rule card adds a second line: "heights are not carbon counts" (bright). Bright at the end: the two rule lines.

### 9. reading shifts off the data sheet
> Where a peak sits tells you what kind of carbon it is. You don't need to memorise the ranges, because they're printed on the data sheet. Take ethyl ethanoate, an ester with four carbon environments. The peak at 171 falls in the ester and acid range, 160 to 185, so it's the C equals O carbon. The peak at 60 falls in the C O range, 50 to 90, so it's the carbon bonded to the ester oxygen. The peaks at 21 and 14 are alkyl carbons, further from the oxygens, on the **right**.

Visual: the board clears. Right half: the data sheet card writes, all rows dim, title "¹³C chemical shifts (data sheet)". Left: ethyl ethanoate (kit skeletal, CH₃C(=O)OCH₂CH₃). Lower half: the spectrum draws its four lines grey at 171, 60, 21, 14. On "171" the "esters, acids 160 to 185" row brightens, a connector runs to the 171 line, the line turns rust and the C=O carbon rings rust. On "60" the "C–O 50 to 90" row brightens (171's row dims), the 60 line turns violet and the OCH₂ carbon rings violet. On "21 and 14" the "alkyl 5 to 40" row brightens and the two lines turn amber (21, the CH₃ on the C=O) and teal (14, the end CH₃) as their carbons ring. Bright at the end: the alkyl row and the four coloured lines.

### 10. ranges overlap
> The ranges overlap, so one shift can fit more than one kind of carbon. A peak at 21 fits plain alkyl, and it also fits a carbon next to a C equals O. A peak at 70 could be a carbon bonded to oxygen, or one bonded to chlorine or bromine. So check the formula. If there's no chlorine or bromine in it, the 70 points to a C O carbon. A shift narrows the choices, and the count and the formula finish the **job**.

Visual: the data sheet card stays. On "21" two rows brighten together, "alkyl 5 to 40" and "R–C–C(=O) 20 to 50", with a bracket on the overlap at 20 to 40 (tag "both fit"). They dim. On "70" a single grey line draws on a fresh small axis; rows "C–O 50 to 90" and "R–C–Cl or R–C–Br 10 to 70" brighten with the overlap bracketed. On "check the formula" a formula chip writes, "C₄H₁₀O"; the Cl/Br row crosses out; the C–O row stays lit (tag "no Cl or Br → C–O"). On "job" a three-part chip row writes: "count + shifts + formula" (bright). Bright at the end: the chip row and the C–O row.

### 11. memory aid
> Two lines to keep. Carbons that swap places share a peak. And further left means more deshielded, so check the data sheet to name each peak's group.

Visual: the board clears. Handwritten line 1: "Carbons that swap share a peak." Under it, propan-2-ol with the mirror line and the swap arc replaying once. Handwritten line 2: "Further left: more deshielded. Check the data-sheet group." Under it, the axis with an arrow from right to left, and the data sheet card small beside it with its rows lighting one by one as their ranges shade on the axis (C–O 50 to 90 amber, C=C and aromatic 90 to 160 grey, C=O 160 to 220 rust; tag "different groups, different reasons"). Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. The four alcohols on the card all have the formula C four H ten O. One of them gives a carbon-13 spectrum with just two peaks, at 69 and 31 ppm. Which alcohol is it, and why? Pause here to answer.

Visual: the board clears. Question card, worded as printed (A1 under Decisions), with the tag "HSC-style question, written for HSCScience". The four names only, no structures. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no structures, no data sheet card, no mirror lines).

### 13. feedback 1 (brief)
> It's 2-methylpropan-2-ol. Its three methyl groups all swap places around the central carbon, so they give one peak, at 31. The central carbon carries the O H, so it sits in the C O range, at **69**. Butan-1-ol and butan-2-ol give four peaks, and 2-methylpropan-1-ol gives three. Expecting four peaks from four carbons is the **slip**.

Visual: the card stays, shrunk to the top. The four names gain small kit structures. On "swap places" "two peaks" is underlined; 2-methylpropan-2-ol is drawn in full; a faint copy of the whole structure turns a third of a turn about the central carbon and lands exactly on the original, OH still on the centre (tag "whole structure matches"), and its three CH₃ carbons ring teal; "31 ppm" is underlined and a teal line draws on a small axis. On "69" "69 ppm" is underlined, the central carbon rings amber and an amber line draws at 69 (tag "C–O 50 to 90"). On "four peaks" chips "4", "4", "3" write under the other three structures and they dim. On "slip" a chip "4 carbons, so 4 peaks" fades in and is crossed (caption "count environments, not atoms"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A compound with the formula C three H six O two is either propanoic acid or methyl ethanoate. Its carbon-13 spectrum has peaks at 171, 52 and 21 ppm. Identify the compound, and use the data sheet to justify your answer. Pause here to answer.

Visual: question card, worded as printed (A2 under Decisions), with the data sheet card beside it (the data sheet is part of the exam conditions, all rows equally dim; nothing highlighted). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> It's methyl ethanoate. The peak at 171 is a C equals O carbon, but the 160 to 185 range covers acids and esters, so it can't decide. The peak at **52** does. It sits in the C O range, so one carbon is joined to an oxygen by a single bond, and that's the ester's methyl group. Propanoic acid has no peak in that range. Calling 171 an acid is the **trap**.

Visual: the card stays, shrunk to the top; the data sheet card stays at the right. On "171" "171 ppm" is underlined and the "esters, acids 160 to 185" row brightens (tag "both candidates"). On "52" "52 ppm" is underlined and the "C–O 50 to 90" row brightens; methyl ethanoate's kit structure writes with its OCH₃ carbon ringed violet. On "no peak in that range" propanoic acid's structure writes small with grey value tags "about 181, 28, 9" and dims. On "trap" a chip "171 ppm, so an acid" fades in and is crossed (caption "160 to 185: acids and esters"). Hold about 1 second.

### 16. decision rule and handoff
> So, with a carbon-13 spectrum, count the peaks to count the carbon environments, and use symmetry to merge carbons that swap. Then read each shift off the data sheet, and let the formula settle any overlap. **Next**, proton NMR, where the peaks carry even more: how many hydrogens there are, and who their neighbours are.

Visual: the board clears. A three-step card writes, one line per clause: "1 Count peaks = carbon environments (swap test)" → "2 Read each shift off the data sheet" → "3 Check the count and shifts against the formula". Ethyl ethanoate's coloured spectrum sits small beneath it. On "Next" a chip "Next: proton NMR" slides in at the lower right. Hold about 2 seconds.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. NMR: ¹³C and ¹H nuclei act like tiny magnets. In a strong magnetic field, radio waves of the right frequency flip them (resonance).
2. Electrons shield a nucleus. A nearby electronegative atom pulls electrons away and deshields it, so its peak sits further left (higher δ, in ppm). TMS sets 0 ppm and is not counted.
3. ¹³C NMR: number of peaks = number of carbon environments. Carbons that swap places by symmetry share a peak (propan-2-ol: 3 carbons, 2 peaks). Each environment gives one line; heights are not carbon counts.
4. Read ¹³C shifts (0 to about 220 ppm) off the data sheet. Ranges overlap, so use the formula and the other peaks to decide.

Memory aid (large, on the notes screen): *Carbons that swap share a peak.* Second line: *Further left: more deshielded. Check the data-sheet group.*

## Teaching checks

- **Does it explain causes?** What the machine detects: tiny nuclear magnets flipped by radio waves (2). Why carbon-12 is invisible: it isn't a tiny magnet (2). Why shifts differ: electrons shield; oxygen pulls them away (3). Why deshielded peaks sit left: they need a higher frequency, and the scale runs right to left (3, 4). Why two carbons share a peak: identical surroundings (5); symmetry swaps them (6, 7). Why single lines: rare carbon-13 neighbours and decoupling (8). Why heights aren't counts: said as a fact with the instruction (8; cause in author note d, beyond Year 12). Why the formula settles an overlap: a range with Cl or Br needs Cl or Br in the formula (10).
- **Misconceptions addressed:** "number of carbons = number of peaks" (6, 7; A1 crossed); "taller = more carbons" (8, crossed chip); "count the TMS line" (4); "one shift, one carbon type" (10); "the carbonyl range tells acid from ester" (A2 crossed).
- **One idea at a time:** one cause per scene (2 to 4); one molecule per scene (5, 9); one data sheet row bright at a time (9, 10); the swap arc only when "swap" is said.
- **Response opportunity:** two unseen HSC-style tasks with every condition visible (A1: the formula, the four names, the peak count and both shifts; A2: the formula, both candidates, three shifts and the data sheet), 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 25 s and 28 s.
- **Avoided double teaching:** naming (c01, names read only), isomers (c02, one clause), molecular ion (c09 chip), O–H band (c10 chip).
- **Dotpoint coverage:** `C8-IQ2-02`, carbon-13 NMR: environments, shifts, the data sheet, and using them to analyse structure. Proton NMR is c11b.
- **Out of scope by design:** proton NMR, integration and splitting (c11b); ppm formula, TMS choice and deuterated solvents (author notes a and b); NOE and relaxation (author note d); combining techniques (c12).

## Numbers used (author note: every structure, shift and count)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Propan-1-ol, CH₃CH₂CH₂OH | 3 peaks: about 64 (C–OH), 26, 10 ppm | 1, 6 |
| Propan-2-ol, (CH₃)₂CHOH | 2 peaks: about 64 (C–OH), 25 (2 × CH₃) ppm | 1, 6, 8, 11 |
| Molecular ion, both propanols | m/z 60 | 1 |
| Ethanol, CH₃CH₂OH | 2 peaks: about 58 (C–OH), 18 ppm | 5 |
| Butan-2-one, CH₃COCH₂CH₃ | 4 environments | 7 |
| Pentan-3-one, CH₃CH₂COCH₂CH₃ | 5 carbons, 3 environments | 7 |
| Ethyl ethanoate, CH₃COOCH₂CH₃ | 4 peaks: about 171 (C=O), 60 (OCH₂), 21 (CH₃C=O), 14 (CH₂CH₃) ppm | 9, 16 |
| Overlap examples | 21 ppm: alkyl 5 to 40 and R–C–C(=O) 20 to 50; 70 ppm: C–O 50 to 90 and R–C–Cl/Br 10 to 70 | 10 |
| TMS | 0 ppm, not counted | 4, all spectra |
| ¹³C abundance | about 1.1% ("about one in a hundred") | 8 |
| ¹³C range | 0 to about 220 ppm | 4, notes |
| A1 | 2-methylpropan-2-ol, (CH₃)₃COH: about 69 (C–OH), 31 (3 × CH₃) ppm; butan-1-ol 4, butan-2-ol 4, 2-methylpropan-1-ol 3 peaks | 12, 13 |
| A2 | methyl ethanoate, CH₃COOCH₃: about 171 (C=O), 52 (OCH₃), 21 (CH₃C=O); propanoic acid about 181, 28, 9 | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

**Status (Revision 2, science check S3): provisional.** The shifts below are remembered literature values (CDCl₃), not yet checked against inspected spectra. The science check reconstructed and confirmed every environment count (ethanol 2; propan-1-ol 3; propan-2-ol 2; butanone 4; pentan-3-one 3; ethyl ethanoate 4; 2-methylpropan-2-ol 2; butan-1-ol 4; butan-2-ol 4; 2-methylpropan-1-ol 3; methyl ethanoate 3; propanoic acid 3), found that both attempts work by count and by the O-bound-carbon contrast, and matched all ten data sheet ranges against the 2024 HSC paper (page 42). Ethanol's 58 and 18 are supported by the solvent-impurity study table hosted by UCSB (the science check's source), which also shows solvent dependence. **Build gate:** no coded spectrum is drawn, and no narrated or carded shift is voiced, until Codex records for each compound an inspected SDBS (or other named database) spectrum with its accession and solvent; any drawn or spoken value more than 1 ppm from that record changes, and any change that moves a peak across a data sheet range boundary is reported to root. Every peak drawn in a coded spectrum is listed here.

- **Propan-1-ol** ¹³C: C1 (CH₂OH) 64.2; C2 25.9; C3 10.1. Drawn at 64, 26, 10.
- **Propan-2-ol** ¹³C: CH(OH) 64.0 to 64.5; CH₃ (2C) 25.3. Drawn at 64, 25.
- **Ethanol** ¹³C: CH₂OH 58.3; CH₃ 18.4. Drawn at 58, 18 (site SA Q3 gives "~60" and "~18").
- **Butan-2-one** ¹³C (count only, not drawn): C=O 209.3; CH₂ 36.9; CH₃C=O 29.4; CH₂CH₃ 7.9.
- **Pentan-3-one** ¹³C (count only, not drawn): C=O 211.8; CH₂ 35.5; CH₃ 7.9.
- **Ethyl ethanoate** ¹³C: C=O 171.1; OCH₂ 60.5; CH₃C=O 21.0; CH₂CH₃ 14.2. Drawn at 171, 60, 21, 14.
- **2-Methylpropan-2-ol** ¹³C: C(OH) 69.1; CH₃ (3C) 31.3. Drawn at 69, 31 (A1).
- **Butan-1-ol** ¹³C (count only): 62.4, 35.0, 19.0, 13.9 (4 peaks). **Butan-2-ol** (count only): 69.3, 32.1, 22.9, 10.0 (4 peaks). **2-Methylpropan-1-ol** (count only): 69.7, 30.9, 18.9 (3 peaks). A1 depends on the 69/31 pair being unique to 2-methylpropan-2-ol among the four by count (2 peaks), not by shift.
- **Methyl ethanoate** ¹³C: C=O 171.5; OCH₃ 51.6; CH₃C=O 20.6. Drawn at 171, 52, 21 (A2).
- **Propanoic acid** ¹³C: COOH 181.0 to 181.5; CH₂ 27.6; CH₃ 9.0. Tagged "about 181, 28, 9" (A2 feedback).
- **TMS** 0 ppm (drawn grey on every spectrum).
- **Data sheet ¹³C table** (as the site gives it; confirm wording and every range against the current NESA HSC Chemistry data sheet): R–C (alkyl) 5 to 40; R–C–Cl or R–C–Br 10 to 70; R–C–C(=O) 20 to 50; R–C–N 25 to 60; C–O (alcohols, ethers, esters) 50 to 90; C=C 90 to 150; R–C≡N 110 to 125; aromatic 110 to 160; R–C(=O) esters, acids 160 to 185; R–C(=O) aldehydes, ketones 190 to 220.
- Every drawn shift falls inside its assigned data sheet range: 64, 58, 69, 60, 52 in C–O 50 to 90; 171 in 160 to 185; 181 in 160 to 185; 26, 25, 21, 18, 14, 10, 31, 28, 9 in alkyl 5 to 40 (21 and 28 also in R–C–C(=O) 20 to 50).
- Formulas and masses: propan-1-ol and propan-2-ol C₃H₈O, M 60.1; butanols C₄H₁₀O; methyl ethanoate and propanoic acid C₃H₆O₂; ¹³C natural abundance 1.07 to 1.1%.

## Memory aid check

- **"Carbons that swap share a peak."** From the Module 8 bank, NMR, "¹³C NMR: one peak per carbon environment, and symmetry merges them" (*Shortcut*), whose example (propan-2-ol, three carbons, two peaks) is scene 6. Assumption: "swap" means a symmetry of the whole molecule (a mirror line or rotation), not free rotation of one group; the three methyls of 2-methylpropan-2-ol swap by rotation about the central carbon, which is also a symmetry of the molecule. Introduced after scenes 5 to 7.
- **"Further left: more deshielded. Check the data-sheet group."** Revision 2 replaces the bank's *Insight* "Further left means closer to an electronegative atom", because the displayed data sheet includes C=C and aromatic carbons (90 to 160), which sit left for a different reason (learning and science finding 1); root to flag the bank entry. Assumption check: "deshielded" is the cause scene 3 teaches; the data sheet, not the aid, names the group. The oxygen cause chain (scene 3, key note 2) is unchanged.
- **Considered, not used:** "¹H and ¹³C use different scales" (*Trap*; c11b uses it); "Mass, groups, map" (c12).

## Narration length estimate

Revision 2 count (31 Oct; same rules): **5,740 characters** (Revision 1: 5,753), 17 headings. Characters per scene (1 to 17): 358, 454, 378, 360, 446, 383, 375, 441, 470, 405, 148, 207, 326, 251, 346, 317, 75. Speech about 432 s; with the same holds, countdowns and notes hold: **about 8.7 minutes (523 s)**, inside the band. Only scene 11 changed (13 characters shorter). Reserve trims and cut limits unchanged.

Earlier count, Revision 1 count (30 Oct; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed, summed per scene): **5,753 characters**, 17 headings (16 narrated scenes plus key notes). Characters per scene (1 to 17): 358, 454, 378, 360, 446, 383, 375, 441, 470, 405, 161, 207, 326, 251, 346, 317, 75. At 13.3 characters per second the speech is about 433 s; add about 16 s of holds (1 s after most scenes; 2 s for the memory aid and the handoff), 20 s for two countdowns and about 55 s more of the quiet notes hold: **about 8.7 minutes (524 s)**, inside the 5,500 to 6,800 character band and under the 570 s ceiling. Feedback: scene 13 about 25 s, scene 15 about 27 s. Scene 9 (470, about 35 s) and scene 2 (454) are the longest; watch their pace, and keep each data sheet row on its own cue. Reserve trims if the voiced take runs long: scene 1's last sentence ("By the end of this video ...", about 5 s); scene 10's 21 ppm example (about 6 s; keep the bracket on screen). Do not cut scene 3 (the shielding cause) or scene 8 (the single-line cause), which the attempts and c11b depend on, and do not cut below 5,500 without replacing the content.

## Assets

Have (inspected 30 Oct; transparent PNG; scale uniformly only, never stretched):
- `public/assets/chemistry/m8-nmr-machine-v1.png` (2000 × 2000 from brief 60; alpha bounds 160, 167, 1840, 1832; a cream superconducting magnet cryostat on blue legs, with a console and monitor at the right; no text). Scenes 1 and 2. The coded cutaway window and bore are drawn over the cryostat body, which is plain enough to take them. Flagged in `../assets/m8-plate-gaps.md` for chem-m8-c11 ("sample tube if scene requires").

Need: **one new plate**, `m8-nmr-sample-tube-v1.png` (Codex asset brief item 1). Shared with c11b.

Coded: NmrSpectrum (new), magnet bore and field lines, nuclear magnet arrows and two-level ladder, radio squiggles, electron cloud, kit structures with environment rings, mirror line and swap arc, walk arrows, 100-dot abundance grid, decoupling inset, data sheet card, rule cards, chips, crossed chips, countdown ring, key notes board. No people or hands.

## Codex asset brief

Start only after the learning review and science check pass and the owner gives the go-ahead.

Painted plate in the house style of `m8-nmr-machine-v1.png` (brief 60: ink and watercolour textbook cutouts; transparent PNG with a true alpha channel, no background, no shadow plate, no text, no people or hands).

1. **`m8-nmr-sample-tube-v1.png`.** 2000 × 2000 canvas. One standard 5 mm NMR tube standing upright, centred: a long, thin, perfectly straight clear glass tube (length about 9 times the visible width of the cap, so it reads as long and thin), a rounded closed bottom, and a small plastic cap at the top (muted blue matching the machine's blue). A short column of clear, colourless liquid fills the bottom part only (about one sixth of the tube's length), with a gently curved meniscus. Faint glass highlights along one side. No label, no writing, no rack, no holder, no spinner, no hands. Check: reads as "a thin glass sample tube with a little liquid" at 300 px tall over the explainer's dark background; the alpha bounds are recorded in the provenance file; nothing outside the tube and cap. Do not stretch; deliver at the stated size.
2. **Check, no new art.** Confirm that the cryostat body of `m8-nmr-machine-v1.png` has a plain area (no ports or labels) at least 25% of the plate width across, where the build can draw the coded cutaway window, and report its pixel box.

## Codex error-check brief

Error-only check, together with the learning review and science check (Codex writes both; brief 109 practice). Report errors; do not restyle or rewrite:
1. Re-check every shift under "Numbers to verify" against a named spectral database (SDBS preferred), each peak's assignment, each environment count, and the narration, screen text, attempts, feedback and key notes against them.
2. Confirm the data sheet ¹³C table rows and ranges against the current NESA HSC Chemistry data sheet, word for word where the card quotes them.
3. Confirm the science claims: ¹²C is not NMR-active; ¹³C about 1.1%; decoupling removes C–H splitting in routine ¹³C spectra; ¹³C peak heights are not reliable carbon ratios; deshielded nuclei resonate at higher frequency and higher δ.
4. Confirm the two attempts are original (not copied from or closely paraphrasing a NESA paper or site L14's activities, MC set or Short Answer Q1 to Q3), and that every condition each model answer needs is on its card (A2 needs the data sheet on screen).
5. Learning review (`../../student-learning-review.md`) from the stated entry knowledge, especially whether scene 2's magnet picture is clear enough without spin, whether scene 3 makes "deshielded means further left" causal rather than a rule, whether the swap test works on 2-methylpropan-2-ol's three methyls, and whether the "further left" aid misleads on alkenes.
6. Confirm no em dash (U+2014) anywhere in this file, Australian spelling in narration and screen text, and the narration character count and per-scene counts by script with the build parser rules.
7. Add site corrections 1 to 4 under Decisions to `../site-corrections-m8.md` (owner record only; the site is read-only here), log clarity notes 5 and 6 and the thin extract separately, and do not log them again from c11b.
8. Inspect the delivered sample tube plate against the asset brief, and record item 2.

## YouTube metadata (draft)

- **Title:** Carbon-13 NMR: Counting Carbon Environments and Reading Chemical Shifts | Year 12 Chemistry (91 characters)
- **Description:**

  "Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year12/module8/lesson14.sa.html

  Propan-1-ol and propan-2-ol have the same formula, the same molecular ion and the same O–H band. A carbon-13 NMR spectrum tells them apart at a glance. Learn what an NMR machine detects, why electrons shield a nucleus and an oxygen deshields it, how to read the ppm scale from TMS at zero, and why the number of peaks counts the carbon environments. Use the swap test to spot symmetry, see why carbon-13 peaks are single lines whose heights aren't counts, and read each shift off the data sheet. Two practice questions are written for HSCScience in the HSC style; they are not official NESA questions.

  Chemistry 2017: Year 12 Module 8, Applying Chemical Ideas.
  Syllabus dotpoint (NSW Chemistry Stage 6, 2017, Module 8):
  "investigate the processes used to analyse the structure of simple organic compounds addressed in the course, including but not limited to:
  - proton and carbon-13 NMR
  - mass spectrometry
  - infrared spectroscopy (ACSCH130)"
  This video covers carbon-13 NMR; proton NMR is the next video.
  Official 2017 course: https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017

  Prerequisites: How can the same formula make different molecules? How does mass spectrometry constrain a structure? What bonds can an IR spectrum reveal? Next: How does proton NMR reveal hydrogen environments?

  #Year12Chemistry #Spectroscopy #HSCScience"
- **syllabusDotpoints:** the quoted dotpoint above, bullets kept as printed (c01 Revision 2 metadata rule). `verifyWording`: true (checked against `programme/syllabus/chem-2017-y12.json`, C8-IQ2-02, p58).
- **Lesson link:** site lesson 14, `.sa.html` form (root decision for all Module 8 designs). c11b links the same page.
- **Playlist:** Year 12 Chemistry: Module 8, Applying Chemical Ideas (2017 syllabus), playlist order 18 (c11b 18.5; root to set).

## Open decisions

- **Route JSON (root applies; this design does not edit it).** Apply review change 2: replace `chem-m8-c11` with `chem-m8-c11a` ("How does carbon-13 NMR count carbon environments?", L14, C8-IQ2-02, prerequisites chem-m7-c02, chem-m8-c09, chem-m8-c10, start "Count carbon environments with symmetry.", stop "Assign carbon-13 shifts from the data sheet and choose between candidates.", next chem-m8-c11b, playlist order 18) and `chem-m8-c11b` (prerequisites chem-m8-c11a, next chem-m8-c12, playlist order 18.5). Update c10's `next` to chem-m8-c11a and c12's `prerequisites` to c11a and c11b. Suggest adding chem-m7-c01 to c11a's prerequisites (names are read throughout) and chem-m8-c10 (the hook recalls the O–H band).
- **NmrSpectrum component.** Lives in c11a's parts file; c11b and c12 import it. If the parallel c09 and c10 designs specify a shared spectrum axis (mass spectrum, IR trace), root should make the axis, tick and draw-on styling one component with modes, so the four spectroscopy videos keep one visual system.
- **Kit addition.** Environment halos on carbons may need a small new export in `molecules.tsx` (for example `EnvRings`, coloured halos by atom index) as an addition below the existing exports; nothing existing changes.
- **"Further left" aid and alkenes** (memory aid check). Fallback ready.
- **New plate (recommended: commission).** `m8-nmr-sample-tube-v1.png`. Fallback: a coded outline tube (acceptable for an abstract apparatus close-up, not ideal).
- **Lesson key** (`m8c11a`): root to confirm when adding the LESSONS entry.

## Build ids

Lesson key `m8c11a` (route chem-m8-c11a). Suggested explainer folder `src/explainer/lessons/chem-m8-c11a`; build folder `docs/production/claude-pm/lessons/m8c11a` (root to confirm). Import, not copy: the molecule kit (`Skel`, `CLabels`, `Tag`, `Crossed`, `RuleChip`) from chem-m7-c01. NmrSpectrum, the magnet bore, the electron cloud, the swap arc and the data sheet card are new and live in this lesson's parts file so c11b and c12 can import them.

In order (kebab-case; 17 scene headings, all `### N.`): hook, tiny-magnets, shielding, scale-tms, environments, symmetry, swap-test, single-lines, data-sheet, overlap, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, decision-handoff, key-notes.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen, card on screen during and after). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `checks/m8c11a-learning-review.md` and `checks/m8c11a-claude-science-check.md`.
