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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ISSTracker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index/index.mjs\");\n/* harmony import */ var _Controls_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controls/index */ \"./components/Controls/index.js\");\n/* harmony import */ var _Map_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Map/index */ \"./components/Map/index.js\");\n// import { useEffect, useState } from \"react\";\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ISSTracker(URL) {\n    _s();\n    const { data: coords, isLoading, error } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(URL);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: error.message\n    }, void 0, false, {\n        fileName: \"/Users/denoers/web-bootcamp/web-challenges/36_react-fetch/36_1_react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n        lineNumber: 10,\n        columnNumber: 21\n    }, this);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"is loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/denoers/web-bootcamp/web-challenges/36_react-fetch/36_1_react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n        lineNumber: 11,\n        columnNumber: 25\n    }, this);\n    var _coords_longitude;\n    const longitude = (_coords_longitude = coords === null || coords === void 0 ? void 0 : coords.longitude) !== null && _coords_longitude !== void 0 ? _coords_longitude : 0; // Default to 0 if coords is undefined\n    var _coords_latitude;\n    const latitude = (_coords_latitude = coords === null || coords === void 0 ? void 0 : coords.latitude) !== null && _coords_latitude !== void 0 ? _coords_latitude : 0; // Default to 0 if coords is undefined\n    // const [coords, setCoords] = useState({\n    //   longitude: 0,\n    //   latitude: 0,\n    // });\n    // async function getISSCoords() {\n    //   try {\n    //     const response = await fetch(URL);\n    //     if (response.ok) {\n    //       const data = await response.json();\n    //       setCoords({ longitude: data.longitude, latitude: data.latitude });\n    //     }\n    //   } catch (error) {\n    //     console.error(error);\n    //   }\n    // }\n    // useEffect(() => {\n    //   const timer = setInterval(() => {\n    //     getISSCoords();\n    //   }, 5000);\n    //   return () => {\n    //     clearInterval(timer);\n    //   };\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Map_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                longitude: longitude,\n                latitude: latitude\n            }, void 0, false, {\n                fileName: \"/Users/denoers/web-bootcamp/web-challenges/36_react-fetch/36_1_react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Controls_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                longitude: longitude,\n                latitude: latitude\n            }, void 0, false, {\n                fileName: \"/Users/denoers/web-bootcamp/web-challenges/36_react-fetch/36_1_react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denoers/web-bootcamp/web-challenges/36_react-fetch/36_1_react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(ISSTracker, \"BUQXP+wzrFBdsH6ok1ySSBxECwA=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = ISSTracker;\nvar _c;\n$RefreshReg$(_c, \"ISSTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lTU1RyYWNrZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0NBQStDOzs7QUFDdEI7QUFFZ0I7QUFDVjtBQUVoQixTQUFTRyxXQUFXQyxHQUFHOztJQUNwQyxNQUFNLEVBQUVDLE1BQU1DLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUUsR0FBR1IsK0NBQU1BLENBQUNJO0lBRWxELElBQUlJLE9BQU8scUJBQU8sOERBQUNDO2tCQUFJRCxNQUFNRTs7Ozs7O0lBQzdCLElBQUlILFdBQVcscUJBQU8sOERBQUNFO2tCQUFHOzs7Ozs7UUFFUkg7SUFBbEIsTUFBTUssWUFBWUwsQ0FBQUEsb0JBQUFBLG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUUssdUJBQVJMLCtCQUFBQSxvQkFBcUIsR0FBRyxzQ0FBc0M7UUFDL0RBO0lBQWpCLE1BQU1NLFdBQVdOLENBQUFBLG1CQUFBQSxtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFNLHNCQUFSTiw4QkFBQUEsbUJBQW9CLEdBQUcsc0NBQXNDO0lBRTlFLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLE1BQU07SUFFTixrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLHlDQUF5QztJQUN6Qyx5QkFBeUI7SUFDekIsNENBQTRDO0lBQzVDLDJFQUEyRTtJQUMzRSxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixNQUFNO0lBQ04sSUFBSTtJQUVKLG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLGNBQWM7SUFFZCxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLE9BQU87SUFDUCxVQUFVO0lBRVYscUJBQ0UsOERBQUNPOzswQkFDQyw4REFBQ1gsa0RBQUdBO2dCQUFDUyxXQUFXQTtnQkFBV0MsVUFBVUE7Ozs7OzswQkFDckMsOERBQUNYLHVEQUFRQTtnQkFDUFUsV0FBV0E7Z0JBQ1hDLFVBQVVBOzs7Ozs7Ozs7Ozs7QUFLbEI7R0E5Q3dCVDs7UUFDcUJILDJDQUFNQTs7O0tBRDNCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0lTU1RyYWNrZXIvaW5kZXguanM/NjdhMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuaW1wb3J0IENvbnRyb2xzIGZyb20gXCIuLi9Db250cm9scy9pbmRleFwiO1xuaW1wb3J0IE1hcCBmcm9tIFwiLi4vTWFwL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElTU1RyYWNrZXIoVVJMKSB7XG4gIGNvbnN0IHsgZGF0YTogY29vcmRzLCBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VTV1IoVVJMKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8aDI+e2Vycm9yLm1lc3NhZ2V9PC9oMj47XG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8aDI+aXMgbG9hZGluZy4uLjwvaDI+O1xuXG4gIGNvbnN0IGxvbmdpdHVkZSA9IGNvb3Jkcz8ubG9uZ2l0dWRlID8/IDA7IC8vIERlZmF1bHQgdG8gMCBpZiBjb29yZHMgaXMgdW5kZWZpbmVkXG4gIGNvbnN0IGxhdGl0dWRlID0gY29vcmRzPy5sYXRpdHVkZSA/PyAwOyAvLyBEZWZhdWx0IHRvIDAgaWYgY29vcmRzIGlzIHVuZGVmaW5lZFxuXG4gIC8vIGNvbnN0IFtjb29yZHMsIHNldENvb3Jkc10gPSB1c2VTdGF0ZSh7XG4gIC8vICAgbG9uZ2l0dWRlOiAwLFxuICAvLyAgIGxhdGl0dWRlOiAwLFxuICAvLyB9KTtcblxuICAvLyBhc3luYyBmdW5jdGlvbiBnZXRJU1NDb29yZHMoKSB7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMKTtcbiAgLy8gICAgIGlmIChyZXNwb25zZS5vaykge1xuICAvLyAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAvLyAgICAgICBzZXRDb29yZHMoeyBsb25naXR1ZGU6IGRhdGEubG9uZ2l0dWRlLCBsYXRpdHVkZTogZGF0YS5sYXRpdHVkZSB9KTtcbiAgLy8gICAgIH1cbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgLy8gICAgIGdldElTU0Nvb3JkcygpO1xuICAvLyAgIH0sIDUwMDApO1xuXG4gIC8vICAgcmV0dXJuICgpID0+IHtcbiAgLy8gICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAvLyAgIH07XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPE1hcCBsb25naXR1ZGU9e2xvbmdpdHVkZX0gbGF0aXR1ZGU9e2xhdGl0dWRlfSAvPlxuICAgICAgPENvbnRyb2xzXG4gICAgICAgIGxvbmdpdHVkZT17bG9uZ2l0dWRlfVxuICAgICAgICBsYXRpdHVkZT17bGF0aXR1ZGV9XG4gICAgICAgIC8vIG9uUmVmcmVzaD17Z2V0SVNTQ29vcmRzfVxuICAgICAgLz5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU1dSIiwiQ29udHJvbHMiLCJNYXAiLCJJU1NUcmFja2VyIiwiVVJMIiwiZGF0YSIsImNvb3JkcyIsImlzTG9hZGluZyIsImVycm9yIiwiaDIiLCJtZXNzYWdlIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ISSTracker/index.js\n"));

/***/ })

});