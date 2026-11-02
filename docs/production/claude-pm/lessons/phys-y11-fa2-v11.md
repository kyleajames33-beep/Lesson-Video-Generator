# Year 11 Physics FA2 V11 (Physics 2025, Year 11, Focus Area 2): How can we test wavelength, pitch and loudness independently? The sound relations investigation (design)

Status: Revision 1 (2 Nov). Needs independent student learning review (key `p-y11-fa2-v11`, `docs/production/student-learning-review.md`), a Codex physics check (including the safety facts) and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: one new (metre rule); v10's microphone (two copies) and oscilloscope, v04's loudspeaker and cone and v01's signal generator reused. All data in this video are illustrative and labelled so.

Narration 5,980 characters, 17 scenes, about 550 s (9.2 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: eleventh video of the Year 11 Physics (2025) Focus Area 2 route and the first of its two sound investigations; it conducts the practical that v10 prepared. Templates: `phys-y11-fa1-v24.md` (investigation format, FA0 placement table, risk table showing only the spoken row, illustrative data rules) and `phys-y11-fa1-v22.md` (section list); house conventions and the FA2 colour key from `phys-y11-fa2-v01.md` to `phys-y11-fa2-v10.md` (Revision 1; v10's scene 15 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file (method, illustrative data from a stated model, FA0 proposals). Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa2-waves/lesson09.sa.html`, sections `apply-it-yourself` (activity 1, "Design the Practical", and its two-truths task) and short-answer Q2; the concept cards belong to v10 and the energy card to v12. Route entry: `phys-y11-fa2-v11` in `../../phys-y11-video-route.json` (proposed; coverage "owned-action"). Route start: "Start with Sound relations investigation. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Complete sound relations investigation: identify variables and risks, acquire repeated data, analyse graphs or sources, and evaluate limitations. Do not report predictions as observations." Route next: "phys-y11-fa2-v12: How do frequency and displacement amplitude affect energy transfer under controlled conditions?".

Owner rules applied: as v10 (2025 syllabus only; no people, hands, faces or ears drawn: listeners are grey chips "listener 1, 2, 3" and their rankings are a coded table; microphone B is moved by the code along the rule; apparatus painted at native aspect; traces, graphs, tables and readouts coded; one reasoning stage at a time; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question with its data on screen; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v10, v05 and fa1-v24 recalled in a sentence each). Investigation data are illustrative, labelled on screen and said aloud; the model line is labelled "model prediction" and never shown as a result.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 2, group "Light and sound"; local ledger ID with NESA content-system codename), quoted from the route JSON `syllabusActions`:

- P25-FA2-G2-03 `ci6ed20170`: "Conduct a practical investigation, to relate wavelength to frequency, frequency to pitch, and amplitude to loudness"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Working scientifically points taught in part, just in time (FA0, local ledger IDs with official codenames, quoted from `docs/production/programme/syllabus/phys-new-y11.json`; proposal for root, see the placement section): P25-FA0-G2-02 `ci6c11c587`, P25-FA0-G3-03 `ci752a2a2f`, P25-FA0-G5-01 `ci7f1f6fbd`, P25-FA0-G5-02 `ci7afa7b23`, P25-FA0-G2-04 `cif90164e3`.

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2

**Boundary:** starts from v10's handoff (the set-up with the generator's "frequency" and "amplitude" dials, the loudspeaker, two microphones on a bench rule and the oscilloscope with two traces; chips "wavelength?", "pitch?", "loudness?"); three tests, each changing one setting and checking the properties it is not testing; test 1, wavelength against frequency, by the two-microphone in-step method, three repeats over three wavelengths at five frequencies, λ against 1/f with gradient v (the measured speed compared with the accepted value); test 2, frequency and pitch, the period on the trace and blind listener rankings, with the trace height's unexpected change explained (the speaker's response); test 3, amplitude and loudness at one frequency, with the period and the wavelength checked unchanged; conclusions; limitations and improvements; a three-row risk assessment; two attempts. Not taught: energy (v12, including decibels and the sound level meter); standing waves, resonance tubes and interference (v29 to v32: the in-step method is explained with arrival times only); temperature dependence of the speed beyond "measure the room's temperature"; standard deviation (fa0-v05).

## Decisions

