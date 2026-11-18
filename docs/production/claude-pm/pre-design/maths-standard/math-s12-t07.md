# math-s12-t07: How does the sine rule find a missing angle, including an obtuse one?

Maths Standard research pack (Year 12, Trigonometry), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Trigonometry):

- `ci50b6961b`: Apply the sine rule (sin A)/a = (sin B)/b = (sin C)/c in a given triangle ABC to find the value of an unknown angle, excluding the ambiguous case [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae). Site coverage: covered.
- `ci6b083940`: Apply the sine rule in a given triangle to find the value of an unknown angle, given that the unknown angle is obtuse [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae). Site coverage: covered.

Standard 1: no matching point. These are CMS codenames, not published content-point codes.

**Course:** Standard 2 only. Playlist order 57 (ruling 46 positions).

**Entry knowledge:** math-s12-t06: `ci26620302` (the sine rule, the matched pair); math-s12-t02: `cif8689656` and `ci74344e24` (sin⁻¹, degrees and minutes).

**Prior video:** math-s12-t06.

**Start:** t06's final frame (proposed): a triangular shade sail over a backyard, two edges and one corner angle labelled, the far corner "? (acute)".

**Stop:** The flipped rule sin A/a = sin B/b with the sines on top when the unknown is an angle; sin B = b sin A ÷ a, then sin⁻¹; degrees and minutes; why one sine value fits two angles between 0° and 180° (sin θ = sin(180° − θ), shown as two angles at the same height); the calculator always gives the acute one; when the question says the angle is obtuse, take 180° minus the calculator angle; check that the angles still add to less than 180°. The ambiguous case is not taught (the syllabus excludes it); the video only says the question will tell you which kind of angle it wants.

**Next:** math-s12-t08.

## 2. Site order, sections and worked examples

