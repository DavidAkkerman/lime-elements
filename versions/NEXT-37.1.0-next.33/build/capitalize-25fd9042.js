import{t as u}from"./toString-8e74de73.js";function f(u,f,r){var e=-1,n=u.length;if(f<0){f=-f>n?0:n+f}r=r>n?n:r;if(r<0){r+=n}n=f>r?0:r-f>>>0;f>>>=0;var d=Array(n);while(++e<n){d[e]=u[e+f]}return d}function r(u,r,e){var n=u.length;e=e===undefined?n:e;return!r&&e>=n?u:f(u,r,e)}var e="\\ud800-\\udfff",n="\\u0300-\\u036f",d="\\ufe20-\\ufe2f",t="\\u20d0-\\u20ff",a=n+d+t,i="\\ufe0e\\ufe0f";var o="\\u200d";var v=RegExp("["+o+e+a+i+"]");function c(u){return v.test(u)}function p(u){return u.split("")}var g="\\ud800-\\udfff",s="\\u0300-\\u036f",x="\\ufe20-\\ufe2f",b="\\u20d0-\\u20ff",m=s+x+b,E="\\ufe0e\\ufe0f";var R="["+g+"]",h="["+m+"]",j="\\ud83c[\\udffb-\\udfff]",l="(?:"+h+"|"+j+")",w="[^"+g+"]",y="(?:\\ud83c[\\udde6-\\uddff]){2}",A="[\\ud800-\\udbff][\\udc00-\\udfff]",C="\\u200d";var S=l+"?",U="["+E+"]?",k="(?:"+C+"(?:"+[w,y,A].join("|")+")"+U+S+")*",q=U+S+k,z="(?:"+[w+h+"?",h,y,A,R].join("|")+")";var B=RegExp(j+"(?="+j+")|"+z+q,"g");function D(u){return u.match(B)||[]}function F(u){return c(u)?D(u):p(u)}function G(f){return function(e){e=u(e);var n=c(e)?F(e):undefined;var d=n?n[0]:e.charAt(0);var t=n?r(n,1).join(""):e.slice(1);return d[f]()+t}}var H=G("toUpperCase");function I(f){return H(u(f).toLowerCase())}export{I as c};
//# sourceMappingURL=capitalize-25fd9042.js.map