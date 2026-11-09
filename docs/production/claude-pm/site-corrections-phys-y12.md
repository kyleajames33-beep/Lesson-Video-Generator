# Physics Year 12 site corrections, brief 168

Read-only source audit, 5 November 2026. These are proposed repairs, not website edits. Exact old strings below retain spelling and mathematical escapes; punctuation has only been normalised where it contains an em dash. Four records describe three underlying errors.

## 1. C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson02.sa.html

Source hash: `c3b81856cdb5c671c54afdacf36d022201f5c8b5a241352609384e54bddbc362`. Section: `investigate-and-consolidate`. Element: `we-phys-y12-m5-l02-b1`.

**Exact old text:**

All three grow with the square of the launch speed.

**Correction:** At fixed angle and equal levels, flight time grows linearly with launch speed; maximum height and range grow with its square.

**Reason:** T=2u sin theta/g, whereas H and R contain u squared.

## 2. C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson02.sa.html

Source hash: `c3b81856cdb5c671c54afdacf36d022201f5c8b5a241352609384e54bddbc362`. Section: `investigate-and-consolidate`. Element: `we-phys-y12-m5-l02-b1`.

**Exact old text:**

All three quantities grow with the square of the launch speed;

**Correction:** Flight time grows linearly with speed; maximum height and range grow with speed squared;

**Reason:** Repeat of the same error in the full-mark answer.

## 3. C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson03.sa.html

Source hash: `8bd974fedf652636912d936d6c79b00b2642878ead6e43a2e89cd5f70038006a`. Section: `unequal-height-obstacle`. Element: `we-3`.

**Exact old text:**

The ball clears the wall by approximately $\mathbf{10.3\ \text{m}}$.

**Correction:** Retain full precision through time and displacement: time1.695520262 s, displacement3.418722554 m, absolute height 18.418722554 m, clearance 10.418722554 m. Give10.4 m at 3 significant figures.

**Reason:** Premature rounding of both terms before subtraction changes the result; repair all3.3/18.3/10.3 result lines in this worked example.

## 4. C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson06.sa.html

Source hash: `d17495f1c7fc12f866524790a37850f2e52c0f292d51e2bedbe55fe2335c35f7`. Section: `apply-and-diagnose`. Element: `None`.

**Exact old text:**

When $\theta = 0°$ (force directed along the lever arm toward the pivot),

**Correction:** For the outward radius vector, theta=180 degrees for force toward the pivot; theta=0 degrees for force away from it. Both have zero torque.

**Reason:** The cross-product angle is between the outward radius and force, not an undirected line. The numerical zero survives but the angle label is inconsistent.

The source random-error definition uses repeating/averaging as shorthand. Selected narration should say that independent repeats reduce uncertainty of the mean, while individual scatter and bias require separate controls. This is an authoring precision note, not a new claim that the source explicitly guarantees a smaller scatter. Preserve the unchanged 6 cm spread/4 cm shortfall when discussing that source example.


## Brief 187 follow-up, 6 November 2026

Read-only checks. Existing brief168 records on speed scaling, wall clearance and inward force angle remain open and are not duplicated. Repetition and averaging precision remains an authoring note, not a claim that individual scatter must shrink. Full-precision calculations are in work/brief187/site-calculations.json. No HTML was edited.

### 187.1: lesson01, sign-convention clarification

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson01.sa.html`, SHA256 `a739198c2342e395b4220c69a481c9d3e2086d5a788c8b83c7e35025b2e3b6d1`. Context: we-phys-y12-m5-l01-b1, phase-learn, main.

Exact old paragraph: Vertically the only force is weight, so the acceleration is $g$ downwards. The ball is thrown horizontally, so its initial vertical velocity is zero, and $v_y = gt$ with $y = \tfrac{1}{2}gt^2$: the vertical speed grows steadily and the drop grows with the square of the time.

Proposed correction: Name downward-positive displacement/speed explicitly in this answer, or consistently use negative vertical components with up positive. The magnitudes are valid; do not mark the numerical content wrong. The page elsewhere uses up-positive equations.

### 187.2: lesson04, confirmed numerical repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson04.sa.html`, SHA256 `2cc8fc5463630f41a6c4d1c882ea403046539c1666b1b4253a67e1b6eec6afcc`. Context: phase-practice, main.

Exact old paragraph: Q4 (3 marks): $u_y = 22\sin 35° = 12.62$ m/s; $v_x = 22\cos 35° = 18.02$ m/s. (a) $h_{\max} = \frac{u_y^2}{2g} = \frac{12.62^2}{2 \times 9.8} = \mathbf{8.13 \text{ m}}$ (1 mark). (b) $t_{\text{flight}} = \frac{2u_y}{g} = \frac{2 \times 12.62}{9.8} = \mathbf{2.58 \text{ s}}$ (1 mark). (c) $R = 18.02 \times 2.58 = \mathbf{46.5 \text{ m}}$ (1 mark).

Proposed correction: Carry 22 sin35 and 22 cos35 unrounded: H=8.12403698 m ->8.12 m, T=2.57524114 s ->2.58 s, R=46.4093090 m ->46.4 m. Display rounded intermediate values with approximately signs and retain calculator values for later steps.

### 187.3: lesson04, confirmed numerical repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson04.sa.html`, SHA256 `2cc8fc5463630f41a6c4d1c882ea403046539c1666b1b4253a67e1b6eec6afcc`. Context: phase-practice, main.

Exact old paragraph: Q5 (3 marks): $u_y = 18\sin 30° = 9.0$ m/s; $v_x = 18\cos 30° = 15.59$ m/s. Vertical: $-25 = 9.0t - 4.9t^2$ → $4.9t^2 - 9.0t - 25 = 0$. $t = \frac{9.0 + \sqrt{81 + 490}}{9.8} = \mathbf{3.35 \text{ s}}$ (2 marks). Horizontal: $s_x = 15.59 \times 3.35 = \mathbf{52.2 \text{ m}}$ (1 mark).

Proposed correction: The positive quadratic root is3.356695 s ->3.36 s, not3.35 s. Range52.325689 m ->52.3 m, not52.2 m. Retain the unrounded root before multiplication.

### 187.4: lesson04, confirmed numerical repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson04.sa.html`, SHA256 `2cc8fc5463630f41a6c4d1c882ea403046539c1666b1b4253a67e1b6eec6afcc`. Context: phase-practice, main.

Exact old paragraph: Q7 (4 marks): At wall: $t = \frac{15}{v\cos 25°}$ (1 mark). Substituting into $s_y = v\sin\theta \cdot t - \frac{1}{2}gt^2$: $5 = 15\tan 25° - \frac{4.9 \times 225}{v^2\cos^2 25°}$. $\frac{1102.5}{0.821v^2} = 1.99$ (1 mark). $v = \mathbf{26.0 \text{ m/s}}$ (2 marks).

Proposed correction: Full trigonometric values give u=25.940842 m/s ->25.9 m/s at3sf. Preserve the separate valid26.0 m example in the error-clinic component calculation. This repair belongs only to Q7.

### 187.5: lesson04, confirmed numerical repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson04.sa.html`, SHA256 `2cc8fc5463630f41a6c4d1c882ea403046539c1666b1b4253a67e1b6eec6afcc`. Context: phase-practice, main.

Exact old paragraph: Q11 (4 marks): (a) $v_x = 9.2\cos 22° = \mathbf{8.53 \text{ m/s}}$; $u_y = 9.2\sin 22° = \mathbf{3.45 \text{ m/s}}$ (1 mark). (b) $t = \frac{2u_y}{g} = \frac{2 \times 3.45}{9.8} = \mathbf{0.704 \text{ s}}$ (1 mark). (c) $R = 8.53 \times 0.704 = \mathbf{6.01 \text{ m}}$ (1 mark). (d) $h_{\max} = \frac{u_y^2}{2g} = \frac{3.45^2}{19.6} = \mathbf{0.607 \text{ m}}$ (1 mark).

Proposed correction: Using9.2 m/s at22 degrees: T=.703342939 s ->.703 s, R=5.999580 m ->6.00 m, H=.605996713 m ->.606 m. Carry components before final rounding.

### 187.6: lesson04, confirmed numerical repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson04.sa.html`, SHA256 `2cc8fc5463630f41a6c4d1c882ea403046539c1666b1b4253a67e1b6eec6afcc`. Context: phase-practice, main.

Exact old paragraph: Q13 (4 marks): (a) $\sin(2\theta) = \frac{72 \times 9.8}{900} = 0.784$. $\theta = \mathbf{25.8°}$ or $\mathbf{64.2°}$ (1 mark). (b) $t_{25.8°} = \mathbf{2.66 \text{ s}}$; $t_{64.2°} = \mathbf{5.52 \text{ s}}$ (1 mark). (c) Two angles because $\sin(2\theta)$ has the same value for $2\theta$ and $(180° - 2\theta)$. Lower angle: less vertical velocity (shorter time) but more horizontal velocity. Higher angle: more vertical velocity (longer time) but less horizontal speed. These combinations produce the same range (2 marks).

Proposed correction: Solve both angles without rounding them before time:25.8141423 and64.1858577 degrees, giving T=2.66604066 s ->2.67 s and5.51149772 s ->5.51 s. The printed2.66 and5.52 are affected by truncation/early angle rounding.

### 187.7: lesson04, confirmed numerical repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson04.sa.html`, SHA256 `2cc8fc5463630f41a6c4d1c882ea403046539c1666b1b4253a67e1b6eec6afcc`. Context: phase-practice, main.

Exact old paragraph: SA2 (3 marks): $v_x = 16\cos 40° = \mathbf{12.3 \text{ m/s}}$; $u_y = 16\sin 40° = \mathbf{10.3 \text{ m/s}}$ (1 mark). $t_{up} = \frac{u_y}{g} = \frac{10.3}{9.8} = \mathbf{1.05 \text{ s}}$ (1 mark). $h_{\max} = \frac{u_y^2}{2g} = \frac{10.3^2}{19.6} = \mathbf{5.41 \text{ m}}$ (1 mark).

Proposed correction: With16 m/s at40 degrees, u_y=10.2846018 m/s and H=5.39658333 m ->5.40 m, not5.41 m. The shown1.05 s rise time remains valid.

### 187.8: lesson04, confirmed numerical repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson04.sa.html`, SHA256 `2cc8fc5463630f41a6c4d1c882ea403046539c1666b1b4253a67e1b6eec6afcc`. Context: phase-practice.

Exact old paragraph: Q12 (4 marks): $v_x = 15\cos 50° = 9.64$ m/s; $u_y = 15\sin 50° = 11.49$ m/s. (a) $t_{up} = \frac{u_y}{g} = \frac{11.49}{9.8} = \mathbf{1.17 \text{ s}}$ (1 mark). (b) $-30 = 11.49t - 4.9t^2$ → $t = \mathbf{3.92 \text{ s}}$ (1 mark). (c) $s_x = 9.64 \times 3.92 = \mathbf{37.8 \text{ m}}$ (1 mark). (d) $v_y = 11.49 - 9.8(3.92) = -26.9$ m/s. $v = \sqrt{9.64^2 + 26.9^2} = \mathbf{28.6 \text{ m/s}}$ at 70.3° below horizontal (1 mark).

Proposed correction: For15 m/s at50 degrees from30 m: T=3.91062654 s ->3.91 s, R=37.705537 m ->37.7 m, landing v_y=-26.833476 m/s ->-26.8 m/s, speed28.513155 m/s ->28.5 m/s, direction70.235604 degrees ->70.2 degrees below horizontal. Keep t_up=1.17 s. Carry full intermediate values.

### 187.9: lesson05, finite-ball measurement clarification

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson05.sa.html`, SHA256 `306416b4f7988dab0e9fa8592142380128e0139ce61e7f3e487843d1c622c0d1`. Context: phase-learn, main.

Exact old paragraph: Measure the vertical height $h$ from the floor to the centre of the ball at the exit point.

Proposed correction: For the model terminating at first floor contact, measure h from the ball bottom at exit to the floor, equivalently use centre height minus radius. Centre-to-floor alone overstates the falling distance by one radius. Keep R from the vertical projection of the exit centre to the centre of the first-contact mark.

### 187.10: lesson05, measurement-origin clarification

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson05.sa.html`, SHA256 `306416b4f7988dab0e9fa8592142380128e0139ce61e7f3e487843d1c622c0d1`. Context: phase-learn, main.

Exact old paragraph: Dependent: Horizontal range $R$ (measured from base of ramp to landing point)

Proposed correction: Replace base of ramp by the floor point vertically below the exit. The method already specifies that correct origin; align this variable summary to it.

### 187.11: lesson06, terminology clarification

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson06.sa.html`, SHA256 `d17495f1c7fc12f866524790a37850f2e52c0f292d51e2bedbe55fe2335c35f7`. Context: phase-learn, main.

Exact old paragraph: Lever arm The perpendicular distance from the pivot to the line of action of the force.

Proposed correction: Distinguish the radius/distance r from pivot to application point from the perpendicular moment arm r_perp. In tau=rF sin(theta), theta is between outward r and F; in tau=r_perp F there is no further sine factor. The page currently defines lever arm as perpendicular distance then uses it for the angled radius. Preserve the separate existing inward-force-angle repair.


## Brief 188 follow-up, 6 November 2026

Read-only source review. No site HTML edited. Source punctuation U+2014 is normalized to a comma in quotations below. Calculations: work/brief188/site-calculations.json. Existing brief168 and187 findings remain preserved. HSC worksheet values and NASA measured values may differ; keep each given set consistent. Halley75.3years and17.83AU are valid exercise data, not a confirmed error. T for tension versus period is a notation clarification, not inherently wrong science.

### 188.1: lesson08, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson08.sa.html`, SHA256 `9bcb63c78453091f25d5f5a84d39512bad41ec23ae411fd2555b7d28eb565a4a`. Context: phase-learn, main.

Exact old paragraph: Solve. $v_{\max} = \sqrt{0.60 \times 9.8 \times 30} = \sqrt{176.4} = \mathbf{13.3\ \text{m s}^{-1}}$ (47.9 km/h).

Proposed correction: Carry the unrounded speed13.281566m/s before conversion:47.813638km/h ->47.8km/h, not47.9.

### 188.2: lesson08, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson08.sa.html`, SHA256 `9bcb63c78453091f25d5f5a84d39512bad41ec23ae411fd2555b7d28eb565a4a`. Context: phase-learn, main.

Exact old paragraph: Solve. $v_\text{design} = \sqrt{80 \times 9.8 \times \tan 12°} = \sqrt{80 \times 9.8 \times 0.213} = \sqrt{166.9} = \mathbf{12.9\ \text{m s}^{-1}}$ (46.4 km/h).

Proposed correction: The r80m,12degree example gives12.9090799m/s and46.4726877km/h ->46.5. Show approximate intermediate values.

### 188.3: lesson08, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson08.sa.html`, SHA256 `9bcb63c78453091f25d5f5a84d39512bad41ec23ae411fd2555b7d28eb565a4a`. Context: phase-learn, main.

Exact old paragraph: Solve. $v_{\max} = \sqrt{100 \times 9.8 \times \left(\dfrac{0.141 + 0.25}{1 - 0.25 \times 0.141}\right)} = \sqrt{980 \times \dfrac{0.391}{0.965}} = \sqrt{980 \times 0.405} = \sqrt{397} = \mathbf{19.9\ \text{m s}^{-1}}$ (71.6 km/h).

Proposed correction: Carry tan8degrees unrounded:19.9165006m/s ->19.9,71.6994021km/h ->71.7, not71.6.

### 188.4: lesson08, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson08.sa.html`, SHA256 `9bcb63c78453091f25d5f5a84d39512bad41ec23ae411fd2555b7d28eb565a4a`. Context: phase-practice, main.

Exact old paragraph: Q2 (3 marks): Design speed: $v_\text{design} = \sqrt{120 \times 9.8 \times \tan 8°} = \sqrt{120 \times 9.8 \times 0.141} = \sqrt{165.8} = 12.9\ \text{m s}^{-1} = \mathbf{46.4\ \text{km/h}}$ (1 mark). Setup: $v_{\max} = \sqrt{120 \times 9.8 \times (0.141 + 0.30)/(1 - 0.30 \times 0.141)}$ (1 mark). $v_{\max} = \sqrt{1176 \times 0.441/0.958} = \sqrt{1176 \times 0.460} = \sqrt{541} = 23.3\ \text{m s}^{-1} = \mathbf{83.8\ \text{km/h}}$ (1 mark).

Proposed correction: For r120m,8degrees,mu.30: design12.8559722m/s ->46.3km/h; maximum23.2568436m/s ->83.7km/h. Preserve full calculator values before converting.

### 188.5: lesson08, missing condition

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson08.sa.html`, SHA256 `9bcb63c78453091f25d5f5a84d39512bad41ec23ae411fd2555b7d28eb565a4a`. Context: phase-learn, main.

Exact old paragraph: Normal force The perpendicular contact force from a surface. On a banked curve: $N = mg/\cos\theta > mg$.

Proposed correction: Qualify N=mg/cos(theta) as the no-friction design-speed case. With friction on a bank N depends on speed: N=mg cos(theta)+(mv^2/r)sin(theta). Apply the same condition to the misconception answer, while preserving the correctly scoped frictionless derivation.

### 188.6: lesson08, contradictory claim

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson08.sa.html`, SHA256 `9bcb63c78453091f25d5f5a84d39512bad41ec23ae411fd2555b7d28eb565a4a`. Context: phase-review, main.

Exact old paragraph: At the start you were asked about Daytona International Speedway's 31° banking, engineered in 1959 so that NASCAR cars travelling at ~320 km/h (88.9 m/s) require no lateral friction to navigate the turns.

Proposed correction: The revisit claim that320km/h requires no lateral friction contradicts the supplied31degree and300/310m model. These give design speeds151.3/153.8km/h. Use one explicitly illustrative radius consistently;320km/h requires friction. Preserve the following paragraph that already explains that friction is involved; its42.8 should be42.7m/s with310m. Do not assert an independently surveyed track radius.

### 188.7: lesson08, source request

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson08.sa.html`, SHA256 `9bcb63c78453091f25d5f5a84d39512bad41ec23ae411fd2555b7d28eb565a4a`. Context: phase-learn, main.

Exact old paragraph: ✓ Very steep banking raises the design speed, which benefits fast traffic, but slow vehicles (lorries, cars braking to turn) may slide down the slope if going below the minimum safe speed. Highway engineers choose angles (typically 3–8°) that balance the full speed distribution of expected traffic.

Proposed correction: Request a primary engineering source for the claimed typical3to8degree highway range, or omit that optional range. It has not been established false.

### 188.8: lesson10, convention clarification

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson10.sa.html`, SHA256 `64401b181f9a35605154dba81c071858b1cb3d9896c0ec74c78332321699bd7c`. Context: phase-learn, main.

