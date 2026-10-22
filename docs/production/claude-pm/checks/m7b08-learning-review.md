# m7b08 learning review: how do T cells respond to infected cells?

Reviewer: independent AI reviewer (did not author the design), 22 October 2026.
Input inspected: `../lessons/bio-m7-b08.md` (Revision 1, 22 Oct) read in full; `../../student-learning-review.md`; `AGENTS.md`; the main question, entry knowledge, stop and handoff lines, scene scripts and response strip cues of `../lessons/bio-m7-b06.md` (Revision 3) and `bio-m7-b07.md` (Revision 3); the route entry for bio-m7-b08 in `../../module7-video-route-draft.json`; the live site page `lesson12.sa.html` (searched by exact phrase after stripping tags). Narration recounted by script with the build parser rules (lines starting "> ", bold markers removed): 17 lines, **5,625 characters**, matching the design. I viewed the reused plates `m7-t-cell-v1.png`, `m7-airway-cilia-mucus-v1.png`, `m7-virus-particle-v1.png`, `m7-dendritic-cell-v1.png`, `m7-b-cell-bare-v1.png` and `m7-plasma-cell-v1.png` on a dark contact sheet (scratch file only). The four new plates (airway cell triplet, `m7-t-cell-killer-v1.png`) do not exist yet. There were no stills, voiced preview or audio, so motion is not judged at playback speed. This is a beginner-perspective review, not learner evidence. Human listening is pending. I searched the design for U+2014 and found none; none are used here.

Main question traced: *Antibodies can't reach a virus once it is inside your cells. How do T cells find the infected cells, and what do they do?* Useful outcome: given an infected cell, the student can say how it is recognised (displayed virus pieces), which T cells respond and why it takes days, what helper T cells do without killing, and how cytotoxic T cells destroy the infected cell; they can explain a specificity experiment and the effect of losing helper T cells.

## Response strip continuity (b06 to b08)

Coherent. b06 built four rungs ("always there: barriers", "minutes: inflammation", "hours: phagocytes", "days: adaptive"); b07 expanded the fourth rung into five B cell chips ("fit", "go-ahead", "clone", "plasma cells", "antibodies bind"). b08 adds a parallel T column ("shown", "fit", "clone", "helpers: signal", "killers: destroy") and one teal arrow from "helpers: signal" to b07's "go-ahead" chip, which closes the doubt b07 left open ("The next video shows how"). The T column correctly starts with "shown" (T cells need a displayed piece) while the B column starts with "fit" (B cells bind intact antigen), so the strip itself carries the key difference. The "NK cells" tag beside "hours: phagocytes" matches b06's rung label exactly. Scene 10's full strip and scene 14's decision rule reuse the model, which is what g03 needs.

## Strengths to keep

- **One cell changes in place.** Healthy, infected, self-destructing, as an aligned triplet that crossfades at the narrated cue. Students can point at the cell they are being told about and compare it with its earlier state.
- **The display model carries the main idea.** Grey pieces against red pieces in the same cups, and a fork that seats only over a cup holding a red piece, show recognition rather than describing it. The free virus drifting past an empty fork answers "why don't T cells just grab the virus?" before a student asks.
- **Causes before names.** Scene 3 says why an infected cell displays virus pieces (it is making virus proteins) before naming antigen presentation; scene 8 says why killing your own cell helps (the factory stops).
- **Misconceptions are crossed at the point they arise**, each with a mechanism: helper T cells kill (scene 6), killers attack free virus (scene 7), the T cell eats the cell (scene 8).
- **The hook earns attention** with a real puzzle ("among billions of healthy ones") and an Australian discovery tied to the exact question.
- **Both attempts are genuine transfer.** 13a is a clean specificity design with a control; 13c makes students use helper roles across both arms. Feedback is brief with one crossed mistake each.
- **Site error 1 is resolved in the teaching**, not just logged: activation happens in the lymph node (scene 5), killing in the tissue with no helper signal (scene 7).

## Findings

