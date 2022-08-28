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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Stack\": function() { return /* binding */ Stack; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_throw.mjs */ \"./node_modules/@swc/helpers/src/_throw.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_stack_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/stack.module.css */ \"./src/styles/stack.module.css\");\n/* harmony import */ var _styles_stack_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_stack_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Stack = function(param) {\n    var param = param !== null ? param : (0,_swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new TypeError(\"Cannot destructure undefined\"));\n    _s();\n    var scrollY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)().scrollY;\n    var opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollY, [\n        0,\n        1000\n    ], [\n        0,\n        1\n    ]);\n    var frontend = [\n        {\n            name: \"html\",\n            logo: \"/static/images/tech/html.webp\",\n            width: 28\n        },\n        {\n            name: \"css\",\n            logo: \"/static/images/tech/css.webp\",\n            width: 28\n        },\n        {\n            name: \"js\",\n            logo: \"/static/images/tech/js.webp\",\n            width: 32\n        },\n        {\n            name: \"ts\",\n            logo: \"/static/images/tech/ts.webp\",\n            width: 32\n        },\n        {\n            name: \"react\",\n            logo: \"/static/images/tech/react.webp\",\n            width: 95\n        },\n        {\n            name: \"nextjs\",\n            logo: \"/static/images/tech/next-light.webp\",\n            width: 114\n        },\n        {\n            name: \"angular\",\n            logo: \"/static/images/tech/angular.webp\",\n            width: 30\n        },\n        {\n            name: \"tailwind\",\n            logo: \"/static/images/tech/tailwind-light.webp\",\n            width: 200\n        },\n        {\n            name: \"bootstrap\",\n            logo: \"/static/images/tech/bootstrap.webp\",\n            width: 40\n        }, \n    ];\n    var backend = [\n        {\n            name: \"nodejs\",\n            logo: \"/static/images/tech/nodejs-light.webp\",\n            width: 118\n        },\n        {\n            name: \"express\",\n            logo: \"/static/images/tech/express-light.webp\",\n            width: 145\n        },\n        {\n            name: \"restapi\",\n            logo: \"/static/images/tech/restapi.webp\",\n            width: 120\n        },\n        {\n            name: \"postgresql\",\n            logo: \"/static/images/tech/postgres-light.webp\",\n            width: 215\n        },\n        {}\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                className: \"h-screen bg-gradient-to-b from-primary-200\",\n                style: {\n                    opacity: opacity\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"tech-stack\",\n                className: \"min-h-screen bg-neutral-dark-200 bg-dark-pattern\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[85%] sm:w-[90%] md:w-[90%] pt-24 mx-auto font-semibold text-3xl sm:text-4xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-neutral-light-100\",\n                                    children: \"Tech I've Used\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-24 h-[1px] border border-primary-200\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[85%] sm:w-[90%]  mx-auto bg-neutral-light-300/5 outline outline-1 outline-neutral-light-300/10 \".concat((_styles_stack_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"bg-grid\"])),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex flex-row gap-4 flex-wrap\",\n                                children: frontend.map(function(tech) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex items-center justify-between p-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: tech.logo,\n                                                width: tech.width,\n                                                height: tech.name === \"tailwind\" ? 26 : 32,\n                                                alt: tech.name,\n                                                className: \"h-fit hover:scale-90 transition-all\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                                lineNumber: 112,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, tech.name, false, {\n                                        fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex flex-row gap-4 flex-wrap\",\n                                children: backend.map(function(tech) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex items-center justify-between p-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: tech.logo,\n                                                width: tech.width,\n                                                height: tech.name === \"tailwind\" ? 26 : 32,\n                                                alt: tech.name,\n                                                className: \"h-fit hover:scale-90 transition-all\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                                lineNumber: 130,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                            lineNumber: 129,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, tech.name, false, {\n                                        fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen\"\n            }, void 0, false, {\n                fileName: \"/Users/kevinmallari/Documents/Code/Portfolio-2/src/components/Stack.tsx\",\n                lineNumber: 143,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Stack, \"npcbVPk4hp5O9jzRA6bk9+HgIsU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform\n    ];\n});\n_c = Stack;\nvar _c;\n$RefreshReg$(_c, \"Stack\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdGFjay50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUEwQjtBQUNzQjtBQUNqQjtBQUNvQztBQUU1RCxJQUFNTSxLQUFLLEdBQWEsZ0JBQVE7UUFBUCxzSkFBRTs7SUFDaEMsSUFBTSxPQUFTLEdBQUtELHdEQUFTLEVBQUUsQ0FBdkJFLE9BQU87SUFDZixJQUFNQyxPQUFPLEdBQUdKLDJEQUFZLENBQUNHLE9BQU8sRUFBRTtBQUFDLFNBQUM7QUFBRSxZQUFJO0tBQUMsRUFBRTtBQUFDLFNBQUM7QUFBRSxTQUFDO0tBQUMsQ0FBQztJQUV4RCxJQUFNRSxRQUFRLEdBQUc7UUFDZjtZQUNFQyxJQUFJLEVBQUUsTUFBTTtZQUNaQyxJQUFJLEVBQUUsK0JBQStCO1lBQ3JDQyxLQUFLLEVBQUUsRUFBRTtTQUNWO1FBQ0Q7WUFDRUYsSUFBSSxFQUFFLEtBQUs7WUFDWEMsSUFBSSxFQUFFLDhCQUE4QjtZQUNwQ0MsS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNEO1lBQ0VGLElBQUksRUFBRSxJQUFJO1lBQ1ZDLElBQUksRUFBRSw2QkFBNkI7WUFDbkNDLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRDtZQUNFRixJQUFJLEVBQUUsSUFBSTtZQUNWQyxJQUFJLEVBQUUsNkJBQTZCO1lBQ25DQyxLQUFLLEVBQUUsRUFBRTtTQUNWO1FBQ0Q7WUFDRUYsSUFBSSxFQUFFLE9BQU87WUFDYkMsSUFBSSxFQUFFLGdDQUFnQztZQUN0Q0MsS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNEO1lBQ0VGLElBQUksRUFBRSxRQUFRO1lBQ2RDLElBQUksRUFBRSxxQ0FBcUM7WUFDM0NDLEtBQUssRUFBRSxHQUFHO1NBQ1g7UUFDRDtZQUNFRixJQUFJLEVBQUUsU0FBUztZQUNmQyxJQUFJLEVBQUUsa0NBQWtDO1lBQ3hDQyxLQUFLLEVBQUUsRUFBRTtTQUNWO1FBQ0Q7WUFDRUYsSUFBSSxFQUFFLFVBQVU7WUFDaEJDLElBQUksRUFBRSx5Q0FBeUM7WUFDL0NDLEtBQUssRUFBRSxHQUFHO1NBQ1g7UUFDRDtZQUNFRixJQUFJLEVBQUUsV0FBVztZQUNqQkMsSUFBSSxFQUFFLG9DQUFvQztZQUMxQ0MsS0FBSyxFQUFFLEVBQUU7U0FDVjtLQUNGO0lBRUQsSUFBTUMsT0FBTyxHQUFHO1FBQ2Q7WUFDRUgsSUFBSSxFQUFFLFFBQVE7WUFDZEMsSUFBSSxFQUFFLHVDQUF1QztZQUM3Q0MsS0FBSyxFQUFFLEdBQUc7U0FDWDtRQUNEO1lBQ0VGLElBQUksRUFBRSxTQUFTO1lBQ2ZDLElBQUksRUFBRSx3Q0FBd0M7WUFDOUNDLEtBQUssRUFBRSxHQUFHO1NBQ1g7UUFDRDtZQUNFRixJQUFJLEVBQUUsU0FBUztZQUNmQyxJQUFJLEVBQUUsa0NBQWtDO1lBQ3hDQyxLQUFLLEVBQUUsR0FBRztTQUNYO1FBQ0Q7WUFDRUYsSUFBSSxFQUFFLFlBQVk7WUFDbEJDLElBQUksRUFBRSx5Q0FBeUM7WUFDL0NDLEtBQUssRUFBRSxHQUFHO1NBQ1g7UUFDRCxFQUVDO0tBQ0Y7SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUNULHFEQUFVO2dCQUNUWSxTQUFTLEVBQUcsNENBQTBDO2dCQUN0REMsS0FBSyxFQUFFO29CQUNMUixPQUFPLEVBQUVBLE9BQU87aUJBQ2pCOzs7OztxQkFDVzswQkFDZCw4REFBQ1MsU0FBTztnQkFDTkMsRUFBRSxFQUFDLFlBQVk7Z0JBQ2ZILFNBQVMsRUFBQyxrREFBa0Q7O2tDQUU1RCw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGdGQUFnRjtrQ0FDN0YsNEVBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyx5QkFBeUI7OzhDQUN0Qyw4REFBQ0ksSUFBRTtvQ0FBQ0osU0FBUyxFQUFDLHdCQUF3Qjs4Q0FBQyxnQkFBbUI7Ozs7O3lDQUFLOzhDQUMvRCw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLHdDQUF3Qzs7Ozs7eUNBQU87Ozs7OztpQ0FDMUQ7Ozs7OzZCQUNGO2tDQUNOLDhEQUFDRCxLQUFHO3dCQUNGQyxTQUFTLEVBQUUsb0dBQW1HLENBQW9CLE9BQWxCZCw0RUFBaUIsQ0FBRTs7MENBRW5JLDhEQUFDbUIsSUFBRTtnQ0FBQ0wsU0FBUyxFQUFDLCtCQUErQjswQ0FDMUNOLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDLFNBQUNDLElBQUk7eURBQ2pCLDhEQUFDQyxJQUFFO3dDQUVEUixTQUFTLEVBQUMsdUNBQXVDO2tEQUVqRCw0RUFBQ0QsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLEVBQUU7c0RBQ2YsNEVBQUNiLG1EQUFLO2dEQUNKc0IsR0FBRyxFQUFFRixJQUFJLENBQUNYLElBQUk7Z0RBQ2RDLEtBQUssRUFBRVUsSUFBSSxDQUFDVixLQUFLO2dEQUNqQmEsTUFBTSxFQUFFSCxJQUFJLENBQUNaLElBQUksS0FBSyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUU7Z0RBQzFDZ0IsR0FBRyxFQUFFSixJQUFJLENBQUNaLElBQUk7Z0RBQ2RLLFNBQVMsRUFBRyxxQ0FBbUM7Ozs7O3FEQUN4Qzs7Ozs7aURBQ0w7dUNBWERPLElBQUksQ0FBQ1osSUFBSTs7Ozs2Q0FZWDtpQ0FDTixDQUFDOzs7OztxQ0FDQzswQ0FDTCw4REFBQ1UsSUFBRTtnQ0FBQ0wsU0FBUyxFQUFDLCtCQUErQjswQ0FDMUNGLE9BQU8sQ0FBQ1EsR0FBRyxDQUFDLFNBQUNDLElBQUk7eURBQ2hCLDhEQUFDQyxJQUFFO3dDQUVEUixTQUFTLEVBQUMsdUNBQXVDO2tEQUVqRCw0RUFBQ0QsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLEVBQUU7c0RBQ2YsNEVBQUNiLG1EQUFLO2dEQUNKc0IsR0FBRyxFQUFFRixJQUFJLENBQUNYLElBQUk7Z0RBQ2RDLEtBQUssRUFBRVUsSUFBSSxDQUFDVixLQUFLO2dEQUNqQmEsTUFBTSxFQUFFSCxJQUFJLENBQUNaLElBQUksS0FBSyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUU7Z0RBQzFDZ0IsR0FBRyxFQUFFSixJQUFJLENBQUNaLElBQUk7Z0RBQ2RLLFNBQVMsRUFBRyxxQ0FBbUM7Ozs7O3FEQUN4Qzs7Ozs7aURBQ0w7dUNBWERPLElBQUksQ0FBQ1osSUFBSTs7Ozs2Q0FZWDtpQ0FDTixDQUFDOzs7OztxQ0FDQzs7Ozs7OzZCQUNEOzs7Ozs7cUJBQ0U7MEJBQ1YsOERBQUNJLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxVQUFVOzs7OztxQkFBTzs7b0JBQy9CLENBQ0g7Q0FDSCxDQUFDO0dBNUlXVCxLQUFLOztRQUNJRCxvREFBUztRQUNiRCx1REFBWTs7O0FBRmpCRSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1N0YWNrLnRzeD9lNTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zdGFjay5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VTY3JvbGwsIG0gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgY29uc3QgU3RhY2s6IFJlYWN0LkZDID0gKHt9KSA9PiB7XG4gIGNvbnN0IHsgc2Nyb2xsWSB9ID0gdXNlU2Nyb2xsKCk7XG4gIGNvbnN0IG9wYWNpdHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWSwgWzAsIDEwMDBdLCBbMCwgMV0pO1xuXG4gIGNvbnN0IGZyb250ZW5kID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiaHRtbFwiLFxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL2h0bWwud2VicFwiLFxuICAgICAgd2lkdGg6IDI4LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJjc3NcIixcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC9jc3Mud2VicFwiLFxuICAgICAgd2lkdGg6IDI4LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJqc1wiLFxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL2pzLndlYnBcIixcbiAgICAgIHdpZHRoOiAzMixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwidHNcIixcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC90cy53ZWJwXCIsXG4gICAgICB3aWR0aDogMzIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInJlYWN0XCIsXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvcmVhY3Qud2VicFwiLFxuICAgICAgd2lkdGg6IDk1LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJuZXh0anNcIixcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC9uZXh0LWxpZ2h0LndlYnBcIixcbiAgICAgIHdpZHRoOiAxMTQsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImFuZ3VsYXJcIixcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC9hbmd1bGFyLndlYnBcIixcbiAgICAgIHdpZHRoOiAzMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwidGFpbHdpbmRcIixcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC90YWlsd2luZC1saWdodC53ZWJwXCIsXG4gICAgICB3aWR0aDogMjAwLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJib290c3RyYXBcIixcbiAgICAgIGxvZ286IFwiL3N0YXRpYy9pbWFnZXMvdGVjaC9ib290c3RyYXAud2VicFwiLFxuICAgICAgd2lkdGg6IDQwLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgYmFja2VuZCA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIm5vZGVqc1wiLFxuICAgICAgbG9nbzogXCIvc3RhdGljL2ltYWdlcy90ZWNoL25vZGVqcy1saWdodC53ZWJwXCIsXG4gICAgICB3aWR0aDogMTE4LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJleHByZXNzXCIsXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvZXhwcmVzcy1saWdodC53ZWJwXCIsXG4gICAgICB3aWR0aDogMTQ1LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJyZXN0YXBpXCIsXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvcmVzdGFwaS53ZWJwXCIsXG4gICAgICB3aWR0aDogMTIwLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJwb3N0Z3Jlc3FsXCIsXG4gICAgICBsb2dvOiBcIi9zdGF0aWMvaW1hZ2VzL3RlY2gvcG9zdGdyZXMtbGlnaHQud2VicFwiLFxuICAgICAgd2lkdGg6IDIxNSxcbiAgICB9LFxuICAgIHtcbiAgICAgIFxuICAgIH1cbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9e2BoLXNjcmVlbiBiZy1ncmFkaWVudC10by1iIGZyb20tcHJpbWFyeS0yMDBgfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG9wYWNpdHk6IG9wYWNpdHksXG4gICAgICAgIH19XG4gICAgICA+PC9tb3Rpb24uZGl2PlxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9J3RlY2gtc3RhY2snXG4gICAgICAgIGNsYXNzTmFtZT0nbWluLWgtc2NyZWVuIGJnLW5ldXRyYWwtZGFyay0yMDAgYmctZGFyay1wYXR0ZXJuJ1xuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bODUlXSBzbTp3LVs5MCVdIG1kOnctWzkwJV0gcHQtMjQgbXgtYXV0byBmb250LXNlbWlib2xkIHRleHQtM3hsIHNtOnRleHQtNHhsJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQnPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1uZXV0cmFsLWxpZ2h0LTEwMCc+VGVjaCBJJmFwb3M7dmUgVXNlZDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0yNCBoLVsxcHhdIGJvcmRlciBib3JkZXItcHJpbWFyeS0yMDAnPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHctWzg1JV0gc206dy1bOTAlXSAgbXgtYXV0byBiZy1uZXV0cmFsLWxpZ2h0LTMwMC81IG91dGxpbmUgb3V0bGluZS0xIG91dGxpbmUtbmV1dHJhbC1saWdodC0zMDAvMTAgJHtzdHlsZXNbXCJiZy1ncmlkXCJdfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGdhcC00IGZsZXgtd3JhcCc+XG4gICAgICAgICAgICB7ZnJvbnRlbmQubWFwKCh0ZWNoKSA9PiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17dGVjaC5uYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtNCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dGVjaC5sb2dvfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17dGVjaC53aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt0ZWNoLm5hbWUgPT09IFwidGFpbHdpbmRcIiA/IDI2IDogMzJ9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17dGVjaC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLWZpdCBob3ZlcjpzY2FsZS05MCB0cmFuc2l0aW9uLWFsbGB9XG4gICAgICAgICAgICAgICAgICA+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBnYXAtNCBmbGV4LXdyYXAnPlxuICAgICAgICAgICAge2JhY2tlbmQubWFwKCh0ZWNoKSA9PiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17dGVjaC5uYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtNCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dGVjaC5sb2dvfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17dGVjaC53aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt0ZWNoLm5hbWUgPT09IFwidGFpbHdpbmRcIiA/IDI2IDogMzJ9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17dGVjaC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLWZpdCBob3ZlcjpzY2FsZS05MCB0cmFuc2l0aW9uLWFsbGB9XG4gICAgICAgICAgICAgICAgICA+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2gtc2NyZWVuJz48L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJJbWFnZSIsIm1vdGlvbiIsInVzZVRyYW5zZm9ybSIsInVzZVNjcm9sbCIsIlN0YWNrIiwic2Nyb2xsWSIsIm9wYWNpdHkiLCJmcm9udGVuZCIsIm5hbWUiLCJsb2dvIiwid2lkdGgiLCJiYWNrZW5kIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJzZWN0aW9uIiwiaWQiLCJoMiIsInVsIiwibWFwIiwidGVjaCIsImxpIiwic3JjIiwiaGVpZ2h0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Stack.tsx\n"));

/***/ })

});