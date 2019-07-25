const router = require('koa-router')({
    prefix: '/uba'
});
const UBAController = require('../../controller/uba')

module.exports = app => {
    // 首页
    router.get('/home/base', UBAController.home.base);
    router.get('/home/efficiencyPromotion', UBAController.home.efficiencyPromotion);
    router.get('/home/roleDistribution', UBAController.home.roleDistribution);
    router.get('/home/ageDistribution', UBAController.home.ageDistribution);
    router.get('/home/onlineUserTendency', UBAController.home.onlineUserTendency);
    router.get('/home/topTenSearch', UBAController.home.topTenSearch);
    router.get('/home/topTenTransferBusiness', UBAController.home.topTenTransferBusiness);
    router.get('/home/topTenPage', UBAController.home.topTenPage);

    // 访问分析
    router.post('/access/hits', UBAController.access.hits);
    router.post('/access/uniqueVistor', UBAController.access.uniqueVistor);
    router.post('/access/pv', UBAController.access.pv);
    router.post('/access/topSearch', UBAController.access.topSearch);
    router.post('/access/standingTime', UBAController.access.standingTime);

    // 转化分析
    router.post('/conversion/apply', UBAController.conversion.apply);
    router.post('/conversion/applyChart', UBAController.conversion.applyChart);
    router.post('/conversion/completeChart', UBAController.conversion.completeChart);
    router.post('/conversion/complete', UBAController.conversion.complete);
   
    //其它业务
    router.post('/uba/business/hitogram', UBAController.business.hitogram);
    router.post('/uba/business/tabular', UBAController.business.tabular);

    // 筛选接口
    router.get('/param/role', UBAController.param.role);
    router.get('/param/org', UBAController.param.org);
    router.get('/param/channel', UBAController.param.channel);
    router.get('/param/age', UBAController.param.age);
    router.get('/param/changeBusiness', UBAController.param.changeBusiness);

    app.use(router.routes());
}