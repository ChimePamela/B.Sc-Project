<template>
  <li class="menu-item-has-children">
    <a href="javascript:void(0);">Categories</a>
    <ul class="sub-menu">
      <li v-for="(category, index) in categories" :key="index" class="current-menu-item">
        <a href="index.html">SciFi</a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "NavCategories",
  data() {
      return {
          categories: [1, 2]
      }
  },
};
</script>
