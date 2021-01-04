<script>
  import Prism from 'prismjs';
  import { onMount } from 'svelte';

  export let v;
  export let lang = 'svelte';
  let ref;

  onMount(()=> {
    Prism.highlightElement(ref);
  });

  const code = v
    .replace(/  (.*)/gi, '$1')
    .trim();
</script>

<pre class={'language-' + lang}>
  <code
    bind:this={ref}
    class={'language-' + lang}
  >{code}</code>
</pre>
