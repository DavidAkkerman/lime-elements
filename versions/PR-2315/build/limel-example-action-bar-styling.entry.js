import{r as e,h as r}from"./index-a55db97c.js";const t=class{constructor(r){e(this,r),this.actionBarItems=[{id:"add",text:"Add",icon:"plus_math",iconOnly:!0},{id:"refresh",text:"Refresh",icon:"refresh",iconOnly:!0},{separator:!0},{id:"delete",text:"Delete",icon:"trash"}]}render(){return r("div",{class:"application"},r("limel-action-bar",{accessibleLabel:"Contextual Action Bar",actionBarItems:this.actionBarItems,openDirection:"top"}))}};t.style=".application{position:relative;overflow:hidden;height:20rem;border:1px solid rgb(var(--contrast-500));border-radius:0.5rem;background-color:rgb(var(--contrast-400))}.application{display:grid}limel-action-bar{--action-bar-border-radius:100vw;position:absolute;bottom:0.75rem;justify-self:center;box-shadow:var(--shadow-depth-8)}";export{t as limel_example_action_bar_styling}