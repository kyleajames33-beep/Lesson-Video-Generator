# Brief 125: build the scenes for Biology M8 B03, B04 and B05, to preview v1

Read `00-standing-rules.md`, `AGENTS.md`, `docs/production/motion-design-standard.md` and `docs/visual-design-handbook.md` first. This is a code build. Claude reviews the previews afterwards. It can run alongside briefs 122 to 124.

**Why Codex.** The owner wants Claude's tokens kept for design and review. This brief tests whether Codex can take scene builds. Follow the house pattern closely.

## The lessons

All three are voiced and measured. Each design (Revision 3) is the visual specification, and the measured narration gives the scene ids, durations and word timings for cues.

| Lesson id | Design (`docs/production/claude-pm/lessons/`) | Measured narration |
|---|---|---|
| `bio-m8-b03` | `bio-m8-b03.md` | `m8b03/measured/lesson.json` |
| `bio-m8-b04` | `bio-m8-b04.md` | `m8b04/measured/lesson.json` |
| `bio-m8-b05` | `bio-m8-b05.md` | `m8b05/measured/lesson.json` |

Every plate the designs name is already in `public/assets/biology/` or `chemistry/`.

## The pattern to copy

Biology content lessons were last built in commit `b5d0bf5`: see `src/explainer/lessons/bio-m8-b01/` and `bio-m8-b02/`, and their entries in `src/explainer/registry.ts`. Chemistry lessons were built on 31 October in `chem-m8-c03a/` and `chem-m8-c03b/`, with the stills tools `out/explainer/tools/frames-m8c03.mjs`, `sheet-m8c03.py` and `tsconfig-m8c03.json`. Use the same file layout: common, assets, parts, s1 to s3, scenes and config. Also use the shared kit (`src/explainer/kit.tsx`, `cues.ts`) and the same cue approach, which anchors each change to the narration words that name it.

## Rules

- **Motion must explain.** Show each narrated change on screen, point at named parts, and use meaningful transitions. Show the countdown in every "Pause here to answer." hold. A static slideshow fails.
- **Visuals:**
  - no people, hands or faces;
  - never stretch a plate;
  - fade stale labels and arrows (mild declutter);
  - no em dashes in on-screen text;
  - no captions burned into the picture.
- **Fonts load after import.** Never measure text (canvas `measure`, `wrap`, layout helpers) when a module loads; compute layouts inside components or functions called at render time.
- **Don't touch:**
  - the legacy engine (`src/LessonVideo.tsx`, `src/slides`, `src/animations`), `HANDOFF.md` and `REPO-GUIDE.md`;
  - design files, measured narration, route files, the parallel production board;
  - other lessons' behaviour.
- **Machine limits.** This is an 8 GB PC.
  - Every Remotion still or preview takes the shared lock: `until mkdir out/explainer/.stills-lock 2>/dev/null; do sleep 10; done` before, and `rmdir out/explainer/.stills-lock` after. A render queue uses the same lock, so waiting is normal.
  - Run one heavy process at a time, and leave no servers running when you finish.
  - A full-project `tsc` runs out of memory, so typecheck with a scoped tsconfig like `tsconfig-m8c03.json`.

## Checks for each lesson

- The scoped typecheck is clean, every cue resolves and the registry entry is added.
- Stills are taken at several frames per scene and inspected for:
  - overlaps, clipping, overflow, unreadable text;
  - stretched or misaligned plates, stale labels.
  Fix problems and re-still.
- Every hold shows the countdown.
- Build the preview with `node scripts/build-explainer-preview.mjs Explainer-<id> --revision=v1`, under the lock.

Write `checks/codex-build-125.md`, covering:
- the files created;
- the stills rounds and fixes;
- every departure from the design, with the reason;
- the preview paths;
- a contact sheet path per lesson.

Hand in to `status.md`. No full MP4 renders and no commits.
