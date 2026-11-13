"""Build public/fonts/{inter-tight,caveat}-subsup-wght-normal.woff2.

Supplementary variable fonts (same wght axis as the source) holding Unicode
subscript and superscript characters that the latin subsets lack. Each glyph
is the family's own base glyph scaled by the ratio of its designed superscript
two (U+00B2) to its two (Inter Tight 0.60, Caveat 0.78) and moved to a
sub/superscript position. Like the designed superiors, the source weight is
boosted so stems are not thinned by the scale; the boost per master is chosen
by matching ink area to the designed superscript two.
Run: python build-subsup-font.py <repo root> inter|caveat
"""
import sys, os
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools.pens.areaPen import AreaPen
from fontTools.pens.recordingPen import DecomposingRecordingPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.fontBuilder import FontBuilder
from fontTools.ttLib.tables.TupleVariation import TupleVariation

ROOT = sys.argv[1]
WHICH = sys.argv[2] if len(sys.argv) > 2 else 'inter'
_src = TTFont(os.path.join(ROOT, 'public/fonts/%s-latin-wght-normal.woff2' % ('inter-tight' if WHICH == 'inter' else 'caveat')))
SRC = os.path.join(ROOT, 'public/fonts/%s-latin-wght-normal.woff2' % ('inter-tight' if WHICH == 'inter' else 'caveat'))
OUT = os.path.join(ROOT, 'public/fonts/%s-subsup-wght-normal.woff2' % ('inter-tight' if WHICH == 'inter' else 'caveat'))
SUPS = _src.getBestCmap()[0xB2]          # the font's own designed superscript two
UPM = _src['head'].unitsPerEm
_g = _src['glyf']
S = round((_g[SUPS].yMax - _g[SUPS].yMin) / (_g['two'].yMax - _g['two'].yMin), 2)   # Inter 0.60, Caveat 0.78
SUP_DY = round(_g[SUPS].yMin - S * _g['two'].yMin)   # sit on the designed superscript baseline
SUB_DY = round(-0.137 * UPM)                          # subscript baseline shift, 0.137 em
AX = _src['fvar'].axes[0]
DIGITS = ['zero','one','two','three','four','five','six','seven','eight','nine']

SPEC = {}  # codepoint -> (base glyph, dy, centre-on-digits)
for i, d in enumerate(DIGITS): SPEC[0x2080 + i] = (d, SUB_DY, False)
for cp, g in [(0x208A,'plus'),(0x208B,'minus'),(0x208C,'equal'),(0x208D,'parenleft'),(0x208E,'parenright')]: SPEC[cp] = (g, SUB_DY, True)
for cp, g in [(0x2090,'a'),(0x2091,'e'),(0x2092,'o'),(0x2093,'x'),(0x2095,'h'),(0x2096,'k'),(0x2097,'l'),(0x2098,'m'),(0x2099,'n'),(0x209A,'p'),(0x209B,'s'),(0x209C,'t'),(0x1D62,'i'),(0x1D63,'r'),(0x1D64,'u'),(0x1D65,'v'),(0x2C7C,'j')]: SPEC[cp] = (g, SUB_DY, False)
SPEC[0x2070] = ('zero', SUP_DY, False)
for i in range(4, 10): SPEC[0x2070 + i] = (DIGITS[i], SUP_DY, False)
for cp, g in [(0x207A,'plus'),(0x207B,'minus'),(0x207C,'equal'),(0x207D,'parenleft'),(0x207E,'parenright')]: SPEC[cp] = (g, SUP_DY, True)
SPEC[0x2071] = ('i', SUP_DY, False); SPEC[0x207F] = ('n', SUP_DY, False)

src = TTFont(SRC)
cmap = src.getBestCmap()
for cp in SPEC: assert cp not in cmap, hex(cp)
inst_cache = {}
def inst(w):
    if w not in inst_cache: inst_cache[w] = instancer.instantiateVariableFont(TTFont(SRC), {'wght': w})
    return inst_cache[w]
def area(t, n):
    gs = t.getGlyphSet(); p = AreaPen(gs); gs[n].draw(p); return abs(p.value)

