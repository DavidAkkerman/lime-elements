import{r as e,h as i}from"./index-690c5d75.js";const s=class{constructor(i){e(this,i),this.limeBranded=!0,this.renderBranded=e=>{e.stopPropagation(),this.limeBranded=e.detail}}render(){return[i("limel-spinner",{size:"medium",limeBranded:this.limeBranded}),i("limel-flex-container",{justify:"end"},i("limel-checkbox",{checked:this.limeBranded,label:"Lime branded (default design)",onChange:this.renderBranded}))]}};export{s as limel_example_spinner}