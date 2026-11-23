# Health and Movement Science: programme status

Written by Claude (designer of record), 23 November 2026 (updated the same day after root rulings and designs v03 to v18). New course; nothing existed for HMS in this repo before today. Nothing is committed, voiced, rendered or published.

## Site-content finding

The HSCScience site has the whole HMS course. The read-only clone `C:/Users/kygs/teaching-app-fix` (branch main, commit 5d74a6272, 16 Nov 2026) holds `subjects/health-movement-science/` with 84 lessons: Year 11 module 1 "Health for individuals and communities" (18), module 2 "The body and mind in motion" (22); Year 12 module 3 "Health in an Australian and global context" (22), module 4 "Training for improved performance" (22). Each page is a full lesson (58 to 87 KB) with five core cards, two worked responses, misconception boxes and practice. The site also holds the NESA HMS 11-12 (2023) syllabus PDFs and a verbatim, page-verified spine (`docs/syllabus/hms-11-12-2023.json`). So the route mirrors the site; no "pending site lessons" fallback was needed. (The path `C:/Users/kygs/hscscience` named in older briefs does not exist on this machine.)

## Done

| Deliverable | File | Count |
| --- | --- | --- |
| Course design brief (with root rulings of 23 Nov) | `hms-design-brief.md` | 1 |
| Video route | `../hms-video-route.md` and `../hms-video-route.json` | 84 videos (Y11: 18 + 22; Y12: 22 + 22) |
| Pre-designs | `pre-design/hms/<id>.md` and `pre-design/hms/hms-index.md` | 84 packs |
| Full lesson designs (Revision 1) | `lessons/hms-y11-m1-v01.md` to `lessons/hms-y11-m1-v18.md` | 18 (Year 11 first focus area complete) |
| Site corrections | `site-corrections-hms.md` | 14 items; 1 to 14 accepted by root |
| Route and coherence scripts | `scripts/hms/` (`build_route.py`, `route_data.py`, `extract.py`, `count.py`, `dump.py`) | rebuild with `python -X utf8 scripts/hms/build_route.py` |

| Design | Topic | Narration | Length | New plates | Notes |
| --- | --- | ---: | ---: | ---: | --- |
| hms-y11-m1-v01 | meanings of health | 6,178 | about 569 s | 5 | at the cap; reserve cuts listed |
| hms-y11-m1-v02 | dynamic nature of health | 5,663 | about 530 s | 5 (+1 overlay) | |
| hms-y11-m1-v03 | measuring population health (bathtub) | 6,031 | about 557 s | 2 | uses the corrected Table 1 (site correction 5) |
| hms-y11-m1-v04 | social justice principles | 5,624 | about 523 s | 3 | mechanism follows site correction 6 |
| hms-y11-m1-v05 | determinants of health | 5,875 | about 542 s | 3 | dated AIHW life expectancy figures on the hook (release re-check) |
| hms-y11-m1-v06 | young people across generations | 5,702 | about 529 s | 1 | one rich anchor plate |
| hms-y11-m1-v07 | investigating young people's meanings of health | 5,999 | about 551 s | 3 | introduces the research cycle and the validity, reliability, credibility trio |
| hms-y11-m1-v08 | health status of young people | 5,812 | about 537 s | 1 | dated AIHW burden finding added (2024 data); bars stay illustrative |
| hms-y11-m1-v09 | researching one health issue (sleep on school nights) | 6,148 | about 566 s | 2 | introduces the seven-question issue frame and strategy levels; two dated ABS sleep figures; site corrections 7, 8 |
| hms-y11-m1-v10 | personal skills I (self-efficacy, health literacy, help-seeking, problem-solving) | 6,116 | about 560 s | 3 | introduces the skill-and-condition socket board; sleep issue threaded through; site correction 9 |
| hms-y11-m1-v11 | personal skills II (resilience, coping, purpose, ethical behaviour, connectedness) | 5,906 | about 542 s | 3 | introduces the coping timescale; resilience on the v02 continuum; general cultural line |
| hms-y11-m1-v12 | reflecting on your own health; a course of action | 5,587 | about 520 s | 2 | introduces the agency boundary and names the intention-behaviour gap; site corrections 10, 11 |
| hms-y11-m1-v13 | young people as advocates | 6,051 | about 555 s | 5 (3 shared with v14) | introduces ask and audience and the participation ladder; 1965 bus tour in general terms; site correction 12 |
| hms-y11-m1-v14 | organisations and communities | 6,082 | about 559 s | 1 | introduces the three-sector board and the impact staircase; ACCHOs in general terms; vaping chain flagged for release re-check |
| hms-y11-m1-v15 | health promotion I: approaches and global policies | 6,120 | about 562 s | 2 | introduces the nested approach bands; dated AIHW smoking figure (24% in 1991 to 8.3% in 2022–23); adds the syllabus examples the site omits (site correction 13) |
| hms-y11-m1-v16 | health promotion II: the Ottawa Charter and partnerships | 6,123 | about 562 s | 1 | introduces the Ottawa grid with the empty-row test; adds a general culturally and linguistically diverse partnership example (site correction 14) |
| hms-y11-m1-v17 | the SDGs and health | 5,950 | about 547 s | 1 | introduces the SDG ring (house tones, no UN marks); girls' education mechanism; honest evaluation of Australia's use |
| hms-y11-m1-v18 | the SDGs in a local community | 5,722 | about 528 s | 2 | introduces the six-step localisation method; SDG-washing test; closes the focus area and hands off to hms-y11-m2-v01's knee (segment linkage) |

