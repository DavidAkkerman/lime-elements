const t="lime-elements";let e;let n;let s=false;let o=false;const l=(t,e="")=>{{return()=>{}}};const c=(t,e)=>{{return()=>{}}};const i="{visibility:hidden}.hydrated{visibility:inherit}";const f="http://www.w3.org/1999/xlink";const r={};const u="http://www.w3.org/2000/svg";const a="http://www.w3.org/1999/xhtml";const d=t=>t!=null;const p=t=>{t=typeof t;return t==="object"||t==="function"};function h(t){var e,n,s;return(s=(n=(e=t.head)===null||e===void 0?void 0:e.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&s!==void 0?s:undefined}const m=(t,e,...n)=>{let s=null;let o=null;let l=false;let c=false;const i=[];const f=e=>{for(let n=0;n<e.length;n++){s=e[n];if(Array.isArray(s)){f(s)}else if(s!=null&&typeof s!=="boolean"){if(l=typeof t!=="function"&&!p(s)){s=String(s)}if(l&&c){i[i.length-1].t+=s}else{i.push(l?y(null,s):s)}c=l}}};f(n);if(e){if(e.key){o=e.key}{const t=e.className||e.class;if(t){e.class=typeof t!=="object"?t:Object.keys(t).filter((e=>t[e])).join(" ")}}}if(typeof t==="function"){return t(e===null?{}:e,i,$)}const r=y(t,null);r.o=e;if(i.length>0){r.l=i}{r.i=o}return r};const y=(t,e)=>{const n={u:0,p:t,t:e,h:null,l:null};{n.o=null}{n.i=null}return n};const w={};const b=t=>t&&t.p===w;const $={forEach:(t,e)=>t.map(g).forEach(e),map:(t,e)=>t.map(g).map(e).map(v)};const g=t=>({vattrs:t.o,vchildren:t.l,vkey:t.i,vname:t.m,vtag:t.p,vtext:t.t});const v=t=>{if(typeof t.vtag==="function"){const e=Object.assign({},t.vattrs);if(t.vkey){e.key=t.vkey}if(t.vname){e.name=t.vname}return m(t.vtag,e,...t.vchildren||[])}const e=y(t.vtag,t.vtext);e.o=t.vattrs;e.l=t.vchildren;e.i=t.vkey;e.m=t.vname;return e};const S=(t,e)=>{if(t!=null&&!p(t)){if(e&4){return t==="false"?false:t===""||!!t}if(e&2){return parseFloat(t)}if(e&1){return String(t)}return t}return t};const j=t=>mt(t).$;const k=(t,e,n)=>{const s=j(t);return{emit:t=>O(s,e,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:t})}};const O=(t,e,n)=>{const s=Ot.ce(e,n);t.dispatchEvent(s);return s};const C=new WeakMap;const M=(t,e,n)=>{let s=St.get(t);if(Mt&&n){s=s||new CSSStyleSheet;if(typeof s==="string"){s=e}else{s.replaceSync(e)}}else{s=e}St.set(t,s)};const x=(t,e,n,s)=>{var o;let l=U(e);const c=St.get(l);t=t.nodeType===11?t:kt;if(c){if(typeof c==="string"){t=t.head||t;let e=C.get(t);let n;if(!e){C.set(t,e=new Set)}if(!e.has(l)){{{n=kt.createElement("style");n.innerHTML=c}const e=(o=Ot.g)!==null&&o!==void 0?o:h(kt);if(e!=null){n.setAttribute("nonce",e)}t.insertBefore(n,t.querySelector("link"))}if(e){e.add(l)}}}else if(!t.adoptedStyleSheets.includes(c)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,c]}}return l};const P=t=>{const e=t.v;const n=t.$;const s=e.u;const o=l("attachStyles",e.S);const c=x(n.shadowRoot?n.shadowRoot:n.getRootNode(),e);if(s&10){n["s-sc"]=c;n.classList.add(c+"-h")}o()};const U=(t,e)=>"sc-"+t.S;const E=(t,e,n,s,o,l)=>{if(n!==s){let c=bt(t,e);let i=e.toLowerCase();if(e==="class"){const e=t.classList;const o=W(n);const l=W(s);e.remove(...o.filter((t=>t&&!l.includes(t))));e.add(...l.filter((t=>t&&!o.includes(t))))}else if(e==="style"){{for(const e in n){if(!s||s[e]==null){if(e.includes("-")){t.style.removeProperty(e)}else{t.style[e]=""}}}}for(const e in s){if(!n||s[e]!==n[e]){if(e.includes("-")){t.style.setProperty(e,s[e])}else{t.style[e]=s[e]}}}}else if(e==="key");else if(e==="ref"){if(s){s(t)}}else if(!c&&e[0]==="o"&&e[1]==="n"){if(e[2]==="-"){e=e.slice(3)}else if(bt(jt,i)){e=i.slice(2)}else{e=i[2]+e.slice(3)}if(n){Ot.rel(t,e,n,false)}if(s){Ot.ael(t,e,s,false)}}else{const r=p(s);if((c||r&&s!==null)&&!o){try{if(!t.tagName.includes("-")){const o=s==null?"":s;if(e==="list"){c=false}else if(n==null||t[e]!=o){t[e]=o}}else{t[e]=s}}catch(t){}}let u=false;{if(i!==(i=i.replace(/^xlink\:?/,""))){e=i;u=true}}if(s==null||s===false){if(s!==false||t.getAttribute(e)===""){if(u){t.removeAttributeNS(f,e)}else{t.removeAttribute(e)}}}else if((!c||l&4||o)&&!r){s=s===true?"":s;if(u){t.setAttributeNS(f,e,s)}else{t.setAttribute(e,s)}}}}};const L=/\s/;const W=t=>!t?[]:t.split(L);const D=(t,e,n,s)=>{const o=e.h.nodeType===11&&e.h.host?e.h.host:e.h;const l=t&&t.o||r;const c=e.o||r;{for(s in l){if(!(s in c)){E(o,s,l[s],undefined,n,e.u)}}}for(s in c){E(o,s,l[s],c[s],n,e.u)}};const F=(t,n,o,l)=>{const c=n.l[o];let i=0;let f;let r;if(c.t!==null){f=c.h=kt.createTextNode(c.t)}else{if(!s){s=c.p==="svg"}f=c.h=kt.createElementNS(s?u:a,c.p);if(s&&c.p==="foreignObject"){s=false}{D(null,c,s)}if(d(e)&&f["s-si"]!==e){f.classList.add(f["s-si"]=e)}if(c.l){for(i=0;i<c.l.length;++i){r=F(t,c,i);if(r){f.appendChild(r)}}}{if(c.p==="svg"){s=false}else if(f.tagName==="foreignObject"){s=true}}}return f};const N=(t,e,s,o,l,c)=>{let i=t;let f;if(i.shadowRoot&&i.tagName===n){i=i.shadowRoot}for(;l<=c;++l){if(o[l]){f=F(null,s,l);if(f){o[l].h=f;i.insertBefore(f,e)}}}};const R=(t,e,n)=>{for(let s=e;s<=n;++s){const e=t[s];if(e){const t=e.h;q(e);if(t){t.remove()}}}};const T=(t,e,n,s)=>{let o=0;let l=0;let c=0;let i=0;let f=e.length-1;let r=e[0];let u=e[f];let a=s.length-1;let d=s[0];let p=s[a];let h;let m;while(o<=f&&l<=a){if(r==null){r=e[++o]}else if(u==null){u=e[--f]}else if(d==null){d=s[++l]}else if(p==null){p=s[--a]}else if(A(r,d)){H(r,d);r=e[++o];d=s[++l]}else if(A(u,p)){H(u,p);u=e[--f];p=s[--a]}else if(A(r,p)){H(r,p);t.insertBefore(r.h,u.h.nextSibling);r=e[++o];p=s[--a]}else if(A(u,d)){H(u,d);t.insertBefore(u.h,r.h);u=e[--f];d=s[++l]}else{c=-1;{for(i=o;i<=f;++i){if(e[i]&&e[i].i!==null&&e[i].i===d.i){c=i;break}}}if(c>=0){m=e[c];if(m.p!==d.p){h=F(e&&e[l],n,c)}else{H(m,d);e[c]=undefined;h=m.h}d=s[++l]}else{h=F(e&&e[l],n,l);d=s[++l]}if(h){{r.h.parentNode.insertBefore(h,r.h)}}}}if(o>f){N(t,s[a+1]==null?null:s[a+1].h,n,s,l,a)}else if(l>a){R(e,o,f)}};const A=(t,e)=>{if(t.p===e.p){{return t.i===e.i}}return false};const H=(t,e)=>{const n=e.h=t.h;const o=t.l;const l=e.l;const c=e.p;const i=e.t;if(i===null){{s=c==="svg"?true:c==="foreignObject"?false:s}{if(c==="slot");else{D(t,e,s)}}if(o!==null&&l!==null){T(n,o,e,l)}else if(l!==null){if(t.t!==null){n.textContent=""}N(n,null,e,l,0,l.length-1)}else if(o!==null){R(o,0,o.length-1)}if(s&&c==="svg"){s=false}}else if(t.t!==i){n.data=i}};const q=t=>{{t.o&&t.o.ref&&t.o.ref(null);t.l&&t.l.map(q)}};const I=(t,s)=>{const o=t.$;const l=t.v;const c=t.j||y(null,null);const i=b(s)?s:m(null,null,s);n=o.tagName;if(l.k){i.o=i.o||{};l.k.map((([t,e])=>i.o[e]=o[t]))}i.p=null;i.u|=4;t.j=i;i.h=c.h=o.shadowRoot||o;{e=o["s-sc"]}H(c,i)};const V=(t,e)=>{if(e&&!t.O&&e["s-p"]){e["s-p"].push(new Promise((e=>t.O=e)))}};const _=(t,e)=>{{t.u|=16}if(t.u&4){t.u|=512;return}V(t,t.C);const n=()=>z(t,e);return Dt(n)};const z=(t,e)=>{const n=l("scheduleUpdate",t.v.S);const s=t.M;let o;if(e){{t.u|=256;if(t.P){t.P.map((([t,e])=>Z(s,t,e)));t.P=undefined}}{o=Z(s,"componentWillLoad")}}else{{o=Z(s,"componentWillUpdate")}}n();return B(o,(()=>J(t,s,e)))};const B=(t,e)=>G(t)?t.then(e):e();const G=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const J=async(t,e,n)=>{var s;const o=t.$;const c=l("update",t.v.S);const i=o["s-rc"];if(n){P(t)}const f=l("render",t.v.S);{K(t,e)}if(i){i.map((t=>t()));o["s-rc"]=undefined}f();c();{const e=(s=o["s-p"])!==null&&s!==void 0?s:[];const n=()=>Q(t);if(e.length===0){n()}else{Promise.all(e).then(n);t.u|=4;e.length=0}}};const K=(t,e,n)=>{try{e=e.render();{t.u&=~16}{t.u|=2}{{{I(t,e)}}}}catch(e){$t(e,t.$)}return null};const Q=t=>{const e=t.v.S;const n=t.$;const s=l("postUpdate",e);const o=t.M;const c=t.C;{Z(o,"componentDidRender")}if(!(t.u&64)){t.u|=64;{tt(n)}{Z(o,"componentDidLoad")}s();{t.U(n);if(!c){Y()}}}else{{Z(o,"componentDidUpdate")}s()}{t.L(n)}{if(t.O){t.O();t.O=undefined}if(t.u&512){Wt((()=>_(t,false)))}t.u&=~(4|512)}};const X=t=>{{const e=mt(t);const n=e.$.isConnected;if(n&&(e.u&(2|16))===2){_(e,false)}return n}};const Y=e=>{{tt(kt.documentElement)}Wt((()=>O(jt,"appload",{detail:{namespace:t}})))};const Z=(t,e,n)=>{if(t&&t[e]){try{return t[e](n)}catch(t){$t(t)}}return undefined};const tt=t=>t.classList.add("hydrated");const et=(t,e)=>mt(t).W.get(e);const nt=(t,e,n,s)=>{const o=mt(t);const l=o.$;const c=o.W.get(e);const i=o.u;const f=o.M;n=S(n,s.D[e][0]);const r=Number.isNaN(c)&&Number.isNaN(n);const u=n!==c&&!r;if((!(i&8)||c===undefined)&&u){o.W.set(e,n);if(f){if(s.F&&i&128){const t=s.F[e];if(t){t.map((t=>{try{f[t](n,c,e)}catch(t){$t(t,l)}}))}}if((i&(2|16))===2){_(o,false)}}}};const st=(t,e,n)=>{if(e.D){if(t.watchers){e.F=t.watchers}const s=Object.entries(e.D);const o=t.prototype;s.map((([t,[s]])=>{if(s&31||n&2&&s&32){Object.defineProperty(o,t,{get(){return et(this,t)},set(n){nt(this,t,n,e)},configurable:true,enumerable:true})}else if(n&1&&s&64){Object.defineProperty(o,t,{value(...e){const n=mt(this);return n.N.then((()=>n.M[t](...e)))}})}}));if(n&1){const n=new Map;o.attributeChangedCallback=function(t,e,s){Ot.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e)){s=this[e];delete this[e]}else if(o.hasOwnProperty(e)&&typeof this[e]==="number"&&this[e]==s){return}this[e]=s===null&&typeof this[e]==="boolean"?false:s}))};t.observedAttributes=s.filter((([t,e])=>e[0]&15)).map((([t,s])=>{const o=s[1]||t;n.set(o,t);if(s[0]&512){e.k.push([t,o])}return o}))}}return t};const ot=async(t,e,n,s,o)=>{if((e.u&32)===0){e.u|=32;{o=vt(n);if(o.then){const t=c();o=await o;t()}if(!o.isProxied){{n.F=o.watchers}st(o,n,2);o.isProxied=true}const t=l("createInstance",n.S);{e.u|=8}try{new o(e)}catch(t){$t(t)}{e.u&=~8}{e.u|=128}t();lt(e.M)}if(o.style){let t=o.style;const e=U(n);if(!St.has(e)){const s=l("registerStyles",n.S);M(e,t,!!(n.u&1));s()}}}const i=e.C;const f=()=>_(e,true);if(i&&i["s-rc"]){i["s-rc"].push(f)}else{f()}};const lt=t=>{{Z(t,"connectedCallback")}};const ct=t=>{if((Ot.u&1)===0){const e=mt(t);const n=e.v;const s=l("connectedCallback",n.S);if(!(e.u&1)){e.u|=1;{let n=t;while(n=n.parentNode||n.host){if(n["s-p"]){V(e,e.C=n);break}}}if(n.D){Object.entries(n.D).map((([e,[n]])=>{if(n&31&&t.hasOwnProperty(e)){const n=t[e];delete t[e];t[e]=n}}))}{ot(t,e,n)}}else{rt(t,e,n.R);lt(e.M)}s()}};const it=t=>{if((Ot.u&1)===0){const e=mt(t);const n=e.M;{if(e.T){e.T.map((t=>t()));e.T=undefined}}{Z(n,"disconnectedCallback")}}};const ft=(t,e={})=>{var n;const s=l();const o=[];const c=e.exclude||[];const f=jt.customElements;const r=kt.head;const u=r.querySelector("meta[charset]");const a=kt.createElement("style");const d=[];let p;let m=true;Object.assign(Ot,e);Ot.A=new URL(e.resourcesUrl||"./",kt.baseURI).href;t.map((t=>{t[1].map((e=>{const n={u:e[0],S:e[1],D:e[2],R:e[3]};{n.D=e[2]}{n.R=e[3]}{n.k=[]}{n.F={}}const s=n.S;const l=class extends HTMLElement{constructor(t){super(t);t=this;wt(t,n);if(n.u&1){{{t.attachShadow({mode:"open",delegatesFocus:!!(n.u&16)})}}}}connectedCallback(){if(p){clearTimeout(p);p=null}if(m){d.push(this)}else{Ot.jmp((()=>ct(this)))}}disconnectedCallback(){Ot.jmp((()=>it(this)))}componentOnReady(){return mt(this).H}};n.q=t[0];if(!c.includes(s)&&!f.get(s)){o.push(s);f.define(s,st(l,n,1))}}))}));{a.innerHTML=o+i;a.setAttribute("data-styles","");const t=(n=Ot.g)!==null&&n!==void 0?n:h(kt);if(t!=null){a.setAttribute("nonce",t)}r.insertBefore(a,u?u.nextSibling:r.firstChild)}m=false;if(d.length){d.map((t=>t.connectedCallback()))}else{{Ot.jmp((()=>p=setTimeout(Y,30)))}}s()};const rt=(t,e,n,s)=>{if(n){n.map((([n,s,o])=>{const l=at(t,n);const c=ut(e,o);const i=dt(n);Ot.ael(l,s,c,i);(e.T=e.T||[]).push((()=>Ot.rel(l,s,c,i)))}))}};const ut=(t,e)=>n=>{try{{if(t.u&256){t.M[e](n)}else{(t.P=t.P||[]).push([e,n])}}}catch(t){$t(t)}};const at=(t,e)=>{if(e&8)return jt;return t};const dt=t=>(t&2)!==0;const pt=t=>Ot.g=t;const ht=new WeakMap;const mt=t=>ht.get(t);const yt=(t,e)=>ht.set(e.M=t,e);const wt=(t,e)=>{const n={u:0,$:t,v:e,W:new Map};{n.N=new Promise((t=>n.L=t))}{n.H=new Promise((t=>n.U=t));t["s-p"]=[];t["s-rc"]=[]}rt(t,n,e.R);return ht.set(t,n)};const bt=(t,e)=>e in t;const $t=(t,e)=>(0,console.error)(t,e);const gt=new Map;const vt=(t,e,n)=>{const s=t.S.replace(/-/g,"_");const o=t.q;const l=gt.get(o);if(l){return l[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{gt.set(o,t)}return t[s]}),$t)};const St=new Map;const jt=typeof window!=="undefined"?window:{};const kt=jt.document||{head:{}};const Ot={u:0,A:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,s)=>t.addEventListener(e,n,s),rel:(t,e,n,s)=>t.removeEventListener(e,n,s),ce:(t,e)=>new CustomEvent(t,e)};const Ct=t=>Promise.resolve(t);const Mt=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const xt=[];const Pt=[];const Ut=(t,e)=>n=>{t.push(n);if(!o){o=true;if(e&&Ot.u&4){Wt(Lt)}else{Ot.raf(Lt)}}};const Et=t=>{for(let e=0;e<t.length;e++){try{t[e](performance.now())}catch(t){$t(t)}}t.length=0};const Lt=()=>{Et(xt);{Et(Pt);if(o=xt.length>0){Ot.raf(Lt)}}};const Wt=t=>Ct().then(t);const Dt=Ut(Pt,true);export{w as H,ft as b,k as c,X as f,j as g,m as h,Ct as p,yt as r,pt as s};
//# sourceMappingURL=index-6156b4fd.js.map