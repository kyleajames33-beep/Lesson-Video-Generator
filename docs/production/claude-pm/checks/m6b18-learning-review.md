# m6b18 learning review: how is recombinant DNA made, and how does it get into a host?

Reviewer: independent AI reviewer (did not author the design), 21 October 2026.
Input inspected: `../lessons/bio-m6-b18.md` (Revision 1, 21 Oct) read in full; `../../student-learning-review.md`; `AGENTS.md`; the prerequisite designs, checked for entry knowledge and overlap:
- `../lessons/bio-m6-b16.md`
- `bio-m6-b09.md`
- `bio-m5-b06a.md`
- `bio-m5-b06b.md`
- `bio-m6-b05.md`
- `bio-m6-b10.md`
- `bio-m6-b12.md`
- `bio-m6-b13.md`

I recounted the narration with the build parser rules: 5,658 characters, matching the design. Plates were reviewed by name and by the design's own inspection notes only. There were no stills, voiced preview or audio, so motion is not judged at playback speed. This is a beginner-perspective review, not learner evidence. Human listening is pending. I searched the design for U+2014 and found none.

Main question traced: *Bacteria don't make human insulin, and cotton doesn't make a caterpillar poison, yet both now do. So how do scientists cut out a useful piece of DNA, join it into a carrier, get it into a host, and make sure the host actually uses it?* Useful outcome: the student describes the chain in order, naming the tool responsible at each step: intron-free DNA, restriction enzyme, ligase, transformation, selection and screening, then expression. The student explains why a chromosomal human gene fails in bacteria, and describes one medical and one agricultural transgenic application.

## Strengths to keep

- **Each step's cause comes before its name.** The staggered cut is shown before "sticky ends". The paired ends with open backbones are shown before ligase. Weak base-pair bonds come before "for good".
- **Scene 6's "surviving doesn't prove the gene is there"** puts a site correction into the teaching. 10b then crosses out exactly that mistake.
- **Scene 7 separates copying from using.** The promoter and the shared code are each one recall clause. The two ribosomes reading one codon make "shared code" visible.
- **One toolchain bench** fills a station per scene. That gives a single visual system, and it supports the four-word aid in scene 9.
- **Both attempts are transfer.** 10a is a new product (chymosin, which b09 introduced as a product only). 10c is a changed case (two copies of one gene with different results).

## Findings

