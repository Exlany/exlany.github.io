define([],function(){var e,t,n,i,d,o,s,a,r=!1,c=function(){d=document.body.scrollHeight/document.body.scrollWidth,o=document.body.scrollWidth,s=0},l=function(){e&&(document.getElementById("js-mobile-tagcloud").innerHTML=e.innerHTML),t&&(document.getElementById("js-mobile-aboutme").innerHTML=t.innerHTML),n&&(document.getElementById("js-mobile-friends").innerHTML=n.innerHTML)},m=function(){function i(e){return $("link.menu-list").attr(e)}var d=document.createElement("div");d.id="viewer",d.className="hide",e=document.getElementById("js-tagcloud"),t=document.getElementById("js-aboutme"),n=document.getElementById("js-friends");var o=e?'<span class="viewer-title">'+i("tags")+'</span><div class="viewer-div tagcloud" id="js-mobile-tagcloud"></div>':"",s=n?'<span class="viewer-title">'+i("friends")+'</span><div class="viewer-div friends" id="js-mobile-friends"></div>':"",r=t?'<span class="viewer-title">'+i("about")+'</span><div class="viewer-div aboutme" id="js-mobile-aboutme"></div>':"";d.innerHTML='<div id="viewer-box">        <div class="viewer-box-l">            <div class="viewer-box-wrap">'+r+s+o+'</div>        </div>        <div class="viewer-box-r"></div>        </div>',document.getElementsByTagName("body")[0].appendChild(d);var c=document.getElementById("viewer-box");a=c,c.style.height=document.body.scrollHeight+"px"},u=function(e,t){document.getElementById("viewer").className="",setTimeout(function(){a.className="anm-swipe"},0),r=!0,document.ontouchstart=function(e){if("A"!=e.target.tagName)return!1}},v=function(){document.getElementById("viewer-box").className="",r=!1,document.ontouchstart=function(){return!0}},f=function(){document.getElementById("viewer-box").addEventListener("webkitTransitionEnd",function(){0==r&&(document.getElementById("viewer").className="hide",r=!0)},!1),i.addEventListener("touchend",function(){u()},!1);var e,t,n=document.getElementsByClassName("viewer-box-r")[0];n.addEventListener("touchstart",function(){e=+new Date},!1),n.addEventListener("touchend",function(){t=+new Date,t-e<300&&v(),e=0,t=0},!1),$(".slider-trigger").click(function(){u()}),$(".viewer-box-r").click(function(){v()});var d=$("#mobile-nav .overlay"),o=$(".js-mobile-header");window.onscroll=function(){var e=document.documentElement.scrollTop+document.body.scrollTop;e>=69?d.addClass("fixed"):d.removeClass("fixed"),e>=160?o.removeClass("hide").addClass("fixed"):o.addClass("hide").removeClass("fixed")},o[0].addEventListener("touchstart",function(){$("html, body").animate({scrollTop:0},"slow")},!1)};return{init:function(){i=document.getElementsByClassName("slider-trigger")[0],c(),m(),l(),f(),resetTags()}}});