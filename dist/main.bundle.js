"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["main"],{

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });

async function getData(town){
    let townid = town.toString()
    const resolve = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+townid+'&APPID=fc6b2859b88be03095315a3c4da2b5de');
    return resolve.json();
    

}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


let info = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)('burntwood')
info.then(function(result){console.log(result)}
)



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNQZ0M7O0FBRWhDLFdBQVcsOENBQU87QUFDbEIsMkJBQTJCO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKHRvd24pe1xuICAgIGxldCB0b3duaWQgPSB0b3duLnRvU3RyaW5nKClcbiAgICBjb25zdCByZXNvbHZlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0nK3Rvd25pZCsnJkFQUElEPWZjNmIyODU5Yjg4YmUwMzA5NTMxNWEzYzRkYTJiNWRlJyk7XG4gICAgcmV0dXJuIHJlc29sdmUuanNvbigpO1xuICAgIFxuXG59XG5cblxuZXhwb3J0IHtnZXREYXRhfSIsImltcG9ydCB7IGdldERhdGF9IGZyb20gXCIuL2RhdGFcIjtcblxubGV0IGluZm8gPSBnZXREYXRhKCdidXJudHdvb2QnKVxuaW5mby50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7Y29uc29sZS5sb2cocmVzdWx0KX1cbilcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9