(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Books/Book.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Books/Book.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Helpers_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Helpers/format */ "./resources/js/Helpers/format.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Book",
  props: {
    book: Object,
    maxChar: {
      type: Number,
      "default": 20
    }
  },
  computed: {
    title: function title() {
      return Object(_Helpers_format__WEBPACK_IMPORTED_MODULE_0__["truncate"])(this.book.title, this.maxChar);
    },
    author: function author() {
      return Object(_Helpers_format__WEBPACK_IMPORTED_MODULE_0__["truncate"])(this.book.author.name, this.maxChar);
    },
    category: function category() {
      return Object(_Helpers_format__WEBPACK_IMPORTED_MODULE_0__["truncate"])(this.book.category.name, this.maxChar);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/BookList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/BookList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Components_Books_Book_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Books/Book.vue */ "./resources/js/Components/Books/Book.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Book: _Components_Books_Book_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  name: "BookList",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    all: function all(state) {
      return state.books.all;
    }
  })),
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$store.dispatch("getAllBooks");

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Books/Book.vue?vue&type=template&id=2c5ca64e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Books/Book.vue?vue&type=template&id=2c5ca64e& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tg-postbook" }, [
    _c("figure", { staticClass: "tg-featureimg" }, [
      _c("div", { staticClass: "tg-bookimg" }, [
        _c("div", { staticClass: "tg-frontcover" }, [
          _c("img", {
            attrs: { src: _vm.book.image_url, alt: "image description" }
          })
        ]),
        _vm._v(" "),
        _vm._m(0)
      ]),
      _vm._v(" "),
      _vm._m(1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "tg-postbookcontent" }, [
      _c("div", { staticClass: "tg-themetagbox" }, [
        _c("span", { staticClass: "tg-themetag" }, [
          _vm._v(_vm._s(_vm.category))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tg-booktitle" }, [
        _c("h3", [
          _c("a", { attrs: { href: "javascript:void(0);" } }, [
            _vm._v(_vm._s(_vm.title))
          ])
        ])
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "tg-bookwriter" }, [
        _vm._v("By: "),
        _c("a", { attrs: { href: "javascript:void(0);" } }, [
          _vm._v(_vm._s(_vm.author))
        ])
      ]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tg-backcover" }, [
      _c("img", {
        attrs: { src: "images/books/img-01.jpg", alt: "image description" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "tg-btnaddtowishlist",
        attrs: { href: "javascript:void(0);" }
      },
      [
        _c("i", { staticClass: "icon-heart" }),
        _vm._v(" "),
        _c("span", [_vm._v("add to wishlist")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "tg-stars" }, [_c("span")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "tg-btn tg-btnstyletwo",
        attrs: { href: "javascript:void(0);" }
      },
      [
        _c("i", { staticClass: "fa fa-book" }),
        _vm._v(" "),
        _c("em", [_vm._v("Review Book")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/BookList.vue?vue&type=template&id=78f6c360&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/BookList.vue?vue&type=template&id=78f6c360& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "tg-sectionspace tg-haslayout" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm.all.length
          ? _c(
              "div",
              { staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12" },
              _vm._l(_vm.all, function(item, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "col-md-3 col-lg-3" },
                  [_c("Book", { attrs: { book: item } })],
                  1
                )
              }),
              0
            )
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12" },
      [
        _c("div", { staticClass: "tg-sectionhead row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("form", { staticClass: "tg-formtheme tg-formsearch" }, [
              _c("fieldset", [
                _c("input", {
                  staticClass: "typeahead form-control",
                  attrs: {
                    type: "text",
                    name: "search",
                    placeholder: "Search by title, author, keyword, ISBN..."
                  }
                }),
                _vm._v(" "),
                _c("button", { attrs: { type: "submit" } }, [
                  _c("i", { staticClass: "icon-magnifier" })
                ])
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/Books/Book.vue":
/*!************************************************!*\
  !*** ./resources/js/Components/Books/Book.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Book_vue_vue_type_template_id_2c5ca64e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book.vue?vue&type=template&id=2c5ca64e& */ "./resources/js/Components/Books/Book.vue?vue&type=template&id=2c5ca64e&");
/* harmony import */ var _Book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Book.vue?vue&type=script&lang=js& */ "./resources/js/Components/Books/Book.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Book_vue_vue_type_template_id_2c5ca64e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Book_vue_vue_type_template_id_2c5ca64e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Books/Book.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Books/Book.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/Books/Book.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Book.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Books/Book.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Books/Book.vue?vue&type=template&id=2c5ca64e&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Components/Books/Book.vue?vue&type=template&id=2c5ca64e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_template_id_2c5ca64e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Book.vue?vue&type=template&id=2c5ca64e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Books/Book.vue?vue&type=template&id=2c5ca64e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_template_id_2c5ca64e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_template_id_2c5ca64e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Helpers/format.js":
/*!****************************************!*\
  !*** ./resources/js/Helpers/format.js ***!
  \****************************************/
/*! exports provided: truncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
var truncate = function truncate(str) {
  var MAX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  return str.length > MAX ? "".concat(str.substr(0, MAX), "...") : str;
};

/***/ }),

/***/ "./resources/js/Pages/BookList.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/BookList.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BookList_vue_vue_type_template_id_78f6c360___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookList.vue?vue&type=template&id=78f6c360& */ "./resources/js/Pages/BookList.vue?vue&type=template&id=78f6c360&");
/* harmony import */ var _BookList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookList.vue?vue&type=script&lang=js& */ "./resources/js/Pages/BookList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BookList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BookList_vue_vue_type_template_id_78f6c360___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BookList_vue_vue_type_template_id_78f6c360___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/BookList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/BookList.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/BookList.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BookList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/BookList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/BookList.vue?vue&type=template&id=78f6c360&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/BookList.vue?vue&type=template&id=78f6c360& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookList_vue_vue_type_template_id_78f6c360___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BookList.vue?vue&type=template&id=78f6c360& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/BookList.vue?vue&type=template&id=78f6c360&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookList_vue_vue_type_template_id_78f6c360___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookList_vue_vue_type_template_id_78f6c360___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);