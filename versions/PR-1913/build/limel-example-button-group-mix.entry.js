import{r as e,h as i}from"./index-690c5d75.js";const t=class{constructor(i){e(this,i),this.disabled=!1,this.handleChange=e=>{console.log(e.detail)},this.toggleEnabled=()=>{this.disabled=!this.disabled}}render(){return[i("limel-button-group",{disabled:this.disabled,onChange:this.handleChange,value:[{id:"1",title:"All"},{id:"2",title:"Banana",icon:"banana"},{id:"3",title:"Apple",icon:"apple"},{id:"4",title:"Pear",icon:"pear"}]}),i("p",null,i("limel-flex-container",{justify:"end"},i("limel-checkbox",{label:"Disabled",onChange:this.toggleEnabled,checked:this.disabled})))]}};export{t as limel_example_button_group_mix}