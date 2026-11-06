# bio-m7-b03 (how pathogens move between hosts): quality fix, 6 Nov 2026

Grade before: B (audit frames 7, 11, 13). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m7-b03-sheet.jpg` (16 stills at the audit frames 446 to 13849). Extra checks: 5760, 9500, 11700.

Narration, audio and measured timing are unchanged. All new animation uses word cues in `docs/production/claude-pm/lessons/m7b03/measured/lesson.json`.

## Changes
- **Transmission card 1 (frame 7).** The flu card used to hold only the lungs until "coughing".
  - On "Influenza multiplies", a dashed zoom line runs from the airway to a painted airway lining cell. The cell then crossfades to the infected cell, which fills with virus particles.
  - The cell is labelled "airway cell". "multiplies in the airway lining" now arrives on "multiplies".
  - The coughing host and the droplets follow as before.
  - Small tags were enlarged: "leave" to 34 px, "salivary glands" and "cysts in pork" to 32 px, and "zoom: skin section" to 30 px.
- **Exam 1 (frame 11).**
  - The first stem sentence lands with the card, on "First". It used to wait 1.1 s.
  - The stem, options and demand sit in a 1240 px column. A givens panel fills as each given is read:
    - the mosquito ("carried by mosquitoes");
    - Aedes larvae and pupa in a water band ("larvae in standing water");
    - two host circles with a crossed link ("not person to person").
- **Exam 2 (frame 13).** The two rows are in a 1260 px box. The panel shows:
  - the Vibrio plate on "cholera", then the small intestine ("Vibrio: clings to gut lining");
  - an airway cell, and a flu virus that moves onto it on "binds receptors" ("binds airway cells").
- **Key notes.** Seven one-line bullets at 33 px replace five paragraphs at 30 px. The memory aid is unchanged.

## Files
- `src/explainer/lessons/bio-m7-b03/s2.tsx` and `s3.tsx` were edited, along with `config.ts` (assets list extended).
- The new file `plates2.ts` holds the extra plates: two airway cells sharing one box, Vibrio, larva and pupa, and the small intestine.
- `parts.tsx` and `assets.ts` are untouched, because B04, B10 and P02 import them.
- The typecheck passes on `out/explainer/tsconfig.m7b020305.json`.

## Notes
- No new plates are needed. All of these plates already exist in `public/assets/biology/`, and their alpha boxes were measured on 6 Nov.
- Judge at playback speed: the airway cell crossfade, and the flu docking.
- Ready to re-render.
