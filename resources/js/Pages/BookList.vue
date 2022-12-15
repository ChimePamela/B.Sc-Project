<template>
    <section class="tg-sectionspace tg-haslayout">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="tg-sectionhead row">
                        <div class="col-md-6">
                            <form class="tg-formtheme tg-formsearch">
                                <fieldset>
                                    <input
                                        v-model="searchQuery"
                                        type="search"
                                        name="search"
                                        class="typeahead form-control"
                                        placeholder="Search by title, author, keyword"
                                    />
                                    <button type="submit">
                                        <i class="icon-magnifier"></i>
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                        <div>
                            <select @change="handleCategoryChange">
                                <option disabled selected
                                    >Select Category</option
                                >
                                <option>All</option>
                                <option
                                    v-for="(category, index) in categories"
                                    :key="index"
                                >
                                    {{ category.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div
                    v-if="all.length"
                    class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                >
                    <div
                        class="col-md-3 col-lg-3"
                        v-for="(item, index) in filterdData"
                        :key="index"
                    >
                        <Book :book="item" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from "vuex";
import Book from "../Components/Books/Book.vue";

export default {
    components: { Book },
    name: "BookList",
    data() {
        return {
            filterdData: [],
            searchQuery: "",
            selectedCategory: ''
        };
    },
    computed: {
        ...mapState({
            all: state => state.books.all,
            categories: state => state.categories
        }),
        query() {
            return this.$route.query;
        }
    },
    watch: {
        query(value) {
            this.handleFilterChange()
        }
    },
    async mounted() {
        await this.$store.dispatch("getAllBooks");
        this.filterdData = this.all;

        this.handleFilterChange()
    },
    methods: {
        handleCategoryChange({ target: { value } }) {
            if (value === 'All') {
                this.filterdData = this.all
            } else {
                this.$route.query.category = value
                this.handleFilterChange()
            }
        },
        handleFilterChange() {
            const { author, category } = this.query;
            if (author) {
                this.searchQuery = author;
                this.filterBooks(author);
            }
            if (category) {
                this.filterByCategory(category);
            }
        },
        filterBooks(query) {
            this.filterdData = this.all;
            this.filterdData = this.all.filter(
                item => item.author.name.toLowerCase() === query.toLowerCase()
            );
        },
        filterByCategory(value) {
            this.filterdData = this.all;
            this.filterdData = this.all.filter(
                item => item.category.name.toLowerCase() === value.toLowerCase()
            );
        }
    }
};
</script>
