/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Sidebar/SidebarNew.js":
/*!******************************************!*\
  !*** ./components/Sidebar/SidebarNew.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SidebarNew\": function() { return /* binding */ SidebarNew; }\n/* harmony export */ });\n/* harmony import */ var _Users_olarisrey_Desktop_next_atlantis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar.module.scss */ \"./components/Sidebar/sidebar.module.scss\");\n/* harmony import */ var _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Sidebar_SubMenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Sidebar/SubMenuItem */ \"./components/Sidebar/SubMenuItem.js\");\n/* harmony import */ var _components_Sidebar_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Sidebar/MenuItem */ \"./components/Sidebar/MenuItem.js\");\n/* harmony import */ var _components_Sidebar_sidebarConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Sidebar/sidebarConfig */ \"./components/Sidebar/sidebarConfig.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/olarisrey/Desktop/next-atlantis/components/Sidebar/SidebarNew.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_olarisrey_Desktop_next_atlantis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar cx = classnames_bind__WEBPACK_IMPORTED_MODULE_4___default().bind((_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default()));\nvar SidebarNew = function SidebarNew() {\n  _s();\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (store) {\n    return store.sidebar;\n  }),\n      isOpenSidebar = _useSelector.isOpenSidebar;\n\n  var header = _components_Sidebar_sidebarConfig__WEBPACK_IMPORTED_MODULE_7__.sidebarConfig.header,\n      main = _components_Sidebar_sidebarConfig__WEBPACK_IMPORTED_MODULE_7__.sidebarConfig.main,\n      footer = _components_Sidebar_sidebarConfig__WEBPACK_IMPORTED_MODULE_7__.sidebarConfig.footer;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: cx((_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sidebar), {\n      'close': !isOpenSidebar\n    }),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n      className: (_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().navLinks),\n      children: [(0,lodash__WEBPACK_IMPORTED_MODULE_3__.map)(header, function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Sidebar_MenuItem__WEBPACK_IMPORTED_MODULE_6__.MenuItem, _objectSpread({}, item), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 39\n        }, _this);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Sidebar_SubMenuItem__WEBPACK_IMPORTED_MODULE_5__.SubMenuItem, {\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaFire, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 27\n        }, _this),\n        name: \"\\u0422\\u0435\\u0441\\u0442\\u043E\\u0432\\u043E\\u0435 \\u043C\\u0435\\u043D\\u044E\",\n        arrowIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_10__.IoIosArrowForward, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 32\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n      className: (_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().navLinks),\n      children: (0,lodash__WEBPACK_IMPORTED_MODULE_3__.map)(main, function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Sidebar_MenuItem__WEBPACK_IMPORTED_MODULE_6__.MenuItem, _objectSpread({}, item), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 37\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n      className: (_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().navLinks),\n      children: (0,lodash__WEBPACK_IMPORTED_MODULE_3__.map)(footer, function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Sidebar_MenuItem__WEBPACK_IMPORTED_MODULE_6__.MenuItem, _objectSpread({}, item), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 148,\n          columnNumber: 39\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(SidebarNew, \"/FTkmciahs4xwZ+CZG6wX06yAPs=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];\n});\n\n_c = SidebarNew;\n\nvar _c;\n\n$RefreshReg$(_c, \"SidebarNew\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXJOZXcuanM/Yjc5NiJdLCJuYW1lcyI6WyJjeCIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJTaWRlYmFyTmV3IiwidXNlU2VsZWN0b3IiLCJzdG9yZSIsInNpZGViYXIiLCJpc09wZW5TaWRlYmFyIiwiaGVhZGVyIiwic2lkZWJhckNvbmZpZyIsIm1haW4iLCJmb290ZXIiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQywyREFBQSxDQUFnQkMsNkRBQWhCLENBQVg7QUFFTyxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEscUJBQ0ZDLHdEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsT0FBVjtBQUFBLEdBQU4sQ0FEVDtBQUFBLE1BQ3BCQyxhQURvQixnQkFDcEJBLGFBRG9COztBQUFBLE1BRXBCQyxNQUZvQixHQUVLQyxtRkFGTDtBQUFBLE1BRVpDLElBRlksR0FFS0QsaUZBRkw7QUFBQSxNQUVORSxNQUZNLEdBRUtGLG1GQUZMO0FBSTVCLHNCQUNJO0FBQUssYUFBUyxFQUFFVCxFQUFFLENBQUNFLHFFQUFELEVBQWlCO0FBQUUsZUFBUyxDQUFDSztBQUFaLEtBQWpCLENBQWxCO0FBQUEsNEJBS0k7QUFBSyxlQUFTLEVBQUVMLHNFQUFoQjtBQUFBLGlCQUNLVSwyQ0FBRyxDQUFDSixNQUFELEVBQVMsVUFBQUssSUFBSTtBQUFBLDRCQUFLLDhEQUFDLGtFQUFELG9CQUFjQSxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUw7QUFBQSxPQUFiLENBRFIsZUFFSSw4REFBQyx3RUFBRDtBQUNJLFlBQUksZUFBRSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURWO0FBRUksWUFBSSxFQUFDLDJFQUZUO0FBR0ksaUJBQVMsZUFBRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLGVBOEhJO0FBQUssZUFBUyxFQUFFWCxzRUFBaEI7QUFBQSxnQkFDS1UsMkNBQUcsQ0FBQ0YsSUFBRCxFQUFPLFVBQUFHLElBQUk7QUFBQSw0QkFBSyw4REFBQyxrRUFBRCxvQkFBY0EsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFMO0FBQUEsT0FBWDtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5SEosZUFpSUk7QUFBSyxlQUFTLEVBQUVYLHNFQUFoQjtBQUFBLGdCQUNLVSwyQ0FBRyxDQUFDRCxNQUFELEVBQVMsVUFBQUUsSUFBSTtBQUFBLDRCQUFLLDhEQUFDLGtFQUFELG9CQUFjQSxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUw7QUFBQSxPQUFiO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpJSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVJSCxDQTNJTTs7R0FBTVYsVTtVQUNpQkMsb0Q7OztLQURqQkQsVSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyTmV3LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NpZGViYXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcbmltcG9ydCB7IFN1Yk1lbnVJdGVtIH0gZnJvbSAnQGNvbXBvbmVudHMvU2lkZWJhci9TdWJNZW51SXRlbSc7XG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJ0Bjb21wb25lbnRzL1NpZGViYXIvTWVudUl0ZW0nO1xuaW1wb3J0IHsgc2lkZWJhckNvbmZpZyB9IGZyb20gJ0Bjb21wb25lbnRzL1NpZGViYXIvc2lkZWJhckNvbmZpZyc7XG5pbXBvcnQgeyBGYUZpcmUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBJb0lvc0Fycm93Rm9yd2FyZCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xuXG5jb25zdCBjeCA9IGNsYXNzTmFtZXMuYmluZChzdHlsZXMpO1xuXG5leHBvcnQgY29uc3QgU2lkZWJhck5ldyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzT3BlblNpZGViYXIgfSA9IHVzZVNlbGVjdG9yKHN0b3JlID0+IHN0b3JlLnNpZGViYXIpO1xuICAgIGNvbnN0IHsgaGVhZGVyLCBtYWluLCBmb290ZXIgfSA9IHNpZGViYXJDb25maWc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLnNpZGViYXIsIHsgJ2Nsb3NlJzogIWlzT3BlblNpZGViYXIgfSl9PlxuICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvRGV0YWlsc30+Ki99XG4gICAgICAgICAgICB7LyogICAgPGkgY2xhc3NOYW1lPSdieCBieGwtYy1wbHVzLXBsdXMnLz4qL31cbiAgICAgICAgICAgIHsvKiAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvTmFtZX0+Q29kaW5nTGFiPC9zcGFuPiovfVxuICAgICAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkxpbmtzfT5cbiAgICAgICAgICAgICAgICB7bWFwKGhlYWRlciwgaXRlbSA9PiAgPE1lbnVJdGVtIHsuLi5pdGVtfSAvPil9XG4gICAgICAgICAgICAgICAgPFN1Yk1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgIGljb249ezxGYUZpcmUvPn1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT0n0KLQtdGB0YLQvtCy0L7QtSDQvNC10L3RjidcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dJY29uPXs8SW9Jb3NBcnJvd0ZvcndhcmQvPn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHsvKjxsaT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPGEgaHJlZj1cIiNcIj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtZ3JpZC1hbHQnPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxGYUhvbWUvPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9pPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua05hbWV9PkRhc2hib2FyZDwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPC9hPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8dWwgY2xhc3NOYW1lPXtjeChzdHlsZXMuc3ViTWVudSwgc3R5bGVzLmJsYW5rKX0+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua05hbWV9IGhyZWY9XCIjXCI+Q2F0ZWdvcnk8L2E+PC9saT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPC91bD4qL31cbiAgICAgICAgICAgICAgICB7Lyo8L2xpPiovfVxuICAgICAgICAgICAgICAgIHsvKjxsaT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uTGlua30+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8YSBocmVmPVwiI1wiPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtY29sbGVjdGlvbicvPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtOYW1lfT5DYXRlZ29yeTwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDwvYT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLWNoZXZyb24tZG93biBhcnJvdycvPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnN1Yk1lbnV9PiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtOYW1lfSBocmVmPVwiI1wiPkNhdGVnb3J5PC9hPjwvbGk+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5IVE1MICYgQ1NTPC9hPjwvbGk+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5KYXZhU2NyaXB0PC9hPjwvbGk+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5QSFAgJiBNeVNRTDwvYT48L2xpPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8L3VsPiovfVxuICAgICAgICAgICAgICAgIHsvKjwvbGk+Ki99XG4gICAgICAgICAgICAgICAgey8qPGxpPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25MaW5rfT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDxhIGhyZWY9XCIjXCI+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1ib29rLWFsdCcvPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtOYW1lfT5Qb3N0czwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDwvYT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLWNoZXZyb24tZG93biBhcnJvdycvPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnN1Yk1lbnV9PiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtOYW1lfSBocmVmPVwiI1wiPlBvc3RzPC9hPjwvbGk+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5XZWIgRGVzaWduPC9hPjwvbGk+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Mb2dpbiBGb3JtPC9hPjwvbGk+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5DYXJkIERlc2lnbjwvYT48L2xpPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8L3VsPiovfVxuICAgICAgICAgICAgICAgIHsvKjwvbGk+Ki99XG4gICAgICAgICAgICAgICAgey8qPGxpPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8YSBocmVmPVwiI1wiPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1waWUtY2hhcnQtYWx0LTInLz4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtOYW1lfT5BbmFseXRpY3M8L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIDwvYT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPHVsIGNsYXNzTmFtZT17Y3goc3R5bGVzLnN1Yk1lbnUsIHN0eWxlcy5ibGFuayl9PiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtOYW1lfSBocmVmPVwiI1wiPkFuYWx5dGljczwvYT48L2xpPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8L3VsPiovfVxuICAgICAgICAgICAgICAgIHsvKjwvbGk+Ki99XG4gICAgICAgICAgICAgICAgey8qPGxpPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8YSBocmVmPVwiI1wiPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1saW5lLWNoYXJ0Jy8+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rTmFtZX0+Q2hhcnQ8L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIDwvYT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPHVsIGNsYXNzTmFtZT17Y3goc3R5bGVzLnN1Yk1lbnUsIHN0eWxlcy5ibGFuayl9PiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtOYW1lfSBocmVmPVwiI1wiPkNoYXJ0PC9hPjwvbGk+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIDwvdWw+Ki99XG4gICAgICAgICAgICAgICAgey8qPC9saT4qL31cbiAgICAgICAgICAgICAgICB7Lyo8bGk+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkxpbmt9PiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGEgaHJlZj1cIiNcIj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LXBsdWcnLz4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rTmFtZX0+UGx1Z2luczwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDwvYT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLWNoZXZyb24tZG93biBhcnJvdycvPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnN1Yk1lbnV9PiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtOYW1lfSBocmVmPVwiI1wiPlBsdWdpbnM8L2E+PC9saT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlVJIEZhY2U8L2E+PC9saT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlBpZ21lbnRzPC9hPjwvbGk+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Cb3ggSWNvbnM8L2E+PC9saT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPC91bD4qL31cbiAgICAgICAgICAgICAgICB7Lyo8L2xpPiovfVxuICAgICAgICAgICAgICAgIHsvKjxsaT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPGEgaHJlZj1cIiNcIj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtY29tcGFzcycvPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua05hbWV9PkV4cGxvcmU8L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIDwvYT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPHVsIGNsYXNzTmFtZT17Y3goc3R5bGVzLnN1Yk1lbnUsIHN0eWxlcy5ibGFuayl9PiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtOYW1lfSBocmVmPVwiI1wiPkV4cGxvcmU8L2E+PC9saT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPC91bD4qL31cbiAgICAgICAgICAgICAgICB7Lyo8L2xpPiovfVxuICAgICAgICAgICAgICAgIHsvKjxsaT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPGEgaHJlZj1cIiNcIj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtaGlzdG9yeScvPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua05hbWV9Pkhpc3Rvcnk8L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIDwvYT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPHVsIGNsYXNzTmFtZT17Y3goc3R5bGVzLnN1Yk1lbnUsIHN0eWxlcy5ibGFuayl9PiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtOYW1lfSBocmVmPVwiI1wiPkhpc3Rvcnk8L2E+PC9saT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPC91bD4qL31cbiAgICAgICAgICAgICAgICB7Lyo8L2xpPiovfVxuICAgICAgICAgICAgICAgIHsvKjxsaT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPGEgaHJlZj1cIiNcIj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtY29nJy8+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rTmFtZX0+U2V0dGluZzwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPC9hPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8dWwgY2xhc3NOYW1lPXtjeChzdHlsZXMuc3ViTWVudSwgc3R5bGVzLmJsYW5rKX0+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua05hbWV9IGhyZWY9XCIjXCI+U2V0dGluZzwvYT48L2xpPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8L3VsPiovfVxuICAgICAgICAgICAgICAgIHsvKjwvbGk+Ki99XG4gICAgICAgICAgICAgICAgey8qPGxpPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVEZXRhaWxzfT4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUNvbnRlbnR9PiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UvcHJvZmlsZS5qcGdcIiBhbHQ9XCJwcm9maWxlSW1nXCIvPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtam9iXCI+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlTmFtZX0+UHJlbSBTaGFoaTwvZGl2PiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuam9ifT5XZWIgRGVzZ2luZXI8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1sb2ctb3V0Jy8+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgIHsvKjwvbGk+Ki99XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlua3N9PlxuICAgICAgICAgICAgICAgIHttYXAobWFpbiwgaXRlbSA9PiAgPE1lbnVJdGVtIHsuLi5pdGVtfSAvPil9XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlua3N9PlxuICAgICAgICAgICAgICAgIHttYXAoZm9vdGVyLCBpdGVtID0+ICA8TWVudUl0ZW0gey4uLml0ZW19IC8+KX1cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sidebar/SidebarNew.js\n");

/***/ })

});