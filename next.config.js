const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  env: {
    BACKEND_URL: "http://localhost:8000",
    BACKEND_WS_URL: "ws://localhost:8001/ws",
  },
  reactStrictMode: true,
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    sw: "service-worker.js",
    runtimeCaching,
  },
});
