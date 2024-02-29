import{r as t,c as o,h as r,H as e,g as s}from"./index-6156b4fd.js";import{t as i}from"./translations-dea847ae.js";import{g as n,a as l,b as a}from"./get-icon-props-0b65f85e.js";import{M as c}from"./component-bd36d795.js";import{c as d}from"./random-string-812b1c35.js";import"./component-8200fd05.js";import"./component-c4a88229.js";import"./ponyfill-30263d5e.js";import"./component-2424eedd.js";const h="rgba(var(--color-gray-lighter), 0.4)";const p="rgba(var(--color-cyan-lighter), 0.4)";const g="rgba(var(--color-gray-lighter), 0.4)";const m="rgba(var(--color-blue-lighter), 0.4)";const f="rgba(var(--color-yellow-lighter), 0.4)";const u="rgba(var(--color-green-lighter), 0.4)";const b="rgba(var(--color-coral-lighter), 0.4)";const v="rgba(var(--color-sky-lighter), 0.4)";const x="rgba(var(--color-lime-lighter), 0.4)";const k="rgba(var(--color-magenta-lighter), 0.4)";const y="rgba(var(--color-blue-lighter), 0.4)";const w="rgba(var(--color-orange-lighter), 0.4)";const _="rgba(var(--color-green-lighter), 0.4)";const j="rgba(var(--color-indigo-lighter), 0.4)";const z="rgba(var(--color-red-lighter), 0.4)";const D="rgba(var(--color-orange-lighter), 0.4)";const C="rgba(var(--color-yellow-lighter), 0.4)";const O="rgba(var(--color-red-lighter), 0.4)";const q="rgba(var(--color-glaucous-lighter), 0.4)";const A={msg:C,ics:p,ical:p,icalendar:p,ifb:p,email:g,eml:g,oft:g,ost:g,emlx:g,html:m,xml:m,txt:f,rtf:f,dot:v,doc:v,docx:v,dotx:v,docm:v,dotm:v,odt:w,pages:w,pdf:O,ppt:b,pot:b,pps:b,pptx:b,pptm:b,potx:b,potm:b,ppam:b,ppsx:b,ppsm:b,sldx:b,sldm:b,odp:y,key:y,xls:u,xlsx:u,csv:h,numbers:_,bmp:x,jpg:x,jpeg:x,heic:x,png:x,gif:x,psd:y,ai:w,svg:k,svgz:k,ep:k,eps:k,sketch:k,mp3:j,wav:j,wma:j,ogg:j,flv:z,h264:z,mov:z,mp4:z,mwv:z,zip:D,"7z":D,rar:D,json:q,yaml:q,sql:q,db:q,dbf:q};function L(t){return A[t.toLowerCase()]||h}const S="rgb(var(--color-gray-dark))";const F="rgb(var(--color-cyan-dark))";const K="rgb(var(--color-gray-dark))";const T="rgb(var(--color-blue-dark))";const $="rgb(var(--color-yellow-darker))";const B="rgb(var(--color-green-dark))";const E="rgb(var(--color-coral-dark))";const I="rgb(var(--color-sky-dark))";const H="rgb(var(--color-lime-dark))";const M="rgb(var(--color-magenta-dark))";const N="rgb(var(--color-blue-dark))";const P="rgb(var(--color-orange-dark))";const U="rgb(var(--color-green-dark))";const G="rgb(var(--color-indigo-dark))";const J="rgb(var(--color-red-dark))";const Q="rgb(var(--color-brown-default))";const R="rgb(var(--color-yellow-dark))";const V="rgb(var(--color-red-dark))";const W="rgb(var(--color-glaucous-dark))";const X={msg:R,ics:F,ical:F,icalendar:F,ifb:F,email:K,eml:K,oft:K,ost:K,emlx:K,html:T,xml:T,txt:$,rtf:$,dot:I,doc:I,docx:I,dotx:I,docm:I,dotm:I,odt:P,pages:P,pdf:V,ppt:E,pot:E,pps:E,pptx:E,pptm:E,potx:E,potm:E,ppam:E,ppsx:E,ppsm:E,sldx:E,sldm:E,odp:N,key:N,xls:B,xlsx:B,csv:S,numbers:U,bmp:H,jpg:H,jpeg:H,heic:H,png:H,gif:H,psd:N,ai:P,svg:M,svgz:M,ep:M,eps:M,sketch:M,mp3:G,wav:G,wma:G,ogg:G,flv:J,h264:J,mov:J,mp4:J,mwv:J,zip:Q,"7z":Q,rar:Q,json:W,yaml:W,sql:W,db:W,dbf:W};function Y(t){return X[t.toLowerCase()]||S}const Z="file";const tt="tear_off_calendar";const ot="email";const rt="internet";const et="text_box";const st="ms_excel_copyrighted";const it="ms_word_copyrighted";const nt="ms_powerpoint_copyrighted";const lt="picture";const at="camera";const ct="vector";const dt="presentation_filled";const ht="overview_pages_2";const pt="data_sheet";const gt="audio_wave";const mt="video_file";const ft="condom_package";const ut="ms_outlook_copyrighted";const bt="database";const vt={msg:ut,ics:tt,ical:tt,icalendar:tt,ifb:tt,email:ot,eml:ot,oft:ot,ost:ot,emlx:ot,html:rt,xml:rt,txt:et,rtf:et,dot:it,doc:it,docx:it,dotx:it,docm:it,dotm:it,odt:ht,pages:ht,pdf:"PDF_2",ppt:nt,pot:nt,pps:nt,pptx:nt,pptm:nt,potx:nt,potm:nt,ppam:nt,ppsx:nt,ppsm:nt,sldx:nt,sldm:nt,odp:dt,key:dt,xls:st,xlsx:st,csv:pt,numbers:pt,jpg:at,jpeg:at,heic:at,bmp:lt,png:lt,gif:lt,psd:"adobe_photoshop_copyrighted",ai:"adobe_illustrator_copyrighted",svg:ct,svgz:ct,ep:ct,eps:ct,sketch:ct,mp3:gt,wav:gt,wma:gt,ogg:gt,avi:mt,flv:mt,h264:mt,mov:mt,mp4:mt,mwv:mt,zip:ft,"7z":ft,rar:ft,json:"json",yaml:bt,sql:bt,db:bt,dbf:bt};function xt(t){return vt[t.toLowerCase()]||Z}function kt(t){const o=n(t.icon);if(o){return o}const r=jt(t);if(!r){return}return xt(r)}function yt(t){const o=l(t.icon,t.iconColor);if(o){return o}const r=jt(t);if(!r){return}return Y(r)}function wt(t){const o=a(t.icon,t.iconBackgroundColor);if(o){return o}const r=jt(t);if(!r){return}return L(r)}function _t(t){const o=n(t.icon);if(o){return o}return jt(t)}function jt(t){if(!t){return}return t.filename.split(".").pop()}const zt=":host{--icon-background-color:rgb(var(--contrast-400));--icon-color:rgb(var(--contrast-1100))}";const Dt="limel-chip-set";const Ct={id:null,text:null,removable:true};const Ot=class{constructor(r){t(this,r);this.change=o(this,"change",7);this.interact=o(this,"interact",7);this.handleNewFiles=t=>{this.preventAndStop(t);this.change.emit(t.detail[0])};this.handleChipSetChange=t=>{t.stopPropagation();const o=!t.detail.length?t.detail[0]:null;this.chipSet.blur();if(!o){this.change.emit(o);if(this.required){this.mdcTextField.valid=false}}};this.handleChipInteract=t=>{t.stopPropagation();t.preventDefault();this.interact.emit(t.detail.id)};this.value=undefined;this.label=undefined;this.required=false;this.disabled=false;this.readonly=false;this.invalid=false;this.accept="*";this.language="en"}connectedCallback(){this.initialize()}componentDidLoad(){this.chipSet=this.element.shadowRoot.querySelector(Dt);this.initialize()}initialize(){if(!this.chipSet){return}this.mdcTextField=new c(this.chipSet.shadowRoot.querySelector(".mdc-text-field"))}disconnectedCallback(){if(this.mdcTextField){this.mdcTextField.destroy()}}render(){return r(e,{onNewFiles:this.handleNewFiles},r("limel-file-dropzone",{disabled:this.disabled||this.readonly||!!this.value,accept:this.accept},this.renderChipSet()))}renderChipSet(){const t=r("limel-chip-set",{disabled:this.disabled,readonly:this.readonly,invalid:this.invalid,label:this.label,leadingIcon:"upload_to_cloud",language:this.language,onChange:this.handleChipSetChange,onInteract:this.handleChipInteract,required:this.required,type:"input",value:this.chipArray,title:this.getTranslation("drag-and-drop-tips")});if(!this.value){return r("limel-file-input",{accept:this.accept,disabled:this.disabled||this.readonly||!!this.value},t)}return t}get chipArray(){if(!this.value){return[]}return[Object.assign(Object.assign({},Ct),{text:this.value.filename,id:this.value.id,icon:{name:kt(this.value),title:_t(this.value),color:yt(this.value),backgroundColor:wt(this.value)},href:this.value.href})]}preventAndStop(t){t.stopPropagation();t.preventDefault()}getTranslation(t){return i.get(`file.${t}`,this.language)}get element(){return s(this)}};Ot.style=zt;function qt(t){let o={id:d(),filename:t.name,contentType:t.type,size:t.size,fileContent:t};o=Object.assign(Object.assign({},o),{icon:{name:kt(o),title:_t(o),color:yt(o),backgroundColor:wt(o)}});return o}function At(t,o){if(o===undefined||o==="*"){return true}const r=o.split(",").map((t=>t.trim()));return r.some((o=>{if(o===t.contentType){return true}if(o.endsWith("/*")){const r=o.split("/")[0];return t.contentType.startsWith(`${r}/`)}if(o.startsWith(".")){const r=o.split(".")[1];return t.contentType.endsWith(`/${r}`)}}))}const Lt=":host(limel-file-dropzone.has-file-to-drop):before,:host(limel-file-dropzone.has-file-to-drop):after{content:\"\";position:absolute;inset:0}:host(limel-file-dropzone.has-file-to-drop):before{z-index:0}:host(limel-file-dropzone.has-file-to-drop):after{border:0.25rem dashed rgb(var(--color-gray-light));border-radius:1rem;background-color:rgb(var(--color-gray-dark));background-image:url(\"data:image/svg+xml;utf8,<svg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20enable-background='new%200%200%2032%2032'%20xml:space='preserve'><polyline%20fill='none'%20stroke='%23000000'%20stroke-width='2'%20stroke-miterlimit='10'%20points='18.2,28%207,28%207,4%2019,4%2025,10%2025,17'%20/><polyline%20fill='none'%20stroke='%23000000'%20stroke-width='2'%20stroke-miterlimit='10'%20points='19,4%2019,10%2025,10'%20/><circle%20fill='none'%20stroke='%23000000'%20stroke-width='2'%20stroke-miterlimit='10'%20cx='24'%20cy='24'%20r='7'%20/><line%20fill='none'%20stroke='%23000000'%20stroke-width='2'%20stroke-miterlimit='10'%20x1='24'%20y1='28'%20x2='24'%20y2='20'%20/><line%20fill='none'%20stroke='%23000000'%20stroke-width='2'%20stroke-miterlimit='10'%20x1='20'%20y1='24'%20x2='28'%20y2='24'/></svg>\");background-repeat:no-repeat;background-size:6.25rem;background-position:right 50% top 35%;opacity:0.7;margin:0.125rem;isolation:isolate;z-index:1;content:var(--dropzone-text, \"Drop your files here\");font-size:var(--dropzone-text-size, 20px);font-weight:bold;display:flex;justify-content:center;align-items:center;color:black}";const St=class{constructor(r){t(this,r);this.filesSelected=o(this,"filesSelected",7);this.handleDrop=t=>{t.stopPropagation();t.preventDefault();this.hasFileToDrop=false;if(this.disabled){return}const o=Array.from(t.dataTransfer.files);const r=o.map(qt).filter((t=>At(t,this.accept)));this.filesSelected.emit(r)};this.handleDragOver=t=>{this.hasFileToDrop=true;t.preventDefault()};this.handleDragLeave=t=>{this.hasFileToDrop=false;t.preventDefault()};this.accept="*";this.disabled=false;this.hasFileToDrop=false}render(){return r(e,{class:{"has-file-to-drop":this.hasFileToDrop},onDrop:this.handleDrop,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave},r("slot",null))}};St.style=Lt;const Ft=class{constructor(r){t(this,r);this.filesSelected=o(this,"filesSelected",7);this.fileInputId=d();this.handleClick=t=>{if(this.disabled){t.stopPropagation();t.preventDefault();return}this.triggerFileDialog();t.stopPropagation()};this.handleKeyUp=t=>{t.stopPropagation();t.preventDefault();if(t.code==="Enter"){this.triggerFileDialog()}};this.handleFileChange=t=>{const o=Array.from(this.fileInput.files);if(o.length>0){t.stopPropagation();this.filesSelected.emit(o.map(qt));this.fileInput.value=""}};this.accept="*";this.disabled=false}componentDidLoad(){this.fileInput=this.element.shadowRoot.getElementById(this.fileInputId)}render(){return r(e,{onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown},r("input",{hidden:true,id:this.fileInputId,onChange:this.handleFileChange,type:"file",accept:this.accept,disabled:this.disabled}),r("slot",null))}handleKeyDown(t){if(t.code==="Tab"||t.code==="Backspace"||t.code==="Enter"){return}t.preventDefault();t.stopPropagation()}triggerFileDialog(){this.fileInput.click()}get element(){return s(this)}};export{Ot as limel_file,St as limel_file_dropzone,Ft as limel_file_input};
//# sourceMappingURL=limel-file_3.entry.js.map