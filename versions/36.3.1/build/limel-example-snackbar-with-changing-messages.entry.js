import{r as e,h as s}from"./index-a55db97c.js";const i=class{constructor(s){e(this,s),this.dismissible=!1,this.triggerSnackbarWithChangingMessage=this.triggerSnackbarWithChangingMessage.bind(this),this.onChange=this.onChange.bind(this)}render(){return[s("limel-button",{label:"Spam me",onClick:this.triggerSnackbarWithChangingMessage}),s("limel-example-controls",null,s("limel-checkbox",{label:"Dismissible",checked:this.dismissible,onChange:this.onChange})),s("limel-snackbar",{timeout:4e3,dismissible:this.dismissible,ref:e=>this.snackbarWithChangingMessage=e})]}triggerSnackbarWithChangingMessage(){const e=(e,s)=>{setTimeout((()=>{this.snackbarWithChangingMessage.message=e,this.snackbarWithChangingMessage.show()}),s)};e("We will show you a new message in 15 seconds",0),e("You will see another message in 10 seconds",5e3),e("The last message comes in 5 seconds",1e4),e("There will be no more messages!",15e3)}onChange(e){this.dismissible=e.detail}};export{i as limel_example_snackbar_with_changing_messages}