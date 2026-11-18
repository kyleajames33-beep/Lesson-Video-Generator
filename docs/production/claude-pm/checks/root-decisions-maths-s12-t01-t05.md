# Root decisions needed: Maths Standard Year 12, t01a to t05 (first-revision designs)

18 November 2026. Design author's handover to root for `lessons/math-s12-t01a.md`, `t01b.md`, `t02.md`, `t03.md`, `t04.md` and `t05.md` (Revision 1 each). Documents only: no speech, build, render, plate or commit, and no sub-agent. Inputs: the packs `pre-design/maths-standard/math-s12-t01.md` to `t05.md`, `programme/maths-standard-route-inputs-5.json`, `checks/maths-standard-kit-needs-t.md`, the Year 11 Advanced trigonometry kit (`src/explainer/math/studio/a11-trig-triangle.tsx`, `a11-trig-bearings.tsx`), `checks/root-rulings-maths-standard-outline.md` (rulings 1 to 60, binding), `site-corrections-maths-standard.md` (MS-41 to MS-46), the format of `lessons/math-s12-r07.md`, `r13.md` and `a04a.md` and the r-strand resolution logs, the accepted Advanced designs `math-a11-t01.md`, `t02a.md` and `t02b.md` (visual approach only), `maths-visual-standard.md`, `AGENTS.md`, and, for the join, the final frames of `lessons/math-s12-r13.md` and `r14.md`. t05 was written before t01a to t04 were finished, and its final frame is fixed in section 3 for the t06 to t11 author.

