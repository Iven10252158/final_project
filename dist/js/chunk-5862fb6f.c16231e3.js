(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5862fb6f"],{"002e":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),r=Object(a["createVNode"])("div",{class:"loadingio-spinner-dual-ring-7s087i3q3b3"},[Object(a["createVNode"])("div",{class:"ldio-us6frdv3wm"},[Object(a["createVNode"])("div"),Object(a["createVNode"])("div",null,[Object(a["createVNode"])("div")])])],-1),o={class:"container"},n={class:"row"},l={class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},d={class:"table mt-4 table-hover table-responsive"},i=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",null,"購買時間"),Object(a["createVNode"])("th",{width:"200"},"Email"),Object(a["createVNode"])("th",{width:"300"},"購買款項"),Object(a["createVNode"])("th",{class:"text-center"},"應付金額"),Object(a["createVNode"])("th",null,"是否付款"),Object(a["createVNode"])("th",{class:"text-center"},"編輯")])],-1),s={class:"list-unstyled"},b={class:"text-center"},u={class:"form-check form-switch"},O={key:0},p={key:1},j={class:"btn-group"},h={class:"d-flex justify-content-center"};function f(e,t,c,f,m,g){var V=Object(a["resolveComponent"])("Loading"),N=Object(a["resolveComponent"])("OrdersModal"),k=Object(a["resolveComponent"])("DeleteOrderModal"),v=Object(a["resolveComponent"])("Pagination");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(V,{active:m.isLoading},{default:Object(a["withCtx"])((function(){return[r]})),_:1},8,["active"]),Object(a["createVNode"])("div",o,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("main",l,[Object(a["createVNode"])(N,{ref:"ordersModal","order-detail":m.tempOrder,onUpdate:g.updateOrder},null,8,["order-detail","onUpdate"]),Object(a["createVNode"])(k,{ref:"deleteOrdersModal","delete-modal":m.tempOrder,onCheckDelete:g.deleteOrder},null,8,["delete-modal","onCheckDelete"]),Object(a["createVNode"])("table",d,[i,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(m.allOrders,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:t.id},[Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.$filters.date(t.create_at)),1),Object(a["createVNode"])("td",null,[t.user?(Object(a["openBlock"])(),Object(a["createBlock"])("span",{key:0,textContent:Object(a["toDisplayString"])(t.user.email)},null,8,["textContent"])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("ul",s,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(t.products,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:t},Object(a["toDisplayString"])(e.product.title)+" 數量："+Object(a["toDisplayString"])(e.qty)+" "+Object(a["toDisplayString"])(e.product.unit),1)})),128))])]),Object(a["createVNode"])("td",b,Object(a["toDisplayString"])(e.$filters.currency(t.total)),1),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",u,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch".concat(t.id),"onUpdate:modelValue":function(e){return t.is_paid=e},onChange:function(e){return g.updateOrder(t)}},null,40,["id","onUpdate:modelValue","onChange"]),[[a["vModelCheckbox"],t.is_paid]]),Object(a["createVNode"])("label",{class:"form-check-label",for:"paidSwitch".concat(t.id)},[t.is_paid?(Object(a["openBlock"])(),Object(a["createBlock"])("span",O,"已付款")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",p,"未付款"))],8,["for"])])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",j,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(e){return g.openOrderModal("edit",t)}},"檢視",8,["onClick"]),Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return g.openOrderModal("delete",t)}},"刪除",8,["onClick"])])])])})),128))])]),Object(a["createVNode"])("div",h,[Object(a["createVNode"])(v,{pages:m.pagination,onChangePage:g.getOrders},null,8,["pages","onChangePage"])])])])])],64)}var m=c("5530"),g=(c("99af"),c("1799")),V=(c("b0c0"),{class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}),N={class:"modal-dialog modal-xl"},k={class:"modal-content"},v=Object(a["createVNode"])("div",{class:"modal-header"},[Object(a["createVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},"訂單資料"),Object(a["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},B={class:"row"},x={class:"col-4"},D=Object(a["createVNode"])("h4",null,"用戶資料",-1),w={class:"table"},C={key:0},M=Object(a["createVNode"])("th",null,"姓名",-1),S=Object(a["createVNode"])("th",null,"Email",-1),_=Object(a["createVNode"])("th",null,"電話",-1),$=Object(a["createVNode"])("th",null,"地址",-1),P={class:"col-8"},L=Object(a["createVNode"])("h4",null,"訂單明細",-1),F={class:"table"},E=Object(a["createVNode"])("th",null,"訂單編號",-1),U=Object(a["createVNode"])("th",null,"下單時間",-1),I=Object(a["createVNode"])("th",null,"付款時間",-1),q=Object(a["createVNode"])("th",null,"付款狀態",-1),J={key:0,class:"text-success"},T={key:1,class:"text-muted"},R=Object(a["createVNode"])("th",null,"總金額",-1),z=Object(a["createVNode"])("h4",null,"選購商品",-1),A={class:"table"},G={class:"text-end"},H={class:"d-flex justify-content-end"},K={class:"form-check"},Q={class:"form-check-label",for:"flexCheckDefault"},W={key:0},X={key:1},Y={class:"modal-footer"},Z=Object(a["createVNode"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function ee(e,t,c,r,o,n){return Object(a["openBlock"])(),Object(a["createBlock"])("div",V,[Object(a["createVNode"])("div",N,[Object(a["createVNode"])("div",k,[v,Object(a["createVNode"])("div",y,[Object(a["createVNode"])("div",B,[Object(a["createVNode"])("div",x,[D,Object(a["createVNode"])("table",w,[o.tempOrder.user?(Object(a["openBlock"])(),Object(a["createBlock"])("tbody",C,[Object(a["createVNode"])("tr",null,[M,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(o.tempOrder.user.name),1)]),Object(a["createVNode"])("tr",null,[S,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(o.tempOrder.user.email),1)]),Object(a["createVNode"])("tr",null,[_,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(o.tempOrder.user.tel),1)]),Object(a["createVNode"])("tr",null,[$,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(o.tempOrder.user.address),1)])])):Object(a["createCommentVNode"])("",!0)])]),Object(a["createVNode"])("div",P,[L,Object(a["createVNode"])("table",F,[Object(a["createVNode"])("tbody",null,[Object(a["createVNode"])("tr",null,[E,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(o.tempOrder.id),1)]),Object(a["createVNode"])("tr",null,[U,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.$filters.date(o.tempOrder.create_at)),1)]),Object(a["createVNode"])("tr",null,[I,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.$filters.date(o.tempOrder.paid_date)),1)]),Object(a["createVNode"])("tr",null,[q,Object(a["createVNode"])("td",null,[o.tempOrder.is_paid?(Object(a["openBlock"])(),Object(a["createBlock"])("strong",J," 付款成功 ")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",T,"尚未付款"))])]),Object(a["createVNode"])("tr",null,[R,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.$filters.currency(o.tempOrder.total)),1)])])]),z,Object(a["createVNode"])("table",A,[Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(o.tempOrder.products,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:t.id},[Object(a["createVNode"])("th",null,Object(a["toDisplayString"])(t.product.title),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(t.qty)+" / "+Object(a["toDisplayString"])(t.product.unit),1),Object(a["createVNode"])("td",G,Object(a["toDisplayString"])(e.$filters.currency(t.final_total)),1)])})),128))])]),Object(a["createVNode"])("div",H,[Object(a["createVNode"])("div",K,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{class:"form-check-input",type:"checkbox",id:"flexCheckDefault","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.tempOrder.is_paid=e})},null,512),[[a["vModelCheckbox"],o.tempOrder.is_paid]]),Object(a["createVNode"])("label",Q,[o.tempOrder.is_paid?(Object(a["openBlock"])(),Object(a["createBlock"])("span",W,"已付款")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",X,"未付款"))])])])])])]),Object(a["createVNode"])("div",Y,[Z,Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=function(e){return n.update(o.tempOrder)})},"修改付款狀態")])])])],512)}var te=c("e0ae"),ce={props:["orderDetail"],mixins:[te["a"]],emits:["update"],watch:{orderDetail:function(){this.tempOrder=this.orderDetail}},data:function(){return{tempOrder:{}}},methods:{update:function(e){this.$emit("update",e)}}};ce.render=ee;var ae=ce,re=c("8836"),oe={components:{Pagination:g["a"],OrdersModal:ae,DeleteOrderModal:re["a"]},data:function(){return{allOrders:{},tempOrder:{},pagination:{},isLoading:!1}},methods:{openOrderModal:function(e,t){switch(e){case"edit":this.tempOrder=Object(m["a"])({},t),this.$refs.ordersModal.showModal();break;case"delete":this.tempOrder=Object(m["a"])({},t),this.$refs.deleteOrdersModal.showModal()}},getOrders:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/admin/orders?page=").concat(t);this.$http.get(c).then((function(t){t.data.success&&(e.isLoading=!1,e.allOrders=t.data.orders,e.pagination=t.data.pagination)})).catch((function(t){e.$swal({icon:"error",title:"".concat(t.data.message)})}))},updateOrder:function(e){var t=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/admin/order/").concat(e.id);this.$http.put(c,{data:e}).then((function(e){e.data.success&&(t.isLoading=!1,t.$refs.ordersModal.hideModal(),t.getOrders())})).catch((function(e){t.$swal({icon:"error",title:"".concat(e.data.message)})}))},deleteOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/admin/order/").concat(this.tempOrder.id);this.$http.delete(t).then((function(t){t.data.success&&(e.isLoading=!1,e.$refs.deleteOrdersModal.hideModal(),e.getOrders())})).catch((function(t){e.$swal({icon:"error",title:"".concat(t.data.message)})}))}},mounted:function(){this.getOrders()}};oe.render=f;t["default"]=oe},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},1799:function(e,t,c){"use strict";c("ac1f"),c("841c");var a=c("7a23"),r={key:0,"aria-label":"Page navigation example"},o={class:"pagination"},n=Object(a["createVNode"])("span",{"aria-hidden":"true"},"«",-1),l=Object(a["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function d(e,t,c,d,i,s){return""===c.productValue&&""===c.search?(Object(a["openBlock"])(),Object(a["createBlock"])("nav",r,[Object(a["createVNode"])("ul",o,[Object(a["createVNode"])("li",{class:["page-item",{disabled:1===c.pages.current_page}]},[Object(a["createVNode"])("a",{class:"page-link ",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return s.change(c.pages.current_page-1)}),["prevent"]))},[n])],2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.pages.total_pages,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item ",{active:c.pages.current_page===e}],key:t},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(a["withModifiers"])((function(t){return s.change(e)}),["prevent"])},Object(a["toDisplayString"])(e),9,["onClick"])],2)})),128)),Object(a["createVNode"])("li",{class:["page-item",{disabled:c.pages.current_page===c.pages.total_pages}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return s.change(c.pages.current_page+1)}),["prevent"]))},[l])],2)])])):Object(a["createCommentVNode"])("",!0)}var i={props:["pages","productValue","search"],emits:["change-page"],methods:{change:function(e){this.$emit("change-page",e)}}};i.render=d;t["a"]=i},5530:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));c("b64b"),c("a4d3"),c("4de4"),c("e439"),c("159b"),c("dbb4");function a(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function r(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,a)}return c}function o(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?r(Object(c),!0).forEach((function(t){a(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):r(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}},"841c":function(e,t,c){"use strict";var a=c("d784"),r=c("825a"),o=c("1d80"),n=c("129f"),l=c("14c3");a("search",1,(function(e,t,c){return[function(t){var c=o(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,c):new RegExp(t)[e](String(c))},function(e){var a=c(t,e,this);if(a.done)return a.value;var o=r(e),d=String(this),i=o.lastIndex;n(i,0)||(o.lastIndex=0);var s=l(o,d);return n(o.lastIndex,i)||(o.lastIndex=i),null===s?-1:s.index}]}))},8836:function(e,t,c){"use strict";var a=c("7a23"),r={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},o={class:"modal-dialog"},n={class:"modal-content"},l={class:"modal-header bg-danger"},d={key:0,class:"modal-title text-white"},i={key:1,class:"modal-title text-white"},s=Object(a["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),b={class:"modal-body"},u=Object(a["createTextVNode"])("確定要刪除"),O={class:"text-danger fw-bold"},p=Object(a["createTextVNode"])("嗎？刪除後，無法復原喔！"),j={class:"modal-footer"},h=Object(a["createVNode"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function f(e,t,c,f,m,g){return Object(a["openBlock"])(),Object(a["createBlock"])("div",r,[Object(a["createVNode"])("div",o,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",l,[c.deleteModal.title?(Object(a["openBlock"])(),Object(a["createBlock"])("h5",d,"刪除 "+Object(a["toDisplayString"])(c.deleteModal.title),1)):(Object(a["openBlock"])(),Object(a["createBlock"])("h5",i,"刪除資料")),s]),Object(a["createVNode"])("div",b,[Object(a["createVNode"])("p",null,[u,Object(a["createVNode"])("span",O,Object(a["toDisplayString"])(c.deleteModal.title),1),p])]),Object(a["createVNode"])("div",j,[h,Object(a["createVNode"])("button",{type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=function(){return g.checkDelete&&g.checkDelete.apply(g,arguments)})},"確定刪除")])])])],512)}var m=c("e0ae"),g={mixins:[m["a"]],props:["deleteModal"],emits:["checkDelete"],methods:{checkDelete:function(){this.$emit("checkDelete")}}};g.render=f;t["a"]=g},b0c0:function(e,t,c){var a=c("83ab"),r=c("9bf2").f,o=Function.prototype,n=o.toString,l=/^\s*function ([^ (]*)/,d="name";a&&!(d in o)&&r(o,d,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(e){return""}}})},dbb4:function(e,t,c){var a=c("23e7"),r=c("83ab"),o=c("56ef"),n=c("fc6a"),l=c("06cf"),d=c("8418");a({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(e){var t,c,a=n(e),r=l.f,i=o(a),s={},b=0;while(i.length>b)c=r(a,t=i[b++]),void 0!==c&&d(s,t,c);return s}})},e439:function(e,t,c){var a=c("23e7"),r=c("d039"),o=c("fc6a"),n=c("06cf").f,l=c("83ab"),d=r((function(){n(1)})),i=!l||d;a({target:"Object",stat:!0,forced:i,sham:!l},{getOwnPropertyDescriptor:function(e,t){return n(o(e),t)}})}}]);
//# sourceMappingURL=chunk-5862fb6f.c16231e3.js.map