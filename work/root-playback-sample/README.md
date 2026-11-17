# Root decoded-frame playback samples (14 November 2026)

Made by `python -I work/root-playback-sample/sample-sheets.py <key> <rev> <scene list>`: one frame per second, decoded from the exact master, across each scene named in the build notes' "check at playback speed" list, tiled 16 per sheet with time and frame stamps.

- math-a12-d03 v3 (SHA c8ff9d3e...): scenes 1, 2, 3, 4, 5, 6, 9, 10. Root inspected: the panel grows into the square graph, the counter and stopwatch run with the navy dot, the dashed arrow lands on (4, 1.39), the secant stops with the zoom, the dot trail lands on 1/x, the tangent is carried through the fold, the k slider slides up with the readout fixed at 0.500, and the crossed mistake card appears. No clipping, overlap, blank or frozen frame. Pass.
- math-a12-d04 v3 (SHA d1250de9...): scenes 1, 3, 4, 7, 8, 9. Root inspected: the PitchMeter ride (110 to 220 to 440 Hz), the stretch carrying the tangent triangle (rise 1.00 to 1.44, gradient 0.500 to 0.721), the base slider swing towards a = 1 (gradient readout to 10.49, "1^y = 1 for every y: no log1" card), and the worked example plan and substitution. No clipping, overlap, blank or frozen frame. Pass.
- math-a12-d14 v3 (SHA e94055ab...): scenes 1, 2, 3, 4, 5, 6, 7, 13, 14. Root inspected: the d13 frame and reframe, the car's drive with the close-up turning with it, the night tint and beam on "headlights", the dashed parallel lines and the slide onto the point, the across line and normal, the beam running to the second meeting, the scene 3 to 5 graph moves, the rise/run quarter turn and the -1/m label swap, the scene 5 push into the car, the scene 6 drive to the top of the bend, flat beam, upright normal and the never-meets arrow, the scene 7 drive to (1, 0), the scene 13 swap to y = x and the corner stubs, the split into d15's panels and the notes cross-fade. No clipping, overlap, blank or frozen frame. Pass.
- math-a12-i10 v3 (SHA 9ff036aa...): scenes 1, 3, 4, 5, 7. Root inspected: the lift ride (net change back to 0, floors travelled to 4.00) and the lower arch flipping up, the flip on "sign removed", the reverse flip and the across-the-axis flip, the three sign tests, the sketch drawing and the middle piece flipping, and the car out to 36 m and back to 32 m against the v-t fill and marker. No clipping, blank or frozen frame. Pass. Polish notes, not defects (no re-render): in scene 4 the lift plate sits over the left edge of the flipped 16/3 piece; several set-up stretches hold for 10 to 17 s while the task is read (scene 1 opening, scene 5, scene 7 before the car moves).

## math-a12-d15 v3 (SHA 18af71f3...), root, 15 Nov
Scenes 1 to 6, 8, 12, 13, 15 sampled at 1 fps; every sheet inspected. Pass. The d14 handoff fades into the two tracks; both rides and readouts follow the board (glide, then the snap at the corner); both zooms climb to x40 with the formula clear of the leader (held moment 35 s); secant stops match the spoken values; the scene 4 swing and the scene 5 step land; the scene 8 working builds one line at a time; the countdown runs 10 to 1 from "Pause here to answer."; feedback 2 keeps "one tangent, gradient 2" inside the graph; the key notes fade into the d16 handoff. Font-scan flags (4 frames, scene 9 "meet/match" lines) are bold Inter t/l false positives, checked on the full frame.

## math-a12-i12 v2 (SHA ecbad832...), root, 15 Nov
Scenes 2, 3, 4, 5, 7, 8, 9, 11, 14, 16 sampled at 1 fps; inspected. Pass. Scene 2 half-turn and soil cut/fill land; scene 3 mirror and bridge strips; scene 4 held moment (about 161 s): "area > 0: the soil still moves" sits under the mini graph, clear of the axis; scene 5 ledger ticks 1, 2, 2, 2, 1; scene 7 n steps 1, 2, 4, 8 and the estimate stays above ln 3; scene 8 input types, "working..." is short, log(3) then "log means ln"; feedback 2 working builds line by line beside the arch. Picture and font scans 0 flags.

## math-a12-i14 v2 (SHA 74770da4...), root, 15 Nov
Scenes 1, 2, 4, 5, 6, 8, 10, 13, 15 sampled at 1 fps; inspected. Pass. Scene 2 shows the re-voiced "measured from a fixed origin O" card; scene 4 held moment (about 136 s): "same signs: speeding up" appears at t = 2.9 (v -2.97, a -0.6) and fades before the jump to t = 1, then "opposite signs: slowing down" with v > 0, a < 0; scene 8 snow depth rises to 200 cm at day 10; feedback 2 working builds one line at a time and matches the curve. Picture and font scans 0 flags.

## math-a12-i11 v2 (SHA b5623d4d...), root, 15 Nov
Scenes 1 to 5, 8, 11, 12, 13 sampled at 1 fps; inspected. Pass. i10 handoff fades to the pool plate, then the cutaway; strips refine 10 to 40 (sum 1.70) and the readout sweeps to height 1.00, length 2.72, water 1.72; the reflection in y = x and e - 1 working land; rectangle e x 1, water e - 1, concrete tint; scene 5 strips signed right +0.75 / left -0.75 and -16/3; feedback 2 area = 24 - 7/ln 2 (about 13.90) with the crossed 7/ln 2 slip; key notes from the i12 handoff. Picture and font scans 0 flags.

