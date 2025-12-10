"use strict";
(self["webpackChunkwebpack_app"] = self["webpackChunkwebpack_app"] || []).push([["src_pages_registration_registration_tsx"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/registration/registration.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/registration/registration.css ***!
  \***************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.registration-page {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.registration {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  border: 1px solid var(--TotalBlack);
  border-radius: 20px;
  margin: 30px 0;
}
.registration-con {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: start;
  gap: 30px;
  margin: 20px 30px;
}
.registration-text {
  width: 100%;
}

.registration-title {
  font-size: 36px;
  color: var(--TotalBlack);
}
.redirect {
  color: var(--HoverButtonGray);
}
.registration-login {
  color: var(--TotalBlack);
}
.redirect,
.registration-login {
  font-family: var(--Oxygen);
}
.registration-form {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
}
.registration-inputs {
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
}

.registration-inputs > label {
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  font-family: var(--Oxygen);
  width: 45%;
}
.registration-terms {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 10px;
  cursor: pointer;
}
.img {
  width: 50%;
}
.image {
  width: 100%;
  height: 100%;
  border-radius: 0 20px 20px 0;
}

@media screen and (max-width: 768px) {
  .img {
    display: none;
  }
  .auth-con {
    width: 90%;
  }
  .registration-con {
    width: 90%;
  }
}
@media screen and (max-width: 550px) {
  .registration-inputs {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .registration-inputs > label {
    width: 95%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/pages/registration/registration.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,mCAAmC;EACnC,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;EACT,iBAAiB;AACnB;AACA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,wBAAwB;AAC1B;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,wBAAwB;AAC1B;AACA;;EAEE,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,0BAA0B;EAC1B,UAAU;AACZ;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;EACT,eAAe;AACjB;AACA;EACE,UAAU;AACZ;AACA;EACE,WAAW;EACX,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;AACA;EACE;IACE,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,UAAU;EACZ;AACF","sourcesContent":[".registration-page {\r\n  display: flex;\r\n  width: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n.registration {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 80%;\r\n  border: 1px solid var(--TotalBlack);\r\n  border-radius: 20px;\r\n  margin: 30px 0;\r\n}\r\n.registration-con {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  align-items: center;\r\n  justify-content: start;\r\n  gap: 30px;\r\n  margin: 20px 30px;\r\n}\r\n.registration-text {\r\n  width: 100%;\r\n}\r\n\r\n.registration-title {\r\n  font-size: 36px;\r\n  color: var(--TotalBlack);\r\n}\r\n.redirect {\r\n  color: var(--HoverButtonGray);\r\n}\r\n.registration-login {\r\n  color: var(--TotalBlack);\r\n}\r\n.redirect,\r\n.registration-login {\r\n  font-family: var(--Oxygen);\r\n}\r\n.registration-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 40px;\r\n  width: 100%;\r\n}\r\n.registration-inputs {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 30px;\r\n  width: 100%;\r\n}\r\n\r\n.registration-inputs > label {\r\n  text-align: left;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  gap: 10px;\r\n  font-family: var(--Oxygen);\r\n  width: 45%;\r\n}\r\n.registration-terms {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: start;\r\n  gap: 10px;\r\n  cursor: pointer;\r\n}\r\n.img {\r\n  width: 50%;\r\n}\r\n.image {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 0 20px 20px 0;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .img {\r\n    display: none;\r\n  }\r\n  .auth-con {\r\n    width: 90%;\r\n  }\r\n  .registration-con {\r\n    width: 90%;\r\n  }\r\n}\r\n@media screen and (max-width: 550px) {\r\n  .registration-inputs {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .registration-inputs > label {\r\n    width: 95%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/inputs/formInput/formInput.tsx":
/*!*******************************************************!*\
  !*** ./src/components/inputs/formInput/formInput.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _baseInput_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../baseInput/input */ "./src/components/inputs/baseInput/input.tsx");


function FormInput(_a) {
    var label = _a.label, name = _a.name, placeholder = _a.placeholder, type = _a.type, width = _a.width, func = _a.func;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: [label, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_baseInput_input__WEBPACK_IMPORTED_MODULE_1__["default"], { name: name, placeholder: placeholder, type: type, requared: true, func: func, styles: {
                    width: width !== null && width !== void 0 ? width : "90%",
                    backgroundColor: "#fff",
                    border: "1px solid #DEDFE1",
                    color: "#000",
                    borderRadius: "30px",
                } })] }));
}


/***/ }),

/***/ "./src/pages/registration/registration.css":
/*!*************************************************!*\
  !*** ./src/pages/registration/registration.css ***!
  \*************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_registration_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./registration.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/registration/registration.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_registration_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_registration_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_registration_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_registration_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/registration/registration.tsx":
/*!*************************************************!*\
  !*** ./src/pages/registration/registration.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Registration)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _registration_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.css */ "./src/pages/registration/registration.css");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/routes */ "./src/utils/routes.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _components_inputs_formInput_formInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/inputs/formInput/formInput */ "./src/components/inputs/formInput/formInput.tsx");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/button/button */ "./src/components/button/button.tsx");
/* harmony import */ var _api_userApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/userApi */ "./src/api/userApi.ts");
/* harmony import */ var _components_alert_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/alert/alert */ "./src/components/alert/alert.tsx");
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









