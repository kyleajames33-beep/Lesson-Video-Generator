# Brief 242: Chemistry M2 v17 sensor joins and bath fit

16 November 2026.

All 16 narration strings remain unchanged from the inventory: 5,759 characters. The current design contains no em dash. Revision 3 repeats existing conditions in the feedback strips and adds no new quoted On-cues.

Native paper/dark inspection: the gas-pressure sensor has a blank grey body, clear luer fitting and black cable, with no display, text or numbers. True outer alpha is present. The cable intentionally reaches the right canvas edge, matching the commission, rather than leaving a clear right margin. The data logger has a blank dark screen and two sockets, no labels or readout, and clear alpha margins. The beaker/hotplate artwork has no numerical temperature, volume or control labels. All three have no people or faces.

Sensor sidecar coordinates agree with the visible joins: luer tip (258, 470), cable continuation (1670, 785). The latter must continue tangentially from the intentional right-edge cut. Logger socket centres (540, 640) and (850, 640) lie in their sockets. Its sidecar screen rectangle [320, 257, 1080, 505] includes part of the bezel; keep coded readout content within the conservative inset [365, 310, 1020, 485], then check the built placement. QA annotations and current hashes are in `work/brief242/chem-m2-v17-context-measurements.json`.

The syringe pair at 420 px wide and the sensor at 280 px wide give no numerical answer or graph shape away. The syringe uses one uniform scale and the native axis checked for M2 v16. The thermometer remains an unnumbered icon with a fixed painted column.

| Finding | Scene | Required root resolution |
| --- | --- | --- |
| Build hold: bath cover obstructs immersion | 15 and final frame | `m8-beaker-hotplate-clear-v1.png` includes a broad watch-glass cover across the beaker mouth. The upright capped syringe and thermometer cannot pass through that intact cover. Remove or mask the cover for this composition and show the barrel behind the front rim with water tint over it. The single image does not prove this fit. |

This is a scene-composition hold, not a narration finding or an automatic repaint request. The same bath issue carries into M2 v18's opening apparatus. No production artwork was altered to solve it here.

The earlier alternatives (packaged syringes, industrial pressure vessel, lidded electric bath and force sensor) remain unused. No missing gas-pressure-sensor commission remains: the existing plate was delivered by brief 182, and its joins now have a native recheck.

Result: two new native records for sensor/logger; both new question-picture groups pass static answer-data QA. Scene 15 bath fit remains on hold. No new narration or arithmetic blocker. Actual tubing/cable joins, logger readout, bath layering and motion still need the built review. No whole-lesson, listening or release clearance.

Evidence: `assets/brief242-chem-m2-v17-native-qa-16-nov.json`. Reviewed design SHA256: `ee3dfcd5b0242e6e94aea83e1393ea79d1daea6745b0a4ca2bb32588a6535b5b`. No source edits or whole-lesson clearance.
