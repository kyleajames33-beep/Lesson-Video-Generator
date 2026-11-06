# chem-y11-m3-v13 Revision2 error check

Brief219, independent Codex source check,6November2026. Source SHA256 `42ec4fda68d902b3ca8ff6c546741f4c92c3346acc96790dc0b3e4211baa789a`. No source edits, speech, builds or commits.

The shrinking surface is now included and the fastest-at-start rule is limited to these runs. A textbook source for the actual CO+NO2 orientation model was found and visually checked: Chang Chemistry14e, McGraw Hill, chapter13 slide56 (PDFpage28). It shows carbon-to-oxygen success and the two ineffective geometries used here. This is a teaching collision model, not a measured complete mechanism or rate law. The source-description issue can be closed with that citation. The five moving-window rates recalculate to0.5333,0.4000,0.2667,0.1500,0.06667 mL/s. One newly revised terminology problem remains.

1. **Should fix:** Scene10 newly says the acid gets weaker, with a weaker acid hand tag. This change consumes H+ and lowers concentration; it does not change hydrochloric-acid strength. Use less concentrated and match the tag, as the same course already does in repaired m2-v20. This changes speech, so repair it before voicing this lesson.

Mechanical checks: 6,140 characters as the sum of 17 scene strings, matching the headline; source estimate 552s, measured duration pending. Title 95 characters. No U+2014. Quoted narration triggers match in spoken order; longer phrases account for bold-word matches, and the scene11 m4-v01 slider-label exception is explained above. All written joins checked, including v07/current-v08, v12/v13 and m3-v15/m4-v01.

Arithmetic and every live numeric stop: `work/brief219/calculations.json`;47 atom/charge cases in `work/brief219/equation-checks.json` confirm43 balanced equations and4 deliberately wrong ones. The official HSC sheet evidence remains under work/brief180 and brief183. Existing required raster plates are present; the two new approved requests have separate art QA and written fallbacks. Uniform scaling is specified; actual scene assembly and playback remain unbuilt.

Result:0 blockers,1 should fix,0 optional. Resolve the speech finding before this lesson is voiced. This check supplies no full-speed motion, caption fit, human listening, practical-method or release approval.

Textbook source: [Chang Chemistry14e, chapter13, slide56 (PDFpage28)](https://chem1142.ssuchemistry.com/resources/Chapters/Chapter-13/Chang_14e_PPT_Ch13.pdf). Local PDF hash and provenance: `work/brief219/orientation-source.json`; inspected render: `work/brief219/chang-orientation-page28.png`. No need to claim OpenStax supplied this different reaction.
