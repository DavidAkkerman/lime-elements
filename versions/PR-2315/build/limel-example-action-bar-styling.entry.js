import{r as o,h as a}from"./index-a55db97c.js";const t=class{constructor(a){o(this,a),this.actionBarItems=[{text:"Edit",icon:"pencil_tip"},{text:"Download",icon:"download"},{text:"Mark as read",icon:"double_tick"},{separator:!0},{text:"Delete",icon:"trash",iconColor:"rgb(var(--color-red-default))"}]}render(){return a("div",{class:"application has-floating-action-bar"},a("limel-action-bar",{accessibleLabel:"Contextual Action Bar",actionBarItems:this.actionBarItems,openDirection:"top",isFloating:!0}))}};t.style='@charset "UTF-8";.application{position:relative;overflow:hidden;height:20rem;border:1px solid rgb(var(--contrast-500));border-radius:0.5rem;background-color:rgb(var(--contrast-400))}.application.is-resizable{resize:horizontal}.application.is-resizable::after{content:"Resize me ⤵";font-size:0.75rem;position:absolute;right:0.5rem;bottom:0.5rem}.application.has-floating-action-bar{display:grid;background-color:rgb(var(--contrast-700))}.application.has-floating-action-bar limel-action-bar{position:absolute;bottom:0.75rem;justify-self:center}.application{background-color:rgb(var(--contrast-800))}limel-action-bar{--action-bar-background-color:rgb(var(--color-indigo-dark));--action-bar-item-text-color:rgb(var(--color-white))}';export{t as limel_example_action_bar_styling}