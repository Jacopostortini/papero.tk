(function(e){function t(t){for(var o,c,i=t[0],u=t[1],l=t[2],d=0,b=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);s&&s(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0ab2":function(e,t,n){e.exports=n.p+"img/logo.591f5fc5.gif"},"11fc":function(e,t,n){"use strict";n("7849")},"13b8":function(e,t,n){"use strict";n("f369")},"16a7":function(e,t,n){},"2d2b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function a(e,t){var n=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])(n)}n("c6a9");const r={};r.render=a;var c=r,i=n("6c02"),u=Object(o["E"])("data-v-fb6b6d5a");Object(o["s"])("data-v-fb6b6d5a");var l={class:"main-panel"},s={key:2,class:"nologin-panel"},d=Object(o["g"])("h1",null,"Welcome",-1);Object(o["q"])();var b=u((function(e,t,n,a,r,c){var i=Object(o["w"])("GifContainer"),u=Object(o["w"])("GamesTable"),b=Object(o["w"])("UserProfile"),g=Object(o["w"])("LoginPopup");return Object(o["p"])(),Object(o["d"])("div",l,[Object(o["g"])(i),null===r.interval?(Object(o["p"])(),Object(o["d"])(u,{key:0})):Object(o["e"])("",!0),null===r.interval&&r.logged?(Object(o["p"])(),Object(o["d"])(b,{key:1,username:r.username,onLogout:c.logout},null,8,["username","onLogout"])):Object(o["e"])("",!0),null!==r.interval||r.logged?Object(o["e"])("",!0):(Object(o["p"])(),Object(o["d"])("div",s,[d,Object(o["g"])("button",{class:"login-button",onClick:t[1]||(t[1]=function(e){return r.showLoginPopup=!0})},"Login")])),r.showLoginPopup?(Object(o["p"])(),Object(o["d"])(g,{key:3,onClick:t[2]||(t[2]=function(e){return r.showLoginPopup=!1}),onLogin:c.login},null,8,["onLogin"])):Object(o["e"])("",!0)])})),g=n("0ab2"),p=n.n(g),f=Object(o["E"])("data-v-31c45dcc");Object(o["s"])("data-v-31c45dcc");var m={src:p.a,ref:"logo_gif_image"};Object(o["q"])();var j=f((function(e,t,n,a,r,c){return Object(o["p"])(),Object(o["d"])("div",{class:["logo__main-panel",{animation:!r.gifDisplayed}],onClick:t[1]||(t[1]=function(){return c.playAudio&&c.playAudio.apply(c,arguments)})},[Object(o["g"])("img",m,null,512)],2)})),O={name:"GifContainer",data:function(){return{soundPlayer:null,gifDisplayed:null!==sessionStorage.getItem("gifdisplayed")}},methods:{playAudio:function(){this.soundPlayer.play()}},mounted:function(){this.soundPlayer=document.createElement("audio"),this.soundPlayer.src="/easter-egg.wav",this.soundPlayer.setAttribute("preload","auto"),this.soundPlayer.setAttribute("controls","none"),this.soundPlayer.style.display="none",document.body.appendChild(this.soundPlayer)}};n("7843");O.render=j,O.__scopeId="data-v-31c45dcc";var v=O,y=Object(o["E"])("data-v-526f1a1b");Object(o["s"])("data-v-526f1a1b");var h={class:"games-table__main-table"},_=Object(o["g"])("h1",null,"Games",-1),w={class:"games-table__games-container"};Object(o["q"])();var P=y((function(e,t,n,a,r,c){return Object(o["p"])(),Object(o["d"])("div",h,[_,Object(o["g"])("div",w,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(r.games,(function(e,t){return Object(o["p"])(),Object(o["d"])("div",{key:t,onClick:function(t){return c.redirect(e.url)}},[Object(o["g"])("img",{src:e.img},null,8,["src"])],8,["onClick"])})),128))])])})),k=[{name:"Unseen",url:"/unseen",img:"/gameIcons/unseen_icon.jpg"},{link:"/monopoly",img:"/gameIcons/monopoly_icon.png"},{link:"/bang",img:"/gameIcons/bang_icon.jpg"},{link:"/astroparty",img:"/gameIcons/astroparty_icon.jpeg"}],I={name:"GamesTable",data:function(){return{games:k,firstGame:0,secondGame:1,thirdGame:2}},methods:{redirect:function(e){window.location.pathname=e}}};n("97f2");I.render=P,I.__scopeId="data-v-526f1a1b";var L=I,C=Object(o["E"])("data-v-b832af44");Object(o["s"])("data-v-b832af44");var G={class:"user-profile__main-panel"},A=Object(o["f"])("Welcome back ");Object(o["q"])();var S=C((function(e,t,n,a,r,c){return Object(o["p"])(),Object(o["d"])("div",G,[Object(o["g"])("h1",null,[A,Object(o["g"])("strong",null,Object(o["y"])(n.username),1)]),Object(o["g"])("img",{src:r.logoutImg,onClick:t[1]||(t[1]=function(){return c.logout&&c.logout.apply(c,arguments)})},null,8,["src"])])})),T={name:"UserProfile",props:{username:{type:String,required:!0}},data:function(){return{logoutImg:"/logout.png"}},methods:{logout:function(){this.logoutImg="/logout.gif";var e=this,t=setInterval((function(){e.logoutImg="/logout.png",e.$emit("logout"),clearInterval(t)}),500)}}};n("ae5f");T.render=S,T.__scopeId="data-v-b832af44";var x=T,q=Object(o["E"])("data-v-39888049");Object(o["s"])("data-v-39888049");var E={class:"login-popup__main-panel"},W=Object(o["g"])("h4",null,"or create a temporary user choosing a username",-1),U={key:0},D=Object(o["f"])("Attention! If you create a temporary user your data could be lost and you won't be able to login from a different device. If you are sure to proceed click "),M=Object(o["g"])("u",null,"play as guest",-1),$=Object(o["f"])(" again."),H=Object(o["g"])("button",null,"Play as guest",-1);Object(o["q"])();var J=q((function(e,t,n,a,r,c){return Object(o["p"])(),Object(o["d"])("div",E,[Object(o["g"])("div",{class:"buttons-container",onClick:t[4]||(t[4]=Object(o["D"])((function(){}),["stop"]))},[Object(o["g"])("div",{class:"google-login-button",onClick:t[1]||(t[1]=function(){return c.redirectToLogin&&c.redirectToLogin.apply(c,arguments)})}),Object(o["g"])("div",null,[Object(o["g"])("form",{class:"temporary-account-form",onSubmit:t[3]||(t[3]=Object(o["D"])((function(){return c.playAsGuest&&c.playAsGuest.apply(c,arguments)}),["prevent"]))},[W,Object(o["C"])(Object(o["g"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.username=e})},null,512),[[o["A"],r.username]]),r.showWarning?(Object(o["p"])(),Object(o["d"])("h4",U,[D,M,$])):Object(o["e"])("",!0),H],32)])])])})),V={name:"LoginPopup",data:function(){return{showWarning:!1,username:null}},methods:{playAsGuest:function(){this.showWarning?(this.$emit("login",this.username),this.$emit("click")):this.showWarning=!0},redirectToLogin:function(){window.location.pathname="/auth/google"}}};n("11fc");V.render=J,V.__scopeId="data-v-39888049";var z=V,B={name:"Home",components:{LoginPopup:z,UserProfile:x,GamesTable:L,GifContainer:v},data:function(){return{interval:null,showLoginPopup:!1,username:null,logged:!1}},methods:{logout:function(){this.logged=!1},login:function(e){this.logged=!0,this.username=e}},mounted:function(){var e=this;sessionStorage.getItem("gifdisplayed")||(this.interval=setInterval((function(){clearInterval(e.interval),e.interval=null,sessionStorage.setItem("gifdisplayed","true")}),4e3))}};n("13b8");B.render=b,B.__scopeId="data-v-fb6b6d5a";var F=B,K=[{path:"/",name:"Home",component:F}],N=Object(i["a"])({history:Object(i["b"])(),routes:K}),Q=N;Object(o["c"])(c).use(Q).mount("#app")},7843:function(e,t,n){"use strict";n("a308")},7849:function(e,t,n){},"97f2":function(e,t,n){"use strict";n("16a7")},a308:function(e,t,n){},ae5f:function(e,t,n){"use strict";n("b268")},b268:function(e,t,n){},c6a9:function(e,t,n){"use strict";n("2d2b")},f369:function(e,t,n){}});
//# sourceMappingURL=app.f0b0209c.js.map