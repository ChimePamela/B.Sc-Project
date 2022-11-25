<template>
    <div class="r-login row align-items-center">
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 p-5 mx-auto p-3" style="margin-bottom: 2rem">
            <form v-if="showLogin" @submit.prevent="login">
                <h4>Already have an account?</h4>
                <fieldset>
                    <div class="form-group">
                        <input v-model="loginForm.email" type="email" name="email" class="form-control" placeholder="Email Address*">
                    </div>
                    <div class="form-group">
                        <input v-model="loginForm.password" type="password" name="password" class="form-control" placeholder="Password*">
                    </div>
                </fieldset>
                <div class="action">
                    <button :disabled="loading" type="submit" class="tg-btn tg-active">Submit</button>
                    <a @click="showLogin = false" href="javascript:void(0);">Don't have an account?</a>
                </div>
            </form>
            <form v-else @submit.prevent="createAccount">
                <h4>Create an account</h4>
                <fieldset>
                    <div class="form-group">
                        <input v-model="form.name" type="text" name="full-name" class="form-control" placeholder="Full Name*">
                    </div>
                    <div class="form-group">
                        <input v-model="form.email" type="email" name="email" class="form-control" placeholder="Email Address*">
                    </div>
                    <div class="form-group">
                        <input v-model="form.password" type="password" name="password" class="form-control" placeholder="Password*">
                    </div>
                </fieldset>
                <div class="action">
                    <button :disabled="loading" type="submit" class="tg-btn tg-active">Submit</button>
                    <a @click="showLogin = true" href="javascript:void(0);">Already have an account?</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Auth",
    data() {
        return {
            loading: false,
            form: {
                name: '',
                email: '',
                password: ''
            },
            loginForm: {
                email: '',
                password: ''
            },
            showLogin: false,
        }
    },
    methods: {
        async createAccount() {
            try {
                if (this.form.name && this.form.email && this.form.password) {
                    this.loading = true
                    await this.$store.dispatch('register', this.form);
                }
            } catch (e) {
                const msg = this.getErrorMessage(e.response.data.errors);
                this.$notify({
                    group: 'errors',
                    title: 'Registration Failed',
                    text: msg,
                });
            } finally {
                this.loading = false
            }
        },
        getErrorMessage(e) {
            if (e.email) {
                return e.email[0]
            }
            if (e.name) {
                return e.name[0]
            }
            return 'An error occurred'
        },
        async login() {
            try {
                if (this.loginForm.email && this.loginForm.password) {
                    await axios.get('/sanctum/csrf-cookie');
                    const result = await this.$store.dispatch('login', this.loginForm)
                    console.log(result)
                }
            } catch (e) {
                const msg = this.getErrorMessage(e.response.data.errors);
                this.$notify({
                    group: 'errors',
                    title: 'Login Failed',
                    text: msg,
                });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.r-login {
    display: flex;
    justify-content: center;
    padding: 10rem;

    form {
        fieldset {
            padding: 2rem;
            border-radius: 5px;
        }
    }
    .tg-btn {
        margin-top: 2rem;
    }
    .action {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
}
</style>
