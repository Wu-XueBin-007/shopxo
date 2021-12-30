(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/plugins/distribution/extraction-apply/extraction-apply"],{

/***/ 425:
/*!****************************************************************************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/main.js?{"page":"pages%2Fplugins%2Fdistribution%2Fextraction-apply%2Fextraction-apply"} ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _extractionApply = _interopRequireDefault(__webpack_require__(/*! ./pages/plugins/distribution/extraction-apply/extraction-apply.vue */ 426));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_extractionApply.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 426:
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/plugins/distribution/extraction-apply/extraction-apply.vue ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extraction_apply_vue_vue_type_template_id_438616ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extraction-apply.vue?vue&type=template&id=438616ec& */ 427);
/* harmony import */ var _extraction_apply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extraction-apply.vue?vue&type=script&lang=js& */ 429);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _extraction_apply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _extraction_apply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _extraction_apply_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extraction-apply.vue?vue&type=style&index=0&lang=css& */ 431);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _extraction_apply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _extraction_apply_vue_vue_type_template_id_438616ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _extraction_apply_vue_vue_type_template_id_438616ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _extraction_apply_vue_vue_type_template_id_438616ec___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/plugins/distribution/extraction-apply/extraction-apply.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 427:
/*!************************************************************************************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/plugins/distribution/extraction-apply/extraction-apply.vue?vue&type=template&id=438616ec& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_template_id_438616ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./extraction-apply.vue?vue&type=template&id=438616ec& */ 428);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_template_id_438616ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_template_id_438616ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_template_id_438616ec___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_template_id_438616ec___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 428:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/plugins/distribution/extraction-apply/extraction-apply.vue?vue&type=template&id=438616ec& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 429:
/*!******************************************************************************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/plugins/distribution/extraction-apply/extraction-apply.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./extraction-apply.vue?vue&type=script&lang=js& */ 430);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 430:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/plugins/distribution/extraction-apply/extraction-apply.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var app = getApp();

