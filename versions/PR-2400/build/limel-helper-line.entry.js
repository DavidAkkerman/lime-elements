import{r as e,h as t,H as i}from"./index-6156b4fd.js";const r=":host(limel-helper-line){transition:opacity 0.2s ease;box-sizing:border-box;display:none;justify-content:space-between;gap:0.75rem;padding:0 0.25rem;margin-bottom:0.5rem;min-width:0;font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;font-weight:400;letter-spacing:0.0333333333em;line-height:normal;color:rgb(var(--contrast-1200))}:host(limel-helper-line.show){display:flex}:host(limel-helper-line.invalid) .helper-text{color:var(--mdc-theme-error)}.helper-text{padding-right:0.25rem;padding-left:0.75rem}.counter{flex-shrink:0;margin-left:auto;padding-right:0.75rem;padding-left:0.25rem}.helper-text,.counter{padding-top:0.125rem;padding-bottom:0.125rem;backdrop-filter:blur(0.25rem);-webkit-backdrop-filter:blur(0.25rem)}";const n=class{constructor(i){e(this,i);this.hasContent=()=>{if(this.maxLength||this.helperText.length>0||this.helperText!==null||this.helperText!==undefined){return true}};this.renderHelperText=()=>{if(!this.helperText){return}return t("span",{class:"helper-text",id:this.helperTextId},this.helperText)};this.renderCharacterCounter=()=>{const e=`${this.length} / ${this.maxLength}`;if(!this.maxLength){return}return t("span",{class:"counter"},e)};this.helperText=undefined;this.length=undefined;this.maxLength=undefined;this.invalid=false;this.helperTextId=undefined}render(){return t(i,{tabIndex:-1,class:{invalid:this.invalid,show:this.hasContent()},"aria-hidden":!this.hasContent()},this.renderHelperText(),this.renderCharacterCounter())}};n.style=r;export{n as limel_helper_line};
//# sourceMappingURL=limel-helper-line.entry.js.map