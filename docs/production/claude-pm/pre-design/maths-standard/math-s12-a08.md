# math-s12-a08: How do we sketch a graph that tells the story of a real situation?

Maths Standard research pack (Year 12, Algebraic relationships), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 1 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 1 (Year 12, Algebraic relationships):

- `cice949e38` (Graphs of practical situations): Represent the description of a real-world situation graphically [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa493dfdfb). Site coverage: missing. Gap: no site lesson teaches drawing a graph from a description of a real situation, and the site has no Standard 1 pages.

Standard 2: no matching point. The video is optional for Standard 2 students (useful practice for reading practical graphs before a11 and the Ratios and rates distance-time graphs).

These are CMS codenames, not published content-point codes. Exact HTML is in the crosswalk and route inputs.

**Course:** Standard 1 only (Standard 2 optional). Root ruling 2: this is the only Standard 1-only video in Year 12. Root ruling 3: it teaches from the syllabus alone, a recorded exception limited to missing content.

**Entry knowledge:** math-s12-a07 and math-s12-a05 (shapes: straight lines for steady change, curves that speed up or slow down). math-s11-l03: `cib2d6c0df` (in a linear model the gradient is the rate of change and the y-intercept is the starting value). math-s11-l01: `ci94641a48` (reading gradient from a graph: steeper means faster). Distance-time graphs (`ci30ebbe40`) are taught later in Year 12 (math-s12-r12), so this video must not rely on them.

**Prior video:** math-s12-a07.

**Start:** a07 ended on a model that goes flat at a cap. A graph can tell a whole story: going up, staying level, going down. Read a story, then draw it.

**Stop:** Turn a description into a sketch: choose and label the axes (time usually across), mark the starting value, then for each part of the story decide whether the quantity rises, falls or stays the same, and whether it changes steadily (a straight piece) or speeds up or slows down (a curved piece); steeper means faster; a flat piece means no change; join pieces without gaps when the quantity cannot jump. Match descriptions to graphs. Exact distance-time calculations are math-s12-r12.

**Next:** math-s12-a09 (Standard 2 continues; Standard 1 continues to math-s12-i01, since a09 to a13 are Standard 2 only).

## 2. Site order, sections and worked examples

No site lesson. Checked in the read-only clone (`C:/Users/kygs/teaching-app-fix`, HEAD 5d74a62729764d93f6bf22c3d09c6535f28b8090): no page in `subjects/maths-standard/year12/` or `year11/` teaches sketching a graph from a worded description (the crosswalk reports this point as missing). The nearest material is lesson03's graphing of exponential tables and lesson05's reading of practical quadratic graphs, which go from equation to graph, not from words to graph.

This video is original teaching from the syllabus. Section 3 lists the numbers used in the candidate questions only.

## 3. Recalculation

- Question 1: 40 GB, 1 GB a day for 10 days leaves 30 GB; flat for days 10 to 15; then 2 GB a day reaches 0 when 30 − 2(d − 15) = 0, at day 30.
- Question 2: out for 1 hour, stopped 0.5 hours, back for 1 hour at the same speed, so back at the depot at 2.5 hours.

Checked with SymPy 1.14.0 (`work/brief-standard-a/recalc.py`).

## 4. Misconceptions and HSC-style traps

- Drawing a picture of the situation (a hill for a trip "uphill") instead of a graph of the quantity.
- Leaving out a flat piece for "stopped" or "nothing changed".
- Making the return trip steeper or shallower than the description says.
- Starting the graph at the origin when the story starts somewhere else (a full tank, a full data allowance).
- Gaps or vertical jumps where the quantity cannot change instantly.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A story strip of short sentences across the top; as each sentence lights, its piece of graph draws below (rising, flat, falling; straight or curved), so each narrated change appears on screen.
- A "steeper means faster" comparison: the same rise drawn over a short and a long time.
- A matching task: three short stories and three small graphs with lettered labels; lines join each story to its graph during feedback only.
- The object beside the graph, as a painted or reused plate, with a coded readout that moves with the rider (a phone's data meter, a van on a road strip, a petrol price board).

Kit parts: `StudioPlot` with `piecewiseFamily` (calc-parts.tsx) for straight and curved pieces, `FunctionRider` (fn-sim.tsx) moving along the graph, `LiveReadoutBoard`, `HandTag`. A new small part would help: a story-to-graph builder that draws one piece per lit sentence (see kit needs). No simulation is needed. Reusable plates: `ma12-phone-v1.png` (maths plates), `ma11-trade-van-v1.png` and `ma11-road-side-strip-v1.png` (Year 11 Advanced plates; check their appearance before use). Kit needs are listed in `../../checks/maths-standard-kit-needs-a.md`.

## 6. Two original candidate practice questions

### Question 1

A phone plan gives 40 GB of data each month. For the first 10 days, Sam uses 1 GB a day. For the next 5 days, Sam is camping and uses no data. After that, Sam uses 2 GB a day until the data runs out. Sketch a graph of the data left (GB) against the day of the month. Label the points where the story changes.

**Worked answer:** A straight line from (0, 40) down to (10, 30); a flat line from (10, 30) to (15, 30); a steeper straight line from (15, 30) down to (30, 0). The data runs out on day 30.

### Question 2

A delivery van leaves the depot and drives at a steady speed for 1 hour. It stops for 30 minutes to unload, then drives straight back to the depot at the same speed. Which graph (A, B or C) shows the van's distance from the depot? Give a reason.

(The card shows three distance-time sketches: A rises for 1 hour, is flat for half an hour and falls back to zero at 2.5 hours with the same steepness; B returns to zero at 2 hours, falling more steeply; C rises, is flat, then rises again.)

**Worked answer:** Graph A. The van moves away at a steady speed (straight rise), is stopped (flat for half an hour), and returns at the same speed, so the fall has the same steepness as the rise and takes 1 hour. B returns too fast; C keeps moving away.

Only the question and the three sketches go on the card. Hide the answer and do not highlight any graph until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1: a sketch starting at (0, 0), crossed, "the story starts with 40 GB"). Answers were checked with SymPy.

## 7. Everyday anchors

- A phone's data allowance over a billing month: steady use, a break, heavier use (phones; carries Question 1).
- A petrol price cycle over two weeks: a sharp rise, then a slow slide down until the next rise (cars and money; a description of the pattern, not real prices).
- A delivery van's distance from the depot over a shift: out, stop, back (work and travel; carries Question 2).

Varied everyday contexts (phones, cars, work). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 11 Advanced packs (grepped 18 November 2026: "data allowance", "petrol price" and "depot" no hits; a phone battery and a rainwater tank were avoided because Advanced c03, t16, w12 and the Year 12 integration designs use them). No other Standard pack uses them. Claude picks one; none is required. Anchors are drawn as objects, never people. Data amounts and fuel behaviour are typical examples, not plan or price data.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. The missing lesson is already logged there in section 2 ("Standard 1 only: drawing a graph from a description of a real situation (`cice949e38`)"). No new site error.

Decisions for Claude:

- Root ruling 3 applies: teach from the syllabus alone. There are no site numbers to reuse.
- Standard 1 students go from a08 straight to the investment strand (math-s12-i01), because a09 to a13 are Standard 2 only. a08's handoff should therefore close the Standard 1 algebra run cleanly, and the playlist note should say that Standard 1 skips a09 to a13.
- Keep the stories short and the graphs qualitative (shape, flat parts, steepness), with numbers only where the story gives them. Exam style for Standard 1 is mostly "sketch" or "which graph".
- Pace: one rule set, two worked stories and a matching task fit 6 to 7 minutes. Not at risk.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