| # | Severity | Scene | Exact quoted text | Problem (likely student question) | Exact replacement (about the same length) |
| --- | --- | --- | --- | --- | --- |
| 1 | should fix | 2; Decisions; entry knowledge | "A human gene usually contains **introns**, stretches that our cells cut out of the mRNA before it's read." The design says introns are "first teaching" (Added beyond the site (a)), "Not assumed: introns", and lists intron as a new spoken term. | **Wrong entry knowledge.** bio-m6-b05 already taught introns: "Many genes contain **introns**, stretches cut out of the mRNA before translation." Presenting introns as new re-teaches an earlier video and miscounts the term load. | Scene 2: "First, you need the right piece of DNA. Remember that most human genes contain **introns**, stretches our cells cut out of the mRNA before it's read." The `SpliceStrip` stays as a recall visual. Add bio-m6-b05 to the background prerequisites, move "introns" from "Not assumed" to entry knowledge, and drop it from the new-term count (seven new spoken terms). |
| 2 | should fix | 8 | "Plants need a different carrier." | **Cause missing.** The student has just seen heat shock put plasmids into bacteria and will ask, "Why can't you do that to a plant?" The scene names the new carrier but never says what problem it solves. | "Plants need a different carrier, because the gene has to get through a tough cell wall and into the plant's own chromosomes. A soil bacterium called **Agrobacterium** naturally inserts a piece of its plasmid DNA into a plant cell's chromosomes." On "tough cell wall" the `b6a-plant-cell-v1.png` wall outline pulses. On "own chromosomes" the `AgroTransfer` strip ends inside the nucleus. |
| 3 | should fix | 5 | "So scientists chill them in a calcium chloride solution, add the plasmids, then give them a quick heat shock, which briefly lets DNA through the membrane." | **Named reagent with no action.** The student will ask, "What does the calcium chloride do?" "Through the membrane" also hides that a bacterium has a wall and two membranes (science check finding 4). | "So scientists chill them in calcium chloride, which helps DNA stick to the cell surface, add the plasmids, then give a quick heat shock, which briefly lets DNA into the cell." On "stick to the cell surface" the rings settle against the cell outline before the uptake crossfade. |
| 4 | should fix | 6 (visual) | "`m6-antibiotic-colonies-before-v1.png` ... crossfades to `m6-antibiotic-colonies-after-v1.png` (the same dish with a few colonies)" | **Misleading change.** A crossfade on one dish suggests that adding antibiotic kills colonies that have already grown. In the real step, bacteria from one tube are spread on two kinds of plate. The student could leave thinking selection removes colonies from a plate. | Show the two plates side by side, both fed by a short coded arrow from one tube glyph. The left plate is tagged "no antibiotic", the right "with antibiotic". The narration is unchanged. On "only they grow into colonies" the colonies on the right plate grow in from nothing (scale up from zero), so selection reads as "only these could grow". |
| 5 | minor | 8 | "Selective breeding can't do this, because it only reshuffles alleles a species already has." | **Recall of b09's contrast, with an absolute.** b09's second attempt already compared selective breeding with recombinant DNA for pest-resistant cotton, so this sentence repeats it. The absolute "only reshuffles" also misses crosses with related species and new mutations (science check finding 1). Cutting it also makes room for finding 2. | Cut the sentence from the narration (−91 characters). Keep the contrast in key note 5 with the corrected wording (science check finding 1) and as the silent b09 lane 2 icon. |
| 6 | minor | 8 | "An organism carrying DNA from another species is **transgenic**." | "Carrying" would also cover natural gene transfer. The point is DNA added by these methods. | "An organism given DNA from another species this way is **transgenic**." The on-screen gloss reads "DNA from another species, inserted". |
| 7 | minor | 4 | "But they're only held by weak bonds between the bases." | Students already know these are hydrogen bonds (bio-m5-b04, b06b: "breaking the hydrogen bonds between the bases"). Naming them links back. | "But they're only held by weak hydrogen bonds between the bases." |
| 8 | minor | 9 | "and pick the hosts that carry it." | "It" could mean the plasmid. Scene 6's point is that the hosts must carry the gene. | "and pick the hosts that carry the gene." |
| 9 | minor | 12 (notes) | key note 4: "Medicine: bacteria make insulin chains, which are joined and purified." | The order is reversed (the chains were purified, then joined), and the present tense describes the 1978 to 1982 method as today's (science check finding 3). | "Medicine: the first insulin bacteria made the two chains, which were purified and joined; today engineered microbes in fermenters make insulin." |
| 10 | minor | 2 and 7 | the insulin two-chain fact appears in both scenes | The design's fallback was to move it. The two mentions do different jobs: scene 2 gives the source (DNA built from scratch) and scene 7 gives the product (chains made apart, then joined). Each is one sentence. | Not changed. Scene 2's sentence stays the first trim if the voiced take is long. |
| 11 | minor | 10c | the chromosomal copy against the mRNA copy | The item is close to scene 2. It still asks for the cause chain plus the rejection of "different code" and "promoter" as causes, so it is a bounded explain item, not recall of a sentence. | Not changed. |

No blocker.

## Length after fixes

Findings 1, 2, 3, 6, 7 and 8 add about 160 characters and finding 5 removes 91. The new total is about 5,727 characters, about 9.2 minutes, inside the cap and above the floor. Scene 8 becomes about 626 characters (about 47 s), the longest scene. Each of its cues still lands one at a time.

## Screen load (owner's three bright text items)

Every scene is within the limit under the clutter rule as written. Scene 2 (term, gloss, wrong-protein tag, cDNA label) and scene 8 (term, gloss, tag, screen label) are the busiest, and each depends on the previous tag fading as the next cue lands. The 10c card is dense because it is the task.

## Checks against the review questions

