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

/***/ "./src/components/SkillListing.tsx":
/*!*****************************************!*\
  !*** ./src/components/SkillListing.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SkillListing\": function() { return /* binding */ SkillListing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar SkillListing = function(param) {\n    var title = param.title, skills = param.skills;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(title === \"miscellaneous tools\" ? \"col-span-2 md:col-span-1\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-lg font-semibold uppercase tracking-widest mb-4 font-azeret\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kevin\\\\Documents\\\\Code\\\\Portfolio-2\\\\src\\\\components\\\\SkillListing.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-row flex-wrap gap-10 items-center\",\n                children: skills.map(function(tech) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex items-center justify-between p-6 rounded-md bg-[#d6f1ff05] outline-neutral-light-300/10 hover:bg-neutral-light-300/10 outline outline-1 hover:outline-neutral-light-300 hover:outline-4 transition-all group\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: tech.logo,\n                                    width: tech.width,\n                                    height: 32,\n                                    alt: tech.name,\n                                    className: \"h-fit group-hover:scale-90 transition-all\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kevin\\\\Documents\\\\Code\\\\Portfolio-2\\\\src\\\\components\\\\SkillListing.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"font-switzer text-sm text-neutral-light-300/50\",\n                                    children: tech.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kevin\\\\Documents\\\\Code\\\\Portfolio-2\\\\src\\\\components\\\\SkillListing.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kevin\\\\Documents\\\\Code\\\\Portfolio-2\\\\src\\\\components\\\\SkillListing.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, _this)\n                    }, tech.name, false, {\n                        fileName: \"C:\\\\Users\\\\kevin\\\\Documents\\\\Code\\\\Portfolio-2\\\\src\\\\components\\\\SkillListing.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kevin\\\\Documents\\\\Code\\\\Portfolio-2\\\\src\\\\components\\\\SkillListing.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kevin\\\\Documents\\\\Code\\\\Portfolio-2\\\\src\\\\components\\\\SkillListing.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_c = SkillListing;\nvar _c;\n$RefreshReg$(_c, \"SkillListing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ta2lsbExpc3RpbmcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDSztBQVl4QixJQUFNRSxZQUFZLEdBQWdDLGdCQUduRDtRQUZKQyxLQUFLLFNBQUxBLEtBQUssRUFDTEMsTUFBTSxTQUFOQSxNQUFNO0lBRU4scUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFLEVBQUMsQ0FBb0UsT0FBbEVILEtBQUssS0FBSyxxQkFBcUIsR0FBRywwQkFBMEIsR0FBRyxFQUFFLENBQUU7OzBCQUNwRiw4REFBQ0ksSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLGtFQUFrRTswQkFDN0VILEtBQUs7Ozs7O3FCQUNIOzBCQUNMLDhEQUFDSyxJQUFFO2dCQUFDRixTQUFTLEVBQUMsNkNBQTZDOzBCQUN4REYsTUFBTSxDQUFDSyxHQUFHLENBQUMsU0FBQ0MsSUFBSTt5Q0FDZiw4REFBQ0MsSUFBRTt3QkFFREwsU0FBUyxFQUFDLG1OQUFtTjtrQ0FFN04sNEVBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxrQ0FBa0M7OzhDQUMvQyw4REFBQ0wsbURBQUs7b0NBQ0pXLEdBQUcsRUFBRUYsSUFBSSxDQUFDRyxJQUFJO29DQUNkQyxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FBSztvQ0FDakJDLE1BQU0sRUFBRSxFQUFFO29DQUNWQyxHQUFHLEVBQUVOLElBQUksQ0FBQ08sSUFBSTtvQ0FDZFgsU0FBUyxFQUFHLDJDQUF5Qzs7Ozs7eUNBQzlDOzhDQUNULDhEQUFDWSxJQUFFO29DQUFDWixTQUFTLEVBQUMsZ0RBQWdEOzhDQUMzREksSUFBSSxDQUFDTyxJQUFJOzs7Ozt5Q0FDUDs7Ozs7O2lDQUNEO3VCQWREUCxJQUFJLENBQUNPLElBQUk7Ozs7NkJBZVg7aUJBQ04sQ0FBQzs7Ozs7cUJBQ0M7Ozs7OzthQUNELENBQ047Q0FDSCxDQUFDO0FBaENXZixLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NraWxsTGlzdGluZy50c3g/MmZjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmludGVyZmFjZSBTa2lsbCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbG9nbzogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgU2tpbGxMaXN0aW5nUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBza2lsbHM6IFNraWxsW107XG59XG5cbmV4cG9ydCBjb25zdCBTa2lsbExpc3Rpbmc6IFJlYWN0LkZDPFNraWxsTGlzdGluZ1Byb3BzPiA9ICh7XG4gIHRpdGxlLFxuICBza2lsbHMsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3RpdGxlID09PSBcIm1pc2NlbGxhbmVvdXMgdG9vbHNcIiA/IFwiY29sLXNwYW4tMiBtZDpjb2wtc3Bhbi0xXCIgOiBcIlwifWB9PlxuICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbWItNCBmb250LWF6ZXJldCc+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvaDM+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBnYXAtMTAgaXRlbXMtY2VudGVyJz5cbiAgICAgICAge3NraWxscy5tYXAoKHRlY2gpID0+IChcbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGtleT17dGVjaC5uYW1lfVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC02IHJvdW5kZWQtbWQgYmctWyNkNmYxZmYwNV0gb3V0bGluZS1uZXV0cmFsLWxpZ2h0LTMwMC8xMCBob3ZlcjpiZy1uZXV0cmFsLWxpZ2h0LTMwMC8xMCBvdXRsaW5lIG91dGxpbmUtMSBob3ZlcjpvdXRsaW5lLW5ldXRyYWwtbGlnaHQtMzAwIGhvdmVyOm91dGxpbmUtNCB0cmFuc2l0aW9uLWFsbCBncm91cCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTQnPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e3RlY2gubG9nb31cbiAgICAgICAgICAgICAgICB3aWR0aD17dGVjaC53aWR0aH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMyfVxuICAgICAgICAgICAgICAgIGFsdD17dGVjaC5uYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtZml0IGdyb3VwLWhvdmVyOnNjYWxlLTkwIHRyYW5zaXRpb24tYWxsYH1cbiAgICAgICAgICAgICAgPjwvSW1hZ2U+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2ZvbnQtc3dpdHplciB0ZXh0LXNtIHRleHQtbmV1dHJhbC1saWdodC0zMDAvNTAnPlxuICAgICAgICAgICAgICAgIHt0ZWNoLm5hbWV9XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJTa2lsbExpc3RpbmciLCJ0aXRsZSIsInNraWxscyIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwidWwiLCJtYXAiLCJ0ZWNoIiwibGkiLCJzcmMiLCJsb2dvIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJuYW1lIiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SkillListing.tsx\n"));

/***/ })

});