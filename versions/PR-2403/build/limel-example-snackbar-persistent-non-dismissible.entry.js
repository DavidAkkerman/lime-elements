import{r as s,h as t,g as e}from"./index-f1b3d5fb.js";const i=class{constructor(t){s(this,t);this.isShowingSnackbar=false;this.handleChange=s=>{s.stopPropagation();this.persistent=s.detail};this.persistent=true;this.triggerSnackbarWithAction=this.triggerSnackbar.bind(this)}render(){return[t("limel-button",{label:"Show a persistent & non-dismissible alert",onClick:this.triggerSnackbarWithAction}),t("limel-snackbar",{message:"Your internet connection was lost! Hang on while we're trying to reconnect…",persistent:this.persistent,dismissible:false}),t("limel-example-controls",{style:{"--example-controls-column-layout":"auto-fit"}},t("limel-switch",{label:"Toggle online status",value:this.persistent,onChange:this.handleChange}))]}triggerSnackbar(){if(!this.isShowingSnackbar){this.snackbarElement.show()}this.isShowingSnackbar=true}get snackbarElement(){return this.host.shadowRoot.querySelector("limel-snackbar")}get host(){return e(this)}};export{i as limel_example_snackbar_persistent_non_dismissible};
//# sourceMappingURL=limel-example-snackbar-persistent-non-dismissible.entry.js.map