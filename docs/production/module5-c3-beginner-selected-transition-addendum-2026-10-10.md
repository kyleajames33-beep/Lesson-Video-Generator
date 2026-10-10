# C3 transition-overlap follow-up, 10 October 2026

Independent read-only addendum. The frozen initial review and findings remain unchanged. Exact machine-readable bindings and the actual runtime results are in module5-c3-beginner-selected-transition-addendum-2026-10-10.json.

No equivalent plant overlap defect was found. The exact C3 source and props contain no transitionDurationInFrames override. The runtime still overlaps adjacent scenes by 24 frames. Calling the real lessonTimeline gives remove-A start 11375, hold local 720..1080 (global 12095..12455), first answer stage 1093 and incoming cooling scene at local 2162. The hold finishes 1082 frames before that incoming transition. Cooling starts 13537, has hold local 849..1209 (global 14386..14746), first answer stage 1222 and incoming summary at local 1983. Its hold finishes 774 frames before the incoming transition. Intervals are end-exclusive.

Own feedback fade boundaries remain 1080 and 1209, with later first stages. Source gate checks therefore remain valid for the two complete separate planned attempts. These are silent timing estimates, not measured prompt/audio silence, continuous playback or listening. The six visual blockers and recording/native/audio gates from the original report remain unresolved.

Future visual or recording revisions must recompute these actual timeline boundaries, preserve same-scene gates and avoid introducing an ignored transition override. No core, source, renderer or gate files were changed.
