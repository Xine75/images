
import api from "../../api/imgur"


const state = {
    token: null
};

//returns a boolean: true if there is a token, false if token is null. that is the function of the "!!"
const getters = {
    isLoggedIn: (state) => !!state.token

};


const actions = {
    login: () => {
        api.login();
    },
    //"commit" key word calls a mutation
    //passing "null" to set token to null
    logout: ({ commit })=> {
        commit("setToken", null)
    },

};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default  {
    state,
    getters,
    actions,
    mutations
}