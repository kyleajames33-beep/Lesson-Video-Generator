# Physics and Maths video feasibility

Brief 52, 16 October 2026. Research only. Site pages in `C:/Users/kygs/hscscience` were read without changes. Counts below are `.sa.html` pages, not approved video briefs or syllabus coverage claims.

## Site inventory

| Course | Year 11 pages | Year 12 pages | Grouping |
| --- | ---: | ---: | --- |
| Physics | 79 | 70 | Year 11: mechanics 28, waves 25, electricity and magnetism 26. Year 12: Module 5 18, Module 6 21, Module 7 14, Module 8 17. |
| Maths Advanced | 103 | 59 | Eight Year 11 topics; seven Year 12 topics. |
| Maths Extension 1 | 76 | 109 | Five Year 11 topics; six Year 12 topics. |
| Maths Extension 2 | 0 | 86 | Six Year 12 module folders, numbered 11 to 16. |
| Maths Standard | 56 | 63 | Eight Year 11 topics; ten Year 12 topics. |
| `subjects/maths` | 0 | 0 | 1,721 older `.html` files across the folder, but no `.sa.html` pages. Treat these separately from the senior-adventure lesson set. |

Total: 701 senior-adventure pages. All are at least 44 KB; none contain the literal phrases `under construction` or `coming soon`. Those checks found no obvious stub pages. They do not establish scientific correctness, finished interactions or complete syllabus coverage. The site also has `subjects/maths-question-lesson-map.js`, a 173-line question-to-lesson mapping source. Its fallback mappings and question coverage need their own audit before using it to plan videos.

Typical sampled pages contain sectioned explanations, worked examples, practice prompts, SVG diagrams and some input controls or embeds. For example, the sampled Physics projectile page has 18 inline SVGs, five inputs and two iframes; the sampled Maths Advanced depreciation page has 15 inline SVGs and three inputs. Counts describe markup, not whether each interaction works. Some pages include derivations and graphs, but the video must redraw only the parts that advance its learner question.

The six samples below span mechanics, electromagnetism, waves, finance, calculus and statistics. Their source paths are relative to `subjects/` in the site repository.

| Sample page | What a useful video would show |
| --- | --- |
| `physics/year12/module5/lesson01.sa.html`, Projectile Motion Fundamentals | Split initial velocity into horizontal and vertical arrows, then move one projectile while the two component graphs update. Hold on the question before substituting values. |
| `physics/year12/module6/lesson05.sa.html`, Circular Motion of Charges in Magnetic Fields | Show velocity, field and magnetic force at one point, then trace how a perpendicular force bends the path. Connect radius to the equation and to a worked value with units. |
| `physics/year12/module7/lesson03.sa.html`, Interference and Young's Double Slit Experiment | Show two wavefronts spreading from slits, where crests meet or cancel, then relate screen spacing to path difference and the measured geometry. |
| `maths-advanced/year12/financial-mathematics/lesson04.sa.html`, Depreciation | Show the asset value falling year by year and a matching discrete graph. Derive the repeated multiplier before presenting a geometric sequence calculation. |
| `maths-advanced/year12/differential-calculus/lesson03.sa.html`, Differentiating ln x | Move a point along the logarithm graph, draw its tangent, and connect the changing slope to `1/x`. Build one differentiation example line by line. |
| `maths-advanced/year12/random-variables/lesson03.sa.html`, Normal Distribution Applications | Shade the requested area under a normal curve, mark the mean and standard deviation, convert to a z-score and show how the probability is read. |

## Video system fit

`src/explainer/kit.tsx` supplies scene entrances, handwriting, SVG path drawing, callouts, image plates, clips and countdowns. Selected lessons already contain local graph and calculation patterns: time graphs in Chemistry C2/C4a and Biology B3a, an ICE table in Chemistry C6, and a calibration graph in Chemistry P02. These are examples to adapt, not a shared Physics or Maths graph library. The explainer has no complete reusable vector field, circuit, wave interference, function plot, tangent, probability distribution or symbolic derivation component.

The frozen legacy engine has `src/slides/diagrams/LineGraphDiagram.tsx`, `Circuit3DDiagram.tsx` and projection helpers in `engine3d.ts`. Their calculation and projection ideas may be ported into `src/explainer` after review. The old scene components remain read only under the [legacy engine policy](../claude-pm/legacy-engine-policy.md). A prospective shared kit should add coordinate axes with units and staged points, 2D vector arrows with component decomposition, field and circuit primitives, wavefront interference, geometric construction, algebra steps with aligned equals signs, and function and distribution plots. Each needs timing and label rules so the current step stays visible without crowding.

## Market check

| Source | Public format evidence | Implication |
| --- | --- | --- |
| [Physics High Year 12](https://www.physicshigh.com/year12) | Organises videos by NSW Physics module and inquiry question, with linked worked examples and worksheets. The index does not show reliable durations. | Module mapping and worked practice already exist in the market. A new series needs clearer visual reasoning or a better route through the site lessons. |
| [Atomi Stage 6 Physics](https://support.getatomi.com/en/articles/86609-teaching-stage-6-physics-with-atomi) | Describes short curriculum-specific videos, quizzes and exam-application videos. The public guide gives no per-video runtime. | Short videos and exam links are established expectations, not a gap by themselves. |
| [Wootube Mathematics](https://misterwootube.com/category/mathematics/) | Eddie Woo's self-published lesson index and classroom-style maths teaching. | A drawn explainer can complement a live worked lesson if it animates the graph and reasoning that a board lesson leaves static. |
| [Next Education videos](https://www.nexteducation.com.au/videos) | Public HSC Advanced and Extension examples range from 10:00 and 10:07 hard-topic lessons to 37:19 and 50:05 masterclasses. | The market spans focused clips and long exam sessions. Runtime should follow the learner question and worked load. |

This is a small public sample, not a popularity ranking or a complete competitor survey. The likely opportunity is a focused clip that shows a physical or mathematical change as the narration explains it, then lets a student try a fresh case. That is an inference from the sampled formats and this project's visual standard, not a measured market gap.

## What it would take

Start with one Physics and one Maths Advanced pilot whose site pages and syllabus boundaries are checked. Choose a narrow learner question, make a schema 4 teaching brief, and run independent science and student-learning reviews before paid voice. Build the minimum reusable graph/vector/algebra primitives needed for those two pilots in `src/explainer`, then judge motion and caption fit at playback speed. Record exact site-section and syllabus links before adding either pilot to a release route. Physics and Maths production should not displace the current Biology and Chemistry Module 5 release priorities without an owner scheduling decision.
