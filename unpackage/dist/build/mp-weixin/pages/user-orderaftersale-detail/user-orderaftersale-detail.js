(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-orderaftersale-detail/user-orderaftersale-detail"],{"24e4":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=getApp(),n=function(){a.e("components/popup/popup").then(function(){return resolve(a("b1e3"))}.bind(null,a)).catch(a.oe)},o=function(){a.e("components/no-data/no-data").then(function(){return resolve(a("126b"))}.bind(null,a)).catch(a.oe)},r=function(){a.e("components/bottom-line/bottom-line").then(function(){return resolve(a("e5fd"))}.bind(null,a)).catch(a.oe)},i=s.globalData.get_static_url("common"),_={data:function(){return{common_static_url:i,params:null,data_list_loding_status:1,data_list_loding_msg:"",data_bottom_line_status:!1,popup_delivery_status:!1,editor_path_type:"",order_data:null,new_aftersale_data:null,step_data:null,returned_data:null,return_only_money_reason:[],return_money_goods_reason:[],aftersale_type_list:[],reason_data_list:[],return_goods_address:null,panel_base_data_list:[{name:"退款类型",field:"type_text"},{name:"当前状态",field:"status_text"},{name:"申请原因",field:"reason"},{name:"退货数量",field:"number"},{name:"退款金额",field:"price"},{name:"退款说明",field:"msg"},{name:"退款方式",field:"refundment_text"},{name:"拒绝原因",field:"refuse_reason"},{name:"申请时间",field:"apply_time_time"},{name:"确认时间",field:"confirm_time_time"},{name:"退货时间",field:"delivery_time_time"},{name:"审核时间",field:"audit_time_time"},{name:"取消时间",field:"cancel_time_time"},{name:"添加时间",field:"add_time_time"},{name:"更新时间",field:"upd_time_time"}],panel_express_data_list:[{name:"快递名称",field:"express_name"},{name:"快递单号",field:"express_number"},{name:"退货时间",field:"delivery_time_time"}],form_button_disabled:!1,form_type:null,form_reason_index:null,form_price:"",form_msg:"",form_number:0,form_images_list:[],form_express_name:"",form_express_number:""}},components:{componentPopup:n,componentNoData:o,componentBottomLine:r},props:{},onLoad:function(e){this.setData({params:e,popup_delivery_status:1==(e.is_delivery_popup||0)})},onShow:function(){this.init(),s.globalData.show_share_menu()},onPullDownRefresh:function(){this.init()},methods:{init:function(){var t=this;e.showLoading({title:"加载中..."}),this.setData({data_list_loding_status:1}),e.request({url:s.globalData.get_request_url("aftersale","orderaftersale"),method:"POST",data:{oid:this.params.oid,did:this.params.did},dataType:"json",success:function(a){if(e.hideLoading(),e.stopPullDownRefresh(),0==a.data.code){var n=a.data.data;t.setData({data_list_loding_status:3,data_bottom_line_status:!0,data_list_loding_msg:"",editor_path_type:n.editor_path_type||"",order_data:n.order_data||null,new_aftersale_data:null==(n.new_aftersale_data||null)||n.new_aftersale_data.length<=0?null:n.new_aftersale_data,step_data:n.step_data||null,returned_data:n.returned_data||null,return_only_money_reason:n.return_only_money_reason||[],return_money_goods_reason:n.return_money_goods_reason||[],aftersale_type_list:n.aftersale_type_list||[],return_goods_address:n.return_goods_address||null,form_price:n.returned_data?n.returned_data.refund_price:0})}else t.setData({data_list_loding_status:0,data_bottom_line_status:!1,data_list_loding_msg:a.data.msg}),s.globalData.is_login_check(a.data,t,"init")&&s.globalData.showToast(a.data.msg)},fail:function(){e.hideLoading(),e.stopPullDownRefresh(),t.setData({data_list_loding_status:2,data_bottom_line_status:!1,data_list_loding_msg:"服务器请求出错"}),s.globalData.showToast("服务器请求出错")}})},form_type_event:function(e){var t=e.currentTarget.dataset.value;this.setData({form_type:t,form_reason_index:this.form_type==t?this.form_reason_index:null,reason_data_list:0==t?this.return_only_money_reason:this.return_money_goods_reason,form_number:0==t?0:this.returned_data.returned_quantity})},form_reason_event:function(e){this.setData({form_reason_index:e.detail.value})},form_number_event:function(e){this.setData({form_number:e.detail.value})},form_price_event:function(e){this.setData({form_price:e.detail.value})},form_msg_event:function(e){this.setData({form_msg:e.detail.value})},form_express_name_event:function(e){this.setData({form_express_name:e.detail.value})},form_express_number_event:function(e){this.setData({form_express_number:e.detail.value})},upload_show_event:function(t){e.previewImage({current:this.form_images_list[t.currentTarget.dataset.index],urls:this.form_images_list})},upload_delete_event:function(t){var a=this;e.showModal({title:"温馨提示",content:"删除后不可恢复、继续吗？",success:function(e){if(e.confirm){var s=a.form_images_list;s.splice(t.currentTarget.dataset.index,1),a.setData({form_images_list:s})}}})},file_upload_event:function(t){var a=this;e.chooseImage({count:3,success:function(e){var t=0,s=0,n=e.tempFilePaths.length,o=0;a.upload_one_by_one(e.tempFilePaths,t,s,o,n)}})},upload_one_by_one:function(t,a,n,o,r){var i=this;i.form_images_list.length<3&&e.uploadFile({url:s.globalData.get_request_url("index","ueditor"),filePath:t[o],name:"upfile",formData:{action:"uploadimage",path_type:i.editor_path_type},success:function(e){if(a++,200==e.statusCode){var t="object"==typeof e.data?e.data:JSON.parse(e.data);if(0==t.code&&null!=(t.data.url||null)){var n=i.form_images_list;n.push(t.data.url),i.setData({form_images_list:n})}else s.globalData.showToast(t.msg)}},fail:function(e){n++},complete:function(e){o++,o>=r||i.upload_one_by_one(t,a,n,o,r)}})},form_submit_event:function(t){var a={order_id:this.params.oid,order_detail_id:this.params.did,type:this.form_type,reason:this.reason_data_list[this.form_reason_index],number:0==this.form_type?0:this.form_number,price:this.form_price,msg:this.form_msg,images:this.form_images_list.length>0?JSON.stringify(this.form_images_list):""};a["price"]>this.returned_data["refund_price"]&&(a["price"]=this.returned_data["refund_price"]),a["number"]>this.returned_data["returned_quantity"]&&(a["number"]=this.returned_data["returned_quantity"]);var n=[{fields:"type",msg:"请选择操作类型",is_can_zero:1},{fields:"reason",msg:"请选择原因"}];if(1==a["type"]&&n.push({fields:"number",msg:"请选择退货数量"}),s.globalData.fields_check(a,n)){var o=this;e.showLoading({title:"处理中..."}),o.setData({form_button_disabled:!0}),e.request({url:s.globalData.get_request_url("create","orderaftersale"),method:"POST",data:a,dataType:"json",success:function(t){e.hideLoading(),0==t.data.code?(s.globalData.showToast(t.data.msg,"success"),setTimeout((function(){o.setData({form_button_disabled:!1}),o.init()}),1e3)):(o.setData({form_button_disabled:!1}),s.globalData.showToast(t.data.msg))},fail:function(){e.hideLoading(),o.setData({form_button_disabled:!1}),s.globalData.showToast("服务器请求出错")}})}},delivery_submit_event:function(e){this.setData({popup_delivery_status:!0})},popup_delivery_close_event:function(e){this.setData({popup_delivery_status:!1})},form_delivery_submit_event:function(t){var a={id:this.new_aftersale_data.id,express_name:this.form_express_name,express_number:this.form_express_number},n=[{fields:"express_name",msg:"请填写快递名称"},{fields:"express_number",msg:"请填写快递单号"}];if(s.globalData.fields_check(a,n)){var o=this;e.showLoading({title:"处理中..."}),o.setData({form_button_disabled:!0}),e.request({url:s.globalData.get_request_url("delivery","orderaftersale"),method:"POST",data:a,dataType:"json",success:function(t){e.hideLoading(),o.setData({popup_delivery_status:!1}),0==t.data.code?(s.globalData.showToast(t.data.msg,"success"),setTimeout((function(){o.setData({form_button_disabled:!1}),o.init()}),1e3)):(o.setData({form_button_disabled:!1}),s.globalData.showToast(t.data.msg))},fail:function(){e.hideLoading(),o.setData({form_button_disabled:!1}),s.globalData.showToast("服务器请求出错")}})}},images_view_event:function(t){e.previewImage({current:this.new_aftersale_data.images[t.currentTarget.dataset.index],urls:this.new_aftersale_data.images})},show_aftersale_event:function(t){e.navigateTo({url:"/pages/user-orderaftersale/user-orderaftersale?keywords="+this.new_aftersale_data.order_no})}}};t.default=_}).call(this,a("543d")["default"])},7573:function(e,t,a){"use strict";a.r(t);var s=a("24e4"),n=a.n(s);for(var o in s)"default"!==o&&function(e){a.d(t,e,(function(){return s[e]}))}(o);t["default"]=n.a},"7bbc":function(e,t,a){},"808d":function(e,t,a){"use strict";var s;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s}));var n=function(){var e=this,t=e.$createElement;e._self._c},o=[]},a792:function(e,t,a){"use strict";a.r(t);var s=a("808d"),n=a("7573");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("a842");var r,i=a("f0c5"),_=Object(i["a"])(n["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],r);t["default"]=_.exports},a842:function(e,t,a){"use strict";var s=a("7bbc"),n=a.n(s);n.a},d840:function(e,t,a){"use strict";(function(e){a("7abb");s(a("66fd"));var t=s(a("a792"));function s(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=a,e(t.default)}).call(this,a("543d")["createPage"])}},[["d840","common/runtime","common/vendor"]]]);