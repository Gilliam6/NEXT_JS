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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var _Users_igorzheltukhin_21school_nextJsreactJs_working_dir_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_igorzheltukhin_21school_nextJsreactJs_working_dir_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_igorzheltukhin_21school_nextJsreactJs_working_dir_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"./node_modules/@prisma/client/index-browser.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _tableLines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableLines */ \"./components/listContent/tableLines.tsx\");\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction ContentList(foods) {\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n        className: \"table-fixed w-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: \"Title\"\n                        }, void 0, false, {\n                            fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: \"Amount\"\n                        }, void 0, false, {\n                            fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: \"Price\"\n                        }, void 0, false, {\n                            fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: \"Shop\"\n                        }, void 0, false, {\n                            fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"btn\",\n                                children: \"Add\"\n                            }, void 0, false, {\n                                fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                lineNumber: 9,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                children: foods === null || foods === void 0 ? void 0 : foods.map(function(product) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_tableLines__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        Title: product.Title,\n                        Amount: product.Amount,\n                        Price: product.Price,\n                        Shop: product.ShopId\n                    }, void 0, false, {\n                        fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 5\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                lineNumber: 20,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this));\n}\n_c = ContentList;\nfunction getServerSideProps() {\n    return _getServerSideProps.apply(this, arguments);\n}\nfunction _getServerSideProps() {\n    _getServerSideProps = _asyncToGenerator(_Users_igorzheltukhin_21school_nextJsreactJs_working_dir_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var prisma, allFoods;\n        return _Users_igorzheltukhin_21school_nextJsreactJs_working_dir_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();\n                    _ctx.next = 3;\n                    return prisma.groceries.findMany();\n                case 3:\n                    allFoods = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            foods: allFoods\n                        }\n                    });\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getServerSideProps.apply(this, arguments);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentList);\nvar _c;\n$RefreshReg$(_c, \"ContentList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpc3RDb250ZW50L2xpc3RDb250ZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUc1QkUsV0FBVyxDQUFDQyxLQUFLLEVBQUMsQ0FBQzs7SUFFeEIsTUFBTSw2RUFDREMsQ0FBSztRQUFDQyxTQUFTLEVBQUMsQ0FBbUI7O3dGQUN6Q0MsQ0FBSztzR0FDSEMsQ0FBRTs7b0dBQ0FDLENBQUU7c0NBQUMsQ0FBSzs7Ozs7O29HQUNSQSxDQUFFO3NDQUFDLENBQU07Ozs7OztvR0FDVEEsQ0FBRTtzQ0FBQyxDQUFLOzs7Ozs7b0dBQ1JBLENBQUU7c0NBQUMsQ0FBSTs7Ozs7O29HQUNQQSxDQUFFO2tIQUNFQyxDQUFNO2dDQUFDSixTQUFTLEVBQUMsQ0FBSzswQ0FBQyxDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUlsQ0ssQ0FBSzswQkFDRlAsS0FBSyxhQUFMQSxLQUFLLEtBQUxBLElBQUksQ0FBSkEsQ0FBVSxHQUFWQSxJQUFJLENBQUpBLENBQVUsR0FBVkEsS0FBSyxDQUFFUSxHQUFHLENBQUMsUUFBUSxDQUFQQyxPQUFhO2tDQUMzQixNQUFNLCtEQUFMWCxtREFBVTt3QkFBQ1ksS0FBSyxFQUFFRCxPQUFPLENBQUNDLEtBQUs7d0JBQUVDLE1BQU0sRUFBRUYsT0FBTyxDQUFDRSxNQUFNO3dCQUFFQyxLQUFLLEVBQUVILE9BQU8sQ0FBQ0csS0FBSzt3QkFBRUMsSUFBSSxFQUFFSixPQUFPLENBQUNLLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl4RyxDQUFDO0tBckJRZixXQUFXO0FBdUJiLFNBQWVnQixrQkFBa0I7V0FBbEJBLG1CQUFrQjs7U0FBbEJBLG1CQUFrQjtJQUFsQkEsbUJBQWtCLHlMQUFqQyxRQUFRLFdBQTRCLENBQUM7WUFDbENDLE1BQU0sRUFDTkMsUUFBUTs7OztvQkFEUkQsTUFBTSxHQUFHLEdBQUcsQ0FBQ25CLHdEQUFZOzsyQkFDUm1CLE1BQU0sQ0FBQ0UsU0FBUyxDQUFDQyxRQUFROztvQkFBMUNGLFFBQVE7aURBQ1AsQ0FBQzt3QkFDTkcsS0FBSyxFQUFFLENBQUM7NEJBQ05wQixLQUFLLEVBQUVpQixRQUFRO3dCQUNqQixDQUFDO29CQUNILENBQUM7Ozs7OztJQUNILENBQUM7V0FSbUJGLG1CQUFrQjs7QUFVeEMsK0RBQWVoQixXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saXN0Q29udGVudC9saXN0Q29udGVudC50c3g/YTQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBUYWJsZUxpbmVzIGZyb20gXCIuL3RhYmxlTGluZXNcIjtcblxuXG5mdW5jdGlvbiBDb250ZW50TGlzdChmb29kcyl7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWZpeGVkIHctMjAwXCI+XG4gIDx0aGVhZD5cbiAgICA8dHI+XG4gICAgICA8dGg+VGl0bGU8L3RoPlxuICAgICAgPHRoPkFtb3VudDwvdGg+XG4gICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgPHRoPlNob3A8L3RoPlxuICAgICAgPHRoPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+QWRkPC9idXR0b24+XG4gICAgICA8L3RoPlxuICAgIDwvdHI+XG4gIDwvdGhlYWQ+XG4gIDx0Ym9keT5cbiAgICAge2Zvb2RzPy5tYXAoKHByb2R1Y3QgOiBhbnkpPT5cbiAgICg8VGFibGVMaW5lcyBUaXRsZT17cHJvZHVjdC5UaXRsZX0gQW1vdW50PXtwcm9kdWN0LkFtb3VudH0gUHJpY2U9e3Byb2R1Y3QuUHJpY2V9IFNob3A9e3Byb2R1Y3QuU2hvcElkfSAvPikpfVxuICA8L3Rib2R5PlxuPC90YWJsZT5cbiAgICAgICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgY29uc3QgYWxsRm9vZHMgPSBhd2FpdCBwcmlzbWEuZ3JvY2VyaWVzLmZpbmRNYW55KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGZvb2RzOiBhbGxGb29kcyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50TGlzdDtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJUYWJsZUxpbmVzIiwiQ29udGVudExpc3QiLCJmb29kcyIsInRhYmxlIiwiY2xhc3NOYW1lIiwidGhlYWQiLCJ0ciIsInRoIiwiYnV0dG9uIiwidGJvZHkiLCJtYXAiLCJwcm9kdWN0IiwiVGl0bGUiLCJBbW91bnQiLCJQcmljZSIsIlNob3AiLCJTaG9wSWQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwcmlzbWEiLCJhbGxGb29kcyIsImdyb2NlcmllcyIsImZpbmRNYW55IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/listContent/listContent.tsx\n");

/***/ })

});