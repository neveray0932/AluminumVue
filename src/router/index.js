import Vue from "vue";
import VueRouter from "vue-router";
import customer from "../components/customer.vue";
import costclc from "../components/costclc.vue";
import setting from "../components/setting.vue";
import customertable from "../components/customerTable.vue";
import frametable from "../components/frameTable.vue";
import frame from "../components/frame.vue";
import door from "../components/door.vue";
import threshold from "../components/threshold.vue";
import otherpd from "../components/otherpd.vue";
import quotation from "../components/quotation.vue";
import custedit from "../components/custEdit.vue";
import test from "../components/test.vue";
import API from "../views/API.vue";
import i18n from "../components/i18n.vue";

Vue.use(VueRouter);

// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch((err) => err);
// };

const routes = [{
        path: "/customer",
        name: "customer",
        component: customer,
    },
    {
        path: "/custedit/:id",
        name: "custedit",
        component: custedit,
    },
    {
        path: "/material",
        name: "material",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../components/material.vue"),
    },
    {
        path: "/costclc",
        name: "costclc",
        component: costclc,
    },
    {
        path: "/setting",
        name: "setting",
        component: setting,
    },
    {
        path: "/customertable",
        name: "customertable",
        component: customertable,
    },
    {
        path: "/frame",
        name: "frame",
        component: frame,
    },
    {
        path: "/door",
        name: "door",
        component: door,
    },
    {
        path: "/threshold",
        name: "threshold",
        component: threshold,
    },
    {
        path: "/otherpd",
        name: "otherpd",
        component: otherpd,
    },
    {
        path: "/quotation",
        name: "quotation",
        component: quotation,
    },
    {
        path: "/frametable",
        name: "frametable",
        component: frametable,
    },
    {
        path: "/test",
        name: "test",
        component: test,
    },
    {
        path: "/api",
        name: "API",
        component: API,
    },
    {
        path: "/i18n",
        name: "i18n",
        component: i18n,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;