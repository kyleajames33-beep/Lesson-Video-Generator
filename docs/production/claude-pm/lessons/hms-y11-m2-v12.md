# HMS Year 11 V12 (The body and mind in motion): aerobic and anaerobic training. What makes a training session aerobic or anaerobic, and how should training differ for a solo runner and a team? (design)

Status: Revision 1 (24 Nov 2026): first design; root rulings applied 24 Nov. Needs independent learning review and science check before voicing. Nothing recorded. Voice: the Google voice. Plates: none new, five reused (see Assets). No official figures.

Narration 6,050 characters (15 scene files, counted by script from lines starting "> " with bold markers removed), about 555 s including holds, two countdowns and the 45 s notes hold.

Scope: the twelfth HMS video of the Year 11 focus area "The body and mind in motion". Course brief `../hms-design-brief.md`. Route entry **hms-y11-m2-v12**. Pre-design pack `../pre-design/hms/hms-y11-m2-v12.md`. Site page `C:/Users/kygs/teaching-app-fix/subjects/health-movement-science/year11/module2/lesson12.sa.html` (read in full, 24 Nov; sha256 `638bd91e42a9a160febf70687ce2699851cbb4d15edd4b7e86800fb0ca8b9e3e`). Previous design `hms-y11-m2-v11.md`.

## Decisions

