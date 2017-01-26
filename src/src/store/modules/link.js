import { getOpenGraphData } from '../../api/links';

const state = [];

const getters = {
  links: state => state.links
};

const actions = {
  addLink: ({ commit }, linkUrl) => {
    getOpenGraphData(linkUrl).then(function (response) {
      commit('addLink', response.body);
    });
  }
};

const mutations = {
  addLink (state, link) {
    state.push(link);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
