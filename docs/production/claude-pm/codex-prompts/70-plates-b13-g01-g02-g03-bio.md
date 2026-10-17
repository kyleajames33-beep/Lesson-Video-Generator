# Brief 70: plates for Biology B13, G01, G02 and G03

Read `00-standing-rules.md` first.

**Every plate:**
- transparent PNG with a real alpha channel;
- ink and watercolour, matching the existing `public/assets/biology/m5x-*` plates;
- no text, labels, numbers or arrows;
- no people, faces or hands;
- about 2000 px on the long side, at least 8% clear margin.

Save each plate to `public/assets/biology/`. The exact framing for each one is in the "Codex asset brief" section of its design in `docs/production/claude-pm/lessons/`. Follow that section.

**B13** (`bio-m5-b13.md`):
1. `m5x-sample-tube-rack-v1`: blank label strips only.
2. `m5x-anopheles-mosquito-v1`: must not look like Aedes. No white leg bands; the abdomen is raised.
3. `m5x-tasmanian-devil-v1`: healthy, with no tumours.

**G03** (`bio-m5-g03.md`):
4. `m5x-newborn-blood-spot-card-v1`: blank printed areas.

**G01** (`bio-m5-g01.md`):
5. `m5x-firefly-glow-v1`
6. `m5x-koala-v1`
7. `m5x-sweetpea-purple-v1` and `m5x-sweetpea-red-v1`: an aligned pair.

**G02** (`bio-m5-g02.md`):
8. `m5x-chicken-black-v1`, `-blue-v1` and `-splash-v1`: a matched set, same pose and scale. The blue has darker lacing on the feather edges.
9. `m5x-cat-tortoiseshell-v1`, `-orange-v1` and `-black-v1`: a matched set, same pose and scale.

**QA:**
- Show each plate on the dark board and on cream at about 200 px.
- Show each set side by side in greyscale. The blue and black chickens must be told apart, and so must the tortoiseshell and black cats.
- Show overlays of the aligned pairs and sets.

Write the provenance to `docs/production/claude-pm/assets/brief70-provenance.json` and the QA views to `docs/production/claude-pm/assets/brief70-qa/`. Hand in to `status.md` with one line per plate.
