<template>
  <section class="tg-sectionspace tg-haslayout">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="tg-sectionhead row">
            <div class="col-md-6">
                <form class="tg-formtheme tg-formsearch">
                    <fieldset>
                    <input
                        type="text"
                        name="search"
                        class="typeahead form-control"
                        placeholder="Search by title, author, keyword, ISBN..."
                    />
                    <button type="submit">
                        <i class="icon-magnifier"></i>
                    </button>
                    </fieldset>
                </form>
            </div>
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
