(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugins/signin/user-qrcode-saveinfo/user-qrcode-saveinfo"],{"2e7f":function(a,t,n){"use strict";var s;n.d(t,"b",(function(){return e})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s}));var e=function(){var a=this,t=a.$createElement;a._self._c},i=[]},"364c":function(a,t,n){},"49f2":function(a,t,n){"use strict";(function(a){n("7abb");s(n("66fd"));var t=s(n("dddb"));function s(a){return a&&a.__esModule?a:{default:a}}wx.__webpack_require_UNI_MP_PLUGIN__=n,a(t.default)}).call(this,n("543d")["createPage"])},"4ae8":function(a,t,n){"use strict";var s=n("364c"),e=n.n(s);e.a},"595c":function(a,t,n){"use strict";(function(a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=getApp(),e=function(){n.e("components/no-data/no-data").then(function(){return resolve(n("126b"))}.bind(null,n)).catch(n.oe)},i={data:function(){return{params:null,form_submit_loading:!1,data_list_loding_status:1,data_list_loding_msg:"",data_base:null,data:null}},components:{componentNoData:e},props:{},onLoad:function(a){this.setData({params:a}),this.init()},onReady:function(){a.setNavigationBarTitle({title:"签到码"+(null==(this.params.id||null)?"添加":"编辑")})},onShow:function(){s.globalData.show_share_menu()},onPullDownRefresh:function(){this.init()},methods:{init:function(){var t=this;a.showLoading({title:"加载中..."}),this.setData({data_list_loding_status:1}),a.request({url:s.globalData.get_request_url("saveinfo","userqrcode","signin"),method:"POST",data:this.params,dataType:"json",success:function(n){if(a.hideLoading(),a.stopPullDownRefresh(),0==n.data.code){var e=n.data.data;t.setData({data_base:e.base||null,data:e.data||null,data_list_loding_status:0})}else t.setData({data_list_loding_status:2,data_list_loding_msg:n.data.msg}),s.globalData.is_login_check(n.data,t,"init")&&s.globalData.showToast(n.data.msg)},fail:function(){a.hideLoading(),a.stopPullDownRefresh(),t.setData({data_list_loding_status:2,data_list_loding_msg:"服务器请求出错"}),s.globalData.showToast("服务器请求出错")}})},formSubmit:function(t){var n=this,e=t.detail.value;null!=(this.data||null)&&(e["id"]=this.data.id||0);var i=[];null!=(this.data_base||null)&&1==(this.data_base.is_qrcode_must_userinfo||0)&&(i.push({fields:"name",msg:"请填写联系人姓名格式 2~30 个字符之间"}),i.push({fields:"tel",msg:"请填写联系人电话 6~15 个字符"}),i.push({fields:"address",msg:"请填写联系人地址、最多230个字符"})),s.globalData.fields_check(e,i)&&(a.showLoading({title:"提交中..."}),this.setData({form_submit_loading:!0}),a.request({url:s.globalData.get_request_url("save","userqrcode","signin"),method:"POST",data:e,dataType:"json",success:function(t){if(a.hideLoading(),0==t.data.code){s.globalData.showToast(t.data.msg,"success");var e=null!=(n.params||null)&&1==(n.params.is_team||0);setTimeout((function(){e?a.redirectTo({url:"/pages/plugins/signin/index-detail/index-detail?id="+t.data.data}):a.navigateBack()}),2e3)}else n.setData({form_submit_loading:!1}),s.globalData.is_login_check(t.data)?s.globalData.showToast(t.data.msg):s.globalData.showToast("提交失败，请重试！")},fail:function(){a.hideLoading(),n.setData({form_submit_loading:!1}),s.globalData.showToast("服务器请求出错")}}))}}};t.default=i}).call(this,n("543d")["default"])},"74f6":function(a,t,n){"use strict";n.r(t);var s=n("595c"),e=n.n(s);for(var i in s)"default"!==i&&function(a){n.d(t,a,(function(){return s[a]}))}(i);t["default"]=e.a},dddb:function(a,t,n){"use strict";n.r(t);var s=n("2e7f"),e=n("74f6");for(var i in e)"default"!==i&&function(a){n.d(t,a,(function(){return e[a]}))}(i);n("4ae8");var o,l=n("f0c5"),u=Object(l["a"])(e["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],o);t["default"]=u.exports}},[["49f2","common/runtime","common/vendor"]]]);