## math-a12-i13 v2 (SHA see master-checks), root, 15 Nov
Scenes 1 to 6, 9, 11, 13 sampled at 1 fps; inspected. Pass. Time marker sweeps 8 am to 2 pm with the unit's readout reaching 4.0 kW; strips 12/24/48 settle on 30.55 and the meter reaches 30.6 kWh (96/pi); dam: net 12 ML, "-4" flips to "4 out", total 20 ML; channel layers merge into the half (2/3) and double to 4/3 m^2; feedback 1 36 kg with the crossed 54 kg slip; countdown from "Pause here to answer."; feedback 2 12 cm^2; recap fades to i14's opening frame. Picture and font scans 0 flags. Title shortened to 84 characters (YouTube limit), see the design file.

## math-a12-f01 v2, root, 15 Nov
Scenes 1, 2, 4, 5, 6, 7, 10, 13, 14 sampled at 1 fps; inspected. Pass. i14 handoff dissolves into the position cards (brief text overlap at frame 0 is the intended cross-fade); scoreboards and cards build 1, 3, 5, 7; partial-sum columns build to 30 with the scoreboard; sigma start/stop/rule write in order, k row 1 to 4; scene 7 k = 3 to 7 squares 9 to 49 and "five terms, not seven" (the LAST TIME card sits tight beside the k row, no overlap); feedback 2: 8, 6, 4, 2, S4 = 20 and sum (10 - 2k) = 20. Picture and font scans 0 flags.

## math-a12-f02 v1, root, 15 Nov
Scenes 1, 2, 3, 4, 6, 8, 12, 13, 14 sampled at 1 fps; inspected. Pass. Chair stack and +6 arcs build 80, 86, 92, 98; pull-back to the 2 m door; cards morph to a + (n-1)d and the stack runs to 20 (readouts 104, 140, 170, 194 match 80 + 6(n-1)); 150 cm gives n = 12 2/3, the 12th and 13th chairs straddle the line; feedback 2 4d = 16, d = 4, a = 2 step by step. First render: no prior captions (root check-package allows it). Picture and font scans 0 flags.

## math-a12-f03 v1, root, 15 Nov
Scenes 1, 2, 3, 5, 7, 8, 12, 13, 14 sampled at 1 fps; inspected. Pass. Tin stack pairing arcs 1 + 15, 2 + 14 = 16; scene 7 columns to the 500 line, S13 = 442 holds, n > 13.85 so 14 terms; scene 8 n(12 - n) = 32 gives n = 4 or 8, points rise to 36 and fall back to 32; feedback 2 2n^2 > 200, 11 terms, crossed "10 terms" (S10 = 200); handoff seedlings and bars arrive day by day (50, 80, 110). Picture and font scans 0 flags. (Render completed; its post-check was run by hand after a driver edit broke the running script.)

## math-a12-f04 v1, root, 15 Nov
Scenes 1, 3, 4, 5, 7, 8, 12, 13, 14 sampled at 1 fps; inspected. Pass. Seedling bars grow day by day with the total column passing the 1,200 line on day 8; a12 = 380, S12 = 2,580 with the crossed "12 x about 100" guess; theme park a_n = 3500n + 58 500 with both checks, then S10; machine output ring slides to week 61 (zero), negative weeks crossed, weeks 1 to 60 shaded; feedback 2 n - 1 > 20, n > 21, bars day 20 = 104 and day 21 = 100. Picture and font scans 0 flags.

## math-a12-f05 v1, root, 15 Nov: HOLD
Scenes 1, 3, 4, 5, 7, 8, 12, 13, 14 sampled. Scene 7 (4:09 to 4:16): the "log 2 > 0: sign stays" note touches the ")" of the log inequality (checked on the full-size frame at 252.5 s). Everything else passes (fold readouts, r slider to -2 and r = 0 test, n > 9.38 so the 10th term, feedback 2 r = 3 or -3). Source fixed; v2 to render.

## math-a12-i01 v2, root, 15 Nov
Scenes 1, 3, 4, 5, 8, 9, 14, 15 sampled at 1 fps; inspected. Pass. Three shoots grow with parallel stubs and the board; +30 cm gaps; "66 cm at 4 weeks" padded and clear of the curves (full-size check at 34 s); scene 8 C = 4 through (1, 5); held moments (about 330 and 334 s): the C slider and its row sit below the "time t (weeks)" title, "66 cm at 4 weeks" has its pad with both dashed lines under it, C = 50 and the crossed "C = 66" slip. Picture and font scans 0 flags.

## math-a12-f05 v2, root, 15 Nov
Only change from v1: scene 7 note x 700 -> 736 (commit d2e0b3ff). Scene 7 re-sampled at 1 fps and the 252.5 s frame checked at full size: "log 2 > 0: sign stays" now sits clear of the ")" and of the graph's 3000 label. All other v1 findings (pass) carry over. Picture and font scans 0 flags.

