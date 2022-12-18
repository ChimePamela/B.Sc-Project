<template>
  <section v-if="featured" class="tg-bglight tg-haslayout">
    <div class="container">
      <div class="row">
        <div class="tg-featureditm">
          <div
            class="col-xs-12 col-sm-12 col-md-4 col-lg-4 hidden-sm hidden-xs"
          >
            <figure>
              <img width="300" :src="imgUrl" alt="image description" />
            </figure>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <div class="tg-featureditmcontent">
              <div class="tg-themetagbox">
                <span class="tg-themetag">featured</span>
              </div>
              <div class="tg-booktitle">
                <h3>
                  <a href="javascript:void(0);"
                    >{{ title }}</a
                  >
                </h3>
              </div>
              <span class="tg-bookwriter"
                >By: <a href="javascript:void(0);">{{ author }}</a></span
              >
              <div>
                <StarRating :rating="featured.avgRating" class="book-rating" read-only :show-rating="false" :star-size="20" />
              </div>
              <div class="tg-priceandbtn">
                <a
                    @click="addToWishlist"
                  class="tg-btn tg-btnstyletwo tg-active"
                  href="javascript:void(0);"
                >
                  <i class="fa fa-shopping-basket"></i>
                  <em>Add To Wishlist</em>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import StarRating from 'vue-star-rating'

export default {
  name: "FeaturedBook",
  components: {
    StarRating
  },
  computed: {
    ...mapState({
      featured: (state) => state.books.featured,
    }),
    title() {
        return this.featured ? this.featured.title : ''
    },
    author() {
        return this.featured ? this.featured.author.name : ''
    },
    imgUrl() {
        return this.featured ? this.featured.image_url : ''
    }
  },
  async mounted() {
    await this.$store.dispatch("getFeatured");
  },
    methods: {
        async addToWishlist() {
            await this.$store.dispatch('addToWishlist', { id: this.featured.id });
            this.$notify({
                group: 'notif',
                title: 'Action successful',
                text: 'Book successfully added to your wishlist',
            });
        }
  }
};
</script>
