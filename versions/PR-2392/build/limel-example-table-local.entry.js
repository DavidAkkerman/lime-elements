import{r as i,h as t}from"./index-2626b3b7.js";import{d as e}from"./birds-a0b078f9.js";import{c as s}from"./capitalize-91693972.js";import"./toString-0a9c1851.js";import"./_baseGetTag-49d0259e.js";import"./_arrayMap-e86f6dbb.js";import"./isArray-80298bc7.js";import"./isSymbol-f24bedd7.js";import"./isObjectLike-38996507.js";var a;(function(i){i["Average"]="avg";i["Maximum"]="max";i["Minimum"]="min";i["Sum"]="sum";i["Count"]="count"})(a||(a={}));const l=":host{display:block}limel-table{height:300px}";const r=class{constructor(t){i(this,t);this.columns=[];this.pageSize=10;this.addUnit=i=>t=>`${t} ${i}`;this.handleChangePage=i=>{this.currentPage=i.detail};this.handleSort=i=>{this.currentSorting=i.detail[0].column.title};this.currentPage=1;this.currentSorting="None"}componentWillLoad(){this.columns=[{title:"Name",field:"name"},{title:"Binominal name",field:"binominalName"},{title:"Wingspan",field:"wingspan",formatter:this.addUnit("cm")},{title:"Nest type",field:"nest",formatter:s},{title:"Eggs per clutch",field:"eggs",aggregator:a.Average,horizontalAlign:"right"},{title:"Origin",field:"origin"}]}render(){return[t("limel-table",{data:e,columns:this.columns,pageSize:this.pageSize,onChangePage:this.handleChangePage,onSort:this.handleSort}),t("limel-example-value",{label:"Current page is",value:this.currentPage}),t("limel-example-value",{label:"Currently sorting on",value:this.currentSorting})]}};r.style=l;export{r as limel_example_table_local};
//# sourceMappingURL=limel-example-table-local.entry.js.map