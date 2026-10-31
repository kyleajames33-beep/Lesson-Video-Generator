# Projectile measurement details

Two reusable SVG families support the practical in Module 5 lesson 05. All readings and intervals are simulated. The initial launcher, paper stage, palette and axes are retained; these additions supply the previously missing repeated readings and uncertainty geometry.

## Entry knowledge and visual plan

`m5-repeat-measurements` assumes students know horizontal launch, range and a mean. Use a 16-second parent. One slowed launch shows the apparatus and distance. Five simulated range readings then appear on one common ruler. The mean and the min-to-max span appear after every reading is present. They hold for more than six seconds. The selected symmetric readings have mean 0.808 m and half-range 0.010 m. This is an illustrative spread estimate, not a standard error or a stated confidence interval. A real practical needs its own measurement method, resolution and systematic-error discussion.

`m5-slope-intervals` assumes students know slope and h = gx²/(2u²) for a horizontal launch. Use a 24-second parent. Plot simulated h against x² with measurement rectangles. At progress 0.4, reveal a compatible line through the origin and its inferred speed. Hold the low slope to 0.6, sweep to the high slope from 0.6 to 0.8, then hold the high slope. The first endpoint gets four seconds; the final endpoint gets six seconds including the parent hold. This motion shows that a steeper slope gives a lower inferred launch speed.

The rectangles use exact transformed horizontal endpoints (x minus dx)² and (x plus dx)², with dx = 0.01 m and dh = 0.02 m. Their boundaries allow slopes from max(hlo/x2hi) to min(hhi/x2lo). This construction imposes the model's zero intercept. It is not a least-squares regression or a statistical confidence band. The graph, rectangles and lines all use the shared `graphScale` coordinate map.

## Scientific limits and sources

Both models assume uniform g = 9.8 m/s², horizontal launch and negligible drag. The second set is centred on an ideal 2.00 m/s launch. Its chosen intervals illustrate a method, rather than report measurements or the accuracy of a real launcher. The first launch is shown once; the reading list represents simulated repetitions. No actual apparatus performance, risk assessment, error budget or practical coverage is claimed.

[OpenStax projectile motion](https://openstax.org/books/university-physics-volume-1/pages/4-3-projectile-motion) supports the common horizontal and vertical time model. [OpenStax significant figures](https://openstax.org/books/university-physics-volume-1/pages/1-6-significant-figures) describes half-range as one possible estimate of spread and distinguishes precision from discrepancy. The interval-line intersection here follows directly from the stated rectangular bounds.

Run `node src/explainer/physics/module5/practical-details/verify.mjs`. Checks use the actual model and test the example statistics, transformed intervals, allowed/rejected slopes, inverse speed relationship and deliberate endpoint holds. Independent source review found the mathematics sound and requested the endpoint holds now included. Native still, phone and playback evidence remains separate.
