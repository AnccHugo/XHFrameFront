/** 
 * @name globalConfig
 * @description 全局变量配置文件
*/

let globalConfig = {
    isRelease: false,                       // 是否为正式上线应用
    siteTitle: '小何的前端自定义框架',       // 站点标题
    localTestApi: 'http://localhost:1227',  // 本地调试API
    releaseApi: '',                         // 正式线上API
    apiToken: '',                           // API的口令 
    routes: {
        pageDir: '/XHFrameFront/page',
        routes: [{
            path: '/home',
            url: '/Home/home.html',
        }, {
            path: '/about',
            url: '/About/about.html',
        }]
    }
};

globalConfig.apiDomain = globalConfig.isRelease ? globalConfig.localTestApi : globalConfig.releaseApi;  // 默认API域名


















export default globalConfig;