import{r as e,h as t}from"./index-6156b4fd.js";const s=class{constructor(t){e(this,t);this.handleChange=e=>{this.flowItems=this.flowItems.map((t=>{var s;return Object.assign(Object.assign({},t),{selected:t.value===((s=e.detail)===null||s===void 0?void 0:s.value)})}))};this.flowItems=[{value:"first",text:"First step",selected:true},{value:"second",text:"Second step"},{value:"third",text:"Third step"},{value:"fourth",text:"Fourth step",icon:"finish_flag"}]}render(){return t("limel-progress-flow",{flowItems:this.flowItems,onChange:this.handleChange,class:"is-narrow"})}};export{s as limel_example_progress_flow_narrow};
//# sourceMappingURL=limel-example-progress-flow-narrow.entry.js.map