import{r as e,c as t,h as i,H as o,g as r}from"./index-6156b4fd.js";import{g as s}from"./get-icon-props-990e4467.js";import{m as a,r as h}from"./make-enter-clickable-90a35b2b.js";import{t as l}from"./translations-dea847ae.js";import{D as n,B as c,b as d,c as m}from"./keycodes-d73e134c.js";const b='@charset "UTF-8";:host(limel-chip){--limel-chip-height:1.75rem;--limel-chip-gap:0.5rem;isolation:isolate;display:inline-flex;align-items:center}*{box-sizing:border-box}.chip{all:unset;position:relative;display:inline-flex;align-items:center;justify-content:center;gap:0.25rem;max-width:var(--chip-max-width, 10rem);height:var(--limel-chip-height);border-radius:var(--limel-chip-height);font-size:0.875rem;padding:0 0.125rem}.chip:has(limel-icon) .text{padding-left:0.25rem}.chip:not([disabled]){transition:color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;color:var(--mdc-theme-on-surface);background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-normal)}.chip:not([disabled]):focus{outline:none}.chip:not([disabled]):focus-visible{outline:none;box-shadow:var(--shadow-depth-8-focused)}.chip:not([disabled]):hover{color:var(--mdc-theme-on-surface);background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-hovered)}.chip:not([disabled]):active{background-color:var(--mdc-theme-surface);box-shadow:var(--button-shadow-inset-pressed);transform:translate3d(0, 0.05rem, 0)}.chip:has(limel-badge){padding-right:0.375rem}.chip:has(limel-badge) .text{padding-right:0}.chip:has(+.remove-button:hover){box-shadow:var(--shadow-depth-8-error)}:host(limel-chip[disabled]) .chip{color:rgba(var(--contrast-1600), 0.37);background-color:rgba(var(--contrast-1600), 0.1);box-shadow:none}:host(limel-chip[readonly]) .chip{box-shadow:0 0 0 1px rgba(var(--contrast-800), 0.5)}:host(limel-chip[selected]) .chip{box-shadow:var(--button-shadow-inset)}:host(limel-chip[selected]) .chip:focus-visible{box-shadow:var(--button-shadow-inset), var(--shadow-depth-8-focused)}:host(limel-chip[selected]) .chip:active{box-shadow:var(--button-shadow-inset-pressed)}:host(limel-chip[selected]) .text{color:var(--mdc-theme-primary)}:host(limel-chip[removable]) .chip:not([disabled]){padding-right:calc(var(--limel-chip-height) + 0.125rem)}:host(limel-chip[removable]) .chip:not([disabled]) .text{padding-right:0}:host(limel-chip[type=filter]) .chip{border-top-left-radius:0.5rem;border-bottom-left-radius:0.5rem}:host(limel-chip[type=filter]) .chip:after{content:"";transition:background-color 0.4s ease 0.2s, box-shadow 0.6s ease 0.2s;box-sizing:border-box;position:absolute;bottom:0.125rem;left:0.125rem;width:0.5rem;height:0.5rem;border-radius:50%;background-color:rgb(var(--contrast-800), 0.8);box-shadow:0 0 0 1px rgb(var(--color-white)) inset}:host(limel-chip[type=filter][selected]) .chip:after{background-color:rgb(var(--color-green-default));box-shadow:0 0 0.375rem 0 rgb(var(--color-green-light)), 0 0 0 1px rgb(var(--color-white)) inset}limel-icon{flex-shrink:0;width:calc(var(--limel-chip-height) - 0.25rem);height:calc(var(--limel-chip-height) - 0.25rem);padding:0.0625rem}limel-badge{pointer-events:none}.text{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:1.2;padding:0 0.5rem}.trailing-button{all:unset;transition:color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;color:var(--mdc-theme-on-surface);background-color:transparent;z-index:1;display:flex;align-items:center;justify-content:center;margin-left:calc(var(--limel-chip-height) * -1 + 0.125rem);margin-right:0.125rem;width:calc(var(--limel-chip-height) - 0.25rem);height:calc(var(--limel-chip-height) - 0.25rem);border-radius:50%}.trailing-button:hover{color:rgb(var(--color-red-dark));background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-hovered)}.trailing-button:active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}.trailing-button svg{transition:color 0.2s ease, transform 0.2s ease;width:1.25rem}.trailing-button:hover svg{transform:scale(0.8)}';const p=class{constructor(o){e(this,o);this.remove=t(this,"remove",7);this.renderAsButton=()=>[i("button",{class:"chip",role:"button",disabled:this.disabled||this.readonly,onKeyDown:this.handleDeleteKeyDown},this.renderIcon(),this.renderLabel(),this.renderBadge()),this.renderRemoveButton()];this.renderAsLink=()=>[i("a",{class:"chip",href:this.link.href,title:this.link.title,target:this.link.target,"aria-disabled":this.disabled||this.readonly,tabindex:this.disabled||this.readonly?-1:0,onKeyDown:this.handleDeleteKeyDown},this.renderIcon(),this.renderLabel(),this.renderBadge()),this.renderRemoveButton()];this.renderLabel=()=>i("span",{class:"text"},this.text);this.filterClickWhenDisabled=e=>{if(this.disabled||this.readonly){e.preventDefault()}};this.handleRemoveClick=e=>{e.stopPropagation();this.remove.emit()};this.handleDeleteKeyDown=e=>{if(!this.removable){return}const t=[n,c];const i=[d,m];if(t.includes(e.key)||i.includes(e.keyCode)){this.handleRemoveClick(e)}};this.removeChipLabel=()=>l.get("chip-set.remove-chip",this.language);this.language="en";this.text=undefined;this.icon=undefined;this.link=undefined;this.badge=undefined;this.disabled=false;this.readonly=false;this.selected=false;this.removable=false;this.type=undefined}componentWillLoad(){a(this.host)}disconnectedCallback(){h(this.host)}render(){return i(o,{onClick:this.filterClickWhenDisabled},this.link?this.renderAsLink():this.renderAsButton())}renderIcon(){var e,t;const o=s(this.icon);if(!o){return}return i("limel-icon",{badge:true,name:o,style:{color:`${(e=this.icon)===null||e===void 0?void 0:e.color}`,"background-color":`${(t=this.icon)===null||t===void 0?void 0:t.backgroundColor}`}})}renderBadge(){if(!this.badge){return}return i("limel-badge",{label:this.badge})}renderRemoveButton(){if(!this.removable||this.readonly||this.disabled){return}const e='<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-width="2" d="m8 8 16 16M24 8 8 24"/></svg>';return i("button",{class:"trailing-button remove-button",tabIndex:-1,"aria-label":this.removeChipLabel,innerHTML:e,onClick:this.handleRemoveClick})}get host(){return r(this)}};p.style=b;export{p as limel_chip};
//# sourceMappingURL=limel-chip.entry.js.map