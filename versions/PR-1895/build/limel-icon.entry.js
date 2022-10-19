import{r as t,h as i,g as e}from"./index-ab490ba1.js";import{c as r}from"./config-f7362aeb.js";const s=new class{constructor(){this.cache={},this.resolveFunctions={}}async get(t,i=""){return this.cache[t]||(this.cache[t]=await this.getIcon(t,i)),this.cache[t]}getIcon(t,i){return new Promise((e=>{this.resolveFunctions[t]||(this.resolveFunctions[t]=[],this.fetchData(t,i)),this.resolveFunctions[t].push(e)}))}async fetchData(t,i){let e=i||"";i&&!i.endsWith("/")&&(e=`${i}/`);const r=await fetch(`${e}assets/icons/${t}.svg`);let s=await r.text();if(s=s.replace(/#000000/g,"currentColor"),!this.validSvg(s))throw new Error("Invalid SVG");this.resolvePromises(t,s)}validSvg(t){return"svg"===(new DOMParser).parseFromString(t,"image/svg+xml").documentElement.tagName.toLowerCase()}resolvePromises(t,i){this.resolveFunctions[t].forEach((t=>{t(i)})),this.resolveFunctions[t]=null}},o=class{constructor(i){t(this,i)}componentDidLoad(){this.loadIcon(this.name)}render(){return i("div",{class:"container"})}async loadIcon(t){if(void 0===t||""===t)return;const i=await this.loadSvg(t);this.renderSvg(i)}loadSvg(t){return s.get(t,r.iconPath)}renderSvg(t){const i=this.host.shadowRoot.querySelector("div.container");i&&(i.innerHTML=t)}get host(){return e(this)}static get watchers(){return{name:["loadIcon"]}}};o.style=":host{background-color:var(--icon-background-color, transparent);border-radius:50%;display:inline-block;line-height:0;box-sizing:border-box}:host svg{fill:currentColor;height:100%;pointer-events:none;width:100%}:host([hidden]){display:none}:host([size=x-small]){height:0.9375rem !important;width:0.9375rem !important}:host([size=small]){height:1.25rem !important;width:1.25rem !important}:host([size=medium]){height:1.5625rem !important;width:1.5625rem !important}:host([size=large]){height:1.875rem !important;width:1.875rem !important}:host([badge][size=x-small]){height:1.4375rem !important;width:1.4375rem !important}:host([badge][size=x-small])>div{margin:0.25rem}:host([badge][size=small]){height:1.875rem !important;width:1.875rem !important}:host([badge][size=small])>div{margin:0.3125rem}:host([badge][size=medium]){height:2.5rem !important;width:2.5rem !important}:host([badge][size=medium])>div{margin:0.5rem}:host([badge][size=large]){height:2.875rem !important;width:2.875rem !important}:host([badge][size=large])>div{margin:0.5rem}";export{o as limel_icon}