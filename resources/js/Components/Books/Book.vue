<template>
  <div class="tg-postbook">
    <figure class="tg-featureimg">
      <div class="tg-bookimg">
        <div class="tg-frontcover">
          <img :src="book.image_url" alt="image description" />
        </div>
        <div class="tg-backcover">
          <img src="images/books/img-01.jpg" alt="image description" />
        </div>
      </div>
      <a v-if="isLoggedIn" @click="addToWishlist" class="tg-btnaddtowishlist" href="javascript:void(0);">
        <i class="icon-heart"></i>
        <span>add to wishlist</span>
      </a>
    </figure>
    <div class="tg-postbookcontent">
      <div class="tg-themetagbox">
        <span class="tg-themetag">{{ category }}</span>
      </div>
      <div class="tg-booktitle">
        <h3>
          <a href="javascript:void(0);">{{ title }}</a>
        </h3>
      </div>
      <span class="tg-bookwriter"
        >By: <a href="javascript:void(0);">{{ author }}</a></span
      >
      <div class="">
        <StarRating :rating="book.avgRating" class="book-rating" read-only :show-rating="false" :star-size="20" />
      </div>
        <review-book @review-submitted="handleReviewSubmitted" v-if="isLoggedIn" :book="book" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { truncate } from '../../Helpers/format'
import ReviewBook from './ReviewBook.vue';
import StarRating from 'vue-star-rating'

export default {
  name: "Book",
  props: {
    book: Object,
    maxChar: {
        type: Number,
        default: 20
    }
  },
  components: {
    ReviewBook,
    StarRating
  },
  computed: {
    ...mapState({
        isLoggedIn: state => state.isLoggedIn,
    }),
    title() {
        return truncate(this.book.title, this.maxChar)
    },
    author() {
        return truncate(this.book.author.name, this.maxChar)
    },
    category() {
        return truncate(this.book.category.name, this.maxChar)
    }
  },
  methods: {
    async addToWishlist() {
        await this.$store.dispatch('addToWishlist', { id: this.book.id });
        this.$notify({
            group: 'notif',
            title: 'Action successful',
            text: 'Book successfully added to your wishlist',
        });
    },
    handleReviewSubmitted() {
        this.$emit('review-submitted')
    }
  }
};
</script>

<style>
    .vue-star-rating {
        display: block !important;
    }
</style>
