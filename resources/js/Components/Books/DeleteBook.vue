<template>
    <div class="deleteBook">
        <div v-if="modalActive" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button @click="closeModal" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Delete Book?</h4>
                    </div>
                    <div class="modal-body">
                        You are about to delete {{ book.title }}
                    </div>
                    <div class="modal-footer">
                        <button @click="closeModal" type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button @click="deleteBook" type="button" class="btn btn-primary">Proceed</button>
                    </div>
                </div>
            </div>
        </div>
        <i @click="modalActive = true" class="icon-trash"></i>
    </div>
</template>

<script>
export default {
    name: 'DeleteBook',
    props: {
        book: Object
    },
    data() {
        return {
            modalActive: false
        }
    },
    methods: {
        closeModal() {
            this.modalActive = false;
        },
        async deleteBook() {
            await this.$store.dispatch('deleteBook', { id: this.book.id })
            this.closeModal()
            this.$notify({
                group: 'notif',
                title: 'Action successful',
                text: 'Book deleted successfully',
            });
            await this.$store.dispatch('getAllBooks')
        }
    }
}
</script>

<style>
    .deleteBook {
        display: inline-block;
        margin-left: 1rem;
    }
    .modal-dialog {
        transform: translate(0,100%)
    }
    .modal {
        display: block;
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4);
    }
</style>
