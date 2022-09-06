module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hooks/useAuthMiddleware.ts":
/*!****************************************!*\
  !*** ./src/hooks/useAuthMiddleware.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-i18next/serverSideTranslations */ "next-i18next/serverSideTranslations");
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_StatusCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/StatusCode */ "./src/utils/StatusCode.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const useAuthMiddleware = (locales = []) => async context => {
  const cookies = nookies__WEBPACK_IMPORTED_MODULE_1___default.a.get(context);
  const {
    resolvedUrl
  } = context;

  try {
    await axios__WEBPACK_IMPORTED_MODULE_2___default()({
      baseURL: "https://malis-dev.edge-works.net/api/",
      method: 'GET',
      url: '/health_check/protected',
      headers: {
        Authorization: `Bearer ${cookies.token}`
      }
    });
  } catch (error) {
    var _error$response;

    if ((error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === _utils_StatusCode__WEBPACK_IMPORTED_MODULE_3__["StatusCode"].UNAUTHORIZED) {
      nookies__WEBPACK_IMPORTED_MODULE_1___default.a.destroy(context, 'token');
      nookies__WEBPACK_IMPORTED_MODULE_1___default.a.destroy(context, 'redirect_to');
      nookies__WEBPACK_IMPORTED_MODULE_1___default.a.destroy(context, 'current_job_id');
      const destination = resolvedUrl === '/' ? `/login` : `/login?back_url=${encodeURIComponent(resolvedUrl)}`;
      return {
        redirect: {
          destination
        }
      };
    }
  }

  if (resolvedUrl === '/' && cookies.redirect_to) {
    return {
      redirect: {
        destination: cookies.redirect_to
      }
    };
  }

  return {
    props: _objectSpread({}, await Object(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__["serverSideTranslations"])(context.locale, locales))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useAuthMiddleware);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_page_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/page/layout */ "./src/styles/page/layout.ts");
/* harmony import */ var _hooks_useAuthMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useAuthMiddleware */ "./src/hooks/useAuthMiddleware.ts");


var _jsxFileName = "D:\\Fersher\\TTS_Reactjs\\malis-3-frontend\\src\\pages\\index.tsx";



function IndexPage() {
  const classes = Object(_styles_page_layout__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: classes.main
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

const getServerSideProps = Object(_hooks_useAuthMiddleware__WEBPACK_IMPORTED_MODULE_2__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/styles/page/layout.ts":
/*!***********************************!*\
  !*** ./src/styles/page/layout.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_vars_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/vars/size */ "./src/styles/vars/size.ts");



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => {
  return {
    main: {
      margin: theme.spacing(0, 1.5)
    },
    buttonControls: {
      '& button:not(:first-child)': {
        marginLeft: theme.spacing(1.5)
      }
    },
    controls: {
      padding: theme.spacing(0, 0, 1.2)
    },
    fullWidth: {
      width: '100%'
    },
    officeColumn: {
      display: 'flex'
    },
    control: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: _styles_vars_size__WEBPACK_IMPORTED_MODULE_2__["CONTROL_HEIGHT"],
      padding: theme.spacing(0, 1.4),
      background: '#F4F7FC'
    },
    wrapControl: {
      display: 'flex',
      alignItems: 'center'
    },
    controlAutocomplete: {
      marginLeft: theme.spacing(3)
    },
    equivalence: {
      fontWeight: theme.typography.fontWeightBold
    },
    tableFooterBudget: {
      flexGrow: 1
    },
    cellFooterBudget: {
      marginLeft: '7px'
    },
    cellFooterDescBudget: {
      padding: '0px 10px'
    },
    buttonControl: {
      // color: theme.palette.common.white,
      fontSize: 12,
      padding: 2,
      textTransform: 'capitalize',
      '&:not(:first-child)': {
        marginLeft: 8
      }
    },
    standard: {
      '& .MuiDataGrid-cellCheckbox': {
        visibility: 'hidden'
      }
    },
    totalBudgetRow: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.body1.fontSize,
      borderTop: '1.5px solid #DAE1EC',
      '&:hover': {
        backgroundColor: 'transparent !important'
      },
      '& .MuiDataGrid-cellCheckbox': {
        opacity: 0
      },
      '& .MuiDataGrid-cell:nth-child(2)': {
        opacity: 0
      }
    },
    mark: {
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderTop: `5px solid ${_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"][200]}`,
        transform: 'rotate(225deg)'
      }
    },
    permissionItem: {
      '&:hover': {
        background: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["blue"][50]
      }
    },
    currencyTable: {
      '& .homeCurrency': {
        backgroundColor: '#ffe0b2 !important',
        '&:hover': {
          backgroundColor: `${Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["darken"])('#ffe0b2', 0.2)} !important`
        }
      }
    },
    link: {
      color: theme.palette.primary.main,
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      // maxWidth: (props: any) => parseInt(props.width) - 16,
      fontSize: theme.typography.body2.fontSize,
      border: '1px solid #dadde9',
      maxWidth: 500
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

/***/ }),

