import{r,c as o,h as e}from"./index-a55db97c.js";const a=class{constructor(a){r(this,a),this.change=o(this,"change",7),this.renderTooltip=()=>{if(!this.readonly&&this.tooltipLabel)return e("limel-tooltip",{label:this.tooltipLabel,elementId:"tooltip-button"})},this.renderPickerPalette=()=>this.readonly?this.renderPickerTrigger():e("limel-popover",{open:this.isOpen,openDirection:"bottom-start",onClose:this.onPopoverClose},this.renderPickerTrigger(),e("limel-color-picker-palette",{value:this.value,label:this.label,helperText:this.helperText,onLimelChange:this.handleChange,required:this.required})),this.renderPickerTrigger=()=>e("div",{class:"picker-trigger",slot:"trigger",style:this.value?{"--background":this.value}:{},role:"button",tabindex:"0",onClick:this.openPopover,id:"tooltip-button"}),this.openPopover=r=>{r.stopPropagation(),this.isOpen=!0},this.onPopoverClose=r=>{r.stopPropagation(),this.isOpen=!1},this.handleChange=r=>{r.stopPropagation(),this.change.emit(r.detail)},this.value=void 0,this.label=void 0,this.helperText=void 0,this.tooltipLabel=void 0,this.required=void 0,this.readonly=void 0,this.isOpen=!1}render(){return[this.renderTooltip(),e("div",{class:"color-picker"},this.renderPickerPalette(),e("limel-input-field",{label:this.label,helperText:this.helperText,value:this.value,onChange:this.handleChange,required:this.required,readonly:this.readonly,class:"chosen-color-input"}))]}};a.style='.picker-trigger[style="--background:lime-magenta;"]:after,.chosen-color-preview[style="--background:lime-magenta;"]:after{background-color:var(--lime-magenta)}.picker-trigger[style="--background:lime-blue;"]:after,.chosen-color-preview[style="--background:lime-blue;"]:after{background-color:var(--lime-blue)}.picker-trigger[style="--background:lime-orange;"]:after,.chosen-color-preview[style="--background:lime-orange;"]:after{background-color:var(--lime-orange)}.picker-trigger[style="--background:lime-green;"]:after,.chosen-color-preview[style="--background:lime-green;"]:after{background-color:var(--lime-green)}.picker-trigger[style="--background:lime-red;"]:after,.chosen-color-preview[style="--background:lime-red;"]:after{background-color:var(--lime-red)}.picker-trigger[style="--background:lime-dark-blue;"]:after,.chosen-color-preview[style="--background:lime-dark-blue;"]:after{background-color:var(--lime-dark-blue)}.picker-trigger[style="--background:lime-turquoise;"]:after,.chosen-color-preview[style="--background:lime-turquoise;"]:after{background-color:var(--lime-turquoise)}.picker-trigger[style="--background:lime-yellow;"]:after,.chosen-color-preview[style="--background:lime-yellow;"]:after{background-color:var(--lime-yellow)}.picker-trigger[style="--background:lime-light-grey;"]:after,.chosen-color-preview[style="--background:lime-light-grey;"]:after{background-color:var(--lime-light-grey)}:host{--popover-surface-width:50rem;--color-picker-default-background:url("data:image/svg+xml;charset=utf-8, <svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\' style=\'fill-rule:evenodd;\'><path fill=\'rgba(186,186,192,0.16)\' d=\'M0 0h4v4H0zM4 4h4v4H4z\'/></svg>")}.color-picker{display:grid;gap:0.5rem;grid-template-columns:auto 1fr}.chosen-color-preview,.picker-trigger{box-sizing:border-box;position:relative;isolation:isolate;width:3.5rem;height:3.5rem}.chosen-color-preview:before,.chosen-color-preview:after,.picker-trigger:before,.picker-trigger:after{content:"";position:absolute;inset:0;border-radius:inherit}.chosen-color-preview:before,.picker-trigger:before{background:var(--color-picker-default-background);background-size:0.5rem;z-index:0}.chosen-color-preview:after,.picker-trigger:after{background:var(--background);z-index:1}.picker-trigger{border-radius:0.5rem;transition:color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;color:var(--mdc-theme-on-surface);background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-normal)}.picker-trigger:hover{color:var(--mdc-theme-on-surface);background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-hovered)}.picker-trigger:active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}.picker-trigger:after{box-shadow:0 0 0 0.25rem rgb(var(--contrast-100)) inset}:host([readonly]) .picker-trigger:hover,:host([readonly]) .picker-trigger:active{cursor:default;box-shadow:var(--button-shadow-normal);transform:none}.chosen-color-input[readonly]{transform:translateY(1rem)}';const l=["red","pink","magenta","purple","violet","indigo","blue","sky","cyan","teal","green","lime","grass","yellow","amber","orange","coral","brown","gray","glaucous"],c=["lighter","light","default","dark","darker"];function t(r,o){return`--color-${r}-${o}`}function g(r,o){return`rgb(var(${t(r,o)}))`}const i=class{constructor(a){r(this,a),this.change=o(this,"change",7),this.limelChange=o(this,"limelChange",7),this.renderSwatches=()=>l.map((r=>c.map(this.renderSwatch(r)))),this.renderSwatch=r=>o=>{const a={swatch:!0,[t(r,o)]:!0,"swatch--selected":this.value===g(r,o)};return e("div",{class:a,onClick:this.handleClick(r,o),tabindex:"0"})},this.handleChange=r=>{r.stopPropagation(),this.change.emit(r.detail),this.limelChange.emit(r.detail)},this.handleClick=(r,o)=>e=>{const a=g(r,o);e.stopPropagation(),this.change.emit(a),this.limelChange.emit(a)},this.value=void 0,this.label=void 0,this.helperText=void 0,this.required=void 0}render(){const r=this.value?{"--background":this.value}:{};return[e("div",{class:"color-picker-palette"},this.renderSwatches()),e("div",{class:"chosen-color-name"},e("limel-input-field",{label:this.label,helperText:this.helperText,value:this.value,onChange:this.handleChange,required:this.required}),e("div",{class:"chosen-color-preview",style:r}))]}};i.style='.color-palette{display:grid;gap:0.25rem;grid-auto-flow:column;margin:0.75rem auto 1.25rem auto;padding:1.25rem 0.75rem;background-color:rgb(var(--kompendium-contrast-300));border-radius:0.1875rem}.brightness-label,.swatch{display:flex;align-items:center;position:relative}.swatch{transition:border-radius 0.2s ease;border-radius:3px;justify-content:center;color:rgba(var(--kompendium-color-white), 0.4);font-size:1.25rem;line-height:99%}.swatch:after{content:"";display:block;padding-top:100%}.swatch.hue{font-family:"Source Code Pro", monospace;font-size:0.75rem;position:relative;color:rgb(var(--kompendium-contrast-900));padding-top:0.5rem;writing-mode:vertical-lr;justify-content:left}.brightness-label{font-family:"Source Code Pro", monospace;font-size:0.75rem;color:rgb(var(--kompendium-contrast-900));justify-content:start}.brand-colors-tips{transition:opacity 0.2s ease 0.4s;opacity:0;font-size:0.875rem;padding-left:2.75rem;margin-bottom:2.5rem}.brand-colors .brand-colors-tips{opacity:1}@media (prefers-color-scheme: light){.brand-colors .--color-glaucous-default,.brand-colors .--color-gray-dark{border-radius:50%}}@media (prefers-color-scheme: dark){.brand-colors .--color-red-light,.brand-colors .--color-magenta-default,.brand-colors .--color-sky-light,.brand-colors .--color-teal-light,.brand-colors .--color-green-light,.brand-colors .--color-amber-light,.brand-colors .--color-amber-default,.brand-colors .--color-coral-light,.brand-colors .--color-gray-light{border-radius:50%}}.--color-red-lighter{background-color:rgb(var(--color-red-lighter))}.--color-red-light{background-color:rgb(var(--color-red-light))}.--color-red-default{background-color:rgb(var(--color-red-default))}.--color-red-dark{background-color:rgb(var(--color-red-dark))}.--color-red-darker{background-color:rgb(var(--color-red-darker))}.--color-pink-lighter{background-color:rgb(var(--color-pink-lighter))}.--color-pink-light{background-color:rgb(var(--color-pink-light))}.--color-pink-default{background-color:rgb(var(--color-pink-default))}.--color-pink-dark{background-color:rgb(var(--color-pink-dark))}.--color-pink-darker{background-color:rgb(var(--color-pink-darker))}.--color-magenta-lighter{background-color:rgb(var(--color-magenta-lighter))}.--color-magenta-light{background-color:rgb(var(--color-magenta-light))}.--color-magenta-default{background-color:rgb(var(--color-magenta-default))}.--color-magenta-dark{background-color:rgb(var(--color-magenta-dark))}.--color-magenta-darker{background-color:rgb(var(--color-magenta-darker))}.--color-purple-lighter{background-color:rgb(var(--color-purple-lighter))}.--color-purple-light{background-color:rgb(var(--color-purple-light))}.--color-purple-default{background-color:rgb(var(--color-purple-default))}.--color-purple-dark{background-color:rgb(var(--color-purple-dark))}.--color-purple-darker{background-color:rgb(var(--color-purple-darker))}.--color-violet-lighter{background-color:rgb(var(--color-violet-lighter))}.--color-violet-light{background-color:rgb(var(--color-violet-light))}.--color-violet-default{background-color:rgb(var(--color-violet-default))}.--color-violet-dark{background-color:rgb(var(--color-violet-dark))}.--color-violet-darker{background-color:rgb(var(--color-violet-darker))}.--color-indigo-lighter{background-color:rgb(var(--color-indigo-lighter))}.--color-indigo-light{background-color:rgb(var(--color-indigo-light))}.--color-indigo-default{background-color:rgb(var(--color-indigo-default))}.--color-indigo-dark{background-color:rgb(var(--color-indigo-dark))}.--color-indigo-darker{background-color:rgb(var(--color-indigo-darker))}.--color-blue-lighter{background-color:rgb(var(--color-blue-lighter))}.--color-blue-light{background-color:rgb(var(--color-blue-light))}.--color-blue-default{background-color:rgb(var(--color-blue-default))}.--color-blue-dark{background-color:rgb(var(--color-blue-dark))}.--color-blue-darker{background-color:rgb(var(--color-blue-darker))}.--color-sky-lighter{background-color:rgb(var(--color-sky-lighter))}.--color-sky-light{background-color:rgb(var(--color-sky-light))}.--color-sky-default{background-color:rgb(var(--color-sky-default))}.--color-sky-dark{background-color:rgb(var(--color-sky-dark))}.--color-sky-darker{background-color:rgb(var(--color-sky-darker))}.--color-cyan-lighter{background-color:rgb(var(--color-cyan-lighter))}.--color-cyan-light{background-color:rgb(var(--color-cyan-light))}.--color-cyan-default{background-color:rgb(var(--color-cyan-default))}.--color-cyan-dark{background-color:rgb(var(--color-cyan-dark))}.--color-cyan-darker{background-color:rgb(var(--color-cyan-darker))}.--color-teal-lighter{background-color:rgb(var(--color-teal-lighter))}.--color-teal-light{background-color:rgb(var(--color-teal-light))}.--color-teal-default{background-color:rgb(var(--color-teal-default))}.--color-teal-dark{background-color:rgb(var(--color-teal-dark))}.--color-teal-darker{background-color:rgb(var(--color-teal-darker))}.--color-green-lighter{background-color:rgb(var(--color-green-lighter))}.--color-green-light{background-color:rgb(var(--color-green-light))}.--color-green-default{background-color:rgb(var(--color-green-default))}.--color-green-dark{background-color:rgb(var(--color-green-dark))}.--color-green-darker{background-color:rgb(var(--color-green-darker))}.--color-lime-lighter{background-color:rgb(var(--color-lime-lighter))}.--color-lime-light{background-color:rgb(var(--color-lime-light))}.--color-lime-default{background-color:rgb(var(--color-lime-default))}.--color-lime-dark{background-color:rgb(var(--color-lime-dark))}.--color-lime-darker{background-color:rgb(var(--color-lime-darker))}.--color-grass-lighter{background-color:rgb(var(--color-grass-lighter))}.--color-grass-light{background-color:rgb(var(--color-grass-light))}.--color-grass-default{background-color:rgb(var(--color-grass-default))}.--color-grass-dark{background-color:rgb(var(--color-grass-dark))}.--color-grass-darker{background-color:rgb(var(--color-grass-darker))}.--color-yellow-lighter{background-color:rgb(var(--color-yellow-lighter))}.--color-yellow-light{background-color:rgb(var(--color-yellow-light))}.--color-yellow-default{background-color:rgb(var(--color-yellow-default))}.--color-yellow-dark{background-color:rgb(var(--color-yellow-dark))}.--color-yellow-darker{background-color:rgb(var(--color-yellow-darker))}.--color-amber-lighter{background-color:rgb(var(--color-amber-lighter))}.--color-amber-light{background-color:rgb(var(--color-amber-light))}.--color-amber-default{background-color:rgb(var(--color-amber-default))}.--color-amber-dark{background-color:rgb(var(--color-amber-dark))}.--color-amber-darker{background-color:rgb(var(--color-amber-darker))}.--color-orange-lighter{background-color:rgb(var(--color-orange-lighter))}.--color-orange-light{background-color:rgb(var(--color-orange-light))}.--color-orange-default{background-color:rgb(var(--color-orange-default))}.--color-orange-dark{background-color:rgb(var(--color-orange-dark))}.--color-orange-darker{background-color:rgb(var(--color-orange-darker))}.--color-coral-lighter{background-color:rgb(var(--color-coral-lighter))}.--color-coral-light{background-color:rgb(var(--color-coral-light))}.--color-coral-default{background-color:rgb(var(--color-coral-default))}.--color-coral-dark{background-color:rgb(var(--color-coral-dark))}.--color-coral-darker{background-color:rgb(var(--color-coral-darker))}.--color-brown-lighter{background-color:rgb(var(--color-brown-lighter))}.--color-brown-light{background-color:rgb(var(--color-brown-light))}.--color-brown-default{background-color:rgb(var(--color-brown-default))}.--color-brown-dark{background-color:rgb(var(--color-brown-dark))}.--color-brown-darker{background-color:rgb(var(--color-brown-darker))}.--color-gray-lighter{background-color:rgb(var(--color-gray-lighter))}.--color-gray-light{background-color:rgb(var(--color-gray-light))}.--color-gray-default{background-color:rgb(var(--color-gray-default))}.--color-gray-dark{background-color:rgb(var(--color-gray-dark))}.--color-gray-darker{background-color:rgb(var(--color-gray-darker))}.--color-glaucous-lighter{background-color:rgb(var(--color-glaucous-lighter))}.--color-glaucous-light{background-color:rgb(var(--color-glaucous-light))}.--color-glaucous-default{background-color:rgb(var(--color-glaucous-default))}.--color-glaucous-dark{background-color:rgb(var(--color-glaucous-dark))}.--color-glaucous-darker{background-color:rgb(var(--color-glaucous-darker))}.--contrast-100{color:rgb(var(--contrast-900));background-color:rgb(var(--contrast-100))}.--contrast-200{color:rgb(var(--contrast-1000));background-color:rgb(var(--contrast-200))}.--contrast-300{color:rgb(var(--contrast-1100));background-color:rgb(var(--contrast-300))}.--contrast-400{color:rgb(var(--contrast-1200));background-color:rgb(var(--contrast-400))}.--contrast-500{color:rgb(var(--contrast-1300));background-color:rgb(var(--contrast-500))}.--contrast-600{color:rgb(var(--contrast-1400));background-color:rgb(var(--contrast-600))}.--contrast-700{color:rgb(var(--contrast-1500));background-color:rgb(var(--contrast-700))}.--contrast-800{color:rgb(var(--contrast-1600));background-color:rgb(var(--contrast-800))}.--contrast-900{color:rgb(var(--contrast-1700));background-color:rgb(var(--contrast-900))}.--contrast-1000{color:rgb(var(--contrast-100));background-color:rgb(var(--contrast-1000))}.--contrast-1100{color:rgb(var(--contrast-200));background-color:rgb(var(--contrast-1100))}.--contrast-1200{color:rgb(var(--contrast-300));background-color:rgb(var(--contrast-1200))}.--contrast-1300{color:rgb(var(--contrast-400));background-color:rgb(var(--contrast-1300))}.--contrast-1400{color:rgb(var(--contrast-500));background-color:rgb(var(--contrast-1400))}.--contrast-1500{color:rgb(var(--contrast-600));background-color:rgb(var(--contrast-1500))}.--contrast-1600{color:rgb(var(--contrast-700));background-color:rgb(var(--contrast-1600))}.--contrast-1700{color:rgb(var(--contrast-800));background-color:rgb(var(--contrast-1700))}.--color-white{color:rgb(var(--color-black));background-color:rgb(var(--color-white))}.--color-black{color:rgb(var(--color-white));background-color:rgb(var(--color-black))}.color-palette{grid-template-rows:repeat(5, 1fr) auto;grid-template-columns:repeat(20, 1fr) auto}.picker-trigger[style="--background:lime-magenta;"]:after,.chosen-color-preview[style="--background:lime-magenta;"]:after{background-color:var(--lime-magenta)}.picker-trigger[style="--background:lime-blue;"]:after,.chosen-color-preview[style="--background:lime-blue;"]:after{background-color:var(--lime-blue)}.picker-trigger[style="--background:lime-orange;"]:after,.chosen-color-preview[style="--background:lime-orange;"]:after{background-color:var(--lime-orange)}.picker-trigger[style="--background:lime-green;"]:after,.chosen-color-preview[style="--background:lime-green;"]:after{background-color:var(--lime-green)}.picker-trigger[style="--background:lime-red;"]:after,.chosen-color-preview[style="--background:lime-red;"]:after{background-color:var(--lime-red)}.picker-trigger[style="--background:lime-dark-blue;"]:after,.chosen-color-preview[style="--background:lime-dark-blue;"]:after{background-color:var(--lime-dark-blue)}.picker-trigger[style="--background:lime-turquoise;"]:after,.chosen-color-preview[style="--background:lime-turquoise;"]:after{background-color:var(--lime-turquoise)}.picker-trigger[style="--background:lime-yellow;"]:after,.chosen-color-preview[style="--background:lime-yellow;"]:after{background-color:var(--lime-yellow)}.picker-trigger[style="--background:lime-light-grey;"]:after,.chosen-color-preview[style="--background:lime-light-grey;"]:after{background-color:var(--lime-light-grey)}:host{--popover-surface-width:50rem;--color-picker-default-background:url("data:image/svg+xml;charset=utf-8, <svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\' style=\'fill-rule:evenodd;\'><path fill=\'rgba(186,186,192,0.16)\' d=\'M0 0h4v4H0zM4 4h4v4H4z\'/></svg>")}.color-picker{display:grid;gap:0.5rem;grid-template-columns:auto 1fr}.chosen-color-preview,.picker-trigger{box-sizing:border-box;position:relative;isolation:isolate;width:3.5rem;height:3.5rem}.chosen-color-preview:before,.chosen-color-preview:after,.picker-trigger:before,.picker-trigger:after{content:"";position:absolute;inset:0;border-radius:inherit}.chosen-color-preview:before,.picker-trigger:before{background:var(--color-picker-default-background);background-size:0.5rem;z-index:0}.chosen-color-preview:after,.picker-trigger:after{background:var(--background);z-index:1}.picker-trigger{border-radius:0.5rem;transition:color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;color:var(--mdc-theme-on-surface);background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-normal)}.picker-trigger:hover{color:var(--mdc-theme-on-surface);background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-hovered)}.picker-trigger:active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}.picker-trigger:after{box-shadow:0 0 0 0.25rem rgb(var(--contrast-100)) inset}:host([readonly]) .picker-trigger:hover,:host([readonly]) .picker-trigger:active{cursor:default;box-shadow:var(--button-shadow-normal);transform:none}.chosen-color-input[readonly]{transform:translateY(1rem)}:host{border-radius:0.75rem;background-color:rgb(var(--kompendium-contrast-300))}.color-picker-palette{display:grid;gap:0.25rem;grid-auto-flow:column;grid-template-columns:repeat(20, 1fr);grid-template-rows:repeat(4, 1fr) auto;margin:1rem}.chosen-color-name{box-sizing:border-box;padding:1rem;display:grid;grid-template-columns:1fr auto;gap:0.5rem}.chosen-color-preview{border:1px solid rgba(var(--contrast-700), 0.65);border-radius:50%}.swatch:not(.hue){transition:color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer}.swatch:not(.hue):hover{box-shadow:var(--button-shadow-hovered)}.swatch:not(.hue):active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}.swatch:not(.hue):focus-visible{box-shadow:var(--shadow-depth-8-focused), 0 0 0 0.25rem rgb(var(--contrast-100)) inset}.swatch--selected{border-radius:50%}';export{a as limel_color_picker,i as limel_color_picker_palette}