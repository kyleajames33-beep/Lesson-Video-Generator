# bio-m5-b09 (Mendelian inheritance): quality fix, 6 Nov 2026

Grade before: B (frames 10, 13, 15; key notes dense, aid unframed). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m5-b09-sheet.jpg` (16 stills at the audit times). Narration, audio and measured timing are unchanged. Every element uses the existing word cues.

## Changes
- **The two giveaways (frame 10, `s3.tsx`, rebuilt opening).** Two framed cards (840 x 700). Each holds the rule in 60 to 66 px hand lettering over a large pedigree fragment (standard symbols, 120 px, the shared Pedigree component, no numbers): unaffected parents with an affected daughter, then affected parents with an unaffected daughter. Genotype chips (Aa, Aa, aa) follow. On "name the people" the cards shrink away and a compact recap row (56 px) stays at the top. The worked P1 answer is unchanged apart from larger lines (38 px).
- **Attempt two (frame 13, `s4.tsx`).** The round and wrinkled seed plates (200 px) land with "round seeds are dominant"; the counts card is larger (52 px counts). Question text 32 px.
- **Decision rule (frame 15, `s4.tsx`, rebuilt).** Four numbered step cards (400 x 330) stand ready and fill on their words: allele chips, gamete discs, a letters-only filled square, the coin. The pedigree row uses a standard-symbol fragment and chips laid out by width with arrows.
- **Key notes (`s4.tsx`).** 7 short bullets at 36 px, plus a framed "Remember: pedigrees" card with both trios.

## Left as is
- All teaching scenes before the giveaways, attempt one and both feedback scenes.

## Still to check
- At playback speed: the giveaway cards' shrink into the recap row on "name the people".
- Ready to re-render on the existing narration.
