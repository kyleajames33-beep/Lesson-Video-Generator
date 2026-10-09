# Independent mole-ratios voiced timing review

Reviewer: visual_timing_review. Date: 9 October 2026. Scope: exact reviewed script and manifest matching; measured caption cues and component timing; actual assembled PCM samples; selected decoded native frames from the two completed encoded pilots. No paid generation, production source edits, browser playback, actual-device inspection or human listening by this reviewer. No brief or approval flag changed.

## Exact inspected package

Selected lesson: out/prototypes/mole-ratios-voiced-2026-10-09/narrated.lesson.json. Reviewed prototype: src/prototypes/data/mole-ratios-conversational-v1.json.

| Artifact | SHA-256 at inspection |
| --- | --- |
| Reviewed prototype | ae34f21390318392f6bbeea304600718dba492cf1687faeb1bd3acf4628cfd8e |
| Selected narrated lesson | 68a5590d2f076aff1a9b1178332b5038774bc975040d9e555ce9190062fb7f2c |
| timing-review.json | 03700ea20a5c403bb3341d5f45c011f19fd57c5a02e75db4d6e176d7c20791b6 |
| voice-manifest.json | 349d7c464b3a70ed224b098b27f50ef050eea89f67dc957bd2eebcf395cc2003 |
| voice-playback-plan.json | 783ef7fe0f870f0c2df63516c3200de69c2f3ac4a75630deba1044261d03e7ad |
| production-brief.json | 250087f3af56ee76d9bec108179d84cd5aa58278d0336f44bff42fd9d6f4da1c |
| assembly-source-review.md | afc7a102cf49d35eca21c848bc2b9867f8a74f3733e3ebedd6d7610294f1855d |
| full-captions.srt | b2722597b3073910b25af8d81df7422464012ab810a4c3d26ef357d532976b4d |
| full-captions.vtt | a4d161bd2890090f8edaf2849c3fd4a34bad0fe04f676e623f8c41fd9a596e7e |
| Measured cue specification | 18b9d2fba60a94ff8faf37252d14838c853d45352b3baa9b2756269ecedd35e8 |
| Independent original source review | a04843d2b1810f044e56f57ecf8ade16bcda88465d73631ed412580ec6ca81cc |

Evidence: out/prototypes/feedback-independent-reviews/mole-ratios-voiced-timing-evidence.json and mole-ratios-encoded-pilot-evidence.json. Decoded PNGs use the mole-ratios-diagram and mole-ratios-worked prefixes in that evidence directory.

## Source and measured timing findings

All ten scene transcripts exactly match the independently reviewed prototype. The eleven manifest segments reconstruct those same scene words, with separate quiz prompt and feedback. Caption-token text matches the selected speech. This verifies source binding, not whether the recording sounds natural or pronounces each formula correctly.

Every specified reveal, diagram beat and individual calculation line cue matches its caption phrase. DiagramRenderer passes diagram.delay through to the component; the two diagram components subtract that delay internally. The selected relative beats already subtract 30 frames from their measured scene cues. The parent FadeUp controls entrance opacity without adding another time offset. There is no double delay.

The concept's coefLabel key remains absent. CoefSubscriptDiagram returns opacity zero for its undefined cue, preserving the correction that coefficients compare entity counts as well as mole amounts. Actual formulas remain intact as subscripts are de-emphasised. Counting/model-limit copy remains selected. This concept is a source check here; it is not part of the two sampled encoded pilots.

| Selected cue | Actual scene frame | Meaning |
| --- | --- | --- |
| Concept coefficient emphasis | 128 | Relative whole entities |
| Concept molecule groups begin | 234 | Two H2, one O2, two H2O; later groups stagger by 10 frames |
| Concept count labels | 384 | Scale all entity counts together |
| Concept ratio and callout | 536 | Same relationship applies to mole amounts |
| Concept subscript emphasis / label / dim | 684 / 804 / 977 | Composition of each entity, then exclusion from conversion ratio |
| Formula ratio card / wanted coefficient emphasis | 30 / 108 | Relationship first, before supplied base quantity |
| Formula known crates / known total | 298 / 318 | Three 0.100 mol crates, total 0.300 mol base |
| Formula wanted crates / wanted total / completed working | 382 / 412 / 432 | Six 0.100 mol crates, total 0.600 mol acid |
| Acid worked substitution / result line | 552 / 605 | Evaluate before revealing 0.600 mol |
| Quiz water operation / result | 656 / 829 | First compared substance |
| Quiz oxygen operation / result | 925 / 1045 | Second compared substance |

The organised board selects one active stage and includes only summaries from completed stages. Each line is floored at its stage start; quick-check stages are additionally floored at the answer boundary. All selected line cues complete their 16-frame fade before their stage ends. All voice windows fit their scene. The final stage/result/summary cues occur before the outgoing transition with useful remaining reading time; none is stranded beyond the scene end.

