# m7c12 learning review: how do soaps and detergents lift oil into water?

Reviewer: independent AI reviewer (did not author the design), 27 October 2026.
Input inspected: `../lessons/chem-m7-c12.md` (Revision 1, 27 Oct) read in full; `../../student-learning-review.md`; `AGENTS.md`; `checks/m7c09-learning-review.md` for format; the full narration of the sister designs `../lessons/chem-m7-c03.md` (all scenes, especially scene 12, hexane and water), `chem-m7-c09.md` (Revision 2, all scenes, especially scene 5 on long chains and solubility, scene 7's shared charge and scene 9's "-oate" salts), `chem-m7-c10.md` (all scenes, especially scene 7, "Water can split the ester back") and `chem-m7-c11.md` (Revision 1, for the ammonium callback and the handoff); a search of `chem-m7-c01.md` to `chem-m7-c10.md` for soap, detergent, micelle and saponification content (none is taught before c12; c10 lists saponification as out of scope). Narration recounted by script with the build parser rules (lines starting "> ", joined with spaces, bold markers removed): per-scene counts match the design (324, 388, 498, 592, 345, 543, 409, 599, 386, 211, 281, 397, 344, 353, 164, 75), **5,924 characters** with the joins. No U+2014 in the design. No plates, stills, voiced preview or audio exist (all four tube plates are still to be commissioned), so motion is not judged at playback speed. This is a beginner-perspective review, not learner evidence. Human listening is pending.

Main question traced: *Oil and water separate however hard you shake them, but with a little soap the oil spreads through the water and rinses away. How can one particle hold on to both oil and water, and why does soap make scum in hard water when a detergent doesn't?* Useful outcome: given a soap or detergent, the student can identify the hydrophobic tail and hydrophilic head and the force each makes, write the saponification equation, explain the cleaning action in mark-earning steps (tails into grease, heads in water, coated droplets that repel, an emulsion that rinses away), write the charge-balanced scum equation, and explain why detergents keep working in hard water.

## Scope and focus

One question with two halves (how soap cleans; why hard water defeats soap and not detergent), both answered from the same head-and-tail particle. That is a fair single learner question, and the hook's tube sets up the first half directly. The saponification scene (author open decision) earns its place: it is one scene, it tells the student why soap is a "salt" (which scene 7's scum relies on), and it uses c10's ester link. Keep it. The boundary is right (no surface tension, CMC, builders or potassium soaps; the lab comparison is chem-m7-p06).

Double teaching: **scene 2 re-teaches c03 scene 12** almost step for step (finding 1). Everything else is recalled correctly: "-oate" from c09, the ester link from c10, ammonium ions from c11, precipitation and net ionic equations from Year 11 and Module 5. c09's shared-charge explanation is not used or repeated (only its glow is reused as a visual).

## Strengths to keep

- **The hook is the lesson's own observation**, shaken with and without soap, and the lab video repeats it.
- **The cause of oil and water separating is given as what water keeps, not "repel"**, consistent with c03.
- **Both ends get a force and a plain-meaning word**: tail, dispersion, hydrophobic ("avoids water"); head, ion–dipole, hydrophilic ("water loving").
- **Saponification explains NaOH as a reactant by counting** ("three for every fat molecule").
- **Scene 5 reuses the squeeze-out cause** for the surface layer and micelles, so micelles are explained, not just named.
- **The cleaning action has the mark-earning steps in order**, and the repel motion shows why the droplets stay apart.
- **The scum equation is charge-balanced in narration and on screen**, and feedback 2 crosses the unbalanced version.
- **Detergents are taught as "same plan, different head"**, one head at a time, with the c11 ammonium link.
- **Both attempts are unseen** (sodium palmitate; rainwater against calcium tap water) and HSC-worded.

## Findings

