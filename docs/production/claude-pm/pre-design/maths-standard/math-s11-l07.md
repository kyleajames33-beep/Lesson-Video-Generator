# math-s11-l07: How do we graph y = kx and use the graph to solve problems?

Maths Standard research pack (Year 11, Linear relationships), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (common to Standard 1 and Standard 2), Linear relationships (Direct variation):

- `cifb738725`: Graph and analyse equations of the form y = kx to solve problems in a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c). Site coverage: covered (lesson04's model card and diagram; no worked example reads values off a graph).

**Course:** Year 11, common to Standard 1 and Standard 2.

**Entry knowledge:** math-s11-l06: `cie0224c11`, `ci6f88d684`, `cic7837e3f`, `ci04c5dcb2` (y = kx through the origin, k from one pair). math-s11-l02: `ci5ff71229` (drawing a line by hand and with a graphing application).

**Prior video:** math-s11-l06.

**Start:** l06 found k from one pair. Two points fix a line, and the origin is always one of them, so one more point is enough to draw a direct variation graph.

**Stop:** Graphing y = kx from the origin and one calculated point (plus a check point); a larger k gives a steeper line; reading values off the graph in both directions (up to the line and across, or across to the line and down), including a conversion graph (currency); comparing two direct variations on one set of axes; checking a graph reading with the equation; reading k back from a graph (rise over run from the origin). Closes the Linear relationships strand.

**Next:** math-s11-e01 (Earning money; another author's strand).

## 2. Site order, sections and worked examples

Read-only source: [linear-relationships/lesson04.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/linear-relationships/lesson04.sa.html), SHA256 `10c21a1091b81c3b7abfafca29ee9324488313fb7d6d0ce4c11b34decf71e92f`. Card 02: "$y = kx$, no fixed fee, graph through the origin". Card 05 diagram caption: "Direct variation: a straight line through the origin, the ratio y/x stays constant at every point". Revisit: "If kilograms double from 2 to 4, cost doubles from $\$8$ to $\$16$. If kilograms triple from 2 to 6, cost triples from $\$8$ to $\$24$." `we-2`'s $d = 60t$ (300 km at 5 h) can be the first graph. The page has no graph-reading worked example; that part is original teaching.

## 3. Recalculation

- Site: 8, 16, 24; d = 60t gives 300 at t = 5.
- New: an example rate of 1.10 NZ dollars per Australian dollar: A$300 gives NZ$330; NZ$220 is A$200. Frozen yoghurt at $3.20 per 100 g: 350 g costs $11.20.
- Practice: C = 2.5m gives $15 at 6 kg and 5 kg for $12.50; 500 g at $2.80 and $3.50 per 100 g cost $14 and $17.50.

All recalculated with SymPy 1.14.0 (`work/brief-standard-s11-fl/recalc.py`).

## 4. Misconceptions and HSC-style traps

- Starting the line somewhere other than the origin.
- Reading the wrong axis (going across when the question gives the vertical value).
- Reading k from a point without dividing by its x value.
- Joining to the origin with a curve or not using a ruler.
- Thinking the steeper line is "cheaper".

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- Draw y = kx: a dot at the origin, one calculated point, a check point, a ruler line.
- A conversion graph (A$ across, NZ$ up) with dashed reading paths in both directions and a reading tag.
- Two shops' lines on one set of axes: the steeper one is the dearer price per 100 g; a vertical line at 500 g reads both prices.
- A "k from the graph" triangle from the origin to a clear point.

Kit: `StudioPlot`, `LinePiece`, `MagnifierLeader` for the reading paths (check appearance), `FunctionRider` for a probe, `WorkingRows` for the check. A `ConversionGraph` mode (dashed reading paths in both directions) is in the kit-needs file. Advanced reuse (visual parts only): math-a11-w22.

## 6. Two original candidate practice questions

### Question 1

The cost C of a bag of potatoes varies directly with its mass m (kg), with C = 2.5m. (a) Draw the graph for 0 ≤ m ≤ 8. (b) Use your graph to find the cost of 6 kg and the mass that costs $12.50. Check each with the equation.

**Worked answer:** (a) A straight line from (0, 0) through (8, 20). (b) 6 kg: $15 (2.5 × 6 = 15). $12.50: 5 kg (12.50 ÷ 2.5 = 5).

### Question 2

Two lolly shops sell by weight. Shop A charges $2.80 per 100 g and shop B $3.50 per 100 g. (a) Graph both on the same axes for 0 to 500 g. (b) Which line is steeper, and what does that mean? (c) Find the difference in price for 500 g.

**Worked answer:** (a) Two lines from the origin: A through (500, 14) and B through (500, 17.50). (b) B is steeper: it costs more per gram. (c) $17.50 − $14 = $3.50.

Only the question goes on the card (the graph grid is supplied). "Pause here to answer." then a 10-second countdown. Feedback stays brief (Question 2: crossed "A is steeper because it is cheaper"). Answers were checked with SymPy.

## 7. Everyday anchors

- A conversion graph for a trip to Queenstown, New Zealand (travel; exchange rates change daily, so the 1.10 is an example rate, labelled with its date if a real one is used).
- Cruise control at a steady 100 km/h: distance varies directly with time (cars; joins f04).
- Self-serve frozen yoghurt priced per 100 g (food).

None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 12 Standard packs and designs (grepped 19 November 2026: "New Zealand", "Queenstown", "cruise control" and "frozen yoghurt" no hits; yen conversions were avoided because the math-a12-f strand uses them). Objects only, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. MS-01 applies if the apples example is reused.

Decisions for Claude:

- **Money figures (ruling 5 pattern):** a real exchange rate needs a dated source and "rates change every day"; an example rate is labelled "example rate".
- **Year 12 needs:** math-s12-a12 graphs y = k/x beside y = kx; this video's final graph style (one line from the origin, a reading path) is the picture a12 contrasts with.
- **Pace flag: may run short** (about 5 minutes). Root has accepted videos near 5,000 characters; do not pad.
- **Final frame:** closes the Linear relationships strand and hands to math-s11-e01 (Earning money). A rate graph of pay against hours worked (pay varies directly with hours at a flat hourly rate) is a natural bridge; agree the frame with the e01 author.

Claude selects the exact examples and final length. Human listening and exact playback remain later gates.
