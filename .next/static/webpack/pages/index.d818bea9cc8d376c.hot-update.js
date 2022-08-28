"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Stack.tsx":
/*!**********************************!*\
  !*** ./src/components/Stack.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Stack\": function() { return /* binding */ Stack; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_throw.mjs */ \"./node_modules/@swc/helpers/src/_throw.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_stack_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/stack.module.css */ \"./src/styles/stack.module.css\");\n/* harmony import */ var _styles_stack_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_stack_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Stack = function(param) {\n    var param = param !== null ? param : (0,_swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(new TypeError(\"Cannot destructure undefined\"));\n    _s();\n    var scrollY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)().scrollY;\n    var opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollY, [\n        0,\n        1000\n    ], [\n        0,\n        1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"h-screen bg-gradient-to-b from-primary-200\",\n                style: {\n                    opacity: opacity\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"tech-stack\",\n                className: \"min-h-screen bg-neutral-dark-200 bg-dark-pattern\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[85%] sm:w-[90%] md:w-[90%] pt-24 mx-auto font-semibold text-3xl sm:text-4xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-neutral-light-100\",\n                                    children: \"Tech I've Used\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-24 h-[1px] border border-primary-200\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[85%] sm:w-[90%] mx-auto bg-neutral-light-300/5 outline outline-1 outline-neutral-light-200/10 \".concat((_styles_stack_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"bg-grid\"])),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"a\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"a\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"a\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"a\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"a\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"a\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen\"\n            }, void 0, false, {\n                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Stack, \"npcbVPk4hp5O9jzRA6bk9+HgIsU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform\n    ];\n});\n_c = Stack;\nvar _c;\n$RefreshReg$(_c, \"Stack\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdGFjay50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBMEI7QUFDc0I7QUFDZ0I7QUFFekQsSUFBTUssS0FBSyxHQUFhLGdCQUFRO1FBQVAsc0pBQUU7O0lBQ2hDLElBQU0sT0FBUyxHQUFLRCx3REFBUyxFQUFFLENBQXZCRSxPQUFPO0lBQ2YsSUFBTUMsT0FBTyxHQUFHSiwyREFBWSxDQUFDRyxPQUFPLEVBQUU7QUFBQyxTQUFDO0FBQUUsWUFBSTtLQUFDLEVBQUU7QUFBQyxTQUFDO0FBQUUsU0FBQztLQUFDLENBQUM7SUFFeEQscUJBQ0U7OzBCQUNFLDhEQUFDSixxREFBVTtnQkFDVE8sU0FBUyxFQUFHLDRDQUEwQztnQkFDdERDLEtBQUssRUFBRTtvQkFDTEgsT0FBTyxFQUFFQSxPQUFPO2lCQUNqQjs7Ozs7cUJBQ1c7MEJBQ2QsOERBQUNJLFNBQU87Z0JBQ05DLEVBQUUsRUFBQyxZQUFZO2dCQUNmSCxTQUFTLEVBQUMsa0RBQWtEOztrQ0FFNUQsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxnRkFBZ0Y7a0NBQzdGLDRFQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMseUJBQXlCOzs4Q0FDdEMsOERBQUNJLElBQUU7b0NBQUNKLFNBQVMsRUFBQyx3QkFBd0I7OENBQUMsZ0JBQW1COzs7Ozt5Q0FBSzs4Q0FDL0QsOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyx3Q0FBd0M7Ozs7O3lDQUFPOzs7Ozs7aUNBQzFEOzs7Ozs2QkFDRjtrQ0FDTiw4REFBQ0QsS0FBRzt3QkFDRkMsU0FBUyxFQUFFLG1HQUFrRyxDQUFvQixPQUFsQlIsNEVBQWlCLENBQUU7OzBDQUVsSSw4REFBQ2EsR0FBQzswQ0FBQyxHQUFDOzs7OztxQ0FBSTswQ0FDUiw4REFBQ0EsR0FBQzswQ0FBQyxHQUFDOzs7OztxQ0FBSTswQ0FDUiw4REFBQ0EsR0FBQzswQ0FBQyxHQUFDOzs7OztxQ0FBSTswQ0FDUiw4REFBQ0EsR0FBQzswQ0FBQyxHQUFDOzs7OztxQ0FBSTswQ0FDUiw4REFBQ0EsR0FBQzswQ0FBQyxHQUFDOzs7OztxQ0FBSTswQ0FDUiw4REFBQ0EsR0FBQzswQ0FBQyxHQUFDOzs7OztxQ0FBSTs7Ozs7OzZCQUNKOzs7Ozs7cUJBQ0U7MEJBQ1YsOERBQUNOLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxVQUFVOzs7OztxQkFBTzs7b0JBQy9CLENBQ0g7Q0FDSCxDQUFDO0dBcENXSixLQUFLOztRQUNJRCxvREFBUztRQUNiRCx1REFBWTs7O0FBRmpCRSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1N0YWNrLnRzeD9lNTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zdGFjay5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlU2Nyb2xsIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGNvbnN0IFN0YWNrOiBSZWFjdC5GQyA9ICh7fSkgPT4ge1xuICBjb25zdCB7IHNjcm9sbFkgfSA9IHVzZVNjcm9sbCgpO1xuICBjb25zdCBvcGFjaXR5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFksIFswLCAxMDAwXSwgWzAsIDFdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9e2BoLXNjcmVlbiBiZy1ncmFkaWVudC10by1iIGZyb20tcHJpbWFyeS0yMDBgfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG9wYWNpdHk6IG9wYWNpdHksXG4gICAgICAgIH19XG4gICAgICA+PC9tb3Rpb24uZGl2PlxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9J3RlY2gtc3RhY2snXG4gICAgICAgIGNsYXNzTmFtZT0nbWluLWgtc2NyZWVuIGJnLW5ldXRyYWwtZGFyay0yMDAgYmctZGFyay1wYXR0ZXJuJ1xuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bODUlXSBzbTp3LVs5MCVdIG1kOnctWzkwJV0gcHQtMjQgbXgtYXV0byBmb250LXNlbWlib2xkIHRleHQtM3hsIHNtOnRleHQtNHhsJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQnPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1uZXV0cmFsLWxpZ2h0LTEwMCc+VGVjaCBJJmFwb3M7dmUgVXNlZDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0yNCBoLVsxcHhdIGJvcmRlciBib3JkZXItcHJpbWFyeS0yMDAnPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHctWzg1JV0gc206dy1bOTAlXSBteC1hdXRvIGJnLW5ldXRyYWwtbGlnaHQtMzAwLzUgb3V0bGluZSBvdXRsaW5lLTEgb3V0bGluZS1uZXV0cmFsLWxpZ2h0LTIwMC8xMCAke3N0eWxlc1tcImJnLWdyaWRcIl19YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxwPmE8L3A+XG4gICAgICAgICAgPHA+YTwvcD5cbiAgICAgICAgICA8cD5hPC9wPlxuICAgICAgICAgIDxwPmE8L3A+XG4gICAgICAgICAgPHA+YTwvcD5cbiAgICAgICAgICA8cD5hPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLXNjcmVlbic+PC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwibW90aW9uIiwidXNlVHJhbnNmb3JtIiwidXNlU2Nyb2xsIiwiU3RhY2siLCJzY3JvbGxZIiwib3BhY2l0eSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwic2VjdGlvbiIsImlkIiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Stack.tsx\n"));

/***/ })

});