# C6a, C6b and G03 rework notes (for the project manager, 15 Oct)

Owner feedback of 15 Oct on C6 applied: "I for initial, C for change, E for equilibrium" (no "spelt"); the measured value goes into the Equilibrium row first, then the Change is found from the table, then the coefficients, then the Equilibrium row is completed; three question types taught easiest first; the tiny-K case with its condition and check; HSC never needs the quadratic formula. C6 is split into C6a and C6b. G03 no longer uses the quadratic formula and practises the types rather than re-deriving them. Design work only: nothing built, rendered or voiced. No em dash in any of the four files.

Files:
- `../lessons/chem-m5-c06a.md` (new): Calculating K: the three question types, and ICE tables.
- `../lessons/chem-m5-c06b.md` (new): Finding equilibrium concentrations from K (no quadratic needed).
- `../lessons/chem-m5-c06.md`: Status line now says superseded by c06a and c06b (file kept; it no longer says "ready to voice", so `build_wave5_chem.py` skips c6).
- `../lessons/chem-m5-g03.md`: Revision 5, awaiting owner read.

All three designs say "awaiting owner read before voicing", so the build script will not build them. C6a and C6b need a `LESSONS` entry in `build_wave5_chem.py` (ids and holds are listed in each design's "Scene reuse" section) once the owner approves. Reused narration was checked by script: each "reuse take" scene text, with bold removed, is character-identical to `lessons/c6/measured/lesson.json`, so the take hashes match.

## C6a (17 scenes, 1133 words, about 7.6 min with holds, about 7.9 min voiced)

| # | id | words | source |
|---|---|---|---|
| 1 | hook-types | 105 | new |
| 2 | type-one | 97 | new |
| 3 | reverse-equation | 78 | reuse take (reverse-equation) |
| 4a | type-two | 22 | new |
| 4b | one-value | 72 | reuse take (hook) |
| 5 | ice-initial | 74 | new |
| 6 | equilibrium-first | 67 | new |
| 7 | change-row | 72 | trimmed reuse (change-row, from "How much did the others change?") |
| 8 | equilibrium-row | 48 | new |
| 9 | find-k | 62 | reuse take (find-k) |
| 10 | memory-aid | 57 | new |
| 11 | attempt | 91 | reuse take (attempt) |
| 12a | feedback-one | 98 | new |
| 12b | feedback-slips | 44 | trimmed reuse (feedback-one, from "If you got about 0.018") |
| 12c | feedback-two | 50 | reuse take (feedback-two) |
| 13 | decision-rule | 80 | new |
| 14 | key-notes | 16 | reuse take (key-notes) |

New characters to voice: **3478** (9 scenes) if the two trimmed takes are acceptable; **4040** (11 scenes) if scenes 7 and 12b are recorded new.

## C6b (18 scenes, 1254 words, about 8.4 min with holds, about 8.8 min voiced)

| # | id | words | source |
|---|---|---|---|
| 1 | hook | 67 | new |
| 2 | k-given | 58 | reuse take (k-given) |
| 3 | unknown-x | 60 | reuse take (unknown-x) |
| 4 | substitute | 128 | reuse take (substitute) |
| 5 | solve | 39 | reuse take (solve), 10 s hold |
| 6 | check | 63 | reuse take (check) |
| 7 | memory-aid | 44 | reuse take (memory-aid) |
| 8 | square-condition | 86 | new |
| 9a | tiny-k-setup | 94 | new |
| 9b | tiny-k-drop | 81 | new |
| 9c | tiny-k-solve | 68 | new |
| 9d | tiny-k-check | 79 | new |
| 10 | no-quadratic | 70 | new |
| 11 | attempt | 65 | new, 10 s countdown |
| 12a | feedback | 112 | new |
| 12b | feedback-slips | 48 | new |
| 13 | decision-rule | 76 | new |
| 14 | key-notes | 16 | reuse take (key-notes) |

New characters to voice: **4069** (11 scenes).

Every C6 take01 scene is reused somewhere except ice-initial (owner point 1), equilibrium-row and decision-rule (method order and handoff changed), and the front of change-row and feedback-one (owner point 2).

## G03 (19 scenes, 1250 words, about 8.7 min with holds, about 9.0 min voiced; was 25 scenes, 1494 words)

Unvoiced, so every scene is new for voicing: **6430** characters (18 scenes; the key-notes line can reuse any existing key-notes take). Scene order: 1 hook-board, 2 direct-k, 3 ice-one-value, 4a tiny-k-question, 4b tiny-k-setup, 4c tiny-k-solve-and-test, 5a to 5c huge-k, 6a and 6b q-vs-k, 7a to 7d addition, 8 attempt, 9 feedback, 10 decision-board, 11 key-notes. Removed: the PCl5 quadratic worked example (old 5a to 6b), "shortcut not allowed" (old 7a), the root-rejection aid. Changed wording: 1, 3, 4a to 4c, 6a ("Type four"), 7b, 9, 10, key notes. Types renumbered to match C6a and C6b (K and a start is now type 3, Q is type 4). No number changed; all kept values recomputed.

## Science points to check

1. **Iodine K (C6b 9a to 9d):** I2(g) ⇌ 2I(g), K = 1.6 x 10^-5, labelled illustrative, no temperature given. A textbook value is about 3.8 x 10^-5 near 1000 K, and the dissociation absorbs heat, so a smaller K fits a somewhat lower temperature. Confirm the textbook value and that the narration "very hot" is fair.
2. **NO in an engine (C6b attempt):** N2 + O2 ⇌ 2NO, K = 4.0 x 10^-4, labelled illustrative. Textbook Kc is of order 10^-4 to 10^-3 near 2000 K to 2500 K. Equal 0.50 starts are a teaching simplification (real air is about 4 : 1); the design does not claim real engine air. C5 quoted about 10^-30 at room temperature, and the givens card says "much hotter, so a different K".
3. **"HSC Chemistry does not require the quadratic formula; it can be used, but a question should never need it"** (C6b 10, G03 4a). This is the owner's statement; the designs say it as fact. A science checker may want "HSC questions are written so that you do not need it". Owner call.
4. **Tiny-K condition** in plain words: "K very small and a start that is not tiny", then "x under about 5 per cent of the start" (a school rule of thumb). Author note gives start / K as the underlying guide (15 625 for iodine, 1250 for N2O4 in G03).
5. **Perfect-square condition (C6b 8):** the root works because the top and the bottom are both squares (equal H2 and I2 starts), and K need not be a square number (K = 50 gives a root of about 7.07). This fixes C6 voiced-review finding 2 in the narration, not only on screen.
6. **K units:** unchanged policy (no unit written, on-screen tag).
7. **C6a type 1** reuses the H2 + I2 settled tube in mol/L (0.10, 0.10, 0.70, K = 49), the same numbers C8 relies on.

## Open questions for the project manager

1. **Route and board:** the route JSON has one chem-m5-c06 entry. Proposal: c06a (C-calculate-K, playlist 8) and c06b (C-calculate-concentration, next), with c06b's handoff to c07. The parallel production board and route need updating by root.
2. **Trimmed takes:** can the pipeline cut a take at a word timing (C6a scenes 7 and 12b)? If not, add 562 characters to C6a.
3. **C6b solve hold** keeps the recorded "Find x. Pause here and try it." (root decision 14 Oct). Practice items say "Pause here to answer."
4. **C5's recorded handoff** ("finding the settled mixture" from the starting amounts) now leads into C6a, which starts with the three types. It still fits loosely; not re-recorded.
5. **G03 huge K (5a to 5c):** kept as practice of the mirror case; it is the one type 3 method not taught in C6a or C6b. Cut it (about 155 words) if the owner wants G03 to add no new method.
6. **C6b attempt:** both shortcuts work (equal starts and tiny K), which lets the feedback compare them. If the owner prefers a pure tiny-K attempt, the design gives an air-like alternative (0.80 and 0.20 mol/L, [NO] = 0.0080 mol/L).
7. **Reviews still needed after the owner read:** a learning review and a Claude science check for C6a and C6b (new scenes), a learning re-review and wording re-check for G03 Revision 5, then the exact voiced preview of each.
