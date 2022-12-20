<template>
    <section class="tg-sectionspace tg-haslayout">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="tg-sectionhead manageBooks__head">
                        <h2>Manage Books</h2>
                        <div class="header-actions">
                            <create-author />
                            <create-category />
                            <create-book is-create />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-lg-4 mt-3" v-for="(book, index) in all" :key="index">
                    <div class="manageBooks__item">
                        <div class="">
                            <img width="40" :src="book.image_url" alt="">
                        </div>
                        <div class="manageBooks__title">
                            <div>
                                {{ book.title }}
                            </div>
                            <div class="manageBooks__actions">
                                <update-book :book="book" />
                                <delete-book :book="book" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import CreateAuthor from '../Components/Books/CreateAuthor.vue'
import CreateCategory from '../Components/Books/CreateCategory.vue'
import DeleteBook from '../Components/Books/DeleteBook.vue'
import UpdateBook from '../Components/Books/UpdateBook.vue'

export default {
    name: 'ManageBooks',
    components: {
        DeleteBook,
        UpdateBook,
        CreateBook: UpdateBook,
        CreateCategory,
        CreateAuthor
    },
    computed: {
        ...mapState({
            all: state => state.books.all,
        })
    },
    async mounted() {
        await this.getAllBooks()
        this.$store.dispatch('getAuthors')
        this.$store.dispatch('getCategories')
    },
    methods: {
        async getAllBooks() {
            await this.$store.dispatch("getAllBooks");
        },
        confirmDelete() {

        }
    }
}
</script>

<style>
    .manageBooks__head {
        display: flex;
        justify-content: space-between;
    }
    .manageBooks__item {
        display: flex;
        margin-top: 2rem;
    }
    .manageBooks__title {
        margin-left: 1rem;
    }
    .manageBooks__actions i {
        cursor: pointer;
    }
    i:hover {
        font-weight: 700;
    }
    .icon-pencil {
        margin-left: 1rem;
    }
    .header-actions {
        display: flex;
    }
</style>
