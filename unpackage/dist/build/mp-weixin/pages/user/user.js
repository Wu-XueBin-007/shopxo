(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"0646":function(e,t,a){"use strict";(function(e){a("7abb");n(a("66fd"));var t=n(a("f94e"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=a,e(t.default)}).call(this,a("543d")["createPage"])},"07b2":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=getApp(),o=function(){a.e("components/quick-nav/quick-nav").then(function(){return resolve(a("3783"))}.bind(null,a)).catch(a.oe)},r=function(){a.e("components/badge/badge").then(function(){return resolve(a("f937"))}.bind(null,a)).catch(a.oe)},s=function(){a.e("components/trn-nav/trn-nav").then(function(){return resolve(a("1964"))}.bind(null,a)).catch(a.oe)},u=function(){a.e("components/copyright/copyright").then(function(){return resolve(a("4740"))}.bind(null,a)).catch(a.oe)},l=function(){a.e("components/online-service/online-service").then(function(){return resolve(a("b4f0"))}.bind(null,a)).catch(a.oe)},i=n.globalData.get_static_url("common"),c=n.globalData.get_static_url("user"),_={data:function(){return{common_static_url:i,static_url:c,avatar:n.globalData.data.default_user_head_src,nav_title:"用户中心",nickname:"用户名",message_total:0,head_nav_list:[{name:"订单总数",url:"user-order",count:0},{name:"商品收藏",url:"user-favor",count:0},{name:"我的足迹",url:"user-goods-browse",count:0},{name:"我的积分",url:"user-integral",count:0}],user_order_status_list:[{name:"待付款",status:1,count:0,url:"/pages/user-order/user-order?status=1"},{name:"待发货",status:2,count:0,url:"/pages/user-order/user-order?status=2"},{name:"待收货",status:3,count:0,url:"/pages/user-order/user-order?status=3"},{name:"已完成",status:4,count:0,url:"/pages/user-order/user-order?status=4"},{name:"退款/售后",status:101,count:0,url:"/pages/user-orderaftersale/user-orderaftersale"}],navigation_order:null,navigation:[],common_app_customer_service_tel:null,common_user_center_notice:null,common_app_is_online_service:0,common_app_is_head_vice_nav:0,top_content_style:'background-image: url("'+c+'nav-top.png");padding-top:'+(parseInt(n.globalData.get_system_info("statusBarHeight",0))+5)+"px;",scroll_value:0,top_nav_height:50}},components:{componentQuickNav:o,componentBadge:r,componentTrnNav:s,componentCopyright:u,componentOnlineService:l},props:{},onShow:function(){this.init(),this.init_config()},onPullDownRefresh:function(e){this.init()},methods:{init_config:function(e){1==(e||!1)?this.setData({common_app_customer_service_tel:n.globalData.get_config("config.common_app_customer_service_tel"),common_user_center_notice:n.globalData.get_config("config.common_user_center_notice"),common_app_is_online_service:n.globalData.get_config("config.common_app_is_online_service"),common_app_is_head_vice_nav:n.globalData.get_config("config.common_app_is_head_vice_nav")}):n.globalData.is_config(this,"init_config")},init:function(t){var a=this,o=n.globalData.get_user_info(this,"init");0!=o?n.globalData.user_is_need_login(o)?(e.stopPullDownRefresh(),e.showModal({title:"温馨提示",content:"绑定手机号码",confirmText:"确认",cancelText:"暂不",success:function(t){e.stopPullDownRefresh(),t.confirm&&e.navigateTo({url:"/pages/login/login?event_callback=init"}),a.set_user_base(o)}}),n.globalData.show_share_menu()):(this.set_user_base(o),this.get_data()):(e.stopPullDownRefresh(),n.globalData.show_share_menu())},set_user_base:function(e){null!=(e.avatar||null)&&this.setData({avatar:e.avatar}),null!=(e.user_name_view||null)&&this.setData({nickname:e.user_name_view})},get_data:function(){var t=this;e.request({url:n.globalData.get_request_url("center","user"),method:"POST",data:{},dataType:"json",success:function(a){if(e.stopPullDownRefresh(),0==a.data.code){var o=a.data.data,r=t.user_order_status_list;if(null!=(o.user_order_status||null)&&o.user_order_status.length>0)for(var s in r)for(var u in o.user_order_status)if(r[s]["status"]==o.user_order_status[u]["status"]){r[s]["count"]=o.user_order_status[u]["count"];break}var l=t.head_nav_list;l[0]["count"]=0==(o.user_order_count||0)?0:o.user_order_count,l[1]["count"]=0==(o.user_goods_favor_count||0)?0:o.user_goods_favor_count,l[2]["count"]=0==(o.user_goods_browse_count||0)?0:o.user_goods_browse_count,l[3]["count"]=0==(o.integral||0)?0:o.integral;var i={user_order_status_list:r,message_total:0==(o.common_message_total||0)?0:o.common_message_total,head_nav_list:l,navigation:o.navigation||[]},c=null;if(i.navigation.length>0)for(var s in i.navigation){var _=n.globalData.url_value_handle(i.navigation[s]["event_value"]);if("/pages/user-order/user-order"==_){c=i.navigation[s],i.navigation.splice(s,1);break}}i["navigation_order"]=c,null!=(o.avatar||null)&&(i["avatar"]=o.avatar),null!=(o.user_name_view||null)&&(i["nickname"]=o.user_name_view),t.setData(i);var g=o.common_cart_total||0;g<=0?n.globalData.set_tab_bar_badge(2,0):n.globalData.set_tab_bar_badge(2,1,g)}else n.globalData.is_login_check(a.data,t,"get_data")&&n.globalData.showToast(a.data.msg);setTimeout((function(){n.globalData.show_share_menu()}),1e3)},fail:function(){e.stopPullDownRefresh(),n.globalData.showToast("服务器请求出错")}})},clear_storage:function(t){var a=e.getStorageSync(n.globalData.data.cache_user_uuid_key)||null;e.clearStorage(),n.globalData.showToast("清除缓存成功","success"),null!=a&&e.setStorage({key:n.globalData.data.cache_user_uuid_key,data:a})},call_event:function(){null==this.common_app_customer_service_tel?n.globalData.showToast("客服电话有误"):n.globalData.call_tel(this.common_app_customer_service_tel)},preview_event:function(){n.globalData.data.default_user_head_src!=this.avatar&&e.previewImage({current:this.avatar,urls:[this.avatar]})},user_avatar_error:function(e){this.setData({avatar:n.globalData.data.default_user_head_src})},navigation_event:function(e){n.globalData.operation_event(e)},onPageScroll:function(e){this.setData({scroll_value:e.scrollTop})}}};t.default=_}).call(this,a("543d")["default"])},"3f3a":function(e,t,a){"use strict";var n=a("5c0b"),o=a.n(n);o.a},"5c0b":function(e,t,a){},"6b7f":function(e,t,a){"use strict";a.r(t);var n=a("07b2"),o=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=o.a},bd28:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={uniIcons:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(a.bind(null,"1d00"))}},o=function(){var e=this,t=e.$createElement;e._self._c},r=[]},f94e:function(e,t,a){"use strict";a.r(t);var n=a("bd28"),o=a("6b7f");for(var r in o)"default"!==r&&function(e){a.d(t,e,(function(){return o[e]}))}(r);a("3f3a");var s,u=a("f0c5"),l=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);t["default"]=l.exports}},[["0646","common/runtime","common/vendor"]]]);