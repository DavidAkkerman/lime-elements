import{r as t,c as e,h as o,g as i}from"./index-6156b4fd.js";import{t as r}from"./translations-dea847ae.js";function s(t,e){const o=t||e;if(!o){return"unknown"}const i=o.split(".").pop().toLowerCase();const r={pdf:"pdf",jpg:"image",jpeg:"image",heic:"image",bmp:"image",png:"image",gif:"image",svg:"image",svgz:"image",ep:"image",eps:"image",avi:"video",flv:"video",h264:"video",mov:"video",mp4:"video",mwv:"video",mkv:"video",mp3:"audio",wav:"audio",wma:"audio",ogg:"audio",txt:"text",json:"text",html:"text",xml:"text",doc:"office",docx:"office",odt:"office",dot:"office",dotx:"office",docm:"office",dotm:"office",pot:"office",ppt:"office",pptx:"office",odp:"office",potx:"office",potm:"office",pps:"office",ppsx:"office",ppsm:"office",pptm:"office",ppam:"office",pages:"office",xls:"office",xlsx:"office",xlsm:"office",xlsb:"office",ods:"office",csv:"office",numbers:"office"};return r[i]||"unknown"}class n{constructor(t){this.requestFullscreen=()=>{if(this.enter){this.enter()}};this.exitFullscreen=()=>{if(this.exit){this.exit.bind(window.document)()}};this.toggle=()=>{const t=window.document;const e=t.fullscreenElement||t.mozFullScreenElement||t.webkitFullscreenElement||t.msFullscreenElement;if(e){this.exitFullscreen()}else{this.requestFullscreen()}};this.enter=t.requestFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen||t.webkitRequestFullscreen;this.enter=this.enter.bind(t);const e=window.document;this.exit=e.exitFullscreen||e.msExitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen}isSupported(){return!!this.requestFullscreen}}const a=':host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--mdc-theme-error:var(\n      --lime-error-background-color,\n      rgb(var(--color-red-dark))\n  );--lime-error-text-color:rgb(var(--color-red-darker));--mdc-theme-surface:var(\n      --lime-surface-background-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-surface:var(\n      --lime-on-surface-color,\n      rgb(var(--contrast-1500))\n  )}:host{isolation:isolate;position:relative;box-sizing:border-box;display:flex;align-items:center;justify-content:center;width:100%;height:100%}*{box-sizing:border-box}img,video,audio,object,iframe{max-height:100%;max-width:100%;box-sizing:border-box}iframe{border:none;width:100%;height:100%;min-height:20rem}img{min-width:7rem;object-fit:contain}video{width:100%;height:auto}audio{width:100%}object{width:100%;height:100%}object[type="application/pdf"]{min-height:20rem}object[type="text/plain"]{border-radius:0.25rem;padding-right:2rem;overflow-y:auto}:host(:fullscreen){background-color:rgb(var(--color-gray-darker))}:host(:fullscreen) object[type="text/plain"]{max-width:50rem;max-height:calc(100% - 2rem)}:host(:-webkit-full-screen){background-color:rgb(var(--color-gray-darker))}:host(:-webkit-full-screen) object[type="text/plain"]{max-width:50rem;max-height:calc(100% - 2rem)}.buttons{position:absolute;z-index:1;top:0.25rem;right:0.25rem;display:flex;flex-direction:column;gap:0.25rem}@media (pointer: coarse){.buttons{gap:0.5rem}}.no-support{display:flex;flex-direction:column;align-items:center;border:1px dashed rgb(var(--contrast-600));border-radius:0.5rem;padding:1.25rem}.no-support .icon--warning{color:rgb(var(--color-orange-default))}[class^=button--]{all:unset;transition:color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;cursor:pointer;color:var(--mdc-theme-on-surface);background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-normal);display:flex;align-items:center;justify-content:center;border-radius:50%;width:2rem;height:2rem;background-color:rgba(var(--contrast-100), 0.8);backdrop-filter:blur(0.25rem);-webkit-backdrop-filter:blur(0.25rem)}[class^=button--]:hover{color:var(--mdc-theme-on-surface);background-color:var(--lime-elevated-surface-background-color);box-shadow:var(--button-shadow-hovered)}[class^=button--]:active{box-shadow:var(--button-shadow-pressed);transform:translate3d(0, 0.08rem, 0)}[class^=button--]:focus{outline:none}[class^=button--]:focus-visible{outline:none;box-shadow:var(--shadow-depth-8-focused)}[class^=button--] limel-icon{transition:color 0.2s ease;width:1.25rem;color:rgb(var(--contrast-1200))}[class^=button--]:hover limel-icon{color:rgb(var(--contrast-1400))}.action-menu-for-pdf-files,.action-menu-for-office-files{position:absolute;right:0.75rem}.action-menu-for-pdf-files{bottom:0.75rem}.action-menu-for-office-files{top:0.75rem}';const c=class{constructor(i){t(this,i);this.action=e(this,"action",7);this.renderPdf=()=>[o("div",{class:"action-menu-for-pdf-files"},this.renderActionMenu()),o("object",{data:this.url,type:"application/pdf"})];this.renderImage=()=>[this.renderButtons(),o("img",{src:this.url,alt:this.alt})];this.renderVideo=()=>o("video",{controls:true},o("source",{src:this.url}));this.renderAudio=()=>o("audio",{controls:true},o("source",{src:this.url}));this.renderText=()=>[this.renderButtons(),o("object",{data:this.url,type:"text/plain"})];this.renderOffice=()=>[o("div",{class:"action-menu-for-office-files"},this.renderActionMenu()),o("iframe",{src:this.getOfficeViewerUrl()+this.url+"&embedded=true",frameborder:"0"})];this.isOfficeFileAccessibleViaURL=()=>this.fileType==="office"&&!(this.url.startsWith("http://")||this.url.startsWith("https://"));this.getOfficeViewerUrl=()=>{const t={"microsoft-office":"https://view.officeapps.live.com/op/embed.aspx?src=","google-drive":"https://docs.google.com/gview?url="};return t[this.officeViewer]};this.renderNoFileSupportMessage=()=>o("div",{class:"no-support"},o("limel-icon",{class:"icon--warning",name:"brake_warning",size:"large",role:"presentation"}),o("p",null,this.getTranslation("message.unsupported-filetype")),this.renderDownloadButton());this.renderButtons=()=>o("div",{class:"buttons"},this.renderActionMenu(),this.renderToggleFullscreenButton(),this.renderDownloadButton(),this.renderOpenInNewTabButton());this.renderToggleFullscreenButton=()=>{if(!this.allowFullscreen||!this.fullscreen.isSupported()){return}const t=this.isFullscreen?"multiply":"fit_to_width";const e=this.isFullscreen?this.getTranslation("exit-fullscreen"):this.getTranslation("open-in-fullscreen");return[o("button",{class:"button--toggle-fullscreen",id:"tooltip-toggle-fullscreen",role:"button",onClick:this.handleToggleFullscreen},o("limel-icon",{name:t}),o("limel-tooltip",{label:e,elementId:"tooltip-toggle-fullscreen",openDirection:"left"}))]};this.renderDownloadButton=()=>{if(!this.allowDownload||this.isFullscreen){return}return o("a",{class:"button--download",id:"tooltip-download",role:"button",download:this.filename?this.filename:"",href:this.url,target:"_blank"},o("limel-icon",{name:"download_2"}),o("limel-tooltip",{label:this.getTranslation("download"),elementId:"tooltip-download",openDirection:"left"}))};this.renderOpenInNewTabButton=()=>{if(!this.allowOpenInNewTab||this.isFullscreen){return}return o("a",{class:"button--new-tab",id:"tooltip-new-tab",role:"button",href:this.url,target:"_blank",rel:"noopener noreferrer"},o("limel-icon",{name:"external_link"}),o("limel-tooltip",{label:this.getTranslation("open-in-new-tab"),elementId:"tooltip-new-tab",openDirection:"left"}))};this.renderActionMenu=()=>{if(!this.actions||this.isFullscreen){return}return o("limel-menu",{class:"action-menu",items:this.actions,onSelect:this.emitOnAction,"open-direction":"left"},o("button",{class:"button--action",id:"tooltip-more",role:"button",slot:"trigger"},o("limel-icon",{name:"menu_2"}),o("limel-tooltip",{label:this.getTranslation("more-actions"),elementId:"tooltip-more",openDirection:"left"})))};this.handleToggleFullscreen=()=>{if(this.fullscreen.isSupported()){this.fullscreen.toggle();this.isFullscreen=!this.isFullscreen}};this.emitOnAction=t=>{t.stopPropagation();this.action.emit(t.detail)};this.url=undefined;this.filename=undefined;this.alt=undefined;this.allowFullscreen=false;this.allowOpenInNewTab=false;this.allowDownload=false;this.language="en";this.officeViewer="microsoft-office";this.actions=undefined;this.isFullscreen=false;this.fileType=undefined;this.fullscreen=new n(this.HostElement);this.fileType=s(this.filename,this.url)}render(){if(!this.isOfficeFileAccessibleViaURL){return this.renderNoFileSupportMessage()}return this.renderFileViewer()}watchUrl(t,e){if(t===e){return}this.fileType=s(this.filename,this.url)}renderFileViewer(){const t={pdf:this.renderPdf,image:this.renderImage,video:this.renderVideo,audio:this.renderAudio,text:this.renderText,office:this.renderOffice};const e=t[this.fileType]||this.renderNoFileSupportMessage;return e()}getTranslation(t){return r.get(`file-viewer.${t}`,this.language)}get HostElement(){return i(this)}static get watchers(){return{url:["watchUrl"]}}};c.style=a;export{c as limel_file_viewer};
//# sourceMappingURL=limel-file-viewer.entry.js.map