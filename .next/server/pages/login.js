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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/login.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_page_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/page/login */ "./src/styles/page/login.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_if__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-if */ "react-if");
/* harmony import */ var react_if__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_if__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @hookform/resolvers/yup */ "@hookform/resolvers/yup");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/store/reducers */ "./src/store/reducers/index.ts");


var _jsxFileName = "D:\\Fersher\\TTS_Reactjs\\malis-3-frontend\\src\\pages\\login.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function Login() {
  var _loginForm$errors$use, _loginForm$errors$pas;

  const classes = Object(_styles_page_login__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const authencationState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_store_reducers__WEBPACK_IMPORTED_MODULE_11__["authStore"].selectState);
  const messageState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_store_reducers__WEBPACK_IMPORTED_MODULE_11__["commonStore"].selectMessageState);
  const defaultData = {
    user_id: '',
    password: '',
    remember: true
  };
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_9__["object"]({
    user_id: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required('User is required'),
    password: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required('Password is required')
  });
  const resolver = Object(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__["yupResolver"])(validationSchema);
  const loginForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])({
    resolver,
    shouldUnregister: false,
    defaultValues: _objectSpread({}, defaultData)
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (authencationState.access_token) {
      loginForm.clearErrors();
    }
  }, [authencationState]);
  const onLogin = loginForm.handleSubmit(data => {
    dispatch(_store_reducers__WEBPACK_IMPORTED_MODULE_11__["authStore"].sagaLogin(data));
    dispatch(_store_reducers__WEBPACK_IMPORTED_MODULE_11__["commonStore"].actions.setDisplayMessage(false));
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Sign in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      component: "main",
      maxWidth: "xs",
      className: classes.wrapLogin,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CssBaseline"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.loginForm,
        role: "login-form",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_if__WEBPACK_IMPORTED_MODULE_8__["When"], {
          condition: authencationState.loading,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["LinearProgress"], {
            className: classes.progress
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
          className: classes.topIcon,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["Lock"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
          component: "h1",
          variant: "h5",
          className: classes.loginTitle,
          role: "heading",
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: onLogin,
          role: "form",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_if__WEBPACK_IMPORTED_MODULE_8__["When"], {
            condition: messageState.display,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              role: "alert",
              className: classes.error,
              children: messageState.message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
            required: true,
            className: classes.textField,
            label: "Username",
            name: "user_id",
            role: "input",
            inputProps: {
              'aria-label': 'user_id'
            },
            inputRef: loginForm.register,
            error: Boolean(loginForm.errors.user_id),
            helperText: (_loginForm$errors$use = loginForm.errors.user_id) === null || _loginForm$errors$use === void 0 ? void 0 : _loginForm$errors$use.message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
            required: true,
            type: "password",
            className: classes.textField,
            label: "Password",
            name: "password",
            role: "input",
            inputProps: {
              'aria-label': 'password'
            },
            error: Boolean(loginForm.errors.password),
            helperText: (_loginForm$errors$pas = loginForm.errors.password) === null || _loginForm$errors$pas === void 0 ? void 0 : _loginForm$errors$pas.message,
            inputRef: loginForm.register
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["Controller"], {
            name: "remember",
            control: loginForm.control,
            render: (_ref) => {
              let {
                onChange
              } = _ref,
                  props = _objectWithoutProperties(_ref, ["onChange"]);

              const remember = loginForm.watch('remember');
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControlLabel"], _objectSpread(_objectSpread({}, props), {}, {
                className: classes.checkbox,
                label: "Remember",
                onChange: (_, checked) => {
                  onChange(checked);
                },
                checked: remember,
                control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
                  inputProps: {
                    'aria-label': 'remember'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 30
                }, this)
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 19
              }, this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.wrapButton,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
              type: "submit",
              fullWidth: true,
              variant: "contained",
              color: "primary",
              className: classes.submitButton,
              disableElevation: true,
              role: "button",
              "aria-pressed": "true",
              children: "Sign in"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

async function getServerSideProps(context) {
  const {
    req
  } = context;
  const {
    token
  } = req.cookies;

  if (token) {
    return {
      redirect: {
        destination: '/'
      }
    };
  }

  return {
    props: {
      namespacesRequired: ['common']
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/store/reducers/advancedFilter.ts":
/*!**********************************************!*\
  !*** ./src/store/reducers/advancedFilter.ts ***!
  \**********************************************/
/*! exports provided: name, resetState, initialState, create, getList, clearDefaultFilter, getDefaultFilter, changeFilterType, open, apply, close, remove, getDetail, update, share, saveAs, setOpenAdvanceSearch, setDefaultFilter, setFilterPresetList, setFilterType, setOpenFilterDetail, setEditMode, setInitData, setFilterDetail, setExpandedSection, resetFilterDetail, setPermissions, setSystemPreset, setSaveAsForm, setAfForm, setLoadingDialog, setLoadingTable, setLoadingSection, advanceSearchSelector, selectEditMode, selectDefaultFilter, selectFilterType, selectIsExpanedSection, selectColumn, selectComparator, selectSortOptions, selectFilterDetail, selectConditionTree, selectSortConditions, selectUserDefault, selectFilterDetailName, selectListData, selectPermissions, selectSystemPreset, selectOpenAdvanceSearch, selectAfForm, selectSaveAsForm, selectLoading, selectFilterData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearDefaultFilter", function() { return clearDefaultFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultFilter", function() { return getDefaultFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeFilterType", function() { return changeFilterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open", function() { return open; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetail", function() { return getDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "share", function() { return share; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAs", function() { return saveAs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOpenAdvanceSearch", function() { return setOpenAdvanceSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultFilter", function() { return setDefaultFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilterPresetList", function() { return setFilterPresetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilterType", function() { return setFilterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOpenFilterDetail", function() { return setOpenFilterDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEditMode", function() { return setEditMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInitData", function() { return setInitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilterDetail", function() { return setFilterDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setExpandedSection", function() { return setExpandedSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetFilterDetail", function() { return resetFilterDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPermissions", function() { return setPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSystemPreset", function() { return setSystemPreset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSaveAsForm", function() { return setSaveAsForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAfForm", function() { return setAfForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoadingDialog", function() { return setLoadingDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoadingTable", function() { return setLoadingTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoadingSection", function() { return setLoadingSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advanceSearchSelector", function() { return advanceSearchSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEditMode", function() { return selectEditMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDefaultFilter", function() { return selectDefaultFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilterType", function() { return selectFilterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsExpanedSection", function() { return selectIsExpanedSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectColumn", function() { return selectColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectComparator", function() { return selectComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSortOptions", function() { return selectSortOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilterDetail", function() { return selectFilterDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectConditionTree", function() { return selectConditionTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSortConditions", function() { return selectSortConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserDefault", function() { return selectUserDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilterDetailName", function() { return selectFilterDetailName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectListData", function() { return selectListData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSystemPreset", function() { return selectSystemPreset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOpenAdvanceSearch", function() { return selectOpenAdvanceSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAfForm", function() { return selectAfForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSaveAsForm", function() { return selectSaveAsForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoading", function() { return selectLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilterData", function() { return selectFilterData; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const name = 'advancedFilter';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/RESET_STATE');
const initialState = {
  isOpen: false,
  isEditMode: false,
  isOpenFilterDetail: false,
  isExpanedSection: false,
  permissions: {
    update_system_default_presets: false
  },
  systemPreset: {
    id: null,
    name: ''
  },
  defaultFilter: {
    id: null,
    name: '',
    entity: '',
    is_system_default: false,
    where_conditions: null,
    sort_conditions: null
  },
  filterPresetList: [],
  filterType: 'own',
  initData: {
    columns: [],
    comparators: [],
    sortOptions: [],
    logicalOperators: []
  },
  filterDetail: {
    name: '',
    entity: '',
    is_shared: false,
    is_system_default: false,
    is_user_default: false,
    sort_conditions: null,
    where_conditions: null
  },
  saveAsForm: {
    open: false,
    clearError: false,
    error: ''
  },
  afForm: {
    clearError: false,
    error: ''
  },
  loading: {
    table: false,
    dialog: false,
    section: false
  }
};
const advancedFilter = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setOpenAdvanceSearch(state, action) {
      state.isOpen = action.payload;
    },

    setDefaultFilter(state, action) {
      state.defaultFilter = _objectSpread(_objectSpread({}, state.defaultFilter), action.payload);
    },

    setFilterPresetList(state, action) {
      state.filterPresetList = action.payload;
    },

    setFilterType(state, action) {
      state.filterType = action.payload;
    },

    setOpenFilterDetail(state, action) {
      state.isOpenFilterDetail = action.payload;
    },

    setEditMode(state, action) {
      state.isEditMode = action.payload;
    },

    setInitData(state, action) {
      state.initData = action.payload;
    },

    setFilterDetail(state, action) {
      state.filterDetail = _objectSpread(_objectSpread({}, state.filterDetail), action.payload);
    },

    setExpandedSection(state, action) {
      state.isExpanedSection = action.payload;
    },

    setPermissions(state, action) {
      state.permissions = action.payload;
    },

    setSystemPreset(state, action) {
      state.systemPreset = action.payload;
    },

    setSaveAsForm(state, action) {
      state.saveAsForm = _objectSpread(_objectSpread({}, state.saveAsForm), action.payload);
    },

    setAfForm(state, action) {
      state.afForm = _objectSpread(_objectSpread({}, state.afForm), action.payload);
    },

    setLoadingTable(state, action) {
      state.loading.table = action.payload;
    },

    setLoadingDialog(state, action) {
      state.loading.dialog = action.payload;
    },

    setLoadingSection(state, {
      payload
    }) {
      state.loading.section = payload;
    },

    resetFilterDetail(state, {
      payload
    }) {
      state.filterDetail = {
        name: '',
        entity: payload,
        is_shared: false,
        is_system_default: false,
        is_user_default: false,
        sort_conditions: [],
        where_conditions: {
          conjunction: 'AND',
          type: 'group',
          conditions: []
        }
      };
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
});
const create = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/CREATE');
const getList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/GET_LIST');
const clearDefaultFilter = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/CLEAR_DEFAULT_FILTER');
const getDefaultFilter = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/GET_DEFAULT_FILTER');
const changeFilterType = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/CHANGE_FILTER_TYPE');
const open = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/OPEN');
const apply = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/APPLY');
const close = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/CLOSE');
const remove = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/REMOVE');
const getDetail = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/GET_DETAIL');
const update = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/UPDATE');
const share = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/SHARE');
const saveAs = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/SAVE_AS');
const {
  setOpenAdvanceSearch,
  setDefaultFilter,
  setFilterPresetList,
  setFilterType,
  setOpenFilterDetail,
  setEditMode,
  setInitData,
  setFilterDetail,
  setExpandedSection,
  resetFilterDetail,
  setPermissions,
  setSystemPreset,
  setSaveAsForm,
  setAfForm,
  setLoadingDialog,
  setLoadingTable,
  setLoadingSection
} = advancedFilter.actions; // Selector

const advanceSearchSelector = state => state.advancedFilter;
const selectEditMode = state => state.advancedFilter.isEditMode;
const selectDefaultFilter = state => state.advancedFilter.defaultFilter;
const selectFilterType = state => state.advancedFilter.filterType;
const selectIsExpanedSection = state => state.advancedFilter.isExpanedSection;
const selectColumn = state => state.advancedFilter.initData.columns;
const selectComparator = state => state.advancedFilter.initData.comparators;
const selectSortOptions = state => state.advancedFilter.initData.sortOptions;
const selectFilterDetail = state => state.advancedFilter.filterDetail;
const selectConditionTree = state => state.advancedFilter.filterDetail.where_conditions;
const selectSortConditions = state => state.advancedFilter.filterDetail.sort_conditions;
const selectUserDefault = state => state.advancedFilter.filterDetail.is_user_default;
const selectFilterDetailName = state => state.advancedFilter.filterDetail.name;
const selectListData = state => state.advancedFilter.filterPresetList;
const selectPermissions = state => state.advancedFilter.permissions;
const selectSystemPreset = state => state.advancedFilter.systemPreset;
const selectOpenAdvanceSearch = state => state.advancedFilter.isOpen;
const selectAfForm = state => state.advancedFilter.afForm;
const selectSaveAsForm = state => state.advancedFilter.saveAsForm;
const selectLoading = state => state.advancedFilter.loading;
const selectFilterData = state => {
  const {
    where_conditions: whereConditions,
    sort_conditions: sortConditions
  } = state.advancedFilter.defaultFilter;
  const where_conditions = whereConditions ? JSON.stringify(whereConditions) : null;
  const sort_conditions = sortConditions ? JSON.stringify(sortConditions) : null;
  return {
    where_conditions,
    sort_conditions
  };
};
/* harmony default export */ __webpack_exports__["default"] = (advancedFilter.reducer);

/***/ }),

/***/ "./src/store/reducers/assembly.reducer.ts":
/*!************************************************!*\
  !*** ./src/store/reducers/assembly.reducer.ts ***!
  \************************************************/
/*! exports provided: name, resetState, actions, sagaGetList, sagaChangeUserJob, sagaChangeUserDrawing, sagaRemove, selectState, selectInitDataForList, selectPermissions, selectDataList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetList", function() { return sagaGetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaChangeUserJob", function() { return sagaChangeUserJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaChangeUserDrawing", function() { return sagaChangeUserDrawing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaRemove", function() { return sagaRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForList", function() { return selectInitDataForList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDataList", function() { return selectDataList; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");


const name = 'assembly';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].RESET_STATE}`);
const initialState = {
  dataList: [],
  initDataForList: {
    jobs: [],
    permissions: {
      assembly: null
    },
    parameters: {
      PLLA: []
    },
    wiki_page: '',
    column_tooltips: {}
  }
};
const assemblySlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setInitDataForList(state, {
      payload
    }) {
      state.initDataForList = payload;
    },

    setDataList(state, {
      payload
    }) {
      state.dataList = payload;
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
});
const {
  actions
} = assemblySlice;
const sagaGetList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_LIST}`);
const sagaChangeUserJob = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CHANGE_USER_JOB}`);
const sagaChangeUserDrawing = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CHANGE_USER_DRAWING}`);
const sagaRemove = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].REMOVE}`);
const selectState = state => state[name];
const selectInitDataForList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList);
const selectPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList.permissions.assembly);
const selectDataList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dataList);
/* harmony default export */ __webpack_exports__["default"] = (assemblySlice);

/***/ }),

/***/ "./src/store/reducers/auth.reducer.ts":
/*!********************************************!*\
  !*** ./src/store/reducers/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: name, resetState, initialState, actions, sagaLogin, sagaGetProfile, sagaChangePassword, sagaGetSettings, sagaSaveSettings, sagaLogout, selectState, selectUnauthorized, selectProfile, selectPwdDialogState, selectSettings, selectSettingsParameters, selectLoadingAuth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaLogin", function() { return sagaLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetProfile", function() { return sagaGetProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaChangePassword", function() { return sagaChangePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetSettings", function() { return sagaGetSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaSaveSettings", function() { return sagaSaveSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaLogout", function() { return sagaLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnauthorized", function() { return selectUnauthorized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProfile", function() { return selectProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPwdDialogState", function() { return selectPwdDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSettings", function() { return selectSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSettingsParameters", function() { return selectSettingsParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoadingAuth", function() { return selectLoadingAuth; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const name = 'auth';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/RESET_STATE`);
const initialState = {
  access_token: '',
  loading: false,
  unauthorized: false,
  loadingAuth: false,
  profile: {
    user_id: '',
    first_name: '',
    last_name: '',
    email: '',
    valid_until: '',
    user_name: '',
    updated_at: '',
    group_membership: [],
    default_language_id: null
  },
  pwdDialogState: {
    loading: false,
    open: false
  },
  settings: {
    initData: {
      parameters: {
        PAGES: [],
        PLLA: []
      },
      timezones: []
    },
    detail: {
      default_language: null,
      home_page: null,
      time_zone: ''
    }
  }
};
const authSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    saveTokenLogin(state, {
      payload
    }) {
      state.access_token = payload.access_token;
      const backUrl = next_router__WEBPACK_IMPORTED_MODULE_2___default.a.query.back_url;

      if (payload.remember) {
        Object(nookies__WEBPACK_IMPORTED_MODULE_1__["setCookie"])(null, 'token', payload.access_token, {
          maxAge: 60 * 60 * 24 // 1 day

        });
      } else {
        Object(nookies__WEBPACK_IMPORTED_MODULE_1__["setCookie"])(null, 'token', payload.access_token);
      }

      Object(nookies__WEBPACK_IMPORTED_MODULE_1__["setCookie"])(null, 'redirect_to', payload.redirect_to, {
        maxAge: 60 * 60 * 24 * 365
      });

      if (backUrl) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(decodeURIComponent(backUrl));
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(payload.redirect_to);
      }
    },

    setLoading(state, {
      payload
    }) {
      state.loading = payload;
    },

    setUnauthorized(state, {
      payload
    }) {
      state.unauthorized = payload;
    },

    setProfile(state, {
      payload
    }) {
      state.profile = payload;
    },

    logout(state) {
      Object(nookies__WEBPACK_IMPORTED_MODULE_1__["destroyCookie"])(null, 'token');
      Object(nookies__WEBPACK_IMPORTED_MODULE_1__["destroyCookie"])(null, 'redirect_to');
      Object(nookies__WEBPACK_IMPORTED_MODULE_1__["destroyCookie"])(null, 'current_job_id');
      state.unauthorized = false;
      state.access_token = '';
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
    },

    setPwDialogState(state, {
      payload
    }) {
      state.pwdDialogState = _objectSpread(_objectSpread({}, state.pwdDialogState), payload);
    },

    setProfileAvatar(state, {
      payload
    }) {
      state.profile.avatar = payload;
    },

    setSettingInitData(state, {
      payload
    }) {
      state.settings.initData = payload;
    },

    setLoadingAuth(state, {
      payload
    }) {
      state.loadingAuth = payload;
    },

    setSettingDetail(state, {
      payload
    }) {
      state.settings.detail = _objectSpread(_objectSpread({}, state.settings.detail), payload);
    },

    setDefaultLanguage(state, {
      payload
    }) {
      state.profile.default_language_id = payload;
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
}); // Actions

const {
  actions
} = authSlice; // Saga actions

const sagaLogin = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].LOGIN}`);
const sagaGetProfile = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].GET_PROFILE}`);
const sagaChangePassword = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].CHANGE_PASSWORD}`);
const sagaGetSettings = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/GET_SETTINGS`);
const sagaSaveSettings = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/SAVE_SETTINGS`);
const sagaLogout = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].LOGOUT}`);
const selectState = state => state.auth;
const selectUnauthorized = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.unauthorized);
const selectProfile = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.profile);
const selectPwdDialogState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.pwdDialogState);
const selectSettings = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.settings);
const selectSettingsParameters = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.settings.initData.parameters);
const selectLoadingAuth = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.loadingAuth);
/* harmony default export */ __webpack_exports__["default"] = (authSlice);

/***/ }),

/***/ "./src/store/reducers/budget.ts":
/*!**************************************!*\
  !*** ./src/store/reducers/budget.ts ***!
  \**************************************/
/*! exports provided: name, resetState, dialogState, importDialogState, resultImportDialog, budgetDetail, initDataForList, initDataForCreateEdit, initialState, setOpenDialog, setLoadingDialog, setEditMode, setInitDataForList, setDataList, setUserValues, setBudgetDetail, setInitDataForCreateEdit, setBudgetSum, setPermissions, setImportOpen, setImportLoading, setImportResult, setImportMode, setOpenImportProcess, setCeleryId, setOperationId, setRemindData, openUpdateDialog, closeDialog, openCreateDialog, getList, changeUserValue, updateMultiple, create, update, remove, importCostCode, sendReportMail, getRemindData, selectDialogState, selectUserJob, selectUserPuco, selectDataList, selectJobList, selectPucoList, selectBudgetDetail, selectInitDataCreateEdit, selectBudgetSum, selectPermissions, selectImportDialogState, selectImportResultDialog, selectImportDialogProcess, selectRemindData, selectInitDataForCE, selectInitDataForList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialogState", function() { return dialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importDialogState", function() { return importDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultImportDialog", function() { return resultImportDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "budgetDetail", function() { return budgetDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDataForList", function() { return initDataForList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDataForCreateEdit", function() { return initDataForCreateEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOpenDialog", function() { return setOpenDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoadingDialog", function() { return setLoadingDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEditMode", function() { return setEditMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInitDataForList", function() { return setInitDataForList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDataList", function() { return setDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserValues", function() { return setUserValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBudgetDetail", function() { return setBudgetDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInitDataForCreateEdit", function() { return setInitDataForCreateEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBudgetSum", function() { return setBudgetSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPermissions", function() { return setPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImportOpen", function() { return setImportOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImportLoading", function() { return setImportLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImportResult", function() { return setImportResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImportMode", function() { return setImportMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOpenImportProcess", function() { return setOpenImportProcess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCeleryId", function() { return setCeleryId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOperationId", function() { return setOperationId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRemindData", function() { return setRemindData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openUpdateDialog", function() { return openUpdateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeDialog", function() { return closeDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCreateDialog", function() { return openCreateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeUserValue", function() { return changeUserValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMultiple", function() { return updateMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importCostCode", function() { return importCostCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendReportMail", function() { return sendReportMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRemindData", function() { return getRemindData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDialogState", function() { return selectDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserJob", function() { return selectUserJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserPuco", function() { return selectUserPuco; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDataList", function() { return selectDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectJobList", function() { return selectJobList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPucoList", function() { return selectPucoList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBudgetDetail", function() { return selectBudgetDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataCreateEdit", function() { return selectInitDataCreateEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBudgetSum", function() { return selectBudgetSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectImportDialogState", function() { return selectImportDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectImportResultDialog", function() { return selectImportResultDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectImportDialogProcess", function() { return selectImportDialogProcess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRemindData", function() { return selectRemindData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForCE", function() { return selectInitDataForCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForList", function() { return selectInitDataForList; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const name = 'budget';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/RESET_STATE');
const dialogState = {
  isOpen: false,
  isEdit: false,
  isLoading: false
};
const importDialogState = {
  isOpen: false,
  isLoading: false,
  mode: 0 // 0 -> test, 1 -> write

};
const resultImportDialog = {
  isOpen: false,
  success: true,
  result: '',
  isLoading: false
};
const budgetDetail = {
  job_id: null,
  budget_id: '',
  puco: null,
  description: '',
  amount: null,
  currency: ''
};
const initDataForList = {
  jobs: [],
  puco_list: [],
  selected_job: {
    description: '',
    value: null
  },
  user_puco: {
    description: '',
    value: null
  },
  permissions: {
    budget: null
  },
  wiki_page: '',
  column_tooltips: {}
};
const initDataForCreateEdit = {
  puco_list: [],
  user_currency: {
    description: '',
    value: null
  },
  user_job: {
    description: '',
    value: null
  },
  user_puco: {
    description: '',
    value: null
  },
  wiki_page: ''
};
const remindData = {
  open: false,
  helpText: ''
};
const initialState = {
  dataList: [],
  dialogState,
  importDialogState,
  resultImportDialog,
  budgetDetail,
  initDataForList,
  remindData,
  initDataForCreateEdit,
  budgetImportProcess: {
    celery_id: '',
    operation_id: '',
    openDialogProcess: false
  },
  budgetSum: {
    amount: 0,
    budget_id: '',
    currency_id: '',
    description: 'Total of selected cost codes',
    left_in_order: 0,
    left_in_rfq: 0,
    parameter_id: '',
    used_in_order: 0,
    used_in_rfq: 0,
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v1"])()
  }
};
const budget = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setOpenDialog(state, {
      payload
    }) {
      state.dialogState.isOpen = payload;
    },

    setLoadingDialog(state, {
      payload
    }) {
      state.dialogState.isLoading = payload;
    },

    setEditMode(state, action) {
      state.dialogState.isEdit = action.payload;
    },

    setInitDataForList(state, {
      payload
    }) {
      state.initDataForList = payload;
    },

    setInitDataForCreateEdit(state, {
      payload
    }) {
      state.initDataForCreateEdit = payload;
    },

    setDataList(state, {
      payload
    }) {
      state.dataList = payload;
    },

    setUserValues(state, {
      payload
    }) {
      if (payload.value === 'puco') {
        state.initDataForList.user_puco = payload.option;
      } else {
        state.initDataForList.selected_job = payload.option;
      }
    },

    setBudgetDetail(state, {
      payload
    }) {
      state.budgetDetail = _objectSpread(_objectSpread({}, state.budgetDetail), payload);
    },

    setBudgetSum(state, {
      payload
    }) {
      state.budgetSum.amount = payload.sum_amount;
      state.budgetSum.used_in_rfq = payload.sum_used_in_rfq;
      state.budgetSum.left_in_rfq = payload.sum_left_in_rfq;
      state.budgetSum.used_in_order = payload.sum_used_in_order;
      state.budgetSum.left_in_order = payload.sum_left_in_order;
    },

    setPermissions(state, {
      payload
    }) {
      state.initDataForList.permissions.budget = payload;
    },

    setImportOpen(state, {
      payload
    }) {
      state.importDialogState.isOpen = payload;
    },

    setImportLoading(state, {
      payload
    }) {
      state.importDialogState.isLoading = payload;
    },

    setImportMode(state, {
      payload
    }) {
      state.importDialogState.mode = payload;
    },

    setImportResult(state, {
      payload
    }) {
      state.resultImportDialog = _objectSpread(_objectSpread({}, state.resultImportDialog), payload);
    },

    setOpenImportProcess(state, {
      payload
    }) {
      state.budgetImportProcess.openDialogProcess = payload;
    },

    setCeleryId(state, {
      payload
    }) {
      state.budgetImportProcess.celery_id = payload;
    },

    setOperationId(state, {
      payload
    }) {
      state.budgetImportProcess.operation_id = payload;
    },

    setRemindData(state, {
      payload
    }) {
      state.remindData = _objectSpread(_objectSpread({}, state.remindData), payload);
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
});
const {
  setOpenDialog,
  setLoadingDialog,
  setEditMode,
  setInitDataForList,
  setDataList,
  setUserValues,
  setBudgetDetail,
  setInitDataForCreateEdit,
  setBudgetSum,
  setPermissions,
  setImportOpen,
  setImportLoading,
  setImportResult,
  setImportMode,
  setOpenImportProcess,
  setCeleryId,
  setOperationId,
  setRemindData
} = budget.actions;
const openUpdateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/OPEN_UPDATE_DIALOG');
const closeDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/CLOSE_DIALOG');
const openCreateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/OPEN_CREATE_DIALOG');
const getList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/GET_LIST');
const changeUserValue = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/CHANGE_USER_VALUE');
const updateMultiple = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/' + _utils_constant__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].UPDATE_MULTIPLE);
const create = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/CREATE');
const update = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/UPDATE');
const remove = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/REMOVE');
const importCostCode = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/IMPORT');
const sendReportMail = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/SEND_REPORT_MAIL');
const getRemindData = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(name + '/GET_REMIND_DATA'); // selector

const selectDialogState = state => state.budget.dialogState;
const selectUserJob = state => state.budget.initDataForList.selected_job;
const selectUserPuco = state => state.budget.initDataForList.user_puco;
const selectDataList = state => state.budget.dataList;
const selectJobList = state => state.budget.initDataForList.jobs;
const selectPucoList = state => state.budget.initDataForList.puco_list;
const selectBudgetDetail = state => state.budget.budgetDetail;
const selectInitDataCreateEdit = state => state.budget.initDataForCreateEdit;
const selectBudgetSum = state => state.budget.budgetSum;
const selectPermissions = state => state.budget.initDataForList.permissions.budget;
const selectImportDialogState = state => state.budget.importDialogState;
const selectImportResultDialog = state => state.budget.resultImportDialog;
const selectImportDialogProcess = state => state.budget.budgetImportProcess;
const selectRemindData = state => state.budget.remindData;
const selectInitDataForCE = state => state.budget.initDataForCreateEdit;
const selectInitDataForList = state => state.budget.initDataForList;
/* harmony default export */ __webpack_exports__["default"] = (budget.reducer);

/***/ }),

/***/ "./src/store/reducers/common.reducer.ts":
/*!**********************************************!*\
  !*** ./src/store/reducers/common.reducer.ts ***!
  \**********************************************/
/*! exports provided: name, resetState, initialState, selectState, selectSearchQuery, selectEntity, selectLoading, selectTableState, selectMessageState, selectUserValueDrawing, selectUserValueJob, selectEditRows, selectSelectedRows, selectCurrentLanguage, selectError, actions, sagaExecuteOperation, sagaGetHistoryLogs, sagaUpdateMultiple, sagaCancelBackgroundJob, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSearchQuery", function() { return selectSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntity", function() { return selectEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoading", function() { return selectLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTableState", function() { return selectTableState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMessageState", function() { return selectMessageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserValueDrawing", function() { return selectUserValueDrawing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserValueJob", function() { return selectUserValueJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEditRows", function() { return selectEditRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSelectedRows", function() { return selectSelectedRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentLanguage", function() { return selectCurrentLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectError", function() { return selectError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaExecuteOperation", function() { return sagaExecuteOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetHistoryLogs", function() { return sagaGetHistoryLogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaUpdateMultiple", function() { return sagaUpdateMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCancelBackgroundJob", function() { return sagaCancelBackgroundJob; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");
/* harmony import */ var _utils_StatusCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/StatusCode */ "./src/utils/StatusCode.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const name = 'common';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].RESET_STATE}`);
const initialState = {
  searchQuery: '',
  entity: '',
  loading: {
    table: false,
    page: false
  },
  tableState: {
    page: 1,
    per_page: 100,
    total_items: 0
  },
  messageState: {
    message: '',
    status: 'success',
    display: false
  },
  editRows: [],
  currentLanguage: {
    value: null,
    // primary key
    description: '',
    properties: {},
    is_default: false,
    parameter_id: '',
    id: null,
    // primary key
    status: false
  },
  selectedRows: [],
  userValue: {
    drawing: {
      description: '',
      entity_id: 'All',
      value: -1
    },
    job: {
      description: '',
      value: null
    }
  },
  error: {
    message: '',
    statusCode: null,
    open: false
  }
};
const commonSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setSearchQuery(state, {
      payload
    }) {
      state.searchQuery = payload;
    },

    setEntity(state, {
      payload
    }) {
      state.entity = payload;
    },

    setLoadingTable(state, {
      payload
    }) {
      state.loading.table = payload;
    },

    setLoadingPage(state, {
      payload
    }) {
      state.loading.page = payload;
    },

    setTableState(state, {
      payload
    }) {
      state.tableState = _objectSpread(_objectSpread({}, state.tableState), payload);
    },

    setErrorMessage(state, action) {
      state.messageState.message = action.payload;
      state.messageState.status = 'error';
      state.messageState.display = true;
    },

    setSuccessMessage(state, action) {
      state.messageState.message = action.payload;
      state.messageState.status = 'success';
      state.messageState.display = true;
    },

    setDisplayMessage(state, action) {
      state.messageState.display = action.payload;
    },

    setEditRows(state, {
      payload
    }) {
      state.editRows = payload;
    },

    setUserValueDrawing(state, {
      payload
    }) {
      state.userValue.drawing = payload;
    },

    setUserValueJob(state, {
      payload
    }) {
      state.userValue.job = payload;
    },

    resetUserValue(state) {
      state.userValue = initialState.userValue;
    },

    setSelectedRows(state, {
      payload
    }) {
      state.selectedRows = payload;
    },

    resetMessageState(state) {
      state.messageState = initialState.messageState;
    },

    setCurrentLanguage(state, {
      payload
    }) {
      state.currentLanguage = payload;
    },

    setError(state, {
      payload
    }) {
      const {
        message,
        status
      } = payload;

      if (status === _utils_StatusCode__WEBPACK_IMPORTED_MODULE_2__["StatusCode"].BAD_REQUEST && message !== 'Bad request') {
        state.messageState.message = message;
        state.messageState.status = 'error';
        state.messageState.display = true;
        return;
      }

      state.error = {
        message,
        statusCode: status || 'unknow',
        open: true
      };
    },

    setOpenErrorDialog(state, {
      payload
    }) {
      state.error.open = payload;
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
}); // Selectors

const selectState = state => state[name];
const selectSearchQuery = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.searchQuery);
const selectEntity = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.entity);
const selectLoading = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.loading);
const selectTableState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.tableState);
const selectMessageState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.messageState);
const selectUserValueDrawing = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.userValue.drawing);
const selectUserValueJob = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.userValue.job);
const selectEditRows = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.editRows);
const selectSelectedRows = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.selectedRows);
const selectCurrentLanguage = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.currentLanguage);
const selectError = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.error);
const {
  actions
} = commonSlice; // Saga actions

const sagaExecuteOperation = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].EXECUTE_OPERATION}`);
const sagaGetHistoryLogs = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_HISTORY}`);
const sagaUpdateMultiple = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].UPDATE_MULTIPLE}`);
const sagaCancelBackgroundJob = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/CANCEL_BACKGROUND_JOB`);
/* harmony default export */ __webpack_exports__["default"] = (commonSlice);

/***/ }),

/***/ "./src/store/reducers/currency.reducer.ts":
/*!************************************************!*\
  !*** ./src/store/reducers/currency.reducer.ts ***!
  \************************************************/
/*! exports provided: name, resetState, currencyDetail, actions, sagaGetList, sagaOpenCreateDialog, sagaOpenUpdateDialog, sagaCloseDialog, sagaCreate, sagaUpdate, sagaChangeUserCurrency, selectState, selectDataList, selectInitDataForList, selectDialogState, selectInitDataForCE, selectDetail, selectPermissions, selectUserBaseCurrency, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyDetail", function() { return currencyDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetList", function() { return sagaGetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenCreateDialog", function() { return sagaOpenCreateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenUpdateDialog", function() { return sagaOpenUpdateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCloseDialog", function() { return sagaCloseDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCreate", function() { return sagaCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaUpdate", function() { return sagaUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaChangeUserCurrency", function() { return sagaChangeUserCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDataList", function() { return selectDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForList", function() { return selectInitDataForList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDialogState", function() { return selectDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForCE", function() { return selectInitDataForCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDetail", function() { return selectDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserBaseCurrency", function() { return selectUserBaseCurrency; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const name = 'currency';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].RESET_STATE}`);
const currencyDetail = {
  currency_id: '',
  description: '',
  multiplier: null,
  rate: '',
  round_to: null,
  base_currency: null,
  is_base_rate_mode: false
};
const initialState = {
  dataList: [],
  initDataForList: {
    permissions: {
      currency: null
    },
    base_currency_list: [],
    user_base_currency: {
      id: null,
      description: '',
      currency_id: ''
    },
    wiki_page: '',
    column_tooltips: {}
  },
  initDataForCE: {
    multiplier_options: [],
    round_to_options: [],
    base_currency: {
      currency_id: '',
      id: null
    },
    wiki_page: ''
  },
  detail: currencyDetail,
  dialogState: {
    open: false,
    loading: false,
    historyLogs: []
  }
};
const currencySlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setDialogState(state, {
      payload
    }) {
      state.dialogState = _objectSpread(_objectSpread({}, state.dialogState), payload);
    },

    setDialogStateOpen(state, {
      payload
    }) {
      state.dialogState.open = payload;
    },

    setDialogStateLoading(state, {
      payload
    }) {
      state.dialogState.loading = payload;
    },

    setHistoryLogs(state, {
      payload
    }) {
      state.dialogState.historyLogs = payload;
    },

    setDataList(state, {
      payload
    }) {
      state.dataList = payload;
    },

    setInitDataForList(state, {
      payload
    }) {
      state.initDataForList = payload;
    },

    setInitDataForCE(state, {
      payload
    }) {
      state.initDataForCE = payload;
    },

    setDetail(state, {
      payload
    }) {
      state.detail = _objectSpread(_objectSpread({}, state.detail), payload);
    },

    setPermissions(state, {
      payload
    }) {
      state.initDataForList.permissions.currency = payload;
    },

    setUserBaseCurrency(state, {
      payload
    }) {
      state.initDataForList.user_base_currency = payload;
    },

    resetDetail(state) {
      state.detail = _objectSpread({}, currencyDetail);
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
});
const {
  actions
} = currencySlice; // Saga actions

const sagaGetList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_LIST}`);
const sagaOpenCreateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_CREATE_DIALOG}`);
const sagaOpenUpdateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_UPDATE_DIALOG}`);
const sagaCloseDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CLOSE_DIALOG}`);
const sagaCreate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CREATE}`);
const sagaUpdate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].UPDATE}`);
const sagaChangeUserCurrency = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/CHANGE_USER_CURRENCY`);
const selectState = state => state[name];
const selectDataList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dataList);
const selectInitDataForList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList);
const selectDialogState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dialogState);
const selectInitDataForCE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForCE);
const selectDetail = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.detail);
const selectPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList.permissions.currency);
const selectUserBaseCurrency = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList.user_base_currency);
/* harmony default export */ __webpack_exports__["default"] = (currencySlice);

/***/ }),

/***/ "./src/store/reducers/drawing.reducer.ts":
/*!***********************************************!*\
  !*** ./src/store/reducers/drawing.reducer.ts ***!
  \***********************************************/
/*! exports provided: name, resetState, initialState, actions, sagaGetList, sagaOpenCreateDialog, sagaOpenUpdateDialog, sagaOpenCreatePartDialog, sagaChangeUserJob, sagaCloseDialog, sagaCreate, sagaUpdate, sagaOpenRevDialog, sagaSaveNewRev, selectDialogState, selectDataList, selectPermissions, selectDrawingGroups, selectDetail, selectInitDataForList, selectInitDataForCE, selectParameters, selectDrawingGroupId, selectRevisionDialog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetList", function() { return sagaGetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenCreateDialog", function() { return sagaOpenCreateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenUpdateDialog", function() { return sagaOpenUpdateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenCreatePartDialog", function() { return sagaOpenCreatePartDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaChangeUserJob", function() { return sagaChangeUserJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCloseDialog", function() { return sagaCloseDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCreate", function() { return sagaCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaUpdate", function() { return sagaUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenRevDialog", function() { return sagaOpenRevDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaSaveNewRev", function() { return sagaSaveNewRev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDialogState", function() { return selectDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDataList", function() { return selectDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDrawingGroups", function() { return selectDrawingGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDetail", function() { return selectDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForList", function() { return selectInitDataForList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForCE", function() { return selectInitDataForCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectParameters", function() { return selectParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDrawingGroupId", function() { return selectDrawingGroupId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRevisionDialog", function() { return selectRevisionDialog; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");
/* harmony import */ var _utils_getDefaultValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/getDefaultValues */ "./src/utils/getDefaultValues.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const name = 'drawing';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].RESET_STATE}`);
const initialState = {
  drawingGroupId: -1,
  dataList: [],
  detail: {
    job_id: null,
    drawing_id: '',
    revision: 'A',
    drawing_format: null,
    drawing_purpose: null,
    file_prefix: null,
    file_type: null,
    associated_documents: [],
    customer_id: '',
    additional_attributes: {},
    descriptions: [],
    exclude_from_customer: false,
    exclude_from_other: false,
    exclude_from_supplier: false,
    item_list: [],
    tag_list: [],
    is_detail_drawing: false,
    is_drawing: true,
    is_other_document: false,
    is_schematic: false,
    is_specification: false
  },
  dialogState: {
    open: false,
    loading: false,
    tab: 0,
    historyLogs: []
  },
  initDataForList: {
    drawing_groups: [{
      description: 'All',
      group_id: null,
      children: []
    }],
    jobs: [],
    permissions: {
      drawing: null
    },
    parameters: {
      PLLA: []
    },
    wiki_page: '',
    column_tooltips: {}
  },
  initDataForCE: {
    parameters: {
      DWAT: [],
      DWPU: [],
      // drawing purpose
      FPRE: [],
      // file name prefix
      FTYP: [],
      // file type
      PLFO: [],
      // format
      PLLA: [],
      // descriptions
      PLAT: [] // extended properties

    },
    wiki_page: ''
  },
  revisionDialog: {
    open: false,
    loading: false,
    detail: {
      new_revision: '',
      reason: '',
      description: ''
    }
  }
};
const drawing = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setDataList(state, {
      payload
    }) {
      state.dataList = payload;
    },

    setDialogState(state, {
      payload
    }) {
      state.dialogState = _objectSpread(_objectSpread({}, state.dialogState), payload);
    },

    setDialogStateOpen(state, {
      payload
    }) {
      state.dialogState.open = payload;
    },

    setDialogStateLoading(state, {
      payload
    }) {
      state.dialogState.loading = payload;
    },

    setDialogStateTab(state, {
      payload
    }) {
      state.dialogState.tab = payload;
    },

    setInitDataForList(state, {
      payload
    }) {
      state.initDataForList = payload;
    },

    setPermissions(state, {
      payload
    }) {
      state.initDataForList.permissions.drawing = payload;
    },

    setInitDataForCE(state, {
      payload
    }) {
      state.initDataForCE = payload;
    },

    setHistoryLogs(state, {
      payload
    }) {
      state.dialogState.historyLogs = payload;
    },

    setDetail(state, {
      payload
    }) {
      state.detail = _objectSpread(_objectSpread({}, state.detail), payload);
    },

    setDrawingGroupId(state, {
      payload
    }) {
      state.drawingGroupId = payload;
    },

    resetDetail(state, {
      payload: {
        userJob
      }
    }) {
      const detailDefaultValue = Object(_utils_getDefaultValues__WEBPACK_IMPORTED_MODULE_2__["getDefaultValues"])(state.initDataForCE.parameters, {
        drawing_purpose: 'DWPU',
        file_prefix: 'FPRE',
        file_type: 'FTYP',
        drawing_format: 'PLFO'
      }, initialState.detail);
      detailDefaultValue.job_id = userJob.value > -1 ? userJob.value : null;
      state.detail = _objectSpread({}, detailDefaultValue);
      state.dialogState.tab = 0;
    },

    setRevisionDialogOpen(state, {
      payload
    }) {
      state.revisionDialog.open = payload;
    },

    setRevisionDialogLoading(state, {
      payload
    }) {
      state.revisionDialog.loading = payload;
    },

    setRevisionDialogDetail(state, {
      payload
    }) {
      state.revisionDialog.detail = _objectSpread(_objectSpread({}, state.revisionDialog.detail), payload);
    },

    resetRevisionDialogDetail(state) {
      state.revisionDialog.detail = _objectSpread({}, initialState.revisionDialog.detail);
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
}); // Actions

const {
  actions
} = drawing; // Saga actions

const sagaGetList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_LIST}`);
const sagaOpenCreateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_CREATE_DIALOG}`);
const sagaOpenUpdateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_UPDATE_DIALOG}`);
const sagaOpenCreatePartDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/OPEN_CREATE_PART_DIALOG`);
const sagaChangeUserJob = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CHANGE_USER_JOB}`);
const sagaCloseDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CLOSE_DIALOG}`);
const sagaCreate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CREATE}`);
const sagaUpdate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].UPDATE}`);
const sagaOpenRevDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/OPEN_REV_DIALOG`);
const sagaSaveNewRev = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/SAVE_NEW_REV`); // Selectors

const selectState = state => state[name];

const selectDialogState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dialogState);
const selectDataList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dataList);
const selectPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList.permissions.drawing);
const selectDrawingGroups = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, ({
  initDataForList
}) => {
  const {
    drawing_groups
  } = initDataForList;
  return drawing_groups[0];
});
const selectDetail = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, ({
  detail
}) => detail);
const selectInitDataForList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList);
const selectInitDataForCE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, ({
  initDataForCE
}) => initDataForCE);
const selectParameters = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, ({
  initDataForCE
}) => initDataForCE.parameters);
const selectDrawingGroupId = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, ({
  drawingGroupId
}) => drawingGroupId);
const selectRevisionDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.revisionDialog);
/* harmony default export */ __webpack_exports__["default"] = (drawing);

/***/ }),

/***/ "./src/store/reducers/equivalence.reducer.ts":
/*!***************************************************!*\
  !*** ./src/store/reducers/equivalence.reducer.ts ***!
  \***************************************************/
/*! exports provided: name, resetState, dialogState, equivalenceDetail, initialState, actions, sagaGetList, sagaOpenCreateDialog, sagaOpenUpdateDialog, sagaCloseDialog, sagaCreate, sagaUpdate, sagaGetNextCode, selectState, selectEquivalenceType, selectDialogState, selectDataList, selectDetail, selectPermissions, selectInitDataForCE, selectInitDataForList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialogState", function() { return dialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equivalenceDetail", function() { return equivalenceDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetList", function() { return sagaGetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenCreateDialog", function() { return sagaOpenCreateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenUpdateDialog", function() { return sagaOpenUpdateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCloseDialog", function() { return sagaCloseDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCreate", function() { return sagaCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaUpdate", function() { return sagaUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetNextCode", function() { return sagaGetNextCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEquivalenceType", function() { return selectEquivalenceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDialogState", function() { return selectDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDataList", function() { return selectDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDetail", function() { return selectDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForCE", function() { return selectInitDataForCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForList", function() { return selectInitDataForList; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const name = 'equivalence';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].RESET_STATE}`);
const dialogState = {
  open: false,
  loading: false
};
const equivalenceDetail = {
  equiv_id: null,
  description: '',
  equiv_type: null,
  image: '',
  standards: []
};
const initialState = {
  equivalenceType: '',
  dialogState,
  dataList: [],
  initDataForList: {
    permissions: {
      manufacturing_standard: null,
      material_standard: null
    },
    wiki_page: {
      manufacturing_standard: '',
      material_standard: ''
    },
    column_tooltips: {
      manufacturing_standard: {},
      material_standard: {}
    }
  },
  initDataForCE: {
    parameters: {
      PLNO: []
    },
    next_code: 0,
    wiki_page: ''
  },
  detail: equivalenceDetail
};
const equivalenceSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setEquivalenceType(state, {
      payload
    }) {
      state.equivalenceType = payload;
    },

    setDialogState(state, {
      payload
    }) {
      state.dialogState = _objectSpread(_objectSpread({}, state.dialogState), payload);
    },

    setDialogStateOpen(state, {
      payload
    }) {
      state.dialogState.open = payload;
    },

    setDialogStateLoading(state, {
      payload
    }) {
      state.dialogState.loading = payload;
    },

    setDataList(state, {
      payload
    }) {
      state.dataList = payload;
    },

    setDetail(state, {
      payload
    }) {
      state.detail = _objectSpread(_objectSpread({}, state.detail), payload);
    },

    setInitDataForCE(state, {
      payload
    }) {
      state.initDataForCE = payload;
    },

    setInitDataForList(state, {
      payload
    }) {
      state.initDataForList = payload;
    },

    resetDetail(state) {
      state.detail = _objectSpread({}, equivalenceDetail);
    },

    setNextCode(state, {
      payload
    }) {
      state.initDataForCE.next_code = payload;
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
}); // Actions

const {
  actions
} = equivalenceSlice; // Saga actions

const sagaGetList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_LIST}`);
const sagaOpenCreateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_CREATE_DIALOG}`);
const sagaOpenUpdateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_UPDATE_DIALOG}`);
const sagaCloseDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CLOSE_DIALOG}`);
const sagaCreate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CREATE}`);
const sagaUpdate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].UPDATE}`);
const sagaGetNextCode = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_NEXT_CODE}`); // Selector

const selectState = state => state[name];
const selectEquivalenceType = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.equivalenceType);
const selectDialogState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dialogState);
const selectDataList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dataList);
const selectDetail = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.detail);
const selectPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => {
  const {
    initDataForList,
    equivalenceType
  } = state;

  if (!equivalenceType) {
    return null;
  }

  return initDataForList.permissions[equivalenceType];
});
const selectInitDataForCE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForCE);
const selectInitDataForList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList);
/* harmony default export */ __webpack_exports__["default"] = (equivalenceSlice);

/***/ }),

/***/ "./src/store/reducers/exportProcessDialog.ts":
/*!***************************************************!*\
  !*** ./src/store/reducers/exportProcessDialog.ts ***!
  \***************************************************/
/*! exports provided: initialState, setOpen, setMessage, setOperationId, setCeleryId, setStatus, resetInitState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOpen", function() { return setOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMessage", function() { return setMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOperationId", function() { return setOperationId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCeleryId", function() { return setCeleryId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatus", function() { return setStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetInitState", function() { return resetInitState; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  isOpen: false,
  operationId: '',
  message: 'Initializing...',
  status: 'LOADING',
  celeryId: ''
};
const exportProcessDialogReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'exportProcessDialog',
  initialState,
  reducers: {
    setOpen(state, action) {
      state.isOpen = action.payload;
    },

    setMessage(state, action) {
      state.message = action.payload;
    },

    setOperationId(state, action) {
      state.operationId = action.payload;
    },

    setCeleryId(state, action) {
      state.celeryId = action.payload;
    },

    setStatus(state, action) {
      state.status = action.payload;
    },

    resetInitState(state) {
      state.operationId = initialState.operationId;
      state.celeryId = initialState.celeryId;
      state.message = initialState.message;
      state.status = initialState.status;
    }

  }
}); // Actions

const {
  setOpen,
  setMessage,
  setOperationId,
  setCeleryId,
  setStatus,
  resetInitState
} = exportProcessDialogReducer.actions;
/* harmony default export */ __webpack_exports__["default"] = (exportProcessDialogReducer.reducer);

/***/ }),

/***/ "./src/store/reducers/group.reducer.ts":
/*!*********************************************!*\
  !*** ./src/store/reducers/group.reducer.ts ***!
  \*********************************************/
/*! exports provided: name, resetState, actions, sagaGetList, sagaCreate, sagaOpenCreateDialog, sagaOpenUpdateDialog, sagaCloseDialog, sagaUpdate, sagaGetGroupPermissions, sagaUpdateGroupPermissions, selectState, selectDataList, selectPermissions, selectDetail, selectDialogState, selectGroupPermissions, selectInitDataForList, selectInitDataForCE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetList", function() { return sagaGetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCreate", function() { return sagaCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenCreateDialog", function() { return sagaOpenCreateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenUpdateDialog", function() { return sagaOpenUpdateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCloseDialog", function() { return sagaCloseDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaUpdate", function() { return sagaUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetGroupPermissions", function() { return sagaGetGroupPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaUpdateGroupPermissions", function() { return sagaUpdateGroupPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDataList", function() { return selectDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDetail", function() { return selectDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDialogState", function() { return selectDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectGroupPermissions", function() { return selectGroupPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForList", function() { return selectInitDataForList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForCE", function() { return selectInitDataForCE; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const name = 'group';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].RESET_STATE}`);
const initialState = {
  dataList: [],
  detail: {
    description: '',
    group_id: '',
    name: ''
  },
  dialogState: {
    open: false,
    loading: false,
    historyLogs: []
  },
  initDataForList: {
    permissions: {
      group: null
    },
    wiki_page: '',
    column_tooltips: {}
  },
  groupPermissions: {
    groups: [],
    permissions: []
  },
  initDataForCE: {
    wiki_page: ''
  }
};
const groupSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setDataList(state, action) {
      state.dataList = action.payload;
    },

    setDialogState(state, {
      payload
    }) {
      state.dialogState = _objectSpread(_objectSpread({}, state.dialogState), payload);
    },

    setHistoryLogs(state, {
      payload
    }) {
      state.dialogState.historyLogs = payload;
    },

    setDialogStateOpen(state, {
      payload
    }) {
      state.dialogState.open = payload;
    },

    setDialogStateLoading(state, {
      payload
    }) {
      state.dialogState.loading = payload;
    },

    setDetail(state, {
      payload
    }) {
      state.detail = _objectSpread(_objectSpread({}, state.detail), payload);
    },

    setGroupPermissions(state, action) {
      state.groupPermissions.groups = action.payload.groups;
      state.groupPermissions.permissions = action.payload.permissions;
    },

    setInitDataForList(state, {
      payload
    }) {
      state.initDataForList = payload;
    },

    resetDetail(state) {
      state.detail = _objectSpread({}, initialState.detail);
    },

    setInitDataForCE(state, {
      payload
    }) {
      state.initDataForCE = payload;
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
});
const {
  actions
} = groupSlice; // Saga actions

const sagaGetList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_LIST}`);
const sagaCreate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CREATE}`);
const sagaOpenCreateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_CREATE_DIALOG}`);
const sagaOpenUpdateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_UPDATE_DIALOG}`);
const sagaCloseDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CLOSE_DIALOG}`);
const sagaUpdate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].UPDATE}`); // Permissions saga actions

const sagaGetGroupPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/GET_PERMISSIONS`);
const sagaUpdateGroupPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/UPDATE_PERMISSIONS`); // Selector

const selectState = state => state[name];
const selectDataList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dataList);
const selectPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList.permissions.group);
const selectDetail = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.detail);
const selectDialogState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dialogState);
const selectGroupPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, group => group.groupPermissions);
const selectInitDataForList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList);
const selectInitDataForCE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForCE);
/* harmony default export */ __webpack_exports__["default"] = (groupSlice);

/***/ }),

/***/ "./src/store/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/index.ts ***!
  \*************************************/
/*! exports provided: budgetActions, parameterTypeStore, parameterStore, manufacturerStore, drawingStore, authStore, itemStore, groupStore, userStore, locationStore, currencyStore, equivalenceStore, jobStore, assemblyStore, commonStore, specificationStore, partStore, tagStore, summaryReportActions, advancedFilterActions, makeAListActions, exportProcessDialogActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _budget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget */ "./src/store/reducers/budget.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "budgetActions", function() { return _budget__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _parameterType_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameterType.reducer */ "./src/store/reducers/parameterType.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "parameterTypeStore", function() { return _parameterType_reducer__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _parameter_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameter.reducer */ "./src/store/reducers/parameter.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "parameterStore", function() { return _parameter_reducer__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _manufacturer_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manufacturer.reducer */ "./src/store/reducers/manufacturer.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "manufacturerStore", function() { return _manufacturer_reducer__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _drawing_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawing.reducer */ "./src/store/reducers/drawing.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "drawingStore", function() { return _drawing_reducer__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.reducer */ "./src/store/reducers/auth.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "authStore", function() { return _auth_reducer__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _item_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item.reducer */ "./src/store/reducers/item.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "itemStore", function() { return _item_reducer__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _group_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./group.reducer */ "./src/store/reducers/group.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "groupStore", function() { return _group_reducer__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.reducer */ "./src/store/reducers/user.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "userStore", function() { return _user_reducer__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony import */ var _location_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./location.reducer */ "./src/store/reducers/location.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "locationStore", function() { return _location_reducer__WEBPACK_IMPORTED_MODULE_9__; });
/* harmony import */ var _currency_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./currency.reducer */ "./src/store/reducers/currency.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "currencyStore", function() { return _currency_reducer__WEBPACK_IMPORTED_MODULE_10__; });
/* harmony import */ var _equivalence_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./equivalence.reducer */ "./src/store/reducers/equivalence.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "equivalenceStore", function() { return _equivalence_reducer__WEBPACK_IMPORTED_MODULE_11__; });
/* harmony import */ var _job_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./job.reducer */ "./src/store/reducers/job.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "jobStore", function() { return _job_reducer__WEBPACK_IMPORTED_MODULE_12__; });
/* harmony import */ var _assembly_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assembly.reducer */ "./src/store/reducers/assembly.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "assemblyStore", function() { return _assembly_reducer__WEBPACK_IMPORTED_MODULE_13__; });
/* harmony import */ var _common_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common.reducer */ "./src/store/reducers/common.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "commonStore", function() { return _common_reducer__WEBPACK_IMPORTED_MODULE_14__; });
/* harmony import */ var _specification_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./specification.reducer */ "./src/store/reducers/specification.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "specificationStore", function() { return _specification_reducer__WEBPACK_IMPORTED_MODULE_15__; });
/* harmony import */ var _part_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./part.reducer */ "./src/store/reducers/part.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "partStore", function() { return _part_reducer__WEBPACK_IMPORTED_MODULE_16__; });
/* harmony import */ var _tag_reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tag.reducer */ "./src/store/reducers/tag.reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "tagStore", function() { return _tag_reducer__WEBPACK_IMPORTED_MODULE_17__; });
/* harmony import */ var _summaryReport__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./summaryReport */ "./src/store/reducers/summaryReport.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "summaryReportActions", function() { return _summaryReport__WEBPACK_IMPORTED_MODULE_18__; });
/* harmony import */ var _advancedFilter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./advancedFilter */ "./src/store/reducers/advancedFilter.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "advancedFilterActions", function() { return _advancedFilter__WEBPACK_IMPORTED_MODULE_19__; });
/* harmony import */ var _makeAList__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./makeAList */ "./src/store/reducers/makeAList.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "makeAListActions", function() { return _makeAList__WEBPACK_IMPORTED_MODULE_20__; });
/* harmony import */ var _exportProcessDialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./exportProcessDialog */ "./src/store/reducers/exportProcessDialog.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "exportProcessDialogActions", function() { return _exportProcessDialog__WEBPACK_IMPORTED_MODULE_21__; });













































/***/ }),

/***/ "./src/store/reducers/item.reducer.ts":
/*!********************************************!*\
  !*** ./src/store/reducers/item.reducer.ts ***!
  \********************************************/
/*! exports provided: name, resetState, initialState, actions, sagaGetList, sagaChangeUserJob, sagaRemove, sagaChangeUserDrawing, selectDataList, selectPermissions, selectInitDataForList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetList", function() { return sagaGetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaChangeUserJob", function() { return sagaChangeUserJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaRemove", function() { return sagaRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaChangeUserDrawing", function() { return sagaChangeUserDrawing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDataList", function() { return selectDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForList", function() { return selectInitDataForList; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");


const name = 'item';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].RESET_STATE}`);
const initialState = {
  dataList: [],
  initDataForList: {
    permissions: {
      item: null
    },
    jobs: [],
    wiki_page: '',
    column_tooltips: {}
  }
};
const itemSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setDataList(state, {
      payload
    }) {
      state.dataList = payload;
    },

    setInitDataForList(state, {
      payload
    }) {
      state.initDataForList = payload;
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
}); // Actions

const {
  actions
} = itemSlice; // Saga actions

const sagaGetList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_LIST}`);
const sagaChangeUserJob = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CHANGE_USER_JOB}`);
const sagaRemove = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].REMOVE}`);
const sagaChangeUserDrawing = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CHANGE_USER_DRAWING}`); // selector

const selectState = state => state[name];

const selectDataList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dataList);
const selectPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList.permissions.item);
const selectInitDataForList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList);
/* harmony default export */ __webpack_exports__["default"] = (itemSlice);

/***/ }),

/***/ "./src/store/reducers/job.reducer.ts":
/*!*******************************************!*\
  !*** ./src/store/reducers/job.reducer.ts ***!
  \*******************************************/
/*! exports provided: name, resetState, transferListState, jobDetail, initialState, actions, sagaGetList, sagaOpenCreateDialog, sagaOpenUpdateDialog, sagaCloseDialog, sagaCreate, sagaUpdate, sagaGetUserGroupMapping, selectState, selectDataList, selectJobCategories, selectPermissions, selectDialogState, selectInitDataForCE, selectTransferListState, selectDetail, selectKeyMapping, selectSelectedJobCategory, selectInitDataForList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferListState", function() { return transferListState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobDetail", function() { return jobDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetList", function() { return sagaGetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenCreateDialog", function() { return sagaOpenCreateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenUpdateDialog", function() { return sagaOpenUpdateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCloseDialog", function() { return sagaCloseDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCreate", function() { return sagaCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaUpdate", function() { return sagaUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetUserGroupMapping", function() { return sagaGetUserGroupMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDataList", function() { return selectDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectJobCategories", function() { return selectJobCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDialogState", function() { return selectDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForCE", function() { return selectInitDataForCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTransferListState", function() { return selectTransferListState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDetail", function() { return selectDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectKeyMapping", function() { return selectKeyMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSelectedJobCategory", function() { return selectSelectedJobCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForList", function() { return selectInitDataForList; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const name = 'job';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].RESET_STATE}`);
const transferListState = {
  userAvailableList: [],
  userGroup: [],
  open: false
};
const jobDetail = {
  job_id: '',
  equipment_type: null,
  language: null,
  erection_site: null,
  job_standard: [],
  people_responsible: [],
  squad_leader: [],
  drawings_responsible: [],
  contract_no: '',
  contract_desc: '',
  credit_letter: '',
  logo: null,
  additional_attributes: {},
  job_currencies: [],
  job_descriptions: [],
  job_users: [],
  job_expediting_dates: []
};
const initialState = {
  dataList: [],
  dialogState: {
    open: false,
    loading: false,
    historyLogs: []
  },
  selectedJobCategory: {
    description: '',
    id: null,
    parameter_id: ''
  },
  initDataForList: {
    job_categories: [],
    permissions: {
      job: null
    },
    wiki_page: '',
    column_tooltips: {}
  },
  initDataForCE: {
    currencies: [],
    group_map: {
      job_all: '',
      job_drawing: '',
      job_responsible: '',
      job_squad_leader: ''
    },
    erection_sites: [],
    parameters: {
      EQTY: [],
      JOAT: [],
      PLLA: [],
      PLNO: []
    },
    tooltip: '<span></span>',
    job_template: jobDetail,
    wiki_page: ''
  },
  transferListState,
  keyMapping: null,
  detail: jobDetail
};
const jobSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setDataList(state, {
      payload
    }) {
      state.dataList = payload;
    },

    setDialogState(state, {
      payload
    }) {
      state.dialogState = _objectSpread(_objectSpread({}, state.dialogState), payload);
    },

    setHistoryLogs(state, {
      payload
    }) {
      state.dialogState.historyLogs = payload;
    },

    setDialogStateOpen(state, {
      payload
    }) {
      state.dialogState.open = payload;
    },

    setDialogStateLoading(state, {
      payload
    }) {
      state.dialogState.loading = payload;
    },

    setInitDataForList(state, {
      payload
    }) {
      state.initDataForList = payload;
    },

    setInitDataForCE(state, {
      payload
    }) {
      state.initDataForCE = payload;
    },

    setOpenTransferList(state, {
      payload
    }) {
      state.transferListState.open = payload;
    },

    setTransferUserAvailableList(state, {
      payload
    }) {
      state.transferListState.userAvailableList = payload;
    },

    setTransferListUserGroup(state, {
      payload
    }) {
      state.transferListState.userGroup = payload;
    },

    setDetail(state, {
      payload
    }) {
      state.detail = _objectSpread(_objectSpread({}, state.detail), payload);
    },

    setSelectedCategory(state, {
      payload
    }) {
      state.selectedJobCategory = payload;
    },

    setKeyMapping(state, {
      payload
    }) {
      state.keyMapping = payload;
    },

    closeTransferList(state) {
      state.transferListState = _objectSpread(_objectSpread({}, transferListState), {}, {
        userGroup: state.transferListState.userGroup
      });
    },

    setPermissions(state, {
      payload
    }) {
      state.initDataForList.permissions.job = payload;
    },

    resetDetail(state) {
      const jobStandard = state.initDataForCE.parameters.PLNO.map(item => lodash__WEBPACK_IMPORTED_MODULE_1___default.a.pick(item, ['description', 'parameter_id', 'id']));
      state.detail = _objectSpread(_objectSpread({}, jobDetail), {}, {
        job_standard: jobStandard
      });
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
}); // Actions

const {
  actions
} = jobSlice; // Saga actions

const sagaGetList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].GET_LIST}`);
const sagaOpenCreateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].OPEN_CREATE_DIALOG}`);
const sagaOpenUpdateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].OPEN_UPDATE_DIALOG}`);
const sagaCloseDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].CLOSE_DIALOG}`);
const sagaCreate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].CREATE}`);
const sagaUpdate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].UPDATE}`);
const sagaGetUserGroupMapping = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/GET_USER_GROUP_MAPPING`); // Selector

const selectState = state => state[name];
const selectDataList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dataList);
const selectJobCategories = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList.job_categories);
const selectPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList.permissions.job);
const selectDialogState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dialogState);
const selectInitDataForCE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForCE);
const selectTransferListState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.transferListState);
const selectDetail = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.detail);
const selectKeyMapping = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.keyMapping);
const selectSelectedJobCategory = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.selectedJobCategory);
const selectInitDataForList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList);
/* harmony default export */ __webpack_exports__["default"] = (jobSlice);

/***/ }),

/***/ "./src/store/reducers/location.reducer.ts":
/*!************************************************!*\
  !*** ./src/store/reducers/location.reducer.ts ***!
  \************************************************/
/*! exports provided: name, resetState, initialState, actions, sagaGetList, sagaOpenCreateDialog, sagaOpenUpdateDialog, sagaCreate, sagaUpdate, sagaGetNextCode, sagaCloseDialog, selectState, selectDataList, selectDialogState, selectInitDataForList, selectInitDataForCE, selectDetail, selectPermissions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetList", function() { return sagaGetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenCreateDialog", function() { return sagaOpenCreateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenUpdateDialog", function() { return sagaOpenUpdateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCreate", function() { return sagaCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaUpdate", function() { return sagaUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetNextCode", function() { return sagaGetNextCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCloseDialog", function() { return sagaCloseDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDataList", function() { return selectDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDialogState", function() { return selectDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForList", function() { return selectInitDataForList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForCE", function() { return selectInitDataForCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDetail", function() { return selectDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const name = 'location';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].RESET_STATE}`);
const initialState = {
  dataList: [],
  detail: {
    location_id: '',
    language: null,
    location_type: null,
    name: '',
    office_address1: '',
    office_address2: '',
    office_city: '',
    office_zip: '',
    office_state: '',
    office_country: null,
    office_phone: '',
    office_email: '',
    office_fax: '',
    workshop_address1: '',
    workshop_address2: '',
    workshop_city: '',
    workshop_phone: '',
    workshop_email: '',
    workshop_fax: '',
    comment: '',
    specialties: '',
    remark: '',
    additional_attributes: {}
  },
  dialogState: {
    open: false,
    loading: false,
    editMode: false,
    historyLogs: []
  },
  initDataForList: {
    permissions: {
      location: null
    },
    wiki_page: '',
    column_tooltips: {}
  },
  initDataForCE: {
    parameters: {
      CTRY: [],
      // country
      LOAT: [],
      // extended properties
      PLLA: [],
      // language
      PUCO: [],
      // puco
      SSPE: [],
      // specialties
      TYLO: [] // location type

    },
    next_code: '',
    wiki_page: ''
  }
};
const locationSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setDataList(state, action) {
      state.dataList = action.payload;
    },

    setPermissions(state, {
      payload
    }) {
      state.initDataForList.permissions.location = payload;
    },

    setDialogState(state, {
      payload
    }) {
      state.dialogState = _objectSpread(_objectSpread({}, state.dialogState), payload);
    },

    setHistoryLogs(state, {
      payload
    }) {
      state.dialogState.historyLogs = payload;
    },

    setDialogStateOpen(state, {
      payload
    }) {
      state.dialogState.open = payload;
    },

    setDialogStateLoading(state, {
      payload
    }) {
      state.dialogState.loading = payload;
    },

    setDialogStateEditMode(state, {
      payload
    }) {
      state.dialogState.editMode = payload;
    },

    setDetail(state, {
      payload
    }) {
      state.detail = _objectSpread(_objectSpread({}, state.detail), payload);
    },

    setInitDataForList(state, {
      payload
    }) {
      state.initDataForList = payload;
    },

    setInitDataForCE(state, {
      payload
    }) {
      state.initDataForCE = payload;
    },

    setNextCode(state, {
      payload
    }) {
      state.initDataForCE.next_code = payload;
    },

    resetDetail(state) {
      state.detail = _objectSpread({}, initialState.detail);
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
});
const {
  actions
} = locationSlice;
const sagaGetList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_LIST}`);
const sagaOpenCreateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_CREATE_DIALOG}`);
const sagaOpenUpdateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_UPDATE_DIALOG}`);
const sagaCreate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CREATE}`);
const sagaUpdate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].UPDATE}`);
const sagaGetNextCode = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_GENERATE_CODE}`);
const sagaCloseDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CLOSE_DIALOG}`); // Selectors

const selectState = state => state[name];
const selectDataList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dataList);
const selectDialogState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dialogState);
const selectInitDataForList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList);
const selectInitDataForCE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForCE);
const selectDetail = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.detail);
const selectPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList.permissions.location);
/* harmony default export */ __webpack_exports__["default"] = (locationSlice);

/***/ }),

/***/ "./src/store/reducers/makeAList.ts":
/*!*****************************************!*\
  !*** ./src/store/reducers/makeAList.ts ***!
  \*****************************************/
/*! exports provided: resetState, presetDetail, systemPreset, permissions, initialState, setOpen, setIsEditMode, setPresetDetail, resetPresetDetail, setPresetList, setFilterType, setInitData, setSystemPreset, setPresetDefault, setPermissions, setLoadingTable, setSaveAsForm, setLoadingDialog, setMalForm, open, create, getList, getDetail, getInitData, share, update, remove, clearDefault, exportMakeAList, changeFilterType, saveAs, stopMakeAList, selectIsOpen, selectIsEditMode, selectPresetDetail, selectColumnDisplay, selectWhereConditions, selectSortConditions, selectPresetList, selectPresetDefault, selectSystemPreset, selectFilterType, selectPermissions, selectEntity, selectColumnsData, selectComparatorsData, selectLogicalOperatorsData, selectSortOptionsData, selectLoadingTable, selectLoadingDialog, selectSaveAsForm, selectMalForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "presetDetail", function() { return presetDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemPreset", function() { return systemPreset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permissions", function() { return permissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOpen", function() { return setOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsEditMode", function() { return setIsEditMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPresetDetail", function() { return setPresetDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPresetDetail", function() { return resetPresetDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPresetList", function() { return setPresetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilterType", function() { return setFilterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInitData", function() { return setInitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSystemPreset", function() { return setSystemPreset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPresetDefault", function() { return setPresetDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPermissions", function() { return setPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoadingTable", function() { return setLoadingTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSaveAsForm", function() { return setSaveAsForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoadingDialog", function() { return setLoadingDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMalForm", function() { return setMalForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open", function() { return open; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetail", function() { return getDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitData", function() { return getInitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "share", function() { return share; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearDefault", function() { return clearDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportMakeAList", function() { return exportMakeAList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeFilterType", function() { return changeFilterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAs", function() { return saveAs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopMakeAList", function() { return stopMakeAList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsOpen", function() { return selectIsOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsEditMode", function() { return selectIsEditMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPresetDetail", function() { return selectPresetDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectColumnDisplay", function() { return selectColumnDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectWhereConditions", function() { return selectWhereConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSortConditions", function() { return selectSortConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPresetList", function() { return selectPresetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPresetDefault", function() { return selectPresetDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSystemPreset", function() { return selectSystemPreset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilterType", function() { return selectFilterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntity", function() { return selectEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectColumnsData", function() { return selectColumnsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectComparatorsData", function() { return selectComparatorsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLogicalOperatorsData", function() { return selectLogicalOperatorsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSortOptionsData", function() { return selectSortOptionsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoadingTable", function() { return selectLoadingTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoadingDialog", function() { return selectLoadingDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSaveAsForm", function() { return selectSaveAsForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMalForm", function() { return selectMalForm; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('makeAList/RESET_STATE');
const presetDetail = {
  id: null,
  name: '',
  entity: '',
  description: '',
  is_user_default: false,
  is_shared: false,
  is_system_default: false,
  columns_displayed: [],
  sort_conditions: [],
  where_conditions: {
    conjunction: 'AND',
    type: 'group',
    conditions: []
  },
  ignore_case: false,
  distinct: false,
  created_by: '',
  created_at: '',
  updated_by: '',
  updated_at: ''
};
const systemPreset = {
  id: null,
  name: ''
};
const permissions = {
  update_system_default_presets: false
};
const initialState = {
  isOpen: false,
  isEditMode: false,
  entity: '',
  systemPreset,
  presetDetail,
  presetDefault: presetDetail,
  presetList: [],
  permissions,
  filterType: 'own',
  initData: {
    columns: [],
    comparators: [],
    logicalOperators: [],
    sortOptions: []
  },
  loading: {
    table: false,
    dialog: false
  },
  saveAsForm: {
    open: false,
    clearError: false,
    error: ''
  },
  malForm: {
    clearError: false,
    error: ''
  }
};
const makeAListReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'makeAList',
  initialState,
  reducers: {
    setOpen(state, action) {
      state.isOpen = action.payload;
    },

    setIsEditMode(state, action) {
      state.isEditMode = action.payload;
    },

    setPresetDetail(state, action) {
      state.presetDetail = _objectSpread(_objectSpread({}, state.presetDetail), action.payload);
    },

    resetPresetDetail(state) {
      state.presetDetail = _objectSpread(_objectSpread({}, presetDetail), {}, {
        entity: state.presetDetail.entity
      });
    },

    setPresetList(state, action) {
      state.presetList = action.payload;
    },

    setFilterType(state, action) {
      state.filterType = action.payload;
    },

    setInitData(state, action) {
      state.initData = action.payload;
    },

    setSystemPreset(state, action) {
      state.systemPreset = action.payload;
    },

    setPresetDefault(state, action) {
      state.presetDefault = action.payload;
    },

    setPermissions(state, action) {
      state.permissions = action.payload;
    },

    setLoadingTable(state, action) {
      state.loading.table = action.payload;
    },

    setLoadingDialog(state, action) {
      state.loading.dialog = action.payload;
    },

    setSaveAsForm(state, action) {
      state.saveAsForm = _objectSpread(_objectSpread({}, state.saveAsForm), action.payload);
    },

    setMalForm(state, action) {
      state.malForm = _objectSpread(_objectSpread({}, state.malForm), action.payload);
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
});
const {
  setOpen,
  setIsEditMode,
  setPresetDetail,
  resetPresetDetail,
  setPresetList,
  setFilterType,
  setInitData,
  setSystemPreset,
  setPresetDefault,
  setPermissions,
  setLoadingTable,
  setSaveAsForm,
  setLoadingDialog,
  setMalForm
} = makeAListReducer.actions;
const open = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('makeAList/OPEN');
const create = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('makeAList/CREATE');
const getList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('makeAList/GET_LIST');
const getDetail = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('makeAList/GET_DETAIL');
const getInitData = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('makeAList/GET_INIT_DATA');
const share = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('makeAList/SHARE');
const update = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('makeAList/UPDATE');
const remove = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('makeAList/REMOVE');
const clearDefault = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('makeAList/CLEAR_DEFAULT');
const exportMakeAList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('makeAList/EXPORT');
const changeFilterType = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('makeAList/CHANGE_FILTER_TYPE');
const saveAs = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('makeAList/SAVE_AS');
const stopMakeAList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('makeAList/STOP');
const selectIsOpen = state => state.makeAList.isOpen;
const selectIsEditMode = state => state.makeAList.isEditMode;
const selectPresetDetail = state => state.makeAList.presetDetail;
const selectColumnDisplay = state => state.makeAList.presetDetail.columns_displayed;
const selectWhereConditions = state => state.makeAList.presetDetail.where_conditions;
const selectSortConditions = state => state.makeAList.presetDetail.sort_conditions;
const selectPresetList = state => state.makeAList.presetList;
const selectPresetDefault = state => state.makeAList.presetDefault;
const selectSystemPreset = state => state.makeAList.systemPreset;
const selectFilterType = state => state.makeAList.filterType;
const selectPermissions = state => state.makeAList.permissions;
const selectEntity = state => state.makeAList.entity;
const selectColumnsData = state => state.makeAList.initData.columns;
const selectComparatorsData = state => state.makeAList.initData.comparators;
const selectLogicalOperatorsData = state => state.makeAList.initData.logicalOperators;
const selectSortOptionsData = state => state.makeAList.initData.sortOptions;
const selectLoadingTable = state => state.makeAList.loading.table;
const selectLoadingDialog = state => state.makeAList.loading.dialog;
const selectSaveAsForm = state => state.makeAList.saveAsForm;
const selectMalForm = state => state.makeAList.malForm;
/* harmony default export */ __webpack_exports__["default"] = (makeAListReducer.reducer);

/***/ }),

/***/ "./src/store/reducers/manufacturer.reducer.ts":
/*!****************************************************!*\
  !*** ./src/store/reducers/manufacturer.reducer.ts ***!
  \****************************************************/
/*! exports provided: name, resetState, initialState, actions, sagaGetList, sagaCreate, sagaUpdate, sagaOpenCreateDialog, sagaOpenUpdateDialog, sagaGenerateCode, sagaCloseDialog, selectState, selectDialogState, selectDataList, selectDetail, selectPermissions, selectInitDataForList, selectInitDataForCE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetList", function() { return sagaGetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCreate", function() { return sagaCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaUpdate", function() { return sagaUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenCreateDialog", function() { return sagaOpenCreateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenUpdateDialog", function() { return sagaOpenUpdateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGenerateCode", function() { return sagaGenerateCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCloseDialog", function() { return sagaCloseDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDialogState", function() { return selectDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDataList", function() { return selectDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDetail", function() { return selectDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForList", function() { return selectInitDataForList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForCE", function() { return selectInitDataForCE; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const name = 'manufacturer';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].RESET_STATE}`);
const initialState = {
  dialogState: {
    open: false,
    loading: false
  },
  dataList: [],
  detail: {
    manufacturer_id: null,
    name: ''
  },
  initDataForCE: {
    next_code: null,
    wiki_page: ''
  },
  initDataForList: {
    permissions: {
      manufacturer: null
    },
    wiki_page: '',
    column_tooltips: {}
  }
};
const manufacturer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setDialogState(state, {
      payload
    }) {
      state.dialogState = _objectSpread(_objectSpread({}, state.dialogState), payload);
    },

    setDialogStateOpen(state, {
      payload
    }) {
      state.dialogState.open = payload;
    },

    setDialogStateLoading(state, {
      payload
    }) {
      state.dialogState.loading = payload;
    },

    setDataList(state, {
      payload
    }) {
      state.dataList = payload;
    },

    setDetail(state, {
      payload
    }) {
      state.detail = _objectSpread(_objectSpread({}, state.detail), payload);
    },

    setInitDataForList(state, {
      payload
    }) {
      state.initDataForList = payload;
    },

    setInitDataForCE(state, {
      payload
    }) {
      state.initDataForCE = payload;
    },

    setPermissions(state, {
      payload
    }) {
      state.initDataForList.permissions.manufacturer = payload;
    },

    setNextCode(state, {
      payload
    }) {
      state.initDataForCE.next_code = payload;
    },

    resetDetail(state) {
      state.detail = _objectSpread(_objectSpread({}, initialState.detail), {}, {
        manufacturer_id: state.initDataForCE.next_code
      });
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
}); // Actions

const {
  actions
} = manufacturer; // Saga actions

const sagaGetList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_LIST}`);
const sagaCreate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CREATE}`);
const sagaUpdate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].UPDATE}`);
const sagaOpenCreateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_CREATE_DIALOG}`);
const sagaOpenUpdateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_UPDATE_DIALOG}`);
const sagaGenerateCode = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_GENERATE_CODE}`);
const sagaCloseDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CLOSE_DIALOG}`); // Selectors

const selectState = state => state[name];
const selectDialogState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dialogState);
const selectDataList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dataList);
const selectDetail = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.detail);
const selectPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList.permissions.manufacturer);
const selectInitDataForList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList);
const selectInitDataForCE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForCE);
/* harmony default export */ __webpack_exports__["default"] = (manufacturer);

/***/ }),

/***/ "./src/store/reducers/parameter.reducer.ts":
/*!*************************************************!*\
  !*** ./src/store/reducers/parameter.reducer.ts ***!
  \*************************************************/
/*! exports provided: resetState, actions, extraActions, selectState, selectInitDataForList, selectInitDataForCE, selectDataList, selectDetail, selectDialogState, selectInitParameter, selectPermissions, selectViewPermission, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extraActions", function() { return extraActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForList", function() { return selectInitDataForList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForCE", function() { return selectInitDataForCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDataList", function() { return selectDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDetail", function() { return selectDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDialogState", function() { return selectDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitParameter", function() { return selectInitParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectViewPermission", function() { return selectViewPermission; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_createExtraActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/createExtraActions */ "./src/utils/createExtraActions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const name = 'parameter';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].RESET_STATE}`);
const initialState = {
  dataList: [],
  detail: {
    description: '',
    is_default: false,
    order: null,
    parameter_id: '',
    parameter_type_id: null,
    // get from params in the url
    properties: {},
    descriptions: []
  },
  initDataForList: {
    permissions: {
      application_parameter: null,
      developer_parameter: null,
      simple_parameter: null
    },
    column_tooltips: {}
  },
  initDataForCE: {
    attributes: '',
    categories: [],
    is_multilingual: false,
    param_type_id: null,
    param_type_raw_id: '',
    param_type_specific_config: null,
    parameters: {
      PLLA: []
    }
  },
  dialogState: {
    open: false,
    editMode: false,
    loading: false,
    historyLogs: []
  },
  parameterType: {
    category: null,
    id: null,
    type_id: ''
  }
};
const parameterSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setData(state, {
      payload
    }) {
      state.dataList = payload;
    },

    setInitDataForList(state, {
      payload
    }) {
      state.initDataForList = payload;
    },

    setInitDataForCE(state, {
      payload
    }) {
      state.initDataForCE = payload;
    },

    setDetail(state, {
      payload
    }) {
      state.detail = _objectSpread(_objectSpread({}, state.detail), payload);
    },

    setDialogState(state, {
      payload
    }) {
      state.dialogState = _objectSpread(_objectSpread({}, state.dialogState), payload);
    },

    setDialogStateOpen(state, {
      payload
    }) {
      state.dialogState.open = payload;
    },

    setDialogStateEditMode(state, {
      payload
    }) {
      state.dialogState.editMode = payload;
    },

    setDialogStateLoading(state, {
      payload
    }) {
      state.dialogState.loading = payload;
    },

    setHistoryLogs(state, {
      payload
    }) {
      state.dialogState.historyLogs = payload;
    },

    setParameterType(state, {
      payload
    }) {
      state.parameterType = payload;
    },

    setPermissions(state, {
      payload
    }) {
      state.initDataForList.permissions = payload;
    },

    resetLocationDetail(state) {
      state.detail = _objectSpread(_objectSpread({}, initialState.detail), {}, {
        parameter_type_id: state.detail.parameter_type_id
      });
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
}); // Actions

const {
  actions
} = parameterSlice; // Extra actions

const extraActions = Object(_utils_createExtraActions__WEBPACK_IMPORTED_MODULE_3__["default"])(name, {
  getList: _utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_LIST,
  create: _utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CREATE,
  update: _utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].UPDATE,
  executeOperation: _utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].EXECUTE_OPERATION,
  openCreateDialog: _utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_CREATE_DIALOG,
  openUpdateDialog: _utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_UPDATE_DIALOG,
  closeDialog: _utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CLOSE_DIALOG
}); // Selectors

const selectState = state => state[name];
const selectInitDataForList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList);
const selectInitDataForCE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForCE);
const selectDataList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dataList);
const selectDetail = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.detail);
const selectDialogState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dialogState);
const selectInitParameter = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForCE.parameters);
const selectPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => {
  const {
    category
  } = state.parameterType;
  const {
    permissions
  } = state.initDataForList;

  if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isNull(permissions.application_parameter)) {
    return null;
  }

  const getPermissionBaseOnName = name => permissions.application_parameter[name] && category === 2 || permissions.developer_parameter[name] && category === 3 || permissions.simple_parameter[name] && category === 1;

  return {
    view: getPermissionBaseOnName('view'),
    create: getPermissionBaseOnName('create'),
    edit: getPermissionBaseOnName('edit'),
    delete: getPermissionBaseOnName('delete'),
    disable_enable: getPermissionBaseOnName('disable_enable')
  };
});
const selectViewPermission = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, ({
  initDataForList
}) => {
  var _permissions$applicat, _permissions$develope, _permissions$simple_p;

  const {
    permissions
  } = initDataForList;
  return ((_permissions$applicat = permissions.application_parameter) === null || _permissions$applicat === void 0 ? void 0 : _permissions$applicat.view) || ((_permissions$develope = permissions.developer_parameter) === null || _permissions$develope === void 0 ? void 0 : _permissions$develope.view) || ((_permissions$simple_p = permissions.simple_parameter) === null || _permissions$simple_p === void 0 ? void 0 : _permissions$simple_p.view);
});
/* harmony default export */ __webpack_exports__["default"] = (parameterSlice);

/***/ }),

/***/ "./src/store/reducers/parameterType.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/store/reducers/parameterType.reducer.ts ***!
  \*****************************************************/
/*! exports provided: name, resetState, initialState, actions, extraActions, selectDialogState, selectDataList, selectDetail, selectInitDataForList, selectInitDataForCE, selectPermissions, selectEditPermission, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extraActions", function() { return extraActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDialogState", function() { return selectDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDataList", function() { return selectDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDetail", function() { return selectDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForList", function() { return selectInitDataForList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForCE", function() { return selectInitDataForCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEditPermission", function() { return selectEditPermission; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");
/* harmony import */ var _utils_createExtraActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/createExtraActions */ "./src/utils/createExtraActions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const name = 'parameter_type';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].RESET_STATE}`);
const initialState = {
  dataList: [],
  detail: {
    type_id: '',
    category: 1,
    is_multilingual: false,
    description: '',
    attributes: '',
    nbr_default: 0
  },
  dialogState: {
    open: false,
    editMode: false,
    loading: false,
    historyLogs: []
  },
  initDataForList: {
    permissions: {
      application_parameter_type: null,
      developer_parameter_type: null,
      simple_parameter_type: null
    },
    wiki_page: '',
    column_tooltips: {}
  },
  initDataForCE: {
    categories: [],
    wiki_page: ''
  }
};
const parameterTypeSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setDataList(state, {
      payload
    }) {
      state.dataList = payload;
    },

    setDetail(state, {
      payload
    }) {
      state.detail = _objectSpread(_objectSpread({}, state.detail), payload);
    },

    setDialogState(state, {
      payload
    }) {
      state.dialogState = _objectSpread(_objectSpread({}, state.dialogState), payload);
    },

    setHistoryLogs(state, {
      payload
    }) {
      state.dialogState.historyLogs = payload;
    },

    setDialogStateOpen(state, {
      payload
    }) {
      state.dialogState.open = payload;
    },

    setDialogStateEditMode(state, {
      payload
    }) {
      state.dialogState.editMode = payload;
    },

    setDialogStateLoading(state, {
      payload
    }) {
      state.dialogState.loading = payload;
    },

    setInitDataForList(state, {
      payload
    }) {
      state.initDataForList = payload;
    },

    setInitDataForCE(state, {
      payload
    }) {
      state.initDataForCE = payload;
    },

    setPermissions(state, {
      payload
    }) {
      state.initDataForList.permissions = payload;
    },

    resetDetail(state) {
      state.detail = _objectSpread({}, initialState.detail);
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
});
const {
  actions
} = parameterTypeSlice;
const extraActions = Object(_utils_createExtraActions__WEBPACK_IMPORTED_MODULE_3__["default"])(name, {
  getList: _utils_constant__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].GET_LIST,
  create: _utils_constant__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].CREATE,
  update: _utils_constant__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].UPDATE,
  openUpdateDialog: _utils_constant__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].OPEN_UPDATE_DIALOG,
  openCreateDialog: _utils_constant__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].OPEN_CREATE_DIALOG,
  executeOperation: _utils_constant__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].EXECUTE_OPERATION,
  closeDialog: _utils_constant__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].CLOSE_DIALOG
});

const selectState = state => state[name];

const selectDialogState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, ({
  dialogState
}) => dialogState);
const selectDataList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, ({
  dataList
}) => dataList);
const selectDetail = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, ({
  detail
}) => detail);
const selectInitDataForList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, ({
  initDataForList
}) => initDataForList);
const selectInitDataForCE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, ({
  initDataForCE
}) => initDataForCE);
const selectPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, ({
  initDataForList
}) => {
  const {
    permissions
  } = initDataForList;

  if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isNull(permissions.application_parameter_type)) {
    return null;
  }

  const getPermissionBaseOnName = name => permissions.application_parameter_type[name] || permissions.developer_parameter_type[name] || permissions.simple_parameter_type[name];

  return {
    view: getPermissionBaseOnName('view'),
    create: getPermissionBaseOnName('create'),
    disable_enable: getPermissionBaseOnName('disable_enable'),
    delete: getPermissionBaseOnName('delete')
  };
});
const selectEditPermission = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, ({
  initDataForList,
  detail
}) => {
  const {
    permissions
  } = initDataForList;
  const {
    category
  } = detail;

  if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isNull(permissions.application_parameter_type)) {
    return false;
  }

  return category === 1 && permissions.simple_parameter_type.edit || category === 2 && permissions.application_parameter_type.edit || category === 3 && permissions.developer_parameter_type.edit;
});
/* harmony default export */ __webpack_exports__["default"] = (parameterTypeSlice);

/***/ }),

/***/ "./src/store/reducers/part.reducer.ts":
/*!********************************************!*\
  !*** ./src/store/reducers/part.reducer.ts ***!
  \********************************************/
/*! exports provided: name, itemDetail, assemblyDetail, initialState, actions, sagaCreate, sagaCloseDialog, sagaOpenCreateDialog, sagaGetItemCopy, sagaOpenUpdateDialog, sagaGetDrawingItems, sagaOpenManuDialog, sagaCreateManu, sagaCloseManuDialog, sagaGetManuId, selectState, selectPartList, selectParameters, selectCurrentPart, selectConfirmRef, selectPartManu, selectDrawingItems, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemDetail", function() { return itemDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assemblyDetail", function() { return assemblyDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCreate", function() { return sagaCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCloseDialog", function() { return sagaCloseDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenCreateDialog", function() { return sagaOpenCreateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetItemCopy", function() { return sagaGetItemCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenUpdateDialog", function() { return sagaOpenUpdateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetDrawingItems", function() { return sagaGetDrawingItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenManuDialog", function() { return sagaOpenManuDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCreateManu", function() { return sagaCreateManu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCloseManuDialog", function() { return sagaCloseManuDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetManuId", function() { return sagaGetManuId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPartList", function() { return selectPartList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectParameters", function() { return selectParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentPart", function() { return selectCurrentPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectConfirmRef", function() { return selectConfirmRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPartManu", function() { return selectPartManu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDrawingItems", function() { return selectDrawingItems; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getDefaultValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/getDefaultValues */ "./src/utils/getDefaultValues.ts");
/* harmony import */ var _utils_isAssembly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/isAssembly */ "./src/utils/isAssembly.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/reducers */ "./src/store/reducers/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const name = 'part';
const itemDetail = {
  job_id: null,
  drawing_id: null,
  dpn: '',
  reference_to: null,
  mass: 0,
  unit: null,
  manufacturer_equiv: null,
  manufacturers: [],
  material_equiv: null,
  descriptions: [],
  manufacturer_equiv_standards: [],
  material_equiv_standards: [],
  additional_attributes: {}
};
const assemblyDetail = {
  job_id: null,
  drawing_id: null,
  dpn: '',
  unit: null,
  descriptions: [],
  items: [],
  manufacturers: [],
  is_assembly: true,
  additional_attributes: {},
  drawing_items: []
};
const initialState = {
  partList: [],
  initData: {
    parameters: {
      MAAT: [],
      PLLA: [],
      UNIT: [],
      PAAT: []
    }
  },
  confirmRef: {
    open: false,
    message: ''
  },
  manufacturer: {
    detail: _store_reducers__WEBPACK_IMPORTED_MODULE_5__["manufacturerStore"].initialState.detail,
    dialogState: _store_reducers__WEBPACK_IMPORTED_MODULE_5__["manufacturerStore"].initialState.dialogState,
    initData: _objectSpread(_objectSpread({}, _store_reducers__WEBPACK_IMPORTED_MODULE_5__["manufacturerStore"].initialState.initDataForCE), {}, {
      permissions: null
    })
  }
};
const partSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    addPart(state, {
      payload
    }) {
      const part = _objectSpread(_objectSpread({}, payload), {}, {
        loading: false,
        tab: 0,
        historyLogs: []
      });

      state.partList.push(part);
    },

    setInitData(state, {
      payload
    }) {
      state.initData = payload;
    },

    setHistoryLogs(state, {
      payload
    }) {
      const {
        length
      } = state.partList;

      if (length > 0) {
        state.partList[length - 1].historyLogs = payload;
      }
    },

    setPartLoading(state, {
      payload
    }) {
      const currentPart = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.last(state.partList);

      const {
        length
      } = state.partList;

      if (length <= 0) {
        return;
      }

      if (currentPart.loading !== payload) {
        state.partList[length - 1].loading = payload;
      }
    },

    updateCurrentPart(state, {
      payload
    }) {
      const {
        length
      } = state.partList;
      state.partList[length - 1].detail = _objectSpread(_objectSpread({}, state.partList[length - 1].detail), payload);
    },

    setConfirmRef(state, {
      payload
    }) {
      state.confirmRef.open = payload.open;
      state.confirmRef.message = payload.message;
    },

    setConfirmRefOpen(state, {
      payload
    }) {
      state.confirmRef.open = payload;
    },

    resetCurrentPart(state, {
      payload
    }) {
      const {
        length
      } = state.partList;
      const {
        userJob,
        userDrawing,
        generateCode
      } = payload;
      const currentPart = state.partList[length - 1].detail;
      const initDetail = Object(_utils_isAssembly__WEBPACK_IMPORTED_MODULE_4__["default"])(currentPart) ? assemblyDetail : itemDetail;
      const defaultValues = Object(_utils_getDefaultValues__WEBPACK_IMPORTED_MODULE_3__["getDefaultValues"])(state.initData.parameters, {
        unit: 'UNIT'
      }, initDetail);
      defaultValues.job_id = userJob.value;
      defaultValues.drawing_id = userDrawing.value === -1 ? null : userDrawing;

      if (generateCode) {
        defaultValues.dpn = generateCode;
      }

      state.partList[length - 1].detail = defaultValues;
    },

    removePart(state) {
      state.partList.pop();
    },

    setPartTab(state, {
      payload
    }) {
      const currentPart = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.last(state.partList);

      const {
        length
      } = state.partList;

      if (length <= 0) {
        return;
      }

      if (currentPart.tab !== payload) {
        state.partList[length - 1].tab = payload;
      }
    },

    // Manufacturer
    setManuDetail(state, {
      payload
    }) {
      state.manufacturer.detail = _objectSpread(_objectSpread({}, state.manufacturer.detail), payload);
    },

    setManuDialogOpen(state, {
      payload
    }) {
      state.manufacturer.dialogState.open = payload;
    },

    setManuDialogLoading(state, {
      payload
    }) {
      state.manufacturer.dialogState.loading = payload;
    },

    setManuInitData(state, {
      payload
    }) {
      state.manufacturer.initData = payload;
    },

    addManufacturer(state, {
      payload
    }) {
      const {
        length
      } = state.partList;
      state.partList[length - 1].detail.manufacturers.push(payload);
    },

    setDrawingItems(state, {
      payload
    }) {
      const {
        length
      } = state.partList;

      if (length <= 0) {
        return;
      }

      ;
      state.partList[length - 1].detail.drawing_items = payload;
    }

  }
});
const {
  actions
} = partSlice; // saga actions

const sagaCreate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CREATE}`);
const sagaCloseDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CLOSE_DIALOG}`);
const sagaOpenCreateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_CREATE_DIALOG}`);
const sagaGetItemCopy = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/GET_ITEM_COPY`);
const sagaOpenUpdateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_UPDATE_DIALOG}`);
const sagaGetDrawingItems = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/GET_DRAWING_ITEMS`); // saga actions Manufacturer

const sagaOpenManuDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/OPEN_UPDATE_MANU_DIALOG`);
const sagaCreateManu = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/CREATE_MANU`);
const sagaCloseManuDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/CLOSE_MANU_DIALOG`);
const sagaGetManuId = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/GET_MANU_ID`); // selectors

const selectState = state => state[name];
const selectPartList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.partList);
const selectParameters = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initData.parameters);
const selectCurrentPart = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => lodash__WEBPACK_IMPORTED_MODULE_2___default.a.last(state.partList));
const selectConfirmRef = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.confirmRef);
const selectPartManu = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.manufacturer);
const selectDrawingItems = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => {
  const {
    partList
  } = state;

  if (partList.length <= 0) {
    return [];
  }

  const {
    detail
  } = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.last(partList);

  return detail.drawing_items || [];
});
/* harmony default export */ __webpack_exports__["default"] = (partSlice);

/***/ }),

/***/ "./src/store/reducers/specification.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/store/reducers/specification.reducer.ts ***!
  \*****************************************************/
/*! exports provided: name, resetState, specificationDetail, actions, sagaGetList, sagaOpenCreateDialog, sagaOpenUpdateDialog, sagaCloseDialog, sagaChangeUserJob, sagaChangeUserDrawing, sagaGenerateCode, sagaRemove, sagaUpdate, sagaCreate, sagaOpenDrawingDialog, selectState, selectInitDataForList, selectInitDataForCE, selectPermissions, selectDialogState, selectParameters, selectDetail, selectDataList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specificationDetail", function() { return specificationDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetList", function() { return sagaGetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenCreateDialog", function() { return sagaOpenCreateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenUpdateDialog", function() { return sagaOpenUpdateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCloseDialog", function() { return sagaCloseDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaChangeUserJob", function() { return sagaChangeUserJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaChangeUserDrawing", function() { return sagaChangeUserDrawing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGenerateCode", function() { return sagaGenerateCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaRemove", function() { return sagaRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaUpdate", function() { return sagaUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCreate", function() { return sagaCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenDrawingDialog", function() { return sagaOpenDrawingDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForList", function() { return selectInitDataForList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForCE", function() { return selectInitDataForCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDialogState", function() { return selectDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectParameters", function() { return selectParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDetail", function() { return selectDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDataList", function() { return selectDataList; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const name = 'specification';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].RESET_STATE}`);
const specificationDetail = {
  job_id: null,
  drawing_id: null,
  descriptions: [],
  spec_id: null,
  additional_attributes: {}
};
const initialState = {
  initDataForList: {
    jobs: [],
    permissions: {
      specification: null
    },
    wiki_page: '',
    column_tooltips: {}
  },
  dataList: [],
  dialogState: {
    open: false,
    loading: false,
    tab: 0,
    historyLogs: []
  },
  initDataForCE: {
    parameters: {
      PLLA: [],
      SSAT: []
    },
    wiki_page: ''
  },
  detail: specificationDetail
};
const specificationSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setInitDataForList(state, {
      payload
    }) {
      state.initDataForList = payload;
    },

    setInitDataForCE(state, {
      payload
    }) {
      state.initDataForCE = payload;
    },

    setDataList(state, {
      payload
    }) {
      state.dataList = payload;
    },

    setHistoryLogs(state, {
      payload
    }) {
      state.dialogState.historyLogs = payload;
    },

    setDialogState(state, {
      payload
    }) {
      state.dialogState = _objectSpread(_objectSpread({}, state.dialogState), payload);
    },

    setDialogStateOpen(state, {
      payload
    }) {
      state.dialogState.open = payload;
    },

    setDialogStateLoading(state, {
      payload
    }) {
      state.dialogState.loading = payload;
    },

    setDetail(state, {
      payload
    }) {
      state.detail = _objectSpread(_objectSpread({}, state.detail), payload);
    },

    resetDetail(state, {
      payload
    }) {
      const {
        userJob
      } = payload;
      state.detail = _objectSpread(_objectSpread({}, initialState.detail), {}, {
        job_id: userJob.value
      });
    },

    setDialogStateTab(state, {
      payload
    }) {
      state.dialogState.tab = payload;
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
});
const {
  actions
} = specificationSlice; // Saga actions

const sagaGetList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_LIST}`);
const sagaOpenCreateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_CREATE_DIALOG}`);
const sagaOpenUpdateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].OPEN_UPDATE_DIALOG}`);
const sagaCloseDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CLOSE_DIALOG}`);
const sagaChangeUserJob = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CHANGE_USER_JOB}`);
const sagaChangeUserDrawing = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CHANGE_USER_DRAWING}`);
const sagaGenerateCode = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_GENERATE_CODE}`);
const sagaRemove = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].REMOVE}`);
const sagaUpdate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].UPDATE}`);
const sagaCreate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CREATE}`);
const sagaOpenDrawingDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/OPEN_DRAWING_DIALOG`); // Selectors

const selectState = state => state[name];
const selectInitDataForList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList);
const selectInitDataForCE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForCE);
const selectPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList.permissions.specification);
const selectDialogState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dialogState);
const selectParameters = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, ({
  initDataForCE
}) => initDataForCE.parameters);
const selectDetail = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.detail);
const selectDataList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dataList);
/* harmony default export */ __webpack_exports__["default"] = (specificationSlice);

/***/ }),

/***/ "./src/store/reducers/summaryReport.ts":
/*!*********************************************!*\
  !*** ./src/store/reducers/summaryReport.ts ***!
  \*********************************************/
/*! exports provided: name, initialState, setOpen, setReportData, selectState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOpen", function() { return setOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReportData", function() { return setReportData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const name = 'summaryReport';
const initialState = {
  open: false,
  title: 'Summary report',
  numberOfSuccess: 0,
  numberOfFailed: 0,
  failedReasons: []
};
const summaryReport = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setOpen(state, {
      payload
    }) {
      state.open = payload;
    },

    setReportData(state, {
      payload
    }) {
      state.open = false;
      state.numberOfFailed = payload.failed_count;
      state.numberOfSuccess = payload.success_count;
      state.failedReasons = payload.failed_reasons;
    }

  }
}); // Actions

const {
  setOpen,
  setReportData
} = summaryReport.actions; // Selectors

const selectState = state => state.summaryReport;
/* harmony default export */ __webpack_exports__["default"] = (summaryReport.reducer);

/***/ }),

/***/ "./src/store/reducers/tag.reducer.ts":
/*!*******************************************!*\
  !*** ./src/store/reducers/tag.reducer.ts ***!
  \*******************************************/
/*! exports provided: name, resetState, initialState, actions, sagaGetList, sagaOpenCreateDialog, sagaOpenUpdateDialog, sagaChangeUserJob, sagaChangeUserSchematic, sagaRemove, sagaChangeUserDrawing, selectState, selectInitDataForList, selectPermissions, selectSpecification, selectDataList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetList", function() { return sagaGetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenCreateDialog", function() { return sagaOpenCreateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenUpdateDialog", function() { return sagaOpenUpdateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaChangeUserJob", function() { return sagaChangeUserJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaChangeUserSchematic", function() { return sagaChangeUserSchematic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaRemove", function() { return sagaRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaChangeUserDrawing", function() { return sagaChangeUserDrawing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForList", function() { return selectInitDataForList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSpecification", function() { return selectSpecification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDataList", function() { return selectDataList; });
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);


const name = 'element';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].RESET_STATE}`);
const initialState = {
  initDataForList: {
    jobs: [],
    permissions: {
      element: null
    },
    wiki_page: '',
    column_tooltips: {}
  },
  dataList: []
};
const tagSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createSlice"])({
  name,
  initialState,
  reducers: {
    setInitDataForList(state, {
      payload
    }) {
      state.initDataForList = payload;
    },

    setDataList(state, {
      payload
    }) {
      state.dataList = payload;
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
});
const {
  actions
} = tagSlice; // Saga actions

const sagaGetList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_LIST}`);
const sagaOpenCreateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].OPEN_CREATE_DIALOG}`);
const sagaOpenUpdateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].OPEN_UPDATE_DIALOG}`);
const sagaChangeUserJob = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CHANGE_USER_JOB}`);
const sagaChangeUserSchematic = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createAction"])(`${name}/CHANGE_USER_SCHEMATIC`);
const sagaRemove = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].REMOVE}`);
const sagaChangeUserDrawing = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CHANGE_USER_DRAWING}`); // Selectors

const selectState = state => state[name];
const selectInitDataForList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, state => state.initDataForList);
const selectPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, state => state.initDataForList.permissions.element);
const selectSpecification = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, state => state.initDataForList.permissions.element);
const selectDataList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, state => state.dataList);
/* harmony default export */ __webpack_exports__["default"] = (tagSlice);

/***/ }),

/***/ "./src/store/reducers/user.reducer.ts":
/*!********************************************!*\
  !*** ./src/store/reducers/user.reducer.ts ***!
  \********************************************/
/*! exports provided: name, resetState, actions, sagaGetList, sagaCreate, sagaUpdate, sagaOpenCreateDialog, sagaOpenUpdateDialog, sagaCloseDialog, sagaResetPassword, selectState, selectDialogState, selectDataList, selectPermissions, selectResetPwdDialog, selectDetail, selectInitDataForCE, selectInitDataForList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaGetList", function() { return sagaGetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCreate", function() { return sagaCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaUpdate", function() { return sagaUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenCreateDialog", function() { return sagaOpenCreateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaOpenUpdateDialog", function() { return sagaOpenUpdateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaCloseDialog", function() { return sagaCloseDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaResetPassword", function() { return sagaResetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDialogState", function() { return selectDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDataList", function() { return selectDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPermissions", function() { return selectPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectResetPwdDialog", function() { return selectResetPwdDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDetail", function() { return selectDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForCE", function() { return selectInitDataForCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitDataForList", function() { return selectInitDataForList; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_getDefaultValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/getDefaultValues */ "./src/utils/getDefaultValues.ts");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/constant */ "./src/utils/constant.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const name = 'user';
const resetState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].RESET_STATE}`);
const initialState = {
  dataList: [],
  initDataForList: {
    permissions: {
      user: null
    },
    wiki_page: '',
    column_tooltips: {}
  },
  initDataForCE: {
    groups: [],
    jobs: [],
    parameters: {
      PLLA: [],
      PUCO: []
    },
    wiki_page: '',
    timezones: []
  },
  dialogState: {
    open: false,
    loading: false,
    historyLogs: []
  },
  resetPwdDialog: {
    open: false,
    loading: false
  },
  detail: {
    user_id: '',
    email: null,
    puco: null,
    first_name: '',
    last_name: '',
    time_zone: '',
    user_abb: '',
    login_page: '',
    valid_from: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(), _utils_constant__WEBPACK_IMPORTED_MODULE_3__["DATE_FORMAT"]),
    default_language: null,
    valid_until: null,
    groups: [],
    job_access: [],
    password: '',
    confirm_password: ''
  }
};
const userSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name,
  initialState,
  reducers: {
    setDataList(state, {
      payload
    }) {
      state.dataList = payload;
    },

    setDialogState(state, {
      payload
    }) {
      state.dialogState = _objectSpread(_objectSpread({}, state.dialogState), payload);
    },

    setDialogStateOpen(state, {
      payload
    }) {
      state.dialogState.open = payload;
    },

    setHistoryLogs(state, {
      payload
    }) {
      state.dialogState.historyLogs = payload;
    },

    setDialogStateLoading(state, {
      payload
    }) {
      state.dialogState.loading = payload;
    },

    setInitDataForList(state, {
      payload
    }) {
      state.initDataForList = payload;
    },

    setPermissions(state, {
      payload
    }) {
      state.initDataForList.permissions.user = payload;
    },

    setInitDataForCE(state, {
      payload
    }) {
      state.initDataForCE = payload;
    },

    setDetail(state, {
      payload
    }) {
      state.detail = _objectSpread(_objectSpread({}, state.detail), payload);
    },

    setResetPwdDialog(state, {
      payload
    }) {
      state.dialogState = _objectSpread(_objectSpread({}, state.dialogState), payload);
    },

    setResetPwdDialogOpen(state, {
      payload
    }) {
      state.resetPwdDialog.open = payload;
    },

    setResetPwdDialogLoading(state, {
      payload
    }) {
      state.resetPwdDialog.loading = payload;
    },

    resetDetail(state) {
      const detailDefaultValue = Object(_utils_getDefaultValues__WEBPACK_IMPORTED_MODULE_2__["getDefaultValues"])(state.initDataForCE, {
        default_language: 'parameters.PLLA',
        puco: 'parameters.PUCO',
        time_zone: 'timezones'
      }, initialState.detail);
      state.detail = _objectSpread({}, detailDefaultValue);
    }

  },
  extraReducers: {
    [resetState.type]() {
      return initialState;
    }

  }
}); // Actions

const {
  actions
} = userSlice; // Saga actions

const sagaGetList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].GET_LIST}`);
const sagaCreate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].CREATE}`);
const sagaUpdate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].UPDATE}`);
const sagaOpenCreateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].OPEN_CREATE_DIALOG}`);
const sagaOpenUpdateDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].OPEN_UPDATE_DIALOG}`);
const sagaCloseDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${_utils_constant__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].CLOSE_DIALOG}`);
const sagaResetPassword = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/RESET_PASSWORD`); // Selectors

const selectState = state => state[name];
const selectDialogState = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dialogState);
const selectDataList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.dataList);
const selectPermissions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList.permissions.user);
const selectResetPwdDialog = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.resetPwdDialog);
const selectDetail = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.detail);
const selectInitDataForCE = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForCE);
const selectInitDataForList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, state => state.initDataForList);
/* harmony default export */ __webpack_exports__["default"] = (userSlice);

/***/ }),

/***/ "./src/styles/page/login.ts":
/*!**********************************!*\
  !*** ./src/styles/page/login.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => {
  return {
    wrapLogin: {
      display: 'flex !important',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    loginTitle: {
      marginTop: theme.spacing(2)
    },
    topIcon: {
      backgroundColor: theme.palette.secondary.main
    },
    loginForm: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'white',
      padding: theme.spacing(3),
      height: '50%',
      borderRadius: 8,
      position: 'relative',
      overflow: 'hidden'
    },
    submitButton: {
      marginTop: theme.spacing(2)
    },
    wrapButton: {
      position: 'relative'
    },
    error: {
      color: theme.palette.error.main,
      marginBottom: theme.spacing(1)
    },
    textField: {
      '&:not(:nth-of-type(2))': {
        margin: theme.spacing(3, 0)
      }
    },
    checkbox: {
      marginTop: theme.spacing(1)
    },
    progress: {
      width: '100%',
      position: 'absolute',
      top: 0
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

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

/***/ "./src/utils/constant.ts":
/*!*******************************!*\
  !*** ./src/utils/constant.ts ***!
  \*******************************/
/*! exports provided: NUMBER_FORMAT, NUMBER_MAX, DATE_FORMAT, REGEX_ALPHA_NUMERIC_ONLY, REGEX_ALPHA_NUMERIC_UNDERSCORE_ONLY, REGEX_SEMICOLON_SEPERATED_ALPHA_NUMERIC_UNDERSCORE_ONLY, REGEX_EMAIL, REGEX_TRIM_SPACE, REGEX_GROUP_ID, REGEX_ONLY_THREE_CAPITAL_LETTER, REGEX_VALID_DATE_EUROPE, REGEX_VALID_DATE_ASIA, PERMISSION_TOPIC_MAP, PERMISSION_MAP, actionTypes, removalProperties, itemMassFormat, budgetAmountFormat, itemQuantityFormat, currencyRateFormat, unsaveDialogOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_FORMAT", function() { return NUMBER_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER_MAX", function() { return NUMBER_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_FORMAT", function() { return DATE_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEX_ALPHA_NUMERIC_ONLY", function() { return REGEX_ALPHA_NUMERIC_ONLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEX_ALPHA_NUMERIC_UNDERSCORE_ONLY", function() { return REGEX_ALPHA_NUMERIC_UNDERSCORE_ONLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEX_SEMICOLON_SEPERATED_ALPHA_NUMERIC_UNDERSCORE_ONLY", function() { return REGEX_SEMICOLON_SEPERATED_ALPHA_NUMERIC_UNDERSCORE_ONLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEX_EMAIL", function() { return REGEX_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEX_TRIM_SPACE", function() { return REGEX_TRIM_SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEX_GROUP_ID", function() { return REGEX_GROUP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEX_ONLY_THREE_CAPITAL_LETTER", function() { return REGEX_ONLY_THREE_CAPITAL_LETTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEX_VALID_DATE_EUROPE", function() { return REGEX_VALID_DATE_EUROPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEX_VALID_DATE_ASIA", function() { return REGEX_VALID_DATE_ASIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERMISSION_TOPIC_MAP", function() { return PERMISSION_TOPIC_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERMISSION_MAP", function() { return PERMISSION_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removalProperties", function() { return removalProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemMassFormat", function() { return itemMassFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "budgetAmountFormat", function() { return budgetAmountFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemQuantityFormat", function() { return itemQuantityFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyRateFormat", function() { return currencyRateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsaveDialogOptions", function() { return unsaveDialogOptions; });
// numeric
const NUMBER_FORMAT = '0.000000';
const NUMBER_MAX = 1000; // date

const DATE_FORMAT = 'yyyy-MM-dd'; // Regex

const REGEX_ALPHA_NUMERIC_ONLY = /^[A-Za-z0-9]*$/;
const REGEX_ALPHA_NUMERIC_UNDERSCORE_ONLY = /^[A-Za-z0-9_]*$/;
const REGEX_SEMICOLON_SEPERATED_ALPHA_NUMERIC_UNDERSCORE_ONLY = /^(?![0-9])[A-Za-z0-9_]+(;(?![0-9])[A-Za-z0-9_]+)*$/;
const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGEX_TRIM_SPACE = /^[^ ][\w\W ]*[^ ]/;
const REGEX_GROUP_ID = /^[a-zA-Z]+$/;
const REGEX_ONLY_THREE_CAPITAL_LETTER = /[a-zA-z]{3}/;
const REGEX_VALID_DATE_EUROPE = // eslint-disable-next-line no-useless-escape
/^(\d{4})?(\-?\b(0?[1-9]|1[0-2])\b)(\-\b(0?[1-9]|1[0-9]|2[0-9]|3[0-1])\b)?$/;
const REGEX_VALID_DATE_ASIA = /^(\b(0?[1-9]|1[0-9]|2[0-9]|3[0-1])\b)((\/|\.)?\b(0?[1-9]|1[0-2]))?((\/|\.)?\d{4})?$/; // Permission maps

const PERMISSION_TOPIC_MAP = {
  application_parameter_type: 'Application Parameter Types',
  developer_parameter_type: 'Developer Parameter Types',
  simple_parameter_type: 'Simple Parameter Types',
  application_parameter: 'Application Parameter Codes',
  developer_parameter: 'Developer Parameter Codes',
  simple_parameter: 'Simple Parameter Codes',
  group: 'Groups',
  job: 'Jobs',
  manufacturing_standard: 'Manufacturing Standards',
  material_standard: 'Material Standards',
  location: 'Locations',
  user: 'Users',
  advanced_filter: 'Advanced Filters',
  make_a_list: 'Make a List',
  currency: 'Currencies',
  budget: 'Budget',
  manufacturer: 'Manufacturers',
  drawing: 'Drawings',
  assembly: 'Assemblies',
  item: 'Items',
  specification: 'Specifications',
  element: 'Elements'
};
const PERMISSION_MAP = {
  view: 'View',
  create: 'Create',
  edit: 'Update',
  delete: 'Delete',
  disable_enable: 'Disable / Enable',
  lock_unlock: 'Lock / Unlock',
  make_a_list: 'Make a List',
  import: 'Import',
  export: 'Export',
  update_system_default_presets: 'Update System Default Presets',
  change_type: 'Change type'
};
const actionTypes = {
  UPDATE_MULTIPLE: 'UPDATE_MULTIPLE',
  AUTH: 'AUTH',
  RESET_STATE: 'RESET_STATE',
  SET_OPEN_DIALOG_STATE: 'SET_OPEN_DIALOG_STATE',
  GET_HISTORY: 'GET_HISTORY',
  GET_LIST: 'GET_LIST',
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  REMOVE: 'REMOVE',
  EXECUTE_OPERATION: 'EXECUTE_OPERATION',
  OPEN_CREATE_DIALOG: 'OPEN_CREATE_DIALOG',
  OPEN_UPDATE_DIALOG: 'OPEN_UPDATE_DIALOG',
  CLOSE_DIALOG: 'CLOSE_DIALOG',
  GET_NEXT_CODE: 'GET_NEXT_CODE',
  CHANGE_USER_JOB: 'CHANGE_USER_JOB',
  CHANGE_USER_DRAWING: 'CHANGE_USER_DRAWING',
  LOGIN: 'LOGIN',
  GET_PROFILE: 'GET_PROFILE',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  GET_GENERATE_CODE: 'GET_GENERATE_CODE',
  LOGOUT: 'LOGOUT',
  GET_PART: 'GET_PART'
};
const removalProperties = ['created_by', 'created_at', 'updated_by', 'updated_at', 'id', 'status', 'full_count'];
const itemMassFormat = {
  precision: 4,
  negativePattern: '0.0000',
  max: 99999999.9999,
  min: 0
};
const budgetAmountFormat = {
  precision: 2,
  negativePattern: '0.00',
  min: 0,
  max: 99999999999
};
const itemQuantityFormat = {
  precision: 2,
  negativePattern: '0.00',
  min: 0,
  max: 99999.99
};
const currencyRateFormat = {
  precision: 6,
  negativePattern: '0.000000',
  max: 1000,
  min: 0.000001
};
const unsaveDialogOptions = {
  description: 'You have edit inline on several cell(s). Do you want to save them?',
  buttons: [{
    label: 'save',
    action: 'save'
  }, {
    label: "Don't save",
    action: ''
  }, {
    label: 'cancel',
    action: 'cancel'
  }]
};

/***/ }),

/***/ "./src/utils/createExtraActions.ts":
/*!*****************************************!*\
  !*** ./src/utils/createExtraActions.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



function createExtraActions(name, actions) {
  const extraActions = {};

  lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forIn(actions, (value, key) => {
    extraActions[key] = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${name}/${value}`);
  });

  return extraActions;
}

/* harmony default export */ __webpack_exports__["default"] = (createExtraActions);

/***/ }),

/***/ "./src/utils/getDefaultValues.ts":
/*!***************************************!*\
  !*** ./src/utils/getDefaultValues.ts ***!
  \***************************************/
/*! exports provided: getDefaultValue, getDefaultValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultValue", function() { return getDefaultValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultValues", function() { return getDefaultValues; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const getDefaultValue = (items, isGetFirstItem) => {
  const findObj = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(items, {
    is_default: true,
    status: true
  });

  if (items.length === 0) {
    return null;
  }

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNil(findObj) && isGetFirstItem) {
    return items[0];
  }

  return findObj || null;
};
function getDefaultValues(params, obj, defaultValue = {}, isGetFirstItem = false, pKey = 'id') {
  const mapValue = {};

  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forIn(obj, (value, key) => {
    const getValuesByPath = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(params, value);

    const defaultValue = getDefaultValue(getValuesByPath, isGetFirstItem);
    mapValue[key] = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNil(defaultValue) ? null : defaultValue[pKey];
  });

  return _objectSpread(_objectSpread({}, defaultValue), mapValue);
}

/***/ }),

/***/ "./src/utils/isAssembly.ts":
/*!*********************************!*\
  !*** ./src/utils/isAssembly.ts ***!
  \*********************************/
/*! exports provided: isAssembly, isAssemblyByDpn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAssembly", function() { return isAssembly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAssemblyByDpn", function() { return isAssemblyByDpn; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const isAssembly = part => Boolean(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(part, 'is_assembly'));
const isAssemblyByDpn = dpn => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.indexOf(dpn, 'G') !== -1;
/* harmony default export */ __webpack_exports__["default"] = (isAssembly);

/***/ }),

/***/ "@hookform/resolvers/yup":
/*!******************************************!*\
  !*** external "@hookform/resolvers/yup" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@hookform/resolvers/yup");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react-if":
/*!***************************!*\
  !*** external "react-if" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-if");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2xvZ2luLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvYWR2YW5jZWRGaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2Fzc2VtYmx5LnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2F1dGgucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvYnVkZ2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9jb21tb24ucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvY3VycmVuY3kucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvZHJhd2luZy5yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9lcXVpdmFsZW5jZS5yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9leHBvcnRQcm9jZXNzRGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9ncm91cC5yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9pdGVtLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2pvYi5yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9sb2NhdGlvbi5yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9tYWtlQUxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL21hbnVmYWN0dXJlci5yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9wYXJhbWV0ZXIucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvcGFyYW1ldGVyVHlwZS5yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9wYXJ0LnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3NwZWNpZmljYXRpb24ucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvc3VtbWFyeVJlcG9ydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvdGFnLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3VzZXIucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2UvbG9naW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL1N0YXR1c0NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbnN0YW50LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jcmVhdGVFeHRyYUFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dldERlZmF1bHRWYWx1ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2lzQXNzZW1ibHkudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGhvb2tmb3JtL3Jlc29sdmVycy95dXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaG9vay1mb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ5dXBcIiJdLCJuYW1lcyI6WyJMb2dpbiIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYXV0aGVuY2F0aW9uU3RhdGUiLCJ1c2VTZWxlY3RvciIsImF1dGhTdG9yZSIsInNlbGVjdFN0YXRlIiwibWVzc2FnZVN0YXRlIiwiY29tbW9uU3RvcmUiLCJzZWxlY3RNZXNzYWdlU3RhdGUiLCJkZWZhdWx0RGF0YSIsInVzZXJfaWQiLCJwYXNzd29yZCIsInJlbWVtYmVyIiwidmFsaWRhdGlvblNjaGVtYSIsInl1cCIsInJlcXVpcmVkIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsImxvZ2luRm9ybSIsInVzZUZvcm0iLCJzaG91bGRVbnJlZ2lzdGVyIiwiZGVmYXVsdFZhbHVlcyIsInVzZUVmZmVjdCIsImFjY2Vzc190b2tlbiIsImNsZWFyRXJyb3JzIiwib25Mb2dpbiIsImhhbmRsZVN1Ym1pdCIsImRhdGEiLCJzYWdhTG9naW4iLCJhY3Rpb25zIiwic2V0RGlzcGxheU1lc3NhZ2UiLCJ3cmFwTG9naW4iLCJsb2FkaW5nIiwicHJvZ3Jlc3MiLCJ0b3BJY29uIiwibG9naW5UaXRsZSIsImRpc3BsYXkiLCJlcnJvciIsIm1lc3NhZ2UiLCJ0ZXh0RmllbGQiLCJyZWdpc3RlciIsIkJvb2xlYW4iLCJlcnJvcnMiLCJjb250cm9sIiwib25DaGFuZ2UiLCJwcm9wcyIsIndhdGNoIiwiY2hlY2tib3giLCJfIiwiY2hlY2tlZCIsIndyYXBCdXR0b24iLCJzdWJtaXRCdXR0b24iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVxIiwidG9rZW4iLCJjb29raWVzIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsIm5hbWUiLCJyZXNldFN0YXRlIiwiY3JlYXRlQWN0aW9uIiwiaW5pdGlhbFN0YXRlIiwiaXNPcGVuIiwiaXNFZGl0TW9kZSIsImlzT3BlbkZpbHRlckRldGFpbCIsImlzRXhwYW5lZFNlY3Rpb24iLCJwZXJtaXNzaW9ucyIsInVwZGF0ZV9zeXN0ZW1fZGVmYXVsdF9wcmVzZXRzIiwic3lzdGVtUHJlc2V0IiwiaWQiLCJkZWZhdWx0RmlsdGVyIiwiZW50aXR5IiwiaXNfc3lzdGVtX2RlZmF1bHQiLCJ3aGVyZV9jb25kaXRpb25zIiwic29ydF9jb25kaXRpb25zIiwiZmlsdGVyUHJlc2V0TGlzdCIsImZpbHRlclR5cGUiLCJpbml0RGF0YSIsImNvbHVtbnMiLCJjb21wYXJhdG9ycyIsInNvcnRPcHRpb25zIiwibG9naWNhbE9wZXJhdG9ycyIsImZpbHRlckRldGFpbCIsImlzX3NoYXJlZCIsImlzX3VzZXJfZGVmYXVsdCIsInNhdmVBc0Zvcm0iLCJvcGVuIiwiY2xlYXJFcnJvciIsImFmRm9ybSIsInRhYmxlIiwiZGlhbG9nIiwic2VjdGlvbiIsImFkdmFuY2VkRmlsdGVyIiwiY3JlYXRlU2xpY2UiLCJyZWR1Y2VycyIsInNldE9wZW5BZHZhbmNlU2VhcmNoIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0RGVmYXVsdEZpbHRlciIsInNldEZpbHRlclByZXNldExpc3QiLCJzZXRGaWx0ZXJUeXBlIiwic2V0T3BlbkZpbHRlckRldGFpbCIsInNldEVkaXRNb2RlIiwic2V0SW5pdERhdGEiLCJzZXRGaWx0ZXJEZXRhaWwiLCJzZXRFeHBhbmRlZFNlY3Rpb24iLCJzZXRQZXJtaXNzaW9ucyIsInNldFN5c3RlbVByZXNldCIsInNldFNhdmVBc0Zvcm0iLCJzZXRBZkZvcm0iLCJzZXRMb2FkaW5nVGFibGUiLCJzZXRMb2FkaW5nRGlhbG9nIiwic2V0TG9hZGluZ1NlY3Rpb24iLCJyZXNldEZpbHRlckRldGFpbCIsImNvbmp1bmN0aW9uIiwidHlwZSIsImNvbmRpdGlvbnMiLCJleHRyYVJlZHVjZXJzIiwiY3JlYXRlIiwiZ2V0TGlzdCIsImNsZWFyRGVmYXVsdEZpbHRlciIsImdldERlZmF1bHRGaWx0ZXIiLCJjaGFuZ2VGaWx0ZXJUeXBlIiwiYXBwbHkiLCJjbG9zZSIsInJlbW92ZSIsImdldERldGFpbCIsInVwZGF0ZSIsInNoYXJlIiwic2F2ZUFzIiwiYWR2YW5jZVNlYXJjaFNlbGVjdG9yIiwic2VsZWN0RWRpdE1vZGUiLCJzZWxlY3REZWZhdWx0RmlsdGVyIiwic2VsZWN0RmlsdGVyVHlwZSIsInNlbGVjdElzRXhwYW5lZFNlY3Rpb24iLCJzZWxlY3RDb2x1bW4iLCJzZWxlY3RDb21wYXJhdG9yIiwic2VsZWN0U29ydE9wdGlvbnMiLCJzZWxlY3RGaWx0ZXJEZXRhaWwiLCJzZWxlY3RDb25kaXRpb25UcmVlIiwic2VsZWN0U29ydENvbmRpdGlvbnMiLCJzZWxlY3RVc2VyRGVmYXVsdCIsInNlbGVjdEZpbHRlckRldGFpbE5hbWUiLCJzZWxlY3RMaXN0RGF0YSIsInNlbGVjdFBlcm1pc3Npb25zIiwic2VsZWN0U3lzdGVtUHJlc2V0Iiwic2VsZWN0T3BlbkFkdmFuY2VTZWFyY2giLCJzZWxlY3RBZkZvcm0iLCJzZWxlY3RTYXZlQXNGb3JtIiwic2VsZWN0TG9hZGluZyIsInNlbGVjdEZpbHRlckRhdGEiLCJ3aGVyZUNvbmRpdGlvbnMiLCJzb3J0Q29uZGl0aW9ucyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWR1Y2VyIiwiYWN0aW9uVHlwZXMiLCJSRVNFVF9TVEFURSIsImRhdGFMaXN0IiwiaW5pdERhdGFGb3JMaXN0Iiwiam9icyIsImFzc2VtYmx5IiwicGFyYW1ldGVycyIsIlBMTEEiLCJ3aWtpX3BhZ2UiLCJjb2x1bW5fdG9vbHRpcHMiLCJhc3NlbWJseVNsaWNlIiwic2V0SW5pdERhdGFGb3JMaXN0Iiwic2V0RGF0YUxpc3QiLCJzYWdhR2V0TGlzdCIsIkdFVF9MSVNUIiwic2FnYUNoYW5nZVVzZXJKb2IiLCJDSEFOR0VfVVNFUl9KT0IiLCJzYWdhQ2hhbmdlVXNlckRyYXdpbmciLCJDSEFOR0VfVVNFUl9EUkFXSU5HIiwic2FnYVJlbW92ZSIsIlJFTU9WRSIsInNlbGVjdEluaXREYXRhRm9yTGlzdCIsImNyZWF0ZVNlbGVjdG9yIiwic2VsZWN0RGF0YUxpc3QiLCJ1bmF1dGhvcml6ZWQiLCJsb2FkaW5nQXV0aCIsInByb2ZpbGUiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJ2YWxpZF91bnRpbCIsInVzZXJfbmFtZSIsInVwZGF0ZWRfYXQiLCJncm91cF9tZW1iZXJzaGlwIiwiZGVmYXVsdF9sYW5ndWFnZV9pZCIsInB3ZERpYWxvZ1N0YXRlIiwic2V0dGluZ3MiLCJQQUdFUyIsInRpbWV6b25lcyIsImRldGFpbCIsImRlZmF1bHRfbGFuZ3VhZ2UiLCJob21lX3BhZ2UiLCJ0aW1lX3pvbmUiLCJhdXRoU2xpY2UiLCJzYXZlVG9rZW5Mb2dpbiIsImJhY2tVcmwiLCJSb3V0ZXIiLCJxdWVyeSIsImJhY2tfdXJsIiwic2V0Q29va2llIiwibWF4QWdlIiwicmVkaXJlY3RfdG8iLCJwdXNoIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2V0TG9hZGluZyIsInNldFVuYXV0aG9yaXplZCIsInNldFByb2ZpbGUiLCJsb2dvdXQiLCJkZXN0cm95Q29va2llIiwic2V0UHdEaWFsb2dTdGF0ZSIsInNldFByb2ZpbGVBdmF0YXIiLCJhdmF0YXIiLCJzZXRTZXR0aW5nSW5pdERhdGEiLCJzZXRMb2FkaW5nQXV0aCIsInNldFNldHRpbmdEZXRhaWwiLCJzZXREZWZhdWx0TGFuZ3VhZ2UiLCJMT0dJTiIsInNhZ2FHZXRQcm9maWxlIiwiR0VUX1BST0ZJTEUiLCJzYWdhQ2hhbmdlUGFzc3dvcmQiLCJDSEFOR0VfUEFTU1dPUkQiLCJzYWdhR2V0U2V0dGluZ3MiLCJzYWdhU2F2ZVNldHRpbmdzIiwic2FnYUxvZ291dCIsIkxPR09VVCIsImF1dGgiLCJzZWxlY3RVbmF1dGhvcml6ZWQiLCJzZWxlY3RQcm9maWxlIiwic2VsZWN0UHdkRGlhbG9nU3RhdGUiLCJzZWxlY3RTZXR0aW5ncyIsInNlbGVjdFNldHRpbmdzUGFyYW1ldGVycyIsInNlbGVjdExvYWRpbmdBdXRoIiwiZGlhbG9nU3RhdGUiLCJpc0VkaXQiLCJpc0xvYWRpbmciLCJpbXBvcnREaWFsb2dTdGF0ZSIsIm1vZGUiLCJyZXN1bHRJbXBvcnREaWFsb2ciLCJzdWNjZXNzIiwicmVzdWx0IiwiYnVkZ2V0RGV0YWlsIiwiam9iX2lkIiwiYnVkZ2V0X2lkIiwicHVjbyIsImRlc2NyaXB0aW9uIiwiYW1vdW50IiwiY3VycmVuY3kiLCJwdWNvX2xpc3QiLCJzZWxlY3RlZF9qb2IiLCJ2YWx1ZSIsInVzZXJfcHVjbyIsImJ1ZGdldCIsImluaXREYXRhRm9yQ3JlYXRlRWRpdCIsInVzZXJfY3VycmVuY3kiLCJ1c2VyX2pvYiIsInJlbWluZERhdGEiLCJoZWxwVGV4dCIsImJ1ZGdldEltcG9ydFByb2Nlc3MiLCJjZWxlcnlfaWQiLCJvcGVyYXRpb25faWQiLCJvcGVuRGlhbG9nUHJvY2VzcyIsImJ1ZGdldFN1bSIsImN1cnJlbmN5X2lkIiwibGVmdF9pbl9vcmRlciIsImxlZnRfaW5fcmZxIiwicGFyYW1ldGVyX2lkIiwidXNlZF9pbl9vcmRlciIsInVzZWRfaW5fcmZxIiwidXVpZHYxIiwic2V0T3BlbkRpYWxvZyIsInNldEluaXREYXRhRm9yQ3JlYXRlRWRpdCIsInNldFVzZXJWYWx1ZXMiLCJvcHRpb24iLCJzZXRCdWRnZXREZXRhaWwiLCJzZXRCdWRnZXRTdW0iLCJzdW1fYW1vdW50Iiwic3VtX3VzZWRfaW5fcmZxIiwic3VtX2xlZnRfaW5fcmZxIiwic3VtX3VzZWRfaW5fb3JkZXIiLCJzdW1fbGVmdF9pbl9vcmRlciIsInNldEltcG9ydE9wZW4iLCJzZXRJbXBvcnRMb2FkaW5nIiwic2V0SW1wb3J0TW9kZSIsInNldEltcG9ydFJlc3VsdCIsInNldE9wZW5JbXBvcnRQcm9jZXNzIiwic2V0Q2VsZXJ5SWQiLCJzZXRPcGVyYXRpb25JZCIsInNldFJlbWluZERhdGEiLCJvcGVuVXBkYXRlRGlhbG9nIiwiY2xvc2VEaWFsb2ciLCJvcGVuQ3JlYXRlRGlhbG9nIiwiY2hhbmdlVXNlclZhbHVlIiwidXBkYXRlTXVsdGlwbGUiLCJVUERBVEVfTVVMVElQTEUiLCJpbXBvcnRDb3N0Q29kZSIsInNlbmRSZXBvcnRNYWlsIiwiZ2V0UmVtaW5kRGF0YSIsInNlbGVjdERpYWxvZ1N0YXRlIiwic2VsZWN0VXNlckpvYiIsInNlbGVjdFVzZXJQdWNvIiwic2VsZWN0Sm9iTGlzdCIsInNlbGVjdFB1Y29MaXN0Iiwic2VsZWN0QnVkZ2V0RGV0YWlsIiwic2VsZWN0SW5pdERhdGFDcmVhdGVFZGl0Iiwic2VsZWN0QnVkZ2V0U3VtIiwic2VsZWN0SW1wb3J0RGlhbG9nU3RhdGUiLCJzZWxlY3RJbXBvcnRSZXN1bHREaWFsb2ciLCJzZWxlY3RJbXBvcnREaWFsb2dQcm9jZXNzIiwic2VsZWN0UmVtaW5kRGF0YSIsInNlbGVjdEluaXREYXRhRm9yQ0UiLCJzZWFyY2hRdWVyeSIsInBhZ2UiLCJ0YWJsZVN0YXRlIiwicGVyX3BhZ2UiLCJ0b3RhbF9pdGVtcyIsInN0YXR1cyIsImVkaXRSb3dzIiwiY3VycmVudExhbmd1YWdlIiwicHJvcGVydGllcyIsImlzX2RlZmF1bHQiLCJzZWxlY3RlZFJvd3MiLCJ1c2VyVmFsdWUiLCJkcmF3aW5nIiwiZW50aXR5X2lkIiwiam9iIiwic3RhdHVzQ29kZSIsImNvbW1vblNsaWNlIiwic2V0U2VhcmNoUXVlcnkiLCJzZXRFbnRpdHkiLCJzZXRMb2FkaW5nUGFnZSIsInNldFRhYmxlU3RhdGUiLCJzZXRFcnJvck1lc3NhZ2UiLCJzZXRTdWNjZXNzTWVzc2FnZSIsInNldEVkaXRSb3dzIiwic2V0VXNlclZhbHVlRHJhd2luZyIsInNldFVzZXJWYWx1ZUpvYiIsInJlc2V0VXNlclZhbHVlIiwic2V0U2VsZWN0ZWRSb3dzIiwicmVzZXRNZXNzYWdlU3RhdGUiLCJzZXRDdXJyZW50TGFuZ3VhZ2UiLCJzZXRFcnJvciIsIlN0YXR1c0NvZGUiLCJCQURfUkVRVUVTVCIsInNldE9wZW5FcnJvckRpYWxvZyIsInNlbGVjdFNlYXJjaFF1ZXJ5Iiwic2VsZWN0RW50aXR5Iiwic2VsZWN0VGFibGVTdGF0ZSIsInNlbGVjdFVzZXJWYWx1ZURyYXdpbmciLCJzZWxlY3RVc2VyVmFsdWVKb2IiLCJzZWxlY3RFZGl0Um93cyIsInNlbGVjdFNlbGVjdGVkUm93cyIsInNlbGVjdEN1cnJlbnRMYW5ndWFnZSIsInNlbGVjdEVycm9yIiwic2FnYUV4ZWN1dGVPcGVyYXRpb24iLCJFWEVDVVRFX09QRVJBVElPTiIsInNhZ2FHZXRIaXN0b3J5TG9ncyIsIkdFVF9ISVNUT1JZIiwic2FnYVVwZGF0ZU11bHRpcGxlIiwic2FnYUNhbmNlbEJhY2tncm91bmRKb2IiLCJjdXJyZW5jeURldGFpbCIsIm11bHRpcGxpZXIiLCJyYXRlIiwicm91bmRfdG8iLCJiYXNlX2N1cnJlbmN5IiwiaXNfYmFzZV9yYXRlX21vZGUiLCJiYXNlX2N1cnJlbmN5X2xpc3QiLCJ1c2VyX2Jhc2VfY3VycmVuY3kiLCJpbml0RGF0YUZvckNFIiwibXVsdGlwbGllcl9vcHRpb25zIiwicm91bmRfdG9fb3B0aW9ucyIsImhpc3RvcnlMb2dzIiwiY3VycmVuY3lTbGljZSIsInNldERpYWxvZ1N0YXRlIiwic2V0RGlhbG9nU3RhdGVPcGVuIiwic2V0RGlhbG9nU3RhdGVMb2FkaW5nIiwic2V0SGlzdG9yeUxvZ3MiLCJzZXRJbml0RGF0YUZvckNFIiwic2V0RGV0YWlsIiwic2V0VXNlckJhc2VDdXJyZW5jeSIsInJlc2V0RGV0YWlsIiwic2FnYU9wZW5DcmVhdGVEaWFsb2ciLCJPUEVOX0NSRUFURV9ESUFMT0ciLCJzYWdhT3BlblVwZGF0ZURpYWxvZyIsIk9QRU5fVVBEQVRFX0RJQUxPRyIsInNhZ2FDbG9zZURpYWxvZyIsIkNMT1NFX0RJQUxPRyIsInNhZ2FDcmVhdGUiLCJDUkVBVEUiLCJzYWdhVXBkYXRlIiwiVVBEQVRFIiwic2FnYUNoYW5nZVVzZXJDdXJyZW5jeSIsInNlbGVjdERldGFpbCIsInNlbGVjdFVzZXJCYXNlQ3VycmVuY3kiLCJkcmF3aW5nR3JvdXBJZCIsImRyYXdpbmdfaWQiLCJyZXZpc2lvbiIsImRyYXdpbmdfZm9ybWF0IiwiZHJhd2luZ19wdXJwb3NlIiwiZmlsZV9wcmVmaXgiLCJmaWxlX3R5cGUiLCJhc3NvY2lhdGVkX2RvY3VtZW50cyIsImN1c3RvbWVyX2lkIiwiYWRkaXRpb25hbF9hdHRyaWJ1dGVzIiwiZGVzY3JpcHRpb25zIiwiZXhjbHVkZV9mcm9tX2N1c3RvbWVyIiwiZXhjbHVkZV9mcm9tX290aGVyIiwiZXhjbHVkZV9mcm9tX3N1cHBsaWVyIiwiaXRlbV9saXN0IiwidGFnX2xpc3QiLCJpc19kZXRhaWxfZHJhd2luZyIsImlzX2RyYXdpbmciLCJpc19vdGhlcl9kb2N1bWVudCIsImlzX3NjaGVtYXRpYyIsImlzX3NwZWNpZmljYXRpb24iLCJ0YWIiLCJkcmF3aW5nX2dyb3VwcyIsImdyb3VwX2lkIiwiY2hpbGRyZW4iLCJEV0FUIiwiRFdQVSIsIkZQUkUiLCJGVFlQIiwiUExGTyIsIlBMQVQiLCJyZXZpc2lvbkRpYWxvZyIsIm5ld19yZXZpc2lvbiIsInJlYXNvbiIsInNldERpYWxvZ1N0YXRlVGFiIiwic2V0RHJhd2luZ0dyb3VwSWQiLCJ1c2VySm9iIiwiZGV0YWlsRGVmYXVsdFZhbHVlIiwiZ2V0RGVmYXVsdFZhbHVlcyIsInNldFJldmlzaW9uRGlhbG9nT3BlbiIsInNldFJldmlzaW9uRGlhbG9nTG9hZGluZyIsInNldFJldmlzaW9uRGlhbG9nRGV0YWlsIiwicmVzZXRSZXZpc2lvbkRpYWxvZ0RldGFpbCIsInNhZ2FPcGVuQ3JlYXRlUGFydERpYWxvZyIsInNhZ2FPcGVuUmV2RGlhbG9nIiwic2FnYVNhdmVOZXdSZXYiLCJzZWxlY3REcmF3aW5nR3JvdXBzIiwic2VsZWN0UGFyYW1ldGVycyIsInNlbGVjdERyYXdpbmdHcm91cElkIiwic2VsZWN0UmV2aXNpb25EaWFsb2ciLCJlcXVpdmFsZW5jZURldGFpbCIsImVxdWl2X2lkIiwiZXF1aXZfdHlwZSIsImltYWdlIiwic3RhbmRhcmRzIiwiZXF1aXZhbGVuY2VUeXBlIiwibWFudWZhY3R1cmluZ19zdGFuZGFyZCIsIm1hdGVyaWFsX3N0YW5kYXJkIiwiUExOTyIsIm5leHRfY29kZSIsImVxdWl2YWxlbmNlU2xpY2UiLCJzZXRFcXVpdmFsZW5jZVR5cGUiLCJzZXROZXh0Q29kZSIsInNhZ2FHZXROZXh0Q29kZSIsIkdFVF9ORVhUX0NPREUiLCJzZWxlY3RFcXVpdmFsZW5jZVR5cGUiLCJvcGVyYXRpb25JZCIsImNlbGVyeUlkIiwiZXhwb3J0UHJvY2Vzc0RpYWxvZ1JlZHVjZXIiLCJzZXRPcGVuIiwic2V0TWVzc2FnZSIsInNldFN0YXR1cyIsInJlc2V0SW5pdFN0YXRlIiwiZ3JvdXAiLCJncm91cFBlcm1pc3Npb25zIiwiZ3JvdXBzIiwiZ3JvdXBTbGljZSIsInNldEdyb3VwUGVybWlzc2lvbnMiLCJzYWdhR2V0R3JvdXBQZXJtaXNzaW9ucyIsInNhZ2FVcGRhdGVHcm91cFBlcm1pc3Npb25zIiwic2VsZWN0R3JvdXBQZXJtaXNzaW9ucyIsIml0ZW0iLCJpdGVtU2xpY2UiLCJ0cmFuc2Zlckxpc3RTdGF0ZSIsInVzZXJBdmFpbGFibGVMaXN0IiwidXNlckdyb3VwIiwiam9iRGV0YWlsIiwiZXF1aXBtZW50X3R5cGUiLCJsYW5ndWFnZSIsImVyZWN0aW9uX3NpdGUiLCJqb2Jfc3RhbmRhcmQiLCJwZW9wbGVfcmVzcG9uc2libGUiLCJzcXVhZF9sZWFkZXIiLCJkcmF3aW5nc19yZXNwb25zaWJsZSIsImNvbnRyYWN0X25vIiwiY29udHJhY3RfZGVzYyIsImNyZWRpdF9sZXR0ZXIiLCJsb2dvIiwiam9iX2N1cnJlbmNpZXMiLCJqb2JfZGVzY3JpcHRpb25zIiwiam9iX3VzZXJzIiwiam9iX2V4cGVkaXRpbmdfZGF0ZXMiLCJzZWxlY3RlZEpvYkNhdGVnb3J5Iiwiam9iX2NhdGVnb3JpZXMiLCJjdXJyZW5jaWVzIiwiZ3JvdXBfbWFwIiwiam9iX2FsbCIsImpvYl9kcmF3aW5nIiwiam9iX3Jlc3BvbnNpYmxlIiwiam9iX3NxdWFkX2xlYWRlciIsImVyZWN0aW9uX3NpdGVzIiwiRVFUWSIsIkpPQVQiLCJ0b29sdGlwIiwiam9iX3RlbXBsYXRlIiwia2V5TWFwcGluZyIsImpvYlNsaWNlIiwic2V0T3BlblRyYW5zZmVyTGlzdCIsInNldFRyYW5zZmVyVXNlckF2YWlsYWJsZUxpc3QiLCJzZXRUcmFuc2Zlckxpc3RVc2VyR3JvdXAiLCJzZXRTZWxlY3RlZENhdGVnb3J5Iiwic2V0S2V5TWFwcGluZyIsImNsb3NlVHJhbnNmZXJMaXN0Iiwiam9iU3RhbmRhcmQiLCJtYXAiLCJwaWNrIiwic2FnYUdldFVzZXJHcm91cE1hcHBpbmciLCJzZWxlY3RKb2JDYXRlZ29yaWVzIiwic2VsZWN0VHJhbnNmZXJMaXN0U3RhdGUiLCJzZWxlY3RLZXlNYXBwaW5nIiwic2VsZWN0U2VsZWN0ZWRKb2JDYXRlZ29yeSIsImxvY2F0aW9uX2lkIiwibG9jYXRpb25fdHlwZSIsIm9mZmljZV9hZGRyZXNzMSIsIm9mZmljZV9hZGRyZXNzMiIsIm9mZmljZV9jaXR5Iiwib2ZmaWNlX3ppcCIsIm9mZmljZV9zdGF0ZSIsIm9mZmljZV9jb3VudHJ5Iiwib2ZmaWNlX3Bob25lIiwib2ZmaWNlX2VtYWlsIiwib2ZmaWNlX2ZheCIsIndvcmtzaG9wX2FkZHJlc3MxIiwid29ya3Nob3BfYWRkcmVzczIiLCJ3b3Jrc2hvcF9jaXR5Iiwid29ya3Nob3BfcGhvbmUiLCJ3b3Jrc2hvcF9lbWFpbCIsIndvcmtzaG9wX2ZheCIsImNvbW1lbnQiLCJzcGVjaWFsdGllcyIsInJlbWFyayIsImVkaXRNb2RlIiwibG9jYXRpb24iLCJDVFJZIiwiTE9BVCIsIlBVQ08iLCJTU1BFIiwiVFlMTyIsImxvY2F0aW9uU2xpY2UiLCJzZXREaWFsb2dTdGF0ZUVkaXRNb2RlIiwiR0VUX0dFTkVSQVRFX0NPREUiLCJwcmVzZXREZXRhaWwiLCJjb2x1bW5zX2Rpc3BsYXllZCIsImlnbm9yZV9jYXNlIiwiZGlzdGluY3QiLCJjcmVhdGVkX2J5IiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRfYnkiLCJwcmVzZXREZWZhdWx0IiwicHJlc2V0TGlzdCIsIm1hbEZvcm0iLCJtYWtlQUxpc3RSZWR1Y2VyIiwic2V0SXNFZGl0TW9kZSIsInNldFByZXNldERldGFpbCIsInJlc2V0UHJlc2V0RGV0YWlsIiwic2V0UHJlc2V0TGlzdCIsInNldFByZXNldERlZmF1bHQiLCJzZXRNYWxGb3JtIiwiZ2V0SW5pdERhdGEiLCJjbGVhckRlZmF1bHQiLCJleHBvcnRNYWtlQUxpc3QiLCJzdG9wTWFrZUFMaXN0Iiwic2VsZWN0SXNPcGVuIiwibWFrZUFMaXN0Iiwic2VsZWN0SXNFZGl0TW9kZSIsInNlbGVjdFByZXNldERldGFpbCIsInNlbGVjdENvbHVtbkRpc3BsYXkiLCJzZWxlY3RXaGVyZUNvbmRpdGlvbnMiLCJzZWxlY3RQcmVzZXRMaXN0Iiwic2VsZWN0UHJlc2V0RGVmYXVsdCIsInNlbGVjdENvbHVtbnNEYXRhIiwic2VsZWN0Q29tcGFyYXRvcnNEYXRhIiwic2VsZWN0TG9naWNhbE9wZXJhdG9yc0RhdGEiLCJzZWxlY3RTb3J0T3B0aW9uc0RhdGEiLCJzZWxlY3RMb2FkaW5nVGFibGUiLCJzZWxlY3RMb2FkaW5nRGlhbG9nIiwic2VsZWN0TWFsRm9ybSIsIm1hbnVmYWN0dXJlcl9pZCIsIm1hbnVmYWN0dXJlciIsInNhZ2FHZW5lcmF0ZUNvZGUiLCJjb25zdGFudCIsIm9yZGVyIiwicGFyYW1ldGVyX3R5cGVfaWQiLCJhcHBsaWNhdGlvbl9wYXJhbWV0ZXIiLCJkZXZlbG9wZXJfcGFyYW1ldGVyIiwic2ltcGxlX3BhcmFtZXRlciIsImF0dHJpYnV0ZXMiLCJjYXRlZ29yaWVzIiwiaXNfbXVsdGlsaW5ndWFsIiwicGFyYW1fdHlwZV9pZCIsInBhcmFtX3R5cGVfcmF3X2lkIiwicGFyYW1fdHlwZV9zcGVjaWZpY19jb25maWciLCJwYXJhbWV0ZXJUeXBlIiwiY2F0ZWdvcnkiLCJ0eXBlX2lkIiwicGFyYW1ldGVyU2xpY2UiLCJzZXREYXRhIiwic2V0UGFyYW1ldGVyVHlwZSIsInJlc2V0TG9jYXRpb25EZXRhaWwiLCJleHRyYUFjdGlvbnMiLCJjcmVhdGVFeHRyYUFjdGlvbnMiLCJleGVjdXRlT3BlcmF0aW9uIiwic2VsZWN0SW5pdFBhcmFtZXRlciIsImlzTnVsbCIsImdldFBlcm1pc3Npb25CYXNlT25OYW1lIiwidmlldyIsImVkaXQiLCJkZWxldGUiLCJkaXNhYmxlX2VuYWJsZSIsInNlbGVjdFZpZXdQZXJtaXNzaW9uIiwibmJyX2RlZmF1bHQiLCJhcHBsaWNhdGlvbl9wYXJhbWV0ZXJfdHlwZSIsImRldmVsb3Blcl9wYXJhbWV0ZXJfdHlwZSIsInNpbXBsZV9wYXJhbWV0ZXJfdHlwZSIsInBhcmFtZXRlclR5cGVTbGljZSIsInNlbGVjdEVkaXRQZXJtaXNzaW9uIiwiaXRlbURldGFpbCIsImRwbiIsInJlZmVyZW5jZV90byIsIm1hc3MiLCJ1bml0IiwibWFudWZhY3R1cmVyX2VxdWl2IiwibWFudWZhY3R1cmVycyIsIm1hdGVyaWFsX2VxdWl2IiwibWFudWZhY3R1cmVyX2VxdWl2X3N0YW5kYXJkcyIsIm1hdGVyaWFsX2VxdWl2X3N0YW5kYXJkcyIsImFzc2VtYmx5RGV0YWlsIiwiaXRlbXMiLCJpc19hc3NlbWJseSIsImRyYXdpbmdfaXRlbXMiLCJwYXJ0TGlzdCIsIk1BQVQiLCJVTklUIiwiUEFBVCIsImNvbmZpcm1SZWYiLCJtYW51ZmFjdHVyZXJTdG9yZSIsInBhcnRTbGljZSIsImFkZFBhcnQiLCJwYXJ0IiwibGVuZ3RoIiwic2V0UGFydExvYWRpbmciLCJjdXJyZW50UGFydCIsImxhc3QiLCJ1cGRhdGVDdXJyZW50UGFydCIsInNldENvbmZpcm1SZWYiLCJzZXRDb25maXJtUmVmT3BlbiIsInJlc2V0Q3VycmVudFBhcnQiLCJ1c2VyRHJhd2luZyIsImdlbmVyYXRlQ29kZSIsImluaXREZXRhaWwiLCJpc0Fzc2VtYmx5IiwicmVtb3ZlUGFydCIsInBvcCIsInNldFBhcnRUYWIiLCJzZXRNYW51RGV0YWlsIiwic2V0TWFudURpYWxvZ09wZW4iLCJzZXRNYW51RGlhbG9nTG9hZGluZyIsInNldE1hbnVJbml0RGF0YSIsImFkZE1hbnVmYWN0dXJlciIsInNldERyYXdpbmdJdGVtcyIsInNhZ2FHZXRJdGVtQ29weSIsInNhZ2FHZXREcmF3aW5nSXRlbXMiLCJzYWdhT3Blbk1hbnVEaWFsb2ciLCJzYWdhQ3JlYXRlTWFudSIsInNhZ2FDbG9zZU1hbnVEaWFsb2ciLCJzYWdhR2V0TWFudUlkIiwic2VsZWN0UGFydExpc3QiLCJzZWxlY3RDdXJyZW50UGFydCIsInNlbGVjdENvbmZpcm1SZWYiLCJzZWxlY3RQYXJ0TWFudSIsInNlbGVjdERyYXdpbmdJdGVtcyIsInNwZWNpZmljYXRpb25EZXRhaWwiLCJzcGVjX2lkIiwic3BlY2lmaWNhdGlvbiIsIlNTQVQiLCJzcGVjaWZpY2F0aW9uU2xpY2UiLCJzYWdhT3BlbkRyYXdpbmdEaWFsb2ciLCJ0aXRsZSIsIm51bWJlck9mU3VjY2VzcyIsIm51bWJlck9mRmFpbGVkIiwiZmFpbGVkUmVhc29ucyIsInN1bW1hcnlSZXBvcnQiLCJzZXRSZXBvcnREYXRhIiwiZmFpbGVkX2NvdW50Iiwic3VjY2Vzc19jb3VudCIsImZhaWxlZF9yZWFzb25zIiwiZWxlbWVudCIsInRhZ1NsaWNlIiwic2FnYUNoYW5nZVVzZXJTY2hlbWF0aWMiLCJzZWxlY3RTcGVjaWZpY2F0aW9uIiwidXNlciIsInJlc2V0UHdkRGlhbG9nIiwidXNlcl9hYmIiLCJsb2dpbl9wYWdlIiwidmFsaWRfZnJvbSIsImZvcm1hdERhdGUiLCJEYXRlIiwiREFURV9GT1JNQVQiLCJqb2JfYWNjZXNzIiwiY29uZmlybV9wYXNzd29yZCIsInVzZXJTbGljZSIsInNldFJlc2V0UHdkRGlhbG9nIiwic2V0UmVzZXRQd2REaWFsb2dPcGVuIiwic2V0UmVzZXRQd2REaWFsb2dMb2FkaW5nIiwic2FnYVJlc2V0UGFzc3dvcmQiLCJzZWxlY3RSZXNldFB3ZERpYWxvZyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsImZsZXhEaXJlY3Rpb24iLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwib3ZlcmZsb3ciLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbiIsIndpZHRoIiwidG9wIiwiTlVNQkVSX0ZPUk1BVCIsIk5VTUJFUl9NQVgiLCJSRUdFWF9BTFBIQV9OVU1FUklDX09OTFkiLCJSRUdFWF9BTFBIQV9OVU1FUklDX1VOREVSU0NPUkVfT05MWSIsIlJFR0VYX1NFTUlDT0xPTl9TRVBFUkFURURfQUxQSEFfTlVNRVJJQ19VTkRFUlNDT1JFX09OTFkiLCJSRUdFWF9FTUFJTCIsIlJFR0VYX1RSSU1fU1BBQ0UiLCJSRUdFWF9HUk9VUF9JRCIsIlJFR0VYX09OTFlfVEhSRUVfQ0FQSVRBTF9MRVRURVIiLCJSRUdFWF9WQUxJRF9EQVRFX0VVUk9QRSIsIlJFR0VYX1ZBTElEX0RBVEVfQVNJQSIsIlBFUk1JU1NJT05fVE9QSUNfTUFQIiwiYWR2YW5jZWRfZmlsdGVyIiwibWFrZV9hX2xpc3QiLCJQRVJNSVNTSU9OX01BUCIsImxvY2tfdW5sb2NrIiwiaW1wb3J0IiwiZXhwb3J0IiwiY2hhbmdlX3R5cGUiLCJBVVRIIiwiU0VUX09QRU5fRElBTE9HX1NUQVRFIiwiR0VUX1BBUlQiLCJyZW1vdmFsUHJvcGVydGllcyIsIml0ZW1NYXNzRm9ybWF0IiwicHJlY2lzaW9uIiwibmVnYXRpdmVQYXR0ZXJuIiwibWF4IiwibWluIiwiYnVkZ2V0QW1vdW50Rm9ybWF0IiwiaXRlbVF1YW50aXR5Rm9ybWF0IiwiY3VycmVuY3lSYXRlRm9ybWF0IiwidW5zYXZlRGlhbG9nT3B0aW9ucyIsImJ1dHRvbnMiLCJsYWJlbCIsImZvckluIiwia2V5IiwiZ2V0RGVmYXVsdFZhbHVlIiwiaXNHZXRGaXJzdEl0ZW0iLCJmaW5kT2JqIiwiZmluZCIsImlzTmlsIiwicGFyYW1zIiwib2JqIiwiZGVmYXVsdFZhbHVlIiwicEtleSIsIm1hcFZhbHVlIiwiZ2V0VmFsdWVzQnlQYXRoIiwiZ2V0IiwiaXNBc3NlbWJseUJ5RHBuIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQVlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0Es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QyxDQUFDK3VCLE9BQUYsQ0FBVWhLLEdBQVYsRUFBZSxHQUFmLE1BQXdCLENBQUMsQ0FBbEU7QUFFUWlDLHlFQUFmLEU7Ozs7Ozs7Ozs7O0FDVEEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9sb2dpbi50c3hcIik7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnQC9zdHlsZXMvcGFnZS9sb2dpbidcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIEJ1dHRvbixcbiAgQ3NzQmFzZWxpbmUsXG4gIFRleHRGaWVsZCxcbiAgRm9ybUNvbnRyb2xMYWJlbCxcbiAgQ2hlY2tib3gsXG4gIFR5cG9ncmFwaHksXG4gIENvbnRhaW5lcixcbiAgTGluZWFyUHJvZ3Jlc3Ncbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5cbmltcG9ydCB7IExvY2sgYXMgTG9ja0ljb24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXG5cbmltcG9ydCB7IFdoZW4gfSBmcm9tICdyZWFjdC1pZidcblxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXG5pbXBvcnQgeyBjb21tb25TdG9yZSwgYXV0aFN0b3JlIH0gZnJvbSAnQC9zdG9yZS9yZWR1Y2VycydcblxuaW1wb3J0IHR5cGUgeyBMb2dpbkRhdGEgfSBmcm9tICdAL3R5cGVzL0F1dGgnXG5cbmZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc3QgYXV0aGVuY2F0aW9uU3RhdGUgPSB1c2VTZWxlY3RvcihhdXRoU3RvcmUuc2VsZWN0U3RhdGUpXG4gIGNvbnN0IG1lc3NhZ2VTdGF0ZSA9IHVzZVNlbGVjdG9yKGNvbW1vblN0b3JlLnNlbGVjdE1lc3NhZ2VTdGF0ZSlcblxuICBjb25zdCBkZWZhdWx0RGF0YSA9IHtcbiAgICB1c2VyX2lkOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgcmVtZW1iZXI6IHRydWVcbiAgfVxuXG4gIGNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSB5dXAub2JqZWN0KHtcbiAgICB1c2VyX2lkOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ1VzZXIgaXMgcmVxdWlyZWQnKSxcbiAgICBwYXNzd29yZDogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdQYXNzd29yZCBpcyByZXF1aXJlZCcpXG4gIH0pXG5cbiAgY29uc3QgcmVzb2x2ZXIgPSB5dXBSZXNvbHZlcjxMb2dpbkRhdGE+KHZhbGlkYXRpb25TY2hlbWEpXG4gIGNvbnN0IGxvZ2luRm9ybSA9IHVzZUZvcm08TG9naW5EYXRhPih7XG4gICAgcmVzb2x2ZXIsXG4gICAgc2hvdWxkVW5yZWdpc3RlcjogZmFsc2UsXG4gICAgZGVmYXVsdFZhbHVlczogeyAuLi5kZWZhdWx0RGF0YSB9XG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXV0aGVuY2F0aW9uU3RhdGUuYWNjZXNzX3Rva2VuKSB7XG4gICAgICBsb2dpbkZvcm0uY2xlYXJFcnJvcnMoKVxuICAgIH1cbiAgfSwgW2F1dGhlbmNhdGlvblN0YXRlXSlcblxuICBjb25zdCBvbkxvZ2luID0gbG9naW5Gb3JtLmhhbmRsZVN1Ym1pdCgoZGF0YSkgPT4ge1xuICAgIGRpc3BhdGNoKGF1dGhTdG9yZS5zYWdhTG9naW4oZGF0YSkpXG4gICAgZGlzcGF0Y2goY29tbW9uU3RvcmUuYWN0aW9ucy5zZXREaXNwbGF5TWVzc2FnZShmYWxzZSkpXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TaWduIGluPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcExvZ2lufT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luRm9ybX0gcm9sZT1cImxvZ2luLWZvcm1cIj5cbiAgICAgICAgICA8V2hlbiBjb25kaXRpb249e2F1dGhlbmNhdGlvblN0YXRlLmxvYWRpbmd9PlxuICAgICAgICAgICAgPExpbmVhclByb2dyZXNzIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9ncmVzc30gLz5cbiAgICAgICAgICA8L1doZW4+XG4gICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMudG9wSWNvbn0+XG4gICAgICAgICAgICA8TG9ja0ljb24gLz5cbiAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpblRpdGxlfSByb2xlPVwiaGVhZGluZ1wiPlxuICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25Mb2dpbn0gcm9sZT1cImZvcm1cIj5cbiAgICAgICAgICAgIDxXaGVuIGNvbmRpdGlvbj17bWVzc2FnZVN0YXRlLmRpc3BsYXl9PlxuICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJhbGVydFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5lcnJvcn0+XG4gICAgICAgICAgICAgICAge21lc3NhZ2VTdGF0ZS5tZXNzYWdlfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvV2hlbj5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VyX2lkXCJcbiAgICAgICAgICAgICAgcm9sZT1cImlucHV0XCJcbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ3VzZXJfaWQnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGlucHV0UmVmPXtsb2dpbkZvcm0ucmVnaXN0ZXJ9XG4gICAgICAgICAgICAgIGVycm9yPXtCb29sZWFuKGxvZ2luRm9ybS5lcnJvcnMudXNlcl9pZCl9XG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9e2xvZ2luRm9ybS5lcnJvcnMudXNlcl9pZD8ubWVzc2FnZX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHJvbGU9XCJpbnB1dFwiXG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbCc6ICdwYXNzd29yZCdcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZXJyb3I9e0Jvb2xlYW4obG9naW5Gb3JtLmVycm9ycy5wYXNzd29yZCl9XG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9e2xvZ2luRm9ybS5lcnJvcnMucGFzc3dvcmQ/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgIGlucHV0UmVmPXtsb2dpbkZvcm0ucmVnaXN0ZXJ9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgICBuYW1lPVwicmVtZW1iZXJcIlxuICAgICAgICAgICAgICBjb250cm9sPXtsb2dpbkZvcm0uY29udHJvbH1cbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgLi4ucHJvcHMgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbWVtYmVyID0gbG9naW5Gb3JtLndhdGNoKCdyZW1lbWJlcicpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrYm94fVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlbWVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhfLCBjaGVja2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoY2hlY2tlZClcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cmVtZW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxDaGVja2JveCBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ3JlbWVtYmVyJyB9fSAvPn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcEJ1dHRvbn0+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXRCdXR0b259XG4gICAgICAgICAgICAgICAgZGlzYWJsZUVsZXZhdGlvblxuICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD1cInRydWVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgeyByZXEgfSA9IGNvbnRleHRcbiAgY29uc3QgeyB0b2tlbiB9ID0gcmVxLmNvb2tpZXNcbiAgaWYgKHRva2VuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiAnLydcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2NvbW1vbiddXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQWN0aW9uLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcblxuaW1wb3J0IHR5cGUgeyBSb290UmVkdWNlclR5cGUgfSBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xuaW1wb3J0IHR5cGUgeyBFbnRpdHksIEZpbHRlclR5cGUgfSBmcm9tICdAL3R5cGVzL0NvbW1vbidcbmltcG9ydCB0eXBlIHtcbiAgQWR2YW5jZWRGaWx0ZXJQZXJtaXNzaW9uLFxuICBBZHZhbmNlZEZpbHRlcixcbiAgQWR2YW5jZWRGaWx0ZXJQYXJhbWV0ZXIsXG4gIFN5c3RlbUZpbHRlclxufSBmcm9tICdAL3R5cGVzL0FkdmFuY2VkRmlsdGVyJ1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdhZHZhbmNlZEZpbHRlcidcblxuZXhwb3J0IGNvbnN0IHJlc2V0U3RhdGUgPSBjcmVhdGVBY3Rpb24obmFtZSArICcvUkVTRVRfU1RBVEUnKVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc09wZW46IGZhbHNlLFxuICBpc0VkaXRNb2RlOiBmYWxzZSxcbiAgaXNPcGVuRmlsdGVyRGV0YWlsOiBmYWxzZSxcbiAgaXNFeHBhbmVkU2VjdGlvbjogZmFsc2UsXG4gIHBlcm1pc3Npb25zOiB7XG4gICAgdXBkYXRlX3N5c3RlbV9kZWZhdWx0X3ByZXNldHM6IGZhbHNlXG4gIH0gYXMgQWR2YW5jZWRGaWx0ZXJQZXJtaXNzaW9uLFxuICBzeXN0ZW1QcmVzZXQ6IHtcbiAgICBpZDogbnVsbCxcbiAgICBuYW1lOiAnJ1xuICB9IGFzIFN5c3RlbUZpbHRlcixcbiAgZGVmYXVsdEZpbHRlcjoge1xuICAgIGlkOiBudWxsLFxuICAgIG5hbWU6ICcnLFxuICAgIGVudGl0eTogJycsXG4gICAgaXNfc3lzdGVtX2RlZmF1bHQ6IGZhbHNlLFxuICAgIHdoZXJlX2NvbmRpdGlvbnM6IG51bGwsXG4gICAgc29ydF9jb25kaXRpb25zOiBudWxsXG4gIH0gYXMgQWR2YW5jZWRGaWx0ZXIsXG4gIGZpbHRlclByZXNldExpc3Q6IFtdIGFzIEFkdmFuY2VkRmlsdGVyW10sXG4gIGZpbHRlclR5cGU6ICdvd24nIGFzIEZpbHRlclR5cGUsXG4gIGluaXREYXRhOiB7XG4gICAgY29sdW1uczogW10sXG4gICAgY29tcGFyYXRvcnM6IFtdLFxuICAgIHNvcnRPcHRpb25zOiBbXSxcbiAgICBsb2dpY2FsT3BlcmF0b3JzOiBbXVxuICB9IGFzIEFkdmFuY2VkRmlsdGVyUGFyYW1ldGVyLFxuICBmaWx0ZXJEZXRhaWw6IHtcbiAgICBuYW1lOiAnJyxcbiAgICBlbnRpdHk6ICcnLFxuICAgIGlzX3NoYXJlZDogZmFsc2UsXG4gICAgaXNfc3lzdGVtX2RlZmF1bHQ6IGZhbHNlLFxuICAgIGlzX3VzZXJfZGVmYXVsdDogZmFsc2UsXG4gICAgc29ydF9jb25kaXRpb25zOiBudWxsLFxuICAgIHdoZXJlX2NvbmRpdGlvbnM6IG51bGxcbiAgfSBhcyBBZHZhbmNlZEZpbHRlcixcbiAgc2F2ZUFzRm9ybToge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIGNsZWFyRXJyb3I6IGZhbHNlLFxuICAgIGVycm9yOiAnJ1xuICB9LFxuICBhZkZvcm06IHtcbiAgICBjbGVhckVycm9yOiBmYWxzZSxcbiAgICBlcnJvcjogJydcbiAgfSxcbiAgbG9hZGluZzoge1xuICAgIHRhYmxlOiBmYWxzZSxcbiAgICBkaWFsb2c6IGZhbHNlLFxuICAgIHNlY3Rpb246IGZhbHNlXG4gIH1cbn1cblxuY29uc3QgYWR2YW5jZWRGaWx0ZXIgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWUsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRPcGVuQWR2YW5jZVNlYXJjaChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5pc09wZW4gPSBhY3Rpb24ucGF5bG9hZFxuICAgIH0sXG4gICAgc2V0RGVmYXVsdEZpbHRlcihzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFBhcnRpYWw8QWR2YW5jZWRGaWx0ZXI+Pikge1xuICAgICAgc3RhdGUuZGVmYXVsdEZpbHRlciA9IHtcbiAgICAgICAgLi4uc3RhdGUuZGVmYXVsdEZpbHRlcixcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldEZpbHRlclByZXNldExpc3Qoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxBZHZhbmNlZEZpbHRlcltdPikge1xuICAgICAgc3RhdGUuZmlsdGVyUHJlc2V0TGlzdCA9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgICBzZXRGaWx0ZXJUeXBlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248RmlsdGVyVHlwZT4pIHtcbiAgICAgIHN0YXRlLmZpbHRlclR5cGUgPSBhY3Rpb24ucGF5bG9hZFxuICAgIH0sXG4gICAgc2V0T3BlbkZpbHRlckRldGFpbChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5pc09wZW5GaWx0ZXJEZXRhaWwgPSBhY3Rpb24ucGF5bG9hZFxuICAgIH0sXG4gICAgc2V0RWRpdE1vZGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUuaXNFZGl0TW9kZSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgICBzZXRJbml0RGF0YShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEFkdmFuY2VkRmlsdGVyUGFyYW1ldGVyPikge1xuICAgICAgc3RhdGUuaW5pdERhdGEgPSBhY3Rpb24ucGF5bG9hZFxuICAgIH0sXG4gICAgc2V0RmlsdGVyRGV0YWlsKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UGFydGlhbDxBZHZhbmNlZEZpbHRlcj4+KSB7XG4gICAgICBzdGF0ZS5maWx0ZXJEZXRhaWwgPSB7XG4gICAgICAgIC4uLnN0YXRlLmZpbHRlckRldGFpbCxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldEV4cGFuZGVkU2VjdGlvbihzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5pc0V4cGFuZWRTZWN0aW9uID0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICAgIHNldFBlcm1pc3Npb25zKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QWR2YW5jZWRGaWx0ZXJQZXJtaXNzaW9uPikge1xuICAgICAgc3RhdGUucGVybWlzc2lvbnMgPSBhY3Rpb24ucGF5bG9hZFxuICAgIH0sXG4gICAgc2V0U3lzdGVtUHJlc2V0KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248U3lzdGVtRmlsdGVyPikge1xuICAgICAgc3RhdGUuc3lzdGVtUHJlc2V0ID0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICAgIHNldFNhdmVBc0Zvcm0oc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQYXJ0aWFsPHR5cGVvZiBpbml0aWFsU3RhdGUuc2F2ZUFzRm9ybT4+KSB7XG4gICAgICBzdGF0ZS5zYXZlQXNGb3JtID0ge1xuICAgICAgICAuLi5zdGF0ZS5zYXZlQXNGb3JtLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0QWZGb3JtKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UGFydGlhbDx0eXBlb2YgaW5pdGlhbFN0YXRlLmFmRm9ybT4+KSB7XG4gICAgICBzdGF0ZS5hZkZvcm0gPSB7XG4gICAgICAgIC4uLnN0YXRlLmFmRm9ybSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldExvYWRpbmdUYWJsZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5sb2FkaW5nLnRhYmxlID0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICAgIHNldExvYWRpbmdEaWFsb2coc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUubG9hZGluZy5kaWFsb2cgPSBhY3Rpb24ucGF5bG9hZFxuICAgIH0sXG4gICAgc2V0TG9hZGluZ1NlY3Rpb24oc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5sb2FkaW5nLnNlY3Rpb24gPSBwYXlsb2FkXG4gICAgfSxcbiAgICByZXNldEZpbHRlckRldGFpbChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248RW50aXR5Pikge1xuICAgICAgc3RhdGUuZmlsdGVyRGV0YWlsID0ge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgZW50aXR5OiBwYXlsb2FkLFxuICAgICAgICBpc19zaGFyZWQ6IGZhbHNlLFxuICAgICAgICBpc19zeXN0ZW1fZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIGlzX3VzZXJfZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIHNvcnRfY29uZGl0aW9uczogW10sXG4gICAgICAgIHdoZXJlX2NvbmRpdGlvbnM6IHtcbiAgICAgICAgICBjb25qdW5jdGlvbjogJ0FORCcsXG4gICAgICAgICAgdHlwZTogJ2dyb3VwJyxcbiAgICAgICAgICBjb25kaXRpb25zOiBbXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBleHRyYVJlZHVjZXJzOiB7XG4gICAgW3Jlc2V0U3RhdGUudHlwZV0oKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnQgY29uc3QgY3JlYXRlID0gY3JlYXRlQWN0aW9uKG5hbWUgKyAnL0NSRUFURScpXG5leHBvcnQgY29uc3QgZ2V0TGlzdCA9IGNyZWF0ZUFjdGlvbihuYW1lICsgJy9HRVRfTElTVCcpXG5leHBvcnQgY29uc3QgY2xlYXJEZWZhdWx0RmlsdGVyID0gY3JlYXRlQWN0aW9uKG5hbWUgKyAnL0NMRUFSX0RFRkFVTFRfRklMVEVSJylcbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0RmlsdGVyID0gY3JlYXRlQWN0aW9uKG5hbWUgKyAnL0dFVF9ERUZBVUxUX0ZJTFRFUicpXG5leHBvcnQgY29uc3QgY2hhbmdlRmlsdGVyVHlwZSA9IGNyZWF0ZUFjdGlvbjxGaWx0ZXJUeXBlPihuYW1lICsgJy9DSEFOR0VfRklMVEVSX1RZUEUnKVxuZXhwb3J0IGNvbnN0IG9wZW4gPSBjcmVhdGVBY3Rpb24obmFtZSArICcvT1BFTicpXG5leHBvcnQgY29uc3QgYXBwbHkgPSBjcmVhdGVBY3Rpb24obmFtZSArICcvQVBQTFknKVxuZXhwb3J0IGNvbnN0IGNsb3NlID0gY3JlYXRlQWN0aW9uKG5hbWUgKyAnL0NMT1NFJylcbmV4cG9ydCBjb25zdCByZW1vdmUgPSBjcmVhdGVBY3Rpb24obmFtZSArICcvUkVNT1ZFJylcbmV4cG9ydCBjb25zdCBnZXREZXRhaWwgPSBjcmVhdGVBY3Rpb248bnVtYmVyPihuYW1lICsgJy9HRVRfREVUQUlMJylcbmV4cG9ydCBjb25zdCB1cGRhdGUgPSBjcmVhdGVBY3Rpb24obmFtZSArICcvVVBEQVRFJylcbmV4cG9ydCBjb25zdCBzaGFyZSA9IGNyZWF0ZUFjdGlvbjx7IGlkOiBudW1iZXI7IGlzX3NoYXJlZDogYm9vbGVhbiB9PihuYW1lICsgJy9TSEFSRScpXG5leHBvcnQgY29uc3Qgc2F2ZUFzID0gY3JlYXRlQWN0aW9uPHN0cmluZz4obmFtZSArICcvU0FWRV9BUycpXG5cbmV4cG9ydCBjb25zdCB7XG4gIHNldE9wZW5BZHZhbmNlU2VhcmNoLFxuICBzZXREZWZhdWx0RmlsdGVyLFxuICBzZXRGaWx0ZXJQcmVzZXRMaXN0LFxuICBzZXRGaWx0ZXJUeXBlLFxuICBzZXRPcGVuRmlsdGVyRGV0YWlsLFxuICBzZXRFZGl0TW9kZSxcbiAgc2V0SW5pdERhdGEsXG4gIHNldEZpbHRlckRldGFpbCxcbiAgc2V0RXhwYW5kZWRTZWN0aW9uLFxuICByZXNldEZpbHRlckRldGFpbCxcbiAgc2V0UGVybWlzc2lvbnMsXG4gIHNldFN5c3RlbVByZXNldCxcbiAgc2V0U2F2ZUFzRm9ybSxcbiAgc2V0QWZGb3JtLFxuICBzZXRMb2FkaW5nRGlhbG9nLFxuICBzZXRMb2FkaW5nVGFibGUsXG4gIHNldExvYWRpbmdTZWN0aW9uXG59ID0gYWR2YW5jZWRGaWx0ZXIuYWN0aW9uc1xuXG4vLyBTZWxlY3RvclxuZXhwb3J0IGNvbnN0IGFkdmFuY2VTZWFyY2hTZWxlY3RvciA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5hZHZhbmNlZEZpbHRlclxuXG5leHBvcnQgY29uc3Qgc2VsZWN0RWRpdE1vZGUgPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUuYWR2YW5jZWRGaWx0ZXIuaXNFZGl0TW9kZVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0RGVmYXVsdEZpbHRlciA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5hZHZhbmNlZEZpbHRlci5kZWZhdWx0RmlsdGVyXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RGaWx0ZXJUeXBlID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLmFkdmFuY2VkRmlsdGVyLmZpbHRlclR5cGVcblxuZXhwb3J0IGNvbnN0IHNlbGVjdElzRXhwYW5lZFNlY3Rpb24gPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUuYWR2YW5jZWRGaWx0ZXIuaXNFeHBhbmVkU2VjdGlvblxuXG5leHBvcnQgY29uc3Qgc2VsZWN0Q29sdW1uID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLmFkdmFuY2VkRmlsdGVyLmluaXREYXRhLmNvbHVtbnNcbmV4cG9ydCBjb25zdCBzZWxlY3RDb21wYXJhdG9yID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLmFkdmFuY2VkRmlsdGVyLmluaXREYXRhLmNvbXBhcmF0b3JzXG5leHBvcnQgY29uc3Qgc2VsZWN0U29ydE9wdGlvbnMgPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUuYWR2YW5jZWRGaWx0ZXIuaW5pdERhdGEuc29ydE9wdGlvbnNcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEZpbHRlckRldGFpbCA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5hZHZhbmNlZEZpbHRlci5maWx0ZXJEZXRhaWxcbmV4cG9ydCBjb25zdCBzZWxlY3RDb25kaXRpb25UcmVlID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLmFkdmFuY2VkRmlsdGVyLmZpbHRlckRldGFpbC53aGVyZV9jb25kaXRpb25zXG5leHBvcnQgY29uc3Qgc2VsZWN0U29ydENvbmRpdGlvbnMgPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUuYWR2YW5jZWRGaWx0ZXIuZmlsdGVyRGV0YWlsLnNvcnRfY29uZGl0aW9uc1xuZXhwb3J0IGNvbnN0IHNlbGVjdFVzZXJEZWZhdWx0ID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLmFkdmFuY2VkRmlsdGVyLmZpbHRlckRldGFpbC5pc191c2VyX2RlZmF1bHRcbmV4cG9ydCBjb25zdCBzZWxlY3RGaWx0ZXJEZXRhaWxOYW1lID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLmFkdmFuY2VkRmlsdGVyLmZpbHRlckRldGFpbC5uYW1lXG5leHBvcnQgY29uc3Qgc2VsZWN0TGlzdERhdGEgPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUuYWR2YW5jZWRGaWx0ZXIuZmlsdGVyUHJlc2V0TGlzdFxuXG5leHBvcnQgY29uc3Qgc2VsZWN0UGVybWlzc2lvbnMgPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUuYWR2YW5jZWRGaWx0ZXIucGVybWlzc2lvbnNcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFN5c3RlbVByZXNldCA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5hZHZhbmNlZEZpbHRlci5zeXN0ZW1QcmVzZXRcblxuZXhwb3J0IGNvbnN0IHNlbGVjdE9wZW5BZHZhbmNlU2VhcmNoID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLmFkdmFuY2VkRmlsdGVyLmlzT3BlblxuXG5leHBvcnQgY29uc3Qgc2VsZWN0QWZGb3JtID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLmFkdmFuY2VkRmlsdGVyLmFmRm9ybVxuZXhwb3J0IGNvbnN0IHNlbGVjdFNhdmVBc0Zvcm0gPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUuYWR2YW5jZWRGaWx0ZXIuc2F2ZUFzRm9ybVxuZXhwb3J0IGNvbnN0IHNlbGVjdExvYWRpbmcgPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUuYWR2YW5jZWRGaWx0ZXIubG9hZGluZ1xuZXhwb3J0IGNvbnN0IHNlbGVjdEZpbHRlckRhdGEgPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4ge1xuICBjb25zdCB7IHdoZXJlX2NvbmRpdGlvbnM6IHdoZXJlQ29uZGl0aW9ucywgc29ydF9jb25kaXRpb25zOiBzb3J0Q29uZGl0aW9ucyB9ID0gc3RhdGUuYWR2YW5jZWRGaWx0ZXIuZGVmYXVsdEZpbHRlclxuICBjb25zdCB3aGVyZV9jb25kaXRpb25zID0gd2hlcmVDb25kaXRpb25zID8gSlNPTi5zdHJpbmdpZnkod2hlcmVDb25kaXRpb25zKSA6IG51bGxcbiAgY29uc3Qgc29ydF9jb25kaXRpb25zID0gc29ydENvbmRpdGlvbnMgPyBKU09OLnN0cmluZ2lmeShzb3J0Q29uZGl0aW9ucykgOiBudWxsXG4gIHJldHVybiB7IHdoZXJlX2NvbmRpdGlvbnMsIHNvcnRfY29uZGl0aW9ucyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkdmFuY2VkRmlsdGVyLnJlZHVjZXJcbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24sIGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnQC91dGlscy9jb25zdGFudCdcblxuaW1wb3J0IHR5cGUgeyBEYXRhRm9yRHJvcGRvd24sIEVudGl0eSwgUGFyYW1ldGVyT3B0aW9uLCBQYXlsb2FkT3BlcmF0aW9uIH0gZnJvbSAnQC90eXBlcy9Db21tb24nXG5pbXBvcnQgdHlwZSB7IEFzc2VtYmx5SW5pdERhdGFGb3JMaXN0LCBBc3NlbWJseUl0ZW0gfSBmcm9tICdAL3R5cGVzL0Fzc2VtYmx5J1xuaW1wb3J0IHR5cGUgeyBSb290UmVkdWNlclR5cGUgfSBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xuXG5leHBvcnQgY29uc3QgbmFtZTogRW50aXR5ID0gJ2Fzc2VtYmx5J1xuZXhwb3J0IGNvbnN0IHJlc2V0U3RhdGUgPSBjcmVhdGVBY3Rpb24oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5SRVNFVF9TVEFURX1gKVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGRhdGFMaXN0OiBbXSBhcyBBc3NlbWJseUl0ZW1bXSxcbiAgaW5pdERhdGFGb3JMaXN0OiB7XG4gICAgam9iczogW10sXG4gICAgcGVybWlzc2lvbnM6IHtcbiAgICAgIGFzc2VtYmx5OiBudWxsXG4gICAgfSxcbiAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICBQTExBOiBbXVxuICAgIH0sXG4gICAgd2lraV9wYWdlOiAnJyxcbiAgICBjb2x1bW5fdG9vbHRpcHM6IHt9XG4gIH0gYXMgQXNzZW1ibHlJbml0RGF0YUZvckxpc3Rcbn1cblxuY29uc3QgYXNzZW1ibHlTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZSxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldEluaXREYXRhRm9yTGlzdChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248QXNzZW1ibHlJbml0RGF0YUZvckxpc3Q+KSB7XG4gICAgICBzdGF0ZS5pbml0RGF0YUZvckxpc3QgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXREYXRhTGlzdChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248QXNzZW1ibHlJdGVtW10+KSB7XG4gICAgICBzdGF0ZS5kYXRhTGlzdCA9IHBheWxvYWRcbiAgICB9XG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IHtcbiAgICBbcmVzZXRTdGF0ZS50eXBlXSgpIHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGVcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7IGFjdGlvbnMgfSA9IGFzc2VtYmx5U2xpY2VcblxuZXhwb3J0IGNvbnN0IHNhZ2FHZXRMaXN0ID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7YWN0aW9uVHlwZXMuR0VUX0xJU1R9YClcbmV4cG9ydCBjb25zdCBzYWdhQ2hhbmdlVXNlckpvYiA9IGNyZWF0ZUFjdGlvbjxQYXJhbWV0ZXJPcHRpb24+KGAke25hbWV9LyR7YWN0aW9uVHlwZXMuQ0hBTkdFX1VTRVJfSk9CfWApXG5leHBvcnQgY29uc3Qgc2FnYUNoYW5nZVVzZXJEcmF3aW5nID0gY3JlYXRlQWN0aW9uPERhdGFGb3JEcm9wZG93bj4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5DSEFOR0VfVVNFUl9EUkFXSU5HfWApXG5leHBvcnQgY29uc3Qgc2FnYVJlbW92ZSA9IGNyZWF0ZUFjdGlvbjxQYXlsb2FkT3BlcmF0aW9uW10+KGAke25hbWV9LyR7YWN0aW9uVHlwZXMuUkVNT1ZFfWApXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RTdGF0ZSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZVtuYW1lXVxuZXhwb3J0IGNvbnN0IHNlbGVjdEluaXREYXRhRm9yTGlzdCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmluaXREYXRhRm9yTGlzdClcbmV4cG9ydCBjb25zdCBzZWxlY3RQZXJtaXNzaW9ucyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmluaXREYXRhRm9yTGlzdC5wZXJtaXNzaW9ucy5hc3NlbWJseSlcbmV4cG9ydCBjb25zdCBzZWxlY3REYXRhTGlzdCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmRhdGFMaXN0KVxuXG5leHBvcnQgZGVmYXVsdCBhc3NlbWJseVNsaWNlXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQWN0aW9uLCBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBzZXRDb29raWUsIGRlc3Ryb3lDb29raWUgfSBmcm9tICdub29raWVzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICdAL3V0aWxzL2NvbnN0YW50J1xuXG5pbXBvcnQgdHlwZSB7IExvZ2luRGF0YSwgUHJvZmlsZSwgU2V0dGluZ0RldGFpbCwgU2V0dGluZ0luaXREYXRhIH0gZnJvbSAnQC90eXBlcy9BdXRoJ1xuaW1wb3J0IHR5cGUgeyBSb290UmVkdWNlclR5cGUgfSBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdhdXRoJ1xuXG5leHBvcnQgY29uc3QgcmVzZXRTdGF0ZSA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS9SRVNFVF9TVEFURWApXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGFjY2Vzc190b2tlbjogJycsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICB1bmF1dGhvcml6ZWQ6IGZhbHNlLFxuICBsb2FkaW5nQXV0aDogZmFsc2UsXG4gIHByb2ZpbGU6IHtcbiAgICB1c2VyX2lkOiAnJyxcbiAgICBmaXJzdF9uYW1lOiAnJyxcbiAgICBsYXN0X25hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICB2YWxpZF91bnRpbDogJycsXG4gICAgdXNlcl9uYW1lOiAnJyxcbiAgICB1cGRhdGVkX2F0OiAnJyxcbiAgICBncm91cF9tZW1iZXJzaGlwOiBbXSxcbiAgICBkZWZhdWx0X2xhbmd1YWdlX2lkOiBudWxsXG4gIH0gYXMgUHJvZmlsZSxcbiAgcHdkRGlhbG9nU3RhdGU6IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBvcGVuOiBmYWxzZVxuICB9LFxuICBzZXR0aW5nczoge1xuICAgIGluaXREYXRhOiB7XG4gICAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICAgIFBBR0VTOiBbXSxcbiAgICAgICAgUExMQTogW11cbiAgICAgIH0sXG4gICAgICB0aW1lem9uZXM6IFtdXG4gICAgfSBhcyBTZXR0aW5nSW5pdERhdGEsXG4gICAgZGV0YWlsOiB7XG4gICAgICBkZWZhdWx0X2xhbmd1YWdlOiBudWxsLFxuICAgICAgaG9tZV9wYWdlOiBudWxsLFxuICAgICAgdGltZV96b25lOiAnJ1xuICAgIH0gYXMgU2V0dGluZ0RldGFpbFxuICB9XG59XG5cbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZSxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNhdmVUb2tlbkxvZ2luKFxuICAgICAgc3RhdGUsXG4gICAgICB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjx7IGFjY2Vzc190b2tlbjogc3RyaW5nOyByZW1lbWJlcjogYm9vbGVhbjsgcmVkaXJlY3RfdG86IHN0cmluZyB9PlxuICAgICkge1xuICAgICAgc3RhdGUuYWNjZXNzX3Rva2VuID0gcGF5bG9hZC5hY2Nlc3NfdG9rZW5cbiAgICAgIGNvbnN0IGJhY2tVcmwgPSBSb3V0ZXIucXVlcnkuYmFja191cmxcbiAgICAgIGlmIChwYXlsb2FkLnJlbWVtYmVyKSB7XG4gICAgICAgIHNldENvb2tpZShudWxsLCAndG9rZW4nLCBwYXlsb2FkLmFjY2Vzc190b2tlbiwge1xuICAgICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0IC8vIDEgZGF5XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRDb29raWUobnVsbCwgJ3Rva2VuJywgcGF5bG9hZC5hY2Nlc3NfdG9rZW4pXG4gICAgICB9XG4gICAgICBzZXRDb29raWUobnVsbCwgJ3JlZGlyZWN0X3RvJywgcGF5bG9hZC5yZWRpcmVjdF90bywge1xuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDM2NVxuICAgICAgfSlcbiAgICAgIGlmIChiYWNrVXJsKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKGRlY29kZVVSSUNvbXBvbmVudChiYWNrVXJsIGFzIHN0cmluZykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBSb3V0ZXIucHVzaChwYXlsb2FkLnJlZGlyZWN0X3RvKVxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0TG9hZGluZyhzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pIHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRVbmF1dGhvcml6ZWQoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS51bmF1dGhvcml6ZWQgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRQcm9maWxlKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxQcm9maWxlPikge1xuICAgICAgc3RhdGUucHJvZmlsZSA9IHBheWxvYWRcbiAgICB9LFxuICAgIGxvZ291dChzdGF0ZSkge1xuICAgICAgZGVzdHJveUNvb2tpZShudWxsLCAndG9rZW4nKVxuICAgICAgZGVzdHJveUNvb2tpZShudWxsLCAncmVkaXJlY3RfdG8nKVxuICAgICAgZGVzdHJveUNvb2tpZShudWxsLCAnY3VycmVudF9qb2JfaWQnKVxuICAgICAgc3RhdGUudW5hdXRob3JpemVkID0gZmFsc2VcbiAgICAgIHN0YXRlLmFjY2Vzc190b2tlbiA9ICcnXG4gICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICB9LFxuICAgIHNldFB3RGlhbG9nU3RhdGUoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFBhcnRpYWw8dHlwZW9mIGluaXRpYWxTdGF0ZS5wd2REaWFsb2dTdGF0ZT4+KSB7XG4gICAgICBzdGF0ZS5wd2REaWFsb2dTdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUucHdkRGlhbG9nU3RhdGUsXG4gICAgICAgIC4uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFByb2ZpbGVBdmF0YXIoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcbiAgICAgIHN0YXRlLnByb2ZpbGUuYXZhdGFyID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0U2V0dGluZ0luaXREYXRhKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxTZXR0aW5nSW5pdERhdGE+KSB7XG4gICAgICBzdGF0ZS5zZXR0aW5ncy5pbml0RGF0YSA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldExvYWRpbmdBdXRoKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUubG9hZGluZ0F1dGggPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRTZXR0aW5nRGV0YWlsKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxQYXJ0aWFsPFNldHRpbmdEZXRhaWw+Pikge1xuICAgICAgc3RhdGUuc2V0dGluZ3MuZGV0YWlsID0ge1xuICAgICAgICAuLi5zdGF0ZS5zZXR0aW5ncy5kZXRhaWwsXG4gICAgICAgIC4uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldERlZmF1bHRMYW5ndWFnZShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xuICAgICAgc3RhdGUucHJvZmlsZS5kZWZhdWx0X2xhbmd1YWdlX2lkID0gcGF5bG9hZFxuICAgIH1cbiAgfSxcbiAgZXh0cmFSZWR1Y2Vyczoge1xuICAgIFtyZXNldFN0YXRlLnR5cGVdKCkge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZVxuICAgIH1cbiAgfVxufSlcblxuLy8gQWN0aW9uc1xuZXhwb3J0IGNvbnN0IHsgYWN0aW9ucyB9ID0gYXV0aFNsaWNlXG5cbi8vIFNhZ2EgYWN0aW9uc1xuXG5leHBvcnQgY29uc3Qgc2FnYUxvZ2luID0gY3JlYXRlQWN0aW9uPExvZ2luRGF0YT4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5MT0dJTn1gKVxuZXhwb3J0IGNvbnN0IHNhZ2FHZXRQcm9maWxlID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7YWN0aW9uVHlwZXMuR0VUX1BST0ZJTEV9YClcbmV4cG9ydCBjb25zdCBzYWdhQ2hhbmdlUGFzc3dvcmQgPSBjcmVhdGVBY3Rpb248eyBuZXdfcGFzc3dvcmQ6IHN0cmluZzsgb2xkX3Bhc3N3b3JkOiBzdHJpbmcgfT4oXG4gIGAke25hbWV9LyR7YWN0aW9uVHlwZXMuQ0hBTkdFX1BBU1NXT1JEfWBcbilcbmV4cG9ydCBjb25zdCBzYWdhR2V0U2V0dGluZ3MgPSBjcmVhdGVBY3Rpb24oYCR7bmFtZX0vR0VUX1NFVFRJTkdTYClcbmV4cG9ydCBjb25zdCBzYWdhU2F2ZVNldHRpbmdzID0gY3JlYXRlQWN0aW9uPFNldHRpbmdEZXRhaWw+KGAke25hbWV9L1NBVkVfU0VUVElOR1NgKVxuZXhwb3J0IGNvbnN0IHNhZ2FMb2dvdXQgPSBjcmVhdGVBY3Rpb248eyBjb25maXJtOiBzdHJpbmcgfT4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5MT0dPVVR9YClcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFN0YXRlID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLmF1dGhcbmV4cG9ydCBjb25zdCBzZWxlY3RVbmF1dGhvcml6ZWQgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS51bmF1dGhvcml6ZWQpXG5leHBvcnQgY29uc3Qgc2VsZWN0UHJvZmlsZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLnByb2ZpbGUpXG5leHBvcnQgY29uc3Qgc2VsZWN0UHdkRGlhbG9nU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5wd2REaWFsb2dTdGF0ZSlcbmV4cG9ydCBjb25zdCBzZWxlY3RTZXR0aW5ncyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLnNldHRpbmdzKVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0U2V0dGluZ3NQYXJhbWV0ZXJzID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuc2V0dGluZ3MuaW5pdERhdGEucGFyYW1ldGVycylcblxuZXhwb3J0IGNvbnN0IHNlbGVjdExvYWRpbmdBdXRoID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUubG9hZGluZ0F1dGgpXG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhTbGljZVxuIiwiaW1wb3J0IHtcbiAgQnVkZ2V0LFxuICBCdWRnZXRJbml0RGF0YUZvckNyZWF0ZUVkaXQsXG4gIEJ1ZGdldEluaXREYXRhRm9yTGlzdCxcbiAgQnVkZ2V0SXRlbSxcbiAgQnVkZ2V0UGVybWlzc2lvbixcbiAgQnVkZ2V0U3VtLFxuICBCdWRnZXRVc2VyVmFsdWVcbn0gZnJvbSAnQC90eXBlcy9CdWRnZXQnXG5pbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcblxuaW1wb3J0IHsgdjEgYXMgdXVpZHYxIH0gZnJvbSAndXVpZCdcbmltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnQC91dGlscy9jb25zdGFudCdcblxuaW1wb3J0IHsgUm9vdFJlZHVjZXJUeXBlIH0gZnJvbSAnLi9yb290UmVkdWNlcidcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnYnVkZ2V0J1xuZXhwb3J0IGNvbnN0IHJlc2V0U3RhdGUgPSBjcmVhdGVBY3Rpb24obmFtZSArICcvUkVTRVRfU1RBVEUnKVxuXG5leHBvcnQgY29uc3QgZGlhbG9nU3RhdGUgPSB7XG4gIGlzT3BlbjogZmFsc2UsXG4gIGlzRWRpdDogZmFsc2UsXG4gIGlzTG9hZGluZzogZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IGltcG9ydERpYWxvZ1N0YXRlID0ge1xuICBpc09wZW46IGZhbHNlLFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBtb2RlOiAwIC8vIDAgLT4gdGVzdCwgMSAtPiB3cml0ZVxufVxuXG5leHBvcnQgY29uc3QgcmVzdWx0SW1wb3J0RGlhbG9nID0ge1xuICBpc09wZW46IGZhbHNlLFxuICBzdWNjZXNzOiB0cnVlLFxuICByZXN1bHQ6ICcnLFxuICBpc0xvYWRpbmc6IGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCBidWRnZXREZXRhaWwgPSB7XG4gIGpvYl9pZDogbnVsbCxcbiAgYnVkZ2V0X2lkOiAnJyxcbiAgcHVjbzogbnVsbCxcbiAgZGVzY3JpcHRpb246ICcnLFxuICBhbW91bnQ6IG51bGwsXG4gIGN1cnJlbmN5OiAnJ1xufVxuXG5leHBvcnQgY29uc3QgaW5pdERhdGFGb3JMaXN0ID0ge1xuICBqb2JzOiBbXSxcbiAgcHVjb19saXN0OiBbXSxcbiAgc2VsZWN0ZWRfam9iOiB7XG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIHZhbHVlOiBudWxsXG4gIH0sXG4gIHVzZXJfcHVjbzoge1xuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICB2YWx1ZTogbnVsbFxuICB9LFxuICBwZXJtaXNzaW9uczoge1xuICAgIGJ1ZGdldDogbnVsbFxuICB9LFxuICB3aWtpX3BhZ2U6ICcnLFxuICBjb2x1bW5fdG9vbHRpcHM6IHt9XG59IGFzIEJ1ZGdldEluaXREYXRhRm9yTGlzdFxuXG5leHBvcnQgY29uc3QgaW5pdERhdGFGb3JDcmVhdGVFZGl0ID0ge1xuICBwdWNvX2xpc3Q6IFtdLFxuICB1c2VyX2N1cnJlbmN5OiB7XG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIHZhbHVlOiBudWxsXG4gIH0sXG4gIHVzZXJfam9iOiB7XG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIHZhbHVlOiBudWxsXG4gIH0sXG4gIHVzZXJfcHVjbzoge1xuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICB2YWx1ZTogbnVsbFxuICB9LFxuICB3aWtpX3BhZ2U6ICcnXG59IGFzIEJ1ZGdldEluaXREYXRhRm9yQ3JlYXRlRWRpdFxuXG5jb25zdCByZW1pbmREYXRhID0ge1xuICBvcGVuOiBmYWxzZSxcbiAgaGVscFRleHQ6ICcnXG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGRhdGFMaXN0OiBbXSBhcyBCdWRnZXRJdGVtW10sXG4gIGRpYWxvZ1N0YXRlLFxuICBpbXBvcnREaWFsb2dTdGF0ZSxcbiAgcmVzdWx0SW1wb3J0RGlhbG9nLFxuICBidWRnZXREZXRhaWwsXG4gIGluaXREYXRhRm9yTGlzdCxcbiAgcmVtaW5kRGF0YSxcbiAgaW5pdERhdGFGb3JDcmVhdGVFZGl0LFxuICBidWRnZXRJbXBvcnRQcm9jZXNzOiB7XG4gICAgY2VsZXJ5X2lkOiAnJyxcbiAgICBvcGVyYXRpb25faWQ6ICcnLFxuICAgIG9wZW5EaWFsb2dQcm9jZXNzOiBmYWxzZVxuICB9LFxuICBidWRnZXRTdW06IHtcbiAgICBhbW91bnQ6IDAsXG4gICAgYnVkZ2V0X2lkOiAnJyxcbiAgICBjdXJyZW5jeV9pZDogJycsXG4gICAgZGVzY3JpcHRpb246ICdUb3RhbCBvZiBzZWxlY3RlZCBjb3N0IGNvZGVzJyxcbiAgICBsZWZ0X2luX29yZGVyOiAwLFxuICAgIGxlZnRfaW5fcmZxOiAwLFxuICAgIHBhcmFtZXRlcl9pZDogJycsXG4gICAgdXNlZF9pbl9vcmRlcjogMCxcbiAgICB1c2VkX2luX3JmcTogMCxcbiAgICBpZDogdXVpZHYxKClcbiAgfSBhcyBCdWRnZXRJdGVtXG59XG5cbmNvbnN0IGJ1ZGdldCA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZSxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldE9wZW5EaWFsb2coc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZS5pc09wZW4gPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRMb2FkaW5nRGlhbG9nKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUuaXNMb2FkaW5nID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0RWRpdE1vZGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUuaXNFZGl0ID0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICAgIHNldEluaXREYXRhRm9yTGlzdChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248QnVkZ2V0SW5pdERhdGFGb3JMaXN0Pikge1xuICAgICAgc3RhdGUuaW5pdERhdGFGb3JMaXN0ID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0SW5pdERhdGFGb3JDcmVhdGVFZGl0KHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxCdWRnZXRJbml0RGF0YUZvckNyZWF0ZUVkaXQ+KSB7XG4gICAgICBzdGF0ZS5pbml0RGF0YUZvckNyZWF0ZUVkaXQgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXREYXRhTGlzdChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248QnVkZ2V0SXRlbVtdPikge1xuICAgICAgc3RhdGUuZGF0YUxpc3QgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRVc2VyVmFsdWVzKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjx7IHZhbHVlOiAncHVjbycgfCAnam9iJzsgb3B0aW9uOiBCdWRnZXRVc2VyVmFsdWUgfT4pIHtcbiAgICAgIGlmIChwYXlsb2FkLnZhbHVlID09PSAncHVjbycpIHtcbiAgICAgICAgc3RhdGUuaW5pdERhdGFGb3JMaXN0LnVzZXJfcHVjbyA9IHBheWxvYWQub3B0aW9uXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5pbml0RGF0YUZvckxpc3Quc2VsZWN0ZWRfam9iID0gcGF5bG9hZC5vcHRpb25cbiAgICAgIH1cbiAgICB9LFxuICAgIHNldEJ1ZGdldERldGFpbChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFydGlhbDxCdWRnZXQ+Pikge1xuICAgICAgc3RhdGUuYnVkZ2V0RGV0YWlsID0ge1xuICAgICAgICAuLi5zdGF0ZS5idWRnZXREZXRhaWwsXG4gICAgICAgIC4uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldEJ1ZGdldFN1bShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248QnVkZ2V0U3VtPikge1xuICAgICAgc3RhdGUuYnVkZ2V0U3VtLmFtb3VudCA9IHBheWxvYWQuc3VtX2Ftb3VudFxuICAgICAgc3RhdGUuYnVkZ2V0U3VtLnVzZWRfaW5fcmZxID0gcGF5bG9hZC5zdW1fdXNlZF9pbl9yZnFcbiAgICAgIHN0YXRlLmJ1ZGdldFN1bS5sZWZ0X2luX3JmcSA9IHBheWxvYWQuc3VtX2xlZnRfaW5fcmZxXG4gICAgICBzdGF0ZS5idWRnZXRTdW0udXNlZF9pbl9vcmRlciA9IHBheWxvYWQuc3VtX3VzZWRfaW5fb3JkZXJcbiAgICAgIHN0YXRlLmJ1ZGdldFN1bS5sZWZ0X2luX29yZGVyID0gcGF5bG9hZC5zdW1fbGVmdF9pbl9vcmRlclxuICAgIH0sXG4gICAgc2V0UGVybWlzc2lvbnMoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPEJ1ZGdldFBlcm1pc3Npb24+KSB7XG4gICAgICBzdGF0ZS5pbml0RGF0YUZvckxpc3QucGVybWlzc2lvbnMuYnVkZ2V0ID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0SW1wb3J0T3BlbihzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pIHtcbiAgICAgIHN0YXRlLmltcG9ydERpYWxvZ1N0YXRlLmlzT3BlbiA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldEltcG9ydExvYWRpbmcoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5pbXBvcnREaWFsb2dTdGF0ZS5pc0xvYWRpbmcgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRJbXBvcnRNb2RlKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XG4gICAgICBzdGF0ZS5pbXBvcnREaWFsb2dTdGF0ZS5tb2RlID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0SW1wb3J0UmVzdWx0KHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxQYXJ0aWFsPHR5cGVvZiByZXN1bHRJbXBvcnREaWFsb2c+Pikge1xuICAgICAgc3RhdGUucmVzdWx0SW1wb3J0RGlhbG9nID0ge1xuICAgICAgICAuLi5zdGF0ZS5yZXN1bHRJbXBvcnREaWFsb2csXG4gICAgICAgIC4uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldE9wZW5JbXBvcnRQcm9jZXNzKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUuYnVkZ2V0SW1wb3J0UHJvY2Vzcy5vcGVuRGlhbG9nUHJvY2VzcyA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldENlbGVyeUlkKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XG4gICAgICBzdGF0ZS5idWRnZXRJbXBvcnRQcm9jZXNzLmNlbGVyeV9pZCA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldE9wZXJhdGlvbklkKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XG4gICAgICBzdGF0ZS5idWRnZXRJbXBvcnRQcm9jZXNzLm9wZXJhdGlvbl9pZCA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldFJlbWluZERhdGEoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFBhcnRpYWw8dHlwZW9mIHJlbWluZERhdGE+Pikge1xuICAgICAgc3RhdGUucmVtaW5kRGF0YSA9IHtcbiAgICAgICAgLi4uc3RhdGUucmVtaW5kRGF0YSxcbiAgICAgICAgLi4ucGF5bG9hZFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZXh0cmFSZWR1Y2Vyczoge1xuICAgIFtyZXNldFN0YXRlLnR5cGVdKCkge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZVxuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHtcbiAgc2V0T3BlbkRpYWxvZyxcbiAgc2V0TG9hZGluZ0RpYWxvZyxcbiAgc2V0RWRpdE1vZGUsXG4gIHNldEluaXREYXRhRm9yTGlzdCxcbiAgc2V0RGF0YUxpc3QsXG4gIHNldFVzZXJWYWx1ZXMsXG4gIHNldEJ1ZGdldERldGFpbCxcbiAgc2V0SW5pdERhdGFGb3JDcmVhdGVFZGl0LFxuICBzZXRCdWRnZXRTdW0sXG4gIHNldFBlcm1pc3Npb25zLFxuICBzZXRJbXBvcnRPcGVuLFxuICBzZXRJbXBvcnRMb2FkaW5nLFxuICBzZXRJbXBvcnRSZXN1bHQsXG4gIHNldEltcG9ydE1vZGUsXG4gIHNldE9wZW5JbXBvcnRQcm9jZXNzLFxuICBzZXRDZWxlcnlJZCxcbiAgc2V0T3BlcmF0aW9uSWQsXG4gIHNldFJlbWluZERhdGFcbn0gPSBidWRnZXQuYWN0aW9uc1xuXG5leHBvcnQgY29uc3Qgb3BlblVwZGF0ZURpYWxvZyA9IGNyZWF0ZUFjdGlvbjxudW1iZXI+KG5hbWUgKyAnL09QRU5fVVBEQVRFX0RJQUxPRycpXG5leHBvcnQgY29uc3QgY2xvc2VEaWFsb2cgPSBjcmVhdGVBY3Rpb24obmFtZSArICcvQ0xPU0VfRElBTE9HJylcbmV4cG9ydCBjb25zdCBvcGVuQ3JlYXRlRGlhbG9nID0gY3JlYXRlQWN0aW9uKG5hbWUgKyAnL09QRU5fQ1JFQVRFX0RJQUxPRycpXG5leHBvcnQgY29uc3QgZ2V0TGlzdCA9IGNyZWF0ZUFjdGlvbihuYW1lICsgJy9HRVRfTElTVCcpXG5leHBvcnQgY29uc3QgY2hhbmdlVXNlclZhbHVlID0gY3JlYXRlQWN0aW9uPGFueT4obmFtZSArICcvQ0hBTkdFX1VTRVJfVkFMVUUnKVxuZXhwb3J0IGNvbnN0IHVwZGF0ZU11bHRpcGxlID0gY3JlYXRlQWN0aW9uPHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG4gIGhyZWY6IHN0cmluZ1xufT4obmFtZSArICcvJyArIGFjdGlvblR5cGVzLlVQREFURV9NVUxUSVBMRSlcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZSA9IGNyZWF0ZUFjdGlvbjxCdWRnZXQ+KG5hbWUgKyAnL0NSRUFURScpXG5leHBvcnQgY29uc3QgdXBkYXRlID0gY3JlYXRlQWN0aW9uPEJ1ZGdldD4obmFtZSArICcvVVBEQVRFJylcbmV4cG9ydCBjb25zdCByZW1vdmUgPSBjcmVhdGVBY3Rpb248bnVtYmVyW10+KG5hbWUgKyAnL1JFTU9WRScpXG5leHBvcnQgY29uc3QgaW1wb3J0Q29zdENvZGUgPSBjcmVhdGVBY3Rpb248e1xuICBvcGVyYXRpb25EYXRhOiB7XG4gICAgam9iX2lkX3BrOiBudW1iZXJcbiAgICBmaWxlX3R5cGU6ICd0ZXh0JyB8ICdleGNlbCdcbiAgICBtb2RlOiAndGVzdCcgfCAnd3JpdGUnXG4gIH1cbiAgbW9kZTogbnVtYmVyXG4gIGZpbGU6IEZpbGVcbn0+KG5hbWUgKyAnL0lNUE9SVCcpXG5leHBvcnQgY29uc3Qgc2VuZFJlcG9ydE1haWwgPSBjcmVhdGVBY3Rpb248Rm9ybURhdGE+KG5hbWUgKyAnL1NFTkRfUkVQT1JUX01BSUwnKVxuZXhwb3J0IGNvbnN0IGdldFJlbWluZERhdGEgPSBjcmVhdGVBY3Rpb24obmFtZSArICcvR0VUX1JFTUlORF9EQVRBJylcblxuLy8gc2VsZWN0b3JcbmV4cG9ydCBjb25zdCBzZWxlY3REaWFsb2dTdGF0ZSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5idWRnZXQuZGlhbG9nU3RhdGVcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VySm9iID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLmJ1ZGdldC5pbml0RGF0YUZvckxpc3Quc2VsZWN0ZWRfam9iXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlclB1Y28gPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUuYnVkZ2V0LmluaXREYXRhRm9yTGlzdC51c2VyX3B1Y29cbmV4cG9ydCBjb25zdCBzZWxlY3REYXRhTGlzdCA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5idWRnZXQuZGF0YUxpc3RcbmV4cG9ydCBjb25zdCBzZWxlY3RKb2JMaXN0ID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLmJ1ZGdldC5pbml0RGF0YUZvckxpc3Quam9ic1xuZXhwb3J0IGNvbnN0IHNlbGVjdFB1Y29MaXN0ID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLmJ1ZGdldC5pbml0RGF0YUZvckxpc3QucHVjb19saXN0XG5leHBvcnQgY29uc3Qgc2VsZWN0QnVkZ2V0RGV0YWlsID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLmJ1ZGdldC5idWRnZXREZXRhaWxcbmV4cG9ydCBjb25zdCBzZWxlY3RJbml0RGF0YUNyZWF0ZUVkaXQgPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUuYnVkZ2V0LmluaXREYXRhRm9yQ3JlYXRlRWRpdFxuZXhwb3J0IGNvbnN0IHNlbGVjdEJ1ZGdldFN1bSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5idWRnZXQuYnVkZ2V0U3VtXG5leHBvcnQgY29uc3Qgc2VsZWN0UGVybWlzc2lvbnMgPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUuYnVkZ2V0LmluaXREYXRhRm9yTGlzdC5wZXJtaXNzaW9ucy5idWRnZXRcbmV4cG9ydCBjb25zdCBzZWxlY3RJbXBvcnREaWFsb2dTdGF0ZSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5idWRnZXQuaW1wb3J0RGlhbG9nU3RhdGVcbmV4cG9ydCBjb25zdCBzZWxlY3RJbXBvcnRSZXN1bHREaWFsb2cgPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUuYnVkZ2V0LnJlc3VsdEltcG9ydERpYWxvZ1xuZXhwb3J0IGNvbnN0IHNlbGVjdEltcG9ydERpYWxvZ1Byb2Nlc3MgPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUuYnVkZ2V0LmJ1ZGdldEltcG9ydFByb2Nlc3NcbmV4cG9ydCBjb25zdCBzZWxlY3RSZW1pbmREYXRhID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLmJ1ZGdldC5yZW1pbmREYXRhXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJbml0RGF0YUZvckNFID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLmJ1ZGdldC5pbml0RGF0YUZvckNyZWF0ZUVkaXRcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEluaXREYXRhRm9yTGlzdCA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5idWRnZXQuaW5pdERhdGFGb3JMaXN0XG5cbmV4cG9ydCBkZWZhdWx0IGJ1ZGdldC5yZWR1Y2VyXG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24sIGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnXG5cbmltcG9ydCB0eXBlIHsgQ29sb3IgfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0J1xuaW1wb3J0IHR5cGUgeyBSb290UmVkdWNlclR5cGUgfSBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xuaW1wb3J0IHR5cGUgeyBEYXRhRm9yRHJvcGRvd24sIEVudGl0eSwgTGlzdERhdGEsIFBhcmFtZXRlck9wdGlvbiwgRXJyb3JMb2csIFBheWxvYWRPcGVyYXRpb24gfSBmcm9tICdAL3R5cGVzL0NvbW1vbidcbmltcG9ydCB7IFN0YXR1c0NvZGUgfSBmcm9tICdAL3V0aWxzL1N0YXR1c0NvZGUnXG5cbmV4cG9ydCBjb25zdCBuYW1lID0gJ2NvbW1vbidcbmV4cG9ydCBjb25zdCByZXNldFN0YXRlID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7YWN0aW9uVHlwZXMuUkVTRVRfU1RBVEV9YClcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2VhcmNoUXVlcnk6ICcnLFxuICBlbnRpdHk6ICcnIGFzIEVudGl0eSxcbiAgbG9hZGluZzoge1xuICAgIHRhYmxlOiBmYWxzZSxcbiAgICBwYWdlOiBmYWxzZVxuICB9LFxuICB0YWJsZVN0YXRlOiB7XG4gICAgcGFnZTogMSxcbiAgICBwZXJfcGFnZTogMTAwLFxuICAgIHRvdGFsX2l0ZW1zOiAwXG4gIH0gYXMgTGlzdERhdGEsXG4gIG1lc3NhZ2VTdGF0ZToge1xuICAgIG1lc3NhZ2U6ICcnLFxuICAgIHN0YXR1czogJ3N1Y2Nlc3MnIGFzIENvbG9yLFxuICAgIGRpc3BsYXk6IGZhbHNlXG4gIH0sXG4gIGVkaXRSb3dzOiBbXSBhcyBhbnlbXSxcbiAgY3VycmVudExhbmd1YWdlOiB7XG4gICAgdmFsdWU6IG51bGwsIC8vIHByaW1hcnkga2V5XG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIHByb3BlcnRpZXM6IHt9LFxuICAgIGlzX2RlZmF1bHQ6IGZhbHNlLFxuICAgIHBhcmFtZXRlcl9pZDogJycsXG4gICAgaWQ6IG51bGwsIC8vIHByaW1hcnkga2V5XG4gICAgc3RhdHVzOiBmYWxzZVxuICB9IGFzIFBhcmFtZXRlck9wdGlvbixcbiAgc2VsZWN0ZWRSb3dzOiBbXSBhcyBudW1iZXJbXSxcbiAgdXNlclZhbHVlOiB7XG4gICAgZHJhd2luZzoge1xuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgZW50aXR5X2lkOiAnQWxsJyxcbiAgICAgIHZhbHVlOiAtMVxuICAgIH0gYXMgRGF0YUZvckRyb3Bkb3duLFxuICAgIGpvYjoge1xuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9IGFzIFBhcmFtZXRlck9wdGlvblxuICB9LFxuICBlcnJvcjoge1xuICAgIG1lc3NhZ2U6ICcnLFxuICAgIHN0YXR1c0NvZGU6IG51bGwsXG4gICAgb3BlbjogZmFsc2VcbiAgfSBhcyBFcnJvckxvZ1xufVxuXG5jb25zdCBjb21tb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZSxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldFNlYXJjaFF1ZXJ5KHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XG4gICAgICBzdGF0ZS5zZWFyY2hRdWVyeSA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldEVudGl0eShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248RW50aXR5Pikge1xuICAgICAgc3RhdGUuZW50aXR5ID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0TG9hZGluZ1RhYmxlKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUubG9hZGluZy50YWJsZSA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldExvYWRpbmdQYWdlKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUubG9hZGluZy5wYWdlID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0VGFibGVTdGF0ZShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFydGlhbDxMaXN0RGF0YT4+KSB7XG4gICAgICBzdGF0ZS50YWJsZVN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZS50YWJsZVN0YXRlLFxuICAgICAgICAuLi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRFcnJvck1lc3NhZ2Uoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XG4gICAgICBzdGF0ZS5tZXNzYWdlU3RhdGUubWVzc2FnZSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICBzdGF0ZS5tZXNzYWdlU3RhdGUuc3RhdHVzID0gJ2Vycm9yJ1xuICAgICAgc3RhdGUubWVzc2FnZVN0YXRlLmRpc3BsYXkgPSB0cnVlXG4gICAgfSxcbiAgICBzZXRTdWNjZXNzTWVzc2FnZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcbiAgICAgIHN0YXRlLm1lc3NhZ2VTdGF0ZS5tZXNzYWdlID0gYWN0aW9uLnBheWxvYWRcbiAgICAgIHN0YXRlLm1lc3NhZ2VTdGF0ZS5zdGF0dXMgPSAnc3VjY2VzcydcbiAgICAgIHN0YXRlLm1lc3NhZ2VTdGF0ZS5kaXNwbGF5ID0gdHJ1ZVxuICAgIH0sXG4gICAgc2V0RGlzcGxheU1lc3NhZ2Uoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUubWVzc2FnZVN0YXRlLmRpc3BsYXkgPSBhY3Rpb24ucGF5bG9hZFxuICAgIH0sXG4gICAgc2V0RWRpdFJvd3Moc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGFueVtdPikge1xuICAgICAgc3RhdGUuZWRpdFJvd3MgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRVc2VyVmFsdWVEcmF3aW5nKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxEYXRhRm9yRHJvcGRvd24+KSB7XG4gICAgICBzdGF0ZS51c2VyVmFsdWUuZHJhd2luZyA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldFVzZXJWYWx1ZUpvYihzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFyYW1ldGVyT3B0aW9uPikge1xuICAgICAgc3RhdGUudXNlclZhbHVlLmpvYiA9IHBheWxvYWRcbiAgICB9LFxuICAgIHJlc2V0VXNlclZhbHVlKHN0YXRlKSB7XG4gICAgICBzdGF0ZS51c2VyVmFsdWUgPSBpbml0aWFsU3RhdGUudXNlclZhbHVlXG4gICAgfSxcbiAgICBzZXRTZWxlY3RlZFJvd3Moc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPG51bWJlcltdPikge1xuICAgICAgc3RhdGUuc2VsZWN0ZWRSb3dzID0gcGF5bG9hZFxuICAgIH0sXG4gICAgcmVzZXRNZXNzYWdlU3RhdGUoc3RhdGUpIHtcbiAgICAgIHN0YXRlLm1lc3NhZ2VTdGF0ZSA9IGluaXRpYWxTdGF0ZS5tZXNzYWdlU3RhdGVcbiAgICB9LFxuICAgIHNldEN1cnJlbnRMYW5ndWFnZShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFyYW1ldGVyT3B0aW9uPikge1xuICAgICAgc3RhdGUuY3VycmVudExhbmd1YWdlID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0RXJyb3Ioc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPHsgbWVzc2FnZTogc3RyaW5nOyBzdGF0dXM6IG51bWJlciB9Pikge1xuICAgICAgY29uc3QgeyBtZXNzYWdlLCBzdGF0dXMgfSA9IHBheWxvYWRcbiAgICAgIGlmIChzdGF0dXMgPT09IFN0YXR1c0NvZGUuQkFEX1JFUVVFU1QgJiYgbWVzc2FnZSAhPT0gJ0JhZCByZXF1ZXN0Jykge1xuICAgICAgICBzdGF0ZS5tZXNzYWdlU3RhdGUubWVzc2FnZSA9IG1lc3NhZ2VcbiAgICAgICAgc3RhdGUubWVzc2FnZVN0YXRlLnN0YXR1cyA9ICdlcnJvcidcbiAgICAgICAgc3RhdGUubWVzc2FnZVN0YXRlLmRpc3BsYXkgPSB0cnVlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgc3RhdGUuZXJyb3IgPSB7XG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIHN0YXR1c0NvZGU6IHN0YXR1cyB8fCAndW5rbm93JyxcbiAgICAgICAgb3BlbjogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0T3BlbkVycm9yRGlhbG9nKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUuZXJyb3Iub3BlbiA9IHBheWxvYWRcbiAgICB9XG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IHtcbiAgICBbcmVzZXRTdGF0ZS50eXBlXSgpIHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGVcbiAgICB9XG4gIH1cbn0pXG5cbi8vIFNlbGVjdG9yc1xuZXhwb3J0IGNvbnN0IHNlbGVjdFN0YXRlID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlW25hbWVdXG5leHBvcnQgY29uc3Qgc2VsZWN0U2VhcmNoUXVlcnkgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5zZWFyY2hRdWVyeSlcbmV4cG9ydCBjb25zdCBzZWxlY3RFbnRpdHkgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5lbnRpdHkpXG5leHBvcnQgY29uc3Qgc2VsZWN0TG9hZGluZyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmxvYWRpbmcpXG5leHBvcnQgY29uc3Qgc2VsZWN0VGFibGVTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLnRhYmxlU3RhdGUpXG5leHBvcnQgY29uc3Qgc2VsZWN0TWVzc2FnZVN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUubWVzc2FnZVN0YXRlKVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlclZhbHVlRHJhd2luZyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLnVzZXJWYWx1ZS5kcmF3aW5nKVxuZXhwb3J0IGNvbnN0IHNlbGVjdFVzZXJWYWx1ZUpvYiA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLnVzZXJWYWx1ZS5qb2IpXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RFZGl0Um93cyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmVkaXRSb3dzKVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0U2VsZWN0ZWRSb3dzID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWRSb3dzKVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0Q3VycmVudExhbmd1YWdlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudExhbmd1YWdlKVxuZXhwb3J0IGNvbnN0IHNlbGVjdEVycm9yID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuZXJyb3IpXG5cbmV4cG9ydCBjb25zdCB7IGFjdGlvbnMgfSA9IGNvbW1vblNsaWNlXG5cbi8vIFNhZ2EgYWN0aW9uc1xuZXhwb3J0IGNvbnN0IHNhZ2FFeGVjdXRlT3BlcmF0aW9uID0gY3JlYXRlQWN0aW9uPHtcbiAgZW50aXR5OiBFbnRpdHlcbiAgb3BlcmF0aW9uOiBzdHJpbmdcbiAgb3BlcmF0aW9uTGlzdDogbnVtYmVyW10gfCBQYXlsb2FkT3BlcmF0aW9uW11cbn0+KGAke25hbWV9LyR7YWN0aW9uVHlwZXMuRVhFQ1VURV9PUEVSQVRJT059YClcbmV4cG9ydCBjb25zdCBzYWdhR2V0SGlzdG9yeUxvZ3MgPSBjcmVhdGVBY3Rpb248eyBlbnRpdHlJZDogbnVtYmVyOyBlbnRpdHk6IEVudGl0eSB9PihcbiAgYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5HRVRfSElTVE9SWX1gXG4pXG5leHBvcnQgY29uc3Qgc2FnYVVwZGF0ZU11bHRpcGxlID0gY3JlYXRlQWN0aW9uPGFueT4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5VUERBVEVfTVVMVElQTEV9YClcbmV4cG9ydCBjb25zdCBzYWdhQ2FuY2VsQmFja2dyb3VuZEpvYiA9IGNyZWF0ZUFjdGlvbjxzdHJpbmc+KGAke25hbWV9L0NBTkNFTF9CQUNLR1JPVU5EX0pPQmApXG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1vblNsaWNlXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQWN0aW9uLCBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnXG5cbmltcG9ydCB0eXBlIHsgUm9vdFJlZHVjZXJUeXBlIH0gZnJvbSAnLi9yb290UmVkdWNlcidcbmltcG9ydCB0eXBlIHtcbiAgQ3VycmVuY3lJbml0RGF0YUZvckNFLFxuICBDdXJyZW5jeURldGFpbCxcbiAgQ3VycmVuY3lQZXJtaXNzaW9ucyxcbiAgQ3VycmVuY3lJbml0RGF0YUZvckxpc3QsXG4gIEJhc2VDdXJyZW5jeVxufSBmcm9tICdAL3R5cGVzL0N1cnJlbmN5J1xuaW1wb3J0IHR5cGUgeyBFbnRpdHksIEhpc3RvcnlMb2cgfSBmcm9tICdAL3R5cGVzL0NvbW1vbidcblxuZXhwb3J0IGNvbnN0IG5hbWU6IEVudGl0eSA9ICdjdXJyZW5jeSdcbmV4cG9ydCBjb25zdCByZXNldFN0YXRlID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7YWN0aW9uVHlwZXMuUkVTRVRfU1RBVEV9YClcblxuZXhwb3J0IGNvbnN0IGN1cnJlbmN5RGV0YWlsID0ge1xuICBjdXJyZW5jeV9pZDogJycsXG4gIGRlc2NyaXB0aW9uOiAnJyxcbiAgbXVsdGlwbGllcjogbnVsbCxcbiAgcmF0ZTogJycsXG4gIHJvdW5kX3RvOiBudWxsLFxuICBiYXNlX2N1cnJlbmN5OiBudWxsLFxuICBpc19iYXNlX3JhdGVfbW9kZTogZmFsc2Vcbn0gYXMgQ3VycmVuY3lEZXRhaWxcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBkYXRhTGlzdDogW10gYXMgQ3VycmVuY3lEZXRhaWxbXSxcbiAgaW5pdERhdGFGb3JMaXN0OiB7XG4gICAgcGVybWlzc2lvbnM6IHtcbiAgICAgIGN1cnJlbmN5OiBudWxsXG4gICAgfSxcbiAgICBiYXNlX2N1cnJlbmN5X2xpc3Q6IFtdLFxuICAgIHVzZXJfYmFzZV9jdXJyZW5jeToge1xuICAgICAgaWQ6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBjdXJyZW5jeV9pZDogJydcbiAgICB9LFxuICAgIHdpa2lfcGFnZTogJycsXG4gICAgY29sdW1uX3Rvb2x0aXBzOiB7fVxuICB9IGFzIEN1cnJlbmN5SW5pdERhdGFGb3JMaXN0LFxuICBpbml0RGF0YUZvckNFOiB7XG4gICAgbXVsdGlwbGllcl9vcHRpb25zOiBbXSxcbiAgICByb3VuZF90b19vcHRpb25zOiBbXSxcbiAgICBiYXNlX2N1cnJlbmN5OiB7XG4gICAgICBjdXJyZW5jeV9pZDogJycsXG4gICAgICBpZDogbnVsbFxuICAgIH0sXG4gICAgd2lraV9wYWdlOiAnJ1xuICB9IGFzIEN1cnJlbmN5SW5pdERhdGFGb3JDRSxcbiAgZGV0YWlsOiBjdXJyZW5jeURldGFpbCxcbiAgZGlhbG9nU3RhdGU6IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBoaXN0b3J5TG9nczogW10gYXMgSGlzdG9yeUxvZ1tdXG4gIH1cbn1cblxuY29uc3QgY3VycmVuY3lTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZSxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldERpYWxvZ1N0YXRlKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxQYXJ0aWFsPHR5cGVvZiBpbml0aWFsU3RhdGUuZGlhbG9nU3RhdGU+Pikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLmRpYWxvZ1N0YXRlLFxuICAgICAgICAuLi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSxcbiAgICBzZXREaWFsb2dTdGF0ZU9wZW4oc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZS5vcGVuID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0RGlhbG9nU3RhdGVMb2FkaW5nKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUubG9hZGluZyA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldEhpc3RvcnlMb2dzKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxIaXN0b3J5TG9nW10+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZS5oaXN0b3J5TG9ncyA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERhdGFMaXN0KHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxDdXJyZW5jeURldGFpbFtdPikge1xuICAgICAgc3RhdGUuZGF0YUxpc3QgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRJbml0RGF0YUZvckxpc3Qoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPEN1cnJlbmN5SW5pdERhdGFGb3JMaXN0Pikge1xuICAgICAgc3RhdGUuaW5pdERhdGFGb3JMaXN0ID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0SW5pdERhdGFGb3JDRShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248Q3VycmVuY3lJbml0RGF0YUZvckNFPikge1xuICAgICAgc3RhdGUuaW5pdERhdGFGb3JDRSA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERldGFpbChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFydGlhbDxDdXJyZW5jeURldGFpbD4+KSB7XG4gICAgICBzdGF0ZS5kZXRhaWwgPSB7XG4gICAgICAgIC4uLnN0YXRlLmRldGFpbCxcbiAgICAgICAgLi4ucGF5bG9hZFxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0UGVybWlzc2lvbnMoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPEN1cnJlbmN5UGVybWlzc2lvbnM+KSB7XG4gICAgICBzdGF0ZS5pbml0RGF0YUZvckxpc3QucGVybWlzc2lvbnMuY3VycmVuY3kgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRVc2VyQmFzZUN1cnJlbmN5KHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxCYXNlQ3VycmVuY3k+KSB7XG4gICAgICBzdGF0ZS5pbml0RGF0YUZvckxpc3QudXNlcl9iYXNlX2N1cnJlbmN5ID0gcGF5bG9hZFxuICAgIH0sXG4gICAgcmVzZXREZXRhaWwoc3RhdGUpIHtcbiAgICAgIHN0YXRlLmRldGFpbCA9IHtcbiAgICAgICAgLi4uY3VycmVuY3lEZXRhaWxcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IHtcbiAgICBbcmVzZXRTdGF0ZS50eXBlXSgpIHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGVcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7IGFjdGlvbnMgfSA9IGN1cnJlbmN5U2xpY2VcblxuLy8gU2FnYSBhY3Rpb25zXG5cbmV4cG9ydCBjb25zdCBzYWdhR2V0TGlzdCA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkdFVF9MSVNUfWApXG5leHBvcnQgY29uc3Qgc2FnYU9wZW5DcmVhdGVEaWFsb2cgPSBjcmVhdGVBY3Rpb24oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5PUEVOX0NSRUFURV9ESUFMT0d9YClcbmV4cG9ydCBjb25zdCBzYWdhT3BlblVwZGF0ZURpYWxvZyA9IGNyZWF0ZUFjdGlvbjxudW1iZXI+KGAke25hbWV9LyR7YWN0aW9uVHlwZXMuT1BFTl9VUERBVEVfRElBTE9HfWApXG5leHBvcnQgY29uc3Qgc2FnYUNsb3NlRGlhbG9nID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7YWN0aW9uVHlwZXMuQ0xPU0VfRElBTE9HfWApXG5leHBvcnQgY29uc3Qgc2FnYUNyZWF0ZSA9IGNyZWF0ZUFjdGlvbjxDdXJyZW5jeURldGFpbD4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5DUkVBVEV9YClcbmV4cG9ydCBjb25zdCBzYWdhVXBkYXRlID0gY3JlYXRlQWN0aW9uPHsgaWQ6IG51bWJlcjsgZm9ybURhdGE6IEN1cnJlbmN5RGV0YWlsIH0+KGAke25hbWV9LyR7YWN0aW9uVHlwZXMuVVBEQVRFfWApXG5leHBvcnQgY29uc3Qgc2FnYUNoYW5nZVVzZXJDdXJyZW5jeSA9IGNyZWF0ZUFjdGlvbjxCYXNlQ3VycmVuY3k+KGAke25hbWV9L0NIQU5HRV9VU0VSX0NVUlJFTkNZYClcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFN0YXRlID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlW25hbWVdXG5leHBvcnQgY29uc3Qgc2VsZWN0RGF0YUxpc3QgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5kYXRhTGlzdClcbmV4cG9ydCBjb25zdCBzZWxlY3RJbml0RGF0YUZvckxpc3QgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5pbml0RGF0YUZvckxpc3QpXG5leHBvcnQgY29uc3Qgc2VsZWN0RGlhbG9nU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5kaWFsb2dTdGF0ZSlcbmV4cG9ydCBjb25zdCBzZWxlY3RJbml0RGF0YUZvckNFID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuaW5pdERhdGFGb3JDRSlcbmV4cG9ydCBjb25zdCBzZWxlY3REZXRhaWwgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5kZXRhaWwpXG5leHBvcnQgY29uc3Qgc2VsZWN0UGVybWlzc2lvbnMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5pbml0RGF0YUZvckxpc3QucGVybWlzc2lvbnMuY3VycmVuY3kpXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlckJhc2VDdXJyZW5jeSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmluaXREYXRhRm9yTGlzdC51c2VyX2Jhc2VfY3VycmVuY3kpXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJlbmN5U2xpY2VcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVTZWxlY3RvciwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnQC91dGlscy9jb25zdGFudCdcbmltcG9ydCB7IGdldERlZmF1bHRWYWx1ZXMgfSBmcm9tICdAL3V0aWxzL2dldERlZmF1bHRWYWx1ZXMnXG5cbmltcG9ydCB0eXBlIHsgUm9vdFJlZHVjZXJUeXBlIH0gZnJvbSAnLi9yb290UmVkdWNlcidcbmltcG9ydCB0eXBlIHsgRW50aXR5LCBIaXN0b3J5TG9nLCBQYXJhbWV0ZXJPcHRpb24gfSBmcm9tICdAL3R5cGVzL0NvbW1vbidcbmltcG9ydCB0eXBlIHtcbiAgRHJhd2luZ0luaXREYXRhRm9yQ0UsXG4gIERyYXdpbmdJbml0RGF0YUZvckxpc3QsXG4gIERyYXdpbmdJdGVtLFxuICBEcmF3aW5nUGVybWlzc2lvbnMsXG4gIERyYXdpbmdEZXRhaWwsXG4gIFJldmlzaW9uRGV0YWlsXG59IGZyb20gJ0AvdHlwZXMvRHJhd2luZydcbmltcG9ydCB0eXBlIHsgUGFydEVudGl0eSB9IGZyb20gJ0AvdHlwZXMvUGFydCdcblxuZXhwb3J0IGNvbnN0IG5hbWU6IEVudGl0eSA9ICdkcmF3aW5nJ1xuZXhwb3J0IGNvbnN0IHJlc2V0U3RhdGUgPSBjcmVhdGVBY3Rpb24oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5SRVNFVF9TVEFURX1gKVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBkcmF3aW5nR3JvdXBJZDogLTEsXG4gIGRhdGFMaXN0OiBbXSBhcyBEcmF3aW5nSXRlbVtdLFxuICBkZXRhaWw6IHtcbiAgICBqb2JfaWQ6IG51bGwsXG4gICAgZHJhd2luZ19pZDogJycsXG4gICAgcmV2aXNpb246ICdBJyxcbiAgICBkcmF3aW5nX2Zvcm1hdDogbnVsbCxcbiAgICBkcmF3aW5nX3B1cnBvc2U6IG51bGwsXG4gICAgZmlsZV9wcmVmaXg6IG51bGwsXG4gICAgZmlsZV90eXBlOiBudWxsLFxuICAgIGFzc29jaWF0ZWRfZG9jdW1lbnRzOiBbXSxcbiAgICBjdXN0b21lcl9pZDogJycsXG4gICAgYWRkaXRpb25hbF9hdHRyaWJ1dGVzOiB7fSxcbiAgICBkZXNjcmlwdGlvbnM6IFtdLFxuICAgIGV4Y2x1ZGVfZnJvbV9jdXN0b21lcjogZmFsc2UsXG4gICAgZXhjbHVkZV9mcm9tX290aGVyOiBmYWxzZSxcbiAgICBleGNsdWRlX2Zyb21fc3VwcGxpZXI6IGZhbHNlLFxuICAgIGl0ZW1fbGlzdDogW10sXG4gICAgdGFnX2xpc3Q6IFtdLFxuICAgIGlzX2RldGFpbF9kcmF3aW5nOiBmYWxzZSxcbiAgICBpc19kcmF3aW5nOiB0cnVlLFxuICAgIGlzX290aGVyX2RvY3VtZW50OiBmYWxzZSxcbiAgICBpc19zY2hlbWF0aWM6IGZhbHNlLFxuICAgIGlzX3NwZWNpZmljYXRpb246IGZhbHNlXG4gIH0gYXMgRHJhd2luZ0RldGFpbCxcbiAgZGlhbG9nU3RhdGU6IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICB0YWI6IDAsXG4gICAgaGlzdG9yeUxvZ3M6IFtdIGFzIEhpc3RvcnlMb2dbXVxuICB9LFxuICBpbml0RGF0YUZvckxpc3Q6IHtcbiAgICBkcmF3aW5nX2dyb3VwczogW3sgZGVzY3JpcHRpb246ICdBbGwnLCBncm91cF9pZDogbnVsbCwgY2hpbGRyZW46IFtdIH1dLFxuICAgIGpvYnM6IFtdLFxuICAgIHBlcm1pc3Npb25zOiB7XG4gICAgICBkcmF3aW5nOiBudWxsXG4gICAgfSxcbiAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICBQTExBOiBbXVxuICAgIH0sXG4gICAgd2lraV9wYWdlOiAnJyxcbiAgICBjb2x1bW5fdG9vbHRpcHM6IHt9XG4gIH0gYXMgRHJhd2luZ0luaXREYXRhRm9yTGlzdCxcbiAgaW5pdERhdGFGb3JDRToge1xuICAgIHBhcmFtZXRlcnM6IHtcbiAgICAgIERXQVQ6IFtdLFxuICAgICAgRFdQVTogW10sIC8vIGRyYXdpbmcgcHVycG9zZVxuICAgICAgRlBSRTogW10sIC8vIGZpbGUgbmFtZSBwcmVmaXhcbiAgICAgIEZUWVA6IFtdLCAvLyBmaWxlIHR5cGVcbiAgICAgIFBMRk86IFtdLCAvLyBmb3JtYXRcbiAgICAgIFBMTEE6IFtdLCAvLyBkZXNjcmlwdGlvbnNcbiAgICAgIFBMQVQ6IFtdIC8vIGV4dGVuZGVkIHByb3BlcnRpZXNcbiAgICB9LFxuICAgIHdpa2lfcGFnZTogJydcbiAgfSBhcyBEcmF3aW5nSW5pdERhdGFGb3JDRSxcbiAgcmV2aXNpb25EaWFsb2c6IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBkZXRhaWw6IHtcbiAgICAgIG5ld19yZXZpc2lvbjogJycsXG4gICAgICByZWFzb246ICcnLFxuICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgfSBhcyBSZXZpc2lvbkRldGFpbFxuICB9XG59XG5cbmNvbnN0IGRyYXdpbmcgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWUsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXREYXRhTGlzdChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248RHJhd2luZ0l0ZW1bXT4pIHtcbiAgICAgIHN0YXRlLmRhdGFMaXN0ID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0RGlhbG9nU3RhdGUoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFBhcnRpYWw8dHlwZW9mIGluaXRpYWxTdGF0ZS5kaWFsb2dTdGF0ZT4+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUuZGlhbG9nU3RhdGUsXG4gICAgICAgIC4uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldERpYWxvZ1N0YXRlT3BlbihzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pIHtcbiAgICAgIHN0YXRlLmRpYWxvZ1N0YXRlLm9wZW4gPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXREaWFsb2dTdGF0ZUxvYWRpbmcoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZS5sb2FkaW5nID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0RGlhbG9nU3RhdGVUYWIoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcbiAgICAgIHN0YXRlLmRpYWxvZ1N0YXRlLnRhYiA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldEluaXREYXRhRm9yTGlzdChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248RHJhd2luZ0luaXREYXRhRm9yTGlzdD4pIHtcbiAgICAgIHN0YXRlLmluaXREYXRhRm9yTGlzdCA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldFBlcm1pc3Npb25zKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxEcmF3aW5nUGVybWlzc2lvbnM+KSB7XG4gICAgICBzdGF0ZS5pbml0RGF0YUZvckxpc3QucGVybWlzc2lvbnMuZHJhd2luZyA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldEluaXREYXRhRm9yQ0Uoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPERyYXdpbmdJbml0RGF0YUZvckNFPikge1xuICAgICAgc3RhdGUuaW5pdERhdGFGb3JDRSA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldEhpc3RvcnlMb2dzKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxIaXN0b3J5TG9nW10+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZS5oaXN0b3J5TG9ncyA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERldGFpbChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFydGlhbDxEcmF3aW5nRGV0YWlsPj4pIHtcbiAgICAgIHN0YXRlLmRldGFpbCA9IHtcbiAgICAgICAgLi4uc3RhdGUuZGV0YWlsLFxuICAgICAgICAuLi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSxcbiAgICBzZXREcmF3aW5nR3JvdXBJZChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xuICAgICAgc3RhdGUuZHJhd2luZ0dyb3VwSWQgPSBwYXlsb2FkXG4gICAgfSxcbiAgICByZXNldERldGFpbChzdGF0ZSwgeyBwYXlsb2FkOiB7IHVzZXJKb2IgfSB9KSB7XG4gICAgICBjb25zdCBkZXRhaWxEZWZhdWx0VmFsdWUgPSBnZXREZWZhdWx0VmFsdWVzKFxuICAgICAgICBzdGF0ZS5pbml0RGF0YUZvckNFLnBhcmFtZXRlcnMsXG4gICAgICAgIHtcbiAgICAgICAgICBkcmF3aW5nX3B1cnBvc2U6ICdEV1BVJyxcbiAgICAgICAgICBmaWxlX3ByZWZpeDogJ0ZQUkUnLFxuICAgICAgICAgIGZpbGVfdHlwZTogJ0ZUWVAnLFxuICAgICAgICAgIGRyYXdpbmdfZm9ybWF0OiAnUExGTydcbiAgICAgICAgfSxcbiAgICAgICAgaW5pdGlhbFN0YXRlLmRldGFpbFxuICAgICAgKVxuICAgICAgZGV0YWlsRGVmYXVsdFZhbHVlLmpvYl9pZCA9IHVzZXJKb2IudmFsdWUgPiAtMSA/IHVzZXJKb2IudmFsdWUgOiBudWxsXG4gICAgICBzdGF0ZS5kZXRhaWwgPSB7IC4uLmRldGFpbERlZmF1bHRWYWx1ZSB9XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZS50YWIgPSAwXG4gICAgfSxcbiAgICBzZXRSZXZpc2lvbkRpYWxvZ09wZW4oc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5yZXZpc2lvbkRpYWxvZy5vcGVuID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0UmV2aXNpb25EaWFsb2dMb2FkaW5nKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUucmV2aXNpb25EaWFsb2cubG9hZGluZyA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldFJldmlzaW9uRGlhbG9nRGV0YWlsKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxQYXJ0aWFsPFJldmlzaW9uRGV0YWlsPj4pIHtcbiAgICAgIHN0YXRlLnJldmlzaW9uRGlhbG9nLmRldGFpbCA9IHtcbiAgICAgICAgLi4uc3RhdGUucmV2aXNpb25EaWFsb2cuZGV0YWlsLFxuICAgICAgICAuLi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSxcbiAgICByZXNldFJldmlzaW9uRGlhbG9nRGV0YWlsKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5yZXZpc2lvbkRpYWxvZy5kZXRhaWwgPSB7IC4uLmluaXRpYWxTdGF0ZS5yZXZpc2lvbkRpYWxvZy5kZXRhaWwgfVxuICAgIH1cbiAgfSxcbiAgZXh0cmFSZWR1Y2Vyczoge1xuICAgIFtyZXNldFN0YXRlLnR5cGVdKCkge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZVxuICAgIH1cbiAgfVxufSlcbi8vIEFjdGlvbnNcbmV4cG9ydCBjb25zdCB7IGFjdGlvbnMgfSA9IGRyYXdpbmdcblxuLy8gU2FnYSBhY3Rpb25zXG5leHBvcnQgY29uc3Qgc2FnYUdldExpc3QgPSBjcmVhdGVBY3Rpb24oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5HRVRfTElTVH1gKVxuZXhwb3J0IGNvbnN0IHNhZ2FPcGVuQ3JlYXRlRGlhbG9nID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7YWN0aW9uVHlwZXMuT1BFTl9DUkVBVEVfRElBTE9HfWApXG5leHBvcnQgY29uc3Qgc2FnYU9wZW5VcGRhdGVEaWFsb2cgPSBjcmVhdGVBY3Rpb248bnVtYmVyPihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLk9QRU5fVVBEQVRFX0RJQUxPR31gKVxuZXhwb3J0IGNvbnN0IHNhZ2FPcGVuQ3JlYXRlUGFydERpYWxvZyA9IGNyZWF0ZUFjdGlvbjxQYXJ0RW50aXR5PihgJHtuYW1lfS9PUEVOX0NSRUFURV9QQVJUX0RJQUxPR2ApXG5leHBvcnQgY29uc3Qgc2FnYUNoYW5nZVVzZXJKb2IgPSBjcmVhdGVBY3Rpb248UGFyYW1ldGVyT3B0aW9uPihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkNIQU5HRV9VU0VSX0pPQn1gKVxuZXhwb3J0IGNvbnN0IHNhZ2FDbG9zZURpYWxvZyA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkNMT1NFX0RJQUxPR31gKVxuZXhwb3J0IGNvbnN0IHNhZ2FDcmVhdGUgPSBjcmVhdGVBY3Rpb248RHJhd2luZ0RldGFpbD4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5DUkVBVEV9YClcbmV4cG9ydCBjb25zdCBzYWdhVXBkYXRlID0gY3JlYXRlQWN0aW9uPHsgaWQ6IG51bWJlcjsgZHJhd2luZzogRHJhd2luZ0RldGFpbCB9PihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLlVQREFURX1gKVxuZXhwb3J0IGNvbnN0IHNhZ2FPcGVuUmV2RGlhbG9nID0gY3JlYXRlQWN0aW9uPHN0cmluZz4oYCR7bmFtZX0vT1BFTl9SRVZfRElBTE9HYClcbmV4cG9ydCBjb25zdCBzYWdhU2F2ZU5ld1JldiA9IGNyZWF0ZUFjdGlvbjx7IHJldmlzaW9uOiBSZXZpc2lvbkRldGFpbDsgZHJhd2luZ0lkOiBudW1iZXIgfT4oYCR7bmFtZX0vU0FWRV9ORVdfUkVWYClcblxuLy8gU2VsZWN0b3JzXG5jb25zdCBzZWxlY3RTdGF0ZSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZVtuYW1lXVxuZXhwb3J0IGNvbnN0IHNlbGVjdERpYWxvZ1N0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuZGlhbG9nU3RhdGUpXG5leHBvcnQgY29uc3Qgc2VsZWN0RGF0YUxpc3QgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5kYXRhTGlzdClcbmV4cG9ydCBjb25zdCBzZWxlY3RQZXJtaXNzaW9ucyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmluaXREYXRhRm9yTGlzdC5wZXJtaXNzaW9ucy5kcmF3aW5nKVxuZXhwb3J0IGNvbnN0IHNlbGVjdERyYXdpbmdHcm91cHMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHsgaW5pdERhdGFGb3JMaXN0IH0pID0+IHtcbiAgY29uc3QgeyBkcmF3aW5nX2dyb3VwcyB9ID0gaW5pdERhdGFGb3JMaXN0XG4gIHJldHVybiBkcmF3aW5nX2dyb3Vwc1swXVxufSlcblxuZXhwb3J0IGNvbnN0IHNlbGVjdERldGFpbCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoeyBkZXRhaWwgfSkgPT4gZGV0YWlsKVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0SW5pdERhdGFGb3JMaXN0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuaW5pdERhdGFGb3JMaXN0KVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0SW5pdERhdGFGb3JDRSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoeyBpbml0RGF0YUZvckNFIH0pID0+IGluaXREYXRhRm9yQ0UpXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RQYXJhbWV0ZXJzID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsICh7IGluaXREYXRhRm9yQ0UgfSkgPT4gaW5pdERhdGFGb3JDRS5wYXJhbWV0ZXJzKVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0RHJhd2luZ0dyb3VwSWQgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHsgZHJhd2luZ0dyb3VwSWQgfSkgPT4gZHJhd2luZ0dyb3VwSWQpXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RSZXZpc2lvbkRpYWxvZyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLnJldmlzaW9uRGlhbG9nKVxuXG5leHBvcnQgZGVmYXVsdCBkcmF3aW5nXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlQWN0aW9uLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnXG5cbmltcG9ydCB0eXBlIHsgUm9vdFJlZHVjZXJUeXBlIH0gZnJvbSAnLi9yb290UmVkdWNlcidcbmltcG9ydCB0eXBlIHtcbiAgRXF1aXZhbGVuY2VJbml0RGF0YUZvckxpc3QsXG4gIEVxdWl2YWxlbmNlRGV0YWlsLFxuICBFcXVpdmFsZW5jZUluaXREYXRhRm9yQ0UsXG4gIEVxdWl2YWxlbmNlVHlwZVxufSBmcm9tICdAL3R5cGVzL0VxdWl2YWxlbmNlJ1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdlcXVpdmFsZW5jZSdcbmV4cG9ydCBjb25zdCByZXNldFN0YXRlID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7YWN0aW9uVHlwZXMuUkVTRVRfU1RBVEV9YClcblxuZXhwb3J0IGNvbnN0IGRpYWxvZ1N0YXRlID0ge1xuICBvcGVuOiBmYWxzZSxcbiAgbG9hZGluZzogZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWl2YWxlbmNlRGV0YWlsID0ge1xuICBlcXVpdl9pZDogbnVsbCxcbiAgZGVzY3JpcHRpb246ICcnLFxuICBlcXVpdl90eXBlOiBudWxsLFxuICBpbWFnZTogJycsXG4gIHN0YW5kYXJkczogW11cbn0gYXMgRXF1aXZhbGVuY2VEZXRhaWxcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZXF1aXZhbGVuY2VUeXBlOiAnJyBhcyBFcXVpdmFsZW5jZVR5cGUsXG4gIGRpYWxvZ1N0YXRlLFxuICBkYXRhTGlzdDogW10sXG4gIGluaXREYXRhRm9yTGlzdDoge1xuICAgIHBlcm1pc3Npb25zOiB7XG4gICAgICBtYW51ZmFjdHVyaW5nX3N0YW5kYXJkOiBudWxsLFxuICAgICAgbWF0ZXJpYWxfc3RhbmRhcmQ6IG51bGxcbiAgICB9LFxuICAgIHdpa2lfcGFnZToge1xuICAgICAgbWFudWZhY3R1cmluZ19zdGFuZGFyZDogJycsXG4gICAgICBtYXRlcmlhbF9zdGFuZGFyZDogJydcbiAgICB9LFxuICAgIGNvbHVtbl90b29sdGlwczoge1xuICAgICAgbWFudWZhY3R1cmluZ19zdGFuZGFyZDoge30sXG4gICAgICBtYXRlcmlhbF9zdGFuZGFyZDoge31cbiAgICB9XG4gIH0gYXMgRXF1aXZhbGVuY2VJbml0RGF0YUZvckxpc3QsXG4gIGluaXREYXRhRm9yQ0U6IHtcbiAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICBQTE5POiBbXVxuICAgIH0sXG4gICAgbmV4dF9jb2RlOiAwLFxuICAgIHdpa2lfcGFnZTogJydcbiAgfSBhcyBFcXVpdmFsZW5jZUluaXREYXRhRm9yQ0UsXG4gIGRldGFpbDogZXF1aXZhbGVuY2VEZXRhaWxcbn1cblxuY29uc3QgZXF1aXZhbGVuY2VTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZSxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldEVxdWl2YWxlbmNlVHlwZShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248RXF1aXZhbGVuY2VUeXBlPikge1xuICAgICAgc3RhdGUuZXF1aXZhbGVuY2VUeXBlID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0RGlhbG9nU3RhdGUoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFBhcnRpYWw8dHlwZW9mIGluaXRpYWxTdGF0ZS5kaWFsb2dTdGF0ZT4+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUuZGlhbG9nU3RhdGUsXG4gICAgICAgIC4uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldERpYWxvZ1N0YXRlT3BlbihzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pIHtcbiAgICAgIHN0YXRlLmRpYWxvZ1N0YXRlLm9wZW4gPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXREaWFsb2dTdGF0ZUxvYWRpbmcoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZS5sb2FkaW5nID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0RGF0YUxpc3Qoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPEVxdWl2YWxlbmNlRGV0YWlsW10+KSB7XG4gICAgICBzdGF0ZS5kYXRhTGlzdCA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERldGFpbChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFydGlhbDxFcXVpdmFsZW5jZURldGFpbD4+KSB7XG4gICAgICBzdGF0ZS5kZXRhaWwgPSB7XG4gICAgICAgIC4uLnN0YXRlLmRldGFpbCxcbiAgICAgICAgLi4ucGF5bG9hZFxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0SW5pdERhdGFGb3JDRShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248RXF1aXZhbGVuY2VJbml0RGF0YUZvckNFPikge1xuICAgICAgc3RhdGUuaW5pdERhdGFGb3JDRSA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldEluaXREYXRhRm9yTGlzdChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248RXF1aXZhbGVuY2VJbml0RGF0YUZvckxpc3Q+KSB7XG4gICAgICBzdGF0ZS5pbml0RGF0YUZvckxpc3QgPSBwYXlsb2FkXG4gICAgfSxcbiAgICByZXNldERldGFpbChzdGF0ZSkge1xuICAgICAgc3RhdGUuZGV0YWlsID0geyAuLi5lcXVpdmFsZW5jZURldGFpbCB9XG4gICAgfSxcbiAgICBzZXROZXh0Q29kZShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xuICAgICAgc3RhdGUuaW5pdERhdGFGb3JDRS5uZXh0X2NvZGUgPSBwYXlsb2FkXG4gICAgfVxuICB9LFxuICBleHRyYVJlZHVjZXJzOiB7XG4gICAgW3Jlc2V0U3RhdGUudHlwZV0oKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlXG4gICAgfVxuICB9XG59KVxuXG4vLyBBY3Rpb25zXG5leHBvcnQgY29uc3QgeyBhY3Rpb25zIH0gPSBlcXVpdmFsZW5jZVNsaWNlXG5cbi8vIFNhZ2EgYWN0aW9uc1xuZXhwb3J0IGNvbnN0IHNhZ2FHZXRMaXN0ID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7YWN0aW9uVHlwZXMuR0VUX0xJU1R9YClcbmV4cG9ydCBjb25zdCBzYWdhT3BlbkNyZWF0ZURpYWxvZyA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLk9QRU5fQ1JFQVRFX0RJQUxPR31gKVxuZXhwb3J0IGNvbnN0IHNhZ2FPcGVuVXBkYXRlRGlhbG9nID0gY3JlYXRlQWN0aW9uPG51bWJlcj4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5PUEVOX1VQREFURV9ESUFMT0d9YClcbmV4cG9ydCBjb25zdCBzYWdhQ2xvc2VEaWFsb2cgPSBjcmVhdGVBY3Rpb24oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5DTE9TRV9ESUFMT0d9YClcbmV4cG9ydCBjb25zdCBzYWdhQ3JlYXRlID0gY3JlYXRlQWN0aW9uPEZvcm1EYXRhPihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkNSRUFURX1gKVxuZXhwb3J0IGNvbnN0IHNhZ2FVcGRhdGUgPSBjcmVhdGVBY3Rpb248eyBpZDogbnVtYmVyOyBmb3JtRGF0YTogRm9ybURhdGEgfT4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5VUERBVEV9YClcbmV4cG9ydCBjb25zdCBzYWdhR2V0TmV4dENvZGUgPSBjcmVhdGVBY3Rpb248RXF1aXZhbGVuY2VEZXRhaWw+KGAke25hbWV9LyR7YWN0aW9uVHlwZXMuR0VUX05FWFRfQ09ERX1gKVxuXG4vLyBTZWxlY3RvclxuZXhwb3J0IGNvbnN0IHNlbGVjdFN0YXRlID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlW25hbWVdXG5leHBvcnQgY29uc3Qgc2VsZWN0RXF1aXZhbGVuY2VUeXBlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuZXF1aXZhbGVuY2VUeXBlKVxuZXhwb3J0IGNvbnN0IHNlbGVjdERpYWxvZ1N0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuZGlhbG9nU3RhdGUpXG5leHBvcnQgY29uc3Qgc2VsZWN0RGF0YUxpc3QgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5kYXRhTGlzdClcbmV4cG9ydCBjb25zdCBzZWxlY3REZXRhaWwgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5kZXRhaWwpXG5leHBvcnQgY29uc3Qgc2VsZWN0UGVybWlzc2lvbnMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiB7XG4gIGNvbnN0IHsgaW5pdERhdGFGb3JMaXN0LCBlcXVpdmFsZW5jZVR5cGUgfSA9IHN0YXRlXG4gIGlmICghZXF1aXZhbGVuY2VUeXBlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXR1cm4gaW5pdERhdGFGb3JMaXN0LnBlcm1pc3Npb25zW2VxdWl2YWxlbmNlVHlwZV1cbn0pXG5leHBvcnQgY29uc3Qgc2VsZWN0SW5pdERhdGFGb3JDRSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmluaXREYXRhRm9yQ0UpXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJbml0RGF0YUZvckxpc3QgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5pbml0RGF0YUZvckxpc3QpXG5cbmV4cG9ydCBkZWZhdWx0IGVxdWl2YWxlbmNlU2xpY2VcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbiAgb3BlcmF0aW9uSWQ6ICcnLFxuICBtZXNzYWdlOiAnSW5pdGlhbGl6aW5nLi4uJyxcbiAgc3RhdHVzOiAnTE9BRElORycsXG4gIGNlbGVyeUlkOiAnJ1xufVxuXG5jb25zdCBleHBvcnRQcm9jZXNzRGlhbG9nUmVkdWNlciA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ2V4cG9ydFByb2Nlc3NEaWFsb2cnLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0T3BlbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5pc09wZW4gPSBhY3Rpb24ucGF5bG9hZFxuICAgIH0sXG4gICAgc2V0TWVzc2FnZShzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5tZXNzYWdlID0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICAgIHNldE9wZXJhdGlvbklkKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHN0YXRlLm9wZXJhdGlvbklkID0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICAgIHNldENlbGVyeUlkKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHN0YXRlLmNlbGVyeUlkID0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICAgIHNldFN0YXR1cyhzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5zdGF0dXMgPSBhY3Rpb24ucGF5bG9hZFxuICAgIH0sXG4gICAgcmVzZXRJbml0U3RhdGUoc3RhdGUpIHtcbiAgICAgIHN0YXRlLm9wZXJhdGlvbklkID0gaW5pdGlhbFN0YXRlLm9wZXJhdGlvbklkXG4gICAgICBzdGF0ZS5jZWxlcnlJZCA9IGluaXRpYWxTdGF0ZS5jZWxlcnlJZFxuICAgICAgc3RhdGUubWVzc2FnZSA9IGluaXRpYWxTdGF0ZS5tZXNzYWdlXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBpbml0aWFsU3RhdGUuc3RhdHVzXG4gICAgfVxuICB9XG59KVxuXG4vLyBBY3Rpb25zXG5leHBvcnQgY29uc3QgeyBzZXRPcGVuLCBzZXRNZXNzYWdlLCBzZXRPcGVyYXRpb25JZCwgc2V0Q2VsZXJ5SWQsIHNldFN0YXR1cywgcmVzZXRJbml0U3RhdGUgfSA9XG4gIGV4cG9ydFByb2Nlc3NEaWFsb2dSZWR1Y2VyLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0UHJvY2Vzc0RpYWxvZ1JlZHVjZXIucmVkdWNlclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFjdGlvbiwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuXG5pbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnXG5cbmltcG9ydCB0eXBlIHsgUm9vdFJlZHVjZXJUeXBlIH0gZnJvbSAnLi9yb290UmVkdWNlcidcbmltcG9ydCB0eXBlIHsgRW50aXR5LCBIaXN0b3J5TG9nIH0gZnJvbSAnQC90eXBlcy9Db21tb24nXG5pbXBvcnQgdHlwZSB7IEdyb3VwRGV0YWlsLCBHcm91cEluaXREYXRhRm9yTGlzdCwgR3JvdXBJbml0RGF0YUZvckNFIH0gZnJvbSAnQC90eXBlcy9Hcm91cCdcblxuZXhwb3J0IGNvbnN0IG5hbWU6IEVudGl0eSA9ICdncm91cCdcbmV4cG9ydCBjb25zdCByZXNldFN0YXRlID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7YWN0aW9uVHlwZXMuUkVTRVRfU1RBVEV9YClcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBkYXRhTGlzdDogW10gYXMgR3JvdXBEZXRhaWxbXSxcbiAgZGV0YWlsOiB7XG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIGdyb3VwX2lkOiAnJyxcbiAgICBuYW1lOiAnJ1xuICB9IGFzIEdyb3VwRGV0YWlsLFxuICBkaWFsb2dTdGF0ZToge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGhpc3RvcnlMb2dzOiBbXSBhcyBIaXN0b3J5TG9nW11cbiAgfSxcbiAgaW5pdERhdGFGb3JMaXN0OiB7XG4gICAgcGVybWlzc2lvbnM6IHtcbiAgICAgIGdyb3VwOiBudWxsXG4gICAgfSxcbiAgICB3aWtpX3BhZ2U6ICcnLFxuICAgIGNvbHVtbl90b29sdGlwczoge31cbiAgfSBhcyBHcm91cEluaXREYXRhRm9yTGlzdCxcbiAgZ3JvdXBQZXJtaXNzaW9uczoge1xuICAgIGdyb3VwczogW10sXG4gICAgcGVybWlzc2lvbnM6IFtdXG4gIH0sXG4gIGluaXREYXRhRm9yQ0U6IHtcbiAgICB3aWtpX3BhZ2U6ICcnXG4gIH0gYXMgR3JvdXBJbml0RGF0YUZvckNFXG59XG5cbmNvbnN0IGdyb3VwU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWUsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXREYXRhTGlzdChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEdyb3VwRGV0YWlsW10+KSB7XG4gICAgICBzdGF0ZS5kYXRhTGlzdCA9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgICBzZXREaWFsb2dTdGF0ZShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFydGlhbDx0eXBlb2YgaW5pdGlhbFN0YXRlLmRpYWxvZ1N0YXRlPj4pIHtcbiAgICAgIHN0YXRlLmRpYWxvZ1N0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZS5kaWFsb2dTdGF0ZSxcbiAgICAgICAgLi4ucGF5bG9hZFxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0SGlzdG9yeUxvZ3Moc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPEhpc3RvcnlMb2dbXT4pIHtcbiAgICAgIHN0YXRlLmRpYWxvZ1N0YXRlLmhpc3RvcnlMb2dzID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0RGlhbG9nU3RhdGVPcGVuKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUub3BlbiA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERpYWxvZ1N0YXRlTG9hZGluZyhzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pIHtcbiAgICAgIHN0YXRlLmRpYWxvZ1N0YXRlLmxvYWRpbmcgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXREZXRhaWwoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFBhcnRpYWw8R3JvdXBEZXRhaWw+Pikge1xuICAgICAgc3RhdGUuZGV0YWlsID0ge1xuICAgICAgICAuLi5zdGF0ZS5kZXRhaWwsXG4gICAgICAgIC4uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldEdyb3VwUGVybWlzc2lvbnMoc3RhdGUsIGFjdGlvbjogYW55KSB7XG4gICAgICBzdGF0ZS5ncm91cFBlcm1pc3Npb25zLmdyb3VwcyA9IGFjdGlvbi5wYXlsb2FkLmdyb3Vwc1xuICAgICAgc3RhdGUuZ3JvdXBQZXJtaXNzaW9ucy5wZXJtaXNzaW9ucyA9IGFjdGlvbi5wYXlsb2FkLnBlcm1pc3Npb25zXG4gICAgfSxcbiAgICBzZXRJbml0RGF0YUZvckxpc3Qoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPEdyb3VwSW5pdERhdGFGb3JMaXN0Pikge1xuICAgICAgc3RhdGUuaW5pdERhdGFGb3JMaXN0ID0gcGF5bG9hZFxuICAgIH0sXG4gICAgcmVzZXREZXRhaWwoc3RhdGUpIHtcbiAgICAgIHN0YXRlLmRldGFpbCA9IHsgLi4uaW5pdGlhbFN0YXRlLmRldGFpbCB9XG4gICAgfSxcbiAgICBzZXRJbml0RGF0YUZvckNFKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxHcm91cEluaXREYXRhRm9yQ0U+KSB7XG4gICAgICBzdGF0ZS5pbml0RGF0YUZvckNFID0gcGF5bG9hZFxuICAgIH1cbiAgfSxcbiAgZXh0cmFSZWR1Y2Vyczoge1xuICAgIFtyZXNldFN0YXRlLnR5cGVdKCkge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZVxuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHsgYWN0aW9ucyB9ID0gZ3JvdXBTbGljZVxuXG4vLyBTYWdhIGFjdGlvbnNcbmV4cG9ydCBjb25zdCBzYWdhR2V0TGlzdCA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkdFVF9MSVNUfWApXG5leHBvcnQgY29uc3Qgc2FnYUNyZWF0ZSA9IGNyZWF0ZUFjdGlvbjxHcm91cERldGFpbD4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5DUkVBVEV9YClcbmV4cG9ydCBjb25zdCBzYWdhT3BlbkNyZWF0ZURpYWxvZyA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLk9QRU5fQ1JFQVRFX0RJQUxPR31gKVxuZXhwb3J0IGNvbnN0IHNhZ2FPcGVuVXBkYXRlRGlhbG9nID0gY3JlYXRlQWN0aW9uPG51bWJlcj4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5PUEVOX1VQREFURV9ESUFMT0d9YClcbmV4cG9ydCBjb25zdCBzYWdhQ2xvc2VEaWFsb2cgPSBjcmVhdGVBY3Rpb24oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5DTE9TRV9ESUFMT0d9YClcbmV4cG9ydCBjb25zdCBzYWdhVXBkYXRlID0gY3JlYXRlQWN0aW9uPHsgaWQ6IG51bWJlcjsgZm9ybURhdGE6IEdyb3VwRGV0YWlsIH0+KGAke25hbWV9LyR7YWN0aW9uVHlwZXMuVVBEQVRFfWApXG5cbi8vIFBlcm1pc3Npb25zIHNhZ2EgYWN0aW9uc1xuZXhwb3J0IGNvbnN0IHNhZ2FHZXRHcm91cFBlcm1pc3Npb25zID0gY3JlYXRlQWN0aW9uKGAke25hbWV9L0dFVF9QRVJNSVNTSU9OU2ApXG5leHBvcnQgY29uc3Qgc2FnYVVwZGF0ZUdyb3VwUGVybWlzc2lvbnMgPSBjcmVhdGVBY3Rpb248YW55PihgJHtuYW1lfS9VUERBVEVfUEVSTUlTU0lPTlNgKVxuXG4vLyBTZWxlY3RvclxuZXhwb3J0IGNvbnN0IHNlbGVjdFN0YXRlID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlW25hbWVdXG5cbmV4cG9ydCBjb25zdCBzZWxlY3REYXRhTGlzdCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmRhdGFMaXN0KVxuZXhwb3J0IGNvbnN0IHNlbGVjdFBlcm1pc3Npb25zID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuaW5pdERhdGFGb3JMaXN0LnBlcm1pc3Npb25zLmdyb3VwKVxuZXhwb3J0IGNvbnN0IHNlbGVjdERldGFpbCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmRldGFpbClcbmV4cG9ydCBjb25zdCBzZWxlY3REaWFsb2dTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmRpYWxvZ1N0YXRlKVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0R3JvdXBQZXJtaXNzaW9ucyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoZ3JvdXApID0+IGdyb3VwLmdyb3VwUGVybWlzc2lvbnMpXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJbml0RGF0YUZvckxpc3QgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5pbml0RGF0YUZvckxpc3QpXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJbml0RGF0YUZvckNFID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuaW5pdERhdGFGb3JDRSlcbmV4cG9ydCBkZWZhdWx0IGdyb3VwU2xpY2VcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBY3Rpb24sIFBheWxvYWRBY3Rpb24sIGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnQC91dGlscy9jb25zdGFudCdcblxuaW1wb3J0IHR5cGUgeyBJdGVtLCBJdGVtSW5pdERhdGFGb3JMaXN0IH0gZnJvbSAnQC90eXBlcy9JdGVtJ1xuaW1wb3J0IHR5cGUgeyBSb290UmVkdWNlclR5cGUgfSBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xuaW1wb3J0IHR5cGUgeyBEYXRhRm9yRHJvcGRvd24sIEVudGl0eSwgUGFyYW1ldGVyT3B0aW9uLCBQYXlsb2FkT3BlcmF0aW9uIH0gZnJvbSAnQC90eXBlcy9Db21tb24nXG5cbmV4cG9ydCBjb25zdCBuYW1lOiBFbnRpdHkgPSAnaXRlbSdcbmV4cG9ydCBjb25zdCByZXNldFN0YXRlID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7YWN0aW9uVHlwZXMuUkVTRVRfU1RBVEV9YClcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZGF0YUxpc3Q6IFtdIGFzIEl0ZW1bXSxcbiAgaW5pdERhdGFGb3JMaXN0OiB7XG4gICAgcGVybWlzc2lvbnM6IHtcbiAgICAgIGl0ZW06IG51bGxcbiAgICB9LFxuICAgIGpvYnM6IFtdLFxuICAgIHdpa2lfcGFnZTogJycsXG4gICAgY29sdW1uX3Rvb2x0aXBzOiB7fVxuICB9IGFzIEl0ZW1Jbml0RGF0YUZvckxpc3Rcbn1cblxuY29uc3QgaXRlbVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0RGF0YUxpc3Qoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPEl0ZW1bXT4pIHtcbiAgICAgIHN0YXRlLmRhdGFMaXN0ID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0SW5pdERhdGFGb3JMaXN0KHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxJdGVtSW5pdERhdGFGb3JMaXN0Pikge1xuICAgICAgc3RhdGUuaW5pdERhdGFGb3JMaXN0ID0gcGF5bG9hZFxuICAgIH1cbiAgfSxcbiAgZXh0cmFSZWR1Y2Vyczoge1xuICAgIFtyZXNldFN0YXRlLnR5cGVdKCkge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZVxuICAgIH1cbiAgfVxufSlcbi8vIEFjdGlvbnNcbmV4cG9ydCBjb25zdCB7IGFjdGlvbnMgfSA9IGl0ZW1TbGljZVxuXG4vLyBTYWdhIGFjdGlvbnNcbmV4cG9ydCBjb25zdCBzYWdhR2V0TGlzdCA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkdFVF9MSVNUfWApXG5leHBvcnQgY29uc3Qgc2FnYUNoYW5nZVVzZXJKb2IgPSBjcmVhdGVBY3Rpb248eyBvcHRpb25WYWx1ZTogUGFyYW1ldGVyT3B0aW9uOyBjb25maXJtOiBzdHJpbmcgfT4oXG4gIGAke25hbWV9LyR7YWN0aW9uVHlwZXMuQ0hBTkdFX1VTRVJfSk9CfWBcbilcbmV4cG9ydCBjb25zdCBzYWdhUmVtb3ZlID0gY3JlYXRlQWN0aW9uPFBheWxvYWRPcGVyYXRpb25bXT4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5SRU1PVkV9YClcbmV4cG9ydCBjb25zdCBzYWdhQ2hhbmdlVXNlckRyYXdpbmcgPSBjcmVhdGVBY3Rpb248eyBvcHRpb25WYWx1ZTogRGF0YUZvckRyb3Bkb3duOyBjb25maXJtOiBzdHJpbmcgfT4oXG4gIGAke25hbWV9LyR7YWN0aW9uVHlwZXMuQ0hBTkdFX1VTRVJfRFJBV0lOR31gXG4pXG5cbi8vIHNlbGVjdG9yXG5jb25zdCBzZWxlY3RTdGF0ZSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZVtuYW1lXVxuZXhwb3J0IGNvbnN0IHNlbGVjdERhdGFMaXN0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuZGF0YUxpc3QpXG5leHBvcnQgY29uc3Qgc2VsZWN0UGVybWlzc2lvbnMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5pbml0RGF0YUZvckxpc3QucGVybWlzc2lvbnMuaXRlbSlcbmV4cG9ydCBjb25zdCBzZWxlY3RJbml0RGF0YUZvckxpc3QgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5pbml0RGF0YUZvckxpc3QpXG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW1TbGljZVxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFjdGlvbiwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICdAL3V0aWxzL2NvbnN0YW50J1xuXG5pbXBvcnQgdHlwZSB7IEVudGl0eSwgUGFyYW1ldGVyT3B0aW9uLCBIaXN0b3J5TG9nIH0gZnJvbSAnQC90eXBlcy9Db21tb24nXG5pbXBvcnQgdHlwZSB7IFJvb3RSZWR1Y2VyVHlwZSB9IGZyb20gJy4vcm9vdFJlZHVjZXInXG5pbXBvcnQgdHlwZSB7XG4gIEpvYkl0ZW0sXG4gIEpvYkRldGFpbCxcbiAgSm9iSW5pdERhdGFGb3JDRSxcbiAgVXNlckdyb3VwTWFwcGluZyxcbiAgSm9iS2V5TWFwcGluZyxcbiAgSm9iUGVybWlzc2lvbnMsXG4gIEpvYkluaXREYXRhRm9yTGlzdFxufSBmcm9tICdAL3R5cGVzL0pvYidcblxuZXhwb3J0IGNvbnN0IG5hbWU6IEVudGl0eSA9ICdqb2InXG5leHBvcnQgY29uc3QgcmVzZXRTdGF0ZSA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLlJFU0VUX1NUQVRFfWApXG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zlckxpc3RTdGF0ZSA9IHtcbiAgdXNlckF2YWlsYWJsZUxpc3Q6IFtdIGFzIFVzZXJHcm91cE1hcHBpbmdbXSxcbiAgdXNlckdyb3VwOiBbXSBhcyBVc2VyR3JvdXBNYXBwaW5nW10sXG4gIG9wZW46IGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCBqb2JEZXRhaWw6IEpvYkRldGFpbCA9IHtcbiAgam9iX2lkOiAnJyxcbiAgZXF1aXBtZW50X3R5cGU6IG51bGwsXG4gIGxhbmd1YWdlOiBudWxsLFxuICBlcmVjdGlvbl9zaXRlOiBudWxsLFxuICBqb2Jfc3RhbmRhcmQ6IFtdLFxuICBwZW9wbGVfcmVzcG9uc2libGU6IFtdLFxuICBzcXVhZF9sZWFkZXI6IFtdLFxuICBkcmF3aW5nc19yZXNwb25zaWJsZTogW10sXG4gIGNvbnRyYWN0X25vOiAnJyxcbiAgY29udHJhY3RfZGVzYzogJycsXG4gIGNyZWRpdF9sZXR0ZXI6ICcnLFxuICBsb2dvOiBudWxsLFxuICBhZGRpdGlvbmFsX2F0dHJpYnV0ZXM6IHt9LFxuICBqb2JfY3VycmVuY2llczogW10sXG4gIGpvYl9kZXNjcmlwdGlvbnM6IFtdLFxuICBqb2JfdXNlcnM6IFtdLFxuICBqb2JfZXhwZWRpdGluZ19kYXRlczogW11cbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZGF0YUxpc3Q6IFtdIGFzIEpvYkl0ZW1bXSxcbiAgZGlhbG9nU3RhdGU6IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBoaXN0b3J5TG9nczogW10gYXMgSGlzdG9yeUxvZ1tdXG4gIH0sXG4gIHNlbGVjdGVkSm9iQ2F0ZWdvcnk6IHtcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgaWQ6IG51bGwsXG4gICAgcGFyYW1ldGVyX2lkOiAnJ1xuICB9IGFzIFBhcmFtZXRlck9wdGlvbixcbiAgaW5pdERhdGFGb3JMaXN0OiB7XG4gICAgam9iX2NhdGVnb3JpZXM6IFtdLFxuICAgIHBlcm1pc3Npb25zOiB7XG4gICAgICBqb2I6IG51bGxcbiAgICB9LFxuICAgIHdpa2lfcGFnZTogJycsXG4gICAgY29sdW1uX3Rvb2x0aXBzOiB7fVxuICB9IGFzIEpvYkluaXREYXRhRm9yTGlzdCxcbiAgaW5pdERhdGFGb3JDRToge1xuICAgIGN1cnJlbmNpZXM6IFtdLFxuICAgIGdyb3VwX21hcDoge1xuICAgICAgam9iX2FsbDogJycsXG4gICAgICBqb2JfZHJhd2luZzogJycsXG4gICAgICBqb2JfcmVzcG9uc2libGU6ICcnLFxuICAgICAgam9iX3NxdWFkX2xlYWRlcjogJydcbiAgICB9LFxuICAgIGVyZWN0aW9uX3NpdGVzOiBbXSxcbiAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICBFUVRZOiBbXSxcbiAgICAgIEpPQVQ6IFtdLFxuICAgICAgUExMQTogW10sXG4gICAgICBQTE5POiBbXVxuICAgIH0sXG4gICAgdG9vbHRpcDogJzxzcGFuPjwvc3Bhbj4nLFxuICAgIGpvYl90ZW1wbGF0ZTogam9iRGV0YWlsLFxuICAgIHdpa2lfcGFnZTogJydcbiAgfSBhcyBKb2JJbml0RGF0YUZvckNFLFxuICB0cmFuc2Zlckxpc3RTdGF0ZSxcbiAga2V5TWFwcGluZzogbnVsbCBhcyBKb2JLZXlNYXBwaW5nLFxuICBkZXRhaWw6IGpvYkRldGFpbFxufVxuXG5jb25zdCBqb2JTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZSxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldERhdGFMaXN0KHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxKb2JJdGVtW10+KSB7XG4gICAgICBzdGF0ZS5kYXRhTGlzdCA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERpYWxvZ1N0YXRlKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxQYXJ0aWFsPHR5cGVvZiBpbml0aWFsU3RhdGUuZGlhbG9nU3RhdGU+Pikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLmRpYWxvZ1N0YXRlLFxuICAgICAgICAuLi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRIaXN0b3J5TG9ncyhzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248SGlzdG9yeUxvZ1tdPikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUuaGlzdG9yeUxvZ3MgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXREaWFsb2dTdGF0ZU9wZW4oc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZS5vcGVuID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0RGlhbG9nU3RhdGVMb2FkaW5nKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUubG9hZGluZyA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldEluaXREYXRhRm9yTGlzdChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248Sm9iSW5pdERhdGFGb3JMaXN0Pikge1xuICAgICAgc3RhdGUuaW5pdERhdGFGb3JMaXN0ID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0SW5pdERhdGFGb3JDRShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248Sm9iSW5pdERhdGFGb3JDRT4pIHtcbiAgICAgIHN0YXRlLmluaXREYXRhRm9yQ0UgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRPcGVuVHJhbnNmZXJMaXN0KHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUudHJhbnNmZXJMaXN0U3RhdGUub3BlbiA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldFRyYW5zZmVyVXNlckF2YWlsYWJsZUxpc3Qoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFVzZXJHcm91cE1hcHBpbmdbXT4pIHtcbiAgICAgIHN0YXRlLnRyYW5zZmVyTGlzdFN0YXRlLnVzZXJBdmFpbGFibGVMaXN0ID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0VHJhbnNmZXJMaXN0VXNlckdyb3VwKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxVc2VyR3JvdXBNYXBwaW5nW10+KSB7XG4gICAgICBzdGF0ZS50cmFuc2Zlckxpc3RTdGF0ZS51c2VyR3JvdXAgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXREZXRhaWwoc3RhdGUsIHsgcGF5bG9hZCB9KSB7XG4gICAgICBzdGF0ZS5kZXRhaWwgPSB7XG4gICAgICAgIC4uLnN0YXRlLmRldGFpbCxcbiAgICAgICAgLi4ucGF5bG9hZFxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFyYW1ldGVyT3B0aW9uPikge1xuICAgICAgc3RhdGUuc2VsZWN0ZWRKb2JDYXRlZ29yeSA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldEtleU1hcHBpbmcoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPEpvYktleU1hcHBpbmc+KSB7XG4gICAgICBzdGF0ZS5rZXlNYXBwaW5nID0gcGF5bG9hZFxuICAgIH0sXG4gICAgY2xvc2VUcmFuc2Zlckxpc3Qoc3RhdGUpIHtcbiAgICAgIHN0YXRlLnRyYW5zZmVyTGlzdFN0YXRlID0ge1xuICAgICAgICAuLi50cmFuc2Zlckxpc3RTdGF0ZSxcbiAgICAgICAgdXNlckdyb3VwOiBzdGF0ZS50cmFuc2Zlckxpc3RTdGF0ZS51c2VyR3JvdXBcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFBlcm1pc3Npb25zKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxKb2JQZXJtaXNzaW9ucz4pIHtcbiAgICAgIHN0YXRlLmluaXREYXRhRm9yTGlzdC5wZXJtaXNzaW9ucy5qb2IgPSBwYXlsb2FkXG4gICAgfSxcbiAgICByZXNldERldGFpbChzdGF0ZSkge1xuICAgICAgY29uc3Qgam9iU3RhbmRhcmQgPSBzdGF0ZS5pbml0RGF0YUZvckNFLnBhcmFtZXRlcnMuUExOTy5tYXAoKGl0ZW0pID0+XG4gICAgICAgIF8ucGljayhpdGVtLCBbJ2Rlc2NyaXB0aW9uJywgJ3BhcmFtZXRlcl9pZCcsICdpZCddKVxuICAgICAgKSBhcyBhbnlcbiAgICAgIHN0YXRlLmRldGFpbCA9IHtcbiAgICAgICAgLi4uam9iRGV0YWlsLFxuICAgICAgICBqb2Jfc3RhbmRhcmQ6IGpvYlN0YW5kYXJkXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBleHRyYVJlZHVjZXJzOiB7XG4gICAgW3Jlc2V0U3RhdGUudHlwZV0oKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlXG4gICAgfVxuICB9XG59KVxuXG4vLyBBY3Rpb25zXG5leHBvcnQgY29uc3QgeyBhY3Rpb25zIH0gPSBqb2JTbGljZVxuXG4vLyBTYWdhIGFjdGlvbnNcbmV4cG9ydCBjb25zdCBzYWdhR2V0TGlzdCA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkdFVF9MSVNUfWApXG5leHBvcnQgY29uc3Qgc2FnYU9wZW5DcmVhdGVEaWFsb2cgPSBjcmVhdGVBY3Rpb24oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5PUEVOX0NSRUFURV9ESUFMT0d9YClcbmV4cG9ydCBjb25zdCBzYWdhT3BlblVwZGF0ZURpYWxvZyA9IGNyZWF0ZUFjdGlvbjxudW1iZXI+KGAke25hbWV9LyR7YWN0aW9uVHlwZXMuT1BFTl9VUERBVEVfRElBTE9HfWApXG5leHBvcnQgY29uc3Qgc2FnYUNsb3NlRGlhbG9nID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7YWN0aW9uVHlwZXMuQ0xPU0VfRElBTE9HfWApXG5leHBvcnQgY29uc3Qgc2FnYUNyZWF0ZSA9IGNyZWF0ZUFjdGlvbjxGb3JtRGF0YT4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5DUkVBVEV9YClcbmV4cG9ydCBjb25zdCBzYWdhVXBkYXRlID0gY3JlYXRlQWN0aW9uPHsgaWQ6IG51bWJlcjsgZm9ybURhdGE6IEZvcm1EYXRhIH0+KGAke25hbWV9LyR7YWN0aW9uVHlwZXMuVVBEQVRFfWApXG5leHBvcnQgY29uc3Qgc2FnYUdldFVzZXJHcm91cE1hcHBpbmcgPSBjcmVhdGVBY3Rpb248c3RyaW5nPihgJHtuYW1lfS9HRVRfVVNFUl9HUk9VUF9NQVBQSU5HYClcblxuLy8gU2VsZWN0b3JcbmV4cG9ydCBjb25zdCBzZWxlY3RTdGF0ZSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZVtuYW1lXVxuZXhwb3J0IGNvbnN0IHNlbGVjdERhdGFMaXN0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuZGF0YUxpc3QpXG5leHBvcnQgY29uc3Qgc2VsZWN0Sm9iQ2F0ZWdvcmllcyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmluaXREYXRhRm9yTGlzdC5qb2JfY2F0ZWdvcmllcylcbmV4cG9ydCBjb25zdCBzZWxlY3RQZXJtaXNzaW9ucyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmluaXREYXRhRm9yTGlzdC5wZXJtaXNzaW9ucy5qb2IpXG5cbmV4cG9ydCBjb25zdCBzZWxlY3REaWFsb2dTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmRpYWxvZ1N0YXRlKVxuZXhwb3J0IGNvbnN0IHNlbGVjdEluaXREYXRhRm9yQ0UgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5pbml0RGF0YUZvckNFKVxuZXhwb3J0IGNvbnN0IHNlbGVjdFRyYW5zZmVyTGlzdFN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUudHJhbnNmZXJMaXN0U3RhdGUpXG5cbmV4cG9ydCBjb25zdCBzZWxlY3REZXRhaWwgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5kZXRhaWwpXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RLZXlNYXBwaW5nID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUua2V5TWFwcGluZylcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFNlbGVjdGVkSm9iQ2F0ZWdvcnkgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5zZWxlY3RlZEpvYkNhdGVnb3J5KVxuZXhwb3J0IGNvbnN0IHNlbGVjdEluaXREYXRhRm9yTGlzdCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmluaXREYXRhRm9yTGlzdClcblxuZXhwb3J0IGRlZmF1bHQgam9iU2xpY2VcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBY3Rpb24sIFBheWxvYWRBY3Rpb24sIGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnQC91dGlscy9jb25zdGFudCdcblxuaW1wb3J0IHR5cGUgeyBSb290UmVkdWNlclR5cGUgfSBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xuaW1wb3J0IHR5cGUge1xuICBMb2NhdGlvbkluaXREYXRhRm9yTGlzdCxcbiAgTG9jYXRpb25EZXRhaWwsXG4gIExvY2F0aW9uSW5pdERhdGFGb3JDRSxcbiAgTG9jYXRpb25QZXJtaXNzaW9ucyxcbiAgTG9jYXRpb25JdGVtXG59IGZyb20gJ0AvdHlwZXMvTG9jYXRpb24nXG5pbXBvcnQgdHlwZSB7IEhpc3RvcnlMb2cgfSBmcm9tICdAL3R5cGVzL0NvbW1vbidcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnbG9jYXRpb24nXG5leHBvcnQgY29uc3QgcmVzZXRTdGF0ZSA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLlJFU0VUX1NUQVRFfWApXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGRhdGFMaXN0OiBbXSBhcyBMb2NhdGlvbkl0ZW1bXSxcbiAgZGV0YWlsOiB7XG4gICAgbG9jYXRpb25faWQ6ICcnLFxuICAgIGxhbmd1YWdlOiBudWxsLFxuICAgIGxvY2F0aW9uX3R5cGU6IG51bGwsXG4gICAgbmFtZTogJycsXG4gICAgb2ZmaWNlX2FkZHJlc3MxOiAnJyxcbiAgICBvZmZpY2VfYWRkcmVzczI6ICcnLFxuICAgIG9mZmljZV9jaXR5OiAnJyxcbiAgICBvZmZpY2VfemlwOiAnJyxcbiAgICBvZmZpY2Vfc3RhdGU6ICcnLFxuICAgIG9mZmljZV9jb3VudHJ5OiBudWxsLFxuICAgIG9mZmljZV9waG9uZTogJycsXG4gICAgb2ZmaWNlX2VtYWlsOiAnJyxcbiAgICBvZmZpY2VfZmF4OiAnJyxcbiAgICB3b3Jrc2hvcF9hZGRyZXNzMTogJycsXG4gICAgd29ya3Nob3BfYWRkcmVzczI6ICcnLFxuICAgIHdvcmtzaG9wX2NpdHk6ICcnLFxuICAgIHdvcmtzaG9wX3Bob25lOiAnJyxcbiAgICB3b3Jrc2hvcF9lbWFpbDogJycsXG4gICAgd29ya3Nob3BfZmF4OiAnJyxcbiAgICBjb21tZW50OiAnJyxcbiAgICBzcGVjaWFsdGllczogJycsXG4gICAgcmVtYXJrOiAnJyxcbiAgICBhZGRpdGlvbmFsX2F0dHJpYnV0ZXM6IHt9XG4gIH0gYXMgTG9jYXRpb25EZXRhaWwsXG4gIGRpYWxvZ1N0YXRlOiB7XG4gICAgb3BlbjogZmFsc2UsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZWRpdE1vZGU6IGZhbHNlLFxuICAgIGhpc3RvcnlMb2dzOiBbXSBhcyBIaXN0b3J5TG9nW11cbiAgfSxcbiAgaW5pdERhdGFGb3JMaXN0OiB7XG4gICAgcGVybWlzc2lvbnM6IHtcbiAgICAgIGxvY2F0aW9uOiBudWxsXG4gICAgfSxcbiAgICB3aWtpX3BhZ2U6ICcnLFxuICAgIGNvbHVtbl90b29sdGlwczoge31cbiAgfSBhcyBMb2NhdGlvbkluaXREYXRhRm9yTGlzdCxcbiAgaW5pdERhdGFGb3JDRToge1xuICAgIHBhcmFtZXRlcnM6IHtcbiAgICAgIENUUlk6IFtdLCAvLyBjb3VudHJ5XG4gICAgICBMT0FUOiBbXSwgLy8gZXh0ZW5kZWQgcHJvcGVydGllc1xuICAgICAgUExMQTogW10sIC8vIGxhbmd1YWdlXG4gICAgICBQVUNPOiBbXSwgLy8gcHVjb1xuICAgICAgU1NQRTogW10sIC8vIHNwZWNpYWx0aWVzXG4gICAgICBUWUxPOiBbXSAvLyBsb2NhdGlvbiB0eXBlXG4gICAgfSxcbiAgICBuZXh0X2NvZGU6ICcnLFxuICAgIHdpa2lfcGFnZTogJydcbiAgfSBhcyBMb2NhdGlvbkluaXREYXRhRm9yQ0Vcbn1cblxuY29uc3QgbG9jYXRpb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZSxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldERhdGFMaXN0KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248TG9jYXRpb25JdGVtW10+KSB7XG4gICAgICBzdGF0ZS5kYXRhTGlzdCA9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgICBzZXRQZXJtaXNzaW9ucyhzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248TG9jYXRpb25QZXJtaXNzaW9ucz4pIHtcbiAgICAgIHN0YXRlLmluaXREYXRhRm9yTGlzdC5wZXJtaXNzaW9ucy5sb2NhdGlvbiA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERpYWxvZ1N0YXRlKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxQYXJ0aWFsPHR5cGVvZiBpbml0aWFsU3RhdGUuZGlhbG9nU3RhdGU+Pikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLmRpYWxvZ1N0YXRlLFxuICAgICAgICAuLi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRIaXN0b3J5TG9ncyhzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248SGlzdG9yeUxvZ1tdPikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUuaGlzdG9yeUxvZ3MgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXREaWFsb2dTdGF0ZU9wZW4oc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZS5vcGVuID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0RGlhbG9nU3RhdGVMb2FkaW5nKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUubG9hZGluZyA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERpYWxvZ1N0YXRlRWRpdE1vZGUoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZS5lZGl0TW9kZSA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERldGFpbChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFydGlhbDxMb2NhdGlvbkRldGFpbD4+KSB7XG4gICAgICBzdGF0ZS5kZXRhaWwgPSB7XG4gICAgICAgIC4uLnN0YXRlLmRldGFpbCxcbiAgICAgICAgLi4ucGF5bG9hZFxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0SW5pdERhdGFGb3JMaXN0KHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxMb2NhdGlvbkluaXREYXRhRm9yTGlzdD4pIHtcbiAgICAgIHN0YXRlLmluaXREYXRhRm9yTGlzdCA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldEluaXREYXRhRm9yQ0Uoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPExvY2F0aW9uSW5pdERhdGFGb3JDRT4pIHtcbiAgICAgIHN0YXRlLmluaXREYXRhRm9yQ0UgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXROZXh0Q29kZShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xuICAgICAgc3RhdGUuaW5pdERhdGFGb3JDRS5uZXh0X2NvZGUgPSBwYXlsb2FkXG4gICAgfSxcbiAgICByZXNldERldGFpbChzdGF0ZSkge1xuICAgICAgc3RhdGUuZGV0YWlsID0geyAuLi5pbml0aWFsU3RhdGUuZGV0YWlsIH1cbiAgICB9XG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IHtcbiAgICBbcmVzZXRTdGF0ZS50eXBlXSgpIHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGVcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7IGFjdGlvbnMgfSA9IGxvY2F0aW9uU2xpY2VcblxuZXhwb3J0IGNvbnN0IHNhZ2FHZXRMaXN0ID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7YWN0aW9uVHlwZXMuR0VUX0xJU1R9YClcbmV4cG9ydCBjb25zdCBzYWdhT3BlbkNyZWF0ZURpYWxvZyA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLk9QRU5fQ1JFQVRFX0RJQUxPR31gKVxuZXhwb3J0IGNvbnN0IHNhZ2FPcGVuVXBkYXRlRGlhbG9nID0gY3JlYXRlQWN0aW9uPG51bWJlcj4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5PUEVOX1VQREFURV9ESUFMT0d9YClcbmV4cG9ydCBjb25zdCBzYWdhQ3JlYXRlID0gY3JlYXRlQWN0aW9uPExvY2F0aW9uRGV0YWlsPihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkNSRUFURX1gKVxuZXhwb3J0IGNvbnN0IHNhZ2FVcGRhdGUgPSBjcmVhdGVBY3Rpb248eyBpZDogbnVtYmVyOyBsb2NhdGlvbjogTG9jYXRpb25EZXRhaWwgfT4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5VUERBVEV9YClcbmV4cG9ydCBjb25zdCBzYWdhR2V0TmV4dENvZGUgPSBjcmVhdGVBY3Rpb248TG9jYXRpb25EZXRhaWw+KGAke25hbWV9LyR7YWN0aW9uVHlwZXMuR0VUX0dFTkVSQVRFX0NPREV9YClcbmV4cG9ydCBjb25zdCBzYWdhQ2xvc2VEaWFsb2cgPSBjcmVhdGVBY3Rpb24oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5DTE9TRV9ESUFMT0d9YClcblxuLy8gU2VsZWN0b3JzXG5leHBvcnQgY29uc3Qgc2VsZWN0U3RhdGUgPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGVbbmFtZV1cbmV4cG9ydCBjb25zdCBzZWxlY3REYXRhTGlzdCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmRhdGFMaXN0KVxuZXhwb3J0IGNvbnN0IHNlbGVjdERpYWxvZ1N0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuZGlhbG9nU3RhdGUpXG5leHBvcnQgY29uc3Qgc2VsZWN0SW5pdERhdGFGb3JMaXN0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuaW5pdERhdGFGb3JMaXN0KVxuZXhwb3J0IGNvbnN0IHNlbGVjdEluaXREYXRhRm9yQ0UgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5pbml0RGF0YUZvckNFKVxuZXhwb3J0IGNvbnN0IHNlbGVjdERldGFpbCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmRldGFpbClcbmV4cG9ydCBjb25zdCBzZWxlY3RQZXJtaXNzaW9ucyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmluaXREYXRhRm9yTGlzdC5wZXJtaXNzaW9ucy5sb2NhdGlvbilcblxuZXhwb3J0IGRlZmF1bHQgbG9jYXRpb25TbGljZVxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFjdGlvbiwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBSb290UmVkdWNlclR5cGUgfSBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xuZXhwb3J0IGNvbnN0IHJlc2V0U3RhdGUgPSBjcmVhdGVBY3Rpb24oJ21ha2VBTGlzdC9SRVNFVF9TVEFURScpXG5cbmV4cG9ydCB0eXBlIEZpbHRlclR5cGUgPSAnb3duJyB8ICdzaGFyZWQnIHwgJ3N5c3RlbSdcblxuZXhwb3J0IGNvbnN0IHByZXNldERldGFpbCA9IHtcbiAgaWQ6IG51bGwsXG4gIG5hbWU6ICcnLFxuICBlbnRpdHk6ICcnLFxuICBkZXNjcmlwdGlvbjogJycsXG4gIGlzX3VzZXJfZGVmYXVsdDogZmFsc2UsXG4gIGlzX3NoYXJlZDogZmFsc2UsXG4gIGlzX3N5c3RlbV9kZWZhdWx0OiBmYWxzZSxcbiAgY29sdW1uc19kaXNwbGF5ZWQ6IFtdLFxuICBzb3J0X2NvbmRpdGlvbnM6IFtdLFxuICB3aGVyZV9jb25kaXRpb25zOiB7XG4gICAgY29uanVuY3Rpb246ICdBTkQnLFxuICAgIHR5cGU6ICdncm91cCcsXG4gICAgY29uZGl0aW9uczogW11cbiAgfSxcbiAgaWdub3JlX2Nhc2U6IGZhbHNlLFxuICBkaXN0aW5jdDogZmFsc2UsXG4gIGNyZWF0ZWRfYnk6ICcnLFxuICBjcmVhdGVkX2F0OiAnJyxcbiAgdXBkYXRlZF9ieTogJycsXG4gIHVwZGF0ZWRfYXQ6ICcnXG59XG5cbmV4cG9ydCBjb25zdCBzeXN0ZW1QcmVzZXQgPSB7XG4gIGlkOiBudWxsLFxuICBuYW1lOiAnJ1xufVxuXG5leHBvcnQgY29uc3QgcGVybWlzc2lvbnMgPSB7XG4gIHVwZGF0ZV9zeXN0ZW1fZGVmYXVsdF9wcmVzZXRzOiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc09wZW46IGZhbHNlLFxuICBpc0VkaXRNb2RlOiBmYWxzZSxcbiAgZW50aXR5OiAnJyxcbiAgc3lzdGVtUHJlc2V0LFxuICBwcmVzZXREZXRhaWwsXG4gIHByZXNldERlZmF1bHQ6IHByZXNldERldGFpbCxcbiAgcHJlc2V0TGlzdDogW10sXG4gIHBlcm1pc3Npb25zLFxuICBmaWx0ZXJUeXBlOiAnb3duJyBhcyBGaWx0ZXJUeXBlLFxuICBpbml0RGF0YToge1xuICAgIGNvbHVtbnM6IFtdLFxuICAgIGNvbXBhcmF0b3JzOiBbXSxcbiAgICBsb2dpY2FsT3BlcmF0b3JzOiBbXSxcbiAgICBzb3J0T3B0aW9uczogW11cbiAgfSxcbiAgbG9hZGluZzoge1xuICAgIHRhYmxlOiBmYWxzZSxcbiAgICBkaWFsb2c6IGZhbHNlXG4gIH0sXG4gIHNhdmVBc0Zvcm06IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBjbGVhckVycm9yOiBmYWxzZSxcbiAgICBlcnJvcjogJydcbiAgfSxcbiAgbWFsRm9ybToge1xuICAgIGNsZWFyRXJyb3I6IGZhbHNlLFxuICAgIGVycm9yOiAnJ1xuICB9XG59XG5jb25zdCBtYWtlQUxpc3RSZWR1Y2VyID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnbWFrZUFMaXN0JyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldE9wZW4oc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUuaXNPcGVuID0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICAgIHNldElzRWRpdE1vZGUoc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUuaXNFZGl0TW9kZSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgICBzZXRQcmVzZXREZXRhaWwoc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUucHJlc2V0RGV0YWlsID0ge1xuICAgICAgICAuLi5zdGF0ZS5wcmVzZXREZXRhaWwsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSxcbiAgICByZXNldFByZXNldERldGFpbChzdGF0ZSkge1xuICAgICAgc3RhdGUucHJlc2V0RGV0YWlsID0ge1xuICAgICAgICAuLi5wcmVzZXREZXRhaWwsXG4gICAgICAgIGVudGl0eTogc3RhdGUucHJlc2V0RGV0YWlsLmVudGl0eVxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0UHJlc2V0TGlzdChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5wcmVzZXRMaXN0ID0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICAgIHNldEZpbHRlclR5cGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxGaWx0ZXJUeXBlPikge1xuICAgICAgc3RhdGUuZmlsdGVyVHlwZSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgICBzZXRJbml0RGF0YShzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5pbml0RGF0YSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgICBzZXRTeXN0ZW1QcmVzZXQoc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUuc3lzdGVtUHJlc2V0ID0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICAgIHNldFByZXNldERlZmF1bHQoc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUucHJlc2V0RGVmYXVsdCA9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgICBzZXRQZXJtaXNzaW9ucyhzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5wZXJtaXNzaW9ucyA9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgICBzZXRMb2FkaW5nVGFibGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUubG9hZGluZy50YWJsZSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgICBzZXRMb2FkaW5nRGlhbG9nKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pIHtcbiAgICAgIHN0YXRlLmxvYWRpbmcuZGlhbG9nID0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICAgIHNldFNhdmVBc0Zvcm0oc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQYXJ0aWFsPHR5cGVvZiBpbml0aWFsU3RhdGUuc2F2ZUFzRm9ybT4+KSB7XG4gICAgICBzdGF0ZS5zYXZlQXNGb3JtID0ge1xuICAgICAgICAuLi5zdGF0ZS5zYXZlQXNGb3JtLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0TWFsRm9ybShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFBhcnRpYWw8dHlwZW9mIGluaXRpYWxTdGF0ZS5tYWxGb3JtPj4pIHtcbiAgICAgIHN0YXRlLm1hbEZvcm0gPSB7XG4gICAgICAgIC4uLnN0YXRlLm1hbEZvcm0sXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBleHRyYVJlZHVjZXJzOiB7XG4gICAgW3Jlc2V0U3RhdGUudHlwZV0oKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnQgY29uc3Qge1xuICBzZXRPcGVuLFxuICBzZXRJc0VkaXRNb2RlLFxuICBzZXRQcmVzZXREZXRhaWwsXG4gIHJlc2V0UHJlc2V0RGV0YWlsLFxuICBzZXRQcmVzZXRMaXN0LFxuICBzZXRGaWx0ZXJUeXBlLFxuICBzZXRJbml0RGF0YSxcbiAgc2V0U3lzdGVtUHJlc2V0LFxuICBzZXRQcmVzZXREZWZhdWx0LFxuICBzZXRQZXJtaXNzaW9ucyxcbiAgc2V0TG9hZGluZ1RhYmxlLFxuICBzZXRTYXZlQXNGb3JtLFxuICBzZXRMb2FkaW5nRGlhbG9nLFxuICBzZXRNYWxGb3JtXG59ID0gbWFrZUFMaXN0UmVkdWNlci5hY3Rpb25zXG5cbmV4cG9ydCBjb25zdCBvcGVuID0gY3JlYXRlQWN0aW9uKCdtYWtlQUxpc3QvT1BFTicpXG5leHBvcnQgY29uc3QgY3JlYXRlID0gY3JlYXRlQWN0aW9uPHR5cGVvZiBwcmVzZXREZXRhaWw+KCdtYWtlQUxpc3QvQ1JFQVRFJylcbmV4cG9ydCBjb25zdCBnZXRMaXN0ID0gY3JlYXRlQWN0aW9uPHN0cmluZz4oJ21ha2VBTGlzdC9HRVRfTElTVCcpXG5leHBvcnQgY29uc3QgZ2V0RGV0YWlsID0gY3JlYXRlQWN0aW9uPGFueT4oJ21ha2VBTGlzdC9HRVRfREVUQUlMJylcbmV4cG9ydCBjb25zdCBnZXRJbml0RGF0YSA9IGNyZWF0ZUFjdGlvbignbWFrZUFMaXN0L0dFVF9JTklUX0RBVEEnKVxuZXhwb3J0IGNvbnN0IHNoYXJlID0gY3JlYXRlQWN0aW9uPHsgaWQ6IG51bWJlcjsgc2hhcmVkOiBib29sZWFuIH0+KCdtYWtlQUxpc3QvU0hBUkUnKVxuZXhwb3J0IGNvbnN0IHVwZGF0ZSA9IGNyZWF0ZUFjdGlvbjx0eXBlb2YgcHJlc2V0RGV0YWlsPignbWFrZUFMaXN0L1VQREFURScpXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gY3JlYXRlQWN0aW9uPHsgZW50aXR5OiBzdHJpbmcgfT4oJ21ha2VBTGlzdC9SRU1PVkUnKVxuZXhwb3J0IGNvbnN0IGNsZWFyRGVmYXVsdCA9IGNyZWF0ZUFjdGlvbignbWFrZUFMaXN0L0NMRUFSX0RFRkFVTFQnKVxuZXhwb3J0IGNvbnN0IGV4cG9ydE1ha2VBTGlzdCA9IGNyZWF0ZUFjdGlvbjx7XG4gIGRlc3RpbmF0aW9uOiBzdHJpbmdcbiAgZGlzcGxheWVkQ29sdW1uczogYW55W11cbiAgc29ydENvbmRpdGlvbnM6IGFueVtdXG4gIHdoZXJlQ29uZHRpb25zOiBhbnlcbiAgZGlzdGluY3Q6IGJvb2xlYW5cbiAgaWdub3JlQ2FzZTogYm9vbGVhblxufT4oJ21ha2VBTGlzdC9FWFBPUlQnKVxuZXhwb3J0IGNvbnN0IGNoYW5nZUZpbHRlclR5cGUgPSBjcmVhdGVBY3Rpb248c3RyaW5nPignbWFrZUFMaXN0L0NIQU5HRV9GSUxURVJfVFlQRScpXG5leHBvcnQgY29uc3Qgc2F2ZUFzID0gY3JlYXRlQWN0aW9uPHR5cGVvZiBwcmVzZXREZXRhaWw+KCdtYWtlQUxpc3QvU0FWRV9BUycpXG5leHBvcnQgY29uc3Qgc3RvcE1ha2VBTGlzdCA9IGNyZWF0ZUFjdGlvbjx7IGNlbGVyeV9pZDogc3RyaW5nIH0+KCdtYWtlQUxpc3QvU1RPUCcpXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJc09wZW4gPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUubWFrZUFMaXN0LmlzT3BlblxuZXhwb3J0IGNvbnN0IHNlbGVjdElzRWRpdE1vZGUgPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUubWFrZUFMaXN0LmlzRWRpdE1vZGVcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFByZXNldERldGFpbCA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5tYWtlQUxpc3QucHJlc2V0RGV0YWlsXG5leHBvcnQgY29uc3Qgc2VsZWN0Q29sdW1uRGlzcGxheSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5tYWtlQUxpc3QucHJlc2V0RGV0YWlsLmNvbHVtbnNfZGlzcGxheWVkXG5leHBvcnQgY29uc3Qgc2VsZWN0V2hlcmVDb25kaXRpb25zID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLm1ha2VBTGlzdC5wcmVzZXREZXRhaWwud2hlcmVfY29uZGl0aW9uc1xuZXhwb3J0IGNvbnN0IHNlbGVjdFNvcnRDb25kaXRpb25zID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLm1ha2VBTGlzdC5wcmVzZXREZXRhaWwuc29ydF9jb25kaXRpb25zXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RQcmVzZXRMaXN0ID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLm1ha2VBTGlzdC5wcmVzZXRMaXN0XG5leHBvcnQgY29uc3Qgc2VsZWN0UHJlc2V0RGVmYXVsdCA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5tYWtlQUxpc3QucHJlc2V0RGVmYXVsdFxuZXhwb3J0IGNvbnN0IHNlbGVjdFN5c3RlbVByZXNldCA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5tYWtlQUxpc3Quc3lzdGVtUHJlc2V0XG5leHBvcnQgY29uc3Qgc2VsZWN0RmlsdGVyVHlwZSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5tYWtlQUxpc3QuZmlsdGVyVHlwZVxuZXhwb3J0IGNvbnN0IHNlbGVjdFBlcm1pc3Npb25zID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLm1ha2VBTGlzdC5wZXJtaXNzaW9uc1xuZXhwb3J0IGNvbnN0IHNlbGVjdEVudGl0eSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5tYWtlQUxpc3QuZW50aXR5XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RDb2x1bW5zRGF0YSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5tYWtlQUxpc3QuaW5pdERhdGEuY29sdW1uc1xuZXhwb3J0IGNvbnN0IHNlbGVjdENvbXBhcmF0b3JzRGF0YSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5tYWtlQUxpc3QuaW5pdERhdGEuY29tcGFyYXRvcnNcbmV4cG9ydCBjb25zdCBzZWxlY3RMb2dpY2FsT3BlcmF0b3JzRGF0YSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5tYWtlQUxpc3QuaW5pdERhdGEubG9naWNhbE9wZXJhdG9yc1xuZXhwb3J0IGNvbnN0IHNlbGVjdFNvcnRPcHRpb25zRGF0YSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5tYWtlQUxpc3QuaW5pdERhdGEuc29ydE9wdGlvbnNcblxuZXhwb3J0IGNvbnN0IHNlbGVjdExvYWRpbmdUYWJsZSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5tYWtlQUxpc3QubG9hZGluZy50YWJsZVxuZXhwb3J0IGNvbnN0IHNlbGVjdExvYWRpbmdEaWFsb2cgPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUubWFrZUFMaXN0LmxvYWRpbmcuZGlhbG9nXG5leHBvcnQgY29uc3Qgc2VsZWN0U2F2ZUFzRm9ybSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZS5tYWtlQUxpc3Quc2F2ZUFzRm9ybVxuZXhwb3J0IGNvbnN0IHNlbGVjdE1hbEZvcm0gPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGUubWFrZUFMaXN0Lm1hbEZvcm1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZUFMaXN0UmVkdWNlci5yZWR1Y2VyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQWN0aW9uLCBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnXG5cbmltcG9ydCB0eXBlIHsgRW50aXR5IH0gZnJvbSAnQC90eXBlcy9Db21tb24nXG5pbXBvcnQgdHlwZSB7IFJvb3RSZWR1Y2VyVHlwZSB9IGZyb20gJy4vcm9vdFJlZHVjZXInXG5pbXBvcnQgdHlwZSB7XG4gIE1hbnVmYWN0dXJlckluaXREYXRhRm9yQ0UsXG4gIE1hbnVmYWN0dXJlckluaXREYXRhRm9yTGlzdCxcbiAgTWFudWZhY3R1cmVySXRlbSxcbiAgTWFudWZhY3R1cmVyUGVybWlzc2lvbnNcbn0gZnJvbSAnQC90eXBlcy9NYW51ZmFjdHVyZXInXG5cbmV4cG9ydCBjb25zdCBuYW1lOiBFbnRpdHkgPSAnbWFudWZhY3R1cmVyJ1xuXG5leHBvcnQgY29uc3QgcmVzZXRTdGF0ZSA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLlJFU0VUX1NUQVRFfWApXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGRpYWxvZ1N0YXRlOiB7XG4gICAgb3BlbjogZmFsc2UsXG4gICAgbG9hZGluZzogZmFsc2VcbiAgfSxcbiAgZGF0YUxpc3Q6IFtdIGFzIE1hbnVmYWN0dXJlckl0ZW1bXSxcbiAgZGV0YWlsOiB7XG4gICAgbWFudWZhY3R1cmVyX2lkOiBudWxsLFxuICAgIG5hbWU6ICcnXG4gIH0gYXMgTWFudWZhY3R1cmVySXRlbSxcbiAgaW5pdERhdGFGb3JDRToge1xuICAgIG5leHRfY29kZTogbnVsbCxcbiAgICB3aWtpX3BhZ2U6ICcnXG4gIH0gYXMgTWFudWZhY3R1cmVySW5pdERhdGFGb3JDRSxcbiAgaW5pdERhdGFGb3JMaXN0OiB7XG4gICAgcGVybWlzc2lvbnM6IHtcbiAgICAgIG1hbnVmYWN0dXJlcjogbnVsbFxuICAgIH0sXG4gICAgd2lraV9wYWdlOiAnJyxcbiAgICBjb2x1bW5fdG9vbHRpcHM6IHt9XG4gIH0gYXMgTWFudWZhY3R1cmVySW5pdERhdGFGb3JMaXN0XG59XG5cbmNvbnN0IG1hbnVmYWN0dXJlciA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZSxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldERpYWxvZ1N0YXRlKHN0YXRlLCB7IHBheWxvYWQgfSkge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLmRpYWxvZ1N0YXRlLFxuICAgICAgICAuLi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSxcbiAgICBzZXREaWFsb2dTdGF0ZU9wZW4oc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZS5vcGVuID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0RGlhbG9nU3RhdGVMb2FkaW5nKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUubG9hZGluZyA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERhdGFMaXN0KHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxNYW51ZmFjdHVyZXJJdGVtW10+KSB7XG4gICAgICBzdGF0ZS5kYXRhTGlzdCA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERldGFpbChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFydGlhbDxNYW51ZmFjdHVyZXJJdGVtPj4pIHtcbiAgICAgIHN0YXRlLmRldGFpbCA9IHtcbiAgICAgICAgLi4uc3RhdGUuZGV0YWlsLFxuICAgICAgICAuLi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRJbml0RGF0YUZvckxpc3Qoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPE1hbnVmYWN0dXJlckluaXREYXRhRm9yTGlzdD4pIHtcbiAgICAgIHN0YXRlLmluaXREYXRhRm9yTGlzdCA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldEluaXREYXRhRm9yQ0Uoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPE1hbnVmYWN0dXJlckluaXREYXRhRm9yQ0U+KSB7XG4gICAgICBzdGF0ZS5pbml0RGF0YUZvckNFID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0UGVybWlzc2lvbnMoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPE1hbnVmYWN0dXJlclBlcm1pc3Npb25zPikge1xuICAgICAgc3RhdGUuaW5pdERhdGFGb3JMaXN0LnBlcm1pc3Npb25zLm1hbnVmYWN0dXJlciA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldE5leHRDb2RlKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XG4gICAgICBzdGF0ZS5pbml0RGF0YUZvckNFLm5leHRfY29kZSA9IHBheWxvYWRcbiAgICB9LFxuICAgIHJlc2V0RGV0YWlsKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5kZXRhaWwgPSB7XG4gICAgICAgIC4uLmluaXRpYWxTdGF0ZS5kZXRhaWwsXG4gICAgICAgIG1hbnVmYWN0dXJlcl9pZDogc3RhdGUuaW5pdERhdGFGb3JDRS5uZXh0X2NvZGVcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IHtcbiAgICBbcmVzZXRTdGF0ZS50eXBlXSgpIHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGVcbiAgICB9XG4gIH1cbn0pXG5cbi8vIEFjdGlvbnNcbmV4cG9ydCBjb25zdCB7IGFjdGlvbnMgfSA9IG1hbnVmYWN0dXJlclxuXG4vLyBTYWdhIGFjdGlvbnNcbmV4cG9ydCBjb25zdCBzYWdhR2V0TGlzdCA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkdFVF9MSVNUfWApXG5leHBvcnQgY29uc3Qgc2FnYUNyZWF0ZSA9IGNyZWF0ZUFjdGlvbjxNYW51ZmFjdHVyZXJJdGVtPihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkNSRUFURX1gKVxuZXhwb3J0IGNvbnN0IHNhZ2FVcGRhdGUgPSBjcmVhdGVBY3Rpb248eyBpZDogbnVtYmVyOyBmb3JtRGF0YTogTWFudWZhY3R1cmVySXRlbSB9PihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLlVQREFURX1gKVxuZXhwb3J0IGNvbnN0IHNhZ2FPcGVuQ3JlYXRlRGlhbG9nID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7YWN0aW9uVHlwZXMuT1BFTl9DUkVBVEVfRElBTE9HfWApXG5leHBvcnQgY29uc3Qgc2FnYU9wZW5VcGRhdGVEaWFsb2cgPSBjcmVhdGVBY3Rpb248bnVtYmVyPihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLk9QRU5fVVBEQVRFX0RJQUxPR31gKVxuZXhwb3J0IGNvbnN0IHNhZ2FHZW5lcmF0ZUNvZGUgPSBjcmVhdGVBY3Rpb248TWFudWZhY3R1cmVySXRlbT4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5HRVRfR0VORVJBVEVfQ09ERX1gKVxuZXhwb3J0IGNvbnN0IHNhZ2FDbG9zZURpYWxvZyA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkNMT1NFX0RJQUxPR31gKVxuXG4vLyBTZWxlY3RvcnNcbmV4cG9ydCBjb25zdCBzZWxlY3RTdGF0ZSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZVtuYW1lXVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0RGlhbG9nU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5kaWFsb2dTdGF0ZSlcbmV4cG9ydCBjb25zdCBzZWxlY3REYXRhTGlzdCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmRhdGFMaXN0KVxuZXhwb3J0IGNvbnN0IHNlbGVjdERldGFpbCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmRldGFpbClcbmV4cG9ydCBjb25zdCBzZWxlY3RQZXJtaXNzaW9ucyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmluaXREYXRhRm9yTGlzdC5wZXJtaXNzaW9ucy5tYW51ZmFjdHVyZXIpXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJbml0RGF0YUZvckxpc3QgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5pbml0RGF0YUZvckxpc3QpXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJbml0RGF0YUZvckNFID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuaW5pdERhdGFGb3JDRSlcblxuZXhwb3J0IGRlZmF1bHQgbWFudWZhY3R1cmVyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlQWN0aW9uLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgKiBhcyBjb25zdGFudCBmcm9tICdAL3V0aWxzL2NvbnN0YW50J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgY3JlYXRlRXh0cmFBY3Rpb25zIGZyb20gJ0AvdXRpbHMvY3JlYXRlRXh0cmFBY3Rpb25zJ1xuXG5pbXBvcnQge1xuICBQYXJhbWV0ZXJJbml0RGF0YUZvckNFLFxuICBQYXJhbWV0ZXJJbml0RGF0YUZvckxpc3QsXG4gIFBhcmFtZXRlckluc3RhbmNlLFxuICBQYXJhbWV0ZXJQZXJtaXNzaW9ucyxcbiAgUGFyYW1ldGVyVHlwZVxufSBmcm9tICdAL3R5cGVzL1BhcmFtZXRlcidcbmltcG9ydCB7IFJvb3RSZWR1Y2VyVHlwZSB9IGZyb20gJy4vcm9vdFJlZHVjZXInXG5pbXBvcnQgeyBIaXN0b3J5TG9nIH0gZnJvbSAnQC90eXBlcy9Db21tb24nXG5cbmNvbnN0IG5hbWUgPSAncGFyYW1ldGVyJ1xuZXhwb3J0IGNvbnN0IHJlc2V0U3RhdGUgPSBjcmVhdGVBY3Rpb24oYCR7bmFtZX0vJHtjb25zdGFudC5hY3Rpb25UeXBlcy5SRVNFVF9TVEFURX1gKVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGRhdGFMaXN0OiBbXSBhcyBQYXJhbWV0ZXJJbnN0YW5jZVtdLFxuICBkZXRhaWw6IHtcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgaXNfZGVmYXVsdDogZmFsc2UsXG4gICAgb3JkZXI6IG51bGwsXG4gICAgcGFyYW1ldGVyX2lkOiAnJyxcbiAgICBwYXJhbWV0ZXJfdHlwZV9pZDogbnVsbCwgLy8gZ2V0IGZyb20gcGFyYW1zIGluIHRoZSB1cmxcbiAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICBkZXNjcmlwdGlvbnM6IFtdXG4gIH0gYXMgUGFyYW1ldGVySW5zdGFuY2UsXG4gIGluaXREYXRhRm9yTGlzdDoge1xuICAgIHBlcm1pc3Npb25zOiB7XG4gICAgICBhcHBsaWNhdGlvbl9wYXJhbWV0ZXI6IG51bGwsXG4gICAgICBkZXZlbG9wZXJfcGFyYW1ldGVyOiBudWxsLFxuICAgICAgc2ltcGxlX3BhcmFtZXRlcjogbnVsbFxuICAgIH0sXG4gICAgY29sdW1uX3Rvb2x0aXBzOiB7fVxuICB9IGFzIFBhcmFtZXRlckluaXREYXRhRm9yTGlzdCxcbiAgaW5pdERhdGFGb3JDRToge1xuICAgIGF0dHJpYnV0ZXM6ICcnLFxuICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgIGlzX211bHRpbGluZ3VhbDogZmFsc2UsXG4gICAgcGFyYW1fdHlwZV9pZDogbnVsbCxcbiAgICBwYXJhbV90eXBlX3Jhd19pZDogJycsXG4gICAgcGFyYW1fdHlwZV9zcGVjaWZpY19jb25maWc6IG51bGwsXG4gICAgcGFyYW1ldGVyczoge1xuICAgICAgUExMQTogW11cbiAgICB9XG4gIH0gYXMgUGFyYW1ldGVySW5pdERhdGFGb3JDRSxcbiAgZGlhbG9nU3RhdGU6IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgaGlzdG9yeUxvZ3M6IFtdIGFzIEhpc3RvcnlMb2dbXVxuICB9LFxuICBwYXJhbWV0ZXJUeXBlOiB7XG4gICAgY2F0ZWdvcnk6IG51bGwsXG4gICAgaWQ6IG51bGwsXG4gICAgdHlwZV9pZDogJydcbiAgfSBhcyBQYXJhbWV0ZXJUeXBlXG59XG5cbmNvbnN0IHBhcmFtZXRlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0RGF0YShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFyYW1ldGVySW5zdGFuY2VbXT4pIHtcbiAgICAgIHN0YXRlLmRhdGFMaXN0ID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0SW5pdERhdGFGb3JMaXN0KHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxQYXJhbWV0ZXJJbml0RGF0YUZvckxpc3Q+KSB7XG4gICAgICBzdGF0ZS5pbml0RGF0YUZvckxpc3QgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRJbml0RGF0YUZvckNFKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxQYXJhbWV0ZXJJbml0RGF0YUZvckNFPikge1xuICAgICAgc3RhdGUuaW5pdERhdGFGb3JDRSA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERldGFpbChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFydGlhbDxQYXJhbWV0ZXJJbnN0YW5jZT4+KSB7XG4gICAgICBzdGF0ZS5kZXRhaWwgPSB7XG4gICAgICAgIC4uLnN0YXRlLmRldGFpbCxcbiAgICAgICAgLi4ucGF5bG9hZFxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0RGlhbG9nU3RhdGUoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFBhcnRpYWw8dHlwZW9mIGluaXRpYWxTdGF0ZS5kaWFsb2dTdGF0ZT4+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUuZGlhbG9nU3RhdGUsXG4gICAgICAgIC4uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldERpYWxvZ1N0YXRlT3BlbihzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pIHtcbiAgICAgIHN0YXRlLmRpYWxvZ1N0YXRlLm9wZW4gPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXREaWFsb2dTdGF0ZUVkaXRNb2RlKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUuZWRpdE1vZGUgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXREaWFsb2dTdGF0ZUxvYWRpbmcoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZS5sb2FkaW5nID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0SGlzdG9yeUxvZ3Moc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPEhpc3RvcnlMb2dbXT4pIHtcbiAgICAgIHN0YXRlLmRpYWxvZ1N0YXRlLmhpc3RvcnlMb2dzID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0UGFyYW1ldGVyVHlwZShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFyYW1ldGVyVHlwZT4pIHtcbiAgICAgIHN0YXRlLnBhcmFtZXRlclR5cGUgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRQZXJtaXNzaW9ucyhzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFyYW1ldGVyUGVybWlzc2lvbnM+KSB7XG4gICAgICBzdGF0ZS5pbml0RGF0YUZvckxpc3QucGVybWlzc2lvbnMgPSBwYXlsb2FkXG4gICAgfSxcbiAgICByZXNldExvY2F0aW9uRGV0YWlsKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5kZXRhaWwgPSB7XG4gICAgICAgIC4uLmluaXRpYWxTdGF0ZS5kZXRhaWwsXG4gICAgICAgIHBhcmFtZXRlcl90eXBlX2lkOiBzdGF0ZS5kZXRhaWwucGFyYW1ldGVyX3R5cGVfaWRcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IHtcbiAgICBbcmVzZXRTdGF0ZS50eXBlXSgpIHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGVcbiAgICB9XG4gIH1cbn0pXG5cbi8vIEFjdGlvbnNcbmV4cG9ydCBjb25zdCB7IGFjdGlvbnMgfSA9IHBhcmFtZXRlclNsaWNlXG5cbi8vIEV4dHJhIGFjdGlvbnNcbmV4cG9ydCBjb25zdCBleHRyYUFjdGlvbnMgPSBjcmVhdGVFeHRyYUFjdGlvbnMobmFtZSwge1xuICBnZXRMaXN0OiBjb25zdGFudC5hY3Rpb25UeXBlcy5HRVRfTElTVCxcbiAgY3JlYXRlOiBjb25zdGFudC5hY3Rpb25UeXBlcy5DUkVBVEUsXG4gIHVwZGF0ZTogY29uc3RhbnQuYWN0aW9uVHlwZXMuVVBEQVRFLFxuICBleGVjdXRlT3BlcmF0aW9uOiBjb25zdGFudC5hY3Rpb25UeXBlcy5FWEVDVVRFX09QRVJBVElPTixcbiAgb3BlbkNyZWF0ZURpYWxvZzogY29uc3RhbnQuYWN0aW9uVHlwZXMuT1BFTl9DUkVBVEVfRElBTE9HLFxuICBvcGVuVXBkYXRlRGlhbG9nOiBjb25zdGFudC5hY3Rpb25UeXBlcy5PUEVOX1VQREFURV9ESUFMT0csXG4gIGNsb3NlRGlhbG9nOiBjb25zdGFudC5hY3Rpb25UeXBlcy5DTE9TRV9ESUFMT0dcbn0pXG5cbi8vIFNlbGVjdG9yc1xuZXhwb3J0IGNvbnN0IHNlbGVjdFN0YXRlID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlW25hbWVdXG5leHBvcnQgY29uc3Qgc2VsZWN0SW5pdERhdGFGb3JMaXN0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuaW5pdERhdGFGb3JMaXN0KVxuZXhwb3J0IGNvbnN0IHNlbGVjdEluaXREYXRhRm9yQ0UgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5pbml0RGF0YUZvckNFKVxuZXhwb3J0IGNvbnN0IHNlbGVjdERhdGFMaXN0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuZGF0YUxpc3QpXG5leHBvcnQgY29uc3Qgc2VsZWN0RGV0YWlsID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuZGV0YWlsKVxuZXhwb3J0IGNvbnN0IHNlbGVjdERpYWxvZ1N0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuZGlhbG9nU3RhdGUpXG5leHBvcnQgY29uc3Qgc2VsZWN0SW5pdFBhcmFtZXRlciA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmluaXREYXRhRm9yQ0UucGFyYW1ldGVycylcbmV4cG9ydCBjb25zdCBzZWxlY3RQZXJtaXNzaW9ucyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHtcbiAgY29uc3QgeyBjYXRlZ29yeSB9ID0gc3RhdGUucGFyYW1ldGVyVHlwZVxuICBjb25zdCB7IHBlcm1pc3Npb25zIH0gPSBzdGF0ZS5pbml0RGF0YUZvckxpc3RcbiAgaWYgKF8uaXNOdWxsKHBlcm1pc3Npb25zLmFwcGxpY2F0aW9uX3BhcmFtZXRlcikpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGNvbnN0IGdldFBlcm1pc3Npb25CYXNlT25OYW1lID0gKG5hbWUpID0+XG4gICAgKHBlcm1pc3Npb25zLmFwcGxpY2F0aW9uX3BhcmFtZXRlcltuYW1lXSAmJiBjYXRlZ29yeSA9PT0gMikgfHxcbiAgICAocGVybWlzc2lvbnMuZGV2ZWxvcGVyX3BhcmFtZXRlcltuYW1lXSAmJiBjYXRlZ29yeSA9PT0gMykgfHxcbiAgICAocGVybWlzc2lvbnMuc2ltcGxlX3BhcmFtZXRlcltuYW1lXSAmJiBjYXRlZ29yeSA9PT0gMSlcbiAgcmV0dXJuIHtcbiAgICB2aWV3OiBnZXRQZXJtaXNzaW9uQmFzZU9uTmFtZSgndmlldycpLFxuICAgIGNyZWF0ZTogZ2V0UGVybWlzc2lvbkJhc2VPbk5hbWUoJ2NyZWF0ZScpLFxuICAgIGVkaXQ6IGdldFBlcm1pc3Npb25CYXNlT25OYW1lKCdlZGl0JyksXG4gICAgZGVsZXRlOiBnZXRQZXJtaXNzaW9uQmFzZU9uTmFtZSgnZGVsZXRlJyksXG4gICAgZGlzYWJsZV9lbmFibGU6IGdldFBlcm1pc3Npb25CYXNlT25OYW1lKCdkaXNhYmxlX2VuYWJsZScpXG4gIH1cbn0pXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RWaWV3UGVybWlzc2lvbiA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoeyBpbml0RGF0YUZvckxpc3QgfSkgPT4ge1xuICBjb25zdCB7IHBlcm1pc3Npb25zIH0gPSBpbml0RGF0YUZvckxpc3RcbiAgcmV0dXJuIChcbiAgICBwZXJtaXNzaW9ucy5hcHBsaWNhdGlvbl9wYXJhbWV0ZXI/LnZpZXcgfHxcbiAgICBwZXJtaXNzaW9ucy5kZXZlbG9wZXJfcGFyYW1ldGVyPy52aWV3IHx8XG4gICAgcGVybWlzc2lvbnMuc2ltcGxlX3BhcmFtZXRlcj8udmlld1xuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBwYXJhbWV0ZXJTbGljZVxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFjdGlvbiwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnXG5pbXBvcnQgY3JlYXRlRXh0cmFBY3Rpb25zIGZyb20gJ0AvdXRpbHMvY3JlYXRlRXh0cmFBY3Rpb25zJ1xuXG5pbXBvcnQgdHlwZSB7IEVudGl0eSwgSGlzdG9yeUxvZyB9IGZyb20gJ0AvdHlwZXMvQ29tbW9uJ1xuaW1wb3J0IHR5cGUgeyBSb290UmVkdWNlclR5cGUgfSBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xuaW1wb3J0IHR5cGUge1xuICBQYXJhbWV0ZXJUeXBlSXRlbSxcbiAgUGFyYW1ldGVyVHlwZUluc3RhY2UsXG4gIFBhcmFtZXRlclR5cGVJbml0RGF0YUZvckxpc3QsXG4gIFBhcmFtZXRlclR5cGVJbml0RGF0YUZvckNFLFxuICBQYXJhbWV0ZXJUeXBlUGVybWlzc2lvbnMsXG4gIFBhcmFtZXRlclR5cGVQZXJtaXNzaW9uXG59IGZyb20gJ0AvdHlwZXMvUGFyYW1ldGVyVHlwZSdcblxuZXhwb3J0IGNvbnN0IG5hbWU6IEVudGl0eSA9ICdwYXJhbWV0ZXJfdHlwZSdcbmV4cG9ydCBjb25zdCByZXNldFN0YXRlID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7YWN0aW9uVHlwZXMuUkVTRVRfU1RBVEV9YClcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGRhdGFMaXN0OiBbXSxcbiAgZGV0YWlsOiB7XG4gICAgdHlwZV9pZDogJycsXG4gICAgY2F0ZWdvcnk6IDEsXG4gICAgaXNfbXVsdGlsaW5ndWFsOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgYXR0cmlidXRlczogJycsXG4gICAgbmJyX2RlZmF1bHQ6IDBcbiAgfSBhcyBQYXJhbWV0ZXJUeXBlSW5zdGFjZSxcbiAgZGlhbG9nU3RhdGU6IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgaGlzdG9yeUxvZ3M6IFtdIGFzIEhpc3RvcnlMb2dbXVxuICB9LFxuICBpbml0RGF0YUZvckxpc3Q6IHtcbiAgICBwZXJtaXNzaW9uczoge1xuICAgICAgYXBwbGljYXRpb25fcGFyYW1ldGVyX3R5cGU6IG51bGwsXG4gICAgICBkZXZlbG9wZXJfcGFyYW1ldGVyX3R5cGU6IG51bGwsXG4gICAgICBzaW1wbGVfcGFyYW1ldGVyX3R5cGU6IG51bGxcbiAgICB9LFxuICAgIHdpa2lfcGFnZTogJycsXG4gICAgY29sdW1uX3Rvb2x0aXBzOiB7fVxuICB9IGFzIFBhcmFtZXRlclR5cGVJbml0RGF0YUZvckxpc3QsXG4gIGluaXREYXRhRm9yQ0U6IHtcbiAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICB3aWtpX3BhZ2U6ICcnXG4gIH0gYXMgUGFyYW1ldGVyVHlwZUluaXREYXRhRm9yQ0Vcbn1cblxuY29uc3QgcGFyYW1ldGVyVHlwZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0RGF0YUxpc3Qoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFBhcmFtZXRlclR5cGVJdGVtW10+KSB7XG4gICAgICBzdGF0ZS5kYXRhTGlzdCA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERldGFpbChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFydGlhbDxQYXJhbWV0ZXJUeXBlSW5zdGFjZT4+KSB7XG4gICAgICBzdGF0ZS5kZXRhaWwgPSB7XG4gICAgICAgIC4uLnN0YXRlLmRldGFpbCxcbiAgICAgICAgLi4ucGF5bG9hZFxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0RGlhbG9nU3RhdGUoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFBhcnRpYWw8dHlwZW9mIGluaXRpYWxTdGF0ZS5kaWFsb2dTdGF0ZT4+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUuZGlhbG9nU3RhdGUsXG4gICAgICAgIC4uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldEhpc3RvcnlMb2dzKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxIaXN0b3J5TG9nW10+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZS5oaXN0b3J5TG9ncyA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERpYWxvZ1N0YXRlT3BlbihzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pIHtcbiAgICAgIHN0YXRlLmRpYWxvZ1N0YXRlLm9wZW4gPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXREaWFsb2dTdGF0ZUVkaXRNb2RlKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUuZWRpdE1vZGUgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXREaWFsb2dTdGF0ZUxvYWRpbmcoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZS5sb2FkaW5nID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0SW5pdERhdGFGb3JMaXN0KHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxQYXJhbWV0ZXJUeXBlSW5pdERhdGFGb3JMaXN0Pikge1xuICAgICAgc3RhdGUuaW5pdERhdGFGb3JMaXN0ID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0SW5pdERhdGFGb3JDRShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFyYW1ldGVyVHlwZUluaXREYXRhRm9yQ0U+KSB7XG4gICAgICBzdGF0ZS5pbml0RGF0YUZvckNFID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0UGVybWlzc2lvbnMoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFBhcmFtZXRlclR5cGVQZXJtaXNzaW9ucz4pIHtcbiAgICAgIHN0YXRlLmluaXREYXRhRm9yTGlzdC5wZXJtaXNzaW9ucyA9IHBheWxvYWRcbiAgICB9LFxuICAgIHJlc2V0RGV0YWlsKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5kZXRhaWwgPSB7IC4uLmluaXRpYWxTdGF0ZS5kZXRhaWwgfVxuICAgIH1cbiAgfSxcbiAgZXh0cmFSZWR1Y2Vyczoge1xuICAgIFtyZXNldFN0YXRlLnR5cGVdKCkge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZVxuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHsgYWN0aW9ucyB9ID0gcGFyYW1ldGVyVHlwZVNsaWNlXG5cbmV4cG9ydCBjb25zdCBleHRyYUFjdGlvbnMgPSBjcmVhdGVFeHRyYUFjdGlvbnMobmFtZSwge1xuICBnZXRMaXN0OiBhY3Rpb25UeXBlcy5HRVRfTElTVCxcbiAgY3JlYXRlOiBhY3Rpb25UeXBlcy5DUkVBVEUsXG4gIHVwZGF0ZTogYWN0aW9uVHlwZXMuVVBEQVRFLFxuICBvcGVuVXBkYXRlRGlhbG9nOiBhY3Rpb25UeXBlcy5PUEVOX1VQREFURV9ESUFMT0csXG4gIG9wZW5DcmVhdGVEaWFsb2c6IGFjdGlvblR5cGVzLk9QRU5fQ1JFQVRFX0RJQUxPRyxcbiAgZXhlY3V0ZU9wZXJhdGlvbjogYWN0aW9uVHlwZXMuRVhFQ1VURV9PUEVSQVRJT04sXG4gIGNsb3NlRGlhbG9nOiBhY3Rpb25UeXBlcy5DTE9TRV9ESUFMT0dcbn0pXG5cbmNvbnN0IHNlbGVjdFN0YXRlID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlW25hbWVdXG5leHBvcnQgY29uc3Qgc2VsZWN0RGlhbG9nU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHsgZGlhbG9nU3RhdGUgfSkgPT4gZGlhbG9nU3RhdGUpXG5leHBvcnQgY29uc3Qgc2VsZWN0RGF0YUxpc3QgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHsgZGF0YUxpc3QgfSkgPT4gZGF0YUxpc3QpXG5leHBvcnQgY29uc3Qgc2VsZWN0RGV0YWlsID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsICh7IGRldGFpbCB9KSA9PiBkZXRhaWwpXG5leHBvcnQgY29uc3Qgc2VsZWN0SW5pdERhdGFGb3JMaXN0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsICh7IGluaXREYXRhRm9yTGlzdCB9KSA9PiBpbml0RGF0YUZvckxpc3QpXG5leHBvcnQgY29uc3Qgc2VsZWN0SW5pdERhdGFGb3JDRSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoeyBpbml0RGF0YUZvckNFIH0pID0+IGluaXREYXRhRm9yQ0UpXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RQZXJtaXNzaW9ucyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoeyBpbml0RGF0YUZvckxpc3QgfSkgPT4ge1xuICBjb25zdCB7IHBlcm1pc3Npb25zIH0gPSBpbml0RGF0YUZvckxpc3RcbiAgaWYgKF8uaXNOdWxsKHBlcm1pc3Npb25zLmFwcGxpY2F0aW9uX3BhcmFtZXRlcl90eXBlKSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgZ2V0UGVybWlzc2lvbkJhc2VPbk5hbWUgPSAobmFtZToga2V5b2YgUGFyYW1ldGVyVHlwZVBlcm1pc3Npb24pID0+XG4gICAgcGVybWlzc2lvbnMuYXBwbGljYXRpb25fcGFyYW1ldGVyX3R5cGVbbmFtZV0gfHxcbiAgICBwZXJtaXNzaW9ucy5kZXZlbG9wZXJfcGFyYW1ldGVyX3R5cGVbbmFtZV0gfHxcbiAgICBwZXJtaXNzaW9ucy5zaW1wbGVfcGFyYW1ldGVyX3R5cGVbbmFtZV1cbiAgcmV0dXJuIHtcbiAgICB2aWV3OiBnZXRQZXJtaXNzaW9uQmFzZU9uTmFtZSgndmlldycpLFxuICAgIGNyZWF0ZTogZ2V0UGVybWlzc2lvbkJhc2VPbk5hbWUoJ2NyZWF0ZScpLFxuICAgIGRpc2FibGVfZW5hYmxlOiBnZXRQZXJtaXNzaW9uQmFzZU9uTmFtZSgnZGlzYWJsZV9lbmFibGUnKSxcbiAgICBkZWxldGU6IGdldFBlcm1pc3Npb25CYXNlT25OYW1lKCdkZWxldGUnKVxuICB9XG59KVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0RWRpdFBlcm1pc3Npb24gPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHsgaW5pdERhdGFGb3JMaXN0LCBkZXRhaWwgfSkgPT4ge1xuICBjb25zdCB7IHBlcm1pc3Npb25zIH0gPSBpbml0RGF0YUZvckxpc3RcbiAgY29uc3QgeyBjYXRlZ29yeSB9ID0gZGV0YWlsXG4gIGlmIChfLmlzTnVsbChwZXJtaXNzaW9ucy5hcHBsaWNhdGlvbl9wYXJhbWV0ZXJfdHlwZSkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gKFxuICAgIChjYXRlZ29yeSA9PT0gMSAmJiBwZXJtaXNzaW9ucy5zaW1wbGVfcGFyYW1ldGVyX3R5cGUuZWRpdCkgfHxcbiAgICAoY2F0ZWdvcnkgPT09IDIgJiYgcGVybWlzc2lvbnMuYXBwbGljYXRpb25fcGFyYW1ldGVyX3R5cGUuZWRpdCkgfHxcbiAgICAoY2F0ZWdvcnkgPT09IDMgJiYgcGVybWlzc2lvbnMuZGV2ZWxvcGVyX3BhcmFtZXRlcl90eXBlLmVkaXQpXG4gIClcbn0pXG5leHBvcnQgZGVmYXVsdCBwYXJhbWV0ZXJUeXBlU2xpY2VcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVTZWxlY3RvciwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnQC91dGlscy9jb25zdGFudCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IGdldERlZmF1bHRWYWx1ZXMgfSBmcm9tICdAL3V0aWxzL2dldERlZmF1bHRWYWx1ZXMnXG5pbXBvcnQgaXNBc3NlbWJseSBmcm9tICdAL3V0aWxzL2lzQXNzZW1ibHknXG5pbXBvcnQgeyBtYW51ZmFjdHVyZXJTdG9yZSB9IGZyb20gJ0Avc3RvcmUvcmVkdWNlcnMnXG5cbmltcG9ydCB0eXBlIHsgUm9vdFJlZHVjZXJUeXBlIH0gZnJvbSAnLi9yb290UmVkdWNlcidcbmltcG9ydCB0eXBlIHsgSXRlbURldGFpbCwgSXRlbU1hbnVmYWN0dXJlciB9IGZyb20gJ0AvdHlwZXMvSXRlbSdcbmltcG9ydCB0eXBlIHsgQXNzZW1ibHlEZXRhaWwgfSBmcm9tICdAL3R5cGVzL0Fzc2VtYmx5J1xuaW1wb3J0IHR5cGUgeyBEYXRhRm9yRHJvcGRvd24sIEhpc3RvcnlMb2csIFBhcmFtZXRlck9wdGlvbiB9IGZyb20gJ0AvdHlwZXMvQ29tbW9uJ1xuaW1wb3J0IHR5cGUgeyBQYXJ0RGV0YWlsLCBQYXJ0RW50aXR5IH0gZnJvbSAnQC90eXBlcy9QYXJ0J1xuaW1wb3J0IHR5cGUgeyBNYW51ZmFjdHVyZXJJbml0RGF0YUZvckNFLCBNYW51ZmFjdHVyZXJQZXJtaXNzaW9ucywgTWFudWZhY3R1cmVySXRlbSB9IGZyb20gJ0AvdHlwZXMvTWFudWZhY3R1cmVyJ1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdwYXJ0J1xuXG5leHBvcnQgdHlwZSBQYXJ0ID0ge1xuICBkZXRhaWw6IEl0ZW1EZXRhaWwgfCBBc3NlbWJseURldGFpbFxuICBwZXJtaXNzaW9uczogYW55XG4gIHdpa2lfcGFnZTogc3RyaW5nXG4gIGxvYWRpbmc6IGJvb2xlYW5cbiAgdGFiOiBudW1iZXJcbiAgaGlzdG9yeUxvZ3M6IEhpc3RvcnlMb2dbXVxufVxuXG5leHBvcnQgY29uc3QgaXRlbURldGFpbCA9IHtcbiAgam9iX2lkOiBudWxsLFxuICBkcmF3aW5nX2lkOiBudWxsLFxuICBkcG46ICcnLFxuICByZWZlcmVuY2VfdG86IG51bGwsXG4gIG1hc3M6IDAsXG4gIHVuaXQ6IG51bGwsXG4gIG1hbnVmYWN0dXJlcl9lcXVpdjogbnVsbCxcbiAgbWFudWZhY3R1cmVyczogW10sXG4gIG1hdGVyaWFsX2VxdWl2OiBudWxsLFxuICBkZXNjcmlwdGlvbnM6IFtdLFxuICBtYW51ZmFjdHVyZXJfZXF1aXZfc3RhbmRhcmRzOiBbXSxcbiAgbWF0ZXJpYWxfZXF1aXZfc3RhbmRhcmRzOiBbXSxcbiAgYWRkaXRpb25hbF9hdHRyaWJ1dGVzOiB7fVxufSBhcyBJdGVtRGV0YWlsXG5cbmV4cG9ydCBjb25zdCBhc3NlbWJseURldGFpbCA9IHtcbiAgam9iX2lkOiBudWxsLFxuICBkcmF3aW5nX2lkOiBudWxsLFxuICBkcG46ICcnLFxuICB1bml0OiBudWxsLFxuICBkZXNjcmlwdGlvbnM6IFtdLFxuICBpdGVtczogW10sXG4gIG1hbnVmYWN0dXJlcnM6IFtdLFxuICBpc19hc3NlbWJseTogdHJ1ZSxcbiAgYWRkaXRpb25hbF9hdHRyaWJ1dGVzOiB7fSxcbiAgZHJhd2luZ19pdGVtczogW11cbn0gYXMgQXNzZW1ibHlEZXRhaWxcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcGFydExpc3Q6IFtdIGFzIFBhcnRbXSxcbiAgaW5pdERhdGE6IHtcbiAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICBNQUFUOiBbXSxcbiAgICAgIFBMTEE6IFtdLFxuICAgICAgVU5JVDogW10sXG4gICAgICBQQUFUOiBbXVxuICAgIH1cbiAgfSxcbiAgY29uZmlybVJlZjoge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICcnXG4gIH0sXG4gIG1hbnVmYWN0dXJlcjoge1xuICAgIGRldGFpbDogbWFudWZhY3R1cmVyU3RvcmUuaW5pdGlhbFN0YXRlLmRldGFpbCxcbiAgICBkaWFsb2dTdGF0ZTogbWFudWZhY3R1cmVyU3RvcmUuaW5pdGlhbFN0YXRlLmRpYWxvZ1N0YXRlLFxuICAgIGluaXREYXRhOiB7XG4gICAgICAuLi5tYW51ZmFjdHVyZXJTdG9yZS5pbml0aWFsU3RhdGUuaW5pdERhdGFGb3JDRSxcbiAgICAgIHBlcm1pc3Npb25zOiBudWxsIGFzIE1hbnVmYWN0dXJlclBlcm1pc3Npb25zXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHBhcnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZSxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGFkZFBhcnQoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFBpY2s8UGFydCwgJ2RldGFpbCcgfCAncGVybWlzc2lvbnMnIHwgJ3dpa2lfcGFnZSc+Pikge1xuICAgICAgY29uc3QgcGFydCA9IHtcbiAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHRhYjogMCxcbiAgICAgICAgaGlzdG9yeUxvZ3M6IFtdXG4gICAgICB9IGFzIFBhcnRcbiAgICAgIHN0YXRlLnBhcnRMaXN0LnB1c2gocGFydClcbiAgICB9LFxuICAgIHNldEluaXREYXRhKHN0YXRlLCB7IHBheWxvYWQgfSkge1xuICAgICAgc3RhdGUuaW5pdERhdGEgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRIaXN0b3J5TG9ncyhzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248SGlzdG9yeUxvZ1tdPikge1xuICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHN0YXRlLnBhcnRMaXN0XG4gICAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgICBzdGF0ZS5wYXJ0TGlzdFtsZW5ndGggLSAxXS5oaXN0b3J5TG9ncyA9IHBheWxvYWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFBhcnRMb2FkaW5nKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgY29uc3QgY3VycmVudFBhcnQgPSBfLmxhc3Qoc3RhdGUucGFydExpc3QpXG4gICAgICBjb25zdCB7IGxlbmd0aCB9ID0gc3RhdGUucGFydExpc3RcbiAgICAgIGlmIChsZW5ndGggPD0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50UGFydC5sb2FkaW5nICE9PSBwYXlsb2FkKSB7XG4gICAgICAgIHN0YXRlLnBhcnRMaXN0W2xlbmd0aCAtIDFdLmxvYWRpbmcgPSBwYXlsb2FkXG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVDdXJyZW50UGFydChzdGF0ZSwgeyBwYXlsb2FkIH0pIHtcbiAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBzdGF0ZS5wYXJ0TGlzdFxuICAgICAgc3RhdGUucGFydExpc3RbbGVuZ3RoIC0gMV0uZGV0YWlsID0ge1xuICAgICAgICAuLi5zdGF0ZS5wYXJ0TGlzdFtsZW5ndGggLSAxXS5kZXRhaWwsXG4gICAgICAgIC4uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldENvbmZpcm1SZWYoc3RhdGUsIHsgcGF5bG9hZCB9KSB7XG4gICAgICBzdGF0ZS5jb25maXJtUmVmLm9wZW4gPSBwYXlsb2FkLm9wZW5cbiAgICAgIHN0YXRlLmNvbmZpcm1SZWYubWVzc2FnZSA9IHBheWxvYWQubWVzc2FnZVxuICAgIH0sXG4gICAgc2V0Q29uZmlybVJlZk9wZW4oc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5jb25maXJtUmVmLm9wZW4gPSBwYXlsb2FkXG4gICAgfSxcbiAgICByZXNldEN1cnJlbnRQYXJ0KFxuICAgICAgc3RhdGUsXG4gICAgICB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjx7IHVzZXJKb2I6IFBhcmFtZXRlck9wdGlvbjsgdXNlckRyYXdpbmc6IERhdGFGb3JEcm9wZG93bjsgZ2VuZXJhdGVDb2RlPzogc3RyaW5nIH0+XG4gICAgKSB7XG4gICAgICBjb25zdCB7IGxlbmd0aCB9ID0gc3RhdGUucGFydExpc3RcbiAgICAgIGNvbnN0IHsgdXNlckpvYiwgdXNlckRyYXdpbmcsIGdlbmVyYXRlQ29kZSB9ID0gcGF5bG9hZFxuICAgICAgY29uc3QgY3VycmVudFBhcnQgPSBzdGF0ZS5wYXJ0TGlzdFtsZW5ndGggLSAxXS5kZXRhaWxcbiAgICAgIGNvbnN0IGluaXREZXRhaWwgPSBpc0Fzc2VtYmx5KGN1cnJlbnRQYXJ0KSA/IGFzc2VtYmx5RGV0YWlsIDogaXRlbURldGFpbFxuICAgICAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IGdldERlZmF1bHRWYWx1ZXMoXG4gICAgICAgIHN0YXRlLmluaXREYXRhLnBhcmFtZXRlcnMsXG4gICAgICAgIHtcbiAgICAgICAgICB1bml0OiAnVU5JVCdcbiAgICAgICAgfSxcbiAgICAgICAgaW5pdERldGFpbFxuICAgICAgKVxuICAgICAgZGVmYXVsdFZhbHVlcy5qb2JfaWQgPSB1c2VySm9iLnZhbHVlXG4gICAgICBkZWZhdWx0VmFsdWVzLmRyYXdpbmdfaWQgPSB1c2VyRHJhd2luZy52YWx1ZSA9PT0gLTEgPyBudWxsIDogdXNlckRyYXdpbmdcbiAgICAgIGlmIChnZW5lcmF0ZUNvZGUpIHtcbiAgICAgICAgZGVmYXVsdFZhbHVlcy5kcG4gPSBnZW5lcmF0ZUNvZGVcbiAgICAgIH1cbiAgICAgIHN0YXRlLnBhcnRMaXN0W2xlbmd0aCAtIDFdLmRldGFpbCA9IGRlZmF1bHRWYWx1ZXNcbiAgICB9LFxuICAgIHJlbW92ZVBhcnQoc3RhdGUpIHtcbiAgICAgIHN0YXRlLnBhcnRMaXN0LnBvcCgpXG4gICAgfSxcbiAgICBzZXRQYXJ0VGFiKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XG4gICAgICBjb25zdCBjdXJyZW50UGFydCA9IF8ubGFzdChzdGF0ZS5wYXJ0TGlzdClcbiAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBzdGF0ZS5wYXJ0TGlzdFxuICAgICAgaWYgKGxlbmd0aCA8PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRQYXJ0LnRhYiAhPT0gcGF5bG9hZCkge1xuICAgICAgICBzdGF0ZS5wYXJ0TGlzdFtsZW5ndGggLSAxXS50YWIgPSBwYXlsb2FkXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBNYW51ZmFjdHVyZXJcbiAgICBzZXRNYW51RGV0YWlsKHN0YXRlLCB7IHBheWxvYWQgfSkge1xuICAgICAgc3RhdGUubWFudWZhY3R1cmVyLmRldGFpbCA9IHtcbiAgICAgICAgLi4uc3RhdGUubWFudWZhY3R1cmVyLmRldGFpbCxcbiAgICAgICAgLi4ucGF5bG9hZFxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0TWFudURpYWxvZ09wZW4oc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5tYW51ZmFjdHVyZXIuZGlhbG9nU3RhdGUub3BlbiA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldE1hbnVEaWFsb2dMb2FkaW5nKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUubWFudWZhY3R1cmVyLmRpYWxvZ1N0YXRlLmxvYWRpbmcgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRNYW51SW5pdERhdGEoXG4gICAgICBzdGF0ZSxcbiAgICAgIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPE1hbnVmYWN0dXJlckluaXREYXRhRm9yQ0UgJiB7IHBlcm1pc3Npb25zOiBNYW51ZmFjdHVyZXJQZXJtaXNzaW9ucyB9PlxuICAgICkge1xuICAgICAgc3RhdGUubWFudWZhY3R1cmVyLmluaXREYXRhID0gcGF5bG9hZFxuICAgIH0sXG4gICAgYWRkTWFudWZhY3R1cmVyKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxJdGVtTWFudWZhY3R1cmVyPikge1xuICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHN0YXRlLnBhcnRMaXN0XG4gICAgICBzdGF0ZS5wYXJ0TGlzdFtsZW5ndGggLSAxXS5kZXRhaWwubWFudWZhY3R1cmVycy5wdXNoKHBheWxvYWQpXG4gICAgfSxcbiAgICBzZXREcmF3aW5nSXRlbXMoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGFueVtdPikge1xuICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHN0YXRlLnBhcnRMaXN0XG4gICAgICBpZiAobGVuZ3RoIDw9IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICA7KHN0YXRlLnBhcnRMaXN0W2xlbmd0aCAtIDFdLmRldGFpbCBhcyBBc3NlbWJseURldGFpbCkuZHJhd2luZ19pdGVtcyA9IHBheWxvYWRcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7IGFjdGlvbnMgfSA9IHBhcnRTbGljZVxuXG4vLyBzYWdhIGFjdGlvbnNcbmV4cG9ydCBjb25zdCBzYWdhQ3JlYXRlID0gY3JlYXRlQWN0aW9uPHsgZW50aXR5OiBQYXJ0RW50aXR5OyBmb3JtRGF0YTogSXRlbURldGFpbCB8IEFzc2VtYmx5RGV0YWlsIH0+KFxuICBgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkNSRUFURX1gXG4pXG5cbmV4cG9ydCBjb25zdCBzYWdhQ2xvc2VEaWFsb2cgPSBjcmVhdGVBY3Rpb248UGFydEVudGl0eT4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5DTE9TRV9ESUFMT0d9YClcbmV4cG9ydCBjb25zdCBzYWdhT3BlbkNyZWF0ZURpYWxvZyA9IGNyZWF0ZUFjdGlvbjxQYXJ0RW50aXR5PihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLk9QRU5fQ1JFQVRFX0RJQUxPR31gKVxuZXhwb3J0IGNvbnN0IHNhZ2FHZXRJdGVtQ29weSA9IGNyZWF0ZUFjdGlvbjxEYXRhRm9yRHJvcGRvd24+KGAke25hbWV9L0dFVF9JVEVNX0NPUFlgKVxuZXhwb3J0IGNvbnN0IHNhZ2FPcGVuVXBkYXRlRGlhbG9nID0gY3JlYXRlQWN0aW9uPHsgaWQ6IG51bWJlcjsgZW50aXR5OiBQYXJ0RW50aXR5IH0+KFxuICBgJHtuYW1lfS8ke2FjdGlvblR5cGVzLk9QRU5fVVBEQVRFX0RJQUxPR31gXG4pXG5leHBvcnQgY29uc3Qgc2FnYUdldERyYXdpbmdJdGVtcyA9IGNyZWF0ZUFjdGlvbjxudW1iZXI+KGAke25hbWV9L0dFVF9EUkFXSU5HX0lURU1TYClcblxuLy8gc2FnYSBhY3Rpb25zIE1hbnVmYWN0dXJlclxuZXhwb3J0IGNvbnN0IHNhZ2FPcGVuTWFudURpYWxvZyA9IGNyZWF0ZUFjdGlvbjxQYXJ0RGV0YWlsPihgJHtuYW1lfS9PUEVOX1VQREFURV9NQU5VX0RJQUxPR2ApXG5leHBvcnQgY29uc3Qgc2FnYUNyZWF0ZU1hbnUgPSBjcmVhdGVBY3Rpb248TWFudWZhY3R1cmVySXRlbT4oYCR7bmFtZX0vQ1JFQVRFX01BTlVgKVxuZXhwb3J0IGNvbnN0IHNhZ2FDbG9zZU1hbnVEaWFsb2cgPSBjcmVhdGVBY3Rpb24oYCR7bmFtZX0vQ0xPU0VfTUFOVV9ESUFMT0dgKVxuZXhwb3J0IGNvbnN0IHNhZ2FHZXRNYW51SWQgPSBjcmVhdGVBY3Rpb248TWFudWZhY3R1cmVySXRlbT4oYCR7bmFtZX0vR0VUX01BTlVfSURgKVxuXG4vLyBzZWxlY3RvcnNcbmV4cG9ydCBjb25zdCBzZWxlY3RTdGF0ZSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZVtuYW1lXVxuZXhwb3J0IGNvbnN0IHNlbGVjdFBhcnRMaXN0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUucGFydExpc3QpXG5leHBvcnQgY29uc3Qgc2VsZWN0UGFyYW1ldGVycyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmluaXREYXRhLnBhcmFtZXRlcnMpXG5leHBvcnQgY29uc3Qgc2VsZWN0Q3VycmVudFBhcnQgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBfLmxhc3Qoc3RhdGUucGFydExpc3QpKVxuZXhwb3J0IGNvbnN0IHNlbGVjdENvbmZpcm1SZWYgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5jb25maXJtUmVmKVxuZXhwb3J0IGNvbnN0IHNlbGVjdFBhcnRNYW51ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUubWFudWZhY3R1cmVyKVxuZXhwb3J0IGNvbnN0IHNlbGVjdERyYXdpbmdJdGVtcyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHtcbiAgY29uc3QgeyBwYXJ0TGlzdCB9ID0gc3RhdGVcbiAgaWYgKHBhcnRMaXN0Lmxlbmd0aCA8PSAwKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgY29uc3QgeyBkZXRhaWwgfSA9IF8ubGFzdChwYXJ0TGlzdClcbiAgcmV0dXJuIChkZXRhaWwgYXMgQXNzZW1ibHlEZXRhaWwpLmRyYXdpbmdfaXRlbXMgfHwgW11cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHBhcnRTbGljZVxuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uLCBjcmVhdGVTZWxlY3RvciwgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICdAL3V0aWxzL2NvbnN0YW50J1xuXG5pbXBvcnQgdHlwZSB7IFJvb3RSZWR1Y2VyVHlwZSB9IGZyb20gJy4vcm9vdFJlZHVjZXInXG5pbXBvcnQgdHlwZSB7IERhdGFGb3JEcm9wZG93biwgRW50aXR5LCBQYXJhbWV0ZXJPcHRpb24sIFBheWxvYWRPcGVyYXRpb24sIEhpc3RvcnlMb2cgfSBmcm9tICdAL3R5cGVzL0NvbW1vbidcbmltcG9ydCB0eXBlIHtcbiAgU3BlY2lmaWNhdGlvbkluaXREYXRhRm9yQ0UsXG4gIFNwZWNpZmljYXRpb25Jbml0RGF0YUZvckxpc3QsXG4gIFNwZWNpZmljYXRpb25EZXRhaWxcbn0gZnJvbSAnQC90eXBlcy9TcGVjaWZpY2F0aW9uJ1xuXG5leHBvcnQgY29uc3QgbmFtZTogRW50aXR5ID0gJ3NwZWNpZmljYXRpb24nXG5leHBvcnQgY29uc3QgcmVzZXRTdGF0ZSA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLlJFU0VUX1NUQVRFfWApXG5cbmV4cG9ydCBjb25zdCBzcGVjaWZpY2F0aW9uRGV0YWlsID0ge1xuICBqb2JfaWQ6IG51bGwsXG4gIGRyYXdpbmdfaWQ6IG51bGwsXG4gIGRlc2NyaXB0aW9uczogW10sXG4gIHNwZWNfaWQ6IG51bGwsXG4gIGFkZGl0aW9uYWxfYXR0cmlidXRlczoge31cbn0gYXMgU3BlY2lmaWNhdGlvbkRldGFpbFxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGluaXREYXRhRm9yTGlzdDoge1xuICAgIGpvYnM6IFtdLFxuICAgIHBlcm1pc3Npb25zOiB7XG4gICAgICBzcGVjaWZpY2F0aW9uOiBudWxsXG4gICAgfSxcbiAgICB3aWtpX3BhZ2U6ICcnLFxuICAgIGNvbHVtbl90b29sdGlwczoge31cbiAgfSBhcyBTcGVjaWZpY2F0aW9uSW5pdERhdGFGb3JMaXN0LFxuICBkYXRhTGlzdDogW10sXG4gIGRpYWxvZ1N0YXRlOiB7XG4gICAgb3BlbjogZmFsc2UsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgdGFiOiAwLFxuICAgIGhpc3RvcnlMb2dzOiBbXSBhcyBIaXN0b3J5TG9nW11cbiAgfSxcbiAgaW5pdERhdGFGb3JDRToge1xuICAgIHBhcmFtZXRlcnM6IHtcbiAgICAgIFBMTEE6IFtdLFxuICAgICAgU1NBVDogW11cbiAgICB9LFxuICAgIHdpa2lfcGFnZTogJydcbiAgfSBhcyBTcGVjaWZpY2F0aW9uSW5pdERhdGFGb3JDRSxcbiAgZGV0YWlsOiBzcGVjaWZpY2F0aW9uRGV0YWlsXG59XG5cbmNvbnN0IHNwZWNpZmljYXRpb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZSxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldEluaXREYXRhRm9yTGlzdChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248U3BlY2lmaWNhdGlvbkluaXREYXRhRm9yTGlzdD4pIHtcbiAgICAgIHN0YXRlLmluaXREYXRhRm9yTGlzdCA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldEluaXREYXRhRm9yQ0Uoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFNwZWNpZmljYXRpb25Jbml0RGF0YUZvckNFPikge1xuICAgICAgc3RhdGUuaW5pdERhdGFGb3JDRSA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERhdGFMaXN0KHN0YXRlLCB7IHBheWxvYWQgfSkge1xuICAgICAgc3RhdGUuZGF0YUxpc3QgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRIaXN0b3J5TG9ncyhzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248SGlzdG9yeUxvZ1tdPikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUuaGlzdG9yeUxvZ3MgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXREaWFsb2dTdGF0ZShzdGF0ZSwgeyBwYXlsb2FkIH0pIHtcbiAgICAgIHN0YXRlLmRpYWxvZ1N0YXRlID0geyAuLi5zdGF0ZS5kaWFsb2dTdGF0ZSwgLi4ucGF5bG9hZCB9XG4gICAgfSxcbiAgICBzZXREaWFsb2dTdGF0ZU9wZW4oc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZS5vcGVuID0gcGF5bG9hZFxuICAgIH0sXG4gICAgc2V0RGlhbG9nU3RhdGVMb2FkaW5nKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUubG9hZGluZyA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERldGFpbChzdGF0ZSwgeyBwYXlsb2FkIH0pIHtcbiAgICAgIHN0YXRlLmRldGFpbCA9IHtcbiAgICAgICAgLi4uc3RhdGUuZGV0YWlsLFxuICAgICAgICAuLi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSxcbiAgICByZXNldERldGFpbChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248eyB1c2VySm9iOiBQYXJhbWV0ZXJPcHRpb24gfT4pIHtcbiAgICAgIGNvbnN0IHsgdXNlckpvYiB9ID0gcGF5bG9hZFxuICAgICAgc3RhdGUuZGV0YWlsID0geyAuLi5pbml0aWFsU3RhdGUuZGV0YWlsLCBqb2JfaWQ6IHVzZXJKb2IudmFsdWUgfVxuICAgIH0sXG4gICAgc2V0RGlhbG9nU3RhdGVUYWIoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcbiAgICAgIHN0YXRlLmRpYWxvZ1N0YXRlLnRhYiA9IHBheWxvYWRcbiAgICB9XG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IHtcbiAgICBbcmVzZXRTdGF0ZS50eXBlXSgpIHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGVcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7IGFjdGlvbnMgfSA9IHNwZWNpZmljYXRpb25TbGljZVxuXG4vLyBTYWdhIGFjdGlvbnNcbmV4cG9ydCBjb25zdCBzYWdhR2V0TGlzdCA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkdFVF9MSVNUfWApXG5leHBvcnQgY29uc3Qgc2FnYU9wZW5DcmVhdGVEaWFsb2cgPSBjcmVhdGVBY3Rpb24oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5PUEVOX0NSRUFURV9ESUFMT0d9YClcbmV4cG9ydCBjb25zdCBzYWdhT3BlblVwZGF0ZURpYWxvZyA9IGNyZWF0ZUFjdGlvbjxudW1iZXI+KGAke25hbWV9LyR7YWN0aW9uVHlwZXMuT1BFTl9VUERBVEVfRElBTE9HfWApXG5leHBvcnQgY29uc3Qgc2FnYUNsb3NlRGlhbG9nID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7YWN0aW9uVHlwZXMuQ0xPU0VfRElBTE9HfWApXG5leHBvcnQgY29uc3Qgc2FnYUNoYW5nZVVzZXJKb2IgPSBjcmVhdGVBY3Rpb248UGFyYW1ldGVyT3B0aW9uPihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkNIQU5HRV9VU0VSX0pPQn1gKVxuZXhwb3J0IGNvbnN0IHNhZ2FDaGFuZ2VVc2VyRHJhd2luZyA9IGNyZWF0ZUFjdGlvbjxEYXRhRm9yRHJvcGRvd24+KGAke25hbWV9LyR7YWN0aW9uVHlwZXMuQ0hBTkdFX1VTRVJfRFJBV0lOR31gKVxuZXhwb3J0IGNvbnN0IHNhZ2FHZW5lcmF0ZUNvZGUgPSBjcmVhdGVBY3Rpb248eyBmb3JtRGF0YTogU3BlY2lmaWNhdGlvbkRldGFpbDsgZHJhd2luZzogRGF0YUZvckRyb3Bkb3duIH0+KFxuICBgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkdFVF9HRU5FUkFURV9DT0RFfWBcbilcbmV4cG9ydCBjb25zdCBzYWdhUmVtb3ZlID0gY3JlYXRlQWN0aW9uPFBheWxvYWRPcGVyYXRpb25bXT4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5SRU1PVkV9YClcbmV4cG9ydCBjb25zdCBzYWdhVXBkYXRlID0gY3JlYXRlQWN0aW9uPHsgaWQ6IG51bWJlcjsgZm9ybURhdGE6IFNwZWNpZmljYXRpb25EZXRhaWwgfT4oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5VUERBVEV9YClcbmV4cG9ydCBjb25zdCBzYWdhQ3JlYXRlID0gY3JlYXRlQWN0aW9uPFNwZWNpZmljYXRpb25EZXRhaWw+KGAke25hbWV9LyR7YWN0aW9uVHlwZXMuQ1JFQVRFfWApXG5leHBvcnQgY29uc3Qgc2FnYU9wZW5EcmF3aW5nRGlhbG9nID0gY3JlYXRlQWN0aW9uPFNwZWNpZmljYXRpb25EZXRhaWw+KGAke25hbWV9L09QRU5fRFJBV0lOR19ESUFMT0dgKVxuXG4vLyBTZWxlY3RvcnNcbmV4cG9ydCBjb25zdCBzZWxlY3RTdGF0ZSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZVtuYW1lXVxuZXhwb3J0IGNvbnN0IHNlbGVjdEluaXREYXRhRm9yTGlzdCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmluaXREYXRhRm9yTGlzdClcbmV4cG9ydCBjb25zdCBzZWxlY3RJbml0RGF0YUZvckNFID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuaW5pdERhdGFGb3JDRSlcbmV4cG9ydCBjb25zdCBzZWxlY3RQZXJtaXNzaW9ucyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmluaXREYXRhRm9yTGlzdC5wZXJtaXNzaW9ucy5zcGVjaWZpY2F0aW9uKVxuZXhwb3J0IGNvbnN0IHNlbGVjdERpYWxvZ1N0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuZGlhbG9nU3RhdGUpXG5leHBvcnQgY29uc3Qgc2VsZWN0UGFyYW1ldGVycyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoeyBpbml0RGF0YUZvckNFIH0pID0+IGluaXREYXRhRm9yQ0UucGFyYW1ldGVycylcbmV4cG9ydCBjb25zdCBzZWxlY3REZXRhaWwgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5kZXRhaWwpXG5leHBvcnQgY29uc3Qgc2VsZWN0RGF0YUxpc3QgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5kYXRhTGlzdClcblxuZXhwb3J0IGRlZmF1bHQgc3BlY2lmaWNhdGlvblNsaWNlXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBSb290UmVkdWNlclR5cGUgfSBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xuXG5pbXBvcnQgdHlwZSB7IEZhaWxlZFJlYXNvbiwgU3VtbWFyeVJlcG9ydCB9IGZyb20gJ0AvdHlwZXMvU3VtbWFyeVJlcG9ydCdcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnc3VtbWFyeVJlcG9ydCdcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgb3BlbjogZmFsc2UsXG4gIHRpdGxlOiAnU3VtbWFyeSByZXBvcnQnLFxuICBudW1iZXJPZlN1Y2Nlc3M6IDAsXG4gIG51bWJlck9mRmFpbGVkOiAwLFxuICBmYWlsZWRSZWFzb25zOiBbXSBhcyBGYWlsZWRSZWFzb25bXVxufVxuXG5jb25zdCBzdW1tYXJ5UmVwb3J0ID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0T3BlbihzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pIHtcbiAgICAgIHN0YXRlLm9wZW4gPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRSZXBvcnREYXRhKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxTdW1tYXJ5UmVwb3J0Pikge1xuICAgICAgc3RhdGUub3BlbiA9IGZhbHNlXG4gICAgICBzdGF0ZS5udW1iZXJPZkZhaWxlZCA9IHBheWxvYWQuZmFpbGVkX2NvdW50XG4gICAgICBzdGF0ZS5udW1iZXJPZlN1Y2Nlc3MgPSBwYXlsb2FkLnN1Y2Nlc3NfY291bnRcbiAgICAgIHN0YXRlLmZhaWxlZFJlYXNvbnMgPSBwYXlsb2FkLmZhaWxlZF9yZWFzb25zXG4gICAgfVxuICB9XG59KVxuXG4vLyBBY3Rpb25zXG5cbmV4cG9ydCBjb25zdCB7IHNldE9wZW4sIHNldFJlcG9ydERhdGEgfSA9IHN1bW1hcnlSZXBvcnQuYWN0aW9uc1xuXG4vLyBTZWxlY3RvcnNcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFN0YXRlID0gKHN0YXRlOiBSb290UmVkdWNlclR5cGUpID0+IHN0YXRlLnN1bW1hcnlSZXBvcnRcblxuZXhwb3J0IGRlZmF1bHQgc3VtbWFyeVJlcG9ydC5yZWR1Y2VyXG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnXG5pbXBvcnQgeyBjcmVhdGVBY3Rpb24sIGNyZWF0ZVNsaWNlLCBjcmVhdGVTZWxlY3RvciwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5cbmltcG9ydCB0eXBlIHsgRW50aXR5LCBQYXJhbWV0ZXJPcHRpb24sIERhdGFGb3JEcm9wZG93biwgUGF5bG9hZE9wZXJhdGlvbiB9IGZyb20gJ0AvdHlwZXMvQ29tbW9uJ1xuaW1wb3J0IHR5cGUgeyBSb290UmVkdWNlclR5cGUgfSBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xuaW1wb3J0IHR5cGUgeyBUYWdJbml0RGF0YUZvckxpc3QgfSBmcm9tICdAL3R5cGVzL1RhZydcblxuZXhwb3J0IGNvbnN0IG5hbWU6IEVudGl0eSA9ICdlbGVtZW50J1xuZXhwb3J0IGNvbnN0IHJlc2V0U3RhdGUgPSBjcmVhdGVBY3Rpb24oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5SRVNFVF9TVEFURX1gKVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpbml0RGF0YUZvckxpc3Q6IHtcbiAgICBqb2JzOiBbXSxcbiAgICBwZXJtaXNzaW9uczoge1xuICAgICAgZWxlbWVudDogbnVsbFxuICAgIH0sXG4gICAgd2lraV9wYWdlOiAnJyxcbiAgICBjb2x1bW5fdG9vbHRpcHM6IHt9XG4gIH0gYXMgVGFnSW5pdERhdGFGb3JMaXN0LFxuICBkYXRhTGlzdDogW11cbn1cblxuY29uc3QgdGFnU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWUsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRJbml0RGF0YUZvckxpc3Qoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFRhZ0luaXREYXRhRm9yTGlzdD4pIHtcbiAgICAgIHN0YXRlLmluaXREYXRhRm9yTGlzdCA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERhdGFMaXN0KHN0YXRlLCB7IHBheWxvYWQgfSkge1xuICAgICAgc3RhdGUuZGF0YUxpc3QgPSBwYXlsb2FkXG4gICAgfVxuICB9LFxuICBleHRyYVJlZHVjZXJzOiB7XG4gICAgW3Jlc2V0U3RhdGUudHlwZV0oKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnQgY29uc3QgeyBhY3Rpb25zIH0gPSB0YWdTbGljZVxuXG4vLyBTYWdhIGFjdGlvbnNcbmV4cG9ydCBjb25zdCBzYWdhR2V0TGlzdCA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkdFVF9MSVNUfWApXG5leHBvcnQgY29uc3Qgc2FnYU9wZW5DcmVhdGVEaWFsb2cgPSBjcmVhdGVBY3Rpb24oYCR7bmFtZX0vJHthY3Rpb25UeXBlcy5PUEVOX0NSRUFURV9ESUFMT0d9YClcbmV4cG9ydCBjb25zdCBzYWdhT3BlblVwZGF0ZURpYWxvZyA9IGNyZWF0ZUFjdGlvbjxudW1iZXI+KGAke25hbWV9LyR7YWN0aW9uVHlwZXMuT1BFTl9VUERBVEVfRElBTE9HfWApXG5leHBvcnQgY29uc3Qgc2FnYUNoYW5nZVVzZXJKb2IgPSBjcmVhdGVBY3Rpb248UGFyYW1ldGVyT3B0aW9uPihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkNIQU5HRV9VU0VSX0pPQn1gKVxuZXhwb3J0IGNvbnN0IHNhZ2FDaGFuZ2VVc2VyU2NoZW1hdGljID0gY3JlYXRlQWN0aW9uPERhdGFGb3JEcm9wZG93bj4oYCR7bmFtZX0vQ0hBTkdFX1VTRVJfU0NIRU1BVElDYClcblxuZXhwb3J0IGNvbnN0IHNhZ2FSZW1vdmUgPSBjcmVhdGVBY3Rpb248UGF5bG9hZE9wZXJhdGlvbltdPihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLlJFTU9WRX1gKVxuZXhwb3J0IGNvbnN0IHNhZ2FDaGFuZ2VVc2VyRHJhd2luZyA9IGNyZWF0ZUFjdGlvbjxEYXRhRm9yRHJvcGRvd24+KGAke25hbWV9LyR7YWN0aW9uVHlwZXMuQ0hBTkdFX1VTRVJfRFJBV0lOR31gKVxuXG4vLyBTZWxlY3RvcnNcbmV4cG9ydCBjb25zdCBzZWxlY3RTdGF0ZSA9IChzdGF0ZTogUm9vdFJlZHVjZXJUeXBlKSA9PiBzdGF0ZVtuYW1lXVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0SW5pdERhdGFGb3JMaXN0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuaW5pdERhdGFGb3JMaXN0KVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0UGVybWlzc2lvbnMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5pbml0RGF0YUZvckxpc3QucGVybWlzc2lvbnMuZWxlbWVudClcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFNwZWNpZmljYXRpb24gPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5pbml0RGF0YUZvckxpc3QucGVybWlzc2lvbnMuZWxlbWVudClcblxuZXhwb3J0IGNvbnN0IHNlbGVjdERhdGFMaXN0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuZGF0YUxpc3QpXG5cbmV4cG9ydCBkZWZhdWx0IHRhZ1NsaWNlXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQWN0aW9uLCBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyBmb3JtYXQgYXMgZm9ybWF0RGF0ZSB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFZhbHVlcyB9IGZyb20gJ0AvdXRpbHMvZ2V0RGVmYXVsdFZhbHVlcydcbmltcG9ydCB7IERBVEVfRk9STUFULCBhY3Rpb25UeXBlcyB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnXG5cbmltcG9ydCB0eXBlIHsgVXNlckl0ZW0sIFVzZXJQZXJtaXNzaW9ucywgVXNlckluaXREYXRhRm9yTGlzdCwgVXNlckluaXREYXRhRm9yQ0UsIFVzZXJEZXRhaWwgfSBmcm9tICdAL3R5cGVzL1VzZXInXG5pbXBvcnQgdHlwZSB7IEVudGl0eSwgSGlzdG9yeUxvZyB9IGZyb20gJ0AvdHlwZXMvQ29tbW9uJ1xuaW1wb3J0IHR5cGUgeyBSb290UmVkdWNlclR5cGUgfSBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xuXG5leHBvcnQgY29uc3QgbmFtZTogRW50aXR5ID0gJ3VzZXInXG5leHBvcnQgY29uc3QgcmVzZXRTdGF0ZSA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLlJFU0VUX1NUQVRFfWApXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZGF0YUxpc3Q6IFtdIGFzIFVzZXJJdGVtW10sXG4gIGluaXREYXRhRm9yTGlzdDoge1xuICAgIHBlcm1pc3Npb25zOiB7XG4gICAgICB1c2VyOiBudWxsXG4gICAgfSxcbiAgICB3aWtpX3BhZ2U6ICcnLFxuICAgIGNvbHVtbl90b29sdGlwczoge31cbiAgfSBhcyBVc2VySW5pdERhdGFGb3JMaXN0LFxuICBpbml0RGF0YUZvckNFOiB7XG4gICAgZ3JvdXBzOiBbXSxcbiAgICBqb2JzOiBbXSxcbiAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICBQTExBOiBbXSxcbiAgICAgIFBVQ086IFtdXG4gICAgfSxcbiAgICB3aWtpX3BhZ2U6ICcnLFxuICAgIHRpbWV6b25lczogW11cbiAgfSBhcyBVc2VySW5pdERhdGFGb3JDRSxcbiAgZGlhbG9nU3RhdGU6IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBoaXN0b3J5TG9nczogW10gYXMgSGlzdG9yeUxvZ1tdXG4gIH0sXG4gIHJlc2V0UHdkRGlhbG9nOiB7XG4gICAgb3BlbjogZmFsc2UsXG4gICAgbG9hZGluZzogZmFsc2VcbiAgfSxcbiAgZGV0YWlsOiB7XG4gICAgdXNlcl9pZDogJycsXG4gICAgZW1haWw6IG51bGwsXG4gICAgcHVjbzogbnVsbCxcbiAgICBmaXJzdF9uYW1lOiAnJyxcbiAgICBsYXN0X25hbWU6ICcnLFxuICAgIHRpbWVfem9uZTogJycsXG4gICAgdXNlcl9hYmI6ICcnLFxuICAgIGxvZ2luX3BhZ2U6ICcnLFxuICAgIHZhbGlkX2Zyb206IGZvcm1hdERhdGUobmV3IERhdGUoKSwgREFURV9GT1JNQVQpLFxuICAgIGRlZmF1bHRfbGFuZ3VhZ2U6IG51bGwsXG4gICAgdmFsaWRfdW50aWw6IG51bGwsXG4gICAgZ3JvdXBzOiBbXSxcbiAgICBqb2JfYWNjZXNzOiBbXSxcbiAgICBwYXNzd29yZDogJycsXG4gICAgY29uZmlybV9wYXNzd29yZDogJydcbiAgfSBhcyBVc2VyRGV0YWlsXG59XG5cbmNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZSxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldERhdGFMaXN0KHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxVc2VySXRlbVtdPikge1xuICAgICAgc3RhdGUuZGF0YUxpc3QgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXREaWFsb2dTdGF0ZShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248UGFydGlhbDx0eXBlb2YgaW5pdGlhbFN0YXRlLmRpYWxvZ1N0YXRlPj4pIHtcbiAgICAgIHN0YXRlLmRpYWxvZ1N0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZS5kaWFsb2dTdGF0ZSxcbiAgICAgICAgLi4ucGF5bG9hZFxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0RGlhbG9nU3RhdGVPcGVuKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgc3RhdGUuZGlhbG9nU3RhdGUub3BlbiA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldEhpc3RvcnlMb2dzKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxIaXN0b3J5TG9nW10+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZS5oaXN0b3J5TG9ncyA9IHBheWxvYWRcbiAgICB9LFxuICAgIHNldERpYWxvZ1N0YXRlTG9hZGluZyhzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pIHtcbiAgICAgIHN0YXRlLmRpYWxvZ1N0YXRlLmxvYWRpbmcgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRJbml0RGF0YUZvckxpc3Qoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFVzZXJJbml0RGF0YUZvckxpc3Q+KSB7XG4gICAgICBzdGF0ZS5pbml0RGF0YUZvckxpc3QgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRQZXJtaXNzaW9ucyhzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248VXNlclBlcm1pc3Npb25zPikge1xuICAgICAgc3RhdGUuaW5pdERhdGFGb3JMaXN0LnBlcm1pc3Npb25zLnVzZXIgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRJbml0RGF0YUZvckNFKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxVc2VySW5pdERhdGFGb3JDRT4pIHtcbiAgICAgIHN0YXRlLmluaXREYXRhRm9yQ0UgPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXREZXRhaWwoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFBhcnRpYWw8VXNlckRldGFpbD4+KSB7XG4gICAgICBzdGF0ZS5kZXRhaWwgPSB7XG4gICAgICAgIC4uLnN0YXRlLmRldGFpbCxcbiAgICAgICAgLi4ucGF5bG9hZFxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0UmVzZXRQd2REaWFsb2coc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFBhcnRpYWw8dHlwZW9mIGluaXRpYWxTdGF0ZS5yZXNldFB3ZERpYWxvZz4+KSB7XG4gICAgICBzdGF0ZS5kaWFsb2dTdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUuZGlhbG9nU3RhdGUsXG4gICAgICAgIC4uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFJlc2V0UHdkRGlhbG9nT3BlbihzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pIHtcbiAgICAgIHN0YXRlLnJlc2V0UHdkRGlhbG9nLm9wZW4gPSBwYXlsb2FkXG4gICAgfSxcbiAgICBzZXRSZXNldFB3ZERpYWxvZ0xvYWRpbmcoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICBzdGF0ZS5yZXNldFB3ZERpYWxvZy5sb2FkaW5nID0gcGF5bG9hZFxuICAgIH0sXG4gICAgcmVzZXREZXRhaWwoc3RhdGUpIHtcbiAgICAgIGNvbnN0IGRldGFpbERlZmF1bHRWYWx1ZSA9IGdldERlZmF1bHRWYWx1ZXMoXG4gICAgICAgIHN0YXRlLmluaXREYXRhRm9yQ0UsXG4gICAgICAgIHtcbiAgICAgICAgICBkZWZhdWx0X2xhbmd1YWdlOiAncGFyYW1ldGVycy5QTExBJyxcbiAgICAgICAgICBwdWNvOiAncGFyYW1ldGVycy5QVUNPJyxcbiAgICAgICAgICB0aW1lX3pvbmU6ICd0aW1lem9uZXMnXG4gICAgICAgIH0sXG4gICAgICAgIGluaXRpYWxTdGF0ZS5kZXRhaWxcbiAgICAgIClcbiAgICAgIHN0YXRlLmRldGFpbCA9IHsgLi4uZGV0YWlsRGVmYXVsdFZhbHVlIH1cbiAgICB9XG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IHtcbiAgICBbcmVzZXRTdGF0ZS50eXBlXSgpIHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGVcbiAgICB9XG4gIH1cbn0pXG5cbi8vIEFjdGlvbnNcbmV4cG9ydCBjb25zdCB7IGFjdGlvbnMgfSA9IHVzZXJTbGljZVxuXG4vLyBTYWdhIGFjdGlvbnNcbmV4cG9ydCBjb25zdCBzYWdhR2V0TGlzdCA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkdFVF9MSVNUfWApXG5leHBvcnQgY29uc3Qgc2FnYUNyZWF0ZSA9IGNyZWF0ZUFjdGlvbjxVc2VyRGV0YWlsPihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkNSRUFURX1gKVxuZXhwb3J0IGNvbnN0IHNhZ2FVcGRhdGUgPSBjcmVhdGVBY3Rpb248eyBpZDogbnVtYmVyOyBmb3JtRGF0YTogVXNlckRldGFpbCB9PihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLlVQREFURX1gKVxuZXhwb3J0IGNvbnN0IHNhZ2FPcGVuQ3JlYXRlRGlhbG9nID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7YWN0aW9uVHlwZXMuT1BFTl9DUkVBVEVfRElBTE9HfWApXG5leHBvcnQgY29uc3Qgc2FnYU9wZW5VcGRhdGVEaWFsb2cgPSBjcmVhdGVBY3Rpb248bnVtYmVyPihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLk9QRU5fVVBEQVRFX0RJQUxPR31gKVxuZXhwb3J0IGNvbnN0IHNhZ2FDbG9zZURpYWxvZyA9IGNyZWF0ZUFjdGlvbihgJHtuYW1lfS8ke2FjdGlvblR5cGVzLkNMT1NFX0RJQUxPR31gKVxuZXhwb3J0IGNvbnN0IHNhZ2FSZXNldFBhc3N3b3JkID0gY3JlYXRlQWN0aW9uPHsgcGFzc3dvcmQ6IHN0cmluZzsgY29uZmlybV9wYXNzd29yZDogc3RyaW5nIH0+KGAke25hbWV9L1JFU0VUX1BBU1NXT1JEYClcblxuLy8gU2VsZWN0b3JzXG5leHBvcnQgY29uc3Qgc2VsZWN0U3RhdGUgPSAoc3RhdGU6IFJvb3RSZWR1Y2VyVHlwZSkgPT4gc3RhdGVbbmFtZV1cbmV4cG9ydCBjb25zdCBzZWxlY3REaWFsb2dTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmRpYWxvZ1N0YXRlKVxuZXhwb3J0IGNvbnN0IHNlbGVjdERhdGFMaXN0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuZGF0YUxpc3QpXG5leHBvcnQgY29uc3Qgc2VsZWN0UGVybWlzc2lvbnMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5pbml0RGF0YUZvckxpc3QucGVybWlzc2lvbnMudXNlcilcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFJlc2V0UHdkRGlhbG9nID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUucmVzZXRQd2REaWFsb2cpXG5cbmV4cG9ydCBjb25zdCBzZWxlY3REZXRhaWwgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5kZXRhaWwpXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJbml0RGF0YUZvckNFID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuaW5pdERhdGFGb3JDRSlcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEluaXREYXRhRm9yTGlzdCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmluaXREYXRhRm9yTGlzdClcblxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHdyYXBMb2dpbjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXggIWltcG9ydGFudCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGhlaWdodDogJzEwMHZoJ1xuICAgIH0sXG4gICAgbG9naW5UaXRsZToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpXG4gICAgfSxcbiAgICB0b3BJY29uOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICB9LFxuICAgIGxvZ2luRm9ybToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgaGVpZ2h0OiAnNTAlJyxcbiAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfSxcbiAgICBzdWJtaXRCdXR0b246IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKVxuICAgIH0sXG4gICAgd3JhcEJ1dHRvbjoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpXG4gICAgfSxcbiAgICB0ZXh0RmllbGQ6IHtcbiAgICAgICcmOm5vdCg6bnRoLW9mLXR5cGUoMikpJzoge1xuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrYm94OiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSlcbiAgICB9LFxuICAgIHByb2dyZXNzOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDBcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlc1xuIiwiZXhwb3J0IGVudW0gU3RhdHVzQ29kZSB7XG4gIE9LID0gMjAwLFxuICBDUkVBVEVEID0gMjAxLFxuICBCQURfUkVRVUVTVCA9IDQwMCxcbiAgVU5BVVRIT1JJWkVEID0gNDAxLFxuICBGT1JCSURERU4gPSA0MDMsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUiA9IDUwMFxufVxuIiwiLy8gbnVtZXJpY1xuZXhwb3J0IGNvbnN0IE5VTUJFUl9GT1JNQVQgPSAnMC4wMDAwMDAnXG5leHBvcnQgY29uc3QgTlVNQkVSX01BWCA9IDEwMDBcblxuLy8gZGF0ZVxuZXhwb3J0IGNvbnN0IERBVEVfRk9STUFUID0gJ3l5eXktTU0tZGQnXG5cbi8vIFJlZ2V4XG5leHBvcnQgY29uc3QgUkVHRVhfQUxQSEFfTlVNRVJJQ19PTkxZID0gL15bQS1aYS16MC05XSokL1xuZXhwb3J0IGNvbnN0IFJFR0VYX0FMUEhBX05VTUVSSUNfVU5ERVJTQ09SRV9PTkxZID0gL15bQS1aYS16MC05X10qJC9cbmV4cG9ydCBjb25zdCBSRUdFWF9TRU1JQ09MT05fU0VQRVJBVEVEX0FMUEhBX05VTUVSSUNfVU5ERVJTQ09SRV9PTkxZID1cbiAgL14oPyFbMC05XSlbQS1aYS16MC05X10rKDsoPyFbMC05XSlbQS1aYS16MC05X10rKSokL1xuZXhwb3J0IGNvbnN0IFJFR0VYX0VNQUlMID1cbiAgL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcXFwiXSspKil8KFxcXFxcIi4rXFxcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xuZXhwb3J0IGNvbnN0IFJFR0VYX1RSSU1fU1BBQ0UgPSAvXlteIF1bXFx3XFxXIF0qW14gXS9cbmV4cG9ydCBjb25zdCBSRUdFWF9HUk9VUF9JRCA9IC9eW2EtekEtWl0rJC9cbmV4cG9ydCBjb25zdCBSRUdFWF9PTkxZX1RIUkVFX0NBUElUQUxfTEVUVEVSID0gL1thLXpBLXpdezN9L1xuXG5leHBvcnQgY29uc3QgUkVHRVhfVkFMSURfREFURV9FVVJPUEUgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgL14oXFxkezR9KT8oXFwtP1xcYigwP1sxLTldfDFbMC0yXSlcXGIpKFxcLVxcYigwP1sxLTldfDFbMC05XXwyWzAtOV18M1swLTFdKVxcYik/JC9cbmV4cG9ydCBjb25zdCBSRUdFWF9WQUxJRF9EQVRFX0FTSUEgPVxuICAvXihcXGIoMD9bMS05XXwxWzAtOV18MlswLTldfDNbMC0xXSlcXGIpKChcXC98XFwuKT9cXGIoMD9bMS05XXwxWzAtMl0pKT8oKFxcL3xcXC4pP1xcZHs0fSk/JC9cblxuLy8gUGVybWlzc2lvbiBtYXBzXG5leHBvcnQgY29uc3QgUEVSTUlTU0lPTl9UT1BJQ19NQVAgPSB7XG4gIGFwcGxpY2F0aW9uX3BhcmFtZXRlcl90eXBlOiAnQXBwbGljYXRpb24gUGFyYW1ldGVyIFR5cGVzJyxcbiAgZGV2ZWxvcGVyX3BhcmFtZXRlcl90eXBlOiAnRGV2ZWxvcGVyIFBhcmFtZXRlciBUeXBlcycsXG4gIHNpbXBsZV9wYXJhbWV0ZXJfdHlwZTogJ1NpbXBsZSBQYXJhbWV0ZXIgVHlwZXMnLFxuICBhcHBsaWNhdGlvbl9wYXJhbWV0ZXI6ICdBcHBsaWNhdGlvbiBQYXJhbWV0ZXIgQ29kZXMnLFxuICBkZXZlbG9wZXJfcGFyYW1ldGVyOiAnRGV2ZWxvcGVyIFBhcmFtZXRlciBDb2RlcycsXG4gIHNpbXBsZV9wYXJhbWV0ZXI6ICdTaW1wbGUgUGFyYW1ldGVyIENvZGVzJyxcbiAgZ3JvdXA6ICdHcm91cHMnLFxuICBqb2I6ICdKb2JzJyxcbiAgbWFudWZhY3R1cmluZ19zdGFuZGFyZDogJ01hbnVmYWN0dXJpbmcgU3RhbmRhcmRzJyxcbiAgbWF0ZXJpYWxfc3RhbmRhcmQ6ICdNYXRlcmlhbCBTdGFuZGFyZHMnLFxuICBsb2NhdGlvbjogJ0xvY2F0aW9ucycsXG4gIHVzZXI6ICdVc2VycycsXG4gIGFkdmFuY2VkX2ZpbHRlcjogJ0FkdmFuY2VkIEZpbHRlcnMnLFxuICBtYWtlX2FfbGlzdDogJ01ha2UgYSBMaXN0JyxcbiAgY3VycmVuY3k6ICdDdXJyZW5jaWVzJyxcbiAgYnVkZ2V0OiAnQnVkZ2V0JyxcbiAgbWFudWZhY3R1cmVyOiAnTWFudWZhY3R1cmVycycsXG4gIGRyYXdpbmc6ICdEcmF3aW5ncycsXG4gIGFzc2VtYmx5OiAnQXNzZW1ibGllcycsXG4gIGl0ZW06ICdJdGVtcycsXG4gIHNwZWNpZmljYXRpb246ICdTcGVjaWZpY2F0aW9ucycsXG4gIGVsZW1lbnQ6ICdFbGVtZW50cydcbn1cblxuZXhwb3J0IGNvbnN0IFBFUk1JU1NJT05fTUFQID0ge1xuICB2aWV3OiAnVmlldycsXG4gIGNyZWF0ZTogJ0NyZWF0ZScsXG4gIGVkaXQ6ICdVcGRhdGUnLFxuICBkZWxldGU6ICdEZWxldGUnLFxuICBkaXNhYmxlX2VuYWJsZTogJ0Rpc2FibGUgLyBFbmFibGUnLFxuICBsb2NrX3VubG9jazogJ0xvY2sgLyBVbmxvY2snLFxuICBtYWtlX2FfbGlzdDogJ01ha2UgYSBMaXN0JyxcbiAgaW1wb3J0OiAnSW1wb3J0JyxcbiAgZXhwb3J0OiAnRXhwb3J0JyxcbiAgdXBkYXRlX3N5c3RlbV9kZWZhdWx0X3ByZXNldHM6ICdVcGRhdGUgU3lzdGVtIERlZmF1bHQgUHJlc2V0cycsXG4gIGNoYW5nZV90eXBlOiAnQ2hhbmdlIHR5cGUnXG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgVVBEQVRFX01VTFRJUExFOiAnVVBEQVRFX01VTFRJUExFJyxcbiAgQVVUSDogJ0FVVEgnLFxuICBSRVNFVF9TVEFURTogJ1JFU0VUX1NUQVRFJyxcbiAgU0VUX09QRU5fRElBTE9HX1NUQVRFOiAnU0VUX09QRU5fRElBTE9HX1NUQVRFJyxcbiAgR0VUX0hJU1RPUlk6ICdHRVRfSElTVE9SWScsXG4gIEdFVF9MSVNUOiAnR0VUX0xJU1QnLFxuICBDUkVBVEU6ICdDUkVBVEUnLFxuICBVUERBVEU6ICdVUERBVEUnLFxuICBSRU1PVkU6ICdSRU1PVkUnLFxuICBFWEVDVVRFX09QRVJBVElPTjogJ0VYRUNVVEVfT1BFUkFUSU9OJyxcbiAgT1BFTl9DUkVBVEVfRElBTE9HOiAnT1BFTl9DUkVBVEVfRElBTE9HJyxcbiAgT1BFTl9VUERBVEVfRElBTE9HOiAnT1BFTl9VUERBVEVfRElBTE9HJyxcbiAgQ0xPU0VfRElBTE9HOiAnQ0xPU0VfRElBTE9HJyxcbiAgR0VUX05FWFRfQ09ERTogJ0dFVF9ORVhUX0NPREUnLFxuICBDSEFOR0VfVVNFUl9KT0I6ICdDSEFOR0VfVVNFUl9KT0InLFxuICBDSEFOR0VfVVNFUl9EUkFXSU5HOiAnQ0hBTkdFX1VTRVJfRFJBV0lORycsXG4gIExPR0lOOiAnTE9HSU4nLFxuICBHRVRfUFJPRklMRTogJ0dFVF9QUk9GSUxFJyxcbiAgQ0hBTkdFX1BBU1NXT1JEOiAnQ0hBTkdFX1BBU1NXT1JEJyxcbiAgR0VUX0dFTkVSQVRFX0NPREU6ICdHRVRfR0VORVJBVEVfQ09ERScsXG4gIExPR09VVDogJ0xPR09VVCcsXG4gIEdFVF9QQVJUOiAnR0VUX1BBUlQnXG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmFsUHJvcGVydGllcyA9IFsnY3JlYXRlZF9ieScsICdjcmVhdGVkX2F0JywgJ3VwZGF0ZWRfYnknLCAndXBkYXRlZF9hdCcsICdpZCcsICdzdGF0dXMnLCAnZnVsbF9jb3VudCddXG5cbmV4cG9ydCBjb25zdCBpdGVtTWFzc0Zvcm1hdCA9IHtcbiAgcHJlY2lzaW9uOiA0LFxuICBuZWdhdGl2ZVBhdHRlcm46ICcwLjAwMDAnLFxuICBtYXg6IDk5OTk5OTk5Ljk5OTksXG4gIG1pbjogMFxufVxuXG5leHBvcnQgY29uc3QgYnVkZ2V0QW1vdW50Rm9ybWF0ID0ge1xuICBwcmVjaXNpb246IDIsXG4gIG5lZ2F0aXZlUGF0dGVybjogJzAuMDAnLFxuICBtaW46IDAsXG4gIG1heDogOTk5OTk5OTk5OTlcbn1cblxuZXhwb3J0IGNvbnN0IGl0ZW1RdWFudGl0eUZvcm1hdCA9IHtcbiAgcHJlY2lzaW9uOiAyLFxuICBuZWdhdGl2ZVBhdHRlcm46ICcwLjAwJyxcbiAgbWluOiAwLFxuICBtYXg6IDk5OTk5Ljk5XG59XG5cbmV4cG9ydCBjb25zdCBjdXJyZW5jeVJhdGVGb3JtYXQgPSB7XG4gIHByZWNpc2lvbjogNixcbiAgbmVnYXRpdmVQYXR0ZXJuOiAnMC4wMDAwMDAnLFxuICBtYXg6IDEwMDAsXG4gIG1pbjogMC4wMDAwMDFcbn1cblxuZXhwb3J0IGNvbnN0IHVuc2F2ZURpYWxvZ09wdGlvbnMgPSB7XG4gIGRlc2NyaXB0aW9uOiAnWW91IGhhdmUgZWRpdCBpbmxpbmUgb24gc2V2ZXJhbCBjZWxsKHMpLiBEbyB5b3Ugd2FudCB0byBzYXZlIHRoZW0/JyxcbiAgYnV0dG9uczogW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnc2F2ZScsXG4gICAgICBhY3Rpb246ICdzYXZlJ1xuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiRG9uJ3Qgc2F2ZVwiLFxuICAgICAgYWN0aW9uOiAnJ1xuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdjYW5jZWwnLFxuICAgICAgYWN0aW9uOiAnY2FuY2VsJ1xuICAgIH1cbiAgXVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uLCBBY3Rpb25DcmVhdG9yV2l0aE9wdGlvbmFsUGF5bG9hZCB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuZnVuY3Rpb24gY3JlYXRlRXh0cmFBY3Rpb25zPE5hbWUgZXh0ZW5kcyBzdHJpbmcsIEFjdGlvbk5hbWUgZXh0ZW5kcyBzdHJpbmcsIEFjdGlvblR5cGUgZXh0ZW5kcyBzdHJpbmc+KFxuICBuYW1lOiBOYW1lLFxuICBhY3Rpb25zOiBSZWNvcmQ8QWN0aW9uTmFtZSwgQWN0aW9uVHlwZT5cbikge1xuICBjb25zdCBleHRyYUFjdGlvbnMgPSB7fSBhcyBSZWNvcmQ8QWN0aW9uTmFtZSwgQWN0aW9uQ3JlYXRvcldpdGhPcHRpb25hbFBheWxvYWQ8YW55Pj5cbiAgXy5mb3JJbihhY3Rpb25zLCAodmFsdWUsIGtleSkgPT4ge1xuICAgIGV4dHJhQWN0aW9uc1trZXldID0gY3JlYXRlQWN0aW9uKGAke25hbWV9LyR7dmFsdWV9YClcbiAgfSlcbiAgcmV0dXJuIGV4dHJhQWN0aW9uc1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFeHRyYUFjdGlvbnNcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRWYWx1ZSA9IChpdGVtcywgaXNHZXRGaXJzdEl0ZW0pID0+IHtcbiAgY29uc3QgZmluZE9iaiA9IF8uZmluZChpdGVtcywgeyBpc19kZWZhdWx0OiB0cnVlLCBzdGF0dXM6IHRydWUgfSlcbiAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgaWYgKF8uaXNOaWwoZmluZE9iaikgJiYgaXNHZXRGaXJzdEl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbXNbMF1cbiAgfVxuICByZXR1cm4gZmluZE9iaiB8fCBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVzKHBhcmFtcywgb2JqLCBkZWZhdWx0VmFsdWUgPSB7fSBhcyBhbnksIGlzR2V0Rmlyc3RJdGVtID0gZmFsc2UsIHBLZXkgPSAnaWQnKSB7XG4gIGNvbnN0IG1hcFZhbHVlID0ge31cbiAgXy5mb3JJbihvYmosICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgY29uc3QgZ2V0VmFsdWVzQnlQYXRoID0gXy5nZXQocGFyYW1zLCB2YWx1ZSlcbiAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBnZXREZWZhdWx0VmFsdWUoZ2V0VmFsdWVzQnlQYXRoLCBpc0dldEZpcnN0SXRlbSlcbiAgICBtYXBWYWx1ZVtrZXldID0gXy5pc05pbChkZWZhdWx0VmFsdWUpID8gbnVsbCA6IGRlZmF1bHRWYWx1ZVtwS2V5XVxuICB9KVxuICByZXR1cm4geyAuLi5kZWZhdWx0VmFsdWUsIC4uLm1hcFZhbHVlIH1cbn1cbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHR5cGUgeyBJdGVtRGV0YWlsIH0gZnJvbSAnQC90eXBlcy9JdGVtJ1xuaW1wb3J0IHR5cGUgeyBBc3NlbWJseURldGFpbCB9IGZyb20gJ0AvdHlwZXMvQXNzZW1ibHknXG5cbmV4cG9ydCBjb25zdCBpc0Fzc2VtYmx5ID0gKHBhcnQ6IEl0ZW1EZXRhaWwgfCBBc3NlbWJseURldGFpbCkgPT4gQm9vbGVhbihfLmdldChwYXJ0LCAnaXNfYXNzZW1ibHknKSlcblxuZXhwb3J0IGNvbnN0IGlzQXNzZW1ibHlCeURwbiA9IChkcG46IHN0cmluZykgPT4gXy5pbmRleE9mKGRwbiwgJ0cnKSAhPT0gLTFcblxuZXhwb3J0IGRlZmF1bHQgaXNBc3NlbWJseVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhvb2tmb3JtL3Jlc29sdmVycy95dXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob29rLWZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=