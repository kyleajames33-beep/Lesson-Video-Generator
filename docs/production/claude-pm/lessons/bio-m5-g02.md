# G02: Inheritance probability: unfamiliar crosses and pedigrees: HSC-style practice (design)

Status: Revision 2 (18 Oct): learning review and Claude science check resolved; ready to voice (pending owner go-ahead). Reviews: `../checks/g02b-learning-review.md`, `../checks/g02b-claude-science-check.md`.

Revision 2 changes (18 Oct): (1) the multiply aid is now "Separate offspring, known parents: multiply." everywhere (2c chip, decision board, key notes, memory aid check), so it no longer suggests 1/36 for two PKU children (true answer 1/24) (both reviews, should fix 1); (2) scene 4d gives the reason: the affected child needed a recessive allele from her (learning should fix 2); (3) scene 5b derives the rule: an affected X-linked recessive mother has the allele on both X chromosomes, so every son gets it (learning should fix 3, science should fix 2); (4) "married in" becomes "unaffected partners" in 5c and 5d, and the Q4 given reads "anyone with the genotype for the trait shows it"; (5) minors: Q1 uses an in-between (incomplete dominance) phenotype map, not B10's shared `CO` map; the tortoiseshell screen line reads "both alleles show, in different patches"; (6) multiple alleles: no ABO item added (see Open decisions). Revision 1 (18 Oct) was the first design. Nothing recorded.

Working title: "Inheritance probability: HSC-style practice". Video type 3 in the teaching playbook (practice walkthrough), authored questions only. Every question is written for HSCScience and is never presented, said or implied to be an official NESA question; every question card carries the tag "HSC-style question, written for HSCScience". This is a hard-practice video: the worked walkthroughs are the content, so they may run longer than the brief end-of-video feedback rule (AGENTS.md exception). Each question ends "Pause here to answer." with a 10 s countdown, keeps the full question and data on screen during the attempt, reasons one stage per scene, and ends with one crossed-out classic mistake. Learner copy never mentions marks. **Route id:** `bio-m5-g02` (playlist order 19, type companion). Production label G02.

## Decisions

- **Route entry (`module5-video-route-2026-10-10.json`, bio-m5-g02).** Title "Inheritance probability: unfamiliar crosses and pedigrees"; prerequisite bio-m5-b10; entry knowledge "Inheritance models, meiosis and per-child probability"; start "An unfamiliar cross or pedigree requires choosing/testing assumptions"; stop "Infer a possible genotype/probability, identify alternatives or insufficient evidence and justify the conclusion after a protected attempt"; next bio-m5-b11. Syllabus actions B-autosomal, B-sex-linkage, B-codominance, B-incomplete-dominance, B-multiple-alleles, B-Punnett, B-pedigrees.
- **Syllabus (2017, BIO12-12, `programme/syllabus/bio-2017-y12.json`, B5-IQ4-02, p 49):** "model the formation of new combinations of genotypes produced during meiosis, including but not limited to:" with "interpreting examples of autosomal, sex-linkage, co-dominance, incomplete dominance and multiple alleles (ACSBL085)" and "constructing and interpreting information and data from pedigrees and Punnett squares". Practice and transfer: ledger rows p1058 and p1059 stay with B9 and B10; G02 adds the practice row and the two items B9 deferred here (the 2/3 conditional probability and choosing between competing modes).
- **One main question:** *When a cross or a family tree is new to you, how do you choose the model, find the probability, and say what the evidence can and cannot prove?* Heading on screen: "Choose the model, then the chance".
- **Why a practice video, and why these four questions.** B9 and B10 each teach the patterns with one worked case and two attempts. HSC questions in this area are lost on three moves: choosing the wrong model (treating a sex-linked gene as autosomal, or a heterozygote as true-breeding), combining chances wrongly (adding instead of multiplying, keeping an impossible box), and over-claiming from a pedigree. Each question below hides one or two of these in a new organism or family.

  | Q | Context (new) | Model | Trap | Core it practises |
  |---|---|---|---|---|
  | 1 | Andalusian chickens: black, blue, splashed white | incomplete dominance | a heterozygote cannot breed true; two separate offspring of known parents multiply | B10 (snapdragons), B9 (chance per offspring) |
  | 2 | tortoiseshell cats | X-linked, both alleles shown | treating the gene as autosomal; "of all kittens" against "of sons" | B10 (X linkage, co-dominance) |
  | 3 | phenylketonuria (PKU) family | autosomal recessive | the unaffected sister's carrier chance is 2/3, not 1/2; new evidence updates it | B9 (pedigrees, carriers) |
  | 4 | a rare condition, three generations | competing modes | rule out with named people; no giveaway means both fit; "more likely" is not "proven" | B9, B10 (pedigree rules) |

