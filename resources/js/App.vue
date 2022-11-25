<template>
  <div id="tg-wrapper" class="tg-wrapper tg-haslayout">
    <AppNavbar />
    <router-view></router-view>
    <AppFooter />
    <notifications group="errors" classes="errors" position="bottom center" />
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

<style lang="scss">
.errors {
    padding: 10px;
    margin: 0 5px 5px;

    font-size: 12px;

    color: #ffffff;
    border-left: 5px solid #E54D42;
    background: #E54D42;
}
</style>

