import Vue from 'vue'
import Router from 'vue-router'
import Categories from '@/components/Categories'
import AddCategory from '@/components/AddCategory'
import EditCategory from '@/components/EditCategory'
import Articles from '@/components/Articles'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/categories',
            name: 'categories',
            component: Categories
        },
        {
            path: '/categories/add',
            name: 'categoriesAdd',
            component: AddCategory
        },
        {
            path: '/categories/:categoryId/edit',
            name: 'categoriesEdit',
            component: EditCategory
        },
        {
            path: '/articles',
            name: 'articles',
            component: Articles
        }
    ]
})
