import{r as i,h as t}from"./index-a55db97c.js";import{d as e}from"./birds-a0b078f9.js";import{c as s}from"./capitalize-91693972.js";import"./toString-0a9c1851.js";import"./_baseGetTag-49d0259e.js";import"./_arrayMap-e86f6dbb.js";import"./isArray-80298bc7.js";import"./isSymbol-f24bedd7.js";import"./isObjectLike-38996507.js";const r=class{constructor(t){i(this,t),this.tableData=e,this.sortedColumns=[],this.addUnit=i=>t=>`${t} ${i}`,this.columns=[]}componentWillLoad(){this.columns=[{title:"Name",field:"name"},{title:"Binominal name",field:"binominalName"},{title:"Wingspan",field:"wingspan",formatter:this.addUnit("cm")},{title:"Nest type",field:"nest",formatter:s},{title:"Eggs per clutch",field:"eggs",horizontalAlign:"right"},{title:"Origin",field:"origin",horizontalAlign:"right"}],this.sortedColumns=[{column:this.columns[0],direction:"ASC"},{column:this.columns[4],direction:"ASC"}]}render(){return t("limel-table",{data:this.tableData,columns:this.columns,sorting:this.sortedColumns})}};r.style=":host{display:block}limel-table{height:300px}";export{r as limel_example_table_default_sorted}