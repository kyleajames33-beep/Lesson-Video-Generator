# Year 11 Chemistry (2017 syllabus): coherence audit, 23 November 2026

Independent review of the whole Year 11 Chemistry course at three levels (course, module, lesson), against the 2017 syllabus and the HSCScience site, plus the hand-over into the published Year 12 Chemistry (Modules 5 to 8) and the later move to the 2025 syllabus. Companion table: `chem-y11-coverage-map-2026-11-23.md`. No existing file was edited; the site clone was only read; nothing was rendered, voiced or committed.

**Inputs read.** `AGENTS.md`; `build-agent-brief.md` (no course labels on screen, 21 November); `chem-y11-design-brief.md`; route `docs/production/programme/chem-y11-route-inputs.json` and the playlist order in `work/brief245/root/y11c-route.txt` (built from it by `build-y11c-route.cjs`); ledgers `programme/syllabus/chem-2017-y11.json`, `chem-new-y11.json`, `chem-new-y12.json`; `programme/syllabus-reuse-audit-2026-11-21.md`; root decisions `checks/root-decisions-chem-y11-m1.md` to `-m4.md`; `checks/chem-y11-voicing-readiness.md` (including the brief 260 addendum); `site-corrections-chem-y11.md`; `release-log.md` and `docs/production/bunny/ledger.csv`; all 82 designs `lessons/chem-y11-*.md`; the 104 Year 12 designs `lessons/chem-m5..m8-*.md` (entry-knowledge lines, memory aids); the built lessons `src/explainer/lessons/chem-y11-*` (openings and final scenes at every built/unbuilt seam); the site clone `C:/Users/kygs/teaching-app-fix/subjects/chemistry/year11/` (66 lessons); `checks/phys-y11-coherence-audit-2026-11-23.md` (structure only).

**Method.** A script extracted from every design the H1 learner question, the "Opening frame" and "Final frame" lines, every "Next:" chip, the Boundary, entry-knowledge and memory-aid lines, and the narration (build parser rule). All 82 consecutive pairs in playlist order were compared (final chip against the next H1, and against the chip quoted in the next opening frame). Entry-knowledge references were resolved to video ids and checked for forward references. The six seams between built and unbuilt videos were checked against the TypeScript sources. Ownership of all 52 content points and 20 Working Scientifically points was checked against the route. Site lessons were hashed against the route and the unlogged site notes were re-checked live on the clone by text search. Narration was scanned for course labels (digits and words) and em dashes. About 60 high-risk numbers in unrendered designs were recomputed in Python.

**What counts as rendered.** Published (release log): m1-v01 to v15, ws-v01 to v03, m2-v01 to v04 (22 videos). Rendered, not yet published (`out/explainer/`): m1-v16, m1-v17, m1-v21, m2-v06 (4). Everything else (56 designs) is unrendered and unvoiced (no `public/audio` folder exists for any of them). m3-v06 has no design.

## Counts

| Split | Blocker | Should fix | Note |
| --- | ---: | ---: | ---: |
| Unrendered designs (design fixes) | 3 | 9 | 9 |
| Rendered videos (consider later) | 0 | 0 | 7 |

No rendered video needs a re-render. Every rendered-side finding is fixed on the unrendered side of the seam or at release.

## Overall verdict

The plan is strong at lesson and module level. Every 2017 content point except the held cultural point is routed to a design; all seven Working Scientifically outcomes have their own skills video; every "conduct" practical point has a video that shows the investigation. From ws-v01 onwards, 53 of the 54 chips that point to an existing design equal its H1 question word for word, and no design relies on a later video for its entry knowledge. Recurring devices are introduced once and reused: "Known to moles, ratio, unknown" (m2-v14, extended in m2-v20, shared with Year 12 `chem-m6-c12`); "Hit often, hit hard, hit right" grown across m3-v13 to v15; "Swap partners, check both" and the salt-naming line shared with Year 12 (`chem-m5-c13`, Module 6 bank); the skills family "Name it, size it, fix it" and "Ask it, model it, test it, check it"; the ws-v02/ws-v03 meanings of valid, reliable, accurate and precise; the magnesium-and-burette data thread (m2-v04 to ws-v05) and the copper sulfate hydrate thread (ws-v01 to m2-v06). Narration is 5,511 to 6,426 characters in every design, with no em dashes. The chemistry is accurate: no numerical error in the recomputed set.

