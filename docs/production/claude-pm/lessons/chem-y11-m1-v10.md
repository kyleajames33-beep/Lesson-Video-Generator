# Year 11 Chemistry M1 V10: Line spectra and energy levels. Why does hydrogen give out only a few sharp colours, and what does that reveal about electrons in atoms? (design)

Status: Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,645 characters, 17 scenes, about 511 s (8.5 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: tenth video of Year 11 Chemistry (2017 syllabus), Module 1; last core video before the skills video `chem-y11-ws-v01`. Templates: `phys-y11-fa1-v01.md` (structure), `bio-y11-fa1-v05.md` (plates and asset brief); chemistry conventions `chem-m8-c03a.md` (its small `EnergyInset` electron-ladder inset in `src/explainer/lessons/chem-m8-c03a/parts.tsx` is the starting point for this video's larger energy-level diagram) and `chem-m8-c04.md` (emission against absorption wording). Pre-design pack: `../pre-design/chem-y11/chem-y11-m1-v10.md`. Route entry: `chem-y11-m1-v10` in `../../programme/chem-y11-route-inputs.json`. Site lessons read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module1/lesson13.sa.html` (SHA256 `a9c61816c6508eedc88f5fc90ab38adcb03462dfb255883bbd817f098c0dd3aa`, recomputed, matches; used: `l13-rutherford-s-gold-foil-experiment-key-detail-title` as one sentence of context, `l13-atomic-emission-spectra-and-the-bohr-model-title`, the model table's Rutherford and Bohr limitation rows, drill 3 and 5) and `.../module1/lesson16.sa.html` (SHA256 `1f62b2fec083361eaa2187bcb30a08332c32c03294713cc4f101b1695a90692f`, recomputed, matches; used: `l16-subshells-orbitals-and-electron-capacity-title`, only to name s, p, d and f as the next step). Site corrections applied: items 9 and 10 of `../site-corrections-chem-y11.md` (the flame-test method and its concentrated-acid paste stay out of this video; the flame appears only as context); item 11 is v11 material.

Owner rules applied: as v06 to v09 (one learner question; no people, hands or faces: Rutherford, Bohr and Schrödinger are named in narration but never pictured; real objects as painted plates, energy levels, photons, spectra, ray sketches and orbital clouds coded; 3 s prediction countdown; "Pause here to answer." with a 10 s countdown and the full question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 1; local ledger IDs `C1-IQ2-02` and `C1-IQ2-04`), quoted from `../../programme/syllabus/chem-2017-y11.json` (the ledger file shows a replacement character for the apostrophe in "atom's" and the "ö" in "Schrödinger"; both are restored here from the syllabus text, open decision 4):

- "model the atom's discrete energy levels, including electronic configuration and spdf notation (ACSCH017, ACSCH018, ACSCH020, ACSCH022)" (this video: discrete energy levels; electronic configuration and spdf are v11)
- "investigate energy levels in atoms and ions through:"
  - "examining spectral evidence for the Bohr model and introducing the Schrödinger model" (this video)
  - "collecting primary data from a flame test using different ionic solutions of metals (ACSCH019)" (v16; named here only)

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 37)

**Boundary:** opens on v09's final frame (glowing hydrogen tube, four-line strip, "?"). Teaches photons (energy sets colour); why the nuclear model with unrestricted electron energies predicts a continuous spectrum; Bohr's fixed energy levels and ground state; excitation and emission (photon energy equals the gap; no light while sitting in a level); why discrete gaps give discrete lines, with hydrogen's four visible lines as drops to level 2 and drops to level 1 as ultraviolet; each element's line pattern as a fingerprint and as evidence for the Bohr model; Bohr's limit and the Schrödinger model's orbitals as probability regions, naming s, p, d and f for later. Stops before electron configurations and spdf filling (v11), flame-test method and data (v16), absorption spectra beyond one phrase in feedback, and any E = hf or wavelength calculations.

## Decisions

