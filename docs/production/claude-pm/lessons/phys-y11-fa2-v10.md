# Year 11 Physics FA2 V10 (Physics 2025, Year 11, Focus Area 2): How do a sound's frequency and amplitude set its pitch, loudness and energy? (design)

Status: Revision 1 (2 Nov). Needs independent student learning review (key `p-y11-fa2-v10`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: two new (microphone on a stand, oscilloscope); v04's loudspeaker and cone and v01's signal generator reused (its two dials are coded chips, as in v09: open decision 2).

Narration 5,853 characters, 16 scenes, about 538 s (9.0 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: tenth video of the Year 11 Physics (2025) Focus Area 2 route and the concept video before the two sound investigations (v11, v12), which share its site lesson. Templates: `phys-y11-fa1-v22.md` (concept format, section list, calculations as task, equation and grouped givens); house conventions, the FA2 colour key and `LongitudinalRow` from `phys-y11-fa2-v01.md` to `phys-y11-fa2-v05.md` (Revision 1). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa2-waves/lesson09.sa.html` (orient with the sing softly, loudly, high and low warm-up; intentions and key terms; card 1 frequency sets the pitch; card 2 amplitude sets the loudness with `we-1`, the oscilloscope traces; activity 1 design the practical; card 3 both affect the energy; independent practice; retrieve). Site lesson 8 (`lesson08.sa.html`, v09's source) read for entry knowledge only (the relay of collisions; sound at about 340 m s⁻¹ in air). Route entry: `phys-y11-fa2-v10` in `../../phys-y11-video-route.json` (proposed). Route start: "Start with Sound, Pitch, Loudness and Energy. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply sound, pitch, loudness and energy? Teach only the listed actions; the next video owns its separate question." Route next: "phys-y11-fa2-v11: How can we test wavelength, pitch and loudness independently?".

**Opening frame (v09's actual handoff, read 2 Nov).** v09's scene 15 ends on the loudspeaker and its air row with v01's signal generator wired to it and two coded dial chips on the generator, "how often (f)" and "how far (A)"; the first dial has crowded the compressions closer (shorter λ), the second has darkened them and grown the cone's swing; chips "pitch?", "loudness?", "energy?" and "Next: How do a sound's frequency and amplitude set its pitch, loudness and energy?". This video opens on that frame. Because v09 already names which dial is frequency and which is amplitude, the hook asks which one we hear as higher and which as louder.

Owner rules applied: 2025 syllabus only; no people, hands, faces or ears drawn (the listener is a grey chip "your ear" at the right edge; the eardrum is named, not drawn); apparatus painted, waves, particles, traces and readouts coded; one reasoning stage at a time; the calculation as task, equation and grouped givens with units; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake; original questions; key-notes hold; Australian spelling; no em dashes; v04, v05 and v09 recalled in a sentence each.

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 2, group "Light and sound"; local ledger IDs with NESA content-system codenames), quoted from the route JSON `syllabusActions`; the route marks both as "preparation-for-investigation" here (v11 and v12 own them):

- P25-FA2-G2-03 `ci6ed20170`: "Conduct a practical investigation, to relate wavelength to frequency, frequency to pitch, and amplitude to loudness"
- P25-FA2-G2-04 `cie7db48b6`: "Conduct a practical investigation to demonstrate how frequency and amplitude relate to the energy of a sound wave"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

**Boundary:** starts from v09's handoff (assumed above); frequency sets pitch, through compressions arriving at the ear as often as the cone vibrates; at the fixed speed of sound in air a higher frequency means a shorter wavelength (λ = v/f, v05); amplitude sets loudness, through more crowded compressions and a bigger pressure swing (v04), for the same note heard from the same place; the two are independent; an oscilloscope trace from a microphone shows the pressure at the microphone against time, its height giving the amplitude and its period the frequency (site `we-1`); both a bigger amplitude and, at the same swing, a higher frequency make the particles move faster, so the wave carries more energy (the condition said). Stops at the three claims, ready to test. Not taught: how to measure a sound's wavelength, variables, data and risks (v11); how much more energy, decibels and the measured energy relations (v12); timbre, harmonics and standing waves (v31, v32); the decibel scale; the Doppler effect (v33).

## Decisions

- **Learner question (root decision, 2 Nov; route placeholder replaced).** The route's "How can I explain and apply sound, pitch, loudness and energy?" is a placeholder. Root adopted v09's handoff chip: "How do a sound's frequency and amplitude set its pitch, loudness and energy?". The answer, built in order: a higher frequency sends compressions to the ear more often, heard as a higher pitch (2); at the speed fixed by the air, they are packed closer, so the wavelength is shorter (3); a bigger swing crowds the compressions more, so the pressure swing is bigger, heard as louder (4); the two are independent (5, 6); an oscilloscope shows both, from different features of one trace (7, 8); a bigger swing, or the same swing more often, makes each particle move faster, so it has more kinetic energy to pass on (9). Root enters it in the route.
- **The hook (v09's dials and the site intro, made a prediction).** "Turn one dial, and the note gets higher. Turn the other, and it gets louder. Which dial makes it higher, and which makes it louder?" 3 s prediction with chips "higher: how often (f)?" and "higher: how far (A)?". v09 named the dials but not what we hear; answered in 2 and 4. The site's double bass and piccolo hook is not used (site correction 1).
- **The cause made visible (owner quality bar).** (2) The cone (v04's plate, moved by code) sends compressions along a `LongitudinalRow` towards the "your ear" chip; a watch-point counter at the chip counts arrivals per second while the cone's own counter counts pushes, and both show the same number; the frequency dial turns and both counters climb together. (3) Two rows, stacked, at 250 Hz and 500 Hz, travel at the same speed (their leading compressions stay level), while the 500 Hz row's compressions sit half as far apart, with navy λ brackets. (4) The amplitude dial turns: the cone's swing doubles at the same rate, one marked particle's teal bracket doubles, the compressions darken and the rarefactions empty, and a grey pressure band under the row swings twice as high (v04's density strip and pressure band). (6) A 2 × 2 grid (site figure): low and high pitch across, quiet and loud down, each a short pressure band over the same distance, so spacing and height are seen to vary separately. (7) The microphone plate faces the row; the same pressure band slides off the row into the oscilloscope screen, where it is redrawn against time; the label changes from "pressure along the air" to "pressure at the microphone, against time". (9) A single particle's path is traced on a short line (v02's path trace): out, back, out the other way, back; "4 swings" brackets; then twice the swing at the same rate, and the same swing at twice the rate, both with a speed readout that doubles.
- **Values (site, unchanged where used).** Speed of sound in air 340 m s⁻¹ (v05 and v09, said "about"); 250 Hz gives 1.36 m and 500 Hz gives 0.68 m (v04's loudspeaker); hearing range about 20 Hz to 20 000 Hz (site card 1): 17 m and 1.7 cm. Worked example: site `we-1` exactly (A: 2 cm peaks, one cycle every 4 ms; B: 4 cm peaks, every 2 ms; 250 Hz and 500 Hz).
- **The oscilloscope trace is pressure, not displacement (site correction 2).** Said: "The microphone turns the pressure swings into a changing voltage, and the oscilloscope draws it against time." On screen the trace is grey (FA2 colour key: pressure in grey scale), never teal, and its vertical axis reads "pressure at the microphone". For the same note, a taller trace means a bigger particle swing, so reading the height as "amplitude" is safe in this video.
- **Loudness condition (learner copy, because omitting it teaches a wrong idea).** "Compare loudness for the same note, heard from the same place, because your ears are more sensitive to some notes than others." One sentence in 4; on screen as a grey condition chip under "amplitude sets loudness". Without it, students carry the site's idea that equal loudness means equal amplitude across very different notes.
- **Prediction 2 (3 s, scene 5).** "Hold the note steady and turn up the volume. Does the pitch rise too?" No (6): site misconception 1, made a prediction.
- **Energy (site card 3, with the logged correction applied).** The cause is particle speed, not "more compressions arrive each second" on its own (the logged row for `concept-three`). A particle covers four amplitudes in each cycle, so its average speed is 4 × amplitude × frequency (said as "four amplitudes of travel every cycle"; the formula is in the author notes only). A bigger swing at the same frequency, or the same swing at a higher frequency, makes it faster; faster particles have more kinetic energy (fa1-v27, KE = ½mv², recalled as "more kinetic energy") to pass on. The second claim carries its condition aloud and on screen: "same swing". "How much more?" is left as a chip for v12 (which predicts four times for twice the swing or twice the frequency, and measures it). The site's candle demonstration is not used here (v12 owns the energy evidence, and a naked flame needs its own risk row).
- **Attempts (original, HSC style).** (A1, oscilloscope traces, the split case) Same settings, same microphone position, each square across the screen 1.0 ms: X has one cycle every 2.0 squares and peaks 1.5 squares tall; Y one cycle every 5.0 squares and peaks 3.0 squares tall. X: 500 Hz; Y: 200 Hz. X is higher pitched; Y is louder. Crossed: "X is louder because its peaks are closer together" (spacing read as loudness). The card's traces are drawn to those measurements. (A2, explanation) A 300 Hz note; the volume is turned up so each air particle swings twice as far at the same frequency: pitch and wavelength unchanged; louder; each particle covers twice the distance in the same time, so it moves twice as fast and has more kinetic energy to pass on. Crossed: "the pitch rises because the note is louder" (site misconception 1).
- **Mistake scene:** none separate. "Turning up the volume raises the pitch" (5, 6, feedback 2 crossed; site misconception 1); "a higher note is automatically louder" (6; site misconception 2); "spacing on the trace shows loudness" (feedback 1 crossed); "the oscilloscope shows the air particles' positions" (7); "more compressions per second always means more energy" (9: the condition "same swing").
- **Memory aid:** "How often sets how high. How far sets how loud." (see "Memory aid check").
- **Handoff (route next).** The full lab set-up for v11 assembles: the signal generator with its two dials labelled "frequency" and "amplitude", the loudspeaker, two microphones on a bench rule and the oscilloscope with two traces; three chips "wavelength?", "pitch?", "loudness?", with a dashed "?" across the empty air between the microphones; then "Next: How can we test wavelength, pitch and loudness independently?". This is the frame v11 opens on.
- **Site sources used:** intro (two separate controls); warm-up (soft, loud, high, low: the hook's question); learning intentions; key terms (pitch, loudness, oscilloscope with correction 2, energy with correction 3); misconceptions 1 and 2 (5, 6); card 1 and its figure (2, 3, 6); card 1 check (higher frequency and shorter wavelength: 3); card 2 and `we-1` (4, 7, 8); quick check (true or false: volume and pitch, scene 5); two truths and a lie (C is the lie: 6); card 3 (9, with the logged condition); last check and fill the gaps (8, 9); short-answer Q1 (A2's structure) and Q3 (A2's energy reasoning). Not used: the double bass and piccolo hook and its reflection (site correction 1); activity 1 and Q2 (practical design: v11); the candle demonstration (v12 decides).
- **Site corrections (quoted from site lesson 9, read 2 Nov; for `../site-corrections-phys-y11.md`; the logged `concept-three` row is not repeated):**
  1. Hook: "A double bass and a piccolo can play at exactly the same loudness, yet one rumbles and one shrieks. Same loudness, wildly different sound. Which wave property are they sharing, and which one is different?"; reflection: "The double bass and piccolo can share the same loudness (amplitude) while differing wildly in pitch (frequency)". Equal perceived loudness at very different frequencies does not mean equal amplitude: the ear's sensitivity depends strongly on frequency (and the two instruments also differ in tone quality). Suggest: "A double bass and a piccolo can play equally loudly, yet one rumbles and one shrieks: they differ in frequency. Loudness depends mainly on amplitude, but comparing it fairly needs the same note, because our ears are more sensitive to some frequencies than others."
  2. Key terms, oscilloscope: "An instrument that displays a sound wave as a displacement–time trace, showing its frequency and amplitude." With a microphone, the trace is the microphone's voltage, which follows the pressure variation at the microphone over time, not the particles' displacement. Suggest: "An instrument that displays a microphone's signal against time: for sound, a trace of the pressure variation at the microphone, showing its period (so frequency) and amplitude."
  3. The same condition as the logged `concept-three` row, in other sections: learning intention "That higher frequency and higher amplitude both mean more energy"; key terms "Energy of a sound wave: Increases with both higher frequency and larger amplitude; louder, higher sounds carry more energy."; short-answer Q1 marking "1 mark: higher frequency increases the energy" and model answer "a higher frequency means more compressions are delivered each second, so energy is delivered at a greater rate". Suggest adding "at the same displacement amplitude (the same particle swing)" to each, and in the model answer: "at the same swing, a higher frequency makes each particle move faster, so it carries more kinetic energy".
  - Checked and correct: card 1 (frequency sets pitch; fixed speed, higher frequency, shorter wavelength; 20 Hz to 20 000 Hz); card 1 check (A); card 2 (amplitude sets loudness; independence; taller peaks and closer peaks on the trace); `we-1` (250 Hz, 500 Hz; B louder and higher); quick check (false); two truths and a lie (C); card 3's candle demonstration (qualitative, fine); Q2 and Q3 model answers (Q3 is right as written: "at a fixed frequency").
  - Coverage gap (not an error; for root): activity 1 and Q2 never measure or relate wavelength, although `ci6ed20170` begins "relate wavelength to frequency". v11 adds the measurement.
- **Cause chain taught, in order:** (1) two dials: which is heard as higher, which as louder (1); (2) more pushes per second, more compressions per second at the ear, higher pitch (2); (3) same speed, more per second, so closer together: shorter wavelength (3); (4) a bigger swing, more crowding, a bigger pressure swing, louder, for the same note (4); (5) prediction and independence (5, 6); (6) a microphone trace is pressure against time: height and period (7); (7) reading two traces (8); (8) faster particles carry more energy, from a bigger swing or more swings per second at the same swing (9); (9) memory aid (10).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (sound is a vibration; hertz). From FA2, recalled in a line each: v04 (compressions, rarefactions, amplitude as the largest particle displacement, the pressure band), v05 (v = fλ; one medium fixes the speed), v09 (sound as a relay of collisions; about 340 m s⁻¹ in air), v03 (f = 1/T). From FA1: v27 (kinetic energy grows with speed).
- **Learner-visible vocabulary (plain meaning at first use):** pitch (how high or low a sound seems, scene 2); loudness (how loud a sound seems, scene 4); hertz (vibrations each second, recalled, scene 2); eardrum (the thin skin in your ear that the sound sets vibrating, scene 2, named only); oscilloscope (an instrument that draws a changing voltage against time, scene 7); microphone (turns pressure swings into a changing voltage, scene 7); trace (the line the oscilloscope draws, scene 7); period (time for one cycle, recalled, scene 7); independent (one can change without the other, scene 6).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v04's **`LongitudinalRow`** with its density strip and pressure band, driven by the cone at the stated frequency and swing, with a watch-point arrival counter at the "your ear" chip; **dial turns** on the generator plate (a coded pointer ring on each dial, with a frequency or amplitude readout beside it); **stacked rows** at two frequencies on one clock (leading compressions level); **`ScopeTrace`** (new: a grid on the oscilloscope plate's screen with squares, one or two channels, a trace computed from the same pressure function as the row, a period bracket and a height bracket that measure themselves); **band-to-screen slide** (the pressure band leaves the row and re-forms against time on the screen); **2 × 2 grid** of short pressure bands; v02's **path trace** for one particle with "4 swings" brackets and a speed readout; `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with two drawn traces; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the signal generator and loudspeaker at the left; the particle row across the middle third with the "your ear" chip at the right edge; the oscilloscope (when used) at the lower right; working in the lower left.
- **Colour key:** FA2 key (root decision 3, and the root note of 2 Nov): energy as a hollow gold arrow; particle displacement and the amplitude bracket teal; particle velocity (the speed bars in 9 and feedback 2) blue; wave travel direction amber outline; pressure bands and the oscilloscope trace grey scale; the wavelength bracket navy (v03); the marked particle purple; the period bracket navy dashed; crossed items muted red.
- **No human figures.** No ear, head or hand is drawn; the listener is a grey chip.
- **Author notes (not learner copy):**
  (a) Speeds and wavelengths at 340 m s⁻¹: 250 Hz 1.36 m; 500 Hz 0.68 m; 20 Hz 17 m; 20 000 Hz 0.017 m (1.7 cm). At 20 °C the speed is about 343 m s⁻¹ (v11 uses it); 340 is the series' rounded value.
  (b) Scene 2 animation: the cone at 2 Hz and 4 Hz on screen with the tag "slowed down" (real frequencies are shown on the readout: "250 Hz", "500 Hz"); counters count on-screen pushes and arrivals and agree.
  (c) Scene 4: the swing doubles from 1 unit to 2 units at the same rate; drawn displacement exaggerated (tag "motion exaggerated"; v04 author note e: real swings are about 10⁻⁸ m). The pressure band height is computed as proportional to the swing at fixed frequency (plane wave: pressure amplitude = ρ v × 2πf × swing).
  (d) Ear sensitivity (scene 4 condition): equal-loudness contours (ISO 226) show the ear is far less sensitive at low frequencies; at 60 phon, a 100 Hz tone needs about 15 to 20 dB more sound pressure level than a 1 kHz tone to sound equally loud. Not stated; grounds correction 1.
  (e) Oscilloscope trace (scene 7): a microphone's output voltage is proportional to the sound pressure variation (for a pressure microphone with a flat response over the range used). Height on screen depends on the oscilloscope's vertical setting, hence "same settings".
  (f) Energy (scene 9): a particle in simple harmonic motion travels 4A per cycle, so its average speed is 4Af; its maximum speed is 2πfA. Kinetic energy scales with speed squared, so the energy carried per unit volume scales as f²A² (intensity I = ½ρv(2πf)²A²). The video says "faster, so more kinetic energy" and leaves "four times" to v12. At the same pressure amplitude the energy does not depend on frequency (the logged correction); the video avoids pressure-amplitude claims about energy here (v12 teaches that contrast).
  (g) `we-1`: f = 1 ÷ 0.004 s = 250 Hz; 1 ÷ 0.002 s = 500 Hz; heights 2 cm and 4 cm on the same settings; B's pressure amplitude is twice A's.
  (h) A1: X: T = 2.0 × 1.0 ms = 2.0 ms, f = 500 Hz; Y: T = 5.0 × 1.0 ms = 5.0 ms, f = 200 Hz; heights 1.5 and 3.0 squares. Y is louder: it has twice X's pressure amplitude, and with the ear's lower sensitivity at 200 Hz than 500 Hz the comparison is still clear for a factor of two at these frequencies (about 6 dB more pressure level against a sensitivity difference of a few dB at moderate levels). Acceptable for an HSC-style card; root may change the factor to 3 if the physics check prefers a margin (open decision 4).
  (i) A2: λ = 340 ÷ 300 = 1.13 m, unchanged (not asked as a number). Twice the swing in the same time: twice the average speed; four times the kinetic energy (not required; v12).
  (j) Pronunciations: "two hundred and fifty hertz"; "zero point zero zero four seconds"; "one point three six metres"; "oscilloscope" (o-SIL-o-scope).

Main question: *Turn one dial and a note gets higher; turn the other and it gets louder. How do a sound's frequency and amplitude set its pitch, loudness and energy?*
Entry knowledge (Stage 5 sound as vibration; v03 f = 1/T; v04 compressions and amplitude; v05 v = fλ; v09 sound as a relay at about 340 m s⁻¹; fa1-v27 kinetic energy).
Stops after: frequency sets pitch; the shorter wavelength at a fixed speed; amplitude sets loudness for the same note; independence; reading an oscilloscope trace for both; faster particles carry more energy, with "same swing" for the frequency claim. No measurement of wavelength, no variables or data, no decibels, no "how much more".
Handoff: v11, testing wavelength, pitch and loudness independently.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as in Decisions.

### 1. hook (two dials)
> Last time, we left the loudspeaker with two dials: how often its cone moves, the frequency, and how far it moves, the amplitude. Turn one, and the note gets **higher**. Turn the other, and it gets **louder**. So which dial makes the note higher, and which makes it louder?

Visual: opens on v09's last frame (the loudspeaker and its air row, the signal generator with the dial chips "how often (f)" and "how far (A)", chips "pitch?", "loudness?", "energy?" and the "Next" chip). The "Next" chip becomes the heading: "Pitch, loudness and energy"; the three chips move to a parking strip at the top right (they return as answers in 2, 4 and 9). A grey chip "your ear" sits at the row's right edge. On "higher" and "louder" the two dials glow in turn (no answer shown). On the last sentence chips "higher: how often (f)?" and "higher: how far (A)?" and a 3-second countdown ring.

### 2. frequency sets the pitch
> Turn the first dial, and the speaker's cone vibrates more times each second. Each push sends out a compression, so more compressions leave every **second**. They reach your ear just as often, and your eardrum vibrates at that same frequency. We hear a faster vibration as a higher note. That's **pitch**: how high or low a sound seems, and the frequency sets it. People hear from about twenty hertz, a deep rumble, to about twenty thousand hertz, a thin **whistle**.

Visual: the chip "higher: how often (f)?" fills; the other fades; the parked "pitch?" chip ticks. The "how often" dial turns (pointer ring; readout "250 Hz" to "500 Hz"); the cone (v04's plates, code-moved; tag "slowed down") vibrates faster. On "second" two counters write: "pushes each second" at the cone and "arrivals each second" at the "your ear" chip, counting together (author note b). On "pitch" a label "frequency → pitch" writes under the dial with the gloss "pitch: how high or low a sound seems". On "whistle" a thin horizontal range bar "20 Hz ... 20 000 Hz" with end tags "rumble", "whistle" (tag "human hearing, about").

### 3. a higher note has a shorter wavelength
> Something else changes too. The air sets the speed of sound, about three hundred and forty metres per second, and the dial can't change that. So if more compressions leave each second at the same speed, they must be packed closer **together**. From v equals f lambda, lambda equals v over f. At two hundred and fifty hertz, the wavelength is one point three six metres. At five hundred hertz, it halves, to zero point six eight **metres**. The lowest note you can hear is about seventeen metres long. The highest is under two **centimetres**.

Visual: the row splits into two stacked rows on one clock: top "250 Hz", bottom "500 Hz", leading compressions level as they travel (amber outline arrows, one shared speed chip "v ≈ 340 m s⁻¹, set by the air"). On "together" navy λ brackets on each row, the lower one half as long. Working at lower left, one row per cue: "λ = v ÷ f" (grey "v05"); "250 Hz: λ = 340 ÷ 250 = 1.36 m"; on "metres" "500 Hz: λ = 340 ÷ 500 = 0.68 m". On "centimetres" the range bar returns with wavelengths under its ends: "17 m" and "1.7 cm".

### 4. amplitude sets the loudness
> Now the second dial. It makes the cone swing further each way, but just as often. So each air particle is pushed further from its rest position. The compressions get more crowded, and the rarefactions more spread **out**, so the pressure swings higher and lower. That bigger pressure swing pushes your eardrum harder, and we hear a louder sound. So **loudness** is set by the amplitude. One condition: compare the same note, heard from the same place, because our ears are more sensitive to some notes than **others**.

Visual: back to one row at 250 Hz; the parked "loudness?" chip ticks. The "how far" dial turns (readout "amplitude ×1" to "×2"); the cone's swing doubles at the same rate (tag "motion exaggerated"). A purple marked particle's teal amplitude bracket doubles. On "out" the compressions darken and narrow, the rarefactions empty; the grey pressure band under the row grows to twice its height, labelled "pressure". On "loudness" the label "amplitude → loudness" writes under the "how far" dial (gloss "loudness: how loud a sound seems"). On "others" a grey condition chip under it: "same note, same place".

### 5. prediction: does louder mean higher?
> So here's a test. Hold the note steady, and turn up the volume. Does the pitch rise **too**?

Visual: the frequency readout locks at "250 Hz" with a "held" tag; the "how far" dial glows. On "too" chips "pitch rises?", "pitch stays the same?" and a 3-second countdown ring.

### 6. two independent dials
> No. The cone still vibrates the same number of times each second, so the frequency, the pitch and the wavelength all stay the same. Only the swing gets bigger. It works the other way too. Raise the frequency at the same amplitude, and the note climbs while the swing stays the same. The two dials are **independent**: one can change without the other. A high note can be quiet, and a low note can be **loud**.

Visual: "pitch stays the same?" fills. The amplitude dial turns again: the counters hold, the λ bracket holds its length, only the teal bracket and pressure band grow. Then the frequency dial turns at fixed amplitude: brackets shorten, the pressure band keeps its height. On "independent" the board changes to the 2 × 2 grid (site figure): columns "low pitch", "high pitch", rows "quiet", "loud", each cell a short grey pressure band over the same distance, the high column three times as many cycles, the loud row three times as tall. On "loud" the "high, quiet" and "low, loud" cells ring.

### 7. seeing both on an oscilloscope
> To see both properties at once, we use a microphone and an oscilloscope. The microphone turns the pressure swings into a changing voltage, and the oscilloscope draws it against time. So the trace isn't a picture of the air. It's a graph of the pressure at the microphone, moment by **moment**. Two features matter. The height of the trace shows the amplitude, so the loudness. The time for one cycle is the period, and one over the period is the frequency, so the spacing shows the **pitch**.

Visual: the microphone (`phys-y11-microphone-v1.png`) on its stand stands in the row near the right; the oscilloscope (`phys-y11-oscilloscope-v1.png`) at the lower right, its screen a coded grid. On "against time" the pressure band at the microphone slides down into the screen and redraws as a grey trace against time (`ScopeTrace`); a crossed ghost label "positions of the air particles" (caption "not a picture of the air"); on "moment" the screen's axis labels "pressure at the microphone" and "time". On "height" a teal height bracket from the centre line to a peak, tag "amplitude → loudness"; on "pitch" a navy dashed bracket over one cycle, "period T", with "f = 1 ÷ T" (grey "v03") and the tag "spacing → pitch".

### 8. worked example: two traces
> Let's read two traces, with the same settings and the microphone in the same place. Task: compare the loudness and pitch of sounds A and B. The givens: A's peaks are two centimetres tall, with one cycle every four milliseconds. B's peaks are four centimetres tall, with one cycle every two milliseconds. For A, f is one over zero point zero zero four seconds, two hundred and fifty **hertz**. For B, it's five hundred **hertz**. So B is higher pitched, and with taller peaks, it's louder too. Each answer comes from a different feature of the **trace**.

Visual: clear change to the calculation layout; the oscilloscope screen enlarges with two traces, A above and B below (site `we-1`, drawn to scale). Task strip "Compare the loudness and pitch of A and B". Equation strip "f = 1 ÷ T". Givens group (navy): "A: height 2 cm; T = 4 ms" and "B: height 4 cm; T = 2 ms", with the condition chip "same settings, same microphone position" (grey tag "site worked example"). Rows, one per cue: on the first "hertz" "f_A = 1 ÷ 0.004 s = 250 Hz"; on the second "f_B = 1 ÷ 0.002 s = 500 Hz"; then "B: taller → louder; shorter period → higher pitch", boxed. On "trace" the height brackets pulse on both traces, then the period brackets.

### 9. why both carry more energy
> Both dials also change the energy the wave carries. In each cycle, a particle goes out, back, out the other way and back again: four amplitudes of travel every cycle. Make the swing bigger at the same frequency, and the particle covers more distance in the same time, so it moves **faster**. Keep the swing the same but raise the frequency, and it covers the same path more often, so again it moves **faster**. Faster particles have more kinetic energy to pass on to their neighbours, so the wave carries more energy. Notice the condition on the second one: the same **swing**. How much more energy? We'll measure that soon.

Visual: board change: one purple particle on a short horizontal line with its grey home tick; its path traces out and back (v02's path trace; tag "slowed down"), four teal brackets labelled "1, 2, 3, 4 swings per cycle". A speed readout "average speed" with a bar. On the first "faster": a second copy below swings twice as far in the same time; its speed bar doubles (tag "same frequency"). On the second "faster": a third copy swings the same distance twice as often; its bar also doubles (tag "same swing"). The speed bars are blue (FA2: particle velocity blue; displacement brackets stay teal). Hollow gold energy arrows grow beside the two faster copies; the parked "energy?" chip ticks; chip "more kinetic energy to pass on" (grey "fa1-v27"). On "swing" the "same swing" tag rings. On the last sentence a chip "how much more? (v12)".

### 10. memory aid
> Here's a way to keep it straight. How often sets how high. How far sets how loud. How often is the frequency, and it sets the pitch. How far is the amplitude, how far each particle swings, and for the same note, it sets the **loudness**.

Visual: the 2 × 2 grid returns small. The handwritten line writes large: "How often sets how high. How far sets how loud." Under it, smaller: "how often = frequency; how far = amplitude (for the same note)". On "How often" the high-pitch column pulses; on "How far" the loud row pulses; on "loudness" the condition chip "same note, same place" glows. Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. An oscilloscope shows two notes, with the same settings and the microphone in the same place. Each square across the screen is one point oh millisecond. Note X has one cycle every two point oh squares, with peaks one point five squares tall. Note Y has one cycle every five point oh squares, with peaks three point oh squares tall. Find the frequency of each note, and state which is louder and which is higher pitched. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with two small traces drawn to the stated measurements on a squared grid (no brackets, no labels other than "X" and "Y"): "Two notes are displayed on an oscilloscope with the same settings, and the microphone in the same position. Each horizontal square represents 1.0 ms. Note X completes one cycle every 2.0 squares and its peaks are 1.5 squares tall. Note Y completes one cycle every 5.0 squares and its peaks are 3.0 squares tall. (a) Calculate the frequency of each note. (b) State which note is louder and which is higher pitched. (4 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> X's period is two milliseconds, so its frequency is five hundred **hertz**. Y's period is five milliseconds, so two hundred **hertz**. X is higher pitched, but Y's peaks are twice as tall, so Y is **louder**. Saying X is louder because its peaks are closer together mixes up the features. Spacing is pitch. Height is **loudness**.

Visual: card shrinks to the top; "same settings" and "1.0 ms" underlined. Rows: on "hertz" "X: T = 2.0 × 1.0 ms = 2.0 ms; f = 1 ÷ 0.0020 s = 500 Hz"; on the second "hertz" "Y: T = 5.0 ms; f = 1 ÷ 0.0050 s = 200 Hz"; on "louder" boxed "X higher pitched; Y louder (twice the height)", with brackets drawing on the card's traces. On "loudness" a chip "X is louder: its peaks are closer together" fades in and is crossed. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A speaker plays a three hundred hertz note. The volume is turned up, so each air particle swings twice as far, at the same frequency. State what happens to the pitch, the loudness and the wavelength. Then explain, using the motion of the air particles, why the wave now carries more energy. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "A loudspeaker plays a 300 Hz note. The volume is increased so that each air particle swings twice as far from its rest position, at the same frequency. (a) State what happens to the pitch, the loudness and the wavelength of the sound. (b) Explain, in terms of the motion of the air particles, why the wave now carries more energy. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> The frequency hasn't changed, so the pitch and the wavelength stay the same, and the sound gets **louder**. Each particle now covers twice the distance in the same time, so it moves twice as fast, and has more kinetic energy to pass **on**. Saying the pitch rises because it's louder mixes up the dials. Volume only changes the **swing**.

Visual: card shrinks to the top; "same frequency" and "twice as far" underlined. Rows: "(a) pitch: same; wavelength: same (f unchanged); loudness: louder", boxed on "louder"; on "on" "(b) twice the distance in the same time → twice as fast → more kinetic energy passed on", boxed, with a small path trace: two particles, one swinging twice as far in step with the other, speed bars 1 and 2. On "swing" a chip "the pitch rises because the note is louder" fades in and is crossed. Hold about 1 second.

### 15. handoff
> So frequency sets the pitch and the wavelength, amplitude sets the loudness, and both feed the energy. So far, those are claims. Next, we test them in the lab, one dial at a time, including a sound's wavelength, which we can't even **see**.

Visual: the memory line returns small at the top. Board change: the lab set-up assembles (generator with dials labelled "frequency" and "amplitude", the loudspeaker, a second microphone beside the first on a bench rule (v11's `phys-y11-metre-rule-v1.png`, or coded if it is not yet painted), the oscilloscope with two traces). Three chips write: "wavelength?" (a dashed "?" bracket in the air between the microphones), "pitch?", "loudness?". On "see" the chip "Next: How can we test wavelength, pitch and loudness independently?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Frequency sets pitch: more vibrations each second, more compressions reach the ear each second, a higher note. Humans hear about 20 Hz to 20 000 Hz.
2. In air the speed is fixed (about 340 m s⁻¹), so λ = v/f: a higher note has a shorter wavelength.
3. Amplitude sets loudness (compare the same note, from the same place): a bigger swing, more crowded compressions, a bigger pressure swing.
4. Frequency and amplitude are independent: either can change without the other.
5. Oscilloscope trace (from a microphone) = pressure at the microphone against time. Height → amplitude → loudness; period → f = 1/T → pitch.
6. A bigger swing, or the same swing at a higher frequency, makes each particle move faster, so the wave carries more energy.

Memory aid (large, on the notes screen): *How often sets how high. How far sets how loud.*

At the end the notes cross-fade back to scene 15's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why frequency gives pitch: compressions reach the ear as often as the cone pushes (2, shown with matching counters). Why a higher note is shorter: same speed, more per second (3, shown with level leading compressions). Why amplitude gives loudness: a bigger swing crowds the compressions and makes a bigger pressure swing (4, shown with the band). Why they are independent: each dial changes a different feature (6, shown in the grid). Why the trace shows both: height is the pressure swing, spacing is the period (7). Why both carry more energy: faster particles have more kinetic energy (9, shown with path traces and speed bars).
- **Misconceptions addressed:** louder raises pitch (5, 6, feedback 2 crossed); higher is louder (6); trace spacing as loudness (feedback 1 crossed); the trace as a picture of the air (7, crossed); more cycles always means more energy (9, "same swing").
- **One idea at a time:** pitch (2), wavelength (3), loudness (4), independence (5, 6), the trace (7), reading it (8), energy (9).
- **Video makes it easier:** the student watches the arrival counter match the cone (2), two rows travel level with different spacings (3), the band double as the swing doubles (4), the band slide onto the screen as a time trace (7), and a particle's path double in speed two different ways (9).
- **Response opportunity:** two 3 s predictions (1, 5); two unseen HSC-style tasks, 10 seconds each, every condition on the card (same settings and position; same frequency), nothing answer-bearing. One crossed mistake each; feedback about 24 s and 25 s.
- **Avoided double teaching:** v = fλ (v05), compressions and amplitude (v04), sound as a relay (v09), f = 1/T (v03) and kinetic energy (fa1-v27) recalled in a line each.
- **Syllabus coverage (preparation):** `ci6ed20170`: wavelength to frequency (3), frequency to pitch (2), amplitude to loudness (4), independence (6), how the trace shows them (7, 8); `cie7db48b6`: why frequency and amplitude relate to energy (9, A2). The conducted investigations are v11 and v12.
- **Out of scope by design:** measuring wavelength and the investigation (v11); measured energy relations and decibels (v12); harmonics and tone quality (v31, v32).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 4 marks suggested, not an official marking scheme).** "Two notes are displayed on an oscilloscope with the same settings, and the microphone in the same position. Each horizontal square represents 1.0 ms. Note X completes one cycle every 2.0 squares and its peaks are 1.5 squares tall. Note Y completes one cycle every 5.0 squares and its peaks are 3.0 squares tall. (a) Calculate the frequency of each note. (b) State which note is louder and which is higher pitched."
Model answer: (a) X: T = 2.0 × 1.0 ms = 2.0 ms = 0.0020 s, f = 1/T = 500 Hz. Y: T = 5.0 ms = 0.0050 s, f = 200 Hz. (b) X has the higher frequency, so the higher pitch. Y's trace is twice as tall (larger amplitude), so Y is louder. Classic mistake (crossed): "X is louder because its peaks are closer together".

**Attempt 2 (scene 13; original wording, HSC style, 4 marks suggested).** "A loudspeaker plays a 300 Hz note. The volume is increased so that each air particle swings twice as far from its rest position, at the same frequency. (a) State what happens to the pitch, the loudness and the wavelength of the sound. (b) Explain, in terms of the motion of the air particles, why the wave now carries more energy."
Model answer: (a) The frequency is unchanged, so the pitch is unchanged; the speed in air is unchanged, so λ = v/f is unchanged (about 1.1 m); the amplitude is larger, so the sound is louder. (b) Each particle travels four amplitudes in every cycle; with twice the amplitude in the same period, it covers twice the distance in the same time, so it moves twice as fast. Faster particles have more kinetic energy, which they pass on to their neighbours, so the wave carries more energy. Classic mistake (crossed): "the pitch rises because the note is louder".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Speed of sound in air | about 340 m s⁻¹ (v05, v09) | 3, 9, notes |
| Wavelengths | 250 Hz 1.36 m; 500 Hz 0.68 m | 3 |
| Hearing range | 20 Hz to 20 000 Hz; 17 m and 1.7 cm | 2, 3 |
| `we-1` | A 2 cm, 4 ms, 250 Hz; B 4 cm, 2 ms, 500 Hz | 8 |
| A1 | X 2.0 ms, 500 Hz, 1.5 squares; Y 5.0 ms, 200 Hz, 3.0 squares | 11, 12 |
| A2 | 300 Hz; twice the swing; twice the speed; λ about 1.1 m (model answer only) | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 340 ÷ 250 = 1.36; 340 ÷ 500 = 0.68; 340 ÷ 20 = 17.0; 340 ÷ 20 000 = 0.017.
- 1 ÷ 0.004 = 250; 1 ÷ 0.002 = 500.
- A1: 2.0 × 1.0 ms = 2.0 ms, 1 ÷ 0.0020 = 500; 5.0 × 1.0 ms = 5.0 ms, 1 ÷ 0.0050 = 200; 3.0 ÷ 1.5 = 2.
- A2: 340 ÷ 300 = 1.13.
- Average speed 4Af: doubling A or f doubles it; maximum speed 2πfA; for A = 2.2 × 10⁻⁸ m at 500 Hz, 4.4 × 10⁻⁵ m s⁻¹ average, 6.9 × 10⁻⁵ m s⁻¹ maximum (not stated).

## Memory aid check

- **"How often sets how high. How far sets how loud."** Written for this lesson. Meaning, as said in scene 10: how often the particles vibrate (the frequency) sets how high the note sounds (the pitch); how far each particle swings (the amplitude) sets how loud it sounds. Assumptions checked: "how far" means the swing at the listener, for the same note heard from the same place (the condition chip, scene 4); pitch follows frequency for pure tones and, for musical notes, the repeat rate of the whole pattern (beyond Year 11; author note only); it says nothing about energy, which depends on both (scene 9), so it does not compete with the energy idea. Introduced after both links have been shown (2, 4) and the trace read (8).
- **Considered, not used:** "F for frequency, P for pitch" (letters don't match; no cause); "volume is the height, pitch is the spacing" (true for traces, but it names a picture, not the cause).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,853 characters**, 16 scenes. Characters per scene (1 to 16): 264, 454, 530, 506, 88, 401, 484, 541, 612, 233, 452, 314, 322, 326, 236, 75. At 13.3 characters per second the speech is about 440 s; add about 16 s of holds and settling (the counters in 2, the stacked rows in 3, the band growth in 4, the grid in 6, the band-to-screen slide in 7, the path traces in 9, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 98 s of holds): **about 538 s**, inside the 5,500 to 6,800 character band and under the 570 s cap.

## Scene list and build ids

Lesson key `p-y11-fa2-v10` (root decision 2). Suggested explainer folder `src/explainer/lessons/phys-y11-fa2-v10` and build folder `docs/production/claude-pm/lessons/p-y11-fa2-v10` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, frequency-pitch, shorter-wavelength, amplitude-loudness, louder-prediction, independent-dials, oscilloscope, worked-example, energy, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and louder-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v09's last frame continues into scene 1 (camera continue: the same speaker and row); 1 to 2 camera continue; 2 to 3 camera continue (the row splits into two); 3 to 4 camera continue (back to one row); 4 to 5 camera continue; 5 to 6 camera continue, then board change to the grid; 6 to 7 board change (the row and microphone); 7 to 8 clear change to the calculation layout; 8 to 9 board change to the path traces; 9 to 10 camera continue; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: hook and louder-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa2-v10-learning-review.md`, `science_check` = `checks/p-y11-fa2-v10-physics-check.md`.

## Assets

`public/assets/physics/` does not exist yet (checked 2 Nov). Requested earlier (uniform scaling only, never stretched):
- v04's `phys-y11-loudspeaker-v1.png` and `phys-y11-loudspeaker-cone-v1.png`: scenes 1 to 7, 15.
- v01's `phys-y11-signal-generator-v1.png`: scenes 1 to 6, 15. Its v01 brief has one knob; as in v09, the two dials here are coded dial chips with pointer rings on it. See open decision 2.

Need (new plates, Codex):
1. `phys-y11-microphone-v1.png`: scenes 7, 15 (two copies); reused in v11 and v12. Essential.
2. `phys-y11-oscilloscope-v1.png`: scenes 7, 8, 15; reused in v11 and v12. Essential (the source of the traces).

Coded: the particle rows, counters, brackets, pressure bands, the grid, the trace and its grid on the screen, the path traces and speed bars, the dial pointer rings and readouts, the "your ear" chip, `AlignedAlgebra`, `Countdown`, `QuestionCard` with traces, `Chip` with `cross`, `KeyNotes`, `Heading`.

Kit gaps (for the build brief): **`ScopeTrace`** (new, physics; reused in v11 and v12: a squared grid fitted to the oscilloscope plate's screen rectangle from its sidecar, one or two channels, traces computed from the same pressure function as `LongitudinalRow` at the microphone's position, self-measuring period and height brackets, an adjustable horizontal scale "ms per square"); **dial control** (a pointer ring on a plate dial with a live readout); v04's `LongitudinalRow` with an arrival counter and two stacked rows on one clock; v02's path trace with a speed bar.

## Codex asset brief (Year 11 Physics FA2 v10, microphone and oscilloscope)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; design `docs/production/claude-pm/lessons/phys-y11-fa2-v10.md`. Paint after the learning review, physics check and error check pass and the owner gives the go-ahead. Transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to v01's wave driver and signal generator and v04's loudspeaker, at least 8 per cent clear margin, no text, labels, numbers, scale markings, brand names, people, hands, faces, backdrop, bench, glow or ground shadow. Keep the native aspect; never stretch. Each plate gets a JSON sidecar with the named pixel coordinates.

1. **`phys-y11-microphone-v1.png`**: a plain school microphone (a short dark cylindrical body with a round mesh head), held horizontally in a small clamp on a short upright stand with a flat round base, seen exactly side-on with the mesh head facing left; one plain lead socket at the tail. Sidecar: the centre of the mesh head's front face (the sensing point); the base contact line; the lead socket.
2. **`phys-y11-oscilloscope-v1.png`**: a small school bench oscilloscope (or a dual-channel interface with a screen), three-quarter front view acceptable, grey case, a large blank dark rectangular screen with no grid (the code draws the grid and traces), a few plain dials and two plain input sockets below the screen; no symbols. Sidecar: the screen rectangle's four corners; the two input socket centres.

Request to root (not a new plate unless chosen): v01's `phys-y11-signal-generator-v1.png` should have **two** plain dials of equal size side by side (frequency and amplitude; no labels: the code labels them). If v01's plate is already painted with one dial, paint `phys-y11-signal-generator-v2.png` to the same brief with two dials. Sidecar: both dial centres.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the stacked rows in scene 3 share one speed (leading compressions level) and that the 500 Hz brackets are half the 250 Hz brackets; confirm the scene 2 counters agree.
3. Confirm the physics claims: frequency sets pitch; at a fixed speed in air a higher frequency gives a shorter wavelength; amplitude sets loudness, compared for the same note from the same place; frequency and amplitude are independent; a microphone trace shows the pressure at the microphone against time (not particle positions); trace height gives the amplitude at the same settings, and the period gives f = 1/T; a bigger swing at the same frequency, or the same swing at a higher frequency, makes particles move faster and the wave carry more energy; the "same swing" condition is spoken and on screen.
4. Confirm the A1 card's traces are drawn to the stated squares and that X versus Y loudness is unambiguous (author note h).
5. Confirm the memory aid's condition ("for the same note") is on screen and spoken.
6. Confirm both attempt questions are original in wording, carry every condition, and show nothing answer-bearing.
7. Confirm the syllabus quotes match the route JSON exactly and no 2017-syllabus label appears.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script with the build parser rules.
10. Add site corrections 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only), and the coverage-gap note for root.

## YouTube metadata (draft)

Title: Pitch, Loudness and Energy of Sound Waves | Year 11 Physics

(Title length: 59 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa2-waves/lesson09.sa.html

Turn one dial and a note gets higher; turn the other and it gets louder. How do a sound's frequency and amplitude set its pitch, loudness and energy? See why frequency sets the pitch (and why a higher note has a shorter wavelength), why amplitude sets the loudness, why the two are independent, how to read pitch and loudness from an oscilloscope trace, and why a bigger swing or a faster vibration gives the wave more energy. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 2: Waves.
Syllabus content (NSW Physics 11-12, 2025), prepared here and investigated in the next two videos:
"Conduct a practical investigation, to relate wavelength to frequency, frequency to pitch, and amplitude to loudness" (ci6ed20170)
"Conduct a practical investigation to demonstrate how frequency and amplitude relate to the energy of a sound wave" (cie7db48b6)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Builds on: Mechanical waves and sound energy (previous video). Next: Testing wavelength, pitch and loudness.

#Year11Physics #Physics #Waves #Sound #HSCScience

## Open decisions

- **1. Opening frame (resolved).** v10 opens on v09's actual scene 15 frame (read 2 Nov); the hook's first sentence recalls its two dials. If v09's handoff changes, only scene 1 changes.
- **2. Two-dial signal generator (root).** v09 puts coded dial chips on v01's one-dial plate; this video follows v09 (coded dial chips with pointer rings). For v11 and v12, where the generator is seen closer, a two-dial plate is better: amend v01's brief before it is painted, or request `phys-y11-signal-generator-v2.png`.
- **3. Route question (resolved by root, 2 Nov).** "How do a sound's frequency and amplitude set its pitch, loudness and energy?"; root enters it in the route.
- **4. A1 loudness margin (physics check).** Twice the trace height at 200 Hz against 500 Hz is used (author note h). If the physics check wants a wider margin for ear sensitivity, make Y's peaks 4.5 squares (three times) with no narration change other than "three times as tall".
- **5. Site link form.** As v05; the site home is lesson 9 (shared with v11 and v12).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v04, v05 and v09 at Year 11 entry; check that the hook does not repeat v09's dial naming; that the matching counters make "frequency sets pitch" feel caused; that the level leading compressions make the shorter wavelength obvious; that the loudness condition is heard but not distracting; that "the trace is pressure at the microphone" lands without confusing later displacement graphs (v06, v07); that the four-swings path makes "faster, so more energy" concrete; that the cards give nothing away), then the Codex physics check and error check.
- The counters (2), the stacked rows (3), the band growth (4), the band-to-screen slide (7) and the path traces (9) carry the explanation; judge them at playback speed in the voiced preview. The rows, bands and traces must be driven by one pressure function and clock.
