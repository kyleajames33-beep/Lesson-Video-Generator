"""Finish Chemistry plates for brief 101 and write QA observations."""
from pathlib import Path
from PIL import Image, ImageDraw
import numpy as np
import hashlib
import json

ROOT = Path(__file__).resolve().parents[4]
GEN = Path(r"C:\Users\kygs\.codex\generated_images\01a161fe-cd0c-7b12-bf77-ec3d97fb72d3")
QA = ROOT / "docs/production/claude-pm/assets/brief101-qa/chemistry"
QA.mkdir(parents=True, exist_ok=True)
DEST = ROOT / "public/assets/chemistry"

SOURCES = {
    "m7-temp-probe-sleeve-stand-v1.png": "exec-cceb41ec-66e5-4f06-ac7f-3c63cf1e0417.png",
    "m7-fume-cupboard-v1.png": "exec-1754dfcc-4f88-41d0-ae18-cb3c0f85ac94.png",
    "m7-alcohol-water-tubes-v1.png": "exec-a4be0822-82ef-4c0b-b798-2b07a02a4807.png",
    "m7-fermentation-setup-start-v1.png": "exec-050a256e-1b79-4c4d-addd-377b35abbf98.png",
    "m7-fermentation-setup-bubbling-v1.png": "exec-97752f6f-d882-4f98-a717-1e6d4b4e9aca.png",
    "m7-bromine-layers-orange-top-v1.png": "exec-a99d4ae9-452d-4368-8a40-f8313d551f20.png",
    "m7-bromine-layers-colourless-v1.png": "exec-b43062c4-d4ec-4d78-8cec-cd5804e945a5.png",
    "m7-bromine-water-control-v1.png": "exec-17c0ee56-beae-4e1e-89c0-22cb6adeed68.png",
}

def alpha_box(im):
    return im.getchannel("A").point(lambda v: 255 if v > 12 else 0).getbbox()

def normal(src, max_extent=1600, fixed_crop=None):
    im = Image.open(src).convert("RGBA")
    box = fixed_crop or alpha_box(im)
    crop = im.crop(box)
    ratio = min(max_extent / crop.width, max_extent / crop.height)
    crop = crop.resize((round(crop.width * ratio), round(crop.height * ratio)), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (2000, 2000))
    canvas.alpha_composite(crop, ((2000 - crop.width)//2, (2000 - crop.height)//2))
    return canvas

def tube(src):
    im = Image.open(src).convert("RGBA")
    crop = im.crop(alpha_box(im))
    # This is the exact alpha box of the existing bromine-water-orange tube.
    crop = crop.resize((364, 1600), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (2000, 2000))
    canvas.alpha_composite(crop, (818, 200))
    # The original tube holds roughly half its height of liquid. This practical
    # shows 3.0 mL after 2.0 mL, so lift the new meniscus from y~680 to y~495
    # while leaving the reference glass rim, walls and rounded base in place.
    data=np.array(canvas)
    fixed=data.copy()
    for y in range(495, 1800):
        src_y=round(680+(y-495)*(1800-680)/(1800-495))
        src_y=min(1799,src_y)
        fixed[y,850:1150,:3]=data[src_y,850:1150,:3]
    # Feather the interior against the unchanged glass sidewalls.
    for x in list(range(850,862))+list(range(1138,1150)):
        weight=min(1,(x-850)/12,(1150-x)/12)
        fixed[495:1800,x,:3]=(fixed[495:1800,x,:3]*weight+data[495:1800,x,:3]*(1-weight)).astype(np.uint8)
    canvas=Image.fromarray(fixed,"RGBA")
    return canvas

def preview(im, name):
    cream = Image.new("RGBA", im.size, "#f5f0e4")
    cream.alpha_composite(im)
    cream.convert("RGB").resize((500, 500)).save(QA / f"{name}-cream.jpg", quality=90)
    check = Image.new("RGB", im.size, "#f5f5f5")
    d = ImageDraw.Draw(check)
    for y in range(0, 2000, 100):
        for x in range(0, 2000, 100):
            if (x//100 + y//100) % 2:
                d.rectangle((x,y,x+99,y+99), fill="#bcbcbc")
    check.paste(im, mask=im.getchannel("A"))
    check.resize((500,500)).save(QA / f"{name}-checker.jpg", quality=90)

def overlay(a,b,name):
    first = Image.open(a).convert("RGBA")
    second = Image.open(b).convert("RGBA")
    mix = Image.blend(first, second, 0.5)
    cream = Image.new("RGBA", mix.size, "#f5f0e4")
    cream.alpha_composite(mix)
    cream.convert("RGB").resize((800,800)).save(QA / name, quality=92)

start_crop = alpha_box(Image.open(GEN / SOURCES["m7-fermentation-setup-start-v1.png"]).convert("RGBA"))
records=[]
for name, source in SOURCES.items():
    if name.startswith("m7-bromine-"):
        im = tube(GEN / source)
    elif name.startswith("m7-fermentation-"):
        im = normal(GEN / source, fixed_crop=start_crop)
    else:
        im = normal(GEN / source)
    path = DEST / name
    im.save(path)
    preview(im, path.stem)
    box=alpha_box(im)
    margins=[box[0]/2000,box[1]/2000,(2000-box[2])/2000,(2000-box[3])/2000]
    records.append({"path": path.relative_to(ROOT).as_posix(), "sourceGenerated": str(GEN/source),
                    "size": [2000,2000], "mode":"RGBA", "alphaBbox12":box,
                    "clearMargins":margins, "sha256":hashlib.sha256(path.read_bytes()).hexdigest()})

ref=DEST/"m7-bromine-water-orange-v1.png"
for name in ["m7-bromine-layers-orange-top-v1.png","m7-bromine-layers-colourless-v1.png","m7-bromine-water-control-v1.png"]:
    overlay(ref, DEST/name, f"{Path(name).stem}-overlay-existing-50.jpg")
overlay(DEST/"m7-bromine-layers-orange-top-v1.png",DEST/"m7-bromine-layers-colourless-v1.png","bromine-layers-overlay-50.jpg")
overlay(DEST/"m7-fermentation-setup-start-v1.png",DEST/"m7-fermentation-setup-bubbling-v1.png","fermentation-overlay-50.jpg")
(QA/"audit.json").write_text(json.dumps(records,indent=2)+"\n")
print(f"Wrote {len(records)} Chemistry plates")
