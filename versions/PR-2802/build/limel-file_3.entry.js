import{r as t,c as r,h as o,H as s,g as i}from"./index-6156b4fd.js";import{t as e}from"./translations-dea847ae.js";import{g as n,a as c,b as a}from"./get-icon-props-0b65f85e.js";import{M as l}from"./component-bd36d795.js";import{c as h}from"./random-string-812b1c35.js";import"./component-8200fd05.js";import"./component-c4a88229.js";import"./ponyfill-30263d5e.js";import"./component-2424eedd.js";const d="rgba(var(--color-gray-lighter), 0.4)";const p="rgba(var(--color-cyan-lighter), 0.4)";const g="rgba(var(--color-gray-lighter), 0.4)";const m="rgba(var(--color-blue-lighter), 0.4)";const f="rgba(var(--color-yellow-lighter), 0.4)";const u="rgba(var(--color-green-lighter), 0.4)";const b="rgba(var(--color-coral-lighter), 0.4)";const v="rgba(var(--color-sky-lighter), 0.4)";const x="rgba(var(--color-lime-lighter), 0.4)";const y="rgba(var(--color-magenta-lighter), 0.4)";const k="rgba(var(--color-blue-lighter), 0.4)";const _="rgba(var(--color-orange-lighter), 0.4)";const w="rgba(var(--color-green-lighter), 0.4)";const j="rgba(var(--color-indigo-lighter), 0.4)";const z="rgba(var(--color-red-lighter), 0.4)";const D="rgba(var(--color-orange-lighter), 0.4)";const C="rgba(var(--color-yellow-lighter), 0.4)";const F="rgba(var(--color-red-lighter), 0.4)";const O="rgba(var(--color-glaucous-lighter), 0.4)";const q={msg:C,ics:p,ical:p,icalendar:p,ifb:p,email:g,eml:g,oft:g,ost:g,emlx:g,html:m,xml:m,txt:f,rtf:f,dot:v,doc:v,docx:v,dotx:v,docm:v,dotm:v,odt:_,pages:_,pdf:F,ppt:b,pot:b,pps:b,pptx:b,pptm:b,potx:b,potm:b,ppam:b,ppsx:b,ppsm:b,sldx:b,sldm:b,odp:k,key:k,xls:u,xlsx:u,csv:d,numbers:w,bmp:x,jpg:x,jpeg:x,heic:x,png:x,gif:x,psd:k,ai:_,svg:y,svgz:y,ep:y,eps:y,sketch:y,mp3:j,wav:j,wma:j,ogg:j,flv:z,h264:z,mov:z,mp4:z,mwv:z,zip:D,"7z":D,rar:D,json:O,yaml:O,sql:O,db:O,dbf:O};function A(t){return q[t.toLowerCase()]||d}const K="rgb(var(--color-gray-dark))";const T="rgb(var(--color-cyan-dark))";const E="rgb(var(--color-gray-dark))";const I="rgb(var(--color-blue-dark))";const L="rgb(var(--color-yellow-darker))";const S="rgb(var(--color-green-dark))";const $="rgb(var(--color-coral-dark))";const B="rgb(var(--color-sky-dark))";const H="rgb(var(--color-lime-dark))";const M="rgb(var(--color-magenta-dark))";const N="rgb(var(--color-blue-dark))";const P="rgb(var(--color-orange-dark))";const R="rgb(var(--color-green-dark))";const U="rgb(var(--color-indigo-dark))";const G="rgb(var(--color-red-dark))";const J="rgb(var(--color-brown-default))";const Q="rgb(var(--color-yellow-dark))";const V="rgb(var(--color-red-dark))";const W="rgb(var(--color-glaucous-dark))";const X={msg:Q,ics:T,ical:T,icalendar:T,ifb:T,email:E,eml:E,oft:E,ost:E,emlx:E,html:I,xml:I,txt:L,rtf:L,dot:B,doc:B,docx:B,dotx:B,docm:B,dotm:B,odt:P,pages:P,pdf:V,ppt:$,pot:$,pps:$,pptx:$,pptm:$,potx:$,potm:$,ppam:$,ppsx:$,ppsm:$,sldx:$,sldm:$,odp:N,key:N,xls:S,xlsx:S,csv:K,numbers:R,bmp:H,jpg:H,jpeg:H,heic:H,png:H,gif:H,psd:N,ai:P,svg:M,svgz:M,ep:M,eps:M,sketch:M,mp3:U,wav:U,wma:U,ogg:U,flv:G,h264:G,mov:G,mp4:G,mwv:G,zip:J,"7z":J,rar:J,json:W,yaml:W,sql:W,db:W,dbf:W};function Y(t){return X[t.toLowerCase()]||K}const Z="file";const tt="tear_off_calendar";const rt="email";const ot="internet";const st="text_box";const it="ms_excel_copyrighted";const et="ms_word_copyrighted";const nt="ms_powerpoint_copyrighted";const ct="picture";const at="camera";const lt="vector";const ht="presentation_filled";const dt="overview_pages_2";const pt="data_sheet";const gt="audio_wave";const mt="video_file";const ft="condom_package";const ut="ms_outlook_copyrighted";const bt="database";const vt={msg:ut,ics:tt,ical:tt,icalendar:tt,ifb:tt,email:rt,eml:rt,oft:rt,ost:rt,emlx:rt,html:ot,xml:ot,txt:st,rtf:st,dot:et,doc:et,docx:et,dotx:et,docm:et,dotm:et,odt:dt,pages:dt,pdf:"PDF_2",ppt:nt,pot:nt,pps:nt,pptx:nt,pptm:nt,potx:nt,potm:nt,ppam:nt,ppsx:nt,ppsm:nt,sldx:nt,sldm:nt,odp:ht,key:ht,xls:it,xlsx:it,csv:pt,numbers:pt,jpg:at,jpeg:at,heic:at,bmp:ct,png:ct,gif:ct,psd:"adobe_photoshop_copyrighted",ai:"adobe_illustrator_copyrighted",svg:lt,svgz:lt,ep:lt,eps:lt,sketch:lt,mp3:gt,wav:gt,wma:gt,ogg:gt,avi:mt,flv:mt,h264:mt,mov:mt,mp4:mt,mwv:mt,zip:ft,"7z":ft,rar:ft,json:"json",yaml:bt,sql:bt,db:bt,dbf:bt};function xt(t){return vt[t.toLowerCase()]||Z}function yt(t){const r=n(t.icon);if(r){return r}const o=jt(t);if(!o){return}return xt(o)}function kt(t){const r=c(t.icon,t.iconColor);if(r){return r}const o=jt(t);if(!o){return}return Y(o)}function _t(t){const r=a(t.icon,t.iconBackgroundColor);if(r){return r}const o=jt(t);if(!o){return}return A(o)}function wt(t){const r=n(t.icon);if(r){return r}return jt(t)}function jt(t){if(!t){return}return t.filename.split(".").pop()}const zt=":host{--icon-background-color:rgb(var(--contrast-400));--icon-color:rgb(var(--contrast-1100))}";const Dt="limel-chip-set";const Ct={id:null,text:null,removable:true};const Ft=class{constructor(o){t(this,o);this.change=r(this,"change",7);this.interact=r(this,"interact",7);this.handleNewFiles=t=>{this.preventAndStop(t);this.change.emit(t.detail[0])};this.handleChipSetChange=t=>{t.stopPropagation();const r=!t.detail.length?t.detail[0]:null;this.chipSet.blur();if(!r){this.change.emit(r);if(this.required){this.mdcTextField.valid=false}}};this.handleChipInteract=t=>{t.stopPropagation();t.preventDefault();this.interact.emit(t.detail.id)};this.value=undefined;this.label=undefined;this.required=false;this.disabled=false;this.readonly=false;this.invalid=false;this.accept="*";this.language="en"}connectedCallback(){this.initialize()}componentDidLoad(){this.chipSet=this.element.shadowRoot.querySelector(Dt);this.initialize()}initialize(){if(!this.chipSet){return}this.mdcTextField=new l(this.chipSet.shadowRoot.querySelector(".mdc-text-field"))}disconnectedCallback(){if(this.mdcTextField){this.mdcTextField.destroy()}}render(){return o(s,{onNewFiles:this.handleNewFiles},o("limel-file-dropzone",{disabled:this.disabled||this.readonly||!!this.value,accept:this.accept},this.renderChipSet()))}renderChipSet(){const t=o("limel-chip-set",{disabled:this.disabled,readonly:this.readonly,invalid:this.invalid,label:this.label,leadingIcon:"upload_to_cloud",language:this.language,onChange:this.handleChipSetChange,onInteract:this.handleChipInteract,required:this.required,type:"input",value:this.chipArray,title:this.getTranslation("drag-and-drop-tips")});if(!this.value){return o("limel-file-input",{accept:this.accept,disabled:this.disabled||this.readonly||!!this.value},t)}return t}get chipArray(){if(!this.value){return[]}return[Object.assign(Object.assign({},Ct),{text:this.value.filename,id:this.value.id,icon:{name:yt(this.value),title:wt(this.value),color:kt(this.value),backgroundColor:_t(this.value)},href:this.value.href})]}preventAndStop(t){t.stopPropagation();t.preventDefault()}getTranslation(t){return e.get(`file.${t}`,this.language)}get element(){return i(this)}};Ft.style=zt;function Ot(t){let r={id:h(),filename:t.name,contentType:t.type,size:t.size,fileContent:t};r=Object.assign(Object.assign({},r),{icon:{name:yt(r),title:wt(r),color:kt(r),backgroundColor:_t(r)}});return r}const qt="";const At=class{constructor(o){t(this,o);this.newFiles=r(this,"newFiles",7);this.fileInputId=h();this.handleDrop=t=>{t.stopPropagation();t.preventDefault();if(this.disabled){return}const r=Array.from(t.dataTransfer.files);this.newFiles.emit(r.map(Ot).filter(this.isAccepted))};this.isAccepted=t=>{if(this.accept===undefined||this.accept==="*"){return true}const r=this.accept.split(",");return r.some((r=>{if(r===t.contentType){return true}if(r.endsWith("/*")){const o=r.split("/")[0];return t.contentType.startsWith(`${o}/`)}}))};this.handleOpenFileDialog=t=>{t.stopPropagation();t.preventDefault();if(this.disabled){return}this.triggerFileDialog()};this.handleFileChange=t=>{if(this.fileInput.files.length>0){t.stopPropagation();const r=Ot(this.fileInput.files[0]);this.newFiles.emit([r])}};this.accept="*";this.disabled=false}componentDidRender(){this.fileInput=this.element.shadowRoot.getElementById(this.fileInputId)}render(){return o(s,{onDrop:this.handleDrop,onDragOver:this.handleDragOver,onOpenFileDialog:this.handleOpenFileDialog},o("input",{hidden:true,id:this.fileInputId,onChange:this.handleFileChange,type:"file",accept:this.accept,disabled:this.disabled}),o("slot",null))}handleDragOver(t){t.preventDefault()}triggerFileDialog(){this.fileInput.click()}get element(){return i(this)}};At.style=qt;const Kt=class{constructor(o){t(this,o);this.newFiles=r(this,"newFiles",7);this.fileInputId=h();this.handleClick=t=>{if(this.disabled){t.stopPropagation();t.preventDefault();return}this.triggerFileDialog();t.stopPropagation()};this.handleKeyUp=t=>{t.stopPropagation();t.preventDefault();if(t.code==="Enter"){this.triggerFileDialog()}};this.handleFileChange=t=>{const r=Array.from(this.fileInput.files);if(r.length>0){t.stopPropagation();this.newFiles.emit(r.map(Ot));this.fileInput.value=""}};this.accept="*";this.disabled=false}componentDidLoad(){this.fileInput=this.element.shadowRoot.getElementById(this.fileInputId)}render(){return o(s,{onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown},o("input",{hidden:true,id:this.fileInputId,onChange:this.handleFileChange,type:"file",accept:this.accept,disabled:this.disabled}),o("slot",null))}handleKeyDown(t){if(t.code==="Tab"||t.code==="Backspace"||t.code==="Enter"){return}t.preventDefault();t.stopPropagation()}triggerFileDialog(){this.fileInput.click()}get element(){return i(this)}};export{Ft as limel_file,At as limel_file_dropzone,Kt as limel_file_input};
//# sourceMappingURL=limel-file_3.entry.js.map