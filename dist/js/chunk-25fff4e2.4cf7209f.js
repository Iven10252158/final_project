(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25fff4e2"],{6484:function(e,t,a){"use strict";a("66ea")},"66ea":function(e,t,a){},b0c0:function(e,t,a){var o=a("83ab"),r=a("9bf2").f,c=Function.prototype,n=c.toString,l=/^\s*function ([^ (]*)/,s="name";o&&!(s in c)&&r(c,s,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(e){return""}}})},cf2a:function(e,t,a){"use strict";a.r(t);a("b0c0");var o=a("7a23"),r=Object(o["createVNode"])("div",{class:"banner bg-cover d-flex justify-content-center align-items-center pe-5",style:{"background-image":"url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')",height:"400px"}},[Object(o["createVNode"])("div",{class:"product-text text-white"},[Object(o["createVNode"])("h1",{class:"pt-1"},"訂單資訊")])],-1),c={class:"container"},n={class:"pt-3 mb-3"},l={class:"row justify-content-center"},s={class:"col-6"},d=Object(o["createVNode"])("div",{class:"h4 text-center mb-0 mt-2"},"訂購人資料",-1),i=Object(o["createVNode"])("label",{for:"email"},"帳號",-1),u=Object(o["createVNode"])("label",{for:"name"},"訂購人姓名",-1),m=Object(o["createVNode"])("label",{for:"address"},"收件地址",-1),f=Object(o["createVNode"])("label",{for:"tel"},"收件人電話",-1),b=Object(o["createVNode"])("label",{for:"message"},"留言",-1),p=Object(o["createVNode"])("div",{class:"d-flex justify-content-end"},[Object(o["createVNode"])("button",{type:"submit",class:"btn btn-primary my-3 text-white"},"確認送出")],-1);function V(e,t,a,V,h,j){var v=Object(o["resolveComponent"])("NavBar"),O=Object(o["resolveComponent"])("Field"),N=Object(o["resolveComponent"])("ErrorMessage"),g=Object(o["resolveComponent"])("Form");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(v),r,Object(o["createVNode"])("div",c,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])("div",l,[Object(o["createVNode"])("div",s,[d,Object(o["createVNode"])(g,{onSubmit:j.createOrder},{default:Object(o["withCtx"])((function(e){var a=e.errors;return[i,Object(o["createVNode"])(O,{id:"email",name:"email",type:"email",class:["form-control my-2",{"is-invalid":a["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:h.form.user.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.form.user.email=e})},null,8,["class","modelValue"]),Object(o["createVNode"])(N,{name:"email",class:"invalid-feedback"}),u,Object(o["createVNode"])(O,{id:"name",name:"姓名",type:"text",class:["form-control my-2",{"is-invalid":a["姓名"]}],placeholder:"請輸入訂購人姓名",rules:"required",modelValue:h.form.user.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return h.form.user.name=e})},null,8,["class","modelValue"]),Object(o["createVNode"])(N,{name:"姓名",class:"invalid-feedback"}),m,Object(o["createVNode"])(O,{id:"address",name:"地址",type:"text",class:["form-control my-2",{"is-invalid":a["地址"]}],placeholder:"請輸入收件地址",rules:"required",modelValue:h.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=function(e){return h.form.user.address=e})},null,8,["class","modelValue"]),Object(o["createVNode"])(N,{name:"地址",class:"invalid-feedback"}),f,Object(o["createVNode"])(O,{id:"tel",name:"電話號碼",class:["form-control my-2",{"is-invalid":a["電話號碼"]}],type:"number",placeholder:"請輸入訂購人電話",rules:"min:7|required",modelValue:h.form.user.tel,"onUpdate:modelValue":t[4]||(t[4]=function(e){return h.form.user.tel=e})},null,8,["class","modelValue"]),Object(o["createVNode"])(N,{name:"電話號碼",class:"invalid-feedback"}),b,Object(o["createVNode"])(O,{id:"message",name:"message",type:"text",as:"textarea",class:"form-control my-2",modelValue:h.form.message,"onUpdate:modelValue":t[5]||(t[5]=function(e){return h.form.message=e})},null,8,["modelValue"]),p]})),_:1},8,["onSubmit"])])])])])],64)}a("99af");var h=a("d178"),j={components:{NavBar:h["a"]},data:function(){return{orderId:"",form:{user:{name:"",email:"",address:"",tel:""},message:""},cart:[]}},methods:{createOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/order"),a=this.form;console.log(a),console.log(t),this.$http.post(t,{data:a}).then((function(t){console.log(t),e.orderId=t.data.orderId,console.log(e.orderId),e.$router.push("/ordercheckout/".concat(e.orderId))}))},getCartList:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("iven_vue3_course","/cart");this.$http.get(t).then((function(t){e.isLoading=!1,e.cart=t.data.data}))}},mounted:function(){this.getCartList()}};a("6484");j.render=V;t["default"]=j}}]);
//# sourceMappingURL=chunk-25fff4e2.4cf7209f.js.map