import{r as e,h as t}from"./index-5f2797d5.js";const i=class{constructor(t){e(this,t),this.handleChange=e=>{console.log(e.detail)},this.setDisabled=e=>{this.disabled=e.detail},this.chips=[{id:1,text:"Lime"},{id:2,text:"Apple",selected:!0},{id:3,text:"Banana"}],this.disabled=!1}render(){return[t("limel-chip-set",{label:"Include fruits of type:",disabled:this.disabled,type:"filter",onChange:this.handleChange,value:this.chips}),t("p",null,t("limel-flex-container",{justify:"end"},t("limel-checkbox",{label:"Disabled",onChange:this.setDisabled,checked:this.disabled})))]}};export{i as limel_example_chip_set_filter}