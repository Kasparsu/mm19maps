import Vue from 'vue/dist/vue.common.js';
import 'bulma';
import './main.scss';

import App from "./components/App";

Vue.component('app', App);

let app = new Vue({
    el: '#app'
})

