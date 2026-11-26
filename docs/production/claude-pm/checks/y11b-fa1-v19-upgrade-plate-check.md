# Brief 242: Biology FA1 v19 induced-fit set

13 November 2026. Five missing files delivered with sidecars: open, closed, substrate, products and near-miss, under public/assets/biology/y11-induced-fit-*.png. Original m5x plate and previously delivered layers are unchanged. Built-in image edits only, PNGs copied unchanged.

Static content and actual native paper/dark alpha pass. The open pocket is broad and rounded, unlike the matching lobes; closed lips grip the gold substrate; the isolated substrate matches its role; products are two gold pieces; near-miss is lilac-grey with one longer square-ended lobe.

## Registration hold

Requested 2000-square canvas was not returned. All five are 1254 square. Open/closed far-side alpha-mask IoU is 0.99418 in x < 400, but their common opaque RGB pixels differ by a mean 8.50/255. Far-side pixel identity is not achieved. The isolated gold layer and closed gold mask have IoU 0.95590, also not exact. These fail the brief's strict identical-body/overlay requirement. Root can accept a revised dissolve treatment or commission exact registration; no source was changed. Do not call v19 ready to build or voice solely because files now exist.

At native coordinates, substrate overlaps open enzyme by 1040 opaque pixels; moving the loose-open substrate up25pixels makes that zero. Near-miss up25pixels retains18overlap pixels of59686. Products were returned near x588to991 rather than wholly outside the pocket; outgoing placement/scale remains a code-and-playback check. All these limits and native bounds are in the sidecars. No production image was rescaled, masked or composited in Python.

Evidence: work/brief242/induced-fit-registration-measurements.json, induced-fit-open-placement.json and native/overlay JPEGs. Full provenance: assets/y11fa1v19-provenance.json. No whole-lesson clearance.