- The route's per-video status now reads "full design written" automatically when `lessons/<id>.md` exists. The site digest is regenerated into `%TEMP%/hms-site-digest.json` when missing (not kept in the repo).
- **Dated official figure (v05, root ruling).** AIHW, *Deaths in Australia*, "Life expectancy across population groups" (web report, last updated June 2026), people born in 2024: lowest against highest socioeconomic areas, males 78.4 against 83.8 years (gap 5.4), females 83.0 against 87.0 (gap 4.0). Shown with source and year; spoken "around four to five years". **Release re-check** before voicing and before publication. Source: https://www.aihw.gov.au/reports/life-expectancy-deaths/deaths-in-australia/contents/life-expectancy/life-expectancy-across-population-groups
- `scripts/hms/count.py` gained `--refill` (recount a design whose counts were already filled).
- Route correction made while designing v05: the determinants' interaction kinds are the site's "chains, clustering and feedback" (the route draft said "multipliers, buffers"); fixed in `route_data.py` and rebuilt (no coherence findings).

## Root rulings (23 Nov 2026)

Q2 regional plates and limb-segment line diagrams only, no whole-body figure; Q3 the Google voice for all HMS; Q4 cultural content general, no names; Q5 a small set of dated official figures (AIHW, ABS) allowed, with source and year on screen and a release re-check flag in each design; Q6 site corrections 1 to 4 accepted (5 and 6 accepted later the same day); HMS accent olive `#5d6b2a`; v05 uses the dated AIHW life expectancy gap. Recorded in `hms-design-brief.md`. Q1 (Year 11 or Year 12 first) stays with the owner and does not change the designs.

## Pending

