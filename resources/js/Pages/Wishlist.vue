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
                <div class="col-md-4 col-lg-4 mt-3" v-for="({ id, book }, index) in wishlist" :key="index">
                    <div class="item">
                        <div class="">
                            <div>
                                {{ book.title }}
                            </div>
                            <button @click="removeFromWishlist(id)" class="btn" type="button">
                                <i class="icon-trash"></i>remove
                            </button>
                        </div>
                        <div class="col-md-3 col-lg-3">
                            <img :src="book.image_url" alt="">
                        </div>
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
    mounted() {
        this.getWishlist()
    },
    methods: {
        async removeFromWishlist(id) {
            await this.$store.dispatch('removeFromWishlist', { id })
            this.$notify({
                group: 'notif',
                title: 'Action successful',
                text: 'Book successfully removed from your wishlist',
            });
            await this.getWishlist()
        },
        async getWishlist() {
            await this.$store.dispatch('getWishlist');
        }
    }
}
</script>

<style>
    .item {
        padding: 10px;
        border: 1px solid #ccc;
        cursor: pointer;
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-between;
    }
    .item:hover {
        color: #76B647;
    }
    .icon-trash {
        margin-right: 5px;
    }
    button {
        margin-top: 15px;
    }
</style>
