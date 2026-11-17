# Maths A11 S04: How do sample spaces and events give a probability? Experiments and trials, the sample space S, events as subsets, P(A) = |A|/|S| for equally likely outcomes, and A̅, A ∩ B and A ∪ B as events (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md`, `../checks/root-rulings-maths-a11-c-e-packs.md` and `../checks/root-rulings-maths-a11-t-g-s-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,058 characters by script (see "Narration length estimate"), 13 scene headings, about 466 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: eighty-third video of Year 11 Mathematics Advanced (2024), outline order 83, Probability and data (Probability). Pre-design pack: `../pre-design/maths-a11/math-a11-s04.md` (brief 243). Site lesson (read through the pack's quotations, read only): `probability-and-data/lesson01.sa.html` (card 05's sample spaces and P(A) = n(A)/n(S); the opening die-and-coin question and its answers 1/12 and 3/4, here found by counting the 12 outcomes, not by rules). Route entry: `math-a11-s04` in `../../programme/maths-a11-route-inputs-5.json`. Visual system: maths studio kit; a painted gumball machine (introduced on s03's final frame), the reused painted die and coin plates, and a painted hotel facade for the handoff; every sample space, event and fraction coded.

Owner rules applied: as s02 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (food and games: a gumball machine), Australian spelling, no em dashes, "zero point" decimals, set symbols spoken in words, conversational narration). No gambling (root ruling 8): the site's Oz Lotto card is left out; the die and coin are neutral sample-space objects with nothing at stake.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Probability and data, Probability), quoted from `../../programme/maths-a11-route-inputs-5.json`:

- `cib914fe5d`: "Define an experiment or a trial to be any procedure that can be infinitely repeated and has a well-defined set of possible outcomes known as the sample space, denoted S"
- `ci6948e56d`: "Identify an event A as a subset A of the sample space S"
- `ci851335dd`: "Define the probability of each outcome to be 1/(|S|) when all the outcomes are equally likely and the probability of the event A to be P(A) = (|A|)/(|S|)"
- `cid1a19692`: "Interpret the notation A̅ to be the event ‘ A does not occur’, interpret A ∩ B to be the event ‘ A and B both occur’, and interpret A ∪ B to be the event ‘ A or B occurs’"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

**Boundary:** starts from s03's final frame exactly (the gumball machine plate; chips "red: 12", "blue: 8", "yellow: 5", "one turn = one gumball", "P(blue) = 1/3 ?", "Next: sample spaces and probability", "?"). Recalls s01 (sets, subsets, complements, ∅), s02 (∩ and ∪) and Years 7 to 10 probability as a fraction, in a phrase or grey chip each. Teaches: an experiment or trial as a procedure that can be repeated without end, with a well-defined set of outcomes, the sample space S (`cib914fe5d`); each trial gives exactly one outcome in S; an event as a subset of S (`ci6948e56d`); for equally likely outcomes, 1/|S| for each outcome and P(A) = |A|/|S| (`ci851335dd`), and why the gumballs, not the colours, are the equally likely outcomes; the die-and-coin sample space of 12 listed outcomes; A ∩ B, A ∪ B and A̅ read as "both occur", "A or B occurs" and "A does not occur", each found by counting (`cid1a19692`); 0 ≤ P(A) ≤ 1. Stops at probability by counting. Not taught: the complement and addition rules as rules (s05); arrays and trees (s06); relative frequency (s10).

## Decisions