| # | Severity | Scene | Exact quoted text | Problem (likely student question) | Exact replacement (about the same length) |
| --- | --- | --- | --- | --- | --- |
| 1 | should fix | 9 (visual) | "a coded comparison of two columns builds across the left area ... (no new plate: NK cells appear as a grey chip, not a cell)" | **The NK cell is never shown.** A text header in a diagram slot is not a useful visual (AGENTS rule), and the scene loses the one beat that video does best here: a cell with too few cups, where the T cell's fork finds nothing to seat, but another killer still destroys it. A student will ask, "If the virus hides its pieces, what kills the cell then?" and see only a word. | Visual: reuse the new `m7-t-cell-killer-v1.png` at the same size with a **teal** ring and **no forks** (grey tag "NK cell: a lymphocyte with granules, no receptor for one pathogen"; grey tag "looks like a killer T cell, recognises differently"). On "too few display molecules": the second cell outline shows two cups; the amber-ringed cytotoxic T cell's fork touches and nothing seats (tag "nothing for the T cell to check"); the NK cell binds and the cell crossfades to the apoptotic partner (tag "NK cell: kills anyway"). Keep the day axis. No new plate is needed. |
| 2 | should fix | 9 | "They don't need a matching receptor." | Read literally, NK cells have no receptors at all. Scene 1 of b07 and scene 4 here define "receptor" as the one-shape receptor; NK cells do have receptors, just not ones made for one pathogen. (Science check finding 4.) | "They don't have receptors made for one pathogen." (+12.) |
| 3 | should fix | 13d | "The claim isn't supported. ... Both arms fail together." | (a) **Evaluate feedback should credit the true part** of the claim: B cells do make antibodies. b07 set this pattern ("The delay is real, but the reason is wrong.") and the model answer here already gives it a clause. (b) "fail" is absolute and contradicts this design's own site error 3 ("progressively weakening"). A student will ask, "So people with HIV have no immune response at all?" | "B cells do make antibodies, but the claim isn't supported." (+32) and "Both arms weaken together." (+2). Verdict chip: "B cells make antibodies: true. Only the T cell arm: not supported". (Science check finding 2.) |
| 4 | should fix | 4 | "It only fits a piece that's displayed on a cell, held in a display molecule. That's what Doherty and Zinkernagel found. A T cell checks the display molecule and the piece together." | The hook promises their discovery, but scene 4 credits them with the "piece in a cup" idea, which came later (science check finding 1). Students also get no sense of what they actually saw, so the hook pays off weakly. | "Doherty and Zinkernagel found the clue: a T cell recognises a virus only together with the cell's own display molecule. So it checks the display molecule and the piece together." (+74.) Visual unchanged; the 1973 tag returns on "found the clue". |
| 5 | minor | 3 | "Every one of your cells cuts up some of the proteins it's making" | Red blood cells have no nucleus and display no MHC I. Students meet malaria parasites hiding in red blood cells in this module, so the absolute version can mislead later. One word fixes it. | "Almost every one of your cells cuts up some of the proteins it's making" (+7). Key note 2: "Antigen presentation: almost every cell displays ..." |
| 6 | minor | 5 (screen load and cue) | "The T branch's first chip writes and lights: 'shown'; then the second: 'fit'." (both on "Only the few T cells whose receptors fit") | The densest frame: lymph node zoom, dendritic cell, six T cells, two clone trees, two labels with CD4 and CD8 sub-labels and three chips. "shown" belongs to the earlier cue. | Light "shown" on "displayed them"; light "fit" on "are selected". The lymph node plate dims to grey once the zoom opens; "only fitting T cells" dims when "clone" lights; the "CD4" and "CD8" sub-labels write only after "cytotoxic T cells" and stay small grey. |
| 7 | minor | 9 (cue) | "On 'They don't need a matching receptor' the infected cell outline shows a small coded stress mark" | The stress flag appears one sentence before "stress signals" is said. | Move the stress flag to "They respond to stress signals on a cell". |
| 8 | minor | Assets (brief item 4) | "a cluster of about twelve small, dark purple-red round granules gathered in the cytoplasm rim on the right-hand side" | I inspected `m7-t-cell-v1.png`: its green rim is already dotted with many small granules and mitochondria. Twelve small granules may not read at thumbnail size, so the helper and the killer would differ only by ring colour. | "a cluster of ten to twelve **noticeably larger** (about three times the existing rim dots), very dark purple-red round granules, packed together on the right-hand side of the rim, clearly visible at 200 px". |
| 9 | minor | whole | 5,625 characters, about 546 s | Findings 2 to 5 add about 130 characters (about 10 s), giving about 5,755 characters and about 556 s, still inside the 9.5 minute cap with about 14 s of room. 13d becomes about 375 characters (about 28 s), inside the feedback target. | No cut needed. If the voiced preview runs over, the design's reserve cut (scene 9's last two sentences, which the day axis carries) still applies. |

No blocker. Four should-fix findings (1 to 4); five minor (5 to 9).

## Plates: are the new plates needed?

