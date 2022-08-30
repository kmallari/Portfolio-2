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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Stack\": function() { return /* binding */ Stack; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_throw.mjs */ \"./node_modules/@swc/helpers/src/_throw.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_stack_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/stack.module.css */ \"./src/styles/stack.module.css\");\n/* harmony import */ var _styles_stack_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_stack_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _SkillListing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SkillListing */ \"./src/components/SkillListing.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Stack = function(param) {\n    var param = param !== null ? param : (0,_swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new TypeError(\"Cannot destructure undefined\"));\n    _s();\n    var scrollY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)().scrollY;\n    var opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollY, [\n        0,\n        1000\n    ], [\n        0,\n        1\n    ]);\n    var frontend = [\n        {\n            name: \"HTML\",\n            logo: \"/static/images/tech/html.webp\",\n            width: 28\n        },\n        {\n            name: \"CSS\",\n            logo: \"/static/images/tech/css.webp\",\n            width: 28\n        },\n        {\n            name: \"JavaScript\",\n            logo: \"/static/images/tech/js.webp\",\n            width: 32\n        },\n        {\n            name: \"TypeScript\",\n            logo: \"/static/images/tech/ts.webp\",\n            width: 32\n        },\n        {\n            name: \"React\",\n            logo: \"/static/images/tech/react.webp\",\n            width: 32\n        },\n        {\n            name: \"NextJS\",\n            logo: \"/static/images/tech/nextjs.webp\",\n            width: 32\n        },\n        {\n            name: \"Angular\",\n            logo: \"/static/images/tech/angular.webp\",\n            width: 30\n        },\n        {\n            name: \"Tailwind CSS\",\n            logo: \"/static/images/tech/tailwind.webp\",\n            width: 54\n        },\n        {\n            name: \"Bootstrap\",\n            logo: \"/static/images/tech/bootstrap.webp\",\n            width: 40\n        }, \n    ];\n    var backend = [\n        {\n            name: \"NodeJS\",\n            logo: \"/static/images/tech/nodejs.webp\",\n            width: 28\n        },\n        {\n            name: \"ExpressJS\",\n            logo: \"/static/images/tech/express.webp\",\n            width: 32\n        },\n        {\n            name: \"REST APIs\",\n            logo: \"/static/images/tech/restapi.webp\",\n            width: 36\n        },\n        {\n            name: \"PostgreSQL\",\n            logo: \"/static/images/tech/postgres.webp\",\n            width: 32\n        },\n        {\n            name: \"MySQL\",\n            logo: \"/static/images/tech/mysql.webp\",\n            width: 33\n        },\n        {\n            name: \"MongoDB\",\n            logo: \"/static/images/tech/mongodb.webp\",\n            width: 14\n        },\n        {\n            name: \"Firebase\",\n            logo: \"/static/images/tech/firebase.webp\",\n            width: 23\n        },\n        {\n            name: \"Supabase\",\n            logo: \"/static/images/tech/supabase.webp\",\n            width: 31\n        },\n        {\n            name: \"Redis\",\n            logo: \"/static/images/tech/redis.webp\",\n            width: 38\n        },\n        {\n            name: \"Socket.IO\",\n            logo: \"/static/images/tech/socket.webp\",\n            width: 32\n        }, \n    ];\n    var misc = [\n        {\n            name: \"Docker\",\n            logo: \"/static/images/tech/docker.webp\",\n            width: 44\n        },\n        {\n            name: \"Git\",\n            logo: \"/static/images/tech/git.webp\",\n            width: 33\n        },\n        {\n            name: \"AWS\",\n            logo: \"/static/images/tech/aws.webp\",\n            width: 53\n        },\n        {\n            name: \"Alibaba Cloud\",\n            logo: \"/static/images/tech/alibaba.webp\",\n            width: 51\n        },\n        {\n            name: \"Python\",\n            logo: \"/static/images/tech/python.webp\",\n            width: 33\n        },\n        {\n            name: \"Figma\",\n            logo: \"/static/images/tech/figma.webp\",\n            width: 22\n        },\n        {\n            name: \"Adobe Tools\",\n            logo: \"/static/images/tech/adobe.webp\",\n            width: 37\n        },\n        {\n            name: \"C++\",\n            logo: \"/static/images/tech/c++.webp\",\n            width: 28\n        },\n        {\n            name: \"Arduino\",\n            logo: \"/static/images/tech/arduino.webp\",\n            width: 32\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                className: \"h-screen bg-gradient-to-b from-primary-200\",\n                style: {\n                    opacity: opacity\n                }\n            }, void 0, false, {\n                fileName: \"E:\\\\WindowsFiles\\\\Documents\\\\aaKEVIN\\\\Coding\\\\websites\\\\portfolio-2\\\\src\\\\components\\\\Stack.tsx\",\n                lineNumber: 161,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"tech-stack\",\n                className: \"min-h-screen bg-neutral-dark-200 bg-dark-pattern\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[85%] sm:w-[90%] md:w-[90%] pt-24 mx-auto font-semibold text-3xl sm:text-4xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center gap-4 mb-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-neutral-100\",\n                                    children: \"Tech I've Used\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\WindowsFiles\\\\Documents\\\\aaKEVIN\\\\Coding\\\\websites\\\\portfolio-2\\\\src\\\\components\\\\Stack.tsx\",\n                                    lineNumber: 173,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-24 h-[1px] border border-primary-200\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\WindowsFiles\\\\Documents\\\\aaKEVIN\\\\Coding\\\\websites\\\\portfolio-2\\\\src\\\\components\\\\Stack.tsx\",\n                                    lineNumber: 174,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\WindowsFiles\\\\Documents\\\\aaKEVIN\\\\Coding\\\\websites\\\\portfolio-2\\\\src\\\\components\\\\Stack.tsx\",\n                            lineNumber: 172,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\WindowsFiles\\\\Documents\\\\aaKEVIN\\\\Coding\\\\websites\\\\portfolio-2\\\\src\\\\components\\\\Stack.tsx\",\n                        lineNumber: 171,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[85%] sm:w-[90%] mx-auto bg-neutral-300/5 outline outline-1 outline-neutral-300/10 \".concat((_styles_stack_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"bg-grid\"]), \" p-16 grid grid-cols-3\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SkillListing__WEBPACK_IMPORTED_MODULE_2__.SkillListing, {\n                                title: \"front end tools\",\n                                skills: frontend\n                            }, void 0, false, {\n                                fileName: \"E:\\\\WindowsFiles\\\\Documents\\\\aaKEVIN\\\\Coding\\\\websites\\\\portfolio-2\\\\src\\\\components\\\\Stack.tsx\",\n                                lineNumber: 180,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SkillListing__WEBPACK_IMPORTED_MODULE_2__.SkillListing, {\n                                title: \"back end tools\",\n                                skills: backend\n                            }, void 0, false, {\n                                fileName: \"E:\\\\WindowsFiles\\\\Documents\\\\aaKEVIN\\\\Coding\\\\websites\\\\portfolio-2\\\\src\\\\components\\\\Stack.tsx\",\n                                lineNumber: 181,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SkillListing__WEBPACK_IMPORTED_MODULE_2__.SkillListing, {\n                                title: \"front end tools\",\n                                skills: misc\n                            }, void 0, false, {\n                                fileName: \"E:\\\\WindowsFiles\\\\Documents\\\\aaKEVIN\\\\Coding\\\\websites\\\\portfolio-2\\\\src\\\\components\\\\Stack.tsx\",\n                                lineNumber: 182,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\WindowsFiles\\\\Documents\\\\aaKEVIN\\\\Coding\\\\websites\\\\portfolio-2\\\\src\\\\components\\\\Stack.tsx\",\n                        lineNumber: 177,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\WindowsFiles\\\\Documents\\\\aaKEVIN\\\\Coding\\\\websites\\\\portfolio-2\\\\src\\\\components\\\\Stack.tsx\",\n                lineNumber: 167,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen\"\n            }, void 0, false, {\n                fileName: \"E:\\\\WindowsFiles\\\\Documents\\\\aaKEVIN\\\\Coding\\\\websites\\\\portfolio-2\\\\src\\\\components\\\\Stack.tsx\",\n                lineNumber: 185,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Stack, \"npcbVPk4hp5O9jzRA6bk9+HgIsU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform\n    ];\n});\n_c = Stack;\nvar _c;\n$RefreshReg$(_c, \"Stack\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsZ0ZBQWdGO2tDQUM3Riw0RUFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHVDQUF1Qzs7OENBQ3BELDhEQUFDSSxJQUFFO29DQUFDSixTQUFTLEVBQUMsa0JBQWtCOzhDQUFDLGdCQUFtQjs7Ozs7eUNBQUs7OENBQ3pELDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsd0NBQXdDOzs7Ozt5Q0FBTzs7Ozs7O2lDQUMxRDs7Ozs7NkJBQ0Y7a0NBQ04sOERBQUNELEtBQUc7d0JBQ0ZDLFNBQVMsRUFBRSx1RkFBc0YsQ0FBb0IsTUFBc0IsQ0FBeENmLDRFQUFpQixFQUFDLHdCQUFzQixDQUFDOzswQ0FFNUksOERBQUNDLHVEQUFZO2dDQUFDbUIsS0FBSyxFQUFFLGlCQUFpQjtnQ0FBRUMsTUFBTSxFQUFFYixRQUFROzs7OztxQ0FBSTswQ0FDNUQsOERBQUNQLHVEQUFZO2dDQUFDbUIsS0FBSyxFQUFFLGdCQUFnQjtnQ0FBRUMsTUFBTSxFQUFFVCxPQUFPOzs7OztxQ0FBSTswQ0FDMUQsOERBQUNYLHVEQUFZO2dDQUFDbUIsS0FBSyxFQUFFLGlCQUFpQjtnQ0FBRUMsTUFBTSxFQUFFUixJQUFJOzs7OztxQ0FBSTs7Ozs7OzZCQUNwRDs7Ozs7O3FCQUNFOzBCQUNWLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsVUFBVTs7Ozs7cUJBQU87O29CQUMvQixDQUNIO0NBQ0gsQ0FBQztHQXRMV1YsS0FBSzs7UUFDSUQsb0RBQVM7UUFDYkQsdURBQVk7OztBQUZqQkUsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TdGFjay50c3g/ZTUzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zdGFjay5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IFNraWxsTGlzdGluZyB9IGZyb20gXCIuL1NraWxsTGlzdGluZ1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlU2Nyb2xsLCBtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdGFjazogUmVhY3QuRkMgPSAoe30pID0+IHtcclxuICBjb25zdCB7IHNjcm9sbFkgfSA9IHVzZVNjcm9sbCgpO1xyXG4gIGNvbnN0IG9wYWNpdHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWSwgWzAsIDEwMDBdLCBbMCwgMV0pO1xyXG5cclxuICBjb25zdCBmcm9udGVuZCA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJIVE1MXCIsXHJcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC9odG1sLndlYnBcIixcclxuICAgICAgd2lkdGg6IDI4LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDU1NcIixcclxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL2Nzcy53ZWJwXCIsXHJcbiAgICAgIHdpZHRoOiAyOCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSmF2YVNjcmlwdFwiLFxyXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvanMud2VicFwiLFxyXG4gICAgICB3aWR0aDogMzIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlR5cGVTY3JpcHRcIixcclxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL3RzLndlYnBcIixcclxuICAgICAgd2lkdGg6IDMyLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZWFjdFwiLFxyXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvcmVhY3Qud2VicFwiLFxyXG4gICAgICB3aWR0aDogMzIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk5leHRKU1wiLFxyXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvbmV4dGpzLndlYnBcIixcclxuICAgICAgd2lkdGg6IDMyLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBbmd1bGFyXCIsXHJcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC9hbmd1bGFyLndlYnBcIixcclxuICAgICAgd2lkdGg6IDMwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJUYWlsd2luZCBDU1NcIixcclxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL3RhaWx3aW5kLndlYnBcIixcclxuICAgICAgd2lkdGg6IDU0LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCb290c3RyYXBcIixcclxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL2Jvb3RzdHJhcC53ZWJwXCIsXHJcbiAgICAgIHdpZHRoOiA0MCxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgYmFja2VuZCA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJOb2RlSlNcIixcclxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL25vZGVqcy53ZWJwXCIsXHJcbiAgICAgIHdpZHRoOiAyOCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiRXhwcmVzc0pTXCIsXHJcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC9leHByZXNzLndlYnBcIixcclxuICAgICAgd2lkdGg6IDMyLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSRVNUIEFQSXNcIixcclxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL3Jlc3RhcGkud2VicFwiLFxyXG4gICAgICB3aWR0aDogMzYsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlBvc3RncmVTUUxcIixcclxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL3Bvc3RncmVzLndlYnBcIixcclxuICAgICAgd2lkdGg6IDMyLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJNeVNRTFwiLFxyXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvbXlzcWwud2VicFwiLFxyXG4gICAgICB3aWR0aDogMzMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk1vbmdvREJcIixcclxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL21vbmdvZGIud2VicFwiLFxyXG4gICAgICB3aWR0aDogMTQsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkZpcmViYXNlXCIsXHJcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC9maXJlYmFzZS53ZWJwXCIsXHJcbiAgICAgIHdpZHRoOiAyMyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU3VwYWJhc2VcIixcclxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL3N1cGFiYXNlLndlYnBcIixcclxuICAgICAgd2lkdGg6IDMxLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZWRpc1wiLFxyXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvcmVkaXMud2VicFwiLFxyXG4gICAgICB3aWR0aDogMzgsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNvY2tldC5JT1wiLFxyXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvc29ja2V0LndlYnBcIixcclxuICAgICAgd2lkdGg6IDMyLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBtaXNjID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkRvY2tlclwiLFxyXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvZG9ja2VyLndlYnBcIixcclxuICAgICAgd2lkdGg6IDQ0LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJHaXRcIixcclxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL2dpdC53ZWJwXCIsXHJcbiAgICAgIHdpZHRoOiAzMyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQVdTXCIsXHJcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC9hd3Mud2VicFwiLFxyXG4gICAgICB3aWR0aDogNTMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkFsaWJhYmEgQ2xvdWRcIixcclxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL2FsaWJhYmEud2VicFwiLFxyXG4gICAgICB3aWR0aDogNTEsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlB5dGhvblwiLFxyXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvcHl0aG9uLndlYnBcIixcclxuICAgICAgd2lkdGg6IDMzLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJGaWdtYVwiLFxyXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvZmlnbWEud2VicFwiLFxyXG4gICAgICB3aWR0aDogMjIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkFkb2JlIFRvb2xzXCIsXHJcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC9hZG9iZS53ZWJwXCIsXHJcbiAgICAgIHdpZHRoOiAzNyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQysrXCIsXHJcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC9jKysud2VicFwiLFxyXG4gICAgICB3aWR0aDogMjgsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkFyZHVpbm9cIixcclxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL2FyZHVpbm8ud2VicFwiLFxyXG4gICAgICB3aWR0aDogMzIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YGgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1wcmltYXJ5LTIwMGB9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIG9wYWNpdHk6IG9wYWNpdHksXHJcbiAgICAgICAgfX1cclxuICAgICAgPjwvbW90aW9uLmRpdj5cclxuICAgICAgPHNlY3Rpb25cclxuICAgICAgICBpZD0ndGVjaC1zdGFjaydcclxuICAgICAgICBjbGFzc05hbWU9J21pbi1oLXNjcmVlbiBiZy1uZXV0cmFsLWRhcmstMjAwIGJnLWRhcmstcGF0dGVybidcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVs4NSVdIHNtOnctWzkwJV0gbWQ6dy1bOTAlXSBwdC0yNCBteC1hdXRvIGZvbnQtc2VtaWJvbGQgdGV4dC0zeGwgc206dGV4dC00eGwnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC00IG1iLTgnPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LW5ldXRyYWwtMTAwJz5UZWNoIEkmYXBvczt2ZSBVc2VkPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMjQgaC1bMXB4XSBib3JkZXIgYm9yZGVyLXByaW1hcnktMjAwJz48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YHctWzg1JV0gc206dy1bOTAlXSBteC1hdXRvIGJnLW5ldXRyYWwtMzAwLzUgb3V0bGluZSBvdXRsaW5lLTEgb3V0bGluZS1uZXV0cmFsLTMwMC8xMCAke3N0eWxlc1tcImJnLWdyaWRcIl19IHAtMTYgZ3JpZCBncmlkLWNvbHMtM2B9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNraWxsTGlzdGluZyB0aXRsZT17XCJmcm9udCBlbmQgdG9vbHNcIn0gc2tpbGxzPXtmcm9udGVuZH0gLz5cclxuICAgICAgICAgIDxTa2lsbExpc3RpbmcgdGl0bGU9e1wiYmFjayBlbmQgdG9vbHNcIn0gc2tpbGxzPXtiYWNrZW5kfSAvPlxyXG4gICAgICAgICAgPFNraWxsTGlzdGluZyB0aXRsZT17XCJmcm9udCBlbmQgdG9vbHNcIn0gc2tpbGxzPXttaXNjfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLXNjcmVlbic+PC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJTa2lsbExpc3RpbmciLCJtb3Rpb24iLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VTY3JvbGwiLCJTdGFjayIsInNjcm9sbFkiLCJvcGFjaXR5IiwiZnJvbnRlbmQiLCJuYW1lIiwibG9nbyIsIndpZHRoIiwiYmFja2VuZCIsIm1pc2MiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInNlY3Rpb24iLCJpZCIsImgyIiwidGl0bGUiLCJza2lsbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Stack.tsx\n"));

/***/ })

});