var common_static_url = app.globalData.get_static_url('common');var _default =
{
  data: function data() {
    return {
      common_static_url: common_static_url,
      params: null,
      data_list_loding_status: 1,
      data_list_loding_msg: '',
      extraction_data: {},
      province_list: [],
      city_list: [],
      county_list: [],
      province_id: null,
      city_id: null,
      county_id: null,
      editor_path_type: '',
      default_province: "请选择省",
      default_city: "请选择市",
      default_county: "请选择区/县",
      province_value: null,
      city_value: null,
      county_value: null,
      user_location_cache_key: app.globalData.data.cache_userlocation_key,
      user_location: null,
      form_submit_disabled_status: false };

  },

  components: {},
  props: {},

  onLoad: function onLoad(params) {
    this.setData({
      params: params });

  },

  onReady: function onReady() {
    // 清除位置缓存信息
    uni.removeStorage({
      key: this.user_location_cache_key });

    this.init();
  },

  onShow: function onShow() {
    this.user_location_init();

    // 显示分享菜单
    app.globalData.show_share_menu();
  },

  methods: {
    init: function init() {
      var user = app.globalData.get_user_info(this, "init");
      if (user != false) {
        // 用户未绑定用户则转到登录页面
        if (app.globalData.user_is_need_login(user)) {
          uni.redirectTo({
            url: "/pages/login/login?event_callback=init" });

          this.setData({
            data_list_loding_status: 2,
            data_list_loding_msg: '请先绑定手机号码' });

          return false;
        } else {
          this.get_province_list();
          this.applyinfo_init();
        }
      } else {
        this.setData({
          data_list_loding_status: 2,
          data_list_loding_msg: '请先授权用户信息' });

      }
    },

    // 自提点信息
    applyinfo_init: function applyinfo_init() {
      var self = this;
      uni.request({
        url: app.globalData.get_request_url("applyinfo", "extraction", "distribution"),
        method: "POST",
        data: {},
        dataType: "json",
        success: function success(res) {
          if (res.data.code == 0) {
            var data = res.data.data;
            var extraction_data = data.extraction_data || null;
            self.setData({
              extraction_data: extraction_data || {},
              editor_path_type: data.editor_path_type || '' });


            // 数据设置
            if (extraction_data != null) {
              self.setData({
                province_id: extraction_data.province || null,
                city_id: extraction_data.city || null,
                county_id: extraction_data.county || null });


              // 地理位置
              var lng = extraction_data.lng || 0;
              var lat = extraction_data.lat || 0;
              if (lng != 0 && lat != 0) {
                self.setData({
                  user_location: {
                    lng: lng,
                    lat: lat,
                    address: extraction_data.address || '' } });


              }
            }

            // 获取城市、区县
            self.get_city_list();
            self.get_county_list();

            // 半秒后初始化数据
            setTimeout(function () {
              self.init_region_value();
            }, 500);
          } else {
            if (app.globalData.is_login_check(res.data)) {
              app.globalData.showToast(res.data.msg);
            }
          }
        },
        fail: function fail() {
          app.globalData.showToast("省份信息失败");
        } });

    },

    // 地区数据初始化
    init_region_value: function init_region_value() {
      this.setData({
        province_value: this.get_region_value("province_list", "province_id"),
        city_value: this.get_region_value("city_list", "city_id"),
        county_value: this.get_region_value("county_list", "county_id") });

    },

    // 地区初始化匹配索引
    get_region_value: function get_region_value(list, id) {
      var data = this[list];
      var data_id = this[id];
      var value = null;
      data.forEach(function (d, i) {
        if (d.id == data_id) {
          value = i;
          return false;
        }
      });
      return value;
    },

    // 获取省份
    get_province_list: function get_province_list() {
      var self = this;
      uni.request({
        url: app.globalData.get_request_url("index", "region"),
        method: "POST",
        data: {},
        dataType: "json",
        success: function success(res) {
          if (res.data.code == 0) {
            var data = res.data.data;
            self.setData({
              province_list: data });

          } else {
            app.globalData.showToast(res.data.msg);
          }
        },
        fail: function fail() {
          app.globalData.showToast("省份获取失败");
        } });

    },

    // 获取市
    get_city_list: function get_city_list() {
      var self = this;

      if (self.province_id) {
        uni.request({
          url: app.globalData.get_request_url("index", "region"),
          method: "POST",
          data: {
            pid: self.province_id },

          dataType: "json",
          success: function success(res) {
            if (res.data.code == 0) {
              var data = res.data.data;
              self.setData({
                city_list: data });

            } else {
              app.globalData.showToast(res.data.msg);
            }
          },
          fail: function fail() {
            app.globalData.showToast("城市获取失败");
          } });

      }
    },

    // 获取区/县
    get_county_list: function get_county_list() {
      var self = this;

      if (self.city_id) {
        // 加载loding
        uni.request({
          url: app.globalData.get_request_url("index", "region"),
          method: "POST",
          data: {
            pid: self.city_id },

          dataType: "json",
          success: function success(res) {
            if (res.data.code == 0) {
              var data = res.data.data;
              self.setData({
                county_list: data });

            } else {
              app.globalData.showToast(res.data.msg);
            }
          },
          fail: function fail() {
            app.globalData.showToast("区/县获取失败");
          } });

      }
    },

    // 省份事件
    select_province_event: function select_province_event(e) {
      var index = e.detail.value || 0;
      if (index >= 0) {
        var data = this.province_list[index];
        this.setData({
          province_value: index,
          province_id: data.id,
          city_value: null,
          county_value: null,
          city_id: null,
          county_id: null });

        this.get_city_list();
      }
    },

    // 市事件
    select_city_event: function select_city_event(e) {
      var index = e.detail.value || 0;
      if (index >= 0) {
        var data = this.city_list[index];
        this.setData({
          city_value: index,
          city_id: data.id,
          county_value: null,
          county_id: null });

        this.get_county_list();
      }
    },

    // 区/县事件
    select_county_event: function select_county_event(e) {
      var index = e.detail.value || 0;
      if (index >= 0) {
        var data = this.county_list[index];
        this.setData({
          county_value: index,
          county_id: data.id });

      }
    },

    // 省市区未按照顺序选择提示
    region_select_error_event: function region_select_error_event(e) {
      var value = e.currentTarget.dataset.value || null;
      if (value != null) {
        app.globalData.showToast(value);
      }
    },

    // 选择地理位置
    choose_location_event: function choose_location_event(e) {
      uni.navigateTo({
        url: '/pages/common/open-setting-location/open-setting-location' });

    },

    // 地址信息初始化
    user_location_init: function user_location_init() {
      var result = uni.getStorageSync(this.user_location_cache_key) || null;
      var data = null;
      if (result != null) {
        data = {
          name: result.name || null,
          address: result.address || null,
          lat: result.latitude || null,
          lng: result.longitude || null };

      }
      this.setData({
        user_location: data });

    },

    // 数据提交
    form_submit: function form_submit(e) {
      var self = this;

      // 表单数据
      var form_data = e.detail.value;

      // 数据校验
      var validation = [
      { fields: "name", msg: "请填写联系人" },
      { fields: "tel", msg: "请填写联系电话" },
      { fields: "province", msg: "请选择省份" },
      { fields: "city", msg: "请选择城市" },
      { fields: "county", msg: "请选择区县" },
      { fields: "address", msg: "请填写详细地址" },
      { fields: "lng", msg: "请选择地理位置" },
      { fields: "lat", msg: "请选择地理位置" }];


      // logo
      form_data['logo'] = (this.extraction_data || null) != null ? this.extraction_data.logo || '' : '';

      // 地区
      form_data["province"] = self.province_id;
      form_data["city"] = self.city_id;
      form_data["county"] = self.county_id;

      // 地理位置
      var lng = 0;
      var lat = 0;
      if ((self.user_location || null) != null) {
        lng = self.user_location.lng || 0;
        lat = self.user_location.lat || 0;
      }
      if ((self.extraction_data || null) != null) {
        if ((lng || null) == null) {
          lng = self.extraction_data.lng || 0;
        }
        if ((lat || null) == null) {
          lat = self.extraction_data.lat || 0;
        }
      }
      form_data["lng"] = lng;
      form_data["lat"] = lat;

      // 验证提交表单
      if (app.globalData.fields_check(form_data, validation)) {
        if ((self.extraction_data || null) != null && (self.extraction_data.status || 0) == 1) {
          uni.showModal({
            title: '温馨提示',
            content: '数据需重新审核后方可生效',
            confirmText: '确认',
            cancelText: '暂不',
            success: function success(result) {
              if (result.confirm) {
                self.request_data_save(form_data);
              }
            } });

        } else {
          self.request_data_save(form_data);
        }
      }
    },

    // 数据保存
    request_data_save: function request_data_save(data) {
      var self = this;
      self.setData({
        form_submit_disabled_status: true });

      uni.showLoading({
        title: "处理中..." });

      uni.request({
        url: app.globalData.get_request_url("applysave", "extraction", "distribution"),
        method: "POST",
        data: data,
        dataType: "json",
        success: function success(res) {
          uni.hideLoading();
          if (res.data.code == 0) {
            app.globalData.showToast(res.data.msg, "success");
            setTimeout(function () {
              uni.navigateBack();
            }, 1000);
          } else {
            self.setData({
              form_submit_disabled_status: false });

            if (app.globalData.is_login_check(res.data)) {
              app.globalData.showToast(res.data.msg);
            } else {
              app.globalData.showToast('提交失败，请重试！');
            }
          }
        },
        fail: function fail() {
          self.setData({
            form_submit_disabled_status: false });

          uni.hideLoading();
          app.globalData.showToast("服务器请求出错");
        } });

    },

    // 上传图片预览
    upload_show_event: function upload_show_event(e) {
      uni.previewImage({
        current: this.extraction_data.logo,
        urls: [this.extraction_data.logo] });

    },

    // 图片删除
    upload_delete_event: function upload_delete_event(e) {
      var self = this;
      uni.showModal({
        title: '温馨提示',
        content: '删除后不可恢复、继续吗？',
        success: function success(res) {
          if (res.confirm) {
            var temp_data = self.extraction_data || {};
            temp_data['logo'] = '';
            self.setData({
              extraction_data: temp_data });

          }
        } });

    },

    // 文件上传
    file_upload_event: function file_upload_event(e) {
      var self = this;
      uni.chooseImage({
        count: 1,
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
              var temp_data = self.extraction_data || {};
              temp_data['logo'] = data.data.url;
              self.setData({
                extraction_data: temp_data });

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

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 431:
/*!**************************************************************************************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/plugins/distribution/extraction-apply/extraction-apply.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./extraction-apply.vue?vue&type=style&index=0&lang=css& */ 432);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extraction_apply_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 432:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/pages/plugins/distribution/extraction-apply/extraction-apply.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[425,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/plugins/distribution/extraction-apply/extraction-apply.js.map