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
    host: "http://ethan5420.synology.me:52000/UserInfo/EmpolyeeInfo?UID=2100722",
    port: 52000,
    // proxy: {
    //   "/ethan5420": {
    //     target: "http://ethan5420.synology.me:52000",
    //     changeOrigin: true
    //   }
    // }
  }

}

