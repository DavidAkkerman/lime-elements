import{M as t,a as i}from"./component-410aad5a.js";import{g as n}from"./util-f1bde91c.js";
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
 */var e={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"};var r={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")};var s={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30};var u;(function(t){t[t["BOTTOM"]=1]="BOTTOM";t[t["CENTER"]=2]="CENTER";t[t["RIGHT"]=4]="RIGHT";t[t["FLIP_RTL"]=8]="FLIP_RTL"})(u||(u={}));var o;(function(t){t[t["TOP_LEFT"]=0]="TOP_LEFT";t[t["TOP_RIGHT"]=4]="TOP_RIGHT";t[t["BOTTOM_LEFT"]=1]="BOTTOM_LEFT";t[t["BOTTOM_RIGHT"]=5]="BOTTOM_RIGHT";t[t["TOP_START"]=8]="TOP_START";t[t["TOP_END"]=12]="TOP_END";t[t["BOTTOM_START"]=9]="BOTTOM_START";t[t["BOTTOM_END"]=13]="BOTTOM_END"})(o||(o={}));
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
***************************************************************************** */var f=function(t,i){f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)if(Object.prototype.hasOwnProperty.call(i,n))t[n]=i[n]};return f(t,i)};function h(t,i){if(typeof i!=="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");f(t,i);function n(){this.constructor=t}t.prototype=i===null?Object.create(i):(n.prototype=i.prototype,new n)}var c=function(){c=Object.assign||function t(i){for(var n,e=1,r=arguments.length;e<r;e++){n=arguments[e];for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s))i[s]=n[s]}return i};return c.apply(this,arguments)};function a(t){var i=typeof Symbol==="function"&&Symbol.iterator,n=i&&t[i],e=0;if(n)return n.call(t);if(t&&typeof t.length==="number")return{next:function(){if(t&&e>=t.length)t=void 0;return{value:t&&t[e++],done:!t}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}
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
 */var l=function(t){h(i,t);function i(n){var e=t.call(this,c(c({},i.defaultAdapter),n))||this;e.isSurfaceOpen=false;e.isQuickOpen=false;e.isHoistedElement=false;e.isFixedPosition=false;e.isHorizontallyCenteredOnViewport=false;e.maxHeight=0;e.openAnimationEndTimerId=0;e.closeAnimationEndTimerId=0;e.animationRequestId=0;e.anchorCorner=o.TOP_START;e.originCorner=o.TOP_START;e.anchorMargin={top:0,right:0,bottom:0,left:0};e.position={x:0,y:0};return e}Object.defineProperty(i,"cssClasses",{get:function(){return e},enumerable:false,configurable:true});Object.defineProperty(i,"strings",{get:function(){return r},enumerable:false,configurable:true});Object.defineProperty(i,"numbers",{get:function(){return s},enumerable:false,configurable:true});Object.defineProperty(i,"Corner",{get:function(){return o},enumerable:false,configurable:true});Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){return undefined},removeClass:function(){return undefined},hasClass:function(){return false},hasAnchor:function(){return false},isElementInContainer:function(){return false},isFocused:function(){return false},isRtl:function(){return false},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){return undefined},setMaxHeight:function(){return undefined},setTransformOrigin:function(){return undefined},saveFocus:function(){return undefined},restoreFocus:function(){return undefined},notifyClose:function(){return undefined},notifyOpen:function(){return undefined},notifyClosing:function(){return undefined}}},enumerable:false,configurable:true});i.prototype.init=function(){var t=i.cssClasses,n=t.ROOT,e=t.OPEN;if(!this.adapter.hasClass(n)){throw new Error(n+" class required in root element.")}if(this.adapter.hasClass(e)){this.isSurfaceOpen=true}};i.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId);clearTimeout(this.closeAnimationEndTimerId);cancelAnimationFrame(this.animationRequestId)};i.prototype.setAnchorCorner=function(t){this.anchorCorner=t};i.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^u.RIGHT};i.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0;this.anchorMargin.right=t.right||0;this.anchorMargin.bottom=t.bottom||0;this.anchorMargin.left=t.left||0};i.prototype.setIsHoisted=function(t){this.isHoistedElement=t};i.prototype.setFixedPosition=function(t){this.isFixedPosition=t};i.prototype.isFixed=function(){return this.isFixedPosition};i.prototype.setAbsolutePosition=function(t,i){this.position.x=this.isFinite(t)?t:0;this.position.y=this.isFinite(i)?i:0};i.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t};i.prototype.setQuickOpen=function(t){this.isQuickOpen=t};i.prototype.setMaxHeight=function(t){this.maxHeight=t};i.prototype.isOpen=function(){return this.isSurfaceOpen};i.prototype.open=function(){var t=this;if(this.isSurfaceOpen){return}this.adapter.saveFocus();if(this.isQuickOpen){this.isSurfaceOpen=true;this.adapter.addClass(i.cssClasses.OPEN);this.dimensions=this.adapter.getInnerDimensions();this.autoposition();this.adapter.notifyOpen()}else{this.adapter.addClass(i.cssClasses.ANIMATING_OPEN);this.animationRequestId=requestAnimationFrame((function(){t.dimensions=t.adapter.getInnerDimensions();t.autoposition();t.adapter.addClass(i.cssClasses.OPEN);t.openAnimationEndTimerId=setTimeout((function(){t.openAnimationEndTimerId=0;t.adapter.removeClass(i.cssClasses.ANIMATING_OPEN);t.adapter.notifyOpen()}),s.TRANSITION_OPEN_DURATION)}));this.isSurfaceOpen=true}};i.prototype.close=function(t){var n=this;if(t===void 0){t=false}if(!this.isSurfaceOpen){return}this.adapter.notifyClosing();if(this.isQuickOpen){this.isSurfaceOpen=false;if(!t){this.maybeRestoreFocus()}this.adapter.removeClass(i.cssClasses.OPEN);this.adapter.removeClass(i.cssClasses.IS_OPEN_BELOW);this.adapter.notifyClose();return}this.adapter.addClass(i.cssClasses.ANIMATING_CLOSED);requestAnimationFrame((function(){n.adapter.removeClass(i.cssClasses.OPEN);n.adapter.removeClass(i.cssClasses.IS_OPEN_BELOW);n.closeAnimationEndTimerId=setTimeout((function(){n.closeAnimationEndTimerId=0;n.adapter.removeClass(i.cssClasses.ANIMATING_CLOSED);n.adapter.notifyClose()}),s.TRANSITION_CLOSE_DURATION)}));this.isSurfaceOpen=false;if(!t){this.maybeRestoreFocus()}};i.prototype.handleBodyClick=function(t){var i=t.target;if(this.adapter.isElementInContainer(i)){return}this.close()};i.prototype.handleKeydown=function(t){var i=t.keyCode,n=t.key;var e=n==="Escape"||i===27;if(e){this.close()}};i.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var n=this.getoriginCorner();var e=this.getMenuSurfaceMaxHeight(n);var r=this.hasBit(n,u.BOTTOM)?"bottom":"top";var o=this.hasBit(n,u.RIGHT)?"right":"left";var f=this.getHorizontalOriginOffset(n);var h=this.getVerticalOriginOffset(n);var c=this.measurements,a=c.anchorSize,l=c.surfaceSize;var d=(t={},t[o]=f,t[r]=h,t);if(a.width/l.width>s.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO){o="center"}if(this.isHoistedElement||this.isFixedPosition){this.adjustPositionForHoistedElement(d)}this.adapter.setTransformOrigin(o+" "+r);this.adapter.setPosition(d);this.adapter.setMaxHeight(e?e+"px":"");if(!this.hasBit(n,u.BOTTOM)){this.adapter.addClass(i.cssClasses.IS_OPEN_BELOW)}};i.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions();var i=this.adapter.getBodyDimensions();var n=this.adapter.getWindowDimensions();var e=this.adapter.getWindowScroll();if(!t){t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}}return{anchorSize:t,bodySize:i,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:n.width-t.right,bottom:n.height-t.bottom,left:t.left},viewportSize:n,windowScroll:e}};i.prototype.getoriginCorner=function(){var t=this.originCorner;var n=this.measurements,e=n.viewportDistance,r=n.anchorSize,s=n.surfaceSize;var o=i.numbers.MARGIN_TO_EDGE;var f=this.hasBit(this.anchorCorner,u.BOTTOM);var h;var c;if(f){h=e.top-o+this.anchorMargin.bottom;c=e.bottom-o-this.anchorMargin.bottom}else{h=e.top-o+this.anchorMargin.top;c=e.bottom-o+r.height-this.anchorMargin.top}var a=c-s.height>0;if(!a&&h>c){t=this.setBit(t,u.BOTTOM)}var l=this.adapter.isRtl();var d=this.hasBit(this.anchorCorner,u.FLIP_RTL);var v=this.hasBit(this.anchorCorner,u.RIGHT)||this.hasBit(t,u.RIGHT);var m=false;if(l&&d){m=!v}else{m=v}var O;var T;if(m){O=e.left+r.width+this.anchorMargin.right;T=e.right-this.anchorMargin.right}else{O=e.left+this.anchorMargin.left;T=e.right+r.width-this.anchorMargin.left}var b=O-s.width>0;var g=T-s.width>0;var E=this.hasBit(t,u.FLIP_RTL)&&this.hasBit(t,u.RIGHT);if(g&&E&&l||!b&&E){t=this.unsetBit(t,u.RIGHT)}else if(b&&m&&l||b&&!m&&v||!g&&O>=T){t=this.setBit(t,u.RIGHT)}return t};i.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0){return this.maxHeight}var n=this.measurements.viewportDistance;var e=0;var r=this.hasBit(t,u.BOTTOM);var s=this.hasBit(this.anchorCorner,u.BOTTOM);var o=i.numbers.MARGIN_TO_EDGE;if(r){e=n.top+this.anchorMargin.top-o;if(!s){e+=this.measurements.anchorSize.height}}else{e=n.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-o;if(s){e-=this.measurements.anchorSize.height}}return e};i.prototype.getHorizontalOriginOffset=function(t){var i=this.measurements.anchorSize;var n=this.hasBit(t,u.RIGHT);var e=this.hasBit(this.anchorCorner,u.RIGHT);if(n){var r=e?i.width-this.anchorMargin.left:this.anchorMargin.right;if(this.isHoistedElement||this.isFixedPosition){return r-(this.measurements.viewportSize.width-this.measurements.bodySize.width)}return r}return e?i.width-this.anchorMargin.right:this.anchorMargin.left};i.prototype.getVerticalOriginOffset=function(t){var i=this.measurements.anchorSize;var n=this.hasBit(t,u.BOTTOM);var e=this.hasBit(this.anchorCorner,u.BOTTOM);var r=0;if(n){r=e?i.height-this.anchorMargin.top:-this.anchorMargin.bottom}else{r=e?i.height+this.anchorMargin.bottom:this.anchorMargin.top}return r};i.prototype.adjustPositionForHoistedElement=function(t){var i,n;var e=this.measurements,r=e.windowScroll,s=e.viewportDistance,u=e.surfaceSize,o=e.viewportSize;var f=Object.keys(t);try{for(var h=a(f),c=h.next();!c.done;c=h.next()){var l=c.value;var d=t[l]||0;if(this.isHorizontallyCenteredOnViewport&&(l==="left"||l==="right")){t[l]=(o.width-u.width)/2;continue}d+=s[l];if(!this.isFixedPosition){if(l==="top"){d+=r.y}else if(l==="bottom"){d-=r.y}else if(l==="left"){d+=r.x}else{d-=r.x}}t[l]=d}}catch(t){i={error:t}}finally{try{if(c&&!c.done&&(n=h.return))n.call(h)}finally{if(i)throw i.error}}};i.prototype.maybeRestoreFocus=function(){var t=this;var i=this.adapter.isFocused();var n=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);if(i||n){setTimeout((function(){t.adapter.restoreFocus()}),s.TOUCH_EVENT_WAIT_MS)}};i.prototype.hasBit=function(t,i){return Boolean(t&i)};i.prototype.setBit=function(t,i){return t|i};i.prototype.unsetBit=function(t,i){return t^i};i.prototype.isFinite=function(t){return typeof t==="number"&&isFinite(t)};return i}(t);
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
 */var d=function(t){h(i,t);function i(){return t!==null&&t.apply(this,arguments)||this}i.attachTo=function(t){return new i(t)};i.prototype.initialSyncWithDOM=function(){var t=this;var i=this.root.parentElement;this.anchorElement=i&&i.classList.contains(e.ANCHOR)?i:null;if(this.root.classList.contains(e.FIXED)){this.setFixedPosition(true)}this.handleKeydown=function(i){t.foundation.handleKeydown(i)};this.handleBodyClick=function(i){t.foundation.handleBodyClick(i)};this.registerBodyClickListener=function(){document.body.addEventListener("click",t.handleBodyClick,{capture:true})};this.deregisterBodyClickListener=function(){document.body.removeEventListener("click",t.handleBodyClick,{capture:true})};this.listen("keydown",this.handleKeydown);this.listen(r.OPENED_EVENT,this.registerBodyClickListener);this.listen(r.CLOSED_EVENT,this.deregisterBodyClickListener)};i.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown);this.unlisten(r.OPENED_EVENT,this.registerBodyClickListener);this.unlisten(r.CLOSED_EVENT,this.deregisterBodyClickListener);t.prototype.destroy.call(this)};i.prototype.isOpen=function(){return this.foundation.isOpen()};i.prototype.open=function(){this.foundation.open()};i.prototype.close=function(t){if(t===void 0){t=false}this.foundation.close(t)};Object.defineProperty(i.prototype,"quickOpen",{set:function(t){this.foundation.setQuickOpen(t)},enumerable:false,configurable:true});i.prototype.setIsHoisted=function(t){this.foundation.setIsHoisted(t)};i.prototype.setMenuSurfaceAnchorElement=function(t){this.anchorElement=t};i.prototype.setFixedPosition=function(t){if(t){this.root.classList.add(e.FIXED)}else{this.root.classList.remove(e.FIXED)}this.foundation.setFixedPosition(t)};i.prototype.setAbsolutePosition=function(t,i){this.foundation.setAbsolutePosition(t,i);this.setIsHoisted(true)};i.prototype.setAnchorCorner=function(t){this.foundation.setAnchorCorner(t)};i.prototype.setAnchorMargin=function(t){this.foundation.setAnchorMargin(t)};i.prototype.getDefaultFoundation=function(){var t=this;var i={addClass:function(i){return t.root.classList.add(i)},removeClass:function(i){return t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},hasAnchor:function(){return!!t.anchorElement},notifyClose:function(){return t.emit(l.strings.CLOSED_EVENT,{})},notifyClosing:function(){t.emit(l.strings.CLOSING_EVENT,{})},notifyOpen:function(){return t.emit(l.strings.OPENED_EVENT,{})},isElementInContainer:function(i){return t.root.contains(i)},isRtl:function(){return getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},setTransformOrigin:function(i){var e=n(window,"transform")+"-origin";t.root.style.setProperty(e,i)},isFocused:function(){return document.activeElement===t.root},saveFocus:function(){t.previousFocus=document.activeElement},restoreFocus:function(){if(t.root.contains(document.activeElement)){if(t.previousFocus&&t.previousFocus.focus){t.previousFocus.focus()}}},getInnerDimensions:function(){return{width:t.root.offsetWidth,height:t.root.offsetHeight}},getAnchorDimensions:function(){return t.anchorElement?t.anchorElement.getBoundingClientRect():null},getWindowDimensions:function(){return{width:window.innerWidth,height:window.innerHeight}},getBodyDimensions:function(){return{width:document.body.clientWidth,height:document.body.clientHeight}},getWindowScroll:function(){return{x:window.pageXOffset,y:window.pageYOffset}},setPosition:function(i){var n=t.root;n.style.left="left"in i?i.left+"px":"";n.style.right="right"in i?i.right+"px":"";n.style.top="top"in i?i.top+"px":"";n.style.bottom="bottom"in i?i.bottom+"px":""},setMaxHeight:function(i){t.root.style.maxHeight=i}};return new l(i)};return i}(i);export{o as C,l as M,d as a};
//# sourceMappingURL=component-6d079abe.js.map