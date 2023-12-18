import{r as e,h as i,g as a}from"./index-a55db97c.js";const s=class{constructor(i){e(this,i),this.dismissible=!1,this.triggerSnackbarWithoutAction=this.triggerSnackbar.bind(this,"limel-snackbar"),this.triggerSnackbarWithAction=this.triggerSnackbar.bind(this,"limel-snackbar:last-child"),this.triggerSnackbarWithChangingMessage=this.triggerSnackbarWithChangingMessage.bind(this),this.onChange=this.onChange.bind(this)}render(){return[i("section",null,i("limel-button",{primary:!0,label:"Show snackbar",onClick:this.triggerSnackbarWithoutAction}),i("limel-button",{primary:!0,label:"Show snackbar with action",onClick:this.triggerSnackbarWithAction}),i("limel-button",{primary:!0,label:"Show snackbar with changing message",onClick:this.triggerSnackbarWithChangingMessage})),i("limel-example-controls",null,i("limel-checkbox",{label:"Dismissible",checked:this.dismissible,onChange:this.onChange})),i("limel-snackbar",{message:"Please do not leave your luggage unattended! It might be taken away!",timeout:5e3,dismissible:this.dismissible,onHide:this.snackbarWithoutActionOnHide}),i("limel-snackbar",{timeout:4e3,dismissible:this.dismissible,ref:e=>this.snackbarWithChangingMessage=e}),i("limel-snackbar",{message:"Your luggage has been taken away!",actionText:"Reclaim",dismissible:this.dismissible,onAction:this.snackbarOnAction,onHide:this.snackbarWithActionOnHide})]}triggerSnackbar(e){this.host.shadowRoot.querySelector(e).show()}triggerSnackbarWithChangingMessage(){const e=(e,i)=>{setTimeout((()=>{this.snackbarWithChangingMessage.message=e,this.snackbarWithChangingMessage.show()}),i)};e("Your luggage will be taken away in 15 seconds",0),e("Your luggage will be taken away in 10 seconds",5e3),e("Your luggage will be taken away in 5 seconds",1e4),e("Your luggage has been taken away!",15e3)}snackbarWithoutActionOnHide(){console.log("It will soon be taken away!")}snackbarOnAction(){console.log("You claimed your luggage!")}snackbarWithActionOnHide(){console.log("You were too late. Your luggage has been destroyed!")}onChange(e){this.dismissible=e.detail}get host(){return a(this)}};s.style="section{display:flex;flex-wrap:wrap;gap:1rem}";export{s as limel_example_snackbar}