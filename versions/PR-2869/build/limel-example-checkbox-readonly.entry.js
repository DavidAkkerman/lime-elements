import{r as e,h as l}from"./index-6156b4fd.js";const s=class{constructor(l){e(this,l);this.setReadonly=e=>{e.stopPropagation();this.readonly=e.detail};this.setChecked=e=>{e.stopPropagation();this.value=e.detail};this.setDisabled=e=>{e.stopPropagation();this.disabled=e.detail};this.setInvalid=e=>{e.stopPropagation();this.invalid=e.detail};this.setRequired=e=>{e.stopPropagation();this.required=e.detail};this.readonly=true;this.value=true;this.disabled=false;this.invalid=false;this.required=false}render(){return[l("limel-checkbox",{disabled:this.disabled,label:"Subscribe to email newsletters",readonlyLabels:[{value:true,icon:"news",text:"Is subscribed to receive newsletters"},{value:false,icon:{name:"cancel_subscription",color:"rgb(var(--color-orange-default))"},text:"Is unsubscribed from newsletters"}],helperText:this.invalid?"Something is wrong":"",id:"1",checked:this.value,required:this.required,invalid:this.invalid,readonly:this.readonly}),l("limel-example-controls",null,l("limel-checkbox",{checked:this.readonly,label:"Readonly",onChange:this.setReadonly}),l("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),l("limel-checkbox",{checked:this.invalid,label:"Invalid",onChange:this.setInvalid}),l("limel-checkbox",{checked:this.value,label:"Checked",onChange:this.setChecked}),l("limel-checkbox",{checked:this.required,label:"Required",onChange:this.setRequired})),l("limel-example-value",{label:"Checked",value:this.value})]}};export{s as limel_example_checkbox_readonly};
//# sourceMappingURL=limel-example-checkbox-readonly.entry.js.map