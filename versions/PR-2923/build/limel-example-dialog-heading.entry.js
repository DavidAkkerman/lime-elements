import{r as i,h as e}from"./index-6156b4fd.js";const l=":host(limel-example-dialog-heading){--dialog-width:40rem;--dialog-heading-subtitle-color:rgb(var(--contrast-1200));--dialog-heading-icon-color:rgb(var(--color-white))}:host(limel-example-dialog-heading) limel-input-field{margin-bottom:1rem}:host(limel-example-dialog-heading) limel-dialog.company{--dialog-heading-icon-color:rgb(var(--color-sky-default))}:host(limel-example-dialog-heading) limel-dialog.person{--dialog-heading-icon-color:rgb(var(--color-orange-default))}:host(limel-example-dialog-heading) limel-dialog.deal{--dialog-heading-icon-color:rgb(var(--color-green-default))}:host(limel-example-dialog-heading) limel-dialog.todo{--header-heading-color:rgb(var(--color-teal-dark));--dialog-heading-supporting-text-color:rgb(var(--color-red-dark));--dialog-heading-icon-color:rgb(var(--color-teal-default))}";const t=class{constructor(e){i(this,e);this.icons=[{text:"Company",value:"organization"},{text:"Person",value:"user_group_man_man"},{text:"Deal",value:"money"},{text:"Todo",value:"todo_list"}];this.openDialog=()=>{this.isOpen=true};this.closeDialog=()=>{this.isOpen=false};this.handleTitleChange=i=>{this.title=i.detail};this.handleSubtitleChange=i=>{this.subtitle=i.detail};this.handleSupportingTextChange=i=>{this.supportingText=i.detail};this.handleIconChange=i=>{this.icon=i.detail};this.isOpen=false;this.title="Title";this.subtitle="Subtitle";this.supportingText=undefined;this.icon=undefined;this.icon=this.icons[0]}render(){const i={title:this.title,subtitle:this.subtitle,supportingText:this.supportingText,icon:this.icon.value};const l={[this.icon.text.toLowerCase()]:true};return[e("limel-button",{primary:true,label:"Open",onClick:this.openDialog}),e("limel-dialog",{open:this.isOpen,onClose:this.closeDialog,heading:i,class:l},e("limel-input-field",{required:true,label:"Title",value:this.title,onChange:this.handleTitleChange}),e("limel-input-field",{label:"Subtitle",value:this.subtitle,onChange:this.handleSubtitleChange}),e("limel-input-field",{label:"Supporting text",value:this.supportingText,onChange:this.handleSupportingTextChange}),e("limel-select",{required:true,options:this.icons,label:"Icon",value:this.icon,onChange:this.handleIconChange}),e("limel-button",{label:"Ok",primary:true,onClick:this.closeDialog,slot:"button"}))]}};t.style=l;export{t as limel_example_dialog_heading};
//# sourceMappingURL=limel-example-dialog-heading.entry.js.map