(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/web-view/web-view"],{"0361":function(e,n,t){"use strict";var u;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return u}));var r=function(){var e=this,n=e.$createElement;e._self._c},a=[]},2760:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=getApp(),r={data:function(){return{web_url:null}},components:{},props:{},onLoad:function(e){var n=decodeURIComponent(e.url)||null;if(null!=n&&n.indexOf("{token}")>=0){var t=u.globalData.get_user_cache_info(),r=0==t?null:t.token||null;null!=r&&(n=n.replace(/{token}/gi,r))}this.setData({web_url:n})},methods:{}};n.default=r},"2de6":function(e,n,t){"use strict";t.r(n);var u=t("0361"),r=t("d976");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);var o,l=t("f0c5"),c=Object(l["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);n["default"]=c.exports},9914:function(e,n,t){"use strict";(function(e){t("7abb");u(t("66fd"));var n=u(t("2de6"));function u(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},d976:function(e,n,t){"use strict";t.r(n);var u=t("2760"),r=t.n(u);for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);n["default"]=r.a}},[["9914","common/runtime","common/vendor"]]]);