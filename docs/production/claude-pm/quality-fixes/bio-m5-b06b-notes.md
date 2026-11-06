# bio-m5-b06b (transcription): quality fix, 6 Nov 2026

Grade before: B (frames 2, 10, 14, 16, memory aid unframed). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m5-b06b-sheet.jpg` (16 stills at the audit times). Narration, audio and measured timing are unchanged. Every element still uses the existing cues.

## The black frame 16
It was not in the video. A full blackdetect pass on the master (`Explainer-bio-m5-b06b-v3.mp4`, 553.9 s) finds no black frames. It was not an intended fade either. The audit sheet's frames 6 to 15 are each one scene early, and frame 16 is black: the sheet extraction (a seek on the Google Drive file) read past the end of the stream. The audit's "10" is the memory scene and its "14" is the decision rule. The key notes render normally to the last frame.

## Changes
- **A gene, and its copy (frame 2, `s1.tsx`).** Beside the book, the board now shrinks to 0.64 (it was 0.5) and sits lower, so the gene and its mRNA stay readable next to the analogy.
- **Two things to remember (frame 11, `s3.tsx`).** Both aids are in framed cards. Card 1 is "Memory aid: C before L" with the "C before L" chip. Card 2 is "The trap". The strips are larger: 0.8 in card 1 (it was 0.5) and 0.7 in card 2 (it was 0.55). The text is now 58 to 66 px.
- **Given a DNA strand? Ask first (frame 15, `s4.tsx`).** The strips are 0.8 (they were 0.42), each beside its rule. The chips are 46 to 50 px.
- **Key notes (frame 16, `s4.tsx`).** Five dense paragraphs became 8 short lines at 36 px. A framed aid sits beside them: transCription keeps the language, transLation changes it, C before L, plus the coding/template trap.

## Left as is
- The mushroom in attempt two stays a plain coded icon (owner decision, 16 Oct: no species plate).
- The DNA and RNA tiles are coded by design (abstract base diagrams).

## Still to check
- At playback speed: card 1 appears just before "transcription keeps the language".
- Ready to re-render on the existing narration.
