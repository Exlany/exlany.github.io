require([],function(){var i=!1,e=function(){require([yiliaConfig.rootUrl+"js/mobile.js"],function(e){e.init(),i=!0})},t=!1,n=function(){require([yiliaConfig.rootUrl+"js/pc.js"],function(i){i.init(),t=!0})},a={versions:function(){var i=window.navigator.userAgent;return{trident:i.indexOf("Trident")>-1,presto:i.indexOf("Presto")>-1,webKit:i.indexOf("AppleWebKit")>-1,gecko:i.indexOf("Gecko")>-1&&i.indexOf("KHTML")==-1,mobile:!!i.match(/AppleWebKit.*Mobile.*/),ios:!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:i.indexOf("Android")>-1||i.indexOf("Linux")>-1,iPhone:i.indexOf("iPhone")>-1||i.indexOf("Mac")>-1,iPad:i.indexOf("iPad")>-1,webApp:i.indexOf("Safari")==-1,weixin:i.indexOf("MicroMessenger")==-1}}()};$(window).bind("resize",function(){if(i&&t)return void $(window).unbind("resize");var a=$(window).width();a>=700?n():e()}),a.versions.mobile||$(window).width()<800?e():n(),resetTags=function(){for(var i=$(".tagcloud a"),e=0;e<i.length;e++){var t=Math.floor(7*Math.random());i.eq(e).addClass("color"+t)}$(".article-category a:nth-child(-n+2)").attr("class","color0")},yiliaConfig.fancybox&&require([yiliaConfig.fancybox_js],function(i){var e=$(".isFancy");if(0!=e.length){for(var t=$(".article-inner img"),n=0,a=t.length;n<a;n++){var o=t.eq(n).attr("src"),r=t.eq(n).attr("alt");if("undefined"==typeof r)var r=t.eq(n).attr("title");var c=t.eq(n).attr("width"),l=t.eq(n).attr("height");t.eq(n).replaceWith("<a href='"+o+"' title='"+r+"' rel='fancy-group' class='fancy-ctn fancybox'><img src='"+o+"' width="+c+" height="+l+" title='"+r+"' alt='"+r+"'></a>")}$(".article-inner .fancy-ctn").fancybox({type:"image"})}}),yiliaConfig.animate&&(yiliaConfig.isHome?require([yiliaConfig.scrollreveal],function(i){function e(){$(".article").each(function(){$(this).offset().top<=$(window).scrollTop()+$(window).height()&&!$(this).hasClass("show")?($(this).removeClass("hidden").addClass("show"),$(this).addClass("is-hiddened")):$(this).hasClass("is-hiddened")||$(this).addClass("hidden")})}var t=["pulse","fadeIn","fadeInRight","flipInX","lightSpeedIn","rotateInUpLeft","slideInUp","zoomIn"],n=t.length,a=t[Math.ceil(Math.random()*n)-1];if(!window.requestAnimationFrame)return $(".body-wrap > article").css({opacity:1}),void(navigator.userAgent.match(/Safari/i)&&($(window).on("scroll",function(){e()}),e()));var o=".body-wrap > article",r=$(".body-wrap > article:first-child");if(r.height()>$(window).height()){var o=".body-wrap > article:not(:first-child)";r.css({opacity:1})}i({duration:0,afterReveal:function(i){$(i).addClass("animated "+a).css({opacity:1})}}).reveal(o)}):$(".body-wrap > article").css({opacity:1})),yiliaConfig.toc&&require(["toc"],function(){});var o=["#000000"],r=Math.ceil(Math.random()*(o.length-1));$("#container .left-col .overlay").css({"background-color":o[r],opacity:.3}),$("#container #mobile-nav .overlay").css({"background-color":o[r],opacity:.7}),$("table").wrap("<div class='table-area'></div>"),$(document).ready(function(){$("#comments").length<1&&$("#scroll > a:nth-child(2)").hide()}),(yiliaConfig.isArchive||yiliaConfig.isTag||yiliaConfig.isCategory)&&$(document).ready(function(){$("#footer").after("<button class='hide-labels'>TAGS</button>"),$(".hide-labels").click(function(){$(".article-info").toggle(200)})}),$("ul > li").each(function(){function i(i,e){var t=["disabled",""];o.html(o.html().replace(i,"<input type='checkbox' "+e+" "+t[1]+" >"))}var e={field:this.textContent.substring(0,2),check:function(i){var e=new RegExp(i);return this.field.match(e)}},t=["[ ]",["[x]","checked"]],n=e.check(t[1][0]),a=e.check(t[0]),o=$(this);(n||a)&&(this.classList.add("task-list"),n?(i(t[1][0],t[1][1]),this.classList.add("check")):i(t[0],""))})});