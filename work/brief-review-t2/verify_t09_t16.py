"""Independent learning-review recheck of t09 to t16 'Numbers to verify' (17 Nov 2026)."""
import math
from sympy import (pi, sqrt, Rational as R, sin, cos, tan, sec, csc, cot, simplify,
                   symbols, N, nsimplify, factor, rad)

d = lambda x: x * pi / 180  # degrees to radians
out = []
def chk(label, val, want=None):
    v = N(val, 8)
    ok = "" if want is None else ("OK" if abs(float(v) - float(want)) < 5e-4 else "MISMATCH")
    out.append(f"{label}: {v} {ok}")

# t09
chk("t09 20*pi/4", 20*pi/4, 15.708)
chk("t09 40+5pi", 40+5*pi, 55.708)
chk("t09 1/2*400*pi/4", R(1,2)*400*pi/4, 157.08)
chk("t09 10*pi/3", 10*pi/3, 10.472)
chk("t09 600/(10pi/3)", 600/(10*pi/3), 57.30)
chk("t09 sqrt108", sqrt(108), 10.392)
r, th = 50, 2*pi/3
seg = R(1,2)*r**2*(th - sin(th))
chk("t09 sector", R(1,2)*r**2*th, 2617.99)
chk("t09 triangle", R(1,2)*r**2*sin(th), 1082.53)
chk("t09 leaf", seg, 1535.46)
chk("t09 circle", pi*r**2, 7853.98)
maj = pi*r**2 - seg
chk("t09 major seg", maj, 6318.52)
out.append(f"t09 major seg rounded to whole: {round(float(maj))} ; 7854-1535 = {7854-1535}")
chk("t09 major via theta=4pi/3 formula", R(1,2)*r**2*(4*pi/3 - sin(4*pi/3)), 6318.52)
chk("t09 major arc", 50*4*pi/3, 209.44)
chk("t09 A1 area", R(1,2)*225*R(4,3), 150)
chk("t09 A2 minor", 18*(2*pi/3 - sqrt(3)/2), 22.111)
chk("t09 A2 major", 24*pi + 9*sqrt(3), 90.987)
out.append(f"t09 A2 exact minor simplify: {simplify(18*(2*pi/3 - sqrt(3)/2) - (12*pi - 9*sqrt(3)))}")

# t10
for a in [0, 90, 180, 270, 360]:
    out.append(f"t10 sin,cos {a}: {sin(d(a))}, {cos(d(a))}")
chk("t10 tan60", tan(d(60)), 1.7321); chk("t10 tan80", tan(d(80)), 5.6713); chk("t10 tan89", tan(d(89)), 57.290)
out.append(f"t10 cos(-pi/3)={cos(-pi/3)}, tan(-pi/3)={tan(-pi/3)}")

def scan(f, lo, hi, n=200000, tol=1e-7):
    """Find roots of f on [lo, hi] by sign changes and near-zero touches."""
    xs = [lo + (hi-lo)*i/n for i in range(n+1)]
    roots = []
    prev = None
    for x in xs:
        try:
            y = f(x)
        except (ValueError, ZeroDivisionError):
            prev = None; continue
        if abs(y) > 1e6: prev = None; continue
        if prev is not None:
            px, py = prev
            if py == 0 or py*y < 0:
                # bisect
                a, b = px, x
                for _ in range(80):
                    m = (a+b)/2
                    if f(a)*f(m) <= 0: b = m
                    else: a = m
                if abs(f((a+b)/2)) < 1e-6:
                    roots.append((a+b)/2)
        prev = (x, y)
    # touches: local min of |f| near zero
    for i in range(1, n):
        x = xs[i]
        try:
            y0, y1, y2 = abs(f(xs[i-1])), abs(f(x)), abs(f(xs[i+1]))
        except (ValueError, ZeroDivisionError):
            continue
        if y1 <= y0 and y1 <= y2 and y1 < 1e-8:
            roots.append(x)
    for e in (lo, hi):
        try:
            if abs(f(e)) < 1e-9: roots.append(e)
        except (ValueError, ZeroDivisionError):
            pass
    roots.sort()
    dedup = []
    for x in roots:
        if not dedup or abs(x - dedup[-1]) > 1e-4: dedup.append(x)
    return dedup

D = math.radians
deg = lambda rs: [round(math.degrees(x), 4) for x in rs]
r4 = lambda rs: [round(x, 6) for x in rs]

