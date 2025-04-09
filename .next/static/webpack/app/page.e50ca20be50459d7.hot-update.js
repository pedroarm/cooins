"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CurrencyConverter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ArrowLeftRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/.pnpm/lucide-react@0.487.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-left-right.js\");\n/* harmony import */ var _src_components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _src_components_ui_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/components/ui/select */ \"(app-pages-browser)/./src/components/ui/select.tsx\");\n/* harmony import */ var _utils_currencies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/currencies */ \"(app-pages-browser)/./src/utils/currencies.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CurrencyConverter() {\n    _s();\n    const [exchangeRates, setExchangeRates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"100\");\n    const [fromCurrency, setFromCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"USD\");\n    const [toCurrency, setToCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"BRL\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchRate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)({\n        \"CurrencyConverter.useCallback[fetchRate]\": async ()=>{\n            try {\n                setError(null);\n                const response = await fetch(\"https://economia.awesomeapi.com.br/json/last/\".concat(fromCurrency, \"-\").concat(toCurrency));\n                if (!response.ok) throw new Error(\"Failed to fetch exchange rate\");\n                const data = await response.json();\n                setExchangeRates(data[\"\".concat(fromCurrency).concat(toCurrency)]);\n            } catch (err) {\n                setError(\"Unable to fetch exchange rate. Please try again later.\");\n                setExchangeRates(null);\n            }\n        }\n    }[\"CurrencyConverter.useCallback[fetchRate]\"], [\n        fromCurrency,\n        toCurrency\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CurrencyConverter.useEffect\": ()=>{\n            fetchRate();\n        }\n    }[\"CurrencyConverter.useEffect\"], [\n        fetchRate\n    ]);\n    const handleAmountChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)({\n        \"CurrencyConverter.useCallback[handleAmountChange]\": (e)=>{\n            const value = e.target.value.replace(/[^0-9.]/g, \"\");\n            setAmount(value);\n        }\n    }[\"CurrencyConverter.useCallback[handleAmountChange]\"], []);\n    const convertedAmount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)({\n        \"CurrencyConverter.useMemo[convertedAmount]\": ()=>{\n            if (exchangeRates && amount) {\n                const rate = parseFloat(exchangeRates.bid);\n                return parseFloat(amount) * rate;\n            }\n            return null;\n        }\n    }[\"CurrencyConverter.useMemo[convertedAmount]\"], [\n        exchangeRates,\n        amount\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-center p-4 bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-md mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AmountInput, {\n                        amount: amount,\n                        onAmountChange: handleAmountChange\n                    }, void 0, false, {\n                        fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full items-end gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CurrencySelector, {\n                                label: \"From\",\n                                value: fromCurrency,\n                                onChange: setFromCurrency,\n                                currencies: _utils_currencies__WEBPACK_IMPORTED_MODULE_4__.currencies\n                            }, void 0, false, {\n                                fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex py-2.5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    className: \"text-muted-foreground size-4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CurrencySelector, {\n                                label: \"To\",\n                                value: toCurrency,\n                                onChange: setToCurrency,\n                                currencies: _utils_currencies__WEBPACK_IMPORTED_MODULE_4__.currencies\n                            }, void 0, false, {\n                                fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConvertedAmount, {\n                        convertedAmount: convertedAmount,\n                        fromCurrency: fromCurrency,\n                        toCurrency: toCurrency,\n                        exchangeRates: exchangeRates,\n                        error: error\n                    }, void 0, false, {\n                        fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(CurrencyConverter, \"oj32GeE3QCt8/s5LcqA7Isi3SdQ=\");\n_c = CurrencyConverter;\nfunction CurrencySelector(param) {\n    let { label, value, onChange, currencies } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-1 flex flex-col w-full gap-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"text-xs uppercase tracking-wider text-muted-foreground font-mono\",\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ui_select__WEBPACK_IMPORTED_MODULE_3__.Select, {\n                value: value,\n                onValueChange: onChange,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ui_select__WEBPACK_IMPORTED_MODULE_3__.SelectTrigger, {\n                        className: \"w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ui_select__WEBPACK_IMPORTED_MODULE_3__.SelectValue, {\n                            placeholder: \"Select currency\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ui_select__WEBPACK_IMPORTED_MODULE_3__.SelectContent, {\n                        children: currencies.map((currency)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ui_select__WEBPACK_IMPORTED_MODULE_3__.SelectItem, {\n                                value: currency.code,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: currency.flag,\n                                        className: \"size-5 rounded-full object-cover\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                                        lineNumber: 138,\n                                        columnNumber: 15\n                                    }, this),\n                                    \" \",\n                                    currency.code\n                                ]\n                            }, currency.code, true, {\n                                fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, this);\n}\n_c1 = CurrencySelector;\nfunction AmountInput(param) {\n    let { amount, onAmountChange } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-full gap-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"amount\",\n                className: \"text-xs uppercase tracking-wider text-muted-foreground font-mono\",\n                children: \"Amount\"\n            }, void 0, false, {\n                fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                id: \"amount\",\n                type: \"text\",\n                value: amount,\n                onChange: onAmountChange,\n                \"aria-label\": \"Enter amount to convert\"\n            }, void 0, false, {\n                fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n        lineNumber: 154,\n        columnNumber: 5\n    }, this);\n}\n_c2 = AmountInput;\nfunction ConvertedAmount(param) {\n    let { convertedAmount, fromCurrency, toCurrency, exchangeRates, error } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-4 border-t border-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-xs uppercase tracking-wider text-muted-foreground font-mono\",\n                    children: \"Converted Amount\"\n                }, void 0, false, {\n                    fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                    lineNumber: 181,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                lineNumber: 180,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 text-3xl font-light\",\n                children: convertedAmount !== null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        convertedAmount.toFixed(2),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-muted-foreground\",\n                            children: toCurrency\n                        }, void 0, false, {\n                            fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                            lineNumber: 186,\n                            columnNumber: 42\n                        }, this)\n                    ]\n                }, void 0, true) : \"—\"\n            }, void 0, false, {\n                fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                lineNumber: 183,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-1 text-xs text-muted-foreground font-mono\",\n                children: exchangeRates ? \"1 \".concat(fromCurrency, \" = \").concat(exchangeRates.ask, \" \").concat(toCurrency) : \"—\"\n            }, void 0, false, {\n                fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 text-xs text-red-500\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n                lineNumber: 195,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pedro/projects/cooins/src/app/page.tsx\",\n        lineNumber: 179,\n        columnNumber: 5\n    }, this);\n}\n_c3 = ConvertedAmount;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"CurrencyConverter\");\n$RefreshReg$(_c1, \"CurrencySelector\");\n$RefreshReg$(_c2, \"AmountInput\");\n$RefreshReg$(_c3, \"ConvertedAmount\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Siw4REFBQ3VCO2dCQUFJRCxXQUFVOzBCQUNaNUIsZ0JBQWdCLEtBQXVCQSxPQUFsQkksY0FBYSxPQUEwQkUsT0FBckJOLGNBQWNrRCxHQUFHLEVBQUMsS0FBYyxPQUFYNUMsY0FBZTs7Ozs7O1lBRTdFRSx1QkFBUyw4REFBQ3FCO2dCQUFJRCxXQUFVOzBCQUE2QnBCOzs7Ozs7Ozs7Ozs7QUFHNUQ7TUFyQlMyQiIsInNvdXJjZXMiOlsiL1VzZXJzL3BlZHJvL3Byb2plY3RzL2Nvb2lucy9zcmMvYXBwL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEFycm93TGVmdFJpZ2h0IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL3NyYy9jb21wb25lbnRzL3VpL2lucHV0XCJcbmltcG9ydCB7IFNlbGVjdCwgU2VsZWN0Q29udGVudCwgU2VsZWN0SXRlbSwgU2VsZWN0VHJpZ2dlciwgU2VsZWN0VmFsdWUgfSBmcm9tIFwiQC9zcmMvY29tcG9uZW50cy91aS9zZWxlY3RcIlxuaW1wb3J0IHsgY3VycmVuY2llcyB9IGZyb20gXCIuLi91dGlscy9jdXJyZW5jaWVzXCJcblxudHlwZSBFeGNoYW5nZVJhdGUgPSB7XG4gIGNvZGU6IHN0cmluZ1xuICBjb2RlaW46IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgaGlnaDogc3RyaW5nXG4gIGxvdzogc3RyaW5nXG4gIHZhckJpZDogc3RyaW5nXG4gIHBjdENoYW5nZTogc3RyaW5nXG4gIGJpZDogc3RyaW5nXG4gIGFzazogc3RyaW5nXG4gIHRpbWVzdGFtcDogc3RyaW5nXG4gIGNyZWF0ZV9kYXRlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VycmVuY3lDb252ZXJ0ZXIoKSB7XG4gIGNvbnN0IFtleGNoYW5nZVJhdGVzLCBzZXRFeGNoYW5nZVJhdGVzXSA9IHVzZVN0YXRlPEV4Y2hhbmdlUmF0ZSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiMTAwXCIpXG4gIGNvbnN0IFtmcm9tQ3VycmVuY3ksIHNldEZyb21DdXJyZW5jeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiVVNEXCIpXG4gIGNvbnN0IFt0b0N1cnJlbmN5LCBzZXRUb0N1cnJlbmN5XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJCUkxcIilcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIGNvbnN0IGZldGNoUmF0ZSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0RXJyb3IobnVsbClcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZWNvbm9taWEuYXdlc29tZWFwaS5jb20uYnIvanNvbi9sYXN0LyR7ZnJvbUN1cnJlbmN5fS0ke3RvQ3VycmVuY3l9YClcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBleGNoYW5nZSByYXRlXCIpXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICBzZXRFeGNoYW5nZVJhdGVzKGRhdGFbYCR7ZnJvbUN1cnJlbmN5fSR7dG9DdXJyZW5jeX1gXSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKFwiVW5hYmxlIHRvIGZldGNoIGV4Y2hhbmdlIHJhdGUuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpXG4gICAgICBzZXRFeGNoYW5nZVJhdGVzKG51bGwpXG4gICAgfVxuICB9LCBbZnJvbUN1cnJlbmN5LCB0b0N1cnJlbmN5XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUmF0ZSgpXG4gIH0sIFtmZXRjaFJhdGVdKVxuXG4gIGNvbnN0IGhhbmRsZUFtb3VudENoYW5nZSA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvW14wLTkuXS9nLCBcIlwiKVxuICAgIHNldEFtb3VudCh2YWx1ZSlcbiAgfSwgW10pXG5cbiAgY29uc3QgY29udmVydGVkQW1vdW50ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGV4Y2hhbmdlUmF0ZXMgJiYgYW1vdW50KSB7XG4gICAgICBjb25zdCByYXRlID0gcGFyc2VGbG9hdChleGNoYW5nZVJhdGVzLmJpZClcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KGFtb3VudCkgKiByYXRlXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH0sIFtleGNoYW5nZVJhdGVzLCBhbW91bnRdKVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCBiZy13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWQgbXgtYXV0b1wiPlxuICAgICAgICB7LyogPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtbGlnaHQgdHJhY2tpbmctdGlnaHQgbWItOCB0ZXh0LWNlbnRlclwiPkNVUlJFTkNZPC9oMT4gKi99XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC02XCI+XG4gICAgICAgICAgPEFtb3VudElucHV0IGFtb3VudD17YW1vdW50fSBvbkFtb3VudENoYW5nZT17aGFuZGxlQW1vdW50Q2hhbmdlfSAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1lbmQgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxDdXJyZW5jeVNlbGVjdG9yXG4gICAgICAgICAgICAgIGxhYmVsPVwiRnJvbVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmcm9tQ3VycmVuY3l9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRGcm9tQ3VycmVuY3l9XG4gICAgICAgICAgICAgIGN1cnJlbmNpZXM9e2N1cnJlbmNpZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB5LTIuNVwiPlxuICAgICAgICAgICAgICA8QXJyb3dMZWZ0UmlnaHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHNpemUtNFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDdXJyZW5jeVNlbGVjdG9yXG4gICAgICAgICAgICAgIGxhYmVsPVwiVG9cIlxuICAgICAgICAgICAgICB2YWx1ZT17dG9DdXJyZW5jeX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFRvQ3VycmVuY3l9XG4gICAgICAgICAgICAgIGN1cnJlbmNpZXM9e2N1cnJlbmNpZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPENvbnZlcnRlZEFtb3VudFxuICAgICAgICAgICAgY29udmVydGVkQW1vdW50PXtjb252ZXJ0ZWRBbW91bnR9XG4gICAgICAgICAgICBmcm9tQ3VycmVuY3k9e2Zyb21DdXJyZW5jeX1cbiAgICAgICAgICAgIHRvQ3VycmVuY3k9e3RvQ3VycmVuY3l9XG4gICAgICAgICAgICBleGNoYW5nZVJhdGVzPXtleGNoYW5nZVJhdGVzfVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm10LTggdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHMtc2xvdCBiZy1ncmF5LTEwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgcC00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5Zb3VyIEFkIEhlcmU8L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL2pzL2Fkc2J5Z29vZ2xlLmpzXCJcbiAgICAgICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgICAgIDxpbnNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRzYnlnb29nbGVcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX1cbiAgICAgICAgICAgICAgZGF0YS1hZC1jbGllbnQ9XCJjYS1wdWItWFhYWFhYWFhYWFhYWFhYXCJcbiAgICAgICAgICAgICAgZGF0YS1hZC1zbG90PVwiWFhYWFhYWFhYWFwiXG4gICAgICAgICAgICAgIGRhdGEtYWQtZm9ybWF0PVwiYXV0b1wiXG4gICAgICAgICAgICAgIGRhdGEtZnVsbC13aWR0aC1yZXNwb25zaXZlPVwidHJ1ZVwiXG4gICAgICAgICAgICA+PC9pbnM+XG4gICAgICAgICAgICA8c2NyaXB0PihhZHNieWdvb2dsZSA9IHdpbmRvdy5hZHNieWdvb2dsZSB8fCBbXSkucHVzaCh7fSk7PC9zY3JpcHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG50eXBlIEN1cnJlbmN5U2VsZWN0b3JQcm9wcyA9IHtcbiAgbGFiZWw6IHN0cmluZ1xuICB2YWx1ZTogc3RyaW5nXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBjdXJyZW5jaWVzOiB7IGNvZGU6IHN0cmluZzsgbmFtZTogc3RyaW5nLCBmbGFnOiBzdHJpbmcgfVtdXG59XG5cbmZ1bmN0aW9uIEN1cnJlbmN5U2VsZWN0b3IoeyBsYWJlbCwgdmFsdWUsIG9uQ2hhbmdlLCBjdXJyZW5jaWVzIH06IEN1cnJlbmN5U2VsZWN0b3JQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wgdy1mdWxsIGdhcC0yXCI+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvbnQtbW9ub1wiPntsYWJlbH08L2xhYmVsPlxuICAgICAgPFNlbGVjdCB2YWx1ZT17dmFsdWV9IG9uVmFsdWVDaGFuZ2U9e29uQ2hhbmdlfT5cbiAgICAgICAgPFNlbGVjdFRyaWdnZXIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPFNlbGVjdFZhbHVlIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGN1cnJlbmN5XCIgLz5cbiAgICAgICAgPC9TZWxlY3RUcmlnZ2VyPlxuICAgICAgICA8U2VsZWN0Q29udGVudD5cbiAgICAgICAgICB7Y3VycmVuY2llcy5tYXAoKGN1cnJlbmN5KSA9PiAoXG4gICAgICAgICAgICA8U2VsZWN0SXRlbSBrZXk9e2N1cnJlbmN5LmNvZGV9IHZhbHVlPXtjdXJyZW5jeS5jb2RlfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2N1cnJlbmN5LmZsYWd9IGNsYXNzTmFtZT1cInNpemUtNSByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz4ge2N1cnJlbmN5LmNvZGV9XG4gICAgICAgICAgICA8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU2VsZWN0Q29udGVudD5cbiAgICAgIDwvU2VsZWN0PlxuICAgIDwvZGl2PlxuICApXG59XG5cbnR5cGUgQW1vdW50SW5wdXRQcm9wcyA9IHtcbiAgYW1vdW50OiBzdHJpbmdcbiAgb25BbW91bnRDaGFuZ2U6IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZFxufVxuXG5mdW5jdGlvbiBBbW91bnRJbnB1dCh7IGFtb3VudCwgb25BbW91bnRDaGFuZ2UgfTogQW1vdW50SW5wdXRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgZ2FwLTJcIj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW1vdW50XCIgY2xhc3NOYW1lPVwidGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvbnQtbW9ub1wiPlxuICAgICAgICBBbW91bnRcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8SW5wdXRcbiAgICAgICAgaWQ9XCJhbW91bnRcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXthbW91bnR9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkFtb3VudENoYW5nZX1cbiAgICAgICAgYXJpYS1sYWJlbD1cIkVudGVyIGFtb3VudCB0byBjb252ZXJ0XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxudHlwZSBDb252ZXJ0ZWRBbW91bnRQcm9wcyA9IHtcbiAgY29udmVydGVkQW1vdW50OiBudW1iZXIgfCBudWxsXG4gIGZyb21DdXJyZW5jeTogc3RyaW5nXG4gIHRvQ3VycmVuY3k6IHN0cmluZ1xuICBleGNoYW5nZVJhdGVzOiBFeGNoYW5nZVJhdGUgfCBudWxsXG4gIGVycm9yOiBzdHJpbmcgfCBudWxsXG59XG5cbmZ1bmN0aW9uIENvbnZlcnRlZEFtb3VudCh7IGNvbnZlcnRlZEFtb3VudCwgZnJvbUN1cnJlbmN5LCB0b0N1cnJlbmN5LCBleGNoYW5nZVJhdGVzLCBlcnJvciB9OiBDb252ZXJ0ZWRBbW91bnRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBib3JkZXItdCBib3JkZXItZ3JheS0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBmb250LW1vbm9cIj5Db252ZXJ0ZWQgQW1vdW50PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgdGV4dC0zeGwgZm9udC1saWdodFwiPlxuICAgICAgICB7Y29udmVydGVkQW1vdW50ICE9PSBudWxsID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7Y29udmVydGVkQW1vdW50LnRvRml4ZWQoMil9IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPnt0b0N1cnJlbmN5fTwvc3Bhbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBcIuKAlFwiXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBmb250LW1vbm9cIj5cbiAgICAgICAge2V4Y2hhbmdlUmF0ZXMgPyBgMSAke2Zyb21DdXJyZW5jeX0gPSAke2V4Y2hhbmdlUmF0ZXMuYXNrfSAke3RvQ3VycmVuY3l9YCA6IFwi4oCUXCJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgdGV4dC14cyB0ZXh0LXJlZC01MDBcIj57ZXJyb3J9PC9kaXY+fVxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwiQXJyb3dMZWZ0UmlnaHQiLCJJbnB1dCIsIlNlbGVjdCIsIlNlbGVjdENvbnRlbnQiLCJTZWxlY3RJdGVtIiwiU2VsZWN0VHJpZ2dlciIsIlNlbGVjdFZhbHVlIiwiY3VycmVuY2llcyIsIkN1cnJlbmN5Q29udmVydGVyIiwiZXhjaGFuZ2VSYXRlcyIsInNldEV4Y2hhbmdlUmF0ZXMiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJmcm9tQ3VycmVuY3kiLCJzZXRGcm9tQ3VycmVuY3kiLCJ0b0N1cnJlbmN5Iiwic2V0VG9DdXJyZW5jeSIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaFJhdGUiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiZXJyIiwiaGFuZGxlQW1vdW50Q2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwicmVwbGFjZSIsImNvbnZlcnRlZEFtb3VudCIsInJhdGUiLCJwYXJzZUZsb2F0IiwiYmlkIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsIkFtb3VudElucHV0Iiwib25BbW91bnRDaGFuZ2UiLCJDdXJyZW5jeVNlbGVjdG9yIiwibGFiZWwiLCJvbkNoYW5nZSIsIkNvbnZlcnRlZEFtb3VudCIsIm9uVmFsdWVDaGFuZ2UiLCJwbGFjZWhvbGRlciIsIm1hcCIsImN1cnJlbmN5IiwiY29kZSIsImltZyIsInNyYyIsImZsYWciLCJodG1sRm9yIiwiaWQiLCJ0eXBlIiwiYXJpYS1sYWJlbCIsInNwYW4iLCJ0b0ZpeGVkIiwiYXNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});