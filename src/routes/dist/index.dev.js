"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HomePage = _interopRequireDefault(require("../containers/HomePage"));

var _DetailPage = _interopRequireDefault(require("../containers/HomePage/DetailPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  routes: [{
    path: '/',
    component: _HomePage["default"]
  }, {
    path: '/manga/detail/:mangaName',
    name: "mangaDetail",
    component: _DetailPage["default"]
  }]
});
exports.router = router;