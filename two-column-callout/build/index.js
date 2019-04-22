/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    MediaUpload = _wp$editor.MediaUpload,
    URLInput = _wp$editor.URLInput;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    IconButton = _wp$components.IconButton;
var blockStyle = {};
registerBlockType('qm-gutenberg-blocks/two-column-callout', {
  title: __('Two Column Callout', 'qm-gutenberg-blocks'),
  icon: 'universal-access-alt',
  category: 'layout',
  attributes: {
    heading: {
      type: 'array',
      source: 'children',
      selector: 'h1'
    },
    content: {
      type: 'array',
      source: 'children',
      selector: 'p'
    },
    alignment: {
      type: 'string',
      default: 'none'
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src'
    },
    text: {
      type: 'string',
      source: 'text',
      selector: 'a'
    },
    url: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: 'a'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        content = _props$attributes.content,
        heading = _props$attributes.heading,
        alignment = _props$attributes.alignment,
        mediaID = _props$attributes.mediaID,
        mediaURL = _props$attributes.mediaURL,
        text = _props$attributes.text,
        url = _props$attributes.url,
        attributes = props.attributes,
        setAttributes = props.setAttributes,
        className = props.className,
        isSelected = props.isSelected;

    var onChangeHeading = function onChangeHeading(newHeading) {
      setAttributes({
        heading: newHeading
      });
    };

    var onChangeContent = function onChangeContent(newContent) {
      setAttributes({
        content: newContent
      });
    };

    var onChangeAlignment = function onChangeAlignment(newAlignment) {
      props.setAttributes({
        alignment: newAlignment === undefined ? 'none' : newAlignment
      });
    };

    var onSelectImage = function onSelectImage(media) {
      setAttributes({
        mediaURL: media.url,
        mediaID: media.id
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "two-column-callout"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bg-img h-100 w-100"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "col-md-7 d-flex align-items-center order-2 order-md-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mb-5 d-flex flex-column"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      value: alignment,
      onChange: onChangeAlignment
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "h1",
      className: "mb-4",
      style: {
        textAlign: alignment
      },
      onChange: onChangeHeading,
      value: heading
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "p",
      className: "mb-5",
      style: {
        textAlign: alignment
      },
      onChange: onChangeContent,
      value: content
    }), isSelected ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      id: "example-input-field",
      className: "button btn btn-primary btn-md mr-md-auto ml-md-0 mx-auto",
      label: __('Link Text'),
      value: text,
      onChange: function onChange(text) {
        return setAttributes({
          text: text
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('Link URL')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", {
      className: "",
      onSubmit: function onSubmit(event) {
        return event.preventDefault();
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInput, {
      className: "url",
      value: url,
      onChange: function onChange(url) {
        return setAttributes({
          url: url
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
      icon: "editor-break",
      label: __('Apply'),
      type: "submit"
    }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      class: "btn btn-primary btn-md mr-md-auto ml-md-0 mx-auto",
      href: url
    }, text || __('Edit link'))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "col-md-5 order-1 order-md-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: mediaID,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: mediaID ? 'image-button' : 'button button-large',
          onClick: open
        }, !mediaID ? __('Upload Image', 'qm-gutenberg-blocks') : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          src: mediaURL,
          alt: __('Upload Recipe Image', 'qm-gutenberg-blocks')
        }));
      }
    })))));
  },
  save: function save(props) {
    var className = props.className,
        attributes = props.attributes,
        setAttributes = props.setAttributes,
        _props$attributes2 = props.attributes,
        mediaURL = _props$attributes2.mediaURL,
        url = _props$attributes2.url,
        text = _props$attributes2.text;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "two-column-callout"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bg-img h-100 w-100"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "col-md-7 d-flex align-items-center order-2 order-md-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mb-5 d-flex flex-column"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      className: "mb-4 gutenberg-examples-align-".concat(props.attributes.alignment),
      tagName: "h1",
      value: props.attributes.heading
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      className: "mb-5 gutenberg-examples-align-".concat(props.attributes.alignment),
      tagName: "p",
      value: props.attributes.content
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "btn btn-primary btn-md mr-md-auto ml-md-0 mx-auto",
      href: url
    }, text))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "col-md-5 order-1 order-md-2"
    }, mediaURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: "img-fluid mx-auto d-block",
      src: mediaURL,
      alt: __('Recipe Image yo', 'qm-gutenberg-blocks')
    })))));
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map