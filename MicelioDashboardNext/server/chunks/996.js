"use strict";
exports.id = 996;
exports.ids = [996];
exports.modules = {

/***/ 996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/styles/_variables.js
var _variables = __webpack_require__(8373);
;// CONCATENATED MODULE: ./src/components/Header/Menu/index.js


const HeaderMenu = external_styled_components_default().ul.withConfig({
  displayName: "Menu__HeaderMenu",
  componentId: "sc-1p3opvc-0"
})(["list-style:none;width:100%;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;"]);
const HeaderMenuItem = external_styled_components_default().li.withConfig({
  displayName: "Menu__HeaderMenuItem",
  componentId: "sc-1p3opvc-1"
})(["padding:5px 20px;display:flex;align-items:center;cursor:pointer;color:white;transition:all 0.2s;& + &{margin-left:50px;}> svg{display:none;margin-right:5px;}&:hover{transform:translateY(-1px);}&.selected{background-color:", ";border-radius:20px;color:white;svg{display:block;}}"], _variables/* COLOR_PRIMARY_DARK */.x);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Header/index.js







function Header({
  pageName = 'home'
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
      flexDirection: 'column',
      bg: 'micelio.primary',
      pt: 3,
      pb: 3,
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Container, {
        maxW: 'container.xl',
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Heading, {
            flex: 1,
            color: 'white',
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: '/home',
              children: "Micelio"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
            flex: 3,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderMenu, {
              children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: '/home',
                children: /*#__PURE__*/jsx_runtime_.jsx(HeaderMenuItem, {
                  className: pageName === 'home' && 'selected',
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
                    alignItems: 'center',
                    children: [/*#__PURE__*/jsx_runtime_.jsx(ai_.AiFillHome, {
                      color: 'white'
                    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                      ms: 1,
                      children: "In\xEDcio"
                    })]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: '/about',
                children: /*#__PURE__*/jsx_runtime_.jsx(HeaderMenuItem, {
                  className: pageName === 'about' && 'selected',
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
                    alignItems: 'center',
                    children: [/*#__PURE__*/jsx_runtime_.jsx(ai_.AiFillInfoCircle, {
                      color: 'white'
                    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                      ms: 1,
                      children: "Sobre"
                    })]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: '/profile',
                children: /*#__PURE__*/jsx_runtime_.jsx(HeaderMenuItem, {
                  className: pageName === 'profile' && 'selected',
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
                    alignItems: 'center',
                    children: [/*#__PURE__*/jsx_runtime_.jsx(ai_.AiOutlineUser, {
                      color: 'white'
                    }), "Perfil"]
                  })
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
            flex: 1,
            justifyContent: 'end',
            alignItems: 'center',
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
              children: "Sair"
            })
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ 8373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ COLOR_PRIMARY),
/* harmony export */   "x": () => (/* binding */ COLOR_PRIMARY_DARK)
/* harmony export */ });
const COLOR_PRIMARY = '#52b788';
const COLOR_PRIMARY_DARK = '#40916c';

/***/ })

};
;