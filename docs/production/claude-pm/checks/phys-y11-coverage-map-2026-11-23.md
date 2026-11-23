# Year 11 Physics (2025 syllabus): focus-area coverage map, 23 November 2026

Companion to `phys-y11-coherence-audit-2026-11-23.md`. Maps every site lesson and every syllabus point to the design(s) that cover it. No existing file was edited.

**Sources.** Route `docs/production/phys-y11-video-route.json` (101 entries, 168 syllabus points, `siteCrosswalk`); ledger `docs/production/programme/syllabus/phys-new-y11.json` (168 points, official NESA codenames); designs `docs/production/claude-pm/lessons/phys-y11-fa*-v*.md` (99 files); site clone `C:/Users/kygs/teaching-app-fix/subjects/physics/year11/` (FA1 28, FA2 25, FA3 26 lessons; titles read from the live clone on 23 Nov); FA0 placement from `checks/root-decisions-phys-y11-fa0.md` item 1.

**Legend.** "Site crosswalk" is the route's own judgement of the site lesson: covered, partial (the site models or plans a practical but cannot supply conducted evidence) or missing (no site lesson; all 34 FA0 Working scientifically points). "Design(s)" are route owners, checked against each design's syllabus section.

## Summary by focus area

| Focus area | Site lessons | Syllabus points | Route entries | Designs present | Not designed | Points with no teaching design |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| FA0 Working scientifically | 0 (no site lesson) | 34 | 7 | 7 | none | `ciabfb4d1f` (held inside fa0-v04) |
| FA1 Fundamentals of mechanics | 28 | 49 | 31 | 30 | fa1-v25 | `cibb423b47` |
| FA2 Waves | 25 | 38 | 33 | 32 | fa2-v08 | `cif4d17b1e` |
| FA3 Electricity and magnetism | 26 | 47 | 30 | 30 | none | none |
| **Total** | **79** | **168** | **101** | **99** | **2** | **3** |

Every one of the 168 points has one route owner, or a planned pair of owners (9 concept and investigation pairs, 2 points shared by neighbouring concept videos); no point is owned by a video outside its focus area, and no route point is missing from the ledger (checked by script). Every one of the 79 site lessons maps to at least one design except FA1 L23 and FA2 L07 (cultural hold). All 16 "Conduct ..." practical points have a dedicated investigation video.

## Viewing order used for the handoff check (root FA0 decision 1)

fa1-v01 to v14, **fa0-v01, v02, v03, v04, v05**, fa1-v15, **fa0-v07**, fa1-v16 to v24, (v25 held), v26 to v30, **fa0-v06**, fa1-v31, fa2-v01 to v07, (v08 held), v09 to v33, fa3-v01 to v30. The route's `playlistOrder` still places FA0 at 95 to 101 (audit S4).

## Gaps, repeats and order problems (focus-area level)

| Focus area | Finding | Audit ref |
| --- | --- | --- |
| FA0 | `ciabfb4d1f` (Cultural Knowledges) is routed to fa0-v04 but deliberately not taught. | B1 |
| FA0 | fa1-v10 (the first investigation) comes before the FA0 block and defines "reliability" as how closely repeats agree, which fa0-v05 calls precision. | S1 |
| FA0 / FA1 | fa1-v15 still teaches uncertainty from a range and fa1-v31 introduces precision after FA0 has taught both (root FA0 decision 3, not yet applied). | S9 |
| FA1 | L23 (inclined planes, `cibb423b47`) not designed. | B1 |
| FA1 | fa1-v16 scene 7 builds the turning-car change-in-velocity construction that phys-y12-m5-v11 teaches again. | S6 |
| FA1 | Chips on v01, v04 to v09, v12, v24 are topic labels, not the next question; v14, v15, v30 chips skip the FA0 video that follows. | S2, S3 |
| FA2 | L07 (water depth, `cif4d17b1e`) not designed. | B1 |
| FA2 | L09 is split into three videos (fa2-v10 concept, v11 and v12 investigations); intended, not a repeat. | none |
| FA2 | fa2-v23 aid "repeats shrink the scatter, not the shift" overlaps fa0-v05 "the spread is precision, the gap is accuracy"; consistent, but v23 should recall fa0-v05 first. | N6 |
| FA3 | fa3-v24 chip question differs from fa3-v25 heading. | S3 |
| FA3 | fa3-v30 course-end chip still says "Next in the playlist: Working scientifically skills". | S5 |
| FA3 | Site crosswalk for L13/L14 was mis-cited; root decision 20 (FA3) already corrected ownership (v13 owns `cib4d17ff9`). | none |

## Site lesson to design map

### FA1 site lessons

