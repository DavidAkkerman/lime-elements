import{r as e,h as t}from"./index-2626b3b7.js";const i=class{constructor(i){e(this,i);this.handleSliderChange=e=>{this.eventPrinter.writeEvent(e);this.props=Object.assign(Object.assign({},this.props),{value:e.detail})};this.renderForm=()=>t("limel-example-controls",{style:{"--example-controls-column-layout":"auto-fit"}},t("limel-form",{schema:this.schema,value:this.props,onChange:this.handleFormChange}));this.handleFormChange=e=>{this.props=e.detail};this.schema=undefined;this.props={disabled:false,factor:1,label:"Slider",readonly:false,unit:"%",value:25,valuemin:0,valuemax:100}}componentWillLoad(){this.schema.lime={layout:{type:"grid"}}}render(){return[t("limel-slider",Object.assign({},this.props,{onChange:this.handleSliderChange})),this.renderForm(),t("limel-example-event-printer",{ref:e=>this.eventPrinter=e})]}};export{i as limel_example_slider_composite};
//# sourceMappingURL=limel-example-slider-composite.entry.js.map