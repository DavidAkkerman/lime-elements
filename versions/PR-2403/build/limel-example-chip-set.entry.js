import{r as e,h as t}from"./index-f1b3d5fb.js";const s=class{constructor(t){e(this,t);this.handleInteraction=e=>{console.log(e.detail)};this.toggleEnabled=()=>{this.disabled=!this.disabled};this.disabled=false}render(){return[t("limel-chip-set",{label:"Tags",disabled:this.disabled,onInteract:this.handleInteraction,value:[{id:1,text:"Fruit"},{id:2,text:"Green"},{id:3,text:"Sour"}]}),t("limel-example-controls",null,t("limel-checkbox",{label:"Disabled",onChange:this.toggleEnabled,checked:this.disabled}))]}};export{s as limel_example_chip_set};
//# sourceMappingURL=limel-example-chip-set.entry.js.map