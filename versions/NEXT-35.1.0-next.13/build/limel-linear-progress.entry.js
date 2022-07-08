import{r,h as e,g as n}from"./index-7dccb886.js";import{M as i,a}from"./component-410aad5a.js";import{g as t}from"./util-f1bde91c.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var s=function(r,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])})(r,e)};function o(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=r}s(r,e),r.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var c=function(){return(c=Object.assign||function(r){for(var e,n=1,i=arguments.length;n<i;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}).apply(this,arguments)},l={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},m={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},d=function(r){function e(n){var i=r.call(this,c(c({},e.defaultAdapter),n))||this;return i.observer=null,i}return o(e,r),Object.defineProperty(e,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return m},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var r=this;this.determinate=!this.adapter.hasClass(l.INDETERMINATE_CLASS),this.adapter.addClass(l.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver((function(e){var n,i;if(!r.determinate)try{for(var a=function(r){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&r[e],i=0;if(n)return n.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&i>=r.length&&(r=void 0),{value:r&&r[i++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */(e),t=a.next();!t.done;t=a.next()){var s=t.value;s.contentRect&&r.calculateAndSetDimensions(s.contentRect.width)}}catch(r){n={error:r}}finally{try{t&&!t.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}})),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(r){if(this.determinate=r,this.determinate)return this.adapter.removeClass(l.INDETERMINATE_CLASS),this.adapter.setAttribute(m.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(m.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(m.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),void this.setBufferBarProgress(this.buffer);this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(l.INDETERMINATE_CLASS),this.adapter.removeAttribute(m.ARIA_VALUENOW),this.adapter.removeAttribute(m.ARIA_VALUEMAX),this.adapter.removeAttribute(m.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(r){this.progress=r,this.determinate&&(this.setPrimaryBarProgress(r),this.adapter.setAttribute(m.ARIA_VALUENOW,r.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(r){this.buffer=r,this.determinate&&this.setBufferBarProgress(r)},e.prototype.getBuffer=function(){return this.buffer},e.prototype.open=function(){this.adapter.removeClass(l.CLOSED_CLASS),this.adapter.removeClass(l.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(m.ARIA_HIDDEN)},e.prototype.close=function(){this.adapter.addClass(l.CLOSED_CLASS),this.adapter.setAttribute(m.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.adapter.hasClass(l.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass(l.CLOSED_CLASS)&&this.adapter.addClass(l.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){r.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass(l.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(l.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(r){var e="scaleX("+r+")",n="undefined"!=typeof window?t(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(n,e)},e.prototype.setBufferBarProgress=function(r){this.adapter.setBufferBarStyle(m.FLEX_BASIS,100*r+"%")},e.prototype.calculateAndSetDimensions=function(r){var e=.8367142*r,n=2.00611057*r,i=.37651913*r,a=.84386165*r,t=1.60277782*r;this.adapter.setStyle("--mdc-linear-progress-primary-half",e+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-e+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",t+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-t+"px"),this.restartAnimation()},e}(i),f=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return o(e,r),e.attachTo=function(r){return new e(r)},Object.defineProperty(e.prototype,"determinate",{set:function(r){this.foundation.setDeterminate(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"progress",{set:function(r){this.foundation.setProgress(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"buffer",{set:function(r){this.foundation.setBuffer(r)},enumerable:!1,configurable:!0}),e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(){this.foundation.close()},e.prototype.initialSyncWithDOM=function(){var r=this;this.root.addEventListener("transitionend",(function(){r.foundation.handleTransitionEnd()}))},e.prototype.getDefaultFoundation=function(){var r=this;return new d({addClass:function(e){r.root.classList.add(e)},forceLayout:function(){r.root.getBoundingClientRect()},setBufferBarStyle:function(e,n){var i=r.root.querySelector(d.strings.BUFFER_BAR_SELECTOR);i&&i.style.setProperty(e,n)},setPrimaryBarStyle:function(e,n){var i=r.root.querySelector(d.strings.PRIMARY_BAR_SELECTOR);i&&i.style.setProperty(e,n)},hasClass:function(e){return r.root.classList.contains(e)},removeAttribute:function(e){r.root.removeAttribute(e)},removeClass:function(e){r.root.classList.remove(e)},setAttribute:function(e,n){r.root.setAttribute(e,n)},setStyle:function(e,n){r.root.style.setProperty(e,n)},attachResizeObserver:function(e){var n=window.ResizeObserver;if(n){var i=new n(e);return i.observe(r.root),i}return null},getWidth:function(){return r.root.offsetWidth}})},e}(a);const g=class{constructor(e){r(this,e),this.value=0,this.indeterminate=!1}connectedCallback(){this.initialize()}componentDidLoad(){this.initialize()}initialize(){const r=this.host.shadowRoot.querySelector(".mdc-linear-progress");r&&(this.mdcLinearProgress=new f(r),this.mdcLinearProgress.progress=this.value)}disconnectedCallback(){this.mdcLinearProgress&&this.mdcLinearProgress.destroy()}render(){return e("div",{role:"progressbar",class:{"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":this.indeterminate},"aria-label":"Progress Bar","aria-valuemin":"0","aria-valuemax":"1","aria-valuenow":this.value},e("div",{class:"mdc-linear-progress__buffer"},e("div",{class:"mdc-linear-progress__buffer-bar"})),e("div",{class:"mdc-linear-progress__bar mdc-linear-progress__primary-bar"},e("span",{class:"mdc-linear-progress__bar-inner"})),e("div",{class:"mdc-linear-progress__bar mdc-linear-progress__secondary-bar"},e("span",{class:"mdc-linear-progress__bar-inner"})))}watchValue(r){this.mdcLinearProgress&&(this.mdcLinearProgress.progress=r)}get host(){return n(this)}static get watchers(){return{value:["watchValue"]}}};g.style=":host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--lime-error-text-color:rgb(var(--color-red-darker));--mdc-theme-surface:var(\n      --lime-surface-background-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-surface:var(\n      --lime-on-surface-color,\n      var(--lime-text-primary-on-background-color)\n  )}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress,.mdc-linear-progress[dir=rtl]{}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#26a69a;border-color:var(--mdc-theme-primary, #26a69a)}.mdc-linear-progress__buffer-dots{background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E\")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress{text-align:left}.mdc-linear-progress__buffer-dots{background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='var(--background-color, rgba(var(--contrast-800), 0.5))'/%3E%3C/svg%3E\")}.mdc-linear-progress__buffer-bar{background-color:var(--background-color, rgba(var(--contrast-800), 0.5))}";export{g as limel_linear_progress}