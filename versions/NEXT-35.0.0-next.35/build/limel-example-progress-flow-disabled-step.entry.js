import{r as e,h as t}from"./index-7dccb886.js";const s=class{constructor(t){e(this,t),this.flowItems=[{value:"1",text:"Choose a user name"},{value:"2",text:"Choose a password",selected:!0},{value:"3",text:"Enable 2-factor authentication",disabled:!0},{value:"4",text:"Let's go!",disabled:!0}],this.handleChange=e=>{this.flowItems=this.flowItems.map((t=>{var s;return Object.assign(Object.assign({},t),{selected:t.value===(null===(s=e.detail)||void 0===s?void 0:s.value)})}))}}render(){return t("limel-progress-flow",{flowItems:this.flowItems,onChange:this.handleChange})}};export{s as limel_example_progress_flow_disabled_step}