| # | Severity | Scene | Exact quoted text | Problem (likely student question) | Exact replacement |
| --- | --- | --- | --- | --- | --- |
| 1 | should fix | 2 | "First, why won't they mix? Water molecules hydrogen bond strongly to each other. Oil molecules are long, non-polar hydrocarbon chains, held together only by dispersion **forces**. They can't hydrogen bond. Letting oil in would break water's hydrogen bonds, and give nothing as strong back. So the water molecules keep their hydrogen bonds, and squeeze the oil **out**. That's like dissolves like." | **Double teaching.** c03 scene 12 taught exactly this chain with hexane ("To dissolve, hexane would have to push in between them, breaking those bonds, and it could only offer weak dispersion forces back. So hexane stays as a separate layer"), with the same lattice. A student who watched c03 hears a 30 s repeat before the new idea. Also "hydrocarbon chains" sits oddly against scene 4, where cooking oil is a triglyceride with ester links; a student may ask "is oil a hydrocarbon or an ester?" | "First, why won't they mix? It's the hexane layer from the hydrocarbons video. Oil molecules are mostly long, non-polar chains, with only dispersion **forces** to offer. Letting them in would break water's hydrogen bonds, so the water keeps its hydrogen bonds, and squeezes the oil **out**." (About 290 characters, saving about 100.) Visual: keep the lattice and the squeeze out (scene 5 relies on it), run once at normal pace; grey chip "c03: hexane forms a layer on water" replaces "c03: like dissolves like" on "hexane"; the crossed "oil–water hydrogen bonds" chip writes on "only dispersion forces to offer". |
| 2 | should fix | 4 | "And the acid ends up as a carboxylate ion, which can't re-form the ester, so unlike esterification, it goes essentially to **completion**." | **The cause is asserted, not explained.** c10 taught that water splits an ester and the two directions reach equilibrium. The student asks "why can't the carboxylate re-form the ester, when the acid could?" and "where did the acid's H go?" The link the student can follow is that the base takes the proton and the ion left behind no longer reacts with glycerol. | "In the base, each acid chain loses its proton to hydroxide, and becomes a carboxylate ion. A carboxylate ion doesn't react with glycerol, so the ester can't re-form. Unlike esterification, it goes essentially to **completion**." (+about 55.) Visual: on "loses its proton" a small proton leaves one COOH and joins an OH⁻ to make H₂O (reuse `ProtonHop`); the "c10: esterification ⇌" chip and the glowing single arrow stay on "completion". Key note 2 unchanged. |
| 3 | should fix | 6 | "The tails dissolve into the grease ... The grease isn't dissolved. It's still oil, just in tiny coated droplets." | **The two sentences sound contradictory.** The student hears "dissolve into the grease" and then "the grease isn't dissolved". What the lesson means is that the grease does not dissolve **in the water**. Feedback 1's crossed mistake ("dissolves the oil in the water") already says this precisely. | "The grease doesn't dissolve in the water. It's still oil, just in tiny coated droplets." (+15.) Crossed chip on screen: "soap dissolves the grease in water". Caption unchanged. |
| 4 | should fix | 8, 14 | Scene 8: "The most common ones have a sulfonate or sulfate head, still **negative**. Their calcium and magnesium salts are much more soluble, so far less scum forms, and the detergent keeps working in hard water." Visual: "a teal Ca²⁺ ball approaches and drifts away without binding". | **The narration raises the obvious question and steps past it.** "Still negative" invites "so why doesn't calcium grab it, like it grabbed the soap?" The answer the HSC needs is that calcium is still attracted, but the salt it makes stays dissolved, so the detergent is not pulled out of the water as a solid. The visual "drifts away without binding" can teach that calcium ions are not attracted to the head at all, and feedback 2's "a Ca²⁺ ball beside it, not binding" repeats that picture. | "The most common ones have a sulfonate or sulfate head, still **negative**, so calcium ions are still attracted to them. But the calcium and magnesium salts they make are much more soluble, so they stay dissolved, instead of coming out as scum. The detergent stays in the water, free to clean." (+about 55.) Visual: the Ca²⁺ ball meets the sulfonate head, both stay surrounded by water molecules, and neither drops out (tag "calcium salt stays dissolved: little scum"). Feedback 2 visual: the same picture, tag "calcium salt much more soluble: stays dissolved". Do not add a reason for the higher solubility (for example via c09's shared charge); the HSC answer does not need one and a short reason would oversimplify. |
| 5 | should fix | 7 | "Two new aligned plates appear medium side by side ...: `m7-soap-tube-soft-v1.png` labelled "soft water + soap" and, at first, a second copy of the same plate labelled "hard water + soap"." | **The opening picture shows something that doesn't happen.** For several seconds the "hard water + soap" tube has a tall froth, which then collapses into scum on "scum". A student can take away "soap froths in hard water, then the froth turns into scum". In hard water the scum forms as the soap is added, and little froth forms at all. | Show the soft plate alone at the left at first, with the right slot holding only the label "hard water" and the teal Ca²⁺ and Mg²⁺ balls. On "scum" `m7-soap-tube-hard-v1.png` fades in at the right (a fade-in, not a cross-fade from the soft plate), labelled "hard water + soap". The two plates still share the canvas and alignment, so the comparison holds. Narration unchanged. |
| 6 | should fix | 1, 6 | Scene 1: "the mixture turns **cloudy**, and stays that way." Scene 6: "so the droplets **repel** each other, and can't join back together." | **Absolutes that the lab will contradict.** A soap-stabilised oil emulsion still separates slowly (droplets cream up over minutes to hours). chem-m7-p06 repeats this tube; a student who sees it partly separate will decide the explanation was wrong. The design's own rule asks for no absolute claims. | Scene 1: "Add a few drops of soap, shake it again, and the mixture turns **cloudy**, and stays cloudy much longer." (+10.) Scene 6: "so the droplets **repel** each other, and don't easily join back together." (+3.) |
| 7 | optional | 3 | "Soap fixes this with a particle that has two very different ends. Take sodium stearate. It's the sodium salt of a long carboxylic acid ..." | A c09 viewer knows long acids barely mix with water (c09 scene 5: "the long non-polar chain wins, and solubility falls"). They will ask "so why does a long acid's salt dissolve?" The charged head is the answer, and saying it turns the site's Common Error ("soluble because it contains sodium") into a positive cause. Also "particle" leaves unclear that the two-ended particle is the stearate ion, not the whole salt. | After "... so its name ends in oate.": "Stearic acid itself barely mixes with water, like the long acids in the carboxylic acids video. But in its salt, the end has become a charged ion, and that changes everything." (+about 160; affordable after finding 1.) Then "One end of the stearate ion is a chain of seventeen carbons, the **tail**." Visual: the Na⁺ chip drifts aside on "charged ion" (tag "Na⁺ dissolves separately") rather than at the end of the scene. |
| 8 | optional | 3 | "it's called hydrophobic, meaning it avoids water" | "Avoids" sounds like the tail is pushed away (the "water repels oil" idea scene 2 avoids). | "it's called hydrophobic, meaning water-avoiding: water squeezes it out, just like the oil." (+30.) |
| 9 | optional | 9 | "Both clean the same way, with micelles, so a detergent isn't just a stronger soap." | The "so" does not follow: cleaning the same way does not show that a detergent is not stronger. | "Both clean the same way, with micelles. A detergent isn't a stronger soap. It just has a head that doesn't make scum." (+about 25.) |
| 10 | optional | 3, 4 (screen load) | Scene 3: c09 chip, tail bracket, hydrophobic tag, head bracket, ion–dipole tag, the quiet amphiphilic tag, Na⁺ tag. Scene 4: oil bottle tag, c10 chip, glycerol tag, equation and its tag, soap-making plate and tag, hazard chip, crossed NaOH chip and caption, c10 ⇌ chip and the completion tag. | Both pass four bright text items at some cues (scene 4 at "saponification" has the equation tag, the plate tag and the hazard chip together, with the glycerol tag still fading). | Write the dimming order in. Scene 3: the tail bracket and its tag dim when the head bracket writes; the amphiphilic tag is grey from the start. Scene 4: the glycerol tag dims on "saponification"; the hazard chip writes after the plate tag dims and goes before "used up"; the crossed chip dims on "completion". |
| 11 | optional | 16 | Key note 5 (about 55 words); key note 3 (about 45) | Dense for a copy hold. | Split note 5: 5a "Detergents: same tail, different head. Anionic (–SO₃⁻ or –OSO₃⁻): calcium salts much more soluble, little scum. Cationic (positive N head): fabric softeners. Non-ionic (uncharged polar chain): nothing for Ca²⁺ to bind." 5b "Soap: renewable, biodegrades readily, scums in hard water. Detergents: work in hard water, mostly petrochemical." |
| 12 | optional | whole (length) | 5,924 characters, about 537 s | Findings 1 to 6 net about +80 characters; with finding 7, 8 and 9 about +300, to about 6,220 characters and about 560 s, under 9.5 minutes. Scene 8 becomes the longest (about 655 characters, about 49 s). | No cut needed. Recount by script after revision; keep the design's reserve cut order (scene 9's last sentence, then scene 8's fabric softener sentence). |

