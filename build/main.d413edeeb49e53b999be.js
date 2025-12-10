"use strict";
(self["webpackChunkwebpack_app"] = self["webpackChunkwebpack_app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#root {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  --Oxygen: "Oxygen", sans-serif;
  --Exo: Exo sans-serif;
  font-size: 16px;
  color: black;
  min-height: 100vh;
  position: relative;
  --White: #ffffff;
  --BackgroundBlack: #282828;
  --HoverButtonBlack: #4b4b4b;
  --TotalBlack: #000000;
  --HoverButtonGray: #c7c7c7;
  --BackgroundReviews: #f8f8f8;
  --BorderReview: #d3d3d3;
}
body {
  margin: 0;
}
p,
h2 {
  font-family: var(--Oxygen);
}
`, "",{"version":3,"sources":["webpack://./src/app/index.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,8BAA8B;EAC9B,8BAA8B;EAC9B,qBAAqB;EACrB,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,0BAA0B;EAC1B,2BAA2B;EAC3B,qBAAqB;EACrB,0BAA0B;EAC1B,4BAA4B;EAC5B,uBAAuB;AACzB;AACA;EACE,SAAS;AACX;AACA;;EAEE,0BAA0B;AAC5B","sourcesContent":["#root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n  --Oxygen: \"Oxygen\", sans-serif;\n  --Exo: Exo sans-serif;\n  font-size: 16px;\n  color: black;\n  min-height: 100vh;\n  position: relative;\n  --White: #ffffff;\n  --BackgroundBlack: #282828;\n  --HoverButtonBlack: #4b4b4b;\n  --TotalBlack: #000000;\n  --HoverButtonGray: #c7c7c7;\n  --BackgroundReviews: #f8f8f8;\n  --BorderReview: #d3d3d3;\n}\nbody {\n  margin: 0;\n}\np,\nh2 {\n  font-family: var(--Oxygen);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/card/card.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/card/card.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.card-div {
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
}
.card-img {
  width: 100%;
}
.card-title {
  font-size: 22px;
  margin: 0;
  text-decoration: none;
  color: var(--TotalBlack);
}
.card-price {
  font-size: 14px;
  margin: 0;
}
.card-controll {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.card-button {
  border: 1px solid var(--TotalBlack);
  padding: 3px;
  font-size: 14px;
  border-radius: 60px;
  width: 25px;
  height: 25px;
  background-color: transparent;
}

@media (any-hover: hover) {
  .card-button:hover {
    cursor: pointer;
    background-color: wheat;
    transition: all 0.3s;
  }
}
`, "",{"version":3,"sources":["webpack://./src/components/card/card.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;EACE,eAAe;EACf,SAAS;EACT,qBAAqB;EACrB,wBAAwB;AAC1B;AACA;EACE,eAAe;EACf,SAAS;AACX;AACA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,mCAAmC;EACnC,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE;IACE,eAAe;IACf,uBAAuB;IACvB,oBAAoB;EACtB;AACF","sourcesContent":[".card-div {\n  width: 280px;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: center;\n  gap: 10px;\n}\n.card-img {\n  width: 100%;\n}\n.card-title {\n  font-size: 22px;\n  margin: 0;\n  text-decoration: none;\n  color: var(--TotalBlack);\n}\n.card-price {\n  font-size: 14px;\n  margin: 0;\n}\n.card-controll {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.card-button {\n  border: 1px solid var(--TotalBlack);\n  padding: 3px;\n  font-size: 14px;\n  border-radius: 60px;\n  width: 25px;\n  height: 25px;\n  background-color: transparent;\n}\n\n@media (any-hover: hover) {\n  .card-button:hover {\n    cursor: pointer;\n    background-color: wheat;\n    transition: all 0.3s;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/controllPanelCard/ControllPanelCard.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/controllPanelCard/ControllPanelCard.css ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.product-controll {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
`, "",{"version":3,"sources":["webpack://./src/components/controllPanelCard/ControllPanelCard.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;AACV","sourcesContent":[".product-controll {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/inputs/baseInput/input.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/inputs/baseInput/input.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.input {
  width: 300px;
  background-color: var(--BackgroundBlack);
  border: 1px solid var(--White);
  border-radius: 20px;
  padding: 15px;
  color: var(--White);
}
`, "",{"version":3,"sources":["webpack://./src/components/inputs/baseInput/input.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,wCAAwC;EACxC,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,mBAAmB;AACrB","sourcesContent":[".input {\n  width: 300px;\n  background-color: var(--BackgroundBlack);\n  border: 1px solid var(--White);\n  border-radius: 20px;\n  padding: 15px;\n  color: var(--White);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/paymentDiv/paymentDiv.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/paymentDiv/paymentDiv.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.payment-div {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid rgb(173, 173, 173);
}
.payment-title {
  margin: 10px;
}
.payment-sum {
  color: rgb(173, 173, 173);
  margin: 20px;
}
`, "",{"version":3,"sources":["webpack://./src/components/paymentDiv/paymentDiv.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,2CAA2C;AAC7C;AACA;EACE,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,YAAY;AACd","sourcesContent":[".payment-div {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 0;\n  border-bottom: 1px solid rgb(173, 173, 173);\n}\n.payment-title {\n  margin: 10px;\n}\n.payment-sum {\n  color: rgb(173, 173, 173);\n  margin: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/productBasket/productBasket.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/productBasket/productBasket.css ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.product {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 15px 0;
  gap: 5px;
}
.product-left {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
}
.product-desc {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
}
.product-img {
  width: 50px;
  height: 50px;
}
.product-text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 80px;
}

.product-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}
@media screen and (max-width: 400px) {
  .product {
    flex-direction: column;
  }
}
`, "",{"version":3,"sources":["webpack://./src/components/productBasket/productBasket.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,QAAQ;AACV;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;EACT,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,QAAQ;AACV;AACA;EACE;IACE,sBAAsB;EACxB;AACF","sourcesContent":[".product {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  flex-direction: row;\r\n  padding: 15px 0;\r\n  gap: 5px;\r\n}\r\n.product-left {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  gap: 10px;\r\n}\r\n.product-desc {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n  justify-content: center;\r\n}\r\n.product-img {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n.product-text {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  width: 80px;\r\n}\r\n\r\n.product-right {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 5px;\r\n}\r\n@media screen and (max-width: 400px) {\r\n  .product {\r\n    flex-direction: column;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/review/review.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/review/review.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.review-user {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 70%;
  border: 1px solid var(--BorderReview);
  padding: 10px;
  border-radius: 20px;
}
.review-rate {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/components/review/review.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,UAAU;EACV,qCAAqC;EACrC,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;AAChC","sourcesContent":[".review-user {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: center;\n  width: 70%;\n  border: 1px solid var(--BorderReview);\n  padding: 10px;\n  border-radius: 20px;\n}\n.review-rate {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/sortingSection/sortingSection.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/sortingSection/sortingSection.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.filters {
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgb(119, 119, 119);
  padding: 20px;
  background-color: var(--White);
}
.filters-title {
  font-size: 1.25rem;
  color: var(--BackgroundBlack);
}
.filter {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 20px;
}
.filter-name {
  color: var(--BackgroundBlack);
  margin: 0;
}
.filters-display {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
}
@media (max-width: 768px) {
  .filters {
    position: absolute;
    left: 0;
    transform: translate(-400px);
    transition: all 0.3s;
  }
  .open-filter {
    transform: translate(0);
  }
}
`, "",{"version":3,"sources":["webpack://./src/components/sortingSection/sortingSection.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,sBAAsB;EACtB,oCAAoC;EACpC,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,kBAAkB;EAClB,6BAA6B;AAC/B;AACA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,6BAA6B;EAC7B,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,QAAQ;AACV;AACA;EACE;IACE,kBAAkB;IAClB,OAAO;IACP,4BAA4B;IAC5B,oBAAoB;EACtB;EACA;IACE,uBAAuB;EACzB;AACF","sourcesContent":[".filters {\r\n  width: 200px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  border: 1px solid rgb(119, 119, 119);\r\n  padding: 20px;\r\n  background-color: var(--White);\r\n}\r\n.filters-title {\r\n  font-size: 1.25rem;\r\n  color: var(--BackgroundBlack);\r\n}\r\n.filter {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: start;\r\n  gap: 20px;\r\n}\r\n.filter-name {\r\n  color: var(--BackgroundBlack);\r\n  margin: 0;\r\n}\r\n.filters-display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  gap: 5px;\r\n}\r\n@media (max-width: 768px) {\r\n  .filters {\r\n    position: absolute;\r\n    left: 0;\r\n    transform: translate(-400px);\r\n    transition: all 0.3s;\r\n  }\r\n  .open-filter {\r\n    transform: translate(0);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layouts/burger/burger.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layouts/burger/burger.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.burger-menu {
  display: none;
}
.burger-section {
  opacity: 0;
  position: absolute;
  transform: translate(-350px);
  transition: all 0.3s;
}
.opened-burger {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  background-color: var(--White);
  border: 1px solid var(--TotalBlack);
  width: 100px;
  transform: translate(0);
  right: 0;
  top: 80px;
  opacity: 1;
  transition: all 0.3s;
}
.burger-menu__link {
  font-size: 18px;
  font-family: var(--Oxygen);
  text-decoration: none;
  color: var(--TotalBlack);
}
.burger-menu-logout {
  background: transparent;
  border: none;
  font-size: 18px;
  font-family: var(--Oxygen);
}

@media screen and (max-width: 550px) {
  .burger-menu {
    display: flex;
  }
  .header-log-buttons {
    display: none;
  }
  .header_controll {
    display: none;
  }
}
`, "",{"version":3,"sources":["webpack://./src/layouts/burger/burger.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,4BAA4B;EAC5B,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,8BAA8B;EAC9B,mCAAmC;EACnC,YAAY;EACZ,uBAAuB;EACvB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,0BAA0B;EAC1B,qBAAqB;EACrB,wBAAwB;AAC1B;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;AACF","sourcesContent":[".burger-menu {\r\n  display: none;\r\n}\r\n.burger-section {\r\n  opacity: 0;\r\n  position: absolute;\r\n  transform: translate(-350px);\r\n  transition: all 0.3s;\r\n}\r\n.opened-burger {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  align-items: center;\r\n  background-color: var(--White);\r\n  border: 1px solid var(--TotalBlack);\r\n  width: 100px;\r\n  transform: translate(0);\r\n  right: 0;\r\n  top: 80px;\r\n  opacity: 1;\r\n  transition: all 0.3s;\r\n}\r\n.burger-menu__link {\r\n  font-size: 18px;\r\n  font-family: var(--Oxygen);\r\n  text-decoration: none;\r\n  color: var(--TotalBlack);\r\n}\r\n.burger-menu-logout {\r\n  background: transparent;\r\n  border: none;\r\n  font-size: 18px;\r\n  font-family: var(--Oxygen);\r\n}\r\n\r\n@media screen and (max-width: 550px) {\r\n  .burger-menu {\r\n    display: flex;\r\n  }\r\n  .header-log-buttons {\r\n    display: none;\r\n  }\r\n  .header_controll {\r\n    display: none;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layouts/footer/footer.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layouts/footer/footer.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer {
  width: 100%;
  background-color: var(--BackgroundBlack);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
}
.sub-footer {
  border-top: 0.5px solid var(--White);
  padding: 10px 0;
  width: 100%;
  margin-top: 30px;
}
.footer-describe {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 50%;
  flex-direction: column;
}

.footer-title {
  font-size: 40px;
  text-align: center;
}
.sub-footer_copyright {
  text-align: center;
  margin: 0;
  color: var(--White);
  font-family: var(--Exo);
}
.email-subscription {
  width: 300px;
  background-color: var(--BackgroundBlack);
  border: 1px solid var(--White);
  border-radius: 20px;
  padding: 15px;
  color: var(--White);
}
.submit-button {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 1px solid var(--White);
  border-radius: 45px;
  text-align: center;
  font-size: 30px;
  background-color: var(--BackgroundBlack);
  margin: 0;
  top: 4px;
  right: 5px;
  color: var(--White);
}
.submit-button:active {
  background-color: var(--BackgroundBlack);
}
.footer-form {
  position: relative;
}
@media (any-hover: hover) {
  .submit-button:hover {
    background-color: var(--HoverButtonBlack);
    transition: all 0.3s;
    cursor: pointer;
  }
}
@media screen and (max-width: 500px) {
  .email-subscription {
    width: 280px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/layouts/footer/footer.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,wCAAwC;EACxC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,oCAAoC;EACpC,eAAe;EACf,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,wCAAwC;EACxC,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,wCAAwC;EACxC,SAAS;EACT,QAAQ;EACR,UAAU;EACV,mBAAmB;AACrB;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,kBAAkB;AACpB;AACA;EACE;IACE,yCAAyC;IACzC,oBAAoB;IACpB,eAAe;EACjB;AACF;AACA;EACE;IACE,YAAY;EACd;AACF","sourcesContent":[".footer {\r\n  width: 100%;\r\n  background-color: var(--BackgroundBlack);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  padding-top: 100px;\r\n}\r\n.sub-footer {\r\n  border-top: 0.5px solid var(--White);\r\n  padding: 10px 0;\r\n  width: 100%;\r\n  margin-top: 30px;\r\n}\r\n.footer-describe {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 30px;\r\n  width: 50%;\r\n  flex-direction: column;\r\n}\r\n\r\n.footer-title {\r\n  font-size: 40px;\r\n  text-align: center;\r\n}\r\n.sub-footer_copyright {\r\n  text-align: center;\r\n  margin: 0;\r\n  color: var(--White);\r\n  font-family: var(--Exo);\r\n}\r\n.email-subscription {\r\n  width: 300px;\r\n  background-color: var(--BackgroundBlack);\r\n  border: 1px solid var(--White);\r\n  border-radius: 20px;\r\n  padding: 15px;\r\n  color: var(--White);\r\n}\r\n.submit-button {\r\n  position: absolute;\r\n  width: 40px;\r\n  height: 40px;\r\n  border: 1px solid var(--White);\r\n  border-radius: 45px;\r\n  text-align: center;\r\n  font-size: 30px;\r\n  background-color: var(--BackgroundBlack);\r\n  margin: 0;\r\n  top: 4px;\r\n  right: 5px;\r\n  color: var(--White);\r\n}\r\n.submit-button:active {\r\n  background-color: var(--BackgroundBlack);\r\n}\r\n.footer-form {\r\n  position: relative;\r\n}\r\n@media (any-hover: hover) {\r\n  .submit-button:hover {\r\n    background-color: var(--HoverButtonBlack);\r\n    transition: all 0.3s;\r\n    cursor: pointer;\r\n  }\r\n}\r\n@media screen and (max-width: 500px) {\r\n  .email-subscription {\r\n    width: 280px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layouts/header/header.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layouts/header/header.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
}
.header_nav {
  display: flex;
  flex-direction: row;
  gap: 30px;
}
.header_controll {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
.header_buttons {
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.header_nav > a {
  font-family: var(--Oxygen);
  text-decoration: none;
  color: var(--TotalBlack);
}

.header-log-buttons {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
.header_button {
  color: var(--White);
  background-color: var(--TotalBlack);
}
.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
}
.line {
  fill: none;
  stroke: black;
  stroke-width: 6;
  transition:
    stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}

@media (any-hover: hover) {
  .header_nav > a:hover {
    color: var(--HoverButtonGray);
    transition: color 0.3s;
  }
}
`, "",{"version":3,"sources":["webpack://./src/layouts/header/header.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;AACA;EACE,0BAA0B;EAC1B,qBAAqB;EACrB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,mBAAmB;EACnB,mCAAmC;AACrC;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,aAAa;EACb,UAAU;AACZ;AACA;EACE,UAAU;EACV,aAAa;EACb,eAAe;EACf;;wDAEsD;AACxD;AACA;EACE,wBAAwB;EACxB,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,wBAAwB;EACxB,eAAe;AACjB;AACA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE;IACE,6BAA6B;IAC7B,sBAAsB;EACxB;AACF","sourcesContent":[".header {\r\n  width: 90%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 40px 0;\r\n}\r\n.header_nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 30px;\r\n}\r\n.header_controll {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.header_buttons {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n.header_nav > a {\r\n  font-family: var(--Oxygen);\r\n  text-decoration: none;\r\n  color: var(--TotalBlack);\r\n}\r\n\r\n.header-log-buttons {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 10px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.header_button {\r\n  color: var(--White);\r\n  background-color: var(--TotalBlack);\r\n}\r\n.menu {\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  display: flex;\r\n  padding: 0;\r\n}\r\n.line {\r\n  fill: none;\r\n  stroke: black;\r\n  stroke-width: 6;\r\n  transition:\r\n    stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),\r\n    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n.line1 {\r\n  stroke-dasharray: 60 207;\r\n  stroke-width: 6;\r\n}\r\n.line2 {\r\n  stroke-dasharray: 60 60;\r\n  stroke-width: 6;\r\n}\r\n.line3 {\r\n  stroke-dasharray: 60 207;\r\n  stroke-width: 6;\r\n}\r\n.opened .line1 {\r\n  stroke-dasharray: 90 207;\r\n  stroke-dashoffset: -134;\r\n  stroke-width: 6;\r\n}\r\n.opened .line2 {\r\n  stroke-dasharray: 1 60;\r\n  stroke-dashoffset: -30;\r\n  stroke-width: 6;\r\n}\r\n.opened .line3 {\r\n  stroke-dasharray: 90 207;\r\n  stroke-dashoffset: -134;\r\n  stroke-width: 6;\r\n}\r\n\r\n@media (any-hover: hover) {\r\n  .header_nav > a:hover {\r\n    color: var(--HoverButtonGray);\r\n    transition: color 0.3s;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layouts/imagesView/imagesView.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layouts/imagesView/imagesView.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.images-select {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
.images-view {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
.small-image {
  max-width: 120px;
  background: transparent;
  border: none;
  cursor: pointer;
}
.image-cart {
  max-width: 120px;
}
.selected {
  width: 100%;
  min-width: 200px;
  max-width: 500px;
}

@media (any-hover: hover) {
  .small-image :hover {
    box-shadow: 8px 10px 21px -8px rgba(0, 0, 0, 1);
    transition: all 0.3s;
  }
}

@media screen and (max-width: 768px) {
  .images-view {
    flex-direction: column-reverse;
    width: 97%;
  }
  .selected {
    min-width: 300px;
  }
  .images-select {
    flex-direction: row;
  }
  .image-cart {
    max-width: 100px;
  }
  .small-image {
    max-width: 100px;
  }
}
@media screen and (max-width: 500px) {
  .image-cart {
    max-width: 70px;
  }
  .small-image {
    max-width: 70px;
  }
  .product-card-price {
    flex-direction: column;
  }
  .review-user {
    width: 90%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/layouts/imagesView/imagesView.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE;IACE,+CAA+C;IAC/C,oBAAoB;EACtB;AACF;;AAEA;EACE;IACE,8BAA8B;IAC9B,UAAU;EACZ;EACA;IACE,gBAAgB;EAClB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;AACF;AACA;EACE;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,UAAU;EACZ;AACF","sourcesContent":[".images-select {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 20px;\r\n}\r\n.images-view {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 30px;\r\n}\r\n.small-image {\r\n  max-width: 120px;\r\n  background: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n.image-cart {\r\n  max-width: 120px;\r\n}\r\n.selected {\r\n  width: 100%;\r\n  min-width: 200px;\r\n  max-width: 500px;\r\n}\r\n\r\n@media (any-hover: hover) {\r\n  .small-image :hover {\r\n    box-shadow: 8px 10px 21px -8px rgba(0, 0, 0, 1);\r\n    transition: all 0.3s;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .images-view {\r\n    flex-direction: column-reverse;\r\n    width: 97%;\r\n  }\r\n  .selected {\r\n    min-width: 300px;\r\n  }\r\n  .images-select {\r\n    flex-direction: row;\r\n  }\r\n  .image-cart {\r\n    max-width: 100px;\r\n  }\r\n  .small-image {\r\n    max-width: 100px;\r\n  }\r\n}\r\n@media screen and (max-width: 500px) {\r\n  .image-cart {\r\n    max-width: 70px;\r\n  }\r\n  .small-image {\r\n    max-width: 70px;\r\n  }\r\n  .product-card-price {\r\n    flex-direction: column;\r\n  }\r\n  .review-user {\r\n    width: 90%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layouts/popularProductComp/popularProductComp.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layouts/popularProductComp/popularProductComp.css ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.main-page_section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin: 40px 0;
  gap: 20px;
}
.main-page_direction {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.main-page_title-text {
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 30px;
}
.main-page_title {
  font-size: 36px;
  margin: 0;
}
.main-page_text {
  margin: 0;
}
.main-page_card-container {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

@media screen and (max-width: 500px) {
  .main-page_title {
    font-size: 28px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/layouts/popularProductComp/popularProductComp.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,UAAU;EACV,cAAc;EACd,SAAS;AACX;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,eAAe;EACf,SAAS;AACX;AACA;EACE,SAAS;AACX;AACA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE;IACE,eAAe;EACjB;AACF","sourcesContent":[".main-page_section {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  width: 90%;\r\n  margin: 40px 0;\r\n  gap: 20px;\r\n}\r\n.main-page_direction {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.main-page_title-text {\r\n  display: flex;\r\n  align-items: start;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n}\r\n.main-page_title {\r\n  font-size: 36px;\r\n  margin: 0;\r\n}\r\n.main-page_text {\r\n  margin: 0;\r\n}\r\n.main-page_card-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 30px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  .main-page_title {\r\n    font-size: 28px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layouts/statisticOnMain/statisticOnMain.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layouts/statisticOnMain/statisticOnMain.css ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.statistic-div {
  width: 100%;
  padding: 60px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--BackgroundBlack);
}
.statistic-container {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  width: 80%;
}
.statistic-title {
  margin: 0;
  font-size: 36px;
  color: var(--White);
}
.statistic-direct {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 20px;
  width: 40%;
}
.statistic-desc {
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
}
.statistic-desc p,
h2 {
  color: var(--White);
  margin: 0;
}
.statistic-desc_article-title {
  font-size: 48px;
}
.statistic-desc_section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.statistic-desc_article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

@media screen and (max-width: 768px) {
  .statistic-container {
    flex-direction: column;
    align-items: center;
  }
  .statistic-direct {
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
  }
  .statistic-title {
    text-align: center;
  }
  .statistic-desc {
    width: 100%;
    gap: 20px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/layouts/statisticOnMain/statisticOnMain.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,wCAAwC;AAC1C;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,8BAA8B;EAC9B,UAAU;AACZ;AACA;EACE,SAAS;EACT,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;AACA;EACE,aAAa;EACb,UAAU;EACV,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;AACA;;EAEE,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE;IACE,sBAAsB;IACtB,mBAAmB;EACrB;EACA;IACE,WAAW;IACX,mBAAmB;IACnB,mBAAmB;EACrB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,WAAW;IACX,SAAS;EACX;AACF","sourcesContent":[".statistic-div {\r\n  width: 100%;\r\n  padding: 60px 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--BackgroundBlack);\r\n}\r\n.statistic-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: start;\r\n  justify-content: space-between;\r\n  width: 80%;\r\n}\r\n.statistic-title {\r\n  margin: 0;\r\n  font-size: 36px;\r\n  color: var(--White);\r\n}\r\n.statistic-direct {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  justify-content: center;\r\n  gap: 20px;\r\n  width: 40%;\r\n}\r\n.statistic-desc {\r\n  display: flex;\r\n  width: 50%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 60px;\r\n}\r\n.statistic-desc p,\r\nh2 {\r\n  color: var(--White);\r\n  margin: 0;\r\n}\r\n.statistic-desc_article-title {\r\n  font-size: 48px;\r\n}\r\n.statistic-desc_section {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 20px;\r\n}\r\n.statistic-desc_article {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 30px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .statistic-container {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  .statistic-direct {\r\n    width: 100%;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n  }\r\n  .statistic-title {\r\n    text-align: center;\r\n  }\r\n  .statistic-desc {\r\n    width: 100%;\r\n    gap: 20px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layouts/viewProductDetails/viewProductDetails.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layouts/viewProductDetails/viewProductDetails.css ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.product-card-main-information {
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
}
.product-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 95%;
}
.product-card-headling {
  width: 100%;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  font-size: 18px;
}
.product-card-title {
  font-family: var(--Oxygen);
  font-size: 26px;
  color: var(--TotalBlack);
}
.product-card-price {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: start;
  gap: 5px;
}
.product-card-price > span {
  font-size: 28px;
  font-family: var(--Oxygen);
}
.product-card-description__p {
  width: 100%;
  font-size: 15px;
  line-height: 1.6;
}
.product-card-list {
  line-height: 1.6;
}
.product-card-list > li {
  font-family: var(--Oxygen);
}
.product-card-controll-panel {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
}
.product-card-add-to-cart {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.product-card-delivery {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 10px;
}

.product-card-description {
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 30px;
}
@media screen and (max-width: 768px) {
  .product-card {
    flex-direction: column;
  }
}
`, "",{"version":3,"sources":["webpack://./src/layouts/viewProductDetails/viewProductDetails.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;AACA;EACE,WAAW;EACX,sBAAsB;EACtB,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,eAAe;AACjB;AACA;EACE,0BAA0B;EAC1B,eAAe;EACf,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,eAAe;EACf,0BAA0B;AAC5B;AACA;EACE,WAAW;EACX,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,SAAS;AACX;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB;EACtB,SAAS;AACX;AACA;EACE;IACE,sBAAsB;EACxB;AACF","sourcesContent":[".product-card-main-information {\r\n  display: flex;\r\n  width: 100%;\r\n  align-items: start;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n}\r\n.product-card {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 50px;\r\n  width: 95%;\r\n}\r\n.product-card-headling {\r\n  width: 100%;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  gap: 10px;\r\n  font-size: 18px;\r\n}\r\n.product-card-title {\r\n  font-family: var(--Oxygen);\r\n  font-size: 26px;\r\n  color: var(--TotalBlack);\r\n}\r\n.product-card-price {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  justify-content: start;\r\n  gap: 5px;\r\n}\r\n.product-card-price > span {\r\n  font-size: 28px;\r\n  font-family: var(--Oxygen);\r\n}\r\n.product-card-description__p {\r\n  width: 100%;\r\n  font-size: 15px;\r\n  line-height: 1.6;\r\n}\r\n.product-card-list {\r\n  line-height: 1.6;\r\n}\r\n.product-card-list > li {\r\n  font-family: var(--Oxygen);\r\n}\r\n.product-card-controll-panel {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n.product-card-add-to-cart {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 10px;\r\n}\r\n.product-card-delivery {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: start;\r\n  gap: 10px;\r\n}\r\n\r\n.product-card-description {\r\n  display: flex;\r\n  align-items: start;\r\n  justify-content: start;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .product-card {\r\n    flex-direction: column;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/homePage/homePage.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/homePage/homePage.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.home-page {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.home-page_entire-block {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin: 40px 0;
  width: 100%;
}
.home-page_article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 60%;
}
.home-page_title {
  font-weight: 600;
  text-align: center;
  font-size: 45px;
  margin: 0;
}
.home-page_text {
  text-align: center;
  margin: 0;
  width: 70%;
}

@media screen and (max-width: 500px) {
  .home-page_article {
    width: 97%;
  }
  .home-page_title {
    font-size: 30px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/pages/homePage/homePage.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,sBAAsB;EACtB,cAAc;EACd,WAAW;AACb;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,SAAS;AACX;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,eAAe;EACjB;AACF","sourcesContent":[".home-page {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n.home-page_entire-block {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  margin: 40px 0;\r\n  width: 100%;\r\n}\r\n.home-page_article {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 40px;\r\n  width: 60%;\r\n}\r\n.home-page_title {\r\n  font-weight: 600;\r\n  text-align: center;\r\n  font-size: 45px;\r\n  margin: 0;\r\n}\r\n.home-page_text {\r\n  text-align: center;\r\n  margin: 0;\r\n  width: 70%;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  .home-page_article {\r\n    width: 97%;\r\n  }\r\n  .home-page_title {\r\n    font-size: 30px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/api/productApi.ts":
/*!*******************************!*\
  !*** ./src/api/productApi.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   productsApi: () => (/* binding */ productsApi),
/* harmony export */   useGetCategoriesQuery: () => (/* binding */ useGetCategoriesQuery),
/* harmony export */   useGetProductByIdQuery: () => (/* binding */ useGetProductByIdQuery),
/* harmony export */   useGetProductsQuery: () => (/* binding */ useGetProductsQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");

var productsApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "productsApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({ baseUrl: "https://dummyjson.com/products/" }),
    endpoints: function (builder) { return ({
        getProducts: builder.query({
            query: function (_a) {
                var limit = _a.limit, skip = _a.skip, filter = _a.filter, search = _a.search;
                return "".concat(filter ? "category/".concat(filter) : "").concat(search ? "/search?q=".concat(search, "&") : "?", "limit=").concat(limit, "&skip=").concat(skip, "&select=title,price,images&");
            },
        }),
        getCategories: builder.query({
            query: function () { return "category-list"; },
        }),
        getProductById: builder.query({
            query: function (id) { return "".concat(id); },
        }),
    }); },
});
var useGetProductsQuery = productsApi.useGetProductsQuery, useGetCategoriesQuery = productsApi.useGetCategoriesQuery, useGetProductByIdQuery = productsApi.useGetProductByIdQuery;


/***/ }),

/***/ "./src/api/userApi.ts":
/*!****************************!*\
  !*** ./src/api/userApi.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGetTokenMutation: () => (/* binding */ useGetTokenMutation),
/* harmony export */   useGetUsersQuery: () => (/* binding */ useGetUsersQuery),
/* harmony export */   usePostUserMutation: () => (/* binding */ usePostUserMutation),
/* harmony export */   useVerifyUserQuery: () => (/* binding */ useVerifyUserQuery),
/* harmony export */   userApi: () => (/* binding */ userApi)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var userApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "userApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({ baseUrl: "https://dummyjson.com/" }),
    endpoints: function (builder) { return ({
        postUser: builder.mutation({
            query: function (newUser) { return ({
                url: "users/add",
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: __assign({ username: newUser.name }, newUser),
            }); },
        }),
        getToken: builder.mutation({
            query: function (user) { return ({
                url: "user/login",
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: {
                    username: user.username,
                    password: user.password,
                    expiresInMins: 120,
                },
                credentials: "omit",
            }); },
        }),
        getUsers: builder.query({
            query: function () { return "users"; },
        }),
        verifyUser: builder.query({
            query: function (token) { return ({
                method: "GET",
                url: "auth/me",
                headers: {
                    Authorization: "Bearer ".concat(token),
                },
                credentials: "omit",
            }); },
        }),
    }); },
});
var usePostUserMutation = userApi.usePostUserMutation, useGetTokenMutation = userApi.useGetTokenMutation, useGetUsersQuery = userApi.useGetUsersQuery, useVerifyUserQuery = userApi.useVerifyUserQuery;


/***/ }),

/***/ "./src/app/App.tsx":
/*!*************************!*\
  !*** ./src/app/App.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/index */ "./src/pages/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/index */ "./src/layouts/index.ts");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/app/index.css");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/routes */ "./src/utils/routes.ts");







var App = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layouts_index__WEBPACK_IMPORTED_MODULE_4__.Header, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, { fallback: "loading...", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { path: _utils_routes__WEBPACK_IMPORTED_MODULE_6__.ROUTES.HOME, element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_index__WEBPACK_IMPORTED_MODULE_2__.HomePage, {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { path: _utils_routes__WEBPACK_IMPORTED_MODULE_6__.ROUTES.REGISTER, element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_index__WEBPACK_IMPORTED_MODULE_2__.Registration, {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { path: _utils_routes__WEBPACK_IMPORTED_MODULE_6__.ROUTES.LOGIN, element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_index__WEBPACK_IMPORTED_MODULE_2__.Auth, {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { path: _utils_routes__WEBPACK_IMPORTED_MODULE_6__.ROUTES.CATEGORIES, element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_index__WEBPACK_IMPORTED_MODULE_2__.CategoriesPage, {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { path: _utils_routes__WEBPACK_IMPORTED_MODULE_6__.ROUTES.BASKET, element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_index__WEBPACK_IMPORTED_MODULE_2__.ShopList, {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { path: _utils_routes__WEBPACK_IMPORTED_MODULE_6__.ROUTES.VIEWPRODUCT, element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_index__WEBPACK_IMPORTED_MODULE_2__.ViewProduct, {}) })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layouts_index__WEBPACK_IMPORTED_MODULE_4__.Footer, {})] }));
};


/***/ }),

/***/ "./src/app/hooks.ts":
/*!**************************!*\
  !*** ./src/app/hooks.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAppDispatch: () => (/* binding */ useAppDispatch),
/* harmony export */   useAppSelector: () => (/* binding */ useAppSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");

var useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch.withTypes();
var useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector.withTypes();


/***/ }),

/***/ "./src/app/index.css":
/*!***************************!*\
  !*** ./src/app/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/app/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* harmony import */ var _api_productApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/productApi */ "./src/api/productApi.ts");
/* harmony import */ var _store_userProductSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/userProductSlice */ "./src/store/userProductSlice.ts");
/* harmony import */ var _api_userApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/userApi */ "./src/api/userApi.ts");
var _a;




var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: (_a = {
            userProduct: _store_userProductSlice__WEBPACK_IMPORTED_MODULE_2__["default"]
        },
        _a[_api_productApi__WEBPACK_IMPORTED_MODULE_1__.productsApi.reducerPath] = _api_productApi__WEBPACK_IMPORTED_MODULE_1__.productsApi.reducer,
        _a[_api_userApi__WEBPACK_IMPORTED_MODULE_3__.userApi.reducerPath] = _api_userApi__WEBPACK_IMPORTED_MODULE_3__.userApi.reducer,
        _a),
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware()
            .concat(_api_productApi__WEBPACK_IMPORTED_MODULE_1__.productsApi.middleware)
            .concat(_api_userApi__WEBPACK_IMPORTED_MODULE_3__.userApi.middleware);
    },
});


/***/ }),

/***/ "./src/components/alert/alert.tsx":
/*!****************************************!*\
  !*** ./src/components/alert/alert.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertMui: () => (/* binding */ AlertMui)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Collapse/Collapse.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);




var AlertMui = function (_a) {
    var children = _a.children, setError = _a.setError;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true), open = _b[0], setOpen = _b[1];
    var handleCloseAlert = function () {
        setOpen(false);
        setError(null);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], { sx: { position: "fixed", top: "80px", zIndex: 10 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], { in: open, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "filled", severity: "error", action: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { "aria-label": "close", onClick: handleCloseAlert, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__["default"], {}) }), children: children }) }) }));
};


