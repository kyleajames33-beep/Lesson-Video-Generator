# p-y11-v30 science check

Revision 1, source review 2 November 2026. Design SHA256 `6c8603ae1ef972c1a071fab08debdb0cc8aa2e1d92c8e38a42f1dc32a8b35eda`. Route, current L27/L28 pages, series decisions and v29 handoff checked. No motion or audio reviewed.

## Fresh 2025 syllabus

`ci4f02a70c`: “State the conditions under which momentum is conserved”.

`cib830a9b7`: “Explain why momentum is conserved during collisions”.

`ci6036e9ce`: “Classify collisions as elastic or inelastic by calculating and comparing the total kinetic energy before and after the collision”.

`ci84483399`: “Solve problems involving the conservation of momentum using ∑ m v ⃗ before = ∑ m v ⃗ after and, where appropriate, conservation of kinetic energy”.

`ci475a70b8`: “Solve problems involving the conservation of momentum in elastic collisions using ∑ 1 2 m v before 2 = ∑ 1 2 m v after 2”.

[NSW Physics FA1](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975), freshly fetched 2 November 2026. Exact source HTML, including the formula markup, and ledger matches are in `work/brief153/physics-official-actions.json`.

## Findings

1. **Should fix:** Scene 2 says the total stays exactly the same before stating the external-force condition in scene 3, and attempt 1 omits the track/external-impulse condition. State the negligible external impulse for the illustrated collision before the claim, and add it to the first question card. Fund the short phrase by removing the repeated “same moment for both” sentence or another redundant line.

2. **Should fix:** Scene 6 asserts the 4:1 distance and work ratio without speaking the steady-contact-force model that produces those numbers. Say “in this steady-force model” at that cue, keeping the existing screen tag. The equal and opposite impulses themselves do not require steady force. Replace a repeated phrase to remain within the estimate.

3. **Should fix:** Scene 7 describes an elastic collision as one “with no squashing”, and has balls rolling while the worked kinetic energy uses translation alone. Elastic objects can deform temporarily and recover; replace the line with “no lasting deformation”. Use non-spinning spheres sliding on a smooth groove, or explicitly account for rotation and any external impulse. This preserves the intended ideal elastic example without another scene.

4. **Should fix:** The algebraic root v₁ = 5, v₂ = 0 is called “the moment before they touch”. It is a no-change mathematical branch for the after-state; the objects would still be approaching, not separating. Strike it with that reason and keep v₁ = 0, v₂ = 5 as the collision branch. Replace the existing explanation with the same-length separation test.

5. **Should fix:** The definition treats all inelastic collisions as cases where kinetic energy falls. Scope that statement to the passive impacts in this lesson, or define inelastic as total KE not conserved and name loss as the usual example. Internal stored energy can also produce a gain in a superelastic collision; no new example or extra scene is required.

## Checks

`work/brief153/v30-calculations.py` independently checks the site we-1 values: 1.0 kg at 6.0 m/s sticks to 2.0 kg at rest; total momentum 6.0 kg m/s, common speed 2.0 m/s, total KE 18 J before and 6.0 J after. Attempt 1 has momentum 4.5 kg m/s, final speed +1.5 m/s and KE 10.125 J to 3.375 J, consistent with the stated two-figure values. Attempt 2 has momentum 4.0 kg m/s and KE 8.0 J on both sides. Equal masses in the ideal elastic example give the two mathematical branches; only the branch with separation represents the completed collision.

The proposed question and boundaries cover the five actions and leave the practical to v31. Contact forces are equal and opposite at each instant, so their impulses cancel, while net external impulse determines any total momentum change. The lesson's energy loss is an illustrative passive sticking case. Source findings in L28 are recorded or cross-referenced in the shared log; neither site nor design was edited. Count: 0 blockers, 5 should fix, 0 optional; about 566 s.
