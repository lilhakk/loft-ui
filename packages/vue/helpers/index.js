import Prism from 'prismjs';

export const Code = {
  props: {
    v: String,
    lang: { type: String, default: 'js' }
  },
  mounted: function () {
    Prism.highlightElement(this.$refs.ref);
  },
  data() {
    let code = '';

    code = this.$props.v
      .replace(/<</gi, '{{')
      .replace(/\>\>/gi, '}}')
      .replace(/    (.*)/gi, '$1')
      .trim();

    return { code };
  },
  template: `
    <pre v-bind:class="'language-' + lang">
      <code
        ref="ref"
        v-bind:class="'language-' + lang"
      >{{code}}</code>
    </pre>
  `
};

export const InlineCode = {
  template: '<code class="inline_code"><slot></slot></code>'
};
