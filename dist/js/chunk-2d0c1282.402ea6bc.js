(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1282"],{"459d":function(e,t,a){"use strict";a.r(t);var c=a("7a23"),o={class:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"},n=Object(c["createVNode"])("a",{class:"navbar-brand col-md-3 col-lg-2 me-0 px-3 text-center",href:"#"},"CLIMBER",-1),r=Object(c["createVNode"])("button",{class:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),s=Object(c["createVNode"])("input",{class:"form-control form-control-dark w-100",type:"text",placeholder:"Search","aria-label":"Search"},null,-1),l={class:"navbar-nav px-3"},i={class:"nav-item text-nowrap"},d={class:"container-fluid"},u={class:"row"},p={id:"sidebarMenu",class:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"},b={class:"position-sticky pt-3"},h={class:"nav flex-column"},v=Object(c["createStaticVNode"])('<li class="nav-item"><h5 class="text-center text-primary">管理後台</h5></li><li class="nav-item"><a class="nav-link text-primary" href="#"><span data-feather="file"></span> 訂單管理 </a></li>',2),g={class:"nav-item"},m=Object(c["createVNode"])("span",{"data-feather":"shopping-cart"},null,-1),f=Object(c["createTextVNode"])(" 產品管理 "),j={class:"nav-item"},O=Object(c["createVNode"])("span",{"data-feather":"users"},null,-1),k=Object(c["createTextVNode"])(" 優惠券管理 ");function N(e,t,a,N,V,x){var w=Object(c["resolveComponent"])("router-link"),y=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("header",o,[n,r,s,Object(c["createVNode"])("ul",l,[Object(c["createVNode"])("li",i,[Object(c["createVNode"])("a",{class:"nav-link",onClick:t[1]||(t[1]=function(){return x.logout&&x.logout.apply(x,arguments)})},"Sign out")])])]),Object(c["createVNode"])("div",d,[Object(c["createVNode"])("div",u,[Object(c["createVNode"])("nav",p,[Object(c["createVNode"])("div",b,[Object(c["createVNode"])("ul",h,[v,Object(c["createVNode"])("li",g,[Object(c["createVNode"])(w,{to:"/admin/admin_products",class:"nav-link text-primary"},{default:Object(c["withCtx"])((function(){return[m,f]})),_:1})]),Object(c["createVNode"])("li",j,[Object(c["createVNode"])(w,{to:"/admin/admin_coupons",class:"nav-link text-primary"},{default:Object(c["withCtx"])((function(){return[O,k]})),_:1})])])])])])]),Object(c["createVNode"])(y)],64)}a("ac1f"),a("5319");var V={data:function(){return{}},methods:{logout:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","logout");this.$http.post(t).then((function(t){t.data.success?(e.$router.push("/login"),console.log(t)):console.log(t)})).catch((function(e){console.log(e)}))},checkLogin:function(){var e="".concat("https://vue3-course-api.hexschool.io/","api/user/check"),t=document.cookie.replace(/(?:(?:^|.*;\s*)week3homeworkTK\s*=\s*([^;]*).*$)|^.*$/,"$1");console.log("卻可api的偷啃",t),this.$http.defaults.headers.common.Authorization="".concat(t),this.$http.post(e).then((function(e){e.data.success&&console.log("卻可api",e)})).catch((function(e){console.log(e)}))}},mounted:function(){this.checkLogin()}};V.render=N;t["default"]=V}}]);
//# sourceMappingURL=chunk-2d0c1282.402ea6bc.js.map