| Question | Result |
| --- | --- |
| Causes explained? | Yes, after findings 2 and 3. The video explains why intron-free DNA is needed, why sticky ends join, why ligase is needed, why the marker selects, why survival is not proof, why the host reads a human gene (a promoter it recognises and the shared code), why plants need Agrobacterium (finding 2), and how the trait reaches the seeds. |
| Plain subject-action sentences? | Yes. Exceptions were calcium chloride (finding 3) and "a different carrier" (finding 2). No mechanism is compressed into bare nouns. |
| Attention earned? | Yes. The hook "bacteria don't make human insulin ... yet both now do" sets a puzzle that the toolchain answers. |
| Visual medium used? | Yes. Painted plates cover the bacterium, phage, uptake pair, water bath, dishes, insulin vial, fermenter, cotton, plant cell and tissue-culture jars. The coded parts are abstract (strands, enzyme blobs, codon match). No text box sits in a diagram slot. Two plates (water bath, fermenter) are still to be painted. Scene 6 needs finding 4. Playback not judged. |
| Each narrated change on screen? | Yes, with cue words, including those for findings 2 to 4. |
| Attempts: "Pause here to answer.", 10 s countdown, card on screen, givens underlined, no givens card? | Yes, both. 10a: describe, 5 marks, which fits cut, paste, put in, pick and check. Its card supplies the intron-free gene and the ampicillin marker. 10c: explain, 4 marks, which fits introns kept, bacteria cannot splice, the cDNA lacks introns, and the shared code and promoter. Both cards stay up during and after the countdown. Givens are underlined in the feedback ("intron-free copy of the calf gene", "a plasmid", "resistance to the antibiotic ampicillin"; "taken directly from human chromosomal DNA", "made from the mRNA", "a promoter recognised by bacteria"). There is no givens card. |
| Feedback brief, one crossed mistake? | 10b is about 28 s and crosses out "every surviving colony carries the gene". 10d is about 26 s and crosses out "bacteria use a different genetic code". There is no re-teaching. |
| Re-teaches earlier videos? | Recall only after findings 1 and 5. Introns come from b05 (finding 1). The promoter and codons come from b06b and b06c as one clause each. b16's colony clone is one clause. The b09 breeding contrast is cut (finding 5). The Bt cotton benefits and risks from b10 and b13 are not repeated. |
| Narration length? | 5,658 characters (Revision 1), about 5,727 after the fixes, about 9.2 minutes. |
| No people, hands or faces? | Pass. "For people with diabetes" appears in the narration only. No human figure is drawn, and the retired hand plates are excluded. |
| Australian spelling, no em dashes? | Pass ("tumour", "recognises", "litres"). No U+2014. |
| One main question; key notes useful? | Yes. Five notes, separate from new reasoning, with finding 9 applied. |
| Memory aids after the explanation, limits stated? | Yes. "Cut, paste, put in, pick" comes after scenes 3 to 6, with the intron-free first step and the second check stated as its limits. "Same enzyme, matching sticky ends" carries the on-screen note about compatible enzyme pairs. |
| Playlist and handoff? | Correct. The opening follows b16's handoff. "Next, which benefits of these technologies really hold up" matches b19. The prerequisites should add bio-m6-b05 as background (finding 1). |

## Learner trace (from stated entry knowledge)

1. Hook: b09 named recombinant DNA, insulin bacteria and Bt cotton. Pass.
2. Scene 2, the right DNA. Pass after finding 1 (recall, not new).
3. Scene 3, cut. Pass.
4. Scene 4, paste. Pass, with finding 7's recall.
5. Scene 5, put in. Pass after finding 3.
6. Scene 6, pick. Pass after finding 4.
7. Scene 7, use. Pass.
8. Scene 8, plants. Pass after findings 2, 5 and 6.
9. Scenes 9 and 11. Pass after finding 8.
10. 10a to 10d. Genuine transfer. Pass.

## Verdict

**Ready to voice after fixes** (findings 1 to 4; no blocker), subject to the Claude science check and the Codex error check. Repeat this review on the exact voiced preview before full export, including the length of scene 8 and the feedback timings.

## Resolution
