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

/***/ "./components/listContent/listContent.tsx":
/*!************************************************!*\
  !*** ./components/listContent/listContent.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tableLines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableLines */ \"./components/listContent/tableLines.tsx\");\n/* harmony import */ var _tableHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableHead */ \"./components/listContent/tableHead.tsx\");\n\n\n\nfunction ContentList(props) {\n    var _this = this;\n    var ref;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: \"table-fixed w-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tableHead__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: (ref = props.foods) === null || ref === void 0 ? void 0 : ref.map(function(product) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tableLines__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        Title: product.Title,\n                        Amount: product.Amount,\n                        Price: product.Price,\n                        Shop: product.Shop.Name\n                    }, product.id, false, {\n                        fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 14\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n}\n_c = ContentList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentList);\nvar _c;\n$RefreshReg$(_c, \"ContentList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpc3RDb250ZW50L2xpc3RDb250ZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFDRjtTQUUxQkUsV0FBVyxDQUFDQyxLQUFXLEVBQUMsQ0FBQzs7UUFLckJBLEdBQVc7SUFKcEIsTUFBTSw2RUFDTEMsQ0FBSztRQUFDQyxTQUFTLEVBQUMsQ0FBbUI7O3dGQUMvQkosa0RBQVM7Ozs7O3dGQUNUSyxDQUFLOzJCQUNESCxHQUFXLEdBQVhBLEtBQUssQ0FBQ0ksS0FBSyxjQUFYSixHQUFXLEtBQVhBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLEdBQVcsQ0FBRUssR0FBRyxDQUFDLFFBQVEsQ0FBUEMsT0FBYTtrQ0FDL0IsTUFBTSwrREFBTFQsbURBQVU7d0JBQWtCVSxLQUFLLEVBQUVELE9BQU8sQ0FBQ0MsS0FBSzt3QkFBRUMsTUFBTSxFQUFFRixPQUFPLENBQUNFLE1BQU07d0JBQUVDLEtBQUssRUFBRUgsT0FBTyxDQUFDRyxLQUFLO3dCQUFFQyxJQUFJLEVBQUVKLE9BQU8sQ0FBQ0ksSUFBSSxDQUFDQyxJQUFJO3VCQUF2R0wsT0FBTyxDQUFDTSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUd4QyxDQUFDO0tBVFFiLFdBQVc7QUFXcEIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saXN0Q29udGVudC9saXN0Q29udGVudC50c3g/YTQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFibGVMaW5lcyBmcm9tIFwiLi90YWJsZUxpbmVzXCI7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gXCIuL3RhYmxlSGVhZFwiO1xuXG5mdW5jdGlvbiBDb250ZW50TGlzdChwcm9wcyA6IGFueSl7XG4gICAgcmV0dXJuIChcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtZml4ZWQgdy0yMDBcIj5cbiAgICAgICAgPFRhYmxlSGVhZCAvPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7cHJvcHMuZm9vZHM/Lm1hcCgocHJvZHVjdCA6IGFueSk9PlxuICAgICAgICAgICAgKDxUYWJsZUxpbmVzIGtleT17cHJvZHVjdC5pZH0gVGl0bGU9e3Byb2R1Y3QuVGl0bGV9IEFtb3VudD17cHJvZHVjdC5BbW91bnR9IFByaWNlPXtwcm9kdWN0LlByaWNlfSBTaG9wPXtwcm9kdWN0LlNob3AuTmFtZX0gLz4pKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRMaXN0XG5cbiJdLCJuYW1lcyI6WyJUYWJsZUxpbmVzIiwiVGFibGVIZWFkIiwiQ29udGVudExpc3QiLCJwcm9wcyIsInRhYmxlIiwiY2xhc3NOYW1lIiwidGJvZHkiLCJmb29kcyIsIm1hcCIsInByb2R1Y3QiLCJUaXRsZSIsIkFtb3VudCIsIlByaWNlIiwiU2hvcCIsIk5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/listContent/listContent.tsx\n");

/***/ })

});