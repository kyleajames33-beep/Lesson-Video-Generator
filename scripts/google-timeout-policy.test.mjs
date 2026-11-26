import test from 'node:test';
import assert from 'node:assert/strict';
import {googleTimeoutAction,googleTimeoutCount} from './lib/google-timeout-policy.mjs';
test('one client timeout gets one retry, then the lesson stops',()=>{
 const e=new DOMException('Operation timed out','TimeoutError');
 assert.equal(googleTimeoutAction(e,1),'retry once');assert.equal(googleTimeoutAction(e,2),'stop lesson');
 assert.equal(googleTimeoutAction(e,1,1),'stop lesson');
 for(const code of ['ETIMEDOUT','UND_ERR_CONNECT_TIMEOUT','UND_ERR_HEADERS_TIMEOUT','UND_ERR_BODY_TIMEOUT']){
  const e=new TypeError('fetch failed',{cause:{code}});assert.equal(googleTimeoutAction(e,1),'retry once');assert.equal(googleTimeoutAction(e,1,1),'stop lesson');
 }
});

test('timeout count survives a cap stop or worker restart for the same request only',()=>{
 const records=[{lesson:'v11',scenes:['a','b'],textHashes:['x','y'],attempt:1},{lesson:'v12',scenes:['a','b'],textHashes:['x','y'],attempt:2}];
 assert.equal(googleTimeoutCount(records,'v11',['a','b'],['x','y']),1);
 assert.equal(googleTimeoutCount(records,'v11',['a','b'],['x','new']),0);
 assert.equal(googleTimeoutCount(records,'v11',['b','a'],['y','x']),0);
});
test('provider refusals and other errors are not timeout retries',()=>{
 for(const e of [Error('HTTP402'),Error('HTTP429'),new TypeError('fetch failed')])assert.equal(googleTimeoutAction(e,1),'other error');
});
