import api from "../../api/imgur";
import { router } from "../../main";


const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    //rootState gives the ability to reach into any other modules and access state
    async fetchImages({ rootState, commit }){
        const token = rootState.auth.token;
        const response = await api.fetchImages(token);
        commit("setImages", response.data.data);
    },
    async uploadImages({ rootState }, images){
        //get the access token
        const token = rootState.auth.token;
        //call api module to upload to imgur
        await api.uploadImages(images, token);
        //redirect the user to imageList
        router.push("/")
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
