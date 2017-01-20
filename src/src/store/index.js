import Vue from 'vue';
import Vuex from 'vuex';
import links from './modules/link';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    links
  }
});
