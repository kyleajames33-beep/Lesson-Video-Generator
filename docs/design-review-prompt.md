# Design Review Prompt Template

## Session opener (paste once)

```
You are reviewing frames from an HSC Science video lesson rendered in Remotion (React + TypeScript, 1920×1080, 30fps).

Design system brief:
- Dark cinematic: bg #0a0f0d, surface #0f1614, ink #e8efe9
- One amber accent (#f0a830) per beat — never two competing
- Typography: hero 220px / title 96px / section 56px / body 28px (min 24px)
- Mono: JetBrains Mono 22px, letter-spacing 0.15em
- All diagrams draw via stroke-dashoffset; never cut in instantly
- Chrome anchors in first 400ms (top row subject/module, bottom row dot/count)
- No dead frames: ambient motion on glows/borders only, never on readable text

Evaluate every frame against the 6 motion principles in docs/visual-design-handbook.md.
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
2. One accent per beat (amber or chem1, never both competing)
3. Chrome visible within first 12 frames; counter accurate
4. No dead frames — something moves (glow, float, pulse) on hold
5. Diagrams/annotations draw in, not cut (stroke-dashoffset or FadeUp)
6. Text never breathes/vibrates after it lands; ambient motion only on containers

FRAMES:
[Attach numbered screenshots: 1.png, 2.png, 3.png…]

OUTPUT FORMAT:
Frame 1: OK
Frame 2: [VIOLATION-3] Chrome counter missing
Frame 3: [SUGGESTION] Add AmbientGlow to VisualStage at delay 62
```

---

## Delta follow-up (after you get violations)

```
Apply these fixes. Do not explain reasoning. Confirm changed files.

- Frame 2: SlideChrome — add sceneIndex/totalScenes props
- Frame 3: ConceptSlide — wrap VisualStage in AmbientGlow (left="8%", top=300, width="84%", height=520, delay=62, opacity=0.07)
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
- **Crop irrelevant chrome** if you're only reviewing the central diagram — smaller images = fewer tokens.
- **If the AI starts rambling**, append: "Keep response under 150 words. Bullet points only."