- **Learner question (route wording made concrete; open decision 1).** Route: "How do line spectra reveal discrete atomic energy levels?" Proposed: "Why does hydrogen give out only a few sharp colours, and what does that reveal about electrons in atoms?" It starts from the observation the student can see, and its answer is the route's: the lines exist because electron energies are restricted to fixed levels. The answer, in order: one colour means one photon energy (2); unrestricted energies would give a rainbow (3); fixed levels (4); a photon carries exactly one gap (5); fixed gaps give fixed lines (6, 8); each element's levels give its own pattern, which is the evidence (9); Schrödinger keeps the levels but replaces orbits with orbitals (10).
- **Opening frame (equals v09's final frame).** `y11c-hydrogen-discharge-tube-lit-v1.png` (new) glowing at the centre, a coded four-line hydrogen spectrum strip to its right with a crossed rainbow ghost above it, a small coded atom at the left with a dim nucleus and a soft electron region holding a "?", the dimmed chlorine nuclei at the top left, and the chip "How do line spectra reveal discrete atomic energy levels?".
- **Contrast first (site: "discrete spectral lines rather than a continuous spectrum").** A hot filament lamp gives a continuous spectrum; hydrogen gives four lines. The existing `phys-y11-filament-lamp-v1.png` (unlit) is used with a coded warm glow on its filament (open decision 3 offers a lit plate instead). Both spectra are coded strips drawn through a coded ray sketch (a triangle prism in the standard optics-diagram convention, not a painted object).
- **Photons without E = hf.** The site writes "E = hf". The video needs only "a photon's energy sets its colour; violet more than red", which is enough to explain lines. E = hf appears as a small grey screen tag ("photon energy E = hf: more energy, higher frequency") so the site's equation is recognised, but nothing is calculated (author note a). The attempts use photon energies directly.
- **Why the nuclear model needed fixing (site model table and drill 3).** One sentence names Rutherford's gold-foil result (tiny nucleus, electrons outside) as v08's picture; the problem stated is the one this video's evidence answers: nothing limited electron energies, so any photon energy should be possible, giving a rainbow. The site's second limitation (orbiting electrons should radiate and spiral in) is stated on screen as a small tag only, to keep the spoken cause chain on spectra (author note b).
- **Stairs, not a ramp (analogy and memory aid).** Fixed energy levels are steps: an electron can stand on any step, never between. A ramp would allow any drop, so any colour. Assumptions checked in "Memory aid check" (the steps are not evenly spaced; drawn unevenly, as hydrogen's are).
- **Emission mechanism (site; pack trap).** Energy in (current or flame) lifts an electron to a higher level (excited); it drops back and gives out one photon whose energy equals the gap. The pack's trap is spoken: an electron sitting in a level gives out no light; light comes only from a jump. The pack's "a spectral line is a transition energy, not a photographed orbit" is shown as a tag on the spectrum strip.
- **Hydrogen's lines placed on a real diagram (author note c).** The level diagram is drawn to hydrogen's scale (E_n ∝ −1/n²), with drops 3, 4, 5, 6 → 2 giving 656, 486, 434, 410 nm (shown as the line colours only; wavelengths in grey on screen, not spoken). Drops to level 1 are labelled "ultraviolet (invisible)". "Bigger drop, more energy, toward violet" is visible because the arrows lengthen as the lines move left.
- **In-teaching prediction (3 s countdown, scenes 7 and 8).** Three levels drawn without numbers: how many lines? Answer: three (every pair of levels gives a drop). This builds the counting idea that A2 then tests with numbers (author note d: assumes no two gaps are equal and every drop is allowed; "could show" is spoken in the question).
- **Fingerprint and evidence (site, made explicit).** "Every element has its own set of levels, so its own pattern of lines" is the evidence argument: a model with fixed levels predicts lines, and the lines match the gaps (site: Bohr's calculated gaps matched hydrogen's lines). Sodium's strong yellow-orange line uses the existing `m8-flame-na-yellow-v2.png` as brief context. The flame-test practical is named as a later video (v16), with no method (site correction 9).
- **Schrödinger, briefly (route: "a brief orbital-probability introduction").** Bohr's orbits fitted hydrogen but failed for atoms with more electrons (site table). Schrödinger's model (1926) keeps energy levels but replaces paths with orbitals, regions where the electron is likely to be found, drawn as a dot-density cloud labelled "model: probability, not a path". s, p, d and f are named as orbital types for v11. The pack's caution is kept: no Bohr path is presented as a literal modern trajectory (the Bohr rings fade to dashed and are labelled "Bohr model" whenever both appear).
- **Attempts (original wording, HSC style).** A1 (pack candidate 1, rewritten with positive energies above the ground state, because negative level energies are untaught): levels 1.6 × 10⁻¹⁹ J and 4.1 × 10⁻¹⁹ J above the ground state; drop; emitted; 2.5 × 10⁻¹⁹ J. Crossed: "5.7 × 10⁻¹⁹ J" (adding). A2 (pack candidate 2): levels 0, 2, 5 units; photon energies 2, 3, 5; no 4. Crossed: "only 2 and 5" (missing the drop between the upper levels).
- **Mistake scene:** none separate. "Electrons give out light all the time" (5); "a line is a picture of an orbit" (6, tag); "bigger drop gives redder light" (6, the arrows); "the Bohr orbit is a real path" (10); "a photon carries the sum of the level energies" (crossed in 13); "count only drops to the bottom level" (crossed in 15).
- **Handoff (route next: `chem-y11-ws-v01`, "How can new evidence improve a testable chemistry question?").** Scene 16 draws the arc this video has just shown: nuclear model, then Bohr, then Schrödinger, each changed because new evidence didn't fit. The final frame turns that habit toward an investigation: a three-step model timeline with "new evidence" arrows, and a chip "Next: how can new evidence improve a testable chemistry question?", with v06's sand and salt accounting bar small beside it as the "current investigation" the route's ws-v01 start names (route start: "Use the current separation or quantitative investigation as one concrete case"). Root to confirm with the ws-v01 designer (open decision 2).
- **Site notes (read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted):**
  1. `l13-atomic-emission-spectra-and-the-bohr-model-title`: "Each element has a unique spectral fingerprint" is fine; "Each coloured line in the spectrum corresponds to an electron falling from a specific higher level to a specific lower level" is fine for hydrogen; but the flame-test card's "a flame test is really a simplified, single-colour version of a full emission spectrum" overstates (many flame colours, such as copper's blue-green, combine several lines or bands). Suggest "the flame colour is what the eye sees when a few strong lines dominate".
  2. Same lesson, model table: "Superseded by quantum mechanical model (Schrödinger, 1926) using orbitals (probability clouds)". Correct; noted as the source of this video's date.
  - Items 9 and 10 (concentrated-HCl paste; CH11-10 reference) are already logged and are not repeated here.
- **Cause chain taught, in order:** (1) one sharp line means one photon energy (2); (2) unrestricted electron energies would give a continuous rainbow (3); (3) so energies must be restricted to fixed levels (4); (4) a photon's energy equals the gap of one drop (5); (5) fixed gaps give fixed colours, and bigger drops give more energetic light (6); (6) every pair of levels gives a possible line (7, 8); (7) each element's own levels give its own pattern, and the match is the evidence (9); (8) Bohr's paths failed for bigger atoms; Schrödinger kept the levels and described orbitals as likely regions (10).
- **Entry knowledge:** Stage 5 light and colour (the visible spectrum, red to violet), energy transfer, and the atom with electron shells; v08 (nucleus and electrons; shells as a Stage 5 picture) and v09 (the handoff clue).
- **Learner-visible vocabulary:** photon (a packet of light energy, 2); continuous spectrum (every colour with no gaps, 1, 3); line spectrum (only certain sharp colours, 1); energy level (one of the fixed energies an electron can have, 4); ground state (the lowest level, where the electron normally sits, 4); excited (an atom whose electron has been lifted to a higher level, 5); emission (giving out light as an electron drops, 5); orbital (a region around the nucleus where an electron is likely to be found, 10).
- **Legacy logic ported:** none (the m8 `EnergyInset` is current explainer code, not legacy).
- **Explainer motion (coded, plus plates):** **spectrum strip** (dark band; continuous gradient or thin lines at true relative positions, drawn left to right as light "arrives"); **ray sketch** (a beam from the source through a coded triangle prism fanning onto the strip); **energy-level diagram** (horizontal lines to hydrogen's scale, labelled 1 to 6, an electron dot that jumps up on an "energy in" arrow and drops with a coloured wavy photon leaving the diagram and landing as its line on the strip); **stairs and ramp sketch** (scene 4: side-by-side profiles, a ball resting on steps against rolling on a ramp); **three-level diagram** (scenes 7, 8, 15); **orbital cloud** (scene 10: dot-density 1s cloud, dots denser near the nucleus, with a Bohr ring fading to dashed beside it); **model timeline** (scene 16); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, scribble circle, `HandText`, `KeyNotes`, `Heading`.
- **Board layout (constant):** heading top left; energy-level diagram at the left; source plate and spectrum strip at the right, so each photon travels from a drop on the left to its line on the right.

Author notes (not learner copy):
(a) E = hf: shown as a grey tag only. Photon energy increases from red to violet. No calculation.
(b) Classical radiation argument: an orbiting (accelerating) charge would radiate continuously and spiral inward; tag "classical physics also predicted collapse" in scene 3. Not spoken.
(c) Hydrogen levels: E_n = −13.6 eV ÷ n². Drops to n = 2: 3 → 2, 1.889 eV, 656.4 nm (red); 4 → 2, 2.550 eV, 486.2 nm (blue-green); 5 → 2, 2.856 eV, 434.1 nm (blue-violet); 6 → 2, 3.022 eV, 410.2 nm (violet). Drops to n = 1: 2 → 1, 10.20 eV, 121.6 nm; 3 → 1, 12.09 eV, 102.6 nm (ultraviolet). The spectrum strip positions lines by wavelength from 400 to 700 nm. Level spacing drawn to the −1/n² scale (n = 1 well below n = 2; n = 5 and 6 close together). Narration calls the third line "blue" (the site's "blue"; 434 nm reads blue-violet).
(d) Prediction and A2 assume every downward drop is possible and no two gaps are equal; real spectra also depend on which transitions are allowed. Learner copy says "could show" and "can it emit"; A2's answer follows the pack ("this simple model tests energy gaps only").
(e) Sodium's yellow-orange: the 589 nm doublet from excited sodium atoms in the flame (ions are reduced to atoms in the flame). Learner copy says "a sodium compound in a flame"; the ion-or-atom detail is v16's.
(f) Schrödinger's model: published 1926; orbitals as probability regions; energy levels retained (subshell energies differ in multi-electron atoms, v11). "We can't track an electron along a path" is a school-level statement of the model's description, not a claim about measurement limits.
(g) Pronunciations: "Schrödinger" (SHROH-ding-er); "photon"; "ten to the minus nineteen joules".

Main question: *Why does hydrogen give out only a few sharp colours, and what does that reveal about electrons in atoms?*
Entry knowledge: Stage 5 light, colour and energy; atoms with electron shells; v08, v09.
Stops after: photons, the continuous-spectrum problem, Bohr's levels, emission as drops, line counting, fingerprints as evidence, Schrödinger's orbitals named and pictured. No configurations, flame-test method or calculations with E = hf.
Handoff: chem-y11-ws-v01, how new evidence improves a testable question.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key (continues v08 and v09): nucleus red and grey (small); electrons blue; energy levels ink lines with grey labels "1" to "6"; "energy in" arrows orange; photons as wavy arrows in the colour of their light (ultraviolet drawn as a grey dashed wavy arrow labelled "UV"); spectrum strips on a near-black band; Bohr rings dashed grey once Schrödinger appears; orbital clouds blue dots; crossed chips red strike.

### 1. hook: four lines, not a rainbow
> Last time, we left a clue. Pass an electric current through hydrogen gas, and it glows. Now spread that light out with a prism, and you don't get a rainbow. You get just four sharp coloured **lines**: red, blue-green, blue and **violet**, with darkness in between. Compare a hot lamp filament. Its light spreads into every colour, with no **gaps**. So why does hydrogen give out only these few colours? The answer tells us how electrons are arranged in an **atom**.

Visual: opens on v09's final frame (Decisions). On the second sentence a coded ray sketch draws: a beam from the tube through a small triangle prism, fanning onto the spectrum strip. On "lines" the four lines draw onto the strip one at a time, left to right by wavelength; on "violet" the last appears, and the dark gaps between them get a grey tag "darkness". On "gaps" `phys-y11-filament-lamp-v1.png` slides in below the tube with a coded warm glow on its filament; a second ray sketch fans its light onto a second strip, which fills with a smooth continuous rainbow; tags "continuous spectrum" (lamp) and "line spectrum" (hydrogen). On "atom" the heading writes on: "Line spectra: why only these colours?" and the small atom's "?" pulses.

### 2. one colour, one photon energy
> First, we need one idea about light. Light carries energy in tiny packets, called photons. Each photon's energy sets its **colour**. Red photons carry the least energy of the visible colours, and violet photons carry the **most**. So a single sharp line means photons that all have the same, exact **energy**.

Visual: the lamp and its strip shrink to a thumbnail; the hydrogen strip enlarges. On "colour" a small wavy photon arrow travels from the tube and lands on the red line; tag "photon: a packet of light energy". On "most" an orange arrow writes along the strip's length from red to violet, labelled "photon energy increases"; a grey tag "E = hf" sits small beside it. On "energy" the red line is ringed with a scribble circle and tagged "one line = one exact photon energy".

### 3. what the nuclear model would predict
> Now, the nuclear model of the atom, from Rutherford's gold foil experiments, has a tiny nucleus with electrons around it. But nothing in that model limits an electron's energy. If an electron could have any energy at all, it could lose any amount, and the atom could give out photons of every **energy**. That would be a smooth rainbow, like the **filament**. Hydrogen's lines say that can't be **right**.

Visual: the small atom from the opening enlarges at the left: a tiny nucleus and an electron dot circling at a loose radius, tag "nuclear model (v08)". On the second sentence the electron drifts smoothly inward and outward (no fixed radius), and a vertical energy bar beside it fills as a smooth gradient, tag "any energy?". On "energy" wavy photons of every colour stream out, and a strip below fills with a continuous rainbow. On "filament" the lamp thumbnail glows and its rainbow strip slides next to this one: identical. On "right" the predicted rainbow is crossed and the real four-line strip slides over it; a small grey tag "classical physics also predicted the electron would spiral in" writes under the atom.

### 4. Bohr's idea: fixed energy levels
> In nineteen thirteen, Niels Bohr proposed a fix. An electron can only have certain fixed energies, called energy levels. Think of a staircase, not a **ramp**. You can stand on any step, but never between **steps**. The lowest level, where an electron normally sits, is called the ground **state**.

Visual: board clears to the stairs and ramp sketch: on "ramp" two side profiles draw, a smooth ramp with a ball that can rest anywhere (crossed lightly, tag "any energy") and a staircase with uneven steps. On "steps" a ball hops from step to step, never stopping between; tag "energy levels: only these energies". The staircase then rotates into the energy-level diagram: six horizontal lines at hydrogen's spacing, labelled 1 to 6, with "energy" on a vertical arrow. On "state" an electron dot settles on level 1, tagged "ground state". A grey tag "Bohr model, 1913" sits at the diagram's top.

### 5. up, then down: how the light is made
> Here's how the light is made. The electric current, or a hot flame, gives an electron energy, and it jumps up to a higher level. We say the atom is **excited**. But it doesn't stay there. The electron soon drops back to a lower level, and as it drops, it gives out one photon. That photon's energy is exactly the energy gap between the two **levels**. And an electron sitting in a level gives out no light at **all**. Light only comes from a **jump**.

Visual: on the second sentence an orange "energy in" arrow (labelled "current or flame") meets the electron on level 1 and it jumps to level 3. On "excited" the dot glows, tag "excited". On the fourth sentence the dot drops from level 3 to level 2 and a red wavy photon leaves the diagram to the right. On "levels" a bracket marks the gap between levels 3 and 2, tag "photon energy = gap", and the photon lands on the strip as the red line. On "all" the dot rests on level 2 with no photons and a grey tag "no jump, no light". On "jump" the drop replays once, the bracket glowing.

### 6. fixed gaps, fixed lines
> Now the lines make sense. The levels are fixed, so the gaps between them are fixed, and each gap makes photons of one exact energy, and one exact colour. For hydrogen, the four visible lines come from electrons dropping down to the second level, from the third, fourth, fifth and sixth **levels**. A bigger drop releases more energy, so its line sits further toward **violet**. Drops all the way to the lowest level release even more energy, as ultraviolet light, which our eyes can't **see**.

Visual: on "levels" four drop arrows draw in turn (3 → 2 red, 4 → 2 blue-green, 5 → 2 blue, 6 → 2 violet), each releasing a photon that lands as its line on the strip; grey wavelength labels "656, 486, 434, 410 nm" appear small under the lines. On "violet" the four arrows line up by length beside the strip, longest under violet, tag "bigger drop, more energy". On "see" two grey dashed arrows drop to level 1 (2 → 1, 3 → 1), their dashed photons leaving off the strip's left edge into a grey zone "ultraviolet (invisible)". A tag on the strip: "each line = one drop, not a picture of an orbit".

### 7. prediction (countdown, 3 seconds)
> Quick prediction. Here's an atom with just three energy levels. When its electrons drop down, how many different lines could its emission spectrum show? Have a **think**.

Visual: board clears to a three-level diagram (levels labelled "bottom", "middle", "top", unevenly spaced, no energies), an electron dot on the top level, and an empty spectrum strip. Chip "how many lines?". On "think" the 3 s `Countdown` ring runs. No arrows drawn.

### 8. every pair of levels
> Three. An electron can drop from the top level to the middle, from the middle to the bottom, or straight from the top to the **bottom**. Each drop has its own gap, so each makes its own **line**. The straight drop is the biggest, so its photon has the most **energy**.

Visual: on the first sentence three drop arrows draw in turn (top → middle, middle → bottom, top → bottom), finishing on "bottom". On "line" each arrow releases a photon that lands as a separate line on the strip (three lines: the top → bottom line furthest toward violet). On "energy" the long arrow and its line glow together, tag "biggest gap, most energetic photon". A chip writes "lines = number of different drops".

### 9. a fingerprint, and the evidence
> This is why line spectra are such strong evidence for Bohr's idea. Every element has its own set of energy levels, so it gives out its own pattern of lines, like a **fingerprint**. Sodium, for example, gives out a strong yellow-orange **line**. That's the colour you see when a sodium compound is held in a flame, and you'll collect flame colours yourself in a later practical **video**.

Visual: the hydrogen strip returns at the top. On the first sentence a chip "fixed levels predict lines; the lines match the gaps" writes beside it. On "fingerprint" three strips stack: hydrogen (four lines), helium and sodium (coded line patterns, tagged "each element: its own levels, its own lines"); a scribble circle rings the different patterns. On "line" the sodium strip's strong yellow-orange line glows and `m8-flame-na-yellow-v2.png` appears small beside it. On "video" a grey chip "flame tests: later practical" writes under the flame.

### 10. Bohr's limit, and Schrödinger's orbitals
> But Bohr's model had limits. It pictured electrons circling the nucleus in neat orbits, and its sums matched hydrogen's lines very well. For atoms with more than one electron, it didn't **work**. In nineteen twenty-six, Erwin Schrödinger's model replaced the neat orbits. It keeps the energy levels, but it doesn't track an electron along a path. Instead, it describes orbitals. An orbital is a region around the nucleus where the electron is likely to be **found**. Picture a cloud that's densest where the electron is most likely to **be**. Inside the energy levels, orbitals come in types called s, p, d and f, which we'll use in a later **video**.

Visual: board clears to a Bohr atom (nucleus, solid circular rings, an electron dot on a ring), tag "Bohr model: neat orbits". On "work" a second atom with many electrons appears beside it with a red "?" and a tag "more electrons: predictions fail". On the fourth sentence the rings fade to dashed grey, still labelled "Bohr model". On "found" a dot-density cloud fades in around the nucleus, denser near the centre, tag "orbital: where the electron is likely to be (Schrödinger model, 1926)". On "be" a brightness gradient pulses through the densest region, tag "probability, not a path". On "video" four small grey chips "s", "p", "d", "f" line up beside the cloud with "v11" under them.

### 11. one line to remember
> So here's the picture to keep. Stairs, not a ramp. Electrons can only change energy in fixed steps, so atoms give out only certain photon energies, and only certain **colours**.

Visual: the staircase from scene 4 returns at the left and the hydrogen strip at the right; a drop on the stairs releases a photon onto its line. On "colours" the handwritten line writes large: "Stairs, not a ramp: fixed steps, fixed colours." Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. Two energy levels in an atom are one point six times ten to the minus nineteen joules, and four point one times ten to the minus nineteen joules, above the ground state. An electron moves from the higher level to the lower level. State whether a photon is absorbed or emitted, and calculate its energy. Pause here to answer.

Visual: `QuestionCard` (subject "Chemistry", tag "HSC-style question, written for HSCScience"): "Two energy levels in an atom are 1.6 × 10⁻¹⁹ J and 4.1 × 10⁻¹⁹ J above the ground state. An electron moves from the higher level to the lower level. (a) State whether a photon is absorbed or emitted. (b) Calculate the energy of the photon." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no diagram, no arrow).

### 13. feedback 1 (brief)
> The electron drops, so the atom loses energy, and a photon is **emitted**. Its energy is the gap: four point one minus one point six, which is two point five times ten to the minus nineteen **joules**. Adding the two, to get five point seven, is the slip. A photon carries the difference between the levels, not the **sum**.

Visual: card shrinks to the top. A two-level diagram draws: "4.1 × 10⁻¹⁹ J" and "1.6 × 10⁻¹⁹ J" above a "ground state" line. On "emitted" a drop arrow draws with a photon leaving, row "(a) emitted (electron drops)". On "joules" a bracket marks the gap; row "(b) E = 4.1 × 10⁻¹⁹ − 1.6 × 10⁻¹⁹ = 2.5 × 10⁻¹⁹ J". On "sum" a chip "4.1 + 1.6 = 5.7 × 10⁻¹⁹ J" fades in and is crossed (caption "photon = the gap"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. An atom has three energy levels, at zero, two and five units of energy. Which photon energies can it emit, when an electron drops from one level to a lower one? Explain why it can't emit a photon with four units of energy. Pause here to answer.

Visual: `QuestionCard`: "A model atom has three energy levels, with energies of 0, 2 and 5 units. (a) List the photon energies the atom can emit when an electron drops from one level to a lower level. (b) Explain why the atom's emission spectrum contains no line for a photon energy of 4 units." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (levels listed in text only; no diagram).

### 15. feedback 2 (brief)
> The possible drops are five to two, two to zero, and five to zero. So the photon energies are three, two and five **units**. Four isn't the gap between any pair of levels, so no single drop can make it, and there's no line at four **units**. Listing only two and five is the classic slip. Don't forget the drop between the two upper **levels**.

Visual: card shrinks to the top. A three-level diagram draws at 0, 2 and 5. On "units" (first) three drop arrows draw with brackets "3", "2", "5"; row "(a) 3, 2 and 5 units". On "units" (second) a dashed "4?" bracket tries each pair and fades; row "(b) no pair of levels is 4 units apart, so no single drop gives a 4-unit photon". On "levels" a chip "only 2 and 5" fades in and is crossed (caption "5 → 2 gives 3"). Hold about 1 second.

### 16. handoff: evidence changes models
> Notice how the model of the atom kept changing. The nuclear model couldn't explain line spectra, so Bohr changed it, and Schrödinger changed it again when Bohr's model didn't work for bigger atoms. Each time, new evidence forced a better **model**. Next time, we'll use that same habit in our own investigations, and see how new evidence can improve a testable chemistry **question**.

Visual: board clears. A model timeline draws left to right: three small coded atoms "nuclear model", "Bohr model", "Schrödinger model", joined by arrows, each arrow labelled with its evidence ("line spectra", "atoms with more electrons"). On "model" the arrows glow, tag "new evidence → better model". On "question" v06's sand and salt accounting bar appears small at the right with a teal overhang, tagged "our investigation", and the chip writes "Next: how can new evidence improve a testable chemistry question?". Hold about 2 seconds. This is the final frame (`chem-y11-ws-v01` opens on it, if its designer agrees).

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Light is emitted as photons; a photon's energy sets its colour (red least, violet most, of the visible colours). A line spectrum shows only certain colours; a continuous spectrum shows all.
2. Bohr model: electrons can only have fixed energies (energy levels). Energy absorbed lifts an electron to a higher level (excited); when it drops, it emits one photon with energy equal to the gap between the levels.
3. Fixed levels give fixed gaps, so only certain photon energies: lines. Each element has its own levels, so its own line pattern (a fingerprint). This spectral evidence supports the Bohr model.
4. Schrödinger model: keeps energy levels, but describes electrons by orbitals, regions where an electron is likely to be found (not fixed paths). Orbital types: s, p, d, f.

Memory aid (large, on the notes screen): *Stairs, not a ramp: fixed steps, fixed colours.*

## Teaching checks

- **Does it explain causes?** Why a line means one energy: photon energy sets colour (2). Why the nuclear model fails: unrestricted energies would give a rainbow (3). Why lines appear: fixed levels make fixed gaps (4 to 6). Why bigger drops are bluer: more energy (6). Why the pattern identifies an element: each has its own levels (9). Why Schrödinger's model replaced Bohr's: orbits failed for multi-electron atoms (10).
- **Misconceptions addressed:** electrons emit light continuously (5); a line is a photographed orbit (6); bigger drops give redder light (6); Bohr orbits are real paths (10); the photon carries the sum (crossed in 13); only drops to the bottom count (crossed in 15).
- **One idea at a time:** observation (1), photons (2), problem (3), levels (4), mechanism (5), lines (6), counting (7, 8), evidence (9), modern model (10).
- **Video makes it easier:** each photon leaves a specific drop and lands as its own line on the strip, so the student watches a gap become a colour (5, 6); the predicted rainbow is crossed and replaced by the real lines (3); the staircase turns into the level diagram (4); the Bohr ring fades as the probability cloud appears (10).
- **Response opportunity:** prediction (3 s); two unseen tasks (a gap calculation and a line count) with every value on the card; 10 s each; nothing answer-bearing. Feedback about 24 s and 25 s.
- **Avoided double teaching:** the nucleus recalled from v08; electron configurations and spdf left to v11; flame tests left to v16; mass and isotopes not revisited.
- **Syllabus coverage:** `C1-IQ2-02` (discrete energy levels; configuration and spdf in v11); `C1-IQ2-04` second example (spectral evidence for the Bohr model; introducing the Schrödinger model); first example (flame-test data) in v16.
- **Out of scope by design:** E = hf and wavelength calculations; absorption spectra (named only as "absorbed" in A1); configurations; flame-test method.

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style; pack candidate 1 rewritten).** "Two energy levels in an atom are 1.6 × 10⁻¹⁹ J and 4.1 × 10⁻¹⁹ J above the ground state. An electron moves from the higher level to the lower level. (a) State whether a photon is absorbed or emitted. (b) Calculate the energy of the photon."
Model answer: (a) Emitted: the electron moves to a lower energy level, so the atom loses energy as a photon. (b) E = 4.1 × 10⁻¹⁹ − 1.6 × 10⁻¹⁹ = 2.5 × 10⁻¹⁹ J. Classic mistake (crossed): adding, 5.7 × 10⁻¹⁹ J.

**Attempt 2 (scene 14; original wording, HSC style; pack candidate 2).** "A model atom has three energy levels, with energies of 0, 2 and 5 units. (a) List the photon energies the atom can emit when an electron drops from one level to a lower level. (b) Explain why the atom's emission spectrum contains no line for a photon energy of 4 units."
Model answer: (a) 5 → 2: 3 units; 2 → 0: 2 units; 5 → 0: 5 units. (b) A photon's energy equals the gap of one drop; no pair of levels is 4 units apart, so no single transition can emit a 4-unit photon. Classic mistake (crossed): listing only 2 and 5 (missing the 5 → 2 drop).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hydrogen visible lines | 3 → 2: 1.889 eV, 656 nm (red); 4 → 2: 2.550 eV, 486 nm (blue-green); 5 → 2: 2.856 eV, 434 nm (blue); 6 → 2: 3.022 eV, 410 nm (violet); wavelengths screen only, energies not shown | 1, 6, 9, 11 |
| Hydrogen UV drops | 2 → 1: 10.20 eV, 122 nm; 3 → 1: 12.09 eV, 103 nm (not shown as numbers) | 6 |
| Dates | Bohr 1913; Schrödinger 1926 | 4, 10 |
| Prediction | three levels, three lines | 7, 8 |
| A1 | 4.1 × 10⁻¹⁹ − 1.6 × 10⁻¹⁹ = 2.5 × 10⁻¹⁹ J; crossed 5.7 × 10⁻¹⁹ J | 12, 13 |
| A2 | levels 0, 2, 5; gaps 3, 2, 5; no 4; crossed "only 2 and 5" | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- E_n = −13.6 ÷ n² eV. 13.6 × (1/4 − 1/9) = 1.889; (1/4 − 1/16) = 2.550; (1/4 − 1/25) = 2.856; (1/4 − 1/36) = 3.022. λ = 1239.84 ÷ E nm: 656.4, 486.2, 434.1, 410.2.
- 13.6 × (1 − 1/4) = 10.20 eV, 121.6 nm; 13.6 × (1 − 1/9) = 12.09 eV, 102.6 nm.
- A1: 4.1 − 1.6 = 2.5; 4.1 + 1.6 = 5.7.
- A2: 5 − 2 = 3; 2 − 0 = 2; 5 − 0 = 5; differences of {0, 2, 5}: {2, 3, 5}; 4 absent.
- Three levels give C(3, 2) = 3 drops.
- Level diagram heights (computed): y ∝ −1/n², with n = 1 at the bottom of a 520 px axis and the n = ∞ limit at the top; n = 2 at 75% of the axis height, n = 3 at 88.9%, n = 4 at 93.75%, n = 5 at 96%, n = 6 at 97.2%. If n = 5 and 6 crowd, draw a 2.5× vertical inset for levels 2 to 6 (labelled "levels 2 to 6 enlarged").

## Memory aid check

- **"Stairs, not a ramp: fixed steps, fixed colours."** Written for this lesson. Meaning, as said in scene 11: an electron's energy can only take certain values (steps), so it can only lose certain amounts (gaps), so only certain photon energies and colours come out; a ramp (any energy) would give every colour. Assumptions checked: the steps are drawn uneven (hydrogen's levels are not equally spaced, and the aid says nothing about equal spacing); "colours" includes invisible photons (scene 6 shows UV drops) so the aid is stated as "certain photon energies" in narration; it applies to isolated atoms (gases), not hot solids, which is exactly the filament contrast in scene 1. It helps a new case: any element's line pattern, A1 (a step-down gives a photon of the gap) and A2 (only the gaps between steps). Introduced after the mechanism and the evidence.
- **Considered, not used:** the Module 8 bank's "heat raises electron energy and a fall emits a photon" (`docs/production/claude-pm/` M8 memory aids, cited by the pack) is the mechanism itself, taught in scene 5 rather than as a slogan; "ladder" (a ladder's rungs are evenly spaced, which misleads).

