import{r as s,h as t,g as e}from"./index-6156b4fd.js";const i=class{constructor(t){s(this,t);this.handleChange=s=>{s.stopPropagation();this.persistent=s.detail};this.persistent=true;this.triggerSnackbarWithAction=this.triggerSnackbar.bind(this,"limel-snackbar")}render(){return[t("limel-button",{label:"Show a persistent & non-dismissible alert",onClick:this.triggerSnackbarWithAction}),t("limel-snackbar",{message:"Your internet connection was lost! Hang on while we're trying to reconnect…",persistent:this.persistent,dismissible:false}),t("limel-example-controls",{style:{"--example-controls-column-layout":"auto-fit"}},t("limel-switch",{label:"Toggle online status",value:this.persistent,onChange:this.handleChange}))]}triggerSnackbar(s){const t=this.host.shadowRoot.querySelector(s);t.show()}get host(){return e(this)}};export{i as limel_example_snackbar_persistent_non_dismissible};
//# sourceMappingURL=limel-example-snackbar-persistent-non-dismissible.entry.js.map