function pngfix(a){if(!window.XMLHttpRequest)a.outerHTML='<span class="'+a.className+'" title="'+a.title+'" style="width:'+a.clientWidth+"px; height:"+a.clientHeight+"px;"+("display:inline-block; "+a.style.cssText)+";filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+a.src+"', sizingMethod='crop');\"></span>"}
var $=function(a){return document.getElementById(a)},TPL='<a href="http://tool.114la.com/tianqi/#{cityid}" title="\u70b9\u51fb\u67e5\u770b\u672a\u6765\u51e0\u5929\u5929\u6c14\u9884\u62a5" target="_blank"><strong>#{city}</strong>&nbsp;<strong>\u4eca\u5929</strong>&nbsp;<img align="absmiddle" onload="pngfix(this)" class="i" src="images/i/#{img1}.png" />&nbsp;#{today}&nbsp;&nbsp;<strong>\u660e\u5929</strong>&nbsp;<img align="absmiddle" onload="pngfix(this)" src="images/i/#{img2}.png" class="i" />&nbsp;#{tomorrow}</a>&nbsp;&nbsp;<a href="javascript:void(0);" onclick="Weather.set();return false;" target="_self">[\u9009\u62e9\u57ce\u5e02]</a>',Ylmf=
{Cookies:{set:function(a,c,b,d,f){if(typeof b=="undefined")b=new Date((new Date).getTime()+31536E6);document.cookie=a+"="+escape(c)+(b?"; expires="+b.toGMTString():"")+(d?"; path="+d:"; path=/")+(f?";domain="+f:"")},get:function(a){a=document.cookie.match(new RegExp("(^| )"+a+"=([^;]*)(;|$)"));if(a!=null)return unescape(a[2]);return null},clear:function(a,c,b){if(this.get(a))document.cookie=a+"="+(c?"; path="+c:"; path=/")+(b?"; domain="+b:"")+";expires=Fri, 02-Jan-1970 00:00:00 GMT"}},format:function(a,
c){if(arguments.length>1){var b=Ylmf.format,d=/([.*+?^=!:${}()|[\]\/\\])/g,f=(b.left_delimiter||"{").replace(d,"\\$1"),e=(b.right_delimiter||"}").replace(d,"\\$1");d=b._r1||(b._r1=new RegExp("#"+f+"([^"+f+e+"]+)"+e,"g"));b=b._r2||(b._r2=new RegExp("#"+f+"(\\d+)"+e,"g"));if(typeof c=="object")return a.replace(d,function(j,h){var i=c[h];if(typeof i=="function")i=i(h);return typeof i=="undefined"?"":i});else if(typeof c!="undefined"){var g=Array.prototype.slice.call(arguments,1),k=g.length;return a.replace(b,
function(j,h){h=parseInt(h,10);return h>=k?j:g[h]})}}return a},getProId:function(a){for(var c,b=0,d=CityArr.length;b<d;++b)if(CityArr[b][0]==a&&parseInt(CityArr[b][2])<900)c=CityArr[b][2];return c},getCityId:function(a,c){if(!a)return false;for(var b,d=0,f=CityArr.length;d<f;++d)if(CityArr[d][1]==a&&CityArr[d][0]==c)b=CityArr[d][2];return b},getCitys:function(a){if(!a)return false;for(var c=[],b=0,d=CityArr.length;b<d;++b)CityArr[b][1]==a&&c.push(CityArr[b]);return c},getSelectValue:function(a){var c=
a.selectedIndex;if(c>-1){a=a.options[c];return a=a.innerHTML.split(" ")[1]}return null},ScriptLoader:{Add:function(a){if(a&&a.src){var c=document.getElementsByTagName("head")[0],b=document.createElement("script");b.onload=b.onreadystatechange=function(){if(!(b&&b.readyState&&b.readyState!="loaded"&&b.readyState!="complete")){b.onload=b.onreadystatechange=b.onerror=null;b.Src="";document.all||b.parentNode.removeChild(b);b=null}};b.src=a.src;b.charset=a.charset||"gb2312";c.insertBefore(b,c.firstChild)}}}},
W=document.getElementById("weather"),Weather={CityCookieName:"citydata",WeatherCookieName:"weather",DefaultCity:["109","101010100","101010100","\u5317\u4eac","\u5317\u4eac"],StatIPQueue:[],StatGetQueue:[],ShowStatus:function(a,c){if(a){var b;switch(a){case 100:b='\u6b63\u5728\u5224\u65ad\u57ce\u5e02\uff0c\u8bf7\u7a0d\u540e...&nbsp; <a href="javascript:void(0);" onclick="Weather.Set();return false;" target="_self">[\u624b\u52a8\u8bbe\u7f6e]</a> <a href="http://tool.114la.com/tianqi/" target="_blank">\u5feb\u901f\u67e5\u770b</a>';
break;case 101:b="\u5224\u65ad\u57ce\u5e02\u5931\u8d25\uff0c\u9ed8\u8ba4\u4e3a\u5317\u4eac\uff0c\u8bf7\u624b\u52a8\u8bbe\u7f6e\u3002";break;case 102:b='\u6b63\u5728\u83b7\u53d6\u5929\u6c14\u6570\u636e\uff0c\u8bf7\u7a0d\u5019... <a href="http://tool.114la.com/tianqi/" target="_blank">\u5feb\u901f\u67e5\u770b</a>';break;case 404:b='\u5f88\u62b1\u6b49\uff0c\u6682\u65e0\u8be5\u57ce\u5e02\u5929\u6c14\u6570\u636e\u3002<a href="javascript:void(0);" onclick="Weather.Set();return false;" target="_self">[\u9009\u62e9\u5176\u5b83\u57ce\u5e02]</a>';
break;case 500:b='\u670d\u52a1\u5668\u9519\u8bef\u6216\u672c\u5730\u7f51\u7edc\u8fc7\u6162\u3002<a href="###" onclick="window.location.reload();">[\u70b9\u51fb\u91cd\u8bd5]</a>';break;case 200:b=Ylmf.format('<a href="http://tool.114la.com/tianqi/#{cityid}" title="\u70b9\u51fb\u67e5\u770b\u672a\u6765\u51e0\u5929\u5929\u6c14\u9884\u62a5" target="_blank"><strong>#{city}</strong>&nbsp;<strong>\u4eca\u5929</strong>&nbsp;<img align="absmiddle" onload="pngfix(this)" class="i" src="images/i/#{img1}.png" />&nbsp;#{today}&nbsp;&nbsp;<strong>\u660e\u5929</strong>&nbsp;<img align="absmiddle" onload="pngfix(this)" src="images/i/#{img2}.png" class="i" />&nbsp;#{tomorrow}</a>&nbsp;&nbsp;<a href="javascript:void(0);" onclick="Weather.Set();return false;" target="_self">[\u9009\u62e9\u57ce\u5e02]</a>',
{cityid:c[3],city:c[0],today:c[1],tomorrow:c[2],img1:c[4],img2:c[5]});break}W.innerHTML=b}},Ip2City:function(a){this.ShowStatus(100);Ylmf.ScriptLoader.Add({src:"http://api.115.com/ip",charset:"gb2312"});var c=this;typeof b!="undefined"&&window.clearTimeout(b);var b=window.setTimeout(function(){Ylmf.Cookies.clear(this.CityCookieName);a&&a(c.DefaultCity)},3E3);window.ILData_callback=function(){if(typeof ILData!="undefined"){typeof b!="undefined"&&window.clearTimeout(b);if(ILData[2]&&ILData[3]){var d=
Ylmf.getProId(ILData[2]),f=Ylmf.getCityId(d,ILData[3]);d=[d,f,f,ILData[2],ILData[3]];Ylmf.Cookies.set(c.CityCookieName,d);a&&a(d)}}}},Get:function(a){if(a){var c=a.slice(3,7),b=this.ShowStatus,d=this;b(102);typeof f!="undefined"&&window.clearTimeout(f);var f=window.setTimeout(function(){b(500);Ylmf.Cookies.clear(this.CityCookieName)},5E3);c="http://weather.api.115.com/"+c+"/"+a+".txt";c+="?"+parseInt(Math.random()*99);Ylmf.Cookies.get(this.WeatherCookieName);Ylmf.ScriptLoader.Add({src:c.toString(),
charset:"utf-8"});window.Ylmf.getWeather=function(e){window.clearTimeout(f);if(typeof e=="object"&&typeof e!="undefined"&&typeof e.weatherinfo!="undefined"&&e.weatherinfo!=false){var g=[e.weatherinfo.temp1+"&nbsp;"+e.weatherinfo.weather1,e.weatherinfo.temp2+"&nbsp;"+e.weatherinfo.weather2];if(e=[e.weatherinfo.city,g[0],g[1],a,e.weatherinfo.img1,e.weatherinfo.img3]){Weather.ShowStatus(200,e);Ylmf.Cookies.set(d.WeatherCookieName,1)}}else e.weatherinfo==false&&Weather.ShowStatus(404)}}},Init:function(){var a=
this;if(Ylmf.Cookies.get(this.CityCookieName)){var c=Ylmf.Cookies.get(this.CityCookieName).split(",");if(!c[2]){Ylmf.Cookies.clear(this.CityCookieName);a.Init()}this.Get(c[2])}else this.Ip2City(function(b){var d=Ylmf.Cookies.get(a.CityCookieName);if(d){d=d.split(",");a.Get(d[2])}else a.Get(b[2])})},getAreas:function(a,c){a=a.slice(3,7);Ylmf.ScriptLoader.Add({src:"http://weather.api.115.com/"+a+"/"+a+".txt",charset:"utf-8"});Ylmf.getAreaCity=function(b){typeof b=="object"&&typeof b.result!="undefined"&&
typeof b.result[0][0]!="undefined"&&c(b.result)}},initCitys:function(a){if(a){$("w_city").innerHTML="";for(var c=0,b=CityArr.length;c<b;++c){var d=CityArr[c];if(d[1]==a){var f=document.createElement("option");f.value=d[2];f.innerHTML=d[3]+"&nbsp;"+d[0];$("w_city").appendChild(f)}}$("w_city").selectedIndex=0}},initAreaCitys:function(a,c){$("l_city").innerHTML="";this.getAreas(a,function(b){for(var d=0,f=b.length;d<f;++d){var e=b[d],g=document.createElement("option");if(e[0]==a)g.selected=true;g.value=
e[0];g.innerHTML=e[2]+"&nbsp;"+e[1];$("l_city").appendChild(g)}c&&c()})},Set:function(){W.style.display="none";$("setCityBox").style.display="";var a=Ylmf.Cookies.get(this.CityCookieName);a=a?a.split(","):this.DefaultCity;$("w_pro").value=a[0];this.initCitys(a[0]);$("w_city").value=a[1];this.initAreaCitys(a[2])},cp:function(a){this.initCitys(a);$("w_city").selectedIndex=0;this.cc($("w_city").value)},cc:function(a){this.initAreaCitys(a,function(){})},custom:function(){var a=Ylmf.Cookies.get(this.CityCookieName);
a=a?a.split(","):this.DefaultCity;var c=[$("w_pro").value,$("w_city").value,$("l_city").value?$("l_city").value:$("w_city").value,Ylmf.getSelectValue($("w_pro")),Ylmf.getSelectValue($("w_city"))];if(a[2]!=c[2]){this.Get(c[2]);Ylmf.Cookies.set(this.CityCookieName,c)}$("setCityBox").style.display="none";W.style.display=""},autoLoad:function(){Ylmf.Cookies.clear(this.CityCookieName);Ylmf.Cookies.clear(this.WeatherCookieName);window.location.reload()}};Weather.Init();
