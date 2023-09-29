import{r as t,h as i}from"./index-6156b4fd.js";import{d as e}from"./birds-a0b078f9.js";import{c as r}from"./capitalize-25fd9042.js";import"./toString-8e74de73.js";import"./_baseGetTag-044c3941.js";import"./global-e1c7e609.js";import"./_arrayMap-e86f6dbb.js";import"./isArray-80298bc7.js";import"./isSymbol-bbb65e88.js";import"./isObjectLike-38996507.js";const o=":host{display:block}limel-table{height:300px}";const l=class{constructor(i){t(this,i);this.columns=[];this.addUnit=t=>i=>`${i} ${t}`}componentWillLoad(){this.columns=[{title:"Name",field:"name"},{title:"Binominal name",field:"binominalName"},{title:"Wingspan",field:"wingspan",formatter:this.addUnit("cm")},{title:"Food",field:"food",component:{name:"limel-example-table-food"}},{title:"Habitat",field:"habitat",formatter:this.capitalizeStrings},{title:"Nest type",field:"nest",formatter:r},{title:"Eggs per clutch",field:"eggs",horizontalAlign:"right"},{title:"Origin",field:"origin"}]}capitalizeStrings(t){if(typeof t==="string"){return r(t)}if(Array.isArray(t)){return t.map((t=>r(t))).join(", ")}return t}render(){return i("limel-table",{data:e,columns:this.columns})}};l.style=o;export{l as limel_example_table_custom_components};
//# sourceMappingURL=limel-example-table-custom-components.entry.js.map