/***/ }),

/***/ "./src/components/button/button.tsx":
/*!******************************************!*\
  !*** ./src/components/button/button.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomizedButtons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/esm/styles/styled.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/esm/Button/Button.js");



var ColorButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"])(function (_a) {
    var backgroundcolor = _a.backgroundcolor, textcolor = _a.textcolor, borderradius = _a.borderradius, fontSize = _a.fontSize, padding = _a.padding, width = _a.width;
    return ({
        backgroundColor: backgroundcolor || "rgba(0, 0, 0, 1)",
        color: textcolor || "rgba(255, 255, 255, 1)",
        fontFamily: "Exo, sans-serif",
        borderRadius: borderradius || "20px",
        fontSize: fontSize || "16px",
        padding: padding || "13px",
        display: "flex",
        alignItems: "center",
        textTransform: "none",
        width: width || "fit-content",
    });
});
function CustomizedButtons(props) {
    var children = props.children, textcolor = props.textcolor, borderradius = props.borderradius, fontSize = props.fontSize, padding = props.padding, disabled = props.disabled, func = props.func, width = props.width, backgroundcolor = props.backgroundcolor;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ColorButton, { variant: "contained", backgroundcolor: backgroundcolor, borderradius: borderradius, textcolor: textcolor, fontSize: fontSize, padding: padding, onClick: function () { return func(); }, width: width, disabled: disabled, onClickCapture: function () { return func(); }, children: children }));
}


/***/ }),

/***/ "./src/components/card/card.css":
/*!**************************************!*\
  !*** ./src/components/card/card.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./card.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/card/card.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/card/card.tsx":
/*!**************************************!*\
  !*** ./src/components/card/card.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.css */ "./src/components/card/card.css");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/hooks */ "./src/app/hooks.ts");
/* harmony import */ var _store_userProductSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/userProductSlice */ "./src/store/userProductSlice.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/routes */ "./src/utils/routes.ts");






var Card = function (_a) {
    var _b;
    var thing = _a.thing, setError = _a.setError;
    var dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
    var product = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function (state) { return state.userProduct.product; });
    var handleSetProduct = function () {
        if (product.every(function (elem) { return elem.title !== thing.title; })) {
            dispatch((0,_store_userProductSlice__WEBPACK_IMPORTED_MODULE_3__.setProducts)(thing));
            dispatch((0,_store_userProductSlice__WEBPACK_IMPORTED_MODULE_3__.addTotalSum)(thing.price));
        }
        else {
            setError("You already add this product to cart");
            return;
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "card-div", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: "card-img", src: (_b = thing.images) === null || _b === void 0 ? void 0 : _b[0], alt: thing.title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, { to: _utils_routes__WEBPACK_IMPORTED_MODULE_5__.ROUTES.VIEWPRODUCT.replace(":id", "".concat(thing.id)), className: "card-title", children: thing.title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "card-controll", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { className: "card-price", children: ["$", thing.price] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "card-button", onClick: function () { return handleSetProduct(); }, children: "+" })] })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ "./src/components/controllPanelCard/ControllPanelCard.css":
/*!****************************************************************!*\
  !*** ./src/components/controllPanelCard/ControllPanelCard.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ControllPanelCard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./ControllPanelCard.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/controllPanelCard/ControllPanelCard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ControllPanelCard_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ControllPanelCard_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ControllPanelCard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ControllPanelCard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/controllPanelCard/controllPanelCard.tsx":
/*!****************************************************************!*\
  !*** ./src/components/controllPanelCard/controllPanelCard.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ControllPanelCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _ControllPanelCard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControllPanelCard.css */ "./src/components/controllPanelCard/ControllPanelCard.css");


function ControllPanelCard(_a) {
    var count = _a.count, minus = _a.minus, plus = _a.plus;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "product-controll", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "product-control__button", onClick: minus, children: "-" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "procut-text", children: count }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "product-control__button", onClick: plus, children: "+" })] }));
}


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertMui: () => (/* reexport safe */ _alert_alert__WEBPACK_IMPORTED_MODULE_0__.AlertMui),
/* harmony export */   Button: () => (/* reexport safe */ _button_button__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Card: () => (/* reexport safe */ _card_card__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   ControllPanelCard: () => (/* reexport safe */ _controllPanelCard_controllPanelCard__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   Input: () => (/* reexport safe */ _inputs_baseInput_input__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   PaymentDiv: () => (/* reexport safe */ _paymentDiv_paymentDiv__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   ProductBasket: () => (/* reexport safe */ _productBasket_productBasket__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Review: () => (/* reexport safe */ _review_review__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   SortingSection: () => (/* reexport safe */ _sortingSection_sortingSection__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _alert_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert/alert */ "./src/components/alert/alert.tsx");
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/button */ "./src/components/button/button.tsx");
/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card/card */ "./src/components/card/card.tsx");
/* harmony import */ var _inputs_baseInput_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputs/baseInput/input */ "./src/components/inputs/baseInput/input.tsx");
/* harmony import */ var _sortingSection_sortingSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortingSection/sortingSection */ "./src/components/sortingSection/sortingSection.tsx");
/* harmony import */ var _paymentDiv_paymentDiv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymentDiv/paymentDiv */ "./src/components/paymentDiv/paymentDiv.tsx");
/* harmony import */ var _productBasket_productBasket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productBasket/productBasket */ "./src/components/productBasket/productBasket.tsx");
/* harmony import */ var _controllPanelCard_controllPanelCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllPanelCard/controllPanelCard */ "./src/components/controllPanelCard/controllPanelCard.tsx");
/* harmony import */ var _review_review__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./review/review */ "./src/components/review/review.tsx");












/***/ }),

/***/ "./src/components/inputs/baseInput/input.css":
/*!***************************************************!*\
  !*** ./src/components/inputs/baseInput/input.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./input.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/inputs/baseInput/input.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/inputs/baseInput/input.tsx":
/*!***************************************************!*\
  !*** ./src/components/inputs/baseInput/input.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.css */ "./src/components/inputs/baseInput/input.css");


function Input(_a) {
    var name = _a.name, placeholder = _a.placeholder, styles = _a.styles, type = _a.type, requared = _a.requared, func = _a.func, value = _a.value;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { style: styles, type: type, name: name, value: value, onChange: func, required: requared, placeholder: placeholder, className: "input" }));
}


/***/ }),

/***/ "./src/components/paymentDiv/paymentDiv.css":
/*!**************************************************!*\
  !*** ./src/components/paymentDiv/paymentDiv.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_paymentDiv_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./paymentDiv.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/paymentDiv/paymentDiv.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_paymentDiv_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_paymentDiv_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_paymentDiv_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_paymentDiv_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/paymentDiv/paymentDiv.tsx":
/*!**************************************************!*\
  !*** ./src/components/paymentDiv/paymentDiv.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PaymentDiv)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _paymentDiv_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymentDiv.css */ "./src/components/paymentDiv/paymentDiv.css");


function PaymentDiv(_a) {
    var title = _a.title, sum = _a.sum;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "payment-div", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "payment-title", children: title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "payment-sum", children: typeof sum === "string" ? sum : "$".concat(sum) })] }));
}


/***/ }),

/***/ "./src/components/productBasket/productBasket.css":
/*!********************************************************!*\
  !*** ./src/components/productBasket/productBasket.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_productBasket_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./productBasket.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/productBasket/productBasket.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_productBasket_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_productBasket_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_productBasket_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_productBasket_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/productBasket/productBasket.tsx":
/*!********************************************************!*\
  !*** ./src/components/productBasket/productBasket.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductBasket)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _productBasket_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productBasket.css */ "./src/components/productBasket/productBasket.css");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/hooks */ "./src/app/hooks.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./src/components/index.ts");
/* harmony import */ var _store_userProductSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/userProductSlice */ "./src/store/userProductSlice.ts");






function ProductBasket(_a) {
    var _b;
    var thing = _a.thing;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), count = _c[0], setCount = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(thing.price), productPrice = _d[0], setProductPrice = _d[1];
    var dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
    var handlePlusCount = function () {
        setCount(function (prev) { return prev + 1; });
        setProductPrice(function (prev) { return Math.round((prev + thing.price) * 100) / 100; });
        dispatch((0,_store_userProductSlice__WEBPACK_IMPORTED_MODULE_5__.addTotalSum)(thing.price));
    };
    var handleMinusCount = function () {
        if (count != 1) {
            setCount(function (prev) { return prev - 1; });
            setProductPrice(function (prev) { return Math.round((prev - thing.price) * 100) / 100; });
            dispatch((0,_store_userProductSlice__WEBPACK_IMPORTED_MODULE_5__.minusTotalSum)(thing.price));
        }
    };
    var handleDeleteFromBasket = function (id) {
        dispatch((0,_store_userProductSlice__WEBPACK_IMPORTED_MODULE_5__.deleteProduct)(id));
        dispatch((0,_store_userProductSlice__WEBPACK_IMPORTED_MODULE_5__.minusTotalSum)(productPrice));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", { className: "product", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "product-left", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "product-control__button", onClick: function () { return handleDeleteFromBasket(thing.id); }, children: "X" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "product-desc", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: "product-img", src: (_b = thing.images) === null || _b === void 0 ? void 0 : _b[0], alt: thing.title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "product-text", children: thing.title })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "product-right", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { className: "product-price", children: ["$", thing.price] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_4__.ControllPanelCard, { count: count, minus: handleMinusCount, plus: handlePlusCount }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { className: "product-total-text", children: ["$", productPrice] })] })] }));
}


/***/ }),

/***/ "./src/components/review/review.css":
/*!******************************************!*\
  !*** ./src/components/review/review.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_review_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./review.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/review/review.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_review_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_review_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_review_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_review_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/review/review.tsx":
/*!******************************************!*\
  !*** ./src/components/review/review.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Review)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _review_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review.css */ "./src/components/review/review.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Rating/Rating.js");
