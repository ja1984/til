import Vue from 'vue';

export const getOpenGraphData = (linkUrl) => {
  return Vue.http.post('/api/get', {
    url: linkUrl
  });
};
