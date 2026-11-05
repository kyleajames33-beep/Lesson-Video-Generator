# Year 11 Chemistry M1 V09: Relative atomic mass. Why is relative atomic mass a weighted average? (design)

Status: Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,202 characters, 16 scenes, about 552 s (9.2 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: ninth video of Year 11 Chemistry (2017 syllabus), Module 1. Templates: `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (asset brief format). Pre-design pack: `../pre-design/chem-y11/chem-y11-m1-v09.md`. Route entry: `chem-y11-m1-v09` in `../../programme/chem-y11-route-inputs.json`. Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module1/lesson14.sa.html` (SHA256 `ba2cf87ee8ad7f4ea07c89e48b2928a7f0c907507573bee7c25e307678b8c5cf`, recomputed, matches the route); used: warm-up (chlorine 35.45 hook), `l14-isotopes-same-element-different-mass-title` (chlorine weighted average and the exact-mass note), `l14-calculating-relative-atomic-mass-title`, `l14-worked-examples-title` (boron and silicon, and the simple-average misconception), drill 3 and 5. Site corrections: none logged for this page; three new site notes below.

Owner rules applied: as v06 to v08 (one learner question; no people, hands or faces; atoms and beams coded, apparatus as plates; task strip, equation strip and grouped givens, one stage at a time; 3 s prediction countdown; "Pause here to answer." with a 10 s countdown and the full question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 1; local ledger ID `C1-IQ2-03`), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- "calculate the relative atomic mass from isotopic composition (ACSCH024)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 37)

**Boundary:** opens on v08's final frame (chlorine's box reads 35.45 between ³⁵Cl and ³⁷Cl). Teaches why a natural sample's average atomic mass is weighted by abundance (a count of 100 atoms first, then fractions); the definition of relative atomic mass (carbon-12 scale, no units); the weighted-average calculation (chlorine, then boron, the site's worked example); the sense check (between the isotope masses, nearer the more abundant); that no atom has the average mass; the reverse calculation for a two-isotope model (the site's silicon example, with its "only these two isotopes" assumption kept and the real silicon-30 named). Stops before mass spectrometer operation (the instrument is named once as the source of abundances, with its plate shown small). Not taught: three-isotope calculations (key-note formula covers them; site's neon and magnesium examples left for practice); mass spectra interpretation; energy levels (v10, the handoff).

## Decisions

