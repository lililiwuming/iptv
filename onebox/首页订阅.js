#####iptv

####
###type
iptv
###分类
iptv
###数据
VCtv
##
远程$https://raw.fastgit.org/vamoschuck/TV/main/M3U
####

####
###type
iptv
###分类
iptv
###数据
TV88
##
远程$https://cdn.staticaly.com/gh/tvbw/mytv/main/tv88
####

####
###type
iptv
###分类
iptv
###数据
githubKS
##
远程$https://1771245847.github.io/ks.txt
####

####
###type
iptv
###分类
iptv
###数据
探索TV
##
远程$https://t.tansuo.tv/tv.txt
####

####
###type
iptv
###分类
iptv
###数据
野火直播
##
远程$https://gitcode.net/egwang186/iptv/-/raw/master/onebox/野火直播.txt
####

####
###type
iptv
###分类
iptv
###数据
EdemTV
##
远程$https://gitcode.net/egwang186/iptv/-/raw/master/onebox/EdemTV_with_EPG_logo.m3u
####

####
###type
iptv
###分类
iptv
###数据
央卫地方
##
远程$http://home.jundie.top:81/Cat/tv/live.txt
####

####
###type
iptv
###分类
iptv
###数据
ipv6直播
##
远程$http://wp.anxwl.cn/down.php/fa85f887ab0ad69495763d956130cbc6.txt
####

####
###type
iptv
###分类
iptv
###数据
Youtube(播放需VPN)
##
中天新闻,https://www.youtube.com/watch?v=_QbRXRnHMVY
台视新闻,https://www.youtube.com/watch?v=xL0ch83RAK8
三立新闻,https://www.youtube.com/watch?v=EB4g7wecgTI
凤凰资讯台,https://www.youtube.com/watch?v=8ysjF7BCtRE
民视新闻,https://www.youtube.com/watch?v=P8DRJChuQQQ
东森新闻,https://www.youtube.com/watch?v=R2iMq5LKXco
####

####
###type
iptv
###分类
iptv
###数据
随机直播
##
快手,http://mmitv.top/test/ks.php
热歌榜,https://api.uomg.com/api/rand.music?sort=热歌榜
新歌榜,https://api.uomg.com/api/rand.music?sort=新歌榜
飙升榜,https://api.uomg.com/api/rand.music?sort=飙升榜
抖音榜,https://api.uomg.com/api/rand.music?sort=抖音榜
电音榜,https://api.uomg.com/api/rand.music?sort=电音榜
####
#####


#####网页影视站源

