# HMS Year 12 V04 (Training for improved performance): aerobic training methods. Why do endurance athletes do most of their training easy, and which aerobic method fits which sport? (design)

Status: Revision 1 (24 Nov 2026): first design. Needs independent learning review and science check before voicing. Nothing recorded. Voice: the Google voice. Plates: none new, nine reused (see Assets). No official figures; heart-rate bands are the site's rules of thumb and the two training weeks are illustrative.

Narration 6,122 characters (13 scene files, counted by script from lines starting "> " with bold markers removed), about 560 s including holds, two countdowns and the 45 s notes hold.

Scope: the fourth video of the Year 12 focus area "Training for improved performance", second of three on the types of training. Course brief `../hms-design-brief.md`. Route entry **hms-y12-m4-v04**. Pre-design pack `../pre-design/hms/hms-y12-m4-v04.md`. Site page `C:/Users/kygs/teaching-app-fix/subjects/health-movement-science/year12/module4/lesson04.sa.html` (read in full, 24 Nov; sha256 `6192d23df3ae455b355192639b6a6b0ffc2441e9be5e6c5abac70af0a8294fdc`). Previous design `hms-y12-m4-v03.md`.

## Decisions

- **File name and route id.** Route entry **hms-y12-m4-v04**, playlist order 66, site lesson Year 12 module 4 L04 ("Aerobic training methods"). Opening (route): "the demand-profile routine from v03 applied to an endurance event" (hms-y12-m4-v03's final frame). Start: from the two thresholds that bound the aerobic zone. Stop: when students can place the aerobic zone between the aerobic training threshold and the anaerobic threshold, distinguish continuous, fartlek, aerobic interval and circuit training by one clause each, explain why most endurance training is easy, assess each method's relevance with v03's routine, explain why anaerobic athletes need an aerobic base, and name the limits of aerobic training. Next handoff: hms-y12-m4-v05, which opens on "the intensity histograms from v04 give way to three more method families". Lesson key **hms12b04**.
- **Syllabus.** Inquiry question "How does training influence movement and performance?". Dotpoint **hms-y12-fa2-g2-d1** (p31) "Assess the types of training and training methods and their relevance for a variety of sports", sub-point **s2** "aerobic training, including continuous, fartlek, aerobic interval, and circuit training", owned here (s1 is v03's; s3 to s5 are v05's).
- **One main question:** *Why do endurance athletes do most of their training easy, and which aerobic method fits which sport?* (the route's question, kept). Heading: "Why do endurance athletes train mostly easy?" (the hms-y12-m4-v03 Next chip's words).
- **Case.** The site's warm-up (a club runner with five hours a week runs every session as hard as possible because races hurt; predict eight weeks, two reasons, one change) is the hook (1), answered in 4 with two illustrative training weeks. Card 04 shapes 2; card 05's four-method table and its four clauses shape 3; card 06 shapes 4; card 07's sport rows and v03's routine shape 5, with WE b2 ("anaerobic in the effort, aerobic in the recovery") added there; card 08's four limits shape 6. WE b1 (assess, 6 marks) gives 5 its verdict ("no single method is most relevant; the sport's intensity pattern and the phase of the year decide"). Attempts are unseen: attempt 1 is the page's Activity 1 items 1 and 2 (a 2000 m rower who fades after 90 s; a soccer squad slow to react to tempo changes: method and trade-off, 4 marks); attempt 2 is WE b2's question applied to an unseen athlete (a rugby league forward whose coach calls aerobic training a waste of time: explain why an aerobic base matters, 4 marks).
- **Scope.** Hook (1); the two thresholds and the aerobic zone (2); four methods, four clauses (3); why most training is easy (4); relevance with the routine, and the aerobic base for anaerobic sports (5); what aerobic training will not do (6); memory (7); two unseen items (8a to 8d); decision rule and handoff (9); key notes (10).
- **Syllabus coverage check (root condition, 24 Nov).** All four named methods taught (3), each assessed against sports (5); "relevance for a variety of sports" (5: marathon, soccer midfielder, rower, recreational participant, school squad, and anaerobic sports via the base). Owned content is taught.
- **Left to the site page for length (recorded per the root condition).** Typical prescriptions in full (shown as silent chips on each trace); maximal oxygen uptake as a glossed term (one clause in 2, "the ceiling"); the school-squad row (silent); Activity 1 items 3 and 4 (item 4 repeats v01's 10 km walker pattern); Activity 2 (the hook's week is rebuilt in 4 instead); the matching item.
- **What this video does not teach (recall, one sentence each).** The aerobic system and lactate clearance: Year 11 (**hms-y11-m2-v10**, **v14**), recalled in a clause in 2 (Year 11's lactate threshold curve tiny). Maximum heart rate: Year 11 FITT, recalled with v02. Anaerobic methods and the routine: **v03**, reused. Adaptations in detail: **v08** (4 names five, one clause each). Interference in programs: **v09** onward.
- **Site alignment.** Kept in substance: the warm-up (1); "aerobic training is bounded above and below", the four bands (under 70, 70 to 80, 80 to 90, above 90 per cent of maximum heart rate), "a rule of thumb ... not a physiological constant", thresholds move, raising the anaerobic threshold "lets the athlete work at a higher percentage of a ceiling they already have" (2); the four distinguishing features and "Continuous holds pace constant. Fartlek varies pace without structure. Aerobic interval varies pace with structure. Circuit varies the exercise rather than the pace", the circuit's "the design, not the name" (3); volume-driven adaptations (capillaries, mitochondria, enzymes, plasma volume, stroke volume), threshold work's fatigue cost, the three effects of hard-every-day, "easy training ... is the thing that makes hard training possible" (4); the routine and sport rows, the circuit chosen for a practical constraint, WE b1's conditional verdict, WE b2's "anaerobic in the effort, aerobic in the recovery" with phosphocreatine resynthesis and by-product clearance (5); the four limits (6).
- **Site errors found (this read).** None.
- **Added beyond the site.** (a) A **threshold band** (`ThresholdBand`, new in `hms-shared`, the route's "threshold band on a heart-rate axis"): a vertical intensity axis in per cent of maximum heart rate with two dashed thresholds and the shaded aerobic zone; reused in v06 (thresholds as a principle). (b) **Four method traces** drawn against that axis on one time base (the site's own figure: flat continuous; irregular fartlek; stepped intervals; a circuit line with dips at station changes). (c) **Intensity histograms** (`IntensityHistogram`, new in `hms-shared`, the route's model): the hook runner's week as minutes per intensity band, week A (all hard) against week B (mostly easy, some threshold), each with an eight-week performance line (illustrative); the bars drain or grow as sessions move. (d) v03's `DemandProfile` routine reused for the sport rows. (e) A **recovery gap** picture for the base: v03's SIT strip with each rest block showing a PCr gauge refilling faster on a "trained base" row than on an "untrained" row (illustrative).
- **Entry knowledge.** hms-y12-m4-v03 (the demand-profile routine; anaerobic methods; PCr refills in rest); Year 11 HMS (recalled in one sentence): the aerobic system, lactate clearance, maximum heart rate. Not assumed: aerobic training threshold, anaerobic threshold, aerobic training zone, continuous, fartlek, aerobic interval, circuit training, volume-driven adaptation, interference.
- **Terms.** Aerobic training threshold, anaerobic threshold, aerobic zone (2); continuous, fartlek, aerobic interval, circuit (3); volume (4); aerobic base (5); interference (6, said in plain words). Each gloss writes beside its part.
- **Naming.** Methods and sports only; no brands, clubs or organisations.
- **Visual system.** Models introduced here: the **threshold band** and the **intensity histograms** (both route visuals). Reused: v03's routine card and SIT strip, Year 11's lactate threshold curve (tiny). Plates: none new. Reused: painted HMS plates opened and inspected 24 Nov (contact sheet): `hms-running-shoe-calendar-v1.png` (a worn running shoe beside a desk calendar with ticked days: the runner's week, 1 and 4), `hms-track-finish-line-v1.png` (a red track with lane lines: continuous running, 3), `hms-empty-training-field-v1.png` (a grass field with cones and a ball bag at dusk: fartlek and the soccer row, 3 and 5), `hms-heart-cutaway-v1.png` (a four-chamber heart cutaway: stroke volume, 4); Biology plates opened and inspected 24 Nov: `y11-red-cells-capillary-v1.png` (a capillary in long section with three red cells in single file: capillaries, 4), `b6a-mitochondrion-v1.png` (a mitochondrion cut open showing its folded inner membrane: mitochondria, 4); approved, not yet painted (chosen from their briefs): `hms-dawn-park-mats-v1.png` (eight mats with kettlebells and cones in a park at dawn: circuit stations, 3), `hms-heart-rate-watch-v1.png` (a blank watch face: the heart-rate axis, 2), `hms-cycle-ergometer-v1.png` (v02, pending: the rower row uses a tag, the bike stands in for indoor intervals in 3). No people, hands or faces.
- **Painted HMS plates inspected (24 Nov).** `hms-running-shoe-calendar-v1.png`, `hms-track-finish-line-v1.png`, `hms-empty-training-field-v1.png`, `hms-heart-cutaway-v1.png`.
- **Attempt.** 8a: Activity 1 items 1 and 2 (4 marks). 8c: an unseen forward and WE b2's question (4 marks).
- **Memory aids.** The site's four clauses (written "Continuous holds pace; fartlek varies it freely; intervals vary it by plan; circuits vary the exercise") and "Easy training makes hard training possible". Scene 7, after 2 to 6.
- **A mistake/fix beat** is in 4 ("every session should hurt", crossed: the page's two-truths lie). Other fixes: "70% is a fixed constant" crossed in 2; "a circuit is always aerobic" crossed in 3; "aerobic training is useless for anaerobic sports" crossed in 5; "a big aerobic score means a good player" crossed in 6.
- **Reuse:** v03's handoff frame (opening); v03's routine and SIT strip; Year 11's threshold curve.
- **Colour key.** Intensity axis: below-threshold grey, lower zone light blue, upper zone deep blue, above-threshold orange (v03's glycolysis tone); the four method traces one slate shade each; week A orange, week B blue; performance lines green; green answers; red only for crossed mistakes.
- **Type sizes.** As the course brief.
- **Anchor.** The threshold band (2 to 5, 9) and the histograms (4, handoff).
- **Simulation.** The histograms are one illustrative five-hour week each (A: 300 min above 85%; B: 225 min at 70 to 80% and 60 min at 85 to 90%, 15 min warm-up and cool-down below 70%); the eight-week lines are illustrative shapes (A rises then flattens and dips; B rises steadily), labelled "illustrative pattern". The PCr refill rows are illustrative.
- **Board stages.** (1) The routine card with the runner and the hook's week, scene 1; (2) the threshold band, scene 2; (3) four traces on the band, scene 3; (4) two histograms and adaptations, scene 4; (5) the routine card with sport rows and the base strip, scene 5; (6) limits, scene 6; (7) memory, questions, handoff and notes.
- **Open decisions for root.** None (no new plates, no site corrections).

Main question: *Why do endurance athletes do most of their training easy, and which aerobic method fits which sport?*
Entry knowledge: hms-y12-m4-v03; Year 11 HMS (recalled).
Stops after: placing the aerobic zone between two thresholds; distinguishing the four aerobic methods by one clause each; explaining volume-driven adaptation and the cost of daily hard training; assessing each method's relevance with the routine, including the aerobic base for anaerobic sports; naming four limits.
Handoff: flexibility, strength and skill training (route entry hms-y12-m4-v05). **Handoff frame (hms-y12-m4-v05 opens from it):** the two intensity histograms shrink to the left edge; three empty method-family cards stand at the right, headed "flexibility", "strength" and "skill and tactics" (38 px), each with a grey "?" where a picture will go; the dial from v03 tiny and greyed, "not about energy supply"; the "Next" chip at the lower right reads "Next: how do flexibility, strength and skill training differ?"; this video's heading at the top left.

## Script and shots

13 scene files (1 to 7, 8a to 8d, 9, 10). No people, hands or faces appear at any point.

### 1. hook (every session should hurt?)
> So, why do endurance athletes train mostly easy? Here's a club runner with five hours a week, who wants a faster ten kilometres. Races hurt, they reason, so every session should hurt too. All five runs are as hard as they can go. Predict what happens over eight weeks, and write down two reasons why. Then write what you'd change.

Visual: opens on hms-y12-m4-v03's handoff frame (the routine card with the "10 km runner" token, step 1 filled, step 2 "method: ?", the dial's needle in the aerobic band; the Next chip). The Next chip leaves and the heading rewrites to "Why do endurance athletes train mostly easy?" (60 px). The routine card shrinks to the top-left corner. On "five hours a week" the painted `hms-running-shoe-calendar-v1.png` lands at the right (about 600 px); a week strip of five session bars writes under it. On "every session should hurt too" a chip "every session should hurt" (30 px), not yet judged. On "as hard as they can go" all five bars fill orange to the top. On "over eight weeks" an empty eight-week axis appears; on "two reasons why" two empty slots (30 px); on "what you'd change" a third slot with a grey dashed outline. Hold one second.

### 2. two thresholds bound the aerobic zone
> Aerobic training has a floor and a ceiling. Below the **aerobic training threshold**, roughly seventy per cent of maximum heart rate, the stimulus is too small to force adaptation. You're moving, but not training. Above the **anaerobic threshold**, often around eighty-five to ninety per cent in trained athletes, lactate and hydrogen ions build up faster than they're cleared, as in Year 11, so the effort can't last. That's v-three's anaerobic work. Between them is the **aerobic zone**, and it's wide. The lower part, seventy to eighty per cent, can be held for a long time, so it builds volume. The upper part, near the threshold, is a strong stimulus to raise the threshold itself, but it's tiring. These percentages are rules of thumb, and the thresholds move as an athlete adapts. Raising the anaerobic threshold lets an athlete race at a higher share of the ceiling they already have.

Visual: board change to the threshold band (solid from its first frame): `ThresholdBand`, a vertical axis from "rest" to "max" in per cent of maximum heart rate, the approved `hms-heart-rate-watch-v1.png` tiny at its foot. On "a floor and a ceiling" two dashed lines draw. On "aerobic training threshold" the lower line labels "aerobic training threshold ~70%" (28 px), gloss "below it: too little stimulus" (26 px); on "You're moving, but not training" the band below it greys. On "anaerobic threshold" the upper line labels "anaerobic threshold ~85 to 90%"; on "build up faster than they're cleared" Year 11's lactate threshold curve tiny beside the line, its bend aligned with it, grey recall tag "earlier"; on "v-three's anaerobic work" the band above turns orange, v03's three session strips tiny. On "aerobic zone" the zone between shades blue, gloss "aerobic zone: between the two thresholds" (28 px). On "seventy to eighty per cent" the lower half lightens, tag "lower zone: builds volume"; on "near the threshold" the upper half deepens, tag "upper zone: raises the threshold, tiring". On "rules of thumb" a chip "70% is a fixed constant" writes and is crossed in red; on "the thresholds move" the upper line drifts up a little. On "a higher share of the ceiling" a grey "ceiling" line at the top (gloss silently "maximal oxygen uptake") and the threshold line rising toward it, amber hand tag "raise the threshold, not just the ceiling" (30 px). Hold one second.

### 3. four methods, four clauses
> All four aerobic methods arrange the same work differently. **Continuous** training is steady effort with no rest and no planned change of pace, usually twenty to ninety minutes in the lower zone. It builds volume safely, but it's monotonous, and it doesn't match sports whose pace keeps changing. **Fartlek**, Swedish for speed play, is continuous too, but the pace varies without a fixed plan, with surges chosen by the athlete or the terrain. It trains changes of pace, but its load is hard to record. **Aerobic interval** training uses set work bouts and set recoveries, inside the zone, like five four-minute efforts near the threshold. It piles up time at an intensity you couldn't hold continuously, but it's tiring, so one or two a week. **Circuit** training is a sequence of stations, so the exercise changes rather than the pace. It's aerobic only if heart rate stays up. Load it heavily with full rests, and it becomes resistance training.

Visual: board change to four traces (solid from its first frame): the threshold band at the left, four lanes at the right on one 0 to 40 min axis, each trace drawn against the band's scale. On "Continuous" lane 1 draws a flat line low in the blue zone, gloss "continuous: no rest, no planned pace change" (28 px), `hms-track-finish-line-v1.png` tiny; silent chip "20 to 90 min, 70 to 80%"; on "It builds volume safely" a green tag "volume, low risk"; on "it's monotonous" an amber tag "monotonous, poor match for variable pace". On "Fartlek" lane 2 draws an irregular line with unequal surges, gloss "fartlek: 'speed play', pace varies freely" (28 px), the painted training field tiny; on "It trains changes of pace" green tag "pace changes"; on "its load is hard to record" amber tag "hard to quantify". On "Aerobic interval" lane 3 draws a stepped line: five equal blocks near the upper line with equal dips, gloss "aerobic interval: set bouts, set recoveries" (28 px), the approved ergometer tiny; on "five four-minute efforts near the threshold" a silent chip "5 × 4 min, 2 to 3 min recovery"; on "piles up time at an intensity you couldn't hold continuously" a green shaded area totals the time near the threshold; on "one or two a week" amber tag "tiring: 1 to 2 a week". On "Circuit" lane 4 draws a line with short dips at each station change, gloss "circuit: stations; the exercise changes" (28 px), the approved `hms-dawn-park-mats-v1.png` tiny; on "only if heart rate stays up" the line stays above the lower threshold; on "Load it heavily with full rests" the line drops below the zone between stations and the lane relabels "resistance"; a chip "a circuit is always aerobic" writes and is crossed in red. A four-clause strip writes along the bottom, silently (26 px): "holds pace", "varies it freely", "varies it by plan", "varies the exercise". Hold one second.

### 4. why most training is easy
> Now the hook. Many endurance adaptations depend on the total time spent training aerobically: more capillaries around the muscle, more and bigger mitochondria, more aerobic enzymes, more blood plasma, and a bigger stroke volume. To pile up that much time, most of it has to be at an intensity you can repeat tomorrow. Some work does need to sit near the threshold, because raising it means working close to it. But do that every day, and three things happen. Total volume falls, because you can't recover. The hard sessions get worse, because you're doing them tired. And the risk of injury and illness rises. So our runner improves at first, then stalls. Swap to about three easy runs and two hard ones, and the same five hours work better. Easy training isn't laziness. It's what makes the hard training possible.

Visual: board change to histograms (solid from its first frame): the threshold band turned sideways as a shared intensity axis; two `IntensityHistogram` panels, "week A" and "week B", minutes per band. On "the total time spent training aerobically" a volume meter (minutes) appears under each panel. Five adaptation chips write one per cue at the left (26 px): on "more capillaries around the muscle" "capillaries", `y11-red-cells-capillary-v1.png` tiny; on "more and bigger mitochondria" "mitochondria", `b6a-mitochondrion-v1.png` tiny; on "more aerobic enzymes" "enzymes"; on "more blood plasma" "plasma volume"; on "a bigger stroke volume" "stroke volume", `hms-heart-cutaway-v1.png` tiny; a bracket tag "volume-driven" (28 px). On "an intensity you can repeat tomorrow" the lower blue zone glows. On "Some work does need to sit near the threshold" a thin deep-blue bar appears in week B, tag "threshold work: raises it". Week A fills from the hook's five orange bars: on "do that every day" all minutes stack above the threshold; three effect tags write one per cue (26 px): on "Total volume falls" the week A volume meter drains, "volume falls"; on "The hard sessions get worse" the orange bar's top edge sags, "tired quality"; on "the risk of injury and illness rises" a small amber risk gauge rises, "injury, illness". On "improves at first, then stalls" week A's eight-week line rises and flattens, then dips, grey tag "illustrative pattern"; the chip "every session should hurt" from 1 is crossed in red. On "about three easy runs and two hard ones" week B fills: a tall light-blue bar and a short deep-blue bar; the shoe calendar tiny re-ticks five days (three blue, two deep blue); on "the same five hours work better" week B's line rises steadily above A's. The hook's slots fill (24 px): "volume collapses", "hard sessions done tired", change "3 easy, 2 hard". On "makes the hard training possible" amber hand tag "easy makes hard possible" (34 px). Hold one second.

### 5. which method fits which sport
> Use v-three's routine: demand profile, matched method, trade-off. A marathon is one long, steady effort, so mostly continuous running, with intervals to lift the threshold. But continuous work alone leaves you unpractised at surging. A soccer midfielder moves all game with unpredictable surges, so fartlek, plus intervals. The catch is that fartlek is hard to measure across a squad. A two-thousand-metre rower works just above the threshold, so aerobic intervals near it, limited by their cost. A recreational beginner suits easy continuous work or a light circuit, though progress stalls if intensity never rises. And sprint sports need an aerobic base too. They're anaerobic in the effort, but aerobic in the recovery. Refilling phosphocreatine and clearing by-products between efforts both depend on the aerobic system. So no method is best. The sport's pattern and the time of year decide.

Visual: board change to the routine card (solid from its first frame): v03's `DemandProfile` with its three slots, the threshold band small at the left. Four rows write one per cue, each filling profile, method and trade-off (24 px): on "A marathon is one long, steady effort" "one long steady effort", on "mostly continuous running, with intervals to lift the threshold" "continuous + intervals", lane 1 and lane 3 traces tiny, on "unpractised at surging" "no surging practice"; on "A soccer midfielder" the painted training field tiny, on "unpredictable surges" "continuous with surges", on "fartlek, plus intervals" "fartlek + intervals", on "hard to measure across a squad" "hard to quantify"; on "A two-thousand-metre rower" a text tag "2000 m rower", "just above threshold", on "aerobic intervals near it" "aerobic intervals", on "limited by their cost" "1 to 2 a week"; on "A recreational beginner" "health, safety, adherence", on "easy continuous work or a light circuit" "easy continuous, light circuit", on "progress stalls if intensity never rises" "stalls without progression". A fifth row writes silently: "school squad of 40: circuit (a practical choice); poor individual control". On "sprint sports need an aerobic base too" v03's SIT strip returns below the rows; a chip "aerobic training is useless for anaerobic sports" writes and is crossed in red. On "anaerobic in the effort" the work slivers glow orange; on "aerobic in the recovery" the rest blocks glow blue. On "Refilling phosphocreatine" two rows of PCr gauges in the rests, "trained base" refilling faster than "untrained", illustrative; on "clearing by-products" H⁺ dots leave faster on the trained row. On "no method is best" amber hand tag "the sport and the season decide" (34 px). Hold one second.

### 6. what aerobic training won't do
> Aerobic training is the base of most programs, but it has limits. It doesn't build top speed or power, so a team player trained only aerobically is slow over the first ten metres. Lots of aerobic work alongside heavy lifting can blunt strength gains, so the two are usually kept apart in the week. Gains slow as an athlete gets fitter, so the stimulus has to get more precise. And a big aerobic score is a capacity, not a performance. Skill and tactics are trained separately.

Visual: board change to limits (solid from its first frame): four cards write one per cue (30 px). On "It doesn't build top speed or power" "1 not speed or power", a short 10 m sprint line with a lagging marker; on "can blunt strength gains" "2 interference with strength", a strength bar whose growth arrow shortens when a large aerobic bar sits beside it; on "kept apart in the week" the two bars separate onto different days of a week strip and the arrow lengthens; on "Gains slow as an athlete gets fitter" "3 gains slow with training age", a curve flattening; on "a capacity, not a performance" "4 capacity, not performance"; a chip "a big aerobic score means a good player" writes and is crossed in red; on "Skill and tactics are trained separately" a grey "next" chip. Hold one second.

### 7. memory
> Two things to remember. Continuous holds pace, fartlek varies it freely, intervals vary it by plan, and circuits vary the exercise. And easy training makes hard training possible.

Visual: board change to the memory card (solid from its first frame): the four traces small at the left beside week B's histogram, beside a dark-ink framed card (52 px): "Continuous holds pace; fartlek varies it freely; intervals vary it by plan; circuits vary the exercise" (written with "Continuous holds pace, fartlek varies it freely, intervals vary it by plan, and circuits vary the exercise") and "Easy training makes hard training possible" (written with "easy training makes hard training possible"). This card returns beside the key notes. Hold half a second.

### 8a. attempt one (method and trade-off)
> Two exam questions. First. A two-thousand-metre rower, eight weeks from a regatta, can hold race pace for ninety seconds but fades badly after that. And a soccer squad copes with the running, but is slow to react to sudden changes of tempo. For each, choose an aerobic method, justify it, and state one trade-off. Pause here to answer.

Visual: the board clears. `QuestionScene`: the card arrives in one move with its whole text (38 px), tagged "HSC-style question, written for HSCScience". Stem: "Athlete A: a 2000 m rower eight weeks from a regatta who can sustain race pace for 90 seconds but fades badly after that. Squad B: a soccer squad whose coach reports they cope with the running but are slow to react to sudden changes of tempo." Demand: "For EACH, recommend one aerobic training method, justify it against the demand, and state one trade-off of your choice. (4 marks)" Picture: the empty routine card. **The countdown ring is shown full from "Pause here to answer." and runs for 10 seconds.** The whole card stays on screen during the countdown and after it.

### 8b. feedback, item one
> The rower needs aerobic intervals near the threshold, like five five-minute efforts, to pile up time close to race intensity. The trade-off is fatigue, so one or two a week. The soccer squad needs fartlek, because it trains the changes of pace that are failing. The trade-off is that the load is hard to record. The classic mistake is more long, steady running for both.

Visual: `FeedbackScene`: the card shrinks to the top; the routine card fills two rows. A green-framed four-line answer writes one per cue (30 px): on "aerobic intervals near the threshold" "1 rower: aerobic intervals near threshold (e.g. 5 × 5 min)", lane 3's trace tiny; on "The trade-off is fatigue" "2 trade-off: high fatigue, 1 to 2 a week"; on "The soccer squad needs fartlek" "3 squad: fartlek, trains pace changes", lane 2 tiny; on "the load is hard to record" "4 trade-off: hard to quantify". On "classic mistake" a chip "more steady running for both" writes and is crossed in red, red hand tag "match the method to what's failing" (34 px). Settle one second.

### 8c. attempt two (the forward's base)
> Second. A rugby league forward's coach says aerobic training is a waste of time, because the game is all short, intense efforts. Explain why an aerobic base matters for this player. Pause here to answer.

Visual: the board clears. The card arrives in one move with its whole text (38 px), tagged "HSC-style question, written for HSCScience". Stem: "A rugby league coach says aerobic training is a waste of time for forwards, because the game is made of short, intense efforts such as tackles, hit-ups and sprints." Demand: "Explain why an aerobic base is important for this athlete. (4 marks)" Picture: the painted training field small with v03's SIT strip. **The countdown ring is shown full from "Pause here to answer." and runs for 10 seconds.** The whole card stays on screen during the countdown and after it.

### 8d. feedback, item two
> The efforts are anaerobic, but recovery between them is aerobic. A better base refills phosphocreatine faster, so power drops less across repeated efforts, and it clears by-products faster. It also lets the player recover between sessions, so they can absorb more of the hard training the game needs. The classic mistake is treating the energy systems as switches.

Visual: `FeedbackScene`: the card shrinks to the top; the SIT strip with trained and untrained rows returns. A green-framed four-line answer writes one per cue (30 px): on "recovery between them is aerobic" "1 anaerobic efforts, aerobic recovery"; on "refills phosphocreatine faster" "2 faster PCr refill: less power drop", the trained gauges refilling; on "clears by-products faster" "3 faster clearance of by-products"; on "absorb more of the hard training" "4 recover between sessions: more quality training". On "classic mistake" a chip "energy systems switch on and off" writes and is crossed in red, red hand tag "they work together" (34 px). Settle one second.

### 9. decision rule and handoff
> So keep most aerobic work easy, put a little near the threshold, and match the method to the sport's pattern. But energy supply isn't the whole story. Three more method families train range, strength and skill. How do flexibility, strength and skill training differ?

Visual: board change to the histograms. Three chips write on (38 px): "mostly easy" on "keep most aerobic work easy", "a little near threshold" on "put a little near the threshold", "match the pattern" on "match the method to the sport's pattern". On "energy supply isn't the whole story" the chips leave and the two histograms shrink to the left edge; v03's dial appears tiny and greys, tag "not about energy supply"; on "Three more method families" three empty cards stand at the right, writing on "range" "flexibility", on "strength" "strength", on "skill" "skill and tactics" (38 px), each with a grey "?". The "Next" chip slides in: "Next: how do flexibility, strength and skill training differ?" **This is the handoff frame; hms-y12-m4-v05 opens from it.** Hold half a second.

### 10. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Aerobic zone: from the aerobic threshold (~70% max HR) to the anaerobic (~85 to 90%).
2. Continuous: steady. Fartlek: varied pace. Intervals: set bouts. Circuit: stations.
3. Many adaptations are volume-driven, so most training sits low in the zone.
4. Hard every day: volume falls, tired sessions, more injury and illness.
5. Anaerobic in the effort, aerobic in the recovery: sprint sports need a base.

Memory card (the scene 7 card) beside the notes. Each bullet one line of at most 86 characters. Hold about 45 seconds in all.

## Practice question and feedback

Two unseen items (8a to 8d), "Pause here to answer." and a 10 s countdown each, cards on screen during and after; marks on the card; tag "HSC-style question, written for HSCScience". Neither the rower in 8a (the body names a rower row in one clause only, with no fading profile) nor the soccer squad's tempo problem nor the forward in 8c is worked in the body.

1. (8a, 4 marks.) Rower: aerobic interval training near the anaerobic threshold (for example 5 × 5 min, 2 to 3 min recovery), justified because the limiter is sustaining an intensity close to threshold beyond 90 s (1 mark); trade-off: high fatigue cost, one or two sessions a week, less total volume (1 mark). Squad: fartlek, justified because it trains the change of pace that is failing (1 mark); trade-off: hard to quantify or repeat the load across a squad (1 mark). Classic mistake crossed: adding steady continuous volume to both.
2. (8c, 4 marks.) The energy systems work together: efforts are anaerobic but recovery is aerobic (1 mark); phosphocreatine resynthesis is aerobic, so a better base restores it faster and limits power loss across repeated efforts (1 mark); faster clearance of by-products delays their effect on contraction (1 mark); a base aids recovery between sessions, allowing more high-quality anaerobic training (1 mark). Classic mistake crossed: the "switch" model of energy systems (a course-brief exam trap).

Feedback spoken lengths about 27 s (8b) and 25 s (8d) by script; time the exact audio.

## Numbers or facts to verify

Self-check (24 Nov). The Codex science check must confirm each before voicing. No official figures.
- **Thresholds (2).** Aerobic training threshold about 70% of maximum heart rate; anaerobic threshold often about 85 to 90% in trained athletes; rules of thumb that vary between individuals and move with training (the site's own caveat, spoken).
- **Methods (3).** Continuous 20 to 90 min at 70 to 80%; fartlek 30 to 60 min with irregular surges; aerobic interval 4 to 6 × 4 to 8 min near the anaerobic threshold with 2 to 3 min recovery; circuit 8 to 12 stations, 30 to 60 s each (the site's table).
- **Volume-driven adaptations (4).** Capillary density, mitochondrial number and size, aerobic enzymes, plasma volume, stroke volume (detail in v08).
- **Hard-every-day effects (4).** Reduced total volume, degraded quality of hard sessions, raised injury and illness risk; the illustrative weeks total 300 minutes each (A: 300 hard; B: 225 + 60 + 15). Checked.
- **Aerobic base (5, 8d).** Phosphocreatine resynthesis after maximal effort depends on aerobic metabolism; aerobic fitness speeds clearance of metabolic by-products.
- **Interference (6).** High aerobic volume alongside heavy resistance training can blunt strength and power gains (the interference effect).
- **No em dashes** in this file (searched by script).

## Memory aid check

- **The four clauses.** Assumption: each method is described in its typical form; a structured fartlek drifts toward intervals, and a heavy circuit becomes resistance training (scene 3 says so).
- **"Easy training makes hard training possible."** Assumption: the goal is endurance performance across weeks; a beginner improves on almost any stimulus, so the split matters most for trained athletes.

## Narration length estimate

Revision 1 count (24 Nov; by script with the build parser rules: only lines starting "> ", joined with a space, bold markers removed): **6122 characters**, 13 scene files. At 13.3 characters per second the speech is about 460 s; add 26 s of padding (2 s per scene) and 74 s of stated holds, settles, the two 10 s countdowns and the rest of the quiet notes hold: **about 560 s**.

| Scene | Characters |
| --- | --- |
| 1. hook (every session should hurt?) | 330 |
| 2. two thresholds bound the aerobic zone | 880 |
| 3. four methods, four clauses | 934 |
| 4. why most training is easy | 815 |
| 5. which method fits which sport | 895 |
| 6. what aerobic training won't do | 476 |
| 7. memory | 179 |
| 8a. attempt one (method and trade-off) | 335 |
| 8b. feedback, item one | 370 |
| 8c. attempt two (the forward's base) | 203 |
| 8d. feedback, item two | 364 |
| 9. decision rule and handoff | 266 |
| 10. key notes (quiet, hold about 45 seconds) | 75 |

Reserve cuts: (1) scene 5, the recreational row spoken (keep it silent); (2) scene 2, "That's v-three's anaerobic work." (3) scene 6, the training-age limit (keep the card silent). Do not cut below 5,500 without replacing content.

## Assets

Have: HMS painted, inspected 24 Nov: `hms-running-shoe-calendar-v1.png`, `hms-track-finish-line-v1.png`, `hms-empty-training-field-v1.png`, `hms-heart-cutaway-v1.png`; Biology, inspected 24 Nov: `y11-red-cells-capillary-v1.png`, `b6a-mitochondrion-v1.png`; HMS approved or pending, not yet painted (chosen from briefs): `hms-dawn-park-mats-v1.png`, `hms-heart-rate-watch-v1.png`, `hms-cycle-ergometer-v1.png` (v02, pending). Coded: week strip, eight-week axis and lines, `ThresholdBand`, four method traces, `IntensityHistogram` (two weeks, volume meters), adaptation chips, risk gauge, sport rows, PCr gauge rows, limit cards, method-family cards (handoff), question cards, countdown. Reused coded: v03's `DemandProfile`, session strips, `WorkRestDial`; Year 11's `ThresholdCurve`. No people.

Need: nothing new.

Kit gaps: `ThresholdBand` and `IntensityHistogram` in `hms-shared`.

## Codex learning review and science check brief (HMS-Y12-B04)

- **Learning review:** trace from m4-v03 as a student who did not watch our Year 11 videos. Is the threshold band clear before the methods are placed on it? Are the four methods distinct by one clause each, and does the circuit's relabel to "resistance" land? Do the two histograms and their eight-week lines answer the hook causally (volume, tired quality, risk)? Does the routine produce a conditional verdict, and is "anaerobic in the effort, aerobic in the recovery" shown, not just said? Are both attempts unseen?
- **Science check:** every item in "Numbers or facts to verify", especially the threshold percentages and the aerobic dependence of phosphocreatine resynthesis.

## Codex error-check brief (HMS-Y12-B04, after the reviews)

Error-only: every quoted cue appears word for word in its scene in spoken order; the histogram minutes total 300 each; the opening matches hms-y12-m4-v03's handoff frame and the closing matches hms-y12-m4-v05's route opening (the intensity histograms give way to three more method families); no brands or logos; no people, hands or faces; no "Year 11" or "Year 12" label on screen (narration only); no em dash, no U+2061; no module number or course label on screen.

## YouTube metadata (draft)

- Title: "Aerobic Training: Continuous, Fartlek, Interval and Circuit, and Why Most Training Is Easy | HSC Health and Movement Science"
- Description:

"Full lesson, notes and practice questions: https://hscscience.com.au/subjects/health-movement-science/year12/module4/lesson04.sa.html

Why do endurance athletes do most of their training easy, and which aerobic method fits which sport? The aerobic training threshold and the anaerobic threshold; continuous, fartlek, aerobic interval and circuit training, each in one clause; why many endurance adaptations depend on volume, and what happens when every session is hard; assessing each method for a range of sports; why sprint sports still need an aerobic base; and what aerobic training will not do. Includes two exam-style questions with brief feedback. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Health and Movement Science 11-12 (2023 syllabus), Year 12: Training for improved performance.
Syllabus content (NSW Health and Movement Science 11-12, 2023):
"Assess the types of training and training methods and their relevance for a variety of sports"
"aerobic training, including continuous, fartlek, aerobic interval, and circuit training"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/pdhpe/health-and-movement-science-11-12-2023

Previous: How do anaerobic training methods differ?
Next: How do flexibility, strength and skill training differ?

#HealthAndMovementScience #HSC #HSCScience"

## Open decisions

- None. No new plates; no site corrections.

## Build ids

Lesson key `hms12b04`; folder `src/explainer/lessons/hms-y12-m4-v04`; build folder `docs/production/claude-pm/lessons/hms12b04`. Imports `hms-shared` (`DemandProfile`, `WorkRestDial`, `ThresholdCurve`; new `ThresholdBand`, `IntensityHistogram`).

Scene headings (13): hook, thresholds, four-methods, mostly-easy, relevance, limits, memory, attempt, feedback-one, attempt-two, feedback-two, handoff, key-notes.

Holds and transitions as hms-y12-m3-v01. Every teaching scene is a board change.

## Review notes (author, not learner copy)

- **Teaching checks.** Causes: why stimulus below the floor fails and above the ceiling cannot last (2); why each method's arrangement gives its strength and weakness (3); why volume-driven adaptations need repeatable intensity and why daily hard training lowers volume and quality (4); why recovery between anaerobic efforts is aerobic (5); why aerobic volume can blunt strength (6). Attention: a runner whose logic ("races hurt") sounds right and fails. Visual medium: a shaded zone with two moving thresholds; four traces on one scale, one relabelling to "resistance"; two weeks of equal minutes whose eight-week lines diverge; PCr gauges refilling faster on a trained row. Apply: an unseen rower and squad (8a); an unseen sceptical coach (8c). Remember: the four clauses; easy makes hard possible.
- **Overlap.** v05 completes the dotpoint; v06 takes thresholds as a principle; v08 takes the adaptations; v09 and v11 take interference in session and year planning.
- **No em dashes** in this file (searched by script).
