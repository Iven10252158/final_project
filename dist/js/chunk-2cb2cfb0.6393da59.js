(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cb2cfb0"],{"1dde":function(e,t,c){var o=c("d039"),r=c("b622"),a=c("2d00"),n=r("species");e.exports=function(e){return a>=51||!o((function(){var t=[],c=t.constructor={};return c[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},6267:function(e,t,c){"use strict";c("634c")},"634c":function(e,t,c){},8418:function(e,t,c){"use strict";var o=c("c04e"),r=c("9bf2"),a=c("5c6c");e.exports=function(e,t,c){var n=o(t);n in e?r.f(e,n,a(0,c)):e[n]=c}},"99af":function(e,t,c){"use strict";var o=c("23e7"),r=c("d039"),a=c("e8b5"),n=c("861d"),i=c("7b0b"),s=c("50c4"),d=c("8418"),l=c("65f0"),u=c("1dde"),b=c("b622"),p=c("2d00"),f=b("isConcatSpreadable"),v=9007199254740991,j="Maximum allowed index exceeded",g=p>=51||!r((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),O=u("concat"),m=function(e){if(!n(e))return!1;var t=e[f];return void 0!==t?!!t:a(e)},h=!g||!O;o({target:"Array",proto:!0,forced:h},{concat:function(e){var t,c,o,r,a,n=i(this),u=l(n,0),b=0;for(t=-1,o=arguments.length;t<o;t++)if(a=-1===t?n:arguments[t],m(a)){if(r=s(a.length),b+r>v)throw TypeError(j);for(c=0;c<r;c++,b++)c in a&&d(u,b,a[c])}else{if(b>=v)throw TypeError(j);d(u,b++,a)}return u.length=b,u}})},d2f1:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),r=Object(o["createVNode"])("div",{class:"loadingio-spinner-dual-ring-7s087i3q3b3"},[Object(o["createVNode"])("div",{class:"ldio-us6frdv3wm"},[Object(o["createVNode"])("div"),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("div")])])],-1),a={class:"container mb-2 mt-7"},n={class:"row mt-3 mt-sm-3"},i={class:"col-12 col-sm-6"},s={class:"pb-3"},d={class:"col-12 col-sm-6"},l={class:"mb-3"},u={class:"card mb-4"},b={class:"card-body"},p=Object(o["createVNode"])("h5",{class:"card-title"},"【選擇方案】",-1),f={class:"d-flex justify-content-between"},v=Object(o["createVNode"])("h6",{class:"card-text"},"即刻報名，只要4人就能成團",-1),j={class:"card-text text-danger"},g=Object(o["createStaticVNode"])('<select class="form-select mb-3" aria-label="Default select example"><option selected>Open this select menu</option><option value="4">4人成團，搭配響導1名</option><option value="6">6人成團，搭配響導2名</option><option value="8">8人成團，搭配響導2名</option></select><h6 class="card-text mb-1 text-primary fw-bold">【費用包含】</h6><small class="card-text">領隊費、登山險、其他行政等作業支出、入山證、山屋申請、餐費</small><p class="card-text">超過10人請洽客服享額外優惠</p>',4),O={class:"card-footer bg-white border-0 pb-4 d-flex justify-content-between"},m={class:"card-text text-danger"},h=Object(o["createVNode"])("button",{type:"button",class:"btn btn-danger w-50"},"按我報名",-1),N=Object(o["createVNode"])("button",{type:"button",class:"btn btn-warning w-100"},"聯絡我們",-1),V=Object(o["createVNode"])("div",{class:"border-bottom border-3"},null,-1),w=Object(o["createVNode"])("div",{class:"row"},[Object(o["createVNode"])("div",{class:"col-6"}),Object(o["createVNode"])("div",{class:"col-6"})],-1);function x(e,t,c,x,k,y){var U=Object(o["resolveComponent"])("Loading");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(U,{active:k.isLoading},{default:Object(o["withCtx"])((function(){return[r]})),_:1},8,["active"]),Object(o["createVNode"])("div",a,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])("div",i,[Object(o["createVNode"])("div",{class:"bg-cover mb-3",style:{backgroundImage:"url("+k.imgUrl+")",height:"350px"}},null,4),Object(o["createVNode"])("div",s,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(k.imagesUrl,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("a",{href:"#",key:t,onClick:Object(o["withModifiers"])((function(c){return y.click(e,t)}),["prevent"])},[Object(o["createVNode"])("img",{class:"picture pe-2",src:e,alt:""},null,8,["src"])],8,["onClick"])})),128))])]),Object(o["createVNode"])("div",d,[Object(o["createVNode"])("h3",l,Object(o["toDisplayString"])(k.product.title),1),Object(o["createVNode"])("div",u,[Object(o["createVNode"])("div",b,[p,Object(o["createVNode"])("div",f,[v,Object(o["createVNode"])("p",j,"$"+Object(o["toDisplayString"])(k.product.price)+"/團",1)]),g]),Object(o["createVNode"])("div",O,[Object(o["createVNode"])("p",m,"小計 $"+Object(o["toDisplayString"])(k.product.price)+"元",1),h])]),N])]),V,w])],64)}c("99af");var k={data:function(){return{imgUrl:"",imagesUrl:[],product:{},id:"",isLoading:!1}},methods:{click:function(e,t){this.imgUrl=e},getProduct:function(){var e=this;this.id=this.$route.params.id,this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/product/").concat(this.id)).then((function(t){if(t.data.success){e.imgUrl=t.data.product.imageUrl,console.log(e.imgUrl),e.isLoading=!1;var c=t.data.product;e.product=c,console.log(t),e.imagesUrl=t.data.product.imagesUrl,console.log(e.imagesUrl)}}))}},mounted:function(){this.getProduct()}};c("6267");k.render=x;t["default"]=k}}]);
//# sourceMappingURL=chunk-2cb2cfb0.6393da59.js.map