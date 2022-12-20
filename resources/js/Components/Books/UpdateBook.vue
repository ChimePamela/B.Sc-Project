<template>
    <div class="updateBook">
        <div v-if="modalActive" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button @click="closeModal" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 v-if="isCreate" class="modal-title">Add new book</h4>
                        <h4 v-else class="modal-title">Update {{ book.title }}</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="">Book Title:</label>
                            <input v-model="form.title" type="text" placeholder="Book Title">
                        </div>
                        <div class="form-group">
                            <label for="">Book Image:</label>
                            <input v-model="form.image_url" type="url" placeholder="Book Image">
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group authors-list">
                                    <select @change="setAuthorId">
                                        <option disabled selected>Book Author</option>
                                        <option v-for="({ name, id }, i) in authors" :value="id" :key="i" value="">{{ name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group authors-list">
                                    <select @change="setCategoryId">
                                        <option disabled selected>Book Category</option>
                                        <option v-for="({ name, id }, i) in categories" :value="id" :key="i" value="">{{ name }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">Book Description: </label>
                            <textarea v-model="form.description" placeholder="Book description" cols="30" rows="20"></textarea>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="checkbox-label">
                                        <input v-model="form.is_featured" type="checkbox" class="checkbox-input" checked>
                                        <span>Feature Book</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="checkbox-label">
                                        <input v-model="form.is_top_rated" type="checkbox" class="checkbox-input" checked>
                                        <span>Top Rated Book?</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="closeModal" type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button v-if="isCreate" @click="addBook" type="button" class="btn btn-primary">Add Book</button>
                        <button v-else @click="updateBook" type="button" class="btn btn-primary">Update Book</button>
                    </div>
                </div>
            </div>
        </div>
        <button v-if="isCreate" @click="modalActive = true" class="btn btn-default">Add New Book</button>
        <i v-else @click="modalActive = true" class="icon-pencil"></i>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'UpdateBook',
    props: {
        book: Object,
        isCreate: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            modalActive: false,
            form: {
                title: '',
                image_url: '',
                description: '',
                category_id: '',
                author_id: '',
                is_featured: false,
                is_top_rated: false,
            }
        }
    },
    mounted() {
        if (this.book) {
            this.setDefault()
        }
    },
    computed: {
        ...mapState({
           authors: state => state.authors,
           categories: state => state.categories,
        })
    },
    methods: {
        setDefault() {
            this.form.title = this.book.title;
            this.form.image_url = this.book.image_url;
            this.form.description = this.book.description;
            this.form.is_featured = this.book.is_featured;
            this.form.is_top_rated = this.book.is_top_rated
        },
        closeModal() {
            this.modalActive = false;
        },
        setAuthorId(e) {
            this.form.author_id = Number(e.target.value)
        },
        setCategoryId(e) {
            this.form.category_id = Number(e.target.value)
        },
        async addBook() {
            this.form.is_featured = this.form.is_featured ? 1 : 0;
            this.form.is_top_rated = this.form.is_top_rated ? 1 : 0;

            await this.$store.dispatch('addBook', this.form)
            this.closeModal()
            this.$notify({
                group: 'notif',
                title: 'Action successful',
                text: 'Book added successfully',
            });
            await this.$store.dispatch('getAllBooks')
        },
        async updateBook() {
            this.form.is_featured = this.form.is_featured ? 1 : 0;
            this.form.is_top_rated = this.form.is_top_rated ? 1 : 0;

            await this.$store.dispatch('updateBook', { id: this.book.id, form: this.form })
            this.closeModal()
            this.$notify({
                group: 'notif',
                title: 'Action successful',
                text: 'Book updated successfully',
            });
            await this.$store.dispatch('getAllBooks')
        }
    }
}
</script>

<style>
    .updateBook {
        display: inline-block;
    }
    .modal-dialog {
        transform: translate(0,2%)
    }
    .modal-body {
        display: flex;
        flex-direction: column;
    }
    .checkbox-label {
        display: inline-flex;
    }
    input.checkbox-input {
        width: 19px;
        margin-right: 1rem;
    }
    textarea {
        margin-top: 1rem;
        resize: none;
        width: 100%;
        height: 11rem;
    }
    input {
        width: 100%;
    }
    .modal {
        display: block;
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4);
    }
</style>
