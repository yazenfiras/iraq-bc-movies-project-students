(this["webpackJsonpabdulbasit-hussein-yazen"]=this["webpackJsonpabdulbasit-hussein-yazen"]||[]).push([[0],{34:function(e,t,a){e.exports=a(45)},39:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),i=(a(39),a(7)),l=a(55),s=a(47),m=a(28),u=a(48);var h=function(e){return r.a.createElement(l.a,{className:"shadow my-3 card-shadow"},r.a.createElement(l.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w300"+e.mov.poster_path}),r.a.createElement(l.a.Body,null,r.a.createElement(l.a.Title,null,e.mov.title),r.a.createElement(s.a,{className:"justify-content-md-between"},r.a.createElement(m.a,null,r.a.createElement(u.a,{pill:!0,variant:"primary"},e.mov.release_date.substring(0,4))),r.a.createElement(m.a,null,r.a.createElement(u.a,{pill:!0,variant:"warning"},"Rating ",e.mov.vote_average)))))},d=a(49);var v=function(e){return r.a.createElement(d.a,{className:"my-5"},r.a.createElement(s.a,null,e.movies.map((function(e){return r.a.createElement(m.a,{xs:12,md:4,lg:3,key:e.id},r.a.createElement(h,{mov:e}))}))))};var f=function(e){return r.a.createElement("main",null,r.a.createElement(v,{movies:e.movies}))};var b=function(){return r.a.createElement("footer",{className:"d-flex justify-content-center bg-dark p-5 text-white "},r.a.createElement("p",null,"The website made with love by",r.a.createElement("a",{href:"https://github.com/abdulbasit-web"}," ","Abdulbasit"),", ",r.a.createElement("a",{href:"https://github.com/husseinTalal2"}," Hussein "),","," ",r.a.createElement("a",{href:"https://github.com/ZeenaKareemAlhello"}," Zeena "),"and ",r.a.createElement("a",{href:"https://github.com/yazenfiras"}," Yezen ")))},p=a(52),E=a(29),g=a(50),j=a(51);var k=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),m=(s[0],s[1]),u=Object(n.useState)(!1),h=Object(i.a)(u,2),d=h[0],v=h[1];return r.a.createElement(p.a,{inline:!0,onSubmit:function(t){t.preventDefault(),m(c);fetch(function(e,t){return"".concat("https://api.themoviedb.org/3","/").concat(e,"?api_key=").concat(atob("ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="),"&query=").concat(t)}("search/movie",c)).then((function(e){return e.json()})).then((function(t){e.setMovies(t.results),v(!0),setTimeout((function(){v(!1)}),500)}))}},r.a.createElement(E.a,{onChange:function(e){return o(e.target.value)},type:"text",placeholder:"Search for movie...",className:"mr-sm-2",required:!0}),d?r.a.createElement(g.a,{className:d?"d-block":"d-none",animation:"border",variant:"success"}):r.a.createElement(j.a,{type:"submit",variant:"outline-success"},"Search"))},y=a(53),w=a(54);var O=function(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),s=Object(i.a)(l,2),m=s[0],u=s[1];function h(t){o(t.target.id),fetch("https://api.themoviedb.org/3/movie/popular?api_key=754ad3989128c7d8cfcc82e6591e7f2e").then((function(e){return e.json()})).then((function(t){e.setMovies(t.results.filter((function(e){return e.genre_ids.includes(parseInt(c))})))}))}return r.a.createElement(p.a,null,r.a.createElement(p.a.Control,{className:"form-control-sm genres",placeholder:"Genres",onClick:function(){fetch("".concat("https://api.themoviedb.org/3","/genre/movie/list?api_key=").concat(atob("ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="))).then((function(e){return e.json()})).then((function(e){return u(e.genres)}))},as:"select"},r.a.createElement("option",{disabled:!0,selected:!0},"Choose Genre"),m.map((function(e){return r.a.createElement("option",{onClick:h,id:e.id,key:e.id},e.name)}))))};var Z=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2);return a[0],a[1],r.a.createElement(y.a,{bg:"dark",className:"text-white",expand:"lg",variant:"dark"},r.a.createElement(y.a.Brand,{href:"#home"},"! Netflix"),r.a.createElement(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(y.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(w.a,{className:"mr-auto"},r.a.createElement(w.a.Link,{href:"#home"},"Home"),r.a.createElement(O,{setMovies:e.setMovies})),r.a.createElement(k,{setMovies:e.setMovies})))};a(43);var M=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(i.a)(o,2),s=l[0],m=l[1];return window.addEventListener("DOMContentLoaded",(function(){fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=754ad3989128c7d8cfcc82e6591e7f2e").then((function(e){return e.json()})).then((function(e){m(e.results)}))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{setMovies:c}),r.a.createElement(f,{movies:0===a.length?s:a}),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.cea93ce6.chunk.js.map