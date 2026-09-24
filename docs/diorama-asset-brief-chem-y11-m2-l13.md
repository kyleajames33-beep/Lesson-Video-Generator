# Diorama asset brief — Chemistry Y11 M2 L13 (Limiting reagents)

Pilot for the **painted diorama** look: the same style as the student-dashboard
garden/tree tiles (Teaching-APP `lane/student-dashboard`). Each prop is a glossy,
softly lit painted object sitting on a **round soil-and-grass plinth**, 3/4 top-down
view, transparent background.

This is a **hybrid** system: the painted props carry the look, and the **coded SVG
layer carries every label, number, formula and moving part**. So the images must
never contain text.

## Delivery spec (applies to every prop)

| | |
|---|---|
| Format | PNG with alpha (transparent background), sRGB |
| Canvas | 1024 × 1024, object centred, plinth bottom edge ~8% above canvas bottom |
| Plinth | Same round soil/grass disc as the garden tiles, same camera angle and light (key light top-left) |
| Text | **None.** No labels, letters, numbers, formulas or logos anywhere in the image |
| Palette | Warm natural tones; lesson accent is chemistry teal `#0d6b52`, highlight amber `#f0a830` |
| Location | `public/assets/diorama/<file-name>.png` |

## Props

| # | File name | Scene | Subject | Accuracy notes |
|---|---|---|---|---|
| 1 | `plinth-empty.png` | all coded diagrams | The plinth on its own, no object | Coded particles, bars and graphs sit on top of this |
| 2 | `l13-hero.png` | title | A small chemistry bench on the plinth: two reagent jars feeding one product flask | No liquid colours that imply a specific reaction |
| 3 | `toastie-bread.png` | hook | A neat stack of **10** slices of white sandwich bread | Exactly 10 slices, countable |
| 4 | `toastie-cheese.png` | hook | A stack of **4** square slices of processed cheese | Exactly 4 slices |
| 5 | `toastie-made.png` | hook | **4** golden grilled cheese toasties on a plate, cheese oozing | Exactly 4 |
| 6 | `toastie-leftover.png` | hook | **2** lonely slices of bread left over | Exactly 2 (10 − 2 × 4) |
| 7 | `sodium-in-oil.png` | worked example 2 | A lump of sodium metal in a small jar under clear paraffin oil | Soft silvery metal with a freshly cut shiny face and a dull grey crust; oil is clear, not coloured |
| 8 | `chlorine-flask.png` | worked example 2 | A stoppered round-bottom flask of chlorine gas | Pale **yellow-green** gas, not bright green; glass clear |
| 9 | `salt-pile.png` | worked example 2 | A small pile of sodium chloride crystals | White/colourless **cubic** crystals |
| 10 | `hydrogen-balloon.png` | worked example 1 | A balloon filled with a gas, tethered to a small weight | Colourless gas; the balloon can be pale; no label |
| 11 | `oxygen-cylinder.png` | worked example 1 | A small upright gas cylinder with a valve | No text or colour-code label on it (colour codes differ by country) |
| 12 | `water-beaker.png` | worked example 1 | A glass beaker of clear water | Clear, colourless |
| 13 | `crown.png` | concept / formula | A small gold crown on the plinth | Marks "the limiting reagent", which sets the limit |

## How the coded layer uses them

- `reactionRun` (concept scene): two reactant plinths lose particles in the true mole
  ratio while a product plinth fills up, and a live graph of moles against reaction
  progress draws itself beside them. The limiting line hits zero; the excess line stops above zero.
- `coefficientDivide` (formula scene): Na and Cl₂ bars show raw moles
  (Na 0.435 > Cl₂ 0.282), then each bar is divided by its coefficient and the order
  **flips** (Na 0.218 < Cl₂ 0.282). The crown drops on Na.
- Both draw a **coded** plinth (`DioramaPlinth`), colour-matched to the painted one, so
  they render crisp at any size and never depend on a local file. `plinth-empty.png`
  is the colour and shape reference for that component, and the base the website
  port will reuse.
- The painted props are wired through scene `image` fields and the `ASSETS`
  registry. A missing file never fails a render: `AssetImg` draws a placeholder.
