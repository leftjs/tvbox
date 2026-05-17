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
    lazy:'js:try{var h=request(input);var i=h.indexOf("surrit");if(i>-1){var s=h.substring(i-200,i);var u=s.match(/[|]([a-f0-9]+)[|]([a-f0-9]+)[|]([a-f0-9]+)[|]([a-f0-9]+)[|]([a-f0-9]+)$/);if(u){input="https://surrit.com/"+u[5]+"-"+u[4]+"-"+u[3]+"-"+u[2]+"-"+u[1]+"/playlist.m3u8";}}else{var a=h.match(/https?:[^"\\s>]+.m3u8[^"\\s>]*/);if(a){input=a[0];}}}catch(e){}',
    一级:'js:try{var h=request(input);var r=[];var parts=h.split("thumbnail group");for(var i=1;i<parts.length;i++){var c=parts[i];var href=c.match(/href="([^"]+)"/);var title=c.match(/text-secondary[^>]*>([^<]+)</);var img=c.match(/<img[^>]+src="([^"]+)"/);var dur=c.match(/bottom-1 right-1[^>]*>([^<]+)</);if(href&&title){r.push({title:title[1].trim(),img:img?img[1]:"",desc:dur?dur[1]:"",href:href[1].replace("https://missav.ws","")});}if(r.length>=20) break;}if(r.length>0){return JSON.stringify(r);}}catch(e){}return JSON.stringify([{title:"parse error",href:""}]);',
    二级:'*',
    searchable:0,
    quickSearch:0,
    filterable:0,
}
