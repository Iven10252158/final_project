(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4acc71a9"],{"088f":function(e,t,c){"use strict";c("6d46")},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},1799:function(e,t,c){"use strict";var a=c("7a23"),o={"aria-label":"Page navigation example"},r={class:"pagination"},i=Object(a["createVNode"])("span",{"aria-hidden":"true"},"«",-1),n=Object(a["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function s(e,t,c,s,d,l){return Object(a["openBlock"])(),Object(a["createBlock"])("nav",o,[Object(a["createVNode"])("ul",r,[Object(a["createVNode"])("li",{class:["page-item",{disabled:1===c.pages.current_page}]},[Object(a["createVNode"])("a",{class:"page-link ",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return l.change(c.pages.current_page-1)}),["prevent"]))},[i])],2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.pages.total_pages,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item ",{active:c.pages.current_page===e}],key:t},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(a["withModifiers"])((function(t){return l.change(e)}),["prevent"])},Object(a["toDisplayString"])(e),9,["onClick"])],2)})),128)),Object(a["createVNode"])("li",{class:["page-item",{disabled:c.pages.current_page===c.pages.total_pages}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return l.change(c.pages.current_page+1)}),["prevent"]))},[n])],2)])])}var d={props:["pages"],emits:["change-page"],methods:{change:function(e){this.$emit("change-page",e)}}};d.render=s;t["a"]=d},"466d":function(e,t,c){"use strict";var a=c("d784"),o=c("825a"),r=c("50c4"),i=c("1d80"),n=c("8aa5"),s=c("14c3");a("match",1,(function(e,t,c){return[function(t){var c=i(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,c):new RegExp(t)[e](String(c))},function(e){var a=c(t,e,this);if(a.done)return a.value;var i=o(e),d=String(this);if(!i.global)return s(i,d);var l=i.unicode;i.lastIndex=0;var u,p=[],b=0;while(null!==(u=s(i,d))){var g=String(u[0]);p[b]=g,""===g&&(i.lastIndex=n(d,r(i.lastIndex),l)),b++}return 0===b?null:p}]}))},"6d46":function(e,t,c){},"841c":function(e,t,c){"use strict";var a=c("d784"),o=c("825a"),r=c("1d80"),i=c("129f"),n=c("14c3");a("search",1,(function(e,t,c){return[function(t){var c=r(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,c):new RegExp(t)[e](String(c))},function(e){var a=c(t,e,this);if(a.done)return a.value;var r=o(e),s=String(this),d=r.lastIndex;i(d,0)||(r.lastIndex=0);var l=n(r,s);return i(r.lastIndex,d)||(r.lastIndex=d),null===l?-1:l.index}]}))},ed84:function(e,t,c){"use strict";c.r(t);c("ac1f"),c("841c"),c("caad"),c("2532");var a=c("7a23"),o=Object(a["createVNode"])("div",{class:"loadingio-spinner-dual-ring-7s087i3q3b3"},[Object(a["createVNode"])("div",{class:"ldio-us6frdv3wm"},[Object(a["createVNode"])("div"),Object(a["createVNode"])("div",null,[Object(a["createVNode"])("div")])])],-1),r=Object(a["createVNode"])("div",{class:"banner bg-cover d-flex justify-content-center align-items-center",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/iven_vue3_course/1627615134814.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PMQQk6pbNyAtESd828Cny9woEZ6Z3b2zWk5CvL04q9Ymf4cS9dK6abpugaCOA4l0rrSlBL2lARn5myoJdFoNEaqo5FUrgu8FybI1I%2FRsfMQiy%2FpnZDbslgso0nyiz1Tbxh3sgD6rDHYj68ihIjjja4BxJWG%2F%2BgNreqRBRF0KTOwThcMyLCK5JrypKIwRbi7tM%2BUdX435WTxZM65fwRq3ak2DX%2BmDHTL8k3TPEvQtK6Qg3Sp3egqI3MgFqikG%2F8WDkm%2B3wcXFgtmBaS671l36XPehn%2BMFWLr%2F3ewlVio0G2pge6WDcL8HM70SOYHvJsBsErNxUCephQkDQaw9eVCUIw%3D%3D')",height:"400px"}},[Object(a["createVNode"])("div",{class:"banner-text text-white"},[Object(a["createVNode"])("h1",{class:"pt-1"},"產品列表")])],-1),i={class:"container"},n={class:"row"},s={class:"col-md-3"},d={class:"mt-4"},l={class:"row sticky-md-top"},u={class:"mt-3"},p={class:"col-md-9"},b={class:"row"},g={class:"card h-100"},h=Object(a["createTextVNode"])(" 查看更多 "),f={class:"card-body"},v={class:"card-title text-hidden"},j={class:"card-text d-flex justify-content-between"},O={key:0},m={class:"text-primary"},y={class:"text-color"},N={class:"card-footer bg-white border-0 pb-0"},V={class:"d-flex justify-content-between"},k={key:0},x=Object(a["createVNode"])("i",{class:"fas fa-heart"},null,-1),w={key:1},B=Object(a["createVNode"])("i",{class:"far fa-heart"},null,-1),F={key:0},C=Object(a["createVNode"])("i",{class:"fas fa-shopping-cart"},null,-1),I={key:1},L=Object(a["createVNode"])("i",{class:"fas fa-cart-plus"},null,-1),P={class:"d-flex justify-content-center"};function _(e,t,c,_,S,D){var M=Object(a["resolveComponent"])("Loading"),T=Object(a["resolveComponent"])("router-link"),q=Object(a["resolveComponent"])("Pagination"),E=Object(a["resolveComponent"])("Footer"),$=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(M,{active:S.isLoading},{default:Object(a["withCtx"])((function(){return[o]})),_:1},8,["active"]),r,Object(a["createVNode"])("div",i,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",s,[Object(a["createVNode"])("div",d,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control rounded-1",placeholder:"請輸入關鍵字","onUpdate:modelValue":t[1]||(t[1]=function(e){return S.search=e}),onInput:t[2]||(t[2]=function(e){return D.searchProduct(S.search)})},null,544),[[a["vModelText"],S.search]])]),Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",u,[Object(a["createVNode"])("ul",{class:["list-group pe-auto siderBarLeft rounded-1",S.siderBarLeft.beLeft]},[Object(a["createVNode"])("li",{class:["list-group-item list-group-item-action",{"bg-primary":"total"===S.productValue,"text-white":"total"===S.productValue}],onClick:t[3]||(t[3]=function(t){return D.changeProduct(e.item,e.index)})}," 全部商品 ",2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(S.productName,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["list-group-item list-group-item-action",{"bg-primary":e===S.productValue,"text-white":e===S.productValue}],key:t,onClick:function(t){return D.changeProduct(e)}},Object(a["toDisplayString"])(e),11,["onClick"])})),128))],2)])])]),Object(a["createVNode"])("div",p,[Object(a["createVNode"])("div",b,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(S.typeProduct,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"col-md-6 col-xl-4 my-4",key:t.id},[Object(a["createVNode"])("div",g,[Object(a["createVNode"])("div",{class:"bg-cover product_image position-relative",style:{backgroundImage:"url("+t.imageUrl+")",height:"200px"}},[Object(a["createVNode"])(T,{class:"mask text-white text-center fs-4 fw-bold position-absolute",to:"/product/".concat(t.id)},{default:Object(a["withCtx"])((function(){return[h]})),_:2},1032,["to"])],4),Object(a["createVNode"])("div",f,[Object(a["createVNode"])("h6",v,[Object(a["createVNode"])(T,{class:"text-grey products_title",to:"/product/".concat(t.id)},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.title),1)]})),_:2},1032,["to"])]),Object(a["createVNode"])("div",j,[t.origin_price!==t.price?(Object(a["openBlock"])(),Object(a["createBlock"])("div",O,[Object(a["createVNode"])("del",m,"NT"+Object(a["toDisplayString"])(e.$filters.currency(t.origin_price)),1)])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("h6",y,"NT "+Object(a["toDisplayString"])(e.$filters.currency(t.price)),1)])]),Object(a["createVNode"])("div",N,[Object(a["createVNode"])("div",V,[Object(a["createVNode"])("button",{type:"button",class:"styleBtn favoBtn h5 btn btn-outline-favorite border-0 ",onClick:function(e){return D.addMyFavorite(t)}},[S.myFavorite.includes(t.id)?(Object(a["openBlock"])(),Object(a["createBlock"])("span",k,[x])):(Object(a["openBlock"])(),Object(a["createBlock"])("span",w,[B]))],8,["onClick"]),Object(a["createVNode"])("button",{type:"button",class:["styleBtn cartBtn btn btn-outline-primary border-0",{disabled:S.productId.includes(t.id)}],onClick:function(e){return D.addToCart(t)}},[S.productId.includes(t.id)?(Object(a["openBlock"])(),Object(a["createBlock"])("span",F,[C])):(Object(a["openBlock"])(),Object(a["createBlock"])("span",I,[L]))],10,["onClick"])])])])])})),128))])])]),Object(a["createVNode"])("div",P,[Object(a["createVNode"])(q,{pages:S.pagination,onChangePage:D.getProducts},null,8,["pages","onChangePage"])])]),Object(a["createVNode"])(E),Object(a["createVNode"])($)],64)}c("a434"),c("99af"),c("4de4"),c("466d"),c("159b");var S=c("1799"),D=c("fd2d"),M={setItem:function(e){var t=JSON.stringify(e);localStorage.setItem("MyFavorite",t)},getItem:function(){return JSON.parse(localStorage.getItem("MyFavorite"))}},T={inject:["emitter"],components:{Pagination:S["a"],Footer:D["a"]},data:function(){return{num:1,allProducts:[],products:[],productId:[],pagination:{},cart:[],typeProduct:[],productName:[],productValue:"",isLoading:!1,search:"",myFavorite:M.getItem()||[],siderBarLeft:{beLeft:!0}}},methods:{getFavorite:function(){this.myFavorite=M.getItem()||[],console.log(this.myFavorite)},addMyFavorite:function(e){this.myFavorite.includes(e.id)?(this.myFavorite.splice(this.myFavorite.indexOf(e.id),1),M.setItem(this.myFavorite),this.$swal({icon:"warning",title:"已從最愛中移除"})):(this.myFavorite.push(e.id),M.setItem(this.myFavorite),this.$swal({icon:"success",title:"儲存成功！"})),this.emitter.emit("favorite-qty")},getAllProducts:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/products/all")).then((function(t){t.data.success&&(e.allProducts=t.data.products)})).catch((function(e){console.log(e)}))},searchProduct:function(e){var t=this;this.productValue="total",this.typeProduct=this.allProducts.filter((function(c){if(c.title.match(e))return c;t.productValue=""}))},changeProduct:function(e){var t=this;this.typeProduct=this.products.filter((function(c,a){return e===c.category?(t.productValue=e,c):void 0===e?(t.productValue="total",t.products):void 0}))},getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/products?page=").concat(t)).then((function(t){if(t.data.success){e.isLoading=!1;var c=t.data,a=c.products,o=c.pagination;e.products=a,e.typeProduct=e.products,e.pagination=o,e.products.filter((function(t){-1===e.productName.indexOf(t.category)&&e.productName.push(t.category)}))}}))},addToCart:function(e){var t=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var a={product_id:e.id,qty:c};this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/cart"),{data:a}).then((function(e){e.data.success&&(t.isLoading=!1,t.getCartList(),t.cart=e.data.data,t.$swal({icon:"success",title:"".concat(e.data.data.product.title," <br/>").concat(e.data.message)}),console.log("加入購物車",t.cart),t.emitter.emit("update-qty"))}))},getCartList:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/cart");this.$http.get(t).then((function(t){e.cart=t.data.data,e.cart.carts.forEach((function(t){e.productId.push(t.product_id)}))}))}},unmounted:function(){var e=this;this.emitter.off("remove-data",(function(t){e.getFavorite()}))},mounted:function(){var e=this;this.getAllProducts(),this.getCartList(),this.emitter.on("remove-data",(function(t){e.getFavorite()})),this.emitter.emit("favorite-qty",this.myFavorite),this.getProducts(),this.productValue="total",window.addEventListener("scroll",(function(){var t=window.scrollY;e.siderBarLeft=t>395?{beLeft:"pt-6"}:{beLeft:""}}))}};c("088f");T.render=_;t["default"]=T},fd2d:function(e,t,c){"use strict";var a=c("7a23"),o={class:"d-flex flex-column flex-sm-row justify-content-sm-center align-items-center\n        text-white bg-secondary py-3"},r=Object(a["createVNode"])("div",{class:"pt-2"},[Object(a["createVNode"])("h5",{class:"mb-0"},"僅作業練習，無任何商業用途")],-1);function i(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("footer",o,[r])}const n={};n.render=i;t["a"]=n}}]);
//# sourceMappingURL=chunk-4acc71a9.2ba29f44.js.map