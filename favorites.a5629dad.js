function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire6ef5;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire6ef5=a),a.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),a.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),a.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),a.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}})),a.register("3B3Zk",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.set)return"__destrWrapper"in t||(t.__destrWrapper={set value(n){t.set.call(e,n)},get value(){return t.get.call(e)}}),t.__destrWrapper;if(!t.writable)throw new TypeError("attempted to set read only private field");return t}}));const i={mobile:5,tablet:8,desktop:9};Object.freeze(i);const o={mobile:320,tablet:768};Object.freeze(o);const s={container:"news-container",card:"news-item",favButton:"add-news-favorite",favButtonText:"favorite-btn-text",favButtonIcon:"favorite-icon",inFavorites:"in-favorites",title:"news-title",abstract:"news-desk",section:"news-chip",media:"news-img",published_date:"news-date",url:"news-link"};Object.freeze(s);const u='<path class="icon-heart" d="M8.381 2.286C4.174 2.286.762 5.663.762 9.829c0 3.363 1.333 11.345 14.458 19.413a1.501 1.501 0 0 0 1.56 0c13.125-8.069 14.458-16.05 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543S16 6.857 16 6.857s-3.412-4.571-7.619-4.571z"/>';function l(){if("null"!==String(document.querySelector(".not-found-image")))return;const e=document.querySelector(".main");document.querySelectorAll(".news-item").length<1&&("NYTimes News: Your Favorites"===document.title?document.querySelector(".news-container").remove():"NYTimes News: Read By Yourself"===document.title&&document.querySelector(".read").remove(),e.insertAdjacentHTML("beforeend",'<h2 class="not-found">We haven’t found any news</h2>\n    <img class="not-found-image" srcset="\n                  https://raw.githubusercontent.com/MaxF1996/NYTimesNews/main/src/images/gap1x.png          601w,\n                  https://raw.githubusercontent.com/MaxF1996/NYTimesNews/main/src/images/gap1x-tablet.png   560w,\n                  https://raw.githubusercontent.com/MaxF1996/NYTimesNews/main/src/images/gap1x-mobile.png   248w,\n                  https://raw.githubusercontent.com/MaxF1996/NYTimesNews/main/src/images/gap2x.png          1202w,\n                  https://raw.githubusercontent.com/MaxF1996/NYTimesNews/main/src/images/gap2x-tablet.png   1120w,\n                  https://raw.githubusercontent.com/MaxF1996/NYTimesNews/main/src/images/gap2x-mobile.png   496w,\n                  https://raw.githubusercontent.com/MaxF1996/NYTimesNews/main/src/images/gap3x.png          1803w,\n                  https://raw.githubusercontent.com/MaxF1996/NYTimesNews/main/src/images/gap3x-tablet.png     1680w,\n                  https://raw.githubusercontent.com/MaxF1996/NYTimesNews/main/src/images/gap3x-mobile.png   744w,\n                " sizes="(min-width: 1280px) 601px, (min-width: 768px) 560px, 248px" src="./images/gap1x.png" alt="Not found">'))}function c(e,t=null,n=null){let r=[];const a=localStorage.getItem(e);if(a)try{r=JSON.parse(a)}catch(e){console.log(e.message)}return n&&(n(r,t),localStorage.setItem(e,JSON.stringify(r))),r}function f(e,t){const n=t.querySelector(`.${s.title}`).textContent.trim();return c(e).findIndex((e=>e.title===n))}function d(e,t){e.splice(t,1)}function p(e,t){e.unshift(function(e){return{media:[{url:e.querySelector(`.${s.media}`).src,caption:e.querySelector(`.${s.media}`).alt}],title:e.querySelector(`.${s.title}`).textContent.trim(),section:e.querySelector(`.${s.section}`).textContent,subsection:"",abstract:e.querySelector(`.${s.abstract}`).textContent,published_date:e.querySelector(`.${s.published_date}`).textContent,url:e.querySelector(`.${s.url}`).href}}(t))}function m(e){e.querySelector(`.${s.favButtonText}`).textContent="In favorite",e.querySelector(`.${s.favButtonIcon}`).innerHTML=u}var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e,t){var n=v.default(e,t,"get");return h.default(e,n)};var v=w(a("fExtF")),h=w(a("iaRLo"));function w(e){return e&&e.__esModule?e:{default:e}}var b={};Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(e,t,n){y.default(e,t),t.set(e,n)};var x,y=(x=a("7K24o"))&&x.__esModule?x:{default:x};var _={};Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(e,t,n){var r=M.default(e,t,"set");return N.default(e,r,n),n};var M=T(a("fExtF")),N=T(a("3LGG3"));function T(e){return e&&e.__esModule?e:{default:e}}var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(e,t){var n=O.default(e,t,"update");return S.default(e,n)};var O=$(a("fExtF")),S=$(a("3B3Zk"));function $(e){return e&&e.__esModule?e:{default:e}}var P={};Object.defineProperty(P,"__esModule",{value:!0}),P.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var F={};Object.defineProperty(F,"__esModule",{value:!0}),F.default=function(e,t){k.default(e,t),t.add(e)};var k=function(e){return e&&e.__esModule?e:{default:e}}(a("7K24o"));var q=new WeakMap,E=new WeakMap,Y=new WeakMap,L=new WeakMap,W=new WeakMap,D=new WeakMap,B=new WeakSet;function C(){return Math.ceil(e(g)(this,D).length/e(g)(this,q))}var z,I=/^\s+|\s+$/g,R=/^[-+]0x[0-9a-f]+$/i,H=/^0b[01]+$/i,A=/^0o[0-7]+$/i,G=parseInt,K="object"==typeof t&&t&&t.Object===Object&&t,J="object"==typeof self&&self&&self.Object===Object&&self,U=K||J||Function("return this")(),Z=Object.prototype.toString,Q=Math.max,V=Math.min,X=function(){return U.Date.now()};function ee(e,t,n){var r,a,i,o,s,u,l=0,c=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=a;return r=a=void 0,l=t,o=e.apply(i,n)}function m(e){return l=e,s=setTimeout(v,t),c?p(e):o}function g(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-l>=i}function v(){var e=X();if(g(e))return h(e);s=setTimeout(v,function(e){var n=t-(e-u);return f?V(n,i-(e-l)):n}(e))}function h(e){return s=void 0,d&&r?p(e):(r=a=void 0,o)}function w(){var e=X(),n=g(e);if(r=arguments,a=this,u=e,n){if(void 0===s)return m(u);if(f)return s=setTimeout(v,t),p(u)}return void 0===s&&(s=setTimeout(v,t)),o}return t=ne(t)||0,te(n)&&(c=!!n.leading,i=(f="maxWait"in n)?Q(ne(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=u=a=s=void 0},w.flush=function(){return void 0===s?o:h(X())},w}function te(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ne(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==Z.call(e)}(e))return NaN;if(te(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=te(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(I,"");var n=H.test(e);return n||A.test(e)?G(e.slice(2),n?2:8):R.test(e)?NaN:+e}z=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return te(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),ee(e,t,{leading:r,maxWait:t,trailing:a})};const re=document.querySelector(`.${s.container}`);re.addEventListener("click",(function(e){if(!e.target.classList.contains(s.favButton)&&!e.target.parentNode.classList.contains(s.favButton)&&"path"!==e.target.tagName)return;const t=function(e,t){let n=t;for(;!n.classList.contains(e);)n=n.parentElement;return n}(s.card,e.target),n=f("favPagesData",t);n>-1?function(e,t,n){c(e,t,d),n.remove(),l()}("favPagesData",n,t):function(e,t){c(e,t,p),m(t)}("favPagesData",t)}));const ae=new class{refresh(){var t;e(_)(this,D,c(e(g)(this,L))),e(_)(this,q,(t=e(g)(this,W),window.matchMedia(`(max-width: ${o.mobile}px)`).matches?t.mobile:window.matchMedia(`(max-width: ${o.tablet}px)`).matches?t.tablet:t.desktop)),e(_)(this,E,e(P)(this,B,C).call(this))}getPageData(){return e(g)(this,D).slice((e(g)(this,Y)-1)*e(g)(this,q),e(g)(this,Y)*e(g)(this,q))}getNextPageData(){return e(g)(this,Y)===e(g)(this,E)?null:(++e(j)(this,Y).value,this.getPageData())}constructor(t,n){e(F)(this,B),e(b)(this,q,{writable:!0,value:0}),e(b)(this,E,{writable:!0,value:0}),e(b)(this,Y,{writable:!0,value:1}),e(b)(this,L,{writable:!0,value:""}),e(b)(this,W,{writable:!0,value:{}}),e(b)(this,D,{writable:!0,value:[]}),e(_)(this,L,t),e(_)(this,W,n),this.refresh()}}("favPagesData",i),ie=ae.getPageData().reduce(((e,t)=>oe(t)+e),"");function oe({media:e,title:t,section:n,subsection:r,abstract:a,published_date:i,url:o}){return`\n          <li class="news-item">\n          <div class="overlay"></div>\n          <div class="img-thumb">\n          <span class="readable"\n          >Already read\n          <svg class="icon-done" width="18" height="18"><use\n          href="/sprite.f14d31f7.svg#arrow-done"></use></svg>\n            </span>\n            <img src="${e[0]?e[0].url:"https://raw.githubusercontent.com/MaxF1996/NYTimesNews/main/src/images/The_New_York_Times.jpg"}" loading="lazy" alt="${e[0]?e[0].caption:"NYTimes"}" class="news-img" />\n            <p class="news-chip">${n||r}</p>\n            <button type="button" class="add-news-favorite">\n              <p class="favorite-btn-text">Remove from favorite</p>\n              <svg class="favorite-icon" width="16" height="16" viewBox="0 0 32 32" style="fill: #4440F6;">\n                ${u}\n              </svg> \n            </button>\n          </div>\n          <div class="news-info">\n            <h2 class="news-title disable-scroll">\n              ${t}\n            </h2>\n            <p class="news-desk">\n            ${a}\n            </p>\n            <div class="adding">\n              <p class="news-date">${i}</p>\n              <a\n                href=${o}\n                class="news-link"\n                target="_blank"\n                rel="noopener noreferrer"\n                >Read more</a\n              >\n            </div>\n          </div>\n        </li> `}re.insertAdjacentHTML("beforeend",ie),window.addEventListener("scroll",e(z)((()=>{!function(){if(window.innerHeight+window.scrollY<document.body.offsetHeight-1)return;const e=ae.getNextPageData();if(e){const t=e.reduce(((e,t)=>oe(t)+e),"");re.insertAdjacentHTML("beforeend",t)}}()}),300)),l();
//# sourceMappingURL=favorites.a5629dad.js.map