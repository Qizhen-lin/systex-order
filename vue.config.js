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
    port: 52000
  }
}