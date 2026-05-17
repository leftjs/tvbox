var rule = {
    title:'Missav.ws',
    host:'https://missav.ws',
    // 今日热门/本周热门/本月热门
    url:'/dmfyclass/fypage',
    class_name:'今日热门&本周热门&本月热门',
    class_url:'292/today-hot&169/weekly-hot&263/monthly-hot',
    headers:{
        'User-Agent':'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36'
    },
    timeout:10000,
    limit:5,
    play_parse:true,
    lazy:'js:let html=request(input);let m3u8=html.match(/https?:\\/\\/[^"\'\\s]+\\.m3u8[^"\'\\s]*/);if(m3u8){input=m3u8[0];}',
    // 注意: missav.ws 是纯客户端渲染 SPA，以下 CSS 选择器可能无效
    // 如果列表抓不到内容，需要用替代方案（见 js/drpy2 文档）
    一级:'.thumbnail.group;img&&alt;img&&data-src;span.absolute.bottom-1.left-1&&Text;a&&href',
    二级:'*',
    searchable:0,
    quickSearch:0,
    filterable:0,
}
