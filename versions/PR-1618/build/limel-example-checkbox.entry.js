import{r as e,h as i}from"./index-11aed7da.js";let l=class{constructor(i){e(this,i),this.disabled=!1,this.required=!1,this.value=!1,this.indeterminate=!1,this.handleChange=e=>{this.value=e.detail,this.indeterminate=!1,this.eventPrinter.writeEvent(e)},this.setDisabled=e=>{e.stopPropagation(),this.disabled=e.detail},this.setRequired=e=>{e.stopPropagation(),this.required=e.detail},this.setChecked=e=>{e.stopPropagation(),this.value=e.detail},this.setIndeterminate=e=>{e.stopPropagation(),this.indeterminate=e.detail}}render(){return i("section",null,i("div",null,i("limel-checkbox",{disabled:this.disabled,label:"My fab checkbox",id:"fab",checked:this.value,indeterminate:this.indeterminate,required:this.required,onChange:this.handleChange})),i("p",null,i("limel-flex-container",{justify:"end"},i("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),i("limel-checkbox",{checked:this.required,label:"Required",onChange:this.setRequired}),i("limel-checkbox",{checked:this.value,label:"Checked",onChange:this.setChecked}),i("limel-checkbox",{checked:this.indeterminate,label:"Indeterminate",onChange:this.setIndeterminate}))),i("limel-example-value",{label:"Checked",value:this.value}),i("limel-example-value",{label:"Indeterminate",value:this.indeterminate}),i("limel-example-event-printer",{ref:e=>this.eventPrinter=e}))}};l.style="div{display:flex;justify-content:space-between}";export{l as limel_example_checkbox}