## math-a12-f06 v1, root, 15 Nov
Scenes 2, 3, 5, 6, 7, 12, 13, 14 sampled at 1 fps; inspected. Pass. Tile piles double and slide one square, strikes cancel in step to 16 - 1; the symbolic rows line up and strike to x^n - 1; the two forms with the n = 4 brackets; the chessboard fills square by square to 2^64 - 1 = 18 446 744 073 709 551 615; feedback 2 r^3 = 8, r = 2, a = 3, S8 = 3(2^8 - 1). Picture and font scans 0 flags.

## math-a12-f07 v1, root, 15 Nov
Scenes 1, 3, 5, 6, 9, 13, 14, 15 sampled at 1 fps; inspected. Pass. Ball run with bounce/distance readout to 384 cm (128 + 2 x 128); r slider: r = -0.86 totals settle near 0.54, r = -1 bounces between a and 0, |r| >= 1 note; 0.2727... = 27/99 = 3/11 with the check; feedback 2 |2x| < 1, -1/2 < x < 1/2. Picture and font scans 0 flags.

## bio-m8-g03 v1 (SHA a5c75434...), root, 15 Nov
Whole master sampled every 3 s (sample-any.py); all 10 sheets inspected. Pass. Three-card opening; Q1 question with 10 s countdown, loop builds stimulus to response in order, cut-link graph, crossed "response: the heart beats faster" mistake; Q2 glucose/insulin graph with peaks 30 min 7.6 and 45 min 62, 7.2 to 5.0 fall, 4.6 dip and 4.9 recovery, crossed "insulin breaks down glucose"; Q3 negative or positive with countdown, R (ethylene) answer, the student's Q corrected, crossed "positive = goes up"; how-to-start table and key notes. Rendered 9 Nov; held only on native playback.

## bio-m8-p02 v1, root, 15 Nov: HOLD
Whole master sampled every 3 s; sheets 1 to 6 inspected before the defect: "more fields" overlaps "like this" at about 4:06 to 4:12 (checked full size at 251 s). Everything seen before that passes (potometer parts, set-up, plan, 21 mm / 5 min = 4.2 mm per minute, results table means 4.0 and 9.4, spread 0.4, gap 5.4). Fix committed; v2 to render and re-check.

## bio-m8-b06 v1, root, 15 Nov: HOLD
Sheets 1 to 6 inspected (to 4:45): pass apart from the 'thin mucus' leader crossing 'cells lining the airway' at about 2:00 to 2:06 (full size at 123 s). Fix committed (label fades before the callouts); v2 to render and re-check in full.

## bio-m8-b07 v1, root, 15 Nov: HOLD
Sheets 1 to 6 inspected (to 4:45): the 5.8% label is crossed by the line (284 s) and 'smoke in, every day' fades under the new footnote pill (174 s). Fixes committed (label below the line at size 32, between the line and the axis; hand label fades before the pill); v2 to render and re-check in full.

## math-a12-f08 v1, root, 15 Nov
Scenes 1, 2, 4, 5, 6, 7, 12, 13 sampled at 1 fps; inspected. Pass. Town bars grow x1.05 to 26 802 after 6 years (the crossed 25 526 guess, "only 5 steps"); trailer V(5) about $13,311, 0.85^n < 1/3, n > 6.76 so 7 years; geometric vs arithmetic trailers, arithmetic stops at $0 at 6 2/3 years; feedback 2 S_inf = 80 000 / 0.05 = 1 600 000 t with the crossed 84 211 t slip. Ink check clean (13 Nov). Title shortened to 95 characters (5db5d119).

## math-a12-f09 v1, root, 15 Nov: HOLD
Scenes 2, 4, 5, 7, 8, 9, 14, 15 sampled. Feedback 2: the GP note sits on the numerator for about 1.5 s (395.9 s, full size). All else passes (r = 0.006, +$180 then -$600 to $29,580, interest parts 180.00 to 5.80 with the short $372.58 last bar, home loan halfway near year 20, check n = 12 $41,412.71). Fix committed; v2 queued in the chain.

## math-a12-f10 v1, root, 15 Nov
Scenes 1, 3, 5, 6, 7, 8, 12, 13 sampled at 1 fps; inspected. Pass. $2,500 a month pays off in 22 years 1 month (265 repayments, final $540.57), "> 5 years, about 8 years sooner"; term curve readouts $1,850 46 years to $1,700 79 years, interest-only $1,666.67 never falls; 6% gives 44 years 10 months, 6.5% never (interest $2,166.67 > repayment); feedback 2 about $3,160 (exact $3,163.17), crossed "2 x $2,147.29". Package check initially tripped on f09 s3.tsx edited mid-render (S14 only); f10 imports only F09FinalFrame, and master frames 0 and 30 match a fresh render within codec noise; snapshot noted. Scans 0 flags.

## math-a12-f11 v1, root, 15 Nov
Scenes 1, 5, 6, 7, 9, 10, 12, 13 sampled at 1 fps; inspected. Pass. Bike race to 60 repayments with interest readouts, crossed "50 repayments" guess; repayment dial $472.00 to $480.78 (48 repayments) with totals; feedback 2 (1.005)^n = 500/(500 - 90) = 50/41, n = log(50/41) / log 1.005 about 39.79 (full-size check), so 40. Picture-scan "possible-blank" at 263.4 s is the memory-aid card cross-fading into attempt 1 (false positive). Fonts 0 flags.

