(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-address-save/user-address-save"],{2003:function(t,a,e){"use strict";var i=e("de94"),s=e.n(i);s.a},"5f2f":function(t,a,e){"use strict";(function(t){e("7abb");i(e("66fd"));var a=i(e("a4e4"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(a.default)}).call(this,e("543d")["createPage"])},"8bee":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=getApp(),i=e.globalData.get_static_url("common"),s={data:function(){return{common_static_url:i,params:null,data_list_loding_status:1,data_list_loding_msg:"",editor_path_type:"",address_data:{},province_list:[],city_list:[],county_list:[],province_id:null,city_id:null,county_id:null,idcard_images_data:{},default_province:"请选择省",default_city:"请选择市",default_county:"请选择区/县",province_value:null,city_value:null,county_value:null,user_location_cache_key:e.globalData.data.cache_userlocation_key,user_location:null,form_submit_disabled_status:!1,home_user_address_map_status:0,home_user_address_idcard_status:0}},components:{},props:{},onLoad:function(t){this.setData({params:t})},onReady:function(){t.setNavigationBarTitle({title:"地址"+(null==(this.params.id||null)?"添加":"编辑")}),this.init_config(),t.removeStorage({key:this.user_location_cache_key}),this.init()},onShow:function(){this.user_location_init(),e.globalData.show_share_menu()},methods:{init_config:function(t){1==(t||!1)?this.setData({home_user_address_map_status:e.globalData.get_config("config.home_user_address_map_status"),home_user_address_idcard_status:e.globalData.get_config("config.home_user_address_idcard_status")}):e.globalData.is_config(this,"init_config")},init:function(){var a=e.globalData.get_user_info(this,"init");if(0!=a){if(e.globalData.user_is_need_login(a))return t.redirectTo({url:"/pages/login/login?event_callback=init"}),this.setData({data_list_loding_status:2,data_list_loding_msg:"请先绑定手机号码"}),!1;this.get_province_list(),this.get_data()}else this.setData({data_list_loding_status:2,data_list_loding_msg:"请先授权用户信息"})},get_data:function(){var a=this;t.request({url:e.globalData.get_request_url("detail","useraddress"),method:"POST",data:a.params,dataType:"json",success:function(t){if(0==t.data.code){var i=t.data.data||null,s=i.data||null,l={idcard_front:null==s?"":s.idcard_front||"",idcard_back:null==s?"":s.idcard_back||""};if(a.setData({address_data:s||{},idcard_images_data:l,editor_path_type:i.editor_path_type||""}),null!=s){a.setData({province_id:s.province||null,city_id:s.city||null,county_id:s.county||null});var n=s.lng||0,o=s.lat||0;0!=n&&0!=o&&a.setData({user_location:{lng:n,lat:o,address:s.address||""}})}a.get_city_list(),a.get_county_list(),setTimeout((function(){a.init_region_value()}),500)}else e.globalData.is_login_check(t.data)&&e.globalData.showToast(t.data.msg)},fail:function(){e.globalData.showToast("省份信息失败")}})},init_region_value:function(){this.setData({province_value:this.get_region_value("province_list","province_id"),city_value:this.get_region_value("city_list","city_id"),county_value:this.get_region_value("county_list","county_id")})},get_region_value:function(t,a){var e=this[t],i=this[a],s=null;return e.forEach((function(t,a){if(t.id==i)return s=a,!1})),s},get_province_list:function(){var a=this;t.request({url:e.globalData.get_request_url("index","region"),method:"POST",data:{},dataType:"json",success:function(t){if(0==t.data.code){var i=t.data.data;a.setData({province_list:i})}else e.globalData.showToast(t.data.msg)},fail:function(){e.globalData.showToast("省份获取失败")}})},get_city_list:function(){var a=this;this.province_id&&t.request({url:e.globalData.get_request_url("index","region"),method:"POST",data:{pid:this.province_id},dataType:"json",success:function(t){if(0==t.data.code){var i=t.data.data;a.setData({city_list:i})}else e.globalData.showToast(t.data.msg)},fail:function(){e.globalData.showToast("城市获取失败")}})},get_county_list:function(){var a=this;this.city_id&&t.request({url:e.globalData.get_request_url("index","region"),method:"POST",data:{pid:this.city_id},dataType:"json",success:function(t){if(0==t.data.code){var i=t.data.data;a.setData({county_list:i})}else e.globalData.showToast(t.data.msg)},fail:function(){e.globalData.showToast("区/县获取失败")}})},select_province_event:function(t){var a=t.detail.value||0;if(a>=0){var e=this.province_list[a];this.setData({province_value:a,province_id:e.id,city_value:null,county_value:null,city_id:null,county_id:null}),this.get_city_list()}},select_city_event:function(t){var a=t.detail.value||0;if(a>=0){var e=this.city_list[a];this.setData({city_value:a,city_id:e.id,county_value:null,county_id:null}),this.get_county_list()}},select_county_event:function(t){var a=t.detail.value||0;if(a>=0){var e=this.county_list[a];this.setData({county_value:a,county_id:e.id})}},region_select_error_event:function(t){var a=t.currentTarget.dataset.value||null;null!=a&&e.globalData.showToast(a)},choose_location_event:function(a){t.navigateTo({url:"/pages/common/open-setting-location/open-setting-location"})},user_location_init:function(){var a=t.getStorageSync(this.user_location_cache_key)||null,e=null;null!=a&&(e={name:a.name||null,address:a.address||null,lat:a.latitude||null,lng:a.longitude||null}),this.setData({user_location:e})},file_upload_event:function(a){var i=a.currentTarget.dataset.value||null;if(null==i)return e.globalData.showToast("表单名称类型有误"),!1;var s=this;t.chooseImage({count:1,success:function(t){var a=0,e=0,l=t.tempFilePaths.length,n=0;s.upload_one_by_one(t.tempFilePaths,a,e,n,l,i)}})},upload_one_by_one:function(a,i,s,l,n,o){var u=this;t.uploadFile({url:e.globalData.get_request_url("index","ueditor"),filePath:a[l],name:"upfile",formData:{action:"uploadimage",path_type:u.editor_path_type},success:function(t){if(i++,200==t.statusCode){var a="object"==typeof t.data?t.data:JSON.parse(t.data);if(0==a.code&&null!=(a.data.url||null)){var s=u.idcard_images_data||{};s[o]=a.data.url,u.setData({idcard_images_data:s})}else e.globalData.showToast(a.msg)}},fail:function(t){s++},complete:function(t){l++,l>=n||u.upload_one_by_one(a,i,s,l,n,o)}})},upload_delete_event:function(a){var i=a.currentTarget.dataset.value||null;if(null==i)return e.globalData.showToast("表单名称类型有误"),!1;var s=this;t.showModal({title:"温馨提示",content:"删除后不可恢复、继续吗？",success:function(t){if(t.confirm){var a=s.idcard_images_data||{};a[i]="",s.setData({idcard_images_data:a})}}})},form_submit:function(a){var i=this,s=a.detail.value,l=[{fields:"name",msg:"请填写联系人"},{fields:"tel",msg:"请填写联系电话"},{fields:"province",msg:"请选择省份"},{fields:"city",msg:"请选择城市"},{fields:"county",msg:"请选择区县"},{fields:"address",msg:"请填写详细地址"}];1==this.home_user_address_map_status&&(l.push({fields:"lng",msg:"请选择地理位置"}),l.push({fields:"lat",msg:"请选择地理位置"})),1==this.home_user_address_idcard_status&&(l.push({fields:"idcard_name",msg:"请填写身份证姓名"}),l.push({fields:"idcard_number",msg:"请填写身份证号码"}),l.push({fields:"idcard_front",msg:"请上传身份证正面照片"}),l.push({fields:"idcard_back",msg:"请上传身份证背面照片"}),s["idcard_front"]=this.idcard_images_data.idcard_front||"",s["idcard_back"]=this.idcard_images_data.idcard_back||""),s["province"]=this.province_id,s["city"]=this.city_id,s["county"]=this.county_id,s["id"]=this.params.id||0,s["is_default"]=1==s.is_default?1:0;var n=0,o=0;null!=(this.user_location||null)&&(n=this.user_location.lng||0,o=this.user_location.lat||0),null!=(this.address_data||null)&&(null==(n||null)&&(n=this.address_data.lng||0),null==(o||null)&&(o=this.address_data.lat||0)),s["lng"]=n,s["lat"]=o,e.globalData.fields_check(s,l)&&(this.setData({form_submit_disabled_status:!0}),t.showLoading({title:"处理中..."}),t.request({url:e.globalData.get_request_url("save","useraddress"),method:"POST",data:s,dataType:"json",success:function(a){t.hideLoading(),0==a.data.code?(e.globalData.showToast(a.data.msg,"success"),setTimeout((function(){t.navigateBack()}),1e3)):(i.setData({form_submit_disabled_status:!1}),e.globalData.is_login_check(a.data)?e.globalData.showToast(a.data.msg):e.globalData.showToast("提交失败，请重试！"))},fail:function(){i.setData({form_submit_disabled_status:!1}),t.hideLoading(),e.globalData.showToast("服务器请求出错")}}))}}};a.default=s}).call(this,e("543d")["default"])},a4e4:function(t,a,e){"use strict";e.r(a);var i=e("a759"),s=e("df2b");for(var l in s)"default"!==l&&function(t){e.d(a,t,(function(){return s[t]}))}(l);e("2003");var n,o=e("f0c5"),u=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],n);a["default"]=u.exports},a759:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return l})),e.d(a,"a",(function(){return i}));var s=function(){var t=this,a=t.$createElement;t._self._c},l=[]},de94:function(t,a,e){},df2b:function(t,a,e){"use strict";e.r(a);var i=e("8bee"),s=e.n(i);for(var l in i)"default"!==l&&function(t){e.d(a,t,(function(){return i[t]}))}(l);a["default"]=s.a}},[["5f2f","common/runtime","common/vendor"]]]);