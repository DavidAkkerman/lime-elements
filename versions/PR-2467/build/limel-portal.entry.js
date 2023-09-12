import{r as t,h as r,g as e}from"./index-f1b3d5fb.js";var n="top";var a="bottom";var i="right";var o="left";var f="auto";var u=[n,a,i,o];var v="start";var s="end";var c="clippingParents";var l="viewport";var d="popper";var h="reference";var p=u.reduce((function(t,r){return t.concat([r+"-"+v,r+"-"+s])}),[]);var b=[].concat(u,[f]).reduce((function(t,r){return t.concat([r,r+"-"+v,r+"-"+s])}),[]);var m="beforeRead";var y="read";var g="afterRead";var w="beforeMain";var x="main";var O="afterMain";var j="beforeWrite";var k="write";var M="afterWrite";var P=[m,y,g,w,x,O,j,k,M];function C(t){return t?(t.nodeName||"").toLowerCase():null}function A(t){if(t==null){return window}if(t.toString()!=="[object Window]"){var r=t.ownerDocument;return r?r.defaultView||window:window}return t}function q(t){var r=A(t).Element;return t instanceof r||t instanceof Element}function E(t){var r=A(t).HTMLElement;return t instanceof r||t instanceof HTMLElement}function R(t){if(typeof ShadowRoot==="undefined"){return false}var r=A(t).ShadowRoot;return t instanceof r||t instanceof ShadowRoot}function W(t){var r=t.state;Object.keys(r.elements).forEach((function(t){var e=r.styles[t]||{};var n=r.attributes[t]||{};var a=r.elements[t];if(!E(a)||!C(a)){return}Object.assign(a.style,e);Object.keys(n).forEach((function(t){var r=n[t];if(r===false){a.removeAttribute(t)}else{a.setAttribute(t,r===true?"":r)}}))}))}function B(t){var r=t.state;var e={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(r.elements.popper.style,e.popper);r.styles=e;if(r.elements.arrow){Object.assign(r.elements.arrow.style,e.arrow)}return function(){Object.keys(r.elements).forEach((function(t){var n=r.elements[t];var a=r.attributes[t]||{};var i=Object.keys(r.styles.hasOwnProperty(t)?r.styles[t]:e[t]);var o=i.reduce((function(t,r){t[r]="";return t}),{});if(!E(n)||!C(n)){return}Object.assign(n.style,o);Object.keys(a).forEach((function(t){n.removeAttribute(t)}))}))}}const S={name:"applyStyles",enabled:true,phase:"write",fn:W,effect:B,requires:["computeStyles"]};function L(t){return t.split("-")[0]}var I=Math.max;var T=Math.min;var z=Math.round;function F(){var t=navigator.userAgentData;if(t!=null&&t.brands&&Array.isArray(t.brands)){return t.brands.map((function(t){return t.brand+"/"+t.version})).join(" ")}return navigator.userAgent}function H(){return!/^((?!chrome|android).)*safari/i.test(F())}function V(t,r,e){if(r===void 0){r=false}if(e===void 0){e=false}var n=t.getBoundingClientRect();var a=1;var i=1;if(r&&E(t)){a=t.offsetWidth>0?z(n.width)/t.offsetWidth||1:1;i=t.offsetHeight>0?z(n.height)/t.offsetHeight||1:1}var o=q(t)?A(t):window,f=o.visualViewport;var u=!H()&&e;var v=(n.left+(u&&f?f.offsetLeft:0))/a;var s=(n.top+(u&&f?f.offsetTop:0))/i;var c=n.width/a;var l=n.height/i;return{width:c,height:l,top:s,right:v+c,bottom:s+l,left:v,x:v,y:s}}function D(t){var r=V(t);var e=t.offsetWidth;var n=t.offsetHeight;if(Math.abs(r.width-e)<=1){e=r.width}if(Math.abs(r.height-n)<=1){n=r.height}return{x:t.offsetLeft,y:t.offsetTop,width:e,height:n}}function $(t,r){var e=r.getRootNode&&r.getRootNode();if(t.contains(r)){return true}else if(e&&R(e)){var n=r;do{if(n&&t.isSameNode(n)){return true}n=n.parentNode||n.host}while(n)}return false}function _(t){return A(t).getComputedStyle(t)}function U(t){return["table","td","th"].indexOf(C(t))>=0}function G(t){return((q(t)?t.ownerDocument:t.document)||window.document).documentElement}function J(t){if(C(t)==="html"){return t}return t.assignedSlot||t.parentNode||(R(t)?t.host:null)||G(t)}function K(t){if(!E(t)||_(t).position==="fixed"){return null}return t.offsetParent}function N(t){var r=/firefox/i.test(F());var e=/Trident/i.test(F());if(e&&E(t)){var n=_(t);if(n.position==="fixed"){return null}}var a=J(t);if(R(a)){a=a.host}while(E(a)&&["html","body"].indexOf(C(a))<0){var i=_(a);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||r&&i.willChange==="filter"||r&&i.filter&&i.filter!=="none"){return a}else{a=a.parentNode}}return null}function Q(t){var r=A(t);var e=K(t);while(e&&U(e)&&_(e).position==="static"){e=K(e)}if(e&&(C(e)==="html"||C(e)==="body"&&_(e).position==="static")){return r}return e||N(t)||r}function X(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Y(t,r,e){return I(t,T(r,e))}function Z(t,r,e){var n=Y(t,r,e);return n>e?e:n}function tt(){return{top:0,right:0,bottom:0,left:0}}function rt(t){return Object.assign({},tt(),t)}function et(t,r){return r.reduce((function(r,e){r[e]=t;return r}),{})}var nt=function t(r,e){r=typeof r==="function"?r(Object.assign({},e.rects,{placement:e.placement})):r;return rt(typeof r!=="number"?r:et(r,u))};function at(t){var r;var e=t.state,f=t.name,u=t.options;var v=e.elements.arrow;var s=e.modifiersData.popperOffsets;var c=L(e.placement);var l=X(c);var d=[o,i].indexOf(c)>=0;var h=d?"height":"width";if(!v||!s){return}var p=nt(u.padding,e);var b=D(v);var m=l==="y"?n:o;var y=l==="y"?a:i;var g=e.rects.reference[h]+e.rects.reference[l]-s[l]-e.rects.popper[h];var w=s[l]-e.rects.reference[l];var x=Q(v);var O=x?l==="y"?x.clientHeight||0:x.clientWidth||0:0;var j=g/2-w/2;var k=p[m];var M=O-b[h]-p[y];var P=O/2-b[h]/2+j;var C=Y(k,P,M);var A=l;e.modifiersData[f]=(r={},r[A]=C,r.centerOffset=C-P,r)}function it(t){var r=t.state,e=t.options;var n=e.element,a=n===void 0?"[data-popper-arrow]":n;if(a==null){return}if(typeof a==="string"){a=r.elements.popper.querySelector(a);if(!a){return}}if(!$(r.elements.popper,a)){return}r.elements.arrow=a}const ot={name:"arrow",enabled:true,phase:"main",fn:at,effect:it,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ft(t){return t.split("-")[1]}var ut={top:"auto",right:"auto",bottom:"auto",left:"auto"};function vt(t,r){var e=t.x,n=t.y;var a=r.devicePixelRatio||1;return{x:z(e*a)/a||0,y:z(n*a)/a||0}}function st(t){var r;var e=t.popper,f=t.popperRect,u=t.placement,v=t.variation,c=t.offsets,l=t.position,d=t.gpuAcceleration,h=t.adaptive,p=t.roundOffsets,b=t.isFixed;var m=c.x,y=m===void 0?0:m,g=c.y,w=g===void 0?0:g;var x=typeof p==="function"?p({x:y,y:w}):{x:y,y:w};y=x.x;w=x.y;var O=c.hasOwnProperty("x");var j=c.hasOwnProperty("y");var k=o;var M=n;var P=window;if(h){var C=Q(e);var q="clientHeight";var E="clientWidth";if(C===A(e)){C=G(e);if(_(C).position!=="static"&&l==="absolute"){q="scrollHeight";E="scrollWidth"}}C=C;if(u===n||(u===o||u===i)&&v===s){M=a;var R=b&&C===P&&P.visualViewport?P.visualViewport.height:C[q];w-=R-f.height;w*=d?1:-1}if(u===o||(u===n||u===a)&&v===s){k=i;var W=b&&C===P&&P.visualViewport?P.visualViewport.width:C[E];y-=W-f.width;y*=d?1:-1}}var B=Object.assign({position:l},h&&ut);var S=p===true?vt({x:y,y:w},A(e)):{x:y,y:w};y=S.x;w=S.y;if(d){var L;return Object.assign({},B,(L={},L[M]=j?"0":"",L[k]=O?"0":"",L.transform=(P.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",L))}return Object.assign({},B,(r={},r[M]=j?w+"px":"",r[k]=O?y+"px":"",r.transform="",r))}function ct(t){var r=t.state,e=t.options;var n=e.gpuAcceleration,a=n===void 0?true:n,i=e.adaptive,o=i===void 0?true:i,f=e.roundOffsets,u=f===void 0?true:f;var v={placement:L(r.placement),variation:ft(r.placement),popper:r.elements.popper,popperRect:r.rects.popper,gpuAcceleration:a,isFixed:r.options.strategy==="fixed"};if(r.modifiersData.popperOffsets!=null){r.styles.popper=Object.assign({},r.styles.popper,st(Object.assign({},v,{offsets:r.modifiersData.popperOffsets,position:r.options.strategy,adaptive:o,roundOffsets:u})))}if(r.modifiersData.arrow!=null){r.styles.arrow=Object.assign({},r.styles.arrow,st(Object.assign({},v,{offsets:r.modifiersData.arrow,position:"absolute",adaptive:false,roundOffsets:u})))}r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-placement":r.placement})}const lt={name:"computeStyles",enabled:true,phase:"beforeWrite",fn:ct,data:{}};var dt={passive:true};function ht(t){var r=t.state,e=t.instance,n=t.options;var a=n.scroll,i=a===void 0?true:a,o=n.resize,f=o===void 0?true:o;var u=A(r.elements.popper);var v=[].concat(r.scrollParents.reference,r.scrollParents.popper);if(i){v.forEach((function(t){t.addEventListener("scroll",e.update,dt)}))}if(f){u.addEventListener("resize",e.update,dt)}return function(){if(i){v.forEach((function(t){t.removeEventListener("scroll",e.update,dt)}))}if(f){u.removeEventListener("resize",e.update,dt)}}}const pt={name:"eventListeners",enabled:true,phase:"write",fn:function t(){},effect:ht,data:{}};var bt={left:"right",right:"left",bottom:"top",top:"bottom"};function mt(t){return t.replace(/left|right|bottom|top/g,(function(t){return bt[t]}))}var yt={start:"end",end:"start"};function gt(t){return t.replace(/start|end/g,(function(t){return yt[t]}))}function wt(t){var r=A(t);var e=r.pageXOffset;var n=r.pageYOffset;return{scrollLeft:e,scrollTop:n}}function xt(t){return V(G(t)).left+wt(t).scrollLeft}function Ot(t,r){var e=A(t);var n=G(t);var a=e.visualViewport;var i=n.clientWidth;var o=n.clientHeight;var f=0;var u=0;if(a){i=a.width;o=a.height;var v=H();if(v||!v&&r==="fixed"){f=a.offsetLeft;u=a.offsetTop}}return{width:i,height:o,x:f+xt(t),y:u}}function jt(t){var r;var e=G(t);var n=wt(t);var a=(r=t.ownerDocument)==null?void 0:r.body;var i=I(e.scrollWidth,e.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0);var o=I(e.scrollHeight,e.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0);var f=-n.scrollLeft+xt(t);var u=-n.scrollTop;if(_(a||e).direction==="rtl"){f+=I(e.clientWidth,a?a.clientWidth:0)-i}return{width:i,height:o,x:f,y:u}}function kt(t){var r=_(t),e=r.overflow,n=r.overflowX,a=r.overflowY;return/auto|scroll|overlay|hidden/.test(e+a+n)}function Mt(t){if(["html","body","#document"].indexOf(C(t))>=0){return t.ownerDocument.body}if(E(t)&&kt(t)){return t}return Mt(J(t))}function Pt(t,r){var e;if(r===void 0){r=[]}var n=Mt(t);var a=n===((e=t.ownerDocument)==null?void 0:e.body);var i=A(n);var o=a?[i].concat(i.visualViewport||[],kt(n)?n:[]):n;var f=r.concat(o);return a?f:f.concat(Pt(J(o)))}function Ct(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function At(t,r){var e=V(t,false,r==="fixed");e.top=e.top+t.clientTop;e.left=e.left+t.clientLeft;e.bottom=e.top+t.clientHeight;e.right=e.left+t.clientWidth;e.width=t.clientWidth;e.height=t.clientHeight;e.x=e.left;e.y=e.top;return e}function qt(t,r,e){return r===l?Ct(Ot(t,e)):q(r)?At(r,e):Ct(jt(G(t)))}function Et(t){var r=Pt(J(t));var e=["absolute","fixed"].indexOf(_(t).position)>=0;var n=e&&E(t)?Q(t):t;if(!q(n)){return[]}return r.filter((function(t){return q(t)&&$(t,n)&&C(t)!=="body"}))}function Rt(t,r,e,n){var a=r==="clippingParents"?Et(t):[].concat(r);var i=[].concat(a,[e]);var o=i[0];var f=i.reduce((function(r,e){var a=qt(t,e,n);r.top=I(a.top,r.top);r.right=T(a.right,r.right);r.bottom=T(a.bottom,r.bottom);r.left=I(a.left,r.left);return r}),qt(t,o,n));f.width=f.right-f.left;f.height=f.bottom-f.top;f.x=f.left;f.y=f.top;return f}function Wt(t){var r=t.reference,e=t.element,f=t.placement;var u=f?L(f):null;var c=f?ft(f):null;var l=r.x+r.width/2-e.width/2;var d=r.y+r.height/2-e.height/2;var h;switch(u){case n:h={x:l,y:r.y-e.height};break;case a:h={x:l,y:r.y+r.height};break;case i:h={x:r.x+r.width,y:d};break;case o:h={x:r.x-e.width,y:d};break;default:h={x:r.x,y:r.y}}var p=u?X(u):null;if(p!=null){var b=p==="y"?"height":"width";switch(c){case v:h[p]=h[p]-(r[b]/2-e[b]/2);break;case s:h[p]=h[p]+(r[b]/2-e[b]/2);break}}return h}function Bt(t,r){if(r===void 0){r={}}var e=r,o=e.placement,f=o===void 0?t.placement:o,v=e.strategy,s=v===void 0?t.strategy:v,p=e.boundary,b=p===void 0?c:p,m=e.rootBoundary,y=m===void 0?l:m,g=e.elementContext,w=g===void 0?d:g,x=e.altBoundary,O=x===void 0?false:x,j=e.padding,k=j===void 0?0:j;var M=rt(typeof k!=="number"?k:et(k,u));var P=w===d?h:d;var C=t.rects.popper;var A=t.elements[O?P:w];var E=Rt(q(A)?A:A.contextElement||G(t.elements.popper),b,y,s);var R=V(t.elements.reference);var W=Wt({reference:R,element:C,strategy:"absolute",placement:f});var B=Ct(Object.assign({},C,W));var S=w===d?B:R;var L={top:E.top-S.top+M.top,bottom:S.bottom-E.bottom+M.bottom,left:E.left-S.left+M.left,right:S.right-E.right+M.right};var I=t.modifiersData.offset;if(w===d&&I){var T=I[f];Object.keys(L).forEach((function(t){var r=[i,a].indexOf(t)>=0?1:-1;var e=[n,a].indexOf(t)>=0?"y":"x";L[t]+=T[e]*r}))}return L}function St(t,r){if(r===void 0){r={}}var e=r,n=e.placement,a=e.boundary,i=e.rootBoundary,o=e.padding,f=e.flipVariations,v=e.allowedAutoPlacements,s=v===void 0?b:v;var c=ft(n);var l=c?f?p:p.filter((function(t){return ft(t)===c})):u;var d=l.filter((function(t){return s.indexOf(t)>=0}));if(d.length===0){d=l}var h=d.reduce((function(r,e){r[e]=Bt(t,{placement:e,boundary:a,rootBoundary:i,padding:o})[L(e)];return r}),{});return Object.keys(h).sort((function(t,r){return h[t]-h[r]}))}function Lt(t){if(L(t)===f){return[]}var r=mt(t);return[gt(t),r,gt(r)]}function It(t){var r=t.state,e=t.options,u=t.name;if(r.modifiersData[u]._skip){return}var s=e.mainAxis,c=s===void 0?true:s,l=e.altAxis,d=l===void 0?true:l,h=e.fallbackPlacements,p=e.padding,b=e.boundary,m=e.rootBoundary,y=e.altBoundary,g=e.flipVariations,w=g===void 0?true:g,x=e.allowedAutoPlacements;var O=r.options.placement;var j=L(O);var k=j===O;var M=h||(k||!w?[mt(O)]:Lt(O));var P=[O].concat(M).reduce((function(t,e){return t.concat(L(e)===f?St(r,{placement:e,boundary:b,rootBoundary:m,padding:p,flipVariations:w,allowedAutoPlacements:x}):e)}),[]);var C=r.rects.reference;var A=r.rects.popper;var q=new Map;var E=true;var R=P[0];for(var W=0;W<P.length;W++){var B=P[W];var S=L(B);var I=ft(B)===v;var T=[n,a].indexOf(S)>=0;var z=T?"width":"height";var F=Bt(r,{placement:B,boundary:b,rootBoundary:m,altBoundary:y,padding:p});var H=T?I?i:o:I?a:n;if(C[z]>A[z]){H=mt(H)}var V=mt(H);var D=[];if(c){D.push(F[S]<=0)}if(d){D.push(F[H]<=0,F[V]<=0)}if(D.every((function(t){return t}))){R=B;E=false;break}q.set(B,D)}if(E){var $=w?3:1;var _=function t(r){var e=P.find((function(t){var e=q.get(t);if(e){return e.slice(0,r).every((function(t){return t}))}}));if(e){R=e;return"break"}};for(var U=$;U>0;U--){var G=_(U);if(G==="break")break}}if(r.placement!==R){r.modifiersData[u]._skip=true;r.placement=R;r.reset=true}}const Tt={name:"flip",enabled:true,phase:"main",fn:It,requiresIfExists:["offset"],data:{_skip:false}};function zt(t,r,e){if(e===void 0){e={x:0,y:0}}return{top:t.top-r.height-e.y,right:t.right-r.width+e.x,bottom:t.bottom-r.height+e.y,left:t.left-r.width-e.x}}function Ft(t){return[n,i,a,o].some((function(r){return t[r]>=0}))}function Ht(t){var r=t.state,e=t.name;var n=r.rects.reference;var a=r.rects.popper;var i=r.modifiersData.preventOverflow;var o=Bt(r,{elementContext:"reference"});var f=Bt(r,{altBoundary:true});var u=zt(o,n);var v=zt(f,a,i);var s=Ft(u);var c=Ft(v);r.modifiersData[e]={referenceClippingOffsets:u,popperEscapeOffsets:v,isReferenceHidden:s,hasPopperEscaped:c};r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-reference-hidden":s,"data-popper-escaped":c})}const Vt={name:"hide",enabled:true,phase:"main",requiresIfExists:["preventOverflow"],fn:Ht};function Dt(t,r,e){var a=L(t);var f=[o,n].indexOf(a)>=0?-1:1;var u=typeof e==="function"?e(Object.assign({},r,{placement:t})):e,v=u[0],s=u[1];v=v||0;s=(s||0)*f;return[o,i].indexOf(a)>=0?{x:s,y:v}:{x:v,y:s}}function $t(t){var r=t.state,e=t.options,n=t.name;var a=e.offset,i=a===void 0?[0,0]:a;var o=b.reduce((function(t,e){t[e]=Dt(e,r.rects,i);return t}),{});var f=o[r.placement],u=f.x,v=f.y;if(r.modifiersData.popperOffsets!=null){r.modifiersData.popperOffsets.x+=u;r.modifiersData.popperOffsets.y+=v}r.modifiersData[n]=o}const _t={name:"offset",enabled:true,phase:"main",requires:["popperOffsets"],fn:$t};function Ut(t){var r=t.state,e=t.name;r.modifiersData[e]=Wt({reference:r.rects.reference,element:r.rects.popper,strategy:"absolute",placement:r.placement})}const Gt={name:"popperOffsets",enabled:true,phase:"read",fn:Ut,data:{}};function Jt(t){return t==="x"?"y":"x"}function Kt(t){var r=t.state,e=t.options,f=t.name;var u=e.mainAxis,s=u===void 0?true:u,c=e.altAxis,l=c===void 0?false:c,d=e.boundary,h=e.rootBoundary,p=e.altBoundary,b=e.padding,m=e.tether,y=m===void 0?true:m,g=e.tetherOffset,w=g===void 0?0:g;var x=Bt(r,{boundary:d,rootBoundary:h,padding:b,altBoundary:p});var O=L(r.placement);var j=ft(r.placement);var k=!j;var M=X(O);var P=Jt(M);var C=r.modifiersData.popperOffsets;var A=r.rects.reference;var q=r.rects.popper;var E=typeof w==="function"?w(Object.assign({},r.rects,{placement:r.placement})):w;var R=typeof E==="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E);var W=r.modifiersData.offset?r.modifiersData.offset[r.placement]:null;var B={x:0,y:0};if(!C){return}if(s){var S;var z=M==="y"?n:o;var F=M==="y"?a:i;var H=M==="y"?"height":"width";var V=C[M];var $=V+x[z];var _=V-x[F];var U=y?-q[H]/2:0;var G=j===v?A[H]:q[H];var J=j===v?-q[H]:-A[H];var K=r.elements.arrow;var N=y&&K?D(K):{width:0,height:0};var rt=r.modifiersData["arrow#persistent"]?r.modifiersData["arrow#persistent"].padding:tt();var et=rt[z];var nt=rt[F];var at=Y(0,A[H],N[H]);var it=k?A[H]/2-U-at-et-R.mainAxis:G-at-et-R.mainAxis;var ot=k?-A[H]/2+U+at+nt+R.mainAxis:J+at+nt+R.mainAxis;var ut=r.elements.arrow&&Q(r.elements.arrow);var vt=ut?M==="y"?ut.clientTop||0:ut.clientLeft||0:0;var st=(S=W==null?void 0:W[M])!=null?S:0;var ct=V+it-st-vt;var lt=V+ot-st;var dt=Y(y?T($,ct):$,V,y?I(_,lt):_);C[M]=dt;B[M]=dt-V}if(l){var ht;var pt=M==="x"?n:o;var bt=M==="x"?a:i;var mt=C[P];var yt=P==="y"?"height":"width";var gt=mt+x[pt];var wt=mt-x[bt];var xt=[n,o].indexOf(O)!==-1;var Ot=(ht=W==null?void 0:W[P])!=null?ht:0;var jt=xt?gt:mt-A[yt]-q[yt]-Ot+R.altAxis;var kt=xt?mt+A[yt]+q[yt]-Ot-R.altAxis:wt;var Mt=y&&xt?Z(jt,mt,kt):Y(y?jt:gt,mt,y?kt:wt);C[P]=Mt;B[P]=Mt-mt}r.modifiersData[f]=B}const Nt={name:"preventOverflow",enabled:true,phase:"main",fn:Kt,requiresIfExists:["offset"]};function Qt(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Xt(t){if(t===A(t)||!E(t)){return wt(t)}else{return Qt(t)}}function Yt(t){var r=t.getBoundingClientRect();var e=z(r.width)/t.offsetWidth||1;var n=z(r.height)/t.offsetHeight||1;return e!==1||n!==1}function Zt(t,r,e){if(e===void 0){e=false}var n=E(r);var a=E(r)&&Yt(r);var i=G(r);var o=V(t,a,e);var f={scrollLeft:0,scrollTop:0};var u={x:0,y:0};if(n||!n&&!e){if(C(r)!=="body"||kt(i)){f=Xt(r)}if(E(r)){u=V(r,true);u.x+=r.clientLeft;u.y+=r.clientTop}else if(i){u.x=xt(i)}}return{x:o.left+f.scrollLeft-u.x,y:o.top+f.scrollTop-u.y,width:o.width,height:o.height}}function tr(t){var r=new Map;var e=new Set;var n=[];t.forEach((function(t){r.set(t.name,t)}));function a(t){e.add(t.name);var i=[].concat(t.requires||[],t.requiresIfExists||[]);i.forEach((function(t){if(!e.has(t)){var n=r.get(t);if(n){a(n)}}}));n.push(t)}t.forEach((function(t){if(!e.has(t.name)){a(t)}}));return n}function rr(t){var r=tr(t);return P.reduce((function(t,e){return t.concat(r.filter((function(t){return t.phase===e})))}),[])}function er(t){var r;return function(){if(!r){r=new Promise((function(e){Promise.resolve().then((function(){r=undefined;e(t())}))}))}return r}}function nr(t){var r=t.reduce((function(t,r){var e=t[r.name];t[r.name]=e?Object.assign({},e,r,{options:Object.assign({},e.options,r.options),data:Object.assign({},e.data,r.data)}):r;return t}),{});return Object.keys(r).map((function(t){return r[t]}))}var ar={placement:"bottom",modifiers:[],strategy:"absolute"};function ir(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++){r[e]=arguments[e]}return!r.some((function(t){return!(t&&typeof t.getBoundingClientRect==="function")}))}function or(t){if(t===void 0){t={}}var r=t,e=r.defaultModifiers,n=e===void 0?[]:e,a=r.defaultOptions,i=a===void 0?ar:a;return function t(r,e,a){if(a===void 0){a=i}var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},ar,i),modifiersData:{},elements:{reference:r,popper:e},attributes:{},styles:{}};var f=[];var u=false;var v={state:o,setOptions:function t(a){var f=typeof a==="function"?a(o.options):a;c();o.options=Object.assign({},i,o.options,f);o.scrollParents={reference:q(r)?Pt(r):r.contextElement?Pt(r.contextElement):[],popper:Pt(e)};var u=rr(nr([].concat(n,o.options.modifiers)));o.orderedModifiers=u.filter((function(t){return t.enabled}));s();return v.update()},forceUpdate:function t(){if(u){return}var r=o.elements,e=r.reference,n=r.popper;if(!ir(e,n)){return}o.rects={reference:Zt(e,Q(n),o.options.strategy==="fixed"),popper:D(n)};o.reset=false;o.placement=o.options.placement;o.orderedModifiers.forEach((function(t){return o.modifiersData[t.name]=Object.assign({},t.data)}));for(var a=0;a<o.orderedModifiers.length;a++){if(o.reset===true){o.reset=false;a=-1;continue}var i=o.orderedModifiers[a],f=i.fn,s=i.options,c=s===void 0?{}:s,l=i.name;if(typeof f==="function"){o=f({state:o,options:c,name:l,instance:v})||o}}},update:er((function(){return new Promise((function(t){v.forceUpdate();t(o)}))})),destroy:function t(){c();u=true}};if(!ir(r,e)){return v}v.setOptions(a).then((function(t){if(!u&&a.onFirstUpdate){a.onFirstUpdate(t)}}));function s(){o.orderedModifiers.forEach((function(t){var r=t.name,e=t.options,n=e===void 0?{}:e,a=t.effect;if(typeof a==="function"){var i=a({state:o,name:r,instance:v,options:n});var u=function t(){};f.push(i||u)}}))}function c(){f.forEach((function(t){return t()}));f=[]}return v}}var fr=[pt,Gt,lt,S,_t,Tt,Nt,ot,Vt];var ur=or({defaultModifiers:fr});const vr=":host(limel-portal){display:block;position:absolute;top:0;bottom:0;width:100%;pointer-events:none}:host([hidden]){display:none}";const sr=class{constructor(r){t(this,r);this.loaded=false;this.openDirection="bottom";this.position="absolute";this.containerId=undefined;this.containerStyle={};this.parent=document.body;this.inheritParentWidth=false;this.visible=false;this.anchor=null;this.parents=new WeakMap}disconnectedCallback(){this.removeContainer();this.destroyPopper();if(this.observer){this.observer.unobserve(this.container)}}connectedCallback(){if(!this.loaded){return}this.createContainer();this.hideContainer();this.attachContainer();this.styleContainer();if(this.visible){this.createPopper();this.showContainer()}if("ResizeObserver"in window){const t=new ResizeObserver((()=>{if(this.popperInstance){this.styleContainer();this.popperInstance.update()}}));t.observe(this.container)}}componentDidLoad(){this.loaded=true;this.connectedCallback()}render(){return r("slot",null)}onVisible(){if(!this.visible){this.hideContainer();this.styleContainer();this.destroyPopper();return}this.styleContainer();this.createPopper();requestAnimationFrame((()=>{this.showContainer()}))}createContainer(){const t=this.host.shadowRoot.querySelector("slot");const r=t.assignedElements&&t.assignedElements()||[];this.container=document.createElement("div");this.container.setAttribute("id",this.containerId);this.container.setAttribute("class","limel-portal--container");Object.assign(this.container,{portalSource:this.host});r.forEach((t=>{this.parents.set(t,t.parentElement);this.container.appendChild(t)}))}attachContainer(){this.parent.appendChild(this.container)}removeContainer(){if(!this.container){return}Array.from(this.container.children).forEach((t=>{const r=this.parents.get(t);if(!r){return}r.appendChild(t)}));this.hideContainer();this.container.parentElement.removeChild(this.container)}hideContainer(){this.container.style.opacity="0"}showContainer(){this.container.style.opacity="1"}styleContainer(){const t=this.host.getBoundingClientRect().width;if(this.visible){this.container.style.display="block"}else{this.container.style.display="none"}if(this.inheritParentWidth){const r=this.getContentWidth(this.container);let e=r;if(t>0){e=t}this.container.style.width=`${e}px`}this.ensureContainerFitsInViewPort();Object.keys(this.containerStyle).forEach((t=>{this.container.style[t]=this.containerStyle[t]}))}getContentWidth(t){if(!t){return null}const r=t.getBoundingClientRect().width;if(r!==0){return r}const e=t.querySelector("*");return this.getContentWidth(e)}createPopper(){const t=this.createPopperConfig();this.popperInstance=ur(this.anchor||this.host,this.container,t)}destroyPopper(){var t;(t=this.popperInstance)===null||t===void 0?void 0:t.destroy();this.popperInstance=null}createPopperConfig(){const t=this.getPlacement(this.openDirection);const r=this.getFlipPlacement(this.openDirection);return{strategy:this.position,placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:[r]}}]}}getPlacement(t){const r={"left-start":"left-start",left:"left","left-end":"left-end","right-start":"right-start",right:"right","right-end":"right-end","top-start":"top-start",top:"top","top-end":"top-end","bottom-start":"bottom-start",bottom:"bottom","bottom-end":"bottom-end"};return r[t]}getFlipPlacement(t){const r={"left-start":"right-start",left:"right","left-end":"right-end","right-start":"left-start",right:"left","right-end":"left-end","top-start":"bottom-start",top:"bottom","top-end":"bottom-end","bottom-start":"top-start",bottom:"top","bottom-end":"top-end"};return r[t]}ensureContainerFitsInViewPort(){const t=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);const{top:r,bottom:e}=this.host.getBoundingClientRect();const n=Math.max(r,0);const a=Math.max(t-e,0);const i=16;const o=Math.max(n,a)-i;this.container.style.maxHeight=`${o}px`}get host(){return e(this)}static get watchers(){return{visible:["onVisible"]}}};sr.style=vr;export{sr as limel_portal};
//# sourceMappingURL=limel-portal.entry.js.map