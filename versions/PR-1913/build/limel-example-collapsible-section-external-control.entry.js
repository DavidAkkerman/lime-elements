import{r as e,h as t}from"./index-690c5d75.js";const i=class{constructor(t){e(this,t),this.isOpen=!1,this.toggle=()=>{this.isOpen=!this.isOpen},this.onOpen=()=>{console.log("Section opened"),this.isOpen=!0},this.onClose=()=>{console.log("Section closed"),this.isOpen=!1}}render(){return t("section",null,t("limel-flex-container",{justify:"end"},t("limel-button",{label:"toggle",primary:!0,onClick:this.toggle})),t("limel-collapsible-section",{header:"Click me or click the button",isOpen:this.isOpen,onOpen:this.onOpen,onClose:this.onClose},t("p",null,"Either way, the section will toggle!")))}};export{i as limel_example_collapsible_section_external_control}