"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _axios = _interopRequireDefault(require("axios"));

var _routes = require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].prototype.$http = _axios["default"];
_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _routes.router,
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');