| Site lesson | Site title (live clone) | Design(s) | Status |
| --- | --- | --- | --- |
| FA1 L01 | Scalars and Vectors | fa1-v01 | Designed |
| FA1 L02 | Vector Diagrams: Adding and Subtracting in 2D | fa1-v02 | Designed |
| FA1 L03 | Resolving Vectors into Components | fa1-v03 | Designed |
| FA1 L04 | Distance and Displacement Problems | fa1-v04 | Designed |
| FA1 L05 | Speed and Velocity: Instantaneous vs Average | fa1-v05 | Designed |
| FA1 L06 | Velocity in Two Dimensions | fa1-v06 | Designed |
| FA1 L07 | Motion Graphs: Displacement, Velocity and Acceleration | fa1-v07 | Designed |
| FA1 L08 | Reading Relationships from Motion Graphs | fa1-v08 | Designed |
| FA1 L09 | Equations of Uniformly Accelerated Motion | fa1-v09 | Designed |
| FA1 L10 | Measuring g Graphically (Practical) | fa1-v10 | Designed |
| FA1 L11 | Relative Velocity in Two Dimensions | fa1-v11 | Designed |
| FA1 L12 | Free-Body Diagrams and Net Force | fa1-v12 | Designed |
| FA1 L13 | Newton's First Law and Equilibrium | fa1-v13 | Designed |
| FA1 L14 | Newton's Second Law (F = ma) | fa1-v14, fa1-v15 | Designed (split into 2: concept then investigation) |
| FA1 L15 | Forces on Accelerating Objects | fa1-v16 | Designed |
| FA1 L16 | Newton's Third Law | fa1-v17 | Designed |
| FA1 L17 | Connected Bodies | fa1-v18 | Designed |
| FA1 L18 | Friction: Static vs Kinetic | fa1-v19 | Designed |
| FA1 L19 | Applying Newton's Laws to Real Situations | fa1-v20 | Designed |
| FA1 L20 | Inclined Planes: Normal Force and Free-Body Diagrams | fa1-v21 | Designed |
| FA1 L21 | Resolving Weight and Incline Acceleration | fa1-v22 | Designed |
| FA1 L22 | Solving Inclined-Plane Problems | fa1-v23, fa1-v24 | Designed (split into 2: concept then investigation) |
| FA1 L23 | First Nations Use of Inclined Planes | fa1-v25 | Not designed (cultural hold, see B1) |
| FA1 L24 | Work and Kinetic Energy | fa1-v26 | Designed |
| FA1 L25 | Gravitational and Kinetic Energy | fa1-v27 | Designed |
| FA1 L26 | Conservation of Mechanical Energy | fa1-v28 | Designed |
| FA1 L27 | Momentum and Impulse | fa1-v29 | Designed |
| FA1 L28 | Collisions: Conservation of Momentum | fa1-v30, fa1-v31 | Designed (split into 2: concept then investigation) |

### FA2 site lessons

| Site lesson | Site title (live clone) | Design(s) | Status |
| --- | --- | --- | --- |
| FA2 L01 | Transverse and Longitudinal Waves | fa2-v01, fa2-v02 | Designed (split into 2: concept then investigation) |
| FA2 L02 | Describing Transverse Waves | fa2-v03 | Designed |
| FA2 L03 | Describing Longitudinal Waves | fa2-v04 | Designed |
| FA2 L04 | The Wave Equation | fa2-v05 | Designed |
| FA2 L05 | Displacement–Time Wave Graphs | fa2-v06 | Designed |
| FA2 L06 | Displacement–Distance Wave Graphs | fa2-v07 | Designed |
| FA2 L07 | First Nations Waves and Water Depth | fa2-v08 | Not designed (cultural hold, see B1) |
| FA2 L08 | Mechanical Waves and Sound Energy | fa2-v09 | Designed |
| FA2 L09 | Sound, Pitch, Loudness and Energy | fa2-v10, fa2-v11, fa2-v12 | Designed (split into 3: concept then investigation) |
| FA2 L10 | Light as an Electromagnetic Wave | fa2-v13 | Designed |
| FA2 L11 | The Electromagnetic Spectrum | fa2-v14 | Designed |
| FA2 L12 | Applications Across the EM Spectrum | fa2-v15 | Designed |
| FA2 L13 | The Inverse Square Law for Light | fa2-v16, fa2-v17 | Designed (split into 2: concept then investigation) |
| FA2 L14 | The Law of Reflection | fa2-v18 | Designed |
| FA2 L15 | Refraction and Refractive Index | fa2-v19, fa2-v20 | Designed (split into 2: concept then investigation) |
| FA2 L16 | The Law of Refraction | fa2-v21 | Designed |
| FA2 L17 | Total Internal Reflection and the Critical Angle | fa2-v22 | Designed |
| FA2 L18 | Measuring Refractive Index | fa2-v23, fa2-v24 | Designed (split into 2: concept then investigation) |
| FA2 L19 | Lenses and Vision | fa2-v25, fa2-v26 | Designed (split into 2: concept then investigation) |
| FA2 L20 | Diffraction | fa2-v27, fa2-v28 | Designed (split into 2: concept then investigation) |
| FA2 L21 | Superposition and Interference | fa2-v29 | Designed |
| FA2 L22 | Interference Patterns | fa2-v30 | Designed |
| FA2 L23 | Standing Waves | fa2-v31 | Designed |
| FA2 L24 | Standing Waves in Strings | fa2-v32 | Designed |
| FA2 L25 | The Doppler Effect | fa2-v33 | Designed |

