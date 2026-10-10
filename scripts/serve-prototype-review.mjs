import http from 'node:http';
import {createReadStream, statSync} from 'node:fs';
import path from 'node:path';

const root=path.resolve('out/prototypes');
const mime={'.html':'text/html; charset=utf-8','.mp4':'video/mp4','.mp3':'audio/mpeg','.m4a':'audio/mp4','.wav':'audio/wav','.png':'image/png','.vtt':'text/vtt; charset=utf-8','.srt':'application/x-subrip; charset=utf-8','.json':'application/json','.md':'text/plain; charset=utf-8'};
http.createServer((request,response)=>{
  if(!['GET','HEAD'].includes(request.method)){response.writeHead(405).end();return;}
  let file,stat;
  try{
    const pathname=decodeURIComponent(new URL(request.url,'http://localhost').pathname);
    file=path.resolve(root,'.'+pathname);
    if(file!==root && !file.startsWith(root+path.sep)){response.writeHead(403).end();return;}
    stat=statSync(file);
    if(stat.isDirectory()){file=path.join(file,'index.html');stat=statSync(file);}
    if(!stat.isFile())throw new Error('Not a file');
  }catch{response.writeHead(404).end();return;}
  const headers={'Content-Type':mime[path.extname(file)]??'application/octet-stream','Accept-Ranges':'bytes','Cache-Control':'no-store'};
  let start=0,end=stat.size-1,status=200;
  if(request.headers.range){
    const range=/^bytes=(\d*)-(\d*)$/.exec(request.headers.range);
    if(!range || (!range[1]&&!range[2])){response.writeHead(416,{'Content-Range':`bytes */${stat.size}`}).end();return;}
    start=range[1]?Number(range[1]):Math.max(0,stat.size-Number(range[2]));
    end=range[1]&&range[2]?Math.min(Number(range[2]),end):end;
    if(start>end || start>=stat.size){response.writeHead(416,{'Content-Range':`bytes */${stat.size}`}).end();return;}
    status=206;headers['Content-Range']=`bytes ${start}-${end}/${stat.size}`;
  }
  headers['Content-Length']=String(Math.max(0,end-start+1));
  response.writeHead(status,headers);
  if(request.method==='HEAD'||stat.size===0){response.end();return;}
  const stream=createReadStream(file,{start,end});
  stream.on('error',()=>response.destroy());
  response.on('close',()=>stream.destroy());
  stream.pipe(response);
}).listen(8778,'127.0.0.1',()=>console.log('Prototype review: http://127.0.0.1:8778/molar-mass-pilot/'));
