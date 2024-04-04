import{r as t,c as a,h as n,g as i}from"./index-6156b4fd.js";import{t as r}from"./translations-dea847ae.js";import{_ as e,a as c,M as s,b as o}from"./component-908b71cd.js";import{c as d}from"./ponyfill-30263d5e.js";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var m={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"};var l={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"};var b={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var u=b.ARIA_LIVE_DELAY_MS;var p=l.ARIA_LIVE_LABEL_TEXT_ATTR;function f(t,a){if(a===void 0){a=t}var n=t.getAttribute("aria-live");var i=a.textContent.trim();if(!i||!n){return}t.setAttribute("aria-live","off");a.textContent="";a.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>';a.setAttribute(p,i);setTimeout((function(){t.setAttribute("aria-live",n);a.removeAttribute(p);a.textContent=i}),u)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var h=m.OPENING,_=m.OPEN,g=m.CLOSING;var k=l.REASON_ACTION,v=l.REASON_DISMISS;var y=function(t){e(a,t);function a(n){var i=t.call(this,c(c({},a.defaultAdapter),n))||this;i.opened=false;i.animationFrame=0;i.animationTimer=0;i.autoDismissTimer=0;i.autoDismissTimeoutMs=b.DEFAULT_AUTO_DISMISS_TIMEOUT_MS;i.closeOnEscape=true;return i}Object.defineProperty(a,"cssClasses",{get:function(){return m},enumerable:false,configurable:true});Object.defineProperty(a,"strings",{get:function(){return l},enumerable:false,configurable:true});Object.defineProperty(a,"numbers",{get:function(){return b},enumerable:false,configurable:true});Object.defineProperty(a,"defaultAdapter",{get:function(){return{addClass:function(){return undefined},announce:function(){return undefined},notifyClosed:function(){return undefined},notifyClosing:function(){return undefined},notifyOpened:function(){return undefined},notifyOpening:function(){return undefined},removeClass:function(){return undefined}}},enumerable:false,configurable:true});a.prototype.destroy=function(){this.clearAutoDismissTimer();cancelAnimationFrame(this.animationFrame);this.animationFrame=0;clearTimeout(this.animationTimer);this.animationTimer=0;this.adapter.removeClass(h);this.adapter.removeClass(_);this.adapter.removeClass(g)};a.prototype.open=function(){var t=this;this.clearAutoDismissTimer();this.opened=true;this.adapter.notifyOpening();this.adapter.removeClass(g);this.adapter.addClass(h);this.adapter.announce();this.runNextAnimationFrame((function(){t.adapter.addClass(_);t.animationTimer=setTimeout((function(){var a=t.getTimeoutMs();t.handleAnimationTimerEnd();t.adapter.notifyOpened();if(a!==b.INDETERMINATE){t.autoDismissTimer=setTimeout((function(){t.close(v)}),a)}}),b.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))};a.prototype.close=function(t){var a=this;if(t===void 0){t=""}if(!this.opened){return}cancelAnimationFrame(this.animationFrame);this.animationFrame=0;this.clearAutoDismissTimer();this.opened=false;this.adapter.notifyClosing(t);this.adapter.addClass(m.CLOSING);this.adapter.removeClass(m.OPEN);this.adapter.removeClass(m.OPENING);clearTimeout(this.animationTimer);this.animationTimer=setTimeout((function(){a.handleAnimationTimerEnd();a.adapter.notifyClosed(t)}),b.SNACKBAR_ANIMATION_CLOSE_TIME_MS)};a.prototype.isOpen=function(){return this.opened};a.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs};a.prototype.setTimeoutMs=function(t){var a=b.MIN_AUTO_DISMISS_TIMEOUT_MS;var n=b.MAX_AUTO_DISMISS_TIMEOUT_MS;var i=b.INDETERMINATE;if(t===b.INDETERMINATE||t<=n&&t>=a){this.autoDismissTimeoutMs=t}else{throw new Error("\n        timeoutMs must be an integer in the range "+a+"–"+n+"\n        (or "+i+" to disable), but got '"+t+"'")}};a.prototype.getCloseOnEscape=function(){return this.closeOnEscape};a.prototype.setCloseOnEscape=function(t){this.closeOnEscape=t};a.prototype.handleKeyDown=function(t){var a=t.key==="Escape"||t.keyCode===27;if(a&&this.getCloseOnEscape()){this.close(v)}};a.prototype.handleActionButtonClick=function(t){this.close(k)};a.prototype.handleActionIconClick=function(t){this.close(v)};a.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer);this.autoDismissTimer=0};a.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0;this.adapter.removeClass(m.OPENING);this.adapter.removeClass(m.CLOSING)};a.prototype.runNextAnimationFrame=function(t){var a=this;cancelAnimationFrame(this.animationFrame);this.animationFrame=requestAnimationFrame((function(){a.animationFrame=0;clearTimeout(a.animationTimer);a.animationTimer=setTimeout(t,0)}))};return a}(s);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var x=l.SURFACE_SELECTOR,E=l.LABEL_SELECTOR,T=l.ACTION_SELECTOR,O=l.DISMISS_SELECTOR,S=l.OPENING_EVENT,w=l.OPENED_EVENT,A=l.CLOSING_EVENT,I=l.CLOSED_EVENT;var M=function(t){e(a,t);function a(){return t!==null&&t.apply(this,arguments)||this}a.attachTo=function(t){return new a(t)};a.prototype.initialize=function(t){if(t===void 0){t=function(){return f}}this.announce=t()};a.prototype.initialSyncWithDOM=function(){var t=this;this.surfaceEl=this.root.querySelector(x);this.labelEl=this.root.querySelector(E);this.actionEl=this.root.querySelector(T);this.handleKeyDown=function(a){t.foundation.handleKeyDown(a)};this.handleSurfaceClick=function(a){var n=a.target;if(t.isActionButton(n)){t.foundation.handleActionButtonClick(a)}else if(t.isActionIcon(n)){t.foundation.handleActionIconClick(a)}};this.registerKeyDownHandler(this.handleKeyDown);this.registerSurfaceClickHandler(this.handleSurfaceClick)};a.prototype.destroy=function(){t.prototype.destroy.call(this);this.deregisterKeyDownHandler(this.handleKeyDown);this.deregisterSurfaceClickHandler(this.handleSurfaceClick)};a.prototype.open=function(){this.foundation.open()};a.prototype.close=function(t){if(t===void 0){t=""}this.foundation.close(t)};a.prototype.getDefaultFoundation=function(){var t=this;var a={addClass:function(a){t.root.classList.add(a)},announce:function(){t.announce(t.labelEl)},notifyClosed:function(a){return t.emit(I,a?{reason:a}:{})},notifyClosing:function(a){return t.emit(A,a?{reason:a}:{})},notifyOpened:function(){return t.emit(w,{})},notifyOpening:function(){return t.emit(S,{})},removeClass:function(a){return t.root.classList.remove(a)}};return new y(a)};Object.defineProperty(a.prototype,"timeoutMs",{get:function(){return this.foundation.getTimeoutMs()},set:function(t){this.foundation.setTimeoutMs(t)},enumerable:false,configurable:true});Object.defineProperty(a.prototype,"closeOnEscape",{get:function(){return this.foundation.getCloseOnEscape()},set:function(t){this.foundation.setCloseOnEscape(t)},enumerable:false,configurable:true});Object.defineProperty(a.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:false,configurable:true});Object.defineProperty(a.prototype,"labelText",{get:function(){return this.labelEl.textContent},set:function(t){this.labelEl.textContent=t},enumerable:false,configurable:true});Object.defineProperty(a.prototype,"actionButtonText",{get:function(){return this.actionEl.textContent},set:function(t){this.actionEl.textContent=t},enumerable:false,configurable:true});a.prototype.registerKeyDownHandler=function(t){this.listen("keydown",t)};a.prototype.deregisterKeyDownHandler=function(t){this.unlisten("keydown",t)};a.prototype.registerSurfaceClickHandler=function(t){this.surfaceEl.addEventListener("click",t)};a.prototype.deregisterSurfaceClickHandler=function(t){this.surfaceEl.removeEventListener("click",t)};a.prototype.isActionButton=function(t){return Boolean(d(t,T))};a.prototype.isActionIcon=function(t){return Boolean(d(t,O))};return a}(o);const C=':host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--mdc-theme-error:var(\n      --lime-error-background-color,\n      rgb(var(--color-red-dark))\n  );--lime-error-text-color:rgb(var(--color-red-darker));--mdc-theme-surface:var(\n      --lime-surface-background-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-surface:var(\n      --lime-on-surface-color,\n      rgb(var(--contrast-1500))\n  )}.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media (max-width: 480px), (max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px;}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0;}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:inherit;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, inherit));font-size:0.8125rem;font-size:var(--mdc-typography-body2-font-size, 0.8125rem);line-height:1.625rem;line-height:var(--mdc-typography-body2-line-height, 1.625rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px;}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover::before,.mdc-snackbar__action.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size{width:36px;height:36px;padding:6px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%, -50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px;}.mdc-snackbar{top:var(--snackbar-top, auto);right:var(--snackbar-right, 0);bottom:var(--snackbar-bottom, 0);left:var(--snackbar-left, 0)}.mdc-snackbar__surface{min-width:unset;max-width:42rem;background-color:rgb(var(--contrast-1400));box-shadow:var(--shadow-depth-8), var(--shadow-depth-16);gap:0.75rem}.mdc-snackbar__label{font-family:inherit}.mdc-snackbar__label{color:rgb(var(--contrast-100))}.mdc-snackbar__actions{gap:0.5rem}.mdc-snackbar__actions{--lime-elevated-surface-background-color:rgb(\n      var(--contrast-1300)\n  )}.mdc-snackbar__actions limel-icon-button.mdc-snackbar__dismiss{transform:scale(0.8);margin:0;padding:0}.dismiss{--mdc-theme-on-surface:rgb(var(--contrast-100));--icon-background-color:var(--lime-elevated-surface-background-color);--fill-color:var(--mdc-theme-primary);--track-color:rgb(var(--contrast-800), 0.2);position:relative;display:flex;align-items:center;justify-content:center}.dismiss svg{position:absolute;transform:rotate(90deg);fill:transparent;stroke-dasharray:100;stroke-linecap:round}.mdc-snackbar--open .dismiss svg{animation:timeout var(--snackbar-timeout) linear forwards}@keyframes timeout{0%{stroke-width:4;stroke-dashoffset:0;opacity:1}100%{stroke-width:1;stroke-dashoffset:-100;opacity:0.7}}';const N=class{constructor(n){t(this,n);this.action=a(this,"action",7);this.hide=a(this,"hide",7);this.message=undefined;this.timeout=5e3;this.actionText=undefined;this.dismissible=true;this.multiline=undefined;this.language="en";this.handleMdcClosing=this.handleMdcClosing.bind(this)}connectedCallback(){this.initialize()}componentDidLoad(){this.initialize()}initialize(){const t=this.host.shadowRoot.querySelector(".mdc-snackbar");if(!t){return}this.mdcSnackbar=new M(t);this.mdcSnackbar.listen("MDCSnackbar:closing",this.handleMdcClosing)}disconnectedCallback(){this.mdcSnackbar.unlisten("MDCSnackbar:closing",this.handleMdcClosing);this.mdcSnackbar.destroy()}async show(){if(this.timeout){this.mdcSnackbar.timeoutMs=this.timeout}this.mdcSnackbar.labelText=this.message;this.mdcSnackbar.open()}render(){return n("aside",{class:`\n                    mdc-snackbar\n                    ${this.multiline?"mdc-snackbar--stacked":""}\n                `,style:{"--snackbar-timeout":`${this.timeout}ms`}},n("div",{class:"mdc-snackbar__surface",role:"status","aria-relevant":"additions"},n("div",{class:"mdc-snackbar__label","aria-atomic":"false"}),this.renderActions(this.actionText,this.dismissible)))}handleMdcClosing(t){if(t.detail.reason==="action"){this.action.emit()}else{this.hide.emit()}}renderActions(t,a){if(!t&&!a){return}return n("div",{class:"mdc-snackbar__actions","aria-atomic":"true"},this.renderActionButton(t),this.renderDismissButton(a))}renderActionButton(t){if(!t){return}return n("limel-button",{class:"mdc-button mdc-snackbar__action",label:t})}renderDismissButton(t){if(!t){return}const a=r.get("snackbar.dismiss",this.language);return n("div",{class:"dismiss"},this.renderTimeoutVisualization(),n("limel-icon-button",{class:"mdc-icon-button mdc-snackbar__dismiss",icon:"multiply",label:a}))}renderTimeoutVisualization(){return n("svg",{width:"36",height:"36",viewBox:"0 0 36 36"},n("circle",{r:"18",cx:"18",cy:"18",fill:"var(--track-color)"}),n("path",{class:"track",d:"M 18,18 m -16,0 a 16,16 0 1,0 32,0 a 16,16 0 1,0 -32,0",stroke:"var(--fill-color)"}))}get host(){return i(this)}};N.style=C;export{N as limel_snackbar};
//# sourceMappingURL=limel-snackbar.entry.js.map