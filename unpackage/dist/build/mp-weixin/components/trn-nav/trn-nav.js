(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/trn-nav/trn-nav"],{1964:function(t,n,r){"use strict";r.r(n);var a=r("c86c"),e=r("c759");for(var o in e)"default"!==o&&function(t){r.d(n,t,(function(){return e[t]}))}(o);r("7929");var u,i=r("f0c5"),c=Object(i["a"])(e["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=c.exports},7929:function(t,n,r){"use strict";var a=r("db06"),e=r.n(a);e.a},c759:function(t,n,r){"use strict";r.r(n);var a=r("f7ae"),e=r.n(a);for(var o in a)"default"!==o&&function(t){r.d(n,t,(function(){return a[t]}))}(o);n["default"]=e.a},c86c:function(t,n,r){"use strict";var a;r.d(n,"b",(function(){return e})),r.d(n,"c",(function(){return o})),r.d(n,"a",(function(){return a}));var e=function(){var t=this,n=t.$createElement;t._self._c},o=[]},db06:function(t,n,r){},f7ae:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=getApp(),e={data:function(){return{statusbar_height:0,nav_style:""}},props:{propTitle:String,propBackgroundColor:String,propEnt:String,propScroll:Number,propHeight:Number},watch:{propScroll:function(t,n){var r=0;t>=70&&t<=100&&(r=.2),t>=101&&t<=120&&(r=.3),t>=120&&t<=150&&(r=.5),t>=150&&t<=170&&(r=.7),t>=170&&t<=190&&(r=1),t>190&&(r=1),t<=70&&(r=0),this.nav_style="opacity:"+r+";",this.nav_style+="height:"+(this.propHeight+this.statusbar_height)+"rpx;"}},methods:{},mounted:function(){this.statusbar_height=a.globalData.px_to_rpx(a.globalData.get_system_info("statusBarHeight",0))}};n.default=e}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/trn-nav/trn-nav-create-component',
    {
        'components/trn-nav/trn-nav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1964"))
        })
    },
    [['components/trn-nav/trn-nav-create-component']]
]);
