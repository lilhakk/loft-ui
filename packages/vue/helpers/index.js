import Prism from 'prismjs';

export const Code = {
  props: { v: String, lang: String },
  mounted: function () {
    Prism.highlightElement(this.$refs.ref);
  },
  template: `
    <pre v-bind:class="lang ? ('language-' + lang) : 'language-js'">
      <code v-bind:class="lang ? ('language-' + lang) : 'language-js'" ref="ref">{{v
        .replace(/#/gi, '{')
        .replace(/%/gi, '}')
        .replace(/    (.*)/gi, '$1')
        .trim()}}</code>
    </pre>
  `
};

export const InlineCode = {
  template: '<code class="inline_code"><slot></slot></code>'
};
