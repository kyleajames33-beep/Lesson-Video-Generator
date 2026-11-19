# Maths S11 F03A: How do we change the subject of a formula, including when the letter is underneath? The courier's formula rearranged once for every bill, d = st turned round, the whole multiplier 2π, the letter on the bottom of a fraction brought up first, and a check with easy numbers (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a01.md`, `a07.md`, `r10.md`, each at Revision 2) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 91; ruling 88 splits f03 into f03a (rearranging, including the unknown underneath) and f03b (y = ax² + c)). Opens on f02's final frame as specified in `math-s11-f02.md` (Decisions, "Handoff", and scene 11). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 4,892 characters by script (see "Narration length estimate"), 13 scene headings, about 455 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: third video of Year 11 Mathematics Standard (2024), Formulas and equations, playlist order 3 (f03a and f03b share outline number 3, ruling 88). Year 11 is one course for Standard 1 and Standard 2. This part covers the linear half of `cib54d5e23`; f03b covers y = ax² + c. Pre-design pack: `../pre-design/maths-standard/math-s11-f03.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year11/formulas-and-equations/lesson04.sa.html` (Rearranging Formulas, SHA256 `85bf8cdd80b824ece87303a73906a6753528df68a157e34c988473a62df4d9a2`; card 02's "uses the same inverse-operation logic as solving an equation. The difference: you are isolating a variable symbol, not finding a number" and "Rearrange first, substitute second"; card 06's check s = 5, t = 4, d = 20; `we-1` d = st to s = d/t, 180 km in 3 h, 60 km/h; `we-2` C = 2πr to r = C/(2π), "the whole multiplier, not just 2"; Q2 r = 31.4 ÷ (2 × 3.14) = 5 cm; `we-3` A = bh with 84 cm² and 7 cm, b = 12 cm; Q3, why rearranging first helps; the drill t = 240 ÷ 80 = 3 h; Trap 02's garbled sentence and the "left side" prompt (MS-80 item 1) are not used); `lesson08.sa.html` (SHA256 `963fedd859ac4fa1a9bb496342246289c904a73ac7fd581453d3e20098b681ed`; `we-2`'s cyclist, 135 km in 3 hours, 45 km/h). Route entry: `math-s11-f03` in `../../programme/maths-standard-route-inputs-8.json`. Visual system: maths studio kit; the delivery van and a road sign as reused plates; one new plate for f03b's anchor in the final frame (a picture frame); every formula, machine and board coded.

