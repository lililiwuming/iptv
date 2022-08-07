######远程订阅写入本地1
if(getVar("QJS")&&getVar("QJS")!="null"){
  eval(getVar("QJS"));
}else{
  eval(e2Rex(getHttp('https://gitcode.net/egwang186/iptv/-/raw/master/aliyun/QJS.js'),'.dn64()'));
}
var filename = '资源采集远程索引.txt';
var 记录 = "";
if (getVar("rurl") != 'null' && getVar("rurl").indexOf(",http") > 1) {
  记录 = getVar("rurl").match(/.+?,http.+/g);
  if (_.read(filename)) {
    var 旧记录 = _.read(filename).match(/.+?,http.+/g);
    var 新记录 = 记录.concat(旧记录.filter(item=>item!=记录[0]));
  } else {
    var 新记录 = 记录;
  }
  _.write(新记录.join("\n"), filename);
  _.read(filename);
} else {
  "请输入正确格式(支持批量):名称,地址";
}
######读取远程订阅2
if(getVar("QJS")&&getVar("QJS")!="null"){
  eval(getVar("QJS"));
}else{
  eval(e2Rex(getHttp('https://gitcode.net/egwang186/iptv/-/raw/master/aliyun/QJS.js'),'.dn64()'));
}
var filename = '资源采集远程索引.txt';
if (_.read(filename)) {
  var code = _.read(filename).match(/.+?,.+/g);
} else {
  var data = "内置,https://gitcode.net/egwang186/iptv/-/raw/master/zywcj/资源网采集.txt";
  _.write(data, filename);
  var code = _.read(filename).match(/.+?,.+/g);
}
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:资源采集首页?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######单一搜索读取远程订阅3
if(getVar("QJS")&&getVar("QJS")!="null"){
  eval(getVar("QJS"));
}else{
  eval(e2Rex(getHttp('https://gitcode.net/egwang186/iptv/-/raw/master/aliyun/QJS.js'),'.dn64()'));
}
var filename = '资源采集远程索引.txt';
var code = _.read(filename).match(/.+?,.+/g);
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:单一搜索?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######侧边栏搜索读取远程订阅4
if(getVar("QJS")&&getVar("QJS")!="null"){
  eval(getVar("QJS"));
}else{
  eval(e2Rex(getHttp('https://gitcode.net/egwang186/iptv/-/raw/master/aliyun/QJS.js'),'.dn64()'));
}
var filename = '资源采集远程索引.txt';
var code = _.read(filename).match(/.+?,.+/g);
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:侧边栏引导?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######管理订阅5
if(getVar("QJS")&&getVar("QJS")!="null"){
  eval(getVar("QJS"));
}else{
  eval(e2Rex(getHttp('https://gitcode.net/egwang186/iptv/-/raw/master/aliyun/QJS.js'),'.dn64()'));
}
var filename='资源采集远程索引.txt';
var code=_.read(filename).match(/.+?,.+/g);
var items=[];
for(var i in code){
var title=code[i].split(",")[0];
var url="q:管理订阅按钮?url="+code[i];
items.push({title:title,url:url});
}
JSON.stringify(items);
######QJS6
ZXZhbChmdW5jdGlvbihwLGEsYyxrLGUscil7ZT1mdW5jdGlvbihjKXtyZXR1cm4oYzw2Mj8nJzplKHBhcnNlSW50KGMvNjIpKSkrKChjPWMlNjIpPjM1P1N0cmluZy5mcm9tQ2hhckNvZGUoYysyOSk6Yy50b1N0cmluZygzNikpfTtpZignMCcucmVwbGFjZSgwLGUpPT0wKXt3aGlsZShjLS0pcltlKGMpXT1rW2NdO2s9W2Z1bmN0aW9uKGUpe3JldHVybiByW2VdfHxlfV07ZT1mdW5jdGlvbigpe3JldHVybicoWzIzNS05cUMtWl18MVxcdyknfTtjPTF9O3doaWxlKGMtLSlpZihrW2NdKXA9cC5yZXBsYWNlKG5ldyBSZWdFeHAoJ1xcYicrZShjKSsnXFxiJywnZycpLGtbY10pO3JldHVybiBwfSgnKDMoKXsyIF89e307MiBtPTEuMDsyIHI9MTAub3MuRW52aXJvbm1lbnQuZ2V0RXh0ZXJuYWxTdG9yYWdlRGlyZWN0b3J5KCk7MiBzPTEwLndlYmtpdC5NaW1lVHlwZU1hcC5nZXRTaW5nbGV0b24oKTsyIHQ9TS5pbzsyIHU9TS4xbjsyIHY9dC5OLnNlcGFyYXRvcjsyIHc9MW8oKSt2K1wncW1cJyt2K0MoKS4xMS5PKDAsNCkrXCckJCRcJytDKCkuMTIrdjtEPSgxcCk9PjFxIDFwPT09XCdzdHJpbmdcJzszIDEzKGEpe2NvbnN0IDE0PTFxIGE7NSBhIT1QJiYoMTQ9PVwnb2JqZWN0XCd8fDE0PT1cJzNcJyl9MiB5PU0udXRpbC5jb25jdXJyZW50OzIgej02IHkuRXhlY3V0b3JzLm5ld0NhY2hlZFRocmVhZFBvb2woKTszIFEoYSl7MXI9ezFzOjMoKXs1IGEoKX0sfTsyIGI9NiB5LkZ1dHVyZVRhc2soMXIpO3ouUihiKTs1IGJ9MyBTKGEsYil7RSBGPTA7RSAxNT1bXTtHKEY8YS44KXsxNS4xNihhLnNsaWNlKEYsRitiKSk7Ris9Yn01IDE1LmZpbHRlcigobyk9Pm8uOD4wKX0zIFIobCxuKXtjPVtdO1Q9UyhsLGwuOC9uKTsyIG49MDtHKG48VC44KXszIGwoeCl7NSAzIG8oKXsyIGE9W107MTcoRSBpPTA7aTxUW3hdLjg7aSsrKXthLjE2KFRbeF1baV0oKSl9NSBhfX1jLjE2KFEobChuKSkpO24rK301IGN9MyBVKGYpezIgYT1mLmdldFBhcmVudEZpbGUoKTs3KCFhLjF0KCkpYS5VKCl9MyA5KGEsYil7MiBjPTYgdC5OKHcrXCfmlbDmja5cJyt2K2IpO1UoYyk7MiBkPTYgdC5GaWxlV3JpdGVyKGMsMTgpO2QuOShhKTtkLkgoKX0zIEkoYSl7MiBiPTYgdC5OKHcrXCfmlbDmja5cJyt2K2EpOzIgYz0wOzcoIWIuMXQoKXx8KGM9Yi44KCkpPT0wKTVcJ1wnOzIgZD11LjF1LjF2LjF3KHUuMXguMXksYyk7MiBlPTYgdC5GaWxlSW5wdXRTdHJlYW0oYik7ZS5JKGQpO2UuSCgpOzUgNiB1LlN0cmluZyhkKX0yIEE9MXoub3JnLmpzb3VwOzIgQj1BLkNvbm5lY3Rpb24uTWV0aG9kOzMgVihvKXtFezE5LHEsSiwxYSwxYixXLHJlfT1vOzIgYT1BLkpzb3VwLmNvbm5lY3QoMTkpO2EuaWdub3JlQ29udGVudFR5cGUoWCk7YS5wb3N0RGF0YUNoYXJzZXQoMWIpO2EubWF4Qm9keVNpemUoMTA0ODU3NjAwMCk7cmU9PT0xOD9hLjFBKHJlKTphLjFBKFgpOzcoMTMocSkpMTcoeCBpbiBxKWEucSh4LHFbeF0pOzcoMTMoSikpezcoMWE9PT1YKWEucmVxdWVzdEJvZHkoSik7MUMgMTcocCBpbiBKKWEuZGF0YShwLEpbcF0pfTIgYjs3KDFhPT09WHx8Vz09XCdwb3N0XCcpYj1hLlcoQi5QT1NUKS4xRCgpOzFDIGI9YS5XKEIuR0VUKS4xRCgpOzUgYn0zIDFFKGEsYil7YS4xYihiKTs1IGEuYm9keSgpfTMgMUYoYSxiKXs1IGIrXCc9XCcrYS5jb29raWUoYil9MyAxRyhhKXsyIGI9XCdcJzsyIGM9YS5jb29raWVzKCkuMUgoKS4xSSgpO0coYy4xSigpKXsyIGQ9Yy4xSygpO2IrPWQuMUwoKStcJz1cJytkLjFNKCkrXCc7XCd9NSBifTMgMU4oYSxiKXs1IGEucShiKX0zIDFPKGEpezIgYj1cJ1wnOzIgYz1hLmhlYWRlcnMoKS4xSCgpLjFJKCk7RyhjLjFKKCkpezIgZD1jLjFLKCk7Yis9ZC4xTCgpK1wnPVwnK2QuMU0oKStcJztcJ301IGJ9MyAxZChhKXsyIGI9YS4xZShcJy9cJyk7NyhhLjgoKT09YisxKXthPWEuTygwLGIpOzUgMWQoYSl9NSBhLk8oMCxhLjFlKFwnLlwnKSl9MyAxZihvKXt0cnl7RXsxZywxUH09bzsyIGE9VihvKTsyIGI9MWQoYS4xOSgpLjFoKCkpOzIgYz1zLmdldEV4dGVuc2lvbkZyb21NaW1lVHlwZShhLmNvbnRlbnRUeXBlKCkuc3BsaXQoXCc7XCcpWzBdKTsyIGQ9Yi5PKGIuMWUoXCcvXCcpKzEpK1wnLlwnK2M7Sz1EKDFnKT8xZyt2K2Q6dytcJ+S4i+i9vVwnK3YrZDsyIGY9YS5ib2R5U3RyZWFtKCk7MiBnPTYgdS4xdS4xdi4xdyh1LjF4LjF5LDQwOTYpOzIgaD0wOzIgaT02IHQuQnl0ZUFycmF5T3V0cHV0U3RyZWFtKCk7RygoaD1mLkkoZykpIT0tMSl7aS45KGcsMCxoKX0yIGo9NiB0Lk4oSyk7VShqKTsyIGs9NiB0LkZpbGVPdXRwdXRTdHJlYW0oaik7ay45KGkudG9CeXRlQXJyYXkoKSk7NygxUD09PTE4KTUgSztMKFwn5LiL6L295oiQ5Yqf77yM6Lev5b6EOlwnK0spOzUgS31jYXRjaChlKXtZKGUpO0woXCfkuIvovb3lpLHotKUs6K+35omT5byA6LCD6K+V5Y+w5p+l55yL5YW35L2T5byC5bi45L+h5oGvXCcpfWZpbmFsbHl7NyhpIT1QKWkuSCgpOzcoayE9UClrLkgoKTs3KGYhPVApZi5IKCl9fTMgWShlKXtEKGUpP+aKpemUmShlKTrmiqXplJkoZS4xaCgpKX0zIEwoYSl7YWxlcnQoYSl9MyAxaSgpezYgMXouMTAuYXBwLkluc3RydW1lbnRhdGlvbigpLnNlbmRLZXlEb3duVXBTeW5jKDQpfTMgMW8oKXs1IHIuZ2V0QWJzb2x1dGVQYXRoKCkuMWgoKX0zIFooYSl7TS4xbi5UaHJlYWQuWihhKX0zIEMoKXtvPXt9O28uMTE9MWooMWsoXCcxbFwnKSxcJy4xbSgxMSkudCgpXCcpO28uMVE9MWooMWsoXCcxbFwnKSxcJy4xbSgxUSkudCgpXCcpO28uMTI9MWooMWsoXCcxbFwnKSxcJy4xbSgxMikudCgpXCcpOzUgb31fLlZFUlNJT049bTtfLkk9STtfLjk9OTtfLlo9WjtfLlE9UTtfLlI9UjtfLlM9UztfLjFpPTFpO18uRD1EO18uVj1WO18uYmQ9MUU7Xy5jaz0xRjtfLmNrcz0xRztfLmhkPTFOO18uaGRzPTFPO18uMWY9MWY7Xy5DPUM7Xy5MPUw7Xy5ZPVk7MVIuXz1ffS4xcygxUikpOycsW10sMTE2LCd8fHZhcnxmdW5jdGlvbnx8cmV0dXJufG5ld3xpZnxsZW5ndGh8d3JpdGV8fHx8fHx8fHx8fHx8fHx8fGhlYWRlcnx8fHx8fHx8fHx8fGluZm98aXNTdHJpbmd8bGV0fGluZGV4fHdoaWxlfGNsb3NlfHJlYWR8cGFyYW1zfHNhdmVwYXRofHRvYXN0fGphdmF8RmlsZXxzdWJzdHJpbmd8bnVsbHx0aHJlYWR8c3VibWl0fGNodW5rfGxpc3R8bWtkaXJzfGh0dHB8bWV0aG9kfHRydWV8ZXJyb3J8c2xlZXB8YW5kcm9pZHxzaWdufG5hbWV8aXNPYmplY3R8dHlwZXxyZXN8cHVzaHxmb3J8ZmFsc2V8dXJsfGpzb258Y2hhcnNldHx8dHJpbVV8bGFzdEluZGV4T2Z8ZG93bmxvYWR8c2V0cGF0aHx0b1N0cmluZ3xiYWNrfGUyUmV4fGdldFZhcnxRTUlORk98Z2V0fGxhbmd8cGF0aHx2YWx8dHlwZW9mfG9ianxjYWxsfGV4aXN0c3xyZWZsZWN0fEFycmF5fG5ld0luc3RhbmNlfEJ5dGV8VFlQRXxQYWNrYWdlc3xmb2xsb3dSZWRpcmVjdHN8fGVsc2V8ZXhlY3V0ZXxodHRwQm9keXxodHRwQ29va2llfGh0dHBDb29raWVzfGVudHJ5U2V0fGl0ZXJhdG9yfGhhc05leHR8bmV4dHxnZXRLZXl8Z2V0VmFsdWV8aHR0cEhlYWRlcnxodHRwSGVhZGVyc3x0aXBzfHZlcnNpb258dGhpcycuc3BsaXQoJ3wnKSwwLHt9KSk=
