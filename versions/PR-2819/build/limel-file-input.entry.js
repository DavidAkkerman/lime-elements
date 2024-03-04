import{r as t,c as i,h as s,H as e,g as h}from"./index-6156b4fd.js";import{c as r}from"./random-string-812b1c35.js";import{c as n}from"./files-cdf331aa.js";import"./file-metadata-9a4780e2.js";import"./get-icon-props-0b65f85e.js";const a=class{constructor(s){t(this,s);this.filesSelected=i(this,"filesSelected",7);this.fileInputId=r();this.handleClick=t=>{if(this.disabled){t.stopPropagation();t.preventDefault();return}this.triggerFileDialog();t.stopPropagation()};this.handleKeyUp=t=>{t.stopPropagation();t.preventDefault();if(t.code==="Enter"){this.triggerFileDialog()}};this.handleFileChange=t=>{const i=Array.from(this.fileInput.files);if(i.length>0){t.stopPropagation();this.filesSelected.emit(i.map(n));this.fileInput.value=""}};this.accept="*";this.disabled=false;this.multiple=false}componentDidLoad(){this.fileInput=this.element.shadowRoot.getElementById(this.fileInputId)}render(){return s(e,{onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown},s("input",{hidden:true,id:this.fileInputId,onChange:this.handleFileChange,type:"file",accept:this.accept,disabled:this.disabled,multiple:this.multiple}),s("slot",null))}handleKeyDown(t){if(t.code==="Tab"||t.code==="Backspace"||t.code==="Enter"){return}t.preventDefault();t.stopPropagation()}triggerFileDialog(){this.fileInput.click()}get element(){return h(this)}};export{a as limel_file_input};
//# sourceMappingURL=limel-file-input.entry.js.map