import{r as t,h as i,g as e}from"./index-a55db97c.js";import{c as r}from"./config-f7362aeb.js";const s=new class{constructor(){this.promises={},this.cache=caches.open("@limetech/lime-elements/icons")}async get(t,i=""){const e=await this.cache,r=this.getUrl(t,i);let s=await e.match(r);return s||(this.promises[r]||(this.promises[r]=e.add(r)),await this.promises[r],s=await e.match(r)),this.getIcon(s)}async getIcon(t){let i=await t.text();if(i=i.replace(/#000000/g,"currentColor"),!this.validSvg(i))throw new Error("Invalid SVG");return i}validSvg(t){return"svg"===(new DOMParser).parseFromString(t,"image/svg+xml").documentElement.tagName.toLowerCase()}getUrl(t,i){let e=i||"";return i&&!i.endsWith("/")&&(e=`${i}/`),`${e}assets/icons/${t}.svg`}},o=class{constructor(i){t(this,i),this.size=void 0,this.name=void 0,this.badge=void 0}componentDidLoad(){this.loadIcon(this.name)}render(){return i("div",{class:"container"})}async loadIcon(t){if(void 0===t||""===t)return;const i=await this.loadSvg(t);this.renderSvg(i)}loadSvg(t){return s.get(t,r.iconPath)}renderSvg(t){const i=this.host.shadowRoot.querySelector("div.container");i&&(i.innerHTML=t)}get host(){return e(this)}static get watchers(){return{name:["loadIcon"]}}};o.style=":host{background-color:var(--icon-background-color, transparent);border-radius:50%;display:inline-block;line-height:0;box-sizing:border-box}:host svg{fill:currentColor;height:100%;pointer-events:none;width:100%}:host([hidden]){display:none}:host([size=x-small]){height:0.9375rem !important;width:0.9375rem !important}:host([size=small]){height:1.25rem !important;width:1.25rem !important}:host([size=medium]){height:1.5625rem !important;width:1.5625rem !important}:host([size=large]){height:1.875rem !important;width:1.875rem !important}:host([badge][size=x-small]){height:1.4375rem !important;width:1.4375rem !important}:host([badge][size=x-small])>div{margin:0.25rem}:host([badge][size=small]){height:1.875rem !important;width:1.875rem !important}:host([badge][size=small])>div{margin:0.3125rem}:host([badge][size=medium]){height:2.5rem !important;width:2.5rem !important}:host([badge][size=medium])>div{margin:0.5rem}:host([badge][size=large]){height:2.875rem !important;width:2.875rem !important}:host([badge][size=large])>div{margin:0.5rem}";export{o as limel_icon}