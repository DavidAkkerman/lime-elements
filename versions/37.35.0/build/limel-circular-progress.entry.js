import{r,h as e}from"./index-6156b4fd.js";import{a as o}from"./format-57cd836a.js";import"./_commonjsHelpers-5ec8f9b7.js";const c='@charset "UTF-8";:host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--mdc-theme-error:var(\n      --lime-error-background-color,\n      rgb(var(--color-red-dark))\n  );--lime-error-text-color:rgb(var(--color-red-darker));--mdc-theme-surface:var(\n      --lime-surface-background-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-surface:var(\n      --lime-on-surface-color,\n      rgb(var(--contrast-1500))\n  )}:host{display:block;box-sizing:border-box;isolation:isolate}:host([size=x-small]){--circular-progress-size:1.5rem;font-weight:bold}:host([size=x-small]) .value{letter-spacing:-0.0625rem}:host([size=small]){--circular-progress-size:2rem;font-weight:bold}:host([size=small]) .value{letter-spacing:-0.03125rem}:host([size=medium]){--circular-progress-size:3rem}:host([size=large]){--circular-progress-size:4rem}:host([size=x-large]){--circular-progress-size:5rem}.lime-circular-progress{--size:var(--circular-progress-size, 3rem);--fill-color:var(--circular-progress-fill-color, var(--mdc-theme-primary));--track-color:var(\n      --circular-progress-track-color,\n      rgb(var(--contrast-400))\n  );position:relative;display:flex;align-items:center;justify-content:center;width:var(--size);height:var(--size);border-radius:50%;line-height:normal;box-shadow:0 0 0 0.125rem rgb(var(--contrast-100), 0.7);background:conic-gradient(var(--fill-color) 0% var(--percentage), var(--track-color) var(--percentage) 100%)}.lime-circular-progress:before{content:"";position:absolute;width:calc(var(--size) * 0.75 + 0.25rem);height:calc(var(--size) * 0.75 + 0.25rem);border-radius:50%;background-color:var(--circular-progress-background-color, rgb(var(--contrast-100)));box-shadow:var(--button-shadow-pressed)}.prefix{font-size:clamp(0.5rem, var(--size) * 0.16, 2.25rem);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:center;color:var(--circular-progress-prefix-color, rgb(var(--contrast-1000)));width:45%;top:20%;position:absolute}.value{display:flex;font-size:clamp(0.5rem, var(--size) * 0.25, 4rem);color:var(--circular-progress-text-color, rgb(var(--contrast-1200)));z-index:1;cursor:default}.suffix{font-size:clamp(0.5rem, var(--size) * 0.18, 2.5rem);color:var(--circular-progress-suffix-color, rgb(var(--contrast-1000)));padding-top:4%}.displays-percentage-colors[style*="--percentage: 0%"]{--circular-progress-fill-color:var(\n      --color-percent--0to10\n  )}.displays-percentage-colors[style*="--percentage: 1%"]{--circular-progress-fill-color:var(\n      --color-percent--0to10\n  )}.displays-percentage-colors[style*="--percentage: 2%"]{--circular-progress-fill-color:var(\n      --color-percent--0to10\n  )}.displays-percentage-colors[style*="--percentage: 3%"]{--circular-progress-fill-color:var(\n      --color-percent--0to10\n  )}.displays-percentage-colors[style*="--percentage: 4%"]{--circular-progress-fill-color:var(\n      --color-percent--0to10\n  )}.displays-percentage-colors[style*="--percentage: 5%"]{--circular-progress-fill-color:var(\n      --color-percent--0to10\n  )}.displays-percentage-colors[style*="--percentage: 6%"]{--circular-progress-fill-color:var(\n      --color-percent--0to10\n  )}.displays-percentage-colors[style*="--percentage: 7%"]{--circular-progress-fill-color:var(\n      --color-percent--0to10\n  )}.displays-percentage-colors[style*="--percentage: 8%"]{--circular-progress-fill-color:var(\n      --color-percent--0to10\n  )}.displays-percentage-colors[style*="--percentage: 9%"]{--circular-progress-fill-color:var(\n      --color-percent--0to10\n  )}.displays-percentage-colors[style*="--percentage: 10%"]{--circular-progress-fill-color:var(\n      --color-percent--10to20\n  )}.displays-percentage-colors[style*="--percentage: 11%"]{--circular-progress-fill-color:var(\n      --color-percent--10to20\n  )}.displays-percentage-colors[style*="--percentage: 12%"]{--circular-progress-fill-color:var(\n      --color-percent--10to20\n  )}.displays-percentage-colors[style*="--percentage: 13%"]{--circular-progress-fill-color:var(\n      --color-percent--10to20\n  )}.displays-percentage-colors[style*="--percentage: 14%"]{--circular-progress-fill-color:var(\n      --color-percent--10to20\n  )}.displays-percentage-colors[style*="--percentage: 15%"]{--circular-progress-fill-color:var(\n      --color-percent--10to20\n  )}.displays-percentage-colors[style*="--percentage: 16%"]{--circular-progress-fill-color:var(\n      --color-percent--10to20\n  )}.displays-percentage-colors[style*="--percentage: 17%"]{--circular-progress-fill-color:var(\n      --color-percent--10to20\n  )}.displays-percentage-colors[style*="--percentage: 18%"]{--circular-progress-fill-color:var(\n      --color-percent--10to20\n  )}.displays-percentage-colors[style*="--percentage: 19%"]{--circular-progress-fill-color:var(\n      --color-percent--10to20\n  )}.displays-percentage-colors[style*="--percentage: 20%"]{--circular-progress-fill-color:var(\n      --color-percent--20to30\n  )}.displays-percentage-colors[style*="--percentage: 21%"]{--circular-progress-fill-color:var(\n      --color-percent--20to30\n  )}.displays-percentage-colors[style*="--percentage: 22%"]{--circular-progress-fill-color:var(\n      --color-percent--20to30\n  )}.displays-percentage-colors[style*="--percentage: 23%"]{--circular-progress-fill-color:var(\n      --color-percent--20to30\n  )}.displays-percentage-colors[style*="--percentage: 24%"]{--circular-progress-fill-color:var(\n      --color-percent--20to30\n  )}.displays-percentage-colors[style*="--percentage: 25%"]{--circular-progress-fill-color:var(\n      --color-percent--20to30\n  )}.displays-percentage-colors[style*="--percentage: 26%"]{--circular-progress-fill-color:var(\n      --color-percent--20to30\n  )}.displays-percentage-colors[style*="--percentage: 27%"]{--circular-progress-fill-color:var(\n      --color-percent--20to30\n  )}.displays-percentage-colors[style*="--percentage: 28%"]{--circular-progress-fill-color:var(\n      --color-percent--20to30\n  )}.displays-percentage-colors[style*="--percentage: 29%"]{--circular-progress-fill-color:var(\n      --color-percent--20to30\n  )}.displays-percentage-colors[style*="--percentage: 30%"]{--circular-progress-fill-color:var(\n      --color-percent--30to40\n  )}.displays-percentage-colors[style*="--percentage: 31%"]{--circular-progress-fill-color:var(\n      --color-percent--30to40\n  )}.displays-percentage-colors[style*="--percentage: 32%"]{--circular-progress-fill-color:var(\n      --color-percent--30to40\n  )}.displays-percentage-colors[style*="--percentage: 33%"]{--circular-progress-fill-color:var(\n      --color-percent--30to40\n  )}.displays-percentage-colors[style*="--percentage: 34%"]{--circular-progress-fill-color:var(\n      --color-percent--30to40\n  )}.displays-percentage-colors[style*="--percentage: 35%"]{--circular-progress-fill-color:var(\n      --color-percent--30to40\n  )}.displays-percentage-colors[style*="--percentage: 36%"]{--circular-progress-fill-color:var(\n      --color-percent--30to40\n  )}.displays-percentage-colors[style*="--percentage: 37%"]{--circular-progress-fill-color:var(\n      --color-percent--30to40\n  )}.displays-percentage-colors[style*="--percentage: 38%"]{--circular-progress-fill-color:var(\n      --color-percent--30to40\n  )}.displays-percentage-colors[style*="--percentage: 39%"]{--circular-progress-fill-color:var(\n      --color-percent--30to40\n  )}.displays-percentage-colors[style*="--percentage: 40%"]{--circular-progress-fill-color:var(\n      --color-percent--40to50\n  )}.displays-percentage-colors[style*="--percentage: 41%"]{--circular-progress-fill-color:var(\n      --color-percent--40to50\n  )}.displays-percentage-colors[style*="--percentage: 42%"]{--circular-progress-fill-color:var(\n      --color-percent--40to50\n  )}.displays-percentage-colors[style*="--percentage: 43%"]{--circular-progress-fill-color:var(\n      --color-percent--40to50\n  )}.displays-percentage-colors[style*="--percentage: 44%"]{--circular-progress-fill-color:var(\n      --color-percent--40to50\n  )}.displays-percentage-colors[style*="--percentage: 45%"]{--circular-progress-fill-color:var(\n      --color-percent--40to50\n  )}.displays-percentage-colors[style*="--percentage: 46%"]{--circular-progress-fill-color:var(\n      --color-percent--40to50\n  )}.displays-percentage-colors[style*="--percentage: 47%"]{--circular-progress-fill-color:var(\n      --color-percent--40to50\n  )}.displays-percentage-colors[style*="--percentage: 48%"]{--circular-progress-fill-color:var(\n      --color-percent--40to50\n  )}.displays-percentage-colors[style*="--percentage: 49%"]{--circular-progress-fill-color:var(\n      --color-percent--40to50\n  )}.displays-percentage-colors[style*="--percentage: 50%"]{--circular-progress-fill-color:var(\n      --color-percent--50to60\n  )}.displays-percentage-colors[style*="--percentage: 51%"]{--circular-progress-fill-color:var(\n      --color-percent--50to60\n  )}.displays-percentage-colors[style*="--percentage: 52%"]{--circular-progress-fill-color:var(\n      --color-percent--50to60\n  )}.displays-percentage-colors[style*="--percentage: 53%"]{--circular-progress-fill-color:var(\n      --color-percent--50to60\n  )}.displays-percentage-colors[style*="--percentage: 54%"]{--circular-progress-fill-color:var(\n      --color-percent--50to60\n  )}.displays-percentage-colors[style*="--percentage: 55%"]{--circular-progress-fill-color:var(\n      --color-percent--50to60\n  )}.displays-percentage-colors[style*="--percentage: 56%"]{--circular-progress-fill-color:var(\n      --color-percent--50to60\n  )}.displays-percentage-colors[style*="--percentage: 57%"]{--circular-progress-fill-color:var(\n      --color-percent--50to60\n  )}.displays-percentage-colors[style*="--percentage: 58%"]{--circular-progress-fill-color:var(\n      --color-percent--50to60\n  )}.displays-percentage-colors[style*="--percentage: 59%"]{--circular-progress-fill-color:var(\n      --color-percent--50to60\n  )}.displays-percentage-colors[style*="--percentage: 60%"]{--circular-progress-fill-color:var(\n      --color-percent--60to70\n  )}.displays-percentage-colors[style*="--percentage: 61%"]{--circular-progress-fill-color:var(\n      --color-percent--60to70\n  )}.displays-percentage-colors[style*="--percentage: 62%"]{--circular-progress-fill-color:var(\n      --color-percent--60to70\n  )}.displays-percentage-colors[style*="--percentage: 63%"]{--circular-progress-fill-color:var(\n      --color-percent--60to70\n  )}.displays-percentage-colors[style*="--percentage: 64%"]{--circular-progress-fill-color:var(\n      --color-percent--60to70\n  )}.displays-percentage-colors[style*="--percentage: 65%"]{--circular-progress-fill-color:var(\n      --color-percent--60to70\n  )}.displays-percentage-colors[style*="--percentage: 66%"]{--circular-progress-fill-color:var(\n      --color-percent--60to70\n  )}.displays-percentage-colors[style*="--percentage: 67%"]{--circular-progress-fill-color:var(\n      --color-percent--60to70\n  )}.displays-percentage-colors[style*="--percentage: 68%"]{--circular-progress-fill-color:var(\n      --color-percent--60to70\n  )}.displays-percentage-colors[style*="--percentage: 69%"]{--circular-progress-fill-color:var(\n      --color-percent--60to70\n  )}.displays-percentage-colors[style*="--percentage: 70%"]{--circular-progress-fill-color:var(\n      --color-percent--70to80\n  )}.displays-percentage-colors[style*="--percentage: 71%"]{--circular-progress-fill-color:var(\n      --color-percent--70to80\n  )}.displays-percentage-colors[style*="--percentage: 72%"]{--circular-progress-fill-color:var(\n      --color-percent--70to80\n  )}.displays-percentage-colors[style*="--percentage: 73%"]{--circular-progress-fill-color:var(\n      --color-percent--70to80\n  )}.displays-percentage-colors[style*="--percentage: 74%"]{--circular-progress-fill-color:var(\n      --color-percent--70to80\n  )}.displays-percentage-colors[style*="--percentage: 75%"]{--circular-progress-fill-color:var(\n      --color-percent--70to80\n  )}.displays-percentage-colors[style*="--percentage: 76%"]{--circular-progress-fill-color:var(\n      --color-percent--70to80\n  )}.displays-percentage-colors[style*="--percentage: 77%"]{--circular-progress-fill-color:var(\n      --color-percent--70to80\n  )}.displays-percentage-colors[style*="--percentage: 78%"]{--circular-progress-fill-color:var(\n      --color-percent--70to80\n  )}.displays-percentage-colors[style*="--percentage: 79%"]{--circular-progress-fill-color:var(\n      --color-percent--70to80\n  )}.displays-percentage-colors[style*="--percentage: 80%"]{--circular-progress-fill-color:var(\n      --color-percent--80to90\n  )}.displays-percentage-colors[style*="--percentage: 81%"]{--circular-progress-fill-color:var(\n      --color-percent--80to90\n  )}.displays-percentage-colors[style*="--percentage: 82%"]{--circular-progress-fill-color:var(\n      --color-percent--80to90\n  )}.displays-percentage-colors[style*="--percentage: 83%"]{--circular-progress-fill-color:var(\n      --color-percent--80to90\n  )}.displays-percentage-colors[style*="--percentage: 84%"]{--circular-progress-fill-color:var(\n      --color-percent--80to90\n  )}.displays-percentage-colors[style*="--percentage: 85%"]{--circular-progress-fill-color:var(\n      --color-percent--80to90\n  )}.displays-percentage-colors[style*="--percentage: 86%"]{--circular-progress-fill-color:var(\n      --color-percent--80to90\n  )}.displays-percentage-colors[style*="--percentage: 87%"]{--circular-progress-fill-color:var(\n      --color-percent--80to90\n  )}.displays-percentage-colors[style*="--percentage: 88%"]{--circular-progress-fill-color:var(\n      --color-percent--80to90\n  )}.displays-percentage-colors[style*="--percentage: 89%"]{--circular-progress-fill-color:var(\n      --color-percent--80to90\n  )}.displays-percentage-colors[style*="--percentage: 90%"]{--circular-progress-fill-color:var(\n      --color-percent--90to100\n  )}.displays-percentage-colors[style*="--percentage: 91%"]{--circular-progress-fill-color:var(\n      --color-percent--90to100\n  )}.displays-percentage-colors[style*="--percentage: 92%"]{--circular-progress-fill-color:var(\n      --color-percent--90to100\n  )}.displays-percentage-colors[style*="--percentage: 93%"]{--circular-progress-fill-color:var(\n      --color-percent--90to100\n  )}.displays-percentage-colors[style*="--percentage: 94%"]{--circular-progress-fill-color:var(\n      --color-percent--90to100\n  )}.displays-percentage-colors[style*="--percentage: 95%"]{--circular-progress-fill-color:var(\n      --color-percent--90to100\n  )}.displays-percentage-colors[style*="--percentage: 96%"]{--circular-progress-fill-color:var(\n      --color-percent--90to100\n  )}.displays-percentage-colors[style*="--percentage: 97%"]{--circular-progress-fill-color:var(\n      --color-percent--90to100\n  )}.displays-percentage-colors[style*="--percentage: 98%"]{--circular-progress-fill-color:var(\n      --color-percent--90to100\n  )}.displays-percentage-colors[style*="--percentage: 99%"]{--circular-progress-fill-color:var(\n      --color-percent--90to100\n  )}.displays-percentage-colors[style*="--percentage: 100%"]{--circular-progress-fill-color:var(\n      --color-percent--100to110\n  )}.displays-percentage-colors[style="--percentage: 100%;"]{--circular-progress-fill-color:var(--color-percent--100)}';const l=100;const s=class{constructor(o){r(this,o);this.renderPrefix=()=>{if(this.prefix){return e("span",{class:"prefix"},this.prefix)}};this.value=0;this.maxValue=l;this.prefix=null;this.suffix="%";this.displayPercentageColors=false;this.size=undefined}render(){const r={"lime-circular-progress":true,"displays-percentage-colors":this.displayPercentageColors};const c=this.value*l/this.maxValue+"%";const s=Math.round(this.value*10)/10;return e("div",{role:"progressbar",class:r,"aria-label":"%","aria-valuemin":"0","aria-valuemax":this.maxValue,"aria-valuenow":this.value,style:{"--percentage":c}},this.renderPrefix(),e("span",{class:"value"},o(s),e("span",{class:"suffix"},this.suffix)))}};s.style=c;export{s as limel_circular_progress};
//# sourceMappingURL=limel-circular-progress.entry.js.map