- **Airway cell triplet** (hook, 2, 3, 4, 7, 8, 10): essential. It is the visible case and carries infection, presentation and apoptosis in place.
- **`m7-t-cell-killer-v1.png`**: needed, and more useful after finding 1, because it then also stands for the NK cell (both are granular lymphocytes). Finding 8 makes the difference visible. The design's cut order is right.

## Screen load (owner's three bright text items)

Within the limit as written, provided earlier items dim at each cue. Densest frames: scene 5 (finding 6), scene 6 (three helper targets; the design dims each tag as the next lands) and scene 10 (full strip; only the current column or tag is bright).

## Checks against the review questions

| Question | Result |
| --- | --- |
| Mechanism steps in plain subject-action sentences? | Yes. "Every one of your cells cuts up some of the proteins it's making, and displays small pieces on its surface"; "Only the few T cells whose receptors fit those pieces are selected. They divide into clones"; "it releases signal chemicals called cytokines"; "Some make holes in the infected cell's membrane. Others pass through and switch on the cell's own self-destruct program". No bare noun chains. |
| Response strip continues coherently? | Yes (see above). |
| Attention earned? | Yes: the hidden-virus puzzle, an Australian Nobel discovery, the free virus drifting past the fork, a cell destroying itself on command. |
| Visual medium (painted plates, aligned sets, no clip-art)? | Yes, apart from scene 9 (finding 1). Cells, the airway lining and the lymph node are painted; the display model, strip, clone tree and vessel channel are coded abstract parts, labelled as a model. |
| Screen uncluttered (about 3 bright items)? | Yes with finding 6. |
| Attempts: "Pause here to answer.", 10 s countdown, question on screen, givens underlined, no givens card? | Pass for both. 13a explain (4 marks), 13c evaluate (4 marks). Cards stay up during and after the countdown with nothing answer-bearing. Givens underlined in feedback ("a mouse infected with virus X", "infected with virus X", "Only the cells in group 2 were killed", "uninfected cells", "infected with virus Y"; "antibodies are made by B cells", "destroys helper T cells"). No givens card. |
| Feedback brief, one crossed mistake? | 13b about 28 s, crosses "T cells killed the virus". 13d about 25 s (about 28 s after finding 3), crosses "B cells work without helper T cells". No re-teaching. |
| Narration length? | 5,625 characters (inside 5,500 to 6,800), about 546 s; about 556 s after findings (finding 9). |
| No people, hands or faces? | Pass. Mice and the patient are words only; Doherty and Zinkernagel appear as a text tag, no portraits. |
| Australian spelling, no em dashes? | Pass. "defence", "recognises"; "program" (scene 8) is standard Australian usage. No U+2014. |
| YouTube title 100 characters or fewer? | Pass (88 by script). |
| One main question; key notes useful? | Yes. Five notes after the decision rule with a pause invitation; finding 5 adjusts note 2. |
| Memory aid after its explanation, limits checked? | Yes. "B cells make antiBodies; T cells Terminate or Tell" follows scenes 6 to 8, and "Terminate" is tied to infected cells after the free-virus idea has been crossed. |
| Re-teaches earlier videos? | No. Dendritic cells, clonal selection and virus entry are one sentence each. |
| Handoff? | Correct: "Next, why a second infection is often stopped much faster" matches bio-m7-b09. |

## Learner trace (from stated entry knowledge)

1. **Hook.** Needs antibodies acting outside cells (b07). Pass.
2. **Scene 2, a virus gets in.** b03's surface-protein binding recalled in one sentence. Pass.
3. **Scene 3, cells display pieces.** Needs Year 11 "cells make proteins from DNA instructions". The student can ask "all cells?" (finding 5). Pass.
4. **Scene 4, the receptor.** "Like B cells" links b07. The student asks "what did the Canberra pair actually find?" Pass after finding 4.
5. **Scene 5, finding the right T cells.** b06's dendritic cells and b07's clonal selection are recalled. Pass with finding 6.
6. **Scene 6, helper T cells.** The "same pieces displayed on a B cell that has taken in the antigen" is new but stated plainly and pictured. b07's go-ahead is joined. Pass.
7. **Scenes 7 and 8, killing.** Activation and killing are clearly separate places. Pass.
8. **Scene 9, NK cells.** The student asks "what kills a cell that hides its pieces?" and should see the answer. Pass after findings 1 and 2.
9. **Scenes 10 and 11.** Pass.
10. **13a to 13d.** Answerable from the lesson; 13c gives the one HIV fact it needs. Pass after finding 3.

## Verdict

**Ready to voice after fixes** (findings 1 to 4; no blocker), subject to the Claude science check and the Codex error check. Repeat this review on the exact voiced preview before full export, including running time and both feedback timings.

## Resolution
