(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugins/invoice/invoice-saveinfo/invoice-saveinfo"],{"0449":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=getApp(),n=function(){e.e("components/no-data/no-data").then(function(){return resolve(e("126b"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{params:null,form_submit_loading:!1,data_list_loding_status:1,data_list_loding_msg:"",data_bottom_line_status:!1,data_base:null,apply_type_list:[],can_invoice_type_list:[],invoice_content_list:[],save_base_data:null,data:null,form_invoice_type_index:0,form_apply_type_index:0,form_invoice_content_index:0,form_apply_type_disabled:!1,company_container:!1,company_special_container:!1,addressee_container:!1,email_container:!0}},components:{componentNoData:n},props:{},onLoad:function(t){this.setData({params:t}),this.init()},onReady:function(){t.setNavigationBarTitle({title:"开票"+(null==(this.params.id||null)?"添加":"编辑")})},onShow:function(){i.globalData.show_share_menu()},onPullDownRefresh:function(){this.init()},methods:{init:function(){var a=this;t.showLoading({title:"加载中..."}),this.setData({data_list_loding_status:1}),t.request({url:i.globalData.get_request_url("saveinfo","user","invoice"),method:"POST",data:this.params,dataType:"json",success:function(e){if(t.hideLoading(),t.stopPullDownRefresh(),0==e.data.code){var n=e.data.data,s={data_base:n.base||null,apply_type_list:n.apply_type_list||[],can_invoice_type_list:n.can_invoice_type_list||[],invoice_content_list:n.invoice_content_list||[],save_base_data:n.save_base_data,data:null==(n.data||null)||0==n.data.length?null:n.data,data_list_loding_status:0,data_bottom_line_status:!0,data_list_loding_msg:n.save_base_data.total_price<=0?"发票金额必须大于0":""};if(null!=s.data){var o=s.invoice_content_list.indexOf(s.data.invoice_content);s["form_invoice_type_index"]=s.data.invoice_type,s["form_apply_type_index"]=s.data.apply_type,s["form_invoice_content_index"]=-1==o?0:o,s["form_apply_type_disabled"]=1==s.data.apply_type}a.setData(s),a.invoice_container_handle()}else a.setData({data_list_loding_status:2,data_bottom_line_status:!1,data_list_loding_msg:e.data.msg}),i.globalData.is_login_check(e.data,a,"init")&&i.globalData.showToast(e.data.msg)},fail:function(){t.hideLoading(),t.stopPullDownRefresh(),a.setData({data_list_loding_status:2,data_bottom_line_status:!1,data_list_loding_msg:"服务器请求出错"}),i.globalData.showToast("服务器请求出错")}})},form_invoice_type_event:function(t){this.setData({form_invoice_type_index:t.detail.value}),this.invoice_container_handle()},form_apply_type_event:function(t){this.setData({form_apply_type_index:t.detail.value}),this.invoice_container_handle()},form_invoice_content_event:function(t){this.setData({form_invoice_content_index:t.detail.value})},invoice_container_handle:function(){var t=this.can_invoice_type_list[this.form_invoice_type_index]["id"];switch(2==t?this.setData({form_apply_type_index:1,form_apply_type_disabled:!0}):this.setData({form_apply_type_disabled:!1}),t){case 0:this.setData({company_special_container:!1,addressee_container:!1,email_container:!0});break;case 1:this.setData({company_special_container:!1,addressee_container:!0,email_container:!1});break;case 2:this.setData({company_container:!0,company_special_container:!0,addressee_container:!0,email_container:!1});break}if(2!=t){var a=this.apply_type_list[this.form_apply_type_index]["id"];this.setData({company_container:0!=a})}},formSubmit:function(a){var e=this,n=a.detail.value;null==(this.data||null)?(n["ids"]=this.params.ids||"",n["type"]=this.params.type||""):n["id"]=this.data.id;var s=[{fields:"invoice_type",msg:"请选择发票类型",is_can_zero:1},{fields:"apply_type",msg:"请选择申请类型",is_can_zero:1},{fields:"invoice_title",msg:"请填写发票抬头、最多200个字符"}];if(i.globalData.fields_check(n,s)){var o=this.can_invoice_type_list[this.form_invoice_type_index]["id"],_=this.apply_type_list[this.form_apply_type_index]["id"];1==_&&s.push({fields:"invoice_code",msg:"请填写企业统一社会信用代码或纳税识别号、最多160个字符"}),2==o&&(s.push({fields:"invoice_bank",msg:"请填写企业开户行名称、最多200个字符"}),s.push({fields:"invoice_account",msg:"请填写企业开户帐号、最多160个字符"}),s.push({fields:"invoice_tel",msg:"请填写企业联系电话 6~15 个字符"}),s.push({fields:"invoice_address",msg:"请填写企业注册地址、最多230个字符"})),0!=o&&(s.push({fields:"name",msg:"请填写收件人姓名格式 2~30 个字符之间"}),s.push({fields:"tel",msg:"请填写收件人电话 6~15 个字符"}),s.push({fields:"address",msg:"请填写收件人地址、最多230个字符"})),i.globalData.fields_check(n,s)&&(n["invoice_type"]=this.can_invoice_type_list[this.form_invoice_type_index]["id"],this.invoice_content_list.length>0&&void 0!=this.invoice_content_list[this.form_invoice_content_index]&&(n["invoice_content"]=this.invoice_content_list[this.form_invoice_content_index]),t.showLoading({title:"提交中..."}),this.setData({form_submit_loading:!0}),t.request({url:i.globalData.get_request_url("save","user","invoice"),method:"POST",data:n,dataType:"json",success:function(a){if(t.hideLoading(),0==a.data.code){i.globalData.showToast(a.data.msg,"success");var n=null!=(e.params||null)&&1==(e.params.is_redirect||0);setTimeout((function(){n?t.redirectTo({url:"/pages/plugins/invoice/invoice/invoice"}):t.navigateBack()}),2e3)}else e.setData({form_submit_loading:!1}),i.globalData.is_login_check(a.data)?i.globalData.showToast(a.data.msg):i.globalData.showToast("提交失败，请重试！")},fail:function(){t.hideLoading(),e.setData({form_submit_loading:!1}),i.globalData.showToast("服务器请求出错")}}))}}}};a.default=s}).call(this,e("543d")["default"])},"2b38":function(t,a,e){"use strict";e.r(a);var i=e("5b55"),n=e("6ae4");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("81f2");var o,_=e("f0c5"),l=Object(_["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);a["default"]=l.exports},"44f0":function(t,a,e){},"5b55":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement;t._self._c},s=[]},"6ae4":function(t,a,e){"use strict";e.r(a);var i=e("0449"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},"81f2":function(t,a,e){"use strict";var i=e("44f0"),n=e.n(i);n.a},d122:function(t,a,e){"use strict";(function(t){e("7abb");i(e("66fd"));var a=i(e("2b38"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(a.default)}).call(this,e("543d")["createPage"])}},[["d122","common/runtime","common/vendor"]]]);