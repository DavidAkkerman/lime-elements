import{r as t,h as e}from"./index-ab490ba1.js";const i=class{constructor(e){t(this,e),this.items=[{text:"Copy"},{text:"Cut"},{separator:!0},{text:"Paste"}],this.handleNewSelection=t=>{this.selectedOpenDirection=t.detail},this.availableOpenDirections=["left-start","left","left-end","right-start","right","right-end","top-start","top","top-end","bottom-start","bottom","bottom-end"].map((t=>({text:t,value:t}))),this.selectedOpenDirection=this.availableOpenDirections.find((t=>"bottom-start"===t.value))}render(){var t;return[e("limel-menu",{items:this.items,openDirection:null===(t=this.selectedOpenDirection)||void 0===t?void 0:t.value},e("limel-button",{label:"Menu",slot:"trigger"})),e("limel-select",{class:"is-narrow",label:"openDirection",options:this.availableOpenDirections,value:this.selectedOpenDirection,onChange:this.handleNewSelection})]}};i.style=":host(limel-example-menu-open-direction){display:flex;justify-content:space-between;gap:1rem}limel-select{min-width:8.75rem}";export{i as limel_example_menu_open_direction}