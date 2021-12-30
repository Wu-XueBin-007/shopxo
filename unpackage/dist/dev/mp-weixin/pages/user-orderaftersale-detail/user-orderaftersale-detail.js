(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user-orderaftersale-detail/user-orderaftersale-detail"],{

/***/ 205:
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/main.js?{"page":"pages%2Fuser-orderaftersale-detail%2Fuser-orderaftersale-detail"} ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _userOrderaftersaleDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/user-orderaftersale-detail/user-orderaftersale-detail.vue */ 206));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_userOrderaftersaleDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 206:
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/user-orderaftersale-detail/user-orderaftersale-detail.vue ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_orderaftersale_detail_vue_vue_type_template_id_6135d8e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-orderaftersale-detail.vue?vue&type=template&id=6135d8e6& */ 207);
/* harmony import */ var _user_orderaftersale_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-orderaftersale-detail.vue?vue&type=script&lang=js& */ 209);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_orderaftersale_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_orderaftersale_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _user_orderaftersale_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-orderaftersale-detail.vue?vue&type=style&index=0&lang=css& */ 211);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_orderaftersale_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_orderaftersale_detail_vue_vue_type_template_id_6135d8e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_orderaftersale_detail_vue_vue_type_template_id_6135d8e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _user_orderaftersale_detail_vue_vue_type_template_id_6135d8e6___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/user-orderaftersale-detail/user-orderaftersale-detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 207:
/*!***********************************************************************************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/user-orderaftersale-detail/user-orderaftersale-detail.vue?vue&type=template&id=6135d8e6& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_template_id_6135d8e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-orderaftersale-detail.vue?vue&type=template&id=6135d8e6& */ 208);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_template_id_6135d8e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_template_id_6135d8e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_template_id_6135d8e6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_template_id_6135d8e6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 208:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/user-orderaftersale-detail/user-orderaftersale-detail.vue?vue&type=template&id=6135d8e6& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 209:
/*!*****************************************************************************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/user-orderaftersale-detail/user-orderaftersale-detail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-orderaftersale-detail.vue?vue&type=script&lang=js& */ 210);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 210:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/user-orderaftersale-detail/user-orderaftersale-detail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var app = getApp();var componentPopup = function componentPopup() {__webpack_require__.e(/*! require.ensure | components/popup/popup */ "components/popup/popup").then((function () {return resolve(__webpack_require__(/*! ../../components/popup/popup */ 889));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var componentNoData = function componentNoData() {__webpack_require__.e(/*! require.ensure | components/no-data/no-data */ "components/no-data/no-data").then((function () {return resolve(__webpack_require__(/*! ../../components/no-data/no-data */ 447));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var componentBottomLine = function componentBottomLine() {__webpack_require__.e(/*! require.ensure | components/bottom-line/bottom-line */ "components/bottom-line/bottom-line").then((function () {return resolve(__webpack_require__(/*! ../../components/bottom-line/bottom-line */ 454));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};




var common_static_url = app.globalData.get_static_url('common');var _default =
{
  data: function data() {
    return {
      common_static_url: common_static_url,
      params: null,
      data_list_loding_status: 1,
      data_list_loding_msg: '',
      data_bottom_line_status: false,
      popup_delivery_status: false,
      // 接口数据
      editor_path_type: '',
      order_data: null,
      new_aftersale_data: null,
      step_data: null,
      returned_data: null,
      return_only_money_reason: [],
      return_money_goods_reason: [],
      aftersale_type_list: [],
      reason_data_list: [],
      return_goods_address: null,
      // 售后基础信息
      panel_base_data_list: [{
        name: '退款类型',
        field: 'type_text' },
      {
        name: '当前状态',
        field: 'status_text' },
      {
        name: '申请原因',
        field: 'reason' },
      {
        name: '退货数量',
        field: 'number' },
      {
        name: '退款金额',
        field: 'price' },
      {
        name: '退款说明',
        field: 'msg' },
      {
        name: '退款方式',
        field: 'refundment_text' },
      {
        name: '拒绝原因',
        field: 'refuse_reason' },
      {
        name: '申请时间',
        field: 'apply_time_time' },
      {
        name: '确认时间',
        field: 'confirm_time_time' },
      {
        name: '退货时间',
        field: 'delivery_time_time' },
      {
        name: '审核时间',
        field: 'audit_time_time' },
      {
        name: '取消时间',
        field: 'cancel_time_time' },
      {
        name: '添加时间',
        field: 'add_time_time' },
      {
        name: '更新时间',
        field: 'upd_time_time' }],

      // 快递信息
      panel_express_data_list: [{
        name: '快递名称',
        field: 'express_name' },
      {
        name: '快递单号',
        field: 'express_number' },
      {
        name: '退货时间',
        field: 'delivery_time_time' }],

      // 表单数据
      form_button_disabled: false,
      form_type: null,
      form_reason_index: null,
      form_price: '',
      form_msg: '',
      form_number: 0,
      form_images_list: [],
      form_express_name: '',
      form_express_number: '' };

  },

  components: {
    componentPopup: componentPopup,
    componentNoData: componentNoData,
    componentBottomLine: componentBottomLine },

  props: {},

  onLoad: function onLoad(params) {
    this.setData({
      params: params,
      popup_delivery_status: (params.is_delivery_popup || 0) == 1 });

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
    // 获取数据
    init: function init() {
      var self = this;
      uni.showLoading({
        title: "加载中..." });

      this.setData({
        data_list_loding_status: 1 });

      uni.request({
        url: app.globalData.get_request_url("aftersale", "orderaftersale"),
        method: "POST",
        data: {
          oid: this.params.oid,
          did: this.params.did },

        dataType: "json",
        success: function success(res) {
          uni.hideLoading();
          uni.stopPullDownRefresh();
          if (res.data.code == 0) {
            var data = res.data.data;
            self.setData({
              data_list_loding_status: 3,
              data_bottom_line_status: true,
              data_list_loding_msg: '',
              editor_path_type: data.editor_path_type || '',
              order_data: data.order_data || null,
              new_aftersale_data: (data.new_aftersale_data || null) == null || data.new_aftersale_data.length <= 0 ? null : data.new_aftersale_data,
              step_data: data.step_data || null,
              returned_data: data.returned_data || null,
              return_only_money_reason: data.return_only_money_reason || [],
              return_money_goods_reason: data.return_money_goods_reason || [],
              aftersale_type_list: data.aftersale_type_list || [],
              return_goods_address: data.return_goods_address || null,
              form_price: data.returned_data || null != null ? data.returned_data.refund_price : 0 });

          } else {
            self.setData({
              data_list_loding_status: 0,
              data_bottom_line_status: false,
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
            data_bottom_line_status: false,
            data_list_loding_msg: '服务器请求出错' });

          app.globalData.showToast("服务器请求出错");
        } });

    },

    // 类型选择
    form_type_event: function form_type_event(e) {
      var value = e.currentTarget.dataset.value;
      this.setData({
        form_type: value,
        form_reason_index: this.form_type == value ? this.form_reason_index : null,
        reason_data_list: value == 0 ? this.return_only_money_reason : this.return_money_goods_reason,
        form_number: value == 0 ? 0 : this.returned_data.returned_quantity });

    },

    // 原因选择
    form_reason_event: function form_reason_event(e) {
      this.setData({
        form_reason_index: e.detail.value });

    },

    // 商品件数
    form_number_event: function form_number_event(e) {
      this.setData({
        form_number: e.detail.value });

    },

    // 退款金额
    form_price_event: function form_price_event(e) {
      this.setData({
        form_price: e.detail.value });

    },

    // 退款说明
    form_msg_event: function form_msg_event(e) {
      this.setData({
        form_msg: e.detail.value });

    },

    // 快递名称
    form_express_name_event: function form_express_name_event(e) {
      this.setData({
        form_express_name: e.detail.value });

    },

    // 快递单号
    form_express_number_event: function form_express_number_event(e) {
      this.setData({
        form_express_number: e.detail.value });

    },

    // 上传图片预览
    upload_show_event: function upload_show_event(e) {
      uni.previewImage({
        current: this.form_images_list[e.currentTarget.dataset.index],
        urls: this.form_images_list });

    },

    // 图片删除
    upload_delete_event: function upload_delete_event(e) {
      var self = this;
      uni.showModal({
        title: '温馨提示',
        content: '删除后不可恢复、继续吗？',
        success: function success(res) {
          if (res.confirm) {
            var list = self.form_images_list;
            list.splice(e.currentTarget.dataset.index, 1);
            self.setData({
              form_images_list: list });

          }
        } });

    },

    // 文件上传
    file_upload_event: function file_upload_event(e) {
      var self = this;
      uni.chooseImage({
        count: 3,
        success: function success(res) {
          var success = 0;
          var fail = 0;
          var length = res.tempFilePaths.length;
          var count = 0;
          self.upload_one_by_one(res.tempFilePaths, success, fail, count, length);
        } });

    },

    // 采用递归的方式上传多张
    upload_one_by_one: function upload_one_by_one(img_paths, _success, _fail, count, length) {
      var self = this;
      if (self.form_images_list.length < 3) {
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
                list.push(data.data.url);
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
              self.upload_one_by_one(img_paths, _success, _fail, count, length);
            }
          } });

      }
    },

    // 售后表单提交
    form_submit_event: function form_submit_event(e) {
      // 表单数据
      var form_data = {
        order_id: this.params.oid,
        order_detail_id: this.params.did,
        type: this.form_type,
        reason: this.reason_data_list[this.form_reason_index],
        number: this.form_type == 0 ? 0 : this.form_number,
        price: this.form_price,
        msg: this.form_msg,
        images: this.form_images_list.length > 0 ? JSON.stringify(this.form_images_list) : '' };


      // 防止金额大于计算的金额
      if (form_data['price'] > this.returned_data['refund_price']) {
        form_data['price'] = this.returned_data['refund_price'];
      }

      // 防止数量大于计算的数量
      if (form_data['number'] > this.returned_data['returned_quantity']) {
        form_data['number'] = this.returned_data['returned_quantity'];
      }

      // 数据校验
      var validation = [{
        fields: "type",
        msg: "请选择操作类型",
        is_can_zero: 1 },
      {
        fields: "reason",
        msg: "请选择原因" }];

      if (form_data['type'] == 1) {
        validation.push({
          fields: "number",
          msg: "请选择退货数量" });

      }

      // 校验参数并提交
      if (app.globalData.fields_check(form_data, validation)) {
        var self = this;
        uni.showLoading({
          title: "处理中..." });

        self.setData({
          form_button_disabled: true });

        uni.request({
          url: app.globalData.get_request_url("create", "orderaftersale"),
          method: "POST",
          data: form_data,
          dataType: "json",
          success: function success(res) {
            uni.hideLoading();
            if (res.data.code == 0) {
              app.globalData.showToast(res.data.msg, "success");
              setTimeout(function () {
                self.setData({
                  form_button_disabled: false });

                self.init();
              }, 1000);
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

      }
    },

    // 退货开启弹层
    delivery_submit_event: function delivery_submit_event(e) {
      this.setData({
        popup_delivery_status: true });

    },

    // 退货弹层关闭
    popup_delivery_close_event: function popup_delivery_close_event(e) {
      this.setData({
        popup_delivery_status: false });

    },

    // 退货表单
    form_delivery_submit_event: function form_delivery_submit_event(e) {
      // 表单数据
      var form_data = {
        id: this.new_aftersale_data.id,
        express_name: this.form_express_name,
        express_number: this.form_express_number };


      // 数据校验
      var validation = [{
        fields: "express_name",
        msg: "请填写快递名称" },
      {
        fields: "express_number",
        msg: "请填写快递单号" }];


      // 校验参数并提交
      if (app.globalData.fields_check(form_data, validation)) {
        var self = this;
        uni.showLoading({
          title: "处理中..." });

        self.setData({
          form_button_disabled: true });

        uni.request({
          url: app.globalData.get_request_url("delivery", "orderaftersale"),
          method: "POST",
          data: form_data,
          dataType: "json",
          success: function success(res) {
            uni.hideLoading();
            self.setData({
              popup_delivery_status: false });

            if (res.data.code == 0) {
              app.globalData.showToast(res.data.msg, "success");
              setTimeout(function () {
                self.setData({
                  form_button_disabled: false });

                self.init();
              }, 1000);
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

      }
    },

    // 凭证图片预览
    images_view_event: function images_view_event(e) {
      uni.previewImage({
        current: this.new_aftersale_data.images[e.currentTarget.dataset.index],
        urls: this.new_aftersale_data.images });

    },

    // 查看售后数据
    show_aftersale_event: function show_aftersale_event(e) {
      uni.navigateTo({
        url: "/pages/user-orderaftersale/user-orderaftersale?keywords=" + this.new_aftersale_data.order_no });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 211:
/*!*************************************************************************************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/user-orderaftersale-detail/user-orderaftersale-detail.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-orderaftersale-detail.vue?vue&type=style&index=0&lang=css& */ 212);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_orderaftersale_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 212:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/user-orderaftersale-detail/user-orderaftersale-detail.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[205,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user-orderaftersale-detail/user-orderaftersale-detail.js.map