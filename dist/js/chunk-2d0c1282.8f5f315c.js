(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1282"],{"459d":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o={class:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"},n=Object(a["createVNode"])("a",{class:"navbar-brand col-md-3 col-lg-2 me-0 px-3 text-center","href.preventDefault":"#"},"CLIMBER",-1),r=Object(a["createVNode"])("button",{class:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),s=Object(a["createVNode"])("input",{class:"form-control form-control-dark w-100",type:"text",placeholder:"Search","aria-label":"Search"},null,-1),l={class:"navbar-nav px-3"},i={class:"nav-item text-nowrap"},d={class:"container-fluid"},u={class:"row"},b={id:"sidebarMenu",class:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"},p={class:"position-sticky pt-3"},h={class:"nav flex-column"},j=Object(a["createVNode"])("li",{class:"nav-item"},[Object(a["createVNode"])("h5",{class:"text-center text-primary"},"管理後台")],-1),O={class:"nav-item"},g=Object(a["createVNode"])("span",{"data-feather":"shopping-cart"},null,-1),m=Object(a["createTextVNode"])(" 訂單管理 "),v={class:"nav-item"},f=Object(a["createVNode"])("span",{"data-feather":"shopping-cart"},null,-1),k=Object(a["createTextVNode"])(" 產品管理 "),N={class:"nav-item"},V=Object(a["createVNode"])("span",{"data-feather":"users"},null,-1),x=Object(a["createTextVNode"])(" 優惠券管理 ");function w(e,t,c,w,y,C){var S=Object(a["resolveComponent"])("router-link"),$=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("header",o,[n,r,s,Object(a["createVNode"])("ul",l,[Object(a["createVNode"])("li",i,[Object(a["createVNode"])("a",{href:"#",class:"nav-link",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(){return C.logout&&C.logout.apply(C,arguments)}),["prevent"]))},"Sign out")])])]),Object(a["createVNode"])("div",d,[Object(a["createVNode"])("div",u,[Object(a["createVNode"])("nav",b,[Object(a["createVNode"])("div",p,[Object(a["createVNode"])("ul",h,[j,Object(a["createVNode"])("li",O,[Object(a["createVNode"])(S,{to:"/admin/admin_orders",class:"nav-link text-primary"},{default:Object(a["withCtx"])((function(){return[g,m]})),_:1})]),Object(a["createVNode"])("li",v,[Object(a["createVNode"])(S,{to:"/admin",class:"nav-link text-primary"},{default:Object(a["withCtx"])((function(){return[f,k]})),_:1})]),Object(a["createVNode"])("li",N,[Object(a["createVNode"])(S,{to:"/admin/admin_coupons",class:"nav-link text-primary"},{default:Object(a["withCtx"])((function(){return[V,x]})),_:1})])])])])])]),y.checkSuccess?(Object(a["openBlock"])(),Object(a["createBlock"])($,{key:0})):Object(a["createCommentVNode"])("",!0)],64)}c("ac1f"),c("5319");var y={inject:["MessageStatus"],data:function(){return{checkSuccess:!1}},methods:{logout:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","logout");this.$http.post(t).then((function(t){console.log(t),t.data.success?(document.cookie="week3homeworkTK=; expires=; path=/",e.$router.push("/login"),console.log(t)):console.log(t)})).catch((function(e){console.log(e)}))},checkLogin:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/user/check"),c=document.cookie.replace(/(?:(?:^|.*;\s*)week3homeworkTK\s*=\s*([^;]*).*$)|^.*$/,"$1");console.log("卻可api的偷啃",c),this.$http.defaults.headers.common.Authorization="".concat(c),this.$http.post(t).then((function(t){t.data.success?(console.log("卻可api",t),e.checkSuccess=!0):(e.MessageStatus(t,"登入"),e.$router.push("/login"))})).catch((function(e){console.log(e)}))}},created:function(){this.checkLogin()}};y.render=w;t["default"]=y}}]);
//# sourceMappingURL=chunk-2d0c1282.8f5f315c.js.map