/***/ "./src/styles/vars/size.ts":
/*!*********************************!*\
  !*** ./src/styles/vars/size.ts ***!
  \*********************************/
/*! exports provided: APP_BAR_HEIGHT, CONTROL_HEIGHT, BREADCRUMB_HEIGHT, BREADCRUMB_MARGIN_VERTICAL, BREADCRUMB_TOTAL_HEIGHT, PAGINATION_HEIGHT, PAGINATION_HEIGHT_VERTICAL, PAGINATION_TOTAL_HEIGHT, FOOTER, BOTTOM_HEIGHT, TABLE_HEIGHT, TABLE_HEIGHT_INCLUDE_FOOTER, TABLE_HEIGHT_BUDGET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_BAR_HEIGHT", function() { return APP_BAR_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_HEIGHT", function() { return CONTROL_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREADCRUMB_HEIGHT", function() { return BREADCRUMB_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREADCRUMB_MARGIN_VERTICAL", function() { return BREADCRUMB_MARGIN_VERTICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREADCRUMB_TOTAL_HEIGHT", function() { return BREADCRUMB_TOTAL_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_HEIGHT", function() { return PAGINATION_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_HEIGHT_VERTICAL", function() { return PAGINATION_HEIGHT_VERTICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_TOTAL_HEIGHT", function() { return PAGINATION_TOTAL_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOTER", function() { return FOOTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOTTOM_HEIGHT", function() { return BOTTOM_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_HEIGHT", function() { return TABLE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_HEIGHT_INCLUDE_FOOTER", function() { return TABLE_HEIGHT_INCLUDE_FOOTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_HEIGHT_BUDGET", function() { return TABLE_HEIGHT_BUDGET; });
const APP_BAR_HEIGHT = 48;
const CONTROL_HEIGHT = 60;
const BREADCRUMB_HEIGHT = 20;
const BREADCRUMB_MARGIN_VERTICAL = 12;
const BREADCRUMB_TOTAL_HEIGHT = BREADCRUMB_HEIGHT + BREADCRUMB_MARGIN_VERTICAL * 2;
const PAGINATION_HEIGHT = 45;
const PAGINATION_HEIGHT_VERTICAL = 0;
const PAGINATION_TOTAL_HEIGHT = PAGINATION_HEIGHT + PAGINATION_HEIGHT_VERTICAL * 2;
const FOOTER = 25;
const BOTTOM_HEIGHT = 40;
const TABLE_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT}px - ${BREADCRUMB_TOTAL_HEIGHT}px - ${CONTROL_HEIGHT}px - ${BOTTOM_HEIGHT}px)`;
const TABLE_HEIGHT_INCLUDE_FOOTER = `calc(100vh - ${APP_BAR_HEIGHT}px - ${BREADCRUMB_TOTAL_HEIGHT}px - ${CONTROL_HEIGHT}px - ${PAGINATION_TOTAL_HEIGHT}px - ${BOTTOM_HEIGHT}px)`;
const TABLE_HEIGHT_BUDGET = `calc(100vh - ${APP_BAR_HEIGHT}px - ${BREADCRUMB_TOTAL_HEIGHT}px - ${CONTROL_HEIGHT}px - ${PAGINATION_TOTAL_HEIGHT}px - ${BOTTOM_HEIGHT}px - 35px)`;

/***/ }),

/***/ "./src/utils/StatusCode.ts":
/*!*********************************!*\
  !*** ./src/utils/StatusCode.ts ***!
  \*********************************/
