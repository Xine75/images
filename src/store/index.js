import Vuex from "vuex";
import * as Vue from "vue/dist/vue";
import auth from "./modules/auth"

Vue.use(Vuex);

export default new Vuex.Store({
        modules: {
            auth
        }

});
