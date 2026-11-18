# Maths S12 C06: How does a spreadsheet model a project from its precedence table? One row per activity, EFT = EST + duration, EST = MAX of the predecessors' EFTs (the forward scan), LFT = MIN of the successors' LSTs (the backward scan), float and a YES column, three checks, and "what if" by changing one cell (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `i09.md` at Revision 2, and their resolution logs), c05's final frame (`math-s12-c05.md` scene 12) and root's Standard rulings (1 to 76; ruling 72; the stadium opens network flow). Designer's decisions for c01a to f04, including every join: `../checks/root-decisions-maths-s12-c01-f04.md`. Next: student learning review, then the Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,017 characters by script (see "Narration length estimate"), 13 scene headings, about 492 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: seventh and last video of the Critical path analysis strand, playlist order 88. **Standard 2 only.** Pre-design pack: `../pre-design/maths-standard/math-s12-c06.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/critical-path-analysis/lesson03.sa.html` (SHA256 `562cf13c015378f7626b2f1b2c6ad94691464f68f1a742f9b395dd8102dd485a`; `model-project`, card 4: "EFT in column E is =D2+C2"; "EST in column D is the latest of its predecessors' finish times, so =MAX(E6,E7) for activity G, and plain 0 for A and B"; "LFT in column F is the earliest of its successors' latest starts, so =MIN(G4,G5) for activity A. The last activity is the exception: its LFT is the project duration, =MAX(E2:E8)"; "LST in column G is =F2-C2, and float in column H is =G2-D2"; "Critical? in column I is =IF(H2=0,"YES","")"; the three checks; "Now solve with it", F from 5 to 6 and 7). Route entry: `math-s12-c06` in `../../programme/maths-standard-route-inputs-7.json`. Visual system: maths studio kit; the formal's spreadsheet (c05's final frame) as the anchor, in the money strand's spreadsheet look; the stadium plate in the final frame.

