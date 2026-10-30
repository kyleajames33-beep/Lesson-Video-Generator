# m8c04 learning review

Reviewer: independent AI reviewer, 30 October 2026. Did not author the design. Input: `../lessons/chem-m8-c04.md`, Revision 1, exact SHA-256 `fb0fae710eabf514ce2d71a199ece7be8d75bef9e01cdfd636136a8133d48060`. Reviewed the written narration, planned visuals, attempts, numerical notes and metadata. No actual lesson stills, continuous playback, recorded audio or export was reviewed. Human listening, motion at playback speed and real student learning evidence remain pending. This is not recording or release approval.

Narration independently recounted from > lines, bold markers removed and lines joined within each scene: **6,289 characters**, 18 scenes. Per-scene counts: 390, 448, 647, 396, 477, 542, 532, 382, 332, 349, 239, 172, 249, 297, 183, 347, 232, 75. U+2014 count: 0. The script-count and stated duration are estimates, not measured speech timing.

Main question: How can colour absorption and atomic absorption measure a concentration?

Concrete trace from the stated entry knowledge: A coloured copper species absorbs selected visible light. A spectrum identifies the most sensitive wavelength. AAS atomises a lead sample and measures absorption of characteristic lamp light. Standards convert that absorbance into concentration; 0.113 divided by 0.162 gives 0.698 mg/L, then tenfold dilution gives 6.98 mg/L.

## Keep

Keep the contrast between visible copper and invisible trace lead, the atomising sequence, read-across-then-down guide and the dilution correction. Both attempts keep the full problem visible and use short feedback.

## Boundaries and overlap

The colourimeter, blank and Beer-Lambert symbols are chem-m5-p02 recalls; the copper complex and emission link are c03a recalls. P04 should own making standards and checking practical reliability. c01/c02 are not retaught. The repeated calibration in P04 is warranted by its practical aim.

## Findings

### 1. should fix: 3

Text: "Step through the wavelengths"

Yes, split scene 3 at this sentence. The student must first understand grating/slit selection, then reinterpret a moving wavelength marker as an entire spectrum, then locate lambda max and explain two reasons for it. One uninterrupted 49-second scene changes representation too often.

Repair: Use two scenes with the same narration: one wavelength, then the spectrum. Retain the cuvette/light path as a small reference during the scan. Add at most a one-second settle; remove the existing two-second settle at the end or use the reserved UV sentence cut if necessary. No extra teaching text.

### 2. blocker: 6, 11 and 16

Text: "For trace lead, AAS"

The opening promises guideline-level lead detection, but all spoken demonstrations show a flame. The only furnace distinction is a screen tag. A beginner could select flame AAS for drinking-water lead below 0.005 mg/L.

Repair: In feedback 16 say "For trace lead, graphite-furnace AAS: it can measure much lower concentrations than the flame." Show the furnace atomiser inset as that phrase is spoken and retain lamp/atoms/absorbance. Replace the existing specificity sentence rather than adding a paragraph. Shorten scene 7's "You've seen these energy jumps before" if more time is needed.

### 3. should fix: 5 crossed mistake

Text: "0.0040 without l"

Because l=1.00 cm, omitting it gives the same numerical answer. The crossed value looks correct and students cannot diagnose the intended mistake from a changed number.

Repair: Cross out the missing-path-length equation itself, label it "path length omitted", and keep the correct dimensional substitution beside it. Alternatively use l=2.00 cm and recalculate all linked values. Prefer the equation-only repair, with no extra duration.

Counts: **1 blocker; 2 should fix; 0 optional**. Findings repeated between the two reviews describe the same issues and must not be added as separate defects.

## Checks and remaining limits

The planned questions are exam-style constructed responses, with full cards and countdowns after the spoken prompt. Existing visual plans use apparatus, tissue or data and show changes on named cues; those are useful plans, not playback evidence. Quiet book notes are separate from new reasoning. No unsupported claim of a motion pass is made.

The routine worked-calculation repairs preserve task, equation, units and earlier necessary results. All fourteen official 2019-to-2025 Chemistry and Biology papers were downloaded and searched; relevant question contexts were compared. No close paraphrase was found. The exact comparison and limits for image-only material are in `../assets/brief117-near-match-review.md`. Similar scientific moves and dilution ratios alone do not prove copying; this is not a universal originality guarantee.

Timing: the design is near the 570-second cap. Apply the paired cuts named with repairs, then recount and time the exact voiced revision. Do not solve extra detail by shrinking text or rushing speech.

## Resolution

Resolved in `../lessons/chem-m8-c04.md` Revision 2 (31 Oct; root resolver, Claude PM). Learning findings 2 and 3 are the same issues as science findings 1 and 3, fixed once. Recount by script (sum of "> " lines per scene, bold markers removed): 6,288 characters (Revision 1: 6,289), 19 scenes, about 568 s. Every repair is length-neutral or paid for by a named cut.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (as proposed) | Scene 3 split at "Step through" into scene 3 "UV-visible: one wavelength" and scene 4 "the spectrum, and lambda max", same narration. The fan, slit and cuvette stay as a small reference strip during the scan. The 2 s end hold became a 1 s settle in each, so no time is added. Later scenes renumbered 5 to 19 throughout. |
| 2 (blocker) | Fixed (as proposed, reworded for length) | Feedback 2: "For trace lead, graphite-furnace AAS: lead is colourless, and the furnace measures far lower levels than a flame." It replaces the specificity sentence; the furnace inset returns with lamp, atoms and absorbance. Scene 8 now speaks the furnace: "For the lowest levels, like lead in drinking water, a heated graphite tube replaces the flame." Named cuts in scene 8: "You've seen these energy jumps before." and ", and sensitive enough for trace metals". New plate `m8-graphite-furnace-v1.png` added to the Codex asset brief (flagged to root). |
| 3 | Fixed (the equation-only repair) | Scene 6 crosses the equation "c = A ÷ ε" (label "path length omitted") beside the correct substitution; no number is crossed. No added time. |
