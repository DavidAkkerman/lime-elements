import{r as e,h as o}from"./index-6156b4fd.js";const r=class{constructor(o){e(this,o);this.options=[{text:"Batman",value:"bat",icon:{name:"batman_old",color:"rgb(var(--color-black))"}},{text:"Iron Man",value:"iron",disabled:true,icon:{name:"iron_man",color:"rgb(var(--color-coral-default))"}},{text:"Spider-Man",value:"spider",icon:{name:"spiderman_head",color:"rgb(var(--color-red-default))"}},{text:"Superman",value:"super",icon:{name:"superman",color:"rgb(var(--color-blue-default))"}},{text:"Wonder Woman",value:"wonder",icon:{name:"wonder_woman",color:"rgb(var(--color-yellow-darker))"}}];this.handleChange=e=>{this.value=e.detail};this.value=undefined}render(){return o("section",null,o("limel-select",{label:"Favorite hero",helperText:"If you see a lack of diversity, it's our icon-provider's fault",value:this.value,options:this.options,onChange:this.handleChange}),o("limel-example-value",{value:this.value}))}};export{r as limel_example_select_with_icons};
//# sourceMappingURL=limel-example-select-with-icons.entry.js.map