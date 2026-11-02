# Year 11 Physics FA2 V30 (Physics 2025, Year 11, Focus Area 2): Why do two sources make a fixed pattern of strong and calm lines, and where do the lines fall? (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa2-v30`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: none new; v29's dipper bar, v18's ripple tank, v01's two-dial signal generator, v04's loudspeakers, the FA2 microphone, fa1's metre rule, the FA2 wave driver and fa1's retort stand reused by name.

Narration 5,446 characters, 17 scenes, about 507 s (8.5 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: thirtieth video of the Year 11 Physics (2025) Focus Area 2 route and the interference pattern video; it applies v29's superposition to two sources. Templates: `phys-y11-fa1-v22.md` (concept format, section list, calculations as task, equation and grouped givens) and `phys-y11-fa1-v24.md` (apparatus conventions); house conventions and the FA2 colour key from `phys-y11-fa2-v01.md` to `phys-y11-fa2-v29.md` (Revision 1). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa2-waves/lesson22.sa.html` (intro and hook, warm-up, intentions and key terms, misconceptions 1 and 2, card 1 the fixed pattern with its figure, true or false, card 2 path difference with `we-1` and the quick check, activity 1, odd one out, card 3 why the pattern is steady and symmetric, last check, matching task, Q1 to Q3, retrieve). Route entry: `phys-y11-fa2-v30` in `../../phys-y11-video-route.json` (proposed; coverage "owned-action"; placeholder question rewritten below). Route start: "Start with Interference Patterns. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply interference patterns? Teach only the listed actions; the next video owns its separate question." Route next: "phys-y11-fa2-v31: How can I explain and apply standing waves?" (placeholder; this video's handoff chip uses the rewrite "Why does a wave meeting its own reflection make a pattern that stays in place?", which root aligns if v31's designer words it differently).

**Opening frame (v29's actual handoff, Revision 1, 3 Nov).** v29's scene 18 ends with the memory line "Crest on crest, it grows. Crest on trough, it goes." small at the top; the ripple tank top view with the dipper bar plate (`phys-y11-ripple-tank-dippers-v1.png`) small at the top right, two coded point sources "S₁" and "S₂"; circular crests overlapping; fan-shaped strong lines (navy) and calm lines (pale gold dashes) highlighted; a small coded clock ticking while the crests move and the lines stay put; chips "the lines don't drift?" and "where do they fall?"; chip "Next: Why do two sources make a fixed pattern of strong and calm lines, and where do the lines fall?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands, ears or body outlines (the site's "walk slowly across the room" hook and "you stand" warm-up become a microphone sliding along a track by code and a marked point in the tank; no listener); apparatus painted (ripple tank and dipper bar, signal generator, loudspeakers, microphone, metre rule, wave driver, retort stand); crests, paths, the pattern, the level bar and readouts coded; one reasoning stage at a time; the worked example as task, equation and grouped givens with units; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake; original questions; key-notes hold; Australian spelling; no em dashes; v05 (v = fλ), v10 and v12 (a wave's energy goes with its amplitude squared), v29 (superposition, in phase, half a wavelength out of phase) recalled in a sentence at most.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 2, group "Wave behaviours"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON:

- P25-FA2-G3-15 `ci37c12aba`: "Explain how the superposition of waves produces interference patterns with observable maxima and minima"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

**Boundary:** starts from v29's handoff (above); the prediction (a point on the centre line); the centre line as a maximum, with maximum and minimum defined; path difference defined and shown; half a wavelength gives a minimum; the rule for in-step sources (whole wavelengths, maximum; a whole number plus a half, minimum); why the pattern is fixed (geometry plus coherent sources) and why it washes out if the frequencies differ; the second prediction (do waves arrive at a minimum?); both waves arrive; where the energy goes (amplitude squared: four times at a maximum, zero at a minimum, twice on average); two loudspeakers and a microphone on a track; the site's worked example at one microphone position; what sets the line spacing, and no calm lines if the sources are closer than half a wavelength; the memory aid; two attempts. Not taught: the angle or fringe-spacing formulas (d sin θ = mλ, Year 12 double slit); sources out of phase with each other (the rule is stated for in-step sources); standing waves (v31); light interference (Year 12; one grey tag at most).

## Decisions

- **Learner question rewritten (route placeholder).** "Why do two sources make a fixed pattern of strong and calm lines, and where do the lines fall?" One causal question with its two parts tied: why fixed (path difference set by position; coherent sources) and where (the path difference compared with the wavelength). It is v29's handoff chip (open decision 1). The answer, built in order: the prediction (1); the centre line is strong, because equal paths mean in-step arrival (2); half a wavelength of path difference gives a calm point (3); the rule (4); why the lines stay put (5); both waves still arrive at a calm line, and the energy is moved, not lost (6, 7); the same in sound (8); a worked point (9); what sets the spacing (10); memory aid (11).
- **The hook (site warm-up, made a prediction on v29's frame; no person).** A marked point "P" on the centre line, with two equal coded distance lines from S₁ and S₂; "Will the water there be strong, or calm?" 3 s, chips "strong?", "calm?". Answered in 2.
- **The cause made visible: `PathCompare` (new).** For any marked point, the two paths from S₁ and S₂ draw as lines with crest beads moving along them; then the two paths unroll side by side as straight strips starting from the sources at the same instant, so the extra length (the path difference) shows as an overhang at the end, measured in wavelengths with a bracket ("½λ", "1λ"). Under the strips, the two waves arriving at the point are drawn on stacked axes with their sum (v29's `PhaseSlider`, frozen at the shift the path difference sets). Every claim about a point is read from this display.
- **The rule (site card 2; stated for in-step sources).** "Maximum: path difference = mλ; minimum: path difference = (m + ½)λ, m = 0, 1, 2, ..." written once in an equation strip with the plain words above it ("a whole number of wavelengths", "a whole number plus a half"). The condition "for sources moving in step" is spoken in 4 and 11 and stays on screen as a grey tag.
- **Why the pattern stays fixed (site card 3 and Q3).** Two causes, each said: each point's path difference is set by where it sits; the dippers keep in step (same frequency, fixed timing): coherent ("coherent: keeping in step, with the same frequency and a fixed timing"). The contrast is shown: two motors at slightly different frequencies; the strong and calm lines sweep sideways and blur (site Q3's "washes out"). The site's odd-one-out (very different frequencies) is the same idea.
- **Prediction 2 (3 s, scene 6; site misconception 2).** "On a calm line, the water barely moves. Are any waves arriving there at all?" Chips "no waves arrive?", "both waves arrive?". Answered in 7.
- **Where the energy goes (site lesson 21 Q3, applied here where it fits; v29 site correction 1).** v10 and v12: a wave's energy goes with its amplitude squared. One dipper alone: amplitude A, energy E (relative). At a maximum: amplitude 2A, energy 4E. At a minimum: 0. Averaged across the pattern: 2E, what two dippers supply. Shown with energy bars (hollow gold outline, filled gold) on a strong and a calm line and a running average bar. Author note b gives the averaging.
- **Sound (site hook and card 3's speaker model, without a listener).** Two loudspeakers side by side on a bench (`phys-y11-loudspeaker-v1.png` with `phys-y11-loudspeaker-cone-v1.png`), both connected to the two-dial signal generator (`phys-y11-signal-generator-v1.png`, root decision 13); the microphone (`phys-y11-microphone-v1.png`) on a coded track beside the metre rule (`phys-y11-metre-rule-v1.png`), sliding by code; its level bar (teal) rises and falls. A coded plan view above shows the speakers, the pattern's strong and calm lines (navy and pale gold, as in water) and the microphone's track crossing them. Values: λ = 0.40 m (an 850 Hz note at 340 m s⁻¹; only λ is spoken), speakers 1.20 m apart (author note c).
- **Worked example (site `we-1`, unchanged numbers).** λ = 0.40 m; distances 3.00 m and 3.60 m; path difference 0.60 m; 0.60 ÷ 0.40 = 1.5; a minimum. Placed at one quiet spot on the microphone's track (author note c gives a consistent position). Layout: task strip, equation strip "path difference = |S₁P − S₂P|; compare with λ", givens group with units; one row per cue.
- **What sets the spacing (site misconception 1, corrected).** Qualitative, each with its cause: longer wavelength, lines further apart (the path difference must change by more to reach the next half wavelength); sources further apart, lines closer (the path difference grows faster as you move sideways); sources closer than half a wavelength, no calm lines at all (the path difference can never reach half a wavelength). Shown with `TwoSourcePattern` changing λ, then the separation. The site's "a stable pattern forms whenever the two sources are coherent ... regardless of spacing" is corrected (site correction 1).
- **Attempts (original, HSC style).** (A1, ripple tank) λ 1.2 cm; X: 9.6 cm and 7.2 cm, path difference 2.4 cm = 2λ, maximum; Y: 8.4 cm and 6.6 cm, path difference 1.8 cm = 1.5λ, minimum. Crossed: "no waves reach Y". (A2, loudspeakers) 680 Hz, 340 m s⁻¹: λ = 0.50 m; distances 4.25 m and 5.00 m: path difference 0.75 m = 1.5λ, minimum; separate generators at slightly different frequencies: not coherent, the pattern drifts and washes out. Crossed: "the pattern stays fixed as long as both play roughly the same note".
- **Mistake scene:** none separate. "At a minimum, no waves arrive" (6, 7, feedback 1 crossed; site misconception 2); "energy is destroyed at the calm lines" (7); "any two sources make a steady pattern" (5, feedback 2 crossed); "sources close together always make a pattern" (10; site misconception 1 corrected); "an even path difference in centimetres means a maximum" (9: always compare with λ; site quick-check distractor).
- **Memory aid:** "Whole wavelengths: in step, strong. A half left over: out of step, calm." Spoken with its condition "for sources moving in step" (see "Memory aid check").
- **Handoff (route next, rewritten).** Board change: the FA2 wave driver plate (`phys-y11-wave-driver-v1.png`) at the left, a coded string running right to a clamp on the retort stand plate (`phys-y11-retort-stand-v1.png`); an amber-outlined travel arrow on a wave going right and a second on its reflection coming back; three small teal dots on the string that stay on the rest line while the rest of the string moves; chips "a wave and its own reflection?" and "points that never move?"; then "Next: Why does a wave meeting its own reflection make a pattern that stays in place?". This is the frame v31 opens on.
- **Site sources used:** intro (fixed pattern; path difference decides: 2 to 4); hook (speakers, rising and falling volume: 8, without a listener); warm-up (equal distances: 1, 2); key terms (interference pattern, path difference, maximum, minimum: 2, 3); misconceptions 1 and 2 (10, 6, 7); card 1 and its figure (lines of maxima at 0 and 1λ, minima at ½λ: 2 to 4); true or false (true: 5); card 2 and `we-1` (4, 9); quick check (2λ: maximum: A1's form); activity 1 (X and Y: kept for students; A1 uses different numbers); odd one out (5); card 3 (steady because coherent; centre line Δ = 0; ½λ, λ, 3/2λ sequence: 2 to 5); last check (true: 2); matching task (4, 11); Q1 (4); Q2 (0.50 m and 0.75 m: A2 uses its own derived values); Q3 (5, feedback 2).
- **Site corrections (quoted from site lesson 22, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Misconception 1's correction: "A stable pattern forms whenever the two sources are coherent (same frequency, constant phase relationship), regardless of spacing, though the spacing changes how far apart the maxima are." If the sources are closer together than half a wavelength, the path difference can never reach ½λ, so no minima form and there is no observable pattern of maxima and minima. Suggest: "A stable pattern forms for coherent sources at any spacing larger than about half a wavelength; the spacing changes how far apart the maxima are. Sources closer than half a wavelength give no minima."
  2. Key terms: "Maximum (antinode)" and "Minimum (node)". In a two-source pattern these are usually called antinodal and nodal lines; the single-word labels collide with the standing-wave nodes and antinodes of lessons 23 and 24, which are fixed points on one string. Suggest: "Maximum (on an antinodal line)" and "Minimum (on a nodal line)". (Suggestion, not an error.)
  3. Q2 model answer: "the sound is very quiet or, for equal amplitudes, silent at that point". Correct; but the two speakers are at different distances from the point (the path difference is 0.75 m), so the amplitudes arriving are not exactly equal and the minimum is not perfectly silent. Suggest: "very quiet (not perfectly silent, because the waves arriving from the farther speaker are slightly weaker)". (Suggestion.)
  - Checked and correct: card 1 and its figure; card 2's conditions; `we-1` (1.5λ, minimum); the quick check (A); activity 1's structure; odd one out (C); card 3; last check (true); the matching task; Q1 and Q3 model answers.
- **Cause chain taught, in order:** (1) a prediction that needs a cause (1); (2) in-step sources, equal paths, in-step arrival: a maximum (2); (3) an extra half wavelength of path puts one wave half a cycle behind: crest on trough, a minimum (3); (4) whole wavelengths, maximum; a half left over, minimum (4); (5) fixed geometry plus coherent sources keep each point's result fixed; different frequencies make it drift (5); (6) both waves still arrive at a minimum (6, 7); (7) energy goes with amplitude squared, so it is moved from minima to maxima, not lost (7); (8) sound gives the same pattern (8); (9) a worked point (9); (10) the wavelength and the source spacing set the line spacing; too close, no minima (10); (11) the memory aid (11).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (waves carry energy; sound from a speaker). From FA2, recalled in a phrase each: v05 (v = fλ), v10 and v12 (energy goes with amplitude squared; loudness), v18 (the ripple tank), v29 (superposition; in phase and half a wavelength out of phase; two dippers make strong and calm lines).
- **Learner-visible vocabulary (plain meaning at first use):** interference pattern (the fixed arrangement of strong and calm places where waves from two sources overlap, scene 1, screen gloss); maximum (a place where the waves always reinforce: strong, loud or bright, 2); minimum (a place where they always cancel: calm, quiet or dark, 2); path difference (the extra distance one wave travels to reach a point, 3); coherent (keeping in step: the same frequency and a fixed timing, 5).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v29's **`TwoSourcePattern`** (two point sources in the ripple tank top view; crests from the summed field; strong lines navy, calm lines pale gold dashes, each labellable with its path difference "0", "½λ", "1λ", "3/2λ"; adjustable λ and separation; a drift mode with a small frequency difference); **`PathCompare`** (new: two paths from S₁ and S₂ to a marked point, crest beads moving along them, unrolling into side-by-side strips with the overhang bracketed in wavelengths; linked to v29's **`PhaseSlider`** showing the two arrivals and their sum); **energy bars** (one-source, maximum, minimum and average bars, hollow gold outlines filling); **microphone track** (the microphone plate sliding along a coded rail beside the metre rule plate, with a teal level bar and a small trace of level against position); **speaker plan view** (coded plan with the two speakers, the strong and calm lines and the track); **wave driver string** (handoff only: a coded string with a travelling wave and its reflection, fixed points marked); `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with a line drawing; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the tank top view (or the speaker plan) across the centre left; `PathCompare` strips and the arrival axes in the right column; working under them.
- **Colour key:** FA2 key (root decisions 3 and 9): water crests navy; strong lines navy, calm lines pale gold dashes (as v28 and v29); path lines and strips navy (from S₁) and slate (from S₂), as v29's wave 1 and wave 2; path difference brackets teal; energy hollow gold; the sum wave ink; level bars teal; wave travel direction amber outline (handoff); crossed items muted red.
- **No human figures.** The microphone slides by code; no listener or walker; the tank point is a marked dot.
- **Author notes (not learner copy):**
  (a) The rule as stated holds for sources in phase with each other. For sources in antiphase the conditions swap; not taught.
  (b) Energy: with equal amplitudes A at a point, the resultant amplitude is 2A|cos(πΔ/λ)|, so the intensity is 4I₀cos²(πΔ/λ), whose average over Δ is 2I₀. Said as "four times one dipper's ... zero ... on average twice". Small differences in arriving amplitude are ignored (site correction 3).
  (c) Speakers: λ = 0.40 m (850 Hz at 340 m s⁻¹), separation d = 1.20 m (S₁ at x = −0.60 m, S₂ at +0.60 m). The worked point P is at about (1.65 m, 2.81 m): 3.00 m from S₂ and 3.60 m from S₁. Directions of maxima far away: sin θ = mλ/d: 0°, 19.5°, 41.8°; minima at 9.6°, 30.0°, 56.4° (not stated; Year 12).
  (d) Spacing: far-field line directions follow sin θ = mλ/d, so the angular spacing grows with λ and shrinks with d; for d < λ/2 no minimum exists (the largest path difference is d). Shown with `TwoSourcePattern`; no formula on screen.
  (e) Drift: two frequencies f and f + Δf make the phase difference at every point change at 2πΔf per second; the pattern moves through one full cycle every 1/Δf s. In the drift demo Δf is small enough that the lines visibly sweep (about one sweep per 2 s on screen, tag "slowed down").
  (f) A1: 9.6 − 7.2 = 2.4 cm = 2.0λ; 8.4 − 6.6 = 1.8 cm = 1.5λ. Dipper separation 4.0 cm (v29's plate), consistent with both points (each path difference less than 4.0 cm).
  (g) A2: 340 ÷ 680 = 0.50 m; 5.00 − 4.25 = 0.75 m; 0.75 ÷ 0.50 = 1.5.
  (h) Pronunciations: "S one", "S two" not said in narration ("one dipper", "the other"); "coherent" as "koh-HEER-unt".

Main question: *v29 showed two dippers make strong and calm lines that don't drift. Why do two sources make a fixed pattern of strong and calm lines, and where do the lines fall?*
Entry knowledge (Stage 5 waves and sound; v05 v = fλ; v10, v12 energy and amplitude squared; v18 the ripple tank; v29 superposition).
Stops after: maxima and minima defined; path difference; the rule for in-step sources; why the pattern is fixed; both waves arrive at a minimum; where the energy goes; the sound version; the worked point; what sets the spacing; the memory aid; two attempts. No angle formula, no light.
Handoff: v31, standing waves (rewritten question).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as in Decisions.

### 1. hook (strong or calm on the centre line?)
> Last time, two dippers made strong lines and calm lines, and the lines didn't drift. Let's work out where they fall. Start with a point on the centre line, exactly as far from one dipper as from the other. Will the water there be strong, or **calm**?

Visual: opens on v29's last frame (the tank top view, the dippers, the pattern, the ticking clock, the chips). The "Next" chip becomes the heading: "Interference patterns" (gloss "interference pattern: the fixed strong and calm places where waves from two sources overlap"); the memory line fades. On "didn't drift" the clock ticks once more while the lines hold still; the clock fades. On "centre line" a dashed grey line draws from the midpoint between the dippers, straight out; on "exactly as far" a dot "P" lands on it and two coded distance lines draw from S₁ and S₂ to P with equal readouts "same distance". On "calm" chips "strong?", "calm?" and a 3-second countdown ring.

### 2. the centre line
> Strong. The dippers move together, so they send out crests at the same moment. Both crests travel the same distance to reach this point, so they arrive together, crest on crest, every time. That's true all along the centre line, so it's a line of strong waves. A place where the waves always reinforce is called a maximum. A place where they always cancel is a **minimum**.

Visual: on "Strong" the chip "strong?" ticks; "calm?" takes a scribble cross. `PathCompare` at P: on "same moment" a crest bead leaves each dipper together; on "same distance" the two paths unroll into side-by-side strips of equal length (no overhang, bracket "path difference 0"); on "crest on crest" the arrival axes at the right show the two waves in phase and their tall sum (v29's `PhaseSlider`). On "all along the centre line" the whole centre line glows navy. On "maximum" a gloss "maximum: the waves always reinforce (strong, loud or bright)"; on "minimum" the nearest calm line pulses pale gold with a gloss "minimum: the waves always cancel (calm, quiet or dark)".

### 3. path difference
> Now move sideways. This point is further from one dipper than the other. The extra distance one wave travels is called the path difference. Here it's half a wavelength. So the wave from the far dipper arrives half a cycle behind. Its crests land on the other wave's troughs, crest on trough, every time. That's a **minimum**.

Visual: camera continue. On "move sideways" P slides off the centre line onto the first calm line ("Q"). On "further from one dipper" the path from S₁ lengthens visibly. On "path difference" the strips unroll again: the S₁ strip overhangs the S₂ strip, the overhang bracketed teal (gloss "path difference: the extra distance one wave travels"); on "half a wavelength" the bracket reads "½λ" with a small crest-to-trough ruler beside it. On "half a cycle behind" the arrival axes shift wave 1 by ½λ; on "crest on trough" the sum lies flat; on "minimum" the calm line under Q glows pale gold.

### 4. the rule
> Keep moving, and the path difference grows. At one whole wavelength, the far wave is a full cycle behind, so crest meets crest again: another maximum. At one and a half, a minimum. So for dippers moving in step, a path difference of a whole number of wavelengths gives a maximum, and a whole number plus a half gives a **minimum**.

Visual: camera continue. On "Keep moving" the point slides on across the pattern; the strips' overhang grows smoothly and the arrival sum swells and shrinks as it passes lines. On "one whole wavelength" it stops on the next strong line: overhang "1λ", arrivals in phase; the line labels "1λ". On "one and a half" the next calm line: "3/2λ". Every line in the pattern takes its label as the point passes: "0", "½λ", "1λ", "3/2λ", mirrored on the other side. On "whole number of wavelengths" the equation strip writes "maximum: path difference = mλ"; on "plus a half" "minimum: path difference = (m + ½)λ", with "m = 0, 1, 2, ..." and the grey tag "for sources moving in step".

### 5. why the pattern stays put
> Why doesn't the pattern drift? Each point's path difference is set by where it sits, and that never changes. And the dippers keep in step, with the same frequency and a fixed timing between them. Sources like that are called coherent. Now drive the dippers with two motors at slightly different frequencies. One keeps slipping ahead, so every point flips between strong and calm, and the pattern washes **out**.

Visual: on "set by where it sits" the labelled lines hold still while crests move through them, and a few points' path difference readouts stay constant. On "keep in step" the dippers bob together (two small level marks rising and falling as one); gloss "coherent: keeping in step, with the same frequency and a fixed timing". On "two motors" the dipper bar splits into two coded drivers with readouts "10.0 Hz" and "10.5 Hz" (tag "slowed down"); one dipper's bobbing drifts ahead of the other's; on "flips" the strong and calm lines sweep sideways; on "washes out" they blur into an even grey ripple. Then the single bar returns and the steady pattern snaps back.

### 6. prediction: anything arriving at a calm line?
> On a calm line, the water barely moves. Are any waves arriving there at **all**?

Visual: camera push to a calm line, the water there almost still. On "all" chips "no waves arrive?", "both waves arrive?" and a 3-second countdown ring.

### 7. both arrive, and the energy moves
> Both arrive. The waves from each dipper pass right through the calm line. They just arrive out of step, so they cancel there. So where does their energy go? A wave's energy goes with its amplitude squared. On a strong line, the amplitude doubles, so the energy there is four times one dipper's. On a calm line, it's zero. On average, that's twice one dipper's energy, exactly what two dippers supply. The energy isn't lost. It moves from the calm lines to the strong **ones**.

Visual: on "Both arrive" the chip "both waves arrive?" ticks; "no waves arrive?" takes a scribble cross. On "pass right through" crests from S₁ alone are drawn (S₂'s faded), clearly crossing the calm line; then S₂'s alone, also crossing; then both, cancelling there (the arrival axes: two waves, flat sum). On "amplitude squared" a grey chip "energy ∝ amplitude² (v10, v12)". Energy bars (hollow gold, filling): on "one dipper's" a bar "one dipper: 1"; on "four times" a bar on a strong line "amplitude × 2 → energy × 4"; on "zero" a bar on a calm line "0"; on "On average" an average bar fills to "2" beside a bar "two dippers: 1 + 1 = 2". On "moves from the calm lines" hollow gold arrows curve from a calm line into the neighbouring strong lines.

### 8. sound: two loudspeakers
> Sound does the same. Two loudspeakers, driven by one signal generator, play the same steady note. A microphone slides along a track in front of them, and its reading rises and falls: loud, quiet, loud, quiet. The microphone is passing through maxima and **minima**.

Visual: board change: a bench in three-quarter view: the two-dial signal generator plate (`phys-y11-signal-generator-v1.png`) with one coded lead splitting to the two loudspeaker plates (`phys-y11-loudspeaker-v1.png` with `phys-y11-loudspeaker-cone-v1.png`), side by side, cones facing forward; the metre rule plate (`phys-y11-metre-rule-v1.png`) along a coded track in front, with the microphone plate (`phys-y11-microphone-v1.png`) on it. Above, the speaker plan view: the two speakers, navy strong lines and pale gold calm lines fanning out, and the track crossing them (tag "λ = 0.40 m"). On "slides" the microphone moves along the track by code; its teal level bar rises and falls, and a small level-against-position trace draws under the rule. On "maxima and minima" the trace's peaks and dips line up with the strong and calm lines on the plan.

### 9. worked example: one quiet spot
> Let's check one quiet spot. Task: decide whether the point is a maximum or a minimum. The givens: the wavelength is zero point four oh metres, and the point is three point oh oh metres from one speaker and three point six oh metres from the other. The path difference is three point six oh minus three point oh oh, zero point six oh **metres**. Divided by the wavelength, that's one point **five** wavelengths. A whole number plus a half, so it's a **minimum**.

Visual: clear change to the calculation layout; the speaker plan small at the left with the microphone stopped at a dip, point "P" marked, and its two paths drawn. Task strip "Is P a maximum or a minimum?". Equation strip "path difference = |S₁P − S₂P|; compare with λ". Givens group (navy): "λ = 0.40 m; S₁P = 3.60 m; S₂P = 3.00 m" (grey tag "site example values"). Rows, one per cue: on "metres" "path difference = 3.60 − 3.00 = 0.60 m"; on "five" "0.60 ÷ 0.40 = 1.5 wavelengths"; on "minimum" "1.5 = 1 + ½ → minimum", boxed. The `PathCompare` strips at P show an overhang "1.5λ" and the arrival sum near flat.

### 10. what sets the spacing
> What sets how far apart the lines are? Longer waves spread the lines further apart, because the path difference has to change more to reach the next half wavelength. Moving the sources apart makes the path difference grow faster as you move sideways, so the lines squeeze closer. And if the sources are less than half a wavelength apart, the path difference can never reach a half, so there are no calm lines at **all**.

Visual: board change: one large `TwoSourcePattern` with a wavelength readout and a separation readout. On "Longer waves" λ grows (crests spacing out) and the labelled lines swing apart. On "Moving the sources apart" the dippers slide apart and the lines crowd closer; a teal overhang readout at a fixed sideways point grows faster. On "less than half a wavelength" the dippers slide close together (readout "separation < ½λ"); the calm lines fade one by one; on "at all" only strong, slightly uneven ripples remain, and a grey chip "largest path difference = the separation".

### 11. memory aid
> Here's the rule to remember, for sources moving in step. Whole wavelengths of path difference: in step, strong. A half left over: out of step, **calm**.

Visual: board change: the pattern with its line labels. The handwritten line writes large: "Whole wavelengths: in step, strong." Under it: "A half left over: out of step, calm." Small grey tag "sources moving in step". On "strong" the 0 and 1λ lines glow navy; on "calm" the ½λ and 3/2λ lines glow pale gold. Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. Two dippers move in step in a ripple tank, making waves of wavelength one point two centimetres. Point X is nine point six centimetres from one dipper and seven point two from the other. Point Y is eight point four centimetres from one and six point six from the other. Decide whether each point is a maximum or a minimum, and explain why. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with an HSC-style line drawing (two dots S₁ and S₂ and two points X and Y with their distances on dashed lines; no waves drawn): "Two dippers in a ripple tank vibrate in phase, producing waves of wavelength 1.2 cm. Point X is 9.6 cm from S₁ and 7.2 cm from S₂. Point Y is 8.4 cm from S₁ and 6.6 cm from S₂. (a) Calculate the path difference at X and at Y. (b) Determine whether each point is a maximum or a minimum. Explain your reasoning. (4 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> At X, the path difference is two point four centimetres, exactly two **wavelengths**, so the waves arrive in step: a maximum. At Y, it's one point eight centimetres, one and a half **wavelengths**, so crest meets trough: a minimum. Waves still reach Y. They just cancel **there**.

Visual: card shrinks to the top; "in phase", "1.2 cm" and the four distances underlined. Rows: on the first "wavelengths" "(a) X: 9.6 − 7.2 = 2.4 cm; 2.4 ÷ 1.2 = 2 → maximum", boxed; on the second "wavelengths" "Y: 8.4 − 6.6 = 1.8 cm; 1.8 ÷ 1.2 = 1.5 → minimum", boxed; small `PathCompare` overhangs "2λ" and "1.5λ" beside them. On "there" a chip "no waves reach Y" fades in and is crossed. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Two loudspeakers, connected to the same signal generator, play a six hundred and eighty hertz note, and sound travels at three hundred and forty metres per second. A microphone is four point two five metres from one speaker and five point oh oh metres from the other. Is it at a maximum or a minimum? Then explain what would happen to the pattern if each speaker had its own generator, set to slightly different frequencies. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with an HSC-style line drawing (two speakers side by side, a microphone with its two distances on dashed lines; no waves drawn): "Two loudspeakers are connected to the same signal generator and emit a steady note of frequency 680 Hz. The speed of sound is 340 m s⁻¹. A microphone is 4.25 m from one loudspeaker and 5.00 m from the other. (a) Determine whether the microphone is at a maximum or a minimum. Show your reasoning. (b) Each loudspeaker is then connected to its own signal generator, set to slightly different frequencies. Explain the effect on the interference pattern. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> The wavelength is three hundred and forty over six hundred and eighty, zero point five oh metres. The path difference is zero point seven five **metres**, one and a half wavelengths, so it's a **minimum**. With slightly different frequencies, the speakers wouldn't stay in step, so the loud and quiet spots would keep moving, and the pattern would wash out. Close isn't enough. The sources must stay **coherent**.

Visual: card shrinks to the top; "same signal generator", "680 Hz", "340 m s⁻¹" and the two distances underlined. Rows: "(a) λ = v/f = 340 ÷ 680 = 0.50 m"; on "metres" "path difference = 5.00 − 4.25 = 0.75 m"; on "minimum" "0.75 ÷ 0.50 = 1.5 → minimum", boxed; then "(b) different f → not coherent → the timing between them keeps changing → maxima and minima move → pattern washes out", boxed, with a small drifting pattern thumbnail. On "coherent" a chip "the pattern stays fixed as long as both play roughly the same note" fades in and is crossed. Hold about 1 second.

### 16. handoff
> So two sources in step make a fixed pattern, because each point's path difference never changes. Whole wavelengths give strong lines, and a half left over gives calm ones. But a wave can also interfere with its own reflection. Send waves along a string to a fixed end, and some points never move at all. Why does a wave meeting its own reflection make a pattern that stays in **place**?

Visual: the memory line returns small at the top. On "fixed pattern" the labelled tank pattern holds briefly, then board change: the wave driver plate (`phys-y11-wave-driver-v1.png`) at the left, a coded string running right to a clamp on the retort stand plate (`phys-y11-retort-stand-v1.png`). On "own reflection" a wave travels right with an amber-outlined travel arrow, and its reflection travels back with a second arrow. On "never move at all" three small teal dots on the string stay on the rest line while the rest of the string moves; chips "a wave and its own reflection?" and "points that never move?". On "place" the chip "Next: Why does a wave meeting its own reflection make a pattern that stays in place?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Two coherent sources (same frequency, fixed timing) make a fixed interference pattern of maxima (waves always reinforce) and minima (waves always cancel).
2. Path difference: the extra distance one wave travels to reach a point, |S₁P − S₂P|.
3. For sources in step: maximum when the path difference = mλ; minimum when it = (m + ½)λ (m = 0, 1, 2, ...). The centre line is a maximum.
4. At a minimum both waves still arrive and cancel. Energy is moved from minima to maxima (4 × one source's at a maximum, 0 at a minimum), not lost.
5. Longer λ: lines further apart. Sources further apart: lines closer. Sources less than ½λ apart: no minima. Sound from two speakers gives loud and quiet spots.

Memory aid (large, on the notes screen): *Whole wavelengths: in step, strong. A half left over: out of step, calm.* Small tag: *for sources moving in step.*

At the end the notes cross-fade back to scene 16's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why the centre line is strong: in-step sources and equal paths give in-step arrival (2). Why half a wavelength of path gives calm water: one wave arrives half a cycle behind (3). Why whole wavelengths give strong lines again (4). Why the pattern stays put: fixed geometry and coherent sources (5). Why it washes out with two motors: one source keeps slipping ahead (5). Why a calm line is calm although waves arrive: they arrive out of step (7). Why the strong lines hold four times the energy: amplitude doubles and energy goes with amplitude squared (7). Why longer waves spread the lines and wider sources squeeze them (10). Why close sources give no calm lines: the path difference can't reach half a wavelength (10).
- **Misconceptions addressed:** no waves reach a minimum (6, 7, feedback 1 crossed); energy is destroyed (7); any two sources make a steady pattern (5, feedback 2 crossed); spacing never matters (10); judging maximum or minimum without comparing with λ (9).
- **One idea at a time:** the centre line (1, 2), path difference (3), the rule (4), why fixed (5), arrival and energy (6, 7), sound (8), numbers (9), spacing (10), memory aid (11).
- **Video makes it easier:** the student watches two paths unroll into strips so the path difference is a visible overhang (2 to 4), watches the arrival sum swell and vanish as a point crosses the pattern (4), watches two slightly different motors sweep the pattern away (5), watches each dipper's waves cross a calm line on their own (7), watches energy bars fill to four and empty to zero (7), watches a microphone's level rise and fall exactly at the drawn lines (8), and watches the lines swing as λ and the separation change (10).
- **Response opportunity:** two 3 s predictions (1, 6); two unseen HSC-style tasks, 10 seconds each, every condition on the card (in phase; the same generator; the speed of sound), nothing answer-bearing (the drawings show no waves). One crossed mistake each; feedback about 21 s and 31 s (feedback 2 carries two parts; its trim, if the review finds it long, is the "Close isn't enough." sentence).
- **Avoided double teaching:** superposition, in phase and half a wavelength out of phase (v29), v = fλ (v05), energy and amplitude squared (v10, v12), the ripple tank (v18) recalled in a phrase each.
- **Syllabus coverage:** `ci37c12aba`: superposition of waves from two coherent sources explained point by point (path difference), producing a fixed pattern with observable maxima and minima in water (1 to 7, 10) and sound (8, 9), with the conditions for observability (coherence, 5; spacing, 10) and A1, A2.
- **Out of scope by design:** d sin θ = mλ and fringe spacing formulas (Year 12); antiphase sources; standing waves (v31); light interference (Year 12).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 4 marks suggested, not an official marking scheme).** "Two dippers in a ripple tank vibrate in phase, producing waves of wavelength 1.2 cm. Point X is 9.6 cm from S₁ and 7.2 cm from S₂. Point Y is 8.4 cm from S₁ and 6.6 cm from S₂. (a) Calculate the path difference at X and at Y. (b) Determine whether each point is a maximum or a minimum. Explain your reasoning."
Model answer: (a) X: 9.6 − 7.2 = 2.4 cm. Y: 8.4 − 6.6 = 1.8 cm. (b) X: 2.4 ÷ 1.2 = 2, a whole number of wavelengths, so the waves from the two in-phase sources arrive in phase, crest on crest, and superpose constructively: a maximum. Y: 1.8 ÷ 1.2 = 1.5, a whole number plus a half, so the waves arrive half a cycle out of step, crest on trough, and superpose destructively: a minimum. Waves from both sources still reach Y; they cancel there. Classic mistake (crossed): "no waves reach Y".

**Attempt 2 (scene 14; original wording, HSC style, 4 marks suggested).** "Two loudspeakers are connected to the same signal generator and emit a steady note of frequency 680 Hz. The speed of sound is 340 m s⁻¹. A microphone is 4.25 m from one loudspeaker and 5.00 m from the other. (a) Determine whether the microphone is at a maximum or a minimum. Show your reasoning. (b) Each loudspeaker is then connected to its own signal generator, set to slightly different frequencies. Explain the effect on the interference pattern."
Model answer: (a) λ = v/f = 340 ÷ 680 = 0.50 m. Path difference = 5.00 − 4.25 = 0.75 m = 0.75 ÷ 0.50 = 1.5λ, an odd number of half-wavelengths, so the waves arrive out of phase and the microphone is at a minimum (very quiet). (b) With different frequencies the two sources are no longer coherent: the timing (phase difference) between the waves arriving at each point keeps changing. Each point therefore keeps switching between reinforcement and cancellation, so the maxima and minima move continuously and the steady pattern washes out. Classic mistake (crossed): "the pattern stays fixed as long as both play roughly the same note".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Lines | path difference 0, ½λ, 1λ, 3/2λ | 2 to 4, 11 |
| Drift demo | 10.0 Hz and 10.5 Hz (slowed down) | 5 |
| Energy | one source 1; maximum 4 (amplitude × 2); minimum 0; average 2 = 1 + 1 | 7 |
| Speakers | λ = 0.40 m (850 Hz at 340 m s⁻¹, not spoken); separation 1.20 m (not shown) | 8 |
| Worked (site `we-1`) | λ 0.40 m; 3.00 m and 3.60 m; 0.60 m; 1.5; minimum | 9 |
| A1 | λ 1.2 cm; X 9.6 and 7.2 cm → 2.4 cm = 2λ, maximum; Y 8.4 and 6.6 cm → 1.8 cm = 1.5λ, minimum | 12, 13 |
| A2 | 680 Hz, 340 m s⁻¹ → 0.50 m; 4.25 m and 5.00 m → 0.75 m = 1.5λ, minimum | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- Energy: (2A)² = 4A²; average of 4 and 0 = 2 = 1 + 1; mean of 4cos²(πΔ/λ) over Δ = 2.
- 340 ÷ 850 = 0.40 m. P at (1.65 m, 2.81 m) with S₁ (−0.60, 0) and S₂ (0.60, 0): distances 3.60 m and 3.00 m.
- 3.60 − 3.00 = 0.60 m; 0.60 ÷ 0.40 = 1.5.
- A1: 9.6 − 7.2 = 2.4; 2.4 ÷ 1.2 = 2.0; 8.4 − 6.6 = 1.8; 1.8 ÷ 1.2 = 1.5.
- A2: 340 ÷ 680 = 0.50 m; 5.00 − 4.25 = 0.75 m; 0.75 ÷ 0.50 = 1.5.
- Directions (author note c, not shown): sin⁻¹(0.4/1.2) = 19.5°; sin⁻¹(0.8/1.2) = 41.8°; minima sin⁻¹(0.2/1.2) = 9.6°, sin⁻¹(0.6/1.2) = 30.0°, sin⁻¹(1.0/1.2) = 56.4°.

## Memory aid check

- **"Whole wavelengths: in step, strong. A half left over: out of step, calm."** Written for this lesson. Meaning, as said in scene 11: a path difference of a whole number of wavelengths makes the waves arrive in phase (a maximum); a whole number plus a half makes them arrive half a cycle apart (a minimum). Assumptions checked: the sources move in step (spoken in 4 and 11, tag on screen; antiphase sources swap the rule, author note a); "path difference" is in the spoken aid; points between lines give in-between strength (4: the arrival sum swells and shrinks, not stated as a rule); "calm" is complete only for equal arriving amplitudes (site correction 3; "quiet" in A2's model answer). Introduced after the centre line, the half-wavelength point, the rule and the worked point (2 to 9). It helps a new case: A1, A2 and the Year 12 double slit.
- **Considered, not used:** "Even halves, strong; odd halves, calm" (accurate, but counting half-wavelengths adds a step for Year 11).

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,446 characters**, 17 scenes. Characters per scene (1 to 17): 246, 369, 321, 327, 407, 76, 472, 261, 449, 416, 148, 372, 268, 456, 401, 382, 75. At 13.3 characters per second the speech is about 409 s; add about 16 s of holds and settling (the unrolling strips in 2 and 3, the moving point in 4, the drift washout in 5, the single-source crossings and energy bars in 7, the microphone run in 8, the swinging lines in 10, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold: **about 507 s**. The count sits in the 5,000 to 5,500 band: one syllabus point, its cause (path difference), its two conditions for an observable pattern (coherence, spacing), the energy account, the sound version and two applications fill it completely; nothing is padded (as root decision 5 accepted for v03 at 5,453). Root to accept the length (open decision 6). If the voiced preview runs long, the first trim is "Close isn't enough." in feedback 2 (about 20 characters).

## Scene list and build ids

Lesson key `p-y11-fa2-v30` (root decision 2). Suggested explainer folder `src/explainer/lessons/phys-y11-fa2-v30` and build folder `docs/production/claude-pm/lessons/p-y11-fa2-v30` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, centre-line, path-difference, the-rule, why-fixed, calm-line-prediction, energy-moves, two-speakers, worked-example, line-spacing, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and calm-line-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v29's last frame continues into scene 1; 1 to 2 to 3 to 4 camera continue (the point moves across the pattern); 4 to 5 camera continue; 5 to 6 camera push to a calm line; 6 to 7 camera continue; 7 to 8 board change to the bench; 8 to 9 clear change to the calculation layout; 9 to 10 board change; 10 to 11 board change; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: hook and calm-line-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa2-v30-learning-review.md`, `science_check` = `checks/p-y11-fa2-v30-physics-check.md`.

## Assets

`public/assets/physics/` holds FA1 plates (including `phys-y11-retort-stand-v1.png`); no FA2 plates are there yet (checked 3 Nov). Requested earlier, reused by name (uniform scaling only, never stretched):
- v18's `phys-y11-ripple-tank-v1.png` with v29's `phys-y11-ripple-tank-dippers-v1.png` (scenes 1 to 7, 10, 11, 16).
- v01's `phys-y11-signal-generator-v1.png` (two dials, root decision 13; scene 8).
- v04's `phys-y11-loudspeaker-v1.png` with `phys-y11-loudspeaker-cone-v1.png` (two copies, scene 8).
- The FA2 `phys-y11-microphone-v1.png` (scene 8) and v11's `phys-y11-metre-rule-v1.png` (scene 8, the track).
- The FA2 `phys-y11-wave-driver-v1.png` and FA1's `phys-y11-retort-stand-v1.png` (scene 16, the handoff).
- **Considered, not used:** a second dipper bar with two motors (scene 5 splits the bar by code into two coded drivers); a sound level meter plate (the microphone's coded level bar matches v27); a person walking across the room (owner rule; the microphone track replaces it).

Need: no new plates.

Coded: the tank top view, crests, strong and calm lines with labels, the marked points, the paths and strips, the arrival axes and sums, the drift demo, the energy bars and arrows, the speaker plan, the track and level trace, the string and its waves, `AlignedAlgebra`, `Countdown`, `QuestionCard` with line drawings, `Chip` with `cross`, `KeyNotes`, `Heading`.

Kit gaps (for the build brief): **`PathCompare`** (new; strips with an overhang in wavelengths, linked to v29's `PhaseSlider`); v29's **`TwoSourcePattern`** (with labels, adjustable λ and separation, drift mode); **energy bars**; **microphone track** with level trace; **speaker plan view** (lesson-local acceptable).

## Codex asset brief (Year 11 Physics FA2 v30, interference patterns)

No new plates. Confirm, for plates requested earlier: (1) v29's dipper bar (`phys-y11-ripple-tank-dippers-v1.png`) shows the two dipper tips clearly enough that the code can place coded sources S₁ and S₂ exactly under them (sidecar points); (2) the loudspeaker plate and its cone (v04) can stand as a pair side by side facing forward in a three-quarter bench view without looking cut in half (if the side cut-away reads badly from the front, a plain front-facing speaker box `phys-y11-loudspeaker-front-v1.png` is acceptable as a new request); (3) the microphone plate stands upright on a base that can sit on the coded track.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm every pattern is computed from the two-source wavelet sum, the labelled lines sit where the path difference equals 0, ½λ, 1λ and 3/2λ, the `PathCompare` overhang matches each marked point's real path difference, and the spacing changes in scene 10 go the right way (longer λ, wider; larger separation, closer; separation below ½λ, no minima).
3. Confirm the physics claims: maxima at path difference mλ and minima at (m + ½)λ for in-phase sources; a stable pattern needs coherent sources; both waves arrive at a minimum; energy at a maximum is four times one source's, zero at a minimum, twice on average; sources closer than half a wavelength give no minima; slightly different frequencies make the pattern drift and wash out.
4. Confirm no person, face, hand, ear or body outline appears in any scene, card or plate (owner instruction).
5. Confirm the memory aid's condition (sources in step) is spoken and on screen.
6. Confirm both attempt questions are original in wording, carry every condition (in phase; the same generator; the speed of sound), and show nothing answer-bearing.
7. Confirm the syllabus quote matches the syllabus JSON exactly and no 2017-syllabus label appears.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script with the build parser rules.
10. Add site corrections 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Interference Patterns: Path Difference, Maxima and Minima | Year 11 Physics

(Title length: 76 characters; open decision 3 offers "Interference Patterns and Path Difference | Year 11 Physics", 59 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa2-waves/lesson22.sa.html

Two dippers in a ripple tank make strong lines and calm lines that never drift. Why? Watch the two paths to a point unroll side by side so you can see the path difference, and find out why whole wavelengths give maxima and an extra half gives minima. See why the sources must be coherent, why waves still arrive at a calm line, where the energy goes, how two loudspeakers make loud and quiet spots, and what sets the spacing of the lines. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 2: Waves.
Syllabus content (NSW Physics 11-12, 2025):
"Explain how the superposition of waves produces interference patterns with observable maxima and minima" (ci37c12aba)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Builds on: Superposition (previous video). Next: Standing waves.

#Year11Physics #Physics #Waves #Interference #HSCScience

## Open decisions

- **1. Learner question (root).** The route placeholder is rewritten as "Why do two sources make a fixed pattern of strong and calm lines, and where do the lines fall?". It is v29's handoff chip; root to enter it in the route.
- **2. v31 handoff chip.** This video's chip proposes "Why does a wave meeting its own reflection make a pattern that stays in place?" for v31 (route placeholder "How can I explain and apply standing waves?"). Root aligns the chip if v31's designer writes a different question; only scene 16's last sentence and chip change.
- **3. Title length.** The draft title is 76 characters; root picks it or the 59-character alternative.
- **4. Energy scene.** The amplitude-squared energy account (scene 7) uses v10 and v12's relation; root to confirm it belongs here rather than as a key note only (about 280 characters if cut to one sentence).
- **5. Site link form.** As v20.
- **6. Length.** 5,446 characters (about 507 s) is below the 5,500 floor but the content is complete; adding a further scene would be padding. Root to accept, as decision 5 did for v03.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v29 at Year 11 entry; check that the unrolled strips make "path difference" concrete before the symbols appear; that "half a cycle behind" follows from "half a wavelength further" without a phase lesson; that the coherence contrast lands; that the energy scene's four, zero and two are followable; that the microphone track replaces the walking listener cleanly; that the cards give nothing away), then the Codex physics check and error check.
- The unrolling strips (2 to 4), the moving point and arrival sum (4), the drift washout (5), single-source waves crossing a calm line (7), the energy bars (7), the microphone's level against the drawn lines (8) and the swinging lines (10) carry the explanation; judge them at playback speed in the voiced preview.
