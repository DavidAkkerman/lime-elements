import{r as t,h as e}from"./index-6156b4fd.js";const i=class{constructor(e){t(this,e);this.items=[{text:"Format",items:[{text:"Bold",icon:"bold"},{text:"Italic",icon:"italic"},{text:"Lists",icon:"bulleted_list",items:[{text:"Numbered list",icon:"numbered_list"},{text:"Bullet list",icon:"bulleted_list"},{text:"Checklist",icon:"todo_list"}]}]},{text:"Edit",items:[{text:"Copy",icon:"copy"},{text:"Cut",icon:"cut"},{separator:true},{text:"Paste",icon:"paste"}]}];this.handleSelect=t=>{this.lastSelectedItem=t.detail.text};this.lastSelectedItem=undefined}render(){return[e("limel-menu",{items:this.items,onSelect:this.handleSelect},e("limel-button",{label:"Menu",slot:"trigger"})),e("limel-example-value",{label:"Last selected item",value:this.lastSelectedItem})]}};export{i as limel_example_menu_subitems};
//# sourceMappingURL=limel-example-menu-subitems.entry.js.map