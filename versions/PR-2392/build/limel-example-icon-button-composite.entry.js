import{r as e,h as t}from"./index-2626b3b7.js";const l="limel-switch{margin-right:0.9375rem}limel-icon-button{margin-bottom:1.25rem}";const i=class{constructor(t){e(this,t);this.handleChange=e=>t=>{this.props=Object.assign(Object.assign({},this.props),{[e.property]:t.detail&&e.value||null})};this.toggleFavorite=()=>{this.isFavorite=!this.isFavorite};this.isFavorite=false;this.props={disabled:false,elevated:false}}render(){return[t("limel-icon-button",Object.assign({label:this.isFavorite?"Remove Favorite":"Add Favorite",icon:this.isFavorite?"heart_filled":"heart_outlined",onClick:this.toggleFavorite},this.props)),t("limel-example-controls",null,this.renderControls())]}renderControls(){const e=[{property:"disabled",label:"Disabled",value:true},{property:"elevated",label:"Elevated",value:true}];return e.map((e=>t("limel-switch",{label:e.label,value:!!this.props[e.property],onChange:this.handleChange(e)})))}};i.style=l;export{i as limel_example_icon_button_composite};
//# sourceMappingURL=limel-example-icon-button-composite.entry.js.map