Owner rules applied: plates for real objects, code for diagrams and spreadsheets; no people, hands or faces; one main question; one stage at a time; words before symbols (earliest finish time, latest finish time and successor in plain words before EFT, LFT and the formulas); g01 worked example (task strip, the sheet, the checks apart); two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a school formal, a site project, grand final day); Australian spelling; no em dashes; conversational narration; text above y = 950.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-7.json`:

Standard 2 (Critical path analysis):
- `cida841b0a`: "Use a spreadsheet to model a project involving precedence tables and solve related problems"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6

**Boundary:** starts from c05's final frame exactly (decisions file section 2): the school hall plate small at the top left; the spreadsheet with columns "Activity", "Predecessors", "Duration", "EST", "EFT", "LFT", "LST", "Float", "Critical?" (A to I) and rows 2 to 8 (A – 2; B – 1; C A 4; D B 2; E A 1; F C 1; G D, F 1); columns D to I empty; chips "can a spreadsheet do the scans for us?", "Next", "?". Recalls c02 (scans), c03 (float, critical path), c04 (the formal's Gantt chart, 8 weeks) and c05 (changes) in a phrase or grey chip, and Year 12 money spreadsheets (cell references, fill down; math-s12-i13) in a grey chip. Teaches: rows ordered so each activity comes after its predecessors; EFT = EST + duration (=D2+C2); EST = 0 with no predecessors, else =MAX of the predecessors' EFTs (the forward scan down the sheet); the project time = the largest EFT (=MAX(E2:E8)); LFT = MIN of the successors' LSTs, or the project time where nothing follows (the backward scan up the sheet); LST = LFT − duration; float = LST − EST; Critical? = IF(float = 0, "YES", ""); three checks (no negative float; the YES rows join up from start to finish; the YES durations add to the project time); what-if problems by changing one duration cell. Stops at the end of critical path analysis; the final frame opens network flow.

## Decisions

- **Anchor: the formal (c05's handoff; c04's project).** Values: EST 0, 0, 2, 1, 2, 6, 7; EFT 2, 1, 6, 3, 3, 7, 8; LFT 2, 5, 6, 7, 8, 7, 8; LST 0, 4, 2, 5, 7, 6, 7; float 0, 4, 0, 4, 5, 0, 0; YES for A, C, F, G; 8 weeks. They match c04's Gantt chart (a deliberate check the student can see).
- **The site's column letters (site card 4).** D EST, E EFT, F LFT, G LST, H Float, I Critical?. The kit-needs list's column order (LST before LFT) is overridden so the site's formulas are quoted exactly.
- **Two activities with no successor.** On the formal both E (book the DJ) and G (decorate) end the project, so both LFT cells use =MAX($E$2:$E$8) (shown as =MAX(E2:E8) in narration; the dollar signs appear on screen with a grey chip "$ keeps the range fixed when filling"). The site's "the last activity is the exception" becomes "any activity that nothing waits for".
- **Row order (pack misconception, reworded).** Real spreadsheets recalculate in dependency order, so row order does not break a formula; the video says rows are listed "so the forward scan runs down the sheet and is easy to check", not that out-of-order rows give errors.
- **The typed 8 (pack misconception).** Shown in the what-if scene: with a typed 8, the venue change gives floats of −1 and check 1 catches it.
- **Site examples.** The site's card 4 table (A 4 –; B 3 –; C 5 A; D 2 A, B; E 3 C; F 5 D; G 2 E, F; 14 days; critical A, C, E, G; floats B 2, D 1, F 1) is both attempts, with the site's own "Now solve with it" (F to 6 and to 7) as A2. Its network needs a dummy (D after A and B, C after A only); no network is drawn in this video, so none is needed.
- **Simulations (standard item 3).**
  1. **ProjectSheet filling column by column** (scenes 2 to 5; new kit part, or an extension of the money strand's sheet): the formula bar shows the current formula; referenced cells outline in their role colour; fill-down runs row by row with arrows down the EST column (teal) and up the LFT column (violet).
  2. **The formal's network beside the sheet** (scenes 3, 4): its event boxes fill from the sheet's numbers as each column completes (one state, two views; the network small at the right).
  3. **What-if edits** (scene 6): typing into one duration cell; every dependent cell flashes as it updates; the finish cell =MAX(E2:E8) changes from 8 to 9; then a second edit leaves it at 8.
- **Colour roles (strand, fixed).** Durations blue; EST and EFT teal; LST and LFT violet; float olive; YES cells amber (critical); formulas ink in the formula bar with referenced cell outlines in their role colours; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Sheet cells 36 px (the current cell 44 px with a thick outline); the formula bar 44 px; hand tags 36 px. Hand tags: "predecessors above", "finish = start + duration", "fill down", "MAX = wait for the slowest", "forward scan, down the sheet", "the finish: biggest EFT", "MIN = the most urgent follower", "backward scan, up the sheet", "never type the 8", "float = LST − EST", "YES = critical", "no negatives", "YES rows join up", "they add to 8", "one cell, every column". At most two live at once.
- **Stage changes (standard item 2).** c05's frame (1); the EFT column (2); the EST column and the network's teal boxes (3); the LFT and LST columns and the violet boxes (4); g01 board, float, YES and the checks (5); the what-if edits (6); framed card (7); question cards (8 to 11); the stadium walkways (12); key notes (13).
- **Worked example (g01 layout).** Scene 5: task strip "Complete the Float and Critical? columns for the formal, then check the sheet."; givens: the sheet with columns D to G filled; rows "H2: =G2−D2, filled down: 0, 4, 0, 4, 5, 0, 0"; "I2: =IF(H2=0,"YES",""): YES for A, C, F, G"; three check stamps "no negative float ✓", "YES rows join up: A → C → F → G ✓", "2 + 4 + 1 + 1 = 8 ✓"; framed answer "8 weeks; critical path A, C, F, G" with a grey chip "matches our Gantt chart". The crossed slip is in scene 6 (the typed 8).
- **Memory aid.** Framed card: "MAX going down, MIN coming up." Key line: "EST = MAX of predecessors' EFTs. LFT = MIN of successors' LSTs. Float = LST − EST."
- **Visual surprise.** One typed "3" ripples through four columns and the finish cell ticks from 8 to 9 (6).
- **Plain meanings at first use.** Earliest finish time, EFT ("when an activity finishes if it starts as early as it can"); latest finish time, LFT ("the latest it can finish without delaying the project"); successors ("the activities that come straight after it").
- **Attempts (site card 4, original wording, HSC style).** A1: (a) =MAX(E2,E3) for D's EST; (b) floats given 0, 2, 0, 1, 0, 1, 0: critical path A, C, E, G and 4 + 5 + 3 + 2 = 14 days; crossed "(a) =MIN(E2,E3)" (caption "D waits for both: the larger finish"). A2 (the site's "Now solve with it"): F 5 to 6: 14 days (float 1 absorbed; a second critical path A, D, F, G); F 5 to 7: 15 days; crossed "F = 6: 15 days" (caption "F had 1 day of float").
- **Mistake scene:** none separate. A typed project time (6 crossed); MIN in the forward column (A1 crossed); MAX in the backward column (4, said); a change judged by the YES column alone (6, said: check the finish cell); a delay inside float added in full (A2 crossed).
- **Cause chain taught, in order:** (1) a job finishes its duration after it starts, so EFT = EST + duration (2); (2) a job can start only when its slowest predecessor finishes, so EST is the MAX of their EFTs: the forward scan as a formula (3); (3) the project ends when the last job finishes, so the project time is the largest EFT (3); (4) a job must finish before its most urgent successor has to start, so LFT is the MIN of their LSTs, and a job nothing waits for may finish at the project time (4); (5) LST = LFT − duration, and float = LST − EST as in c03 (4, 5); (6) because every cell is a formula, changing one duration rescans the whole project (6).
- **Entry knowledge (route):** math-s12-c02 to c05 (scans, float, critical path, changing durations); Year 12 money spreadsheets (math-s12-i13: cell references, fill down). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-f01, flow networks).** Scene 12's frame (decisions file section 2): header "MATHEMATICS STANDARD" (the strand name dropped); the new plate `ms12-stadium-plaza-v1.png` (briefed here; ruling 17) filling the left and centre (about 1,300 px wide): a stadium and a train station plaza from above; coded arrows over the painted walkways: plaza "S" → north concourse "A" "120", "S" → south concourse "B" "90", "A" → "B" "30", "A" → stands "T" "80", "B" → "T" "110" (blue, 40 px), with a chip "people per minute"; small teal dots drifting along the arrows (slow, even, no pooling); chips "how many people a minute can reach the stands?" (40 px), grey "Critical path analysis: done", "Next" and "?". No flow total or cut is shown.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Formal sheet formulas: D2 0; D3 0; D4 =E2; D5 =E3; D6 =E2; D7 =E4; D8 =MAX(E5,E7). E2 =D2+C2 filled down. F2 =MIN(G4,G6); F3 =G5; F4 =G7; F5 =G8; F6 =MAX($E$2:$E$8); F7 =G8; F8 =MAX($E$2:$E$8). G2 =F2−C2 filled down. H2 =G2−D2 filled down. I2 =IF(H2=0,"YES","") filled down.
  (b) Venue 3: T 9 (EST 0, 0, 3, 1, 3, 7, 8; floats B 5, D 5, E 5). DJ 4: A-E = 2 + 4 = 6 < 8, T 8 (E float 2). Typed 8 with venue 3: G's LST 8 − 1 = 7, EST 8, float −1; F's LST 6, EST 7, float −1; C's LST 2, EST 3, float −1; A's LFT 2, LST −1, float −1 (H2, H4, H7, H8).
  (c) Site card 4: EST 0, 0, 4, 4, 9, 6, 12; EFT 4, 3, 9, 6, 12, 11, 14; LST 0, 2, 4, 5, 9, 7, 12; LFT 4, 5, 9, 7, 12, 12, 14; float 0, 2, 0, 1, 0, 1, 0. F 6: T 14, critical paths A-C-E-G and A-D-F-G, B float 1. F 7: T 15, critical A-D-F-G (C and E float 1).
  (d) Stadium (f01): S→A 120, S→B 90, A→B 30, A→T 80, B→T 110 people per minute; cuts 210, 200, 230, 190; maximum 190 (f01 to f04 work it).
  (e) In the sheet the minus sign displays as the spreadsheet's hyphen (=G2-D2); narration says "minus".

Main question: *Rescanning by hand after every change is slow. How does a spreadsheet model a project from its precedence table, and solve problems with it?*
Entry knowledge (c02 to c05; i13): scans, float, the critical path, changes; spreadsheet formulas.
Stops after: the columns and their formulas, the checks, what-if edits. Critical path analysis ends.
Handoff: the stadium walkways, "how many people a minute can reach the stands?" (f01).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): durations blue; EST and EFT teal; LST and LFT violet; float olive; YES amber; answer green; mistake red. Header strip "MATHEMATICS STANDARD · CRITICAL PATH ANALYSIS" (scenes 1 to 11 and 13); scene 12's header is "MATHEMATICS STANDARD" only, so the frame serves f01. Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: let the sheet do the scans
> Here's the formal's precedence table, typed into a spreadsheet. Every time a duration changes, we'd have to scan the whole network again by hand. A spreadsheet can do the scans with formulas, and then redo them instantly whenever we change a number. You've already used formulas and fill-down for loans and savings, so this will feel familiar. How does a spreadsheet model a project from its precedence **table**?

Visual: opens on c05's final frame exactly. On the first sentence "Next" fades. On "scan the whole network again" a small network sketch flickers with a teal and a violet sweep, then a weary "again?" tag. On "redo them instantly" columns D to I shimmer once. On "loans and savings" grey chip "money strand: formulas, fill down". On "table" heading "A project in a spreadsheet" writes.

### 2. the finish column
> Each activity gets one row, listed so that every activity comes after its predecessors. That way the forward scan runs straight down the sheet. Now the columns. An activity's earliest finish time, its EFT, is when it finishes if it starts as early as it can. So the EFT is the EST plus the duration. For the venue, that's the formula equals D2 plus C2, and we fill it down the **column**. It waits for the start column, which we fill next.

Visual: stage change: simulation 1. The sheet fills the frame (about 1,700 × 640 px; cells 36 px). On "comes after its predecessors" the Predecessors cells glow and small arrows point up to the rows they name (hand tag "predecessors above"). On "earliest finish time" the E column heading "EFT" glows teal. On "EST plus the duration" (hand tag "finish = start + duration"). On "D2 plus C2" the formula bar writes "=D2+C2" (44 px), and cells D2 (teal) and C2 (blue) outline. On "column" (bold) the formula fills down E2 to E8 (hand tag "fill down"); the cells stay blank grey "waiting for EST" until scene 3.

### 3. EST: the forward scan as MAX
> Now the earliest start column. An activity with no predecessors starts at zero. Otherwise, it can't start until its predecessors have finished, so its EST is the largest of their EFTs. Selling tickets follows the venue, so its EST is just E2, which is two weeks. Decorating the hall needs the decorations and the seating plan, so its EST is MAX of E5 and E7, which is **seven**. Working down this column is the forward scan, done by formulas. The largest number in the EFT column is the minimum completion time, so the finish cell is MAX of E2 to E8, eight **weeks**.

Visual: camera continue; the formal's network small at the right (about 520 × 300 px). On "starts at zero" D2 and D3 write "0" (teal). On "the largest of their EFTs" (hand tag "MAX = wait for the slowest"). The EST and EFT cells fill row by row down the sheet as each formula lands, with a teal arrow running down the column (hand tag "forward scan, down the sheet"): on "just E2" the formula bar "=E2" and D4 "2" (E4 "6"). On "MAX of E5 and E7" the formula bar "=MAX(E5,E7)", E5 (3) and E7 (7) outline teal; on "seven" (bold) D8 "7", E8 "8". The network's left box halves fill teal in step. On "the finish cell" a cell below the table, "finish: =MAX(E2:E8)"; on "weeks" (bold) it reads "8" (hand tag "the finish: biggest EFT"), with a grey chip "Gantt chart: 8 weeks ✓".

### 4. LFT: the backward scan as MIN
> The backward scan runs up the sheet. An activity's latest finish time, its LFT, is the latest it can finish without delaying the project. If nothing waits for an activity, its LFT is the project time, so the formula is MAX of the EFT column again, never a typed eight. Otherwise, it has to finish before its successors, the activities straight after it, need to start, so its LFT is the smallest of their latest starts. The venue is needed by the tickets and the DJ, so its LFT is MIN of G4 and G6, which is **two**. Then the latest start is the LFT minus the duration, F2 minus C2, filled down the **column**.

Visual: camera continue. On "runs up the sheet" a violet arrow points up the F column (hand tag "backward scan, up the sheet"). On "nothing waits" rows E and G glow; the formula bar "=MAX($E$2:$E$8)"; F6 and F8 write "8" (violet) with a grey chip "$ keeps the range fixed when filling" (hand tag "never type the 8"). On "successors" the hand tag "MIN = the most urgent follower". The LFT and LST cells fill from the bottom up: F7 "=G8" (7), G7 6; F5 "=G8" (7), G5 5; F4 "=G7" (6), G4 2; F3 "=G5" (5), G3 4. On "MIN of G4 and G6" the formula bar "=MIN(G4,G6)", G4 (2) and G6 (7) outline violet; on "two" (bold) F2 "2". On "F2 minus C2" the formula bar "=F2-C2"; on "column" (bold) G2 to G8 complete: 0, 4, 2, 5, 7, 6, 7. The network's right box halves fill violet in step.

### 5. worked example: float, YES and three checks
> Here's the worked example, the last two columns. Float is LST minus EST, so H2 is G2 minus D2, filled down. That gives zero, four, zero, four, five, zero and **zero**. The critical column uses IF. If the float is zero, write YES, and otherwise leave it blank. So YES appears for A, C, F and **G**. Now three checks. No float is negative. The YES rows join up from start to finish, A, then C, then F, then G. And their durations, two plus four plus one plus one, add to eight, the finish **cell**. It's the same critical path our Gantt chart showed.

Visual: clear change to the g01 board. Task strip, 44 px: "Complete the Float and Critical? columns for the formal, then check the sheet." The sheet as the givens (columns A to G filled, 32 px) with H and I empty and large (44 px). Rows: on "G2 minus D2" the formula bar "=G2-D2" (hand tag "float = LST − EST"); on "zero" (first bold, the last of the seven) H2 to H8 complete "0, 4, 0, 4, 5, 0, 0" (olive). On "uses IF" the formula bar "=IF(H2=0,"YES","")"; on "G" (bold) I2 to I8 fill: "YES" (amber) for A, C, F, G, blank for B, D, E (hand tag "YES = critical"). Three stamps write in turn: "no negative float ✓" (hand tag "no negatives"); on "join up" the YES rows link with an amber line and a small chain "A → C → F → G ✓" (hand tag "YES rows join up"); on "cell" (bold) "2 + 4 + 1 + 1 = 8 ✓" beside the finish cell (hand tag "they add to 8"). Framed answer (green): "8 weeks; critical path A, C, F, G", with the formal's Gantt chart sliding in small, its amber chain matching (grey chip "our Gantt chart").

### 6. what if?
> Here's the payoff. Say the venue booking takes three weeks instead of two. Type three into one cell, and every column updates. The finish becomes nine **weeks**, and the YES column still says A, C, F and G. Now try four weeks for booking the DJ instead. Its float soaks that up, so the finish stays at **eight**. If you'd typed an eight into the last LFT by hand, the venue change would show a float of minus one, and the first check would catch it. That's why the project time comes from a formula, not from your **keyboard**.

Visual: stage change: simulation 3, the sheet full width again. On "Type three" C2 changes "2" → "3" (blue, ringed); every dependent cell flashes as it updates (hand tag "one cell, every column"); on "weeks" (bold) the finish cell ticks "8" → "9" and the floats read 0, 5, 0, 5, 5, 0, 0. C2 returns to 2. On "four weeks for booking the DJ" C6 changes "1" → "4"; E's float drops from 5 to 2; on "eight" (bold) the finish cell stays "8" with a green tick; C6 returns to 1. On "typed an eight" a red ghost: F8 shows a typed "8" (no formula), C2 becomes 3 again, and H2, H4, H7 and H8 show "−1" in red; red slip "LFT typed as 8"; on "keyboard" (bold) it is crossed (caption "use =MAX(E2:E8) so changes flow through"), and the sheet resets.

### 7. memory aid
> Here's the summary. MAX going down, MIN coming up. Then float is LST minus EST, and YES marks the critical **path**. Take the finish from the biggest EFT, never from your keyboard.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the sheet's EST column with a teal down arrow and the LFT column with a violet up arrow. Main line, hand font 56 px: "MAX going down, MIN coming up." On "path" the key line, 36 px: "EST = MAX of predecessors' EFTs. LFT = MIN of successors' LSTs. Float = LST − EST." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A project is modelled in a spreadsheet, with durations in days. A, four days, and B, three days, have no predecessors. C, five days, follows A. D, two days, follows A and B. E, three days, follows C. F, five days, follows D, and G, two days, follows E and F. First, write a formula for D's EST, if A's EFT is in cell E2 and B's EFT is in cell E3. Then, the float column shows zero, two, zero, one, zero, one and zero. State the critical path and the minimum completion time. Pause here to answer.

Visual: `QuestionCard`, 36 px: "A project is modelled in a spreadsheet (durations in days). (a) Write a formula for the EST of D, if A's EFT is in cell E2 and B's EFT is in cell E3. (b) The Float column shows 0, 2, 0, 1, 0, 1, 0 for A to G. State the critical path and the minimum completion time." A small sheet (32 px) with columns "Activity", "Predecessors", "Duration", "EST", "EFT", "Float": "A | – | 4", "B | – | 3", "C | A | 5", "D | A, B | 2", "E | C | 3", "F | D | 5", "G | E, F | 2"; EST and EFT empty; Float "0, 2, 0, 1, 0, 1, 0". Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> D can't start until both A and B have finished, so its EST is the larger finish, equals MAX of E2 and **E3**. The zero floats are A, C, E and G, so that's the critical path, and four plus five plus three plus two gives fourteen **days**. Writing MIN of E2 and E3 is the slip. D waits for both, so it's the larger **finish**.

Visual: the card shrinks to the top (30 px). The formula bar, 44 px: on "E3" (bold) "=MAX(E2,E3)" framed (green, (a)); E2 and E3 outline teal. The zero-float rows glow amber; on "days" (bold) framed "critical path A, C, E, G; 4 + 5 + 3 + 2 = 14 days" (green, (b)). On "slip" a red slip "=MIN(E2,E3)"; on "finish" (bold) it is crossed (caption "D waits for both: the larger finish"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. In the same spreadsheet, the minimum completion time is fourteen days, and F has one day of float. F's duration is changed from five days to six. What's the new minimum completion time? Then it's changed again, to seven days. What is it now? Pause here to answer.

Visual: `QuestionCard`, 40 px: "In the spreadsheet from the last question, the minimum completion time is 14 days and F has a float of 1 day. (a) F's duration is changed from 5 to 6 days. What is the new minimum completion time? (b) It is then changed to 7 days. What is the minimum completion time now?" The small sheet with F's duration cell ringed. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> F has one day of float, so six days is absorbed, and the project still takes fourteen **days**, now with a second critical path, A, D, F, G. At seven days, F is a day past its float, so the project takes **fifteen**. Saying fifteen days for the first change is the slip. F's one day of float soaks up the first extra **day**.

Visual: the card shrinks to the top. The small sheet: F's duration "5" → "6"; the finish cell stays "14"; on "days" (bold) framed "(a) 14 days" (green), and D and F gain YES; F → "7": on "fifteen" (bold) the finish cell "15", framed "(b) 15 days" (green). On "slip" a red slip "(a) 15 days"; on "day" (bold) it is crossed (caption "F had 1 day of float"). Hold about 1 s.

### 12. handoff: grand final day
> That's critical path analysis done. Now for networks where something flows through them. It's grand final day, and fans stream from the train station plaza, along two concourses, to the stands. Each walkway can only carry so many people a minute. So how many people a minute can actually reach the **stands**?

Visual: board clear to the final frame (decisions file section 2). The header strip changes to "MATHEMATICS STANDARD"; the new plate `ms12-stadium-plaza-v1.png` (about 1,300 px wide, left and centre); on "train station plaza" a coded label "S plaza" on the plaza; on "two concourses" labels "A north concourse" and "B south concourse"; on "the stands" label "T stands"; on "so many people a minute" coded arrows draw over the painted walkways with blue numbers (40 px): S→A "120", S→B "90", A→B "30", A→T "80", B→T "110", a chip "people per minute", and small teal dots drift along each arrow (slow, even). On "stands" (bold) chips "how many people a minute can reach the stands?" (40 px, top right), grey "Critical path analysis: done", "Next" and "?". No flow total or cut is shown. Hold about 2 s. This is f01's opening; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- EFT = EST + duration. EST = MAX of predecessors' EFTs (0 if none).
- Finish = MAX of the EFT column. Never type it in.
- LFT = MIN of successors' LSTs (the finish if nothing follows).
- LST = LFT − duration. Float = LST − EST. YES if float = 0.
- Checks: no negative float; YES rows join up; they add to the finish.

Memory aid (framed card, right side, as in scene 7): *MAX going down, MIN coming up.* Key: *EST = MAX of predecessors' EFTs. LFT = MIN of successors' LSTs. Float = LST − EST.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame: f01 opens on it.

## Teaching checks

- **Does it explain causes?** Why EFT = EST + duration (2). Why MAX for EST: wait for the slowest (3). Why the finish is the largest EFT (3). Why MIN for LFT: the most urgent successor (4). Why never type the project time: a change would not flow through, and check 1 catches it (6). Why a spreadsheet: one cell changes everything (6).
- **Misconceptions addressed:** a typed project time (6); MIN forwards (A1); MAX backwards (4, said); a change read from the YES column only (6, the finish cell); a delay inside float added in full (A2).
- **Visual standard, item by item:** 1 the school hall and the stadium plates; 2 a new stage every 30 to 60 s; 3 the sheet filling column by column with outlined references, the network's boxes filling from the sheet, one cell rippling through the sheet; 4 fixed roles with words; 5 large type (current cells 44 px); 6 hand tags; 7 g01 board in 5; 8 framed card and five bullets; 9 the finish cell ticking 8 to 9.
- **One idea at a time:** EFT (2), EST (3), LFT and LST (4), float, YES and checks (5), what if (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible (A2 restates 14 days and F's float); 10 s each; feedback about 23 s and 24 s.
- **Avoided double teaching:** scans (c02), float (c03) and changes (c05) are named in phrases; the sheet recomputes what students know.
- **Syllabus coverage:** `cida841b0a`: "Use a spreadsheet to model a project involving precedence tables" (2 to 5) "and solve related problems" (6, A1, A2).
- **Out of scope by design:** spreadsheet functions beyond MAX, MIN and IF; network flow (from f01).

## Practice questions and model answers

**Attempt 1 (scene 8; the site's lesson03 card 4 table, original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A project is modelled in a spreadsheet (durations in days). (a) Write a formula for the EST of D, if A's EFT is in cell E2 and B's EFT is in cell E3. (b) The Float column shows 0, 2, 0, 1, 0, 1, 0 for A to G. State the critical path and the minimum completion time." Table: A 4 (–); B 3 (–); C 5 (A); D 2 (A, B); E 3 (C); F 5 (D); G 2 (E, F).
Model answer: (a) =MAX(E2,E3). (b) Critical path A, C, E, G (the zero floats); minimum completion time 4 + 5 + 3 + 2 = 14 days. Classic mistake (crossed): "(a) =MIN(E2,E3)".

**Attempt 2 (scene 10; the site's "Now solve with it", original wording, HSC style, 2 marks suggested).** "In the spreadsheet from the last question, the minimum completion time is 14 days and F has a float of 1 day. (a) F's duration is changed from 5 to 6 days. What is the new minimum completion time? (b) It is then changed to 7 days. What is the minimum completion time now?"
Model answer: (a) 14 days: the extra day is absorbed by F's 1 day of float (A, D, F, G becomes a second critical path). (b) 15 days: F is now 1 day past its float. Classic mistake (crossed): "(a) 15 days".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Formal sheet | EST 0, 0, 2, 1, 2, 6, 7; EFT 2, 1, 6, 3, 3, 7, 8; LFT 2, 5, 6, 7, 8, 7, 8; LST 0, 4, 2, 5, 7, 6, 7; float 0, 4, 0, 4, 5, 0, 0; YES A, C, F, G; 2 + 4 + 1 + 1 = 8 | 2 to 5 |
| Formulas | =D2+C2; =E2; =MAX(E5,E7); =MAX(E2:E8); =MIN(G4,G6); =F2-C2; =G2-D2; =IF(H2=0,"YES","") | 2 to 5 |
| What if | venue 3: finish 9, floats 0, 5, 0, 5, 5, 0, 0; DJ 4: finish 8, E float 2; typed 8 with venue 3: floats −1 for A, C, F, G | 6 |
| Site card 4 (A1) | floats 0, 2, 0, 1, 0, 1, 0; A, C, E, G; 4 + 5 + 3 + 2 = 14; =MAX(E2,E3) | 8, 9 |
| A2 | F 6: 14 days (A, D, F, G also critical); F 7: 15 days | 10, 11 |
| Stadium (final frame) | 120, 90, 30, 80, 110 people per minute | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated in Python 3.14 (19 Nov 2026, scratchpad `cf/verify.py`, `python -I`; its scan uses the same column logic as the sheet); Codex to re-check, ideally in a real spreadsheet.

- Formal: as "Numbers used"; T 8.
- Formal with A = 3: T 9; floats B 5, D 5, E 5. With E = 4: T 8; E float 2. With A = 3 and F8 and F6 typed as 8: H2, H4, H7 and H8 = −1.
- Site card 4: EST 0, 0, 4, 4, 9, 6, 12; EFT 4, 3, 9, 6, 12, 11, 14; LFT 4, 5, 9, 7, 12, 12, 14; LST 0, 2, 4, 5, 9, 7, 12; float 0, 2, 0, 1, 0, 1, 0; F 6: T 14 (A-C-E-G and A-D-F-G); F 7: T 15.

## Memory aid check

- **"MAX going down, MIN coming up."** with key line **"EST = MAX of predecessors' EFTs. LFT = MIN of successors' LSTs. Float = LST − EST."** From the site's card 4 formulas. Meaning, as said in scenes 3, 4 and 7: the forward scan (EST) runs down the sheet with MAX; the backward scan (LFT) runs up with MIN. Assumptions checked: rows listed with predecessors above (so "down" is the forward direction); activities with no predecessors use 0, and those with no successors use =MAX of the EFT column; the IF test is exactly 0 (durations are whole numbers here). It helps a new case: an activity after C and F with EFTs in E4 and E7 has EST =MAX(E4,E7); one followed by D and E with LSTs in G5 and G6 has LFT =MIN(G5,G6).
- **Considered, not used:** "Forward max, backward min" (c02's card already says it in words; this one ties it to the sheet's direction).

## Narration length estimate

Counted by script (scratchpad `cf/count.py`, the method of `work/brief-resolve-standard-t1/count.py`, which reproduces e08's 5,632): **5,017 characters**, 13 scene headings. Characters per scene (1 to 13): 409, 435, 559, 602, 536, 515, 176, 507, 312, 273, 313, 305, 75.

At 13.3 characters per second the speech is about 377 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, final frame 2 s) 6 s; settling for the fill-downs (2 to 4), the stamps and the Gantt chart sliding in (5), the edits rippling (6) and the stadium arrows and dots (12) about 50 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 492 s**, under the 570 s cap. Feedback speech: about 23 s and 24 s.

Reserve trims if the voiced take runs long: scene 1's money-strand sentence (about 6 s; the grey chip stays); scene 5's last sentence (about 3 s).

## Scene list and build ids

Lesson key `m-s12c06` (route math-s12-c06). Explainer folder `src/explainer/lessons/math-s12-c06`; build inputs in `docs/production/claude-pm/lessons/math-s12-c06/` (at voicing).

In order (13 scene headings): hook-sheet-scans, eft-column, est-max-forward, lft-min-backward, worked-float-yes-checks, what-if, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-stadium, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | c05's frame; the empty columns |
| 30 to 65 s | 2 | The EFT column |
| 65 to 115 s | 3 | EST by MAX; the network's teal boxes |
| 115 to 170 s | 4 | LFT by MIN; LST; the violet boxes |
| 170 to 225 s | 5 | g01 board: float, YES and three checks |
| 225 to 270 s | 6 | What if: one cell, every column |
| 270 to 285 s | 7 | Framed memory card |
| 285 to 400 s | 8 to 11 | Question cards and countdowns, then feedback |
| 400 to 425 s | 12 | The stadium walkways |
| 425 to 470 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c05's last frame continues into 1; 1 to 2 stage change (the sheet fills the frame); 2 to 3 camera continue; 3 to 4 camera continue; 4 to 5 clear change to the board; 5 to 6 stage change; 6 to 7 stage change; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-c06-learning-review.md`, `science_check` = `checks/m-s12-c06-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026): the school hall is c03's brief; no existing maths plate shows a stadium or a station plaza from above (the pack's search).

Need (painted): `ms12-stadium-plaza-v1.png` (f01's opening, shown in this video's final frame; ruling 17; reused in f01, f03 and f04).

Coded: the spreadsheet, the formula bar, outlines and arrows, the small network, the stamps, the Gantt chart inset, question cards, the countdown, the stadium's arrows, labels and dots, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; `ProjectModel`, `ActivityNetwork` (boxes), `GanttChart` (inset).

Additions (kit-needs file, critical path item 8):
1. **ProjectSheet** (or the money strand's spreadsheet board in `finance-parts.tsx`, extended): columns A to I with the site's letters; a formula bar; referenced-cell outlines in role colours; fill-down on cue with a direction arrow; an editable duration cell that recomputes from ProjectModel and flashes dependants; check stamps. Check: the formal's sheet matches "Numbers used" cell for cell; C2 = 3 gives the finish 9; the typed-8 ghost shows −1 in H2, H4, H7 and H8.
2. **FlowNetwork preview** for the final frame (f01's kit: arrows over a plate, blue capacity labels, slow teal dots).

## Codex asset brief (Maths S12 C06, a stadium and station plaza from above)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-c06.md`, route entry math-s12-c06. Paint after the learning review and maths check pass and root gives the go-ahead, and before the c06 build (the plate appears in c06's final frame and opens f01; ruling 17). Save to `public/assets/maths/`. Ink and watercolour in the house style, matched to `ms12-school-hall-formal-v1.png` (c03's brief) in palette; no text, labels, numbers, logos, team colours that name a real club, people, hands or faces (no crowd, no figures, not even tiny ones); never stretch.

