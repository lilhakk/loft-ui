<script>
  import c from 'clsx';
  import s from '../../../common/Pagination/index.scss';

  export let style = '';
  export let count = null;
  export let page = null;

  $: numbersPage = (()=> {
    const countShow = (count < 5) ? count : 5;
    const startIndex = page - 2;
    const arr = [];

    for (let index = startIndex; arr.length < countShow; index++) {
      if (index > count) {
        arr.unshift(arr[0] - 1);
        continue;
      }
      if (index > 0) {
        arr.push(index);
      }
    }

    return arr;
  })();
</script>

<div
  style={style}
  class={s.pagination}
>
  <div class={c(s.paginationFastLink, { [s.paginationHide]: page === 1 })}>
    {#if page !== 1}
      <div class={s.arrow} on:click={()=> page--}>{'<'}</div>
    {/if}
  </div>

  <div class={s.list}>
    {#if numbersPage[0] !== 1}
      <div class={s.item} on:click={()=> page = 1}>1</div>
      <div class={c(s.item, s.itemPure)}>..</div>
    {/if}
  
    {#each numbersPage as number, index}
      <div
        class={c(s.item, { [s.active]: page === number })}
        on:click={()=> page = number}
      >{number}</div>
    {/each}

    {#if numbersPage[numbersPage.length - 1] !== count}
      <div class={c(s.item, s.itemPure)}>..</div>
      <div class={s.item} on:click={()=> page = count}>{count}</div>
    {/if}
  </div>

  <div class={c(s.paginationFastLink, { [s.paginationHide]: page === count })}>
    {#if page !== count}
      <div class={s.arrow} on:click={()=> page++}>{'>'}</div>
    {/if}
  </div>
</div>
