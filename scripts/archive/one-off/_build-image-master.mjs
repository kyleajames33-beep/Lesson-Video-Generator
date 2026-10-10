import {readFileSync, writeFileSync} from 'node:fs';
const sections=[
  ['image-prompts-bio-y12-m5-l1-to-l10.md','Module 5 — Heredity · Lessons 1–10'],
  ['image-prompts-bio-y12-m5-l11-to-l19.md','Module 5 — Heredity · Lessons 11–19'],
  ['image-prompts-bio-y12-m6-l1-to-l10.md','Module 6 — Genetic Change · Lessons 1–10'],
  ['image-prompts-bio-y12-m6-l11-to-l19.md','Module 6 — Genetic Change · Lessons 11–19'],
  ['image-prompts-bio-y12-m7-l1-to-l11.md','Module 7 — Infectious Disease · Lessons 1–11'],
  ['image-prompts-bio-y12-m7-l12-to-l21.md','Module 7 — Infectious Disease · Lessons 12–21'],
  ['image-prompts-bio-y12-m8-l1-to-l11.md','Module 8 — Non-infectious Disease & Disorders · Lessons 1–11'],
  ['image-prompts-bio-y12-m8-l12-to-l21.md','Module 8 — Non-infectious Disease & Disorders · Lessons 12–21'],
];
const header=`# HSC Biology Year 12 — Image Generation Master Pack

Point ChatGPT (image generator) at this file. It contains every illustration needed for the
HSC Biology Year 12 video lessons (Modules 5–8): **one hook image per lesson**. The on-slide
concept visuals (Punnett squares, pedigrees, DNA helices, graphs, flows, tables) are drawn in
code by the renderer — **do NOT generate those; only the hook images below are needed.**

## How to use
For each lesson entry below: copy its **Prompt**, prepend the **House style** block, generate,
and save the PNG to the exact **save path / filename** (see the reference table if an entry's
path is unclear). Create folders as needed; the filename must match exactly.

## House style — APPLY TO EVERY IMAGE (overrides any conflicting style words in individual prompts)
Render all images in ONE consistent style so the series looks cohesive:
- **Style:** clean, modern, flat-but-premium **editorial science illustration** — crisp vector-like
  forms with soft cell-shading and gentle rim light. NOT photographic. NOT a rough hand-sketch /
  hand-annotated look. Scientifically accurate.
- **Palette:** cohesive cool base (teals, indigos, blues, greens) with a **single accent** per image
  (a Biology blue ~#3A8AD9, or one warm pop) — restrained and consistent across the whole set.
- **Composition:** a single clear subject with **generous negative space** on one side (the renderer
  adds captions there). Landscape framing that reads at 1920×1080.

## Hard rules (non-negotiable, every image)
- **Transparent PNG with a real alpha channel** — no background fill, no white box, no rounded card.
- The video slide background is **LIGHT (#f7f7f5)**, so the illustration must read with good
  contrast on a near-white background — solid forms, clear edges; do NOT rely on glow or
  light-on-dark effects.
- **No text, letters, numbers, or labels of any kind** — captions are added by the renderer.
- Save to the **exact path + filename**.

---
`;
const idx=readFileSync('src/assets/index.ts','utf8');
const rows=[...idx.matchAll(/(\bbioM\d[A-Za-z0-9]+):\s*staticFile\('([^']+)'\)/g)].map(m=>[m[1],'public/'+m[2]]);
rows.sort((a,b)=>a[0].localeCompare(b[0],undefined,{numeric:true}));
let table=`\n## Save-path reference — all ${rows.length} images (authoritative)\nIf an entry below is missing/unclear on its path, use this table. Filenames must match exactly.\n\n| Asset key | Save path |\n|---|---|\n`;
for(const [k,p] of rows) table+=`| \`${k}\` | \`${p}\` |\n`;
table+=`\n---\n`;
let out=header+table;
for(const [f,title] of sections){
  let txt=readFileSync(f,'utf8');
  const m=txt.search(/^#{2,3}\s+(Lesson|L\d|Asset)/m);
  if(m>0) txt=txt.slice(m);
  out+=`\n\n# ${title}\n\n${txt.trim()}\n\n---\n`;
}
writeFileSync('docs/image-prompts-biology-y12-MASTER.md', out);
console.log(`Wrote docs/image-prompts-biology-y12-MASTER.md (${(out.length/1024).toFixed(0)}KB) | path-table rows: ${rows.length}`);
