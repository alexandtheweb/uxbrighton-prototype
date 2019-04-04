function scrollTo(t,e,o){function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function n(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}var s=n(),r=t-s,a=0,l=20;o=void 0===o?500:o;var c=function(){var t;a+=20,i(Math.easeOutCubic(a,s,r,o)),a<o?requestAnimFrame(c):e&&"function"==typeof e&&e()};c()}!function(t){"use strict";function e(o,i){this.$body=t(document.body),this.$scrollElement=t(o).is(document.body)?t(window):t(o),this.options=t.extend({},e.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function o(o){return this.each(function(){var i=t(this),n=i.data("bs.scrollspy"),s="object"==typeof o&&o;n||i.data("bs.scrollspy",n=new e(this,s)),"string"==typeof o&&n[o]()})}e.VERSION="3.3.7",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,o="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(o="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),n=e.data("target")||e.attr("href"),s=/^#./.test(n)&&t(n);return s&&s.length&&s.is(":visible")&&[[s[o]().top+i,n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var e=this.$scrollElement.scrollTop()+this.options.offset,o=this.getScrollHeight(),i=this.options.offset+o-this.$scrollElement.height(),n=this.offsets,s=this.targets,r=this.activeTarget,a,l,c;if(this.scrollHeight!=o&&this.refresh(),e>=i)return r!=(a=s[s.length-1])&&this.activate(a);if(r&&e<n[0])return this.activeTarget=null,this.clear();for(a=n.length;a--;)r!=s[a]&&e>=n[a]&&(void 0===n[a+1]||e<n[a+1])&&this.activate(s[a]);t(document).scrollTop()>20?t("body").addClass("scroll-started"):t("body").removeClass("scroll-started"),0==t(".nav--in-page")[0].getBoundingClientRect().top?(t("body").addClass("nav--in-page-is-stuck"),t("body").attr("data-overlay-active","false")):t("body").removeClass("nav--in-page-is-stuck")},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var o=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',i=t(o).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=t.fn.scrollspy;t.fn.scrollspy=o,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);o.call(e,e.data())})})}(jQuery),function(t){"use strict";t.fn.fitVids=function(e){var o={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var i=document.head||document.getElementsByTagName("head")[0],n=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",s=document.createElement("div");s.innerHTML='<p>x</p><style id="fit-vids-style">'+n+"</style>",i.appendChild(s.childNodes[1])}return e&&t.extend(o,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="slideshare.net"]',".embed-container iframe",'iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];o.customSelector&&e.push(o.customSelector);var i=".fitvidsignore";o.ignore&&(i=i+", "+o.ignore);var n=t(this).find(e.join(","));(n=(n=n.not("object object")).not(i)).each(function(){var e=t(this);if(!(e.parents(i).length>0||"embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){e.css("height")||e.css("width")||!isNaN(e.attr("height"))&&!isNaN(e.attr("width"))||(e.attr("height",9),e.attr("width",16));var o,n,s=("object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height())/(isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10));if(!e.attr("name")){var r="fitvid"+t.fn.fitVids._count;e.attr("name",r),t.fn.fitVids._count++}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*s+"%"),e.removeAttr("height").removeAttr("width")}})})},t.fn.fitVids._count=0}(window.jQuery||window.Zepto),Math.easeInOutQuad=function(t,e,o,i){return(t/=i/2)<1?o/2*t*t+e:-o/2*(--t*(t-2)-1)+e},Math.easeInCubic=function(t,e,o,i){var n;return e+o*((t/=i)*t*t)},Math.easeOutCubic=function(t,e,o,i){var n=(t/=i)*t,s;return e+o*(n*t+-3*n+3*t)},Math.inOutQuintic=function(t,e,o,i){var n=(t/=i)*t,s=n*t;return e+o*(6*s*n+-15*n*n+10*s)};var requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};$(function(){if($(document).on("click tap","[data-overlay-trigger]",function(t){t.preventDefault();var e=$("body").attr("data-overlay-active"),o=$(this).attr("data-overlay-trigger");o==e?$("body").attr("data-overlay-active","false"):($("body").attr("data-overlay-active",o),"menu"==o&&$(".archive-nav__search").focus(),"slack"==o&&$("#email").focus(),"newsletter"==o&&$("#fieldEmail").focus())}),$("form.newletter-signup").submit(function(t){var e=t.target;t.preventDefault(),$.post(e.action,$(e).serialize()),$(this).parent().find(".js-signup-confirmation").show(),$(this).remove()}),$(".container").fitVids(),$(window).width()>699)var t=$(".masthead").height()-1;else var t=0;var e=t+1,o=300;$(".nav--in-page").length>0&&$("#top").scrollspy({target:".nav--in-page",offset:e}),$(document).on("click tap",'a[href^="#"]:not([href="#"])',function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var e=$(this.hash),o=(e=e.length?e:$("[name="+this.hash.slice(1)+"]")).offset().top-t;e.length&&scrollTo(o,null,300)}}),$(document).on("click tap",".js-show-talk-details",function(t){t.preventDefault(),$(this).toggleClass("is-active").closest(".talk").toggleClass("if-conference-day-talk-toggled")}),$(document).on("click tap",".job-open",function(t){$(this).closest(".job").hasClass("job-target")?($(this).closest(".job").removeClass("job-target"),$("body").removeClass("job-open"),$(this).closest(".job").find(".job-info").attr("style","")):(_target=$(this).closest(".job").find(".job-info"),_width=_target.width(),_height=_target.height(),_top=_target[0].getBoundingClientRect().top,_left=_target[0].getBoundingClientRect().left,_target.css({height:_height,width:_width,top:_top,left:_left,position:"fixed"}).closest(".job").addClass("job-target").closest("body").addClass("job-open"))}),$(document).on("click tap",".job-close",function(t){$(this).closest(".job").removeClass("job-target"),$("body").removeClass("job-open"),$(this).closest(".job").find(".job-info").attr("style","")});var i="<nav role='navigation' class='table-of-contents'><strong>On this page</strong><ul class='nav'>",n,s,r,a;$("#info h3[id]").each(function(){s=$(this),r=s.text(),a="#"+s.attr("id"),i+=n="<li class='nav-item'><a href='"+a+"'>"+r+"</a></li>"}),i+="</ul></nav>",$("[data-toc]").after(i)}),
/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
function(){if("undefined"!=typeof window&&window.addEventListener){var t=Object.create(null),e,o=function(){clearTimeout(e),e=setTimeout(r,100)},i=function(){},n=function(){if(window.addEventListener("resize",o,!1),window.addEventListener("orientationchange",o,!1),window.MutationObserver){var t=new MutationObserver(o);t.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),i=function(){try{t.disconnect(),window.removeEventListener("resize",o,!1),window.removeEventListener("orientationchange",o,!1)}catch(t){}}}else document.documentElement.addEventListener("DOMSubtreeModified",o,!1),i=function(){document.documentElement.removeEventListener("DOMSubtreeModified",o,!1),window.removeEventListener("resize",o,!1),window.removeEventListener("orientationchange",o,!1)}},s=function(t){function e(t){if(void 0!==t.protocol)var e=t;else(e=document.createElement("a")).href=t;return e.protocol.replace(/:/g,"")+e.host}if(window.XMLHttpRequest){var o=new XMLHttpRequest,i=e(location);t=e(t),o=void 0===o.withCredentials&&""!==t&&t!==i?XDomainRequest||void 0:XMLHttpRequest}return o},r=function(){function e(){0===--d&&(i(),n())}function o(e){return function(){!0!==t[e.base]&&(e.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function r(t){return function(){var o=document.body,i=document.createElement("x");t.onload=null,i.innerHTML=t.responseText,(i=i.getElementsByTagName("svg")[0])&&(i.setAttribute("aria-hidden","true"),i.style.position="absolute",i.style.width=0,i.style.height=0,i.style.overflow="hidden",o.insertBefore(i,o.firstChild)),e()}}function a(t){return function(){t.onerror=null,t.ontimeout=null,e()}}var l,c,d=0;i();var h=document.getElementsByTagName("use");for(c=0;c<h.length;c+=1){try{var u=h[c].getBoundingClientRect()}catch(t){u=!1}var f=(l=h[c].getAttribute("href")||h[c].getAttributeNS("http://www.w3.org/1999/xlink","href")||h[c].getAttribute("xlink:href"))&&l.split?l.split("#"):["",""],p=f[0];f=f[1];var m=u&&0===u.left&&0===u.right&&0===u.top&&0===u.bottom;u&&0===u.width&&0===u.height&&!m?(p.length||!f||document.getElementById(f)||(p=""),h[c].hasAttribute("href")&&h[c].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l),p.length&&(!0!==(l=t[p])&&setTimeout(o({useEl:h[c],base:p,hash:f}),0),void 0===l&&(void 0!==(f=s(p))&&(l=new f,t[p]=l,l.onload=r(l),l.onerror=a(l),l.ontimeout=a(l),l.open("GET",p),l.send(),d+=1)))):m?p.length&&t[p]&&setTimeout(o({useEl:h[c],base:p,hash:f}),0):void 0===t[p]?t[p]=!0:t[p].onload&&(t[p].abort(),delete t[p].onload,t[p]=!0)}h="",d+=1,e()},a=function(){window.removeEventListener("load",a,!1),e=setTimeout(r,0)};"complete"!==document.readyState?window.addEventListener("load",a,!1):a()}}();
//# sourceMappingURL=scripts-min.js.map