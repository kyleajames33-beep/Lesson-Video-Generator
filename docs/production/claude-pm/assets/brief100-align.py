"""Use existing outlines for crossfade plates after image generation."""
from pathlib import Path
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

from importlib.machinery import SourceFileLoader
process = SourceFileLoader("brief100_process", str(Path(__file__).with_name("brief100-process.py"))).load_module()
ROOT, QA = process.ROOT, process.QA

# The imagegen edit gives the desired healthy leaf finish. Its outline drift is
# recorded in QA for review.
rust_path = ROOT / "public/assets/biology/m7-myrtle-rust-leaf-v1.png"
healthy_path = ROOT / "public/assets/biology/m7-myrtle-leaf-healthy-v1.png"
process.normalize(process.GEN / "exec-a58b9131-e4a8-4825-9a60-05da11bd5c4e.png", healthy_path)
process.qa(healthy_path, healthy_path.stem)

# Match the bromine-water tube glass exactly. The generated orange and faded
# images establish colour and fume appearance; shared legacy tube geometry
# makes the two new plates and the existing tubes interchangeable in place.
base = np.array(Image.open(ROOT / "public/assets/chemistry/m7-bromine-water-orange-v1.png").convert("RGBA"))
for mode, filename in [("orange", "m7-bromine-hexane-orange-v1.png"), ("faded", "m7-bromine-hexane-faded-v1.png")]:
    arr = base.copy()
    r, g, b = [arr[:, :, i].astype(np.float32) for i in range(3)]
    mask = (arr[:, :, 3] > 20) & (np.indices(arr.shape[:2])[0] > 670) & (r > g * 1.16) & (g > b * 1.20)
    if mode == "orange":
        arr[:, :, 0][mask] = np.clip(r[mask] * 0.82, 0, 255)
        arr[:, :, 1][mask] = np.clip(g[mask] * 0.64, 0, 255)
        arr[:, :, 2][mask] = np.clip(b[mask] * 0.59, 0, 255)
    else:
        lum = np.clip((r[mask] + g[mask] + b[mask]) / 3, 0, 255)
        arr[:, :, 0][mask] = np.clip(lum * 0.18 + 199, 0, 255)
        arr[:, :, 1][mask] = np.clip(lum * 0.20 + 185, 0, 255)
        arr[:, :, 2][mask] = np.clip(lum * 0.18 + 151, 0, 255)
    out = Image.fromarray(arr, "RGBA")
    if mode == "faded":
        # Faint pale vapour from the generated edit, isolated above its rim.
        gen = Image.open(process.GEN / "exec-07936f5d-432f-42e3-8046-6f766b8593a2.png").convert("RGBA")
        g = np.array(gen)
        upper = g[:180].copy()
        upper[:, :, 3] = np.where((upper[:, :, :3].mean(axis=2) > 145) & (upper[:, :, 3] > 20), upper[:, :, 3] * 0.32, 0).astype(np.uint8)
        wisp = Image.fromarray(upper, "RGBA").resize((364, 110), Image.Resampling.LANCZOS)
        out.alpha_composite(wisp, (818, 95))
    path = ROOT / "public/assets/chemistry" / filename
    out.save(path)
    process.qa(path, path.stem)

def overlay(a, b, name):
    first = Image.open(a).convert("RGBA")
    second = Image.open(b).convert("RGBA")
    mix = Image.blend(first, second, 0.5)
    bg = Image.new("RGBA", mix.size, "#f5f0e4")
    bg.alpha_composite(mix)
    bg.convert("RGB").resize((800, 800)).save(QA / name, quality=92)

overlay(ROOT / "public/assets/chemistry/m7-bromine-hexane-orange-v1.png", ROOT / "public/assets/chemistry/m7-bromine-hexane-faded-v1.png", "bromine-hexane-overlay-50.jpg")
overlay(ROOT / "public/assets/biology/m7-cattle-hoof-healthy-v1.png", ROOT / "public/assets/biology/m7-fmd-hoof-blisters-v1.png", "hoof-overlay-50.jpg")
overlay(rust_path, healthy_path, "myrtle-leaf-overlay-50.jpg")
