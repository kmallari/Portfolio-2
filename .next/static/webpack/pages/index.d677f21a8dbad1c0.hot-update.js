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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Stack\": function() { return /* binding */ Stack; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_throw.mjs */ \"./node_modules/@swc/helpers/src/_throw.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_stack_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/stack.module.css */ \"./src/styles/stack.module.css\");\n/* harmony import */ var _styles_stack_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_stack_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Stack = function(param) {\n    var param = param !== null ? param : (0,_swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new TypeError(\"Cannot destructure undefined\"));\n    _s();\n    var scrollY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)().scrollY;\n    var opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollY, [\n        0,\n        1000\n    ], [\n        0,\n        1\n    ]);\n    var frontend = [\n        {\n            name: \"html\",\n            logo: \"/static/images/tech/html.webp\",\n            width: 28\n        },\n        {\n            name: \"css\",\n            logo: \"/static/images/tech/css.webp\",\n            width: 28\n        },\n        {\n            name: \"js\",\n            logo: \"/static/images/tech/js.webp\",\n            width: 32\n        },\n        {\n            name: \"ts\",\n            logo: \"/static/images/tech/ts.webp\",\n            width: 32\n        },\n        {\n            name: \"react\",\n            logo: \"/static/images/tech/react.webp\",\n            width: 95\n        },\n        {\n            name: \"nextjs\",\n            logo: \"/static/images/tech/next-light.webp\",\n            width: 114\n        },\n        {\n            name: \"angular\",\n            logo: \"/static/images/tech/angular.webp\",\n            width: 30\n        },\n        {\n            name: \"tailwind\",\n            logo: \"/static/images/tech/tailwind-light.webp\",\n            width: 200\n        },\n        {\n            name: \"bootstrap\",\n            logo: \"/static/images/tech/bootstrap.webp\",\n            width: 40\n        }, \n    ];\n    var backend = [\n        {\n            name: \"nodejs\",\n            logo: \"/static/images/tech/nodejs-light.webp\",\n            width: 118\n        },\n        {\n            name: \"express\",\n            logo: \"/static/images/tech/express-light.webp\",\n            width: 145\n        },\n        {\n            name: \"restapi\",\n            logo: \"/static/images/tech/restapi.webp\",\n            width: 186\n        },\n        {\n            name: \"postgresql\",\n            logo: \"/static/images/tech/postgres-light.webp\",\n            width: 215\n        },\n        {\n            name: \"mysql\",\n            logo: \"/static/images/tech/mysql.webp\",\n            width: 193\n        },\n        {\n            name: \"mongodb\",\n            logo: \"/static/images/tech/mongodb-light.webp\",\n            width: 181\n        },\n        {\n            name: \"redis\",\n            logo: \"/static/images/tech/redis.webp\",\n            width: 134\n        },\n        {\n            name: \"socket.io\",\n            logo: \"/static/images/tech/socket-light.webp\",\n            width: 190\n        }, \n    ];\n    var misc = [\n        {\n            name: \"docker\",\n            logo: \"/static/images/tech/docker.webp\",\n            width: 177\n        },\n        {\n            name: \"git\",\n            logo: \"/static/images/tech/git-light.webp\",\n            width: 77\n        },\n        {\n            name: \"aws\",\n            logo: \"/static/images/tech/aws-light.webp\",\n            width: 53\n        },\n        {\n            name: \"alibaba-cloud\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                className: \"h-screen bg-gradient-to-b from-primary-200\",\n                style: {\n                    opacity: opacity\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"tech-stack\",\n                className: \"min-h-screen bg-neutral-dark-200 bg-dark-pattern\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[85%] sm:w-[90%] md:w-[90%] pt-24 mx-auto font-semibold text-3xl sm:text-4xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-neutral-light-100\",\n                                    children: \"Tech I've Used\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                    lineNumber: 137,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-24 h-[1px] border border-primary-200\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[85%] sm:w-[90%]  mx-auto bg-neutral-light-300/5 outline outline-1 outline-neutral-light-300/10 \".concat((_styles_stack_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"bg-grid\"])),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex flex-row gap-4 flex-wrap\",\n                                children: frontend.map(function(tech) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex items-center justify-between p-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: tech.logo,\n                                                width: tech.width,\n                                                height: tech.name === \"tailwind\" ? 26 : 32,\n                                                alt: tech.name,\n                                                className: \"h-fit hover:scale-90 transition-all\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                                lineNumber: 151,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                            lineNumber: 150,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, tech.name, false, {\n                                        fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                        lineNumber: 146,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex flex-row gap-4 flex-wrap\",\n                                children: backend.map(function(tech) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex items-center justify-between p-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: tech.logo,\n                                                width: tech.width,\n                                                height: tech.name === \"tailwind\" ? 26 : 32,\n                                                alt: tech.name,\n                                                className: \"h-fit hover:scale-90 transition-all\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                                lineNumber: 169,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                            lineNumber: 168,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, tech.name, false, {\n                                        fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                        lineNumber: 164,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                lineNumber: 162,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen\"\n            }, void 0, false, {\n                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                lineNumber: 182,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Stack, \"npcbVPk4hp5O9jzRA6bk9+HgIsU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform\n    ];\n});\n_c = Stack;\nvar _c;\n$RefreshReg$(_c, \"Stack\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRTtnREFDMUNpQixHQUFHLEVBQUVKLElBQUksQ0FBQ2IsSUFBSTtnREFDZE0sU0FBUyxFQUFHLHFDQUFtQzs7Ozs7cURBQ3hDOzs7OztpREFDTDt1Q0FYRE8sSUFBSSxDQUFDYixJQUFJOzs7OzZDQVlYO2lDQUNOLENBQUM7Ozs7O3FDQUNDOzBDQUNMLDhEQUFDVyxJQUFFO2dDQUFDTCxTQUFTLEVBQUMsK0JBQStCOzBDQUMxQ0gsT0FBTyxDQUFDUyxHQUFHLENBQUMsU0FBQ0MsSUFBSTt5REFDaEIsOERBQUNDLElBQUU7d0NBRURSLFNBQVMsRUFBQyx1Q0FBdUM7a0RBRWpELDRFQUFDRCxLQUFHOzRDQUFDQyxTQUFTLEVBQUMsRUFBRTtzREFDZiw0RUFBQ2QsbURBQUs7Z0RBQ0p1QixHQUFHLEVBQUVGLElBQUksQ0FBQ1osSUFBSTtnREFDZEMsS0FBSyxFQUFFVyxJQUFJLENBQUNYLEtBQUs7Z0RBQ2pCYyxNQUFNLEVBQUVILElBQUksQ0FBQ2IsSUFBSSxLQUFLLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRTtnREFDMUNpQixHQUFHLEVBQUVKLElBQUksQ0FBQ2IsSUFBSTtnREFDZE0sU0FBUyxFQUFHLHFDQUFtQzs7Ozs7cURBQ3hDOzs7OztpREFDTDt1Q0FYRE8sSUFBSSxDQUFDYixJQUFJOzs7OzZDQVlYO2lDQUNOLENBQUM7Ozs7O3FDQUNDOzs7Ozs7NkJBQ0Q7Ozs7OztxQkFDRTswQkFDViw4REFBQ0ssS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFVBQVU7Ozs7O3FCQUFPOztvQkFDL0IsQ0FDSDtDQUNILENBQUM7R0FuTFdWLEtBQUs7O1FBQ0lELG9EQUFTO1FBQ2JELHVEQUFZOzs7QUFGakJFLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3RhY2sudHN4P2U1MzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3N0YWNrLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VUcmFuc2Zvcm0sIHVzZVNjcm9sbCwgbSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBTdGFjazogUmVhY3QuRkMgPSAoe30pID0+IHtcbiAgY29uc3QgeyBzY3JvbGxZIH0gPSB1c2VTY3JvbGwoKTtcbiAgY29uc3Qgb3BhY2l0eSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZLCBbMCwgMTAwMF0sIFswLCAxXSk7XG5cbiAgY29uc3QgZnJvbnRlbmQgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJodG1sXCIsXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvaHRtbC53ZWJwXCIsXG4gICAgICB3aWR0aDogMjgsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImNzc1wiLFxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL2Nzcy53ZWJwXCIsXG4gICAgICB3aWR0aDogMjgsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImpzXCIsXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvanMud2VicFwiLFxuICAgICAgd2lkdGg6IDMyLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ0c1wiLFxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL3RzLndlYnBcIixcbiAgICAgIHdpZHRoOiAzMixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwicmVhY3RcIixcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC9yZWFjdC53ZWJwXCIsXG4gICAgICB3aWR0aDogOTUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIm5leHRqc1wiLFxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL25leHQtbGlnaHQud2VicFwiLFxuICAgICAgd2lkdGg6IDExNCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiYW5ndWxhclwiLFxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL2FuZ3VsYXIud2VicFwiLFxuICAgICAgd2lkdGg6IDMwLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ0YWlsd2luZFwiLFxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL3RhaWx3aW5kLWxpZ2h0LndlYnBcIixcbiAgICAgIHdpZHRoOiAyMDAsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImJvb3RzdHJhcFwiLFxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL2Jvb3RzdHJhcC53ZWJwXCIsXG4gICAgICB3aWR0aDogNDAsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBiYWNrZW5kID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwibm9kZWpzXCIsXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvbm9kZWpzLWxpZ2h0LndlYnBcIixcbiAgICAgIHdpZHRoOiAxMTgsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImV4cHJlc3NcIixcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC9leHByZXNzLWxpZ2h0LndlYnBcIixcbiAgICAgIHdpZHRoOiAxNDUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInJlc3RhcGlcIixcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC9yZXN0YXBpLndlYnBcIixcbiAgICAgIHdpZHRoOiAxODYsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInBvc3RncmVzcWxcIixcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC9wb3N0Z3Jlcy1saWdodC53ZWJwXCIsXG4gICAgICB3aWR0aDogMjE1LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJteXNxbFwiLFxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL215c3FsLndlYnBcIixcbiAgICAgIHdpZHRoOiAxOTMsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIm1vbmdvZGJcIixcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC9tb25nb2RiLWxpZ2h0LndlYnBcIixcbiAgICAgIHdpZHRoOiAxODEsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInJlZGlzXCIsXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvcmVkaXMud2VicFwiLFxuICAgICAgd2lkdGg6IDEzNCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwic29ja2V0LmlvXCIsXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvc29ja2V0LWxpZ2h0LndlYnBcIixcbiAgICAgIHdpZHRoOiAxOTAsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBtaXNjID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiZG9ja2VyXCIsXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvZG9ja2VyLndlYnBcIixcbiAgICAgIHdpZHRoOiAxNzcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImdpdFwiLFxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL2dpdC1saWdodC53ZWJwXCIsXG4gICAgICB3aWR0aDogNzcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImF3c1wiLFxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL2F3cy1saWdodC53ZWJwXCIsXG4gICAgICB3aWR0aDogNTMsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImFsaWJhYmEtY2xvdWRcIlxuICAgICAgXG4gICAgfVxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgaC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tYiBmcm9tLXByaW1hcnktMjAwYH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBvcGFjaXR5OiBvcGFjaXR5LFxuICAgICAgICB9fVxuICAgICAgPjwvbW90aW9uLmRpdj5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGlkPSd0ZWNoLXN0YWNrJ1xuICAgICAgICBjbGFzc05hbWU9J21pbi1oLXNjcmVlbiBiZy1uZXV0cmFsLWRhcmstMjAwIGJnLWRhcmstcGF0dGVybidcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctWzg1JV0gc206dy1bOTAlXSBtZDp3LVs5MCVdIHB0LTI0IG14LWF1dG8gZm9udC1zZW1pYm9sZCB0ZXh0LTN4bCBzbTp0ZXh0LTR4bCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC00Jz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtbmV1dHJhbC1saWdodC0xMDAnPlRlY2ggSSZhcG9zO3ZlIFVzZWQ8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMjQgaC1bMXB4XSBib3JkZXIgYm9yZGVyLXByaW1hcnktMjAwJz48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2B3LVs4NSVdIHNtOnctWzkwJV0gIG14LWF1dG8gYmctbmV1dHJhbC1saWdodC0zMDAvNSBvdXRsaW5lIG91dGxpbmUtMSBvdXRsaW5lLW5ldXRyYWwtbGlnaHQtMzAwLzEwICR7c3R5bGVzW1wiYmctZ3JpZFwiXX1gfVxuICAgICAgICA+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBnYXAtNCBmbGV4LXdyYXAnPlxuICAgICAgICAgICAge2Zyb250ZW5kLm1hcCgodGVjaCkgPT4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e3RlY2gubmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTQnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e3RlY2gubG9nb31cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3RlY2gud2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17dGVjaC5uYW1lID09PSBcInRhaWx3aW5kXCIgPyAyNiA6IDMyfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3RlY2gubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC1maXQgaG92ZXI6c2NhbGUtOTAgdHJhbnNpdGlvbi1hbGxgfVxuICAgICAgICAgICAgICAgICAgPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgZ2FwLTQgZmxleC13cmFwJz5cbiAgICAgICAgICAgIHtiYWNrZW5kLm1hcCgodGVjaCkgPT4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e3RlY2gubmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTQnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e3RlY2gubG9nb31cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3RlY2gud2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17dGVjaC5uYW1lID09PSBcInRhaWx3aW5kXCIgPyAyNiA6IDMyfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3RlY2gubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC1maXQgaG92ZXI6c2NhbGUtOTAgdHJhbnNpdGlvbi1hbGxgfVxuICAgICAgICAgICAgICAgICAgPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLXNjcmVlbic+PC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiSW1hZ2UiLCJtb3Rpb24iLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VTY3JvbGwiLCJTdGFjayIsInNjcm9sbFkiLCJvcGFjaXR5IiwiZnJvbnRlbmQiLCJuYW1lIiwibG9nbyIsIndpZHRoIiwiYmFja2VuZCIsIm1pc2MiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInNlY3Rpb24iLCJpZCIsImgyIiwidWwiLCJtYXAiLCJ0ZWNoIiwibGkiLCJzcmMiLCJoZWlnaHQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Stack.tsx\n"));

/***/ })

});