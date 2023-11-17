import{r as e,h as i}from"./index-5f2797d5.js";const l=class{constructor(i){e(this,i),this.handleEmailChange=e=>{this.emailValue=e.detail},this.handleTelChange=e=>{this.telValue=e.detail},this.handleUrlChange=e=>{this.urlValue=e.detail},this.setDisabled=e=>{e.stopPropagation(),this.disabled=e.detail},this.setReadonly=e=>{e.stopPropagation(),this.readonly=e.detail},this.setRequired=e=>{e.stopPropagation(),this.required=e.detail},this.required=!1,this.disabled=!1,this.readonly=!1,this.emailValue=void 0,this.telValue=void 0,this.urlValue=void 0}render(){return[i("limel-input-field",{label:"Email Field",value:this.emailValue,required:this.required,disabled:this.disabled,readonly:this.readonly,onChange:this.handleEmailChange,type:"email",showLink:!0}),i("limel-input-field",{label:"Phone Field",value:this.telValue,required:this.required,disabled:this.disabled,readonly:this.readonly,onChange:this.handleTelChange,type:"tel",showLink:!0}),i("limel-input-field",{label:"URL Field",value:this.urlValue,required:this.required,disabled:this.disabled,readonly:this.readonly,onChange:this.handleUrlChange,type:"url",showLink:!0}),i("limel-input-field",{label:"urlAsText",value:this.urlValue,required:this.required,disabled:this.disabled,readonly:this.readonly,onChange:this.handleUrlChange,type:"urlAsText",showLink:!0}),i("p",null,i("limel-flex-container",{justify:"end"},i("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),i("limel-checkbox",{checked:this.readonly,label:"Readonly",onChange:this.setReadonly}),i("limel-checkbox",{checked:this.required,label:"Required",onChange:this.setRequired}))),i("limel-example-value",{value:this.emailValue}),i("limel-example-value",{value:this.telValue}),i("limel-example-value",{value:this.urlValue})]}};l.style="limel-input-field{margin-bottom:1rem}";export{l as limel_example_input_field_showlink}