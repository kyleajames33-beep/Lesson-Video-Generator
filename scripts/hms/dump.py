import re,html,sys
s=open(sys.argv[1],encoding='utf8').read()
i=s.find('id="phase-learn"'); i = i if i>0 else s.find('<body')
t=s[i:]
t=re.sub(r'<script.*?</script>|<style.*?</style>','',t,flags=re.S)
t=re.sub(r'<svg.*?</svg>',lambda m:' [SVG: '+' | '.join(re.findall(r'<text[^>]*>(.*?)</text>',m.group(0),flags=re.S))[:900]+'] ',t,flags=re.S)
t=re.sub(r'<(h[1-6]|p|li|div|tr|section|summary)[^>]*>','\n',t)
t=re.sub(r'<[^>]+>',' ',t); t=html.unescape(t)
t=re.sub(r'[ \t]+',' ',t); t=re.sub(r'\n\s*\n+','\n',t)
print(t)
