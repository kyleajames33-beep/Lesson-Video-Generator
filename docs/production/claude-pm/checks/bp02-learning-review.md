# BP02 learning review: model meiosis, fertilisation and mutation (bio-m5-p02)

Scope: independent AI source review of `../lessons/bio-m5-p02.md` (Revision 1, 18 Oct): script, visual notes, decisions, attempt, feedback, key notes, length and Codex brief. Read as a student starting Year 12 who has watched B5a, B5b and B8 (not yet B9), using `docs/production/student-learning-review.md`, `AGENTS.md`, the route entry bio-m5-p02, `../site-extracts/bio-m5-l08.md` and `l13.md`, and the neighbours `bio-m5-b05a.md`, `b05b.md`, `b08.md`, `b09.md`. No stills, plates, voiced preview or audio inspected; motion not judged. Not learner evidence. Human listening pending. U+2014 searched in the design and in this file: none.

Main question traced: *how do you model meiosis, fertilisation and mutation to predict the genotypes offspring can have, and how far can you trust the predictions?* Useful outcome: the student can run the bead model step by step, list the gamete types it predicts, fertilise by random draw, add a mutation, compare observed with expected for one gene, and judge a conclusion drawn from too few trials.

## What works (keep)

- B5b's plum and teal colours, white allele stickers and amber-only-for-new-allele rule are reused, so the model looks like the meiosis the student already saw. Letters are on screen only, never spoken (B9 rule).
- Causes are attached to every method step: matching positions (same genes, same places), copy then count centromeres, break at matching points (nothing lost or doubled, with the unmatched inset), a coin per pair (random and independent), random draw (any gamete can meet any gamete), mutation (neither parent had it).
- The order of the model is right: crossing over (step 3) before line-up and the coin (step 4), then two divisions.
- Scene 7 blocks "one meiosis shows every gamete type" by rerunning with new coin results.
- The attempt is a genuine evaluation of a changed case, and the crossed mistake ("the model is wrong") targets the real misconception (sample size against model).
- Feedback is brief (349 characters, about 26 s) with answer, key reason and one crossed mistake. No human figures or hands.
- Nothing from B5a, B5b or B8 is re-taught at length; Punnett squares are left to B9.

## Can a student run the practical from the video?

- **Materials:** yes (beads in two colours, centromere pieces, stickers, coin, string loops, cards, sheet); a die is needed after finding 2.
- **Steps with reasons:** yes, seven steps, one per scene. Two gaps: the meiosis stage each step models is never named (finding 4), and the procedure does crossing over in every run, which contradicts the result the video claims (finding 2).
- **What to record:** the new combinations (scene 5), each gamete on a card (7), each zygote genotype (8), the tally (10). Clear.

## Material findings

