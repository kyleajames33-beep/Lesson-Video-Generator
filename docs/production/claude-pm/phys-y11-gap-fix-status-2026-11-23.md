# Year 11 Physics gap fixes: status (23 November 2026)

Design agent's record of the fixes asked for after tonight's coherence audit (`checks/phys-y11-coherence-audit-2026-11-23.md`, `checks/phys-y11-coverage-map-2026-11-23.md`). Nothing was committed, rendered, voiced or published. The site clone `C:/Users/kygs/teaching-app-fix` was only read. Line numbers are those in the working copy after the edits.

## 1. B1: the two held designs (done)

| Design | Question (H1) | Syllabus points | Narration | Notes |
| --- | --- | --- | --- | --- |
| `lessons/phys-y11-fa1-v25.md` (new) | Why did Aboriginal and Torres Strait Islander Peoples use inclined planes to move heavy objects? | `cibb423b47` (P25-FA1-G4-06); `ciabfb4d1f` (P25-FA0-G4-05) as the closing beat | 5,437 characters, 17 scenes, about 495 s | Lift (mg) against smooth ramp (mg sin θ); the ramp holds the squash part; same weight, shared load; ramp fan to one ledge with force × distance 245 every time (left as the question v26 opens on, not named as work); friction adds (v23); why inclined planes were used; Cultural Knowledges as observation and testing that the equation later describes. Aid: "The ramp takes the squash. You take the slide." (extends v22). One new plate: `phys-y11-large-stone-v1.png`. |
| `lessons/phys-y11-fa2-v08.md` (new) | How can the speed and spacing of water waves reveal how deep the water is? | `cif4d17b1e` (P25-FA2-G1-07); `ciabfb4d1f` as the closing beat | 5,141 characters, 17 scenes, about 470 s | Shallow water slows waves; frequency fixed so crests crowd (v = fλ, v05); v ≈ √(g d) given as a model with its condition (d under about λ ÷ 20), d ≈ v² ÷ g; half the speed, a quarter of the depth; crowding waves grow and break; how Aboriginal Peoples read slow, crowded, breaking waves as shallower water; Cultural Knowledges recorded real patterns the model describes. Aid: "Slow and crowded means shallow." No new plate (Biology shoreline and reef plates). v20's frequency aid deliberately not used. |

Both follow the owner's 18 Nov general-content rule (no named communities, nations, people, places, sites or organisations; no universal-practice claim; no people or artefacts drawn; knowledge-holder principle stated once) and carry a "Cultural content check" section. Dot points quoted verbatim from the route JSON and ledger. Both counts sit under the 5,500 band floor; kept, not padded.

