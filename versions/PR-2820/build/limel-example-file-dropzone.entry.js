import{r as e,h as i}from"./index-6156b4fd.js";const l="limel-file-dropzone{min-width:3rem;min-height:10rem;background-color:rgb(var(--contrast-600));border-radius:0.5rem;border:1px solid rgb(var(--contrast-800));padding:0.25rem;margin-bottom:0.5rem}";const s=class{constructor(i){e(this,i);this.handleDrop=e=>{this.files=[...this.files.concat(e.detail)]};this.setDisabled=e=>{e.stopPropagation();this.disabled=!!e.detail};this.setReadonly=e=>{e.stopPropagation();this.readonly=!!e.detail};this.disabled=false;this.readonly=false;this.files=[{filename:"letter.docx",id:123}]}render(){return[i("limel-file-dropzone",{onFilesSelected:this.handleDrop,disabled:this.disabled||this.readonly},i("div",null,i("p",null,"This div is a dropzone"))),this.files.map((e=>i("limel-chip",{text:e.filename,icon:e.icon,disabled:this.disabled,readonly:this.readonly}))),i("limel-example-controls",null,i("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),i("limel-checkbox",{checked:this.readonly,label:"Readonly",onChange:this.setReadonly})),i("limel-example-value",{value:this.files})]}};s.style=l;export{s as limel_example_file_dropzone};
//# sourceMappingURL=limel-example-file-dropzone.entry.js.map