# Maths A11 S03: Why do we subtract the overlap when counting a union? The double count, |A ∪ B| = |A| + |B| − |A ∩ B|, finding any one of four numbers, the number in neither, and the disjoint case (design)

Status: Revision 2 (17 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md`, `../checks/root-rulings-maths-a11-c-e-packs.md` and `../checks/root-rulings-maths-a11-t-g-s-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,030 characters by script (see "Narration length estimate"; Revision 2), 14 scene headings, about 463 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov 2026): learning review resolved

Review: `../checks/m-a11-s03-learning-review.md` (summary `../checks/m-a11-s01-s11-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-t-g-s-packs.md` and root's resolution brief of 17 Nov. Resolution log: `../checks/m-a11-s01-s11-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 4 (A means art one scene after A meant the first set): **accepted**, reviewer's letters. "Twenty study visual arts"; givens "|M| = 30", "|V| = 20", "|M ∩ V| = 8" with a grey key "M: music, V: visual arts"; the strip "|M ∪ V| = |M| + |V| − |M ∩ V|" sits term for term under scene 3's rule card (M where A was, V where B was).
2. Optional, scene 4 ("In a group"): **applied** ("In a group of students").

Open decisions closed: see "Open decisions". Joins unchanged: scene 1 still opens on the previous design's final frame, and the handoff scene is still the next design's opening frame (no finding touched a joined frame). Changed and new values are rechecked in `work/brief-resolve-s/verify.py` (SymPy 1.14 and fractions, `python -I`).

Narration 5,030 characters by script (Revision 1: 5,002), about 463 s with holds; speech before the notes about 373 s, under the 570 s cap. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: eighty-second video of Year 11 Mathematics Advanced (2024), outline order 82, Probability and data (Sets and set notation). Pre-design pack: `../pre-design/maths-a11/math-a11-s03.md` (brief 243). Site lesson (read through the pack's quotations, read only): `probability-and-data/lesson13.sa.html` (`we-1`, 30 music, 20 art, 8 both; `we-2`, a class of 25 with 14 soccer and 16 netball; `we-3`, 80 people with 45 dogs, 32 cats and 15 both; card 05's "counted twice" reason; all with their numbers). Route entry: `math-a11-s03` in `../../programme/maths-a11-route-inputs-5.json`. Visual system: maths studio kit; a painted library trolley (prefix `ma11-`, introduced on s02's final frame) and a painted gumball machine for the handoff; every bar, tick, Venn diagram and row coded.

Owner rules applied: as s02 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (leisure: a library's borrowers), Australian spelling, no em dashes, set symbols spoken in words, conversational narration). s02 and s03 stay separate (root ruling 10).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Probability and data, Sets and set notation), quoted from `../../programme/maths-a11-route-inputs-5.json`:

- `ci5cd67d77`: "Establish and use the rule |A ∪ B| = |A| + |B| - |A ∩ B|"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

**Boundary:** starts from s02's final frame exactly (the library trolley plate; chips "print book: 26 members" (blue), "ebook: 19 members" (teal), "members: 36" (ink), "26 + 19 = 45?", "Next: counting a union", "?"; every member borrowed at least one). Recalls s02 (Venn diagrams filled from the overlap, regions adding to |U|, disjoint sets) in a phrase or grey chip each. Teaches: two totals overshoot the union by exactly the overlap, because every element in both is counted twice (the "establish", shown with bars and ticks before any formula); the rule |A ∪ B| = |A| + |B| − |A ∩ B|, with n(A) named once (`ci5cd67d77`); using it for the union (site `we-1`), the overlap (`we-2`) and the number in neither, |U| − |A ∪ B| (`we-3`); the disjoint case, where the totals simply add. Stops at counting. Not taught: probability and the addition rule P(A ∪ B) (s04, s05); three sets.

## Decisions

- **Anchor: a library's members and their borrowing (painted plate, live).** 26 print borrowers and 19 ebook borrowers among 36 members, every member borrowing at least one: the totals reach 45, which is impossible unless 9 members were counted in both. The overshoot is the lesson's cause in one sum. Leisure; the pack's anchor 1. No Year 11 or Year 12 Maths design uses a library's borrowers (grep 17 Nov 2026: "library" appears in Maths only as "quiet library 30 dB" in Year 12 t03 and t04, a sound level).
- **Notation (root ruling 9).** The rule on screen in the syllabus |A| form; "n(A)" named once as the same thing (scene 3). Spoken: "the number of elements in A union B", "the number in A", "A intersect B".
- **Simulations (standard item 3).**
  1. **Overshooting bars** (scenes 1, 2): `StackedTotalBar` lays a blue bar of 26 and a teal bar of 19 end to end against an ink bar of 36; the overshoot of 9 lights violet and slides down onto the Venn overlap.
  2. **Tick counter** (scene 2): 36 member dots in a Venn diagram (17 print only, 9 both, 10 ebook only, none outside); the 26 print dots each get a blue tick, then the 19 ebook dots a teal tick; the 9 overlap dots carry two ticks; one tick per overlap dot is struck off and a live count reads 45 → 36.
  3. **Four-number dial** (scenes 3, 5, 6): the rule card with four slots; covering any one slot and filling the other three solves for it.
- **Colour roles (fixed for the s strand, as s02).** A blue; B teal; A ∩ B violet; neither and complements amber; U ink; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Hand tags: "counted twice", "overshoot = overlap", "take one copy away", "at least one = union", "everyone plays: union = 25", "a count can't be negative", "neither = |U| − |A ∪ B|", "disjoint: just add".
- **Stage changes (standard item 2).** The library and the bars (1); ticks on the Venn diagram (2); the rule card (3); three g01 boards (4, 5, 6); the disjoint pull-apart (7); framed card (8); question cards (9 to 12); the gumball machine frame for s04 (13); key notes (14).
- **Worked examples (g01 layout).** 4: site `we-1` (union). 5: site `we-2` (overlap, everyone in at least one). 6: site `we-3` (neither, with the region check). Crossed slips: "30 + 20 = 50" (4), "25 − 14 − 16 = −5" (5, the site's own odd-one-out sign error).
- **Memory aid.** Framed card: "Add both totals, then take the overlap away once: it was counted twice." Second line: "Neither = |U| − |A ∪ B|."
- **Visual surprise.** The bars: 26 + 19 overshoots 36 by exactly the 9 members in the overlap, and the overshoot slides down into the overlap region.
- **Site notes (pack section 8).** No copy error in lesson13. The site writes n( ); the screen uses |A|. One forward sentence is planted for s05 in the handoff only by implication (counts become probabilities); the addition rule itself is not stated.
- **Plain meanings at first use.** "At least one" ("one or the other, or both: the union"); "neither" ("in U but outside both circles").
- **Attempts (pack questions).** A1: hostel, 120 guests, 70 tour, 45 bike, 30 neither: |A ∩ B| = 25; crossed "70 + 45 − 120 = −5". A2: |A| = 18, |A ∪ B| = 30, |A ∩ B| = 7: |B| = 19 and exactly one 23; crossed "|B| = 30 − 18 = 12".
- **Mistake scene:** none separate. Adding totals for "at least one" (4 crossed); subtracting the overlap twice (3 tag); the rearranging sign error (5 crossed); forgetting "neither" (6, A1 crossed); using the rule without "everyone is in at least one" (5 tag).
- **Cause chain taught, in order:** (1) the totals overshoot the number of members (1); (2) each member in both sets is in both totals, so it is counted twice, and the overshoot equals the overlap (2); (3) so the union is the sum minus one copy of the overlap (3); (4) the rule links four numbers, so any three give the fourth (4, 5); (5) "neither" is what the union leaves of U (6); (6) with no overlap nothing is counted twice, so the totals add (7).
- **Entry knowledge (route):** s02 (Venn diagrams with the overlap filled first; regions adding to |U|).
- **What later videos rely on.** s05 divides this rule by |S| to establish P(A ∪ B) = P(A) + P(B) − P(A ∩ B), and recalls "counted twice" in those words.
- **Handoff (to math-a11-s04, "How do sample spaces and events give a probability?").** Scene 13: the painted gumball machine (`ma11-gumball-machine-v1.png`); chips "red: 12" (red-tinted ink, not mistake red: a muted brick tone), "blue: 8" (blue), "yellow: 5" (amber), "one turn = one gumball", "P(blue) = 1/3 ?", "Next: sample spaces and probability", "?". This is s04's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Library: print only 17, both 9, ebook only 10, neither 0; 17 + 9 + 10 = 36.
  (b) we-1: 30 + 20 − 8 = 42. we-2: 14 + 16 − 25 = 5. we-3: 45 + 32 − 15 = 62; 80 − 62 = 18; regions 30, 15, 17, 18.
  (c) Disjoint example in scene 7: library members under 18 and members 18 or over (no numbers needed).
  (d) A1: union 120 − 30 = 90; 70 + 45 − 90 = 25. A2: 30 = 18 + |B| − 7, |B| = 19; A only 11, B only 12, exactly one 23.
  (e) Pronunciations: "the number of elements in A union B"; "n of A".

Main question: *Why do we subtract the overlap when counting a union? Twenty-six plus nineteen is forty-five, but there are only thirty-six members.*
Entry knowledge (s02): two-set Venn diagrams, the overlap first, regions adding to |U|.
Stops after: the counting rule, established and used for the union, the overlap and "neither"; the disjoint case. No probability.
Handoff: math-a11-s04: "three colours of gumball: is the chance of blue one in three?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): A blue, B teal, A ∩ B violet, neither amber, U ink, answer green, mistake red. Header strip "MATHEMATICS ADVANCED · PROBABILITY AND DATA". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: forty-five out of thirty-six
> Here's the library from last time. Last month, twenty-six members borrowed a print book, and nineteen borrowed an ebook. Every one of its thirty-six members borrowed at least one. But twenty-six plus nineteen is forty-five, nine more than the number of members. Nobody was invented, so somebody got counted more than once. Who? The members who borrowed **both**. So why do we subtract the overlap when we count a **union**?

Visual: opens on s02's final frame exactly (the library trolley plate `ma11-library-trolley-v1.png`, 560 px, at the left; chips "print book: 26 members" (blue), "ebook: 19 members" (teal), "members: 36" (ink), "26 + 19 = 45?", "Next: counting a union", "?"). The "Next" chip fades on the first sentence. `StackedTotalBar` builds at the right (1,000 px wide): a blue bar "26" and a teal bar "19" laid end to end, ending at "45", above an ink bar "36"; the part past 36 glows violet with "+9"; tag "too many". On "both" the trolley's e-reader and one print book ring together, tag "borrowed both". On "union" heading "The counting rule" writes on and the question chip "Why subtract the overlap?" moves to the top right.

### 2. counted twice
> Line the two totals up as bars. The print bar is twenty-six long, the ebook bar is nineteen, and end to end they reach forty-five. The members bar is only thirty-six, so they overshoot by **nine**. Now look at the Venn diagram, with a dot for each member. Give every member a tick for each total they're in. A member in the print only region gets one tick, from the twenty-six. A member in ebook only gets one tick, from the nineteen. But a member who borrowed both is in both totals, so they get two **ticks**. Adding the totals counts the overlap twice. So the overshoot, nine, is exactly the number who borrowed **both**.

Visual: the bars stay at the top (600 px); stage change below: a `VennDiagram` (1,000 × 560 px), U = "36 members" (ink), circles "P" (blue) and "E" (teal), with 36 member dots (17 print only, 9 both, 10 ebook only). On "nine" the violet "+9" pulses. Tick counter: the 26 dots in P each take a blue tick (live count "ticks: 26"), then the 19 dots in E each take a teal tick (count climbs to 45). On "ticks" the 9 overlap dots ring, each showing a blue and a teal tick; tag "counted twice". On "both" (last) the violet "+9" overshoot slides down from the bars onto the overlap and the label "9" (violet, 52 px) lands there; tag "overshoot = overlap".

### 3. the rule
> To count the union with every member once, add the two totals, then take away one copy of the overlap. That's the counting rule. The number of elements in A union B equals the number in A, plus the number in B, minus the number in A intersect **B**. Some books write n of A instead of these bars, and they mean the same thing, the number of elements. For the library, twenty-six plus nineteen minus nine is thirty-six, every member counted **once**. The rule links four numbers, so if you know any three, you can find the **fourth**.

Visual: stage change: the rule card, 56 px, centre: "|A ∪ B| = |A| + |B| − |A ∩ B|", each term in its colour (A blue, B teal, A ∩ B violet, A ∪ B ink); on "B" the "− |A ∩ B|" term rings, tag "take one copy away". Grey chip under it "n(A) = |A|: the number of elements". On "once" a library row writes beneath: "36 = 26 + 19 − 9" and the 9 overlap dots (small Venn, top right) lose one tick each, the live count "ticks: 45 → 36"; tag "each member once". On "fourth" the four slots of the rule glow in turn (four-number dial).

### 4. worked example 1: at least one
> In a group of students, thirty study music, twenty study visual arts, and eight study both. How many study at least one of the two? At least one means music, or visual arts, or both, and that's the union. So it's thirty plus twenty, minus eight, which is forty-**two**. Saying fifty is the slip. The eight who do both would be counted **twice**.

Visual: clear change to a g01 board: task strip, 44 px, "How many study at least one of the two?"; givens card "|M| = 30" (blue), "|V| = 20" (teal), "|M ∩ V| = 8" (violet), with the grey key "M: music, V: visual arts"; equation strip "|M ∪ V| = |M| + |V| − |M ∩ V|", placed term for term under scene 3's rule card (M where A was, V where B was); tag "at least one = union". Row, 52 px: "|M ∪ V| = 30 + 20 − 8"; on "two" the green frame "= 42 students". A small Venn diagram at the right fills 22, 8, 12. On "twice" a red slip "30 + 20 = 50" writes and is crossed, caption "the 8 counted twice".

### 5. worked example 2: finding the overlap
> In a class of twenty-five, every student plays soccer or netball, or both. Fourteen play soccer, and sixteen play netball. How many play both? Everyone plays at least one, so the union is the whole class, twenty-five. Put that into the rule. Twenty-five equals fourteen plus sixteen, minus the overlap. Fourteen plus sixteen is thirty, so the overlap is thirty minus twenty-five, which is **five**. It's how far the totals go past the class. Writing twenty-five minus fourteen minus sixteen gives minus five, and a count can't be **negative**.

Visual: stage change: new board. Task strip "How many play both?"; givens card "|U| = 25", "every student plays at least one", "|S| = 14" (blue), "|N| = 16" (teal); tag "everyone plays: union = 25" on the second given. Rows: "25 = 14 + 16 − |S ∩ N|", "|S ∩ N| = 30 − 25"; on "five" the green frame "= 5 students". `StackedTotalBar` mini: 14 and 16 end to end past a 25 bar, the overshoot "5" violet. On "negative" a red slip "|S ∩ N| = 25 − 14 − 16 = −5" writes and is crossed, caption "a count can't be negative".

### 6. worked example 3: neither
> Now one where not everyone is in a set. Of eighty people, forty-five own a dog, thirty-two own a cat, and fifteen own both. How many own neither? First, the union. Forty-five plus thirty-two, minus fifteen, is sixty-**two**. That's everyone with at least one of the two pets. The rest own neither, so it's eighty minus sixty-two, which is **eighteen**. Check with the regions. Dog only is thirty, cat only is seventeen, then fifteen in both and eighteen outside, and that adds to **eighty**.

Visual: stage change: new board. Task strip "How many own neither?"; givens card "|U| = 80" (ink), "|D| = 45" (blue), "|C| = 32" (teal), "|D ∩ C| = 15" (violet). Row: "|D ∪ C| = 45 + 32 − 15"; on "two" "= 62". Row "neither = |U| − |D ∪ C| = 80 − 62"; on "eighteen" the green frame "= 18 people"; tag "neither = |U| − |A ∪ B|". A Venn diagram at the right fills 30, 15, 17 and, amber outside, 18. On "eighty" the check row "30 + 15 + 17 + 18 = 80 ✓".

### 7. the disjoint case
> So when is just adding the totals right? Only when nothing gets counted twice, which means the sets are disjoint. Then A intersect B is the empty set, its count is zero, and the rule becomes the number in A union B equals the number in A plus the number in B. Print and ebook borrowers aren't disjoint, because a member can borrow both. But the library's members under eighteen and its members eighteen or over are disjoint, so those two counts can simply be **added**.

Visual: stage change: the rule card returns at the top; a two-circle `VennDiagram` slides apart (disjoint mode), the overlap shrinks to nothing and "|A ∩ B| = 0" writes in the gap; the last term of the rule greys and is struck through, leaving "|A ∪ B| = |A| + |B|" (green frame); tag "disjoint: just add". Two library chips "under 18" and "18 or over" sit in the separated circles. On "added" a grey chip "s02: disjoint means A ∩ B = ∅".

### 8. memory aid
> Here's the summary. Add both totals, then take the overlap away once, because it was counted twice. And if you need the number in neither, take the union away from the size of **U**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the two bars overshooting, with the overshoot dropping into a Venn overlap. Main line, hand font 56 px: "Add both totals, then take the overlap away once: it was counted twice." On "U" the key line, 40 px: "Neither = |U| − |A ∪ B|." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Of a hundred and twenty guests at a hostel, seventy booked a tour, forty-five hired a bike, and thirty did neither. How many guests booked a tour and hired a bike? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Of 120 guests at a hostel, 70 booked a tour, 45 hired a bike, and 30 did neither. How many guests booked a tour and hired a bike?" The full question stays on screen. Picture slot: an empty two-circle Venn diagram labelled "T" and "B" in a rectangle "U". Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Thirty did neither, so the union is a hundred and twenty minus thirty, **ninety**. Then ninety equals seventy plus forty-five, minus the overlap. So the overlap is a hundred and fifteen minus ninety, twenty-**five** guests. Using a hundred and twenty as the union is the slip. It gives minus five, because the thirty who did neither were left out.

Visual: the card shrinks to the top (30 px). Rows, 44 px: on "ninety" "|T ∪ B| = 120 − 30 = 90"; "90 = 70 + 45 − |T ∩ B|"; on "five" the green frame "|T ∩ B| = 115 − 90 = 25". The Venn diagram fills 45, 25, 20, and 30 outside (amber). On "the slip" a red slip "70 + 45 − 120 = −5" writes and is crossed, caption "neither left out". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. For sets A and B, the number of elements in A is eighteen, the number in A union B is thirty, and the number in A intersect B is seven. Find the number of elements in B, and the number in exactly one of the two sets. Pause here to answer.

Visual: `QuestionCard`, 40 px: "For sets A and B, |A| = 18, |A ∪ B| = 30 and |A ∩ B| = 7. Find |B| and the number of elements in exactly one of the two sets." Picture slot: an empty two-circle Venn diagram labelled "A" and "B". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> Thirty equals eighteen plus the number in B, minus seven. That's thirty equals eleven plus the number in B, so B has nineteen **elements**. Exactly one means the union without the overlap, thirty minus seven, which is twenty-**three**. Taking eighteen from thirty to get twelve is the slip. It forgets the seven that A and B share.

Visual: the card shrinks to the top. Rows: "30 = 18 + |B| − 7", "30 = 11 + |B|"; on "elements" the green frame "|B| = 19". The Venn diagram fills 11, 7, 12; on "three" the two only regions pulse and the green frame "exactly one: 30 − 7 = 23". On "the slip" a red slip "|B| = 30 − 18 = 12" writes and is crossed, caption "forgets the shared 7". Hold about 1 s.

### 13. handoff
> Counting tells us how many. Next, it'll tell us how likely. Here's a gumball machine with twelve red, eight blue and five yellow gumballs. One turn of the handle gives you one gumball. There are three colours, so is the chance of getting a blue one, one in three? Next, we'll count our way to a **probability**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the gumball machine plate (`ma11-gumball-machine-v1.png`, 620 px) at the left. Chips write as spoken: "red: 12", "blue: 8" (blue), "yellow: 5" (amber), "one turn = one gumball", "P(blue) = 1/3 ?". On "probability" chips "Next: sample spaces and probability" and "?". Hold about 2 s. This is s04's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- |A ∪ B| = |A| + |B| − |A ∩ B| (n(A) means |A|).
- Adding |A| and |B| counts A ∩ B twice.
- "At least one" is the union.
- Neither = |U| − |A ∪ B|.
- Disjoint (A ∩ B = ∅): |A ∪ B| = |A| + |B|.

Memory aid (framed card, right side, as in scene 8): *Add both totals, then take the overlap away once.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and s04's opening frame.

## Teaching checks

- **Does it explain causes?** Why the totals overshoot: the members in both are in both totals (1, 2). Why the overshoot is the overlap: each of those members is counted exactly twice (2). Why subtract once, not twice: one of the two counts is right (3). Why "neither" is |U| minus the union: the union is everyone in at least one set (6). Why disjoint sets add: nothing is counted twice (7).
- **Misconceptions addressed:** totals added for "at least one" (4 crossed); overlap subtracted twice (3 tag); the rearranging sign error (5 crossed); "neither" forgotten (6, A1 crossed); the overlap ignored in "find |B|" (A2 crossed).
- **Visual standard, item by item:** 1 the library from the first frame (s02's frame), back in 2, 3 and 7; 2 a new stage every 30 to 60 s; 3 overshooting bars, the tick counter, the four-number dial; 4 fixed roles; 5 large type; 6 hand tags; 7 three g01 boards; 8 framed card and five bullets; 9 the overshoot sliding down into the overlap.
- **One idea at a time:** overshoot (1), double count (2), rule (3), union (4), overlap (5), neither (6), disjoint (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 25 s and 25 s.
- **Avoided double teaching:** s02's Venn filling and disjoint sets are recalled in a phrase or chip.
- **Syllabus coverage:** `ci5cd67d77`: established (1 to 3) and used (4 to 7, A1, A2; key notes 1 to 5).
- **Out of scope by design:** probability (s04, s05); three sets.

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Of 120 guests at a hostel, 70 booked a tour, 45 hired a bike, and 30 did neither. How many guests booked a tour and hired a bike?"
Model answer: |T ∪ B| = 120 − 30 = 90. |T ∩ B| = |T| + |B| − |T ∪ B| = 70 + 45 − 90 = 25. Classic mistake (crossed): "70 + 45 − 120 = −5".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "For sets A and B, |A| = 18, |A ∪ B| = 30 and |A ∩ B| = 7. Find |B| and the number of elements in exactly one of the two sets."
Model answer: 30 = 18 + |B| − 7, so |B| = 19. Exactly one: |A ∪ B| − |A ∩ B| = 30 − 7 = 23 (A only 11, B only 12). Classic mistake (crossed): "|B| = 30 − 18 = 12".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Library | 26 + 19 = 45; 45 − 36 = 9; regions 17, 9, 10 | 1 to 3, 7 |
| we-1 | 30 + 20 − 8 = 42 | 4 |
| we-2 | 14 + 16 − 25 = 5 | 5 |
| we-3 | 45 + 32 − 15 = 62; 80 − 62 = 18; regions 30, 15, 17, 18 | 6 |
| A1 | 90; 25; regions 45, 25, 20, 30 | 9, 10 |
| A2 | |B| = 19; exactly one 23; regions 11, 7, 12 | 11, 12 |
| Handoff | 12 red, 8 blue, 5 yellow (25); "1/3?" posed, not answered | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python and SymPy 1.14 (17 Nov 2026, scratchpad `s-designs/verify.py`); Codex to re-check.

- 26 + 19 = 45; 45 − 36 = 9; 26 − 9 = 17; 19 − 9 = 10; 17 + 9 + 10 = 36.
- 30 + 20 − 8 = 42. 14 + 16 − 25 = 5. 45 + 32 − 15 = 62; 80 − 62 = 18; 45 − 15 = 30; 32 − 15 = 17; 30 + 15 + 17 + 18 = 80.
- 120 − 30 = 90; 70 + 45 − 90 = 25; 70 − 25 = 45; 45 − 25 = 20; 45 + 25 + 20 + 30 = 120.
- 30 = 18 + |B| − 7 ⇒ |B| = 19; 30 − 7 = 23; 18 − 7 = 11; 19 − 7 = 12.
- Handoff: 12 + 8 + 5 = 25 (s04: 8/25 = 0.32).

## Memory aid check

- **"Add both totals, then take the overlap away once: it was counted twice."** Original (the site's card 05 reason, compressed). Meaning, as said in scene 8: |A ∪ B| = |A| + |B| − |A ∩ B|. Assumptions checked: finite sets; two sets only; "the overlap" is |A ∩ B|, which is 0 for disjoint sets (scene 7), so the card still holds. Second line: neither = |U| − |A ∪ B|, which needs U stated (scene 6). It helps a new case: A2 rearranges the same rule.
- **Considered, not used:** "add, then subtract the middle" (loses the reason).

## Narration length estimate

Revision 2 recount (narration blockquotes, bold markers removed; `work/brief-resolve-s/count.py`, which reproduces e08's 5,632): 5,030 characters (Revision 1: 5,002). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 20 s of settling (the bars, the tick counter, the pull-apart) and the 45 s notes scene: about 463 s. Characters per scene (1 to 14): 415, 612, 521, 337, 535, 479, 465, 178, 196, 339, 248, 323, 307, 75. Speech before the notes is about 373 s, under the 570 s cap. Feedback speech: about 25 s and 24 s.

Reserve trims if the voiced take runs long: scene 6's region check sentence (keep the check row); scene 3's "Some books write n of A" sentence (keep the chip).

## Scene list and build ids

Lesson key `m-a11s03` (route math-a11-s03). Explainer folder `src/explainer/lessons/math-a11-s03`; build inputs in `docs/production/claude-pm/lessons/math-a11-s03/` (at voicing).

In order (14 scene headings): hook-forty-five-of-thirty-six, counted-twice, counting-rule, at-least-one, finding-the-overlap, neither, disjoint-case, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | The library and the overshooting bars |
| 35 to 90 s | 2 | Tick counter on the Venn diagram |
| 90 to 130 s | 3 | The rule card |
| 130 to 255 s | 4 to 6 | Three g01 boards |
| 255 to 290 s | 7 | Disjoint: the circles part |
| 290 to 305 s | 8 | Framed memory card |
| 305 to 390 s | 9 to 12 | Question cards and countdowns, then feedback |
| 390 to 415 s | 13 | The gumball machine frame for s04 |
| 415 to 460 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: s02's last frame continues into 1; 1 to 2 the bars rise and the diagram builds below; 2 to 3 stage change; 3 to 4, 4 to 5, 5 to 6 board changes; 6 to 7 stage change; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-s03-learning-review.md`, `science_check` = `checks/m-a11-s03-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets/maths`, file list): no library or gumball plate exists.

Reused: `ma11-library-trolley-v1.png` (painted under s02's brief; scenes 1 to 3, 7).

Need (painted, new; see the Codex asset brief): `ma11-gumball-machine-v1.png` (this video's handoff and s04).

Coded: bars, member dots and ticks, Venn diagrams, the rule card, rows, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `StackedTotalBar`, `VennDiagram` (s02's addition), `WorkingBoard`, `TaskStrip`, `GivensCard`, `EquationStrip`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Double-count tick overlay on `VennDiagram`** (kit list, s03 row): dots in regions take one tick per set they belong to, with a live tick count; overlap ticks can be struck off one per dot. Check: the tick count equals |A| + |B| before the strike and |A ∪ B| after.
2. **Overshoot slide** (small): the part of a `StackedTotalBar` beyond the reference bar lifts off and slides to a target point (the Venn overlap) carrying its label.

## Codex asset brief (Maths A11 S03, a gumball machine for the handoff and s04)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-s03.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the s03 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-gumball-machine-v1.png` (1400 × 2000 px): a classic gumball machine with a clear round glass globe on a red metal base with a turning handle and a small chute, seen front-on. The globe holds exactly 25 gumballs, all the same size: 12 red, 8 blue and 5 yellow, well mixed, each gumball's outline visible (none hidden behind another). No coin slot markings or text.

Sidecar JSON (`ma11-gumball-machine-v1.json`): the pixel centre and colour of each of the 25 gumballs (s04 numbers them 1 to 25 with coded labels), and the chute's exit point. Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, the alpha check, and a count of each colour. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-s03-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly, and that the rule is written in the |A| form with n(A) named once.
3. Confirm the double count is shown (bars and ticks) before the rule is stated.
4. Confirm the gumball plate has exactly 12 red, 8 blue and 5 yellow gumballs (s04 depends on it).
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, that scene 1 opens on s02's final frame and that scene 13 is s04's opening frame.

## YouTube metadata (draft)

Title: The Counting Rule: Why We Subtract the Overlap | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson13.sa.html

A library has 36 members. 26 borrowed a print book and 19 borrowed an ebook, which adds to 45. Where did the extra 9 come from? See why adding two totals counts the overlap twice, establish the rule |A ∪ B| = |A| + |B| − |A ∩ B|, and use it to find a union, an overlap and the number in neither. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Probability and data.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Establish and use the rule |A ∪ B| = |A| + |B| - |A ∩ B|"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

Builds on: Intersection, union and Venn diagrams. Next: Sample spaces and probability.

#Year11Maths #MathsAdvanced #SetsAndProbability #HSCScience

## Open decisions

Closed in Revision 2 by root ruling 38 and the review (keep the site contexts; the library carries the cause). The second board's letters are now M and V (finding 1). The Revision 1 text is kept below for the record.

- **1. Site contexts kept for the worked examples (learning review).** The three boards keep the site's music and visual arts (lettered M and V, Revision 2), soccer and netball, and dogs and cats with their numbers, while the library carries the cause. The reviewer may prefer one board re-set into the library; the numbers would not change.

## Review notes

- Revision 2: the independent learning review (`../checks/m-a11-s03-learning-review.md`, should-fix, 0 blockers) is resolved; see "Revision 2" at the top. Next: the Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 (superseded note): Revision 1 has had no independent review. Next: student learning review (trace from s02; check that the overshoot and the ticks make "counted twice" a reason before the formula, that "everyone is in at least one" is seen as the condition in scene 5, and that "neither" is clearly the outside region), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
