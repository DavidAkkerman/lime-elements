import{f as e}from"./index-6156b4fd.js";const n=new WeakMap;function r(r){if(n.has(r)){return}let t=false;let i=true;const o=n=>{if(n.key==="Enter"&&!t){t=true;if(r===null||r===void 0?void 0:r.shadowRoot){e(r)}}};const f=n=>{if(n.key==="Enter"&&t){t=false;i=true;if(r===null||r===void 0?void 0:r.shadowRoot){e(r)}}};const u=e=>{if(!t){return}if(i){i=false;return}e.stopImmediatePropagation()};n.set(r,{keydownHandler:o,keyupHandler:f,clickHandler:u});r.addEventListener("keydown",o);r.addEventListener("keyup",f);r.addEventListener("click",u,true)}function t(e){const r=n.get(e);if(!r||!n.has(e)){return}e.removeEventListener("keydown",r.keydownHandler);e.removeEventListener("keyup",r.keyupHandler);e.removeEventListener("click",r.clickHandler,true);n.delete(e)}export{r as m,t as r};
//# sourceMappingURL=makeEnterClickable-131029a5.js.map