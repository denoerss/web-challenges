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

/***/ "./components/ISSTracker/index.js":
/*!****************************************!*\
  !*** ./components/ISSTracker/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ISSTracker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index/index.mjs\");\n/* harmony import */ var _Controls_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controls/index */ \"./components/Controls/index.js\");\n/* harmony import */ var _Map_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Map/index */ \"./components/Map/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ISSTracker(param) {\n    let { url_ } = param;\n    _s();\n    const { data: coords, isLoading, error } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(url_);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: error.message\n    }, void 0, false, {\n        fileName: \"/Users/denoers/web-bootcamp/web-challenges/36_react-fetch/36_1_react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n        lineNumber: 9,\n        columnNumber: 21\n    }, this);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: isLoading.valueOf\n    }, void 0, false, {\n        fileName: \"/Users/denoers/web-bootcamp/web-challenges/36_react-fetch/36_1_react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n        lineNumber: 10,\n        columnNumber: 25\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Map_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                longitude: coords.longitude,\n                latitude: coords.latitude\n            }, void 0, false, {\n                fileName: \"/Users/denoers/web-bootcamp/web-challenges/36_react-fetch/36_1_react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Controls_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                longitude: coords.longitude,\n                latitude: coords.latitude\n            }, void 0, false, {\n                fileName: \"/Users/denoers/web-bootcamp/web-challenges/36_react-fetch/36_1_react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denoers/web-bootcamp/web-challenges/36_react-fetch/36_1_react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n// const [coords, setCoords] = useState({\n//   longitude: 0,\n//   latitude: 0,\n// });\n// async function getISSCoords() {\n//   try {\n//     const response = await fetch(URL);\n//     if (response.ok) {\n//       const data = await response.json();\n//       setCoords({ longitude: data.longitude, latitude: data.latitude });\n//     }\n//   } catch (error) {\n//     console.error(error);\n//   }\n// }\n// useEffect(() => {\n//   const timer = setInterval(() => {\n//     getISSCoords();\n//   }, 5000);\n//   return () => {\n//     clearInterval(timer);\n//   };\n// }, []);\n}\n_s(ISSTracker, \"BUQXP+wzrFBdsH6ok1ySSBxECwA=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = ISSTracker;\nvar _c;\n$RefreshReg$(_c, \"ISSTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lTU1RyYWNrZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFFZ0I7QUFDVjtBQUVoQixTQUFTRyxXQUFXLEtBQVE7UUFBUixFQUFFQyxJQUFJLEVBQUUsR0FBUjs7SUFDakMsTUFBTSxFQUFFQyxNQUFNQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFLEdBQUdSLCtDQUFNQSxDQUFDSTtJQUVsRCxJQUFJSSxPQUFPLHFCQUFPLDhEQUFDQztrQkFBSUQsTUFBTUU7Ozs7OztJQUM3QixJQUFJSCxXQUFXLHFCQUFPLDhEQUFDRTtrQkFBSUYsVUFBVUk7Ozs7OztJQUVyQyxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDVixrREFBR0E7Z0JBQUNXLFdBQVdQLE9BQU9PO2dCQUFXQyxVQUFVUixPQUFPUTs7Ozs7OzBCQUNuRCw4REFBQ2IsdURBQVFBO2dCQUNQWSxXQUFXUCxPQUFPTztnQkFDbEJDLFVBQVVSLE9BQU9ROzs7Ozs7Ozs7Ozs7QUFNdkIseUNBQXlDO0FBQ3pDLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsTUFBTTtBQUVOLGtDQUFrQztBQUNsQyxVQUFVO0FBQ1YseUNBQXlDO0FBQ3pDLHlCQUF5QjtBQUN6Qiw0Q0FBNEM7QUFDNUMsMkVBQTJFO0FBQzNFLFFBQVE7QUFDUixzQkFBc0I7QUFDdEIsNEJBQTRCO0FBQzVCLE1BQU07QUFDTixJQUFJO0FBRUosb0JBQW9CO0FBQ3BCLHNDQUFzQztBQUN0QyxzQkFBc0I7QUFDdEIsY0FBYztBQUVkLG1CQUFtQjtBQUNuQiw0QkFBNEI7QUFDNUIsT0FBTztBQUNQLFVBQVU7QUFDWjtHQTNDd0JYOztRQUNxQkgsMkNBQU1BOzs7S0FEM0JHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSVNTVHJhY2tlci9pbmRleC5qcz82N2EzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5pbXBvcnQgQ29udHJvbHMgZnJvbSBcIi4uL0NvbnRyb2xzL2luZGV4XCI7XG5pbXBvcnQgTWFwIGZyb20gXCIuLi9NYXAvaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSVNTVHJhY2tlcih7IHVybF8gfSkge1xuICBjb25zdCB7IGRhdGE6IGNvb3JkcywgaXNMb2FkaW5nLCBlcnJvciB9ID0gdXNlU1dSKHVybF8pO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxoMj57ZXJyb3IubWVzc2FnZX08L2gyPjtcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxoMj57aXNMb2FkaW5nLnZhbHVlT2Z9PC9oMj47XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxNYXAgbG9uZ2l0dWRlPXtjb29yZHMubG9uZ2l0dWRlfSBsYXRpdHVkZT17Y29vcmRzLmxhdGl0dWRlfSAvPlxuICAgICAgPENvbnRyb2xzXG4gICAgICAgIGxvbmdpdHVkZT17Y29vcmRzLmxvbmdpdHVkZX1cbiAgICAgICAgbGF0aXR1ZGU9e2Nvb3Jkcy5sYXRpdHVkZX1cbiAgICAgICAgLy8gb25SZWZyZXNoPXtnZXRJU1NDb29yZHN9XG4gICAgICAvPlxuICAgIDwvbWFpbj5cbiAgKTtcblxuICAvLyBjb25zdCBbY29vcmRzLCBzZXRDb29yZHNdID0gdXNlU3RhdGUoe1xuICAvLyAgIGxvbmdpdHVkZTogMCxcbiAgLy8gICBsYXRpdHVkZTogMCxcbiAgLy8gfSk7XG5cbiAgLy8gYXN5bmMgZnVuY3Rpb24gZ2V0SVNTQ29vcmRzKCkge1xuICAvLyAgIHRyeSB7XG4gIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCk7XG4gIC8vICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgLy8gICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgLy8gICAgICAgc2V0Q29vcmRzKHsgbG9uZ2l0dWRlOiBkYXRhLmxvbmdpdHVkZSwgbGF0aXR1ZGU6IGRhdGEubGF0aXR1ZGUgfSk7XG4gIC8vICAgICB9XG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gIC8vICAgICBnZXRJU1NDb29yZHMoKTtcbiAgLy8gICB9LCA1MDAwKTtcblxuICAvLyAgIHJldHVybiAoKSA9PiB7XG4gIC8vICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgLy8gICB9O1xuICAvLyB9LCBbXSk7XG59XG4iXSwibmFtZXMiOlsidXNlU1dSIiwiQ29udHJvbHMiLCJNYXAiLCJJU1NUcmFja2VyIiwidXJsXyIsImRhdGEiLCJjb29yZHMiLCJpc0xvYWRpbmciLCJlcnJvciIsImgyIiwibWVzc2FnZSIsInZhbHVlT2YiLCJtYWluIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ISSTracker/index.js\n"));

/***/ })

});