- **Learner question (route wording kept).** "Why is relative atomic mass a weighted average?" It is already causal. The answer, in order: a real sample contains both isotopes in unequal numbers (2); the average mass per atom must count each isotope as often as it occurs (2, 3); so the average leans toward the commoner isotope (5 to 8); and the same equation can be run backwards for abundances (9, 10).
- **Opening frame (equals v08's final frame).** The coded chlorine periodic-table box "17 / Cl / 35.45" between a ³⁵Cl nucleus and a ³⁷Cl nucleus, "35.45" ringed with a "?", a faint unequal beam sketch under the nuclei with "?" weights, and the chip "Why is relative atomic mass a weighted average?".
- **Count first, then fractions.** Scene 2 uses a sample of 100 atoms (76 of chlorine-35 and 24 of chlorine-37, the site's 75.77% and 24.23% rounded to whole atoms), so "average" means total mass shared among atoms, which a Year 11 student already understands: (76 × 35 + 24 × 37) ÷ 100 = 3548 ÷ 100 = 35.48. Scene 4 then converts to the formula with fractions using the site's exact abundances (26.52 + 8.97 = 35.49 ≈ 35.5). The two results agree to 35.5, which is said.
- **Why 35.45 and not 35.5 (site's own note).** The site explains that whole mass numbers give about 35.5 and exact isotopic masses (34.97, 36.97) give 35.45. One spoken sentence keeps this, so the hook's 35.45 is honestly resolved without a second calculation.
- **The balance beam (new coded visual; memory aid).** Isotopes sit on a number-line beam at their masses, with stacks of atom tokens in proportion to abundance; the beam's balance point is drawn at the weighted mean (author note a). Line: "The average leans toward the crowd." Assumptions checked in "Memory aid check".
- **In-teaching prediction (3 s countdown, scenes 6 and 7).** Boron (site `we-chem-y11-m1-l14-1`): closer to 10 or 11? Answer from the beam first, then the calculation: 10 × 0.199 + 11 × 0.801 = 1.99 + 8.811 = 10.801 ≈ 10.8, with the site's "fractions add to 1.000" check.
- **No atom weighs 10.8 (pack misconception).** Scene 8 says it plainly: every boron atom is boron-10 or boron-11; 10.8 is the sample's average, not a mass number. This also blocks the v08 trap of reading the periodic-table decimal as a mass number.
- **Silicon model (site `we-chem-y11-m1-l14-2`, assumption preserved).** The site's "Assume only these two isotopes for this calculation" is spoken, and the real silicon-30 is named, as the route requires ("Preserve the fictional two-isotope silicon assumption"). Algebra in the site's steps: let x be the fraction of silicon-28, 1 − x for silicon-29; 28x + 29(1 − x) = 28.22; 29 − x = 28.22; x = 0.78; 78% and 22%; check 21.84 + 6.38 = 28.22. Solving a one-unknown linear equation is Stage 5 algebra, recalled, not taught.
- **Attempts (original wording, HSC style; pack candidates).** A1: model element, masses 22 and 24, 70.0% and 30.0%: 22.6. Crossed: "23" (simple average). A2: assume only isotopes 63 and 65, Ar 63.60: 70% and 30%. Crossed: the swapped answer (63 at 30%, which would give 64.4). Both stems say "model element" or "assume only", so no fictional value is presented as a natural measurement (pack).
- **Mass spectrometer named, not explained (route stop).** Scene 3 says abundances "are measured with an instrument called a mass spectrometer, which sorts atoms by mass. How it works is a story for later." The `m8-mass-spectrometer-v1.png` plate appears small. No peaks, magnets or spectra are drawn.
- **Mistake scene:** none separate. "Ar is the simple average" (1, crossed in 12); "Ar is the mass of one atom" (8); "percentages go straight into the formula" (4: divide by 100; the boron fractions-add-to-one check); "the more common isotope is the heavier one" (swap crossed in 14).
- **Handoff (route next).** Scene 15: isotopes share chemistry because their electrons are the same (v08); so what are the electrons doing? Hydrogen gas glows with a few sharp colours, not a rainbow. Final frame: the new hydrogen discharge tube plate (requested in v10's asset brief) with a coded four-line spectrum strip beside it, a small coded atom whose electron region holds a "?", and the chip "How do line spectra reveal discrete atomic energy levels?".
- **Site notes (quoted from lesson14, read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted):**
  1. `l14-independent-practice-title`, short-answer Q7 model answer: "18.096 + 0.0567 + 2.035 = 20.188 ≈ 20.18 ✓". The sum is 20.1877, which rounds to 20.19 (to two decimal places). Suggest "= 20.1877 ≈ 20.19, consistent with the stated 20.18 within rounding of the abundances".
  2. Same section, multiple-choice explanation: "Ar = 6.94, very close to 6. The lighter isotope dominates. If x = fraction of mass 6: 6x + 7(1−x) = 6.94 → −x = −0.06 → x = 0.94 = 94% mass-6". 6x + 7(1 − x) = 6.94 gives 7 − x = 6.94, so x = 0.06: 6% mass-6 and 94% mass-7. 6.94 is close to 7, and the heavier isotope dominates. (The bracketed real lithium values, ⁶Li 7.5% and ⁷Li 92.5%, agree with the correction.)
  3. `l14-worked-examples-title`, misconception card: "The simple average only works when all isotopes are equally abundant, which never happens in nature." Overstated as an absolute; bromine (about 50.7% and 49.3%, on the same page) is nearly equal. Suggest "which is rare in nature".
  - Checked and correct: chlorine 26.52 + 8.97 = 35.49 ≈ 35.5 (35.4846); exact masses give 35.45; boron 10.801; silicon x = 0.78 and its check; neon 20.1877 (see note 1); magnesium activity 24.321; copper activity x = 0.725; lead activity 207.24; bromine 79.986; silver 107.96.
- **Cause chain taught, in order:** (1) the periodic-table value is not any atom's mass, nor the simple average (1); (2) a sample has unequal numbers of each isotope (2); (3) so the average must count each mass as often as it occurs: a weighted average (2, 3); (4) as fractions, mass × fraction summed (4); (5) the balance point leans toward the crowd (5); (6) the result lies between the masses, nearer the commoner, and belongs to no single atom (7, 8); (7) the same equation solves for an unknown abundance when only two isotopes are assumed (9, 10).
- **Entry knowledge:** Stage 5 averages, percentages and one-step linear equations; v08 (isotopes, mass numbers, chlorine-35 and chlorine-37); v07 (relative atomic mass used as a given number).
- **Learner-visible vocabulary:** abundance (how common an isotope is, as a percentage of the atoms in a natural sample, 3); weighted average (an average where each value counts in proportion to how often it occurs, 3); relative atomic mass, Ar (the weighted average mass of an element's atoms in a natural sample, on the scale where carbon-12 is exactly 12; no units, 3); fractional abundance (the percentage divided by 100, 4).
- **Legacy logic ported:** none.
- **Explainer motion (coded, plus one reused plate):** **atom sample** (scene 2: 100 small atom tokens in a 10 × 10 grid, two colours for the two isotopes, sorting into two groups of 76 and 24); **mass tally** (scene 2: running total "76 × 35 = 2660", "24 × 37 = 888", "3548", "÷ 100 = 35.48"); **isotope data table** (mass, %, fraction columns, filling as spoken); **balance beam** (scenes 5, 7, 12, 14: a number-line beam with stacked tokens, a pivot that slides to the computed balance point, `NumberTicker` for its value); **calculation layout** (task strip, equation strip, givens, working rows); **algebra rows** (scenes 9, 10, 14, aligned on "="); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, scribble circle, `HandText`, `KeyNotes`, `Heading`.
- **Board layout (constant):** heading top left; beam or sample across the left two thirds; data table and rows in the right column.

Author notes (not learner copy):
(a) Balance beam: for point masses w_i at positions m_i on a light beam, the balance point is Σ w_i m_i ÷ Σ w_i, which is exactly the weighted mean. The beam is drawn as a light beam with the pivot moving to that point (computed, not typed).
(b) Relative atomic mass is dimensionless; "on the scale where carbon-12 is exactly 12" is the definition in learner copy (site: relative to 1/12 the mass of a carbon-12 atom).
(c) Whole-number isotope masses are the site's teaching approximation; exact isotopic masses (³⁵Cl 34.969, ³⁷Cl 36.966; 75.76% and 24.24%) give 35.45. Boron with exact masses (10.0129, 11.0093) gives 10.81; not said.
(d) The 100-atom picture rounds 75.77 and 24.23 to 76 and 24 whole atoms; the result 35.48 agrees with 35.4846 to three significant figures. Said as "about seventy-six" and "about twenty-four".
(e) Real silicon: about 92.2% silicon-28, 4.7% silicon-29, 3.1% silicon-30; the site's two-isotope model with Ar 28.22 is fictional, and the video says "simplified model". The real Ar of silicon is 28.09.
(f) Pronunciations: "A r" read as "A-R"; "chlorine-thirty-five"; "boron-ten"; "zero point one nine nine".

Main question: *Why is relative atomic mass a weighted average?*
Entry knowledge: Stage 5 averages, percentages, linear equations; v07; v08.
Stops after: the weighted average explained and calculated, the sense check, and an unknown two-isotope abundance under a stated assumption. No mass spectrometer operation or spectra.
Handoff: v10, line spectra and energy levels.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key (continues v08): chlorine-35 tokens green, chlorine-37 tokens dark green; boron-10 tokens tan, boron-11 brown; silicon tokens grey and slate; percentages and abundances amber; masses ink; the balance point and its value navy; unknowns (x) teal; crossed chips red strike.

### 1. hook: 35.45 belongs to no atom
> Here's chlorine on the periodic table: thirty-five point four five. But we just saw that chlorine atoms come as chlorine-thirty-five and chlorine-thirty-seven. Not one of them has a mass of thirty-five point four **five**. And it isn't the simple average either. Halfway between thirty-five and thirty-seven is thirty-**six**. So where does thirty-five point four five come **from**?

Visual: opens on v08's final frame (Decisions). On "five" the two nuclei get tags "35" and "37" and a small chip "no atom = 35.45". On "six" a midpoint mark draws on a short number line under the nuclei at 36 with the chip "simple average: 36"; the 35.45 mark sits left of it. On "from" the chip "36" is crossed (caption "not the simple average"), and the heading writes on: "Relative atomic mass: a weighted average".

### 2. a sample of a hundred atoms
> Think about a real sample of chlorine. It's a mixture of both isotopes, and they're not equally common. Out of every hundred chlorine atoms, about seventy-six are chlorine-thirty-five, and only about twenty-four are chlorine-thirty-**seven**. So to find the average mass of one atom, add up the masses of all hundred, then share the total among them. Seventy-six atoms at thirty-five, plus twenty-four atoms at thirty-seven, gives three thousand five hundred and forty-**eight**. Divide by a hundred atoms, and that's thirty-five point four **eight**. It's much closer to thirty-five, because most of the atoms are chlorine-thirty-**five**.

Visual: the nuclei shrink into token style; a 10 × 10 grid of 100 atom tokens fills the stage at random positions, green and dark green mixed. On "seven" the tokens sort into two blocks, 76 green and 24 dark green, with counts "76 × ³⁵Cl" and "24 × ³⁷Cl". On "five hundred and forty-eight" the tally writes in the right column: "76 × 35 = 2660", "24 × 37 = 888", "total = 3548". On "thirty-five point four eight" row "3548 ÷ 100 = 35.48" writes bright. On "most of the atoms are chlorine-thirty-five" the number line from scene 1 returns: 35.48 lands close to 35, and the 76 block pulses.

### 3. weighted average, and what Ar means
> That's a weighted average. Each isotope's mass counts as many times as that isotope occurs, so the common isotope counts **more**. Relative atomic mass, written A r, is this weighted average for the atoms in a natural sample of an element, on the scale where carbon-twelve is exactly **twelve**. Like any relative mass, it has no units. The percentages, called abundances, are measured with an instrument called a mass spectrometer, which sorts atoms by **mass**. How it works is a story for later. Here, the abundances are simply **given**.

Visual: on "more" the 76 block's "76 ×" and the 24 block's "24 ×" glow as weights, tag "weighted: each mass counted as often as it occurs". On "twelve" the definition writes in the right column: "Ar: weighted average mass of an element's atoms in a natural sample (carbon-12 = 12 exactly); no units". On "mass" the plate `m8-mass-spectrometer-v1.png` appears small at the lower left with the tag "measures abundances (how it works: later)". On "given" the plate fades and a data table writes: columns "isotope", "mass", "abundance"; rows "³⁵Cl, 35, 75.77%" and "³⁷Cl, 37, 24.23%".

### 4. the shortcut with fractions
> In questions, you'll use a shortcut. Turn each percentage into a fraction by dividing by a hundred, multiply each isotope's mass by its fraction, then add them up. For chlorine, the abundances are seventy-five point seven seven percent, and twenty-four point two three **percent**. Thirty-five times zero point seven five seven seven is twenty-six point five **two**. Thirty-seven times zero point two four two three is eight point nine **seven**. Add them, and you get thirty-five point four nine, about thirty-five point **five**. The periodic table says thirty-five point four five because it uses each isotope's exact mass, which is slightly less than thirty-five or thirty-seven.

Visual: calculation layout; task strip "Calculate Ar(Cl)". Equation strip writes on the first sentence: "Ar = (mass₁ × fraction₁) + (mass₂ × fraction₂)", grey tag "fraction = % ÷ 100". On "percent" a "fraction" column fills the data table: "0.7577", "0.2423". On "two" row "35 × 0.7577 = 26.52". On "seven" row "37 × 0.2423 = 8.97". On "five" row "Ar = 26.52 + 8.97 = 35.49 ≈ 35.5" (bright), with a grey tag "the 100-atom count gave 35.48 ≈ 35.5 too". On the last sentence a small grey chip "exact masses 34.97 and 36.97 give 35.45" writes beside the row, and the hook's "35.45" ticks.

### 5. picture it as a balance
> Here's a way to picture it. Put the isotopes on a beam, at their masses, and stack each one by how common it **is**. The relative atomic mass is where the beam would balance. With three quarters of the weight at thirty-five, the balance point sits close to **it**. The average leans toward the **crowd**.

Visual: the rows dim; a number-line beam draws from 34 to 38 with ticks; on "is" stacks of tokens drop onto 35 (tall stack, 76 tokens in columns) and 37 (short stack, 24 tokens). On "it" a pivot triangle slides along under the beam from 36 toward 35 and stops at 35.48 (computed), the beam levelling as it arrives; a `NumberTicker` under the pivot reads "35.5". On "crowd" the handwritten line writes above: "The average leans toward the crowd." Hold about 2 seconds.

### 6. prediction (countdown, 3 seconds)
> Quick prediction. Boron has two isotopes: boron-ten, at nineteen point nine percent, and boron-eleven, at eighty point one percent. Will its relative atomic mass be closer to ten, or closer to eleven? Have a **think**.

Visual: board clears to a new data table "¹⁰B, 10, 19.9%" and "¹¹B, 11, 80.1%" and an empty beam from 9.5 to 11.5 with ticks at 10 and 11; no stacks, no pivot. Chip "closer to 10 or 11?". On "think" the 3 s `Countdown` ring runs.

### 7. boron, worked
> Closer to eleven, because boron-eleven is the crowd. Let's check. As fractions, the abundances are zero point one nine nine, and zero point eight zero **one**, and they add to exactly one, which is a good first **check**. Ten times zero point one nine nine is one point nine **nine**. Eleven times zero point eight zero one is eight point eight one **one**. Add them, and A r is ten point eight zero one, or ten point eight to three significant **figures**.

Visual: on the first sentence the stacks drop onto the beam (short tan stack at 10, tall brown stack at 11) and the pivot slides to 10.80. Task strip "Calculate Ar(B)". On "zero point eight zero one" the fraction column fills "0.199", "0.801". On "check" row "0.199 + 0.801 = 1.000 ✓". On "nine" row "10 × 0.199 = 1.99". On "eight point eight one one" row "11 × 0.801 = 8.811". On "figures" row "Ar(B) = 1.99 + 8.811 = 10.801 ≈ 10.8" (bright); the pivot's ticker reads "10.8".

### 8. the sense check, and no atom weighs 10.8
> Always sense check your answer. It must land between the lightest and heaviest isotopes, and nearer the more common **one**. Ten point eight passes both **tests**. And notice that no single boron atom has a mass of ten point eight. Every atom is boron-ten or boron-eleven. Ten point eight is the average of the sample, not the mass number of any **atom**.

Visual: on "one" a bracket marks the range 10 to 11 on the beam (tag "between the isotope masses") and an arrow from the midpoint 10.5 toward 11 (tag "nearer the crowd"). On "tests" both tags tick. On the third sentence a single token is lifted from each stack and labelled "10" and "11"; a ghost token labelled "10.8" fades in between them and is crossed (caption "no atom has the average mass"). On "atom" a chip writes "Ar is a sample average, not a mass number".

### 9. the reverse question: silicon
> Now the question in reverse. Suppose you know the relative atomic mass, and you want the abundances. In this question, silicon has a relative atomic mass of twenty-eight point two two, and we assume it has only two isotopes, silicon-twenty-eight and silicon-twenty-**nine**. Real silicon also has some silicon-thirty, so this is a simplified **model**. Let x be the fraction of silicon-twenty-eight. With only two isotopes, the fractions add to one, so silicon-twenty-nine is one minus **x**.

Visual: board clears. Task strip "Find the percentage abundance of each isotope". Givens (navy): "Ar(Si) = 28.22; isotopes ²⁸Si and ²⁹Si". On "nine" an amber-outlined assumption chip writes into the givens: "assume only these two isotopes". On "model" a grey tag "(real silicon also has ³⁰Si)" sits under the chip. A beam from 27.5 to 29.5 draws with empty stack outlines at 28 and 29 and the pivot already at 28.22. On "x" the outlines get teal labels "x" (at 28) and "1 − x" (at 29), with the row "fractions: x + (1 − x) = 1".

### 10. solve and check
> Now write the weighted average with x in it. Twenty-eight x, plus twenty-nine times one minus x, equals twenty-eight point two **two**. Expand the bracket, and the x terms combine to minus x, so twenty-nine minus x equals twenty-eight point two **two**. That makes x zero point seven **eight**. So silicon-twenty-eight is seventy-eight percent, and silicon-twenty-nine is twenty-two **percent**. Check it: twenty-one point eight four plus six point three eight gives back twenty-eight point two **two**.

Visual: algebra rows aligned at the equals sign. On "equals twenty-eight point two two" "28x + 29(1 − x) = 28.22". On "twenty-nine minus x equals twenty-eight point two two" "28x + 29 − 29x = 28.22", then "29 − x = 28.22". On "zero point seven eight" "x = 29 − 28.22 = 0.78" (bright). On "percent" row "²⁸Si 78%, ²⁹Si 22%" and the beam's stacks fill to 78 and 22 tokens, the pivot staying balanced at 28.22. On "gives back twenty-eight point two two" the check row writes "28 × 0.78 + 29 × 0.22 = 21.84 + 6.38 = 28.22 ✓", and the assumption chip glows once.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A model element has two isotopes, with masses twenty-two and twenty-four, and abundances of seventy point zero percent and thirty point zero percent. Calculate its relative atomic mass. Pause here to answer.

Visual: `QuestionCard` (subject "Chemistry", tag "HSC-style question, written for HSCScience"): "A model element has two isotopes with masses 22 and 24. Their abundances are 70.0% and 30.0% respectively. Calculate the relative atomic mass of the element." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no beam).

### 12. feedback 1 (brief)
> As fractions, the abundances are zero point seven zero zero, and zero point three zero **zero**. Twenty-two times zero point seven zero zero is fifteen point four, and twenty-four times zero point three zero zero is seven point **two**. Together that's twenty-two point **six**. It's between twenty-two and twenty-four, and nearer twenty-two, the more common isotope. Twenty-three, the simple average, is the slip to **avoid**.

Visual: card shrinks to the top. On "zero point three zero zero" row "fractions 0.700 and 0.300". On "seven point two" row "22 × 0.700 = 15.4; 24 × 0.300 = 7.2". On "twenty-two point six" row "Ar = 15.4 + 7.2 = 22.6" (bright), and a small beam draws with the pivot at 22.6. On "avoid" a chip "(22 + 24) ÷ 2 = 23" fades in and is crossed (caption "the crowd is at 22"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Assume an element has only two isotopes, with masses sixty-three and sixty-five, and a relative atomic mass of sixty-three point six zero. Calculate the percentage abundance of each isotope. Pause here to answer.

Visual: `QuestionCard`: "Assume that an element has only two isotopes, with masses 63 and 65. Its relative atomic mass is 63.60. Calculate the percentage abundance of each isotope." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Let x be the fraction of the mass sixty-three isotope. Sixty-three x, plus sixty-five times one minus x, equals sixty-three point six **zero**, which simplifies to sixty-five minus two x equals sixty-three point six zero. So x is zero point seven **zero**: seventy percent mass sixty-three, and thirty **percent** mass sixty-five. Don't swap them. Sixty-three point six is near sixty-three, so sixty-three is the **crowd**.

Visual: card shrinks to the top; "only two isotopes" in the card is underlined on the first sentence. On "equals sixty-three point six zero" row "63x + 65(1 − x) = 63.60". On "zero point seven zero" rows "65 − 2x = 63.60" and "x = 0.70". On "percent" row "mass 63: 70%; mass 65: 30%" with a small beam, stacks 70 and 30, pivot at 63.60. On "crowd" a chip "mass 63: 30%, mass 65: 70%" fades in and is crossed (caption "that gives 64.4, nearer 65"). Hold about 1 second.

### 15. handoff: what are the electrons doing?
> So relative atomic mass is all about nuclei, and how common each isotope is. But remember, isotopes behave the same in reactions, because their electrons are the same. So what are those electrons actually doing? Our best clue comes from light. When hydrogen gas glows, it gives out only a few sharp colours, not a whole **rainbow**. Next time, we'll see what those colours reveal about the energy of electrons in an **atom**.

Visual: board clears. The two chlorine nuclei from scene 1 return small at the top left, dimmed, with tag "nuclei: done". A small coded atom draws at the left: a dim nucleus and a soft blue electron region with a "?". On the fourth sentence the new plate `chem-y11-hydrogen-discharge-tube-lit-v1.png` (requested in v10's asset brief) fades in at the centre, glowing pink-violet. On "rainbow" a coded spectrum strip draws to its right: a dark band with four thin vertical lines (red, blue-green, blue, violet) at their hydrogen positions; a faint full rainbow ghost appears above it and is crossed. On "atom" the chip writes "How do line spectra reveal discrete atomic energy levels?". Hold about 2 seconds. This is the final frame (v10 opens on it).

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Relative atomic mass (Ar): the weighted average mass of an element's atoms in a natural sample, on the scale where carbon-12 = 12 exactly. No units.
2. Ar = Σ (isotope mass × fractional abundance), where fractional abundance = % ÷ 100. Example: Ar(B) = 10 × 0.199 + 11 × 0.801 = 10.8.
3. Sense check: Ar lies between the lightest and heaviest isotope masses, nearer the more abundant. No single atom has the mass Ar.
4. Two isotopes, unknown abundance: let x be one fraction and 1 − x the other; solve mass₁x + mass₂(1 − x) = Ar. State the assumption that there are only two isotopes.

Memory aid (large, on the notes screen): *The average leans toward the crowd.*

## Teaching checks

- **Does it explain causes?** Why not the simple average: the isotopes are not equally common (1, 2). Why multiply by abundance: each mass must count as often as it occurs (2, 3). Why the answer lies nearer the commoner isotope: it carries more of the weight (5, 7). Why no atom has that mass: each atom is one isotope (8). Why the fractions are x and 1 − x: only two isotopes are assumed (9).
- **Misconceptions addressed:** simple average (1, crossed in 12); Ar is one atom's mass (8); percentages used directly (4); swapping abundances (crossed in 14); a fictional model treated as real silicon (9).
- **One idea at a time:** sample count (2), definition (3), formula (4), picture (5), worked boron (6, 7), check (8), reverse set-up (9), solve (10).
- **Video makes it easier:** the 100 tokens sort into 76 and 24 before any formula (2); the pivot slides from the midpoint toward the tall stack and levels the beam (5, 7); the ghost 10.8 atom is crossed between two real atoms (8); the silicon beam is already balanced at 28.22 and the stacks fill to 78 and 22 as x is found (9, 10).
- **Response opportunity:** prediction (3 s); two unseen tasks (forward and reverse) with every value and the "only two isotopes" condition on the card; 10 s each; nothing answer-bearing. Feedback about 31 s and 30 s.
- **Avoided double teaching:** isotopes and mass numbers recalled from v08; linear equations recalled as Stage 5 algebra; relative atomic mass as a given number recalled from v07.
- **Syllabus coverage:** `C1-IQ2-03` in full (calculate Ar from isotopic composition; and the reverse).
- **Out of scope by design:** mass spectrometer operation and spectra; three-isotope calculations in narration (covered by key note 2's Σ form).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style; pack candidate 1).** "A model element has two isotopes with masses 22 and 24. Their abundances are 70.0% and 30.0% respectively. Calculate the relative atomic mass of the element."
Model answer: Ar = 22 × 0.700 + 24 × 0.300 = 15.4 + 7.2 = 22.6 (no units). Check: between 22 and 24, nearer 22. Classic mistake (crossed): the simple average, 23.

**Attempt 2 (scene 13; original wording, HSC style; pack candidate 2).** "Assume that an element has only two isotopes, with masses 63 and 65. Its relative atomic mass is 63.60. Calculate the percentage abundance of each isotope."
Model answer: let x = fraction of mass 63; 63x + 65(1 − x) = 63.60; 65 − 2x = 63.60; x = 0.70. Mass 63: 70%; mass 65: 30%. Check: 63 × 0.70 + 65 × 0.30 = 44.1 + 19.5 = 63.6. Classic mistake (crossed): swapping (mass 63 at 30% gives 64.4).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Chlorine (site) | 35.45 periodic value; simple average 36; 100 atoms: 76 × 35 = 2660, 24 × 37 = 888, 3548, 35.48; fractions 0.7577 and 0.2423: 26.52 + 8.97 = 35.49 ≈ 35.5 (35.4846); exact masses 34.97 and 36.97 give 35.45 | 1 to 5, 15 |
| Carbon-12 scale | carbon-12 = 12 exactly | 3, key note 1 |
| Boron (site) | 19.9% and 80.1%; 0.199 + 0.801 = 1.000; 1.99 + 8.811 = 10.801 ≈ 10.8 | 6 to 8, key note 2 |
| Silicon (site, two-isotope model) | Ar 28.22; x = 0.78; 78% and 22%; 21.84 + 6.38 = 28.22 | 9, 10 |
| A1 | 22 and 24; 70.0% and 30.0%; 15.4 + 7.2 = 22.6; crossed 23 | 11, 12 |
| A2 | 63 and 65; Ar 63.60; 65 − 2x = 63.60; x = 0.70; 70% and 30%; check 44.1 + 19.5 = 63.6; crossed swap gives 64.4 | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python and SymPy (5 November); Codex to re-check.

- (35 + 37) ÷ 2 = 36. 76 × 35 = 2660; 24 × 37 = 888; 2660 + 888 = 3548; 3548 ÷ 100 = 35.48.
- 35 × 0.7577 = 26.5195 (26.52); 37 × 0.2423 = 8.9651 (8.97); sum 35.4846 (35.49, ≈ 35.5). Exact: 34.96885 × 0.7576 + 36.96590 × 0.2424 = 35.453 (35.45).
- Boron: 0.199 + 0.801 = 1.000; 10 × 0.199 = 1.99; 11 × 0.801 = 8.811; sum 10.801 (10.8).
- Silicon: 28x + 29(1 − x) = 28.22 gives x = 39/50 = 0.78; 28 × 0.78 = 21.84; 29 × 0.22 = 6.38; sum 28.22.
- A1: 22 × 0.700 = 15.4; 24 × 0.300 = 7.2; sum 22.6; (22 + 24) ÷ 2 = 23.
- A2: 63x + 65(1 − x) = 63.60 gives x = 7/10; 63 × 0.7 = 44.1; 65 × 0.3 = 19.5; sum 63.6; swapped 63 × 0.3 + 65 × 0.7 = 64.4.
- Site notes: neon 20 × 0.9048 + 21 × 0.0027 + 22 × 0.0925 = 20.1877; lithium 6x + 7(1 − x) = 6.94 gives x = 0.06.
- Beam pivot positions (computed from the same values): 35.48 (scene 5, token counts) or 35.4846 (fractions; both draw at the same pixel at the chosen scale), 10.801, 28.22, 22.6, 63.60.

## Memory aid check

- **"The average leans toward the crowd."** Written for this lesson. Meaning, as said in scene 5: the weighted average lies closer to the mass of the more abundant isotope, like the balance point of a beam with more weight at that end. Assumptions checked: true for two isotopes (the weighted mean of two values lies nearer the one with the larger weight); for three or more isotopes, "the crowd" means the abundance-weighted bulk, and the mean always lies between the smallest and largest masses (key note 3 states the general check). It does not give the number, only the direction, so it is used as a check after calculation, and to catch the swapped answer in A2. Introduced after the 100-atom count and the formula.
- **Considered, not used:** "weight by how common" (accurate but no image); a class test-mark average analogy (weighted assessment marks; fine, but the beam shows the same idea with the atoms themselves).

## Narration length estimate

Revision 1 count (5 November; build parser rules, scenes joined with a space): **6,202 characters**, 16 scenes (per-scene counts in Review notes). At 13.3 characters per second the speech is about 466 s; add about 2 s for the token sort (scene 2), 2 s for the scene 5 hold, 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 86 s): **about 552 s** (9.2 minutes), inside the band and under the cap. Reserve trims: scene 3's mass spectrometer sentences (keep the plate and its tag silent), scene 8's last sentence, scene 2's last sentence.

## Scene list and build ids

Lesson key `c-y11-m1-v09` (route chem-y11-m1-v09; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m1-v09`.

In order (16 scene headings, all `### N.`): hook, hundred-atoms, weighted-average, fractions, balance, prediction, boron, sense-check, silicon-setup, silicon-solve, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: 1 to 2 camera continue (nuclei become tokens); 2 to 3 camera continue; 3 to 4 board reset to the calculation layout (the data table carries over); 4 to 5 camera continue (rows dim, beam draws); 5 to 6 clear change; 6 to 7 camera continue; 7 to 8 camera continue; 8 to 9 clear change; 9 to 10 camera continue; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m1-v09-learning-review.md`, `checks/c-y11-m1-v09-science-check.md`.

## Assets

Have (inspected 5 November on a paper-background contact sheet):
- `public/assets/chemistry/m8-mass-spectrometer-v1.png` (2000 × 2000; benchtop instrument): scene 3, small, named only.

Need: none new for this video. Scene 15 uses `chem-y11-hydrogen-discharge-tube-lit-v1.png`, requested in `chem-y11-m1-v10.md`'s asset brief (v10 also opens on this frame). Fallback if that plate is not ready: the coded spectrum strip alone with the chip.

Coded: chlorine box, nuclei and tokens, number lines, tally, data tables, beams, stacks, pivot and ticker, rows, chips, small atom with electron region, spectrum strip, attempt cards, countdowns, key notes board.

## Codex asset brief

None for this video (the discharge tube plate is in v10's brief). Build note: one reusable `BalanceBeam` component (props: min, max, isotope masses, counts or abundances, token colours, cue times for drops and pivot slide; pivot position computed as the weighted mean) serves scenes 5, 7, 9, 10, 12 and 14.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the chemistry of every learner-visible claim: Ar definition (carbon-12 = 12 exactly, no units); exact isotope masses give 35.45; no atom has the average mass; real silicon also has silicon-30; mass spectrometers measure abundances (named only).
3. Confirm the memory aid's assumptions (Memory aid check) and that the balance point is drawn at the computed weighted mean.
4. Confirm both attempt cards are original, keep "model element" and "assume only two isotopes", and show nothing answer-bearing.
5. Confirm the syllabus quote matches the ledger.
6. Confirm no person, hand or face is drawn or requested.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script.
9. Confirm the opening frame equals v08's final frame and the final frame matches v10's opening.
10. Report site notes 1 to 3 to root.

## YouTube metadata (draft)

Title: Relative Atomic Mass: Why It's a Weighted Average (Chlorine, Boron, Silicon) | Year 11 Chemistry

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year11/module1/lesson14.sa.html

Chlorine's relative atomic mass is 35.45, but no chlorine atom has that mass, and it isn't the simple average of 35 and 37. Count a sample of 100 chlorine atoms to see why the average leans toward the commoner isotope, then calculate relative atomic mass from isotope masses and abundances (boron), sense-check the answer, and work backwards to find unknown abundances in a two-isotope model (silicon). Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 1: Properties and Structure of Matter.
Syllabus content (NSW Chemistry Stage 6):
"calculate the relative atomic mass from isotopic composition (ACSCH024)"

Previous: Nuclide notation, isotopes and ions. Next: Line spectra and atomic energy levels.

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Site notes 1 to 3 (root).** Log the neon rounding, the lithium solution error and the "never happens in nature" overstatement in `../site-corrections-chem-y11.md` if accepted. Note 2 is a wrong worked answer a student could copy.
- **2. Handoff plate dependency (root).** The final frame uses v10's new hydrogen discharge tube plate; both videos wait on it, or use the coded-strip fallback.
- **3. "A r" in speech (listening).** If the Google voice reads "A r" badly, say "relative atomic mass" in full each time (adds about 60 characters).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the 100-atom count a clear bridge to fractions; does the beam make "leans toward the crowd" visible; is the silicon algebra followable at speaking pace, one row per sentence), then the science check and Codex error check.
- Every pivot position and token count must be computed from the same values as the rows.
- Checker output (5 November): narration 6,202 characters; per scene (1 to 16): 371, 624, 525, 668, 292, 214, 437, 343, 480, 483, 218, 411, 222, 407, 417, 75; no em dash; every quoted cue found in its scene's narration in spoken order. Scenes 2 and 4 are the longest stages; scene 4's last sentence is a trim candidate if the voiced take runs long.