/* harmony import */ var _utils_timeConvert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/timeConvert */ "./src/utils/timeConvert.ts");




function Review(_a) {
    var review = _a.review;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", { className: "review-user", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "review-rate", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "reviewer-name", children: review.reviewerName }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], { name: "read-only", value: review.rating, readOnly: true })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "review-comment", children: review.comment }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "review-posted-time", children: (0,_utils_timeConvert__WEBPACK_IMPORTED_MODULE_3__.convertDate)(review.date) })] }));
}


/***/ }),

/***/ "./src/components/sortingSection/sortingSection.css":
/*!**********************************************************!*\
  !*** ./src/components/sortingSection/sortingSection.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sortingSection_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./sortingSection.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/sortingSection/sortingSection.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sortingSection_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sortingSection_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sortingSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sortingSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/sortingSection/sortingSection.tsx":
/*!**********************************************************!*\
  !*** ./src/components/sortingSection/sortingSection.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortingSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _sortingSection_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortingSection.css */ "./src/components/sortingSection/sortingSection.css");


function SortingSection(_a) {
    var name = _a.name, filters = _a.filters, func = _a.func, openedFilters = _a.openedFilters, selectedFilter = _a.selectedFilter;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "filters ".concat(openedFilters ? "open-filter" : ""), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: "filters-title", children: name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "filters-display", children: filters.map(function (elem, id) {
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { className: "filter", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", name: String(elem), checked: selectedFilter === String(elem), onChange: function () { return func(String(elem)); }, className: "filter-checkbox" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "filter-name", children: String(elem) })] }, id));
                }) })] }));
}


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/App */ "./src/app/App.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/store */ "./src/app/store.ts");





var root = document.getElementById("root");
if (!root) {
    throw new Error("root not found");
}
var container = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(root);
container.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, { store: _app_store__WEBPACK_IMPORTED_MODULE_4__.store, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_App__WEBPACK_IMPORTED_MODULE_2__.App, {}) }));


/***/ }),

/***/ "./src/layouts/burger/burger.css":
/*!***************************************!*\
  !*** ./src/layouts/burger/burger.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./burger.css */ "./node_modules/css-loader/dist/cjs.js!./src/layouts/burger/burger.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layouts/burger/burger.tsx":
/*!***************************************!*\
  !*** ./src/layouts/burger/burger.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PositionedMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/routes */ "./src/utils/routes.ts");
/* harmony import */ var _burger_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./burger.css */ "./src/layouts/burger/burger.css");




function PositionedMenu(_a) {
    var opened = _a.opened, setOpened = _a.setOpened, setOpenModal = _a.setOpenModal, isLogged = _a.isLogged;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "menu ".concat(opened ? "opened" : ""), onClick: function () { return setOpened(!opened); }, "aria-label": "Main Menu", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { width: "50", height: "50", viewBox: "0 0 100 100", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { className: "line line1", d: "M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { className: "line line2", d: "M 20,50 H 80" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { className: "line line3", d: "M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", { className: "burger-section ".concat(opened ? "opened-burger" : ""), children: isLogged ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "burger-menu__div", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: _utils_routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES.BASKET, className: "burger-menu__link", children: "Cart" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "burger-menu__div", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: setOpenModal, className: "burger-menu-logout", children: "Logout" }) })] })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: _utils_routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES.LOGIN, className: "burger-menu__link", children: "Login" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: _utils_routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES.REGISTER, className: "burger-menu__link", children: "Register" })] })) })] }));
}


/***/ }),

/***/ "./src/layouts/footer/footer.css":
/*!***************************************!*\
  !*** ./src/layouts/footer/footer.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/layouts/footer/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layouts/footer/footer.tsx":
/*!***************************************!*\
  !*** ./src/layouts/footer/footer.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.css */ "./src/layouts/footer/footer.css");


function Footer() {
    var handlePrevent = function (e) {
        e.preventDefault();
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", { className: "footer", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "footer-describe", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: "/images/logo-70-white.svg", alt: "logo-white" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: "footer-title", children: "Subscribe To Your Newsletter to Stay Updated About Discounts" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: function (e) { return handlePrevent(e); }, className: "footer-form", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", name: "email-subscription", placeholder: "example@email.com", className: "email-subscription" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", name: "submit-button", className: "submit-button", children: ">" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "sub-footer", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "sub-footer_copyright", children: "Copyright \u00A9 2023 Renew Bariatrics, Inc" }) })] }));
}


/***/ }),

/***/ "./src/layouts/header/header.css":
/*!***************************************!*\
  !*** ./src/layouts/header/header.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/layouts/header/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layouts/header/header.tsx":
/*!***************************************!*\
  !*** ./src/layouts/header/header.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/routes */ "./src/utils/routes.ts");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.css */ "./src/layouts/header/header.css");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/button/button */ "./src/components/button/button.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_userApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/userApi */ "./src/api/userApi.ts");
/* harmony import */ var _modalUI_modalUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modalUI/modalUI */ "./src/layouts/modalUI/modalUI.tsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../index */ "./src/layouts/index.ts");










var Header = function () {
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), isLogged = _a[0], setIsLogged = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), openedBurger = _c[0], setOpenedBurger = _c[1];
    var handleNavigate = function (route) {
        navigate(route);
    };
    var handleOpenModal = function () {
        setOpen(true);
    };
    var handleGetToken = function (name) {
        var value = "; ".concat(document.cookie);
        var parts = value.split("; ".concat(name, "="));
        if (parts.length === 2)
            return parts.pop().split(";").shift();
    };
    var accessToken = handleGetToken("accessToken");
    var _d = (0,_api_userApi__WEBPACK_IMPORTED_MODULE_6__.useVerifyUserQuery)(accessToken, {
        skip: !accessToken,
    }), data = _d.data, isSuccess = _d.isSuccess;
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
        if (isSuccess) {
            setIsLogged(true);
        }
    }, [isSuccess]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", { className: "header", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modalUI_modalUI__WEBPACK_IMPORTED_MODULE_7__["default"], { setOpen: setOpen, open: open }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "header-image", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: "/images/logo-70.svg", alt: "logo" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", { className: "header_nav", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: _utils_routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES.HOME, children: "Home" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: _utils_routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES.CATEGORIES, children: "Categories" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "burger-menu", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_8__.PositionedMenu, { opened: openedBurger, setOpenModal: handleOpenModal, setOpened: setOpenedBurger, isLogged: isLogged }) }), !isLogged ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "header-log-buttons", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button_button__WEBPACK_IMPORTED_MODULE_4__["default"], { children: "Registration", func: function () { return handleNavigate(_utils_routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES.REGISTER); }, width: "120px", padding: "5px 5px", borderradius: "20px", fontSize: "16px", textcolor: "#fff" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button_button__WEBPACK_IMPORTED_MODULE_4__["default"], { children: "Login", func: function () { return handleNavigate(_utils_routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES.LOGIN); }, width: "120px", padding: "5px 5px", borderradius: "20px", fontSize: "16px", textcolor: "#fff" })] })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "header_controll", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: "header_buttons", onClick: function () { return handleOpenModal(); }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: "/images/account.svg", alt: "account" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: "/images/bottom-arrow.svg", alt: "bottom-arrow" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "header_buttons", onClick: function () { return handleNavigate(_utils_routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES.BASKET); }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: "/images/orders.svg", alt: "orders" }) })] }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/layouts/imagesView/imagesView.css":
/*!***********************************************!*\
  !*** ./src/layouts/imagesView/imagesView.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_imagesView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./imagesView.css */ "./node_modules/css-loader/dist/cjs.js!./src/layouts/imagesView/imagesView.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_imagesView_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_imagesView_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_imagesView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_imagesView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layouts/imagesView/imagesView.tsx":
/*!***********************************************!*\
  !*** ./src/layouts/imagesView/imagesView.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImagesView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _imagesView_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagesView.css */ "./src/layouts/imagesView/imagesView.css");



function ImagesView(_a) {
    var _b, _c;
    var thing = _a.thing;
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), selected = _d[0], setSelected = _d[1];
    var handleSetSelected = function (id) {
        setSelected(id);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "images-view", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "images-select", children: (_b = thing.images) === null || _b === void 0 ? void 0 : _b.map(function (elem, ids) {
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "small-image", onClick: function () { return handleSetSelected(ids); }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: "image-cart", src: elem, alt: elem }) }, ids));
                }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "image-selected", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: "selected", src: (_c = thing.images) === null || _c === void 0 ? void 0 : _c[selected], alt: "" }) })] }));
}


/***/ }),

/***/ "./src/layouts/index.ts":
/*!******************************!*\
  !*** ./src/layouts/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* reexport safe */ _footer_footer__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Header: () => (/* reexport safe */ _header_header__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   ImagesView: () => (/* reexport safe */ _imagesView_imagesView__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   ModalUI: () => (/* reexport safe */ _modalUI_modalUI__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   PopularProductComp: () => (/* reexport safe */ _popularProductComp_popularProductComp__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   PositionedMenu: () => (/* reexport safe */ _burger_burger__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   StatisticOnMain: () => (/* reexport safe */ _statisticOnMain_statisticOnMain__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   ViewProductDetails: () => (/* reexport safe */ _viewProductDetails_viewProductDetails__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer */ "./src/layouts/footer/footer.tsx");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header */ "./src/layouts/header/header.tsx");
/* harmony import */ var _popularProductComp_popularProductComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popularProductComp/popularProductComp */ "./src/layouts/popularProductComp/popularProductComp.tsx");
/* harmony import */ var _statisticOnMain_statisticOnMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statisticOnMain/statisticOnMain */ "./src/layouts/statisticOnMain/statisticOnMain.tsx");
/* harmony import */ var _viewProductDetails_viewProductDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewProductDetails/viewProductDetails */ "./src/layouts/viewProductDetails/viewProductDetails.tsx");
/* harmony import */ var _imagesView_imagesView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imagesView/imagesView */ "./src/layouts/imagesView/imagesView.tsx");
/* harmony import */ var _modalUI_modalUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modalUI/modalUI */ "./src/layouts/modalUI/modalUI.tsx");
/* harmony import */ var _burger_burger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./burger/burger */ "./src/layouts/burger/burger.tsx");











/***/ }),

/***/ "./src/layouts/modalUI/modalUI.tsx":
/*!*****************************************!*\
  !*** ./src/layouts/modalUI/modalUI.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalUI)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/esm/Box/Box.js");
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Modal */ "./node_modules/@mui/material/esm/Modal/Modal.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/esm/Button/Button.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "250px",
    fontFamily: "Oxygen, sans-serif",
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: "20px",
    boxShadow: 24,
    pt: 2,
    px: 2,
    pb: 2,
};
function ModalUI(_a) {
    var setOpen = _a.setOpen, open = _a.open;
    var handleClose = function () {
        setOpen(false);
    };
    var handleExit = function () {
        document.cookie.split(";").forEach(function (cookie) {
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        });
        window.location.reload();
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], { open: open, onClose: handleClose, "aria-labelledby": "parent-modal-title", "aria-describedby": "parent-modal-description", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], { sx: __assign(__assign({}, style), { width: 250 }), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { id: "parent-modal-title", children: "Exit" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { id: "parent-modal-description", children: "Are you sure you wont to exit? " }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__["default"], { onClick: handleExit, children: "Yes" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__["default"], { onClick: handleClose, children: "No" })] }) }));
}


/***/ }),

/***/ "./src/layouts/popularProductComp/popularProductComp.css":
/*!***************************************************************!*\
  !*** ./src/layouts/popularProductComp/popularProductComp.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popularProductComp_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./popularProductComp.css */ "./node_modules/css-loader/dist/cjs.js!./src/layouts/popularProductComp/popularProductComp.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popularProductComp_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popularProductComp_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_popularProductComp_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_popularProductComp_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layouts/popularProductComp/popularProductComp.tsx":
/*!***************************************************************!*\
  !*** ./src/layouts/popularProductComp/popularProductComp.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _popularProductComp_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popularProductComp.css */ "./src/layouts/popularProductComp/popularProductComp.css");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button/button */ "./src/components/button/button.tsx");
/* harmony import */ var _api_productApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/productApi */ "./src/api/productApi.ts");
/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/card/card */ "./src/components/card/card.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/routes */ "./src/utils/routes.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components */ "./src/components/index.ts");









var PopularProductComp = function () {
    var _a = (0,_api_productApi__WEBPACK_IMPORTED_MODULE_3__.useGetProductsQuery)({ limit: 8, skip: 0 }), data = _a.data, error = _a.error, isLoading = _a.isLoading;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null), addError = _b[0], setError = _b[1];
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    var handleDirectToShop = function () {
        navigate(_utils_routes__WEBPACK_IMPORTED_MODULE_6__.ROUTES.CATEGORIES);
    };
    if (isLoading || error) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Loading...." });
    }
    var productList = data.products;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", { className: "main-page_section", children: [addError && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.AlertMui, { setError: setError, children: addError }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "main-page_direction", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "main-page_title-text", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { className: "main-page_title", children: "Most Popular Products" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "main-page_text", children: "Most popular products" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button_button__WEBPACK_IMPORTED_MODULE_2__["default"], { padding: "5px 5px", textcolor: "#fff", borderradius: "20px", fontSize: "16px", width: "120px", func: handleDirectToShop, children: "View All" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "main-page_card-container", children: productList.map(function (product) {
                    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_card_card__WEBPACK_IMPORTED_MODULE_4__["default"], { setError: setError, thing: product }, product.id);
                }) })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularProductComp);


/***/ }),

/***/ "./src/layouts/statisticOnMain/statisticOnMain.css":
/*!*********************************************************!*\
  !*** ./src/layouts/statisticOnMain/statisticOnMain.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_statisticOnMain_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./statisticOnMain.css */ "./node_modules/css-loader/dist/cjs.js!./src/layouts/statisticOnMain/statisticOnMain.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_statisticOnMain_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_statisticOnMain_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_statisticOnMain_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_statisticOnMain_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layouts/statisticOnMain/statisticOnMain.tsx":
/*!*********************************************************!*\
  !*** ./src/layouts/statisticOnMain/statisticOnMain.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button/button */ "./src/components/button/button.tsx");
/* harmony import */ var _statisticOnMain_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statisticOnMain.css */ "./src/layouts/statisticOnMain/statisticOnMain.css");



var StatisticOnMain = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "statistic-div", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "statistic-container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "statistic-direct", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: "statistic-title", children: "Have a Look at Our Unique Selling Proportions" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button_button__WEBPACK_IMPORTED_MODULE_1__["default"], { children: "Read more", textcolor: "#000", backgroundcolor: "#fff", borderradius: "30px", fontSize: "20px", padding: "5px 10px", width: "150px", func: function () { } })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "statistic-desc", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "statistic-desc_title", children: "Our solutions are designed for those who value quality and reliability. We offer products that help businesses grow faster, work more efficiently, and achieve better results. Each tool undergoes thorough testing to ensure its effectiveness and durability." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", { className: "statistic-desc_section", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", { className: "statistic-desc_article", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: "statistic-desc_article-title", children: "99%" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "statistic-desc_article-description", children: "Clients report increased efficiency" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", { className: "statistic-desc_article", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: "statistic-desc_article-title", children: "100%" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "statistic-desc_article-description", children: "Meeting standards and expectations" })] })] })] })] }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatisticOnMain);


/***/ }),

/***/ "./src/layouts/viewProductDetails/viewProductDetails.css":
/*!***************************************************************!*\
  !*** ./src/layouts/viewProductDetails/viewProductDetails.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_viewProductDetails_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./viewProductDetails.css */ "./node_modules/css-loader/dist/cjs.js!./src/layouts/viewProductDetails/viewProductDetails.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_viewProductDetails_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_viewProductDetails_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_viewProductDetails_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_viewProductDetails_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layouts/viewProductDetails/viewProductDetails.tsx":
/*!***************************************************************!*\
  !*** ./src/layouts/viewProductDetails/viewProductDetails.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewProductDetails: () => (/* binding */ ViewProductDetails),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _viewProductDetails_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewProductDetails.css */ "./src/layouts/viewProductDetails/viewProductDetails.css");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./src/components/index.ts");
/* harmony import */ var _mui_material_Rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Rating */ "./node_modules/@mui/material/esm/Rating/Rating.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./src/layouts/index.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/hooks */ "./src/app/hooks.ts");
/* harmony import */ var _store_userProductSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/userProductSlice */ "./src/store/userProductSlice.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);








var ViewProductDetails = (0,react__WEBPACK_IMPORTED_MODULE_7__.memo)(function (_a) {
    var product = _a.product;
    var dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null), error = _b[0], setError = _b[1];
    var thing = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(function (state) { return state.userProduct.product; });
    var handleAddToBasket = function (_a) {
        var product = _a.product;
        if (thing.every(function (elem) { return elem.title !== product.title; })) {
            dispatch((0,_store_userProductSlice__WEBPACK_IMPORTED_MODULE_6__.setProducts)(product));
            dispatch((0,_store_userProductSlice__WEBPACK_IMPORTED_MODULE_6__.addTotalSum)(product.price));
        }
        else {
            setError("You already add this product to cart");
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", { className: "product-card", children: [error && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.AlertMui, { setError: setError, children: error }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_4__.ImagesView, { thing: product }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "product-card-description", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "product-card-main-information", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "product-card-headling", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: "product-card-title", children: product.title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { className: "product-card-price", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: ["$", product.price] }), " |", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Rating__WEBPACK_IMPORTED_MODULE_3__["default"], { name: "read-only", value: product.rating, readOnly: true }), " (", product.reviews.length, " reviews)"] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "product-card-description__p", children: product.description }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { className: "product-card-list", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: ["Weight: ", product.weight, " lb"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: ["Width: ", product.dimensions.width, " inch"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: ["Height: ", product.dimensions.height, " inch"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: ["Depth: ", product.dimensions.depth, " inch"] })] })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "product-card-controll-panel", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "product-card-add-to-cart", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.Button, { borderradius: "20px", fontSize: "18px", width: "100%", backgroundcolor: "#000", padding: "5px 0", textcolor: "#fff", children: "Add to Cart", func: function () { return handleAddToBasket({ product: product }); } }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.Button, { borderradius: "20px", fontSize: "18px", width: "100%", backgroundcolor: "#fff", padding: "5px 0", borderColor: "#000", textcolor: "#000", children: "Buy now", func: function () { } })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", { className: "product-card-delivery", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: "/images/worldwide.svg", alt: "worldwide" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Free worldwide shipping on all orders over $100" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", { className: "product-card-delivery", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: "/images/delivery.svg", alt: "delivery" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["Delivers in: ", product.shippingInformation] })] })] })] })] }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_7__.memo)(ViewProductDetails));


/***/ }),

/***/ "./src/pages/auth/auth.lazy.tsx":
/*!**************************************!*\
  !*** ./src/pages/auth/auth.lazy.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyAuth: () => (/* binding */ LazyAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var LazyAuth = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () { return __webpack_require__.e(/*! import() */ "src_pages_auth_auth_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./auth */ "./src/pages/auth/auth.tsx")); });


/***/ }),

/***/ "./src/pages/categories/categories.lazy.tsx":
/*!**************************************************!*\
  !*** ./src/pages/categories/categories.lazy.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriesLazy: () => (/* binding */ CategoriesLazy)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CategoriesLazy = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
    return __webpack_require__.e(/*! import() */ "src_pages_categories_categoriesPage_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./categoriesPage */ "./src/pages/categories/categoriesPage.tsx"));
});


/***/ }),

/***/ "./src/pages/homePage/homePage.css":
/*!*****************************************!*\
  !*** ./src/pages/homePage/homePage.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_homePage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./homePage.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/homePage/homePage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_homePage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_homePage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_homePage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_homePage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/homePage/homePage.tsx":
/*!*****************************************!*\
  !*** ./src/pages/homePage/homePage.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _layouts_popularProductComp_popularProductComp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/popularProductComp/popularProductComp */ "./src/layouts/popularProductComp/popularProductComp.tsx");
/* harmony import */ var _layouts_statisticOnMain_statisticOnMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/statisticOnMain/statisticOnMain */ "./src/layouts/statisticOnMain/statisticOnMain.tsx");
/* harmony import */ var _homePage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homePage.css */ "./src/pages/homePage/homePage.css");




function HomePage() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", { className: "home-page", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "home-page_entire-block", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", { className: "home-page_article", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { className: "home-page_title", children: "Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "home-page_text", children: "We create spaces where quality and comfort are the norm. Our products help make your home more comfortable and your work more convenient. Choose items that will complement your style and last for years to come." })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layouts_popularProductComp_popularProductComp__WEBPACK_IMPORTED_MODULE_1__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layouts_statisticOnMain_statisticOnMain__WEBPACK_IMPORTED_MODULE_2__["default"], {})] }));
}


/***/ }),

/***/ "./src/pages/index.ts":
/*!****************************!*\
  !*** ./src/pages/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Auth: () => (/* reexport safe */ _auth_auth_lazy__WEBPACK_IMPORTED_MODULE_0__.LazyAuth),
/* harmony export */   CategoriesPage: () => (/* reexport safe */ _categories_categories_lazy__WEBPACK_IMPORTED_MODULE_1__.CategoriesLazy),
/* harmony export */   HomePage: () => (/* reexport safe */ _homePage_homePage__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Registration: () => (/* reexport safe */ _registration_registration_lazy__WEBPACK_IMPORTED_MODULE_2__.RegistrationLazy),
/* harmony export */   ShopList: () => (/* reexport safe */ _shopList_shopList_lazy__WEBPACK_IMPORTED_MODULE_3__.ShopListLazy),
/* harmony export */   ViewProduct: () => (/* reexport safe */ _viewProduct_viewProduct_lazy__WEBPACK_IMPORTED_MODULE_4__.ViewProductLazy)
/* harmony export */ });
/* harmony import */ var _auth_auth_lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.lazy */ "./src/pages/auth/auth.lazy.tsx");
/* harmony import */ var _categories_categories_lazy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories/categories.lazy */ "./src/pages/categories/categories.lazy.tsx");
/* harmony import */ var _registration_registration_lazy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration/registration.lazy */ "./src/pages/registration/registration.lazy.tsx");
/* harmony import */ var _shopList_shopList_lazy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopList/shopList.lazy */ "./src/pages/shopList/shopList.lazy.tsx");
/* harmony import */ var _viewProduct_viewProduct_lazy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewProduct/viewProduct.lazy */ "./src/pages/viewProduct/viewProduct.lazy.tsx");
/* harmony import */ var _homePage_homePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homePage/homePage */ "./src/pages/homePage/homePage.tsx");