out.append(f"t10 cos zeros [-2pi,2pi]: {r4(scan(math.cos, -2*math.pi, 2*math.pi))}")
out.append(f"t10 A1 cos zeros [-180,360] deg: {deg(scan(math.cos, D(-180), D(360)))}")
out.append(f"t10 A2 tan zeros [-2pi,pi]: {r4(scan(lambda x: math.sin(x), -2*math.pi, math.pi))} (asymptotes where cos=0: {r4(scan(math.cos, -2*math.pi, math.pi))})")

# t11
for a in (30, 45, 60):
    out.append(f"t11 {a}: sec {nsimplify(simplify(sec(d(a))))}, cosec {nsimplify(simplify(csc(d(a))))}, cot {nsimplify(simplify(cot(d(a))))}")
chk("t11 3cot30", 3*sqrt(3), 5.196)
for a in (1, 0.1, 89, 89.9):
    x = math.radians(a)
    out.append(f"t11 limits {a}: sec {1/math.cos(x):.6g}, cosec {1/math.sin(x):.6g}, cot {math.cos(x)/math.sin(x):.6g}")
out.append(f"t11 A2: {simplify(sec(pi/4)**2 + cot(pi/6)*csc(pi/3))}")

# t12
out.append(f"t12 sec(2pi/3)={simplify(sec(2*pi/3))}, cosec(3pi/4)={simplify(csc(3*pi/4))}, cot(11pi/6)={simplify(cot(11*pi/6))}")
chk("t12 4sec80", 4/cos(d(80)), 23.03); chk("t12 4sec89", 4/cos(d(89)), 229.2)
out.append(f"t12 A1 = {simplify(csc(d(300)) + cot(d(225)))} = {N(csc(d(300)) + cot(d(225)), 6)}")
out.append(f"t12 A2 sec135={simplify(sec(d(135)))}, sec300={simplify(sec(d(300)))}; cos zeros [0,360]: {deg(scan(math.cos, 0, 2*math.pi))}")

# t13
out.append(f"t13 150: ({cos(d(150))}, {sin(d(150))}); -60: ({cos(d(-60))}, {sin(d(-60))})")
t = symbols('t')
for lhs, rhs in [(sin(pi/2-t), cos(t)), (cos(pi/2-t), sin(t)), (tan(pi/2-t), cot(t)), (cot(pi/2-t), tan(t)), (sec(pi/2-t), csc(t)), (csc(pi/2-t), sec(t))]:
    out.append(f"t13 identity diff: {simplify(lhs-rhs)}")
chk("t13 we-1", sin(d(20))*sec(d(70)) + tan(d(35))*tan(d(55)), 2)
chk("t13 sin130", sin(d(130)), 0.76604); chk("t13 cos40", cos(d(40)), 0.76604)
chk("t13 A1", tan(d(10))*tan(d(20))*tan(d(70))*tan(d(80)), 1)
chk("t13 sin115-cos25", sin(d(115)) - cos(d(25)), 0)

# t14a
for e in [1 + tan(t)**2 - sec(t)**2, 1 + cot(t)**2 - csc(t)**2, (sec(t)**2-1)/tan(t) - tan(t), sin(t)**2*(1+cot(t)**2) - 1]:
    out.append(f"t14a simplify: {simplify(e)}")
th = 2*math.pi - math.atan(4/3)
out.append(f"t14a SA2 theta={math.degrees(th):.4f}: sec {1/math.cos(th):.6f}, cos {math.cos(th):.6f}, sin {math.sin(th):.6f}")
th = 2*math.pi - math.asin(5/13)
out.append(f"t14a A1 theta={math.degrees(th):.4f}: cosec {1/math.sin(th):.6f}, cot {math.cos(th)/math.sin(th):.6f}")

# t14b
for e in [tan(t)+cot(t)-sec(t)*csc(t), sin(t)**4-cos(t)**4-(2*sin(t)**2-1), sin(t)**2/(1-cos(t))-(1+cos(t)), sec(t)-cos(t)-sin(t)*tan(t), (1-cos(t)**2)/(sin(t)*cos(t))-tan(t)]:
    s = simplify(e)
    nums = [abs(float(N(e.subs(t, v)))) for v in (0.3, 1.1, 2.0, 4.0, 5.5)]
    out.append(f"t14b simplify: {s}; max numeric |diff| {max(nums):.2e}")
out.append(f"t14b gap at 0.15: {0.15 - math.sin(0.15):.6f}; at 0.25: {0.25 - math.sin(0.25):.6f}; sin1 {math.sin(1):.5f}")

