<template>
  <div class="r-explore">
      <best-selling />
      <featured />
      <new-release />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BestSelling from '../Components/Books/BestSelling.vue';
import Featured from '../Components/Books/Featured.vue';
import NewRelease from '../Components/Books/NewRelease.vue';

export default {
  components: { Featured, BestSelling, NewRelease },
  name: "ExploreBooks",
  computed: {
    ...mapState({
      count: (state) => state.count,
    }),
  },
};
</script>
