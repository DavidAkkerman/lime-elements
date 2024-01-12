import{r as t,h as r,g as e}from"./index-6156b4fd.js";import{c as n}from"./config-b9522455.js";class i{constructor(t){this.promises={};this.cache=t}async get(t,r=""){const e=await this.cache;const n=this.getUrl(t,r);let i=await e.match(n);if(!i){i=await this.fetchData(n,e)}return this.getIcon(i)}async fetchData(t,r){let e=this.promises[t];if(e===undefined){e=r.add(t);this.promises[t]=e}await e;return r.match(t)}async getIcon(t){let r=await t.text();r=r.replace(/#000000/g,"currentColor");if(!this.validSvg(r)){throw new Error("Invalid SVG")}return r}validSvg(t){const r=new DOMParser;const e=r.parseFromString(t,"image/svg+xml");return e.documentElement.tagName.toLowerCase()==="svg"}getUrl(t,r){let e=r||"";if(r&&!r.endsWith("/")){e=`${r}/`}return`${e}assets/icons/${t}.svg`}}class a{constructor(){this.cache={};this.resolveFunctions={}}async get(t,r=""){if(!this.cache[t]){this.cache[t]=await this.getIcon(t,r)}return this.cache[t]}getIcon(t,r){return new Promise((e=>{if(!this.resolveFunctions[t]){this.resolveFunctions[t]=[];this.fetchData(t,r)}this.resolveFunctions[t].push(e)}))}async fetchData(t,r){let e=r||"";if(r&&!r.endsWith("/")){e=`${r}/`}const n=await fetch(`${e}assets/icons/${t}.svg`);let i=await n.text();i=i.replace(/#000000/g,"currentColor");if(!this.validSvg(i)){throw new Error("Invalid SVG")}this.resolvePromises(t,i)}validSvg(t){const r=new DOMParser;const e=r.parseFromString(t,"image/svg+xml");return e.documentElement.tagName.toLowerCase()==="svg"}resolvePromises(t,r){const e=this.resolveFunctions[t];e.forEach((t=>{t(r)}));this.resolveFunctions[t]=null}}const o="@limetech/lime-elements/icons";function s(){try{const t=caches.open(o);return new i(t)}catch(t){return new a}}const u=(()=>s())();const f=":host{background-color:var(--icon-background-color, transparent);border-radius:50%;display:inline-block;line-height:0;box-sizing:border-box}:host svg{fill:currentColor;height:100%;pointer-events:none;width:100%}:host([hidden]){display:none}:host([size=x-small]){height:0.9375rem !important;width:0.9375rem !important}:host([size=small]){height:1.25rem !important;width:1.25rem !important}:host([size=medium]){height:1.5625rem !important;width:1.5625rem !important}:host([size=large]){height:1.875rem !important;width:1.875rem !important}:host([badge][size=x-small]){height:1.4375rem !important;width:1.4375rem !important}:host([badge][size=x-small])>div{margin:0.25rem}:host([badge][size=small]){height:1.875rem !important;width:1.875rem !important}:host([badge][size=small])>div{margin:0.3125rem}:host([badge][size=medium]){height:2.5rem !important;width:2.5rem !important}:host([badge][size=medium])>div{margin:0.5rem}:host([badge][size=large]){height:2.875rem !important;width:2.875rem !important}:host([badge][size=large])>div{margin:0.5rem}";const v=class{constructor(r){t(this,r);this.size=undefined;this.name=undefined;this.badge=undefined}componentDidLoad(){this.loadIcon(this.name)}render(){return r("div",{class:"container"})}async loadIcon(t){if(t===undefined||t===""){return}const r=await this.loadSvg(t);this.renderSvg(r)}loadSvg(t){return u.get(t,n.iconPath)}renderSvg(t){const r=this.host.shadowRoot.querySelector("div.container");if(r){r.innerHTML=t}}get host(){return e(this)}static get watchers(){return{name:["loadIcon"]}}};v.style=f;var c="top";var l="bottom";var h="right";var d="left";var p="auto";var m=[c,l,h,d];var b="start";var g="end";var y="clippingParents";var w="viewport";var x="popper";var O="reference";var j=m.reduce((function(t,r){return t.concat([r+"-"+b,r+"-"+g])}),[]);var k=[].concat(m,[p]).reduce((function(t,r){return t.concat([r,r+"-"+b,r+"-"+g])}),[]);var M="beforeRead";var P="read";var z="afterRead";var C="beforeMain";var S="main";var I="afterMain";var A="beforeWrite";var E="write";var q="afterWrite";var R=[M,P,z,C,S,I,A,E,q];function W(t){return t?(t.nodeName||"").toLowerCase():null}function $(t){if(t==null){return window}if(t.toString()!=="[object Window]"){var r=t.ownerDocument;return r?r.defaultView||window:window}return t}function B(t){var r=$(t).Element;return t instanceof r||t instanceof Element}function D(t){var r=$(t).HTMLElement;return t instanceof r||t instanceof HTMLElement}function L(t){if(typeof ShadowRoot==="undefined"){return false}var r=$(t).ShadowRoot;return t instanceof r||t instanceof ShadowRoot}function V(t){var r=t.state;Object.keys(r.elements).forEach((function(t){var e=r.styles[t]||{};var n=r.attributes[t]||{};var i=r.elements[t];if(!D(i)||!W(i)){return}Object.assign(i.style,e);Object.keys(n).forEach((function(t){var r=n[t];if(r===false){i.removeAttribute(t)}else{i.setAttribute(t,r===true?"":r)}}))}))}function T(t){var r=t.state;var e={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(r.elements.popper.style,e.popper);r.styles=e;if(r.elements.arrow){Object.assign(r.elements.arrow.style,e.arrow)}return function(){Object.keys(r.elements).forEach((function(t){var n=r.elements[t];var i=r.attributes[t]||{};var a=Object.keys(r.styles.hasOwnProperty(t)?r.styles[t]:e[t]);var o=a.reduce((function(t,r){t[r]="";return t}),{});if(!D(n)||!W(n)){return}Object.assign(n.style,o);Object.keys(i).forEach((function(t){n.removeAttribute(t)}))}))}}const F={name:"applyStyles",enabled:true,phase:"write",fn:V,effect:T,requires:["computeStyles"]};function H(t){return t.split("-")[0]}var _=Math.max;var G=Math.min;var U=Math.round;function J(){var t=navigator.userAgentData;if(t!=null&&t.brands&&Array.isArray(t.brands)){return t.brands.map((function(t){return t.brand+"/"+t.version})).join(" ")}return navigator.userAgent}function K(){return!/^((?!chrome|android).)*safari/i.test(J())}function N(t,r,e){if(r===void 0){r=false}if(e===void 0){e=false}var n=t.getBoundingClientRect();var i=1;var a=1;if(r&&D(t)){i=t.offsetWidth>0?U(n.width)/t.offsetWidth||1:1;a=t.offsetHeight>0?U(n.height)/t.offsetHeight||1:1}var o=B(t)?$(t):window,s=o.visualViewport;var u=!K()&&e;var f=(n.left+(u&&s?s.offsetLeft:0))/i;var v=(n.top+(u&&s?s.offsetTop:0))/a;var c=n.width/i;var l=n.height/a;return{width:c,height:l,top:v,right:f+c,bottom:v+l,left:f,x:f,y:v}}function Q(t){var r=N(t);var e=t.offsetWidth;var n=t.offsetHeight;if(Math.abs(r.width-e)<=1){e=r.width}if(Math.abs(r.height-n)<=1){n=r.height}return{x:t.offsetLeft,y:t.offsetTop,width:e,height:n}}function X(t,r){var e=r.getRootNode&&r.getRootNode();if(t.contains(r)){return true}else if(e&&L(e)){var n=r;do{if(n&&t.isSameNode(n)){return true}n=n.parentNode||n.host}while(n)}return false}function Y(t){return $(t).getComputedStyle(t)}function Z(t){return["table","td","th"].indexOf(W(t))>=0}function tt(t){return((B(t)?t.ownerDocument:t.document)||window.document).documentElement}function rt(t){if(W(t)==="html"){return t}return t.assignedSlot||t.parentNode||(L(t)?t.host:null)||tt(t)}function et(t){if(!D(t)||Y(t).position==="fixed"){return null}return t.offsetParent}function nt(t){var r=/firefox/i.test(J());var e=/Trident/i.test(J());if(e&&D(t)){var n=Y(t);if(n.position==="fixed"){return null}}var i=rt(t);if(L(i)){i=i.host}while(D(i)&&["html","body"].indexOf(W(i))<0){var a=Y(i);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||r&&a.willChange==="filter"||r&&a.filter&&a.filter!=="none"){return i}else{i=i.parentNode}}return null}function it(t){var r=$(t);var e=et(t);while(e&&Z(e)&&Y(e).position==="static"){e=et(e)}if(e&&(W(e)==="html"||W(e)==="body"&&Y(e).position==="static")){return r}return e||nt(t)||r}function at(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ot(t,r,e){return _(t,G(r,e))}function st(t,r,e){var n=ot(t,r,e);return n>e?e:n}function ut(){return{top:0,right:0,bottom:0,left:0}}function ft(t){return Object.assign({},ut(),t)}function vt(t,r){return r.reduce((function(r,e){r[e]=t;return r}),{})}var ct=function t(r,e){r=typeof r==="function"?r(Object.assign({},e.rects,{placement:e.placement})):r;return ft(typeof r!=="number"?r:vt(r,m))};function lt(t){var r;var e=t.state,n=t.name,i=t.options;var a=e.elements.arrow;var o=e.modifiersData.popperOffsets;var s=H(e.placement);var u=at(s);var f=[d,h].indexOf(s)>=0;var v=f?"height":"width";if(!a||!o){return}var p=ct(i.padding,e);var m=Q(a);var b=u==="y"?c:d;var g=u==="y"?l:h;var y=e.rects.reference[v]+e.rects.reference[u]-o[u]-e.rects.popper[v];var w=o[u]-e.rects.reference[u];var x=it(a);var O=x?u==="y"?x.clientHeight||0:x.clientWidth||0:0;var j=y/2-w/2;var k=p[b];var M=O-m[v]-p[g];var P=O/2-m[v]/2+j;var z=ot(k,P,M);var C=u;e.modifiersData[n]=(r={},r[C]=z,r.centerOffset=z-P,r)}function ht(t){var r=t.state,e=t.options;var n=e.element,i=n===void 0?"[data-popper-arrow]":n;if(i==null){return}if(typeof i==="string"){i=r.elements.popper.querySelector(i);if(!i){return}}if(!X(r.elements.popper,i)){return}r.elements.arrow=i}const dt={name:"arrow",enabled:true,phase:"main",fn:lt,effect:ht,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function pt(t){return t.split("-")[1]}var mt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function bt(t,r){var e=t.x,n=t.y;var i=r.devicePixelRatio||1;return{x:U(e*i)/i||0,y:U(n*i)/i||0}}function gt(t){var r;var e=t.popper,n=t.popperRect,i=t.placement,a=t.variation,o=t.offsets,s=t.position,u=t.gpuAcceleration,f=t.adaptive,v=t.roundOffsets,p=t.isFixed;var m=o.x,b=m===void 0?0:m,y=o.y,w=y===void 0?0:y;var x=typeof v==="function"?v({x:b,y:w}):{x:b,y:w};b=x.x;w=x.y;var O=o.hasOwnProperty("x");var j=o.hasOwnProperty("y");var k=d;var M=c;var P=window;if(f){var z=it(e);var C="clientHeight";var S="clientWidth";if(z===$(e)){z=tt(e);if(Y(z).position!=="static"&&s==="absolute"){C="scrollHeight";S="scrollWidth"}}z=z;if(i===c||(i===d||i===h)&&a===g){M=l;var I=p&&z===P&&P.visualViewport?P.visualViewport.height:z[C];w-=I-n.height;w*=u?1:-1}if(i===d||(i===c||i===l)&&a===g){k=h;var A=p&&z===P&&P.visualViewport?P.visualViewport.width:z[S];b-=A-n.width;b*=u?1:-1}}var E=Object.assign({position:s},f&&mt);var q=v===true?bt({x:b,y:w},$(e)):{x:b,y:w};b=q.x;w=q.y;if(u){var R;return Object.assign({},E,(R={},R[M]=j?"0":"",R[k]=O?"0":"",R.transform=(P.devicePixelRatio||1)<=1?"translate("+b+"px, "+w+"px)":"translate3d("+b+"px, "+w+"px, 0)",R))}return Object.assign({},E,(r={},r[M]=j?w+"px":"",r[k]=O?b+"px":"",r.transform="",r))}function yt(t){var r=t.state,e=t.options;var n=e.gpuAcceleration,i=n===void 0?true:n,a=e.adaptive,o=a===void 0?true:a,s=e.roundOffsets,u=s===void 0?true:s;var f={placement:H(r.placement),variation:pt(r.placement),popper:r.elements.popper,popperRect:r.rects.popper,gpuAcceleration:i,isFixed:r.options.strategy==="fixed"};if(r.modifiersData.popperOffsets!=null){r.styles.popper=Object.assign({},r.styles.popper,gt(Object.assign({},f,{offsets:r.modifiersData.popperOffsets,position:r.options.strategy,adaptive:o,roundOffsets:u})))}if(r.modifiersData.arrow!=null){r.styles.arrow=Object.assign({},r.styles.arrow,gt(Object.assign({},f,{offsets:r.modifiersData.arrow,position:"absolute",adaptive:false,roundOffsets:u})))}r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-placement":r.placement})}const wt={name:"computeStyles",enabled:true,phase:"beforeWrite",fn:yt,data:{}};var xt={passive:true};function Ot(t){var r=t.state,e=t.instance,n=t.options;var i=n.scroll,a=i===void 0?true:i,o=n.resize,s=o===void 0?true:o;var u=$(r.elements.popper);var f=[].concat(r.scrollParents.reference,r.scrollParents.popper);if(a){f.forEach((function(t){t.addEventListener("scroll",e.update,xt)}))}if(s){u.addEventListener("resize",e.update,xt)}return function(){if(a){f.forEach((function(t){t.removeEventListener("scroll",e.update,xt)}))}if(s){u.removeEventListener("resize",e.update,xt)}}}const jt={name:"eventListeners",enabled:true,phase:"write",fn:function t(){},effect:Ot,data:{}};var kt={left:"right",right:"left",bottom:"top",top:"bottom"};function Mt(t){return t.replace(/left|right|bottom|top/g,(function(t){return kt[t]}))}var Pt={start:"end",end:"start"};function zt(t){return t.replace(/start|end/g,(function(t){return Pt[t]}))}function Ct(t){var r=$(t);var e=r.pageXOffset;var n=r.pageYOffset;return{scrollLeft:e,scrollTop:n}}function St(t){return N(tt(t)).left+Ct(t).scrollLeft}function It(t,r){var e=$(t);var n=tt(t);var i=e.visualViewport;var a=n.clientWidth;var o=n.clientHeight;var s=0;var u=0;if(i){a=i.width;o=i.height;var f=K();if(f||!f&&r==="fixed"){s=i.offsetLeft;u=i.offsetTop}}return{width:a,height:o,x:s+St(t),y:u}}function At(t){var r;var e=tt(t);var n=Ct(t);var i=(r=t.ownerDocument)==null?void 0:r.body;var a=_(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0);var o=_(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);var s=-n.scrollLeft+St(t);var u=-n.scrollTop;if(Y(i||e).direction==="rtl"){s+=_(e.clientWidth,i?i.clientWidth:0)-a}return{width:a,height:o,x:s,y:u}}function Et(t){var r=Y(t),e=r.overflow,n=r.overflowX,i=r.overflowY;return/auto|scroll|overlay|hidden/.test(e+i+n)}function qt(t){if(["html","body","#document"].indexOf(W(t))>=0){return t.ownerDocument.body}if(D(t)&&Et(t)){return t}return qt(rt(t))}function Rt(t,r){var e;if(r===void 0){r=[]}var n=qt(t);var i=n===((e=t.ownerDocument)==null?void 0:e.body);var a=$(n);var o=i?[a].concat(a.visualViewport||[],Et(n)?n:[]):n;var s=r.concat(o);return i?s:s.concat(Rt(rt(o)))}function Wt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function $t(t,r){var e=N(t,false,r==="fixed");e.top=e.top+t.clientTop;e.left=e.left+t.clientLeft;e.bottom=e.top+t.clientHeight;e.right=e.left+t.clientWidth;e.width=t.clientWidth;e.height=t.clientHeight;e.x=e.left;e.y=e.top;return e}function Bt(t,r,e){return r===w?Wt(It(t,e)):B(r)?$t(r,e):Wt(At(tt(t)))}function Dt(t){var r=Rt(rt(t));var e=["absolute","fixed"].indexOf(Y(t).position)>=0;var n=e&&D(t)?it(t):t;if(!B(n)){return[]}return r.filter((function(t){return B(t)&&X(t,n)&&W(t)!=="body"}))}function Lt(t,r,e,n){var i=r==="clippingParents"?Dt(t):[].concat(r);var a=[].concat(i,[e]);var o=a[0];var s=a.reduce((function(r,e){var i=Bt(t,e,n);r.top=_(i.top,r.top);r.right=G(i.right,r.right);r.bottom=G(i.bottom,r.bottom);r.left=_(i.left,r.left);return r}),Bt(t,o,n));s.width=s.right-s.left;s.height=s.bottom-s.top;s.x=s.left;s.y=s.top;return s}function Vt(t){var r=t.reference,e=t.element,n=t.placement;var i=n?H(n):null;var a=n?pt(n):null;var o=r.x+r.width/2-e.width/2;var s=r.y+r.height/2-e.height/2;var u;switch(i){case c:u={x:o,y:r.y-e.height};break;case l:u={x:o,y:r.y+r.height};break;case h:u={x:r.x+r.width,y:s};break;case d:u={x:r.x-e.width,y:s};break;default:u={x:r.x,y:r.y}}var f=i?at(i):null;if(f!=null){var v=f==="y"?"height":"width";switch(a){case b:u[f]=u[f]-(r[v]/2-e[v]/2);break;case g:u[f]=u[f]+(r[v]/2-e[v]/2);break}}return u}function Tt(t,r){if(r===void 0){r={}}var e=r,n=e.placement,i=n===void 0?t.placement:n,a=e.strategy,o=a===void 0?t.strategy:a,s=e.boundary,u=s===void 0?y:s,f=e.rootBoundary,v=f===void 0?w:f,d=e.elementContext,p=d===void 0?x:d,b=e.altBoundary,g=b===void 0?false:b,j=e.padding,k=j===void 0?0:j;var M=ft(typeof k!=="number"?k:vt(k,m));var P=p===x?O:x;var z=t.rects.popper;var C=t.elements[g?P:p];var S=Lt(B(C)?C:C.contextElement||tt(t.elements.popper),u,v,o);var I=N(t.elements.reference);var A=Vt({reference:I,element:z,strategy:"absolute",placement:i});var E=Wt(Object.assign({},z,A));var q=p===x?E:I;var R={top:S.top-q.top+M.top,bottom:q.bottom-S.bottom+M.bottom,left:S.left-q.left+M.left,right:q.right-S.right+M.right};var W=t.modifiersData.offset;if(p===x&&W){var $=W[i];Object.keys(R).forEach((function(t){var r=[h,l].indexOf(t)>=0?1:-1;var e=[c,l].indexOf(t)>=0?"y":"x";R[t]+=$[e]*r}))}return R}function Ft(t,r){if(r===void 0){r={}}var e=r,n=e.placement,i=e.boundary,a=e.rootBoundary,o=e.padding,s=e.flipVariations,u=e.allowedAutoPlacements,f=u===void 0?k:u;var v=pt(n);var c=v?s?j:j.filter((function(t){return pt(t)===v})):m;var l=c.filter((function(t){return f.indexOf(t)>=0}));if(l.length===0){l=c}var h=l.reduce((function(r,e){r[e]=Tt(t,{placement:e,boundary:i,rootBoundary:a,padding:o})[H(e)];return r}),{});return Object.keys(h).sort((function(t,r){return h[t]-h[r]}))}function Ht(t){if(H(t)===p){return[]}var r=Mt(t);return[zt(t),r,zt(r)]}function _t(t){var r=t.state,e=t.options,n=t.name;if(r.modifiersData[n]._skip){return}var i=e.mainAxis,a=i===void 0?true:i,o=e.altAxis,s=o===void 0?true:o,u=e.fallbackPlacements,f=e.padding,v=e.boundary,m=e.rootBoundary,g=e.altBoundary,y=e.flipVariations,w=y===void 0?true:y,x=e.allowedAutoPlacements;var O=r.options.placement;var j=H(O);var k=j===O;var M=u||(k||!w?[Mt(O)]:Ht(O));var P=[O].concat(M).reduce((function(t,e){return t.concat(H(e)===p?Ft(r,{placement:e,boundary:v,rootBoundary:m,padding:f,flipVariations:w,allowedAutoPlacements:x}):e)}),[]);var z=r.rects.reference;var C=r.rects.popper;var S=new Map;var I=true;var A=P[0];for(var E=0;E<P.length;E++){var q=P[E];var R=H(q);var W=pt(q)===b;var $=[c,l].indexOf(R)>=0;var B=$?"width":"height";var D=Tt(r,{placement:q,boundary:v,rootBoundary:m,altBoundary:g,padding:f});var L=$?W?h:d:W?l:c;if(z[B]>C[B]){L=Mt(L)}var V=Mt(L);var T=[];if(a){T.push(D[R]<=0)}if(s){T.push(D[L]<=0,D[V]<=0)}if(T.every((function(t){return t}))){A=q;I=false;break}S.set(q,T)}if(I){var F=w?3:1;var _=function t(r){var e=P.find((function(t){var e=S.get(t);if(e){return e.slice(0,r).every((function(t){return t}))}}));if(e){A=e;return"break"}};for(var G=F;G>0;G--){var U=_(G);if(U==="break")break}}if(r.placement!==A){r.modifiersData[n]._skip=true;r.placement=A;r.reset=true}}const Gt={name:"flip",enabled:true,phase:"main",fn:_t,requiresIfExists:["offset"],data:{_skip:false}};function Ut(t,r,e){if(e===void 0){e={x:0,y:0}}return{top:t.top-r.height-e.y,right:t.right-r.width+e.x,bottom:t.bottom-r.height+e.y,left:t.left-r.width-e.x}}function Jt(t){return[c,h,l,d].some((function(r){return t[r]>=0}))}function Kt(t){var r=t.state,e=t.name;var n=r.rects.reference;var i=r.rects.popper;var a=r.modifiersData.preventOverflow;var o=Tt(r,{elementContext:"reference"});var s=Tt(r,{altBoundary:true});var u=Ut(o,n);var f=Ut(s,i,a);var v=Jt(u);var c=Jt(f);r.modifiersData[e]={referenceClippingOffsets:u,popperEscapeOffsets:f,isReferenceHidden:v,hasPopperEscaped:c};r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-reference-hidden":v,"data-popper-escaped":c})}const Nt={name:"hide",enabled:true,phase:"main",requiresIfExists:["preventOverflow"],fn:Kt};function Qt(t,r,e){var n=H(t);var i=[d,c].indexOf(n)>=0?-1:1;var a=typeof e==="function"?e(Object.assign({},r,{placement:t})):e,o=a[0],s=a[1];o=o||0;s=(s||0)*i;return[d,h].indexOf(n)>=0?{x:s,y:o}:{x:o,y:s}}function Xt(t){var r=t.state,e=t.options,n=t.name;var i=e.offset,a=i===void 0?[0,0]:i;var o=k.reduce((function(t,e){t[e]=Qt(e,r.rects,a);return t}),{});var s=o[r.placement],u=s.x,f=s.y;if(r.modifiersData.popperOffsets!=null){r.modifiersData.popperOffsets.x+=u;r.modifiersData.popperOffsets.y+=f}r.modifiersData[n]=o}const Yt={name:"offset",enabled:true,phase:"main",requires:["popperOffsets"],fn:Xt};function Zt(t){var r=t.state,e=t.name;r.modifiersData[e]=Vt({reference:r.rects.reference,element:r.rects.popper,strategy:"absolute",placement:r.placement})}const tr={name:"popperOffsets",enabled:true,phase:"read",fn:Zt,data:{}};function rr(t){return t==="x"?"y":"x"}function er(t){var r=t.state,e=t.options,n=t.name;var i=e.mainAxis,a=i===void 0?true:i,o=e.altAxis,s=o===void 0?false:o,u=e.boundary,f=e.rootBoundary,v=e.altBoundary,p=e.padding,m=e.tether,g=m===void 0?true:m,y=e.tetherOffset,w=y===void 0?0:y;var x=Tt(r,{boundary:u,rootBoundary:f,padding:p,altBoundary:v});var O=H(r.placement);var j=pt(r.placement);var k=!j;var M=at(O);var P=rr(M);var z=r.modifiersData.popperOffsets;var C=r.rects.reference;var S=r.rects.popper;var I=typeof w==="function"?w(Object.assign({},r.rects,{placement:r.placement})):w;var A=typeof I==="number"?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I);var E=r.modifiersData.offset?r.modifiersData.offset[r.placement]:null;var q={x:0,y:0};if(!z){return}if(a){var R;var W=M==="y"?c:d;var $=M==="y"?l:h;var B=M==="y"?"height":"width";var D=z[M];var L=D+x[W];var V=D-x[$];var T=g?-S[B]/2:0;var F=j===b?C[B]:S[B];var U=j===b?-S[B]:-C[B];var J=r.elements.arrow;var K=g&&J?Q(J):{width:0,height:0};var N=r.modifiersData["arrow#persistent"]?r.modifiersData["arrow#persistent"].padding:ut();var X=N[W];var Y=N[$];var Z=ot(0,C[B],K[B]);var tt=k?C[B]/2-T-Z-X-A.mainAxis:F-Z-X-A.mainAxis;var rt=k?-C[B]/2+T+Z+Y+A.mainAxis:U+Z+Y+A.mainAxis;var et=r.elements.arrow&&it(r.elements.arrow);var nt=et?M==="y"?et.clientTop||0:et.clientLeft||0:0;var ft=(R=E==null?void 0:E[M])!=null?R:0;var vt=D+tt-ft-nt;var ct=D+rt-ft;var lt=ot(g?G(L,vt):L,D,g?_(V,ct):V);z[M]=lt;q[M]=lt-D}if(s){var ht;var dt=M==="x"?c:d;var mt=M==="x"?l:h;var bt=z[P];var gt=P==="y"?"height":"width";var yt=bt+x[dt];var wt=bt-x[mt];var xt=[c,d].indexOf(O)!==-1;var Ot=(ht=E==null?void 0:E[P])!=null?ht:0;var jt=xt?yt:bt-C[gt]-S[gt]-Ot+A.altAxis;var kt=xt?bt+C[gt]+S[gt]-Ot-A.altAxis:wt;var Mt=g&&xt?st(jt,bt,kt):ot(g?jt:yt,bt,g?kt:wt);z[P]=Mt;q[P]=Mt-bt}r.modifiersData[n]=q}const nr={name:"preventOverflow",enabled:true,phase:"main",fn:er,requiresIfExists:["offset"]};function ir(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function ar(t){if(t===$(t)||!D(t)){return Ct(t)}else{return ir(t)}}function or(t){var r=t.getBoundingClientRect();var e=U(r.width)/t.offsetWidth||1;var n=U(r.height)/t.offsetHeight||1;return e!==1||n!==1}function sr(t,r,e){if(e===void 0){e=false}var n=D(r);var i=D(r)&&or(r);var a=tt(r);var o=N(t,i,e);var s={scrollLeft:0,scrollTop:0};var u={x:0,y:0};if(n||!n&&!e){if(W(r)!=="body"||Et(a)){s=ar(r)}if(D(r)){u=N(r,true);u.x+=r.clientLeft;u.y+=r.clientTop}else if(a){u.x=St(a)}}return{x:o.left+s.scrollLeft-u.x,y:o.top+s.scrollTop-u.y,width:o.width,height:o.height}}function ur(t){var r=new Map;var e=new Set;var n=[];t.forEach((function(t){r.set(t.name,t)}));function i(t){e.add(t.name);var a=[].concat(t.requires||[],t.requiresIfExists||[]);a.forEach((function(t){if(!e.has(t)){var n=r.get(t);if(n){i(n)}}}));n.push(t)}t.forEach((function(t){if(!e.has(t.name)){i(t)}}));return n}function fr(t){var r=ur(t);return R.reduce((function(t,e){return t.concat(r.filter((function(t){return t.phase===e})))}),[])}function vr(t){var r;return function(){if(!r){r=new Promise((function(e){Promise.resolve().then((function(){r=undefined;e(t())}))}))}return r}}function cr(t){var r=t.reduce((function(t,r){var e=t[r.name];t[r.name]=e?Object.assign({},e,r,{options:Object.assign({},e.options,r.options),data:Object.assign({},e.data,r.data)}):r;return t}),{});return Object.keys(r).map((function(t){return r[t]}))}var lr={placement:"bottom",modifiers:[],strategy:"absolute"};function hr(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++){r[e]=arguments[e]}return!r.some((function(t){return!(t&&typeof t.getBoundingClientRect==="function")}))}function dr(t){if(t===void 0){t={}}var r=t,e=r.defaultModifiers,n=e===void 0?[]:e,i=r.defaultOptions,a=i===void 0?lr:i;return function t(r,e,i){if(i===void 0){i=a}var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},lr,a),modifiersData:{},elements:{reference:r,popper:e},attributes:{},styles:{}};var s=[];var u=false;var f={state:o,setOptions:function t(i){var s=typeof i==="function"?i(o.options):i;c();o.options=Object.assign({},a,o.options,s);o.scrollParents={reference:B(r)?Rt(r):r.contextElement?Rt(r.contextElement):[],popper:Rt(e)};var u=fr(cr([].concat(n,o.options.modifiers)));o.orderedModifiers=u.filter((function(t){return t.enabled}));v();return f.update()},forceUpdate:function t(){if(u){return}var r=o.elements,e=r.reference,n=r.popper;if(!hr(e,n)){return}o.rects={reference:sr(e,it(n),o.options.strategy==="fixed"),popper:Q(n)};o.reset=false;o.placement=o.options.placement;o.orderedModifiers.forEach((function(t){return o.modifiersData[t.name]=Object.assign({},t.data)}));for(var i=0;i<o.orderedModifiers.length;i++){if(o.reset===true){o.reset=false;i=-1;continue}var a=o.orderedModifiers[i],s=a.fn,v=a.options,c=v===void 0?{}:v,l=a.name;if(typeof s==="function"){o=s({state:o,options:c,name:l,instance:f})||o}}},update:vr((function(){return new Promise((function(t){f.forceUpdate();t(o)}))})),destroy:function t(){c();u=true}};if(!hr(r,e)){return f}f.setOptions(i).then((function(t){if(!u&&i.onFirstUpdate){i.onFirstUpdate(t)}}));function v(){o.orderedModifiers.forEach((function(t){var r=t.name,e=t.options,n=e===void 0?{}:e,i=t.effect;if(typeof i==="function"){var a=i({state:o,name:r,instance:f,options:n});var u=function t(){};s.push(a||u)}}))}function c(){s.forEach((function(t){return t()}));s=[]}return f}}var pr=[jt,tr,wt,F,Yt,Gt,nr,dt,Nt];var mr=dr({defaultModifiers:pr});const br=":host(limel-portal){display:block;position:absolute;top:0;bottom:0;width:100%;pointer-events:none}:host([hidden]){display:none}";const gr=class{constructor(r){t(this,r);this.loaded=false;this.openDirection="bottom";this.position="absolute";this.containerId=undefined;this.containerStyle={};this.parent=document.body;this.inheritParentWidth=false;this.visible=false;this.anchor=null;this.parents=new WeakMap}disconnectedCallback(){this.removeContainer();this.destroyPopper();if(this.observer){this.observer.unobserve(this.container)}}connectedCallback(){if(!this.loaded){return}this.createContainer();this.hideContainer();this.attachContainer();this.styleContainer();if(this.visible){this.createPopper();this.showContainer()}if("ResizeObserver"in window){const t=new ResizeObserver((()=>{if(this.popperInstance){this.styleContainer();this.popperInstance.update()}}));t.observe(this.container)}}componentDidLoad(){this.loaded=true;this.connectedCallback()}render(){return r("slot",null)}onVisible(){if(!this.visible){this.hideContainer();this.styleContainer();this.destroyPopper();return}this.styleContainer();this.createPopper();requestAnimationFrame((()=>{this.showContainer()}))}createContainer(){const t=this.host.shadowRoot.querySelector("slot");const r=t.assignedElements&&t.assignedElements()||[];this.container=document.createElement("div");this.container.setAttribute("id",this.containerId);this.container.setAttribute("class","limel-portal--container");this.container.style.fontFamily="var(--limel-portal-font-family, inherit)";Object.assign(this.container,{portalSource:this.host});r.forEach((t=>{this.parents.set(t,t.parentElement);this.container.appendChild(t)}))}attachContainer(){this.parent.appendChild(this.container)}removeContainer(){if(!this.container){return}Array.from(this.container.children).forEach((t=>{const r=this.parents.get(t);if(!r){return}r.appendChild(t)}));this.hideContainer();this.container.parentElement.removeChild(this.container)}hideContainer(){this.container.style.opacity="0"}showContainer(){this.container.style.opacity="1"}styleContainer(){const t=this.host.getBoundingClientRect().width;if(this.visible){this.container.style.display="block"}else{this.container.style.display="none"}if(this.inheritParentWidth){const r=this.getContentWidth(this.container);let e=r;if(t>0){e=t}this.container.style.width=`${e}px`}this.ensureContainerFitsInViewPort();Object.keys(this.containerStyle).forEach((t=>{this.container.style[t]=this.containerStyle[t]}))}getContentWidth(t){if(!t){return null}const r=t.getBoundingClientRect().width;if(r!==0){return r}const e=t.querySelector("*");return this.getContentWidth(e)}createPopper(){const t=this.createPopperConfig();this.popperInstance=mr(this.anchor||this.host,this.container,t)}destroyPopper(){var t;(t=this.popperInstance)===null||t===void 0?void 0:t.destroy();this.popperInstance=null}createPopperConfig(){const t=this.getPlacement(this.openDirection);const r=this.getFlipPlacement(this.openDirection);return{strategy:this.position,placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:[r]}}]}}getPlacement(t){const r={"left-start":"left-start",left:"left","left-end":"left-end","right-start":"right-start",right:"right","right-end":"right-end","top-start":"top-start",top:"top","top-end":"top-end","bottom-start":"bottom-start",bottom:"bottom","bottom-end":"bottom-end"};return r[t]}getFlipPlacement(t){const r={"left-start":"right-start",left:"right","left-end":"right-end","right-start":"left-start",right:"left","right-end":"left-end","top-start":"bottom-start",top:"bottom","top-end":"bottom-end","bottom-start":"top-start",bottom:"top","bottom-end":"top-end"};return r[t]}ensureContainerFitsInViewPort(){const t=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);const{top:r,bottom:e}=this.host.getBoundingClientRect();const n=Math.max(r,0);const i=Math.max(t-e,0);const a=16;const o=Math.max(n,i)-a;this.container.style.maxHeight=`${o}px`}get host(){return e(this)}static get watchers(){return{visible:["onVisible"]}}};gr.style=br;export{v as limel_icon,gr as limel_portal};
//# sourceMappingURL=limel-icon_2.entry.js.map