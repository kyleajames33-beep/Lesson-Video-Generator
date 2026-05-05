# Claude Design Handoff — One-Paste Prompt

Copy-paste this entire block into Claude Design. It tells Claude exactly what to read, in what order, and how to respond so you don't burn tokens on rambling.

---

## PASTE THIS

```
I need a design review of my Remotion video lesson pipeline. Here's the repo:
https://github.com/kyleajames33-beep/Lesson-Video-Generator

Read these files in this order. Skip everything else.

1. docs/visual-design-handbook.md — the design system
2. docs/gold-standard-lesson-reference.md — the reference lesson
3. docs/feature-wishlist.md — what we're building next
4. src/styles/tokens.ts — colours, fonts, spacing
5. src/slides/shared/SlideFrame.tsx + SlideChrome.tsx — the shell
6. src/slides/TitleSlide.tsx + HookSlide.tsx + ConceptSlide.tsx — three core slides

Do NOT summarise what you read. I wrote it. I know it.

---

YOUR TASK:

Compare the three core slides (Title, Hook, Concept) against the design system.
List ONLY specific violations or concrete improvements.

OUTPUT FORMAT — use exactly this:

VIOLATIONS:
- [File] [Line] [Rule] — one sentence

IMPROVEMENTS:
- [File] — one sentence

If something is correct, do NOT mention it.
Keep total response under 400 words.
```

---

## Why this works

| Without this prompt | With this prompt |
|---|---|
| Claude reads random files, summarises your own docs back to you | Claude reads the 6 files you care about, skips the rest |
| "Here's a general review of your project…" 1,200 words | "VIOLATIONS: 3 bullets. IMPROVEMENTS: 2 bullets." 150 words |
| Suggests changes to files you already know are fine | Only flags actual problems |

---

## Follow-up rounds (keep them short)

**If you want Claude to suggest code:**
```
Fix violation #2. Show ONLY the code diff. No explanation.
```

**If you want Claude to look at another slide:**
```
Now read src/slides/WorkedExampleSlide.tsx and src/slides/MisconceptionSlide.tsx.
Same format. Under 200 words.
```

**If Claude starts rambling:**
```
Stop. Bullet points only. Max 100 words.
```

---

## Pro tip: the `docs/design-review-prompt.md` file

If you ever want Claude to review **screenshots** instead of code (e.g. after you proxy-render frames), use the prompt template in `docs/design-review-prompt.md`. It's optimised for image review — batched frames, numbered, checklist-driven.
