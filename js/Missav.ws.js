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
        '  // 1) surrit.com direct m3u8\n' +
        '  let m=html.match(/https?:\\/\\/surrit\\.com\\/[a-f0-9-]+\\/playlist\\.m3u8/);\n' +
        '  if(m){input=m[0];\n' +
        '  // 2) surrit.com in obfuscated eval\n' +
        '  }else if(html.indexOf("surrit")>-1){\n' +
        '    let u=html.match(/https?:\\\\?\\/\\\\?\\/surrit\\\\?\\.\\\\?com\\\\?\\/[a-f0-9\\\\?-]+\\\\?\\/playlist\\\\?\\.\\\\?m3u8/);\n' +
        '    if(u){input=u[0].replace(/\\\\\//g,"/").replace(/\\\\?/g,"");}\n' +
        '  // 3) any m3u8 on page\n' +
        '  }else{\n' +
        '    let a=html.match(/https?:\\/\\/[^"\'\\s>]+\\.m3u8[^"\'\\s>]*/);\n' +
        '    if(a){input=a[0];}\n' +
        '  }\n' +
        '}catch(e){}',
    一级:'js:\n' +
        'try{\n' +
        '  let html=request(input);\n' +
        '  let items=[];\n' +
        '  let seen={};\n' +
        '  // Match video links: href="/dvd-id" with text containing DVD ID\n' +
        '  let re=/<a[^>]*href="\\/([a-z0-9]{2,}(?:-[a-z0-9]+)+)[^>]*>([^<]{4,})<\\/a>/g;\n' +
        '  let m;\n' +
        '  while((m=re.exec(html))!==null){\n' +
        '    let id=m[1];\n' +
        '    if(id.indexOf("dm")===0||id==="actresses"||id==="genres"||id==="makers"||id==="playlists"||id==="history"||id==="saved") continue;\n' +
        '    if(seen[id]) continue;\n' +
        '    seen[id]=true;\n' +
        '    items.push({\n' +
        '      title: m[2].trim(),\n' +
        '      img: "",\n' +
        '      desc: "",\n' +
        '      href: "/"+id\n' +
        '    });\n' +
        '    if(items.length>=20) break;\n' +
        '  }\n' +
        '  if(items.length>0) return JSON.stringify(items);\n' +
        '}catch(e){}\n' +
        '// fallback: standard CSS selector\n' +
        'let d=JSON.parse(\'[{"title":"error","href":""}]\');\n' +
        'return JSON.stringify(d);',
    二级:'*',
    searchable:0,
    quickSearch:0,
    filterable:0,
}
