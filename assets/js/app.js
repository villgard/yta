/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("const wrapper = document.querySelector('.wrapper');\r\nconst menu = document.getElementById('menu');\r\nconst switcher = document.getElementById('switcher');\r\nconst close = document.getElementById('close');\r\n\r\nfunction toggleMenu(e) {\r\n    e.preventDefault();\r\n    menu.classList.toggle('_active');\r\n    wrapper.classList.toggle('_hidden');\r\n}\r\n\r\nswitcher.addEventListener('click', toggleMenu);\r\nclose.addEventListener('click', toggleMenu);\r\n\r\n\r\nconst anchors = document.querySelectorAll('a[href^=\"#\"]');\r\nfor (let anchor of anchors) {\r\n    anchor.addEventListener('click', function (e) {\r\n        e.preventDefault();\r\n\r\n        const anchorId = anchor.getAttribute('href');\r\n\r\n        document.querySelector(anchorId).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        })\r\n\r\n        menu.classList.remove('_active');\r\n        wrapper.classList.remove('_hidden');\r\n    })\r\n}\r\n\r\ndocument.addEventListener()\n\n//# sourceURL=webpack://villgard/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;