(function(e){function t(t){for(var o,i,c=t[0],l=t[1],u=t[2],d=0,g=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&g.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);s&&s(t);while(g.length)g.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09d7":function(e,t,n){e.exports=n.p+"img/bang_icon.faad1387.jpg"},"0ab2":function(e,t,n){e.exports=n.p+"img/logo.591f5fc5.gif"},"0baf":function(e,t,n){"use strict";n("d314")},"19a0":function(e,t,n){e.exports=n.p+"media/easter-egg.8176d09e.wav"},2627:function(e,t,n){},3874:function(e,t,n){"use strict";n("dbda")},"40df":function(e,t,n){"use strict";n("e54b")},4692:function(e,t,n){"use strict";n("2627")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function a(e,t){var n=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])(n)}n("4692");const r={};r.render=a;var i=r,c=n("6c02"),l=Object(o["B"])("data-v-28cbd5d0");Object(o["s"])("data-v-28cbd5d0");var u={class:"main-panel"},s={key:1,class:"nologin-panel"},d=Object(o["g"])("h1",null,"Welcome",-1);Object(o["q"])();var g=l((function(e,t,n,a,r,i){var c=Object(o["w"])("GifContainer"),l=Object(o["w"])("UserProfile"),g=Object(o["w"])("GamesTable");return Object(o["p"])(),Object(o["d"])("div",u,[Object(o["g"])(c),null===r.interval&&r.logged?(Object(o["p"])(),Object(o["d"])(l,{key:0,username:r.username,"google-signed-in":r.googleSignedIn,onLogout:i.logout},null,8,["username","google-signed-in","onLogout"])):Object(o["e"])("",!0),null!==r.interval||r.logged?Object(o["e"])("",!0):(Object(o["p"])(),Object(o["d"])("div",s,[d,Object(o["g"])("button",{class:"login-button",onClick:t[1]||(t[1]=function(){return i.login&&i.login.apply(i,arguments)})},"Login")])),null===r.interval?(Object(o["p"])(),Object(o["d"])(g,{key:2})):Object(o["e"])("",!0)])})),p=n("0ab2"),f=n.n(p),b=Object(o["B"])("data-v-11437ebe");Object(o["s"])("data-v-11437ebe");var m={src:f.a,ref:"logo_gif_image"};Object(o["q"])();var v=b((function(e,t,n,a,r,i){return Object(o["p"])(),Object(o["d"])("div",{class:["logo__main-panel",{animation:!r.gifDisplayed}],onClick:t[1]||(t[1]=function(){return i.playAudio&&i.playAudio.apply(i,arguments)})},[Object(o["g"])("img",m,null,512)],2)})),j={name:"GifContainer",data:function(){return{soundPlayer:null,gifDisplayed:null!==sessionStorage.getItem("gifdisplayed")}},methods:{playAudio:function(){this.soundPlayer.play()}},mounted:function(){this.soundPlayer=document.createElement("audio"),this.soundPlayer.src=n("19a0"),this.soundPlayer.setAttribute("preload","auto"),this.soundPlayer.setAttribute("controls","none"),this.soundPlayer.style.display="none",document.body.appendChild(this.soundPlayer)}};n("40df");j.render=v,j.__scopeId="data-v-11437ebe";var O=j,y=Object(o["B"])("data-v-d2a5a190");Object(o["s"])("data-v-d2a5a190");var h={class:"games-table__main-table"},_={class:"games-table__games-container"};Object(o["q"])();var w=y((function(e,t,n,a,r,i){return Object(o["p"])(),Object(o["d"])("div",h,[Object(o["g"])("div",_,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(r.games,(function(e,t){return Object(o["p"])(),Object(o["d"])("div",{key:t,onClick:function(t){return i.redirect(e.url)}},[Object(o["g"])("img",{src:e.img},null,8,["src"])],8,["onClick"])})),128))])])})),P=[{name:"Unseen",url:"/unseen",img:n("ce84")},{link:"/monopoly",img:n("9ac7")},{link:"/bang",img:n("09d7")},{link:"/astroparty",img:n("d06b")}],k={name:"GamesTable",data:function(){return{games:P,firstGame:0,secondGame:1,thirdGame:2}},methods:{redirect:function(e){window.location.pathname=e}}};n("9b18");k.render=w,k.__scopeId="data-v-d2a5a190";var I=k,x=Object(o["B"])("data-v-535bf9c2");Object(o["s"])("data-v-535bf9c2");var S={class:"user-profile__main-panel"},C=Object(o["f"])("Welcome back ");Object(o["q"])();var G=x((function(e,t,n,a,r,i){return Object(o["p"])(),Object(o["d"])("div",S,[Object(o["g"])("h1",null,[C,Object(o["g"])("span",null,Object(o["y"])(n.username),1)]),Object(o["g"])("img",{src:r.logoutImg,onClick:t[1]||(t[1]=function(){return i.logout&&i.logout.apply(i,arguments)})},null,8,["src"])])})),q={name:"UserProfile",props:{username:{type:String,required:!0}},data:function(){return{logoutImg:n("bc8c")}},methods:{logout:function(){this.logoutImg=n("866a");var e=this,t=setInterval((function(){e.logoutImg="/logout.png",e.$emit("logout"),clearInterval(t)}),500)}}};n("0baf");q.render=G,q.__scopeId="data-v-535bf9c2";var A=q,T=n("bc3a"),B=n.n(T),L="https://papero.tk/user/get_info",M="https://papero.tk/auth/logout",U={name:"Home",components:{UserProfile:A,GamesTable:I,GifContainer:O},data:function(){return{interval:null,showLoginPopup:!1,username:null,logged:null,googleSignedIn:null}},methods:{logout:function(){this.logged=!1,B.a.get(M)},login:function(){var e=window.location;window.location.href="/auth/google?from_location="+e}},mounted:function(){var e=this;sessionStorage.getItem("gifdisplayed")||(this.interval=setInterval((function(){clearInterval(e.interval),e.interval=null,sessionStorage.setItem("gifdisplayed","true")}),4e3)),B.a.get(L).then((function(t){t.data?(e.logged=!0,e.username=t.data.username,e.googleSignedIn=t.data.google_signed_in):e.logged=!1}))}};n("3874");U.render=g,U.__scopeId="data-v-28cbd5d0";var D=U,H=[{path:"/",name:"Home",component:D}],J=Object(c["a"])({history:Object(c["b"])(),routes:H}),W=J;Object(o["c"])(i).use(W).mount("#app")},"866a":function(e,t,n){e.exports=n.p+"img/logout.3e78268c.gif"},"9ac7":function(e,t,n){e.exports=n.p+"img/monopoly_icon.b896fc54.png"},"9b18":function(e,t,n){"use strict";n("f517")},bc8c:function(e,t,n){e.exports=n.p+"img/logout.23b1d70f.png"},ce84:function(e,t,n){e.exports=n.p+"img/unseen_icon.69302845.jpg"},d06b:function(e,t,n){e.exports=n.p+"img/astroparty_icon.4979cf43.jpeg"},d314:function(e,t,n){},dbda:function(e,t,n){},e54b:function(e,t,n){},f517:function(e,t,n){}});
//# sourceMappingURL=app.ed312f8f.js.map