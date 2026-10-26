"""Size and technically clean the transparent brief 103 imagegen plates."""

from pathlib import Path
from PIL import Image
import numpy as np
from PIL import ImageDraw, ImageFilter
import cv2


ROOT = Path(__file__).resolve().parents[4]
SOURCE = Path(r"C:/Users/kygs/.codex/generated_images/01a16534-fbad-7d83-a03c-c2b6c50334fc")
BIO = ROOT / "public/assets/biology"
CHEM = ROOT / "public/assets/chemistry"

AIRWAY = {
    "m7-airway-cell-v1.png": "exec-13dddbf1-560e-4bb2-87bc-e7af2421d6ac.png",
    "m7-airway-cell-infected-v1.png": "exec-f6b47465-591a-45be-b5b3-aeb6c8e5f8a5.png",
    "m7-airway-cell-apoptotic-v1.png": "exec-215db30c-4383-409b-aa7a-cfaf7d6b6bab.png",
}

NEW = {
    CHEM / "m7-spirit-burner-calorimeter-v1.png": "exec-e5d8fa6d-95b4-482c-9596-6ff65c0aa05d.png",
    CHEM / "m7-spirit-burner-calorimeter-sooty-v1.png": "exec-4712edf3-6e6c-4c0e-b5ef-3dd898180f99.png",
    CHEM / "m7-spirit-burner-calorimeter-shield-v1.png": "exec-347af793-e837-4797-ab76-d581b1290dc5.png",
    CHEM / "m7-spirit-burner-on-balance-v1.png": "exec-369b3e8b-6f7a-4002-8463-8d2d2ac63ab5.png",
    CHEM / "m7-sugarcane-stalks-v1.png": "exec-0a1d9c7e-3692-4072-9538-2c06b4a2bdf4.png",
    BIO / "m7-varicella-virus-v1.png": "exec-26ed3beb-0539-434e-a19f-a5b699d0ab53.png",
    BIO / "m7-placenta-villus-v1.png": "exec-003b0d22-ae1f-4ae7-8ee2-9b78643ca096.png",
    BIO / "m7-brown-snake-v1.png": "exec-19aa40dc-42f0-4a61-acac-86aee498504f.png",
}


def clean_and_size(source: Path, dest: Path) -> None:
    image = Image.open(source).convert("RGBA")
    pixels = np.array(image)
    alpha = pixels[:, :, 3].astype(np.float32)
    # Remove faint off-subject pixels and soft coloured fringe while keeping
    # the illustrated edge antialiased. This does not change the painting.
    alpha = np.clip((alpha - 32) * 255 / 223, 0, 255).astype(np.uint8)
    pixels[:, :, 3] = alpha
    pixels[alpha == 0, :3] = 0
    image = Image.fromarray(pixels, "RGBA").resize((1900, 1900), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (2000, 2000), (0, 0, 0, 0))
    canvas.alpha_composite(image, (50, 50))
    image = canvas
    pixels = np.array(image)
    pixels[pixels[:, :, 3] < 8, :] = 0
    dest.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(pixels, "RGBA").save(dest, optimize=True)


def fit_plate(source: Path, dest: Path, threshold=32, shared_box=None) -> None:
    image = Image.open(source).convert("RGBA")
    pixels = np.array(image)
    alpha = pixels[:, :, 3].astype(np.float32)
    alpha = np.clip((alpha - threshold) * 255 / (255 - threshold), 0, 255).astype(np.uint8)
    pixels[:, :, 3] = alpha
    pixels[alpha == 0, :3] = 0
    image = Image.fromarray(pixels, "RGBA")
    box = shared_box or image.getchannel("A").getbbox()
    image = image.crop(box)
    factor = min(1600 / image.width, 1600 / image.height)
    width, height = round(image.width * factor), round(image.height * factor)
    image = image.resize((width, height), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (2000, 2000), (0, 0, 0, 0))
    canvas.alpha_composite(image, ((2000 - width) // 2, (2000 - height) // 2))
    pixels = np.array(canvas)
    pixels[pixels[:, :, 3] < 8] = 0
    dest.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(pixels, "RGBA").save(dest, optimize=True)


def rematte_b_cell() -> None:
    path = BIO / "m7-b-cell-bare-v1.png"
    pixels = np.array(Image.open(path).convert("RGBA"))
    alpha = pixels[:, :, 3].astype(np.float32)
    pixels[:, :, 3] = np.clip((alpha - 45) * 255 / 210, 0, 255).astype(np.uint8)
    pixels[pixels[:, :, 3] < 8] = 0
    Image.fromarray(pixels, "RGBA").save(path, optimize=True)


def register_sooty_to_base() -> None:
    base = np.array(Image.open(CHEM / "m7-spirit-burner-calorimeter-v1.png").convert("RGBA"))
    sooty = np.array(Image.open(CHEM / "m7-spirit-burner-calorimeter-sooty-v1.png").convert("RGBA"))
    reference = cv2.resize(base[:, :, 3], (500, 500)).astype(np.float32) / 255
    moving = cv2.resize(sooty[:, :, 3], (500, 500)).astype(np.float32) / 255
    _, affine = cv2.findTransformECC(reference, moving, np.eye(2, 3, dtype=np.float32),
        cv2.MOTION_AFFINE, (cv2.TERM_CRITERIA_EPS | cv2.TERM_CRITERIA_COUNT, 300, 1e-7), None, 5)
    affine[:, 2] *= 4
    aligned = cv2.warpAffine(sooty, affine, (2000, 2000),
        flags=cv2.INTER_LINEAR | cv2.WARP_INVERSE_MAP, borderMode=cv2.BORDER_CONSTANT)
    Image.fromarray(aligned, "RGBA").save(CHEM / "m7-spirit-burner-calorimeter-sooty-v1.png", optimize=True)


def make_t_cell() -> None:
    # Keep the established plate unchanged, and transplant only the newly
    # generated painted granules from its ImageGen edit into the right rim.
    base = Image.open(BIO / "m7-t-cell-v1.png").convert("RGBA")
    donor = Image.open(SOURCE / "exec-e33a6e13-7455-47a7-be3b-c4ad5bd1f879.png").convert("RGBA")
    sample_centres = [(930, 393), (985, 424), (967, 518), (1026, 538), (1006, 654)]
    target_centres = [(1570, 750), (1630, 760), (1690, 790), (1580, 830),
                      (1650, 850), (1710, 875), (1585, 920), (1655, 945),
                      (1710, 970), (1600, 1020), (1670, 1040)]
    for i, (x, y) in enumerate(target_centres):
        x -= 65
        sx, sy = sample_centres[i % len(sample_centres)]
        radius = 25
        patch = donor.crop((sx-radius, sy-radius, sx+radius, sy+radius)).resize((70, 70), Image.Resampling.LANCZOS)
        mask = Image.new("L", (70, 70), 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((5, 5, 65, 65), fill=255)
        mask = mask.filter(ImageFilter.GaussianBlur(2))
        base.paste(patch, (x-35, y-35), mask)
    base.save(BIO / "m7-t-cell-killer-v1.png", optimize=True)


if __name__ == "__main__":
    for filename, original in AIRWAY.items():
        clean_and_size(SOURCE / original, BIO / filename)
        print(BIO / filename)
    chem_shared_box = (270, 20, 1080, 1170)
    for dest, original in NEW.items():
        shared = chem_shared_box if "calorimeter" in dest.name else None
        fit_plate(SOURCE / original, dest, threshold=45 if "sugarcane" in dest.name else 32, shared_box=shared)
        print(dest)
    register_sooty_to_base()
    make_t_cell()
    rematte_b_cell()
