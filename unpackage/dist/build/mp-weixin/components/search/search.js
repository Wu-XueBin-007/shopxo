(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/search/search"],{"5c55":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),r={data:function(){return{}},components:{},props:{propUrl:{type:String,default:"/pages/goods-search/goods-search"},propFormName:{type:String,default:"keywords"},propPlaceholder:{type:String,default:"其实搜索很简单 ^_^!"},propBgColor:{type:String,default:"#f0f0f0"},propBrColor:{type:String,default:""}},methods:{search_input_event:function(e){var r=e.detail.value||null;if(null==r)return n.globalData.showToast("请输入搜索关键字"),!1;t.navigateTo({url:this.propUrl+"?"+this.propFormName+"="+r})}}};e.default=r}).call(this,n("543d")["default"])},6558:function(t,e,n){"use strict";n.r(e);var r=n("5c55"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},7207:function(t,e,n){"use strict";var r=n("d491"),a=n.n(r);a.a},"817d":function(t,e,n){"use strict";n.r(e);var r=n("fabd"),a=n("6558");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("7207");var u,l=n("f0c5"),c=Object(l["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=c.exports},d491:function(t,e,n){},fabd:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/search/search-create-component',
    {
        'components/search/search-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("817d"))
        })
    },
    [['components/search/search-create-component']]
]);
