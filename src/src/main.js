// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store';
import App from './App';
import VueResource from 'vue-resource';

Vue.use(VueResource);

new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App }
});