Read-only source: [trigonometry/lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson06.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `838dc6e4c296b0ab2fbc03de12083acee190e4cbd7b5d30b306856eadeb46f13`. Sections used: `orient-to-the-sine-rule` (card 02 "Finding an ANGLE", card 03, key term "Obtuse angle"), `choose-the-arrangement` (card 05), `work-three-sine-rule-examples` (`we-3`), `avoid-the-sine-rule-traps` (trap 03), `drill-the-sine-rule` (drills 3, 5, the matching task), `practise-the-sine-rule` (Q2).

### Source lesson06, cards 02 and 05, key term

Card 02: "Finding an ANGLE: Flip the rule so the sines are on top: $\sin B = \dfrac{b\sin A}{a}$, then take the inverse sine." Key term: "Obtuse angle: An angle between $90°$ and $180°$. Like this: $119°$ is obtuse, and because $\sin 119° = \sin 61°$, a calculator asked for the inverse sine will hand back $61°$ every time." Card 05: "Sine is positive for acute angles and for obtuse ones, and in fact $\sin\theta = \sin(180° - \theta)$. So $\sin 61°$ and $\sin 119°$ are the same number, and your calculator, handed that number, will always return the acute one." "What the syllabus asks of you. You are not asked to resolve the ambiguous case unaided. You are asked to find an acute angle when that is what the triangle has, and to find the obtuse angle when the question tells you the angle is obtuse. If it does, take the calculator's answer and subtract it from $180°$."

### Source lesson06, `we-3`

"(a) In triangle $ABC$, $a = 9$, $A = 35°$ and $b = 13$, and $B$ is acute. Find $B$ to the nearest minute. (b) In a different triangle, $a = 7$, $A = 28°$, $b = 13$, and $B$ is known to be obtuse. Find $B$ to the nearest minute." (a) "$\sin B = \dfrac{13\sin 35°}{9} = \dfrac{13 \times 0.573576}{9} = 0.828498$", "$B = \sin^{-1}(0.828498) = 55.9449° = \mathbf{55°\,57'}$". (b) "$\sin B = \dfrac{13\sin 28°}{7} = 0.8718758$, and the calculator returns $60.6774°$", "That is the acute solution. The question says $B$ is obtuse, so this is not the answer yet." "$B = 180° - 60.6774° = 119.3226° = \mathbf{119°\,19'}$" "Check the triangle closes: $28° + 119.32° = 147.32°$, comfortably under $180°$".

### Source lesson06, trap 03, drills and Q2

Trap 03: "Because $\sin\theta = \sin(180° - \theta)$, the inverse sine always returns the acute value. If the question states the angle is obtuse, subtract from $180°$. Then check the three angles still add to less than $180°$". True or false: "$\sin 150°$ and $\sin 30°$ are equal." Drill 3: "$a = 10$, $A = 45°$, $b = 12$. Find the acute angle $B$" (58.05°). Drill 5: "$a = 5$, $A = 20°$, $b = 12$, and $B$ is obtuse" (124.83°; "$20° + 124.83° = 144.83° < 180°$"). Q2: "$a = 15$, $A = 42°$ and $b = 20$. Find the acute angle $B$, correct to the nearest minute." (63°9').

## 3. Recalculation

- `we-3` (a): sin B = 0.828498; B = 55.9449°, so 55°57'. (b): sin B = 0.871876; acute 60.6774°; B = 119.3226°, so 119°19'; 28 + 119.32 = 147.32.
- Drill 3: 58.0519°, so 58.05°. Drill 5: acute 55.1698°; obtuse 124.8302°, so 124.83°; 144.83 < 180. Q2: 63.1477°, so 63°9'. sin 150° = sin 30° = 0.5.
- Question 1: sin R = 5.8 sin 47° ÷ 4.6 = 0.922142; R = 67.2412°, so 67°14' (the obtuse value 112.76° would also fit, 47 + 112.76 = 159.76 < 180, which is why the question must say acute). Question 2: sin C = 40 sin 25° ÷ 22 = 0.768397; acute value 50.2101°; C = 129.7899°, so 129°47'; then B = 25.21°.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-t/recalc.py`, `recalc_pack.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Writing the rule with sides on top and then rearranging an angle out of a denominator (flip it first).
- Taking the calculator's acute angle when the question says obtuse.
- Subtracting from 180° when the question says acute (or says nothing about obtuse and the triangle is clearly acute).
- Pairing the wrong side with the known angle.
- Rounding sin B before sin⁻¹ (changes the minutes).
- Thinking "the calculator is wrong": it gives the one answer it can; the triangle decides.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The flipped rule: the t06 fractions turning upside down (sides on top become sines on top) with "unknown angle? sines on top" as a hand tag.
- Two angles at one height: a coded semicircle (0° to 180°) with a horizontal line at height 0.87; it meets the arc at 60.68° and 119.32°, mirror images; the calculator's arrow points only at the left one.
- An obtuse triangle (the coat hanger) drawn twice: the acute-angle version that would not match the picture, and the obtuse one that does; the angle sum check as a bar under 180°.

Advanced reuse (visual parts only): `StudioCirclePoint` (a11-trig-circle.tsx) for the two angles with the same sine (upper half only, no unit-circle language needed; label it "same height, same sine"); `StudioTriangle` with `pairs` and `angles`; `MinutesDial` and `fmtDMS`. `SSAConstruction` (Advanced t07, the ambiguous case) is **not** used, because the syllabus excludes the ambiguous case. Plates: a shade sail (new `ms12-` plate, also used in t09), a wire coat hanger (new plate or coded wire), a bike frame (optional). Kit needs: none essential (StudioCirclePoint upper half suffices; a "same sine" mode label is a small option).

## 6. Two original candidate practice questions

### Question 1

A triangular shade sail PQR has PQ = 5.8 m and QR = 4.6 m, and the angle at P is 47°. The angle at R is acute. Find the angle at R, correct to the nearest minute.

**Worked answer:** R is opposite PQ = 5.8 and P (47°) is opposite QR = 4.6, so sin R ÷ 5.8 = sin 47° ÷ 4.6. sin R = 5.8 × sin 47° ÷ 4.6 = 0.9221. R = sin⁻¹(0.9221) = 67.24°; 0.2412 × 60 = 14.5, so 67°14'.

### Question 2

The wire of a coat hanger forms a triangle ABC. The bottom bar AB is 40 cm long, the side BC is 22 cm, and the angle at A is 25°. The angle at C, where the hook is, is obtuse. Find the angle at C, correct to the nearest minute.

**Worked answer:** sin C ÷ 40 = sin 25° ÷ 22, so sin C = 40 × sin 25° ÷ 22 = 0.7684. The calculator gives 50.21°, the acute angle with this sine. C is obtuse, so C = 180° − 50.21° = 129.79°; 0.79 × 60 = 47.4, so 129°47'. Check: 25° + 129°47' is under 180°, so the triangle closes.

Only the question goes on the card (with a sketch). Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 2: "C = 50°13'", crossed, "that is the acute angle with the same sine; the question says obtuse, so 180° minus it"). Answers were checked with SymPy.

## 7. Everyday anchors

- **A coat hanger:** its top corner, at the hook, is an obvious obtuse angle, about 130° (home; an obtuse angle you can hold).
- **A triangular shade sail:** three corners tied to posts and a wall; one corner angle and two edges are known (home and garden; the same sail returns in t09 for the fabric).
- **A bike frame:** the triangle of top tube, seat tube and down tube; the angle at the seat post from two tube lengths and one angle (sport; Claude checks numbers with SymPy if used).

Varied everyday contexts (home, garden, sport). Repeat check (grepped 18 November 2026): Advanced t07's anchor is a highway through a phone tower's range (the ambiguous case), Advanced t05's fire towers; "coat hanger", "shade sail" and "bike frame" have no hits (Advanced a12 uses a bike crankset and pedal for circular motion, a different object and question). Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

No new error in lesson06.

Decisions for Claude:

- **Excluding the ambiguous case:** do not draw two possible triangles from one set of data (that is the Advanced idea). Show only that one sine fits two angles, and that the question (or the picture) says which one; the site's card 05 says exactly this.
- **Obtuse first in a picture:** the coat hanger makes "obtuse" visible before any number, so 50° plainly does not fit.
- **Check by angle sum:** keep the site's "check the triangle closes" step after each obtuse answer.
- **Pace: fits** (7 to 8 minutes).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