## math-a12-f12 v1, root, 15 Nov: HOLD
Scenes 1, 3, 4, 6, 7, 11, 13, 14 sampled. Feedback 2: '+$400' stamps overlap A1/A2/A3 results (354 s full size). All else passes (annuity sort bins, apartment table to $603.01, fund $1,050.91 withdrawals to $0 after 120, A3 = $1,206.01). Fix waits for f13's render (shared file), then v2.

## math-a12-f13 v1, root, 15 Nov
Scenes 1, 2, 5, 6, 8, 11, 13, 14 sampled at 1 fps; inspected. Pass. Deposit blocks (glow on 60, 59, 1; 200 x 1.005 = $201.00); FV formula with condition ticks on the timeline; 30-year curve $240,644.24 = $108,000 put in + $132,644.24 earnings, earnings overtake at deposit 316; feedback 2 FV = 250 x (1.003^24 - 1)/0.003 = $6,211.63, interest $211.63. Opening uses F12FinalFrame from f12 s3.tsx, byte-identical to the frozen input. Scans 0 flags.

## math-a12-f14 v1, root, 15 Nov
Scenes 1, 3, 5, 6, 7, 8, 11, 13 sampled at 1 fps; inspected. Pass. Fair-test sliders against the dashed ghost: $5,000 start $20,298.05 (start earns $6,353.20); double rate 9.6% $22,987.16 (x1.13); more years 10 y $46,089.59, 20 y $120,502.51; rate and time 30 y 9.6% $622,923.97 (x2.59); 40 deposits of $9,200 at 7% $1,836,643.03; feedback 2 A $184,816.36, B $131,103.48. "put in: $X" labels sit on the dashed line with a paper halo that breaks the line (legible; accepted ink-check halo, checked full size at 157 s). Scans 0 flags.

## math-a12-f15 v1, root, 16 Nov
Scenes 1, 3, 4, 6, 7, 10, 12, 14 sampled at 1 fps; inspected. Pass. Goal $6,000 in 2 years: factor (1.005^24 - 1)/0.005 = 25.432 (full size at 84 s), M = 6000 / 25.4320 = $235.92; n from (1.005)^n = 1.15, n = log 1.15 / log 1.005; payments stop: stage 1 $6,357.99, stage 2 x 1.005^12, final $6,750.14; feedback 2 $24,012.21 x 1.04^5 = $29,214.53; key notes and suitcase memory aid. Scans 0 flags. Ends on the statistics s01 opening (red die), per design.

## math-a12-f09 v2, root, 16 Nov
Only change from v1: feedback 2 GP note leaves before the fraction (3bcb24d2). Scene 14 re-sampled and frames at 394, 395.9 and 397.5 s checked at full size: the note is gone before 1.004^n - 1 writes on; no overlap. All other v1 findings (pass) carry over. Picture and font scans 0 flags.

