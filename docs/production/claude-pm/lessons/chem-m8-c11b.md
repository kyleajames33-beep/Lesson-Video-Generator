# M8 C11b: How does proton NMR reveal hydrogen environments? Signals count environments, areas count hydrogens, and lines count neighbours plus one (design)

Status: Revision 3 (1 Nov): Codex error check 122 resolved (no errors); recording hold: measured proton spectra.

Earlier status, Revision 2 (31 Oct): learning review and science check resolved, except science blocker S2 (inspected proton spectra), which stays open as a build gate; needs that data and the Codex error check before voicing.

Earlier status, Revision 1 (30 Oct): needs learning review and science check (Codex), then Codex error check before voicing.

Revision 2 changes (31 Oct; resolving `../checks/m8c11b-learning-review.md` (learning L1 to L3) and `../checks/m8c11b-claude-science-check.md` (science S1 to S3)):
- Memory aid (learning L1 and science S1, merged): scene 11 now says "Signals count environments, areas compare hydrogens, and lines count equivalent neighbours, plus one." Three small labels write under the aid, and feedback 2's "3 : 2 = 6 : 4 (10 H)" scaling line appears beside the integration icon as the worked application. Key note 2 says areas "compare hydrogens as a ratio".
- Ethyl pattern (science S1): feedback 2 now says the triplet and quartet "suggest an ethyl group", with a grey tag "a candidate pattern: check the other clues"; key note 4 says "suggests an ethyl group ... check it against the other clues".
- n + 1 condition (learning L2): scene 7 now says "For simple spectra like these, a hydrogen with n equivalent neighbours on the next carbon gives n plus one lines." The rule card and key note 3 say "simple spectra". The O–H exchange exception stays. Nothing removed.
- Symmetry claim (science S3): feedback 2 now says "Of these candidates, only the symmetrical pentan-3-one gives two signals".
- Measured spectra (science S2, blocker, open): every shift is marked provisional under Numbers to verify, with a build gate (inspected record with accession, solvent and field per compound; values more than 0.1 ppm off change). The ethanol O–H is never given one fixed value on screen: scene 1 adds the tag "O–H: position varies".
- Quartet trap scene (learning L3, optional): kept as written.
- Length: 5,618 characters (Revision 1: 5,553), about 514 s; nothing was cut.
- Codex asset brief: unchanged.
- Declined: none. Open items for the Codex error check: inspected SDBS (or other named database) proton records, with accession, solvent and field, for ethanol, bromoethane, ethyl ethanoate, methyl propanoate and pentan-3-one (including the A2 card's printed 2.44 and 1.05), and the count-only A2 candidates if any shift is shown.

Narration 5,618 characters (Revision 2, summed per scene), 17 scenes (including the key notes hold), about 8.6 minutes (514 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: the second of two NMR videos in the Module 8 Chemistry spectroscopy block, made by route review change 2 (`../../module8-route-review-claude.md`), which splits chem-m8-c11 into c11a (carbon-13 NMR) and c11b (proton NMR, this video). Format, voice and staging follow `chem-m8-c11a.md` (Revision 1), `chem-m8-c08.md` and `chem-m8-c04.md` (Revision 1): one current card in the right half, earlier lines dim, crossed chips, the countdown ring, the key notes board. **Recalled, not re-taught:** chem-m8-c11a (nuclei as tiny magnets, radio waves and resonance; electrons shield and electronegative atoms deshield; ppm read right to left from TMS at zero; peaks count environments; the swap test for symmetry; ethyl ethanoate's carbon spectrum); chem-m7-c01 (names read, not taught); chem-m7-c02 (isomers: methyl propanoate and ethyl ethanoate share C₄H₈O₂; the four C₅H₁₀O carbonyl compounds); chem-m8-c09 and chem-m8-c10 at their route level only (molecular ion; IR bonds), named once in the handoff. The new teaching here is: hydrogen environments; proton shifts as given data (not on the data sheet); integration (areas give the ratio of hydrogens, not heights, and a ratio, not the actual numbers); the cause of splitting (neighbouring hydrogens' tiny magnets add to or subtract from the field); the n+1 rule and its limits (equivalent hydrogens don't split each other; an O–H hydrogen is usually a singlet); reading a whole spectrum; the ethyl and lone CH₃ patterns. Pre-design pack: `../pre-design/chem-m8-proton-carbon-nmr.md`. Site extract: `../site-extracts/chem-m8-l14.md` (thin), so site lesson 14 (`C:/Users/kygs/hscscience/subjects/chemistry/year12/module8/lesson14.sa.html`) was read in full (30 Oct, read-only). Site corrections: logged once, in `chem-m8-c11a.md` (corrections 1 to 4 and clarity notes 5 and 6 all concern the proton material this video teaches; this design applies them and does not log them again). Route entry: `chem-m8-c11` in `../../module8-video-route-draft.json` (to be split; see Open decisions). This design takes the proton half of its start and stop: "Use chemical shifts, integration and splitting to test structures." Next: chem-m8-c12.

**Entry knowledge:** chem-m8-c11a in full (above); Module 7 naming and isomers. **Start:** ethanol's proton spectrum shows more than its carbon spectrum did: three signals, of different sizes, two of them split. **Stop:** the student can predict the number of proton signals, their relative areas and their splitting for a named molecule, and use given shifts, areas and splitting to choose one structure from candidates. **Next handoff:** chem-m8-c12, combining mass spectrometry, infrared and both kinds of NMR to identify one molecule.

Owner rules applied: the NMR machine and the sample tube as painted plates listed by filename (both from c11a), never stretched; spectra are coded diagrams only (c11a's NmrSpectrum component in proton mode), with realistic shifts for the named compounds, never AI images; molecules come from the coded molecule kit (`src/explainer/lessons/chem-m7-c01/molecules.tsx`), drawn with their hydrogens where hydrogens are the subject, each hydrogen environment ringed in the same colour as its signal; nuclear magnets coded as abstract arrows; no people, hands or faces; at most about three bright text items, earlier lines dim; one reasoning stage at a time; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; no givens card, givens underlined in the feedback as they are used; brief feedback (answer, key reason, one crossed mistake, about 15 to 30 s); original HSC-style questions only; Australian spelling; no em dashes; conversational narration; no absolute claims ("usually", "fits").

Syllabus dotpoint (as printed; NSW Chemistry Stage 6, 2017, p58; `C8-IQ2-02` is this project's local catalogue ID, not a code printed in the syllabus), quoted from `../../programme/syllabus/chem-2017-y12.json`:

"investigate the processes used to analyse the structure of simple organic compounds addressed in the course, including but not limited to:
- proton and carbon-13 NMR
- mass spectrometry
- infrared spectroscopy (ACSCH130)"

This video covers proton NMR. Carbon-13 NMR is c11a; combining all the techniques is c12.

**Boundary:** starts from ethanol's proton spectrum and stops when the student can read and predict signals, shifts, areas and splitting. It teaches: proton NMR uses the same shielding idea on ¹H, over 0 to about 12 ppm; proton shifts are given in exam questions, not printed on the data sheet; hydrogens in identical surroundings share a signal, and symmetry merges groups; hydrogens near O, C=O or a halogen sit further left; the area under a signal is proportional to the number of hydrogens in it, shown by the integration line; areas, not heights; areas give the simplest ratio, so the formula sets the real numbers; each neighbouring hydrogen adds to or subtracts from the field a proton feels, so a signal splits; the n+1 rule (n equivalent hydrogens on the next carbon give n + 1 lines); singlet, doublet, triplet, quartet; equivalent hydrogens don't split each other; an O–H hydrogen usually gives a singlet and doesn't split its neighbours; a quartet is not four hydrogens; the ethyl pattern (triplet 3H, quartet 2H); a CH₃ with no hydrogens next door gives a singlet. **Not here:** coupling constants in hertz, complex multiplets, n+1 with two different sets of neighbours (pentan-2-one's sextet appears only as a count in A2's feedback, not explained); D₂O exchange; deuterated solvents (author note b); aromatic protons; combining spectra (c12).

## Decisions

- **Main question:** *Carbon-13 told you ethanol has two kinds of carbon. Its proton spectrum shows three signals, of different sizes, and two are split into clusters of lines. What does each feature tell you?* Heading on screen: "What do the hydrogens tell you?"
- **Three clues, one at a time (site card 2).** Signals (environments), then shift (where), then area (how many), then splitting (neighbours), each on ethanol, each in its own scene. The site's order is kept (environments, integration, splitting); shift is placed between environments and integration because c11a just taught it and the CH₂ near oxygen is the obvious first thing to notice.
- **Proton shifts are given data (site card 2 table note).** The site rightly says the ¹H shift table is not on the NESA data sheet and exam questions print any values needed. The video says so once (scene 2), uses a few values as given (about 1.2, 3.7 and so on), and A2 prints every shift it needs. No proton shift table is drawn.
- **Splitting with its cause (beyond the site's rule-only card).** Scene 6 shows two neighbouring hydrogens as tiny magnets: both with, one with and one against (two ways), both against; three slightly different fields; three lines in a 1 : 2 : 1 pattern. Scene 7 states the n+1 rule and applies it to the CH₂ (three neighbours, four lines). The 1 : 3 : 3 : 1 heights are drawn but not narrated (author note c). This keeps "cause before name" without spin quantum numbers.
- **Integration: areas, ratios and the formula (site misconception box; corrections 1 to 3).** The site's own trap ("the tallest proton peak represents the most hydrogens") is taught positively in scene 5, and the "ratio, not the actual numbers" idea is set up there and pays off in A2 (pentan-3-one, 6 : 4 shown as 3 : 2). This also avoids the site's SA Q3 error (correction 3 in c11a): every spectrum in this video shows all its signals, including ethanol's O–H singlet.
- **Signal and line (site clarity note 5).** Learner copy uses "signal" for one environment and "line" for each part of a split signal; "peak" is used only in recall of c11a. On screen, multiplets carry a bracket labelled with their environment.
- **O–H singlet (site card 2).** "The O H hydrogen swaps between molecules so fast that it usually shows as a single line, and doesn't split its neighbours." The site's "its coupling exchanges away" is put into a subject-action sentence. Its shift varies with concentration and solvent; the spectrum draws it near 2.6 with a grey tag "position varies" (author note d).
- **Worked examples.** Bromoethane (site worked example and Predict-then-Reveal; C₂H₅Br), read from scratch, then ethyl ethanoate (the molecule c11a read by carbon-13), which adds the lone CH₃ singlet and a quartet pushed left by the ester oxygen.
- **Mistake scene: "a quartet means four hydrogens".** Included (scene 9): it is the most common wrong instinct when lines and areas are first met, and the site's misconception box and MC 2 both target it. Kept to one short scene.
- **Memory aid:** "Signals, areas, neighbours plus one." Written from the pre-design pack's site aid ("environments, areas, neighbours") and the Module 8 bank's "¹H NMR: the n + 1 rule" (*Shortcut*). The bank's "Pattern spotting" (*Shortcut*) supplies the ethyl and lone CH₃ patterns for the key notes; the isopropyl doublet-septet pattern is held back (it needs a septet, which this video doesn't explain; author note e).
- **Deuterated solvent:** not in the syllabus or on the site; author note b only, as in c11a. **TMS:** recalled in one clause (c11a taught it).
- **Site sources used (site lesson 14):** card 1 (shared basics, recalled); card 2 (three layers; ethanol 3 environments, 3 : 2 : 1, triplet, quartet, OH singlet; multiplicity names; the ¹H shift table is not on the data sheet); card 4 (comparison; misconception "tallest proton peak"); card 5 worked example (C₂ compound: triplet and quartet 3 : 2, ethyl group, bromoethane, CH₂ downfield); Predict-then-Reveal (C₂H₅Br); Activity 1 Q2 (triplet means two neighbours); MC 2, 4 and 5; SA Q1. The methyl propanoate and pentan-3-one attempts are this design's own.
- **Pack questions answered (section 7):** "Can both nuclei fit one focused introduction, or does splitting need a companion?" Two videos (review change 2); this one gives splitting a full cause scene. "Which examples avoid a crowded shift table?" No proton table is drawn; shifts are quoted as given values.
- **Cause chain taught, in order:** (1) the proton spectrum shows three features, each a clue (1); (2) same shielding idea, 0 to 12 ppm, shifts given in the question (2); (3) hydrogens in identical surroundings share a signal; symmetry merges them; ethanol three (3); (4) the CH₂ next to oxygen is deshielded, so further left (4); (5) area is proportional to the number of hydrogens; integration line; areas, not heights; a ratio, not the numbers (5); (6) neighbouring hydrogens add to or subtract from the field, so two neighbours give three lines (6); (7) n+1; who counts as a neighbour; O–H singlet (7); (8) bromoethane read from scratch (8); (9) a quartet is not four hydrogens (9); (10) ethyl ethanoate: the lone CH₃ singlet and the ester oxygen (10); memory aid (11); attempts (12 to 15); decision rule and handoff (16); key notes (17).
- **Learner-visible vocabulary (plain meaning at first use):** proton (a hydrogen-1 nucleus); signal (the response from one hydrogen environment); integration (the area under a signal, drawn as a stepped line); splitting (a signal broken into a cluster of lines); neighbours (hydrogens on the next carbon); n+1 rule; singlet, doublet, triplet, quartet (one, two, three, four lines); equivalent (in the same environment, recall).
- **Attempt systems (unseen, every condition visible, HSC wording, original):** (A1) "Predict the ¹H NMR spectrum of methyl propanoate, CH₃CH₂COOCH₃. State the number of signals, their relative areas and the splitting of each signal. Justify your answer." Answer: three signals, 3 : 2 : 3; OCH₃ singlet (no hydrogens on the next atom; the oxygen carries none); CH₂ quartet (three neighbours on the CH₃); CH₃ triplet (two neighbours on the CH₂). Crossed mistake: "CH₂ is a sextet: counted the OCH₃ hydrogens too" (hydrogens across the C=O and the ester oxygen are not on the next carbon). (A2) "A compound with molecular formula C₅H₁₀O is one of: pentan-2-one, pentan-3-one, pentanal, 3-methylbutan-2-one. Its ¹H NMR spectrum shows two signals: a triplet at 1.05 ppm with relative area 3, and a quartet at 2.44 ppm with relative area 2. (A CH₂ next to a C=O group appears at about 2.0 to 2.7 ppm.) Identify the compound. Justify your answer using the number of signals, the relative areas and the splitting." Answer: pentan-3-one; triplet and quartet in 3 : 2 is an ethyl pattern; ten hydrogens make the real numbers 6 and 4, so two identical ethyl groups; two signals mean symmetry; the 2.44 quartet fits CH₂ beside the C=O; the others give four, five and three signals. Crossed mistake: "3 : 2 means five hydrogens, so one ethyl group".
- **Misconceptions addressed:** "areas are heights" (5); "the ratio is the actual numbers" (5; A2 crossed); "a quartet is four hydrogens" (9, a short scene); "hydrogens across an O or C=O are neighbours" (A1 crossed); "equivalent hydrogens split each other" (7); "count the TMS line" (2, recall).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **NmrSpectrum, proton mode** (imported from c11a, extended in this lesson's parts file: multiplets drawn as clusters of lines with binomial heights, line spacing exaggerated for readability; an environment bracket over each multiplet; an **integration line** that steps up at each signal with step heights in the stated ratio and small number tags; a zoom from 0 to 12 ppm down to the window in use, labelled); **neighbour field arrows** (two or three small coded arrows on the next carbon, each with or against a field line; a tally strip below shows the combinations and the resulting lines rising one by one); **H environment rings** (kit `FullMol` with hydrogens shown; each set of equivalent hydrogens ringed in its signal's colour: teal, amber, violet, rust as in c11a); **pattern chips** ("ethyl: triplet 3H + quartet 2H"; "CH₃ singlet: no H next door"); crossed chips, countdown ring, key notes board (shared kit).
- **Author notes (not learner copy):** (a) Shifts are in CDCl₃, rounded to one decimal place on screen and in speech as "about"; see Numbers to verify. (b) Deuterated solvents: CDCl₃ carries ²H, which does not resonate in the ¹H window, so the solvent doesn't swamp the spectrum; a small residual CHCl₃ line at 7.26 ppm is usually present in real spectra and is left out of the coded spectra (outside every window used). Not taught. (c) Pascal heights: two equivalent neighbours give 1 : 2 : 1, three give 1 : 3 : 3 : 1. Drawn, only the first narrated ("the middle one twice as tall"). Real line spacing (J about 7 Hz) is about 0.02 ppm at 400 MHz; the coded multiplets exaggerate it and carry no ppm spacing claim. (d) O–H shift in ethanol varies (roughly 1 to 5 ppm with concentration, solvent and temperature); drawn near 2.6 with "position varies". In very dry or slow-exchange samples the O–H can couple and appear as a triplet; "usually" covers this. (e) Isopropyl (doublet 6H, septet 1H) and pentan-2-one's sextet need n+1 with several equivalent neighbours on two sides; held for c12 or g03. (f) First-order n+1 applies when the neighbouring hydrogens couple equally; all learner cases here are simple ethyl, methyl and isolated groups. (g) Pronunciations: "bromo-ethane", "ethyl ethanoate" as "ethyl eth-an-oh-ate", "methyl propanoate", "pentan-three-one", "pentan-two-one", "three-methylbutan-two-one", "pentanal", "n plus one", "C H three", "C H two", "O H", "C equals O", "TMS" as letters.

Main question: *Carbon-13 told you ethanol has two kinds of carbon. Its proton spectrum shows three signals, of different sizes, and two are split. What does each feature tell you?*
Entry knowledge (chem-m8-c11a; chem-m7-c01, c02): see Scope.
Stops after: counting hydrogen environments; reading a given shift; using areas as a ratio scaled by the formula; explaining and applying the n+1 rule, with the O–H and equivalence limits; reading and predicting a whole spectrum; the ethyl and lone CH₃ patterns.
Handoff: combining MS, IR and NMR (route chem-m8-c12).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Pronunciations as in author note (g). Colour key: hydrogen environment 1 teal, 2 amber, 3 violet (and rust if a fourth is needed); each environment's ring on the molecule, its signal and its integration step share one colour; TMS grey. Board layout (constant): heading top-left; molecule (with hydrogens) in the left half; spectrum across the lower half; the right half holds one current card.

### 1. hook (one molecule, more clues)
> Carbon-13 told you ethanol has two kinds of carbon. Now look at its proton NMR spectrum. There are three signals, they're different sizes, and two of them are split into little clusters of lines. Each of those features is a separate clue. Read all three, and the spectrum tells you not just which hydrogens are there, but how they're **joined**.

Visual: heading writes on: "What do the hydrogens tell you?". Left: ethanol (kit skeletal) with c11a's two coloured carbon rings and its small two-line carbon spectrum beneath (grey chip "c11a: 2 carbon environments"). On "proton NMR spectrum" the carbon spectrum slides up and dims; the proton spectrum draws across the lower half (0 to 5 ppm window, TMS grey at 0): a quartet near 3.7, a singlet near 2.6 (grey tag "O–H: position varies"), a triplet near 1.2, all grey. On "three signals" three brackets write over them; on "different sizes" a faint integration line steps across; on "clusters of lines" the quartet and triplet pulse. Three small "?" chips write in the right half: "how many signals?", "how big?", "how many lines?". Bright at the end: the three "?" chips.

### 2. same rules, new nucleus
> Proton NMR works the same way as carbon-13, but it watches hydrogen-1 nuclei, called protons here. Electrons shield each hydrogen, nearby electronegative atoms deshield it, and TMS still sets zero. The scale is much shorter, though, from 0 to about 12 ppm. Proton shifts aren't on the data sheet, so an exam question gives you any values you **need**.

Visual: `m8-nmr-machine-v1.png` small at upper right with `m8-nmr-sample-tube-v1.png` dropping in (one short replay of c11a's motion; grey chip "c11a"). The spectrum axis redraws as 12 to 0 ppm (tag "¹H: 0 to about 12 ppm"), then a ghost of c11a's 220 to 0 axis slides in above it for one beat and fades (tag "¹³C: 0 to about 220"). Three recall chips write in a column: "electrons shield", "electronegative atoms deshield → left", "TMS = 0, not counted". On "need" a card writes: "¹H shifts: given in the question, not on the data sheet" (bright). The axis then zooms to 5 to 0 ppm (tag "zoomed: 0 to 5 ppm"). Bright at the end: the card.

### 3. clue one: how many signals
> First clue: the number of signals. Hydrogens in identical surroundings give one signal, so the signals count the hydrogen environments. In ethanol, the three hydrogens on the end carbon are all alike, and the two on the middle carbon are alike. The O H hydrogen is on its own. That's three environments, so three signals. Symmetry merges hydrogens too, just as it merged **carbons**.

Visual: ethanol redraws with all hydrogens (kit `FullMol`). On "end carbon" the three CH₃ hydrogens ring teal together; on "middle carbon" the two CH₂ hydrogens ring amber; on "on its own" the O–H hydrogen rings violet. The spectrum's three signals take the matching colours as each set is named (triplet teal, quartet amber, singlet violet), with connectors. On "three signals" a rule card writes: "number of signals = number of H environments" (bright). On "carbons" a small grey propan-2-ol with its mirror line flashes from c11a (tag "6 CH₃ hydrogens: one signal"). Bright at the end: the rule card and the three coloured signals.

### 4. clue two: where each signal sits
> Second, where each signal sits. The C H two hydrogens are on the carbon bonded to oxygen. The oxygen pulls electrons away, so they're deshielded, and they appear near 3.7 ppm. The C H three hydrogens are further from the oxygen, so they sit near 1.2. Hydrogens close to an oxygen, a C equals O or a halogen usually land further **left**.

Visual: the amber CH₂ hydrogens pulse; c11a's electron cloud halo appears on that carbon, thinning towards O (small, grey chip "c11a: deshielded"); the amber quartet gets the value tag "about 3.7". The teal CH₃ hydrogens pulse; the teal triplet gets "about 1.2". The violet singlet gets a grey tag "O–H: position varies". On "left" a card writes: "near O, C=O or a halogen → further left" (bright), and the right-to-left arrow under the axis glows. Bright at the end: the card and the two value tags.

### 5. clue three: how big each signal is
> Third, how big each signal is. The area under a signal is proportional to the number of hydrogens that make it. The machine draws an integration line that steps up at each signal, and the step heights compare the areas. For ethanol, they come out three to two to one, matching the C H three, the C H two and the O H. It's the area that counts, not the height of the tallest line. And areas give a ratio, not the actual **numbers**.

Visual: the integration line draws from right to left over the spectrum, stepping up at each signal; each step fills in its colour; number tags "3" (teal), "2" (amber), "1" (violet) write beside the steps as spoken. On "not the height of the tallest line" the singlet (a single tall line) and the quartet (shorter lines, larger total area) are both outlined; a shaded area fills under each; a chip "tallest line = most H" fades in and is crossed. On "numbers" a card writes: "areas → a ratio of H, not the numbers" (bright). Bright at the end: the three step tags and the card.

### 6. why signals split
> Now the clusters of lines. Each hydrogen on the next carbon is a tiny magnet too. It either lines up with the field, adding a little to it, or against it, taking a little away. Look at the C H three in ethanol. Its two neighbours can be both with, one with and one against, which can happen two ways, or both against. That's three slightly different fields, so the signal splits into three **lines**, with the middle one twice as tall.

Visual: the board clears to a close-up: ethanol's CH₃ carbon (teal hydrogens) on the left and the CH₂ carbon with its two amber hydrogens on the right, each amber hydrogen carrying a small coded magnet arrow. Right half: a tally strip. On "both with" both arrows point with the field (strip row "with, with": field nudged up). On "one with and one against" two rows write: "with, against" and "against, with" (bracketed "2 ways"). On "both against" the last row writes (field nudged down). On "three slightly different fields" the three field levels become three lines rising from a baseline in the zoomed teal signal, heights 1, 2, 1 (the middle line grows twice as tall as its row count is said). Bright at the end: the three lines and the "2 ways" bracket.

### 7. the n plus one rule
> That's the n plus one rule. For simple spectra like these, a hydrogen with n equivalent neighbours on the next carbon gives n plus one lines. The C H three has two neighbours, so it's a triplet. The C H two has three neighbours on the methyl side, so it's a quartet. Hydrogens in the same environment don't split each other. And the O H hydrogen swaps between molecules so fast that it usually shows as one line, called a singlet, and doesn't split its **neighbours**.

Visual: a rule card writes: "simple spectra: n equivalent neighbours → n + 1 lines" (bright). Back to the full ethanol spectrum. On "two neighbours" the two amber hydrogens pulse and the teal signal gets "2 + 1 = 3: triplet". On "three neighbours" the three teal hydrogens pulse and the amber signal gets "3 + 1 = 4: quartet" (the 1 : 3 : 3 : 1 heights drawn, not labelled). On "same environment" a small grey chip "equivalent H: no splitting" writes beside the teal set. On "singlet" the violet O–H hydrogen flickers between two coded ethanol outlines (swap motion), and the violet signal gets "singlet"; a dotted link from O–H to the CH₂ is drawn and crossed (tag "doesn't split its neighbours"). A small names chip writes: "1 singlet, 2 doublet, 3 triplet, 4 quartet". Bright at the end: the rule card and the three multiplicity tags.

### 8. reading one from scratch: bromoethane
> Let's read one from scratch. A compound C two H five Br gives two signals, so it has two hydrogen environments. The areas are three to two. The smaller signal, near 3.4, is a quartet, so those two hydrogens have three neighbours. The larger, near 1.7, is a triplet, so those three hydrogens have two neighbours. A C H three next to a C H two is an ethyl group, so this is bromoethane. The C H two sits further left because it's bonded to the **bromine**.

Visual: the board clears. Formula chip "C₂H₅Br" at top-left. The spectrum draws (grey): a quartet near 3.4 and a triplet near 1.7, with integration steps tagged "2" and "3". One reasoning line writes per sentence in the right half: "2 signals → 2 H environments"; "areas 3 : 2"; "quartet, 2H → 3 neighbours" (the quartet turns amber); "triplet, 3H → 2 neighbours" (the triplet turns teal); earlier lines dim as each new one writes. On "ethyl group" bromoethane writes with hydrogens (kit `FullMol` with Br; see Open decisions), CH₃ hydrogens teal, CH₂ hydrogens amber; pattern chip "ethyl: triplet 3H + quartet 2H" (bright). On "bromine" the Br pulses and an arrow of electron density points to it. Bright at the end: the pattern chip and bromoethane.

### 9. a quartet isn't four hydrogens
> Here's the classic trap. A quartet doesn't mean four hydrogens. The number of lines counts the neighbours, plus one. The area counts the hydrogens in the signal itself. So in bromoethane, the quartet is two hydrogens, and the triplet is three. Keep the two questions apart: how many lines, then how big an **area**.

Visual: the bromoethane quartet enlarges. A chip "quartet = 4 H" fades in and is crossed. Two arrows split from the quartet: one to its four lines, labelled "lines: 3 neighbours + 1", one to its shaded area and integration step, labelled "area: 2 H here". The same pair writes small for the triplet ("lines: 2 + 1"; "area: 3 H"). On "area" a two-question card writes: "How many lines? → neighbours. How big an area? → hydrogens." (bright). Bright at the end: the card.

### 10. ethyl ethanoate: a lone methyl
> Now a molecule with a surprise. Ethyl ethanoate gives three signals, in the ratio three to two to three. The quartet near 4.1 and the triplet near 1.3 are the ethyl group, and the quartet sits far left because its carbon is bonded to the ester oxygen. The third signal, near 2.0, is a singlet with three hydrogens. A C H three with no hydrogens on the next atom has nothing to split it, and this one sits beside the C equals **O**.

Visual: the board clears. Ethyl ethanoate writes with hydrogens; c11a's small carbon spectrum of it sits at the upper right (grey chip "c11a: 4 carbon environments"). The proton spectrum draws: quartet near 4.1, singlet near 2.0, triplet near 1.3, integration steps "2", "3", "3". On "ethyl group" the OCH₂ hydrogens ring amber and the end CH₃ teal, the quartet and triplet colour to match, and the ethyl pattern chip returns. On "ester oxygen" the ester O pulses. On "singlet" the CH₃C=O hydrogens ring violet and the singlet turns violet; on "nothing to split it" the C=O carbon gets a grey tag "no H here". Pattern chip "CH₃ singlet: no H next door" writes (bright). Bright at the end: the two pattern chips.

### 11. memory aid
> One line for the three clues: signals, areas, neighbours plus one. Signals count environments, areas compare hydrogens, and lines count equivalent neighbours, plus one.

Visual: the board clears. Handwritten line: "Signals, areas, neighbours + 1." Under each phrase, a small icon from this video: three brackets (signals), an integration step (areas), a quartet (neighbours + 1). Under the line, three small labels write one per clause: "signals: environments", "areas: compare H (formula gives the numbers)", "lines: equivalent neighbours + 1". On "areas compare" feedback 2's "3 : 2 = 6 : 4 (10 H)" scaling line appears small beside the integration icon (tag "see attempt 2"). Small grey second line: "A quartet is not four hydrogens." Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. Predict the proton NMR spectrum of methyl propanoate. Give the number of signals, their relative areas and the splitting of each, with reasons. Pause here to answer.

Visual: the board clears. Question card, worded as printed (A1 under Decisions), with the tag "HSC-style question, written for HSCScience". The condensed formula CH₃CH₂COOCH₃ as printed; no structure with hydrogens ringed, no spectrum. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> Three signals, in the ratio three to two to three. The C H three on the oxygen has no hydrogens next door, so it's a **singlet**. The C H two has three neighbours, so it's a quartet, and the end C H three has two, so it's a **triplet**. Counting the methyl hydrogens across the ester link as neighbours is the **slip**: they're not on the next carbon.

Visual: the card stays, shrunk to the top; "number of signals", "relative areas" and "splitting" are underlined as each is answered. Methyl propanoate writes with hydrogens; on "three signals" the OCH₃ hydrogens ring violet, CH₂ amber, CH₃ teal. A predicted spectrum draws: violet singlet near 3.7, amber quartet near 2.3, teal triplet near 1.1, integration "3", "2", "3". On "singlet" the violet signal is tagged "no H next door"; on "triplet" the teal signal "2 + 1". On "slip" a chip "CH₂ is a sextet: counted the OCH₃ hydrogens" fades in and is crossed (caption "neighbours = H on the next carbon"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A compound C five H ten O gives just two proton signals: a triplet at 1.05 ppm with relative area 3, and a quartet at 2.44 ppm with relative area 2. Identify the compound from the four on the card, and justify your answer. Pause here to answer.

Visual: question card, worded as printed (A2 under Decisions): the formula, the four names, both signals with shifts, splitting and areas, and the printed shift note "(A CH₂ next to a C=O group appears at about 2.0 to 2.7 ppm.)". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no structures, no spectrum).

### 15. feedback 2 (brief)
> It's pentan-3-one. A triplet and a quartet in a three to two ratio suggest an ethyl group. But the formula has ten hydrogens, so the real numbers are six and four, which means two identical ethyl groups. Of these candidates, only the symmetrical pentan-3-one gives two signals, and the quartet at **2.44** fits a C H two next to the C equals O. Reading three to two as five hydrogens, and one ethyl group, is the **trap**.

Visual: the card stays, shrunk to the top. On "ethyl group" "triplet" and "quartet" are underlined, and the ethyl pattern chip returns with a grey tag "a candidate pattern: check the other clues". On "ten hydrogens" "C₅H₁₀O" and "relative area 3 ... 2" are underlined; a small line writes "3 : 2 = 6 : 4 (10 H)". On "only the symmetrical pentan-3-one" "two signals" is underlined and pentan-3-one writes with hydrogens, the mirror line through C=O, both CH₃ sets teal, both CH₂ sets amber. On "2.44" "2.44 ppm" and the printed note are underlined. The other three names get grey chips "4 signals", "5 signals", "3 signals" and dim. On "trap" a chip "3 : 2 means 5 H, one ethyl group" fades in and is crossed (caption "the formula sets the real numbers"). Hold about 1 second.

### 16. decision rule and handoff
> So, with a proton spectrum, ask four questions. How many signals? Where does each one sit? How big is each area? And how many lines? Then build a structure that explains every one. **Next**, you'll combine mass spectrometry, infrared and both kinds of NMR to identify a single molecule.

Visual: the board clears. A four-row card writes, one row per question: "How many signals? → H environments" → "Where? → near O, C=O, halogen = left (shifts given)" → "How big? → ratio of H (scale by the formula)" → "How many lines? → neighbours + 1". A last row: "Build one structure that explains every clue." On "Next" a chip "Next: combining MS, IR and NMR" slides in at the lower right. Hold about 2 seconds.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. ¹H NMR: number of signals = number of hydrogen environments (symmetry merges them). Shifts run 0 to about 12 ppm and are given in the question; H near O, C=O or a halogen sits further left.
2. Integration: the area under a signal is proportional to the number of H in it. Areas (not heights) compare hydrogens as a ratio; use the formula to get the real numbers.
3. n+1 rule (simple spectra): n equivalent H on the next carbon split a signal into n + 1 lines (singlet, doublet, triplet, quartet). Equivalent H don't split each other; an O–H usually gives a singlet.
4. Patterns: triplet (3H) + quartet (2H) suggests an ethyl group, CH₃CH₂–; check it against the other clues. A CH₃ singlet has no H on the next atom (for example CH₃ beside C=O).

Memory aid (large, on the notes screen): *Signals, areas, neighbours + 1.* Second line: *A quartet is not four hydrogens.*

## Teaching checks

- **Does it explain causes?** Why hydrogens share a signal: identical surroundings (3). Why the CH₂ is further left: oxygen pulls electrons away (4). Why areas matter: area is proportional to the number of hydrogens (5). Why a signal splits: each neighbour's tiny magnet adds to or subtracts from the field (6). Why three lines for two neighbours, and the middle one tallest: the combinations, with one occurring two ways (6). Why the O–H is usually a singlet: it swaps between molecules fast (7). Why the bromoethane CH₂ is further left: bonded to bromine (8). Why the lone CH₃ is a singlet: no hydrogens next door (10). Why 3 : 2 can mean 6 : 4: areas give a ratio (5, A2).
- **Misconceptions addressed:** "tallest line = most hydrogens" (5, crossed chip); "the ratio is the number of hydrogens" (5; A2 crossed); "a quartet is four hydrogens" (9); "equivalent hydrogens split each other" (7); "hydrogens across an O or C=O are neighbours" (A1 crossed).
- **One idea at a time:** one clue per scene on the same ethanol spectrum (3 to 7); bromoethane read one line per sentence with earlier lines dimmed (8); only one pattern chip new per scene (8, 10).
- **Response opportunity:** two unseen HSC-style tasks with every condition visible (A1: the name and condensed formula, the three things to state; A2: the formula, four candidates, both signals with shifts, splitting and areas, and the printed CH₂ shift note), 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 24 s and 30 s.
- **Avoided double teaching:** resonance, shielding, ppm and TMS (c11a, one sentence and chips); symmetry (c11a's mirror line, one flash); ethyl ethanoate's carbons (c11a, small recall).
- **Dotpoint coverage:** `C8-IQ2-02`, proton NMR: environments, shifts, integration and splitting, used to analyse structure. With c11a this covers "proton and carbon-13 NMR".
- **Out of scope by design:** coupling constants, complex multiplets, D₂O exchange, deuterated solvents, combining techniques (c12).

## Numbers used (author note: every structure, shift, area and multiplicity)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Ethanol, CH₃CH₂OH | CH₂ about 3.7 (quartet, 2H); OH about 2.6, varies (singlet, 1H); CH₃ about 1.2 (triplet, 3H); areas 3 : 2 : 1 | 1, 3 to 7 |
| Bromoethane, CH₃CH₂Br | CH₂ about 3.4 (quartet, 2H); CH₃ about 1.7 (triplet, 3H); 3 : 2 | 8, 9 |
| Ethyl ethanoate, CH₃COOCH₂CH₃ | OCH₂ about 4.1 (quartet, 2H); CH₃C=O about 2.0 (singlet, 3H); CH₃ about 1.3 (triplet, 3H); 3 : 2 : 3 | 10 |
| A1 methyl propanoate, CH₃CH₂COOCH₃ | OCH₃ about 3.7 (singlet, 3H); CH₂ about 2.3 (quartet, 2H); CH₃ about 1.1 (triplet, 3H); 3 : 2 : 3 | 12, 13 |
| A2 pentan-3-one, CH₃CH₂COCH₂CH₃ | CH₂ 2.44 (quartet, 4H); CH₃ 1.05 (triplet, 6H); 6 : 4 shown as 3 : 2 | 14, 15 |
| A2 other candidates | pentan-2-one 4 signals; pentanal 5 signals; 3-methylbutan-2-one 3 signals | 15 |
| Splitting | 2 neighbours → triplet 1 : 2 : 1; 3 neighbours → quartet 1 : 3 : 3 : 1 | 6, 7 |
| ¹H range | 0 to about 12 ppm | 2, notes |
| A2 printed note | CH₂ next to C=O about 2.0 to 2.7 ppm (site card 2 table) | 14, 15 |
| TMS | 0 ppm, not counted | 2, all spectra |

## Numbers to verify (all values, repeated for Codex)

**Status (Revision 2, science check S2): provisional.** The shifts and line patterns below are remembered literature values (CDCl₃), not yet checked against inspected spectra. The science check reconstructed and confirmed the splitting and integration for ethanol (CH₃ triplet, CH₂ quartet, exchanging OH singlet), bromoethane (3H triplet, 2H quartet), ethyl ethanoate (3H singlet, 2H quartet, 3H triplet), methyl propanoate (OCH₃ singlet, CH₂ quartet, CH₃ triplet) and pentan-3-one (6H triplet, 4H quartet, 3 : 2), as structural checks only. **Build gate:** no proton spectrum is drawn, and no shift is printed or voiced, until Codex records for each compound an inspected SDBS (or other named database) record with accession, solvent and field; a shift more than 0.1 ppm from that record changes. The ethanol O–H is never given one fixed value: it is drawn with the tag "position varies", and no learner copy states its shift. Every signal drawn in a coded spectrum is listed here.

- **Ethanol** ¹H: CH₂ 3.69 (q, 2H); OH about 2.6 in CDCl₃ but concentration-dependent, roughly 1 to 5 (s, broad, 1H); CH₃ 1.22 (t, 3H). Drawn at 3.7, 2.6, 1.2.
- **Bromoethane** ¹H: CH₂ 3.43 (q, 2H); CH₃ 1.67 (t, 3H). Drawn at 3.4, 1.7.
- **Ethyl ethanoate** ¹H: OCH₂ 4.12 (q, 2H); CH₃C=O 2.04 to 2.05 (s, 3H); CH₂CH₃ 1.26 (t, 3H). Drawn at 4.1, 2.0, 1.3.
- **Methyl propanoate** ¹H: OCH₃ 3.67 (s, 3H); CH₂ 2.32 (q, 2H); CH₃ 1.14 (t, 3H). Drawn at 3.7, 2.3, 1.1 (A1 feedback only; A1's question gives no shifts).
- **Pentan-3-one** ¹H: CH₂ 2.44 (q, 4H); CH₃ 1.05 to 1.06 (t, 6H). Printed on the A2 card as 2.44 and 1.05.
- **A2 candidates (counts, not drawn):** pentan-2-one: 2.42 (t, 2H), 2.13 (s, 3H), 1.60 (sextet, 2H), 0.92 (t, 3H): 4 signals. Pentanal: 9.77 (t, 1H), 2.43 (td, 2H), 1.63 (m, 2H), 1.36 (m, 2H), 0.93 (t, 3H): 5 signals. 3-Methylbutan-2-one: 2.58 (septet, 1H), 2.14 (s, 3H), 1.11 (d, 6H): 3 signals. A2 depends on pentan-3-one being the only candidate with exactly two signals, a triplet and a quartet.
- **A2 printed note:** "A CH₂ next to a C=O group appears at about 2.0 to 2.7 ppm" (site card 2: H–C–C=O about 2.0 to 2.7). 2.44 lies inside it.
- **Pascal heights:** 1 : 2 : 1 (two equivalent neighbours), 1 : 3 : 3 : 1 (three).
- **Formulas:** ethanol C₂H₆O; bromoethane C₂H₅Br; ethyl ethanoate and methyl propanoate C₄H₈O₂ (isomers); pentan-3-one, pentan-2-one, pentanal, 3-methylbutan-2-one C₅H₁₀O (isomers); hydrogen totals 6, 5, 8, 8, 10 match the integration sums (3 + 2 + 1; 3 + 2; 3 + 2 + 3; 3 + 2 + 3; 6 + 4).
- **Science claims:** an O–H proton in ethanol usually appears as a singlet and does not split the CH₂ under routine conditions (exchange); equivalent protons do not show splitting among themselves; ¹H range about 0 to 12 ppm (carboxylic acid O–H up to about 13; the site's table gives 10 to 13); the NESA data sheet carries no ¹H shift table (confirm against the current data sheet).

## Memory aid check

- **"Signals, areas, neighbours + 1."** Spoken in Revision 2 as "Signals count environments, areas compare hydrogens, and lines count equivalent neighbours, plus one" (learning finding 1, science finding 1: areas give a ratio until the formula sets the numbers). Written for this lesson from the pre-design pack's site aid ("environments, areas, neighbours") and the Module 8 bank's "¹H NMR: the n + 1 rule" (*Shortcut*: "A signal splits into n + 1 peaks, where n is the number of H atoms on neighbouring carbons. OH hydrogens usually appear as a single peak and don't split their neighbours. The area (integration) shows the relative number of H atoms"). Assumptions checked: neighbours are equivalent hydrogens on the next carbon (said in scene 7; A1 crossed); "areas" means relative areas, scaled by the formula (scene 5, A2); O–H excluded (scene 7). Introduced after scenes 3 to 10.
- **"A quartet is not four hydrogens."** Written for this lesson from scene 9 and site misconception box ("splitting can make one environment appear as several lines").
- **Pattern spotting (bank *Shortcut*).** Ethyl (triplet 3H + quartet 2H) and lone CH₃ singlet used in scenes 8, 10 and the notes. The isopropyl doublet-septet is not used (author note e).
- **Considered, not used:** "¹H and ¹³C use different scales" (*Trap*; said in scene 2 as content, not as an aid); "Mass, groups, map" (c12).

## Narration length estimate

Revision 2 count (31 Oct; same rules): **5,618 characters** (Revision 1: 5,553; no characters were cut, as required near the 5,500 floor), 17 headings. Characters per scene (1 to 17): 341, 347, 379, 333, 427, 431, 464, 450, 311, 427, 168, 176, 339, 254, 414, 282, 75. Speech about 422 s; with the same holds, countdowns and notes hold: **about 8.6 minutes (514 s)**, inside the band. Feedback: scene 13 about 26 s, scene 15 about 31 s. Still no reserve trims; any cut must be replaced.

Earlier count, Revision 1 count (30 Oct; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed, summed per scene): **5,553 characters**, 17 headings (16 narrated scenes plus key notes). Characters per scene (1 to 17): 341, 347, 379, 333, 427, 431, 433, 450, 311, 427, 159, 176, 339, 254, 389, 282, 75. At 13.3 characters per second the speech is about 418 s; add about 16 s of holds (1 s after most scenes; 2 s for the memory aid and the handoff), 20 s for two countdowns and about 55 s more of the quiet notes hold: **about 8.5 minutes (509 s)**, inside the 5,500 to 6,800 character band and under the 570 s ceiling. Feedback: scene 13 about 26 s, scene 15 about 30 s. The count sits near the bottom of the band, so there are no reserve trims; any cut must be replaced (scene 10's fallback in Open decisions would take the count below 5,500 and needs a replacement sentence, for example in scene 6). Scene 6 (431, about 32 s) carries the hardest reasoning; ease the pace there in the voiced preview, one combination per beat.

## Assets

Have (inspected 30 Oct; transparent PNG; scale uniformly only, never stretched):
- `public/assets/chemistry/m8-nmr-machine-v1.png` (2000 × 2000, brief 60; scene 2, small).
- `m8-nmr-sample-tube-v1.png`: commissioned by c11a (its Codex asset brief item 1); scene 2, small. If it is not delivered, use c11a's fallback (a coded outline tube).

Need: **no new plates.**

Coded: NmrSpectrum proton mode (imported from c11a, with multiplets, environment brackets and the integration line added in this lesson's parts file), kit structures with hydrogens and environment rings, electron cloud (c11a), neighbour field arrows and tally strip, O–H swap motion, reasoning lines, pattern chips, two-question card, four-question card, crossed chips, countdown ring, key notes board. No people or hands.

## Codex asset brief

No new art. Start only after the learning review and science check pass.

1. **Check, no new art.** Confirm `m8-nmr-sample-tube-v1.png` (from c11a's brief) reads clearly at 220 px tall beside `m8-nmr-machine-v1.png` scaled to 500 px wide, the size used in scene 2.

## Codex error-check brief

Error-only check, together with the learning review and science check (Codex writes both; brief 109 practice). Report errors; do not restyle or rewrite:
1. Re-check every shift, multiplicity, area and signal count under "Numbers to verify" against a named spectral database (SDBS preferred), and the narration, screen text, attempts, feedback and key notes against them.
2. Confirm the science claims listed under "Numbers to verify", including the O–H singlet under routine conditions and that the current NESA data sheet has no ¹H shift table.
3. Confirm A2's candidates give 4, 5 and 3 signals, so only pentan-3-one fits two signals, and that the printed CH₂ note (2.0 to 2.7 ppm) is needed and sufficient.
4. Confirm the two attempts are original (not copied from or closely paraphrasing a NESA paper or site L14's activities, MC set, Predict-then-Reveal or Short Answer Q1 to Q3), and that every condition each model answer needs is on its card.
5. Learning review (`../../student-learning-review.md`) from the stated entry knowledge (c11a), especially whether scene 6's tiny-magnet explanation of splitting is clear without spin language, whether "areas give a ratio, not the numbers" is set up well enough for A2, and whether scene 10 is one step too many before the attempts.
6. Confirm no em dash (U+2014) anywhere in this file, Australian spelling in narration and screen text, and the narration character count and per-scene counts by script with the build parser rules.
7. Do not log site corrections from this file; they are logged once from `chem-m8-c11a.md`.

## YouTube metadata (draft)

- **Title:** Proton NMR: Hydrogen Environments, Integration and the n+1 Rule | Year 12 Chemistry (83 characters)
- **Description:**

  "Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year12/module8/lesson14.sa.html

  Carbon-13 told you ethanol has two kinds of carbon. Its proton NMR spectrum shows three signals, of different sizes, and two of them are split into clusters of lines. Learn what each clue means: the number of signals counts the hydrogen environments, the shift shows what's nearby, the area under each signal gives the ratio of hydrogens, and the n+1 rule turns the lines into a count of neighbouring hydrogens. See why neighbouring hydrogens split a signal, why a quartet isn't four hydrogens, and how to read bromoethane and ethyl ethanoate from scratch. Signals, areas, neighbours plus one. Two practice questions are written for HSCScience in the HSC style; they are not official NESA questions.

  Chemistry 2017: Year 12 Module 8, Applying Chemical Ideas.
  Syllabus dotpoint (NSW Chemistry Stage 6, 2017, Module 8):
  "investigate the processes used to analyse the structure of simple organic compounds addressed in the course, including but not limited to:
  - proton and carbon-13 NMR
  - mass spectrometry
  - infrared spectroscopy (ACSCH130)"
  This video covers proton NMR; carbon-13 NMR is the previous video.
  Official 2017 course: https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017

  Prerequisites: How does carbon-13 NMR count carbon environments? Next: How can several spectra identify one molecule?

  #Year12Chemistry #Spectroscopy #HSCScience"
- **syllabusDotpoints:** the quoted dotpoint above, bullets kept as printed (c01 Revision 2 metadata rule). `verifyWording`: true (checked against `programme/syllabus/chem-2017-y12.json`, C8-IQ2-02, p58).
- **Lesson link:** site lesson 14, `.sa.html` form (root decision for all Module 8 designs); the same page as c11a.
- **Playlist:** Year 12 Chemistry: Module 8, Applying Chemical Ideas (2017 syllabus), playlist order 18.5 (root to set).

## Open decisions

- **Route JSON (root applies; this design does not edit it).** See `chem-m8-c11a.md` Open decisions: add `chem-m8-c11b` ("How does proton NMR reveal hydrogen environments?", L14, C8-IQ2-02, prerequisites chem-m8-c11a, start "Count hydrogen environments and read given shifts.", stop "Use integration and n+1 splitting to test structures.", next chem-m8-c12, playlist order 18.5), and update c12's prerequisites to c11a and c11b.
- **Kit addition.** `FullMol`'s atom type covers C, H and O only; bromoethane (scene 8) needs Br. Add Br (and Cl, matching `HAL3`) as a small new option below the existing exports; nothing existing changes. Fallback: draw bromoethane with `Skel` and a Br label, hydrogens added as `HGhosts`.
- **Scene 10 (ethyl ethanoate).** Kept: it adds the lone CH₃ singlet that A1 needs and joins c11a to c11b. If the learning review finds the run before the attempts too long, the fallback cuts scene 10's narration to its last two sentences (about 12 s saved) and keeps the full spectrum on screen.
- **Lesson key** (`m8c11b`): root to confirm when adding the LESSONS entry.

## Build ids

Lesson key `m8c11b` (route chem-m8-c11b). Suggested explainer folder `src/explainer/lessons/chem-m8-c11b`; build folder `docs/production/claude-pm/lessons/m8c11b` (root to confirm). Import, not copy: c11a's NmrSpectrum, electron cloud and mirror line; the molecule kit (`FullMol`, `Skel`, `Tag`, `Crossed`, `RuleChip`) from chem-m7-c01. The proton-mode multiplets, integration line, neighbour field arrows and tally strip are new and live in this lesson's parts file so c12 and g03 can import them.

In order (kebab-case; 17 scene headings, all `### N.`): hook, same-rules, signals, shift, integration, why-split, n-plus-one, bromoethane, quartet-trap, ethyl-ethanoate, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, decision-handoff, key-notes.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen, card on screen during and after). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `checks/m8c11b-learning-review.md` and `checks/m8c11b-claude-science-check.md`.
