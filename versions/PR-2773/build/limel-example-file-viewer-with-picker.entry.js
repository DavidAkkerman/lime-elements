import{r as e,h as i}from"./index-6156b4fd.js";const r=".view-here{margin-top:1.25rem;padding:0.75rem;height:40rem;box-shadow:var(--shadow-depth-16)}";const t=class{constructor(i){e(this,i);this.handleChange=e=>{var i;this.value=e.detail;if(!((i=this.value)===null||i===void 0?void 0:i.fileContent)){this.dataUrl="";return}URL.revokeObjectURL(this.dataUrl);this.dataUrl=URL.createObjectURL(this.value.fileContent)};this.value=undefined;this.dataUrl=""}render(){return[i("limel-file",{label:"Choose a file…",onChange:this.handleChange,value:this.value}),i("p",null,"and view it below ↓"),i("div",{class:"view-here"},this.renderFileViewer())]}renderFileViewer(){var e;if(!this.dataUrl){return}return i("limel-file-viewer",{url:this.dataUrl,filename:(e=this.value)===null||e===void 0?void 0:e.filename})}};t.style=r;export{t as limel_example_file_viewer_with_picker};
//# sourceMappingURL=limel-example-file-viewer-with-picker.entry.js.map