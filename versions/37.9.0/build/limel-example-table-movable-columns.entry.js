import{r as e,h as t}from"./index-6156b4fd.js";import{d as i}from"./birds-a0b078f9.js";import{c as l}from"./capitalize-91693972.js";import"./toString-0a9c1851.js";import"./_baseGetTag-49d0259e.js";import"./_arrayMap-e86f6dbb.js";import"./isArray-80298bc7.js";import"./isSymbol-f24bedd7.js";import"./isObjectLike-38996507.js";const s=":host{display:block}limel-table{height:300px}";const r=class{constructor(t){e(this,t);this.handleChangeColumns=e=>{this.columns=e.detail};this.columns=[{title:"Name",field:"name"},{title:"Binominal name",field:"binominalName"},{title:"Nest type",field:"nest",formatter:l},{title:"Eggs per clutch",field:"eggs",horizontalAlign:"right"},{title:"Origin",field:"origin"}]}render(){const e=this.columns.map((e=>e.title));return[t("limel-table",{data:i,columns:this.columns,movableColumns:true,onChangeColumns:this.handleChangeColumns}),t("limel-example-value",{label:"Current column order is",value:e})]}};r.style=s;export{r as limel_example_table_movable_columns};
//# sourceMappingURL=limel-example-table-movable-columns.entry.js.map