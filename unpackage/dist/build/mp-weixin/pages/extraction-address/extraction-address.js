(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extraction-address/extraction-address"],{"1bfa":function(t,a,e){"use strict";var n=e("b4f9"),o=e.n(n);o.a},"2af3":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return n}));var o=function(){var t=this,a=t.$createElement;t._self._c},s=[]},"6e17":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=getApp(),o=function(){e.e("components/no-data/no-data").then(function(){return resolve(e("126b"))}.bind(null,e)).catch(e.oe)},s=function(){e.e("components/bottom-line/bottom-line").then(function(){return resolve(e("e5fd"))}.bind(null,e)).catch(e.oe)},i=n.globalData.get_static_url("common"),l={data:function(){return{common_static_url:i,data_list_loding_status:1,data_bottom_line_status:!1,data_list:[],params:null,is_default:0,user_location_cache_key:n.globalData.data.cache_userlocation_key,user_location:null,is_first:1,home_extraction_address_position:0}},components:{componentNoData:o,componentBottomLine:s},props:{},onLoad:function(t){this.setData({params:t,home_extraction_address_position:n.globalData.get_config("config.home_extraction_address_position",0)})},onReady:function(){t.removeStorage({key:this.user_location_cache_key}),1==(this.params.is_buy||0)&&1==this.home_extraction_address_position&&t.navigateTo({url:"/pages/common/open-setting-location/open-setting-location"})},onShow:function(){1==this.home_extraction_address_position?0==this.is_first&&(this.user_location_init(),this.init()):this.init(),this.setData({is_first:0}),n.globalData.show_share_menu()},onPullDownRefresh:function(){this.get_data_list()},methods:{init:function(){var a=n.globalData.get_user_info(this,"init");if(0!=a){if(n.globalData.user_is_need_login(a))return t.redirectTo({url:"/pages/login/login?event_callback=init"}),!1;this.get_data_list()}else this.setData({data_list_loding_status:0,data_bottom_line_status:!1})},user_location_init:function(){var a=t.getStorageSync(this.user_location_cache_key)||null,e=null;null!=a&&(e={name:a.name||null,address:a.address||null,lat:a.latitude||null,lng:a.longitude||null}),this.setData({user_location:e})},get_data_list:function(){var a=this;t.showLoading({title:"加载中..."}),this.setData({data_list_loding_status:1});var e={};null!=(this.user_location||null)&&(e["lng"]=this.user_location.lng,e["lat"]=this.user_location.lat),t.request({url:n.globalData.get_request_url("extraction","useraddress"),method:"POST",data:e,dataType:"json",success:function(e){if(t.hideLoading(),t.stopPullDownRefresh(),0==e.data.code)if(e.data.data.length>0){var o=0;for(var s in e.data.data)1==e.data.data[s]["is_default"]&&(o=e.data.data[s]["id"]);a.setData({data_list:e.data.data,is_default:o,data_list_loding_status:3,data_bottom_line_status:!0})}else a.setData({data_list_loding_status:0});else a.setData({data_list_loding_status:0}),n.globalData.is_login_check(e.data,a,"get_data_list")&&n.globalData.showToast(e.data.msg)},fail:function(){t.hideLoading(),t.stopPullDownRefresh(),a.setData({data_list_loding_status:2}),n.globalData.showToast("服务器请求出错")}})},address_map_event:function(t){var a=t.currentTarget.dataset.index||0,e=this.data_list[a]||null;if(null==e)return n.globalData.showToast("地址有误"),!1;var o=e.alias||e.name||"",s=(e.province_name||"")+(e.city_name||"")+(e.county_name||"")+(e.address||"");n.globalData.open_location(e.lng,e.lat,o,s)},address_conent_event:function(a){var e=a.currentTarget.dataset.index||0,o=this.params.is_back||0;1==o&&(t.setStorage({key:n.globalData.data.cache_buy_user_address_select_key,data:this.data_list[e]}),t.navigateBack())}}};a.default=l}).call(this,e("543d")["default"])},"9cb4":function(t,a,e){"use strict";e.r(a);var n=e("6e17"),o=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=o.a},a8e8:function(t,a,e){"use strict";e.r(a);var n=e("2af3"),o=e("9cb4");for(var s in o)"default"!==s&&function(t){e.d(a,t,(function(){return o[t]}))}(s);e("1bfa");var i,l=e("f0c5"),r=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);a["default"]=r.exports},b4f9:function(t,a,e){},f66b:function(t,a,e){"use strict";(function(t){e("7abb");n(e("66fd"));var a=n(e("a8e8"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(a.default)}).call(this,e("543d")["createPage"])}},[["f66b","common/runtime","common/vendor"]]]);