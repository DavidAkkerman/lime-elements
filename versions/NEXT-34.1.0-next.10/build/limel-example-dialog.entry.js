import{r as l,h as i}from"./index-a7da85d2.js";let t=class{constructor(i){l(this,i),this.isOpen=!1,this.openDialog=()=>{this.isOpen=!0},this.closeDialog=()=>{this.isOpen=!1}}render(){return[i("limel-button",{primary:!0,label:"Open",onClick:this.openDialog}),i("limel-dialog",{open:this.isOpen,onClose:this.closeDialog},i("p",null,"This is a simple alert-dialog."),i("limel-button",{label:"Ok",onClick:this.closeDialog,slot:"button"}))]}};export{t as limel_example_dialog}