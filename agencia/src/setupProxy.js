const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://10.111.10.154:2000'   ,
      changeOrigin: true,
      pathRewrite: {
        '/api': '' // remove base path
      }
    })
  );
};