- **File name and route id.** Route entry **hms-y11-m2-v12**, playlist order 30, site lesson L12 ("Training is a question you ask the body, and the body answers the question you asked"). Opening (route): "the fuel-mix graph from v11: the intensity axis becomes a training dial" (v11's final frame). Start: "Start from the work-to-rest ratio and intensity, not the sport's name, deciding which system a session stresses." Stop: "Stop when students can compare aerobic and anaerobic training on six criteria, name the methods (continuous, anaerobic interval, HIIT and other contemporary methods) grouped by system stressed, explain how individual and group sports differ, and differentiate one session four ways. Detailed method assessment belongs to Year 12 (hms-y12-m4-v03 to v05)." Next handoff: hms-y11-m2-v13, which opens on "the work-to-rest dial from v12 splits into four labelled dials: F, I, T, T". Lesson key **hms11b12**.
- **Syllabus.** Inquiry question "What factors influence movement and performance?". Spine id **hms-y11-fa2-g2-d3** (p22), owned whole: "Compare the difference between aerobic and anaerobic training for individuals and group sports, including differentiated training programs and contemporary methods of training".
- **One main question:** *What makes a training session aerobic or anaerobic, and how should training differ for a solo runner and a team?* (the route's question, kept). Heading: "What makes a session aerobic or anaerobic?" (the v11 Next chip's words).
- **Case.** The site's warm-up (an under-17 football squad runs twelve steady laps every Tuesday, all season; three reasons it is poor, and the one player it nearly suits) is the hook (1), answered in 6 (wrong profile, training to the average, no change all season; the central midfielder). WE b1 (compare aerobic and anaerobic training, 5 marks) is worked in 3 as the compare structure; WE b2 (runner against rugby squad, 6 marks) is left to the site because 6 and 7 teach its content on the football case. Attempts are unseen: attempt 1 classifies a session the body does not show (a netball squad's long intervals, 3 marks); attempt 2 differentiates a new session for a new squad (a hockey squad with a returning player and two fitter seniors, 4 marks).
- **Scope.** Hook (1); what makes a session aerobic or anaerobic, and the work-to-rest dial (2); the comparison on six criteria (3); methods by system (4); contemporary methods judged (5); individual against group (6); four levers of differentiation (7); memory (8); two unseen items (9a to 9d); decision rule and handoff (10); key notes (11).
- **Syllabus coverage check (root condition, 24 Nov).** Compare aerobic and anaerobic training (2, 3, 4) for individuals and group sports (6); differentiated training programs (7); contemporary methods of training (5). All owned content is taught.
- **Left to the site page for length (recorded per the root condition).** WE b2 (the runner against the rugby squad); Activity 1 (rebuild the session in 60 minutes) and Activity 2 (four contemporary claims); the seventh "what the athlete notices" row (shown silently); specificity as a named principle (Year 12 principles, hms-y12-m4-v06 and v07; used in plain words here).
- **What this video does not teach.** Setting each FITT variable and progression: **v13**. Heart rate zones by calculation: **v13**. Immediate responses to training: **v14**. Assessing methods for a named sport in depth and the principles of training: **hms-y12-m4-v03 to v07**. Adaptations are named in 3 as the comparison requires; their mechanisms belong to hms-y12-m4-v08.
- **Site alignment.** Kept in substance: the warm-up and its answer (1, 6); "no session is purely aerobic or purely anaerobic", intensity and the work-to-rest ratio as the two deciders, the identical sprint drill with two recoveries, "The recovery is part of the prescription" (2); the six-criteria comparison table and its similarities, "compare means one criterion at a time" (3); the methods grouped by system (4); the four contemporary methods each with a benefit and a limitation (5); the individual-against-squad table and "training to the average" (6); the four levers, "the physiological stress is then equivalent even though the speeds are not", the recovery lever as most powerful and most easily misused, the participation argument (7).
- **Site errors found (this read).** One, logged as site correction 21: card 04's "In your book" gives the two sprint sessions' work-to-rest ratios as "roughly 1:18 and 1:4". A maximal 30 m sprint takes about 4 to 5 s, so 3 min of rest is about 1:36 to 1:45 (1:18 would need a 10 s effort); 20 s of rest after a 5 s sprint is 1:4, correct. The video says "about five seconds of work and three minutes of rest: about one to thirty-six". Checked and kept: aerobic training at about 60 to 85% of maximum heart rate; anaerobic above 85%; 48 h between heavy anaerobic sessions; the adaptations listed.
- **Added beyond the site.** (a) The **work-to-rest dial** (`WorkRestDial`, new in `hms-shared`, the route's recurring model), grown from v11's training-intensity dial: one needle for the ratio, with four zones (speed and power, repeat-sprint, lactate tolerance, aerobic base) and a session bar timeline beside it whose rest blocks shrink or grow as the needle moves, recolouring the system stressed from v09 and v10's tones; v13 splits it into the four FITT dials. (b) v02's `CompareLedger` for the six-criteria comparison, one row per cue. (c) A `LeverBoard` for differentiation: one session bar with four slider levers (intensity, volume, recovery, role), each changing one athlete row while the others hold. (d) Both attempts.
- **Entry knowledge.** hms-y11-m2-v10 (all three systems contribute, interplay, the 85% ceiling, intermittent sport, aerobic fitness as recovery between efforts); v09 (PCr recovery: half in 30 s, most in 2 to 3 min; the six-sprint attempt with 3 min against 15 s rest); v11 (the intensity dial; intensity decides the fuel); v05 (stroke volume, cardiac output); v02 (fibre size and recruitment). Not assumed: aerobic training, anaerobic training, work-to-rest ratio, the methods, HIIT, cross-training, differentiation, relative and absolute prescription.
- **Terms.** Aerobic and anaerobic training, work-to-rest ratio (2); continuous, fartlek, long interval, circuit, short interval, repeated sprint, plyometric, resistance (4); HIIT, cross-training (5); differentiation, relative prescription (7). Each gloss writes beside its part.
- **Visual system.** One recurring model introduced here (as the route lists): the **work-to-rest dial**. Plates: reused `hms-empty-training-field-v1.png` (m1-v02, approved: an oval at dusk with cones and a ball bag; the hook's pitch and attempt 2's hockey field), `ma12-stopwatch-v1.png`, `hms-track-finish-line-v1.png` (v08, the individual runner), `hms-netball-ring-ball-v1.png` (v08, attempt 1), `hms-running-blade-v1.png` is not used. No new plates: the route's "rugby field with cones" is not needed because WE b2 is left to the site, and the empty training field carries both squads. No people, hands or faces: athletes are rows on a board labelled by role ("central midfielder", "returning from injury"), never figures.
- **Attempt.** 9a: written for this video (3 marks). 9c: written for this video (4 marks).
- **Memory aids.** The site's own lines: "The recovery is part of the prescription" (rewritten "The rest is part of the prescription") and the squad rule "prescribe relative, not absolute". Scene 8, after 2 to 7.
- **A mistake/fix beat** is in 6 ("team sports should train aerobically, individual sports anaerobically", crossed: the site's two-truths lie). Other fixes: "the sport's name decides" crossed in 2; "two descriptions side by side" crossed in 3; "HIIT replaces continuous training" crossed in 5; "cater for individual differences" (unnamed) crossed in 7; "it's aerobic because it lasts a while" crossed in 9b.
- **Reuse (inspected 24 Nov unless approved and not yet painted):** `ma12-stopwatch-v1.png` (inspected: a plain silver stopwatch, blank dial); `hms-empty-training-field-v1.png` (approved m1-v02, not yet painted), `hms-track-finish-line-v1.png` and `hms-netball-ring-ball-v1.png` (approved v08, not yet painted).
- **Colour key.** System tones as v09 and v10 (ATP-PCr orange, glycolytic plum, aerobic teal); work blocks in the system's tone and rest blocks pale grey; aerobic training column teal and anaerobic column plum-orange in the ledger; amber for shared ground (the similarities) and the givens; the four levers in olive; green answers; red only for crossed mistakes.
- **Type sizes.** As the course brief.
- **Anchor.** The `WorkRestDial` is the anchor: it grows from v11's dial in 1, is built in 2, places the methods in 4, sets the recovery lever in 7, and splits into four dials at the handoff.
- **Simulation.** The session bar and PCr gauge use v09's recovery model (restored = 1 − e^(−t/43.3 s)), each 30 m sprint (5 s) using 40% of the store: with 180 s rest each sprint starts at about 99%; with 20 s rest the starting level falls to 75%, 65%, 62% and settles near 60% by the fifth and sixth sprints, and the bar recolours from orange toward plum as the store falls. Ratios are products of the given times only.
- **Board stages.** (1) the field and the dial, scene 1; (2) the dial and session bar, scene 2; (3) the ledger, scene 3; (4) the dial with methods, scenes 4 and 5; (5) the squad board, scenes 6 and 7; (6) memory, questions, close, handoff and notes.
- **Root rulings (24 Nov).** Site correction 21 is accepted. No new plates.

Main question: *What makes a training session aerobic or anaerobic, and how should training differ for a solo runner and a team?*
Entry knowledge: hms-y11-m2-v10, v09, v11, v05, v02 (as above).
Stops after: deciding a session's system from intensity and the work-to-rest ratio; comparing aerobic and anaerobic training on six criteria with similarities; naming the methods by system; judging four contemporary methods; explaining why a squad is a different planning problem; differentiating one session four ways.
Handoff: FITT (route entry hms-y11-m2-v13). **Handoff frame (hms-y11-m2-v13 opens from it):** the `WorkRestDial` at the centre splitting into four smaller coded dials in a row, each with an empty readout and a letter label, "F", "I", "T", "T" (olive), the session bar small beneath them; the "Next" chip at the lower right reads "Next: how do you turn 'train harder' into a real program?"; this video's heading at the top left.

## Script and shots

15 scene files (1 to 8, 9a to 9d, 10, 11). No people, hands or faces appear at any point.

### 1. hook (twelve laps, every Tuesday)
> Here's the intensity dial from last time. Now watch a coach set it badly. An under-seventeen football squad runs twelve laps of the pitch, at a steady pace, every Tuesday, all season. Everyone does exactly the same thing. That's a poor session, and not just because it's boring. Can you find three different reasons? And is there one player it nearly suits?

Visual: opens on v11's handoff frame (the `FuelMixGraph` with its intensity axis curled into the "training intensity" dial, the v11 Next chip). The Next chip leaves and the heading rewrites to "What makes a session aerobic or anaerobic?" (60 px). On "watch a coach set it badly" the graph fades, leaving the dial. On "An under-seventeen football squad" the approved plate `hms-empty-training-field-v1.png` settles across the lower two-thirds (an oval at dusk, cones, a ball bag; no players); on "twelve laps of the pitch, at a steady pace" a coded lap counter "12 laps" writes and a dashed loop traces the oval twelve times quickly, the dial's needle parked at a low steady setting; on "every Tuesday, all season" a coded calendar strip writes with the same tick on every Tuesday. On "Everyone does exactly the same thing" a squad board writes at the right with eleven identical rows, each "12 laps, same pace" (30 px). On "three different reasons" three empty amber reason slots (34 px); on "one player it nearly suits" an amber question mark beside the squad board. Hold one second.

### 2. the rest is part of the prescription
> All three systems work in every session, so "aerobic" or "anaerobic" names the system that's pushed hard enough to adapt. Two things decide it, and neither is the sport's name. First, intensity: below about eighty-five per cent of maximum, the aerobic system leads. Second, and more often missed, the **work-to-rest ratio**. Earlier, you explained the six sprints. Now treat them as training. Thirty-metre sprints, about five seconds each, with three minutes' rest, is about one to thirty-six. Every sprint starts fresh, so that trains speed and power. Cut the rest to twenty seconds, one to four, and phosphocreatine never refills. Glycolysis takes more of the load, and now you're training repeat sprints and lactate tolerance. The rest is part of the prescription.

Visual: board change to the dial (`WorkRestDial`, solid from its first frame) with a session bar timeline beside it (work blocks coloured by system, rest blocks pale grey) and v09's orange PCr gauge small above the bar. On "All three systems work in every session" a tiny three-tone stack sits under the bar, all bands above zero. On "pushed hard enough to adapt" a chip "aerobic or anaerobic: which system is pushed to adapt" (30 px). On "neither is the sport's name" a chip "the sport's name" writes and is crossed in red. On "First, intensity" the v11 intensity dial sits small at the left, its needle crossing an amber mark "about 85%" on "below about eighty-five per cent of maximum", the arc below the mark tinting teal. On "work-to-rest ratio" the gloss "work-to-rest ratio: effort time against recovery time" (34 px) and the main dial's ratio scale writes, from "continuous" through "1:1", "1:4" to "1:36". On "Earlier, you explained the six sprints" a grey recall chip "earlier: 6 sprints, 3 min against 15 s rest". On "about five seconds each, with three minutes' rest" the bar draws six orange 5 s blocks separated by long grey 180 s blocks, the stopwatch plate `ma12-stopwatch-v1.png` tiny; on "about one to thirty-six" the needle swings to "1:36" and the working writes "5 s : 180 s = 1 : 36" (amber). On "Every sprint starts fresh" the PCr gauge refills to about 99% before each block; on "trains speed and power" the zone label "speed and power: ATP-PCr" lights orange. On "Cut the rest to twenty seconds, one to four" the grey blocks shrink to 20 s, the working writes "5 s : 20 s = 1 : 4", the needle swings; on "phosphocreatine never refills" the gauge starts each sprint lower, down to about 60% by the sixth; on "Glycolysis takes more of the load" the later blocks recolour toward plum; on "repeat sprints and lactate tolerance" the zone label "repeat sprints, lactate tolerance: glycolytic" lights plum. On "The rest is part of the prescription" the grey rest blocks outline amber, amber hand tag "the rest is part of the prescription" (42 px). Hold one second.

### 3. compare, one criterion at a time
> Now compare the two kinds of training properly, one criterion at a time. Intensity: aerobic training sits at about sixty to eighty-five per cent of maximum heart rate, whereas anaerobic training goes above eighty-five, often all-out. Effort: minutes to hours, against seconds to about two minutes. Work-to-rest: continuous or about one to one, against one to three up to one to twenty or more. System: aerobic, against ATP-PCr or glycolytic. Adaptations: a bigger stroke volume, more capillaries and mitochondria, against bigger fuel stores, better buffering and stronger muscles. Recovery: aerobic work can be done on consecutive days, but heavy anaerobic sessions need about forty-eight hours. And both follow the same principles, and both fade if you stop.

Visual: board change to the ledger (v02's `CompareLedger`, solid from its first frame): two column heads "aerobic training" (teal) and "anaerobic training" (plum-orange), six empty rows. On "one criterion at a time" a chip "two descriptions side by side" writes and is crossed in red. Rows fill one per cue, both halves together (30 px): on "Intensity" row "intensity | about 60 to 85% of max heart rate | above 85%, often all-out", "whereas" written in amber between the cells on "whereas anaerobic training goes above eighty-five"; on "Effort: minutes to hours" row "effort | minutes to hours | seconds to about 2 min"; on "Work-to-rest" row "work-to-rest | continuous or about 1:1 | 1:3 to 1:20 or more", the dial tiny with both arcs lit; on "System" row "system | aerobic | ATP-PCr or glycolytic"; on "Adaptations" row "adaptations | stroke volume, capillaries, mitochondria | fuel stores, buffering, muscle size and recruitment"; on "Recovery" row "recovery | consecutive days | about 48 h between heavy sessions". On "both follow the same principles, and both fade if you stop" an amber band spans both columns under the ledger, "both: same principles, progressive load, lost if you stop, specific to what you train". A silent seventh row "what you notice | lower heart rate at the same pace | repeat efforts without the drop-off" writes in grey. Hold one second.

### 4. methods, grouped by the system they stress
> A training method is just a way of arranging work and rest. Group them by the system they stress. For the aerobic system: **continuous** training, steady for twenty minutes or more; **fartlek**, continuous running with changes of pace; **long intervals** of two to five minutes; and **circuits**, stations with little rest. For the anaerobic systems: **short intervals** and repeated sprints; **plyometrics**, like bounding and depth jumps, for explosive power; and **resistance** training, for strength and muscle size.

Visual: board change to the dial with methods (solid from its first frame): the `WorkRestDial` large at the centre, its four zones labelled. Method chips land on the dial one per cue (30 px), each with a tiny session bar of its own showing its work and rest pattern: on "continuous" "continuous: steady, 20 min+" at the "continuous" end, its bar one long teal block; on "fartlek" "fartlek: pace changes" near it, its block varying in height; on "long intervals" "long intervals: 2 to 5 min, about 1:1" at "1:1"; on "circuits" "circuits: stations, little rest" near "1:1", with a ring of small station dots. On "For the anaerobic systems" the high-ratio half of the dial brightens. On "short intervals" "short intervals and repeated sprints: 5 to 30 s" spanning "1:4" to "1:36", the scene 2 bars tiny; on "plyometrics" "plyometrics: bounding, depth jumps, power" with v02's eccentric-then-concentric tags tiny; on "resistance" "resistance: strength, muscle size". Hold one second.

### 5. the contemporary methods, judged
> The syllabus also asks for contemporary methods. Judge each one by what it really offers. **HIIT**, short near-maximal efforts with brief rests, builds aerobic and anaerobic fitness in far less time, but its recovery cost means it can't be done every day. **Cross-training**, like a runner swimming, keeps the aerobic system fit with less impact, but it maintains the system better than the sport. Water training protects injured joints. Altitude camps can raise red blood cells, but results vary a lot. And heart rate monitors and GPS let a coach measure the load, so they can check a session did what was planned.

Visual: the dial stays small at the left; a four-row judgement board writes at the right, columns "offers" (green) and "limit" (amber) (30 px). On "HIIT" the gloss "HIIT: high-intensity interval training" (34 px) and a chip on the dial at the high-ratio arc; on "builds aerobic and anaerobic fitness in far less time" the "offers" cell "both systems, less time", a short session bar beside a long continuous one; on "its recovery cost means it can't be done every day" the "limit" cell "recovery cost: not daily", and a chip "HIIT replaces continuous training" writes and is crossed in red. On "Cross-training" the gloss "cross-training: same system, different activity"; on "with less impact" "offers: fitness with less impact"; on "it maintains the system better than the sport" "limit: keeps the system, not the sport skill". On "Water training protects injured joints" a row "aquatic | less joint load | "; on "Altitude camps can raise red blood cells" a row "altitude | more red cells (v05) | results vary", the v05 red-cell thumbnail tiny; on "results vary a lot" the amber cell outlines. On "heart rate monitors and GPS" a row "technology | measures load | " with a coded heart-rate trace icon; on "check a session did what was planned" a tick appears beside a planned-against-actual mini bar pair, tag "measurement, not motivation" (30 px). Hold one second.

### 6. one athlete, or a squad
> The physiology is the same for a solo runner and a team. The planning problem isn't. A runner has one event profile and one set of test results, so the coach can set an exact pace for that athlete. A squad has several positions with different demands, and a wide spread of fitness, sometimes years of growth apart. One pace for everyone is easy for the strongest and too hard for the weakest. That's training to the average. So, the twelve laps: one load for a whole spread of players, a steady run for a stop-start sport, and the same session all season. The player it nearly suits is the central midfielder, who covers the most ground at moderate pace, and even for them, it's only a base.

Visual: board change to the squad board (solid from its first frame): two panels, left "individual" with `hms-track-finish-line-v1.png` small and one row "runner: one profile", right "squad" with the field plate small and eleven rows labelled by role ("goalkeeper", "centre-back", "central midfielder", "winger", "striker" and so on) (30 px). On "The physiology is the same" one shared amber band across the top, "same physiology". On "one event profile and one set of test results" the left row gains "one profile" and "one set of tests"; on "set an exact pace for that athlete" a chip "absolute: this pace, this athlete". On "several positions with different demands" the right rows each gain a tiny profile bar of a different shape (the goalkeeper's mostly rest with rare spikes, the midfielder's long and moderate); on "a wide spread of fitness" each row gains a capacity bar of a different length; on "years of growth apart" a small chip "15 to 17, growth varies". On "One pace for everyone" one vertical pace line drops across all eleven capacity bars; on "easy for the strongest" the longest bars show a wide green gap; on "too hard for the weakest" the shortest bars overrun red; on "training to the average" tag "training to the average" (34 px). On "So, the twelve laps" the hook's three amber slots return and fill one per cue: "1 one load for a spread" on "one load for a whole spread of players"; "2 steady run, stop-start sport" on "a steady run for a stop-start sport", with v10's match strip tiny; "3 same all season" on "the same session all season". On "The player it nearly suits is the central midfielder" that row outlines green and the hook's question mark turns into a green tick; on "it's only a base" a grey chip "base only, not specific". A silent chip writes and is crossed in red under the panels: "team sports train aerobically, individual sports anaerobically". Hold one second.

### 7. four levers
> The fix is **differentiation**: one session that loads every athlete properly, without splitting the squad. There are four levers. Intensity, set relatively, as a percentage of each player's own maximum heart rate or best time, so the stress is equal even when the speeds aren't. Volume, the same quality but fewer repetitions, which suits a player coming back from injury. Recovery, which changes the system being trained, so it's the most powerful lever and the easiest to misuse. And role, the same structure, with conditioning that matches each position. A session pitched at the fittest player also tells everyone else they don't belong, so differentiation keeps players in the game.

Visual: the squad board stays; a `LeverBoard` writes under it, one session bar and four olive slider levers "intensity", "volume", "recovery", "role" (30 px). On "differentiation" the gloss "differentiation: one session, adjusted so everyone is loaded properly" (34 px); a chip "cater for individual differences (which lever?)" writes and is crossed in red. Levers move one per cue: on "Intensity, set relatively" the single pace line from 6 breaks into eleven short lines, each at 85% of its own capacity bar, chip "relative: % of own max" and on "the stress is equal even when the speeds aren't" every bar shows the same green fill fraction with different lengths. On "Volume" a row tagged "returning from injury" shows four work blocks where others show six, same height, chip "fewer reps, same quality". On "Recovery, which changes the system being trained" the recovery lever slides and that row's grey rest blocks shrink, the blocks recolouring from orange toward plum (scene 2's effect); on "the most powerful lever and the easiest to misuse" the lever outlines amber. On "role" the rows group into colour bands by position, each band's conditioning block a different shape (midfielders long intervals, wingers repeated sprints, goalkeeper short explosive efforts). On "tells everyone else they don't belong" a few short-bar rows fade toward grey; on "differentiation keeps players in the game" they return to full ink, green tag "keeps the squad together" (34 px). Hold one second.

### 8. memory
> Two things to remember. The rest is part of the prescription. And for a squad, prescribe relative, not absolute.

Visual: board change to the memory card (solid from its first frame): the dial small at the left beside a dark-ink framed card (52 px): "The rest is part of the prescription" (written with "The rest is part of the prescription") and "Squads: relative, not absolute" (written with "prescribe relative, not absolute"). This card returns beside the key notes. Hold half a second.

### 9a. attempt one (the netball session)
> Two exam questions. First. A netball squad runs six two-minute efforts at about eighty per cent of maximum heart rate, with two minutes of easy jogging between them. Identify the training method and the energy system it mainly stresses, and justify your answer. Pause here to answer.

Visual: the board clears. `QuestionScene`: the card arrives in one move with its whole text (38 px), tagged "HSC-style question, written for HSCScience". Demand: "A netball squad completes six 2-minute efforts at about 80% of maximum heart rate, with 2 minutes of easy jogging between efforts. Identify the training method and the energy system it mainly stresses, and justify your answer. (3 marks)" Picture: `hms-netball-ring-ball-v1.png` small beside an empty session bar and the dial with no needle. **The countdown ring is shown full from "Pause here to answer." and runs for 10 seconds.** The whole card stays on screen during the countdown and after it.

### 9b. feedback, item one
> It's long-interval training, stressing the aerobic system. Eighty per cent is below the anaerobic threshold of about eighty-five. Each effort lasts minutes, not seconds. And two minutes on, two minutes easy is about one to one. The classic mistake is calling it anaerobic because it's called intervals.

Visual: `FeedbackScene`: the card shrinks to the top; the session bar fills with six teal 2-minute blocks and pale grey 2-minute blocks; the needle settles at "1:1"; a green-framed three-line answer writes one per cue (30 px): on "long-interval training, stressing the aerobic system" "1 long intervals; aerobic"; on "Eighty per cent is below" "2 intensity: 80%, below about 85%"; on "about one to one" "3 efforts of minutes; work-to-rest about 1:1". On "classic mistake" a chip "intervals, so anaerobic" writes and is crossed in red, red hand tag "read intensity and the ratio" (34 px). Settle one second.

### 9c. attempt two (the hockey squad)
> Second. A school hockey squad includes a player returning from a hamstring strain, and two seniors who are much fitter than the rest. The coach plans eight thirty-second hard runs, with ninety seconds' rest, at one set pace for everyone. Explain two ways to differentiate this session so it suits the whole squad. Pause here to answer.

Visual: the board clears. The card arrives in one move with its whole text (38 px), tagged "HSC-style question, written for HSCScience". Demand: "A school hockey squad includes a player returning from a hamstring strain and two senior players who are much fitter than the rest. The coach plans 8 × 30-second hard runs with 90 seconds of rest, at one set pace for every player. Explain two ways the coach could differentiate this session so that it suits the whole squad. (4 marks)" Picture: the field plate small beside a squad board of rows labelled "returning", "senior", "senior", "squad" and one pace line. **The countdown ring is shown full from "Pause here to answer." and runs for 10 seconds.** The whole card stays on screen during the countdown and after it.

### 9d. feedback, item two
> First, set intensity relatively, as a percentage of each player's own maximum, so the seniors are pushed and the others aren't overloaded. Second, cut the volume for the returning player: fewer runs at the same quality, to protect the hamstring. For each lever, say what changes and why. The classic mistake is just saying cater for differences.

Visual: `FeedbackScene`: the single pace line breaks into relative lines on the squad board; the "returning" row's eight blocks drop to four; a green-framed four-line answer writes one per cue (30 px): on "set intensity relatively" "1 lever: relative intensity (% of own max)"; on "the seniors are pushed and the others aren't overloaded" "2 why: equal stress at different speeds"; on "cut the volume for the returning player" "3 lever: volume, fewer runs, same quality"; on "to protect the hamstring" "4 why: manages re-injury risk". On "For each lever, say what changes and why" two amber underlines under lines 2 and 4. On "classic mistake" a chip "cater for individual differences" writes and is crossed in red, red hand tag "name the lever and its effect" (34 px). Settle one second.

### 10. decision rule and handoff
> So, to read any session, check the intensity and the rest, then ask who it's really for. But "go hard twice a week" still isn't a program. To write one, the dial needs to become four decisions. How do you turn "train harder" into a real program?

Visual: two chips write on (38 px): "intensity and rest?" on "check the intensity and the rest", "who is it for?" on "who it's really for". On "go hard twice a week" a chip with that text writes in grey and shakes once. On "the dial needs to become four decisions" the chips fade and the `WorkRestDial` at the centre splits into four smaller coded dials in a row, each with an empty readout, and their letter labels write one by one, "F", "I", "T", "T" (olive, 38 px), the session bar small beneath them. On "a real program?" the "Next" chip slides in: "Next: how do you turn 'train harder' into a real program?" **This is the handoff frame; hms-y11-m2-v13 opens from it.** Hold half a second.

### 11. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Intensity and the work-to-rest ratio decide the system trained, not the sport.
2. Aerobic: 60 to 85% max HR, minutes to hours, about 1:1. Anaerobic: above 85%.
3. Continuous, fartlek, long intervals, circuits; sprints, plyometrics, resistance.
4. Contemporary: HIIT, cross-training, aquatic, altitude, technology; each a limit.
5. Squads: differentiate by intensity (relative), volume, recovery and role.

Memory card (the scene 8 card) beside the notes. Each bullet one line of at most 86 characters. Hold about 45 seconds in all.

## Practice question and feedback

Two unseen items (9a to 9d), "Pause here to answer." and a 10 s countdown each, cards on screen during and after; marks on the card; tag "HSC-style question, written for HSCScience". Both are written for this video; neither repeats the sprint sessions (2) or the football squad (6, 7).

1. (9a, 3 marks.) Long-interval training (1 mark); predominantly aerobic (1 mark); justified by intensity below about 85% and efforts of minutes with a work-to-rest ratio of about 1:1 (1 mark). Classic mistake crossed: "intervals, so anaerobic".
2. (9c, 4 marks.) Two levers, each named with what changes (1 mark each) and why it suits the squad (1 mark each): relative intensity (each player at a percentage of their own maximum, equal stress at different speeds); reduced volume for the returning player (fewer runs at the same quality, re-injury risk). Also creditable: role-based content; recovery changes with the caution that it changes the system. Classic mistake crossed: "cater for individual differences" with no lever.

Feedback spoken lengths about 21 s (9b) and 24 s (9d) by script; time the exact audio.

## Numbers or facts to verify

Self-check (24 Nov). The Codex science check must confirm each before voicing.
- **Deciders (2).** Intensity threshold about 85% (consistent with v10); a maximal 30 m sprint takes about 4 to 5 s (school-age athletes about 4.5 to 5.5 s); 5 s : 180 s = 1:36; 5 s : 20 s = 1:4 (site correction 21); PCr recovery model from v09.
- **Comparison (3).** Aerobic training about 60 to 85% of maximum heart rate; anaerobic above 85%; effort durations; work-to-rest about 1:1 against 1:3 to 1:20 or more; adaptations (stroke volume, capillarisation, mitochondria; PCr and glycogen stores, buffering, hypertrophy and neural recruitment); recovery about 48 h between heavy anaerobic sessions; shared principles, reversibility, specificity.
- **Methods (4).** Continuous 20 min or more; fartlek; long intervals 2 to 5 min at about 1:1; circuits; short intervals 5 to 30 s; plyometrics; resistance.
- **Contemporary (5).** HIIT produces aerobic and anaerobic adaptations in less time (reviews of sprint interval and HIIT training); cross-training; aquatic training for reduced joint load; altitude training's variable response; technology for load monitoring.
- **Squads (6, 7).** Position-specific demands in football; maturation spread at 15 to 17; relative prescription; the four levers; participation argument.
- **Numbers used.** 12 laps, 17, 85%, 30 m, 5 s, 180 s, 1:36, 20 s, 1:4, about 99% and about 60% (model), 60 to 85%, about 2 min, 1:1, 1:3 to 1:20, 48 h, 20 min, 2 to 5 min, 5 to 30 s; attempts: 6 × 2 min at 80% with 2 min jogging (1:1); 8 × 30 s with 90 s rest (1:3).
- **Official figures.** None.
- **No em dashes** in this file (searched by script).

## Memory aid check

- **"The rest is part of the prescription."** Assumption: the work bout is near-maximal, so recovery length decides how much PCr returns. True for repeated sprints; for continuous work there is no rest and intensity alone decides. Scene 2 states both deciders.
- **"Squads: relative, not absolute."** Assumption: each player's maximum is known (tested or estimated). Where it is not, coaches use perceived exertion or own best times; v13 sets intensity by heart rate and perceived exertion. Author note.

## Narration length estimate

Revision 1 count (24 Nov; by script with the build parser rules: only lines starting "> ", joined with a space, bold markers removed): **6050 characters**, 14 scene files. At 13.3 characters per second the speech is about 455 s; add 28 s of padding (2 s per scene) and 72 s of stated holds, settles, the two 10 s countdowns and the rest of the quiet notes hold: **about 555 s**.

| Scene | Characters |
| --- | --- |
| 1. hook (twelve laps, every Tuesday) | 357 |
| 2. the rest is part of the prescription | 763 |
| 3. compare, one criterion at a time | 759 |
| 4. methods, grouped by the system they stress | 492 |
| 5. the contemporary methods, judged | 607 |
| 6. one athlete, or a squad | 691 |
| 7. four levers | 684 |
| 8. memory | 112 |
| 9a. attempt one (the netball session) | 283 |
| 9b. feedback, item one | 302 |
| 9c. attempt two (the hockey squad) | 335 |
| 9d. feedback, item two | 345 |
| 10. decision rule and handoff | 245 |
| 11. key notes (quiet, hold about 45 seconds) | 75 |

Reserve cuts: (1) scene 5, the water training sentence (keep the row silent); (2) scene 7, the participation sentence; (3) scene 3, the last sentence (keep the amber band silent). Do not cut below 5,500 without replacing content.

## Assets

Have (reused, inspected 24 Nov unless approved and not yet painted): `ma12-stopwatch-v1.png`; HMS plates approved: `hms-empty-training-field-v1.png` (m1-v02), `hms-track-finish-line-v1.png` and `hms-netball-ring-ball-v1.png` (v08); `m5x-red-blood-cells-v1.png` (tiny, inspected in v05's pair). Coded: v11's dial, `WorkRestDial` with session bar and PCr gauge, `CompareLedger`, method chips, judgement board, squad board with profile and capacity bars, `LeverBoard`, question cards, countdown. No people.

Need: no new plates.

Kit gaps: `WorkRestDial`, `LeverBoard` in `hms-shared` (`CompareLedger` from v02).

## Codex asset brief (HMS-Y11-B12)

No new plates. Codex confirms only that the reused plates above are present at their paths and unchanged once painted.

## Codex learning review and science check brief (HMS-Y11-B12)

- **Learning review:** trace from v09, v10 and v11. Does scene 2 make the ratio, not the activity, decide the system, visibly? Is the ledger a comparison (criterion by criterion) rather than two lists? Is the method list anchored on the dial rather than read out? Are the contemporary methods judged, not described? Does the squad board show "training to the average" without any figure? Are all three hook reasons and the midfielder answered (6)? Are both attempts unseen?
- **Science check:** every item in "Numbers or facts to verify", especially the sprint ratios (site correction 21), the 60 to 85% range, HIIT's claims, and the model answers' mark splits.

## Codex error-check brief (HMS-Y11-B12, after the reviews)

Error-only: every quoted cue appears word for word in its scene in spoken order; the opening matches v11's handoff frame and the closing matches hms-y11-m2-v13's route opening (the work-to-rest dial splits into four labelled dials: F, I, T, T); every ratio is the quotient of its given times; system colours as v09 and v10; no people, hands or faces; no em dash, no U+2061; no module number or course label on screen.

## YouTube metadata (draft)

- Title: "Aerobic vs Anaerobic Training, Methods and Differentiated Programs | HSC Health and Movement Science"
- Description:

"Full lesson, notes and practice questions: https://hscscience.com.au/subjects/health-movement-science/year11/module2/lesson12.sa.html

What makes a training session aerobic or anaerobic, and how should training differ for a solo runner and a team? Why intensity and the work-to-rest ratio decide the system trained, a six-criteria comparison of aerobic and anaerobic training, the training methods grouped by system, contemporary methods (HIIT, cross-training, aquatic, altitude and technology) judged on what they really offer, why a squad is a different planning problem from one athlete, and four ways to differentiate a session. Includes two exam-style questions with brief feedback. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Health and Movement Science 11-12 (2023 syllabus), Year 11: The body and mind in motion.
Syllabus content (NSW Health and Movement Science 11-12, 2023):
"Compare the difference between aerobic and anaerobic training for individuals and group sports, including differentiated training programs and contemporary methods of training"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/pdhpe/health-and-movement-science-11-12-2023

Previous: How does food decide which system keeps running?
Next: How do you turn 'train harder' into a real program?

#HealthAndMovementScience #HSC #HSCScience"

## Open decisions

- None. Resolved by root (24 Nov): site correction 21 is accepted. No new plates.

## Build ids

Lesson key `hms11b12`; folder `src/explainer/lessons/hms-y11-m2-v12`; build folder `docs/production/claude-pm/lessons/hms11b12`. Imports `hms-shared` (`FuelMixGraph`, `CompareLedger`, `ShareCurves`; new `WorkRestDial`, `LeverBoard`), `src/explainer/math/graphs.tsx`.

Scene headings (15): hook, work-rest, compare, methods, contemporary, squad, levers, memory, attempt, feedback-one, attempt-two, feedback-two, handoff, key-notes.

Holds and transitions as v11. 4 and 5 continue on the dial; 6 and 7 on the squad board; other teaching scenes are board changes.

## Review notes (author, not learner copy)

- **Teaching checks.** Causes: why the same drill trains different systems (2); why aerobic work can be repeated daily and anaerobic cannot (3); why HIIT supplements rather than replaces (5); why one pace fails a squad (6); why relative intensity equalises stress, and why the recovery lever is risky (7). Attention: a session everyone has done; a needle that swings when only the rest changes. Visual medium: a session bar whose rest blocks shrink and whose work blocks recolour; capacity bars cut by one pace line. Apply: an unseen session to classify (9a); an unseen squad to differentiate (9c). Remember: the rest is part of the prescription; relative, not absolute.
- **Term load.** Heavy (eight method names); each lands on the dial where it belongs, and the key notes select them in two groups.
- **Overlap.** v13 owns FITT numbers and heart-rate zones; Year 12 owns principles and method assessment for named sports; hms-y12-m4-v08 owns adaptation mechanisms.
- **No em dashes** in this file (searched by script).
