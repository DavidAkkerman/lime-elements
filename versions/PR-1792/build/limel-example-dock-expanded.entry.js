import{r as e,h as l}from"./index-7dccb886.js";const a=class{constructor(l){e(this,l),this.dockItems=[{value:"home",label:"Lime",helperLabel:"Cmd + H",selected:!0,icon:"-lime-logo-outlined-colored"},{value:"tables",label:"Tables",icon:"insert_table",component:{name:"my-custom-menu"}},{value:"search",label:"Search",icon:"search"},{value:"create",label:"Create object",icon:"plus_math",isFooterStart:!0},{value:"setting",label:"Settings",icon:"settings"}],this.handleChange=e=>{this.dockItems=this.dockItems.map((l=>{var a;return Object.assign(Object.assign({},l),{selected:l.value===(null===(a=e.detail)||void 0===a?void 0:a.value)})}))}}render(){return[l("div",{class:"application"},l("limel-dock",{dockItems:this.dockItems,onChange:this.handleChange,allowResize:!1,expanded:!0})),l("limel-example-value",{value:this.dockItems.find((e=>e.selected))})]}};a.style=":host(limel-example-dock-basic){--popover-surface-width:min(100vw, 40rem)}.application{background-color:rgb(var(--contrast-400));border:1px solid rgb(var(--contrast-700));overflow:hidden;border-radius:0.5rem;height:30rem}";export{a as limel_example_dock_expanded}