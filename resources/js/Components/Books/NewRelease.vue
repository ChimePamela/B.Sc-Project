<template>
    <section class="tg-sectionspace tg-haslayout">
        <div class="container">
            <div class="row">
                <div class="tg-newrelease">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="tg-sectionhead">
                            <h2>
                                <span>Taste The New Spice</span>New Release
                                Books
                            </h2>
                        </div>
                        <div class="tg-description">
                            <p>
                                Here's an extensive list of all the newly added
                                books in our collection, in different
                                categories.
                            </p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="row">
                            <div class="tg-newreleasebooks">
                                <div
                                    v-for="(book, i) in firstSix"
                                    :key="i"
                                    class="col-xs-4 col-sm-4 col-md-6 col-lg-4"
                                >
                                    <Book :maxChar="15" :book="book" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import Book from "./Book.vue";

export default {
    name: "NewRelease",
    components: { Book },
    computed: {
        ...mapState({
            latest: state => state.books.latest
        }),
        firstSix() {
            return this.latest.slice(0, 3)
        }
    },
    async mounted() {
        await this.$store.dispatch('getLatest')
    }
};
</script>
