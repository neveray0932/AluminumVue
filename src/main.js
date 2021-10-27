import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import i18n from "./lang";

// import Print from "vue-print-nb";
import Print from "./print";

Vue.use(Print);
Vue.config.productionTip = false;
// Vue.use(axios);

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount("#app");