import{r as e,h as i}from"./index-6156b4fd.js";const s=class{constructor(i){e(this,i);this.minValue=15;this.maxValue=75;this.handleChange=e=>{this.value=e.detail};this.setDisabled=e=>{e.stopPropagation();this.disabled=e.detail};this.setReadonly=e=>{e.stopPropagation();this.readonly=e.detail};this.disabled=false;this.readonly=false;this.value=25}render(){return[i("limel-slider",{label:"Basic slider",unit:" %",value:this.value,valuemax:this.maxValue,valuemin:this.minValue,disabled:this.disabled,readonly:this.readonly,onChange:this.handleChange}),i("limel-example-controls",null,i("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),i("limel-checkbox",{checked:this.readonly,label:"Readonly",onChange:this.setReadonly})),i("limel-example-value",{value:this.value})]}};export{s as limel_example_slider_basic};
//# sourceMappingURL=limel-example-slider-basic.entry.js.map