Every value was recalculated with SymPy 1.14 (scratchpad `t/verify.py`, run with `python -I`, 0 failures). Narration was counted by script (scratchpad `t/count.py`, the method of `work/brief-resolve-standard-r2/count.py`, which reproduces e08's 5,632). Every bold cue is quoted in its scene's Visual in spoken order, and no design contains an em dash (both checked by script, scratchpad `t/cues.py`). Seconds are speech at 13.3 characters a second plus countdowns, holds, settling and the 45 s notes scene; measure on the Google voice.

**Revision 2 note (18 Nov 2026).** All six designs are now at Revision 2 (learning review resolved; log `m-s12-t01-t05-learning-review-resolution.md`). Section 3 (t05's final frame) is **unchanged**. Section 4's t04 → t05 join changes only in the leg colours. Sections 1 and 6 to 9 are kept as the Revision 1 handover. Current lengths and the sources recorded for section 6 are in the resolution log. Rulings 61 and 62 close section 9's items 1, 3, 4, 5, 6 and 7.

## 1. Summary

| Design | Characters | About (s, with holds) | Scenes | Courses | Anchor | New plate briefed here | Open question |
| --- | --- | --- | --- | --- | --- | --- | --- |
| t01a sides from sine, cosine, tangent | 5,448 | 504 | 13 | S1, S2 | the house roof, 35°, 5.5 m edge: 3.15 m up, 4.51 m across | none | degrees and minutes moved to t02 |
| t01b finding an angle; roof and shed | 4,926 | 462 | 13 | S1, S2 | the roof's 35° recovered (34.9°); a garden shed (22.6°, sheet 1.30 m) | `ms12-garden-shed-v1.png`, `ms12-ladder-wall-v1.png` (t02's) | scope against the t02 pack; title 83 characters |
| t02 degrees and minutes | 4,910 | 458 | 12 | S1, S2 | a ladder's 1-in-4 safety rule: 75.96° = 75°58' | none | ladder and ramp sources; route question text |
| t03 elevation, depression, Pythagoras | 5,367 | 499 | 13 | S1, S2 | a drone 40 m up, 75 m along: 85 m, 28°4' | `ms12-farm-top-v1.png` (t04's and t05's) | antenna left out; plain drone plate |
| t04 true and compass bearings | 4,976 | 468 | 12 | S1, S2 | a farm from above: dam 075°T, shed 155°T, gate N65°W | none | wind aside left out |
| t05 navigation with right angles | 5,276 | 494 | 13 | S1, S2 | the farm ute, 2.0 km N then 2.1 km E: 2.9 km, 046°T | `ms12-river-crossing-top-v1.png` (t06's), `ms12-beach-kiosk-v1.png` (b01's, provisional) | ute numbers changed; title 81 characters |

All six are under 570 s with holds. Three are just under 5,000 characters (t01b, t02, t04) with nothing padded (rulings 52 and 55 accepted r08, r09 and r12b on the same terms); each names what it would add if root wants more. Every feedback is 30 s of speech or less (the longest: t05 feedback 1, 398 characters, about 30 s). The longest single scenes are t05 scene 5 (1,007 characters, about 76 s; the site's yacht on one board, with a named trim), t04 scene 4 (974, about 73 s; the conversions and the four-quarter summary on one board) and t05 scene 6 (840). Each is one board or one method stage.

## 2. Ruling 57 and the t01 to t02 scope

Ruling 57 splits t01 into **t01a** ("sine, cosine and tangent from scratch: naming sides, finding a side") and **t01b** ("finding an angle, and the roof and shed applications"). The t01 pack's suggested split was different (t01b = unknown underneath, degrees and minutes, degree mode), and the t02 pack owns the inverse ratios. I followed the ruling as written, which moves content as follows:

- **t01a:** labelling, why one angle fixes the ratios (scaled copies of the roof triangle), SOH CAH TOA, degree mode, and a side with the unknown on top (the roof) and underneath (the site's `we-2`). "Finding a side" includes both positions; the Standard 1 side point asks for unknown sides in general.
- **t01b:** the inverse ratios (taken from the t02 pack), the roof's angle back, the site's lesson03 `we-1` to one decimal place, choosing the inverse from two sides, and the shed: an angle from two sides, then a side from that angle (checked by Pythagoras).
- **t02:** becomes the **degrees and minutes** video, both directions: a given angle in degrees and minutes typed as a decimal (the site's lesson02 `we-3`, 5.14 m; this was in the t01 pack), a found angle turned into minutes (`we-1` again, 39°31'), the second acute angle with a borrowed degree (50°29'), and the pack's ramp and ladder questions. New main question: "How do degrees and minutes work when we find angles and sides?" (the route entry's mainLearnerQuestion and the t02 pack title should follow).
- **Coverage is unchanged in total.** Standard 2 `ci74344e24`: sides (t01a), angles in degrees (t01b), both in degrees and minutes (t02). Standard 1 `ci07db556a` (sides given an angle in both forms): t01a and t02 scene 4. Standard 1 `cif8689656` (angles in both forms): t01b and t02.
- **If root meant the pack's split,** t01b and t02 would be redesigned together and t01a would lose its scene 6; t01a, t03, t04 and t05 would not change.

## 3. t05's final frame (t06 opens on its Standard 2 panel)

t05 scene 12, held about 2 s, then returned to silently after the notes (scene 13 ends on it, cross-fade 1 s). 1920 × 1080, header strip "MATHEMATICS STANDARD · TRIGONOMETRY". Exactly:

- **Split:** a thin grey vertical rule at about x = 960. Small panel tags at the top of each half: "Standard 2" (left) and "Standard 1" (right), 30 px grey.
- **Left panel, Standard 2 (x 0 to 950), t06's opening:**
  - The painted plate `ms12-river-crossing-top-v1.png` (briefed in t05; a river from directly above, north up, flowing left to right; grassy near bank along the bottom; far bank with reeds; one distinct eucalypt on the far bank), shown at 0.6 of its 1500 × 1270 size, about 900 × 762 px.
  - **P and Q:** coded points on the near bank, 300 px apart on one horizontal line (P at the left), labelled "P" and "Q" (36 px); a coded baseline between them (ink, solid) labelled "500 m" (36 px) below it.
  - **R:** the painted tree's base, 260 px right of P and 451 px above the baseline (so R sits a little left of Q, far side of the river), labelled "R" (36 px). These positions are the triangle with PQ = 500 m, angle P = 60°, angle Q = 85° at 0.6 px per metre (R = 35°; QR ≈ 755 m, PR ≈ 868 m; neither is shown).
  - Coded sight lines PR and QR (dotted ink). Blue arcs inside the triangle: "60°" at P and "85°" at Q (40 px). No right-angle mark anywhere; no value at R; no length on PR or QR.
  - Chip "no right angle: how far?" (top of the panel, 40 px); label under the panel "Standard 2 next: the sine rule" (36 px).
- **Right panel, Standard 1 (x 970 to 1920), b01's opening (provisional, ruling 59):**
  - The painted plate `ms12-beach-kiosk-v1.png` (briefed in t05; a small timber beach kiosk in front elevation, striped awning, an ice cream cone sign shape without letters, sand strip; no people), about 640 px wide at the left of the panel.
  - Beside it, a coded chalk-style board (about 520 × 560 px): two column headings, "top temperature (°C)" and "ice creams sold" (32 px), and five empty ruled rows. **No values.**
  - Chip "hotter day, more ice creams?" (40 px); grey chip "Right-angled triangles: done"; label under the panel "Standard 1 next: bivariate data" (36 px).
- **Chips:** "Next" and "?" at the bottom right, above y = 950.
- **Not shown:** no worked value in either panel; no sine rule; no data.
- **Spoken lead-in (t05 scene 12):** "That's the end of right-angled triangles. From here, there are two paths. If you're doing Standard 2, next we find a distance across a river, in a triangle with no right angle at all. If you're doing Standard 1, trigonometry is done, and next is bivariate data, starting with hot days and ice cream sales. Pick your path."
- **For the t06 to t11 author:** (1) t06 opens on this frame and fades the right panel, growing the left panel to full width (the t06 pack's start matches: the 500 m baseline, 60° at P, 85° at Q). (2) t11's final frame repeats the right panel full width (the kiosk, the board with headings only, "hotter day, more ice creams?"), so b01 opens on one picture for both courses. (3) If t06 wants different angles or a different baseline, only t05's left-panel labels and the river plate's tree position change; if b01 chooses another picture, only the right panel changes here and in t11. (4) The numbers available to t06 are in t05's author note (f).

## 4. Joins

- **r13 / r14 → t01a (rulings 45, 53, 56):** t01a opens on r14's final frame (r13's Standard 1 panel at full width). The roof angle is confirmed at 35° with "not to scale" (ruling 56), so r13's label and r14's spoken "thirty-five degrees" stand, and **r13 and r14 may now be voiced** (ruling 55 satisfied). The t01a narration says "the roof's edge runs five point five metres, from the gutter to the top"; the overlay, not the painting, carries 5.5 m.
- **t01a → t01b:** the roof triangle with "3.15 m" and "4.51 m" and a "?" card over the 35°.
- **t01b → t02:** the ladder plate with its 4 : 1 overlay and "tan⁻¹(4 ÷ 1) = 75.96375…°", "75.96° in degrees and minutes?".
- **t02 → t03:** the drone plate over a coded sports field, "40 m", "75 m", a dotted sight line, "how far away?", "what angle?".
- **t03 → t04:** the farm plate with a north arrow and three pins ("dam", "shearing shed", "front gate"), "which way?" chips, no bearing drawn.
- **t04 → t05:** the farm with the ute's dotted track, 2.0 km north (violet) then 2.1 km east (amber) to the far paddock gate, the ute badge, a dashed "?" straight line. Revision 2 (learning review, root's decision 4): one colour per leg from t04 scene 11 through t05, using t05's roles (north leg adjacent, east leg opposite from the homestead); Revision 1 had north amber and east violet in t04 and t05 scene 1.
- **t05 → t06 / b01:** section 3.

## 5. Departures from the packs (each recorded in its design)

1. **Ruling 57 scope** (section 2): inverse ratios in t01b; degrees and minutes in t02; the t02 pack's "could we get the 35° back?" opening is t01b's.
2. **t01a:** no shed (the scaled roof triangle shows "same angle, same ratio"; the shed is t01b's application); the measured side is "the roof's edge", not "a roofer's sheet"; A1 is the site's quick match turned into a question with the corrected 9.65 m (MS-42); the pack's kite question (52°18') moves out with degrees and minutes.
3. **t01b:** the shed is an original 2.4 m gable shed (a 5 : 12 : 13 half, 22.6°, sheet 1.30 m) so the trig answer and Pythagoras meet exactly; A2 is the t01 pack's kite with original numbers (30 m along, 40 m string: 41.4°); a "which inverse?" scene was added for choice practice.
4. **t02:** A1's 1-in-14 limit is called "an access guideline" until Codex confirms AS 1428.1; the second angle is taught on `we-1`'s triangle (50°29') rather than the site's 8 and 15 m triangle, so no new triangle is introduced.
5. **t03:** the drone is the anchor, so the pack's drone question is not an attempt; the pack's two-car question is the teaching example and new attempts are the flagpole and a security camera; the antenna (a height on a height, site `we-3`) is left out for pace; the two-observation method is left out (ruling 60).
6. **t04:** the site's `we-1` is carried on the farm (shed and gate) and the board adds a south-west case; the pack's question 1 is set at a campsite (A2) with a different crossed slip (145°T), because the pack's "035°T" slip equals (c)'s correct answer; the wind aside and the plotting-compass plate (no needle) are not used.
7. **t05:** the ute's 3.2 and 2.4 km became 2.0 and 2.1 km (2.9 km, 046°T) so the anchor's angle differs from the yacht's 36.87°; the pack's drone question goes north then west (306°T); `we-3` is solved by the right angle at B (MS-45).
8. **Plates painted one video early (ruling 17):** the ladder in t01b's brief, the farm in t03's, the river and the kiosk in t05's. The shed is first seen in its own video (t01b).

## 6. Sources to confirm (Codex maths check)

- **Ladder rule (t01b, t02):** "1 metre out for every 4 metres up", SafeWork NSW or Safe Work Australia ladder guidance; record a dated page. If the wording differs, the chip becomes "a common ladder rule".
- **Ramp limit (t02 A1):** 1 in 14 maximum gradient, AS 1428.1 (Design for access and mobility) or a dated NSW access guide. The card already says "an access guideline".
- **Calculator key names (t01b, t02):** "SHIFT" and the ° ' " key are said as "on most calculators"; Codex reports if the common school models differ.
- No prices, rates or fees appear in t01a to t05 (ruling 5 does not apply).

## 7. Site corrections applied

MS-41 (5.14 m in t02, 179.68 m in t03; the lesson01 drill values are not used); MS-42 (9.65 m in t01a A1); MS-43 (the depression angle shown outside the triangle at the top and moved to the bottom, t03); MS-45 (no simultaneous two-observation method in t03; `we-3` by the triangle in t05); MS-46 (Pythagoras practice in Year 12 in t03; the named directions NE, SE, SW, NW in t04). MS-44 (the pages' Year 11 labels) does not affect the videos; descriptions link the lesson pages as they are.

## 8. Kit (no source changed)

As `maths-standard-kit-needs-t.md`, with these uses and small additions recorded in each design: a **ratio readout** and a calculator DEG/RAD badge on StudioTriangle and StudioToolPanel (t01a); a **ratio machine** box and an angle-or-ratio driver on the readout (t01b, replacing the t02 row's "undo arrow"); **MinutesDial** at one-degree scale and a **borrow strip** (t02); the **two-object mode** of ElevationView (t03); **MapPins** and a compass-arc mode on BearingRose (t04, reused by t05 and t10); the **component split** and a two-bearing gap at a vertex on BearingJourney (t05).

## 9. For root

1. **Ruling 57's wording** (section 2): confirm t01b = finding an angle and t02 = degrees and minutes, or choose the pack's split.
2. **t05's final frame** (section 3): confirm for the t06 to t11 author and the b01 designer.
3. **r13 and r14 voicing:** the 35° roof is confirmed; ruling 55's condition is met by ruling 56 and the t01a design.
4. **Three designs under 5,000 characters** (t01b 4,926, t02 4,910, t04 4,976): accept without padding, or take each design's named addition.
5. **Titles over 80 characters:** t01b (83) and t05 (81); the shorter alternatives are 66 and 68 (ruling 37).
6. **The antenna** left out of t03, and the wind aside left out of t04: confirm, or ask for them (each about 25 to 30 s).
7. **Route inputs:** the t02 entry's mainLearnerQuestion and the t01 entry (now two parts) need updating to match section 2.

Nothing recorded; human listening pending.
