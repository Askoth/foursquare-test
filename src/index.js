import Vue from 'vue';
import Vuex from 'vuex';
import store from './store/index.js';
import main from './main.vue'

Vue.use(Vuex);

const app = new Vue({
    store: new Vuex.Store(store),
    render(h) {
        return h(main)
    }
});

app.$mount('#app');
