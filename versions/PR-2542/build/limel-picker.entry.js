import{r as t,c as i,h as s,g as e}from"./index-6156b4fd.js";import{i as n}from"./dom-2fe617e7.js";import{T as r,b as h,E as o,c as a,d as l,a as u,A as c,e as f,f as d,g as m}from"./keycodes-9f971b46.js";import{c as p}from"./random-string-812b1c35.js";import{g as v,b as y}from"./get-icon-props-f9a21d14.js";var g=function t(i){var s=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var e=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var n=void 0;var r=void 0;var h=void 0;var o=[];return function t(){var l=b(s);var u=(new Date).getTime();var c=!n||u-n>l;n=u;for(var f=arguments.length,d=Array(f),m=0;m<f;m++){d[m]=arguments[m]}if(c&&e.leading){return e.accumulate?Promise.resolve(i.call(this,[d])).then((function(t){return t[0]})):Promise.resolve(i.call.apply(i,[this].concat(d)))}if(r){clearTimeout(h)}else{r=w()}o.push(d);h=setTimeout(a.bind(this),l);if(e.accumulate){var p=o.length-1;return r.promise.then((function(t){return t[p]}))}return r.promise};function a(){var t=r;clearTimeout(h);Promise.resolve(e.accumulate?i.call(this,o):i.apply(this,o[o.length-1])).then(t.resolve,t.reject);o=[];r=null}};function b(t){return typeof t==="function"?t():t}function w(){var t={};t.promise=new Promise((function(i,s){t.resolve=i;t.reject=s}));return t}function C(t){var i=null;var s=null;var e=new Promise((function(t,e){i=t;s=e}));t&&t.then((function(t){i&&i(t)}),(function(t){s&&s(t)}));return{promise:e,resolve:function(t){i&&i(t)},reject:function(t){s&&s(t)},cancel:function(){i=null;s=null}}}function D(t){var i=null;var s=function(){var s=[];for(var e=0;e<arguments.length;e++){s[e]=arguments[e]}i&&i();var n=t.apply(void 0,s);var r=C(n),h=r.promise,o=r.cancel;i=o;return h};return s}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var j=function(){j=Object.assign||function t(i){for(var s,e=1,n=arguments.length;e<n;e++){s=arguments[e];for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r))i[r]=s[r]}return i};return j.apply(this,arguments)};var I={key:function(){var t=[];for(var i=0;i<arguments.length;i++){t[i]=arguments[i]}return null},onlyResolvesLast:true};var x=function(){function t(t){this.config=t;this.debounceSingleton=null;this.debounceCache={}}t.prototype._createDebouncedFunction=function(){var t=g(this.config.func,this.config.wait,this.config.options);if(this.config.options.onlyResolvesLast){t=D(t)}return{func:t}};t.prototype.getDebouncedFunction=function(t){var i;var s=(i=this.config.options).key.apply(i,t);if(s===null||typeof s==="undefined"){if(!this.debounceSingleton){this.debounceSingleton=this._createDebouncedFunction()}return this.debounceSingleton}else{if(!this.debounceCache[s]){this.debounceCache[s]=this._createDebouncedFunction()}return this.debounceCache[s]}};return t}();function S(t,i,s){var e=j({},I,s);var n=new x({func:t,wait:i,options:e});var r=function(){var t=[];for(var i=0;i<arguments.length;i++){t[i]=arguments[i]}var s=n.getDebouncedFunction(t).func;return s.apply(void 0,t)};return r}const k=":host{position:relative;display:block}:host([hidden]){display:none}";const L=500;const P="limel-chip-set";const A=class{constructor(s){t(this,s);this.change=i(this,"change",7);this.interact=i(this,"interact",7);this.action=i(this,"action",7);this.chipSetEditMode=false;this.disabled=false;this.readonly=false;this.label=undefined;this.searchLabel=undefined;this.helperText=undefined;this.leadingIcon=undefined;this.emptyResultMessage=undefined;this.required=false;this.value=undefined;this.searcher=undefined;this.multiple=false;this.delimiter=null;this.actions=[];this.actionPosition="bottom";this.actionScrollBehavior="sticky";this.badgeIcons=false;this.items=undefined;this.textValue="";this.loading=false;this.chips=[];this.handleTextInput=this.handleTextInput.bind(this);this.handleInputKeyDown=this.handleInputKeyDown.bind(this);this.handleDropdownKeyDown=this.handleDropdownKeyDown.bind(this);this.handleInputFieldFocus=this.handleInputFieldFocus.bind(this);this.handleChange=this.handleChange.bind(this);this.handleInteract=this.handleInteract.bind(this);this.handleListChange=this.handleListChange.bind(this);this.handleActionListChange=this.handleActionListChange.bind(this);this.handleStopEditAndBlur=this.handleStopEditAndBlur.bind(this);this.createDebouncedSearcher=this.createDebouncedSearcher.bind(this);this.handleCloseMenu=this.handleCloseMenu.bind(this);this.onListKeyDown=this.onListKeyDown.bind(this);this.portalId=p()}componentWillLoad(){this.chips=this.createChips(this.value)}componentDidLoad(){this.createDebouncedSearcher(this.searcher);this.chipSet=this.host.shadowRoot.querySelector(P)}async componentWillUpdate(){this.chipSetEditMode=false;if(this.chipSet){this.chipSetEditMode=await this.chipSet.getEditMode()}}render(){const t={};if(!this.multiple){t.maxItems=1}return[s("limel-chip-set",Object.assign({type:"input",inputType:"search",label:this.label,helperText:this.helperText,leadingIcon:this.leadingIcon,value:this.chips,disabled:this.disabled,delimiter:this.renderDelimiter(),readonly:this.readonly,required:this.required,searchLabel:this.searchLabel,onInput:this.handleTextInput,onKeyDown:this.handleInputKeyDown,onChange:this.handleChange,onInteract:this.handleInteract,onStartEdit:this.handleInputFieldFocus,onStopEdit:this.handleStopEditAndBlur,emptyInputOnBlur:false,clearAllButton:this.multiple&&!this.chipSetEditMode},t)),this.renderDropdown()]}onChangeValue(){this.chips=this.createChips(this.value)}createDebouncedSearcher(t){if(typeof t!=="function"){return}this.debouncedSearch=S(t,L)}renderDelimiter(){if(this.multiple){return this.delimiter}return null}createChips(t){if(!t){return[]}if(this.multiple){const i=t;return i.map(this.createChip)}const i=t;return[this.createChip(i)]}createChip(t){const i=v(t.icon);const s=y(t.icon,t.iconColor);return{id:`${t.value}`,text:t.text,removable:true,icon:i,iconFillColor:s,value:t}}renderDropdown(){const t=this.getDropdownContent();const i=[];if(this.shouldShowDropDownContent()){const s=this.getActionContent();if(this.actionPosition==="top"){i.push(s)}if(t){i.push(t)}if(this.actionPosition==="bottom"){i.push(s)}}return this.renderPortal(i)}getActionContent(){var t,i;const e=(i=(t=this.actions)===null||t===void 0?void 0:t.length)!==null&&i!==void 0?i:0;if(e===0){return null}return[s("limel-list",{class:{"static-actions-list":true,"is-on-top":this.actionPosition==="top","is-at-bottom":this.actionPosition==="bottom","has-position-sticky":this.actionScrollBehavior==="sticky"},badgeIcons:true,type:"selectable",onChange:this.handleActionListChange,items:this.actions.map(this.removeUnusedPropertiesOnAction)})]}removeUnusedPropertiesOnAction(t){return Object.assign(Object.assign({},t),{actions:[]})}shouldShowDropDownContent(){if(this.isFull()){return false}return!!this.chipSetEditMode}getDropdownContent(){if(!this.shouldShowDropDownContent()){return}if(this.loading){return this.renderSpinner()}if(!this.items||!this.items.length){return this.renderEmptyMessage()}return this.renderListResult()}isFull(){return!this.multiple&&!!this.value}renderSpinner(){return s("div",{style:{width:"100%",display:"flex","align-items":"center","justify-content":"center",padding:"1rem 0"}},s("limel-spinner",{limeBranded:false}))}renderEmptyMessage(){if(!this.emptyResultMessage){return}const t={color:"rgb(var(--contrast-1100))","text-align":"center",margin:"0.5rem 1rem"};return s("p",{style:t},this.emptyResultMessage)}renderListResult(){return s("limel-list",{badgeIcons:this.badgeIcons,onChange:this.handleListChange,onKeyDown:this.onListKeyDown,type:"selectable",items:this.items})}onListKeyDown(t){const i=[r,h,o].includes(t.key);const s=[a,l,u].includes(t.keyCode);if(i||s){this.chipSet.setFocus()}}renderPortal(t=[]){const i=getComputedStyle(this.host).getPropertyValue("--dropdown-z-index");return s("limel-portal",{visible:t.length>0,containerId:this.portalId,inheritParentWidth:true,containerStyle:{"z-index":i}},s("limel-menu-surface",{open:t.length>0,allowClicksElement:this.host,style:{"--mdc-menu-min-width":"100%","max-height":"inherit",display:"flex"},onDismiss:this.handleCloseMenu},t))}handleStopEditAndBlur(){const t=this.host.shadowRoot.activeElement||document.activeElement;const i=document.querySelector(`#${this.portalId}`);if(n(t,this.host)||n(t,i)){return}this.clearInputField()}async handleTextInput(t){t.stopPropagation();const i=t.detail;this.textValue=i;this.loading=true;const s=i===""?this.searcher:this.debouncedSearch;const e=await s(i);this.handleSearchResult(i,e)}handleListChange(t){var i;t.stopPropagation();if(!this.value||this.value!==t.detail){let i=t.detail;if(this.multiple){i=[...this.value,t.detail]}this.change.emit(i);this.items=[]}if(this.multiple){(i=this.chipSet)===null||i===void 0?void 0:i.setFocus(true)}}handleActionListChange(t){t.stopPropagation();if(!t.detail){return}this.action.emit(t.detail.value);this.items=[]}async handleInputFieldFocus(){this.loading=true;const t=this.textValue;const i=await this.searcher(t);this.handleSearchResult(t,i)}handleChange(t){t.stopPropagation();let i=null;if(this.multiple){const s=t.detail;i=s.map((t=>this.value.find((i=>`${i.value}`===t.id))))}this.change.emit(i)}handleInteract(t){t.stopPropagation();this.interact.emit(t.detail?t.detail.value:t.detail)}handleInputKeyDown(t){const i=(t.key===r||t.keyCode===a)&&!t.altKey&&!t.metaKey&&!t.shiftKey;const s=t.key===c||t.keyCode===f;const e=t.key===d||t.keyCode===m;if(!i&&!s&&!e){return}const n=document.querySelector(` #${this.portalId} limel-list`);if(!n){return}t.preventDefault();if(i||e){const t=n.shadowRoot.querySelector(".mdc-deprecated-list-item:first-child");t.focus();return}if(s){const t=n.shadowRoot.querySelector(".mdc-deprecated-list-item:last-child");t.focus()}}handleDropdownKeyDown(t){const i=t.key===h||t.keyCode===l;if(i){t.preventDefault();this.textValue="";this.chipSet.setFocus(true)}}handleSearchResult(t,i){if(t===this.textValue){this.items=i;if(this.multiple){const t=this.value;this.items=i.filter((i=>!t.includes(i)))}this.loading=false}}handleCloseMenu(){if(this.items.length>0){return}this.clearInputField()}clearInputField(){this.chipSet.emptyInput();this.textValue="";this.handleSearchResult("",[])}get host(){return e(this)}static get watchers(){return{value:["onChangeValue"],searcher:["createDebouncedSearcher"]}}};A.style=k;export{A as limel_picker};
//# sourceMappingURL=limel-picker.entry.js.map