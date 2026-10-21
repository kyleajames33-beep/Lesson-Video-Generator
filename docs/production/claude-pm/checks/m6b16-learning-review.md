# m6b16 learning review: what does cloning copy, and how well does it work?

Reviewer: independent AI reviewer (did not author the design), 21 October 2026.
Input inspected: `../lessons/bio-m6-b16.md` (Revision 1, 21 Oct) read in full; `../../student-learning-review.md`; `AGENTS.md`; the narration of the prerequisite designs `../lessons/bio-m6-b09.md`, `bio-m5-b01.md`, `bio-m5-b06a.md` and `bio-m5-b05a.md`, plus `bio-m6-b07.md`, `bio-m6-b12.md` and `bio-m6-b15.md`, checked for entry knowledge and overlap; `../lessons/bio-m6-b18.md` for the handoff. Narration was recounted with the build parser rules (lines starting "> " joined, bold markers removed): 5,980 characters, matching the design. I reviewed plates by name and by the design's own inspection notes only. There were no stills, voiced preview or audio, so motion is not judged at playback speed. This is a beginner-perspective review, not learner evidence. Human listening is pending. I searched the design for U+2014 and found none.

Main question traced: *Dolly the sheep and a flask of bacteria copying one gene are both called cloning. So what does each kind of cloning copy, how is the copy made, and how well does each do the job it's meant for?* Useful outcome: the student can trace somatic cell nuclear transfer and gene cloning, say whom a clone matches and why it is still not a perfect copy, and assess each kind against its own purpose (reliability, identity, health or usefulness). The student can also tell the two kinds apart by what exists at the end.

## Strengths to keep

- **The hook's white face on a black-faced mother** makes "the clone matches the nucleus donor" something students can see before it is said. The three ewes carry this through scenes 3, 4 and 9.
- **Scene 5's 277 to 29 to 1 funnel and the stuck gene switches** give the cause of low reliability, not just the number. The cause is in plain subject-action sentences ("the egg has to reset those switches, and it often does that only partly").
- **Scene 6 separates evidence from assumption.** It says the flock virus means Dolly's illness can't show early ageing, and the later healthy clones give the counter-evidence. It then turns the verdict into "depends on the purpose", which is the assess skill.
- **The two-column copy board** keeps one visual system and makes the scene 9 test ("what exists at the end?") a look-across comparison.
- **Both attempts are genuine transfer.** One is a new species with new data and a planted bait (the differing patches). The other is a distinguish item whose classic mistake is the site's own exam trap.

## Findings

| # | Severity | Scene | Exact quoted text | Problem (likely student question) | Exact replacement (about the same length) |
| --- | --- | --- | --- | --- | --- |
| 1 | should fix | 7 | "It's called **PCR**, and it heats and cools the DNA over and over, doubling the gene each cycle." | **Mechanism compressed.** Heating and cooling alone do not copy anything. The student will ask, "How does heating make more DNA?" Nothing in the sentence acts on the DNA to build a copy. (Science check finding 1.) | "There's also a way to copy a gene with no cells, called **PCR**. Heat separates the DNA's two strands, then, as it cools, an enzyme copies each one, so every cycle doubles the gene." (177 characters, against 148.) `PcrStrip` cue: the strip splits on "Heat separates" and each half gains a partner on "an enzyme copies each one". The thermometer glyph stays. |
| 2 | should fix | 8 | "Its limits are small: some plasmids end up without the gene, so colonies must be checked." | **Unexplained.** Scene 7 showed the gene sliding into the ring, so the student will ask, "How can a plasmid end up without the gene if they put it in?" The cause belongs to b18. Here a plain statement that the step doesn't always work is enough. | "Its limits are small: the gene doesn't always end up in the plasmid, so colonies must be checked." Grey tag "the gene doesn't always go in: check colonies". |
| 3 | should fix | 10b | "Reliability is low: four live calves from a hundred embryos. ... So it's effective only if this one bull is valuable enough to justify the cost." | **One criterion missing, one verdict blurred.** Scenes 6 and 11 teach three criteria (reliable, identical, healthy or useful), and the card's own table shows 6 born and 4 alive, but the feedback never uses the health given. "Effective only if ... justify the cost" also mixes effectiveness with cost. Scene 6's wording is "worth it". | "Reliability is low: four live calves from a hundred embryos, and two of the six born died. Their nuclear DNA matches the bull's, but patches differ, because patch patterns form during development, not from genes alone. So it's worth it only for a very valuable bull. Saying different patches prove the DNA wasn't copied is the classic mistake." (343 characters, against 351.) Add an `AnsTable` row "health: 2 of 6 calves died" on "two of the six born died", with "calves born: 6" and "alive at one year: 4" underlined. The verdict bar reads "worth it only for a very valuable bull". |
| 4 | minor | 5 | "As an udder cell specialised, chemical tags switched many of its genes off." | Students have already met chemical tags that tighten or loosen DNA on histones (bio-m5-b06a). Recalling that makes "switched off" a mechanism they recognise, not a new idea. | "As an udder cell specialised, chemical tags, like the ones on histones, switched many of its genes off." Screen label unchanged. |
| 5 | minor | 6 | "and in 2024 one of them had kits, returning alleles the living population had lost." | "Kits" is unglossed. "Lost" suggests the alleles had once been in the living population, but Willa never bred (science check finding 4). | "and in 2024 one of them had babies, adding alleles that no living ferret carried." The tag on screen reads "2024: a clone has young (kits)". |
| 6 | minor | 7 | "so by morning one cell becomes billions, all carrying the gene." | "By morning" is a stretch for one cell at a half-hour doubling time (science check finding 2). "All carrying the gene" repeats the sentence before it. | "so by the next day one cell becomes billions." |
| 7 | minor | 3 | method name plus three glosses, three ewe tags, "enucleated egg" label and step tags | This is the busiest scene. The three name glosses and the three grey ewe tags are on screen together early on. | Fade the three name glosses fully (not just dim them) before "the udder of a white-faced ewe". Each ewe tag shows only while its ewe is spoken about, then dims to grey. |
| 8 | minor | 12 (notes) | key note 2: "a body cell from the donor is fused with the empty egg by an electric pulse, which starts division" | The note states Dolly's method as if it were the general one (science check finding 5). | "a body cell from the donor is fused with the empty egg (for Dolly, by an electric pulse), and the egg is stimulated to divide". |
| 9 | minor | whole | 5,980 characters, about 570 s | The design is exactly at the 9.5 minute cap, with no margin for a slower take. Findings 1 to 6 together change the total by about +11 characters. | Named reserve trim, if the voiced take runs over: scene 9's last sentence, "Judge each against its own purpose." (35 characters). Scene 11 says the same thing at once. The ferret sentence stays the second reserve. |
| 10 | minor | 8 | "some plasmids ... colonies must be checked" against b18 scene 6 | There is a small overlap with b18's pick step. After finding 2 it is a one-clause statement with no cause, and b18 supplies the cause, so it is not double-teaching. | Not changed beyond finding 2. |

