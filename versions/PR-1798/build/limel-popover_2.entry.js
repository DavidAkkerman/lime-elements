import{r as e,c as o,h as r,g as t}from"./index-7dccb886.js";import{c as i}from"./random-string-2246b81e.js";import{b as s}from"./keycodes-9f971b46.js";import{z as a}from"./zipObject-973a13ff.js";import"./_assignValue-d635a66e.js";import"./_defineProperty-6dda4257.js";import"./_getNative-4698fd71.js";import"./eq-1533d1d3.js";import"./_baseGetTag-49d0259e.js";import"./isObject-7039fcda.js";function c(e,o){var r;if(e.contains(o)||(null===(r=e.shadowRoot)||void 0===r?void 0:r.contains(o)))return!0;const t=function(e){const o=e.closest(".limel-portal--container");return o?o.portalSource:e.getRootNode().host}(o);return!!t&&c(e,t)}const n=class{constructor(r){e(this,r),this.close=o(this,"close",7),this.open=!1,this.handleGlobalKeyPress=e=>{e.key===s&&(e.stopPropagation(),e.preventDefault(),this.close.emit())},this.portalId=i(),this.globalClickListener=this.globalClickListener.bind(this)}watchOpen(){this.setupGlobalHandlers()}componentWillLoad(){this.setupGlobalHandlers()}setupGlobalHandlers(){this.open?(document.addEventListener("click",this.globalClickListener,{capture:!0}),document.addEventListener("keyup",this.handleGlobalKeyPress)):(document.removeEventListener("click",this.globalClickListener),document.removeEventListener("keyup",this.handleGlobalKeyPress))}render(){const e=this.getCssProperties(),o=getComputedStyle(this.host).getPropertyValue("--popover-z-index");return r("div",{class:"trigger-anchor"},r("slot",{name:"trigger"}),r("limel-portal",{visible:this.open,containerId:this.portalId,containerStyle:{"z-index":o},openDirection:this.openDirection,showArrow:!0,arrowStyle:"arrow-style-popover"},r("limel-popover-surface",{contentCollection:this.host.children,style:e})))}globalClickListener(e){const o=c(this.host,e.target);this.open&&!o&&(e.stopPropagation(),e.preventDefault(),this.close.emit())}getCssProperties(){const e=["--popover-surface-width","--popover-body-background-color","--popover-border-radius"],o=getComputedStyle(this.host),r=e.map((e=>o.getPropertyValue(e)));return a(e,r)}get host(){return t(this)}static get watchers(){return{open:["watchOpen"]}}};n.style=".trigger-anchor{display:inline-block;position:relative}";const p=class{constructor(o){e(this,o)}componentDidLoad(){this.appendElement()}render(){return r("div",{class:"limel-popover-surface",tabindex:"0"})}appendElement(){const e=this.host.shadowRoot.querySelector(".limel-popover-surface");Array.from(this.contentCollection).forEach((o=>{"trigger"!==o.slot&&e.appendChild(o)}))}get host(){return t(this)}};p.style='.limel-popover-surface{position:relative;display:flex;flex-direction:column;width:var(--popover-surface-width, auto);max-height:calc(100vh - 2rem);max-width:calc(100vw - 2rem);margin:0 0.25rem;border-radius:var(--popover-border-radius, 0.75rem);box-shadow:var(--shadow-depth-16);backdrop-filter:blur(0.3125rem);-webkit-backdrop-filter:blur(0.3125rem)}.limel-popover-surface:after{transition:opacity 0.4s ease;pointer-events:none;content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;opacity:0.75;border-radius:var(--popover-border-radius, 0.75rem);background-color:var(--popover-body-background-color, rgb(var(--contrast-100)))}.limel-popover-surface:focus,.limel-popover-surface:focus-within{outline:none}.limel-popover-surface:focus:after,.limel-popover-surface:focus-within:after{opacity:1}.limel-popover-surface:focus-visible{box-shadow:var(--shadow-depth-16-focused)}';export{n as limel_popover,p as limel_popover_surface}