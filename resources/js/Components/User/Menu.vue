<template>
  <li v-if="showMenu" class="menu-item-has-children">
    <div class="tg-userlogin">
      <span>Hi, Amarachi</span>
      <figure>
        <a href="javascript:void(0);"
          ><img src="images/users/img-01.jpg" alt="image description"
        /></a>
      </figure>
    </div>
    <ul class="sub-menu">
      <li>
        <a href="aboutus.html">My Wishlist</a>
      </li>
    </ul>
  </li>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "UserMenu",
  computed: {
    ...mapState({
        isLoggedIn: state => state.isLoggedIn,
        profile: state => state.user.profile
    }),
    showMenu() {
        return this.isLoggedIn || this.profile
    }
  },
};
</script>
