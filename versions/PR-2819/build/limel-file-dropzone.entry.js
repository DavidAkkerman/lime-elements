import{r as i,c as t,h as s,H as e}from"./index-6156b4fd.js";import{c as o,i as r}from"./files-cdf331aa.js";import"./random-string-812b1c35.js";import"./file-metadata-9a4780e2.js";import"./get-icon-props-0b65f85e.js";const a=":host(limel-file-dropzone){position:relative;display:grid;position:relative;height:100%;width:100%}.has-file-to-drop{position:absolute;top:0;left:0;overflow:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;box-sizing:border-box;border:0.25rem dashed rgb(var(--color-gray-light));border-radius:1rem;background-color:rgb(var(--color-gray-dark));opacity:0.9;margin:0.125rem;isolation:isolate;z-index:1}.has-file-to-drop limel-icon.dropzone-icon{height:clamp(2rem, 4vh, 6rem);width:clamp(2rem, 4vh, 6rem);color:rgb(var(--contrast-800))}.has-file-to-drop .dropzone-text{font-size:clamp(1rem, 2vh, 1.75rem);padding-top:1rem;color:rgb(var(--contrast-800))}";const l=class{constructor(e){i(this,e);this.filesSelected=t(this,"filesSelected",7);this.filesRejected=t(this,"filesRejected",7);this.renderOnDragLayout=()=>{if(this.hasFileToDrop){return s("div",{class:"has-file-to-drop"},s("limel-icon",{class:"dropzone-icon",name:this.onDropLayoutIcon}),this.renderOnDragLayoutText())}};this.renderOnDragLayoutText=()=>{if(this.onDragLayoutText.length===0){return}return s("span",{class:"dropzone-text"},this.onDragLayoutText)};this.handleDrop=i=>{i.stopPropagation();i.preventDefault();this.hasFileToDrop=false;if(this.disabled){return}const t=Array.from(i.dataTransfer.files);const s=t.map(o);const e=s.filter((i=>r(i,this.accept)));const a=s.filter((i=>!r(i,this.accept)));if(e.length>0){this.filesSelected.emit(e)}if(a.length>0){this.filesRejected.emit(a)}};this.handleDragOver=i=>{this.hasFileToDrop=true;i.preventDefault()};this.handleDragLeave=i=>{this.hasFileToDrop=false;i.preventDefault()};this.accept="*";this.disabled=false;this.onDragLayoutText="";this.onDropLayoutIcon="upload_2";this.hasFileToDrop=false}render(){return s(e,{onDrop:this.handleDrop,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave},s("slot",null),this.renderOnDragLayout())}};l.style=a;export{l as limel_file_dropzone};
//# sourceMappingURL=limel-file-dropzone.entry.js.map