(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0f6b":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("7d64"));function i(e){return e&&e.__esModule?e:{default:e}}var o={globalData:{data:{cache_user_uuid_key:"cache_user_uuid_key",cache_config_info_key:"cache_config_info_key",cache_user_login_key:"cache_user_login_key",cache_user_info_key:"cache_shop_user_info_key",cache_user_merchant_key:"cache_shop_user_merchant_key",cache_system_info_key:"cache_shop_system_info_key",cache_buy_user_address_select_key:"cache_buy_user_address_select_key",cache_launch_info_key:"cache_shop_launch_info_key",cache_userlocation_key:"cache_userlocation_key",cache_page_pay_key:"cache_page_pay_key",default_user_head_src:"/static/images/common/user.png",default_round_success_icon:"/static/images/common/round-success-icon.png",default_round_error_icon:"/static/images/common/round-error-icon.png",tabbar_pages:["/pages/index/index","/pages/goods-category/goods-category","/pages/cart/cart","/pages/user/user"],request_url:"https://shopxo.xiaoyixia.top/",static_url:"https://shopxo.xiaoyixia.top/",application_title:"ShopXO",application_describe:"ShopXO开源商城、MIT协议、可商用、可二次开发、满足99%电商运营需求",version:"v2.2.3",currency_symbol:"￥",default_theme:"yellow"},launch_params_handle:function(e){return null!=(e.query||null)&&(e=e.query),null!=(e.scene||null)&&(e=this.url_params_to_json(decodeURIComponent(e.scene))),e},get_system_info:function(t,n,a){var i=null;return i=1==(a||!1)?this.set_system_info()||null:e.getStorageSync(this.data.cache_system_info_key)||null,null==i||null==(t||null)?i:void 0==i[t]?void 0==n?null:n:i[t]},set_system_info:function(){var t=e.getSystemInfoSync();return e.setStorage({key:this.data.cache_system_info_key,data:t}),t},get_request_url:function(e,t,n,a,i){e=e||"index",t=t||"index";var o="";null!=(n||null)&&(o="&pluginsname="+n+"&pluginscontrol="+t+"&pluginsaction="+e,t="plugins",e="index"),a=a||"",""!=a&&"&"!=a.substr(0,1)&&(a="&"+a);var r=this.get_user_cache_info(),s=0==r?"":r.token||"",u=this.request_uuid(),c=this.application_client_type();return this.data.request_url+(i||"api")+".php?s="+t+"/"+e+o+"&application=app&application_client_type="+c+"&token="+s+"&ajax=ajax&uuid="+u+a},get_user_info:function(e,t){var n=this.get_user_cache_info();return 0==n?(this.user_login(e,t),!1):n},get_user_cache_info:function(t,n){var a=e.getStorageSync(this.data.cache_user_info_key)||null;return null==a?void 0!=n&&n:null!=(t||null)?void 0==a[t]?void 0==n?null:n:a[t]:a},get_launch_cache_info:function(){return e.getStorageSync(this.data.cache_launch_info_key)||null},get_login_cache_info:function(){return e.getStorageSync(this.data.cache_user_login_key)||null},user_auth_login:function(t,n,a){var i=this;e.checkSession({success:function(){var e=i.get_login_cache_info();null==e?i.user_login(t,n):i.get_user_login_info(t,n,e,a)},fail:function(){e.removeStorageSync(i.data.cache_user_login_key),i.user_login(t,n)}})},user_login:function(t,n){var a=e.getStorageSync(this.data.cache_user_login_key)||null;if(null==a){var i=this;e.showLoading({title:"授权中..."});var o="login";e[o]({success:function(a){a.code&&e.request({url:i.get_request_url("appminiuserauth","user"),method:"POST",data:{authcode:a.code},dataType:"json",success:function(a){if(e.hideLoading(),0==a.data.code){var o=a.data.data;1==(o.is_user_exist||0)?e.setStorage({key:i.data.cache_user_info_key,data:o,success:function(e){"object"===typeof t&&null!=(n||null)&&t[n]()},fail:function(){i.showToast("用户信息缓存失败")}}):(e.setStorage({key:i.data.cache_user_login_key,data:o}),i.login_to_auth())}else e.hideLoading(),i.showToast(a.data.msg)},fail:function(){e.hideLoading(),i.showToast("服务器请求出错")}})},fail:function(t){e.hideLoading(),i.showToast("授权失败")}})}else this.login_to_auth()},login_to_auth:function(){e.showModal({title:"温馨提示",content:"授权用户信息",confirmText:"确认",cancelText:"暂不",success:function(t){t.confirm&&e.navigateTo({url:"/pages/login/login"})}})},get_user_login_info:function(t,n,a,i){var o=this.get_launch_cache_info(),r=null==o?0:o.referrer||0,s={auth_data:JSON.stringify(i),openid:a.openid,unionid:a.unionid,referrer:r};e.showLoading({title:"授权中..."});var u=this;e.request({url:u.get_request_url("appminiuserinfo","user"),method:"POST",data:s,dataType:"json",success:function(a){e.hideLoading(),0==a.data.code?e.setStorage({key:u.data.cache_user_info_key,data:a.data.data,success:function(e){"object"===typeof t&&null!=(n||null)&&t[n]()},fail:function(){u.showToast("用户信息缓存失败")}}):u.showToast(a.data.msg)},fail:function(){e.hideLoading(),u.showToast("服务器请求出错")}})},fields_check:function(e,t){for(var n in t){var a=e[t[n]["fields"]],i=t[n]["is_can_zero"]||null;if(void 0==a||0==a.length||-1==a||null==i&&0==a)return this.showToast(t[n]["msg"]),!1}return!0},get_timestamp:function(){return parseInt((new Date).getTime()/1e3)},get_date:function(e,t){var n=new Date(1e3*(t||this.get_timestamp())),a={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),"S+":n.getMilliseconds()};for(var i in/(y+)/i.test(e)&&(e=e.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+i+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?a[i]:("00"+a[i]).substr((""+a[i]).length)));return e},get_length:function(e){var t=typeof e;if("string"==t)return e.length;if("object"==t){var n=0;for(var a in e)n++;return n}return!1},price_two_decimal:function(e){var t=parseFloat(e);if(isNaN(t))return 0;t=Math.round(100*e)/100;var n=t.toString(),a=n.indexOf(".");a<0&&(a=n.length,n+=".");while(n.length<=a+2)n+="0";return n},url_value_handle:function(e){if(-1==e.indexOf("?"))var t=e;else{var n=e.split("?");t=n[0]}return t},is_tabbar_pages:function(e){var t=this.url_value_handle(e);if(null==(t||null))return!1;var n=this.data.tabbar_pages;for(var a in n)if(n[a]==t)return!0;return!1},operation_event:function(t){var n=t.currentTarget.dataset.value||null,a=parseInt(t.currentTarget.dataset.type);if(null!=n)switch(a){case 0:this.open_web_view(n);break;case 1:this.is_tabbar_pages(n)?e.switchTab({url:n}):e.navigateTo({url:n});break;case 2:e.navigateToMiniProgram({appId:n});break;case 3:var i=n.split("|");if(4!=i.length)return this.showToast("事件值格式有误"),!1;this.open_location(i[2],i[3],i[0],i[1]);break;case 4:this.call_tel(n);break}},open_web_view:function(t){e.navigateTo({url:"/pages/web-view/web-view?url="+encodeURIComponent(t)})},showToast:function(t,n){"success"==(n||"error")?e.showToast({icon:"success",title:t,duration:3e3}):e.showToast({icon:"none",title:t,duration:3e3})},alert:function(t){var n=t.msg||null;if(null!=n){var a=t.title||"",i=0!=t.is_show_cancel,o=t.cancel_text||"取消",r=t.confirm_text||"确认",s=t.cancel_color||"#000000",u=t.confirm_color||"#576B95";e.showModal({title:a,content:n,showCancel:i,cancelText:o,cancelColor:s,confirmText:r,confirmColor:u,success:function(e){null!=(t.object||null)&&"object"===typeof t.object&&null!=(t.method||null)&&t.object[t.method](e.confirm?1:0)}})}else self.showToast("提示信息为空 alert")},user_is_need_login:function(e){return 0==e||1==(e.is_mandatory_bind_mobile||0)&&null==(e.mobile||null)},url_params_to_json:function(e){var t=new Object;if(null!=(e||null))for(var n=e.split("&"),a=0;a<n.length;a++){var i=n[a].split("=");t[i[0]]=i[1]}return t},call_tel:function(t){null!=(t||null)&&e.makePhoneCall({phoneNumber:t.toString()})},is_login_check:function(t,n,a){return-400!=t.code||(e.clearStorage(),this.get_user_info(n,a),!1)},set_tab_bar_reddot:function(t,n){void 0!==t&&null!==t&&(0==(n||0)?e.hideTabBarRedDot({index:Number(t)}):e.showTabBarRedDot({index:Number(t)}))},set_tab_bar_badge:function(t,n,a){void 0!==t&&null!==t&&(0==(n||0)?e.removeTabBarBadge({index:Number(t)}):e.setTabBarBadge({index:Number(t),text:a.toString()}))},show_share_menu:function(){var t=getCurrentPages(),n=t[t.length-1],a=this.share_content_handle(n.share_info||{});e.showShareMenu({withShareTicket:!0,title:a.title,desc:a.desc,path:a.path+a.query,imageUrl:a.img,menus:["shareAppMessage","shareTimeline"]})},get_config:function(t,n){var a=null,i=e.getStorageSync(this.data.cache_config_info_key)||null;if(null!=i){var o=t.split(".");if(1==o.length)a=void 0==i[t]?null:i[t];else for(var r in a=i,o){if(void 0==a[o[r]]){a=null;break}a=a[o[r]]}}return null===a?void 0===n?a:n:a},init_config:function(){var t=this;e.request({url:this.get_request_url("common","base"),method:"POST",data:{is_key:1},dataType:"json",success:function(n){0==n.data.code?e.setStorage({key:t.data.cache_config_info_key,data:n.data.data,fail:function(){t.showToast("配置信息缓存失败")}}):t.showToast(n.data.msg)},fail:function(){t.showToast("服务器请求出错")}})},is_config:function(e,t){var n=this,a=0,i=setInterval((function(){1==n.get_config("status")&&(clearInterval(i),"object"===typeof e&&null!=(t||null)&&e[t](!0)),a++,a>=100&&clearInterval(i)}),100)},map_gcj_to_bd:function(e,t){e=parseFloat(e),t=parseFloat(t);var n=52.35987755982988,a=e,i=t,o=Math.sqrt(a*a+i*i)+2e-5*Math.sin(i*n),r=Math.atan2(i,a)+3e-6*Math.cos(a*n),s=o*Math.cos(r)+.0065,u=o*Math.sin(r)+.006;return{lng:s,lat:u}},map_bd_to_gcj:function(e,t){e=parseFloat(e),t=parseFloat(t);var n=52.35987755982988,a=e-.0065,i=t-.006,o=Math.sqrt(a*a+i*i)+2e-5*Math.sin(i*n),r=Math.atan2(i,a)+3e-6*Math.cos(a*n),s=o*Math.cos(r),u=o*Math.sin(r);return{lng:s,lat:u}},open_location:function(t,n,a,i,o){if(void 0==t||void 0==n||""==t||""==n)return this.showToast("坐标有误"),!1;var r=this.map_bd_to_gcj(t,n);e.openLocation({name:a||"地理位置",address:i||"",scale:o||18,longitude:r.lng,latitude:r.lat})},uuid:function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}))},request_uuid:function(){var t=this,n=e.getStorageSync(this.data.cache_user_uuid_key)||null;return null==n&&(n=this.uuid(),e.setStorage({key:this.data.cache_user_uuid_key,data:n,fail:function(){t.showToast("uuid缓存失败")}})),n},url_event:function(t){var n=t.currentTarget.dataset.value||null;if(null!=n){var a=n.substr(0,6);"http:/"==a||"https:"==a?this.open_web_view(n):this.is_tabbar_pages(n)?e.switchTab({url:n}):e.navigateTo({url:n})}},text_copy_event:function(t){var n=t.currentTarget.dataset.value||null;if(null!=n){var a=this;e.setClipboardData({data:n,success:function(t){e.getClipboardData({success:function(e){a.showToast("复制成功","success")}})}})}else this.showToast("复制内容为空")},image_show_event:function(t){var n=t.currentTarget.dataset.value||null;null!=n?e.previewImage({current:n,urls:[n]}):this.showToast("图片地址为空")},get_static_url:function(e,t){return null==(e||null)&&(e="common"),1==(t||!1)?this.data.static_url+"static/plugins/images/"+e+"/":this.data.static_url+"static/app/"+this.data.default_theme+"/"+e+"/"},rpx_to_px:function(e){return 0==(e||0)?0:parseInt(e)/750*parseInt(this.get_system_info("windowWidth",0))},px_to_rpx:function(e){return 0==(e||0)?0:750*parseInt(e)/parseInt(this.get_system_info("windowWidth",0))},application_client:function(){var e="";return e="mp",e},application_client_type:function(){var e="";return e="weixin",e},auth_check:function(t,n,a,i){var o=this;e.getSetting({success:function(r){r.authSetting[a]?"object"===typeof t&&null!=(n||null)&&t[n](1):e.authorize({scope:a,success:function(e){"object"===typeof t&&null!=(n||null)&&t[n](1)},fail:function(t){o.showToast(i||"请打开授权"),setTimeout((function(){e.openSetting()}),1e3)}})}})},window_width_handle:function(e){return e},window_height_handle:function(e){var t=e.windowHeight;return e.statusBarHeight>0&&(t+=e.statusBarHeight),e.windowTop>0&&(t+=e.windowTop),e.windowBottom>0&&(t+=e.windowBottom),t},get_page_url:function(e){var t=getCurrentPages(),n=t[t.length-1].$page.fullPath;if(0==e){var a=n.split("?");n=a[0]}return n},is_weixin:function(){var e=navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)},is_user_weixin_web_openid:function(t){var n=this;if(this.is_weixin()){var i=this.get_user_cache_info("weixin_web_openid")||null;if(null==i){var o=this.get_launch_cache_info();if(null!=o&&1==(o.is_weixin_auth_web_openid||0))return e.showLoading({title:"处理中..."}),e.request({url:this.get_request_url("tokenuserinfo","user"),method:"POST",data:{},dataType:"json",success:function(t){e.hideLoading(),0==t.data.code?e.setStorageSync(n.data.cache_user_info_key,t.data.data):n.showToast(t.data.msg)},fail:function(){e.hideLoading(),n.showToast("服务器请求出错")}}),!0;e.setStorageSync(this.data.cache_page_pay_key,"array"==typeof t?t.join(","):t);var r=this.get_page_url();r+=-1==r.indexOf("?")?"?":"&",r+="is_weixin_auth_web_openid=1";var s=encodeURIComponent(a.default.encode(r)),u=this.get_request_url("index","pay","weixinwebauthorization","request_url="+s,"index").replace("&ajax=ajax","");return window.location.href=u,!1}}return!0},share_content_handle:function(e){var t=this.get_config("plugins_base.share.data")||{},n={title:e.title||t.title||this.data.application_title,desc:e.desc||t.desc||this.data.application_describe,path:e.path||"/pages/index/index",query:this.share_query_handle(e.query||""),img:e.img||t.pic||this.get_config("config.home_site_logo_square")};return n["url"]=this.get_page_url(),n},share_query_handle:function(e){if(null==(e||null)||-1==e.indexOf("referrer")){var t=parseInt(this.get_user_cache_info("id",0))||0;if(t>0){var n=null==(e||null)?"":"&";e+=n+"referrer="+t}}return null==(e||null)?"":"?"+e}},onLaunch:function(t){t=this.globalData.launch_params_handle(t),e.setStorage({key:this.globalData.data.cache_launch_info_key,data:t}),this.globalData.set_system_info(),this.globalData.init_config()},methods:{}};t.default=o}).call(this,n("543d")["default"])},"35e5":function(e,t,n){"use strict";n.r(t);var a=n("0f6b"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"9e52":function(e,t,n){},a7ad:function(e,t,n){"use strict";n.r(t);var a=n("35e5");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("bc80");var o,r,s,u,c=n("f0c5"),l=Object(c["a"])(a["default"],o,r,!1,null,null,null,!1,s,u);t["default"]=l.exports},bc80:function(e,t,n){"use strict";var a=n("9e52"),i=n.n(a);i.a},ec60:function(e,t,n){"use strict";(function(e){n("7abb");var t=r(n("66fd")),a=r(n("a7ad")),i=r(n("058a")),o=r(n("73dd"));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}wx.__webpack_require_UNI_MP_PLUGIN__=n,t.default.mixin(i.default),t.default.mixin(o.default),t.default.config.productionTip=!1,a.default.mpType="app";var l=new t.default(u({},a.default));e(l).$mount()}).call(this,n("543d")["createApp"])}},[["ec60","common/runtime","common/vendor"]]]);