import{r as e,h as i}from"./index-ab490ba1.js";const t=class{constructor(t){e(this,t),this.props={disabled:!1,factor:1,label:"Slider",readonly:!1,unit:"%",value:25,valuemin:0,valuemax:100},this.handleSliderChange=e=>{this.eventPrinter.writeEvent(e),this.props=Object.assign(Object.assign({},this.props),{value:e.detail})},this.renderForm=()=>i("limel-collapsible-section",{header:"Settings"},i("limel-form",{schema:this.schema,value:this.props,onChange:this.handleFormChange})),this.handleFormChange=e=>{this.props=e.detail}}render(){return[i("limel-slider",Object.assign({},this.props,{onChange:this.handleSliderChange})),this.renderForm(),i("limel-example-event-printer",{ref:e=>this.eventPrinter=e})]}};export{t as limel_example_slider_composite}