### FA3 site lessons

| Site lesson | Site title (live clone) | Design(s) | Status |
| --- | --- | --- | --- |
| FA3 L01 | Charging Objects, The Movement of Electrons | fa3-v01 | Designed |
| FA3 L02 | Friction, Induction and Conduction | fa3-v02 | Designed |
| FA3 L03 | The Electric Field of a Point Charge | fa3-v03 | Designed |
| FA3 L04 | Electric Field Strength | fa3-v04 | Designed |
| FA3 L05 | Force on Charges in an Electric Field | fa3-v05 | Designed |
| FA3 L06 | Coulomb's Law | fa3-v06 | Designed |
| FA3 L07 | The Field Between Parallel Plates | fa3-v07 | Designed |
| FA3 L08 | Charged Particles Between Plates | fa3-v08 | Designed |
| FA3 L09 | Electric Potential Energy and Work | fa3-v09 | Designed |
| FA3 L10 | Voltage, Work and Potential Energy | fa3-v10 | Designed |
| FA3 L11 | Electric Current | fa3-v11 | Designed |
| FA3 L12 | Conductors, DC and AC | fa3-v12 | Designed |
| FA3 L13 | Resistance and Its Factors | fa3-v13 | Designed |
| FA3 L14 | Ohm's Law, Ohmic and Non-Ohmic Conductors | fa3-v14, fa3-v15 | Designed (split into 2: concept then investigation) |
| FA3 L15 | Electrical Power, P = VI and P = V²/R | fa3-v16 | Designed |
| FA3 L16 | Energy Loss in Circuits, P = I²R | fa3-v17 | Designed |
| FA3 L17 | Series and Parallel Circuits | fa3-v18 | Designed |
| FA3 L18 | Meters in Circuits, Ammeters and Voltmeters | fa3-v19 | Designed |
| FA3 L19 | Analysing Series Circuits, Rₜ = ΣR and Vₜ = ΣV | fa3-v20 | Designed |
| FA3 L20 | Analysing Parallel Circuits, 1/Rₜ = Σ1/R and Iₜ = ΣI | fa3-v21 | Designed |
| FA3 L21 | Combination Circuits | fa3-v22, fa3-v23 | Designed (split into 2: concept then investigation) |
| FA3 L22 | Magnetic Fields and Field Lines | fa3-v24 | Designed |
| FA3 L23 | Magnetic Field of a Current-Carrying Wire, B = μ₀I/2πr | fa3-v25 | Designed |
| FA3 L24 | The Solenoid, Structure and Field | fa3-v26 | Designed |
| FA3 L25 | Magnetic Field Inside a Solenoid, B = μ₀nI | fa3-v27 | Designed |
| FA3 L26 | Electromagnets, Cores and Field Strength | fa3-v28, fa3-v29, fa3-v30 | Designed (split into 3: concept then investigation) |

### FA0 (no site lessons)

The site has no Working scientifically lessons (route crosswalk: 34 points "missing"). FA0 is taught by fa0-v01 to v07, placed inside FA1 by root decision. This is a site gap, not a design gap: the syllabus requires these skills, so the designs are right.

## Syllabus point to design map

### FA0 syllabus points (34)

