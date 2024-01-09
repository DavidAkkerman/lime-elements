import{r,h as e,g as o}from"./index-6156b4fd.js";import{m as t,r as a}from"./make-enter-clickable-a1d99f5e.js";const n='@charset "UTF-8";:host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--mdc-theme-error:var(\n      --lime-error-background-color,\n      rgb(var(--color-red-dark))\n  );--lime-error-text-color:rgb(var(--color-red-darker));--mdc-theme-surface:var(\n      --lime-surface-background-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-surface:var(\n      --lime-on-surface-color,\n      rgb(var(--contrast-1500))\n  )}:host{display:inline-block}:host([hidden]){display:none}:host([disabled]){pointer-events:none}:host([aria-expanded=true]) button,:host([aria-expanded]:not([aria-expanded=false])) button{box-shadow:var(--button-shadow-inset-pressed) !important}button.mdc-button{font-family:inherit}button{display:flex;align-items:center;justify-content:center;gap:0.125rem;border:none;border-radius:0.4rem;padding-top:0;padding-right:var(--button-padding-right, 0.5rem);padding-bottom:0;padding-left:var(--button-padding-left, 0.5rem);min-height:2.25rem;width:100%}button:disabled.outlined{border-color:rgba(var(--contrast-1700), 0.2)}button:not(:disabled){transition:color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;color:var(--mdc-theme-on-surface);background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-normal)}button:not(:disabled):focus{outline:none}button:not(:disabled):focus-visible{outline:none;box-shadow:var(--shadow-depth-8-focused)}button:not(:disabled):hover{color:var(--mdc-theme-on-surface);background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-hovered)}button:not(:disabled):active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}:host(limel-button[primary]) button:not(:disabled){color:var(--mdc-theme-on-primary, rgb(var(--color-white)));background-color:var(--mdc-theme-primary, rgb(var(--color-teal-default)))}:host(limel-button[primary]) button:disabled{background-color:rgba(var(--contrast-1700), 0.15)}:host(limel-button:not([primary])) button:not(:disabled){color:var(--mdc-theme-primary, rgb(var(--color-teal-default)))}:host(limel-button:not([primary])) button:disabled{color:rgba(var(--contrast-1600), 0.37);background-color:rgba(var(--contrast-1600), 0.1)}.icon{width:1.25rem;flex-shrink:0}.label{font-size:0.875rem;font-weight:600;letter-spacing:0.03125rem;padding:0 0.25rem}limel-spinner{position:absolute}limel-icon{vertical-align:top}svg{height:1.875rem;opacity:0;pointer-events:none;position:absolute;width:1.875rem}svg line{stroke:rgb(var(--color-white));stroke-width:2}limel-icon,.label,limel-spinner,svg{transition:opacity 300ms ease-in-out}.loading limel-icon,.loading .label{opacity:0}.loading limel-spinner{opacity:1}.just-loaded limel-icon,.just-loaded .label,.just-failed limel-icon,.just-failed .label{opacity:0}.just-loaded svg,.just-failed svg{opacity:1}.just-failed{background-color:var(--lime-error-text-color) !important;animation:shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both}.outlined{border:1px solid;border-color:var(--mdc-theme-primary)}@keyframes shake{10%,90%{transform:translate3d(-0.0625rem, 0, 0)}20%,80%{transform:translate3d(0.125rem, 0, 0)}30%,50%,70%{transform:translate3d(-0.1875rem, 0, 0)}40%,60%{transform:translate3d(0.1875rem, 0, 0)}}@keyframes reduced-presence{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.7)}}:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded){animation:reduced-presence 0.3s ease forwards;transition:padding 0.3s ease, min-width 0.3s ease;transition-delay:0.3s;padding:0;min-width:0}:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded) .label{transition:font-size 0.8s ease;transition-delay:0.3s;font-size:0;opacity:0}:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded) limel-icon,:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded) limel-spinner,:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded) svg,:host(.has-reduced-presence) button[disabled]:not(.loading):not(.just-loaded) .icon{transition:all 0.3s ease;transition-delay:0.3s;opacity:0;width:0;height:0}';const i=class{constructor(e){r(this,e);this.label=undefined;this.primary=false;this.outlined=false;this.icon=undefined;this.disabled=false;this.loading=false;this.loadingFailed=false;this.justLoaded=false}componentWillLoad(){t(this.host)}disconnectedCallback(){a(this.host)}render(){return e("button",{class:{loading:this.loading,"just-loaded":this.justLoaded&&!this.loadingFailed,"just-failed":this.justLoaded&&this.loadingFailed,outlined:this.outlined},disabled:this.disabled||this.loading},this.renderIcon(),this.renderLabel(),this.renderSpinner(),e("svg",{viewBox:"0 0 30 30"},this.renderLoadingIcons()))}loadingWatcher(r,e){if(e&&!r){this.justLoaded=true;const r=2e3;this.justLoadedTimeout=window.setTimeout((()=>{this.justLoaded=false}),r)}else if(r){this.justLoaded=false;window.clearTimeout(this.justLoadedTimeout)}}renderLoadingIcons(){if(this.loadingFailed){return[e("line",{x1:"9",y1:"9",x2:"21",y2:"21"}),e("line",{x1:"21",y1:"9",x2:"9",y2:"21"})]}return[e("line",{x1:"8",y1:"14",x2:"15",y2:"20"}),e("line",{x1:"23",y1:"9",x2:"14",y2:"20"})]}renderIcon(){if(!this.icon){return}return e("limel-icon",{class:"icon",name:this.icon})}renderLabel(){if(!this.label){return}return e("span",{class:"label"},this.label)}renderSpinner(){if(!this.loading){return}return e("limel-spinner",{limeBranded:false})}get host(){return o(this)}static get watchers(){return{loading:["loadingWatcher"]}}};i.style=n;const s=":host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--mdc-theme-error:var(\n      --lime-error-background-color,\n      rgb(var(--color-red-dark))\n  );--lime-error-text-color:rgb(var(--color-red-darker));--mdc-theme-surface:var(\n      --lime-surface-background-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-surface:var(\n      --lime-on-surface-color,\n      rgb(var(--contrast-1500))\n  )}:host(limel-spinner){display:block}@keyframes spin{50%{transform:rotate(180deg)}100%{transform:rotate(720deg)}}@keyframes fade-in-the-spinner{0%{transform:scale(0.7);opacity:0}100%{transform:scale(1);opacity:1}}@keyframes animate-colored-circles{5%{stroke-dashoffset:0}10%,100%{stroke-dashoffset:63}}:host([hidden]){display:none}:host{box-sizing:border-box;display:flex;align-items:center;justify-content:center;height:1.5rem;width:1.5rem;transform:translate3d(0, 0, 0);animation:fade-in-the-spinner 0.5s ease forwards}:host([size=x-small]){height:2rem;width:2rem}:host([size=small]){height:2.125rem;width:2.125rem}:host([size=medium]){height:2.75rem;width:2.75rem}:host([size=large]){height:4rem;width:4rem}.spinner{animation:spin 1s linear infinite;transform-origin:center}.color{animation:animate-colored-circles 10s linear infinite;fill:none;stroke-dasharray:63;stroke-dashoffset:63;stroke-linecap:round;stroke-width:4}.color.thick{stroke-width:10}.color:nth-child(1){stroke:var(--spinner-color-1, rgb(var(--lime-brand-color-deep-red)))}.color:nth-child(2){stroke:var(--spinner-color-2, rgb(var(--lime-brand-color-sellable-orange)));animation-delay:1s}.color:nth-child(3){stroke:var(--spinner-color-3, rgb(var(--lime-brand-color-simple-blue)));animation-delay:2s}.color:nth-child(4){stroke:var(--spinner-color-4, rgb(var(--lime-brand-color-orange)));animation-delay:3s}.color:nth-child(5){stroke:var(--spinner-color-5, rgb(var(--lime-brand-color-lime-green)));animation-delay:4s}.color:nth-child(6){stroke:var(--spinner-color-6, rgb(var(--lime-brand-color-yellow)));animation-delay:5s}.color:nth-child(7){stroke:var(--spinner-color-7, rgb(var(--lime-brand-color-flexible-turquoise)));animation-delay:6s}.color:nth-child(8){stroke:var(--spinner-color-8, rgb(var(--lime-brand-color-loving-magenta)));animation-delay:7s}.color:nth-child(9){stroke:var(--spinner-color-9, rgb(var(--lime-brand-color-dark-blue)));animation-delay:8s}.color:nth-child(10){stroke:var(--spinner-color-9, rgb(var(--lime-brand-color-light-grey)));animation-delay:9s}.outline{stroke:rgba(var(--lime-brand-color-light-grey), 0.3);fill:none;stroke-linecap:round;stroke-width:4}.outline.thick{stroke-width:10}";const c=class{constructor(e){r(this,e);this.size="mini";this.limeBranded=true}render(){return[e("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},this.renderSpinner())]}renderSpinner(){if(!this.limeBranded){return e("g",null,e("circle",{class:"outline",cx:"12",cy:"12",r:"10"}),e("g",{class:"spinner"},e("circle",{class:"color",cx:"12",cy:"12",r:"10"}),e("circle",{class:"color",cx:"12",cy:"12",r:"10"}),e("circle",{class:"color",cx:"12",cy:"12",r:"10"}),e("circle",{class:"color",cx:"12",cy:"12",r:"10"}),e("circle",{class:"color",cx:"12",cy:"12",r:"10"}),e("circle",{class:"color",cx:"12",cy:"12",r:"10"}),e("circle",{class:"color",cx:"12",cy:"12",r:"10"}),e("circle",{class:"color",cx:"12",cy:"12",r:"10"}),e("circle",{class:"color",cx:"12",cy:"12",r:"10"}),e("circle",{class:"color",cx:"12",cy:"12",r:"10"}),e("circle",{class:"color",cx:"12",cy:"12",r:"10"})))}return e("g",null,e("g",{"clip-path":"url(#mask)"},e("circle",{class:"outline thick",cx:"12",cy:"12",r:"12"}),e("g",{class:"spinner"},e("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),e("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),e("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),e("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),e("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),e("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),e("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),e("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),e("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),e("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}),e("circle",{class:"color thick",cx:"12",cy:"12",r:"12"}))),e("clipPath",{id:"mask"},e("path",{d:"M2.166 11.248C2.166 5.04 7.058 0 13.083 0 19.108 0 24 5.04 24 11.248c0 3.229-1.307 6.548-4.533 9.306-3.908 3.343-9.15 3.8-17.254 3.249-2.405-.164-2.753-.588-1.51-1.533C4.61 19.3 2.165 17.025 2.165 11.248zm3.124 9.834c5.563.227 9.416-.246 12.397-2.76 2.432-2.05 3.482-4.56 3.51-7.074.05-4.613-3.636-8.36-8.114-8.36-4.478 0-8.114 3.746-8.114 8.36 0 2.793.607 4.737.726 6.345.092 1.252.03 2.388-.405 3.49z"})))}};c.style=s;export{i as limel_button,c as limel_spinner};
//# sourceMappingURL=limel-button_2.entry.js.map