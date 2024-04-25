/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cnpj-validator.js":
/*!*******************************!*\
  !*** ./src/cnpj-validator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction validateCNPJ(value) {\n  var cnpj = value.replace(/[^\\d]+/g, '');\n  if (cnpj === '') {\n    return false;\n  }\n  if (cnpj.length !== 14) {\n    return false;\n  }\n  if (cnpj === '00000000000000' || cnpj === '11111111111111' || cnpj === '22222222222222' || cnpj === '33333333333333' || cnpj === '44444444444444' || cnpj === '55555555555555' || cnpj === '66666666666666' || cnpj === '77777777777777' || cnpj === '88888888888888' || cnpj === '99999999999999') {\n    return false;\n  }\n  var size = cnpj.length - 2;\n  var numbers = cnpj.substring(0, size);\n  var digits = cnpj.substring(size);\n  var sum = 0;\n  var pos = size - 7;\n  for (var i = size; i >= 1; i--) {\n    sum += numbers.charAt(size - i) * pos--;\n    if (pos < 2) {\n      pos = 9;\n    }\n  }\n  var result = sum % 11 < 2 ? 0 : 11 - sum % 11;\n  if (result.toString() !== digits.charAt(0)) {\n    return false;\n  }\n  size = size + 1;\n  numbers = cnpj.substring(0, size);\n  sum = 0;\n  pos = size - 7;\n  for (var _i = size; _i >= 1; _i--) {\n    sum += numbers.charAt(size - _i) * pos--;\n    if (pos < 2) {\n      pos = 9;\n    }\n  }\n  result = sum % 11 < 2 ? 0 : 11 - sum % 11;\n  if (result.toString() !== digits.charAt(1)) {\n    return false;\n  }\n  return true;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateCNPJ);\n\n//# sourceURL=webpack://cpf-cnpj-validator/./src/cnpj-validator.js?");

/***/ }),

/***/ "./src/cpf-validator.js":
/*!******************************!*\
  !*** ./src/cpf-validator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction validateCPF(value) {\n  if (value && value.length >= 11) {\n    value = value.replace(/[^a-zA-Z0-9]/g, '');\n    if (value === '00000000000' || value === '11111111111' || value === '22222222222' || value === '33333333333' || value === '44444444444' || value === '55555555555' || value === '66666666666' || value === '77777777777' || value === '88888888888' || value === '99999999999') {\n      return false;\n    }\n    var qtd = 10;\n    var aux = 0;\n    for (var i = 0; i < 9; i++) {\n      aux += parseInt(value[i]) * qtd;\n      qtd -= 1;\n    }\n    aux = aux * 10;\n    var result = aux % 11;\n    if (result === 10 || result === 11) {\n      result = 0;\n    }\n    if (result !== parseInt(value[9])) {\n      return false;\n    }\n    qtd = 11;\n    aux = 0;\n    for (var _i = 0; _i < 10; _i++) {\n      aux += parseInt(value[_i]) * qtd;\n      qtd -= 1;\n    }\n    aux = aux * 10;\n    result = aux % 11;\n    if (result === 10 || result === 11) {\n      result = 0;\n    }\n    if (result !== parseInt(value[10])) {\n      return false;\n    }\n    return true;\n  } else {\n    return false;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateCPF);\n\n//# sourceURL=webpack://cpf-cnpj-validator/./src/cpf-validator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateCNPJ: () => (/* reexport safe */ _cnpj_validator__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   validateCPF: () => (/* reexport safe */ _cpf_validator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _cpf_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cpf-validator */ \"./src/cpf-validator.js\");\n/* harmony import */ var _cnpj_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cnpj-validator */ \"./src/cnpj-validator.js\");\n\n\n\n\n//# sourceURL=webpack://cpf-cnpj-validator/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;