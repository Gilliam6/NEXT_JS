"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/groceries",{

/***/ "./pages/groceries/index.tsx":
/*!***********************************!*\
  !*** ./pages/groceries/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"./node_modules/@prisma/client/index-browser.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_listContent_listContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/listContent/listContent */ \"./components/listContent/listContent.tsx\");\n/* harmony import */ var _components_NavBar_NavigationBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NavBar/NavigationBar */ \"./components/NavBar/NavigationBar.tsx\");\n\n\n\n\nvar prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();\nfunction GroceryPage(param) {\n    var props = param.props;\n    console.log(props.foods);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_NavigationBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/pages/groceries/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_listContent_listContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/pages/groceries/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/pages/groceries/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this));\n}\n_c = GroceryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroceryPage);\nvar _c;\n$RefreshReg$(_c, \"GroceryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ncm9jZXJpZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBQ3FCO0FBQ0Q7QUFFakUsR0FBSyxDQUFDRyxNQUFNLEdBQUcsR0FBRyxDQUFDSCx3REFBWTtTQUV0QkksV0FBVyxDQUFDLEtBQU8sRUFBQyxDQUFDO1FBQVJDLEtBQUssR0FBTixLQUFPLENBQU5BLEtBQUs7SUFDdkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUNHLEtBQUs7SUFDdkIsTUFBTSw2RUFDREMsQ0FBRzs7d0ZBQ0NQLHdFQUFhOzs7Ozt3RkFDYkQsMkVBQVc7Ozs7Ozs7Ozs7O0FBR3hCLENBQUM7S0FSUUcsV0FBVztBQVdwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dyb2Nlcmllcy9pbmRleC50c3g/MGE1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBDb250ZW50TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9saXN0Q29udGVudC9saXN0Q29udGVudFwiO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2QmFyL05hdmlnYXRpb25CYXJcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5mdW5jdGlvbiBHcm9jZXJ5UGFnZSh7cHJvcHN9KXtcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5mb29kcylcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdmlnYXRpb25CYXIgLz5cbiAgICAgICAgICAgIDxDb250ZW50TGlzdCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBHcm9jZXJ5UGFnZTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJDb250ZW50TGlzdCIsIk5hdmlnYXRpb25CYXIiLCJwcmlzbWEiLCJHcm9jZXJ5UGFnZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImZvb2RzIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/groceries/index.tsx\n");

/***/ })

});