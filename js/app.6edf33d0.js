(function(t){function e(e){for(var i,l,r=e[0],c=e[1],o=e[2],d=0,h=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&h.push(s[l][0]),s[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(i=!1)}i&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},s={app:0},n=[];function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"096b":function(t,e,a){},"0e37":function(t,e,a){},"1dd8":function(t,e,a){},"42c7":function(t,e,a){"use strict";a("4b56")},"4b56":function(t,e,a){},"4bc2":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"App"}},[a("Nav",{on:{sectionNameIs:function(e){t.seccionNameID=e}}}),a("SectionHome",{attrs:{socialMedia:t.socialMedia}}),a("SectionQR",{ref:"qr",attrs:{title:"Linux Fan - Software Engineer - Maker / Tester"}}),a("SectionYape",{ref:"yape"}),a("SectionBank",{ref:"bank"}),a("SectionBlog",{ref:"blog"}),a("SectionSkill",{ref:"skills"}),a("Footer")],1)},n=[],l=(a("b0c0"),a("fb6a"),a("df25"),a("4bc2"),a("096b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-header page-scroll"},[a("button",{staticClass:"navbar-toggle",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"},on:{click:function(e){return t.openMenuMobile()}}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})]),t._m(0)]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[a("ul",{staticClass:"nav navbar-nav navbar-right"},[t._m(1),a("li",[a("a",{attrs:{href:"#"},on:{click:function(e){return t.goTodetail("blog",e)}}},[a("i",{staticClass:"fas fa-code"}),t._v("Blog")])]),a("li",[a("a",{attrs:{href:"#"},on:{click:function(e){return t.goTodetail("skills",e)}}},[t._v("Skills")])]),a("li",{staticClass:"achide",class:{hide:t.hideYape}},[a("a",{attrs:{href:"#"},on:{click:function(e){return t.goTodetail("yape",e)}}},[t._v("Yape")])]),a("li",{staticClass:"achide",class:{hide:t.hideBank}},[a("a",{attrs:{href:"#"},on:{click:function(e){return t.goTodetail("bank",e)}}},[t._v("Bank Accounts")])])])])])])}),r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"h1-header"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#page-top"}},[t._v("Anibal Copitan")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"hidden"},[a("a",{attrs:{href:"#page-top"}})])}],c={name:"Nav",data:function(){return{hide:!0,hideYape:!0,hideBank:!0}},methods:{goTodetail:function(t,e){e&&e.preventDefault(),this.$route.name!==t&&this.$router.push({name:t}),this.$emit("sectionNameIs",t)},openMenuMobile:function(){document.getElementById("bs-example-navbar-collapse-1").classList.toggle("collapse")}},mounted:function(){"yape"===this.$route.name?this.hideYape=!1:"bank"===this.$route.name&&(this.hideBank=!1)}},o=c,u=a("2877"),d=Object(u["a"])(o,l,r,!1,null,null,null),h=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{class:{hide:t.hide}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{attrs:{id:"head-svg-man"}},[a("h2",[t._v(t._s(t.title))])]),a("div",{staticClass:"intro-text",attrs:{id:"list-conctact"}},[a("ul",{staticClass:"list-inline",attrs:{id:"list-inline"}},[a("li",[a("a",{staticClass:"btn-social btn-outline",attrs:{target:"_blank",href:t.vueAppUrlBlog}},[a("i",{staticClass:"fab fa-blogger-b"})])]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4)]),a("hr",{staticClass:"star-light"}),a("p",{staticClass:"skills"})])])])])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"btn-social btn-outline",attrs:{target:"_blank",href:"https://wa.link/s7q46e"}},[a("i",{staticClass:"fab fa-whatsapp"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"btn-social btn-outline",attrs:{target:"_blank",href:"https://twitter.com/enlacee"}},[a("i",{staticClass:"fab fa-twitter"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"btn-social btn-outline",attrs:{href:"mailto:acopitan@gmail.com"}},[a("i",{staticClass:"fas fa-envelope"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"btn-social btn-outline",attrs:{target:"_blank",href:"https://github.com/enlacee?tab=repositories"}},[a("i",{staticClass:"fab fa-github-alt"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"btn-social btn-outline",attrs:{target:"_blank",href:"https://www.linkedin.com/in/9703b1149/"}},[a("i",{staticClass:"fab fa-linkedin-in"})])])}],v={name:"SectionHome",props:{socialMedia:Array},data:function(){return{title:"Linux Fan - Software Engineer - Maker / Tester",hide:!1,vueAppUrlBlog:"https://blog.anibalcopitan.com"}},created:function(){console.log("socialMedia",this.socialMedia)},mounted:function(){"qr"===this.$route.name&&(this.hide=!0)}},m=v,b=Object(u["a"])(m,p,f,!1,null,null,null),g=b.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{class:{hide:t.hide}},[a("div",{staticClass:"container",staticStyle:{"xpadding-top":"50vh"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"head",attrs:{id:"head-svg-man"}},[a("h2",[t._v(t._s(t.title))])]),t._m(0)])])])])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"intro-text",attrs:{id:"list-conctact"}},[a("ul",{staticClass:"list-inline",attrs:{id:"list-inline"}},[a("li",[a("a",{staticClass:"btn-social btn-outline",attrs:{href:"tel:+0051978412711",target:"_blank"}},[a("i",{staticClass:"fas fa-phone"})])]),a("li",[a("a",{staticClass:"btn-social btn-outline",attrs:{target:"_blank",href:"https://wa.link/s7q46e"}},[a("i",{staticClass:"fab fa-whatsapp"})])])]),a("hr",{staticClass:"star-light"})])}],k={name:"SectionQR",props:{title:String},data:function(){return{hide:!0}},mounted:function(){"qr"===this.$route.name&&(this.hide=!1)}},w=k,x=Object(u["a"])(w,_,C,!1,null,null,null),y=x.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"blog"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 text-center"},[a("h2",[t._v(t._s(t.title))]),a("hr",{staticClass:"star-primary"})])]),a("div",{staticClass:"row",attrs:{id:"blogger-content"}},[a("ul",t._l(t.posts,(function(e){return a("li",{key:e.id.$t},[a("a",{attrs:{href:""+e.link[e.link.length-1].href}},[a("h3",[t._v(t._s(e.title.$t))]),a("p",[t._v(t._s(t.setFormatLocalTime(e.published.$t)))])])])})),0)])])])},S=[],E={name:"SectionBlog",data:function(){return{title:"Last Articles",posts:[],vueAppUrlBlog:"https://blog.anibalcopitan.com"}},mounted:function(){var t=this;window.getPosts=function(e){t.posts=e.feed.entry.slice(0,5)};var e=document.createElement("script");e.setAttribute("src",this.vueAppUrlBlog+"/feeds/posts/default?alt=json-in-script&callback=getPosts"),document.head.appendChild(e)},methods:{setFormatLocalTime:function(t){var e=new Date(t);return e.toLocaleDateString("es-PE")}}},j=E,O=(a("c561"),Object(u["a"])(j,$,S,!1,null,"5911157d",null)),B=O.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"skills"}},[a("div",{staticClass:"container-fluid text-center"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 text-center"},[a("h2",[t._v(t._s(t.title))]),a("hr",{staticClass:"star-primary"})])]),t._m(0)])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"owl-carousel owl-theme",attrs:{id:"owl-demo"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"img-responsive"},[a("img",{attrs:{src:"img/skills/linux.png",title:"LINUX",alt:"LINUX",width:"400px",height:"400px"}}),a("div",{staticClass:"textoverlay"},[a("h2",[t._v("LINUX")]),a("p",[t._v("El todo")])])])]),a("div",{staticClass:"item"},[a("div",{staticClass:"img-responsive"},[a("img",{attrs:{src:"img/skills/python.png",title:"Python",alt:"Python",width:"400px",height:"400px"}}),a("div",{staticClass:"textoverlay"},[a("h2",[t._v("Python")]),a("p",[t._v("La navaja suiza")])])])]),a("div",{staticClass:"item"},[a("div",{staticClass:"img-responsive"},[a("img",{attrs:{src:"img/skills/javascript.png",title:"Javascript",alt:"Javascript",width:"400px",height:"400px"}}),a("div",{staticClass:"textoverlay"},[a("h2",[t._v("Javascript")]),a("p",[t._v("Multiplataforma")])])])]),a("div",{staticClass:"item"},[a("div",{staticClass:"img-responsive"},[a("img",{attrs:{src:"img/skills/php.png",title:"PHP",alt:"PHP",width:"400px",height:"400px"}}),a("div",{staticClass:"textoverlay"},[a("h2",[t._v("PHP")]),a("p",[t._v("Zend-Framework, Laravel")])])])])])])}],T={name:"SectionSkill",data:function(){return{title:"Skills"}}},A=T,L=(a("befa"),Object(u["a"])(A,M,P,!1,null,"c6354706",null)),N=L.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"achide",class:{hide:t.hide},attrs:{id:"yape"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 text-center"},[a("h2",[t._v(t._s(t.title))]),a("hr",{staticClass:"star-primary"})]),t._m(0)])])])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-12"},[a("img",{staticClass:"img-responsive",attrs:{src:"img/yape-qr-formato.png",alt:"yape QR"}})])}],q={name:"SectionYape",data:function(){return{title:"Yape",hide:!0}},mounted:function(){"yape"===this.$route.name&&(this.hide=!1)}},F=q,U=(a("aba4"),Object(u["a"])(F,I,D,!1,null,"4536168f",null)),Y=U.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"achide",class:{hide:t.hide},attrs:{id:"bank"}},[t._m(0)])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 text-center"},[a("h2",[t._v("Bank Accounts")]),a("hr",{staticClass:"star-primary"})]),a("div",{staticClass:"col-lg-12 text-center"},[a("ul",[a("li",[a("h4",[t._v("BCP")]),a("div",[a("p",[t._v("Soles")]),a("code",[t._v("19121738752033")]),a("br"),a("code",[t._v("00219112173875203350")]),a("p",[t._v("Dolares")]),a("code",[t._v("19103065842109")]),a("br"),a("code",[t._v("00219110306584210950")])])]),a("li",[a("h4",[t._v("Interbank")]),a("p",[t._v("Soles")]),a("code",[t._v("6393098282175")])]),a("li",[a("h4",[t._v("BanBif")]),a("p",[t._v("Soles")]),a("code",[t._v("008016038034")]),a("br"),a("code",[t._v("03820510801603803412")])])])])])])}],Q={name:"SectionBank",data:function(){return{hide:!0}},mounted:function(){"bank"===this.$route.name&&(this.hide=!1)}},R=Q,X=(a("42c7"),Object(u["a"])(R,H,J,!1,null,"df6cc6ee",null)),z=X.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"text-center",attrs:{id:"footer"}},[a("div",{staticClass:"footer-below"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("p",[a("span",[t._v("From LATAM to ")]),a("span",[a("i",{staticClass:"fas fa-heart"})]),a("span",[t._v(" the world")])]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")])])])])])}],K={name:"Footer"},V=K,W=Object(u["a"])(V,Z,G,!1,null,null,null),tt=W.exports,et={name:"App",components:{Nav:h,SectionHome:g,SectionQR:y,SectionBlog:B,SectionSkill:N,SectionYape:Y,SectionBank:z,Footer:tt},data:function(){return{seccionNameID:"",socialMedia:[]}},methods:{goToScroll:function(){if(console.log("route",this.$route,"seccionNameID",this.seccionNameID),this.$route.name){var t="Anibal Copitan - ",e=this.$route.name,a=e.charAt(0).toUpperCase()+e.slice(1);if(document.title=t+a,this.$refs[this.$route.name]){var i=this.$refs[this.$route.name].$el,s=i.offsetTop;window.scrollTo(0,s-60)}}}},created:function(){this.socialMedia=[{id:1,name:"blogger",url:"https://blog.anibalcopitan.com"},{id:2,name:"whatsapp",url:"https://wa.link/s7q46e"},{id:3,name:"twitter",url:"https://twitter.com/enlacee"},{id:4,name:"email",url:"mailto:acopitan@gmail.com"},{id:5,name:"github",url:"https://github.com/enlacee?tab=repositories"},{id:6,name:"linkedin",url:"https://www.linkedin.com/in/9703b1149/"}]},mounted:function(){this.$nextTick((function(){window.addEventListener("DOMContentLoaded",this.goToScroll)}))},watch:{seccionNameID:function(){this.goToScroll()}}},at=et,it=Object(u["a"])(at,s,n,!1,null,null,null),st=it.exports,nt=a("8c4f");i["a"].use(nt["a"]);var lt=[{path:"/blog",name:"blog"},{path:"/qr",name:"qr"},{path:"/skills",name:"skills"},{path:"/yape",name:"yape"},{path:"/bank",name:"bank"}],rt=new nt["a"]({routes:lt}),ct=rt;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(st)},router:ct,methods:{get:function(){return"get"}}}).$mount("#app")},aba4:function(t,e,a){"use strict";a("0e37")},befa:function(t,e,a){"use strict";a("1dd8")},c561:function(t,e,a){"use strict";a("db61")},db61:function(t,e,a){},df25:function(t,e,a){}});
//# sourceMappingURL=app.6edf33d0.js.map