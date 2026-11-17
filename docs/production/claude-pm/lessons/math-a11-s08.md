# Maths A11 S08: When are two events independent, and how do we prove it? P(A|B) = P(A), why it gives P(B|A) = P(B), the product P(A ∩ B) = P(A) × P(B) and its converse, a survey test, independent against mutually exclusive, and two alarms (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md`, `../checks/root-rulings-maths-a11-c-e-packs.md` and `../checks/root-rulings-maths-a11-t-g-s-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,516 characters by script (see "Narration length estimate"), 14 scene headings, about 498 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: eighty-seventh video of Year 11 Mathematics Advanced (2024), outline order 87, Probability and data (Conditional probability). Pre-design pack: `../pre-design/maths-a11/math-a11-s08.md` (brief 243). Site lesson (read through the pack's quotations, read only): `probability-and-data/lesson04.sa.html` (`we-1`, a die's "even" and "greater than 4", independent; `we-2`, 200 students with 80 French, 60 German and 20 both, not independent; `we-3`'s argument that mutually exclusive events with positive probabilities are dependent; all with their numbers). Route entry: `math-a11-s08` in `../../programme/maths-a11-route-inputs-5.json`. Visual system: maths studio kit; the reused painted die (s07's final frame), the reused painted phone and a painted wind-up alarm clock; every strip, Venn diagram, table and proof line coded.

Owner rules applied: as s02 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (phones and home: two alarms set for the morning), Australian spelling, no em dashes, "zero point" decimals, set symbols spoken in words, conversational narration). No gambling (root ruling 8): the site's "two separate lottery draws" example is left out.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Probability and data, Conditional probability), quoted from `../../programme/maths-a11-route-inputs-5.json`:

- `ci3b004211`: "Define two events to be independent if the occurrence of one event does not affect the probability that the other event occurs"
- `cifa01f762`: "Explain that two events A and B are independent means P(A|B) = P(A) and P(B|A) = P(B), and show algebraically that if one of these formulas is true, then the other is also true"
- `ci3243e129`: "Use the formula P(A|B) = (P(A ∩ B))/(P(B)), and the test P(A|B) = P(A) for independence to prove that if two events are independent, then P(A ∩ B) = P(A) × P(B), and to prove conversely that if P(A ∩ B) = P(A) × P(B), then A and B are independent"
- `ci4e7d5072`: "Solve practical problems involving independent events"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

**Boundary:** starts from s07's final frame exactly (the red die plate and a 1 × 6 strip "1" to "6"; braces "A = even = {2, 4, 6}" (blue) and "B = bigger than 4 = {5, 6}" (teal); chips "P(A) = 1/2", "told: B happened", "P(A | B) = ?", "Next: independent events", "?"). Recalls s05 (mutually exclusive events, the complement rule) and s07 (P(A|B) = P(A ∩ B)/P(B), restriction, the dice's 1/6 → 1/5) in a phrase or grey chip each. Teaches: the definition in words, through restriction (A's share of B equals A's share of S) (`ci3b004211`); independence means P(A|B) = P(A) and P(B|A) = P(B), with the algebra showing one gives the other (`cifa01f762`); the proof that independence gives P(A ∩ B) = P(A) × P(B), and the converse (`ci3243e129`); the product test on survey data (site `we-2`); mutually exclusive events with positive probabilities are not independent (site `we-3`); a practical problem with two independent alarms and the complement (`ci4e7d5072`). Stops at independence of two events. Not taught: independence of three or more events; random variables (s09).

## Decisions

- **Anchor: two alarms set for the morning, a phone and a wind-up clock (reused painted phone, new painted clock, live).** A backup alarm is everyday, the two devices obviously work separately, and the payoff is striking: each fails now and then, but both fail only 5 times in 1,000 mornings. Phones and home; the pack's anchor 3. No Year 11 or Year 12 Maths design uses an alarm (grep 17 Nov 2026: hits only in science designs). Two separate devices are used, not two alarms on one phone, so that "independent" is believable (a flat phone battery would stop both alarms on one phone; author note). The opening is the die, fixed by s07's handoff and the route's start boundary.
- **Definition first, in words and pictures (pack decision).** Scenes 1 and 2 show independence as "same share" on the die before any formula; the product is reached by proof in scenes 3 and 4.
- **Proofs kept to short lines (pack decision).** Each proof is three or four board lines, with "P(A), P(B) > 0" said once.
- **Simulations (standard item 3).**
  1. **Share bars** (scenes 1, 2): two bars, "A's share of S" (3 of 6) and "A's share of B" (1 of 2), fill to the same length; for s07's dice the bars fill to 1/6 and 1/5 and visibly differ.
  2. **Proof builder** (scenes 3, 4): each line slides out of the one above, the moved factor travelling across the equals sign; cancelled factors strike through.
  3. **Thousand mornings** (scene 7): a 1,000-cell grid (40 × 25) fills from a seeded run of the two-alarm model: phone fails (blue), clock fails (teal), both fail (violet, 5 cells); a readout "at least one went off: 995 of 1,000" is labelled "simulated, matches the exact 0.995". The seed is chosen so the run shows exactly 50, 100 and 5 (the expected counts); the label says it is an illustration.