1. `ms12-stadium-plaza-v1.png` (1600 × 1000 px, true alpha or a softened rectangular edge): a large oval sports stadium seen from above at a steep angle (about 60 degrees), occupying the right half, its stands empty and its field green; on the left a paved train station plaza with a station canopy at the far left edge. Between them, clear paved walkways that a coded overlay will follow: one wide walkway from the plaza curving to a **north concourse** (an open paved area at the stadium's upper left), one narrower walkway from the plaza to a **south concourse** (lower left), a short connecting path from the north concourse down to the south concourse, and gates from each concourse into the stands (north gate upper middle, south gate lower middle). Keep the walkways plain, light and uncluttered (trees and lamp posts only at their edges) so arrows and labels at 40 px read on them. Leave the top 140 px and the bottom 130 px free of anything that needs to be seen.

Report inspection at 1,300 px wide on the paper background (`#f6f1e7`) with a measured overlay of the five walkway centre lines (plaza to north concourse, plaza to south concourse, north to south concourse, north concourse to the stands, south concourse to the stands) and four node points, so the build can place arrows exactly. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-c06-provenance.json`. If the f01 designer chooses another opening, only c06's final frame changes.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" (ideally in a real spreadsheet with the formulas in author note (a)), and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly, under the Standard 2 heading only.
3. Confirm the site's card 4 formulas and column letters are quoted exactly (=D2+C2, =MAX(E6,E7) pattern, =MIN(G4,G5) pattern, =MAX(E2:E8), =F2-C2, =G2-D2, =IF(H2=0,"YES","")), and the site's 14 days, A, C, E, G and F to 6 and 7 are kept.
4. Confirm both attempts carry every demand and given, and neither card shows an answer.
5. Confirm scene 1 opens on c05's final frame and scene 12 matches section 2 of the decisions file (and, once written, f01's opening).
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Critical Path Analysis in a Spreadsheet | Year 12 Maths Standard 2

(Title length: 66 characters by script.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson03.sa.html

Rescanning a project by hand after every change is slow, so let a spreadsheet do it. Model a school formal from its precedence table: the earliest finish time (EST + duration), the earliest start time with MAX (the forward scan), the latest finish time with MIN (the backward scan), the latest start, float and a YES column for the critical path. Check the sheet three ways, then change one duration and watch the whole project update. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Critical path analysis. Standard 2. The last critical path analysis video.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Use a spreadsheet to model a project involving precedence tables and solve related problems"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6

Builds on: Changing Activity Durations: What Happens to the Finish? Next: Flow Networks: Source, Sink, Capacity and Cuts.

#Year12Maths #MathsStandard #CriticalPathAnalysis #HSCScience

## Open decisions

- **1. Column order (root).** The site's letters (F LFT, G LST) are used so its formulas are quoted exactly; the kit-needs list's order (LST before LFT) is overridden.
- **2. Row order wording (root).** The pack's "rows out of order break a MAX" is not taught (spreadsheets recalculate by dependency); rows are ordered for a readable forward scan.

## Review notes

- Revision 1. Next: student learning review (trace from c05 and the money-strand spreadsheets; check that EFT is clear before it is used, that MAX and MIN feel like the scans students know, that "any activity nothing waits for" handles E and G, that the typed-8 slip lands, that A1's formula part is reachable from scene 3, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
