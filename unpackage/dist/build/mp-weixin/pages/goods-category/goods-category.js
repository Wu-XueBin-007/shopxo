(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods-category/goods-category"],{"3d30":function(t,a,n){"use strict";n.r(a);var e=n("5cea"),o=n.n(e);for(var i in e)"default"!==i&&function(t){n.d(a,t,(function(){return e[t]}))}(i);a["default"]=o.a},"43d2":function(t,a,n){"use strict";var e=n("9d74"),o=n.n(e);o.a},"5cea":function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=getApp(),o=function(){n.e("components/search/search").then(function(){return resolve(n("817d"))}.bind(null,n)).catch(n.oe)},i=function(){n.e("components/quick-nav/quick-nav").then(function(){return resolve(n("3783"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/no-data/no-data").then(function(){return resolve(n("126b"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{status_bar_height:parseInt(e.globalData.get_system_info("statusBarHeight",0)),data_list_loding_status:1,nav_active_index:0,data_list:[],data_content:null,category_show_level:3,data_bottom_line_status:!1,share_info:{}}},components:{componentSearch:o,componentQuickNav:i,componentNoData:s},props:{},onShow:function(){this.init(),this.init_config()},onPullDownRefresh:function(){this.init()},methods:{init_config:function(t){1==(t||!1)?this.setData({category_show_level:e.globalData.get_config("config.category_show_level")}):e.globalData.is_config(this,"init_config")},init:function(){var a=this;this.setData({data_list_loding_status:1}),t.request({url:e.globalData.get_request_url("category","goods"),method:"POST",data:{},dataType:"json",success:function(n){if(t.stopPullDownRefresh(),0==n.data.code){var o=n.data.data.category||[],i=null,s=a.nav_active_index||0;o.length>0&&(o[s]["active"]="nav-active cr-main border-color-main",i=o[s]||null),a.setData({data_list:o,data_content:i,data_list_loding_status:0==o.length?0:3,data_bottom_line_status:!0})}else a.setData({data_list_loding_status:0,data_bottom_line_status:!0}),e.globalData.showToast(n.data.msg);a.setData({share_info:{path:"/pages/goods-category/goods-category"}}),setTimeout((function(){e.globalData.show_share_menu()}),1e3)},fail:function(){t.stopPullDownRefresh(),a.setData({data_list_loding_status:2,data_bottom_line_status:!0}),e.globalData.showToast("服务器请求出错")}})},nav_event:function(t){var a=t.currentTarget.dataset.index,n=this.data_list;for(var e in n)n[e]["active"]=a==e?"nav-active cr-main border-color-main":"";this.setData({data_list:n,data_content:n[a],nav_active_index:a})},category_event:function(a){t.navigateTo({url:"/pages/goods-search/goods-search?category_id="+a.currentTarget.dataset.value})}}};a.default=c}).call(this,n("543d")["default"])},6862:function(t,a,n){"use strict";n.r(a);var e=n("84e0"),o=n("3d30");for(var i in o)"default"!==i&&function(t){n.d(a,t,(function(){return o[t]}))}(i);n("43d2");var s,c=n("f0c5"),r=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],s);a["default"]=r.exports},"84e0":function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return i})),n.d(a,"a",(function(){return e}));var o=function(){var t=this,a=t.$createElement;t._self._c},i=[]},"9d74":function(t,a,n){},f37c:function(t,a,n){"use strict";(function(t){n("7abb");e(n("66fd"));var a=e(n("6862"));function e(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("543d")["createPage"])}},[["f37c","common/runtime","common/vendor"]]]);