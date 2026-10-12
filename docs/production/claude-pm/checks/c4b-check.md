# C4b independent fact check

Checked `lessons/chem-m5-c04b.md`, Revision 4: quoted narration, Visual text, key notes, memory aid and numerical author notes. Compared `site-extracts/chem-m5-l06.md` and the official NSW 2017 Chemistry syllabus. No stills exist, so screen checks were skipped.

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | science | Numbers and author note (d): "within about 5 per cent of the way to their final values (clock 13.4 for tube A, 1.34 for tube B)" | Five per cent of the total concentration change is reached at 8.7322 and 0.87322 ticks; 13.4 and 1.34 instead correspond to H2 and I2 being about 5% above their final concentration. | Define the threshold as H2 and I2 within about 5% of their final concentration; retain about 13 and 1.3. |
| 2 | science | 6: "A catalyst lowers both ridges by the same height ... both rates rise by the same factor"; 9a: "The iron lowers the activation energy by the same amount for the trip back, so both rates rise by the same factor"; key note 2: "at a steady temperature both rates rise by the same factor" | These general statements apply the single-barrier, equal-multiplier explanation to real catalysts and the Haber process, although alternative multistep pathways need not preserve the uncatalysed rate laws or enhancement factors away from equilibrium. | Keep the equal multiplier at every mixture specific to the numerical example; explain the general and Haber conclusions using faster forward and reverse reactions and unchanged equilibrium composition. |

Syllabus: None found. Necessary new terms are introduced, and omitting K here follows the stated lesson boundary rather than contradicting the site.

Screen: Not checked: no stills.

Copy: None found in learner text. No U+2014 found.

## Numerical trace

Independently integrated with fourth-order Runge-Kutta, step 0.0001 tick: let h = [H2] = [I2], [HI] = 18 - 2h, and dh/dt = -0.05h^2 + (0.05/49)(18 - 2h)^2, h(0) = 9. The exact threshold times follow from the integrated quadratic rate equation. Multiplying its right-hand side by 10 gives B(t) = A(10t).

| A clock | H2 = I2 | HI | forward | reverse |
| --- | --- | --- | --- | --- |
| 0 | 9 | 0 | 4.05 | 0 |
| 3 | 3.935615 | 10.128769 | 0.774453 | 0.104686 |
| 12 | 2.145873 | 13.708254 | 0.230239 | 0.191751 |
| 13 | 2.112135 | 13.775730 | 0.223056 | 0.193644 |
| 13.4 | 2.100977 | 13.798046 | 0.220705 | 0.194272 |
| 30 | 2.001389 | 13.997222 | 0.200278 | 0.199921 |
| equilibrium | 2 | 14 | 0.2 | 0.2 |

B at 1.3 equals A at 13 for concentrations, with rates ten times larger; B at 1.34 likewise equals A at 13.4. B at clock 3 has HI = 13.997222, so the displayed 14 is correct to the chosen precision. The exact 5% threshold relative to final H2/I2 is 13.43714 ticks for A and 1.343714 for B. K = 14^2/(2 x 2) = 49. Equilibrium catalysed rates are 2 and 2, not 200 and 200: Revision 4 changed the scale, and its current numbers are internally consistent. The scene 5 addition at clock 1 is an arbitrary event time, with no approach-time calculation attached.

## Source trace and verification limits

- [Official NESA 2017 syllabus](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx), Module 5: checked the concentration, temperature, pressure/volume, collision-theory and activation-energy/heat-of-reaction content directly in the DOCX.
- [Atkins, Table 25.3, p. 1023](https://www.fkit.unizg.hr/_download/repository/Akins%20tablice%5B1%5D.pdf), citing G. C. Bond, *Heterogeneous Catalysis*: confirms 2HI decomposition activation energies 184 kJ/mol without catalyst and 59 kJ/mol with platinum. These are decomposition figures, as the design states.
- [Primary platinum HI-decomposition study](https://www.sciencedirect.com/science/article/abs/pii/0360319984902672): measurements over Pt/alumina at 480 to 700 K support platinum as a catalyst for this reversible reaction. The exact formation mechanism and performance of bare foil near 450 C were not verified; this is a verification limit, not a finding that platinum cannot catalyse HI formation.
- [OpenStax catalyst energy profiles](https://openstax.org/books/chemistry-2e/pages/12-7-catalysis) and [primary iron ammonia-synthesis mechanism study](https://pubs.rsc.org/en/Content/ArticleLanding/2019/CP/C9CP01611B): alternative pathways can involve several steps; the iron study reports ten surface reactions and composition-dependent rates. This supports finding 2. The same-factor result at equilibrium remains correct.
- [OpenStax Chemistry 2e, Chapter 13, exercises 25(b), 65 and 79](https://openstax.org/books/chemistry-2e/pages/13-exercises): the publisher gives Kc = 50.2 at 448 C for H2 + I2 forming 2HI. The design's 49 is 2.4% lower and is close to a textbook value near 450 C, as claimed.
- [RSC Haber teaching resource](https://edu.rsc.org/resources/ammonia/17.article): confirms iron, the reversible nitrogen/hydrogen reaction and ordinary Haber conditions. The identical rigid, sealed, isothermal vessels have the same equilibrium composition; the narration already states that the uncatalysed wait is extremely long. No attempt-system error found beyond finding 2.

Count: 2 findings (science 2, syllabus 0, screen 0, copy 0).
