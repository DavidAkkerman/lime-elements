import{r as e,h as i}from"./index-6156b4fd.js";const t=":host{display:flex;flex-direction:column;gap:1.5rem}limel-input-field,div{min-height:10rem;background-color:rgb(var(--contrast-100));border-radius:0.5rem}div{display:flex;align-items:center;justify-content:center;border:1px solid rgb(var(--contrast-800))}";const l=class{constructor(i){e(this,i);this.handleChange=e=>{this.value=e.detail};this.handleAcceptedFiles=e=>{this.files=[...this.files.concat(e.detail)]};this.handleRejectedFiles=e=>{this.rejectedFiles=[...this.rejectedFiles.concat(e.detail)]};this.files=[];this.required=false;this.disabled=false;this.readonly=false;this.value=undefined;this.rejectedFiles=[]}render(){const e=500;return[i("limel-file-dropzone",{onFilesSelected:this.handleAcceptedFiles,onFilesRejected:this.handleRejectedFiles,accept:"image/*",text:"Drop pictures here"},i("limel-input-field",{label:"Dream pet description",type:"textarea",placeholder:"What is your dream pet? Describe it here and attach a picture of it.",helperText:"To attach files, simply drag & drop them here!",maxlength:e,value:this.value,required:this.required,onChange:this.handleChange,disabled:this.disabled,readonly:this.readonly})),i("limel-file-dropzone",{onFilesSelected:this.handleAcceptedFiles,onFilesRejected:this.handleRejectedFiles,text:"Drop video or pictures here",helperText:"Only image and video files are accepted!",accept:"image/*, video/*"},i("div",null,i("p",null,"Upload a picture or a video"))),this.files.map((e=>i("limel-chip",{text:e.filename,icon:e.icon}))),i("limel-example-value",{value:this.files}),i("limel-example-value",{value:this.rejectedFiles})]}};l.style=t;export{l as limel_example_file_dropzone_type_filtering};
//# sourceMappingURL=limel-example-file-dropzone-type-filtering.entry.js.map