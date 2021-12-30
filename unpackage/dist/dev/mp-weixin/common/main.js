(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!********************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/main.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ 5);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 6));


var _base = _interopRequireDefault(__webpack_require__(/*! ./common/js/common/base */ 17));
var _share = _interopRequireDefault(__webpack_require__(/*! ./common/js/common/share */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
_vue.default.mixin(_base.default);
_vue.default.mixin(_share.default);

_vue.default.config.productionTip = false;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!********************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/App.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 7);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 14);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 7 */
/*!*********************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 8);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./common/js/lib/base64.js */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  globalData: {
    data: {
      // uuid缓存key
      cache_user_uuid_key: "cache_user_uuid_key",
      // 配置信息缓存key
      cache_config_info_key: "cache_config_info_key",
      // 用户登录缓存key
      cache_user_login_key: "cache_user_login_key",
      // 用户信息缓存key
      cache_user_info_key: "cache_shop_user_info_key",
      // 用户站点信息缓存key
      cache_user_merchant_key: "cache_shop_user_merchant_key",
      // 设备信息缓存key
      cache_system_info_key: "cache_shop_system_info_key",
      // 用户地址选择缓存key
      cache_buy_user_address_select_key: "cache_buy_user_address_select_key",
      // 启动参数缓存key
      cache_launch_info_key: "cache_shop_launch_info_key",
      // 获取位置选择缓存key
      cache_userlocation_key: "cache_userlocation_key",
      // 页面支付临时缓存key
      cache_page_pay_key: "cache_page_pay_key",
      // 默认用户头像
      default_user_head_src: "/static/images/common/user.png",
      // 成功圆形提示图片
      default_round_success_icon: "/static/images/common/round-success-icon.png",
      // 错误圆形提示图片
      default_round_error_icon: "/static/images/common/round-error-icon.png",
      // tabbar页面
      tabbar_pages: [
      "/pages/index/index",
      "/pages/goods-category/goods-category",
      "/pages/cart/cart",
      "/pages/user/user"],

      // 请求地址
      request_url: 'https://shopxo.xiaoyixia.top/', //https://d1.shopxo.vip/
      // 静态资源地址（如系统根目录不在public目录下面请在静态地址后面加public目录、如：https://d1.shopxo.vip/public/）
      static_url: 'https://shopxo.xiaoyixia.top/',
      // 基础信息
      application_title: "ShopXO",
      application_describe: "ShopXO开源商城、MIT协议、可商用、可二次开发、满足99%电商运营需求",
      // 版本号
      version: "v2.2.3",
      // 货币价格符号
      currency_symbol: "￥",
      // 主题类型        主题颜色
      // 黄色 yellow    #f6c133
      // 红色 red       #ff0036
      // 黑色 black     #333333
      // 绿色 green     #20a53a
      // 橙色 orange    #fe6f04
      // 蓝色 blue      #1677ff
      // 棕色 brown     #8B4513
      // 紫色 purple    #623cec
      default_theme: "yellow" },


    /**
                                  * 启动参数处理
                                  */
    launch_params_handle: function launch_params_handle(params) {
      if ((params.query || null) != null) {
        params = params.query;
      }
      if ((params.scene || null) != null) {
        params = this.url_params_to_json(decodeURIComponent(params.scene));
      }
      return params;
    },

    /**
        * 获取设备信息
        * key      指定key
        * dv       默认数据（不存在则读取、默认null）
        * is_real  是否实时读取
        */
    get_system_info: function get_system_info(key, dv, is_real) {
      var info = null;
      if ((is_real || false) == true) {
        info = this.set_system_info() || null;
      } else {
        info = uni.getStorageSync(this.data.cache_system_info_key) || null;
      }
      if (info == null || (key || null) == null) {
        return info;
      }
      return info[key] == undefined ? dv == undefined ? null : dv : info[key];
    },

    /**
        * 设置设备信息
        */
    set_system_info: function set_system_info() {
      var system_info = uni.getSystemInfoSync();
      uni.setStorage({
        key: this.data.cache_system_info_key,
        data: system_info });

      return system_info;
    },

    /**
        * 请求地址生成
        * a              方法
        * c              控制器
        * plugins        插件标记（传参则表示为插件请求）
        * params         url请求参数
        * group          组名称（默认 api）
        */
    get_request_url: function get_request_url(a, c, plugins, params, group) {
      a = a || "index";
      c = c || "index";

      // 是否插件请求、走api统一插件调用控制器
      var plugins_params = "";
      if ((plugins || null) != null) {
        plugins_params = "&pluginsname=" + plugins + "&pluginscontrol=" + c + "&pluginsaction=" + a;
        c = "plugins";
        a = "index";
      }

      // 参数处理
      params = params || "";
      if (params != "" && params.substr(0, 1) != "&") {
        params = "&" + params;
      }

      // 用户信息
      var user = this.get_user_cache_info();
      var token = user == false ? '' : user.token || '';
      var uuid = this.request_uuid();
      var client_value = this.application_client_type();
      return this.data.request_url + (group || "api") + ".php?s=" + c + "/" + a + plugins_params + "&application=app&application_client_type=" + client_value + "&token=" + token + "&ajax=ajax" + "&uuid=" + uuid + params;
    },

    /**
        * 获取用户信息,信息不存在则唤醒授权
        * object     回调操作对象
        * method     回调操作对象的函数
        * return     有用户数据直接返回, 则回调调用者
        */
    get_user_info: function get_user_info(object, method) {
      var user = this.get_user_cache_info();
      if (user == false) {

        // 小程序唤醒用户授权
        this.user_login(object, method);



















        return false;
      }
      return user;
    },

    /**
        * 从缓存获取用户信息、可指定key和默认值
        * key              数据key
        * default_value    默认值
        */
    get_user_cache_info: function get_user_cache_info(key, default_value) {
      var user = uni.getStorageSync(this.data.cache_user_info_key) || null;
      if (user == null) {
        // 是否存在默认值
        return default_value == undefined ? false : default_value;
      }

      // 是否读取key
      if ((key || null) != null) {
        return user[key] == undefined ? default_value == undefined ? null : default_value : user[key];
      }

      return user;
    },

    /**
        * 系统参数
        */
    get_launch_cache_info: function get_launch_cache_info() {
      return uni.getStorageSync(this.data.cache_launch_info_key) || null;
    },

    /**
        * 获取登陆授权数据
        */
    get_login_cache_info: function get_login_cache_info() {
      return uni.getStorageSync(this.data.cache_user_login_key) || null;
    },

    /**
        * 用户登录
        * object     回调操作对象
        * method     回调操作对象的函数
        * auth_data  授权数据
        */
    user_auth_login: function user_auth_login(object, method, auth_data) {
      var self = this;

      uni.checkSession({
        success: function success() {
          var login_data = self.get_login_cache_info();
          if (login_data == null) {
            self.user_login(object, method);
          } else {
            self.get_user_login_info(object, method, login_data, auth_data);
          }
        },
        fail: function fail() {
          uni.removeStorageSync(self.data.cache_user_login_key);
          self.user_login(object, method);
        } });










    },

    /**
        * 用户登录
        * object     回调操作对象
        * method     回调操作对象的函数
        * auth_data  授权数据
        */
    user_login: function user_login(object, method) {
      var login_data = uni.getStorageSync(this.data.cache_user_login_key) || null;
      if (login_data == null) {
        var self = this;
        uni.showLoading({
          title: "授权中..." });

        var action = 'login';



        uni[action]({
          success: function success(res) {
            if (res.code) {
              uni.request({
                url: self.get_request_url('appminiuserauth', 'user'),
                method: 'POST',
                data: {
                  authcode: res.code },

                dataType: 'json',
                success: function success(res) {
                  uni.hideLoading();
                  if (res.data.code == 0) {
                    var data = res.data.data;
                    if ((data.is_user_exist || 0) == 1) {
                      uni.setStorage({
                        key: self.data.cache_user_info_key,
                        data: data,
                        success: function success(res) {
                          if (typeof object === 'object' && (method || null) != null) {
                            object[method]();
                          }
                        },
                        fail: function fail() {
                          self.showToast('用户信息缓存失败');
                        } });

                    } else {
                      uni.setStorage({
                        key: self.data.cache_user_login_key,
                        data: data });

                      self.login_to_auth();
                    }
                  } else {
                    uni.hideLoading();
                    self.showToast(res.data.msg);
                  }
                },
                fail: function fail() {
                  uni.hideLoading();
                  self.showToast('服务器请求出错');
                } });

            }
          },
          fail: function fail(e) {
            uni.hideLoading();
            self.showToast('授权失败');
          } });

      } else {
        this.login_to_auth();
      }
    },

    /**
        * 跳转到登录页面授权
        */
    login_to_auth: function login_to_auth() {
      uni.showModal({
        title: '温馨提示',
        content: '授权用户信息',
        confirmText: '确认',
        cancelText: '暂不',
        success: function success(result) {
          if (result.confirm) {
            uni.navigateTo({
              url: "/pages/login/login" });

          }
        } });

    },

    /**
        * 获取用户授权信息
        * object     回调操作对象
        * method     回调操作对象的函数
        * login_data 登录信息
        * auth_data  授权数据
        */
    get_user_login_info: function get_user_login_info(object, method, login_data, auth_data) {
      // 邀请人参数
      var params = this.get_launch_cache_info();
      var referrer = params == null ? 0 : params.referrer || 0;

      // 请求数据
      var data = {
        "auth_data": JSON.stringify(auth_data),
        "openid": login_data.openid,
        "unionid": login_data.unionid,
        "referrer": referrer };


      // 用户信息处理
      uni.showLoading({
        title: "授权中..." });

      var self = this;
      uni.request({
        url: self.get_request_url('appminiuserinfo', 'user'),
        method: 'POST',
        data: data,
        dataType: 'json',
        success: function success(res) {
          uni.hideLoading();
          if (res.data.code == 0) {
            uni.setStorage({
              key: self.data.cache_user_info_key,
              data: res.data.data,
              success: function success(res) {
                if (typeof object === 'object' && (method || null) != null) {
                  object[method]();
                }
              },
              fail: function fail() {
                self.showToast('用户信息缓存失败');
              } });

          } else {
            self.showToast(res.data.msg);
          }
        },
        fail: function fail() {
          uni.hideLoading();
          self.showToast('服务器请求出错');
        } });

    },

    /**
        * 字段数据校验
        * data           待校验的数据, 一维json对象
        * validation     待校验的字段, 格式 [{fields: 'mobile', msg: '请填写手机号码', is_can_zero: 1(是否可以为0)}, ...]
        */
    fields_check: function fields_check(data, validation) {
      for (var i in validation) {
        var temp_value = data[validation[i]["fields"]];
        var temp_is_can_zero = validation[i]["is_can_zero"] || null;
        if (temp_value == undefined || temp_value.length == 0 || temp_value == -1 || temp_is_can_zero ==
        null && temp_value == 0) {
          this.showToast(validation[i]['msg']);
          return false;
        }
      }
      return true;
    },

    /**
        * 获取当前时间戳
        */
    get_timestamp: function get_timestamp() {
      return parseInt(new Date().getTime() / 1000);
    },

    /**
        * 获取日期
        * format       日期格式（默认 yyyy-MM-dd h:m:s）
        * timestamp    时间戳（默认当前时间戳）
        */
    get_date: function get_date(format, timestamp) {
      var d = new Date((timestamp || this.get_timestamp()) * 1000);
      var date = {
        "M+": d.getMonth() + 1,
        "d+": d.getDate(),
        "h+": d.getHours(),
        "m+": d.getMinutes(),
        "s+": d.getSeconds(),
        "q+": Math.floor((d.getMonth() + 3) / 3),
        "S+": d.getMilliseconds() };

      if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
          format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
      }

      return format;
    },

    /**
        * 获取对象、数组的长度、元素个数
        * obj      要计算长度的元素（object、array、string）
        */
    get_length: function get_length(obj) {
      var obj_type = typeof obj;
      if (obj_type == "string") {
        return obj.length;
      } else if (obj_type == "object") {
        var obj_len = 0;
        for (var i in obj) {
          obj_len++;
        }
        return obj_len;
      }
      return false;
    },

    /**
        * 价格保留两位小数
        * price      价格保留两位小数
        */
    price_two_decimal: function price_two_decimal(x) {
      var f_x = parseFloat(x);
      if (isNaN(f_x)) {
        return 0;
      }
      var f_x = Math.round(x * 100) / 100;
      var s_x = f_x.toString();
      var pos_decimal = s_x.indexOf('.');
      if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
      }
      while (s_x.length <= pos_decimal + 2) {
        s_x += '0';
      }
      return s_x;
    },

    url_value_handle: function url_value_handle(url) {
      if (url.indexOf("?") == -1) {
        var value = url;
      } else {
        var temp_str = url.split("?");
        var value = temp_str[0];
      }
      return value;
    },

    /**
        * 当前地址是否存在tabbar中
        */
    is_tabbar_pages: function is_tabbar_pages(url) {
      var value = this.url_value_handle(url);
      if ((value || null) == null) {
        return false;
      }
      var temp_tabbar_pages = this.data.tabbar_pages;
      for (var i in temp_tabbar_pages) {
        if (temp_tabbar_pages[i] == value) {
          return true;
        }
      }
      return false;
    },

    /**
        * 事件操作
        */
    operation_event: function operation_event(e) {
      var value = e.currentTarget.dataset.value || null;
      var type = parseInt(e.currentTarget.dataset.type);
      if (value != null) {
        switch (type) {
          // web
          case 0:
            this.open_web_view(value);
            break;
          // 内部页面
          case 1:
            if (this.is_tabbar_pages(value)) {
              uni.switchTab({
                url: value });

            } else {
              uni.navigateTo({
                url: value });

            }
            break;
          // 跳转到外部小程序
          case 2:
            uni.navigateToMiniProgram({
              appId: value });

            break;
          // 跳转到地图查看位置
          case 3:
            var values = value.split('|');
            if (values.length != 4) {
              this.showToast('事件值格式有误');
              return false;
            }
            this.open_location(values[2], values[3], values[0], values[1]);
            break;
          // 拨打电话
          case 4:
            this.call_tel(value);
            break;}

      }
    },

    /**
        * 打开 webview页面
        * value    [string]  url地址
        */
    open_web_view: function open_web_view(value) {
      uni.navigateTo({
        url: "/pages/web-view/web-view?url=" + encodeURIComponent(value) });

    },

    /**
        * 默认弱提示方法
        * msg    [string]  提示信息
        * status [string]  状态 默认error [正确success, 错误error]
        */
    showToast: function showToast(msg, status) {
      if ((status || 'error') == 'success') {
        uni.showToast({
          icon: 'success',
          title: msg,
          duration: 3000 });

      } else {
        uni.showToast({
          icon: 'none',
          title: msg,
          duration: 3000 });

      }
    },

    /**
        * alert确认框
        * title              [string]    标题（默认空）
        * msg                [string]    提示信息，必传
        * is_show_cancel     [int]       是否显示取消按钮（默认显示 0否, 1|undefined是）
        * cancel_text        [string]    取消按钮文字（默认 取消）
        * cancel_color       [string]    取消按钮的文字颜色，必须是 16 进制格式的颜色字符串（默认 #000000）
        * confirm_text       [string]    确认按钮文字（默认 确认）
        * confirm_color      [string]    确认按钮的文字颜色，必须是 16 进制格式的颜色字符串（默认 #000000）
        * object             [boject]    回调操作对象，点击确认回调参数1，取消回调0
        * method             [string]    回调操作对象的函数
        */
    alert: function alert(e) {
      var msg = e.msg || null;
      if (msg != null) {
        var title = e.title || '';
        var is_show_cancel = e.is_show_cancel == 0 ? false : true;
        var cancel_text = e.cancel_text || '取消';
        var confirm_text = e.confirm_text || '确认';
        var cancel_color = e.cancel_color || '#000000';
        var confirm_color = e.confirm_color || '#576B95';
        uni.showModal({
          title: title,
          content: msg,
          showCancel: is_show_cancel,
          cancelText: cancel_text,
          cancelColor: cancel_color,
          confirmText: confirm_text,
          confirmColor: confirm_color,
          success: function success(res) {
            if ((e.object || null) != null && typeof e.object === 'object' && (e.method || null) != null) {
              e.object[e.method](res.confirm ? 1 : 0);
            }
          } });

      } else {
        self.showToast('提示信息为空 alert');
      }
    },

    /**
        * 是否需要登录
        * 是否需要绑定手机号码
        */
    user_is_need_login: function user_is_need_login(user) {
      // 用户信息是否正确
      if (user == false) {
        return true;
      }
      // 是否需要绑定手机号码
      if ((user.is_mandatory_bind_mobile || 0) == 1) {
        if ((user.mobile || null) == null) {
          return true;
        }
      }
      return false;
    },

    /**
        * url参数转json对象
        */
    url_params_to_json: function url_params_to_json(url_params) {
      var json = new Object();
      if ((url_params || null) != null) {
        var arr = url_params.split('&');
        for (var i = 0; i < arr.length; i++) {
          var temp = arr[i].split('=');
          json[temp[0]] = temp[1];
        }
      }
      return json;
    },

    // 拨打电话
    call_tel: function call_tel(value) {
      if ((value || null) != null) {
        uni.makePhoneCall({
          phoneNumber: value.toString() });

      }
    },

    /**
        * 登录校验
        * object     回调操作对象
        * method     回调操作对象的函数
        */
    is_login_check: function is_login_check(res, object, method) {
      if (res.code == -400) {
        uni.clearStorage();
        this.get_user_info(object, method);
        return false;
      }
      return true;
    },

    /**
        * 设置导航reddot
        * index     tabBar 的哪一项，从左边算起（0开始）
        * type      0 移出, 1 添加 （默认 0 移出）
        */
    set_tab_bar_reddot: function set_tab_bar_reddot(index, type) {
      if (index !== undefined && index !== null) {
        if ((type || 0) == 0) {
          uni.hideTabBarRedDot({
            index: Number(index) });

        } else {
          uni.showTabBarRedDot({
            index: Number(index) });

        }
      }
    },

    /**
        * 设置导航车badge
        * index     tabBar 的哪一项，从左边算起（0开始）
        * type      0 移出, 1 添加 （默认 0 移出）
        * value     显示的文本，超过 4 个字符则显示成 ...（type参数为1的情况下有效）
        */
    set_tab_bar_badge: function set_tab_bar_badge(index, type, value) {
      if (index !== undefined && index !== null) {
        if ((type || 0) == 0) {
          uni.removeTabBarBadge({
            index: Number(index) });

        } else {
          uni.setTabBarBadge({
            index: Number(index),
            "text": value.toString() });

        }
      }
    },

    // 显示分享菜单
    show_share_menu: function show_share_menu() {
      // 当前页面
      var pages = getCurrentPages();
      var obj = pages[pages.length - 1];

      // 分享信息
      var share = this.share_content_handle(obj.share_info || {});


      // 微信小程序展示系统分享好友和朋友圈按钮
      // 其他端小程序不用展示会调起分享窗口
      uni.showShareMenu({
        withShareTicket: true,
        title: share.title,
        desc: share.desc,
        path: share.path + share.query,
        imageUrl: share.img,
        menus: ['shareAppMessage', 'shareTimeline'] });



























































    },

    /**
        * 获取配置信息、可指定key和默认值
        * key              数据key（支持多级读取、以 . 分割key名称）
        * default_value    默认值
        */
    get_config: function get_config(key, default_value) {
      var value = null;
      var config = uni.getStorageSync(this.data.cache_config_info_key) || null;
      if (config != null) {
        // 数据读取
        var arr = key.split('.');
        if (arr.length == 1) {
          value = config[key] == undefined ? null : config[key];
        } else {
          value = config;
          for (var i in arr) {
            if (value[arr[i]] != undefined) {
              value = value[arr[i]];
            } else {
              value = null;
              break;
            }
          }
        }
      }
      return value === null ? default_value === undefined ? value : default_value : value;
    },

    // 初始化 配置信息
    init_config: function init_config() {var _this = this;
      var self = this;
      uni.request({
        url: this.get_request_url('common', 'base'),
        method: 'POST',
        data: { is_key: 1 },
        dataType: 'json',
        success: function success(res) {
          if (res.data.code == 0) {
            uni.setStorage({
              key: _this.data.cache_config_info_key,
              data: res.data.data,
              fail: function fail() {
                _this.showToast('配置信息缓存失败');
              } });

          } else {
            _this.showToast(res.data.msg);
          }
        },
        fail: function fail() {
          _this.showToast('服务器请求出错');
        } });

    },

    /**
        * 配置是否有效(100毫秒检验一次、最多检验100次)
        * object     回调操作对象
        * method     回调操作对象的函数
        */
    is_config: function is_config(object, method) {
      var self = this;
      var count = 0;
      var timer = setInterval(function () {
        if (self.get_config('status') == 1) {
          clearInterval(timer);

          if (typeof object === 'object' && (method || null) != null) {
            object[method](true);
          }
        }
        count++;

        if (count >= 100) {
          clearInterval(timer);
        }
      }, 100);
    },

    /**
        * 火星坐标GCJ02到百度坐标BD-09(高德，谷歌，腾讯坐标 -> 百度)
        * lng     经度
        * lat     纬度
        */
    map_gcj_to_bd: function map_gcj_to_bd(lng, lat) {
      lng = parseFloat(lng);
      lat = parseFloat(lat);
      var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
      var x = lng;
      var y = lat;
      var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
      var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
      var lngs = z * Math.cos(theta) + 0.0065;
      var lats = z * Math.sin(theta) + 0.006;
      return {
        lng: lngs,
        lat: lats };

    },

    /**
        * 百度坐标BD-09到火星坐标GCJ02(百度 -> 高德，谷歌，腾讯坐标)
        * lng     经度
        * lat     纬度
        */
    map_bd_to_gcj: function map_bd_to_gcj(lng, lat) {
      lng = parseFloat(lng);
      lat = parseFloat(lat);
      var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
      var x = lng - 0.0065;
      var y = lat - 0.006;
      var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
      var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
      var lngs = z * Math.cos(theta);
      var lats = z * Math.sin(theta);
      return {
        lng: lngs,
        lat: lats };

    },

    /**
        * 百度坐标BD-09到火星坐标GCJ02(高德，谷歌，腾讯坐标)
        * lng        经度
        * lat        纬度
        * name       地图上面显示的名称
        * address    地图上面显示的详细地址
        * scale      缩放比例，范围5~18
        */
    open_location: function open_location(lng, lat, name, address, scale) {
      if (lng == undefined || lat == undefined || lng == '' || lat == '') {
        this.showToast('坐标有误');
        return false;
      }

      // 转换坐标打开位置
      var position = this.map_bd_to_gcj(lng, lat);
      uni.openLocation({
        name: name || '地理位置',
        address: address || '',
        scale: scale || 18,
        longitude: position.lng,
        latitude: position.lat });

    },

    // uuid生成
    uuid: function uuid() {
      var d = new Date().getTime();
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
    },

    // 获取当前uuid
    request_uuid: function request_uuid() {var _this2 = this;
      var uuid = uni.getStorageSync(this.data.cache_user_uuid_key) || null;
      if (uuid == null) {
        uuid = this.uuid();
        uni.setStorage({
          key: this.data.cache_user_uuid_key,
          data: uuid,
          fail: function fail() {
            _this2.showToast('uuid缓存失败');
          } });

      }
      return uuid;
    },

    // 链接地址事件
    url_event: function url_event(e) {
      var value = e.currentTarget.dataset.value || null;
      if (value != null) {
        var temp = value.substr(0, 6);
        if (temp == 'http:/' || temp == 'https:') {
          this.open_web_view(value);
        } else {
          if (this.is_tabbar_pages(value)) {
            uni.switchTab({
              url: value });

          } else {
            uni.navigateTo({
              url: value });

          }
        }
      }
    },

    // 剪贴板
    text_copy_event: function text_copy_event(e) {
      var value = e.currentTarget.dataset.value || null;
      if (value != null) {
        var self = this;
        uni.setClipboardData({
          data: value,
          success: function success(res) {
            uni.getClipboardData({
              success: function success(res) {
                self.showToast('复制成功', 'success');
              } });

          } });

      } else {
        this.showToast('复制内容为空');
      }
    },

    // 图片预览
    image_show_event: function image_show_event(e) {
      var value = e.currentTarget.dataset.value || null;
      if (value != null) {
        uni.previewImage({
          current: value,
          urls: [value] });

      } else {
        this.showToast('图片地址为空');
      }
    },

    // 静态文件url地址
    get_static_url: function get_static_url(type, is_plugins) {
      // 默认公共地址
      if ((type || null) == null) {
        type = 'common';
      }

      // 是否插件
      if ((is_plugins || false) == true) {
        // 根据配置的静态url地址+插件标识符
        return this.data.static_url + 'static/plugins/images/' + type + '/';
      } else {
        // 根据配置的静态url地址+主题标识+参数类型组合远程静态文件地址
        return this.data.static_url + 'static/app/' + this.data.default_theme + '/' + type + '/';
      }
    },

    // rpx转px
    rpx_to_px: function rpx_to_px(value) {
      return (value || 0) == 0 ? 0 : parseInt(value) / 750 * parseInt(this.get_system_info('windowWidth', 0));
    },

    // px转rpx
    px_to_rpx: function px_to_rpx(value) {
      return (value || 0) == 0 ? 0 : parseInt(value) * 750 / parseInt(this.get_system_info('windowWidth', 0));
    },

    // 终端类型
    application_client: function application_client() {
      var type = '';




      type = 'mp';

      return type;
    },

    // 终端类型值
    application_client_type: function application_client_type() {
      var value = '';

      value = 'weixin';
















      return value;
    },

    // 授权验证
    auth_check: function auth_check(object, method, scope, msg) {
      var self = this;
      uni.getSetting({
        success: function success(res) {
          if (!res.authSetting[scope]) {
            uni.authorize({
              scope: scope,
              success: function success(res) {
                if (typeof object === 'object' && (method || null) != null) {
                  object[method](1);
                }
              },
              fail: function fail(res) {
                self.showToast(msg || '请打开授权');
                setTimeout(function () {
                  uni.openSetting();
                }, 1000);
              } });

          } else {
            if (typeof object === 'object' && (method || null) != null) {
              object[method](1);
            }
          }
        } });

    },

    // 窗口宽度处理
    window_width_handle: function window_width_handle(width) {





      return width;
    },

    // 窗口高度处理
    window_height_handle: function window_height_handle(system) {
      var height = system.windowHeight;
      // 状态栏
      if (system.statusBarHeight > 0) {
        height += system.statusBarHeight;
      }
      // 导航栏
      if (system.windowTop > 0) {
        height += system.windowTop;
      }
      // 底部菜单
      if (system.windowBottom > 0) {
        height += system.windowBottom;
      }
      return height;
    },

    // 获取当前页面地址、不含?后面的参数
    get_page_url: function get_page_url(is_whole) {

      var pages = getCurrentPages();
      var url = pages[pages.length - 1].$page.fullPath;




      if (is_whole == false) {
        var temp = url.split('?');
        url = temp[0];
      }
      return url;
    },

    // 是否微信环境
    is_weixin: function is_weixin() {
      var agent = navigator.userAgent.toLowerCase();
      if (agent.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
      }
      return false;
    },

    // 用户微信webopenid是否存在
    is_user_weixin_web_openid: function is_user_weixin_web_openid(order_ids) {var _this3 = this;
      // 微信环境判断是否已有web_openid、不存在则跳转到插件进行授权
      if (this.is_weixin()) {
        var web_openid = this.get_user_cache_info('weixin_web_openid') || null;
        if (web_openid == null) {
          // 已经授权则重新刷新用户信息
          var params = this.get_launch_cache_info();
          if (params != null && (params.is_weixin_auth_web_openid || 0) == 1) {
            uni.showLoading({
              title: "处理中..." });

            uni.request({
              url: this.get_request_url("tokenuserinfo", "user"),
              method: "POST",
              data: {},
              dataType: "json",
              success: function success(res) {
                uni.hideLoading();
                if (res.data.code == 0) {
                  uni.setStorageSync(_this3.data.cache_user_info_key, res.data.data);
                } else {
                  _this3.showToast(res.data.msg);
                }
              },
              fail: function fail() {
                uni.hideLoading();
                _this3.showToast("服务器请求出错");
              } });

            return true;
          } else {
            uni.setStorageSync(this.data.cache_page_pay_key, typeof order_ids == 'array' ? order_ids.join(',') : order_ids);
            var page_url = this.get_page_url();
            page_url += page_url.indexOf('?') == -1 ? '?' : '&';
            page_url += 'is_weixin_auth_web_openid=1';
            var request_url = encodeURIComponent(_base.default.encode(page_url));
            var url = this.get_request_url("index", "pay", "weixinwebauthorization", "request_url=" + request_url, "index").replace('&ajax=ajax', '');
            window.location.href = url;
          }
          return false;
        }
      }
      return true;
    },

    // 分享内容处理
    share_content_handle: function share_content_handle(data) {
      // 获取插件配置信息
      var share_config = this.get_config('plugins_base.share.data') || {};
      var result = {
        title: data.title || share_config.title || this.data.application_title,
        desc: data.desc || share_config.desc || this.data.application_describe,
        path: data.path || '/pages/index/index',
        query: this.share_query_handle(data.query || ''),
        img: data.img || share_config.pic || this.get_config('config.home_site_logo_square') };

      result['url'] = this.get_page_url();



      return result;
    },

    // 分享参数处理
    share_query_handle: function share_query_handle(query) {
      if ((query || null) == null || query.indexOf('referrer') == -1) {
        var user_id = parseInt(this.get_user_cache_info('id', 0)) || 0;
        if (user_id > 0) {
          var join = (query || null) == null ? '' : '&';
          query += join + 'referrer=' + user_id;
        }
      }
      return (query || null) == null ? '' : '?' + query;
    } },


  /**
          * 小程序初始化
          */
  onLaunch: function onLaunch(params) {
    // 启动参数处理+缓存
    params = this.globalData.launch_params_handle(params);
    uni.setStorage({
      key: this.globalData.data.cache_launch_info_key,
      data: params });


    // 设置设备信息
    this.globalData.set_system_info();

    // 初始化配置
    this.globalData.init_config();
  },

  methods: {} };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/*!*****************************************************************************************************************!*\
  !*** C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/App.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 15);
/* harmony import */ var _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_3_1_4_20210305_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/wuxuebin/Documents/HBuilderProjects/ShopXO开源商城uniapp端源码/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map