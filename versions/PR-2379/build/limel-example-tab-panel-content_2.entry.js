import{r as t,c as s,h as i,H as e,g as n}from"./index-2626b3b7.js";import{d as a}from"./dispatch-resize-event-cd1d230c.js";const h=".text{display:flex;align-items:center;margin-bottom:1rem}.container{display:flex;align-items:center;flex-direction:column}p{margin:0}limel-icon{margin-right:1rem}";const o=1e3;const l=class{constructor(i){t(this,i);this.changeTab=s(this,"changeTab",7);this.vote=()=>{this.votes++;this.changeTab.emit(Object.assign(Object.assign({},this.tab),{badge:this.votes}))};this.tab=undefined;this.votes=0;this.loaded=false}render(){if(!this.loaded){return i("limel-spinner",null)}const t={backgroundColor:this.tab.iconColor,color:"white"};return i("div",{class:"container"},i("div",{class:"text"},i("limel-icon",{badge:true,size:"large",name:this.tab.icon,style:t}),i("p",null,this.tab.text," has received ",this.votes," votes!")),i("limel-button",{outlined:true,icon:"star",label:"Vote",onClick:this.vote}))}watchTab(){if(!this.loaded&&this.tab.active){this.loadTabContent()}}loadTabContent(){setTimeout((()=>{this.loaded=true}),o)}static get watchers(){return{tab:["watchTab"]}}};l.style=h;const r=":host(limel-tab-panel){--tab-panel-background-color:rgb(var(--contrast-100));display:block;height:100%}.tab-panel{height:100%;position:relative;display:flex;flex-direction:column}.tab-content{height:100%;flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;background-color:var(--tab-panel-background-color)}";const c=class{constructor(i){t(this,i);this.changeTab=s(this,"changeTab",7);this.slotElements=[];this.tabs=[];this.handleChangeTabs=this.handleChangeTabs.bind(this);this.setSlotElements=this.setSlotElements.bind(this);this.setTabStatus=this.setTabStatus.bind(this)}connectedCallback(){this.initialize()}componentDidLoad(){this.initialize()}initialize(){const t=this.getSlot();if(!t){return}t.addEventListener("slotchange",this.setSlotElements);this.setSlotElements();this.tabs.forEach(this.setTabStatus)}disconnectedCallback(){const t=this.getSlot();t.removeEventListener("slotchange",this.setSlotElements)}tabsChanged(){this.hidePanels();this.tabs.forEach(this.setTabStatus)}render(){return i(e,{onChangeTab:this.handleChangeTabs},i("div",{class:"tab-panel"},i("limel-tab-bar",{tabs:this.tabs}),i("div",{class:"tab-content"},i("slot",null))))}setSlotElements(){const t=this.getSlot();this.hidePanels();this.slotElements=[].slice.call(t.assignedElements());this.tabs.forEach(this.setTabStatus)}setTabStatus(t){const s=this.slotElements.find((s=>s.id===t.id));if(!s){return}if(t.active){s.style.display=""}else{s.style.display="none"}s["tab"]=t}handleChangeTabs(t){this.tabs=this.tabs.map((s=>{if(s.id===t.detail.id){return t.detail}return s}));this.setTabStatus(t.detail);setTimeout(a)}getSlot(){return this.host.shadowRoot.querySelector("slot")}hidePanels(){this.slotElements.forEach((t=>{t.style.display="none"}))}get host(){return n(this)}static get watchers(){return{tabs:["tabsChanged"]}}};c.style=r;export{l as limel_example_tab_panel_content,c as limel_tab_panel};
//# sourceMappingURL=limel-example-tab-panel-content_2.entry.js.map