import{r as e,h as l}from"./index-ab490ba1.js";const t=class{constructor(l){e(this,l),this.options=[{text:"",value:"",disabled:!0},{text:"Luke Skywalker",value:"luke"},{text:"Han Solo",value:"han"},{text:"Leia Organo",value:"leia"}],this.handleChange=e=>{this.value=e.detail}}render(){return l("section",null,l("limel-select",{label:"Favorite hero",value:this.value,options:this.options,onChange:this.handleChange,required:!0}),l("limel-example-value",{value:this.value}))}};export{t as limel_example_select_initially_empty_required}