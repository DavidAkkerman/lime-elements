import{r,h as a}from"./index-6156b4fd.js";const e=".do-dont-container{display:grid;grid-template-columns:1fr 1fr;gap:2.5rem;padding:1.25rem}@media screen and (max-width: 760px){.do-dont-container{grid-template-columns:1fr;grid-auto-flow:row}}.do,.do-not{--example-border-radius:0.5rem;--header-background-color:rgb(var(--contrast-500));--header-top-right-left-border-radius:var(--example-border-radius);border-radius:var(--example-border-radius);background-color:rgb(var(--contrast-100));color:rgb(var(--contrast-1100));height:fit-content}.do{--header-icon-color:rgb(var(--color-green-default))}.do-not{--header-icon-color:rgb(var(--color-red-default))}*{box-sizing:border-box}.example{margin:0.5rem 0;background-color:rgb(var(--contrast-600))}.fake-dialog-container{--header-top-right-left-border-radius:0.25rem;width:100%;height:100%;max-width:40rem;padding:0 3rem 3rem 3rem;margin:auto;background-color:rgb(var(--contrast-600))}.fake-dialog-container.shows-full-dialog{padding-top:3rem}.fake-dialog-container p{font-size:0.875rem;opacity:0.7;align-self:flex-start;padding:0 0.75rem}.fake-dialog-container h4{padding:0 0.75rem;margin-bottom:0}.action-bar{display:flex;gap:0.5rem;width:100%;justify-content:flex-end;padding:0.5rem}.fake-dialog{display:flex;flex-direction:column;min-height:3rem;background-color:rgb(var(--contrast-100));box-shadow:var(--shadow-depth-16);border-radius:0 0 0.25rem 0.25rem}.shows-full-dialog .fake-dialog{border-radius:0.25rem}limel-header.save{--header-icon-color:rgb(var(--color-lime-default))}limel-header.delete{--header-icon-color:rgb(var(--color-red-default))}.button.justify-left{justify-self:flex-start;margin-right:auto}.button.primary--neutral{--lime-primary-color:rgb(var(--contrast-1100))}.button.primary--caution{--lime-on-primary-color:rgb(var(--color-gray-darker));--lime-primary-color:rgb(var(--color-amber-default))}.button.primary--danger{--lime-on-primary-color:rgb(var(--color-red-default));--lime-primary-color:rgb(var(--contrast-100))}.button.primary--danger-highlighted{--lime-primary-color:rgb(var(--color-red-default))}";const o=class{constructor(a){r(this,a)}render(){return[a("div",{class:"action-buttons-examples"},a("div",{class:"example"},a("div",{class:"fake-dialog-container shows-full-dialog"},a("div",{class:"fake-dialog"},a("limel-header",{icon:"ask_question",heading:"Save changes?",class:"save"}),a("p",null,"You have unsaved changes. Do you want to save them before leaving this page?"),a("div",{class:"action-bar"},a("limel-button",{label:"Back to editing",class:"button back primary--neutral justify-left",icon:"left_arrow"}),a("limel-button",{label:"Discard",class:"button discard primary--caution",icon:"cancel",primary:true}),a("limel-button",{label:"Save",class:"button update",icon:"ok",primary:true}))))),a("div",{class:"example"},a("div",{class:"fake-dialog-container shows-full-dialog"},a("div",{class:"fake-dialog"},a("limel-header",{icon:"delete_message",heading:"Delete selected items?",class:"delete"}),a("p",null,"You are about to delete 23 items. This is a permanent action and cannot be undone!"),a("div",{class:"action-bar"},a("limel-button",{label:"Back to selection",class:"button primary--neutral justify-left",icon:"left_arrow"}),a("limel-button",{label:"Don't delete",class:"button primary--caution",icon:"cancel",primary:true}),a("limel-button",{label:"Delete",class:"button primary--danger",icon:"trash",primary:true}))))))]}};o.style=e;export{o as limel_example_action_buttons_icon_color};
//# sourceMappingURL=limel-example-action-buttons-icon-color.entry.js.map