| # | Severity | Scene | Exact quoted text | Problem (likely student question) | Exact replacement (about the same length) |
| --- | --- | --- | --- | --- | --- |
| 1 | **blocker** | 10 | "Each parent has one round and one wrinkled allele, and gives either one half the time. So the model **expects** a quarter with two round alleles, half with one of each, and a quarter with two wrinkled alleles: four, eight and four." | Before B9, the jump from "half the time" to "a quarter, a half, a quarter" is asserted, not reasoned. The common student answer is "three outcomes, so a third each", and "half with one of each" needs the two ways it can happen. The attempt and its feedback depend on the quarter. | "Each parent gives round or wrinkled equally often, so four pairings are equally likely: round with round, round with wrinkled, wrinkled with round, wrinkled with wrinkled. Two of the four give one of each. So the model **expects** four, eight and four." (252 against 231 characters.) Visual: the four pairings write as four chips (parent 1 allele + parent 2 allele, letters on screen), the two mixed chips bracketed "1 of each"; then "1 : 2 : 1 of 16 = 4, 8, 4". No grid, so B9's Punnett square is still new; keep the grey tag "Punnett squares: next video". This is B8's pairing idea (gamete by gamete), not new theory. |
| 2 | **blocker** | 5, 7 (and kit, scene 2) | Scene 7: "Crossing over adds the **mixed types**. They're less common, because a crossover between those two genes happens in only some cells." | The procedure tells the student to cross over in every run. A crossover between the genes in every meiosis makes the mixed gametes half of all gametes, as common as each unmixed type, so the student's own data will contradict the narration and they will think they did it wrong. | Scene 5 opening: "Step three: crossing over. Lay each long chromosome beside its partner." becomes "Step three, in prophase one: crossing over. Pair each long chromosome with its partner, and roll a die: cross over only on a six." Scene 7: "They're less common because, like your die, a crossover between those two genes happens in only some cells." Scene 2 kit: "a coin, a few loops of string for cells, some blank cards" becomes "a coin, a die, string loops for cells, blank cards". Visual: a coded die rolls before the swap (a six in the shown run; a rerun in scene 7 shows a non-six and no swap). Author note: with a swap on one run in six, mixed gametes are about 1 in 12 of all gametes. |
| 3 | should fix | 14 | Attempt card: parent chips "R r" and "R r"; results "RR, Rr, Rr, Rr"; conclusion "rr offspring can't occur from these parents" | The colour key and letter key leave the board for the attempt, and the narration says "round" and "wrinkled", never the letters. A student must remember that r is wrinkled to read the card. That is a necessary condition missing from the response opportunity. | Add a key line to the card: "R = round allele, r = wrinkled allele" (screen only; letters still not spoken). |
| 4 | should fix | 5, 6 | "Step four: line the pairs up across the middle of the cell." | Exam questions ask "describe how your model represents meiosis". The model never says which stage each step is; the site (L08) and B5b place crossing over in prophase I and assortment at metaphase I. | Scene 6: "Step four, metaphase one: line the pairs up across the middle." Scene 5 is covered by finding 2's text ("in prophase one"). Step rail labels: "3. Cross over (prophase I)", "4. Line up (metaphase I), divide twice (meiosis I, II)". |
| 5 | should fix | 15 | "With only four trials, getting none is quite likely by chance, about one time in three." | The screen shows (3/4)^4 but the spoken reason skips the step: why three quarters, and why multiply? | "Each offspring has a three in four chance of missing out, so all four miss out about one time in three." The working line keeps "(3/4)^4, about 0.32". Feedback stays about 27 s. |
| 6 | should fix | 13 | "To keep the investigation **valid**, follow the real rules every time: break at matching points, flip the coin fresh for every pair, and draw truly at random. To make it **reliable**, repeat many times and pool the class results, because a few trials can land far from the prediction just by chance." | Neither term gets a plain meaning, and validity has no cause: why does following the rules make it valid? | "To keep it **valid**, so it really tests what meiosis does, follow the real rules: break at matching points, flip fresh for every pair, draw at random. To make it **reliable**, so repeats agree, repeat many times and pool the class results, because a few trials can land far off just by chance." (294 against 299.) |
| 7 | should fix | 12 | "Two pairs give only four whole-chromosome combinations, but humans have twenty-three pairs, which give **over eight million**." | A limit with no consequence; the design's own Decisions say the scene should note that the model hugely understates assortment. | "Two pairs give only four whole-chromosome combinations, so the model hides most variety: humans' twenty-three pairs give **over eight million**." |
| 8 | minor | 9 | "Crossing over and fertilisation only reshuffle alleles." | Independent assortment, the coin step, is left out of the reshuffling list; B8 sorts three reshufflers against mutation. | "Crossing over, assortment and fertilisation only reshuffle alleles." |
| 9 | minor | 8 | "A partner group builds a second parent the same way and records its gamete cards." | The deck must hold the gamete cards from every run, or the draw does not reflect the gametes the model makes. | "A partner group builds a second parent the same way and keeps every gamete card." |

## Is the 1:2:1 reasoning followable before B9?

Not as written (finding 1). With the four equally likely pairings listed and the two mixed ones counted, a student who has done B8's pairing counts and Year 10 two-step chance can follow it without a Punnett square. The feedback's quarter then rests on something the student saw, and finding 5 gives the (3/4)^4 step in words.

## Meiosis steps shown (learning view)

Copy (interphase, before meiosis), pair and cross over at matching points (prophase I), line up with a coin per pair (metaphase I), partners separate (anaphase I), sister chromatids separate (meiosis II), four haploid gametes. The order is correct; only the stage names are missing (finding 4). Independent assortment appears as the coin in step 4; crossing over in step 3.

## Response opportunity check

During "Pause here to answer." and the 10 s countdown: parent chips, four offspring results, the conclusion quote, "4 fertilisations", the demand. After finding 3 the allele key is also there. Nothing answer-bearing (no expected values or fractions). Pass after finding 3.

## Re-teaching check

Meiosis stages (B5b), counting by centromeres (B5a) and the four sources with gamete types (B8) are recalled in clauses with grey tags. The finding 1 repair uses B8's pairing count, not B9's grid. Nothing from B6a to B6c, B7, B9 or B11 is re-taught. Pass.

## Length

Findings 1, 2, 4, 5, 7 and 8 add about 130 characters; the design is at 6,055, so about 6,190 (about 9.5 minutes with holds), inside the target. The design's reserve cut (last sentence of scene 12) remains available.

## Verdict

**needs another revision** (two blockers change the procedure and the core analysis; the root should recheck the revised scenes 5, 7 and 10 and the recount before recording).

## Resolution (18 Oct, Claude)

Every blocker and should-fix finding above was applied in Revision 2 of `lessons/bio-m5-p02.md` (see its "Revision 2 changes" line), with the replacement wording proposed here or an equivalent of the same length. Minor findings were applied where they helped; any not applied are recorded in the design. Exact voiced preview, voiced learning review and human listening are still pending.