No blocker. Six should fix (1 to 6). Six optional (7 to 12).

## Author flags judged

- **Saponification scene.** Keep it as one scene (Scope and focus). With finding 2 it also gives students a concrete reason it goes to completion, which is the comparison HSC questions ask for. Do not shrink it to the equation alone.
- **Detergent wording ("much more soluble, so far less scum forms"; "detergents mostly don't").** Right strength for learning: it is true, and it still lets a student write the expected HSC answer. Finding 4 adds what the student actually needs: calcium is still attracted, but the salt stays dissolved.
- **"Head in the water, tail in the grease."** Sound, reconstructable, and introduced after scene 6 explains it. Its limit (it does not say the grease dissolves in water) holds with finding 3.
- **"Soap makes scum in hard water; detergents mostly don't."** Sound with "mostly".
- **"Amphipathic" as a quiet tag only.** Enough; the HSC answer needs the two ends, not the word.

## Screen load (owner's three bright text items)

Within the limit as written in scenes 1, 2, 5, 6, 7, 8 and 9, given the stated dimming. Scenes 3 and 4 need the dimming order written in (finding 10). No text box stands in a diagram slot: every slot holds the lattice, a structure, the particle symbol, a plate or the comparison board, and the fabric is a coded band carrying a real grease blob.