- **Learner question kept (route).** "How can we test wavelength, pitch and loudness independently?" The answer, built in order: change one setting per test, and check the properties you are not testing (2); a second microphone finds the wavelength: its trace is back in step after exactly one wavelength (3); repeats over three wavelengths at five frequencies give reliable values (4); λ against 1/f is straight with gradient v, so λ is inversely proportional to f at a fixed speed (5); with the amplitude dial fixed, a shorter period is heard as a higher pitch by listeners who cannot see the dial (6); at one frequency, a taller trace is heard as louder, with the period and wavelength unchanged (7, 8); the relationships and their independence (9); limits (10) and risks (11).
- **The hook (site activity 1's gap, made a prediction).** "A sound's wavelength is spread through the air and we can't see it. How could two microphones measure it?" 3 s prediction with chips "ruler on the trace?", "move one microphone?", "calculate it from f?". Answered in 3: a ruler on the trace measures time, not distance; calculating from f assumes the speed and tests nothing; moving one microphone works. This also fills the site's coverage gap (activity 1 and Q2 never measure wavelength).
- **The wavelength method (two microphones, in step).** Microphone A is fixed 0.50 m in front of the loudspeaker on the axis; microphone B starts beside it on the bench rule. Both go to the two channels of the oscilloscope. "In step" is glossed as "both traces rise and fall together". As B slides away, each compression reaches it later, so its trace falls behind; when B is exactly one wavelength further, a compression reaches B just as the next one reaches A, and the traces are back in step. B is moved through three in-step points (three wavelengths) to make the reading uncertainty a smaller share. The explanation uses arrival times only (v05: the wave moves one wavelength in one period); no "phase" or interference vocabulary (later videos).
- **Illustrative data (labelled; model stated).** Model for the data: v = 341 m s⁻¹ (slightly below the accepted 343 m s⁻¹ at 20 °C, a plausible small systematic offset); reading scatter ±0.003 m on each 3λ distance. Five frequencies, 1000 to 3000 Hz; three trials each; means 1.023, 0.682, 0.512, 0.409, 0.341 m for three wavelengths. Said aloud in scene 4: "These numbers are illustrative, made up to show the method, not real results." Every table, graph and readout carries the grey tag "illustrative data".
- **Representations.** The table with units in the headings and a 1/f column (4); λ against f (a falling curve) and λ against 1/f (straight through the origin) (5). The graph's gradient is read as v, using fa1-v24's memory aid "Plot it straight, then read the gradient." (recalled, not re-taught). The line through the origin is drawn from the fit; the grey dashed "model prediction" line uses 343 m s⁻¹.
- **Pitch is a perception (test 2).** Pitch is measured as an order, not a number: three listeners who cannot see the dial (the dial is covered; tag "dial hidden") rank four notes from lowest to highest, played in a shuffled order. Every ranking matches the frequency order. The frequency is checked from the trace: f = 1/T matches the dial (4.0, 2.0, 1.0, 0.50 ms at 250, 500, 1000, 2000 Hz). The inconsistency (`ci7afa7b23`): the trace height changes from 26 to 40 to 34 to 22 mV with the amplitude dial untouched, because the loudspeaker (and microphone) respond more strongly at some frequencies; so test 2 says nothing about loudness, which is why test 3 stays at one frequency.
- **Loudness at one frequency (test 3).** 500 Hz; the amplitude dial in four steps: trace amplitude 10, 20, 30, 40 mV; the period stays 2.0 ms; all three listeners hear the same note, getting louder (rankings match). Independence check on the wavelength: one wavelength at 500 Hz measures 0.684 m at the smallest amplitude and 0.686 m at the largest (each ±0.003 m): the same within the uncertainty. Loudness is not given a number here (v12's sound level meter measures energy, not loudness).
- **Prediction 2 (3 s, scene 7).** "At five hundred hertz, turn up the amplitude. What happens to the period, and to the wavelength?" Neither changes (8). Answers site misconception 1 with data.
- **Conclusions (`ci7f1f6fbd`).** Quantitative: at a fixed speed, λ is inversely proportional to f (gradient v). Qualitative: pitch rises with frequency; for the same note, loudness rises with amplitude. Independence: apart from the speaker's own response, each setting changed only its own property.
- **Limitations and improvements.** (1) Echoes from walls and benches mix with the direct sound and blur the in-step points: work in a large room away from hard surfaces, with B moving straight away from the speaker along its axis. (2) Listeners' judgements vary: several listeners, dial hidden, notes compared in pairs. (3) The speed depends on temperature: measure the room's temperature (20 °C here) and compare with the accepted value at that temperature. (4) The speaker's response varies with frequency: compare loudness only at one frequency. The 3λ distance is already the improvement for the reading uncertainty (scene 4).
- **Risk assessment (`cif90164e3`, partial).** Three spoken rows, hazard, harm and control: (1) loud sound for a long time (hearing damage, ringing ears: keep the volume moderate, never put an ear near the speaker, keep runs short); (2) sudden loud bursts when settings change (a startle, pain, hearing damage: turn the amplitude to zero before changing frequency or switching on); (3) leads across the bench (snag, pull equipment off, trip: tape them flat). Teacher notes, not shown: keep levels at the listeners below about 85 dB (A-weighted) and runs to a few minutes; limit tones above about 4 kHz (unpleasant) and remember some students are sensitive to sound; a mains-powered generator must be tested and tagged; no water near the equipment. Only the spoken row is shown; earlier rows collapse to one-word grey chips (fa1-v24).
- **Attempts (original, HSC style).** (A1, in-step data) At 2400 Hz, B starts in step at the 0.120 m mark and the traces come back into step four more times, the last at the 0.700 m mark: 4λ = 0.580 m, λ = 0.145 m, v = 348 m s⁻¹, about 1.5 per cent above 343 m s⁻¹. Crossed: "λ = 0.580 ÷ 5 = 0.116 m" (counting the starting point as a wavelength). (A2, evaluation) The amplitude dial fixed, 500 Hz to 2000 Hz: the note sounds higher and the trace height falls from 40 mV to 22 mV; the student concludes a higher frequency makes a sound quieter. Valid: the pitch result. Not valid: the knob fixed is not the wave's amplitude fixed; the speaker responds differently at different frequencies, so amplitude was not controlled. Crossed: "a higher frequency makes a sound quieter".
- **Mistake scene:** none separate. "A ruler on the trace gives the wavelength" (hook chip; the trace's horizontal axis is time: 3); "louder means higher pitch" (7, 8; site misconception 1); "the generator setting is the wave's amplitude" (6, feedback 2 crossed); counting in-step points instead of gaps (feedback 1 crossed); "predictions reported as results" (all data labelled illustrative; the 343 m s⁻¹ line labelled model prediction).
- **Memory aid:** none new; fa1-v24's "Plot it straight, then read the gradient." is recalled in scene 5, and the feedback 1 rule "Count the gaps, not the points." is a one-line tip (see "Memory aid check").
- **Handoff (route next).** The loudspeaker and microphone A with its trace at 500 Hz; the trace height doubles from 20 to 40 mV; chips "twice the swing: twice the energy?" and "same swing, higher frequency?"; then "Next: How do frequency and displacement amplitude affect energy transfer under controlled conditions?" (route wording; v12 keeps it, see v12). This is the frame v12 opens on.
- **Site sources used:** activity 1 (signal generator, speaker, oscilloscope; independent and dependent variables for each test; two controlled variables; what the trace shows as f and A increase: scenes 2, 6, 8); two truths and a lie (amplitude does not raise pitch; fixed speed, higher f, shorter λ: 5, 8); short-answer Q2 and its model answer (two runs, one setting at a time; the distance from speaker to microphone controlled: 2, 6, 8). The concept cards are v10's; card 3 is v12's.
- **Site corrections:** none new in the sections this video uses (activity 1, two truths, Q2 and its model answer checked and correct). v10 logs corrections 1 to 3 for this lesson and the coverage-gap note (wavelength is never measured); this video fills that gap.
- **Cause chain taught, in order:** (1) the wavelength can't be seen (1); (2) one setting per test, the others checked (2); (3) later arrival makes B's trace fall behind; one wavelength later it is back in step (3); (4) three wavelengths and three repeats make the value reliable (4); (5) λ against 1/f straight: the gradient is the speed (5); (6) shorter period, higher pitch, judged blind; the speaker changed the height (6); (7, 8) amplitude changes loudness and nothing else (7, 8); (9) the relationships (9); (10) limitations and improvements (10); (11) risks (11).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (fair tests, graph gradients). From FA2, recalled in a line each: v10 (frequency sets pitch, amplitude sets loudness, the oscilloscope trace is pressure at the microphone against time), v05 (v = fλ; the wave moves one wavelength in one period), v03 (f = 1/T). From FA1: v10 and v24 (variables, mean, range, percentage error, linearising, "Plot it straight, then read the gradient").
- **Learner-visible vocabulary (plain meaning at first use):** in step (both traces rise and fall together, scene 3); channel (one of the oscilloscope's two inputs, each with its own trace, scene 3); independent, dependent, controlled variable (recalled from fa1-v10, scene 2); inversely proportional (when one doubles, the other halves, scene 5); listener ranking (putting the notes in order, scene 6).
- **Legacy logic ported:** none. Drawing parts only: `DataGraph` and `graphScale` from `src/explainer/physics/course-kit.tsx`; `DataTable` (fa1-v24's lesson-local copy).
- **New explainer motion (coded unless a plate is named):** v10's **`ScopeTrace`** with two channels; v04's **`LongitudinalRow`** (faint, between the speaker and the microphones, so the arrival delay is seen: a compression reaches A, then B); **in-step slider** (microphone B moved along the rule by code; channel B's trace computed from B's distance, so it falls behind and comes back into step at exactly 0.341 m spacing at 1000 Hz; an in-step marker flashes and a counter "in step: 1, 2, 3" ticks; distance readout); **table fill** (row at a time); **graph morph** (λ against f, then λ against 1/f, points re-spacing horizontally); best-fit line through the origin with a gradient readout; **listener ranking table** (three columns of order chips writing in turn; dial covered by a grey "dial hidden" cover); **risk table, one row at a time**; `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with a small rule sketch; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the generator at the lower left; the loudspeaker at the left of a long bench line, microphones A and B on the rule along it; the oscilloscope at the upper right with two traces; tables and graphs in the right half when shown; working under them.
- **Colour key:** FA2 key (energy hollow gold; particle displacement teal; particle velocity blue; wave travel direction amber outline; pressure and traces grey scale, channel A dark grey and channel B mid grey with a dashed edge so they can be told apart); wavelength brackets navy; measured points and bars ink; best-fit line teal; model prediction dashed grey; the "illustrative data" tag grey; crossed items muted red.
- **No human figures.** Listeners are chips; B is moved by the code.
- **Author notes (not learner copy):**
  (a) Geometry: A at 0.50 m from the cone on the axis; B starts beside A (its rule reading defined as 0.000 m at A's position); bench at least 2.0 m. At 1000 Hz, 3λ = 1.023 m, so B ends at 1.52 m from the cone.
  (b) Channel B's trace is channel A's delayed by Δx ÷ v (v = 341 m s⁻¹ in the animation, matching the data); in step when Δx is a whole number of wavelengths. Its height falls slightly with distance (about 1/r for a small source: at 1.52 m it is about a third of A's); the traces are compared by their timing, not height (said nowhere; drawn so).
  (c) Data (illustrative, 3λ distances in m): 1000 Hz 1.026, 1.020, 1.023; 1500 Hz 0.679, 0.685, 0.682; 2000 Hz 0.509, 0.515, 0.512; 2500 Hz 0.406, 0.412, 0.409; 3000 Hz 0.338, 0.344, 0.341. Means 1.023, 0.682, 0.512, 0.409, 0.341; ranges all 0.006 (half-range 0.003 on 3λ, 0.001 on λ). λ: 0.341, 0.2273, 0.1707, 0.1363, 0.1137 m (shown to three figures: 0.341, 0.227, 0.171, 0.136, 0.114). 1/f: 1.00, 0.667, 0.500, 0.400, 0.333 × 10⁻³ s.
  (d) Fit: λ against 1/f through the origin, gradient 341.0 m s⁻¹; free fit gradient 341.0, intercept 2 × 10⁻⁵ m (negligible). Accepted speed at 20 °C: 331.3 + 0.606 × 20 = 343.4, "about 343 m s⁻¹"; percentage error (343 − 341) ÷ 343 × 100 = 0.58, "about zero point six per cent".
  (e) Test 2: periods 1 ÷ 250 = 4.0 ms, 1 ÷ 500 = 2.0 ms, 1 ÷ 1000 = 1.0 ms, 1 ÷ 2000 = 0.50 ms; heights 26, 40, 34, 22 mV with the amplitude dial at step 4 (illustrative speaker response, peaked near 500 Hz). v12 reuses these four heights.
  (f) Test 3: 500 Hz; heights 10, 20, 30, 40 mV at amplitude steps 1 to 4; λ 0.684 and 0.686 m (one wavelength, ±0.003 m); model 343 ÷ 500 = 0.686 m, 341 ÷ 500 = 0.682 m (consistent within the reading).
  (g) A1: 0.700 − 0.120 = 0.580 m = 4λ; λ = 0.145 m; v = 2400 × 0.145 = 348 m s⁻¹; (348 − 343) ÷ 343 × 100 = 1.46, "about 1.5 per cent". Crossed: 0.580 ÷ 5 = 0.116 m (v = 278 m s⁻¹).
  (h) A2: 40 → 22 mV at 500 → 2000 Hz is the same speaker response as author note e.
  (i) Pronunciations: "one point oh two three metres"; "three hundred and forty-one metres per second"; "zero point six eight four"; "millivolts".

Main question: *A sound's wavelength is invisible, and pitch and loudness are things we hear. How can we test, one setting at a time, how wavelength, pitch and loudness depend on frequency and amplitude, and show they are independent?*
Entry knowledge (Stage 5 fair tests and gradients; v03 f = 1/T; v05 v = fλ; v10 the three claims and the trace; fa1-v10 and v24 investigation skills).
Stops after: three single-setting tests with their checks; the in-step wavelength method with repeats; λ against 1/f and the measured speed; blind pitch rankings and the speaker's response; loudness at one frequency with period and wavelength unchanged; conclusions; limitations with improvements; a three-row risk assessment; two attempts. No energy, no decibels, no standard deviation.
Handoff: v12, the sound energy investigation.

## FA0 Working scientifically placement (proposal for root)

Route root decision: "FA0 (Working scientifically) skills are taught just in time inside or immediately before the investigation videos (fa1-v10, v15, v24, v31 and the FA2/FA3 investigations)". This video adds to that coverage as follows, marking each as **partial** in the ledger.

| FA0 point (ledger ID, codename) | Exact wording (ledger) | Taught in v11 | Left for later |
| --- | --- | --- | --- |
| P25-FA0-G2-02 `ci6c11c587` | "Explain how reliable primary data is obtained" | Scenes 4, 6, 10: repeats; measuring three wavelengths to shrink the reading's share; several blind listeners with shuffled notes | Secondary data reliability (G2-03, later) |
| P25-FA0-G3-03 `ci752a2a2f` | "Use equipment appropriately and systematically to collect and record data, information, evidence and findings" | Scene 3: a dual-channel oscilloscope and a moving microphone used systematically (in-step points counted) | Other equipment (later investigations) |
| P25-FA0-G5-01 `ci7f1f6fbd` | "Describe qualitative and quantitative relationships between variables" | Scenes 5, 6, 8, 9: inverse proportion with a gradient; ordered (qualitative) pitch and loudness relations | Non-linear models (v12, v17) |
| P25-FA0-G5-02 `ci7afa7b23` | "Explain patterns and trends , including inconsistencies in data and information" | Scene 6: the trace height changing with the amplitude dial untouched, explained by the speaker's response | Outliers (G5-05, later) |
| P25-FA0-G2-04 `cif90164e3` | "Assess potential hazards and their associated risks to develop a risk assessment" | Scene 11: three hazard, harm, control rows for this apparatus | Likelihood and consequence rating (fa0-v02) |

Applied, not re-taught (FA1 taught them): P25-FA0-G2-01 `ci9ce164ec` (variables per test, scene 2), P25-FA0-G4-03 `ci0fca96de` (table and two graphs, scenes 4, 5), P25-FA0-G5-03 `ci914a5e7e` (mean, range, percentage error, scenes 4, 5), P25-FA0-G5-06 `ci7e38e278` (improvements matched to limitations, scene 10). Recommendation to root: accept the table and record it in the route as v11's partial FA0 coverage.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as in Decisions.

### 1. hook (an invisible wavelength)
> Last time, we made three claims about sound. Now we test them. We can hear pitch and loudness, and the oscilloscope shows frequency and amplitude. But a sound's wavelength is spread through the air, and we can't see it. So how could two microphones measure **it**?

Visual: opens on v10's last frame (the generator with "frequency" and "amplitude" dials, the loudspeaker, two microphones on the bench rule, the oscilloscope with two traces; chips "wavelength?", "pitch?", "loudness?"; the "Next" chip). The "Next" chip becomes the heading: "The sound relations investigation". On "pitch and loudness" those two chips pulse; on "frequency and amplitude" the trace's period and height brackets flash. On "can't see it" the dashed "?" bracket in the air between the microphones pulses. On "it" chips "ruler on the trace?", "move one microphone?", "calculate it from f?" and a 3-second countdown ring.

### 2. the plan: one setting at a time
> Here's the plan: three tests, each changing just one setting. Test one changes the frequency and measures the wavelength. Test two changes the frequency and listens to the pitch. Test three changes the amplitude and listens to the loudness. Everything else stays fixed: the other dial, the microphone positions and the room. And each test also checks the properties it isn't testing, to see whether they stay **put**.

Visual: the hook chips resolve: "ruler on the trace?" crossed (caption "the trace's axis is time, not distance"), "calculate it from f?" crossed (caption "that assumes the speed: it tests nothing"), "move one microphone?" ticked (answered in 3). A plan panel at the right writes one row per sentence: "Test 1: change f → measure λ", "Test 2: change f → listen: pitch", "Test 3: change A → listen: loudness" (grey "independent → dependent", recalled from fa1-v10). On "fixed" a controlled chip "other dial, microphone positions, room". On "put" each row gains a grey "check:" cell ("check: period", "check: height", "check: period and λ").

### 3. finding the wavelength with two microphones
> Test one. Microphone A stays half a metre in front of the speaker. Microphone B starts right beside it, so their traces rise and fall together. That's called in step. Now slide B away. Each compression reaches it a little later, so its trace falls **behind**. When B is exactly one wavelength further away, a compression reaches it just as the next one reaches A, so the traces are back in **step**. At one thousand hertz, we slide B through three in-step points, and measure the distance: three **wavelengths**.

Visual: camera pushes to the bench. Labels: "microphone A (fixed, 0.50 m)", "microphone B (moves)", "channel A", "channel B" on the two traces. A faint `LongitudinalRow` runs from the cone past both microphones (tag "motion exaggerated"). Gloss on "in step": "in step: both traces rise and fall together". On "behind" B slides; channel B's trace drifts right against A's; a compression is followed reaching A, then B (two small flashes). On "step" B reaches 0.341 m: the traces align, an in-step marker flashes, counter "in step: 1", a navy λ bracket from A to B. On "wavelengths" B continues to "in step: 2" and "in step: 3" at 1.023 m; the bracket reads "3λ".

### 4. repeats and the table
> These numbers are illustrative, made up to show the method, not real results. Three trials give one point oh two six, one point oh two oh and one point oh two three metres. The mean is one point oh two three, so one wavelength is zero point three four one metres. Measuring three wavelengths, not one, makes the reading error a smaller share. The table repeats this at five frequencies, from one thousand to three thousand **hertz**.

Visual: a large grey banner "illustrative data: not real results" writes first and then shrinks to a corner tag that stays on every data item to the end of scene 9. Three dots land on a short number line "1.026", "1.020", "1.023" with a bracket "range 0.006"; rows "mean 3λ = 1.023 m", "λ = 1.023 ÷ 3 = 0.341 m" (grey "± 0.001 m: half the range ÷ 3"). On "smaller share" a chip "±0.003 m on 1.023 m, not on 0.341 m". On "hertz" the table fills row by row (author note c): headings "f (Hz)", "1/f (× 10⁻³ s)", "3λ trials (m)", "mean 3λ (m)", "λ (m)".

### 5. the graph: wavelength against one over frequency
> Plotted against frequency, the wavelength falls in a curve. Since lambda equals v times one over f, plot lambda against one over **f**. Plot it straight, then read the gradient. The points line up through the origin, so the wavelength is inversely proportional to the frequency: double one, halve the other. The gradient is the speed of sound, three hundred and forty-one metres per second. At the room's twenty degrees, the accepted value is about three hundred and forty-three, a percentage error of about zero point six per **cent**.

Visual: right half: axes "λ (m)" against "f (Hz)"; the five means plot on a falling curve. On "one over f" the horizontal axis relabels to "1/f (× 10⁻³ s)" and the points re-space (a morph). The memory line from fa1-v24 writes small: "Plot it straight, then read the gradient." The teal best-fit line draws through the origin and the points; gloss "inversely proportional: double one, halve the other". A rise-run triangle; readout "gradient = v = 341 m s⁻¹", boxed. A dashed grey line "model prediction: 343 m s⁻¹ at 20 °C" sits just above; chip "room 20 °C (thermometer)". On "cent" "percentage error = |343 − 341| ÷ 343 × 100 ≈ 0.6%".

### 6. test 2: frequency and pitch
> Test two. Keep the amplitude dial fixed, and step the frequency from two hundred and fifty hertz up to two thousand. The period on the trace shrinks from four milliseconds to half a millisecond, matching the dial. Pitch is something we hear, so three listeners who can't see the dial put the notes in order. Every ranking matches the frequency **order**. But the trace height changed too, with the amplitude dial **untouched**. The speaker vibrates more easily at some frequencies, so this test tells us nothing about loudness.

Visual: board change: the generator with a grey cover "dial hidden" over the frequency readout; the amplitude dial with a "held" tag. Channel A's trace steps through four frequencies (shuffled play order chips "C, A, D, B"); a row per step "250 Hz: T = 4.0 ms", "500 Hz: 2.0 ms", "1000 Hz: 1.0 ms", "2000 Hz: 0.50 ms" with "1 ÷ T ✓" ticks. On "order" a ranking table: three columns "listener 1, 2, 3", each writing "lowest → highest" as the same order of chips; a tick "matches f". On "untouched" the trace heights ring as readouts "26, 40, 34, 22 mV"; a small grey response curve "speaker response (illustrative)" with a peak near 500 Hz; chip "not a loudness test".

### 7. prediction: louder, but the same note?
> So for loudness, we stay at one frequency, five hundred hertz, and turn up the amplitude. What happens to the period, and to the **wavelength**?

Visual: the frequency dial locks at "500 Hz, held"; the amplitude dial glows. On "wavelength" chips "both shrink?", "both stay the same?", "period stays, λ grows?" and a 3-second countdown ring.

### 8. test 3: amplitude and loudness
> Neither changes. As the amplitude dial steps up, the trace grows from ten to forty millivolts, but the period stays at two milliseconds, and the listeners hear the same note, getting louder. With microphone B, one wavelength measures zero point six eight four metres at the smallest amplitude, and zero point six eight six at the largest, the same within the uncertainty. Amplitude changes the loudness, and nothing **else**.

Visual: "both stay the same?" fills. The trace grows in four steps with height readouts "10, 20, 30, 40 mV" and the period bracket fixed at "2.0 ms" (glowing "unchanged"). The ranking table repeats for loudness: "quietest → loudest", all three matching; a chip "same note" from each listener. B slides one wavelength at amplitude step 1, then at step 4: readouts "λ = 0.684 m" and "0.686 m", each "± 0.003 m", with overlapping brackets. On "else" a summary row "A ↑: loudness ↑; T, f, λ unchanged".

### 9. what the tests show
> Put together: at a fixed speed, the wavelength is inversely proportional to the frequency. The pitch rises with the frequency. For the same note, the loudness rises with the amplitude. And apart from the speaker's own response, each setting changed only its own property. That's independence, shown by **data**.

Visual: the plan panel returns with each row's result cell filling: "λ ∝ 1/f (gradient v = 341 m s⁻¹)", "f ↑ → pitch ↑ (ranked)", "A ↑ → loudness ↑ (same f)"; the "check:" cells tick, with test 2's height cell marked "speaker response" in grey. On "data" the three claim chips from v10 ("wavelength?", "pitch?", "loudness?") lose their question marks.

### 10. limitations and improvements
> Every method has limits. Sound reflects off walls and benches, and the echoes blur the in-step points, so work in a large room, away from hard surfaces, and move B straight along the speaker's axis. Listeners vary, so use several, with the dial hidden, comparing notes in pairs. The speed depends on temperature, so measure the room's. And because of the speaker, compare loudness only at one **frequency**.

Visual: on "reflects" grey reflected arcs from a coded wall behind the bench reach B, and channel B's trace wobbles (tag "echo"); then soft panels (coded) replace the wall and the trace clears. A limitations list builds at the right, one row per sentence: "echoes → large room, soft surfaces, B on axis", "listeners vary → several, dial hidden, in pairs", "temperature → measure it", "speaker response → loudness at one frequency".

### 11. risk assessment
> The risk assessment. Loud sound, especially for a long time, can damage **hearing**, so keep the volume moderate, never put an ear near the speaker, and keep each run short. Changing settings can cause a sudden loud **burst**, so turn the amplitude to zero before you change the frequency or switch on. And leads across the bench can **snag** and pull equipment off, so tape them flat.

Visual: the risk table shows **only the row being spoken**, "Hazard / Harm / Control", in short wording; when the next row writes, the previous row collapses to a one-word grey chip ("loud", "burst") above it. On "hearing" row 1: "loud sound for a long time" / "hearing damage, ringing ears" / "moderate volume; no ear near the speaker; short runs", with the loudspeaker pulsing. On "burst" row 2: "sudden loud burst" / "startle, pain, hearing damage" / "amplitude to zero before changing f or switching on", with the amplitude dial turning to zero. On "snag" row 3: "leads across the bench" / "snag, pull equipment off, trip" / "tape leads flat", with coded tape strips on the leads. Footer chip: "follow your school's risk assessment". Hold about 2 seconds; the safety points return in key note 5.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. At two thousand four hundred hertz, microphone B starts in step at the zero point one two oh metre mark. It's slid away until the traces come back into step four more times, the last at the zero point seven oh oh metre mark. Calculate the wavelength, the speed of sound, and its percentage difference from three hundred and forty-three metres per second. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with a small sketch (the rule with two marks "0.120 m" and "0.700 m" only; no brackets, no in-step ticks): "A loudspeaker emits a 2400 Hz note. Microphone B is in step with microphone A when B is at the 0.120 m mark. B is moved away along the rule until the two traces come back into step four more times; the fourth time is at the 0.700 m mark. (a) Calculate the wavelength of the sound. (b) Calculate the speed of sound, and its percentage difference from 343 m s⁻¹. (4 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> B moved zero point five eight oh metres, and that's four wavelengths, so lambda is zero point one four five **metres**. Then v equals f lambda: about three hundred and forty-eight metres per second, about one point five per cent **above**. Dividing by five counts the starting point as a wavelength. Count the gaps, not the **points**.

Visual: card shrinks to the top; "four more times" underlined. Rows: "0.700 − 0.120 = 0.580 m = 4λ"; on "metres" "λ = 0.580 ÷ 4 = 0.145 m", boxed; on "above" "v = fλ = 2400 × 0.145 = 348 m s⁻¹; (348 − 343) ÷ 343 × 100 ≈ 1.5%", boxed. On the card's sketch five in-step ticks and four gap brackets draw. On "points" a chip "λ = 0.580 ÷ 5 = 0.116 m" fades in and is crossed. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A student keeps the amplitude dial fixed and raises the frequency from five hundred to two thousand hertz. The note sounds higher, and the trace height falls from forty to twenty-two millivolts. She concludes that a higher frequency makes a sound quieter. Evaluate her conclusion. Pause here to answer.

Visual: `QuestionCard`, worded as printed (a small two-row table "500 Hz: 40 mV; 2000 Hz: 22 mV"): "A student keeps the amplitude setting of a signal generator fixed and increases the frequency from 500 Hz to 2000 Hz. The note sounds higher, and the height of the microphone's trace falls from 40 mV to 22 mV. She concludes that increasing the frequency makes a sound quieter. Evaluate her conclusion. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> Her pitch result is valid: the period shortened and the note rose. But the loudness conclusion isn't. A fixed dial doesn't fix the wave's amplitude, because the speaker responds differently at different **frequencies**. So the amplitude wasn't controlled. To test loudness, change the amplitude at one **frequency**.

Visual: card shrinks to the top; "fixed" and "falls" underlined. Rows: "valid: f ↑ → pitch ↑ (period shorter)"; on "frequencies" "not valid: the dial is fixed, but the wave's amplitude changed (speaker response)", boxed; on the second "frequency" "test loudness: vary A at one f", boxed, with v11's small response curve beside it. A chip "a higher frequency makes a sound quieter" fades in and is crossed. Hold about 1 second.

### 16. handoff
> So pitch follows frequency, loudness follows amplitude, and the wavelength shrinks as the frequency rises. One claim is left: that both carry more energy. Next, we measure how much more, and find out why the frequency result depends on exactly what we keep the **same**.

Visual: the plan panel's three results return small at the top. Board change: the loudspeaker and microphone A at 0.50 m with channel A's trace at 500 Hz; the amplitude dial steps and the trace height doubles from "20 mV" to "40 mV". Chips write: "twice the swing: twice the energy?" and "same swing, higher frequency?". On "same" the chip "Next: How do frequency and displacement amplitude affect energy transfer under controlled conditions?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Test one setting at a time, and check the properties you are not testing (period, trace height, wavelength).
2. Wavelength: two microphones on a dual-channel oscilloscope. Slide B away; the traces are back in step every wavelength. Measure several wavelengths and divide.
3. λ against 1/f is a straight line through the origin with gradient v: λ is inversely proportional to f at a fixed speed.
4. Pitch: a shorter period (higher f) is heard as a higher pitch; use several listeners who can't see the dial.
5. Loudness: at one frequency, a taller trace (bigger amplitude) is heard as louder; the period and wavelength don't change.
6. Limits: echoes, listener judgement, temperature, speaker response. Safety: moderate volume, amplitude to zero before changes, leads taped.

Memory aid (large, on the notes screen): *Plot it straight, then read the gradient.* Second line: *Count the gaps, not the points.*

At the end the notes cross-fade back to scene 16's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why B's trace falls behind and returns: later arrival, then one wavelength later a full period behind (3, shown with a compression reaching A then B). Why three wavelengths: the reading error is a smaller share (4). Why plot 1/f: the model then gives a straight line with gradient v (5). Why listeners can't see the dial: so the ranking measures what they hear (6). Why the trace height changed in test 2: the speaker's response (6). Why loudness stays at one frequency: to keep that response fixed (6, 8, 10). Why each limitation's improvement: each is tied to its cause (10). Why each risk control: each is tied to its harm (11).
- **Misconceptions addressed:** the trace's horizontal axis as distance (2, crossed); louder means higher pitch (7, 8); the dial setting is the wave's amplitude (6, feedback 2 crossed); counting points not gaps (feedback 1 crossed); predictions as results (all data labelled illustrative; the model line labelled).
- **One idea at a time:** the plan (2), the method (3), repeats (4), the graph (5), pitch (6), loudness (7, 8), conclusions (9), limits (10), risks (11).
- **Video makes it easier:** the student watches a compression reach A then B and B's trace drift and snap back into step (3), the curve straighten as the axis changes (5), the rankings write in the same order (6), and the trace grow while its period bracket holds (8).
- **Response opportunity:** two 3 s predictions (1, 7); two unseen HSC-style tasks, 10 seconds each with their data on the card, nothing answer-bearing. One crossed mistake each; feedback about 24 s and 23 s.
- **Avoided double teaching:** the three claims (v10), v = fλ (v05), f = 1/T (v03), variables, mean, range, percentage error and linearising (fa1-v10, v24) recalled in a phrase each.
- **Syllabus coverage:** `ci6ed20170`: conduct (2 to 4, 6, 8, 11), relate wavelength to frequency (3 to 5, A1), frequency to pitch (6, A2) and amplitude to loudness (8). FA0 as the placement table.
- **Out of scope by design:** energy, decibels, the sound level meter (v12); standing waves and interference (v29 to v32); standard deviation (fa0-v05).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 4 marks suggested, not an official marking scheme).** "A loudspeaker emits a 2400 Hz note. Microphone B is in step with microphone A when B is at the 0.120 m mark. B is moved away along the rule until the two traces come back into step four more times; the fourth time is at the 0.700 m mark. (a) Calculate the wavelength of the sound. (b) Calculate the speed of sound, and its percentage difference from 343 m s⁻¹."
Model answer: (a) B moved 0.700 − 0.120 = 0.580 m, which is four wavelengths (four gaps between five in-step positions), so λ = 0.580 ÷ 4 = 0.145 m. (b) v = fλ = 2400 × 0.145 = 348 m s⁻¹; percentage difference = (348 − 343) ÷ 343 × 100 ≈ 1.5%. Classic mistake (crossed): "λ = 0.580 ÷ 5 = 0.116 m".

**Attempt 2 (scene 14; original wording, HSC style, 3 marks suggested).** "A student keeps the amplitude setting of a signal generator fixed and increases the frequency from 500 Hz to 2000 Hz. The note sounds higher, and the height of the microphone's trace falls from 40 mV to 22 mV. She concludes that increasing the frequency makes a sound quieter. Evaluate her conclusion."
Model answer: The pitch observation is valid: the higher frequency (shorter period) is heard as a higher note. The loudness conclusion is not valid: fixing the generator's setting does not fix the sound wave's amplitude, because the loudspeaker (and microphone) respond differently at different frequencies, so the amplitude changed as well as the frequency and was not controlled. To test loudness, vary the amplitude at a single frequency. Classic mistake (crossed): "a higher frequency makes a sound quieter".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Set-up | A at 0.50 m; B from beside A | 3 |
| 1000 Hz trials (3λ) | 1.026, 1.020, 1.023; mean 1.023; range 0.006; λ 0.341 ± 0.001 m | 3, 4 |
| Table (illustrative) | 1000 to 3000 Hz; λ 0.341, 0.227, 0.171, 0.136, 0.114 m | 4, 5 |
| Fit | gradient 341 m s⁻¹; accepted about 343 m s⁻¹ at 20 °C; about 0.6% | 5, 9 |
| Test 2 | 250, 500, 1000, 2000 Hz; T 4.0, 2.0, 1.0, 0.50 ms; heights 26, 40, 34, 22 mV | 6 |
| Test 3 | 500 Hz; 10, 20, 30, 40 mV; T 2.0 ms; λ 0.684 and 0.686 m ± 0.003 | 8 |
| A1 | 0.120 and 0.700 m; 0.580 m = 4λ; λ 0.145 m; v 348 m s⁻¹; about 1.5%; crossed 0.116 m | 12, 13 |
| A2 | 500 and 2000 Hz; 40 and 22 mV | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 3 × 341 ÷ f for f = 1000, 1500, 2000, 2500, 3000: 1.023, 0.682, 0.5115, 0.4092, 0.341 (data means 1.023, 0.682, 0.512, 0.409, 0.341).
- Means and ranges as author note c; ÷ 3: 0.341, 0.2273, 0.1707, 0.1363, 0.1137.
- Least squares λ against 1/f through the origin: 341.03 m s⁻¹; free fit 340.995 m s⁻¹, intercept 2.3 × 10⁻⁵ m.
- 331.3 + 0.606 × 20 = 343.4; (343 − 341) ÷ 343 × 100 = 0.583.
- 1 ÷ 250, 500, 1000, 2000 = 4.0, 2.0, 1.0, 0.50 ms; 343 ÷ 500 = 0.686; 341 ÷ 500 = 0.682.
- A1: 0.700 − 0.120 = 0.580; ÷ 4 = 0.145; × 2400 = 348; (348 − 343) ÷ 343 = 1.46%; 0.580 ÷ 5 = 0.116; × 2400 = 278.

## Safety facts check (self-check, 2 Nov; Codex to confirm)

- **Loud sound.** Prolonged exposure above about 85 dB(A) risks hearing damage (Australian workplace exposure standard: 85 dB(A) averaged over 8 hours). A small school loudspeaker can exceed this close to the cone. Controls: moderate volume, ears kept away from the speaker, short runs, listeners at a normal distance. Learner copy as scene 11.
- **Sudden bursts.** Switching frequency ranges or switching on with the amplitude up can give a loud click or burst. Control: amplitude to zero first. Learner copy as scene 11.
- **High tones and sensitivity (teacher note).** Tones above about 4 kHz are unpleasant; some students are sensitive to sound or have conditions affected by it; the data here stop at 3 kHz. Not in learner copy.
- **Electrical (teacher note).** A mains-powered signal generator must be tested and tagged; the loudspeaker circuit is low voltage. Not in learner copy.
- **Leads.** Leads across the bench can snag and pull equipment off, and trip people. Control: tape flat.
- Codex to confirm against NSW Department of Education science safety guidance (no specific prohibitions expected for this practical).

## Memory aid check

- **"Plot it straight, then read the gradient."** fa1-v24's aid, recalled in scene 5 (not re-taught). Assumptions checked: the model λ = v × (1/f) has the form y = kx, so the gradient is v; it holds because v is fixed in one medium at one temperature (said: "at a fixed speed").
- **"Count the gaps, not the points."** A one-line tip in feedback 1, written for this lesson. Meaning: the number of wavelengths is the number of spaces between in-step positions, not the number of positions. Assumption checked: the first position counts as zero; it applies to any repeated-marker distance (crests on a photograph, fringes later).
- **Considered, not used:** a new aid for pitch and loudness (v10's "How often sets how high. How far sets how loud." stands; repeating it would crowd the notes).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,980 characters**, 17 scenes. Characters per scene (1 to 17): 260, 413, 500, 429, 528, 519, 140, 421, 307, 403, 373, 387, 323, 312, 308, 266, 75. At 13.3 characters per second the speech is about 450 s; add about 18 s of holds and settling (the apparatus push in 3, the slider through three in-step points in 3, the table fill in 4, the graph morph in 5, the rankings in 6 and 8, the echo in 10, the 2-second risk hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 550 s**, inside the 5,500 to 6,800 character band and under the 570 s cap.

## Scene list and build ids

Lesson key `p-y11-fa2-v11` (root decision 2). Suggested explainer folder `src/explainer/lessons/phys-y11-fa2-v11` and build folder `docs/production/claude-pm/lessons/p-y11-fa2-v11` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, plan, in-step-method, repeats-table, wavelength-graph, pitch-test, loudness-prediction, loudness-test, conclusions, limitations, risk, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and loudness-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v10's last frame continues into scene 1 (camera continue: the same set-up); 1 to 2 camera continue (the plan panel joins at the right); 2 to 3 camera push to the bench; 3 to 4 split board (bench left, number line and table right); 4 to 5 camera continue (table to graph); 5 to 6 board change (the generator and trace); 6 to 7 to 8 camera continue; 8 to 9 camera continue (the plan panel returns); 9 to 10 split board; 10 to 11 board clear to the risk table; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: hook and loudness-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa2-v11-learning-review.md`, `science_check` = `checks/p-y11-fa2-v11-physics-check.md`.

## Assets

`public/assets/physics/` does not exist yet (checked 2 Nov). Requested earlier (uniform scaling only, never stretched):
- v10's `phys-y11-microphone-v1.png` (two copies, A and B) and `phys-y11-oscilloscope-v1.png`: scenes 1 to 10, 16.
- v04's `phys-y11-loudspeaker-v1.png` and `phys-y11-loudspeaker-cone-v1.png`: scenes 1 to 11, 16.
- v01's `phys-y11-signal-generator-v1.png` (two dials: v10 open decision 2): scenes 1, 2, 6 to 8, 11.

Need (new plate, Codex):
1. `phys-y11-metre-rule-v1.png`: scenes 1, 3, 4, 8, 10; the A1 sketch. Essential (the distance B moves is the measurement).

Coded: the in-step slider and counter, the traces and their grid, the faint particle row, the brackets, the number line, table, graph, fit and model lines, the listener ranking table and chips, the "dial hidden" cover, the response curve, the echo arcs and soft panels, the risk table and tape strips, `AlignedAlgebra`, `Countdown`, `QuestionCard`, `Chip` with `cross`, `KeyNotes`, `Heading`. The rule's scale (ticks and numerals) is coded over the plain plate.

Kit gaps (for the build brief): **in-step slider** (moves a plate along the rule's sidecar line; computes channel B as channel A delayed by distance ÷ v; flags in-step positions and counts them; distance readout from the rule's scale); v10's `ScopeTrace` with two channels; fa1-v24's `ErrorBarPlot` (axis relabel and re-space morph; fit through the origin); `DataTable`; **ranking table** (columns of order chips); the risk table, one row at a time.

## Codex asset brief (Year 11 Physics FA2 v11, metre rule)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; design `docs/production/claude-pm/lessons/phys-y11-fa2-v11.md`. Paint after the learning review, physics check and error check pass and the owner gives the go-ahead. Transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to v10's microphone and oscilloscope, at least 8 per cent clear margin, no text, labels, numbers, scale markings, brand names, people, hands, faces, backdrop, bench, glow or ground shadow. Keep the native aspect; never stretch.

1. **`phys-y11-metre-rule-v1.png`**: a plain wooden metre rule lying flat on its edge, seen exactly side-on (long and slim, about 30 : 1), pale varnished wood with a thin dark edge line and small brass end caps; **no** graduations or numerals (the code draws the scale). Sidecar: the top edge line's two end points (the 0 and 1.000 m positions at the inner faces of the end caps).

Reused, no new request: the microphone, oscilloscope, loudspeaker and generator.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the in-step slider computes channel B from B's distance and the same v as the data (341 m s⁻¹), and that in-step positions fall at whole wavelengths; confirm the fit readout is computed from the plotted means.
3. Confirm the physics and method claims: the traces are back in step when B is one whole wavelength further (arrival-time reasoning); λ against 1/f is straight with gradient v at a fixed speed; the speed of sound at 20 °C is about 343 m s⁻¹; pitch rises with frequency; at one frequency, loudness rises with amplitude while the period and wavelength stay the same; a fixed generator setting does not fix the wave's amplitude across frequencies.
4. Confirm every data item carries the "illustrative data" tag and is said to be illustrative, and that the 343 m s⁻¹ line is tagged "model prediction" (route stop: predictions not reported as observations).
5. Confirm the safety facts under "Safety facts check" against NSW Department of Education science safety guidance.
6. Confirm both attempt questions are original in wording, carry all their data on the card, and show nothing answer-bearing (the A1 sketch has no in-step ticks).
7. Confirm the syllabus and FA0 quotes match the route JSON and the ledger exactly and no 2017-syllabus label appears.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script with the build parser rules.
10. No new site corrections from this design (v10 logs lesson 9's).

## YouTube metadata (draft)

Title: Sound Investigation: Wavelength, Pitch and Loudness | Year 11 Physics

(Title length: 71 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa2-waves/lesson09.sa.html

How do you measure the wavelength of a sound you can't see? Use two microphones and slide one away until the traces come back in step. See how to test each sound relationship one setting at a time: wavelength against frequency (plot λ against 1/f and the gradient gives the speed of sound), frequency and pitch with blind listeners, and amplitude and loudness at a single frequency, checking each time that the other properties stay the same. Then the limitations, how to fix them, and the risk assessment. The data in this video are illustrative. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 2: Waves.
Syllabus content (NSW Physics 11-12, 2025):
"Conduct a practical investigation, to relate wavelength to frequency, frequency to pitch, and amplitude to loudness" (ci6ed20170)
Working scientifically (in part): "Explain how reliable primary data is obtained" (ci6c11c587); "Use equipment appropriately and systematically to collect and record data, information, evidence and findings" (ci752a2a2f); "Describe qualitative and quantitative relationships between variables" (ci7f1f6fbd); "Explain patterns and trends, including inconsistencies in data and information" (ci7afa7b23); "Assess potential hazards and their associated risks to develop a risk assessment" (cif90164e3)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Builds on: Pitch, loudness and energy (previous video). Next: The sound energy investigation.

#Year11Physics #Physics #Waves #Sound #HSCScience

## Open decisions

- **1. Wavelength method (root).** The two-microphone in-step method is used because it measures distance directly and needs no wave theory beyond v05. The resonance-tube method is not used (standing waves are v31, v32). If a school has no dual-channel oscilloscope, a two-channel data logger with the same display works; no narration change.
- **2. Pitch as ranked data (root).** Pitch is recorded as listener rankings, not numbers, because it is a perception. Root to confirm this meets "relate frequency to pitch" for the ledger (it relates the measured frequency to the heard order).
- **3. Generator plate (root).** As v10 open decision 2: the generator is seen closer here, so a two-dial plate is preferred.
- **4. Route stop wording.** The route's stop is met: variables (2), risks (11), repeated data (4), graphs (5), limitations (10); predictions are never shown as observations.
- **5. Site link form.** As v10; the site home is lesson 9 (shared with v10 and v12).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v10, v05 and fa1-v24 at Year 11 entry; check that "in step" is understood from the arrival picture, not memorised; that the slider's three in-step points make "three wavelengths" concrete; that the 1/f graph's meaning lands with one sentence of recall; that the test 2 height change reads as a lesson about control, not a contradiction; that the listener rankings feel like real data; that "illustrative" is clear; that the risk rows are specific; that the cards give nothing away), then the Codex physics check (with the safety facts) and error check.
- The arrival picture and slider (3), the graph morph (5) and the held period bracket (8) carry the explanation; judge them at playback speed in the voiced preview. Channel B, the in-step counter and the table must all come from the same distance function.
