import{r as e,h as i}from"./index-a55db97c.js";const t=class{constructor(i){e(this,i),this.handleChange=e=>{this.value=e.detail},this.setDisabled=e=>{e.stopPropagation(),this.disabled=e.detail},this.setReadonly=e=>{e.stopPropagation(),this.readonly=e.detail},this.setRequired=e=>{e.stopPropagation(),this.required=e.detail},this.required=!1,this.disabled=!1,this.readonly=!1,this.invalid=!1,this.value=void 0}render(){return[i("limel-input-field",{label:"Text Field",helperText:"Please enter a useful message!",maxlength:15,value:this.value,required:this.required,invalid:this.invalid,disabled:this.disabled,readonly:this.readonly,onChange:this.handleChange}),i("limel-example-controls",null,i("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),i("limel-checkbox",{checked:this.readonly,label:"Readonly",onChange:this.setReadonly}),i("limel-checkbox",{checked:this.required,label:"Required",onChange:this.setRequired}))]}checkValidity(){this.invalid=this.required&&!this.value}static get watchers(){return{required:["checkValidity"]}}};t.style=":host{display:block;padding:1rem;border-radius:0.25rem;background-color:rgb(var(--contrast-100))}limel-input-field{margin-bottom:1rem}limel-button{margin-left:0.5rem}";export{t as limel_example_input_field_text_decluttering_guidelines}