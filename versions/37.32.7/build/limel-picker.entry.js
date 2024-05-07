import{r as t,c as i,h as s,g as e}from"./index-6156b4fd.js";import{d as n,i as h}from"./dom-8d0b5a60.js";import{T as r,b as o,E as l,c as a,d as c,a as d,A as u,e as f,f as m,g as p}from"./keycodes-9382910b.js";import{c as b}from"./random-string-812b1c35.js";import{g as y,c as g}from"./get-icon-props-0b65f85e.js";import"./isObject-7039fcda.js";import"./_baseGetTag-49d0259e.js";import"./toNumber-f26657b5.js";import"./isSymbol-f24bedd7.js";import"./isObjectLike-38996507.js";const j=":host{position:relative;display:block}:host([hidden]){display:none}";const v=300;const w="limel-chip-set";const C=class{constructor(s){t(this,s);this.change=i(this,"change",7);this.interact=i(this,"interact",7);this.action=i(this,"action",7);this.chipSetEditMode=false;this.getValueId=t=>{const i=t.value;if(!!i&&typeof i==="object"){return i.id}return i};this.createChips=t=>{if(!t){return[]}if(this.multiple){const i=t;return i.map(this.createChip)}const i=t;return[this.createChip(i)]};this.createChip=t=>{const i=y(t.icon);const s=g(t.icon,t.iconColor);const e=this.getValueId(t);return{id:`${e}`,text:t.text,removable:true,icon:i?{name:i,color:s}:undefined,value:t}};this.search=async t=>{const i=setTimeout((()=>{this.loading=true}));const s=await this.searcher(this.textValue);clearTimeout(i);this.handleSearchResult(t,s)};this.disabled=false;this.readonly=false;this.label=undefined;this.searchLabel=undefined;this.helperText=undefined;this.leadingIcon=undefined;this.emptyResultMessage=undefined;this.required=false;this.invalid=false;this.value=undefined;this.searcher=undefined;this.multiple=false;this.delimiter=null;this.actions=[];this.actionPosition="bottom";this.actionScrollBehavior="sticky";this.badgeIcons=false;this.items=undefined;this.textValue="";this.loading=false;this.chips=[];this.handleTextInput=this.handleTextInput.bind(this);this.handleInputKeyDown=this.handleInputKeyDown.bind(this);this.handleDropdownKeyDown=this.handleDropdownKeyDown.bind(this);this.handleInputFieldFocus=this.handleInputFieldFocus.bind(this);this.handleChange=this.handleChange.bind(this);this.handleInteract=this.handleInteract.bind(this);this.handleListChange=this.handleListChange.bind(this);this.handleActionListChange=this.handleActionListChange.bind(this);this.handleStopEditAndBlur=this.handleStopEditAndBlur.bind(this);this.handleCloseMenu=this.handleCloseMenu.bind(this);this.onListKeyDown=this.onListKeyDown.bind(this);this.portalId=b();this.debouncedSearch=n(this.search,v)}componentWillLoad(){this.chips=this.createChips(this.value)}componentDidLoad(){this.chipSet=this.host.shadowRoot.querySelector(w)}async componentWillUpdate(){this.chipSetEditMode=false;if(this.chipSet){this.chipSetEditMode=await this.chipSet.getEditMode()}}render(){const t={};if(!this.multiple){t.maxItems=1}return[s("limel-chip-set",Object.assign({type:"input",inputType:"search",label:this.label,helperText:this.helperText,leadingIcon:this.leadingIcon,value:this.chips,disabled:this.disabled,invalid:this.invalid,delimiter:this.renderDelimiter(),readonly:this.readonly,required:this.required,searchLabel:this.searchLabel,onInput:this.handleTextInput,onKeyDown:this.handleInputKeyDown,onChange:this.handleChange,onInteract:this.handleInteract,onStartEdit:this.handleInputFieldFocus,onStopEdit:this.handleStopEditAndBlur,emptyInputOnBlur:false,clearAllButton:this.multiple&&!this.chipSetEditMode},t)),this.renderDropdown()]}onChangeValue(){this.chips=this.createChips(this.value)}renderDelimiter(){if(this.multiple){return this.delimiter}return null}renderDropdown(){const t=this.getDropdownContent();const i=[];if(this.shouldShowDropDownContent()){const s=this.getActionContent();if(this.actionPosition==="top"){i.push(s)}if(t){i.push(t)}if(this.actionPosition==="bottom"){i.push(s)}}return this.renderPortal(i)}getActionContent(){var t,i;const e=(i=(t=this.actions)===null||t===void 0?void 0:t.length)!==null&&i!==void 0?i:0;if(e===0){return null}return[s("limel-list",{class:{"static-actions-list":true,"is-on-top":this.actionPosition==="top","is-at-bottom":this.actionPosition==="bottom","has-position-sticky":this.actionScrollBehavior==="sticky"},badgeIcons:true,type:"selectable",onChange:this.handleActionListChange,items:this.actions.map(this.removeUnusedPropertiesOnAction)})]}removeUnusedPropertiesOnAction(t){return Object.assign(Object.assign({},t),{actions:[]})}shouldShowDropDownContent(){if(this.isFull()){return false}return!!this.chipSetEditMode}getDropdownContent(){if(!this.shouldShowDropDownContent()){return}if(this.loading){return this.renderSpinner()}if(!this.items||!this.items.length){return this.renderEmptyMessage()}return this.renderListResult()}isFull(){return!this.multiple&&!!this.value}renderSpinner(){return s("div",{style:{width:"100%",display:"flex","align-items":"center","justify-content":"center",padding:"1rem 0"}},s("limel-spinner",{limeBranded:false}))}renderEmptyMessage(){if(!this.emptyResultMessage){return}const t={color:"rgb(var(--contrast-1100))","text-align":"center",margin:"0.5rem 1rem"};return s("p",{style:t},this.emptyResultMessage)}renderListResult(){return s("limel-list",{badgeIcons:this.badgeIcons,onChange:this.handleListChange,onKeyDown:this.onListKeyDown,type:"selectable",items:this.items})}onListKeyDown(t){const i=[r,o,l].includes(t.key);const s=[a,c,d].includes(t.keyCode);if(i||s){this.chipSet.setFocus()}}renderPortal(t=[]){const i=getComputedStyle(this.host).getPropertyValue("--dropdown-z-index");return s("limel-portal",{visible:t.length>0,containerId:this.portalId,inheritParentWidth:true,containerStyle:{"z-index":i}},s("limel-menu-surface",{open:t.length>0,allowClicksElement:this.host,style:{"--mdc-menu-min-width":"100%","max-height":"inherit",display:"flex"},onDismiss:this.handleCloseMenu},t))}handleStopEditAndBlur(){const t=this.host.shadowRoot.activeElement||document.activeElement;const i=document.querySelector(`#${this.portalId}`);if(h(t,this.host)||h(t,i)){return}this.clearInputField()}async handleTextInput(t){t.stopPropagation();const i=t.detail;this.textValue=i;this.debouncedSearch(i);if(i===""){this.debouncedSearch.flush()}}handleListChange(t){var i;t.stopPropagation();if(!this.value||this.value!==t.detail){let i=t.detail;if(this.multiple){i=[...this.value,t.detail]}this.change.emit(i);this.items=[]}if(this.multiple){(i=this.chipSet)===null||i===void 0?void 0:i.setFocus(true)}}handleActionListChange(t){t.stopPropagation();if(!t.detail){return}this.action.emit(t.detail.value);this.items=[]}handleInputFieldFocus(){const t=this.textValue;this.debouncedSearch(t)}handleChange(t){t.stopPropagation();let i=null;if(this.multiple){const s=t.detail;i=s.map((t=>this.value.find((i=>{const s=this.getValueId(i);return`${s}`===t.id}))))}this.change.emit(i)}handleInteract(t){t.stopPropagation();this.interact.emit(t.detail?t.detail.value:t.detail)}handleInputKeyDown(t){const i=(t.key===r||t.keyCode===a)&&!t.altKey&&!t.metaKey&&!t.shiftKey;const s=t.key===u||t.keyCode===f;const e=t.key===m||t.keyCode===p;if(!i&&!s&&!e){return}const n=document.querySelector(` #${this.portalId} limel-list`);if(!n){return}t.preventDefault();if(i||e){const t=n.shadowRoot.querySelector(".mdc-deprecated-list-item:first-child");t.focus();return}if(s){const t=n.shadowRoot.querySelector(".mdc-deprecated-list-item:last-child");t.focus()}}handleDropdownKeyDown(t){const i=t.key===o||t.keyCode===c;if(i){t.preventDefault();this.textValue="";this.chipSet.setFocus(true)}}handleSearchResult(t,i){if(t===this.textValue){this.items=i;if(this.multiple){const t=this.value;this.items=i.filter((i=>!t.includes(i)))}this.loading=false}}handleCloseMenu(){if(this.items.length>0){return}this.clearInputField()}clearInputField(){this.chipSet.emptyInput();this.textValue="";this.handleSearchResult("",[]);this.debouncedSearch.cancel()}get host(){return e(this)}static get watchers(){return{value:["onChangeValue"]}}};C.style=j;export{C as limel_picker};
//# sourceMappingURL=limel-picker.entry.js.map