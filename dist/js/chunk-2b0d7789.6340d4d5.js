(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b0d7789"],{8254:function(e,t,c){"use strict";c("bef2")},b789:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o=Object(a["withScopeId"])("data-v-3a504bae");Object(a["pushScopeId"])("data-v-3a504bae");var n=Object(a["createVNode"])("div",{class:"loadingio-spinner-dual-ring-7s087i3q3b3"},[Object(a["createVNode"])("div",{class:"ldio-us6frdv3wm"},[Object(a["createVNode"])("div"),Object(a["createVNode"])("div",null,[Object(a["createVNode"])("div")])])],-1),r=Object(a["createVNode"])("div",{class:"banner bg-cover d-flex justify-content-center align-items-center",style:{"background-image":"url('https://images.unsplash.com/photo-1592805145006-353114433db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80')",height:"400px"}},[Object(a["createVNode"])("div",{class:"cart-text text-white"},[Object(a["createVNode"])("h3",{class:"pt-2"},"購物車")])],-1),s={class:"container"},i={class:"d-flex justify-content-between align-items-center"},l=Object(a["createVNode"])("h6",{class:"mb-3 mt-5"},"購物明細",-1),d=Object(a["createVNode"])("i",{class:"fas fa-caret-left"},null,-1),u=Object(a["createTextVNode"])(" 繼續選購 "),b={class:"table-responsive"},p={class:"table"},j=Object(a["createVNode"])("thead",{class:"bg-primary text-white"},[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",{class:"d-none d-sm-block d-sm-table-cell ps-3",width:"300"},"商品名稱"),Object(a["createVNode"])("th",{class:"text-center",width:"300"},[Object(a["createVNode"])("span",{class:"d-inline d-sm-none ps-3"},"名稱/"),Object(a["createTextVNode"])(" 數量")]),Object(a["createVNode"])("th",{class:"text-center","max-width":"150"},"金額"),Object(a["createVNode"])("th",{class:"text-center text-sm-end pe-4"},"刪除")])],-1),O={class:"d-none d-sm-table-cell ps-3"},m={class:"mb-0 pt-2"},f={class:"mb-0 pt-sm-2 text-danger"},N={class:"ps-sm-5 align-middle d-table-cell"},h={class:"d-sm-none"},V={class:"d-sm-none mb-0 text-danger"},g={class:" input-group mx-auto ps-sm-4"},v=Object(a["createVNode"])("i",{class:"fas fa-minus"},null,-1),x={class:"qty_input border border-2 pt-1 text-center px-3"},y=Object(a["createVNode"])("i",{class:"fas fa-plus"},null,-1),k={class:"text-center align-middle"},C={class:"align-middle text-center text-sm-end pe-3"},_=Object(a["createVNode"])("i",{class:"far fa-trash-alt"},null,-1),w={class:"input-group mb-3"},T={class:"h5 text-end pe-5"},B=Object(a["createTextVNode"])("總計: "),L={key:0,class:"h5 text-end pe-5 text-primary"},$=Object(a["createTextVNode"])("折扣後: "),D={class:"text-primary"},S={key:1,class:"d-flex justify-content-end"},q=Object(a["createTextVNode"])(" 下一步 "),P=Object(a["createVNode"])("i",{class:"fas fa-caret-right"},null,-1);Object(a["popScopeId"])();var I=o((function(e,t,c,I,M,H){var F=Object(a["resolveComponent"])("NavBar"),G=Object(a["resolveComponent"])("Loading"),J=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(F),Object(a["createVNode"])(G,{active:M.isLoading},{default:o((function(){return[n]})),_:1},8,["active"]),r,Object(a["createVNode"])("div",s,[Object(a["createVNode"])("div",i,[l,Object(a["createVNode"])(J,{to:"/products",class:"stepLink btn btn-outline-primary rounded-pill mb-2 px-3 mt-4"},{default:o((function(){return[d,u]})),_:1})]),Object(a["createVNode"])("div",b,[Object(a["createVNode"])("table",p,[j,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(M.cart.carts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{class:"pt-1",key:t.id},[Object(a["createVNode"])("td",O,[Object(a["createVNode"])("p",m,Object(a["toDisplayString"])(t.product.title),1),Object(a["createVNode"])("p",f,Object(a["toDisplayString"])(t.product.program),1),M.finalPrice===M.cart.final_total?(Object(a["openBlock"])(),Object(a["createBlock"])("p",{key:0,class:["d-none d-sm-table-cell",{"text-success":M.isTrue}]},"已套用此優惠",2)):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("td",N,[Object(a["createVNode"])("p",h,Object(a["toDisplayString"])(t.product.title),1),Object(a["createVNode"])("p",V,Object(a["toDisplayString"])(t.product.program),1),M.finalPrice===M.cart.final_total?(Object(a["openBlock"])(),Object(a["createBlock"])("p",{key:0,class:["d-sm-none",{"text-success":M.isTrue}]},"已套用此優惠",2)):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("div",g,[Object(a["createVNode"])("button",{type:"button",disabled:1===t.qty,onClick:function(e){return H.reduce(t)},class:"btn btn-primary btn-sm rounded-0"},[v],8,["disabled","onClick"]),Object(a["createVNode"])("span",x,Object(a["toDisplayString"])(t.qty),1),Object(a["createVNode"])("button",{type:"button",onClick:function(e){return H.addNum(t)},class:"btn btn-outline-primary btn-sm rounded-0"},[y],8,["onClick"])])]),Object(a["createVNode"])("td",k,[Object(a["createVNode"])("p",{class:["pt-2 mb-0",{"text-decoration-line-through":M.isTrue,"text-secondary":M.isTrue}]}," NT "+Object(a["toDisplayString"])(e.$filters.currency(t.total)),3),M.finalPrice===M.cart.final_total?(Object(a["openBlock"])(),Object(a["createBlock"])("span",{key:0,class:{"text-success":M.isTrue}},"NT "+Object(a["toDisplayString"])(e.$filters.currency(t.final_total)),3)):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("td",C,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return H.deleteCartProduct(t)}},[_],8,["onClick"])])])})),128))])])]),Object(a["createVNode"])("div",w,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control rounded-0","onUpdate:modelValue":t[1]||(t[1]=function(e){return M.coupon_code=e}),placeholder:"請輸入折扣碼","aria-label":"Recipient's username","aria-describedby":"basic-addon2"},null,512),[[a["vModelText"],M.coupon_code]]),Object(a["createVNode"])("span",{class:"btn btn-outline-primary rounded-0 input-group-text",onClick:t[2]||(t[2]=function(){return H.inputCoupon&&H.inputCoupon.apply(H,arguments)})},"套用優惠券")]),Object(a["createVNode"])("div",{class:{"text-decoration-line-through":M.isTrue,"text-secondary":M.isTrue,p:M.isTrue}},[Object(a["createVNode"])("p",T,[B,Object(a["createVNode"])("span",null,"NT "+Object(a["toDisplayString"])(e.$filters.currency(M.cart.total))+"元",1)])],2),M.finalPrice===M.cart.final_total?(Object(a["openBlock"])(),Object(a["createBlock"])("p",L,[$,Object(a["createVNode"])("span",D,"NT "+Object(a["toDisplayString"])(e.$filters.currency(M.cart.final_total))+"元",1)])):Object(a["createCommentVNode"])("",!0),M.cart.carts?(Object(a["openBlock"])(),Object(a["createBlock"])("div",S,[Object(a["createVNode"])(J,{to:"/order",class:["stepLink btn btn-outline-primary rounded-pill my-2 px-3",{disabled:0===M.cart.carts.length}]},{default:o((function(){return[q,P]})),_:1},8,["class"])])):Object(a["createCommentVNode"])("",!0)])],64)})),M=(c("99af"),c("d178")),H={inject:["emitter"],components:{NavBar:M["a"]},data:function(){return{cart:[],coupon_code:"",isTrue:!1,finalPrice:"",isLoading:!0}},methods:{getCartList:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/cart");this.$http.get(t).then((function(t){e.isLoading=!1,e.cart=t.data.data}))},updateCart:function(e,t){var c=this,a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/cart/").concat(e.id),o={product_id:e.product.id,qty:e.qty};this.$http.put(a,{data:o}).then((function(e){e.data.success?(console.log(e),c.$swal({icon:"success",title:"".concat(e.data.message)}),c.getCartList()):(c.$swal({icon:"error",title:"".concat(e.data.message)}),console.log("res",e))}))},deleteCartProduct:function(e){var t=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/cart/").concat(e.id);this.$http.delete(c).then((function(e){e.data.success?(t.getCartList(),t.$swal({icon:"success",title:"".concat(e.data.message)}),t.emitter.emit("update-qty")):(console.log(e),t.$swal({icon:"error",title:"".concat(e.data.message)}))})).catch((function(e){t.getCartList(),console.log(e)}))},addNum:function(e){e.product_id===e.product.id&&(e.qty+=1,this.updateCart(e))},reduce:function(e){e.product_id===e.product.id&&(e.qty-=1,this.updateCart(e)),console.log(e)},inputCoupon:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/coupon"),c={code:this.coupon_code};this.$http.post(t,{data:c}).then((function(t){t.data.success?(e.getCartList(),e.finalPrice=t.data.data.final_total,e.isTrue=!e.isTrue,e.$swal({icon:"success",title:"".concat(t.data.message)})):e.$swal({icon:"error",title:"請確認輸入的代碼"})})).catch((function(e){void 0===e.data&&(console.log(e,"找不到優惠代碼"),console.log("找不到優惠代碼"))}))}},mounted:function(){this.getCartList()}};c("8254");H.render=I,H.__scopeId="data-v-3a504bae";t["default"]=H},bef2:function(e,t,c){}}]);
//# sourceMappingURL=chunk-2b0d7789.6340d4d5.js.map