## math-a12-f12 v2, root, 16 Nov
Only change from v1: feedback 2 stamps raised 20 px (chain 3 commit). Frame at 354 s checked at full size: +$0.00/+$2.00/+$4.01 and +$400 stamps sit on the calendars, clear of A1 = $400, A2 = $802, A3 = $1,206.01. All other v1 findings (pass) carry over. Picture and font scans 0 flags. (Chain 3's post-check for f12 broke after a mid-run driver edit; render was complete; post-check run by hand, rc 0.)

## bio-m8-b06 v2, root, 16 Nov
Whole master sampled every 3 s; every sheet inspected. Pass. Same frames as v1 (14,450); v1 captions and metadata carry over. Ink re-check 0 runs. "cells lining the airway" fades before the mucus and cilia leaders (checked full size at 120.5 s); silicosis dust starts below the heading. CF chain, silicosis, iron-deficiency anaemia, melanoma, multifactorial diabetes, two exam questions with countdowns, the disease-sorting flow and key notes all read cleanly.

## bio-m8-b07 v2, root, 16 Nov
Whole master sampled every 3 s; sheets inspected. Pass. 14,469 frames (equal to v1); v1 captions and metadata carry over. Ink re-check: only accepted items. Ban line clear of the AIHW caption; repair enzyme clear of "a mutation"; "coronary artery" above the heart; risk bars clear of the strip; smoke wisps above "a parent's smoke"; "2025: 5.8% of adults" below the line; "smoke in, every day" gone before the footnote; UV feedback and the four-step closing flow read cleanly.

## bio-m8-b08 v2, root, 16 Nov
Whole master sampled every 3 s; sheets inspected. Pass. 14,317 frames (equal to v1); v1 captions and metadata carry over. Ink re-check: only accepted items. "too much" left of the pancreas; "smaller, paler cells" above the dashed leader; "usual glucose range" under the band; "glucose stays high" above the chart; insulin resistance, beta-cell and risk-factor scenes read cleanly.

## bio-m8-b09 v2, root, 16 Nov
Whole master sampled every 3 s; sheets inspected (cell cycle, p53, brakes, melanoma, benign/malignant, metastasis, feedback, key notes). Pass. 15,167 frames (equal to v1); v1 captions and metadata carry over. Ink re-check: only accepted items. Phase letters above the stations; the dashed path to the metaphase cell dips under "divide"; "breaks through" and "lymph vessel" now off the tissue plate at the vessel's end; "links snap" above the vessel with its pointer; the feedback mistake pill sits under the answer box.

## bio-m8-b10 v2, root, 16 Nov
Whole master sampled every 3 s; worked-example, three-measures, crude/age and collect-represent sheets inspected. Pass. 14,316 frames (equal to v1); v1 captions and metadata carry over. Ink re-check: only red strikes. Values: incidence 160/80,000 = 200 per 100,000 per year; prevalence 4,400/80,000 = 5.5% = 5,500 per 100,000; mortality 16/80,000 = 20 per 100,000 per year with the crossed 16/4,400. Givens clear of the b08 pill; "not the people who had it" clear of the amber box; AIHW pill under the panel heading; "line graph: change over time" below the AIHW card.

## bio-m8-b11 v2, root, 16 Nov
Whole master sampled every 3 s; sheets inspected; survival chart checked full size at 234 s. Pass. 14,694 frames (equal to v1); v1 captions and metadata carry over. Ink re-check: only red strikes and map labels. Survival labels now sit beside their curves in matching colour (never smoked grey, stopped at about 30 teal, kept smoking amber), each clearly naming its line; Bradford Hill pill beside the chip; dose-response arrow ends under the axis title; cigarette pack clear of the questionnaire pill.

## bio-m8-g01 v2, root, 16 Nov
Whole master sampled every 3 s; sheets inspected; confounder triangle checked full size at 400 s (links start below "possible confounders"). Pass. 14,997 frames (equal to v1); v1 captions and metadata carry over. Ink re-check: only givens underline, "38" and red strikes. Values: incidence P 550, Q 700; mortality P 300/1,200,000 x 100,000 = 25, Q 54/150,000 x 100,000 = 36; claim not supported per 100,000.

## bio-m8-g02 v2, root, 16 Nov
Whole master sampled every 3 s; sheets inspected including the narrowed four-card strip. Pass. 14,465 frames (equal to v1); v1 captions and metadata carry over. Ink re-check: only accepted items. Judgement texts fit their cards (four lines or fewer); "what the evidence shows" inside its border; "≈ 7" clear below the widened tag; "+2" inside its highlight. Values: Region A 38 to 47 (+9), Region B 38 to 40 (+2), about 7 points linked to the campaign, crossed "raised returns by 9 points".

## bio-m8-p02 v2, root, 16 Nov
Whole master sampled every 3 s; sheets inspected; hook zoom checked at 4, 8 and 11 s. Pass. 14,723 frames (equal to v1); v1 captions and metadata carry over. Ink re-check: only accepted items. Hook: the plant and stand fade out below the heading band during the zoom, so title and kicker stay clean (reads as a crop of the stand, acceptable). Teal ring passes below "70"; inset gone before "steady rate first"; the leaf/stem label clear; "more fields" left of the dashed circles. Values: 21 mm / 5 min = 4.2; means 4.0 and 9.4; spread 0.4; gap 5.4; lower 20, upper 3.

## bio-m8-g03 v2, root, 16 Nov (replaces public v1 vFEJi_eng3g)
Whole master sampled every 3 s; sheets inspected. Pass. 14,188 frames (equal to v1); v1 captions and metadata carry over. Ink re-check after the fix: the four collisions are gone (banana clear of "Classify it" and "R (ethylene)"; receptors/response labels off the ring arcs); only red strikes, the 1 s glucose dots passing "muscle"/"liver", the givens underline and small edge proximities remain.

## math-a12-s01 v1, root, 16 Nov
Scenes 1, 3, 4, 6, 7, 10, 12, 13 sampled at 1 fps; inspected. Pass. Opens on f15's die chart (38 fours, "Next: is the die fair?") and cross-fades to its own chart; 200-roll run with the readout and replay; relative frequencies 0.14 to 0.19, sum 1; data vs fair model (0.19 vs 1/6); three-coin distribution 1/8, 3/8, 3/8, 1/8 with the crossed "1/4 each"; feedback 2 bag of counters: 1/6, 4/6, 1/6, crossed "1/3 each"; handoff to s02's uniform die. Some transitional moments are sparser than the 16-frame sheet (feedback 2's first 3 s, the last 4 s of the handoff card) but within the standard. Picture and font scans 0 flags. Design call: the die stays red (continuity with f15).

## math-a12-s02 v1, root, 16 Nov
Scenes 1, 4, 7, 9, 12, 13 sampled at 1 fps; inspected. Pass. Calendar flips through the year (365 pages; 12 for the 1st to 28th, 11 for the 29th and 30th, only 7 for the 31st); two-dice grid of 36 equally likely cells, crossed "21 unordered pairs, equally likely"; bars split to 1/48 and the runaway total; feedback 2 spinner remainders 2/8, 3/8, 3/8, not uniform. Scan flag at 354.4 s is the feedback-to-"Last one" cross-fade (false positive). Scene 4 and scene 7 hold some open space while the argument builds; within the standard.

## math-a12-s03 v1, root, 16 Nov
Scenes 1, 4, 6, 7, 9, 13 sampled at 1 fps; inspected. Pass. Spread: x - mu = -1.7, -0.7, 0.3, 1.3 weighted to 0, so squares 2.89, 0.49, 0.09, 1.69; insurer: the $8,000 weight slides out and the balance point follows $50 to $210, E(C) = $210; centre-and-spread summary with E, Var and sigma, the mu +/- sigma bracket and the cat/insurer callbacks; fulcrum at 1.7. Scan flag at 349.9 s is the feedback-to-"Last one" cross-fade (false positive).

## bio-m8-b12 v1

First release (16 Nov). Whole master sampled in 3 s windows (11 sheets, work/root-playback-sample/bio-m8-b12-v1). Hook builds pen, question mark, islet to muscle signal, then the type 1 / type 2 split with the key and jammed-lock icons. HbA1c scene: glucose dots attach to red cells, the meter reads 8.1 % against the typical target band, "HbA1c treats diabetes" is crossed. Step-up ladder fills, the insulin chip docks and "replaces the signal" lands. GLP-1 checks tick in order, the evidence frame rows fill. Both attempts hold the full card with "Pause here to answer." and the 10 s countdown; feedback 2 rows fill one per cue. Key notes hold to the end. Captions exported from the playback lesson (161 cues, 15,292 frames equal to master). Build ink check: only deliberate red strikes plus the known underline-descender graze on feedback 2 (same as live g02/g03). Pass.

## bio-m8-b13 v1

First release (16 Nov). Whole master sampled in 3 s windows (10 sheets). "Knowing isn't doing": the does-bar rises as shade, hats and UV alerts arrive, "a memorable ad means it worked" crossed; the evidence ladder lights process, impact, outcome in turn with the TV, hat and skin plates on the timeline. Both attempts hold with the 10 s countdown; feedback 1 frames "promising; outcome evidence still to come" and crosses "melanoma has been prevented". Notes hold. Captions from the playback lesson (153 cues, 14,214 frames equal to master). Build ink check: deliberate strikes only. Pass.

## bio-m8-b14 v1

First release (16 Nov). Whole master sampled in 3 s windows (11 sheets). PGT scene builds IVF dish, blastocyst labels, five embryos tested, one chosen, "no embryo's DNA is changed", "selection, not engineering", and the prevented strip lights "an affected birth". Attempt 2 (Huntington's) holds with the countdown; feedback fills (a) and (b), limits, "helps some families, not most", crosses the gene-therapy claim. Captions from the playback lesson (160 cues, 14,892 frames equal to master). Build ink check: deliberate strikes only. Pass.

## bio-m8-b16 v1

First release (16 Nov). Whole master sampled in 3 s windows (11 sheets). Eye plate stays one system: rays meet in front of or behind the retina per fault, the cornea-curve pair for astigmatism, reading glasses for presbyopia, the cloudy lens tile and "light is scattered" for cataract, and the light-path strip chips change per scene. Attempt 1 holds with the countdown; feedback fills (a), (b), frames "glasses or contacts, for now" and crosses "choose laser surgery because it's permanent". Captions from the playback lesson (167 cues, 14,650 frames equal to master). Build ink check: deliberate strikes only. Pass.

## chem-m8-c13 v1

First release (16 Nov). Whole master sampled in 3 s windows (11 sheets). The factor checklist lights one factor per stage and ticks it; supply builds willow bark to salicylic acid, crosses "enough for world demand", then the crude-oil route with the barrel circled; equilibrium compares acid and anhydride. Feedback 2 rows fill one per cue with the widened heads clear of the answers, and "advantages and disadvantages, no verdict" is crossed. The closing checklist brackets "verdict ... with its condition" and ends on "End of Module 8 Chemistry". Notes and memory aid hold. Captions from the playback lesson (173 cues, 15,340 frames equal to master). Build ink check: deliberate strikes only. Pass.

## math-a12-s04 v1, root, 16 Nov

Whole master sampled in 3 s windows (11 sheets, sample-any). Histogram estimate: half-class 25 tinted with "assume: spread evenly in the class", (20 + 25)/200 = 0.225 framed, "(20 + 50)/200 = 0.35" crossed ("counts the whole class"), exam-assumption chip. Shrinking window around 0.35 s: widths 0.1, 0.01, 0.001 with probabilities 0.35, 0.035, 0.0035 tabled "÷ 10, ÷ 10: in step". Tomato attempt holds the full question and table with the countdown; feedback splits the 160 class at 225 (80), (80 + 40)/400 = 0.3 framed, "(160 + 40)/400 = 0.5" crossed. Picture scan 0 flags, font scan 0 flags. Minor: the tomato question strip wraps its opening bracket to the line end ("... you make. (") with no collision; left as is. Pass.

## math-a12-s05 v2, root, 16 Nov

Whole master sampled in 3 s windows (12 sheets, v1 and v2). v2 changes only the handoff card title ("THE DENSITY" in place of the uppercased "F(X)"), now confirmed in the master at 8:00 to 8:06. Teaching content as reviewed in v1: rise over width gives the density, P(10 < X < 11) = 4/9 − 1/9 = 1/3 shaded and tied to F, f ≥ 0 and total area 1, find k, both attempts with countdowns, the notes and the parcel memory aid. Post-check: 0 picture and 0 font flags. The source snapshot records StudioToolPanel's optional inputSize prop, added after the bundle with its default unchanged. Pass.

## math-a12-s06 v2, root, 16 Nov

Whole master sampled in 3 s windows (11 sheets). It opens on s05 v2's corrected handoff card ("THE DENSITY"). The cookie: the histogram rises to f(x) = x/8, half the chips inside 2.83 cm, so the median is 2√2. The mode is the top of f: f′ = 0 gives mode 1 with f(1) = 3/4, the endpoint mode is 4, and quartiles come from F (2 and 2√3). Lifetime: mode 0, median 4 − ∛32 ≈ 0.83 h ≈ 50 min, with the tail tinted. Check your working: Q₁ = √3 − 1 ≈ 0.73, with −1 − √3 rejected and crossed. Notes and memory aid hold. The handoff to s07 is the flat density on [1, 5]; its mini-plot label reads "F(x)" (checked on a crop). Post-check: 0 picture and 0 font flags. Pass.

## math-a12-s07 v1, root, 17 Nov

Whole master sampled in 3 s windows (10 sheets). Opens on s06's flat-density frame. 200 bus arrivals fill a level histogram ("roughly level, model: 20 each"); equally likely means flat; the height is forced, c(b − a) = 1; the CDF is a straight line. Waiting-time example: P(T > 3.5) = 3/8, with "F gives below, not above" crossed, and P(2 ≤ T ≤ 4) = 1/2. Fair-die comparison: no single mode. Fits and doesn't fit. Check your working: f = 1/5 on [3, 8], P(4 ≤ X < 6.5) = 1/2, with "f(x) = 1/8" crossed. Attempt 2 holds with the countdown. Scan flag at 276.5 s is the half-second cross-fade into the two-panel "fits / doesn't fit" scene: the frame shows only the divider, and the next sample at 279 s is full (false positive). Font scan: 0 flags. Pass.

## math-a12-s08 v1, root, 17 Nov

Whole master sampled (11 sheets), alongside the A-grade build sheet. Balance point and integral: E(X) = 8/3 for x/8 on [0, 4]; Var = 8 − 64/9 = 8/9 with "Var = 8 − 8/3" crossed; uniform check: E = 3. Song lengths use a generic online-calculator panel: E = 4, Var ≈ 0.758. Check your working: E = 2/3. The cos x attempt holds with the countdown; feedback gives μ = π/2 − 1 ≈ 0.571 and Var = π − 3 ≈ 0.142, with "∫(x cos x)² dx − μ²" crossed. Picture and font scans: 0 flags. Pass.

## math-a12-s09 v1, root, 17 Nov

Whole master sampled (10 sheets), alongside the build sheet. The chip-bag histogram becomes the bell: "many small nudges" (Galton board, 206 of 400), the normal model as a continuous fit, symmetric about μ with mean = median = mode, X ~ N(175, 16) with σ = 4 ("σ = 16" crossed), and when a normal model fits. Check your working: N(64, 36). Attempt: P(X > 258) = 0.0548 by symmetry, and P(242 < X < 258) = 0.8904. Picture and font scans: 0 flags. Pass.

## chem-m8-c09 v1

First release (17 Nov). Whole master sampled in 3 s windows (11 sheets). Butanone spectrum: M+ at 72 framed, 72 - 16 = 56 = 4 C + 8 H worked one line per cue to C4H8O; the four C4H8O isomers line up and "M+ can't tell isomers apart" hands to the fragments; chlorine 3 : 1 and bromine 1 : 1 clusters; the "what mass spectrometry can't tell you" ticks and crosses build one per cue and close on MS, IR, NMR. Pentanone attempt holds the full question with spectrum; bromomethane feedback crosses "96 = M". Closing four-step checklist with the IR handoff. Captions from the playback lesson (175 cues, 15,545 frames equal to master). Pass.

## chem-m8-c10 v1

First release (17 Nov). Whole master sampled in 3 s windows (12 sheets). Measured IR traces: the acid O-H band shaded 2500 to 3300 with the hydrogen-bonded pair, the 1715 C=O circled, the ethanol rounded O-H inset; the four carbonyl compounds line up under one C=O and "the other clues and the formula help you decide" closes the stage. Captions from the playback lesson (190 cues, 16,316 frames equal to master). Pass.

## chem-m8-c11a v1

First release (17 Nov). Whole master sampled in 3 s windows (11 sheets). Carbon environments counted on the structure, shift regions read off the scale, symmetry cases compared. Captions from the playback lesson (175 cues, 15,245 frames equal to master). Pass.

## chem-m8-c11b v1

First release (17 Nov). Whole master sampled in 3 s windows (11 sheets). Bromoethane read from scratch (quartet 2H, triplet 3H); "quartet = 4H" crossed, then lines give neighbours and area gives hydrogens, one highlight per signal; ethyl ethanoate's lone methyl with integration steps 2 : 3 : 3 and the ester-O CH2 at about 4.1. Captions from the playback lesson (164 cues, 14,865 frames equal to master). Pass.

## chem-m8-c12 v1

First release (17 Nov). Whole master sampled in 3 s windows (11 sheets). Combined-spectra feedback: 78 - 35 = 43 = C3H7, 2-chloropropane's two environments against 1-chloropropane's three, doublet 6H and septet 1H, "80 alone gives the formula" crossed. Ester-or-acid attempt holds the full question and the 1H spectrum with the 10 s countdown. Captions from the playback lesson (168 cues, 14,607 frames equal to master). Pass.

## chem-m8-c04 v3

Replaces the held private v2 (release hold M8-C04-CAPTION-ANSWER-OVERLAP, private upload qAWhDz3d1nk, never public). Root moved the feedback-1 working into the question card (table hidden in feedback; lines at y 620 and 690, framed answer at y 785, crossed "2.5 mg/L" with its note beside it), so nothing in the answer reaches the caption band; still checked at frame 12390 and in the v3 sheets (6:48 to 6:54). Whole master sampled in 3 s windows (11 sheets); all other scenes unchanged from v2 (A = εlc working, AAS chain, attempts with countdown). Captions from the playback lesson (174 cues, 15,705 frames equal to master). Logged for polish, not a hold: eleven older labels sit between y 960 and 1030 (s1.tsx 83, 119, 177, 212-213, 259; s2.tsx 39 ChainPills, 147, 239, 291, 322), placed before captions moved to YouTube CC; the release review passed them. Pass.

## chem-y11-m1-v01 v2

First release (17 Nov). v1 was never queued: root found jar C's "kinds of particle" readout showing the live run count (3, then ?, then the tally, then 4) and changed it to "?" until the four-kind tally completes (s1.tsx KindsPanel); stills f1440 and f1710 checked. Whole master sampled in 3 s windows (11 sheets): jars A to C with the tally, element and molecule ≠ compound, iron lattice, CO₂ fixed ratio, the magnet demonstration with model counts, the jar D prediction (6 : 24 to 6 : 30 after the O₂ injection), salt water homogeneous with model counts, uniform ≠ pure, the tree, attempt 1 with countdown and brief feedback (S₈ crossed), attempt 2, the melting handoff and key notes. Captions from the playback lesson (194 cues, 14,988 frames equal to master). Pass. Held for the owner's playlist decision (Year 11 Chemistry Module 1 has no playlist).

## chem-y11-m1-v02 v1

First release (17 Nov). Whole master sampled in 3 s windows (11 sheets): pure water holds at 100 °C while salt water creeps, physical properties and the data table, the live heating model with the molecules view, consistent isn't proof (pressure stated, two independent properties), the mystery white solid matched on two properties ("very likely NaCl (not certain)", "801 °C so it must be NaCl" crossed), sublimation at about −78 °C, attempts with countdown, feedback with "chemical: a gas formed" crossed, the sand and salt handoff and key notes. Captions from the playback lesson (185 cues, 14,443 frames equal to master). Pass. Held for the same playlist decision.

## math-a12-t01 v1, root, 17 Nov

Whole master sampled in 3 s windows (11 sheets, sample-any). Opens on i05's rectangles (design: production order) and clears to y = cos x; the buoy traces the wave at half speed, then morphs to 2cos(x − π/3) + 1 with the orange buoy reaching each crest π/3 s later and "(π/3, 3)" ringed; transform panel sliders with live amplitude, period, shift, midline and range; tan follows the same rules; factor-first worked example; memory aid; buoy attempt with countdown and brief feedback. Picture scan 0 flags, font scan 0 flags. Pass.

## math-a12-t02 v1, root, 17 Nov

Whole master sampled in 3 s windows (11 sheets). Opens on t01's daylight frame; the u-window slides, solves and slides back with out-of-window values crossed; 2sin 2x = √3 doubles the window to 4π with "2 cycles: expect 4" and the four solutions placed one at a time (a 12 s hold on the question before the window, judged a deliberate thinking hold); closed ends, tan one crossing per branch, the graphing-app check; attempts with countdown; feedback with the crossed slip. Picture scan 0 flags, font scan 0 flags. Pass.

## math-a12-t03 v1, root, 17 Nov

Whole master sampled in 3 s windows (11 sheets). The tide board model built slot by slot (middle, half, period, start) with the water band following the measured rows; h(4) worked with the crossed "inside is πt/6, not t"; 5.25 m solved with both times; the turning wheel h(t) = 12 − 10cos(πt/30) with the projector and the 17 m exact solve (t = 20 or 40, "t = 20 only" crossed); memory aid builds line by line; attempts with countdown; phone storage handoff. Picture scan 0 flags, font scan 0 flags. Pass.

## math-a12-s10 v1, root, 18 Nov

Whole master sampled in 3 s windows (11 sheets). Opens on s09's handoff; each part of the density formula glows on its cue; f′ and f″ worked to the maximum and the inflections at μ ± σ; the calculator reads 0.6827, 0.9545, 0.9973 as the band slider steps out; the bags' bell is slid and stretched onto the apples' bell (0.6827 for both); the empirical rule; the CDF sweep; attempts with countdown and brief feedback (crossed slips). Picture scan 0 flags, font scan 0 flags. Pass.

## math-a12-s11 v1, root, 18 Nov

Whole master sampled in 3 s windows (10 sheets). Snapper and perch compared by z (1.25 and 1.6), the standard normal with both tails kept as the curves squeeze, the left-area table read with the 1 − table step, Alex and Blake by z, the mirror tail, bolts and bottles; attempts and feedback (raw-marks slip crossed). Picture scan: one "possible-blank" flag at 352.7 s, checked: a mid cross-fade from "Check your working" to "Last one", not a defect. Font scan 0 flags. Pass.

## math-a12-s12 v2, root, 18 Nov

v1 was never queued: root found the kit FillDial's "μ = …" label drawn across the painted filling head (duplicating the readout card); v2 hides it (FillDial `dial.label: false`, default unchanged for other lessons). Whole master sampled in 3 s windows (10 sheets): the dial out and back with simulated short counts (19, 6, 2, 2 of 200), the table read backwards (target 0.9900, 2.32 and 2.33 compared, P(Z < 2.33) ≈ 0.99), μ = 508.64 mL, bolts σ and cereal σ with the halfway target, two ways to reach 0.5%, attempts with countdown, feedback with the crossed slip, key notes. Picture scan 0 flags, font scan 0 flags. Pass.
