import{r as e,h as i}from"./index-6156b4fd.js";const l=class{constructor(i){e(this,i);this.handleFilesSelected=e=>{this.files=[...this.files.concat(e.detail)]};this.handleRemove=e=>{this.files=this.files.filter((i=>i.id!==e.detail))};this.setDisabled=e=>{e.stopPropagation();this.disabled=!!e.detail};this.setReadonly=e=>{e.stopPropagation();this.readonly=!!e.detail};this.setMultiple=e=>{e.stopPropagation();this.multiple=!!e.detail};this.disabled=false;this.readonly=false;this.multiple=false;this.files=[]}render(){return[i("limel-file-input",{onFilesSelected:this.handleFilesSelected,accept:"image/*",disabled:this.disabled||this.readonly,multiple:this.multiple},i("limel-button",{label:"Select an image"})),this.files.map((e=>i("limel-chip",{identifier:e.id,text:e.filename,icon:e.icon,disabled:this.disabled,readonly:this.readonly,removable:true,onRemove:this.handleRemove}))),i("limel-example-controls",null,i("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),i("limel-checkbox",{checked:this.readonly,label:"Readonly",onChange:this.setReadonly}),i("limel-checkbox",{checked:this.readonly,label:"Multiple",onChange:this.setMultiple})),i("limel-example-value",{value:this.files})]}};export{l as limel_example_file_input_type_filtering};
//# sourceMappingURL=limel-example-file-input-type-filtering.entry.js.map