/***/ }),

/***/ "./src/pages/registration/registration.lazy.tsx":
/*!******************************************************!*\
  !*** ./src/pages/registration/registration.lazy.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistrationLazy: () => (/* binding */ RegistrationLazy)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var RegistrationLazy = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
    return __webpack_require__.e(/*! import() */ "src_pages_registration_registration_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./registration */ "./src/pages/registration/registration.tsx"));
});


/***/ }),

/***/ "./src/pages/shopList/shopList.lazy.tsx":
/*!**********************************************!*\
  !*** ./src/pages/shopList/shopList.lazy.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShopListLazy: () => (/* binding */ ShopListLazy)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ShopListLazy = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
    return __webpack_require__.e(/*! import() */ "src_pages_shopList_shopList_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./shopList */ "./src/pages/shopList/shopList.tsx"));
});


/***/ }),

/***/ "./src/pages/viewProduct/viewProduct.lazy.tsx":
/*!****************************************************!*\
  !*** ./src/pages/viewProduct/viewProduct.lazy.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewProductLazy: () => (/* binding */ ViewProductLazy)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ViewProductLazy = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () { return __webpack_require__.e(/*! import() */ "src_pages_viewProduct_viewProduct_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./viewProduct */ "./src/pages/viewProduct/viewProduct.tsx")); });


/***/ }),

/***/ "./src/store/userProductSlice.ts":
/*!***************************************!*\
  !*** ./src/store/userProductSlice.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTotalSum: () => (/* binding */ addTotalSum),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   deleteProduct: () => (/* binding */ deleteProduct),
/* harmony export */   minusTotalSum: () => (/* binding */ minusTotalSum),
/* harmony export */   setProducts: () => (/* binding */ setProducts)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
var _a;

var initialState = {
    product: [],
    subtotal: 0,
    error: null,
};
var userProductSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "userProducts",
    initialState: initialState,
    reducers: {
        setProducts: function (state, actions) {
            if (state.product.includes(actions.payload)) {
                state.error = "You currently added this product to cart";
                return;
            }
            state.product = state.product.concat(actions.payload);
        },
        deleteProduct: function (state, actions) {
            state.product = state.product.filter(function (elem) { return elem.id !== actions.payload; });
        },
        addTotalSum: function (state, actions) {
            state.subtotal =
                Math.round((state.subtotal + actions.payload) * 100) / 100;
        },
        minusTotalSum: function (state, actions) {
            state.subtotal =
                Math.round((state.subtotal - actions.payload) * 100) / 100;
        },
    },
});
var setProducts = (_a = userProductSlice.actions, _a.setProducts), deleteProduct = _a.deleteProduct, addTotalSum = _a.addTotalSum, minusTotalSum = _a.minusTotalSum;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userProductSlice.reducer);


/***/ }),

/***/ "./src/utils/routes.ts":
/*!*****************************!*\
  !*** ./src/utils/routes.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
var ROUTES = {
    HOME: "/",
    REGISTER: "/registration",
    LOGIN: "/login",
    CATEGORIES: "/categories",
    BASKET: "/basket",
    VIEWPRODUCT: "/categories/:id",
};


/***/ }),

/***/ "./src/utils/timeConvert.ts":
/*!**********************************!*\
  !*** ./src/utils/timeConvert.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertDate: () => (/* binding */ convertDate)
