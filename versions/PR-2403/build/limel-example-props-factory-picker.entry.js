import{r as e,c as i,h as t}from"./index-f1b3d5fb.js";const r=class{constructor(t){e(this,t);this.change=i(this,"change",7);this.heroes=[{text:"Superman",value:1001,icon:"superman",iconColor:"var(--lime-deep-red)"},{text:"Squirrel Girl",value:1002,icon:"squirrel",iconColor:"var(--lime-orange)"},{text:"Captain America",value:1003,icon:"captain_america",iconColor:"var(--lime-blue)"},{text:"Black Widow",value:1004,icon:"spider",iconColor:"var(--lime-dark-grey)"}];this.handleChange=e=>{var i;e.stopPropagation();this.change.emit((i=e.detail)===null||i===void 0?void 0:i.value)};this.search=async e=>this.heroes.filter((i=>i.text.toLowerCase().includes(e.toLowerCase())));this.injectedObject=undefined;this.injectedString=undefined;this.value=undefined;this.label=undefined;this.required=undefined;this.readonly=undefined;this.disabled=undefined}componentWillLoad(){console.log("propsFactory-picker - this.injectedObject.someProp:",this.injectedObject.someProp);console.log("propsFactory-picker - this.injectedString:",this.injectedString)}render(){const e=this.heroes.find((e=>e.value===this.value));return t("limel-picker",{label:this.label,value:e,disabled:this.disabled,readonly:this.readonly,required:this.required,onChange:this.handleChange,searcher:this.search})}};export{r as limel_example_props_factory_picker};
//# sourceMappingURL=limel-example-props-factory-picker.entry.js.map