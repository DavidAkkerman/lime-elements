import{r as t,c as e,h as i,H as r}from"./index-6156b4fd.js";import{g as o,a as s,b as n,c as a}from"./file-metadata-9a4780e2.js";import"./get-icon-props-0b65f85e.js";function l(t){let e={id:crypto.randomUUID(),filename:t.name,contentType:t.type,size:t.size,fileContent:t};e=Object.assign(Object.assign({},e),{icon:{name:o(e),title:s(e),color:n(e),backgroundColor:a(e)}});return e}function h(t,e){if(e===undefined||e==="*"){return true}const i=e.split(",").map((t=>t.trim()));return i.some((e=>{if(e===t.contentType){return true}if(e.endsWith("/*")){const i=e.split("/")[0];return t.contentType.startsWith(`${i}/`)}if(e.startsWith(".")){const i=e.split(".")[1];return t.contentType.endsWith(`/${i}`)}}))}const c=":host(limel-file-dropzone){position:relative;display:grid;position:relative;height:100%;width:100%}.has-file-to-drop{position:absolute;top:0;left:0;overflow:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;box-sizing:border-box;border:0.25rem dashed rgb(var(--color-gray-light));border-radius:1rem;background-color:rgb(var(--color-gray-dark));opacity:0.9;margin:0.125rem;isolation:isolate;z-index:1}.has-file-to-drop limel-icon.dropzone-icon{height:clamp(2rem, 4vh, 6rem);width:clamp(2rem, 4vh, 6rem);color:rgb(var(--contrast-800))}.has-file-to-drop .dropzone-text{font-size:clamp(1rem, 2vh, 1.75rem);padding-top:1rem;color:rgb(var(--contrast-800))}";const d=class{constructor(r){t(this,r);this.filesSelected=e(this,"filesSelected",7);this.filesRejected=e(this,"filesRejected",7);this.renderOnDragLayout=()=>{if(this.hasFileToDrop){return i("div",{class:"has-file-to-drop"},i("limel-icon",{class:"dropzone-icon",name:this.onDropLayoutIcon}),this.renderOnDragLayoutText())}};this.renderOnDragLayoutText=()=>{if(this.onDragLayoutText.length===0){return}return i("span",{class:"dropzone-text"},this.onDragLayoutText)};this.handleDrop=t=>{t.stopPropagation();t.preventDefault();this.hasFileToDrop=false;if(this.disabled){return}const e=Array.from(t.dataTransfer.files);const i=e.map(l);const r=i.filter((t=>h(t,this.accept)));const o=i.filter((t=>!h(t,this.accept)));if(r.length>0){this.filesSelected.emit(r)}if(o.length>0){this.filesRejected.emit(o)}};this.handleDragOver=t=>{this.hasFileToDrop=true;t.preventDefault()};this.handleDragLeave=t=>{this.hasFileToDrop=false;t.preventDefault()};this.accept="*";this.disabled=false;this.onDragLayoutText="";this.onDropLayoutIcon="upload_2";this.hasFileToDrop=false}render(){return i(r,{onDrop:this.handleDrop,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave},i("slot",null),this.renderOnDragLayout())}};d.style=c;export{d as limel_file_dropzone};
//# sourceMappingURL=limel-file-dropzone.entry.js.map