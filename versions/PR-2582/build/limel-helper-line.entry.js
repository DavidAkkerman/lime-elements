import{r as e,h as i,H as t}from"./index-6156b4fd.js";const s=":host(limel-helper-line){transition:opacity 0.2s ease;box-sizing:border-box;display:grid;padding:0.125rem 1rem 0 1rem;min-width:0;font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;font-weight:400;letter-spacing:0.0333333333em;line-height:normal;color:rgb(var(--contrast-1200))}div{display:flex;justify-content:space-between;gap:0.75rem;overflow:hidden}:host(limel-helper-line.invalid) .helper-text{color:var(--mdc-theme-error)}.counter{flex-shrink:0;margin-left:auto}:host(limel-helper-line){transition:grid-template-rows 0.2s cubic-bezier(1, 0.09, 0, 0.89);grid-template-rows:1fr}:host(limel-helper-line.hide){grid-template-rows:0fr}";const r=class{constructor(t){e(this,t);this.hasContent=()=>!!(this.maxLength>0||this.helperText&&this.helperText.length>0);this.renderHelperText=()=>{if(!this.helperText){return}return i("span",{class:"helper-text",id:this.helperTextId},this.helperText)};this.renderCharacterCounter=()=>{const e=`${this.length} / ${this.maxLength}`;if(!this.maxLength){return}return i("span",{class:"counter"},e)};this.helperText=undefined;this.length=undefined;this.maxLength=undefined;this.invalid=false;this.helperTextId=undefined}render(){return i(t,{tabIndex:-1,class:{invalid:this.invalid},style:!this.hasContent()?{display:"none"}:{},"aria-hidden":!this.hasContent()},i("div",null,this.renderHelperText(),this.renderCharacterCounter()))}};r.style=s;export{r as limel_helper_line};
//# sourceMappingURL=limel-helper-line.entry.js.map