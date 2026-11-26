# Brief 247, w01 to w14 hand-in

16 November 2026. Codex, solo. Scope is the owner's fourteen-design request. The brief file now also lists w15 to w31; those additions have not been reviewed or painted in this hand-in.

Steps 1 and 2: 28 learning/maths review files delivered. All 305 exact calculation checks pass. Anchor check covers these fourteen designs against 67 Year 12 designs. Counts and estimates are source checks, not measured speech. Full evidence: `work/brief247/progress.json`, `mechanical-checks.json`, per-design calculation/source-audit files, and `checks/m-a11-w01-w14-anchor-check.md`.

Step 3: 33 manifest records, 24 native PNGs delivered under `public/assets/maths/`, nine failed or held candidates kept in `work/brief247/`. Two w07 plates were skipped because its source has a learning blocker. Prompts and original generated-image paths are retained in the generation JSON files. Built-in imagegen was used; no production image was upsampled, stretched or edited with Python. QA composites and overlays are separate evidence.

| Design | Plate result and remaining gate |
| --- | --- |
| w01 | Whole cube passes static QA. Separate layer/row/block fail 3 px stacking. Root ruling 2 whole-cube face-tint fallback applies. |
| w02 | Whole 24-piece chocolate plate delivered for w01 handoff. Separate row fails 3 px registration; cell dimensions also vary. Splitting and exact tile overlay held. |
| w03 | Four-base diamond held. Diagonal errors against individual sides are 0.57 to 1.21 percent, above 0.5 percent. Pale grass fringe on dark. |
| w04 | Rug passes static QA. Approximate body ratio differs from request; coded outline supplies changing exact dimensions. |
| w05 | Kayak jetty passes static QA. Blank sign is about 40 px wide at the requested plate size, too small for the required price text. Root resolves composition. |
| w06 | Reader/card pass static QA. Balance display does not fit the required type at 520 px whole-file height. w07 handoff held. |
| w07 | Vending machine/muesli bar skipped until root resolves the reversed-mapping blocker. |
| w08 | Taxi, meter, road strip and ten-pin group pass static QA. Meter readout type is taller than the safe display. Road repeats at native aspect, with two-copy seam checked. |
| w09 | Pizza passes static QA, including 12-sector registration. Ramp handoff held under w10. |
| w10 | Ramp held: measured run/rise about 18.34, rather than 14; unequal scale estimates and narrow side margins. Actual points reported for root's fitting decision. |
| w11 | Root ruling 14 fallback delivered: roadless rooftop texture under exact coded streets. Original painted roads fail registration. Code must cover texture where it draws streets. |
| w12 | Six plates pass static and requested-size QA. Five-box row and six-row trolley stack fit at uniform scales. Cleaned kettlebell has no visible halo. Tank hose ends within file. |
| w13 | Five plates pass static and requested-size QA. Stall supplied for w12 handoff; high hammock supplied for static w13 handoff. |
| w14 | Three states painted. High delivered only for static handoff. Full equal-scale profile test fails near hooks/outer eighths; hook error about 116 px against 27.3 px tolerance. Corrected touch reaches ground; drag lies flat. Frame redraw/one-pixel file-width differences hold registered cross-fades. Root resolves profile fit and shared-frame animation. |

Source findings remain as recorded per design: w07 scene 3 is a blocker; w02 coincidence at x=0, w04 exact-width wording, w05 rational-root assumption, w07 feedback pace, w09 square-root mnemonic, w10 cue/pace/join size, and w12 discrete class credits need root's decision. No source wording was changed.

QA correction: the first hammock cross-fade diagnostic mixed straight-alpha RGB and exposed hidden colours. `work/brief247/fix-crossfade-qa.py` replaces it with a blend of correctly composited images. The corrected strip was inspected. Hidden-colour artefacts are not a plate-alpha finding. Frame redraw and geometric discrepancies remain.

No Year 11 speech generated. Step 4 remains after Year 12, at the next quota reset and with fresh source/art gates. Exact voiced timing, playback and human listening remain pending. No renders, commits or design edits.