- **Anchor: a gumball machine (painted plate, live).** One turn is one trial; the 25 gumballs are the equally likely outcomes and the three colours are not. The hook's tempting "1/3" is the lesson's key trap (P(A) = |A|/|S| needs equally likely outcomes), and the plate shows why at a glance (more red than blue). Food and games; the pack's anchor 2. No Year 11 or Year 12 Maths design uses a gumball machine (grep 17 Nov 2026: no hits). No money is involved; the coin slot is not shown or mentioned.
- **The die and coin (reused plates).** The syllabus's listing demand and Year 12 s01's entry knowledge ("listing outcomes of two- and three-stage experiments") need a two-part sample space; the site's own opening question supplies it. The reused red die (`ma12-die-red-v1.png`) and coin (`ma12-coin-heads-v1.png`, `ma12-coin-tails-v1.png`) are neutral objects (root ruling 8). Year 12 s01 anchors on a board-game die rolled 200 times; here the die is one stage of a listed sample space, not the anchor.
- **Notation (root ruling 9).** S for the sample space; |A| and |S|; A̅ for "A does not occur" (s01's bar form). Spoken: "P of A", "A intersect B", "A union B", "A complement", "one twelfth", "zero point three two".
- **Simulations (standard item 3).**
  1. **Turn and drop** (scenes 1 to 3): the handle turns, one gumball drops down the chute and rings in the S grid with its number; repeated three times, each turn landing exactly one token (a "one trial, one outcome" counter).
  2. **Event lighting** (scenes 3, 5): `OutcomeGrid` predicate light lights the cells of an event given as a rule ("blue", "even", "heads", "even and heads", "even or heads", "odd") with "|A| / |S|" written beside.
  3. **Colour trap bars** (scene 3): three equal bars "1/3, 1/3, 1/3" morph into 12/25, 8/25, 5/25 as each colour's gumballs are counted; the equal version is crossed.
- **Colour roles (fixed for the s strand).** Event A blue; event B teal; A ∩ B violet; A̅ amber; S ink; answer green; mistake red. Gumball tokens keep their own red, blue and yellow, outlined so they are never confused with roles; the blue event's frame is the role blue.
- **Large type, handwritten voice.** Hand tags: "one trial, one outcome", "S: every possible outcome", "event = subset of S", "equally likely?", "count gumballs, not colours", "and: both occur", "or: either, or both", "not: A complement", "between 0 and 1".
- **Stage changes (standard item 2).** The machine and the trap (1); the numbered sample space (2); the blue event and the fraction (3); die and coin array (4); and, or, not on the array (5); the 0 to 1 line (6); framed card (7); question cards (8 to 11); the hotel frame for s05 (12); key notes (13).
- **Worked examples (g01 layout).** 3: P(blue) (task "Find P(blue) for one turn", givens "|S| = 25", "blue: 13 to 20", equation strip "P(A) = |A|/|S|", framed "8/25 = 0.32"). 5: the site's two opening events by counting (1/12 and 9/12). Crossed slips: "P(blue) = 1/3" (3), "P(even or heads) = 6/12 + 6/12 = 1" (5).
- **Memory aid.** Framed card: "List the equally likely outcomes (S). Pick out the event (A). P(A) = |A| / |S|." Second line: "One trial gives exactly one outcome."
- **Visual surprise.** The colour bars: the "obvious" equal thirds collapse into 12, 8 and 5 twenty-fifths as soon as the gumballs, not the colours, are counted.
- **Site notes (pack section 8).** The Oz Lotto card and its opinion line are left out (root ruling 8; Year 12 s02's ruling against raffles). `we-1` step 2 and `we-3` use the addition rule and are left for s05; `we-2` (at least one six in two rolls) is left for s06. The site's n(A)/n(S) is written |A|/|S|, and 1/|S| for each outcome is stated first (the site omits it).
- **Plain meanings at first use.** Experiment or trial ("a procedure we could repeat again and again, without end, whose possible outcomes we can list"); sample space ("the set of all possible outcomes"); event ("a set of outcomes, so a subset of S"); equally likely ("no outcome has a better chance than any other").
- **Attempts (pack questions).** A1: tokens 1 to 20, A multiples of 4, B greater than 14: A ∩ B = {16, 20}, P = 1/10; A ∪ B nine tokens, P = 9/20; crossed "(5 + 6)/20". A2: three coins: S of 8, exactly two heads 3/8, not all the same 6/8 = 3/4; crossed "S = {0, 1, 2, 3 heads}, 1/4".
- **Mistake scene:** none separate. Colours as equally likely outcomes (1, 3 crossed); "or" as excluding both, or double counting (5 crossed, A1 crossed); outcomes that are not equally likely listed as if they were (A2 crossed); a probability above 1 (6).
- **Cause chain taught, in order:** (1) a guess from the number of colours ignores how many of each there are (1); (2) a trial has a fixed set of outcomes, and each trial gives exactly one (2); (3) if no outcome is favoured, each has the same share, 1/|S|, so an event with |A| outcomes has |A|/|S| (3); (4) a two-part experiment's outcomes are pairs, and listing them all keeps them equally likely (4); (5) "and", "or" and "not" pick out subsets, so their probabilities are counts too (5); (6) a subset holds between none and all of S, so 0 ≤ P(A) ≤ 1 (6).
- **Entry knowledge (route):** s01 (sets, subsets, complements); s02 (intersection and union); Years 7 to 10 (simple probability as a fraction).
- **What Year 12 relies on.** Year 12 s01's entry knowledge ("sample spaces, equally likely outcomes and P(A) = favourable ÷ total ... listing outcomes of two- and three-stage experiments") and its aid "One trial, one value", which assumes each outcome is one result of one trial. Scene 2 says "Each turn gives exactly one outcome" and the counter shows it; scene 3 states the equally likely condition before the formula; scene 4 lists a two-stage space and A2 a three-stage one.
- **Handoff (to math-a11-s05, "How do the complement and addition rules work on a Venn diagram?").** Scene 12: the painted hotel facade (`ma11-hotel-facade-v1.png`, 40 windows), with a coded tint on 16 sea-view windows (blue), 10 spa windows (teal; 6 of them also blue, shown violet), and a two-circle Venn diagram beside it with counts 10, 6, 4 and 20 outside; chips "room given at random", "P(sea view or spa)?", "Next: rules for probabilities", "?". This is s05's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Gumballs numbered: red 1 to 12, blue 13 to 20, yellow 21 to 25. P(red) = 12/25 = 0.48, P(blue) = 0.32, P(yellow) = 0.2.
  (b) "Repeated without end" assumes the machine is refilled to the same 25 each time (said in scene 2).
  (c) Die and coin: S = {1H, 1T, ..., 6H, 6T}; even = 6; heads = 6; even and heads = {2H, 4H, 6H}; even or heads = 9; odd = 6; 6 and heads = {6H}.
  (d) A1: A = {4, 8, 12, 16, 20}, B = {15, ..., 20}, A ∪ B = {4, 8, 12, 15, 16, 17, 18, 19, 20}.
  (e) A2: S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}.
  (f) Pronunciations: "P of A"; "one twelfth"; "nine twelfths"; "zero point three two".

Main question: *How do sample spaces and events give a probability? Three colours of gumball: is the chance of blue one in three?*
Entry knowledge (s01, s02; Years 7 to 10): sets, subsets, ∩ and ∪; a probability as a fraction.
Stops after: trials, S, events, P(A) = |A|/|S| for equally likely outcomes, and A̅, A ∩ B, A ∪ B found by counting. No rules yet.
Handoff: math-a11-s05: "a hotel room given at random: what's the chance of a sea view or a spa?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): A blue, B teal, A ∩ B violet, A̅ amber, S ink, answer green, mistake red. Header strip "MATHEMATICS ADVANCED · PROBABILITY AND DATA". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: three colours, one turn
> Here's the gumball machine, with twelve red, eight blue and five yellow gumballs. One turn of the handle drops out one gumball. There are three colours, so is the chance of blue one in three? It sounds reasonable. But look inside. There are more red gumballs than blue ones, so red should come out more often than blue, and one in three can't be right. So how do sample spaces and events give a **probability**?

Visual: opens on s03's final frame exactly (the gumball machine plate `ma11-gumball-machine-v1.png`, 620 px, at the left; chips "red: 12", "blue: 8", "yellow: 5", "one turn = one gumball", "P(blue) = 1/3 ?", "Next: sample spaces and probability", "?"). The "Next" chip fades. On "one turn" the handle turns and one gumball (red) drops down the chute (turn and drop). Three equal bars write at the right: "red 1/3", "blue 1/3", "yellow 1/3". On "look inside" the 12 red gumballs ring in the globe, then the 8 blue; tag "more red than blue". On "probability" heading "Sample spaces, events and probability" writes on, and the question chip "Why not 1/3?" moves to the top right.

### 2. trials and the sample space
> First, some words. An experiment, or a trial, is a procedure that could be repeated again and again, without end, and has a well-defined set of possible outcomes. One turn of this handle is a trial, if we imagine the machine topped back up to the same mix each time. The set of all the possible outcomes is called the sample space, and we write it S. Here, an outcome is one particular gumball, so let's number them, one to twenty-**five**. Red are one to twelve, blue thirteen to twenty, and yellow twenty-one to twenty-five. Each turn gives exactly one outcome from S, one gumball. And the number of outcomes in S is **twenty-five**.

Visual: stage change: the machine shrinks to 380 px at the left; at the right an `OutcomeGrid` (5 × 5, 900 × 900 px) inside a brace "S = { ... }" (ink). Definition card, 40 px, writes on the first sentence: "Experiment or trial: a procedure that can be repeated without end, with a well-defined set of possible outcomes"; tag "repeat: refill the same mix". On "five" (first) the 25 gumballs' coded number labels light in the globe and 25 matching tokens (red, blue or yellow fill, white number) fill the grid in order; tag "S: every possible outcome". Turn and drop: three more turns, each gumball ringing in the grid as it lands, the counter "trials: 3, outcomes recorded: 3", tag "one trial, one outcome". On "twenty-five" (last) the label "|S| = 25" (ink, 52 px).

### 3. events and equally likely outcomes
> An event is a set of outcomes, so it's a subset of the sample space. The event "blue" is the set of gumballs thirteen to twenty, and it has eight **elements**. Now, if the gumballs are well mixed and all the same size, no gumball has a better chance than any other. They're equally likely. So each outcome has probability one over the number in S, one twenty-**fifth**. And the probability of an event A is the number of outcomes in A, over the number in S. For blue, that's eight over twenty-five, which is zero point three **two**. The one in three came from counting colours, and colours aren't equally likely. So always check you're counting outcomes that are equally **likely**.

Visual: same grid (stage continues); g01 board at the left replaces the machine: task strip "Find P(blue) for one turn"; givens card "|S| = 25", "blue: gumballs 13 to 20"; equation strip "P(A) = |A| / |S|". On "elements" the blue tokens light (predicate light "blue"), brace "B = {13, 14, ..., 20}" (blue), "|B| = 8"; tag "event = subset of S". On "fifth" chip "each outcome: 1/|S| = 1/25", tag "equally likely?". Row, 52 px: "P(blue) = 8/25"; on "two" the green frame "= 0.32". Colour trap bars: the equal thirds morph into "red 12/25", "blue 8/25", "yellow 5/25". On "likely" (last) a red slip "P(blue) = 1/3" writes and is crossed, caption "count gumballs, not colours".

### 4. a die and a coin
> Now an experiment in two parts. Roll a die and toss a coin. Which is more likely, a six and heads, or an even number or heads? To find out, list the sample space by pairing every number with every face. One heads, one tails, two heads, two tails, and so on, up to six tails. That's six times two, twelve outcomes. For a fair die and a fair coin they're all equally **likely**, so each has probability one twelfth. Let A be the event "an even number". That's six outcomes. And let B be "heads", which is also **six**.

Visual: clear change: the red die plate (`ma12-die-red-v1.png`, 240 px) and the coin plates (`ma12-coin-heads-v1.png` and `ma12-coin-tails-v1.png`, 160 px each) at the top left; an `OutcomeGrid` 6 × 2 (1,000 × 520 px) builds column by column with labels 1 to 6 across and "H", "T" down; cells read "1H", "1T", ..., "6T" (44 px). Chip "S: 12 outcomes, |S| = 12". The two questions sit in a strip at the top: "6 and heads?" and "even or heads?". On "likely" chip "each outcome: 1/12". Brace "A = even" lights the 2, 4 and 6 columns blue; on "six" (last) brace "B = heads" lights the H row teal.

### 5. and, or, not
> Now the set symbols get meanings in words. A intersect B is the event "A and B both occur", an even number and heads. That's two heads, four heads and six heads, three outcomes, so its probability is three twelfths, a **quarter**. A union B is the event "A or B occurs", an even number, or heads, or both. That's all six evens, plus the odd heads, one, three and five. That's nine, so nine twelfths, three **quarters**. And A complement is the event "A does not occur", an odd number, six outcomes, so a **half**. A six and heads is just one outcome, one twelfth. So even or heads is nine times as **likely**. Adding six twelfths and six twelfths to get one is the slip. It counts two, four and six heads **twice**.

Visual: same grid. Rows at the right, 44 px, each lighting its cells (predicate light): "A ∩ B: A and B both occur" (violet) lights 2H, 4H, 6H, row "P(A ∩ B) = 3/12"; on "quarter" "= 1/4" (green); tag "and: both occur". "A ∪ B: A or B occurs" lights nine cells (blue, teal, violet); row "P(A ∪ B) = 9/12"; on "quarters" "= 3/4" (green); tag "or: either, or both". "A̅: A does not occur" lights the odd columns amber; on "half" "P(A̅) = 6/12 = 1/2"; tag "not: A complement". The 6H cell rings: "P(6 and H) = 1/12". On "likely" the two answers sit side by side "1/12 vs 9/12", tag "9 times as likely". On "twice" a red slip "6/12 + 6/12 = 1" writes and is crossed, caption "2H, 4H, 6H counted twice".

### 6. between zero and one
> Since an event is a subset of S, it holds anywhere from none of the outcomes to all of them. So a probability is always between zero and one. An event with no outcomes, like a green gumball from this machine, is the empty set, with probability **zero**. And S itself, some gumball, has probability **one**. So an answer above one, or below zero, means something was counted **wrong**.

Visual: stage change: a horizontal probability line 0 to 1 (1,400 px), the machine badge at the left. Markers drop onto it: "yellow 0.2", "blue 0.32", "red 0.48". On "zero" a grey chip "green gumball: ∅" drops to 0, tag "impossible". On "one" "any gumball: S" drops to 1, tag "certain". Row "0 ≤ P(A) ≤ 1" (52 px); tag "between 0 and 1". On "wrong" a red ghost marker "1.2" appears off the right end and is crossed.

### 7. memory aid
> Here's the summary. List the equally likely outcomes, and that's S. Pick out the ones in your event, and that's A. Then the probability of A is the number in A, over the number in **S**. And remember, one trial gives exactly one outcome.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the 25-token grid with the blue event lit. Main line, hand font 56 px: "List the equally likely outcomes (S). Pick out the event (A). P(A) = |A| / |S|." On "S" the key line, 40 px: "One trial gives exactly one outcome." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A bag holds twenty tokens numbered one to twenty, and one is drawn at random. A is the event "the number is a multiple of four", and B is "the number is greater than fourteen". List A intersect B and A union B, and find the probability of each. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A bag holds 20 tokens numbered 1 to 20, and one is drawn at random. A is the event 'the number is a multiple of 4' and B is the event 'the number is greater than 14'. List A ∩ B and A ∪ B, and find P(A ∩ B) and P(A ∪ B)." The full question stays on screen. Picture slot: twenty plain numbered tokens 1 to 20 in a 4 × 5 grid, none lit. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> A is four, eight, twelve, sixteen and twenty. B is fifteen to twenty. Both happen for sixteen and twenty, so the probability of A intersect B is two twentieths, one **tenth**. A union B is four, eight, twelve, then fifteen to twenty, nine tokens, so nine **twentieths**. Five plus six over twenty is the slip. Sixteen and twenty were counted twice.

Visual: the card shrinks to the top (30 px). The token grid lights A blue and B teal, 16 and 20 violet. Rows, 44 px: "A ∩ B = {16, 20}"; on "tenth" the green frame "P(A ∩ B) = 2/20 = 1/10"; "A ∪ B = {4, 8, 12, 15, 16, 17, 18, 19, 20}"; on "twentieths" the green frame "P(A ∪ B) = 9/20". On "the slip" a red slip "(5 + 6)/20 = 11/20" writes and is crossed, caption "16 and 20 counted twice". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A fair coin is tossed three times. List the sample space. Find the probability of exactly two heads, and the probability that the three tosses are not all the same. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A fair coin is tossed three times. List the sample space. Find the probability of exactly two heads, and the probability that the three tosses are not all the same." Picture slot: the coin plate (`ma12-coin-heads-v1.png`, 160 px) and three empty boxes "1st, 2nd, 3rd". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Each toss has two faces, so there are eight equally likely outcomes, from three heads to three tails. Exactly two heads is head head tail, head tail head and tail head head, so three **eighths**. Not all the same is everything except all heads and all tails, six eighths, three **quarters**. Listing just zero, one, two or three heads is the slip. Those four aren't equally likely.

Visual: the card shrinks to the top. The list writes in two columns, 44 px: "HHH, HHT, HTH, THH, HTT, THT, TTH, TTT", chip "|S| = 8". On "eighths" HHT, HTH, THH light and the green frame "P(exactly two heads) = 3/8"; on "quarters" HHH and TTT grey out, the green frame "P(not all the same) = 6/8 = 3/4". On "the slip" a red slip "S = {0, 1, 2, 3 heads}, P = 1/4" writes and is crossed, caption "not equally likely". Hold about 1 s.

### 12. handoff
> So far, every probability has come from counting. Next, a hotel with forty rooms, each given out at random. Sixteen have a sea view, ten have a spa, and six have both. What's the chance your room has a sea view or a spa? And can last video's counting rule become a rule for **probabilities**?

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the hotel facade plate (`ma11-hotel-facade-v1.png`, 760 px) at the left, its 40 windows in five floors of eight. On "sea view" 16 windows tint blue; on "spa" 10 windows tint teal, 6 of them violet (both). A two-circle `VennDiagram` at the right fills "10" (blue), "6" (violet), "4" (teal) and "20" outside (amber), U = "40 rooms". Chips "room given at random", "P(sea view or spa)?". On "probabilities" chips "Next: rules for probabilities" and "?". Hold about 2 s. This is s05's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Sample space S: all possible outcomes of a trial (one trial, one outcome).
- An event A is a subset of S.
- Equally likely outcomes: each has 1/|S|, and P(A) = |A| / |S|.
- A ∩ B: both occur. A ∪ B: A or B occurs. A̅: A does not occur.
- 0 ≤ P(A) ≤ 1.

Memory aid (framed card, right side, as in scene 7): *List the equally likely outcomes. P(A) = |A| / |S|.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and s05's opening frame.

## Teaching checks

- **Does it explain causes?** Why not 1/3: colours have different numbers of gumballs (1, 3). Why 1/|S| per outcome: equally likely outcomes share the certainty equally (3). Why |A|/|S|: an event collects |A| of those equal shares (3). Why "and", "or" and "not" are counts: they are subsets of S (5). Why 0 ≤ P ≤ 1: a subset holds between none and all of S (6).
- **Misconceptions addressed:** colours as equally likely outcomes (3 crossed); "or" double counted (5 crossed, A1 crossed); unequal outcomes listed as equal (A2 crossed); a probability above 1 (6).
- **Visual standard, item by item:** 1 the gumball machine from the first frame (s03's frame), back in 2, 3 and 6; 2 a new stage every 35 to 65 s; 3 the turn and drop, event lighting, the colour bars morphing; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 3; 8 framed card and five bullets; 9 the equal thirds collapsing into twenty-fifths.
- **One idea at a time:** the trap (1), trial and S (2), events and |A|/|S| (3), a listed two-part space (4), and, or, not (5), bounds (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 26 s and 28 s.
- **Avoided double teaching:** s01's subsets and complements and s02's ∩ and ∪ are recalled as chips; their meanings as events are new.
- **Syllabus coverage:** `cib914fe5d` (2; key note 1); `ci6948e56d` (3, 4; key note 2); `ci851335dd` (3, 4, A1, A2; key note 3); `cid1a19692` (5, A1; key note 4).
- **Out of scope by design:** the complement and addition rules as rules (s05); arrays and trees as methods (s06); relative frequency (s10).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A bag holds 20 tokens numbered 1 to 20, and one is drawn at random. A is the event 'the number is a multiple of 4' and B is the event 'the number is greater than 14'. List A ∩ B and A ∪ B, and find P(A ∩ B) and P(A ∪ B)."
Model answer: A = {4, 8, 12, 16, 20}, B = {15, 16, 17, 18, 19, 20}. A ∩ B = {16, 20}, P(A ∩ B) = 2/20 = 1/10. A ∪ B = {4, 8, 12, 15, 16, 17, 18, 19, 20}, P(A ∪ B) = 9/20. Classic mistake (crossed): "(5 + 6)/20".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "A fair coin is tossed three times. List the sample space. Find the probability of exactly two heads, and the probability that the three tosses are not all the same."
Model answer: S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}, 8 equally likely outcomes. Exactly two heads: 3/8. Not all the same: 6/8 = 3/4. Classic mistake (crossed): S as {0, 1, 2, 3 heads}, giving 1/4.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Gumballs | 12 red, 8 blue, 5 yellow; |S| = 25; P(blue) = 8/25 = 0.32; red 0.48, yellow 0.2 | 1 to 3, 6 |
| Die and coin | |S| = 12; each 1/12; even 6, heads 6; A ∩ B 3/12 = 1/4; A ∪ B 9/12 = 3/4; A̅ 6/12 = 1/2; 6 and H 1/12 | 4, 5 |
| A1 | A ∩ B = {16, 20}, 1/10; A ∪ B 9 tokens, 9/20 | 8, 9 |
| A2 | |S| = 8; 3/8; 6/8 = 3/4 | 10, 11 |
| Handoff | 40 rooms; 16 sea view, 10 spa, 6 both; regions 10, 6, 4, 20 | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python and SymPy 1.14 (17 Nov 2026, scratchpad `s-designs/verify.py`); Codex to re-check.

- 12 + 8 + 5 = 25; 8/25 = 0.32; 12/25 = 0.48; 5/25 = 0.2.
- 6 × 2 = 12; even and heads 3/12 = 1/4; even or heads 9/12 = 3/4; odd 6/12 = 1/2; 6 and heads 1/12; 9/12 ÷ 1/12 = 9.
- Multiples of 4 in 1 to 20: 5; greater than 14: 6; ∩ {16, 20}; |∪| = 9; 2/20 = 1/10.
- Three coins: 8 outcomes; exactly two heads 3; not all the same 6; 3/8; 3/4.
- Handoff: 16 − 6 = 10; 10 − 6 = 4; 40 − (10 + 6 + 4) = 20.

## Memory aid check

- **"List the equally likely outcomes (S). Pick out the event (A). P(A) = |A| / |S|."** Original. Meaning, as said in scene 7: count the favourable equally likely outcomes and divide by the total. Assumptions checked: the outcomes must be equally likely (the gumballs, not the colours; the eight coin sequences, not the four head counts); S finite. Second line: "One trial gives exactly one outcome" (Year 12 s01's "One trial, one value" rests on it). It helps a new case: any listed sample space.
- **Considered, not used:** "favourable over total" (the site's and Year 12's informal phrase; kept out of the card because it drops the equally likely condition, though Year 12 s01 uses it with that condition).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; 17 Nov, scratchpad `s-designs/count.py`): 5,058 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 20 s of settling (turns and drops, event lighting) and the 45 s notes scene: about 466 s. Characters per scene (1 to 13): 407, 627, 667, 508, 695, 372, 233, 277, 340, 196, 373, 288, 75. Speech before the notes is about 375 s, under the 570 s cap. Feedback speech: about 26 s and 28 s.

Reserve trims if the voiced take runs long: scene 5's last pair (keep the crossed slip on screen); scene 6's last sentence (keep the crossed 1.2).

## Scene list and build ids

Lesson key `m-a11s04` (route math-a11-s04). Explainer folder `src/explainer/lessons/math-a11-s04`; build inputs in `docs/production/claude-pm/lessons/math-a11-s04/` (at voicing).

In order (13 scene headings): hook-three-colours, trials-sample-space, events-equally-likely, die-and-coin, and-or-not, zero-to-one, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | The machine and the one-in-three trap |
| 35 to 90 s | 2 | The numbered sample space; turns and drops |
| 90 to 145 s | 3 | The blue event on a g01 board; the colour bars |
| 145 to 185 s | 4 | Die and coin array |
| 185 to 250 s | 5 | And, or, not lit on the array |
| 250 to 275 s | 6 | The 0 to 1 line |
| 275 to 295 s | 7 | Framed memory card |
| 295 to 385 s | 8 to 11 | Question cards and countdowns, then feedback |
| 385 to 410 s | 12 | The hotel frame for s05 |
| 410 to 455 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: s03's last frame continues into 1; 1 to 2 stage change (the machine shrinks, the grid builds); 2 to 3 the board replaces the machine; 3 to 4 clear change; 4 to 5 same grid; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-s04-learning-review.md`, `science_check` = `checks/m-a11-s04-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets/maths` and `public/assets/biology`, viewed): `ma12-die-red-v1.png` (a clean red die, three faces visible, reads at 240 px); `ma12-coin-heads-v1.png` (a silver coin with a star; heads side) and `ma12-coin-tails-v1.png`. No gumball or hotel plate exists.

Reused: `ma11-gumball-machine-v1.png` (painted under s03's brief; scenes 1 to 3, 6), `ma12-die-red-v1.png`, `ma12-coin-heads-v1.png`, `ma12-coin-tails-v1.png` (scenes 4, 10).

Need (painted, new; see the Codex asset brief): `ma11-hotel-facade-v1.png` (this video's handoff and s05).

Coded: number labels on the gumballs (from the sidecar), grids, tokens, event lighting, braces, bars, the 0 to 1 line, rows, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `OutcomeGrid` (with the predicate light, kit list item 9), `VennDiagram` (s02's addition, handoff only), `WorkingBoard`, `TaskStrip`, `GivensCard`, `EquationStrip`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **`OutcomeGrid` predicate light** (kit list item 9): light the cells of an event given as a rule, in a role colour, with "|A| / |S|" written beside. Check: the lit count equals the rule's count for each event in scene 5.
2. **Turn and drop** (small): the machine's handle turns (a rotation on a sidecar pivot) and one gumball token leaves the chute point and flies to its grid cell.
3. **Window tints over a plate** (small; also s05): coded tints over the hotel windows from the sidecar's window rectangles.

## Codex asset brief (Maths A11 S04, a hotel facade for the handoff and s05)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-s04.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the s04 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-hotel-facade-v1.png` (2400 × 1800 px): a five-storey seaside hotel seen straight front-on, cream rendered walls and a flat roof, with exactly 40 identical rectangular windows in five rows of eight, evenly spaced, each with a small balcony rail; a strip of sand and low dune grass along the bottom. Windows plain glass, curtains open, nothing visible inside. No name sign.

Sidecar JSON (`ma11-hotel-facade-v1.json`): the pixel rectangle of each of the 40 windows, by floor (1 = ground) and position (1 = left). Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-s04-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quotes match the route-inputs JSON exactly.
3. Confirm "equally likely" is stated before every |A|/|S| and that 1/|S| per outcome is stated before P(A).
4. Confirm no lottery, betting or money appears (root ruling 8), and that the die and coin carry nothing at stake.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, that scene 1 opens on s03's final frame and that scene 12 is s05's opening frame.

## YouTube metadata (draft)

Title: Sample Spaces, Events and Probability | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson01.sa.html

A gumball machine holds 12 red, 8 blue and 5 yellow gumballs. Is the chance of blue one in three? Learn what an experiment or trial is, list a sample space S, treat an event as a subset of S, and use P(A) = |A|/|S| when the outcomes are equally likely. Then read A ∩ B, A ∪ B and A̅ as "both", "either" and "not" by counting a die and a coin. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Probability and data.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define an experiment or a trial to be any procedure that can be infinitely repeated and has a well-defined set of possible outcomes known as the sample space, denoted S"
"Identify an event A as a subset A of the sample space S"
"Define the probability of each outcome to be 1/(|S|) when all the outcomes are equally likely and the probability of the event A to be P(A) = (|A|)/(|S|)"
"Interpret the notation A̅ to be the event ‘ A does not occur’, interpret A ∩ B to be the event ‘ A and B both occur’, and interpret A ∪ B to be the event ‘ A or B occurs’"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

Builds on: The counting rule for a union. Next: The complement and addition rules.

#Year11Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. "Repeated without end" (learning review).** The syllabus says "infinitely repeated"; the narration says "repeated again and again, without end" and adds the refill assumption so the machine fits. Check that this is clear and not pedantic.
- **2. The die and coin beside Year 12 s01 (root).** Year 12 s01 anchors on a board-game die. Here the reused red die is one stage of a listed sample space, not the anchor; root may judge this a near context.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from s01, s02 and Years 7 to 10 probability; check that the gumball trap makes "equally likely" a reason, that "one trial, one outcome" is seen as well as said, and that "or" includes both in scene 5), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
