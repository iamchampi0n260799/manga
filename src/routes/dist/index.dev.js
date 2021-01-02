"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HomePage = _interopRequireDefault(require("../containers/HomePage"));

var _DetailPage = _interopRequireDefault(require("../containers/HomePage/DetailPage"));

var _GenrePage = _interopRequireDefault(require("../containers/HomePage/GenrePage"));

var _ChapterManga = _interopRequireDefault(require("../containers/HomePage/ChapterManga"));

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
  }, {
    path: '/manga/detail/chapter/:chapterEndpoint',
    name: "chapterEndpoint",
    component: _ChapterManga["default"]
  }, {
    path: '/genres/:genreName/:page',
    name: "genrePage",
    component: _GenrePage["default"]
  }]
});
exports.router = router;