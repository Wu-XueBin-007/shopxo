(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user-order-comments/user-order-comments"],{

/***/ 137:
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/main.js?{"page":"pages%2Fuser-order-comments%2Fuser-order-comments"} ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _userOrderComments = _interopRequireDefault(__webpack_require__(/*! ./pages/user-order-comments/user-order-comments.vue */ 138));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_userOrderComments.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 138:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/user-order-comments/user-order-comments.vue ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_order_comments_vue_vue_type_template_id_5a77869c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-order-comments.vue?vue&type=template&id=5a77869c& */ 139);
/* harmony import */ var _user_order_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-order-comments.vue?vue&type=script&lang=js& */ 141);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_order_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_order_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _user_order_comments_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-order-comments.vue?vue&type=style&index=0&lang=css& */ 143);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_order_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_order_comments_vue_vue_type_template_id_5a77869c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_order_comments_vue_vue_type_template_id_5a77869c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _user_order_comments_vue_vue_type_template_id_5a77869c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/user-order-comments/user-order-comments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 139:
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/user-order-comments/user-order-comments.vue?vue&type=template&id=5a77869c& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_template_id_5a77869c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-order-comments.vue?vue&type=template&id=5a77869c& */ 140);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_template_id_5a77869c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_template_id_5a77869c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_template_id_5a77869c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_template_id_5a77869c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 140:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/user-order-comments/user-order-comments.vue?vue&type=template&id=5a77869c& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 141:
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/user-order-comments/user-order-comments.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-order-comments.vue?vue&type=script&lang=js& */ 142);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 142:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/user-order-comments/user-order-comments.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var app = getApp();var componentNoData = function componentNoData() {__webpack_require__.e(/*! require.ensure | components/no-data/no-data */ "components/no-data/no-data").then((function () {return resolve(__webpack_require__(/*! ../../components/no-data/no-data */ 447));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var componentBottomLine = function componentBottomLine() {__webpack_require__.e(/*! require.ensure | components/bottom-line/bottom-line */ "components/bottom-line/bottom-line").then((function () {return resolve(__webpack_require__(/*! ../../components/bottom-line/bottom-line */ 454));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};



var common_static_url = app.globalData.get_static_url('common');var _default =
{
  data: function data() {
    return {
      common_static_url: common_static_url,
      data_list_loding_status: 1,
      data_list_loding_msg: '',
      params: null,
      detail: null,
      editor_path_type: '',
      rating_msg: ['非常差', '差', '一般', '好', '非常好'],
      anonymous_value: 0,
      anonymous_msg_list: ['你写的评论会以匿名的形式展现', '你写的评论会以昵称的形式展现'],
      form_rating_list: [],
      form_images_list: [],
      form_content_list: [],
      form_button_disabled: false };

  },

  components: {
    componentNoData: componentNoData,
    componentBottomLine: componentBottomLine },

  props: {},

  onLoad: function onLoad(params) {
    this.setData({
      params: params });

  },

  onShow: function onShow() {
    // 数据加载
    this.init();

    // 显示分享菜单
    app.globalData.show_share_menu();
  },

  // 下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {
    this.init();
  },

  methods: {
    init: function init() {
      var self = this;
      uni.showLoading({
        title: "加载中..." });

      this.setData({
        data_list_loding_status: 1 });

      uni.request({
        url: app.globalData.get_request_url("comments", "order"),
        method: "POST",
        data: {
          id: this.params.id },

        dataType: "json",
        success: function success(res) {
          uni.hideLoading();
          uni.stopPullDownRefresh();
          if (res.data.code == 0) {
            var data = res.data.data;
            self.setData({
              editor_path_type: data.editor_path_type || '',
              detail: data.data,
              data_list_loding_status: 3,
              data_list_loding_msg: '' });

          } else {
            self.setData({
              data_list_loding_status: 2,
              data_list_loding_msg: res.data.msg });

            if (app.globalData.is_login_check(res.data, self, 'init')) {
              app.globalData.showToast(res.data.msg);
            }
          }
        },
        fail: function fail() {
          uni.hideLoading();
          uni.stopPullDownRefresh();
          self.setData({
            data_list_loding_status: 2,
            data_list_loding_msg: '服务器请求出错' });

          app.globalData.showToast("服务器请求出错");
        } });

    },

    // 上传图片预览
    upload_show_event: function upload_show_event(e) {
      var index = e.currentTarget.dataset.index;
      var ix = e.currentTarget.dataset.ix;
      uni.previewImage({
        current: this.form_images_list[index][ix],
        urls: this.form_images_list[index] });

    },

    // 图片删除
    upload_delete_event: function upload_delete_event(e) {
      var index = e.currentTarget.dataset.index;
      var ix = e.currentTarget.dataset.ix;
      var self = this;
      uni.showModal({
        title: '温馨提示',
        content: '删除后不可恢复、继续吗？',
        success: function success(res) {
          if (res.confirm) {
            var list = self.form_images_list;
            list[index].splice(ix, 1);
            self.setData({
              form_images_list: list });

          }
        } });

    },

    // 文件上传
    file_upload_event: function file_upload_event(e) {
      // 数据初始化
      var index = e.currentTarget.dataset.index;
      var temp_list = this.form_images_list;
      var length = this.detail.items.length;
      for (var i = 0; i < length; i++) {
        if (temp_list[i] == undefined) {
          temp_list[i] = [];
        }
      }
      this.setData({
        form_images_list: temp_list });


      // 处理上传文件
      var self = this;
      uni.chooseImage({
        count: 3,
        success: function success(res) {
          var success = 0;
          var fail = 0;
          var length = res.tempFilePaths.length;
          var count = 0;
          self.upload_one_by_one(index, res.tempFilePaths, success, fail, count, length);
        } });

    },

    // 采用递归的方式上传多张
    upload_one_by_one: function upload_one_by_one(index, img_paths, _success, _fail, count, length) {
      var self = this;
      if ((self.form_images_list[index] || null) == null || self.form_images_list[index].length < 3) {
        uni.uploadFile({
          url: app.globalData.get_request_url("index", "ueditor"),
          filePath: img_paths[count],
          name: 'upfile',
          formData: {
            action: 'uploadimage',
            path_type: self.editor_path_type },

          success: function success(res) {
            _success++;
            if (res.statusCode == 200) {
              var data = typeof res.data == 'object' ? res.data : JSON.parse(res.data);
              if (data.code == 0 && (data.data.url || null) != null) {
                var list = self.form_images_list;
                if ((list[index] || null) == null) {
                  list[index] = [];
                }
                list[index].push(data.data.url);
                self.setData({
                  form_images_list: list });

              } else {
                app.globalData.showToast(data.msg);
              }
            }
          },
          fail: function fail(e) {
            _fail++;
          },
          complete: function complete(e) {
            count++;

            // 下一张
            if (count >= length) {
              // 上传完毕，作一下提示
              //app.showToast('上传成功' + success +'张', 'success');
            } else {
              // 递归调用，上传下一张
              self.upload_one_by_one(index, img_paths, _success, _fail, count, length);
            }
          } });

      }
    },

    // 是否匿名事件
    anonymous_event: function anonymous_event(e) {
      this.setData({
        anonymous_value: e.detail.value == true ? 1 : 0 });

    },

    // 评分事件
    rating_event: function rating_event(e) {
      // 参数
      var index = e.currentTarget.dataset.index;
      var value = e.currentTarget.dataset.value;

      // 数据初始化/赋值
      var temp_list = this.form_rating_list;
      var length = this.detail.items.length;
      for (var i = 0; i < length; i++) {
        if (temp_list[i] == undefined) {
          temp_list[i] = 0;
        }
        if (index == i) {
          temp_list[i] = value;
        }
      }
      this.setData({
        form_rating_list: temp_list });

    },

    // 评论内容
    form_content_event: function form_content_event(e) {
      // 参数
      var index = e.currentTarget.dataset.index;
      var value = e.detail.value;

      // 数据初始化/赋值
      var temp_list = this.form_content_list;
      var length = this.detail.items.length;
      for (var i = 0; i < length; i++) {
        if (temp_list[i] == undefined) {
          temp_list[i] = '';
        }
        if (index == i) {
          temp_list[i] = value;
        }
      }
      this.setData({
        form_content_list: temp_list });

    },

    // 表单
    formSubmit: function formSubmit(e) {
      // 商品数量
      var length = this.detail.items.length;

      // 评分校验
      var count = this.form_rating_list.length;
      if (count < length) {
        app.globalData.showToast('请先评分');
        return false;
      }
      var max = Math.max.apply(null, this.form_rating_list);
      var min = Math.min.apply(null, this.form_rating_list);

      if (min < 1 || max > 5) {
        app.globalData.showToast('还有未评分');
        return false;
      }

      // 内容校验
      var count = this.form_content_list.length;
      if (count < length) {
        app.globalData.showToast('请填写评论内容');
        return false;
      }

      for (var i in this.form_content_list) {
        var count = this.form_content_list[i].length;
        if (count < 6 || count > 230) {
          app.globalData.showToast('评论内容 6~230 个字符之间');
          return false;
        }
      }

      // 图片校验
      if (this.form_images_list.length > 0) {
        for (var i in this.form_images_list) {
          if (this.form_images_list[i].length > 3) {
            app.globalData.showToast('每项评论图片不能超过3张');
            return false;
          }
        }
      }

      // 表单数据
      var form_data = e.detail.value;
      form_data['is_anonymous'] = form_data['is_anonymous'] == true ? 1 : 0;
      form_data['id'] = this.detail.id;
      form_data['goods_id'] = JSON.stringify(this.detail.items.map(function (v) {
        return v.goods_id;
      }));
      form_data['rating'] = JSON.stringify(this.form_rating_list);
      form_data['content'] = JSON.stringify(this.form_content_list);
      form_data['images'] = this.form_images_list.length > 0 ? JSON.stringify(this.form_images_list) : '';

      // 提交表单
      var self = this;
      uni.showLoading({
        title: "处理中..." });

      self.setData({
        form_button_disabled: true });

      uni.request({
        url: app.globalData.get_request_url("commentssave", "order"),
        method: "POST",
        data: form_data,
        dataType: "json",
        success: function success(res) {
          uni.hideLoading();
          if (res.data.code == 0) {
            app.globalData.showToast(res.data.msg, "success");
            setTimeout(function () {
              uni.navigateBack();
            }, 2000);
          } else {
            self.setData({
              form_button_disabled: false });

            app.globalData.showToast(res.data.msg);
          }
        },
        fail: function fail() {
          uni.hideLoading();
          self.setData({
            form_button_disabled: false });

          app.globalData.showToast("服务器请求出错");
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 143:
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/user-order-comments/user-order-comments.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-order-comments.vue?vue&type=style&index=0&lang=css& */ 144);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_order_comments_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 144:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/user-order-comments/user-order-comments.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[137,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user-order-comments/user-order-comments.js.map