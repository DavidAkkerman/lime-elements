import{r as t,h as e}from"./index-2626b3b7.js";const i=class{constructor(e){t(this,e);this.handleEvent=t=>{this.eventPrinter.writeEvent(t)};this.handleChange=t=>{this.props=t.detail};this.schema=undefined;this.props={label:"My button",primary:true,outlined:false,icon:"dog",disabled:false,loading:false}}componentWillLoad(){this.schema=Object.assign(Object.assign({},this.schema),{lime:{layout:{type:"grid"}}})}render(){return[e("limel-button",Object.assign({},this.props,{onClick:this.handleEvent})),this.renderForm(),e("limel-example-event-printer",{ref:t=>this.eventPrinter=t})]}renderForm(){return e("limel-example-controls",{style:{"--example-controls-column-layout":"auto-fit"}},e("limel-form",{schema:this.schema,value:this.props,onChange:this.handleChange}))}};export{i as limel_example_button_composite};
//# sourceMappingURL=limel-example-button-composite.entry.js.map