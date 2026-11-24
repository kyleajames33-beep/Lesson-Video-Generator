# Brief 267: error-check and prepare HMS Year 11 Module 1 for voicing

Read `00-standing-rules.md` and briefs 236, 237, 259 and 260. Do not spawn sub-agents. Make no design edits and no commits. Request no speech in this brief.

## Why (root, 24 November 2026)

HMS Year 11 Module 1 (`lessons/hms-y11-m1-v01.md` to `v18.md`) has now passed both of root's gates:

- **Learning review:** resolved at Revision 2. See `checks/hms-y11-m1-learning-review-summary.md`.
- **Science check:** resolved at Revision 3. See `checks/hms-y11-m1-science-check-summary.md`, and the "Year 11 Module 1 science check resolved" section in `hms-status.md`.

The last section of each design overrides its earlier text.

HMS is Year 11 content, so it uses the owner-approved Google voice: `voice_shdbjsxcrr0a` with `gemini-3.8-flash-tts`, the same settings as Year 11 Chemistry.

## Task

1. **Error check.** Run the brief 237 error-only check on each of the 18 current designs. Cover:
   - em dashes or en dashes;
   - spoken numbers that differ from what is on screen;
   - cue words missing from the narration;
   - key notes longer than the house limit;
   - practice questions not visible during their countdown;
   - plates named but neither delivered nor approved;
   - the cultural content rule from 18 November (general content only, with no named community or person).
2. **Prepare.** For each design with 0 blockers and 0 should-fix items, record its SHA-256 and prepare it for recording exactly as brief 260 prepared Chemistry. Put the prepared inputs in `lessons/h-y11-m1-vNN/`. A design that fails stops there; list its findings for root.
3. **Queue.** Add the prepared lessons to the nightly order after Physics P5 and Chemistry wave 7. HMS Module 1 voices in route order (v01 first), within the daily request cap. Give the amended dry run.

## Hand-in to `status.md`

For each design, give:

- its check result;
- its SHA-256;
- whether it was prepared;
- its planned voicing night.

Human listening stays pending.
