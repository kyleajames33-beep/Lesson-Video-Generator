import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {writeGoogleProviderReceipt} from './lib/google-provider-response.mjs';
test('error receipt preserves exact status and body while redacting a key',()=>{
 const dir=path.resolve('work/provider-response-test');assert(!fs.existsSync(dir));fs.mkdirSync(dir,{recursive:true});
 const file=dir+'/error.json',key='fake-private-token';
 try{
  writeGoogleProviderReceipt(file,{status:402,statusText:'Payment Required',responseText:'\n{"message":"'+key+'"}\r\n'},key);
  const raw=fs.readFileSync(file,'utf8'),r=JSON.parse(raw);assert(!raw.includes(key));assert.equal(r.status,402);
  assert.equal(r.statusText,'Payment Required');assert.equal(r.responseText,'\n{"message":"[REDACTED]"}\r\n');
  assert.throws(()=>writeGoogleProviderReceipt(file,{status:500,responseText:'other'},key),/EEXIST/);
 }finally{fs.unlinkSync(file);fs.rmdirSync(dir);}
});
test('receipt rejects paths outside work',()=>{
 assert.throws(()=>writeGoogleProviderReceipt('provider-error.json',{status:402,responseText:'body'},'fake'),/must stay in work/);
});
