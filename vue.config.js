const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@$", resolve("src"))
      .set("scss", resolve("src/scss"));
    config.entry.app = ["babel-polyfill", "./src/main.js"];
  },
  devServer: {
    host: "local.ethan5420.synology.me",
    // host: "http://ethan5420.synology.me:3030/api/Users/2100722",
    port: 52000,
    // proxy: {
    //   "/api": {
    //     target: "http://ethan5420.synology.me:3030/api",
    //     changeOrigin: true
    //   }
    // }
  }
}

