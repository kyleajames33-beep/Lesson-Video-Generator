# Brief220 measured-spectra progress

The five designs remain on recording hold. No design was edited. The current retrieval is incomplete.

SDBS search redirects to its disclaimer. Its terms prohibit automated collection, and the browser host is unavailable for manual inspection. No automated SDBS search or spectrum collection was performed. The open NMRShiftDB service is the alternative primary database. Its documented search-or-predict API was queried once for each nucleus for36 compounds. Original CML files, URLs, hashes, record identifiers, solvents, fields and atom-assigned peaks are in nmr-fetch-log.json and nmr-records.json. IDs alone are not enough: one ACD program record has an accession but still lacks experimental conditions, and five responses explicitly identify HOSE-code predictions. These are not measured references.

## Confirmed numerical finding

chem-m8-g03 and chem-m8-c11b mention3-methylbutan-2-one. Its inspected13C NMRShiftDB record10014252, molecule10008779, CDCl3, lists18.3,27.4,41.7,211.4ppm. g03 gives18.2,27.5,41.6,212.6ppm and prints213 on its question card. The carbonyl differs by1.2ppm from the detailed value and1.6ppm from the printed value. Use one measured set throughout the drawing, card, model answer and repeated values. The four-environment deduction remains valid. The field is unreported in this13C record, recorded openly rather than invented.

The1H record10144046, CDCl3,300MHz, gives1.04,2.07,2.53ppm (the equivalent methyl groups are assigned separately at1.04). These lie within0.1ppm of the remembered1.10,2.13,2.58, but the plotted values should identify the chosen actual record. A carbon13 peak multiplicity code is not a proton n+1 splitting pattern.

## Remaining gaps

Solvent-unreported13C records cannot certify remembered CDCl3 values. Field-unreported1H records fail the explicit c11b condition. Predicted methyl propanoate, methyl methanoate, ethyl propanoate, pentanal and propyl ethanoate proton responses cannot lift their holds. The pentan-3-ol13C response names ACD/Labs Predictors and DB and reports no solvent/field, so it is also not certified. Missing exchangeable acid/OH peaks in an assigned list do not prove absence or establish a fixed exchangeable shift. Full line shapes and coupling constants are not reconstructed from peak-height fields.

NIST36 catalogs were downloaded and compound titles checked. Three initial candidate CAS IDs were wrong and are preserved as failed lookups; corrected records identify pivalic acid C75989,3-buten-2-ol C598323 and methyl propionate C554121. The corrected titles, not the failed candidate lookups, identify these compounds. Initial name-query requests returned403; direct-ID catalogs succeeded. ir-catalog-index.json distinguishes phase and method.

Six JCAMP files were saved before the propanal request triggered the script's HTTP429 stop. No further NIST request was made. The three neat-liquid transmission datasets already known for cyclohexane,tert-butanol and butan-1-ol were recovered. Ethanol and propan-2-ol files contain dispersion-index and absorption-index blocks, not measured transmission curves at a known film thickness. They cannot validate the requested transmission depths. Propylamine's recovered IR is gas phase. No gas, solution or optical-constant ordinate was substituted for a liquid-film trace. Other compound retrievals and comparisons remain pending after this access stop.

Primary documentation: [NMRShiftDB automation interfaces](https://sourceforge.net/p/nmrshiftdb2/wiki/AutomationInterfaces/), [SDBS disclaimer](https://sdbs.db.aist.go.jp/Htmls/disclaimer_eng.html). Each data request URL is in the local fetch logs. This is a partial retrieval handoff, not a recording clearance.


## Additional primary measured tables

The UCSB-hosted PDF is a combined document, not solely Fulmer2010. Its Gottlieb1997 tables were visually inspected on PDFpages3/4, with method on page2: CDCl3,300.1MHz proton,75.5MHz carbon,24+/-1C. Solvent-labelled measured shifts and patterns for eight relevant compounds are saved in gottlieb1997-cdcl3-measurements.json. Their drawn shifts stay within the design tolerances. This supplements database records missing those conditions; it does not create database accessions or lift the remaining IR/compound holds. DOI10.1021/jo971176v. No fixed exchanging-OH or missing-COOH conclusion is inferred.

##11November follow-up

Recovered ethanoic-acid-ir.jdx from NIST C64197,index2,Coblentz4819 through the browser. It is a solution transmission record with stated solvents/path lengths, not neat liquid, and does not lift c10's phase-specific hold. Primary page and file hash in ir-browser-nov11.json. Local request returned403; next acetone10188 download stalled with no file received. Remaining retrievals not marked complete. Earlier429 stop history retained.
