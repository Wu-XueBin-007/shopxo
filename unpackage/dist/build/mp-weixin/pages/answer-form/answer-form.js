(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/answer-form/answer-form"],{"2f2d":function(t,a,e){"use strict";(function(t){e("7abb");n(e("66fd"));var a=n(e("7ab2"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(a.default)}).call(this,e("543d")["createPage"])},"55c5":function(t,a,e){"use strict";e.r(a);var n=e("c3eb"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a},"6d78":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var o=function(){var t=this,a=t.$createElement;t._self._c},i=[]},"7ab2":function(t,a,e){"use strict";e.r(a);var n=e("6d78"),o=e("55c5");for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);var s,l=e("f0c5"),u=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);a["default"]=u.exports},c3eb:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=getApp(),o=function(){e.e("components/no-data/no-data").then(function(){return resolve(e("126b"))}.bind(null,e)).catch(e.oe)},i={data:function(){return{data_list_loding_status:1,data_list_loding_msg:"处理错误",form_submit_loading:!1}},components:{componentNoData:o},props:{},onLoad:function(){},onShow:function(){this.init(),n.globalData.show_share_menu()},methods:{init:function(){var a=n.globalData.get_user_info(this,"init");if(0!=a){if(n.globalData.user_is_need_login(a))return t.redirectTo({url:"/pages/login/login?event_callback=init"}),!1;this.setData({data_list_loding_status:0})}else this.setData({data_list_loding_status:2,data_list_loding_msg:"用户未登录"})},formSubmit:function(a){var e=this,o=[{fields:"name",msg:"请填写联系人"},{fields:"tel",msg:"请填写联系电话"},{fields:"content",msg:"请填写内容"}];n.globalData.fields_check(a.detail.value,o)&&(t.showLoading({title:"提交中..."}),this.setData({form_submit_loading:!0}),t.request({url:n.globalData.get_request_url("add","answer"),method:"POST",data:a.detail.value,dataType:"json",success:function(a){t.hideLoading(),0==a.data.code?(n.globalData.showToast(a.data.msg,"success"),setTimeout((function(){t.redirectTo({url:"/pages/user-answer-list/user-answer-list"})}),2e3)):(e.setData({form_submit_loading:!1}),n.globalData.is_login_check(a.data)?n.globalData.showToast(a.data.msg):n.globalData.showToast("提交失败，请重试！"))},fail:function(){t.hideLoading(),e.setData({form_submit_loading:!1}),n.globalData.showToast("服务器请求出错")}}))}}};a.default=i}).call(this,e("543d")["default"])}},[["2f2d","common/runtime","common/vendor"]]]);