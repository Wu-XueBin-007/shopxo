(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugins/distribution/order-detail/order-detail"],{"35af":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var o=function(){var t=this,a=t.$createElement;t._self._c},i=[]},"36f3":function(t,a,e){"use strict";e.r(a);var n=e("35af"),o=e("93e1");for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("4c9c");var l,s=e("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],l);a["default"]=u.exports},"4c9c":function(t,a,e){"use strict";var n=e("77bc"),o=e.n(n);o.a},"504f":function(t,a,e){"use strict";(function(t){e("7abb");n(e("66fd"));var a=n(e("36f3"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(a.default)}).call(this,e("543d")["createPage"])},"77bc":function(t,a,e){},"93e1":function(t,a,e){"use strict";e.r(a);var n=e("a33b"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a},a33b:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=getApp(),o=function(){e.e("components/no-data/no-data").then(function(){return resolve(e("126b"))}.bind(null,e)).catch(e.oe)},i=function(){e.e("components/bottom-line/bottom-line").then(function(){return resolve(e("e5fd"))}.bind(null,e)).catch(e.oe)},l={data:function(){return{params:null,data_list_loding_status:1,data_list_loding_msg:"",data_bottom_line_status:!1,detail:null,detail_list:[]}},components:{componentNoData:o,componentBottomLine:i},props:{},onLoad:function(t){this.setData({params:t}),this.init()},onShow:function(){n.globalData.show_share_menu()},onPullDownRefresh:function(){this.init()},methods:{init:function(){var a=this;t.showLoading({title:"加载中..."}),this.setData({data_list_loding_status:1}),t.request({url:n.globalData.get_request_url("detail","order","distribution"),method:"POST",data:{id:this.params.id},dataType:"json",success:function(e){if(t.hideLoading(),t.stopPullDownRefresh(),0==e.data.code){var o=e.data.data;a.setData({detail:o.data,detail_list:[{name:"用户昵称",value:o.data.user_name_view||""},{name:"订单金额",value:o.data.total_price+" 元"||!1},{name:"退款金额",value:o.data.refund_price+" 元"||!1},{name:"订单状态",value:o.data.order_status_name||""},{name:"支付状态",value:o.data.order_pay_status_name||""},{name:"来源终端",value:o.data.order_client_type_name||""},{name:"下单时间",value:o.data.add_time_time||""}],data_list_loding_status:3,data_bottom_line_status:!0,data_list_loding_msg:""})}else a.setData({data_list_loding_status:2,data_bottom_line_status:!1,data_list_loding_msg:e.data.msg}),n.globalData.is_login_check(e.data,a,"init")&&n.globalData.showToast(e.data.msg)},fail:function(){t.hideLoading(),t.stopPullDownRefresh(),a.setData({data_list_loding_status:2,data_bottom_line_status:!1,data_list_loding_msg:"服务器请求出错"}),n.globalData.showToast("服务器请求出错")}})},avatar_event:function(a){var e=a.currentTarget.dataset.value||null;null!=e?t.previewImage({current:e,urls:[e]}):n.globalData.showToast("头像地址有误")}}};a.default=l}).call(this,e("543d")["default"])}},[["504f","common/runtime","common/vendor"]]]);