####
###type
web
###分类
网页影视站源
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
var 列表=getVar("源码").match(/<li>[\s]*?<div class="v_img"[\s\S]*?<\/li>/g);if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(.v_title a).t()";var 地址规则=".get(.v_title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".get(div.v_note).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##筛选数据
var a="分类+电影=1+电视剧=2+动漫=4+喜剧片=6+爱情片=7+恐怖片=8+动作片=9+科幻片=10+大陆剧=20+TVB=21+韩剧=22+美剧=23+日剧=24";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页"+b;a+"\n"+b;
##分类规则
var 列表=getVar("源码").match(/<li>[\s]*?<div class="v_img"[\s\S]*?<\/li>/g);if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(.v_title a).t()";var 地址规则=".get(.v_title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".get(div.v_note).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##选集规则
var 分类=e2Rex(getVar("源码"),".get(ul#play_link)").match(/<li[\s\S]*?\/li>/g);var 线路=e2Rex(getVar("源码"),".get(ul.from_list)").match(/<li[\s\S]*?\/li>/g);var 简介=e2Rex(getVar("源码"),".get(p.p_txt)");var 列表规则=".get(a)";var 标题规则=".get(li).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";
##搜索规则
var 源码=getVar("源码");var 列表=源码.match(/<li>[\s]*?<div class="v_img[\s\S]*?<\/li>/g);if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(.v_title a).t()";var 地址规则=".get(.v_title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".get(div.v_note).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
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
网页影视站源
###标题
七喵影视
###图片
https://gitcode.net/egwang186/iptv/-/raw/master/onebox/qmapi.png
###BaseURL
"https://oss-qmapi.666bus.cn";
###首页地址
getVar("baseURL")+"/api/video-1-list.json?tj=&yema=1&sosuo1=";
###分类地址
getVar("baseURL")+"/api/video-分类-list.json?tj=&yema=翻页&sosuo1=";
###搜索地址
getVar("baseURL")+"/api/video-0-list.json?tj=&sosuo1=关键字&yema=翻页";
###rule
##首页规则
var 列表=e2Arr(getVar("源码"),".json(lb)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".json(t).dn64().dn(utf8)";var 地址规则=".c(/api/video-).json(id).ct(.json)";var 图片规则=".json(img)";var 简介规则=".json(sj)";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##筛选数据
var a="分类+电影=0+国产=1+美剧=2+韩剧=3+日剧=4+泰剧=5+动漫=6+恐怖=7";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页"+b;a+"\n"+b;
##分类规则
var 列表=e2Arr(getVar("源码"),".json(lb)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".json(t).dn64().dn(utf8)";var 地址规则=".c(/api/video-).json(id).ct(.json)";var 图片规则=".json(img)";var 简介规则=".json(sj)";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##选集规则
 var key=e2Rex(getVar("源码"),".json(ooo).dn64()");var 分类=[];var 新选集=[];var 选集=e2Arr(getVar("源码"),".json(bg)");for(var i in 选集){新选集.push(选集[i]+"?m3u8key="+key)}分类.push({title:"播放选集",list:新选集});var 分类=e2Arr(JSON.stringify(分类),".json()");var 线路="";var 简介=e2Rex(getVar("源码"),".json(t).dn64().dn(utf8)");var 列表规则=".json(list)";var 标题规则=".json(title)";var 选集规则=".tz($)";var 选集地址规则=".c(http://ip111.cn/?wd=).ty($).en64()";
##搜索规则
var 列表=e2Arr(getVar("源码"),".json(lb)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".json(t).dn64().dn(utf8)";var 地址规则=".c(/api/video-).json(id).ct(.json)";var 图片规则=".json(img)";var 简介规则=".json(sj)";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##搜索翻页
var b="";for(var i=1;i<50;i=i+1){b=b+"+第"+i+"页="+i;}
"翻页"+b;
##免嗅探规则
var uu=e2Rex(getVar("地址"),".ty(?wd=).dn64()")+"&v="+Math.random();
JSON.stringify({name:"地址",url:uu});
####

####
###type
web
###分类
网页影视站源
###标题
闲人资源站
###图片
https://gitcode.net/egwang186/iptv/-/raw/master/onebox/xianren.png
###BaseURL
"https://1.13.254.61";
###首页地址
getVar("baseURL")+"/";
###分类地址
getVar("baseURL")+"/index.php/vod/type/id/分类/page/翻页.html";
###搜索地址
getVar("baseURL")+"/index.php/vod/search/wd/关键字/page/翻页.html";
###rule
##首页规则
var 列表=e2Arr(getVar("源码"),".get(ul.stui-vodlist li[class=clearfix])");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则=".get(span.time).t()";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##筛选数据
var a="分类+电视剧=1+电影=2+福利=22+直播=20+综艺=24+动漫=4+纪录片=23+韩剧=28+番剧=25+国漫=26+动画=27+美漫=29";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页+"+b;a+"\n"+b;
##分类规则
var 列表=e2Arr(getVar("源码"),".get(ul.stui-vodlist li[class=clearfix])");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则=".get(span.time).t()";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##选集规则
var 分类=e2Arr(getVar("源码"),".get(div#playlist)");var 线路="";var 简介=e2Rex(getVar("源码"),".get(div.stui-content__detail).t()");var 列表规则=".get(ul.stui-content__playlist li)";var 标题规则=".get(h3).t()";var 选集规则=".get(a.copy_text).t()";var 选集地址规则=".get(a).a(href)";
##搜索规则
var 源码=getVar("源码");var 列表=e2Arr(源码,".get(ul.stui-vodlist li[class=clearfix])");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
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
网页影视站源
###标题
Auete影视
###图片
https://gitcode.net/egwang186/iptv/-/raw/master/onebox/auete.png
###BaseURL
"https://auete.com";
###首页地址
getVar("baseURL")+"/";
###分类地址
getVar("baseURL")+"/分类/翻页.html";
###搜索地址
getVar("baseURL")+"/aueteso.php?searchword=关键字&page=翻页";
###rule
##首页规则
var 列表=e2Arr(getVar("源码"),".get(ul.threadlist li)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(img).a(src)";var 简介规则=".get(button).st().t().c().get(p).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##筛选数据
var a="分类+电影=Movie+电视剧=Tv+综艺=Zy+动漫=Dm+动作片=Movie/dzp+喜剧片=Movie/xjp+爱情片=Movie/aqp+科幻片=Movie/khp+恐怖片=Movie/kbp+剧情片=Movie/jqp+战争片=Movie/zzp+大陆剧=Tv/neidi+香港剧=Tv/tvbgj+台湾剧=Tv/taiju+日本剧=Tv/riju+韩国剧=Tv/hanju+欧美剧=Tv/oumei";var b="第1页=index";for(var i=2;i<50;i++){b=b+"+第"+i+"页=index"+i;}var b="翻页+"+b;a+"\n"+b;
##分类规则
var 列表=e2Arr(getVar("源码"),".get(ul.threadlist li)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(img).a(src)";var 简介规则=".get(button).st().t().c().get(p).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##选集规则
var 分类=e2Arr(getVar("源码"),".get(div#player_list)");var 简介=e2Rex(getVar("源码"),".get(div.message).t()");var 线路="";var 列表规则=".get(ul li)";var 标题规则=".get(h2).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";
##搜索规则
var 源码=getVar("源码");var 列表=e2Arr(源码,".get(ul.threadlist li)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(a).t()";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".get(span).st().t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##搜索翻页
var b="";for(var i=1;i<50;i=i+1){b=b+"+第"+i+"页="+i;}
"翻页"+b;
##免嗅探规则
var uu=getVar("地址");var resp=JZ(uu);var script=e2Rex(resp.code,".get(div#video script).t().or().get(div#player script).t()");function base64decode(str){return e2Rex(str,".dn64()")}eval(script);if(pn=="i8i"){JSON.stringify({url:now,head:{"referer":"https://auete.com/js/player/i8i.html","user-agent":"Mozilla/5.0"}})}else if(pn=="m3u8hd"){if(now.indexOf("9yun")!=-1){var b="https://auete.com/api/9yun.php?url="+now.split("9yun")[0];var a=JZ(JSON.stringify({url:b,redirect:false,head:{"User-Agent":"Mozilla/5.0"}}));while(a.head.location||a.head.Location){var finalurl=a.head.location||a.head.Location;if(finalurl.indexOf(".mp4")>40){var a={"head":{"cookie":"ccccc"}}}else{var a=JZ(JSON.stringify({url:finalurl,redirect:false,head:{"User-Agent":"Mozilla/5.0 Android"}}))}}JSON.stringify({url:finalurl})}else{"web="+uu}}else{if(now.indexOf("http")!=-1){JSON.stringify({url:now,head:{"referer":"https://auete.com/js/player/i8i.html","user-agent":"Mozilla/5.0"}})}else{"web="+uu}}
####

####
###type
web
###分类
网页影视站源
###标题
氢视频
###图片
https://gitcode.net/egwang186/iptv/-/raw/master/onebox/h1080p.png
###BaseURL
"https://h1080p.com";
###首页地址
getVar("baseURL")+"/";
###分类地址
getVar("baseURL")+"/index.php/vod/show/id/分类/page/翻页.html";
###搜索地址
getVar("baseURL")+"/index.php/vod/search/wd/关键字/page/翻页.html";
###rule
##首页规则
var 列表=e2Arr(getVar("源码"),".get(div.swiper-slide)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(div[class~=.*title]).t()";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(src).or().get(a).a(style).z2([\\(]\\(.+?\\)[\\)])";var 简介规则=".get(div[class~=.*ins]).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##筛选数据
var a="分类+电影=1+电视剧=2+动漫=3+番剧=28+剧场版=30+综艺=31+内地剧=2/area/内地+港剧=2/area/香港+台剧=2/area/台湾+韩剧=2/area/韩国+日本剧=2/area/日本+美剧=2/area/美国+动作片=1/class/动作+喜剧片=1/class/喜剧+爱情片=1/class/爱情+科幻片=1/class/科幻+恐怖片=1/class/恐怖+剧情片=1/class/剧情";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页"+b;a+"\n"+b;
##分类规则
var 列表=e2Arr(getVar("源码"),".get(div.module-items a.module-item)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##选集规则
var 分类=e2Arr(getVar("源码"),".get(div.module-play-list)");var 线路=e2Arr(getVar("源码"),".get(div.module-tab-items .module-tab-item)");var 简介=e2Rex(getVar("源码"),".get(div.module-info-content).t()");var 列表规则=".get(a)";var 标题规则=".t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";
##搜索规则
var 列表=e2Arr(getVar("源码"),".get(div.module-card-item.module-item)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(div.module-card-item-title a).t()";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
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
网页影视站源
###标题
蓝光影院
###图片
https://gitcode.net/egwang186/iptv/-/raw/master/onebox/lgyy.png
###BaseURL
"https://www.lgyy.cc";
###首页地址
getVar("baseURL")+"/";
###分类地址
getVar("baseURL")+"/vodshow/分类--------翻页---.html";
###搜索地址
getVar("baseURL")+"/vodsearch/关键字----------翻页---.html";
###rule
##首页规则
var 列表=e2Arr(getVar("源码"),".get(div.module-items a.module-item)").filter((item,index)=>index%2===0);if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##筛选数据
var a="分类+电影=1+电视剧=2+动漫=5+纪录=4+国产剧=13+港台剧=14+日韩剧=15+欧美剧=16+动作片=6+喜剧片=7+爱情片=8+科幻片=9+恐怖片=10+剧情片=11";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页"+b;a+"\n"+b;
##分类规则
var 列表=e2Arr(getVar("源码"),".get(div.module-items a.module-item)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##选集规则
var 分类=e2Arr(getVar("源码"),".get(div.module-play-list)");var 线路=e2Arr(getVar("源码"),".get(div.module-tab-items div.module-tab-item)");var 简介=e2Rex(getVar("源码"),".get(div.module-info-content).t()");var 列表规则=".get(a)";var 标题规则=".t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";
##搜索规则
var 列表=e2Arr(getVar("源码"),".get(div.module-card-item.module-item)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(div.module-card-item-title a).t()";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
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
网页影视站源
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
getVar("baseURL")+"/vodsearch/关键字----------翻页---.html";
###rule
##首页规则
var 列表=e2Arr(getVar("源码"),".get(div.module-items a.module-item)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##筛选数据
var a="分类+电影=1---+电视剧=2---+福利=124---+动漫=4---+Netflix电影=1---Netflix+Netflix剧=2---Netflix+剧情片=1---剧情+科幻片=1---科幻+动作片=1---动作+喜剧片=1---喜剧+爱情片=1---爱情+大陆剧=2-大陆--+香港剧=2-香港--+韩剧=2-韩国--+美剧=2-美国--+日剧=2-日本--";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页"+b;a+"\n"+b;
##分类规则
var 列表=e2Arr(getVar("源码"),".get(div.module-items a.module-item)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##选集规则
var 分类=e2Arr(getVar("源码"),".get(div.module-play-list)");var 线路=e2Arr(getVar("源码"),".get(div.module-tab-items div.module-tab-item)");var 简介=e2Rex(getVar("源码"),".get(div.module-info-content).t()");var 列表规则=".get(a)";var 标题规则=".t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";
##搜索规则
var 源码=getVar("源码");var 列表=e2Arr(源码,".get(div.module-items div.module-item)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("当前请求地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(div.module-card-item-title a).t()";var 地址规则=".get(div.module-card-item-title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}
##搜索翻页
var b="";for(var i=1;i<50;i=i+1){b=b+"+第"+i+"页="+i;}
"翻页"+b;
##免嗅探规则
"web="+getVar("地址");
####


###type
web
###分类
网页影视站源
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
var 源码=getVar("源码");var 列表=e2Arr(源码,".get(ul.myui-vodlist__media li)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("搜索地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE=""};
##搜索翻页
var b="";for(var i=1;i<50;i=i+1){b=b+"+第"+i+"页="+i;}
"翻页"+b;
##免嗅探规则
"web="+getVar("地址");


####
###type
web
###分类
网页影视站源
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
var 标识=e2Rex(getVar("源码"),".ty(HNF_GLOBAL_INIT)").match(/"sStreamName":"(.+?)"/)[1];var 分类=[];var a={};var data=[];data.push({name:"Hw.hls线路",url:"http://121.51.249.6/hw.hls.huya.com/src/"+标识+".m3u8"},{name:"Txdirect.hls线路",url:"http://121.51.249.6/txdirect.hls.huya.com/src/"+标识+".m3u8"},{name:"Tx.hls线路",url:"http://121.51.249.6/tx.hls.huya.com/src/"+标识+".m3u8"});a.data=data;a.title="线路";分类.push(a);var 分类=e2Arr(JSON.stringify(分类),".json()");var 线路="";var 简介=e2Rex(getVar("name"),".t()");var 列表规则=".json(data)";var 标题规则=".json(title)";var 选集规则=".json(name)";var 选集地址规则=".json(url)";
##搜索规则
var 源码=getVar("源码");var 列表=e2Arr(源码,".json(response).json(3).json(docs)");if(!列表[0]){var 列表=["网页可能有搜索验证，去网页看看吧"];var 标题规则=".t()";var 地址规则=getVar("搜索地址");var 图片规则=".get(img).a(data-original)";var 简介规则="长按网页打开，验证后返回重新搜索即可";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";}else{var 标题规则=".json(game_roomName)";var 地址规则=".c(/).json(room_id)";var 图片规则=".json(game_screenshot)";var 简介规则=".json(game_introduction)";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE=""}
##搜索翻页
var b="";for(var i=40;i<1000;i=i+40){b=b+"+第"+i+"页="+i;}
"翻页"+b;
##免嗅探规则
JSON.stringify({name:"地址",url:getVar("地址")});
####

#####