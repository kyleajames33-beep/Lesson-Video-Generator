# G01: Trace an unfamiliar sequence or chromosome pathway: HSC-style practice (design)

Status: Revision 2 (18 Oct): learning review and Claude science check resolved; ready to voice (pending owner go-ahead). Reviews: `../checks/g01b-learning-review.md`, `../checks/g01b-claude-science-check.md`.

Revision 2 changes (18 Oct): (1) scene 3b's which-end sentence now says the mRNA runs the same way as the coding strand, so start at the strand's 5' end (learning should fix 1); (2) Q4 card gives "most other anther cells: no crossover between these two genes" in place of "assume no mutation", with 5a and 5d reworded to use it (learning should fix 2); (3) model answer 4(b) now says "a cell with one crossover between the genes gives half new" and the author note is limited to single crossovers (science should fix 1); (4) scene 2b says a T and a G "aren't partners, so they pair badly" (G·T wobble); (5) minors: hook "written from its 3' end", notes condition tag and crossover line, 3b tiles re-order instead of flipping, "about" kept on the Q3 result lines, B5-IQ4-01 quoted as well, unspoken chips land after the spoken cross. Revision 1 (18 Oct) was the first design. Nothing recorded.

Working title: "Trace a sequence or a chromosome: HSC-style practice". Video type 3 in the teaching playbook (practice walkthrough), authored questions only. Every question is written for HSCScience and is never presented, said or implied to be an official NESA question; every question card carries the tag "HSC-style question, written for HSCScience". This is a hard-practice video: the worked walkthroughs are the content, so each walkthrough may run longer than the brief end-of-video feedback rule (AGENTS.md exception). Each question still ends "Pause here to answer." with a 10 s countdown, keeps the full question and data on screen during the attempt, reasons one stage per scene, and ends with one crossed-out classic mistake. Learner copy never mentions marks. **Route id:** `bio-m5-g01` (playlist order 13, type companion). Production label G01.

## Decisions

