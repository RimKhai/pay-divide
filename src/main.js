import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'
import Main from "./views/Main.vue"
import AddProductsView from "./views/AddProductsView.vue"
import ResultsView from "./views/ResultsView.vue"
import { BootstrapVue3 } from 'bootstrap-vue-3'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"

const pinia = createPinia()

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        name: "Main",
        path: "/",
        component: Main,
      },
      {
        name: "AddProductsView",
        path: "/products",
        component: AddProductsView
      },
      {
        name: "ResultsView",
        path: "/results",
        component: ResultsView
      }

    ],
  });

createApp(App).use(router).use(pinia).use(BootstrapVue3).mount('#app')
