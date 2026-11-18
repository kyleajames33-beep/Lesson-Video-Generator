# Year 12 Maths Standard c01a to f04: learning review resolution

19 November 2026. This is the design author's resolution of `m-s12-c01-f04-learning-review-summary.md` and the per-design files `m-s12-<id>-learning-review.md` for c01a, c01b, c02, c03, c04, c05, c06, f01, f02, f03 and f04. It applies root's four binding decisions for this round:

1. f04's playlist line makes no claim that every video is already public, the nine strand names stand, and the average rate is said once (ruling 81).
2. c06's two no-successor LFT cells point at the finish cell scene 3 builds, and the site's =MAX($E$2:$E$8) is an author note only.
3. c01b keeps the dummy, with no parallel-arrows sentence unless Codex's HSC check requires it.
4. Every should-fix is applied, cheap optional findings are applied, every design stays under 570 s, and each decision is recorded.

All eleven designs now carry "Revision 2 (19 Nov 2026): learning review resolved" at the top, and their Status lines say "Revision 2 (19 Nov 2026): learning review resolved". Each Revision 2 section has the detail. The designer's decisions file `root-decisions-maths-s12-c01-f04.md` has a matching Revision 2 section.

This round changed documents only: no speech, build, render or commit. Changed values were rechecked in Python (`work/brief-resolve-standard-cf/verify.py`, `python -I`, 46 checks, 0 failures). Narration was recounted by script as the sum of the scene strings (`work/brief-resolve-standard-cf/count.py`, which reproduces e08's 5,632). A script also checked that every bold cue is quoted in its scene's Visual in spoken order and that no design contains an em dash (`work/brief-resolve-standard-cf/cues.py`). Codex's maths check remains the authority.

**Totals:** 23 findings (0 blockers, 13 should fix, 10 optional).

- **Should fix:** all 13 applied. Seven use the reviewer's wording or fix as written. Three follow root's decisions as written: c03 #1 (decision 4), c06 #1 (decision 2) and f04 #2 (decision 1). Three are adapted: f02 #1, f03 #1 and f04 #1. Two of these adaptations were made to keep the maths true, and they are listed under "For root".
- **Optional:** all 10 applied. Six are applied as written and four are adapted (c02 #2, c03 #2, c03 #3, c04 #2). None was declined.

## Should fix

- **c01a #1, scene 4 (what an event means):** accepted, reviewer's wording. "Each circle is an event, the moment when every arrow arriving there has finished. So every arrow that leaves an event has to wait for every arrow that arrives there."
  - It replaces the untrue "Arrows that meet at an event all finish at that moment".
  - Visual: a second grey arrow arrives at circle 2 a beat after A. A leaving grey arrow's tail lights only when both heads have landed (hand tag "leaves only when all have arrived").
- **c01b #1, scene 3 (a dummy "never changes" the time):** accepted, reviewer's wording. "It adds no time of its own, so when we work out times, it counts as zero." On "counts as zero" the "0" pulses (hand tag "no time of its own").
- **c01b #2, scene 5 (the fit-out's reason in abstract words):** accepted, reviewer's wording. "But then if you were asked about the job from event two to event four, there'd be two answers, the electrical work or the plumbing. Each pair of events has to mean just one job."
  - Events 2 and 4 ring with "which job?".
  - The dummy stays (root's decision 3).
- **c02 #1, scene 12 (the handoff primes MS-53):** accepted, reviewer's wording with the bold cue kept. "Some events have the same earliest and latest times, and some don't. Which jobs have room to move, and which can't **slip** at all without making the whole build late?"
  - "That difference tells us" and the repeat "So which jobs can't slip?" are cut.
  - Arrows B and F ring on "room to move" and fade on "slip", so the final frame is unchanged.
- **c03 #1, feedback 2 (a true statement crossed out):** accepted (decision 4), reviewer's wording. "Saying painting has no float because it's the last job is the slip. The door is a last job too, and it has a day of float. Painting has none because it's on the longest path."
  - Caption: "F is a last job too (float 1): G is on the critical path".
  - Updated to match: the attempt line, the mistake list, Misconceptions and the A2 model answer.
- **c04 #1, scene 3 (why the bar starts at the EST):** accepted, reviewer's sentence. "We draw every job as early as it can start, so any spare time it has comes after its bar."
  - Hand tag: "as early as it can: spare time after".
  - The suggested trim ("Builders and event planners use charts like this every day.") is not taken. It is the scene's real-life line, and the margin is about 66 s.
- **c06 #1, scenes 4 and 7 (a MAX in the "MIN coming up" column):** accepted (decision 2).
  - The finish cell now has an address: E10 (=MAX(E2:E8), labelled in D10). F6 and F8 are "=E10".
  - Scene 4: "it just points to the finish cell, never a typed eight". The dollar-sign chip is dropped.
  - Scene 6's slip is "typing 8 instead of =E10", with the caption "use =E10 so changes flow through".
  - The site's =MAX($E$2:$E$8) appears only in Decisions, author note (a) and Codex item 3. It gives the same values.
- **f01 #1, scene 4 (the queue breaks "inflow = outflow"):** accepted, reviewer's narration with the bold cue kept. "...and the other ten a minute would **queue** on the walkway, outside the concourse."
  - A's two counters stay equal at 110, and the queue gathers on the S→A walkway outside A (hand tag "can't get in yet", replacing "120 in, only 110 out").
  - The simulation note, the visual surprise, the stage lists and the kit note are updated.
- **f02 #1, scene 6 (why the order mattered):** accepted, adapted in one detail. "The first path sent A's flow the long way, through the link to B, and it used five of B to T's nine, which B's own flow needed."
  - The reviewer's "filled B to T" is not exact. The first path alone uses 5 of the 9, and B→T fills only when S-B-T's 4 arrive (checked).
  - Habit: "So a good habit is to send flow along the direct paths first, the ones that skip the link, and use the link for what's left. Then check with a cut."
  - Every path order in the video (scenes 2 to 4, scene 7, A2) already sends the link path last (checked).
  - Visual as the reviewer described, with the hand tags "B's own flow is stuck" and "direct paths first, link last".
- **f03 #1, scene 4 (why max flow = min cut is shown, not said):** accepted, adapted. "Look at the full roads, A to C, B to C and B to T. They're exactly cut two's roads. Here, the full roads make a wall across the network, and that wall is a cut, so the flow has filled the cut."
  - "Here" is added, and "has filled the cut" replaces "has reached a cut".
  - Said generally, the claim would be false. f02's first try is blocked at 12, its full pipes form a wall, and no cut is 12.
  - Here cut two has no road coming back, so the flow equals its capacity (checked).
  - Visual: cut 2's line draws solid through the three amber tubes (hand tag "full roads = a cut").
- **f03 #2, scene 6 (eight numbers in a row):** accepted, reviewer's wording. "It starts at fifty-five, drops to forty-five, then to thirty-four, and nothing after that is smaller." The screen still steps through all eight tints and sums. The badge moves on the three spoken numbers.
- **f04 #1, scene 2 (the average rate; ruling 81):** accepted, adapted in placement. The clause opens its sentence: "Five hours is three hundred minutes. If the fans arrive evenly over that time, sixty thousand in three hundred minutes is two hundred people a minute."
  - A grey chip "arriving evenly: an average rate" is added. The clause is said once.
  - Author note (e) is updated, and open decision 2 is closed.
- **f04 #2, scene 12 (the playlist claim):** accepted (decision 1). Spoken: "You'll find the rest of Year 12 Maths Standard in the playlist, so go back to any topic, any time, and keep practising."
  - Screen line, Decisions, Handoff and the description: "Find the rest of Year 12 Maths Standard in the playlist".
  - "The core Year 12 Maths Standard course is complete" and the banner stay, because they are about content. The nine strand names stand.

## Optional

- **c01a #2, scene 5:** applied as written. "B can't end any earlier, at event two or three, or C or D would have to wait for the price tags too." A red ghost of B's head touches events 2 and 3.
- **c02 #2, scene 6:** applied in the sentence's subject: "because their EST is ten and their LST is twenty". The chip "D: EST 10, LST 20" is added.
- **c03 #2, scene 4:** applied, adapted. "That's because the kit's longest path, through the walls and the paint, is eight days, one day short of the critical path." The kit is on two paths (8 and 7 days), so "the kit's path" was unclear.
- **c03 #3, key note 5:** applied, shortened to one line: "Non-critical jobs one after another share float. Paths can tie."
- **c04 #2, feedback 1:** applied, adapted. It opens "The scans give ESTs of zero, three, three, five and eight.", and the ESTs write above the chart rows.
  - "with no windows" is cut, because the amber bars show it and scene 4 said it.
  - This keeps the feedback at 394 characters, about 29.6 s.
- **c05 #1, scene 6:** applied. A grey tag "kit: 5 days (two critical paths)" sits on B's bar until the reset.
- **c06 #2, Numbers to verify:** applied. Only F8 is typed, as in scene 6. F6 = E10 = 9, E's float is 5, and the same four −1 rows result (checked).
- **f01 #2, scene 7:** applied. The traced dot follows S→A→B→T, crossing the {S, B} cut forwards, backwards, then forwards.
- **f02 #2, feedback 1:** applied. A grey tag "(other orders give the same flow)" is added. All six orders give 16 (checked).
- **f04 #3, scene 3:** applied as written. "Widening it by just ten, to ninety, would give exactly two hundred, with nothing to spare." A ghost panel shows the cuts 210, 210, 230 and 200 (checked).

## Root's decisions and housekeeping

- **Decision 1 (f04):** applied in the narration, the screen line, Decisions (course close, Handoff), the YouTube description and Codex item 5. The decisions file, section 3, notes the change. Open decision 1 is closed.
- **Decision 2 (c06):** applied in scenes 3, 4 and 6, Decisions, author note (a), Numbers used, the memory aid check and Codex item 3. The decisions file, section 4, item 7, records it.
- **Decision 3 (c01b):** the dummy stays. Open decision 1 is marked "Decided in Revision 2", and Codex's ruling 71 check is still pending.
- **Ruling 81, applied as housekeeping:**
  - c05's shorter title "When an Activity Takes Longer or Shorter | Year 12 Maths Standard 2" (67 characters by script). c04's "Next" line and c06's "Builds on" line name it.
  - Open decisions closed by ruling 81: c01a 1 and 2, c02 1, c05 2, f01 1 and f02 2.
- **Decisions file:** section 9 items 1, 2, 4, 5 and 6 are closed. Item 3 is decided for the design but still waits for Codex.
- **New hand tags:**
  - c01a "leaves only when all have arrived"
  - c01b "no time of its own"
  - c04 "as early as it can: spare time after"
  - f01 "can't get in yet" (replacing "120 in, only 110 out")
  - f02 "B's own flow is stuck" and "direct paths first, link last"
  - f03 "full roads = a cut"

  Each is added to its design's list.
- **No new bold cues.** f01's and c02's bold cues stay on their existing words.
- **Numbers to verify:** each design whose numbers changed or are newly spoken has a "Revision 2" bullet (c02, c03, c04, c06, f01, f02, f03, f04).

## Lengths (by script, 13.3 characters per second)

| Design | Revision 1 | Revision 2 | With holds | Margin | Feedback 1, 2 |
| --- | --- | --- | --- | --- | --- |
| c01a | 5,014 | 5,097 | about 493 s | 77 s | 24 s, 24 s |
| c01b | 5,009 | 5,077 | about 492 s | 78 s | 27 s, 21 s |
| c02 | 5,031 | 5,030 | about 493 s | 77 s | 26 s, 26 s |
| c03 | 5,017 | 5,179 | about 504 s | 66 s | 26 s, 28 s |
| c04 | 5,041 | 5,173 | about 504 s | 66 s | 30 s, 24 s |
| c05 | 5,016 | 5,016 | about 497 s | 73 s | 21 s, 26 s |
| c06 | 5,017 | 5,008 | about 491 s | 79 s | 23 s, 24 s |
| f01 | 5,088 | 5,121 | about 500 s | 70 s | 23 s, 20 s |
| f02 | 5,006 | 5,282 | about 512 s | 58 s | 24 s, 25 s |
| f03 | 5,004 | 5,207 | about 506 s | 64 s | 26 s, 25 s |
| f04 | 5,027 | 5,161 | about 503 s | 67 s | 25 s, 29 s |

- All eleven are under 570 s with holds, with holds unchanged from Revision 1. No reserve trim was taken.
- Every feedback is at most 30 s of speech. The longest is c04 feedback 1, at 394 characters or about 29.6 s.
- The longest single scenes are f04 scene 2 (876 characters, about 66 s), f02 scene 6 (817, about 61 s) and c03 scene 4 (804, about 60 s). Each is one board or one method stage.
- These are speech-only estimates. Measure them on the Google voice.

## Joins

- z06 → c01a: unchanged. Scene 1 opens on z06's final frame exactly.
- c01a → c01b → c02 → c03 → c04 → c05 → c06 → f01 → f02 → f03 → f04: unchanged. c02's new rings on B and F fade on "slip", before its final frame.
- f04's close: only the last screen line and the matching spoken sentence change. There is still no "Next" chip and no promise of future videos, exam dates or results (rulings 73 and 81).

## For root

- **f03 #1 adaptation:** the scene says "Here, the full roads make a wall ... so the flow has filled the cut", not the general "the flow has reached a cut". The general form is false for f02's blocked 12. Confirm.
- **f02 #1 adaptation:** "used five of B to T's nine", not "filled B to T". Confirm.
- **c04:** the review's offered trim of "Builders and event planners use charts like this every day." was not taken. Confirm, or take it for about 4 s.
- **c06:** learner copy now teaches =E10 for the two no-successor cells, while the site's lesson shows =MAX($E$2:$E$8). Both give the same values, and the design never calls the site's form wrong. Root may want the site lesson to note the alternative later (outside this round).
- **Ruling 71:** Codex's HSC check on parallel arrows (c01b) is still pending.
- **Still open, unruled:** the review did not object to any of these.
  - c01b 2 (two dummies)
  - c02 2 (no second worked network)
  - c03 1 (the formal for c04)
  - c04 1 (scans given in scene 2)
  - c05 1 (A1's dropped part (c))
  - c06 1 and 2 (column and row order)
  - f01 2 ("no more than 190")
  - f02 1 (A2 on the stadium)
  - f03 1 and 2 (the shortcut on the stadium; "doubles")
- **f04's title** stays at 79 characters (ruling 81 and decisions item 4).

Nothing recorded; human listening pending.