- Root approval of the eighteen designs; a Codex syllabus coverage check of the route.
- Independent learning review and science check for v01 to v18 (briefs in each design), then Codex error checks.
- Plates for v01 to v18 (below), then builds. `hms-shared` components specified so far: `ModelLadder`, `QuoteCard`, `DefinitionCard`, `CompareLedger`, `InteractionLoop`, `Continuum`, `TwoRoute`, `MoodTrace`, `Bathtub`, `PopulationGrid`, `FiveQuestionsCard`, `AccessGates`, `EquityColumns`, `PrincipleChain`, `DeterminantsChain`, `GradientSteps`, `CampaignModel`, `TaskFormTable`, `ResearchCycle`, `TargetDiagram`, `ThemeTally`, `BurdenBar`, `IssueTrends`, `FactorBalance`, `IssueFrame`, `StrategyLevels`, `SleepWindow`, `FiveTestsChecklist`, `SkillSocket`, `BarrierWall`, `CopingTimescale`, `AgencyBoundary`, `IntentionGap`, `ReflectionSteps`, `AskAudience`, `ParticipationLadder`, `SourceFan`, `ReachPath`, `SectorBoard`, `ImpactStairs`, `SectorChain`, `ApproachBands`, `PolicyTimeline`, `OttawaGrid`, `SdgRing`, `LocaliseSteps`, `CouncilMap` (and `SegmentLinkage`, first shown in v18's handoff, owned by hms-y11-m2-v01).
- Full designs for hms-y11-m2-v01 onwards (66 videos). Next in route order: hms-y11-m2-v01 (the skeleton, joints and joint actions), which opens on v18's segment linkage: a knee at 180°, then bending to 90° in a squat.
- Add the HMS accent to `SUBJECT_ACCENT` in `src/explainer/shared/tokens.ts` (accepted `#5d6b2a`), and add HMS to the production board and coverage ledger (root; not edited here).

## Root rulings (23 Nov 2026, second set)

The ten plates for v09 to v12 are approved on condition that every plate brief states no people, hands or faces (phone screens show no faces or real app branding); the line is now in every v09 to v12 brief. Site corrections 7 to 11 accepted. Both ABS figures on screen in v09. Superlatives softened now: v08 "a consistent protective factor" (one trusted adult), v11 "one of the strongest links" (connectedness); the later-start citations stay flagged for the science check.

## Root rulings (23 Nov 2026, third set)

v13's five plates approved; the 1965 event stays unnamed (consistent with the cultural ruling); site correction 12 accepted. **v08 scene 2 cue-order fix:** the visual description now writes row 1 "1 mostly non-fatal" on "mostly non-fatal" before the "Burden of disease" gloss, matching narration order (no narration change; count unchanged).

## Root rulings (23 Nov 2026, fourth set) and cue fixes

- **Rulings.** The seven new plates for v14 to v18 are approved. Site corrections 13 and 14 are accepted. v15 may show the dated AIHW smoking figure on screen (24% in 1991 to 8.3% in 2022–23, NDSHS 2022–2023), source and year on screen, **flagged for release re-check**.
- **Cue fixes (no narration changed, counts unchanged).** v02 scene 4: the cues now read "seventeen-year-old sprinter" and "seventy-year-old" (the narration says "A seventeen-year-old sprinter", capital A, so the lower-case quoted cue did not match). v03 scene 3: a cue on "mortality" writes the gloss "mortality: deaths, counted or as a rate". v03 scene 5: cues on "Incidence" and "Prevalence" write each term beside the tap and the level; the glosses complete on "counts new cases" and "counts all the cases". v04 scene 3: a cue on "inequity" writes the term and the gloss "inequity: a difference that passes three tests". v04 scene 7: a cue on "right" lights the card's title word. Also found by the same check and fixed: v04 scene 2 cues on "Equality" and "Equity" (each heading underlines), and v08 scene 3 a cue on "trend". A cue checker (every quoted cue verbatim and in spoken order; every bold narration term has an exact cue; no em dash or U+2061) now passes on v01 to v18 and every module 2 design; it is now `scripts/hms/cues.py` (new, 23 Nov).

## Open questions

1. **Production order (owner).** Year 11 or Year 12 first; unchanged.
2. **v08 figure: resolved by design (23 Nov).** AIHW publishes no single combined share for mental and substance use disorders plus injuries at 15 to 24, so the v08 bars stay "illustrative pattern"; scene 2 adds the confirmed dated finding (AIHW, *Australia's youth: Health of young people*, 2024 data: "mental health and behavioural conditions contributed the greatest burden among young people"), source and year on screen, release re-check.
3. **Site corrections 7 to 11: accepted by root (23 Nov).**
4. **v09 dated ABS figures: approved by root (23 Nov) for screen.** ABS, *Measured physical activity and sleep, 2023* (released 24 March 2026): 12 to 17 year olds averaged 7 h 56 min of device-measured sleep; those with screens in the bedroom slept 29 minutes less (7 h 51 min against 8 h 20 min). Confirmed on the page 23 Nov; shown with source and year; release re-check. Source: https://www.abs.gov.au/statistics/health/health-conditions-and-risks/measured-physical-activity-and-sleep/latest-release

5. **v13: resolved by root (23 Nov, third set).** The 1965 event stays unnamed; v13's five plates approved; site correction 12 accepted.

6. **v15 and v16: resolved by root (23 Nov, fourth set): corrections 13 and 14 accepted, smoking figure approved for screen, plates approved.** Was: accept site corrections 13 and 14 (v16: the page covers only Aboriginal and Torres Strait Islander partnerships for "a range of cultural groups"; the video adds a general culturally and linguistically diverse example)? Correction 13 (the site page omits the syllabus's named examples: salutogenic, sociocultural, ecological and Aboriginal and Torres Strait Islander approaches, and UNESCO)? Approve the dated AIHW smoking figure on screen (24% in 1991 to 8.3% in 2022–23, NDSHS 2022–2023, confirmed 23 Nov; release re-check) and two plates?

## Plate requests (designed videos only)

All `hms-` prefix, house watercolour style, transparent PNG with true alpha, no people, hands, faces, brands, logos or readable text. Full prompts are in each design's Codex asset brief.

| Plate | For | Notes |
| --- | --- | --- |
| `hms-asthma-puffer-shoes-v1.png` | v01 (anchor), v02 | reliever puffer with spacer, running shoes, bench |
| `hms-insecure-housing-v1.png` | v01, v02, v05 | cramped room, mattress, boxes, clock at 3:00 |
| `hms-shopping-trolley-v1.png` | v01 | folding trolley at a corner-shop door |
| `hms-family-table-v1.png` | v01 | long table set for many |
| `hms-work-boots-laptop-v1.png` | v01 | hard hat and boots beside a laptop |
| `hms-thigh-hamstrings-v1.png` + `hms-hamstring-tear-overlay-v1.png` | v02 (anchor); later hms-y11-m2-v02 | cut anatomical region, registered overlay |
| `hms-empty-training-field-v1.png` | v02, v06, v08 | oval at dusk, cones, ball bag |
| `hms-rehab-band-sheet-v1.png` | v02 | band on a half-ticked exercise sheet |
| `hms-spikes-and-pill-organiser-v1.png` | v02 | two halves, 2400 x 1400 |
| `hms-shift-roster-apron-v1.png` | v02, v05 | apron on a hook, roster on a corkboard |
| `hms-health-reports-stack-v1.png` | v03 | plain report stack, no logos |
| `hms-empty-gp-waiting-room-v1.png` | v03, v04 | empty clinic waiting room, brochure rack |
| `hms-regional-clinic-v1.png` | v04 (anchor), v05, v08 | 2400 x 1500; steps, blank sign, hours board, bus stop |
| `hms-lunchboxes-v1.png` | v04 | one packed, one empty |
| `hms-community-meeting-room-v1.png` | v04, v07, v08, v09; later v13, v14, v16 | circle of chairs, whiteboard |
| `hms-hospital-bracelets-v1.png` | v05 | two newborn ID bracelets on a blanket, no baby |
| `hms-remote-road-sign-v1.png` | v05; later hms-y12-m3-v03 (not needed in v09) | 2400 x 1400; blank distance sign |
| `hms-suburb-takeaway-strip-v1.png` | v05, v08 (not needed in v09) | 2400 x 1200; takeaway shopfronts, no text |
| `hms-then-now-desks-v1.png` | v06 (anchor) | 2400 x 1300; two desks thirty years apart |
| `hms-survey-clipboard-v1.png` | v07 | clipboard survey sheet, no readable text |
| `hms-voice-recorder-notebook-v1.png` | v07 | recorder on a notebook |
| `hms-locked-file-box-v1.png` | v07 | locked document box, sealed envelope |
| `hms-learner-logbook-keys-v1.png` | v08 | logbook, blank learner plates, car key |
| `hms-bedside-phone-alarm-v1.png` | v09 (anchor) | night bedside table, glowing blank phone, analogue clock at 6.30 |
| `hms-school-gate-morning-v1.png` | v09 | 2400 x 1400; closed school gate, early grey light, no signs |
| `hms-running-shoe-calendar-v1.png` | v10 | worn shoe below a calendar with three short tick runs |
| `hms-supplement-tub-v1.png` | v10 | plain tub, blank starburst sticker |
| `hms-phone-call-screen-v1.png` | v10, v11 | phone on a desk, plain call screen, no text |
| `hms-moving-boxes-v1.png` | v11 | three taped moving boxes, rolled rug |
| `hms-group-chat-phone-v1.png` | v11 | phone with blank chat bubbles, no text |
| `hms-club-noticeboard-v1.png` | v11 | cork board, blank notices and fixture grid, whistle |
| `hms-desk-charger-night-v1.png` | v12 | same room as the v09 bedside plate; phone charging on a desk |
| `hms-planner-week-v1.png` | v12 | open weekly planner, one boxed Wednesday entry, pen |
| `hms-1960s-coach-road-v1.png` | v13 | empty 1960s coach on a country road, no signage |
| `hms-council-chamber-v1.png` | v13 | empty council chamber, no crest |
| `hms-government-office-v1.png` | v13 handoff, v14 | plain office front, flagless pole |
| `hms-ngo-shopfront-v1.png` | v13 handoff, v14 | not-for-profit shopfront, blank brochures |
| `hms-community-hall-v1.png` | v13 handoff, v14 | weatherboard hall, open door |
| `hms-community-health-service-v1.png` | v14, v15 | welcoming small health service, no signs or symbols |
| `hms-plain-pack-patch-v1.png` | v15 | plain drab pack and patch box, no text, no smoke |
| `hms-smoke-free-venue-v1.png` | v15, v16 | empty courtyard, no-smoking pictogram only |
| `hms-outdoor-gym-park-v1.png` | v16 (anchor) | empty outdoor gym stations in a park, unlit pole |
| `hms-water-tap-v1.png` | v17 | outdoor tap running into a basin |
| `hms-school-wall-goals-v1.png` | v18 | seventeen plain painted squares, no SDG colours or icons |
| `hms-dark-sportsground-v1.png` | v18 | unlit country sportsground at winter dusk |

Forty-six plate files (forty-five plates and one overlay). Existing reuse: `y11-blood-tube-unspun-v1.png` (v01), `y11-banknote-v1.png` (v03). Later videos reuse many Biology anatomy plates (listed per video in the route `visualPlan`).

## Course and module coherence

Checked by script over the route (scratch `build_route.py`, re-run after every route edit; result recorded in `hms-video-route.json` `coverage.findings`) and by hand for the two designs.

**Course level.**
- Prerequisites before dependents: every `entryKnowledge` item that cites a video cites an earlier one (0 violations). Year 12 entries that need Year 11 ideas say "recalled in one sentence; do not assume our Year 11 video was watched".
- One visual system: the house explainer system with HMS rules in the design brief (models as the main social-health visual, places and objects instead of people, regional anatomy, coded data, sims for physical motion, one colour-role scheme).
- One memory-aid style: one framed memory card per video from the site's own organising sentence, plus the syllabus's acronyms (FITT, TOTAPS); no invented quotas.
- Recurring models introduced once and reused: 0 violations (no model reused before it is introduced, none introduced twice). Examples: bathtub (Y11 m1 v03, reused Y11 m1 v08, Y12 m3 v01, v05); access gates (Y11 m1 v04, reused Y12 m3 v03, v08); SDG ring (Y11 m1 v17, reused v18, Y12 m3 v19); six-criteria energy table (Y11 m2 v09, reused v10); cardiac output equation (Y11 m2 v14, reused Y12 m4 v08); evidence ladder (Y11 m2 v19, reused Y12 m3 v13). Full table in `hms-video-route.md`.
- No double teaching: the seven Year 11 and Year 12 overlaps (measures, SDGs, biomechanics, training methods, responses and adaptations, fitness testing, nutrition) are written as recall in the later video's start boundary and `crossYearOverlap`. The intention-behaviour gap is named in Y11 m1 v12 and developed only in Y11 m2 v21.

**Module level.** Every site lesson is covered by exactly one video (84 of 84), and every syllabus dotpoint and sub-point is owned exactly once (69 of 69 dotpoints). Gaps: none. Repeats: none. Seventeen dotpoints are split across two or three videos, following the site's own lesson split; each split is by named sub-point or by a stated content note (for example "ATP-PCr and glycolytic" against "aerobic and interplay"), and the one deliberate shared sub-point (Y11 body and mind "structure and function", split skeletal against muscular) is recorded as a split, not a repeat.

| Focus area | Videos | Dotpoints | Split dotpoints | Arc |
| --- | ---: | ---: | ---: | --- |
| Y11 Health for individuals and communities | 18 | 15 | 3 | what health is, how it moves and how it is measured (v01 to v03); fairness and its causes (v04, v05); young people: who they are, how to research them, their health and the skills that protect it (v06 to v12); changing conditions: advocacy, organisations, health promotion, Ottawa, SDGs (v13 to v18) |
| Y11 The body and mind in motion | 22 | 18 | 5 | the body's systems, structure to whole movement (v01 to v08); energy, fuel, training and responses (v09 to v15); learning skills (v16 to v19); psychology and communities of exercise (v20 to v22) |
| Y12 Health in an Australian and global context | 22 | 18 | 5 | how healthy Australians are, by group, by country, by condition and by age (v01 to v07); the healthcare system, its money and its consumers (v08 to v14); technology and data (v15 to v18); the SDGs and community action (v19 to v22) |
| Y12 Training for improved performance | 22 | 18 | 4 | screening and testing (v01, v02); methods, principles and adaptations (v03 to v08); sessions, the year and the mind (v09 to v13); fuel, sleep and supplements (v14 to v16); efficiency, recovery, technology, injury and drugs (v17 to v22) |

**Lesson level.**
- Every video's `nextHandoff` is generated from the next video's `opening`, so the chain matches by construction across all 84 (including the year and module joins: Y11 m1 v18 to m2 v01, Y11 m2 v22 to Y12 m3 v01, Y12 m3 v22 to m4 v01).
- v01 and v02 checked by hand: v01's handoff frame (the ladder with the WHO rung lit and its three dimension words glowing, "Next: what makes health change?") is exactly v02's first frame, and v02's heading takes the Next chip's words. v02's handoff frame (the continuum crowded with about forty markers) is the route opening for v03.
- v02's entry knowledge (the WHO definition, three dimensions, meanings as purposeful boundaries) is what v01 actually teaches; v02 recalls it in its first sentence and does not re-teach it. v01 names circumstance only as an influence on a person's meaning, leaving circumstances as a cause of health change to v02.
- v03 to v08 checked by hand the same way: each opens on the previous design's handoff frame (v02 crowd, v03 split table, v04 gates with empty boxes, v05 chain with the "young people" tag), each heading takes the previous Next chip's words, and each final frame is the next route opening (v06 ends on the task-form table and the question card, v07's opening; v07 ends on the research cycle's finding card, v08's opening; v08 ends on the issue trends with the sleep line enlarged, v09's opening; v09 opens on that frame, takes "How do you research one issue properly?" as its heading and ends on the seven-question frame with its protective-factors row opening into four skill cards, v10's opening; v10 opens there, takes "Which skills protect a young person?" and ends on its socket row sliding left as five empty cards arrive, v11's opening; v11 opens there, takes "Why is 'just be more resilient' bad advice?" and ends on the nine cards folding into an audit sheet with an empty name line, v12's opening; v12 opens there, takes "How do you reflect on your own health honestly?" and ends on the agency boundary with column three lit and an arrow "who can change this?", v13's opening; v13 opens there, takes "How do young people change the conditions?" and ends on the participation ladder beside three building plates, v14's opening; v14 opens there, takes "Who else advocates for young people's health?" and ends on the three-sector board with a shared "health promotion" band, v15's opening; v15 opens there, takes "Why did health promotion change twice?" and ends on the outer band splitting into five empty rows, v16's opening; v16 opens there, takes "Why did the outdoor gym fail?" and ends on the grid zoomed out inside a ring of seventeen numbered segments, v17's opening; v17 opens there, takes "Why do the other sixteen goals matter for health?" and ends on the ring settling onto a coded council map, v18's opening; v18 opens there, takes "How could the SDGs change health locally?", closes the focus area in one sentence and ends on a segment linkage knee at 180° then 90°, hms-y11-m2-v01's opening).
- Entry knowledge matches what was taught: v03 uses v02's continuum; v04 uses v03's averages and v01's WHO constitution; v05 uses v02's two routes, v03's averages and v04's equity, access and three-test inequity card; v06 uses v05's chain, v03's measurement caution and v04's participation; v07 uses v06's "measured how?", v05's determinants and v03's labelled data; v08 uses v03's measures and bathtub, v05's chain and campaign model, v06's reported-rates caution, v01's social and emotional wellbeing and v04's community-controlled services; v09 uses v08's trends, protective factors and smoking decline, v03's five questions, v04's inequity and participation, v05's campaign model and v07's validity and next-question station; v10 uses v09's sleep issue, frame, levels and sleep window, v08's trusted adult and v05's campaign model; v11 uses v10's socket row, v02's continuum, v08's trusted adult, v09's sleep window and v05's investment idea; v12 uses v11's skills and resilience argument, v10's help-seeking, v02's dimensions and loop, and v09's sleep window; v13 uses v12's column three, v04's participation, v05's chain, v09's levels and v11's ethical behaviour; v14 uses v13's ladder and ask card, v09's levels, v05's campaign model, v08's smoking line, v04's access gate, v01's ring and v11's connectedness; v15 uses v14's board, v05's campaign model, v09's levels, v08's smoking line, v01's ring and v13's ladder; v16 uses v15's bands, v13's ladder, v14's board and community control, v04's gates and v08's smoking line; v17 uses v16's grid, v05's chain, v15's bands and timeline, v14's staircase and v08's burden labels; v18 uses v17's ring, v16's grid, v14's staircase and board, v13's ladder and ask card, and v09's checklist. Each is recalled in one line, not re-taught.
- Recurring models introduced in v01 to v09 (ladder, loop, continuum, bathtub, five questions, equity columns, access gates, principle chain, determinants chain, task-form table, research cycle with the quality trio, factor balance, seven-question issue frame, strategy levels, skill needs a condition, coping timescale, agency boundary, intention-behaviour gap (named), ask and audience, participation ladder, three-sector board, impact staircase, three approaches (nested bands), Ottawa five action areas grid, SDG ring, six-step localisation method) are each introduced once; later reuses are in the route table.
- Site disagreements are followed by the correct science and logged (items 1 to 3 affect v01 and v02; item 4 will affect hms-y11-m2-v04; item 5 affects v03; item 6 affects v04).
