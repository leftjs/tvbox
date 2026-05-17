var rule = {
    title:'Missav.ws',
    host:'https://missav.ws',
    url:'/dmfyclass?page=fypage',
    class_name:'今日热门&本周热门&本月热门',
    class_url:'292/today-hot&169/weekly-hot&263/monthly-hot',
    headers:{
        'User-Agent':'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36',
        'Referer':'https://missav.ws/'
    },
    timeout:15000,
    limit:1,
    play_parse:true,
    一级:'.thumbnail.group;img&&alt;img&&data-src;span.absolute.bottom-1.right-1&&Text;a&&href',
    二级:'*',
    searchable:0,
    quickSearch:0,
    filterable:0,
}
