# Claude (root) handoff, 11 November 2026

Read this after a compact; it replaces `claude-handoff-7-nov.md`. Memory loads automatically.

## Owner actions pending
- **Google voice monthly spending cap.** The Google Cloud project's cap was exceeded on 10 Nov, so all Google voicing has stopped: Maths briefs 238 and 240, Y11 Chemistry briefs 236 and 237, and Physics. The owner must raise it.
- **Codex prompt for brief 239.** Codex reads `checks/root-signoff-maths-builds.md`, then continues brief 239: d01 public, then render and publish the list.

## Maths (top priority)
- **Designs:** all 67 are redesigned to the visual standard with everyday anchors. Root decisions 1 to 63 are in `checks/root-decisions-maths-redesign.md`.
- **Studio kit:** passes 1, 2A and 2B are committed. There are demos 1, 2 and 3, and the built lessons stay pixel-identical across kit changes.
- **Built and graded A by root: 27 lessons.**
  - d02 to d19;
  - i02 to i06;
  - i08, i09, i10 and i12.
  - All are listed in brief 239 and signed off in `checks/root-signoff-maths-builds.md`.
  - d18 needs its scene 3 re-voiced first (the sentence was corrected).
- **Codex progress:** the playlist "HSC Maths Advanced Year 12" exists (`PLMcUYX3DYIeY`). On 10 Nov Codex held d02 onward pending the sign-off, which is now written.
- **Not voiced yet:** i01, i07, i11, i13 and i14 (brief 238; i14 partly done), and f01 to f15, s01 to s12, t01 to t04 and g01 to g03 (brief 240). Build them once they are voiced.
- **Stand-in frames:** i02 exports `I01FinalFrameStandIn`, i08 exports `I07FinalFrameStandIn` and i12 exports `I11FinalFrameStandIn`. When i01, i07 and i11 are built, import these or match them.
- **Missing plates:** `ma12-bathtub-v1` (i06's final frame and i07) and `ma12-air-conditioner-v1` (i12's final frame and i13) are not painted. Add them to the next Codex plates brief.
- **Build pattern:** use the agent prompts from this session (in the conversation), and the models in `builds/`, which include every "Root review round". Faults root sends back:
  - empty worked-example openers;
  - memory cards with an empty middle;
  - anchor plates under 380 px;
  - grey "?" panels;
  - a third of the frame empty;
  - text under 30 px;
  - labels escaping their plot;
  - a mistake card with no caption.
- **Machine:** run one build at a time while Codex renders. The paging file is now 8 to 16 GB. Close ChatGPT, Copilot and Teams when Codex is idle.

## Science
- **Y12 Physics:** Modules 5 to 8 are all repaired and error-checked (briefs 224 and 232 to 234). Voicing comes next, after the Google cap is raised.
- **Y11 Chemistry:** 82 designs are ready (brief 236, waves 1 to 6; brief 237 for m1-v18 to v27). Voicing is blocked by the Google cap.
- **Y12 Module 8:** all built lessons are rendered. b12, b13, b14, b16, c09 and c13 await ElevenLabs voicing (brief 220). The spectra holds are c10, c11a, c11b and c12. The cultural holds are b15 and b17.

## Other
- **Another Claude session** (owner-run) added `src/explainer/shared/` (tokens and scenes), the grade checker (`npm run grade:explainer`) and `src/explainer/sims/`. The build brief tells agents to use them. For Maths, the shared `WorkedExample` is not used until its layout pass.
