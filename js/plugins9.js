// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);
;// Generated by CoffeeScript 1.6.2
/*
Sticky Elements Shortcut for jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){(function(t,n){if(typeof define==="function"&&define.amd){return define(["jquery","waypoints"],n)}else{return n(t.jQuery)}})(this,function(t){var n,s;n={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck"};s=function(t,n){t.wrap(n.wrapper);return t.parent()};t.waypoints("extendFn","sticky",function(e){var i,r,a;r=t.extend({},t.fn.waypoint.defaults,n,e);i=s(this,r);a=r.handler;r.handler=function(n){var s,e;s=t(this).children(":first");e=n==="down"||n==="right";s.toggleClass(r.stuckClass,e);i.height(e?s.outerHeight():"");if(a!=null){return a.call(this,n)}};i.waypoint(r);return this.data("stuckClass",r.stuckClass)});return t.waypoints("extendFn","unsticky",function(){this.parent().waypoint("destroy");this.unwrap();return this.removeClass(this.data("stuckClass"))})})}).call(this);
;;(function($,doc,win)
{"use strict";var ThemComment=function(object,option)
{var $option=option;var $respond=$('#respond');var $comment=$('#comments');var $commentForm=$('#comment-form');var $commentFormPage;var $commentFormPostId=$('#comment_post_ID');var $commentFormParentCommentId=$('#comment_parent');var $commentFormCancelReply=$('#cancel-comment-reply-link');this.build=function()
{var self=this;$commentForm.find(':input').each(function()
{if($(this).parent('span.theme-block').length!==1)
$(this).wrap('<span class="theme-block">');});$commentForm.submit(function()
{self.addComment();return(false);});$commentFormPage=$(document.createElement('input')).attr('type','hidden').attr('name','cpage').attr('id','cpage').val($option.page);$commentForm.append($commentFormPage);this.bindEvent();$(window).bind('hashchange',function()
{if(location.hash.substr(1,6)==='cpage-')
{var data={};data.cpage=parseInt(location.hash.substr(7));data.comment_form_post_id=parseInt($commentFormPostId.val());if(data.cpage===$commentFormPage.val())return;data.action='comment_get';$('#comments').css('opacity','0.5');jQuery.ajax({url:$option.requestURL,data:data,type:'GET',success:self.getCommentResponse,dataType:'json',contextObject:self});}});$(window).trigger('hashchange');$commentForm.find('label.theme-infield-label').inFieldLabels();};this.getCommentResponse=function(response)
{$comment.html(response.html);$commentFormPage.val(response.cpage);this.contextObject.bindEvent();$.scrollTo($comment,400,{easing:'easeOutQuint'});$('#comments').css('opacity','1.0');};this.bindEvent=function()
{var clickEventType=((document.ontouchstart!==null)?'click':'touchstart');jQuery('.theme-comment-reply').bind(clickEventType,function(e)
{e.preventDefault();$commentFormCancelReply.css('display','block');$commentFormParentCommentId.val(jQuery(this).attr('href').substr(9));$.scrollTo($respond,400,{easing:'easeOutQuint'});});jQuery('.comment-in-reply').bind(clickEventType,function(e)
{e.preventDefault();$.scrollTo($($(this).attr('href')),400,{easing:'easeOutQuint'});});$commentFormCancelReply.bind(clickEventType,function(e)
{e.preventDefault();$commentFormParentCommentId.val(0);$(this).css('display','none');$.scrollTo($comment,400,{easing:'easeOutQuint'});});$comment.find('>#comments_list .theme-comment-pagination>a').each(function()
{$(this).attr('href',$(this).attr('href').substr($(this).attr('href').indexOf('#')));});};this.addComment=function()
{var data=$commentForm.serialize()+'&action=comment_add';this.blockForm('block');$.ajax({url:$option.requestURL,data:data,type:'POST',success:this.addCommentResponse,dataType:'json',contextObject:this});};this.addCommentResponse=function(response)
{this.contextObject.blockForm('unblock');if(parseInt(response.error)===0)$comment.html(response.html);$commentForm.find('p').qtip('destroy');if(typeof(response.info)!=='undefined')
{if(response.info.length)
{for(var key in response.info)
{$('#'+response.info[key].fieldId).parent('.theme-block').qtip({style:{classes:(parseInt(response.error)===1?'pb-qtip pb-qtip-error':'pb-qtip pb-qtip-success')},content:{text:response.info[key].message},position:{my:'bottom right',at:'top right',container:$commentForm}}).qtip('show');}}}
if(parseInt(response.error)===0)
{$commentFormParentCommentId.val(0);$commentFormCancelReply.css('display','none');$.scrollTo('#comment-'+response.commentId,400,{easing:'easeOutQuint'});$('#author,#email,#url,#comment').val('').blur();this.contextObject.bindEvent();if(response.changeURL.length!==0)location.href=response.changeURL;}};this.blockForm=function(action)
{if(action==='block')
{$commentForm.find('.theme-block').block({message:false,overlayCSS:{opacity:'0.3'}});}
else $commentForm.find('.theme-block').unblock();};}
$.fn.ThemeComment=function(option)
{var comment=new ThemComment(this,option);comment.build();};})(jQuery,document,window);;function linkify(string,buildHashtagUrl,includeW3,target){string=string.replace(/((http|https|ftp)\:\/\/|\bw{3}\.)[a-z0-9\-\.]+\.[a-z]{2,3}(:[a-z0-9]*)?\/?([a-z\u00C0-\u017F0-9\-\._\?\,\'\/\\\+&amp;%\$#\=~])*/gi,function(captured){var uri;if(captured.toLowerCase().indexOf("www.")==0){if(!includeW3){return captured}uri="http://"+captured}else{uri=captured}return'<a href="'+uri+'" target="'+target+'">'+captured+"</a>"});if(buildHashtagUrl){string=string.replace(/\B#(\w+)/g,"<a href="+buildHashtagUrl("$1")+' target="'+target+'">#$1</a>')}return string}(function($){$.fn.linkify=function(opts){return this.each(function(){var $this=$(this);var buildHashtagUrl;var includeW3=true;var target="_self";if(opts){if(typeof opts=="function"){buildHashtagUrl=opts}else{if(typeof opts.hashtagUrlBuilder=="function"){buildHashtagUrl=opts.hashtagUrlBuilder}if(typeof opts.includeW3=="boolean"){includeW3=opts.includeW3}if(typeof opts.target=="string"){target=opts.target}}}$this.html(linkify($this.html(),buildHashtagUrl,includeW3,target))})}})(jQuery);;"use strict";jQuery(document).ready(function($)
{var clickEventType=((document.ontouchstart!==null)?'click':'touchstart');try
{$.fn.qtip.zindex=10;}
catch(e){}
$('.widget_search label').inFieldLabels();$('.widget_archive>ul>li').each(function()
{var text=$(this).text();var link=$(this).children('a').html(text).clone(true,true);$(this).html(link).css({display:'block'});});$('.widget_rss>ul>li').each(function()
{var author=$(this).children('cite').clone(true,true);var date=$(this).children('.rss-date').clone(true,true);$(this).children('cite').remove();$(this).children('.rss-date').remove();if(date.length===1)$(this).children('a').after(date);if(author.length===1)$(this).children('a').after(author);$(this).css({display:'block'});});$('.widget_nav_menu a').bind(clickEventType,function(e)
{if((parseInt($(this).attr('href').length)===1)&&($(this).attr('href').substr(0,1)==='#'))
{e.preventDefault();var menu=$(this).parents('.widget_nav_menu');menu.find('li').removeClass('current-menu-item current-menu-ancestor current_page_item');menu.find('ul>li>ul').css('display','none');$(this).parents('ul.sub-menu').css('display','block');$(this).parents('li').addClass('current-menu-item');$(this).next('ul.sub-menu').css('display','block');}
else
{if(new String($(this).attr('target'))!=='_blank')
window.location.href=$(this).attr('href');}
return(true);});$('.widget_nav_menu a').hover(function(){$(this).append('<span>');},function(){$(this).children('span').remove()});$('.widget_recent_comments>ul>li').each(function()
{$(this).html('<span>'+$(this).html().replace('<a','</span><a'));});$('.widget_recent_comments').css('display','block');$('.widget_nav_menu').each(function()
{$(this).find('li.current-menu-item,li.current_page_item').parents('ul.sub-menu').css('display','block');});if(parseInt(themeOption.config.woocommerce_enable)===1)
{$('.woocommerce.widget_product_categories ul>li').each(function()
{$(this).children('a').append($(this).children('span'));$(this).children('span').remove();});$('.woocommerce.widget_product_categories').css('display','block');$('.woocommerce.widget_product_search input[type="text"]').removeAttr('placeholder');$('select').removeClass('select2-hidden-accessible');}
if(parseInt(themeOption.selection.enable)===0)
{$('body').attr('unselectable','on').css('user-select','none').on('selectstart',false);};if(parseInt(themeOption.rightClick.enable)===0)
{document.oncontextmenu=function(){return false;};$(document).mousedown(function(e)
{if(parseInt(e.button)===2)return false;return true;});};var body=$('body');var page=$('.theme-page');var footer=$('.theme-footer');if(body.hasClass('theme-footer-sticky'))
{$(window).windowDimensionListener({change:function(width,height)
{var menuHeight=$('.pb.pb-menu.pb-menu-sticky').actual('height');var footerHeight=footer.actual('height');var windowHeight=$(window).actual('height')-menuHeight;if(windowHeight>footerHeight)
{body.addClass('theme-footer-sticky');page.css({'margin-bottom':footerHeight});}
else
{body.removeClass('theme-footer-sticky');page.css({'margin-bottom':'0'});}
footer.css({'visibility':'visible'});}});}
else footer.css({'visibility':'visible'});if(parseInt(themeOption.goToPageTop.enable)===1)
{$('body').waypoint(function(direction)
{if(direction==='down')
$('#theme-go-to-top').animate({opacity:1},{duration:1000});else $('#theme-go-to-top').animate({opacity:0},{duration:250});},{offset:'-100%'});$(window).bind('hashchange',function(e)
{e.preventDefault();var hash=window.location.hash.substring(1);if(hash===themeOption.goToPageTop.hash)
{var options={};if(parseInt(themeOption.goToPageTop.animation_enable)===1)
options={duration:parseInt(themeOption.goToPageTop.animation_duration),easing:themeOption.goToPageTop.animation_easing};options.onAfter=function(){window.location.hash='#';};$.scrollTo(0,options);}});};$('#theme-post-button-leave-a-reply').bind(clickEventType,function(e)
{e.preventDefault();$.scrollTo($('#respond'),{duration:300});});$('.theme-comment-content-read-more-link').live(clickEventType,function(e)
{e.preventDefault();var parent=$(this).parent('p');parent.children('.theme-comment-content-excerpt,.theme-comment-content-read-more-link').css('display','none');parent.children('.theme-comment-content-content,.theme-comment-content-read-less-link').css('display','inline');});$('.theme-comment-content-read-less-link').live(clickEventType,function(e)
{e.preventDefault();var parent=$(this).parent('p');parent.children('.theme-comment-content-excerpt,.theme-comment-content-read-more-link').css('display','inline');parent.children('.theme-comment-content-content,.theme-comment-content-read-less-link').css('display','none');});$('.theme-layout-100').responsiveElement({className:'theme-responsive-column-a'});$('.theme-layout-50x50').responsiveElement({className:'theme-responsive-column-a'});$('.theme-layout-33x33x33').responsiveElement({width:650,className:'theme-responsive-column-a'});$('.theme-layout-25x25x25x25').responsiveElement({width:650,className:'theme-responsive-column-a'});$('.theme-layout-66x33').responsiveElement({className:'theme-responsive-column-a'});$('.theme-layout-33x66').responsiveElement({className:'theme-responsive-column-a'});$('.theme-layout-25x75').responsiveElement({className:'theme-responsive-column-a'});$('.theme-layout-75x25').responsiveElement({className:'theme-responsive-column-a'});$('body').windowDimensionListener({change:function(width,height)
{if(height)$(window).scroll();}});$(window).trigger('resize');try
{var retina=window.devicePixelRatio>1?true:false;if(retina)
{$('.pb-icon-list img').one("load",function()
{var width=$(this).actual('width');var src=$(this).attr('src').replace(/public/,'public/2x');$(this).attr('src',src).width(width);}).each(function()
{if(this.complete)$(this).load();});}}
catch(e){}
$('.theme-table-responsive-on').responsiveTable();});
;!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d)if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);