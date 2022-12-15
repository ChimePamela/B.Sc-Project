<template>
    <li class="menu-item-has-children">
        <a href="javascript:void(0);">Categories</a>
        <ul class="sub-menu">
            <li
                v-for="({ name }, index) in categories"
                :key="index"
                class="current-menu-item"
            >
                <router-link :to="{ name: 'books', query: { category: name } }">{{ name }}</router-link>
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
