import{r as t,c as i,h as e,H as o,g as r}from"./index-a55db97c.js";import{c as s}from"./random-string-2246b81e.js";const a=class{constructor(o){t(this,o),this.itemSelected=i(this,"itemSelected",7),this.firstRender=!0,this.renderActionBarItem=(t,i)=>e("limel-action-bar-item",{item:t,onSelect:this.handleSelect,isVisible:this.isVisible(i)}),this.renderOverflowMenu=t=>e("limel-action-bar-overflow-menu",{openDirection:this.openDirection,items:t,onSelect:this.handleSelect,class:{"is-invisible":!(this.actions.length-this.overflowCutoff)}}),this.handleSelect=t=>{t.stopPropagation(),"separator"in t.detail||this.itemSelected.emit(t.detail)},this.handleIntersectionHost=t=>{const i=t.filter((t=>t.isIntersecting)),e=t.filter((t=>!t.isIntersecting));this.overflowCutoff=this.firstRender?i.length:this.overflowCutoff+i.length-e.length,this.firstRender=!1},this.actions=[],this.accessibleLabel=void 0,this.layout=void 0,this.openDirection=void 0,this.overflowCutoff=this.actions.length}render(){let t=[];return this.actions.length&&(t=this.actions.slice(this.overflowCutoff)),e(o,{"aria-label":this.accessibleLabel,class:{"is-full-width":"fullWidth"===this.layout,"is-floating":"floating"===this.layout}},e("div",{class:"visible-items"},this.actions.map(this.renderActionBarItem)),this.renderOverflowMenu(t))}componentDidLoad(){this.createIntersectionObserver()}disconnectedCallback(){var t;null===(t=this.intersectionObserver)||void 0===t||t.disconnect()}isVisible(t){return t<this.overflowCutoff}createIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(this.handleIntersectionHost,{root:this.host.parentElement,rootMargin:"0px",threshold:1}),this.host.shadowRoot.querySelectorAll("limel-action-bar-item").forEach((t=>{this.intersectionObserver.observe(t)}))}get host(){return r(this)}};a.style=":host(limel-action-bar){--action-bar-item-height:2rem;--limel-action-bar-item-text-color:var(\n      --action-bar-item-text-color,\n      rgb(var(--contrast-1100))\n  );box-sizing:border-box;display:inline-flex;align-items:center;padding:0.125rem 0.25rem;max-width:100%;border-radius:var(--action-bar-border-radius);background-color:var(--action-bar-background-color, rgb(var(--contrast-100)));gap:0.25rem}@media (pointer: coarse){:host(limel-action-bar){gap:0.5rem}}limel-action-bar-button{min-width:0;display:absolute}.visible-items{display:inline-flex;overflow-x:hidden}.is-invisible{display:none}:host(limel-action-bar.is-full-width){width:100%}:host(limel-action-bar.is-floating){--action-bar-border-radius:100vw;padding-right:0.125rem;padding-left:0.125rem;max-width:calc(100% - 2rem);box-shadow:var(--shadow-depth-16)}";const n=class{constructor(e){t(this,e),this.select=i(this,"select",7),this.handleClick=t=>{t.stopPropagation(),this.select.emit(this.item)},this.item=void 0,this.isVisible=!0,this.tooltipId=s()}render(){return this.renderButton(this.handleClick)}renderButton(t){return!this.isItem(this.item)&&this.item.separator?e("div",{role:"separator"}):e("button",{id:this.tooltipId,type:"button",onClick:t,disabled:this.isDisabled()},this.renderIcon(),this.renderLabel(),this.renderTooltip())}isItem(t){return!("separator"in t)}isDisabled(){return!(!this.isItem(this.item)||!this.item.disabled)||!this.isVisible||void 0}renderIcon(){if(!this.isItem(this.item)||this.item.icon)return"icon"in this.item?e("limel-icon",{name:this.item.icon,style:{"--action-bar-item-icon-color":`${this.item.iconColor}`}}):void 0}renderLabel(){if(this.isItem(this.item)&&!this.item.iconOnly)return e("span",{class:"text"},this.item.text)}renderTooltip(){if(this.isItem(this.item))return this.item.text?e("limel-tooltip",{elementId:this.tooltipId,label:this.item.text,helperLabel:this.item.commandText}):this.item.commandText?e("limel-tooltip",{elementId:this.tooltipId,label:this.item.commandText}):void 0}};n.style="limel-action-bar-item{transition:opacity 0.2s ease-in-out;position:relative}limel-action-bar-item:not([is-visible]){opacity:0}button{all:unset;box-sizing:border-box;display:flex;align-items:center;justify-content:center;gap:0.25rem;width:100%;min-width:var(--action-bar-item-height);max-width:var(--action-bar-item-max-width, 10rem);height:var(--action-bar-item-height);border-radius:var(--action-bar-item-height);font-size:0.875rem;padding:0 0.25rem}button:not([disabled]){transition:color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;color:var(--limel-action-bar-item-text-color);background-color:var(--action-bar-background-color)}button:not([disabled]):hover{color:var(--limel-action-bar-item-text-color);background-color:var(--action-bar-background-color);box-shadow:var(--button-shadow-hovered)}button:not([disabled]):active{background-color:var(--action-bar-background-color);box-shadow:var(--button-shadow-inset-pressed);transform:translate3d(0, 0.05rem, 0)}button:not([disabled]):focus{outline:none}button:not([disabled]):focus-visible{outline:none;box-shadow:var(--shadow-depth-8-focused)}button:has(.text){padding:0 0.5rem}button[disabled]{opacity:0.4}.text{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:0 0.25rem}limel-icon{flex-shrink:0;width:calc(var(--action-bar-item-height) - 0.75rem);height:calc(var(--action-bar-item-height) - 0.75rem);color:var(--action-bar-item-icon-color, var(--limel-action-bar-item-text-color))}limel-tooltip{position:absolute;bottom:0;left:0;right:0}div[role=separator]{width:1px;height:1.5rem;border-radius:var(--action-bar-item-height);background-color:var(--limel-action-bar-item-text-color);opacity:0.2}@media (pointer: fine){div[role=separator]{margin:0 0.5rem}}limel-menu{--notification-badge-background-color:rgb(var(--contrast-600));--notification-badge-text-color:rgb(var(--contrast-1200))}button[slot=trigger]{animation:fade-in ease-out 0.25s;font-size:0.75rem;font-weight:bold;transform:translate3d(0, 0, 0)}@keyframes fade-in{0%{scale:0.8;opacity:0}100%{scale:1;opacity:1}}";const l=class{constructor(e){t(this,e),this.select=i(this,"select",7),this.countOverflowedItems=()=>`+${this.numberOfMenuItems}`,this.handleSelect=t=>{t.stopPropagation(),this.select.emit(t.detail)},this.items=void 0,this.openDirection=void 0}render(){return[e("limel-menu",{openDirection:this.openDirection,items:this.items,onSelect:this.handleSelect},e("button",{slot:"trigger"},this.countOverflowedItems()))]}get numberOfMenuItems(){return this.items.filter((t=>this.isMenuItem(t))).length}isMenuItem(t){return!("separator"in t)}};export{a as limel_action_bar,n as limel_action_bar_item,l as limel_action_bar_overflow_menu}