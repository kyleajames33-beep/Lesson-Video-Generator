"""Copy only explicitly inspected candidates; preserve any earlier destination."""
import sys,json,shutil,hashlib
from pathlib import Path
rows=json.load(open('work/brief264/plate-inventory.json',encoding='utf-8'))['rows']
for i in [int(x) for x in sys.argv[1].split(',')]:
 r=rows[i];src=Path('work/brief264/candidates')/r['name'];dest=Path(r['destination'])
 if r['kind']=='copy':src=Path('public/assets/chemistry')/r['name']
 assert src.is_file(),src
 dest.parent.mkdir(parents=True,exist_ok=True)
 if dest.exists():assert src.read_bytes()==dest.read_bytes(),f'Existing destination differs: {dest}'
 else:shutil.copy2(src,dest)
 print(dest.as_posix(),hashlib.sha256(dest.read_bytes()).hexdigest())