/* harmony export */ });
var convertDate = function (dateTime) {
    var dateObj = new Date(dateTime);
    return ("".concat(dateObj.getDate() < 10 ? "0".concat(dateObj.getDate()) : "".concat(dateObj.getDate()), ".") +
        "".concat(dateObj.getMonth() + 1 < 10 ? "0".concat(dateObj.getMonth() + 1) : "".concat(dateObj.getMonth() + 1), ".") +
        "".concat(dateObj.getFullYear(), "\n     ").concat(dateObj.getHours() < 10 ? "0".concat(dateObj.getHours()) : "".concat(dateObj.getHours()), ":") +
        "".concat(dateObj.getMinutes() < 10 ? "0".concat(dateObj.getMinutes()) : "".concat(dateObj.getMinutes()), ":") +
        "".concat(dateObj.getSeconds() < 10 ? "0".concat(dateObj.getSeconds()) : "".concat(dateObj.getSeconds())));
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-13d97e"], () => (__webpack_exec__("./src/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ007QUFDUCxpRUFBZSx3QkFBd0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaENqQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvYXBwL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9jb21wb25lbnRzL2NhcmQvY2FyZC5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvY29tcG9uZW50cy9jb250cm9sbFBhbmVsQ2FyZC9Db250cm9sbFBhbmVsQ2FyZC5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvYmFzZUlucHV0L2lucHV0LmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9jb21wb25lbnRzL3BheW1lbnREaXYvcGF5bWVudERpdi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0QmFza2V0L3Byb2R1Y3RCYXNrZXQuY3NzIiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL2NvbXBvbmVudHMvcmV2aWV3L3Jldmlldy5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvY29tcG9uZW50cy9zb3J0aW5nU2VjdGlvbi9zb3J0aW5nU2VjdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvbGF5b3V0cy9idXJnZXIvYnVyZ2VyLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY3NzIiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL2xheW91dHMvaGVhZGVyL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvbGF5b3V0cy9pbWFnZXNWaWV3L2ltYWdlc1ZpZXcuY3NzIiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL2xheW91dHMvcG9wdWxhclByb2R1Y3RDb21wL3BvcHVsYXJQcm9kdWN0Q29tcC5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvbGF5b3V0cy9zdGF0aXN0aWNPbk1haW4vc3RhdGlzdGljT25NYWluLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9sYXlvdXRzL3ZpZXdQcm9kdWN0RGV0YWlscy92aWV3UHJvZHVjdERldGFpbHMuY3NzIiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL3BhZ2VzL2hvbWVQYWdlL2hvbWVQYWdlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9hcGkvcHJvZHVjdEFwaS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9hcGkvdXNlckFwaS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9hcHAvQXBwLnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9hcHAvaG9va3MudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvYXBwL2luZGV4LmNzcz80MjFkIiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL2FwcC9zdG9yZS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHN4Iiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNzcz9kOTQxIiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL2NvbXBvbmVudHMvY2FyZC9jYXJkLnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsUGFuZWxDYXJkL0NvbnRyb2xsUGFuZWxDYXJkLmNzcz9hYmE3Iiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbGxQYW5lbENhcmQvY29udHJvbGxQYW5lbENhcmQudHN4Iiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvYmFzZUlucHV0L2lucHV0LmNzcz9lNWE2Iiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL2Jhc2VJbnB1dC9pbnB1dC50c3giLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvY29tcG9uZW50cy9wYXltZW50RGl2L3BheW1lbnREaXYuY3NzPzEwMmMiLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvY29tcG9uZW50cy9wYXltZW50RGl2L3BheW1lbnREaXYudHN4Iiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdEJhc2tldC9wcm9kdWN0QmFza2V0LmNzcz9mYmZhIiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdEJhc2tldC9wcm9kdWN0QmFza2V0LnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9jb21wb25lbnRzL3Jldmlldy9yZXZpZXcuY3NzPzBjMTQiLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvY29tcG9uZW50cy9yZXZpZXcvcmV2aWV3LnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9jb21wb25lbnRzL3NvcnRpbmdTZWN0aW9uL3NvcnRpbmdTZWN0aW9uLmNzcz83NDQ3Iiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL2NvbXBvbmVudHMvc29ydGluZ1NlY3Rpb24vc29ydGluZ1NlY3Rpb24udHN4Iiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9sYXlvdXRzL2J1cmdlci9idXJnZXIuY3NzPzdiOTciLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvbGF5b3V0cy9idXJnZXIvYnVyZ2VyLnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY3NzPzY0NjQiLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvbGF5b3V0cy9mb290ZXIvZm9vdGVyLnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9sYXlvdXRzL2hlYWRlci9oZWFkZXIuY3NzPzEwMDciLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvbGF5b3V0cy9oZWFkZXIvaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9sYXlvdXRzL2ltYWdlc1ZpZXcvaW1hZ2VzVmlldy5jc3M/ZGUwMiIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9sYXlvdXRzL2ltYWdlc1ZpZXcvaW1hZ2VzVmlldy50c3giLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvbGF5b3V0cy9pbmRleC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9sYXlvdXRzL21vZGFsVUkvbW9kYWxVSS50c3giLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvbGF5b3V0cy9wb3B1bGFyUHJvZHVjdENvbXAvcG9wdWxhclByb2R1Y3RDb21wLmNzcz82NDU3Iiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL2xheW91dHMvcG9wdWxhclByb2R1Y3RDb21wL3BvcHVsYXJQcm9kdWN0Q29tcC50c3giLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvbGF5b3V0cy9zdGF0aXN0aWNPbk1haW4vc3RhdGlzdGljT25NYWluLmNzcz8wYjk0Iiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL2xheW91dHMvc3RhdGlzdGljT25NYWluL3N0YXRpc3RpY09uTWFpbi50c3giLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvbGF5b3V0cy92aWV3UHJvZHVjdERldGFpbHMvdmlld1Byb2R1Y3REZXRhaWxzLmNzcz9iNTY1Iiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL2xheW91dHMvdmlld1Byb2R1Y3REZXRhaWxzL3ZpZXdQcm9kdWN0RGV0YWlscy50c3giLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvcGFnZXMvYXV0aC9hdXRoLmxhenkudHN4Iiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL3BhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5sYXp5LnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9wYWdlcy9ob21lUGFnZS9ob21lUGFnZS5jc3M/N2ZmYSIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9wYWdlcy9ob21lUGFnZS9ob21lUGFnZS50c3giLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvcGFnZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1hcHAvLi9zcmMvcGFnZXMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5sYXp5LnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9wYWdlcy9zaG9wTGlzdC9zaG9wTGlzdC5sYXp5LnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9wYWdlcy92aWV3UHJvZHVjdC92aWV3UHJvZHVjdC5sYXp5LnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9zdG9yZS91c2VyUHJvZHVjdFNsaWNlLnRzIiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL3V0aWxzL3JvdXRlcy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy91dGlscy90aW1lQ29udmVydC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI3Jvb3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtLU94eWdlbjogXCJPeHlnZW5cIiwgc2Fucy1zZXJpZjtcbiAgLS1FeG86IEV4byBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1XaGl0ZTogI2ZmZmZmZjtcbiAgLS1CYWNrZ3JvdW5kQmxhY2s6ICMyODI4Mjg7XG4gIC0tSG92ZXJCdXR0b25CbGFjazogIzRiNGI0YjtcbiAgLS1Ub3RhbEJsYWNrOiAjMDAwMDAwO1xuICAtLUhvdmVyQnV0dG9uR3JheTogI2M3YzdjNztcbiAgLS1CYWNrZ3JvdW5kUmV2aWV3czogI2Y4ZjhmODtcbiAgLS1Cb3JkZXJSZXZpZXc6ICNkM2QzZDM7XG59XG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxucCxcbmgyIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLU94eWdlbik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBOztFQUVFLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjcm9vdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC0tT3h5Z2VuOiBcXFwiT3h5Z2VuXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tRXhvOiBFeG8gc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLS1XaGl0ZTogI2ZmZmZmZjtcXG4gIC0tQmFja2dyb3VuZEJsYWNrOiAjMjgyODI4O1xcbiAgLS1Ib3ZlckJ1dHRvbkJsYWNrOiAjNGI0YjRiO1xcbiAgLS1Ub3RhbEJsYWNrOiAjMDAwMDAwO1xcbiAgLS1Ib3ZlckJ1dHRvbkdyYXk6ICNjN2M3Yzc7XFxuICAtLUJhY2tncm91bmRSZXZpZXdzOiAjZjhmOGY4O1xcbiAgLS1Cb3JkZXJSZXZpZXc6ICNkM2QzZDM7XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5wLFxcbmgyIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1PeHlnZW4pO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jYXJkLWRpdiB7XG4gIHdpZHRoOiAyODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuLmNhcmQtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1Ub3RhbEJsYWNrKTtcbn1cbi5jYXJkLXByaWNlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG59XG4uY2FyZC1jb250cm9sbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2FyZC1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1Ub3RhbEJsYWNrKTtcbiAgcGFkZGluZzogM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLmNhcmQtYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtFQUN0QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYXJkLWRpdiB7XFxuICB3aWR0aDogMjgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uY2FyZC1pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jYXJkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1Ub3RhbEJsYWNrKTtcXG59XFxuLmNhcmQtcHJpY2Uge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uY2FyZC1jb250cm9sbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmNhcmQtYnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLVRvdGFsQmxhY2spO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcbiAgLmNhcmQtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnByb2R1Y3QtY29udHJvbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsUGFuZWxDYXJkL0NvbnRyb2xsUGFuZWxDYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnByb2R1Y3QtY29udHJvbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaW5wdXQge1xuICB3aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJhY2tncm91bmRCbGFjayk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLVdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL2Jhc2VJbnB1dC9pbnB1dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW5wdXQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmFja2dyb3VuZEJsYWNrKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLVdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucGF5bWVudC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XG59XG4ucGF5bWVudC10aXRsZSB7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5wYXltZW50LXN1bSB7XG4gIGNvbG9yOiByZ2IoMTczLCAxNzMsIDE3Myk7XG4gIG1hcmdpbjogMjBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvcGF5bWVudERpdi9wYXltZW50RGl2LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBheW1lbnQtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xcbn1cXG4ucGF5bWVudC10aXRsZSB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcbi5wYXltZW50LXN1bSB7XFxuICBjb2xvcjogcmdiKDE3MywgMTczLCAxNzMpO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wcm9kdWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIGdhcDogNXB4O1xyXG59XHJcbi5wcm9kdWN0LWxlZnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG4ucHJvZHVjdC1kZXNjIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBnYXA6IDEwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnByb2R1Y3QtaW1nIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLnByb2R1Y3QtdGV4dCB7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1yaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogNXB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLnByb2R1Y3Qge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0QmFza2V0L3Byb2R1Y3RCYXNrZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsUUFBUTtBQUNWO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsUUFBUTtBQUNWO0FBQ0E7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcm9kdWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcbi5wcm9kdWN0LWxlZnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbi5wcm9kdWN0LWRlc2Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5wcm9kdWN0LWltZyB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuLnByb2R1Y3QtdGV4dCB7XFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LXJpZ2h0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcclxcbiAgLnByb2R1Y3Qge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5yZXZpZXctdXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA3MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLUJvcmRlclJldmlldyk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ucmV2aWV3LXJhdGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9yZXZpZXcvcmV2aWV3LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJldmlldy11c2VyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNzAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tQm9yZGVyUmV2aWV3KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4ucmV2aWV3LXJhdGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZpbHRlcnMge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTE5LCAxMTksIDExOSk7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XHJcbn1cclxuLmZpbHRlcnMtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBjb2xvcjogdmFyKC0tQmFja2dyb3VuZEJsYWNrKTtcclxufVxyXG4uZmlsdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGdhcDogMjBweDtcclxufVxyXG4uZmlsdGVyLW5hbWUge1xyXG4gIGNvbG9yOiB2YXIoLS1CYWNrZ3JvdW5kQmxhY2spO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uZmlsdGVycy1kaXNwbGF5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIGdhcDogNXB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5maWx0ZXJzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG4gIC5vcGVuLWZpbHRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9zb3J0aW5nU2VjdGlvbi9zb3J0aW5nU2VjdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsNEJBQTRCO0lBQzVCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZpbHRlcnMge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTE5LCAxMTksIDExOSk7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xcclxcbn1cXHJcXG4uZmlsdGVycy10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tQmFja2dyb3VuZEJsYWNrKTtcXHJcXG59XFxyXFxuLmZpbHRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcbi5maWx0ZXItbmFtZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tQmFja2dyb3VuZEJsYWNrKTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLmZpbHRlcnMtZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5maWx0ZXJzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAwcHgpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH1cXHJcXG4gIC5vcGVuLWZpbHRlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5idXJnZXItbWVudSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uYnVyZ2VyLXNlY3Rpb24ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNTBweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLm9wZW5lZC1idXJnZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tVG90YWxCbGFjayk7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogODBweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbi5idXJnZXItbWVudV9fbGluayB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1PeHlnZW4pO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tVG90YWxCbGFjayk7XHJcbn1cclxuLmJ1cmdlci1tZW51LWxvZ291dCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LWZhbWlseTogdmFyKC0tT3h5Z2VuKTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAuYnVyZ2VyLW1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLmhlYWRlci1sb2ctYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuaGVhZGVyX2NvbnRyb2xsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dHMvYnVyZ2VyL2J1cmdlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJ1cmdlci1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5idXJnZXItc2VjdGlvbiB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1MHB4KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG4ub3BlbmVkLWJ1cmdlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1Ub3RhbEJsYWNrKTtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0b3A6IDgwcHg7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcbi5idXJnZXItbWVudV9fbGluayB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tT3h5Z2VuKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1Ub3RhbEJsYWNrKTtcXHJcXG59XFxyXFxuLmJ1cmdlci1tZW51LWxvZ291dCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1PeHlnZW4pO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcclxcbiAgLmJ1cmdlci1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG4gIC5oZWFkZXItbG9nLWJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgLmhlYWRlcl9jb250cm9sbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZvb3RlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmFja2dyb3VuZEJsYWNrKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbn1cclxuLnN1Yi1mb290ZXIge1xyXG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHZhcigtLVdoaXRlKTtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uZm9vdGVyLWRlc2NyaWJlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAzMHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvb3Rlci10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3ViLWZvb3Rlcl9jb3B5cmlnaHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcclxuICBmb250LWZhbWlseTogdmFyKC0tRXhvKTtcclxufVxyXG4uZW1haWwtc3Vic2NyaXB0aW9uIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmFja2dyb3VuZEJsYWNrKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1XaGl0ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XHJcbn1cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tV2hpdGUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CYWNrZ3JvdW5kQmxhY2spO1xyXG4gIG1hcmdpbjogMDtcclxuICB0b3A6IDRweDtcclxuICByaWdodDogNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XHJcbn1cclxuLnN1Ym1pdC1idXR0b246YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CYWNrZ3JvdW5kQmxhY2spO1xyXG59XHJcbi5mb290ZXItZm9ybSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xyXG4gIC5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhvdmVyQnV0dG9uQmxhY2spO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmVtYWlsLXN1YnNjcmlwdGlvbiB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFO0lBQ0UseUNBQXlDO0lBQ3pDLG9CQUFvQjtJQUNwQixlQUFlO0VBQ2pCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJhY2tncm91bmRCbGFjayk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXHJcXG59XFxyXFxuLnN1Yi1mb290ZXIge1xcclxcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgdmFyKC0tV2hpdGUpO1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG4uZm9vdGVyLWRlc2NyaWJlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zdWItZm9vdGVyX2NvcHlyaWdodCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjogdmFyKC0tV2hpdGUpO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLUV4byk7XFxyXFxufVxcclxcbi5lbWFpbC1zdWJzY3JpcHRpb24ge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmFja2dyb3VuZEJsYWNrKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLVdoaXRlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcXHJcXG59XFxyXFxuLnN1Ym1pdC1idXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1XaGl0ZSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmFja2dyb3VuZEJsYWNrKTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHRvcDogNHB4O1xcclxcbiAgcmlnaHQ6IDVweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxyXFxufVxcclxcbi5zdWJtaXQtYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CYWNrZ3JvdW5kQmxhY2spO1xcclxcbn1cXHJcXG4uZm9vdGVyLWZvcm0ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG4gIC5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSG92ZXJCdXR0b25CbGFjayk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAuZW1haWwtc3Vic2NyaXB0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDI4MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5oZWFkZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDQwcHggMDtcclxufVxyXG4uaGVhZGVyX25hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGdhcDogMzBweDtcclxufVxyXG4uaGVhZGVyX2NvbnRyb2xsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5oZWFkZXJfYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmhlYWRlcl9uYXYgPiBhIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tT3h5Z2VuKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLVRvdGFsQmxhY2spO1xyXG59XHJcblxyXG4uaGVhZGVyLWxvZy1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmhlYWRlcl9idXR0b24ge1xyXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tVG90YWxCbGFjayk7XHJcbn1cclxuLm1lbnUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5saW5lIHtcclxuICBmaWxsOiBub25lO1xyXG4gIHN0cm9rZTogYmxhY2s7XHJcbiAgc3Ryb2tlLXdpZHRoOiA2O1xyXG4gIHRyYW5zaXRpb246XHJcbiAgICBzdHJva2UtZGFzaGFycmF5IDYwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXHJcbiAgICBzdHJva2UtZGFzaG9mZnNldCA2MDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG59XHJcbi5saW5lMSB7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogNjAgMjA3O1xyXG4gIHN0cm9rZS13aWR0aDogNjtcclxufVxyXG4ubGluZTIge1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDYwIDYwO1xyXG4gIHN0cm9rZS13aWR0aDogNjtcclxufVxyXG4ubGluZTMge1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDYwIDIwNztcclxuICBzdHJva2Utd2lkdGg6IDY7XHJcbn1cclxuLm9wZW5lZCAubGluZTEge1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDkwIDIwNztcclxuICBzdHJva2UtZGFzaG9mZnNldDogLTEzNDtcclxuICBzdHJva2Utd2lkdGg6IDY7XHJcbn1cclxuLm9wZW5lZCAubGluZTIge1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDEgNjA7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zMDtcclxuICBzdHJva2Utd2lkdGg6IDY7XHJcbn1cclxuLm9wZW5lZCAubGluZTMge1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDkwIDIwNztcclxuICBzdHJva2UtZGFzaG9mZnNldDogLTEzNDtcclxuICBzdHJva2Utd2lkdGg6IDY7XHJcbn1cclxuXHJcbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xyXG4gIC5oZWFkZXJfbmF2ID4gYTpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tSG92ZXJCdXR0b25HcmF5KTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dHMvaGVhZGVyL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZjs7d0RBRXNEO0FBQ3hEO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkI7SUFDN0Isc0JBQXNCO0VBQ3hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogNDBweCAwO1xcclxcbn1cXHJcXG4uaGVhZGVyX25hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuLmhlYWRlcl9jb250cm9sbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyX2J1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyX25hdiA+IGEge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLU94eWdlbik7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tVG90YWxCbGFjayk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbG9nLWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkZXJfYnV0dG9uIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1Ub3RhbEJsYWNrKTtcXHJcXG59XFxyXFxuLm1lbnUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuLmxpbmUge1xcclxcbiAgZmlsbDogbm9uZTtcXHJcXG4gIHN0cm9rZTogYmxhY2s7XFxyXFxuICBzdHJva2Utd2lkdGg6IDY7XFxyXFxuICB0cmFuc2l0aW9uOlxcclxcbiAgICBzdHJva2UtZGFzaGFycmF5IDYwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXFxyXFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0IDYwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcbi5saW5lMSB7XFxyXFxuICBzdHJva2UtZGFzaGFycmF5OiA2MCAyMDc7XFxyXFxuICBzdHJva2Utd2lkdGg6IDY7XFxyXFxufVxcclxcbi5saW5lMiB7XFxyXFxuICBzdHJva2UtZGFzaGFycmF5OiA2MCA2MDtcXHJcXG4gIHN0cm9rZS13aWR0aDogNjtcXHJcXG59XFxyXFxuLmxpbmUzIHtcXHJcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDYwIDIwNztcXHJcXG4gIHN0cm9rZS13aWR0aDogNjtcXHJcXG59XFxyXFxuLm9wZW5lZCAubGluZTEge1xcclxcbiAgc3Ryb2tlLWRhc2hhcnJheTogOTAgMjA3O1xcclxcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMzQ7XFxyXFxuICBzdHJva2Utd2lkdGg6IDY7XFxyXFxufVxcclxcbi5vcGVuZWQgLmxpbmUyIHtcXHJcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDEgNjA7XFxyXFxuICBzdHJva2UtZGFzaG9mZnNldDogLTMwO1xcclxcbiAgc3Ryb2tlLXdpZHRoOiA2O1xcclxcbn1cXHJcXG4ub3BlbmVkIC5saW5lMyB7XFxyXFxuICBzdHJva2UtZGFzaGFycmF5OiA5MCAyMDc7XFxyXFxuICBzdHJva2UtZGFzaG9mZnNldDogLTEzNDtcXHJcXG4gIHN0cm9rZS13aWR0aDogNjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAuaGVhZGVyX25hdiA+IGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tSG92ZXJCdXR0b25HcmF5KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaW1hZ2VzLXNlbGVjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcbi5pbWFnZXMtdmlldyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAzMHB4O1xyXG59XHJcbi5zbWFsbC1pbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMjBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbWFnZS1jYXJ0IHtcclxuICBtYXgtd2lkdGg6IDEyMHB4O1xyXG59XHJcbi5zZWxlY3RlZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcclxuICAuc21hbGwtaW1hZ2UgOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDhweCAxMHB4IDIxcHggLThweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5pbWFnZXMtdmlldyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICB3aWR0aDogOTclO1xyXG4gIH1cclxuICAuc2VsZWN0ZWQge1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICB9XHJcbiAgLmltYWdlcy1zZWxlY3Qge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgLmltYWdlLWNhcnQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICB9XHJcbiAgLnNtYWxsLWltYWdlIHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmltYWdlLWNhcnQge1xyXG4gICAgbWF4LXdpZHRoOiA3MHB4O1xyXG4gIH1cclxuICAuc21hbGwtaW1hZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiA3MHB4O1xyXG4gIH1cclxuICAucHJvZHVjdC1jYXJkLXByaWNlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5yZXZpZXctdXNlciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXRzL2ltYWdlc1ZpZXcvaW1hZ2VzVmlldy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsK0NBQStDO0lBQy9DLG9CQUFvQjtFQUN0QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7SUFDOUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pbWFnZXMtc2VsZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG4uaW1hZ2VzLXZpZXcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuLnNtYWxsLWltYWdlIHtcXHJcXG4gIG1heC13aWR0aDogMTIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmltYWdlLWNhcnQge1xcclxcbiAgbWF4LXdpZHRoOiAxMjBweDtcXHJcXG59XFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWluLXdpZHRoOiAyMDBweDtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcclxcbiAgLnNtYWxsLWltYWdlIDpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDhweCAxMHB4IDIxcHggLThweCByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5pbWFnZXMtdmlldyB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gICAgd2lkdGg6IDk3JTtcXHJcXG4gIH1cXHJcXG4gIC5zZWxlY3RlZCB7XFxyXFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICB9XFxyXFxuICAuaW1hZ2VzLXNlbGVjdCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB9XFxyXFxuICAuaW1hZ2UtY2FydCB7XFxyXFxuICAgIG1heC13aWR0aDogMTAwcHg7XFxyXFxuICB9XFxyXFxuICAuc21hbGwtaW1hZ2Uge1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgLmltYWdlLWNhcnQge1xcclxcbiAgICBtYXgtd2lkdGg6IDcwcHg7XFxyXFxuICB9XFxyXFxuICAuc21hbGwtaW1hZ2Uge1xcclxcbiAgICBtYXgtd2lkdGg6IDcwcHg7XFxyXFxuICB9XFxyXFxuICAucHJvZHVjdC1jYXJkLXByaWNlIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG4gIC5yZXZpZXctdXNlciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1haW4tcGFnZV9zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogNDBweCAwO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG4ubWFpbi1wYWdlX2RpcmVjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5tYWluLXBhZ2VfdGl0bGUtdGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDMwcHg7XHJcbn1cclxuLm1haW4tcGFnZV90aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ubWFpbi1wYWdlX3RleHQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ubWFpbi1wYWdlX2NhcmQtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMzBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLm1haW4tcGFnZV90aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dHMvcG9wdWxhclByb2R1Y3RDb21wL3BvcHVsYXJQcm9kdWN0Q29tcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7QUFDWDtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluLXBhZ2Vfc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDQwcHggMDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuLm1haW4tcGFnZV9kaXJlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5tYWluLXBhZ2VfdGl0bGUtdGV4dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuLm1haW4tcGFnZV90aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDM2cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5tYWluLXBhZ2VfdGV4dCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5tYWluLXBhZ2VfY2FyZC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAubWFpbi1wYWdlX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zdGF0aXN0aWMtZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmFja2dyb3VuZEJsYWNrKTtcclxufVxyXG4uc3RhdGlzdGljLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG4uc3RhdGlzdGljLXRpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XHJcbn1cclxuLnN0YXRpc3RpYy1kaXJlY3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuLnN0YXRpc3RpYy1kZXNjIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogNjBweDtcclxufVxyXG4uc3RhdGlzdGljLWRlc2MgcCxcclxuaDIge1xyXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5zdGF0aXN0aWMtZGVzY19hcnRpY2xlLXRpdGxlIHtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbn1cclxuLnN0YXRpc3RpYy1kZXNjX3NlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG4uc3RhdGlzdGljLWRlc2NfYXJ0aWNsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5zdGF0aXN0aWMtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc3RhdGlzdGljLWRpcmVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICAuc3RhdGlzdGljLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnN0YXRpc3RpYy1kZXNjIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXRzL3N0YXRpc3RpY09uTWFpbi9zdGF0aXN0aWNPbk1haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYO0FBQ0E7O0VBRUUsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFNBQVM7RUFDWDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zdGF0aXN0aWMtZGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogNjBweCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CYWNrZ3JvdW5kQmxhY2spO1xcclxcbn1cXHJcXG4uc3RhdGlzdGljLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcbi5zdGF0aXN0aWMtdGl0bGUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcXHJcXG59XFxyXFxuLnN0YXRpc3RpYy1kaXJlY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcbi5zdGF0aXN0aWMtZGVzYyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDYwcHg7XFxyXFxufVxcclxcbi5zdGF0aXN0aWMtZGVzYyBwLFxcclxcbmgyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5zdGF0aXN0aWMtZGVzY19hcnRpY2xlLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDhweDtcXHJcXG59XFxyXFxuLnN0YXRpc3RpYy1kZXNjX3NlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcbi5zdGF0aXN0aWMtZGVzY19hcnRpY2xlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLnN0YXRpc3RpYy1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLnN0YXRpc3RpYy1kaXJlY3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIH1cXHJcXG4gIC5zdGF0aXN0aWMtdGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAuc3RhdGlzdGljLWRlc2Mge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wcm9kdWN0LWNhcmQtbWFpbi1pbmZvcm1hdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDMwcHg7XHJcbn1cclxuLnByb2R1Y3QtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA1MHB4O1xyXG4gIHdpZHRoOiA5NSU7XHJcbn1cclxuLnByb2R1Y3QtY2FyZC1oZWFkbGluZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBnYXA6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5wcm9kdWN0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1PeHlnZW4pO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBjb2xvcjogdmFyKC0tVG90YWxCbGFjayk7XHJcbn1cclxuLnByb2R1Y3QtY2FyZC1wcmljZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBnYXA6IDVweDtcclxufVxyXG4ucHJvZHVjdC1jYXJkLXByaWNlID4gc3BhbiB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1PeHlnZW4pO1xyXG59XHJcbi5wcm9kdWN0LWNhcmQtZGVzY3JpcHRpb25fX3Age1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcbi5wcm9kdWN0LWNhcmQtbGlzdCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG4ucHJvZHVjdC1jYXJkLWxpc3QgPiBsaSB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLU94eWdlbik7XHJcbn1cclxuLnByb2R1Y3QtY2FyZC1jb250cm9sbC1wYW5lbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcbi5wcm9kdWN0LWNhcmQtYWRkLXRvLWNhcnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuLnByb2R1Y3QtY2FyZC1kZWxpdmVyeSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmQtZGVzY3JpcHRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDMwcHg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucHJvZHVjdC1jYXJkIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dHMvdmlld1Byb2R1Y3REZXRhaWxzL3ZpZXdQcm9kdWN0RGV0YWlscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGVBQWU7QUFDakI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7QUFDQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnByb2R1Y3QtY2FyZC1tYWluLWluZm9ybWF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuLnByb2R1Y3QtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxufVxcclxcbi5wcm9kdWN0LWNhcmQtaGVhZGxpbmcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG4ucHJvZHVjdC1jYXJkLXRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1PeHlnZW4pO1xcclxcbiAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgY29sb3I6IHZhcigtLVRvdGFsQmxhY2spO1xcclxcbn1cXHJcXG4ucHJvZHVjdC1jYXJkLXByaWNlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuLnByb2R1Y3QtY2FyZC1wcmljZSA+IHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLU94eWdlbik7XFxyXFxufVxcclxcbi5wcm9kdWN0LWNhcmQtZGVzY3JpcHRpb25fX3Age1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbn1cXHJcXG4ucHJvZHVjdC1jYXJkLWxpc3Qge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG59XFxyXFxuLnByb2R1Y3QtY2FyZC1saXN0ID4gbGkge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLU94eWdlbik7XFxyXFxufVxcclxcbi5wcm9kdWN0LWNhcmQtY29udHJvbGwtcGFuZWwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuLnByb2R1Y3QtY2FyZC1hZGQtdG8tY2FydCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuLnByb2R1Y3QtY2FyZC1kZWxpdmVyeSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jYXJkLWRlc2NyaXB0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5wcm9kdWN0LWNhcmQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ob21lLXBhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5ob21lLXBhZ2VfZW50aXJlLWJsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDQwcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaG9tZS1wYWdlX2FydGljbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogNDBweDtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcbi5ob21lLXBhZ2VfdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmhvbWUtcGFnZV90ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmhvbWUtcGFnZV9hcnRpY2xlIHtcclxuICAgIHdpZHRoOiA5NyU7XHJcbiAgfVxyXG4gIC5ob21lLXBhZ2VfdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9ob21lUGFnZS9ob21lUGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7QUFDWDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ob21lLXBhZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmhvbWUtcGFnZV9lbnRpcmUtYmxvY2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDQwcHggMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uaG9tZS1wYWdlX2FydGljbGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG4uaG9tZS1wYWdlX3RpdGxlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDQ1cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5ob21lLXBhZ2VfdGV4dCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgLmhvbWUtcGFnZV9hcnRpY2xlIHtcXHJcXG4gICAgd2lkdGg6IDk3JTtcXHJcXG4gIH1cXHJcXG4gIC5ob21lLXBhZ2VfdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3RcIjtcbmV4cG9ydCB2YXIgcHJvZHVjdHNBcGkgPSBjcmVhdGVBcGkoe1xuICAgIHJlZHVjZXJQYXRoOiBcInByb2R1Y3RzQXBpXCIsXG4gICAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7IGJhc2VVcmw6IFwiaHR0cHM6Ly9kdW1teWpzb24uY29tL3Byb2R1Y3RzL1wiIH0pLFxuICAgIGVuZHBvaW50czogZnVuY3Rpb24gKGJ1aWxkZXIpIHsgcmV0dXJuICh7XG4gICAgICAgIGdldFByb2R1Y3RzOiBidWlsZGVyLnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBfYS5saW1pdCwgc2tpcCA9IF9hLnNraXAsIGZpbHRlciA9IF9hLmZpbHRlciwgc2VhcmNoID0gX2Euc2VhcmNoO1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChmaWx0ZXIgPyBcImNhdGVnb3J5L1wiLmNvbmNhdChmaWx0ZXIpIDogXCJcIikuY29uY2F0KHNlYXJjaCA/IFwiL3NlYXJjaD9xPVwiLmNvbmNhdChzZWFyY2gsIFwiJlwiKSA6IFwiP1wiLCBcImxpbWl0PVwiKS5jb25jYXQobGltaXQsIFwiJnNraXA9XCIpLmNvbmNhdChza2lwLCBcIiZzZWxlY3Q9dGl0bGUscHJpY2UsaW1hZ2VzJlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBnZXRDYXRlZ29yaWVzOiBidWlsZGVyLnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcImNhdGVnb3J5LWxpc3RcIjsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIGdldFByb2R1Y3RCeUlkOiBidWlsZGVyLnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIFwiXCIuY29uY2F0KGlkKTsgfSxcbiAgICAgICAgfSksXG4gICAgfSk7IH0sXG59KTtcbmV4cG9ydCB2YXIgdXNlR2V0UHJvZHVjdHNRdWVyeSA9IHByb2R1Y3RzQXBpLnVzZUdldFByb2R1Y3RzUXVlcnksIHVzZUdldENhdGVnb3JpZXNRdWVyeSA9IHByb2R1Y3RzQXBpLnVzZUdldENhdGVnb3JpZXNRdWVyeSwgdXNlR2V0UHJvZHVjdEJ5SWRRdWVyeSA9IHByb2R1Y3RzQXBpLnVzZUdldFByb2R1Y3RCeUlkUXVlcnk7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCI7XG5leHBvcnQgdmFyIHVzZXJBcGkgPSBjcmVhdGVBcGkoe1xuICAgIHJlZHVjZXJQYXRoOiBcInVzZXJBcGlcIixcbiAgICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHsgYmFzZVVybDogXCJodHRwczovL2R1bW15anNvbi5jb20vXCIgfSksXG4gICAgZW5kcG9pbnRzOiBmdW5jdGlvbiAoYnVpbGRlcikgeyByZXR1cm4gKHtcbiAgICAgICAgcG9zdFVzZXI6IGJ1aWxkZXIubXV0YXRpb24oe1xuICAgICAgICAgICAgcXVlcnk6IGZ1bmN0aW9uIChuZXdVc2VyKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgICAgIHVybDogXCJ1c2Vycy9hZGRcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBib2R5OiBfX2Fzc2lnbih7IHVzZXJuYW1lOiBuZXdVc2VyLm5hbWUgfSwgbmV3VXNlciksXG4gICAgICAgICAgICB9KTsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIGdldFRva2VuOiBidWlsZGVyLm11dGF0aW9uKHtcbiAgICAgICAgICAgIHF1ZXJ5OiBmdW5jdGlvbiAodXNlcikgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICB1cmw6IFwidXNlci9sb2dpblwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICBleHBpcmVzSW5NaW5zOiAxMjAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJvbWl0XCIsXG4gICAgICAgICAgICB9KTsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIGdldFVzZXJzOiBidWlsZGVyLnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcInVzZXJzXCI7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICB2ZXJpZnlVc2VyOiBidWlsZGVyLnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBmdW5jdGlvbiAodG9rZW4pIHsgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIHVybDogXCJhdXRoL21lXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIi5jb25jYXQodG9rZW4pLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwib21pdFwiLFxuICAgICAgICAgICAgfSk7IH0sXG4gICAgICAgIH0pLFxuICAgIH0pOyB9LFxufSk7XG5leHBvcnQgdmFyIHVzZVBvc3RVc2VyTXV0YXRpb24gPSB1c2VyQXBpLnVzZVBvc3RVc2VyTXV0YXRpb24sIHVzZUdldFRva2VuTXV0YXRpb24gPSB1c2VyQXBpLnVzZUdldFRva2VuTXV0YXRpb24sIHVzZUdldFVzZXJzUXVlcnkgPSB1c2VyQXBpLnVzZUdldFVzZXJzUXVlcnksIHVzZVZlcmlmeVVzZXJRdWVyeSA9IHVzZXJBcGkudXNlVmVyaWZ5VXNlclF1ZXJ5O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlLCBSb3V0ZXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgSG9tZVBhZ2UsIFJlZ2lzdHJhdGlvbiwgQXV0aCwgQ2F0ZWdvcmllc1BhZ2UsIFNob3BMaXN0LCBWaWV3UHJvZHVjdCwgfSBmcm9tIFwiLi4vcGFnZXMvaW5kZXhcIjtcbmltcG9ydCB7IFN1c3BlbnNlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciB9IGZyb20gXCIuLi9sYXlvdXRzL2luZGV4XCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSBcIi4uL3V0aWxzL3JvdXRlc1wiO1xuZXhwb3J0IHZhciBBcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChfanN4cyhCcm93c2VyUm91dGVyLCB7IGNoaWxkcmVuOiBbX2pzeChIZWFkZXIsIHt9KSwgX2pzeChTdXNwZW5zZSwgeyBmYWxsYmFjazogXCJsb2FkaW5nLi4uXCIsIGNoaWxkcmVuOiBfanN4cyhSb3V0ZXMsIHsgY2hpbGRyZW46IFtfanN4KFJvdXRlLCB7IHBhdGg6IFJPVVRFUy5IT01FLCBlbGVtZW50OiBfanN4KEhvbWVQYWdlLCB7fSkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogUk9VVEVTLlJFR0lTVEVSLCBlbGVtZW50OiBfanN4KFJlZ2lzdHJhdGlvbiwge30pIH0pLCBfanN4KFJvdXRlLCB7IHBhdGg6IFJPVVRFUy5MT0dJTiwgZWxlbWVudDogX2pzeChBdXRoLCB7fSkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogUk9VVEVTLkNBVEVHT1JJRVMsIGVsZW1lbnQ6IF9qc3goQ2F0ZWdvcmllc1BhZ2UsIHt9KSB9KSwgX2pzeChSb3V0ZSwgeyBwYXRoOiBST1VURVMuQkFTS0VULCBlbGVtZW50OiBfanN4KFNob3BMaXN0LCB7fSkgfSksIF9qc3goUm91dGUsIHsgcGF0aDogUk9VVEVTLlZJRVdQUk9EVUNULCBlbGVtZW50OiBfanN4KFZpZXdQcm9kdWN0LCB7fSkgfSldIH0pIH0pLCBfanN4KEZvb3Rlciwge30pXSB9KSk7XG59O1xuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5leHBvcnQgdmFyIHVzZUFwcERpc3BhdGNoID0gdXNlRGlzcGF0Y2gud2l0aFR5cGVzKCk7XG5leHBvcnQgdmFyIHVzZUFwcFNlbGVjdG9yID0gdXNlU2VsZWN0b3Iud2l0aFR5cGVzKCk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwidmFyIF9hO1xuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgcHJvZHVjdHNBcGkgfSBmcm9tIFwiLi4vYXBpL3Byb2R1Y3RBcGlcIjtcbmltcG9ydCB1c2VyUHJvZHVjdFNsaWNlIGZyb20gXCIuLi9zdG9yZS91c2VyUHJvZHVjdFNsaWNlXCI7XG5pbXBvcnQgeyB1c2VyQXBpIH0gZnJvbSBcIi4uL2FwaS91c2VyQXBpXCI7XG5leHBvcnQgdmFyIHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXI6IChfYSA9IHtcbiAgICAgICAgICAgIHVzZXJQcm9kdWN0OiB1c2VyUHJvZHVjdFNsaWNlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW3Byb2R1Y3RzQXBpLnJlZHVjZXJQYXRoXSA9IHByb2R1Y3RzQXBpLnJlZHVjZXIsXG4gICAgICAgIF9hW3VzZXJBcGkucmVkdWNlclBhdGhdID0gdXNlckFwaS5yZWR1Y2VyLFxuICAgICAgICBfYSksXG4gICAgbWlkZGxld2FyZTogZnVuY3Rpb24gKGdldERlZmF1bHRNaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBnZXREZWZhdWx0TWlkZGxld2FyZSgpXG4gICAgICAgICAgICAuY29uY2F0KHByb2R1Y3RzQXBpLm1pZGRsZXdhcmUpXG4gICAgICAgICAgICAuY29uY2F0KHVzZXJBcGkubWlkZGxld2FyZSk7XG4gICAgfSxcbn0pO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEFsZXJ0LCBCb3gsIEljb25CdXR0b24sIENvbGxhcHNlIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgdmFyIEFsZXJ0TXVpID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIHNldEVycm9yID0gX2Euc2V0RXJyb3I7XG4gICAgdmFyIF9iID0gdXNlU3RhdGUodHJ1ZSksIG9wZW4gPSBfYlswXSwgc2V0T3BlbiA9IF9iWzFdO1xuICAgIHZhciBoYW5kbGVDbG9zZUFsZXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3goQm94LCB7IHN4OiB7IHBvc2l0aW9uOiBcImZpeGVkXCIsIHRvcDogXCI4MHB4XCIsIHpJbmRleDogMTAgfSwgY2hpbGRyZW46IF9qc3goQ29sbGFwc2UsIHsgaW46IG9wZW4sIGNoaWxkcmVuOiBfanN4KEFsZXJ0LCB7IHZhcmlhbnQ6IFwiZmlsbGVkXCIsIHNldmVyaXR5OiBcImVycm9yXCIsIGFjdGlvbjogX2pzeChJY29uQnV0dG9uLCB7IFwiYXJpYS1sYWJlbFwiOiBcImNsb3NlXCIsIG9uQ2xpY2s6IGhhbmRsZUNsb3NlQWxlcnQsIGNoaWxkcmVuOiBfanN4KENsb3NlSWNvbiwge30pIH0pLCBjaGlsZHJlbjogY2hpbGRyZW4gfSkgfSkgfSkpO1xufTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG52YXIgQ29sb3JCdXR0b24gPSBzdHlsZWQoQnV0dG9uKShmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgYmFja2dyb3VuZGNvbG9yID0gX2EuYmFja2dyb3VuZGNvbG9yLCB0ZXh0Y29sb3IgPSBfYS50ZXh0Y29sb3IsIGJvcmRlcnJhZGl1cyA9IF9hLmJvcmRlcnJhZGl1cywgZm9udFNpemUgPSBfYS5mb250U2l6ZSwgcGFkZGluZyA9IF9hLnBhZGRpbmcsIHdpZHRoID0gX2Eud2lkdGg7XG4gICAgcmV0dXJuICh7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZGNvbG9yIHx8IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICBjb2xvcjogdGV4dGNvbG9yIHx8IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiLFxuICAgICAgICBmb250RmFtaWx5OiBcIkV4bywgc2Fucy1zZXJpZlwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IGJvcmRlcnJhZGl1cyB8fCBcIjIwcHhcIixcbiAgICAgICAgZm9udFNpemU6IGZvbnRTaXplIHx8IFwiMTZweFwiLFxuICAgICAgICBwYWRkaW5nOiBwYWRkaW5nIHx8IFwiMTNweFwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgICAgIHdpZHRoOiB3aWR0aCB8fCBcImZpdC1jb250ZW50XCIsXG4gICAgfSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZWRCdXR0b25zKHByb3BzKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sIHRleHRjb2xvciA9IHByb3BzLnRleHRjb2xvciwgYm9yZGVycmFkaXVzID0gcHJvcHMuYm9yZGVycmFkaXVzLCBmb250U2l6ZSA9IHByb3BzLmZvbnRTaXplLCBwYWRkaW5nID0gcHJvcHMucGFkZGluZywgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCwgZnVuYyA9IHByb3BzLmZ1bmMsIHdpZHRoID0gcHJvcHMud2lkdGgsIGJhY2tncm91bmRjb2xvciA9IHByb3BzLmJhY2tncm91bmRjb2xvcjtcbiAgICByZXR1cm4gKF9qc3goQ29sb3JCdXR0b24sIHsgdmFyaWFudDogXCJjb250YWluZWRcIiwgYmFja2dyb3VuZGNvbG9yOiBiYWNrZ3JvdW5kY29sb3IsIGJvcmRlcnJhZGl1czogYm9yZGVycmFkaXVzLCB0ZXh0Y29sb3I6IHRleHRjb2xvciwgZm9udFNpemU6IGZvbnRTaXplLCBwYWRkaW5nOiBwYWRkaW5nLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jKCk7IH0sIHdpZHRoOiB3aWR0aCwgZGlzYWJsZWQ6IGRpc2FibGVkLCBvbkNsaWNrQ2FwdHVyZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuYygpOyB9LCBjaGlsZHJlbjogY2hpbGRyZW4gfSkpO1xufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFwiLi9jYXJkLmNzc1wiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL2FwcC9ob29rc1wiO1xuaW1wb3J0IHsgc2V0UHJvZHVjdHMsIGFkZFRvdGFsU3VtIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3VzZXJQcm9kdWN0U2xpY2VcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3JvdXRlc1wiO1xudmFyIENhcmQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgX2I7XG4gICAgdmFyIHRoaW5nID0gX2EudGhpbmcsIHNldEVycm9yID0gX2Euc2V0RXJyb3I7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgICB2YXIgcHJvZHVjdCA9IHVzZUFwcFNlbGVjdG9yKGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gc3RhdGUudXNlclByb2R1Y3QucHJvZHVjdDsgfSk7XG4gICAgdmFyIGhhbmRsZVNldFByb2R1Y3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChwcm9kdWN0LmV2ZXJ5KGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLnRpdGxlICE9PSB0aGluZy50aXRsZTsgfSkpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFByb2R1Y3RzKHRoaW5nKSk7XG4gICAgICAgICAgICBkaXNwYXRjaChhZGRUb3RhbFN1bSh0aGluZy5wcmljZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0RXJyb3IoXCJZb3UgYWxyZWFkeSBhZGQgdGhpcyBwcm9kdWN0IHRvIGNhcnRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY2FyZC1kaXZcIiwgY2hpbGRyZW46IFtfanN4KFwiaW1nXCIsIHsgY2xhc3NOYW1lOiBcImNhcmQtaW1nXCIsIHNyYzogKF9iID0gdGhpbmcuaW1hZ2VzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JbMF0sIGFsdDogdGhpbmcudGl0bGUgfSksIF9qc3goTGluaywgeyB0bzogUk9VVEVTLlZJRVdQUk9EVUNULnJlcGxhY2UoXCI6aWRcIiwgXCJcIi5jb25jYXQodGhpbmcuaWQpKSwgY2xhc3NOYW1lOiBcImNhcmQtdGl0bGVcIiwgY2hpbGRyZW46IHRoaW5nLnRpdGxlIH0pLCBfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjYXJkLWNvbnRyb2xsXCIsIGNoaWxkcmVuOiBbX2pzeHMoXCJwXCIsIHsgY2xhc3NOYW1lOiBcImNhcmQtcHJpY2VcIiwgY2hpbGRyZW46IFtcIiRcIiwgdGhpbmcucHJpY2VdIH0pLCBfanN4KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBcImNhcmQtYnV0dG9uXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhhbmRsZVNldFByb2R1Y3QoKTsgfSwgY2hpbGRyZW46IFwiK1wiIH0pXSB9KV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQ29udHJvbGxQYW5lbENhcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQ29udHJvbGxQYW5lbENhcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBcIi4vQ29udHJvbGxQYW5lbENhcmQuY3NzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250cm9sbFBhbmVsQ2FyZChfYSkge1xuICAgIHZhciBjb3VudCA9IF9hLmNvdW50LCBtaW51cyA9IF9hLm1pbnVzLCBwbHVzID0gX2EucGx1cztcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInByb2R1Y3QtY29udHJvbGxcIiwgY2hpbGRyZW46IFtfanN4KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBcInByb2R1Y3QtY29udHJvbF9fYnV0dG9uXCIsIG9uQ2xpY2s6IG1pbnVzLCBjaGlsZHJlbjogXCItXCIgfSksIF9qc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBcInByb2N1dC10ZXh0XCIsIGNoaWxkcmVuOiBjb3VudCB9KSwgX2pzeChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogXCJwcm9kdWN0LWNvbnRyb2xfX2J1dHRvblwiLCBvbkNsaWNrOiBwbHVzLCBjaGlsZHJlbjogXCIrXCIgfSldIH0pKTtcbn1cbiIsImltcG9ydCB7IEFsZXJ0TXVpIH0gZnJvbSBcIi4vYWxlcnQvYWxlcnRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vYnV0dG9uL2J1dHRvblwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vY2FyZC9jYXJkXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vaW5wdXRzL2Jhc2VJbnB1dC9pbnB1dFwiO1xuaW1wb3J0IFNvcnRpbmdTZWN0aW9uIGZyb20gXCIuL3NvcnRpbmdTZWN0aW9uL3NvcnRpbmdTZWN0aW9uXCI7XG5pbXBvcnQgUGF5bWVudERpdiBmcm9tIFwiLi9wYXltZW50RGl2L3BheW1lbnREaXZcIjtcbmltcG9ydCBQcm9kdWN0QmFza2V0IGZyb20gXCIuL3Byb2R1Y3RCYXNrZXQvcHJvZHVjdEJhc2tldFwiO1xuaW1wb3J0IENvbnRyb2xsUGFuZWxDYXJkIGZyb20gXCIuL2NvbnRyb2xsUGFuZWxDYXJkL2NvbnRyb2xsUGFuZWxDYXJkXCI7XG5pbXBvcnQgUmV2aWV3IGZyb20gXCIuL3Jldmlldy9yZXZpZXdcIjtcbmV4cG9ydCB7IEFsZXJ0TXVpLCBCdXR0b24sIENhcmQsIElucHV0LCBTb3J0aW5nU2VjdGlvbiwgUGF5bWVudERpdiwgUmV2aWV3LCBQcm9kdWN0QmFza2V0LCBDb250cm9sbFBhbmVsQ2FyZCwgfTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbnB1dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbnB1dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFwiLi9pbnB1dC5jc3NcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0KF9hKSB7XG4gICAgdmFyIG5hbWUgPSBfYS5uYW1lLCBwbGFjZWhvbGRlciA9IF9hLnBsYWNlaG9sZGVyLCBzdHlsZXMgPSBfYS5zdHlsZXMsIHR5cGUgPSBfYS50eXBlLCByZXF1YXJlZCA9IF9hLnJlcXVhcmVkLCBmdW5jID0gX2EuZnVuYywgdmFsdWUgPSBfYS52YWx1ZTtcbiAgICByZXR1cm4gKF9qc3goXCJpbnB1dFwiLCB7IHN0eWxlOiBzdHlsZXMsIHR5cGU6IHR5cGUsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSwgb25DaGFuZ2U6IGZ1bmMsIHJlcXVpcmVkOiByZXF1YXJlZCwgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLCBjbGFzc05hbWU6IFwiaW5wdXRcIiB9KSk7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGF5bWVudERpdi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYXltZW50RGl2LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgXCIuL3BheW1lbnREaXYuY3NzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXltZW50RGl2KF9hKSB7XG4gICAgdmFyIHRpdGxlID0gX2EudGl0bGUsIHN1bSA9IF9hLnN1bTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInBheW1lbnQtZGl2XCIsIGNoaWxkcmVuOiBbX2pzeChcInBcIiwgeyBjbGFzc05hbWU6IFwicGF5bWVudC10aXRsZVwiLCBjaGlsZHJlbjogdGl0bGUgfSksIF9qc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBcInBheW1lbnQtc3VtXCIsIGNoaWxkcmVuOiB0eXBlb2Ygc3VtID09PSBcInN0cmluZ1wiID8gc3VtIDogXCIkXCIuY29uY2F0KHN1bSkgfSldIH0pKTtcbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9kdWN0QmFza2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2R1Y3RCYXNrZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL3Byb2R1Y3RCYXNrZXQuY3NzXCI7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9hcHAvaG9va3NcIjtcbmltcG9ydCB7IENvbnRyb2xsUGFuZWxDYXJkIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBkZWxldGVQcm9kdWN0LCBhZGRUb3RhbFN1bSwgbWludXNUb3RhbFN1bSwgfSBmcm9tIFwiLi4vLi4vc3RvcmUvdXNlclByb2R1Y3RTbGljZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEJhc2tldChfYSkge1xuICAgIHZhciBfYjtcbiAgICB2YXIgdGhpbmcgPSBfYS50aGluZztcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZSgxKSwgY291bnQgPSBfY1swXSwgc2V0Q291bnQgPSBfY1sxXTtcbiAgICB2YXIgX2QgPSB1c2VTdGF0ZSh0aGluZy5wcmljZSksIHByb2R1Y3RQcmljZSA9IF9kWzBdLCBzZXRQcm9kdWN0UHJpY2UgPSBfZFsxXTtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIHZhciBoYW5kbGVQbHVzQ291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldENvdW50KGZ1bmN0aW9uIChwcmV2KSB7IHJldHVybiBwcmV2ICsgMTsgfSk7XG4gICAgICAgIHNldFByb2R1Y3RQcmljZShmdW5jdGlvbiAocHJldikgeyByZXR1cm4gTWF0aC5yb3VuZCgocHJldiArIHRoaW5nLnByaWNlKSAqIDEwMCkgLyAxMDA7IH0pO1xuICAgICAgICBkaXNwYXRjaChhZGRUb3RhbFN1bSh0aGluZy5wcmljZSkpO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZU1pbnVzQ291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb3VudCAhPSAxKSB7XG4gICAgICAgICAgICBzZXRDb3VudChmdW5jdGlvbiAocHJldikgeyByZXR1cm4gcHJldiAtIDE7IH0pO1xuICAgICAgICAgICAgc2V0UHJvZHVjdFByaWNlKGZ1bmN0aW9uIChwcmV2KSB7IHJldHVybiBNYXRoLnJvdW5kKChwcmV2IC0gdGhpbmcucHJpY2UpICogMTAwKSAvIDEwMDsgfSk7XG4gICAgICAgICAgICBkaXNwYXRjaChtaW51c1RvdGFsU3VtKHRoaW5nLnByaWNlKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBoYW5kbGVEZWxldGVGcm9tQmFza2V0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGRpc3BhdGNoKGRlbGV0ZVByb2R1Y3QoaWQpKTtcbiAgICAgICAgZGlzcGF0Y2gobWludXNUb3RhbFN1bShwcm9kdWN0UHJpY2UpKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoXCJzZWN0aW9uXCIsIHsgY2xhc3NOYW1lOiBcInByb2R1Y3RcIiwgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwcm9kdWN0LWxlZnRcIiwgY2hpbGRyZW46IFtfanN4KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBcInByb2R1Y3QtY29udHJvbF9fYnV0dG9uXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhhbmRsZURlbGV0ZUZyb21CYXNrZXQodGhpbmcuaWQpOyB9LCBjaGlsZHJlbjogXCJYXCIgfSksIF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInByb2R1Y3QtZGVzY1wiLCBjaGlsZHJlbjogW19qc3goXCJpbWdcIiwgeyBjbGFzc05hbWU6IFwicHJvZHVjdC1pbWdcIiwgc3JjOiAoX2IgPSB0aGluZy5pbWFnZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYlswXSwgYWx0OiB0aGluZy50aXRsZSB9KSwgX2pzeChcInBcIiwgeyBjbGFzc05hbWU6IFwicHJvZHVjdC10ZXh0XCIsIGNoaWxkcmVuOiB0aGluZy50aXRsZSB9KV0gfSldIH0pLCBfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwcm9kdWN0LXJpZ2h0XCIsIGNoaWxkcmVuOiBbX2pzeHMoXCJwXCIsIHsgY2xhc3NOYW1lOiBcInByb2R1Y3QtcHJpY2VcIiwgY2hpbGRyZW46IFtcIiRcIiwgdGhpbmcucHJpY2VdIH0pLCBfanN4KENvbnRyb2xsUGFuZWxDYXJkLCB7IGNvdW50OiBjb3VudCwgbWludXM6IGhhbmRsZU1pbnVzQ291bnQsIHBsdXM6IGhhbmRsZVBsdXNDb3VudCB9KSwgX2pzeHMoXCJwXCIsIHsgY2xhc3NOYW1lOiBcInByb2R1Y3QtdG90YWwtdGV4dFwiLCBjaGlsZHJlbjogW1wiJFwiLCBwcm9kdWN0UHJpY2VdIH0pXSB9KV0gfSkpO1xufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jldmlldy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXZpZXcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBcIi4vcmV2aWV3LmNzc1wiO1xuaW1wb3J0IHsgUmF0aW5nIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IGNvbnZlcnREYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3RpbWVDb252ZXJ0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXZpZXcoX2EpIHtcbiAgICB2YXIgcmV2aWV3ID0gX2EucmV2aWV3O1xuICAgIHJldHVybiAoX2pzeHMoXCJhcnRpY2xlXCIsIHsgY2xhc3NOYW1lOiBcInJldmlldy11c2VyXCIsIGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicmV2aWV3LXJhdGVcIiwgY2hpbGRyZW46IFtfanN4KFwicFwiLCB7IGNsYXNzTmFtZTogXCJyZXZpZXdlci1uYW1lXCIsIGNoaWxkcmVuOiByZXZpZXcucmV2aWV3ZXJOYW1lIH0pLCBfanN4KFJhdGluZywgeyBuYW1lOiBcInJlYWQtb25seVwiLCB2YWx1ZTogcmV2aWV3LnJhdGluZywgcmVhZE9ubHk6IHRydWUgfSldIH0pLCBfanN4KFwicFwiLCB7IGNsYXNzTmFtZTogXCJyZXZpZXctY29tbWVudFwiLCBjaGlsZHJlbjogcmV2aWV3LmNvbW1lbnQgfSksIF9qc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBcInJldmlldy1wb3N0ZWQtdGltZVwiLCBjaGlsZHJlbjogY29udmVydERhdGUocmV2aWV3LmRhdGUpIH0pXSB9KSk7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc29ydGluZ1NlY3Rpb24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc29ydGluZ1NlY3Rpb24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBcIi4vc29ydGluZ1NlY3Rpb24uY3NzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb3J0aW5nU2VjdGlvbihfYSkge1xuICAgIHZhciBuYW1lID0gX2EubmFtZSwgZmlsdGVycyA9IF9hLmZpbHRlcnMsIGZ1bmMgPSBfYS5mdW5jLCBvcGVuZWRGaWx0ZXJzID0gX2Eub3BlbmVkRmlsdGVycywgc2VsZWN0ZWRGaWx0ZXIgPSBfYS5zZWxlY3RlZEZpbHRlcjtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZpbHRlcnMgXCIuY29uY2F0KG9wZW5lZEZpbHRlcnMgPyBcIm9wZW4tZmlsdGVyXCIgOiBcIlwiKSwgY2hpbGRyZW46IFtfanN4KFwiaDJcIiwgeyBjbGFzc05hbWU6IFwiZmlsdGVycy10aXRsZVwiLCBjaGlsZHJlbjogbmFtZSB9KSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmaWx0ZXJzLWRpc3BsYXlcIiwgY2hpbGRyZW46IGZpbHRlcnMubWFwKGZ1bmN0aW9uIChlbGVtLCBpZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9qc3hzKFwibGFiZWxcIiwgeyBjbGFzc05hbWU6IFwiZmlsdGVyXCIsIGNoaWxkcmVuOiBbX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBuYW1lOiBTdHJpbmcoZWxlbSksIGNoZWNrZWQ6IHNlbGVjdGVkRmlsdGVyID09PSBTdHJpbmcoZWxlbSksIG9uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jKFN0cmluZyhlbGVtKSk7IH0sIGNsYXNzTmFtZTogXCJmaWx0ZXItY2hlY2tib3hcIiB9KSwgX2pzeChcInBcIiwgeyBjbGFzc05hbWU6IFwiZmlsdGVyLW5hbWVcIiwgY2hpbGRyZW46IFN0cmluZyhlbGVtKSB9KV0gfSwgaWQpKTtcbiAgICAgICAgICAgICAgICB9KSB9KV0gfSkpO1xufVxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vYXBwL0FwcFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4vYXBwL3N0b3JlXCI7XG52YXIgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcbmlmICghcm9vdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInJvb3Qgbm90IGZvdW5kXCIpO1xufVxudmFyIGNvbnRhaW5lciA9IGNyZWF0ZVJvb3Qocm9vdCk7XG5jb250YWluZXIucmVuZGVyKF9qc3goUHJvdmlkZXIsIHsgc3RvcmU6IHN0b3JlLCBjaGlsZHJlbjogX2pzeChBcHAsIHt9KSB9KSk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnVyZ2VyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1cmdlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gXCIuLi8uLi91dGlscy9yb3V0ZXNcIjtcbmltcG9ydCBcIi4vYnVyZ2VyLmNzc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zaXRpb25lZE1lbnUoX2EpIHtcbiAgICB2YXIgb3BlbmVkID0gX2Eub3BlbmVkLCBzZXRPcGVuZWQgPSBfYS5zZXRPcGVuZWQsIHNldE9wZW5Nb2RhbCA9IF9hLnNldE9wZW5Nb2RhbCwgaXNMb2dnZWQgPSBfYS5pc0xvZ2dlZDtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IFwibWVudSBcIi5jb25jYXQob3BlbmVkID8gXCJvcGVuZWRcIiA6IFwiXCIpLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRPcGVuZWQoIW9wZW5lZCk7IH0sIFwiYXJpYS1sYWJlbFwiOiBcIk1haW4gTWVudVwiLCBjaGlsZHJlbjogX2pzeHMoXCJzdmdcIiwgeyB3aWR0aDogXCI1MFwiLCBoZWlnaHQ6IFwiNTBcIiwgdmlld0JveDogXCIwIDAgMTAwIDEwMFwiLCBjaGlsZHJlbjogW19qc3goXCJwYXRoXCIsIHsgY2xhc3NOYW1lOiBcImxpbmUgbGluZTFcIiwgZDogXCJNIDIwLDI5LjAwMDA0NiBIIDgwLjAwMDIzMSBDIDgwLjAwMDIzMSwyOS4wMDAwNDYgOTQuNDk4ODM5LDI4LjgxNzM1MiA5NC41MzI5ODcsNjYuNzExMzMxIDk0LjU0MzE0Miw3Ny45ODA2NzMgOTAuOTY2MDgxLDgxLjY3MDI0NiA4NS4yNTkxNzMsODEuNjY4OTk3IDc5LjU1MjI2MSw4MS42Njc3NTEgNzUuMDAwMjExLDc0Ljk5OTk0MiA3NS4wMDAyMTEsNzQuOTk5OTQyIEwgMjUuMDAwMDIxLDI1LjAwMDA1OFwiIH0pLCBfanN4KFwicGF0aFwiLCB7IGNsYXNzTmFtZTogXCJsaW5lIGxpbmUyXCIsIGQ6IFwiTSAyMCw1MCBIIDgwXCIgfSksIF9qc3goXCJwYXRoXCIsIHsgY2xhc3NOYW1lOiBcImxpbmUgbGluZTNcIiwgZDogXCJNIDIwLDcwLjk5OTk1NCBIIDgwLjAwMDIzMSBDIDgwLjAwMDIzMSw3MC45OTk5NTQgOTQuNDk4ODM5LDcxLjE4MjY0OCA5NC41MzI5ODcsMzMuMjg4NjY5IDk0LjU0MzE0MiwyMi4wMTkzMjcgOTAuOTY2MDgxLDE4LjMyOTc1NCA4NS4yNTkxNzMsMTguMzMxMDAzIDc5LjU1MjI2MSwxOC4zMzIyNDkgNzUuMDAwMjExLDI1LjAwMDA1OCA3NS4wMDAyMTEsMjUuMDAwMDU4IEwgMjUuMDAwMDIxLDc0Ljk5OTk0MlwiIH0pXSB9KSB9KSwgX2pzeChcInNlY3Rpb25cIiwgeyBjbGFzc05hbWU6IFwiYnVyZ2VyLXNlY3Rpb24gXCIuY29uY2F0KG9wZW5lZCA/IFwib3BlbmVkLWJ1cmdlclwiIDogXCJcIiksIGNoaWxkcmVuOiBpc0xvZ2dlZCA/IChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJ1cmdlci1tZW51X19kaXZcIiwgY2hpbGRyZW46IF9qc3goTGluaywgeyB0bzogUk9VVEVTLkJBU0tFVCwgY2xhc3NOYW1lOiBcImJ1cmdlci1tZW51X19saW5rXCIsIGNoaWxkcmVuOiBcIkNhcnRcIiB9KSB9KSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidXJnZXItbWVudV9fZGl2XCIsIGNoaWxkcmVuOiBfanN4KFwiYnV0dG9uXCIsIHsgb25DbGljazogc2V0T3Blbk1vZGFsLCBjbGFzc05hbWU6IFwiYnVyZ2VyLW1lbnUtbG9nb3V0XCIsIGNoaWxkcmVuOiBcIkxvZ291dFwiIH0pIH0pXSB9KSkgOiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChMaW5rLCB7IHRvOiBST1VURVMuTE9HSU4sIGNsYXNzTmFtZTogXCJidXJnZXItbWVudV9fbGlua1wiLCBjaGlsZHJlbjogXCJMb2dpblwiIH0pLCBfanN4KExpbmssIHsgdG86IFJPVVRFUy5SRUdJU1RFUiwgY2xhc3NOYW1lOiBcImJ1cmdlci1tZW51X19saW5rXCIsIGNoaWxkcmVuOiBcIlJlZ2lzdGVyXCIgfSldIH0pKSB9KV0gfSkpO1xufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBcIi4vZm9vdGVyLmNzc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICAgIHZhciBoYW5kbGVQcmV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhcImZvb3RlclwiLCB7IGNsYXNzTmFtZTogXCJmb290ZXJcIiwgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb290ZXItZGVzY3JpYmVcIiwgY2hpbGRyZW46IFtfanN4KFwiaW1nXCIsIHsgc3JjOiBcIi9pbWFnZXMvbG9nby03MC13aGl0ZS5zdmdcIiwgYWx0OiBcImxvZ28td2hpdGVcIiB9KSwgX2pzeChcImgyXCIsIHsgY2xhc3NOYW1lOiBcImZvb3Rlci10aXRsZVwiLCBjaGlsZHJlbjogXCJTdWJzY3JpYmUgVG8gWW91ciBOZXdzbGV0dGVyIHRvIFN0YXkgVXBkYXRlZCBBYm91dCBEaXNjb3VudHNcIiB9KSwgX2pzeHMoXCJmb3JtXCIsIHsgb25TdWJtaXQ6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBoYW5kbGVQcmV2ZW50KGUpOyB9LCBjbGFzc05hbWU6IFwiZm9vdGVyLWZvcm1cIiwgY2hpbGRyZW46IFtfanN4KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJlbWFpbC1zdWJzY3JpcHRpb25cIiwgcGxhY2Vob2xkZXI6IFwiZXhhbXBsZUBlbWFpbC5jb21cIiwgY2xhc3NOYW1lOiBcImVtYWlsLXN1YnNjcmlwdGlvblwiIH0pLCBfanN4KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgbmFtZTogXCJzdWJtaXQtYnV0dG9uXCIsIGNsYXNzTmFtZTogXCJzdWJtaXQtYnV0dG9uXCIsIGNoaWxkcmVuOiBcIj5cIiB9KV0gfSldIH0pLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInN1Yi1mb290ZXJcIiwgY2hpbGRyZW46IF9qc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBcInN1Yi1mb290ZXJfY29weXJpZ2h0XCIsIGNoaWxkcmVuOiBcIkNvcHlyaWdodCBcXHUwMEE5IDIwMjMgUmVuZXcgQmFyaWF0cmljcywgSW5jXCIgfSkgfSldIH0pKTtcbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gXCIuLi8uLi91dGlscy9yb3V0ZXNcIjtcbmltcG9ydCBcIi4vaGVhZGVyLmNzc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VWZXJpZnlVc2VyUXVlcnkgfSBmcm9tIFwiLi4vLi4vYXBpL3VzZXJBcGlcIjtcbmltcG9ydCBNb2RhbFVJIGZyb20gXCIuLi9tb2RhbFVJL21vZGFsVUlcIjtcbmltcG9ydCB7IFBvc2l0aW9uZWRNZW51IH0gZnJvbSBcIi4uL2luZGV4XCI7XG52YXIgSGVhZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoZmFsc2UpLCBpc0xvZ2dlZCA9IF9hWzBdLCBzZXRJc0xvZ2dlZCA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKGZhbHNlKSwgb3BlbiA9IF9iWzBdLCBzZXRPcGVuID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoZmFsc2UpLCBvcGVuZWRCdXJnZXIgPSBfY1swXSwgc2V0T3BlbmVkQnVyZ2VyID0gX2NbMV07XG4gICAgdmFyIGhhbmRsZU5hdmlnYXRlID0gZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgIG5hdmlnYXRlKHJvdXRlKTtcbiAgICB9O1xuICAgIHZhciBoYW5kbGVPcGVuTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgfTtcbiAgICB2YXIgaGFuZGxlR2V0VG9rZW4gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBcIjsgXCIuY29uY2F0KGRvY3VtZW50LmNvb2tpZSk7XG4gICAgICAgIHZhciBwYXJ0cyA9IHZhbHVlLnNwbGl0KFwiOyBcIi5jb25jYXQobmFtZSwgXCI9XCIpKTtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMilcbiAgICAgICAgICAgIHJldHVybiBwYXJ0cy5wb3AoKS5zcGxpdChcIjtcIikuc2hpZnQoKTtcbiAgICB9O1xuICAgIHZhciBhY2Nlc3NUb2tlbiA9IGhhbmRsZUdldFRva2VuKFwiYWNjZXNzVG9rZW5cIik7XG4gICAgdmFyIF9kID0gdXNlVmVyaWZ5VXNlclF1ZXJ5KGFjY2Vzc1Rva2VuLCB7XG4gICAgICAgIHNraXA6ICFhY2Nlc3NUb2tlbixcbiAgICB9KSwgZGF0YSA9IF9kLmRhdGEsIGlzU3VjY2VzcyA9IF9kLmlzU3VjY2VzcztcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICBzZXRJc0xvZ2dlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtpc1N1Y2Nlc3NdKTtcbiAgICByZXR1cm4gKF9qc3hzKFwiaGVhZGVyXCIsIHsgY2xhc3NOYW1lOiBcImhlYWRlclwiLCBjaGlsZHJlbjogW19qc3goTW9kYWxVSSwgeyBzZXRPcGVuOiBzZXRPcGVuLCBvcGVuOiBvcGVuIH0pLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImhlYWRlci1pbWFnZVwiLCBjaGlsZHJlbjogX2pzeChcImltZ1wiLCB7IHNyYzogXCIvaW1hZ2VzL2xvZ28tNzAuc3ZnXCIsIGFsdDogXCJsb2dvXCIgfSkgfSksIF9qc3hzKFwibmF2XCIsIHsgY2xhc3NOYW1lOiBcImhlYWRlcl9uYXZcIiwgY2hpbGRyZW46IFtfanN4KExpbmssIHsgdG86IFJPVVRFUy5IT01FLCBjaGlsZHJlbjogXCJIb21lXCIgfSksIF9qc3goTGluaywgeyB0bzogUk9VVEVTLkNBVEVHT1JJRVMsIGNoaWxkcmVuOiBcIkNhdGVnb3JpZXNcIiB9KV0gfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnVyZ2VyLW1lbnVcIiwgY2hpbGRyZW46IF9qc3goUG9zaXRpb25lZE1lbnUsIHsgb3BlbmVkOiBvcGVuZWRCdXJnZXIsIHNldE9wZW5Nb2RhbDogaGFuZGxlT3Blbk1vZGFsLCBzZXRPcGVuZWQ6IHNldE9wZW5lZEJ1cmdlciwgaXNMb2dnZWQ6IGlzTG9nZ2VkIH0pIH0pLCAhaXNMb2dnZWQgPyAoX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaGVhZGVyLWxvZy1idXR0b25zXCIsIGNoaWxkcmVuOiBbX2pzeChCdXR0b24sIHsgY2hpbGRyZW46IFwiUmVnaXN0cmF0aW9uXCIsIGZ1bmM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhhbmRsZU5hdmlnYXRlKFJPVVRFUy5SRUdJU1RFUik7IH0sIHdpZHRoOiBcIjEyMHB4XCIsIHBhZGRpbmc6IFwiNXB4IDVweFwiLCBib3JkZXJyYWRpdXM6IFwiMjBweFwiLCBmb250U2l6ZTogXCIxNnB4XCIsIHRleHRjb2xvcjogXCIjZmZmXCIgfSksIF9qc3goQnV0dG9uLCB7IGNoaWxkcmVuOiBcIkxvZ2luXCIsIGZ1bmM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhhbmRsZU5hdmlnYXRlKFJPVVRFUy5MT0dJTik7IH0sIHdpZHRoOiBcIjEyMHB4XCIsIHBhZGRpbmc6IFwiNXB4IDVweFwiLCBib3JkZXJyYWRpdXM6IFwiMjBweFwiLCBmb250U2l6ZTogXCIxNnB4XCIsIHRleHRjb2xvcjogXCIjZmZmXCIgfSldIH0pKSA6IChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJoZWFkZXJfY29udHJvbGxcIiwgY2hpbGRyZW46IFtfanN4cyhcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogXCJoZWFkZXJfYnV0dG9uc1wiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBoYW5kbGVPcGVuTW9kYWwoKTsgfSwgY2hpbGRyZW46IFtfanN4KFwiaW1nXCIsIHsgc3JjOiBcIi9pbWFnZXMvYWNjb3VudC5zdmdcIiwgYWx0OiBcImFjY291bnRcIiB9KSwgX2pzeChcImltZ1wiLCB7IHNyYzogXCIvaW1hZ2VzL2JvdHRvbS1hcnJvdy5zdmdcIiwgYWx0OiBcImJvdHRvbS1hcnJvd1wiIH0pXSB9KSwgX2pzeChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogXCJoZWFkZXJfYnV0dG9uc1wiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBoYW5kbGVOYXZpZ2F0ZShST1VURVMuQkFTS0VUKTsgfSwgY2hpbGRyZW46IF9qc3goXCJpbWdcIiwgeyBzcmM6IFwiL2ltYWdlcy9vcmRlcnMuc3ZnXCIsIGFsdDogXCJvcmRlcnNcIiB9KSB9KV0gfSkpXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ltYWdlc1ZpZXcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW1hZ2VzVmlldy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vaW1hZ2VzVmlldy5jc3NcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlc1ZpZXcoX2EpIHtcbiAgICB2YXIgX2IsIF9jO1xuICAgIHZhciB0aGluZyA9IF9hLnRoaW5nO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKDApLCBzZWxlY3RlZCA9IF9kWzBdLCBzZXRTZWxlY3RlZCA9IF9kWzFdO1xuICAgIHZhciBoYW5kbGVTZXRTZWxlY3RlZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBzZXRTZWxlY3RlZChpZCk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImltYWdlcy12aWV3XCIsIGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJpbWFnZXMtc2VsZWN0XCIsIGNoaWxkcmVuOiAoX2IgPSB0aGluZy5pbWFnZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5tYXAoZnVuY3Rpb24gKGVsZW0sIGlkcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9qc3goXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IFwic21hbGwtaW1hZ2VcIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gaGFuZGxlU2V0U2VsZWN0ZWQoaWRzKTsgfSwgY2hpbGRyZW46IF9qc3goXCJpbWdcIiwgeyBjbGFzc05hbWU6IFwiaW1hZ2UtY2FydFwiLCBzcmM6IGVsZW0sIGFsdDogZWxlbSB9KSB9LCBpZHMpKTtcbiAgICAgICAgICAgICAgICB9KSB9KSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJpbWFnZS1zZWxlY3RlZFwiLCBjaGlsZHJlbjogX2pzeChcImltZ1wiLCB7IGNsYXNzTmFtZTogXCJzZWxlY3RlZFwiLCBzcmM6IChfYyA9IHRoaW5nLmltYWdlcykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jW3NlbGVjdGVkXSwgYWx0OiBcIlwiIH0pIH0pXSB9KSk7XG59XG4iLCJpbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3Rlci9mb290ZXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyL2hlYWRlclwiO1xuaW1wb3J0IFBvcHVsYXJQcm9kdWN0Q29tcCBmcm9tIFwiLi9wb3B1bGFyUHJvZHVjdENvbXAvcG9wdWxhclByb2R1Y3RDb21wXCI7XG5pbXBvcnQgU3RhdGlzdGljT25NYWluIGZyb20gXCIuL3N0YXRpc3RpY09uTWFpbi9zdGF0aXN0aWNPbk1haW5cIjtcbmltcG9ydCBWaWV3UHJvZHVjdERldGFpbHMgZnJvbSBcIi4vdmlld1Byb2R1Y3REZXRhaWxzL3ZpZXdQcm9kdWN0RGV0YWlsc1wiO1xuaW1wb3J0IEltYWdlc1ZpZXcgZnJvbSBcIi4vaW1hZ2VzVmlldy9pbWFnZXNWaWV3XCI7XG5pbXBvcnQgTW9kYWxVSSBmcm9tIFwiLi9tb2RhbFVJL21vZGFsVUlcIjtcbmltcG9ydCBQb3NpdGlvbmVkTWVudSBmcm9tIFwiLi9idXJnZXIvYnVyZ2VyXCI7XG5leHBvcnQgeyBGb290ZXIsIEhlYWRlciwgUG9wdWxhclByb2R1Y3RDb21wLCBTdGF0aXN0aWNPbk1haW4sIFZpZXdQcm9kdWN0RGV0YWlscywgSW1hZ2VzVmlldywgTW9kYWxVSSwgUG9zaXRpb25lZE1lbnUsIH07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG52YXIgc3R5bGUgPSB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiNTAlXCIsXG4gICAgbGVmdDogXCI1MCVcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXG4gICAgd2lkdGg6IFwiMjUwcHhcIixcbiAgICBmb250RmFtaWx5OiBcIk94eWdlbiwgc2Fucy1zZXJpZlwiLFxuICAgIGJnY29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgIzAwMFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgYm94U2hhZG93OiAyNCxcbiAgICBwdDogMixcbiAgICBweDogMixcbiAgICBwYjogMixcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbFVJKF9hKSB7XG4gICAgdmFyIHNldE9wZW4gPSBfYS5zZXRPcGVuLCBvcGVuID0gX2Eub3BlbjtcbiAgICB2YXIgaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZUV4aXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIikuZm9yRWFjaChmdW5jdGlvbiAoY29va2llKSB7XG4gICAgICAgICAgICB2YXIgZXFQb3MgPSBjb29raWUuaW5kZXhPZihcIj1cIik7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IGVxUG9zID4gLTEgPyBjb29raWUuc3Vic3RyaW5nKDAsIGVxUG9zKSA6IGNvb2tpZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj07ZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4KE1vZGFsLCB7IG9wZW46IG9wZW4sIG9uQ2xvc2U6IGhhbmRsZUNsb3NlLCBcImFyaWEtbGFiZWxsZWRieVwiOiBcInBhcmVudC1tb2RhbC10aXRsZVwiLCBcImFyaWEtZGVzY3JpYmVkYnlcIjogXCJwYXJlbnQtbW9kYWwtZGVzY3JpcHRpb25cIiwgY2hpbGRyZW46IF9qc3hzKEJveCwgeyBzeDogX19hc3NpZ24oX19hc3NpZ24oe30sIHN0eWxlKSwgeyB3aWR0aDogMjUwIH0pLCBjaGlsZHJlbjogW19qc3goXCJoMlwiLCB7IGlkOiBcInBhcmVudC1tb2RhbC10aXRsZVwiLCBjaGlsZHJlbjogXCJFeGl0XCIgfSksIF9qc3goXCJwXCIsIHsgaWQ6IFwicGFyZW50LW1vZGFsLWRlc2NyaXB0aW9uXCIsIGNoaWxkcmVuOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd29udCB0byBleGl0PyBcIiB9KSwgX2pzeChCdXR0b24sIHsgb25DbGljazogaGFuZGxlRXhpdCwgY2hpbGRyZW46IFwiWWVzXCIgfSksIF9qc3goQnV0dG9uLCB7IG9uQ2xpY2s6IGhhbmRsZUNsb3NlLCBjaGlsZHJlbjogXCJOb1wiIH0pXSB9KSB9KSk7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdWxhclByb2R1Y3RDb21wLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVsYXJQcm9kdWN0Q29tcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFwiLi9wb3B1bGFyUHJvZHVjdENvbXAuY3NzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b25cIjtcbmltcG9ydCB7IHVzZUdldFByb2R1Y3RzUXVlcnkgfSBmcm9tIFwiLi4vLi4vYXBpL3Byb2R1Y3RBcGlcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcmQvY2FyZFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3JvdXRlc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFsZXJ0TXVpIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHNcIjtcbnZhciBQb3B1bGFyUHJvZHVjdENvbXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlR2V0UHJvZHVjdHNRdWVyeSh7IGxpbWl0OiA4LCBza2lwOiAwIH0pLCBkYXRhID0gX2EuZGF0YSwgZXJyb3IgPSBfYS5lcnJvciwgaXNMb2FkaW5nID0gX2EuaXNMb2FkaW5nO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKG51bGwpLCBhZGRFcnJvciA9IF9iWzBdLCBzZXRFcnJvciA9IF9iWzFdO1xuICAgIHZhciBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgdmFyIGhhbmRsZURpcmVjdFRvU2hvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmF2aWdhdGUoUk9VVEVTLkNBVEVHT1JJRVMpO1xuICAgIH07XG4gICAgaWYgKGlzTG9hZGluZyB8fCBlcnJvcikge1xuICAgICAgICByZXR1cm4gX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCJMb2FkaW5nLi4uLlwiIH0pO1xuICAgIH1cbiAgICB2YXIgcHJvZHVjdExpc3QgPSBkYXRhLnByb2R1Y3RzO1xuICAgIHJldHVybiAoX2pzeHMoXCJzZWN0aW9uXCIsIHsgY2xhc3NOYW1lOiBcIm1haW4tcGFnZV9zZWN0aW9uXCIsIGNoaWxkcmVuOiBbYWRkRXJyb3IgJiYgX2pzeChBbGVydE11aSwgeyBzZXRFcnJvcjogc2V0RXJyb3IsIGNoaWxkcmVuOiBhZGRFcnJvciB9KSwgX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwibWFpbi1wYWdlX2RpcmVjdGlvblwiLCBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm1haW4tcGFnZV90aXRsZS10ZXh0XCIsIGNoaWxkcmVuOiBbX2pzeChcImgxXCIsIHsgY2xhc3NOYW1lOiBcIm1haW4tcGFnZV90aXRsZVwiLCBjaGlsZHJlbjogXCJNb3N0IFBvcHVsYXIgUHJvZHVjdHNcIiB9KSwgX2pzeChcInBcIiwgeyBjbGFzc05hbWU6IFwibWFpbi1wYWdlX3RleHRcIiwgY2hpbGRyZW46IFwiTW9zdCBwb3B1bGFyIHByb2R1Y3RzXCIgfSldIH0pLCBfanN4KEJ1dHRvbiwgeyBwYWRkaW5nOiBcIjVweCA1cHhcIiwgdGV4dGNvbG9yOiBcIiNmZmZcIiwgYm9yZGVycmFkaXVzOiBcIjIwcHhcIiwgZm9udFNpemU6IFwiMTZweFwiLCB3aWR0aDogXCIxMjBweFwiLCBmdW5jOiBoYW5kbGVEaXJlY3RUb1Nob3AsIGNoaWxkcmVuOiBcIlZpZXcgQWxsXCIgfSldIH0pLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm1haW4tcGFnZV9jYXJkLWNvbnRhaW5lclwiLCBjaGlsZHJlbjogcHJvZHVjdExpc3QubWFwKGZ1bmN0aW9uIChwcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfanN4KENhcmQsIHsgc2V0RXJyb3I6IHNldEVycm9yLCB0aGluZzogcHJvZHVjdCB9LCBwcm9kdWN0LmlkKTtcbiAgICAgICAgICAgICAgICB9KSB9KV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBvcHVsYXJQcm9kdWN0Q29tcDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdGF0aXN0aWNPbk1haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RhdGlzdGljT25NYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b25cIjtcbmltcG9ydCBcIi4vc3RhdGlzdGljT25NYWluLmNzc1wiO1xudmFyIFN0YXRpc3RpY09uTWFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic3RhdGlzdGljLWRpdlwiLCBjaGlsZHJlbjogX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic3RhdGlzdGljLWNvbnRhaW5lclwiLCBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInN0YXRpc3RpYy1kaXJlY3RcIiwgY2hpbGRyZW46IFtfanN4KFwiaDJcIiwgeyBjbGFzc05hbWU6IFwic3RhdGlzdGljLXRpdGxlXCIsIGNoaWxkcmVuOiBcIkhhdmUgYSBMb29rIGF0IE91ciBVbmlxdWUgU2VsbGluZyBQcm9wb3J0aW9uc1wiIH0pLCBfanN4KEJ1dHRvbiwgeyBjaGlsZHJlbjogXCJSZWFkIG1vcmVcIiwgdGV4dGNvbG9yOiBcIiMwMDBcIiwgYmFja2dyb3VuZGNvbG9yOiBcIiNmZmZcIiwgYm9yZGVycmFkaXVzOiBcIjMwcHhcIiwgZm9udFNpemU6IFwiMjBweFwiLCBwYWRkaW5nOiBcIjVweCAxMHB4XCIsIHdpZHRoOiBcIjE1MHB4XCIsIGZ1bmM6IGZ1bmN0aW9uICgpIHsgfSB9KV0gfSksIF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInN0YXRpc3RpYy1kZXNjXCIsIGNoaWxkcmVuOiBbX2pzeChcInBcIiwgeyBjbGFzc05hbWU6IFwic3RhdGlzdGljLWRlc2NfdGl0bGVcIiwgY2hpbGRyZW46IFwiT3VyIHNvbHV0aW9ucyBhcmUgZGVzaWduZWQgZm9yIHRob3NlIHdobyB2YWx1ZSBxdWFsaXR5IGFuZCByZWxpYWJpbGl0eS4gV2Ugb2ZmZXIgcHJvZHVjdHMgdGhhdCBoZWxwIGJ1c2luZXNzZXMgZ3JvdyBmYXN0ZXIsIHdvcmsgbW9yZSBlZmZpY2llbnRseSwgYW5kIGFjaGlldmUgYmV0dGVyIHJlc3VsdHMuIEVhY2ggdG9vbCB1bmRlcmdvZXMgdGhvcm91Z2ggdGVzdGluZyB0byBlbnN1cmUgaXRzIGVmZmVjdGl2ZW5lc3MgYW5kIGR1cmFiaWxpdHkuXCIgfSksIF9qc3hzKFwic2VjdGlvblwiLCB7IGNsYXNzTmFtZTogXCJzdGF0aXN0aWMtZGVzY19zZWN0aW9uXCIsIGNoaWxkcmVuOiBbX2pzeHMoXCJhcnRpY2xlXCIsIHsgY2xhc3NOYW1lOiBcInN0YXRpc3RpYy1kZXNjX2FydGljbGVcIiwgY2hpbGRyZW46IFtfanN4KFwiaDJcIiwgeyBjbGFzc05hbWU6IFwic3RhdGlzdGljLWRlc2NfYXJ0aWNsZS10aXRsZVwiLCBjaGlsZHJlbjogXCI5OSVcIiB9KSwgX2pzeChcInBcIiwgeyBjbGFzc05hbWU6IFwic3RhdGlzdGljLWRlc2NfYXJ0aWNsZS1kZXNjcmlwdGlvblwiLCBjaGlsZHJlbjogXCJDbGllbnRzIHJlcG9ydCBpbmNyZWFzZWQgZWZmaWNpZW5jeVwiIH0pXSB9KSwgX2pzeHMoXCJhcnRpY2xlXCIsIHsgY2xhc3NOYW1lOiBcInN0YXRpc3RpYy1kZXNjX2FydGljbGVcIiwgY2hpbGRyZW46IFtfanN4KFwiaDJcIiwgeyBjbGFzc05hbWU6IFwic3RhdGlzdGljLWRlc2NfYXJ0aWNsZS10aXRsZVwiLCBjaGlsZHJlbjogXCIxMDAlXCIgfSksIF9qc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBcInN0YXRpc3RpYy1kZXNjX2FydGljbGUtZGVzY3JpcHRpb25cIiwgY2hpbGRyZW46IFwiTWVldGluZyBzdGFuZGFyZHMgYW5kIGV4cGVjdGF0aW9uc1wiIH0pXSB9KV0gfSldIH0pXSB9KSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU3RhdGlzdGljT25NYWluO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZpZXdQcm9kdWN0RGV0YWlscy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi92aWV3UHJvZHVjdERldGFpbHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBcIi4vdmlld1Byb2R1Y3REZXRhaWxzLmNzc1wiO1xuaW1wb3J0IHsgQWxlcnRNdWksIEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgUmF0aW5nIGZyb20gXCJAbXVpL21hdGVyaWFsL1JhdGluZ1wiO1xuaW1wb3J0IHsgSW1hZ2VzVmlldyB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL2FwcC9ob29rc1wiO1xuaW1wb3J0IHsgc2V0UHJvZHVjdHMsIGFkZFRvdGFsU3VtIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3VzZXJQcm9kdWN0U2xpY2VcIjtcbmltcG9ydCB7IG1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgdmFyIFZpZXdQcm9kdWN0RGV0YWlscyA9IG1lbW8oZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHByb2R1Y3QgPSBfYS5wcm9kdWN0O1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gICAgdmFyIF9iID0gdXNlU3RhdGUobnVsbCksIGVycm9yID0gX2JbMF0sIHNldEVycm9yID0gX2JbMV07XG4gICAgdmFyIHRoaW5nID0gdXNlQXBwU2VsZWN0b3IoZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS51c2VyUHJvZHVjdC5wcm9kdWN0OyB9KTtcbiAgICB2YXIgaGFuZGxlQWRkVG9CYXNrZXQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHByb2R1Y3QgPSBfYS5wcm9kdWN0O1xuICAgICAgICBpZiAodGhpbmcuZXZlcnkoZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0udGl0bGUgIT09IHByb2R1Y3QudGl0bGU7IH0pKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRQcm9kdWN0cyhwcm9kdWN0KSk7XG4gICAgICAgICAgICBkaXNwYXRjaChhZGRUb3RhbFN1bShwcm9kdWN0LnByaWNlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRFcnJvcihcIllvdSBhbHJlYWR5IGFkZCB0aGlzIHByb2R1Y3QgdG8gY2FydFwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhcInNlY3Rpb25cIiwgeyBjbGFzc05hbWU6IFwicHJvZHVjdC1jYXJkXCIsIGNoaWxkcmVuOiBbZXJyb3IgJiYgX2pzeChBbGVydE11aSwgeyBzZXRFcnJvcjogc2V0RXJyb3IsIGNoaWxkcmVuOiBlcnJvciB9KSwgX2pzeChJbWFnZXNWaWV3LCB7IHRoaW5nOiBwcm9kdWN0IH0pLCBfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwcm9kdWN0LWNhcmQtZGVzY3JpcHRpb25cIiwgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwcm9kdWN0LWNhcmQtbWFpbi1pbmZvcm1hdGlvblwiLCBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInByb2R1Y3QtY2FyZC1oZWFkbGluZ1wiLCBjaGlsZHJlbjogW19qc3goXCJoMlwiLCB7IGNsYXNzTmFtZTogXCJwcm9kdWN0LWNhcmQtdGl0bGVcIiwgY2hpbGRyZW46IHByb2R1Y3QudGl0bGUgfSksIF9qc3hzKFwicFwiLCB7IGNsYXNzTmFtZTogXCJwcm9kdWN0LWNhcmQtcHJpY2VcIiwgY2hpbGRyZW46IFtfanN4cyhcInNwYW5cIiwgeyBjaGlsZHJlbjogW1wiJFwiLCBwcm9kdWN0LnByaWNlXSB9KSwgXCIgfFwiLCBfanN4KFJhdGluZywgeyBuYW1lOiBcInJlYWQtb25seVwiLCB2YWx1ZTogcHJvZHVjdC5yYXRpbmcsIHJlYWRPbmx5OiB0cnVlIH0pLCBcIiAoXCIsIHByb2R1Y3QucmV2aWV3cy5sZW5ndGgsIFwiIHJldmlld3MpXCJdIH0pXSB9KSwgX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBcInByb2R1Y3QtY2FyZC1kZXNjcmlwdGlvbl9fcFwiLCBjaGlsZHJlbjogcHJvZHVjdC5kZXNjcmlwdGlvbiB9KSwgX2pzeHMoXCJ1bFwiLCB7IGNsYXNzTmFtZTogXCJwcm9kdWN0LWNhcmQtbGlzdFwiLCBjaGlsZHJlbjogW19qc3hzKFwibGlcIiwgeyBjaGlsZHJlbjogW1wiV2VpZ2h0OiBcIiwgcHJvZHVjdC53ZWlnaHQsIFwiIGxiXCJdIH0pLCBfanN4cyhcImxpXCIsIHsgY2hpbGRyZW46IFtcIldpZHRoOiBcIiwgcHJvZHVjdC5kaW1lbnNpb25zLndpZHRoLCBcIiBpbmNoXCJdIH0pLCBfanN4cyhcImxpXCIsIHsgY2hpbGRyZW46IFtcIkhlaWdodDogXCIsIHByb2R1Y3QuZGltZW5zaW9ucy5oZWlnaHQsIFwiIGluY2hcIl0gfSksIF9qc3hzKFwibGlcIiwgeyBjaGlsZHJlbjogW1wiRGVwdGg6IFwiLCBwcm9kdWN0LmRpbWVuc2lvbnMuZGVwdGgsIFwiIGluY2hcIl0gfSldIH0pXSB9KV0gfSksIF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInByb2R1Y3QtY2FyZC1jb250cm9sbC1wYW5lbFwiLCBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicHJvZHVjdC1jYXJkLWFkZC10by1jYXJ0XCIsIGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgeyBib3JkZXJyYWRpdXM6IFwiMjBweFwiLCBmb250U2l6ZTogXCIxOHB4XCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZGNvbG9yOiBcIiMwMDBcIiwgcGFkZGluZzogXCI1cHggMFwiLCB0ZXh0Y29sb3I6IFwiI2ZmZlwiLCBjaGlsZHJlbjogXCJBZGQgdG8gQ2FydFwiLCBmdW5jOiBmdW5jdGlvbiAoKSB7IHJldHVybiBoYW5kbGVBZGRUb0Jhc2tldCh7IHByb2R1Y3Q6IHByb2R1Y3QgfSk7IH0gfSkgfSksIF9qc3goQnV0dG9uLCB7IGJvcmRlcnJhZGl1czogXCIyMHB4XCIsIGZvbnRTaXplOiBcIjE4cHhcIiwgd2lkdGg6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kY29sb3I6IFwiI2ZmZlwiLCBwYWRkaW5nOiBcIjVweCAwXCIsIGJvcmRlckNvbG9yOiBcIiMwMDBcIiwgdGV4dGNvbG9yOiBcIiMwMDBcIiwgY2hpbGRyZW46IFwiQnV5IG5vd1wiLCBmdW5jOiBmdW5jdGlvbiAoKSB7IH0gfSldIH0pLCBfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJhcnRpY2xlXCIsIHsgY2xhc3NOYW1lOiBcInByb2R1Y3QtY2FyZC1kZWxpdmVyeVwiLCBjaGlsZHJlbjogW19qc3goXCJpbWdcIiwgeyBzcmM6IFwiL2ltYWdlcy93b3JsZHdpZGUuc3ZnXCIsIGFsdDogXCJ3b3JsZHdpZGVcIiB9KSwgX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCJGcmVlIHdvcmxkd2lkZSBzaGlwcGluZyBvbiBhbGwgb3JkZXJzIG92ZXIgJDEwMFwiIH0pXSB9KSwgX2pzeHMoXCJhcnRpY2xlXCIsIHsgY2xhc3NOYW1lOiBcInByb2R1Y3QtY2FyZC1kZWxpdmVyeVwiLCBjaGlsZHJlbjogW19qc3goXCJpbWdcIiwgeyBzcmM6IFwiL2ltYWdlcy9kZWxpdmVyeS5zdmdcIiwgYWx0OiBcImRlbGl2ZXJ5XCIgfSksIF9qc3hzKFwicFwiLCB7IGNoaWxkcmVuOiBbXCJEZWxpdmVycyBpbjogXCIsIHByb2R1Y3Quc2hpcHBpbmdJbmZvcm1hdGlvbl0gfSldIH0pXSB9KV0gfSldIH0pKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgbWVtbyhWaWV3UHJvZHVjdERldGFpbHMpO1xuIiwiaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHZhciBMYXp5QXV0aCA9IGxhenkoZnVuY3Rpb24gKCkgeyByZXR1cm4gaW1wb3J0KFwiLi9hdXRoXCIpOyB9KTtcbiIsImltcG9ydCB7IGxhenkgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB2YXIgQ2F0ZWdvcmllc0xhenkgPSBsYXp5KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaW1wb3J0KFwiLi9jYXRlZ29yaWVzUGFnZVwiKTtcbn0pO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWVQYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWVQYWdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUG9wdWxhclByb2R1Y3RDb21wIGZyb20gXCIuLi8uLi9sYXlvdXRzL3BvcHVsYXJQcm9kdWN0Q29tcC9wb3B1bGFyUHJvZHVjdENvbXBcIjtcbmltcG9ydCBTdGF0aXN0aWNPbk1haW4gZnJvbSBcIi4uLy4uL2xheW91dHMvc3RhdGlzdGljT25NYWluL3N0YXRpc3RpY09uTWFpblwiO1xuaW1wb3J0IFwiLi9ob21lUGFnZS5jc3NcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICAgIHJldHVybiAoX2pzeHMoXCJtYWluXCIsIHsgY2xhc3NOYW1lOiBcImhvbWUtcGFnZVwiLCBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaG9tZS1wYWdlX2VudGlyZS1ibG9ja1wiLCBjaGlsZHJlbjogX2pzeHMoXCJhcnRpY2xlXCIsIHsgY2xhc3NOYW1lOiBcImhvbWUtcGFnZV9hcnRpY2xlXCIsIGNoaWxkcmVuOiBbX2pzeChcImgxXCIsIHsgY2xhc3NOYW1lOiBcImhvbWUtcGFnZV90aXRsZVwiLCBjaGlsZHJlbjogXCJDcmFmdGluZyBDb21mb3J0LCBSZWRlZmluaW5nIFNwYWNlcy4gWW91ciBIb21lLCBZb3VyIFNpZ25hdHVyZSBTdHlsZSFcIiB9KSwgX2pzeChcInBcIiwgeyBjbGFzc05hbWU6IFwiaG9tZS1wYWdlX3RleHRcIiwgY2hpbGRyZW46IFwiV2UgY3JlYXRlIHNwYWNlcyB3aGVyZSBxdWFsaXR5IGFuZCBjb21mb3J0IGFyZSB0aGUgbm9ybS4gT3VyIHByb2R1Y3RzIGhlbHAgbWFrZSB5b3VyIGhvbWUgbW9yZSBjb21mb3J0YWJsZSBhbmQgeW91ciB3b3JrIG1vcmUgY29udmVuaWVudC4gQ2hvb3NlIGl0ZW1zIHRoYXQgd2lsbCBjb21wbGVtZW50IHlvdXIgc3R5bGUgYW5kIGxhc3QgZm9yIHllYXJzIHRvIGNvbWUuXCIgfSldIH0pIH0pLCBfanN4KFBvcHVsYXJQcm9kdWN0Q29tcCwge30pLCBfanN4KFN0YXRpc3RpY09uTWFpbiwge30pXSB9KSk7XG59XG4iLCJpbXBvcnQgeyBMYXp5QXV0aCBhcyBBdXRoIH0gZnJvbSBcIi4vYXV0aC9hdXRoLmxhenlcIjtcbmltcG9ydCB7IENhdGVnb3JpZXNMYXp5IGFzIENhdGVnb3JpZXNQYWdlIH0gZnJvbSBcIi4vY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmxhenlcIjtcbmltcG9ydCB7IFJlZ2lzdHJhdGlvbkxhenkgYXMgUmVnaXN0cmF0aW9uIH0gZnJvbSBcIi4vcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5sYXp5XCI7XG5pbXBvcnQgeyBTaG9wTGlzdExhenkgYXMgU2hvcExpc3QgfSBmcm9tIFwiLi9zaG9wTGlzdC9zaG9wTGlzdC5sYXp5XCI7XG5pbXBvcnQgeyBWaWV3UHJvZHVjdExhenkgYXMgVmlld1Byb2R1Y3QgfSBmcm9tIFwiLi92aWV3UHJvZHVjdC92aWV3UHJvZHVjdC5sYXp5XCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVBhZ2UvaG9tZVBhZ2VcIjtcbmV4cG9ydCB7IEhvbWVQYWdlLCBBdXRoLCBDYXRlZ29yaWVzUGFnZSwgUmVnaXN0cmF0aW9uLCBTaG9wTGlzdCwgVmlld1Byb2R1Y3QgfTtcbiIsImltcG9ydCB7IGxhenkgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB2YXIgUmVnaXN0cmF0aW9uTGF6eSA9IGxhenkoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpbXBvcnQoXCIuL3JlZ2lzdHJhdGlvblwiKTtcbn0pO1xuIiwiaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHZhciBTaG9wTGlzdExhenkgPSBsYXp5KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaW1wb3J0KFwiLi9zaG9wTGlzdFwiKTtcbn0pO1xuIiwiaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHZhciBWaWV3UHJvZHVjdExhenkgPSBsYXp5KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGltcG9ydChcIi4vdmlld1Byb2R1Y3RcIik7IH0pO1xuIiwidmFyIF9hO1xuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xudmFyIGluaXRpYWxTdGF0ZSA9IHtcbiAgICBwcm9kdWN0OiBbXSxcbiAgICBzdWJ0b3RhbDogMCxcbiAgICBlcnJvcjogbnVsbCxcbn07XG52YXIgdXNlclByb2R1Y3RTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiBcInVzZXJQcm9kdWN0c1wiLFxuICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIHNldFByb2R1Y3RzOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5wcm9kdWN0LmluY2x1ZGVzKGFjdGlvbnMucGF5bG9hZCkpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5lcnJvciA9IFwiWW91IGN1cnJlbnRseSBhZGRlZCB0aGlzIHByb2R1Y3QgdG8gY2FydFwiO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRlLnByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0LmNvbmNhdChhY3Rpb25zLnBheWxvYWQpO1xuICAgICAgICB9LFxuICAgICAgICBkZWxldGVQcm9kdWN0OiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbnMpIHtcbiAgICAgICAgICAgIHN0YXRlLnByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0LmZpbHRlcihmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5pZCAhPT0gYWN0aW9ucy5wYXlsb2FkOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkVG90YWxTdW06IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9ucykge1xuICAgICAgICAgICAgc3RhdGUuc3VidG90YWwgPVxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoKHN0YXRlLnN1YnRvdGFsICsgYWN0aW9ucy5wYXlsb2FkKSAqIDEwMCkgLyAxMDA7XG4gICAgICAgIH0sXG4gICAgICAgIG1pbnVzVG90YWxTdW06IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9ucykge1xuICAgICAgICAgICAgc3RhdGUuc3VidG90YWwgPVxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoKHN0YXRlLnN1YnRvdGFsIC0gYWN0aW9ucy5wYXlsb2FkKSAqIDEwMCkgLyAxMDA7XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuZXhwb3J0IHZhciBzZXRQcm9kdWN0cyA9IChfYSA9IHVzZXJQcm9kdWN0U2xpY2UuYWN0aW9ucywgX2Euc2V0UHJvZHVjdHMpLCBkZWxldGVQcm9kdWN0ID0gX2EuZGVsZXRlUHJvZHVjdCwgYWRkVG90YWxTdW0gPSBfYS5hZGRUb3RhbFN1bSwgbWludXNUb3RhbFN1bSA9IF9hLm1pbnVzVG90YWxTdW07XG5leHBvcnQgZGVmYXVsdCB1c2VyUHJvZHVjdFNsaWNlLnJlZHVjZXI7XG4iLCJleHBvcnQgdmFyIFJPVVRFUyA9IHtcbiAgICBIT01FOiBcIi9cIixcbiAgICBSRUdJU1RFUjogXCIvcmVnaXN0cmF0aW9uXCIsXG4gICAgTE9HSU46IFwiL2xvZ2luXCIsXG4gICAgQ0FURUdPUklFUzogXCIvY2F0ZWdvcmllc1wiLFxuICAgIEJBU0tFVDogXCIvYmFza2V0XCIsXG4gICAgVklFV1BST0RVQ1Q6IFwiL2NhdGVnb3JpZXMvOmlkXCIsXG59O1xuIiwiZXhwb3J0IHZhciBjb252ZXJ0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlVGltZSkge1xuICAgIHZhciBkYXRlT2JqID0gbmV3IERhdGUoZGF0ZVRpbWUpO1xuICAgIHJldHVybiAoXCJcIi5jb25jYXQoZGF0ZU9iai5nZXREYXRlKCkgPCAxMCA/IFwiMFwiLmNvbmNhdChkYXRlT2JqLmdldERhdGUoKSkgOiBcIlwiLmNvbmNhdChkYXRlT2JqLmdldERhdGUoKSksIFwiLlwiKSArXG4gICAgICAgIFwiXCIuY29uY2F0KGRhdGVPYmouZ2V0TW9udGgoKSArIDEgPCAxMCA/IFwiMFwiLmNvbmNhdChkYXRlT2JqLmdldE1vbnRoKCkgKyAxKSA6IFwiXCIuY29uY2F0KGRhdGVPYmouZ2V0TW9udGgoKSArIDEpLCBcIi5cIikgK1xuICAgICAgICBcIlwiLmNvbmNhdChkYXRlT2JqLmdldEZ1bGxZZWFyKCksIFwiXFxuICAgICBcIikuY29uY2F0KGRhdGVPYmouZ2V0SG91cnMoKSA8IDEwID8gXCIwXCIuY29uY2F0KGRhdGVPYmouZ2V0SG91cnMoKSkgOiBcIlwiLmNvbmNhdChkYXRlT2JqLmdldEhvdXJzKCkpLCBcIjpcIikgK1xuICAgICAgICBcIlwiLmNvbmNhdChkYXRlT2JqLmdldE1pbnV0ZXMoKSA8IDEwID8gXCIwXCIuY29uY2F0KGRhdGVPYmouZ2V0TWludXRlcygpKSA6IFwiXCIuY29uY2F0KGRhdGVPYmouZ2V0TWludXRlcygpKSwgXCI6XCIpICtcbiAgICAgICAgXCJcIi5jb25jYXQoZGF0ZU9iai5nZXRTZWNvbmRzKCkgPCAxMCA/IFwiMFwiLmNvbmNhdChkYXRlT2JqLmdldFNlY29uZHMoKSkgOiBcIlwiLmNvbmNhdChkYXRlT2JqLmdldFNlY29uZHMoKSkpKTtcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9