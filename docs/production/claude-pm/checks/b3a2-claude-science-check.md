# B3a part 2 science check (Claude, independent)

Checked `lessons/bio-m5-b03a2.md`, Revision 3: all quoted narration, Visual text, key notes, the "who does what" strip, attempt items, model answers and the asset brief, against `site-extracts/bio-m5-l04.md` and the NSW 2017 Stage 6 Biology syllabus (Module 5, hormonal control of pregnancy and birth in mammals). No stills exist, so no screen checks.

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | science | 2b, 2d, 8a, key note 1: "tells the pituitary to release less FSH and LH"; "the pituitary senses progesterone" | Progesterone's main feedback site is the hypothalamus, where it lowers GnRH pulse frequency, reducing LH more than FSH ([UC reproductive physiology](https://med.uc.edu/landing-pages/reproductivephysiology/lecture-4/hypothalamic-pituitary-ovarian-axis), [PMC review](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5556103/)). "Only the pituitary" is a simplification the site shares. | Low severity. Accept as the site model, or say "the brain (hypothalamus and pituitary)". |
| 2 | science | 8a and item 1 model: "FSH and LH fall, so no follicle grows and she does not ovulate" | For real progestins the LH surge is blocked but FSH may be little affected and follicles may still grow; traditional progestin-only pills inhibit ovulation in only about 50 to 70% of users ([review](https://www.ejgm.co.uk/download/current-knowledge-of-progestin-only-pills-11217.pdf)). The stem's hypothetical hormone "copies progesterone's action" at late-pregnancy level, so it is self-consistent, but "no follicle grows" is not a general fact. | Keep the stem; lead the model with "LH stays low, so no egg is released", or say follicles "do not mature fully". |
| 3 | science | 4a narration, key note 3: "The stretch sends nerve signals to the brain, and the pituitary releases oxytocin" | The cervical stretch (Ferguson) reflex is established in animals; a review says it is "observed in animals but not established in humans", and a 2024 AJOG review calls it a feedforward reflex ([Ferguson reflex](https://en.wikipedia.org/wiki/Ferguson_reflex), [AJOG 2024](https://pubmed.ncbi.nlm.nih.gov/38462255/)). Standard HSC teaching, so not wrong for the course. UNVERIFIED as a settled human mechanism. | No change for the course; any caveat belongs in author notes only. |
| 4 | science | Asset brief plate 1: "narrow, firm, closed canal" at full term | At term the cervix ripens (softens) before labour; "firm" is the early-pregnancy state. Affects painting only. | Use "narrow, long, closed canal"; drop "firm". |

## Verified, no error

- FSH grows a follicle; an LH surge triggers ovulation; the empty follicle becomes the corpus luteum making progesterone (2a, note 1). Correct.
- Pregnancy: hCG keeps the corpus luteum going, the placenta then makes progesterone, which stays high (2d). Correct (hand-over at about 7 to 9 weeks).
- No pregnancy: the corpus luteum breaks down about 2 weeks after ovulation, progesterone falls, FSH rises, next follicle grows (2d graph). Correct.
- Progesterone keeps uterine muscle calm; oestrogen rises late in pregnancy and raises responsiveness to oxytocin (3). Correct: term oestrogen raises myometrial oxytocin receptor number and sensitivity ([AJOG 2024](https://pubmed.ncbi.nlm.nih.gov/38462255/), [Giraldi 1990 review](https://research.regionh.dk/en/publications/oxytocin-and-the-initiation-of-parturition-a-review/)). The video correctly avoids "oestrogen triggers labour" and "progesterone falls before birth", and says the first trigger is "still being worked out".
- Birth positive feedback (stretch, oxytocin, stronger contractions, more stretch, ends at delivery): correct as the standard textbook example (see finding 3). "Nothing in this loop turns it down" is a model statement; oxytocin receptor desensitisation in advancing labour is reported only in a conference abstract (UNVERIFIED, no change needed).
- Oxytocin is released from the posterior pituitary and prolactin from the anterior; "the pituitary releases" both is an acceptable simplification.
- Lactation: prolactin makes milk; oxytocin contracts the cells around the alveoli to eject it; suckling releases both; high progesterone and oestrogen hold milk production back in pregnancy and the fall after the placenta is delivered allows copious milk production ([Lactation](https://en.wikipedia.org/wiki/Lactation), [Osmosis](https://www.osmosis.org/learn/Physiology_of_lactation:_Nursing)). Attempt item 2 and its model are correct.
- Item 3, loop definitions, thermostat analogy (including heater switching on when cold): correct. "Most hormone loops are negative; birth is one of the few positive ones" is true as stated.
- Memory aids: "oxytocin squeezes" (uterus and breast) and "prolactin is pro-lactation" are true; "swift birth" etymology is correct (not in learner copy). Strip row "FSH and LH: grow a follicle and release the egg" is a fair summary.
- Quantities: "about nine months", "about once a month". No other numbers.
- Term-uterus plates: head down, cord to placenta, cervix shortens and widens before delivery. Correct; no birth depicted.
- Copy: no U+2014; no production words in learner copy; "painful" appears only in the student's wrong sentence.

Count: 4 findings (2 and 4 low to moderate, 1 low, 3 UNVERIFIED as a settled human mechanism). UNVERIFIED: Ferguson reflex in humans; oxytocin desensitisation limiting "nothing turns it down"; FSH behaviour under high-dose progestin.

## Resolution (Claude science check)

Applied to `lessons/bio-m5-b03a2.md` (revision 4, 12 Oct).

1. Finding 1 (feedback site): kept the site's pituitary wording in the narration. Added a screen-only note "the hypothalamus above it is involved too" on the 2b loop diagram, and an author note in the lesson's review notes. Resolved.
2. Finding 2 (real progestins): scene 8a and the item one model now lead with "LH stays low, so no egg is released, and FSH is turned down too". The stem is unchanged. Author note added. Resolved.
3. Finding 3 (cervix stretch reflex): no change to the narration or key note 3, as it is standard HSC teaching. Author note added, covering the human evidence and oxytocin desensitisation. Resolved.
4. Finding 4 (cervix at term): asset brief plate 1 now reads "a narrow, long, closed cervical canal" with no "firm". Resolved.

Word count after these changes: 1,179 narrated words (one more than revision 3), runtime near 9.3 minutes. No U+2014 in either file.

## Codex check resolution (13 Oct, Claude)

Codex `checks/b3a2-check.md` (2 science findings), both accepted and fixed in the design (Revision 5) and the recording:

1. "No new follicle grows" overstated: follicles can still grow without ovulating. Scene brake now says "With less FSH and LH, no follicle matures enough to release an egg." Key note 1 matches. Visuals show the follicle staying short of ripening and the egg staying in it ("no egg released"); the attempt feedback label no longer says "no growing follicle". The explain-answer line "no follicles mature and no egg is released" was already accurate and is unchanged.
2. "Milk production begins" after the placenta leaves: small amounts are secreted in late pregnancy. Scene milk-trigger now says "those levels fall, and milk production increases", and the label matches.

Re-recorded only scenes brake and milk-trigger (take02, 698 characters, same voice and settings); the other 16 scenes reuse take 1 audio by hash. Practice hold set to 10 s. Runtime 8:42.
