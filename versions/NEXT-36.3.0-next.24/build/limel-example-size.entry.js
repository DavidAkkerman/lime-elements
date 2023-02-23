import{r as e,h as t}from"./index-a55db97c.js";const r=class{constructor(t){e(this,t),this.toggleMode=()=>{this.visualizeSizes=!this.visualizeSizes},this.visualizeSizes=!1}render(){return[t("div",{id:"size-rhythm-example",class:{"visualize-sizes":this.visualizeSizes}},t("button",{class:"button one"},t("div",{class:"label one"},"Button 1")),t("button",{class:"button two"},t("div",{class:"label two"},"Button 2")),t("button",{class:"button three"},t("div",{class:"label three"},"Button 3"))),t("limel-checkbox",{label:"Visualize sizes",onChange:this.toggleMode,checked:this.visualizeSizes})]}};r.style=':host{display:block;background-color:rgb(var(--contrast-200));border-radius:0.25rem}#size-rhythm-example{background-color:rgb(var(--contrast-400));border-radius:0.25rem 0.25rem 0 0;padding:1.25rem}.button{box-sizing:border-box;display:inline-block;border:none;border-radius:0.375rem;height:2.5rem;line-height:2.5rem;padding:0 1rem;margin:0 0.375rem;font-size:1rem;background-color:rgb(var(--contrast-200));box-shadow:0 0.09375rem 0.225rem 0 rgba(0, 0, 0, 0.232), 0 0.01875rem 0.05625rem 0 rgba(0, 0, 0, 0.208)}.button:first-of-type{margin-left:0}.button:focus{outline:none}.label{color:rgb(var(--contrast-1200))}.visualize-sizes .button:before,.visualize-sizes .button:after,.visualize-sizes .label:before,.visualize-sizes .label:after{opacity:1}.visualize-sizes#size-rhythm-example:before,.visualize-sizes#size-rhythm-example:after{opacity:1}#size-rhythm-example:before,#size-rhythm-example:after,.button:before,.button:after,.label:before,.label:after{transition:opacity 0.4s ease;z-index:1;position:absolute;display:flex;justify-content:center;align-items:center;font-size:0.5rem;color:rgb(var(--contrast-1100));opacity:0;box-sizing:border-box}.button{position:relative}.button:after{content:"12";top:0.25rem;bottom:0.25rem;right:-0.75rem;width:0.75rem;background-color:rgba(var(--color-cyan-light), 0.5)}#size-rhythm-example{position:relative}#size-rhythm-example:before{content:"20";top:0;left:0;bottom:0;margin:auto;width:1.25rem;height:1.25rem;background-color:rgba(var(--color-orange-light), 0.5)}.label.one:before,.label.one:after{transition-delay:0.2s;content:"20";left:0rem;right:0rem;margin:auto;height:1.25rem;width:1.25rem;background-color:rgba(var(--color-orange-light), 0.5)}.label.one:before{top:-1.25rem}.label.one:after{bottom:-1.25rem}.label.two:before{transition-delay:0.4s;content:"40";top:0;right:0;bottom:0;left:0;margin:auto;height:2.5rem;width:1rem;background-color:rgba(var(--color-magenta-light), 0.5);backdrop-filter:blur(0.25rem)}.label.three:before,.label.three:after{transition-delay:0.2s;content:"16";top:0;bottom:0;width:1rem;background-color:rgba(var(--color-green-lighter), 0.5)}.label.three:before{left:0rem}.label.three:after{right:0rem}';export{r as limel_example_size}