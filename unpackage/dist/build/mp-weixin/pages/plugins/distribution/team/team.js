(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugins/distribution/team/team"],{"0376":function(t,a,e){"use strict";(function(t){e("7abb");n(e("66fd"));var a=n(e("a641"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(a.default)}).call(this,e("543d")["createPage"])},"26c6":function(t,a,e){"use strict";var n=e("f978"),o=e.n(n);o.a},"5c19":function(t,a,e){"use strict";e.r(a);var n=e("fa9d"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a},"626b":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var o=function(){var t=this,a=t.$createElement;t._self._c},i=[]},a641:function(t,a,e){"use strict";e.r(a);var n=e("626b"),o=e("5c19");for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("26c6");var s,l=e("f0c5"),d=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);a["default"]=d.exports},f978:function(t,a,e){},fa9d:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=getApp(),o=function(){e.e("components/no-data/no-data").then(function(){return resolve(e("126b"))}.bind(null,e)).catch(e.oe)},i=function(){e.e("components/bottom-line/bottom-line").then(function(){return resolve(e("e5fd"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{data_list:[],data_total:0,data_page_total:0,data_page:1,data_list_loding_status:1,data_bottom_line_status:!1,params:null,content_list:[{name:"消费金额",field:"order_total",unit:"元"},{name:"下级消费",field:"find_order_total",unit:"元"},{name:"下级用户",field:"referrer_count"}]}},components:{componentNoData:o,componentBottomLine:i},props:{},onLoad:function(t){this.setData({params:t}),this.init()},onShow:function(){n.globalData.show_share_menu()},onPullDownRefresh:function(){this.setData({data_page:1}),this.get_data_list(1)},methods:{init:function(){var a=n.globalData.get_user_info(this,"init");if(0!=a){if(n.globalData.user_is_need_login(a))return t.redirectTo({url:"/pages/login/login?event_callback=init"}),!1;this.get_data_list()}else this.setData({data_list_loding_status:0,data_bottom_line_status:!1})},get_data_list:function(a){var e=this;if(0==(a||0)&&1==this.data_bottom_line_status)return t.stopPullDownRefresh(),!1;t.showLoading({title:"加载中..."}),this.setData({data_list_loding_status:1}),t.request({url:n.globalData.get_request_url("index","team","distribution"),method:"POST",data:{page:this.data_page},dataType:"json",success:function(a){if(t.hideLoading(),t.stopPullDownRefresh(),0==a.data.code)if(a.data.data.data.length>0){if(e.data_page<=1)var o=a.data.data.data;else{o=e.data_list||[];var i=a.data.data.data;for(var s in i)o.push(i[s])}e.setData({data_list:o,data_total:a.data.data.total,data_page_total:a.data.data.page_total,data_list_loding_status:3,data_page:e.data_page+1}),e.setData({data_bottom_line_status:e.data_page>1&&e.data_page>e.data_page_total})}else e.setData({data_list_loding_status:0,data_list:[],data_bottom_line_status:!1});else e.setData({data_list_loding_status:0}),n.globalData.is_login_check(a.data,e,"get_data_list")&&n.globalData.showToast(a.data.msg)},fail:function(){t.hideLoading(),t.stopPullDownRefresh(),e.setData({data_list_loding_status:2}),n.globalData.showToast("服务器请求出错")}})},scroll_lower:function(t){this.get_data_list()},avatar_event:function(a){var e=a.currentTarget.dataset.value||null;null!=e?t.previewImage({current:e,urls:[e]}):n.globalData.showToast("头像地址有误")},user_order_event:function(a){var e=a.currentTarget.dataset.value;t.navigateTo({url:"/pages/plugins/distribution/order/order?uid="+e})}}};a.default=s}).call(this,e("543d")["default"])}},[["0376","common/runtime","common/vendor"]]]);