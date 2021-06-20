<template>
    <nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="page-item" :class="{'disabled':pages.current_page===1}">
        <a class="page-link" href="#" aria-label="Previous"
        @click.prevent="change(pages.current_page-1)">
            <span aria-hidden="true">&laquo;</span>
        </a>
        </li>
        <li class="page-item" v-for="(item,index) in pages.total_pages" :key="index"
            :class="{'active':pages.current_page===item}">
            <a class="page-link" href="#" @click.prevent="change(item)">{{item}}</a>
        </li>
        <li class="page-item" :class="{'disabled':pages.current_page===pages.total_pages}">
        <a class="page-link" href="#" aria-label="Next"
        @click.prevent="change(pages.current_page+1)">
            <span aria-hidden="true">&raquo;</span>
        </a>
        </li>
    </ul>
    </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    change (item) {
      this.$emit('change-page', item)
    }
  }
}
</script>
