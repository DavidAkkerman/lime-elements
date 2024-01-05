import { Component, h, Prop } from '@stencil/core';
export class KompendiumDebug {
  render() {
    const tag = this.match.params.name;
    const component = findComponent(tag, this.docs);
    return (h("article", { class: "component" },
      h("section", { class: "docs debug" }, this.renderComponent(component))));
  }
  renderComponent(component) {
    const ExampleComponent = component.tag;
    const ownerComponent = this.docs.components.find(isOwnerOf(component));
    const schema = this.schemas.find((s) => s.$id === ownerComponent.tag);
    const props = {
      schema: schema,
    };
    return (h("div", { class: "show-case" },
      h("div", { class: "show-case_component" },
        h(ExampleComponent, Object.assign({}, props)))));
  }
  static get is() { return "kompendium-debug"; }
  static get encapsulation() { return "shadow"; }
  static get properties() { return {
    "docs": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "JsonDocs",
        "resolved": "JsonDocs",
        "references": {
          "JsonDocs": {
            "location": "import",
            "path": "@stencil/core/internal"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The generated documentation data"
      }
    },
    "schemas": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<Record<string, any>>",
        "resolved": "Record<string, any>[]",
        "references": {
          "Array": {
            "location": "global"
          },
          "Record": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Component schemas"
      }
    },
    "match": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "MatchResults",
        "resolved": "MatchResults",
        "references": {
          "MatchResults": {
            "location": "import",
            "path": "@stencil/router"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Matched route parameters"
      }
    }
  }; }
}
function findComponent(tag, docs) {
  return docs.components.find((doc) => doc.tag === tag);
}
const isOwnerOf = (example) => (component) => {
  return !!component.docsTags
    .filter(isTag('exampleComponent'))
    .find(hasText(example.tag));
};
const isTag = (name) => (tag) => {
  return tag.name === name;
};
const hasText = (name) => (tag) => {
  return tag.text === name;
};