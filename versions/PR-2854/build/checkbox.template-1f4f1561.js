import{h as e}from"./index-6156b4fd.js";const c=c=>{const i={};if(c.indeterminate){i["data-indeterminate"]="true"}return[e("div",{class:"mdc-form-field "},e("div",{class:{"mdc-checkbox":true,"mdc-checkbox--invalid":c.invalid,"mdc-checkbox--disabled":c.disabled,"mdc-checkbox--required":c.required,"mdc-checkbox--indeterminate":c.indeterminate,"lime-checkbox--readonly":c.readonly}},e("input",Object.assign({type:"checkbox",class:"mdc-checkbox__native-control",id:c.id,checked:c.checked,disabled:c.disabled||c.readonly,required:c.required,onChange:c.onChange,"aria-controls":c.helperTextId,"aria-describedby":c.helperTextId},i)),e("div",{class:"mdc-checkbox__background"},e("svg",{class:"mdc-checkbox__checkmark",viewBox:"0 0 24 24"},e("path",{class:"mdc-checkbox__checkmark-path",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),e("div",{class:"mdc-checkbox__mixedmark"}))),e("label",{class:{"mdc-checkbox--invalid":c.invalid,"mdc-checkbox--disabled":c.disabled,"mdc-checkbox--required":c.required,"mdc-checkbox--indeterminate":c.indeterminate,"lime-checkbox--readonly":c.readonly},htmlFor:c.id},c.label)),e(d,{text:c.helperText,helperTextId:c.helperTextId})]};const d=c=>{if(typeof c.text!=="string"){return}return e("limel-helper-line",{helperText:c.text.trim(),helperTextId:c.helperTextId,invalid:c.invalid})};export{c as C};
//# sourceMappingURL=checkbox.template-1f4f1561.js.map