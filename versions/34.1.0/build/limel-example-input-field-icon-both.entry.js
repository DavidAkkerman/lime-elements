import{r as i,h as e}from"./index-a7da85d2.js";let t=class{constructor(e){i(this,e),this.handleChange=i=>{this.value=i.detail},this.onAction=()=>{window.open(this.value)}}render(){return e("limel-input-field",{label:"Website",type:"url",value:this.value,leadingIcon:"globe",trailingIcon:"external_link",onChange:this.handleChange,onAction:this.onAction})}};export{t as limel_example_input_field_icon_both}