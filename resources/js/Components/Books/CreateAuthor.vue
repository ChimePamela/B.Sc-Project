<template>
    <div class="createAuthor">
        <div v-if="modalActive" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button @click="closeModal" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Add new Author</h4>
                    </div>
                    <div class="modal-body">
                        <input type="text" placeholder="Enter author's name" v-model="form.name">
                        <input type="text" placeholder="Author's photo url" v-model="form.photo_url">
                    </div>
                    <div class="modal-footer">
                        <button @click="closeModal" type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button @click="createAuthor" type="button" class="btn btn-primary">Proceed</button>
                    </div>
                </div>
            </div>
        </div>
        <button @click="modalActive = true" class="btn btn-default">Add Author</button>
    </div>
</template>

<script>
export default {
    name: 'CreateAuthor',
    data() {
        return {
            modalActive: false,
            form: {
                name: '',
                photo_url: ''
            }
        }
    },
    methods: {
        closeModal() {
            this.modalActive = false
        },
        async createAuthor() {
            await this.$store.dispatch('addAuthor', this.form);
            this.closeModal()
            this.$notify({
                group: 'notif',
                title: 'Action successful',
                text: 'Author added successfully',
            });
            this.$store.dispatch('getAuthors')
        }
    }
}
</script>

<style>
    .createAuthor {
        margin-right: 0.5rem;
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
