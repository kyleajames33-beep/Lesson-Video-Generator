"""Claude review pass 1 fixes for the B1 build (run from repo root)."""
import io

def edit(p, pairs):
    s = io.open(p, encoding='utf8').read()
    for a, b in pairs:
        assert a in s, (p, a[:70])
        s = s.replace(a, b, 1)
    io.open(p, 'w', encoding='utf8').write(s)

D = 'src/explainer/lessons/bio-m5-b01/'
edit(D + 's1.tsx', [
    # "new plant" sat on brown soil: lift it above the plantlet
    ('<Label x={PX(0) + 424} y={PY + 340} at={c.newp + 12} text="new plant" size={44} color={AMBER_INK} />',
     '<Label x={PX(0) + 424} y={PY + 132} at={c.newp + 12} text="new plant" size={44} color={AMBER_INK} />'),
    # "survives" crowded the tick and failed branch: drop it below the plant
    ('<Label x={pos.p3[0] + PW / 2 + 90} y={pos.p3[1] + ph + 40} at={c.survive + 14} text="survives" size={46} color={GREEN} />',
     '<Label x={pos.p3[0] + PW / 2} y={pos.p3[1] + ph + 58} at={c.survive + 14} text="survives" size={46} color={GREEN} />'),
])
edit(D + 's3.tsx', [
    # "while sexual" first occurs in the Variation sentence; the mate cell needs the second occurrence
    ("whileS: ['while sexual', 1]", "whileS: ['while sexual', 2]"),
    # rows behind the model sentence fully hidden so no labels peek out
    ('const dimOthers = 1 - 0.9 * lift;', 'const dimOthers = 1 - lift;'),
])
edit(D + 's4.tsx', [
    ("{art: ART.trays, title: 'Strawberry: runners and seeds',", "{art: ART.trays, title: 'Runners and seeds',"),
    ("top: CARD_Y - 30, transform: `rotate(-6deg) scale(${pop})`", "top: CARD_Y - 64, transform: `rotate(-6deg) scale(${pop})`"),
    ("<Enter at={c.dep} style={{position: 'absolute', left: 610, top: 782}}>", "<Enter at={c.dep} style={{position: 'absolute', left: 632, top: 782}}>"),
    ("<Enter at={c.dep + 10} style={{position: 'absolute', left: 1050, top: 782}}>", "<Enter at={c.dep + 10} style={{position: 'absolute', left: 1072, top: 782}}>"),
])
print('ok')