- **Rising difficulty.** Q1 choose a model and multiply (warm-up). Q2 combine sex linkage with both alleles showing, and keep the denominators straight. Q3 conditional probability across two families, then update on new evidence. Q4 test three models, rule one out, and judge between two that both fit.
- **Site alignment (`site-extracts/bio-m5-l14.md`, `l14b.md`, `l15.md`).** Kept from L14: a Punnett square gives the chance per child (Q1, Q3); "do not say 25% of the children"; autosomal recessive clues and carriers; an affected female with an unaffected father rules out X-linked recessive (Q4); the Haemophilia Interpret model's "an unaffected sibling of an affected child has a two in three chance of being a carrier" (Q3, in a PKU family); short answer 3's "of all children" against "of sons" (Q2). Kept from L15: "an intermediate phenotype means the alleles have blended" is false; crossing two heterozygotes restores the parental types 1:2:1 (Q1); "do not assume every monohybrid cross gives 3:1" (Q1). L14b (dihybrid, 9:3:3:1) is not used: no route video owns dihybrid crosses (B9 flagged this to the board).
- **Site wording doubt applied.** The L14 Interpret model says an affected daughter of an unaffected father "rules out X linkage". It rules out X-linked recessive only (an X-linked dominant trait could still give that, via an affected mother). Q4's stem therefore limits the choice to the three patterns taught in B9 and B10, and the feedback says "not X-linked recessive". Logged in the reply to root.
- **Entry knowledge (do not re-teach; recall in one clause each).** From B9: dominant, recessive, homozygous, heterozygous, carrier; each gamete gets one allele; the 2 x 2 square; a ratio is a chance per offspring; pedigree symbols and numbering; "Hidden in the parents: recessive. Hidden in the child: dominant." with its assumptions. From B10: X and Y; a male's single X; "Dad gives his X to daughters and his Y to sons"; "of all children" against "of sons"; X-linked recessive pedigree pattern and the rule-out; "Incomplete is in-between. Co shows both." Year 10: multiply for "and" (introduced in one sentence in Q1 as each birth being a separate chance). Not assumed: conditional probability (Q3 explains it as crossing out the box the person cannot be), X-linked dominant (not used).
- **Start and stop.** Starts at "an unfamiliar cross or pedigree"; stops after four answers with assumptions stated and a decision board of first moves. No new pattern. Not covered: X-linked dominant and Y-linked inheritance, dihybrid crosses, binomial "exactly k of n" working, lethal alleles, penetrance, population frequencies (B11).
- **Placement and handoff.** After B10 (playlist 19), before B11. Scene 6 hands off to B11 ("how common an allele is across a whole population").
- **Letters policy (as B9 and B10).** Allele letters are never spoken; alleles are named by meaning ("the black allele", "an orange X"). Letters and superscripts appear on screen only. "P K U" is spoken as letters after the full name once.
- **Visual system.** One practice board throughout, in the G03c layout: top-left the short task line; under it the stimulus (painted organism plates or a pedigree); under that the grouped givens card; the working fills the right two thirds; a type badge top-right ("Incomplete dominance", "X-linked", "Pedigree: probability", "Pedigree: which pattern?"). A **first-moves strip** on the far left carries three rows: "1 choose the model", "2 write the genotypes you are sure of", "3 combine the chances" and ticks the row each scene uses; it dims to an outline during every countdown. Earlier questions are cleared before the next card writes on. Pedigrees use B9's data-driven `Pedigree` (standard symbols only, Roman numerals, individual numbers); no people, faces or bodies.
- **Mistake scenes.** No mistake/fix template scene. Each question ends with its own crossed-out classic mistake.
- **Memory aids (bank, checked below).** Recalled: "Incomplete is in-between. Co shows both." (Q1, Q2), "Dad gives his X to daughters and his Y to sons." (Q2), the pedigree rules, "Hidden in the parents: recessive. Hidden in the child: dominant." (Q4). New (not in the bank; flagged): "Cross out the box they can't be." for conditional probability (Q3) and "Separate offspring, known parents: multiply." (Q1; condition named in Revision 2).
- **Legacy and shared code.** B9's ported `cross`, `Punnett`, `fracStr`, `Pedigree`, `fitsMode` (`src/explainer/lessons/bio-m5-b09/genetics.tsx`) and B10's X-linked helpers (`src/explainer/lessons/bio-m5-b10/shared.tsx`: `XO`, `xlinked`; these are not exported today, so root either exports them or copies them lesson-locally). Q1 uses its own in-between map (Revision 2), not `CO`. Every box, ratio and probability on screen is computed, never typed. `fitsMode` covers AD, AR and XR; root may add an `XD` mode for the author check only (see Numbers), not for learner copy.
- **Reuse.** Explainer kit (`Plate`, `Callout`, `Mark`, `Countdown`, `HandText`, `DrawPath`, `scribbleEllipse`, `Enter`); B9 `AlleleChip`, `GameteDisc`, `Punnett`, `Pedigree`, `Trio`; B6a `WrongChip`, `GreyTag`, `Cross`. New coded items: first-moves strip, a two-birth probability tree (Q1), a "cross out the box" overlay on the Punnett grid (Q3), a mode-test table with three rows and tick or cross (Q4), the decision board.

Main question: *When a cross or a family tree is new to you, how do you choose the model, find the probability, and say what the evidence can and cannot prove?*
Entry knowledge: see above. Students start Year 12 and have watched B8, B9 and B10.
Stops after: choosing incomplete dominance from a third phenotype and predicting a 1:2:1 cross and a two-birth probability; explaining why tortoiseshell cats are almost always female and finding sex-specific and overall probabilities in an X-linked cross; finding a 2/3 carrier chance and a 1/6 child probability across two families, then updating to 1/4 on new evidence; ruling out X-linked recessive with named individuals, explaining why autosomal dominant and recessive both fit, and judging which is more likely for a rare condition.
Handoff: population frequencies and SNP evidence (route entry bio-m5-b11).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Board layout as Decisions. Each question card carries "HSC-style question, written for HSCScience". Chip colours follow B9 (top parent's gametes plum-edged, side parent's teal-edged); amber for emphasis rings only.

### 1. hook
> Inheritance questions in the HSC rarely use peas. They give you an animal you haven't met, or a family where the pattern isn't obvious, and ask for a probability, or for what the evidence can and can't tell you. Every one starts the same way: **choose the model**, write the genotypes you're **sure of**, then **combine the chances**. Here are four HSC-style questions. Pause and try each one, then we'll work it through one step at a time, and look at the classic mistake.

