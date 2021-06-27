<script>
  import Menu from '../Menu';

  export let value;
  export let data = [];
</script>

<Menu
  active={value}
  variant="vertical"
>
  {#each data as item}
    <Menu.Item value={item.value}>
      {item.label}
    </Menu.Item>
  {/each}
</Menu>
