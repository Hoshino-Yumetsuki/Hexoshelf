(function(s,f){typeof module=="object"&&typeof module.exports=="object"?f():typeof define=="function"&&define.amd?define([],f):(s=typeof globalThis<"u"?globalThis:s||self)&&f()})(this,function(){function s(o,u,i,r,e,l,t){try{var a=o[l](t),c=a.value}catch(n){i(n);return}a.done?u(c):Promise.resolve(c).then(r,e)}function f(o){return function(){var u=this,i=arguments;return new Promise(function(r,e){var l=o.apply(u,i);function t(c){s(l,r,e,t,a,"next",c)}function a(c){s(l,r,e,t,a,"throw",c)}t(void 0)})}}function d(o,u){var i,r,e,l,t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]};return l={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function a(n){return function(h){return c([n,h])}}function c(n){if(i)throw new TypeError("Generator is already executing.");for(;t;)try{if(i=1,r&&(e=n[0]&2?r.return:n[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,n[1])).done)return e;switch(r=0,e&&(n=[n[0]&2,e.value]),n[0]){case 0:case 1:e=n;break;case 4:return t.label++,{value:n[1],done:!1};case 5:t.label++,r=n[1],n=[0];continue;case 7:n=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(n[0]===6||n[0]===2)){t=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){t.label=n[1];break}if(n[0]===6&&t.label<e[1]){t.label=e[1],e=n;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(n);break}e[2]&&t.ops.pop(),t.trys.pop();continue}n=u.call(o,t)}catch(h){n=[6,h],r=0}finally{i=e=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}}(function(){var o={UNINSTALLED:0,INTERRUPTED:1,INSTALLED:2,ACTIVATED:3},u="ChenBlogHelper_Set";f(function(){var i,r;return d(this,function(e){switch(e.label){case 0:if(!("serviceWorker"in navigator))return[2];i=Number(localStorage.getItem(u))||0,i<o.INTERRUPTED&&(localStorage.setItem(u,o.INTERRUPTED),window.stop(),document.documentElement.innerHTML=""),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,navigator.serviceWorker.register("/sw.js?time=".concat(Date.now()))];case 2:return e.sent(),i<o.INSTALLED&&setTimeout(function(){localStorage.setItem(u,o.INSTALLED),window.location.reload()},500),[3,4];case 3:return r=e.sent(),console.error("Service Worker \u6CE8\u518C\u5931\u8D25:",r),[3,4];case 4:return[2]}})})()})()});