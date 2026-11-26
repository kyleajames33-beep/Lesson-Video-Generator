# Brief 242: Physics FA0 cones and Moon plate check

13 November 2026. Result: one build blocker for Moon ground placement; no renewed constant-slant hold on the cones.

## Blocker: Moon ground sidecar line misses the artwork

`public/assets/physics/phys-y11-moon-ground-v1.json` gives groundLine endpoints at y=69 on its2172x724canvas. The main visible painted ground occupies x61to2110,y544to681(alpha above1), or x64to2108,y546to680(alpha above8). Its surface is irregular but nowhere near y69. A drop/contact placed from that sidecar line would meet empty canvas. Builder must set the ground contact from the actual painted surface at each landing x, then check the joined native playback. No code or sidecar edited in this check.

## Cones: accepted for illustration

Root FA0 item24(a),12November accepts the five existing cones for illustration because fall times are model values. No repaint for constant slant is required. Existing approximate anchors imply slants8.25,9.90,9.82,11.23,10.76cm after matching nominal rim widths, not an exact common10cm. These values only demonstrate why the old geometric claim was not approved; they are not new learner data. Uniform scaling only, never stretch. Old sidecar history is retained; root's newer ruling governs the build.

## Native image checks

All five cones and the Moon ground, hammer and feather inspected as isolated native artwork. No people,faces,labels,numbers or question data. Native-aspect light/dark composites show no visible halo. Near-transparent alpha1strays extend rawbounds, so rawalpha rectangles are not reliable object centres or contact points. Some source margins are below8percent; inherited illustration plates were preserved, not silently repainted. Measurements and old sidecar copies: `work/brief242/cones-moon-native-measurements.json`. Composite: `work/brief242/cones-moon-native-aspect-qa.png`.

## Playback status

The Moon sidecar says no playback approval. No native Moon animation was observed in this check. That status remains pending. Artwork inspection does not establish equal acceleration, matching release/landing times or contact geometry. The existing layer images are unchanged. No wholelesson voice,build or release clearance.
