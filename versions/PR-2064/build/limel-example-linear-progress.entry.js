import{r as e,h as l}from"./index-5f2797d5.js";const s=class{constructor(l){e(this,l),this.handleChange=e=>{this.value=+e.detail/100},this.value=.7}render(){return[l("limel-input-field",{label:"Value",type:"number",value:(100*this.value).toFixed(0),onChange:this.handleChange}),l("p",null,l("limel-linear-progress",{value:this.value}))]}};export{s as limel_example_linear_progress}