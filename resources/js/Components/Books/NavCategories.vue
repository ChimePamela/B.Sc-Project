<template>
    <li class="menu-item-has-children">
        <a href="javascript:void(0);">Categories</a>
        <ul class="sub-menu">
            <li
                v-for="(category, index) in categories"
                :key="index"
                class="current-menu-item"
            >
                <a href="index.html">{{ category.name }}</a>
            </li>
        </ul>
    </li>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "NavCategories",
    computed: {
        ...mapState({
            categories: state => state.categories
        })
    },
    async mounted() {
        await this.$store.dispatch('getCategories')
    }
};
</script>
