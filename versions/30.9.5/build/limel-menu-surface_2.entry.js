import{r as e,c as t,h as r,g as o}from"./index-9cbaf4f2.js";import{f as n,g as i,T as a,b as m}from"./keycodes-1db9effd.js";import"./component-385aa964.js";import{i as c}from"./dom-8b5f244b.js";import{M as s,C as d}from"./component-fc5aef33.js";const f=class{constructor(r){e(this,r),this.dismiss=t(this,"dismiss",7),this.open=!1,this.handleDocumentClick=this.handleDocumentClick.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleResize=this.handleResize.bind(this)}connectedCallback(){this.setup()}disconnectedCallback(){this.teardown()}componentDidLoad(){this.setup()}render(){return r("div",{class:{"mdc-menu":!0,"mdc-menu-surface":!0,"mdc-menu-surface--open":this.open,"mdc-elevation-transition":!0,"mdc-elevation--z4":!0},tabindex:"-1"},r("slot",null))}setup(){const e=this.host.shadowRoot.querySelector(".mdc-menu-surface");e&&(this.menuSurface=new s(e),this.menuSurface.setAnchorCorner(d.TOP_START),document.addEventListener("mousedown",this.handleDocumentClick,{capture:!0}),this.host.addEventListener("keydown",this.handleKeyDown),window.addEventListener("resize",this.handleResize,{passive:!0}))}teardown(){var e;null===(e=this.menuSurface)||void 0===e||e.destroy(),document.removeEventListener("mousedown",this.handleDocumentClick,{capture:!0}),this.host.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("resize",this.handleResize)}handleDocumentClick(e){this.open&&!c(e.target,this.host)&&(this.dismiss.emit(),this.preventClickEventPropagation())}handleResize(){this.open&&this.dismiss.emit()}preventClickEventPropagation(){document.addEventListener("click",this.stopEvent,{capture:!0,once:!0}),document.addEventListener("mouseup",this.stopEvent,{capture:!0,once:!0}),document.addEventListener("mouseup",(()=>{document.removeEventListener("click",this.stopEvent,{capture:!0})}),{once:!0})}stopEvent(e){e.stopPropagation(),e.preventDefault()}handleKeyDown(e){this.open&&(e.key===n||e.keyCode===i||e.key===a||e.keyCode===m)&&(e.stopPropagation(),this.dismiss.emit())}get host(){return o(this)}};f.style=":host{--mdc-theme-primary:var(--lime-primary-color, #26a69a);--mdc-theme-secondary:var(--lime-secondary-color, #575756);--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      #fff\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      #fff\n  )}:root{--mdc-theme-primary:#26a69a;--mdc-theme-secondary:#575756;--mdc-theme-background:#fff;--mdc-theme-surface:#fff;--mdc-theme-error:#b00020;--mdc-theme-on-primary:#fff;--mdc-theme-on-secondary:#fff;--mdc-theme-on-surface:#000;--mdc-theme-on-error:#fff;--mdc-theme-text-primary-on-background:rgba(0, 0, 0, 0.87);--mdc-theme-text-secondary-on-background:rgba(0, 0, 0, 0.54);--mdc-theme-text-hint-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-disabled-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-icon-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-primary-on-light:rgba(0, 0, 0, 0.87);--mdc-theme-text-secondary-on-light:rgba(0, 0, 0, 0.54);--mdc-theme-text-hint-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-disabled-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-icon-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-primary-on-dark:white;--mdc-theme-text-secondary-on-dark:rgba(255, 255, 255, 0.7);--mdc-theme-text-hint-on-dark:rgba(255, 255, 255, 0.5);--mdc-theme-text-disabled-on-dark:rgba(255, 255, 255, 0.5);--mdc-theme-text-icon-on-dark:rgba(255, 255, 255, 0.5)}.mdc-theme--primary{color:#26a69a !important;color:var(--mdc-theme-primary, #26a69a) !important}.mdc-theme--secondary{color:#575756 !important;color:var(--mdc-theme-secondary, #575756) !important}.mdc-theme--background{background-color:#fff;background-color:var(--mdc-theme-background, #fff)}.mdc-theme--surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-theme--error{color:#b00020 !important;color:var(--mdc-theme-error, #b00020) !important}.mdc-theme--on-primary{color:#fff !important;color:var(--mdc-theme-on-primary, #fff) !important}.mdc-theme--on-secondary{color:#fff !important;color:var(--mdc-theme-on-secondary, #fff) !important}.mdc-theme--on-surface{color:#000 !important;color:var(--mdc-theme-on-surface, #000) !important}.mdc-theme--on-error{color:#fff !important;color:var(--mdc-theme-on-error, #fff) !important}.mdc-theme--text-primary-on-background{color:rgba(0, 0, 0, 0.87) !important;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87)) !important}.mdc-theme--text-secondary-on-background{color:rgba(0, 0, 0, 0.54) !important;color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54)) !important}.mdc-theme--text-hint-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-disabled-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-disabled-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-icon-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-primary-on-light{color:rgba(0, 0, 0, 0.87) !important;color:var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)) !important}.mdc-theme--text-secondary-on-light{color:rgba(0, 0, 0, 0.54) !important;color:var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54)) !important}.mdc-theme--text-hint-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-disabled-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-icon-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-icon-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-primary-on-dark{color:white !important;color:var(--mdc-theme-text-primary-on-dark, white) !important}.mdc-theme--text-secondary-on-dark{color:rgba(255, 255, 255, 0.7) !important;color:var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)) !important}.mdc-theme--text-hint-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--text-disabled-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--text-icon-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-icon-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--primary-bg{background-color:#26a69a !important;background-color:var(--mdc-theme-primary, #26a69a) !important}.mdc-theme--secondary-bg{background-color:#575756 !important;background-color:var(--mdc-theme-secondary, #575756) !important}.mdc-typography{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--headline1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.375rem;line-height:1.375rem;font-weight:300;letter-spacing:-0.015625em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:300;letter-spacing:-0.0083333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline3{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:400;letter-spacing:normal;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline4{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:400;letter-spacing:0.0073529412em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline5{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:0.875rem;font-weight:400;letter-spacing:normal;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline6{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:0.875rem;font-weight:500;letter-spacing:0.0125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:1.125rem;font-weight:400;letter-spacing:0.009375em;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.125rem;font-weight:500;letter-spacing:0.0071428571em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.5rem;font-weight:400;letter-spacing:0.03125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.625rem;font-weight:400;letter-spacing:0.0178571429em;text-decoration:inherit;text-transform:inherit}.mdc-typography--caption{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;line-height:0.875rem;font-weight:400;letter-spacing:0.0333333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--button{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:2.25rem;font-weight:500;letter-spacing:0.0892857143em;text-decoration:none;text-transform:none}.mdc-typography--overline{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;line-height:0.875rem;font-weight:500;letter-spacing:0.1666666667em;text-decoration:none;text-transform:uppercase}.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 2rem);max-height:calc(100vh - 2rem);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform, opacity;z-index:8;transition:opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1);box-shadow:0rem 0.3125rem 0.3125rem -0.1875rem rgba(0, 0, 0, 0.2), 0rem 0.5rem 0.625rem 0.0625rem rgba(0, 0, 0, 0.14), 0rem 0.1875rem 0.875rem 0.125rem rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:0.25rem;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity 0.075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-elevation--z0{box-shadow:0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.2), 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.14), 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z1{box-shadow:0rem 0.125rem 0.0625rem -0.0625rem rgba(0, 0, 0, 0.2), 0rem 0.0625rem 0.0625rem 0rem rgba(0, 0, 0, 0.14), 0rem 0.0625rem 0.1875rem 0rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z2{box-shadow:0rem 0.1875rem 0.0625rem -0.125rem rgba(0, 0, 0, 0.2), 0rem 0.125rem 0.125rem 0rem rgba(0, 0, 0, 0.14), 0rem 0.0625rem 0.3125rem 0rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z3{box-shadow:0rem 0.1875rem 0.1875rem -0.125rem rgba(0, 0, 0, 0.2), 0rem 0.1875rem 0.25rem 0rem rgba(0, 0, 0, 0.14), 0rem 0.0625rem 0.5rem 0rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z4{box-shadow:0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.2), 0rem 0.25rem 0.3125rem 0rem rgba(0, 0, 0, 0.14), 0rem 0.0625rem 0.625rem 0rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z5{box-shadow:0rem 0.1875rem 0.3125rem -0.0625rem rgba(0, 0, 0, 0.2), 0rem 0.3125rem 0.5rem 0rem rgba(0, 0, 0, 0.14), 0rem 0.0625rem 0.875rem 0rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z6{box-shadow:0rem 0.1875rem 0.3125rem -0.0625rem rgba(0, 0, 0, 0.2), 0rem 0.375rem 0.625rem 0rem rgba(0, 0, 0, 0.14), 0rem 0.0625rem 1.125rem 0rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z7{box-shadow:0rem 0.25rem 0.3125rem -0.125rem rgba(0, 0, 0, 0.2), 0rem 0.4375rem 0.625rem 0.0625rem rgba(0, 0, 0, 0.14), 0rem 0.125rem 1rem 0.0625rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z8{box-shadow:0rem 0.3125rem 0.3125rem -0.1875rem rgba(0, 0, 0, 0.2), 0rem 0.5rem 0.625rem 0.0625rem rgba(0, 0, 0, 0.14), 0rem 0.1875rem 0.875rem 0.125rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z9{box-shadow:0rem 0.3125rem 0.375rem -0.1875rem rgba(0, 0, 0, 0.2), 0rem 0.5625rem 0.75rem 0.0625rem rgba(0, 0, 0, 0.14), 0rem 0.1875rem 1rem 0.125rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z10{box-shadow:0rem 0.375rem 0.375rem -0.1875rem rgba(0, 0, 0, 0.2), 0rem 0.625rem 0.875rem 0.0625rem rgba(0, 0, 0, 0.14), 0rem 0.25rem 1.125rem 0.1875rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z11{box-shadow:0rem 0.375rem 0.4375rem -0.25rem rgba(0, 0, 0, 0.2), 0rem 0.6875rem 0.9375rem 0.0625rem rgba(0, 0, 0, 0.14), 0rem 0.25rem 1.25rem 0.1875rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z12{box-shadow:0rem 0.4375rem 0.5rem -0.25rem rgba(0, 0, 0, 0.2), 0rem 0.75rem 1.0625rem 0.125rem rgba(0, 0, 0, 0.14), 0rem 0.3125rem 1.375rem 0.25rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z13{box-shadow:0rem 0.4375rem 0.5rem -0.25rem rgba(0, 0, 0, 0.2), 0rem 0.8125rem 1.1875rem 0.125rem rgba(0, 0, 0, 0.14), 0rem 0.3125rem 1.5rem 0.25rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z14{box-shadow:0rem 0.4375rem 0.5625rem -0.25rem rgba(0, 0, 0, 0.2), 0rem 0.875rem 1.3125rem 0.125rem rgba(0, 0, 0, 0.14), 0rem 0.3125rem 1.625rem 0.25rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z15{box-shadow:0rem 0.5rem 0.5625rem -0.3125rem rgba(0, 0, 0, 0.2), 0rem 0.9375rem 1.375rem 0.125rem rgba(0, 0, 0, 0.14), 0rem 0.375rem 1.75rem 0.3125rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z16{box-shadow:0rem 0.5rem 0.625rem -0.3125rem rgba(0, 0, 0, 0.2), 0rem 1rem 1.5rem 0.125rem rgba(0, 0, 0, 0.14), 0rem 0.375rem 1.875rem 0.3125rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z17{box-shadow:0rem 0.5rem 0.6875rem -0.3125rem rgba(0, 0, 0, 0.2), 0rem 1.0625rem 1.625rem 0.125rem rgba(0, 0, 0, 0.14), 0rem 0.375rem 2rem 0.3125rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z18{box-shadow:0rem 0.5625rem 0.6875rem -0.3125rem rgba(0, 0, 0, 0.2), 0rem 1.125rem 1.75rem 0.125rem rgba(0, 0, 0, 0.14), 0rem 0.4375rem 2.125rem 0.375rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z19{box-shadow:0rem 0.5625rem 0.75rem -0.375rem rgba(0, 0, 0, 0.2), 0rem 1.1875rem 1.8125rem 0.125rem rgba(0, 0, 0, 0.14), 0rem 0.4375rem 2.25rem 0.375rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z20{box-shadow:0rem 0.625rem 0.8125rem -0.375rem rgba(0, 0, 0, 0.2), 0rem 1.25rem 1.9375rem 0.1875rem rgba(0, 0, 0, 0.14), 0rem 0.5rem 2.375rem 0.4375rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z21{box-shadow:0rem 0.625rem 0.8125rem -0.375rem rgba(0, 0, 0, 0.2), 0rem 1.3125rem 2.0625rem 0.1875rem rgba(0, 0, 0, 0.14), 0rem 0.5rem 2.5rem 0.4375rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z22{box-shadow:0rem 0.625rem 0.875rem -0.375rem rgba(0, 0, 0, 0.2), 0rem 1.375rem 2.1875rem 0.1875rem rgba(0, 0, 0, 0.14), 0rem 0.5rem 2.625rem 0.4375rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z23{box-shadow:0rem 0.6875rem 0.875rem -0.4375rem rgba(0, 0, 0, 0.2), 0rem 1.4375rem 2.25rem 0.1875rem rgba(0, 0, 0, 0.14), 0rem 0.5625rem 2.75rem 0.5rem rgba(0, 0, 0, 0.12)}.mdc-elevation--z24{box-shadow:0rem 0.6875rem 0.9375rem -0.4375rem rgba(0, 0, 0, 0.2), 0rem 1.5rem 2.375rem 0.1875rem rgba(0, 0, 0, 0.14), 0rem 0.5625rem 2.875rem 0.5rem rgba(0, 0, 0, 0.12)}.mdc-elevation-transition{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);will-change:box-shadow}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:0.0625rem solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-menu{min-width:7rem}.mdc-menu .mdc-list-item__meta{color:rgba(0, 0, 0, 0.87)}.mdc-menu .mdc-list-item__graphic{color:rgba(0, 0, 0, 0.87)}.mdc-menu .mdc-list{color:rgba(0, 0, 0, 0.87)}.mdc-menu .mdc-list-divider{margin:0.5rem 0}.mdc-menu .mdc-list-item{user-select:none}.mdc-menu .mdc-list-item--disabled{cursor:auto}.mdc-menu a.mdc-list-item .mdc-list-item__text,.mdc-menu a.mdc-list-item .mdc-list-item__graphic{pointer-events:none}.mdc-menu__selection-group{padding:0;fill:currentColor}.mdc-menu__selection-group .mdc-list-item{padding-left:3.5rem;padding-right:1rem}[dir=rtl] .mdc-menu__selection-group .mdc-list-item,.mdc-menu__selection-group .mdc-list-item[dir=rtl]{padding-left:1rem;padding-right:3.5rem}.mdc-menu__selection-group .mdc-menu__selection-group-icon{left:1rem;right:initial;display:none;position:absolute;top:50%;transform:translateY(-50%)}[dir=rtl] .mdc-menu__selection-group .mdc-menu__selection-group-icon,.mdc-menu__selection-group .mdc-menu__selection-group-icon[dir=rtl]{left:initial;right:1rem}.mdc-menu-item--selected .mdc-menu__selection-group-icon{display:inline}:host{display:block}.mdc-menu-surface{width:var(--menu-surface-width, auto);max-height:100%;position:relative}";var l="top",h="bottom",u="right",p="left",b=[l,h,u,p],g=b.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),v=[].concat(b,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),y=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function x(e){return e?(e.nodeName||"").toLowerCase():null}function w(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function k(e){return e instanceof w(e).Element||e instanceof Element}function z(e){return e instanceof w(e).HTMLElement||e instanceof HTMLElement}function O(e){return e.split("-")[0]}function j(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function _(e,t){var r,o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&((r=o)instanceof w(r).ShadowRoot||r instanceof ShadowRoot)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function M(e){return w(e).getComputedStyle(e)}function R(e){return["table","td","th"].indexOf(x(e))>=0}function C(e){return((k(e)?e.ownerDocument:e.document)||window.document).documentElement}function P(e){return"html"===x(e)?e:e.assignedSlot||e.parentNode||e.host||C(e)}function E(e){if(!z(e)||"fixed"===M(e).position)return null;var t=e.offsetParent;if(t){var r=C(t);if("body"===x(t)&&"static"===M(t).position&&"static"!==M(r).position)return r}return t}function q(e){for(var t=w(e),r=E(e);r&&R(r)&&"static"===M(r).position;)r=E(r);return r&&"body"===x(r)&&"static"===M(r).position?t:r||function(e){for(var t=P(e);z(t)&&["html","body"].indexOf(x(t))<0;){var r=M(t);if("none"!==r.transform||"none"!==r.perspective||r.willChange&&"auto"!==r.willChange)return t;t=t.parentNode}return null}(e)||t}function B(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function L(e,t,r){return Math.max(e,Math.min(t,r))}function S(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function D(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}var I={top:"auto",right:"auto",bottom:"auto",left:"auto"};function T(e){var t,r=e.popper,o=e.popperRect,n=e.placement,i=e.offsets,a=e.position,m=e.gpuAcceleration,c=e.adaptive,s=e.roundOffsets?function(e){var t=e.y,r=window.devicePixelRatio||1;return{x:Math.round(e.x*r)/r||0,y:Math.round(t*r)/r||0}}(i):i,d=s.x,f=void 0===d?0:d,b=s.y,g=void 0===b?0:b,v=i.hasOwnProperty("x"),y=i.hasOwnProperty("y"),x=p,k=l,z=window;if(c){var O=q(r);O===w(r)&&(O=C(r)),n===l&&(k=h,g-=O.clientHeight-o.height,g*=m?1:-1),n===p&&(x=u,f-=O.clientWidth-o.width,f*=m?1:-1)}var j,_=Object.assign({position:a},c&&I);return Object.assign(Object.assign({},_),{},m?((j={})[k]=y?"0":"",j[x]=v?"0":"",j.transform=(z.devicePixelRatio||1)<2?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",j):((t={})[k]=y?g+"px":"",t[x]=v?f+"px":"",t.transform="",t))}var W={passive:!0},A={left:"right",right:"left",bottom:"top",top:"bottom"};function V(e){return e.replace(/left|right|bottom|top/g,(function(e){return A[e]}))}var F={start:"end",end:"start"};function H(e){return e.replace(/start|end/g,(function(e){return F[e]}))}function $(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function K(e){var t=w(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function U(e){return $(C(e)).left+K(e).scrollLeft}function Y(e){var t=M(e);return/auto|scroll|overlay|hidden/.test(t.overflow+t.overflowY+t.overflowX)}function G(e){return["html","body","#document"].indexOf(x(e))>=0?e.ownerDocument.body:z(e)&&Y(e)?e:G(P(e))}function J(e,t){void 0===t&&(t=[]);var r=G(e),o="body"===x(r),n=w(r),i=o?[n].concat(n.visualViewport||[],Y(r)?r:[]):r,a=t.concat(i);return o?a:a.concat(J(P(i)))}function N(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Q(e,t){return"viewport"===t?N(function(e){var t=w(e),r=C(e),o=t.visualViewport,n=r.clientWidth,i=r.clientHeight,a=0,m=0;return o&&(n=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=o.offsetLeft,m=o.offsetTop)),{width:n,height:i,x:a+U(e),y:m}}(e)):z(t)?function(e){var t=$(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):N(function(e){var t=C(e),r=K(e),o=e.ownerDocument.body,n=Math.max(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=Math.max(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-r.scrollLeft+U(e),m=-r.scrollTop;return"rtl"===M(o||t).direction&&(a+=Math.max(t.clientWidth,o?o.clientWidth:0)-n),{width:n,height:i,x:a,y:m}}(C(e)))}function X(e){return e.split("-")[1]}function Z(e){var t,r=e.reference,o=e.element,n=e.placement,i=n?O(n):null,a=n?X(n):null,m=r.x+r.width/2-o.width/2,c=r.y+r.height/2-o.height/2;switch(i){case l:t={x:m,y:r.y-o.height};break;case h:t={x:m,y:r.y+r.height};break;case u:t={x:r.x+r.width,y:c};break;case p:t={x:r.x-o.width,y:c};break;default:t={x:r.x,y:r.y}}var s=i?B(i):null;if(null!=s){var d="y"===s?"height":"width";switch(a){case"start":t[s]=t[s]-(r[d]/2-o[d]/2);break;case"end":t[s]=t[s]+(r[d]/2-o[d]/2)}}return t}function ee(e,t){void 0===t&&(t={});var r=t.placement,o=void 0===r?e.placement:r,n=t.boundary,i=void 0===n?"clippingParents":n,a=t.rootBoundary,m=void 0===a?"viewport":a,c=t.elementContext,s=void 0===c?"popper":c,d=t.altBoundary,f=void 0!==d&&d,p=t.padding,g=void 0===p?0:p,v=S("number"!=typeof g?g:D(g,b)),y=e.elements.reference,w=e.rects.popper,O=e.elements[f?"popper"===s?"reference":"popper":s],j=function(e,t,r){var o="clippingParents"===t?function(e){var t=J(P(e)),r=["absolute","fixed"].indexOf(M(e).position)>=0&&z(e)?q(e):e;return k(r)?t.filter((function(e){return k(e)&&_(e,r)&&"body"!==x(e)})):[]}(e):[].concat(t),n=[].concat(o,[r]),i=n.reduce((function(t,r){var o=Q(e,r);return t.top=Math.max(o.top,t.top),t.right=Math.min(o.right,t.right),t.bottom=Math.min(o.bottom,t.bottom),t.left=Math.max(o.left,t.left),t}),Q(e,n[0]));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}(k(O)?O:O.contextElement||C(e.elements.popper),i,m),R=$(y),E=Z({reference:R,element:w,strategy:"absolute",placement:o}),B=N(Object.assign(Object.assign({},w),E)),L="popper"===s?B:R,I={top:j.top-L.top+v.top,bottom:L.bottom-j.bottom+v.bottom,left:j.left-L.left+v.left,right:L.right-j.right+v.right},T=e.modifiersData.offset;if("popper"===s&&T){var W=T[o];Object.keys(I).forEach((function(e){var t=[u,h].indexOf(e)>=0?1:-1,r=[l,h].indexOf(e)>=0?"y":"x";I[e]+=W[r]*t}))}return I}function te(e,t){void 0===t&&(t={});var r=t.boundary,o=t.rootBoundary,n=t.padding,i=t.flipVariations,a=t.allowedAutoPlacements,m=void 0===a?v:a,c=X(t.placement),s=c?i?g:g.filter((function(e){return X(e)===c})):b,d=s.filter((function(e){return m.indexOf(e)>=0}));0===d.length&&(d=s);var f=d.reduce((function(t,i){return t[i]=ee(e,{placement:i,boundary:r,rootBoundary:o,padding:n})[O(i)],t}),{});return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}function re(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function oe(e){return[l,u,h,p].some((function(t){return e[t]>=0}))}function ne(e,t,r){void 0===r&&(r=!1);var o,n,i=C(t),a=$(e),m=z(t),c={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(m||!m&&!r)&&(("body"!==x(t)||Y(i))&&(c=(o=t)!==w(o)&&z(o)?{scrollLeft:(n=o).scrollLeft,scrollTop:n.scrollTop}:K(o)),z(t)?((s=$(t)).x+=t.clientLeft,s.y+=t.clientTop):i&&(s.x=U(i))),{x:a.left+c.scrollLeft-s.x,y:a.top+c.scrollTop-s.y,width:a.width,height:a.height}}function ie(e){var t=new Map,r=new Set,o=[];function n(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var o=t.get(e);o&&n(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||n(e)})),o}var ae={placement:"bottom",modifiers:[],strategy:"absolute"};function me(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function ce(e){void 0===e&&(e={});var t=e.defaultModifiers,r=void 0===t?[]:t,o=e.defaultOptions,n=void 0===o?ae:o;return function(e,t,o){void 0===o&&(o=n);var i,a,m={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},ae),n),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],s=!1,d={state:m,setOptions:function(o){f(),m.options=Object.assign(Object.assign(Object.assign({},n),m.options),o),m.scrollParents={reference:k(e)?J(e):e.contextElement?J(e.contextElement):[],popper:J(t)};var i,a,s=function(e){var t=ie(e);return y.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}((i=[].concat(r,m.options.modifiers),a=i.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign(Object.assign(Object.assign({},r),t),{},{options:Object.assign(Object.assign({},r.options),t.options),data:Object.assign(Object.assign({},r.data),t.data)}):t,e}),{}),Object.keys(a).map((function(e){return a[e]}))));return m.orderedModifiers=s.filter((function(e){return e.enabled})),m.orderedModifiers.forEach((function(e){var t=e.options,r=e.effect;if("function"==typeof r){var o=r({state:m,name:e.name,instance:d,options:void 0===t?{}:t});c.push(o||function(){})}})),d.update()},forceUpdate:function(){if(!s){var e=m.elements,t=e.reference,r=e.popper;if(me(t,r)){m.rects={reference:ne(t,q(r),"fixed"===m.options.strategy),popper:j(r)},m.reset=!1,m.placement=m.options.placement,m.orderedModifiers.forEach((function(e){return m.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<m.orderedModifiers.length;o++)if(!0!==m.reset){var n=m.orderedModifiers[o],i=n.fn,a=n.options;"function"==typeof i&&(m=i({state:m,options:void 0===a?{}:a,name:n.name,instance:d})||m)}else m.reset=!1,o=-1}}},update:(i=function(){return new Promise((function(e){d.forceUpdate(),e(m)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(i())}))}))),a}),destroy:function(){f(),s=!0}};if(!me(e,t))return d;function f(){c.forEach((function(e){return e()})),c=[]}return d.setOptions(o).then((function(e){!s&&o.onFirstUpdate&&o.onFirstUpdate(e)})),d}}var se=ce({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,i=void 0===n||n,a=o.resize,m=void 0===a||a,c=w(t.elements.popper),s=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&s.forEach((function(e){e.addEventListener("scroll",r.update,W)})),m&&c.addEventListener("resize",r.update,W),function(){i&&s.forEach((function(e){e.removeEventListener("scroll",r.update,W)})),m&&c.removeEventListener("resize",r.update,W)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state;t.modifiersData[e.name]=Z({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=void 0===o||o,i=r.adaptive,a=void 0===i||i,m=r.roundOffsets,c=void 0===m||m,s={placement:O(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),T(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),T(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},o=t.attributes[e]||{},n=t.elements[e];z(n)&&x(n)&&(Object.assign(n.style,r),Object.keys(o).forEach((function(e){var t=o[e];!1===t?n.removeAttribute(e):n.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],n=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});z(o)&&x(o)&&(Object.assign(o.style,i),Object.keys(n).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.name,o=e.options.offset,n=void 0===o?[0,0]:o,i=v.reduce((function(e,r){return e[r]=function(e,t,r){var o=O(e),n=[p,l].indexOf(o)>=0?-1:1,i="function"==typeof r?r(Object.assign(Object.assign({},t),{},{placement:e})):r,a=i[0],m=i[1];return a=a||0,m=(m||0)*n,[p,u].indexOf(o)>=0?{x:m,y:a}:{x:a,y:m}}(r,t.rects,n),e}),{}),a=i[t.placement],m=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=a.x,t.modifiersData.popperOffsets.y+=m),t.modifiersData[r]=i}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,i=void 0===n||n,a=r.altAxis,m=void 0===a||a,c=r.fallbackPlacements,s=r.padding,d=r.boundary,f=r.rootBoundary,b=r.altBoundary,g=r.flipVariations,v=void 0===g||g,y=r.allowedAutoPlacements,x=t.options.placement,w=O(x),k=c||(w!==x&&v?function(e){if("auto"===O(e))return[];var t=V(e);return[H(e),t,H(t)]}(x):[V(x)]),z=[x].concat(k).reduce((function(e,r){return e.concat("auto"===O(r)?te(t,{placement:r,boundary:d,rootBoundary:f,padding:s,flipVariations:v,allowedAutoPlacements:y}):r)}),[]),j=t.rects.reference,_=t.rects.popper,M=new Map,R=!0,C=z[0],P=0;P<z.length;P++){var E=z[P],q=O(E),B="start"===X(E),L=[l,h].indexOf(q)>=0,S=L?"width":"height",D=ee(t,{placement:E,boundary:d,rootBoundary:f,altBoundary:b,padding:s}),I=L?B?u:p:B?h:l;j[S]>_[S]&&(I=V(I));var T=V(I),W=[];if(i&&W.push(D[q]<=0),m&&W.push(D[I]<=0,D[T]<=0),W.every((function(e){return e}))){C=E,R=!1;break}M.set(E,W)}if(R)for(var A=function(e){var t=z.find((function(t){var r=M.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return C=t,"break"},F=v?3:1;F>0&&"break"!==A(F);F--);t.placement!==C&&(t.modifiersData[o]._skip=!0,t.placement=C,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,i=void 0===n||n,a=r.altAxis,m=void 0!==a&&a,c=r.tether,s=void 0===c||c,d=r.tetherOffset,f=void 0===d?0:d,b=ee(t,{boundary:r.boundary,rootBoundary:r.rootBoundary,padding:r.padding,altBoundary:r.altBoundary}),g=O(t.placement),v=X(t.placement),y=!v,x=B(g),w="x"===x?"y":"x",k=t.modifiersData.popperOffsets,z=t.rects.reference,_=t.rects.popper,M="function"==typeof f?f(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):f,R={x:0,y:0};if(k){if(i){var C="y"===x?l:p,P="y"===x?h:u,E="y"===x?"height":"width",S=k[x],D=k[x]+b[C],I=k[x]-b[P],T=s?-_[E]/2:0,W="start"===v?z[E]:_[E],A="start"===v?-_[E]:-z[E],V=t.elements.arrow,F=s&&V?j(V):{width:0,height:0},H=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},$=H[C],K=H[P],U=L(0,z[E],F[E]),Y=y?z[E]/2-T-U-$-M:W-U-$-M,G=y?-z[E]/2+T+U+K+M:A+U+K+M,J=t.elements.arrow&&q(t.elements.arrow),N=t.modifiersData.offset?t.modifiersData.offset[t.placement][x]:0,Q=k[x]+G-N,Z=L(s?Math.min(D,k[x]+Y-N-(J?"y"===x?J.clientTop||0:J.clientLeft||0:0)):D,S,s?Math.max(I,Q):I);k[x]=Z,R[x]=Z-S}if(m){var te=k[w],re=L(te+b["x"===x?l:p],te,te-b["x"===x?h:u]);k[w]=re,R[w]=re-te}t.modifiersData[o]=R}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,o=e.name,n=r.elements.arrow,i=r.modifiersData.popperOffsets,a=O(r.placement),m=B(a),c=[p,u].indexOf(a)>=0?"height":"width";if(n&&i){var s=r.modifiersData[o+"#persistent"].padding,d=j(n),f="y"===m?l:p,b="y"===m?h:u,g=r.rects.reference[c]+r.rects.reference[m]-i[m]-r.rects.popper[c],v=i[m]-r.rects.reference[m],y=q(n),x=y?"y"===m?y.clientHeight||0:y.clientWidth||0:0,w=x/2-d[c]/2+(g/2-v/2),k=L(s[f],w,x-d[c]-s[b]);r.modifiersData[o]=((t={})[m]=k,t.centerOffset=k-w,t)}},effect:function(e){var t=e.state,r=e.options,o=e.name,n=r.element,i=void 0===n?"[data-popper-arrow]":n,a=r.padding,m=void 0===a?0:a;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&_(t.elements.popper,i)&&(t.elements.arrow=i,t.modifiersData[o+"#persistent"]={padding:S("number"!=typeof m?m:D(m,b))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,a=ee(t,{elementContext:"reference"}),m=ee(t,{altBoundary:!0}),c=re(a,o),s=re(m,n,i),d=oe(c),f=oe(s);t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:s,isReferenceHidden:d,hasPopperEscaped:f},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":d,"data-popper-escaped":f})}}]});const de=class{constructor(t){e(this,t),this.openDirection="right",this.position="absolute",this.containerStyle={},this.parent=document.body,this.inheritParentWidth=!1,this.visible=!1,this.loaded=!1}onVisible(){if(!this.visible)return this.hideContainer(),this.styleContainer(),void this.destroyPopper();this.styleContainer(),this.createPopper(),requestAnimationFrame((()=>{this.showContainer()}))}disconnectedCallback(){this.removeContainer(),this.destroyPopper(),this.observer&&this.observer.unobserve(this.container)}connectedCallback(){this.loaded&&(this.createContainer(),this.hideContainer(),this.attachContainer(),this.styleContainer(),this.visible&&this.createPopper(),"ResizeObserver"in window)&&new ResizeObserver((()=>{this.popperInstance&&(this.styleContainer(),this.popperInstance.update())})).observe(this.container)}componentDidLoad(){this.loaded=!0,this.connectedCallback()}render(){return r("slot",null)}createContainer(){const e=this.host.shadowRoot.querySelector("slot"),t=e.assignedElements&&e.assignedElements()||[];this.container=document.createElement("div"),this.container.setAttribute("id",this.containerId),this.container.setAttribute("class","limel-portal--container"),Object.assign(this.container,{portalSource:this.host}),t.forEach((e=>{this.container.appendChild(e)}))}attachContainer(){this.parent.appendChild(this.container)}removeContainer(){this.container&&(this.hideContainer(),this.container.parentElement.removeChild(this.container))}hideContainer(){this.container.style.opacity="0"}showContainer(){this.container.style.opacity="1"}styleContainer(){const e=this.host.getBoundingClientRect().width;if(this.container.style.display=this.visible?"block":"none",this.inheritParentWidth){let t=this.getContentWidth(this.container);e>0&&(t=e),this.container.style.width=`${t}px`}this.ensureContainerFitsInViewPort(),Object.keys(this.containerStyle).forEach((e=>{this.container.style[e]=this.containerStyle[e]}))}getContentWidth(e){if(!e)return null;const t=e.getBoundingClientRect().width;if(0!==t)return t;const r=e.querySelector("*");return this.getContentWidth(r)}createPopper(){const e=this.createPopperConfig();this.popperInstance=se(this.host,this.container,e)}destroyPopper(){var e;null===(e=this.popperInstance)||void 0===e||e.destroy(),this.popperInstance=null}createPopperConfig(){let e="bottom-start",t="top-start";return"left"===this.openDirection&&(e="bottom-end",t="top-end"),{strategy:this.position,placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:[t]}}]}}ensureContainerFitsInViewPort(){const e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),{top:t,bottom:r}=this.host.getBoundingClientRect(),o=Math.max(t,0),n=Math.max(e-r,0),i=Math.max(o,n)-16;this.container.style.maxHeight=`${i}px`}get host(){return o(this)}static get watchers(){return{visible:["onVisible"]}}};de.style=":host(limel-portal:not(.limel-portal--fixed)){display:block;position:absolute;top:0;bottom:0;width:100%;pointer-events:none}:host(limel-portal.limel-portal--fixed){position:fixed}:host([hidden]){display:none}";export{f as limel_menu_surface,de as limel_portal}