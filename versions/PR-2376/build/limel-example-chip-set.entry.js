import{r as e,h as t}from"./index-a55db97c.js";const i=class{constructor(t){e(this,t),this.handleInteraction=e=>{console.log(e.detail)},this.toggleEnabled=()=>{this.disabled=!this.disabled},this.disabled=!1}render(){return[t("limel-chip-set",{label:"Tags",disabled:this.disabled,onInteract:this.handleInteraction,value:[{id:1,text:"Fruit"},{id:2,text:"Green"},{id:3,text:"Sour"}]}),t("limel-example-controls",null,t("limel-checkbox",{label:"Disabled",onLimelChange:this.toggleEnabled,checked:this.disabled}))]}};export{i as limel_example_chip_set}