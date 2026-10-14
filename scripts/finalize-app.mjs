import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {basePath} from './base-path.mjs';
const app=fileURLToPath(new URL('../',import.meta.url));
const assets=(await fs.readdir(app+'/dist/assets')).sort().map(f=>'assets/'+f);
const files=['index.html','icon.svg','icon-192.png','icon-512.png','apple-touch-icon.png','manifest.webmanifest','evidence.json',...assets];
const digest=crypto.createHash('sha256').update(basePath);
for(const file of files)digest.update(await fs.readFile(app+'/dist/'+file));
const prefix='bellevue-pass-'+crypto.createHash('sha256').update(basePath).digest('hex').slice(0,10)+'-';
const cache=prefix+digest.digest('hex').slice(0,10);
const core=[basePath,...files.map(file=>basePath+file)];
const sw=`const CACHE=${JSON.stringify(cache)};
const PREFIX=${JSON.stringify(prefix)};
const BASE=${JSON.stringify(basePath)};
const CORE=${JSON.stringify(core)};
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.pathname.startsWith(BASE))return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    try{
      const response=await fetch(event.request);
      if(response.ok&&response.type==='basic'&&!url.pathname.startsWith(BASE+'deliverables/'))await cache.put(event.request,response.clone()).catch(()=>{});
      return response;
    }catch{
      return await cache.match(event.request)||(event.request.mode==='navigate'?await cache.match(BASE):undefined)||new Response('Offline asset unavailable',{status:503});
    }
  })());
});`;
await fs.writeFile(app+'/dist/sw.js',sw);
await fs.writeFile(app+'/dist/.nojekyll','');
console.log('Offline shell prepared:',core.length,'files, base',basePath,'cache',cache);
