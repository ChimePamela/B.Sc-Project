<template>
  <section class="tg-sectionspace tg-haslayout">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="tg-sectionhead">
            <h2><span>People’s Choice</span>Top Rated Books</h2>
            <a class="tg-btn" href="javascript:void(0);">View All Top rated</a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="col-md-3 col-lg-3" v-for="(item, index) in firstFour" :key="index">
                <Book :book="item" />
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Book from './Book.vue'

export default {
    name: 'BestSelling',
    components: {
        Book
    },
    computed: {
        ...mapState({
            topRated: state => state.books.topRated
        }),
        firstFour() {
            return this.topRated.slice(0, 4)
        }
     },
    async mounted() {
        await this.$store.dispatch('getTopRated')
    }
}
</script>

<style scoped>
    .tg-sectionhead {
        padding-right: 0;
    }
</style>
