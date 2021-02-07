<script>
  import Guide from './Guide';
  import s from '../../../common/Tooltip/index.scss';

  export default {
    Guide,
    name: 'l-tooltip',
    props: {
      selected: { type: Boolean, default: false }
    },
    data: ()=> ({ s })
  }
</script>

<template>
  <div>
    Tooltip
  </div>
</template>
