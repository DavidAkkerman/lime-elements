import{r as s,h as t,g as a}from"./index-a55db97c.js";const e=class{constructor(t){s(this,t),this.triggerSnackbarWithoutAction=this.triggerSnackbar.bind(this,"limel-snackbar")}render(){return[t("limel-button",{label:"Show snackbar",onClick:this.triggerSnackbarWithoutAction}),t("limel-snackbar",{message:"Quick scan started. It takes a couple of minutes…",onHide:this.snackbarWithoutActionOnHide})]}triggerSnackbar(s){this.host.shadowRoot.querySelector(s).show()}snackbarWithoutActionOnHide(){console.log("The scan is still going on in the background.")}get host(){return a(this)}};export{e as limel_example_snackbar}