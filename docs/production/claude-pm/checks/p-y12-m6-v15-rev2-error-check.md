# Physics Year 12 Module 6 v15 Revision 2 error check

Codex, 9 November 2026. Source SHA256 `13a48ac2ebcacb27d81e953ade04222ae45709eb47d963abe18287a8227d1a72`. Error-only repair check; original reviews retained. No design, narration, scene or speech edits.

Result: 0 blockers, 0 should fix, 0 optional.

All three brief190 should-fix findings and the author-only optional are resolved. The model's voltage is now between outgoing and return wires,with total circuit resistance and an explicit simple-model tag. The separate real three-phase grid is described by network ratings;no single-circuit current is assigned to those physical conductors. Generator wording uses root's tens-of-kilovolts fallback;25kV is an explicitly chosen thought experiment. Domestic230V is called nominal,with the previous safe claim removed. Author note a now separates maximum received78.125MW and maximum sent312.5MW.

Independent calculations in `work/brief232/v15-calculations.json`:500MW sent at250kV gives2000A,8MW loss,1.6percent loss,492MW received and4kV line drop. At500kV the values are1000A,2MW,0.4percent,498MW and2kV. The new factor slider V=1/2/4/10 gives I=1/0.5/0.25/0.1 and loss=1/0.25/0.0625/0.01 at fixed sent power and line resistance. The crossed VI product is500MW carried,not lost.

At25kV,the proposed500MW sent would require20kA,800MW loss and40kV drop,so the passive model cannot realise it. Maximising received power I(V-IR) gives current6250A and78.125MW. The boundary with zero load resistance gives maximum sent V²/R=312.5MW and12500A,with all of it lost in the line. This independently distinguishes the two author limits. The impossible input is not presented as an actual generator operating point.

The site100MW/5ohm comparison gives1000/200A at100/500kV,loss5/0.2MW and5/0.2percent,a factor25. Attempt1 gives1000A/3MW at132kV and400A/0.48MW at330kV;the loss ratio is6.25. Attempt2 gives1200V line drop and0.48MW from its square divided by3ohm. Using330kV instead gives36.3GW,correctly rounded in the crossed spoken slip. The wrong linear reduction is1.2MW. All learner readouts and spoken rounding agree.

The derivation keeps sent power fixed,so I=P/V and loss=P²R/V² are used consistently with the sent/received ledgers. The two voltage brackets distinguish source voltage from the drop across resistance. The memory card states the fixed-power/fixed-line conditions. The AC transformer chain and HVDC converter exception remain within the original checked source scope. No school-approved practical claim is made.

All17 narration strings and visual specifications were read,including the three repaired passages and live factor control. Bold and quoted cues occur in spoken order. Both question cards retain all givens through countdown and feedback. Scene sum5899characters matches the headline;estimated518s is under570. No em dash or drawn person/hand. Eight used plates exist,with uniform scaling specified and no new request.

Written v14/v15 and v15/v16 joins match,including the incoming landscape/line-loss question and outgoing power-point,power-pack,DC-motor and split-ring question. Excerpts and hashes are recorded. Integrated model/grid separation,bracket/readout fit,motion,voiced timing,captions and human listening remain pending. Shared CRT retry is separate.
