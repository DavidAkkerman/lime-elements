import{r as e,h as t}from"./index-5f2797d5.js";const l=class{constructor(t){e(this,t),this.allItems=[{text:"Admiral Swiggins",value:1},{text:"Ayla",value:2},{text:"Clunk",value:3},{text:"Coco",value:4},{text:"Derpl",value:5},{text:"Froggy G",value:6},{text:"Gnaw",value:7},{text:"Lonestar",value:8},{text:"Leon",value:9},{text:"Raelynn",value:10},{text:"Skølldir",value:11},{text:"Voltar",value:12},{text:"Yuri",value:13}],this.search=e=>new Promise((t=>{""===e&&setTimeout((()=>{t([])}),500),setTimeout((()=>{const l=this.allItems.filter((t=>t.text.toLowerCase().includes(e.toLowerCase())));t(l)}),500)})),this.onChange=e=>{this.selectedItem=e.detail},this.onInteract=e=>{console.log("Value interacted with:",e.detail)}}render(){return[t("limel-picker",{label:"Favorite awesomenaut",value:this.selectedItem,searcher:this.search,emptyResultMessage:"No results",onChange:this.onChange,onInteract:this.onInteract}),t("limel-example-value",{value:this.selectedItem})]}};export{l as limel_example_picker_empty_suggestions}