import{r as e,c as t,h as o,g as r}from"./index-6156b4fd.js";import{c as i}from"./random-string-812b1c35.js";import{d as s}from"./keycodes-d73e134c.js";import{z as n}from"./zipObject-973a13ff.js";import"./_assignValue-d635a66e.js";import"./_defineProperty-6dda4257.js";import"./_getNative-4698fd71.js";import"./eq-1533d1d3.js";import"./_baseGetTag-49d0259e.js";import"./isObject-7039fcda.js";function a(e,t){var o;if(e.contains(t)||((o=e.shadowRoot)===null||o===void 0?void 0:o.contains(t))){return true}const r=c(t);if(!r){return false}return a(e,r)}function c(e){const t=e.closest(".limel-portal--container");if(t){return t.portalSource}const o=e.getRootNode();return o.host}const l=".trigger-anchor{display:inline-block;position:relative}";const p=class{constructor(o){e(this,o);this.close=t(this,"close",7);this.handleGlobalKeyPress=e=>{if(e.key!==s){return}e.stopPropagation();e.preventDefault();this.close.emit()};this.setTriggerAttributes=e=>{const t={"aria-haspopup":true,"aria-expanded":this.open,role:"button"};for(const[o,r]of Object.entries(t)){if(!r){e.removeAttribute(o)}else{e.setAttribute(o,String(r))}}};this.open=false;this.openDirection=undefined;this.portalId=i();this.globalClickListener=this.globalClickListener.bind(this)}watchOpen(){this.setupGlobalHandlers()}componentWillLoad(){this.setupGlobalHandlers()}componentDidRender(){const e=this.host.shadowRoot.querySelector("slot");e.assignedElements().forEach(this.setTriggerAttributes)}setupGlobalHandlers(){if(this.open){document.addEventListener("click",this.globalClickListener,{capture:true});document.addEventListener("keyup",this.handleGlobalKeyPress)}else{document.removeEventListener("click",this.globalClickListener);document.removeEventListener("keyup",this.handleGlobalKeyPress)}}render(){const e=this.getCssProperties();const t=getComputedStyle(this.host).getPropertyValue("--popover-z-index");return o("div",{class:"trigger-anchor"},o("slot",{name:"trigger"}),o("limel-portal",{visible:this.open,containerId:this.portalId,containerStyle:{"z-index":t},openDirection:this.openDirection},o("limel-popover-surface",{contentCollection:this.host.children,style:e})))}globalClickListener(e){const t=e.target;const o=a(this.host,t);if(this.open&&!o){e.stopPropagation();e.preventDefault();this.close.emit()}}getCssProperties(){const e=["--popover-surface-width","--popover-body-background-color","--popover-border-radius"];const t=getComputedStyle(this.host);const o=e.map((e=>t.getPropertyValue(e)));return n(e,o)}get host(){return r(this)}static get watchers(){return{open:["watchOpen"]}}};p.style=l;const d='@charset "UTF-8";:host(limel-popover-surface){isolation:isolate;position:relative;display:flex;width:var(--popover-surface-width, auto);max-height:inherit;max-width:calc(100vw - 2rem);margin:0 0.25rem}.limel-popover-surface{flex:1;min-width:0;min-height:0;border-radius:var(--popover-border-radius, 0.75rem);box-shadow:var(--shadow-depth-16);backdrop-filter:blur(0.3125rem);-webkit-backdrop-filter:blur(0.3125rem)}.limel-popover-surface:after{transition:opacity 0.4s ease;pointer-events:none;content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;opacity:0.75;border-radius:var(--popover-border-radius, 0.75rem);background-color:var(--popover-body-background-color, var(--lime-elevated-surface-background-color))}.limel-popover-surface:focus{outline:none}.limel-popover-surface:focus-visible{outline:none;box-shadow:var(--shadow-depth-8-focused)}.limel-popover-surface:focus:after,.limel-popover-surface:focus-within:after{opacity:1}.limel-popover-surface>*{box-sizing:border-box}';const u=class{constructor(t){e(this,t);this.contentCollection=undefined}componentDidLoad(){this.appendElement()}render(){return o("div",{class:"limel-popover-surface",tabindex:"0"})}appendElement(){const e=this.host.shadowRoot.querySelector(".limel-popover-surface");Array.from(this.contentCollection).forEach((t=>{if(t.slot==="trigger"){return}e.appendChild(t)}))}get host(){return r(this)}};u.style=d;export{p as limel_popover,u as limel_popover_surface};
//# sourceMappingURL=limel-popover_2.entry.js.map