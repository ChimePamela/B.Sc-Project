<template>
    <div class="r-explore">
        <best-selling :books="bestSelling" />
        <featured />
        <new-release />
    </div>
</template>

<script>
import { mapState } from "vuex";
import BestSelling from "../Components/Books/BestSelling.vue";
import Featured from "../Components/Books/Featured.vue";
import NewRelease from "../Components/Books/NewRelease.vue";

export default {
    components: { Featured, BestSelling, NewRelease },
    name: "ExploreBooks",
    data() {
        return {
            books: []
        };
    },
    computed: {
        ...mapState({
            bestSelling: state => state.books.bestSelling
        })
    },

    async mounted() {
        await Promise.all([
            this.$store.dispatch('getBestSelling')
        ])
    }
};
</script>
