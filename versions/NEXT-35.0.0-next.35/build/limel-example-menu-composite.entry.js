import{r as t,h as e}from"./index-7dccb886.js";const i=class{constructor(e){t(this,e),this.props={badgeIcons:!0,disabled:!1,items:[{text:"Copy",icon:"copy",iconColor:"rgb(var(--color-lime-light))"},{text:"Cut",icon:"cut",iconColor:"rgb(var(--color-red-light))"},{separator:!0},{text:"Paste",disabled:!0,icon:"paste",iconColor:"rgb(var(--color-amber-default))"}],open:!1,openDirection:"right",gridLayout:!1},this.handleSelect=t=>{this.eventPrinter.writeEvent(t),this.props.items=this.props.items.map((e=>("separator"in e||(e.disabled=e.text===t.detail.text),e))),this.props=Object.assign({},this.props)},this.handleCancel=t=>{this.eventPrinter.writeEvent(t)},this.handleChange=t=>{this.props=t.detail}}componentWillLoad(){this.schema=Object.assign(Object.assign({},this.schema),{lime:{layout:{type:"grid"}}}),delete this.schema.properties.label}render(){return console.log("Composite example schema:",this.schema),[e("limel-menu",{items:this.props.items,disabled:this.props.disabled,openDirection:this.props.openDirection,badgeIcons:this.props.badgeIcons,open:this.props.open,gridLayout:this.props.gridLayout,onSelect:this.handleSelect,onCancel:this.handleCancel},e("limel-button",{label:"Menu",slot:"trigger"})),e("limel-collapsible-section",{header:"Settings"},e("limel-form",{schema:this.schema,value:this.props,onChange:this.handleChange})),e("limel-example-event-printer",{ref:t=>this.eventPrinter=t})]}};export{i as limel_example_menu_composite}