Three shorter active-line holds deserve attention during real playback: the Fe:Fe2O3 comparison lasts about 2.13 seconds at full opacity before the reduced ratio appears, the acid:base comparison about 2.33 seconds before the conversion equation, and the water result about 2.67 seconds before oxygen working. In each case the relevant relationship or result persists in the next stage or established trail. These are bounded playback checks, not verified unreadability or timing failures. Final acid result holds about 11.10 seconds at full opacity before transition; final oxygen result about 9.00 seconds. The final summary prompt has 7.00 seconds at full opacity after its source 18-frame reveal and before the outgoing transition.

## Protected response and captions

Quiz responseHold is local frames 596 to 656, exactly 60 frames at 30 fps. Global frames are 7214 to 7274, or 240.4667 to 242.4667 seconds. The playback plan and assembled sidecar agree on prompt, inserted silence and answer windows.

Independently inspected actual mono 48 kHz signed 16-bit PCM in both the scene WAV and full narration WAV: the interval contains 96,000 samples, all zero. Scene WAV SHA-256 is 616ec78bbc3ef2932458dc55632491042a3e407824a25bacd36b6e4e5c5aba25. Full narration WAV SHA-256 is e61a2fe0c5e42160e1210f1334502a3c299d02c96e38cd005c13a22cc39b2db7. This is a measured digital-silence finding, not listening.

No word token or grouped caption overlaps that interval. Full SRT and VTT exactly reproduce all 114 current cues; caption warnings are empty. No U+2014 is present in the selected lesson. Before frame 656, source returns no working panel or established trail. The stable prompt supplies only the given hydrogen amount, equation and assumptions. At frame 656 answer opacity is zero; the first operation fades in afterwards. Visible quiz output is source-verified here, with encoded hold/boundary and external-caption playback still pending.

## Science, entities and precision

The water and iron-oxide equations conserve atoms. Four Fe entities to two Fe2O3 formula units reduce to a 2:1 amount ratio without describing isolated Fe2O3 molecules. The acid/base reaction requires HCl:Ca(OH)2 = 2:1, so 0.300 mol base requires 0.600 mol acid. From 4.00 mol completely reacting H2 with enough oxygen, 4.00 mol H2O forms and 2.00 mol O2 is required. Displayed trailing zeroes preserve the supplied precision; coefficients are exact ratios. Complete-reaction, sufficient-reactant, schematic counting/crate and solution-ion limitations remain in the reviewed speech and copy. No selected arithmetic, unit/entity or reaction-boundary error found.

## Actual encoded pilot samples

Both current release snapshots verify valid with no changed or missing required dependencies. Actual video hashes match render records and snapshots. Both exports are H.264 1920 by 1080, 30 fps, scale 1, CRF 16, with stereo 48 kHz AAC.

| Pilot | Exact video SHA-256 | Actual frames / duration |
| --- | --- | --- |
| diagram-pilot-01 | 71c59dd94525279e7efac4256fca5f58de004914a9b842e66bb38a5e775f4450 | 908 / 30.266667 s |
| worked-pilot-01 | d94e3798e164e7b2dbf08e10b52d5e1bc73c4bac94e5e363c9a6a5a5c5d94f97 | 978 / 32.600000 s |

Diagram pilot samples at local 4, 11, 15, 23.333 and 28.333 seconds show the relationship-first ratio, three known crates, six wanted crates, completed 0.300-to-0.600 working, and model-limit text. Native totals and working are readable, with no sampled layout collision. Small crate labels and secondary diagram labels require landscape player-width inspection. A native frame is not a phone-readability pass.

Worked pilot samples at local 11.667, 15, 19, 21.333 and 30 seconds preserve task, equation and given quantity while changing the active stage. Frame 570 shows substitution but no 0.600 mol result; frame 640 shows that aligned result. The two established facts remain in a compact trail. No sampled native heading/givens/working/trail collision or clipping found. These decoded images establish actual exported layout and sampled result exposure. They do not establish continuous motion quality or human listening.

## Concrete metadata discrepancy and remaining review

The initially inspected mutable voiced production brief described the quiz hold as 'Planned' and 'Not yet measured'. That discrepancy is now resolved: the coordinator corrected both holdPurpose and understandingCheck to describe the measured 60-frame interval. Current brief SHA-256 is 49d27cb8f6aebcd1db66bd6f7e63a365c184dac604146cbcf737987408cbe87a. The earlier evidence hash records the initial observation. Selected source, audio and reveal timings did not change. The brief's voicedPreview and humanListening flags remain pending and must remain so until their evidence exists.

No material timing bug found in this scoped audit. Continuous voiced playback, number/formula pronunciation, conversational delivery, actual-device landscape and 390 px portrait readability, external captions, the concept/subscript scene, quiz hold/reveal and summary playback remain pending. Full export, publication, practical completion and demonstrated learning are outside this review. No preview/listening approval is granted.
