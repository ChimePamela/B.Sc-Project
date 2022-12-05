<template>
    <div class="r-explore">
        <TopRated />
        <featured />
        <new-release />
    </div>
</template>

<script>
import TopRated from "../Components/Books/TopRated.vue";
import Featured from "../Components/Books/Featured.vue";
import NewRelease from "../Components/Books/NewRelease.vue";

export default {
    components: { Featured, TopRated, NewRelease },
    name: "ExploreBooks",
    data() {
        return {
            books: []
        };
    },

};
</script>
