(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7961a7c"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},1799:function(t,e,c){"use strict";var a=c("7a23"),o={"aria-label":"Page navigation example"},r={class:"pagination"},i=Object(a["createVNode"])("span",{"aria-hidden":"true"},"«",-1),n=Object(a["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function s(t,e,c,s,d,l){return Object(a["openBlock"])(),Object(a["createBlock"])("nav",o,[Object(a["createVNode"])("ul",r,[Object(a["createVNode"])("li",{class:["page-item",{disabled:1===c.pages.current_page}]},[Object(a["createVNode"])("a",{class:"page-link ",href:"#","aria-label":"Previous",onClick:e[1]||(e[1]=Object(a["withModifiers"])((function(t){return l.change(c.pages.current_page-1)}),["prevent"]))},[i])],2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.pages.total_pages,(function(t,e){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item ",{active:c.pages.current_page===t}],key:e},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(a["withModifiers"])((function(e){return l.change(t)}),["prevent"])},Object(a["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(a["createVNode"])("li",{class:["page-item",{disabled:c.pages.current_page===c.pages.total_pages}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[2]||(e[2]=Object(a["withModifiers"])((function(t){return l.change(c.pages.current_page+1)}),["prevent"]))},[n])],2)])])}var d={props:["pages"],methods:{change:function(t){this.$emit("change-page",t)}}};d.render=s;e["a"]=d},"3b5a":function(t,e,c){"use strict";c("9ab0")},"466d":function(t,e,c){"use strict";var a=c("d784"),o=c("825a"),r=c("50c4"),i=c("1d80"),n=c("8aa5"),s=c("14c3");a("match",1,(function(t,e,c){return[function(e){var c=i(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,c):new RegExp(e)[t](String(c))},function(t){var a=c(e,t,this);if(a.done)return a.value;var i=o(t),d=String(this);if(!i.global)return s(i,d);var l=i.unicode;i.lastIndex=0;var u,p=[],b=0;while(null!==(u=s(i,d))){var h=String(u[0]);p[b]=h,""===h&&(i.lastIndex=n(d,r(i.lastIndex),l)),b++}return 0===b?null:p}]}))},"841c":function(t,e,c){"use strict";var a=c("d784"),o=c("825a"),r=c("1d80"),i=c("129f"),n=c("14c3");a("search",1,(function(t,e,c){return[function(e){var c=r(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,c):new RegExp(e)[t](String(c))},function(t){var a=c(e,t,this);if(a.done)return a.value;var r=o(t),s=String(this),d=r.lastIndex;i(d,0)||(r.lastIndex=0);var l=n(r,s);return i(r.lastIndex,d)||(r.lastIndex=d),null===l?-1:l.index}]}))},"9ab0":function(t,e,c){},e6dc:function(t,e,c){"use strict";c.r(e);c("ac1f"),c("841c"),c("caad"),c("2532");var a=c("7a23"),o=Object(a["createVNode"])("div",{class:"loadingio-spinner-dual-ring-7s087i3q3b3"},[Object(a["createVNode"])("div",{class:"ldio-us6frdv3wm"},[Object(a["createVNode"])("div"),Object(a["createVNode"])("div",null,[Object(a["createVNode"])("div")])])],-1),r=Object(a["createVNode"])("div",{class:"banner bg-cover d-flex justify-content-center align-items-center",style:{"background-image":"url('https://images.unsplash.com/photo-1467541473380-93479a5a3ffa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1123&q=80')",height:"400px"}},[Object(a["createVNode"])("div",{class:"banner-text text-white"},[Object(a["createVNode"])("h1",{class:"pt-1"},"產品列表")])],-1),i={class:"container"},n={class:"row"},s={class:"col-md-3"},d={class:"mt-4"},l={class:"row sticky-md-top"},u={class:"mt-3"},p={class:"col-md-9"},b={class:"row"},h={class:"card h-100"},f=Object(a["createTextVNode"])(" 查看更多 "),g={class:"card-body"},v={class:"card-title text-hidden"},j={class:"card-text d-flex justify-content-between"},O={class:"text-muted"},m={class:"card-footer bg-white border-0"},V={class:"d-flex justify-content-between"},y={key:0},N=Object(a["createVNode"])("i",{class:"fas fa-heart"},null,-1),k={key:1},x=Object(a["createVNode"])("i",{class:"far fa-heart"},null,-1),w={key:0},B=Object(a["createVNode"])("i",{class:"fas fa-shopping-cart"},null,-1),C={key:1},P=Object(a["createVNode"])("i",{class:"fas fa-cart-plus"},null,-1),F={class:"d-flex justify-content-center"};function L(t,e,c,L,_,I){var S=Object(a["resolveComponent"])("Loading"),M=Object(a["resolveComponent"])("router-link"),$=Object(a["resolveComponent"])("Pagination"),D=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(S,{active:_.isLoading},{default:Object(a["withCtx"])((function(){return[o]})),_:1},8,["active"]),r,Object(a["createVNode"])("div",i,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",s,[Object(a["createVNode"])("div",d,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control",placeholder:"請輸入關鍵字","onUpdate:modelValue":e[1]||(e[1]=function(t){return _.search=t}),onInput:e[2]||(e[2]=function(t){return I.searchProduct(_.search)})},null,544),[[a["vModelText"],_.search]])]),Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",u,[Object(a["createVNode"])("ul",{class:["list-group pe-auto siderBarLeft",_.siderBarLeft.beLeft]},[Object(a["createVNode"])("li",{class:["list-group-item list-group-item-action",{"bg-primary":"total"===_.productValue,"text-white":"total"===_.productValue}],onClick:e[3]||(e[3]=function(e){return I.changeProduct(t.item,t.index)})}," 全部商品 ",2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(_.productName,(function(t,e){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["list-group-item list-group-item-action",{"bg-primary":t===_.productValue,"text-white":t===_.productValue}],key:e,onClick:function(e){return I.changeProduct(t)}},Object(a["toDisplayString"])(t),11,["onClick"])})),128))],2)])])]),Object(a["createVNode"])("div",p,[Object(a["createVNode"])("div",b,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(_.typeProduct,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"col-md-6 col-xl-4 my-4",key:e.id},[Object(a["createVNode"])("div",h,[Object(a["createVNode"])("div",{class:"bg-cover product_image position-relative",style:{backgroundImage:"url("+e.imageUrl+")",height:"200px"}},[Object(a["createVNode"])(M,{class:"mask text-white text-center fs-4 fw-bold position-absolute",to:"/product/".concat(e.id)},{default:Object(a["withCtx"])((function(){return[f]})),_:2},1032,["to"])],4),Object(a["createVNode"])("div",g,[Object(a["createVNode"])("h5",v,[Object(a["createVNode"])(M,{class:"text-grey",to:"/product/".concat(e.id)},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.title),1)]})),_:2},1032,["to"])]),Object(a["createVNode"])("div",j,[Object(a["createVNode"])("del",O,Object(a["toDisplayString"])(t.$filters.currency(e.origin_price)),1),Object(a["createVNode"])("h6",null,Object(a["toDisplayString"])(t.$filters.currency(e.price)),1)])]),Object(a["createVNode"])("div",m,[Object(a["createVNode"])("div",V,[Object(a["createVNode"])("button",{type:"button",class:"styleBtn btn btn-outline-favorite border-0 ",onClick:function(t){return I.addMyFavorite(e)}},[_.myFavorite.includes(e.id)?(Object(a["openBlock"])(),Object(a["createBlock"])("span",y,[N])):(Object(a["openBlock"])(),Object(a["createBlock"])("span",k,[x]))],8,["onClick"]),Object(a["createVNode"])("button",{type:"button",class:["styleBtn cartBtn btn btn-outline-primary border-0",{disabled:_.productId.includes(e.id)}],onClick:function(t){return I.addToCart(e)}},[_.productId.includes(e.id)?(Object(a["openBlock"])(),Object(a["createBlock"])("span",w,[B])):(Object(a["openBlock"])(),Object(a["createBlock"])("span",C,[P]))],10,["onClick"])])])])])})),128))])])]),Object(a["createVNode"])("div",F,[Object(a["createVNode"])($,{pages:_.pagination,onChangePage:I.getProducts},null,8,["pages","onChangePage"])])]),Object(a["createVNode"])(D)],64)}c("a434"),c("99af"),c("4de4"),c("466d"),c("159b");var _=c("1799"),I={setItem:function(t){var e=JSON.stringify(t);localStorage.setItem("MyFavorite",e)},getItem:function(){return JSON.parse(localStorage.getItem("MyFavorite"))}},S={inject:["emitter"],components:{Pagination:_["a"]},data:function(){return{num:1,allProducts:[],products:[],productId:[],pagination:{},cart:[],typeProduct:[],productName:[],productValue:"",isLoading:!1,search:"",myFavorite:I.getItem()||[],siderBarLeft:{beLeft:!0}}},methods:{getFavorite:function(){this.myFavorite=I.getItem()||[],console.log(this.myFavorite)},addMyFavorite:function(t){this.myFavorite.includes(t.id)?(this.myFavorite.splice(this.myFavorite.indexOf(t.id),1),I.setItem(this.myFavorite),this.$swal({icon:"warning",title:"已從最愛中移除"})):(this.myFavorite.push(t.id),I.setItem(this.myFavorite),this.$swal({icon:"success",title:"儲存成功！"})),this.emitter.emit("favorite-qty")},getAllProducts:function(){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/products/all")).then((function(e){e.data.success&&(t.allProducts=e.data.products)})).catch((function(t){console.log(t)}))},searchProduct:function(t){var e=this;this.productValue="total",this.typeProduct=this.allProducts.filter((function(c){if(c.title.match(t))return c;e.productValue=""}))},changeProduct:function(t){var e=this;this.typeProduct=this.products.filter((function(c,a){return t===c.category?(e.productValue=t,c):void 0===t?(e.productValue="total",e.products):void 0}))},getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/products?page=").concat(e)).then((function(e){if(e.data.success){t.isLoading=!1;var c=e.data,a=c.products,o=c.pagination;t.products=a,t.typeProduct=t.products,t.pagination=o,t.products.filter((function(e){-1===t.productName.indexOf(e.category)&&t.productName.push(e.category)}))}}))},addToCart:function(t){var e=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var a={product_id:t.id,qty:c};this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/cart"),{data:a}).then((function(t){t.data.success&&(e.isLoading=!1,e.getCartList(),e.cart=t.data.data,e.$swal({icon:"success",title:"".concat(t.data.data.product.title," <br/>").concat(t.data.message)}),console.log("加入購物車",e.cart),e.emitter.emit("update-qty"))}))},getCartList:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/cart");this.$http.get(e).then((function(e){t.cart=e.data.data,t.cart.carts.forEach((function(e){t.productId.push(e.product_id)}))}))}},unmounted:function(){var t=this;this.emitter.off("remove-data",(function(e){t.getFavorite()}))},mounted:function(){var t=this;this.getAllProducts(),this.getCartList(),this.emitter.on("remove-data",(function(e){t.getFavorite()})),this.emitter.emit("favorite-qty",this.myFavorite),this.getProducts(),this.productValue="total",window.addEventListener("scroll",(function(){var e=window.scrollY;t.siderBarLeft=e>395?{beLeft:"pt-6"}:{beLeft:""}}))}};c("3b5a");S.render=L;e["default"]=S}}]);
//# sourceMappingURL=chunk-e7961a7c.2696729b.js.map