- **Route entry (`module5-video-route-2026-10-10.json`, bio-m5-g01).** Title "Trace an unfamiliar sequence or chromosome pathway"; prerequisites bio-m5-b05b and bio-m5-b06c; entry knowledge "Matching mechanism cores and orientation/ploidy vocabulary"; start "An unfamiliar oriented sequence or chromosome/allele trace"; stop "Reason through direction and chromosome/allele accounting and explain model limits after a protected attempt"; next bio-m5-b07 and bio-m5-b08. Syllabus actions B-DNA-replication, B-meiosis, B-transcription, B-translation, B-new-genotypes.
- **Syllabus (2017, BIO12-12, `programme/syllabus/bio-2017-y12.json`, p 49).** B5-IQ2-01 "model the processes involved in cell replication, including but not limited to:" with "mitosis and meiosis (ACSBL075)" and "DNA replication using the Watson and Crick DNA model, including nucleotide composition, pairing and bonding (ACSBL076, ACSBL077)"; B5-IQ3-02 "model the process of polypeptide synthesis, including: (ACSBL079)" with "transcription and translation"; B5-IQ4-02 "model the formation of new combinations of genotypes produced during meiosis, including but not limited to:" (the crossing over part only); and, for the crossing over skill by name (Revision 2), B5-IQ4-01 "conduct practical investigations to predict variations in the genotype of offspring by modelling meiosis, including the crossing over of homologous chromosomes, fertilisation and mutations (ACSBL084)", whose practical coverage stays with P01 and P02. Practice and transfer only: the ledger rows stay with their core videos (B4, B5b, B6b, B6c, B8); G01 adds a practice row, not first coverage.
- **One main question:** *When a question hands you a sequence or a cell you have never seen, what do you check first so the trace comes out right?* Answer carried by the whole video: which strand, which end, and what you are counting. Heading on screen: "Trace it: which strand, which end, what to count".
- **Why a practice video, and why these four questions.** B4, B5a, B5b, B6b and B6c each teach a mechanism with one worked case and two attempts. Students lose marks on transfer: a strand written backwards, the coding strand mistaken for the template, chromatids counted as chromosomes, DNA amount confused with chromosome number, a crossover assumed to change every product. Each question below hides one or two of these traps in an unfamiliar organism, so students must apply the rule rather than recall the earlier example.

  | Q | Context (new) | Area | Trap | Core it practises |
  |---|---|---|---|---|
  | 1 | a bacterium, one copying error | replication | each strand is its own template; a mismatch is not yet a changed pair | B4 |
  | 2 | a firefly glow gene, coding strand written 3' to 5' | transcription, translation | which strand (coding: copy, do not pair); which end (read from 5'); stop codon mid-sequence | B6b, B6c |
  | 3 | a koala testis cell, chromosome number and DNA mass | meiosis | centromeres count chromosomes, chromatids count DNA | B5a, B5b |
  | 4 | a sweet pea anther cell, two genes on one chromosome, one crossover | meiosis, new combinations | a crossover changes two chromatids, not four; model limit | B5b |

- **Rising difficulty.** Q1 is a two-step trace with one count (warm-up, B4 rule applied to an error). Q2 stacks three checks (strand, end, stop). Q3 tracks two quantities through three stages. Q4 needs a chromatid-level picture, then a reasoned limit ("why much less than half").
- **Site alignment.** Site lessons (`site-extracts/bio-m5-l06.md`, `l08.md`, `l10.md`, `l11.md`; the route's sources are L6, L8, L10 and L11, not L7, which is mitosis). Reused site items and framings: L6 complementary pairing and "each daughter molecule retains an original template strand" (Q1); L6 "replication errors can change DNA and affect proteins" (Q1 context); L10 the template and coding strand distinction and "a DNA change means the codons carried by the mRNA may differ" (Q2, Q1); L11 "do not mix codons with anticodons", the codon chart, start AUG, stop codons (Q2); L8 Activity 1 chromosome counts through meiosis (Q3, extended to DNA mass); L8 "crossing over or assortment creates new combinations, not new alleles" and "meiosis produces four genetically different cells" (Q4). Site misconceptions blocked: "replication makes two entirely new strands" (Q1 walkthrough), "DNA strands are identical: they are complementary and antiparallel" (Q2), "meiosis produces four identical cells" (Q4).
- **Entry knowledge (do not re-teach; recall in one clause each).** From B4: A pairs with T, C with G; antiparallel strands with 5' and 3' ends; each original strand is a template; semi-conservative copying; a surviving error becomes a changed pair after the next copy. From B6b: template versus coding strand; mRNA is built 5' to 3' and matches the coding strand with U for T. From B6c: codon chart with mRNA codons only; start AUG; stop codons add no amino acid. From B5a: count chromosomes by centromeres; DNA is copied in interphase into two sister chromatids. From B5b: meiosis I separates homologous pairs, meiosis II separates sister chromatids; crossing over swaps matching pieces between non-sister chromatids and makes new combinations of existing alleles; four cells from one. Not assumed: DNA mass per cell (introduced in Q3 as "the DNA follows the chromatids"), linkage frequencies (B8, later in the route; Q4 reasons only from one cell).
- **Start and stop.** Starts at "an unfamiliar sequence or cell with a hidden trap"; stops after four traces with the trap named and a decision board of first moves. No new mechanism. Not covered: leading and lagging strands and Okazaki fragments (site extension), mutation types and their effects (Module 6), recombination frequencies and gene mapping (B8 gives the qualitative idea; mapping is not in the syllabus), non-disjunction (B5b cut it; Module 6 context).
- **Placement and handoff.** After B6c (playlist 13), before B7. Scene 6 hands off to B7 ("how a chain of amino acids becomes a trait").
- **Model limits (route stop rule).** Q1 states "not repaired" and "no more mistakes" as conditions; Q3 states "assume no mistakes in division"; Q4 says the single crossover is a condition of this one cell and gives "most other anther cells: no crossover between these two genes"; its part (b) asks why the one-cell answer is not the plant's overall answer. Each condition is on the card during the attempt.
- **Letters policy (as B9).** Bases are spoken as letters ("A U G"), which TTS reads reliably in upper case. Allele letters are never spoken; alleles are named by meaning ("the purple allele", "the round allele"). The allele letters appear on screen only.
- **Visual system.** One practice board throughout, in the G03c layout: top-left the short task line, kept until the answer lands; under it the stimulus strip (sequence, cell or chromosome); under that the grouped givens card; the working fills the right two thirds; the type badge sits top-right ("Replication", "Transcription and translation", "Meiosis: counts", "Meiosis: alleles"). A **trace checklist** strip on the far left carries three rows, "which strand?", "which end?", "what am I counting?", and ticks the row each question used. It dims to an outline during every countdown. Earlier questions are cleared before the next card writes on.
- **Mistake scenes.** No mistake/fix template scene. Each question ends with its own classic mistake, crossed out (owner rule for practice walkthroughs).
- **Memory aids (bank, checked below).** "mRNA is a copy of the coding strand, built on the template strand" (bank trap, recalled in Q2). "Count the centromeres, not the arms" (bank shortcut, Q3) extended by a new line, "Centromeres count the chromosomes; chromatids count the DNA" (not in the bank; flagged for the science check). "Meiosis I splits the pairs. Meiosis II splits the copies" (bank insight, Q3 and Q4). No analogy is manufactured.
- **Reuse (no prototype components).** Explainer kit (`Plate`, `Callout`, `Mark`, `Countdown`, `HandText`, `DrawPath`, `scribbleEllipse`, `Enter`); B4 DNA tiles, strand colours (original blue, new green), end tags and pair snaps (`src/explainer/lessons/bio-m5-b04/dna.tsx`); B6b terracotta mRNA strand with amber U tiles and the arrow rule; B6c `CodonChart`, `codonToAA`, `translate` and `AminoChain` beads (`src/explainer/lessons/bio-m5-b06c/`); B5a and B5b chromosome and cell plates (`b5x-chromosome-duplicated-pink-v1.png`, `-teal-`, `b5x-chromosome-single-pink-v1.png`, `-teal-`, `b5x-cell-dividing-nospindle-v1.png`), B5b `AlleleBead` and `CountTracker`; B6a `WrongChip`, `GreyTag`, `Cross`. New coded items: the trace checklist strip, the two-quantity count table (Q3), the chromatid strip with allele beads (Q4), the decision board.

Main question: *When a question hands you a sequence or a cell you have never seen, what do you check first so the trace comes out right?*
Entry knowledge: see above. Students start Year 12 and have watched B4 (DNA copying), B5a (mitosis), B5b (meiosis), B6a, B6b (transcription) and B6c (translation).
Stops after: tracing a copying error through two rounds and counting the changed molecules; turning a coding strand written 3' to 5' into mRNA with ends and an amino acid chain that stops at a stop codon; tracking chromosome number and DNA mass through meiosis; listing the four products of one meiosis with one crossover and explaining why new combinations are less than half of a plant's gametes.
Handoff: proteins, phenotype and gene-environment interaction (route entry bio-m5-b07).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Board layout as Decisions. Each question card carries "HSC-style question, written for HSCScience". Colours: B4 blue for original DNA strands, green for new strands, terracotta mRNA with amber U, B5b plum and teal chromosomes for the two homologues (pink plate takes the plum role), amber for emphasis rings only.

### 1. hook
> Exam questions on DNA and meiosis rarely ask you to recite the steps. They hand you something new, a sequence written from its 3' end, a copying error, a cell you've never seen, and ask you to trace it. Every trace comes down to three checks: **which strand**, **which end**, and **what you're counting**. Here are four HSC-style questions. Pause and try each one, then we'll work it through one step at a time, and look at the classic mistake.

Visual: heading "Trace it" writes on. Four small stimulus thumbnails fan out on the right on "something new": a strand of tiles with "3'" on the left (on "written from its 3' end"), a pair of tiles with one red-ringed mismatch (on "a copying error"), the koala plate in a cell outline (on "a cell you've never seen"), a chromosome pair with a crossover mark. On the three checks, the trace checklist builds on the left, one row per spoken phrase: "which strand?" (two strand icons), "which end?" (a "5'" tag), "what am I counting?" (a centromere dot beside a chromatid pair). On "four HSC-style questions" the thumbnails become four question cards, each with the tag "HSC-style question, written for HSCScience". Hold about 1 second; the checklist shrinks to a strip at the far left.

### 2a. q1-question (question 1: a copying error)
> Question one. A bacterium is copying its DNA. At one spot, the DNA has a T paired with an A. Opposite that T, DNA polymerase makes a rare mistake: it adds a **G** instead of an A, and the mistake is **not repaired**. Both new molecules are then copied once more, with no more mistakes. Of the four molecules, **how many** have a changed base pair at this spot, and what is the changed pair? Pause here to answer.

Visual: fresh board. Type badge "Replication". `b6a-bacterium-v1.png` small at top left, tagged "a bacterium". Task line: "How many of the four molecules have a changed pair? Which pair?" Stimulus: a short B4 ladder of five base pairs (original strands blue) with the middle pair "T = A" ringed amber on "T paired with an A". Givens card, one line per cue: "round 1: G added opposite the T (an error)", "the error is not repaired", "round 2: both molecules copied again, no more errors". Under the card, an empty row of four molecule outlines labelled "after round 2". Nothing answer-bearing: no new strands, no mismatch drawn. Countdown ring 10 seconds with "Pause here to answer." on screen; the checklist strip dims.

### 2b. q1-first-copy (round one)
> Start with the first copy. The two strands separate, and **each one is a template**. The A strand gets a new T, so that molecule is **normal**. The T strand gets the wrong partner, a G. A T and a G aren't partners, so they pair badly, and this molecule has a **mismatch**. It isn't a changed pair yet.

Visual: the ladder unzips (B4 motion). On "each one is a template" both blue strands glow and the tag "each strand: a template" writes on (grey tag "B4"). Left daughter: green tiles dock opposite the A strand; at the ringed spot a green T snaps to the A with a tick; tag "normal". Right daughter: green tiles dock opposite the T strand; at the ringed spot a green G slides in and sits crooked against the T, with a red outline; on "mismatch" the tag "T and G: a mismatch" writes on. Checklist: "which strand?" ticks.

### 2c. q1-second-copy (round two)
> Now copy again. The normal molecule makes **two normal** molecules. The mismatched one separates too. Its T strand pairs with an A, as it should, so that copy is normal. But its G strand pairs with a **C**. So only **one** of the four molecules has a changed pair: G with C, where T with A used to be. The error took two rounds of copying to become a real change.

Visual: both daughters unzip together. Left: two normal molecules drop into the first two outlines with ticks. Right: the blue T strand picks up a new green A (tick, "normal"); the green G strand picks up a new C, and the pair "G = C" locks in with an amber ring. On "one" the four outlines fill: "normal", "normal", "normal", "G-C: changed", and the answer line writes on: "1 of 4 molecules: G-C in place of T-A". A thin family-tree line links each final molecule back to the strand it was copied from.

### 2d. q1-mistake (the classic mistake)
> The classic mistake is saying **two**, as if the mismatch copies itself into both daughters. It doesn't. Each strand is a template, and the T strand still holds the right base, so its new copy is normal.

Visual: a ghost row "normal, normal, changed, changed" appears beside the answer; on "two" it takes a red scribble cross with the caption "the mismatch does not copy into both". On "the T strand still holds the right base" the T strand's tile pulses blue with the tag "original base kept". Hold about 1.5 seconds.

### 3a. q2-question (question 2: a strand written backwards)
> Question two. Fireflies glow using an enzyme made from one gene. Here's a short section of that gene's **coding strand**, written from its **3' end** to its 5' end. Using the codon chart, write the mRNA with its ends. Then give the chain of amino acids this section codes for, and say **how many** there are. Pause here to answer.

Visual: board clears. Type badge "Transcription and translation". The painted firefly plate (new, `m5x-firefly-glow-v1.png`) small at the top left, its lantern glowing, tagged "firefly". Task line: "Write the mRNA (with ends). Give the amino acid chain and how many." Stimulus: one strand of 15 B4 tiles in plum, no codon gaps: "3' C G G A A T A A A G G T G T A 5'", labelled "coding strand"; on "coding strand" the label rings amber; on "3' end" the left "3'" tag rings. Grey chip: "illustrative sequence, not the real gene". The full B6c `CodonChart` sits at the right, unlit (cells from `codonToAA`; no pointer). Empty mRNA slot row under the strand with two blank end boxes. Nothing answer-bearing. Countdown 10 seconds; checklist dims.

### 3b. q2-direction (which strand, which end)
> Two checks first. **Which strand?** It's the coding strand, so the mRNA is a copy of it, with U in place of T. No pairing. **Which end?** The mRNA runs the same way as the coding strand, so start at the strand's 5' end, on the **right**. Read right to left, T as U: **A U G**, U G G, A A A, U A A, G G C.

Visual: on "Which strand?" the checklist row lights and a chip "coding strand: copy it, T becomes U" writes on (recalls B6b's trap line, grey tag "B6b"). On "Which end?" the "5'" tag on the right pulses amber; on "right" an amber process arrow draws under the strand pointing right to left, labelled "read from 5'". The tiles then slide and re-order right to left into a terracotta mRNA row beneath the strand (letters stay upright; the "5'" tag stays attached to the A end), copied base for base with T turned to amber U, one codon per spoken group; the chip "same letters, same direction as the coding strand (B6b)" writes beside it: "5' AUG UGG AAA UAA GGC 3'". Codon gaps appear as each group lands. Checklist: "which end?" ticks.

### 3c. q2-chain (the chart, and the stop codon)
> Now the chart. A U G is the start codon, **methionine**. U G G is tryptophan, and A A A is lysine. U A A is a **stop codon**. It adds no amino acid, and the chain is released, so G G C is never read. The chain is methionine, tryptophan, lysine: **three** amino acids.

Visual: the `CodonChart` pointer runs each lookup (first base row, second base column, third base line) as each codon is spoken; a labelled bead pops out and joins the `AminoChain`: "Met" (with the chart's amber start flag), "Trp", "Lys". On "stop codon" the UAA cell lights grey and a grey bracket "stop: adds nothing" closes the chain; the GGC codon greys out with the tag "after the stop: not read". On "three" the answer line writes on: "mRNA 5' AUG UGG AAA UAA GGC 3'; chain Met-Trp-Lys: 3 amino acids". All amino acids on screen are computed by `translate`, never typed.

### 3d. q2-mistake (the classic mistake)
> The classic mistake is reading from the **left**, because that's how we read English. That gives arginine, asparagine and three more, with no start codon at all. Always find the 5' end first.

Visual: a ghost mRNA "C G G A A U A A A G G U G U A" writes left to right under the original strand with the ghost chain "Arg, Asn, Lys, Gly, Val" (computed); on "left" it takes a red scribble cross with the caption "read from the 3' end: wrong". A second crossed chip, unspoken, lands only after the spoken cross has settled: "paired it like a template: Ala, Leu, Phe, Pro, His" with the tag "it's the coding strand: copy, don't pair". Hold about 1.5 seconds.

### 4a. q3-question (question 3: counting through meiosis)
> Question three. A koala's body cells each have **16 chromosomes**. Before its DNA is copied, a cell in a koala's testis holds 16 chromosomes and about **7.0 picograms** of DNA. It then makes sperm by meiosis. Give the number of chromosomes and the mass of DNA in this cell in **prophase one**, in **each cell after meiosis one**, and in **each sperm cell**. Pause here to answer.

Visual: board clears. Type badge "Meiosis: counts". The painted koala plate (new, `m5x-koala-v1.png`) small at the top left, tagged "koala". Task line: "Chromosomes and DNA mass at three stages." Givens card: "body cells: 16 chromosomes", "before copying: 16 chromosomes, 7.0 pg DNA", grey gloss "pg = picogram, a millionth of a millionth of a gram", "assume no mistakes in division". On screen, a coded empty count table with three rows ("prophase I", "each cell after meiosis I", "each sperm cell") and two columns ("chromosomes", "DNA (pg)"). Beside it `b5x-cell-dividing-nospindle-v1.png`, empty. Nothing answer-bearing. Countdown 10 seconds; checklist dims.

### 4b. q3-s-phase (two rules, then the copy)
> Use two rules. Count the **chromosomes** by their centromeres, and count the **DNA** by the chromatids. Before prophase one, every chromosome is copied into two sister chromatids, still joined at **one centromere**. So the cell still has 16 chromosomes, but twice the DNA: **14 picograms**. Copying doubles the DNA, not the chromosomes.

Visual: two rule chips write on, each with an icon: "chromosomes: count centromeres" (a single dot) and "DNA: count chromatids" (two arms). The cell shows 16 single chromosome plates (8 pink, 8 teal, small). On "one centromere" each plate is replaced by its duplicated plate (`b5x-chromosome-duplicated-pink-v1.png`, `-teal-`) and a centromere dot rings on one. On "14 picograms" the first table row fills "16" and "about 14.0" with a pen "x 2" beside the DNA cell. Checklist: "what am I counting?" ticks.

### 4c. q3-divisions (meiosis one, then meiosis two)
> Meiosis one separates the **homologous pairs**, so each cell gets 8 chromosomes. But each chromosome still has both its chromatids, so each cell holds half of 14: **7.0 picograms**. Meiosis two splits the **sister chromatids**. Each sperm cell keeps 8 chromosomes, now single, and half the DNA again: **3.5 picograms**.

Visual: the duplicated plates pair up across the middle (B5b metaphase I look, no stage drawing beyond the plates); on "homologous pairs" the partners slide to two daughter outlines (8 X-shaped plates each); row 2 fills "8" and "about 7.0" with a tag "each still two chromatids". On "sister chromatids" each daughter splits again into two, four cell outlines, each with 8 single plates; row 3 fills "8" and "about 3.5" (grey tag: "about: X- and Y-carrying cells differ slightly"). The bank line writes small under the table: "Meiosis I splits the pairs. Meiosis II splits the copies." A thin check row, unspoken: "4 sperm x 3.5 = 14.0 pg: all the copied DNA accounted for".

### 4d. q3-mistake (the classic mistake)
> The classic mistake is **3.5 picograms** after meiosis one. That's the sperm cell's amount. After meiosis one, each chromosome still has two chromatids, so each cell still holds 7.0.

Visual: a ghost value "3.5" sits in row 2's DNA cell; on "3.5 picograms" it takes a red scribble cross with the caption "still two chromatids each". A second crossed chip, unspoken, lands only after the spoken cross has settled: "prophase I: 32 chromosomes (counted chromatids)". Memory chip: "Centromeres count the chromosomes; chromatids count the DNA." Hold about 1.5 seconds.

### 5a. q4-question (question 4: one crossover, four cells)
> Question four. In sweet peas, the gene for flower colour and the gene for pollen shape are on the **same chromosome**. A plant has the purple and long alleles on one chromosome, and the red and round alleles on its partner. In one cell in an anther, a **single crossover** happens between the two genes. List the alleles in each of the **four pollen cells** it makes. Then, if most anther cells have no crossover between these genes, explain why new combinations are much **less common than half**. Pause here to answer.

Visual: board clears. Type badge "Meiosis: alleles". The painted sweet pea plates (new, `m5x-sweetpea-purple-v1.png` and `m5x-sweetpea-red-v1.png`) small at the top left, tagged "purple flower" and "red flower". Task line: "(a) Alleles in each of the four pollen cells. (b) Using the givens, why are new combinations much less than half?" Stimulus: one homologous pair as single chromosome plates (pink and teal) with allele beads: pink "P" (purple) above "L" (long), teal "p" (red) above "l" (round); a key strip "P purple, p red; L long, l round". Givens: "genes on the same chromosome", "this cell: one crossover between the two genes", "most other anther cells: no crossover between these two genes". Four empty pollen-cell outlines. Nothing answer-bearing: no chromatids drawn, no swap mark. Countdown 10 seconds; checklist dims.

### 5b. q4-chromatids (copy, then cross over)
> Start with the **chromatids**. After copying, the pair has four: two purple long, and two red round. A crossover swaps matching pieces between **two** of them, one from each partner, and only those two. Now there's one purple long, one **purple round**, one **red long** and one red round.

Visual: each single plate becomes its duplicated plate; the four chromatids are drawn as a coded chromatid strip (four parallel rods, two pink, two teal, each carrying its bead pair). On "two" an inner pink and an inner teal rod light; a swap mark draws between the two gene levels and the lower segments trade places (pink rod now ends teal with "l"; teal rod now ends pink with "L"). The outer two rods stay unchanged with a grey tag "not touched". Bead labels update on their spoken words. Checklist: "what am I counting?" ticks (chromatids).

### 5c. q4-four-cells (two divisions, four cells)
> Meiosis one sends the two partners to different cells, and meiosis two splits each pair of sister chromatids. So each pollen cell gets **one chromatid**: purple long, purple round, red long and red round. **Two** are the plant's original combinations, and two are **new**. So this one cell made four different pollen cells.

Visual: the pink pair and the teal pair move apart (meiosis I) into two outlines, then each splits (meiosis II) into the four pollen-cell outlines, each carrying one rod; labels write on in the cells: "P L", "P l", "p L", "p l". On "Two" the parental pair gets a plain tag "original"; on "new" the recombinant pair gets amber rings and the tag "new combination". Answer line (a): "PL, Pl, pL, pl: 2 original, 2 new".

### 5d. q4-limit (why less than half, and the classic mistake)
> So why are new combinations much less than half? Even in this cell, **only two** of the four are new. And as the card says, most cells have no crossover **between these two genes**, so all four keep the original combinations. The classic mistake is saying all four pollen cells are new. The crossover only touched **two chromatids**.

Visual: the four cells shrink to the left as "this cell: 2 of 4 new". On "between these two genes" the card's given "most other anther cells: no crossover between these two genes" rings amber, and a second small cell writes on beside it with the crossover mark drawn outside the gene interval (grey tag "crossover elsewhere"), giving four "original" cells; a third cell with no crossover gives four "original" cells. A row of small pollen dots fills below, mostly plain with a few amber (illustrative, no number), with the line (b): "a cell with one crossover between the genes gives half new; most cells have none there, so far fewer than half overall". On "all four pollen cells are new" a crossed chip "all four cells new" takes a red scribble cross with the caption "only two chromatids swap". Grey tag (author-approved model limit): "real cells can have no crossover, or more than one, along a chromosome". Hold about 1.5 seconds.

### 6. decision-board
> So here's how to start any trace. A **sequence**: ask which strand, then find the 5' end before you read. A **copying error**: follow each strand as its own template. A **count**: centromeres for chromosomes, chromatids for DNA. A **crossover**: it changes two chromatids, not four. **Next**: how a chain of amino acids becomes a trait.

Visual: the checklist returns full size as a two-column board, "What you see" and "What you do first", each row lighting on its cue word with the question number badge: "a sequence → which strand? then find 5' (Q2)"; "a copying error → each strand is its own template (Q1)"; "a count → centromeres = chromosomes, chromatids = DNA (Q3)"; "a crossover → two chromatids change, not four (Q4)". On "Next" a chip "Next: from a chain to a trait" with a small folded-blob doodle slides in at the lower right. Hold about 2 seconds.

### 7. key-notes (reuse take: key-notes; quiet, about 60 seconds)
> Here are the key notes. Pause the video if you need more time to copy them.

- Before any trace: which strand, which end, what am I counting.
- Replication: each strand is a template. An unrepaired error first makes a mismatch; after the next copy, one molecule has the changed pair and the other is normal.
- mRNA is a copy of the coding strand (T becomes U), built on the template strand. Read and write it from the 5' end. Use the codon chart with mRNA codons; a stop codon adds no amino acid.
- Meiosis: centromeres count the chromosomes, chromatids count the DNA. Copying doubles the DNA, not the chromosomes. Meiosis I halves the chromosomes (pairs separate); meiosis II halves the DNA again (sister chromatids separate).
- One crossover between two genes changes two of the four chromatids: two original and two new combinations.

Memory aid (large): *Centromeres count the chromosomes; chromatids count the DNA.* Condition tag: "a single, unpaired chromosome counts as one chromatid".

## Teaching checks

- **Does it explain causes?** Why only one molecule changes (each strand templates its own partner; the T strand keeps the right base) (2b, 2c); why the mRNA is a copy, not a pair, of the coding strand, and why direction matters (mRNA read from 5') (3b); why GGC is not read (stop codon releases the chain) (3c); why copying doubles DNA but not chromosomes (sister chromatids share one centromere) (4b); why meiosis I halves chromosomes but not chromatid count per chromosome (4c); why only two products are new (the crossover joins two non-sister chromatids) and why the plant's overall share is lower (crossovers between these genes happen in only some cells) (5b to 5d).
- **Worked-example rule.** One reasoning stage per scene; task line, stimulus and givens stay through each question; earlier questions are cleared; result lines land on their spoken cues. Q3 keeps the count table as the one established result.
- **Response opportunities.** Four, each 10 s with the countdown and every demand and condition visible (2a, 3a, 4a, 5a). Nothing answer-bearing during the holds; the checklist strip dims.
- **Reading load.** Givens cards of 3 or 4 lines; Q2's 15 tiles are the longest stimulus; the codon chart is the familiar B6c grid. Q4's card has two demands and three short conditions.
- **Term load.** No new terms. "Mismatch" (2b) is glossed in its sentence ("aren't partners, so they pair badly"). "Picogram" is glossed on screen only.
- **Out of scope by design.** Leading and lagging strands; mutation types; recombination frequencies; non-disjunction; anticodons (B6c practised them); mitosis counts (B5a practised them).

## Practice questions and model answers

1. (Q1) A bacterium's DNA has a T-A pair at one spot. In round 1, polymerase adds G opposite the T; not repaired. Both molecules are copied again with no errors. How many of the four molecules have a changed pair, and which pair?
   Model: 1 of 4; G-C in place of T-A. Round 1: A strand + new T (normal); T strand + new G (T·G mismatch). Round 2: normal gives two normal; mismatched: T strand + A (normal), G strand + C (changed). Classic mistake crossed: 2 of 4.
2. (Q2) Coding strand 3' CGGAATAAAGGTGTA 5'. Write the mRNA with ends; give the chain and the number of amino acids.
   Model: read from 5' (right): coding 5' ATG TGG AAA TAA GGC 3'; mRNA 5' AUG UGG AAA UAA GGC 3'; Met-Trp-Lys, 3 amino acids (UAA stop; GGC not read). Classic mistake crossed: reading left to right (Arg-Asn-Lys-Gly-Val). Unspoken: pairing as if template (Ala-Leu-Phe-Pro-His).
3. (Q3) Koala, 2n = 16; G1 testis cell 16 chromosomes, 7.0 pg DNA. Chromosomes and DNA in prophase I, each cell after meiosis I, each sperm.
   Model: 16 and about 14.0 pg; 8 and about 7.0 pg; 8 and about 3.5 pg. Classic mistake crossed: 3.5 pg after meiosis I. Unspoken: 32 chromosomes in prophase I.
4. (Q4) Sweet pea, flower colour and pollen shape genes on one chromosome; plant P L / p l; one crossover between the genes in one anther cell. (a) Alleles in each of the four pollen cells. (b) Given that most other anther cells have no crossover between these two genes, why are new combinations much less than half of this plant's pollen?
   Model: (a) PL, Pl, pL, pl (two original, two new). (b) Only the two chromatids in the crossover become new, so a cell with one crossover between the genes gives half new; most other cells (as given) have no crossover between these two genes, giving only original combinations, so overall new combinations are well under half. Classic mistake crossed: all four cells new.

## Numbers to verify

Self-check (18 Oct). Codons were computed twice by script: once from the standard table string in TCAG order (as ported in B6c, `FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG`) and once from an independently written codon-to-amino-acid dictionary; all 64 entries agree.
- **Q1.** Original T-A. Round 1: A strand templates T (A-T normal); T strand templates G (T·G mismatch). Round 2: A-T gives 2 normal; T·G: T strand templates A (normal), G strand templates C (G-C). Final: 3 normal, 1 G-C. G opposite T is the commonest real misincorporation (a G·T "wobble" mismatch); mismatch repair can fix it, hence the stated condition "not repaired". Correct.
- **Q2.** Written strand 3' CGG AAT AAA GGT GTA 5' reversed is 5' ATG TGG AAA TAA GGC 3' (coding). mRNA 5' AUG UGG AAA UAA GGC 3'. AUG Met, UGG Trp, AAA Lys, UAA stop, GGC Gly (not translated). Chain Met-Trp-Lys, 3 amino acids. Wrong method 1 (read left to right as written, T to U): CGG Arg, AAU Asn, AAA Lys, GGU Gly, GUA Val. Wrong method 2 (pair it as a template, left to right): GCC Ala, UUA Leu, UUU Phe, CCA Pro, CAU His. Both rechecked by the second table. The sequence is illustrative; the screen says so. Firefly light comes from the enzyme luciferase acting on luciferin (correct; not spoken beyond "an enzyme made from one gene").
- **Q3.** Koala 2n = 16 (Phascolarctos cinereus karyotype; science check to confirm against a cited source). Koala genome about 3.4 billion base pairs per haploid set (Johnson et al. 2018, Nature Genetics); 1 pg is about 978 million base pairs, so a diploid G1 nucleus holds about 2 x 3.42 / 0.978 = 7.0 pg. Prophase I: 16 chromosomes, 32 chromatids, 14.0 pg. After meiosis I: 8 chromosomes, 16 chromatids, 7.0 pg each. Sperm: 8 chromosomes, 8 chromatids, 3.5 pg. Check: 4 x 3.5 = 14.0. Correct.
- **Q4.** Sweet pea (*Lathyrus odoratus*) flower colour (purple dominant to red) and pollen shape (long dominant to round) are the classic linked pair found by Bateson, Saunders and Punnett (1905 to 1906). The question uses only the alleles carried, not pollen phenotype (pollen shape in sweet pea is set by the parent plant's genotype, not the pollen grain's own alleles, so the card never says a pollen cell "looks long"). One crossover between the loci involves two non-sister chromatids: products PL, Pl, pL, pl, one each. Meiosis in the anther gives a tetrad of four microspores, each becoming a pollen grain. Recombinant share of all pollen = half the share of meioses with a crossover in the interval (single crossovers only; a cell with two crossovers between the loci can give more than two recombinant products) (not spoken; author note). Correct.
- **Fractions and counts:** none other. **No em dashes** in this file (searched).

## Memory aid check

- **"mRNA is a copy of the coding strand, built on the template strand."** (bank trap.) Exactly the Q2 decision. Assumption: the strand is labelled; when it is not, the promoter direction decides (B6b). Recall only.
- **"Count the centromeres, not the arms."** (bank shortcut.) Extended here as **"Centromeres count the chromosomes; chromatids count the DNA."** (new, not in the bank). Assumptions: DNA amount per chromatid is equal (true for a diploid cell after S phase, ignoring tiny differences between X and Y and mitochondrial DNA); applies after copying and before the chromatids separate, and after separation each single chromosome is one chromatid. The condition tag on the notes screen says so. Needs the science check.
- **"Meiosis I splits the pairs. Meiosis II splits the copies."** (bank insight.) Used as written in 4c; true without conditions at this level.

## Narration length estimate

Re-counted for Revision 2 by script (bold markers removed, narration lines only), at 13.3 characters per second.

| Scene | Characters |
| --- | --- |
| 1 hook | 432 |
| 2a q1-question | 400 |
| 2b q1-first-copy | 289 |
| 2c q1-second-copy | 351 |
| 2d q1-mistake | 199 |
| 3a q2-question | 318 |
| 3b q2-direction | 288 |
| 3c q2-chain | 255 |
| 3d q2-mistake | 187 |
| 4a q3-question | 359 |
| 4b q3-s-phase | 320 |
| 4c q3-divisions | 303 |
| 4d q3-mistake | 178 |
| 5a q4-question | 504 |
| 5b q4-chromatids | 273 |
| 5c q4-four-cells | 311 |
| 5d q4-limit | 321 |
| 6 decision-board | 316 |
| 7 key-notes | 75 |

Revision 2 total: **5,679 characters** (Revision 1 was 5,604; inside 5,500 to 6,800). Speech about 427 s; with 38 s of padding (19 scenes, 2 s each), about 10 s of stated holds, 40 s of countdowns (four) and about 55 s more of the quiet notes hold: **about 9.5 minutes**. Walkthrough speech per question (excluding the question scene): Q1 about 63 s, Q2 about 55 s, Q3 about 60 s, Q4 about 68 s. No split needed.

## Scene list and build ids

All scenes are new to voice except key-notes (standard line, reuse take).

In order: hook, q1-question, q1-first-copy, q1-second-copy, q1-mistake, q2-question, q2-direction, q2-chain, q2-mistake, q3-question, q3-s-phase, q3-divisions, q3-mistake, q4-question, q4-chromatids, q4-four-cells, q4-limit, decision-board, key-notes.

Holds (10 s countdown after the speech, "Pause here to answer." on screen, card on screen during and after): q1-question, q2-question, q3-question, q4-question. key-notes is the quiet notes hold (about 60 s). Lesson key `g01b` suggested (the key `g01` and folder `lessons/g01` are already used by chem-m5-g01; root to confirm). Suggested explainer folder `src/explainer/lessons/bio-m5-g01`. Build: add a `g01b` entry to `build_wave5_bio.py` (same pattern as `b9` and `b10`) once the Status line says "ready to voice"; review evidence paths `checks/g01b-learning-review.md` and `checks/g01b-claude-science-check.md` (to be written).

## Assets

Have (reuse, inspected 18 Oct): `public/assets/biology/b6a-bacterium-v1.png` (painted rod bacterium, cream cytoplasm, pili and one flagellum on black; reads well small at top left); `b5x-chromosome-duplicated-pink-v1.png` (inspected: painted X-shaped pink chromosome, banded, clear centromere waist; a faint red fringe on black edges, as noted for other B5x plates) and its teal partner; `b5x-chromosome-single-pink-v1.png`, `-teal-`; `b5x-cell-dividing-nospindle-v1.png`.

Need (painted, new): `m5x-firefly-glow-v1.png`, `m5x-koala-v1.png`, `m5x-sweetpea-purple-v1.png`, `m5x-sweetpea-red-v1.png`.

Coded: DNA tiles and ladders, mismatch outline, mRNA tiles, codon chart and amino acid beads (computed), count table, chromatid strip with allele beads, pollen-cell outlines, checklist strip and decision board, chips, countdown. No people.

## Codex asset brief (G01, trace practice)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/bio-m5-g01.md`, route entry bio-m5-g01. Brief number: root assigns the next free number after 65.

Paint four plates. Every plate: transparent PNG with a real alpha channel (no white or paper background, no drop shadow box), ink and watercolour botanical or natural history style matching `m5x-pea-tall-v1.png` and `m5x-fly-red-eye-v1.png`, no text, no labels, no arrows, no people, faces or hands, about 2000 px on the long side, subject centred with a small margin.
1. `m5x-firefly-glow-v1.png`: one firefly (a *Photinus*-type beetle) in side view, wings closed, the abdomen's light organ glowing warm yellow-green. Accurate six legs and antennae.
2. `m5x-koala-v1.png`: one koala sitting in the fork of a short eucalyptus branch with a few leaves, side three-quarter view, whole animal visible. Natural grey fur, no cartoon features.
3. `m5x-sweetpea-purple-v1.png`: one sweet pea (*Lathyrus odoratus*) flowering stem with two or three purple flowers (standard, wings and keel visible), a tendril and one pair of leaflets.
4. `m5x-sweetpea-red-v1.png`: the same composition and scale as plate 3 with red flowers, so the two read as a pair.

Report inspection on the dark board background at about 200 px tall (top-left placement) and confirm clean alpha edges with no coloured fringes. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/g01b-provenance.json`.

## YouTube metadata (draft)

- **Title:** Trace a DNA Sequence or a Meiosis Cell: HSC-Style Practice | Year 12 Biology
- **Description:** Practise tracing unfamiliar DNA, mRNA and meiosis questions. Follow a copying error through two rounds of replication, turn a coding strand written backwards into mRNA and an amino acid chain, track chromosome number and DNA mass through meiosis in a koala cell, and list the four pollen cells made after one crossover in a sweet pea. Pause and try each question, then work through it one step at a time. Questions are written for HSCScience in the HSC style; they are not official NESA questions.

  Biology 2017: Year 12 Module 5, Heredity. Practice for modelling DNA replication, meiosis and polypeptide synthesis.
  Syllabus dotpoints (NSW Biology Stage 6, 2017, Module 5):
  "model the processes involved in cell replication, including but not limited to:
  - mitosis and meiosis (ACSBL075)
  - DNA replication using the Watson and Crick DNA model, including nucleotide composition, pairing and bonding (ACSBL076, ACSBL077)"
  "model the process of polypeptide synthesis, including: (ACSBL079)
  - transcription and translation"
  "model the formation of new combinations of genotypes produced during meiosis, including but not limited to:"
  "conduct practical investigations to predict variations in the genotype of offspring by modelling meiosis, including the crossing over of homologous chromosomes, fertilisation and mutations (ACSBL084)"
  Official 2017 course: https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/biology-stage-6-2017

  Prerequisite: DNA copying, mitosis, meiosis, transcription and translation. Next: How a chain of amino acids becomes a trait, and how genes and the environment shape it.

  #Year12Biology #Meiosis #HSCScience
- **syllabusDotpoints:** the four quoted blocks above (the third is the parent stem only; the fourth, B5-IQ4-01, names the crossing over skill Q4 practises, and its practical coverage stays with P01 and P02; added in Revision 2, science check minor 4). `verifyWording`: true.
- **Playlist:** Year 12 Biology: Module 5, Heredity (2017 syllabus). Playlist order 13.

## Review notes for Claude (author, not learner copy)

- **Hard-practice exception.** Walkthroughs run about 25 to 35 s per scene, three scenes per question; this is the content, not end-of-video feedback (AGENTS.md exception). The reviewer should still check that no walkthrough re-teaches a core (each rule is recalled in one clause with a grey tag naming its video).
- **Route order.** G01 sits before B8 (linked genes and recombination frequency). Revision 2 puts the needed condition on the Q4 card ("most other anther cells: no crossover between these two genes"), so part (b) asks students to combine "two of four change" with a given, and B8 still owns why crossover positions vary and the frequency idea.
- **Site numbering doubt.** The commissioning note says G01 practises site lessons L6 to L8 "DNA replication, protein synthesis, meiosis"; on the site L7 is mitosis, and protein synthesis is L10 and L11 (the route's own sources are L6, L8, L10, L11). This design follows the route.
- **Site error noted (not used).** `site-extracts/bio-m5-l11.md` records the site's undirected anticodon "CUU" for GAA; G01 asks for no anticodon.
- **Pronunciation.** "picograms" as written; "7.0" as "seven point oh"; "3.5" as "three point five"; bases spoken as separate letters ("A U G"); "methionine" (meth-EYE-oh-neen), "tryptophan", "asparagine"; "prophase one", "meiosis one" (Roman numerals on screen only).
- **Doubts.** (a) Koala 2n = 16 and the 7.0 pg estimate need a cited source in the science check; fallback "an animal whose body cells have 16 chromosomes and 7.0 units of DNA". (b) The new aid "Centromeres count the chromosomes; chromatids count the DNA" is not in the bank. (c) Q2 speaks 15 letters in 3b; check the voiced pace and allow the codon groups to land one per beat. (d) Resolved in Revision 2: 2b now says a T and a G "aren't partners, so they pair badly"; a G·T wobble pair does form, so "mismatch" (not "no pairing") is the accurate word and is on screen.
- **No em dashes** in this file (searched).
