(function(m,f){typeof module=="object"&&typeof module.exports=="object"?f():typeof define=="function"&&define.amd?define([],f):(m=typeof globalThis<"u"?globalThis:m||self)&&f()})(this,function(){function m(u,r,s,n,e,a,i){try{var o=u[a](i),c=o.value}catch(t){s(t);return}o.done?r(c):Promise.resolve(c).then(n,e)}function f(u){return function(){var r=this,s=arguments;return new Promise(function(n,e){var a=u.apply(r,s);function i(c){m(a,n,e,i,o,"next",c)}function o(c){m(a,n,e,i,o,"throw",c)}i(void 0)})}}function l(u,r){var s,n,e,a,i={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(t){return function(h){return c([t,h])}}function c(t){if(s)throw new TypeError("Generator is already executing.");for(;i;)try{if(s=1,n&&(e=t[0]&2?n.return:t[0]?n.throw||((e=n.return)&&e.call(n),0):n.next)&&!(e=e.call(n,t[1])).done)return e;switch(n=0,e&&(t=[t[0]&2,e.value]),t[0]){case 0:case 1:e=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,n=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(e=i.trys,!(e=e.length>0&&e[e.length-1])&&(t[0]===6||t[0]===2)){i=0;continue}if(t[0]===3&&(!e||t[1]>e[0]&&t[1]<e[3])){i.label=t[1];break}if(t[0]===6&&i.label<e[1]){i.label=e[1],e=t;break}if(e&&i.label<e[2]){i.label=e[2],i.ops.push(t);break}e[2]&&i.ops.pop(),i.trys.pop();continue}t=r.call(u,i)}catch(h){t=[6,h],n=0}finally{s=e=0}if(t[0]&5)throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}var g={CACHE_NAME:"ICDNCache",UPDATE_INTERVAL:6e4,STARTUP_DELAY:5e3,TARGET_DOMAIN:"yumetsuki.moe",DEFAULT_VERSION:"latest"},E=[];self.addEventListener("install",function(){var u=f(function(r){return l(this,function(s){return self.skipWaiting(),r.waitUntil(caches.open(g.CACHE_NAME).then(function(n){return console.log("Opened cache"),n.addAll(E)})),[2]})});return function(r){return u.apply(this,arguments)}}()),self.addEventListener("fetch",function(){var u=f(function(r){return l(this,function(s){try{r.respondWith(R(r.request))}catch(n){console.error("Fetch error:",n),v(urlPath).indexOf(".html")!==-1?r.respondWith(fetch("/404.html")):r.respondWith(y(r.request,n.message))}return[2]})});return function(r){return u.apply(this,arguments)}}());var y=function(){var u=f(function(r,s){return l(this,function(n){return[2,new Response(`<h1>CDN\u5206\u6D41\u5668\u9047\u5230\u4E86\u81F4\u547D\u9519\u8BEF</h1>
    <b>`.concat(s,"</b>"),{headers:{"content-type":"text/html; charset=utf-8"}})]})});return function(s,n){return u.apply(this,arguments)}}(),d=function(){var u=f(function(r,s){var n,e;return l(this,function(a){return n=new AbortController,e=function(){var i=f(function(o){var c;return l(this,function(t){switch(t.label){case 0:return c=Response.bind,[4,o.arrayBuffer()];case 1:return[2,new(c.apply(Response,[void 0,t.sent(),{status:o.status,headers:o.headers}]))]}})});return function(c){return i.apply(this,arguments)}}(),[2,(Promise.any||(Promise.any=function(i){return new Promise(function(o,c){i=Array.isArray(i)?i:[];var t=i.length,h=[];if(t===0)return c(new AggregateError("All promises were rejected"));i.forEach(function(p){p.then(function(w){o(w)},function(w){t--,h.push(w),t===0&&c(new AggregateError(h))})})})}),Promise.any(r.map(function(i){return new Promise(function(o,c){fetch(i,{signal:n.signal}).then(e).then(function(t){t.status==200?(n.abort(),o(t)):c(t)})})})))]})});return function(s,n){return u.apply(this,arguments)}}(),v=function(u){return u=u.split("?")[0].split("#")[0],u.match(/\/$/)&&(u+="index"),u.match(/\.[a-zA-Z]+$/)||(u+=".html"),u},A=function(u,r,s){var n=["https://cdn.cbd.int/".concat(u,"@").concat(r)];for(var e in n)n[e]+=s;return n},_=["https://mirrors.cloud.tencent.com/npm/q78kgblog/latest"],x=function(){var u=f(function(r){return l(this,function(s){return[2,d(r,r[0]).then(function(n){return n.json()}).then(function(n){return n.version})]})});return function(s){return u.apply(this,arguments)}}();self.db={read:function(u,r){return r||(r={type:"text"}),new Promise(function(s,n){caches.open(g.CACHE_NAME).then(function(e){e.match(new Request("https://LOCALCACHE/".concat(encodeURIComponent(u)))).then(function(a){a||s(null),a.text().then(function(i){return s(i)})}).catch(function(){s(null)})})})},write:function(u,r){return new Promise(function(s,n){caches.open(g.CACHE_NAME).then(function(e){e.put(new Request("https://LOCALCACHE/".concat(encodeURIComponent(u))),new Response(r)),s()}).catch(function(){n()})})}};var b=function(){var u=f(function(r){return l(this,function(s){return[2,d(r,r[0]).then(function(n){return n.json()}).then(function(){var n=f(function(e){return l(this,function(a){switch(a.label){case 0:return[4,db.write("blog_version",e.version)];case 1:return a.sent(),[2]}})});return function(e){return n.apply(this,arguments)}}())]})});return function(s){return u.apply(this,arguments)}}();setInterval(f(function(){return l(this,function(u){switch(u.label){case 0:return[4,b(_)];case 1:return u.sent(),[2]}})}),g.UPDATE_INTERVAL),setTimeout(f(function(){return l(this,function(u){switch(u.label){case 0:return[4,b(_)];case 1:return u.sent(),[2]}})}),g.STARTUP_DELAY);var C={html:"text/html",htm:"text/html",js:"text/javascript",css:"text/css",jpg:"image/jpeg",jpeg:"image/jpeg",ico:"image/x-icon",png:"image/png"};function T(u){var r=u.split(".").pop().toLowerCase();return C[r]||"text/plain"}var R=function(){var u=f(function(r){var s,n,e,a,i,o,c,t,h;return l(this,function(p){switch(p.label){case 0:if(s=new URL(r.url),n=s.pathname,e=s.hostname,e!==g.TARGET_DOMAIN)return[3,6];p.label=1;case 1:return p.trys.push([1,5,,6]),[4,db.read("blog_version")];case 2:if(a=p.sent()||g.DEFAULT_VERSION,i=A("q78kgblog",a,v(n)),!i||i.length===0)throw new Error("\u65E0\u6548\u7684\u8D44\u6E90URL");return[4,d(i)];case 3:if(o=p.sent(),!o)throw new Error("\u8D44\u6E90\u83B7\u53D6\u5931\u8D25");return[4,o.arrayBuffer()];case 4:return c=p.sent(),t=v(n).split("/").pop().split("\\").pop(),[2,new Response(c,{headers:{"Content-Type":"".concat(T(t),";charset=utf-8")}})];case 5:return h=p.sent(),[2,(console.error("Resource fetch error:",h),y(r,"\u8D44\u6E90\u52A0\u8F7D\u5931\u8D25: ".concat(h.message)))];case 6:return[2,fetch(r)]}})});return function(s){return u.apply(this,arguments)}}()});