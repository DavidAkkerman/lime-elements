import{r as e,h as l}from"./index-6156b4fd.js";const o=":host(limel-example-readonly-boolean){display:grid;gap:1rem}hr{all:unset;border-top:1px solid rgb(var(--contrast-400))}";const a=class{constructor(l){e(this,l);this.setChecked=e=>{e.stopPropagation();this.value=e.detail};this.value=false}render(){return[l("limel-checkbox",{checked:this.value,readonly:true,label:"Debt"}),l("limel-switch",{value:this.value,readonly:true,label:"Debt"}),l("p",null,"Default"),l("limel-readonly-boolean",{label:"Debt",value:this.value}),l("hr",null),l("p",null,"Customized"),l("limel-readonly-boolean",{label:"Debt",value:this.value,trueIcon:{name:"error",color:"rgb(var(--color-red-default))",backgroundColor:"rgb(var(--color-yellow-default))"},falseIcon:{name:"ok",color:"rgb(var(--color-green-default))"},trueLabel:"Has debts",falseLabel:"Does not have debts"}),l("limel-readonly-boolean",{label:"Newsletter",value:this.value,trueIcon:"news",falseIcon:{name:"cancel_subscription",color:"rgb(var(--color-orange-default))"},trueLabel:"Subscribed to receive newsletters",falseLabel:"Unsubscribed from newsletters"}),l("limel-readonly-boolean",{label:"Quit",value:this.value,trueIcon:{name:"inactive_state",color:"rgb(var(--color-gray-default))"},falseIcon:{name:"in_progress",color:"rgb(var(--color-sky-default))"},trueLabel:"Has quit their job",falseLabel:"Still works here"}),l("limel-readonly-boolean",{label:"Mute",value:this.value,trueIcon:{name:"no_microphone",color:"rgb(var(--color-gray-light))"},falseIcon:"microphone",trueLabel:"You're muted",falseLabel:"Microphone is active…"}),l("limel-example-controls",null,l("limel-checkbox",{checked:this.value,label:"Value",onChange:this.setChecked})),l("limel-example-value",{label:"Current value",value:this.value})]}};a.style=o;export{a as limel_example_readonly_boolean};
//# sourceMappingURL=limel-example-readonly-boolean.entry.js.map