- **Colour roles (fixed for the s strand).** A blue; B teal; A ∩ B violet; complements amber; answer green; mistake red.
- **Large type, handwritten voice.** Hand tags: "same share", "nothing new", "share changed: dependent", "× P(B) both sides", "P(A) cancels", "one gives the other", "÷ P(B) both sides", "the product test", "exactly, not 'close'", "can't both happen", "knowing A rules out B", "both fail: multiply", "at least one: complement".
- **Stage changes (standard item 2).** The die and the share bars (1, 2); proof board 1 (3); proof board 2 and the die check (4); the survey table (5); two Venn diagrams side by side (6); the alarms and the thousand mornings (7); framed card (8); question cards (9 to 12); the mandarin frame for s09 (13); key notes (14).
- **Worked examples (g01 layout).** 4: the die by the product (1/6 = 1/2 × 1/3). 5: site `we-2` (0.12 ≠ 0.1). 6: site `we-3`'s argument. 7: the alarms (0.005, 0.995). Crossed slips: "0.12 is close to 0.1, so independent" (5), "0.95 + 0.9 = 1.85" (7).
- **Memory aid.** Framed card: "Independent: knowing one changes nothing about the other. Test: P(A ∩ B) = P(A) × P(B), exactly." Second line: "Mutually exclusive: can't happen together (so not independent)."
- **Visual surprise.** The share bars on the die: "even" and "greater than 4" look related, yet the bars fill to exactly the same length.
- **Site notes (pack section 8).** S11-P06 (trap 3 cites a king-and-heart example the lesson lacks) is not reused. The lottery example is left out. Drill 5 (complements of independent events are independent) is not taught.
- **Plain meanings at first use.** Independent ("knowing one happened doesn't change the probability of the other"); "converse" ("the same statement run backwards"); "at least one" ("one or both: the complement of none").
- **Attempts.** A1 (pack question 1): P(A) = 0.3, P(B) = 0.6, P(A ∪ B) = 0.72: P(A ∩ B) = 0.18 = 0.3 × 0.6, independent; crossed "not independent, because 0.72 ≠ 0.3 × 0.6". A2 (original, replacing the pack's alarm question because the alarms are now the worked example; the pack's juice-bar anchor): 100 smoothie orders, 40 large, 25 with a protein shot, 12 large with a protein shot: 0.4 × 0.25 = 0.1 ≠ 0.12, not independent; crossed "independent: the numbers are close".
- **Mistake scene:** none separate. Mutually exclusive taken as independent (6); "seems related" instead of testing (1, 2); the product used without independence (2, the dice); only one of P(A|B) = P(A) and P(B|A) = P(B) checked (3); "close" instead of equal (5 crossed, A2 crossed); adding probabilities above 1 (7 crossed).
- **Cause chain taught, in order:** (1) if B's outcomes contain A in the same proportion as S does, knowing B changes nothing (1, 2); (2) writing P(A|B) = P(A) with s07's formula and multiplying out gives the product, and the product gives P(B|A) = P(B) (3); (3) dividing the product by P(B) runs the proof backwards, so the product is a test (4); (4) data are tested by comparing exactly (5); (5) events that can't happen together tell you everything about each other, so they're not independent (6); (6) for independent devices, "both fail" is a product and "at least one works" is its complement (7).
- **Entry knowledge (route):** s07 (P(A|B) = P(A ∩ B)/P(B)); s05 (mutually exclusive events).
- **What later videos rely on.** Year 12 s02 and s03 assume the product of independent probabilities (repeated rolls); this video owns the proof.
- **Handoff (to math-a11-s09, "What makes a random variable discrete or continuous?").** Scene 13: the painted mesh bag of mandarins (`ma11-mandarin-bag-v1.png`) on a painted produce scale (`ma11-produce-scale-v1.png`) whose display panel shows the coded reading "1.13 kg"; chips "count: 9 mandarins" (blue) and "mass: 1.13 kg" (teal), "one bag, two numbers", "Next: random variables", "?". This is s09's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Die: A = {2, 4, 6}, B = {5, 6}, A ∩ B = {6}; P(A) = 1/2, P(B) = 1/3, P(A ∩ B) = 1/6 = (1/2)(1/3); P(A|B) = 1/2; P(B|A) = (1/6)/(1/2) = 1/3 = P(B).
  (b) Proof 1: P(A|B) = P(A) ⇒ P(A ∩ B)/P(B) = P(A) ⇒ P(A ∩ B) = P(A)P(B) ⇒ P(B|A) = P(A ∩ B)/P(A) = P(A)P(B)/P(A) = P(B). Needs P(A), P(B) > 0.
  (c) Converse: P(A ∩ B) = P(A)P(B) ⇒ P(A|B) = P(A)P(B)/P(B) = P(A).
  (d) Survey: 80/200 = 0.4; 60/200 = 0.3; 20/200 = 0.1; 0.4 × 0.3 = 0.12 ≠ 0.1. (P(G|F) = 20/80 = 0.25 ≠ 0.3.)
  (e) Alarms: 0.05 × 0.1 = 0.005; 1 − 0.005 = 0.995. Independence is a model assumption (separate devices, separate power).
  (f) A1: 0.3 + 0.6 − 0.72 = 0.18 = 0.3 × 0.6. A2: 0.4 × 0.25 = 0.1 ≠ 0.12; P(protein | large) = 12/40 = 0.3 ≠ 0.25.
  (g) Pronunciations: "P of A given B equals P of A"; "P of A intersect B equals P of A times P of B"; "zero point zero zero five".

