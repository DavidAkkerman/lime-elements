import{r as e,h as i}from"./index-2626b3b7.js";const t=class{constructor(i){e(this,i);this.handleChange=e=>{this.text=e.detail.text;this.tabs=this.tabs.map((i=>{if(i.id===e.detail.id){return e.detail}return i}))};this.text="Joker";this.tabs=[{id:1,text:"Joker",icon:"joker",active:true,iconColor:"var(--lime-green)"},{id:2,text:"Parasite",icon:"insect",iconColor:"var(--lime-magenta)",badge:999},{id:3,text:"Harriet",icon:"administrator_female",iconColor:"var(--lime-orange)",badge:99940},{id:4,text:"Bombshell",icon:"surprised",iconColor:"var(--lime-blue)",badge:999990},{id:5,text:"Judy",icon:"female",iconColor:"var(--lime-deep-red)",badge:94e4},{id:6,text:"Friends",icon:"friends",iconColor:"var(--lime-yellow)",badge:129e4},{id:7,text:"Little Women",icon:"female",iconColor:"var(--lime-deep-red)",badge:4},{id:8,text:"Inception",badge:"NEW"}]}render(){return[i("limel-tab-bar",{tabs:this.tabs,onChangeTab:this.handleChange}),i("limel-example-value",{label:"Tab",value:this.text})]}};export{t as limel_example_tab_bar};
//# sourceMappingURL=limel-example-tab-bar.entry.js.map