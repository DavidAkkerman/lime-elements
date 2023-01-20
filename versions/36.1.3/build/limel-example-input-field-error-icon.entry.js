import{r as e,h as t}from"./index-5f2797d5.js";const i=class{constructor(t){e(this,t),this.onChangeNative=e=>{this.valueNative=e.detail},this.onChangeConsumer=e=>{this.valueConsumer=e.detail},this.isInvalid=()=>!(!this.valueConsumer||"@test.com"===this.valueConsumer.substr(-9,9)),this.valueNative=void 0,this.valueConsumer=void 0}render(){return[t("limel-input-field",{label:"Text Field with native validation",minlength:6,helperText:"Please enter at least 6 characters!",value:this.valueNative,onChange:this.onChangeNative}),t("limel-input-field",{label:"Text Field with consumer validation",type:"email",invalid:this.isInvalid(),helperText:"Please enter an email with the domain 'test.com'",value:this.valueConsumer,onChange:this.onChangeConsumer})]}};export{i as limel_example_input_field_error_icon}