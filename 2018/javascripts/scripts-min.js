function scrollTo(t,e,i){function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}var r=s(),n=t-r,a=0,l=20;i=void 0===i?500:i;var c=function(){a+=20,o(Math.easeOutCubic(a,r,n,i)),a<i?requestAnimFrame(c):e&&"function"==typeof e&&e()};c()}+function($){"use strict";function t(e,i){this.$body=$(document.body),this.$scrollElement=$($(e).is(document.body)?window:e),this.options=$.extend({},t.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",$.proxy(this.process,this)),this.refresh(),this.process()}function e(e){return this.each(function(){var i=$(this),o=i.data("bs.scrollspy"),s="object"==typeof e&&e;o||i.data("bs.scrollspy",o=new t(this,s)),"string"==typeof e&&o[e]()})}t.VERSION="3.3.7",t.DEFAULTS={offset:10},t.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},t.prototype.refresh=function(){var t=this,e="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),$.isWindow(this.$scrollElement[0])||(e="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=$(this),o=t.data("target")||t.attr("href"),s=/^#./.test(o)&&$(o);return s&&s.length&&s.is(":visible")&&[[s[e]().top+i,o]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},t.prototype.process=function(){var t=this.$scrollElement.scrollTop()+this.options.offset,e=this.getScrollHeight(),i=this.options.offset+e-this.$scrollElement.height(),o=this.offsets,s=this.targets,r=this.activeTarget,n;if(this.scrollHeight!=e&&this.refresh(),t>=i)return r!=(n=s[s.length-1])&&this.activate(n);if(r&&t<o[0])return this.activeTarget=null,this.clear();for(n=o.length;n--;)r!=s[n]&&t>=o[n]&&(void 0===o[n+1]||t<o[n+1])&&this.activate(s[n]);$(document).scrollTop()>20?$("body").addClass("scroll-started"):$("body").removeClass("scroll-started")},t.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=$(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},t.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=$.fn.scrollspy;$.fn.scrollspy=e,$.fn.scrollspy.Constructor=t,$.fn.scrollspy.noConflict=function(){return $.fn.scrollspy=i,this},$(window).on("load.bs.scrollspy.data-api",function(){$('[data-spy="scroll"]').each(function(){var t=$(this);e.call(t,t.data())})})}(jQuery),function($){"use strict";$.fn.fitVids=function(t){var e={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("div");o.innerHTML='<p>x</p><style id="fit-vids-style">'+".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}"+"</style>",i.appendChild(o.childNodes[1])}return t&&$.extend(e,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];e.customSelector&&t.push(e.customSelector);var i=".fitvidsignore";e.ignore&&(i=i+", "+e.ignore);var o=$(this).find(t.join(","));o=o.not("object object"),o=o.not(i),o.each(function(){var t=$(this);if(!(t.parents(i).length>0||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var e="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),o=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),s=e/o;if(!t.attr("name")){var r="fitvid"+$.fn.fitVids._count;t.attr("name",r),$.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*s+"%"),t.removeAttr("height").removeAttr("width")}})})},$.fn.fitVids._count=0}(window.jQuery||window.Zepto),Math.easeInOutQuad=function(t,e,i,o){return(t/=o/2)<1?i/2*t*t+e:(t--,-i/2*(t*(t-2)-1)+e)},Math.easeInCubic=function(t,e,i,o){return e+i*((t/=o)*t*t)},Math.easeOutCubic=function(t,e,i,o){var s=(t/=o)*t;return e+i*(s*t+-3*s+3*t)},Math.inOutQuintic=function(t,e,i,o){var s=(t/=o)*t,r=s*t;return e+i*(6*r*s+-15*s*s+10*r)};var requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();$(function(){if($(".container").fitVids(),$(window).width()>699)var t=$(".masthead").height()-1;else var t=0;var e=t+1,i=900;$("body").scrollspy({target:".masthead__links",offset:e}),$(document).on("click touchstart",'a[href^="#"]:not([href="#"])',function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var e=$(this.hash);console.log("target",e),e=e.length?e:$("[name="+this.hash.slice(1)+"]");var i=e.offset().top-t;console.log("_goto",i),e.length&&scrollTo(i,null,900)}}),$("form.newletter-signup").submit(function(t){var e=t.target;t.preventDefault(),$.post(e.action,$(e).serialize()),$("form.newletter-signup").remove(),$("#js-signup-confirmation").show()})});