function Registration() {
    var handlePreventDefault = function (e) {
        e.preventDefault();
    };
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), error = _a[0], setError = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        email: "",
        password: "",
    }), newUser = _b[0], setNewUser = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), checkPolicy = _c[0], setCheckPolicy = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), cPassword = _d[0], setcPassword = _d[1];
    var adduser = (0,_api_userApi__WEBPACK_IMPORTED_MODULE_7__.usePostUserMutation)()[0];
    var handleRegister = function () {
        if (newUser.password !== cPassword) {
            setError("Passwords mismatch");
            return;
        }
        if (newUser.name.length < 6) {
            setError("Username is small");
            return;
        }
        adduser(newUser);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", { className: "registration-page", children: [error && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_alert_alert__WEBPACK_IMPORTED_MODULE_8__.AlertMui, { setError: setError, children: error }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "registration", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "registration-con", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "registration-text", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: "registration-title", children: "Signup" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { className: "redirect", children: ["Already Have An Account,", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, { to: _utils_routes__WEBPACK_IMPORTED_MODULE_3__.ROUTES.LOGIN, className: "registration-login", children: "Login" }), "."] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handlePreventDefault, className: "registration-form", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "registration-inputs", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_inputs_formInput_formInput__WEBPACK_IMPORTED_MODULE_5__["default"], { label: "Username", name: "Username", placeholder: "Enter username", type: "text", func: function (e) {
                                                    return setNewUser(function (prev) { return (__assign(__assign({}, prev), { name: e.target.value })); });
                                                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_inputs_formInput_formInput__WEBPACK_IMPORTED_MODULE_5__["default"], { label: "Email", name: "email", placeholder: "Enter email", type: "text", func: function (e) {
                                                    return setNewUser(function (prev) { return (__assign(__assign({}, prev), { email: e.target.value })); });
                                                } })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "registration-inputs", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_inputs_formInput_formInput__WEBPACK_IMPORTED_MODULE_5__["default"], { label: "Password", name: "password", placeholder: "Enter password", type: "password", func: function (e) {
                                                    return setNewUser(function (prev) { return (__assign(__assign({}, prev), { password: e.target.value })); });
                                                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_inputs_formInput_formInput__WEBPACK_IMPORTED_MODULE_5__["default"], { label: "Confirm Password", name: "c-password", placeholder: "Confirm password", type: "password", func: function (e) {
                                                    return setcPassword(e.target.value);
                                                } })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { className: "registration-terms", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", required: true, checked: checkPolicy, onChange: function (e) {
                                                    return setCheckPolicy(e.target.checked);
                                                } }), "I have read and agreed to the Terms of Service and Privacy Policy"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button_button__WEBPACK_IMPORTED_MODULE_6__["default"], { width: "100%", padding: "10px 0", borderradius: "30px", fontSize: "20px", textcolor: "#fff", disabled: !checkPolicy, func: function () { return handleRegister(); }, children: "Create Account" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "img", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: "image", src: "/images/registration-img.jpg" }) })] })] }));
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX3JlZ2lzdHJhdGlvbl9yZWdpc3RyYXRpb25fdHN4LmU2ZTUwOWJkNjk2ZTQwNDYwOTdhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBHQUEwRyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFB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QUNBLFlBQVksdURBQUssV0FBVyxvREFBb0Qsc0RBQUksQ0FBQyw2REFBUSxJQUFJLHFDQUFxQyxHQUFHLHVEQUFLLFVBQVUsc0NBQXNDLHVEQUFLLFVBQVUsMENBQTBDLHVEQUFLLFVBQVUsMkNBQTJDLHNEQUFJLFNBQVMscURBQXFELEdBQUcsdURBQUssUUFBUSxtRUFBbUUsc0RBQUksQ0FBQyxrREFBSSxJQUFJLElBQUksaURBQU0sNERBQTRELFNBQVMsSUFBSSxHQUFHLHVEQUFLLFdBQVcsMkVBQTJFLHVEQUFLLFVBQVUsNkNBQTZDLHNEQUFJLENBQUMsOEVBQVMsSUFBSTtBQUNsdEIsd0ZBQXdGLDRCQUE0QixXQUFXLHNCQUFzQixLQUFLO0FBQzFKLG1EQUFtRCxHQUFHLHNEQUFJLENBQUMsOEVBQVMsSUFBSTtBQUN4RSx3RkFBd0YsNEJBQTRCLFdBQVcsdUJBQXVCLEtBQUs7QUFDM0osbURBQW1ELElBQUksR0FBRyx1REFBSyxVQUFVLDZDQUE2QyxzREFBSSxDQUFDLDhFQUFTLElBQUk7QUFDeEksd0ZBQXdGLDRCQUE0QixXQUFXLDBCQUEwQixLQUFLO0FBQzlKLG1EQUFtRCxHQUFHLHNEQUFJLENBQUMsOEVBQVMsSUFBSTtBQUN4RTtBQUNBLG1EQUFtRCxJQUFJLEdBQUcsdURBQUssWUFBWSw0Q0FBNEMsc0RBQUksWUFBWTtBQUN2STtBQUNBLG1EQUFtRCx5RUFBeUUsR0FBRyxzREFBSSxDQUFDLGlFQUFNLElBQUkseUlBQXlJLDBCQUEwQiw4QkFBOEIsSUFBSSxJQUFJLEdBQUcsc0RBQUksVUFBVSw0QkFBNEIsc0RBQUksVUFBVSx5REFBeUQsR0FBRyxJQUFJLElBQUk7QUFDdGQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9wYWdlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9mb3JtSW5wdXQvZm9ybUlucHV0LnRzeCIsIndlYnBhY2s6Ly93ZWJwYWNrLWFwcC8uL3NyYy9wYWdlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNzcz83NTczIiwid2VicGFjazovL3dlYnBhY2stYXBwLy4vc3JjL3BhZ2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucmVnaXN0cmF0aW9uLXBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5yZWdpc3RyYXRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tVG90YWxCbGFjayk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBtYXJnaW46IDMwcHggMDtcclxufVxyXG4ucmVnaXN0cmF0aW9uLWNvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGdhcDogMzBweDtcclxuICBtYXJnaW46IDIwcHggMzBweDtcclxufVxyXG4ucmVnaXN0cmF0aW9uLXRleHQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmVnaXN0cmF0aW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgY29sb3I6IHZhcigtLVRvdGFsQmxhY2spO1xyXG59XHJcbi5yZWRpcmVjdCB7XHJcbiAgY29sb3I6IHZhcigtLUhvdmVyQnV0dG9uR3JheSk7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1sb2dpbiB7XHJcbiAgY29sb3I6IHZhcigtLVRvdGFsQmxhY2spO1xyXG59XHJcbi5yZWRpcmVjdCxcclxuLnJlZ2lzdHJhdGlvbi1sb2dpbiB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLU94eWdlbik7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5yZWdpc3RyYXRpb24taW5wdXRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZ2FwOiAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmVnaXN0cmF0aW9uLWlucHV0cyA+IGxhYmVsIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1PeHlnZW4pO1xyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi10ZXJtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBnYXA6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbWcge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLmltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaW1nIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5hdXRoLWNvbiB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuICAucmVnaXN0cmF0aW9uLWNvbiB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gIC5yZWdpc3RyYXRpb24taW5wdXRzIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5yZWdpc3RyYXRpb24taW5wdXRzID4gbGFiZWwge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBOztFQUVFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBQ0E7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucmVnaXN0cmF0aW9uLXBhZ2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnJlZ2lzdHJhdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1Ub3RhbEJsYWNrKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBtYXJnaW46IDMwcHggMDtcXHJcXG59XFxyXFxuLnJlZ2lzdHJhdGlvbi1jb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBtYXJnaW46IDIwcHggMzBweDtcXHJcXG59XFxyXFxuLnJlZ2lzdHJhdGlvbi10ZXh0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVnaXN0cmF0aW9uLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1Ub3RhbEJsYWNrKTtcXHJcXG59XFxyXFxuLnJlZGlyZWN0IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1Ib3ZlckJ1dHRvbkdyYXkpO1xcclxcbn1cXHJcXG4ucmVnaXN0cmF0aW9uLWxvZ2luIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1Ub3RhbEJsYWNrKTtcXHJcXG59XFxyXFxuLnJlZGlyZWN0LFxcclxcbi5yZWdpc3RyYXRpb24tbG9naW4ge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLU94eWdlbik7XFxyXFxufVxcclxcbi5yZWdpc3RyYXRpb24tZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4ucmVnaXN0cmF0aW9uLWlucHV0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVnaXN0cmF0aW9uLWlucHV0cyA+IGxhYmVsIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1PeHlnZW4pO1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG59XFxyXFxuLnJlZ2lzdHJhdGlvbi10ZXJtcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uaW1nIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcbi5pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMjBweCAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuaW1nIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5hdXRoLWNvbiB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxuICAucmVnaXN0cmF0aW9uLWNvbiB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxyXFxuICAucmVnaXN0cmF0aW9uLWlucHV0cyB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLnJlZ2lzdHJhdGlvbi1pbnB1dHMgPiBsYWJlbCB7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuLi9iYXNlSW5wdXQvaW5wdXRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1JbnB1dChfYSkge1xuICAgIHZhciBsYWJlbCA9IF9hLmxhYmVsLCBuYW1lID0gX2EubmFtZSwgcGxhY2Vob2xkZXIgPSBfYS5wbGFjZWhvbGRlciwgdHlwZSA9IF9hLnR5cGUsIHdpZHRoID0gX2Eud2lkdGgsIGZ1bmMgPSBfYS5mdW5jO1xuICAgIHJldHVybiAoX2pzeHMoXCJsYWJlbFwiLCB7IGNoaWxkcmVuOiBbbGFiZWwsIF9qc3goSW5wdXQsIHsgbmFtZTogbmFtZSwgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLCB0eXBlOiB0eXBlLCByZXF1YXJlZDogdHJ1ZSwgZnVuYzogZnVuYywgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCAhPT0gbnVsbCAmJiB3aWR0aCAhPT0gdm9pZCAwID8gd2lkdGggOiBcIjkwJVwiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNERURGRTFcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMzBweFwiLFxuICAgICAgICAgICAgICAgIH0gfSldIH0pKTtcbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZWdpc3RyYXRpb24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVnaXN0cmF0aW9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vcmVnaXN0cmF0aW9uLmNzc1wiO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3JvdXRlc1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgRm9ybUlucHV0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2lucHV0cy9mb3JtSW5wdXQvZm9ybUlucHV0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b25cIjtcbmltcG9ydCB7IHVzZVBvc3RVc2VyTXV0YXRpb24gfSBmcm9tIFwiLi4vLi4vYXBpL3VzZXJBcGlcIjtcbmltcG9ydCB7IEFsZXJ0TXVpIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWxlcnQvYWxlcnRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdHJhdGlvbigpIHtcbiAgICB2YXIgaGFuZGxlUHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShudWxsKSwgZXJyb3IgPSBfYVswXSwgc2V0RXJyb3IgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZSh7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICB9KSwgbmV3VXNlciA9IF9iWzBdLCBzZXROZXdVc2VyID0gX2JbMV07XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoZmFsc2UpLCBjaGVja1BvbGljeSA9IF9jWzBdLCBzZXRDaGVja1BvbGljeSA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKFwiXCIpLCBjUGFzc3dvcmQgPSBfZFswXSwgc2V0Y1Bhc3N3b3JkID0gX2RbMV07XG4gICAgdmFyIGFkZHVzZXIgPSB1c2VQb3N0VXNlck11dGF0aW9uKClbMF07XG4gICAgdmFyIGhhbmRsZVJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobmV3VXNlci5wYXNzd29yZCAhPT0gY1Bhc3N3b3JkKSB7XG4gICAgICAgICAgICBzZXRFcnJvcihcIlBhc3N3b3JkcyBtaXNtYXRjaFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VXNlci5uYW1lLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgICAgIHNldEVycm9yKFwiVXNlcm5hbWUgaXMgc21hbGxcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWRkdXNlcihuZXdVc2VyKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoXCJtYWluXCIsIHsgY2xhc3NOYW1lOiBcInJlZ2lzdHJhdGlvbi1wYWdlXCIsIGNoaWxkcmVuOiBbZXJyb3IgJiYgX2pzeChBbGVydE11aSwgeyBzZXRFcnJvcjogc2V0RXJyb3IsIGNoaWxkcmVuOiBlcnJvciB9KSwgX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicmVnaXN0cmF0aW9uXCIsIGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicmVnaXN0cmF0aW9uLWNvblwiLCBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJlZ2lzdHJhdGlvbi10ZXh0XCIsIGNoaWxkcmVuOiBbX2pzeChcImgyXCIsIHsgY2xhc3NOYW1lOiBcInJlZ2lzdHJhdGlvbi10aXRsZVwiLCBjaGlsZHJlbjogXCJTaWdudXBcIiB9KSwgX2pzeHMoXCJwXCIsIHsgY2xhc3NOYW1lOiBcInJlZGlyZWN0XCIsIGNoaWxkcmVuOiBbXCJBbHJlYWR5IEhhdmUgQW4gQWNjb3VudCxcIiwgXCIgXCIsIF9qc3goTGluaywgeyB0bzogUk9VVEVTLkxPR0lOLCBjbGFzc05hbWU6IFwicmVnaXN0cmF0aW9uLWxvZ2luXCIsIGNoaWxkcmVuOiBcIkxvZ2luXCIgfSksIFwiLlwiXSB9KV0gfSksIF9qc3hzKFwiZm9ybVwiLCB7IG9uU3VibWl0OiBoYW5kbGVQcmV2ZW50RGVmYXVsdCwgY2xhc3NOYW1lOiBcInJlZ2lzdHJhdGlvbi1mb3JtXCIsIGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicmVnaXN0cmF0aW9uLWlucHV0c1wiLCBjaGlsZHJlbjogW19qc3goRm9ybUlucHV0LCB7IGxhYmVsOiBcIlVzZXJuYW1lXCIsIG5hbWU6IFwiVXNlcm5hbWVcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgdXNlcm5hbWVcIiwgdHlwZTogXCJ0ZXh0XCIsIGZ1bmM6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldE5ld1VzZXIoZnVuY3Rpb24gKHByZXYpIHsgcmV0dXJuIChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJldiksIHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSkpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSksIF9qc3goRm9ybUlucHV0LCB7IGxhYmVsOiBcIkVtYWlsXCIsIG5hbWU6IFwiZW1haWxcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgZW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIsIGZ1bmM6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldE5ld1VzZXIoZnVuY3Rpb24gKHByZXYpIHsgcmV0dXJuIChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJldiksIHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pXSB9KSwgX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicmVnaXN0cmF0aW9uLWlucHV0c1wiLCBjaGlsZHJlbjogW19qc3goRm9ybUlucHV0LCB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIG5hbWU6IFwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgcGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiLCBmdW5jOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXROZXdVc2VyKGZ1bmN0aW9uIChwcmV2KSB7IHJldHVybiAoX19hc3NpZ24oX19hc3NpZ24oe30sIHByZXYpLCB7IHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSwgX2pzeChGb3JtSW5wdXQsIHsgbGFiZWw6IFwiQ29uZmlybSBQYXNzd29yZFwiLCBuYW1lOiBcImMtcGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6IFwiQ29uZmlybSBwYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIsIGZ1bmM6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldGNQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pXSB9KSwgX2pzeHMoXCJsYWJlbFwiLCB7IGNsYXNzTmFtZTogXCJyZWdpc3RyYXRpb24tdGVybXNcIiwgY2hpbGRyZW46IFtfanN4KFwiaW5wdXRcIiwgeyB0eXBlOiBcImNoZWNrYm94XCIsIHJlcXVpcmVkOiB0cnVlLCBjaGVja2VkOiBjaGVja1BvbGljeSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldENoZWNrUG9saWN5KGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSwgXCJJIGhhdmUgcmVhZCBhbmQgYWdyZWVkIHRvIHRoZSBUZXJtcyBvZiBTZXJ2aWNlIGFuZCBQcml2YWN5IFBvbGljeVwiXSB9KSwgX2pzeChCdXR0b24sIHsgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nOiBcIjEwcHggMFwiLCBib3JkZXJyYWRpdXM6IFwiMzBweFwiLCBmb250U2l6ZTogXCIyMHB4XCIsIHRleHRjb2xvcjogXCIjZmZmXCIsIGRpc2FibGVkOiAhY2hlY2tQb2xpY3ksIGZ1bmM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhhbmRsZVJlZ2lzdGVyKCk7IH0sIGNoaWxkcmVuOiBcIkNyZWF0ZSBBY2NvdW50XCIgfSldIH0pXSB9KSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJpbWdcIiwgY2hpbGRyZW46IF9qc3goXCJpbWdcIiwgeyBjbGFzc05hbWU6IFwiaW1hZ2VcIiwgc3JjOiBcIi9pbWFnZXMvcmVnaXN0cmF0aW9uLWltZy5qcGdcIiB9KSB9KV0gfSldIH0pKTtcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=