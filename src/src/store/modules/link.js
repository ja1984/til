import { getOpenGraphData } from '../../api/links';

const state = [];

const getters = {
    links: state => state.links
};

const actions = {
    addLink: ({ commit }, linkUrl) => {
        getOpenGraphData(linkUrl).then(function (response) {
            console.log(response);
        });

    }
};

const mutations = {
    addLink(state, link) {
        console.log(link);
        state.push(link);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
