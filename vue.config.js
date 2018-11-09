/*
 * @Author: Answer.Jiang 
 * @Filename: vue config
 * @Date: 2018-11-09 09:56:12 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-11-09 15:25:48
 */
module.exports = {
    baseUrl: '/', // 根路径
    outputDir: 'dist', // 输出目录
    assetsDir: 'assets', // 静态资源目录
    lintOnSave: false, // 是否开启eslint检测
    // 开发坏境服务
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false, // 热模块刷新
        proxy: {
            // 跨域配置
            '/bilibili': {
                target: "https://bangumi.bilibili.com",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/bilibili': '' // 将''替换target
                }
            }
        }
    }
};
