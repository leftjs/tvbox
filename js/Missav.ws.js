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
    lazy:'js:\n' +
        'try{\n' +
        '  let html=request(input);\n' +
        '  // Extract surrit m3u8 UUID from obfuscated eval\n' +
        '  let u=html.match(/\\|([a-f0-9]+)\\|([a-f0-9]+)\\|([a-f0-9]+)\\|([a-f0-9]+)\\|([a-f0-9]+)\\|com\\|surrit/);\n' +
        '  if(u){\n' +
        '    input="https://surrit.com/"+u[5]+"-"+u[4]+"-"+u[3]+"-"+u[2]+"-"+u[1]+"/playlist.m3u8";\n' +
        '  } else {\n' +
        '    // Fallback: any m3u8 in page\n' +
        '    let a=html.match(/https?:\\/\\/[^"\'\\s>]+\\.m3u8[^"\'\\s>]*/);\n' +
        '    if(a) input=a[0];\n' +
        '  }\n' +
        '}catch(e){}',
    一级:'div.thumbnail.group;div.my-2 a&&Text;img&&src;span.absolute.bottom-1.right-1&&Text;a&&href',
    二级:'*',
    searchable:0,
    quickSearch:0,
    filterable:0,
    // 翻页仅第一页，避免自动加载过多
}
