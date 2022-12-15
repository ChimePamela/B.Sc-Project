<template>
  <li v-if="isLoggedIn" class="menu-item-has-children">
    <div class="tg-userlogin">
      <span>Hi, {{ profile.name }}</span>
      <figure>
        <a href="javascript:void(0);">
            <img :src="profile.avatar" :alt="profile.name" />
        </a>
      </figure>
    </div>
    <ul class="sub-menu">
      <li>
        <router-link :to="{ name: 'wishlist' }">My Wishlist</router-link>
      </li>
      <li>
        <a @click="logout" href="javascript:void(0)">Logout</a>
      </li>
    </ul>
  </li>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "UserMenu",
  props: {
    isLoggedIn: Boolean
  },
  computed: {
    ...mapState({
        profile: state => state.user.profile
    }),
  },
  methods: {
    async logout() {
        await this.$store.dispatch('logout');
        this.$router.replace({ name: 'auth' });
    }
  }
};
</script>
