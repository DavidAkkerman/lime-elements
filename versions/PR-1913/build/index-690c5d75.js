let e,t,n,l=!1,o=!1,s=!1,i=!1,c=!1;const r="undefined"!=typeof window?window:{},f=r.document||{head:{}},a={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},u=e=>Promise.resolve(e),d=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),p=(e,t,n)=>{n&&n.map((([n,l,o])=>{const s=h(e,n),i=$(t,o),c=m(n);a.ael(s,l,i,c),(t.o=t.o||[]).push((()=>a.rel(s,l,i,c)))}))},$=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){de(e)}},h=(e,t)=>8&t?r:e,m=e=>0!=(2&e),y="http://www.w3.org/1999/xlink",b=new WeakMap,w=e=>"sc-"+e.p,g={},v=e=>"object"==(e=typeof e)||"function"===e,k=(e,t,...n)=>{let l=null,o=null,s=null,i=!1,c=!1;const r=[],f=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!v(l))&&(l+=""),i&&c?r[r.length-1].$+=l:r.push(i?j(null,l):l),c=i)};if(f(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,r,O);const a=j(e,null);return a.h=t,r.length>0&&(a.m=r),a.g=o,a.v=s,a},j=(e,t)=>({t:0,k:e,$:t,j:null,m:null,h:null,g:null,v:null}),S={},O={forEach:(e,t)=>e.map(C).forEach(t),map:(e,t)=>e.map(C).map(t).map(M)},C=e=>({vattrs:e.h,vchildren:e.m,vkey:e.g,vname:e.v,vtag:e.k,vtext:e.$}),M=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),k(e.vtag,t,...e.vchildren||[])}const t=j(e.vtag,e.vtext);return t.h=e.vattrs,t.m=e.vchildren,t.g=e.vkey,t.v=e.vname,t},x=(e,t,n,l,o,s)=>{if(n!==l){let i=ue(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=P(n),s=P(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const r=v(l);if((i||r&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{const o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}let f=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,f=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(y,t):e.removeAttribute(t)):(!i||4&s||o)&&!r&&(l=!0===l?"":l,f?e.setAttributeNS(y,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):ue(r,c)?c.slice(2):c[2]+t.slice(3),n&&a.rel(e,t,n,!1),l&&a.ael(e,t,l,!1)}},R=/\s/,P=e=>e?e.split(R):[],T=(e,t,n,l)=>{const o=11===t.j.nodeType&&t.j.host?t.j.host:t.j,s=e&&e.h||g,i=t.h||g;for(l in s)l in i||x(o,l,s[l],void 0,n,t.t);for(l in i)x(o,l,s[l],i[l],n,t.t)},E=(o,c,r,a)=>{const u=c.m[r];let d,p,$,h=0;if(l||(s=!0,"slot"===u.k&&(e&&a.classList.add(e+"-s"),u.t|=u.m?2:1)),null!==u.$)d=u.j=f.createTextNode(u.$);else if(1&u.t)d=u.j=f.createTextNode("");else{if(i||(i="svg"===u.k),d=u.j=f.createElementNS(i?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&u.t?"slot-fb":u.k),i&&"foreignObject"===u.k&&(i=!1),T(null,u,i),null!=e&&d["s-si"]!==e&&d.classList.add(d["s-si"]=e),u.m)for(h=0;h<u.m.length;++h)p=E(o,u,h,d),p&&d.appendChild(p);"svg"===u.k?i=!1:"foreignObject"===d.tagName&&(i=!0)}return d["s-hn"]=n,3&u.t&&(d["s-sr"]=!0,d["s-cr"]=t,d["s-sn"]=u.v||"",$=o&&o.m&&o.m[r],$&&$.k===u.k&&o.j&&L(o.j,!1)),d},L=(e,t)=>{a.t|=1;const l=e.childNodes;for(let e=l.length-1;e>=0;e--){const o=l[e];o["s-hn"]!==n&&o["s-ol"]&&(F(o).insertBefore(o,D(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),t&&L(o,t)}a.t&=-2},N=(e,t,l,o,s,i)=>{let c,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===n&&(r=r.shadowRoot);s<=i;++s)o[s]&&(c=E(null,l,s,e),c&&(o[s].j=c,r.insertBefore(c,D(t))))},U=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.j,z(l),o=!0,s["s-ol"]?s["s-ol"].remove():L(s,!0),s.remove())},W=(e,t)=>e.k===t.k&&("slot"===e.k?e.v===t.v:e.g===t.g),D=e=>e&&e["s-ol"]||e,F=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,A=(e,t)=>{const n=t.j=e.j,l=e.m,o=t.m,s=t.k,c=t.$;let r;null===c?(i="svg"===s||"foreignObject"!==s&&i,"slot"===s||T(e,t,i),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,c=0,r=0,f=0,a=t.length-1,u=t[0],d=t[a],p=l.length-1,$=l[0],h=l[p];for(;i<=a&&c<=p;)if(null==u)u=t[++i];else if(null==d)d=t[--a];else if(null==$)$=l[++c];else if(null==h)h=l[--p];else if(W(u,$))A(u,$),u=t[++i],$=l[++c];else if(W(d,h))A(d,h),d=t[--a],h=l[--p];else if(W(u,h))"slot"!==u.k&&"slot"!==h.k||L(u.j.parentNode,!1),A(u,h),e.insertBefore(u.j,d.j.nextSibling),u=t[++i],h=l[--p];else if(W(d,$))"slot"!==u.k&&"slot"!==h.k||L(d.j.parentNode,!1),A(d,$),e.insertBefore(d.j,u.j),d=t[--a],$=l[++c];else{for(r=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].g&&t[f].g===$.g){r=f;break}r>=0?(s=t[r],s.k!==$.k?o=E(t&&t[c],n,r,e):(A(s,$),t[r]=void 0,o=s.j),$=l[++c]):(o=E(t&&t[c],n,c,e),$=l[++c]),o&&F(u.j).insertBefore(o,D(u.j))}i>a?N(e,null==l[p+1]?null:l[p+1].j,n,l,c,p):c>p&&U(t,i,a)})(n,l,t,o):null!==o?(null!==e.$&&(n.textContent=""),N(n,null,t,o,0,o.length-1)):null!==l&&U(l,0,l.length-1),i&&"svg"===s&&(i=!1)):(r=n["s-cr"])?r.parentNode.textContent=c:e.$!==c&&(n.data=c)},H=e=>{const t=e.childNodes;let n,l,o,s,i,c;for(l=0,o=t.length;l<o;l++)if(n=t[l],1===n.nodeType){if(n["s-sr"])for(i=n["s-sn"],n.hidden=!1,s=0;s<o;s++)if(c=t[s].nodeType,t[s]["s-hn"]!==n["s-hn"]||""!==i){if(1===c&&i===t[s].getAttribute("slot")){n.hidden=!0;break}}else if(1===c||3===c&&""!==t[s].textContent.trim()){n.hidden=!0;break}H(n)}},q=[],V=e=>{let t,n,l,s,i,c,r=0;const f=e.childNodes,a=f.length;for(;r<a;r++){if(t=f[r],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,s=t["s-sn"],c=l.length-1;c>=0;c--)n=l[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(_(n,s)?(i=q.find((e=>e.S===n)),o=!0,n["s-sn"]=n["s-sn"]||s,i?i.O=t:q.push({O:t,S:n}),n["s-sr"]&&q.map((e=>{_(e.S,n["s-sn"])&&(i=q.find((e=>e.S===n)),i&&!e.O&&(e.O=i.O))}))):q.some((e=>e.S===n))||q.push({S:n}));1===t.nodeType&&V(t)}},_=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,z=e=>{e.h&&e.h.ref&&e.h.ref(null),e.m&&e.m.map(z)},B=e=>re(e).C,G=(e,t,n)=>{const l=B(e);return{emit:e=>I(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},I=(e,t,n)=>{const l=a.ce(t,n);return e.dispatchEvent(l),l},J=(e,t)=>{t&&!e.M&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.M=t)))},K=(e,t)=>{if(e.t|=16,!(4&e.t))return J(e,e.R),ke((()=>Q(e,t)));e.t|=512},Q=(e,t)=>{const n=e.i;let l;return t?(e.t|=256,e.u&&(e.u.map((([e,t])=>te(n,e,t))),e.u=null),l=te(n,"componentWillLoad")):l=te(n,"componentWillUpdate"),ne(l,(()=>X(e,n,t)))},X=async(e,t,n)=>{const l=e.C,o=l["s-rc"];n&&(e=>{const t=e.P,n=e.C,l=t.t,o=((e,t)=>{let n=w(t);const l=he.get(n);if(e=11===e.nodeType?e:f,l)if("string"==typeof l){let t,o=b.get(e=e.head||e);o||b.set(e,o=new Set),o.has(n)||(t=f.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);Y(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>Z(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},Y=(i,c)=>{try{c=c.render(),i.t&=-17,i.t|=2,((i,c)=>{const r=i.C,u=i.P,d=i.T||j(null,null),p=(e=>e&&e.k===S)(c)?c:k(null,null,c);if(n=r.tagName,u.L&&(p.h=p.h||{},u.L.map((([e,t])=>p.h[t]=r[e]))),p.k=null,p.t|=4,i.T=p,p.j=d.j=r.shadowRoot||r,e=r["s-sc"],t=r["s-cr"],l=0!=(1&u.t),o=!1,A(d,p),a.t|=1,s){let e,t,n,l,o,s;V(p.j);let i=0;for(;i<q.length;i++)e=q[i],t=e.S,t["s-ol"]||(n=f.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<q.length;i++)if(e=q[i],t=e.S,e.O){for(l=e.O.parentNode,o=e.O.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&H(p.j),a.t&=-2,q.length=0})(i,c)}catch(e){de(e,i.C)}return null},Z=e=>{const t=e.C,n=e.i,l=e.R;te(n,"componentDidRender"),64&e.t?te(n,"componentDidUpdate"):(e.t|=64,le(t),te(n,"componentDidLoad"),e.N(t),l||ee()),e.U(t),e.M&&(e.M(),e.M=void 0),512&e.t&&ve((()=>K(e,!1))),e.t&=-517},ee=()=>{le(f.documentElement),ve((()=>I(r,"appload",{detail:{namespace:"lime-elements"}})))},te=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){de(e)}},ne=(e,t)=>e&&e.then?e.then(t):t(),le=e=>e.classList.add("hydrated"),oe=(e,t,n)=>{if(t.W){e.watchers&&(t.D=e.watchers);const l=Object.entries(t.W),o=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>re(this).F.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=re(e),s=o.C,i=o.F.get(t),c=o.t,r=o.i;if(n=((e,t)=>null==e||v(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.W[t][0]),(!(8&c)||void 0===i)&&n!==i&&(!Number.isNaN(i)||!Number.isNaN(n))&&(o.F.set(t,n),r)){if(l.D&&128&c){const e=l.D[t];e&&e.map((e=>{try{r[e](n,i,t)}catch(e){de(e,s)}}))}2==(18&c)&&K(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=re(this);return n.A.then((()=>n.i[e](...t)))}})})),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){a.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(o.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.L.push([e,o]),o}))}}return e},se=e=>{te(e,"connectedCallback")},ie=(e,t={})=>{const n=[],l=t.exclude||[],o=r.customElements,s=f.head,i=s.querySelector("meta[charset]"),c=f.createElement("style"),u=[];let $,h=!0;Object.assign(a,t),a.l=new URL(t.resourcesUrl||"./",f.baseURI).href,e.map((e=>{e[1].map((t=>{const s={t:t[0],p:t[1],W:t[2],H:t[3]};s.W=t[2],s.H=t[3],s.L=[],s.D={};const i=s.p,c=class extends HTMLElement{constructor(e){super(e),ae(e=this,s),1&s.t&&e.attachShadow({mode:"open",delegatesFocus:!!(16&s.t)})}connectedCallback(){$&&(clearTimeout($),$=null),h?u.push(this):a.jmp((()=>(e=>{if(0==(1&a.t)){const t=re(e),n=t.P,l=()=>{};if(1&t.t)p(e,t,n.H),se(t.i);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=f.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){J(t,t.R=n);break}}n.W&&Object.entries(n.W).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=$e(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.D=o.watchers,oe(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){de(e)}t.t&=-9,t.t|=128,e(),se(t.i)}if(o.style){let e=o.style;const t=w(n);if(!he.has(t)){const l=()=>{};((e,t,n)=>{let l=he.get(e);d&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,he.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.R,i=()=>K(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,n)}l()}})(this)))}disconnectedCallback(){a.jmp((()=>(()=>{if(0==(1&a.t)){const e=re(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),te(t,"disconnectedCallback")}})()))}componentOnReady(){return re(this).q}};s.V=e[0],l.includes(i)||o.get(i)||(n.push(i),o.define(i,oe(c,s,1)))}))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),s.insertBefore(c,i?i.nextSibling:s.firstChild),h=!1,u.length?u.map((e=>e.connectedCallback())):a.jmp((()=>$=setTimeout(ee,30)))},ce=new WeakMap,re=e=>ce.get(e),fe=(e,t)=>ce.set(t.i=e,t),ae=(e,t)=>{const n={t:0,C:e,P:t,F:new Map};return n.A=new Promise((e=>n.U=e)),n.q=new Promise((e=>n.N=e)),e["s-p"]=[],e["s-rc"]=[],p(e,n,t.H),ce.set(e,n)},ue=(e,t)=>t in e,de=(e,t)=>(0,console.error)(e,t),pe=new Map,$e=e=>{const t=e.p.replace(/-/g,"_"),n=e.V,l=pe.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(pe.set(n,e),e[t])),de)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},he=new Map,me=[],ye=[],be=(e,t)=>n=>{e.push(n),c||(c=!0,t&&4&a.t?ve(ge):a.raf(ge))},we=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){de(e)}e.length=0},ge=()=>{we(me),we(ye),(c=me.length>0)&&a.raf(ge)},ve=e=>u().then(e),ke=be(ye,!0);export{S as H,ie as b,G as c,B as g,k as h,u as p,fe as r}