Exact old paragraph: A 60 kg astronaut weighs 600 N at Earth's surface. What would they weigh at a distance of $2R_{\text{Earth}}$ from Earth's centre?

Proposed correction: This can be a supplied approximate weight, so150N at2R is valid. State approximate g10m/s^2 for this example, or use588N and147N with9.8. Do not mark the given600N itself an arithmetic error.

### 188.9: lesson10, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson10.sa.html`, SHA256 `64401b181f9a35605154dba81c071858b1cb3d9896c0ec74c78332321699bd7c`. Context: phase-learn, main.

Exact old paragraph: The forces were of order $10^{-7}$ N. Cavendish reported Earth's mean density rather than a numerical value of $G$ in modern notation; his measurement later allowed $G$ and Earth's mass to be inferred:
        $$g = \frac{GM}{R^2} \implies M = \frac{gR^2}{G} = \frac{9.8 \times (6.37 \times 10^6)^2}{6.67 \times 10^{-11}} = 5.97 \times 10^{24} \text{ kg}$$

Proposed correction: The printed substitution9.8*(6.37e6)^2/(6.67e-11) gives5.96182339e24kg ->5.96e24, not5.97. Preserve the historically correct statement that Cavendish reported density.

### 188.10: lesson10, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson10.sa.html`, SHA256 `64401b181f9a35605154dba81c071858b1cb3d9896c0ec74c78332321699bd7c`. Context: phase-learn, main.

Exact old paragraph: $g = \dfrac{GM}{R^2} = \dfrac{(6.67 \times 10^{-11}) \times (5.97 \times 10^{24})}{(6.37 \times 10^6)^2} \approx 9.83 \text{ m/s}^2$

Proposed correction: With the page values G6.67e-11,M5.97e24,R6.37e6, g=9.81344065 ->9.81m/s^2, not9.83. The400km value8.68806 ->8.69 and surface9.81 elsewhere are correct.

### 188.11: lesson11, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson11.sa.html`, SHA256 `62b7d2be3790b2adf89c177e71c4be0b7af850d8005f56cdd75c2f88c441ef3e`. Context: phase-learn, main.

Exact old paragraph: Solve. $T = 2\pi\sqrt{\dfrac{(8.0 \times 10^6)^3}{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}} = 2\pi\sqrt{\dfrac{5.12 \times 10^{20}}{3.98 \times 10^{14}}} = 2\pi\sqrt{1.286 \times 10^6} = 7134 \text{ s} \approx 119 \text{ min}$.

Proposed correction: Full stated inputs give7124.67021s ->7125s or7.12e3s (119min remains correct), not7134s. Carry full intermediates.

### 188.12: lesson11, precision and model clarification

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson11.sa.html`, SHA256 `62b7d2be3790b2adf89c177e71c4be0b7af850d8005f56cdd75c2f88c441ef3e`. Context: phase-learn, main.

Exact old paragraph: All geostationary satellites must orbit at exactly 35,900 km altitude, directly above the equator , moving in the same direction as Earth's rotation (west to east). Any other orbit, inclined, polar, or different altitude, will cause the satellite to drift across the sky.

Proposed correction: Replace exactly35900km by about35800km for actual geostationary altitude, and use a sidereal day23h56min for the physical condition. A specified24h rounded school calculation may yield about35900km; label it approximate. Keep35900km when it is simply a supplied exercise altitude.

### 188.13: lesson11, dated fact clarification

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson11.sa.html`, SHA256 `62b7d2be3790b2adf89c177e71c4be0b7af850d8005f56cdd75c2f88c441ef3e`. Context: phase-practice, main.

Exact old paragraph: Apply Band 4 (3 marks) 1. The Hubble Space Telescope orbits at 547 km altitude. Calculate its orbital speed and period. ($G = 6.67 \times 10^{-11}$ N m²/kg², $M_E = 5.97 \times 10^{24}$ kg, $R_E = 6.37 \times 10^6$ m)

Proposed correction: Make547km an explicitly assumed exercise altitude, or provide a date and source. The535km elsewhere can represent a different epoch, so the pair is not by itself an inconsistency. NASA pages consulted have dated altitude figures; no current exact547km verified.

### 188.14: lesson11, path definition repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson11.sa.html`, SHA256 `62b7d2be3790b2adf89c177e71c4be0b7af850d8005f56cdd75c2f88c441ef3e`. Context: phase-learn, main.

Exact old paragraph: Limitations: Poor coverage above ~70° latitude (too close to horizon); signal round-trip latency ~240 ms (satellite is far away)

Proposed correction: The minimum ground-satellite-ground path is about240ms one way between ground users, not240ms round trip. A request and reply through GEO is about480ms before routing/processing. Specify the endpoints and path.

### 188.15: lesson12, missing condition

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson12.sa.html`, SHA256 `441719a2abd13157d21f73bb1213e999f7ee9bde8f45feada17655abc31ca73e`. Context: phase-practice, main.

Exact old paragraph: Q3 (4 marks): The statement is TRUE [1]. "More tightly bound" means the satellite is in a lower orbit (more negative $E_\text{total} = -GMm/(2r)$ implies smaller $r$) and more energy is required to move it to infinity [1]. Satellite 1 ($E = -3 \times 10^{10}$ J): binding energy $= 3 \times 10^{10}$ J [1]. Satellite 2 ($E = -1 \times 10^{10}$ J): binding energy $= 1 \times 10^{10}$ J. Satellite 1 requires 3× more energy to escape, it is deeper in the gravitational well [1].

Proposed correction: For comparisons of total circular-orbit energies, add same satellite mass and central body before inferring smaller radius. SA3 lacks this condition and its answer makes the inference; retain the valid3e10/1e10J escape-energy comparison. Activity2 already explicitly supplies equal masses, so preserve it. Apply the condition to the generic vocabulary/key-note radius inference too.

### 188.16: lesson14, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson14.sa.html`, SHA256 `68a4b9625adadcca1a3c779b24ea2958d03bae5c6e9f451fbddad66def79167d`. Context: phase-learn, main.

Exact old paragraph: $$\Delta U = (6.67 \times 10^{-11})(5.97 \times 10^{24})(1000)\!\left(\frac{1}{6.37 \times 10^6} - \frac{1}{4.22 \times 10^7}\right) \approx 5.29 \times 10^{10} \text{ J}$$

Proposed correction: The displayed substitution gives5.30756217e10J ->5.31e10J, not5.29e10. The approximate53GJ interpretation is still valid.

### 188.17: lesson14, missing condition

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson14.sa.html`, SHA256 `68a4b9625adadcca1a3c779b24ea2958d03bae5c6e9f451fbddad66def79167d`. Context: we-phys-y12-m5-l14-b2, phase-learn, main.

Exact old paragraph: A negative value is not a shortage of energy. It measures how much energy would have to be supplied to separate the two masses to infinity: an object with $U = -2 \times 10^{10}$ J needs $2 \times 10^{10}$ J supplied to escape, so the magnitude is the depth of the well it sits in.

Proposed correction: Both Account response versions equate |U| to escape energy without a starting kinetic-energy condition. Specify initially at rest and quasistatic separation, or use total E=K+U for escape. The existing earlier stationary-system note already correctly states this condition.

### 188.18: lesson15, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson15.sa.html`, SHA256 `0d89f9ec738bb96bd099ca0a8caa0e86cf3a02d9ba4a67485c504e0136cb005b`. Context: we-phys-y12-m5-l15-b2, phase-learn, main.

Exact old paragraph: The factor of two comes from the inverse square. This is the criterion in a usable form: the error is roughly twice the ratio of the height to the Earth's radius.

Proposed correction: For constant surface g=GM/R^2, (mgh)/(Delta U)=1+h/R exactly. Relative overestimate is h/R, not2h/R. A fractional local-field change can be about2h/R, which is a different quantity.

### 188.19: lesson15, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson15.sa.html`, SHA256 `0d89f9ec738bb96bd099ca0a8caa0e86cf3a02d9ba4a67485c504e0136cb005b`. Context: phase-learn, main.

Exact old paragraph: A GPS satellite orbits at 20,200 km altitude, where Earth's gravitational potential is $V = -GM/r = -1.51 \times 10^7$ J/kg. At Earth's surface, $V = -6.26 \times 10^7$ J/kg. The difference, $\Delta V = 4.75 \times 10^7$ J/kg, is the increase in gravitational potential energy per kilogram between those locations. For a quasistatic transfer with no kinetic-energy change, it is also the minimum external work per kilogram. This is what makes gravitational potential useful: it is a property of location, not of the test mass.

Proposed correction: Using the page mu3.98e14 andR6.37e6, surface V=-6.24803768e7J/kg ->-6.25e7, not-6.26e7. With GPS potential-1.51e7, the rounded difference is4.74e7. Apply to hook and revisit, preserving the separately correct+45/-7/+38microsecond clock distinction.

### 188.20: lesson16, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson16.sa.html`, SHA256 `042db07a785136be57b3e58e165d27e71c4f98e4a992d449e1da6b100c2de8cc`. Context: phase-practice, main.

Exact old paragraph: SA1 (3 marks): $v_e = \sqrt{\frac{2 \times 6.67 \times 10^{-11} \times 4.87 \times 10^{24}}{6.05 \times 10^6}} = \sqrt{1.07 \times 10^8} = 1.04 \times 10^4$ m/s $\approx$ 10.4 km/s [1 mark]. Since 12 km/s > 10.4 km/s, the probe will escape [1 mark]. Speed at infinity: $v_\infty = \sqrt{v^2 - v_e^2} = \sqrt{12^2 - 10.4^2} = \sqrt{144 - 108.2} = \sqrt{35.8} \approx$ 5.99 km/s [1 mark].

Proposed correction: For the actual Venus givens M4.87e24kg,R6.05e6m,G6.67e-11: escape speed10.3625039km/s and excess speed sqrt(12^2-10.3625039^2)=6.05132319km/s ->6.05. The rounded10.4 intermediate produces the erroneous5.99. Carry unrounded values.

### 188.21: lesson16, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson16.sa.html`, SHA256 `042db07a785136be57b3e58e165d27e71c4f98e4a992d449e1da6b100c2de8cc`. Context: phase-practice, main.

Exact old paragraph: SA2 (4 marks): $v_e(\text{Earth}) = \sqrt{2 \times 6.67 \times 10^{-11} \times 5.97 \times 10^{24} / 6.37 \times 10^6} \approx$ 11.2 km/s [1 mark]. $v_e(\text{Moon}) = \sqrt{2 \times 6.67 \times 10^{-11} \times 7.34 \times 10^{22} / 1.74 \times 10^6} \approx$ 2.38 km/s [1 mark]. Earth's escape velocity is larger because Earth has a much greater mass (roughly 81× more) while its radius is only about 3.7× larger, the combined effect of $\sqrt{M/r}$ favours Earth [2 marks: identifying mass difference + correct ratio argument].

Proposed correction: For the supplied Moon values M7.34e22,R1.74e6,G6.67e-11, escape speed2.37220010km/s ->2.37, not2.38. A sourced2.38 reference with other inputs is separately valid; repair only the given-data answer.

### 188.22: lesson17, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson17.sa.html`, SHA256 `01842919fdfa6884fe4144bf4197bb53f8d91c2f43873464c113dadcc13b8f8e`. Context: phase-learn, main.

Exact old paragraph: Nearly circular, with perihelion about 3.4% closer than aphelion

Proposed correction: The stated perihelion distance is3.28731percent closer than aphelion ->3.3percent. Alternatively aphelion is3.39905percent farther than perihelion ->3.4percent. Keep the separate3.4percent faster speed comparison, which is correct.


## Brief 189 follow-up, 6 November 2026

Read-only checks, Module6. The first two records address the priority lesson15errors. No HTML edited. Exact source paragraphs below normalize U+2014 to commas. Calculations: work/brief189/site-calculations.json. Historical/source checks: primary-sources.json. Checked acceptable rounding and notation suggestions are explicitly distinct from confirmed errors.

### 189.1: Module6 lesson15, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson15.sa.html`, SHA256 `83b406d627f4831289898b4a6d547e95d2073a8247be5f879363b251a2c1dc9a`. Context: phase-learn, main.

Exact old paragraph: A step-down transformer has 1200 primary turns and 60 secondary turns. The primary is connected to 230 V AC and draws 0.50 A. Calculate (a) secondary voltage, (b) secondary current, and (c) power delivered.

Proposed correction or disposition: The question uses230V but its solution changes to240V. Keep230V throughout: secondary11.5V, secondary10A, power115W. Repair all worked givens, substitution, power check and summary together. The separate Q1 answer already correctly uses11.5V and10A. Preserve standalone240V exercise givens elsewhere unless their own question changes.

### 189.2: Module6 lesson15, multiple-choice answer missing

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson15.sa.html`, SHA256 `83b406d627f4831289898b4a6d547e95d2073a8247be5f879363b251a2c1dc9a`. Context: phase-learn, main.

Exact old paragraph: Use the transformer tool with 100 primary turns and 500 secondary turns. A 230 V input gives an output of:

Proposed correction or disposition: 230*(500/100)=1150V, which is absent from the four choices48,230,1200,2400V. Replace the1200V option by1150V and update its key/feedback. Root now uses230V for this run.

### 189.3: Module6 lesson01, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson01.sa.html`, SHA256 `c3cdeb0ba635b7fe5b8207a93d8acd8c3fad7c253462e9ab00df683bdc9f7569`. Context: we-phys-y12-m6-l01-b1, phase-learn, main.

Exact old paragraph: The field is uniform, so the force is the same everywhere in the gap and $a = F/m = 2.4 \times 10^{-15}/9.11 \times 10^{-31} \approx 2.6 \times 10^{15}$ m s$^{-2}$, constant throughout. Gravity is about $10^{16}$ times smaller here and is neglected.

Proposed correction or disposition: The worked electron acceleration/gravity ratio is about2.69e14, not1e16. Update the step and repeated full answer. Neglecting gravity is still justified.

### 189.4: Module6 lesson01, numerical precision repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson01.sa.html`, SHA256 `c3cdeb0ba635b7fe5b8207a93d8acd8c3fad7c253462e9ab00df683bdc9f7569`. Context: phase-learn, main.

Exact old paragraph: Context: This acceleration is roughly $10^{13}\,g$. The electric force on an electron completely dominates gravity, which is why we ignore gravity when analysing charged particles in electric fields.

Proposed correction or disposition: The5000V/m case gives about8.96e13times g. Say about9e13 rather than about1e13, consistently in context, step order and Q2(b).

### 189.5: Module6 lesson01, source request

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson01.sa.html`, SHA256 `c3cdeb0ba635b7fe5b8207a93d8acd8c3fad7c253462e9ab00df683bdc9f7569`. Context: phase-review, main.

Exact old paragraph: The answer: balance gives $qE = mg$, so $E = mg/q$. With $q = 1.6 \times 10^{-19}$ C (one elementary charge), $E = (1.6 \times 10^{-14} \times 9.8)/(1.6 \times 10^{-19}) \approx 9.8 \times 10^5$ V/m, and $V = Ed = 9.8 \times 10^5 \times 0.016 \approx 15{,}700$ V. This is exactly the scale of voltage Millikan used in his apparatus. He measured 1.59 × 10⁻¹⁹ C, within 1% of the modern value of 1.602 × 10⁻¹⁹ C.

Proposed correction or disposition: The15.7kV balance follows from the illustrative one-charge droplet data, but exactly the scale Millikan used and the specific1909apparatus attribution need a primary source. Treat the chosen values as an illustrative Millikan-style example until sourced. Do not replace this with an unverified historical voltage. The1913paper record is verified; its PDF was unavailable through the web redirect.

### 189.6: Module6 lesson01, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson01.sa.html`, SHA256 `c3cdeb0ba635b7fe5b8207a93d8acd8c3fad7c253462e9ab00df683bdc9f7569`. Context: phase-review, main.

Exact old paragraph: The key insight: the uniform parallel-plate field makes the electric force constant throughout the gap, just like gravity, which is why Millikan could set up a perfect force balance. In a non-uniform field this method would not work.

Proposed correction or disposition: A nonuniform field can still balance a stationary drop at a particular location. Uniformity makes E=V/d and the force calculation simple, but the absolute claim that the method would not work in a nonuniform field is false. Repair only that final sentence.

### 189.7: Module6 lesson02, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson02.sa.html`, SHA256 `b8e5d86f3143e7710d89382529af535765f6750d2469d6b16a47663924abe9f7`. Context: main.

Exact old paragraph: In 1897, J.J. Thomson at the Cavendish Laboratory, Cambridge, fired cathode rays sideways through perpendicular electric and magnetic fields inside a glass tube. By balancing the two deflections he calculated e/m = 1.76 × 10¹¹ C/kg, showing cathode rays were particles far lighter than any atom. That ratio alone does not give the electron mass: an independent measurement of the charge, which Millikan supplied in 1909, was needed before the 1/1836 mass ratio could be worked out. The same crossed-field deflection principle is used in cathode-ray oscilloscopes; television picture tubes steered their beams with magnetic coils instead.

Proposed correction or disposition: An electrostatic oscilloscope CRT uses electric deflection, not a crossed-field velocity selector. Say electric deflection for the oscilloscope sentence, preserving the separate TV magnetic-coil statement.

### 189.8: Module6 lesson02, historical attribution repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson02.sa.html`, SHA256 `b8e5d86f3143e7710d89382529af535765f6750d2469d6b16a47663924abe9f7`. Context: main.

Exact old paragraph: Today's hook: In Thomson's 1897 cathode ray tube experiment at the Cavendish Laboratory, an electron entered a 5 cm long deflection region with horizontal velocity 3.0 × 10⁷ m/s. The electric field between the plates was 2.0 × 10⁴ V/m. Predict: does the electron exit the plates still moving horizontally, or does it leave at an angle, and why does the path have the same shape as a thrown ball?

Proposed correction or disposition: The primary1897paper compares electric and magnetic deflections, lists5cm plates with1.5cm spacing and reports its own measured mass/charge values. Do not present this chosen3.0e7m/s,2.0e4V/m trajectory as a documented measured event giving the modern1.76e11C/kg. Call the case illustrative or Thomson-style, and separate the modern accepted ratio from the historical result. Apply to hook and revisit.

