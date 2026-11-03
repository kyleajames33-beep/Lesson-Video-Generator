# Brief 166: build math-a12-d01, the first Maths Advanced lesson, to preview v1

Read these first:
- `00-standing-rules.md` and `AGENTS.md`;
- `docs/production/motion-design-standard.md` and `docs/visual-design-handbook.md`;
- briefs 125, 135, 143 and 148.

This is a code build of Claude's design, not a design task. The design file is the specification. Build each scene, visual, cue, colour and layout exactly as it is written. Do not add, drop, restyle or reinterpret anything. Where the design is silent or unclear, stop and list the question in the hand-in rather than inventing an answer. Claude reviews the stills and the preview, and nothing moves on without Claude's approval. Do not spawn sub-agents. Make no commits.

**Inputs**
- **Design:** `docs/production/claude-pm/lessons/math-a12-d01.md`. It is at Revision 3 and passed its error check.
- **Measured narration:** from brief 165 Part 2, at `<d01 key>/measured/lesson.json`. If it does not exist yet, stop and report.
- **Root decisions:** `checks/root-decisions-maths-d05-d10.md` and `checks/root-decisions-maths-d11-i05.md`. These bind the build: exact values in algebra, decimals only in grey readouts, attempt cards that never give away answers or signs, the syllabus notation, and the handoff frame as the last frame.

**Pattern.** Use the lesson layout from brief 125: common, assets, parts, s1 to sN, scenes and config, plus a registry entry. Build on the Maths kit: `src/explainer/math/kit.tsx`, `graphs.tsx`, `algebra.tsx` and `strand-parts.tsx`, and the parts that briefs 135 and 143 built. Where d01 names a kit part that does not exist, build it inside the shared Maths kit, not in the lesson folder, because later Maths lessons reuse it. Use the shared cue approach in `src/explainer/cues.ts`: anchor each change to the narration words that name it.

**Rules.** Follow brief 125's rules exactly:
- motion that explains, and a countdown in every "Pause here to answer." hold;
- no people, and never stretch a plate;
- mild declutter, no em dashes on screen, and no burned-in captions;
- measure fonts only at render time;
- do not touch the legacy engine, HANDOFF.md, REPO-GUIDE.md, the design files, the measured narration or other lessons.

For a calculation, show the short task, the equation and the grouped givens separately. Show one reasoning stage at a time. Align each later result line to its spoken cue.

**Checks**
1. Typecheck and build.
2. Render stills at the key cue frames, and assemble a contact sheet.
3. Render a short pilot frame range of about 60 s at playback speed. It must include one cue-heavy scene and one countdown.
4. Measure how far each narrated change lands from its cue word. The target is within about 0.15 s.
5. Check that the first frame is the opening frame the design states (d01 opens the course, so it has no previous video) and that the last frame is d01's handoff frame, the one d02 opens on.

One rendering process at a time (8 GB machine).

**Hand-in.** Hand in to `status.md` with:
- the build result;
- the contact sheet path;
- the pilot render path;
- the cue-timing table.

Report source observations, still and UI observations, and anything needing human listening separately. Pending listening is not a pass.
