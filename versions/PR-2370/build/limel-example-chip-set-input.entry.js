import{r as e,h as i}from"./index-2626b3b7.js";import{E as t,a as s}from"./keycodes-9f971b46.js";const h=class{constructor(i){e(this,i);this.handleInput=e=>{this.textValue=e.detail};this.onKeyUp=e=>{if((e.key===t||e.keyCode===s)&&this.textValue.trim()){this.value=[...this.value,this.createChip(this.textValue.trim())];this.textValue=""}};this.handleChange=e=>{console.log(e.detail);this.value=e.detail};this.handleInteraction=e=>{console.log("Chip interacted with: ",e.detail)};this.createChip=e=>({id:e,text:e,removable:true,icon:`${e}`.toLowerCase()});this.setDisabled=e=>{this.disabled=e.detail};this.setReadonly=e=>{this.readonly=e.detail};this.setRequired=e=>{this.required=e.detail};this.setEmptyInputOnBlur=e=>{this.emptyInputOnBlur=e.detail};this.setLeadingIcon=e=>{this.hasLeadingIcon=e.detail};this.setMaxItems=e=>{this.maxItems=+e.detail};this.useDelimiters=e=>{this.delimiter=e.detail?"&":null};this.value=undefined;this.textValue="";this.required=false;this.readonly=false;this.disabled=false;this.maxItems=0;this.emptyInputOnBlur=true;this.hasLeadingIcon=false;this.delimiter=null;this.value=[this.createChip("Elephant"),this.createChip("Caterpillar"),this.createChip("Badger"),this.createChip("Fish")]}render(){return[i("limel-chip-set",{type:"input",label:"Animal",helperText:"For some animal names, icons are displayed on the chips",searchLabel:"Type an animal name & press Enter",value:this.value,required:this.required,readonly:this.readonly,disabled:this.disabled,leadingIcon:this.hasLeadingIcon?"search":null,maxItems:this.maxItems,onChange:this.handleChange,onInput:this.handleInput,onInteract:this.handleInteraction,onKeyUp:this.onKeyUp,emptyInputOnBlur:this.emptyInputOnBlur,delimiter:this.delimiter}),i("limel-example-controls",{style:{"--example-controls-max-columns-width":"9rem"}},i("limel-input-field",{label:"Max items",value:this.maxItems.toString(),type:"number",onChange:this.setMaxItems}),i("limel-checkbox",{label:"Empty input on blur",onChange:this.setEmptyInputOnBlur,checked:this.emptyInputOnBlur}),i("limel-checkbox",{label:"Disabled",onChange:this.setDisabled,checked:this.disabled}),i("limel-checkbox",{label:"Readonly",onChange:this.setReadonly,checked:this.readonly}),i("limel-checkbox",{label:"Required",onChange:this.setRequired,checked:this.required}),i("limel-checkbox",{label:"Leading icon",onChange:this.setLeadingIcon,checked:this.hasLeadingIcon}),i("limel-checkbox",{label:"Use delimiters",onChange:this.useDelimiters,checked:this.delimiter!==null})),i("limel-example-value",{value:this.value})]}};export{h as limel_example_chip_set_input};
//# sourceMappingURL=limel-example-chip-set-input.entry.js.map