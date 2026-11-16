import sys,re,os
from bs4 import BeautifulSoup
root='C:/Users/kygs/teaching-app-fix/subjects/maths-advanced/year11/'
out=sys.argv[1]
files=sys.argv[2:]
for f in files:
    html=open(root+f,encoding='utf-8').read()
    s=BeautifulSoup(html,'html.parser')
    for t in s(['script','style','svg','noscript']): t.decompose()
    lines=[f'##### {f}', 'TITLE: '+(s.title.get_text() if s.title else '')]
    # mark worked
    for w in s.select('.sa-worked'):
        w.insert_before(s.new_string(f'\n[[WORKED {w.get("id")}]]\n'))
        w.insert_after(s.new_string(f'\n[[/WORKED]]\n'))
    for st in s.select('[data-step-id]'):
        st.insert_before(s.new_string(f'\n=== STEP {st.get("data-step-id")} ===\n'))
    body=s.body or s
    txt=body.get_text('\n')
    txt=re.sub(r'[ \t]+',' ',txt)
    txt=re.sub(r'\n\s*\n+','\n',txt)
    lines.append(txt)
    name=f.replace('/','_').replace('.sa.html','.txt')
    open(os.path.join(out,name),'w',encoding='utf-8').write('\n'.join(lines))
    print(name, len(txt))
