import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
// Opt-in diagnostic receipt. Never save request headers or successful audio payloads.
export function writeGoogleProviderReceipt(file,{status,statusText,responseText},key){
 if(!file)return;
 const target=path.resolve(file);assert(target.startsWith(path.resolve('work')+path.sep),'Provider receipt must stay in work');
 let text=responseText;
 if(typeof text==='string'&&key)for(const secret of new Set([key,encodeURIComponent(key)]))text=text.split(secret).join('[REDACTED]');
 fs.mkdirSync(path.dirname(target),{recursive:true});
 fs.writeFileSync(target,JSON.stringify({at:new Date().toISOString(),status,statusText,responseText:text??null},null,2)+'\n',{flag:'wx'});
}