### 189.9: Module6 lesson06, checked acceptable rounding

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson06.sa.html`, SHA256 `08e7d8ebf326861b37d4a0b79749decd0c147d7a4e6adc13e6db27eb40254439`. Context: we-phys-y12-m6-l06-b1, phase-learn, main.

Exact old paragraph: The electron and the proton carry equal and opposite charges, so in the electric field they experience forces of equal magnitude in opposite directions. The accelerations are very unequal, however: the proton is about 1840 times more massive, so its acceleration is about 1840 times smaller and it deflects far less over the same distance.

Proposed correction or disposition: About1840 is a valid three-significant-figure rounding of the HSC mass ratio1836.645. It is not a confirmed scientific error. Optional consistency change to about1837 can align pages, but should not be logged as a wrong ratio.

### 189.10: Module6 lesson06, wording clarification

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson06.sa.html`, SHA256 `08e7d8ebf326861b37d4a0b79749decd0c147d7a4e6adc13e6db27eb40254439`. Context: we-phys-y12-m6-l06-b2, phase-learn, main.

Exact old paragraph: The magnetic force on a moving charge is always perpendicular to the velocity, by the definition of the right-hand rule, so it has no component along the direction of motion. It therefore does zero work at every instant, and the kinetic energy , and so the speed , cannot change. What it can do is act as a centripetal force, continuously redirecting the velocity.

Proposed correction or disposition: The vector-force relationship establishes perpendicularity; a hand rule remembers the direction. Optional wording: magnetic force is perpendicular to velocity, so it does no work. Do not turn this into an additional equation students must learn.

### 189.11: Module6 lesson07, hook/revisit mismatch

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson07.sa.html`, SHA256 `1ba6d04173c8eed041862f0fdd4568e96b53c6dd97da3958a88854b085c109f3`. Context: phase-review, main.

Exact old paragraph: At the start you were asked about Faraday's 1821 electromagnetic rotation experiment at the Royal Institution, if you reversed the current in the rotating wire, what happens?

Proposed correction or disposition: The actual prediction is a wire between horseshoe poles, not the named1821experiment. Rewrite the revisit to that actual case: reversing current reverses force, doubling B and I multiplies force by four.

### 189.12: Module6 lesson08, notation clarification

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson08.sa.html`, SHA256 `f6d5798bbb0a4e9546e5d71b2a0d488227622dfc60ab20847c878394676051ff`. Context: phase-learn, main.

Exact old paragraph: F/l force per unit length (N m⁻¹)  · μ₀ permeability of free space (N A⁻²)  · I₁, I₂ currents (A)  · d perpendicular separation (m)

Proposed correction or disposition: d is a valid local separation symbol. Optionally note d here is the HSC sheet r, or use r consistently. Do not claim the existing force law is wrong. The current/historical SI wording elsewhere is correct and should be preserved.

### 189.13: Module6 lesson12, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson12.sa.html`, SHA256 `623e8c2063b841b9eb270be6360877b3a6a14887bb4c6520cedb4059818a4012`. Context: phase-learn, main.

Exact old paragraph: Part (b), Flux when plane makes 40° with field. The angle between the plane and B is 40°, so the angle between the normal and B is 90° − 40° = 50° . $\Phi = BA\cos 50° = (1.5 \times 10^{-3})(0.643) = 9.6 \times 10^{-4}$ Wb

Proposed correction or disposition: Carry the unrounded area pi*.04^2 and flux. Result9.69300880e-4Wb ->9.7e-4at2sf, not9.6e-4. The normal angle50degrees is correct.

### 189.14: Module6 lesson12, task clarity

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson12.sa.html`, SHA256 `623e8c2063b841b9eb270be6360877b3a6a14887bb4c6520cedb4059818a4012`. Context: phase-learn, main.

Exact old paragraph: A circular coil of radius 4.0 cm has 80 turns. It is placed in a uniform magnetic field of 0.30 T such that the field is perpendicular to the plane of the coil.

Proposed correction or disposition: The80turn count is unused because the question asks flux per turn. Optionally remove it, or add a clearly separate linkage question:80times the unrounded face-on flux=.120637Wb-turn ->.12. Do not multiply the original per-turn answer by80.

### 189.15: Module6 lesson13, condition clarification

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson13.sa.html`, SHA256 `056995e20eb15b27b14bb7b5da4a58fd70d13a6f4a8e720b1003fcd39357c4f9`. Context: phase-learn, main.

Exact old paragraph: Transformers: An alternating current in the primary coil creates a changing magnetic field. This changing field passes through the secondary coil, inducing an emf proportional to the turns ratio.

Proposed correction or disposition: Clarify the quantities held fixed: for a given flux-change rate, secondary emf is proportional to secondary turns; for a given primary voltage in an ideal transformer, Vs/Vp=Ns/Np. The existing wording can be valid with fixed Vp, so this is a precision clarification, not an unconditional false claim.


## Brief 190 follow-up, 6 November 2026

Read-only Module6checks. Priority lesson09angle model answers and lesson16Q2first. Lesson15two230V repairs are already recorded in brief189; no duplicate here. Exact paragraphs normalize U+2014to commas. Source checks: work/brief190/primary-sources.json. No HTML edited. Current hooks were checked, rather than assuming older author-note mismatches still exist.

### 190.1: Module6 lesson09, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson09.sa.html`, SHA256 `511aaa66aed6d07ee4cb4a816dfa98a00e6972e247c67cdcb9d1971db16575ff`. Context: we-phys-y12-m6-l09-b1, phase-learn, main.

Exact old paragraph: With $n$ turns, coil area $A$ and $\theta$ the angle between the plane of the coil and the field, the torque is $\tau = nIAB\sin\theta$ in the form used here, so the torque is proportional to the number of turns, the current, the coil area and the field strength.

Proposed correction or disposition: The page consistently defines its main theta from the coil plane, so its cosine convention is valid. These model answers alone mix that plane definition with sine. Either preserve the plane definition and change sin to cos, radial theta90to0, or define a new area-normal angle for every sine expression. Prefer HSC area-normal sine with an explicit conversion, as root11requests. Repair Analyse steps3and6 and Account steps2through5 as one coherent set. Maximum torque occurs with plane parallel to B; zero with plane perpendicular. Do not globally replace valid cosine calculations.

### 190.2: Module6 lesson09, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson09.sa.html`, SHA256 `511aaa66aed6d07ee4cb4a816dfa98a00e6972e247c67cdcb9d1971db16575ff`. Context: we-phys-y12-m6-l09-b2, phase-learn, main.

Exact old paragraph: The torque on the coil is $\tau = nIAB\sin\theta$, where $\theta$ is the angle between the plane of the coil and the field direction. Everything except $\theta$ is fixed by the construction and the supply.

Proposed correction or disposition: The page consistently defines its main theta from the coil plane, so its cosine convention is valid. These model answers alone mix that plane definition with sine. Either preserve the plane definition and change sin to cos, radial theta90to0, or define a new area-normal angle for every sine expression. Prefer HSC area-normal sine with an explicit conversion, as root11requests. Repair Analyse steps3and6 and Account steps2through5 as one coherent set. Maximum torque occurs with plane parallel to B; zero with plane perpendicular. Do not globally replace valid cosine calculations.

### 190.3: Module6 lesson16, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson16.sa.html`, SHA256 `352d49dc5beecf7f5feb79636134a4e6f4a0b4a00e3bda80b9139052d8959eed`. Context: phase-practice, main.

Exact old paragraph: Q2 (3 marks): When load increases, the rotor decelerates slightly, increasing the slip (1 mark). The greater relative motion between rotor and stator field increases the rate of flux change through the rotor bars, inducing a larger EMF and larger current by Faraday's Law (1 mark). The larger rotor current interacts with the stator field to produce a greater magnetic torque, restoring the rotor speed and matching the increased load demand (1 mark).

Proposed correction or disposition: The greater load causes a slightly lower steady rotor speed in the normal stable operating range. Increased slip raises induced current and torque until torque matches the new load; it does not restore the previous speed at unchanged supply. Replace restoring the rotor speed by opposing further slowing and settling at slightly lower speed. Q1already correctly includes under load for its synchronous-speed argument.

### 190.4: Module6 lesson10, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson10.sa.html`, SHA256 `736384e8c6b6ea3e705767d723a0ee76e77ccceae7ab2d40f7f297065de8d36f`. Context: phase-learn, main.

Exact old paragraph: Connect a DC motor to a battery and watch the shaft spin continuously in one direction. Without any electronic control, it just spins, and keeps spinning. But there is a hidden problem: as the coil turns through 180°, the forces on its sides would naturally reverse, trying to spin it backwards. The commutator, two copper half-rings that swap the current connections every half-turn, is what prevents this reversal and keeps the torque acting in the same rotational direction throughout each revolution.

Proposed correction or disposition: Without commutation, current direction on each material coil side is fixed and the magnetic force direction on that side remains fixed in a uniform field. The sides change positions relative to the axle, so the torque reverses. The commutator reverses current and forces as the sides swap to retain one torque sense. Change the forces-would-naturally-reverse clause only.

### 190.5: Module6 lesson11, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson11.sa.html`, SHA256 `9af961b0a91b756b47dc41ca271356aaeef276f2a6b230af0df2df4a1b3fbe9b`. Context: phase-learn, main.

Exact old paragraph: Solve: $\varepsilon_0 = (100)(0.40)(4.0 \times 10^{-3})(314) = 50.2$ V.

Proposed correction or disposition: Carry omega=2pi50 without rounding: peak50.26548246V, shown50.3V at3sf. Instantaneous value at2.00ms is29.5453093V, so29.5V at3sf remains correct. Do not multiply the rounded50.3and rounded.588then change the answer to29.6. Update substitutions together.

### 190.6: Module6 lesson11, route coherence

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson11.sa.html`, SHA256 `9af961b0a91b756b47dc41ca271356aaeef276f2a6b230af0df2df4a1b3fbe9b`. Context: phase-learn, main.

Exact old paragraph: Prerequisite check: Lessons 12–14 established magnetic flux $\Phi=BA\cos\theta$, flux linkage $N\Phi$ and Faraday’s law $\varepsilon=-d(N\Phi)/dt$. This lesson applies those ideas to an ideal coil rotating uniformly in a uniform field. The generator produces an alternating emf ; an alternating current flows only when the output circuit is closed through a load.

Proposed correction or disposition: The stated prerequisites are later-numbered site lessons. Reconcile the actual site learning route or provide explicit prerequisite links rather than implying they were already taught by ascending lesson order. This does not change the correct flux/Faraday physics. Video order and site numbering are distinct.

### 190.7: Module6 lesson15, source scope

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson15.sa.html`, SHA256 `83b406d627f4831289898b4a6d547e95d2073a8247be5f879363b251a2c1dc9a`. Context: we-phys-y12-m6-l15-b2, phase-learn, main.

Exact old paragraph: The ideal transformer model assumes complete flux linkage between primary and secondary, windings with no resistance, no currents induced in the core, and no energy cost in magnetising it, which together give perfect efficiency and $V_pI_p = V_sI_s$. Real transformers fail each of these assumptions to some degree. Some flux leaks into the surrounding air instead of threading the secondary, which is countered by a closed continuous soft-iron core and by winding the secondary over the primary. The windings have resistance and dissipate power as $I^2R$, countered by thick low-resistance copper conductors and by oil or fin cooling in large units. The changing flux induces eddy currents in the core itself, which are suppressed by laminating the core into thin insulated sheets. And repeatedly reversing the core's magnetisation costs energy as hysteresis loss, reduced by using a magnetically soft core material. Judged against these criteria the ideal model is a very good approximation rather than a poor one: large power transformers routinely exceed 98 per cent efficiency, so the turns-ratio and power relationships give accurate predictions in practice, while the model still cannot describe the heating, the noise or the small phase effects a real transformer shows.

Proposed correction or disposition: A scoped efficiency example needs its load and transformer class. Official EnergyRating distribution tables at50percent rated load include oil values above98percent and dry types below98percent. These do not alone establish all large power transformers routinely above98percent. Retain root fallback well above90percent, or cite a specific relevant rated unit. Preserve the qualitative useful-ideal-model conclusion.

### 190.8: Module6 lesson15, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson15.sa.html`, SHA256 `83b406d627f4831289898b4a6d547e95d2073a8247be5f879363b251a2c1dc9a`. Context: phase-practice, main.

Exact old paragraph: Q2 (4 marks): (a) $N_s=N_p(V_s/V_p)=500(400/25)=8000$ turns (1 mark). (b) In the ideal equal-power model, $I_s=P_{in}/V_s=20\times10^6/(400\times10^3)=50$ A (1 mark). (c) $P_{out}=\eta P_{in}=0.96(20\text{ MW})=19.2$ MW (1 mark). The missing 0.8 MW is transferred to the surroundings through copper heating, eddy currents, hysteresis and flux leakage rather than delivered to the load (1 mark).

Proposed correction or disposition: The arithmetic is valid:8000turns,50A ideal,19.2MW output,.8MW loss. In the final energy destination, leakage flux by itself is not dissipated heat. Distinguish reduced coupling/leakage reactance from copper, core and stray eddy-current heat. Leakage fields can cause additional heating in conducting structures, but energy does not disappear merely because flux misses the secondary.

### 190.9: Module6 lesson16, overgeneralisation

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson16.sa.html`, SHA256 `352d49dc5beecf7f5feb79636134a4e6f4a0b4a00e3bda80b9139052d8959eed`. Context: phase-learn, main.

Exact old paragraph: Yes (for rotor excitation)

Proposed correction or disposition: The generator comparison should allow brushless excitation as well as collector rings. Siemens SGen100A offers rotating brushless exciter or static excitation using collector rings. Say sometimes, depending on excitation design. Do not change the simple classroom slip-ring generator model.

### 190.10: Module6 lesson16, historical source request

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson16.sa.html`, SHA256 `352d49dc5beecf7f5feb79636134a4e6f4a0b4a00e3bda80b9139052d8959eed`. Context: main.

Exact old paragraph: Today's hook: Tesla's 1888 induction motor used a squirrel-cage aluminium rotor with no external wires, yet it spun when connected to his two-phase AC supply. The rotor had no brushes, no commutator, no direct electrical connection. In the 136 years since, this design has not been fundamentally changed. What physical principle allows the rotor to spin without any direct electrical connection?

Proposed correction or disposition: The exact1888aluminium squirrel-cage hardware and numerical fleet/efficiency claims need separate primary evidence. Use an illustrative squirrel-cage motor hook, or cite the actual Tesla patent/device and distinguish it from the later cage design. The induction mechanism is valid; do not infer apparatus details from the inventor/date. The fixed136years wording is also stale in2026.

### 190.11: Module6 lesson17, primary-source counterexample

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson17.sa.html`, SHA256 `b666280482f9179bb7ab6b0592004f6ec93f4a529967113c60a9ee36d628c48d`. Context: phase-learn, main.

Exact old paragraph: Tesla's drive motors are AC induction motors controlled by high-frequency PWM inverters. The inverter ramps the effective voltage from near-zero at startup, preventing damaging surge currents, the electronic equivalent of a starting resistor, but far more efficient.

Proposed correction or disposition: Avoid the blanket all-Tesla induction claim. Tesla Model3manual specifies a permanent-magnet synchronous rear motor and an induction front motor for AWD. Say some electric vehicles use inverter-fed induction motors. Keep the controller explanation generic unless a model-specific control source supports it.

### 190.12: Module6 lesson17, historical source request

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson17.sa.html`, SHA256 `b666280482f9179bb7ab6b0592004f6ec93f4a529967113c60a9ee36d628c48d`. Context: main.

Exact old paragraph: Today's hook: Melbourne's W-class trams (Melbourne and Metropolitan Tramways Board, 1923 fleet) ran on 600 V DC with coil resistance 0.3 Ω. At startup, the driver had to engage a starting resistor. Why? Calculate the start-up current without the resistor, and explain what physics causes the running current to drop to just 8 A at full speed.

Proposed correction or disposition: 600V/.3ohm gives2000A in the resistance-only startup estimate; at8A, back emf597.6V and converted/input fraction99.6percent, not necessarily shaft efficiency. The named1923tram winding resistance and8A full-speed current need an actual fleet/motor source. Until then label chosen illustrative values rather than documented tram measurements. Hook and revisit currently match each other.

### 190.13: Module6 lesson17, checked acceptable

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson17.sa.html`, SHA256 `b666280482f9179bb7ab6b0592004f6ec93f4a529967113c60a9ee36d628c48d`. Context: phase-learn, main.

Exact old paragraph: If there were no back emf, the stationary circuit current would be limited to $V/R$ by the winding resistance. The deeper contradiction is that a model with no speed-dependent back emf would fail to account consistently for electromagnetic power conversion as speed changes. Back emf makes the power ledger explicit: electrical input = electromagnetic conversion + resistive heating , with mechanical losses then separating converted power from shaft output.

Proposed correction or disposition: Checked acceptable: the existing paragraph retains finite V/R current and a proper electrical-input=conversion+heat ledger. Do not replace it by the design scene3empty-battery counterfactual, which introduces an error.

### 190.14: Module6 lesson19, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson19.sa.html`, SHA256 `09343e0a4d69309a76ce802d2efd4c64338424a4eda33b8b18d784318c3a8f0c`. Context: phase-review, main.

Exact old paragraph: Cutting the copper pipe lengthwise removes the closed conducting loop, eliminating the eddy currents and restoring near-free-fall speed. The same principle explains why slotted transformer cores and laminated iron cores behave differently from solid ones.

Proposed correction or disposition: Change eliminating eddy currents to interrupting the large circumferential paths and greatly reducing braking. Smaller loops can persist. Near-free-fall is a qualitative comparison, not proof of exactly zero induced current.

### 190.15: Module6 lesson19, confirmed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson19.sa.html`, SHA256 `09343e0a4d69309a76ce802d2efd4c64338424a4eda33b8b18d784318c3a8f0c`. Context: phase-learn, main.

Exact old paragraph: The opposing field repels the falling magnet, slowing it to terminal velocity.

Proposed correction or disposition: For a downward-moving magnet, currents below repel and currents above attract, both producing upward braking. Describe an upward opposing force rather than saying the entire tube only repels. No need for a longer derivation.

### 190.16: Module6 lesson19, internal contradiction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson19.sa.html`, SHA256 `09343e0a4d69309a76ce802d2efd4c64338424a4eda33b8b18d784318c3a8f0c`. Context: phase-learn, main.

Exact old paragraph: Induction cooktops (not syllabus-required but common in exams): A coil beneath the ceramic surface carries high-frequency AC (20–50 kHz). The rapidly changing field penetrates the ferromagnetic base of the pot, inducing large eddy currents that produce heat directly in the pan via $I^2R$. The cooktop surface itself stays cool.

Proposed correction or disposition: The glass-ceramic surface can heat from the hot pan. Replace stays cool by is not directly heated by eddy currents, but can warm from the pan, consistent with the page own revisit. Avoid implying safe touch.

