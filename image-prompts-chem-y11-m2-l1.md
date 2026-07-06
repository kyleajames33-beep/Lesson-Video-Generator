# Image prompts — Chemistry Y11 Module 2, Lesson 1 (Mole Concept)

Same format as `image-prompts-chem-y11-m3.md`. Codex: generate every image
below using your built-in `image_gen` tool, save to the listed path, then
add the registration lines to `src/assets/index.ts`, then run
`npm run validate:lessons`.

---

## Universal style prefix (apply to every prompt)

Premium modern editorial illustration in the spirit of Notion, Linear,
and Atlassian onboarding artwork — applied to serious HSC Chemistry.
Clean chunky isometric 3D forms with soft volumetric shading, generous
rounded edges, confident silhouettes. Surfaces are matte with subtle
hand-touched imperfection (hint of grain or pencil-mark texture inside
flat shapes). Soft single-source key light from the upper-left casting
gentle shadows. Slight 3/4 isometric angle, camera looks down ~20°.

Soft light mint background (around `#e7ede8`) baked into the image —
matches the reference asset `public/assets/carbon-12-molar-mass-balance.png`.
Same chunky form-language, same hand-touched warmth, same palette
restraint as that reference.

**Do NOT include:** any text, letters, numerals, labels, logos.
Multiple subjects competing. Cartoon eyes/expressions on inanimate
objects. Glossy plastic blob aesthetic. Photorealistic PBR rendering.

**Format:** 2048 × 2048 square PNG. Subject centred, ~70% of frame.

---

## Asset 1 — `moleSwarm` (concept-scale scene)

**Save to:** `public/assets/mole-swarm.png`

**Subject:** An overwhelming swarm of small particle dot-spheres arranged
in a slow galaxy-like spiral, suggesting Avogadro's number's astronomical
scale. About a hundred individual chunky 3D spheres in the foreground —
soft volumetric shading, tiny highlights on each. Behind them, the rest
of the dots blend into a soft cloud field stretching into the distance,
with subtle depth-of-field (foreground crisp, distant soft). The spiral
arms suggest gentle rotation. Mood: cosmic, awe-inducing — like looking
up at a galaxy from a clear dark sky.

**Accent colour:** violet (#9b6dd9) for the central foreground spheres,
the cloud field fading to soft grey-violet.

**Registration line for `src/assets/index.ts`:**
```ts
moleSwarm: staticFile('assets/mole-swarm.png'),
```

---

## Asset 2 — `formulaBridge` (formula scene)

**Save to:** `public/assets/formula-bridge.png`

**Subject:** A horizontal three-node flow diagram showing the
relationship between three chemistry quantities. Three chunky isometric
3D pedestals/podiums arranged left-to-right with comfortable spacing.
Left pedestal: a small cluster of particle dot-spheres on top
(representing "number of particles"). Middle pedestal: a single small
beaker shape with a hint of liquid inside (representing "amount in
moles"). Right pedestal: a single elegant solid sphere with a tiny
subscript-dot beside it (representing "Avogadro's constant"). Between
the pedestals: thick confident sketched arrows in violet pointing
left-to-right with subtle hand-touched line-weight variation. Below the
whole row: a single curved bracket shape suggesting the three are
linked.

**Accent colour:** violet (#9b6dd9) for the arrows and connecting
bracket; muted teal-green (#148a6f) for the beaker; amber (#f0a830) for
the particle cluster on the left pedestal.

**Registration line for `src/assets/index.ts`:**
```ts
formulaBridge: staticFile('assets/formula-bridge.png'),
```

---

## Asset 3 — `moleCountingMetaphor` (alternate for concept-problem)

**Save to:** `public/assets/mole-counting-metaphor.png`

**Subject:** A side-by-side visual analogy. On the left: a dozen real
eggs neatly arranged in a chunky 3D egg carton (twelve eggs total,
rendered with soft volumetric shading). On the right: a single
luminous "mole" cluster — a glowing sphere shape made of tightly packed
tiny particle-dots, compressed into a chunky 3D form roughly the same
physical size as the egg carton. Between them, a small hand-drawn
equals-shape (no readable text). Both objects sit on the same
imaginary surface with matching soft drop-shadows. Visual punchline:
"a dozen is a counting unit; the mole is too — just bigger."

**Accent colour:** amber (#f0a830) for the glowing mole cluster on the
right; muted neutral tones for the egg carton.

**Registration line for `src/assets/index.ts`:**
```ts
moleCountingMetaphor: staticFile('assets/mole-counting-metaphor.png'),
```

---

## Asset 4 — `examTrapStamp` (reusable warning glyph for misconception scenes)

**Save to:** `public/assets/exam-trap-stamp.png`

**Subject:** A stylised warning illustration: a single chunky 3D
rectangular bear-trap shape in muted orange with subtle volumetric
shading, jaws slightly open and ready to spring. A tiny stylised
HSC-style pencil hovers just above the trap, about to step on it. The
trap sits at a slight 3/4 isometric angle, casting a soft shadow on
the surface. Mood: playful-serious — students should recognise the
danger without feeling lectured at.

**Accent colour:** muted orange (#e07a3a) for the trap body, dark ink
(#1a1a1a) for the jaws + the hovering pencil.

**Registration line for `src/assets/index.ts`:**
```ts
examTrapStamp: staticFile('assets/exam-trap-stamp.png'),
```

---

## After generation

1. Save each PNG to the path listed above.
2. Append the registration lines to `src/assets/index.ts` in the
   `// ── M2 L1 custom illustrations ──` section.
3. Run validation:
   ```powershell
   npm run validate:lessons
   ```
4. Reply with which files saved successfully. Claude (the other agent)
   will wire each asset into the correct scene via `"image": "<id>"`.
