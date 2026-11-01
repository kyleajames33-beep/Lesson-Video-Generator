# Brief 139: painted plates for Year 11 Biology FA1 v01 to v06 and chem-m5-g02b

Read `00-standing-rules.md` and the plate rules in earlier plate briefs (for example the Module 8 plate briefs) first. Run this after brief 138, so that any review change to a plate request is known; if 138 changes a request, follow 138. Do not spawn sub-agents. No design edits, speech or commits.

Each design's "Assets" or "Codex asset brief" section gives the exact plate specifications: content, labels, scale, style match and file name. Root decisions are in `checks/root-decisions-bio-y11-fa1-v01-v06.md` (items 9, 12 and 13 affect plates).

| Design | New plates | Repairs and checks |
|---|---|---|
| `bio-y11-fa1-v01.md` | `y11-cheek-cell-bacteria-v1.png` | Alpha-edge repair of `y11-microscopy-pair-v1.png` |
| `bio-y11-fa1-v02.md` | `y11-lysosome-before-v1`, `y11-lysosome-after-v1`, `y11-vesicle-v1` (sprite) | Alpha-edge repair of `y11-animal-organelles-set-v1.png` |
| `bio-y11-fa1-v03.md` | `y11-root-cell-v1.png` | |
| `bio-y11-fa1-v04.md` | `y11-prokaryote-cutaway-v1.png`: capsule, wall and membrane layers clearly distinct; pili clearly shorter and thinner than the flagellum | |
| `bio-y11-fa1-v05.md` | Three iodine-stained onion fields (low power, high power, with bubbles) and the seven wet-mount parts the design lists | |
| `bio-y11-fa1-v06.md` | A ×400 cheek field with about 8 cells across, and the mini-grid, painted to match the narration's counts (15 onion cells across the ×40 field) | Provenance of `neuron.png`: if unknown, paint a replacement |
| `chem-m5-g02b.md` | An open crucible, matched to `c8-pressure-vessel-v1.png` | |

Rules:
- Transparent PNG with a real alpha channel. Cells and organelles at true relative scale where the design says so. No people, hands or faces; apparatus steps without hands. Never stretch a plate. Match the house painted style of the reused plates the designs name.
- Inspect each finished plate at full size and in a phone-landscape mock, checking that counts, labels and scale match the narration.
- Record files, sha256 and source prompts in a manifest `claude-pm/assets/brief139-manifest.json`, with contact sheets.

Hand in to `status.md`.
