import{r as t,h as e}from"./index-f1b3d5fb.js";const i=class{constructor(e){t(this,e);this.handleChange=t=>{const e=t.detail;console.log(e);this.buttons=this.buttons.map((t=>Object.assign(Object.assign({},t),{selected:t.id===e.id})))};this.toggleEnabled=()=>{this.disabled=!this.disabled};this.disabled=false;this.buttons=[{id:"1",title:"First"},{id:"2",title:"Second",selected:true},{id:"3",title:"Third"}]}render(){return[e("limel-button-group",{disabled:this.disabled,onChange:this.handleChange,value:this.buttons}),e("limel-example-controls",null,e("limel-checkbox",{label:"Disabled",onChange:this.toggleEnabled,checked:this.disabled}))]}};export{i as limel_example_button_group};
//# sourceMappingURL=limel-example-button-group.entry.js.map