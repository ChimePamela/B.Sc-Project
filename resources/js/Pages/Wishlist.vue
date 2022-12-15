<template>
    <section class="tg-sectionspace tg-haslayout">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="tg-sectionhead row">
                        <h2>Wishlist</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-lg-4 mt-3" v-for="({ book }, index) in wishlist" :key="index">
                    <div class="item">
                        {{ book.title }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import { mapState } from 'vuex'
import Book from '../Components/Books/Book.vue';
export default {
  components: { Book },
    name: 'Wishlist',
    computed: {
        ...mapState({
            wishlist: state => state.wishlist
        })
    },
    async mounted() {
        await this.$store.dispatch('getWishlist');
    }
}
</script>

<style>
    .item {
        padding: 10px;
        border: 1px solid #ccc;
        cursor: pointer;
        margin-bottom: 2rem;
    }
    .item:hover {
        color: #76B647;
    }
</style>
