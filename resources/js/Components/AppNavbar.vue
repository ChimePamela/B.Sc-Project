<template>
  <header id="tg-header" class="tg-header tg-haslayout">
    <div class="tg-middlecontainer">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <strong class="tg-logo"
              ><a href="index.html"
                ><img src="images/logo.png" alt="company name here" /></a
            ></strong>
            <div class="tg-wishlistandcart">
              <wishlist />
              <cart />
            </div>
            <div class="tg-searchbox">
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
                  <nav-categories />
                  <li class="current-menu-item">
                    <a href="javascript:void(0);">Explore Books</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Authors</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Best Selling</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Top Rated</a>
                  </li>
                  <user-menu />
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
import Wishlist from "./User/Wishlist.vue";
import UserMenu from "./User/Menu.vue";

export default {
  components: { Wishlist, Cart, NavCategories, UserMenu },
  name: "AppNavbar",
};
</script>
