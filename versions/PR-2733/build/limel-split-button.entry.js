import{r as e,c as t,h as o,H as r}from"./index-6156b4fd.js";const i='@charset "UTF-8";:host(limel-split-button.has-menu){--button-padding-right:2rem}:host(limel-split-button){display:inline-flex;isolation:isolate}:host(limel-split-button) *{box-sizing:border-box}:host([disabled]){pointer-events:none}limel-button{width:100%}limel-menu{display:flex;justify-content:flex-end;position:relative;z-index:1;padding:0.125rem;margin-left:calc(var(--button-padding-right) * -1);width:var(--button-padding-right)}limel-menu:before{transition:background-color 0.5s ease;content:"";position:absolute;inset:0.375rem auto 0.375rem 0.6875rem;width:1px;background-color:currentColor;opacity:0.2}limel-menu:not([disabled]){color:var(--mdc-theme-primary, rgb(var(--color-teal-default)))}limel-menu:not([disabled]).primary{color:var(--mdc-theme-on-primary, rgb(var(--color-white)))}limel-menu[disabled]{color:rgba(var(--contrast-1600), 0.37)}limel-menu:hover:before,limel-menu:focus-within:before{background-color:transparent}.menu-trigger{all:unset;text-align:center;font-weight:bold;border-radius:0.125rem;height:100%;width:1rem}.menu-trigger:not(:disabled){transition:color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;color:"inherit";background-color:transparent;cursor:pointer}.menu-trigger:not(:disabled):hover{color:"inherit";background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-hovered)}.menu-trigger:not(:disabled):active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}.menu-trigger:not(:disabled):focus{outline:none}.menu-trigger:not(:disabled):focus-visible{outline:none;box-shadow:var(--shadow-depth-8-focused)}.menu-trigger:not(:disabled):focus-visible,.menu-trigger:not(:disabled):hover{background-color:rgb(var(--color-white), 0.1)}.menu-trigger:before{content:"";position:absolute;inset:-0.25rem;z-index:-1}';const n=class{constructor(r){e(this,r);this.select=t(this,"select",7);this.renderMenu=()=>{if(!this.items.length){return}return o("limel-menu",{class:{primary:this.primary},disabled:this.disabled,items:this.items,openDirection:"bottom"},o("button",{class:"menu-trigger",slot:"trigger",disabled:this.disabled},"⋮"))};this.label=undefined;this.primary=false;this.icon=undefined;this.disabled=false;this.items=[]}render(){return o(r,{class:{"has-menu":!!this.items.length}},o("limel-button",{label:this.label,primary:this.primary,icon:this.icon,disabled:this.disabled}),this.renderMenu())}};n.style=i;export{n as limel_split_button};
//# sourceMappingURL=limel-split-button.entry.js.map