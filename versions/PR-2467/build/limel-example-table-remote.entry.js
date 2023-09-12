import{r as t,h as i}from"./index-f1b3d5fb.js";import{d as s}from"./birds-a0b078f9.js";import{c as e}from"./capitalize-91693972.js";import"./toString-0a9c1851.js";import"./_baseGetTag-49d0259e.js";import"./_arrayMap-e86f6dbb.js";import"./isArray-80298bc7.js";import"./isSymbol-f24bedd7.js";import"./isObjectLike-38996507.js";const o=":host{display:block}limel-table{height:300px}";const r=500;const a=class{constructor(i){t(this,i);this.columns=[];this.allData=s;this.pageSize=10;this.addUnit=t=>i=>`${i} ${t}`;this.handleLoad=t=>{console.log("Loading new data",t.detail);const i=t.detail.sorters[0];this.currentPage=t.detail.page;if(i){this.allData=[...s].sort(this.compareBy(i))}this.loadData()};this.compareBy=t=>(i,s)=>{const e=t.column;const o=i[e.field];const r=s[e.field];if(t.direction==="ASC"){return String(o).localeCompare(String(r))}return String(r).localeCompare(String(o))};this.currentData=[]}componentWillLoad(){this.columns=[{title:"Name",field:"name"},{title:"Binominal name",field:"binominalName"},{title:"Wingspan",field:"wingspan",formatter:this.addUnit("cm")},{title:"Nest type",field:"nest",formatter:e},{title:"Eggs per clutch",horizontalAlign:"right",field:"eggs",aggregator:this.calculateAverage},{title:"Origin",field:"origin"}]}calculateAverage(t,i,e){console.log(i,e);const o=s.reduce(((i,s)=>i+s[t.field]),0);return o/s.length}loadData(){setTimeout((()=>{const t=(this.currentPage-1)*this.pageSize;const i=t+this.pageSize;this.currentData=this.allData.slice(t,i)}),r)}render(){return i("limel-table",{mode:"remote",data:this.currentData,columns:this.columns,pageSize:this.pageSize,totalRows:s.length,onLoad:this.handleLoad})}};a.style=o;export{a as limel_example_table_remote};
//# sourceMappingURL=limel-example-table-remote.entry.js.map