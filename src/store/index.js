import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    // strict: true,
    state: {
        contents: [],
        spec: [],
    },
    mutations: {
        setContents(state, data) {
            state.contents = data;
        },
        addContents(state, data) {
            state.contents.push(data);
        },
        deleteContents(state, data) {
            state.contents.splice(data, 1);
        },
        updateContents(state, data) {
            // state.contents.splice(data, 1);
            let index = state.contents.indexOf(data);
            console.log(index);
            console.log(state);
            console.log(data);
            state.contents[index] = data;
        },
        setSpec(state, data) {
            state.spec = data;
        },
        addSpec(state, data) {
            state.spec.push(data);
        },
    },
    actions: {
        DATA_READ: (context) => {
            return Axios.get(
                "http://192.168.0.66:8777/aluminum/public/api/customer"
                // "http://192.168.0.223:5000/aluminum/public/api/customer"
            ).then((res) => {
                var re = [];
                // console.log(res.data);
                res.data.forEach((element, index) => {
                    console.log(element);
                    re.push({
                        id: index + 1,
                        customerid: element.customerid,
                        customer: element.customer,
                        address: element.address,
                        contact: element.contact,
                        fax: element.fax,
                        tel: element.tel,
                        taxnumber: element.taxnumber,
                    });
                    // console.log(re);
                });
                context.commit("setContents", re);
            });
        },
        SPEC_READ: (context) => {
            return Axios.get(
                "http://192.168.0.66:8777/aluminum/public/api/specname"
                // "http://192.168.0.223:5000/aluminum/public/api/specname"
            ).then((res) => {
                // console.log(res);
                context.commit("setSpec", res.data);
            });
        },
        FIND_CUST_BYANY: (context, search) => {
            console.log(search);
            return Axios({
                url: `http://192.168.0.66:8777/aluminum/public/api/findcustomer/${search}`,
                method: "get",
                data: search,
            }).then((res) => {
                // console.log(res);
                var re = [];
                // console.log(res.data);
                res.data.forEach((element, index) => {
                    // console.log(element);
                    re.push({
                        id: index + 1,
                        customerid: element.customerid,
                        customer: element.customer,
                        address: element.address,
                        contact: element.contact,
                        fax: element.fax,
                        tel: element.tel,
                        taxnumber: element.taxnumber,
                    });
                    console.log(re);
                });
                context.commit("setContents", re);
            });
        },
    },
    modules: {},
});