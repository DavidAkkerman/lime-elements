import{r as e,h as l}from"./index-6156b4fd.js";const s=class{constructor(l){e(this,l);this.factor=100;this.minValue=0;this.maxValue=1;this.changeHandler=e=>{this.value=e.detail};this.setDisabled=e=>{e.stopPropagation();this.disabled=e.detail};this.setReadonly=e=>{e.stopPropagation();this.readonly=e.detail};this.disabled=false;this.readonly=false;this.value=.25}render(){return[l("limel-slider",{class:"displays-percentage-colors",label:"Slider with percentage colors",unit:" %",value:this.value,factor:this.factor,valuemax:this.maxValue,valuemin:this.minValue,disabled:this.disabled,readonly:this.readonly,onChange:this.changeHandler}),l("limel-example-controls",null,l("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),l("limel-checkbox",{checked:this.readonly,label:"Readonly",onChange:this.setReadonly})),l("limel-example-value",{value:this.value})]}};export{s as limel_example_slider_multiplier_percentage_colors};
//# sourceMappingURL=limel-example-slider-multiplier-percentage-colors.entry.js.map