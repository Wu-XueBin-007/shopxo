(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugins/label/detail/detail"],{"042f":function(a,t,e){"use strict";(function(a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=getApp(),s=function(){e.e("components/no-data/no-data").then(function(){return resolve(e("126b"))}.bind(null,e)).catch(e.oe)},n=function(){e.e("components/bottom-line/bottom-line").then(function(){return resolve(e("e5fd"))}.bind(null,e)).catch(e.oe)},o=l.globalData.get_static_url("common"),i={data:function(){return{common_static_url:o,data_list_loding_status:1,data_list_loding_msg:"",data_bottom_line_status:!1,currency_symbol:l.globalData.data.currency_symbol,params:null,data_list:[],data_total:0,data_page_total:0,data_page:1,label:null,search_nav_sort_list:[{name:"综合",field:"default",sort:"asc",icon:null},{name:"销量",field:"sales",sort:"asc",icon:"default"},{name:"热度",field:"access",sort:"asc",icon:"default"},{name:"价格",field:"price",sort:"asc",icon:"default"},{name:"最新",field:"new",sort:"asc",icon:"default"}],search_nav_sort_value:"",share_info:{}}},components:{componentNoData:s,componentBottomLine:n},props:{},onLoad:function(a){this.setData({params:a})},onShow:function(){this.init_config(),this.get_data()},onPullDownRefresh:function(){this.setData({data_page:1}),this.get_data_list(1)},methods:{init_config:function(a){1==(a||!1)?this.setData({currency_symbol:l.globalData.get_config("currency_symbol")}):l.globalData.is_config(this,"init_config")},get_data:function(){var t=this;a.showLoading({title:"加载中..."}),a.request({url:l.globalData.get_request_url("detailinit","index","label"),method:"POST",data:{id:this.params.id||0},dataType:"json",success:function(e){if(a.hideLoading(),a.stopPullDownRefresh(),0==e.data.code){var s=e.data.data,n=s.label||null;t.setData({data_base:s.base||null,label:n,data_list_loding_status:null==n?0:1,data_list_loding_msg:"标签数据不存在"}),null!=t.label&&(t.setData({share_info:{title:t.label.seo_title||t.label.name,desc:t.label.seo_desc,path:"/pages/plugins/label/detail/detail"}}),null!=(t.label.name||null)&&a.setNavigationBarTitle({title:t.label.name})),t.get_data_list(1)}else t.setData({data_list_loding_status:0,data_list_loding_msg:e.data.msg}),l.globalData.showToast(e.data.msg);l.globalData.show_share_menu()},fail:function(){a.hideLoading(),a.stopPullDownRefresh(),t.setData({data_list_loding_status:2}),l.globalData.showToast("服务器请求出错")}})},get_data_list:function(t){var e=this;return null==(this.label||null)||0==(t||0)&&1==this.data_bottom_line_status?(a.stopPullDownRefresh(),!1):(a.showLoading({title:"加载中...",mask:!0}),void a.request({url:l.globalData.get_request_url("detailgoodslist","index","label"),method:"POST",data:{id:this.params.id||0,page:this.data_page,ov:this.search_nav_sort_value},dataType:"json",success:function(t){if(a.hideLoading(),a.stopPullDownRefresh(),0==t.data.code){var s=t.data.data;if(s.data.length>0){if(e.data_page<=1)var n=s.data;else{n=e.data_list||[];var o=s.data;for(var i in o)n.push(o[i])}e.setData({data_list:n,data_total:s.total,data_page_total:s.page_total,data_list_loding_status:3,data_page:e.data_page+1}),e.setData({data_bottom_line_status:e.data_page>1&&e.data_page>e.data_page_total})}else e.setData({data_list_loding_status:0}),e.data_page<=1&&e.setData({data_list:[],data_bottom_line_status:!1})}else e.setData({data_list_loding_status:0,data_list_loding_msg:t.data.msg}),l.globalData.showToast(t.data.msg)},fail:function(){a.hideLoading(),a.stopPullDownRefresh(),e.setData({data_list_loding_status:2}),l.globalData.showToast("服务器请求出错")}}))},scroll_lower:function(a){this.get_data_list()},nav_sort_event:function(a){var t=a.currentTarget.dataset.index||0,e=(this.post_data,this.search_nav_sort_list),l="desc"==e[t]["sort"]?"asc":"desc";for(var s in e)s!=t&&(null!=e[s]["icon"]&&(e[s]["icon"]="default"),e[s]["sort"]="desc");e[t]["sort"]=l,null!=e[t]["icon"]&&(e[t]["icon"]=l),this.setData({search_nav_sort_value:e[t]["field"]+"-"+l,search_nav_sort_list:e,data_page:1}),this.get_data_list(1)}}};t.default=i}).call(this,e("543d")["default"])},3144:function(a,t,e){"use strict";(function(a){e("7abb");l(e("66fd"));var t=l(e("b4e3"));function l(a){return a&&a.__esModule?a:{default:a}}wx.__webpack_require_UNI_MP_PLUGIN__=e,a(t.default)}).call(this,e("543d")["createPage"])},"5aef":function(a,t,e){"use strict";var l=e("fd70"),s=e.n(l);s.a},"8d10":function(a,t,e){"use strict";var l;e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return l}));var s=function(){var a=this,t=a.$createElement;a._self._c},n=[]},b4e3:function(a,t,e){"use strict";e.r(t);var l=e("8d10"),s=e("f46e");for(var n in s)"default"!==n&&function(a){e.d(t,a,(function(){return s[a]}))}(n);e("5aef");var o,i=e("f0c5"),d=Object(i["a"])(s["default"],l["b"],l["c"],!1,null,null,null,!1,l["a"],o);t["default"]=d.exports},f46e:function(a,t,e){"use strict";e.r(t);var l=e("042f"),s=e.n(l);for(var n in l)"default"!==n&&function(a){e.d(t,a,(function(){return l[a]}))}(n);t["default"]=s.a},fd70:function(a,t,e){}},[["3144","common/runtime","common/vendor"]]]);