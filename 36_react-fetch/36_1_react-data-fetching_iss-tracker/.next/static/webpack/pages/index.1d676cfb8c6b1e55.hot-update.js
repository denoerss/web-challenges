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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ISSTracker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Controls_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/index */ \"./components/Controls/index.js\");\n/* harmony import */ var _Map_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Map/index */ \"./components/Map/index.js\");\n\n\n\n\n\nconst URL = \"https://api.wheretheiss.at/v1/satellites/25544\";\nfunction ISSTracker() {\n    // const [coords, setCoords] = useState({\n    //   longitude: 0,\n    //   latitude: 0,\n    // });\n    // async function getISSCoords() {\n    //   try {\n    //     const response = await fetch(URL);\n    //     if (response.ok) {\n    //       const data = await response.json();\n    //       setCoords({ longitude: data.longitude, latitude: data.latitude });\n    //     }\n    //   } catch (error) {\n    //     console.error(error);\n    //   }\n    // }\n    // useEffect(() => {\n    //   const timer = setInterval(() => {\n    //     getISSCoords();\n    //   }, 5000);\n    //   return () => {\n    //     clearInterval(timer);\n    //   };\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Map_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                longitude: coords.longitude,\n                latitude: coords.latitude\n            }, void 0, false, {\n                fileName: \"/Users/denoers/web-bootcamp/web-challenges/36_react-fetch/36_1_react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Controls_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                longitude: coords.longitude,\n                latitude: coords.latitude\n            }, void 0, false, {\n                fileName: \"/Users/denoers/web-bootcamp/web-challenges/36_react-fetch/36_1_react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denoers/web-bootcamp/web-challenges/36_react-fetch/36_1_react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_c = ISSTracker;\nvar _c;\n$RefreshReg$(_c, \"ISSTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lTU1RyYWNrZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFDbkI7QUFDZ0I7QUFDVjtBQUUvQixNQUFNSyxNQUFNO0FBRUcsU0FBU0M7SUFDdEIseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsTUFBTTtJQUVOLGtDQUFrQztJQUNsQyxVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLHlCQUF5QjtJQUN6Qiw0Q0FBNEM7SUFDNUMsMkVBQTJFO0lBQzNFLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLE1BQU07SUFDTixJQUFJO0lBRUosb0JBQW9CO0lBQ3BCLHNDQUFzQztJQUN0QyxzQkFBc0I7SUFDdEIsY0FBYztJQUVkLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsT0FBTztJQUNQLFVBQVU7SUFFVixxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDSCxrREFBR0E7Z0JBQUNJLFdBQVdDLE9BQU9EO2dCQUFXRSxVQUFVRCxPQUFPQzs7Ozs7OzBCQUNuRCw4REFBQ1AsdURBQVFBO2dCQUNQSyxXQUFXQyxPQUFPRDtnQkFDbEJFLFVBQVVELE9BQU9DOzs7Ozs7Ozs7Ozs7QUFLekI7S0F0Q3dCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0lTU1RyYWNrZXIvaW5kZXguanM/NjdhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBDb250cm9scyBmcm9tIFwiLi4vQ29udHJvbHMvaW5kZXhcIjtcbmltcG9ydCBNYXAgZnJvbSBcIi4uL01hcC9pbmRleFwiO1xuXG5jb25zdCBVUkwgPSBcImh0dHBzOi8vYXBpLndoZXJldGhlaXNzLmF0L3YxL3NhdGVsbGl0ZXMvMjU1NDRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSVNTVHJhY2tlcigpIHtcbiAgLy8gY29uc3QgW2Nvb3Jkcywgc2V0Q29vcmRzXSA9IHVzZVN0YXRlKHtcbiAgLy8gICBsb25naXR1ZGU6IDAsXG4gIC8vICAgbGF0aXR1ZGU6IDAsXG4gIC8vIH0pO1xuXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIGdldElTU0Nvb3JkcygpIHtcbiAgLy8gICB0cnkge1xuICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xuICAvLyAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gIC8vICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIC8vICAgICAgIHNldENvb3Jkcyh7IGxvbmdpdHVkZTogZGF0YS5sb25naXR1ZGUsIGxhdGl0dWRlOiBkYXRhLmxhdGl0dWRlIH0pO1xuICAvLyAgICAgfVxuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAvLyAgICAgZ2V0SVNTQ29vcmRzKCk7XG4gIC8vICAgfSwgNTAwMCk7XG5cbiAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIC8vICAgfTtcbiAgLy8gfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8TWFwIGxvbmdpdHVkZT17Y29vcmRzLmxvbmdpdHVkZX0gbGF0aXR1ZGU9e2Nvb3Jkcy5sYXRpdHVkZX0gLz5cbiAgICAgIDxDb250cm9sc1xuICAgICAgICBsb25naXR1ZGU9e2Nvb3Jkcy5sb25naXR1ZGV9XG4gICAgICAgIGxhdGl0dWRlPXtjb29yZHMubGF0aXR1ZGV9XG4gICAgICAgIC8vIG9uUmVmcmVzaD17Z2V0SVNTQ29vcmRzfVxuICAgICAgLz5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTV1IiLCJDb250cm9scyIsIk1hcCIsIlVSTCIsIklTU1RyYWNrZXIiLCJtYWluIiwibG9uZ2l0dWRlIiwiY29vcmRzIiwibGF0aXR1ZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ISSTracker/index.js\n"));

/***/ })

});