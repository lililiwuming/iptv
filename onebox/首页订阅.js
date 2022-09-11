#####iptv

####
###type
iptv
###分类
iptv
###数据
镇弟
##
远程$https://wds.ecsxs.com/223721.js
####
####
###type
iptv
###分类
iptv
###数据
央视
##
央视|🥨🍄,http://111.40.196.9/PLTV/88888888/224/3221225511/index.m3u8
央视|1台综合,http://111.40.196.25/PLTV/88888888/224/3221225548/index.m3u8
央视|1台综合,http://111.20.41.250/dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221225660/1.m3u8
央视|1台综合,http://111.40.196.9/PLTV/88888888/224/3221225755/index.m3u8
央视|1台综合,http://117.148.179.157/PLTV/88888888/224/3221231528/index.m3u8
央视|1台综合,http://117.148.179.157/PLTV/88888888/224/3221232791/index.m3u8
央视|2台财经,http://117.148.179.157/PLTV/88888888/224/3221232777/index.m3u8
央视|2台财经,http://117.148.179.157/PLTV/88888888/224/3221233238/index.m3u8
####
#####


#####普通站源

####
###type
web
###分类
普通站源
###标题
骚火影视
###图片
https://gitcode.net/egwang186/iptv/-/raw/master/onebox/saohuotv.png
###BaseURL
"https://saohuo.vip";
###首页地址
getVar("baseURL")+"/";
###分类地址
getVar("baseURL")+"/list/分类-翻页.html";
###搜索地址
getVar("baseURL")+"/search.php?searchword=关键字&searchtype=&page=翻页";
###rule
##首页规则
var 列表=getVar("源码").match(/<li>[\s]*?<div class="v_img"[\s\S]*?<\/li>/g);var 标题规则=".get(.v_title a).t()";var 地址规则=".get(.v_title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".get(div.v_note).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";
##筛选数据
var a="分类+电影=1+电视剧=2+动漫=4+喜剧片=6+爱情片=7+恐怖片=8+动作片=9+科幻片=10+大陆剧=20+TVB=21+韩剧=22+美剧=23+日剧=24";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页"+b;a+"\n"+b;
##分类规则
var 列表=getVar("源码").match(/<li>[\s]*?<div class="v_img"[\s\S]*?<\/li>/g);var 标题规则=".get(.v_title a).t()";var 地址规则=".get(.v_title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".get(div.v_note).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";
##选集规则
var 分类=e2Rex(getVar("源码"),".get(ul#play_link)").match(/<li[\s\S]*?\/li>/g);var 线路=e2Rex(getVar("源码"),".get(ul.from_list)").match(/<li[\s\S]*?\/li>/g);var 简介=e2Rex(getVar("源码"),".get(p.p_txt)");var 列表规则=".get(a)";var 标题规则=".get(li).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";
##搜索规则
var 源码=getVar("源码");var 列表=源码.match(/<li>[\s]*?<div class="v_img[\s\S]*?<\/li>/g);if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=URL;var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回刷新即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(.v_title a).t()";var 地址规则=".get(.v_title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".get(div.v_note).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE=""};
##搜索翻页
var b="";for(var i=1;i<50;i=i+1){b=b+"+第"+i+"页="+i;}
"翻页"+b;
##免嗅探规则
"web="+getVar("地址");
####

####
###type
web
###分类
普通站源
###标题
荣耀蓝光
###图片
https://gitcode.net/egwang186/iptv/-/raw/master/onebox/1920.png
###BaseURL
"https://1920.video";
###首页地址
getVar("baseURL")+"/";
###分类地址
getVar("baseURL")+"/index.php/vod/show/id/分类/page/翻页.html";
###搜索地址
getVar("baseURL")+"/search.php?searchword=关键字&searchtype=&page=翻页";
###rule
##首页规则
var 列表=e2Arr(getVar("源码"),".get(div.module-items a.module-item)");var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";
##筛选数据
var a="分类+电影=1+电视剧=2+动漫=4+纪录=5+蓝光=7+国产剧=301+港台剧=302+日韩剧=303+欧美剧=304+动作片=201+喜剧片=202+爱情片=203+科幻片=204+剧情片=205";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页"+b;a+"\n"+b;
##分类规则
var 列表=e2Arr(getVar("源码"),".get(div.module-items a.module-item)");var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";
##选集规则
var 分类=e2Arr(getVar("源码"),".get(div.module-play-list)");var 线路=e2Arr(getVar("源码"),".get(div.module-tab-items div.module-tab-item)");var 简介=e2Rex(getVar("源码"),".get(div.module-info-content).t()");var 列表规则=".get(a)";var 标题规则=".t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";
##搜索规则
var 列表=e2Arr(getVar("源码"),".get(div.module-card-item.module-item)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=URL;var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回刷新即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(div.module-card-item-title a).t()";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE=""};
##搜索翻页
var b="";for(var i=1;i<50;i=i+1){b=b+"+第"+i+"页="+i;}
"翻页"+b;
##免嗅探规则
"web="+getVar("地址");
####

