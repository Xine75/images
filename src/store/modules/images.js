import api from "../../api/imgur";


const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    //rootState gives the ability to reach into any other modules and access state
    async fetchImages({ rootState }){
        const token = rootState.auth.token;
        const response = await api.fetchImages(token);
        console.log(response);
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default  {
    state,
    getters,
    actions,
    mutations
};
