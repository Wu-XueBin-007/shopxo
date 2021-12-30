(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/layout/layout"],{"34c8":function(t,n,a){"use strict";var o;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return c})),a.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement;t._self._c},c=[]},b07f:function(t,n,a){},b489:function(t,n,a){"use strict";a.r(n);var o=a("34c8"),i=a("b5ea");for(var c in i)"default"!==c&&function(t){a.d(n,t,(function(){return i[t]}))}(c);a("ef50");var r,e=a("f0c5"),u=Object(e["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=u.exports},b5ea:function(t,n,a){"use strict";a.r(n);var o=a("c668"),i=a.n(o);for(var c in o)"default"!==c&&function(t){a.d(n,t,(function(){return o[t]}))}(c);n["default"]=i.a},c668:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=getApp(),i={data:function(){return{is_first:1,currency_symbol:o.globalData.data.currency_symbol,indicator_color:"rgba(0, 0, 0, .2)",indicator_active_color:"#666",circular:!0}},components:{},props:{propData:Array},beforeMount:function(){this.init_config()},onPageShow:function(){this.init_config(),0==this.is_first&&o.globalData.init_config(),this.setData({is_first:0})},methods:{init_config:function(t){1==(t||!1)?this.setData({currency_symbol:o.globalData.get_config("currency_symbol")||o.globalData.data.currency_symbol}):o.globalData.is_config(this,"init_config")},layout_url_event:function(t){o.globalData.url_event(t)}}};n.default=i},ef50:function(t,n,a){"use strict";var o=a("b07f"),i=a.n(o);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/layout/layout-create-component',
    {
        'components/layout/layout-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b489"))
        })
    },
    [['components/layout/layout-create-component']]
]);
