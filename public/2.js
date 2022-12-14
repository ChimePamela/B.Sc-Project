(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/AppNavbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/AppNavbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Books_NavCategories_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Books/NavCategories.vue */ "./resources/js/Components/Books/NavCategories.vue");
/* harmony import */ var _User_Cart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User/Cart.vue */ "./resources/js/Components/User/Cart.vue");
/* harmony import */ var _User_Menu_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User/Menu.vue */ "./resources/js/Components/User/Menu.vue");
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
    Cart: _User_Cart_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    NavCategories: _Books_NavCategories_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserMenu: _User_Menu_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  name: "AppNavbar",
  data: function data() {
    return {
      menuItems: [{
        label: "Explore",
        name: "explore"
      }, {
        label: "All Books",
        name: "books"
      }, {
        label: "Authors",
        name: "authors"
      }]
    };
  },
  mounted: function mounted() {
    console.log(this.$route.name);
  },
  methods: {
    isActive: function isActive(name) {
      return name === this.$route.name ? 'current-menu-item' : false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Books/NavCategories.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Books/NavCategories.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "NavCategories",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    categories: function categories(state) {
      return state.categories;
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
              return _this.$store.dispatch('getCategories');

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/User/Cart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/User/Cart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "UserCart"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/User/Menu.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/User/Menu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "UserMenu"
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/AppNavbar.vue?vue&type=template&id=0db57954&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/AppNavbar.vue?vue&type=template&id=0db57954& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c(
    "header",
    { staticClass: "tg-header tg-haslayout", attrs: { id: "tg-header" } },
    [
      _c("div", { staticClass: "tg-middlecontainer" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12" },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tg-wishlistandcart" },
                  [_c("Cart")],
                  1
                )
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tg-navigationarea" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12" },
              [
                _c("nav", { staticClass: "tg-nav", attrs: { id: "tg-nav" } }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "collapse navbar-collapse tg-navigation",
                      attrs: { id: "tg-navigation" }
                    },
                    [
                      _c(
                        "ul",
                        [
                          _vm._l(_vm.menuItems, function(item, index) {
                            return _c(
                              "li",
                              { key: index, class: _vm.isActive(item.name) },
                              [
                                _c(
                                  "router-link",
                                  { attrs: { to: { name: item.name } } },
                                  [_vm._v(_vm._s(item.label))]
                                )
                              ],
                              1
                            )
                          }),
                          _vm._v(" "),
                          _c("NavCategories"),
                          _vm._v(" "),
                          _c("UserMenu")
                        ],
                        2
                      )
                    ]
                  )
                ])
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("strong", { staticClass: "tg-logo" }, [
      _c("a", { attrs: { href: "javascript:void(0);" } }, [
        _c("img", {
          attrs: { src: "images/logo.png", alt: "company name here" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navbar-header" }, [
      _c(
        "button",
        {
          staticClass: "navbar-toggle collapsed",
          attrs: {
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#tg-navigation",
            "aria-expanded": "false"
          }
        },
        [
          _c("span", { staticClass: "sr-only" }, [_vm._v("Toggle navigation")]),
          _vm._v(" "),
          _c("span", { staticClass: "icon-bar" }),
          _vm._v(" "),
          _c("span", { staticClass: "icon-bar" }),
          _vm._v(" "),
          _c("span", { staticClass: "icon-bar" })
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Books/NavCategories.vue?vue&type=template&id=cfed8442&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Books/NavCategories.vue?vue&type=template&id=cfed8442& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("li", { staticClass: "menu-item-has-children" }, [
    _c("a", { attrs: { href: "javascript:void(0);" } }, [_vm._v("Categories")]),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "sub-menu" },
      _vm._l(_vm.categories, function(category, index) {
        return _c("li", { key: index, staticClass: "current-menu-item" }, [
          _c("a", { attrs: { href: "index.html" } }, [
            _vm._v(_vm._s(category.name))
          ])
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/User/Cart.vue?vue&type=template&id=3014b16e&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/User/Cart.vue?vue&type=template&id=3014b16e& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "dropdown tg-themedropdown tg-minicartdropdown" },
      [
        _c(
          "div",
          {
            staticClass: "dropdown-menu tg-themedropdownmenu",
            attrs: { "aria-labelledby": "tg-minicart" }
          },
          [
            _c("div", { staticClass: "tg-minicartbody" }, [
              _c("div", { staticClass: "tg-minicarproduct" }, [
                _c("figure", [
                  _c("img", {
                    attrs: {
                      src: "images/products/img-01.jpg",
                      alt: "image description"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "tg-minicarproductdata" }, [
                  _c("h5", [
                    _c("a", { attrs: { href: "javascript:void(0);" } }, [
                      _vm._v("Our State Fair Is A Great Function")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h6", [
                    _c("a", { attrs: { href: "javascript:void(0);" } }, [
                      _vm._v("$ 12.15")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "tg-minicarproduct" }, [
                _c("figure", [
                  _c("img", {
                    attrs: {
                      src: "images/products/img-02.jpg",
                      alt: "image description"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "tg-minicarproductdata" }, [
                  _c("h5", [
                    _c("a", { attrs: { href: "javascript:void(0);" } }, [
                      _vm._v("Bring Me To Light")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h6", [
                    _c("a", { attrs: { href: "javascript:void(0);" } }, [
                      _vm._v("$ 12.15")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "tg-minicarproduct" }, [
                _c("figure", [
                  _c("img", {
                    attrs: {
                      src: "images/products/img-03.jpg",
                      alt: "image description"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "tg-minicarproductdata" }, [
                  _c("h5", [
                    _c("a", { attrs: { href: "javascript:void(0);" } }, [
                      _vm._v("Have Faith In Your Soul")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h6", [
                    _c("a", { attrs: { href: "javascript:void(0);" } }, [
                      _vm._v("$ 12.15")
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tg-minicartfoot" }, [
              _c(
                "a",
                {
                  staticClass: "tg-btnemptycart",
                  attrs: { href: "javascript:void(0);" }
                },
                [
                  _c("i", { staticClass: "fa fa-trash-o" }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Clear Your Cart")])
                ]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "tg-subtotal" }, [
                _vm._v("Subtotal: "),
                _c("strong", [_vm._v("35.78")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "tg-btns" }, [
                _c(
                  "a",
                  {
                    staticClass: "tg-btn tg-active",
                    attrs: { href: "javascript:void(0);" }
                  },
                  [_vm._v("View Cart")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "tg-btn",
                    attrs: { href: "javascript:void(0);" }
                  },
                  [_vm._v("Checkout")]
                )
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/User/Menu.vue?vue&type=template&id=78d5ebf0&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/User/Menu.vue?vue&type=template&id=78d5ebf0& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "menu-item-has-children" }, [
      _c("div", { staticClass: "tg-userlogin" }, [
        _c("span", [_vm._v("Hi, Amarachi")]),
        _vm._v(" "),
        _c("figure", [
          _c("a", { attrs: { href: "javascript:void(0);" } }, [
            _c("img", {
              attrs: {
                src: "images/users/img-01.jpg",
                alt: "image description"
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "sub-menu" }, [
        _c("li", [
          _c("a", { attrs: { href: "aboutus.html" } }, [_vm._v("My Wishlist")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/AppNavbar.vue":
/*!***********************************************!*\
  !*** ./resources/js/Components/AppNavbar.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppNavbar_vue_vue_type_template_id_0db57954___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppNavbar.vue?vue&type=template&id=0db57954& */ "./resources/js/Components/AppNavbar.vue?vue&type=template&id=0db57954&");
/* harmony import */ var _AppNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppNavbar.vue?vue&type=script&lang=js& */ "./resources/js/Components/AppNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppNavbar_vue_vue_type_template_id_0db57954___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppNavbar_vue_vue_type_template_id_0db57954___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/AppNavbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/AppNavbar.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Components/AppNavbar.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/AppNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/AppNavbar.vue?vue&type=template&id=0db57954&":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/AppNavbar.vue?vue&type=template&id=0db57954& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbar_vue_vue_type_template_id_0db57954___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppNavbar.vue?vue&type=template&id=0db57954& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/AppNavbar.vue?vue&type=template&id=0db57954&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbar_vue_vue_type_template_id_0db57954___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbar_vue_vue_type_template_id_0db57954___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/Books/NavCategories.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Components/Books/NavCategories.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavCategories_vue_vue_type_template_id_cfed8442___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavCategories.vue?vue&type=template&id=cfed8442& */ "./resources/js/Components/Books/NavCategories.vue?vue&type=template&id=cfed8442&");
/* harmony import */ var _NavCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavCategories.vue?vue&type=script&lang=js& */ "./resources/js/Components/Books/NavCategories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavCategories_vue_vue_type_template_id_cfed8442___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavCategories_vue_vue_type_template_id_cfed8442___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Books/NavCategories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Books/NavCategories.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/Books/NavCategories.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavCategories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Books/NavCategories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Books/NavCategories.vue?vue&type=template&id=cfed8442&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Components/Books/NavCategories.vue?vue&type=template&id=cfed8442& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavCategories_vue_vue_type_template_id_cfed8442___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavCategories.vue?vue&type=template&id=cfed8442& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Books/NavCategories.vue?vue&type=template&id=cfed8442&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavCategories_vue_vue_type_template_id_cfed8442___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavCategories_vue_vue_type_template_id_cfed8442___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/User/Cart.vue":
/*!***********************************************!*\
  !*** ./resources/js/Components/User/Cart.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cart_vue_vue_type_template_id_3014b16e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart.vue?vue&type=template&id=3014b16e& */ "./resources/js/Components/User/Cart.vue?vue&type=template&id=3014b16e&");
/* harmony import */ var _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart.vue?vue&type=script&lang=js& */ "./resources/js/Components/User/Cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cart_vue_vue_type_template_id_3014b16e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cart_vue_vue_type_template_id_3014b16e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/User/Cart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/User/Cart.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Components/User/Cart.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Cart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/User/Cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/User/Cart.vue?vue&type=template&id=3014b16e&":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/User/Cart.vue?vue&type=template&id=3014b16e& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_3014b16e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Cart.vue?vue&type=template&id=3014b16e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/User/Cart.vue?vue&type=template&id=3014b16e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_3014b16e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_3014b16e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/User/Menu.vue":
/*!***********************************************!*\
  !*** ./resources/js/Components/User/Menu.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu_vue_vue_type_template_id_78d5ebf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=78d5ebf0& */ "./resources/js/Components/User/Menu.vue?vue&type=template&id=78d5ebf0&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./resources/js/Components/User/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menu_vue_vue_type_template_id_78d5ebf0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Menu_vue_vue_type_template_id_78d5ebf0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/User/Menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/User/Menu.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Components/User/Menu.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/User/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/User/Menu.vue?vue&type=template&id=78d5ebf0&":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/User/Menu.vue?vue&type=template&id=78d5ebf0& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_78d5ebf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=template&id=78d5ebf0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/User/Menu.vue?vue&type=template&id=78d5ebf0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_78d5ebf0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_78d5ebf0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);