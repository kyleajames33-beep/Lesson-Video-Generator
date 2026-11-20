// Root (21 Nov): Y11 Chem route ids in playlistOrder from docs/production/programme/chem-y11-route-inputs.json.
const fs = require('fs');
const j = JSON.parse(fs.readFileSync('docs/production/programme/chem-y11-route-inputs.json', 'utf8'));
const m = new Map();
(function w(o) { if (Array.isArray(o)) return o.forEach(w); if (o && typeof o === 'object') { if (typeof o.id === 'string' && /^chem-y11-/.test(o.id) && typeof o.playlistOrder === 'number') m.set(o.id, o.playlistOrder); for (const k in o) w(o[k]); } })(j);
const ids = [...m].sort((a, b) => a[1] - b[1]).map((x) => x[0]);
fs.writeFileSync('work/brief245/root/y11c-route.txt', ids.join(','));
console.log(ids.length, ids.slice(8, 16).join(' '));