Main question: *When are two events independent, and how do we prove it? On a die, does knowing "bigger than 4" change the chance of "even"?*
Entry knowledge (s05, s07): mutually exclusive events; P(A|B) = P(A ∩ B)/P(B).
Stops after: the definition, the two proofs, the product test, independence against mutual exclusivity, and a practical problem. No three-event independence.
Handoff: math-a11-s09: "one random bag of mandarins, a count and a mass: why are they different kinds of number?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): A blue, B teal, A ∩ B violet, complements amber, answer green, mistake red. Header strip "MATHEMATICS ADVANCED · PROBABILITY AND DATA". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: does knowing B change anything?
> Here's the die. On its own, the chance of an even number is three out of six, a half. Now we're told the number is bigger than four, so it's a five or a six. Restrict to those two. One of them, six, is even. So the chance of even, given bigger than four, is one out of two, a **half**. It hasn't changed at all. Knowing B told us nothing new about A. So when are two events independent, and how do we prove **it**?

Visual: opens on s07's final frame exactly (the red die plate `ma12-die-red-v1.png`, 300 px, at the left; the strip "1" to "6", 52 px; braces "A = even = {2, 4, 6}" (blue) and "B = bigger than 4 = {5, 6}" (teal); chips "P(A) = 1/2", "told: B happened", "P(A | B) = ?", "Next: independent events", "?"). The "Next" chip fades. Restrict: the cells 1 to 4 fade grey, leaving 5 and 6; the 6 turns violet. Share bars write under the strip: "A's share of S: 3 of 6" fills to half; on "half" "A's share of B: 1 of 2" fills to exactly the same length; row "P(A | B) = 1/2 = P(A)" (green frame); tag "same share". On "it" heading "Independent events" writes on, and the question chip "When does knowing B change nothing?" moves to the top right.

### 2. the definition
> Two events are independent if the occurrence of one doesn't affect the probability that the other occurs. In symbols, P of A given B equals P of A. On the die, A takes half of the whole sample space, and A also takes half of B. Same share, so knowing B changes **nothing**. Compare the two dice from last time. A double was a sixth overall, but given a total of eight, it was a fifth. That share changed, so those two events are not **independent**. You can't tell by whether events seem related. Even and bigger than four sound linked, but they're independent. You have to check.

