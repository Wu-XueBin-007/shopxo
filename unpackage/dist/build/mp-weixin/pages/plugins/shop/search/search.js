(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugins/shop/search/search"],{"05a7":function(t,a,e){},"15a0":function(t,a,e){"use strict";var s;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return s}));var o=function(){var t=this,a=t.$createElement;t._self._c},i=[]},3649:function(t,a,e){"use strict";var s=e("05a7"),o=e.n(s);o.a},4090:function(t,a,e){"use strict";(function(t){e("7abb");s(e("66fd"));var a=s(e("8ac5"));function s(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(a.default)}).call(this,e("543d")["createPage"])},"693c":function(t,a,e){"use strict";e.r(a);var s=e("b22f"),o=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(a,t,(function(){return s[t]}))}(i);a["default"]=o.a},"8ac5":function(t,a,e){"use strict";e.r(a);var s=e("15a0"),o=e("693c");for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("3649");var n,l=e("f0c5"),_=Object(l["a"])(o["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],n);a["default"]=_.exports},b22f:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=getApp(),o=function(){e.e("components/popup/popup").then(function(){return resolve(e("b1e3"))}.bind(null,e)).catch(e.oe)},i=function(){e.e("components/no-data/no-data").then(function(){return resolve(e("126b"))}.bind(null,e)).catch(e.oe)},n=function(){e.e("components/bottom-line/bottom-line").then(function(){return resolve(e("e5fd"))}.bind(null,e)).catch(e.oe)},l=s.globalData.get_static_url("common"),_={data:function(){return{common_static_url:l,data_list_loding_status:1,data_bottom_line_status:!1,currency_symbol:s.globalData.data.currency_symbol,data_list:[],data_total:0,data_page_total:0,data_page:1,params:null,post_data:{},shop:null,is_show_popup_form:!1,popup_form_loading_status:!1,search_nav_sort_list:[{name:"综合",field:"default",sort:"asc",icon:null},{name:"销量",field:"sales_count",sort:"asc",icon:"default"},{name:"热度",field:"access_count",sort:"asc",icon:"default"},{name:"价格",field:"min_price",sort:"asc",icon:"default"},{name:"最新",field:"id",sort:"asc",icon:"default"}],search_map_list:{category_list:[]},map_fields_list:{category_list:{height:"82rpx",default:"82rpx",form_key:"category_ids"}},share_info:{}}},components:{componentPopup:o,componentNoData:i,componentBottomLine:n},props:{},onLoad:function(t){this.setData({params:t,post_data:{wd:t.keywords||"",shop_id:t.shop_id||0,category_ids:0==(t.category_id||0)?"":JSON.stringify({0:t.category_id})}})},onShow:function(){this.init_config(),this.get_data()},onPullDownRefresh:function(){this.setData({data_page:1}),this.get_data_list(1)},methods:{init_config:function(t){1==(t||!1)?this.setData({currency_symbol:s.globalData.get_config("currency_symbol")}):s.globalData.is_config(this,"init_config")},search_event:function(){this.setData({data_list:[],data_page:1}),this.get_data_list(1)},get_data:function(){var a=this;t.showLoading({title:"加载中...",mask:!0});var e=this.request_map_handle();t.request({url:s.globalData.get_request_url("index","search","shop"),method:"POST",data:e,dataType:"json",success:function(e){if(t.hideLoading(),t.stopPullDownRefresh(),0==e.data.code){var o=e.data.data,i=o.shop_goods_category||[];if(0!=(a.params.category_id||0)&&i.length>0)for(var n in i)i[n]["active"]=i[n]["id"]==a.params.category_id?1:0;if(a.setData({shop:o.shop||null,search_map_info:o.search_map_info||[],search_map_list:{category_list:i}}),null!=(a.shop||null)){var l=a.shop.id,_=a.params.category_id||0,r=a.params.keywords||"";a.setData({share_info:{title:a.shop.seo_title||a.shop.name,desc:a.shop.seo_desc||a.shop.describe,path:"/pages/plugins/shop/search/search",query:"shop_id="+l+"&category_id="+_+"&keywords="+r,img:a.shop.logo}}),a.get_data_list(1)}else a.setData({data_list_loding_status:0,data_bottom_line_status:!1})}else a.setData({data_list_loding_status:0}),s.globalData.showToast(e.data.msg);s.globalData.show_share_menu()},fail:function(){t.hideLoading(),t.stopPullDownRefresh(),a.setData({data_list_loding_status:2}),s.globalData.showToast("服务器请求出错")}})},get_data_list:function(a){var e=this;if(0==(a||0)&&1==this.data_bottom_line_status)return t.stopPullDownRefresh(),!1;t.showLoading({title:"加载中...",mask:!0});var o=this.request_map_handle();t.request({url:s.globalData.get_request_url("datalist","search","shop"),method:"POST",data:o,dataType:"json",success:function(a){if(t.hideLoading(),t.stopPullDownRefresh(),0==a.data.code){var o=a.data.data;if(o.data.length>0){if(e.data_page<=1)var i=o.data;else{i=e.data_list||[];var n=o.data;for(var l in n)i.push(n[l])}e.setData({data_list:i,data_total:o.total,data_page_total:o.page_total,data_list_loding_status:3,data_page:e.data_page+1}),e.setData({data_bottom_line_status:e.data_page>1&&e.data_page>e.data_page_total})}else e.setData({data_list_loding_status:0,data_total:0}),e.data_page<=1&&e.setData({data_list:[],data_bottom_line_status:!1})}else e.setData({data_list_loding_status:0}),s.globalData.showToast(a.data.msg)},fail:function(){t.hideLoading(),t.stopPullDownRefresh(),e.setData({data_list_loding_status:2}),s.globalData.showToast("服务器请求出错")}})},request_map_handle:function(){var t=this.params,a=this.post_data;a["page"]=this.data_page,a["shop_id"]=t["shop_id"]||0;var e=this.map_fields_list,o=this.search_map_list;for(var i in e)if(null!=o[i]!=null&&o[i].length>0){var n={},l=0;for(var _ in o[i])1==(o[i][_]["active"]||0)&&(n[l]=o[i][_]["id"],l++);a[e[i]["form_key"]]=s.globalData.get_length(n)>0?JSON.stringify(n):""}return a},scroll_lower:function(t){this.get_data_list()},form_submit_event:function(t){this.setData({post_data:t.detail.value,data_page:1}),this.popup_form_event_close(),this.get_data_list(1)},popup_form_event_close:function(t){this.setData({is_show_popup_form:!1})},popup_form_event_show:function(t){this.setData({is_show_popup_form:!0})},nav_sort_event:function(t){var a=t.currentTarget.dataset.index||0,e=this.post_data,s=this.search_nav_sort_list,o="desc"==s[a]["sort"]?"asc":"desc";for(var i in s)i!=a&&(null!=s[i]["icon"]&&(s[i]["icon"]="default"),s[i]["sort"]="desc");s[a]["sort"]=o,null!=s[a]["icon"]&&(s[a]["icon"]=o),e["order_by_field"]=s[a]["field"],e["order_by_type"]=o,this.setData({post_data:e,search_nav_sort_list:s,data_page:1}),this.get_data_list(1)},more_event:function(t){var a=t.currentTarget.dataset.value||null,e=this.map_fields_list;null!=a&&null!=(e[a]||null)&&(e[a]["height"]="auto"==e[a]["height"]?e[a]["default"]:"auto",this.setData({map_fields_list:e}))},map_item_event:function(t){var a=t.currentTarget.dataset.index,e=t.currentTarget.dataset.field,s=this.search_map_list;null!=(s[e]||null)&&null!=(s[e][a]||null)&&(s[e][a]["active"]=0==(s[e][a]["active"]||0)?1:0,this.setData({search_map_list:s}))},map_remove_event:function(t){var a=this.search_map_list,e=this.post_data;for(var s in e["wd"]="",a)if(null!=(a[s]||null)&&a[s].length>0)for(var o in a[s])a[s][o]["active"]=0;this.setData({search_map_list:a,post_data:e,is_show_popup_form:!1,data_page:1}),this.get_data_list(1)}}};a.default=_}).call(this,e("543d")["default"])}},[["4090","common/runtime","common/vendor"]]]);