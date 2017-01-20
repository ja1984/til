var OpenGraph = require('facebook-open-graph')

export const getOpenGraphData = (linkUrl) => {
  return new Promise(function (resolve) {
    og(linkUrl, function (err, meta) {
      resolve(meta);
    });
  });
};
