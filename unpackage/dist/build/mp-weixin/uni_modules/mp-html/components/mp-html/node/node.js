(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/mp-html/components/mp-html/node/node"],{"3d66":function(t,i,n){},"438c":function(t,i,n){"use strict";n.r(i);var r=n("7a62"),e=n("d6aa");for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);n("7794");var s,a=n("f0c5"),c=n("f3f3"),u=Object(a["a"])(e["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);"function"===typeof c["a"]&&Object(c["a"])(u),i["default"]=u.exports},7794:function(t,i,n){"use strict";var r=n("3d66"),e=n.n(r);e.a},"7a62":function(t,i,n){"use strict";var r;n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return r}));var e=function(){var t=this,i=t.$createElement;t._self._c},o=[]},bda3:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=function(){Promise.resolve().then(function(){return resolve(n("438c"))}.bind(null,n)).catch(n.oe)},e={name:"node",options:{virtualHost:!0},data:function(){return{ctrl:{}}},props:{name:String,attrs:{type:Object,default:function(){return{}}},childs:Array,opts:Array},components:{node:r},mounted:function(){var t=this;this.$nextTick((function(){for(t.root=t.$parent;"mp-html"!==t.root.$options.name;t.root=t.root.$parent);}))},beforeDestroy:function(){},methods:{toJSON:function(){},play:function(i){if(this.root.pauseVideo){for(var n=!1,r=i.target.id,e=this.root._videos.length;e--;)this.root._videos[e].id===r?n=!0:this.root._videos[e].pause();if(!n){var o=t.createVideoContext(r,this);o.id=r,this.root._videos.push(o)}}},imgTap:function(i){var n=this.childs[i.currentTarget.dataset.i];n.a?this.linkTap(n.a):n.attrs.ignore||(this.root.$emit("imgtap",n.attrs),this.root.previewImg&&t.previewImage({current:parseInt(n.attrs.i),urls:this.root.imgList}))},imgLongTap:function(t){},imgLoad:function(t){var i=t.currentTarget.dataset.i;this.childs[i].w?(this.opts[1]&&!this.ctrl[i]||-1===this.ctrl[i])&&this.$set(this.ctrl,i,1):this.$set(this.ctrl,i,t.detail.width)},linkTap:function(i){var n=i.currentTarget?this.childs[i.currentTarget.dataset.i]:{},r=n.attrs||i,e=r.href;this.root.$emit("linktap",Object.assign({innerText:this.root.getText(n.children||[])},r)),e&&("#"===e[0]?this.root.navigateTo(e.substring(1)).catch((function(){})):e.split("?")[0].includes("://")?this.root.copyLink&&t.setClipboardData({data:e,success:function(){return t.showToast({title:"链接已复制"})}}):t.navigateTo({url:e,fail:function(){t.switchTab({url:e,fail:function(){}})}}))},mediaError:function(t){var i=t.currentTarget.dataset.i,n=this.childs[i];if("video"===n.name||"audio"===n.name){var r=(this.ctrl[i]||0)+1;if(r>n.src.length&&(r=0),r<n.src.length)return void this.$set(this.ctrl,i,r)}else"img"===n.name&&this.opts[2]&&this.$set(this.ctrl,i,-1);this.root&&this.root.$emit("error",{source:n.name,attrs:n.attrs,errMsg:t.detail.errMsg})}}};i.default=e}).call(this,n("543d")["default"])},d6aa:function(t,i,n){"use strict";n.r(i);var r=n("bda3"),e=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(i,t,(function(){return r[t]}))}(o);i["default"]=e.a},f3f3:function(t,i,n){"use strict";var r=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[])};i["a"]=r}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/mp-html/components/mp-html/node/node-create-component',
    {
        'uni_modules/mp-html/components/mp-html/node/node-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("438c"))
        })
    },
    [['uni_modules/mp-html/components/mp-html/node/node-create-component']]
]);