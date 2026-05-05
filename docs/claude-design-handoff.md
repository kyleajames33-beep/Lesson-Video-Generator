# Claude Design Handoff — One-Paste Prompt

Copy-paste this entire block into Claude Design. It tells Claude exactly what to read, in what order, and how to respond so you don't burn tokens on rambling.

---

## ROUND 1 — First contact (paste once)

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

## ROUND 2 — Next batch (after fixing Round 1)

```
Round 2 review. Repo: https://github.com/kyleajames33-beep/Lesson-Video-Generator

FIXED FROM ROUND 1 — do NOT re-report these:
- All slides now use shared <Eyebrow> component (22px mono, 0.15em, inkDim)
- HookSlide accent overload fixed: only scribble underline is amber
- ConceptSlide accent overload fixed: only callout is amber; StampInTitle underline is chem1
- ConceptSlide VisualStage drift moved to decorative layers only; content stays locked
- TYPE scale expanded in src/styles/tokens.ts (display, h1-h4, subhead, bodyLarge, bodySmall, callout)

Read these files. Skip everything else.
1. src/slides/WorkedExampleSlide.tsx
2. src/slides/MisconceptionSlide.tsx
3. src/slides/QuickCheckSlide.tsx
4. src/slides/SummarySlide.tsx
5. src/slides/shared/ChapterRibbon.tsx
6. src/styles/tokens.ts (for reference only — don't critique the scale itself)

YOUR TASK:
Compare these four slides + chrome against the design system in docs/visual-design-handbook.md.
List ONLY violations or one-line specific improvements.
If a file passes all checks, write "OK".

OUTPUT FORMAT — use exactly this:
File: [VIOLATION-#] one sentence
File: [SUGGESTION] one sentence

If no violations in a file, write:
File: OK

Keep total response under 300 words. Do NOT explain the design system back to me.
```

---

## ROUND 3 — Remaining slides + unimplemented suggestions (after fixing Round 2)

```
Round 3 review. Repo: https://github.com/kyleajames33-beep/Lesson-Video-Generator

FIXED FROM ROUND 2 — do NOT re-report these:
- Remaining inline eyebrows replaced with shared <Eyebrow>
- WorkedExampleSlide accent overload fixed (coachNote → inkDim; step fonts → TYPE.math/mathFinal)
- MisconceptionSlide heading → TYPE.h2; callout scribble → chem1
- QuickCheckSlide fitQuestionSize → TYPE.h2/h3/h4; pause prompt → inkDim
- SummarySlide heading → TYPE.h1; takeaway → TYPE.section/bodySmall; badge → inkDim
- ChapterRibbon pulse removed; active color → chem2; label → 14px

Read these files. Skip everything else.
1. src/slides/DefinitionSlide.tsx
2. src/slides/FormulaSlide.tsx
3. src/slides/MarginaliaSlide.tsx
4. src/slides/LabFootageSlide.tsx
5. src/slides/TitleSlide.tsx (re-check after fixes)
6. src/slides/shared/Eyebrow.tsx

Also evaluate these three suggestions from Round 2 that we haven't implemented yet:
A. Extract shared <MathText> component (duplicated across Worked/QuickCheck/Summary)
B. MisconceptionSlide card title 46px / card body 29px — add tokens or accept as one-off?
C. QuickCheckSlide answerStart = 360 hard-coded — expose as prop?

YOUR TASK:
For the four slides: list ONLY violations or improvements.
For suggestions A/B/C: give a one-word recommendation ("Do it" / "Skip" / "Defer") plus one sentence of reasoning.

OUTPUT FORMAT:
File: [VIOLATION-#] one sentence
File: [SUGGESTION] one sentence
File: OK

Suggestion A: [Do it/Skip/Defer] — one sentence
Suggestion B: [Do it/Skip/Defer] — one sentence
Suggestion C: [Do it/Skip/Defer] — one sentence

Keep total response under 350 words.
```

---

## Follow-up rounds (keep them short)

**If you want Claude to suggest code:**
```
Fix violation #N in [File]. Show ONLY the code diff. No explanation.
```

**If you want Claude to look at another slide:**
```
Now read src/slides/[File]. Same format. Under 200 words.
```

**If Claude starts rambling:**
```
Stop. Bullet points only. Max 100 words.
```

---

## Tips

- **Number frames in filenames** (`l2-concept-450.png`) so the AI can reference them precisely.
- **Crop irrelevant chrome** if you're only reviewing the central diagram — smaller images = fewer tokens.
- **If the AI starts rambling**, append: "Keep response under 150 words. Bullet points only."
