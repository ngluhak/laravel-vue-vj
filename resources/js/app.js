require("./bootstrap");

import router from "./routes";
import VueRouter from "vue-router";
import Vue from "vue";
import Index from "./index";

window.Vue = require("vue").default;

//Vue.component(
// "example-component",
//require("./components/ExampleComponent.vue").default
//);

//Vue.component("example2", require("./components/example2.vue").default);
//VueRouter.arguments(VueRouter);

Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router: router, //ili samo router bez ičeg
    components: {
        index: Index
    }
});
