# y11b-v07 Revision 2 error check

Checked 3 November 2026. Source SHA-256 `744e6e6f4976143f60e17e33c59f229123eca71adcde9784f9ae73490f7be124`.

1. **Should fix:** Scene 9's revised narration begins “Air scatters electrons”, but its first visual still triggers on the removed words “Air molecules”. The written cue cannot match the revised recording. Anchor the beam-and-air animation to the words that remain in that sentence.

The three unique brief 147 findings are otherwise applied: scene 7 names the 1940s and 1950s; scene 9 and its notes distinguish usual TEM sections, SEM surfaces and frozen-hydrated cryo-EM; and the handoff rings the plasma-membrane thumbnail rather than a mitochondrial membrane. The v06 five-line plan, microscope pair and chip match the v07 opening, and the revised thumbnail frame matches the v08 opening under the notes-restoration rule. The v07 requested early microscope, cork, SEM and mesosome plates appear in `assets/brief147-manifest.json`. Numerical checks are in `work/brief158/v07-calculations.json`.

The parser counted 18 scene files, 5,896 separate characters and 5,913 when joined. The design estimates about 572 s; root explicitly accepted that length. No em dash or checked American spelling appears in narration. No audio or rendered frame was inspected.