| Codename | Syllabus point (abridged) | Design(s) | Site crosswalk | Audit note |
| --- | --- | --- | --- | --- |
| `cicf26d204` | Use observations and scientific knowledge and understanding to propose questions and hypotheses for scientific ... | fa0-v01 | missing |  |
| `cie2ac0028` | Evaluate questions and hypotheses based on scientific knowledge | fa0-v01 | missing |  |
| `ci1815f623` | Modify questions and hypotheses to reflect new evidence | fa0-v01 | missing |  |
| `ci9ce164ec` | Justify the use of independent , dependent and controlled variables , and experimental controls in a valid scientific ... | fa0-v02 | missing |  |
| `ci6c11c587` | Explain how reliable primary data is obtained | fa0-v02 | missing |  |
| `cid3f0dfde` | Assess the reliability of secondary data and information when planning | fa0-v02 | missing |  |
| `cif90164e3` | Assess potential hazards and their associated risks to develop a risk assessment | fa0-v02 | missing |  |
| `ci1ba1d4e1` | Select appropriate materials and technologies to design a scientific investigation | fa0-v02 | missing |  |
| `ci5ca4a539` | Discuss ethical issues in the development and use of scientific knowledge | fa0-v02 | missing |  |
| `ci6e7b9681` | Apply safe work practices and manage risks while conducting a scientific investigation | fa0-v03 | missing |  |
| `ci86146789` | Construct and manipulate identified materials and technologies to perform scientific investigations | fa0-v03 | missing |  |
| `ci752a2a2f` | Use equipment appropriately and systematically to collect and record data, information, evidence and findings | fa0-v03 | missing |  |
| `ci72f6b8b9` | Gather data and information from a range of secondary sources | fa0-v03 | missing |  |
| `ci6364656f` | Select qualitative and quantitative information from texts, diagrams, flow charts, tables, databases, graphs and ... | fa0-v04 | missing |  |
| `ci21267953` | Apply quantitative processes to data, including unit conversions | fa0-v04 | missing |  |
| `ci0fca96de` | Select and use a range of representations to organise data and information, including graphs, keys, models , diagrams, ... | fa0-v04 | missing |  |
| `cief805888` | Extract data and information from a wide range of sources and acknowledge these sources using an accepted referencing ... | fa0-v04 | missing |  |
| `ciabfb4d1f` | Describe the Cultural Knowledges and observations of Aboriginal and Torres Strait Islander Peoples and examine how ... | fa0-v04 | missing | Not taught in fa0-v04 (hold; B1) |
| `ci7f1f6fbd` | Describe qualitative and quantitative relationships between variables | fa0-v05 | missing |  |
| `ci7afa7b23` | Explain patterns and trends , including inconsistencies in data and information | fa0-v05 | missing |  |
| `ci914a5e7e` | Assess error, uncertainty and limitations in data and include calculations of percentage error , range , mean and ... | fa0-v05 | missing |  |
| `ci15366d75` | Assess the validity , reliability, accuracy and precision of data and information | fa0-v05 | missing |  |
| `ci8856aeb0` | Interpret data and information to identify outliers , make predictions , explain results and draw conclusions | fa0-v05 | missing |  |
| `ci7e38e278` | Evaluate data and information to suggest improvements or further investigations | fa0-v05 | missing |  |
| `ci5a02ec2a` | Use appropriate significant figures to express quantitative solutions | fa0-v05 | missing |  |
| `cif8bde07b` | Use appropriate scale prefixes for powers of 10: femto (f) = 10 -15 , pico (p) = 10 -12 , nano (n) = 10 -9 , micro (μ) ... | fa0-v05 | missing |  |
| `cibe345fb1` | Apply scientific principles to address real-world applications and problems | fa0-v06 | missing |  |
| `cibc9c30ac` | Use modelling and cause-and-effect relationships, including mathematical examples, to make predictions, explain ... | fa0-v06 | missing |  |
| `ci706ca3dc` | Evaluate and modify a scientific investigation in response to new evidence | fa0-v06 | missing |  |
| `cid1f36329` | Explain why current scientific knowledge is both contestable and testable by further inquiry | fa0-v06 | missing |  |
| `ci9fda93ae` | Construct evidence-based arguments and recognise the role of peer review in the evaluation of scientific practices, ... | fa0-v07 | missing |  |
| `cic4ffcedd` | Select and use appropriate digital, visual, written and oral media to convey scientific arguments | fa0-v07 | missing |  |
| `ci720f6e48` | Apply appropriate scientific notations, language and nomenclature | fa0-v07 | missing |  |
| `cicc30bb9d` | Use evidence and correct scientific language and terminology to address a specific audience and purpose in a variety ... | fa0-v07 | missing |  |

### FA1 syllabus points (49)

