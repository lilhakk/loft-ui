<script>
  import { Code, InlineCode as I } from '../../helpers';
  import Pagination from './Pagination';

  let page = 3;
</script>

<h1>Pagination</h1>
<Code v={`import { Pagination } from 'loft-ui';`} lang="js" />

<h2>Простой пример</h2>
<Code v={`
  <script>
    let page = 3;
  </script>

  <Pagination
    count={10}
    page={page}
  />
`} />
<Pagination
  count={10}
  page={page}
/>
