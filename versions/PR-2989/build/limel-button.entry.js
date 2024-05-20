import{r as e,h as t,H as o,g as r}from"./index-6156b4fd.js";import{m as a,r as n}from"./make-enter-clickable-a30589fb.js";const s='@charset "UTF-8";:host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--mdc-theme-error:var(\n      --lime-error-background-color,\n      rgb(var(--color-red-dark))\n  );--lime-error-text-color:rgb(var(--color-red-darker));--mdc-theme-surface:var(\n      --lime-surface-background-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-surface:var(\n      --lime-on-surface-color,\n      rgb(var(--contrast-1500))\n  )}:host{display:inline-block}:host([hidden]){display:none}:host([aria-expanded=true]) button,:host([aria-expanded]:not([aria-expanded=false])) button{box-shadow:var(--button-shadow-inset-pressed) !important}button.mdc-button{font-family:inherit}button{display:flex;align-items:center;justify-content:center;gap:0.125rem;border:none;border-radius:0.4rem;padding-top:0;padding-right:var(--button-padding-right, 0.5rem);padding-bottom:0;padding-left:var(--button-padding-left, 0.5rem);min-height:2.25rem;width:100%}button:disabled{cursor:not-allowed}button:disabled.outlined{border-color:rgba(var(--contrast-1700), 0.2)}button:not(:disabled){transition:color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;color:var(--mdc-theme-on-surface);background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-normal)}button:not(:disabled):focus{outline:none}button:not(:disabled):focus-visible{outline:none;box-shadow:var(--shadow-depth-8-focused)}button:not(:disabled):hover{color:var(--mdc-theme-on-surface);background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-hovered)}button:not(:disabled):active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}:host(limel-button[primary]) button:not(:disabled){color:var(--mdc-theme-on-primary, rgb(var(--color-white)));background-color:var(--mdc-theme-primary, rgb(var(--color-teal-default)))}:host(limel-button[primary]) button:disabled{background-color:rgba(var(--contrast-1700), 0.15)}:host(limel-button:not([primary])) button:not(:disabled){color:var(--mdc-theme-primary, rgb(var(--color-teal-default)))}:host(limel-button:not([primary])) button:disabled{color:rgba(var(--contrast-1600), 0.37);background-color:rgba(var(--contrast-1600), 0.1)}.icon{width:1.25rem;flex-shrink:0}.label{font-size:0.875rem;font-weight:600;letter-spacing:0.03125rem;padding:0 0.25rem}limel-spinner{position:absolute}limel-icon{vertical-align:top}svg{height:1.875rem;opacity:0;pointer-events:none;position:absolute;width:1.875rem}svg line{stroke:rgb(var(--color-white));stroke-width:2}limel-icon,.label,limel-spinner,svg{transition:opacity 300ms ease-in-out}.loading limel-icon,.loading .label{opacity:0}.loading limel-spinner{opacity:1}.just-loaded limel-icon,.just-loaded .label,.just-failed limel-icon,.just-failed .label{opacity:0}.just-loaded svg,.just-failed svg{opacity:1}.just-failed{background-color:var(--lime-error-text-color) !important;animation:shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both}.outlined{border:1px solid;border-color:var(--mdc-theme-primary)}@keyframes shake{10%,90%{transform:translate3d(-0.0625rem, 0, 0)}20%,80%{transform:translate3d(0.125rem, 0, 0)}30%,50%,70%{transform:translate3d(-0.1875rem, 0, 0)}40%,60%{transform:translate3d(0.1875rem, 0, 0)}}@keyframes reduced-presence{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.7)}}:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded){animation:reduced-presence 0.3s ease forwards;transition:padding 0.3s ease, min-width 0.3s ease;transition-delay:0.3s;padding:0;min-width:0}:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded) .label{transition:font-size 0.8s ease;transition-delay:0.3s;font-size:0;opacity:0}:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded) limel-icon,:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded) limel-spinner,:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded) svg,:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded) .icon{transition:all 0.3s ease;transition-delay:0.3s;opacity:0;width:0;height:0}';const i=class{constructor(t){e(this,t);this.filterClickWhenDisabled=e=>{if(this.disabled){e.preventDefault()}};this.label=undefined;this.primary=false;this.outlined=false;this.icon=undefined;this.disabled=false;this.loading=false;this.loadingFailed=false;this.justLoaded=false}componentWillLoad(){a(this.host)}disconnectedCallback(){n(this.host)}render(){return t(o,{onClick:this.filterClickWhenDisabled},t("button",{class:{loading:this.loading,"just-loaded":this.justLoaded&&!this.loadingFailed,"just-failed":this.justLoaded&&this.loadingFailed,outlined:this.outlined},disabled:this.disabled||this.loading},this.renderIcon(),this.renderLabel(),this.renderSpinner(),t("svg",{viewBox:"0 0 30 30"},this.renderLoadingIcons())))}loadingWatcher(e,t){if(t&&!e){this.justLoaded=true;const e=2e3;this.justLoadedTimeout=window.setTimeout((()=>{this.justLoaded=false}),e)}else if(e){this.justLoaded=false;window.clearTimeout(this.justLoadedTimeout)}}renderLoadingIcons(){if(this.loadingFailed){return[t("line",{x1:"9",y1:"9",x2:"21",y2:"21"}),t("line",{x1:"21",y1:"9",x2:"9",y2:"21"})]}return[t("line",{x1:"8",y1:"14",x2:"15",y2:"20"}),t("line",{x1:"23",y1:"9",x2:"14",y2:"20"})]}renderIcon(){if(!this.icon){return}return t("limel-icon",{class:"icon",name:this.icon})}renderLabel(){if(!this.label){return}return t("span",{class:"label"},this.label)}renderSpinner(){if(!this.loading){return}return t("limel-spinner",{limeBranded:false})}get host(){return r(this)}static get watchers(){return{loading:["loadingWatcher"]}}};i.style=s;export{i as limel_button};
//# sourceMappingURL=limel-button.entry.js.map