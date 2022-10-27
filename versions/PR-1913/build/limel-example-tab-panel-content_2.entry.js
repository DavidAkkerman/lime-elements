import{r as t,c as s,h as i,H as e,g as a}from"./index-690c5d75.js";import{d as h}from"./dispatch-resize-event-cd1d230c.js";const n=class{constructor(i){t(this,i),this.changeTab=s(this,"changeTab",7),this.votes=0,this.loaded=!1,this.vote=()=>{this.votes++,this.changeTab.emit(Object.assign(Object.assign({},this.tab),{badge:this.votes}))}}render(){return this.loaded?i("div",{class:"container"},i("div",{class:"text"},i("limel-icon",{badge:!0,size:"large",name:this.tab.icon,style:{backgroundColor:this.tab.iconColor,color:"white"}}),i("p",null,this.tab.text," has received ",this.votes," votes!")),i("limel-button",{outlined:!0,icon:"star",label:"Vote",onClick:this.vote})):i("limel-spinner",null)}watchTab(){!this.loaded&&this.tab.active&&this.loadTabContent()}loadTabContent(){setTimeout((()=>{this.loaded=!0}),1e3)}static get watchers(){return{tab:["watchTab"]}}};n.style=".text{display:flex;align-items:center;margin-bottom:1rem}.container{display:flex;align-items:center;flex-direction:column}p{margin:0}limel-icon{margin-right:1rem}";const l=class{constructor(i){t(this,i),this.changeTab=s(this,"changeTab",7),this.tabs=[],this.slotElements=[],this.handleChangeTabs=this.handleChangeTabs.bind(this),this.setSlotElements=this.setSlotElements.bind(this),this.setTabStatus=this.setTabStatus.bind(this)}connectedCallback(){this.initialize()}componentDidLoad(){this.initialize()}initialize(){const t=this.getSlot();t&&(t.addEventListener("slotchange",this.setSlotElements),this.setSlotElements(),this.tabs.forEach(this.setTabStatus))}disconnectedCallback(){this.getSlot().removeEventListener("slotchange",this.setSlotElements)}tabsChanged(){this.hidePanels(),this.tabs.forEach(this.setTabStatus)}render(){return i(e,{onChangeTab:this.handleChangeTabs},i("div",{class:"tab-panel"},i("limel-tab-bar",{tabs:this.tabs}),i("div",{class:"tab-content"},i("slot",null))))}setSlotElements(){const t=this.getSlot();this.hidePanels(),this.slotElements=[].slice.call(t.assignedElements()),this.tabs.forEach(this.setTabStatus)}setTabStatus(t){const s=this.slotElements.find((s=>s.id===t.id));s&&(s.style.display=t.active?"":"none",s.tab=t)}handleChangeTabs(t){this.tabs=this.tabs.map((s=>s.id===t.detail.id?t.detail:s)),this.setTabStatus(t.detail),setTimeout(h)}getSlot(){return this.host.shadowRoot.querySelector("slot")}hidePanels(){this.slotElements.forEach((t=>{t.style.display="none"}))}get host(){return a(this)}static get watchers(){return{tabs:["tabsChanged"]}}};l.style=":host(limel-tab-panel){display:block;height:100%}.tab-panel{height:100%;position:relative;display:flex;flex-direction:column}.tab-content{height:100%;flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box}";export{n as limel_example_tab_panel_content,l as limel_tab_panel}