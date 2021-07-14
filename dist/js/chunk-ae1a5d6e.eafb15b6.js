(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae1a5d6e"],{a155:function(e,t,c){},a425:function(e,t,c){"use strict";c.r(t);c("b0c0");var r=c("7a23"),o=Object(r["createVNode"])("div",{class:"banner bg-cover d-flex justify-content-center align-items-center",style:{"background-image":"url('https://images.unsplash.com/photo-1592805145006-353114433db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80')",height:"400px"}},null,-1),a={class:"container my-4"},d=Object(r["createVNode"])("h4",{class:"text-primary mb-0 py-2"},"訂單資料",-1),s={class:"col-12 col-md-6"},n={key:0},i=Object(r["createVNode"])("h2",{class:"text-center text-danger"},"付款完成",-1),l={class:"d-flex flex-column"},b={class:"pt-1"},p={class:"mb-2"},O={class:"text-danger mb-2"},j={class:"col-12 col-md-6"},u=Object(r["createVNode"])("hr",{class:"d-block d-md-none"},null,-1),m=Object(r["createVNode"])("h4",{class:"mb-3"},"訂購人資訊",-1),h={key:0,class:"row"},v=Object(r["createVNode"])("div",{class:"col-3 h6 text-secondary"},"姓名",-1),y={class:"col-9"},f=Object(r["createVNode"])("div",{class:"col-3 h6 text-secondary"},"電話",-1),N={class:"col-9"},V=Object(r["createVNode"])("div",{class:"col-3 h6 text-secondary"},"Email",-1),g={class:"col-9"},x=Object(r["createVNode"])("div",{class:"col-3 h6 text-secondary"},"地址",-1),k={class:"col-9"},D=Object(r["createVNode"])("hr",null,null,-1),F={key:1,class:"row"},B=Object(r["createVNode"])("div",{class:"col-4 h6 text-secondary"},"訂單編號",-1),w={class:"col-8"},_=Object(r["createVNode"])("div",{class:"col-4 h6 text-secondary"},"付款金額",-1),S={class:"col-8"},$=Object(r["createVNode"])("div",{class:"col-4 h6 text-secondary"},"付款狀態",-1),C={key:2,class:"d-flex"},I=Object(r["createVNode"])("div",{class:"col-4 h6 text-secondary"},"訂單成立",-1),T={class:"col-8 ps-2 text-primary"},A={class:"d-flex justify-content-end"};function M(e,t,c,M,H,G){var J=Object(r["resolveComponent"])("NavBar");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])(J),o,Object(r["createVNode"])("div",a,[d,(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(H.orderForm.products,(function(c){return Object(r["openBlock"])(),Object(r["createBlock"])("div",{class:"row border p-3 d-flex justify-content-center",key:c},[Object(r["createVNode"])("div",s,[H.orderForm.is_paid?(Object(r["openBlock"])(),Object(r["createBlock"])("div",n,[i])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("div",l,[Object(r["createVNode"])("img",{class:"img-fluid",src:c.product.imageUrl,style:{height:"200px","object-fit":"cover"}},null,8,["src"]),Object(r["createVNode"])("div",b,[Object(r["createVNode"])("p",p,Object(r["toDisplayString"])(c.product.title),1),Object(r["createVNode"])("p",O,Object(r["toDisplayString"])(c.product.program),1),Object(r["createVNode"])("p",null,"NT$ "+Object(r["toDisplayString"])(e.$filters.currency(c.final_total)),1)])])]),Object(r["createVNode"])("div",j,[u,m,H.orderForm.user?(Object(r["openBlock"])(),Object(r["createBlock"])("div",h,[v,Object(r["createVNode"])("div",y,Object(r["toDisplayString"])(H.orderForm.user.name),1),f,Object(r["createVNode"])("div",N,Object(r["toDisplayString"])(H.orderForm.user.tel),1),V,Object(r["createVNode"])("div",g,Object(r["toDisplayString"])(H.orderForm.user.email),1),x,Object(r["createVNode"])("div",k,Object(r["toDisplayString"])(H.orderForm.user.address),1)])):Object(r["createCommentVNode"])("",!0),D,H.orderForm?(Object(r["openBlock"])(),Object(r["createBlock"])("div",F,[B,Object(r["createVNode"])("div",w,Object(r["toDisplayString"])(H.orderForm.id),1),_,Object(r["createVNode"])("div",S,"NT$ "+Object(r["toDisplayString"])(e.$filters.currency(H.orderForm.total)),1),$,Object(r["createVNode"])("div",{class:["col-8",{"text-primary":H.orderForm.is_paid}]},Object(r["toDisplayString"])(H.orderForm.is_paid?"付款成功":"尚未付款"),3)])):Object(r["createCommentVNode"])("",!0),H.orderForm.is_paid?(Object(r["openBlock"])(),Object(r["createBlock"])("div",C,[I,Object(r["createVNode"])("div",T,Object(r["toDisplayString"])(H.dateAndTime),1)])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("div",A,[Object(r["createVNode"])("button",{type:"button",class:["btn btn-primary mt-4 mb-1 w-100",{disabled:H.orderForm.is_paid}],onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(){return G.payOrder&&G.payOrder.apply(G,arguments)}),["prevent"]))},"確認付款去",2)])])])})),128))])],64)}c("99af");var H=c("d178"),G={components:{NavBar:H["a"]},data:function(){return{orderID:"",create_at:"",orderForm:[],dateAndTime:""}},methods:{getOrder:function(){var e=this;this.orderID=this.$route.params.order_Id,console.log(this.orderID);var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/order/").concat(this.orderID);this.$http.get(t).then((function(t){e.orderForm=t.data.order,e.create_at=t.data.order.create_at,e.dateAndTime=new Date(1e3*e.create_at).toLocaleString(),console.log(e.dateAndTime),console.log(t)}))},payOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/pay/").concat(this.orderID);this.$http.post(t).then((function(t){console.log(t),t.data.success&&e.getOrder()}))}},mounted:function(){this.getOrder()}};c("c517");G.render=M;t["default"]=G},b0c0:function(e,t,c){var r=c("83ab"),o=c("9bf2").f,a=Function.prototype,d=a.toString,s=/^\s*function ([^ (]*)/,n="name";r&&!(n in a)&&o(a,n,{configurable:!0,get:function(){try{return d.call(this).match(s)[1]}catch(e){return""}}})},c517:function(e,t,c){"use strict";c("a155")}}]);
//# sourceMappingURL=chunk-ae1a5d6e.eafb15b6.js.map