Visual: same stage; definition card at the top, 44 px: "Independent: the occurrence of one event does not affect the probability that the other occurs"; row "P(A | B) = P(A)" (52 px). On "nothing" tag "nothing new". Clear change at the right: a small 6 × 6 array (s07's) with the total-8 cells teal; share bars "double's share of S: 6 of 36" and "double's share of B: 1 of 5" fill to visibly different lengths; on "independent" tag "share changed: dependent", row "1/5 ≠ 1/6". On "You have to check" a grey crossed chip "seems related, so dependent?".

### 3. one formula gives the other
> The syllabus says independence also means P of B given A equals P of B. Do we need to check that separately? No, and here's why. Start with P of A given B equals P of A. Write the left side as P of A intersect B, over P of B. Multiply both sides by P of B, and you get P of A intersect B equals P of A, times P of **B**. Now P of B given A is P of A intersect B, over P of A. Swap in that product, and the P of A on top cancels with the one underneath, leaving P of **B**. So if one formula is true, so is the other. All we need is that P of A and P of B aren't zero.

Visual: stage change: proof board, full width, lines 52 px: "P(A | B) = P(A)"; "P(A ∩ B) / P(B) = P(A)" with grey chip "s07: P(A | B) = P(A ∩ B) / P(B)"; on "B" (first) proof builder: "P(B)" travels across the equals sign, line "P(A ∩ B) = P(A) × P(B)" (violet frame), tag "× P(B) both sides". Line "P(B | A) = P(A ∩ B) / P(A) = P(A) × P(B) / P(A)"; on "B" (second) the P(A)s strike through, "= P(B)" (green frame), tag "P(A) cancels". Bracket over the four lines, tag "one gives the other". Grey chip at the foot "P(A), P(B) > 0".

### 4. the product, both ways
> That middle line is worth keeping. If A and B are independent, then P of A intersect B equals P of A times P of B. And it works backwards too. Suppose P of A intersect B equals P of A times P of B. Divide both sides by P of B. The left becomes P of A given B, and the right becomes P of A, so A and B are **independent**. That makes the product a test. On the die, P of A intersect B is just the six, one sixth. And P of A times P of B is a half times a third, also one sixth. They match exactly, so the events are independent, just as we **saw**.

Visual: stage change: second proof board. Top line, boxed: "independent ⇒ P(A ∩ B) = P(A) × P(B)". Converse lines: "P(A ∩ B) = P(A) × P(B)"; "P(A ∩ B) / P(B) = P(A)", tag "÷ P(B) both sides"; on "independent" "P(A | B) = P(A): independent" (green frame), the box now reads "⇔", tag "the product test". The die strip returns at the bottom: row "P(A ∩ B) = P({6}) = 1/6"; row "P(A) × P(B) = 1/2 × 1/3 = 1/6"; on "saw" a tick joins the two rows, green frame "equal: independent".

### 5. a test with data
> Here's a test with real numbers. Of two hundred students, eighty study French, sixty study German, and twenty study both. So P of French is zero point four, P of German is zero point three, and P of both is zero point one. The product is zero point four times zero point three, which is zero point one **two**. That's not zero point one. It's close, but close isn't enough. They're not equal, so studying French and studying German are not **independent**. You can see it in the table too. A quarter of the French students study German, but three tenths of everyone **does**.

Visual: clear change to a g01 board: task strip "Are studying French and studying German independent?"; givens card "U: 200 students", "F: 80" (blue), "G: 60" (teal), "F ∩ G: 20" (violet). Rows: "P(F) = 0.4, P(G) = 0.3, P(F ∩ G) = 0.1"; on "two" "P(F) × P(G) = 0.4 × 0.3 = 0.12"; "0.12 ≠ 0.1"; on "independent" the green frame "not independent". A red slip "0.12 is close to 0.1, so independent" writes and is crossed, tag "exactly, not 'close'". On "does" a small `TwoWayTable` at the right restricts to the French row: "P(G | F) = 20/80 = 0.25" against "P(G) = 0.3".

### 6. independent is not mutually exclusive
> People often mix up independent and mutually exclusive. Mutually exclusive events can't both happen, so P of A intersect B is zero. But if each event has a positive probability, their product isn't zero. So mutually exclusive events are not independent. In fact they're about as dependent as events get. If you know A happened, you know for certain that B **didn't**. Independent events do overlap, by exactly the product.

Visual: stage change: two Venn diagrams side by side (each 760 × 480 px). Left, "mutually exclusive": circles apart, "P(A ∩ B) = 0", rows "P(A) × P(B) > 0" and "0 ≠ P(A) × P(B): not independent"; tag "can't both happen"; grey chip "s05: mutually exclusive". On "didn't" the left A circle lights and the B circle greys out entirely, tag "knowing A rules out B". Right, "independent": overlapping circles, the overlap labelled "P(A ∩ B) = P(A) × P(B)" (violet).

### 7. two alarms
> Now a practical problem. You set an alarm on your phone, and a separate wind-up alarm clock, and they work independently of each other. The phone fails to go off with probability zero point zero five, and the clock fails with probability zero point one. What's the chance that at least one goes off? First, find the chance that both fail. They're independent, so multiply. Zero point zero five times zero point one is zero point zero zero **five**. At least one going off is the complement of both failing, so it's one minus zero point zero zero five, which is zero point nine nine **five**. Adding zero point nine five and zero point nine is the **slip**. That's more than one, because the two events can both happen.

Visual: stage change: the phone plate (`ma12-phone-v1.png`, 360 px, with a coded alarm screen "6:30") and the alarm clock plate (`ma11-alarm-clock-v1.png`, 360 px) at the left, with a model tag "separate devices"; g01 board at the right: task strip "Find P(at least one alarm goes off)"; givens "P(phone fails) = 0.05" (blue), "P(clock fails) = 0.1" (teal), "independent". Row "P(both fail) = 0.05 × 0.1"; on "five" (first) "= 0.005" (violet), tag "both fail: multiply". Row "P(at least one) = 1 − 0.005"; on "five" (second) the green frame "= 0.995", tag "at least one: complement". Thousand mornings: a 40 × 25 grid fills (phone fails blue, clock fails teal, both violet: 5 cells), readout "at least one went off: 995 of 1,000", label "simulated illustration". On "slip" a red slip "0.95 + 0.9 = 1.85" writes and is crossed, caption "over 1: not mutually exclusive".

### 8. memory aid
> Here's the summary. Independent means knowing one changes nothing about the other. To test it, check whether P of A intersect B equals P of A times P of B, **exactly**. And mutually exclusive is a different idea. Those events can't happen together.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the two share bars of equal length. Main line, hand font 56 px: "Independent: knowing one changes nothing about the other. Test: P(A ∩ B) = P(A) × P(B), exactly." On "exactly" the key line, 40 px: "Mutually exclusive: can't happen together (so not independent)." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. For events A and B, P of A is zero point three, P of B is zero point six, and P of A union B is zero point seven two. Determine whether A and B are independent. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "For events A and B, P(A) = 0.3, P(B) = 0.6 and P(A ∪ B) = 0.72. Determine whether A and B are independent." The full question stays on screen. Picture slot: an empty two-circle Venn diagram labelled "A" and "B". Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> First the overlap. Zero point three plus zero point six, minus zero point seven two, is zero point one **eight**. And P of A times P of B is zero point three times zero point six, also zero point one eight. They're equal, so A and B are **independent**. Comparing the union with the product is the slip. The test uses the intersection.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "P(A ∩ B) = 0.3 + 0.6 − 0.72"; on "eight" "= 0.18"; "P(A) × P(B) = 0.3 × 0.6 = 0.18"; on "independent" the green frame "equal: independent". On "the slip" a red slip "0.72 ≠ 0.3 × 0.6, so not independent" writes and is crossed, caption "test the intersection". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A juice bar recorded a hundred smoothie orders. Forty were large, twenty-five had a protein shot added, and twelve were large with a protein shot. Is adding a protein shot independent of ordering a large? Pause here to answer.

Visual: `QuestionCard`, 40 px: "A juice bar recorded 100 smoothie orders. 40 were large, 25 had a protein shot added, and 12 were large with a protein shot. Is adding a protein shot independent of ordering a large? Justify your answer." Picture slot: an empty two-way table with rows "large", "not large", "total" and columns "protein", "no protein", "total". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> P of large is zero point four, and P of protein is zero point two five. Their product is zero point **one**. But P of both is twelve out of a hundred, zero point one two. They're not equal, so the events are not **independent**. Large orders get a protein shot three tenths of the time, against a quarter overall. Calling them independent because the numbers are close is the slip.

Visual: the card shrinks to the top. The table fills: 12, 28, 40 / 13, 47, 60 / 25, 75, 100. Rows, 44 px: "P(L) × P(P) = 0.4 × 0.25"; on "one" "= 0.1"; "P(L ∩ P) = 12/100 = 0.12"; on "independent" the green frame "0.12 ≠ 0.1: not independent". Grey row "P(P | L) = 12/40 = 0.3 ≠ 0.25". On "the slip" a red slip "independent: the numbers are close" writes and is crossed, caption "exactly, not close". Hold about 1 s.

### 13. handoff
> So far, events have been things that either happen or don't. Next, numbers. Grab a bag of mandarins at the shop, at random. Count them, and you might get nine. Weigh the bag, and the scale might say one point one three kilograms. One random bag, and two numbers. So why are they different kinds of **number**?

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the mandarin bag plate (`ma11-mandarin-bag-v1.png`, 460 px) resting on the produce scale plate (`ma11-produce-scale-v1.png`, 620 px) at the centre; the scale's display panel shows a coded reading "1.13 kg". Chips write as spoken: "count: 9 mandarins" (blue), "mass: 1.13 kg" (teal), "one bag, two numbers". On "number" chips "Next: random variables" and "?". Hold about 2 s. This is s09's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Independent: one occurring doesn't change the probability of the other.
- P(A | B) = P(A) gives P(B | A) = P(B), and the reverse.
- Independent ⇔ P(A ∩ B) = P(A) × P(B).
- Test by comparing exactly.
- Mutually exclusive (P(A ∩ B) = 0) is not independent.

Memory aid (framed card, right side, as in scene 8): *Independent: knowing one changes nothing. Test: P(A ∩ B) = P(A) × P(B).* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and s09's opening frame.

## Teaching checks

- **Does it explain causes?** Why the die's events are independent: A's share of B equals its share of S (1, 2). Why one formula gives the other: algebra through the product (3). Why the product is a test: the proof runs backwards (4). Why mutually exclusive events are dependent: knowing one rules out the other (6). Why "both fail" multiplies: independent devices (7).
- **Misconceptions addressed:** mutually exclusive taken as independent (6); "seems related" (2); the product used without independence (2, the dice); one condition checked only (3); "close" (5 crossed, A2 crossed); probabilities added past 1 (7 crossed); the union tested instead of the intersection (A1 crossed).
- **Visual standard, item by item:** 1 the die from the first frame (s07's frame), the alarms in 7; 2 a new stage every 35 to 60 s; 3 the share bars, the proof builder, the thousand mornings; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards in 5 and 7; 8 framed card and five bullets; 9 the share bars filling to the same length.
- **One idea at a time:** the hook (1), the definition (2), proof one (3), the converse (4), data (5), versus mutually exclusive (6), a practical problem (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 25 s and 28 s.
- **Avoided double teaching:** s07's formula and restriction and s05's mutually exclusive events are chips.
- **Syllabus coverage:** `ci3b004211` (1, 2; key note 1); `cifa01f762` (3; key note 2); `ci3243e129` (3, 4; key note 3); `ci4e7d5072` (5, 7, A1, A2; key notes 4, 5).
- **Out of scope by design:** three or more events; random variables (s09).

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "For events A and B, P(A) = 0.3, P(B) = 0.6 and P(A ∪ B) = 0.72. Determine whether A and B are independent."
Model answer: P(A ∩ B) = 0.3 + 0.6 − 0.72 = 0.18. P(A) × P(B) = 0.18. Equal, so A and B are independent. Classic mistake (crossed): "not independent, because 0.72 ≠ 0.3 × 0.6".

**Attempt 2 (scene 11; original, HSC style, 2 marks suggested).** "A juice bar recorded 100 smoothie orders. 40 were large, 25 had a protein shot added, and 12 were large with a protein shot. Is adding a protein shot independent of ordering a large? Justify your answer."
Model answer: P(L) × P(P) = 0.4 × 0.25 = 0.1, but P(L ∩ P) = 0.12. Not equal, so not independent (also P(P | L) = 0.3 ≠ 0.25). Classic mistake (crossed): "independent: the numbers are close".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Die | P(A) = 1/2, P(B) = 1/3, P(A ∩ B) = 1/6, P(A | B) = 1/2 | 1, 2, 4 |
| Dice (recalled) | 1/6 against 1/5 | 2 |
| Survey | 0.4, 0.3, 0.1; 0.12 ≠ 0.1; P(G | F) = 0.25 | 5 |
| Alarms | 0.05, 0.1; 0.005; 0.995; 1.85 crossed; 1,000-cell illustration 50, 100, 5, 995 | 7 |
| A1 | 0.18 = 0.18 | 9, 10 |
| A2 | 0.1 ≠ 0.12; 0.3 vs 0.25; table 12, 28, 40 / 13, 47, 60 / 25, 75, 100 | 11, 12 |
| Handoff | 9 mandarins; 1.13 kg | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python and SymPy 1.14 (17 Nov 2026, scratchpad `s-designs/verify.py`); Codex to re-check.

- {2, 4, 6} ∩ {5, 6} = {6}; 1/6 = (1/2)(1/3); P(A | B) = (1/6)/(1/3) = 1/2.
- Proof checked symbolically: from P(A ∩ B) = P(A)P(B), P(A ∩ B)/P(A) = P(B) and P(A ∩ B)/P(B) = P(A) for P(A), P(B) > 0.
- 80/200 = 0.4; 60/200 = 0.3; 20/200 = 0.1; 0.4 × 0.3 = 0.12; 20/80 = 0.25.
- 0.05 × 0.1 = 0.005; 1 − 0.005 = 0.995; 0.95 + 0.9 = 1.85. In 1,000 mornings: 50, 100, 5 expected.
- 0.3 + 0.6 − 0.72 = 0.18; 0.3 × 0.6 = 0.18.
- 0.4 × 0.25 = 0.1; 12/100 = 0.12; 12/40 = 0.3; 40 − 12 = 28; 25 − 12 = 13; 60 − 13 = 47.

## Memory aid check

- **"Independent: knowing one changes nothing about the other. Test: P(A ∩ B) = P(A) × P(B), exactly."** The definition in plain words plus the syllabus test. Meaning, as said in scene 8. Assumptions checked: P(A), P(B) > 0 for the equivalence (scene 3); "exactly" means equality of exact values, not rounded ones (5). Second line: mutually exclusive events with positive probabilities are not independent (6). It helps a new case: A2.
- **Considered, not used:** "independent means unrelated" (a judgement in words; scene 2 shows "seems related" fails).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; 17 Nov, scratchpad `s-designs/count.py`): 5,516 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 18 s of settling (the share bars, the proof builder, the thousand mornings) and the 45 s notes scene: about 498 s. Characters per scene (1 to 14): 406, 572, 559, 539, 563, 418, 706, 244, 193, 327, 236, 373, 305, 75. Speech before the notes is about 409 s, under the 570 s cap. Feedback speech: about 25 s and 28 s.

Split test (root ruling 11): both proofs and the practical problems fit under 570 s, so s08 is not split. Reserve trims if the voiced take runs long: scene 5's last two sentences (keep the table row); scene 2's last three sentences (keep the crossed chip).

## Scene list and build ids

Lesson key `m-a11s08` (route math-a11-s08). Explainer folder `src/explainer/lessons/math-a11-s08`; build inputs in `docs/production/claude-pm/lessons/math-a11-s08/` (at voicing).

In order (14 scene headings): hook-does-b-change-anything, definition, one-formula-gives-other, product-both-ways, test-with-data, not-mutually-exclusive, two-alarms, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | The die and the share bars |
| 35 to 85 s | 2 | The definition; the dice's changed share |
| 85 to 135 s | 3 | Proof board 1 |
| 135 to 180 s | 4 | Proof board 2; the die by the product |
| 180 to 225 s | 5 | The survey board and table |
| 225 to 255 s | 6 | Two Venn diagrams side by side |
| 255 to 315 s | 7 | The alarms and the thousand mornings |
| 315 to 330 s | 8 | Framed memory card |
| 330 to 415 s | 9 to 12 | Question cards and countdowns, then feedback |
| 415 to 435 s | 13 | The mandarins for s09 |
| 435 to 480 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: s07's last frame continues into 1; 1 to 2 same stage, the array joins at the right; 2 to 3 stage change; 3 to 4 stage change; 4 to 5 clear change; 5 to 6 stage change; 6 to 7 stage change; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-s08-learning-review.md`, `science_check` = `checks/m-a11-s08-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, viewed): `ma12-die-red-v1.png`, `ma12-phone-v1.png` (blank dark screen for a coded alarm screen). No alarm clock, mandarin or produce scale plate exists.

Reused: `ma12-die-red-v1.png` (1, 2, 4), `ma12-phone-v1.png` (7).

Need (painted, new; see the Codex asset brief): `ma11-alarm-clock-v1.png` (7), `ma11-mandarin-bag-v1.png` and `ma11-produce-scale-v1.png` (this video's handoff and s09).

Coded: strips, share bars, proof lines, tables, Venn diagrams, the alarm screen, the 1,000-cell grid, rows, cards, countdown, hand tags, key notes, the scale's reading.

### Studio kit use and additions

Uses: `TwoWayTable` (s07's addition), `VennDiagram`, `OutcomeGrid`, `WorkingBoard`, `TaskStrip`, `GivensCard`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `chance.ts` (`runTrials` with a two-event `weighted` experiment, seeded).

Additions:
1. **Share bars** (small): two horizontal bars filling to given fractions, with labels, so equal or unequal shares are visible. Check: bar lengths proportional to the fractions within 2 px.
2. **Proof builder** (small): a `WorkingRows` mode in which a factor travels across the equals sign between lines and cancelled factors strike through.
3. **Thousand-cell grid** (small): a 40 × 25 grid filled from a seeded run with a role colour per outcome and a live count; the seed is chosen so the counts are 50, 100 and 5.

## Codex asset brief (Maths A11 S08, a wind-up alarm clock; a bag of mandarins and a produce scale for the handoff and s09)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-s08.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the s08 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-alarm-clock-v1.png` (1200 × 1300 px): a classic twin-bell wind-up alarm clock in red enamel, seen front-on; the dial shows hour ticks only, no numerals, with two hands. Nothing else.
2. `ma11-mandarin-bag-v1.png` (1400 × 1200 px): an orange mesh produce bag holding exactly nine mandarins, each mandarin's outline visible, tied at the top, lying slightly slumped, seen from the side. No tag or label.
3. `ma11-produce-scale-v1.png` (1800 × 1300 px): a small white shop produce scale with a flat stainless weighing tray on top and a front display panel that is blank (code writes the reading), seen front-on and slightly from above.

Sidecar JSON for the scale (`ma11-produce-scale-v1.json`): the pixel rectangle of the display panel and the tray's resting line (where the bag sits). Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, the alpha check and a count of mandarins. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-s08-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quotes match the route-inputs JSON exactly.
3. Confirm both proofs: P(A|B) = P(A) ⇒ P(A ∩ B) = P(A)P(B) ⇒ P(B|A) = P(B), and P(A ∩ B) = P(A)P(B) ⇒ P(A|B) = P(A), with P(A), P(B) > 0 stated.
4. Confirm the definition in words comes before any formula, and that no lottery or betting appears (root ruling 8).
5. Confirm the thousand-mornings grid is labelled as a simulated illustration.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, that scene 1 opens on s07's final frame and that scene 13 is s09's opening frame.

## YouTube metadata (draft)

Title: Independent Events: Definition, Proof and the Product Test | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson04.sa.html

Roll a die. Does knowing the number is bigger than 4 change the chance it's even? See what independent events are, show that P(A|B) = P(A) and P(B|A) = P(B) go together, prove that independent events have P(A ∩ B) = P(A) × P(B) and that the converse holds, test survey data, see why mutually exclusive events are not independent, and find the chance at least one of two alarms goes off. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Probability and data.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define two events to be independent if the occurrence of one event does not affect the probability that the other event occurs"
"Explain that two events A and B are independent means P(A|B) = P(A) and P(B|A) = P(B), and show algebraically that if one of these formulas is true, then the other is also true"
"Use the formula P(A|B) = (P(A ∩ B))/(P(B)), and the test P(A|B) = P(A) for independence to prove that if two events are independent, then P(A ∩ B) = P(A) × P(B), and to prove conversely that if P(A ∩ B) = P(A) × P(B), then A and B are independent"
"Solve practical problems involving independent events"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

Builds on: Conditional probability. Next: Discrete and continuous random variables.

#Year11Maths #MathsAdvanced #IndependentEvents #HSCScience

## Open decisions

- **1. The alarms are independent by assumption (learning review).** The narration says "they work independently of each other" and the screen tags "separate devices". If the reviewer wants the assumption flagged more, a grey tag "model: independent" can join the givens card; no narration change.
- **2. The seeded illustration (root).** The thousand-mornings grid is seeded to show the expected counts exactly, which is tidier than a real run. It is labelled "simulated illustration"; root may prefer a true random run with its readout beside the exact 0.995.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from s05 and s07; check that the share bars make the definition visible before any symbols, that each proof line is one move, that the converse is understood as the reason the product is a test, and that mutually exclusive is clearly not independent), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
