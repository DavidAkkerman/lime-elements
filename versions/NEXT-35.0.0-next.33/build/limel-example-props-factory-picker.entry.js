import{r as e,c as i,h as r}from"./index-11aed7da.js";let t=class{constructor(r){e(this,r),this.change=i(this,"change",7),this.heroes=[{text:"Superman",value:1001,icon:"superman",iconColor:"var(--lime-deep-red)"},{text:"Squirrel Girl",value:1002,icon:"squirrel",iconColor:"var(--lime-orange)"},{text:"Captain America",value:1003,icon:"captain_america",iconColor:"var(--lime-blue)"},{text:"Black Widow",value:1004,icon:"spider",iconColor:"var(--lime-dark-grey)"}],this.handleChange=e=>{var i;e.stopPropagation(),this.change.emit(null===(i=e.detail)||void 0===i?void 0:i.value)},this.search=async e=>this.heroes.filter((i=>i.text.toLowerCase().includes(e.toLowerCase())))}componentWillLoad(){console.log("propsFactory-picker - this.injectedObject.someProp:",this.injectedObject.someProp),console.log("propsFactory-picker - this.injectedString:",this.injectedString)}render(){const e=this.heroes.find((e=>e.value===this.value));return r("limel-picker",{label:this.label,value:e,disabled:this.disabled,readonly:this.readonly,required:this.required,onChange:this.handleChange,searcher:this.search})}};export{t as limel_example_props_factory_picker}