| Codename | Syllabus point (abridged) | Design(s) | Site crosswalk | Audit note |
| --- | --- | --- | --- | --- |
| `ci02280876` | Classify distance, displacement, time, speed, velocity and acceleration as either scalar or vector quantities | fa1-v01 | covered |  |
| `cib3157911` | Use vector diagrams to represent the displacement, velocity and acceleration of an object | fa1-v02, fa1-v03 | covered | Shared by two concept videos (diagrams, then components); planned split |
| `cic5180781` | Resolve vectors into components | fa1-v03 | covered |  |
| `cif160cdd6` | Add and subtract vectors in 2 dimensions | fa1-v04 | covered |  |
| `ci0be2c579` | Solve total distance and displacement problems | fa1-v04 | covered |  |
| `cie947d78e` | Explain how instantaneous speed, average speed, instantaneous velocity and average velocity are measured and calculated | fa1-v05 | covered |  |
| `ci9c29b3c7` | Solve problems using v ⃗ av = Δ s ⃗ Δ t | fa1-v05 | covered |  |
| `ciac8fac3d` | Solve problems involving the calculation of velocity in 2 dimensions | fa1-v06 | covered |  |
| `ci76393283` | Solve problems to determine speed, velocity, distance, displacement and time | fa1-v06 | covered |  |
| `ci09919606` | Solve problems in one and 2 dimensions using a ⃗ = Δ v ⃗ Δ t | fa1-v06 | covered |  |
| `ci1753e3ea` | Use data to construct displacement–time graphs, velocity–time graphs and acceleration–time graphs | fa1-v07 | covered |  |
| `ci432e72b1` | Use data to analyse motion graphs to describe the displacement, velocity and acceleration of an object | fa1-v07 | covered |  |
| `ci79a6bb83` | Analyse motion graphs to determine the relationships between displacement, initial velocity, final velocity, ... | fa1-v08 | covered |  |
| `ci72f29382` | Solve problems involving uniformly accelerated motion in one dimension using s ⃗ = u ⃗ t + 1 2 a ⃗ t 2 , v ⃗ = u ⃗ + a ... | fa1-v09 | covered |  |
| `ci928dbf53` | Conduct a laboratory experiment to compare 2 methods of graphically determining a value for acceleration due to ... | fa1-v10 | partial |  |
| `ci9a988a52` | Analyse problems of relative velocity involving motion in two dimensions using v ⃗ AB = v ⃗ A - v ⃗ B | fa1-v11 | covered |  |
| `cibfd5f69e` | Resolve vectors into perpendicular components using F x = F cos θ and F y = F sin θ where θ is the angle with the x ... | fa1-v12 | covered |  |
| `cic6c0b2c4` | Use free-body diagrams and vector analysis to determine the net force acting on an object | fa1-v12 | partial |  |
| `cif576e4f9` | Apply Newton’s first law of motion to stationary objects and objects moving with a constant velocity | fa1-v13 | covered |  |
| `ci38b8f81e` | Analyse the forces acting on an object moving with constant velocity | fa1-v13 | covered |  |
| `cic1d80483` | Conduct a scientific investigation to illustrate the relationship between force, mass and acceleration | fa1-v14, fa1-v15 | partial | Concept and investigation pair |
| `ci014d8672` | Analyse the forces acting on an accelerating object | fa1-v16 | covered |  |
| `cidf22083b` | Solve problems involving Newton’s second law of motion using F ⃗ net = m a ⃗ | fa1-v16 | covered |  |
| `ci980c80f2` | Use examples to describe the effects of Newton’s third law of motion | fa1-v17 | covered |  |
| `ciecc7b5bd` | Analyse the forces acting on connected bodies in physical contact and linked by ropes using vector diagrams and ... | fa1-v18 | covered |  |
| `ci927ecf47` | Compare static and kinetic friction | fa1-v19 | covered |  |
| `ci6eb6311a` | Solve problems using f friction = μ F N | fa1-v19 | covered |  |
| `cif0b50354` | Solve a variety of problems in static and dynamic real-world situations by applying Newton’s laws of motion | fa1-v20 | covered |  |
| `ci85e17ad3` | Determine the normal force on objects on inclined planes | fa1-v21 | covered |  |
| `ci90862bda` | Construct free-body diagrams to show the gravitational, normal, frictional and net force acting on an object on an ... | fa1-v21 | covered |  |
| `ci9a2bd04a` | Resolve the weight force into perpendicular and parallel components on inclined planes using F ⊥ = mg cos θ and F ∥ = ... | fa1-v22 | covered |  |
| `cib1bb3a58` | Derive a = g sin θ - μg cos θ to describe the acceleration on an object on an inclined plane with friction using ... | fa1-v22 | covered |  |
| `ci07a3247e` | Solve problems involving objects with constant velocity and objects accelerating on inclined planes | fa1-v23 | covered |  |
| `ci28f5581f` | Conduct a laboratory experiment to analyse the relationship between the angle of an inclined plane and the ... | fa1-v24 | partial |  |
| `cibb423b47` | Explain why Aboriginal and/or Torres Strait Islander Peoples used inclined planes to move heavy objects | fa1-v25 | covered | Not designed (hold lifted 18 Nov; B1) |
| `ci56b6c521` | Compare conservative forces and non-conservative forces | fa1-v26 | covered |  |
| `ci2e0b478b` | Relate the work done on an object to the change in its kinetic energy during accelerated rectilinear motion using W = ... | fa1-v26 | covered |  |
| `ci455ddf17` | Solve problems involving changes in gravitational potential energy in a uniform gravitational field using Δ U = mg Δ h | fa1-v27 | covered |  |
| `cief8ea610` | Solve problems involving kinetic energy using KE = 1 2 m v 2 | fa1-v27 | covered |  |
| `ci778e4712` | State the conditions under which total mechanical energy is conserved | fa1-v28 | covered |  |
| `ci7fd8d698` | Apply the law of conservation of mechanical energy and use W = Δ KE = 1 2 m v 2 and W = Δ U to solve problems | fa1-v28 | covered |  |
| `cie3b5703f` | Analyse energy transformations and calculate the work done when an object moves within a uniform gravitational field, ... | fa1-v28 | covered |  |
| `ci7e7f090d` | Solve problems involving momentum using p ⃗ = m v ⃗ and Δ p ⃗ = F ⃗ net Δ t | fa1-v29 | covered |  |
| `ci4f02a70c` | State the conditions under which momentum is conserved | fa1-v30 | covered |  |
| `cib830a9b7` | Explain why momentum is conserved during collisions | fa1-v30 | covered |  |
| `ci6036e9ce` | Classify collisions as elastic or inelastic by calculating and comparing the total kinetic energy before and after the ... | fa1-v30 | covered |  |
| `ci84483399` | Solve problems involving the conservation of momentum using ∑ m v ⃗ before = ∑ m v ⃗ after and, where appropriate, ... | fa1-v30 | covered |  |
| `ci475a70b8` | Solve problems involving the conservation of momentum in elastic collisions using ∑ 1 2 m v before 2 = ∑ 1 2 m v after 2 | fa1-v30 | covered |  |
| `ci67d91fd2` | Conduct a practical investigation to analyse the conservation of momentum in collisions | fa1-v31 | partial |  |

