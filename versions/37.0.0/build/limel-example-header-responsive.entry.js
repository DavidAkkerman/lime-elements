import{r as e,h as i}from"./index-2626b3b7.js";const s=":host(limel-example-header-responsive){--header-responsive-breakpoint:12rem}";const t=class{constructor(s){e(this,s);this.actions=[{id:"1",icon:"refresh",label:"Refresh"},{id:"2",icon:"delete",label:"Delete",disabled:true},{id:"3",icon:"edit",label:"Edit"}];this.renderActionButton=e=>i("limel-icon-button",{icon:e.icon,label:e.label,disabled:e.disabled,onClick:this.handleActionClick(e)});this.handleActionClick=e=>i=>{i.stopPropagation();console.log(e)}}render(){return i("limel-header",{class:"has-responsive-layout",icon:"resize_horizontal",heading:"This header is responsive",subheading:"Resize the container of this header to see how it works"},this.renderActions())}renderActions(){if(!this.actions){return}return i("div",{class:"actions",slot:"actions"},this.actions.map(this.renderActionButton))}};t.style=s;export{t as limel_example_header_responsive};
//# sourceMappingURL=limel-example-header-responsive.entry.js.map