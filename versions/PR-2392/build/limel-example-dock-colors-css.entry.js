import{r as e,h as o}from"./index-2626b3b7.js";const c=":host{--dock-background-color:rgb(var(--color-glaucous-darker));--dock-item-text-color:rgb(var(--color-cyan-lighter));--dock-item-text-color--selected:rgb(var(--color-white));--dock-item-icon-color:rgb(var(--color-cyan-lighter));--dock-item-background-color--selected:rgb(var(--color-cyan-darker))}.application{background-color:rgb(var(--contrast-1600));overflow:hidden;border-radius:0.5rem;height:30rem}";const r=class{constructor(o){e(this,o);this.handleSelected=e=>{const o=o=>Object.assign(Object.assign({},o),{selected:o.id===e.detail.id});this.dockItems=this.dockItems.map(o);this.dockFooterItems=this.dockFooterItems.map(o)};this.dockItems=[{id:"1",label:"Home",selected:true,icon:"home"},{id:"2",label:"Search",icon:"search"},{id:"3",label:"Calls",icon:"phone"},{id:"4",label:"Chats",icon:"chat"}];this.dockFooterItems=[{id:"5",label:"Settings",icon:"settings"}]}render(){return o("div",{class:"application"},o("limel-dock",{accessibleLabel:"Dock Example: CSS color variables",dockItems:this.dockItems,dockFooterItems:this.dockFooterItems,onItemSelected:this.handleSelected,expanded:true}))}};r.style=c;export{r as limel_example_dock_colors_css};
//# sourceMappingURL=limel-example-dock-colors-css.entry.js.map