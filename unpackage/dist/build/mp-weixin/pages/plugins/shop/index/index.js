(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugins/shop/index/index"],{"0bc0":function(a,t,e){"use strict";(function(a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=getApp(),s=function(){e.e("components/no-data/no-data").then(function(){return resolve(e("126b"))}.bind(null,e)).catch(e.oe)},o=function(){e.e("components/bottom-line/bottom-line").then(function(){return resolve(e("e5fd"))}.bind(null,e)).catch(e.oe)},l={data:function(){return{data_list_loding_status:1,data_list_loding_msg:"",data_bottom_line_status:!1,data_list:[],data_total:0,data_page_total:0,data_page:1,params:null,data_base:null,shop_category:[],nav_active_value:0,share_info:{}}},components:{componentNoData:s,componentBottomLine:o},props:{},onLoad:function(a){this.setData({params:a}),this.get_data()},onPullDownRefresh:function(){this.setData({data_page:1}),this.get_data_list(1)},methods:{get_data:function(){var t=this;a.showLoading({title:"加载中..."}),a.request({url:n.globalData.get_request_url("index","index","shop"),method:"POST",data:{},dataType:"json",success:function(e){if(a.hideLoading(),a.stopPullDownRefresh(),0==e.data.code){var s=e.data.data;t.setData({data_base:s.base||null,shop_category:s.shop_category||[]}),null!=(t.data_base||null)&&(t.setData({share_info:{title:t.data_base.seo_title||t.data_base.application_name,desc:t.data_base.seo_desc,path:"/pages/plugins/shop/index/index"}}),null!=(t.data_base.application_name||null)&&a.setNavigationBarTitle({title:t.data_base.application_name})),t.get_data_list(1)}else t.setData({data_list_loding_status:0,data_list_loding_msg:e.data.msg}),n.globalData.showToast(e.data.msg);n.globalData.show_share_menu()},fail:function(){a.hideLoading(),a.stopPullDownRefresh(),t.setData({data_list_loding_status:2}),n.globalData.showToast("服务器请求出错")}})},get_data_list:function(t){var e=this;if(0==(t||0)&&1==this.data_bottom_line_status)return a.stopPullDownRefresh(),!1;a.showLoading({title:"加载中..."}),a.request({url:n.globalData.get_request_url("shoplist","index","shop"),method:"POST",data:{page:this.data_page,category_id:this.nav_active_value||0},dataType:"json",success:function(t){if(a.hideLoading(),a.stopPullDownRefresh(),0==t.data.code){var s=t.data.data;if(s.data.length>0){if(e.data_page<=1)var o=s.data;else{o=e.data_list||[];var l=s.data;for(var i in l)o.push(l[i])}e.setData({data_list:o,data_total:s.total,data_page_total:s.page_total,data_list_loding_status:3,data_page:e.data_page+1}),e.setData({data_bottom_line_status:e.data_page>1&&e.data_page>e.data_page_total})}else e.setData({data_list_loding_status:0}),e.data_page<=1&&e.setData({data_list:[],data_bottom_line_status:!1})}else e.setData({data_list_loding_status:0,data_list_loding_msg:t.data.msg}),n.globalData.showToast(t.data.msg)},fail:function(){a.hideLoading(),a.stopPullDownRefresh(),e.setData({data_list_loding_status:2}),n.globalData.showToast("服务器请求出错")}})},scroll_lower:function(a){this.get_data_list(1)},nav_event:function(a){this.setData({nav_active_value:a.currentTarget.dataset.value||0,data_page:1}),this.get_data_list(11)}}};t.default=l}).call(this,e("543d")["default"])},"0cbb":function(a,t,e){"use strict";e.r(t);var n=e("0bc0"),s=e.n(n);for(var o in n)"default"!==o&&function(a){e.d(t,a,(function(){return n[a]}))}(o);t["default"]=s.a},b5ec:function(a,t,e){"use strict";(function(a){e("7abb");n(e("66fd"));var t=n(e("f4b37"));function n(a){return a&&a.__esModule?a:{default:a}}wx.__webpack_require_UNI_MP_PLUGIN__=e,a(t.default)}).call(this,e("543d")["createPage"])},d456:function(a,t,e){"use strict";var n=e("f7ce"),s=e.n(n);s.a},e6d8:function(a,t,e){"use strict";var n;e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return n}));var s=function(){var a=this,t=a.$createElement;a._self._c},o=[]},f4b37:function(a,t,e){"use strict";e.r(t);var n=e("e6d8"),s=e("0cbb");for(var o in s)"default"!==o&&function(a){e.d(t,a,(function(){return s[a]}))}(o);e("d456");var l,i=e("f0c5"),d=Object(i["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],l);t["default"]=d.exports},f7ce:function(a,t,e){}},[["b5ec","common/runtime","common/vendor"]]]);