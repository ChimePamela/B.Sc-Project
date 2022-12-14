<template>
  <header id="tg-header" class="tg-header tg-haslayout">
    <div class="tg-middlecontainer">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <strong class="tg-logo"
              ><a href="javascript:void(0);"
                ><img src="images/logo.png" alt="company name here" /></a
            ></strong>
            <div class="tg-wishlistandcart">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tg-navigationarea">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <nav id="tg-nav" class="tg-nav">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#tg-navigation"
                  aria-expanded="false"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div
                id="tg-navigation"
                class="collapse navbar-collapse tg-navigation"
              >
                <ul>
                  <li v-for="(item, index) in menuItems" :key="index" :class="isActive(item.name)">
                    <router-link :to="{ name: item.name }">{{ item.label }}</router-link>
                  </li>
                  <NavCategories />
                  <UserMenu />
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavCategories from "./Books/NavCategories.vue";
import Cart from "./User/Cart.vue";
import UserMenu from "./User/Menu.vue";

export default {
  components: { Cart, NavCategories, UserMenu },
  name: "AppNavbar",
  data() {
    return {
      menuItems: [
        { label: "Explore", name: "explore" },
        { label: "All Books", name: "books" },
        { label: "Authors", name: "authors" },
      ],
    };
  },
  mounted() {
    console.log(this.$route.name);
  },
  methods: {
    isActive(name) {
        return name === this.$route.name ? 'current-menu-item' : false
    }
  }
};
</script>
