import{r as e,h as i}from"./index-a55db97c.js";const t=class{constructor(i){e(this,i),this.handleChange=e=>{this.value=e.detail,this.checkValidity()},this.setFormatNumber=e=>{this.formatNumber=e.detail},this.setDisabled=e=>{this.disabled=e.detail},this.setReadonly=e=>{e.stopPropagation(),this.readonly=e.detail},this.setRequired=e=>{e.stopPropagation(),this.required=e.detail},this.required=!1,this.disabled=!1,this.readonly=!1,this.invalid=!1,this.formatNumber=!0,this.value=void 0}render(){return[i("limel-input-field",{label:"Number Field Label",value:this.value,type:"number",formatNumber:this.formatNumber,disabled:this.disabled,readonly:this.readonly,invalid:this.invalid,required:this.required,onChange:this.handleChange}),i("kompendium-example-controls",null,i("limel-checkbox",{checked:this.formatNumber,label:"Format value",onChange:this.setFormatNumber}),i("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),i("limel-checkbox",{checked:this.readonly,label:"Readonly",onChange:this.setReadonly}),i("limel-checkbox",{checked:this.required,label:"Required",onChange:this.setRequired})),i("kompendium-example-value",{value:this.value})]}checkValidity(){this.invalid=this.required&&!this.value}static get watchers(){return{required:["checkValidity"]}}};export{t as limel_example_input_field_number}