module.exports = {
    // publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
    // outputDir: "dist",
    // lintOnSave: true,
    // runtimeCompiler: false,
    // productionSourceMap: false,
    devServer: {
        port: 8080,
        public: "192.168.0.66:8080",
        host: "0.0.0.0",

        https: false,
        hotOnly: false,
        disableHostCheck: true,

        // 自动启动浏览器

        open: false,
        // proxy: {
        //     "/api": {
        //         target: "http://192.168.0.66:5000/aluminum", //设置调用的接口域名和端口
        //         changeOrigin: true, //是否跨域
        //         ws: true,
        //         pathRewrite: {
        //             "^/api": "",
        //         },
        //     },
        // },
    },
};