## Checks against the review questions

| Question | Result |
| --- | --- |
| Causes explained step by step before relied on? | Mostly. Separation, both ends' forces, NaOH as a reactant, micelles, the repelling droplets and scum are all explained before use. Two links need fixing: why the carboxylate can't re-form the ester (finding 2) and what happens to calcium with a detergent head (finding 4). |
| Each term with a plain meaning? | Yes: hydrophobic, hydrophilic, ion–dipole (named with its cause), triglyceride, glycerol ("a small molecule with three O H groups"), saponification ("soap making"), micelle ("tiny balls ... tails in, heads out"), emulsion ("tiny droplets of one liquid in another"), hard water, scum, anionic, cationic, non-ionic. |
| Attention earned? | Yes: the shaken tube; "So how can one substance hold on to oil and water at the same time?"; "Where does soap come from?"; "Soap has one big weakness"; "So which is better?" |
| Visual medium? | Yes in plan: shake, squeeze out, pin morph, micelle build, repel, scum lock, head swap, aligned tube pairs. Each narrated change has a planned on-screen change. Scene 7's opening plate needs finding 5. Not yet judged at playback speed. |
| Practice items worded like HSC Section II, question on screen during the countdown? | Yes. A1 (identify both parts; explain the cleaning action, referring to intermolecular forces) and A2 (write a net ionic equation; explain why the detergent froths) read as HSC short answers. The full card stays during the 10 s countdown after "Pause here to answer."; the A1 formula is in plain ink, A2 has no plates. Givens underlined in feedback; no givens card. |
| Feedback brief, one crossed mistake? | Scene 12 about 30 s, crosses "The soap dissolves the oil in the water." Scene 14 about 27 s, crosses the unbalanced scum equation. Neither re-teaches. |
| Key notes useful? | Yes: five notes matching the main question (structure, saponification, cleaning, hard water, detergents). Note 5 dense (finding 11). |
| Apply and remember? | A1 transfers the cleaning mechanism to a new soap; A2 transfers the scum equation and the head-group reason. Both memory lines are sound. |
| Double teaching against c03, c05 to c11? | Scene 2 repeats c03 scene 12 (finding 1). Otherwise recalls only. c09's shared-charge idea is not re-taught. |
| Anything that would teach a wrong idea? | Finding 5 (froth forms in hard water first), finding 4 (calcium not attracted to detergent heads), finding 6 (emulsions are permanent), finding 3 (grease "isn't dissolved" against tails "dissolve into the grease"). |
| Australian spelling, no em dashes? | Pass ("colour", "sulfonate", "sulfate", "neutralise" not used in narration); no U+2014. |

