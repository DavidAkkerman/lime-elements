import{r,h as e}from"./index-6156b4fd.js";import{a as o}from"./format-c76733cb.js";import"./_commonjsHelpers-5ec8f9b7.js";const s='@charset "UTF-8";:host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--mdc-theme-error:var(\n      --lime-error-background-color,\n      rgb(var(--color-red-dark))\n  );--lime-error-text-color:rgb(var(--color-red-darker));--mdc-theme-surface:var(\n      --lime-surface-background-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-surface:var(\n      --lime-on-surface-color,\n      rgb(var(--contrast-1500))\n  )}:host{display:block;box-sizing:border-box;isolation:isolate}:host([size=x-small]){--circular-progress-size:1.5rem;font-weight:bold}:host([size=small]){--circular-progress-size:2rem;font-weight:bold}:host([size=medium]){--circular-progress-size:3rem}:host([size=large]){--circular-progress-size:4rem}:host([size=x-large]){--circular-progress-size:5rem}.lime-circular-progress{--size:var(--circular-progress-size, 3rem);--fill-color:var(--circular-progress-fill-color, var(--mdc-theme-primary));--track-color:var(\n      --circular-progress-track-color,\n      rgb(var(--contrast-400))\n  );position:relative;display:flex;align-items:center;justify-content:center;width:var(--size);height:var(--size);border-radius:50%;line-height:normal;box-shadow:0 0 0 0.125rem rgb(var(--contrast-100), 0.7);background:conic-gradient(var(--fill-color) 0% var(--percentage), var(--track-color) var(--percentage) 100%)}.lime-circular-progress:before{content:"";position:absolute;width:calc(var(--size) * 0.75 + 0.25rem);height:calc(var(--size) * 0.75 + 0.25rem);border-radius:50%;background-color:var(--circular-progress-background-color, rgb(var(--contrast-100)));box-shadow:var(--button-shadow-pressed)}.prefix{font-size:clamp(0.5rem, var(--size) * 0.16, 2.25rem);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:center;color:var(--circular-progress-prefix-color, rgb(var(--contrast-1000)));width:45%;top:20%;position:absolute}.value{display:flex;font-size:clamp(0.5rem, var(--size) * 0.25, 4rem);color:var(--circular-progress-text-color, rgb(var(--contrast-1200)));z-index:1;cursor:default}.suffix{font-size:clamp(0.5rem, var(--size) * 0.18, 2.5rem);color:var(--circular-progress-suffix-color, rgb(var(--contrast-1000)));padding-top:4%}.displays-percentage-colors[style^="--percentage:1"]{--circular-progress-fill-color:var(--color-percent--10to20)}.displays-percentage-colors[style^="--percentage:2"]{--circular-progress-fill-color:var(--color-percent--20to30)}.displays-percentage-colors[style^="--percentage:3"]{--circular-progress-fill-color:var(--color-percent--30to40)}.displays-percentage-colors[style^="--percentage:4"]{--circular-progress-fill-color:var(--color-percent--40to50)}.displays-percentage-colors[style^="--percentage:5"]{--circular-progress-fill-color:var(--color-percent--50to60)}.displays-percentage-colors[style^="--percentage:6"]{--circular-progress-fill-color:var(--color-percent--60to70)}.displays-percentage-colors[style^="--percentage:7"]{--circular-progress-fill-color:var(--color-percent--70to80)}.displays-percentage-colors[style^="--percentage:8"]{--circular-progress-fill-color:var(--color-percent--80to90)}.displays-percentage-colors[style^="--percentage:9"],.displays-percentage-colors[style="--percentage:100%;"]{--circular-progress-fill-color:var(--color-percent--90to100)}.displays-percentage-colors[style="--percentage:1%;"],.displays-percentage-colors[style="--percentage:2%;"],.displays-percentage-colors[style="--percentage:3%;"],.displays-percentage-colors[style="--percentage:4%;"],.displays-percentage-colors[style="--percentage:5%;"],.displays-percentage-colors[style="--percentage:6%;"],.displays-percentage-colors[style="--percentage:7%;"],.displays-percentage-colors[style="--percentage:8%;"],.displays-percentage-colors[style="--percentage:9%;"]{--circular-progress-fill-color:var(--color-percent--0to10)}';const a=100;const c=class{constructor(o){r(this,o);this.renderPrefix=()=>{if(this.prefix){return e("span",{class:"prefix"},this.prefix)}};this.value=0;this.maxValue=a;this.prefix=null;this.suffix="%";this.displayPercentageColors=false;this.size=undefined}render(){const r={"lime-circular-progress":true,"displays-percentage-colors":this.displayPercentageColors};const s=this.value*a/this.maxValue+"%";const c=Math.round(this.value*10)/10;return e("div",{role:"progressbar",class:r,"aria-label":"%","aria-valuemin":"0","aria-valuemax":this.maxValue,"aria-valuenow":this.value,style:{"--percentage":s}},this.renderPrefix(),e("span",{class:"value"},o(c),e("span",{class:"suffix"},this.suffix)))}};c.style=s;export{c as limel_circular_progress};
//# sourceMappingURL=limel-circular-progress.entry.js.map