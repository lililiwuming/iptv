######share_token1
if(getVar("地址").length>1&&getVar("地址")!="null"){
if(getVar("地址").indexOf("aliyundrive.com/s/")!=-1||getVar("地址").indexOf("share_id-")!=-1){
    if(getVar("地址").indexOf("aliyundrive.com/s/")!=-1){
    var share_id=getVar("地址").match(/\.com\/s\/([0-9a-zA-Z]+)/)[1];
    }else if(getVar("地址").indexOf("share_id-")!=-1){
    var share_id=getVar("地址").split("$$")[0].split("share_id-")[1];
    }
    if(getVar("pwd")!="null"&&getVar("pwd").length>1){
        var pwd=getVar("pwd");
    }else{
        if(getVar("地址").split("$$")[2]){
            var pwd=getVar("地址").split("$$")[2];
        }else{
        var pwd="";
        }
    }
    if(getVar("share_token")!="null"){
    getVar("share_token");
    }else{
    JSON.parse(getHttp(JSON.stringify({url:"https://api.aliyundrive.com/v2/share_link/get_share_token",postJson:JSON.stringify({share_pwd:pwd,share_id:share_id})}))).share_token;
    }
}else if(getVar("地址").indexOf("$$")!=-1){
    "";
}else{
    alert("请输入完整的阿里云盘分享链接,比如https://www.aliyundrive.com/s/wUFXj7116uS");
}
}else{
  "";
}
######目录重组数据root2
if(getVar("地址")&&getVar("地址").length>1&&getVar("地址")!="null"){
if(getVar("地址").indexOf("aliyundrive.com/s/")!=-1){
    var xxx_id="share_id-"+getVar("地址").match(/\.com\/s\/([0-9a-zA-Z]+)/)[1];
    var file_id="root";
}else if(getVar("地址").indexOf("$$")!=-1){
    var xxx_id=getVar("地址").split("$$")[0];
    var file_id=getVar("地址").split("$$")[1];
}
if(getVar("pwd")!="null"&&getVar("pwd").length>1){
    var pwd=getVar("pwd");
}else{
    if(getVar("地址").split("$$")[2]){
        var pwd=getVar("地址").split("$$")[2];
    }else{
    var pwd="";
    }
}
}else{
    //我的云盘
var cm=android.webkit.CookieManager.getInstance();
var ALICOOKIE=cm.getCookie("www.aliyundrive.com");
if(ALICOOKIE&&ALICOOKIE!="null"&&ALICOOKIE.indexOf("access_token")!=-1&&ALICOOKIE.indexOf("refresh_token")!=-1){
var refresh_token=ALICOOKIE.match(/refresh_token=(.*?)[\s;]/)[1];
var code=getHttp(JSON.stringify({url:"https://auth.aliyundrive.com/v2/account/token",postJson:JSON.stringify({refresh_token:refresh_token,grant_type:"refresh_token"})}));
if(JSON.parse(code).access_token){
var access_token=JSON.parse(code).access_token;
var xxx_id="drive_id-"+ALICOOKIE.match(/drive_id=(.*?)[\s;]/)[1];
var file_id="root";
}else{
    alert("登陆已过期，请重新在m浏览器登陆");
}
}else{
alert("请重新登陆阿里云盘网页");
}
}
if(xxx_id.indexOf("share_id")!=-1){
    var HEAD=JSON.stringify({"X-Share-Token":getVar("share_token")});
    var data=JSON.stringify({share_id:xxx_id.split("-")[1],parent_file_id:file_id,limit: 100,image_thumbnail_process:"image/resize,w_160/format,jpeg",image_url_process:"image/resize,w_1920/format,jpeg",video_thumbnail_process:"video/snapshot,t_1000,f_jpg,ar_auto,w_300",order_by:"name",order_direction:"ASC"});
}else if(xxx_id.indexOf("drive_id")!=-1){
    var cm=android.webkit.CookieManager.getInstance();
var ALICOOKIE=cm.getCookie("www.aliyundrive.com");
if(ALICOOKIE&&ALICOOKIE!="null"&&ALICOOKIE.indexOf("access_token")!=-1&&ALICOOKIE.indexOf("refresh_token")!=-1){
var refresh_token=ALICOOKIE.match(/refresh_token=(.*?)[\s;]/)[1];
var code=getHttp(JSON.stringify({url:"https://auth.aliyundrive.com/v2/account/token",postJson:JSON.stringify({refresh_token:refresh_token,grant_type:"refresh_token"})}));
if(JSON.parse(code).access_token){
var access_token=JSON.parse(code).access_token;
}else{
    alert("登陆已过期，请重新在m浏览器登陆");
}
}else{
alert("请重新登陆阿里云盘网页");
}
    var HEAD=JSON.stringify({"Authorization":access_token});
    var data=JSON.stringify({drive_id:xxx_id.split("-")[1],parent_file_id:file_id,limit: 100,image_thumbnail_process:"image/resize,w_160/format,jpeg",image_url_process:"image/resize,w_1920/format,jpeg",video_thumbnail_process:"video/snapshot,t_1000,f_jpg,ar_auto,w_300",order_by:"name",order_direction:"ASC"});
}
var 目录数据=getHttp(JSON.stringify({url:"https://api.aliyundrive.com/adrive/v3/file/list",head:JSON.parse(HEAD),postJson:data}));
var items=JSON.parse(目录数据).items;
if(JSON.parse(目录数据).items){
    if(xxx_id.indexOf("share_id")!=-1){
        for(var i in items){
           if(items[i].category=="video"||items[i].category=="doc"||items[i].category=="image"){
           items[i].url="q:"+items[i].category+"?url=share_id-"+items[i].share_id+"$$"+items[i].file_id+"$$"+pwd+"$$"+getVar("地址").split("$$")[3];
           items[i].文件类型="<font color='red'><b>["+items[i].file_extension+"文件]</b></font>";
           }else if(items[i].type=="folder"){
            if(file_id=="root"){
                FNAME=";";
            }else{
                FNAME=getVar("地址").split("$$")[3];
            }
            items[i].url="q:root?url=share_id-"+items[i].share_id+"$$"+items[i].file_id+"$$"+pwd+"$$"+FNAME+items[i].name+";";
            items[i].文件类型="<font color='red'><b>[文件夹]</b></font>";
           }else{
           items[i].url="q:video?url=share_id-"+items[i].share_id+"$$"+items[i].file_id+"$$"+pwd;
           items[i].文件类型="<font color='red'><b>["+items[i].file_extension+"文件]</b></font>";
        }
        }
    }else if(xxx_id.indexOf("drive_id")!=-1){
        for(var i in items){
            if(items[i].category=="video"||items[i].category=="doc"||items[i].category=="image"){
            items[i].url="q:"+items[i].category+"?url=drive_id-"+items[i].drive_id+"$$"+items[i].file_id+"$$"+getVar("地址").split("$$")[2];
            items[i].文件类型="<font color='red'><b>["+items[i].file_extension+"文件]</b></font>";
            }else if(items[i].type=="folder"){
                if(file_id=="root"){
                    FNAME=";";
                }else{
                    FNAME=getVar("地址").split("$$")[2];
                }
            items[i].url="q:root?url=drive_id-"+items[i].drive_id+"$$"+items[i].file_id+"$$"+FNAME+items[i].name+";";
            items[i].文件类型="<font color='red'><b>[文件夹]</b></font>";
            }else{
            items[i].url="q:video?url=drive_id-"+items[i].drive_id+"$$"+items[i].file_id;
            items[i].文件类型="<font color='red'><b>["+items[i].file_extension+"文件]</b></font>";
            }
        }
    }
    JSON.stringify(items);
}else if(JSON.parse(目录数据).code=="ShareLinkTokenInvalid"){
    alert("来晚了，该分享已失效");
}
######历史记录3
eval(readStr("QJS"));
var filename='阿里云历史记录.txt';
var 记录=[];
if(getVar("标题")&&getVar("地址")&&getVar("标题")!='null'&&getVar("地址").indexOf("$$root")==-1){
var title=getVar("标题");
var url=getVar("地址");
记录.push({title:title,url:url});
if(_.read(filename)){
var 新记录=记录.concat(JSON.parse(_.read(filename)).filter(d=>d.url!=记录[0].url));
}else{
var 新记录=记录;
}
_.write(JSON.stringify(新记录),filename);
}
######读取历史4
eval(readStr("QJS"));
var filename='阿里云历史记录.txt';
_.read(filename);
######alicookie5
alert("快去首页安装新版吧");
######过滤非视频6
function 过滤非视频(item) {
    if(item.mime_type){
        return item.mime_type.indexOf("video")!=-1||item.category=="video"||item.category=="audio";
    }else{
        return item.category=="video"||item.category=="audio";
    }
}
var 过滤=JSON.parse(getVar("目录重组数据")).filter(过滤非视频);
for(var i in 过滤){
if(过滤[i].download_url){
    过滤[i].url="http://ip111.cn/?wd="+过滤[i].download_url+"###"+过滤[i].drive_id+"###"+过滤[i].file_id+"###"+过滤[i].file_extension+"###"+过滤[i].category;
}else{
    过滤[i].url="http://ip111.cn/?wd="+过滤[i].thumbnail+"$$"+过滤[i].share_id+"$$"+过滤[i].file_id+"$$"+过滤[i].file_extension+"$$"+过滤[i].category+"$$"+getVar("地址").split("$$")[2]+"$$"+getVar("地址").split("$$")[3]+"$$"+过滤[i].parent_file_id+"$$"+过滤[i].name;
}
}
JSON.stringify(过滤);
######视频地址7
eval(readStr("QJS"));
if(getVar("地址").indexOf("$$")!=-1){
    var cm=android.webkit.CookieManager.getInstance();
    var ALICOOKIE=cm.getCookie("www.aliyundrive.com");
    if(ALICOOKIE&&ALICOOKIE!="null"&&ALICOOKIE.indexOf("access_token")!=-1&&ALICOOKIE.indexOf("refresh_token")!=-1){
        //
        var pwd=getVar("地址").split("?wd=")[1].split("$$")[5];
        var share_id=getVar("地址").split("?wd=")[1].split("$$")[1];
        var refresh_token=ALICOOKIE.match(/refresh_token=(.*?)[\s;]/)[1];
        var d = [];
        var A=JSON.stringify({url:"https://auth.aliyundrive.com/v2/account/token",postJson:JSON.stringify({refresh_token:refresh_token,grant_type:"refresh_token"})});
        var S=JSON.stringify({url:"https://api.aliyundrive.com/v2/share_link/get_share_token",postJson:JSON.stringify({share_pwd:pwd,share_id:share_id})});
        var urls = []; //网址列表
        urls[0]=A;urls[1]=S;
        for (let index = 0; index < urls.length; index++) {
          function fn(i) {
            return function () {
                 //这里改成你想要进行的操作
               var code = getHttp(urls[i]);
               return code //这里改成你自己想要的返回 没有返回删掉这行就行
            };
          }
          d.push(fn(index));
        }
        var result = []; //result为每个线程运行后返回的结果集
        var s = _.submit(d, 2); //n 改为你想开启的线程数
        for (let i = 0; i < s.length; i++) {
          for (let z of s[i].get()) {
            result.push(z);
          }
        }
        //
        var Acode=result[0];var Scode=result[1];
        var share_token=JSON.parse(Scode).share_token;
        if(JSON.parse(Acode).access_token){
           var access_token=JSON.parse(Acode).access_token;
        }else{
            alert("登陆已过期，请重新在m浏览器登陆");
        }
    }else{
        alert("COOKIE被清除了,请重新登陆阿里云盘网页");
    }
    var file_id=getVar("地址").split("?wd=")[1].split("$$")[2];
    var 后缀=getVar("地址").split("?wd=")[1].split("$$")[3];
    var 类型=getVar("地址").split("?wd=")[1].split("$$")[4];
    var u=getVar("地址").split("?wd=")[1].split("$$")[0];
    if(类型=="audio"){
    var code=getHttp(JSON.stringify({url:"https://api.aliyundrive.com/v2/file/get_share_link_download_url",head:{"Authorization":access_token,"X-Share-Token":share_token},postJson:JSON.stringify({share_id:share_id,get_audio_play_info:true,file_id:file_id})}));
    }else{
    var code=getHttp(JSON.stringify({url:"https://api.aliyundrive.com/v2/file/get_share_link_download_url",head:{"Authorization":access_token,"X-Share-Token":share_token},postJson:JSON.stringify({share_id:share_id,file_id:file_id,expires_sec:0})}));
    }
    if(JSON.parse(code).code){
        alert("登陆已过期，请重新在m浏览器登陆");
    }else{
    if(JSON.parse(code).audio_template_list){
        var resp=JZ(JSON.stringify({url:JSON.parse(code).audio_template_list[JSON.parse(code).audio_template_list.length-1].url,redirect:false,head:{"Referer":"https://www.aliyundrive.com/"}}));
        var 转码HQ='http://113.107.160.110:3000/apis/yun-audio/'+file_id+'/'+share_id+'/'+access_token+'/'+share_token+'/HQ/master.mp3';
        JSON.stringify([{name:"高音质转码",url:转码HQ},{name:"原始文件",url:JSON.parse(code).audio_template_list[JSON.parse(code).audio_template_list.length-1].url,head:{"Referer":"https://www.aliyundrive.com/"}}]);
    }else{
    //var resp=JZ(JSON.stringify({url:JSON.parse(code).download_url,redirect:false,head:{"Referer":"https://www.aliyundrive.com/"}}));
            var file_data={};
            var 路径=getVar("地址").split("?wd=")[1].split("$$")[6];
            var 最后文件夹名=路径.split(";")[路径.split(';').length-2];
            file_data.parent_name=路径+最后文件夹名;
            file_data.folder_id=getVar("地址").split("?wd=")[1].split("$$")[7];
            file_data.file_id=file_id;file_data.share_id=share_id;file_data.share_pwd=pwd;file_data.expiration="";
            file_data.file_name=getVar("地址").split("?wd=")[1].split("$$")[8];
            var _d=e2Rex(encodeURI(JSON.stringify(file_data)),".en64()").replace(/\//g,"$");
            //var 转码1080='http://116.85.31.19:4000/apis/yun-play/'+_d+'/'+access_token+'/'+share_token+'/FHD/index.m3u8';
            //var 转码720='http://116.85.31.19:4000/apis/yun-play/'+_d+'/'+access_token+'/'+share_token+'/HD/index.m3u8';
            var 转码1080='http://113.107.160.110:3000/apis/yun-play/'+share_id+'/'+file_id+'/'+access_token+'/'+share_token+'/FHD/index.m3u8';
            var 转码720='http://113.107.160.110:3000/apis/yun-play/'+share_id+'/'+file_id+'/'+access_token+'/'+share_token+'/HD/index.m3u8';
        JSON.stringify([{name:"720P转码",url:转码720},{name:"1080P转码",url:转码1080},{name:"原始文件播放",url:JSON.parse(code).url,head:{"Referer":"https://www.aliyundrive.com/"}}]);
    }
    }
}else{
var 类型=getVar("地址").split("?wd=")[1].split("###")[4];
var cm=android.webkit.CookieManager.getInstance();
var ALICOOKIE=cm.getCookie("www.aliyundrive.com");
if(ALICOOKIE.indexOf("access_token")!=-1&&ALICOOKIE.indexOf("refresh_token")!=-1){
var refresh_token=ALICOOKIE.match(/refresh_token=(.*?)[\s;]/)[1];
var code=getHttp(JSON.stringify({url:"https://auth.aliyundrive.com/v2/account/token",postJson:JSON.stringify({refresh_token:refresh_token,grant_type:"refresh_token"})}));
if(JSON.parse(code).access_token){
var access_token=JSON.parse(code).access_token;
    if(类型=="audio"){
    var file_id=getVar("地址").split("?wd=")[1].split("###")[2];
    var drive_id=getVar("地址").split("?wd=")[1].split("###")[1];
    var code=getHttp(JSON.stringify({url:"https://api.aliyundrive.com/v2/file/get_download_url",head:{"Authorization":access_token},postJson:JSON.stringify({drive_id:drive_id,get_audio_play_info:true,file_id:file_id})}));
    JSON.stringify([{name:"原始文件",url:JSON.parse(code).url,head:{"Referer":"https://www.aliyundrive.com/"}}]);
    }else{
        var file_id=getVar("地址").split("?wd=")[1].split("###")[2];
        var drive_id=getVar("地址").split("?wd=")[1].split("###")[1];
        var u=getVar("地址").split("?wd=")[1].split("###")[0];
        var code=getHttp(JSON.stringify({url:"https://api.aliyundrive.com/v2/file/get_download_url",head:{"Authorization":access_token},postJson:JSON.stringify({drive_id:drive_id,file_id:file_id,expires_sec:0})}));
        //var 转码1080='http://116.85.31.19:4000/apis/my-yun-play/'+file_id+'/'+drive_id+'/'+access_token+'/FHD/index.m3u8';
        //var 转码720='http://116.85.31.19:4000/apis/my-yun-play/'+file_id+'/'+drive_id+'/'+access_token+'/HD/index.m3u8';
        var 转码1080='http://113.107.160.110:3000/apis/my-yun-play/'+file_id+'/'+drive_id+'/'+access_token+'/FHD/index.m3u8';
        var 转码720='http://113.107.160.110:3000/apis/my-yun-play/'+file_id+'/'+drive_id+'/'+access_token+'/HD/index.m3u8';
        JSON.stringify([{name:"720P转码",url:转码720},{name:"1080P转码",url:转码1080},{name:"原始文件播放",url:JSON.parse(code).url,head:{"Referer":"https://www.aliyundrive.com/"}}]);
    }
}else{
    alert("登陆已过期，请重新在m浏览器登陆");
}
}else{
alert("请重新登陆阿里云盘网页");
}
}
######文档预览8
var cm=android.webkit.CookieManager.getInstance();
var ALICOOKIE=cm.getCookie("www.aliyundrive.com");
    if(ALICOOKIE.indexOf("access_token")!=-1&&ALICOOKIE.indexOf("refresh_token")!=-1){
        var refresh_token=ALICOOKIE.match(/refresh_token=(.*?)[\s;]/)[1];
        var Acode=getHttp(JSON.stringify({url:"https://auth.aliyundrive.com/v2/account/token",postJson:JSON.stringify({refresh_token:refresh_token,grant_type:"refresh_token"})}));
        if(JSON.parse(Acode).access_token){
           var access_token=JSON.parse(Acode).access_token;
        }else{
            alert("登陆已过期，请重新在m浏览器登陆");
        }
    }else{
        alert("请重新登陆阿里云盘网页");
    }
var xxx_id=getVar("地址").split("$$")[0];
var file_id=getVar("地址").split("$$")[1];
if(xxx_id.indexOf("share_id")!=-1){
    var HEAD=JSON.stringify({"Authorization":access_token,"X-Share-Token":getVar("share_token")});
    var data=JSON.stringify({share_id:xxx_id.split("-")[1],file_id:file_id});
}else if(xxx_id.indexOf("drive_id")!=-1){
    var HEAD=JSON.stringify({"Authorization":access_token});
    var data=JSON.stringify({drive_id:xxx_id.split("-")[1],file_id:file_id});
}
var code=getHttp(JSON.stringify({url:"https://api.aliyundrive.com/v2/file/get_office_preview_url",head:JSON.parse(HEAD),postJson:data}));
if(JSON.parse(code).code){
  if(JSON.parse(code).code=="NotSupportedFileType"){
    alert("此文档格式不支持预览");
  }else{
    alert("登陆已过期，请重新在m浏览器登陆");
  }
}else{
var url=JSON.parse(code).preview_url+"??"+JSON.parse(code).access_token;
var name=getVar("标题");
JSON.stringify([{name:name,url:url}]);
}
######搜索链接9
[
    {"title":"阿里盘搜","url":"https://www.alipansou.com/search?k="},
    {"title":"奈斯搜索","url":"https://www.niceso.fun/search/?q="},
    {"title":"大盘搜","url":"https://dapanso.com/search?page=1&type=&keyword="},
    {"title":"UP云搜","url":"https://www.upyunso.com/search.html?page=1&keyword="},
    {"title":"云盘资源网","url":"https://www.yunpanziyuan.com/fontsearch.htm?fontname="},
    {"title":"云盘资源分享社区","url":"https://alyunpan.com/?q="},
    {"title":"阿里小站","url":"https://www.pan666.cn/?q="},
    {"title":"霸王龙影库","url":"https://t-rex.tzfile.com/?s="},
    {"title":"TG_云盘资源发布","url":"https://tx.me/s/sharealiyun?q="},
    {"title":"TG_云盘盘","url":"https://tx.me/s/yunpanpan?q="},
    {"title":"TG_云盘影视共享","url":"https://tx.me/s/alypysgx?q="},
    {"title":"TG_V云盘","url":"https://tx.me/s/aliyun69?q="},
    {"title":"TG_云盘资源共享","url":"https://tx.me/s/aliyunziyuanfenxiang?q="},
    {"title":"TG_WAYOU资源","url":"https://tx.me/s/wayouziyuan?q="},
    {"title":"TG_影视必应阁","url":"https://tx.me/s/moviebyg?q="},
    {"title":"TG_4K影视资源","url":"https://tx.me/s/remux_2160p?q="},
    {"title":"TG_蓝光影音","url":"https://tx.me/s/voidrss?q="},
    {"title":"TG_阿里云影视","url":"https://tx.me/s/aliyunys?q="},
    {"title":"小纸条","url":"https://u.gitcafe.net/?wd="}
]
######多链接10
if(getVar("url")&&getVar("url")!="null"){
if(getVar("url").indexOf("aliyundrive.com/s/")!=-1){
var list=getVar("url").match(/[\s\S]*?https:\/\/www\.aliyundrive\.com\/s\/.*/g);
var items=[];
for(var i in list){
    var title=list[i].replace(/\s/g,"").replace(/<.+?>/g,"").split("https://")[0]||"加个标题吧，能从历史记录找到我";
    var share_id=list[i].match(/aliyundrive\.com\/s\/([0-9a-zA-Z]+)/)[1];
    if(list[i].indexOf("提取码")!=-1){
        var pwd=list[i].match(/提取码.*?([0-9a-zA-Z]+)/)[1];
    }else if(list[i].indexOf("密码")!=-1){
        var pwd=list[i].match(/密码.*?([0-9a-zA-Z]+)/)[1];
    }else{
        var pwd="";
    }
    var url="q:root?url=share_id-"+share_id+"$$root$$"+pwd;
    items.push({name:title,url:url,detail:url});
}
JSON.stringify(items);
}else{
    alert("请输入完整阿里云盘分享链接");
}
}else{
    alert("请输入阿里云盘分享链接");
}
######图片预览11
var cm=android.webkit.CookieManager.getInstance();
var ALICOOKIE=cm.getCookie("www.aliyundrive.com");
    if(ALICOOKIE.indexOf("access_token")!=-1&&ALICOOKIE.indexOf("refresh_token")!=-1){
        var refresh_token=ALICOOKIE.match(/refresh_token=(.*?)[\s;]/)[1];
        var Acode=getHttp(JSON.stringify({url:"https://auth.aliyundrive.com/v2/account/token",postJson:JSON.stringify({refresh_token:refresh_token,grant_type:"refresh_token"})}));
        if(JSON.parse(Acode).access_token){
           var access_token=JSON.parse(Acode).access_token;
        }else{
            alert("登陆已过期，请重新在m浏览器登陆");
        }
    }else{
        alert("请重新登陆阿里云盘网页");
    }
var xxx_id=getVar("地址").split("$$")[0];
var file_id=getVar("地址").split("$$")[1];
if(xxx_id.indexOf("share_id")!=-1){
    var HEAD=JSON.stringify({"Authorization":access_token,"X-Share-Token":getVar("share_token")});
    var data=JSON.stringify({share_id:xxx_id.split("-")[1],file_id:file_id,expire_sec:600});
    var code=getHttp(JSON.stringify({url:"https://api.aliyundrive.com/v2/file/get_share_link_download_url",head:JSON.parse(HEAD),postJson:data}));
if(JSON.parse(code).code){
alert(JSON.parse(code).code)
}else{
var resp=JZ(JSON.stringify({url:JSON.parse(code).download_url,redirect:false,head:{"Referer":"https://www.aliyundrive.com/"}}));
var url=resp.head.location+'@{"Referer":"https://www.aliyundrive.com/"}';
JSON.stringify([{url:url}]);
}
}else if(xxx_id.indexOf("drive_id")!=-1){
    var 过滤=JSON.parse(getVar("目录重组数据")).filter(item=>item.category=="image");
    var items=[];
for(var i in 过滤){
    var url=过滤[i].download_url+'@{"Referer":"https://www.aliyundrive.com/"}';
    items.push({url:url});
}
JSON.stringify(items);
}
######QJS12
ZXZhbChmdW5jdGlvbihwLGEsYyxrLGUsZCl7ZT1mdW5jdGlvbihjKXtyZXR1cm4oYzxhPycnOmUocGFyc2VJbnQoYy9hKSkpKygoYz1jJWEpPjM1P1N0cmluZy5mcm9tQ2hhckNvZGUoYysyOSk6Yy50b1N0cmluZygzNikpfTtpZighJycucmVwbGFjZSgvXi8sU3RyaW5nKSl7d2hpbGUoYy0tKWRbZShjKV09a1tjXXx8ZShjKTtrPVtmdW5jdGlvbihlKXtyZXR1cm4gZFtlXX1dO2U9ZnVuY3Rpb24oKXtyZXR1cm4nXFx3Kyd9O2M9MX07d2hpbGUoYy0tKWlmKGtbY10pcD1wLnJlcGxhY2UobmV3IFJlZ0V4cCgnXFxiJytlKGMpKydcXGInLCdnJyksa1tjXSk7cmV0dXJuIHB9KCcoMTkoKXsyTyAyTT17fTsyTyAxUj0xLjA7Mk8gMmU9MlYuMjYuRi4xZSgpOzJPIDJsPTJWLjJSLjFWLjFoKCk7Mk8gMng9MUguMUM7Mk8gMko9MUguMU07Mk8gMk09MnguVy4ybzsyTyAyUT0yOSgpKzJNK1wnQS8yZFwnKzJNKzFCKCkuMnEuMncoMCwzKStcJyQkJFwnKzFCKCkuMVcrMk07MUU9KDJOKT0+MkkgMk49PT1cJzJ1XCc7MTkgMUQoMlEpe1AgMkg9MkkgMlE7MmsgMlEhPTIxJiYoMkg9PVwnMjRcJ3x8Mkg9PVwnMTlcJyl9Mk8gMlY9MUguMkwuTjsyTyAyVz0xWCAyVi5ULjFZKCk7MTkgMnooMlEpezIzPXtHOjE5KCl7MmsgMlEoKX0sfTsyTyBBPTFYIDJWLjF3KDIzKTsyVy4ydihBKTsyayBBfTE5IEooMlEsQSl7MVAgMUE9MDsxUCAyaj1bXTsyUygxQTwyUS4xTyl7MmouMmMoMlEuMnMoMUEsMUErQSkpOzFBKz1BfTJrIDJqLjE1KCgyMik9PjIyLjFPPjApfTE5IDJ2KDFMLDFWKXtGPVtdOzFRPUooMUwsMUwuMU8vMVYpOzJPIDFWPTA7MlMoMVY8MVEuMU8pezE5IDFMKDJVKXsyayAxOSAyMigpezJPIDJRPVtdOzE4KDFQIDF3PTA7MXc8MVFbMlVdLjFPOzF3KyspezJRLjJjKDFRWzJVXVsxd10oKSl9MmsgMlF9fUYuMmMoMnooMUwoMVYpKSk7MVYrK30yayBGfTE5IDFVKDEzKXsyTyAyUT0xMy4xZygpOzF4KCEyUS4xMigpKTJRLjFVKCl9MTkgMlQoMlEsQSl7Mk8gRj0xWCAyeC5XKDJRK1wn5pWw5o2uXCcrMk0rQSk7MVUoRik7Mk8gVD0xWCAyeC4xayhGLDE0KTtULjJUKDJRKTtULk0oKX0xOSAyZygyUSl7Mk8gQT0xWCAyeC5XKDJRK1wn5pWw5o2uXCcrMk0rMlEpOzJPIEY9MDsxeCghQS4xMigpfHwoRj1BLjFPKCkpPT0wKTJrXCdcJzsyTyBUPTJKLjJoLjYuMVooMkouOC4ybCxGKTsyTyBXPTFYIDJ4LjEzKEEpO1cuMmcoVCk7Vy5NKCk7MmsgMVggMkouMmUoVCl9Mk8gNT0yNy4yNS4xSjsyTyA3PTUuMlEuMVI7MTkgMXEoMjIpezFQezJLLDFvLDI4LDFJLEksMVQsMmZ9PTIyOzJPIDJRPTUuMUwuTygySyk7MlEuMXkoMkYpOzJRLjJiKEkpOzJRLjFTKDIpOzJmPT09MTQ/MlEuMTcoMmYpOjJRLjE3KDJGKTsxeCgxRCgxbykpMTgoMlUgMXogMW8pMlEuMW8oMlUsMW9bMlVdKTsxeCgxRCgyOCkpezF4KDFJPT09MkYpMlEuMmkoMjgpO1kgMTgoMjcgMXogMjgpMlEuVSgyNywyOFsyN10pfTJPIEE7MXgoMUk9PT0yRnx8MVQ9PVwnMmFcJylBPTJRLjFUKDcuMjIpLjExKCk7WSBBPTJRLjFUKDcuMUcpLjExKCk7MmsgQX0xOSAxcigyUSxBKXsyUS5JKEEpOzJrIDJRLkQoKX0xOSAxcygyUSxBKXsyayBBK1wnPVwnKzJRLlIoQSl9MTkgMXQoMlEpezJPIEE9XCdcJzsyTyBGPTJRLlMoKS5aKCkuMUYoKTsyUyhGLjFsKCkpezJPIFQ9Ri4yMCgpO0ErPVQuMWYoKStcJz1cJytULjFpKCkrXCc7XCd9MmsgQX0xOSAxdSgyUSxBKXsyayAyUS4xbyhBKX0xOSAxdigyUSl7Mk8gQT1cJ1wnOzJPIEY9MlEuMXAoKS5aKCkuMUYoKTsyUyhGLjFsKCkpezJPIFQ9Ri4yMCgpO0ErPVQuMWYoKStcJz1cJytULjFpKCkrXCc7XCd9MmsgQX0xOSAyRSgyUSl7Mk8gQT0yUS4xTihcJy9cJyk7MXgoMlEuMU8oKT09QSsxKXsyUT0yUS4ydygwLEEpOzJrIDJFKDJRKX0yayAyUS4ydygwLDJRLjFOKFwnLlwnKSl9MTkgVigyMil7Mkd7MVB7MnAsMkF9PTIyOzJPIDJRPTFxKDIyKTsyTyBBPTJFKDJRLjJLKCkuMkMoKSk7Mk8gRj0ybC4xZCgyUS5RKCkuMnQoXCc7XCcpWzBdKTsyTyBUPUEuMncoQS4xTihcJy9cJykrMSkrXCcuXCcrRjsybT0xRSgycCk/MnArMk0rVDoyUStcJ+S4i+i9vVwnKzJNK1Q7Mk8gMTM9MlEuRSgpOzJPIDFhPTFYIDJKLjJoLjYuMVooMkouOC4ybCw0KTsyTyAxaz0wOzJPIDF3PTFYIDJ4LjkoKTsyUygoMWs9MTMuMmcoMWEpKSE9LTEpezF3LjJUKDFhLDAsMWspfTJPIDFHPTFYIDJ4LlcoMm0pOzFVKDFHKTsyTyAxSz0xWCAyeC4xYSgxRyk7MUsuMlQoMXcuMkIoKSk7MXgoMkE9PT0xNCkyayAybTsyRChcJ+S4i+i9veaIkOWKn++8jOi3r+W+hDpcJysybSk7MmsgMm19SChXKXsxMChXKTsyRChcJ+S4i+i9veWksei0pSzor7fmiZPlvIDosIPor5Xlj7Dmn6XnnIvlhbfkvZPlvILluLjkv6Hmga9cJyl9MTZ7MXgoMXchPTIxKTF3Lk0oKTsxeCgxSyE9MjEpMUsuTSgpOzF4KDEzIT0yMSkxMy5NKCl9fTE5IDEwKFcpezFFKFcpP+aKpemUmShXKTrmiqXplJkoVy4yQygpKX0xOSAyRCgyUSl7MlUoMlEpfTE5IEIoKXsxWCAyNy4yVi4yVy4xSygpLjJuKDMpfTE5IDI5KCl7MmsgMmUuMWMoKS4yQygpfTE5IDJyKDJRKXsxSC4xTS4yeC4ycigyUSl9MTkgMUIoKXsyMj17fTsyMi4ycT1YKDFqKFwncVwnKSxcJy4xYigycSkuMngoKVwnKTsyMi4yUD1YKDFqKFwncVwnKSxcJy4xYigyUCkuMngoKVwnKTsyMi4xVz1YKDFqKFwncVwnKSxcJy4xYigxVykuMngoKVwnKTsyayAyMn0yTS4ySj0xUjsyTS4yZz0yZzsyTS4yVD0yVDsyTS4ycj0ycjsyTS4yej0yejsyTS4ydj0ydjsyTS5KPUo7Mk0uQj1COzJNLjFFPTFFOzJNLjFxPTFxOzJNLkM9MXI7Mk0uSz0xczsyTS5MPTF0OzJNLjFtPTF1OzJNLjFuPTF2OzJNLlY9VjsyTS4xQj0xQjsyTS4yRD0yRDsyTS4xMD0xMDsyeS4yTT0yTX0uRygyeSkpOycsNjIsMTgzLCd8fDEwNDg1NzYwMDB8NHw0MDk2fEF8QXJyYXl8QnxCeXRlfEJ5dGVBcnJheU91dHB1dFN0cmVhbXxDb25uZWN0aW9ufERvd25sb2FkfEVudmlyb25tZW50fEV4ZWN1dG9yc3xGaWxlfEZpbGVJbnB1dFN0cmVhbXxGaWxlT3V0cHV0U3RyZWFtfEZpbGVXcml0ZXJ8RnV0dXJlVGFza3xHRVR8SW5zdHJ1bWVudGF0aW9ufEpzb3VwfE1ldGhvZHxNaW1lVHlwZU1hcHxQT1NUfFBhY2thZ2VzfFFNSU5GT3xTdHJpbmd8VFlQRXxUaHJlYWR8VkVSU0lPTnxffGF8YWxlcnR8YW5kcm9pZHxhcHB8YnxiYWNrfGJkfGJvZHl8Ym9keVN0cmVhbXxjfGNhbGx8Y2F0Y2h8Y2hhcnNldHxjaHVua3xja3xja3N8Y2xvc2V8Y29uY3VycmVudHxjb25uZWN0fGNvbnN0fGNvbnRlbnRUeXBlfGNvb2tpZXxjb29raWVzfGR8ZGF0YXxkb3dubG9hZHxlfGUyUmV4fGVsc2V8ZW50cnlTZXR8ZXJyb3J8ZXhlY3V0ZXxleGlzdHN8ZnxmYWxzZXxmaWx0ZXJ8ZmluYWxseXxmb2xsb3dSZWRpcmVjdHN8Zm9yfGZ1bmN0aW9ufGd8Z2V0fGdldEFic29sdXRlUGF0aHxnZXRFeHRlbnNpb25Gcm9tTWltZVR5cGV8Z2V0RXh0ZXJuYWxTdG9yYWdlRGlyZWN0b3J5fGdldEtleXxnZXRQYXJlbnRGaWxlfGdldFNpbmdsZXRvbnxnZXRWYWx1ZXxnZXRWYXJ8aHxoYXNOZXh0fGhkfGhkc3xoZWFkZXJ8aGVhZGVyc3xodHRwfGh0dHBCb2R5fGh0dHBDb29raWV8aHR0cENvb2tpZXN8aHR0cEhlYWRlcnxodHRwSGVhZGVyc3xpfGlmfGlnbm9yZUNvbnRlbnRUeXBlfGlufGluZGV4fGluZm98aW98aXNPYmplY3R8aXNTdHJpbmd8aXRlcmF0b3J8anxqYXZhfGpzb258anNvdXB8a3xsfGxhbmd8bGFzdEluZGV4T2Z8bGVuZ3RofGxldHxsaXN0fG18bWF4Qm9keVNpemV8bWV0aG9kfG1rZGlyc3xufG5hbWV8bmV3fG5ld0NhY2hlZFRocmVhZFBvb2x8bmV3SW5zdGFuY2V8bmV4dHxudWxsfG98b2JqfG9iamVjdHxvcmd8b3N8cHxwYXJhbXN8cGF0aHxwb3N0fHBvc3REYXRhQ2hhcnNldHxwdXNofHFtfHJ8cmV8cmVhZHxyZWZsZWN0fHJlcXVlc3RCb2R5fHJlc3xyZXR1cm58c3xzYXZlcGF0aHxzZW5kS2V5RG93blVwU3luY3xzZXBhcmF0b3J8c2V0cGF0aHxzaWdufHNsZWVwfHNsaWNlfHNwbGl0fHN0cmluZ3xzdWJtaXR8c3Vic3RyaW5nfHR8dGhpc3x0aHJlYWR8dGlwc3x0b0J5dGVBcnJheXx0b1N0cmluZ3x0b2FzdHx0cmltVXx0cnVlfHRyeXx0eXBlfHR5cGVvZnx1fHVybHx1dGlsfHZ8dmFsfHZhcnx2ZXJzaW9ufHd8d2Via2l0fHdoaWxlfHdyaXRlfHh8eXx6Jy5zcGxpdCgnfCcpLDAse30pKQ==
