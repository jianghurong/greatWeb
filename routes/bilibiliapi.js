module.exports = 
    // 首页默认搜索关键词
    router.get('/serach/default', async (ctx, next) => {
        // https://api.bilibili.com/x/web-interface/search/default
    })
    // 推荐房间 https://api.live.bilibili.com/room/v1/RoomRecommend/biliIndexRecList
    // 番剧列表 https://bangumi.bilibili.com/api/timeline_v2_global
    // 搜索热词 https://s.search.bilibili.com/main/hotword
    // 搜索联想 https://s.search.bilibili.com/main/suggest?jsoncallback=jqueryCallback_bili_9225094757734555&func=suggest&suggest_type=accurate&sub_type=tag&main_ver=v1&highlight=&userid=0&bangumi_acc_num=1&special_acc_num=1&topic_acc_num=1&upuser_acc_num=3&tag_num=10&special_num=10&bangumi_num=10&upuser_num=3&term=%E5%BC%80%E5%8F%A3%E8%B7%AA&rnd=0.005337793623316989&_=1541646219424
    // 搜索联想（简化）https://s.search.bilibili.com/main/suggest?term=%E5%BC%80%E5%8F%A3%E8%B7%AA
    // 搜索详情 https://api.bilibili.com/x/web-interface/view/detail?jsonp=jsonp&aid=35198390