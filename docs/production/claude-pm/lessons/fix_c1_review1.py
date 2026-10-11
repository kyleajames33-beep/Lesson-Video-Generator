"""Claude review pass 1 fixes for the C1 build (run from repo root)."""
import io

p = 'src/explainer/lessons/chem-m5-c01/s2.tsx'
s = io.open(p, encoding='utf8').read()
pairs = [
    # mini closed/open systems overlapped: smaller bottles, separated rows
    ("const S = 0.2;", "const S = 0.12;"),
    ("<div style={{position: 'absolute', left: x, top: y, width: 470, height: 300, opacity: p, transform: `translateY(${(1 - p) * 14}px)`}}>",
     "<div style={{position: 'absolute', left: x, top: y, width: 470, height: 190, opacity: p, transform: `translateY(${(1 - p) * 14}px)`}}>"),
    ("<svg width={470} height={300} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>",
     "<svg width={470} height={190} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>"),
    ("d={open ? 'M8,40 L8,290 L120,290 L120,40 M8,40 L40,40 M90,40 L120,40' : 'M8,30 L120,30 L120,290 L8,290 Z'}",
     "d={open ? 'M4,22 L4,186 L96,186 L96,22 M4,22 L26,22 M74,22 L96,22' : 'M4,14 L96,14 L96,186 L4,186 Z'}"),
    ("<div style={{position: 'absolute', left: 150, top: 70}}>", "<div style={{position: 'absolute', left: 124, top: 40}}>"),
    ('<MiniSystem x={1440} y={520} open={false} at={K5.closed}', '<MiniSystem x={1460} y={500} open={false} at={K5.closed}'),
    ('<MiniSystem x={1440} y={700} open at={K5.open}', '<MiniSystem x={1460} y={712} open at={K5.open}'),
    # the closing statement touched the bottle cap on the floor
    ('<SvgText x={96} y={900} text="dynamic equilibrium needs a closed system" size={56} color={TEAL} at={K5.needs} />',
     '<SvgText x={96} y={946} text="dynamic equilibrium needs a closed system" size={52} color={TEAL} at={K5.needs} />'),
    # feedback heading collided with the first verdict stamp
    ('<Heading text="Check your answers" />', '<Heading text="Here\'s how" />'),
    # the ash tick must clear before the beaker case reuses question 1
    ('<Mark x={250 + 128} y={540 + 20 + 92} at={K6b.yes} kind="tick" size={42} />',
     '<g opacity={1 - prog(f, K6b.beaker - 12, 12)}><Mark x={250 + 128} y={540 + 20 + 92} at={K6b.yes} kind="tick" size={42} /></g>'),
]
for a, b in pairs:
    assert a in s, a[:70]
    s = s.replace(a, b, 1)
io.open(p, 'w', encoding='utf8').write(s)
print('ok')
