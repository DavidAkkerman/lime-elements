import{r as e,h as s}from"./index-f1b3d5fb.js";const l=100;const r=class{constructor(s){e(this,s);this.handleChange=e=>{this.value=+e.detail/l};this.value=.7}render(){return[s("limel-input-field",{label:"Value",type:"number",value:(this.value*l).toFixed(0),onChange:this.handleChange}),s("p",null,s("limel-linear-progress",{value:this.value}))]}};export{r as limel_example_linear_progress};
//# sourceMappingURL=limel-example-linear-progress.entry.js.map