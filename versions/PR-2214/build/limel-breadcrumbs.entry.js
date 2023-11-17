import{r as e,c as t,h as r,g as i}from"./index-6156b4fd.js";import{m as s,r as a}from"./make-enter-clickable-a1d99f5e.js";import{c as o}from"./random-string-812b1c35.js";const l=':host(limel-breadcrumbs){--limel-breadcrumbs-item-height:1.5rem;--limel-breadcrumbs-gap:0.75rem;--limel-breadcrumbs-gap:0.75rem;--limel-breadcrumbs-item-text-color:var(\n      --breadcrumbs-item-text-color,\n      rgb(var(--contrast-1500))\n  );--limel-overflow-mask-horizontal:linear-gradient(\n      to right,\n      transparent 0%,\n      black calc(0% + var(--limel-left-edge-fade-width, 1rem)),\n      black calc(100% - var(--limel-right-edge-fade-width, 1rem)),\n      transparent 100%\n  );-webkit-mask-image:var(--limel-overflow-mask-horizontal);mask-image:var(--limel-overflow-mask-horizontal);padding-left:var(--limel-left-edge-fade-width, 1rem);padding-right:var(--limel-right-edge-fade-width, 1rem);--limel-left-edge-fade-width:0.5rem;--limel-right-edge-fade-width:0.5rem}ol,li,.step{all:unset}*{box-sizing:border-box}ol{padding:0.5rem;gap:var(--limel-breadcrumbs-gap)}.step{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:0.25rem;max-width:var(--breadcrumbs-item-max-width, 10rem);height:var(--limel-breadcrumbs-item-height);color:var(--limel-breadcrumbs-item-text-color);border-radius:100vw;font-size:0.875rem;padding:0 0.25rem}.step:not(:has(.text)){padding:0 0.125rem}.step:not(.last):focus{outline:none}.step:not(.last):focus-visible{outline:none;box-shadow:var(--shadow-depth-8-focused)}.step:not(.last):after{content:var(--limel-breadcrumbs-divider);width:var(--limel-breadcrumbs-gap);position:absolute;top:0;right:calc(var(--limel-breadcrumbs-gap) * -1);bottom:0;left:auto;text-align:center}a.step{cursor:pointer;transition:color 0.2s ease}a.step:before{transition:opacity 0.2s ease, transform 0.3s ease-out;content:"";position:absolute;inset:auto 0 0 0;width:calc(100% - 0.5rem);margin:auto;height:0.125rem;border-radius:1rem;background-color:currentColor;opacity:0;transform:scale(0.6)}a.step:hover{--limel-breadcrumbs-item-text-color:rgb(var(--color-blue-default))}a.step:hover:before{opacity:0.3;transform:scale(1)}button.step:not(.last){transition:color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;color:var(--limel-breadcrumbs-item-text-color);background-color:transparent}button.step:not(.last):hover{color:var(--mdc-theme-on-surface);background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-hovered)}button.step:not(.last):active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}limel-icon{flex-shrink:0;width:calc(var(--limel-breadcrumbs-item-height) - 0.25rem);height:calc(var(--limel-breadcrumbs-item-height) - 0.25rem)}.text{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:0 0.25rem}.last{opacity:0.7}:host(limel-breadcrumbs){box-sizing:border-box;display:flex;width:100%;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;direction:rtl}:host(limel-breadcrumbs)::-webkit-scrollbar{display:none}ol{display:flex;flex-direction:row-reverse;justify-content:flex-end;margin-right:auto}.step{direction:ltr}';const n=class{constructor(i){e(this,i);this.select=t(this,"select",7);this.renderSteps=()=>{const e=this.items.slice(0,-1);if(this.areItemsLinks(this.items)){return e.map(this.renderAsLink)}return e.map(this.renderAsButton)};this.renderAsButton=e=>{const t=o();return[r("button",{role:"listitem",id:t,class:"step",onClick:this.handleClick(e)},this.renderIcon(e),this.renderLabel(e)),this.renderTooltip(e,t)]};this.renderAsLink=e=>{const t=o();return[r("a",{role:"listitem",id:o(),class:"step",href:e.link.href,title:e.link.title},this.renderIcon(e),this.renderLabel(e)),this.renderTooltip(e,t)]};this.renderLastStep=()=>{const e=this.items.slice(-1);return r("li",{class:"last step",tabindex:"-1","aria-current":this.areItemsLinks(this.items)?"page":"step"},this.renderIcon(e[0]),r("span",{class:"text"},e[0].text))};this.renderIcon=e=>{var t;if(!((t=e.icon)===null||t===void 0?void 0:t.name)){return}return r("limel-icon",{style:{color:`${e.icon.color}`},name:e.icon.name})};this.renderLabel=e=>{if(e.type==="icon-only"){return}return r("span",{class:"text"},e.text)};this.renderTooltip=(e,t)=>{if(e.type==="icon-only"){return r("limel-tooltip",{elementId:t,label:e.text})}};this.areItemsLinks=e=>e.some((e=>"link"in e));this.handleClick=e=>t=>{t.stopPropagation();this.select.emit(e)};this.items=undefined;this.divider="›"}render(){return r("ol",{role:"navigation","aria-label":"Breadcrumb",style:{"--limel-breadcrumbs-divider":`'${this.divider}'`}},this.renderSteps(),this.renderLastStep())}componentWillLoad(){s(this.host)}disconnectedCallback(){this.removeEnterClickable()}removeEnterClickable(){var e;const t=(e=this.button)!==null&&e!==void 0?e:this.anchor;a(t)}get host(){return i(this)}};n.style=l;export{n as limel_breadcrumbs};
//# sourceMappingURL=limel-breadcrumbs.entry.js.map