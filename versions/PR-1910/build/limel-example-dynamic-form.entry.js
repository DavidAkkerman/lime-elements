import{r as t,h as e}from"./index-ab490ba1.js";const i=class{constructor(e){t(this,e),this.formData={title:"Test"},this.errors=null,this.schema={id:"test",title:"My form",description:"Lorem ipsum dolor sit amet",type:"object",required:["title"],properties:{title:{type:"string",title:"Title",default:"A new task",description:"Lorem ipsum dolor sit amet",minLength:5},done:{type:"boolean",title:"Done?",default:!1}}},this.handleFormChange=t=>{this.formData=t.detail},this.handleTextChange=t=>{this.text=t.target.value;try{const e=JSON.parse(t.target.value);e&&(this.schema=e)}catch(t){console.log(t)}},this.handleValidate=t=>{this.errors=t.detail},this.text=JSON.stringify(this.schema,null,"    ")}render(){return[e("textarea",{onChange:this.handleTextChange},this.text),e("br",null),e("limel-form",{onChange:this.handleFormChange,onValidate:this.handleValidate,value:this.formData,schema:this.schema}),e("limel-example-value",{value:this.formData}),e("limel-example-value",{label:"Errors",value:this.errors})]}};i.style="textarea{width:100%;min-height:300px}";export{i as limel_example_dynamic_form}