### FA2 syllabus points (38)

| Codename | Syllabus point (abridged) | Design(s) | Site crosswalk | Audit note |
| --- | --- | --- | --- | --- |
| `cib47003d0` | Conduct a practical investigation to model the oscillation of particles in transverse waves and longitudinal waves and ... | fa2-v01, fa2-v02 | partial | Concept and investigation pair |
| `ci19ed9f77` | Describe the wavelength, frequency, period, crest, trough and amplitude of transverse waves | fa2-v03 | covered |  |
| `cia7399b4b` | Describe the wavelength, frequency, period, compression, rarefaction and amplitude of longitudinal waves | fa2-v04 | covered |  |
| `ci2298dbee` | Solve problems using f = 1 T and v = fλ | fa2-v05 | covered |  |
| `ci4027ee6d` | Analyse displacement–time graphs for longitudinal and transverse waves | fa2-v06 | covered |  |
| `ci6a03179f` | Analyse displacement–distance graphs for longitudinal and transverse waves | fa2-v07 | covered |  |
| `cif4d17b1e` | Describe how Aboriginal Peoples use the wave velocity and wavelength of water waves to approximate water depth | fa2-v08 | covered | Not designed (hold lifted 18 Nov; B1) |
| `ci1c5b6f30` | Identify that mechanical waves require a medium for propagation | fa2-v09 | covered |  |
| `ci5922eaf9` | Explain how sound waves transfer energy through a medium | fa2-v09 | covered |  |
| `ci6ed20170` | Conduct a practical investigation, to relate wavelength to frequency, frequency to pitch, and amplitude to loudness | fa2-v10, fa2-v11 | partial | Concept and investigation pair |
| `cie7db48b6` | Conduct a practical investigation to demonstrate how frequency and amplitude relate to the energy of a sound wave | fa2-v10, fa2-v12 | partial | Concept and investigation pair |
| `ci1ea6950f` | Identify light as an electromagnetic wave that does not require a medium for propagation and travels at c , the speed ... | fa2-v13 | covered |  |
| `ci4b6c6ff8` | Describe the production and transfer of energy of electromagnetic wave | fa2-v13 | covered |  |
| `ci1298e06e` | Interpret diagrams of the electromagnetic spectrum to quantitatively demonstrate the relationship between frequency, ... | fa2-v14 | covered |  |
| `cib7f640aa` | Describe practical applications for regions of the electromagnetic spectrum, linking properties to uses | fa2-v15 | covered |  |
| `ci297a0581` | Solve problems involving the inverse square law using I α 1 r 2 and I 1 r 1 2 = I 2 r 2 2 to compare the intensity of ... | fa2-v16 | covered |  |
| `ci68035e55` | Explain the relationship between distance and radiation intensity from a point source | fa2-v16 | covered |  |
| `ci9327efb9` | Conduct a laboratory experiment to analyse the relationship between light intensity and distance from a light source | fa2-v17 | partial |  |
| `ci58dde389` | Describe examples of the law of reflection | fa2-v18 | covered |  |
| `ci5d17e8c1` | Use linear wavefront diagrams and ray diagrams to analyse the motion of a wave | fa2-v18 | covered |  |
| `ci9f497b3f` | Construct ray diagrams to show reflection from plane mirrors and refraction at a boundary | fa2-v18, fa2-v21 | covered | Shared: reflection ray diagrams in v18, refraction ray diagrams in v21; planned split |
| `ci0eac4a8c` | Relate the velocity of light to the refractive index of a medium | fa2-v19 | covered |  |
| `ci9bed6630` | Solve refractive index problems using n x = c v x , where n x is the refractive index of the medium and v x is the ... | fa2-v19 | covered |  |
| `cibbce5d8e` | Relate the change in velocity of a light wave crossing an interface to differences between refractive indices | fa2-v19 | covered |  |
| `ci768c84eb` | Conduct a scientific investigation to demonstrate refraction between 2 media | fa2-v20 | partial |  |
| `cicff5c4a1` | Solve problems by applying the law of refraction of light using n 1 sin ⁡ θ 1 = n 2 sin ⁡ θ 2 | fa2-v21 | covered |  |
| `cia550d948` | Solve total internal reflection and critical angle problems using sin ⁡ θ c = n 2 n 1 | fa2-v22 | covered |  |
| `ci68dbbc22` | Conduct a laboratory experiment to determine the refractive index of a material and assess the accuracy of the ... | fa2-v23, fa2-v24 | partial | Concept and investigation pair |
| `ci49f242d5` | Conduct a scientific investigation to discuss how spectacles assist people with vision impairment | fa2-v25, fa2-v26 | partial | Concept and investigation pair |
| `ciedffc9b0` | Conduct a practical investigation to model how waves diffract through openings and around obstacles of different sizes | fa2-v27, fa2-v28 | partial | Concept and investigation pair |
| `cice3856f7` | Model the principle of superposition | fa2-v29 | covered |  |
| `ci95ccdd84` | Use the principle of superposition to explain the constructive interference and destructive interference of waves | fa2-v29 | covered |  |
| `ci37c12aba` | Explain how the superposition of waves produces interference patterns with observable maxima and minima | fa2-v30 | covered |  |
| `cif767f5f1` | Demonstrate the formation of a standing wave | fa2-v31 | covered |  |
| `ci6032e8f8` | Explain the production of nodes and antinodes in a standing wave | fa2-v31 | covered |  |
| `cib412323e` | Analyse the frequency and wavelength of standing waves in strings fixed at both ends using v = fλ | fa2-v32 | covered |  |
| `ci29a00bd1` | Explain the frequency shift phenomenon for sound waves and light waves ( blueshift and redshift ), as a source moves ... | fa2-v33 | covered |  |
| `cid9edc629` | Solve frequency shift phenomenon problems for sound using f ' = f v wave + v observer v wave - v source | fa2-v33 | covered |  |

