<script>
  import { Link } from 'svelte-routing';
  import Separator from './Separator/index.svelte'
  import c from 'clsx';
  import s from '../../../common/Breadcrumbs/index.scss';

  export let data = []
</script>

<div class={s.breadcrumbs}>
  {#each data as item, index}
    {#if index + 1 === data.length}
      <div class={c([s.breadcrumbsTitle, s.breadcrumbsTitleActive])}>
        {item.title}
      </div>
    {/if}

    {#if index + 1 !== data.length}
      <Link
        to={item.link}
        class={s.breadcrumbsTitle}
      >{item.title}</Link>
    {/if}
    
    {#if index + 1 !== data.length}
      <Separator />
    {/if}
  {/each}
</div>