## Learner trace (from stated entry knowledge)

1. **Hook.** Everyday observation; no prior knowledge needed. Pass (finding 6 for "stays that way").
2. **Scene 2.** c03 taught this. The student thinks "I've seen this." Pass after finding 1 (recall, not repeat).
3. **Scene 3.** c09 "-oate" salts; Year 11 ion–dipole. The student may ask why a long acid's salt dissolves (finding 7). Pass.
4. **Scene 4.** c10 ester link and reversibility. The student asks "why can't it go back?" Pass after finding 2.
5. **Scene 5.** Uses scene 2's squeeze out. Pass.
6. **Scene 6.** Dispersion, ion–dipole, charge repulsion (Year 11). "Isn't dissolved" confuses. Pass after finding 3.
7. **Scene 7.** Year 11 precipitation and charge balance. Pass; the opening plate needs finding 5.
8. **Scene 8.** c11 ammonium ions; hydrogen bonding. The student asks "still negative, so why no scum?" Pass after finding 4.
9. **Scene 9.** Comparison. Pass (optional finding 9).
10. **Scenes 10 to 14.** A1 from scenes 3 and 6; A2 from scenes 7 and 8. Pass.
11. **Scene 15.** Handoff to chem-m7-p06 matches the route. Pass.

## Verdict

**Ready to voice after findings 1 to 6.** No blocker. Subject to the Claude science check and the Codex error check. Artwork (four tube plates) waits for both checks and the owner's go-ahead, as the design states. Repeat this review on the exact voiced preview before full export, including the running time (about 560 s after fixes) and both feedback timings.

## Resolution

Resolved in `../lessons/chem-m7-c12.md` Revision 2 (27 Oct; root resolver, Claude PM). Overlapping fixes with `m7c12-claude-science-check.md` were merged into one edit each.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (merged with science 2) | Scene 2 is a short c03 recall: "It's like the hexane layer from the hydrocarbons video. Oil molecules are mostly long hydrocarbon chains, so they're largely non-polar ...". The squeeze-out animation stays and runs once; grey chip "c03: hexane forms a layer on water". |
| 2 | Fixed (root wording) | Scene 4: "The strongly basic mixture also takes each acid's proton, leaving a carboxylate ion. A carboxylate ion can't re-form the ester with glycerol". `ProtonHop` on "proton"; author note l records why this does not imply extra hydroxide. |
| 3 | Fixed | Scene 6: "The grease doesn't dissolve in the water."; crossed chip "soap dissolves the grease in water". |
| 4 | Fixed | Scene 8: "so calcium ions are still attracted to them. But the calcium and magnesium salts they make are much more soluble, so they stay dissolved, instead of coming out as scum." Ca²⁺ now reaches the head and both stay dissolved; feedback 2's picture matches. |
| 5 | Fixed | Scene 7: the soft-water plate shows alone; the hard-water plate fades in on "scum", with no froth first. |
| 6 | Fixed (merged with science 3) | "Stays cloudy for much longer" (scene 1, with its tag); "don't easily join back together" (scene 6). |
| 7 | Fixed | Scene 3: "Stearic acid itself barely mixes with water, like the long acids in the carboxylic acids video. But in the salt, one end has become a charged ion." Na⁺ drifts aside on "ion". |
| 8 | Fixed (shortened) | "Hydrophobic, meaning water-avoiding." The "water squeezes it out" clause was cut for length; scenes 2 and 5 give that cause. |
| 9 | Fixed | "Both clean the same way, with micelles. A detergent isn't a stronger soap. It just has a head that makes far less scum." |
| 10 | Fixed | Dimming order written into scenes 3 and 4. |
| 11 | Fixed | Note 5 split into detergents (5) and the soap against detergent comparison (6). |
| 12 | No cut needed | Recount 6,293 characters, about 565 s; the reserve cut order gains one item. |

Nothing declined. Needs Codex error check before voicing; artwork waits for the owner's go-ahead; repeat this review on the exact voiced preview.
