import itertools, heapq
def st(edges):
    V=sorted({v for e in edges for v in e[:2]}); n=len(V); res=[]
    for comb in itertools.combinations(edges,n-1):
        p={v:v for v in V}
        def f(x):
            while p[x]!=x: x=p[x]
            return x
        ok=True
        for a,b,w in comb:
            ra,rb=f(a),f(b)
            if ra==rb: ok=False;break
            p[ra]=rb
        if ok: res.append((sum(w for *_,w in comb),comb))
    res.sort(key=lambda r:r[0]); return res
def sp(edges,s,t,directed=False):
    g={}
    for a,b,w in edges:
        g.setdefault(a,[]).append((b,w))
        if not directed: g.setdefault(b,[]).append((a,w))
    # all simple paths
    out=[]
    def dfs(u,path,d):
        if u==t: out.append((d,path)); return
        for v,w in g.get(u,[]):
            if v not in path: dfs(v,path+[v],d+w)
    dfs(s,[s],0); out.sort(); return out
def E(s): return [(x.split()[0][0],x.split()[0][-1],int(x.split()[1])) for x in s.split(',')]
camp=E("AB 40,AC 60,BC 30,BD 50,CD 45,CE 70,DE 35")
r=st(camp); print('camp trees',len(r),[x[0] for x in r[:4]])
tow=E("AB 8,AC 3,BC 5,BD 7,CD 2,CE 6,DE 4"); r=st(tow); print('towers',len(r),[x[0] for x in r[:4]])
a2=E("AB 7,AC 4,BC 3,BD 6,CD 8,CE 5,DE 2,DF 9,EF 7"); r=st(a2); print('n05 A2',[x[0] for x in r[:3]], r[0][1])
p1=E("PQ 12,PR 8,QR 5,QS 10,RS 7"); r=st(p1); print('n05 A1',[x[0] for x in r[:3]])
n7=E("PQ 4,QR 4,PR 6,RS 3,QS 8"); r=st(n7); print('n07 A2',[x[0] for x in r[:3]]); print(sp(n7,'P','R')[:3])
tri=E("AB 3,BC 3,AC 5"); print('tri',[x[0] for x in st(tri)])
van=E("SA 4,SB 2,AB 1,AC 3,AT 6,BC 5,CT 2"); print('van',sp(van,'S','T')[:3])
bus=E("AB 8,AC 3,BD 6,CB 2,CD 9,DE 4"); print('bus',sp(bus,'A','E',True)[:3])
a1=E("PQ 5,PR 2,RQ 1,QS 4,RS 7"); print('n06A1',sp(a1,'P','S')[:3])
g7=E("AB 3,AC 6,BC 2,BD 7,CD 3,CE 8,DE 2,DF 6,EG 5,FG 2"); print('n06A2',sp(g7,'A','G')[:3])
toll=E("AB 10,BD 8,AC 12,CD 9,BC 3"); print('toll',sp(toll,'A','D')[:4])
trail=E("TL 6,TM 9,LM 4,LR 7,MV 5,RV 3"); print('trail',sp(trail,'T','V'))
lk=E("AB 5,AC 8,BC 2,BD 6,CD 3"); print('n03A1',sp(lk,'A','D'))
jk=E("JK 4,KL 3,LJ 5,KM 6,ML 2"); print('n03A2',sp(jk,'J','L',True))
prop=E("PQ 6,QS 5,PR 8,RS 6,QR 3"); print('prop full',sp(prop,'P','S')); print('prop noQS',sp([e for e in prop if e[:2]!=('Q','S')],'P','S'))
# camp shortest A-C
print('campAC',sp(camp,'A','C')[:3])
# check MST shortest-path containment in towers
