"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkkanban"] = self["webpackChunkkanban"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  width: 100%;\\r\\n  padding: 0.5rem;\\r\\n  min-height: 50rem;\\r\\n  background-color: #cfba9a;\\r\\n}\\r\\n\\r\\nh3,\\r\\nh4 {\\r\\n  margin: 0.5rem 0;\\r\\n}\\r\\n\\r\\n.x {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 0.3rem;\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n  top: 2rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.topx,\\r\\n.bottomx {\\r\\n  height: 0.255rem;\\r\\n  width: 1.5rem;\\r\\n  background-color: #fffdfd;\\r\\n}\\r\\n\\r\\n.topx {\\r\\n  transform: rotate(45deg) translateY(0.4rem);\\r\\n}\\r\\n\\r\\n.bottomx {\\r\\n  transform: rotate(-45deg) translateY(-0.4rem);\\r\\n}\\r\\n\\r\\n.popup-window {\\r\\n  display: block;\\r\\n  text-align: center;\\r\\n  z-index: 1;\\r\\n  padding: 1rem;\\r\\n  margin: 2rem;\\r\\n  height: 30rem;\\r\\n  border: solid 5px #fff;\\r\\n  border-radius: 1rem;\\r\\n  background-color: rgb(126, 49, 49);\\r\\n  color: #fff;\\r\\n  width: 80%;\\r\\n  min-height: 20%;\\r\\n  position: fixed;\\r\\n  overflow-y: scroll;\\r\\n  right: 2%;\\r\\n  top: 200rem;\\r\\n  transition: 0.5s;\\r\\n}\\r\\n\\r\\n.show-popup {\\r\\n  top: 5rem;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.popup-meal-image {\\r\\n  height: 13rem;\\r\\n  width: 92%;\\r\\n  border: solid 1px #333;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.popup-meal-image img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.additional-information {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.additional-information li {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.right {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.comments-section,\\r\\n.comments-section li {\\r\\n  display: flex;\\r\\n  gap: 0.3rem;\\r\\n  justify-content: flex-start;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.comments-section li {\\r\\n  gap: 0.5rem;\\r\\n  flex-direction: row;\\r\\n  align-items: center;\\r\\n  height: 2rem;\\r\\n  border-radius: 0.5rem;\\r\\n  padding: 0 0.5rem;\\r\\n}\\r\\n\\r\\n.comments-section {\\r\\n  flex-direction: column;\\r\\n  background-color: #fff;\\r\\n  padding: 0.5rem 0;\\r\\n  border-radius: 0.5rem;\\r\\n  font-size: 0.6rem;\\r\\n}\\r\\n\\r\\n.add-comment {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 0.5rem;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  width: 100%;\\r\\n  height: 6rem;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  border: none;\\r\\n  background-color: #bba27e;\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 0.3rem;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\ninput::placeholder,\\r\\ntextarea::placeholder {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n#comment-btn {\\r\\n  padding: 0.5rem 1rem;\\r\\n  border-radius: 0.5rem;\\r\\n  background-color: brown;\\r\\n  border: 4px solid #fff;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  .popup-window {\\r\\n    margin: 0 20%;\\r\\n    padding: 2rem 10%;\\r\\n    width: 60%;\\r\\n    right: 2%;\\r\\n  }\\r\\n\\r\\n  .additional-information li {\\r\\n    flex-direction: row;\\r\\n  }\\r\\n\\r\\n  .right {\\r\\n    margin-right: auto;\\r\\n  }\\r\\n\\r\\n  .comments-section {\\r\\n    font-size: 0.8rem;\\r\\n    align-items: flex-start;\\r\\n    width: 70%;\\r\\n  }\\r\\n\\r\\n  .comments-section li {\\r\\n    flex-direction: row;\\r\\n  }\\r\\n\\r\\n  .popup-meal-image {\\r\\n    width: 100%;\\r\\n    height: 20rem;\\r\\n  }\\r\\n\\r\\n  .x {\\r\\n    right: 5%;\\r\\n  }\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 10px 20px;\\r\\n  background-color: rgb(224, 72, 17);\\r\\n  box-shadow: 1px 1px 1px rgb(240, 238, 238);\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-size: 28px;\\r\\n  color: white;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.dish_container {\\r\\n  width: 100%;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(1, 1fr);\\r\\n  gap: 16px;\\r\\n  margin-top: 5%;\\r\\n  padding-right: 24px;\\r\\n  padding-left: 24px;\\r\\n}\\r\\n\\r\\n.logo span {\\r\\n  color: rgb(197, 194, 193);\\r\\n  font-style: oblique;\\r\\n  font-size: 28px;\\r\\n}\\r\\n\\r\\n.nav_links {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  gap: 12px;\\r\\n}\\r\\n\\r\\n.nav_links a {\\r\\n  text-decoration: none;\\r\\n  font-size: 19px;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.heading {\\r\\n  margin-top: 5%;\\r\\n  font-size: 28px;\\r\\n  color: rgb(224, 72, 17);\\r\\n  text-align: center;\\r\\n  box-shadow: 1px 1px 1px rgb(240, 238, 238);\\r\\n}\\r\\n\\r\\n.dish_container {\\r\\n  width: 100%;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(1, 1fr);\\r\\n  gap: 16px;\\r\\n  margin-top: 5%;\\r\\n  padding-right: 24px;\\r\\n  padding-left: 24px;\\r\\n}\\r\\n\\r\\n.dish_wrapper {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: white;\\r\\n  gap: 10px;\\r\\n  padding: 16px;\\r\\n  border-radius: 7px;\\r\\n  box-shadow:\\r\\n    0 4px  4px  rgba(0, 0, 0, 0.1),\\r\\n    0 1px  6px  rgba(0, 0, 0, 0.05),\\r\\n    0 8px  8px  rgba(0, 0, 0, 0.1),\\r\\n    0 16px 16px rgba(0, 0, 0, 0.1),\\r\\n    8px 32px 32px rgba(0, 0, 0, 0.15),\\r\\n    8px 64px 64px rgba(0, 0, 0, 0.15);\\r\\n}\\r\\n\\r\\n.dish_image {\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.dish_image img {\\r\\n  width: 100%;\\r\\n  transition: 0.3s ease-in-out;\\r\\n}\\r\\n\\r\\n.dish_image img:hover {\\r\\n  transform: scale(1.05);\\r\\n}\\r\\n\\r\\n.dish_name {\\r\\n  width: 100%;\\r\\n  height: 6rem;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  gap: 12px;\\r\\n}\\r\\n\\r\\n.dish_name h2 {\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  text-align: end;\\r\\n}\\r\\n\\r\\n.commentBtn {\\r\\n  width: 100%;\\r\\n  padding: 7px 10px;\\r\\n  background-color: rgb(224, 72, 17);\\r\\n  color: white;\\r\\n  border-radius: 7px;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n@media (min-width: 768px) {\\r\\n  nav {\\r\\n    padding: 24px 100px;\\r\\n  }\\r\\n\\r\\n  .dish_name h2 {\\r\\n    font-size: 12.5px;\\r\\n  }\\r\\n\\r\\n  .dish_container {\\r\\n    display: grid;\\r\\n    width: 100%;\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(4, 1fr);\\r\\n    gap: 3rem 4%;\\r\\n    margin-top: 5%;\\r\\n    padding-right: 50px;\\r\\n    padding-left: 50px;\\r\\n  }\\r\\n\\r\\n  .heading {\\r\\n    margin-top: 2%;\\r\\n    font-size: 28px;\\r\\n    color: rgb(224, 72, 17);\\r\\n    text-align: center;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kanban/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://kanban/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://kanban/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kanban/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://kanban/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/classes.js */ \"./src/modules/classes.js\");\n\n\n\n\n_modules_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fillDom();\nlet overflowing = false;\nconst body = document.querySelector('body');\nwindow.addEventListener('click', async (e) => {\n  if (e.target.id === 'x') {\n    document.querySelector('.popup-window').classList.remove('show-popup');\n    body.style.overflowY = 'scroll';\n    _modules_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mealContainer.style.filter = 'blur(0)';\n    overflowing = false;\n  }\n  if (e.target.id === 'commentBtn' && overflowing === false) {\n    _modules_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].popupId(e.target.parentNode.id);\n    _modules_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].popupWindow.innerHTML = await _modules_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].populatePopup(e.target.parentNode.id);\n    _modules_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].collectId(e.target.parentNode.id);\n    document.querySelector('#comments-section').innerHTML = await _modules_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getComments(e.target.parentNode.id);\n    document.querySelector('.popup-window').classList.add('show-popup');\n    body.style.overflowY = 'hidden';\n    _modules_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mealContainer.style.filter = 'blur(6px)';\n    overflowing = true;\n  } else if (e.target.id === 'comment-btn') {\n    if (document.querySelector('#new-comment').value !== '' && document.querySelector('#nameInput').value !== '') {\n      await _modules_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addCommentToApi(e.target.parentNode.parentNode.parentNode.parentNode.id);\n      _modules_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].collectId(e.target.parentNode.parentNode.parentNode.parentNode.id);\n      document.querySelector('#comments-section').innerHTML = await _modules_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getComments(e.target.parentNode.parentNode.parentNode.parentNode.id);\n    }\n  } else if (e.target.id === 'love') {\n    await _modules_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addLikes(e.target.parentNode.parentNode.id);\n    _modules_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getLikes();\n    _modules_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fillDom();\n  }\n});\n\n\n//# sourceURL=webpack://kanban/./src/index.js?");

/***/ }),

