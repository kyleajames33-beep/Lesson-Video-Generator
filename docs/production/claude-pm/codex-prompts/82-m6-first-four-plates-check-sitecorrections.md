# Brief 82: first four Module 6 designs: plates, error-only check, and site corrections log

Read `00-standing-rules.md` first. The designs are at Revision 2 in `docs/production/claude-pm/lessons/`:
- `chem-m6-c01.md`: acid and base models
- `chem-m6-c02.md`: naming, and acid reactions
- `bio-m6-b01.md`: mutation adds new alleles
- `bio-m6-b02.md`: mutagens

Nothing is voiced yet.

## 1. Plates

Paint every new plate listed in each design's "Codex asset brief" section, using the brief 47 and 48 style:
- transparent PNG with a real alpha channel;
- ink and watercolour;
- no text;
- no people, hands or faces.

**Chemistry** (`public/assets/chemistry/`):
- aligned pair: `m6-litmus-red-v1` and `-blue-v1`;
- aligned pair: `m6-nh4cl-tube-clear-v1` and `-ring-v1`;
- `m6-marble-chips-acid-v1`, `m6-zinc-acid-v1` and `m6-copper-acid-v1`, framed like `m5x-strong-acid-mg-v1`;
- aligned pair: `m6-limewater-clear-v1` and `-milky-v1`;
- `m6-splint-pop-v1`, with metal fizzing in acid at the bottom of the tube and no hands;
- `m6-fertiliser-granules-v1`.

**Biology** (`public/assets/biology/`):
- `m6-agar-dish-top-v1`;
- `m6-velvet-replica-block-v1`;
- `m6-granite-outcrop-v1`;
- `m6-mouldy-peanuts-v1`;
- `m6-uv-cabinet-v1`.

Write the provenance to `assets/brief82-provenance.json` and QA views to `assets/brief82-qa/`, with overlays for the aligned pairs.

## 2. Error-only fact check, before voicing

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, and the YouTube metadata in the four designs:
- recompute or balance every equation and check its states;
- check every name, date and number against reliable sources;
- check each dotpoint word for word against the official 2017 syllabus.

Write `checks/codex-check-82.md`, one section per design, giving each error with the corrected text and a source.

## 3. Site corrections log

While writing these designs, Claude found site errors. They are recorded in each design's Decisions or Site errors section: C01 and C02 (site Chemistry Module 6 lessons 1 and 2) and B02 (site Biology Module 6 lesson 2, five new items). Add each one to `docs/production/claude-pm/site-corrections-m6.md`, in that file's format, with the exact old text, the correct statement and a source, so the site fix pass can apply them.

Hand in to `status.md`.
