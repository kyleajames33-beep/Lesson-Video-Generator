from PIL import Image, ImageDraw, ImageFont, ImageFilter
from pathlib import Path
import json, math, random, hashlib

ROOT = Path(__file__).resolve().parents[5]
OUT = Path(__file__).resolve().parent
ASSETS = ROOT / 'public' / 'assets'
W, H = 1280, 720
FONT = Path('C:/Windows/Fonts')
random.seed(24)

def font(name, size):
    return ImageFont.truetype(str(FONT / name), size)

def paper(base=(246,239,224), grain=8):
    noise = Image.effect_noise((W,H), 30).convert('L').filter(ImageFilter.GaussianBlur(0.8))
    c = Image.new('RGB', (W,H), base)
    c = Image.blend(c, Image.merge('RGB',(noise,noise,noise)), grain/255)
    return c.convert('RGBA')

def asset(rel):
    im = Image.open(ASSETS / rel).convert('RGBA')
    return im.crop(im.getbbox())

def put(canvas, rel, box, rotate=0):
    im = asset(rel)
    bw,bh=box[2]-box[0],box[3]-box[1]
    im.thumbnail((bw,bh),Image.Resampling.LANCZOS)
    if rotate: im=im.rotate(rotate,Image.Resampling.BICUBIC,expand=True)
    x=box[0]+(bw-im.width)//2; y=box[1]+(bh-im.height)//2
    canvas.alpha_composite(im,(x,y))

def word(canvas, s, xy, size, color, face='arialbd.ttf', stroke=0, stroke_color=None):
    d=ImageDraw.Draw(canvas)
    d.text(xy,s,font=font(face,size),fill=color,stroke_width=stroke,stroke_fill=stroke_color or color)

def brand(canvas, color, x=44,y=664):
    word(canvas,'HSCScience',(x,y),28,color,'arialbd.ttf')

def line(canvas, points, fill, width=5):
    ImageDraw.Draw(canvas).line(points,fill=fill,width=width,joint='curve')

def style_a(subject):
    c=paper()
    d=ImageDraw.Draw(c)
    d.ellipse((644,70,1220,642),fill=(253,250,241,255),outline=(215,199,169,255),width=3)
    if subject=='c3':
        d.ellipse((70,76,650,640),fill=(241,232,209,145))
        word(c,'WHY',(78,155),118,(41,65,50),'Inkfree.ttf')
        word(c,'COLOURS',(75,284),100,(41,65,50),'Inkfree.ttf')
        word(c,'CHANGE?',(78,400),99,(41,65,50),'Inkfree.ttf')
        put(c,'chemistry/c3-cobalt-tube-pink-v1.png',(683,85,938,630))
        put(c,'chemistry/c3-cobalt-tube-blue-v1.png',(924,85,1179,630))
        line(c,[(845,526),(929,559),(1001,535)],(77,112,85),7)
        brand(c,(60,81,62))
    else:
        d.ellipse((60,72,642,643),fill=(234,238,226,170))
        word(c,'HOW',(72,155),124,(47,78,91),'Inkfree.ttf')
        word(c,'CELLS',(75,288),120,(47,78,91),'Inkfree.ttf')
        word(c,'SPLIT?',(75,422),118,(47,78,91),'Inkfree.ttf')
        put(c,'biology/b2c-amoeba-fission-3-v1.png',(638,170,1234,566))
        brand(c,(55,79,88))
    return c

def style_b(subject):
    c=Image.new('RGBA',(W,H),(242,238,225,255));d=ImageDraw.Draw(c)
    if subject=='c3':
        d.rectangle((0,0,640,H),fill=(239,207,208,255))
        d.rectangle((640,0,W,H),fill=(189,215,225,255))
        d.polygon([(595,0),(674,0),(636,H),(557,H)],fill=(251,248,235,255))
        word(c,'COOL',(61,47),107,(88,45,70),'arialbd.ttf')
        word(c,'HEAT',(777,47),107,(29,70,91),'arialbd.ttf')
        put(c,'chemistry/c3-cobalt-tube-pink-v1.png',(202,151,490,638))
        put(c,'chemistry/c3-cobalt-tube-blue-v1.png',(811,151,1099,638))
        d.ellipse((600,326,680,406),fill=(252,249,239,255),outline=(64,72,64,255),width=4)
        line(c,[(622,366),(658,366)],(64,72,64),6)
        d.polygon([(652,353),(672,366),(652,379)],fill=(64,72,64,255))
        brand(c,(57,61,62))
    else:
        d.rectangle((0,0,640,H),fill=(217,235,231,255))
        d.rectangle((640,0,W,H),fill=(196,219,232,255))
        d.polygon([(604,0),(676,0),(638,H),(566,H)],fill=(250,248,235,255))
        word(c,'ONE',(69,47),111,(31,72,82),'arialbd.ttf')
        word(c,'TWO',(817,47),111,(31,72,82),'arialbd.ttf')
        put(c,'biology/b2c-amoeba-fission-1-v1.png',(91,192,558,564))
        put(c,'biology/b2c-amoeba-fission-3-v1.png',(698,205,1218,567))
        d.ellipse((600,327,680,407),fill=(252,249,239,255),outline=(45,86,93,255),width=4)
        line(c,[(623,367),(658,367)],(45,86,93),6)
        d.polygon([(652,354),(672,367),(652,380)],fill=(45,86,93,255))
        brand(c,(48,75,82))
    return c