/***/ "./src/modules/classes.js":
/*!********************************!*\
  !*** ./src/modules/classes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ classes)\n/* harmony export */ });\nclass classes {\n    static popupWindow = document.querySelector('#popup-window')\n\n  static baseurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WcPR52P9C9b3ZbPg6GHe'\n\n    static getInvolvementApi = async () => {\n      const apiUrl = `${this.baseurl}/likes`;\n      const getUrl = fetch(apiUrl, {\n        method: 'GET',\n      });\n      const getItems = await getUrl;\n      const test = await getItems.json();\n      return test;\n    }\n\n      static popupId = async (e) => {\n        let id = '';\n        const arrayItem = await this.getFoodItems();\n        arrayItem.forEach((element) => {\n          if (element.idMeal === e) {\n            id = element.idMeal;\n          }\n        });\n        return id;\n      }\n\n    static populatePopup = async (e) => {\n      const arrayItem = await this.getFoodItems();\n      let output = '';\n      const comments = await this.collectId(e);\n      const filteredComments = comments.filter((element) => element.comment !== '');\n      arrayItem.forEach((element) => {\n        if (element.idMeal === e) {\n          this.popupWindow.id = e;\n          output = `<div class=\"x\" id=\"${e}\">\n  <div class=\"topx\" id=\"x\"></div>\n  <div class=\"bottomx\" id=\"x\"></div>\n  </div>\n  <section class=\"popup-meal-image\">\n  <img src=\"${element.strMealThumb}\" alt=\"image\"> \n  </section>\n  <section class=\"popup-info\">\n  <h3>${element.strMeal}</h3>\n  <ul class=\"additional-information\">\n  <li><div class=\"right\">Fuel:</div><div>Length:</div></li>\n  <li><div class=\"right\">Weight:</div><div>Power:</div></li>\n  </ul><h4>Comments (<span id=\"number-of-comments\">${filteredComments.length}\n  \n  </span>)</h4>\n  <ul class=\"comments-section\" id='comments-section'>\n  \n  </ul>\n  <h4>Add a comment</h4>\n  <ul class=\"add-comment\">\n  <li><input type=\"text\" placeholder=\"Your name\" name=\"user-name\" id=\"nameInput\"></li>\n  <li><textarea name=\"new comment\" id=\"new-comment\" maxlength=\"30\" cols=\"30\" rows=\"10\" placeholder=\"your insights\"></textarea></li>\n  <li><button id=\"comment-btn\">Comment</button></li>\n  </ul>\n  </section>`;\n        }\n      });\n      return output;\n    }\n\n  static getComments = async (e) => {\n    const comments = await this.collectId(e);\n    const filteredComments = comments.filter((element) => element.comment !== '');\n    let output = '';\n    let i = 0;\n    document.querySelector('#number-of-comments').innerHTML = `(${filteredComments.length})`;\n    filteredComments.forEach((element) => {\n      i += 1;\n      element.index = i;\n      if (element.index % 2 === 0) {\n        element.background = '#cfba9a';\n        element.color = '#333';\n      } else {\n        element.background = 'rgb(126, 49, 49)';\n      }\n      output += `<li style=\"background-color: ${element.background};color:${element.color}\"><span id=\"date\">${element.creation_date}</span><span id=\"name\">${element.username}</span><span id=\"comment\">${element.comment}</span></li>`;\n    });\n    return output;\n  }\n\n  static mealContainer = document.querySelector('#dish_container');\n\n  static getFoodItems = async () => {\n    const Url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';\n    const getUrl = fetch(Url, {\n      method: 'GET',\n    });\n    const testUrl = await getUrl;\n    const foodItems = await testUrl.json();\n    return (foodItems.meals);\n  };\n\n  static getMealsId = async () => {\n    const idArray = await this.getFoodItems();\n    const array = [];\n    idArray.forEach((element) => {\n      array.push(element.idMeal);\n    });\n    return array;\n  }\n\n    static collectId = async (e) => {\n      const test = await this.popupId(e);\n      const apiUrl = `${this.baseurl}/comments?item_id=${test}`;\n      const result1 = fetch(apiUrl).then((response) => {\n        if (response.ok) {\n          return response.json();\n        }\n        return [];\n      });\n      return result1;\n    }\n\n  static addCommentToApi = async (e) => {\n    const test = await this.popupId(e);\n    const apiUrl = `${this.baseurl}/comments`;\n    const getToApi = await fetch(apiUrl, {\n      method: 'POST',\n      headers: { 'content-type': 'application/json' },\n      body: JSON.stringify({\n        item_id: `${test}`,\n        username: `${document.querySelector('#nameInput').value}`,\n        comment: `${document.querySelector('#new-comment').value}`,\n      }),\n    });\n    const test2 = getToApi;\n    const likesArr = await test2.text();\n    document.querySelector('#nameInput').value = '';\n    document.querySelector('#new-comment').value = '';\n    return likesArr;\n  }\n\n  static getLikes = async () => {\n    const apiUrl = `${this.baseurl}/likes`;\n    const getToApi = await fetch(apiUrl, {\n      method: 'GET',\n    });\n    const test = getToApi;\n    const likesArr = await test.json();\n    return likesArr;\n  }\n\n  static addLikes = async (e) => {\n    const apiUrl = `${this.baseurl}/likes`;\n    const likes = await this.getLikes();\n    let likesCount = '';\n    likes.forEach((like) => {\n      if (e === like.item_id) {\n        likesCount = like.likes;\n      }\n    });\n    const id = e;\n\n    const getToApi = await fetch(apiUrl, {\n      method: 'POST',\n      headers: {\n        'content-type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: `${id}`,\n        likes: `${likesCount + 1}`,\n      }),\n    });\n    const test = getToApi;\n    const likesArr = await test.text();\n    return likesArr;\n  }\n\n  static populateDom = async () => {\n    let output = '';\n    const mealsArr = await this.getFoodItems();\n    const likes = await this.getLikes();\n    mealsArr.forEach((element) => {\n      likes.forEach((elementLikes) => {\n        if (element.idMeal === elementLikes.item_id) {\n          element.likesCount = elementLikes.likes;\n        }\n      });\n      output += `  <div class=\"dish_wrapper\" id=${element.idMeal}>\n              <div class=\"dish_image\">\n                  <img src=\"${element.strMealThumb}\" alt=\"image\"> \n              </div>\n              <div class=\"dish_name\">\n                  <h2>${element.strMeal}</h2>\n                  <i id=\"love\" class=\"fa-regular fa-heart\"></i>\n                  <div class=\"likes\">\n                  <h4>${element.likesCount}</h4>\n                  </div>\n              </div>\n              <button class=\"commentBtn\" id=\"commentBtn\">comments</button>\n           </div>`;\n    });\n    return output;\n  };\n\n  static fillDom = async () => {\n    this.mealContainer.innerHTML = await this.populateDom();\n  };\n}\n\n//# sourceURL=webpack://kanban/./src/modules/classes.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);