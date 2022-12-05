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
      <a class="tg-btnaddtowishlist" href="javascript:void(0);">
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
      <span class="tg-stars"><span></span></span>
      <a class="tg-btn tg-btnstyletwo" href="javascript:void(0);">
        <i class="fa fa-book"></i>
        <em>Review Book</em>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Book",
  props: {
    book: Object,
  },
  computed: {
    title() {
        return this.truncate(this.book.title)
    },
    author() {
        return this.truncate(this.book.author.name)
    },
    category() {
        return this.truncate(this.book.category.name)
    }
  },
  methods: {
    truncate(str) {
        const MAX = 20
        return str.length > MAX ? `${str.substr(0, MAX)}...` : str
    }
  },
};
</script>
