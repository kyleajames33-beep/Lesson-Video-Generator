# Year 11 Physics FA2 V12 (Physics 2025, Year 11, Focus Area 2): How do frequency and displacement amplitude affect energy transfer under controlled conditions? The sound energy investigation (design)

Status: Revision 1 (2 Nov). Needs independent student learning review (key `p-y11-fa2-v12`, `docs/production/student-learning-review.md`), a Codex physics check (including the safety facts) and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: one new (sound level meter); v10's microphone and oscilloscope, v11's metre rule, v04's loudspeaker and cone and v01's signal generator reused. All data in this video are illustrative and labelled so.

Narration 5,974 characters, 18 scenes, about 549 s (9.2 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: twelfth video of the Year 11 Physics (2025) Focus Area 2 route, the second sound investigation and the last sound video before light. Templates: `phys-y11-fa1-v24.md` (investigation format, FA0 placement table, risk table showing only the spoken row, illustrative data rules) and `phys-y11-fa1-v22.md` (section list); house conventions and the FA2 colour key from `phys-y11-fa2-v01.md` to `phys-y11-fa2-v11.md` (Revision 1; v11's scene 16 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file (method, illustrative data from a stated model, FA0 proposals). Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa2-waves/lesson09.sa.html`, sections `concept-three` (both affect the energy; the candle demonstration; the last check and fill the gaps) and short-answer Q3; the logged correction for `concept-three` in `../site-corrections-phys-y11.md` (fixed displacement amplitude against fixed pressure amplitude) is applied throughout. Route entry: `phys-y11-fa2-v12` in `../../phys-y11-video-route.json` (proposed; coverage "owned-action"). Route start: "Start with Sound energy investigation. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Complete sound energy investigation: identify variables and risks, acquire repeated data, analyse graphs or sources, and evaluate limitations. Do not report predictions as observations." Route next (placeholder wording): "phys-y11-fa2-v13: How can I explain and apply light as an electromagnetic wave?" (the handoff chip uses a proposed causal form, open decision 1).

Owner rules applied: as v11 (2025 syllabus only; no people, hands, faces or ears drawn; apparatus painted at native aspect; traces, graphs, tables and readouts coded; one reasoning stage at a time; calculations as task, equation and grouped givens with units; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question with its data on screen; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v10, v11, fa1-v24 and fa1-v27 recalled in a sentence each). Investigation data are illustrative, labelled on screen and said aloud; the model's predictions are labelled "model prediction" and never shown as results.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 2, group "Light and sound"; local ledger ID with NESA content-system codename), quoted from the route JSON `syllabusActions`:

- P25-FA2-G2-04 `cie7db48b6`: "Conduct a practical investigation to demonstrate how frequency and amplitude relate to the energy of a sound wave"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Working scientifically points taught in part, just in time (FA0, local ledger IDs with official codenames, quoted from `docs/production/programme/syllabus/phys-new-y11.json`; proposal for root, see the placement section): P25-FA0-G6-02 `cibc9c30ac`, P25-FA0-G2-05 `ci1ba1d4e1`, P25-FA0-G5-04 `ci15366d75`, P25-FA0-G5-01 `ci7f1f6fbd`, P25-FA0-G2-04 `cif90164e3`.

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2

**Boundary:** starts from v11's handoff (the loudspeaker and microphone A at 0.50 m, channel A's trace at 500 Hz doubling from 20 to 40 mV; chips "twice the swing: twice the energy?", "same swing, higher frequency?"); the model's predictions from particle speed and kinetic energy (four times for twice the amplitude, and four times for twice the frequency at the same swing); measuring energy per second with a sound level meter in decibels on its flat setting, with three step rules and the conversion 10^(ΔL/10); part 1, amplitude at a fixed frequency, three repeats, energy ratio against amplitude ratio squared; part 2, frequency, first the uncontrolled run, then the same pressure swing (no change in energy) and the same particle swing (energy against frequency ratio squared); conclusions with their conditions; limitations and improvements; a three-row risk assessment; two attempts. Not taught: absolute intensity in W m⁻², the threshold of hearing and the logarithm itself (the conversion is used as a calculator step); the inverse square law (v16, v17: here only "the sound spreads and weakens with distance"); the pressure-velocity formula p = ρvu (author note only); loudness perception in phons; standard deviation (fa0-v05).

## Decisions

- **Learner question kept (route), with plain meanings.** "How do frequency and displacement amplitude affect energy transfer under controlled conditions?" It is v11's handoff chip, so it is kept. "Displacement amplitude" is said as "how far each particle swings" every time it is used; "under controlled conditions" becomes "say what you held the same". The answer, built in order: twice the swing in the same time is twice the speed, so the model predicts four times the energy; the same for twice the frequency at the same swing (2); a sound level meter measures energy per second in decibel steps (3); at a fixed frequency, the energy ratio follows the amplitude ratio squared (4 to 6); a fixed dial does not fix the swing at other frequencies (7); at the same pressure swing, the energy is the same at every frequency (8); at the same particle swing, the energy ratio follows the frequency ratio squared (9); both come from particle speed (10); limits (11) and risks (12).
- **The hook (v11's handoff, made a prediction).** "If the swing doubles, does the energy double?" 3 s prediction with chips "double?", "four times?", "more than four?". Answered by the model in 2 and by the data in 5.
- **The model (`cibc9c30ac`; fa1-v27 recalled).** v10 showed a particle covers four amplitudes each cycle, so twice the swing at the same frequency, or the same swing at twice the frequency, is twice the speed; kinetic energy is ½mv², so twice the speed is four times the energy. Said as the model's prediction, written under a "model prediction" tag, before any data.
- **Measuring energy (`ci1ba1d4e1`).** A sound level meter beside the microphone. Plain meanings: sound level (in decibels, dB) tracks the intensity, "the energy arriving each second on each square metre". Step rules on screen and spoken: +3 dB about ×2, +6 dB about ×4, +10 dB exactly ×10; the calculator step "energy ratio = 10^(change in dB ÷ 10)" shown in grey and used in A1. The meter's flat setting ("Z", glossed "it treats every frequency the same") is a control; an ear-weighted setting ("A") would read low notes as quieter (limitation 3). The microphone's trace gives the pressure swing; the meter gives the energy.
- **Part 1, amplitude (fixed 500 Hz).** IV: amplitude, measured as the trace height (10, 20, 30, 40 mV). DV: sound level. Controlled: frequency, the microphone and meter side by side at 0.50 m on the speaker's axis, the meter's flat setting, the room; background noise checked first (34 dB). Illustrative means 62.0, 68.0, 71.5, 74.0 dB (three readings each, ±0.2 dB); energy ratios 1, 3.98, 8.91, 15.8 against amplitude ratios squared 1, 4, 9, 16; fit through the origin, gradient 0.99. Said aloud in scene 5: "These numbers are illustrative, made up to show the method, not real results." The "Plot it straight" aid (fa1-v24) is used without re-teaching.
- **Part 2, frequency: the condition is the point (site correction, logged).** (i) The uncontrolled run: the amplitude dial fixed, 250 to 2000 Hz: v11's trace heights 26, 40, 34, 22 mV: two things change at once (7). Prediction 2 (3 s): "What should we hold the same: the trace height, or the particles' swing?" (ii) The same pressure swing (trace fixed at 20 mV, 250 to 1000 Hz): 68.0, 67.9, 68.1, 68.0 dB: no change; said cause: at a higher frequency the particles swing less far but move just as fast (8). (iii) The same particle swing: the pressure swing follows particle speed, and the same swing at twice the frequency is twice the speed, so the trace is set in proportion to the frequency (10, 20, 30, 40 mV at 250, 500, 750, 1000 Hz); means 62.0, 68.0, 71.5, 74.0 dB; energy ratio against frequency ratio squared, gradient 0.99 (9). The identical decibel readings in parts 1 and 2(iii) are deliberate and pointed out on screen (a chip "same pressure swings, same energies"): the meter only responds to how fast the particles move.
- **Conclusions (`ci7f1f6fbd`).** At the same frequency, energy ∝ amplitude² (twice the amplitude, four times the energy); at the same particle swing, energy ∝ frequency² (twice the frequency, four times); at the same pressure swing, the energy does not depend on frequency. Common cause: particle speed. Memory aid: "Twice as fast, four times the energy." with "Say what you held the same." under it.
- **Validity (`ci15366d75`, partial).** The uncontrolled run (7) and A2 are judged invalid tests of the frequency effect, with the reason (the swing was not controlled). The fit's gradient near 1 is said to support the model, not prove it (one sentence in 6, fa1-v24's wording).
- **Limitations and improvements.** (1) The swing is never measured directly; it is set through the pressure-speed link, which is a model (the main limitation, said first). (2) Echoes add to the reading: work away from hard surfaces. (3) The meter's weighting: use the flat setting. (4) The sound spreads and weakens with distance: the meter and microphone must share one position (v16 owns the inverse square law).
- **Risk assessment (`cif90164e3`, applied from v11; partial).** Three short spoken rows: loud sound (levels here stay under 75 dB at the meter, about 0.5 m from the speaker; no ear near the speaker; short runs), sudden bursts (amplitude to zero before changing frequency), leads (tape flat). The full rows were taught in v11; this video gives each one sentence. Teacher notes as v11.
- **The candle demonstration (site card 3) not used.** It shows energy transfer qualitatively and mostly responds to air movement at low frequencies; it adds a naked-flame risk row without measuring energy. The meter does the measuring here. Root may add it to the site's teacher notes only.
- **Attempts (original, HSC style).** (A1, data) At 400 Hz the trace amplitude is tripled and the level rises from 60.0 dB to 69.5 dB: ratio 10^0.95 = 8.9, about 9 = 3²: supports energy ∝ amplitude². Crossed: "tripling the amplitude triples the energy". (A2, evaluation) 300 Hz to 600 Hz with the amplitude dial untouched, +3.0 dB, "doubling the frequency doubles the energy": invalid, the particles' swing was not controlled (speaker response); at the same swing, twice the speed, four times the energy, about +6 dB. Crossed: "doubling the frequency doubles the energy".
- **Mistake scene:** none separate. "Twice the amplitude, twice the energy" (1, 2, 5; feedback 1 crossed for the tripled case); "a fixed dial is a fixed amplitude" (7, feedback 2); "a higher frequency always carries more energy" (8: not at the same pressure swing; site correction logged); "doubling frequency doubles the energy" (feedback 2 crossed); "predictions reported as results" (data labelled illustrative; predictions labelled).
- **Handoff (route next; open decision 1).** The air row in front of the loudspeaker thins to nothing (v09's bell-jar idea, recalled in one sentence) and the gold energy arrow along it stops; beside it, across an empty dark band, a coded transverse wave labelled "light" keeps travelling with its own hollow gold arrow; chip "no particles"; then "Next: How can light carry energy across empty space, with no particles to pass it on?". This is the frame v13 opens on.
- **Site sources used:** card 3 (both amplitude and frequency raise the energy; louder delivers more energy: scenes 2, 10, with the logged condition); last check (true or false: either raises the energy; answered with the condition in 10); fill the gaps (trace height and amplitude; more cycles, higher frequency: scene 4's IV); Q3 and its model answer (twice the amplitude, same frequency, more energy; pitch cannot distinguish them: scene 10 and A1). Not used: the candle demonstration (above).
- **Site corrections:** none new beyond the logged `concept-three` row and v10's correction 3 (the same condition in other sections). Checked and correct: Q3 model answer ("only amplitude governs how much energy the wave carries at a fixed frequency"), the last check (true, with the condition), fill the gaps.
- **Cause chain taught, in order:** (1) a doubled trace: how much more energy? (1); (2) twice the swing in the same time is twice the speed; KE goes with speed squared (2); (3) decibel steps measure energy per second (3); (4) a fair amplitude test at one frequency (4); (5) data: six decibels for twice the amplitude (5); (6) energy ratio against amplitude ratio squared is straight (6); (7) a fixed dial does not fix the swing (7); (8) same pressure swing, same particle speed, same energy (8); (9) same swing at higher frequency, faster, so more: frequency squared (9); (10) one cause, two conditions (10); (11) limits (11); (12) risks (12).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (fair tests, gradients, powers of ten). From FA2, recalled in a line each: v10 (four amplitudes per cycle; faster particles carry more energy; the trace is pressure at the microphone), v11 (one setting per test; the speaker's response; amplitude at one frequency). From FA1: v27 (KE = ½mv²), v24 ("Plot it straight, then read the gradient"; support, not proof).
- **Learner-visible vocabulary (plain meaning at first use):** displacement amplitude (how far each particle swings from its rest position, scene 1, recalled); intensity (the energy arriving each second on each square metre, scene 3); sound level meter (an instrument that measures the sound level, scene 3); decibel, dB (the unit of sound level, scene 3); flat setting (the meter treats every frequency the same, scene 3); background noise (the sound level with the speaker off, scene 4); energy ratio (how many times more energy each second than the first reading, scene 5); pressure swing (how far the pressure rises and falls, the trace height, scene 7).
- **Legacy logic ported:** none. Drawing parts only: `DataGraph` and `graphScale` from `src/explainer/physics/course-kit.tsx`; `DataTable` (fa1-v24's lesson-local copy).
- **New explainer motion (coded unless a plate is named):** v10's **`ScopeTrace`** (one channel, height readout in mV); **meter readout** (a coded display on the sound level meter plate, settling over about 0.5 s to each reading, with a "Z" setting tag); **decibel step ladder** (a vertical ladder beside the meter: each 3 dB rung doubles a stack of hollow gold energy tiles, each 10 dB multiplies by ten; used in 3 and 5); **particle pair** (two particles with home ticks and blue velocity bars: twice the swing, same rate; same swing, twice the rate; and, in 8, half the swing at twice the rate with the same velocity bar); **table fill**; `ErrorBarPlot` (fa1-v24: two graphs with fits through the origin and a gradient readout; the second shares the first's axes so the identical points overlay); **risk table, one row at a time**; `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the generator at the lower left; the loudspeaker at the left with the microphone and the meter side by side at 0.50 m on the bench (the rule beneath); the oscilloscope and the meter's enlarged readout at the upper right; tables and graphs in the right half when shown; working under them.
- **Colour key:** FA2 key (energy hollow gold, here also the energy tiles; particle displacement teal; particle velocity blue; pressure and traces grey scale); measured points and bars ink; best-fit line teal; model prediction dashed grey with its tag; the "illustrative data" tag grey; crossed items muted red.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Physics. For a progressive sound wave in air, intensity I = p₀² ÷ (2ρv), and p₀ = ρv × u₀, where u₀ = 2πf s₀ is the particle velocity amplitude and s₀ the displacement amplitude. So I = ½ρv(2πf)²s₀²: at fixed f, I ∝ s₀²; at fixed s₀, I ∝ f²; at fixed p₀ (fixed u₀), I does not depend on f. The video's "the pressure swing tells us how fast the particles move" is p₀ ∝ u₀. Sound level L = 10 log₁₀(I ÷ I₀) for a progressive wave (the meter senses pressure and reports L on that basis).
  (b) Consistency of the illustrative levels: 62.0 dB is I = 1.6 × 10⁻⁶ W m⁻², p₀ = 0.036 Pa; at 250 Hz, s₀ = 5.6 × 10⁻⁸ m. 68.0 dB at 500 Hz and 74.0 dB at 1000 Hz give the same s₀ (5.6 × 10⁻⁸ m) to two figures: part 2(iii) is physically consistent. Trace heights 10 mV per 0.036 Pa (a microphone of about 0.28 V Pa⁻¹ after the interface's gain; not stated).
  (c) Part 1 data (illustrative): 10 mV 61.8, 62.0, 62.2; 20 mV 67.8, 68.0, 68.2; 30 mV 71.3, 71.5, 71.7; 40 mV 73.8, 74.0, 74.2 dB. Means 62.0, 68.0, 71.5, 74.0; ranges 0.4. Energy ratios 10^((L − 62.0) ÷ 10): 1.00, 3.98, 8.91, 15.8 (exact model: +6.02, +9.54, +12.04 dB). Fit through the origin against 1, 4, 9, 16: gradient 0.991.
  (d) Part 2(i): fixed dial, 250, 500, 1000, 2000 Hz: 26, 40, 34, 22 mV (v11's response); levels 70.3, 74.0, 72.6, 68.8 dB (shown only as wandering readings, not analysed).
  (e) Part 2(ii): trace 20 mV at 250, 500, 750, 1000 Hz: 68.0, 67.9, 68.1, 68.0 dB (means; trials within ±0.2).
  (f) Part 2(iii): 10, 20, 30, 40 mV at 250, 500, 750, 1000 Hz: trials 61.9, 62.1, 62.0; 67.9, 68.1, 68.0; 71.4, 71.5, 71.6; 73.9, 74.1, 74.0. Means 62.0, 68.0, 71.5, 74.0; ratios 1.00, 3.98, 8.91, 15.8 against (f ÷ 250)² = 1, 4, 9, 16; gradient 0.991.
  (g) Background 34 dB: 28 dB below the lowest reading, so its contribution is under 0.01 dB (not stated).
  (h) Safety levels: the highest reading is 74 dB at 0.50 m from the speaker; a listener at 2 m hears about 62 dB (inverse square, not stated).
  (i) A1: 69.5 − 60.0 = 9.5 dB; 10^0.95 = 8.91; 3² = 9; ratio 0.99 of the model. A2: 10^0.30 = 2.00; at the same swing, ratio 4, 10 log₁₀ 4 = 6.02 dB, "about six decibels".
  (j) Pronunciations: "decibels" (DESS-i-bels); "sixty-two point oh decibels"; "ten to the power of the change in decibels over ten"; "millivolts".

Main question: *Double how far each particle swings, and does a sound carry double the energy? How do frequency and displacement amplitude change the energy a sound wave carries, when we control what stays the same?*
Entry knowledge (Stage 5 fair tests and powers of ten; v10 particle speed and energy; v11 single-setting tests and the speaker's response; fa1-v27 KE = ½mv²; fa1-v24 linearising).
Stops after: the model's predictions; measuring energy per second in decibel steps; the amplitude test with repeats and its graph; the uncontrolled frequency run; the same pressure swing and the same particle swing, with the second graph; conclusions with conditions; limitations with improvements; a three-row risk assessment; two attempts. No W m⁻², no logarithms beyond the calculator step, no inverse square law.
Handoff: v13, light carrying energy with no medium.

## FA0 Working scientifically placement (proposal for root)

Route root decision: "FA0 (Working scientifically) skills are taught just in time inside or immediately before the investigation videos (fa1-v10, v15, v24, v31 and the FA2/FA3 investigations)". This video adds to that coverage as follows, marking each as **partial** in the ledger.

| FA0 point (ledger ID, codename) | Exact wording (ledger) | Taught in v12 | Left for later |
| --- | --- | --- | --- |
| P25-FA0-G6-02 `cibc9c30ac` | "Use modelling and cause-and-effect relationships, including mathematical examples, to make predictions, explain phenomena, and solve problems" | Scenes 2, 9, 10: a mathematical model (KE ∝ speed²) predicts the squares before the data; the cause (particle speed) explains both results | Other models (later FA2 and FA3) |
| P25-FA0-G2-05 `ci1ba1d4e1` | "Select appropriate materials and technologies to design a scientific investigation" | Scene 3: a sound level meter chosen to measure energy, its flat setting chosen for a frequency test; the microphone for the pressure swing | Other technologies (later investigations) |
| P25-FA0-G5-04 `ci15366d75` | "Assess the validity , reliability, accuracy and precision of data and information" | Scenes 6, 7, A2: the uncontrolled frequency run judged invalid; the fit supports, not proves | Accuracy and precision terms in full (fa0 skill video) |
| P25-FA0-G5-01 `ci7f1f6fbd` | "Describe qualitative and quantitative relationships between variables" | Scenes 6, 9, 10: square relationships, linearised | (continues v11) |
| P25-FA0-G2-04 `cif90164e3` | "Assess potential hazards and their associated risks to develop a risk assessment" | Scene 12: three short rows, applied from v11 | Likelihood and consequence rating (fa0-v02) |

Applied, not re-taught: P25-FA0-G2-01 `ci9ce164ec` (variables and the background check, scene 4), P25-FA0-G4-03 `ci0fca96de` (table, two linearised graphs), P25-FA0-G5-03 `ci914a5e7e` (means and ranges of three readings), P25-FA0-G5-06 `ci7e38e278` (improvements matched to limitations, scene 11). Recommendation to root: accept the table and record it in the route as v12's partial FA0 coverage.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as in Decisions.

### 1. hook (twice the swing, twice the energy?)
> Last time, we turned up the amplitude, and the trace grew to twice the height. Each particle swung twice as far, the note got louder, and the wave carried more energy. But how much more? If the swing doubles, does the energy **double**?

Visual: opens on v11's last frame (the loudspeaker and microphone A at 0.50 m, channel A's trace at 500 Hz at "40 mV" after doubling from "20 mV"; chips "twice the swing: twice the energy?", "same swing, higher frequency?"; the "Next" chip). The "Next" chip becomes the heading: "The sound energy investigation". The first chip moves to centre; gloss "displacement amplitude: how far each particle swings". On "double" chips "double?", "four times?", "more than four?" and a 3-second countdown ring.

### 2. the model's prediction
> Here's what the model says. Each particle swings twice as far in the same time, so it moves twice as fast. Kinetic energy is a half m v squared, so twice the speed means four times the energy. The model predicts the same for frequency: the same swing, twice as often, is also twice as fast, so four times the energy. But that one only holds if the swing stays the **same**. These are predictions. Now we test them.

Visual: the particle pair (author: two particles with home ticks; tag "slowed down"): the top swings 1 unit, the lower 2 units in the same time; blue velocity bars "1" and "2". Row "KE = ½mv²" (grey "fa1-v27"); "2 × speed → 2² = 4 × energy", with four hollow gold tiles against one. Then the lower particle resets to 1 unit swinging twice as often; its blue bar again "2"; four tiles. On "same" a tag "same swing" rings. Both rows sit under a grey tag "model prediction" (never removed in this scene).

### 3. measuring energy: the sound level meter
> To measure energy, we add a sound level meter. It measures the sound level, in decibels, which tracks the intensity: the energy arriving each second on each square metre. Decibels work in steps. Three decibels up is about double the energy each second. Six is about four times. Ten is exactly ten **times**. We set the meter to flat, so it treats every frequency the **same**.

Visual: the sound level meter (`phys-y11-sound-level-meter-v1.png`) stands beside microphone A, both at 0.50 m. Glosses: "intensity: energy arriving each second on each square metre", "dB: decibel, the unit of sound level". On "steps" the decibel ladder draws beside the meter: rung "+3 dB" doubles the tile stack (1 to 2), "+6 dB" to 4, "+10 dB" to 10. Grey row "energy ratio = 10^(change in dB ÷ 10)". On "same" the meter's setting tag "Z (flat)" lights, with a crossed ghost tag "A (ear-weighted)" (caption "reads low notes as quieter").

### 4. part 1: a fair amplitude test
> Part one tests amplitude, at five hundred hertz. The independent variable is the amplitude, read as the trace height. The dependent variable is the sound level. The frequency, the meter's setting, and the positions of the microphone and meter all stay the same. First, we check the background noise with the speaker off: thirty-four decibels, far below our **readings**.

Visual: a variables panel at the right, one row per sentence: "independent: amplitude (trace height, mV)"; "dependent: sound level (dB)"; "controlled: f = 500 Hz; meter on Z; microphone and meter side by side, 0.50 m, on axis" (each item pulsing on the apparatus). On "background" the speaker's cone stops; the meter reads "34 dB"; chip "background: speaker off". On "readings" the chip "far below the readings" sits under it.

### 5. the amplitude data
> These numbers are illustrative, made up to show the method, not real results. At ten millivolts, three readings average sixty-two point oh decibels. At twenty millivolts, sixty-eight point oh. Six decibels up, so about four times the energy, for twice the **amplitude**. At thirty millivolts, seventy-one point five: about nine times. At forty, seventy-four point oh: about sixteen **times**.

Visual: a large grey banner "illustrative data: not real results" writes first and then shrinks to a corner tag that stays on every data item to the end of scene 10. The trace steps 10, 20, 30, 40 mV; at each step the meter's readout settles three times (trials, author note c) and a table row writes: "trace (mV)", "trials (dB)", "mean (dB)", "change (dB)", "energy ratio". On "amplitude" the ladder beside the meter climbs 6 dB and the tile stack goes 1 to 4. The remaining rows write: "+9.5 dB → 8.9", "+12.0 dB → 15.8". The "four times?" chip from the hook fills.

### 6. plot it straight
> To test the model, plot it straight: the energy ratio against the amplitude ratio squared. If energy goes with amplitude squared, the points fall on a line through the origin with a gradient of one. They do. The gradient is zero point nine nine. That supports the model, but doesn't prove it. At one frequency, energy goes with the amplitude **squared**.

Visual: right half: axes "energy ratio" against "(amplitude ratio)²" (0 to 16); the four points plot with small bars (±0.2 dB as ratio bars); the dashed grey "model prediction: gradient 1" line; the teal best-fit line through the origin; readout "gradient = 0.99", boxed. On "doesn't prove it" a chip "the model is proved" is crossed (caption "supports, within uncertainty", fa1-v24). On "squared" a result box "same f: energy ∝ A²".

### 7. part 2: the frequency trap
> Part two tests frequency, and here's the trap. Leave the amplitude dial alone, change the frequency, and the trace height wanders, just as last time, because the speaker responds differently at each frequency. So that test changes two things at once. What should we hold the same: the trace height, or the particles' **swing**?

Visual: board change: the generator with the amplitude dial "held"; the frequency steps 250, 500, 1000, 2000 Hz; the trace heights ring "26, 40, 34, 22 mV" (grey "v11") and the meter wanders "70.3, 74.0, 72.6, 68.8 dB" (no table, no analysis); chip "f and A both changed: not a fair test". On "swing" chips "same trace height (pressure swing)?", "same particle swing?" and a 3-second countdown ring.

### 8. the same pressure swing
> It depends on the question. First, hold the trace height at twenty millivolts, the same pressure swing, from two hundred and fifty to one thousand hertz. The meter reads sixty-eight decibels every time. So at the same pressure swing, the energy doesn't depend on frequency. At the higher frequency, each particle swings less far, but it moves just as **fast**.

Visual: the "same trace height" chip lights; the generator's amplitude dial now turns at each frequency to keep the trace at "20 mV" (the dial readout changes, the trace height holds). The meter: "68.0, 67.9, 68.1, 68.0 dB" in a small table, all within the bars. On "fast" the particle pair returns: at 250 Hz one particle swings 2 units; at 1000 Hz the other swings half a unit, four times as often; their blue velocity bars are the same length (tag "same pressure swing = same particle speed"). Chip "same pressure swing → same energy, any f".

### 9. the same particle swing
> Now hold the swing itself. A microphone can't see the swing, but the pressure swing tells us how fast the particles move. The same swing at twice the frequency is twice as fast, so the trace must be twice as tall. So we set ten millivolts at two hundred and fifty hertz, twenty at five hundred, thirty at seven fifty, and forty at one **thousand**. The meter reads sixty-two, sixty-eight, seventy-one point five and seventy-four. Plotted against the frequency ratio squared, the line is straight, with a gradient of zero point nine **nine**.

Visual: the "same particle swing" chip lights. The particle pair: the same 1 unit swing at 250 and 500 Hz, blue bars "1" and "2"; rule "pressure swing ∝ particle speed" (grey). Table rows write one per cue: "250 Hz: 10 mV", "500 Hz: 20 mV", "750 Hz: 30 mV", on "thousand" "1000 Hz: 40 mV", each with its tag "same swing (set by the model link)"; the meter readings fill: "62.0, 68.0, 71.5, 74.0 dB" (trials as author note f). On "nine" the second graph, axes "energy ratio" against "(frequency ratio)²", on the same scales as scene 6: the points land on the same places as part 1's (overlay ghost of part 1's points; chip "same pressure swings, same energies"); teal fit, "gradient = 0.99", result box "same swing: energy ∝ f²".

### 10. one cause, two conditions
> So for sound in air: at the same frequency, twice the amplitude carries four times the energy. At the same swing, twice the frequency also carries four times the energy. Both come from one cause: the particles move twice as fast. Twice as fast, four times the energy. Just always say what you held the **same**.

Visual: the two result boxes side by side, each with its condition highlighted: "same f: energy ∝ A²", "same swing: energy ∝ f²", and a third small grey box "same pressure swing: energy independent of f". A blue velocity bar doubling feeds both, with four gold tiles. The handwritten line writes large: "Twice as fast, four times the energy." Under it, smaller: "Say what you held the same." On "same" the three condition labels pulse. Hold about 2 seconds.

### 11. limitations and improvements
> The biggest limitation: we never measured the swing. We set it using the link between pressure and particle speed, which is part of the model. Echoes from walls add to the readings, so work away from hard surfaces. An ear-weighted meter setting would read the low notes as quieter, so use flat. And sound weakens as it spreads, so the meter and microphone must share one **spot**.

Visual: a limitations list builds at the right, one row per sentence: "swing not measured → set by the model link (state it)"; "echoes → away from hard surfaces" (grey reflected arcs from a coded wall, then soft panels); "meter weighting → Z (flat)"; on "spot" "spreading → meter and microphone at one position" (expanding grey arcs from the speaker thinning with distance, tag "weaker further away (v16)").

### 12. risk assessment
> The risks are the ones from last time. Loud sound can damage **hearing**, so our levels stay under seventy-five decibels, with no ear near the speaker and short runs. A sudden **burst** can come when settings change, so turn the amplitude to zero first. And leads can **snag**, so tape them flat.

Visual: the risk table shows **only the row being spoken**, "Hazard / Harm / Control", in short wording; earlier rows collapse to one-word grey chips (as v11). On "hearing" row 1: "loud sound" / "hearing damage" / "under 75 dB at the meter; no ear near the speaker; short runs". On "burst" row 2: "sudden burst" / "startle, pain, hearing damage" / "amplitude to zero before changing f". On "snag" row 3: "leads" / "snag, pull equipment off, trip" / "tape flat". Footer chip: "follow your school's risk assessment". Hold about 1 second.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. At four hundred hertz, the trace amplitude is tripled, and the sound level rises from sixty point oh to sixty-nine point five decibels. Calculate how many times the intensity increased, using ten to the power of the change in decibels over ten. Explain whether this supports the energy depending on the amplitude squared. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "A loudspeaker plays a 400 Hz note. The amplitude of the microphone's trace is tripled, and the sound level measured beside the microphone rises from 60.0 dB to 69.5 dB. (a) Calculate the factor by which the intensity increased, using intensity ratio = 10^(change in sound level ÷ 10). (b) Explain whether this result supports the model that the energy of a sound wave is proportional to its amplitude squared. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> The level rose nine point five decibels, and ten to the power of zero point nine five is about eight point nine, so about nine **times**. Three times the amplitude, nine times the energy: three squared, so it supports the **model**. Tripling the amplitude doesn't triple the energy. It's the **square**.

Visual: card shrinks to the top; "tripled" and "same frequency" (400 Hz) underlined. Rows: "change = 69.5 − 60.0 = 9.5 dB"; on "times" "ratio = 10^(9.5 ÷ 10) = 8.9 ≈ 9", boxed; on "model" "3² = 9: supports energy ∝ A² (at the same f)", boxed. On "square" a chip "tripling the amplitude triples the energy" fades in and is crossed. Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A student raises the frequency from three hundred to six hundred hertz without touching the amplitude dial. The sound level rises by three point oh decibels, so she concludes that doubling the frequency doubles the energy. Evaluate her method, and predict the rise in decibels if each particle's swing had stayed the same. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "A student increases the frequency of a signal generator from 300 Hz to 600 Hz without changing its amplitude setting. The sound level measured in front of the loudspeaker rises by 3.0 dB, so she concludes that doubling the frequency of a sound wave doubles its energy. (a) Evaluate her method. (b) Predict the rise in sound level if the displacement amplitude of the air particles had been kept the same. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> Her method isn't valid. A fixed dial doesn't fix the particles' swing, because the speaker responds differently at each frequency, so the swing wasn't **controlled**. At the same swing, twice the frequency is twice the speed, so four times the energy: about six **decibels**. Her data can't show that doubling the frequency doubles the energy. Say what stayed the **same**.

Visual: card shrinks to the top; "without changing its amplitude setting" underlined. Rows: on "controlled" "(a) not valid: the swing was not controlled (speaker response)", boxed; on "decibels" "(b) same swing: 2 × speed → 4 × energy; 10 log 4 ≈ +6 dB", boxed, with the decibel ladder's "+6 dB → × 4" rung glowing. On "same" a chip "doubling the frequency doubles the energy" fades in and is crossed. Hold about 1 second.

### 17. handoff
> So a sound wave's energy is carried by moving particles, and that needs a medium. Take the air away, and the sound stops. Yet light crosses empty space and still carries energy. So how can light carry energy with no particles at **all**?

Visual: the memory line returns small at the top. Board change: the loudspeaker and its air row with the hollow gold energy arrow; the particles thin to nothing (tag "no air", v09's bell jar recalled) and the arrow stops. Beside it, across an empty dark band, a coded transverse wave labelled "light" keeps travelling with its own hollow gold arrow; chip "no particles". On "all" the chip "Next: How can light carry energy across empty space, with no particles to pass it on?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Model: twice the swing in the same time, or the same swing twice as often, means twice the particle speed; KE = ½mv², so four times the energy.
2. A sound level meter (flat setting) measures energy per second in decibels: +3 dB ≈ ×2, +6 dB ≈ ×4, +10 dB = ×10. Ratio = 10^(ΔdB ÷ 10).
3. At the same frequency: energy ∝ amplitude². Twice the amplitude, four times the energy.
4. At the same particle swing (displacement amplitude): energy ∝ frequency². At the same pressure swing, the energy does not change with frequency.
5. A fixed generator setting does not fix the swing at different frequencies: control what stays the same, and say it.
6. Limits: swing set by a model link, echoes, meter weighting, spreading with distance. Safety: moderate levels, amplitude to zero before changes, leads taped.

Memory aid (large, on the notes screen): *Twice as fast, four times the energy.* Second line: *Say what you held the same.*

At the end the notes cross-fade back to scene 17's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why four times, not twice: twice the speed and KE ∝ v² (2, shown with velocity bars and tiles). Why the meter: it measures energy per second (3). Why background and positions are controlled: so only the amplitude changes the reading (4). Why the frequency run was unfair: the speaker changed the swing too (7). Why the same pressure swing gives the same energy: the particles move just as fast (8, shown with equal velocity bars at different swings). Why the trace must double for the same swing at twice the frequency: pressure swing follows particle speed (9). Why each limitation's improvement: each tied to its cause (11). Why each risk control: tied to its harm (12).
- **Misconceptions addressed:** twice the amplitude is twice the energy (1, 2, 5; feedback 1 crossed for tripling); a fixed dial is a fixed amplitude (7, feedback 2); a higher frequency always carries more energy (8; logged site correction); doubling frequency doubles energy (feedback 2 crossed); a good fit proves the model (6, crossed); predictions as results (labelled throughout).
- **One idea at a time:** the model (2), the instrument (3), the fair test (4), the data (5), the graph (6), the trap (7), pressure swing (8), particle swing (9), conclusions (10), limits (11), risks (12).
- **Video makes it easier:** the student watches velocity bars and energy tiles double and quadruple (2), the decibel ladder turn steps into multiples (3, 5), the trace held fixed while the dial moves (8), equal velocity bars at different swings (8), and the second graph's points land exactly on the first's (9).
- **Response opportunity:** two 3 s predictions (1, 7); two unseen HSC-style tasks, 10 seconds each with their data on the card, nothing answer-bearing. One crossed mistake each; feedback about 22 s and 27 s.
- **Avoided double teaching:** four swings per cycle and the trace as pressure (v10), single-setting tests and the speaker's response (v11), KE (fa1-v27), linearising and support-not-proof (fa1-v24), the bell jar (v09) recalled in a phrase each.
- **Syllabus coverage:** `cie7db48b6`: conduct (3 to 5, 8, 9, 12) and demonstrate how amplitude (5, 6, A1) and frequency (7 to 9, A2) relate to the energy, with the conditions (10). FA0 as the placement table.
- **Out of scope by design:** W m⁻² and I₀; the inverse square law (v16, v17); loudness perception in phons; standard deviation (fa0-v05).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A loudspeaker plays a 400 Hz note. The amplitude of the microphone's trace is tripled, and the sound level measured beside the microphone rises from 60.0 dB to 69.5 dB. (a) Calculate the factor by which the intensity increased, using intensity ratio = 10^(change in sound level ÷ 10). (b) Explain whether this result supports the model that the energy of a sound wave is proportional to its amplitude squared."
Model answer: (a) Change = 69.5 − 60.0 = 9.5 dB; ratio = 10^0.95 ≈ 8.9, about 9. (b) At the same frequency, tripling the amplitude should multiply the energy by 3² = 9 if energy ∝ A²; the measured factor of about 8.9 agrees, so the result supports the model (it does not prove it). Classic mistake (crossed): "tripling the amplitude triples the energy".

**Attempt 2 (scene 15; original wording, HSC style, 4 marks suggested).** "A student increases the frequency of a signal generator from 300 Hz to 600 Hz without changing its amplitude setting. The sound level measured in front of the loudspeaker rises by 3.0 dB, so she concludes that doubling the frequency of a sound wave doubles its energy. (a) Evaluate her method. (b) Predict the rise in sound level if the displacement amplitude of the air particles had been kept the same."
Model answer: (a) The method is not valid for this conclusion: keeping the generator's setting fixed does not keep the displacement amplitude fixed, because the loudspeaker responds differently at different frequencies, so two variables changed and the swing was not controlled. (b) At the same displacement amplitude, doubling the frequency doubles the particles' speed, so the energy (intensity) is multiplied by 2² = 4; 10 × log₁₀ 4 ≈ 6 dB, so a rise of about 6 dB. Classic mistake (crossed): "doubling the frequency doubles the energy".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Model | 2 × speed → 4 × energy | 2, 10 |
| Decibel steps | +3 dB ≈ ×2; +6 dB ≈ ×4; +10 dB = ×10 | 3, 5, 16 |
| Set-up | 500 Hz; 0.50 m; background 34 dB; meter on Z | 3, 4 |
| Part 1 | 10, 20, 30, 40 mV; 62.0, 68.0, 71.5, 74.0 dB; ratios 1, 3.98, 8.91, 15.8; gradient 0.99 | 5, 6 |
| Part 2(i) | 26, 40, 34, 22 mV; 70.3, 74.0, 72.6, 68.8 dB | 7 |
| Part 2(ii) | 20 mV; 68.0, 67.9, 68.1, 68.0 dB | 8 |
| Part 2(iii) | 250, 500, 750, 1000 Hz at 10, 20, 30, 40 mV; 62.0, 68.0, 71.5, 74.0 dB; gradient 0.99 | 9 |
| Safety | under 75 dB at the meter | 12 |
| A1 | 9.5 dB; 8.9 ≈ 9; 3² | 13, 14 |
| A2 | +3.0 dB (×2.0); same swing ×4, about +6 dB | 15, 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 20 log₁₀(2, 3, 4) = 6.02, 9.54, 12.04; 62.0 + these = 68.0, 71.5, 74.0.
- 10^0.6 = 3.98; 10^0.95 = 8.91; 10^1.2 = 15.85; 10^0.3 = 2.00; 10 log₁₀ 4 = 6.02.
- Fit through the origin of (1, 4, 9, 16) against (1.00, 3.98, 8.91, 15.85): 0.991 (both parts).
- Part 2(i): 62.0 + 20 log₁₀(2.6, 4.0, 3.4, 2.2) = 70.3, 74.0, 72.6, 68.8.
- Displacement amplitude check (author note b): I = 10⁻¹² × 10^(L ÷ 10); p₀ = √(2Iρv) with ρ = 1.2 kg m⁻³, v = 343 m s⁻¹; s₀ = p₀ ÷ (ρv × 2πf): 62 dB at 250 Hz, 68 dB at 500 Hz, 74 dB at 1000 Hz all give 5.6 × 10⁻⁸ m.
- 34 dB against 62 dB: 10 log₁₀(1 + 10^(−2.8)) = 0.007 dB.

## Safety facts check (self-check, 2 Nov; Codex to confirm)

- **Loud sound.** As v11: prolonged exposure above about 85 dB(A) risks hearing damage; this video's highest reading is 74 dB at 0.50 m. Controls: levels under 75 dB at the meter, no ear near the speaker, short runs. Learner copy as scene 12.
- **Sudden bursts.** As v11: amplitude to zero before changing frequency or switching on.
- **Leads.** As v11: tape flat.
- **Teacher notes.** As v11 (sensitive students, high tones, a tested and tagged mains generator). The site's candle demonstration is not used; if a school adds it, it needs its own naked-flame row (hair tied back, flame away from paper, stable holder).
- Codex to confirm against NSW Department of Education science safety guidance.

## Memory aid check

- **"Twice as fast, four times the energy."** Written for this lesson, with the second line "Say what you held the same." Meaning, as said in scene 10: when a change makes the particles move twice as fast, the wave carries four times the energy, because kinetic energy goes with speed squared. Assumptions checked: same medium (air) and a progressive wave; "twice as fast" covers twice the amplitude at the same frequency and twice the frequency at the same swing, but not the same pressure swing (where the speed does not change: scene 8, and the second line); it compares energy per second at one position. It helps a new case: a student asked about three times the amplitude gets nine times (A1). Introduced after both graphs (6, 9).
- **Considered, not used:** "Square it" (too bare: drops the cause and the condition).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,974 characters**, 18 scenes. Characters per scene (1 to 18): 232, 410, 368, 366, 384, 350, 323, 356, 533, 307, 376, 284, 354, 291, 354, 361, 233, 75. At 13.3 characters per second the speech is about 449 s; add about 18 s of holds and settling (the particle pair in 2, the ladder in 3, the meter settling three times per step in 5, the fit in 6, the held trace in 8, the second graph's overlay in 9, the 2-second memory hold in 10, the 1-second risk hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 549 s**, inside the 5,500 to 6,800 character band and under the 570 s cap.

## Scene list and build ids

Lesson key `p-y11-fa2-v12` (root decision 2). Suggested explainer folder `src/explainer/lessons/phys-y11-fa2-v12` and build folder `docs/production/claude-pm/lessons/p-y11-fa2-v12` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, model-prediction, sound-level-meter, amplitude-test, amplitude-data, amplitude-graph, frequency-trap, same-pressure-swing, same-particle-swing, conclusions, limitations, risk, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and frequency-trap carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v11's last frame continues into scene 1 (camera continue: the same speaker, microphone and trace); 1 to 2 board change to the particle pair; 2 to 3 board change back to the apparatus (the meter joins); 3 to 4 camera continue; 4 to 5 split board (apparatus left, table right); 5 to 6 camera continue (table to graph); 6 to 7 board change; 7 to 8 to 9 camera continue; 9 to 10 camera continue (the result boxes); 10 to 11 split board; 11 to 12 board clear to the risk table; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame.

Holds: hook and frequency-trap (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa2-v12-learning-review.md`, `science_check` = `checks/p-y11-fa2-v12-physics-check.md`.

## Assets

`public/assets/physics/` does not exist yet (checked 2 Nov). Requested earlier (uniform scaling only, never stretched):
- v10's `phys-y11-microphone-v1.png` and `phys-y11-oscilloscope-v1.png`: scenes 1, 3 to 9, 11.
- v11's `phys-y11-metre-rule-v1.png`: scenes 3, 4 (the 0.50 m position).
- v04's `phys-y11-loudspeaker-v1.png` and `phys-y11-loudspeaker-cone-v1.png`: scenes 1, 3 to 9, 11, 17.
- v01's `phys-y11-signal-generator-v1.png` (two dials: v10 open decision 2): scenes 4, 7 to 9, 12.

Need (new plate, Codex):
1. `phys-y11-sound-level-meter-v1.png`: scenes 3 to 9, 11, 12. Essential (the energy measurement).

Coded: the meter's readout and setting tag, the decibel ladder and energy tiles, the particle pair and velocity bars, the trace, tables, both graphs, fits and model lines, the overlay ghost, the reflected and spreading arcs, the risk table and tape strips, the light wave in 17, `AlignedAlgebra`, `Countdown`, `QuestionCard`, `Chip` with `cross`, `KeyNotes`, `Heading`.

Kit gaps (for the build brief): **meter readout** (a display fitted to the meter plate's screen rectangle from its sidecar, settling to each value); **decibel ladder** (rungs at +3, +6, +10 dB driving a tile stack by 10^(ΔL ÷ 10)); **particle pair** (two `LongitudinalRow` particles with set swings and rates and blue velocity bars computed as 2πf × swing); v10's `ScopeTrace`; fa1-v24's `ErrorBarPlot` with a ghost overlay of a previous data set; `DataTable`; the risk table, one row at a time.

## Codex asset brief (Year 11 Physics FA2 v12, sound level meter)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; design `docs/production/claude-pm/lessons/phys-y11-fa2-v12.md`. Paint after the learning review, physics check and error check pass and the owner gives the go-ahead. Transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to v10's microphone and oscilloscope, at least 8 per cent clear margin, no text, labels, numbers, brand names, people, hands, faces, backdrop, bench, glow or ground shadow. Keep the native aspect; never stretch.

1. **`phys-y11-sound-level-meter-v1.png`**: a handheld school sound level meter mounted upright in a small clamp on a short stand with a flat round base, seen side-on with its rounded microphone tip (a small foam ball) facing left, a slim dark grey body with a blank dark rectangular display facing slightly towards the viewer (three-quarter turn of the body acceptable so the display reads as a screen), and two plain buttons with no symbols. Sidecar: the foam tip's centre (the sensing point); the display rectangle's four corners; the base contact line.

Reused, no new request: the microphone, oscilloscope, metre rule, loudspeaker and generator.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the ladder and tiles use 10^(ΔL ÷ 10), the fits are computed from the plotted points, and the scene 8 velocity bars are equal (same pressure swing) while the scene 9 bars double.
3. Confirm the physics claims (author note a): for a progressive wave in air, at the same frequency energy ∝ amplitude²; at the same displacement amplitude energy ∝ frequency²; at the same pressure amplitude energy is independent of frequency; pressure amplitude is proportional to particle velocity amplitude; +3 dB ≈ ×2, +6 dB ≈ ×4, +10 dB = ×10; a flat (Z) weighting treats frequencies equally and A weighting does not; a fixed generator setting does not fix the displacement amplitude across frequencies.
4. Confirm every data item carries the "illustrative data" tag and is said to be illustrative, and that the predictions in scene 2 and the dashed lines are tagged "model prediction" (route stop: predictions not reported as observations); confirm the illustrative levels are physically consistent (author note b).
5. Confirm the safety facts under "Safety facts check" against NSW Department of Education science safety guidance.
6. Confirm the memory aid's condition ("Say what you held the same.") is on screen and spoken, and that scene 8's exception is consistent with it.
7. Confirm both attempt questions are original in wording, carry all their data on the card, and show nothing answer-bearing.
8. Confirm the syllabus and FA0 quotes match the route JSON and the ledger exactly and no 2017-syllabus label appears.
9. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
10. Confirm the narration character count by script with the build parser rules.
11. No new site corrections (the logged `concept-three` row and v10's correction 3 apply).

## YouTube metadata (draft)

Title: Sound Energy Investigation: Frequency, Amplitude and Energy | Year 11 Physics

(Title length: 79 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa2-waves/lesson09.sa.html

Double the amplitude of a sound: does it carry double the energy? The model says four times, because the air particles move twice as fast. Test it with a sound level meter and decibels, plot energy against amplitude squared, then find the trap in testing frequency: a fixed generator setting doesn't keep the particles' swing the same. See why, at the same swing, energy goes with frequency squared, but at the same pressure swing it doesn't change at all. Then the limitations and the risk assessment. The data in this video are illustrative. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 2: Waves.
Syllabus content (NSW Physics 11-12, 2025):
"Conduct a practical investigation to demonstrate how frequency and amplitude relate to the energy of a sound wave" (cie7db48b6)
Working scientifically (in part): "Use modelling and cause-and-effect relationships, including mathematical examples, to make predictions, explain phenomena, and solve problems" (cibc9c30ac); "Select appropriate materials and technologies to design a scientific investigation" (ci1ba1d4e1); "Assess the validity, reliability, accuracy and precision of data and information" (ci15366d75); "Describe qualitative and quantitative relationships between variables" (ci7f1f6fbd); "Assess potential hazards and their associated risks to develop a risk assessment" (cif90164e3)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Builds on: The sound relations investigation (previous video). Next: Light as an electromagnetic wave.

#Year11Physics #Physics #Waves #Sound #HSCScience

## Open decisions

- **1. Handoff chip (root).** The route's next question is a placeholder ("How can I explain and apply light as an electromagnetic wave?"). This design's chip uses a proposed causal form: "How can light carry energy across empty space, with no particles to pass it on?". If v13's designer rewords it, only the separate handoff take and chip change.
- **2. The swing is set through a model link (physics check).** School apparatus cannot measure an air particle's swing; part 2(iii) sets it through "pressure swing follows particle speed". The design states this as the main limitation (scene 11). The physics check confirms the framing is honest and not circular in a way that teaches a wrong idea; the independent content of part 2 is part 2(ii) (same pressure swing, same energy at every frequency), which is a genuine measurement.
- **3. Decibels (root).** The 2025 syllabus does not list decibels. They are introduced as a measuring tool only (three step rules and one calculator step), because energy needs an instrument. Root to confirm, or replace the meter with an "intensity readout in relative units" (no narration change other than scene 3 and A1).
- **4. Learner question (root).** Kept as the route and v11's chip wrote it; "displacement amplitude" is glossed every time. If root prefers a plainer form, a candidate is "Why does doubling a sound's swing, or its frequency, give four times the energy, and what must stay the same?" (v11's handoff chip changes with it).
- **5. Site link form.** As v10; the site home is lesson 9 (shared with v10 and v11).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v10, v11, fa1-v27 and fa1-v24 at Year 11 entry; check that "twice as fast, four times" is understood before any data; that the decibel steps are usable without logarithms; that the frequency trap lands as a control lesson; that the same-pressure-swing result does not confuse the same-swing result (the equal velocity bars must carry it); that the identical decibel readings in parts 1 and 2 read as insight, not repetition; that "illustrative" is clear; that the cards give nothing away), then the Codex physics check (with the safety facts) and error check.
- The particle pair and tiles (2), the ladder (3, 5), the held trace with equal velocity bars (8) and the overlay of the two graphs (9) carry the explanation; judge them at playback speed in the voiced preview. Every readout must come from the same functions as the plotted points.
