import{r as e,h as t}from"./index-6156b4fd.js";const o=":host{--popover-surface-width:min(100vw, 40rem)}.application{background-color:rgb(var(--contrast-400));border:1px solid rgb(var(--contrast-500));overflow:hidden;border-radius:0.5rem;height:30rem}";const s=class{constructor(t){e(this,t);this.handleSelected=e=>{const t=t=>Object.assign(Object.assign({},t),{selected:t.id===e.detail.id});this.dockItems=this.dockItems.map(t);this.dockFooterItems=this.dockFooterItems.map(t)};this.dockItems=[{id:"home",label:"Lime",helperLabel:"Cmd + H",selected:true,icon:"-lime-logo-outlined-colored"},{id:"tables",label:"Tables",icon:"insert_table",dockMenu:{componentName:"my-custom-menu"}},{id:"search",label:"Search",icon:"search"}];this.dockFooterItems=[{id:"create",label:"Create object",icon:"plus_math"},{id:"settings",label:"Settings",icon:"settings"}]}render(){return t("div",{class:"application"},t("limel-dock",{accessibleLabel:"Dock Example: expanded",dockItems:this.dockItems,dockFooterItems:this.dockFooterItems,onItemSelected:this.handleSelected,allowResize:false,expanded:true}))}};s.style=o;export{s as limel_example_dock_expanded};
//# sourceMappingURL=limel-example-dock-expanded.entry.js.map