The faults are at course level and at the seams: the held cultural video (m3-v06) whose hold no longer applies; the Module 1 bonding block (v18 to v20, v22 to v27) stuck behind a source-hash gate while the published Module 2 videos already depend on it; a corrections log that has no rows for site lessons M2 L15, M3 L01 and M2 L18's new errors; three seams where an unbuilt design must now match a frame that is already rendered; and course labels that would break the one-take, two-syllabus rule.

## Unrendered designs: design fixes

### Blockers

#### UB1. m3-v06 has no design, and its hold no longer applies

- **Where.** Route `chem-y11-m3-v06` (playlist 60; point `C3-IQ1-04`: "investigate the chemical processes that occur when Aboriginal and Torres Strait Islander Peoples detoxify poisonous food items"), status "held for owner cultural decision and attributed source"; route `stop`: "Use an attributed community-specific account ... No design until provenance and permission are resolved." `chem-y11-design-brief.md` line 32 and `root-decisions-chem-y11-m3.md` item 1 hold it. `chem-y11-m3-v05.md` final frame and scene 18 chip already point to it: "Next: How do particular Aboriginal and Torres Strait Islander food-processing practices remove toxins?".
- **Why it blocks.** The owner decided on 18 November that no cultural reviewer will be sought and such content is taught in general, safe terms rather than held. It is the only unrouted mandatory point in the course, playlist position 60 is empty, and m3-v05 hands over to a video that does not exist.
- **Fix.**
  - Rewrite the route entry (root): learner question "What chemistry removes toxins when Aboriginal and Torres Strait Islander Peoples prepare poisonous plant foods?"; stop "Explain the chemical and physical processes in general terms (no named communities, people, places or specific traditional-knowledge cases); not a food-preparation instruction"; status designable.
  - Design m3-v06 on that question. Chemistry it can carry, all from earlier videos: grinding and pounding raise surface area (m3-v15 recall), so a soluble toxin dissolves out faster; leaching in running water removes water-soluble toxins because the toxin molecules are polar and attract water (m1-v27 recall); heating can denature an enzyme that would otherwise release or form a toxin, and can decompose some compounds (m3-v02's decomposition); repeating the wash until the water is free of the toxin is a concentration idea (m2-v10). Close on the principle that this knowledge was built by observation and testing over many generations and belongs to its knowledge holders. Include one or two of the site L06 balancing items as the practice task (the site lesson also consolidates balancing for L01 to L05).
  - Then change m3-v05's chip and last two sentences only to the new question (m3-v05 Decisions item 1 already allows this). m3-v07's opening is self-contained and can stay; optionally reconcile it to m3-v06's final frame.

#### UB2. The Module 1 bonding block is held while published Module 2 videos already depend on it

- **Where.** `chem-y11-voicing-readiness.md`, brief 260 addendum: m1-v18, v20, v22, v23, v24, v25, v26, v27 "Held: source hash mismatch" (only v19 is ready). Published `chem-y11-m2-v01` opens "Last time, a hundred grams of water and ten grams of salt made a hundred and ten grams of solution" (m1-v27's ending) and balances CuCO₃, MgO and H₂O; m2-v02 to v04 rely on formulas and names (m1-v19, v20). The YouTube playlist has m2-v01 to v04 at positions 18 to 21, directly after m1-v15; m1-v16, v17 and v21 are rendered but not published.
- **Why it blocks.** AGENTS.md requires prerequisites before dependent lessons are released. Today a student following the playlist goes from Group 1 metals (m1-v15) to a conservation video that recalls a dissolving video, ion formulas and naming they have not seen. Bonding (C1-IQ4-01 to -05) is also the whole of Module 1's fourth inquiry question.
- **Fix.** Root resolves the brief 260 stop for the eight files: either rerun the Codex error check on the current sources (the differing scenes are listed in `work/brief260/source-comparisons.json`; narration is unchanged) or accept them as root with that evidence. Apply US1, US3 and US4 below in the same pass (they touch v20 and v27 visuals and v27's first spoken sentence). Voice wave 7, build v18 to v20 and v22 to v27, then publish m1-v16 to v27 into YouTube playlist positions 18 to 29 (0-based, as the release log counts) so m2-v01 to v04 move to 30 to 33 (upload order can stay separate). Prioritise v18 to v20 and v27, which m1-v21 and m2-v01 open on.

#### UB3. Live site errors beside these videos are not in the corrections log

- **Where.** The log covers M1 to M4 through briefs 177 to 184, but has no rows for site lessons M2 L15 (gas laws and gas stoichiometry; videos m2-v16 to v20), M3 L01 (m3-v01), M2 L18's new rows (ws-v05) or M2 L04's notes 1 and 4 (m2-v16). Each design's "Site notes ... for root to log if accepted" block holds the rows. Re-checked live on `C:/Users/kygs/teaching-app-fix` today: all present (appendix).
- **Why it blocks.** The worst is an arithmetic error that contradicts both the video and the site's own quiz: M2 L15 trap 1, "off by a factor of 24.8 ÷ 22.71 = 1.107, a 10.7% error" (24.8 ÷ 22.71 = 1.092, 9.2%; 1.107 is 24.8 ÷ 22.4). Videos embedded on these pages will disagree with the text beside them. It blocks release onto the site, not voicing.
- **Fix.** Copy the appendix rows into `site-corrections-chem-y11.md` with the exact quotes from each design's site-notes block, re-verified against `C:/Users/kygs/teaching-app-fix` (the route and older design text name the dead `C:/Users/kygs/hscscience`). Do not edit the site.

### Should fix

#### US1. m1-v20 and m1-v27 must end on the frames that m1-v21 and m2-v01 already show

- **What to match (confirmed).** Match the built frames, not the designs: m2-v01 is published and m1-v21 is rendered, and each opens by drawing the previous video's final frame itself.
  - m1-v20's final frame = `V20Final` in `src/explainer/lessons/chem-y11-m1-v21/opening.tsx` (heading "Naming compounds: from formula to name"; chip `V20_NEXT` "Next: how does electron attraction connect ionic and covalent bonding?"; cards "NaCl / sodium chloride" with teal Na⁺ and Cl⁻ and the "ions" hand tag, "CO₂ / carbon dioxide" with the shared pair and "shared electrons" / "shared pair"; "?"; the rope line tagged "pull on electrons: electronegativity"; positions in `V20`).
  - m1-v27's final frame = `V27Final` in `src/explainer/lessons/chem-y11-m2-v01/opening.tsx` (heading "Why some things dissolve"; chip `V27_NEXT` "Next: why must mass be conserved when a chemical equation is balanced?"; the balance `balGeo(96, 440, 460)` reading "110.0 g" with the salt-solution beaker, "beaker tared", rows "water 100.0 g + salt 10.0 g" and "100.0 + 10.0 = 110.0 g", the ion lens "every particle still there"; no "Module 1 complete" tag).
- **Differences in the current designs.** `chem-y11-m1-v20.md` scene 17 Visual tags the rope "pull on electrons: electronegativity (v14)"; built frame has no "(v14)". `chem-y11-m1-v27.md` Decisions "Module close and handoff", scene 15 Visual, the final-frame line and the build notes add a grey "Module 1 complete" tag; the built frame omits it (root rule, 21 November). Narration on both sides already agrees (v20 scene 17 / v21 scene 1; v27 scene 15 / m2-v01 scene 1).
- **Fix.** Edit both designs to the built wording (drop "(v14)"; drop the "Module 1 complete" tag in all four places). Builders import `V20Final` and `V27Final` (move them into a small shared module, or freeze them as m1-v16 and v17 do) and end v20 scene 17 and v27 scene 15 on them, so the seams are pixel-identical. No narration change.

#### US2. m2-v05 must end on the frame that the rendered m2-v06 already opens with

- **Where.** `chem-y11-m2-v05.md` "Final frame": tags "2 : 3 by atoms" and "not 2 : 3 by mass", chip "Next: Why do reaction coefficients give mole ratios rather than mass ratios?". Rendered `src/explainer/lessons/chem-y11-m2-v06/s1.tsx` (`FePanel`, `HookBoard`, scene 1): panel "Fe₂O₃" with "2 Fe : 3 O by count" and the share bar "by mass: Fe 69.9%, O 30.1%"; equation "2H₂ + O₂ → 2H₂O" with teal coefficients, chips "2 : 1 : 2" and "mass ratio?"; the "Next" chip reads "Next: why coefficients give mole ratios" (34 px, bottom right).
- **Fix.** Change m2-v05's final-frame line, scene 15 Visual and the matching Decisions bullet to the rendered wording and layout, and build scene 15 from m2-v06's `FePanel` and `Eq` components (drop m2-v06's "last video" tag, which belongs to v06). The H1 of m2-v06 is unchanged; only the chip text differs, which is acceptable.

#### US3. On-screen course labels in unrendered designs

- **Where.** `chem-y11-m1-v27.md` "Module 1 complete" (lines 35, 158, 296, 322); `chem-y11-m2-v20.md` "Module 2 complete", "end of Module 2" (77, 170) and grey tag "rates: Module 3" (117); `chem-y11-m3-v01.md` "Module 2 complete", "Module 3: Reactive Chemistry", "as you saw in Module 2" (25, 28, 93, 108); `chem-y11-m3-v15.md` "Module 3 complete", "end of Module 3" (74, 189); `chem-y11-m4-v01.md` "Module 3 complete", "why? later in Module 4" (25, 26, 98); `chem-y11-m4-v04.md` "why does it happen at all? later in Module 4" (63).
- **Why.** The build rule drops these at build time, but the designs then disagree with the builds (as already happened at m1-v27 / m2-v01), and the next opening frame copies them. These videos map to the 2025 course, where module numbers differ.
- **Fix.** Delete the "complete" tags; replace "rates: Module 3" with "rates: a later video"; "Module 3: Reactive Chemistry" with the heading "Reactive chemistry"; "as you saw in Module 2" with "as you saw with the gas syringe"; "later in Module 4" with "later". Update the matching next-opening lines (m3-v01 line 25, m4-v01 line 25).

#### US4. Spoken course labels in unvoiced designs

- **Where (narration lines).** `chem-y11-m1-v27.md` scene 15 "That's the end of Module one."; `chem-y11-m2-v05.md` "Back in Module one, we started from a formula"; `chem-y11-m3-v08.md` "The syllabus names one more property, electronegativity."; `chem-y11-m4-v04.md` "In Module Three, a catalyst gave hydrogen peroxide"; `chem-y11-m4-v05.md` "Here's the flask from Module Three"; `chem-y11-m4-v14.md` "That finishes Module 4." and "And that's the end of Year 11 Chemistry."
- **Why.** One take must serve 2017 and 2025 (`syllabus-reuse-audit-2026-11-21.md` action 2). In 2025, percentage composition (m1-v07) moves to FA2 beside empirical formulae, and rates and energy are both FA3, so "Module one" and "Module Three" would be wrong. None of these designs is voiced yet, so the change is free.
- **Fix.** m1-v27: delete the first sentence ("Here's one more thing about dissolving." then follows). m2-v05: "Earlier, in the percentage composition video, we started from a formula". m3-v08: "One more property matters, electronegativity." m4-v04: "In the rates videos, a catalyst gave hydrogen peroxide"; m4-v05: "Here's the flask from the rates videos". m4-v14 is 2027-only (Gibbs is in neither 2025 course), so its labels may stay; if changed, "That finishes our look at what drives reactions." Recount characters (all stay inside the 5,500 to 6,800 band).

#### US5. m4-v08 calls a heat-loss problem a reliability problem

- **Where.** `chem-y11-m4-v08.md` scene 9: "It's far more reliable than a school calorimeter, which lost over half the heat".
- **Why.** ws-v02 and ws-v03 (published) define reliable as "repeating the whole experiment gives consistent results"; losing heat is a systematic error that lowers accuracy (m4-v03 teaches exactly that).
- **Fix.** "It's far more accurate than a school calorimeter, which lost over half the heat". Same length.

#### US6. m3-v07 brings back the safety screen that m1-v15 dropped

- **Where.** `chem-y11-m3-v07.md` scene 5: "your teacher shows them behind a safety screen, or on video, like in the alkali metals video", with `y11c-safety-screen-v1.png`. Root decision 33 put published m1-v15 on the approved-video route because the NSW conditions for the demonstration were not verified; readiness item 3 left this open.
- **Fix.** "Potassium and sodium react so violently with cold water that we watch them on video, like in the alkali metals video." Show the troughs in m1-v15's coded clip frame tagged "illustrated clip" and drop the screen plate. One sentence, unvoiced.

#### US7. The route and the design brief no longer describe the course

- **Where.** `chem-y11-route-inputs.json`: every `sourceLessons.path` and `sources` points to `C:/Users/kygs/hscscience` (gone); all 59 cited site files now hash differently on the clone (the site has been edited since 5 November); `teachingStatus` reads "research proposal" for designed and published videos; m3-v06's `stop` contradicts the 18 November rule (UB1); m4-v14 `nextHandoff` is a depth-study instruction. `chem-y11-design-brief.md` lines 11 and 32 repeat the dead path and the hold.
- **Fix.** Root repoints paths to `C:/Users/kygs/teaching-app-fix`, re-hashes, updates statuses and the m3-v06 entry, and lifts the hold in the brief. Before each unrendered design is voiced, re-read the site sections it quotes (the "Used:" lists in each Scope line) where the hash changed, and log any new error.

#### US8. The course end does not hand over to Year 12

- **Where.** `chem-y11-m4-v14.md` final frame chip "plan and complete your depth study with your teacher"; no video covers the depth study.
- **Why.** The 2017 cohort that watches m4-v14 (Term 4 2027) goes straight into the published Year 12 course, whose opener `chem-m5-c01` asks "A sealed bottle of soda water looks completely still. Has everything stopped?" and uses Gibbs, enthalpy and entropy from Year 11 (`chem-m5-c03`, `c04a`).
- **Fix.** Keep the spoken depth-study line; change the chip to "Year 12: a sealed bottle of soda water looks still. Has everything stopped?" (a "Year 12" reference is allowed by the build rule). Optionally add one sentence: "Next year you'll use delta G to explain why some reactions stop part-way." A depth-study planning video is a separate owner decision (note UN9).

#### US9. m1-v18 has no fission equation, which the 2025 course will need

- **Where.** `chem-y11-m1-v18.md` author note (b): fission and fusion left out because the site marks them "Beyond the syllabus"; scene 8's grey tag says "the same two rules balance every nuclear reaction". `syllabus-reuse-audit-2026-11-21.md` row m1-v18: "2025 adds fission equations; check one fission example is present"; 2025 point C25-FA1-G2-09 "Construct balanced nuclear equations for nuclear decay and nuclear fission".
- **Fix.** The 2017 point ("types of balanced nuclear reactions") allows it, and the video is unvoiced. Add one worked line after the neutron-capture example: ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n (tops 236 = 141 + 92 + 3; bottoms 92 = 56 + 36 + 0), about 250 characters, so the video serves both courses. Recheck the count (currently 5,632).

### Notes

- **UN1. Module 1 chips paraphrase two titles.** m1-v18's chip "how do ion charges decide a compound's formula?" against v19's H1 "How do ion charges determine a neutral inorganic formula?"; m1-v23's chip "why can a metal bend and still conduct electricity?" against v24's H1 "Why can a metal bend while retaining electrical conductivity?". Module 1 uses short lowercase chips throughout (published v01 to v17 do the same) and each next opening repeats the chip, so this is consistent. Optional: retitle v24 to the chip's plainer wording.
- **UN2. Hydrogen carbonate.** Year 12 `chem-m6-c01` assumes "polyatomic ions (hydroxide, carbonate, hydrogen carbonate, ammonium, sulfate)" from Year 11. m1-v19 teaches hydroxide, nitrate, carbonate, sulfate, phosphate and ammonium; hydrogen carbonate is first named in m3-v05 (NaHCO₃, spoken twice), so it is met in Year 11. Optional: add HCO₃⁻ to m1-v19's ion card (visual only).
- **UN3. "Year 11: gases dissolve less when warm"** is a chip in published Year 12 `chem-m8-c05`; no Year 11 design teaches it. Optional one clause in m3-v01's sparkling-water scene ("a warm drink goes flat faster, because gases dissolve less when warm").
- **UN4. 24.79 L mol⁻¹ before its reason.** Published m2-v04 uses molar volume as a given and points forward; m2-v16 then explains equal volumes. Deliberate and recorded in m2-v16's Scope. No action.
- **UN5. Stale Status lines.** Most Revision 3/4 designs still read "Needs a Codex error check of the visual plan before plates and build"; the readiness file supersedes them for narration. Refresh at the next edit.
- **UN6. Science spot-check (unrendered designs).** Recomputed in Python, none wrong: m2-v05 MgSO₄·7H₂O (0.1421 ÷ 0.02027 = 7.01), Fe₂O₃ 1 : 1.50, CH₂O; m2-v07 56.0 g Fe, 15.3 g Al₂O₃, 3.18 g Cu; m2-v08 10.1 g MgO, 3.92 g Mg left, 25.4 g NaCl, 4.58 g Cl₂ left, 1.98 g CH₄ left; m2-v11 0.154, 8.06 × 10⁻⁴, 0.882 mol L⁻¹, 5.04 × 10⁻⁵; m2-v14 0.2134 mol L⁻¹; m2-v15 710 mg L⁻¹ chloride, 0.0813 / 1.29 / 1.78 g at 24.79 L; m2-v17 PV column and the 2 mL dead volume; m2-v18 62.4 mL, 51.1 mL, 165 kPa, OpenStax fit zero −273.08 °C; m2-v19 2.40 g N₂ (slip 32.2 g), 234 kPa; m2-v20 2.94 × 10⁻³ mol, 0.294 g, wrong-route 0.287 and 0.313 g, 74.4 mL H₂, 1.99 × 10⁻³ mol O₂ (and the 142 mL doubled case is correctly shown as needing a bigger syringe); m3-v12 all eight E°cell values; m4-v02 9781 J, 5.85 °C, 2758.8 J, 9196 J, 1655 J; m4-v03 −626 kJ mol⁻¹, 54%, −464 and 36%; m4-v04 +14.1 kJ mol⁻¹, −42.6; m4-v06 −184, −93, −808, −124; m4-v07 −110.5, −395.7, +33.2; m4-v08 −1366.7, −2219.9, −571.6 / −375.6; m4-v09 −74.5, +13.5, 55.5 / 47.9 / 141.8 / 49.5 kJ g⁻¹; m4-v10 −2802.5, 156 kJ; m4-v12 −198.1, +2.9, −188.0, +118.8; m4-v13 −32.8, +130.4, +474, −234; m4-v14 1110 K = 837 °C, 463 K, 273 K, ±0.11. Claims read and correct include: v20's statement that compositional names are valid IUPAC names (brief 179 blocker repaired); v25 graphite "stays solid to well above three thousand degrees" and quartz "about seventeen hundred"; v22 MgO about 2850 °C; dry ice −78 °C; the brief 179 repairs (no ⁰₀γ left in m1-v18).
- **UN7. Order and site departures that are right.** The route follows the syllabus inquiry order where the site does not: atomic structure (site M1 L13 to L20) before bonding (site L06 to L12), because bonding needs ions, shells and electronegativity; stoichiometry (site M2 L11 to L13) before titration (site L10), because titration needs mole ratios; Hess's law (site M4 L08) before formation enthalpies (L07), because the formation method is a Hess cycle. All are design-right.
- **UN8. Site lessons correctly not designed.** M1 L11 polymers (Year 12 Module 7 in 2017; not in 2025 Year 11 either), M2 L17 back titration (Year 12 Module 6), M2 L05, L19, L20 (consolidation and review). M2 L14 percentage yield and purity is partly covered (m2-v08, m2-v20, m2-v15) and is not a separate 2017 Year 11 point.
- **UN9. Depth study.** The 2017 syllabus requires at least one Year 11 depth study (15 hours). No video supports it and the site has no depth-study lesson. If the owner wants one, it belongs in the skills series after ws-v07 (planning a depth study from a question); not a coherence fault.

## Rendered videos: consider later (no re-render recommended)

- **RN1. Spoken course words in published videos.** m1-v06 "which the syllabus calls percentage by weight"; m2-v03 "Notice the difference from Module one". Correct for 2017; slightly off in 2025 order (the 2025 point is "% (w/w)" and relative atomic mass sits in FA1). Not a defect. Fix only if either video is re-rendered for another reason.
- **RN2. Playlist positions.** m2-v01 to v04 sit at YouTube positions 18 to 21. When m1-v16 to v27 publish (UB2), insert them at 18 to 29 and keep playlist order separate from upload order (AGENTS.md); mirror the order on Bunny.
- **RN3. The built openings are now the source of truth** for m1-v20's and m1-v27's final frames (US1). Do not alter `chem-y11-m1-v21/opening.tsx` or `chem-y11-m2-v01/opening.tsx` when v20 and v27 are built; import from them.
- **RN4. m2-v06's opening chip** ("Next: why coefficients give mole ratios") is shorter than the design chip; acceptable, and m2-v05 is changed to match it (US2).
- **RN5. `chem-y11-m2-v01.md` still describes the "Module 1 complete" tag** in its Boundary, opening-frame and scene 1 lines, although the build omits it. Update the design text for the record; no re-render.
- **RN6. Chip style differs by module.** Module 1 (published) uses short lowercase chips; Modules 2 to 4 and the skills videos use the next question verbatim. Consistent within each module; no action.
- **RN7. Seams checked and sound.** m1-v17 → m1-v18 (built final frame: ²³⁸₉₂U alpha line, "⁵⁹Co + neutron → ⁶⁰Co", chip, equals v18's opening); m1-v21 → m1-v22 (6 × 4 ion layer, salt jar, "hard?", "melted or dissolved?"; `GRID` is exported for reuse); m2-v04 → ws-v04 (notebook card in `common.ts`; the five run lines give 12.10, 20.60, 22.40, 35.30 and 42.20 mL, exactly ws-v04's points); m2-v06 → ws-v06 (old crystals, "lost only 30.2%", "formula: 36.1%", model panel). Only the m1-v20, m1-v27 and m2-v05 seams need work (US1, US2).

## Course-level checks (summary)

- **Completeness.** 52 of 52 content points routed; 51 have designs (C3-IQ1-04 is UB1). 20 of 20 Working Scientifically points routed to ws-v01 to ws-v07 (one video per outcome). All 15 practical points (13 "conduct" or "practical investigation" points plus the flame test and calorimetry points) have a video that shows the investigation with illustrative data and safety (table in the coverage map). Every syllabus example sub-point was found in a design: Bohr and Schrödinger (m1-v10), metalloids and state at room temperature (m1-v12), Lewis dot diagrams (m1-v21), VSEPR (m1-v23), allotropy (m1-v25), the four gas laws by name (m2-v16 to v19), C to CO₂ via CO (m4-v07), photosynthesis and respiration (m4-v10), digital data logging (m3-v14, m3-v15, m4-v02).
- **Sequence and double teaching.** No design recalls a later video as entry knowledge (script check of every "Recalls" and "Entry knowledge" line; apparent hits were cross-module shorthand). Recall lines say "as in the ... video" rather than re-teaching (for example m3-v07 recalls m1-v15's alkali metals, m3-v08 owns the periodic explanation that m3-v07 defers, m4-v05 recalls m3-v15's catalyst flask). Year 11 m2-v14 (titration) meets ideas that Year 12 `chem-m6-c12` deepens; it leaves indicator choice to Year 12, which is the right split.
- **Hand-over into Year 12.** Year 12 entry lines that cite Year 11 were checked: n = m/MM, n = cV, dilution, balancing, ionic formulas, electronegativity and polar bonds, hydrogen bonding on F, O, N (m1-v26's "H-FON"), excited electrons emitting light (m1-v10, v16), enthalpy and entropy and ΔG = ΔH − TΔS (m4-v11 to v13), percentage yield as a term (m2-v08), titration terms and concordance (m2-v12 to v14, ws-v04). All taught, except two small items (UN2, UN3). Shared aids already agree across the hand-over (US8 adds the missing course-end chip).

## Lesson-level handoff and entry checks (summary)

- **Chips.** 82 consecutive pairs. From ws-v01 onwards: 53 of the 54 chips that point to an existing design equal the next H1 word for word, and each next opening frame repeats the chip. The exception is published m2-v03 ("How can a practical determine molar mass?" against m2-v04's "How can measuring a mass and a gas volume reveal a molar mass?"), a paraphrase that needs no action. Module 1: short paraphrase chips by design (UN1), every one repeated in the next opening. Faults: m3-v05 → m3-v06 (no design, UB1); course end (US8).
- **Openings recreated from unbuilt designs (the known issue).** m1-v21's opening is m1-v20's final frame drawn from v20's design, and m2-v01's is m1-v27's; both are now rendered, so v20 and v27 must match them (US1). A third case was found: rendered m2-v06 opens on m2-v05's final frame drawn from an earlier wording (US2).
- **Reconciled openings.** Root reconciled m1-v06, v13, v23, m2-v12, ws-v05, m3-v02, m3-v13 and m4-v09 openings on 5 and 6 November; each opening line names the frame it reconciles to; the m2-v20 → m3-v01 → m3-v02 chain was re-read in full and matches apart from the course labels in US3. The rest were not re-read element by element; the builder's opening-frame check covers them.

## Site fit

- **Design right, site off the mark:** the corrections in the appendix and the logged rows; the sequence choices in UN7; polymers and back titration left out (UN8); M3 L06 names a community and a specific case, while the video must stay general (UB1).
- **Site right, design departs:** M3 L06 detoxification, which the site teaches and the course has not designed (UB1).
- **Neutral departures:** one site lesson split into several videos (M1 L03, L04, L05, L13, L14, L17 to L19; M2 L02, L07, L11, L15; M3 L07 to L09, L12; M4 L02, L11, L13); several site lessons merged into one video (m1-v21 from L18 and L19; m2-v14 from L10 and L16); the skills block taken from M2 L18 into seven videos placed at the point of use.

## Moving to the 2025 syllabus (what matters now)

`timeline.md` and the reuse audit: 2025 Year 11 Chemistry starts Term 1 2028. Of the unrendered designs, 47 serve 2025 Year 11, m3-v11 and m3-v12 (galvanic cells) serve 2025 Year 12 FA4, and m4-v07 to v14 (Hess's law, formation enthalpies, entropy, Gibbs) are 2027-only. So:
1. Keep course labels out of the 47 long-life designs, spoken and on screen (US3, US4). m3-v11 and v12 especially must not say "Year 11" or "Module 3": check at voicing (none found today).
2. Cheap long-life additions while unvoiced: one fission equation in m1-v18 (US9).
3. The 15 2025 gap points (reuse audit) include five Aboriginal and Torres Strait Islander points; m3-v06, designed in general terms now (UB1), can be reused for C25-FA3-G1-03 (toxin removal as decomposition) if it explains heating and decomposition without a named case.
4. In 2025, m1-v07 (percentage composition) sits in FA2 beside m2-v05; nothing in its narration ties it to Module 1, so it reorders cleanly.

## Appendix: site errors for `site-corrections-chem-y11.md` (not yet logged; all re-checked live on 23 November)

| Site lesson | Design holding the rows | Errors (short) |
| --- | --- | --- |
| M2 L15 | m2-v17 notes 1 to 4 | trap 1 "24.8 ÷ 22.71 = 1.107, a 10.7% error" (should be 1.092, about 9%); Boyle method varies pressure "by adding masses" though the sensor method sets V; no limitation for the tubing dead volume; laws stated without a collision cause |
| M2 L15 | m2-v18 notes 1 to 3 | Charles bath heated "from room temperature toward boiling" (plastic syringe softens; scald risk; suggest about 80 °C); worked example uses 273 beside a 273.15 formula card; key terms "STP 0°C (273 K)", "RTP 25°C (298 K)" |
| M2 L15 | m2-v19 notes 1 to 3 | "629.8 ÷ 95.0" with the intermediate unlabelled (nRT in kPa L); no reason why real gases behave nearly ideally |
| M2 L15 | m2-v20 notes 1 to 3 | no practical for a gas made in a reaction; no example at measured conditions; kiln answer says the actual volume is "much larger than calculated" (same amount; larger volume only at kiln temperature) |
| M2 L15, L04 | m2-v16 notes 1, 3, 4 | 25 °C and 100 kPa called "SATP ... Current IUPAC standard" in L04 and "RTP" in L15; "Step 0" and "Step 5" against a four-step method; L04 Q4 "used a single nitrogen atom mass" (0.500 mol N₂ = 14.007 g; the stated cause is wrong) |
| M3 L01 | m3-v01 notes 1 to 5 | NH₄NO₃ dissolving listed under the temperature-change indicator though the lesson calls it physical; firework colour called a "colour change" indicator (it is emission); "Sr → red, Cu → green/blue" against "Blue: Copper compounds"; "Zn dissolves in HCl" for a chemical change; conservation stated for mass only, the dot point is atoms |
| M2 L18 | ws-v05 notes 7, 8 | lost precipitate and lost analyte drops classed as random (always low: a one-directional error or a mistake); random "cannot be eliminated" beside systematic, with no line separating uncertainty from error |
| M4 L03 | m4-v02 note 3 | worked example 2 data (ΔT 13.2 °C, −41.4 kJ mol⁻¹, 27% short) used as the model answer; suggest data near the expected rise (suggestion, not an error) |
| M1 L20 | m1-v18 note 2 | Tc-99m "produced from a molybdenum-99/technetium-99m generator in hospitals" (Mo-99 is made in a reactor; minor wording) |
