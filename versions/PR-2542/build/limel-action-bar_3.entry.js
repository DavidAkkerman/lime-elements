import{r as t,c as i,h as e,H as o,g as r}from"./index-6156b4fd.js";import{c as s}from"./random-string-812b1c35.js";import{m as n,r as a}from"./make-enter-clickable-a1d99f5e.js";import{g as h,a as l}from"./get-icon-props-f9a21d14.js";function c(t){return!("separator"in t)}const d=":host(limel-action-bar){--action-bar-item-height:2rem;--limel-action-bar-item-text-color:var(\n      --action-bar-item-text-color,\n      rgb(var(--contrast-1100))\n  );box-sizing:border-box;display:inline-flex;align-items:center;padding:0.125rem 0.25rem;max-width:100%;border-radius:var(--action-bar-border-radius);background-color:var(--action-bar-background-color, rgb(var(--contrast-100)))}:host(limel-action-bar),.items{gap:0.25rem}@media (pointer: coarse){:host(limel-action-bar),.items{gap:0.5rem}}.items{display:inline-flex;max-width:100%;min-width:0}:host(limel-action-bar.is-full-width){width:100%}:host(limel-action-bar.is-floating){--action-bar-border-radius:100vw;padding-right:0.125rem;padding-left:0.125rem;max-width:calc(100% - 2rem);box-shadow:var(--shadow-depth-16)}";const m=class{constructor(o){t(this,o);this.itemSelected=i(this,"itemSelected",7);this.firstRender=true;this.actionBarItems=[];this.renderActionBarItem=(t,i)=>e("limel-action-bar-item",{item:t,onSelect:this.handleSelect,isVisible:this.isVisible(i)});this.renderOverflowMenu=t=>{if(!(this.actions.length-this.overflowCutoff)){return}return e("limel-action-bar-overflow-menu",{openDirection:this.openDirection,items:t,onSelect:this.handleSelect})};this.handleSelect=t=>{t.stopPropagation();if(c(t.detail)){this.itemSelected.emit(t.detail)}};this.handleIntersection=t=>{const i=t.filter((t=>t.isIntersecting));const e=t.filter((t=>!t.isIntersecting));if(this.firstRender){this.overflowCutoff=i.length}else{this.overflowCutoff=this.overflowCutoff+i.length-e.length}this.firstRender=false};this.actions=[];this.accessibleLabel=undefined;this.layout=undefined;this.openDirection=undefined;this.overflowCutoff=this.actions.length}render(){let t=[];if(this.actions.length){t=this.actions.slice(this.overflowCutoff)}return e(o,{"aria-label":this.accessibleLabel,class:{"is-full-width":this.layout==="fullWidth","is-floating":this.layout==="floating"}},e("div",{class:"items"},this.actions.map(this.renderActionBarItem)),this.renderOverflowMenu(t))}connectedCallback(){}componentDidRender(){var t;if(this.haveItemsChanged()){(t=this.intersectionObserver)===null||t===void 0?void 0:t.disconnect();this.createIntersectionObserver()}}disconnectedCallback(){var t;(t=this.intersectionObserver)===null||t===void 0?void 0:t.disconnect();this.intersectionObserver=undefined;this.actionBarItems=[];this.connectedCallback=()=>this.createIntersectionObserver()}isVisible(t){return t<this.overflowCutoff}createIntersectionObserver(){const t={root:this.host.shadowRoot.querySelector(".items"),rootMargin:"0px",threshold:1};this.overflowCutoff=this.actions.length;this.firstRender=true;this.actionBarItems=[];this.intersectionObserver=new IntersectionObserver(this.handleIntersection,t);this.host.shadowRoot.querySelectorAll("limel-action-bar-item").forEach((t=>{this.observe(t)}))}observe(t){this.intersectionObserver.observe(t);this.actionBarItems.push(t)}haveItemsChanged(){const t=this.actionBarItems.some((t=>!this.host.shadowRoot.contains(t)));const i=Array.from(this.host.shadowRoot.querySelectorAll("limel-action-bar-item")).some((t=>!this.actionBarItems.includes(t)));return t||i}get host(){return r(this)}};m.style=d;const b="limel-action-bar-item{transition:opacity 0.2s ease-in-out;position:relative;display:flex;align-items:center}limel-action-bar-item:not([is-visible]){opacity:0;pointer-events:none}button{all:unset;box-sizing:border-box;display:flex;align-items:center;justify-content:center;gap:0.25rem;width:100%;min-width:var(--action-bar-item-height);max-width:var(--action-bar-item-max-width, 10rem);height:var(--action-bar-item-height);color:var(--limel-action-bar-item-text-color);border-radius:var(--action-bar-item-height);font-size:0.875rem;padding:0 0.25rem}button:not([disabled]){transition:color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;color:var(--limel-action-bar-item-text-color);background-color:var(--action-bar-background-color)}button:not([disabled]):hover{color:var(--limel-action-bar-item-text-color);background-color:var(--action-bar-background-color);box-shadow:var(--button-shadow-hovered)}button:not([disabled]):active{background-color:var(--action-bar-background-color);box-shadow:var(--button-shadow-inset-pressed);transform:translate3d(0, 0.05rem, 0)}button:not([disabled]):focus{outline:none}button:not([disabled]):focus-visible{outline:none;box-shadow:var(--shadow-depth-8-focused)}button:has(.text){padding:0 0.5rem}button[disabled]{opacity:0.4}.text{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:0 0.25rem}limel-icon{flex-shrink:0;width:calc(var(--action-bar-item-height) - 0.75rem);height:calc(var(--action-bar-item-height) - 0.75rem);color:var(--action-bar-item-icon-color, var(--limel-action-bar-item-text-color))}div[role=separator]{width:1px;height:1.5rem;border-radius:var(--action-bar-item-height);background-color:var(--limel-action-bar-item-text-color);opacity:0.2}@media (pointer: fine){div[role=separator]{margin-right:0.5rem;margin-left:0.5rem}}limel-menu{--notification-badge-background-color:rgb(var(--contrast-600));--notification-badge-text-color:rgb(var(--contrast-1200))}limel-menu[open] button{box-shadow:var(--button-shadow-inset)}button[slot=trigger]{animation:fade-in ease-out 0.25s;font-size:0.75rem;font-weight:bold;transform:translate3d(0, 0, 0)}@keyframes fade-in{0%{scale:0.8;opacity:0}100%{scale:1;opacity:1}}";const u=class{constructor(e){t(this,e);this.select=i(this,"select",7);this.handleClick=t=>{t.stopPropagation();this.select.emit(this.item)};this.item=undefined;this.isVisible=true;this.tooltipId=s()}componentWillLoad(){n(this.host)}componentDidLoad(){this.triggerIconColorWarning()}disconnectedCallback(){a(this.host)}render(){if(!this.isItem(this.item)&&this.item.separator){return e("div",{role:"separator"})}return e("button",{id:this.tooltipId,type:"button",onClick:this.handleClick,disabled:this.isDisabled()},this.renderIcon(),this.renderLabel(),this.renderTooltip())}isItem(t){return!("separator"in t)}isDisabled(){if(this.isItem(this.item)&&this.item.disabled){return true}if(!this.isVisible){return true}}renderIcon(){if(this.isItem(this.item)&&!this.item.icon){return}if("icon"in this.item){const t=h(this.item.icon);const i=l(this.item.icon,this.item.iconColor);return e("limel-icon",{name:t,style:{"--action-bar-item-icon-color":`${i}`}})}}renderLabel(){if(!this.isItem(this.item)||this.item.iconOnly){return}return e("span",{class:"text"},this.item.text)}renderTooltip(){if(!this.isItem(this.item)){return}if(this.item.text){return e("limel-tooltip",{elementId:this.tooltipId,label:this.item.text,helperLabel:this.item.commandText})}if(this.item.commandText){return e("limel-tooltip",{elementId:this.tooltipId,label:this.item.commandText})}}triggerIconColorWarning(){if(this.isItem(this.item)&&this.item.iconColor){console.warn("The `iconColor` prop is deprecated now! Use the new `Icon` interface and instead of `iconColor: 'color-name'` write `icon {name: 'icon-name', color: 'color-name'}`.")}}get host(){return r(this)}};u.style=b;const f=class{constructor(e){t(this,e);this.select=i(this,"select",7);this.countOverflowedItems=()=>`+${this.numberOfMenuItems}`;this.handleSelect=t=>{t.stopPropagation();this.select.emit(t.detail)};this.items=undefined;this.openDirection="bottom-end"}render(){return[e("limel-menu",{openDirection:this.openDirection,items:this.items,onSelect:this.handleSelect},e("button",{slot:"trigger"},this.countOverflowedItems()))]}get numberOfMenuItems(){return this.items.filter((t=>this.isMenuItem(t))).length}isMenuItem(t){return!("separator"in t)}};export{m as limel_action_bar,u as limel_action_bar_item,f as limel_action_bar_overflow_menu};
//# sourceMappingURL=limel-action-bar_3.entry.js.map