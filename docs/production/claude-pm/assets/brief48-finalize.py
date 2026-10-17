"""Finalize generated brief 48 plates and make QA views. One-off research script."""
from PIL import Image, ImageChops, ImageDraw, ImageFilter
from pathlib import Path
import hashlib
import json

ROOT = Path('C:/lesson-video-generator')
SOURCE = Path('C:/Users/kygs/.codex/generated_images/01a14425-a7fe-7460-8eb6-91dec7eb47ab')
DEST = ROOT / 'public/assets/biology'
QA = ROOT / 'docs/production/claude-pm/assets/brief48-qa'
QA.mkdir(parents=True, exist_ok=True)

ITEMS = [
    ('m6-uv-skin-v1', 'exec-4c893968-9542-4576-83f2-5bc30d179e06', 'sunlight and UV exposure to skin', 'M6 L02, L05'),
    ('m6-xray-machine-film-v1', 'exec-719b7e71-a6c4-487a-b8e7-663a9b8948cb', 'X-ray machine and film', 'M6 L02'),
    ('m6-shielded-source-v1', 'exec-e44a9253-c4c7-4452-a0d2-01e4147f3a12', 'radioactive source in lead shield', 'M6 L02'),
    ('m6-virus-particle-v1', 'exec-b1d8653f-2107-4e13-b25b-ca26d51b396c', 'generic virus particle', 'M6 L02'),
    ('m6-red-cells-normal-sickle-v1', 'exec-0606a137-53f0-4841-a68d-1e8c37faaec7', 'normal and sickled red cells on one plate', 'M6 L03, L10'),
    ('m6-egg-sperm-dish-v1', 'exec-1c265ee9-703d-4b98-ad92-d14a9bdb109d', 'egg and sperm in petri dish', 'brief 48 technology example'),
    ('m6-microscope-v1', 'exec-32cac970-2ca8-43f2-a359-256ff3ff2c5c', 'compound microscope', 'brief 48 technology example'),
    ('m6-icsi-v1', 'exec-b34ae982-bc3a-45ce-8bd2-1904f130430f', 'ICSI injection closeup', 'brief 48 technology example'),
    ('m6-insemination-straw-tank-v1', 'exec-fc00849f-787b-4f89-a769-93e7bc0edad5', 'artificial insemination straw and storage tank', 'M6 L13, L14'),
    ('m6-white-sheep-v1', 'exec-be785a23-7a5c-4a45-be3e-e81659a8344f', 'generic white sheep for cloning', 'M6 L15'),
    ('m6-cutting-compare-v1', 'exec-1b043c01-7076-470e-b35d-d16e8a2392b5', 'fresh and rooted cutting on one plate', 'brief 48 cloning example'),
    ('m6-cutting-potted-pair-v1', 'exec-48894c42-5db6-42c7-88f9-9bde3f2525e2', 'same potted cutting before and after roots grow', 'brief 48 cloning example'),
    ('m6-tissue-culture-jars-v1', 'exec-da65bfd9-4d3a-4844-a888-586c984f116a', 'plant tissue culture jars', 'brief 48 cloning example'),
    ('m6-bacterium-plasmid-v1', 'exec-b79055ca-fca1-4a8d-b635-570abc353180', 'bacterium with plasmid', 'M6 L15, L16'),
    ('m6-bt-cotton-v1', 'exec-6099ad29-34d1-4efe-b9a4-897439d55f9c', 'Bt cotton plant', 'M6 L13'),
    ('m6-golden-white-rice-v1', 'exec-5b23f998-a04e-4685-9cb9-8350faef244a', 'Golden Rice and white rice matched piles', 'M6 L09'),
    ('m6-insulin-vial-v1', 'exec-69d906db-6a85-434d-b3fc-f606bab55906', 'plain insulin vial', 'M6 L08, L16, L17'),
    ('m6-field-monoculture-mixed-v1', 'exec-927c3491-423f-4e29-9a17-e69801dfb431', 'monoculture and mixed field on one plate', 'M6 L11'),
    ('m6-seed-bank-vault-v1', 'exec-ee0affdb-f452-4031-8dd7-795cb5700c48', 'seed bank vault interior', 'M6 L11 gene bank concept'),
    ('m6-cutting-water-start-v1', 'exec-7f127540-6d1d-4222-8608-2eecd0fd99cd', 'mint cutting in water without roots', 'brief 48 process pair'),
    ('m6-cutting-water-end-v1', 'exec-e4640eb4-5e55-496f-b77e-ca517db8f211', 'same cutting after roots grow', 'brief 48 process pair'),
    ('m6-plasmid-uptake-start-v1', 'exec-e05c2de6-2315-407e-8d62-fb60c8ef8998', 'plasmid outside bacterium', 'M6 L16 process pair'),
    ('m6-plasmid-uptake-end-v1', 'exec-e6e6f2d9-48bf-4595-a17d-7d690c180272', 'same plasmid inside bacterium', 'M6 L16 process pair'),
]

PAIRS = [
    ('m6-cutting-water-start-v1', 'm6-cutting-water-end-v1'),
    ('m6-plasmid-uptake-start-v1', 'm6-plasmid-uptake-end-v1'),
]

def alpha_bbox(image):
    return image.getchannel('A').point(lambda x: 255 if x >= 12 else 0).getbbox()

raw = {name: Image.open(SOURCE / f'{source}.png').convert('RGBA') for name, source, _, _ in ITEMS}
for a, b in PAIRS:
    if raw[a].size != raw[b].size:
        raise ValueError(f'Pair size mismatch: {a}, {b}')

