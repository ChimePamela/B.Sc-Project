<template>
    <div class="createCategory">
        <div v-if="modalActive" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button @click="closeModal" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Create new category</h4>
                    </div>
                    <div class="modal-body">
                        <input type="text" placeholder="Enter category name" v-model="form.name">
                    </div>
                    <div class="modal-footer">
                        <button @click="closeModal" type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button @click="createCategory" type="button" class="btn btn-primary">Proceed</button>
                    </div>
                </div>
            </div>
        </div>
        <button @click="modalActive = true" class="btn btn-default">Add Category</button>
    </div>
</template>

<script>
export default {
    name: 'CreateCategory',
    data() {
        return {
            modalActive: false,
            form: {
                name: ''
            }
        }
    },
    methods: {
        closeModal() {
            this.modalActive = false
        },
        async createCategory() {
            await this.$store.dispatch('createCategory', this.form);
            this.closeModal()
            this.$notify({
                group: 'notif',
                title: 'Action successful',
                text: 'Category added successfully',
            });
            this.$store.dispatch('getCategories')
        }
    }
}
</script>

<style>
    .createCategory {
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