### FA3 syllabus points (47)

| Codename | Syllabus point (abridged) | Design(s) | Site crosswalk | Audit note |
| --- | --- | --- | --- | --- |
| `ci0ed8dd13` | Explain the role of the movement of electrons in charging particles and objects | fa3-v01 | covered |  |
| `ci6c641d68` | Explain how friction , induction and conduction can cause objects to become electrically charged | fa3-v02 | covered |  |
| `ci3fc7c021` | Outline characteristics of an electric field surrounding a point charge | fa3-v03 | covered |  |
| `ci14918ed7` | Explain the role of static electricity in producing a lightning strike | fa3-v03 | covered |  |
| `cic3320bf2` | Use field line diagrams to describe the electric field around point charges and between charged particles | fa3-v03 | covered |  |
| `ci6d5de19d` | Use the equation E = 1 4 π ε 0 q r 2 to demonstrate that the electric field strength around a point charge follows the ... | fa3-v04 | covered |  |
| `cib6be0599` | Solve problems involving charges in electric fields using F ⃗ = q E ⃗ | fa3-v05 | covered |  |
| `cia29563ca` | Analyse the factors that affect the force between 2 charged particles using the electrostatic force law and F = 1 4 π ... | fa3-v06 | covered |  |
| `ci6c3ec771` | Use field line diagrams to describe the electric field between 2 charged parallel plates | fa3-v07 | covered |  |
| `ci347cedf7` | Analyse the factors that affect the strength of the electric field between 2 charged parallel plates using E = V d | fa3-v07 | covered |  |
| `ci8ba3687b` | Solve problems relating to the charged particles in electric fields using F ⃗ = q E ⃗ , E = V d , F ⃗ net = m a ⃗ and ... | fa3-v08 | covered |  |
| `cib03359c7` | Explain how the electric potential energy of a charged particle changes due to its position in an electric field | fa3-v09 | covered |  |
| `ci654b1a70` | Solve problems involving changes in electric potential energy in a uniform electric field using W = qV = qEd and W = Δ ... | fa3-v09 | covered |  |
| `ci04be0ba7` | Account for the energy transformations that occur when a charge moves in a uniform electric field | fa3-v09 | covered |  |
| `ci82085d4c` | Solve problems involving the work done when moving a charge in an electric field using the relationships between W , Δ ... | fa3-v10 | covered |  |
| `ci281b61d7` | Analyse the relationships between voltage, potential energy difference and work when changing the position of a charge ... | fa3-v10 | covered |  |
| `ci156ac6c8` | Solve problems relating to changes in position of charges in electric fields using W = qV | fa3-v10 | covered |  |
| `ci9e13ac7f` | Calculate electric current using I = q t | fa3-v11 | covered |  |
| `cibb4a6f3a` | Relate the flow of charge to the direction of conventional current | fa3-v11 | covered |  |
| `cidd4209b2` | Explain why electrons flow through a metallic conductor when connected to an external voltage | fa3-v12 | covered |  |
| `ci95fddf87` | Compare direct current (DC) and alternating current (AC) | fa3-v12 | covered |  |
| `cif8293068` | Relate voltage to electron flow in a circuit of constant resistance | fa3-v13 | covered |  |
| `cib4d17ff9` | Explain why the resistance of a conductor can be affected by its material, length, cross-sectional area and temperature | fa3-v13 | covered |  |
| `ci3bbf4fbd` | Analyse the relationships between voltage, current and resistance using V = IR for electric circuits having constant ... | fa3-v14 | covered |  |
| `ci0f358d9a` | Conduct a laboratory experiment to examine the relationships between voltage and current for ohmic conductors and ... | fa3-v15 | partial |  |
| `ci630dcbe5` | Relate power to energy transformations | fa3-v16 | covered |  |
| `ciabf03b85` | Solve problems using P = W Δ t = Δ E Δ t | fa3-v16 | covered |  |
| `ci97643202` | Describe the relationship between power and voltage using P = VI | fa3-v16 | covered |  |
| `ci13c391ee` | Solve problems relating to energy loss in circuits using P = I 2 R and the law of conservation of energy | fa3-v17 | covered |  |
| `cibb8ff1ad` | Compare the connection of components in series circuits with that in parallel circuits | fa3-v18 | covered |  |
| `ci5f108f5a` | Construct and analyse diagrams of series circuits and parallel circuits | fa3-v18 | covered |  |
| `ci18d8abc3` | Explain why ammeters are connected in series, and voltmeters are connected in parallel to components, in electric ... | fa3-v19 | covered |  |
| `ci8fb6b1e5` | Account for the magnitude of current at any point in a series circuit | fa3-v20 | covered |  |
| `ci32112b01` | Account for the total voltage of a series circuit being the sum of the voltages of its components using conservation ... | fa3-v20 | covered |  |
| `ci9b07eafe` | Account for the total resistance of a series circuit being the sum of the resistances of its components using R s e r ... | fa3-v20 | covered |  |
| `ci77bd4eb8` | Use the relationship between the total resistance and resistance in each branch of a parallel circuit, 1 R p a r a l l ... | fa3-v21 | covered |  |
| `ci0b4ad0e3` | Explain the relationship between the total current of a parallel circuit and the current passing through each ... | fa3-v21 | covered |  |
| `ci463e276f` | Solve problems involving voltage, current and resistance, in series, parallel and combination circuits | fa3-v22 | covered |  |
| `ci40cee3de` | Conduct a laboratory experiment to measure the voltage differences across components and current at different points ... | fa3-v23 | partial |  |
| `ci0eb45c13` | Identify that magnetic field lines are continuous and used to represent the strength and direction of magnetic fields | fa3-v24 | covered |  |
| `ciad7060a3` | Use field line diagrams to analyse the magnetic field around a bar magnet, current-carrying wire and current-carrying ... | fa3-v24 | covered |  |
| `ci6de98fee` | Calculate the strength of the magnetic field produced by a current-carrying wire using B = μ 0 I 2 πr | fa3-v25 | covered |  |
| `cic201bfb8` | Describe the structure of a simple solenoid | fa3-v26 | covered |  |
| `cicc24d302` | Account for the shape and direction of the magnetic field produced by a direct current passing through a solenoid | fa3-v26 | covered |  |
| `ci2792ab30` | Calculate the strength of the uniform magnetic field inside a solenoid using B = μ 0 NI L | fa3-v27 | covered |  |
| `cic3a3747e` | Conduct a secondary-source investigation to assess the choice of materials used in the core of electromagnets | fa3-v28, fa3-v29 | partial | Concept and investigation pair |
| `cib271cbdb` | Conduct a practical investigation to examine the factors affecting the strength of an electromagnet | fa3-v28, fa3-v30 | partial | Concept and investigation pair |
