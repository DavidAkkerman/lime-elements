import{r as e,h as t}from"./index-6156b4fd.js";const a="limel-dialog{--dialog-height:400px}limel-select{margin-bottom:1rem}limel-icon{height:300px;width:300px;color:rgb(var(--contrast-1200))}";const l=class{constructor(t){e(this,t);this.heroOptions=[{text:"Luke Skywalker",value:"luke"},{text:"Han Solo",value:"han"},{text:"Leia Organa",value:"leia"}];this.villainOptions=[{text:"BB-9E",value:"bb-9e"},{text:"Unkar Plutt",value:"unkar"},{text:"Zam Wessell",value:"zam"},{text:"Greedo",value:"greedo"},{text:"Evazan and Baba",value:"evazan_baba"},{text:"Bossk",value:"bossk"},{text:"Count Dooku",value:"dooku"},{text:"Captain Phasma",value:"phasma"},{text:"Commander Cody",value:"cody"},{text:"DJ",value:"dj"},{text:"Supreme Leader Snoke",value:"snoke"},{text:"Jango Fett",value:"jango"},{text:"General Grievous",value:"grievous"},{text:"General Hux",value:"hux"},{text:"Orson Krennic",value:"orson"},{text:"Sebulba",value:"sebulba"},{text:"Boba Fett",value:"boba"},{text:"Watto",value:"watto"},{text:"Jar Jar Binks",value:"jarjar"},{text:"The Sarlacc",value:"sarlacc"},{text:"Darth Maul",value:"maul"},{text:"Jabba the Hutt",value:"jabba"},{text:"Anakin Skywalker",value:"anakin"},{text:"Grand Moff Tarkin",value:"tarkin"},{text:"Kylo Ren",value:"ren"},{text:"Emperor Palpatine",value:"palpatine"},{text:"Darth Vader",value:"vader"}];this.handleHeroChange=e=>{this.heroValue=e.detail};this.handleVillainChange=e=>{this.villainValue=e.detail};this.handleButtonClick=()=>{this.open=true};this.handleClose=()=>{this.open=false};this.heroValue=undefined;this.villainValue=undefined;this.open=false}render(){return[t("limel-button",{label:"Select characters",primary:true,onClick:this.handleButtonClick}),t("limel-dialog",{onClose:this.handleClose,open:this.open},t("limel-select",{label:"Favorite hero",value:this.heroValue,options:this.heroOptions,onChange:this.handleHeroChange}),t("limel-select",{label:"Loathed villain",value:this.villainValue,options:this.villainOptions,onChange:this.handleVillainChange}),t("limel-icon",{name:"star_wars"}),t("limel-button",{slot:"button",primary:true,label:"Close",onClick:this.handleClose})),t("limel-example-value",{label:"Favorite hero",value:this.heroValue}),t("limel-example-value",{label:"Loathed villain",value:this.villainValue})]}};l.style=a;export{l as limel_example_select_dialog};
//# sourceMappingURL=limel-example-select-dialog.entry.js.map