### 190.17: Module6 lesson20, attribution and scope

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson20.sa.html`, SHA256 `398c60dd57647be6ffd7686ff9ec7b806309b3739a8ae010649dc99d28e88cb4`. Context: phase-learn, main.

Exact old paragraph: Touch the metal case of a power point adaptor after it has been running for a few hours: it is warm. That warmth is $I^2R$ loss, electrical energy converted to heat in the wiring inside. Now scale this up: a 500 km transmission line carrying enough current to power a city. If the current is too high, the conductors overheat: they sag as they expand, voltage drop along the line grows, and protection equipment trips the circuit before the line is damaged. AEMO solves this by running the eastern Australian grid at 330–500 kV, ten to forty times the voltage a generator produces, which reduces the current by the same factor and $I^2R$ losses by the square of that factor.

Proposed correction or disposition: Name transmission network operators/assets separately from AEMO system operation. Transgrid confirms330and500kV assets, alongside other voltage levels. Replace ten-to-forty fixed ratio by much higher than generator voltage, or support a specific chosen pair. The inverse-square loss comparison requires fixed transmitted power and line resistance.

### 190.18: Module6 lesson20, hook/revisit mismatch

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson20.sa.html`, SHA256 `398c60dd57647be6ffd7686ff9ec7b806309b3739a8ae010649dc99d28e88cb4`. Context: phase-review, main.

Exact old paragraph: At the start you were asked about AEMO's eastern Australian grid 2022: why did they choose 500 kV rather than 100 kV for transmission, and to verify the 25× factor on a 100 MW line with R = 5 Ω.

Proposed correction or disposition: The current opening is a generic100versus500kV prediction, not a documented AEMO2022decision. Remove the unsupported historical decision claim from revisit and answer, retaining the valid illustrative100MW,R5ohm calculation:5MWversus.2MW,ratio25. The earlierR10ohm example is independently valid and yields10MWversus.4MW; name the changed resistance rather than calling either result wrong.

### 190.19: Module6 lesson09, checked current source / intent question

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson09.sa.html`, SHA256 `511aaa66aed6d07ee4cb4a816dfa98a00e6972e247c67cdcb9d1971db16575ff`. Context: phase-review, main.

Exact old paragraph: At the start you were asked about a 50-turn coil of area $2.0$ cm² carrying $1.0\times10^{-10}$ A in a $0.15$ T field. With its plane parallel to the field, is the torque maximum or zero?

Proposed correction or disposition: The current page opening banner and revisit both include this numeric coil case, although the prediction box is qualitative. Do not log an unconditional missing-opening error. Its1e-10A arithmetic1.5e-13Nm is correct. Tiny current alone does not prove a typo. Request intended context before any change; if an illustrative1Acase is chosen, torque becomes1.5e-3Nm and all occurrences must change together.

### 190.20: Module6 lesson16, checked acceptable coherence

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson16.sa.html`, SHA256 `352d49dc5beecf7f5feb79636134a4e6f4a0b4a00e3bda80b9139052d8959eed`. Context: phase-review, main.

Exact old paragraph: At the start you were asked about Tesla's 1888 induction motor, what physical principle allows the squirrel-cage rotor to spin without any direct electrical connection?

Proposed correction or disposition: The current opening banner already names Tesla1888and the unconnected rotor. The author-noted mismatch is not confirmed against this version. Retain the separate historical apparatus source request; do not duplicate a false hook error.

### 190.21: Module6 lesson17, checked acceptable coherence

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson17.sa.html`, SHA256 `b666280482f9179bb7ab6b0592004f6ec93f4a529967113c60a9ee36d628c48d`. Context: phase-review, main.

Exact old paragraph: At the start you were asked about Melbourne's W-class trams (Melbourne and Metropolitan Tramways Board, 1923 fleet) on 600 V DC with 0.3 Ω coil resistance. What is the start-up current without the starting resistor, and why does the running current drop to just 8 A?

Proposed correction or disposition: The current opening banner already contains the same tram case. The qualitative prediction box being different does not establish that no opening question exists. Retain source request for historical numerical attribution only.

### 190.22: Module6 lesson19, checked acceptable coherence

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson19.sa.html`, SHA256 `09343e0a4d69309a76ce802d2efd4c64338424a4eda33b8b18d784318c3a8f0c`. Context: phase-review, main.

Exact old paragraph: At the start you were asked about an induction cooktop and the copper-pipe experiment, what changing-flux principle explains both?

Proposed correction or disposition: The current opening banner explicitly includes both cooktop and tube, so the author-noted missing-opening claim is not confirmed. Preserve the separate correction that the cooktop surface can warm by contact.

### 190.23: Module6 lesson19, precision clarification

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson19.sa.html`, SHA256 `09343e0a4d69309a76ce802d2efd4c64338424a4eda33b8b18d784318c3a8f0c`. Context: phase-learn, main.

Exact old paragraph: Lamination: thin insulated iron sheets → small eddy-current loops → high resistance → small $I$ → less $I^2R$ heating. Silicon steel: higher resistivity than pure iron → further reduces eddy current magnitude. Both strategies reduce core losses without affecting magnetic flux.

Proposed correction or disposition: Optional precision: with little effect on the intended core flux rather than without affecting flux. This is not a request to add a long magnetic-material caveat to the video.

### 190.24: Module6 lesson15, teaching precision

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson15.sa.html`, SHA256 `83b406d627f4831289898b4a6d547e95d2073a8247be5f879363b251a2c1dc9a`. Context: phase-learn, main.

Exact old paragraph: Phone chargers

Proposed correction or disposition: Optional table clarification: many modern chargers rectify mains and use a high-frequency switch-mode transformer. The label can remain if that mechanism is clear; avoid illustrating every modern charger as the50Hziron-core demonstrator. Standalone240Vexercise givens elsewhere are valid and need not be globally changed to230V.


## Brief 191 follow-up, 6 November 2026

Read-only inspection of current Module7 HTML. Each issue is logged once even where several designs repeat it. Existing records remain unchanged. Typographic long dashes in source quotations are normalised to commas below. No HTML was edited. Checked-acceptable dispositions are retained to prevent false repairs. Source arithmetic: work/brief191/calculations.json.

### 191.1: Module7 lesson13, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson13.sa.html`, SHA256 `5430c9475f8f773e9ed668c6ea0533c38cfc689e14ff3f979a28b27c9a323937`. Context: phase-learn, main.

Current paragraph: A spaceship built to be 100 m long flies past Earth at $0.8c$. Two Earth observers standing 100 m apart simultaneously record the position of the ship's nose and tail as it passes. They find the gap is only 60 m, the ship appears shorter in the direction of its travel. Yet the captain aboard measures a perfectly normal 100 m ship. To understand why both measurements are correct, consider a rod of proper length $L_0$ at rest in the spaceship: the ship passes Earth at speed $v$, and the two events "front of rod at a fixed Earth point" and "back of rod at the same Earth point" occur at the same location in Earth's frame but at different positions in the ship's frame.

Proposed correction or disposition: Replace the two observers standing 100 m apart by two simultaneous position marks 60 m apart. The observers can use a synchronised array; their stated 100 m separation cannot itself be the nose-to-tail 60 m separation.

### 191.2: Module7 lesson12, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson12.sa.html`, SHA256 `776eb40440bbcf4e0a09d181ea093ac6f7c0d05609b11c04b9e996baef16f593`. Context: phase-review, main.