Owner rules applied: as f01 (2024 syllabus; plates for real objects, code for diagrams; no people, hands or faces; one question; one stage at a time; words before symbols; plain meanings (subject, rearrange, multiplier); g01 worked example; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a courier, a road trip, a cyclist, a rectangle's perimeter); Australian spelling; no em dashes; conversational narration).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Formulas and equations, common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-8.json` (the formula in the official wording is MathML; its text form is y = ax^2 + c):

- `cib54d5e23`: "Change the subject of linear and non-linear formulas limited to quadratics of the form y = ax^2 + c to solve problems and make decisions about solutions in the context of the problem" (shared with f03b: this video covers linear formulas, including the letter underneath; f03b covers y = ax² + c and the context decision about roots)

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353

**Boundary:** starts from f02's final frame exactly (the van `ma12-delivery-van-v1.png` at the left, about 760 px; the formula card "C = 8 + 1.50k" at the top right, "C" amber, "8" violet, "1.50" teal, "k" blue; four dockets "$41 → k = 22" (grey), "$26 → k = ?", "$53 → k = ?", "$62 → k = ?"; chips "Solve a new equation every time? Or rearrange once?", "Next" and "?"). Recalls f01 (the subject, substitution) and f02 (undoing, outside step first, the same to both sides) in a phrase or grey chip each. Teaches: the subject as the letter on its own; rearranging as f02's undoing with letters kept; a one-step rearrangement (d = st for s) with a function machine run backwards; a two-step rearrangement in reverse order with a bracket (the courier's k); dividing by the whole multiplier (r = C/(2π)); the letter underneath brought up first (s = d/t for t); checking a rearrangement with easy numbers; substituting first is fine for one answer, rearranging first pays for many (site `we-3` both ways). Stops at linear formulas. Not taught: y = ax² + c and square roots (f03b); speed with unit changes (f04a).

## Decisions

- **Anchor: the courier's four bills (reused painted plate, live).** f02 ended with four bills and the question "rearrange once?". Rearranging C = 8 + 1.50k to k = (C − 8) ÷ 1.5 answers it, and the four dockets fill instantly (22, 12, 30, 36), which is the reason to rearrange: one rearrangement, then each bill is a substitution. The van `maths/ma12-delivery-van-v1.png` (viewed 19 Nov). The $26 bill gives f01's 12 km, so the student sees the rearrangement agree with a case they already trust.
- **Road trip and cyclist (reused plate).** The site's `we-1` (180 km in 3 h, 60 km/h) and lesson08's cyclist (135 km at 45 km/h, 3 h) are drawn with the green road sign `maths/ma11-road-sign-post-v1.png` (viewed 19 Nov: a blank green highway sign on a galvanised post, true alpha), with a coded distance on its face. d = st is chosen because f04a uses all three forms.
- **The letter underneath (pack decision; Year 12 t01 and a13 need it).** s = d/t made into t = d/s: multiply both sides by t first, then divide by s. Practised again in attempt 2 (t = 240/s for s).
- **Simulations (standard item 3).**
  1. **Function machine run backwards** (scene 2; `FunctionMachine`): s enters "× t" and leaves as d; then the machine reverses, d enters "÷ t" and leaves as s, with a live readout running s = 5, t = 4 through both directions (20 out, 5 back).
  2. **Docket fill** (scene 3; `FormulaSlots`): once k = (C − 8) ÷ 1.5 is written, the four bills drop into C's slot one after another and each docket's "?" turns into its distance, about 1 s each.
  3. **Bring it up** (scene 5; `ShiftTerm`): the t tile on the bottom of d/t rises out of the fraction on "multiply both sides by t", landing beside s; then s drops under d as "÷ s".
- **Colour roles (as f01).** The letter being made the subject **amber**; values put in **blue**; fixed numbers **violet**; multipliers **teal**; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As f01. Hand tags: "subject: the letter on its own", "undo × with ÷", "both sides", "reverse order", "outside step first", "bracket the whole side", "the whole 2π", "letter underneath: bring it up", "check with easy numbers", "rearrange once, substitute many". At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** The four bills (1); the road sign and machine (2); g01 board with the docket fill (3); the circle (4); the cyclist and the fraction (5); two routes side by side (6); framed card (7); question cards (8 to 11); the picture frame for f03b (12); key notes (13).
- **Worked example (g01 layout).** Scene 3: the courier, k = (C − 8) ÷ 1.5. Crossed slip: dividing only the 8, "k = C − 8 ÷ 1.5", which gives 26 − 5.33 = 20.67 for the $26 bill, not 12 (caption "bracket the whole side").
- **Memory aid.** Framed card: "Undo the outside step first. Do it to both sides." Key line: "Letter underneath? Multiply it up first. Check with easy numbers."
- **Visual surprise.** The four dockets fill in about 4 s once the formula is rearranged, after f02 needed a whole balance scene for one bill.
- **Plain meanings at first use.** Subject ("the letter on its own, on one side of the equals sign", f01's "the one we find" recalled); rearrange or change the subject ("move things around so a different letter is on its own"); multiplier ("everything multiplying the letter"); underneath ("on the bottom of a fraction").
- **Attempts.** A1 (site `we-2` from f01 rearranged, original question): P = 2l + 2w for l, then P = 26, w = 4 gives l = 9; crossed "l = P − 2w ÷ 2 = 22" (caption "divide the whole side by 2: 2(22) + 2(4) = 52, not 26"). A2 (the site's drill reversed, original question): t = 240/s for s, s = 240/t, 3 h gives 80 km/h; crossed "s = t ÷ 240 ≈ 0.01" (caption "s was underneath: multiply it up first").
- **Mistake scene:** none separate. Dividing part of a side (3 crossed, A1 crossed); dividing by part of the multiplier (4); the letter underneath turned upside down (5 crossed, A2 crossed).
- **Cause chain taught, in order:** (1) a formula used many times for a different letter is worth rearranging once (1, 3); (2) rearranging undoes what was done to the letter, the same to both sides, as in f02 (2); (3) the outside step was done last, so it comes off first, and a bracket keeps the rest of the side together (3); (4) a letter is only alone when everything multiplying it is divided off (4); (5) a letter underneath is divided into the rest, so multiplying it up first turns the fraction into a product (5); (6) easy numbers check a rearrangement, because both forms must agree (2, 5).
- **Entry knowledge (route):** f02 (inverse operations, both sides); f01 (substitution, the subject). Stage 5: fractions as division.
- **Handoff (to math-s11-f03b, "How do we make x the subject of y = ax² + c, and which root do we keep?").** Scene 12: header "MATHEMATICS STANDARD · FORMULAS AND EQUATIONS"; the new plate `ms11s-picture-frame-v1.png` (an empty square picture frame, glass catching the light) at the left, about 700 px; at the right the formula card, 52 px: "C = 0.05s² + 12" ("C" amber, "0.05" teal, "s" blue, "12" violet) with labels "C: cost of the glass ($)" and "s: side length (cm)" (34 px); a coded quote docket, 44 px: "Quote: $32" (amber) and "s = ?" (blue); the "²" on s pulses once and stays ringed; chips "How do we undo a square?", "Next" and "?". No working. This is f03b's opening frame; scene 13 returns to it silently after the notes.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) C = 8 + 1.5k gives k = (C − 8)/1.5: 41 → 22, 26 → 12, 53 → 30, 62 → 36; slip C − 8/1.5 at 26 gives 20.67.
  (b) d = st gives s = d/t: 180/3 = 60; check s = 5, t = 4, d = 20.
  (c) C = 2πr gives r = C/(2π); 31.4 ÷ 6.28 = 5 with π ≈ 3.14 (the site's value, shown on screen as "π ≈ 3.14"; with true π the radius is 4.997, so the label matters).
  (d) s = d/t gives t = d/s: 135/45 = 3; slip s/d = 45/135 = 1/3 h.
  (e) A1: l = (P − 2w)/2 = 18/2 = 9; slip 26 − 4 = 22, and 2(22) + 2(4) = 52. A2: s = 240/t = 80; slip 3/240 = 0.0125.
  (f) Pronunciations: "k equals bracket C minus eight, all over one point five"; "r equals C over two pi"; "t equals d over s"; "s equals two hundred and forty over t".

Main question: *The courier gets bills all day. Instead of solving a new equation each time, how do we change the subject of a formula once, even when the letter we want is underneath?*
Entry knowledge (f01, f02): substitution; undoing on both sides.
Stops after: linear rearrangements (one step, two steps, whole multiplier, letter underneath) checked with easy numbers.
Handoff: math-s11-f03b: "the side length is squared: how do we undo a square?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): the new subject amber; values blue; fixed numbers violet; multipliers teal; answer green; mistake red. Header strip "MATHEMATICS STANDARD · FORMULAS AND EQUATIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: four bills
> Four bills, forty-one dollars, twenty-six, fifty-three and sixty-two. For each one, we want the distance. We could solve a new equation every time. Or we could rearrange the formula once, so k is on its own, and then just substitute each bill. So how do we change the subject of a **formula**?

Visual: opens on f02's final frame exactly (see Boundary). On "solve a new equation every time" the first docket's grey working from f02 flickers small beside each "?" (four ghost balances, grey, 1 s). On "k is on its own" a dashed amber box appears where a rearranged formula will go, empty. On "formula" heading "Changing the subject" writes on, and the question chip "Rearrange once, then substitute?" moves to the top right.

### 2. the subject, and undoing with letters
> The subject is the letter on its own, on one side of the equals sign. In d equals s t, distance equals speed times time, d is the subject. To make s the subject, ask what's been done to s. It's been multiplied by t. Undo that by dividing both sides by **t**. So s equals d over t. That's the same undoing we used to solve equations, but we keep the letters instead of numbers. Check it with easy numbers. A speed of five and a time of four give a distance of twenty, and twenty over four is five, so it **matches**. Now any trip works. A hundred and eighty kilometres in three hours is sixty kilometres an **hour**.

Visual: stage change: the van shrinks to a 260 px badge at the top left with the four dockets as a 30 px strip. The road sign `ma11-road-sign-post-v1.png` (about 520 px tall) at the left. Formula strip, 52 px: "d = st", the d ringed, hand tag "subject: the letter on its own". The function machine (about 1,000 px wide) at the right: "s → × t → d". On "multiplied by t" the "× t" box lights teal; on "t" (first bold) the machine reverses: "d → ÷ t → s", hand tag "undo × with ÷", and rows, 52 px: "d ÷ t = st ÷ t" then "s = d/t" (s amber), hand tag "both sides". Grey chip "f02: undo, the same to both sides". On "easy numbers" the machine's readout runs: "s = 5, t = 4 → d = 20 → 20 ÷ 4 = 5"; on "matches" a green tick, hand tag "check with easy numbers". On "hour" the sign's face shows coded white text "180 km" and a coded clock chip "3 h"; row "s = 180 ÷ 3 = 60 km/h" framed green.

### 3. worked example: two steps, in reverse order
> Back to the courier. C equals eight plus one point five zero k, and we want k on its own. Ask what was done to k, in order. It was multiplied by one fifty, then eight was added. So undo them in reverse order, outside step first. Take eight from both sides, so C minus eight equals one point five zero k. Then divide both sides by one point five. k equals bracket C minus eight, all over one point **five**. The bracket keeps C minus eight together, so the whole side is divided. Check with f01's trip. A twenty-six dollar bill gives eighteen over one point five, twelve kilometres, **right**. Now every bill is one quick substitution. Forty-one gives twenty-two, fifty-three gives thirty, sixty-two gives thirty-**six**. Dividing only the eight is the slip. C minus eight over one point five, without the bracket, gives the wrong **distance**.

Visual: clear change to the g01 board. Task strip, 44 px: "Make k the subject of C = 8 + 1.50k." Givens card, 44 px: "k: distance (km), find" (amber), "C: the bill ($)" (blue). A small machine strip above the rows, 40 px: "k → × 1.50 → + 8 → C", then reversed "C → − 8 → ÷ 1.5 → k", hand tag "reverse order". Rows, 52 px: "C − 8 = 1.50k" (hand tag "outside step first"); on "five" "k = (C − 8) ÷ 1.5" (k amber), and the dashed box from scene 1 fills with it; hand tag "bracket the whole side". On "right" a check row, 44 px: "(26 − 8) ÷ 1.5 = 18 ÷ 1.5 = 12 ✓" (grey chip "f01: 12 km"). The docket fill simulation: on "every bill" the van badge's strip enlarges back to four dockets, and 41, 53, 62 drop into C's slot in turn; on "six" the last docket reads "$62 → k = 36"; the four read 22, 12, 30, 36 (blue), framed green together; hand tag "rearrange once, substitute many". On "dividing only the eight" a red slip "k = C − 8 ÷ 1.5" writes small at the right; on "distance" its value "26 − 5.33 = 20.67 km ✗ (should be 12)" writes and it is crossed (caption "bracket the whole side").

### 4. divide by the whole multiplier
> Sometimes the multiplier is more than one thing. The distance around a circle is C equals two pi r. To get r on its own, divide by everything that multiplies it, the whole two pi, not just the two. So r equals C over two **pi**. Divide by two alone, and you're left with pi r, so r still isn't on its own. Check it with numbers. A circle thirty-one point four centimetres around, with pi as three point one four, has a radius of thirty-one point four over six point two eight, which is five **centimetres**.

Visual: clear change: a coded circle (about 560 px) at the left with its edge traced teal ("C") and a radius line amber ("r"). Formula strip, 52 px: "C = 2πr", with "2π" boxed teal, hand tag "the whole 2π". Rows, 52 px: "C ÷ 2π = 2πr ÷ 2π", then on "pi" "r = C/(2π)" (r amber). On "two alone" a grey row "C ÷ 2 = πr" with "π" ringed and a small tag "r not alone yet". On "check" a chip "π ≈ 3.14"; row, 44 px: "r = 31.4 ÷ (2 × 3.14) = 31.4 ÷ 6.28"; on "centimetres" "= 5 cm" framed green, and the circle's radius labels "5 cm".

### 5. the letter underneath
> Now the trickiest kind. Average speed is s equals d over t. What if we want t, the time? Here t is underneath, on the bottom of the fraction. Bring it up first. Multiply both sides by t, and s t equals d. Now t is just multiplied by s, so divide both sides by s, and t equals d over **s**. Check with easy numbers. A speed of sixty and a distance of a hundred and eighty give three hours, which is sensible. So a cyclist riding a hundred and thirty-five kilometres at forty-five kilometres an hour takes three **hours**. Writing t equals s over d is the slip. That gives a third of an hour for a hundred and thirty-five kilometres, far too **quick**.

Visual: stage change: the road sign returns small at the left with "135 km" on its face. Formula strip, 52 px: "s = d/t", the t on the bottom ringed amber, hand tag "letter underneath: bring it up". The bring-it-up simulation: on "multiply both sides by t" a "× t" lands on both sides and the t tile rises out of the fraction: "st = d"; on "divide both sides by s" the s drops under d: on "s" (bold) "t = d/s" (t amber). Check row, 44 px: "s = 60, d = 180 → t = 180 ÷ 60 = 3 h ✓". On "hours" a task row "t = 135 ÷ 45 = 3 h" framed green. On "s over d" a red slip "t = s/d = 45 ÷ 135 = ⅓ h" writes; on "quick" it is crossed (caption "135 km in 20 minutes? Too quick").

### 6. rearrange first, or substitute first?
> Do you always have to rearrange first? Not always. A rectangle's area is A equals b h, base times height. Say the area is eighty-four square centimetres, and the height is seven. Substitute first, and eighty-four equals seven b, so b is twelve centimetres. Or rearrange first, b equals A over h, which is eighty-four over seven, twelve again. Same answer either way. For one answer, either is fine. For lots of answers, like the courier's bills, rearrange once, then **substitute**.

Visual: stage change: a coded rectangle (about 520 × 300 px) at the top centre labelled "A = 84 cm²" (blue), "h = 7 cm" (blue) and "b = ?" (amber); formula strip, 52 px: "A = bh". Two columns below, 44 px, headed "substitute first" (left) and "rearrange first" (right). Left rows: "84 = b × 7", "b = 84 ÷ 7 = 12"; right rows: "b = A/h", "b = 84 ÷ 7 = 12". Both write as spoken, then frame green together: "b = 12 cm", hand tag "same answer". On "substitute" the van badge's four dockets pulse once and a hand tag reads "one answer: either way. Many answers: rearrange once."

### 7. memory aid
> Here's the idea to keep. Undo the outside step first, and do it to both sides. If the letter you want is underneath, multiply it up first. Then check with easy **numbers**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the reversed function machine "C → − 8 → ÷ 1.5 → k", small. Main line, hand font 56 px: "Undo the outside step first. Do it to both sides." On "numbers" the key line, 40 px: "Letter underneath? Multiply it up first. Check with easy numbers." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. The perimeter of a rectangle is P equals two l plus two w. Make l the subject. Then find the length of a rectangle with a perimeter of twenty-six metres and a width of four metres. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The perimeter of a rectangle is P = 2l + 2w. (a) Make l the subject. (b) Find the length of a rectangle with a perimeter of 26 m and a width of 4 m." The full question stays on screen. Picture slot: a coded rectangle labelled "l" and "w", no numbers. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Take two w from both sides, so P minus two w equals two l. Then divide both sides by two. l equals bracket P minus two w, over **two**. With twenty-six and four, that's eighteen over two, nine metres. Dividing only the two w is the slip. Twenty-six minus four gives twenty-two metres, which is far too **long**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "P − 2w = 2l"; on "two" "l = (P − 2w) ÷ 2" (l amber); "l = (26 − 2 × 4) ÷ 2 = 18 ÷ 2 = 9"; framed answer (green) "(a) l = (P − 2w)/2 (b) 9 m". On "long" a red slip "l = P − 2w ÷ 2 = 26 − 4 = 22" writes and is crossed (caption "divide the whole side by 2: 2(22) + 2(4) = 52, not 26"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. The time, t hours, for a two hundred and forty kilometre trip at s kilometres per hour is t equals two hundred and forty over s. Make s the subject, and find the speed for a trip that takes three hours. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The time, t hours, for a 240 km trip at s km/h is t = 240/s. (a) Make s the subject. (b) Find the speed for a trip that takes 3 hours." Picture slot: the road sign, small, with "240 km" on its face. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> s is underneath, so multiply both sides by s first, s t equals two hundred and forty. Then divide by t. s equals two hundred and forty over **t**. For three hours, that's eighty kilometres an hour. Writing s equals t over two hundred and forty is the slip. It gives about zero point zero one, far too **slow**.

Visual: the card shrinks to the top. Rows, 44 px: "st = 240"; on "t" "s = 240/t" (s amber); "s = 240 ÷ 3 = 80"; framed answer (green) "(a) s = 240/t (b) 80 km/h". On "slow" a red slip "s = t ÷ 240 ≈ 0.01" writes and is crossed (caption "s was underneath: multiply it up first"). Hold about 1 s.

### 12. handoff
> So adding and multiplying undo neatly. But a framing shop prices the glass for a square frame with C equals zero point zero five s squared, plus twelve. Your quote is thirty-two dollars. This time, the side length is squared. How do we undo a **square**? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the handoff frame (see Decisions, "Handoff"): the picture frame plate `ms11s-picture-frame-v1.png` at the left; the formula card "C = 0.05s² + 12" with its labels; on "thirty-two dollars" the docket "Quote: $32" and "s = ?"; on "square" the "²" pulses and stays ringed, chip "How do we undo a square?"; on "next" chips "Next" and "?". Hold about 2 s. This is f03b's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- The subject is the letter on its own.
- Rearrange by undoing: outside step first, the same to both sides.
- Divide by the whole multiplier: r = C ÷ (2π).
- Letter underneath? Multiply it up first: s = d/t gives t = d/s.
- Check a rearrangement with easy numbers.

Memory aid (framed card, right side, as in scene 7): *Undo the outside step first. Do it to both sides.* Key: *Letter underneath? Multiply it up first. Check with easy numbers.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and f03b's opening frame.

## Teaching checks

- **Does it explain causes?** Why rearrange: one rearrangement serves every bill (1, 3). Why divide both sides: the equation stays true (2). Why reverse order: the outside step was done last (3). Why the bracket: the whole side is divided (3 crossed). Why the whole 2π: dividing by 2 leaves π with r (4). Why bring the letter up: it is divided into d, so multiplying both sides by it removes the fraction (5). Why easy numbers: both forms must agree (2, 5).
- **Misconceptions addressed:** dividing part of a side (3 crossed, A1 crossed); dividing by part of the multiplier (4); turning the fraction upside down (5 crossed, A2 crossed); the subject "on the left" (avoided: "on one side", MS-80 item 1).
- **Visual standard, item by item:** 1 the van and the four bills from the first frame, paid off in 3; 2 a new stage every 30 to 60 s; 3 the reversible function machine with a live readout, the docket fill, the letter rising out of the fraction; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 3; 8 framed card and five bullets; 9 four dockets filling in about 4 s.
- **One idea at a time:** one step (2), two steps (3), whole multiplier (4), underneath (5), when to rearrange first (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 23 s and 23 s.
- **Avoided double teaching:** f02's undoing is recalled on a grey chip; f01's substitution is the check.
- **Syllabus coverage:** `cib54d5e23`, linear part: change the subject (2 to 5, A1, A2; key notes 1 to 4); solve problems (3, 5, A1, A2; key note 5).
- **Out of scope by design:** y = ax² + c and roots (f03b); unit changes (f04a).

## Practice questions and model answers

**Attempt 1 (scene 8; original, HSC style, 2 marks suggested, not an official marking scheme).** "The perimeter of a rectangle is P = 2l + 2w. (a) Make l the subject. (b) Find the length of a rectangle with a perimeter of 26 m and a width of 4 m."
Model answer: (a) P − 2w = 2l, so l = (P − 2w)/2. (b) l = (26 − 8)/2 = 9 m. Classic mistake (crossed): "l = P − 2w ÷ 2 = 22".

**Attempt 2 (scene 10; original, HSC style, 2 marks suggested).** "The time, t hours, for a 240 km trip at s km/h is t = 240/s. (a) Make s the subject. (b) Find the speed for a trip that takes 3 hours."
Model answer: (a) st = 240, so s = 240/t. (b) s = 240 ÷ 3 = 80 km/h. Classic mistake (crossed): "s = t ÷ 240 ≈ 0.01".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Courier | k = (C − 8) ÷ 1.5: $41 → 22, $26 → 12, $53 → 30, $62 → 36; slip 26 − 8 ÷ 1.5 ≈ 20.67 | 1, 3 |
| Road trip (site `we-1`) | s = d/t; 180 ÷ 3 = 60 km/h; check s = 5, t = 4, d = 20 | 2 |
| Circle (site `we-2`, Q2) | r = C/(2π); 31.4 ÷ (2 × 3.14) = 31.4 ÷ 6.28 = 5 cm (π ≈ 3.14) | 4 |
| Cyclist (lesson08 `we-2`) | t = d/s; 135 ÷ 45 = 3 h; check 180 ÷ 60 = 3; slip 45 ÷ 135 = 1/3 h | 5 |
| Rectangle area (site `we-3`) | 84 = 7b or b = A/h: 84 ÷ 7 = 12 cm | 6 |
| A1 | l = (P − 2w)/2 = (26 − 8)/2 = 9 m; slip 22; 2(22) + 2(4) = 52 | 8, 9 |
| A2 | s = 240/t; 240 ÷ 3 = 80 km/h; slip 3 ÷ 240 = 0.0125 | 10, 11 |
| Handoff | C = 0.05s² + 12, quote $32 (not solved here; f03b finds 20 cm) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (19 Nov 2026, scratchpad `s11f/verify.py`, `python -I`; 201 checks across f01 to f08, 0 failures); Codex to re-check.

- (C − 8)/1.5 at C = 41, 26, 53, 62: 22, 12, 30, 36; 26 − 8/1.5 = 20.666...
- 180/3 = 60; 20/4 = 5.
- 31.4/(2 × 3.14) = 5.
- 135/45 = 3; 45/135 = 1/3.
- 84/7 = 12.
- (26 − 2 × 4)/2 = 9; 26 − 8/2 = 22; 2 × 22 + 2 × 4 = 52.
- 240/3 = 80; 3/240 = 0.0125.

## Memory aid check

- **"Undo the outside step first. Do it to both sides."** with key line **"Letter underneath? Multiply it up first. Check with easy numbers."** Original. Meaning, as said in scene 6: rearranging reverses the operations done to the wanted letter, last one first, keeping the equation balanced; a letter in a denominator is cleared by multiplying both sides by it; a quick substitution of simple values confirms the new form. Assumptions checked: the wanted letter appears once (true for every formula here; formulas with the letter twice are beyond the syllabus point); "outside" means the operation applied last, which the machine strip shows. It helps a new case: I = Prn for P (Year 12 i01) gives P = I/(rn) by dividing by the whole multiplier rn, and y = k/x for x (Year 12 a13) gives x = k/y by bringing x up first. Introduced after scenes 2 to 6.
- **Considered, not used:** the "cover-up triangle" for d = st (fast, but it only works for three-letter products and hides the undoing that f03b and Year 12 need).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s11f/count.py`, which reproduces e08's 5,632): **4,892 characters**, 13 scene headings. Characters per scene (1 to 13): 289, 603, 827, 499, 638, 478, 168, 213, 303, 234, 302, 263, 75.

At 13.3 characters per second the speech is about 368 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the machine (2), the docket fill (3), the rising tile (5) and the two columns (6) about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 455 s (7 min 35 s)**, 115 s under the 570 s cap. At 4,892 characters it sits just under the 5,000 guide, like r08, r09 and t09 (ruling 55): one main question at Standard pace, with no padding. Feedback speech: about 23 s and 23 s.

Reserve trims if the voiced take runs long: scene 4's number check (the last sentence; about 9 s; the rearranged formula stands without it); scene 2's "Now any trip works ..." sentence (about 6 s; the sign's 60 km/h can stay on screen silently).

## Scene list and build ids

Lesson key `m-s11f03a` (route math-s11-f03, part a). Explainer folder `src/explainer/lessons/math-s11-f03a`; build inputs in `docs/production/claude-pm/lessons/math-s11-f03a/` (at voicing).

In order (13 scenes): hook-four-bills, subject-undo, worked-two-step, whole-multiplier, letter-underneath, two-routes, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 22 s | 1 | f02's four bills |
| 22 to 85 s | 2 | The road sign and the machine run backwards |
| 85 to 160 s | 3 | g01 board: the courier, then the docket fill |
| 160 to 200 s | 4 | The circle and the whole 2π |
| 200 to 255 s | 5 | The letter underneath |
| 255 to 290 s | 6 | Two routes side by side |
| 290 to 305 s | 7 | Framed memory card |
| 305 to 385 s | 8 to 11 | Question cards and countdowns, then feedback |
| 385 to 405 s | 12 | The picture frame for f03b |
| 405 to 450 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: opens on f02's frame; 1 to 2 stage change (the van becomes a badge); 2 to 3 clear change to the board; 3 to 4 clear change; 4 to 5 stage change; 5 to 6 stage change to the two columns; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-f03a-learning-review.md`, `science_check` = `checks/m-s11-f03a-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, read only, each opened): `ma12-delivery-van-v1.png` (reused from f01 and f02); `ma11-road-sign-post-v1.png` (a blank green highway sign on a galvanised post, true alpha; its blank face takes a coded distance); no picture frame plate exists (f03b's anchor needs one).

Need (painted, new; see the Codex asset brief): `ms11s-picture-frame-v1.png` (first seen in this video's final frame, painted one video early under ruling 17). Reused: `ma12-delivery-van-v1.png` (1 to 3), `ma11-road-sign-post-v1.png` (2, 5, A2).

Coded: the formulas, the function machine, the dockets, the circle, the fraction tiles, the board, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `FunctionMachine`, `ShiftTerm` and `StudioCancellation` (working-parts.tsx), `FormulaSlots` (from f01), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions: none essential (kit-needs row f03). `FunctionMachine` needs a reverse mode (the boxes swap order and their operations invert, with the readout running the other way); if it lacks one, the builder adds it as a prop and records it in the kit-needs file.

## Codex asset brief (Maths S11 F03A, a picture frame for f03b)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the designs are `docs/production/claude-pm/lessons/math-s11-f03a.md` (final frame) and `math-s11-f03b.md` (anchor). Paint after both learning reviews and maths checks pass and root gives the go-ahead, and before the f03a build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma11-road-sign-post-v1.png` and `maths/ma12-timber-deck-top-v1.png`; no text, letters, numbers, logos, brand names, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch; keep the native aspect ratio.

1. `ms11s-picture-frame-v1.png` (about 1400 × 1400 px): an empty square picture frame seen straight on, a warm natural timber moulding about 8 per cent of the width, with a sheet of clear glass inside showing a soft diagonal reflection and a plain white backing board behind it (no picture, no mat lettering). Perfectly square outside and inside, so a coded side-length arrow fits along the bottom edge.

Report inspection on the paper background (`#f6f1e7`) at 700 px and 360 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms11s-f03a-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly (text form y = ax^2 + c), and that the description quotes the same wording.
3. Confirm the site's `we-1` and `we-2` keep their rearrangements and the π ≈ 3.14 label stays with the 5 cm answer; confirm Trap 02's garbled sentence and the "left side" prompt (MS-80 item 1) are not used.
4. Confirm both attempts carry every demand and neither card nor picture shows an answer.
5. Confirm scene 1 matches f02's final frame and scene 12's frame shows no working for s.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Changing the Subject of a Formula | Year 11 Maths Standard

(Title length: 58 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson04.sa.html

A courier gets bills all day and wants the distance for each one. Instead of solving a new equation every time, rearrange the formula once. See what the subject of a formula is, how rearranging uses the same undoing as solving an equation, why you undo the outside step first and keep a bracket around the rest, why you divide by the whole multiplier (2π, not 2), how to handle a letter on the bottom of a fraction, and how easy numbers check your rearrangement. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Formulas and equations. Year 11 is one course for Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024), Year 11:
"Change the subject of linear and non-linear formulas limited to quadratics of the form y = ax^2 + c to solve problems and make decisions about solutions in the context of the problem" (linear formulas in this video; y = ax^2 + c in the next)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353

Builds on: Solving Equations from Word Problems. Next: Rearranging y = ax² + c.

#Year11Maths #MathsStandard #Formulas #HSCScience

## Open decisions

- **1. Scene 4's numbers (learning review).** The circle check uses the site's π ≈ 3.14 so that 31.4 cm gives exactly 5 cm. If the review finds the approximation distracting, drop the check (reserve trim 1) and keep the rearrangement only.
- **2. "Trickiest kind" (learning review).** Scene 5 flags the letter underneath as the hardest case to earn attention. Check that it does not discourage; the alternative opener is "Now a letter in a different place."

## Review notes

- Student learning review: trace from f01, f02 and Stage 5 fractions only. Check that "subject" is clear and is not tied to the left side; that the reversed machine makes "reverse order" visible; that the bracket in k = (C − 8) ÷ 1.5 has its reason; that the letter-underneath move is followed at speed; that the four dockets make the point of rearranging; that the cards give nothing away. Then the Codex maths check and error check, then voicing and a build to grade A.
