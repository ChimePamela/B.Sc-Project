<template>
  <section class="tg-sectionspace tg-haslayout">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="tg-sectionhead">
            <h2>All Recommended Books</h2>
            <a class="tg-btn" href="javascript:void(0);">View All Top rated</a>
          </div>
        </div>
        <div v-if="all.length" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div
            class="col-md-3 col-lg-3"
            v-for="(item, index) in all"
            :key="index"
          >
            <Book :book="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Book from "../Components/Books/Book.vue";

export default {
  components: { Book },
  name: "BookList",
  computed: {
    ...mapState({
      all: (state) => state.books.all,
    }),
  },
  async mounted() {
    await this.$store.dispatch("getAllBooks");
  },
};
</script>
