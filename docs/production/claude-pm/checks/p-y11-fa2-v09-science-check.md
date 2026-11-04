# p-y11-fa2-v09: physics check

Reviewed Revision 1 on 3 November 2026. Design SHA256 `f2f4e7b556eb1bf6008830b52ccf28b05443b8907670e61e4d73b85e9df7d8b1`. Written design and site source only; no built frames or audio. Narration recount 5,637 characters in separate scenes (5,652 with joining spaces); stated duration about 525 s. Per-scene counts: 267, 383, 377, 548, 340, 522, 316, 455, 581, 69, 255, 391, 323, 397, 338, 75.

## Official 2025 syllabus

- `ci1c5b6f30`: "Identify that mechanical waves require a medium for propagation". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

- `ci5922eaf9`: "Explain how sound waves transfer energy through a medium". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Retrieved fresh through the official page data; all route action HTML matches. Validation: `work/brief156/syllabus-validation.json`.

## Recalculation and source comparison

Python `work/brief156/v09-calculations.py` checks 340/512=0.664 m, 1500/512=2.93 m, 340/680=0.50 m, the stiffness and mass ratios, helium and air sound speeds, and 3 μm at 500 Hz gives 1.83e-2 W/m². Site density wording is an incomplete causal claim; the few-micrometre figure needs a source condition rather than assuming all sounds have a single amplitude. The real pump does not reach a perfect vacuum and actual sound leakage depends on the assembly; no apparatus was tested.

## Findings

1. **Should fix:** The bell-jar setup retains solid support and electrical connections. Soft suspension reduces rather than eliminates vibration transfer; a vacuum prevents sound propagating through the empty air space, not necessarily through the apparatus. Repair scenes 2 and 6 and their captions.

2. **Should fix:** Individual gas molecules also undergo random thermal motion; the oscillating medium model represents the average motion of small air parcels. Replace any absolute claim that each air molecule only oscillates around a fixed point with “small regions of air oscillate on average”, using the existing relay sentence.

No em dash found. Site text is a comparison source, not evidence of syllabus coverage. No design edits, speech, renders or commits.
