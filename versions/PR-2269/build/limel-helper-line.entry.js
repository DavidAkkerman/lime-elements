import{r as i,h as t,H as s}from"./index-a55db97c.js";const e=class{constructor(s){i(this,s),this.hasContent=()=>{if(this.maxLength||this.helperText.length>0||null!==this.helperText||void 0!==this.helperText)return!0},this.renderHelperText=()=>{if(this.helperText)return t("span",{class:"helper-text",id:this.helperTextId},this.helperText)},this.renderCharacterCounter=()=>{if(this.maxLength)return t("span",{class:"counter"},`${this.length} / ${this.maxLength}`)},this.helperText=void 0,this.length=void 0,this.maxLength=void 0,this.invalid=!1,this.helperTextId=void 0}render(){return t(s,{tabIndex:-1,class:{invalid:this.invalid,show:this.hasContent()},"aria-hidden":!this.hasContent(),id:this.helperTextId},this.renderHelperText(),this.renderCharacterCounter())}};e.style=":host(limel-helper-line){transition:opacity 0.2s ease;box-sizing:border-box;display:none;justify-content:space-between;gap:0.75rem;padding:0.125rem 1rem 0 1rem;min-width:0;font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;font-weight:400;letter-spacing:0.0333333333em;line-height:normal;color:rgb(var(--contrast-1200))}:host(limel-helper-line.show){display:flex}:host(limel-helper-line.invalid) .helper-text{color:var(--mdc-theme-error)}.counter{flex-shrink:0;margin-left:auto}";export{e as limel_helper_line}