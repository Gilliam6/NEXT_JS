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

/***/ "./components/listContent/tableLines.tsx":
/*!***********************************************!*\
  !*** ./components/listContent/tableLines.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction TableLines(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        className: \"text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                children: props.Title\n            }, void 0, false, {\n                fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/tableLines.tsx\",\n                lineNumber: 4,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                children: props.Amount\n            }, void 0, false, {\n                fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/tableLines.tsx\",\n                lineNumber: 5,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                children: props.Price\n            }, void 0, false, {\n                fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/tableLines.tsx\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                children: props.Shop\n            }, void 0, false, {\n                fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/tableLines.tsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn\",\n                    children: \"Delete\"\n                }, void 0, false, {\n                    fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/tableLines.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/tableLines.tsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/tableLines.tsx\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this));\n}\n_c = TableLines;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableLines);\nvar _c;\n$RefreshReg$(_c, \"TableLines\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpc3RDb250ZW50L3RhYmxlTGluZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7U0FBU0EsVUFBVSxDQUFDQyxLQUFXLEVBQUUsQ0FBQztJQUM5QixNQUFNLDZFQUNEQyxDQUFFO1FBQUNDLFNBQVMsRUFBQyxDQUFhOzt3RkFDdEJDLENBQUU7MEJBQUVILEtBQUssQ0FBQ0ksS0FBSzs7Ozs7O3dGQUNmRCxDQUFFOzBCQUFFSCxLQUFLLENBQUNLLE1BQU07Ozs7Ozt3RkFDaEJGLENBQUU7MEJBQUVILEtBQUssQ0FBQ00sS0FBSzs7Ozs7O3dGQUNmSCxDQUFFOzBCQUFFSCxLQUFLLENBQUNPLElBQUk7Ozs7Ozt3RkFDZEosQ0FBRTtzR0FBRUssQ0FBTTtvQkFBQ04sU0FBUyxFQUFDLENBQUs7OEJBQUMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHOUMsQ0FBQztLQVZRSCxVQUFVO0FBWW5CLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saXN0Q29udGVudC90YWJsZUxpbmVzLnRzeD84YWRlIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFRhYmxlTGluZXMocHJvcHMgOiBhbnkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDx0ZD57cHJvcHMuVGl0bGV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57cHJvcHMuQW1vdW50fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3Byb3BzLlByaWNlfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3Byb3BzLlNob3B9PC90ZD5cbiAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPkRlbGV0ZTwvYnV0dG9uPjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUxpbmVzOyJdLCJuYW1lcyI6WyJUYWJsZUxpbmVzIiwicHJvcHMiLCJ0ciIsImNsYXNzTmFtZSIsInRkIiwiVGl0bGUiLCJBbW91bnQiLCJQcmljZSIsIlNob3AiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/listContent/tableLines.tsx\n");

/***/ })

});