No blocker.

## Screen load (owner's three bright text items)

Every scene stays within the limit under the clutter rule as written, with finding 7's timing in scene 3. Scene 5 (funnel numbers, chip, screen label) and scene 6 (two tags, chip, verdict lines) depend on each tag fading when the next cue lands. The 10a card with its table is dense because it is the task.

## Checks against the review questions

| Question | Result |
| --- | --- |
| Causes explained? | Yes, after findings 1 and 2. The scenes explain why the clone matches the white-faced ewe (the nucleus carries the chromosomes) and why it is not a perfect copy (mitochondria from the egg; development and environment). They explain why most attempts fail (incomplete resetting of the gene switches), why Dolly's illness proves nothing (a flock virus; healthy later clones), why gene cloning gives billions (each division copies the plasmid) and why one host is enough. PCR's copying step needs finding 1. |
| Plain subject-action sentences? | Yes. One exception was the PCR sentence (finding 1). No mechanism is compressed into bare nouns. |
| Attention earned? | Yes. The hook sets a white lamb against a black-faced mother and asks "a copy of what?". Scene 4 asks "three mothers: which one?". Scene 6's ferret is a surprising current case. |
| Visual medium used? | Yes. There are painted plates for the sheep, eggs, embryo stages, bacteria, dish, bull, calves, rhino and ferret, and the coded parts are abstract (funnel, switches, division tree, meters). No text box sits in a diagram slot. Three new plates (blackface ewe, white-faced lamb, ferret) are still to be painted. Playback not judged. |
| Each narrated change on screen? | Yes, with cue words. This includes the cues for findings 1, 3 and 5. |
| Attempts: "Pause here to answer.", 10 s countdown, card on screen, givens underlined, no givens card? | Yes, for both. 10a: assess, 5 marks, which fits three criteria plus a qualified verdict. The data and the patch observation are on the card, labelled hypothetical. 10c: distinguish, 4 marks, which fits type, product and method for each project. Both cards stay up during and after the countdown. The givens are underlined in the feedback ("100", "4", "skin cells of a prize dairy bull", "patch patterns differed", "prize"; "many copies of one of the rhino's genes", "a living rhinoceros calf"). There is no givens card. |
| Feedback brief, one crossed mistake? | 10b about 26 s ("different patches, so the DNA wasn't copied", crossed out), with health added (finding 3). 10d about 28 s ("both projects make a copy of the rhino", crossed out). No re-teaching. |
| Re-teaches earlier videos? | No. The b01 banana clone is one sentence, plasmids are one clause, mitochondria are one clause, mitosis is one clause without its stages, and b12's banana problem is a silent thumbnail. The b12 northern white rhino in 10c is a new, hypothetical scenario, not a repeat of b12's IVF case. |
| Narration length? | 5,980 characters (5,500 to 6,800 band), about 570 s, at the 9.5 minute cap (finding 9). |
| No people, hands or faces? | Pass. The only plates are sheep, cells, eggs, embryo stages, pipettes without a hand, bacteria, dishes, a bull, calves, a rhino and a ferret. The retired hand plates and the wrong-stage embryo plate are excluded. |
| Australian spelling, no em dashes? | Pass ("specialised", "programme"). No U+2014. |
| One main question; key notes useful? | Yes. The five notes are separate from new reasoning and come with a pause invitation, with finding 8 applied. |
| Memory aids after the explanation, limits stated? | Yes. "The clone matches the nucleus donor" comes after scenes 3 and 4 (mitochondria limit stated). "Gene cloning copies a gene; organism cloning copies an individual" comes after scene 7. |
| Playlist and handoff? | Correct. The narration names ideas, not videos. The handoff to b18 (cut, join, put into a host) matches b18's start. |

