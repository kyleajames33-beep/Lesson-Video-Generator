# Design Review Prompt Template

## Session opener (paste once)

```
You are reviewing frames from an HSC Science video lesson rendered in Remotion (React + TypeScript, 1920×1080, 30fps).

Design system brief:
- Light editorial: bg #f7f7f5, white cards, ink #1a1a1a; subject accents come from useAccent().
- One amber accent (#f0a830) per beat : never two competing
- Typography: hero 220px / title 96px / section 56px / body 28px (min 24px)
- Mono: JetBrains Mono 22px, letter-spacing 0.15em
- Diagrams reveal via stroke-dashoffset, staged construction, or FadeUp; teaching labels stay locked after reveal.
- Chrome anchors in first 400ms (top row subject/module, bottom row dot/count)
- Purposeful motion: deliberate reading/thinking holds are valid; never move readable text during a hold

Evaluate frames against the 7 motion principles in docs/visual-design-handbook.md. Use short clips to judge timing and movement.
Do NOT explain the design system back to me. Do NOT compliment good work.
```

---

## Per-batch prompt (paste for every batch of frames)

```
Review these [N] frames against the checklist below.
For each frame, list ONLY violations or one-line specific improvements.
If a frame passes all checks, write "OK".

CHECKLIST:
1. Typography hierarchy respected (eyebrow < heading < body < callout)
2. One focal amber accent per beat; subject colour supports structure without competing
3. Chrome visible within first 12 frames; counter accurate
4. Holds sustain the teaching task; subtle glow/pulse only where it helps, never moving readable text
5. Diagrams/annotations draw in, not cut (stroke-dashoffset or FadeUp)
6. Text never breathes/vibrates after it lands; ambient motion only on containers

FRAMES:
[Attach numbered screenshots: 1.png, 2.png, 3.png…]

OUTPUT FORMAT:
Frame 1: OK
Frame 2: [VIOLATION-3] Chrome counter missing
Frame 3: [VIOLATION-4] Result appears before the narrated operation
```

---

## Delta follow-up (after you get violations)

```
Apply these fixes. Do not explain reasoning. Confirm changed files.

- Frame 2: SlideChrome : add sceneIndex/totalScenes props
- Frame 3: ConceptSlide: delay the result until the narrated operation completes
```

---

## Code-review follow-up (if AI needs to see code)

```
Here is the relevant code section only. Do not modify anything outside this block.

[ paste 20–40 lines max ]
```

---

## Tips

- **Number frames in filenames** (`l2-concept-450.png`) so the AI can reference them precisely.
- **Crop irrelevant chrome** if you're only reviewing the central diagram : smaller images = fewer tokens.
- **If the AI starts rambling**, append: "Keep response under 150 words. Bullet points only."