####
###type
web
###分类
普通站源
###标题
555电影
###图片
https://gitcode.net/egwang186/iptv/-/raw/master/onebox/555dy.png
###BaseURL
"https://www.555dy1.com";
###首页地址
getVar("baseURL")+"/";
###分类地址
getVar("baseURL")+"/vodshow/分类-----翻页---.html";
###搜索地址
getVar("baseURL")+"/index.php/ajax/suggest?mid=1&limit=翻页&wd=关键字";
###rule
##首页规则
var 列表=e2Arr(getVar("源码"),".get(div.module-items a.module-item)");var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";
##筛选数据
var a="分类+电影=1---+电视剧=2---+福利=124---+动漫=4---+Netflix电影=1---Netflix+Netflix剧=2---Netflix+剧情片=1---剧情+科幻片=1---科幻+动作片=1---动作+喜剧片=1---喜剧+爱情片=1---爱情+大陆剧=2-大陆--+香港剧=2-香港--+韩剧=2-韩国--+美剧=2-美国--+日剧=2-日本--";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页"+b;a+"\n"+b;
##分类规则
var 列表=e2Arr(getVar("源码"),".get(div.module-items a.module-item)");var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE=baseURL+e2Rex(getVar("源码"),".get(div#page).byt(下一页).a(href)");var PREPAGE="";
##选集规则
var 分类=e2Arr(getVar("源码"),".get(div.module-play-list)");var 线路=e2Arr(getVar("源码"),".get(div.module-tab-items div.module-tab-item)");var 简介=e2Rex(getVar("源码"),".get(div.module-info-content).t()");var 列表规则=".get(a)";var 标题规则=".t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";
##搜索规则
var 源码=getVar("源码");var 列表=e2Arr(源码,".json(list)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=URL;var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回刷新即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".json(name)";var 地址规则=".c(/voddetail/).json(id).ct(.html)";var 图片规则=".json(pic)";var 简介规则=".json(name)";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE=""};
##搜索翻页
var b="";for(var i=10;i<50;i=i+10){b=b+"+第"+i+"页="+i;}
"翻页"+b;
##免嗅探规则
"web="+getVar("地址");
####

####
###type
web
###分类
普通站源
###标题
特狗影视
###图片
https://gitcode.net/egwang186/iptv/-/raw/master/onebox/tegouys.png
###BaseURL
"https://www.tegouys.com";
###首页地址
getVar("baseURL")+"/";
###分类地址
getVar("baseURL")+"/vodshow/id/分类/page/翻页.html";
###搜索地址
getVar("baseURL")+"/vodsearch/page/翻页/wd/关键字.html";
###rule
##首页规则
var 列表=e2Arr(getVar("源码"),".get(ul.myui-vodlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";
##筛选数据
var a="分类+电影=1+电视剧=2+综艺=3+动漫=4+纪录片=5+动作片=1/class/动作+喜剧片=1/class/喜剧+爱情片=1/class/爱情+科幻片=1/class/科幻+恐怖片=1/class/恐怖+剧情片=1/class/剧情+国产剧=2/class/国产+港台剧=2/class/港台+日韩剧=2/class/日韩+美剧=2/class/美国+大陆剧=2/area/中国大陆+香港剧=2/area/中国香港+台湾剧=2/area/中国台湾+韩剧=2/area/韩国+日本剧=2/area/日本+美国剧=2/area/美国";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页"+b;a+"\n"+b;
##分类规则
var 列表=e2Arr(getVar("源码"),".get(ul.myui-vodlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";
##选集规则
var 分类=e2Arr(getVar("源码"),".get(ul.myui-content__list)");var 简介=e2Rex(getVar("源码"),".get(div.myui-content__detail).t()");var 线路=e2Arr(getVar("源码"),".get(ul.nav.nav-tabs li)");var 列表规则=".get(li)";var 标题规则=".get(a).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";
##搜索规则
var 源码=getVar("源码");var 列表=e2Arr(源码,".get(ul.myui-vodlist__media li)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=URL;var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回刷新即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE=""};
##搜索翻页
var b="";for(var i=1;i<50;i=i+1){b=b+"+第"+i+"页="+i;}
"翻页"+b;
##免嗅探规则
"web="+getVar("地址");
####

####
###type
web
###分类
普通站源
###标题
虎牙直播
###图片
https://gitcode.net/egwang186/iptv/-/raw/master/onebox/huya.png
###BaseURL
"https://m.huya.com";
###首页地址
"https://live.cdn.huya.com/liveHttpUI/getHomeLiveRecommend?iType=1&ePlatform=1";
###分类地址
"https://www.huya.com/cache.php?m=LiveList&do=getLiveListByPage&gameId=分类&tagAll=0&callback=getLiveListJsonpCallback&page=翻页";
###搜索地址
"https://search.cdn.huya.com/?m=Search&do=getSearchContent&q=关键字&uid=0&v=4&typ=-5&livestate=0&rows=翻页";
###rule
##首页规则
var 列表=getVar("源码").replace(/\s+/g,"").match(/\{"lUid"[^\{]+?sRoomName.+?sRecommendTagName.+?\}/g);var 标题规则=".json(sRoomName)";var 地址规则=".c(/).json(lProfileRoom)";var 图片规则=".json(sScreenshot)";var 简介规则=".json(sIntroduction)";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";
##筛选数据
var a="分类+全部=+一起看=2135+原神=5489+英雄联盟手游=6203+英雄联盟=1+王者荣耀=2336+和平精英=3203+天天吃鸡=2793+穿越火线=4+棋牌桌游=100036+颜值=2168+交友=4079+放映厅=6245+互动点播=5907+音乐=3793+体育=2356";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页"+b;a+"\n"+b;
##分类规则
var 列表=e2Arr(getVar("源码").replace(/\s+/g,""),".z(\\{.+).json(data).json(datas)");var 标题规则=".json(roomName)";var 地址规则=".c(/).json(profileRoom)";var 图片规则=".json(screenshot)";var 简介规则=".json(introduction)";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";
##选集规则
var 标识=e2Rex(getVar("源码"),".ty(HNF_GLOBAL_INIT)").match(/"sStreamName":"(.+?)"/)[1];var 分类=[];var a={};var data=[];data.push({name:"P2p线路",url:"http://txtest-xp2p.p2p.huya.com/src/"+标识+".xs"},{name:"Hw.hls线路",url:"https://hw.hls.huya.com/src/"+标识+".m3u8"},{name:"Txdirect.hls线路",url:"http://36.101.206.161/txdirect.hls.huya.com/src/"+标识+".m3u8"},{name:"Tx.hls线路",url:"http://121.51.249.48/tx.hls.huya.com/src/"+标识+".m3u8"});a.data=data;a.title="线路";分类.push(a);var 分类=e2Arr(JSON.stringify(分类),".json()");var 线路="";var 简介=e2Rex(getVar("name"),".t()");var 列表规则=".json(data)";var 标题规则=".json(title)";var 选集规则=".json(name)";var 选集地址规则=".json(url)";
##搜索规则
var 源码=getVar("源码");var 列表=e2Arr(源码,".json(response).json(3).json(docs)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=URL;var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回刷新即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".json(game_roomName)";var 地址规则=".c(/).json(room_id)";var 图片规则=".json(game_screenshot)";var 简介规则=".json(game_introduction)";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE=""};
##搜索翻页
var b="";for(var i=40;i<1000;i=i+40){b=b+"+第"+i+"页="+i;}
"翻页"+b;
##免嗅探规则
JSON.stringify({name:"地址",url:getVar("地址")});
####

#####