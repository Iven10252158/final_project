(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ecdc15e"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},1799:function(t,e,i){"use strict";var o=i("7a23"),n={"aria-label":"Page navigation example"},c={class:"pagination"},a=Object(o["createVNode"])("span",{"aria-hidden":"true"},"«",-1),r=Object(o["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function s(t,e,i,s,l,d){return Object(o["openBlock"])(),Object(o["createBlock"])("nav",n,[Object(o["createVNode"])("ul",c,[Object(o["createVNode"])("li",{class:["page-item",{disabled:1===i.pages.current_page}]},[Object(o["createVNode"])("a",{class:"page-link ",href:"#","aria-label":"Previous",onClick:e[1]||(e[1]=Object(o["withModifiers"])((function(t){return d.change(i.pages.current_page-1)}),["prevent"]))},[a])],2),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(i.pages.total_pages,(function(t,e){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:["page-item ",{active:i.pages.current_page===t}],key:e},[Object(o["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(o["withModifiers"])((function(e){return d.change(t)}),["prevent"])},Object(o["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(o["createVNode"])("li",{class:["page-item",{disabled:i.pages.current_page===i.pages.total_pages}]},[Object(o["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[2]||(e[2]=Object(o["withModifiers"])((function(t){return d.change(i.pages.current_page+1)}),["prevent"]))},[r])],2)])])}var l={props:["pages"],emits:["change-page"],methods:{change:function(t){this.$emit("change-page",t)}}};l.render=s;e["a"]=l},2557:function(t,e,i){},"723c":function(t,e,i){"use strict";i("2557")},"841c":function(t,e,i){"use strict";var o=i("d784"),n=i("825a"),c=i("1d80"),a=i("129f"),r=i("14c3");o("search",1,(function(t,e,i){return[function(e){var i=c(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,i):new RegExp(e)[t](String(i))},function(t){var o=i(e,t,this);if(o.done)return o.value;var c=n(t),s=String(this),l=c.lastIndex;a(l,0)||(c.lastIndex=0);var d=r(c,s);return a(c.lastIndex,l)||(c.lastIndex=l),null===d?-1:d.index}]}))},8786:function(t,e,i){"use strict";var o=i("7a23"),n={class:"d-flex flex-column flex-sm-row justify-content-sm-center align-items-center\n      text-white bg-secondary py-3"},c=Object(o["createVNode"])("div",{class:"pt-2"},[Object(o["createVNode"])("h5",{class:"mb-0"},"僅作業練習，無任何商業用途")],-1);function a(t,e){return Object(o["openBlock"])(),Object(o["createBlock"])("footer",n,[c])}const r={};r.render=a;e["a"]=r},ad30:function(t,e,i){},af2e:function(t,e,i){
/*!
  * Bootstrap tooltip.js v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,o){t.exports=o(i("1235"),i("848f"),i("6ee1"),i("6a95"),i("109e"),i("302d"))})(0,(function(t,e,i,o,n,c){"use strict";function a(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}function r(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(i){if("default"!==i){var o=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:function(){return t[i]}})}})),e["default"]=t,Object.freeze(e)}var s=r(t),l=a(e),d=a(i),u=a(o),h=a(n),p=a(c);const f=1e6,g=t=>null===t||void 0===t?""+t:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),m=t=>{do{t+=Math.floor(Math.random()*f)}while(document.getElementById(t));return t},b=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),v=t=>b(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?l["default"].findOne(t):null,_=(t,e,i)=>{Object.keys(i).forEach(o=>{const n=i[o],c=e[o],a=c&&b(c)?"element":g(c);if(!new RegExp(n).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${o}" provided type "${a}" but expected type "${n}".`)})},y=t=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?y(t.parentNode):null},O=()=>{},j=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},w=t=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()},N=()=>"rtl"===document.documentElement.dir,C=t=>{w(()=>{const e=j();if(e){const i=t.NAME,o=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=o,t.jQueryInterface)}})},E=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),T=/^aria-[\w-]*$/i,k=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,V=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,L=(t,e)=>{const i=t.nodeName.toLowerCase();if(e.includes(i))return!E.has(i)||Boolean(k.test(t.nodeValue)||V.test(t.nodeValue));const o=e.filter(t=>t instanceof RegExp);for(let n=0,c=o.length;n<c;n++)if(o[n].test(i))return!0;return!1},x={"*":["class","dir","id","lang","role",T],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function S(t,e,i){if(!t.length)return t;if(i&&"function"===typeof i)return i(t);const o=new window.DOMParser,n=o.parseFromString(t,"text/html"),c=Object.keys(e),a=[].concat(...n.body.querySelectorAll("*"));for(let r=0,s=a.length;r<s;r++){const t=a[r],i=t.nodeName.toLowerCase();if(!c.includes(i)){t.parentNode.removeChild(t);continue}const o=[].concat(...t.attributes),n=[].concat(e["*"]||[],e[i]||[]);o.forEach(e=>{L(e,n)||t.removeAttribute(e.nodeName)})}return n.body.innerHTML}const B="tooltip",P="bs.tooltip",F="."+P,I="bs-tooltip",A=new RegExp(`(^|\\s)${I}\\S+`,"g"),D=new Set(["sanitize","allowList","sanitizeFn"]),M={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},$={AUTO:"auto",TOP:"top",RIGHT:N()?"left":"right",BOTTOM:"bottom",LEFT:N()?"right":"left"},z={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:x,popperConfig:null},H={HIDE:"hide"+F,HIDDEN:"hidden"+F,SHOW:"show"+F,SHOWN:"shown"+F,INSERTED:"inserted"+F,CLICK:"click"+F,FOCUSIN:"focusin"+F,FOCUSOUT:"focusout"+F,MOUSEENTER:"mouseenter"+F,MOUSELEAVE:"mouseleave"+F},U="fade",R="modal",q="show",W="show",Q="out",K=".tooltip-inner",J="hover",Y="focus",G="click",X="manual";class Z extends p["default"]{constructor(t,e){if("undefined"===typeof s)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return z}static get NAME(){return B}static get Event(){return H}static get DefaultType(){return M}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains(q))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),u["default"].off(this._element.closest("."+R),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.parentNode&&this.tip.parentNode.removeChild(this.tip),this._popper&&this._popper.destroy(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const t=u["default"].trigger(this._element,this.constructor.Event.SHOW),e=y(this._element),i=null===e?this._element.ownerDocument.documentElement.contains(this._element):e.contains(this._element);if(t.defaultPrevented||!i)return;const o=this.getTipElement(),n=m(this.constructor.NAME);o.setAttribute("id",n),this._element.setAttribute("aria-describedby",n),this.setContent(),this._config.animation&&o.classList.add(U);const c="function"===typeof this._config.placement?this._config.placement.call(this,o,this._element):this._config.placement,a=this._getAttachment(c);this._addAttachmentClass(a);const{container:r}=this._config;d["default"].set(o,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(r.appendChild(o),u["default"].trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=s.createPopper(this._element,o,this._getPopperConfig(a)),o.classList.add(q);const l="function"===typeof this._config.customClass?this._config.customClass():this._config.customClass;l&&o.classList.add(...l.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>{u["default"].on(t,"mouseover",O)});const h=()=>{const t=this._hoverState;this._hoverState=null,u["default"].trigger(this._element,this.constructor.Event.SHOWN),t===Q&&this._leave(null,this)},p=this.tip.classList.contains(U);this._queueCallback(h,this.tip,p)}hide(){if(!this._popper)return;const t=this.getTipElement(),e=()=>{this._isWithActiveTrigger()||(this._hoverState!==W&&t.parentNode&&t.parentNode.removeChild(t),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),u["default"].trigger(this._element,this.constructor.Event.HIDDEN),this._popper&&(this._popper.destroy(),this._popper=null))},i=u["default"].trigger(this._element,this.constructor.Event.HIDE);if(i.defaultPrevented)return;t.classList.remove(q),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>u["default"].off(t,"mouseover",O)),this._activeTrigger[G]=!1,this._activeTrigger[Y]=!1,this._activeTrigger[J]=!1;const o=this.tip.classList.contains(U);this._queueCallback(e,this.tip,o),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");return t.innerHTML=this._config.template,this.tip=t.children[0],this.tip}setContent(){const t=this.getTipElement();this.setElementContent(l["default"].findOne(K,t),this.getTitle()),t.classList.remove(U,q)}setElementContent(t,e){if(null!==t)return b(e)?(e=v(e),void(this._config.html?e.parentNode!==t&&(t.innerHTML="",t.appendChild(e)):t.textContent=e.textContent)):void(this._config.html?(this._config.sanitize&&(e=S(e,this._config.allowList,this._config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){let t=this._element.getAttribute("data-bs-original-title");return t||(t="function"===typeof this._config.title?this._config.title.call(this._element):this._config.title),t}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){const i=this.constructor.DATA_KEY;return e=e||d["default"].get(t.delegateTarget,i),e||(e=new this.constructor(t.delegateTarget,this._getDelegateConfig()),d["default"].set(t.delegateTarget,i,e)),e}_getOffset(){const{offset:t}=this._config;return"string"===typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"===typeof t?e=>t(e,this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add(`${I}-${this.updateAttachment(t)}`)}_getAttachment(t){return $[t.toUpperCase()]}_setListeners(){const t=this._config.trigger.split(" ");t.forEach(t=>{if("click"===t)u["default"].on(this._element,this.constructor.Event.CLICK,this._config.selector,t=>this.toggle(t));else if(t!==X){const e=t===J?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,i=t===J?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;u["default"].on(this._element,e,this._config.selector,t=>this._enter(t)),u["default"].on(this._element,i,this._config.selector,t=>this._leave(t))}}),this._hideModalHandler=()=>{this._element&&this.hide()},u["default"].on(this._element.closest("."+R),"hide.bs.modal",this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?Y:J]=!0),e.getTipElement().classList.contains(q)||e._hoverState===W?e._hoverState=W:(clearTimeout(e._timeout),e._hoverState=W,e._config.delay&&e._config.delay.show?e._timeout=setTimeout(()=>{e._hoverState===W&&e.show()},e._config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?Y:J]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=Q,e._config.delay&&e._config.delay.hide?e._timeout=setTimeout(()=>{e._hoverState===Q&&e.hide()},e._config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=h["default"].getDataAttributes(this._element);return Object.keys(e).forEach(t=>{D.has(t)&&delete e[t]}),t={...this.constructor.Default,...e,..."object"===typeof t&&t?t:{}},t.container=!1===t.container?document.body:v(t.container),"number"===typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"===typeof t.title&&(t.title=t.title.toString()),"number"===typeof t.content&&(t.content=t.content.toString()),_(B,t,this.constructor.DefaultType),t.sanitize&&(t.template=S(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};if(this._config)for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=t.getAttribute("class").match(A);null!==e&&e.length>0&&e.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}static jQueryInterface(t){return this.each((function(){let e=d["default"].get(this,P);const i="object"===typeof t&&t;if((e||!/dispose|hide/.test(t))&&(e||(e=new Z(this,i)),"string"===typeof t)){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}return C(Z),Z}))},e066:function(t,e,i){"use strict";i("ad30")},ed84:function(t,e,i){"use strict";i.r(e);i("ac1f"),i("841c"),i("caad"),i("2532");var o=i("7a23"),n=Object(o["withScopeId"])("data-v-8700d944");Object(o["pushScopeId"])("data-v-8700d944");var c=Object(o["createVNode"])("div",{class:"loadingio-spinner-dual-ring-7s087i3q3b3"},[Object(o["createVNode"])("div",{class:"ldio-us6frdv3wm"},[Object(o["createVNode"])("div"),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("div")])])],-1),a=Object(o["createVNode"])("div",{class:"banner bg-cover d-flex justify-content-center align-items-center",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1627615134814.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PMQQk6pbNyAtESd828Cny9woEZ6Z3b2zWk5CvL04q9Ymf4cS9dK6abpugaCOA4l0rrSlBL2lARn5myoJdFoNEaqo5FUrgu8FybI1I%2FRsfMQiy%2FpnZDbslgso0nyiz1Tbxh3sgD6rDHYj68ihIjjja4BxJWG%2F%2BgNreqRBRF0KTOwThcMyLCK5JrypKIwRbi7tM%2BUdX435WTxZM65fwRq3ak2DX%2BmDHTL8k3TPEvQtK6Qg3Sp3egqI3MgFqikG%2F8WDkm%2B3wcXFgtmBaS671l36XPehn%2BMFWLr%2F3ewlVio0G2pge6WDcL8HM70SOYHvJsBsErNxUCephQkDQaw9eVCUIw%3D%3D')",height:"500px"}},[Object(o["createVNode"])("div",{class:"banner-text text-white"},[Object(o["createVNode"])("div",{class:"fs-1"},"產品列表")])],-1),r={class:"container"},s={class:"row"},l={class:"col-md-3"},d={class:"mt-4"},u={class:"row sticky-md-top"},h={class:"mt-3"},p={class:"col-md-9"},f={class:"row"},g={class:"card h-100"},m=Object(o["createTextVNode"])(" 查看更多 "),b={class:"card-body pb-2"},v={class:"card-title text-hidden"},_={class:"card-text d-flex justify-content-between"},y={key:0},O={class:"text-primary"},j={class:"text-color"},w={class:"d-flex justify-content-between mt-3"},N={key:0},C=Object(o["createVNode"])("i",{class:"fas fa-heart"},null,-1),E={key:1},T=Object(o["createVNode"])("i",{class:"far fa-heart"},null,-1),k={key:0},V=Object(o["createVNode"])("i",{class:"fas fa-cart-plus"},null,-1),L={class:"d-flex justify-content-center"};Object(o["popScopeId"])();var x=n((function(t,e,i,x,S,B){var P=Object(o["resolveComponent"])("Loading"),F=Object(o["resolveComponent"])("router-link"),I=Object(o["resolveComponent"])("CartTooltip"),A=Object(o["resolveComponent"])("Pagination"),D=Object(o["resolveComponent"])("Footer"),M=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(P,{active:S.isLoading},{default:n((function(){return[c]})),_:1},8,["active"]),a,Object(o["createVNode"])("div",r,[Object(o["createVNode"])("div",s,[Object(o["createVNode"])("div",l,[Object(o["createVNode"])("div",d,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control rounded-1",placeholder:"請輸入關鍵字","onUpdate:modelValue":e[1]||(e[1]=function(t){return S.search=t}),onInput:e[2]||(e[2]=function(t){return B.searchProduct(S.search)})},null,544),[[o["vModelText"],S.search]])]),Object(o["createVNode"])("div",u,[Object(o["createVNode"])("div",h,[Object(o["createVNode"])("ul",{class:["list-group pe-auto siderBarLeft rounded-1",S.siderBarLeft.beLeft]},[Object(o["createVNode"])("li",{class:["list-group-item list-group-item-action",{"bg-primary":"total"===S.productValue,"text-white":"total"===S.productValue}],onClick:e[3]||(e[3]=function(e){return B.changeProduct(t.item,t.index)})}," 全部商品 ",2),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(S.productName,(function(t,e){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:["list-group-item list-group-item-action",{"bg-primary":t===S.productValue,"text-white":t===S.productValue}],key:e,onClick:function(e){return B.changeProduct(t)}},Object(o["toDisplayString"])(t),11,["onClick"])})),128))],2)])])]),Object(o["createVNode"])("div",p,[Object(o["createVNode"])("div",f,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(S.typeProduct,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"col-md-6 col-xl-4 my-4",key:e.id},[Object(o["createVNode"])("div",g,[Object(o["createVNode"])("div",{class:"bg-cover product_image position-relative",style:{backgroundImage:"url("+e.imageUrl+")",height:"200px"}},[Object(o["createVNode"])(F,{class:"mask text-white text-center fs-4 fw-bold position-absolute",to:"/product/".concat(e.id)},{default:n((function(){return[m]})),_:2},1032,["to"])],4),Object(o["createVNode"])("div",b,[Object(o["createVNode"])("h6",v,[Object(o["createVNode"])(F,{class:"text-grey products_title",to:"/product/".concat(e.id)},{default:n((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title),1)]})),_:2},1032,["to"])]),Object(o["createVNode"])("div",_,[e.origin_price!==e.price?(Object(o["openBlock"])(),Object(o["createBlock"])("div",y,[Object(o["createVNode"])("del",O,"NT"+Object(o["toDisplayString"])(t.$filters.currency(e.origin_price)),1)])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("h6",j,"NT "+Object(o["toDisplayString"])(t.$filters.currency(e.price)),1)]),Object(o["createVNode"])("div",w,[Object(o["createVNode"])("button",{type:"button",class:"styleBtn favoBtn btn btn-outline-favorite border-0 ps-0",onClick:function(t){return B.addMyFavorite(e)}},[S.myFavorite.includes(e.id)?(Object(o["openBlock"])(),Object(o["createBlock"])("span",N,[C])):(Object(o["openBlock"])(),Object(o["createBlock"])("span",E,[T]))],8,["onClick"]),S.productId.includes(e.id)?(Object(o["openBlock"])(),Object(o["createBlock"])("div",k,[Object(o["createVNode"])(I)])):(Object(o["openBlock"])(),Object(o["createBlock"])("button",{key:1,class:["styleBtn cartBtn btn btn-outline-primary border-0 pe-0",{disabled:S.productId.includes(e.id)}],onClick:function(t){return B.addToCart(e)}},[V],10,["onClick"]))])])])])})),128))])])]),Object(o["createVNode"])("div",L,[Object(o["createVNode"])(A,{pages:S.pagination,onChangePage:B.getProducts},null,8,["pages","onChangePage"])]),Object(o["createVNode"])(I)]),Object(o["createVNode"])(D),Object(o["createVNode"])(M)],64)})),S=(i("a434"),i("99af"),i("4de4"),i("466d"),i("159b"),i("1799")),B=i("8786"),P={class:"d-block","data-bs-toggle":"tooltip",ref:"toolTip","data-bs-original-title":"已加入購物車，超過人數請與客服聯繫"},F=Object(o["createVNode"])("button",{class:"styleBtn cartBtn btn btn-outline-primary border-0 pe-0",type:"button",disabled:""},[Object(o["createVNode"])("i",{class:"fas fa-shopping-cart"})],-1);function I(t,e,i,n,c,a){return Object(o["openBlock"])(),Object(o["createBlock"])("span",P,[F],512)}var A=i("af2e"),D=i.n(A),M={data:function(){return{Tooltip:""}},methods:{showTooltip:function(){this.Tooltip.show()}},mounted:function(){this.Tooltip=new D.a(this.$refs.toolTip)}};i("723c");M.render=I;var $=M,z={setItem:function(t){var e=JSON.stringify(t);localStorage.setItem("MyFavorite",e)},getItem:function(){return JSON.parse(localStorage.getItem("MyFavorite"))}},H={inject:["emitter"],components:{Pagination:S["a"],Footer:B["a"],CartTooltip:$},data:function(){return{num:1,allProducts:[],products:[],productId:[],pagination:{},cart:[],typeProduct:[],productName:[],productValue:"",isLoading:!1,search:"",myFavorite:z.getItem()||[],siderBarLeft:{beLeft:!0}}},methods:{getFavorite:function(){this.myFavorite=z.getItem()||[]},addMyFavorite:function(t){this.myFavorite.includes(t.id)?(this.myFavorite.splice(this.myFavorite.indexOf(t.id),1),z.setItem(this.myFavorite),this.$swal({icon:"warning",title:"已從最愛中移除"})):(this.myFavorite.push(t.id),z.setItem(this.myFavorite),this.$swal({icon:"success",title:"儲存成功！"})),this.emitter.emit("favorite-qty")},getAllProducts:function(){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/products/all")).then((function(e){e.data.success&&(t.allProducts=e.data.products)})).catch((function(e){t.$swal({icon:"error",title:"".concat(e.data.message)})}))},searchProduct:function(t){var e=this;this.productValue="total",this.typeProduct=this.allProducts.filter((function(i){if(i.title.match(t))return i;e.productValue=""}))},changeProduct:function(t){var e=this;this.typeProduct=this.products.filter((function(i,o){return t===i.category?(e.productValue=t,i):void 0===t?(e.productValue="total",e.products):void 0}))},getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/products?page=").concat(e)).then((function(e){if(e.data.success){t.isLoading=!1;var i=e.data,o=i.products,n=i.pagination;t.products=o,t.typeProduct=t.products,t.pagination=n,t.products.filter((function(e){-1===t.productName.indexOf(e.category)&&t.productName.push(e.category)}))}})).catch((function(e){t.$swal({icon:"error",title:"".concat(e.data.message)})}))},addToCart:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var o={product_id:t.id,qty:i};this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/cart"),{data:o}).then((function(t){t.data.success&&(e.isLoading=!1,e.getCartList(),e.cart=t.data.data,e.$swal({icon:"success",title:"".concat(t.data.data.product.title," <br/>").concat(t.data.message)}),e.emitter.emit("update-qty"))})).catch((function(t){e.$swal({icon:"error",title:"".concat(t.data.message)})}))},getCartList:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.cart=e.data.data,t.cart.carts.forEach((function(e){t.productId.push(e.product_id)})))})).catch((function(e){t.$swal({icon:"error",title:"".concat(e.data.message)})}))}},unmounted:function(){var t=this;this.emitter.off("remove-data",(function(e){t.getFavorite()})),window.removeEventListener("scroll",(function(){var e=window.scrollY;t.siderBarLeft=e>395?{beLeft:"pt-6"}:{beLeft:""}}))},mounted:function(){var t=this;this.getAllProducts(),this.getCartList(),this.emitter.on("remove-data",(function(e){t.getFavorite()})),this.emitter.emit("favorite-qty",this.myFavorite),this.getProducts(),this.productValue="total",window.addEventListener("scroll",(function(){var e=window.scrollY;t.siderBarLeft=e>395?{beLeft:"pt-6"}:{beLeft:""}}))}};i("e066");H.render=x,H.__scopeId="data-v-8700d944";e["default"]=H}}]);
//# sourceMappingURL=chunk-6ecdc15e.e75422bb.js.map