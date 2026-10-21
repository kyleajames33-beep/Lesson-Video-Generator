# Brief 98: M6 Chemistry P01, G04, P07 and Biology P01: plates, error-only check and site corrections log

Read `00-standing-rules.md` first. Do briefs 96 and 97 first if they are still open; P07 reuses brief 96's `m6-buffer-bottle-v1`. This is the last Module 6 design batch. All four designs are at Revision 2 in `docs/production/claude-pm/lessons/`:
- `chem-m6-p01.md`: red cabbage indicator (practical)
- `chem-m6-g04.md`: curves, indicators and back titration practice
- `chem-m6-p07.md`: analysis of a household substance (vinegar, practical)
- `bio-m6-p01.md`: UV exposure and yeast survival (a data-analysis practical)

Nothing is voiced yet.

## 1. Plates

Paint each plate in the brief 82 to 97 style:
- transparent PNG with a real alpha channel;
- ink and watercolour, with at least 10% clear margin;
- no text, numbers, people, hands or faces.

The full descriptions are in each design's Codex asset brief section, so follow them exactly. G04 and P07 need no new plates.

**Chemistry** (`public/assets/chemistry/`), all from P01:
- **`p01-red-cabbage-chopped-v1`:** a quarter red cabbage with chopped shreds. No knife, no hands.
- **`p01-cabbage-steeping-beaker-v1`:** a beaker of hot water turning purple, with shreds in it and faint steam.
- **`p01-filter-funnel-flask-v1`:** a funnel with a wet filter-paper cone of shreds over a conical flask of purple filtrate, with a drop at the tip.
- **`m6-clip-red-cabbage-red-v1` and `m6-clip-red-cabbage-yellow-v1`:** the same beaker, framing and 2048 × 1700 canvas as the existing purple and green red-cabbage clip plates, with pink-red and pale yellow liquid. They must line up exactly for crossfades, so check a 50% overlay against the purple plate.

**Biology** (`public/assets/biology/`), all from Biology P01:
- **`m6-uv-cabinet-closed-v1`:** the same steel cabinet as `m6-uv-cabinet-v1.png`, with the door closed and latched, **no light visible anywhere**, a blank control panel and an interlock latch.
- **`m6-yeast-plate-000s-v1`, `-015s-v1`, `-030s-v1`, `-060s-v1`, `-120s-v1`:** one matched top-down 90 mm taped Petri dish with cream yeast colonies, at exactly **144, 97, 61, 24 and 5** colonies. Use identical dish, agar and framing, and count each before hand-in.
- **`m6-yeast-selective-plate-v1`:** the same dish and framing, with slightly more amber agar and exactly three small colonies.
- **`m6-micropipette-spreader-v1`:** a micropipette with a blank display, an L-shaped spreader, and a capped tube of suspension in a rack.
- **`m6-autoclave-bag-plates-v1`:** a clear autoclave bag with an abstract orange stripe (no text), holding taped dishes.

Write the provenance to `assets/brief98-provenance.json` and QA views (cream and checker) to `assets/brief98-qa/`. Archive the git-ignored plates as in brief 92.

## 2. Error-only fact check, before voicing

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempts and feedback, the key notes and the YouTube metadata. Each design's "Numbers to verify" and facts sections list what to confirm. In particular:

- **P01:**
  - the red cabbage anthocyanin colour against pH chart;
  - yellow in strong base (a structural change and breakdown);
  - 0.10 mol/L NaOH reading green "straight away";
  - the reversibility cycle;
  - baking soda at about pH 8.3;
  - why cabbage is a poor titration indicator;
  - the HCl and NaOH hazard wording.
- **G04:** recompute every number:
  - ammonia with HCl: 24.0 mL, 0.120 mol/L, steep part about 6.6 to 4, methyl red best, methyl orange slightly late;
  - the swapped burette with phenolphthalein: 2.31 mL late, 0.108 mol/L;
  - the eggshell back titration at 94.1%, and the water-rinsed burette giving too low a result;
  - the blue-dyed ammonia conductivity crossing at 8.40 mL, giving 0.0840 mol/L.

  Also search past NESA papers, 2019 to 2025, for originality.
- **P07:**
  - 0.09940 mol/L NaOH, a 17.10 mL titre, the tenfold dilution, 0.6799 mol/L, and 4.083 g per 100 mL (4.063 g per 100 g);
  - the Food Standards Code vinegar minimum of 40 g/kg;
  - the Ka check, pH 2.46 neat and 2.96 diluted;
  - the 5% shift per 0.01 pH;
  - the pH 2.00 calibration buffer;
  - phenolphthalein "may cause cancer" (H350) and its concentration limits;
  - the A2 ammonia loss direction.
- **Biology P01:**
  - the new replicate counts, means, ranges and relative survival, and A1 at 27.0% and A2's correction;
  - UVC pyrimidine dimers and stalled copying;
  - the selective-plate mutation measure at about 2 × 10⁷ cells, as a fraction of survivors;
  - *S. cerevisiae* teaching strains as risk group 1 (AS/NZS 2243.3:2022);
  - ARPANSA RPS 12 for UVC;
  - 70% ethanol H225.
- **All four:** check each dotpoint word for word against the 2017 syllabus.
- **Exam style:** check that each question reads like a real HSC Section II question, and that none copies or closely paraphrases a NESA question.

Write `checks/codex-check-98.md`, one section per design, giving each error with the corrected text and a source. Report errors only.

## 3. Site corrections log

Add the new site errors listed in each design's Decisions section to `docs/production/claude-pm/site-corrections-m6.md`, in that file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged.
- **P01:** site Chemistry Module 6 L02 and L15. This includes the site calling 0.1 mol/L HCl and NaOH "corrosive to eyes".
- **G04:** the error-direction summary line that names no set-up.
- **P07:** L19.
- **Biology P01:** Biology L02.

Also re-check the `site-corrections-m6.md` entry behind C12's correction 6 (vinegar "grams per 100 mL"). The Food Standards Code minimum is mass per mass, 40 g/kg, so adjust the correct statement if needed.

Hand in to `status.md`.
