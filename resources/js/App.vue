<template>
  <div id="tg-wrapper" class="tg-wrapper tg-haslayout">
    <AppNavbar />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './Components/AppFooter.vue';
import "./Styles/app.scss";

export default {
  name: "app",
  components: {
    AppFooter,
    AppNavbar: () => import("./Components/AppNavbar.vue")
  },
};
</script>

