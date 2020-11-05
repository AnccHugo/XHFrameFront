import globalConfig from './config/globalConfig.js';
import Router from './modules/Router.js';



window.onload = function () {
    document.title = globalConfig.siteTitle;

    const router = new Router(globalConfig.routes);
    router.go(-1);
};