## Narration length estimate

Revision 1 count (5 November; build parser rules, scenes joined with a space): **5,645 characters**, 17 scenes (per-scene counts in Review notes). At 13.3 characters per second the speech is about 424 s; add about 3 s for the photon flights in scenes 5 and 6, 2 s for the scene 11 hold, 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 87 s): **about 511 s** (8.5 minutes), inside the band (near its lower end) and well under the cap. There is room for about 750 more characters if the learning review asks for more on any stage (scene 3's classical-radiation tag could become a spoken sentence, or scene 10 could gain one sentence on why Bohr failed). Watch scene 6: each photon must land on the strip as its colour is named. Reserve trims: scene 10's last sentence (keep the s, p, d, f chips silent), scene 9's last clause (keep the flame chip), scene 3's last sentence.

## Scene list and build ids

Lesson key `c-y11-m1-v10` (route chem-y11-m1-v10; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m1-v10`.

In order (17 scene headings, all `### N.`): hook, photons, nuclear-model-problem, bohr-levels, emission, hydrogen-lines, prediction, every-pair, fingerprint, schrodinger, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: 1 to 2 camera push to the hydrogen strip; 2 to 3 camera continue (the small atom enlarges); 3 to 4 clear change (the stairs); 4 to 5 camera continue (the staircase becomes the level diagram); 5 to 6 camera continue; 6 to 7 clear change; 7 to 8 camera continue; 8 to 9 camera pull back to the strip stack; 9 to 10 clear change; 10 to 11 camera continue; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m1-v10-learning-review.md`, `checks/c-y11-m1-v10-science-check.md`.

## Assets

Have (inspected 5 November on paper and dark contact sheets; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-filament-lamp-v1.png` (1536 × 1024; clear bulb with a coiled filament on a black holder, unlit): scenes 1, 3, with a coded warm glow over the filament.
- `public/assets/chemistry/m8-flame-na-yellow-v2.png` (2000 × 2000; Bunsen burner with a yellow sodium flame): scene 9, small.
- **Inspected, not used:** `m8-hollow-cathode-lamp-v1.png` (a hollow cathode lamp is an AAS source, not a hydrogen discharge tube; its glow is orange); `c7-flame-energy-v1.png` (a luminous fire flame, no element meaning); `m8-uv-visible-spectrophotometer-v1.png` (an absorption instrument).

Need (new plates, Codex):
1. `y11c-hydrogen-discharge-tube-lit-v1.png`: scenes 1, 2 and v09's final frame. Essential (the observation the whole video explains).
2. Optional: `y11c-filament-lamp-lit-v1.png`, a lit variant of `phys-y11-filament-lamp-v1.png` (open decision 3). Fallback: the coded glow.

Coded: ray sketches and prism triangle, spectrum strips (continuous and line), photons, energy-level diagrams, the stairs and ramp sketch, nuclear and Bohr atoms, the orbital dot cloud, s p d f chips, helium and sodium line patterns, model timeline, rows, chips, attempt cards, countdowns, key notes board. Build note: extend `EnergyInset` from `chem-m8-c03a/parts.tsx` into a full-size `EnergyLevels` component (levels from an energy list, cue-driven jumps and drops, photon colour from the drop's wavelength, landing x on a linked `SpectrumStrip`).

## Codex asset brief (Year 11 Chemistry M1 v10; plate 1 also used in v09)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/chem-y11-m1-v10.md`. Paint after the learning review, science check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/chemistry/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, matched to `m8-hollow-cathode-lamp-v1.png` in glass treatment and line weight, at least 8 per cent clear margin, no text, labels, numbers, people, hands, faces or backdrop. The glow of a lit tube is part of the object and may extend slightly beyond the glass, but no background haze or ground shadow. Never stretch; keep the native aspect ratio.

1. `y11c-hydrogen-discharge-tube-lit-v1.png` (2400 × 1000 px, landscape): a school gas discharge (spectrum) tube of hydrogen, horizontal: a straight narrow glass capillary between two wider glass bulbs, each bulb with a metal electrode cap at its outer end, mounted in a plain grey holder with two simple clips (no power supply drawn, no cables, no labels). The capillary glows the characteristic pink-magenta of a hydrogen discharge, brightest in the narrow section, softer in the bulbs. It must read as a glowing tube at 400 px wide on the dark board background.
2. Optional, `y11c-filament-lamp-lit-v1.png` (1536 × 1024 px, the same canvas as `public/assets/physics/phys-y11-filament-lamp-v1.png`): an edit of that plate, identical in every line, with the filament glowing bright yellow-white and a soft warm glow inside the bulb only.

Report inspection on the paper background and the dark board background at about 400 px wide, and (for plate 2) the overlay with the unlit plate. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/chem-y11-m1-v10-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the science of every learner-visible claim: photon energy increases from red to violet; a filament gives a continuous spectrum; hydrogen's four visible lines are drops to level 2 from levels 3 to 6, in the stated colours; drops to level 1 are ultraviolet; an electron in a level does not emit; photon energy equals the gap; each element has its own line pattern; Bohr 1913 and Schrödinger 1926; orbitals as regions of likely position; s, p, d, f as orbital types.
3. Confirm the memory aid's assumptions (uneven steps; invisible photons; isolated atoms).
4. Confirm no flame-test method, and no concentrated-acid paste, appears anywhere (site correction 9).
5. Confirm both attempt cards are original, carry every value and condition, and show nothing answer-bearing.
6. Confirm the syllabus quotes match the ledger, apart from the restored apostrophe and "ö" (open decision 4).
7. Confirm no person, hand or face is drawn or requested; the scientists are named in narration only.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling ("colour").
9. Confirm the narration character count by script.
10. Confirm the opening frame equals v09's final frame, and that the final frame is flagged for the ws-v01 designer.

## YouTube metadata (draft)

Title: Line Spectra and Energy Levels: the Bohr Model and Schrödinger's Orbitals | Year 11 Chemistry

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year11/module1/lesson13.sa.html

Glowing hydrogen gives out just four sharp colours, not a rainbow. Why? Learn what a photon is, why a nuclear atom with any electron energy would give a continuous spectrum, how Bohr's fixed energy levels explain line spectra (an electron drops and emits one photon whose energy is the gap), why every element has its own spectral fingerprint, and how Schrödinger's model replaced neat orbits with orbitals. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 1: Properties and Structure of Matter.
Syllabus content (NSW Chemistry Stage 6):
"model the atom's discrete energy levels, including electronic configuration and spdf notation (ACSCH017, ACSCH018, ACSCH020, ACSCH022)"
"investigate energy levels in atoms and ions through:
- examining spectral evidence for the Bohr model and introducing the Schrödinger model"

Previous: Relative atomic mass as a weighted average. Next: How new evidence improves a testable chemistry question.

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Learner question wording (root).** Route: "How do line spectra reveal discrete atomic energy levels?" Proposed: "Why does hydrogen give out only a few sharp colours, and what does that reveal about electrons in atoms?"
- **2. Final frame for ws-v01 (root, with the ws-v01 designer).** This design ends on a model timeline with "new evidence → better model" and v06's accounting bar as "our investigation". The ws-v01 designer may prefer another concrete investigation; only scene 16's last visual sentence would change.
- **3. Lit lamp plate (root).** Use the coded glow on the existing unlit lamp, or request the optional lit edit.
- **4. Ledger encoding (root).** `chem-2017-y11.json` (and the route JSON) store "atom�s" and "Schr�dinger" with a replacement character for C1-IQ2-02 and C1-IQ2-04. The quotes here restore the syllabus characters; the ledger should be repaired at source so build tools don't copy the error.
- **5. Site note 1 (root).** Log the flame-test "single-colour version of a full emission spectrum" overstatement if accepted (it belongs with v16's work).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does "one line, one photon energy" land before the levels; is the nuclear-model problem followable without the classical radiation argument; does the photon flight from drop to line make the mechanism visible at playback speed; is scene 10 brief enough to stay an introduction), then the science check and Codex error check.
- Every line position and level height must be computed from the stated energies, never placed by eye.
- Checker output (5 November): narration 5,645 characters; per scene (1 to 17): 449, 297, 393, 285, 435, 481, 166, 256, 375, 635, 173, 335, 312, 254, 332, 376, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
