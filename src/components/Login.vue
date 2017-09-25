<template>
    <div class="form">
        <div class="form-group">
            <label for="email">E-mail</label>
            <input v-model="credential.email" class="form-control" type="email" id="email" name="email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input v-model="credential.password" class="form-control" type="password" id="password" name="password">
        </div>
        <div class="form-group">
            <button v-on:click="login" class="btn btn-primary">Zaloguj</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                credential: {
                    email:'',
                    password:''
                }
            }
        },
        methods: {
            login() {
                this.$store.dispatch('login', this.credential);
            }
        },
        created: function () {

        }
    }
</script>