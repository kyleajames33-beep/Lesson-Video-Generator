# Claude (root) handoff, 6 November 2026 evening

State in one place for a fresh Claude session. Memory (`MEMORY.md`) is loaded automatically; read this next.

## Decisions made on 6 November (owner)

- **Maths d01 v1 rejected.** It was boring, with no images or simulations, and well below Year 12 Bio and Chem Module 5. The quality bar for all courses is `maths-visual-standard.md`, including its build gate: one owner-viewed pilot per course, and a contact-sheet check before every render.
- **Quality over tokens.** Claude designs AND builds the visual kit, scene code and pilots. Codex does plates, reviews, voicing, renders and YouTube.
- **Published-video audit.** All 152 graded from 16-frame sheets: A 43, B 89, C 20 (6 render defects). The plan, with every id, grade, link, fix and status, is in `quality-fixes/fix-plan.md`; grades and the rubric are in `quality-fixes/`.
- **Fix-and-replace approved.** Codex re-renders, publishes v2 with the same metadata, swaps the playlist position and unlists v1.

## Done by Claude today

- Wrote `maths-visual-standard.md`.
- d01 Revision 5 redesign (broth-flask anchor, growth field, curve simulator).
- Maths studio kit in `src/explainer/math/studio/`, with a silent pilot at `out/explainer/maths-studio-pilot/`.
- Pilot designs chem-y11-m2-v06 and phys-y12-m5-v04 at Revision 2; chem-y11-m3-v10 redesigned.
- All C-grade fixes except chem-m7-p06, which waits on brief 199.
- B-grade fixes: all of Biology M5 and M6, plus Biology M7 b02 to b13 and g01. Re-render briefs 198 and 200 to 211 written.
- Bio M7 p01, p02 and p05 fixed and committed (ee596579); they go in brief 212 with the next three.

## Done after the compaction (6 Nov, late afternoon)

- d01 Revision 6: brief 195 findings resolved (4d5d8784). Delivered ma12 field and rod plates swapped into the studio kit; the dividing sprite is drawn at the rod's body height (43a7c7bd). Brief 213 asks Codex to voice d01 Rev 6 (608f9aa6); build the full lesson once the measured data lands.
- Brief 186 cue fixes done (99fd8275).
- Agents in flight: B-wave Bio M8 b02, b03, b04 (then brief 212 with p01, p02, p05); brief 180 design repairs plus visual upgrade for Y11 Chem m2-v01 to v07 and ws-v04 to v06 (then an error-check brief).

## Next for Claude, in order

1. **Finish the B-grade wave**, three videos per agent, using `quality-fixes/b-fix-agent-brief.md`.
   - Remaining B ids are those with status `queued` in `fix-plan.md`: Biology M8 b02 to b04, Chemistry M5, M6, M7 and M8, and Skills s01 to s08.
   - Review each sheet before committing; reject hands, thumbs and faces, thin elements and small text.
   - Write a re-render brief for every six fixed videos (same pattern as 206 to 211).
2. **d01:** when brief 213 hands in the measured data, build the full lesson with the studio kit (src/explainer/lessons/math-a12-d01), run the contact-sheet gate, then render the pilot for owner viewing.
3. **Repair review findings** for Year 11 Chemistry (briefs 180 to 184) and Year 12 Physics (187 and 188), folding in each design's visual upgrade per `checks/visual-standard-audit-chem-y11-phys-y12.md`. Then write the error-check briefs.
5. **Brief 194:** several Bio M8 lessons failed the recording-stage check, and chem-m5-g02 and chem-m8-g02 have count-declaration mismatches. See `work/brief174/`. Fix them, then re-queue.
6. **Pilots:** build chem-y11-m2-v06 and phys-y12-m5-v04 (plates are delivered) for owner viewing.

## Rules to remember

- At most 2 agents while Codex runs; one render at a time.
- Every agent prompt forbids sub-agents.
- No em dashes; never commit `work/` or the production board.
- Don't touch HANDOFF.md, REPO-GUIDE.md or the legacy engine.
