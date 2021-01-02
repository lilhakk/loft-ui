<script>
  import { Router, Route } from 'svelte-routing';
  import { Button } from '@loft-ui/svelte';
  import Sidebar from './Sidebar';

  let url = '';
</script>

<main>
  <Sidebar />
  <div class="root">
    <Router url="{url}">
      <Route path="/svelte/button" component="{Button.Guide}" />
    </Router>
  </div>
</main>
