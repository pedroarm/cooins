"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.0_react@19.1.0";
exports.ids = ["vendor-chunks/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.0_react@19.1.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.0_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.0_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   composeRefs: () => (/* binding */ composeRefs),\n/* harmony export */   useComposedRefs: () => (/* binding */ useComposedRefs)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n// packages/react/compose-refs/src/compose-refs.tsx\n\nfunction setRef(ref, value) {\n  if (typeof ref === \"function\") {\n    return ref(value);\n  } else if (ref !== null && ref !== void 0) {\n    ref.current = value;\n  }\n}\nfunction composeRefs(...refs) {\n  return (node) => {\n    let hasCleanup = false;\n    const cleanups = refs.map((ref) => {\n      const cleanup = setRef(ref, node);\n      if (!hasCleanup && typeof cleanup == \"function\") {\n        hasCleanup = true;\n      }\n      return cleanup;\n    });\n    if (hasCleanup) {\n      return () => {\n        for (let i = 0; i < cleanups.length; i++) {\n          const cleanup = cleanups[i];\n          if (typeof cleanup == \"function\") {\n            cleanup();\n          } else {\n            setRef(refs[i], null);\n          }\n        }\n      };\n    }\n  };\n}\nfunction useComposedRefs(...refs) {\n  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs), refs);\n}\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWNvbXBvc2UtcmVmc0AxLjEuMl9AdHlwZXMrcmVhY3RAMTkuMS4wX3JlYWN0QDE5LjEuMC9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWNvbXBvc2UtcmVmcy9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUMrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw4Q0FBaUI7QUFDMUI7QUFJRTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvcGVkcm8vcHJvamVjdHMvY29vaW5zL25vZGVfbW9kdWxlcy8ucG5wbS9AcmFkaXgtdWkrcmVhY3QtY29tcG9zZS1yZWZzQDEuMS4yX0B0eXBlcytyZWFjdEAxOS4xLjBfcmVhY3RAMTkuMS4wL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtY29tcG9zZS1yZWZzL2Rpc3QvaW5kZXgubWpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhY2thZ2VzL3JlYWN0L2NvbXBvc2UtcmVmcy9zcmMvY29tcG9zZS1yZWZzLnRzeFxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5mdW5jdGlvbiBzZXRSZWYocmVmLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHJlZih2YWx1ZSk7XG4gIH0gZWxzZSBpZiAocmVmICE9PSBudWxsICYmIHJlZiAhPT0gdm9pZCAwKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gY29tcG9zZVJlZnMoLi4ucmVmcykge1xuICByZXR1cm4gKG5vZGUpID0+IHtcbiAgICBsZXQgaGFzQ2xlYW51cCA9IGZhbHNlO1xuICAgIGNvbnN0IGNsZWFudXBzID0gcmVmcy5tYXAoKHJlZikgPT4ge1xuICAgICAgY29uc3QgY2xlYW51cCA9IHNldFJlZihyZWYsIG5vZGUpO1xuICAgICAgaWYgKCFoYXNDbGVhbnVwICYmIHR5cGVvZiBjbGVhbnVwID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBoYXNDbGVhbnVwID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbGVhbnVwO1xuICAgIH0pO1xuICAgIGlmIChoYXNDbGVhbnVwKSB7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsZWFudXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY2xlYW51cCA9IGNsZWFudXBzW2ldO1xuICAgICAgICAgIGlmICh0eXBlb2YgY2xlYW51cCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0UmVmKHJlZnNbaV0sIG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiB1c2VDb21wb3NlZFJlZnMoLi4ucmVmcykge1xuICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soY29tcG9zZVJlZnMoLi4ucmVmcyksIHJlZnMpO1xufVxuZXhwb3J0IHtcbiAgY29tcG9zZVJlZnMsXG4gIHVzZUNvbXBvc2VkUmVmc1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.1.0_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\n");

/***/ })

};
;