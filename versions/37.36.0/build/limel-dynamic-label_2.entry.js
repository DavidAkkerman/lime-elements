import{r as e,h as i,H as t}from"./index-6156b4fd.js";import{g as r}from"./get-icon-props-0b65f85e.js";const s='@charset "UTF-8";*{box-sizing:border-box;min-width:0}:host(limel-dynamic-label){--limel-dynamic-label-min-height:1.75rem;display:flex;gap:0.5rem;align-items:center;border-radius:0.5rem;min-width:0}limel-icon{--limel-icon-svg-margin:0.125rem;border-radius:0.25rem;flex-shrink:0;width:var(--limel-dynamic-label-min-height);color:rgb(var(--contrast-900))}span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;flex-grow:1;font-size:0.8125rem;color:var(--mdc-theme-on-surface)}';const l=class{constructor(i){e(this,i);this.value=undefined;this.defaultLabel={};this.labels=[]}render(){var e,i;const t=this.labels.find((e=>e.value===this.value));return[this.renderIcon((e=t===null||t===void 0?void 0:t.icon)!==null&&e!==void 0?e:this.defaultLabel.icon),this.renderLabel((i=t===null||t===void 0?void 0:t.text)!==null&&i!==void 0?i:this.defaultLabel.text)]}renderIcon(e){const t=r(e);if(!t){return}let s;let l;if(typeof e==="object"){s=e.color;l=e.backgroundColor}const n={role:"presentation",name:t,style:{color:s,"background-color":l}};return i("limel-icon",Object.assign({},n))}renderLabel(e=""){return i("span",null,e)}};l.style=s;const n=":host(limel-helper-line){transition:opacity 0.2s ease;box-sizing:border-box;display:grid;min-width:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;line-height:normal;color:rgb(var(--contrast-1200))}div{display:flex;justify-content:space-between;gap:0.75rem;overflow:hidden;padding:0 1rem}:host(limel-helper-line.invalid) .helper-text{color:var(--mdc-theme-error)}.counter{flex-shrink:0;margin-left:auto}.helper-text,.counter{padding-top:0.125rem}:host(limel-helper-line){transition:grid-template-rows var(--limel-h-l-grid-template-rows-transition-speed, 0.46s) cubic-bezier(1, 0.09, 0, 0.89);grid-template-rows:var(--limel-h-l-grid-template-rows, 1fr)}:host(limel-helper-line.hide){--limel-h-l-grid-template-rows-transition-speed:0.3s;--limel-h-l-grid-template-rows:0fr}";const o=class{constructor(t){e(this,t);this.hasContent=()=>!!(this.maxLength>0||this.helperText&&this.helperText.length>0);this.renderHelperText=()=>{if(!this.helperText){return}return i("span",{class:"helper-text",id:this.helperTextId},this.helperText)};this.renderCharacterCounter=()=>{const e=`${this.length} / ${this.maxLength}`;if(!this.maxLength){return}return i("span",{class:"counter"},e)};this.helperText=undefined;this.length=undefined;this.maxLength=undefined;this.invalid=false;this.helperTextId=undefined}render(){return i(t,{tabIndex:-1,class:{invalid:this.invalid},style:!this.hasContent()?{display:"none"}:{},"aria-hidden":!this.hasContent()},i("div",null,this.renderHelperText(),this.renderCharacterCounter()))}};o.style=n;export{l as limel_dynamic_label,o as limel_helper_line};
//# sourceMappingURL=limel-dynamic-label_2.entry.js.map