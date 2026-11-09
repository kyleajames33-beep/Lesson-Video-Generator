# Physics Year 12 Module 6 v12 Revision 2 error check

Codex, 9 November 2026. Source SHA256 `845d5a0a3da7761eedbb25f910231df537b39278f23b12b8c704f9a6ce7361e8`. Error-only repair check; original reviews retained. No design, narration, scene or speech edits.

Result: 0 blockers, 1 should fix, 0 optional.

- **Should fix, scene8 AC graph sign after the reference repair.** The new axis convention in scenes5/8 makes the rising-primary-current switch-on emf positive (needle right). Author note f confirms this reference. But scene8 still directs the graph to author note c,which gives secondary emf proportional to **-cos(omega t)** for primary current sin(omega t). That is negative at the positive-going zero crossing,opposite the repaired positive switch-on convention. Under the chosen common lead reference the plotted curve must instead be +cos,or the graph must explicitly choose and label a different reference. Keep the correct magnitude/quarter-cycle teaching;reconcile the two graph instructions so a builder cannot draw opposite polarities for the same rising current.

The prior should-fix finding about AC assumptions and the physical needle is resolved: narration and graphs state ideal coils/no load;the meter is dimmed and still in scenes8/9,with the fast-AC warning. The larger core-coupling result is shown on an ideal unloaded graph. The prior optional sign finding is only partly resolved:the new axes and author note f choose a clear reference,but author note c retains the other one as described above.

Independent calculations in `work/brief232/v12-calculations.json` cover the new ramp control and normalised phase curves. Fixed per-turn flux change4e-5Wb over0.040/0.020/0.010s gives rates0.001/0.002/0.004Wb/s and emf magnitudes0.50/1/2V with500turns. Pulse area remains0.020V s. The crossed missing-time result is numerically0.020,but cannot have volt units without division by time. Attempt2 gives5V from250turns;the wrong100turn count gives2V. Both cosine references have maximum magnitude at current zero and zero at current peaks,so the retained timing claim is correct.

Site comparisons independently give460V,100V,1150V,11.5V,115W,10A,12V,120W,1200V,8000turns,50A and19.2MW as scoped in the source notes. The230/240V distinction remains explicit and does not change the lesson's12V battery question. No source number was edited.

The switching chain,steady-current zero emf,Lenz opposition,relative coil movement,shared-flux core explanation and secondary-turn count are consistent. The no-load linear-coupling phase assumption is now learner-visible;the graph is separated from needle dynamics. No school-approved method or measured practical completion is claimed.

All16 narration strings and visual specifications were read. Bold and quoted cues match spoken order,including the new ramp-time pulse. Both question cards preserve givens through countdown and feedback. Scene sum5705characters matches the headline;estimated519s is under570. No em dash or drawn person/hand. Eight listed plates including the alternative wide coil exist,with uniform scaling specified and no new request. Same-scale rod/bore fit remains a build check.

Written v11/v12 and v12/v13 joins match,including the closed core,AC source,lamp and placeholder N/V/I labels. Excerpts and hashes are recorded. Integrated graph signs,needle masking,core/rod fit,motion,voiced timing,captions and human listening remain pending. Shared CRT retry is separate.