def style_c(subject):
    c=paper((250,248,239),5);d=ImageDraw.Draw(c)
    if subject=='c3':
        band=(48,103,74,255);dark=(35,69,49)
        d.rectangle((0,0,512,H),fill=band)
        d.rectangle((499,0,517,H),fill=(157,187,129,255))
        word(c,'LE',(46,170),92,(250,248,235),'arialbd.ttf')
        word(c,'CHATELIER',(42,272),73,(250,248,235),'arialbd.ttf')
        d.line((50,382,450,382),fill=(191,220,166),width=7)
        put(c,'chemistry/c3-cobalt-tube-purple-v1.png',(536,53,844,640))
        put(c,'chemistry/c3-iron-tube-deep-v1.png',(844,95,1129,618))
        d.ellipse((1124,132,1199,207),fill=(231,124,105,255))
        brand(c,(245,242,226),x=48,y=651)
    else:
        band=(38,91,119,255)
        d.rectangle((0,0,512,H),fill=band)
        d.rectangle((499,0,517,H),fill=(144,194,208,255))
        word(c,'SPLIT',(43,184),101,(250,248,238),'arialbd.ttf')
        word(c,'OR BUD',(43,302),82,(250,248,238),'arialbd.ttf')
        d.line((50,410,449,410),fill=(158,209,220),width=7)
        put(c,'biology/b2c-amoeba-fission-3-v1.png',(526,130,919,447))
        put(c,'biology/b2c-acineta-bud-v1.png',(864,114,1267,566))
        brand(c,(246,248,240),x=48,y=651)
    return c

files=[]
for subject in ('c3','b2c'):
    for letter, fn in [('A',style_a),('B',style_b),('C',style_c)]:
        name=f'{subject}-{letter}.png'
        fn(subject).convert('RGB').save(OUT/name,optimize=True)
        files.append(name)

sources=sorted({str(p.relative_to(ROOT)).replace('\\','/') for p in [
    *ASSETS.glob('chemistry/c3-*.png'),
    *ASSETS.glob('biology/b2c-*.png'),
]})
used={
 'c3-A':['chemistry/c3-cobalt-tube-pink-v1.png','chemistry/c3-cobalt-tube-blue-v1.png'],
 'b2c-A':['biology/b2c-amoeba-fission-3-v1.png'],
 'c3-B':['chemistry/c3-cobalt-tube-pink-v1.png','chemistry/c3-cobalt-tube-blue-v1.png'],
 'b2c-B':['biology/b2c-amoeba-fission-1-v1.png','biology/b2c-amoeba-fission-3-v1.png'],
 'c3-C':['chemistry/c3-cobalt-tube-purple-v1.png','chemistry/c3-iron-tube-deep-v1.png'],
 'b2c-C':['biology/b2c-amoeba-fission-3-v1.png','biology/b2c-acineta-bud-v1.png'],
}
prov={
 'brief':'docs/production/claude-pm/codex-prompts/24-youtube-thumbnail-concepts.md',
 'method':'Pillow composition of existing transparent painted plates; no AI image generation',
 'canvas':'1280 x 720 RGB PNG',
 'style_prompts':{
  'A':'Warm textured paper, light painted plate, large hand-lettered scientific question, quiet botanical notebook feel.',
  'B':'Strong equal split with a clear left-to-right change; two large words and contrasting plate states.',
  'C':'Clean subject colour band, oversized title, painted plate cutouts on an open light field.'
 },
 'assets':{k:[f'public/assets/{v}' for v in vals] for k,vals in used.items()},
 'font_sources':['C:/Windows/Fonts/Inkfree.ttf','C:/Windows/Fonts/arialbd.ttf'],
 'background':'Generated in Pillow with subtle procedural noise; no external image source.',
 'output_sha256':{n:hashlib.sha256((OUT/n).read_bytes()).hexdigest() for n in files},
}
(OUT/'provenance.json').write_text(json.dumps(prov,indent=2)+'\n',encoding='utf-8')