/*! exports provided: StatusCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCode", function() { return StatusCode; });
let StatusCode;

(function (StatusCode) {
  StatusCode[StatusCode["OK"] = 200] = "OK";
  StatusCode[StatusCode["CREATED"] = 201] = "CREATED";
  StatusCode[StatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
  StatusCode[StatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  StatusCode[StatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
  StatusCode[StatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(StatusCode || (StatusCode = {}));

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-i18next/serverSideTranslations":
/*!******************************************************!*\
  !*** external "next-i18next/serverSideTranslations" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZUF1dGhNaWRkbGV3YXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9wYWdlL2xheW91dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3ZhcnMvc2l6ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvU3RhdHVzQ29kZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dC9zZXJ2ZXJTaWRlVHJhbnNsYXRpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInVzZUF1dGhNaWRkbGV3YXJlIiwibG9jYWxlcyIsImNvbnRleHQiLCJjb29raWVzIiwibm9va2llcyIsImdldCIsInJlc29sdmVkVXJsIiwiYXhpb3MiLCJiYXNlVVJMIiwicHJvY2VzcyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwiU3RhdHVzQ29kZSIsIlVOQVVUSE9SSVpFRCIsImRlc3Ryb3kiLCJkZXN0aW5hdGlvbiIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlZGlyZWN0IiwicmVkaXJlY3RfdG8iLCJwcm9wcyIsInNlcnZlclNpZGVUcmFuc2xhdGlvbnMiLCJsb2NhbGUiLCJJbmRleFBhZ2UiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwibWFpbiIsImdldFNlcnZlclNpZGVQcm9wcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpbiIsInNwYWNpbmciLCJidXR0b25Db250cm9scyIsIm1hcmdpbkxlZnQiLCJjb250cm9scyIsInBhZGRpbmciLCJmdWxsV2lkdGgiLCJ3aWR0aCIsIm9mZmljZUNvbHVtbiIsImRpc3BsYXkiLCJjb250cm9sIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiQ09OVFJPTF9IRUlHSFQiLCJiYWNrZ3JvdW5kIiwid3JhcENvbnRyb2wiLCJjb250cm9sQXV0b2NvbXBsZXRlIiwiZXF1aXZhbGVuY2UiLCJmb250V2VpZ2h0IiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRCb2xkIiwidGFibGVGb290ZXJCdWRnZXQiLCJmbGV4R3JvdyIsImNlbGxGb290ZXJCdWRnZXQiLCJjZWxsRm9vdGVyRGVzY0J1ZGdldCIsImJ1dHRvbkNvbnRyb2wiLCJmb250U2l6ZSIsInRleHRUcmFuc2Zvcm0iLCJzdGFuZGFyZCIsInZpc2liaWxpdHkiLCJ0b3RhbEJ1ZGdldFJvdyIsImJvZHkxIiwiYm9yZGVyVG9wIiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsIm1hcmsiLCJwb3NpdGlvbiIsImNvbnRlbnQiLCJ0b3AiLCJyaWdodCIsImJvcmRlckxlZnQiLCJib3JkZXJSaWdodCIsInJlZCIsInRyYW5zZm9ybSIsInBlcm1pc3Npb25JdGVtIiwiYmx1ZSIsImN1cnJlbmN5VGFibGUiLCJkYXJrZW4iLCJsaW5rIiwiY29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsImN1cnNvciIsInRleHREZWNvcmF0aW9uIiwidG9vbHRpcCIsImJvZHkyIiwiYm9yZGVyIiwibWF4V2lkdGgiLCJBUFBfQkFSX0hFSUdIVCIsIkJSRUFEQ1JVTUJfSEVJR0hUIiwiQlJFQURDUlVNQl9NQVJHSU5fVkVSVElDQUwiLCJCUkVBRENSVU1CX1RPVEFMX0hFSUdIVCIsIlBBR0lOQVRJT05fSEVJR0hUIiwiUEFHSU5BVElPTl9IRUlHSFRfVkVSVElDQUwiLCJQQUdJTkFUSU9OX1RPVEFMX0hFSUdIVCIsIkZPT1RFUiIsIkJPVFRPTV9IRUlHSFQiLCJUQUJMRV9IRUlHSFQiLCJUQUJMRV9IRUlHSFRfSU5DTFVERV9GT09URVIiLCJUQUJMRV9IRUlHSFRfQlVER0VUIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBRUE7O0FBR0EsTUFBTUEsaUJBQWlCLEdBQ3JCLENBQUNDLE9BQWlCLEdBQUcsRUFBckIsS0FDQSxNQUFPQyxPQUFQLElBQThDO0FBQzVDLFFBQU1DLE9BQU8sR0FBR0MsOENBQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaLENBQWhCO0FBQ0EsUUFBTTtBQUFFSTtBQUFGLE1BQWtCSixPQUF4Qjs7QUFDQSxNQUFJO0FBQ0YsVUFBTUssNENBQUss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RyxFQUExQjtBQUNBLE1BQU1DLDBCQUEwQixHQUFHLEVBQW5DO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUdGLGlCQUFpQixHQUFHQywwQkFBMEIsR0FBRyxDQUFqRjtBQUVBLE1BQU1FLGlCQUFpQixHQUFHLEVBQTFCO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsQ0FBbkM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBR0YsaUJBQWlCLEdBQUdDLDBCQUEwQixHQUFHLENBQWpGO0FBRUEsTUFBTUUsTUFBTSxHQUFHLEVBQWY7QUFDQSxNQUFNQyxhQUFhLEdBQUcsRUFBdEI7QUFFQSxNQUFNQyxZQUFZLEdBQUksZ0JBQWVULGNBQWUsUUFBT0csdUJBQXdCLFFBQU9oRCxjQUFlLFFBQU9xRCxhQUFjLEtBQTlIO0FBQ0EsTUFBTUUsMkJBQTJCLEdBQUksZ0JBQWVWLGNBQWUsUUFBT0csdUJBQXdCLFFBQU9oRCxjQUFlLFFBQU9tRCx1QkFBd0IsUUFBT0UsYUFBYyxLQUE1SztBQUNBLE1BQU1HLG1CQUFtQixHQUFJLGdCQUFlWCxjQUFlLFFBQU9HLHVCQUF3QixRQUFPaEQsY0FBZSxRQUFPbUQsdUJBQXdCLFFBQU9FLGFBQWMsWUFBcEssQzs7Ozs7Ozs7Ozs7O0FDaEJQO0FBQUE7QUFBTyxJQUFLcEYsVUFBWjs7V0FBWUEsVTtBQUFBQSxZLENBQUFBLFU7QUFBQUEsWSxDQUFBQSxVO0FBQUFBLFksQ0FBQUEsVTtBQUFBQSxZLENBQUFBLFU7QUFBQUEsWSxDQUFBQSxVO0FBQUFBLFksQ0FBQUEsVTtHQUFBQSxVLEtBQUFBLFU7Ozs7Ozs7Ozs7O0FDQVoscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyBzZXJ2ZXJTaWRlVHJhbnNsYXRpb25zIH0gZnJvbSAnbmV4dC1pMThuZXh0L3NlcnZlclNpZGVUcmFuc2xhdGlvbnMnXG5pbXBvcnQgbm9va2llcyBmcm9tICdub29raWVzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5pbXBvcnQgeyBTdGF0dXNDb2RlIH0gZnJvbSAnQC91dGlscy9TdGF0dXNDb2RlJ1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCB9IGZyb20gJ25leHQnXG5cbmNvbnN0IHVzZUF1dGhNaWRkbGV3YXJlID1cbiAgKGxvY2FsZXM6IHN0cmluZ1tdID0gW10pID0+XG4gIGFzeW5jIChjb250ZXh0OiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0KSA9PiB7XG4gICAgY29uc3QgY29va2llcyA9IG5vb2tpZXMuZ2V0KGNvbnRleHQpXG4gICAgY29uc3QgeyByZXNvbHZlZFVybCB9ID0gY29udGV4dFxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBheGlvcyh7XG4gICAgICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6ICcvaGVhbHRoX2NoZWNrL3Byb3RlY3RlZCcsXG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCB9XG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3I/LnJlc3BvbnNlPy5zdGF0dXMgPT09IFN0YXR1c0NvZGUuVU5BVVRIT1JJWkVEKSB7XG4gICAgICAgIG5vb2tpZXMuZGVzdHJveShjb250ZXh0LCAndG9rZW4nKVxuICAgICAgICBub29raWVzLmRlc3Ryb3koY29udGV4dCwgJ3JlZGlyZWN0X3RvJylcbiAgICAgICAgbm9va2llcy5kZXN0cm95KGNvbnRleHQsICdjdXJyZW50X2pvYl9pZCcpXG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcmVzb2x2ZWRVcmwgPT09ICcvJyA/IGAvbG9naW5gIDogYC9sb2dpbj9iYWNrX3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChyZXNvbHZlZFVybCl9YFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXNvbHZlZFVybCA9PT0gJy8nICYmIGNvb2tpZXMucmVkaXJlY3RfdG8pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgZGVzdGluYXRpb246IGNvb2tpZXMucmVkaXJlY3RfdG9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgLi4uKGF3YWl0IHNlcnZlclNpZGVUcmFuc2xhdGlvbnMoY29udGV4dC5sb2NhbGUsIGxvY2FsZXMpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5leHBvcnQgZGVmYXVsdCB1c2VBdXRoTWlkZGxld2FyZVxuIiwiaW1wb3J0IHVzZVN0eWxlcyBmcm9tICdAL3N0eWxlcy9wYWdlL2xheW91dCdcbmltcG9ydCB1c2VBdXRoTWlkZGxld2FyZSBmcm9tICdAL2hvb2tzL3VzZUF1dGhNaWRkbGV3YXJlJ1xuXG5mdW5jdGlvbiBJbmRleFBhZ2UoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB1c2VBdXRoTWlkZGxld2FyZSgpXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZVxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcywgZGFya2VuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IHsgcmVkLCBibHVlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xuXG5pbXBvcnQgeyBDT05UUk9MX0hFSUdIVCB9IGZyb20gJ0Avc3R5bGVzL3ZhcnMvc2l6ZSdcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtYWluOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMS41KVxuICAgIH0sXG4gICAgYnV0dG9uQ29udHJvbHM6IHtcbiAgICAgICcmIGJ1dHRvbjpub3QoOmZpcnN0LWNoaWxkKSc6IHtcbiAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxLjUpXG4gICAgICB9XG4gICAgfSxcbiAgICBjb250cm9sczoge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAwLCAxLjIpXG4gICAgfSxcbiAgICBmdWxsV2lkdGg6IHtcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIG9mZmljZUNvbHVtbjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgfSxcbiAgICBjb250cm9sOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICBoZWlnaHQ6IENPTlRST0xfSEVJR0hULFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAxLjQpLFxuICAgICAgYmFja2dyb3VuZDogJyNGNEY3RkMnXG4gICAgfSxcbiAgICB3cmFwQ29udHJvbDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuICAgIGNvbnRyb2xBdXRvY29tcGxldGU6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMylcbiAgICB9LFxuICAgIGVxdWl2YWxlbmNlOiB7XG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkXG4gICAgfSxcbiAgICB0YWJsZUZvb3RlckJ1ZGdldDoge1xuICAgICAgZmxleEdyb3c6IDFcbiAgICB9LFxuICAgIGNlbGxGb290ZXJCdWRnZXQ6IHtcbiAgICAgIG1hcmdpbkxlZnQ6ICc3cHgnXG4gICAgfSxcbiAgICBjZWxsRm9vdGVyRGVzY0J1ZGdldDoge1xuICAgICAgcGFkZGluZzogJzBweCAxMHB4J1xuICAgIH0sXG4gICAgYnV0dG9uQ29udHJvbDoge1xuICAgICAgLy8gY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgcGFkZGluZzogMixcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgICAgICcmOm5vdCg6Zmlyc3QtY2hpbGQpJzoge1xuICAgICAgICBtYXJnaW5MZWZ0OiA4XG4gICAgICB9XG4gICAgfSxcbiAgICBzdGFuZGFyZDoge1xuICAgICAgJyYgLk11aURhdGFHcmlkLWNlbGxDaGVja2JveCc6IHtcbiAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvdGFsQnVkZ2V0Um93OiB7XG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuYm9keTEuZm9udFNpemUsXG4gICAgICBib3JkZXJUb3A6ICcxLjVweCBzb2xpZCAjREFFMUVDJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCAhaW1wb3J0YW50J1xuICAgICAgfSxcbiAgICAgICcmIC5NdWlEYXRhR3JpZC1jZWxsQ2hlY2tib3gnOiB7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0sXG4gICAgICAnJiAuTXVpRGF0YUdyaWQtY2VsbDpudGgtY2hpbGQoMiknOiB7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH1cbiAgICB9LFxuICAgIG1hcms6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvcmRlckxlZnQ6ICc1cHggc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgICBib3JkZXJSaWdodDogJzVweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgICAgIGJvcmRlclRvcDogYDVweCBzb2xpZCAke3JlZFsyMDBdfWAsXG4gICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgyMjVkZWcpJ1xuICAgICAgfVxuICAgIH0sXG4gICAgcGVybWlzc2lvbkl0ZW06IHtcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiBibHVlWzUwXVxuICAgICAgfVxuICAgIH0sXG4gICAgY3VycmVuY3lUYWJsZToge1xuICAgICAgJyYgLmhvbWVDdXJyZW5jeSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZTBiMiAhaW1wb3J0YW50JyxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtkYXJrZW4oJyNmZmUwYjInLCAwLjIpfSAhaW1wb3J0YW50YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsaW5rOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvb2x0aXA6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjknLFxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICAgIC8vIG1heFdpZHRoOiAocHJvcHM6IGFueSkgPT4gcGFyc2VJbnQocHJvcHMud2lkdGgpIC0gMTYsXG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5ib2R5Mi5mb250U2l6ZSxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGFkZGU5JyxcbiAgICAgIG1heFdpZHRoOiA1MDBcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlc1xuIiwiZXhwb3J0IGNvbnN0IEFQUF9CQVJfSEVJR0hUID0gNDhcbmV4cG9ydCBjb25zdCBDT05UUk9MX0hFSUdIVCA9IDYwXG5cbmV4cG9ydCBjb25zdCBCUkVBRENSVU1CX0hFSUdIVCA9IDIwXG5leHBvcnQgY29uc3QgQlJFQURDUlVNQl9NQVJHSU5fVkVSVElDQUwgPSAxMlxuZXhwb3J0IGNvbnN0IEJSRUFEQ1JVTUJfVE9UQUxfSEVJR0hUID0gQlJFQURDUlVNQl9IRUlHSFQgKyBCUkVBRENSVU1CX01BUkdJTl9WRVJUSUNBTCAqIDJcblxuZXhwb3J0IGNvbnN0IFBBR0lOQVRJT05fSEVJR0hUID0gNDVcbmV4cG9ydCBjb25zdCBQQUdJTkFUSU9OX0hFSUdIVF9WRVJUSUNBTCA9IDBcbmV4cG9ydCBjb25zdCBQQUdJTkFUSU9OX1RPVEFMX0hFSUdIVCA9IFBBR0lOQVRJT05fSEVJR0hUICsgUEFHSU5BVElPTl9IRUlHSFRfVkVSVElDQUwgKiAyXG5cbmV4cG9ydCBjb25zdCBGT09URVIgPSAyNVxuZXhwb3J0IGNvbnN0IEJPVFRPTV9IRUlHSFQgPSA0MFxuXG5leHBvcnQgY29uc3QgVEFCTEVfSEVJR0hUID0gYGNhbGMoMTAwdmggLSAke0FQUF9CQVJfSEVJR0hUfXB4IC0gJHtCUkVBRENSVU1CX1RPVEFMX0hFSUdIVH1weCAtICR7Q09OVFJPTF9IRUlHSFR9cHggLSAke0JPVFRPTV9IRUlHSFR9cHgpYFxuZXhwb3J0IGNvbnN0IFRBQkxFX0hFSUdIVF9JTkNMVURFX0ZPT1RFUiA9IGBjYWxjKDEwMHZoIC0gJHtBUFBfQkFSX0hFSUdIVH1weCAtICR7QlJFQURDUlVNQl9UT1RBTF9IRUlHSFR9cHggLSAke0NPTlRST0xfSEVJR0hUfXB4IC0gJHtQQUdJTkFUSU9OX1RPVEFMX0hFSUdIVH1weCAtICR7Qk9UVE9NX0hFSUdIVH1weClgXG5leHBvcnQgY29uc3QgVEFCTEVfSEVJR0hUX0JVREdFVCA9IGBjYWxjKDEwMHZoIC0gJHtBUFBfQkFSX0hFSUdIVH1weCAtICR7QlJFQURDUlVNQl9UT1RBTF9IRUlHSFR9cHggLSAke0NPTlRST0xfSEVJR0hUfXB4IC0gJHtQQUdJTkFUSU9OX1RPVEFMX0hFSUdIVH1weCAtICR7Qk9UVE9NX0hFSUdIVH1weCAtIDM1cHgpYFxuIiwiZXhwb3J0IGVudW0gU3RhdHVzQ29kZSB7XG4gIE9LID0gMjAwLFxuICBDUkVBVEVEID0gMjAxLFxuICBCQURfUkVRVUVTVCA9IDQwMCxcbiAgVU5BVVRIT1JJWkVEID0gNDAxLFxuICBGT1JCSURERU4gPSA0MDMsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUiA9IDUwMFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHQvc2VydmVyU2lkZVRyYW5zbGF0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9