# Syllabus ledgers

These six JSON files are brief 45's science content-point ledgers. They were extracted from NESA's public syllabus documents on 16 October 2026. Run `python docs/production/programme/syllabus/generate_ledgers.py` to rebuild them. The generator needs `python-docx` and `beautifulsoup4`.

| File | Main points |
| --- | ---: |
| `chem-2017-y12.json` | 68 across Modules 5 to 8 |
| `bio-2017-y12.json` | 58 across Modules 5 to 8 |
| `chem-new-y11.json` | 133, including 34 Working scientifically points |
| `chem-new-y12.json` | 170, including 34 Working scientifically points |
| `bio-new-y11.json` | 121, including 32 Working scientifically points |
| `bio-new-y12.json` | 151, including 32 Working scientifically points |

The 2017 `text` field is the top-level bullet. Nested example bullets appear in `examples`. The page number comes from the official Word file's last rendered page-break markers. Check the page in Word if using it in a public citation, since pagination can change when the file is opened with different settings.

The 2025 `text` field is readable plain text from NESA's live content page. `sourceHtml` retains the source markup, including formula layout and glossary links. `includingStatements` is included when NESA attaches one. NESA's HTML content pages have no page numbers, so `page` is null and `sourceUrl` points to the focus area. Each Year 11 and Year 12 file includes Working scientifically as `FA0`; schools integrate those points with the other focus areas.

`depthStudyOrPractical` is an automated keyword flag to help reviewers find likely investigation points. It is not an official classification. A false value does not mean a point cannot be taught practically. NESA also sets separate course-wide depth-study and investigation requirements, which the point flags do not replace.

Sources: [2017 Chemistry syllabus](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017), [2017 Biology syllabus](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/biology-stage-6-2017), [2025 Chemistry content](https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/content), [2025 Biology content](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content).