Visual: heading "Choose the model, then the chance" writes on. Four thumbnails fan out on the right: the blue chicken plate (on "an animal you haven't met"), the tortoiseshell cat plate, a small pedigree with a "?" (on "a family"), a pedigree with a question mark over its legend (on "can't tell you"). On the three moves, the first-moves strip builds on the left, one row per cue: "1 choose the model", "2 genotypes you're sure of", "3 combine the chances". On "four HSC-style questions" the thumbnails become four question cards with the tag "HSC-style question, written for HSCScience". Hold about 1 second; the strip shrinks to the far left.

### 2a. q1-question (question 1: Andalusian chickens)
> Question one. In Andalusian chickens, a black bird crossed with a splashed white bird gives chicks that are **all blue**. A farmer crosses two blue chickens. Explain why some of their chicks are black and some are white, and give the **ratio**. Then find the probability that their **first two chicks** are both blue. Finally, which cross would give **only blue** chicks? Pause here to answer.

Visual: fresh board. Type badge hidden during the attempt (it names the model) and shown from 2b. Stimulus: the painted plates `m5x-chicken-black-v1.png` and `m5x-chicken-splash-v1.png` joined by "x", an arrow down to three small `m5x-chicken-blue-v1.png` copies tagged "all blue" on "all blue". Below, "blue x blue" with a "?" row. Givens card: "black x splashed white gives all blue", "farmer: blue x blue". Demands: "(a) Why are some chicks black and some white? Give the ratio." "(b) Probability that the first two chicks are both blue?" "(c) Which cross gives only blue chicks?" Three answer boxes and an empty 2 x 2 grid outline (no letters). Nothing answer-bearing. Countdown 10 seconds; strip dims.

### 2b. q1-model (choose the model, fill the square)
> First, **choose the model**. Black crossed with white gives a third colour, in between, so this is **incomplete dominance**. A blue bird is heterozygous, with one black allele and one white allele. Two blue parents each pass on one or the other, so the square gives **1 black, 2 blue, 1 white**.

