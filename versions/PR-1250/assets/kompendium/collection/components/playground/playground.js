import { Component, h, Prop, State } from '@stencil/core';
export class Playground {
  constructor() {
    this.activateTab = (id) => () => {
      this.activeTab = id;
    };
    this.renderTab = this.renderTab.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }
  render() {
    if (!this.component) {
      return;
    }
    const sources = this.component.sources || [];
    return (h("section", { class: "example" },
      h("div", { class: "result" }, this.renderResult()),
      h("aside", { class: "code" },
        h("nav", { class: "tab-bar" }, this.renderTabs(sources)),
        h("div", { class: "tab-items" }, this.renderItems(sources)))));
  }
  renderTabs(sources) {
    return sources.map(this.renderTab);
  }
  renderTab(source, index) {
    const classList = {
      tab: true,
      active: this.isTabActive(source, index),
    };
    return (h("a", { class: classList, onClick: this.activateTab(source.filename) },
      h("span", null, source.filename)));
  }
  renderItems(sources) {
    return sources.map(this.renderItem);
  }
  renderResult() {
    const ExampleComponent = this.component.tag;
    const text = '##### ' + this.component.docs;
    const props = {
      schema: this.schema,
    };
    return (h("div", { class: "show-case" },
      h("div", { class: "show-case_description" },
        h("kompendium-markdown", { text: text })),
      h("div", { class: "show-case_component" },
        this.renderDebugButton(this.component.tag),
        h(ExampleComponent, Object.assign({}, props)))));
  }
  renderItem(source, index) {
    const classList = {
      'tab-item': true,
      active: this.isTabActive(source, index),
    };
    const code = source.source.replace(/\/\*\*.+?\*\//gms, '');
    const key = [this.component.tag, source.filename].join('/');
    return (h("kompendium-code", { class: classList, language: source.type, key: key }, code));
  }
  renderDebugButton(tag) {
    if (!['localhost', '127.0.0.1'].includes(location.hostname)) {
      return;
    }
    const href = `#/debug/${tag}`;
    return (h("div", { class: "debug" },
      h("a", { class: "debug-link", href: href, title: "Debug" }, "Debug")));
  }
  isTabActive(source, index) {
    let isActive = this.activeTab === source.filename;
    if (!isActive) {
      isActive = index === 0 && !this.activeTab;
    }
    return isActive;
  }
  static get is() { return "kompendium-playground"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["playground.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["playground.css"]
  }; }
  static get properties() { return {
    "component": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "JsonDocsComponent",
        "resolved": "JsonDocsComponent",
        "references": {
          "JsonDocsComponent": {
            "location": "import",
            "path": "@stencil/core/internal"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The component to display"
      }
    },
    "schema": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Record<string, any>",
        "resolved": "{ [x: string]: any; }",
        "references": {
          "Record": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Schema for the component"
      }
    }
  }; }
  static get states() { return {
    "activeTab": {}
  }; }
}
