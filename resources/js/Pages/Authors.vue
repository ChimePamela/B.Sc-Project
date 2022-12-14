<template>
    <section class="tg-sectionspace tg-haslayout">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="tg-sectionhead row">
                        <h2>Authors</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-lg-4 mt-3" v-for="({ name }, index) in authors" :key="index">
                    <div @click="showAuthorBooks(name)" class="author">
                        {{ name }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Authors',
    computed: {
        ...mapState({
            authors: state => state.authors
        })
    },
    async mounted() {
        await this.$store.dispatch('getAuthors');
    },
    methods: {
        showAuthorBooks(name) {
            this.$router.push({ path: '/books', query: { author: name } })
        }
    }
}
</script>

<style>
    .author {
        padding: 10px;
        border: 1px solid #ccc;
        cursor: pointer;
        margin-bottom: 2rem;
    }
    .author:hover {
        color: #76B647;
    }
</style>