pair_lookup = {name: group for group in PAIRS for name in group}
processed = {}
for name, _, _, _ in ITEMS:
    image = raw[name]
    group = pair_lookup.get(name, (name,))
    boxes = [alpha_bbox(raw[n]) for n in group]
    left = min(box[0] for box in boxes)
    top = min(box[1] for box in boxes)
    right = max(box[2] for box in boxes)
    bottom = max(box[3] for box in boxes)
    # The same crop and transform is used for both members of an aligned pair.
    cropped = image.crop((left, top, right, bottom))
    factor = min(1600 / cropped.width, 1600 / cropped.height)
    width = round(cropped.width * factor)
    height = round(cropped.height * factor)
    scaled = cropped.resize((width, height), Image.Resampling.LANCZOS)
    canvas = Image.new('RGBA', (2000, 2000), (0, 0, 0, 0))
    canvas.alpha_composite(scaled, ((2000 - width) // 2, (2000 - height) // 2))
    processed[name] = canvas

# Imagegen produced the requested new content in each end frame but repainted
# unchanged details. Keep those details pixel-identical to the start frame.
cut_start = processed['m6-cutting-water-start-v1']
cut_generated_end = processed['m6-cutting-water-end-v1']
cut_mask = Image.new('L', (2000, 2000), 0)
for y in range(1080, 1660):
    for x in range(720, 1280):
        sr, sg, sb, sa = cut_start.getpixel((x, y))
        er, eg, eb, ea = cut_generated_end.getpixel((x, y))
        # Warm cream root strokes appear over cool blue water. Keep the old
        # stem and every glass detail unchanged.
        if sa > 180 and ea > 180 and sb > sr + 3 and sb >= sg and er > 175 and eg > 175 and eb < eg - 5 and eb < er - 8:
            cut_mask.putpixel((x, y), 255)
cut_mask = cut_mask.filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.GaussianBlur(1.2))
cut_end = cut_start.copy()
cut_end.paste(cut_generated_end, (0, 0), cut_mask)
processed['m6-cutting-water-end-v1'] = cut_end

plasmid_start = processed['m6-plasmid-uptake-start-v1']
plasmid_end = plasmid_start.copy()
ring_box = (1610, 1030, 1830, 1250)
ring = plasmid_start.crop(ring_box)
ImageDraw.Draw(plasmid_end).rectangle(ring_box, fill=(0, 0, 0, 0))
plasmid_end.alpha_composite(ring, (1325, 925))
processed['m6-plasmid-uptake-end-v1'] = plasmid_end

for name, canvas in processed.items():
    canvas.save(DEST / f'{name}.png')

records = []
for name, source, prompt_summary, site in ITEMS:
    image = processed[name]
    path = DEST / f'{name}.png'
    bbox = alpha_bbox(image)
    margins = [bbox[0]/2000, bbox[1]/2000, (2000-bbox[2])/2000, (2000-bbox[3])/2000]
    if min(margins) < 0.08:
        raise ValueError(f'Margin below 8 percent: {name}: {margins}')
    cream = Image.new('RGB', (200, 200), '#f6f1e7')
    small = image.resize((200, 200), Image.Resampling.LANCZOS)
    cream.paste(small, (0, 0), small)
    cream.save(QA / f'{name}-200-cream.png')
    checker = Image.new('RGB', (200, 200), '#ffffff')
    draw = ImageDraw.Draw(checker)
    for y in range(0, 200, 20):
        for x in range(0, 200, 20):
            if ((x+y)//20) % 2 == 0:
                draw.rectangle((x, y, x+19, y+19), fill='#d9d9d9')
    checker.paste(small, (0, 0), small)
    checker.save(QA / f'{name}-200-checker.png')
    records.append({
        'path': path.relative_to(ROOT).as_posix(),
        'sha256': hashlib.sha256(path.read_bytes()).hexdigest(),
        'size': list(image.size),
        'mode': image.mode,
        'alphaBox': list(bbox),
        'clearMargins': [round(n, 4) for n in margins],
        'generator': 'OpenAI built-in imagegen',
        'generatedSource': str(SOURCE / f'{source}.png'),
        'promptSummary': prompt_summary,
        'siteExample': site,
        'postprocess': 'Alpha bounding box centred and resized to a 2000 px transparent canvas. Pair members used one shared transform. End frames preserve unchanged pixels from the start frame.',
        'qaCream200': (QA / f'{name}-200-cream.png').relative_to(ROOT).as_posix(),
        'qaChecker200': (QA / f'{name}-200-checker.png').relative_to(ROOT).as_posix(),
    })

pair_qa = []
for a, b in PAIRS:
    first, second = processed[a], processed[b]
    overlay = Image.blend(first, second, 0.5)
    overlay.save(QA / f'{a}--{b}-overlay.png')
    diff = ImageChops.difference(first, second)
    diff.save(QA / f'{a}--{b}-difference.png')
    nonzero = sum(1 for p in diff.getdata() if any(p))
    pair_qa.append({'start': a, 'end': b, 'differencePixelFraction': round(nonzero / 4000000, 4), 'overlay': (QA / f'{a}--{b}-overlay.png').relative_to(ROOT).as_posix(), 'difference': (QA / f'{a}--{b}-difference.png').relative_to(ROOT).as_posix()})

provenance = {
    'brief': 48,
    'date': '2026-10-16',
    'scope': 'Biology Module 6 painted plates',
    'records': records,
    'pairQA': pair_qa,
    'omitted': ['cigarette smoke: no smoking example in Module 6 site extracts', 'albinism animal and flower variant: Module 6 site extracts use sickle cells instead', 'GM salmon pair: no salmon example in Module 6 site extracts'],
}
(ROOT / 'docs/production/claude-pm/assets/brief48-provenance.json').write_text(json.dumps(provenance, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'plates': len(records), 'pairs': pair_qa, 'minMargin': min(min(r['clearMargins']) for r in records)}, indent=2))
