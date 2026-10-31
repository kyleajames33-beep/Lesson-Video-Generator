# Brief 126: finish the Chemistry M8 P02 build, and build G01, to preview v1

Follow brief 125's rules, pattern and checks exactly. This brief can run straight after brief 125, or alongside it if you keep the shared stills lock.

| Lesson id | Design (`docs/production/claude-pm/lessons/`) | Measured narration | Status |
|---|---|---|---|
| `chem-m8-p02` (practical) | `chem-m8-p02.md` (Revision 3) | `m8p02/measured/lesson.json` | Code is written and registered, and the scoped typecheck is clean. A Claude builder was interrupted before taking stills. |
| `chem-m8-g01` (practice walkthrough) | `chem-m8-g01.md` (Revision 3) | `m8g01/measured/lesson.json` | Not started. |

## P02

The code is in `src/explainer/lessons/chem-m8-p02/` (`parts.tsx`, `s1` to `s3`, `scenes.tsx` and `config.ts`), and `config_m8p02` is already in `src/explainer/registry.ts`. Use `out/explainer/tools/tsconfig-m8p02.json` for the typecheck.

1. Check it against the design first, and finish anything missing.
2. Then do the stills rounds and fixes, and build the preview.
3. Also check that the practical's risk table sits on screen long enough to read. Module 7's P04 and P05 needed a 3-second reading hold.

## G01

The walkthroughs are the content. For the pattern, see `src/explainer/lessons/chem-m7-g03/`.
- Show the real worded exam question.
- Underline the givens during the walkthrough. There is no separate givens card.
- Show one reasoning stage at a time.
- Keep each established result visible while it is still needed.

Write `checks/codex-build-126.md` in brief 125's format, and hand in to `status.md`. No full MP4 renders and no commits.
