"""Extract ordered body paragraphs from a cached syllabus, without rendering."""
import hashlib
import json
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

source, destination = map(Path, sys.argv[1:])
raw = source.read_bytes()
with zipfile.ZipFile(source) as archive:
    info = archive.getinfo("word/document.xml")
    if info.file_size > 32 * 1024 * 1024:
        raise ValueError("Unexpected syllabus XML size")
    document = ET.fromstring(archive.read(info))
ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
body = document.find("w:body", ns)
if body is None:
    raise ValueError("Syllabus body missing")
records = []
for ordinal, paragraph in enumerate(body.iterfind(".//w:p", ns), start=1):
    text_tags = {f"{{{ns['w']}}}t", "{http://schemas.openxmlformats.org/officeDocument/2006/math}t"}
    text = "".join(node.text or "" for node in paragraph.iter() if node.tag in text_tags)
    if not text.strip():
        continue
    style = paragraph.find("w:pPr/w:pStyle", ns)
    records.append({"id": f"p{ordinal}", "style": style.get(f"{{{ns['w']}}}val") if style is not None else None, "text": text})
result = {"schemaVersion": 1, "sourceSha256": hashlib.sha256(raw).hexdigest(),
          "method": "Ordered nonempty word/document.xml body paragraphs, including tables and linear OMML text; mathematical structure, headers, footers and page layout are not preserved",
          "paragraphs": records}
destination.write_text(json.dumps(result, indent=2, ensure_ascii=True) + "\n", encoding="utf-8")
print(json.dumps({"paragraphs": len(records), "sourceSha256": result["sourceSha256"]}))