## Learner trace (from stated entry knowledge)

1. Hook and scene 2. A student knows natural clones (b01) and the "copies DNA" lane (b09). Pass.
2. Scene 3, nuclear transfer. "Somatic" is glossed and the egg's nucleus is removed before the fusion is shown. Pass, after finding 7's timing.
3. Scene 4, whom she matches. Pass.
4. Scene 5, reliability and its cause. Pass, with finding 4's recall.
5. Scene 6, health and verdict by purpose. Pass after finding 5.
6. Scenes 7 and 8, gene cloning and its effectiveness. Pass after findings 1, 2 and 6.
7. Scenes 9 and 11. Pass.
8. 10a to 10d. Genuine transfer. Pass after finding 3.

## Verdict

**Ready to voice after fixes** (findings 1 to 3; no blocker), subject to the Claude science check and the Codex error check. Repeat this review on the exact voiced preview before full export, including the total running time against the 9.5 minute cap (finding 9) and the feedback timings.

## Resolution

Resolved by the resolving author (Claude), 21 October 2026, in `../lessons/bio-m6-b16.md` **Revision 2**. Narration recounted by script (only lines starting "> ", bold markers removed): **5,985 characters** (Revision 1: 5,980), about 9.5 minutes (570 s), at the cap.

| # | Decision | What changed |
| --- | --- | --- |
| 1 | Accepted (should fix) | Scene 7 now reads "There's also a way to copy a gene with no cells, called PCR. Heat separates the DNA's two strands, then, as it cools, an enzyme copies each one, so every cycle doubles the gene." The enzyme copies; heat only separates. `PcrStrip` cues as proposed. Key note 4 gains "(heat separates the strands, then an enzyme copies each one)". PCR is kept rather than cut. |
| 2 | Accepted (should fix) | Scene 8: "Its limits are small: the gene doesn't always end up in the plasmid, so colonies must be checked." Tag "the gene doesn't always go in: check colonies". |
| 3 | Accepted (should fix) | 10b replaced with the proposed text (343 characters). A health row "health: 2 of 6 calves died" is added, with "calves born: 6" and "calves alive at one year: 4" underlined. The verdict bar reads "worth it only for a very valuable bull". Earlier rows dim as the verdict writes, to hold the three-item limit. |
| 4 | Accepted | Scene 5: "chemical tags, like the ones on histones, switched many of its genes off", with a grey coded histone thumbnail. b06a's histone tags added to entry knowledge and to the recall list. |
| 5 | Accepted, reworded | Scene 6: "have given clones, and in 2024 one of them had babies, adding alleles that no living ferret carried." Tag "2024: a clone has young (kits)". I also removed "now" so the line does not date. Ferret status was rechecked: the Smithsonian's National Zoo reported on 25 Sep 2025 that Elizabeth Ann and Noreen died in 2025. The narration makes no claim that any clone is alive. |
| 6 | Accepted | "so by the next day one cell becomes billions." "All carrying the gene" is cut. |
| 7 | Accepted | Scene 3: the glosses fade fully before "the udder of a white-faced ewe", and each ewe tag shows only while its ewe is spoken about. |
| 8 | Accepted | Key note 2: "(for Dolly, by an electric pulse), and the egg is stimulated to divide". |
| 9 | Accepted, applied now | The named reserve trim, scene 9's "Judge each against its own purpose.", is taken in Revision 2 to absorb the additions. The meters still return silently. New reserves are scene 2's last sentence (68 characters), then the ferret sentence (150). |
| 10 | No change (reviewer's recommendation) | After finding 2, the overlap with b18 is one uncaused clause, and b18 gives the cause. |

The design also took the science check's minors (see that file). No finding was declined. Still open: the Codex error check, and repeating this review on the exact voiced preview, including total running time against the 9.5 minute cap.
