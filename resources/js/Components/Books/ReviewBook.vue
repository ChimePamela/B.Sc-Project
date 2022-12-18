<template>
    <div>
        <div v-if="modalActive" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Write a review for <strong>{{ book.title }}</strong></h4>
                    </div>
                    <div class="modal-body">
                        <StarRating :star-size="30" v-model="form.rating" />
                        <textarea v-model="form.comment"></textarea>
                    </div>
                    <div class="modal-footer">
                        <button @click="modalActive = false" type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button @click="submitReview" type="button" class="btn btn-primary">Submit review</button>
                    </div>
                </div>
            </div>
        </div>
        <a @click="showModal" class="tg-btn tg-btnstyletwo" href="javascript:void(0);">
            <i class="fa fa-book"></i>
            <em>Review Book</em>
        </a>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    name: "ReviewBook",
    components: {
        StarRating
    },
    props: {
        book: Object
    },
    data() {
        return {
            modalActive: false,
            form: {
                rating: 0,
                comment: ''
            }
        }
    },
    computed: {
        canReview() {
            return this.form.rating && this.form.comment
        }
    },
    methods: {
        showModal() {
            this.modalActive = true
        },
        async submitReview() {
            if (!this.canReview) {
                this.$notify({
                    group: 'notif',
                    type: 'error',
                    title: 'Action failed',
                    text: 'Fill all required fields',
                });
                return
            }
            const payload = {
                ...this.form,
                id: this.book.id
            }
            const response = await this.$store.dispatch('reviewBook', payload)
            if (response.error) {
                this.$notify({
                    group: 'notif',
                    type: 'error',
                    title: 'Action failed',
                    text: 'Book review failed',
                });
                return;
            }
            this.$notify({
                group: 'notif',
                title: 'Action successful',
                text: 'Book review was successful',
            });
            this.form.rating = 0;
            this.form.comment = '';
            this.modalActive = false;
        }
    }
};
</script>

<style>
    .modal {
        display: block;
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4);
    }
    .modal-dialog {
        transform: translate(0,100%)
    }
    .review-btn {
        display: flex;
    }
    textarea {
        resize: none;
        width: 100%;
        height: 11rem;
    }
</style>

