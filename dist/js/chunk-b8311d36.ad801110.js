(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8311d36"],{4202:function(e,t,c){},"989f":function(e,t,c){"use strict";c("4202")},a425:function(e,t,c){"use strict";c.r(t);c("b0c0");var r=c("7a23"),o=Object(r["createVNode"])("div",{class:"banner bg-cover d-flex justify-content-center align-items-center",style:{"background-image":"url('https://images.unsplash.com/photo-1592805145006-353114433db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80')",height:"400px"}},null,-1),a={class:"container my-4"},d=Object(r["createVNode"])("h4",{class:"text-primary mb-0 py-2"},"訂單資料",-1),s={class:"col-12 col-md-6"},i={key:0},n=Object(r["createVNode"])("h2",{class:"text-center text-danger"},"付款完成",-1),l={class:"d-flex flex-column"},b={class:"pt-1"},p={class:"mb-2"},u={class:"text-danger mb-2"},j={class:"col-12 col-md-6"},O=Object(r["createVNode"])("hr",{class:"mt-0 d-block d-md-none"},null,-1),m=Object(r["createVNode"])("h4",{class:"mb-3"},"訂購人資訊",-1),y={key:0,class:"row"},h=Object(r["createVNode"])("div",{class:"col-3 h6 text-secondary"},"姓名",-1),f={class:"col-9"},v=Object(r["createVNode"])("div",{class:"col-3 h6 text-secondary"},"電話",-1),N={class:"col-9"},V=Object(r["createVNode"])("div",{class:"col-3 h6 text-secondary"},"Email",-1),g={class:"col-9"},x=Object(r["createVNode"])("div",{class:"col-3 h6 text-secondary"},"地址",-1),k={class:"col-9"},F=Object(r["createVNode"])("hr",null,null,-1),w={key:1,class:"row"},B=Object(r["createVNode"])("div",{class:"col-4 h6 text-secondary"},"訂單編號",-1),D={class:"col-8"},_=Object(r["createVNode"])("div",{class:"col-4 h6 text-secondary"},"付款金額",-1),S={class:"col-8"},C=Object(r["createVNode"])("div",{class:"col-4 h6 text-secondary"},"付款狀態",-1),$={key:2,class:"d-flex"},T=Object(r["createVNode"])("div",{class:"col-4 h6 text-secondary"},"訂單成立",-1),I={class:"col-8 ps-2 text-primary"},A={class:"d-flex justify-content-end"},M=Object(r["createTextVNode"])(" 續繼購物 ");function H(e,t,c,H,L,q){var G=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[o,Object(r["createVNode"])("div",a,[d,(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(L.orderForm.products,(function(c){return Object(r["openBlock"])(),Object(r["createBlock"])("div",{class:"row border p-3 d-flex justify-content-center",key:c},[Object(r["createVNode"])("div",s,[L.orderForm.is_paid?(Object(r["openBlock"])(),Object(r["createBlock"])("div",i,[n])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("div",l,[Object(r["createVNode"])("img",{class:"img-fluid",src:c.product.imageUrl,style:{height:"200px","object-fit":"cover"}},null,8,["src"]),Object(r["createVNode"])("div",b,[Object(r["createVNode"])("p",p,Object(r["toDisplayString"])(c.product.title),1),Object(r["createVNode"])("p",u,Object(r["toDisplayString"])(c.product.program),1),Object(r["createVNode"])("p",null,"NT$ "+Object(r["toDisplayString"])(e.$filters.currency(c.final_total)),1)])])]),Object(r["createVNode"])("div",j,[O,m,L.orderForm.user?(Object(r["openBlock"])(),Object(r["createBlock"])("div",y,[h,Object(r["createVNode"])("div",f,Object(r["toDisplayString"])(L.orderForm.user.name),1),v,Object(r["createVNode"])("div",N,Object(r["toDisplayString"])(L.orderForm.user.tel),1),V,Object(r["createVNode"])("div",g,Object(r["toDisplayString"])(L.orderForm.user.email),1),x,Object(r["createVNode"])("div",k,Object(r["toDisplayString"])(L.orderForm.user.address),1)])):Object(r["createCommentVNode"])("",!0),F,L.orderForm?(Object(r["openBlock"])(),Object(r["createBlock"])("div",w,[B,Object(r["createVNode"])("div",D,Object(r["toDisplayString"])(L.orderForm.id),1),_,Object(r["createVNode"])("div",S,"NT$ "+Object(r["toDisplayString"])(e.$filters.currency(L.orderForm.total)),1),C,Object(r["createVNode"])("div",{class:["col-8",{"text-primary":L.orderForm.is_paid}]},Object(r["toDisplayString"])(L.orderForm.is_paid?"付款成功":"尚未付款"),3)])):Object(r["createCommentVNode"])("",!0),L.orderForm.is_paid?(Object(r["openBlock"])(),Object(r["createBlock"])("div",$,[T,Object(r["createVNode"])("div",I,Object(r["toDisplayString"])(L.dateAndTime),1)])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("div",A,[L.orderForm.is_paid?(Object(r["openBlock"])(),Object(r["createBlock"])(G,{key:0,to:"/products",class:"btn btn-outline-primary mt-5 w-50 me-3 stepLink"},{default:Object(r["withCtx"])((function(){return[M]})),_:1})):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("button",{type:"button",class:["btn btn-primary mt-5 w-50 text-white",{disabled:L.orderForm.is_paid}],onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(){return q.payOrder&&q.payOrder.apply(q,arguments)}),["prevent"]))},"確認付款去",2)])])])})),128))])],64)}c("99af");var L={inject:["emitter"],data:function(){return{orderID:"",create_at:"",orderForm:[],dateAndTime:""}},methods:{getOrder:function(){var e=this;this.orderID=this.$route.params.order_Id;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/order/").concat(this.orderID);this.$http.get(t).then((function(t){e.orderForm=t.data.order,e.create_at=t.data.order.create_at,e.dateAndTime=new Date(1e3*e.create_at).toLocaleString()}))},payOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/pay/").concat(this.orderID);this.$http.post(t).then((function(t){console.log(t),t.data.success&&(e.getOrder(),e.emitter.emit("update-qty"))}))}},mounted:function(){this.getOrder()}};c("989f");L.render=H;t["default"]=L},b0c0:function(e,t,c){var r=c("83ab"),o=c("9bf2").f,a=Function.prototype,d=a.toString,s=/^\s*function ([^ (]*)/,i="name";r&&!(i in a)&&o(a,i,{configurable:!0,get:function(){try{return d.call(this).match(s)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-b8311d36.ad801110.js.map