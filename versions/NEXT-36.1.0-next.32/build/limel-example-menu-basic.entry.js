import{r as e,h as t}from"./index-5f2797d5.js";const s=class{constructor(t){e(this,t),this.items=[{text:"Copy"},{text:"Cut"},{separator:!0},{text:"Paste"}],this.handleSelect=e=>{this.lastSelectedItem=e.detail.text},this.lastSelectedItem=void 0}render(){return[t("limel-menu",{items:this.items,onSelect:this.handleSelect},t("limel-button",{label:"Menu",slot:"trigger"})),t("limel-example-value",{label:"Last selected item",value:this.lastSelectedItem})]}};export{s as limel_example_menu_basic}