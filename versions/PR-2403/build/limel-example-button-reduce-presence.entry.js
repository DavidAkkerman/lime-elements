import{r as e,h as s}from"./index-f1b3d5fb.js";const t=class{constructor(s){e(this,s);this.loading=false;this.disabled=false}render(){return s("limel-button",{class:"has-reduced-presence",label:"Click me!",primary:true,loading:this.loading,disabled:this.disabled,onClick:this.onClick})}onClick(){this.disabled=true;this.loading=true;const e=1e3;const s=5e3;setTimeout((()=>{this.loading=false;setTimeout((()=>{this.disabled=false}),s)}),e)}};export{t as limel_example_button_reduce_presence};
//# sourceMappingURL=limel-example-button-reduce-presence.entry.js.map