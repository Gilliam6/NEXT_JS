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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var _Users_igorzheltukhin_21school_nextJsreactJs_working_dir_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_igorzheltukhin_21school_nextJsreactJs_working_dir_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_igorzheltukhin_21school_nextJsreactJs_working_dir_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"./node_modules/@prisma/client/index-browser.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _tableLines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableLines */ \"./components/listContent/tableLines.tsx\");\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();\nfunction ContentList(props) {\n    var _this = this;\n    var allProducts = props.foods;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n        className: \"table-fixed w-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: \"Title\"\n                        }, void 0, false, {\n                            fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: \"Amount\"\n                        }, void 0, false, {\n                            fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: \"Price\"\n                        }, void 0, false, {\n                            fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: \"Shop\"\n                        }, void 0, false, {\n                            fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"btn\",\n                                children: \"Add\"\n                            }, void 0, false, {\n                                fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                lineNumber: 11,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                children: allProducts.map(function(product) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_tableLines__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        Title: product.Title,\n                        Amount: product.Amount,\n                        Price: product.Price,\n                        Shop: product.ShopId\n                    }, void 0, false, {\n                        fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n                lineNumber: 22,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/igorzheltukhin/21school/nextJsreactJs/working_dir/components/listContent/listContent.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this));\n}\n_c = ContentList;\nfunction getServerSideProps() {\n    return _getServerSideProps.apply(this, arguments);\n}\nfunction _getServerSideProps() {\n    _getServerSideProps = _asyncToGenerator(_Users_igorzheltukhin_21school_nextJsreactJs_working_dir_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var allFoods;\n        return _Users_igorzheltukhin_21school_nextJsreactJs_working_dir_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return prisma.groceries.findMany();\n                case 2:\n                    allFoods = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            foods: allFoods\n                        }\n                    });\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getServerSideProps.apply(this, arguments);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentList);\nvar _c;\n$RefreshReg$(_c, \"ContentList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpc3RDb250ZW50L2xpc3RDb250ZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxHQUFLLENBQUNFLE1BQU0sR0FBRyxHQUFHLENBQUNGLHdEQUFZO1NBRXRCRyxXQUFXLENBQUNDLEtBQXNCLEVBQUMsQ0FBQzs7SUFFekMsR0FBSyxDQUFDQyxXQUFXLEdBQUdELEtBQUssQ0FBQ0UsS0FBSztJQUMvQixNQUFNLDZFQUNEQyxDQUFLO1FBQUNDLFNBQVMsRUFBQyxDQUFtQjs7d0ZBQ3pDQyxDQUFLO3NHQUNIQyxDQUFFOztvR0FDQUMsQ0FBRTtzQ0FBQyxDQUFLOzs7Ozs7b0dBQ1JBLENBQUU7c0NBQUMsQ0FBTTs7Ozs7O29HQUNUQSxDQUFFO3NDQUFDLENBQUs7Ozs7OztvR0FDUkEsQ0FBRTtzQ0FBQyxDQUFJOzs7Ozs7b0dBQ1BBLENBQUU7a0hBQ0VDLENBQU07Z0NBQUNKLFNBQVMsRUFBQyxDQUFLOzBDQUFDLENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSWxDSyxDQUFLOzBCQUNGUixXQUFXLENBQUNTLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU87a0NBQzFCLE1BQU0sK0RBQUxkLG1EQUFVO3dCQUFDZSxLQUFLLEVBQUVELE9BQU8sQ0FBQ0MsS0FBSzt3QkFBRUMsTUFBTSxFQUFFRixPQUFPLENBQUNFLE1BQU07d0JBQUVDLEtBQUssRUFBRUgsT0FBTyxDQUFDRyxLQUFLO3dCQUFFQyxJQUFJLEVBQUVKLE9BQU8sQ0FBQ0ssTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hHLENBQUM7S0F6QlFqQixXQUFXO0FBMkJiLFNBQWVrQixrQkFBa0I7V0FBbEJBLG1CQUFrQjs7U0FBbEJBLG1CQUFrQjtJQUFsQkEsbUJBQWtCLHlMQUFqQyxRQUFRLFdBQTRCLENBQUM7WUFDbENDLFFBQVE7Ozs7OzJCQUFTcEIsTUFBTSxDQUFDcUIsU0FBUyxDQUFDQyxRQUFROztvQkFBMUNGLFFBQVE7aURBQ1AsQ0FBQzt3QkFDTmxCLEtBQUssRUFBRSxDQUFDOzRCQUNORSxLQUFLLEVBQUVnQixRQUFRO3dCQUNqQixDQUFDO29CQUNILENBQUM7Ozs7OztJQUNILENBQUM7V0FQbUJELG1CQUFrQjs7QUFTeEMsK0RBQWVsQixXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saXN0Q29udGVudC9saXN0Q29udGVudC50c3g/YTQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBUYWJsZUxpbmVzIGZyb20gXCIuL3RhYmxlTGluZXNcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5mdW5jdGlvbiBDb250ZW50TGlzdChwcm9wczogeyBmb29kczogYW55OyB9KXtcbiAgICBcbiAgICBjb25zdCBhbGxQcm9kdWN0cyA9IHByb3BzLmZvb2RzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1maXhlZCB3LTIwMFwiPlxuICA8dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgPHRoPlRpdGxlPC90aD5cbiAgICAgIDx0aD5BbW91bnQ8L3RoPlxuICAgICAgPHRoPlByaWNlPC90aD5cbiAgICAgIDx0aD5TaG9wPC90aD5cbiAgICAgIDx0aD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPkFkZDwvYnV0dG9uPlxuICAgICAgPC90aD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuICA8dGJvZHk+XG4gICAgIHthbGxQcm9kdWN0cy5tYXAoKHByb2R1Y3QpPT5cbiAgICA8VGFibGVMaW5lcyBUaXRsZT17cHJvZHVjdC5UaXRsZX0gQW1vdW50PXtwcm9kdWN0LkFtb3VudH0gUHJpY2U9e3Byb2R1Y3QuUHJpY2V9IFNob3A9e3Byb2R1Y3QuU2hvcElkfT5cblxuICAgIDwvVGFibGVMaW5lcz4pfVxuICAgXG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuICAgICAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAgIGNvbnN0IGFsbEZvb2RzID0gYXdhaXQgcHJpc21hLmdyb2Nlcmllcy5maW5kTWFueSgpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBmb29kczogYWxsRm9vZHMsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudExpc3Q7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiVGFibGVMaW5lcyIsInByaXNtYSIsIkNvbnRlbnRMaXN0IiwicHJvcHMiLCJhbGxQcm9kdWN0cyIsImZvb2RzIiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwidGgiLCJidXR0b24iLCJ0Ym9keSIsIm1hcCIsInByb2R1Y3QiLCJUaXRsZSIsIkFtb3VudCIsIlByaWNlIiwiU2hvcCIsIlNob3BJZCIsImdldFNlcnZlclNpZGVQcm9wcyIsImFsbEZvb2RzIiwiZ3JvY2VyaWVzIiwiZmluZE1hbnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/listContent/listContent.tsx\n");

/***/ })

});