import{M as n,S as r,b as t,k as e,i as u}from"./_baseIsEqual-d63fef1e.js";import{i}from"./isObject-7039fcda.js";import{i as f}from"./isArray-80298bc7.js";import{i as a}from"./isSymbol-f24bedd7.js";import{t as o}from"./toString-0a9c1851.js";import{a as c,b as l}from"./isArrayLike-84e8e25f.js";import{i as s}from"./identity-5b806255.js";var v=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,d=/^\w*$/;function b(n,r){if(f(n)){return false}var t=typeof n;if(t=="number"||t=="symbol"||t=="boolean"||n==null||a(n)){return true}return d.test(n)||!v.test(n)||r!=null&&n in Object(r)}var m="Expected a function";function p(r,t){if(typeof r!="function"||t!=null&&typeof t!="function"){throw new TypeError(m)}var e=function(){var n=arguments,u=t?t.apply(this,n):n[0],i=e.cache;if(i.has(u)){return i.get(u)}var f=r.apply(this,n);e.cache=i.set(u,f)||i;return f};e.cache=new(p.Cache||n);return e}p.Cache=n;var j=500;function y(n){var r=p(n,(function(n){if(t.size===j){t.clear()}return n}));var t=r.cache;return r}var w=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;var h=/\\(\\)?/g;var g=y((function(n){var r=[];if(n.charCodeAt(0)===46){r.push("")}n.replace(w,(function(n,t,e,u){r.push(e?u.replace(h,"$1"):t||n)}));return r}));function O(n,r){if(f(n)){return n}return b(n,r)?[n]:g(o(n))}var k=1/0;function E(n){if(typeof n=="string"||a(n)){return n}var r=n+"";return r=="0"&&1/n==-k?"-0":r}function S(n,r){r=O(r,n);var t=0,e=r.length;while(n!=null&&t<e){n=n[E(r[t++])]}return t&&t==e?n:undefined}function $(n,r,t){var e=n==null?undefined:S(n,r);return e===undefined?t:e}var x=1,A=2;function q(n,e,u,i){var f=u.length,a=f,o=!i;if(n==null){return!a}n=Object(n);while(f--){var c=u[f];if(o&&c[2]?c[1]!==n[c[0]]:!(c[0]in n)){return false}}while(++f<a){c=u[f];var l=c[0],s=n[l],v=c[1];if(o&&c[2]){if(s===undefined&&!(l in n)){return false}}else{var d=new r;if(i){var b=i(s,v,l,n,e,d)}if(!(b===undefined?t(v,s,x|A,i,d):b)){return false}}}return true}function I(n){return n===n&&!i(n)}function L(n){var r=e(n),t=r.length;while(t--){var u=r[t],i=n[u];r[t]=[u,i,I(i)]}return r}function M(n,r){return function(t){if(t==null){return false}return t[n]===r&&(r!==undefined||n in Object(t))}}function T(n){var r=L(n);if(r.length==1&&r[0][2]){return M(r[0][0],r[0][1])}return function(t){return t===n||q(t,n,r)}}function _(n,r){return n!=null&&r in Object(n)}function z(n,r,t){r=O(r,n);var e=-1,i=r.length,a=false;while(++e<i){var o=E(r[e]);if(!(a=n!=null&&t(n,o))){break}n=n[o]}if(a||++e!=i){return a}i=n==null?0:n.length;return!!i&&c(i)&&l(o,i)&&(f(n)||u(n))}function B(n,r){return n!=null&&z(n,r,_)}var C=1,D=2;function F(n,r){if(b(n)&&I(r)){return M(E(n),r)}return function(e){var u=$(e,n);return u===undefined&&u===r?B(e,n):t(r,u,C|D)}}function G(n){return function(r){return r==null?undefined:r[n]}}function H(n){return function(r){return S(r,n)}}function J(n){return b(n)?G(E(n)):H(n)}function K(n){if(typeof n=="function"){return n}if(n==null){return s}if(typeof n=="object"){return f(n)?F(n[0],n[1]):T(n)}return J(n)}export{S as a,K as b,O as c,$ as g,z as h,E as t};
//# sourceMappingURL=_baseIteratee-788b6307.js.map