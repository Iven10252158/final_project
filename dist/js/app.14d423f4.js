(function(e){function t(t){for(var a,r,u=t[0],i=t[1],l=t[2],d=0,b=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);s&&s(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1b2f71dd","chunk-03d9c75d":"663c7f7f","chunk-2d0c1282":"7192da06","chunk-305e29ba":"15680791","chunk-3260db4b":"eba9582a","chunk-06208fe4":"088f73b4","chunk-2eb8e011":"79354644","chunk-499d4847":"9a9f8114","chunk-64b85af0":"1eaf5699","chunk-f57d466e":"c9aee1bb"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-03d9c75d":1,"chunk-305e29ba":1,"chunk-06208fe4":1,"chunk-2eb8e011":1,"chunk-499d4847":1,"chunk-64b85af0":1,"chunk-f57d466e":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-03d9c75d":"4eb346dc","chunk-2d0c1282":"31d6cfe0","chunk-305e29ba":"5f580ed0","chunk-3260db4b":"31d6cfe0","chunk-06208fe4":"8102a509","chunk-2eb8e011":"8102a509","chunk-499d4847":"56d1167f","chunk-64b85af0":"e19537c3","chunk-f57d466e":"0bb8bd32"}[e]+".css",c=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===c))return t()}var b=document.getElementsByTagName("style");for(u=0;u<b.length;u++){l=b[u],d=l.getAttribute("data-href");if(d===a||d===c)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],s.parentNode.removeChild(s),n(o)},s.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(s)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var b=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",b.name="ChunkLoadError",b.type=a,b.request=r,n[1](b)}c[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var s=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("b64b");var a=n("7a23"),r=(n("15f5"),n("7051"),n("9062")),c=n.n(r),o=(n("e40d"),n("7bb1")),u=n("3aa8"),i=n("9457"),l=n("cbdf"),d=(n("7b17"),n("bc3a")),b=n.n(d),s=n("2106"),f=n.n(s);function p(e,t){var n=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createBlock"])(n)}n("e04b");const h={};h.render=p;var v=h,m=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),g=Object(a["createVNode"])("div",{class:"banner bg-cover d-flex justify-content-end align-items-center pe-5",style:{"background-image":"url('https://images.unsplash.com/photo-1511497584788-876760111969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80')",height:"600px"}},[Object(a["createVNode"])("div",{class:"banner-text text-white"},[Object(a["createVNode"])("h1",null,"CLIMBER"),Object(a["createVNode"])("h3",null,"最美的風景，在台灣"),Object(a["createVNode"])("h5",null,"那些你值得知道的山林小故事")])],-1);function j(e,t,n,r,c,o){var u=Object(a["resolveComponent"])("NavBar"),i=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(u),g,Object(a["createVNode"])(i)],64)}var O=n("d178"),k={name:"Home",components:{NavBar:O["a"]}};n("c05a");k.render=j;var N=k,w=[{path:"/",component:N,children:[{path:"index",component:function(){return n.e("chunk-03d9c75d").then(n.bind(null,"d504"))}},{path:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]},{path:"/products",component:function(){return n.e("chunk-f57d466e").then(n.bind(null,"e6dc"))}},{path:"/product/:id",component:function(){return n.e("chunk-305e29ba").then(n.bind(null,"d2f1"))}},{path:"/cart",component:function(){return n.e("chunk-64b85af0").then(n.bind(null,"b789"))}},{path:"/login",component:function(){return n.e("chunk-499d4847").then(n.bind(null,"a55b"))}},{path:"/admin",component:function(){return n.e("chunk-2d0c1282").then(n.bind(null,"459d"))},children:[{path:"admin_products",component:function(){return Promise.all([n.e("chunk-3260db4b"),n.e("chunk-06208fe4")]).then(n.bind(null,"6aeb"))}},{path:"admin_coupons",component:function(){return Promise.all([n.e("chunk-3260db4b"),n.e("chunk-2eb8e011")]).then(n.bind(null,"30e7"))}}]}],x=Object(m["a"])({history:Object(m["b"])(),routes:w,linkActiveClass:"text-dark"}),y=x;n("ac1f"),n("5319"),n("b680");function V(e){var t=parseInt(e,10);return"".concat(t.toFixed(0).replace(/./g,(function(e,t,n){return t&&"."!==e&&(n.length-t)%3===0?", ".concat(e).replace(/\s/g,""):e})))}function C(e){var t=new Date(1e3*e);return t.toLocaleDateString()}Object.keys(u["a"]).forEach((function(e){Object(o["e"])(e,u["a"][e])})),Object(o["d"])({generateMessage:Object(l["a"])({zh_TW:i}),validateOnInput:!0}),Object(l["b"])("zh_TW");var _=Object(a["createApp"])(v);_.config.globalProperties.$filters={currency:V,date:C},_.component("Form",o["c"]),_.component("Field",o["b"]),_.component("ErrorMessage",o["a"]),_.component("Loading",c.a),_.use(f.a,b.a),_.use(y),_.mount("#app")},"8ba7":function(e,t,n){},"8bfb":function(e,t,n){e.exports=n.p+"img/Climbing.3f01f127.svg"},c05a:function(e,t,n){"use strict";n("8ba7")},d178:function(e,t,n){"use strict";var a=n("7a23"),r=n("8bfb"),c=n.n(r),o={class:"container"},u={class:"navbar-brand"},i=Object(a["createVNode"])("img",{src:c.a,width:"50",alt:""},null,-1),l=Object(a["createVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarNav"},b={class:"navbar-nav me-auto mb-0 mb-lg-0 pt-2"},s={class:"nav-item"},f=Object(a["createTextVNode"])("首頁"),p={class:"nav-item"},h=Object(a["createTextVNode"])("關於我們"),v={class:"nav-item"},m=Object(a["createTextVNode"])("產品列表"),g={class:"d-flex"},j=Object(a["createVNode"])("i",{class:"fas fa-user-alt"},null,-1),O=Object(a["createVNode"])("i",{class:" fas fa-cart-plus"},null,-1);function k(e,t,n,r,c,k){var N=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])("nav",{class:["navbar navbar-expand-lg  navbar-dark py-0 fixed-top",c.classList.navBarTop]},[Object(a["createVNode"])("div",o,[Object(a["createVNode"])("a",u,[Object(a["createVNode"])(N,{to:"/index",class:"text-white fw-bold"},{default:Object(a["withCtx"])((function(){return[i]})),_:1})]),l,Object(a["createVNode"])("div",d,[Object(a["createVNode"])("ul",b,[Object(a["createVNode"])("li",s,[Object(a["createVNode"])(N,{to:"/index",class:"h6 nav-link"},{default:Object(a["withCtx"])((function(){return[f]})),_:1})]),Object(a["createVNode"])("li",p,[Object(a["createVNode"])(N,{to:"/about",class:"h6 nav-link"},{default:Object(a["withCtx"])((function(){return[h]})),_:1})]),Object(a["createVNode"])("li",v,[Object(a["createVNode"])(N,{to:"/products",class:"h6 nav-link"},{default:Object(a["withCtx"])((function(){return[m]})),_:1})])]),Object(a["createVNode"])("div",g,[Object(a["createVNode"])(N,{to:"/login",class:"h4 nav-link"},{default:Object(a["withCtx"])((function(){return[j]})),_:1}),Object(a["createVNode"])(N,{to:"/cart",class:"h4 fw-bold nav-link"},{default:Object(a["withCtx"])((function(){return[O]})),_:1})])])])],2)}var N={data:function(){return{classList:{navBarTop:""}}},mounted:function(){var e=this;window.addEventListener("scroll",(function(){var t=window.scrollY;e.classList=t>1?{navBarTop:"bg-primary-bg"}:{navBarTop:""}}))}};N.render=k;t["a"]=N},e04b:function(e,t,n){"use strict";n("e3e8")},e3e8:function(e,t,n){}});
//# sourceMappingURL=app.14d423f4.js.map