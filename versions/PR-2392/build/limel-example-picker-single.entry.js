import{r as e,h as t}from"./index-2626b3b7.js";const l=class{constructor(t){e(this,t);this.allItems=[{text:"Admiral Swiggins",value:1},{text:"Ayla",value:2},{text:"Clunk",value:3},{text:"Coco",value:4},{text:"Derpl",value:5},{text:"Froggy G",value:6},{text:"Gnaw",value:7},{text:"Lonestar",value:8},{text:"Leon",value:9},{text:"Raelynn",value:10},{text:"Skølldir",value:11},{text:"Voltar",value:12},{text:"Yuri",value:13}];this.search=e=>new Promise((t=>{if(e===""){return t(this.allItems)}const l=this.allItems.filter((t=>t.text.toLowerCase().includes(e.toLowerCase())));return t(l)}));this.onChange=e=>{this.selectedItem=e.detail};this.onInteract=e=>{console.log("Value interacted with:",e.detail)};this.selectedItem=undefined}render(){return[t("limel-picker",{label:"Favorite awesomenaut",value:this.selectedItem,searcher:this.search,onChange:this.onChange,onInteract:this.onInteract}),t("limel-example-value",{value:this.selectedItem})]}};export{l as limel_example_picker_single};
//# sourceMappingURL=limel-example-picker-single.entry.js.map