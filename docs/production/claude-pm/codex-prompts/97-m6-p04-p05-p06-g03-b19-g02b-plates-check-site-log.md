# Brief 97: M6 P04, P05, P06, G03, B19 and Biology G02: plates, error-only check and site corrections log

Read `00-standing-rules.md` first. Do brief 96 first if it is still open, because several plates here depend on brief 96 plates. All six designs are at Revision 2 in `docs/production/claude-pm/lessons/`:
- `chem-m6-p04.md`: pH shows strong against weak (practical)
- `chem-m6-p05.md`: prepare and test a buffer (practical)
- `chem-m6-p06.md`: unknown concentration by titration (practical)
- `chem-m6-g03.md`: standardisation and titration calculation practice
- `bio-m6-b19.md`: which genetic technology benefits hold up
- `bio-m6-g02.md`: evaluating biotechnology, extended-response practice

Nothing is voiced yet.

## 1. Plates

Paint each plate in the brief 82 to 96 style:
- transparent PNG with a real alpha channel;
- ink and watercolour, with at least 10% clear margin;
- no text, numbers, people, hands or faces.

The full descriptions are in each design's Codex asset brief section, so follow them exactly. P04, P05 and G03 need no new plates.

**Chemistry** (`public/assets/chemistry/`), all from P06:
- **`m6-analytical-balance-v1`:** glass draught-shield doors, a blank display, and a small beaker of white powder on the pan.
- **`m6-burette-meniscus-closeup-v1`:** a burette section with a concave meniscus and one line per 0.1 mL. No numerals.
- **`m6-clip-methyl-orange-yellow-v1`, `-orange-v1`, `-red-v1`:** three aligned conical flasks, matching the phenolphthalein clip framing (2048 × 1700). Check a 50% overlay between them.

**Biology** (`public/assets/biology/`):
- **`m6-papaya-healthy-v1` and `m6-papaya-ringspot-v1`:** an aligned pair of the same young papaya tree. The second shows virus-mottled, distorted leaves and ringed fruit (B19).
- **`m6-growth-hormone-vial-v1`:** a small glass vial with a grey crimped cap, holding white freeze-dried powder. No label (B19).
- **`m6-cheese-wheel-v1`:** a whole pale yellow wheel with a wedge cut out (B19).
- **`m6-washing-machine-v1`:** a front-loader in three-quarter view, with laundry visible through the door. No digits or brand marks (B19).
- **`m6-wild-mountain-sheep-v1`:** a generic mouflon or argali type sheep with curved horns, facing right. Match the scale and style of `m6-white-sheep-v1.png` (G02).
- **`m6-pig-side-v1`:** a pink domestic pig standing side-on, facing left. No pen or ground (G02).

Write the provenance to `assets/brief97-provenance.json` and QA views (cream and checker) to `assets/brief97-qa/`. Archive the git-ignored plates as in brief 92.

## 2. Error-only fact check, before voicing

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempts and feedback, the key notes and the YouTube metadata. Each design's "Numbers to verify" and facts sections list what to confirm. In particular:

- **P04:**
  - the readings (HCl mean 1.08, NaOH mean 12.91, ethanoic acid 2.88 and 3.38, ammonia 11.12 and 10.62);
  - the dilution changes and the ratio of 66;
  - the narrowing-gap link to P03's 23 times;
  - the dilution reasoning;
  - the NaOH classification wording.
- **P05:**
  - 4.74 predicted and 4.68 measured;
  - the acid, base and dilution test changes against water;
  - the capacity reading;
  - the 3 : 1 mixture at 4.27;
  - the hook's dilute HCl at about 2 × 10⁻⁵ mol/L dropping to about 2.32;
  - the classifications.
- **P06:**
  - Na₂CO₃ 1.3656 g in 250.0 mL, giving 0.05154 mol/L;
  - the means of 24.33 and 24.82 mL, giving 0.1059 and 0.1038 mol/L;
  - the attempt error directions (wet pipette: too high; flask rinsed with carbonate: too low);
  - the parallax direction;
  - methyl orange H301;
  - the NESA accuracy wording (Science 7 to 10, 2018).
- **G03:**
  - oxalic acid dihydrate 1.5822 g, giving 0.05020 mol/L, then NaOH at 0.1046 mol/L;
  - the brick cleaner at 3.190 mol/L and 11.1% (density 1.05 g/mL);
  - the NaHCO₃ tablet at 77.84%;
  - the methyl orange endpoint condition on the 1 : 2 ratio.

  Also search past NESA papers, 2019 to 2025, for originality.
- **B19:**
  - the He Jiankui CCR5 facts and the International Commission;
  - sperm washing;
  - Rainbow papaya (1998, about 40 million pounds by 2001);
  - recombinant insulin approved in 1982, and the Cochrane human against animal insulin result;
  - growth hormone CJD and the 1985 withdrawal (at least 226 cases by 2012);
  - chymosin, first approved in 1988 and in the US in 1990;
  - cold-wash enzymes;
  - the yeast-made hepatitis B vaccine dates.
- **Biology G02:**
  - Bt maize facts;
  - the mouflon cloning precedent (Loi 2001);
  - the pig kidney wording ("special permission", about nine months). **Recheck the current longest pig kidney graft**, because the narration says "months, not years".
  - the eGenesis edit counts;
  - the 2023 Q34 marking-feedback quote, word for word.
- **All six:** check each dotpoint word for word against the 2017 syllabus.
- **Exam style:** check that each question reads like a real HSC Section II question, and that none copies or closely paraphrases a NESA question.

Write `checks/codex-check-97.md`, one section per design, giving each error with the corrected text and a source. Report errors only.

## 3. Site corrections log

Add the new site errors listed in each design's Decisions section to `docs/production/claude-pm/site-corrections-m6.md`, in that file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged. B19 has nine or more new items from Biology L17, including the new correction 17. The Chemistry designs list theirs in their Decisions sections.

Hand in to `status.md`.
