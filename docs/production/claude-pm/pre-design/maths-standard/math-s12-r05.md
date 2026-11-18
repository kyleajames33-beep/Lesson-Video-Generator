# math-s12-r05: How do we construct a scale drawing?

Maths Standard research pack (Year 12, Ratios and rates), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Ratios and rates, Ratios):

- `ci9857fa6f`: Construct scale drawings, with and without using digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa96edbda5). Site coverage: covered.

Standard 1: no matching point (Standard 1 obtains measurements from drawings, r06, but does not construct them). This is a CMS codename, not a published content-point code.

**Course:** Standard 2 only. Standard 1 viewers go from r04 to r06, so r06 must not assume this video.

**Entry knowledge:** math-s12-r04: `ci58f841f3` (plan length = real length ÷ n, with the real length first converted to the drawing's unit). math-s11-a01: `ci29461234` (m to cm).

**Prior video:** math-s12-r04 (two-route frame, Standard 2 panel: a room outline on squared paper, "will it fit the page?").

**Start:** You want to rearrange your bedroom without dragging the bed around ten times. Draw it to scale first, and move paper cut-outs instead.

**Stop:** Choose a scale that fits: convert the real lengths to centimetres, divide each by the space available, take the larger of the two factors, then round up to a friendly scale (1 : 20, 1 : 25, 1 : 50, 1 : 100) because rounding up shrinks the drawing and it still fits; convert every real length with the same factor (a drawing where the door is not scaled is not a scale drawing); rule it, label plan and real lengths, and write the scale; with a digital tool: set the scale, then type real measurements, and check the tool's drawing against the paper one. Reading costs and materials from a plan is r06.

**Next:** math-s12-r06.

## 2. Site order, sections and worked examples

Read-only source: [ratios-and-rates/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/ratios-and-rates/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `6b9c0cef9af224777799292c5c7187a701cdd609f9d5a0df5680ac04b38efd05`. Sections used: `construct-scale-drawings` (card 05, worked example 4, the quick check), `build-foundation` (worked example 2), `preview-vocabulary` (scale drawing key term), `independent-practice` (drill 2, SA 1 (b)).

### Source lesson03, card 05 "Constructing a scale drawing"

"When the exam asks you to construct a scale drawing, the hard part is not the drawing. It is choosing a scale that makes the whole thing fit the space you have been given." "Work out how many times the real object must shrink to fit, in both directions, then round the scale factor up to a friendly number. Rounding up shrinks the drawing further, so it still fits. Rounding down does not."

Worked example 4, choosing a scale: "Fit a room $6\text{ m}$ by $4\text{ m}$ into a box $15\text{ cm}$ by $10\text{ cm}$ ... $600 \div 15 = 40$ and $400 \div 10 = 40$ ... $1:40$ fills the box exactly ... Take the larger of the two answers ... Choose $1:50$, giving $12\text{ cm}$ by $8\text{ cm}$".

Box: "Every length uses the same factor. A drawing where the walls are scaled but a door or a window is not is no longer a scale drawing". "Digital tools do the arithmetic for you but not the thinking. In a drawing program you still set the scale first, then enter real measurements. On paper you divide each real length by the scale factor, then rule it. The two methods must give the same drawing, and that is the check." Quick check: "A wall is $7.5\text{ m}$ long. At a scale of $1:250$, how long is it on the plan?" (B, 3 cm).

### Source lesson03, worked example 2 and key term

Worked example 2: "A room is $12\text{ m}$ long. Draw it at $1:150$ ... $12\text{ m} = 1200\text{ cm}$ ... $1200 \div 150 = 8$ ... Plan length $= 8\text{ cm}$". Key term: "a $6\text{ m}$ room drawn at $1:50$ appears as a $12\text{ cm}$ line, and a $3\text{ m}$ wall in the same room appears as $6\text{ cm}$." In-your-book task: "Sketch the $6\text{ m}$ by $4\text{ m}$ room at $1:50$ using a ruler, then label each side with both the plan length and the real length."

### Source lesson03, drill 2 and SA 1 (b)

Drill 2: "A fence is $20\text{ m}$ long. How long is it on a plan drawn at $1:400$?" (5 cm). SA 1 (b): "A doorway is $0.9\text{ m}$ wide ... How wide is it on the plan" at 1 : 150 (0.6 cm).

## 3. Recalculation

- Worked example 4: 600 ÷ 15 = 40, 400 ÷ 10 = 40; at 1 : 50, 12 cm by 8 cm. Worked example 2: 1200 ÷ 150 = 8 cm. Quick check: 750 ÷ 250 = 3 cm. Key term: 600 ÷ 50 = 12 cm, 300 ÷ 50 = 6 cm. Drill 2: 2000 ÷ 400 = 5 cm. SA 1 (b): 90 ÷ 150 = 0.6 cm.
- Question 1: 420 ÷ 10 = 42, 360 ÷ 8 = 45, so at least 45: 1 : 50 gives 8.4 cm by 7.2 cm; bed 200 ÷ 50 = 4 cm by 150 ÷ 50 = 3 cm. Question 2: 2800 ÷ 200 = 14 cm, 1500 ÷ 200 = 7.5 cm; 4.9 m key length 2.45 cm; 3.6 m centre circle 1.8 cm.
- Anchors: veggie bed 2.4 m by 1.2 m at 1 : 20 is 12 cm by 6 cm; a 9 m by 6 m yard at 1 : 50 is 18 cm by 12 cm.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-r/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Taking the smaller of the two factors (the drawing then overflows in the other direction).
- Rounding the factor down to a friendly number (1 : 40 to 1 : 30 makes the drawing bigger and it no longer fits).
- Forgetting to convert metres to centimetres before dividing (drill 2's option C).
- Scaling the walls but drawing furniture or doors by eye.
- No scale written on the drawing.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A box (the space on the page) and a room outline that shrinks to fit: two divisions ("600 ÷ 15 = 40", "400 ÷ 10 = 40"), the larger chosen, then a slider of friendly scales (1 : 25, 1 : 40, 1 : 50, 1 : 100); at 1 : 25 the room spills out of the box in red; at 1 : 50 it sits inside with a margin.
- Ruling the drawing on squared paper: a coded ruler draws each side with its plan length and its real length as two labels.
- Paper cut-outs (bed, desk, wardrobe) at the same scale sliding around the room; a door swing arc that must stay clear.
- The digital-tool check: an unbranded drawing app panel where "scale 1 : 50" is set and real sizes are typed, producing the same outline, overlaid on the paper drawing.

Advanced reuse (visual parts only): `BoardGrid` (series-parts.tsx) as squared paper; `ParameterSlider` and `LiveReadoutBoard` for the scale choice; `ScreenApp` explorer mode for the digital tool; `DrawnMark`. Kit needs: ScalePlan (also r04 and r06), with a "fit the box" mode.

## 6. Two original candidate practice questions

### Question 1

A bedroom is 4.2 m long and 3.6 m wide. It has to be drawn inside a space 10 cm by 8 cm on a page. (a) Find the smallest scale factor that fits each direction. (b) Choose a friendly scale and give the plan dimensions of the room. (c) The bed is 2.0 m by 1.5 m. How big is it on the plan?

**Worked answer:** (a) 420 ÷ 10 = 42 and 360 ÷ 8 = 45, so the factor must be at least 45. (b) 1 : 50: 420 ÷ 50 = 8.4 cm and 360 ÷ 50 = 7.2 cm, inside the 10 cm by 8 cm space. (c) 4 cm by 3 cm.

### Question 2

A basketball court is 28 m long and 15 m wide. (a) Draw it at a scale of 1 : 200: what are its plan dimensions? (b) The centre circle has a diameter of 3.6 m. What diameter should the circle be on the plan? (c) Explain why drawing the centre circle 3 cm wide would no longer make this a scale drawing.

**Worked answer:** (a) 2800 ÷ 200 = 14 cm by 1500 ÷ 200 = 7.5 cm. (b) 360 ÷ 200 = 1.8 cm. (c) Every length must use the same factor; 3 cm would mean the circle is 6 m across, so the circle and the court would be at different scales.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (a): "42 is enough", crossed, "both directions must fit: take 45"). Answers were checked with SymPy. Court dimensions are a labelled example, not a cited standard.

## 7. Everyday anchors

- **Rearranging a bedroom:** draw the room at 1 : 50 and move scaled paper cut-outs of the bed and desk (the site's 6 m by 4 m room is a bigger space, so use it as the worked example and the bedroom as the anchor) (home; a real reason to draw to scale).
- **A backyard veggie garden plan:** a 9 m by 6 m yard at 1 : 50 (18 cm by 12 cm) with 2.4 m by 1.2 m raised beds drawn as 4.8 cm by 2.4 cm (home and garden; several objects at one scale).
- **Planning in an app:** a free home-design app (unbranded) where the scale is set first and real sizes typed, compared with the paper drawing (phones and digital tools; the syllabus's "with digital tools").

Varied everyday contexts (home, garden, apps). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Standard packs (grepped 18 November 2026: "bedroom", "veggie" and "vegetable garden" no hits; netball courts are Advanced w24, w25 and g06, so Question 2 uses a basketball court with no plate; "basketball" in Advanced is a shot arc, a different idea). Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 7: MS-39 (the unit rule on card 04 says never convert before scaling, while this video must convert real metres to centimetres before dividing; teach the two directions plainly).

Decisions for Claude:

- **Digital tools:** show the tool doing the arithmetic but not the choice of scale; keep it unbranded (no real app name).
- **Standard 2 only:** the final frame hands to r06 (a floor plan with a kitchen bench and "$320 a metre"), which Standard 1 reaches from r04; r06 must not depend on anything taught here.
- Pace: not at risk; fits 6 to 7 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
