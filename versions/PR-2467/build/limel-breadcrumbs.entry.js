import{r as e,c as t,h as r,g as s}from"./index-f1b3d5fb.js";import{m as i,r as a}from"./make-enter-clickable-c6bf8637.js";import{c as o}from"./random-string-812b1c35.js";const l=':host(limel-breadcrumbs){--limel-breadcrumbs-item-height:1.5rem;--limel-breadcrumbs-gap:0.75rem;--limel-breadcrumbs-gap:0.75rem;--limel-breadcrumbs-item-text-color:var(\n      --breadcrumbs-item-text-color,\n      rgb(var(--contrast-1500))\n  );-webkit-mask-image:linear-gradient(to right, transparent 0%, black calc(0% + 0.5rem), black calc(100% - 0.5rem), transparent 100%);mask-image:linear-gradient(linear-gradient(to right, transparent 0%, black calc(0% + 0.5rem), black calc(100% - 0.5rem), transparent 100%))}ol,li,.step{all:unset}*{box-sizing:border-box}ol{padding:0.5rem;gap:var(--limel-breadcrumbs-gap)}.step{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:0.25rem;max-width:var(--breadcrumbs-item-max-width, 10rem);height:var(--limel-breadcrumbs-item-height);color:var(--limel-breadcrumbs-item-text-color);border-radius:100vw;font-size:0.875rem;padding:0 0.25rem}.step:not(:has(.text)){padding:0 0.125rem}.step:not(.last):focus{outline:none}.step:not(.last):focus-visible{outline:none;box-shadow:var(--shadow-depth-8-focused)}.step:not(.last):after{content:var(--limel-breadcrumbs-divider);width:var(--limel-breadcrumbs-gap);position:absolute;top:0;right:calc(var(--limel-breadcrumbs-gap) * -1);bottom:0;left:auto;text-align:center}a.step{cursor:pointer;transition:color 0.2s ease}a.step:before{transition:opacity 0.2s ease, transform 0.3s ease-out;content:"";position:absolute;inset:auto 0 0 0;width:calc(100% - 0.5rem);margin:auto;height:0.125rem;border-radius:1rem;background-color:currentColor;opacity:0;transform:scale(0.6)}a.step:hover{--limel-breadcrumbs-item-text-color:rgb(var(--color-blue-default))}a.step:hover:before{opacity:0.3;transform:scale(1)}button.step:not(.last){transition:color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;color:var(--limel-breadcrumbs-item-text-color);background-color:transparent}button.step:not(.last):hover{color:var(--mdc-theme-on-surface);background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-hovered)}button.step:not(.last):active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}limel-icon{flex-shrink:0;width:calc(var(--limel-breadcrumbs-item-height) - 0.25rem);height:calc(var(--limel-breadcrumbs-item-height) - 0.25rem)}.text{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:0 0.25rem}.last{opacity:0.7}:host(limel-breadcrumbs){box-sizing:border-box;display:flex;width:100%;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;direction:rtl}:host(limel-breadcrumbs)::-webkit-scrollbar{display:none}ol{display:flex;flex-direction:row-reverse;justify-content:flex-end;margin-right:auto}.step{direction:ltr}';const n=class{constructor(s){e(this,s);this.select=t(this,"select",7);this.renderSteps=e=>{const t=e.slice(0,-1);if(this.areItemsLinks(e)){return t.map(this.renderAsLink)}return t.map(this.renderAsButton)};this.renderAsButton=e=>[r("button",{role:"listitem",id:o(),class:"step",onClick:this.handleClick(e)},this.renderIcon(e),this.renderLabel(e)),this.renderTooltip(e)];this.renderAsLink=e=>[r("a",{role:"listitem",id:o(),class:"step",href:e.link.href,title:e.link.title},this.renderIcon(e),this.renderLabel(e)),this.renderTooltip(e)];this.renderLastStep=e=>{const t=e.slice(-1);return r("li",{class:"last step","aria-current":this.areItemsLinks(e)?"page":"step"},this.renderIcon(t[0]),r("span",{class:"text"},t[0].text))};this.renderIcon=e=>{if(!e.icon){return}return r("limel-icon",{style:{color:`${e.iconColor}`},name:e.icon})};this.renderLabel=e=>{if(e.iconOnly){return}return r("span",{class:"text"},e.text)};this.renderTooltip=e=>{if(!e.iconOnly||!e.text){return}return r("limel-tooltip",{elementId:o(),label:e.text})};this.areItemsLinks=e=>e.some((e=>"link"in e));this.handleClick=e=>t=>{t.stopPropagation();this.select.emit(e)};this.items=undefined;this.divider="›"}render(){return r("ol",{role:"navigation","aria-label":"Breadcrumb",style:{"--limel-breadcrumbs-divider":`'${this.divider}'`}},this.renderSteps(this.items),this.renderLastStep(this.items))}componentWillRender(){this.removeEnterClickable()}componentDidRender(){this.button=this.host.shadowRoot.querySelector("button");this.anchor=this.host.shadowRoot.querySelector("a");if(this.button){i(this.button)}if(this.anchor){i(this.anchor)}}disconnectedCallback(){this.removeEnterClickable()}removeEnterClickable(){if(this.button){a(this.button)}if(this.anchor){a(this.anchor)}}get host(){return s(this)}};n.style=l;export{n as limel_breadcrumbs};
//# sourceMappingURL=limel-breadcrumbs.entry.js.map