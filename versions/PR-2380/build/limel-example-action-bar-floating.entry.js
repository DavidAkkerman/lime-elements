import{r as o,h as i}from"./index-a55db97c.js";const t=class{constructor(i){o(this,i),this.actionBarItems=[{text:"Add",icon:"plus_math",iconOnly:!0},{text:"Refresh",icon:"refresh",iconOnly:!0},{separator:!0},{text:"Assign me",commandText:"Cmd + H",icon:"whole_hand"},{text:"Park",icon:"circled_pause",iconColor:"rgb(var(--color-orange-default))"},{text:"Close",icon:"do_not_disturb",iconColor:"rgb(var(--color-red-default))"}]}render(){return i("div",{class:"application has-floating-action-bar is-resizable"},i("limel-action-bar",{accessibleLabel:"Contextual Action Bar",actions:this.actionBarItems,openDirection:"top",layout:"floating"}))}};t.style='@charset "UTF-8";.application{position:relative;overflow:hidden;height:20rem;border:1px solid rgb(var(--contrast-500));border-radius:0.5rem;background-color:rgb(var(--contrast-400))}.application.is-resizable{resize:horizontal;max-width:100%;min-width:10rem}.application.is-resizable::after{content:"Resize me ⤵";font-size:0.75rem;position:absolute;right:0.5rem;bottom:0.5rem}.application.has-floating-action-bar{display:grid;background-color:rgb(var(--contrast-700))}.application.has-floating-action-bar limel-action-bar{position:absolute;bottom:0.75rem;justify-self:center}limel-action-bar{z-index:1}';export{t as limel_example_action_bar_floating}