import{r,h as e,H as a}from"./index-a55db97c.js";import{a as o}from"./format-c76733cb.js";import"./_commonjsHelpers-5ec8f9b7.js";const n=class{constructor(e){r(this,e),this.label=void 0}render(){return e(a,{title:this.labelIsLarge()?this.label:"",class:{"has-large-label":this.labelIsLarge()}},e("span",null,this.renderLabel()))}renderLabel(){return"number"==typeof this.label?o(this.label):this.label}labelIsLarge(){if("number"==typeof this.label&&this.label>999||"string"==typeof this.label&&this.label.length>6)return!0}};n.style=":host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--mdc-theme-error:var(\n      --lime-error-background-color,\n      rgb(var(--color-red-dark))\n  );--lime-error-text-color:rgb(var(--color-red-darker));--mdc-theme-surface:var(\n      --lime-surface-background-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-surface:var(\n      --lime-on-surface-color,\n      rgb(var(--contrast-1500))\n  )}:host([hidden]){display:none}:host(limel-badge){--limel-min-badge-size:1rem;display:inline-flex;justify-content:center;align-items:center;flex-shrink:0;min-height:var(--limel-min-badge-size);min-width:var(--limel-min-badge-size)}span{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-font-family, Roboto, sans-serif);cursor:default;box-sizing:border-box;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:center;font-size:0.6875rem;line-height:var(--limel-min-badge-size);color:var(--badge-text-color, rgb(var(--contrast-1200)));border-radius:var(--limel-min-badge-size);max-height:var(--limel-min-badge-size);min-width:0.5rem;min-height:0.5rem;background-color:var(--badge-background-color, rgb(var(--contrast-500)))}span:not(:empty){min-width:var(--limel-min-badge-size);max-width:2.75rem;padding:0 0.28125rem}:host(.has-large-label) span{cursor:help}";export{n as limel_badge}