import{r as e,h as t}from"./index-6156b4fd.js";const i=class{constructor(t){e(this,t);this.handleSelect=e=>{this.eventPrinter.writeEvent(e);this.props.items=this.props.items.map((t=>{if(!("separator"in t)){t.disabled=t.text===e.detail.text}return t}));this.props=Object.assign({},this.props)};this.handleCancel=e=>{this.eventPrinter.writeEvent(e)};this.handleChange=e=>{this.props=e.detail};this.schema=undefined;this.props={badgeIcons:true,disabled:false,items:[{text:"Copy",icon:{name:"copy",color:"rgb(var(--color-lime-light))"}},{text:"Cut",icon:{name:"cut",color:"rgb(var(--color-red-light))"}},{separator:true},{text:"Paste",disabled:true,icon:{name:"paste",color:"rgb(var(--color-amber-default))"}}],open:false,openDirection:"right",gridLayout:false}}componentWillLoad(){this.schema=Object.assign(Object.assign({},this.schema),{lime:{layout:{type:"grid"}}});delete this.schema.properties.currentSubMenu;delete this.schema.properties.searcher;delete this.schema.properties.loadSubItems;delete this.schema.properties.surfaceWidth}render(){console.log("Composite example schema:",this.schema);return[t("limel-menu",{items:this.props.items,disabled:this.props.disabled,openDirection:this.props.openDirection,badgeIcons:this.props.badgeIcons,open:this.props.open,gridLayout:this.props.gridLayout,onSelect:this.handleSelect,onCancel:this.handleCancel},t("limel-button",{label:"Menu",slot:"trigger"})),t("limel-example-controls",{style:{"--example-controls-column-layout":"auto-fit"}},t("limel-form",{schema:this.schema,value:this.props,onChange:this.handleChange})),t("limel-example-event-printer",{ref:e=>this.eventPrinter=e})]}};export{i as limel_example_menu_composite};
//# sourceMappingURL=limel-example-menu-composite.entry.js.map