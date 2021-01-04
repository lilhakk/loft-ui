<script>
  import { Router, Route } from 'svelte-routing';
  import Sidebar from './Sidebar';
  import * as components from '@loft-ui/svelte';

  let url = '';
</script>

<main>
  <Router url="{url}">
    <Sidebar />
    <div class="root">
      {#each Object.keys(components) as key}
        <Route
          path={'/svelte/' + key.toLowerCase()}
          component="{components[key].Guide}"
        />
      {/each}
    </div>
  </Router>
</main>
