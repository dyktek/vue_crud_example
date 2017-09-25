<template>
    <div id="app" class="container">
        <nav v-if="isLogged" class="navbar navbar-toggleable-md navbar-light bg-faded">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">CMS</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/categories" class="nav-link">Kategorie</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/articles" class="nav-link">Artykuły</router-link>
                    </li>
                </ul>
            </div>

            <button v-on:click="logout" class="btn btn-outline-success my-2 my-sm-0">Wyloguj</button>

        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'app',
        computed: mapGetters([
            'isLogged'
        ]),
        methods: {
            logout() {
                this.$store.dispatch('logout');
            }
        }
    }
</script>

<style>
</style>
