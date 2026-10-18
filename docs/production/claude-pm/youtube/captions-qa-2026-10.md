# Published captions quality check, October 2026

Checked 18 October 2026. The originals are `captions.srt` beside each fixed file. The fixed files keep the cue times and spoken numbers. The first pass wrapped captions to two lines of at most 42 characters. This QA pass balanced the lines and changed spoken letter sequences to conventional chemical notation where needed. No narration, audio or original SRT was edited.

| Video | Cues | Caption fixes |
| --- | ---: | --- |
| [B1](../lessons/b1/measured/captions-fixed.srt) | 163 | Line wrapping only |
| [B2A](../lessons/b2a/measured/captions-fixed.srt) | 233 | Line wrapping only |
| [B2B](../lessons/b2b/measured/captions-fixed.srt) | 212 | Line wrapping only |
| [B2C](../lessons/b2c/measured/captions-fixed.srt) | 205 | Line wrapping only |
| [B3A](../lessons/b3a/measured/captions-fixed.srt) | 191 | Line wrapping only |
| [B3A2](../lessons/b3a2/measured/captions-fixed.srt) | 183 | Line wrapping only |
| [B3B](../lessons/b3b/measured/captions-fixed.srt) | 195 | Line wrapping only |
| [B4](../lessons/b4/measured/captions-fixed.srt) | 208 | Line wrapping only |
| [B6A](../lessons/b6a/measured/captions-fixed.srt) | 201 | Line wrapping only |
| [B9](../lessons/b9/measured/captions-fixed.srt) | 176 | Line wrapping only |
| [C1](../lessons/c1/measured/captions-fixed.srt) | 158 | Line wrapping only |
| [C11](../lessons/c11/measured/captions-fixed.srt) | 192 | Line wrapping only |
| [C13](../lessons/c13/measured/captions-fixed.srt) | 186 | KI, PbI, PbI₂ and CuOH notation; line wrapping |
| [C14](../lessons/c14/measured/captions-fixed.srt) | 178 | Ksp, ICE, CaF₂ and Ag₂CO₃ notation; line wrapping |
| [C2](../lessons/c2/measured/captions-fixed.srt) | 192 | PCl₃ and PCl₅ notation; line wrapping |
| [C3](../lessons/c3/measured/captions-fixed.srt) | 226 | NO₂, N₂O₄, PCl₅ and Fe³⁺ notation; line wrapping |
| [C4A](../lessons/c4a/measured/captions-fixed.srt) | 205 | NO, NO₂ and N₂O₄ notation; line wrapping |
| [C4B](../lessons/c4b/measured/captions-fixed.srt) | 194 | NH₃ notation; line wrapping |
| [C5](../lessons/c5/measured/captions-fixed.srt) | 149 | Fe³⁺ notation; line wrapping |
| [C6A](../lessons/c6a/measured/captions-fixed.srt) | 179 | NO₂, N₂O₄, PCl₃, PCl₅ and ICE notation; line wrapping |
| [C6B](../lessons/c6b/measured/captions-fixed.srt) | 210 | N₂, O₂, NO, H₂, I₂ and HI notation; line wrapping |
| [C7](../lessons/c7/measured/captions-fixed.srt) | 168 | CO, CH₃OH and H₂ notation; line wrapping |
| [C8](../lessons/c8/measured/captions-fixed.srt) | 167 | N₂, H₂, NH₃ and PCl₅ notation; line wrapping |
| [C9](../lessons/c9/measured/captions-fixed.srt) | 190 | NO₂, N₂O₄, H₂, I₂ and HI notation; line wrapping |
| [G01](../lessons/g01/measured/captions-fixed.srt) | 204 | H₂, O₂ and H₂O notation; line wrapping |
| [G01B](../lessons/g01b/measured/captions-fixed.srt) | 179 | Line wrapping only |
| [G03B](../lessons/g03b/measured/captions-fixed.srt) | 118 | Line wrapping only |
| [G03C](../lessons/g03c/measured/captions-fixed.srt) | 120 | ICE and H₂ notation; line wrapping |
| [G03D](../lessons/g03d/measured/captions-fixed.srt) | 151 | NO, NOCl, NO₂, SO₂ and SO₃ notation; line wrapping |
| [P03](../lessons/p03/measured/captions-fixed.srt) | 178 | Line wrapping only |
| [Mould teaching reset](../../fungi-design-reset-2026-10-11/teaching-reset-take02/measured/captions-fixed.srt) | 78 | Line wrapping only |

## Checks and remaining work

- All 31 fixed files have 5,589 numbered cues in total. Each cue has one or two lines, each line has at most 42 characters, and every start precedes its end. No cues overlap and no em dashes remain.
- The unmodified captions match the measured `lesson.json` scene narration word for word after case and punctuation normalisation. Numeric tokens in the originals and fixed captions match. Chemical symbols in the fixed captions express the same narrated formulae.
- There are 46 gaps longer than two seconds. In 45 cases, the cue before the gap tells the learner to pause, think or take a turn. The remaining 11.228 second gap in B3A2 is the transition into key notes. These are deliberate holds, so cue times were left in place.
- No misspelled scientific names or terms were found in the remaining captions.
- On 18 October 2026, the corrected English (Australia) SRT was uploaded and published in YouTube Studio for all 31 public videos. Studio confirmed publication for each track. B3B's completion notice was missed, so its subtitle page was checked separately and showed a published date of 18 October 2026. Biology G01 was corrected immediately after a G01/G01B folder mix-up; its first published cue was checked against the Biology G01B file. A full playback review of each public video with captions enabled remains a separate human check.
