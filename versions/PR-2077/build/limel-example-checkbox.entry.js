import{r as e,h as i}from"./index-a55db97c.js";const h=class{constructor(i){e(this,i),this.handleChange=e=>{this.value=e.detail,this.indeterminate=!1,this.eventPrinter.writeEvent(e)},this.setDisabled=e=>{e.stopPropagation(),this.disabled=e.detail},this.setRequired=e=>{e.stopPropagation(),this.required=e.detail},this.setChecked=e=>{e.stopPropagation(),this.value=e.detail},this.setIndeterminate=e=>{e.stopPropagation(),this.indeterminate=e.detail},this.setReadonly=e=>{e.stopPropagation(),this.readonly=e.detail},this.disabled=!1,this.required=!1,this.value=!1,this.indeterminate=!1,this.readonly=!1}render(){return[i("limel-checkbox",{disabled:this.disabled,label:"My fab checkbox",id:"fab",checked:this.value,indeterminate:this.indeterminate,required:this.required,onChange:this.handleChange,readonly:this.readonly}),i("kompendium-example-controls",null,i("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),i("limel-checkbox",{checked:this.required,label:"Required",onChange:this.setRequired}),i("limel-checkbox",{checked:this.value,label:"Checked",onChange:this.setChecked}),i("limel-checkbox",{checked:this.readonly,label:"Readonly",onChange:this.setReadonly}),i("limel-checkbox",{checked:this.indeterminate,label:"Indeterminate",onChange:this.setIndeterminate})),i("kompendium-example-value",{label:"Checked",value:this.value}),i("kompendium-example-value",{label:"Indeterminate",value:this.indeterminate}),i("kompendium-example-event-printer",{ref:e=>this.eventPrinter=e})]}};h.style=":host(limel-example-checkbox){display:flex;flex-direction:column;gap:1rem}";export{h as limel_example_checkbox}