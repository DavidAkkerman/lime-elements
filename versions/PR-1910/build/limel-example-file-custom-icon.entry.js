import{r as i,h as l}from"./index-ab490ba1.js";const e=class{constructor(l){i(this,l),this.value={filename:"custom.crab",id:123},this.handleChange=i=>{this.value=i.detail,this.updateIcon(),console.log("onChange",this.value)}}componentWillLoad(){this.updateIcon()}render(){return[l("limel-file",{label:"Attach a file",onChange:this.handleChange,value:this.value}),l("limel-example-value",{value:this.value})]}updateIcon(){var i,l;".crab"===(null===(l=null===(i=this.value)||void 0===i?void 0:i.filename)||void 0===l?void 0:l.substr(-5))&&(this.value.icon="crab",this.value.iconColor="rgb(var(--color-white))",this.value.iconBackgroundColor="rgb(var(--color-coral-default))")}};export{e as limel_example_file_custom_icon}