Handoff edits (Next and opening lines only):
- `phys-y11-fa1-v24.md`: line 39 (Decisions handoff bullet, now to v25), line 77 ("Handoff:"), line 172 (scene 16 narration: "Next, a ramp put to work: why Aboriginal and Torres Strait Islander Peoples used inclined planes to move heavy objects.", cue word now "objects"), line 174 (scene 16 Visual: chip "Next: Why did Aboriginal and Torres Strait Islander Peoples use inclined planes to move heavy objects?"), line 349 (metadata Next). Narration 6,268 to 6,261.
- `phys-y11-fa1-v26.md`: line 77 (scene 1 opening sentence: "Last time, a smaller force along a ramp raised a heavy load over a longer distance."), line 79 (scene 1 Visual now opens on v25's final frame, which restores v24's apparatus with v25's summary card), line 299 (metadata Builds on). Narration 6,254 to 6,264.
- `phys-y11-fa2-v07.md`: line 39 (Decisions handoff bullet, now to v08), line 66 ("Handoff:"), line 138 (scene 14 narration: the loudspeaker sentences replaced by "Now take a snapshot of the sea ... how deep the water is."), line 140 (scene 14 Visual: swell snapshot over a rising seabed; chip "Next: How can the speed and spacing of water waves reveal how deep the water is?"), line 269 (metadata Next). Narration 5,959 to 5,913.
- `phys-y11-fa2-v09.md`: line 77 (scene 1 bridge: "Last time, the water's own particles carried the swell, and every wave so far has needed particles to move."), line 79 (scene 1 Visual opens on v08's final frame, which restores v07's former loudspeaker frame), line 288 (metadata Builds on). Narration 5,668 to 5,717.

## 2. Text fixes (done)

- **S1** `phys-y11-fa1-v10.md`: line 30 (Decisions definition), line 125 (scene 8: "Reliability is whether repeating the experiment gives consistent results. Here we judge it from how closely our repeats agree."), line 127 (scene 8 Visual cue and chip to match), line 130 (scene 9: "Method one's repeats agree more closely, so it's more precise, and here more reliable, but all its runs are low."), line 171 (key note 4), line 190 (A1 model answer (c)). Narration 6,340 to 6,479. Lines 19 and 92 changed under S3 (v09's chip quoted in v10's opening).
- **S2** chips naming the FA0 video that follows: `phys-y11-fa1-v14.md` lines 41, 138, 273 (fa0-v01's question; metadata Next "Questioning and predicting"); `phys-y11-fa1-v15.md` lines 59, 153, 306 (fa0-v07's question; "Communicating"); `phys-y11-fa1-v30.md` lines 36, 149, 288 (fa0-v06's question; "Problem-solving"). Narration unchanged: the FA0 openings already bridge with "Before we ..." (fa0-v07, fa0-v06) and "Before any test with real equipment" (fa0-v01).
- **S3** chips set to the next design's question verbatim (and the same old chip text where the next design's opening quotes it): `fa1-v01` 152 and `fa1-v02` 22; `fa1-v04` 36, 152 (v05 does not quote it); `fa1-v05` 139, 213 and `fa1-v06` 202; `fa1-v06` 133, 206 and `fa1-v07` 200; `fa1-v07` 133, 204 and `fa1-v08` 207; `fa1-v08` 33, 136, 211 (v09 does not quote it); `fa1-v09` 139, 330 and `fa1-v10` 19, 92; `fa1-v12` 130 (metadata line 275 and open decision line 283 left); `fa1-v24` (under B1); `fa1-v28` 34, 150 and `fa1-v29` 17, 81, 315; `fa3-v24` 37, 177 and `fa3-v25` 9 (v25's question used; v25 not retitled). Chips are screen text; no take changes.
- **S5** `phys-y11-fa3-v30.md`: lines 46 and 190 (chip "Year 12: Advanced mechanics, starting with projectiles"), line 75 ("Handoff:"), line 349 (metadata Next). Narration unchanged.
- **S8** `phys-y11-fa1-v03.md`: aid "Cos is close: the component next to the angle uses cos, and the other one uses sin." at line 31 (Decisions), 51 (colour key), 112 (scene 8 narration: "Cos is close. The component close to the angle, along the axis the angle is measured from, uses cos. The other one uses sin."), 114 (scene 8 Visual cues and memory card), 122 and 132 (feedback lines that reused "hugs" and "sits opposite"), 151 (notes memory card), 200 (memory aid check). Narration 5,533 to 5,503.

## 3. B2: site corrections additions (done)

New file `site-corrections-phys-y11-additions-2026-11-23.md`: 44 site lessons (FA1 L23, FA2 L07, FA2 L10 to L25, FA3 L01 to L26), each design's block copied verbatim, a summary table and priority. High (re-checked live on the clone today, all still present): FA2 L11, L15, L17, L25; FA3 L13, L14, L25. Medium 36, Low 1. Already-logged rows flagged (FA3 L12 "50 times a second", FA3 L26 air-core row); FA1 L14 "closes the focus area" also confirmed still live. New rows from today's designs: FA1 L23 (4) and FA2 L07 (3). The existing log was not edited.

## 4. Year 12 2025 route draft (done, draft only)

`docs/production/phys-y12-2025-route-draft.md`, clearly marked DRAFT: 95 rows in 2025 order (78 existing designs placed by the first 2025 point each serves, 17 gap slots), from `phys-new-y12.json` and its audit crosswalk; S6 recall bridges (m5-v11, m6-v01, m6-v03, m7-v05, m7-v09, m7-v10; m6-v15 out); S7 one-line additions (nuclear notation in m7-v16 and m8-v09, beta decay relabel in m8-v14, kelvin in m7-v09, light-year in m7-v13, temperature in m8-v19); FA4 atom-before-stars order; 17 gap points with codenames. Not mapped to any 2025 point: m5-v14, m6-v08, m8-v01.

## 5. Root rulings and follow-ups (second pass, 23 November 2026, done)

Root rulings applied:
- (1) fa2-v08 keeps v ≈ √(g d), stated as a model with its condition: open decision 2 marked resolved (line 294).
- (2) fa1-v25 keeps the friction beat: the scene 8 Visual now shows a 38 px navy chip "f = 100 N (assumed value)" beside the friction arrow for the rest of the scene (line 111); open decision 4 resolved (line 300).
- (3) No syllabus text on screen. The Working scientifically dot point is removed from both closing beats (fa1-v25 line 121, fa2-v08 line 122; heading "Cultural Knowledges and science" only). Under the same ruling ("syllabus text belongs in descriptions, not on screen") the content dot point strips in scene 9 became plain headings: fa1-v25 line 116 "Why inclined planes were used", fa2-v08 line 117 "Reading the sea". fa1-v25 open decision 5 resolved (line 301); fa2-v08 cultural check wording updated (line 218). Both dot points stay in the YouTube descriptions and design metadata. No narration changed.
- (4) S2 stays chip-only.

Follow-ups:
- `lessons/phys-y11-fa1-v21.md`: "cos hugs the angle" to "cos is close" at lines 28 (Decisions), 101 (scene 6 narration: "It sits next to the angle, and cos is close, so it's m g cos theta."), 103 (Visual cue), 113 (hand tag), 212 (memory aid check). Narration 6,214 to 6,208; headline (line 5) refreshed.
- `lessons/phys-y11-fa0-v04.md`: `ciabfb4d1f` now recorded as taught in fa1-v25 scene 10 and fa2-v08 scene 10, not here: lines 20 (point list), 37 (Decisions), 84 (FA0 table row), 276 (error-check item), 307 (open decision 1, resolved), 310 (coverage record). Review-history line 324 left as history.
- `lessons/phys-y11-fa2-v20.md`: scene 11 now opens "It stays the same, just like the swell crowding over the shallows." (line 150), with a small grey chip "v08: the swell" on that cue (line 152). Narration 6,239 to 6,287; headline (line 5) refreshed.
- Leftover cultural-hold wording removed: fa1-v24 lines 7 (Scope, twice) and 355 (open decision 1, resolved); fa1-v26 lines 7 (Scope), 41 (Entry knowledge), 55 (author note a, now v25's frame); fa2-v07 lines 7 (Scope, twice), 17 (Boundary), 165 (Out of scope), 275 (open decision 1, resolved); fa2-v09 lines 7 (Scope) and 294 (open decision 1, resolved). The only remaining "cultural hold" mentions say the hold was lifted.
- Headline narration counts refreshed (line 5 of each; scene sums by script with the build parser rules; runtimes adjusted at 13.3 characters per second): fa1-v24 6,261 (was 6,268); fa1-v26 6,264 (6,254); fa2-v07 5,913 (5,959); fa2-v09 5,717 (5,668); fa1-v10 6,479 (6,340); fa1-v03 5,503 (5,533); fa1-v21 6,208 (6,214); fa2-v20 6,287 (6,239).
- Route `docs/production/phys-y11-video-route.json` (audit S4):
  - `playlistOrder` renumbered 1 to 101 to root FA0 decision 1 (fa0-v01 to v05 at 15 to 19, fa1-v15 at 20, fa0-v07 at 21, fa0-v06 between fa1-v30 and fa1-v31; fa1-v25 is 31, fa2-v08 is 46), and the `videos` array reordered to match.
  - Every `mainLearnerQuestion` set to its design's H1 question; every `nextHandoff` set to the next design's question (fa3-v30: course end and the Year 12 opener); 71 `stopBoundary` placeholder questions replaced. No "How can I explain and apply" placeholder remains.
  - Statuses refreshed (fa1-v25 and fa2-v08: designed 23 Nov, need learning review and Codex check; the rest: designed, need Codex error check before plates and voicing); stale "Research proposal" `authorDecision` values replaced; `rootNote` removed from v25 and v08.
  - `ciabfb4d1f` moved from fa0-v04 to fa1-v25 (owner) and fa2-v08 (shared closing beat).
  - `sources.site`, all 94 `sourceLesson.path` values and the crosswalk paths repointed to `C:\Users\kygs\teaching-app-fix`.
  - Hashes: each recorded `sha256` kept and marked stale in a new `sha256Status`; `sha256Current2026-11-23` (raw-bytes hash of the clone file) added beside it, because the original hashing method cannot be verified.
  - A 23 Nov root-decision entry records the update; `updated` = 2026-11-23. The file was rewritten with ASCII escapes (a few literal Unicode characters became escapes; content unchanged).
- Chip check after the route update: in the root order, every final chip names the next question, apart from five that use the next design's topic prefix or an earlier wording (fa1-v02, v03, v17, v31, fa2-v12); see open questions.

## Remaining (for root)

1. **fa1-v28 line 34** still says "(root replaces this with v29's question when it is set)"; it is now set.
2. **New plate** `phys-y11-large-stone-v1.png` (brief in fa1-v25); the build should wait for it.
3. **Reviews.** Both new designs need the student learning review and the Codex physics and error check (including the cultural content check) before voicing; the edited neighbours need their handoff takes checked in the voiced preview.
4. **Route hashes.** Confirm the original hashing method, then adopt `sha256Current2026-11-23` or rehash; re-read any site section a design quotes where the hash changed.
5. **Not done from the audit (outside this brief):** S6 trim of fa1-v16 scene 7; S6 and S7 edits in the Year 12 designs (drafted only, in `phys-y12-2025-route-draft.md`); S9 recalls in fa1-v15 and fa1-v31; notes N1 to N11; the parallel production board entry.

## Open questions

- Five chips name the next design's topic prefix or an earlier wording rather than its question (fa1-v02, v03, v17, v31, fa2-v12). The audit accepted heading-prefix chips; root to confirm or align them at the next chip pass.
