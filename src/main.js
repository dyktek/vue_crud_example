// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(vueResource);

Vue.http.interceptors.push((request, next) => {

    if(localStorage.getItem('token')) {
        request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }

    next(response => {

        if(response.status === 400 || response.status === 401 || response.status === 403) {
            router.push({path: '/login'});
        }

    })
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
