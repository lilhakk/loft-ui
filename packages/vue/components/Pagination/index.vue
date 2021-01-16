<script>
  import Guide from './Guide';
  import s from '../../../common/Pagination/index.scss';

  export default {
    Guide,
    name: 'Pagination',
    props: {
      count: { type: Number, default: 5 },
      page: { type: Number, default: 1 },
      onChange: Function
    },
    computed: {
      numbersPage() {
        const { page, count } = this;
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
      }
    },
    data: ()=> ({ s })
  }
</script>

<template>
  <div :class="s.pagination">
    <div :class="[s.paginationFastLink, { [s.paginationHide]: page === 1 }]">
      <div
        :class="s.arrow"
        v-if="page !== 1"
        v-on:click="onChange(page - 1)"
      >{{'<'}}</div>
    </div>

    <div :class="s.list">
      <div
        :class="s.item"
        v-if="numbersPage[0] !== 1"
        v-on:click="onChange(1)"
      >1</div>
      <div
        :class="[s.item, s.itemPure]"
        v-if="numbersPage[0] !== 1"
      >..</div>

      <div
        :class="[s.item, { [s.active]: page === number }]"
        v-for="number in numbersPage"
        v-on:click="onChange(number)"
      >{{number}}</div>

      <div
        :class="[s.item, s.itemPure]"
        v-if="numbersPage[numbersPage.length - 1] !== count"
      >..</div>
      <div
        :class="s.item"
        v-if="numbersPage[numbersPage.length - 1] !== count"
        v-on:click="onChange(count)"
      >{{count}}</div>
    </div>

    <div :class="[s.paginationFastLink, { [s.paginationHide]: page === count }]">
      <div
        :class="s.arrow"
        v-if="page !== count"
        v-on:click="onChange(page + 1)"
      >{{'>'}}</div>
    </div>
  </div>
</template>
