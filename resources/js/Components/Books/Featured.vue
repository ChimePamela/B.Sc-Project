<template>
  <section class="tg-bglight tg-haslayout">
    <div class="container">
      <div class="row">
        <div class="tg-featureditm">
          <div
            class="col-xs-12 col-sm-12 col-md-4 col-lg-4 hidden-sm hidden-xs"
          >
            <figure>
              <img src="images/img-02.png" alt="image description" />
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
              <span class="tg-stars"><span></span></span>
              <div class="tg-priceandbtn">
                <a
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

export default {
  name: "FeaturedBook",
  computed: {
    ...mapState({
      featured: (state) => state.books.featured,
    }),
    title() {
        return this.featured ? this.featured.title : ''
    },
    author() {
        return this.featured ? this.featured.author.name : ''
    }
  },
  async mounted() {
    await this.$store.dispatch("getFeatured");
  },
};
</script>
