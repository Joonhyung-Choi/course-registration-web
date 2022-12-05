const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://mayouniversity.shop:3333",
      changeOrigin: true,
    })
  );
};
