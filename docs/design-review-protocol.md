# Design Review Protocol — Token-Efficient AI Design Reviews

## The Problem

Claude (or any visual LLM) burns tokens in design mode for three reasons:

1. **Images are expensive** — a single 1920×1080 screenshot costs ~1,500–3,000 tokens.
2. **Iterative drift** — "How does this look?" → "Fix X" → "Now how does this look?" → each round re-sends the full conversation + new images.
3. **Vague prompts** — open-ended "improve the design" returns 800 tokens of generic advice you already know.

## The Solution: Batch + Checklist + Delta

Never send one frame at a time. Never ask open-ended questions. Never re-explain the design system.

---

## Step 1 — Pre-compute the design context once per session

At the start of a design session, paste **one** message that loads the design system into context:

```
You are reviewing frames from an HSC Science video lesson rendered in Remotion.
Design system: dark cinematic (#0a0f0d), one amber accent per beat, all diagrams
use stroke-draw animation, typography scale: hero 220px / title 96px / body 28px.

Full design brief: docs/visual-design-handbook.md
Current gold standard: docs/gold-standard-lesson-reference.md
Feature wishlist: docs/feature-wishlist.md

Do NOT explain the design system back to me. I already know it.
```

This costs ~200 tokens once. Every subsequent message in the session gets this context for free.

---

## Step 2 — Export only the frames that need review

Don't render full videos. Export PNG frames at specific timestamps:

```bash
# Export frame 450 (15s) from Lesson 2 as a review PNG
npx remotion render src/index.tsx Lesson2 out/review/l2-frame-450.png --frame=450 --image-format=png

# Or use the review script (see scripts/export-review-frames.mjs)
npm run review:frames -- --lesson chemistry-y11-m2-l2 --frames 0,450,900,1350
```

Rule of thumb: **max 6 frames per review batch**. More than that and the response gets shallow.

---

## Step 3 — Use the structured prompt template

Copy-paste from `docs/design-review-prompt.md` (see below). The key constraints:

- Number every frame (1, 2, 3…)
- Attach the checklist (6 rules)
- Ask for **violations only** — "List ONLY what's wrong. Do NOT describe what looks good."
- Request output in a parseable format:

```
Frame 1: OK
Frame 2: [VIOLATION] Principle 3 — two amber accents (heading + callout)
Frame 3: [SUGGESTION] Add AmbientBorderPulse to final answer card
```

This keeps responses under 300 tokens per frame instead of 800+ tokens of generic design chatter.

---

## Step 4 — Delta-only follow-ups

Once you have the violation list, send **one** follow-up per batch:

```
Apply these fixes. Do not explain. Just confirm which files changed.

- Frame 2: remove amber from callout, keep only heading
- Frame 3: wrap AnswerCard in AmbientBorderPulse (delay +42)
```

If the AI needs to see the code, paste **only** the relevant component (not the whole file). Use `cat -n src/slides/ConceptSlide.tsx | head -40` to grab just the heading section.

---

## Step 5 — Validate without re-rendering

After code changes, run `npm run check:all` (TypeScript + validation). Only proxy-render if the changes affect timing or layout. Most design tweaks (colours, spacing, animation delays) don't need a full re-render — the code is the source of truth.

---

## What NOT to do

| ❌ Bad (expensive) | ✅ Good (cheap) |
|---|---|
| "Here's a screenshot, what do you think?" | "Frame 3: evaluate against checklist, violations only" |
| Send 12 frames in one go | Send 4–6 frames max per batch |
| "Make it look better" | "Increase heading fontSize from 68 to 76 to match type scale" |
| Re-explain the dark theme every message | Paste the design context once at session start |
| Render a 3-minute video to check one colour change | Check the hex code in the file, render only if needed |

---

## Optional: Script-driven review

Use `scripts/export-review-frames.mjs` to auto-export frames from hook, concept, worked-example, and summary scenes for every lesson. Then batch-upload those 4 frames per lesson instead of hunting through videos.
