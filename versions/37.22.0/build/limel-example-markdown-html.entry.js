import{r as o,h as e}from"./index-6156b4fd.js";import{a as d}from"./allowed-css-properties-7e15e135.js";const n=`\n<dl>\n  <dt>A Definition list</dt>\n  <dd>is something people sometimes use.</dd>\n\n  <dt>Markdown in HTML</dt>\n  <dd>does *not* work **very** well.</dd>\n\n  <dt>What to do?</dt>\n  <dd>It's better to use HTML <em>tags</em>.</dd>\n\n  <dt>Can you use text colors?</dt>\n  <dd style="color: red">Yes, since I'm red!</dd>\n\n  <dt>Can you use background colors?</dt>\n  <dd style="background-color: rgb(var(--color-green-default))">Yes, since I'm on a green background!</dd>\n\n  <dt>Can you use more than one style at the same time?</dt>\n  <dd style="color: rgb(var(--color-sky-lighter)); background-color: rgb(var(--color-coral-dark)); font-weight: bold;">Yes, since I'm a light sky blue on a dark coral background!</dd>\n\n  <dt>Can you use background images?</dt>\n  <dd style="background-image: url(https://lundalogik.github.io/lime-icons8/assets/icons/poison.svg)">No, you should not be able to, so if there's a skull and crossbones background here, something is wrong.</dd>\n\n  <dt>Can you use <code>background</code> with a color value?</dt>\n  <dd style="background: #4ca250">Yes. If the value is recognized as a color value, the value will be moved to <code>background-color</code></dd>\n\n  <dt>Can you sneakily use <code>background</code> to insert an image?</dt>\n  <dd style="background: #4ca250 url(https://lundalogik.github.io/lime-icons8/assets/icons/poison.svg)">No. If the value is not recognized as a color value, the background property will be stripped.</dd>\n</dl>\n`;const s=class{constructor(e){o(this,e)}render(){return e("div",null,e("limel-markdown",{value:n}),e("br",null),"Allowed CSS properties:",e("ul",null,d.map((o=>e("li",null,o)))))}};export{s as limel_example_markdown_html};
//# sourceMappingURL=limel-example-markdown-html.entry.js.map