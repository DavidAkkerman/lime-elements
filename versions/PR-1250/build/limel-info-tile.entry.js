import{r as n,h as e}from"./index-a55db97c.js";const i=class{constructor(i){n(this,i),this.renderPrefix=()=>{if(this.prefix)return e("span",{class:"prefix"},this.prefix)},this.renderValue=()=>{const n=this.value.toString().length;if(this.value)return e("span",{class:{value:!0,[`ch-${n}`]:!0}},this.value)},this.renderSuffix=()=>{if(this.suffix)return e("span",{class:"suffix"},this.suffix)},this.renderIcon=()=>{if(this.icon)return e("limel-icon",{class:"icon",name:this.icon})},this.renderProgress=()=>{var n,i;if((null===(n=this.progress)||void 0===n?void 0:n.value)||0===(null===(i=this.progress)||void 0===i?void 0:i.value))return e("limel-circular-progress",{class:"progress",prefix:this.progress.prefix,value:this.progress.value,suffix:this.progress.suffix,maxValue:this.progress.maxValue,displayPercentageColors:this.progress.displayPercentageColors})},this.renderLabel=()=>{if(this.label)return e("span",{class:"label"},this.label)},this.renderNotification=()=>{if(this.badge)return e("limel-badge",{label:this.badge})},this.renderSpinner=()=>{if(this.loading)return e("limel-linear-progress",{indeterminate:!0})},this.value=void 0,this.icon=void 0,this.label=null,this.prefix=void 0,this.suffix=void 0,this.disabled=!1,this.badge=void 0,this.loading=!1,this.link=void 0,this.progress=void 0}render(){var n,i,r,o,t,s,l,a,c,f;const h=this.checkProps(null==this?void 0:this.prefix)+this.value+" "+this.checkProps(null==this?void 0:this.suffix)+this.checkProps(null==this?void 0:this.label)+". "+this.checkProps(null===(n=null==this?void 0:this.progress)||void 0===n?void 0:n.prefix)+this.checkProps(null===(i=null==this?void 0:this.progress)||void 0===i?void 0:i.value)+this.checkProps(null===(r=null==this?void 0:this.progress)||void 0===r?void 0:r.suffix)+this.checkProps(null===(o=null==this?void 0:this.link)||void 0===o?void 0:o.title),d=this.disabled?"#":null===(t=this.link)||void 0===t?void 0:t.href;return[e("a",{title:null===(s=this.link)||void 0===s?void 0:s.title,href:d,target:null===(l=this.link)||void 0===l?void 0:l.target,tabindex:"0","aria-label":h,"aria-disabled":this.disabled,class:{"is-clickable":!!(null===(a=this.link)||void 0===a?void 0:a.href)&&!this.disabled,"has-circular-progress":!!(null===(c=this.progress)||void 0===c?void 0:c.value)||0===(null===(f=this.progress)||void 0===f?void 0:f.value)}},this.renderIcon(),this.renderProgress(),e("div",{class:"value-group"},this.renderPrefix(),e("div",{class:"value-and-suffix"},this.renderValue(),this.renderSuffix()),this.renderSpinner()),this.renderLabel()),this.renderNotification()]}checkProps(n){return n?n+" ":""}};i.style="/*\n * This file is imported into every component!\n *\n * Nothing in this file may output any CSS\n * without being explicitly called by outside code.\n */\n/**\n* @prop --info-tile-border-radius: defines the radius of corners of the info-tile. Defaults to `1rem`\n* @prop --info-tile-icon-color: defines the fill color of the info-tile icon. Defaults to `--contrast-1000`\n* @prop --info-tile-text-color: defines the color of the info-tile label. Defaults to `--contrast-1100`\n* @prop --info-tile-background-color: defines the backgrounds color of the info-tile icon. Defaults to `--contrast-100`\n* @prop --info-tile-badge-text-color: Text color of the notification badge. Defaults to `--color-white`\n* @prop --info-tile-badge-background-color: Background color of the notification badge. Defaults to `--color-red-default`\n* @prop --info-tile-progress-fill-color: Determines the color of the progressed section. Defaults to `--lime-primary-color`.\n* @prop --info-tile-progress-background-color: Determines the background color of the central section of the progress bar. Defaults to `--info-tile-background-color`.\n* @prop --info-tile-progress-suffix-color: Determines the color of the progress prefix. Defaults to `--contrast-1000`.\n * @prop --info-tile-progress-text-color: Determines the color of the progress value. Defaults to `--info-tile-text-color`.\n * @prop --info-tile-progress-prefix-color: Determines the color of the progress suffix. Defaults to `--contrast-1000`.\n*/\n:host(limel-info-tile) {\n  --badge-text-color: var(\n      --info-tile-badge-text-color,\n      rgb(var(--color-white))\n  );\n  --badge-background-color: var(\n      --info-tile-badge-background-color,\n      rgb(var(--color-red-default))\n  );\n  --circular-progress-text-color: var(\n      --info-tile-progress-text-color,\n      var(--info-tile-text-color)\n  );\n  --circular-progress-suffix-color: var(--info-tile-progress-suffix-color);\n  --circular-progress-prefix-color: var(--info-tile-progress-prefix-color);\n  --circular-progress-track-color: rgb(var(--contrast-800), 0.3);\n  --circular-progress-fill-color: var(--info-tile-progress-fill-color);\n  --circular-progress-background-color: var(\n      --info-tile-progress-background-color,\n      var(--info-tile-background-color)\n  );\n  --label-min-size: 0.75rem;\n  --label-preferred-size: 6cqw;\n  --label-max-size: 1rem;\n  --value-min-size: 1rem;\n  --value-preferred-size: 20cqw;\n  --value-max-size: 4rem;\n  --suffix-prefix-min-size: 0.75rem;\n  --suffix-prefix-preferred-size: 8cqw;\n  --suffix-prefix-max-size: 1.5rem;\n  --icon-min-size: 2rem;\n  --icon-preferred-size: 60cqh;\n  --icon-max-size: calc(100cqw - 0.5rem);\n  isolation: isolate;\n  container-type: size;\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n:host(limel-info-tile) * {\n  box-sizing: border-box;\n}\n\n:host(limel-info-tile[disabled]) a {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\na {\n  all: unset;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n  height: 100%;\n  width: 100%;\n  flex-grow: 1;\n  padding: 0.25rem 1rem 0.5rem 1rem;\n  border-radius: var(--info-tile-border-radius, 1rem);\n  background-color: var(--info-tile-background-color, rgb(var(--contrast-100)));\n}\na.is-clickable {\n  transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;\n  box-shadow: var(--button-shadow-normal);\n  cursor: pointer;\n}\na.is-clickable:hover {\n  box-shadow: var(--button-shadow-hovered);\n}\na.is-clickable:active {\n  box-shadow: var(--button-shadow-pressed);\n  transform: translate3d(0, 0.08rem, 0);\n}\na.is-clickable:focus {\n  outline: none;\n}\na.is-clickable:focus-visible {\n  outline: none;\n  box-shadow: var(--shadow-depth-8-focused);\n}\n\n.icon {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.75rem;\n  padding: 0.25rem;\n  display: flex;\n  justify-content: center;\n  color: var(--info-tile-icon-color, rgb(var(--contrast-1000)));\n  border-radius: 0;\n  height: clamp(var(--icon-min-size), var(--icon-preferred-size), var(--icon-max-size));\n}\n@supports not (container-type: size) {\n  .icon {\n    height: min(60%, var(--icon-max-size));\n  }\n}\n.has-circular-progress .icon {\n  top: unset;\n  bottom: 0.5rem;\n  --icon-min-size: 1.5rem;\n  --icon-preferred-size: 20cqh;\n}\n\n.progress {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  --circular-progress-size: min(\n      var(--icon-preferred-size),\n      var(--icon-max-size)\n  );\n}\n\n.label {\n  z-index: 1;\n  color: var(--info-tile-text-color, rgb(var(--contrast-1100)));\n  line-height: normal;\n  font-size: clamp(var(--label-min-size), var(--label-preferred-size), var(--label-max-size));\n}\n@supports not (container-type: size) {\n  .label {\n    font-size: 0.875rem;\n  }\n}\n\nlimel-badge {\n  position: absolute;\n  top: -0.5rem;\n  right: -0.5rem;\n}\n\nlimel-linear-progress {\n  --lime-primary-color: var(--info-tile-text-color);\n  position: absolute;\n  inset: auto 0 0 0;\n  border-radius: 1rem;\n  overflow: hidden;\n}\n\n.value-group {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  color: var(--info-tile-text-color, rgb(var(--contrast-1100)));\n}\n\n.value-and-suffix,\n.label {\n  text-shadow: 0 0 0.5rem var(--info-tile-background-color, rgb(var(--contrast-100))), 0 0 0.25rem var(--info-tile-background-color, rgb(var(--contrast-100)));\n}\n\n.value-and-suffix {\n  display: flex;\n}\n\n.prefix,\n.suffix {\n  font-size: clamp(var(--suffix-prefix-min-size), var(--suffix-prefix-preferred-size), var(--suffix-prefix-max-size));\n  opacity: 0.7;\n}\n@supports not (container-type: size) {\n  .prefix,\n.suffix {\n    font-size: 0.75rem;\n  }\n}\n\n.prefix {\n  align-self: flex-start;\n  line-height: normal;\n  transform: translateY(40%);\n}\n\n.value {\n  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.95);\n  transform-origin: left;\n  transform: translate3d(0, 0, 0) scale(1);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-weight: bold;\n  line-height: normal;\n  font-size: clamp(var(--value-min-size), var(--value-preferred-size), var(--value-max-size));\n}\n@supports not (container-type: size) {\n  .value {\n    font-size: 2.5rem;\n  }\n}\n:host(limel-info-tile[loading]) .value {\n  opacity: 0.3;\n  transform: translate3d(0, 0, 0) scale(0.9);\n}\n\n.suffix {\n  transform: translateY(10%);\n}\n\n@container (width < 8rem) {\n  .progress {\n    top: 0.25rem;\n    right: 0.25rem;\n  }\n\n  a {\n    padding: 0.375rem;\n    gap: 0.125rem;\n  }\n}\n@container (width < 18.75rem) {\n  .progress {\n    top: 0.5rem;\n    right: 0.5rem;\n  }\n\n  .icon {\n    top: 0.25rem;\n    right: 0.5rem;\n  }\n  .has-circular-progress .icon {\n    right: 0.25rem;\n    bottom: 0.25rem;\n  }\n}\n@container (width < 40.5rem) {\n  .value {\n    --value-preferred-size: 13cqw;\n  }\n  .value.ch-1, .value.ch-2, .value.ch-3, .value.ch-4 {\n    --value-preferred-size: 20cqw;\n  }\n  .value.ch-5 {\n    --value-preferred-size: 18cqw;\n  }\n  .value.ch-6 {\n    --value-preferred-size: 17cqw;\n  }\n  .value.ch-7 {\n    --value-preferred-size: 16cqw;\n  }\n  .value.ch-8 {\n    --value-preferred-size: 15cqw;\n  }\n  .value.ch-9 {\n    --value-preferred-size: 14cqw;\n  }\n}\n@container (height > 8rem) {\n  a {\n    padding-top: 0.75rem;\n    padding-bottom: 1rem;\n  }\n}\n@container (height < 8rem) and (width > 8rem) {\n  .value {\n    --value-preferred-size: 32cqh !important;\n  }\n\n  .suffix,\n.prefix {\n    --suffix-prefix-preferred-size: 16cqh !important;\n  }\n}\n@container (height > 18.75rem) {\n  .progress,\n.icon {\n    position: relative;\n    top: unset;\n    right: unset;\n  }\n\n  a {\n    align-items: center;\n    justify-content: center;\n  }\n\n  .label {\n    text-align: center;\n  }\n\n  .has-circular-progress .icon {\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    --icon-max-size: 3rem;\n  }\n}";export{i as limel_info_tile}