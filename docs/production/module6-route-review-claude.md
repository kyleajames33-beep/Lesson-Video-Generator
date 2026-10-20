# Module 6 route: Claude's review of Codex's draft (18 Oct 2026)

Source: `module6-video-route-draft.md` and `.json` (Codex brief 69). This review sets the plan the Module 6 designs will follow.

## Accepted

The Chemistry structure is accepted: 16 core videos, 4 practice and 7 practical, in that learner order.

## Changes

1. **Lengths.** Module 5 videos voice at 8 to 9.5 minutes (5,500 to 6,800 characters). The draft's 5 to 7 minute estimates are too short, so plan every core video at 8 to 9 minutes. Short Biology topics are merged so that each video carries one full learner question:
   - bio-m6-b05 and b06 become one video, b05: "Which mutations are inherited, and does it matter where they happen?" (site L05, B6-IQ1-03 and -04).
   - bio-m6-b16 and b17 become one video, b16: "Cloning a whole organism against cloning a gene: how each works and how we judge it" (site L15, B6-IQ3-03).
   - bio-m6-b09 stays as a short opener, but it absorbs b14's "what current technologies change" framing. b14 is then cut and its L13 content is split between b09 and b15.
   - Net result: 17 Biology core videos.
2. **Biology practice videos.** Module 5 showed that practice videos (G series) carry exam skills, so add two:
   - bio-m6-g01: mutation effects practice. Point mutations on a given sequence (silent, missense, nonsense, frameshift), chromosomal changes, and somatic against germline. This sits after b06.
   - bio-m6-g02: extended-response practice on evaluating biotechnology, judging benefits against biodiversity and ethics with the HSC verbs "evaluate" and "assess". This sits after b19.
3. **Ka and pKa.** The dotpoint "calculate and apply the dissociation constant (Ka) and pKa (pKa = -log10 (Ka)) to determine the difference between strong and weak acids (ACSCH098)" is in the official 2017 syllabus, but the local ledger `programme/syllabus/chem-2017-y12.json` is missing it. chem-m6-c10 keeps it as its dotpoint, and the ledger gets fixed (Codex brief 81).
4. **Practical videos** follow the Module 5 practical format and owner rules: no people, painted apparatus, risk table, attempt and countdown.

## Order of production

- **Chemistry first:** c01 to c08 and g01, because pH calculations are the heaviest exam content.
- **Biology in parallel:** b01 to b06 and g01, the mutation block.

Each design goes through the full pipeline: pack, design, learning review, science check, Codex error-only check, voicing, build, owner review, render.

## Additions (19 Oct 2026)

- **bio-m6-g01 (lesson key m6g01b):** mutation effects practice, placed after bio-m6-b05. It has four worked HSC-style questions: point mutations on a template strand, frameshift suppression (Crick 1961), chromosomal changes (an inversion including the centromere, and a 45,X karyotype), and somatic against germline (Belgian Blue myostatin). The start, stop and handoff are stated in `claude-pm/lessons/bio-m6-g01.md`. The draft id bio-m6-b06 is retired, because its content merged into b05.
- **Keys:** m6b05 for bio-m6-b05. Salt hydrolysis moves from C05 and C06 to C13 or C14. The Kw value moves to C07; C06 teaches only self-ionisation and "neutral means equal".
- **bio-m6-b08:** the prerequisite changes from bio-m5-b10 to bio-m5-b11, because allele-frequency counting is taught in B11. b08 uses the Florida panther as its main case, which goes beyond the site lesson.
- **Amphiprotic Ka against Kb** (which way an amphiprotic ion reacts): C10 deferred it and C11 leaves it out. It goes to chem-m6-g02 (practice). The buffer dotpoints are C6-IQ3-07 and -08 in the current ledger. Codex brief 90 corrects the route draft IDs, including P05.