# t15a
out.append(f"t15a clock cos(6m)=1/2, m in [0,60): {[round(math.degrees(x)/6,4) for x in scan(lambda x: math.cos(x)-0.5, 0, D(360)-1e-9)]}")
out.append(f"t15a sin=0.5 [0,360]: {deg(scan(lambda x: math.sin(x)-0.5, 0, D(360)))}")
out.append(f"t15a cos=-0.5 [0,360]: {deg(scan(lambda x: math.cos(x)+0.5, 0, D(360)))}")
out.append(f"t15a sin=-0.6 [0,2pi): {r4(scan(lambda x: math.sin(x)+0.6, 0, 2*math.pi-1e-9))}; asin0.6 {math.asin(0.6):.6f} ({math.degrees(math.asin(0.6)):.4f} deg)")
out.append(f"t15a 2sinx=1 [0,2pi]: {r4(scan(lambda x: 2*math.sin(x)-1, 0, 2*math.pi))} (pi/6={math.pi/6:.6f}, 5pi/6={5*math.pi/6:.6f})")
out.append(f"t15a sin=cos [0,2pi]: {r4(scan(lambda x: math.sin(x)-math.cos(x), 0, 2*math.pi))} (pi/4={math.pi/4:.6f}, 5pi/4={5*math.pi/4:.6f})")
out.append(f"t15a A1 [0,360]: {deg(scan(lambda x: 2*math.cos(x)+math.sqrt(3), 0, D(360)))}")
out.append(f"t15a A2 [0,2pi]: {r4(scan(lambda x: 5*math.sin(x)+2, 0, 2*math.pi))}; asin0.4 {math.asin(0.4):.6f}, deg {math.degrees(math.asin(0.4)):.3f}")

# t15b
out.append(f"t15b clock m in [0,120]: {[round(math.degrees(x)/6,4) for x in scan(lambda x: math.cos(x)-0.5, 0, D(720))]}")
out.append(f"t15b sin2t=0.5: {deg(scan(lambda x: math.sin(2*x)-0.5, 0, D(360)))}")
out.append(f"t15b sin2t=1: {deg(scan(lambda x: math.sin(2*x)-1, 0, D(360)))}")
out.append(f"t15b cos2x=0.3: {r4(scan(lambda x: math.cos(2*x)-0.3, 0, 2*math.pi))}; acos0.3 {math.acos(0.3):.6f}")
out.append(f"t15b cos(t/2)=0.5: {deg(scan(lambda x: math.cos(x/2)-0.5, 0, D(360)))}")
out.append(f"t15b A1 sin2t=-r3/2: {deg(scan(lambda x: math.sin(2*x)+math.sqrt(3)/2, 0, D(360)))}")
out.append(f"t15b A2 tan2x=-1: {[round(x/math.pi*8,4) for x in scan(lambda x: math.sin(2*x)+math.cos(2*x), 0, 2*math.pi)]} (in pi/8 units; tan2x=-1 iff sin2x+cos2x=0 with cos2x!=0)")

# t16
out.append(f"t16 factor: {factor(2*t**2-t-1)}, {factor(t**2-t-2)}, {factor(2*t**2-3*t+1)}, {factor(2*t**2+t-1)}")
out.append(f"t16 we-1: {deg(scan(lambda x: 2*math.sin(x)**2-math.sin(x)-1, 0, D(360)))}")
out.append(f"t16 we-2: {deg(scan(lambda x: math.cos(x)**2-math.cos(x)-2, 0, D(360)))}")
out.append(f"t16 we-3: {deg(scan(lambda x: 2*math.sin(x)**2+3*math.cos(x)-3, 0, D(360)))}")
out.append(f"t16 lesson10: {r4(scan(lambda x: 2*math.cos(x)**2+math.sin(x)-1, 0, 2*math.pi))} (pi/2={math.pi/2:.6f}, 7pi/6={7*math.pi/6:.6f}, 11pi/6={11*math.pi/6:.6f})")
out.append(f"t16 sin^2=sin: {deg(scan(lambda x: math.sin(x)**2-math.sin(x), 0, D(360)))}")
out.append(f"t16 A1: {deg(scan(lambda x: 2*math.cos(x)**2-math.sin(x)-1, 0, D(360)))}")
r3 = math.sqrt(3)
out.append(f"t16 A2: {[round(x/math.pi*12,4) for x in scan(lambda x: (math.sin(x)-math.cos(x))*(math.sin(x)-r3*math.cos(x)), 0, 2*math.pi)]} (pi/12 units; product form valid where cos x != 0)")

print("\n".join(out))