Current paragraph: The hook question: the flying clock shows less time, it has aged less than the Earth clock by ~100 ns. This is real and was measured directly by the Hafele–Keating 1971 US Naval Observatory experiment : four caesium atomic clocks flown around the world in commercial jets. Eastbound clocks lost $59 \pm 10$ nanoseconds and westbound clocks gained $273 \pm 7$ nanoseconds, in agreement with relativistic predictions. The different signs arise because the eastbound jet moves faster relative to Earth's centre (adding to Earth's rotation) while the westbound jet moves slower (subtracting from Earth's rotation), with gravitational (GR) effects also contributing opposite sign corrections.

Proposed correction or disposition: Answer depends on flight direction and gravity. Eastbound clocks lost 59 +/- 10 ns and westbound gained 273 +/- 7 ns. Remove the unconditional flying clock shows less statement. Both higher-altitude gravitational corrections increase clock rate; opposite measured signs are not opposite gravitational corrections.

### 191.3: Module7 lesson01, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson01.sa.html`, SHA256 `28881cb201739957186a78903724b2ee23ae40adc2a4abf95f14b0ba2a940e89`. Context: phase-learn, main.

Current paragraph: Tune a radio to an FM station and music reaches you through nothing but empty space. Stand outside in the dark and warmth from the sun still finds you. Undergo an X-ray and the image forms without the beam touching you. In each case, energy has arrived as an oscillating electric and magnetic field, a self-propagating electromagnetic wave requiring no medium, travelling at exactly $c = 3.00 \times 10^8$ m/s. All electromagnetic waves share three fundamental properties: they are transverse waves , they travel at the speed of light in vacuum, and they do not require a medium .

Proposed correction or disposition: 3.00 times 10^8 m/s is rounded. Use approximately, or state exact 299792458 m/s. The exact speed is defined; the written three-significant-figure value is not exact.

### 191.4: Module7 lesson01, checked current source, no unconditional hook error

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson01.sa.html`, SHA256 `28881cb201739957186a78903724b2ee23ae40adc2a4abf95f14b0ba2a940e89`. Context: main.

Current paragraph: Today's hook: Take a radio wave with wavelength 66 cm, so $f=c/\lambda\approx454$ MHz, and compare it with a gamma ray of wavelength $10^{-12}$ m. Both travel at $c$ in vacuum. Which carries more energy per photon, and by what factor?

Proposed correction or disposition: The current opening banner already uses 66 cm and the revisit matches it. A different prediction-box example does not establish a missing or contradictory opening. Do not change all occurrences to 100 m without a design decision.

### 191.5: Module7 lesson02, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson02.sa.html`, SHA256 `0e45d6ff94139c9f9c53183e29cdfcb1951590f6f45822baf2c5643aae7b0d63`. Context: phase-learn, main.

Current paragraph: Microwaves: Electron transitions in molecules (rotational) and special vacuum tubes (magnetrons).

Proposed correction or disposition: Molecular rotation is not an electronic transition. Distinguish rotational molecular transitions from oscillating charges in magnetrons.

### 191.6: Module7 lesson03, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson03.sa.html`, SHA256 `8a4753307dca9df0579d6dbb777f6731903c7c1f70874e623534cb16390916c1`. Context: main.

Current paragraph: In 1801, Thomas Young put the wave theory of light and the principle of interference to the Royal Society, and demonstrated it by splitting one beam of light into two coherent sources. Where the beams overlapped he saw evenly spaced bright and dark bands, a pattern no stream of particles can produce. In a modern version of the demonstration, light of wavelength 589 nm through slits 0.5 mm apart, with a screen 1 m behind, gives a fringe spacing of about 1.17 mm. Young's work opened the case for the wave model; Newton's particle theory was displaced only over the following two decades.

Proposed correction or disposition: 589 nm times 1 m divided by 0.5 mm gives 1.178 mm, or 1.18 mm at three significant figures. Repair opening, links and revisit consistently.

### 191.7: Module7 lesson03, optional model precision

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson03.sa.html`, SHA256 `8a4753307dca9df0579d6dbb777f6731903c7c1f70874e623534cb16390916c1`. Context: l03-check-misconceptions, phase-learn, main.

Current paragraph: Increasing $L$ increases the fringe spacing Red light produces wider fringes than blue light Increasing $d$ increases the fringe spacing The central fringe ($n = 0$) is always the brightest

Proposed correction or disposition: For identical equally illuminated slits, the central interference maximum is brightest. Retain those conditions if keeping always. This is a model condition, not a reason to add an advanced diffraction detour.

### 191.8: Module7 lesson04, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson04.sa.html`, SHA256 `c0e0238c1a22bff8c12e572f14a8b6c95599a291e82d17603642dd4e7b32fd1d`. Context: phase-learn, main.

Current paragraph: $\theta_2 = \sin^{-1}(0.636) =$ 39.5°

Proposed correction or disposition: With 300 lines/mm and first-order 18.5 degrees, sin(theta2)=2 sin(18.5 degrees)=0.634609, theta2=39.390 degrees, or 39.4 degrees. Carry the exact grating spacing and unrounded wavelength in steps 2 and 4.

### 191.9: Module7 lesson04, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson04.sa.html`, SHA256 `c0e0238c1a22bff8c12e572f14a8b6c95599a291e82d17603642dd4e7b32fd1d`. Context: phase-practice, main.

Current paragraph: (b) $d = 1/(600 \times 10^3) = 1.67 \times 10^{-6}$ m. For $n = 2$: $\sin\theta_2 = 2\lambda/d = 2(520 \times 10^{-9})/(1.67 \times 10^{-6}) = 0.623$. $\theta_2 = \sin^{-1}(0.623) \approx 38.5°$.

Proposed correction or disposition: For 600 lines/mm and 520 nm, sin(theta2)=0.624, theta2=38.610 degrees, or 38.6 degrees. Do not first round the spacing to 1.67 micrometres.

### 191.10: Module7 lesson04, apparatus clarification

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson04.sa.html`, SHA256 `c0e0238c1a22bff8c12e572f14a8b6c95599a291e82d17603642dd4e7b32fd1d`. Context: phase-learn, main.

Current paragraph: A diffraction grating has 300 lines per mm. It is illuminated with monochromatic light, and the first-order maximum is observed at an angle of 18.5° from the central beam.

Proposed correction or disposition: This case produces 1057.68 nm infrared. Name an infrared detector if the maximum is observed. No arithmetic error.

### 191.11: Module7 lesson04, optional explanatory precision

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson04.sa.html`, SHA256 `c0e0238c1a22bff8c12e572f14a8b6c95599a291e82d17603642dd4e7b32fd1d`. Context: phase-practice, main.

Current paragraph: (b)(i) Halving $a$ doubles the angle to the first minimum: new position is $9.0$ mm. (ii) The central maximum is dimmer, half the slit width means half the area, so less light is transmitted through the slit and the intensity decreases.

Proposed correction or disposition: The conclusion is correct. For uniform illumination in this Fraunhofer model the centre intensity scales as slit width squared, so halving width gives one quarter of the central peak intensity. Half the transmitted power alone does not explain the peak intensity.

### 191.12: Module7 lesson04, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson04.sa.html`, SHA256 `c0e0238c1a22bff8c12e572f14a8b6c95599a291e82d17603642dd4e7b32fd1d`. Context: l04-check-orient, phase-learn, main.

Current paragraph: Much larger than the wavelength Exactly 10 times the wavelength Comparable to or smaller than the wavelength Much smaller than the wavelength, light cannot pass through

Proposed correction or disposition: The distractor claims light cannot pass through a subwavelength aperture. That claim is false. Use an incorrect spreading claim rather than categorical zero transmission.

### 191.13: Module7 lesson05, optional angular wording

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson05.sa.html`, SHA256 `60abf968c0079227fb403abe4c58a9d6f782f910568ddd3d6fc65d628a1bc104`. Context: phase-learn, main.

Current paragraph: Put on polarising sunglasses and look at the glare bouncing off the road on a sunny day. Rotate the lenses 90°: the glare brightens dramatically, then vanishes again as you complete the rotation. The glare is not just bright, it is vibrating in a preferred direction, and the lens either aligns with or blocks that direction. This selective transmission is polarisation. In an unpolarised electromagnetic wave, the electric field oscillates in all directions perpendicular to the direction of propagation; in plane-polarised light, it oscillates in only one direction.

Proposed correction or disposition: Say a further 90 degrees brings the next extinction, or explicitly describe the full 360-degree cycle. The current wording is ambiguous.

### 191.14: Module7 lesson05, historical correction and rejected overbroad proposed repair

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson05.sa.html`, SHA256 `60abf968c0079227fb403abe4c58a9d6f782f910568ddd3d6fc65d628a1bc104`. Context: main.

Current paragraph: In 1929 Edwin Land patented the first practical sheet polariser, aligning tiny iodo-quinine sulphate crystals in a stretched polymer film. He founded the Polaroid Corporation in 1937, and sheet polarisers went on to be manufactured at large scale for sunglasses, camera filters and glare-reducing optics. The technology works because light is a transverse wave: only transverse waves can be restricted to a single plane of oscillation. Longitudinal waves, like sound, cannot be polarised at all. Brewster's angle, $\theta_B = \arctan n$, is the incidence angle at which the reflected light is completely plane-polarised. For a glass of refractive index 1.5 that is about 56°; the exact value depends on the glass.

Proposed correction or disposition: The original patent was filed in 1929 and granted in 1933 (US1918848A). Separate those dates. Do not adopt the design note blanket claim that stretching cannot orient crystalline-sheet polarizers: the historical source describes stretching by 1930. The current hook also conflates iodine-polymer H-sheet chemistry with the early herapathite-crystal sheet.

### 191.15: Module7 lesson09, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson09.sa.html`, SHA256 `3f660175d3288223d868598098ca915dd30e1e6b34ab652a3ab4c5d60492624b`. Context: phase-review, main.

Current paragraph: The historical anchor for this lesson is Cecilia Payne's 1925 Harvard College Observatory analysis of more than 300 stellar spectra. By matching absorption line strengths to atomic physics models, she determined that stars are 73% hydrogen and 25% helium by mass, a result so unexpected that her supervisor Henry Russell initially dismissed it. Four years later Russell confirmed her findings independently, acknowledging her priority. Payne's work is the definitive demonstration that spectroscopy can reveal the composition of objects light-years away without any physical sample.

Proposed correction or disposition: Payne established the exceptional abundance of hydrogen and helium. Do not attribute modern 73/25 mass percentages to her exact 1925 result. Henry Norris Russell was an external senior critic; Harlow Shapley supervised the Harvard thesis. Distinguish their roles.

### 191.16: Module7 lesson09, checked current source, optional clarity

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson09.sa.html`, SHA256 `3f660175d3288223d868598098ca915dd30e1e6b34ab652a3ab4c5d60492624b`. Context: phase-learn, main.

Current paragraph: Reflected sunlight (absorption spectrum): The Sun's photosphere is a hot, dense layer that behaves like an incandescent filament, producing a continuous spectrum. But that light must pass through the Sun's own cooler outer atmosphere (and reflect off the Moon, a planet, or a mirror, and pass through Earth's atmosphere) before it reaches your spectroscope. Cooler gas atoms along the path absorb photons at their characteristic wavelengths, removing those exact colours from the transmitted beam. Passing reflected sunlight through a prism or spectroscope reveals a continuous rainbow interrupted by thousands of dark Fraunhofer absorption lines, the classic real-world source of Kirchhoff's third law, and the same physical principle whether the sunlight reaches you directly or reflected from the Moon.

Proposed correction or disposition: The paragraph already names the Sun own cooler atmosphere, so it does not assert that the Moon has an absorbing atmosphere. Optional: explicitly separate solar Fraunhofer lines, telluric absorption and reflection. Do not log a false missing-solar-atmosphere error.

### 191.17: Module7 lesson09, coverage gap

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson09.sa.html`, SHA256 `3f660175d3288223d868598098ca915dd30e1e6b34ab652a3ab4c5d60492624b`. Context: phase-learn, main.

Current paragraph: NESA syllabus (IQ1, dot point 6): the spectra of stars reveal density, not just composition, temperature and velocity

Proposed correction or disposition: Add rotational Doppler broadening and its projected v sin(i) dependence for the named rotational-velocity syllabus facet. The pressure-broadening material is present; density itself is not missing.

### 191.18: Module7 lesson09, precision clarification

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson09.sa.html`, SHA256 `3f660175d3288223d868598098ca915dd30e1e6b34ab652a3ab4c5d60492624b`. Context: phase-learn, main.

Current paragraph: $v = c \times \dfrac{\Delta\lambda}{\lambda_0} = 3.00\times10^8 \times \dfrac{0.9}{393.3} = 6.87\times10^5\ \text{m/s} \approx \textbf{687 km/s}$

Proposed correction or disposition: The arithmetic is 686498.9 m/s. Observed 394.2 minus 393.3 nm is 0.9 nm at the written decimal precision, so either increase the precision of both wavelengths or round the result appropriately. Merely changing one to 394.20 while leaving the other at 393.3 does not establish three-significant-figure uncertainty.

### 191.19: Module7 lesson09, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson09.sa.html`, SHA256 `3f660175d3288223d868598098ca915dd30e1e6b34ab652a3ab4c5d60492624b`. Context: phase-learn, main.

Current paragraph: This was the first direct evidence that the universe is expanding . Running the expansion backward suggests all matter originated in a single event, the Big Bang.

Proposed correction or disposition: Use key early evidence for expansion. Avoid the unsupported first direct ranking and do not imply Hubble personally adopted the modern interpretation in 1929.

### 191.20: Module7 lesson10, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson10.sa.html`, SHA256 `3c6b866e16c1a9a0da5fd4b379c32c64cd1abbb96412642f19fdcb41efca4bc1`. Context: phase-learn, main.

Current paragraph: Maxwell's EM theory (1865): Light is a transverse oscillation of electric and magnetic fields. No medium required, refuting the aether. Speed $c = 1/\sqrt{\mu_0\varepsilon_0}$ predicted theoretically, confirmed experimentally.

Proposed correction or disposition: Maxwell theory did not historically refute the aether. Maxwell assumed a medium. Keep the later null experiments and relativity distinct.

### 191.21: Module7 lesson10, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson10.sa.html`, SHA256 `3c6b866e16c1a9a0da5fd4b379c32c64cd1abbb96412642f19fdcb41efca4bc1`. Context: phase-learn, main.

Current paragraph: Discrete wavelengths from atomic transitions; $E = hf$

Proposed correction or disposition: Discrete transitions and E=hf are quantum evidence. A grating uses wave diffraction as a spectroscopic technique; distinguish that from the discrete atomic line mechanism.

### 191.22: Module7 lesson10, historical numeric precision

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson10.sa.html`, SHA256 `3c6b866e16c1a9a0da5fd4b379c32c64cd1abbb96412642f19fdcb41efca4bc1`. Context: phase-learn, main.

Current paragraph: Fizeau's toothed wheel (1849) and Foucault's rotating mirror (1850, refined 1862): Hippolyte Fizeau sent a beam of light through a gap between the teeth of a rapidly rotating toothed wheel to a mirror 8 km away and back through the same wheel. At low rotation speeds the returning light passed back through the gap it left through, but at certain higher speeds the wheel had turned just enough that a tooth blocked the returning beam completely (extinction). From the known distance, the number of teeth, and the rotation rate at extinction, Fizeau calculated $c \approx 3.13\times10^8$ m/s, the first terrestrial (non-astronomical) measurement of the speed of light. Foucault refined the method using a rotating mirror in place of the toothed wheel: light reflects from a mirror spinning at a precisely known rate, travels to a fixed distant mirror, and returns. During the light's brief round-trip travel time, the rotating mirror turns through a tiny, measurable angle, deflecting the returned beam slightly off its outgoing path. Measuring this deflection angle, the rotation rate, and the distance travelled gives $c$ directly, and by placing a tube of water in the light's path, Foucault used the very same apparatus to measure the speed of light in water , the experiment that refuted Newton (Card 1).

Proposed correction or disposition: Use about 8.6 km for the Fizeau mirror path if retaining the historical 3.13 times 10^8 m/s result from 8633 m and 12.6 turns/s.

### 191.23: Module7 lesson10, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson10.sa.html`, SHA256 `3c6b866e16c1a9a0da5fd4b379c32c64cd1abbb96412642f19fdcb41efca4bc1`. Context: phase-learn, main.

Current paragraph: Longitudinal particles cannot be polarised

Proposed correction or disposition: Longitudinal describes waves. Say longitudinal waves cannot be polarised; a classical particle stream has no transverse oscillation direction to select.

### 191.24: Module7 lesson10, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson10.sa.html`, SHA256 `3c6b866e16c1a9a0da5fd4b379c32c64cd1abbb96412642f19fdcb41efca4bc1`. Context: main.

Current paragraph: In 1887 Heinrich Hertz at the University of Karlsruhe observed that ultraviolet light discharged a negatively charged zinc plate while red light, no matter how intense, had no effect. In 1888 Wilhelm Hallwachs at the University of Dresden confirmed and extended the result: the effect was frequency-dependent, not intensity-dependent. Classical wave theory predicts that any frequency of light should eventually eject electrons if the intensity is high enough, yet experiment refused to comply.

Proposed correction or disposition: Hertz 1887 observed UV-assisted sparks. Hallwachs 1888 established zinc-plate discharge. Name these separately and avoid attributing identified electrons to the 1887 observation.

### 191.25: Module7 lesson10, cross-page consistency

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson10.sa.html`, SHA256 `3c6b866e16c1a9a0da5fd4b379c32c64cd1abbb96412642f19fdcb41efca4bc1`. Context: phase-learn, main.

Current paragraph: At threshold: $hf_0 = \phi$, so $\lambda_0 = hc/\phi = (4.14\times10^{-15})(3.00\times10^8)/(2.50) = 4.97\times10^{-7}\ \text{m} = \mathbf{497\ \text{nm}}$

Proposed correction or disposition: 497 nm follows the displayed 4.14e-15 eV s constant. It is not a standalone arithmetic error. Match the constants and rounding to lesson16: HSC h=6.626e-34, e=1.602e-19 gives 496.330 nm, whereas the displayed 6.63 and 1.60 values there give 497.25 nm. Do not mix these into a falsely exact shared result.

### 191.26: Module7 lesson11, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson11.sa.html`, SHA256 `0e9d0b68b7c4e4e4ca8a1e73b7be111821dda444d25d8474e39c59a101021e54`. Context: phase-review, main.

Current paragraph: The historical anchor: in 1887, Albert Michelson and Edward Morley at Case Western Reserve University, Cleveland, used an 11 m optical path interferometer and expected aether-drift fringe shifts of 0.4. They measured less than 0.01, a profound null result. In June 1905, Albert Einstein at the Swiss Patent Office, Bern, published "On the Electrodynamics of Moving Bodies," using this null result to argue that the speed of light is constant for all inertial observers. Einstein's two postulates, the principle of relativity and the constancy of $c$, are the foundation of everything in L12–L15.

Proposed correction or disposition: June 30 is receipt/submission, not the September publication. The original paper does not name Michelson-Morley. Say the postulates are consistent with the null result instead of asserting this single documented motivation.

### 191.27: Module7 lesson11, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson11.sa.html`, SHA256 `0e9d0b68b7c4e4e4ca8a1e73b7be111821dda444d25d8474e39c59a101021e54`. Context: main.

Current paragraph: Today's hook: In 1887, Albert Michelson and Edward Morley at Case Western Reserve University, Cleveland, used an 11 m optical path interferometer and expected to detect Earth's motion through the aether as fringe shifts of 0.4. They measured less than 0.01. In June 1905 Albert Einstein at the Swiss Patent Office Bern used this null result to argue that $c$ must be the same for all observers, so if you shine a flashlight from a train moving at 100 km/h, the platform observer still measures the light at exactly $c$. How can that be?

Proposed correction or disposition: Case School of Applied Science and Western Reserve University were separate in 1887. Use Cleveland, Ohio, or name the two institutions separately.

### 191.28: Module7 lesson11, question condition

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson11.sa.html`, SHA256 `0e9d0b68b7c4e4e4ca8a1e73b7be111821dda444d25d8474e39c59a101021e54`. Context: phase-learn, main.

Current paragraph: Classify each as inertial or non-inertial, with a reason: (a) ISS in circular orbit, (b) a car at constant speed on a curved road, (c) a spacecraft drifting at 0.5$c$ with engines off.

Proposed correction or disposition: Specify the Newtonian inertial-frame classification: an orbiting ISS has centripetal acceleration. A local free-fall frame in general relativity is a different context. A braking-car replacement would remove this ambiguity.

### 191.29: Module7 lesson12, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson12.sa.html`, SHA256 `776eb40440bbcf4e0a09d181ea093ac6f7c0d05609b11c04b9e996baef16f593`. Context: phase-learn, main.

Current paragraph: Hafele-Keating experiment (1972): Atomic clocks were flown on commercial aircraft around the world. When compared to Earth-based reference clocks, the flying clocks showed time differences consistent with special and general relativistic predictions. The moving clocks lost time due to speed (special relativity) but gained time from being higher in Earth's gravitational field (general relativity).

Proposed correction or disposition: Flights took place October1971; results appeared1972. Use 1971 (published1972) consistently rather than labelling the flight itself1972.

### 191.30: Module7 lesson12, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson12.sa.html`, SHA256 `776eb40440bbcf4e0a09d181ea093ac6f7c0d05609b11c04b9e996baef16f593`. Context: phase-learn, main.

Current paragraph: The situations are not symmetric . The astronaut must accelerate to turn around at the star, changing inertial frames. The Earth twin remains in a single inertial frame throughout. Special relativity applies in inertial frames only; general relativity handles the acceleration. The asymmetry, the travelling twin experiences acceleration, the Earth twin does not, means both observers agree: the travelling twin ages less.

Proposed correction or disposition: Special relativity can calculate an accelerated traveller path in an inertial frame. General relativity is not required just because the traveller accelerates. Keep the change-of-inertial-frame explanation.

### 191.31: Module7 lesson12, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson12.sa.html`, SHA256 `776eb40440bbcf4e0a09d181ea093ac6f7c0d05609b11c04b9e996baef16f593`. Context: phase-review, main.

Current paragraph: Did you predict that at $0.995c$ ($\gamma \approx 10$), the 8.6 ly round trip takes 8.65 years Earth time but only 0.87 years ship time? The astronaut ages less than 1 year while Earth ages nearly 9.

Proposed correction or disposition: 8.6/0.995=8.64322 Earth years, divided by gamma10.01252 gives0.86324 ship years. At three/two significant figures respectively:8.64 and0.86, rather than8.65 and0.87.

### 191.32: Module7 lesson13, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson13.sa.html`, SHA256 `5430c9475f8f773e9ed668c6ea0533c38cfc689e14ff3f979a28b27c9a323937`. Context: main.

Current paragraph: In 1940, Bruno Rossi and colleagues measured cosmic-ray muons at mountain altitude and sea level. Classical physics predicts muons travelling at $v = 0.998c$ with a lifetime of $\tau_0 = 2.2\,\mu$s should travel only 659 m before decaying, far short of the 10 km from their creation point. Yet they arrive at sea level. In the muon's rest frame the reason is length contraction: the atmosphere is only $10\,000/\gamma \approx 625$ m thick, well within their classical range.

Proposed correction or disposition: At0.998c, gamma15.8193 contracts10km to632.14m. This is about0.96 mean lifetimes, with survival about38%, not a guarantee that every muon travels its mean range. Use about one mean range, not well within.

### 191.33: Module7 lesson13, historical date precision

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson13.sa.html`, SHA256 `5430c9475f8f773e9ed668c6ea0533c38cfc689e14ff3f979a28b27c9a323937`. Context: main.

Current paragraph: In 1940, Bruno Rossi and colleagues measured cosmic-ray muons at mountain altitude and sea level. Classical physics predicts muons travelling at $v = 0.998c$ with a lifetime of $\tau_0 = 2.2\,\mu$s should travel only 659 m before decaying, far short of the 10 km from their creation point. Yet they arrive at sea level. In the muon's rest frame the reason is length contraction: the atmosphere is only $10\,000/\gamma \approx 625$ m thick, well within their classical range.

Proposed correction or disposition: The original Rossi-Hall article was received13December1940 and published1February1941. Distinguish measurement/submission year from paper year; do not assert that no experiment occurred in1940.

### 191.34: Module7 lesson13, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson13.sa.html`, SHA256 `5430c9475f8f773e9ed668c6ea0533c38cfc689e14ff3f979a28b27c9a323937`. Context: phase-learn, main.

Current paragraph: The key is the relativity of simultaneity . In the barn frame, the events "front of ladder reaches back door" and "back of ladder reaches front door" are simultaneous : both doors close at the same instant. In the ladder frame, these events are not simultaneous . The front door closes first (when the front reaches it), then the back door closes later. The ladder is never fully enclosed at any single instant in its own frame. Both frames are correct; they simply disagree about simultaneity. There is no physical contradiction because "fitting inside" depends on which events you call simultaneous.

Proposed correction or disposition: Use far/exit door for the event reached by the ladder front and near/entrance door for the rear. The present front/back door names conflict with the preceding event description.

### 191.35: Module7 lesson14, checked acceptable sufficient condition

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson14.sa.html`, SHA256 `0b60787d7bcc23e752898aff5f024528e7864bb362c9d36183ff3f402652ef80`. Context: phase-learn, main.

Current paragraph: Misconception 2: Classical $E_k = \frac{1}{2}mv^2$ is a good approximation at any speed. Wrong. When $\gamma > 1.1$ (roughly $v > 0.4c$), the classical formula is already off by more than 5%. At $v = 0.758c$ (the worked example), classical underestimates by 46%. Always check whether the problem is relativistic before applying classical formulas.

Proposed correction or disposition: The statement when gamma>1.1 the classical value is more than5% low is true as a sufficient condition, although conservative. It does not assert the exact5% boundary. Optional: give a calculated threshold if teaching that boundary; do not log a false numerical contradiction.

### 191.36: Module7 lesson14, terminology precision

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson14.sa.html`, SHA256 `0b60787d7bcc23e752898aff5f024528e7864bb362c9d36183ff3f402652ef80`. Context: phase-learn, main.

Current paragraph: Three traps: (1) $E = mc^2$ is rest energy, NOT kinetic, kinetic energy is $E_k = (\gamma-1)mc^2 = E_{total} - mc^2$. (2) Classical $\frac{1}{2}mv^2$ fails when $\gamma > 1.1$ ($v > 0.4c$). (3) "Relativistic mass" is deprecated, rest mass $m_0$ is constant; it is inertia and energy that increase. HSC strategy: total energy check: $E_{total} = E_k + mc^2$.

Proposed correction or disposition: Prefer momentum and energy grow with speed while rest mass is invariant. Relativistic inertia can have different definitions; avoid presenting one growing scalar inertia as the replacement for relativistic mass.

### 191.37: Module7 lesson14, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson14.sa.html`, SHA256 `0b60787d7bcc23e752898aff5f024528e7864bb362c9d36183ff3f402652ef80`. Context: phase-learn, main.

Current paragraph: $mc^2 = (1.67\times10^{-27})(3.00\times10^8)^2 = 1.50\times10^{-10}$ J = 938 MeV

Proposed correction or disposition: The shown rounded mass1.67e-27, c3.00e8 and e1.60e-19 produce939.375MeV. Label938MeV as the accepted rest energy, or consistently calculate from the chosen constants. 938MeV itself is valid.

### 191.38: Module7 lesson14, system comparison clarification

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson14.sa.html`, SHA256 `0b60787d7bcc23e752898aff5f024528e7864bb362c9d36183ff3f402652ef80`. Context: phase-learn, main.

Current paragraph: For solar fusion, about 0.7% ($7\times10^{-3}$) of the fusing hydrogen's mass converts to energy. The ratio is $\dfrac{7\times10^{-3}}{4.9\times10^{-10}} \approx 1.4\times10^7$, nuclear fusion converts roughly 14 million times the fraction of mass to energy that chemical combustion does, for the same starting mass of fuel.

Proposed correction or disposition: The paragraph explicitly compares equal starting mass of fuel, so its14million ratio is correct on that basis. If comparing total reacting mass instead, include approximately3.5kg oxygen perkg octane and use roughly6.4e7. State the chosen system; do not call the existing fuel-normalised ratio arithmetically wrong.

### 191.39: Module7 lesson14, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson14.sa.html`, SHA256 `0b60787d7bcc23e752898aff5f024528e7864bb362c9d36183ff3f402652ef80`. Context: dx-y12-phys-m7-l14-applications-d, dx-y12-phys-m7-l14-applications, phase-learn, main.

Current paragraph: Annihilation: an electron and a positron annihilate into two gamma-ray photons, each carrying 511 keV, E = mₑc².

Proposed correction or disposition: Specify near-rest electron-positron annihilation for two equal511keV photons. A moving pair can give different lab photon energies.

### 191.40: Module7 lesson14, source/date request

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson14.sa.html`, SHA256 `0b60787d7bcc23e752898aff5f024528e7864bb362c9d36183ff3f402652ef80`. Context: phase-learn, main.

Current paragraph: Calculate the energy released when 1.0 kg of matter is completely converted to energy. Express in joules and compare to the annual electricity output of Australia (~200 TWh).

Proposed correction or disposition: The comparison is approximate and undated. Add the source year and whether generation or consumption is intended before substituting a modern annual number. Do not silently replace it with an unverified current figure.

### 191.41: Module7 lesson16, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson16.sa.html`, SHA256 `ee650dbe40253bac16a45b31df6585aa1a0a361df1ea623162ea33ec6b660806`. Context: main.

Current paragraph: On 17 March 1905, Albert Einstein, a patent examiner at the Swiss Patent Office, Bern, published "On a Heuristic Point of View Concerning the Production and Transformation of Light." He proposed that light arrives in discrete quanta, each carrying energy $E = hf$. His equation $E_{k,\text{max}} = hf - \phi$ precisely predicted the linear relationship between photon frequency and maximum electron kinetic energy, confirmed quantitatively by Millikan in 1916. For this paper, not for relativity, Einstein received the Nobel Prize in 1921.

Proposed correction or disposition: The original paper is dated17March1905; that is not its June publication date. Use completed in March1905, publishedJune1905.

### 191.42: Module7 lesson16, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson16.sa.html`, SHA256 `ee650dbe40253bac16a45b31df6585aa1a0a361df1ea623162ea33ec6b660806`. Context: phase-practice, main.

Current paragraph: Q1 (c): $f_0 = \phi/h = (2.5\times1.60\times10^{-19})/(6.63\times10^{-34}) = 6.03\times10^{14}$ Hz. $\lambda_0 = c/f_0 = 3.0\times10^8/6.03\times10^{14} = 498$ nm. (1 mark)

Proposed correction or disposition: Using its displayed6.63e-34 and1.60e-19 constants gives lambda497.25nm before rounding the frequency, so498nm comes from early rounding. Carry f0 unrounded. HSC constants give496.33nm. State and use one constant set consistently.

### 191.43: Module7 lesson16, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson16.sa.html`, SHA256 `ee650dbe40253bac16a45b31df6585aa1a0a361df1ea623162ea33ec6b660806`. Context: dx-y12-phys-m7-l16-millikan-d, dx-y12-phys-m7-l16-millikan, phase-learn, main.

Current paragraph: The best-fit line meets the frequency axis at the threshold f₀ ≈ 5.5 × 10¹⁴ Hz and rises to about 1.86 V at 10 × 10¹⁴ Hz.

Proposed correction or disposition: The figure description should match its table endpoint1.85V, not1.86V.

### 191.44: Module7 lesson16, confirmed correction

Source: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson16.sa.html`, SHA256 `ee650dbe40253bac16a45b31df6585aa1a0a361df1ea623162ea33ec6b660806`. Context: phase-learn, main.

Current paragraph: Millikan's method: $V_s = (h/e)f - \phi/e$, linear graph. Gradient $= h/e = 4.13\times10^{-15}$ V·s $\Rightarrow h = 6.6\times10^{-34}$ J·s. x-intercept gives $f_0 \approx 5.5\times10^{14}$ Hz. Millikan intended to disprove Einstein but instead confirmed him perfectly. Graph features: slope $= h/e$; x-int $= f_0$; y-int $= -\phi/e$.

Proposed correction or disposition: Use quantitative agreement to about1%, as the original1916 results and page longer answer describe. Perfectly is not a measurement result.

Sources checked: [Land original patent](https://patents.google.com/patent/US1918848), [Payne thesis archive](https://library.cfa.harvard.edu/cecilia-payne-gaposchkin/education-and-doctoral-thesis), [Rossi-Hall original paper](https://supernovae.in2p3.fr/~llg/Enseignements/Agregation/Relativite/biblio/Rossi-et-Hall--1941.pdf), [Einstein original relativity paper](https://courses.physics.illinois.edu/phys225/sp2026/Einstein1905.pdf), [Hafele-Keating observed results](https://pubmed.ncbi.nlm.nih.gov/17779918/), [Millikan1916](https://web.mit.edu/8.13/8.13c/references-fall/photoelectric/millikan-1916.pdf). The exact calendar publication date of the light-quantum paper is not needed for the correction: March manuscript dating is distinguished from publication.

## Brief 192: Module 8 lessons 1 to 12, current published-page checks (6 November 2026)

The local site checkout is absent. These entries use saved current published HTML under `work/brief192/live-site/`, with URLs and SHA256 hashes. They are correction notes only; no site files were changed. Primary calculations and historical sources are retained in `work/brief192/` and the independent science reports.

### 192.01: Module 8 lesson 2, clarification

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson02.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson02.sa); saved `work/brief192/live-site/lesson02.sa.html`, SHA256 `2a57bb9bf6186901d7ce083a39a86e848ab232427243a94b2070905940634cf8`.

Current paragraph: Black-body spectrum: The CMB peaks at ~160 GHz (~1.9 mm wavelength), corresponding to $T = 2.725$ K. This is precisely what the Big Bang model predicts for cooled relic radiation.

Finding: The 160 GHz peak is correct for spectral density per unit frequency. Its corresponding wavelength is 1.9 mm. State that convention, and distinguish the wavelength-density peak from Wien's law: 2.898e-3/2.725 = 1.063 mm. Do not call the current frequency peak incorrect.

### 192.02: Module 8 lesson 7, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson07.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson07.sa); saved `work/brief192/live-site/lesson07.sa.html`, SHA256 `700c77d7218b079775be46d4e47a54086efdf2cdc1f00d54e06867de41442dd0`.

Current paragraph: By the time the universe cooled to ~$10^9$ K (about 3 minutes), the density had dropped too low for further fusion. No elements heavier than lithium-7 were produced. The observed primordial helium abundance (~24–25%) and deuterium abundance are powerful confirmations of the Big Bang model, no alternative theory predicts these exact values.

Finding: About three minutes and 10^9 K describe the beginning of efficient light-element formation after deuterium survives, not its end. Match lesson 2's approximate three to twenty minute interval.

### 192.03: Module 8 lesson 2, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson02.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson02.sa); saved `work/brief192/live-site/lesson02.sa.html`, SHA256 `2a57bb9bf6186901d7ce083a39a86e848ab232427243a94b2070905940634cf8`.

Current paragraph: Redshift of galaxies: space is expanding, trace back and the universe was once a single hot, dense point.

Finding: Describe a hot, dense early state everywhere. A single point in space gives students an incorrect expansion picture.

### 192.04: Module 8 lesson 3, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson03.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson03.sa); saved `work/brief192/live-site/lesson03.sa.html`, SHA256 `5d56cdd2d5bd7eed61ea605fe7287bad80a309863c0ce8ff3ab79523426eab7f`.

Current paragraph: Did you predict $d = v/H_0 = 91.5/70 \approx 1.31$ Mpc using Hubble's law? Correct, this is roughly the distance to nearby galaxies like M81.

Finding: 91.5/70 = 1.31 Mpc is correct arithmetic, but M81 is about 3.6 Mpc away and local galaxy motion defeats this nearby Hubble-law distance estimate. Use an appropriate distant example or make the failed local estimate the question.

### 192.05: Module 8 lesson 3, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson03.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson03.sa); saved `work/brief192/live-site/lesson03.sa.html`, SHA256 `5d56cdd2d5bd7eed61ea605fe7287bad80a309863c0ce8ff3ab79523426eab7f`.

Current paragraph: In 1929, Edwin Hubble at Mount Wilson Observatory published redshift and distance measurements for 46 galaxies, finding that recession velocity and distance are proportional. His original Hubble constant was H₀ ≈ 500 km/s/Mpc, far larger than the modern value of 67.4 km/s/Mpc (Planck 2018), but the linear relationship was correct. At the Hubble radius d = c/H₀ ≈ 4,400 Mpc, recession speed equals the speed of light. Hubble's 1929 velocity-distance graph is one of the most reproduced plots in the history of physics.

Finding: Distinguish the 46 available radial velocities from the 24 galaxies with individual distance estimates used in Hubble's 1929 distance-velocity analysis.

### 192.06: Module 8 lesson 3, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson03.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson03.sa); saved `work/brief192/live-site/lesson03.sa.html`, SHA256 `5d56cdd2d5bd7eed61ea605fe7287bad80a309863c0ce8ff3ab79523426eab7f`.

Current paragraph: The scale factor $a = 1/(1+z)$ gives the universe's size relative to today when observed light was emitted: at $z = 1$, the universe was half its present size; at $z = 9$, one-tenth. The Hubble time $t_H = 1/H_0 \approx 14$ Gyr is a rough upper estimate of the universe's age (actual age ~13.8 Gyr, slightly less because gravity slowed early expansion).

Finding: The Hubble time is a present expansion timescale, not a universal upper bound on age. Explain that expansion changed, including early deceleration and later acceleration.

### 192.07: Module 8 lesson 6, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson06.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson06.sa); saved `work/brief192/live-site/lesson06.sa.html`, SHA256 `4ea3da3c9ed807be65b766e1bca10c044a1b4f98958f75af0e8864cfb40273ab`.

Current paragraph: Carbon may fuse to oxygen, but low-mass cores never reach carbon ignition temperatures.

Finding: Carbon forms oxygen by capturing helium nuclei in this stage. Carbon-carbon fusion is a different later reaction.

### 192.08: Module 8 lesson 6, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson06.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson06.sa); saved `work/brief192/live-site/lesson06.sa.html`, SHA256 `4ea3da3c9ed807be65b766e1bca10c044a1b4f98958f75af0e8864cfb40273ab`.

Current paragraph: Carbon, oxygen, nitrogen: Helium and carbon burning in low- and intermediate-mass stars; also the CNO cycle in massive stars.

Finding: Do not assign oxygen production generally to low and intermediate mass stars or to the catalytic CNO cycle. Separate newly made nuclei from nuclei used as fusion catalysts, and identify massive stars as the main oxygen source.

### 192.09: Module 8 lesson 6, learning clarification

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson06.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson06.sa); saved `work/brief192/live-site/lesson06.sa.html`, SHA256 `4ea3da3c9ed807be65b766e1bca10c044a1b4f98958f75af0e8864cfb40273ab`.

Current paragraph: The mass of a star is the single most important factor determining its evolution. Memorise the mass thresholds: $< 0.5\,M_{\odot}$ → red dwarf (never becomes giant); $0.5 - 8\,M_{\odot}$ → red giant → planetary nebula → white dwarf; $> 8\,M_{\odot}$ → supergiant → supernova → neutron star or black hole. The Chandrasekhar limit ($1.4\,M_{\odot}$) is the maximum mass for a white dwarf. A common exam trap: confusing the Chandrasekhar limit with the Tolman-Oppenheimer-Volkoff limit (~$3\,M_{\odot}$ for neutron stars). Also remember: iron has the highest binding energy per nucleon, so fusion beyond iron is endothermic, it absorbs rather than releases energy.

Finding: The instruction to memorise sharp mass thresholds conflicts with this page's core-task guidance. Treat remnant thresholds as approximate and dependent on the final core, without substituting an unsupported universal neutron-star maximum.

### 192.10: Module 8 lesson 7, model unspecified

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson07.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson07.sa); saved `work/brief192/live-site/lesson07.sa.html`, SHA256 `700c77d7218b079775be46d4e47a54086efdf2cdc1f00d54e06867de41442dd0`.

Current paragraph: Extend: The mass of the Sun is $2.0 \times 10^{30}$ kg, and in 5 billion years the Sun will have converted roughly 0.07% of its total mass into energy through hydrogen fusion. (a) Calculate the total energy released over this time. (b) If each completed proton-proton chain reaction releases a gross 26.73 MeV (including annihilation of both positrons with ambient electrons, before neutrino losses), calculate the number of fusion reactions that have occurred. (c) Explain why only elements up to carbon and oxygen will be produced in the Sun's core.

Finding: The stated 0.07% is not an arithmetic error on its own: the task gives no luminosity history. At constant current luminosity for five billion years the fraction is about 0.034%. Specify the assumed model or justify the integrated future value before changing the number.

### 192.11: Module 8 lesson 7, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson07.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson07.sa); saved `work/brief192/live-site/lesson07.sa.html`, SHA256 `700c77d7218b079775be46d4e47a54086efdf2cdc1f00d54e06867de41442dd0`.

Current paragraph: Forming heavier nuclei therefore requires an external supply of energy and an environment rich in free neutrons, since adding a neutron avoids the Coulomb repulsion that makes charged-nucleus fusion so difficult.

Finding: Heavier-element formation does not mean every neutron capture needs an external energy input. Many captures release energy. Distinguish the environment and neutron supply from the energy balance of an individual capture; do not replace this with a claim that captures release no energy.

### 192.12: Module 8 lesson 7, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson07.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson07.sa); saved `work/brief192/live-site/lesson07.sa.html`, SHA256 `700c77d7218b079775be46d4e47a54086efdf2cdc1f00d54e06867de41442dd0`.

Current paragraph: Exam questions often ask you to identify where specific elements were produced. Remember: H and He from the Big Bang; C, O from low-mass stellar cores (triple-alpha); elements up to Fe from massive star cores; elements beyond Fe from supernovae (r-process) and neutron star mergers. The binding energy per nucleon curve is central, and the curve has a broad maximum in the iron-nickel region; iron-56 is near this maximum and often represents the iron group in HSC explanations. Strictly, nickel-62 has the highest binding energy per nucleon, with iron-58 and iron-56 close behind. Iron-56 has the lowest mass per nucleon of any nuclide and is where fusion in massive stars stops. A common trap: saying fusion produces elements heavier than iron. It does not, fusion beyond iron is endothermic. Heavy elements require neutron capture (r-process or s-process). When calculating mass defect, use atomic mass units and convert with 1 u = 931.5 MeV/$c^2$.

Finding: The short carbon/oxygen origin summary needs the same oxygen-source correction as lesson 6.

### 192.13: Module 8 lesson 8, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson08.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson08.sa); saved `work/brief192/live-site/lesson08.sa.html`, SHA256 `523fc134986e0ec3f24eecbfb442150055524163fc719e65e182d068de3b5880`.

Current paragraph: Extend: A star has spectral type M and luminosity $L = 50\,L_\odot$. (a) Estimate its surface temperature (M-type: $\sim$3 500 K). (b) Calculate its radius in solar radii. (c) Classify it (main sequence, red giant, or supergiant). (d) How does its main-sequence lifetime compare to the Sun's if its mass is $0.4\,M_\odot$?

Finding: Do not use an M giant's current 50-solar luminosity with a 0.4-solar dwarf mass to estimate its main-sequence lifetime. Keep the current giant classification and its earlier main-sequence conditions separate.

### 192.14: Module 8 lesson 9, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson09.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson09.sa); saved `work/brief192/live-site/lesson09.sa.html`, SHA256 `382c6f62de01cfe3ae3f1d980453ddefc95384faf310aa7acaf04e9f4895ed66`.

Current paragraph: A star shows no hydrogen lines, but strong ionised helium (He II) lines. State its spectral type and give an example star.

Finding: Use weak hydrogen lines, rather than no hydrogen lines, in the O-star classification activity.

### 192.15: Module 8 lesson 9, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson09.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson09.sa); saved `work/brief192/live-site/lesson09.sa.html`, SHA256 `382c6f62de01cfe3ae3f1d980453ddefc95384faf310aa7acaf04e9f4895ed66`.

Current paragraph: Right: Spectral type depends primarily on surface temperature , not composition. Two stars with identical compositions but different temperatures will show completely different dominant absorption features. The same element can appear as neutral atoms, ions, or be absent from the spectrum depending on temperature.

Finding: An O-star atmosphere does not remove every Balmer line through complete hydrogen ionisation. Match the page's own correct weak-hydrogen description.

### 192.16: Module 8 lesson 9, historical precision

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson09.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson09.sa); saved `work/brief192/live-site/lesson09.sa.html`, SHA256 `382c6f62de01cfe3ae3f1d980453ddefc95384faf310aa7acaf04e9f4895ed66`.

Current paragraph: In 1925, Cecilia Payne at Harvard analysed absorption spectra from over 300 stars using the Harvard photographic plate collection. Applying Meghnad Saha's 1920 ionisation equation, she concluded that stars are 73% hydrogen and 25% helium by mass, contradicting the accepted view that stellar compositions matched Earth's. Her supervisor Henry Russell initially dismissed the conclusion as "almost certainly wrong." Four years later, Russell independently reached the same finding and published first. Payne-Gaposchkin is now recognised as the founder of stellar astrophysics.

Finding: Payne established hydrogen and helium dominance. Distinguish that achievement from attributing the precise modern 73/25 solar mass fractions to her 1925 thesis.

### 192.17: Module 8 lesson 11, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa); saved `work/brief192/live-site/lesson11.sa.html`, SHA256 `c448b07d57dc7dd7df69b87dd7c500d5d6bfe2bd5d49fa4657b6ecdfa7b2faea`.

Current paragraph: These observations settled a long-running wave-versus-particle debate . Some physicists argued cathode rays were a form of wave in the ether; others argued they were charged particles. The deflection by electric and magnetic fields, together with the paddle-wheel momentum transfer, decided the matter in favour of particles .

Finding: The paddle wheel is not decisive evidence that cathode rays carry mechanical momentum: heating effects complicate its motion. Match the page's earlier qualification.

### 192.18: Module 8 lesson 11, historical precision

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa); saved `work/brief192/live-site/lesson11.sa.html`, SHA256 `c448b07d57dc7dd7df69b87dd7c500d5d6bfe2bd5d49fa4657b6ecdfa7b2faea`.

Current paragraph: Charge-to-mass ratio ($e/m$) Ratio of an electron's charge to its mass, $\approx 1.76 \times 10^{11}$ C/kg, measured by Thomson using balanced electric and magnetic fields.

Finding: The quoted 1.76e11 C/kg is the accepted approximate electron charge-to-mass ratio. Label it as the modern value used in the exercise, rather than Thomson's exact original measured result.

### 192.19: Module 8 lesson 11, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa); saved `work/brief192/live-site/lesson11.sa.html`, SHA256 `c448b07d57dc7dd7df69b87dd7c500d5d6bfe2bd5d49fa4657b6ecdfa7b2faea`.

Current paragraph: Thomson's experiment gives the ratio $e/m$, but not $e$ and $m$ separately. The missing piece came from Robert Millikan's oil-drop experiment (1909-1913). Millikan sprayed tiny charged oil droplets between two horizontal plates and adjusted the voltage until the upward electric force balanced gravity, holding a droplet stationary. By repeating this for thousands of droplets, he found that the charge on a droplet was always a whole-number multiple of a single smallest value:

Finding: Millikan's 1913 paper reports a complete set of 58 drops. Do not describe thousands of reported drops. This does not establish how many drops he ever observed in all his work.

### 192.20: Module 8 lesson 11, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa); saved `work/brief192/live-site/lesson11.sa.html`, SHA256 `c448b07d57dc7dd7df69b87dd7c500d5d6bfe2bd5d49fa4657b6ecdfa7b2faea`.

Current paragraph: Some alpha particles were deflected through small angles ($< 10°$). This suggested the positive charge was concentrated, not spread evenly.

Finding: Small-angle scattering alone does not establish a concentrated positive nucleus. The rare large-angle returns distinguish the concentrated-charge model from diffuse positive charge.

### 192.21: Module 8 lesson 11, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa); saved `work/brief192/live-site/lesson11.sa.html`, SHA256 `c448b07d57dc7dd7df69b87dd7c500d5d6bfe2bd5d49fa4657b6ecdfa7b2faea`.

Current paragraph: A few come almost head-on at a nucleus and are scattered through large angles, some nearly straight back: about 1 in 8000 was deflected by more than 90°.

Finding: Rutherford's 1911 paper assigns one in 8000 beyond 90 degrees to thick platinum, not thin gold foil. Keep the iconic gold apparatus and this measured platinum statistic distinct.

### 192.22: Module 8 lesson 11, historical precision

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa); saved `work/brief192/live-site/lesson11.sa.html`, SHA256 `c448b07d57dc7dd7df69b87dd7c500d5d6bfe2bd5d49fa4657b6ecdfa7b2faea`.

Current paragraph: Cross-lesson links: L10 showed supernovae create the heaviest elements. L11 begins examining atomic structure, the same nucleus that fusion builds in stars and that supernovae scatter across space. Rutherford's 1909 gold foil experiment is the most important physics experiment for this section of HSC; the quantitative result (1 in 8,000 backscattered) is regularly set as a calculation.

Finding: Credit Geiger and Marsden's 1909 scattering work under Rutherford, and Rutherford's 1911 nuclear interpretation.

### 192.23: Module 8 lesson 11, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa); saved `work/brief192/live-site/lesson11.sa.html`, SHA256 `c448b07d57dc7dd7df69b87dd7c500d5d6bfe2bd5d49fa4657b6ecdfa7b2faea`.

Current paragraph: This gives an upper limit on the nuclear radius, the actual nucleus must be smaller than $r_{min}$ because the alpha particle turns around before reaching the nuclear surface. Rutherford's calculations gave nuclear radii on the order of $10^{-15}$ m (femtometres), about 100,000 times smaller than the atomic radius (~$10^{-10}$ m).

Finding: Closest approach supplies an upper bound, not a measured hard nuclear diameter of 1 fm. For a gold example, distinguish modern nuclear size from the scattering bound and compare radius with radius or diameter with diameter.

### 192.24: Module 8 lesson 11, clarification

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa); saved `work/brief192/live-site/lesson11.sa.html`, SHA256 `c448b07d57dc7dd7df69b87dd7c500d5d6bfe2bd5d49fa4657b6ecdfa7b2faea`.

Current paragraph: Bothe and Becker (1930) found beryllium bombarded with alpha particles gives a highly penetrating, uncharged radiation, initially assumed to be gamma rays. Curie and Joliot (1932) showed it ejects protons from paraffin at energies too high for photons to explain. Chadwick reinterpreted the radiation as neutral, proton-mass particles (neutrons) from He + Be → C + n. Using elastic-collision recoil speeds from paraffin (protons) and nitrogen gas, m_n = (v_N m_N − v_p m_p)/(v_p − v_N) ≈ 1.16 m_p, confirming a neutral particle close to the proton's mass.

Finding: The displayed recoil calculation is a rough estimate, not a precise neutron mass measurement. Its 1.16 is three significant figures, not two. Chadwick's stated ten percent uncertainty concerns nitrogen recoil velocity; do not relabel it a ten percent mass uncertainty.

### 192.25: Module 8 lesson 12, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson12.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson12.sa); saved `work/brief192/live-site/lesson12.sa.html`, SHA256 `09bc205c157457f2f1ba831d95f517054ce9cb5bc8f98fe1b088c2d3976f2f95`.

Current paragraph: In 1913, Niels Bohr at Copenhagen applied Planck's quantum hypothesis to Rutherford's nuclear atom, proposing that electrons orbit only in states with angular momentum L = nh/2π. He calculated hydrogen energy levels as Eₙ = −13.6/n² eV and predicted Balmer series wavelengths to within 0.02% of measured values. The Nobel Prize was awarded to Bohr in 1922. His model also successfully predicted the Lyman series (UV) and Paschen series (IR), spectral series that had been measured before any theoretical explanation existed.

Finding: Bohr's 1913 numerical comparison gives approximately 3.1 versus 3.290 in the same frequency units, about 5.8% apart. The 0.02% historical claim is unsupported. Separate the reproduced line pattern from precision of constants available in 1913.

### 192.26: Module 8 lesson 12, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson12.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson12.sa); saved `work/brief192/live-site/lesson12.sa.html`, SHA256 `09bc205c157457f2f1ba831d95f517054ce9cb5bc8f98fe1b088c2d3976f2f95`.

Current paragraph: Lyman, n_f = 1: ultraviolet. Balmer, n_f = 2: visible. Paschen, n_f = 3: near infrared. Brackett and beyond, n_f ≥ 4: far infrared.

Finding: Use infrared for Brackett and later series. Brackett wavelengths run roughly 1.46 to 4.05 micrometres, so far infrared is the wrong classification.

### 192.27: Module 8 lesson 12, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson12.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson12.sa); saved `work/brief192/live-site/lesson12.sa.html`, SHA256 `09bc205c157457f2f1ba831d95f517054ce9cb5bc8f98fe1b088c2d3976f2f95`.

Current paragraph: In 1913, Niels Bohr at Copenhagen applied Planck's quantum hypothesis to Rutherford's nuclear atom, proposing that electrons orbit only in states with angular momentum L = nh/2π. He calculated hydrogen energy levels as Eₙ = −13.6/n² eV and predicted Balmer series wavelengths to within 0.02% of measured values. The Nobel Prize was awarded to Bohr in 1922. His model also successfully predicted the Lyman series (UV) and Paschen series (IR), spectral series that had been measured before any theoretical explanation existed.

Finding: The whole Balmer series is not visible. Its prominent visible lines lead to a near-ultraviolet limit around 365 nm. Do not replace this with exactly four visible lines while defining visibility as 380 to 750 nm: 397, 389 and 384 nm then also lie inside that interval.

### 192.28: Module 8 lesson 12, clarification

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson12.sa](https://hscscience.com.au/subjects/physics/year12/module8/lesson12.sa); saved `work/brief192/live-site/lesson12.sa.html`, SHA256 `09bc205c157457f2f1ba831d95f517054ce9cb5bc8f98fe1b088c2d3976f2f95`.

Current paragraph: $E_\text{ionisation} = 13.6$ eV; $R_H = 1.097\times10^7$ m⁻¹; $h = 6.626\times10^{-34}$ J·s; 1 eV $= 1.6\times10^{-19}$ J

Finding: 1 eV = 1.6e-19 J is a legitimate rounded value, not a science error. Use the data-sheet 1.602e-19 J where consistent precision is wanted. The signed emission Rydberg expression must be reversed or expressed as a positive energy gap for absorption.

Checked dispositions: the old 25.7 MeV/omitted-positron finding is already repaired on the live lesson 7 page (24.69 MeV direct plus 2.044 MeV annihilation gives 26.73 MeV before neutrino losses). Do not reopen it. The lesson 8 stop check explicitly supplies the Stefan-Boltzmann relation and satisfies its stated exception. Mintaka's late-O label needs a boundary clarification rather than an automatic star replacement. The Bethe historical attribution and exact remaining prose occurrences need further source checking before any site edit.

A current source note is not a report that the site was repaired. Practical recall in the videos does not establish that students performed the syllabus investigations.


## Brief193: current Module8 site checks,7 November2026

Seven live HTML pages were fetched and retained. These are proposed corrections, not site edits. Source hashes and all matching paragraphs are retained in `work/brief193/site-log-193.json`.

### 193.01: Module8 lesson13, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson13.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson13.sa.html); saved `work/brief193/live-site/lesson13.sa.html`, SHA256 `0a023a2a602f9e3e1a22a1303b3e6e6da44c431a8fefd0de4467e73af7dc2471`.

Current paragraph(s):

In 1927, Clinton Davisson and Lester Germer at Bell Telephone Laboratories in New Jersey accidentally produced electron diffraction when a vacuum accident allowed their nickel target to form large crystals. Scattering 54 eV electrons off the crystal surface, they observed a peak at 50° whose angle matched the de Broglie wavelength λ = h/p = 167 pm with the nickel lattice spacing of 215 pm via the Bragg condition. Clinton Davisson was awarded the Nobel Prize in Physics in 1937. The experiment confirmed de Broglie's 1924 hypothesis that matter has wave-like properties.

Today's hook: In 1927, Clinton Davisson and Lester Germer at Bell Telephone Laboratories in New Jersey aimed 54 eV electrons at a nickel crystal surface and found them scattering at angles predicted by the Bragg equation, as if the electrons were X-ray waves with wavelength 167 pm diffracting from the 215 pm crystal lattice. A particle had produced a wave diffraction pattern. How does this result prove that electrons, particles with mass and electric charge, also behave as waves?

In 1927, Clinton Davisson and Lester Germer at Bell Telephone Laboratories aimed 54 eV electrons at a nickel crystal surface and observed a diffraction peak at 50°, the same angle predicted if the electrons had wavelength λ = 167 pm, matching the nickel crystal spacing of 215 pm via the Bragg condition. This was direct experimental proof of what Louis de Broglie had proposed in 1924: that particles have wave-like properties with de Broglie wavelength :

Finding: The 215 pm surface-row spacing with the 50 degree scattering angle uses the surface-grating condition, giving 215 sin(50 degrees) = 164.7 pm. A Bragg construction instead uses about 91 pm between planes and a 65 degree Bragg angle. Repair the geometry label in all three repeated accounts, without changing the stated surface-row spacing. The theoretical de Broglie value is about 167 pm. Primary: https://www.nobelprize.org/uploads/2018/06/davisson-lecture.pdf . Calculations: work/brief193/calculations-v12-v13.json.

### 193.02: Module8 lesson13, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson13.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson13.sa.html); saved `work/brief193/live-site/lesson13.sa.html`, SHA256 `0a023a2a602f9e3e1a22a1303b3e6e6da44c431a8fefd0de4467e73af7dc2471`.

Current paragraph(s):

It is not without cost. The model sacrifices any visualisable picture of the electron's motion, it becomes mathematically intractable to solve exactly for atoms beyond hydrogen so approximations are required, and the physical interpretation of the wave function remains a matter of debate rather than settled fact.

Bohr's model, even with de Broglie's standing-wave account of quantisation, still treated the electron as a particle on a definite circular path of definite radius and worked quantitatively only for hydrogen. Schrodinger treated the electron as a three-dimensional matter wave and formulated a wave equation whose solutions describe its behaviour in an atom, giving not paths but regions in which it is likely to be found. Definite orbits are replaced by orbitals: regions of characteristic three-dimensional shape giving the probability of finding the electron at each point, rather than a trajectory. This is a substantial advance on both earlier defects, since quantisation emerges from the boundary conditions on the wave equation instead of being assumed, and the method extends to multi-electron atoms, underpinning the modern account of atomic structure and bonding. It is not costless: the model abandons any visualisable picture of electron motion, it cannot be solved exactly for atoms beyond hydrogen so approximations are needed, and the physical interpretation of the wave function remains debated rather than settled. Schrodinger's contribution is therefore foundational rather than incremental: it replaced a model that described a single atom by assumption with a framework accounting for atoms generally from one principle, at the cost of a classical picture of the electron's motion.

Did you predict multi-electron model failure because electron-electron repulsion is not accounted for? Correct, Bohr's model has no mechanism for electron-electron interactions, which significantly alters energy levels beyond hydrogen.

Finding: One-electron ions such as He+ also admit the hydrogen-like exact solution. Identify the multi-electron limitation or specify neutral atoms. This is a scope repair in the existing assessment answer, not a request for an added derivation. Primary: https://www.nist.gov/pml/atomic-spectroscopy-compendium-basic-ideas-notation-data-and-formulas/atomic-spectroscopy-term .

### 193.03: Module8 lesson14, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson14.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson14.sa.html); saved `work/brief193/live-site/lesson14.sa.html`, SHA256 `7510c983397120f43602f5a93af88e528b57d48a81a50144120df07d86c6dc4c`.

Current paragraph(s):

Beyond about $A \approx 200$, no combination of protons and neutrons can stabilise the nucleus. These nuclei are unstable and decay by:

Finding: The proposed A about 200 stability cutoff excludes stable Pb-208. Use the proton-number boundary beyond lead rather than mass number 200. Primary stable-isotope list: https://www.isotopes.gov/products/lead .

### 193.04: Module8 lesson14, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson14.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson14.sa.html); saved `work/brief193/live-site/lesson14.sa.html`, SHA256 `7510c983397120f43602f5a93af88e528b57d48a81a50144120df07d86c6dc4c`.

Current paragraph(s):

Today's hook: In 1935, Hideki Yukawa at Osaka University calculated that the strong force holding protons together inside a nucleus 10⁻¹⁵ m across must be carried by a particle with mass ~200 MeV, about 200 times heavier than an electron. When Cecil Powell found this pion in 1947 using photographic plates carried by balloon to 5,220 m altitude in Bolivia, it confirmed Yukawa's prediction and explained how protons can be crammed into a space 100,000 times smaller than an atom without flying apart. What properties must the strong force have to win against the Coulomb repulsion of 79 protons packed into a gold nucleus?

Finding: The same sentence gives about 200 MeV and about 200 electron masses. An electron rest energy is 0.511 MeV, so 200/0.511 = 391, about 400 electron masses. Repair that internal arithmetic. This does not certify the precise historical Yukawa estimate; distinguish an order-of-magnitude range estimate from the measured pion mass.

### 193.05: Module8 lesson14, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson14.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson14.sa.html); saved `work/brief193/live-site/lesson14.sa.html`, SHA256 `7510c983397120f43602f5a93af88e528b57d48a81a50144120df07d86c6dc4c`.

Current paragraph(s):

Why is energy released? Uranium-235 has a binding energy per nucleon of only about 7.6 MeV, while the mid-mass fragments (around mass number 90 to 140) lie much closer to the iron-56 peak at about 8.5 MeV per nucleon. The products are therefore more tightly bound than the original nucleus. The increase of roughly 0.9 MeV per nucleon over 235 nucleons gives:

Finding: The rough multiplication is 0.9 times 235 = 211.5 MeV, while AME2020 masses give 173.279 MeV for the named Ba-141 plus Kr-92 plus three-neutron split. Separate the immediate energy of that exact split from the approximate average total of about 200 MeV including subsequent fragment decays. The rough binding-curve estimate is not the exact reaction calculation. Calculations: work/brief193/calculations-v16-v17.json and calculations-v18-v19.json.

### 193.06: Module8 lesson14, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson14.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson14.sa.html); saved `work/brief193/live-site/lesson14.sa.html`, SHA256 `7510c983397120f43602f5a93af88e528b57d48a81a50144120df07d86c6dc4c`.

Current paragraph(s):

Very high temperature (millions of kelvin) so that nuclei have enough kinetic energy to overcome the Coulomb repulsion;

Finding: Fusion does not require every reacting nucleus to climb over the full classical barrier. At 150 million K the mean translational energy is about 19.4 keV, compared with the roughly 0.5 MeV D-T barrier estimate; the high-energy tail and tunnelling matter. Repair the classical-only explanation and matching MC answer without removing the high-temperature condition. Primary: https://lasers.llnl.gov/news/showing-how-plasma-electrons-can-enhance-fusion-reaction-rates .

### 193.07: Module8 lesson15, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html); saved `work/brief193/live-site/lesson15.sa.html`, SHA256 `70a96727a5571dd8b47a1651c3ee1f796d58f887f72be226b42515638bd3bf7f`.

Current paragraph(s):

In 1898, Marie Curie in Paris isolated polonium and radium from 10 tonnes of pitchblende ore. She measured the half-life of Ra-226 as 1,600 years (modern value: 1,599 ± 4 years) using an electroscope to measure the ionisation rate of the emitted radiation. She coined the term "radioactivity" and became the first scientist to win two Nobel Prizes, Physics in 1903 and Chemistry in 1911. Her quantitative electroscope method established the experimental framework for measuring radioactive decay that is still used today.

Today's hook: In 1898, Marie Curie in Paris processed 10 tonnes of uranium ore (pitchblende) to isolate 0.1 g of radium-226. Using an electroscope to measure the ionisation rate, the number of charged particles emitted per second, she determined that Ra-226 has a half-life of 1,600 years: exactly half of any sample decays in that time, then half of the remainder in another 1,600 years. Yet she could not predict which individual atom would decay next. How can a process be simultaneously perfectly predictable in bulk and completely unpredictable for each individual atom?

Place a small sample of radium-226 in front of a Geiger counter. The counter clicks spontaneously, at random intervals, yet if you measure the total count rate for 10 minutes and again in 100 years, the average rate will decrease by exactly the factor predicted by t₁/₂ = 1,600 years, the value Marie Curie first determined in Paris in 1898. This spontaneous, probabilistic, yet statistically precise behaviour is the signature of radioactive decay. The three main decay modes differ in what the nucleus emits. Alpha decay ($\alpha$): A heavy nucleus emits an alpha particle (${}^4_2\text{He}$), reducing its mass number by 4 and atomic number by 2:

At the start you were asked about Marie Curie's 1898 measurement in Paris: processing 10 tonnes of pitchblende to isolate 0.1 g of Ra-226, then measuring its half-life as 1,600 years using an electroscope, the same half-life used in today's nuclear medicine calculations. Review your predictions:

Finding: The page merges discovery in 1898, later separation of a decigram of radium chloride and the modern radium half-life into one claimed 1898 measurement. Remove the unsupported half-life attribution and keep the discovery distinct from isolation. Curie describes the decigram as radium chloride and the measurement as atomic weight: https://history.aip.org/exhibits/curie/article_text.htm . Her 1911 lecture also distinguishes metal preparation from salt: https://www.nobelprize.org/prizes/chemistry/1911/marie-curie/lecture/?print=1 . Check all repeated hook, explanation and retrieval occurrences.

### 193.08: Module8 lesson15, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html); saved `work/brief193/live-site/lesson15.sa.html`, SHA256 `70a96727a5571dd8b47a1651c3ee1f796d58f887f72be226b42515638bd3bf7f`.

Current paragraph(s):

Place a small sample of radium-226 in front of a Geiger counter. The counter clicks spontaneously, at random intervals, yet if you measure the total count rate for 10 minutes and again in 100 years, the average rate will decrease by exactly the factor predicted by t₁/₂ = 1,600 years, the value Marie Curie first determined in Paris in 1898. This spontaneous, probabilistic, yet statistically precise behaviour is the signature of radioactive decay. The three main decay modes differ in what the nucleus emits. Alpha decay ($\alpha$): A heavy nucleus emits an alpha particle (${}^4_2\text{He}$), reducing its mass number by 4 and atomic number by 2:

Finding: Measured counts fluctuate; the exponential gives the expected rate, not an exact finite counting outcome. Preserve the predictable statistical trend while removing the claim of exact measured decrease.

### 193.09: Module8 lesson15, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html); saved `work/brief193/live-site/lesson15.sa.html`, SHA256 `70a96727a5571dd8b47a1651c3ee1f796d58f887f72be226b42515638bd3bf7f`.

Current paragraph(s):

Alpha particles are massive and doubly charged, so they cause intense ionisation but have low penetration (stopped by paper or skin). They occur in very heavy nuclei ($Z > 82$) where the strong force is overwhelmed by Coulomb repulsion.

Finding: Alpha decay occurs mostly in very heavy nuclei, but Z greater than 82 is not an exclusive condition. Sm-147 has Z=62 and alpha decays. Primary NNDC-derived table: https://stem-tools.jlab.org/itselemental/iso062 ; evaluated source https://www.nndc.bnl.gov/ensnds/147/Sm/adopted.pdf .

### 193.10: Module8 lesson15, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html); saved `work/brief193/live-site/lesson15.sa.html`, SHA256 `70a96727a5571dd8b47a1651c3ee1f796d58f887f72be226b42515638bd3bf7f`.

Current paragraph(s):

The released energy is called the Q-value , and its sign tells you everything. Define it from the mass defect, $Q = (m_{\text{reactants}} - m_{\text{products}})c^2$. A positive $Q$ means the products are lighter, mass-energy is released, and the reaction is exothermic , it can happen spontaneously (as in radioactive decay). A negative $Q$ means the products are heavier, so energy must be put in, and the reaction is endothermic , it cannot happen unless the bombarding particle supplies enough kinetic energy.

Finding: Positive Q establishes energy release, not that every reaction occurs spontaneously. Fusion still requires reactants to approach and has a barrier. Keep Q as the energy balance and distinguish a spontaneous decay from a reaction between incoming particles. Negative-Q recoil qualification is already present in the exercise and is not a new error.

### 193.11: Module8 lesson15, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html); saved `work/brief193/live-site/lesson15.sa.html`, SHA256 `70a96727a5571dd8b47a1651c3ee1f796d58f887f72be226b42515638bd3bf7f`.

Current paragraph(s):

A wooden artefact has ${}^{14}$C activity of 6.25 Bq/g. Fresh wood has activity 50 Bq/g. Given $t_{1/2}(^{14}\text{C}) = 5{,}730$ years, estimate the age of the artefact. Show your working clearly.

Finding: The one-eighth ratio and 17,190-year answer check. The values are not realistic fresh-wood carbon-14 specific activities: modern carbon is about 13.56 disintegrations per minute per gram of carbon, or 0.226 Bq/g carbon, and wood is not pure carbon. Label the numbers as scaled or select a consistent realistic pair and state the per-gram basis. Primary NBS paper: https://nvlpubs.nist.gov/nistpubs/jres/093/3/V93-3.pdf .

### 193.12: Module8 lesson15, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html); saved `work/brief193/live-site/lesson15.sa.html`, SHA256 `70a96727a5571dd8b47a1651c3ee1f796d58f887f72be226b42515638bd3bf7f`.

Current paragraph(s):

The student's first statement is therefore correct but its conclusion is wrong, since decay is exponential and a sample is never fully depleted; the second is incomplete rather than wrong, since activity is proportional to the number remaining but fixes it only when the decay constant is known.

Finding: A continuous exponential expectation stays positive; a finite sample can eventually contain zero undecayed nuclei. The later statistical qualification does not repair the unconditional never-depleted answer. Apply the distinction consistently in short and extended feedback.

### 193.13: Module8 lesson15, clarification

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html); saved `work/brief193/live-site/lesson15.sa.html`, SHA256 `70a96727a5571dd8b47a1651c3ee1f796d58f887f72be226b42515638bd3bf7f`.

Current paragraph(s):

Step 2, masses (in u). Reactant: Po-210 $= 209.982874$. Products: Pb-206 $= 205.974465$, He-4 $= 4.002602$, so $m_{\text{products}} = 205.974465 + 4.002602 = 209.977067$.

Rutherford's 1919 reaction is a clear endothermic case. Using atomic masses ${}^4_2\text{He} = 4.002602\text{ u}$, ${}^{14}_7\text{N} = 14.003074\text{ u}$, ${}^{17}_8\text{O} = 16.999132\text{ u}$ and ${}^1_1\text{H} = 1.007825\text{ u}$:

Finding: For the common AME2020 table, He-4 atomic mass rounds to 4.002603 u. Update both displayed mass lists if standardising constants. The existing -1.19 MeV and 5.41 MeV answers are unchanged at their stated precision. This is a consistency clarification, not a failed three-significant-figure result. Calculations and mass-table hash: work/brief193/calculations-v14-v15.json and calculations-v16-v17.json.

### 193.14: Module8 lesson15, clarification

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html); saved `work/brief193/live-site/lesson15.sa.html`, SHA256 `70a96727a5571dd8b47a1651c3ee1f796d58f887f72be226b42515638bd3bf7f`.

Current paragraph(s):

Weigh the reactants of any nuclear reaction on an imaginary ultra-precise balance, then weigh the products. They do not match. A tiny amount of mass, the mass defect $\Delta m$, has vanished, and in its place an exactly equivalent amount of energy has appeared as kinetic energy of the products and gamma photons. Mass alone is not conserved, but mass-energy together is . This is the deeper meaning of every decay equation you have written.

Finding: The existing paragraph correctly states mass-energy conservation. Prefer explaining the lower product rest mass and outgoing kinetic energy/radiation over vanished, to avoid teaching loss of matter. Do not describe this as a failure of the energy balance or add an unrelated caveat.

### 193.15: Module8 lesson16, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson16.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson16.sa.html); saved `work/brief193/live-site/lesson16.sa.html`, SHA256 `0c38979298742eab8d8085c94802034c3cd06685b90641180979d588744753a4`.

Current paragraph(s):

In 1932, Carl Anderson at Caltech photographed cosmic ray tracks in a Wilson cloud chamber in a 1.5 T magnetic field. He observed a track with electron-mass curvature but opposite (positive) charge, the antielectron (positron) that Paul Dirac had predicted from his relativistic quantum equation in 1928. Anderson was awarded the Nobel Prize in Physics in 1936. When a positron meets an electron, both annihilate to produce two gamma rays each carrying exactly E = mₑc² = 0.511 MeV, the quantitative signature now used in PET medical scanning.

Today's hook: In 1932, Carl Anderson at Caltech was photographing cosmic ray tracks in a Wilson cloud chamber placed in a 1.5 T magnetic field. He saw a track that curved the wrong way, like an electron, same mass, but positive charge. Paul Dirac had predicted in 1928 that every particle must have an antiparticle with the same mass but opposite charge. When this positron (antielectron) later met an ordinary electron, both vanished, replaced by two gamma rays each carrying exactly 0.511 MeV, equal to one electron rest-mass energy. Anderson won the Nobel Prize in 1936. How can two real particles with mass and charge simply cease to exist?

In 1932, Carl Anderson at Caltech placed a Wilson cloud chamber in a 1.5 T magnetic field and photographed cosmic ray tracks. One track curved exactly like an electron, same radius, same mass, but in the opposite direction, indicating positive charge. This was the positron (antielectron, symbol $e^+$), the particle Paul Dirac had predicted in 1928 from his relativistic quantum equation. Dirac's theory required that for every particle there exists an antiparticle with the same mass but opposite charge and quantum numbers.

Two photons are produced (not one) to conserve both energy and momentum. In the centre-of-mass frame the initial momentum is zero, so the two photons travel in exactly opposite directions, each carrying 0.511 MeV. A single photon would have non-zero momentum and would violate conservation of momentum.

This is why the correction is physics rather than pedantry: the additive quantum numbers are exactly what conservation checks are performed on.

Q1 (3 marks): (a) $e^- + e^+ \rightarrow \gamma + \gamma$ (1 mark). (b) Each photon carries half the total rest mass energy: $E = m_ec^2 = 0.511$ MeV (1 mark). (c) In the centre-of-mass frame the total initial momentum is zero. A single photon always has momentum ($p = E/c \neq 0$), which would violate momentum conservation. Two photons of equal energy travelling in exactly opposite directions have zero net momentum, satisfying conservation (1 mark).

At the start you were asked about Carl Anderson's 1932 cloud chamber discovery at Caltech, a positive-charge track with electron mass, in a 1.5 T magnetic field, confirming Dirac's 1928 antiparticle prediction. When this positron (e⁺) meets an electron (e⁻), both disappear and two gamma rays are produced, each at exactly 0.511 MeV, the basis of PET scanning. Review your predictions:

Did you predict two photons are produced to conserve momentum? Correct, in the centre-of-mass frame, initial momentum is zero, so two equal-energy photons must travel in exactly opposite directions, as in PET scanning.

The free HSC study pack has the full Physics syllabus checklist , anything you can't tick yet is exactly where to revise , plus a 12-week planner and a Band 6 study guide.

Finding: The repeated hook makes two photons of exactly 0.511 MeV unconditional. That familiar result applies to two-photon annihilation of an electron and positron at rest in their centre-of-momentum frame. State the negligible-initial-kinetic-energy condition for the PET example rather than applying the energy to every moving pair. Primary kinematics: https://geant4.web.cern.ch/documentation/dev/prm_html/PhysicsReferenceManual/electromagnetic/electron_incident/annil.html .

### 193.16: Module8 lesson17, clarification

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson17.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson17.sa.html); saved `work/brief193/live-site/lesson17.sa.html`, SHA256 `098cf3862c2240cb66dc3c963047364a659f87b7f192de606f3f74fded828a13`.

Current paragraph(s):

When the J/ψ meson was discovered simultaneously at Brookhaven (Ting) and SLAC (Richter) on 11 November 1974 at mass 3.097 GeV/c², particle physicists recognised it as a charm–anticharm quark pair, the first direct evidence for the charm quark that Glashow, Iliopoulos, and Maiani had predicted in 1970. The quark model proposed by Murray Gell-Mann at Caltech in 1964 explained all known hadrons as combinations of quarks, fundamental spin-$\frac{1}{2}$ fermions with fractional electric charge . There are six flavours , grouped into three generations. Each flavour has a corresponding antiquark carrying opposite charge and quantum numbers.

Finding: Gell-Mann is correctly named, but George Zweig independently proposed the model in 1964. Root requested the paired attribution. Add Zweig to the existing historical clause; no extra historical scene is needed. Primary institutional account: https://home.cern/who-invented-quarks/ .

### 193.17: Module8 lesson17, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson17.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson17.sa.html); saved `work/brief193/live-site/lesson17.sa.html`, SHA256 `098cf3862c2240cb66dc3c963047364a659f87b7f192de606f3f74fded828a13`.

Current paragraph(s):

Did you predict evidence for internal quark structure came from deep inelastic scattering experiments at SLAC (1967) showing point-like constituents inside protons? Correct, high-energy electron scattering revealed hard scattering centres inconsistent with a uniform charge distribution, exactly as quark confinement predicts.

Finding: Deep inelastic scattering provides evidence of point-like charged constituents. It is not itself a demonstration of confinement. Attribute the constituent inference to the quark/parton model and reserve confinement for the absence of free coloured particles. Primary historical account: https://www.fnal.gov/pub/science/inquiring/matter/ww_discoveries/index.html .

### 193.18: Module8 lesson18, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson18.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson18.sa.html); saved `work/brief193/live-site/lesson18.sa.html`, SHA256 `b4bf30ef2fe290688205b60b1ff0d964af04422f0ba23bfd78498097d69b9703`.

Current paragraph(s):

We just saw the four forces tabulated by strength and range. That raises a question: why does force range depend on the mass of the carrier, and why does the massless gluon still produce a short-range force? This card answers it → the Heisenberg uncertainty principle limits massive virtual particles to short lifetimes and thus short range; gluon self-interaction creates colour confinement as an independent mechanism.

Finding: The page frames a virtual exchange as an ordinary particle with a literal allowed lifetime. Its own practice answer correctly relates the mass to the interaction range and rejects temporary energy nonconservation. Bring the explanation and vocabulary into line with that answer. Do not log the energy-conservation caution as missing: it is already present.

### 193.19: Module8 lesson18, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson18.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson18.sa.html); saved `work/brief193/live-site/lesson18.sa.html`, SHA256 `b4bf30ef2fe290688205b60b1ff0d964af04422f0ba23bfd78498097d69b9703`.

Current paragraph(s):

Gluons: Massless but self-interacting. Gluon-gluon interactions create colour-flux tubes that hold quarks confined, the strong force effectively has short range because these tubes snap when stretched beyond ~1 fm, producing new quark-antiquark pairs instead.

Finding: Confinement of colour within hadrons and the short-range residual force between nucleons are separate claims. The practice answer already makes the distinction; carry it through this explanation and the later nuclear-distances summary rather than treating the whole nucleus as confinement's boundary.

### 193.20: Module8 lesson19, clarification

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson19.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson19.sa.html); saved `work/brief193/live-site/lesson19.sa.html`, SHA256 `5e5279df57b5ba9b4b5b65d072331b9898f30eef630f73756a8a46417744d360`.

Current paragraph(s):

Linear accelerators (linacs): Particles are accelerated in a straight line by oscillating electric fields. Each accelerating stage adds energy. Linacs are used as injectors for larger machines and for applications like medical radiation therapy. The Stanford Linear Accelerator (SLAC) reached 50 GeV electrons over a 3 km track.

Linear accelerator (linac): a row of drift tubes with RF gaps between them. The beam passes once along the axis, gaining energy at each gap, so its final energy is limited by the machine’s length. Example: SLAC, 3 km long, 50 GeV electrons.

High energy makes massive final states accessible and high momentum resolves small structures; luminosity controls the event rate. Linac: single-pass straight, limited by length (SLAC: 3 km, 50 GeV). Synchrotron: circular, RF cavities boost energy each lap (LHC example: 27 km, 6.8 TeV/beam). Collider: √s = 2E_beam. Fixed-target: √s ≈ √(2m_target c²·E_beam), much less efficient at the same beam energy.

Finding: The page alternates 3 km and 3.2 km. Standardise the approximate two-mile linac length and identify 50 GeV as the later upgrade, separate from the about-20-GeV scattering era. This is a precision/history clarification, not a claim that rounding 3.2 km to 3 km alone invalidates the example. Primary: https://www6.slac.stanford.edu/about/our-story/history/slac-timeline and https://www.slac.stanford.edu/pubs/slacpubs/4750/slac-pub-4890.pdf .

### 193.21: Module8 lesson19, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson19.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson19.sa.html); saved `work/brief193/live-site/lesson19.sa.html`, SHA256 `5e5279df57b5ba9b4b5b65d072331b9898f30eef630f73756a8a46417744d360`.

Current paragraph(s):

The role is nevertheless limited. Accelerators can only test the model up to the energies they reach, so predictions requiring higher energies remain untested; the evidence is indirect, since short-lived particles are inferred from their decay products rather than observed directly; and gravity is not part of the Standard Model at all, so no accelerator result can test that aspect of fundamental physics.

The Standard Model predicts which particles exist, their properties, and which interactions and decays are possible, so testing it requires producing particles that do not occur in ordinary matter and measuring their behaviour. Accelerators meet this need because most predicted particles are massive and short-lived and, by $E = mc^2$, the energy to create them must be supplied; colliding particles at high energy converts kinetic energy into the mass of new particles under controlled conditions. They contribute in two distinct ways: scattering experiments probe structure, since higher-energy probes resolve smaller scales, which is how the proton's internal structure was established, and collision experiments create new particles whose masses and decay modes can be compared with prediction. The evidential value is high because those predictions are specific and could fail, so a disagreeing measurement, or a predicted particle failing to appear at the energy where it should, would count against the model. The role is nonetheless limited: accelerators test the model only up to the energies they reach, the evidence is indirect because short-lived particles are inferred from decay products rather than observed, and gravity is not part of the Standard Model at all, so no accelerator result can test it. Accelerators are therefore the principal and largely irreplaceable source of evidence for the model within their energy range, in which it is well validated, but they cannot establish it as a complete description of matter.

Finding: Gravity being outside the Standard Model does not mean accelerator results cannot test gravity. ALPHA tested the free fall of accelerator-produced antihydrogen. Remove the claimed experimental impossibility while retaining the valid limitation of the model. Primary: https://alpha.web.cern.ch/first-measurement-antihydrogen-free-fall-using-radial-time-projection-chamber/ .

### 193.22: Module8 lesson19, confirmed correction

Source: [https://hscscience.com.au/subjects/physics/year12/module8/lesson19.sa.html](https://hscscience.com.au/subjects/physics/year12/module8/lesson19.sa.html); saved `work/brief193/live-site/lesson19.sa.html`, SHA256 `5e5279df57b5ba9b4b5b65d072331b9898f30eef630f73756a8a46417744d360`.

Current paragraph(s):

Layers from the beam outward: the tracker, where charged particles leave curved tracks whose radius gives their momentum, p = qBr; the EM calorimeter, where electrons and photons stop; the hadronic calorimeter, where protons, neutrons and pions stop; and the muon detectors, which only muons reach.

Finding: Neutrinos also pass through all detector layers, as the page later says. The distinctive claim is outer muon tracks/signals, not exclusive arrival at the outer layer. Preserve the neutrino missing-momentum explanation and identify the observed signature. Primary: https://cdf.fnal.gov/detintro.html .

Checked dispositions: lesson14 already distinguishes Ni-62 highest binding energy per nucleon from Fe-56 lowest atomic mass per nucleon. The uncertainty statement in lesson13 is correct; a radial reformulation is optional, not a correction. Rounded constants agreeing at the answer precision are not failed calculations. The strange-quark approximate95MeV entry is an acceptable rounded older value. Lesson19 already uses diphoton invariant mass correctly; its generic layer diagram need not be relabelled CMS. Missing George Thomson context is an optional historical addition, not a separate science error. A decay constant is an instantaneous rate; the short vocabulary definition alone is not logged as a finite-interval probability claim. Moderator detail and about-one-neutron wording are teaching refinements, not fresh errors. No site files changed.

Source excerpts above normalise U+2014 punctuation to commas; retained HTML and JSON preserve the original text.

### 234.1: Module8 lesson16, decay is not evidence of constituents

Source: [lesson16](https://hscscience.com.au/subjects/physics/year12/module8/lesson16.sa.html), retained `work/brief193/live-site/lesson16.sa.html`, SHA256 `0c38979298742eab8d8085c94802034c3cd06685b90641180979d588744753a4`. Brief234,9 November2026,requested by root decision19. This is a new correction beyond the earlier Brief193 site log.

The Analyse7marks step4 says "A particle with no internal structure has nothing to rearrange" and treats neutron identity change as independent evidence for constituents. The combined model answer repeats that argument.

Finding: decay does not require constituents. A muon is a fundamental lepton and decays into an electron and neutrinos. Remove decay as independent proof from step4,its justification and the combined answer. Keep the quark model description d to u as an account of neutron decay,with scattering and hadron patterns as the evidence. [DOE muon account](https://www.energy.gov/science/doe-explainsmuons). The repaired v20 scenes/accepted answers already make this distinction. No site HTML changed.