Visual: type badge "Incomplete dominance" writes on. On "a third colour, in between" the three plates line up black, blue, splashed white with the bank line "Incomplete is in-between" (grey tag "B10"). Allele chips "C^B" and "C^W" (on screen only) pin under the plates: "C^B C^B", "C^B C^W", "C^W C^W". On "Two blue parents" `GameteDisc`s "C^B" and "C^W" slide along the top and down the side; the `Punnett` fills box by box (computed by `cross` with a a lesson-local in-between (incomplete dominance) phenotype map, `inBetween('black', 'blue', 'splashed white')`, written like B10's `CO` but named so no code path or label can show "co-dominance" on this question), each box gaining a tiny chicken plate. On "1 black, 2 blue, 1 white" the ratio strip writes "1 black : 2 blue : 1 splashed white" (computed). Answer line (a): "blue = heterozygous; alleles separate: 1 : 2 : 1". Strip: "1 choose the model" ticks.

### 2c. q1-chance (two chicks, then only blue)
> Each chick has a **one in two** chance of being blue, and each chick is a **separate chance**. So for the first chick and the second, multiply: one half times one half is **one in four**. And for only blue chicks, cross **black with white**: every chick gets one of each allele.

Visual: the two blue boxes ring amber with "2/4 = 1/2" (computed). On "separate chance" a coded two-step probability tree draws: first chick "blue 1/2" or "not blue 1/2", then from "blue" a second branch "blue 1/2"; on "one in four" the path blue-blue lights with "1/2 x 1/2 = 1/4" and answer line (b) writes on. The chip "Separate offspring, known parents: multiply." writes small beside it. On "black with white" a second mini grid "C^B C^B x C^W C^W" fills four "C^B C^W" boxes (computed) with four blue chick plates; answer line (c): "black x splashed white: all blue". Strip: "3 combine the chances" ticks.

### 2d. q1-mistake (the classic mistake)
> The classic mistake is crossing **blue with blue** to get blue chicks. Blue birds are heterozygous, so they can't breed true. The alleles separate again.

Visual: the chip "blue x blue gives only blue" writes on; on "blue with blue" it takes a red scribble cross with the caption "heterozygotes don't breed true". A second crossed chip, unspoken: "1/2 + 1/2 = 1 (added instead of multiplied)". Hold about 1.5 seconds.

### 3a. q2-question (question 2: tortoiseshell cats)
> Question two. In cats, a gene for coat colour is on the **X chromosome**. One allele gives orange fur, and the other gives black. A cat with one of each shows **both colours**, in patches: this is called tortoiseshell. Explain why tortoiseshell cats are almost always **female**. A tortoiseshell female then mates with an orange male. What's the probability that a kitten is a **tortoiseshell female**? And what fraction of their **sons** are black? Pause here to answer.

Visual: board clears. Type badge hidden during the attempt. Stimulus: the painted plates `m5x-cat-tortoiseshell-v1.png` (tagged "tortoiseshell") and `m5x-cat-orange-v1.png` (tagged "orange"), joined by "x" with the pedigree symbols "female" (circle) and "male" (square) under them; `m5x-cat-black-v1.png` small in a key strip: "on the X: orange allele, black allele; one of each: tortoiseshell". Demands: "(a) Why are tortoiseshell cats almost always female?" "(b) Probability that a kitten is a tortoiseshell female?" "(c) What fraction of their sons are black?" Three answer boxes, an empty 2 x 2 grid outline. Nothing answer-bearing: no X or Y chips. Countdown 10 seconds; strip dims.

### 3b. q2-why-female (choose the model)
> The gene is on the X, and a tortoiseshell cat needs **both** alleles, so it needs **two X chromosomes**. A male has one X and a Y, so his single X carries only **one colour**. That's why tortoiseshell cats are almost always female.

Visual: type badge "X-linked". The tortoiseshell plate gets two chips "X^O" and "X^o" (on screen only) with a bracket "both alleles: two X"; the bank line "Co shows both" appears small (grey tag "B10") with the screen wording "both alleles show, in different patches" directly under it. On "one X and a Y" the orange male plate gets "X^O Y"; a ghost male "X^O X^o?" fades and is struck with the grey tag "males: one X". Answer line (a): "needs two different X alleles; males have one X". Grey author tag, small: "rare XXY males can be tortoiseshell" (screen only, explains "almost").

### 3c. q2-square (fill it, then read it two ways)
> Now the cross. The mother gives an orange X or a black X. The father gives his orange X to every **daughter**, and his Y to every **son**. So daughters are orange or tortoiseshell, and sons are orange or black. Tortoiseshell females are one box of four: **one in four** of all kittens. Of the sons, **one in two** is black.

Visual: `Punnett` with the mother's gametes "X^O", "X^o" down the side (teal-edged) and the father's "X^O", "Y" across the top (plum-edged). On "every daughter" the X^O column fills two daughter boxes "X^O X^O" (orange), "X^O X^o" (tortoiseshell); on "every son" the Y column fills "X^O Y" (orange), "X^o Y" (black) (computed with B10's `xlinked` split). The bank line "Dad gives his X to daughters and his Y to sons" writes small (grey tag "B10"). On "one in four" all four boxes outline with the tortoiseshell box ringed: (b) "1/4 of all kittens". On "one in two" only the son column outlines with the black box ringed: (c) "1/2 of sons". Strip: "2 genotypes" and "3 combine" tick.

### 3d. q2-mistake (the classic mistake)
> The classic mistake is treating the gene as if it were on an **autosome**. That gives tortoiseshell kittens of both sexes, half of all kittens. But sons only get their **mother's X**.

Visual: a ghost grid "O o x O O" fills (computed, autosomal) with two "tortoiseshell" boxes, one labelled with a square symbol; on "autosome" it takes a red scribble cross with the caption "the gene is on the X". On "mother's X" an arrow runs from the mother's chips to the son column. Hold about 1.5 seconds.

### 4a. q3-question (question 3: a PKU family)
> Question three. Phenylketonuria, or **P K U**, is an autosomal recessive condition. In this family, a woman doesn't have P K U, but her **brother** does, and their parents don't. Her partner doesn't have P K U, but his **mother** does. What is the probability that their **first child** has P K U? And if their first child does have it, what is the probability for the **second child**? Pause here to answer.

Visual: board clears. Type badge "Pedigree: probability". Stimulus: B9 `Pedigree` (data P-Q3 in Numbers): generation I, two couples, I-1 and I-2 (both open), I-3 (filled circle) and I-4 (open square); generation II, II-1 (filled square, "brother"), II-2 (open circle, "woman"), II-3 (open square, "partner"), with a couple line from II-2 to II-3 and a "?" child below. Legend: "filled: has PKU". Givens card: "PKU: autosomal recessive", "assume: one gene; no new mutation". Demands: "(a) Probability that their first child has PKU?" "(b) If the first child has PKU, probability for the second child?" Two answer boxes. Nothing answer-bearing: no genotype chips, no grid. Countdown 10 seconds; strip dims.

### 4b. q3-sure (the genotypes you can be sure of)
> Start with the people you can be **sure of**. The man's mother has two recessive alleles, so she gave him one. He's unaffected, so he must be a **carrier**. The woman's brother is affected, but their parents aren't, so **both parents** are carriers.

Visual: on "two recessive alleles" chip "pp" pins under I-3 and a "p" chip travels down to II-3; "Pp" pins under II-3 with the tag "carrier: certain" on "carrier". On "brother is affected" "pp" pins under II-1; on "both parents" "Pp" chips pin under I-1 and I-2 with the trio bracket "unaffected parents, affected child" (B9 giveaway, grey tag "B9"). II-2 gets a dashed "?" chip. Strip: "2 genotypes you're sure of" ticks.

### 4c. q3-two-thirds (cross out the box she can't be)
> Now the woman. Her parents' square has four boxes, but she's unaffected, so **cross out** the affected box. That leaves three equally likely boxes, and **two** of them are carriers. So she has a **two in three** chance of being a carrier. If she is, each child has a one in four chance. Two thirds times one quarter is **one in six**.

Visual: a `Punnett` "Pp x Pp" fills beside I-1 and I-2 (computed). On "cross out" the "pp" box takes a grey scribble cross with the tag "she's unaffected: not this box"; the remaining three boxes ring, two amber ("Pp"), and "2/3" writes beside them (computed: 2 of 3 remaining). The chip "Cross out the box they can't be." writes small. A two-step chain writes on: "P(she's a carrier) = 2/3", "x P(pp child from Pp x Pp) = 1/4", "= 2/12 = 1/6"; the partner's certainty sits as "x 1 (he's a carrier)". Answer line (a): "1/6". Strip: "3 combine the chances" ticks.

### 4d. q3-update (new evidence, and the classic mistake)
> Now suppose their first child has P K U. The child needed a recessive allele from her, so that **proves** she's a carrier. Now both are carriers, so the second child's chance is **one in four**. The classic mistake is giving her a **one in two** chance of being a carrier. That keeps the affected box, which she can't be.

Visual: a filled "III-1" symbol drops under the couple with the tag "first child: PKU"; on "needed a recessive allele from her" a "p" chip travels up from III-1 to II-2; on "proves" II-2's "?" chip becomes "Pp" with an amber tick; a mini grid "Pp x Pp" fills and its "pp" box rings; answer line (b): "1/4 (she is now known to be a carrier; each child is a new chance)". On "one in two" the chip "her carrier chance = 2/4 = 1/2, child = 1/8" writes on and takes a red scribble cross, with an arrow to the crossed "pp" box. A second crossed chip, unspoken: "1/4 for the first child (assumed both certain carriers)". Hold about 1.5 seconds.

### 5a. q4-question (question 4: which pattern?)
> Question four. This pedigree shows a **rare** condition. Of three patterns, autosomal dominant, autosomal recessive and X-linked recessive, which can you **rule out**? Justify with numbered individuals. Then explain why this pedigree **can't decide** between the other two, and say which is **more likely**. Pause here to answer.

Visual: board clears. Type badge "Pedigree: which pattern?". Stimulus: B9 `Pedigree` (data P-Q4 in Numbers) with Roman numerals, individual numbers and a legend (open unaffected, filled affected). Givens card: "a rare condition", "choose from: autosomal dominant, autosomal recessive, X-linked recessive", "assume: one gene; anyone with the genotype for the trait shows it; no new mutation". Demands: "(a) Which pattern can you rule out? Justify using numbered individuals." "(b) Why can't this pedigree decide between the other two?" "(c) Which is more likely? Why?" Three answer boxes and an empty mode-test table (three rows, no ticks). Nothing answer-bearing. Countdown 10 seconds; strip dims.

### 5b. q4-rule-out (test X-linked recessive)
> Test **X-linked recessive** first. Individual 2 in generation one is an affected mother. Under that pattern, both her X chromosomes carry the allele, so **every son** gets it. But her son, individual 2 in generation two, is **unaffected**. And her daughter is affected, with an unaffected father. So it's **not** X-linked recessive.

Visual: mode-test table row "X-linked recessive" lights. On "affected mother" I-2 rings amber; chips "X^a X^a" pin under her (dashed, "if X-linked recessive"); on "every son" an arrow runs from I-2 to II-2 carrying "X^a"; on "unaffected" II-2 rings and a red clash mark lands on the arrow. On "her daughter is affected" II-1 and I-1 ring with the bank rule tag "affected daughter, unaffected father: not X-linked recessive" (grey tag "B10"). On "not" the row takes a cross; answer line (a): "not X-linked recessive: I-2 affected but her son II-2 unaffected (and II-1 affected with unaffected father I-1)". Strip: "1 choose the model" ticks.

### 5c. q4-both-fit (no giveaway, so both fit)
> Now look for the **giveaways**. There are no unaffected parents with an affected child, and no affected parents with an unaffected child. Without one, **both patterns fit**. Dominant fits if each affected person has one copy of the allele. Recessive fits too, but only if the two unaffected partners, individual 1 in generation one and individual 4 in generation two, are **both carriers**.

Visual: B9's two `Trio` icons ("Hidden in the parents: recessive", "Hidden in the child: dominant") slide over the pedigree and scan each couple; none matches, and each gets a grey "no match" tag. On "both patterns fit" the table rows "autosomal dominant" and "autosomal recessive" tick. Dominant: chips "Aa" under I-2, II-1, III-1 and "aa" under the rest (computed by `onlyGeno` or a fit from `fitsMode`). Recessive: the chips swap to the recessive set, and on "both carriers" I-1 and II-4 ring amber with "Aa" chips and the tag "both must be carriers". Answer line (b): "no giveaway pattern: both fit (recessive needs I-1 and II-4 to be carriers)".

### 5d. q4-more-likely (judge, and the classic mistake)
> For a **rare** condition, two unrelated partners both being carriers is unlikely, so dominant is **more likely**. But it isn't **proven**. The classic mistake is saying it must be dominant because it's in every generation. That's a clue, not proof: recessive fits too.

Visual: on "rare" the two ringed partner symbols (I-1 and II-4) pulse with the tag "two unrelated carriers: unlikely if rare"; on "more likely" answer line (c) writes on: "autosomal dominant is more likely (recessive needs two unrelated carriers), but not proven". A small grey tag, unspoken: "decisive future evidence: II-3 and an unaffected partner having an affected child would mean recessive". On "every generation" the chip "dominant: it's in every generation" writes on and takes a red scribble cross with the caption "a clue, not proof". Hold about 1.5 seconds.

### 6. decision-board
> So here's how to start. **Choose the model**: does the heterozygote look in between, or show both, and do sons and daughters differ? Write every genotype you can be **sure of**. For someone who's unaffected, **cross out** the affected box before you share the chance. For **separate offspring** of known parents, multiply. And if there's **no giveaway**, say what fits, and what's more likely. **Next**: how common an allele is across a whole population.

Visual: the first-moves strip returns full size as a two-column board, "What you see" and "What you do first", each row lighting on its cue word with the question badge: "a third phenotype, or both shown → incomplete or co-dominance (Q1, Q2)"; "sons and daughters differ → a gene on the X (Q2)"; "certain genotypes first → affected people, parents of affected children (Q3)"; "an unaffected relative → cross out the box they can't be (Q3)"; "two offspring, parents known → multiply (Q1)"; "no giveaway → name what fits; 'more likely' is not 'proven' (Q4)". On "Next" a chip "Next: frequencies in a population" with a small herd-of-dots icon. Hold about 2 seconds.

### 7. key-notes (reuse take: key-notes; quiet, about 60 seconds)
> Here are the key notes. Pause the video if you need more time to copy them.

- First moves: choose the model, write the genotypes you are sure of, then combine the chances.
- A third, in-between phenotype: incomplete dominance. Heterozygotes do not breed true: two heterozygotes give 1 : 2 : 1.
- X-linked: sons get their X from their mother. Give answers "of all offspring" or "of sons" as asked.
- An unaffected child of two carriers has a 2/3 chance of being a carrier (cross out the affected box). Separate offspring, known parents: multiply the chances. New evidence (an affected child) can change the chance.
- Pedigrees: rule out a pattern with named individuals. With no giveaway, more than one pattern can fit; say which is more likely and why.

Memory aid (large): *Cross out the box they can't be.* Condition tag: "when you know a person's phenotype but not their genotype".

## Teaching checks

- **Does it explain causes?** Why some chicks are black and white (the heterozygous parents each pass one allele; the alleles separate, they did not blend) (2b); why multiply (each chick is a separate fertilisation) (2c); why tortoiseshell needs two X chromosomes (both alleles must be present) (3b); why sons cannot get the father's X (he gives sons his Y) (3c); why the man is a certain carrier (his mother could only give a recessive allele) (4b); why 2/3 (the woman cannot be the affected box, leaving three equally likely boxes) (4c); why the second child's chance changes (an affected child proves she is a carrier) (4d); why X-linked recessive fails (an affected mother would have only affected sons) (5b); why both autosomal patterns fit (no giveaway trio) (5c); why dominant is more likely (recessive needs two unrelated carriers for a rare allele) (5d).
- **Worked-example rule.** One reasoning stage per scene; task line, stimulus and givens stay through each question; earlier questions are cleared; result lines land on their spoken cues. Q3 keeps the certain genotypes as the established result while 4c works on the woman.
- **Response opportunities.** Four, each 10 s with the countdown and every demand and condition visible (2a, 3a, 4a, 5a). The type badge is hidden during each hold in Q1 and Q2 because it names the model.
- **Reading load.** Givens cards of 2 to 3 lines; demands of 2 or 3 short lines; pedigrees of 7 and 8 individuals.
- **Term load.** No new terms. "Phenylketonuria" is named and then shortened; "tortoiseshell" is defined in the stem.
- **Out of scope by design.** X-linked dominant, Y linkage, dihybrid crosses, binomial "exactly k of n", lethal alleles, penetrance, population frequencies.

## Practice questions and model answers

1. (Q1) Andalusian chickens: black x splashed white gives all blue. Blue x blue. (a) Why black and white chicks? Ratio? (b) P(first two chicks both blue)? (c) Which cross gives only blue?
   Model: (a) Incomplete dominance; blue is heterozygous (C^B C^W); each parent passes one allele, so 1 black : 2 blue : 1 splashed white. (b) 1/2 x 1/2 = 1/4. (c) Black x splashed white (C^B C^B x C^W C^W): all C^B C^W, all blue. Classic mistake crossed: "blue x blue gives only blue". Unspoken: 1/2 + 1/2.
2. (Q2) Cat coat gene on the X; orange and black alleles; one of each: tortoiseshell. (a) Why almost always female? (b) Tortoiseshell female x orange male: P(tortoiseshell female)? (c) Fraction of sons black?
   Model: (a) Needs two X chromosomes carrying different alleles; males have one X. (b) X^O X^o x X^O Y: daughters X^O X^O (orange) or X^O X^o (tortoiseshell), sons X^O Y (orange) or X^o Y (black): 1/4 of all kittens. (c) 1/2 of sons. Classic mistake crossed: treating the gene as autosomal (tortoiseshell kittens of both sexes, 1/2 of all kittens).
3. (Q3) PKU (autosomal recessive). Woman unaffected, brother affected, parents unaffected. Partner unaffected, his mother affected. (a) P(first child affected)? (b) If the first child is affected, P(second child affected)?
   Model: (a) Partner Pp (certain). Woman's parents Pp x Pp; she is unaffected: P(Pp) = 2/3. P(child pp) = 2/3 x 1 x 1/4 = 1/6. (b) An affected child proves she is Pp: 1/4. Classic mistake crossed: carrier chance 1/2 (gives 1/8). Unspoken: 1/4 for (a).
4. (Q4) Rare condition, pedigree P-Q4; choose from AD, AR, XR. (a) Rule out with numbered individuals. (b) Why can't the pedigree decide between the other two? (c) Which is more likely?
   Model: (a) Not XR: I-2 is affected, so all her sons would be affected, but II-2 is unaffected (also II-1, an affected daughter, has an unaffected father, I-1). (b) No unaffected couple has an affected child and no affected couple has an unaffected child, so AD (affected people Aa) and AR (affected aa, with I-1 and II-4 carriers) both fit. (c) AD is more likely for a rare condition, because AR needs two unrelated people marrying in to be carriers; not proven. Classic mistake crossed: "dominant, because it appears in every generation".

## Numbers to verify

Self-check (18 Oct). Every probability was computed twice: by hand as fractions and by a script that enumerates the Punnett boxes with exact fractions (`fractions.Fraction`). Every pedigree was checked by a brute-force script that tries every genotype assignment under AD, AR, XR and XD (X-linked dominant included for the author check only).
- **Q1.** C^B C^W x C^W C^B: 1/4 C^B C^B, 1/2 C^B C^W, 1/4 C^W C^W. P(blue) = 1/2; two blue = 1/4. C^B C^B x C^W C^W: all C^B C^W. Andalusian blue is the textbook incomplete dominance case (the blue allele dilutes black; homozygous gives "splash", a whitish bird with flecks; black x splash gives all blue). Correct; the science check should confirm the allele naming used on screen (C^B and C^W are teaching labels, flagged as such by a grey tag "letters: labels only").
- **Q2.** X^O X^o x X^O Y: X^O X^O 1/4, X^O X^o 1/4, X^O Y 1/4, X^o Y 1/4. Tortoiseshell female 1/4 of all kittens; black sons 1/2 of sons. Orange in cats is X-linked (the *Orange* locus); tortoiseshell patches come from X inactivation (author note only); XXY tortoiseshell males are rare (about 1 in 3,000 tortoiseshells is often quoted; not spoken). Autosomal slip: Oo x OO gives 1/2 Oo of both sexes. Correct.
- **Q3 (pedigree P-Q3).** I-1 unaffected male x I-2 unaffected female: II-1 affected son, II-2 unaffected daughter (the woman). I-3 affected female x I-4 unaffected male: II-3 unaffected son (the partner). II-2 x II-3: first child "?". Brute force: fits AR only (AD fails: II-1 affected with unaffected parents; XR fails: affected mother I-3 has an unaffected son II-3; XD fails). Forced AR genotypes: I-1 Pp, I-2 Pp, I-3 pp, II-1 pp, II-3 Pp; II-2 PP or Pp. P(II-2 Pp | unaffected) = (1/2) / (3/4) = 2/3. P(child pp) = 2/3 x 1/4 = 1/6. Given an affected first child, P(II-2 Pp) = 1, so P(second child pp) = 1/4. Slip: 1/2 x 1/4 = 1/8. PKU is autosomal recessive (*PAH* gene, chromosome 12); Australian newborn screening detects it. Correct.
- **Q4 (pedigree P-Q4).** I-1 unaffected male x I-2 affected female: II-1 affected daughter, II-2 unaffected son, II-3 unaffected daughter. II-1 x II-4 (unaffected male partner, from outside the family): III-1 affected son, III-2 unaffected daughter. Brute force: AD fits (I-2, II-1, III-1 Aa; others aa); AR fits only with I-1 and II-4 both Aa (also II-2, II-3, III-2 Aa forced); XR fails (I-2 X^a X^a would make II-2 affected; II-1 affected with unaffected father); XD also fits (I-2 X^A X^a, III-1 X^A Y), which is why the stem limits the choice to the three taught patterns. Decisive future evidence named on screen: under AD, II-3 is aa and cannot have an affected child with an unaffected partner; under AR, II-3 is a certain carrier and could. Correct.
- **Fractions:** 1/2, 1/4, 2/3, 1/6, 1/8 (slip) only; no percentages spoken. **No em dashes** in this file (searched).

## Memory aid check

- **"Incomplete is in-between. Co shows both."** (bank.) Recalled for the model choice in Q1 and Q2. Tortoiseshell shows both colours, in patches; the screen does not call it co-dominance outright (the patches come from X inactivation, an author note), it says "both alleles show".
- **"Dad gives his X to daughters and his Y to sons."** (bank.) Exactly the Q2 square. True for XY species, including cats.
- **Pedigree rules / "Hidden in the parents: recessive. Hidden in the child: dominant."** (bank.) Used in Q4 to show that neither giveaway is present; the bank's own limit (when neither appears, the pedigree may fit both) is the point of the question. The bank's X-linked recessive rule-out is used in 5b.
- **"Cross out the box they can't be."** (new, not in the bank.) Maps to conditioning on a known phenotype: remove the outcomes the person's phenotype excludes, then share the chance equally over the rest. Assumption: the remaining boxes were equally likely to start with (true for a Punnett square from known parents). Fails if the parents' genotypes are themselves uncertain (then each possible cross must be weighted first). Needs the science check and the learning review.
- **"Separate offspring, known parents: multiply."** (new; condition added in Revision 2.) True for independent fertilisations from parents whose genotypes are known. It fails when a parent's genotype is uncertain: for the Q3 couple, P(both children have PKU) = 2/3 x 1/4 x 1/4 = 1/24, not 1/6 x 1/6 = 1/36, because the 2/3 applies once to the mother, not once per child. Q3 (b) shows the same point from the other side: an affected child changes what we know about her (4d). "Offspring" replaces "births" because chicks hatch.

## Narration length estimate

Re-counted for Revision 2 by script (bold markers removed, narration lines only), at 13.3 characters per second.

| Scene | Characters |
| --- | --- |
| 1 hook | 461 |
| 2a q1-question | 377 |
| 2b q1-model | 283 |
| 2c q1-chance | 262 |
| 2d q1-mistake | 149 |
| 3a q2-question | 451 |
| 3b q2-why-female | 219 |
| 3c q2-square | 307 |
| 3d q2-mistake | 175 |
| 4a q3-question | 388 |
| 4b q3-sure | 237 |
| 4c q3-two-thirds | 318 |
| 4d q3-update | 309 |
| 5a q4-question | 313 |
| 5b q4-rule-out | 316 |
| 5c q4-both-fit | 378 |
| 5d q4-more-likely | 256 |
| 6 decision-board | 430 |
| 7 key-notes | 75 |

Revision 2 total: **5,704 characters** (Revision 1 was 5,620; inside 5,500 to 6,800). Speech about 429 s; with 38 s of padding (19 scenes, 2 s each), about 10 s of stated holds, 40 s of countdowns (four) and about 55 s more of the quiet notes hold: **about 9.5 minutes**. Walkthrough speech per question (excluding the question scene): Q1 about 52 s, Q2 about 53 s, Q3 about 65 s, Q4 about 71 s. No split needed.

## Scene list and build ids

All scenes are new to voice except key-notes (standard line, reuse take).

In order: hook, q1-question, q1-model, q1-chance, q1-mistake, q2-question, q2-why-female, q2-square, q2-mistake, q3-question, q3-sure, q3-two-thirds, q3-update, q4-question, q4-rule-out, q4-both-fit, q4-more-likely, decision-board, key-notes.

Holds (10 s countdown after the speech, "Pause here to answer." on screen, card on screen during and after): q1-question, q2-question, q3-question, q4-question. key-notes is the quiet notes hold (about 60 s). Lesson key `g02b` suggested (`chem-m5-g02.md` exists, so `g02` is likely taken; root to confirm). Suggested explainer folder `src/explainer/lessons/bio-m5-g02`, importing B9's `genetics.tsx` and B10's `shared.tsx` helpers. Build: add a `g02b` entry to `build_wave5_bio.py` (same pattern as `b9` and `b10`) once the Status line says "ready to voice"; review evidence paths `checks/g02b-learning-review.md` and `checks/g02b-claude-science-check.md` (to be written).

## Assets

Have (inspected 18 Oct): no existing plate fits. `public/assets/biology/hen-nest-b2-v1-alpha.png` was inspected: a brown hen beside a nest on a white rectangle (not a true alpha cut-out), wrong breed and colours, so it is not reused.

Need (painted, new): `m5x-chicken-black-v1.png`, `m5x-chicken-blue-v1.png`, `m5x-chicken-splash-v1.png`, `m5x-cat-tortoiseshell-v1.png`, `m5x-cat-orange-v1.png`, `m5x-cat-black-v1.png`.

Coded: allele chips, gamete discs, Punnett grids (computed), probability tree, cross-out overlay, pedigrees P-Q3 and P-Q4, genotype chips, mode-test table, trio icons, first-moves strip and decision board, chips, countdown. No people.

## Codex asset brief (G02, inheritance probability practice)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/bio-m5-g02.md`, route entry bio-m5-g02. Brief number: root assigns the next free number (after the G01 brief).

Paint six plates in two matched sets. Every plate: transparent PNG with a real alpha channel (no white or paper background, no ground rectangle), ink and watercolour natural history style matching `m5x-cattle-roan-v1.png` and `m5x-cattle-red-v1.png`, no text, no labels, no people, faces of people or hands, about 2000 px on the long side, whole animal in side view, centred.
1. to 3. Andalusian chickens, the same pose, scale and lighting in all three, so only the colour differs: `m5x-chicken-black-v1.png` (glossy black plumage), `m5x-chicken-blue-v1.png` (slate blue-grey plumage with darker lacing on the feather edges, the classic "blue Andalusian"), `m5x-chicken-splash-v1.png` (whitish plumage with scattered blue-grey flecks). Single red comb, white earlobes, slate legs.
4. to 6. Domestic shorthair cats, the same standing side pose and scale: `m5x-cat-tortoiseshell-v1.png` (a mottled mix of black and orange patches, no white), `m5x-cat-orange-v1.png` (orange, darker orange tabby striping), `m5x-cat-black-v1.png` (solid black with soft highlights).

Report inspection on the dark board background at about 220 px tall and confirm that each set reads as a set and the colours are distinguishable in greyscale (blue against black chicken; tortoiseshell against black cat). Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/g02b-provenance.json`.

## YouTube metadata (draft)

- **Title:** Inheritance Probability: Unfamiliar Crosses and Pedigrees | Year 12 Biology
- **Description:** Practise the inheritance questions that use an animal or a family you haven't seen before. Choose the model for Andalusian chickens, explain why tortoiseshell cats are almost always female, find the chance of a child with PKU when one parent might be a carrier, and decide what a pedigree can and can't prove. Pause and try each question, then work through it one step at a time. Questions are written for HSCScience in the HSC style; they are not official NESA questions.

  Biology 2017: Year 12 Module 5, Heredity. Practice for interpreting inheritance patterns and constructing and interpreting Punnett squares and pedigrees.
  Syllabus dotpoint (NSW Biology Stage 6, 2017, Module 5):
  "model the formation of new combinations of genotypes produced during meiosis, including but not limited to:
  - interpreting examples of autosomal, sex-linkage, co-dominance, incomplete dominance and multiple alleles (ACSBL085)
  - constructing and interpreting information and data from pedigrees and Punnett squares"
  Official 2017 course: https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/biology-stage-6-2017

  Prerequisite: Dominant and recessive alleles, Punnett squares, pedigrees, sex linkage, incomplete dominance and co-dominance. Next: How common an allele is across a whole population, and what SNPs show.

  #Year12Biology #Genetics #HSCScience
- **syllabusDotpoints:** the quoted block above. `verifyWording`: true.
- **Playlist:** Year 12 Biology: Module 5, Heredity (2017 syllabus). Playlist order 19.

## Open decisions

- **Multiple alleles (route action B-multiple-alleles).** Decision (Revision 2): G02 adds no ABO item. A fifth question (question, two walkthrough scenes, a crossed mistake) needs about 1,100 to 1,200 characters, which would take the narration to about 6,850, over the 6,800 ceiling, and would add a fifth card and a seventh decision-board row (crowding). B10 already practises ABO twice (the A x B family giving O, and the site's IAi x IBi item), so G02 leaves multiple-allele practice to B10. The learning review (minor 8) agrees. If the board later wants ABO practice, the lightest route is a short item in a future mixed-practice video, not in G02.

## Review notes for Claude (author, not learner copy)

- **Hard-practice exception.** Walkthroughs run about 20 to 35 s per scene, three scenes per question; this is the content (AGENTS.md exception). The reviewer should check that no walkthrough re-teaches a core: each rule is recalled in one clause with a grey tag naming its video.
- **Multiple alleles.** Resolved as an open decision (see Open decisions).
- **Q4 and X-linked dominant.** The Q4 pedigree also fits X-linked dominant. The stem limits the choice to the three taught patterns, so the answer is correct as asked. A reviewer may prefer a pedigree that also excludes XD (for example, an affected father with an unaffected daughter); that change would add a generation-one couple and about 60 characters.
- **Pronunciation.** "Andalusian" (an-duh-LOO-zhun); "phenylketonuria" (fen-il-kee-toh-NYOOR-ee-uh); "P K U" as letters; "tortoiseshell" (TOR-tuh-shell); "individual 2 in generation one" as written (B9 reviewer fallback: "two-one" on screen, "her son" in speech); fractions spoken as "one in four", "two in three", "one in six".
- **Doubts.** (a) "Cross out the box they can't be" and "Separate offspring, known parents: multiply" are new aids, not in the bank. (b) Q3 (b): Revision 2 adds the cause ("The child needed a recessive allele from her"); recheck its pace in the voiced preview. (c) The Q1 "splashed white" phenotype is a whitish bird with flecks; the stem calls it "splashed white" so the plate and the word agree. (d) Tortoiseshell genetics is described only as "both colours show, in patches"; X inactivation is an author note.
- **No em dashes** in this file (searched).
