import{r as e,h as t}from"./index-11aed7da.js";let i=class{constructor(t){e(this,t),this.getInputFieldRef=e=>this.inputField=e,this.handleChange=e=>{this.value=e.detail},this.setFocus=e=>{e.stopPropagation(),e.preventDefault(),this.inputField.focus()}}render(){return[t("limel-input-field",{label:"Set focus on me!",value:this.value,onChange:this.handleChange,ref:this.getInputFieldRef,tabindex:"0"}),t("p",null,t("limel-flex-container",{justify:"end"},t("limel-button",{onClick:this.setFocus,label:"Set focus"})))]}};export{i as limel_example_input_field_focus}