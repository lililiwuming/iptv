#####订阅直播

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

#####


#####本地直播

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
"https://search.cdn.huya.com/?m=Search&do=getSearchContent&q=关键字&uid=0&v=4&typ=-5&livestate=0&rows=40";
###rule
##首页规则
var 列表=getVar("源码").replace(/\s+/g,"").match(/\{"lUid"[^\{]+?sRoomName.+?sRecommendTagName.+?\}/g);var 标题规则=".json(sRoomName)";var 地址规则=".c(/).json(lProfileRoom)";var 图片规则=".json(sScreenshot)";var 简介规则=".json(sIntroduction)";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";
##筛选数据
var a="分类+全部=+一起看=2135+原神=5489+英雄联盟手游=6203+英雄联盟=1+王者荣耀=2336+和平精英=3203+天天吃鸡=2793+穿越火线=4+棋牌桌游=100036+颜值=2168+交友=4079+放映厅=6245+互动点播=5907+音乐=3793+体育=2356";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页+"+b;a+"\n"+b;
##分类规则
var 列表=e2Arr(getVar("源码").replace(/\s+/g,""),".z(\\{.+).json(data).json(datas)");var 标题规则=".json(roomName)";var 地址规则=".c(/).json(profileRoom)";var 图片规则=".json(screenshot)";var 简介规则=".json(introduction)";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";
##选集规则
var 标识=e2Rex(getVar("源码"),".ty(HNF_GLOBAL_INIT)").match(/"sStreamName":"(.+?)"/)[1];var 分类=[];var a={};var data=[];data.push({name:"P2p线路",url:"http://txtest-xp2p.p2p.huya.com/src/"+标识+".xs"},{name:"Hw.hls线路",url:"https://hw.hls.huya.com/src/"+标识+".m3u8"},{name:"Txdirect.hls线路",url:"http://36.101.206.161/txdirect.hls.huya.com/src/"+标识+".m3u8"},{name:"Tx.hls线路",url:"http://121.51.249.48/tx.hls.huya.com/src/"+标识+".m3u8"});a.data=data;a.title="线路";分类.push(a);var 分类=e2Arr(JSON.stringify(分类),".json()");var 线路="";var 简介=e2Rex(getVar("name"),".t()");var 列表规则=".json(data)";var 标题规则=".json(title)";var 选集规则=".json(name)";var 选集地址规则=".json(url)";
##搜索规则
var 源码=getVar("源码");var 列表=e2Arr(源码,".json(response).json(3).json(docs)");var 标题规则=".json(game_roomName)";var 地址规则=".c(/).json(room_id)";var 图片规则=".json(game_screenshot)";var 简介规则=".json(game_introduction)";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";
##免嗅探规则
JSON.stringify({name:"地址",url:getVar("url")});
####

#####