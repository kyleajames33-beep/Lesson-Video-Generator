# m-a12t04 maths check

Revision 1, 2 November 2026. Design SHA256 `26d286d280628e92522578840434153008157f2432ad0b2d865cdec9268adb47`. Independent arithmetic and SymPy evidence `work/brief153/t04-calculations.py` and JSON. Design unchanged.

Fresh official 2024 Year 12 source https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa3b2bda67 :

- `cib6542e48`: “Recognise that logarithmic scales are useful to represent a variable that ranges over a large set of values and explain when a logarithmic scale is suitable”.
- `ci1275a9f6`: “Use logarithmic scales to model and solve problems involving decibels (dB) in acoustics, seismic scales for earthquakes, magnitudes of stars and the pH scale in chemistry”.

The learner question and proposed route cover suitability and all four named applications, with the caveats below. The t03 axis leads into this opening, and i06 receives the familiar i05 rectangle frame.

The site library/café intensities are 10^-9 and 10^-5 W/m², ratio 10^4. Factory and limit differ by 10 dB, intensity ratio 10; +3 dB gives 1.9953. The ×50 trace model gives 5 + log10(50) = 6.69897. pH 4 versus 7 gives concentration ratio 1000 in the ideal dilute approximation; a five-magnitude flux difference gives 100. Stellar flux data ratio 46666.7, heights ratio 1.2303, and towns ratio 4416.7. The scene 14 Kelvin-independent point that Celsius temperatures are usually compared by differences is appropriate; the Celsius ratio is descriptive rather than an intrinsic physical ratio.

1. **Should fix:** Reference intensity is a convention, not a universal faintest audible sound. NIOSH specifies 1 pW/m² as the reference: https://www.cdc.gov/niosh/docs/98-126/pdfs/98-126.pdf .
2. **Should fix:** Identify M = log10(A/A0) as a simplified local-magnitude comparison at a common distance and compatible measurement, rather than a universal earthquake scale. USGS describes the distance correction and multiple magnitude types: https://www.usgs.gov/observatories/yvo/news/how-big-was-earthquake . State 50 times seismogram amplitude, not unconstrained ground displacement.
3. **Should fix:** pH is formally based on hydrogen-ion activity, not concentration alone; present -log10[H+] as the dilute ideal model: https://goldbook.iupac.org/terms/view/P04524 .
4. **Should fix:** The 85 dB point is 7.9% of the 0-to-0.004 axis, so replace “barely off zero” with “near the left”.

The incorrect +1 dB rule is already logged; the site's separate unqualified 3-step claim is item 71. The proposed seismograph 100 m correction is not asserted as certain: trace amplitudes depend on instrument representation, so do not log it as a definitive error without context. The 10/85 rounding in the hook is minor. Count 0 blockers, 4 should fix, 0 optional.