def boosted(master):
    """Weight whose scaled 'two' matches the ink of the designed superscript two at this master."""
    if master >= AX.maxValue: return int(AX.maxValue)
    target = area(inst(master), SUPS)
    best = min(range(int(master), int(AX.maxValue) + 1, 10), key=lambda w: abs(S * S * area(inst(w), 'two') - target))
    return best
MIN, DEF, MAX = int(AX.minValue), int(AX.defaultValue), int(AX.maxValue)
MASTERS = {w: boosted(w) for w in sorted({MIN, DEF, MAX})}
print(WHICH, 'scale', S, 'sub dy', SUB_DY, 'sup dy', SUP_DY, 'source weight per master', MASTERS)

def draw(t, name, dy_total):
    gs = t.getGlyphSet(); rec = DecomposingRecordingPen(gs); gs[name].draw(rec)
    pen = TTGlyphPen(None); rec.replay(TransformPen(pen, (S, 0, 0, S, 0, dy_total)))
    g = pen.glyph(); return g, round(S * t['hmtx'][name][0])

def digit_centre(t):  # noqa
    g = t['glyf']['two']; return S * (g.yMin + g.yMax) / 2
def centre_shift(t, name):
    g = t['glyf'][name]; return digit_centre(t) - S * (g.yMin + g.yMax) / 2

glyph_order = ['.notdef']
glyphs = {'.notdef': TTGlyphPen(None).glyph()}
metrics = {'.notdef': (1024, 0)}
variations = {}
new_cmap = {}
default = inst(MASTERS[DEF])
for cp in sorted(SPEC):
    base, dy, centre = SPEC[cp]
    name = 'uni%04X' % cp
    shift = round(centre_shift(default, base)) if centre else 0
    per = {}
    for m, w in MASTERS.items():
        g, adv = draw(inst(w), base, dy + shift)
        per[m] = (g, adv)
    g0, adv0 = per[DEF]
    glyphs[name] = g0; glyph_order.append(name); new_cmap[cp] = name
    g0.recalcBounds(None)
    metrics[name] = (adv0, g0.xMin if g0.numberOfContours else 0)
    tuples = []
    for m, axes in [(MIN, {'wght': (-1.0, -1.0, 0.0)}), (MAX, {'wght': (0.0, 1.0, 1.0)})]:
        if m == DEF: continue
        g1, adv1 = per[m]
        assert g1.endPtsOfContours == g0.endPtsOfContours, (name, m)
        d = [(b[0] - a[0], b[1] - a[1]) for a, b in zip(g0.coordinates, g1.coordinates)]
        d += [(0, 0), (adv1 - adv0, 0), (0, 0), (0, 0)]   # phantom points: advance varies
        tuples.append(TupleVariation(axes, d))
    variations[name] = tuples

fb = FontBuilder(UPM, isTTF=True)
fb.setupGlyphOrder(glyph_order)
fb.setupCharacterMap(new_cmap)
fb.setupGlyf(glyphs)
fb.setupHorizontalMetrics(metrics)
hh = src['hhea']
fb.setupHorizontalHeader(ascent=hh.ascent, descent=hh.descent, lineGap=hh.lineGap)
fb.setupNameTable({'familyName': ('Inter Tight' if WHICH == 'inter' else 'Caveat') + ' SubSup', 'styleName': 'Regular',
                   'copyright': src['name'].getDebugName(0) or '',
                   'licenseDescription': 'Derived from ' + ('Inter Tight' if WHICH == 'inter' else 'Caveat') + '. SIL Open Font License 1.1.'})
o = src['OS/2']
fb.setupOS2(sTypoAscender=o.sTypoAscender, sTypoDescender=o.sTypoDescender, sTypoLineGap=o.sTypoLineGap,
            usWinAscent=o.usWinAscent, usWinDescent=o.usWinDescent, sxHeight=o.sxHeight, sCapHeight=o.sCapHeight, usWeightClass=400)
fb.setupPost()
fb.setupFvar([('wght', MIN, DEF, MAX, 'Weight')], [])
fb.setupGvar(variations)
fb.font['head'].fontRevision = src['head'].fontRevision
fb.font.flavor = 'woff2'
fb.save(OUT)
print('wrote', OUT, os.path.getsize(OUT), 'bytes,', len(new_cmap), 'codepoints')
print(','.join('U+%04X' % c for c in sorted(new_cmap)))
