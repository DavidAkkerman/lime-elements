import{h as c}from"./index-a7da85d2.js";const e=e=>{const i={};return e.indeterminate&&(i["data-indeterminate"]="true"),c("div",{class:"mdc-form-field "},c("div",{class:{"mdc-checkbox":!0,"mdc-checkbox--invalid":e.invalid,"mdc-checkbox--disabled":e.disabled,"mdc-checkbox--required":e.required}},c("input",Object.assign({type:"checkbox",class:"mdc-checkbox__native-control",id:e.id,checked:e.checked,disabled:e.disabled,required:e.required,onChange:e.onChange},i)),c("div",{class:"mdc-checkbox__background"},c("svg",{class:"mdc-checkbox__checkmark",viewBox:"0 0 24 24"},c("path",{class:"mdc-checkbox__checkmark-path",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),c("div",{class:"mdc-checkbox__mixedmark"})),c("div",{class:"mdc-checkbox__ripple"})),c("label",{class:{"mdc-checkbox--invalid":e.invalid,"mdc-checkbox--disabled":e.disabled,"mdc-checkbox--required":e.required,"mdc-checkbox--indeterminate":e.indeterminate},htmlFor:e.id},e.label),c(d,{text:e.helperText}))},d=e=>{if("string"==typeof e.text)return c("div",{class:"limel-checkbox-helper-line"},c("p",{class:"limel-checkbox-helper-text","aria-hidden":"true"},e.text.trim()))};export{e as C}